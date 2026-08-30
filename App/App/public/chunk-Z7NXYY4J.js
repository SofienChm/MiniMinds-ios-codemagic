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
import {
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/features/leaves/leaves.service.ts
var LeavesService = class _LeavesService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.LEAVES;
  constructor(http) {
    this.http = http;
  }
  requestLeave(dto) {
    return this.http.post(`${this.apiUrl}/request`, dto);
  }
  getMyLeaves() {
    return this.http.get(`${this.apiUrl}/my`);
  }
  getAllLeaves(status) {
    const url = status ? `${this.apiUrl}?status=${status}` : this.apiUrl;
    return this.http.get(url);
  }
  approveLeave(id) {
    return this.http.put(`${this.apiUrl}/${id}/approve`, {});
  }
  rejectLeave(id) {
    return this.http.put(`${this.apiUrl}/${id}/reject`, {});
  }
  getMyBalance() {
    return this.http.get(`${this.apiUrl}/balance`);
  }
  // Admin: create a leave for a specific teacher
  adminCreateLeave(teacherId, dto) {
    const payload = __spreadValues({ teacherId }, dto);
    if (dto.approve !== void 0)
      payload.approve = dto.approve;
    return this.http.post(`${this.apiUrl}/admin/create`, payload);
  }
  static \u0275fac = function LeavesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeavesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeavesService, factory: _LeavesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeavesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  LeavesService
};
//# sourceMappingURL=chunk-Z7NXYY4J.js.map
