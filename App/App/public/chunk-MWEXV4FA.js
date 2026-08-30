import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  FormsModule
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
  NgClass,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/super-admin/tenants/tenant-detail/tenant-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function TenantDetail_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function TenantDetail_div_1_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTenant());
    });
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function TenantDetail_div_1_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteTenant());
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function TenantDetail_div_1_div_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus());
    });
    \u0275\u0275element(10, "i", 20);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 21);
    \u0275\u0275listener("click", function TenantDetail_div_1_div_9_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.manageFeatures());
    });
    \u0275\u0275element(14, "i", 22);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Manage");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", ctx_r1.tenant.isActive ? "bi-pause-circle" : "bi-play-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.tenant.isActive ? "Deactivate" : "Activate");
  }
}
function TenantDetail_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    \u0275\u0275listener("click", function TenantDetail_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11)(7, "h5", 12);
    \u0275\u0275text(8, "Detail daycare");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(9, TenantDetail_div_1_div_9_Template, 17, 2, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.tenant);
  }
}
function TenantDetail_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", (ctx_r1.tenant == null ? null : ctx_r1.tenant.name) || \u0275\u0275pipeBind1(1, 4, "SUPER_ADMIN.DAYCARE_DETAILS"))("subtitle", \u0275\u0275pipeBind1(2, 6, "SUPER_ADMIN.DAYCARE_DETAILS_SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.getActions());
  }
}
function TenantDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TenantDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function TenantDetail_div_6_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.tenant.logo, \u0275\u0275sanitizeUrl)("alt", ctx_r1.tenant.name);
  }
}
function TenantDetail_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tenant.name.charAt(0).toUpperCase(), " ");
  }
}
function TenantDetail_div_6_a_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "mailto:" + ctx_r1.tenant.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tenant.email);
  }
}
function TenantDetail_div_6_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function TenantDetail_div_6_a_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "tel:" + ctx_r1.tenant.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.tenant.phone);
  }
}
function TenantDetail_div_6_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function TenantDetail_div_6_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "SUPER_ADMIN.EXPIRES_AT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.tenant.subscriptionExpiresAt));
  }
}
function TenantDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32);
    \u0275\u0275template(5, TenantDetail_div_6_img_5_Template, 1, 2, "img", 33)(6, TenantDetail_div_6_div_6_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h4", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 38)(17, "div", 39)(18, "h6", 40);
    \u0275\u0275element(19, "i", 41);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 28)(23, "div", 42)(24, "div", 43)(25, "label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 42)(31, "div", 43)(32, "label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 44)(38, "div", 43)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 39)(45, "h6", 40);
    \u0275\u0275element(46, "i", 45);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "div", 42)(51, "div", 43)(52, "label");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275template(56, TenantDetail_div_6_a_56_Template, 2, 2, "a", 46)(57, TenantDetail_div_6_span_57_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 42)(59, "div", 43)(60, "label");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p");
    \u0275\u0275template(64, TenantDetail_div_6_a_64_Template, 2, 2, "a", 46)(65, TenantDetail_div_6_span_65_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(66, "div", 48)(67, "h6", 40);
    \u0275\u0275element(68, "i", 49);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 28)(72, "div", 50)(73, "div", 43)(74, "label");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "p");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 50)(80, "div", 43)(81, "label");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "p");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 50)(87, "div", 43)(88, "label");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(93, "div", 51)(94, "div", 30)(95, "div", 52)(96, "h6", 53);
    \u0275\u0275element(97, "i", 54);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 38)(101, "div", 55)(102, "div", 56);
    \u0275\u0275element(103, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 58)(105, "span", 59);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span", 60);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(110, "div", 55)(111, "div", 61);
    \u0275\u0275element(112, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 58)(114, "span", 59);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span", 60);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(119, "div", 30)(120, "div", 52)(121, "h6", 53);
    \u0275\u0275element(122, "i", 63);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 38)(126, "div", 43)(127, "label");
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "p")(131, "span", 64);
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(133, TenantDetail_div_6_div_133_Template, 6, 4, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 66)(135, "div", 52)(136, "h6", 53);
    \u0275\u0275element(137, "i", 67);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 38)(141, "div", 43)(142, "label");
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "p");
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.tenant.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tenant.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tenant.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.tenant.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tenant.isActive ? \u0275\u0275pipeBind1(12, 41, "SUPER_ADMIN.ACTIVE") : \u0275\u0275pipeBind1(13, 43, "SUPER_ADMIN.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "plan-" + ctx_r1.tenant.subscriptionPlan.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tenant.subscriptionPlan, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 45, "SUPER_ADMIN.BASIC_INFO"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 47, "SUPER_ADMIN.DAYCARE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tenant.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 49, "SUPER_ADMIN.SUBDOMAIN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tenant.subdomain || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 51, "SUPER_ADMIN.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.tenant.address || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 53, "SUPER_ADMIN.CONTACT_INFO"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 55, "SUPER_ADMIN.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tenant.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tenant.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 57, "SUPER_ADMIN.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tenant.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.tenant.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 59, "SUPER_ADMIN.SETTINGS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 61, "SUPER_ADMIN.TIMEZONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTimezoneDisplay(ctx_r1.tenant.timezone));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 63, "SUPER_ADMIN.CURRENCY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getCurrencyDisplay(ctx_r1.tenant.currency));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 65, "SUPER_ADMIN.LANGUAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getLanguageDisplay(ctx_r1.tenant.language));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(99, 67, "SUPER_ADMIN.QUICK_STATS"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.tenant.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 69, "SUPER_ADMIN.USERS"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.tenant.childCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 71, "SUPER_ADMIN.CHILDREN"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 73, "SUPER_ADMIN.SUBSCRIPTION"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 75, "SUPER_ADMIN.CURRENT_PLAN"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "plan-" + ctx_r1.tenant.subscriptionPlan.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.tenant.subscriptionPlan, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tenant.subscriptionExpiresAt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(139, 77, "SUPER_ADMIN.DATES"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 79, "SUPER_ADMIN.CREATED_AT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.tenant.createdAt));
  }
}
var TenantDetail = class _TenantDetail {
  tenantService;
  route;
  router;
  location;
  translate;
  tenant = null;
  loading = true;
  error = null;
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  back() {
    this.location.back();
  }
  breadcrumbs = [];
  subscriptions = [];
  constructor(tenantService, route, router, location, translate) {
    this.tenantService = tenantService;
    this.route = route;
    this.router = router;
    this.location = location;
    this.translate = translate;
  }
  ngOnInit() {
    this.setupBreadcrumbs();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadTenantDetails(+id);
    }
    const langSub = this.translate.onLangChange.subscribe(() => {
      this.setupBreadcrumbs();
    });
    this.subscriptions.push(langSub);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("SUPER_ADMIN.DASHBOARD"), url: "/super-admin/dashboard" },
      { label: this.translate.instant("SUPER_ADMIN.DAYCARES"), url: "/super-admin/tenants" },
      { label: this.tenant?.name || this.translate.instant("SUPER_ADMIN.DAYCARE_DETAILS") }
    ];
  }
  loadTenantDetails(id) {
    this.loading = true;
    const sub = this.tenantService.getTenant(id).subscribe({
      next: (tenant) => {
        this.tenant = tenant;
        this.setupBreadcrumbs();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading tenant:", err);
        this.error = "Failed to load daycare details";
        this.loading = false;
      }
    });
    this.subscriptions.push(sub);
  }
  getActions() {
    const actions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-outline-secondary btn-cancel-global",
        action: () => this.goBack()
      }
    ];
    if (this.tenant) {
      actions.push({
        label: this.tenant.isActive ? this.translate.instant("SUPER_ADMIN.DEACTIVATE") : this.translate.instant("SUPER_ADMIN.ACTIVATE"),
        icon: this.tenant.isActive ? "bi bi-pause-circle" : "bi bi-play-circle",
        class: this.tenant.isActive ? "btn-view-global-2" : "btn-edit-global-2",
        action: () => this.toggleStatus()
      });
      actions.push({
        label: this.translate.instant("SUPER_ADMIN.MANAGE_FEATURES"),
        icon: "bi bi-toggles",
        class: "btn-view-global-2",
        action: () => this.manageFeatures()
      });
      actions.push({
        label: this.translate.instant("COMMON.EDIT"),
        icon: "bi bi-pencil-square",
        class: "btn-edit-global-2",
        action: () => this.editTenant()
      });
      actions.push({
        label: this.translate.instant("SUPER_ADMIN.DELETE"),
        icon: "bi bi-trash",
        class: "btn-remove-2",
        action: () => this.deleteTenant()
      });
    }
    return actions;
  }
  goBack() {
    this.router.navigate(["/super-admin/tenants"]);
  }
  editTenant() {
    if (this.tenant) {
      this.router.navigate(["/super-admin/tenants/edit", this.tenant.id]);
    }
  }
  manageFeatures() {
    if (this.tenant) {
      this.router.navigate(["/super-admin/tenants", this.tenant.id, "features"]);
    }
  }
  toggleStatus() {
    if (!this.tenant)
      return;
    const isActive = this.tenant.isActive;
    const actionText = isActive ? this.translate.instant("SUPER_ADMIN.DEACTIVATE_CONFIRM") : this.translate.instant("SUPER_ADMIN.ACTIVATE_CONFIRM");
    const confirmText = isActive ? this.translate.instant("SUPER_ADMIN.YES_DEACTIVATE") : this.translate.instant("SUPER_ADMIN.YES_ACTIVATE");
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: actionText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: isActive ? "#d33" : "#3085d6",
      cancelButtonColor: "#6c757d",
      confirmButtonText: confirmText,
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.tenantService.updateTenantStatus(this.tenant.id, !isActive).subscribe({
          next: () => {
            this.tenant.isActive = !isActive;
            const successMsg = isActive ? this.translate.instant("SUPER_ADMIN.DAYCARE_DEACTIVATED") : this.translate.instant("SUPER_ADMIN.DAYCARE_ACTIVATED");
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: () => {
            import_sweetalert2.default.fire(this.translate.instant("MESSAGES.ERROR"), this.translate.instant("SUPER_ADMIN.STATUS_UPDATE_FAILED"), "error");
          }
        });
      }
    });
  }
  deleteTenant() {
    if (!this.tenant)
      return;
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("SUPER_ADMIN.DELETE_WARNING", { name: this.tenant.name }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("SUPER_ADMIN.YES_DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.tenantService.deleteTenant(this.tenant.id).subscribe({
          next: () => {
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
            this.router.navigate(["/super-admin/tenants"]);
          },
          error: () => {
            import_sweetalert2.default.fire(this.translate.instant("MESSAGES.ERROR"), this.translate.instant("SUPER_ADMIN.DELETE_FAILED"), "error");
          }
        });
      }
    });
  }
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getTimezoneDisplay(timezone) {
    return timezone || "UTC";
  }
  getCurrencyDisplay(currency) {
    return currency || "USD";
  }
  getLanguageDisplay(language) {
    const languages = {
      "en": "English",
      "fr": "French",
      "it": "Italian"
    };
    return languages[language || "en"] || language || "English";
  }
  static \u0275fac = function TenantDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantDetail)(\u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantDetail, selectors: [["app-tenant-detail"]], hostVars: 2, hostBindings: function TenantDetail_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 7, vars: 7, consts: [["class", "mobile-view-superadmin", 4, "ngIf"], ["icon", "bi bi-building", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "mobile-view-superadmin"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], ["class", "action-icons-section", 4, "ngIf"], [1, "action-icons-section"], [1, "action-icon-btn", "edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "action-icon-btn", "delete", 3, "click"], [1, "bi", "bi-trash"], [1, "action-icon-btn", "activate", 3, "click"], [1, "bi", 3, "ngClass"], [1, "action-icon-btn", "manage", 3, "click"], [1, "bi", "bi-toggles"], ["icon", "bi bi-building", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "row"], [1, "col-lg-8"], [1, "card", "card-general", "shadow-sm", "mb-3"], [1, "card-header", "d-flex", "align-items-center"], [1, "tenant-avatar", "me-3"], ["class", "rounded-circle", "width", "60", "height", "60", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder-lg", 4, "ngIf"], [1, "mb-1"], [1, "badge", 3, "ngClass"], [1, "badge", "plan-badge", "ms-2", 3, "ngClass"], [1, "card-body"], [1, "info-section", "mb-4"], [1, "section-title"], [1, "bi", "bi-info-circle", "me-2"], [1, "col-md-6"], [1, "info-item"], [1, "col-md-12"], [1, "bi", "bi-telephone", "me-2"], [3, "href", 4, "ngIf"], [4, "ngIf"], [1, "info-section"], [1, "bi", "bi-gear", "me-2"], [1, "col-md-4"], [1, "col-lg-4"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-bar-chart", "me-2"], [1, "stat-item"], [1, "stat-icon", "bg-primary-light"], [1, "bi", "bi-people"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-icon", "bg-success-light"], [1, "bi", "bi-person-hearts"], [1, "bi", "bi-credit-card", "me-2"], [1, "badge", "plan-badge", 3, "ngClass"], ["class", "info-item", 4, "ngIf"], [1, "card", "card-general", "shadow-sm"], [1, "bi", "bi-calendar", "me-2"], ["width", "60", "height", "60", 1, "rounded-circle", 3, "src", "alt"], [1, "avatar-placeholder-lg"], [3, "href"]], template: function TenantDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, TenantDetail_div_1_Template, 10, 1, "div", 0);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275template(3, TenantDetail_app_title_page_3_Template, 3, 8, "app-title-page", 1)(4, TenantDetail_div_4_Template, 4, 0, "div", 2)(5, TenantDetail_div_5_Template, 2, 1, "div", 3)(6, TenantDetail_div_6_Template, 147, 81, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isMobile() ? "mobileview mobile-view container-fluid mt-4" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tenant && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent, TranslatePipe], styles: ["\n\n.avatar-placeholder-lg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.35em 0.65em;\n}\n.plan-badge.plan-free[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic[_ngcontent-%COMP%] {\n  background-color: rgba(125, 185, 255, 0.2);\n  color: #0d6efd;\n}\n.plan-badge.plan-premium[_ngcontent-%COMP%] {\n  background-color: rgba(125, 211, 192, 0.2);\n  color: #198754;\n}\n.plan-badge.plan-enterprise[_ngcontent-%COMP%] {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #fd7e14;\n}\n.info-section[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.info-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  font-weight: 600;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.info-item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--color-gray);\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--title-color);\n  font-weight: 500;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.stat-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.stat-icon.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: rgba(125, 211, 192, 0.15);\n  color: var(--primary-color);\n}\n.stat-icon.bg-success-light[_ngcontent-%COMP%] {\n  background-color: rgba(25, 135, 84, 0.15);\n  color: #198754;\n}\n.stat-icon.bg-warning-light[_ngcontent-%COMP%] {\n  background-color: rgba(255, 193, 7, 0.15);\n  color: #ffc107;\n}\n.stat-icon.bg-info-light[_ngcontent-%COMP%] {\n  background-color: rgba(13, 202, 240, 0.15);\n  color: #0dcaf0;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--title-color);\n  line-height: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-gray);\n  margin-top: 0.25rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem;\n}\n.card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  font-weight: 600;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.tenant-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.mobile-view[_ngcontent-%COMP%] {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.edit[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.edit[_ngcontent-%COMP%]:hover {\n  background: rgba(59, 130, 246, 0.1);\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.delete[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.delete[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.activate[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.activate[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 197, 94, 0.1);\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.manage[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .action-icons-section[_ngcontent-%COMP%]   .action-icon-btn.manage[_ngcontent-%COMP%]:hover {\n  background: rgba(249, 115, 22, 0.1);\n}\n/*# sourceMappingURL=tenant-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantDetail, [{
    type: Component,
    args: [{ selector: "app-tenant-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent], template: `<app-header-superadmin></app-header-superadmin>\r
<div *ngIf="isMobile()" class="mobile-view-superadmin">\r
  <div class="header-info">\r
    <div class="title-icons">\r
      <div class="page-back" (click)="back()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
    </div>\r
    <div class="d-flex">\r
      <div class="overflow-hidden">\r
        <h5 class="name simple">Detail daycare</h5>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Action Icons Section -->\r
  <div class="action-icons-section" *ngIf="tenant">\r
    <button class="action-icon-btn edit" (click)="editTenant()">\r
      <i class="bi bi-pencil-square"></i>\r
      <span>Edit</span>\r
    </button>\r
    <button class="action-icon-btn delete" (click)="deleteTenant()">\r
      <i class="bi bi-trash"></i>\r
      <span>Delete</span>\r
    </button>\r
    <button class="action-icon-btn activate" (click)="toggleStatus()">\r
      <i class="bi" [ngClass]="tenant.isActive ? 'bi-pause-circle' : 'bi-play-circle'"></i>\r
      <span>{{ tenant.isActive ? 'Deactivate' : 'Activate' }}</span>\r
    </button>\r
    <button class="action-icon-btn manage" (click)="manageFeatures()">\r
      <i class="bi bi-toggles"></i>\r
      <span>Manage</span>\r
    </button>\r
  </div>\r
</div>\r
<div [class]="isMobile() ? 'mobileview mobile-view container-fluid mt-4' : 'container-fluid mt-4'">\r
  <app-title-page *ngIf=" !isMobile()"\r
    [title]="tenant?.name || ('SUPER_ADMIN.DAYCARE_DETAILS' | translate)"\r
    [subtitle]="'SUPER_ADMIN.DAYCARE_DETAILS_SUBTITLE' | translate"\r
    icon="bi bi-building"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="getActions()">\r
  </app-title-page>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="error" class="alert alert-danger">\r
    {{ error }}\r
  </div>\r
\r
  <!-- Tenant Details -->\r
  <div *ngIf="tenant && !loading" class="row">\r
    <!-- Main Info Card -->\r
    <div class="col-lg-8">\r
      <div class="card card-general shadow-sm mb-3">\r
        <div class="card-header d-flex align-items-center">\r
          <div class="tenant-avatar me-3">\r
            <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name" class="rounded-circle" width="60" height="60">\r
            <div *ngIf="!tenant.logo" class="avatar-placeholder-lg">\r
              {{ tenant.name.charAt(0).toUpperCase() }}\r
            </div>\r
          </div>\r
          <div>\r
            <h4 class="mb-1">{{ tenant.name }}</h4>\r
            <span class="badge" [ngClass]="tenant.isActive ? 'bg-success' : 'bg-danger'">\r
              {{ tenant.isActive ? ('SUPER_ADMIN.ACTIVE' | translate) : ('SUPER_ADMIN.INACTIVE' | translate) }}\r
            </span>\r
            <span class="badge plan-badge ms-2" [ngClass]="'plan-' + tenant.subscriptionPlan.toLowerCase()">\r
              {{ tenant.subscriptionPlan }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <!-- Basic Information -->\r
          <div class="info-section mb-4">\r
            <h6 class="section-title">\r
              <i class="bi bi-info-circle me-2"></i>\r
              {{ 'SUPER_ADMIN.BASIC_INFO' | translate }}\r
            </h6>\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.DAYCARE_NAME' | translate }}</label>\r
                  <p>{{ tenant.name }}</p>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.SUBDOMAIN' | translate }}</label>\r
                  <p>{{ tenant.subdomain || 'N/A' }}</p>\r
                </div>\r
              </div>\r
              <div class="col-md-12">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.ADDRESS' | translate }}</label>\r
                  <p>{{ tenant.address || 'N/A' }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Contact Information -->\r
          <div class="info-section mb-4">\r
            <h6 class="section-title">\r
              <i class="bi bi-telephone me-2"></i>\r
              {{ 'SUPER_ADMIN.CONTACT_INFO' | translate }}\r
            </h6>\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.EMAIL' | translate }}</label>\r
                  <p>\r
                    <a *ngIf="tenant.email" [href]="'mailto:' + tenant.email">{{ tenant.email }}</a>\r
                    <span *ngIf="!tenant.email">N/A</span>\r
                  </p>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.PHONE' | translate }}</label>\r
                  <p>\r
                    <a *ngIf="tenant.phone" [href]="'tel:' + tenant.phone">{{ tenant.phone }}</a>\r
                    <span *ngIf="!tenant.phone">N/A</span>\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Settings -->\r
          <div class="info-section">\r
            <h6 class="section-title">\r
              <i class="bi bi-gear me-2"></i>\r
              {{ 'SUPER_ADMIN.SETTINGS' | translate }}\r
            </h6>\r
            <div class="row">\r
              <div class="col-md-4">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.TIMEZONE' | translate }}</label>\r
                  <p>{{ getTimezoneDisplay(tenant.timezone) }}</p>\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.CURRENCY' | translate }}</label>\r
                  <p>{{ getCurrencyDisplay(tenant.currency) }}</p>\r
                </div>\r
              </div>\r
              <div class="col-md-4">\r
                <div class="info-item">\r
                  <label>{{ 'SUPER_ADMIN.LANGUAGE' | translate }}</label>\r
                  <p>{{ getLanguageDisplay(tenant.language) }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Stats Sidebar -->\r
    <div class="col-lg-4">\r
      <!-- Quick Stats -->\r
      <div class="card card-general shadow-sm mb-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\r
            <i class="bi bi-bar-chart me-2"></i>\r
            {{ 'SUPER_ADMIN.QUICK_STATS' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="stat-item">\r
            <div class="stat-icon bg-primary-light">\r
              <i class="bi bi-people"></i>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-value">{{ tenant.userCount }}</span>\r
              <span class="stat-label">{{ 'SUPER_ADMIN.USERS' | translate }}</span>\r
            </div>\r
          </div>\r
          <div class="stat-item">\r
            <div class="stat-icon bg-success-light">\r
              <i class="bi bi-person-hearts"></i>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-value">{{ tenant.childCount }}</span>\r
              <span class="stat-label">{{ 'SUPER_ADMIN.CHILDREN' | translate }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Subscription Info -->\r
      <div class="card card-general shadow-sm mb-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\r
            <i class="bi bi-credit-card me-2"></i>\r
            {{ 'SUPER_ADMIN.SUBSCRIPTION' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="info-item">\r
            <label>{{ 'SUPER_ADMIN.CURRENT_PLAN' | translate }}</label>\r
            <p>\r
              <span class="badge plan-badge" [ngClass]="'plan-' + tenant.subscriptionPlan.toLowerCase()">\r
                {{ tenant.subscriptionPlan }}\r
              </span>\r
            </p>\r
          </div>\r
          <div class="info-item" *ngIf="tenant.subscriptionExpiresAt">\r
            <label>{{ 'SUPER_ADMIN.EXPIRES_AT' | translate }}</label>\r
            <p>{{ formatDate(tenant.subscriptionExpiresAt) }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Dates -->\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header">\r
          <h6 class="mb-0">\r
            <i class="bi bi-calendar me-2"></i>\r
            {{ 'SUPER_ADMIN.DATES' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="info-item">\r
            <label>{{ 'SUPER_ADMIN.CREATED_AT' | translate }}</label>\r
            <p>{{ formatDate(tenant.createdAt) }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/super-admin/tenants/tenant-detail/tenant-detail.scss */\n.avatar-placeholder-lg {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n.plan-badge {\n  font-weight: 500;\n  padding: 0.35em 0.65em;\n}\n.plan-badge.plan-free {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic {\n  background-color: rgba(125, 185, 255, 0.2);\n  color: #0d6efd;\n}\n.plan-badge.plan-premium {\n  background-color: rgba(125, 211, 192, 0.2);\n  color: #198754;\n}\n.plan-badge.plan-enterprise {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #fd7e14;\n}\n.info-section {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.info-section:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.section-title {\n  color: var(--title-color);\n  font-weight: 600;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n.section-title i {\n  color: var(--primary-color);\n}\n.info-item {\n  margin-bottom: 1rem;\n}\n.info-item label {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--color-gray);\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item p {\n  margin: 0;\n  color: var(--title-color);\n  font-weight: 500;\n}\n.info-item p a {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.info-item p a:hover {\n  text-decoration: underline;\n}\n.stat-item {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.stat-item:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.stat-item:first-child {\n  padding-top: 0;\n}\n.stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.stat-icon i {\n  font-size: 1.25rem;\n}\n.stat-icon.bg-primary-light {\n  background-color: rgba(125, 211, 192, 0.15);\n  color: var(--primary-color);\n}\n.stat-icon.bg-success-light {\n  background-color: rgba(25, 135, 84, 0.15);\n  color: #198754;\n}\n.stat-icon.bg-warning-light {\n  background-color: rgba(255, 193, 7, 0.15);\n  color: #ffc107;\n}\n.stat-icon.bg-info-light {\n  background-color: rgba(13, 202, 240, 0.15);\n  color: #0dcaf0;\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--title-color);\n  line-height: 1;\n}\n.stat-label {\n  font-size: 0.85rem;\n  color: var(--color-gray);\n  margin-top: 0.25rem;\n}\n.card-header {\n  background-color: transparent;\n  border-bottom: 1px solid var(--color-border);\n  padding: 1rem 1.25rem;\n}\n.card-header h6 {\n  color: var(--title-color);\n  font-weight: 600;\n}\n.card-body {\n  padding: 1.25rem;\n}\n.tenant-avatar img {\n  object-fit: cover;\n}\n.mobile-view {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin .header-info {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin .header-info h5 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin .header-info .page-back i {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view-superadmin .action-icons-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  padding: 10px 16px;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn i {\n  font-size: 22px;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn span {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.edit {\n  color: #3b82f6;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.edit:hover {\n  background: rgba(59, 130, 246, 0.1);\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.delete {\n  color: #ef4444;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.delete:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.activate {\n  color: #22c55e;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.activate:hover {\n  background: rgba(34, 197, 94, 0.1);\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.manage {\n  color: #f97316;\n}\n.mobile-view-superadmin .action-icons-section .action-icon-btn.manage:hover {\n  background: rgba(249, 115, 22, 0.1);\n}\n/*# sourceMappingURL=tenant-detail.css.map */\n"] }]
  }], () => [{ type: TenantService }, { type: ActivatedRoute }, { type: Router }, { type: Location }, { type: TranslateService }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantDetail, { className: "TenantDetail", filePath: "src/app/features/super-admin/tenants/tenant-detail/tenant-detail.ts", lineNumber: 23 });
})();
export {
  TenantDetail
};
//# sourceMappingURL=chunk-MWEXV4FA.js.map
