import {
  Router
} from "./chunk-MW573DHT.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  Injector,
  firstValueFrom,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/core/services/auth.ts
var AuthService = class _AuthService {
  http;
  router;
  injector;
  apiUrl = ApiConfig.ENDPOINTS.AUTH;
  mailApiUrl = ApiConfig.ENDPOINTS.MAIL;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(http, router, injector) {
    this.http = http;
    this.router = router;
    this.injector = injector;
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }
  sendPasswordResetEmail(email) {
    return this.http.post(`${this.mailApiUrl}/send-password-reset`, { email });
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap(async (response) => {
      localStorage.setItem("currentUser", JSON.stringify(response));
      localStorage.setItem("token", response.token);
      if (response.refreshToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
      }
      try {
        const payload = JSON.parse(atob(response.token.split(".")[1]));
        const userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || payload.nameid || payload.sub;
        if (userId) {
          localStorage.setItem("userId", userId);
        }
      } catch (e) {
        console.error("Failed to extract userId from token", e);
      }
      this.currentUserSubject.next(response);
      const existingUser = this.getCurrentUser();
      if (existingUser) {
        try {
          const { FcmPushNotificationService } = await import("./chunk-5M46YTR4.js");
          const fcmService = this.injector.get(FcmPushNotificationService);
          if (fcmService.isSupported()) {
            await fcmService.unregister();
          }
        } catch (error) {
          console.error("Error unregistering FCM on account switch:", error);
        }
      }
      if (response.role !== "SuperAdmin") {
        try {
          const { TenantFeatureService } = await import("./chunk-RTL6NZPE.js");
          const featureService = this.injector.get(TenantFeatureService);
          featureService.getMyFeatures().subscribe({
            next: () => console.log("Tenant features loaded successfully"),
            error: (err) => console.error("Failed to load tenant features:", err)
          });
        } catch (error) {
          console.error("Error loading tenant features:", error);
        }
      }
    }));
  }
  register(data) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  async logout() {
    const refreshToken = this.getRefreshToken();
    if (refreshToken) {
      try {
        await firstValueFrom(this.http.post(`${this.apiUrl}/logout`, { refreshToken }));
      } catch (error) {
        console.error("Error revoking refresh token:", error);
      }
    }
    try {
      const { FcmPushNotificationService } = await import("./chunk-5M46YTR4.js");
      const fcmService = this.injector.get(FcmPushNotificationService);
      if (fcmService.isSupported()) {
        await fcmService.unregister();
      }
    } catch (error) {
      console.error("Error unregistering push notifications:", error);
    }
    try {
      const { TenantFeatureService } = await import("./chunk-RTL6NZPE.js");
      const featureService = this.injector.get(TenantFeatureService);
      featureService.clearCache();
    } catch (error) {
      console.error("Error clearing feature cache:", error);
    }
    try {
      const { OfflineCacheService } = await import("./chunk-3WLZXHBJ.js");
      const cacheService = this.injector.get(OfflineCacheService);
      cacheService.clear();
    } catch (error) {
      console.error("Error clearing offline HTTP cache:", error);
    }
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    this.currentUserSubject.next(null);
    this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  /**
   * Exchange the refresh token for a new access + refresh token pair.
   * Called by the auth interceptor when the access token is expired or a 401 is received.
   */
  refreshSession() {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error("No refresh token available"));
    }
    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken }).pipe(tap((response) => {
      localStorage.setItem("currentUser", JSON.stringify(response));
      localStorage.setItem("token", response.token);
      if (response.refreshToken) {
        localStorage.setItem("refreshToken", response.refreshToken);
      }
      this.currentUserSubject.next(response);
    }));
  }
  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const expiryTime = payload.exp * 1e3;
        if (expiryTime > Date.now() + 6e4) {
          return true;
        }
      } catch {
      }
    }
    return !!this.getRefreshToken();
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  updateCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  getUserRole() {
    const user = this.getCurrentUser();
    return user?.role || null;
  }
  getParentId() {
    const user = this.getCurrentUser();
    if (!user?.token)
      return null;
    try {
      const payload = JSON.parse(atob(user.token.split(".")[1]));
      return payload.ParentId ? parseInt(payload.ParentId) : null;
    } catch {
      return null;
    }
  }
  getTeacherId() {
    const user = this.getCurrentUser();
    if (!user?.token)
      return null;
    try {
      const payload = JSON.parse(atob(user.token.split(".")[1]));
      return payload.TeacherId ? parseInt(payload.TeacherId) : null;
    } catch {
      return null;
    }
  }
  isAdmin() {
    return this.getUserRole() === "Admin";
  }
  isParent() {
    return this.getUserRole() === "Parent";
  }
  isTeacher() {
    return this.getUserRole() === "Teacher";
  }
  isSuperAdmin() {
    return this.getUserRole() === "SuperAdmin";
  }
  getTenantId() {
    const user = this.getCurrentUser();
    return user?.tenantId || null;
  }
  getTenantName() {
    const user = this.getCurrentUser();
    return user?.tenantName || null;
  }
  getUserId() {
    return localStorage.getItem("userId");
  }
  updateLanguage(language) {
    return this.http.put(`${this.apiUrl}/update-language`, { Language: language }).pipe(tap(() => {
      const user = this.getCurrentUser();
      if (user) {
        const updated = __spreadProps(__spreadValues({}, user), { preferredLanguage: language });
        this.updateCurrentUser(updated);
      }
      localStorage.setItem("lang", language);
    }));
  }
  updateProfilePicture(profilePicture) {
    const user = this.getCurrentUser();
    if (user) {
      const updated = __spreadProps(__spreadValues({}, user), { profilePicture });
      this.updateCurrentUser(updated);
    }
  }
  /**
   * Delete user account and all associated data (Google Play Store requirement)
   */
  deleteAccount() {
    return this.http.delete(`${this.apiUrl}/delete-account`).pipe(tap(async () => {
      try {
        const { FcmPushNotificationService } = await import("./chunk-5M46YTR4.js");
        const fcmService = this.injector.get(FcmPushNotificationService);
        if (fcmService.isSupported()) {
          await fcmService.unregister();
        }
      } catch (error) {
        console.error("Error unregistering push notifications:", error);
      }
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("lang");
      this.currentUserSubject.next(null);
      this.router.navigate(["/login"]);
    }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(Injector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: Injector }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-2FXTNIWG.js.map
