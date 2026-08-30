import {
  SKIP_ERROR_HANDLER
} from "./chunk-MYZVJCXP.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-7KUBODN6.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// node_modules/@capacitor/push-notifications/dist/esm/index.js
var PushNotifications = registerPlugin("PushNotifications", {});

// node_modules/@capacitor/preferences/dist/esm/index.js
var Preferences = registerPlugin("Preferences", {
  web: () => import("./chunk-JUZGFEYZ.js").then((m) => new m.PreferencesWeb())
});

// src/app/core/services/device-token.service.ts
var DeviceTokenService = class _DeviceTokenService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.DEVICE_TOKENS;
  constructor(http) {
    this.http = http;
  }
  /**
   * Register a device token for push notifications
   */
  registerToken(token, platform, deviceModel) {
    const detectedPlatform = platform || Capacitor.getPlatform();
    const headers = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    return this.http.post(`${this.apiUrl}/register`, {
      token,
      platform: detectedPlatform,
      deviceModel: deviceModel || this.getDeviceModel()
    }, { headers });
  }
  /**
   * Unregister a device token (e.g., on logout)
   */
  unregisterToken(token) {
    const headers = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    return this.http.post(`${this.apiUrl}/unregister`, {
      token
    }, { headers });
  }
  /**
   * Get all device tokens for the current user
   */
  getMyTokens() {
    return this.http.get(`${this.apiUrl}/my-tokens`);
  }
  /**
   * Send a test push notification to the current user
   */
  sendTestNotification() {
    return this.http.post(`${this.apiUrl}/test`, {});
  }
  /**
   * Try to get device model information
   */
  getDeviceModel() {
    if (typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent;
      if (userAgent.includes("Android")) {
        const match = userAgent.match(/Android[^;]+;\s*([^)]+)/);
        return match ? match[1].trim() : "Android Device";
      } else if (userAgent.includes("iPhone")) {
        return "iPhone";
      } else if (userAgent.includes("iPad")) {
        return "iPad";
      }
    }
    return void 0;
  }
  static \u0275fac = function DeviceTokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeviceTokenService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeviceTokenService, factory: _DeviceTokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeviceTokenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/fcm-push-notification.service.ts
var FcmPushNotificationService = class _FcmPushNotificationService {
  router;
  deviceTokenService;
  fcmToken = null;
  fcmTokenSubject = new BehaviorSubject(null);
  fcmToken$ = this.fcmTokenSubject.asObservable();
  notificationReceivedSubject = new BehaviorSubject(null);
  notificationReceived$ = this.notificationReceivedSubject.asObservable();
  initialized = false;
  constructor(router, deviceTokenService) {
    this.router = router;
    this.deviceTokenService = deviceTokenService;
  }
  /**
   * Check if push notifications are supported (native mobile only)
   */
  isSupported() {
    return Capacitor.isNativePlatform();
  }
  /**
   * Get the current platform
   */
  getPlatform() {
    return Capacitor.getPlatform();
  }
  /**
   * Initialize push notifications
   * Should be called after user login
   */
  async initialize() {
    if (!this.isSupported()) {
      console.log("Push notifications not supported on this platform");
      return;
    }
    if (this.initialized) {
      console.log("Push notifications already initialized");
      return;
    }
    try {
      const permissionStatus = await PushNotifications.checkPermissions();
      if (permissionStatus.receive === "prompt") {
        const result = await PushNotifications.requestPermissions();
        if (result.receive !== "granted") {
          return;
        }
      } else if (permissionStatus.receive !== "granted") {
        return;
      }
      this.initialized = true;
      this.setupListeners();
      await PushNotifications.register();
    } catch (error) {
      this.initialized = false;
      console.error("Error initializing push notifications:", error);
    }
  }
  /**
   * Set up push notification listeners
   */
  setupListeners() {
    PushNotifications.addListener("registration", async (token) => {
      let registrationToken;
      if (Capacitor.getPlatform() === "ios") {
        const fcmToken = await this.waitForFcmToken();
        if (!fcmToken) {
          console.error("Could not retrieve FCM token on iOS");
          return;
        }
        registrationToken = fcmToken;
      } else {
        registrationToken = token.value;
      }
      console.log("FCM Token ready:", registrationToken);
      this.fcmToken = registrationToken;
      this.fcmTokenSubject.next(registrationToken);
      await this.registerTokenWithBackend(registrationToken);
    });
    PushNotifications.addListener("registrationError", (error) => {
      console.error("Push notification registration error:", error);
    });
    PushNotifications.addListener("pushNotificationReceived", (notification) => {
      console.log("Push notification received in foreground:", notification);
      this.notificationReceivedSubject.next(notification);
    });
    PushNotifications.addListener("pushNotificationActionPerformed", (action) => {
      console.log("Push notification action performed:", action);
      const data = action.notification.data;
      if (data?.redirectUrl) {
        let url = data.redirectUrl;
        const reclamationMatch = url.match(/^\/reclamations\/(\d+)$/);
        if (reclamationMatch) {
          url = `/reclamations?id=${reclamationMatch[1]}`;
        }
        this.router.navigateByUrl(url).then((success) => console.log("Navigation success:", success), (error) => console.error("Navigation error:", error));
      } else if (data?.type) {
        this.handleNotificationNavigation(data.type, data);
      }
    });
  }
  /**
   * Handle navigation based on notification type
   */
  handleNotificationNavigation(type, data) {
    switch (type) {
      case "Event":
        if (data.eventId) {
          this.router.navigate(["/events/detail", data.eventId]);
        } else {
          this.router.navigate(["/events"]);
        }
        break;
      case "Fee":
        this.router.navigate(["/fees"]);
        break;
      case "Message":
        this.router.navigate(["/messages"]);
        break;
      case "Attendance":
      case "CheckIn":
      case "CheckOut":
        this.router.navigate(["/daily-activities"]);
        break;
      case "Reclamation":
        this.router.navigate(["/reclamations"]);
        break;
      default:
        this.router.navigate(["/notifications"]);
        break;
    }
  }
  /**
   * Wait for Firebase to generate and store the FCM token in Preferences.
   * AppDelegate stores it under key 'FCMToken' after receiving it from Firebase Messaging.
   */
  async waitForFcmToken(maxRetries = 20, delayMs = 2e3) {
    for (let i = 0; i < maxRetries; i++) {
      const { value } = await Preferences.get({ key: "FCMToken" });
      if (value) {
        return value;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
    return null;
  }
  /**
   * Register the FCM token with the backend
   */
  async registerTokenWithBackend(token) {
    try {
      const platform = this.getPlatform();
      await this.deviceTokenService.registerToken(token, platform).toPromise();
      console.log("FCM token registered with backend successfully");
    } catch (error) {
      console.error("Failed to register FCM token with backend:", JSON.stringify(error));
    }
  }
  /**
   * Unregister from push notifications (call on logout)
   */
  async unregister() {
    if (!this.isSupported()) {
      return;
    }
    try {
      if (this.fcmToken) {
        await this.deviceTokenService.unregisterToken(this.fcmToken).toPromise();
      }
      await PushNotifications.removeAllListeners();
      this.fcmToken = null;
      this.fcmTokenSubject.next(null);
      this.initialized = false;
      console.log("Push notifications unregistered");
    } catch (error) {
      console.error("Error unregistering push notifications:", error);
    }
  }
  /**
   * Get the current FCM token
   */
  getToken() {
    return this.fcmToken;
  }
  /**
   * Check if notifications are enabled
   */
  async checkPermissions() {
    if (!this.isSupported()) {
      return false;
    }
    const status = await PushNotifications.checkPermissions();
    return status.receive === "granted";
  }
  /**
   * Get delivered notifications (Android only)
   */
  async getDeliveredNotifications() {
    if (!this.isSupported()) {
      return [];
    }
    const result = await PushNotifications.getDeliveredNotifications();
    return result.notifications;
  }
  /**
   * Remove all delivered notifications
   */
  async removeAllDeliveredNotifications() {
    if (!this.isSupported()) {
      return;
    }
    await PushNotifications.removeAllDeliveredNotifications();
  }
  static \u0275fac = function FcmPushNotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FcmPushNotificationService)(\u0275\u0275inject(Router), \u0275\u0275inject(DeviceTokenService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FcmPushNotificationService, factory: _FcmPushNotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FcmPushNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: DeviceTokenService }], null);
})();

export {
  FcmPushNotificationService
};
//# sourceMappingURL=chunk-RMTREPAI.js.map
