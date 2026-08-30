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

// src/app/features/classes/classes.service.ts
var ClassesService = class _ClassesService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.CLASSES;
  constructor(http) {
    this.http = http;
  }
  getClasses() {
    return this.http.get(this.apiUrl);
  }
  getClass(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createClass(classData) {
    return this.http.post(this.apiUrl, classData);
  }
  updateClass(id, classData) {
    return this.http.put(`${this.apiUrl}/${id}`, classData);
  }
  deleteClass(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ClassesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClassesService, factory: _ClassesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ClassesService
};
//# sourceMappingURL=chunk-J7YF57MV.js.map
