import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";

// src/app/core/services/notification-preferences.service.ts
var NotificationPreferencesService = class _NotificationPreferencesService {
  http = inject(HttpClient);
  apiUrl = ApiConfig.ENDPOINTS.NOTIFICATION_PREFERENCES;
  preferencesSubject = new BehaviorSubject([]);
  preferences$ = this.preferencesSubject.asObservable();
  /**
   * Get current user's notification preferences
   */
  getPreferences() {
    return this.http.get(this.apiUrl).pipe(tap((response) => this.preferencesSubject.next(response.preferences)));
  }
  /**
   * Update notification preferences
   */
  updatePreferences(preferences) {
    return this.http.put(this.apiUrl, preferences).pipe(tap((response) => this.preferencesSubject.next(response.preferences)));
  }
  /**
   * Get all available notification types
   */
  getAvailableTypes() {
    return this.http.get(`${this.apiUrl}/types`);
  }
  /**
   * Check if a specific notification type is enabled
   */
  checkPreference(notificationType) {
    return this.http.get(`${this.apiUrl}/check/${notificationType}`);
  }
  static \u0275fac = function NotificationPreferencesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationPreferencesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationPreferencesService, factory: _NotificationPreferencesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationPreferencesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NotificationPreferencesService
};
//# sourceMappingURL=chunk-4EWG6MA4.js.map
