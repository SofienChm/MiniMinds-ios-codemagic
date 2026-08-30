import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";

// src/app/core/services/page-title.service.ts
var PageTitleService = class _PageTitleService {
  titleSubject = new BehaviorSubject("");
  title$ = this.titleSubject.asObservable();
  setTitle(title) {
    this.titleSubject.next(title);
  }
  getTitle() {
    return this.titleSubject.value;
  }
  static \u0275fac = function PageTitleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageTitleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageTitleService, factory: _PageTitleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageTitleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  PageTitleService
};
//# sourceMappingURL=chunk-CO3LWQR2.js.map
