import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/permission.service.ts
var PermissionService = class _PermissionService {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  canEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }
  canDelete() {
    return this.authService.isAdmin();
  }
  canView() {
    return true;
  }
  canManageUsers() {
    return this.authService.isAdmin();
  }
  onlyAdmin() {
    return this.authService.isAdmin();
  }
  static \u0275fac = function PermissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionService)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionService, factory: _PermissionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }], null);
})();

export {
  PermissionService
};
//# sourceMappingURL=chunk-44XFFOCJ.js.map
