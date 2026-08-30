import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  AppCurrencyPipe
} from "./chunk-6S3KDPAE.js";
import "./chunk-OQBHM43H.js";
import {
  FeeService
} from "./chunk-4QI4UUMP.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  Location,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/fee/fee-detail/fee-detail.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/core/services/payment.service.ts
var PaymentService = class _PaymentService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.PAYMENT;
  constructor(http) {
    this.http = http;
  }
  createCheckoutSession(feeId) {
    return this.http.post(`${this.apiUrl}/create-checkout-session/${feeId}`, {});
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/fee/fee-detail/fee-detail.component.ts
function FeeDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-parent-child-header-simple", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 1, "FEES_PAGE.FEE_RECEIPT"));
  }
}
function FeeDetailComponent_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 4, "FEES_PAGE.FEE_RECEIPT"))("subtitle", \u0275\u0275pipeBind1(2, 6, "FEES_PAGE.VIEW_FEE_DETAILS"))("breadcrumbs", ctx_r0.breadcrumbs)("actions", ctx_r0.getActions());
  }
}
function FeeDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "FEES_PAGE.LOADING"));
  }
}
function FeeDetailComponent_div_5_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "FEES_PAGE.PAID_DATE"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 4, ctx_r0.fee.paidDate, "mediumDate", "", ctx_r0.currentLocale));
  }
}
function FeeDetailComponent_div_5_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "FEES_PAGE.NOTES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fee.notes);
  }
}
function FeeDetailComponent_div_5_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "FEES_PAGE.PAYMENT_NOTES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fee.paymentNotes);
  }
}
function FeeDetailComponent_div_5_div_94_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function FeeDetailComponent_div_5_div_94_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.payOnline());
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "FEES_PAGE.PAY_ONLINE"), " ");
  }
}
function FeeDetailComponent_div_5_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 37)(2, "button", 44);
    \u0275\u0275listener("click", function FeeDetailComponent_div_5_div_94_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(3, "i", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FeeDetailComponent_div_5_div_94_button_6_Template, 4, 4, "button", 46);
    \u0275\u0275elementStart(7, "button", 47);
    \u0275\u0275listener("click", function FeeDetailComponent_div_5_div_94_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.print());
    });
    \u0275\u0275element(8, "i", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 3, "FEES_PAGE.BACK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fee.status === "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 5, "FEES_PAGE.PRINT"), " ");
  }
}
function FeeDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "h6")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "address", 19)(15, "div", 13)(16, "div", 20)(17, "p", 21);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "p", 22);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 22);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 23)(28, "div", 13)(29, "div", 24)(30, "div", 25);
    \u0275\u0275element(31, "img", 26);
    \u0275\u0275elementStart(32, "p", 27);
    \u0275\u0275text(33, " MiniMinds Daycare ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 28)(35, "p", 29)(36, "b");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "b");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, FeeDetailComponent_div_5_p_47_Template, 6, 9, "p", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 31)(49, "address")(50, "p", 32);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 33);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 14);
    \u0275\u0275element(55, "div", 34)(56, "hr");
    \u0275\u0275elementStart(57, "div", 35)(58, "table", 36)(59, "thead")(60, "tr")(61, "th");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th", 37);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "tbody")(74, "tr")(75, "td");
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "td")(80, "span");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "td", 37);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "appCurrency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "div", 38)(86, "h6", 39)(87, "b");
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(92, FeeDetailComponent_div_5_div_92_Template, 6, 4, "div", 40)(93, FeeDetailComponent_div_5_div_93_Template, 6, 4, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(94, FeeDetailComponent_div_5_div_94_Template, 11, 7, "div", 41);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 31, "FEES_PAGE.RECEIPT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r0.fee.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 33, "FEES_PAGE.BILL_FROM"), " :");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 35, "FEES_PAGE.BILL_TO"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.fee.child == null ? null : ctx_r0.fee.child.parent == null ? null : ctx_r0.fee.child.parent.firstName, " ", ctx_r0.fee.child == null ? null : ctx_r0.fee.child.parent == null ? null : ctx_r0.fee.child.parent.lastName);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(38, 37, "FEES_PAGE.DUE_DATE"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(40, 39, ctx_r0.fee.dueDate, "mediumDate", "", ctx_r0.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + (ctx_r0.fee.status === "paid" ? "bg-success" : ctx_r0.fee.status === "overdue" ? "bg-danger" : "bg-warning"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(44, 44, "FEES_PAGE.STATUS"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translateStatus(ctx_r0.fee.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fee.paidDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.fee.parentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.fee.parentEmail, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 46, "FEES_PAGE.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 48, "FEES_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 50, "FEES_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 52, "FEES_PAGE.AMOUNT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.fee.child == null ? null : ctx_r0.fee.child.firstName, " ", ctx_r0.fee.child == null ? null : ctx_r0.fee.child.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fee.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + (ctx_r0.fee.feeType === "monthly" ? "bg-primary" : ctx_r0.fee.feeType === "one-time" ? "bg-info" : "bg-danger"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translateFeeType(ctx_r0.fee.feeType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 54, ctx_r0.fee.amount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(89, 56, "FEES_PAGE.TOTAL"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 58, ctx_r0.fee.amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fee.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fee.paymentNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isParent);
  }
}
var FeeDetailComponent = class _FeeDetailComponent {
  route;
  router;
  feeService;
  paymentService;
  authService;
  location;
  translateService;
  pageTitleService;
  fee = null;
  loading = false;
  feeId = 0;
  langChangeSub;
  breadcrumbs = [];
  constructor(route, router, feeService, paymentService, authService, location, translateService, pageTitleService) {
    this.route = route;
    this.router = router;
    this.feeService = feeService;
    this.paymentService = paymentService;
    this.authService = authService;
    this.location = location;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    registerLocaleData(fr_default);
    registerLocaleData(it_default);
    registerLocaleData(ar_default);
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("FEES_PAGE.FEE_RECEIPT"));
    this.feeId = Number(this.route.snapshot.paramMap.get("id"));
    this.updateTranslatedContent();
    this.loadFee();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("FEES_PAGE.FEE_RECEIPT"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("FEES_PAGE.DASHBOARD") },
      { label: this.translateService.instant("FEES_PAGE.FEES_LABEL"), url: "/fees" },
      { label: this.translateService.instant("FEES_PAGE.FEE_DETAIL") }
    ];
  }
  getActions() {
    return [
      {
        label: this.translateService.instant("FEES_PAGE.BACK"),
        icon: "bi bi-arrow-left",
        class: "custom-btn-2 btn-cancel-2",
        action: () => this.goBack()
      },
      {
        label: this.translateService.instant("FEES_PAGE.EDIT"),
        icon: "bi bi-pencil",
        class: "custom-btn-2 btn-edit-global-2",
        action: () => this.editFee()
      },
      {
        label: this.translateService.instant("FEES_PAGE.PRINT"),
        icon: "bi bi-printer",
        class: "custom-btn-2 btn-view-global-2",
        action: () => this.print()
      }
    ];
  }
  back() {
    this.location.back();
  }
  loadFee() {
    this.loading = true;
    this.feeService.getFeeById(this.feeId).subscribe({
      next: (fee) => {
        this.fee = fee;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading fee:", error);
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/fees"]);
  }
  editFee() {
    this.router.navigate(["/fees/edit", this.feeId]);
  }
  print() {
    window.print();
  }
  payOnline() {
    if (!this.fee || !this.fee.id)
      return;
    this.loading = true;
    this.paymentService.createCheckoutSession(this.fee.id).subscribe({
      next: (response) => {
        window.location.href = response.url;
      },
      error: (error) => {
        console.error("Error creating checkout session:", error);
        import_sweetalert2.default.fire(this.translateService.instant("FEES_PAGE.ERROR"), this.translateService.instant("FEES_PAGE.PAYMENT_INITIATE_ERROR"), "error");
        this.loading = false;
      }
    });
  }
  get isParent() {
    return this.authService.isParent();
  }
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  translateStatus(status) {
    switch (status) {
      case "paid":
        return this.translateService.instant("FEES_PAGE.PAID");
      case "pending":
        return this.translateService.instant("FEES_PAGE.PENDING");
      case "overdue":
        return this.translateService.instant("FEES_PAGE.OVERDUE");
      default:
        return status;
    }
  }
  translateFeeType(feeType) {
    switch (feeType) {
      case "monthly":
        return this.translateService.instant("FEES_PAGE.MONTHLY_FEE");
      case "one-time":
        return this.translateService.instant("FEES_PAGE.ONE_TIME");
      case "late-fee":
        return this.translateService.instant("FEES_PAGE.LATE_FEE");
      default:
        return feeType;
    }
  }
  static \u0275fac = function FeeDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeDetailComponent, selectors: [["app-fee-detail"]], decls: 6, vars: 4, consts: [["class", "parent-detailchild font-inter", 4, "ngIf"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-receipt", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "parent-detailchild", "font-inter"], [3, "title"], ["icon", "bi bi-receipt", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "white-box"], [1, "float-end"], [1, "row", "detailfee"], [1, "col-12"], [1, "from-to"], [1, "col-6"], [1, "font-bold", "from"], [1, "addr-font-h3", "font-bold", "to"], [1, "logo-detail"], [1, "col-6", "left"], [1, "logo"], ["loading", "lazy", "src", "assets/images/invoice_logo.png", "alt", "logo", 1, "logo-default", 2, "max-width", "150px"], [1, "text-muted", "m-l-5"], [1, "col-6", "right"], [1, "m-t-30"], [4, "ngIf"], [1, "float-end", "text-end"], [1, "font-bold", "addr-font-h4"], [1, "text-muted", "m-l-30"], [1, "clearfix"], [1, "table-responsive", "m-t-40"], [1, "table", "table-hover"], [1, "text-end"], [1, "float-end", "m-t-30", "text-end"], [1, "total"], ["class", "mb-3", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "mb-3"], [1, "text-muted"], [1, "action-btn", "custom-btn-2", "btn-cancel-2", "back", "me-2", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], ["class", "btn btn-success pay me-2", 3, "disabled", "click", 4, "ngIf"], [1, "action-btn", "custom-btn-2", "btn-edit-global-2", "me-2", 3, "click"], [1, "bi", "bi-printer", "me-2"], [1, "btn", "btn-success", "pay", "me-2", 3, "click", "disabled"], [1, "bi", "bi-credit-card", "me-2"]], template: function FeeDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FeeDetailComponent_div_0_Template, 3, 3, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, FeeDetailComponent_app_title_page_2_Template, 3, 8, "app-title-page", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1);
      \u0275\u0275template(4, FeeDetailComponent_div_4_Template, 5, 3, "div", 3)(5, FeeDetailComponent_div_5_Template, 95, 60, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.fee);
    }
  }, dependencies: [CommonModule, NgIf, TitlePage, ParentChildHeaderSimpleComponent, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\n.white-box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.logo-default[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n@media print {\n  .btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n  .header-info .name {\n  padding-bottom: 20px !important;\n}\n  .parent-detailchild .header-info {\n  margin-bottom: 40px;\n}\n.detailfee[_ngcontent-%COMP%]   .from-to[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  object-fit: contain;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n  align-items: center;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.detailfee[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: #84c76a;\n  border: 1px solid #84c76a;\n}\n.detailfee[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n  border: 1px solid #d9d9d9;\n  color: #000;\n}\n.detailfee[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: 1px solid #17a2b8;\n  color: #fff;\n}\n.payment[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n.total[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.text-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n@media screen and (max-width: 767px) {\n  .print[_ngcontent-%COMP%] {\n    background: var(--secondary-color) !important;\n    color: white !important;\n    border: none !important;\n  }\n  .pay[_ngcontent-%COMP%] {\n    background: var(--gradient-primary) !important;\n    color: #fff !important;\n    border: none !important;\n  }\n  .back[_ngcontent-%COMP%] {\n    background: #e9edf4 !important;\n    color: black !important;\n    border: none !important;\n  }\n}\n/*# sourceMappingURL=fee-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeDetailComponent, [{
    type: Component,
    args: [{ selector: "app-fee-detail", imports: [CommonModule, TitlePage, ParentChildHeaderSimpleComponent, AppCurrencyPipe, TranslateModule], template: `<div *ngIf="isParent" class="parent-detailchild font-inter">\r
  <app-parent-child-header-simple\r
    [title]="'FEES_PAGE.FEE_RECEIPT' | translate"\r
  >\r
  </app-parent-child-header-simple>\r
</div>\r
<div class="container-fluid mt-4">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="'FEES_PAGE.FEE_RECEIPT' | translate"\r
    [subtitle]="'FEES_PAGE.VIEW_FEE_DETAILS' | translate"\r
    icon="bi bi-receipt"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="getActions()">\r
  </app-title-page>\r
\r
</div>\r
<div class="container-fluid mt-4">\r
\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'FEES_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!loading && fee" class="card">\r
    <div class="card-body">\r
      <div class="row">\r
        <div class="col-md-12">\r
          <div class="white-box">\r
            <h6><b>{{ 'FEES_PAGE.RECEIPT' | translate }}</b><span class="float-end">#{{ fee.id }}</span></h6>\r
            <hr>\r
            <div class="row detailfee">\r
              <div class="col-12">\r
                <address class="from-to">\r
                  <div class="row">\r
                    <div class="col-6">\r
                      <p class="font-bold from">{{ 'FEES_PAGE.BILL_FROM' | translate }} :</p>\r
                    </div>\r
                    <div class="col-6">\r
                      <p class="addr-font-h3 font-bold to">{{ 'FEES_PAGE.BILL_TO' | translate }} :</p>\r
                      <p class="addr-font-h3 font-bold to">{{ fee.child?.parent?.firstName }} {{ fee.child?.parent?.lastName }}</p>\r
\r
                    </div>\r
                  </div>\r
                </address>\r
              </div>\r
              <div class="col-md-12">\r
                <div class="logo-detail">\r
                  <div class="row">\r
                    <div class="col-6 left">\r
                      <div class="logo">\r
                        <img loading="lazy" src="assets/images/invoice_logo.png" alt="logo" class="logo-default" style="max-width: 150px;">\r
                        <p class="text-muted m-l-5">\r
                          MiniMinds Daycare\r
                        </p>\r
                      </div>\r
                    </div>\r
                    <div class="col-6 right">\r
                      <p class="m-t-30"><b>{{ 'FEES_PAGE.DUE_DATE' | translate }} :</b> {{ fee.dueDate | date:'mediumDate':'':currentLocale }}</p>\r
                      <p  [class]="'badge ' + (fee.status === 'paid' ? 'bg-success' : fee.status === 'overdue' ? 'bg-danger' : 'bg-warning')"><b>{{ 'FEES_PAGE.STATUS' | translate }} :</b><span>{{ translateStatus(fee.status) }}</span></p>\r
                      <p *ngIf="fee.paidDate"><b>{{ 'FEES_PAGE.PAID_DATE' | translate }} :</b> {{ fee.paidDate | date:'mediumDate':'':currentLocale }}</p>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="float-end text-end">\r
                  <address>\r
                    <p class="font-bold addr-font-h4">{{ fee.parentName }}</p>\r
                    <p class="text-muted m-l-30">\r
                      {{ fee.parentEmail }}\r
                    </p>\r
                  </address>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-12">\r
\r
                <div class="clearfix"></div>\r
                <hr>\r
                <div class="table-responsive m-t-40">\r
                  <table class="table table-hover">\r
                    <thead>\r
                      <tr>\r
                        <th>{{ 'FEES_PAGE.NAME' | translate }}</th>\r
                        <th>{{ 'FEES_PAGE.DESCRIPTION' | translate }}</th>\r
                        <th>{{ 'FEES_PAGE.TYPE' | translate }}</th>\r
                        <th class="text-end">{{ 'FEES_PAGE.AMOUNT' | translate }}</th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      <tr>\r
                        <td>{{ fee.child?.firstName }} {{ fee.child?.lastName }}</td>\r
                        <td>{{ fee.description }}</td>\r
                        <td><span [class]="'badge ' + (fee.feeType === 'monthly' ? 'bg-primary' : fee.feeType === 'one-time' ? 'bg-info' : 'bg-danger')">{{ translateFeeType(fee.feeType) }}</span></td>\r
                        <td class="text-end">{{ fee.amount | appCurrency }}</td>\r
                      </tr>\r
                    </tbody>\r
                  </table>\r
                </div>\r
                <div class="float-end m-t-30 text-end">\r
                  <h6 class="total"><b>{{ 'FEES_PAGE.TOTAL' | translate }} :</b> {{ fee.amount | appCurrency }}</h6>\r
                </div>\r
                <div *ngIf="fee.notes" class="mb-3">\r
                  <strong>{{ 'FEES_PAGE.NOTES' | translate }}:</strong>\r
                  <p class="text-muted">{{ fee.notes }}</p>\r
                </div>\r
                <div *ngIf="fee.paymentNotes" class="mb-3">\r
                  <strong>{{ 'FEES_PAGE.PAYMENT_NOTES' | translate }}:</strong>\r
                  <p class="text-muted">{{ fee.paymentNotes }}</p>\r
                </div>\r
              </div>\r
              <div class="col-md-12" *ngIf="isParent">\r
                <div class="text-end">\r
                  <button class="action-btn custom-btn-2 btn-cancel-2 back me-2" (click)="goBack()">\r
                    <i class="bi bi-arrow-left me-2"></i>{{ 'FEES_PAGE.BACK' | translate }}\r
                  </button>\r
                  <button *ngIf="fee.status === 'pending'" class="btn btn-success pay me-2" (click)="payOnline()" [disabled]="loading">\r
                    <i class="bi bi-credit-card me-2"></i>{{ 'FEES_PAGE.PAY_ONLINE' | translate }}\r
                  </button>\r
                  <button class="action-btn custom-btn-2 btn-edit-global-2 me-2" (click)="print()">\r
                    <i class="bi bi-printer me-2"></i>{{ 'FEES_PAGE.PRINT' | translate }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/fee/fee-detail/fee-detail.component.scss */\n.white-box {\n  padding: 20px;\n}\n.logo-default {\n  margin: 10px 0;\n}\n@media print {\n  .btn {\n    display: none !important;\n  }\n}\n::ng-deep .header-info .name {\n  padding-bottom: 20px !important;\n}\n::ng-deep .parent-detailchild .header-info {\n  margin-bottom: 40px;\n}\n.detailfee .from-to .to {\n  text-align: right;\n}\n.detailfee .logo-detail .left .logo {\n  display: flex;\n  align-items: center;\n}\n.detailfee .logo-detail .left .logo img {\n  max-width: 50px !important;\n  object-fit: contain;\n}\n.detailfee .logo-detail .left .logo p {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.detailfee .logo-detail .right {\n  text-align: right;\n  align-items: center;\n}\n.detailfee .logo-detail .right p {\n  margin-bottom: 0;\n}\n.detailfee .btn-success {\n  background: #84c76a;\n  border: 1px solid #84c76a;\n}\n.detailfee .btn-secondary {\n  background: #d9d9d9;\n  border: 1px solid #d9d9d9;\n  color: #000;\n}\n.detailfee .btn-info {\n  background: #17a2b8;\n  border: 1px solid #17a2b8;\n  color: #fff;\n}\n.payment {\n  margin-top: 60px;\n}\n.total {\n  margin-bottom: 30px;\n}\n.text-end {\n  display: flex;\n  justify-content: end;\n}\n.badge.bg-primary {\n  background-color: var(--secondary-color) !important;\n}\n@media screen and (max-width: 767px) {\n  .print {\n    background: var(--secondary-color) !important;\n    color: white !important;\n    border: none !important;\n  }\n  .pay {\n    background: var(--gradient-primary) !important;\n    color: #fff !important;\n    border: none !important;\n  }\n  .back {\n    background: #e9edf4 !important;\n    color: black !important;\n    border: none !important;\n  }\n}\n/*# sourceMappingURL=fee-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FeeService }, { type: PaymentService }, { type: AuthService }, { type: Location }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeDetailComponent, { className: "FeeDetailComponent", filePath: "src/app/features/fee/fee-detail/fee-detail.component.ts", lineNumber: 26 });
})();
export {
  FeeDetailComponent
};
//# sourceMappingURL=chunk-SZFVW7GI.js.map
