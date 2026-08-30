import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  HostBinding,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/super-admin/dashboard/super-admin-dashboard.ts
var _c0 = () => ["/super-admin/tenants"];
var _c1 = () => ["/super-admin/tenants/add"];
var _c2 = () => ["/super-admin/billing"];
var _c3 = () => ["/super-admin/demo-requests"];
var _c4 = () => [1, 2, 3];
var _c5 = (a0) => ["/super-admin/tenants/detail", a0];
var _c6 = (a0) => ["/super-admin/tenants/edit", a0];
var _c7 = () => [1, 2, 3, 4, 5];
var _c8 = (a0, a1, a2, a3) => ({ "bi-star": a0, "bi-star-fill": a1, "bi-gem": a2, "bi-trophy": a3 });
var _c9 = () => ({ status: "inactive" });
function SuperAdminDashboard_div_0_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.currentUser.profilePicture, \u0275\u0275sanitizeUrl)("alt", ctx_r1.currentUser.firstName);
  }
}
function SuperAdminDashboard_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.firstName == null ? null : (tmp_2_0 = ctx_r1.currentUser.firstName.charAt(0)) == null ? null : tmp_2_0.toUpperCase()) || "A", " ");
  }
}
function SuperAdminDashboard_div_0_div_19_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const tenant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", tenant_r4.logo, \u0275\u0275sanitizeUrl)("alt", tenant_r4.name);
  }
}
function SuperAdminDashboard_div_0_div_19_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r4.name.charAt(0).toUpperCase());
  }
}
function SuperAdminDashboard_div_0_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("mousedown", function SuperAdminDashboard_div_0_div_19_div_1_Template_div_mousedown_0_listener() {
      const tenant_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToTenantDetail(tenant_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275template(2, SuperAdminDashboard_div_0_div_19_div_1_img_2_Template, 1, 2, "img", 59)(3, SuperAdminDashboard_div_0_div_19_div_1_span_3_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 61)(5, "span", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 63);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tenant_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tenant_r4.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tenant_r4.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r4.email || tenant_r4.subdomain);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tenant_r4.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function SuperAdminDashboard_div_0_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SUPER_ADMIN.NO_DAYCARES_FOUND"));
  }
}
function SuperAdminDashboard_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, SuperAdminDashboard_div_0_div_19_div_1_Template, 11, 6, "div", 55)(2, SuperAdminDashboard_div_0_div_19_div_2_Template, 5, 3, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.length === 0);
  }
}
function SuperAdminDashboard_div_0_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTenants);
  }
}
function SuperAdminDashboard_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function SuperAdminDashboard_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.activeTenants);
  }
}
function SuperAdminDashboard_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function SuperAdminDashboard_div_0_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalParents);
  }
}
function SuperAdminDashboard_div_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function SuperAdminDashboard_div_0_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTeachers);
  }
}
function SuperAdminDashboard_div_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function SuperAdminDashboard_div_0_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalChildren);
  }
}
function SuperAdminDashboard_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 69);
  }
}
function SuperAdminDashboard_div_0_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 72);
  }
}
function SuperAdminDashboard_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, SuperAdminDashboard_div_0_div_71_div_1_Template, 1, 0, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c4));
  }
}
function SuperAdminDashboard_div_0_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "p", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SUPER_ADMIN.NO_DAYCARES"));
  }
}
function SuperAdminDashboard_div_0_div_73_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 65);
  }
  if (rf & 2) {
    const tenant_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", tenant_r6.logo, \u0275\u0275sanitizeUrl)("alt", tenant_r6.name);
  }
}
function SuperAdminDashboard_div_0_div_73_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r6.name.substring(0, 2).toUpperCase());
  }
}
function SuperAdminDashboard_div_0_div_73_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "a", 89);
    \u0275\u0275listener("click", function SuperAdminDashboard_div_0_div_73_div_16_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275text(3, "View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 89);
    \u0275\u0275listener("click", function SuperAdminDashboard_div_0_div_73_div_16_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeDropdown());
    });
    \u0275\u0275element(5, "i", 91);
    \u0275\u0275text(6, "Edit ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tenant_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c5, tenant_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c6, tenant_r6.id));
  }
}
function SuperAdminDashboard_div_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 78);
    \u0275\u0275template(3, SuperAdminDashboard_div_0_div_73_img_3_Template, 1, 2, "img", 59)(4, SuperAdminDashboard_div_0_div_73_span_4_Template, 2, 1, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 79)(6, "h4", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 81);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 82);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 83)(13, "div", 84)(14, "button", 85);
    \u0275\u0275listener("click", function SuperAdminDashboard_div_0_div_73_Template_button_click_14_listener($event) {
      const tenant_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleDropdown(tenant_r6.id, $event));
    });
    \u0275\u0275element(15, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SuperAdminDashboard_div_0_div_73_div_16_Template, 7, 6, "div", 87);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tenant_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", tenant_r6.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tenant_r6.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r6.address || tenant_r6.subdomain || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r6.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.openDropdownId === tenant_r6.id);
  }
}
function SuperAdminDashboard_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-header-superadmin");
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275template(6, SuperAdminDashboard_div_0_img_6_Template, 1, 2, "img", 7)(7, SuperAdminDashboard_div_0_div_7_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(8, "div", 9)(9, "p", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275element(16, "i", 15);
    \u0275\u0275elementStart(17, "input", 16);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminDashboard_div_0_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SuperAdminDashboard_div_0_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchInput());
    })("focus", function SuperAdminDashboard_div_0_Template_input_focus_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showSearchResults = true);
    })("blur", function SuperAdminDashboard_div_0_Template_input_blur_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideSearchResults());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SuperAdminDashboard_div_0_div_19_Template, 3, 2, "div", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 4)(21, "div", 18)(22, "div", 19)(23, "div", 20)(24, "div", 21);
    \u0275\u0275element(25, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 23);
    \u0275\u0275template(27, SuperAdminDashboard_div_0_span_27_Template, 2, 1, "span", 24)(28, SuperAdminDashboard_div_0_div_28_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(29, "span", 26);
    \u0275\u0275text(30, "Daycares");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 27)(32, "div", 21);
    \u0275\u0275element(33, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 23);
    \u0275\u0275template(35, SuperAdminDashboard_div_0_span_35_Template, 2, 1, "span", 24)(36, SuperAdminDashboard_div_0_div_36_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(37, "span", 26);
    \u0275\u0275text(38, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 29)(40, "div", 21);
    \u0275\u0275element(41, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 23);
    \u0275\u0275template(43, SuperAdminDashboard_div_0_span_43_Template, 2, 1, "span", 24)(44, SuperAdminDashboard_div_0_div_44_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(45, "span", 26);
    \u0275\u0275text(46, "Parents");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 31)(48, "div", 21);
    \u0275\u0275element(49, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 23);
    \u0275\u0275template(51, SuperAdminDashboard_div_0_span_51_Template, 2, 1, "span", 24)(52, SuperAdminDashboard_div_0_div_52_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(53, "span", 26);
    \u0275\u0275text(54, "Teachers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 33)(56, "div", 21);
    \u0275\u0275element(57, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 23);
    \u0275\u0275template(59, SuperAdminDashboard_div_0_span_59_Template, 2, 1, "span", 24)(60, SuperAdminDashboard_div_0_div_60_Template, 1, 0, "div", 25);
    \u0275\u0275elementStart(61, "span", 26);
    \u0275\u0275text(62, "Children");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(63, "div", 35)(64, "div", 36)(65, "h5");
    \u0275\u0275text(66, "Recently Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "a", 37);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 38);
    \u0275\u0275template(71, SuperAdminDashboard_div_0_div_71_Template, 2, 2, "div", 39)(72, SuperAdminDashboard_div_0_div_72_Template, 5, 3, "div", 40)(73, SuperAdminDashboard_div_0_div_73_Template, 17, 6, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 42)(75, "div", 43)(76, "h5", 44);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 45)(80, "div", 46)(81, "div", 47)(82, "div", 48);
    \u0275\u0275element(83, "i", 49);
    \u0275\u0275elementStart(84, "small");
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 47)(88, "div", 48);
    \u0275\u0275element(89, "i", 22);
    \u0275\u0275elementStart(90, "small");
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 47)(94, "div", 48);
    \u0275\u0275element(95, "i", 50);
    \u0275\u0275elementStart(96, "small");
    \u0275\u0275text(97, "Billing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 47)(99, "div", 48);
    \u0275\u0275element(100, "i", 51);
    \u0275\u0275elementStart(101, "small");
    \u0275\u0275text(102, "Demo Requests");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.currentUser == null ? null : ctx_r1.currentUser.profilePicture));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getGreeting());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.userName, "!");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 30, "SUPER_ADMIN.SEARCH_DAYCARE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showSearchResults && ctx_r1.searchTerm.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(40, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 32, "SUPER_ADMIN.VIEW_ALL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.tenants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.tenants && ctx_r1.recentTenants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentTenants)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 34, "SUPER_ADMIN.QUICK_ACTIONS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(41, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 36, "SUPER_ADMIN.ADD_DAYCARE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 38, "SUPER_ADMIN.ALL_DAYCARES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c2));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c3));
  }
}
function SuperAdminDashboard_div_1_h3_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTenants);
  }
}
function SuperAdminDashboard_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 128);
  }
}
function SuperAdminDashboard_div_1_h3_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.activeTenants);
  }
}
function SuperAdminDashboard_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 128);
  }
}
function SuperAdminDashboard_div_1_h3_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalParents);
  }
}
function SuperAdminDashboard_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 128);
  }
}
function SuperAdminDashboard_div_1_h3_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTeachers);
  }
}
function SuperAdminDashboard_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 128);
  }
}
function SuperAdminDashboard_div_1_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 131);
  }
}
function SuperAdminDashboard_div_1_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275template(1, SuperAdminDashboard_div_1_div_66_div_1_Template, 1, 0, "div", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c7));
  }
}
function SuperAdminDashboard_div_1_div_67_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 135);
    \u0275\u0275element(2, "i", 136);
    \u0275\u0275elementStart(3, "p", 137);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SUPER_ADMIN.NO_DAYCARES"));
  }
}
function SuperAdminDashboard_div_1_div_67_tr_24_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 148);
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", tenant_r8.logo, \u0275\u0275sanitizeUrl)("alt", tenant_r8.name);
  }
}
function SuperAdminDashboard_div_1_div_67_tr_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.name.charAt(0).toUpperCase(), " ");
  }
}
function SuperAdminDashboard_div_1_div_67_tr_24_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r8.subdomain);
  }
}
function SuperAdminDashboard_div_1_div_67_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 138)(2, "div", 139)(3, "div", 140);
    \u0275\u0275template(4, SuperAdminDashboard_div_1_div_67_tr_24_img_4_Template, 1, 2, "img", 141)(5, SuperAdminDashboard_div_1_div_67_tr_24_div_5_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SuperAdminDashboard_div_1_div_67_tr_24_small_9_Template, 2, 1, "small", 142);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 138);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 138);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 138);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 64);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 143)(23, "button", 144);
    \u0275\u0275element(24, "i", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 146);
    \u0275\u0275element(26, "i", 147);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tenant_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", tenant_r8.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tenant_r8.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tenant_r8.subdomain);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r8.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r8.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r8.childCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", tenant_r8.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.isActive ? \u0275\u0275pipeBind1(19, 11, "SUPER_ADMIN.ACTIVE") : \u0275\u0275pipeBind1(20, 13, "SUPER_ADMIN.INACTIVE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c5, tenant_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c6, tenant_r8.id));
  }
}
function SuperAdminDashboard_div_1_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "table", 133)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, SuperAdminDashboard_div_1_div_67_tr_23_Template, 6, 3, "tr", 60)(24, SuperAdminDashboard_div_1_div_67_tr_24_Template, 27, 19, "tr", 134);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "SUPER_ADMIN.TABLE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "SUPER_ADMIN.TABLE_EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "SUPER_ADMIN.TABLE_USERS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "SUPER_ADMIN.TABLE_CHILDREN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "SUPER_ADMIN.TABLE_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 19, "SUPER_ADMIN.TABLE_ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.recentTenants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentTenants)("ngForTrackBy", ctx_r1.trackById);
  }
}
function SuperAdminDashboard_div_1_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 150);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboard_div_1_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155)(2, "div", 156);
    \u0275\u0275element(3, "i", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 158)(5, "h4", 159);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 160);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "plan-" + item_r9.plan.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c8, item_r9.plan === "Free", item_r9.plan === "Basic", item_r9.plan === "Premium", item_r9.plan === "Enterprise"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r9.count, " ", \u0275\u0275pipeBind1(9, 5, "SUPER_ADMIN.DAYCARES"));
  }
}
function SuperAdminDashboard_div_1_div_76_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275element(1, "i", 136);
    \u0275\u0275elementStart(2, "p", 137);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SUPER_ADMIN.NO_SUBSCRIPTIONS"));
  }
}
function SuperAdminDashboard_div_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275template(1, SuperAdminDashboard_div_1_div_76_div_1_Template, 10, 12, "div", 152)(2, SuperAdminDashboard_div_1_div_76_div_2_Template, 5, 3, "div", 153);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.stats.subscriptionBreakdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stats.subscriptionBreakdown.length === 0);
  }
}
function SuperAdminDashboard_div_1_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162)(1, "div", 163)(2, "h5", 164);
    \u0275\u0275element(3, "i", 165);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45)(7, "p", 166);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 167);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "SUPER_ADMIN.INACTIVE_ALERT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.stats.inactiveTenants, " ", \u0275\u0275pipeBind1(9, 8, "SUPER_ADMIN.INACTIVE_DAYCARES_MSG"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0))("queryParams", \u0275\u0275pureFunction0(13, _c9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "SUPER_ADMIN.VIEW_INACTIVE"), " ");
  }
}
function SuperAdminDashboard_div_1_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "div", 169)(2, "div", 169)(3, "div", 131);
    \u0275\u0275elementEnd();
  }
}
function SuperAdminDashboard_div_1_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "div", 171)(2, "span", 172);
    \u0275\u0275element(3, "i", 173);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 174);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 171)(9, "span", 172);
    \u0275\u0275element(10, "i", 175);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 176);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 171)(16, "span", 172);
    \u0275\u0275element(17, "i", 177);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 178);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "hr");
    \u0275\u0275elementStart(23, "div", 171)(24, "span", 172);
    \u0275\u0275element(25, "i", 179);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 174);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 171)(31, "span", 172);
    \u0275\u0275element(32, "i", 180);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 174);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 181)(38, "span", 172);
    \u0275\u0275element(39, "i", 182);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 174);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "SUPER_ADMIN.TOTAL_DAYCARES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTenants);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "SUPER_ADMIN.ACTIVE_DAYCARES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.activeTenants);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "SUPER_ADMIN.INACTIVE_DAYCARES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.inactiveTenants);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 18, "SUPER_ADMIN.TOTAL_PARENTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalParents);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 20, "SUPER_ADMIN.TOTAL_TEACHERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalTeachers);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 22, "SUPER_ADMIN.TOTAL_CHILDREN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalChildren);
  }
}
function SuperAdminDashboard_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "div", 95)(4, "h2", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 96)(10, "div", 97)(11, "div", 98)(12, "div", 99)(13, "div", 100);
    \u0275\u0275element(14, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 101);
    \u0275\u0275template(16, SuperAdminDashboard_div_1_h3_16_Template, 2, 1, "h3", 102)(17, SuperAdminDashboard_div_1_div_17_Template, 1, 0, "div", 103);
    \u0275\u0275elementStart(18, "p", 104);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 97)(22, "div", 98)(23, "div", 99)(24, "div", 105);
    \u0275\u0275element(25, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 101);
    \u0275\u0275template(27, SuperAdminDashboard_div_1_h3_27_Template, 2, 1, "h3", 102)(28, SuperAdminDashboard_div_1_div_28_Template, 1, 0, "div", 103);
    \u0275\u0275elementStart(29, "p", 104);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 97)(33, "div", 98)(34, "div", 99)(35, "div", 107);
    \u0275\u0275element(36, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 101);
    \u0275\u0275template(38, SuperAdminDashboard_div_1_h3_38_Template, 2, 1, "h3", 102)(39, SuperAdminDashboard_div_1_div_39_Template, 1, 0, "div", 103);
    \u0275\u0275elementStart(40, "p", 104);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 97)(44, "div", 98)(45, "div", 99)(46, "div", 109);
    \u0275\u0275element(47, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 101);
    \u0275\u0275template(49, SuperAdminDashboard_div_1_h3_49_Template, 2, 1, "h3", 102)(50, SuperAdminDashboard_div_1_div_50_Template, 1, 0, "div", 103);
    \u0275\u0275elementStart(51, "p", 104);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(54, "div", 111)(55, "div", 112)(56, "div", 113)(57, "div", 43)(58, "h5", 44);
    \u0275\u0275element(59, "i", 114);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "a", 37);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 45);
    \u0275\u0275template(66, SuperAdminDashboard_div_1_div_66_Template, 2, 2, "div", 115)(67, SuperAdminDashboard_div_1_div_67_Template, 25, 21, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 117)(69, "div", 43)(70, "h5", 44);
    \u0275\u0275element(71, "i", 118);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 45);
    \u0275\u0275template(75, SuperAdminDashboard_div_1_div_75_Template, 2, 0, "div", 40)(76, SuperAdminDashboard_div_1_div_76_Template, 3, 2, "div", 119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 120)(78, "div", 42)(79, "div", 43)(80, "h5", 44);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 45)(84, "div", 46)(85, "div", 47)(86, "div", 48);
    \u0275\u0275element(87, "i", 49);
    \u0275\u0275elementStart(88, "small");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 47)(92, "div", 48);
    \u0275\u0275element(93, "i", 22);
    \u0275\u0275elementStart(94, "small");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 47)(98, "div", 48);
    \u0275\u0275element(99, "i", 51);
    \u0275\u0275elementStart(100, "small");
    \u0275\u0275text(101, "Demo Requests");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 47)(103, "div", 48);
    \u0275\u0275element(104, "i", 50);
    \u0275\u0275elementStart(105, "small");
    \u0275\u0275text(106, "Billing");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(107, SuperAdminDashboard_div_1_div_107_Template, 13, 14, "div", 121);
    \u0275\u0275elementStart(108, "div", 122)(109, "div", 123)(110, "h5", 44);
    \u0275\u0275element(111, "i", 124);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 45);
    \u0275\u0275template(115, SuperAdminDashboard_div_1_div_115_Template, 4, 0, "div", 125)(116, SuperAdminDashboard_div_1_div_116_Template, 44, 24, "div", 126);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getGreeting(), ", ", ctx_r1.userName, "!");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, "SUPER_ADMIN.DASHBOARD_SUBTITLE"));
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 36, "SUPER_ADMIN.TOTAL_DAYCARES"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 38, "SUPER_ADMIN.ACTIVE_DAYCARES"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 40, "SUPER_ADMIN.TOTAL_PARENTS"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 42, "SUPER_ADMIN.TOTAL_TEACHERS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 44, "SUPER_ADMIN.RECENT_DAYCARES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(58, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 46, "SUPER_ADMIN.VIEW_ALL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.tenants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.tenants);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 48, "SUPER_ADMIN.SUBSCRIPTION_BREAKDOWN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 50, "SUPER_ADMIN.QUICK_ACTIONS"));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(59, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 52, "SUPER_ADMIN.ADD_DAYCARE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(60, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 54, "SUPER_ADMIN.ALL_DAYCARES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(61, _c3));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(62, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.stats.inactiveTenants > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 56, "SUPER_ADMIN.PLATFORM_SUMMARY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingStates.stats);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStates.stats);
  }
}
var SuperAdminDashboard = class _SuperAdminDashboard {
  tenantService;
  authService;
  router;
  stats = {
    totalTenants: 0,
    activeTenants: 0,
    inactiveTenants: 0,
    totalParents: 0,
    totalTeachers: 0,
    totalChildren: 0,
    subscriptionBreakdown: []
  };
  tenants = [];
  recentTenants = [];
  userName = "";
  currentUser = null;
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  onDocumentClick(event) {
    this.openDropdownId = null;
  }
  loadingStates = {
    stats: true,
    tenants: true
  };
  searchTerm = "";
  filteredTenants = [];
  pendingRequestsCount = 0;
  searchResults = [];
  showSearchResults = false;
  openDropdownId = null;
  subscriptions = [];
  constructor(tenantService, authService, router) {
    this.tenantService = tenantService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.userName = this.currentUser?.firstName || "Admin";
    this.loadStats();
    this.loadTenants();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadStats() {
    this.loadingStates.stats = true;
    const sub = this.tenantService.getStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.loadingStates.stats = false;
      },
      error: (err) => {
        console.error("Error loading stats:", err);
        this.loadingStates.stats = false;
      }
    });
    this.subscriptions.push(sub);
  }
  loadTenants() {
    this.loadingStates.tenants = true;
    const sub = this.tenantService.loadTenants().subscribe({
      next: (tenants) => {
        this.tenants = tenants;
        this.filteredTenants = tenants;
        this.recentTenants = tenants.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
        this.loadingStates.tenants = false;
      },
      error: (err) => {
        console.error("Error loading tenants:", err);
        this.loadingStates.tenants = false;
      }
    });
    this.subscriptions.push(sub);
  }
  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredTenants = this.tenants;
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredTenants = this.tenants.filter((t) => t.name.toLowerCase().includes(term) || t.email?.toLowerCase().includes(term) || t.subdomain?.toLowerCase().includes(term));
  }
  onSearchInput() {
    if (!this.searchTerm.trim()) {
      this.searchResults = [];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.searchResults = this.tenants.filter((t) => t.name.toLowerCase().includes(term) || t.email?.toLowerCase().includes(term) || t.subdomain?.toLowerCase().includes(term)).slice(0, 5);
  }
  hideSearchResults() {
    setTimeout(() => {
      this.showSearchResults = false;
    }, 200);
  }
  goToTenantDetail(tenantId) {
    this.showSearchResults = false;
    this.searchTerm = "";
    this.router.navigate(["/super-admin/tenants/detail", tenantId]);
  }
  toggleTenantStatus(tenant) {
    const newStatus = !tenant.isActive;
    this.tenantService.updateTenantStatus(tenant.id, newStatus).subscribe({
      next: () => {
        tenant.isActive = newStatus;
      },
      error: (err) => {
        console.error("Error updating tenant status:", err);
      }
    });
  }
  getGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Good morning";
    if (hour < 18)
      return "Good afternoon";
    return "Good evening";
  }
  trackById(index, item) {
    return item.id;
  }
  toggleDropdown(tenantId, event) {
    event.stopPropagation();
    this.openDropdownId = this.openDropdownId === tenantId ? null : tenantId;
  }
  closeDropdown() {
    this.openDropdownId = null;
  }
  static \u0275fac = function SuperAdminDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperAdminDashboard)(\u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminDashboard, selectors: [["app-super-admin-dashboard"]], hostVars: 2, hostBindings: function SuperAdminDashboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SuperAdminDashboard_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 2, vars: 2, consts: [["class", "mobile-view", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], [1, "mobile-view"], [1, "welcome-section", "pt-4", "pb-4", "mb-3"], [1, "container-fluid"], [1, "img-dash", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex"], ["class", "profile-avatar", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "ps-3"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "notifications"], [1, "bi", "bi-bell"], [1, "search-box", "mt-3"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "focus", "blur", "placeholder", "ngModel"], ["class", "search-results", 4, "ngIf"], [1, "stats-scroll-section"], [1, "stats-scroll-container"], [1, "mini-stat-card", "daycares"], [1, "mini-stat-icon"], [1, "bi", "bi-building"], [1, "mini-stat-info"], ["class", "mini-stat-value", 4, "ngIf"], ["class", "skeleton-mini", 4, "ngIf"], [1, "mini-stat-label"], [1, "mini-stat-card", "active"], [1, "bi", "bi-check-circle-fill"], [1, "mini-stat-card", "parents"], [1, "bi", "bi-people-fill"], [1, "mini-stat-card", "teachers"], [1, "bi", "bi-person-badge-fill"], [1, "mini-stat-card", "children"], [1, "bi", "bi-emoji-smile-fill"], [1, "daycares-list", "mt-4"], [1, "title-all"], [1, "view-all", "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "tenants-list"], ["class", "p-2", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["class", "tenant-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card", "card-general", "quick-actions-container", "bg-white", "mb-3", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "card-body"], [1, "row", "g-2"], [1, "col-6", "items"], [1, "card", "quick-action-card", "text-center", "p-3", 2, "cursor", "pointer", 3, "routerLink"], [1, "bi", "bi-plus-circle"], [1, "bi", "bi-credit-card"], [1, "bi", "bi-calendar-check"], [1, "profile-avatar", 3, "src", "alt"], [1, "avatar-placeholder"], [1, "search-results"], ["class", "search-result-item", 3, "mousedown", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "search-result-item", 3, "mousedown"], [1, "result-avatar"], [3, "src", "alt", 4, "ngIf"], [4, "ngIf"], [1, "result-info"], [1, "result-name"], [1, "result-email"], [1, "badge", 3, "ngClass"], [3, "src", "alt"], [1, "no-results"], [1, "bi", "bi-search"], [1, "mini-stat-value"], [1, "skeleton-mini"], [1, "p-2"], ["class", "skeleton-tenant-card", 4, "ngFor", "ngForOf"], [1, "skeleton-tenant-card"], [1, "text-center", "py-4"], [1, "bi", "bi-inbox", 2, "font-size", "2rem", "opacity", "0.25"], [1, "mt-2", "mb-0", "text-muted"], [1, "tenant-card"], [1, "tenant-card-left"], [1, "tenant-avatar-lg"], [1, "tenant-card-center"], [1, "tenant-name"], [1, "tenant-address"], [1, "tenant-email"], [1, "tenant-card-right"], [1, "dropdown-wrapper"], [1, "btn-dots", 3, "click"], [1, "bi", "bi-three-dots"], ["class", "custom-dropdown", 4, "ngIf"], [1, "custom-dropdown"], [1, "dropdown-item", 3, "click", "routerLink"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-pencil-square", "me-2"], [1, "container-fluid", "mt-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "welcome-section"], [1, "row", "g-3", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "card", "stat-card", "shadow-sm"], [1, "card-body", "d-flex", "align-items-center", "p-3"], [1, "stat-icon-wrapper", "me-3", "bg-primary-light"], [1, "stat-content"], ["class", "stat-number", 4, "ngIf"], ["class", "skeleton-number", 4, "ngIf"], [1, "stat-label", "mb-0"], [1, "stat-icon-wrapper", "me-3", "bg-success-light"], [1, "bi", "bi-check-circle"], [1, "stat-icon-wrapper", "me-3", "bg-info-light"], [1, "bi", "bi-people"], [1, "stat-icon-wrapper", "me-3", "bg-warning-light"], [1, "bi", "bi-person-badge"], [1, "row"], [1, "col-xl-8"], [1, "card", "card-general", "card-recently", "shadow-sm"], [1, "bi", "bi-clock-history", "me-2"], ["class", "skeleton-table", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "card", "card-general", "shadow-sm", "mb-4"], [1, "bi", "bi-pie-chart", "me-2"], ["class", "subscription-grid", 4, "ngIf"], [1, "col-xl-4"], ["class", "card card-general shadow-sm mb-3", 4, "ngIf"], [1, "card", "card-general", "shadow-sm"], [1, "card-header"], [1, "bi", "bi-graph-up", "me-2"], ["class", "py-3", 4, "ngIf"], ["class", "summary-list", 4, "ngIf"], [1, "stat-number"], [1, "skeleton-number"], [1, "skeleton-table"], ["class", "skeleton-row", 4, "ngFor", "ngForOf"], [1, "skeleton-row"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-inbox", 2, "font-size", "2rem", "opacity", "0.3"], [1, "mt-2", "mb-0"], [1, "text-nowrap"], [1, "d-flex", "align-items-center"], [1, "tenant-avatar", "me-2"], ["class", "rounded-circle", "width", "36", "height", "36", 3, "src", "alt", 4, "ngIf"], ["class", "d-block text-muted", 4, "ngIf"], [1, "d-flex", "gap-1"], ["title", "View", 1, "btn", "btn-sm", "btn-view", 3, "routerLink"], [1, "bi", "bi-eye"], ["title", "Edit", 1, "btn", "btn-sm", "btn-edit", 3, "routerLink"], [1, "bi", "bi-pencil-square"], ["width", "36", "height", "36", 1, "rounded-circle", 3, "src", "alt"], [1, "d-block", "text-muted"], [1, "skeleton-chart"], [1, "subscription-grid"], ["class", "subscription-item", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "subscription-item"], [1, "subscription-card", 3, "ngClass"], [1, "plan-icon"], [1, "bi", 3, "ngClass"], [1, "plan-info"], [1, "plan-name"], [1, "plan-count"], [1, "text-center", "text-muted", "py-4"], [1, "card", "card-general", "shadow-sm", "mb-3"], [1, "card-header", "bg-warning-subtle"], [1, "mb-0", "text-warning"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "mb-2"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "routerLink", "queryParams"], [1, "py-3"], [1, "skeleton-row", "mb-2"], [1, "summary-list"], [1, "summary-item", "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "summary-label"], [1, "bi", "bi-building", "me-2", "text-primary"], [1, "summary-value", "fw-bold"], [1, "bi", "bi-check-circle", "me-2", "text-success"], [1, "summary-value", "fw-bold", "text-success"], [1, "bi", "bi-x-circle", "me-2", "text-danger"], [1, "summary-value", "fw-bold", "text-danger"], [1, "bi", "bi-people", "me-2", "text-info"], [1, "bi", "bi-person-badge", "me-2", "text-warning"], [1, "summary-item", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-person-hearts", "me-2", "text-success"]], template: function SuperAdminDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SuperAdminDashboard_div_0_Template, 103, 45, "div", 0)(1, SuperAdminDashboard_div_1_Template, 117, 63, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, HeaderSuperadminComponent, TranslatePipe], styles: ["\n\n.welcome-section[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 0.25rem;\n}\n.welcome-section[_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 0;\n}\n.welcome-section[_ngcontent-%COMP%]   .img-dash[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.welcome-section[_ngcontent-%COMP%]   .img-dash[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  border: 3px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 16px;\n  z-index: 1;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 45px;\n  padding-right: 15px;\n  height: 48px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.2);\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  margin-top: 8px;\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #f1f5f9;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 16px;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   .result-email[_ngcontent-%COMP%] {\n  display: block;\n  color: #64748b;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 8px;\n  font-size: 10px;\n  padding: 4px 8px;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  color: #94a3b8;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.welcome-section[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.2) 0%,\n      rgba(125, 185, 255, 0.2) 100%);\n}\n.bg-primary-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.bg-success-light[_ngcontent-%COMP%] {\n  background: rgba(40, 199, 111, 0.15);\n}\n.bg-success-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28C76F;\n}\n.bg-info-light[_ngcontent-%COMP%] {\n  background: rgba(23, 162, 184, 0.15);\n}\n.bg-info-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.bg-warning-light[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 67, 0.15);\n}\n.bg-warning-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FF9F43;\n}\n.subscription-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.subscription-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 12px;\n  background: #f8f9fa;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.subscription-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.subscription-card[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.subscription-card[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.subscription-card[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .plan-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.subscription-card[_ngcontent-%COMP%]   .plan-info[_ngcontent-%COMP%]   .plan-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--color-gray);\n  margin-bottom: 0;\n}\n.subscription-card.plan-free[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.15);\n}\n.subscription-card.plan-free[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.subscription-card.plan-basic[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  background: rgba(125, 185, 255, 0.2);\n}\n.subscription-card.plan-basic[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7db9ff;\n}\n.subscription-card.plan-premium[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.2);\n}\n.subscription-card.plan-premium[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7dd3c0;\n}\n.subscription-card.plan-enterprise[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 159, 67, 0.2);\n}\n.subscription-card.plan-enterprise[_ngcontent-%COMP%]   .plan-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #FF9F43;\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.quick-action-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  transition: all 0.2s;\n  background: white;\n}\n.quick-action-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.2);\n}\n.quick-action-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n}\n.quick-action-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.summary-list[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.summary-list[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.summary-list[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.skeleton-number[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 28px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n.skeleton-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 8px;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .welcome-section[_ngcontent-%COMP%] {\n    background-color: var(--secondary-color);\n    padding-top: 40px !important;\n  }\n  .welcome-section[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .subscription-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mobile-view[_ngcontent-%COMP%] {\n    padding-bottom: 80px;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mobile-mode[_nghost-%COMP%]     .main-header {\n  display: none !important;\n}\n.stats-scroll-section[_ngcontent-%COMP%] {\n  margin: -8px -12px 16px;\n  padding: 0 12px;\n}\n.stats-scroll-section[_ngcontent-%COMP%]   .stats-scroll-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 8px 4px;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.stats-scroll-section[_ngcontent-%COMP%]   .stats-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.mini-stat-card[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 120px;\n  background: #fff;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  scroll-snap-align: start;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mini-stat-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.mini-stat-card[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mini-stat-card[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mini-stat-card[_ngcontent-%COMP%]   .mini-stat-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mini-stat-card[_ngcontent-%COMP%]   .mini-stat-info[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #1e293b;\n}\n.mini-stat-card[_ngcontent-%COMP%]   .mini-stat-info[_ngcontent-%COMP%]   .mini-stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-top: 2px;\n}\n.mini-stat-card[_ngcontent-%COMP%]   .skeleton-mini[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n.mini-stat-card.daycares[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15) 0%,\n      rgba(99, 102, 241, 0.25) 100%);\n}\n.mini-stat-card.daycares[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.mini-stat-card.daycares[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.mini-stat-card.active[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.15) 0%,\n      rgba(34, 197, 94, 0.25) 100%);\n}\n.mini-stat-card.active[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.mini-stat-card.active[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.mini-stat-card.parents[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.15) 0%,\n      rgba(59, 130, 246, 0.25) 100%);\n}\n.mini-stat-card.parents[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.mini-stat-card.parents[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.mini-stat-card.teachers[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.15) 0%,\n      rgba(249, 115, 22, 0.25) 100%);\n}\n.mini-stat-card.teachers[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.mini-stat-card.teachers[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.mini-stat-card.children[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.15) 0%,\n      rgba(236, 72, 153, 0.25) 100%);\n}\n.mini-stat-card.children[_ngcontent-%COMP%]   .mini-stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ec4899;\n}\n.mini-stat-card.children[_ngcontent-%COMP%]   .mini-stat-value[_ngcontent-%COMP%] {\n  color: #ec4899;\n}\n.daycares-list[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.daycares-list[_ngcontent-%COMP%]   .title-all[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.daycares-list[_ngcontent-%COMP%]   .title-all[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.daycares-list[_ngcontent-%COMP%]   .title-all[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 4px 12px;\n}\n.tenants-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.tenants-list[_ngcontent-%COMP%]   .skeleton-tenant-card[_ngcontent-%COMP%] {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 12px;\n}\n.tenant-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f1f5f9;\n  transition: all 0.2s;\n}\n.tenant-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-left[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-right: 14px;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-left[_ngcontent-%COMP%]   .tenant-avatar-lg[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5f1 0%,\n      #d4ede5 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-left[_ngcontent-%COMP%]   .tenant-avatar-lg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-left[_ngcontent-%COMP%]   .tenant-avatar-lg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-center[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-center[_ngcontent-%COMP%]   .tenant-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-center[_ngcontent-%COMP%]   .tenant-address[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-center[_ngcontent-%COMP%]   .tenant-email[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .btn-dots[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .btn-dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .btn-dots[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  padding: 8px;\n  min-width: 140px;\n  z-index: 1000;\n  margin-top: 4px;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  font-size: 14px;\n  border-radius: 6px;\n  color: #475569;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--secondary-color);\n}\n.tenant-card[_ngcontent-%COMP%]   .tenant-card-right[_ngcontent-%COMP%]   .custom-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.notifications[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n/*# sourceMappingURL=super-admin-dashboard.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminDashboard, [{
    type: Component,
    args: [{ selector: "app-super-admin-dashboard", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, HeaderSuperadminComponent], template: `<div *ngIf="isMobile()" class="mobile-view">
  <app-header-superadmin></app-header-superadmin>
  <div class="welcome-section pt-4 pb-4 mb-3">
    <div class="container-fluid">
      <div class="img-dash d-flex align-items-center justify-content-between">
        <div class="d-flex">
          <img *ngIf="currentUser?.profilePicture" [src]="currentUser!.profilePicture" [alt]="currentUser!.firstName" class="profile-avatar">
          <div *ngIf="!currentUser?.profilePicture" class="avatar-placeholder">
            {{ currentUser?.firstName?.charAt(0)?.toUpperCase() || 'A' }}
          </div>
          <div class="ps-3">
            <p class="welcome-title">
            {{ getGreeting() }}</p>
            <h2 class="welcome-subtitle"> {{ userName }}!</h2>
          </div>
        </div>
        <div class="notifications">
          <i class="bi bi-bell"></i>
        </div>
      </div>
       <div class="search-box mt-3">
        <i class="bi bi-search search-icon"></i>
        <input type="text" class="form-control search-input"
          [placeholder]="'SUPER_ADMIN.SEARCH_DAYCARE' | translate"
          [(ngModel)]="searchTerm"
          (input)="onSearchInput()"
          (focus)="showSearchResults = true"
          (blur)="hideSearchResults()">

        <!-- Search Results Dropdown -->
        <div class="search-results" *ngIf="showSearchResults && searchTerm.length > 0">
          <div class="search-result-item"
               *ngFor="let tenant of searchResults"
               (mousedown)="goToTenantDetail(tenant.id)">
            <div class="result-avatar">
              <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name">
              <span *ngIf="!tenant.logo">{{ tenant.name.charAt(0).toUpperCase() }}</span>
            </div>
            <div class="result-info">
              <span class="result-name">{{ tenant.name }}</span>
              <span class="result-email">{{ tenant.email || tenant.subdomain }}</span>
            </div>
            <span class="badge" [ngClass]="tenant.isActive ? 'bg-success' : 'bg-danger'">
              {{ tenant.isActive ? 'Active' : 'Inactive' }}
            </span>
          </div>
          <div class="no-results" *ngIf="searchResults.length === 0">
            <i class="bi bi-search"></i>
            <span>{{ 'SUPER_ADMIN.NO_DAYCARES_FOUND' | translate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <!-- Stats Scroll Section -->
    <div class="stats-scroll-section">
      <div class="stats-scroll-container">
        <!-- Total Daycares -->
        <div class="mini-stat-card daycares">
          <div class="mini-stat-icon">
            <i class="bi bi-building"></i>
          </div>
          <div class="mini-stat-info">
            <span class="mini-stat-value" *ngIf="!loadingStates.stats">{{ stats.totalTenants }}</span>
            <div *ngIf="loadingStates.stats" class="skeleton-mini"></div>
            <span class="mini-stat-label">Daycares</span>
          </div>
        </div>

        <!-- Active -->
        <div class="mini-stat-card active">
          <div class="mini-stat-icon">
            <i class="bi bi-check-circle-fill"></i>
          </div>
          <div class="mini-stat-info">
            <span class="mini-stat-value" *ngIf="!loadingStates.stats">{{ stats.activeTenants }}</span>
            <div *ngIf="loadingStates.stats" class="skeleton-mini"></div>
            <span class="mini-stat-label">Active</span>
          </div>
        </div>

        <!-- Parents -->
        <div class="mini-stat-card parents">
          <div class="mini-stat-icon">
            <i class="bi bi-people-fill"></i>
          </div>
          <div class="mini-stat-info">
            <span class="mini-stat-value" *ngIf="!loadingStates.stats">{{ stats.totalParents }}</span>
            <div *ngIf="loadingStates.stats" class="skeleton-mini"></div>
            <span class="mini-stat-label">Parents</span>
          </div>
        </div>

        <!-- Teachers -->
        <div class="mini-stat-card teachers">
          <div class="mini-stat-icon">
            <i class="bi bi-person-badge-fill"></i>
          </div>
          <div class="mini-stat-info">
            <span class="mini-stat-value" *ngIf="!loadingStates.stats">{{ stats.totalTeachers }}</span>
            <div *ngIf="loadingStates.stats" class="skeleton-mini"></div>
            <span class="mini-stat-label">Teachers</span>
          </div>
        </div>

        <!-- Children -->
        <div class="mini-stat-card children">
          <div class="mini-stat-icon">
            <i class="bi bi-emoji-smile-fill"></i>
          </div>
          <div class="mini-stat-info">
            <span class="mini-stat-value" *ngIf="!loadingStates.stats">{{ stats.totalChildren }}</span>
            <div *ngIf="loadingStates.stats" class="skeleton-mini"></div>
            <span class="mini-stat-label">Children</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section daycare -->
     <div class="daycares-list mt-4">
      <div class="title-all">
        <h5>Recently Added</h5>
        <a [routerLink]="['/super-admin/tenants']" class="view-all btn btn-sm btn-outline-primary">
          {{ 'SUPER_ADMIN.VIEW_ALL' | translate }}
        </a>
      </div>
      <div class="tenants-list">
        <!-- Loading -->
        <div *ngIf="loadingStates.tenants" class="p-2">
          <div class="skeleton-tenant-card" *ngFor="let i of [1,2,3]"></div>
        </div>

        <!-- Empty State -->
        <div *ngIf="!loadingStates.tenants && recentTenants.length === 0" class="text-center py-4">
          <i class="bi bi-inbox" style="font-size: 2rem; opacity: 0.25;"></i>
          <p class="mt-2 mb-0 text-muted">{{ 'SUPER_ADMIN.NO_DAYCARES' | translate }}</p>
        </div>

        <!-- Tenant Cards -->
        <div class="tenant-card" *ngFor="let tenant of recentTenants; trackBy: trackById">
          <div class="tenant-card-left">
            <div class="tenant-avatar-lg">
              <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name">
              <span *ngIf="!tenant.logo">{{ tenant.name.substring(0, 2).toUpperCase() }}</span>
            </div>
          </div>
          <div class="tenant-card-center">
            <h4 class="tenant-name">{{ tenant.name }}</h4>
            <p class="tenant-address">{{ tenant.address || tenant.subdomain || '-' }}</p>
            <p class="tenant-email">{{ tenant.email || '-' }}</p>
          </div>
          <div class="tenant-card-right">
            <div class="dropdown-wrapper">
              <button class="btn-dots" (click)="toggleDropdown(tenant.id, $event)">
                <i class="bi bi-three-dots"></i>
              </button>
              <div class="custom-dropdown" *ngIf="openDropdownId === tenant.id">
                <a class="dropdown-item" [routerLink]="['/super-admin/tenants/detail', tenant.id]" (click)="closeDropdown()">
                  <i class="bi bi-eye me-2"></i>View
                </a>
                <a class="dropdown-item" [routerLink]="['/super-admin/tenants/edit', tenant.id]" (click)="closeDropdown()">
                  <i class="bi bi-pencil-square me-2"></i>Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  

    <!-- Quick Actions -->
    <div class="card card-general quick-actions-container bg-white mb-3 shadow-sm">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">{{ 'SUPER_ADMIN.QUICK_ACTIONS' | translate }}</h5>
      </div>
      <div class="card-body">  
        <div class="row g-2">
          <div class="col-6 items">
            <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/tenants/add']" style="cursor: pointer;">
              <i class="bi bi-plus-circle"></i>
              <small>{{ 'SUPER_ADMIN.ADD_DAYCARE' | translate }}</small>
            </div>
          </div>
          <div class="col-6 items">
            <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/tenants']" style="cursor: pointer;">
              <i class="bi bi-building"></i>
              <small>{{ 'SUPER_ADMIN.ALL_DAYCARES' | translate }}</small>
            </div>
          </div>
          <div class="col-6 items">
            <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/billing']" style="cursor: pointer;">
              <i class="bi bi-credit-card"></i>
              <small>Billing</small>
            </div>
          </div>
          <div class="col-6 items">
            <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/demo-requests']" style="cursor: pointer;">
              <i class="bi bi-calendar-check"></i>
              <small>Demo Requests</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div *ngIf="!isMobile()" class="container-fluid mt-4">
  <!-- Welcome Header -->
  <div class="row mb-4">
    <div class="col-12">
      <div class="welcome-section">
        <h2 class="welcome-title">
          {{ getGreeting() }}, {{ userName }}!</h2>
        <p class="welcome-subtitle">{{ 'SUPER_ADMIN.DASHBOARD_SUBTITLE' | translate }}</p>
      </div>
    </div>
  </div>

  <!-- Stats Cards Row -->
  <div class="row g-3 mb-4">
    <!-- Total Daycares -->
    <div class="col-xl-3 col-md-6">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex align-items-center p-3">
          <div class="stat-icon-wrapper me-3 bg-primary-light">
            <i class="bi bi-building"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number" *ngIf="!loadingStates.stats">{{ stats.totalTenants }}</h3>
            <div *ngIf="loadingStates.stats" class="skeleton-number"></div>
            <p class="stat-label mb-0">{{ 'SUPER_ADMIN.TOTAL_DAYCARES' | translate }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Active Daycares -->
    <div class="col-xl-3 col-md-6">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex align-items-center p-3">
          <div class="stat-icon-wrapper me-3 bg-success-light">
            <i class="bi bi-check-circle"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number" *ngIf="!loadingStates.stats">{{ stats.activeTenants }}</h3>
            <div *ngIf="loadingStates.stats" class="skeleton-number"></div>
            <p class="stat-label mb-0">{{ 'SUPER_ADMIN.ACTIVE_DAYCARES' | translate }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Parents -->
    <div class="col-xl-3 col-md-6">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex align-items-center p-3">
          <div class="stat-icon-wrapper me-3 bg-info-light">
            <i class="bi bi-people"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number" *ngIf="!loadingStates.stats">{{ stats.totalParents }}</h3>
            <div *ngIf="loadingStates.stats" class="skeleton-number"></div>
            <p class="stat-label mb-0">{{ 'SUPER_ADMIN.TOTAL_PARENTS' | translate }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Teachers -->
    <div class="col-xl-3 col-md-6">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex align-items-center p-3">
          <div class="stat-icon-wrapper me-3 bg-warning-light">
            <i class="bi bi-person-badge"></i>
          </div>
          <div class="stat-content">
            <h3 class="stat-number" *ngIf="!loadingStates.stats">{{ stats.totalTeachers }}</h3>
            <div *ngIf="loadingStates.stats" class="skeleton-number"></div>
            <p class="stat-label mb-0">{{ 'SUPER_ADMIN.TOTAL_TEACHERS' | translate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <!-- Main Content Area -->
    <div class="col-xl-8">

      <!-- Recent Daycares Table -->
      <div class="card card-general card-recently shadow-sm">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="mb-0"><i class="bi bi-clock-history me-2"></i>{{ 'SUPER_ADMIN.RECENT_DAYCARES' | translate }}</h5>
          <a [routerLink]="['/super-admin/tenants']" class="view-all btn btn-sm btn-outline-primary">
            {{ 'SUPER_ADMIN.VIEW_ALL' | translate }}
          </a>
        </div>
        <div class="card-body">
          <div *ngIf="loadingStates.tenants" class="skeleton-table">
            <div class="skeleton-row" *ngFor="let i of [1,2,3,4,5]"></div>
          </div>
          <div *ngIf="!loadingStates.tenants" class="table-responsive custom-table">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th>{{ 'SUPER_ADMIN.TABLE_NAME' | translate }}</th>
                  <th>{{ 'SUPER_ADMIN.TABLE_EMAIL' | translate }}</th>
                  <th>{{ 'SUPER_ADMIN.TABLE_USERS' | translate }}</th>
                  <th>{{ 'SUPER_ADMIN.TABLE_CHILDREN' | translate }}</th>
                  <th>{{ 'SUPER_ADMIN.TABLE_STATUS' | translate }}</th>
                  <th>{{ 'SUPER_ADMIN.TABLE_ACTIONS' | translate }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="recentTenants.length === 0">
                  <td colspan="6" class="text-center text-muted py-4">
                    <i class="bi bi-inbox" style="font-size: 2rem; opacity: 0.3;"></i>
                    <p class="mt-2 mb-0">{{ 'SUPER_ADMIN.NO_DAYCARES' | translate }}</p>
                  </td>
                </tr>
                <tr *ngFor="let tenant of recentTenants; trackBy: trackById">
                  <td class="text-nowrap">
                    <div class="d-flex align-items-center">
                      <div class="tenant-avatar me-2">
                        <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name" class="rounded-circle" width="36" height="36">
                        <div *ngIf="!tenant.logo" class="avatar-placeholder">
                          {{ tenant.name.charAt(0).toUpperCase() }}
                        </div>
                      </div>
                      <div>
                        <strong>{{ tenant.name }}</strong>
                        <small class="d-block text-muted" *ngIf="tenant.subdomain">{{ tenant.subdomain }}</small>
                      </div>
                    </div>
                  </td>
                  <td class="text-nowrap">{{ tenant.email || '-' }}</td>
                  <td class="text-nowrap">{{ tenant.userCount }}</td>
                  <td class="text-nowrap">{{ tenant.childCount }}</td>
                  <td>
                    <span class="badge" [ngClass]="tenant.isActive ? 'bg-success' : 'bg-danger'">
                      {{ tenant.isActive ? ('SUPER_ADMIN.ACTIVE' | translate) : ('SUPER_ADMIN.INACTIVE' | translate) }}
                    </span>
                  </td>
                  <td>
                    <div class="d-flex gap-1">
                      <button class="btn btn-sm btn-view" [routerLink]="['/super-admin/tenants/detail', tenant.id]" title="View">
                        <i class="bi bi-eye"></i>
                      </button>
                      <button class="btn btn-sm btn-edit" [routerLink]="['/super-admin/tenants/edit', tenant.id]" title="Edit">
                        <i class="bi bi-pencil-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
      <!-- Subscription Breakdown -->
      <div class="card card-general shadow-sm mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="mb-0"><i class="bi bi-pie-chart me-2"></i>{{ 'SUPER_ADMIN.SUBSCRIPTION_BREAKDOWN' | translate }}</h5>
        </div>
        <div class="card-body">
          <div *ngIf="loadingStates.stats" class="text-center py-4">
            <div class="skeleton-chart"></div>
          </div>
          <div *ngIf="!loadingStates.stats" class="subscription-grid">
            <div *ngFor="let item of stats.subscriptionBreakdown" class="subscription-item">
              <div class="subscription-card" [ngClass]="'plan-' + item.plan.toLowerCase()">
                <div class="plan-icon">
                  <i class="bi" [ngClass]="{
                    'bi-star': item.plan === 'Free',
                    'bi-star-fill': item.plan === 'Basic',
                    'bi-gem': item.plan === 'Premium',
                    'bi-trophy': item.plan === 'Enterprise'
                  }"></i>
                </div>
                <div class="plan-info">
                  <h4 class="plan-name">{{ item.plan }}</h4>
                  <p class="plan-count">{{ item.count }} {{ 'SUPER_ADMIN.DAYCARES' | translate }}</p>
                </div>
              </div>
            </div>
            <div *ngIf="stats.subscriptionBreakdown.length === 0" class="text-center text-muted py-4">
              <i class="bi bi-inbox" style="font-size: 2rem; opacity: 0.3;"></i>
              <p class="mt-2 mb-0">{{ 'SUPER_ADMIN.NO_SUBSCRIPTIONS' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-xl-4">
      <!-- Quick Actions -->
      <div class="card card-general quick-actions-container bg-white mb-3 shadow-sm">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="mb-0">{{ 'SUPER_ADMIN.QUICK_ACTIONS' | translate }}</h5>
        </div>
        <div class="card-body">  
          <div class="row g-2">
            <div class="col-6 items">
              <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/tenants/add']" style="cursor: pointer;">
                <i class="bi bi-plus-circle"></i>
                <small>{{ 'SUPER_ADMIN.ADD_DAYCARE' | translate }}</small>
              </div>
            </div>
            <div class="col-6 items">
              <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/tenants']" style="cursor: pointer;">
                <i class="bi bi-building"></i>
                <small>{{ 'SUPER_ADMIN.ALL_DAYCARES' | translate }}</small>
              </div>
            </div>
            <div class="col-6 items">
              <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/demo-requests']" style="cursor: pointer;">
                <i class="bi bi-calendar-check"></i>
                <small>Demo Requests</small>
              </div>
            </div>
            <div class="col-6 items">
              <div class="card quick-action-card text-center p-3" [routerLink]="['/super-admin/billing']" style="cursor: pointer;">
                <i class="bi bi-credit-card"></i>
                <small>Billing</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Inactive Daycares Alert -->
      <div class="card card-general shadow-sm mb-3" *ngIf="stats.inactiveTenants > 0">
        <div class="card-header bg-warning-subtle">
          <h5 class="mb-0 text-warning">
            <i class="bi bi-exclamation-triangle me-2"></i>
            {{ 'SUPER_ADMIN.INACTIVE_ALERT' | translate }}
          </h5>
        </div>
        <div class="card-body">
          <p class="mb-2">
            {{ stats.inactiveTenants }} {{ 'SUPER_ADMIN.INACTIVE_DAYCARES_MSG' | translate }}
          </p>
          <a [routerLink]="['/super-admin/tenants']" [queryParams]="{status: 'inactive'}" class="btn btn-sm btn-outline-warning">
            {{ 'SUPER_ADMIN.VIEW_INACTIVE' | translate }}
          </a>
        </div>
      </div>

      <!-- Platform Summary -->
      <div class="card card-general shadow-sm">
        <div class="card-header">
          <h5 class="mb-0"><i class="bi bi-graph-up me-2"></i>{{ 'SUPER_ADMIN.PLATFORM_SUMMARY' | translate }}</h5>
        </div>
        <div class="card-body">
          <div *ngIf="loadingStates.stats" class="py-3">
            <div class="skeleton-row mb-2"></div>
            <div class="skeleton-row mb-2"></div>
            <div class="skeleton-row"></div>
          </div>
          <div *ngIf="!loadingStates.stats" class="summary-list">
            <div class="summary-item d-flex justify-content-between align-items-center mb-2">
              <span class="summary-label">
                <i class="bi bi-building me-2 text-primary"></i>
                {{ 'SUPER_ADMIN.TOTAL_DAYCARES' | translate }}
              </span>
              <span class="summary-value fw-bold">{{ stats.totalTenants }}</span>
            </div>
            <div class="summary-item d-flex justify-content-between align-items-center mb-2">
              <span class="summary-label">
                <i class="bi bi-check-circle me-2 text-success"></i>
                {{ 'SUPER_ADMIN.ACTIVE_DAYCARES' | translate }}
              </span>
              <span class="summary-value fw-bold text-success">{{ stats.activeTenants }}</span>
            </div>
            <div class="summary-item d-flex justify-content-between align-items-center mb-2">
              <span class="summary-label">
                <i class="bi bi-x-circle me-2 text-danger"></i>
                {{ 'SUPER_ADMIN.INACTIVE_DAYCARES' | translate }}
              </span>
              <span class="summary-value fw-bold text-danger">{{ stats.inactiveTenants }}</span>
            </div>
            <hr>
            <div class="summary-item d-flex justify-content-between align-items-center mb-2">
              <span class="summary-label">
                <i class="bi bi-people me-2 text-info"></i>
                {{ 'SUPER_ADMIN.TOTAL_PARENTS' | translate }}
              </span>
              <span class="summary-value fw-bold">{{ stats.totalParents }}</span>
            </div>
            <div class="summary-item d-flex justify-content-between align-items-center mb-2">
              <span class="summary-label">
                <i class="bi bi-person-badge me-2 text-warning"></i>
                {{ 'SUPER_ADMIN.TOTAL_TEACHERS' | translate }}
              </span>
              <span class="summary-value fw-bold">{{ stats.totalTeachers }}</span>
            </div>
            <div class="summary-item d-flex justify-content-between align-items-center">
              <span class="summary-label">
                <i class="bi bi-person-hearts me-2 text-success"></i>
                {{ 'SUPER_ADMIN.TOTAL_CHILDREN' | translate }}
              </span>
              <span class="summary-value fw-bold">{{ stats.totalChildren }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/super-admin/dashboard/super-admin-dashboard.scss */\n.welcome-section .welcome-title {\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 0.25rem;\n}\n.welcome-section .welcome-subtitle {\n  color: white;\n  margin-bottom: 0;\n}\n.welcome-section .img-dash .profile-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.welcome-section .img-dash .avatar-placeholder {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n  border: 3px solid white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.welcome-section .search-box {\n  position: relative;\n}\n.welcome-section .search-box .search-icon {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 16px;\n  z-index: 1;\n}\n.welcome-section .search-box .search-input {\n  padding-left: 45px;\n  padding-right: 15px;\n  height: 48px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n}\n.welcome-section .search-box .search-input:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.2);\n}\n.welcome-section .search-box .search-input::placeholder {\n  color: #94a3b8;\n}\n.welcome-section .search-box .search-results {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  margin-top: 8px;\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.welcome-section .search-box .search-results .search-result-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #f1f5f9;\n}\n.welcome-section .search-box .search-results .search-result-item:last-child {\n  border-bottom: none;\n}\n.welcome-section .search-box .search-results .search-result-item:hover {\n  background: #f8fafc;\n}\n.welcome-section .search-box .search-results .search-result-item .result-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  flex-shrink: 0;\n}\n.welcome-section .search-box .search-results .search-result-item .result-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.welcome-section .search-box .search-results .search-result-item .result-avatar span {\n  color: white;\n  font-weight: 600;\n  font-size: 16px;\n}\n.welcome-section .search-box .search-results .search-result-item .result-info {\n  flex: 1;\n  min-width: 0;\n}\n.welcome-section .search-box .search-results .search-result-item .result-info .result-name {\n  display: block;\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.welcome-section .search-box .search-results .search-result-item .result-info .result-email {\n  display: block;\n  color: #64748b;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.welcome-section .search-box .search-results .search-result-item .badge {\n  flex-shrink: 0;\n  margin-left: 8px;\n  font-size: 10px;\n  padding: 4px 8px;\n}\n.welcome-section .search-box .search-results .no-results {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  color: #94a3b8;\n}\n.welcome-section .search-box .search-results .no-results i {\n  font-size: 24px;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.welcome-section .search-box .search-results .no-results span {\n  font-size: 14px;\n}\n.bg-primary-light {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.2) 0%,\n      rgba(125, 185, 255, 0.2) 100%);\n}\n.bg-primary-light i {\n  color: var(--primary-color);\n}\n.bg-success-light {\n  background: rgba(40, 199, 111, 0.15);\n}\n.bg-success-light i {\n  color: #28C76F;\n}\n.bg-info-light {\n  background: rgba(23, 162, 184, 0.15);\n}\n.bg-info-light i {\n  color: #17a2b8;\n}\n.bg-warning-light {\n  background: rgba(255, 159, 67, 0.15);\n}\n.bg-warning-light i {\n  color: #FF9F43;\n}\n.subscription-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.subscription-card {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 12px;\n  background: #f8f9fa;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.subscription-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.subscription-card .plan-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.subscription-card .plan-icon i {\n  font-size: 1.5rem;\n}\n.subscription-card .plan-info .plan-name {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.subscription-card .plan-info .plan-count {\n  font-size: 0.875rem;\n  color: var(--color-gray);\n  margin-bottom: 0;\n}\n.subscription-card.plan-free .plan-icon {\n  background: rgba(108, 117, 125, 0.15);\n}\n.subscription-card.plan-free .plan-icon i {\n  color: #6c757d;\n}\n.subscription-card.plan-basic .plan-icon {\n  background: rgba(125, 185, 255, 0.2);\n}\n.subscription-card.plan-basic .plan-icon i {\n  color: #7db9ff;\n}\n.subscription-card.plan-premium .plan-icon {\n  background: rgba(125, 211, 192, 0.2);\n}\n.subscription-card.plan-premium .plan-icon i {\n  color: #7dd3c0;\n}\n.subscription-card.plan-enterprise .plan-icon {\n  background: rgba(255, 159, 67, 0.2);\n}\n.subscription-card.plan-enterprise .plan-icon i {\n  color: #FF9F43;\n}\n.avatar-placeholder {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.quick-action-card {\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  transition: all 0.2s;\n  background: white;\n}\n.quick-action-card:hover {\n  border-color: var(--primary-color);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.2);\n}\n.quick-action-card i {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  margin-bottom: 0.5rem;\n}\n.quick-action-card small {\n  color: var(--text-color);\n  font-weight: 500;\n}\n.summary-list .summary-item {\n  padding: 0.5rem 0;\n}\n.summary-list .summary-item .summary-label {\n  color: var(--text-color);\n}\n.summary-list .summary-item .summary-value {\n  font-size: 1.1rem;\n}\n.skeleton-number {\n  width: 60px;\n  height: 28px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n.skeleton-chart {\n  width: 100%;\n  height: 150px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 8px;\n}\n.skeleton-row {\n  width: 100%;\n  height: 48px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n@media (max-width: 768px) {\n  .welcome-section {\n    background-color: var(--secondary-color);\n    padding-top: 40px !important;\n  }\n  .welcome-section .welcome-title {\n    font-size: 1.5rem;\n  }\n  .subscription-grid {\n    grid-template-columns: 1fr;\n  }\n  .mobile-view {\n    padding-bottom: 80px;\n  }\n}\n.stat-card {\n  border-radius: 12px;\n  border: none;\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  box-shadow: none;\n  transform: translateY(-2px);\n}\n.stat-card .stat-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card .stat-number {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card .stat-label {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n:host.mobile-mode ::ng-deep .main-header {\n  display: none !important;\n}\n.stats-scroll-section {\n  margin: -8px -12px 16px;\n  padding: 0 12px;\n}\n.stats-scroll-section .stats-scroll-container {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding: 8px 4px;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.stats-scroll-section .stats-scroll-container::-webkit-scrollbar {\n  display: none;\n}\n.mini-stat-card {\n  flex: 0 0 auto;\n  min-width: 120px;\n  background: #fff;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  scroll-snap-align: start;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mini-stat-card:active {\n  transform: scale(0.98);\n}\n.mini-stat-card .mini-stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mini-stat-card .mini-stat-icon i {\n  font-size: 20px;\n}\n.mini-stat-card .mini-stat-info {\n  text-align: center;\n}\n.mini-stat-card .mini-stat-info .mini-stat-value {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #1e293b;\n}\n.mini-stat-card .mini-stat-info .mini-stat-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 500;\n  color: #64748b;\n  margin-top: 2px;\n}\n.mini-stat-card .skeleton-mini {\n  width: 40px;\n  height: 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n.mini-stat-card.daycares .mini-stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15) 0%,\n      rgba(99, 102, 241, 0.25) 100%);\n}\n.mini-stat-card.daycares .mini-stat-icon i {\n  color: #6366f1;\n}\n.mini-stat-card.daycares .mini-stat-value {\n  color: #6366f1;\n}\n.mini-stat-card.active .mini-stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.15) 0%,\n      rgba(34, 197, 94, 0.25) 100%);\n}\n.mini-stat-card.active .mini-stat-icon i {\n  color: #22c55e;\n}\n.mini-stat-card.active .mini-stat-value {\n  color: #22c55e;\n}\n.mini-stat-card.parents .mini-stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.15) 0%,\n      rgba(59, 130, 246, 0.25) 100%);\n}\n.mini-stat-card.parents .mini-stat-icon i {\n  color: #3b82f6;\n}\n.mini-stat-card.parents .mini-stat-value {\n  color: #3b82f6;\n}\n.mini-stat-card.teachers .mini-stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(249, 115, 22, 0.15) 0%,\n      rgba(249, 115, 22, 0.25) 100%);\n}\n.mini-stat-card.teachers .mini-stat-icon i {\n  color: #f97316;\n}\n.mini-stat-card.teachers .mini-stat-value {\n  color: #f97316;\n}\n.mini-stat-card.children .mini-stat-icon {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(236, 72, 153, 0.15) 0%,\n      rgba(236, 72, 153, 0.25) 100%);\n}\n.mini-stat-card.children .mini-stat-icon i {\n  color: #ec4899;\n}\n.mini-stat-card.children .mini-stat-value {\n  color: #ec4899;\n}\n.daycares-list {\n  margin-bottom: 16px;\n}\n.daycares-list .title-all {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.daycares-list .title-all h5 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.daycares-list .title-all .view-all {\n  font-size: 13px;\n  padding: 4px 12px;\n}\n.tenants-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.tenants-list .skeleton-tenant-card {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 12px;\n}\n.tenant-card {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f1f5f9;\n  transition: all 0.2s;\n}\n.tenant-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.tenant-card .tenant-card-left {\n  flex-shrink: 0;\n  margin-right: 14px;\n}\n.tenant-card .tenant-card-left .tenant-avatar-lg {\n  width: 56px;\n  height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5f1 0%,\n      #d4ede5 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.tenant-card .tenant-card-left .tenant-avatar-lg img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tenant-card .tenant-card-left .tenant-avatar-lg span {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n.tenant-card .tenant-card-center {\n  flex: 1;\n  min-width: 0;\n}\n.tenant-card .tenant-card-center .tenant-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card .tenant-card-center .tenant-address {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card .tenant-card-center .tenant-email {\n  font-size: 12px;\n  color: #94a3b8;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tenant-card .tenant-card-right {\n  flex-shrink: 0;\n  margin-left: 12px;\n}\n.tenant-card .tenant-card-right .dropdown-wrapper {\n  position: relative;\n}\n.tenant-card .tenant-card-right .btn-dots {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tenant-card .tenant-card-right .btn-dots i {\n  font-size: 18px;\n}\n.tenant-card .tenant-card-right .btn-dots:hover {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.tenant-card .tenant-card-right .custom-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: none;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  padding: 8px;\n  min-width: 140px;\n  z-index: 1000;\n  margin-top: 4px;\n}\n.tenant-card .tenant-card-right .custom-dropdown .dropdown-item {\n  display: flex;\n  align-items: center;\n  padding: 10px 14px;\n  font-size: 14px;\n  border-radius: 6px;\n  color: #475569;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tenant-card .tenant-card-right .custom-dropdown .dropdown-item i {\n  color: #94a3b8;\n}\n.tenant-card .tenant-card-right .custom-dropdown .dropdown-item:hover {\n  background: #f8fafc;\n  color: var(--secondary-color);\n}\n.tenant-card .tenant-card-right .custom-dropdown .dropdown-item:hover i {\n  color: var(--secondary-color);\n}\n.notifications i {\n  font-size: 20px;\n  color: #fff;\n}\n/*# sourceMappingURL=super-admin-dashboard.css.map */\n"] }]
  }], () => [{ type: TenantService }, { type: AuthService }, { type: Router }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminDashboard, { className: "SuperAdminDashboard", filePath: "src/app/features/super-admin/dashboard/super-admin-dashboard.ts", lineNumber: 21 });
})();
export {
  SuperAdminDashboard
};
//# sourceMappingURL=chunk-KO4WFO2M.js.map
