import {
  BillingService
} from "./chunk-2NHN4JHI.js";
import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/super-admin/billing/billing.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => ["/super-admin/billing", a0];
function Billing_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275listener("click", function Billing_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13)(7, "h5", 14);
    \u0275\u0275text(8, " Billing");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "input", 17);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Billing_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Billing_div_1_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 18);
    \u0275\u0275element(14, "i", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function Billing_div_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(16, "i", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 2, "BILLING.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
  }
}
function Billing_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 3, "BILLING.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 5, "BILLING.SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs);
  }
}
function Billing_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27);
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29)(7, "h3", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 31);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 24)(13, "div", 25)(14, "div", 26)(15, "div", 32);
    \u0275\u0275element(16, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 29)(18, "h3", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 31);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(23, "div", 24)(24, "div", 25)(25, "div", 26)(26, "div", 34);
    \u0275\u0275element(27, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 29)(29, "h3", 30);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 31);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26)(37, "div", 36);
    \u0275\u0275element(38, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 29)(40, "h3", 30);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 31);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.summary.totalRevenue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "BILLING.TOTAL_REVENUE"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.summary.totalPending));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 10, "BILLING.TOTAL_PENDING"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summary.paidTenantsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 12, "BILLING.PAID_DAYCARES"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summary.unpaidTenantsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 14, "BILLING.UNPAID_DAYCARES"));
  }
}
function Billing_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function Billing_div_6_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275elementStart(3, "p", 66);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "BILLING.NO_DATA"));
  }
}
function Billing_div_6_tr_59_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 80);
  }
  if (rf & 2) {
    const tenant_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", tenant_r5.logo, \u0275\u0275sanitizeUrl)("alt", tenant_r5.name);
  }
}
function Billing_div_6_tr_59_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tenant_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r5.name.charAt(0).toUpperCase(), " ");
  }
}
function Billing_div_6_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 67)(3, "div", 68);
    \u0275\u0275template(4, Billing_div_6_tr_59_img_4_Template, 1, 2, "img", 69)(5, Billing_div_6_tr_59_div_5_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 71)(10, "span", 72);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "td")(15, "span", 73);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 74);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 75);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "div", 76)(29, "a", 77);
    \u0275\u0275element(30, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 79);
    \u0275\u0275listener("click", function Billing_div_6_tr_59_Template_button_click_31_listener() {
      const tenant_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.billingForm.patchValue({ tenantId: tenant_r5.id });
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(32, "i", 21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tenant_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", tenant_r5.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tenant_r5.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tenant_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", tenant_r5.isActive ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r5.isActive ? \u0275\u0275pipeBind1(12, 15, "BILLING.ACTIVE") : \u0275\u0275pipeBind1(13, 17, "BILLING.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "plan-" + tenant_r5.subscriptionPlan.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r5.subscriptionPlan, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(tenant_r5.totalPaid));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", tenant_r5.totalPending > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tenant_r5.totalPending > 0 ? ctx_r1.formatCurrency(tenant_r5.totalPending) : "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateDisplay(tenant_r5.lastPaymentDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(tenant_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 19, ctx_r1.getStatusLabel(tenant_r5)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, tenant_r5.id));
  }
}
function Billing_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "h5", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function Billing_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(7, "i", 46);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47)(11, "div", 48)(12, "div", 49)(13, "div", 50);
    \u0275\u0275element(14, "i", 51);
    \u0275\u0275elementStart(15, "input", 52);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Billing_div_6_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Billing_div_6_Template_input_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 53)(18, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function Billing_div_6_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Billing_div_6_Template_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusFilterChange());
    });
    \u0275\u0275elementStart(19, "option", 55);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 56);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 57);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 58);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 59)(32, "div", 60)(33, "table", 61)(34, "thead")(35, "tr")(36, "th");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "tbody");
    \u0275\u0275template(58, Billing_div_6_tr_58_Template, 6, 3, "tr", 62)(59, Billing_div_6_tr_59_Template, 33, 23, "tr", 63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 19, "BILLING.DAYCARES_BILLING"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 21, "BILLING.ADD_PAYMENT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 23, "BILLING.SEARCH_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 25, "BILLING.ALL_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 27, "BILLING.FILTER_PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 29, "BILLING.FILTER_UNPAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 31, "BILLING.FILTER_PENDING"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 33, "BILLING.TABLE_DAYCARE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 35, "BILLING.TABLE_PLAN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 37, "BILLING.TABLE_TOTAL_PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 39, "BILLING.TABLE_PENDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 41, "BILLING.TABLE_LAST_PAYMENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 43, "BILLING.TABLE_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 45, "BILLING.TABLE_ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.filteredTenants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredTenants)("ngForTrackBy", ctx_r1.trackById);
  }
}
function Billing_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("click", function Billing_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275elementEnd();
  }
}
function Billing_div_8_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.label);
  }
}
function Billing_div_8_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    \u0275\u0275property("value", m_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r9.label);
  }
}
function Billing_div_8_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function Billing_div_8_i_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 35);
  }
}
function Billing_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "div", 85)(3, "h5", 86);
    \u0275\u0275element(4, "i", 87);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 88);
    \u0275\u0275listener("click", function Billing_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 89);
    \u0275\u0275listener("ngSubmit", function Billing_div_8_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 90)(10, "div", 48)(11, "div", 91)(12, "label", 92);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "ng-select", 93);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 94)(18, "label", 92);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 96)(23, "label", 92);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 97)(27, "option", 98);
    \u0275\u0275text(28, "EUR (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 99);
    \u0275\u0275text(30, "USD ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 100);
    \u0275\u0275text(32, "GBP (\xA3)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 49)(34, "label", 92);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 49)(39, "label", 92);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 102);
    \u0275\u0275template(43, Billing_div_8_option_43_Template, 2, 2, "option", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 49)(45, "label", 92);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 49)(50, "label", 92);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 49)(55, "label", 92);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "select", 106);
    \u0275\u0275template(59, Billing_div_8_option_59_Template, 2, 2, "option", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 49)(61, "label", 92);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 91)(66, "label", 92);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "textarea", 108);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 109)(72, "button", 110);
    \u0275\u0275listener("click", function Billing_div_8_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    });
    \u0275\u0275element(73, "i", 37);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 111);
    \u0275\u0275template(77, Billing_div_8_span_77_Template, 1, 0, "span", 112)(78, Billing_div_8_i_78_Template, 1, 0, "i", 113);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 28, "BILLING.ADD_PAYMENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.billingForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 30, "BILLING.SELECT_DAYCARE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("tenantId"));
    \u0275\u0275property("items", ctx_r1.tenants)("placeholder", \u0275\u0275pipeBind1(16, 32, "BILLING.SELECT_DAYCARE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 34, "BILLING.AMOUNT"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 36, "BILLING.CURRENCY"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(36, 38, "BILLING.PAYMENT_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("paymentDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 40, "BILLING.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.statuses);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 42, "BILLING.PERIOD_START"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 44, "BILLING.PERIOD_END"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 46, "BILLING.PAYMENT_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 48, "BILLING.INVOICE_NUMBER"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 50, "BILLING.NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(70, 52, "BILLING.NOTES_PLACEHOLDER"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(75, 54, "BILLING.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 56, "BILLING.SAVE_PAYMENT"), " ");
  }
}
var Billing = class _Billing {
  billingService;
  tenantService;
  fb;
  location;
  translate;
  summary = null;
  tenants = [];
  loading = true;
  showAddModal = false;
  billingForm;
  submitting = false;
  searchTerm = "";
  statusFilter = "";
  filteredTenants = [];
  breadcrumbs = [
    { label: "Dashboard", url: "/super-admin/dashboard" },
    { label: "Billing Management" }
  ];
  paymentMethods = [
    { value: "BankTransfer", label: "Bank Transfer" },
    { value: "CreditCard", label: "Credit Card" },
    { value: "Cash", label: "Cash" },
    { value: "Check", label: "Check" },
    { value: "Other", label: "Other" }
  ];
  statuses = [
    { value: "Pending", label: "Pending" },
    { value: "Paid", label: "Paid" },
    { value: "Failed", label: "Failed" },
    { value: "Refunded", label: "Refunded" }
  ];
  subscriptions = [];
  constructor(billingService, tenantService, fb, location, translate) {
    this.billingService = billingService;
    this.tenantService = tenantService;
    this.fb = fb;
    this.location = location;
    this.translate = translate;
  }
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  back() {
    this.location.back();
  }
  ngOnInit() {
    this.initForm();
    this.loadData();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  initForm() {
    this.billingForm = this.fb.group({
      tenantId: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      currency: ["EUR"],
      paymentDate: [this.formatDate(/* @__PURE__ */ new Date()), Validators.required],
      periodStart: [""],
      periodEnd: [""],
      status: ["Paid"],
      paymentMethod: ["BankTransfer"],
      invoiceNumber: [""],
      notes: [""]
    });
  }
  formatDate(date) {
    return date.toISOString().split("T")[0];
  }
  loadData() {
    this.loading = true;
    const summarySubscription = this.billingService.getSummary().subscribe({
      next: (summary) => {
        this.summary = summary;
        this.filteredTenants = summary.tenants;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading billing summary:", err);
        this.loading = false;
      }
    });
    this.subscriptions.push(summarySubscription);
    const tenantsSubscription = this.tenantService.loadTenants().subscribe({
      next: (tenants) => {
        this.tenants = tenants;
      },
      error: (err) => {
        console.error("Error loading tenants:", err);
      }
    });
    this.subscriptions.push(tenantsSubscription);
  }
  onSearch() {
    this.applyFilters();
  }
  onStatusFilterChange() {
    this.applyFilters();
  }
  applyFilters() {
    if (!this.summary)
      return;
    let filtered = [...this.summary.tenants];
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((t) => t.name.toLowerCase().includes(term));
    }
    if (this.statusFilter === "paid") {
      filtered = filtered.filter((t) => t.totalPaid > 0);
    } else if (this.statusFilter === "unpaid") {
      filtered = filtered.filter((t) => t.totalPaid === 0);
    } else if (this.statusFilter === "pending") {
      filtered = filtered.filter((t) => t.totalPending > 0);
    }
    this.filteredTenants = filtered;
  }
  openAddModal() {
    this.billingForm.reset({
      currency: "EUR",
      paymentDate: this.formatDate(/* @__PURE__ */ new Date()),
      status: "Paid",
      paymentMethod: "BankTransfer"
    });
    this.showAddModal = true;
  }
  closeAddModal() {
    this.showAddModal = false;
  }
  onSubmit() {
    if (this.billingForm.invalid) {
      Object.keys(this.billingForm.controls).forEach((key) => {
        this.billingForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.submitting = true;
    const formData = this.billingForm.value;
    const billing = {
      tenantId: formData.tenantId,
      amount: formData.amount,
      currency: formData.currency,
      paymentDate: new Date(formData.paymentDate),
      periodStart: formData.periodStart ? new Date(formData.periodStart) : void 0,
      periodEnd: formData.periodEnd ? new Date(formData.periodEnd) : void 0,
      status: formData.status,
      paymentMethod: formData.paymentMethod,
      invoiceNumber: formData.invoiceNumber,
      notes: formData.notes
    };
    this.billingService.create(billing).subscribe({
      next: () => {
        this.submitting = false;
        this.showAddModal = false;
        this.loadData();
        showSuccessToast(this.translate.instant("BILLING.PAYMENT_ADDED"));
      },
      error: (err) => {
        this.submitting = false;
        console.error("Error creating billing:", err);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("BILLING.ERROR"),
          text: err.error?.message || "Failed to add payment"
        });
      }
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.billingForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  formatCurrency(amount, currency = "EUR") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency
    }).format(amount);
  }
  formatDateDisplay(date) {
    if (!date)
      return "-";
    return new Date(date).toLocaleDateString();
  }
  getStatusClass(tenant) {
    if (tenant.totalPending > 0)
      return "status-pending";
    if (tenant.totalPaid > 0)
      return "status-paid";
    return "status-unpaid";
  }
  getStatusLabel(tenant) {
    if (tenant.totalPending > 0)
      return "BILLING.HAS_PENDING";
    if (tenant.totalPaid > 0)
      return "BILLING.PAID";
    return "BILLING.NO_PAYMENTS";
  }
  trackById(index, item) {
    return item.id;
  }
  static \u0275fac = function Billing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Billing)(\u0275\u0275directiveInject(BillingService), \u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Billing, selectors: [["app-billing"]], hostVars: 2, hostBindings: function Billing_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 9, vars: 9, consts: [["class", "mobile-view-superadmin", 4, "ngIf"], ["icon", "bi bi-cash-stack", 3, "title", "subtitle", "breadcrumbs", 4, "ngIf"], ["class", "row g-3 mb-4", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card card-general shadow-sm", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-dialog-custom", 4, "ngIf"], [1, "mobile-view-superadmin"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], [1, "search-add-section"], [1, "search-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "placeholder", "ngModel"], [1, "search-btn"], [1, "bi", "bi-search"], [1, "add-btn", 3, "click"], [1, "bi", "bi-plus"], ["icon", "bi bi-cash-stack", 3, "title", "subtitle", "breadcrumbs"], [1, "row", "g-3", "mb-4"], [1, "col-xl-3", "col-md-6"], [1, "card", "stat-card", "shadow-sm"], [1, "card-body", "d-flex", "align-items-center", "p-3"], [1, "stat-icon-wrapper", "me-3", "bg-success-light"], [1, "bi", "bi-cash-coin"], [1, "stat-content"], [1, "stat-number"], [1, "stat-label", "mb-0"], [1, "stat-icon-wrapper", "me-3", "bg-warning-light"], [1, "bi", "bi-hourglass-split"], [1, "stat-icon-wrapper", "me-3", "bg-primary-light"], [1, "bi", "bi-check-circle"], [1, "stat-icon-wrapper", "me-3", "bg-danger-light"], [1, "bi", "bi-x-circle"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card", "card-general", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], [1, "mb-0"], [1, "bi", "bi-building", "me-2"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "card-body", "border-bottom"], [1, "row", "g-3"], [1, "col-md-6"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "paid"], ["value", "unpaid"], ["value", "pending"], [1, "card-body"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["colspan", "7", 1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-inbox", 2, "font-size", "2rem", "opacity", "0.3"], [1, "mt-2", "mb-0"], [1, "d-flex", "align-items-center"], [1, "tenant-avatar", "me-2"], ["class", "rounded-circle", "width", "36", "height", "36", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "d-block", "text-muted"], [3, "ngClass"], [1, "badge", "plan-badge", 3, "ngClass"], [1, "text-success", "fw-bold"], [1, "badge", 3, "ngClass"], [1, "d-flex", "gap-1"], ["title", "View History", 1, "btn", "btn-sm", "btn-view", 3, "routerLink"], [1, "bi", "bi-eye"], ["title", "Add Payment", 1, "btn", "btn-sm", "btn-add", 3, "click"], ["width", "36", "height", "36", 1, "rounded-circle", 3, "src", "alt"], [1, "avatar-placeholder"], [1, "modal-backdrop", 3, "click"], [1, "modal-dialog-custom"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-plus-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "col-12"], [1, "form-label"], ["formControlName", "tenantId", "bindLabel", "name", "bindValue", "id", 3, "items", "placeholder"], [1, "col-md-8"], ["type", "number", "formControlName", "amount", "step", "0.01", "min", "0", 1, "form-control"], [1, "col-md-4"], ["formControlName", "currency", 1, "form-select"], ["value", "EUR"], ["value", "USD"], ["value", "GBP"], ["type", "date", "formControlName", "paymentDate", 1, "form-control"], ["formControlName", "status", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "periodStart", 1, "form-control"], ["type", "date", "formControlName", "periodEnd", 1, "form-control"], ["formControlName", "paymentMethod", 1, "form-select"], ["type", "text", "formControlName", "invoiceNumber", "placeholder", "INV-2024-001", 1, "form-control"], ["formControlName", "notes", "rows", "2", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [3, "value"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function Billing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, Billing_div_1_Template, 17, 4, "div", 0);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275template(3, Billing_app_title_page_3_Template, 3, 7, "app-title-page", 1)(4, Billing_div_4_Template, 45, 16, "div", 2)(5, Billing_div_5_Template, 4, 0, "div", 3)(6, Billing_div_6_Template, 60, 47, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, Billing_div_7_Template, 1, 0, "div", 5)(8, Billing_div_8_Template, 81, 58, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isMobile() ? "mobileview mobile-view container-fluid mt-4" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.summary);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    TranslateModule,
    NgSelectModule,
    NgSelectComponent,
    TitlePage,
    HeaderSuperadminComponent,
    TranslatePipe
  ], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  transition: transform 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #7db9ff !important;\n  color: #ffffff !important;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  border-radius: 8px;\n}\n.tenant-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.plan-badge.plan-free[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic[_ngcontent-%COMP%] {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.plan-badge.plan-premium[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.plan-badge.plan-enterprise[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.status-paid[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-unpaid[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.btn-add[_ngcontent-%COMP%] {\n  background-color: rgba(40, 167, 69, 0.1);\n  color: #28a745;\n  border: none;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  background-color: rgba(40, 167, 69, 0.2);\n  color: #1e7e34;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.modal-dialog-custom[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-dialog-custom[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog-custom[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-dialog-custom[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.modal-dialog-custom[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-dialog-custom[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ced4da;\n  padding: 0.5rem 0.75rem;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\nng-select.is-invalid[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.mobile-view[_ngcontent-%COMP%] {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #1e293b;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  border: none;\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]:hover {\n  background: var(--secondary-color);\n  color: #fff;\n}\n/*# sourceMappingURL=billing.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Billing, [{
    type: Component,
    args: [{ selector: "app-billing", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      NgSelectModule,
      TitlePage,
      HeaderSuperadminComponent
    ], template: `<app-header-superadmin></app-header-superadmin>\r
<div *ngIf="isMobile()" class="mobile-view-superadmin">\r
  <div class="header-info">\r
    <div class="title-icons">\r
      <div class="page-back" (click)="back()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
    </div>\r
    <div class="d-flex">\r
      <div class="overflow-hidden">\r
        <h5 class="name simple"> Billing</h5>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Add Section -->\r
  <div class="search-add-section">\r
    <div class="search-container">\r
      <input type="text"\r
             class="search-input"\r
             [placeholder]="'BILLING.SEARCH_PLACEHOLDER' | translate"\r
             [(ngModel)]="searchTerm"\r
             (ngModelChange)="onSearch()">\r
      <button class="search-btn">\r
        <i class="bi bi-search"></i>\r
      </button>\r
    </div>\r
    <button class="add-btn" (click)="openAddModal()">\r
      <i class="bi bi-plus"></i>\r
    </button>\r
  </div>\r
</div>\r
<div [class]="isMobile() ? 'mobileview mobile-view container-fluid mt-4' : 'container-fluid mt-4'">\r
  <app-title-page *ngIf=" !isMobile()"\r
    [title]="'BILLING.TITLE' | translate"\r
    [subtitle]="'BILLING.SUBTITLE' | translate"\r
    icon="bi bi-cash-stack"\r
    [breadcrumbs]="breadcrumbs">\r
  </app-title-page>\r
\r
  <!-- Stats Cards -->\r
  <div class="row g-3 mb-4" *ngIf="!loading && summary">\r
    <div class="col-xl-3 col-md-6">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex align-items-center p-3">\r
          <div class="stat-icon-wrapper me-3 bg-success-light">\r
            <i class="bi bi-cash-coin"></i>\r
          </div>\r
          <div class="stat-content">\r
            <h3 class="stat-number">{{ formatCurrency(summary.totalRevenue) }}</h3>\r
            <p class="stat-label mb-0">{{ 'BILLING.TOTAL_REVENUE' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-3 col-md-6">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex align-items-center p-3">\r
          <div class="stat-icon-wrapper me-3 bg-warning-light">\r
            <i class="bi bi-hourglass-split"></i>\r
          </div>\r
          <div class="stat-content">\r
            <h3 class="stat-number">{{ formatCurrency(summary.totalPending) }}</h3>\r
            <p class="stat-label mb-0">{{ 'BILLING.TOTAL_PENDING' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-3 col-md-6">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex align-items-center p-3">\r
          <div class="stat-icon-wrapper me-3 bg-primary-light">\r
            <i class="bi bi-check-circle"></i>\r
          </div>\r
          <div class="stat-content">\r
            <h3 class="stat-number">{{ summary.paidTenantsCount }}</h3>\r
            <p class="stat-label mb-0">{{ 'BILLING.PAID_DAYCARES' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-3 col-md-6">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex align-items-center p-3">\r
          <div class="stat-icon-wrapper me-3 bg-danger-light">\r
            <i class="bi bi-x-circle"></i>\r
          </div>\r
          <div class="stat-content">\r
            <h3 class="stat-number">{{ summary.unpaidTenantsCount }}</h3>\r
            <p class="stat-label mb-0">{{ 'BILLING.UNPAID_DAYCARES' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Billing Table -->\r
  <div class="card card-general shadow-sm" *ngIf="!loading">\r
    <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">\r
      <h5 class="mb-0">\r
        <i class="bi bi-building me-2"></i>\r
        {{ 'BILLING.DAYCARES_BILLING' | translate }}\r
      </h5>\r
      <button class="custom-btn-2 btn-add-global-2" (click)="openAddModal()">\r
        <i class="bi bi-plus-circle"></i>\r
        {{ 'BILLING.ADD_PAYMENT' | translate }}\r
      </button>\r
    </div>\r
\r
    <!-- Filters -->\r
    <div class="card-body border-bottom">\r
      <div class="row g-3">\r
        <div class="col-md-6">\r
          <div class="search-box">\r
            <i class="bi bi-search search-icon"></i>\r
            <input\r
              type="text"\r
              class="form-control search-input"\r
              [(ngModel)]="searchTerm"\r
              (ngModelChange)="onSearch()"\r
              [placeholder]="'BILLING.SEARCH_PLACEHOLDER' | translate">\r
          </div>\r
        </div>\r
        <div class="col-md-3">\r
          <select class="form-select" [(ngModel)]="statusFilter" (ngModelChange)="onStatusFilterChange()">\r
            <option value="">{{ 'BILLING.ALL_STATUS' | translate }}</option>\r
            <option value="paid">{{ 'BILLING.FILTER_PAID' | translate }}</option>\r
            <option value="unpaid">{{ 'BILLING.FILTER_UNPAID' | translate }}</option>\r
            <option value="pending">{{ 'BILLING.FILTER_PENDING' | translate }}</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="card-body">\r
      <div class="table-responsive custom-table">\r
        <table class="table table-hover mb-0">\r
          <thead>\r
            <tr>\r
              <th>{{ 'BILLING.TABLE_DAYCARE' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_PLAN' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_TOTAL_PAID' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_PENDING' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_LAST_PAYMENT' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_STATUS' | translate }}</th>\r
              <th>{{ 'BILLING.TABLE_ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngIf="filteredTenants.length === 0">\r
              <td colspan="7" class="text-center text-muted py-4">\r
                <i class="bi bi-inbox" style="font-size: 2rem; opacity: 0.3;"></i>\r
                <p class="mt-2 mb-0">{{ 'BILLING.NO_DATA' | translate }}</p>\r
              </td>\r
            </tr>\r
            <tr *ngFor="let tenant of filteredTenants; trackBy: trackById">\r
              <td>\r
                <div class="d-flex align-items-center">\r
                  <div class="tenant-avatar me-2">\r
                    <img *ngIf="tenant.logo" [src]="tenant.logo" [alt]="tenant.name" class="rounded-circle" width="36" height="36">\r
                    <div *ngIf="!tenant.logo" class="avatar-placeholder">\r
                      {{ tenant.name.charAt(0).toUpperCase() }}\r
                    </div>\r
                  </div>\r
                  <div>\r
                    <strong>{{ tenant.name }}</strong>\r
                    <small class="d-block text-muted">\r
                      <span [ngClass]="tenant.isActive ? 'text-success' : 'text-danger'">\r
                        {{ tenant.isActive ? ('BILLING.ACTIVE' | translate) : ('BILLING.INACTIVE' | translate) }}\r
                      </span>\r
                    </small>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <span class="badge plan-badge" [ngClass]="'plan-' + tenant.subscriptionPlan.toLowerCase()">\r
                  {{ tenant.subscriptionPlan }}\r
                </span>\r
              </td>\r
              <td class="text-success fw-bold">{{ formatCurrency(tenant.totalPaid) }}</td>\r
              <td [class.text-warning]="tenant.totalPending > 0">\r
                {{ tenant.totalPending > 0 ? formatCurrency(tenant.totalPending) : '-' }}\r
              </td>\r
              <td>{{ formatDateDisplay(tenant.lastPaymentDate) }}</td>\r
              <td>\r
                <span class="badge" [ngClass]="getStatusClass(tenant)">\r
                  {{ getStatusLabel(tenant) | translate }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="d-flex gap-1">\r
                  <a [routerLink]="['/super-admin/billing', tenant.id]" class="btn btn-sm btn-view" title="View History">\r
                    <i class="bi bi-eye"></i>\r
                  </a>\r
                  <button class="btn btn-sm btn-add" (click)="billingForm.patchValue({tenantId: tenant.id}); openAddModal()" title="Add Payment">\r
                    <i class="bi bi-plus"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add Payment Modal -->\r
<div class="modal-backdrop" *ngIf="showAddModal" (click)="closeAddModal()"></div>\r
<div class="modal-dialog-custom" *ngIf="showAddModal">\r
  <div class="modal-content">\r
    <div class="modal-header">\r
      <h5 class="modal-title">\r
        <i class="bi bi-plus-circle me-2"></i>\r
        {{ 'BILLING.ADD_PAYMENT' | translate }}\r
      </h5>\r
      <button type="button" class="btn-close" (click)="closeAddModal()"></button>\r
    </div>\r
    <form [formGroup]="billingForm" (ngSubmit)="onSubmit()">\r
      <div class="modal-body">\r
        <div class="row g-3">\r
          <!-- Daycare -->\r
          <div class="col-12">\r
            <label class="form-label">{{ 'BILLING.SELECT_DAYCARE' | translate }} *</label>\r
            <ng-select\r
              formControlName="tenantId"\r
              [items]="tenants"\r
              bindLabel="name"\r
              bindValue="id"\r
              [placeholder]="'BILLING.SELECT_DAYCARE_PLACEHOLDER' | translate"\r
              [class.is-invalid]="isFieldInvalid('tenantId')">\r
            </ng-select>\r
          </div>\r
\r
          <!-- Amount & Currency -->\r
          <div class="col-md-8">\r
            <label class="form-label">{{ 'BILLING.AMOUNT' | translate }} *</label>\r
            <input type="number" class="form-control" formControlName="amount"\r
              [class.is-invalid]="isFieldInvalid('amount')" step="0.01" min="0">\r
          </div>\r
          <div class="col-md-4">\r
            <label class="form-label">{{ 'BILLING.CURRENCY' | translate }}</label>\r
            <select class="form-select" formControlName="currency">\r
              <option value="EUR">EUR (\u20AC)</option>\r
              <option value="USD">USD ($)</option>\r
              <option value="GBP">GBP (\xA3)</option>\r
            </select>\r
          </div>\r
\r
          <!-- Payment Date -->\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.PAYMENT_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" formControlName="paymentDate"\r
              [class.is-invalid]="isFieldInvalid('paymentDate')">\r
          </div>\r
\r
          <!-- Status -->\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.STATUS' | translate }}</label>\r
            <select class="form-select" formControlName="status">\r
              <option *ngFor="let s of statuses" [value]="s.value">{{ s.label }}</option>\r
            </select>\r
          </div>\r
\r
          <!-- Period -->\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.PERIOD_START' | translate }}</label>\r
            <input type="date" class="form-control" formControlName="periodStart">\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.PERIOD_END' | translate }}</label>\r
            <input type="date" class="form-control" formControlName="periodEnd">\r
          </div>\r
\r
          <!-- Payment Method -->\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.PAYMENT_METHOD' | translate }}</label>\r
            <select class="form-select" formControlName="paymentMethod">\r
              <option *ngFor="let m of paymentMethods" [value]="m.value">{{ m.label }}</option>\r
            </select>\r
          </div>\r
\r
          <!-- Invoice Number -->\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'BILLING.INVOICE_NUMBER' | translate }}</label>\r
            <input type="text" class="form-control" formControlName="invoiceNumber"\r
              placeholder="INV-2024-001">\r
          </div>\r
\r
          <!-- Notes -->\r
          <div class="col-12">\r
            <label class="form-label">{{ 'BILLING.NOTES' | translate }}</label>\r
            <textarea class="form-control" formControlName="notes" rows="2"\r
              [placeholder]="'BILLING.NOTES_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="custom-btn-2 btn-cancel-2" (click)="closeAddModal()">\r
          <i class="bi bi-x-circle"></i>\r
          {{ 'BILLING.CANCEL' | translate }}\r
        </button>\r
        <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="submitting">\r
          <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
          <i *ngIf="!submitting" class="bi bi-check-circle"></i>\r
          {{ 'BILLING.SAVE_PAYMENT' | translate }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/super-admin/billing/billing.scss */\n.stat-card {\n  border: none;\n  border-radius: 12px;\n  transition: transform 0.2s;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n}\n.stat-card .stat-icon-wrapper {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #7db9ff !important;\n  color: #ffffff !important;\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 1.5rem;\n}\n.stat-card .stat-number {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n.stat-card .stat-label {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.search-box {\n  position: relative;\n}\n.search-box .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n.search-box .search-input {\n  padding-left: 38px;\n  border-radius: 8px;\n}\n.tenant-avatar .avatar-placeholder {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.plan-badge {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.plan-badge.plan-free {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.plan-badge.plan-premium {\n  background-color: #d4edda;\n  color: #155724;\n}\n.plan-badge.plan-enterprise {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.status-paid {\n  background-color: #d4edda;\n  color: #155724;\n}\n.status-pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-unpaid {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.btn-add {\n  background-color: rgba(40, 167, 69, 0.1);\n  color: #28a745;\n  border: none;\n}\n.btn-add:hover {\n  background-color: rgba(40, 167, 69, 0.2);\n  color: #1e7e34;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.modal-dialog-custom {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-dialog-custom .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.modal-dialog-custom .modal-header {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-dialog-custom .modal-header .modal-title {\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.modal-dialog-custom .modal-body {\n  padding: 1.5rem;\n}\n.modal-dialog-custom .modal-footer {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border-radius: 8px;\n  border: 1px solid #ced4da;\n  padding: 0.5rem 0.75rem;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\nng-select.is-invalid .ng-select-container {\n  border-color: #dc3545;\n}\n.mobile-view {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin .header-info {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin .header-info h5 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin .header-info .page-back i {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n  color: #fff;\n}\n.mobile-view-superadmin .search-add-section {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e5e7eb;\n}\n.mobile-view-superadmin .search-add-section .search-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 25px;\n  overflow: hidden;\n}\n.mobile-view-superadmin .search-add-section .search-container .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 12px 16px;\n  font-size: 14px;\n  color: #1e293b;\n}\n.mobile-view-superadmin .search-add-section .search-container .search-input::placeholder {\n  color: #94a3b8;\n}\n.mobile-view-superadmin .search-add-section .search-container .search-btn {\n  background: var(--secondary-color);\n  border: none;\n  padding: 10px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-view-superadmin .search-add-section .search-container .search-btn i {\n  color: #fff;\n  font-size: 16px;\n}\n.mobile-view-superadmin .search-add-section .add-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: transparent;\n  border: 2px solid var(--secondary-color);\n  color: var(--secondary-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mobile-view-superadmin .search-add-section .add-btn i {\n  font-size: 20px;\n  font-weight: 600;\n}\n.mobile-view-superadmin .search-add-section .add-btn:hover {\n  background: var(--secondary-color);\n  color: #fff;\n}\n/*# sourceMappingURL=billing.css.map */\n"] }]
  }], () => [{ type: BillingService }, { type: TenantService }, { type: FormBuilder }, { type: Location }, { type: TranslateService }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Billing, { className: "Billing", filePath: "src/app/features/super-admin/billing/billing.ts", lineNumber: 34 });
})();
export {
  Billing
};
//# sourceMappingURL=chunk-Q3XZTQEK.js.map
