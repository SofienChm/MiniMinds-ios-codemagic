import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/static-fees/static-fees.service.ts
var StaticFeesService = class _StaticFeesService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.STATIC_FEES;
  staticFeesSubject = new BehaviorSubject([]);
  staticFees$ = this.staticFeesSubject.asObservable();
  summarySubject = new BehaviorSubject(null);
  summary$ = this.summarySubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  // Get all static fees with optional filters
  getStaticFees(filters) {
    let params = new HttpParams();
    if (filters?.status)
      params = params.set("status", filters.status);
    if (filters?.category)
      params = params.set("category", filters.category);
    if (filters?.paymentMethod)
      params = params.set("paymentMethod", filters.paymentMethod);
    return this.http.get(this.apiUrl, { params }).pipe(tap((fees) => this.staticFeesSubject.next(fees)));
  }
  // Get summary
  getSummary() {
    return this.http.get(`${this.apiUrl}/summary`).pipe(tap((summary) => this.summarySubject.next(summary)));
  }
  // Get single static fee by ID
  getStaticFeeById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Create new static fee
  createStaticFee(dto) {
    return this.http.post(this.apiUrl, dto).pipe(tap(() => this.refreshData()));
  }
  // Update static fee
  updateStaticFee(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(tap(() => this.refreshData()));
  }
  // Mark as paid
  markAsPaid(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}/mark-paid`, dto || {}).pipe(tap(() => this.refreshData()));
  }
  // Mark as pending
  markAsPending(id) {
    return this.http.put(`${this.apiUrl}/${id}/mark-pending`, {}).pipe(tap(() => this.refreshData()));
  }
  // Delete static fee
  deleteStaticFee(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.refreshData()));
  }
  // Get static fees for the logged-in parent
  getMyStaticFees() {
    return this.http.get(`${this.apiUrl}/my-fees`);
  }
  // Generate a unique reference number
  generateReference() {
    return this.http.get(`${this.apiUrl}/generate-reference`);
  }
  // Create bulk monthly fees for all parents
  createBulkMonthlyFees(data) {
    return this.http.post(`${this.apiUrl}/bulk-monthly`, data).pipe(tap(() => this.refreshData()));
  }
  // Get categories
  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }
  // Get payment methods
  getPaymentMethods() {
    return this.http.get(`${this.apiUrl}/payment-methods`);
  }
  // Refresh data
  refreshData() {
    this.getStaticFees().subscribe();
    this.getSummary().subscribe();
  }
  // Get current fees value
  get currentFees() {
    return this.staticFeesSubject.getValue();
  }
  // Get current summary value
  get currentSummary() {
    return this.summarySubject.getValue();
  }
  static \u0275fac = function StaticFeesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaticFeesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaticFeesService, factory: _StaticFeesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticFeesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  StaticFeesService
};
//# sourceMappingURL=chunk-G5VH4N7Z.js.map
