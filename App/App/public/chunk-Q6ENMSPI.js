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

// src/app/features/qr-checkin/qr-checkin.service.ts
var QrCheckinService = class _QrCheckinService {
  http;
  attendanceUrl = ApiConfig.ENDPOINTS.ATTENDANCE;
  qrCodeUrl = `${ApiConfig.BASE_URL}/qrcode`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Perform QR check-in for children
   */
  qrCheckIn(request) {
    return this.http.post(`${this.attendanceUrl}/QrCheckIn`, request);
  }
  /**
   * Perform QR check-out for children
   */
  qrCheckOut(request) {
    return this.http.post(`${this.attendanceUrl}/QrCheckOut`, request);
  }
  /**
   * Get my children's attendance status for today (Parent role)
   */
  getMyChildrenStatus() {
    return this.http.get(`${this.attendanceUrl}/MyChildren`);
  }
  /**
   * Get teacher's class children attendance status for today (Teacher role)
   */
  getTeacherChildrenStatus() {
    return this.http.get(`${this.attendanceUrl}/TeacherChildren`);
  }
  /**
   * Get all children attendance status for today (Admin role)
   */
  getAllChildrenStatus() {
    return this.http.get(`${this.attendanceUrl}/AllChildren`);
  }
  /**
   * Validate a QR code
   */
  validateQrCode(code) {
    return this.http.get(`${this.qrCodeUrl}/Validate/${encodeURIComponent(code)}`);
  }
  /**
   * Get school settings (for geofencing)
   */
  getSchoolSettings() {
    return this.http.get(`${this.qrCodeUrl}/Settings`);
  }
  /**
   * Get check-in QR code (admin)
   */
  getCheckInQrCode() {
    return this.http.get(`${this.qrCodeUrl}/CheckIn`);
  }
  /**
   * Get check-out QR code (admin)
   */
  getCheckOutQrCode() {
    return this.http.get(`${this.qrCodeUrl}/CheckOut`);
  }
  /**
   * Regenerate all QR codes (admin)
   */
  regenerateQrCodes() {
    return this.http.post(`${this.qrCodeUrl}/RegenerateAll`, {});
  }
  /**
   * Update school settings (admin)
   */
  updateSchoolSettings(settings) {
    return this.http.put(`${this.qrCodeUrl}/Settings`, settings);
  }
  static \u0275fac = function QrCheckinService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrCheckinService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrCheckinService, factory: _QrCheckinService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCheckinService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  QrCheckinService
};
//# sourceMappingURL=chunk-Q6ENMSPI.js.map
