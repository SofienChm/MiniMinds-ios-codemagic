import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";

// src/app/core/services/prefix/prefix.service.ts
var PrefixService = class _PrefixService {
  childPrefixSubject = new BehaviorSubject(this.getStoredPrefix("child"));
  parentPrefixSubject = new BehaviorSubject(this.getStoredPrefix("parent"));
  educatorPrefixSubject = new BehaviorSubject(this.getStoredPrefix("educator"));
  childPrefix$ = this.childPrefixSubject.asObservable();
  parentPrefix$ = this.parentPrefixSubject.asObservable();
  educatorPrefix$ = this.educatorPrefixSubject.asObservable();
  getStoredPrefix(type) {
    const defaults = { child: "Child", parent: "Parent", educator: "Educator" };
    return localStorage.getItem(`${type}Prefix`) || defaults[type];
  }
  getChildPrefix() {
    return this.childPrefixSubject.value;
  }
  getParentPrefix() {
    return this.parentPrefixSubject.value;
  }
  getEducatorPrefix() {
    return this.educatorPrefixSubject.value;
  }
  setChildPrefix(prefix) {
    localStorage.setItem("childPrefix", prefix);
    this.childPrefixSubject.next(prefix);
  }
  setParentPrefix(prefix) {
    localStorage.setItem("parentPrefix", prefix);
    this.parentPrefixSubject.next(prefix);
  }
  setEducatorPrefix(prefix) {
    localStorage.setItem("educatorPrefix", prefix);
    this.educatorPrefixSubject.next(prefix);
  }
  static \u0275fac = function PrefixService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PrefixService, factory: _PrefixService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PrefixService
};
//# sourceMappingURL=chunk-IEUTH76P.js.map
