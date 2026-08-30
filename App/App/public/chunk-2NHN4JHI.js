import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-JR6HYZ4P.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/billing.service.ts
var BillingService = class _BillingService {
  http;
  apiUrl = `${ApiConfig.BASE_URL}/tenantbilling`;
  constructor(http) {
    this.http = http;
  }
  getAll(filters) {
    let params = new HttpParams();
    if (filters?.tenantId)
      params = params.set("tenantId", filters.tenantId.toString());
    if (filters?.status)
      params = params.set("status", filters.status);
    if (filters?.year)
      params = params.set("year", filters.year.toString());
    if (filters?.month)
      params = params.set("month", filters.month.toString());
    return this.http.get(this.apiUrl, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getSummary() {
    return this.http.get(`${this.apiUrl}/summary`);
  }
  getByTenant(tenantId) {
    return this.http.get(`${this.apiUrl}/tenant/${tenantId}`);
  }
  getStats(year) {
    let params = new HttpParams();
    if (year)
      params = params.set("year", year.toString());
    return this.http.get(`${this.apiUrl}/stats`, { params });
  }
  create(billing) {
    return this.http.post(this.apiUrl, billing);
  }
  update(id, billing) {
    return this.http.put(`${this.apiUrl}/${id}`, billing);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, JSON.stringify(status), {
      headers: { "Content-Type": "application/json" }
    });
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function BillingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillingService, factory: _BillingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BillingService
};
//# sourceMappingURL=chunk-2NHN4JHI.js.map
