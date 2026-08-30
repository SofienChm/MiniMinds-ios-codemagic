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

// src/app/features/educator/educator.service.ts
var EducatorService = class _EducatorService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.EDUCATORS;
  educators = [];
  educatorsSubject = new BehaviorSubject([]);
  educators$ = this.educatorsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  loadEducators(search) {
    if (search && search.trim()) {
      return this.http.get(this.apiUrl, { params: { search: search.trim() } });
    }
    return this.http.get(this.apiUrl);
  }
  addEducator(educator) {
    return this.http.post(this.apiUrl, educator);
  }
  updateEducator(educator) {
    return this.http.put(`${this.apiUrl}/${educator.id}`, educator);
  }
  deleteEducator(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getEducator(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  refreshEducators() {
    this.loadEducators().subscribe((educators) => {
      this.educators = educators;
      this.educatorsSubject.next([...this.educators]);
    });
  }
  static \u0275fac = function EducatorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducatorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EducatorService, factory: _EducatorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EducatorService
};
//# sourceMappingURL=chunk-XGGPRLZT.js.map
