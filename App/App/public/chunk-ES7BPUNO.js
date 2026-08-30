import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NYEMFD63.js";

// src/app/features/super-admin/header-superadmin/header.ts
var _c0 = () => ({ exact: true });
function HeaderSuperadminComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pendingRequestsCount);
  }
}
var HeaderSuperadminComponent = class _HeaderSuperadminComponent {
  pendingRequestsCount = 0;
  subscriptions = [];
  constructor() {
  }
  ngOnInit() {
    this.loadPendingRequestsCount();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadPendingRequestsCount() {
  }
  static \u0275fac = function HeaderSuperadminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderSuperadminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderSuperadminComponent, selectors: [["app-header-superadmin"]], decls: 23, vars: 3, consts: [[1, "nav-superadmin"], ["routerLink", "/super-admin/dashboard", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "bi", "bi-house-fill"], ["routerLink", "/super-admin/tenants", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-building"], ["routerLink", "/super-admin/billing", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-currency-dollar"], ["routerLink", "/super-admin/demo-requests", "routerLinkActive", "active", 1, "nav-item"], [1, "icon-wrapper"], [1, "bi", "bi-send-fill"], ["class", "badge-notification", 4, "ngIf"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-person-fill"], [1, "badge-notification"]], template: function HeaderSuperadminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementStart(3, "span");
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "a", 3);
      \u0275\u0275element(6, "i", 4);
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Daycares");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Billing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "a", 7)(14, "div", 8);
      \u0275\u0275element(15, "i", 9);
      \u0275\u0275template(16, HeaderSuperadminComponent_span_16_Template, 2, 1, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "Requests");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275element(20, "i", 12);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Profile");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.pendingRequestsCount > 0);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.nav-superadmin[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: white;\n  padding: 10px 0 20px;\n  z-index: 1000;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: #64748B;\n  font-size: 11px;\n  padding: 5px 15px;\n  transition: all 0.2s ease;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 4px;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .badge-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.nav-superadmin[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #c4b5fd;\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderSuperadminComponent, [{
    type: Component,
    args: [{ selector: "app-header-superadmin", standalone: true, imports: [CommonModule, RouterModule], template: '  <div class="nav-superadmin">\r\n    <a routerLink="/super-admin/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-item">\r\n      <i class="bi bi-house-fill"></i>\r\n      <span>Home</span>\r\n    </a>\r\n    <a routerLink="/super-admin/tenants" routerLinkActive="active" class="nav-item">\r\n      <i class="bi bi-building"></i>\r\n      <span>Daycares</span>\r\n    </a>\r\n    <a routerLink="/super-admin/billing" routerLinkActive="active" class="nav-item">\r\n      <i class="bi bi-currency-dollar"></i>\r\n      <span>Billing</span>\r\n    </a>\r\n    <a routerLink="/super-admin/demo-requests" routerLinkActive="active" class="nav-item">\r\n      <div class="icon-wrapper">\r\n        <i class="bi bi-send-fill"></i>\r\n        <span class="badge-notification" *ngIf="pendingRequestsCount > 0">{{ pendingRequestsCount }}</span>\r\n      </div>\r\n      <span>Requests</span>\r\n    </a>\r\n    <a routerLink="/profile" routerLinkActive="active" class="nav-item">\r\n      <i class="bi bi-person-fill"></i>\r\n      <span>Profile</span>\r\n    </a>\r\n  </div>', styles: ["/* src/app/features/super-admin/header-superadmin/header.scss */\n.nav-superadmin {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: white;\n  padding: 10px 0 20px;\n  z-index: 1000;\n}\n.nav-superadmin .nav-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: #64748B;\n  font-size: 11px;\n  padding: 5px 15px;\n  transition: all 0.2s ease;\n}\n.nav-superadmin .nav-item i {\n  font-size: 20px;\n  margin-bottom: 4px;\n}\n.nav-superadmin .nav-item span {\n  font-weight: 500;\n}\n.nav-superadmin .nav-item .icon-wrapper {\n  position: relative;\n}\n.nav-superadmin .nav-item .icon-wrapper .badge-notification {\n  position: absolute;\n  top: -8px;\n  right: -10px;\n  background: #ef4444;\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 4px;\n}\n.nav-superadmin .nav-item.active {\n  color: var(--secondary-color);\n}\n.nav-superadmin .nav-item.active i {\n  color: var(--secondary-color);\n}\n.nav-superadmin .nav-item:hover:not(.active) {\n  color: #c4b5fd;\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderSuperadminComponent, { className: "HeaderSuperadminComponent", filePath: "src/app/features/super-admin/header-superadmin/header.ts", lineNumber: 13 });
})();

export {
  HeaderSuperadminComponent
};
//# sourceMappingURL=chunk-ES7BPUNO.js.map
