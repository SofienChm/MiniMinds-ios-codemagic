import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  StaticFeesService
} from "./chunk-G5VH4N7Z.js";
import {
  AppCurrencyPipe
} from "./chunk-6S3KDPAE.js";
import "./chunk-OQBHM43H.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  SKIP_ERROR_HANDLER
} from "./chunk-MYZVJCXP.js";
import "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
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
import "./chunk-C7TRL22M.js";

// src/app/features/static-fees/static-fee-detail/static-fee-detail.ts
function StaticFeeDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "STATIC_FEES_PAGE.LOADING"));
  }
}
function StaticFeeDetailComponent_div_6_p_47_Template(rf, ctx) {
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
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "STATIC_FEES_PAGE.PAID_DATE"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(5, 4, ctx_r1.fee.paidDate, "mediumDate", "", ctx_r1.currentLocale), " ");
  }
}
function StaticFeeDetailComponent_div_6_p_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fee.payerEmail);
  }
}
function StaticFeeDetailComponent_div_6_p_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fee.payerPhone);
  }
}
function StaticFeeDetailComponent_div_6_p_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.fee.childName, " ");
  }
}
function StaticFeeDetailComponent_div_6_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.getCategoryBadgeClass(ctx_r1.fee.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translateCategory(ctx_r1.fee.category), " ");
  }
}
function StaticFeeDetailComponent_div_6_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function StaticFeeDetailComponent_div_6_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "STATIC_FEES_PAGE.REFERENCE_NUMBER"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fee.referenceNumber);
  }
}
function StaticFeeDetailComponent_div_6_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "STATIC_FEES_PAGE.NOTES"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fee.notes);
  }
}
function StaticFeeDetailComponent_div_6_div_101_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", \u0275\u0275pipeBind4(2, 1, ctx_r1.fee.createdAt, "mediumDate", "", ctx_r1.currentLocale));
  }
}
function StaticFeeDetailComponent_div_6_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, StaticFeeDetailComponent_div_6_div_101_span_4_Template, 3, 6, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 3, "STATIC_FEES_PAGE.CREATED_BY"), ": ", ctx_r1.fee.createdByUserName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.fee.createdAt);
  }
}
function StaticFeeDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "h6")(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "address", 15)(15, "div", 9)(16, "div", 16)(17, "p", 17);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 16)(21, "p", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(26, "div", 10)(27, "div", 19)(28, "div", 9)(29, "div", 20)(30, "div", 21);
    \u0275\u0275element(31, "img", 22);
    \u0275\u0275elementStart(32, "p", 23);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 24)(35, "p", 25)(36, "b");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "span")(43, "b");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, StaticFeeDetailComponent_div_6_p_47_Template, 6, 9, "p", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 27)(49, "address")(50, "p", 28);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, StaticFeeDetailComponent_div_6_p_52_Template, 2, 1, "p", 29)(53, StaticFeeDetailComponent_div_6_p_53_Template, 2, 1, "p", 29)(54, StaticFeeDetailComponent_div_6_p_54_Template, 3, 1, "p", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 10);
    \u0275\u0275element(56, "div", 30)(57, "hr");
    \u0275\u0275elementStart(58, "div", 31)(59, "table", 32)(60, "thead")(61, "tr")(62, "th");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th", 33);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "tbody")(78, "tr")(79, "td");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td");
    \u0275\u0275template(84, StaticFeeDetailComponent_div_6_span_84_Template, 2, 3, "span", 34)(85, StaticFeeDetailComponent_div_6_span_85_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "td");
    \u0275\u0275element(87, "i");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td", 33);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "appCurrency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(92, "div", 35)(93, "h6", 36)(94, "b");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(99, StaticFeeDetailComponent_div_6_div_99_Template, 6, 4, "div", 37)(100, StaticFeeDetailComponent_div_6_div_100_Template, 6, 4, "div", 37)(101, StaticFeeDetailComponent_div_6_div_101_Template, 5, 5, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 10)(103, "div", 39)(104, "button", 40);
    \u0275\u0275listener("click", function StaticFeeDetailComponent_div_6_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(105, "i", 41);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "button", 42);
    \u0275\u0275listener("click", function StaticFeeDetailComponent_div_6_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(109, "i", 43);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 38, "STATIC_FEES_PAGE.RECEIPT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", ctx_r1.fee.id);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 40, "STATIC_FEES_PAGE.BILL_FROM"), " :");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 42, "STATIC_FEES_PAGE.BILL_TO"), " :");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fee.payerName || ctx_r1.fee.parentName || "-", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.daycareName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(38, 44, "STATIC_FEES_PAGE.FEE_DATE"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(40, 46, ctx_r1.fee.feeDate, "mediumDate", "", ctx_r1.currentLocale), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(ctx_r1.fee.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(45, 51, "STATIC_FEES_PAGE.STATUS"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translateStatus(ctx_r1.fee.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.paidDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.fee.payerName || ctx_r1.fee.parentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.payerEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.payerPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.childName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 53, "STATIC_FEES_PAGE.FEE_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 55, "STATIC_FEES_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 57, "STATIC_FEES_PAGE.CATEGORY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 59, "STATIC_FEES_PAGE.PAYMENT_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 61, "STATIC_FEES_PAGE.AMOUNT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.fee.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fee.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.fee.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fee.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", ctx_r1.getPaymentMethodIcon(ctx_r1.fee.paymentMethod), " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translatePaymentMethod(ctx_r1.fee.paymentMethod), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 63, ctx_r1.fee.amount));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(96, 65, "STATIC_FEES_PAGE.TOTAL"), " :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(98, 67, ctx_r1.fee.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.fee.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fee.createdByUserName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(107, 69, "STATIC_FEES_PAGE.BACK_TO_LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(111, 71, "STATIC_FEES_PAGE.PRINT"), " ");
  }
}
var StaticFeeDetailComponent = class _StaticFeeDetailComponent {
  route;
  router;
  staticFeesService;
  http;
  translateService;
  pageTitleService;
  fee = null;
  loading = false;
  feeId = 0;
  daycareName = "MiniMinds Daycare";
  langChangeSub;
  breadcrumbs = [];
  constructor(route, router, staticFeesService, http, translateService, pageTitleService) {
    this.route = route;
    this.router = router;
    this.staticFeesService = staticFeesService;
    this.http = http;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    registerLocaleData(fr_default);
    registerLocaleData(it_default);
    registerLocaleData(ar_default);
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.FEE_RECEIPT"));
    this.feeId = Number(this.route.snapshot.paramMap.get("id"));
    this.updateTranslatedContent();
    this.loadFee();
    const silentHeaders = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    this.http.get(`${ApiConfig.ENDPOINTS.SETTINGS}/DaycareName`, { headers: silentHeaders }).subscribe({
      next: (s) => {
        if (s?.value)
          this.daycareName = s.value;
      },
      error: () => {
      }
    });
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.FEE_RECEIPT"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("STATIC_FEES_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("STATIC_FEES_PAGE.TITLE"), url: "/static-fees" },
      { label: this.translateService.instant("STATIC_FEES_PAGE.FEE_DETAIL") }
    ];
  }
  getActions() {
    return [
      {
        label: this.translateService.instant("STATIC_FEES_PAGE.BACK_TO_LIST"),
        icon: "bi bi-arrow-left",
        class: "custom-btn-2 btn-cancel-2",
        action: () => this.goBack()
      },
      {
        label: this.translateService.instant("STATIC_FEES_PAGE.PRINT"),
        icon: "bi bi-printer",
        class: "custom-btn-2 btn-view-global-2",
        action: () => this.print()
      }
    ];
  }
  loadFee() {
    this.loading = true;
    this.staticFeesService.getStaticFeeById(this.feeId).subscribe({
      next: (fee) => {
        this.fee = fee;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/static-fees"]);
  }
  print() {
    window.print();
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "Paid":
        return "badge bg-success";
      case "Pending":
        return "badge bg-warning text-dark";
      default:
        return "badge bg-secondary";
    }
  }
  getCategoryBadgeClass(category) {
    switch (category) {
      case "Tuition":
        return "badge bg-primary";
      case "Supplies":
        return "badge bg-info";
      case "Events":
        return "badge bg-purple";
      case "Meals":
        return "badge bg-orange";
      case "Transportation":
        return "badge bg-teal";
      case "Registration":
        return "badge bg-indigo";
      case "Late Pickup":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  }
  getPaymentMethodIcon(method) {
    switch (method) {
      case "Cash":
        return "bi-cash-stack";
      case "Check":
        return "bi-file-earmark-text";
      case "BankTransfer":
        return "bi-bank";
      default:
        return "bi-credit-card";
    }
  }
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  translateStatus(status) {
    switch (status) {
      case "Paid":
        return this.translateService.instant("STATIC_FEES_PAGE.PAID");
      case "Pending":
        return this.translateService.instant("STATIC_FEES_PAGE.PENDING");
      default:
        return status;
    }
  }
  translateCategory(category) {
    switch (category) {
      case "Tuition":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_TUITION");
      case "Supplies":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_SUPPLIES");
      case "Events":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_EVENTS");
      case "Meals":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_MEALS");
      case "Transportation":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_TRANSPORTATION");
      case "Registration":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_REGISTRATION");
      case "Late Pickup":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_LATE_PICKUP");
      case "Other":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_OTHER");
      default:
        return category || "";
    }
  }
  translatePaymentMethod(method) {
    switch (method) {
      case "Cash":
        return this.translateService.instant("STATIC_FEES_PAGE.METHOD_CASH");
      case "Check":
        return this.translateService.instant("STATIC_FEES_PAGE.METHOD_CHECK");
      case "BankTransfer":
        return this.translateService.instant("STATIC_FEES_PAGE.METHOD_BANK_TRANSFER");
      case "Other":
        return this.translateService.instant("STATIC_FEES_PAGE.METHOD_OTHER");
      default:
        return method || "";
    }
  }
  static \u0275fac = function StaticFeeDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaticFeeDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StaticFeesService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaticFeeDetailComponent, selectors: [["app-static-fee-detail"]], decls: 7, vars: 10, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-receipt", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "white-box"], [1, "float-end"], [1, "row", "detailfee"], [1, "col-12"], [1, "from-to"], [1, "col-6"], [1, "font-bold", "from"], [1, "addr-font-h3", "font-bold", "to"], [1, "logo-detail"], [1, "col-6", "left"], [1, "logo"], ["loading", "lazy", "src", "assets/images/invoice_logo.png", "alt", "logo", 1, "logo-default", 2, "max-width", "150px"], [1, "text-muted", "m-l-5"], [1, "col-6", "right"], [1, "m-t-30"], [4, "ngIf"], [1, "float-end", "text-end"], [1, "font-bold", "addr-font-h4"], ["class", "text-muted m-l-30", 4, "ngIf"], [1, "clearfix"], [1, "table-responsive", "m-t-40"], [1, "table", "table-hover"], [1, "text-end"], [3, "class", 4, "ngIf"], [1, "float-end", "m-t-30", "text-end"], [1, "total"], ["class", "mb-3", 4, "ngIf"], ["class", "mb-3 text-muted small", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3", "no-print"], [1, "action-btn", "custom-btn-2", "btn-cancel-2", "back", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], [1, "action-btn", "custom-btn-2", "btn-edit-global-2", 3, "click"], [1, "bi", "bi-printer", "me-2"], [1, "text-muted", "m-l-30"], [1, "bi", "bi-person-fill", "me-1"], [1, "mb-3"], [1, "text-muted", "ms-1"], [1, "text-muted"], [1, "mb-3", "text-muted", "small"], [1, "bi", "bi-person", "me-1"]], template: function StaticFeeDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 0);
      \u0275\u0275template(5, StaticFeeDetailComponent_div_5_Template, 5, 3, "div", 2)(6, StaticFeeDetailComponent_div_6_Template, 112, 73, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 6, "STATIC_FEES_PAGE.FEE_RECEIPT"))("subtitle", \u0275\u0275pipeBind1(3, 8, "STATIC_FEES_PAGE.VIEW_FEE_DETAILS"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.getActions());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.fee);
    }
  }, dependencies: [CommonModule, NgIf, TitlePage, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\n.white-box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.logo-default[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.detailfee[_ngcontent-%COMP%]   .from-to[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px !important;\n  object-fit: contain;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n  align-items: center;\n}\n.detailfee[_ngcontent-%COMP%]   .logo-detail[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.detailfee[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n  border: 1px solid #d9d9d9;\n  color: #000;\n}\n.detailfee[_ngcontent-%COMP%]   .btn-info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: 1px solid #17a2b8;\n  color: #fff;\n}\n.total[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.text-end[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n@media screen and (max-width: 767px) {\n  .print[_ngcontent-%COMP%] {\n    background: var(--secondary-color) !important;\n    color: white !important;\n    border: none !important;\n  }\n  .back[_ngcontent-%COMP%] {\n    background: #e9edf4 !important;\n    color: black !important;\n    border: none !important;\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  app-title-page[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=static-fee-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticFeeDetailComponent, [{
    type: Component,
    args: [{ selector: "app-static-fee-detail", standalone: true, imports: [CommonModule, TitlePage, AppCurrencyPipe, TranslateModule], template: `<div class="container-fluid mt-4">
  <app-title-page
    [title]="'STATIC_FEES_PAGE.FEE_RECEIPT' | translate"
    [subtitle]="'STATIC_FEES_PAGE.VIEW_FEE_DETAILS' | translate"
    icon="bi bi-receipt"
    [breadcrumbs]="breadcrumbs"
    [actions]="getActions()">
  </app-title-page>
</div>

<div class="container-fluid mt-4">

  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">{{ 'STATIC_FEES_PAGE.LOADING' | translate }}</span>
    </div>
  </div>

  <div *ngIf="!loading && fee" class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-12">
          <div class="white-box">

            <h6>
              <b>{{ 'STATIC_FEES_PAGE.RECEIPT' | translate }}</b>
              <span class="float-end">#{{ fee.id }}</span>
            </h6>
            <hr>

            <div class="row detailfee">

              <!-- Bill From / Bill To -->
              <div class="col-12">
                <address class="from-to">
                  <div class="row">
                    <div class="col-6">
                      <p class="font-bold from">{{ 'STATIC_FEES_PAGE.BILL_FROM' | translate }} :</p>
                    </div>
                    <div class="col-6">
                      <p class="addr-font-h3 font-bold to">{{ 'STATIC_FEES_PAGE.BILL_TO' | translate }} :</p>
                      <p class="addr-font-h3 font-bold to">
                        {{ fee.payerName || fee.parentName || '-' }}
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              <!-- Logo + Status -->
              <div class="col-md-12">
                <div class="logo-detail">
                  <div class="row">
                    <div class="col-6 left">
                      <div class="logo">
                        <img loading="lazy" src="assets/images/invoice_logo.png" alt="logo" class="logo-default" style="max-width: 150px;">
                        <p class="text-muted m-l-5">{{ daycareName }}</p>
                      </div>
                    </div>
                    <div class="col-6 right">
                      <p class="m-t-30">
                        <b>{{ 'STATIC_FEES_PAGE.FEE_DATE' | translate }} :</b>
                        {{ fee.feeDate | date:'mediumDate':'':currentLocale }}
                      </p>
                      <p>
                        <span [class]="getStatusBadgeClass(fee.status)">
                          <b>{{ 'STATIC_FEES_PAGE.STATUS' | translate }} :</b> {{ translateStatus(fee.status) }}
                        </span>
                      </p>
                      <p *ngIf="fee.paidDate">
                        <b>{{ 'STATIC_FEES_PAGE.PAID_DATE' | translate }} :</b>
                        {{ fee.paidDate | date:'mediumDate':'':currentLocale }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Payer info -->
                <div class="float-end text-end">
                  <address>
                    <p class="font-bold addr-font-h4">{{ fee.payerName || fee.parentName }}</p>
                    <p *ngIf="fee.payerEmail" class="text-muted m-l-30">{{ fee.payerEmail }}</p>
                    <p *ngIf="fee.payerPhone" class="text-muted m-l-30">{{ fee.payerPhone }}</p>
                    <p *ngIf="fee.childName" class="text-muted m-l-30">
                      <i class="bi bi-person-fill me-1"></i>{{ fee.childName }}
                    </p>
                  </address>
                </div>
              </div>

              <!-- Fee Table -->
              <div class="col-md-12">
                <div class="clearfix"></div>
                <hr>
                <div class="table-responsive m-t-40">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>{{ 'STATIC_FEES_PAGE.FEE_TITLE' | translate }}</th>
                        <th>{{ 'STATIC_FEES_PAGE.DESCRIPTION' | translate }}</th>
                        <th>{{ 'STATIC_FEES_PAGE.CATEGORY' | translate }}</th>
                        <th>{{ 'STATIC_FEES_PAGE.PAYMENT_METHOD' | translate }}</th>
                        <th class="text-end">{{ 'STATIC_FEES_PAGE.AMOUNT' | translate }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ fee.title }}</td>
                        <td>{{ fee.description || '-' }}</td>
                        <td>
                          <span *ngIf="fee.category" [class]="getCategoryBadgeClass(fee.category)">
                            {{ translateCategory(fee.category) }}
                          </span>
                          <span *ngIf="!fee.category">-</span>
                        </td>
                        <td>
                          <i class="bi {{ getPaymentMethodIcon(fee.paymentMethod) }} me-1"></i>
                          {{ translatePaymentMethod(fee.paymentMethod) }}
                        </td>
                        <td class="text-end">{{ fee.amount | appCurrency }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Total -->
                <div class="float-end m-t-30 text-end">
                  <h6 class="total">
                    <b>{{ 'STATIC_FEES_PAGE.TOTAL' | translate }} :</b> {{ fee.amount | appCurrency }}
                  </h6>
                </div>

                <!-- Reference -->
                <div *ngIf="fee.referenceNumber" class="mb-3">
                  <strong>{{ 'STATIC_FEES_PAGE.REFERENCE_NUMBER' | translate }}:</strong>
                  <span class="text-muted ms-1">{{ fee.referenceNumber }}</span>
                </div>

                <!-- Notes -->
                <div *ngIf="fee.notes" class="mb-3">
                  <strong>{{ 'STATIC_FEES_PAGE.NOTES' | translate }}:</strong>
                  <p class="text-muted">{{ fee.notes }}</p>
                </div>

                <!-- Created by -->
                <div *ngIf="fee.createdByUserName" class="mb-3 text-muted small">
                  <i class="bi bi-person me-1"></i>
                  {{ 'STATIC_FEES_PAGE.CREATED_BY' | translate }}: {{ fee.createdByUserName }}
                  <span *ngIf="fee.createdAt"> \u2014 {{ fee.createdAt | date:'mediumDate':'':currentLocale }}</span>
                </div>

              </div>

              <!-- Print button (visible on screen, hidden on print) -->
              <div class="col-md-12">
                <div class="d-flex justify-content-end gap-2 mt-3 no-print">
                  <button class="action-btn custom-btn-2 btn-cancel-2 back" (click)="goBack()">
                    <i class="bi bi-arrow-left me-2"></i>{{ 'STATIC_FEES_PAGE.BACK_TO_LIST' | translate }}
                  </button>
                  <button class="action-btn custom-btn-2 btn-edit-global-2" (click)="print()">
                    <i class="bi bi-printer me-2"></i>{{ 'STATIC_FEES_PAGE.PRINT' | translate }}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`, styles: ["/* src/app/features/static-fees/static-fee-detail/static-fee-detail.scss */\n.white-box {\n  padding: 20px;\n}\n.logo-default {\n  margin: 10px 0;\n}\n.detailfee .from-to .to {\n  text-align: right;\n}\n.detailfee .logo-detail .left .logo {\n  display: flex;\n  align-items: center;\n}\n.detailfee .logo-detail .left .logo img {\n  max-width: 50px !important;\n  object-fit: contain;\n}\n.detailfee .logo-detail .left .logo p {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.detailfee .logo-detail .right {\n  text-align: right;\n  align-items: center;\n}\n.detailfee .logo-detail .right p {\n  margin-bottom: 0;\n}\n.detailfee .btn-secondary {\n  background: #d9d9d9;\n  border: 1px solid #d9d9d9;\n  color: #000;\n}\n.detailfee .btn-info {\n  background: #17a2b8;\n  border: 1px solid #17a2b8;\n  color: #fff;\n}\n.total {\n  margin-bottom: 30px;\n}\n.text-end {\n  display: flex;\n  justify-content: end;\n}\n.badge.bg-primary {\n  background-color: var(--secondary-color) !important;\n}\n@media screen and (max-width: 767px) {\n  .print {\n    background: var(--secondary-color) !important;\n    color: white !important;\n    border: none !important;\n  }\n  .back {\n    background: #e9edf4 !important;\n    color: black !important;\n    border: none !important;\n  }\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  app-title-page {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=static-fee-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: StaticFeesService }, { type: HttpClient }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaticFeeDetailComponent, { className: "StaticFeeDetailComponent", filePath: "src/app/features/static-fees/static-fee-detail/static-fee-detail.ts", lineNumber: 24 });
})();
export {
  StaticFeeDetailComponent
};
//# sourceMappingURL=chunk-KI7V3M4G.js.map
