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
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/core/services/tenant.service.ts
var TenantService = class _TenantService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.TENANTS;
  tenantsSubject = new BehaviorSubject([]);
  tenants$ = this.tenantsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  loadTenants() {
    return this.http.get(this.apiUrl).pipe(tap((tenants) => this.tenantsSubject.next(tenants)));
  }
  getTenant(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createTenant(tenant) {
    return this.http.post(this.apiUrl, tenant).pipe(tap((newTenant) => {
      const current = this.tenantsSubject.value;
      this.tenantsSubject.next([...current, newTenant]);
    }));
  }
  updateTenant(id, tenant) {
    return this.http.put(`${this.apiUrl}/${id}`, tenant).pipe(tap(() => {
      const current = this.tenantsSubject.value;
      const index = current.findIndex((t) => t.id === id);
      if (index !== -1) {
        current[index] = __spreadValues(__spreadValues({}, current[index]), tenant);
        this.tenantsSubject.next([...current]);
      }
    }));
  }
  updateTenantStatus(id, isActive) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, isActive).pipe(tap(() => {
      const current = this.tenantsSubject.value;
      const index = current.findIndex((t) => t.id === id);
      if (index !== -1) {
        current[index] = __spreadProps(__spreadValues({}, current[index]), { isActive });
        this.tenantsSubject.next([...current]);
      }
    }));
  }
  deleteTenant(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => {
      const current = this.tenantsSubject.value;
      this.tenantsSubject.next(current.filter((t) => t.id !== id));
    }));
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
  static \u0275fac = function TenantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantService, factory: _TenantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TenantService
};
//# sourceMappingURL=chunk-CKPEZZTC.js.map
