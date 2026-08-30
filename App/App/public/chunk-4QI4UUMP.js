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

// src/app/features/fee/fee.service.ts
var FeeService = class _FeeService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.FEES;
  constructor(http) {
    this.http = http;
  }
  // Get all fees
  getFees() {
    return this.http.get(this.apiUrl);
  }
  // Get fees by child
  getFeesByChild(childId) {
    return this.http.get(`${this.apiUrl}/child/${childId}`);
  }
  // Get fees by parent
  getFeesByParent(parentId) {
    return this.http.get(`${this.apiUrl}/parent/${parentId}`);
  }
  // Get single fee
  getFee(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Get fee by id (alias)
  getFeeById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Update fee
  updateFee(id, fee) {
    return this.http.put(`${this.apiUrl}/${id}`, fee);
  }
  // Create new fee
  createFee(fee) {
    return this.http.post(this.apiUrl, fee);
  }
  // Create monthly fees for all children
  createMonthlyFeesForAll(amount, description, dueDate) {
    return this.http.post(`${this.apiUrl}/bulk-monthly`, {
      amount,
      description,
      dueDate
    });
  }
  // Pay fee
  payFee(feeId, paymentData) {
    return this.http.put(`${this.apiUrl}/${feeId}/pay`, paymentData);
  }
  // Update overdue fees
  updateOverdueFees() {
    return this.http.put(`${this.apiUrl}/update-overdue`, {});
  }
  // Get fees summary
  getFeesSummary() {
    return this.http.get(`${this.apiUrl}/summary`);
  }
  // Delete fee
  deleteFee(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function FeeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeeService, factory: _FeeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FeeService
};
//# sourceMappingURL=chunk-4QI4UUMP.js.map
