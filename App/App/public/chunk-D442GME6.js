import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/daily-activities/daily-activity.service.ts
var DailyActivityService = class _DailyActivityService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.DAILY_ACTIVITIES;
  constructor(http) {
    this.http = http;
  }
  getActivities(date) {
    if (date) {
      return this.http.get(`${this.apiUrl}/ByDate?date=${date}`);
    }
    return this.http.get(this.apiUrl);
  }
  getActivitiesByChild(childId, date) {
    const url = date ? `${this.apiUrl}/ByChild/${childId}?date=${date}` : `${this.apiUrl}/ByChild/${childId}`;
    return this.http.get(url);
  }
  getActivity(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addActivity(activity) {
    return this.http.post(this.apiUrl, activity);
  }
  addBulkActivity(activity) {
    return this.http.post(`${this.apiUrl}/Bulk`, activity);
  }
  updateActivity(activity) {
    return this.http.put(`${this.apiUrl}/${activity.id}`, activity);
  }
  deleteActivity(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function DailyActivityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyActivityService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DailyActivityService, factory: _DailyActivityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyActivityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DailyActivityService
};
//# sourceMappingURL=chunk-D442GME6.js.map
