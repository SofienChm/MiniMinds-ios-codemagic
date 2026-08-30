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

// src/app/features/attendance-sheet/attendance.service.ts
var AttendanceService = class _AttendanceService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.ATTENDANCE;
  constructor(http) {
    this.http = http;
  }
  getTodayAttendance() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return this.http.get(`${this.apiUrl}/ByDate?date=${today}`);
  }
  getTodayStats() {
    return this.http.get(`${this.apiUrl}/Today`);
  }
  checkIn(childId, notes) {
    return this.http.post(`${this.apiUrl}/CheckIn`, {
      childId,
      checkInNotes: notes
    });
  }
  checkOut(attendanceId, notes) {
    return this.http.post(`${this.apiUrl}/CheckOut/${attendanceId}`, notes);
  }
  getAttendanceByDate(date) {
    return this.http.get(`${this.apiUrl}/ByDate?date=${date}`);
  }
  static \u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AttendanceService
};
//# sourceMappingURL=chunk-QXM2DGJD.js.map
