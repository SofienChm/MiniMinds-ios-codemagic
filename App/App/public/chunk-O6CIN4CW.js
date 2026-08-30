import {
  BillingService
} from "./chunk-2NHN4JHI.js";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/super-admin/billing/billing-detail/billing-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ["/super-admin/billing"];
function BillingDetail_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
    \u0275\u0275listener("click", function BillingDetail_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "div", 11)(7, "h5", 12);
    \u0275\u0275text(8, " Billing detail");
    \u0275\u0275elementEnd()()()()();
  }
}
function BillingDetail_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 13);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", (ctx_r1.billingHistory == null ? null : ctx_r1.billingHistory.tenant == null ? null : ctx_r1.billingHistory.tenant.name) || \u0275\u0275pipeBind1(1, 3, "BILLING.BILLING_HISTORY"))("subtitle", \u0275\u0275pipeBind1(2, 5, "BILLING.BILLING_HISTORY_SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs);
  }
}
function BillingDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function BillingDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function BillingDetail_div_6_img_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.billingHistory.tenant.logo, \u0275\u0275sanitizeUrl)("alt", ctx_r1.billingHistory.tenant.name);
  }
}
function BillingDetail_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.billingHistory.tenant.name.charAt(0).toUpperCase(), " ");
  }
}
function BillingDetail_div_6_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "BILLING.NO_PAYMENTS"));
  }
}
function BillingDetail_div_6_div_61_tr_23_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const billing_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDate(billing_r4.periodStart), " - ", ctx_r1.formatDate(billing_r4.periodEnd), " ");
  }
}
function BillingDetail_div_6_div_61_tr_23_li_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 65);
    \u0275\u0275listener("click", function BillingDetail_div_6_div_61_tr_23_li_20_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const billing_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateStatus(billing_r4, "Paid"));
    });
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "BILLING.MARK_PAID"), " ");
  }
}
function BillingDetail_div_6_div_61_tr_23_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 65);
    \u0275\u0275listener("click", function BillingDetail_div_6_div_61_tr_23_li_21_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const billing_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateStatus(billing_r4, "Pending"));
    });
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "BILLING.MARK_PENDING"), " ");
  }
}
function BillingDetail_div_6_div_61_tr_23_li_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 65);
    \u0275\u0275listener("click", function BillingDetail_div_6_div_61_tr_23_li_22_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const billing_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateStatus(billing_r4, "Refunded"));
    });
    \u0275\u0275element(2, "i", 68);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "BILLING.MARK_REFUNDED"), " ");
  }
}
function BillingDetail_div_6_div_61_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BillingDetail_div_6_div_61_tr_23_small_5_Template, 2, 2, "small", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "div", 56)(17, "button", 57);
    \u0275\u0275element(18, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 59);
    \u0275\u0275template(20, BillingDetail_div_6_div_61_tr_23_li_20_Template, 5, 3, "li", 60)(21, BillingDetail_div_6_div_61_tr_23_li_21_Template, 5, 3, "li", 60)(22, BillingDetail_div_6_div_61_tr_23_li_22_Template, 5, 3, "li", 60);
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275element(24, "hr", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "li")(26, "a", 62);
    \u0275\u0275listener("click", function BillingDetail_div_6_div_61_tr_23_Template_a_click_26_listener() {
      const billing_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteBilling(billing_r4));
    });
    \u0275\u0275element(27, "i", 63);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const billing_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(billing_r4.paymentDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", billing_r4.periodStart && billing_r4.periodEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(billing_r4.amount, billing_r4.currency));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(billing_r4.paymentMethod || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(billing_r4.invoiceNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(billing_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", billing_r4.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", billing_r4.status !== "Paid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", billing_r4.status !== "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", billing_r4.status === "Paid");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 11, "BILLING.DELETE"), " ");
  }
}
function BillingDetail_div_6_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "table", 53)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(23, BillingDetail_div_6_div_61_tr_23_Template, 30, 13, "tr", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "BILLING.TABLE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "BILLING.TABLE_AMOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "BILLING.TABLE_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "BILLING.TABLE_INVOICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "BILLING.TABLE_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "BILLING.TABLE_ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.billingHistory.billings)("ngForTrackBy", ctx_r1.trackById);
  }
}
function BillingDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "h6", 22);
    \u0275\u0275element(5, "i", 23);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "div", 25)(10, "div", 26);
    \u0275\u0275template(11, BillingDetail_div_6_img_11_Template, 1, 2, "img", 27)(12, BillingDetail_div_6_div_12_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h5", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 30);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 31);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "h6", 22);
    \u0275\u0275element(25, "i", 32);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 24)(29, "div", 33)(30, "span", 34);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 35);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 33)(36, "span", 34);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 36);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "hr");
    \u0275\u0275elementStart(42, "div", 37)(43, "span", 34);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 38);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "a", 39);
    \u0275\u0275element(49, "i", 40);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 41)(53, "div", 42)(54, "div", 43)(55, "h6", 22);
    \u0275\u0275element(56, "i", 44);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 24);
    \u0275\u0275template(60, BillingDetail_div_6_div_60_Template, 5, 3, "div", 45)(61, BillingDetail_div_6_div_61_Template, 24, 20, "div", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 20, "BILLING.TENANT_INFO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.billingHistory.tenant.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.billingHistory.tenant.logo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.billingHistory.tenant.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.billingHistory.tenant.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.billingHistory.tenant.isActive ? \u0275\u0275pipeBind1(18, 22, "BILLING.ACTIVE") : \u0275\u0275pipeBind1(19, 24, "BILLING.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "plan-" + ctx_r1.billingHistory.tenant.subscriptionPlan.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.billingHistory.tenant.subscriptionPlan, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 26, "BILLING.PAYMENT_SUMMARY"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 28, "BILLING.TOTAL_PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.billingHistory.totalPaid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 30, "BILLING.TOTAL_PENDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.billingHistory.totalPending));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 32, "BILLING.TOTAL_TRANSACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.billingHistory.billings.length);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 34, "BILLING.BACK_TO_LIST"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 36, "BILLING.PAYMENT_HISTORY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.billingHistory.billings.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.billingHistory.billings.length > 0);
  }
}
var BillingDetail = class _BillingDetail {
  route;
  router;
  billingService;
  location;
  translate;
  tenantId;
  billingHistory = null;
  loading = true;
  error = null;
  breadcrumbs = [];
  subscriptions = [];
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  back() {
    this.location.back();
  }
  constructor(route, router, billingService, location, translate) {
    this.route = route;
    this.router = router;
    this.billingService = billingService;
    this.location = location;
    this.translate = translate;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.tenantId = parseInt(id, 10);
      this.loadData();
    } else {
      this.router.navigate(["/super-admin/billing"]);
    }
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadData() {
    this.loading = true;
    const sub = this.billingService.getByTenant(this.tenantId).subscribe({
      next: (history) => {
        this.billingHistory = history;
        this.updateBreadcrumbs();
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || "Failed to load billing history";
        this.loading = false;
        console.error("Error loading billing history:", err);
      }
    });
    this.subscriptions.push(sub);
  }
  updateBreadcrumbs() {
    this.breadcrumbs = [
      { label: "Dashboard", url: "/super-admin/dashboard" },
      { label: "Billing", url: "/super-admin/billing" },
      { label: this.billingHistory?.tenant.name || "Billing History" }
    ];
  }
  updateStatus(billing, newStatus) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("BILLING.CONFIRM_STATUS_CHANGE"),
      text: this.translate.instant("BILLING.CHANGE_STATUS_TO", { status: newStatus }),
      icon: "question",
      showCancelButton: true,
      confirmButtonText: this.translate.instant("BILLING.YES_CHANGE"),
      cancelButtonText: this.translate.instant("BILLING.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.billingService.updateStatus(billing.id, newStatus).subscribe({
          next: () => {
            billing.status = newStatus;
            showSuccessToast(this.translate.instant("BILLING.STATUS_UPDATED"));
          },
          error: (err) => {
            console.error("Error updating status:", err);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("BILLING.ERROR"),
              text: err.error?.message || "Failed to update status"
            });
          }
        });
      }
    });
  }
  deleteBilling(billing) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("BILLING.CONFIRM_DELETE"),
      text: this.translate.instant("BILLING.DELETE_WARNING"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      confirmButtonText: this.translate.instant("BILLING.YES_DELETE"),
      cancelButtonText: this.translate.instant("BILLING.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.billingService.delete(billing.id).subscribe({
          next: () => {
            this.loadData();
            showSuccessToast(this.translate.instant("BILLING.DELETED"));
          },
          error: (err) => {
            console.error("Error deleting billing:", err);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("BILLING.ERROR"),
              text: err.error?.message || "Failed to delete"
            });
          }
        });
      }
    });
  }
  formatCurrency(amount, currency = "EUR") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency
    }).format(amount);
  }
  formatDate(date) {
    if (!date)
      return "-";
    return new Date(date).toLocaleDateString();
  }
  getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-success";
      case "pending":
        return "bg-warning text-dark";
      case "failed":
        return "bg-danger";
      case "refunded":
        return "bg-secondary";
      default:
        return "bg-secondary";
    }
  }
  trackById(index, item) {
    return item.id;
  }
  static \u0275fac = function BillingDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BillingService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingDetail, selectors: [["app-billing-detail"]], hostVars: 2, hostBindings: function BillingDetail_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 7, vars: 7, consts: [["class", "mobile-view-superadmin", 4, "ngIf"], ["icon", "bi bi-receipt", 3, "title", "subtitle", "breadcrumbs", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "mobile-view-superadmin"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], ["icon", "bi bi-receipt", 3, "title", "subtitle", "breadcrumbs"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "row"], [1, "col-lg-4"], [1, "card", "card-general", "shadow-sm", "mb-3"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-building", "me-2"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], [1, "tenant-avatar", "me-3"], ["class", "rounded-circle", "width", "60", "height", "60", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder-lg", 4, "ngIf"], [1, "mb-1"], [1, "badge", 3, "ngClass"], [1, "badge", "plan-badge", "ms-1", 3, "ngClass"], [1, "bi", "bi-graph-up", "me-2"], [1, "summary-item", "d-flex", "justify-content-between", "mb-2"], [1, "text-muted"], [1, "fw-bold", "text-success"], [1, "fw-bold", "text-warning"], [1, "summary-item", "d-flex", "justify-content-between"], [1, "fw-bold"], [1, "btn", "btn-outline-secondary", "w-100", 3, "routerLink"], [1, "bi", "bi-arrow-left", "me-2"], [1, "col-lg-8"], [1, "card", "card-general", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-list-ul", "me-2"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], ["width", "60", "height", "60", 1, "rounded-circle", 3, "src", "alt"], [1, "avatar-placeholder-lg"], [1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-inbox", 2, "font-size", "3rem", "opacity", "0.3"], [1, "mt-3", "mb-0"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "d-block text-muted", 4, "ngIf"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-light", "dropdown-toggle"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end"], [4, "ngIf"], [1, "dropdown-divider"], ["href", "javascript:void(0)", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-2"], [1, "d-block", "text-muted"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-check-circle", "text-success", "me-2"], [1, "bi", "bi-hourglass", "text-warning", "me-2"], [1, "bi", "bi-arrow-counterclockwise", "text-info", "me-2"]], template: function BillingDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, BillingDetail_div_1_Template, 9, 0, "div", 0);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275template(3, BillingDetail_app_title_page_3_Template, 3, 7, "app-title-page", 1)(4, BillingDetail_div_4_Template, 4, 0, "div", 2)(5, BillingDetail_div_5_Template, 2, 1, "div", 3)(6, BillingDetail_div_6_Template, 62, 39, "div", 4);
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
      \u0275\u0275property("ngIf", ctx.billingHistory && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent, TranslatePipe], styles: ["\n\n.tenant-avatar[_ngcontent-%COMP%]   .avatar-placeholder-lg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 24px;\n}\n.plan-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.plan-badge.plan-free[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic[_ngcontent-%COMP%] {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.plan-badge.plan-premium[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.plan-badge.plan-enterprise[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.summary-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fff5f5;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=billing-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingDetail, [{
    type: Component,
    args: [{ selector: "app-billing-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent], template: `<app-header-superadmin></app-header-superadmin>\r
<div *ngIf="isMobile()" class="mobile-view-superadmin">\r
  <div class="header-info">\r
    <div class="title-icons">\r
      <div class="page-back" (click)="back()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
    </div>\r
    <div class="d-flex">\r
      <div class="overflow-hidden">\r
        <h5 class="name simple"> Billing detail</h5>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div [class]="isMobile() ? 'mobileview mobile-view container-fluid mt-4' : 'container-fluid mt-4'">\r
  <app-title-page *ngIf=" !isMobile()"\r
    [title]="billingHistory?.tenant?.name || ('BILLING.BILLING_HISTORY' | translate)"\r
    [subtitle]="'BILLING.BILLING_HISTORY_SUBTITLE' | translate"\r
    icon="bi bi-receipt"\r
    [breadcrumbs]="breadcrumbs">\r
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
  <!-- Content -->\r
  <div *ngIf="billingHistory && !loading" class="row">\r
    <!-- Tenant Info & Summary -->\r
    <div class="col-lg-4">\r
      <div class="card card-general shadow-sm mb-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\r
            <i class="bi bi-building me-2"></i>\r
            {{ 'BILLING.TENANT_INFO' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="d-flex align-items-center mb-3">\r
            <div class="tenant-avatar me-3">\r
              <img *ngIf="billingHistory.tenant.logo" [src]="billingHistory.tenant.logo"\r
                [alt]="billingHistory.tenant.name" class="rounded-circle" width="60" height="60">\r
              <div *ngIf="!billingHistory.tenant.logo" class="avatar-placeholder-lg">\r
                {{ billingHistory.tenant.name.charAt(0).toUpperCase() }}\r
              </div>\r
            </div>\r
            <div>\r
              <h5 class="mb-1">{{ billingHistory.tenant.name }}</h5>\r
              <span class="badge" [ngClass]="billingHistory.tenant.isActive ? 'bg-success' : 'bg-danger'">\r
                {{ billingHistory.tenant.isActive ? ('BILLING.ACTIVE' | translate) : ('BILLING.INACTIVE' | translate) }}\r
              </span>\r
              <span class="badge plan-badge ms-1" [ngClass]="'plan-' + billingHistory.tenant.subscriptionPlan.toLowerCase()">\r
                {{ billingHistory.tenant.subscriptionPlan }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Summary Card -->\r
      <div class="card card-general shadow-sm mb-3">\r
        <div class="card-header">\r
          <h6 class="mb-0">\r
            <i class="bi bi-graph-up me-2"></i>\r
            {{ 'BILLING.PAYMENT_SUMMARY' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="summary-item d-flex justify-content-between mb-2">\r
            <span class="text-muted">{{ 'BILLING.TOTAL_PAID' | translate }}</span>\r
            <span class="fw-bold text-success">{{ formatCurrency(billingHistory.totalPaid) }}</span>\r
          </div>\r
          <div class="summary-item d-flex justify-content-between mb-2">\r
            <span class="text-muted">{{ 'BILLING.TOTAL_PENDING' | translate }}</span>\r
            <span class="fw-bold text-warning">{{ formatCurrency(billingHistory.totalPending) }}</span>\r
          </div>\r
          <hr>\r
          <div class="summary-item d-flex justify-content-between">\r
            <span class="text-muted">{{ 'BILLING.TOTAL_TRANSACTIONS' | translate }}</span>\r
            <span class="fw-bold">{{ billingHistory.billings.length }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <a [routerLink]="['/super-admin/billing']" class="btn btn-outline-secondary w-100">\r
        <i class="bi bi-arrow-left me-2"></i>\r
        {{ 'BILLING.BACK_TO_LIST' | translate }}\r
      </a>\r
    </div>\r
\r
    <!-- Billing History -->\r
    <div class="col-lg-8">\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h6 class="mb-0">\r
            <i class="bi bi-list-ul me-2"></i>\r
            {{ 'BILLING.PAYMENT_HISTORY' | translate }}\r
          </h6>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="billingHistory.billings.length === 0" class="text-center text-muted py-4">\r
            <i class="bi bi-inbox" style="font-size: 3rem; opacity: 0.3;"></i>\r
            <p class="mt-3 mb-0">{{ 'BILLING.NO_PAYMENTS' | translate }}</p>\r
          </div>\r
\r
          <div class="table-responsive custom-table" *ngIf="billingHistory.billings.length > 0">\r
            <table class="table table-hover mb-0">\r
              <thead>\r
                <tr>\r
                  <th>{{ 'BILLING.TABLE_DATE' | translate }}</th>\r
                  <th>{{ 'BILLING.TABLE_AMOUNT' | translate }}</th>\r
                  <th>{{ 'BILLING.TABLE_METHOD' | translate }}</th>\r
                  <th>{{ 'BILLING.TABLE_INVOICE' | translate }}</th>\r
                  <th>{{ 'BILLING.TABLE_STATUS' | translate }}</th>\r
                  <th>{{ 'BILLING.TABLE_ACTIONS' | translate }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let billing of billingHistory.billings; trackBy: trackById">\r
                  <td>\r
                    <div>\r
                      <strong>{{ formatDate(billing.paymentDate) }}</strong>\r
                      <small class="d-block text-muted" *ngIf="billing.periodStart && billing.periodEnd">\r
                        {{ formatDate(billing.periodStart) }} - {{ formatDate(billing.periodEnd) }}\r
                      </small>\r
                    </div>\r
                  </td>\r
                  <td class="fw-bold">{{ formatCurrency(billing.amount, billing.currency) }}</td>\r
                  <td>{{ billing.paymentMethod || '-' }}</td>\r
                  <td>{{ billing.invoiceNumber || '-' }}</td>\r
                  <td>\r
                    <span class="badge" [ngClass]="getStatusClass(billing.status)">\r
                      {{ billing.status }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <div class="dropdown">\r
                      <button class="btn btn-sm btn-light dropdown-toggle" type="button"\r
                        data-bs-toggle="dropdown" aria-expanded="false">\r
                        <i class="bi bi-three-dots-vertical"></i>\r
                      </button>\r
                      <ul class="dropdown-menu dropdown-menu-end">\r
                        <li *ngIf="billing.status !== 'Paid'">\r
                          <a class="dropdown-item" href="javascript:void(0)" (click)="updateStatus(billing, 'Paid')">\r
                            <i class="bi bi-check-circle text-success me-2"></i>\r
                            {{ 'BILLING.MARK_PAID' | translate }}\r
                          </a>\r
                        </li>\r
                        <li *ngIf="billing.status !== 'Pending'">\r
                          <a class="dropdown-item" href="javascript:void(0)" (click)="updateStatus(billing, 'Pending')">\r
                            <i class="bi bi-hourglass text-warning me-2"></i>\r
                            {{ 'BILLING.MARK_PENDING' | translate }}\r
                          </a>\r
                        </li>\r
                        <li *ngIf="billing.status === 'Paid'">\r
                          <a class="dropdown-item" href="javascript:void(0)" (click)="updateStatus(billing, 'Refunded')">\r
                            <i class="bi bi-arrow-counterclockwise text-info me-2"></i>\r
                            {{ 'BILLING.MARK_REFUNDED' | translate }}\r
                          </a>\r
                        </li>\r
                        <li><hr class="dropdown-divider"></li>\r
                        <li>\r
                          <a class="dropdown-item text-danger" href="javascript:void(0)" (click)="deleteBilling(billing)">\r
                            <i class="bi bi-trash me-2"></i>\r
                            {{ 'BILLING.DELETE' | translate }}\r
                          </a>\r
                        </li>\r
                      </ul>\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/super-admin/billing/billing-detail/billing-detail.scss */\n.tenant-avatar .avatar-placeholder-lg {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--secondary-color));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 24px;\n}\n.plan-badge {\n  font-size: 0.75rem;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.plan-badge.plan-free {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.plan-badge.plan-basic {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.plan-badge.plan-premium {\n  background-color: #d4edda;\n  color: #155724;\n}\n.plan-badge.plan-enterprise {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.summary-item {\n  padding: 0.5rem 0;\n}\n.dropdown-menu {\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e9ecef;\n}\n.dropdown-menu .dropdown-item {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.dropdown-menu .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-menu .dropdown-item.text-danger:hover {\n  background-color: #fff5f5;\n}\n.mobile-view-superadmin .header-info {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin .header-info h5 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin .header-info .page-back i {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=billing-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: BillingService }, { type: Location }, { type: TranslateService }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingDetail, { className: "BillingDetail", filePath: "src/app/features/super-admin/billing/billing-detail/billing-detail.ts", lineNumber: 23 });
})();
export {
  BillingDetail
};
//# sourceMappingURL=chunk-O6CIN4CW.js.map
