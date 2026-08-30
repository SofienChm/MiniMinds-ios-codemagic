import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
import "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  Location,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  HostBinding,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/super-admin/tenants/tenants.ts
var _c0 = () => ["/super-admin/tenants/add"];
var _c1 = () => [1, 2, 3];
var _c2 = (a0) => ["/super-admin/tenants/detail", a0];
var _c3 = () => [1, 2, 3, 4, 5];
var _c4 = (a0) => ["/super-admin/tenants/edit", a0];
function Tenants_div_1_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
}
function Tenants_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, Tenants_div_1_div_18_div_1_Template, 1, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function Tenants_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "p", 41);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SUPER_ADMIN.NO_DAYCARES_FOUND"));
  }
}
function Tenants_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 44);
    \u0275\u0275element(3, "circle", 45)(4, "circle", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 48)(8, "span", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 52)(15, "div", 53)(16, "span", 54);
    \u0275\u0275text(17, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 55)(19, "div", 56)(20, "div", 57);
    \u0275\u0275element(21, "i", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "span", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 60)(25, "span", 61);
    \u0275\u0275text(26, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 62);
    \u0275\u0275element(28, "i", 63);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const tenant_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c2, tenant_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke-dasharray", 163.36)("stroke-dashoffset", 163.36 - 163.36 * (tenant_r3.childCount || 0) / 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r3.childCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", tenant_r3.isActive ? "active" : "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r3.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tenant_r3.address || tenant_r3.email || tenant_r3.subdomain);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(tenant_r3.userCount);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 12, tenant_r3.createdAt, "MMM d, yyyy"));
  }
}
function Tenants_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275listener("click", function Tenants_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24)(7, "h5", 25);
    \u0275\u0275text(8, " Daycare");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 26)(10, "div", 27)(11, "input", 28);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Tenants_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Tenants_div_1_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 29);
    \u0275\u0275element(14, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 31);
    \u0275\u0275element(16, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33);
    \u0275\u0275template(18, Tenants_div_1_div_18_Template, 2, 2, "div", 15)(19, Tenants_div_1_div_19_Template, 5, 3, "div", 34)(20, Tenants_div_1_div_20_Template, 32, 17, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 7, "SUPER_ADMIN.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.displayedTenants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedTenants)("ngForTrackBy", ctx_r1.trackById);
  }
}
function Tenants_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 6, "SUPER_ADMIN.DAYCARES_MANAGEMENT")))("subtitle", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 8, "SUPER_ADMIN.DAYCARES_SUBTITLE")))("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.titleActions);
  }
}
function Tenants_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r4.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function Tenants_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r5.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function Tenants_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function Tenants_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "SUPER_ADMIN.CLEAR_FILTERS"), " ");
  }
}
function Tenants_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 71);
  }
}
function Tenants_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, Tenants_div_25_div_1_Template, 1, 0, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function Tenants_div_26_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementStart(3, "p", 41);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SUPER_ADMIN.NO_DAYCARES_FOUND"));
  }
}
function Tenants_div_26_tr_30_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 105);
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", tenant_r8.logo, \u0275\u0275sanitizeUrl)("alt", tenant_r8.name);
  }
}
function Tenants_div_26_tr_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.name.charAt(0).toUpperCase(), " ");
  }
}
function Tenants_div_26_tr_30_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tenant_r8.subdomain);
  }
}
function Tenants_div_26_tr_30_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 83);
    \u0275\u0275element(1, "i", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tenant_r8.phone, " ");
  }
}
function Tenants_div_26_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 78)(1, "td")(2, "div", 79)(3, "div", 80);
    \u0275\u0275template(4, Tenants_div_26_tr_30_img_4_Template, 1, 2, "img", 81)(5, Tenants_div_26_tr_30_div_5_Template, 2, 1, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, Tenants_div_26_tr_30_small_9_Template, 2, 1, "small", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 85)(12, "small", 83);
    \u0275\u0275element(13, "i", 86);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, Tenants_div_26_tr_30_small_15_Template, 3, 1, "small", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 74)(17, "span", 88);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 74)(20, "span", 88);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "span", 89);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td")(26, "span", 90);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "small", 91);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td", 92);
    \u0275\u0275listener("click", function Tenants_div_26_tr_30_Template_td_click_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(35, "div", 93)(36, "button", 94);
    \u0275\u0275element(37, "i", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ul", 96)(39, "li")(40, "a", 97);
    \u0275\u0275element(41, "i", 98);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "li")(45, "a", 97);
    \u0275\u0275element(46, "i", 99);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275element(50, "hr", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li")(52, "a", 101);
    \u0275\u0275listener("click", function Tenants_div_26_tr_30_Template_a_click_52_listener($event) {
      const tenant_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(tenant_r8, $event));
    });
    \u0275\u0275element(53, "i", 102);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "li")(58, "a", 103);
    \u0275\u0275listener("click", function Tenants_div_26_tr_30_Template_a_click_58_listener($event) {
      const tenant_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTenant(tenant_r8, $event));
    });
    \u0275\u0275element(59, "i", 104);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const tenant_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(38, _c2, tenant_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", tenant_r8.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tenant_r8.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tenant_r8.subdomain);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", tenant_r8.email || "-", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tenant_r8.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r8.userCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r8.childCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "plan-" + tenant_r8.subscriptionPlan.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.subscriptionPlan, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", tenant_r8.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.isActive ? \u0275\u0275pipeBind1(28, 21, "SUPER_ADMIN.ACTIVE") : \u0275\u0275pipeBind1(29, 23, "SUPER_ADMIN.INACTIVE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 25, tenant_r8.createdAt, "MMM d, yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(40, _c2, tenant_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(43, 28, "SUPER_ADMIN.VIEW"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(42, _c4, tenant_r8.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(48, 30, "SUPER_ADMIN.EDIT"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", tenant_r8.isActive ? "bi-pause-circle" : "bi-play-circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r8.isActive ? \u0275\u0275pipeBind1(55, 32, "SUPER_ADMIN.DEACTIVATE") : \u0275\u0275pipeBind1(56, 34, "SUPER_ADMIN.ACTIVATE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(61, 36, "SUPER_ADMIN.DELETE"), " ");
  }
}
function Tenants_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "table", 73)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 74);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 74);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 74);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, Tenants_div_26_tr_29_Template, 6, 3, "tr", 75)(30, Tenants_div_26_tr_30_Template, 62, 44, "tr", 76);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "SUPER_ADMIN.TABLE_DAYCARE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "SUPER_ADMIN.TABLE_CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "SUPER_ADMIN.TABLE_USERS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "SUPER_ADMIN.TABLE_CHILDREN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "SUPER_ADMIN.TABLE_PLAN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "SUPER_ADMIN.TABLE_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "SUPER_ADMIN.TABLE_CREATED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "SUPER_ADMIN.TABLE_ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.displayedTenants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedTenants)("ngForTrackBy", ctx_r1.trackById);
  }
}
function Tenants_div_27_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 110)(1, "a", 111);
    \u0275\u0275listener("click", function Tenants_div_27_li_10_Template_a_click_1_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r11));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r11);
  }
}
function Tenants_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nav")(6, "ul", 109)(7, "li", 110)(8, "a", 111);
    \u0275\u0275listener("click", function Tenants_div_27_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(9, "i", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, Tenants_div_27_li_10_Template, 3, 3, "li", 113);
    \u0275\u0275elementStart(11, "li", 110)(12, "a", 111);
    \u0275\u0275listener("click", function Tenants_div_27_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(13, "i", 114);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate5(" ", \u0275\u0275pipeBind1(3, 10, "SUPER_ADMIN.SHOWING"), " ", (ctx_r1.currentPage - 1) * ctx_r1.itemsPerPage + 1, " - ", ctx_r1.currentPage * ctx_r1.itemsPerPage > ctx_r1.filteredTenants.length ? ctx_r1.filteredTenants.length : ctx_r1.currentPage * ctx_r1.itemsPerPage, " ", \u0275\u0275pipeBind1(4, 12, "SUPER_ADMIN.OF"), " ", ctx_r1.filteredTenants.length, " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var Tenants = class _Tenants {
  tenantService;
  route;
  router;
  location;
  tenants = [];
  filteredTenants = [];
  displayedTenants = [];
  loading = true;
  searchTerm = "";
  statusFilter = "all";
  sortBy = "recent";
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  // Title page config
  breadcrumbs = [
    { label: "Dashboard", url: "/super-admin/dashboard" },
    { label: "Daycares", url: "/super-admin/tenants" }
  ];
  back() {
    this.location.back();
  }
  titleActions = [];
  initTitleActions() {
    this.titleActions = [
      {
        label: "Add Daycare",
        icon: "bi-plus-circle",
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/super-admin/tenants/add"])
      }
    ];
  }
  statusOptions = [
    { value: "all", label: "All Status", icon: "bi-list" },
    { value: "active", label: "Active", icon: "bi-check-circle" },
    { value: "inactive", label: "Inactive", icon: "bi-x-circle" }
  ];
  sortOptions = [
    { value: "recent", label: "Recently Added", icon: "bi-clock" },
    { value: "name-asc", label: "Name (A-Z)", icon: "bi-sort-alpha-down" },
    { value: "name-desc", label: "Name (Z-A)", icon: "bi-sort-alpha-up" },
    { value: "users", label: "Most Users", icon: "bi-people" },
    { value: "children", label: "Most Children", icon: "bi-person" }
  ];
  subscriptions = [];
  constructor(tenantService, route, router, location) {
    this.tenantService = tenantService;
    this.route = route;
    this.router = router;
    this.location = location;
  }
  ngOnInit() {
    this.initTitleActions();
    this.route.queryParams.subscribe((params) => {
      if (params["status"]) {
        this.statusFilter = params["status"];
      }
    });
    this.loadTenants();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadTenants() {
    this.loading = true;
    const sub = this.tenantService.loadTenants().subscribe({
      next: (tenants) => {
        this.tenants = tenants;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading tenants:", err);
        this.loading = false;
      }
    });
    this.subscriptions.push(sub);
  }
  applyFilters() {
    let result = [...this.tenants];
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter((t) => t.name.toLowerCase().includes(term) || t.email?.toLowerCase().includes(term) || t.subdomain?.toLowerCase().includes(term) || t.phone?.includes(term));
    }
    if (this.statusFilter !== "all") {
      const isActive = this.statusFilter === "active";
      result = result.filter((t) => t.isActive === isActive);
    }
    result = this.sortTenants(result);
    this.filteredTenants = result;
    this.totalPages = Math.ceil(result.length / this.itemsPerPage);
    this.currentPage = 1;
    this.updateDisplayedTenants();
  }
  sortTenants(tenants) {
    switch (this.sortBy) {
      case "name-asc":
        return tenants.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return tenants.sort((a, b) => b.name.localeCompare(a.name));
      case "users":
        return tenants.sort((a, b) => b.userCount - a.userCount);
      case "children":
        return tenants.sort((a, b) => b.childCount - a.childCount);
      case "recent":
      default:
        return tenants.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }
  updateDisplayedTenants() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedTenants = this.filteredTenants.slice(start, end);
  }
  onSearch() {
    this.applyFilters();
  }
  onStatusChange() {
    this.applyFilters();
  }
  onSortChange() {
    this.applyFilters();
  }
  clearFilters() {
    this.searchTerm = "";
    this.statusFilter = "all";
    this.applyFilters();
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedTenants();
    }
  }
  toggleStatus(tenant, event) {
    event.stopPropagation();
    const newStatus = !tenant.isActive;
    this.tenantService.updateTenantStatus(tenant.id, newStatus).subscribe({
      next: () => {
        tenant.isActive = newStatus;
      },
      error: (err) => {
        console.error("Error updating status:", err);
      }
    });
  }
  deleteTenant(tenant, event) {
    event.stopPropagation();
    if (confirm(`Are you sure you want to delete "${tenant.name}"? This action cannot be undone and will delete all associated data.`)) {
      this.tenantService.deleteTenant(tenant.id).subscribe({
        next: () => {
          this.tenants = this.tenants.filter((t) => t.id !== tenant.id);
          this.applyFilters();
        },
        error: (err) => {
          console.error("Error deleting tenant:", err);
        }
      });
    }
  }
  trackById(index, item) {
    return item.id;
  }
  getPageNumbers() {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  static \u0275fac = function Tenants_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tenants)(\u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tenants, selectors: [["app-tenants"]], hostVars: 2, hostBindings: function Tenants_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 28, vars: 33, consts: [["class", "mobile-view", 4, "ngIf"], [1, "container-fluid", "mt-4", "mb-4"], ["icon", "bi bi-building", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "ngModel", "placeholder"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], [1, "text-muted", "ms-2"], [1, "card", "card-general", "shadow-sm"], [1, "card-body", "p-0"], ["class", "p-4", 4, "ngIf"], ["class", "table-responsive custom-table ", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center p-3 border-top", 4, "ngIf"], [1, "mobile-view"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], [1, "search-add-section"], [1, "search-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "search-btn"], [1, "bi", "bi-search"], [1, "add-btn", 3, "routerLink"], [1, "bi", "bi-plus"], [1, "container-fluid", "superadmin-content", "mt-4"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card daycare-card mb-3", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-4"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "text-center", "py-5"], [1, "bi", "bi-inbox", 2, "font-size", "3rem", "opacity", "0.25"], [1, "mt-3", "mb-0", "text-muted"], [1, "card", "daycare-card", "mb-3", 3, "routerLink"], [1, "progress-container"], ["viewBox", "0 0 60 60", 1, "progress-ring"], ["cx", "30", "cy", "30", "r", "26", 1, "progress-ring-bg"], ["cx", "30", "cy", "30", "r", "26", 1, "progress-ring-fill"], [1, "progress-text"], [1, "title-section"], [1, "status-badge", 3, "ngClass"], [1, "daycare-name"], [1, "daycare-address"], [1, "bottom-section"], [1, "team-section"], [1, "team-label"], [1, "team-avatars"], [1, "avatar-stack"], [1, "avatar"], [1, "bi", "bi-person-fill"], [1, "user-count"], [1, "date-section"], [1, "date-label"], [1, "date-value"], [1, "bi", "bi-calendar3"], ["icon", "bi bi-building", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-x-circle", "me-1"], ["class", "skeleton-row", 4, "ngFor", "ngForOf"], [1, "skeleton-row"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0", "tenants-table"], [1, "text-center"], [4, "ngIf"], ["style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["colspan", "8", 1, "text-center", "py-5"], [2, "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "tenant-avatar", "me-3"], ["class", "rounded-circle", "width", "40", "height", "40", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "d-block"], ["class", "text-muted", 4, "ngIf"], [1, "contact-info"], [1, "bi", "bi-envelope", "me-1", "text-muted"], ["class", "d-block", 4, "ngIf"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "plan-badge", 3, "ngClass"], [1, "badge", 3, "ngClass"], [1, "text-muted"], [1, "text-center", 3, "click"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-light"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "routerLink"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-pencil-square", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "bi", "me-2", 3, "ngClass"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-2"], ["width", "40", "height", "40", 1, "rounded-circle", 3, "src", "alt"], [1, "avatar-placeholder"], [1, "bi", "bi-telephone", "me-1", "text-muted"], [1, "d-flex", "justify-content-between", "align-items-center", "p-3", "border-top"], [1, "pagination", "pagination-sm", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "bi", "bi-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"]], template: function Tenants_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, Tenants_div_1_Template, 21, 10, "div", 0);
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275template(3, Tenants_app_title_page_3_Template, 3, 10, "app-title-page", 2);
      \u0275\u0275elementStart(4, "div", 3)(5, "h4", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Tenants_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Tenants_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "ng-select", 9);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Tenants_Template_ng_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Tenants_Template_ng_select_change_13_listener() {
        return ctx.onStatusChange();
      });
      \u0275\u0275template(15, Tenants_ng_template_15_Template, 4, 4, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ng-select", 9);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Tenants_Template_ng_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Tenants_Template_ng_select_change_16_listener() {
        return ctx.onSortChange();
      });
      \u0275\u0275template(18, Tenants_ng_template_18_Template, 4, 4, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, Tenants_button_19_Template, 4, 3, "button", 11);
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 13)(24, "div", 14);
      \u0275\u0275template(25, Tenants_div_25_Template, 2, 2, "div", 15)(26, Tenants_div_26_Template, 31, 27, "div", 16)(27, Tenants_div_27_Template, 14, 14, "div", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isMobile() ? "mobileview" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 23, "SUPER_ADMIN.DAYCARES_GRID"));
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 25, "SUPER_ADMIN.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275property("items", ctx.statusOptions)("placeholder", \u0275\u0275pipeBind1(14, 27, "SUPER_ADMIN.STATUS"))("clearable", true)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275property("items", ctx.sortOptions)("placeholder", \u0275\u0275pipeBind1(17, 29, "SUPER_ADMIN.SORT_BY"))("clearable", false)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.searchTerm || ctx.statusFilter !== "all");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2(" ", ctx.filteredTenants.length, " ", \u0275\u0275pipeBind1(22, 31, "SUPER_ADMIN.RESULTS"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.totalPages > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TitlePage, HeaderSuperadminComponent, DatePipe, TranslatePipe], styles: ["\n\n.tenants-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--title-color);\n  border-bottom: 2px solid var(--color-border);\n  padding: 1rem;\n  white-space: nowrap;\n}\n.tenants-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  vertical-align: middle;\n}\n.tenants-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s;\n}\n.tenants-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(125, 211, 192, 0.05);\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.contact-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.35em 0.65em;\n}\n.plan-badge.plan-free[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic[_ngcontent-%COMP%] {\n  background-color: rgba(125, 185, 255, 0.2);\n  color: #0d6efd;\n}\n.plan-badge.plan-premium[_ngcontent-%COMP%] {\n  background-color: rgba(125, 211, 192, 0.2);\n  color: #198754;\n}\n.plan-badge.plan-enterprise[_ngcontent-%COMP%] {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #fd7e14;\n}\n.skeleton-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  border-color: var(--color-border);\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: var(--color-gray);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.mobile-mode[_nghost-%COMP%]     .main-header {\n  display: none !important;\n}\n.mobile-view[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #1e293b;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  border: none;\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.mobile-view[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n  background: var(--secondary-color);\n  color: #fff;\n}\n.mobile-view[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%] {\n  height: 160px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 16px;\n  margin-bottom: 16px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: none;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   .progress-ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #e5e7eb;\n  stroke-width: 5;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-ring[_ngcontent-%COMP%]   .progress-ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #f97316;\n  stroke-width: 5;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.3s;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n  font-weight: 700;\n  color: #3b82f6;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  padding-right: 70px;\n  margin-bottom: 20px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #16a34a;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .daycare-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .daycare-address[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 16px;\n  margin-top: 8px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-section[_ngcontent-%COMP%], \n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-section[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%], \n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-section[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%], \n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-section[_ngcontent-%COMP%]   .team-label[_ngcontent-%COMP%], \n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-section[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-stack[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-stack[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  margin-right: -8px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-stack[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-stack[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .avatar-stack[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .team-avatars[_ngcontent-%COMP%]   .user-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.mobile-view[_ngcontent-%COMP%]   .daycare-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=tenants.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tenants, [{
    type: Component,
    args: [{ selector: "app-tenants", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, NgSelectModule, TitlePage, HeaderSuperadminComponent], template: `<app-header-superadmin></app-header-superadmin>
<div *ngIf="isMobile()" class="mobile-view">
  <div class="header-info">
    <div class="title-icons">
      <div class="page-back" (click)="back()">
        <i class="bi bi-arrow-left"></i>
      </div>
    </div>
    <div class="d-flex">
      <div class="overflow-hidden">
        <h5 class="name simple"> Daycare</h5>
      </div>
    </div>
  </div>

  <!-- Search and Add Section -->
  <div class="search-add-section">
    <div class="search-container">
      <input type="text"
             class="search-input"
             [placeholder]="'SUPER_ADMIN.SEARCH_PLACEHOLDER' | translate"
             [(ngModel)]="searchTerm"
             (input)="onSearch()">
      <button class="search-btn">
        <i class="bi bi-search"></i>
      </button>
    </div>
    <button class="add-btn" [routerLink]="['/super-admin/tenants/add']">
      <i class="bi bi-plus"></i>
    </button>
  </div>

  <div class="container-fluid superadmin-content mt-4">
    <!-- Loading -->
    <div *ngIf="loading" class="p-4">
      <div class="skeleton-card" *ngFor="let i of [1,2,3]"></div>
    </div>

    <!-- No results -->
    <div *ngIf="!loading && displayedTenants.length === 0" class="text-center py-5">
      <i class="bi bi-inbox" style="font-size: 3rem; opacity: 0.25;"></i>
      <p class="mt-3 mb-0 text-muted">{{ 'SUPER_ADMIN.NO_DAYCARES_FOUND' | translate }}</p>
    </div>

    <!-- Daycare Cards -->
    <div class="card daycare-card mb-3"
         *ngFor="let tenant of displayedTenants; trackBy: trackById"
         [routerLink]="['/super-admin/tenants/detail', tenant.id]">

      <!-- Progress Circle -->
      <div class="progress-container">
        <svg class="progress-ring" viewBox="0 0 60 60">
          <circle class="progress-ring-bg" cx="30" cy="30" r="26" />
          <circle class="progress-ring-fill"
                  cx="30" cy="30" r="26"
                  [style.strokeDasharray]="163.36"
                  [style.strokeDashoffset]="163.36 - (163.36 * (tenant.childCount || 0) / 100)" />
        </svg>
        <span class="progress-text">{{ tenant.childCount || 0 }}</span>
      </div>

      <!-- Title Section -->
      <div class="title-section">
        <span class="status-badge" [ngClass]="tenant.isActive ? 'active' : 'inactive'">
          {{ tenant.isActive ? 'Active' : 'Inactive' }}
        </span>
        <h3 class="daycare-name">{{ tenant.name }}</h3>
        <p class="daycare-address">{{ tenant.address || tenant.email || tenant.subdomain }}</p>
      </div>

      <!-- Bottom Section -->
      <div class="bottom-section">
        <div class="team-section">
          <span class="team-label">Users</span>
          <div class="team-avatars">
            <div class="avatar-stack">
              <div class="avatar">
                <i class="bi bi-person-fill"></i>
              </div>
            </div>
            <span class="user-count">{{ tenant.userCount }}</span>
          </div>
        </div>
        <div class="date-section">
          <span class="date-label">Created</span>
          <div class="date-value">
            <i class="bi bi-calendar3"></i>
            <span>{{ tenant.createdAt | date:'MMM d, yyyy' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container-fluid mt-4 mb-4" [class]="isMobile() ? 'mobileview' : 'container-fluid mt-4'">
  <app-title-page  *ngIf=" !isMobile()"
    title="{{ 'SUPER_ADMIN.DAYCARES_MANAGEMENT' | translate }}"
    subtitle="{{ 'SUPER_ADMIN.DAYCARES_SUBTITLE' | translate }}"
    icon="bi bi-building"
    [breadcrumbs]="breadcrumbs"
    [actions]="titleActions">
  </app-title-page>

  <!-- View Controls -->
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">
    <h4 class="title-filter">{{ 'SUPER_ADMIN.DAYCARES_GRID' | translate }}</h4>
    <div class="d-flex align-items-center flex-wrap gap-2">
      <!-- Search Input -->
      <div class="search-box">
        <i class="bi bi-search search-icon"></i>
        <input
          type="text"
          class="form-control search-input"
          [(ngModel)]="searchTerm"
          (input)="onSearch()"
          [placeholder]="'SUPER_ADMIN.SEARCH_PLACEHOLDER' | translate">
      </div>

      <!-- Status Filter -->
      <ng-select
        class="filter-select"
        [(ngModel)]="statusFilter"
        [items]="statusOptions"
        bindLabel="label"
        bindValue="value"
        [placeholder]="'SUPER_ADMIN.STATUS' | translate"
        [clearable]="true"
        [searchable]="false"
        (change)="onStatusChange()">
        <ng-template ng-option-tmp let-item="item">
          <div class="option-with-image">
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>
            <span class="option-title">{{ item.label }}</span>
          </div>
        </ng-template>
      </ng-select>

      <!-- Sort Select -->
      <ng-select
        class="filter-select"
        [(ngModel)]="sortBy"
        [items]="sortOptions"
        bindLabel="label"
        bindValue="value"
        [placeholder]="'SUPER_ADMIN.SORT_BY' | translate"
        [clearable]="false"
        [searchable]="false"
        (change)="onSortChange()">
        <ng-template ng-option-tmp let-item="item">
          <div class="option-with-image">
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>
            <span class="option-title">{{ item.label }}</span>
          </div>
        </ng-template>
      </ng-select>

      <!-- Clear Filters -->
      <button *ngIf="searchTerm || statusFilter !== 'all'" class="btn btn-outline-secondary btn-sm"
        (click)="clearFilters()">
        <i class="bi bi-x-circle me-1"></i>{{ 'SUPER_ADMIN.CLEAR_FILTERS' | translate }}
      </button>

      <!-- Results count -->
      <span class="text-muted ms-2">
        {{ filteredTenants.length }} {{ 'SUPER_ADMIN.RESULTS' | translate }}
      </span>
    </div>
  </div>

  <!-- Tenants Table -->
  <div class="card card-general shadow-sm">
    <div class="card-body p-0">
      <!-- Loading -->
      <div *ngIf="loading" class="p-4">
        <div class="skeleton-row" *ngFor="let i of [1,2,3,4,5]"></div>
      </div>

      <!-- Table -->
      <div *ngIf="!loading" class="table-responsive custom-table ">
        <table class="table table-hover mb-0 tenants-table">
          <thead>
            <tr>
              <th>{{ 'SUPER_ADMIN.TABLE_DAYCARE' | translate }}</th>
              <th>{{ 'SUPER_ADMIN.TABLE_CONTACT' | translate }}</th>
              <th class="text-center">{{ 'SUPER_ADMIN.TABLE_USERS' | translate }}</th>
              <th class="text-center">{{ 'SUPER_ADMIN.TABLE_CHILDREN' | translate }}</th>
              <th>{{ 'SUPER_ADMIN.TABLE_PLAN' | translate }}</th>
              <th>{{ 'SUPER_ADMIN.TABLE_STATUS' | translate }}</th>
              <th>{{ 'SUPER_ADMIN.TABLE_CREATED' | translate }}</th>
              <th class="text-center">{{ 'SUPER_ADMIN.TABLE_ACTIONS' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="displayedTenants.length === 0">
              <td colspan="8" class="text-center py-5">
                <i class="bi bi-inbox" style="font-size: 3rem; opacity: 0.25;"></i>
                <p class="mt-3 mb-0 text-muted">{{ 'SUPER_ADMIN.NO_DAYCARES_FOUND' | translate }}</p>
              </td>
            </tr>
            <tr *ngFor="let tenant of displayedTenants; trackBy: trackById"
                [routerLink]="['/super-admin/tenants/detail', tenant.id]"
                style="cursor: pointer;">
              <td>
                <div class="d-flex align-items-center">
                  <div class="tenant-avatar me-3">
                    <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name" class="rounded-circle" width="40" height="40">
                    <div *ngIf="!tenant.logo" class="avatar-placeholder">
                      {{ tenant.name.charAt(0).toUpperCase() }}
                    </div>
                  </div>
                  <div>
                    <strong class="d-block">{{ tenant.name }}</strong>
                    <small class="text-muted" *ngIf="tenant.subdomain">{{ tenant.subdomain }}</small>
                  </div>
                </div>
              </td>
              <td>
                <div class="contact-info">
                  <small class="d-block">
                    <i class="bi bi-envelope me-1 text-muted"></i>
                    {{ tenant.email || '-' }}
                  </small>
                  <small class="d-block" *ngIf="tenant.phone">
                    <i class="bi bi-telephone me-1 text-muted"></i>
                    {{ tenant.phone }}
                  </small>
                </div>
              </td>
              <td class="text-center">
                <span class="badge bg-light text-dark">{{ tenant.userCount }}</span>
              </td>
              <td class="text-center">
                <span class="badge bg-light text-dark">{{ tenant.childCount }}</span>
              </td>
              <td>
                <span class="badge plan-badge" [ngClass]="'plan-' + tenant.subscriptionPlan.toLowerCase()">
                  {{ tenant.subscriptionPlan }}
                </span>
              </td>
              <td>
                <span class="badge" [ngClass]="tenant.isActive ? 'bg-success' : 'bg-danger'">
                  {{ tenant.isActive ? ('SUPER_ADMIN.ACTIVE' | translate) : ('SUPER_ADMIN.INACTIVE' | translate) }}
                </span>
              </td>
              <td>
                <small class="text-muted">{{ tenant.createdAt | date:'MMM d, yyyy' }}</small>
              </td>
              <td class="text-center" (click)="$event.stopPropagation()">
                <div class="dropdown">
                  <button class="btn btn-sm btn-light" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" [routerLink]="['/super-admin/tenants/detail', tenant.id]">
                        <i class="bi bi-eye me-2"></i>{{ 'SUPER_ADMIN.VIEW' | translate }}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" [routerLink]="['/super-admin/tenants/edit', tenant.id]">
                        <i class="bi bi-pencil-square me-2"></i>{{ 'SUPER_ADMIN.EDIT' | translate }}
                      </a>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item" (click)="toggleStatus(tenant, $event)">
                        <i class="bi me-2" [ngClass]="tenant.isActive ? 'bi-pause-circle' : 'bi-play-circle'"></i>
                        {{ tenant.isActive ? ('SUPER_ADMIN.DEACTIVATE' | translate) : ('SUPER_ADMIN.ACTIVATE' | translate) }}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-danger" (click)="deleteTenant(tenant, $event)">
                        <i class="bi bi-trash me-2"></i>{{ 'SUPER_ADMIN.DELETE' | translate }}
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div *ngIf="!loading && totalPages > 1" class="d-flex justify-content-between align-items-center p-3 border-top">
        <div class="text-muted">
          {{ 'SUPER_ADMIN.SHOWING' | translate }} {{ (currentPage - 1) * itemsPerPage + 1 }} -
          {{ currentPage * itemsPerPage > filteredTenants.length ? filteredTenants.length : currentPage * itemsPerPage }}
          {{ 'SUPER_ADMIN.OF' | translate }} {{ filteredTenants.length }}
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item" [class.disabled]="currentPage === 1">
              <a class="page-link" (click)="goToPage(currentPage - 1)">
                <i class="bi bi-chevron-left"></i>
              </a>
            </li>
            <li *ngFor="let page of getPageNumbers()"
                class="page-item"
                [class.active]="page === currentPage">
              <a class="page-link" (click)="goToPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" [class.disabled]="currentPage === totalPages">
              <a class="page-link" (click)="goToPage(currentPage + 1)">
                <i class="bi bi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/super-admin/tenants/tenants.scss */\n.tenants-table th {\n  font-weight: 600;\n  color: var(--title-color);\n  border-bottom: 2px solid var(--color-border);\n  padding: 1rem;\n  white-space: nowrap;\n}\n.tenants-table td {\n  padding: 1rem;\n  vertical-align: middle;\n}\n.tenants-table tbody tr {\n  transition: background-color 0.15s;\n}\n.tenants-table tbody tr:hover {\n  background-color: rgba(125, 211, 192, 0.05);\n}\n.avatar-placeholder {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.contact-info small {\n  font-size: 0.8rem;\n}\n.plan-badge {\n  font-weight: 500;\n  padding: 0.35em 0.65em;\n}\n.plan-badge.plan-free {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic {\n  background-color: rgba(125, 185, 255, 0.2);\n  color: #0d6efd;\n}\n.plan-badge.plan-premium {\n  background-color: rgba(125, 211, 192, 0.2);\n  color: #198754;\n}\n.plan-badge.plan-enterprise {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #fd7e14;\n}\n.skeleton-row {\n  width: 100%;\n  height: 60px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.pagination .page-link {\n  color: var(--title-color);\n  border-color: var(--color-border);\n}\n.pagination .page-link:hover {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n  color: white;\n}\n.pagination .page-item.active .page-link {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.pagination .page-item.disabled .page-link {\n  color: var(--color-gray);\n}\n.dropdown-menu {\n  border: none;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.dropdown-menu .dropdown-item {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.dropdown-menu .dropdown-item:hover {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.dropdown-menu .dropdown-item.text-danger:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n:host.mobile-mode ::ng-deep .main-header {\n  display: none !important;\n}\n.mobile-view .header-info {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view .header-info h5 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view .header-info .page-back i {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view .search-add-section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view .search-add-section .search-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.mobile-view .search-add-section .search-container .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #1e293b;\n}\n.mobile-view .search-add-section .search-container .search-input::placeholder {\n  color: #94a3b8;\n}\n.mobile-view .search-add-section .search-container .search-btn {\n  background: var(--secondary-color);\n  border: none;\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-view .search-add-section .search-container .search-btn i {\n  color: #fff;\n  font-size: 16px;\n}\n.mobile-view .search-add-section .add-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view .search-add-section .add-btn i {\n  font-size: 20px;\n  font-weight: 600;\n}\n.mobile-view .search-add-section .add-btn:hover {\n  background: var(--secondary-color);\n  color: #fff;\n}\n.mobile-view .skeleton-card {\n  height: 160px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 16px;\n  margin-bottom: 16px;\n}\n.mobile-view .daycare-card {\n  position: relative;\n  background: #fff;\n  border-radius: 16px;\n  padding: 20px;\n  border: none;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.mobile-view .daycare-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n}\n.mobile-view .daycare-card .progress-container {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n}\n.mobile-view .daycare-card .progress-container .progress-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.mobile-view .daycare-card .progress-container .progress-ring .progress-ring-bg {\n  fill: none;\n  stroke: #e5e7eb;\n  stroke-width: 5;\n}\n.mobile-view .daycare-card .progress-container .progress-ring .progress-ring-fill {\n  fill: none;\n  stroke: #f97316;\n  stroke-width: 5;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.3s;\n}\n.mobile-view .daycare-card .progress-container .progress-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n  font-weight: 700;\n  color: #3b82f6;\n}\n.mobile-view .daycare-card .title-section {\n  padding-right: 70px;\n  margin-bottom: 20px;\n}\n.mobile-view .daycare-card .title-section .status-badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.mobile-view .daycare-card .title-section .status-badge.active {\n  background: rgba(34, 197, 94, 0.15);\n  color: #16a34a;\n}\n.mobile-view .daycare-card .title-section .status-badge.inactive {\n  background: rgba(239, 68, 68, 0.15);\n  color: #dc2626;\n}\n.mobile-view .daycare-card .title-section .daycare-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 4px;\n}\n.mobile-view .daycare-card .title-section .daycare-address {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mobile-view .daycare-card .bottom-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 16px;\n  margin-top: 8px;\n}\n.mobile-view .daycare-card .bottom-section .team-section,\n.mobile-view .daycare-card .bottom-section .date-section {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.mobile-view .daycare-card .bottom-section .team-section .team-label,\n.mobile-view .daycare-card .bottom-section .team-section .date-label,\n.mobile-view .daycare-card .bottom-section .date-section .team-label,\n.mobile-view .daycare-card .bottom-section .date-section .date-label {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .avatar-stack {\n  display: flex;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .avatar-stack .avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #fff;\n  margin-right: -8px;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .avatar-stack .avatar:last-child {\n  margin-right: 0;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .avatar-stack .avatar i {\n  color: #fff;\n  font-size: 14px;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .avatar-stack .avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.mobile-view .daycare-card .bottom-section .team-avatars .user-count {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n  background: #f1f5f9;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.mobile-view .daycare-card .bottom-section .date-value {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #475569;\n  font-weight: 500;\n}\n.mobile-view .daycare-card .bottom-section .date-value i {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=tenants.css.map */\n"] }]
  }], () => [{ type: TenantService }, { type: ActivatedRoute }, { type: Router }, { type: Location }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tenants, { className: "Tenants", filePath: "src/app/features/super-admin/tenants/tenants.ts", lineNumber: 21 });
})();
export {
  Tenants
};
//# sourceMappingURL=chunk-ARQ4OW56.js.map
