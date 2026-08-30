import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/holiday/holiday.service.ts
var HolidayService = class _HolidayService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.HOLIDAYS;
  holidaysSubject = new BehaviorSubject([]);
  holidays$ = this.holidaysSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  getHolidays() {
    return this.http.get(this.apiUrl);
  }
  getHoliday(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createHoliday(holiday) {
    return this.http.post(this.apiUrl, holiday);
  }
  updateHoliday(id, holiday) {
    return this.http.put(`${this.apiUrl}/${id}`, holiday);
  }
  deleteHoliday(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  refreshHolidays() {
    this.getHolidays().subscribe((holidays) => {
      this.holidaysSubject.next(holidays);
    });
  }
  static \u0275fac = function HolidayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HolidayService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HolidayService, factory: _HolidayService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HolidayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  HolidayService
};
//# sourceMappingURL=chunk-EJ66QMTR.js.map
