import {
  PermissionService
} from "./chunk-3MPWTHNE.js";
import {
  ExportUtil
} from "./chunk-CAKYQ2FY.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
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
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  firstValueFrom,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/static-fees/static-fees.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function StaticFeesComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r1.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function StaticFeesComponent_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function StaticFeesComponent_button_81_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearDateFilter());
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function StaticFeesComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "STATIC_FEES_PAGE.LOADING"));
  }
}
function StaticFeesComponent_div_83_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "h4", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 51);
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigateToAdd());
    });
    \u0275\u0275element(10, "i", 52);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "STATIC_FEES_PAGE.NO_FEES_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.fees.length === 0 ? \u0275\u0275pipeBind1(7, 5, "STATIC_FEES_PAGE.NO_FEES_MESSAGE") : \u0275\u0275pipeBind1(8, 7, "STATIC_FEES_PAGE.ADJUST_FILTERS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 9, "STATIC_FEES_PAGE.ADD_FIRST_FEE"), " ");
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.getCategoryClass(fee_r6.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translateCategory(fee_r6.category));
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fee_r6.payerName);
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fee_r6.parentName);
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 9);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", fee_r6.childName, " ");
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 2, "STATIC_FEES_PAGE.PAID_ON"), ": ", \u0275\u0275pipeBind4(4, 4, fee_r6.paidDate, "shortDate", "", ctx_r2.currentLocale), " ");
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "STATIC_FEES_PAGE.REF"), ": ", fee_r6.referenceNumber, " ");
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_3_tr_26_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const fee_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPaymentModal(fee_r6));
    });
    \u0275\u0275element(2, "i", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "STATIC_FEES_PAGE.MARK_AS_PAID"));
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_3_tr_26_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const fee_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.markAsPending(fee_r6));
    });
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "STATIC_FEES_PAGE.MARK_AS_PENDING"));
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_3_tr_26_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const fee_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteFee(fee_r6));
    });
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "STATIC_FEES_PAGE.DELETE"));
  }
}
function StaticFeesComponent_div_83_div_3_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 56)(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StaticFeesComponent_div_83_div_3_tr_26_small_5_Template, 2, 3, "small", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 56);
    \u0275\u0275template(8, StaticFeesComponent_div_83_div_3_tr_26_span_8_Template, 2, 1, "span", 59)(9, StaticFeesComponent_div_83_div_3_tr_26_span_9_Template, 2, 1, "span", 59)(10, StaticFeesComponent_div_83_div_3_tr_26_span_10_Template, 2, 0, "span", 60)(11, StaticFeesComponent_div_83_div_3_tr_26_small_11_Template, 3, 1, "small", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 61);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, StaticFeesComponent_div_83_div_3_tr_26_small_20_Template, 5, 9, "small", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 63);
    \u0275\u0275element(23, "i");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, StaticFeesComponent_div_83_div_3_tr_26_small_25_Template, 3, 4, "small", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "div", 65)(31, "button", 66);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_3_tr_26_Template_button_click_31_listener() {
      const fee_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewDetail(fee_r6));
    });
    \u0275\u0275element(33, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, StaticFeesComponent_div_83_div_3_tr_26_button_34_Template, 3, 3, "button", 68)(35, StaticFeesComponent_div_83_div_3_tr_26_button_35_Template, 3, 3, "button", 69)(36, StaticFeesComponent_div_83_div_3_tr_26_button_36_Template, 3, 3, "button", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fee_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(fee_r6.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r6.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", fee_r6.payerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !fee_r6.payerName && fee_r6.parentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !fee_r6.payerName && !fee_r6.parentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r6.childName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 21, fee_r6.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(19, 23, fee_r6.feeDate, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", fee_r6.paidDate);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", ctx_r2.getPaymentMethodIcon(fee_r6.paymentMethod), " me-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translatePaymentMethod(fee_r6.paymentMethod), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r6.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getStatusClass(fee_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translateStatus(fee_r6.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 28, "STATIC_FEES_PAGE.VIEW_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", fee_r6.status === "Pending" && ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r6.status === "Paid" && ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.canDelete());
  }
}
function StaticFeesComponent_div_83_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 54)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275template(26, StaticFeesComponent_div_83_div_3_tr_26_Template, 37, 30, "tr", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "STATIC_FEES_PAGE.TITLE_COLUMN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "STATIC_FEES_PAGE.PAYER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "STATIC_FEES_PAGE.AMOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "STATIC_FEES_PAGE.FEE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "STATIC_FEES_PAGE.PAYMENT_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "STATIC_FEES_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "STATIC_FEES_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.displayedFees);
  }
}
function StaticFeesComponent_div_83_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "button", 82);
    \u0275\u0275listener("click", function StaticFeesComponent_div_83_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadMoreFees());
    });
    \u0275\u0275element(2, "i", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "STATIC_FEES_PAGE.LOAD_MORE"), " ");
  }
}
function StaticFeesComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275template(2, StaticFeesComponent_div_83_div_2_Template, 13, 11, "div", 45)(3, StaticFeesComponent_div_83_div_3_Template, 27, 22, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StaticFeesComponent_div_83_div_4_Template, 5, 3, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasNoFees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hasNoFees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasMoreFees());
  }
}
function StaticFeesComponent_div_84_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function StaticFeesComponent_div_84_i_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 116);
  }
}
function StaticFeesComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "h5", 88);
    \u0275\u0275element(5, "i", 89);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 90);
    \u0275\u0275listener("click", function StaticFeesComponent_div_84_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBulkFeeModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 91)(10, "div", 92);
    \u0275\u0275element(11, "i", 93);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "form")(15, "div", 94)(16, "label", 95);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 96);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_84_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bulkFee.title, $event) || (ctx_r2.bulkFee.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 94)(23, "label", 95);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 96);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 98)(29, "span", 99);
    \u0275\u0275text(30, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_84_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bulkFee.amount, $event) || (ctx_r2.bulkFee.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 101)(33, "div", 102)(34, "label", 95);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementStart(37, "span", 96);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_84_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bulkFee.feeDate, $event) || (ctx_r2.bulkFee.feeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 102)(41, "label", 95);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_84_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bulkFee.category, $event) || (ctx_r2.bulkFee.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 94)(46, "label", 95);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 105);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_84_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bulkFee.paymentMethod, $event) || (ctx_r2.bulkFee.paymentMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 106);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 107);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 108);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 109);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "div", 110)(63, "button", 111);
    \u0275\u0275listener("click", function StaticFeesComponent_div_84_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBulkFeeModal = false);
    });
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 112);
    \u0275\u0275listener("click", function StaticFeesComponent_div_84_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createBulkFees());
    });
    \u0275\u0275template(67, StaticFeesComponent_div_84_span_67_Template, 1, 0, "span", 113)(68, StaticFeesComponent_div_84_i_68_Template, 1, 0, "i", 114);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r2.showBulkFeeModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showBulkFeeModal);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 25, "STATIC_FEES_PAGE.CREATE_MONTHLY_FEES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 27, "STATIC_FEES_PAGE.BULK_FEE_INFO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 29, "STATIC_FEES_PAGE.FEE_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bulkFee.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 31, "STATIC_FEES_PAGE.AMOUNT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bulkFee.amount);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(36, 33, "STATIC_FEES_PAGE.FEE_DATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bulkFee.feeDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 35, "STATIC_FEES_PAGE.CATEGORY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bulkFee.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 37, "STATIC_FEES_PAGE.PAYMENT_METHOD"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bulkFee.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 39, "STATIC_FEES_PAGE.METHOD_CASH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 41, "STATIC_FEES_PAGE.METHOD_CHECK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 43, "STATIC_FEES_PAGE.METHOD_BANK_TRANSFER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 45, "STATIC_FEES_PAGE.METHOD_OTHER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 47, "STATIC_FEES_PAGE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.bulkSubmitting || !ctx_r2.bulkFee.title || !ctx_r2.bulkFee.amount || !ctx_r2.bulkFee.feeDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bulkSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.bulkSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bulkSubmitting ? \u0275\u0275pipeBind1(70, 49, "STATIC_FEES_PAGE.CREATING") : \u0275\u0275pipeBind1(71, 51, "STATIC_FEES_PAGE.CREATE_FEES"), " ");
  }
}
function StaticFeesComponent_div_85_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" (", \u0275\u0275pipeBind1(2, 2, "STATIC_FEES_PAGE.REF"), ": ", ctx_r2.selectedFee.referenceNumber, ")");
  }
}
function StaticFeesComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "div", 87)(4, "h5", 88);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 90);
    \u0275\u0275listener("click", function StaticFeesComponent_div_85_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showPaymentModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 91)(9, "div", 117)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "appCurrency");
    \u0275\u0275element(20, "br");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275template(25, StaticFeesComponent_div_85_span_25_Template, 3, 4, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "hr");
    \u0275\u0275elementStart(27, "form")(28, "div", 94)(29, "label", 95);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_85_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.paymentData.paidDate, $event) || (ctx_r2.paymentData.paidDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 94)(34, "label", 95);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 119);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_div_85_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.paymentData.notes, $event) || (ctx_r2.paymentData.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 110)(40, "button", 111);
    \u0275\u0275listener("click", function StaticFeesComponent_div_85_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showPaymentModal = false);
    });
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 120);
    \u0275\u0275listener("click", function StaticFeesComponent_div_85_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAsPaid());
    });
    \u0275\u0275element(44, "i", 116);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r2.showPaymentModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showPaymentModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "STATIC_FEES_PAGE.MARK_FEE_PAID"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 21, "STATIC_FEES_PAGE.FEE_TITLE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFee.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 23, "STATIC_FEES_PAGE.AMOUNT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 25, ctx_r2.selectedFee.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 27, "STATIC_FEES_PAGE.PAYMENT_METHOD"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFee.paymentMethod, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedFee.referenceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 29, "STATIC_FEES_PAGE.PAYMENT_DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.paymentData.paidDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 31, "STATIC_FEES_PAGE.PAYMENT_NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.paymentData.notes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 33, "STATIC_FEES_PAGE.PAYMENT_NOTES_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 35, "STATIC_FEES_PAGE.CANCEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 37, "STATIC_FEES_PAGE.CONFIRM_PAID"), " ");
  }
}
function StaticFeesComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 121);
  }
}
var StaticFeesComponent = class _StaticFeesComponent {
  router;
  staticFeesService;
  translateService;
  pageTitleService;
  permissionService;
  langChangeSub;
  fees = [];
  displayedFees = [];
  summary = null;
  loading = false;
  feesPerPage = 10;
  currentPage = 1;
  _totalFilteredCount = 0;
  // Filters
  filterStatus = "all";
  filterCategory = "all";
  filterPaymentMethod = "all";
  filterDate = `${(/* @__PURE__ */ new Date()).getFullYear()}-${String((/* @__PURE__ */ new Date()).getMonth() + 1).padStart(2, "0")}`;
  // defaults to current month
  searchTerm = "";
  // Dropdown options
  statusOptions = [];
  categoryOptions = [];
  paymentMethodOptions = [];
  // Bulk modal
  showBulkFeeModal = false;
  bulkSubmitting = false;
  bulkFee = {
    title: "",
    amount: 0,
    feeDate: "",
    paymentMethod: "Cash",
    category: "Monthly"
  };
  // Payment modal
  showPaymentModal = false;
  selectedFee = null;
  paymentData = {
    paidDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    notes: ""
  };
  breadcrumbs = [];
  titleActions = [];
  constructor(router, staticFeesService, translateService, pageTitleService, permissionService) {
    this.router = router;
    this.staticFeesService = staticFeesService;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    this.permissionService = permissionService;
    registerLocaleData(fr_default);
    registerLocaleData(it_default);
    registerLocaleData(ar_default);
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.TITLE"));
    this.updateTranslatedContent();
    this.loadData();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("STATIC_FEES_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("STATIC_FEES_PAGE.TITLE") }
    ];
    this.titleActions = [
      {
        label: this.translateService.instant("COMMON.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            {
              label: this.translateService.instant("COMMON.EXPORT_PDF"),
              icon: "bi bi-file-earmark-pdf",
              action: () => this.exportToPDF()
            },
            {
              label: this.translateService.instant("COMMON.EXPORT_EXCEL"),
              icon: "bi bi-file-earmark-excel",
              action: () => this.exportToExcel()
            }
          ]
        }
      },
      {
        label: this.translateService.instant("STATIC_FEES_PAGE.BULK_MONTHLY_FEE"),
        icon: "bi bi-calendar-plus",
        class: "custom-btn-2 btn-edit-global-2 me-2",
        action: () => this.openBulkFeeModal()
      },
      {
        label: this.translateService.instant("STATIC_FEES_PAGE.ADD_STATIC_FEE"),
        icon: "bi bi-plus-lg",
        class: "custom-btn-2 btn-add-global-2",
        action: () => this.navigateToAdd()
      }
    ];
    this.statusOptions = [
      { value: "all", label: this.translateService.instant("STATIC_FEES_PAGE.ALL_STATUS"), icon: "bi-list-ul" },
      { value: "Pending", label: this.translateService.instant("STATIC_FEES_PAGE.PENDING"), icon: "bi-hourglass-split" },
      { value: "Paid", label: this.translateService.instant("STATIC_FEES_PAGE.PAID"), icon: "bi-check-circle" }
    ];
    this.categoryOptions = [
      { value: "all", label: this.translateService.instant("STATIC_FEES_PAGE.ALL_CATEGORIES") },
      { value: "Tuition", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_TUITION") },
      { value: "Supplies", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_SUPPLIES") },
      { value: "Events", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_EVENTS") },
      { value: "Meals", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_MEALS") },
      { value: "Transportation", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_TRANSPORTATION") },
      { value: "Registration", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_REGISTRATION") },
      { value: "Late Pickup", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_LATE_PICKUP") },
      { value: "Other", label: this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_OTHER") }
    ];
    this.paymentMethodOptions = [
      { value: "all", label: this.translateService.instant("STATIC_FEES_PAGE.ALL_METHODS") },
      { value: "Cash", label: this.translateService.instant("STATIC_FEES_PAGE.METHOD_CASH") },
      { value: "Check", label: this.translateService.instant("STATIC_FEES_PAGE.METHOD_CHECK") },
      { value: "BankTransfer", label: this.translateService.instant("STATIC_FEES_PAGE.METHOD_BANK_TRANSFER") },
      { value: "Other", label: this.translateService.instant("STATIC_FEES_PAGE.METHOD_OTHER") }
    ];
  }
  // ── Data loading ────────────────────────────────────────────────────────────
  loadData() {
    this.loading = true;
    Promise.all([
      this.loadFees(),
      this.loadSummary()
    ]).finally(() => {
      this.loading = false;
    });
  }
  async loadFees() {
    const filters = {};
    if (this.filterStatus !== "all")
      filters.status = this.filterStatus;
    if (this.filterCategory !== "all")
      filters.category = this.filterCategory;
    if (this.filterPaymentMethod !== "all")
      filters.paymentMethod = this.filterPaymentMethod;
    try {
      const fees = await firstValueFrom(this.staticFeesService.getStaticFees(filters));
      this.fees = fees || [];
      this.currentPage = 1;
      this.updateDisplayedFees();
    } catch {
      this.fees = [];
    }
  }
  async loadSummary() {
    try {
      const summary = await firstValueFrom(this.staticFeesService.getSummary());
      this.summary = summary || null;
    } catch {
    }
  }
  // ── Filtering ───────────────────────────────────────────────────────────────
  getFilteredFees() {
    let filtered = this.fees;
    if (this.filterDate) {
      filtered = filtered.filter((fee) => fee.feeDate && fee.feeDate.substring(0, 7) === this.filterDate);
    }
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((fee) => fee.title.toLowerCase().includes(term) || fee.payerName?.toLowerCase().includes(term) || fee.parentName?.toLowerCase().includes(term) || fee.childName?.toLowerCase().includes(term) || fee.referenceNumber?.toLowerCase().includes(term));
    }
    return filtered;
  }
  get computedSummary() {
    const fees = this.getFilteredFees();
    const paid = fees.filter((f) => f.status === "Paid");
    const pending = fees.filter((f) => f.status === "Pending");
    return {
      totalFees: fees.length,
      paidFees: paid.length,
      pendingFees: pending.length,
      totalAmount: fees.reduce((sum, f) => sum + f.amount, 0),
      paidAmount: paid.reduce((sum, f) => sum + f.amount, 0),
      pendingAmount: pending.reduce((sum, f) => sum + f.amount, 0)
    };
  }
  get hasNoFees() {
    return this.getFilteredFees().length === 0;
  }
  updateDisplayedFees() {
    const allFiltered = this.getFilteredFees();
    const endIndex = this.currentPage * this.feesPerPage;
    this.displayedFees = allFiltered.slice(0, endIndex);
    this._totalFilteredCount = allFiltered.length;
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadFees();
  }
  onDateFilterChange() {
    this.currentPage = 1;
    this.updateDisplayedFees();
  }
  onSearchChange() {
    this.currentPage = 1;
    this.updateDisplayedFees();
  }
  clearDateFilter() {
    this.filterDate = "";
    this.currentPage = 1;
    this.updateDisplayedFees();
  }
  loadMoreFees() {
    this.currentPage++;
    this.updateDisplayedFees();
  }
  hasMoreFees() {
    return this.displayedFees.length < this._totalFilteredCount;
  }
  // ── Export ──────────────────────────────────────────────────────────────────
  exportToPDF() {
    const fees = this.getFilteredFees();
    const data = fees.map((fee) => ({
      [this.translateService.instant("STATIC_FEES_PAGE.TITLE_COLUMN")]: fee.title,
      [this.translateService.instant("STATIC_FEES_PAGE.PAYER")]: fee.payerName || fee.parentName || "-",
      [this.translateService.instant("STATIC_FEES_PAGE.AMOUNT")]: fee.amount,
      [this.translateService.instant("STATIC_FEES_PAGE.FEE_DATE")]: fee.feeDate,
      [this.translateService.instant("STATIC_FEES_PAGE.PAYMENT_METHOD")]: fee.paymentMethod,
      [this.translateService.instant("STATIC_FEES_PAGE.STATUS")]: fee.status,
      [this.translateService.instant("STATIC_FEES_PAGE.REFERENCE_NUMBER")]: fee.referenceNumber || "-"
    }));
    const month = this.filterDate || (/* @__PURE__ */ new Date()).toISOString().substring(0, 7);
    ExportUtil.exportToPDF(data, `${this.translateService.instant("STATIC_FEES_PAGE.TITLE")} - ${month}`);
  }
  exportToExcel() {
    const fees = this.getFilteredFees();
    const data = fees.map((fee) => ({
      [this.translateService.instant("STATIC_FEES_PAGE.TITLE_COLUMN")]: fee.title,
      [this.translateService.instant("STATIC_FEES_PAGE.PAYER")]: fee.payerName || fee.parentName || "-",
      [this.translateService.instant("STATIC_FEES_PAGE.AMOUNT")]: fee.amount,
      [this.translateService.instant("STATIC_FEES_PAGE.FEE_DATE")]: fee.feeDate,
      [this.translateService.instant("STATIC_FEES_PAGE.PAYMENT_METHOD")]: fee.paymentMethod,
      [this.translateService.instant("STATIC_FEES_PAGE.STATUS")]: fee.status,
      [this.translateService.instant("STATIC_FEES_PAGE.REFERENCE_NUMBER")]: fee.referenceNumber || "-"
    }));
    const month = this.filterDate || (/* @__PURE__ */ new Date()).toISOString().substring(0, 7);
    ExportUtil.exportToExcel(data, `${this.translateService.instant("STATIC_FEES_PAGE.TITLE")} - ${month}`);
  }
  // ── Bulk monthly fee ────────────────────────────────────────────────────────
  openBulkFeeModal() {
    const nextMonth = /* @__PURE__ */ new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);
    const currentLang = this.translateService.getCurrentLang() || "en";
    const monthYear = nextMonth.toLocaleDateString(currentLang, { month: "long", year: "numeric" });
    this.bulkFee = {
      title: `${this.translateService.instant("STATIC_FEES_PAGE.MONTHLY_FEE")} - ${monthYear}`,
      amount: 0,
      feeDate: nextMonth.toISOString().split("T")[0],
      paymentMethod: "Cash",
      category: "Monthly"
    };
    this.showBulkFeeModal = true;
  }
  createBulkFees() {
    if (!this.bulkFee.title || !this.bulkFee.amount || !this.bulkFee.feeDate)
      return;
    this.bulkSubmitting = true;
    this.staticFeesService.createBulkMonthlyFees({
      title: this.bulkFee.title,
      amount: this.bulkFee.amount,
      feeDate: this.bulkFee.feeDate,
      paymentMethod: this.bulkFee.paymentMethod,
      category: this.bulkFee.category
    }).subscribe({
      next: (result) => {
        this.showBulkFeeModal = false;
        this.bulkSubmitting = false;
        this.loadData();
        showSuccessToast(this.translateService.instant("STATIC_FEES_PAGE.BULK_CREATED", { count: result.count }));
      },
      error: (err) => {
        this.bulkSubmitting = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translateService.instant("STATIC_FEES_PAGE.ERROR"),
          text: err.error?.message || this.translateService.instant("STATIC_FEES_PAGE.BULK_ERROR")
        });
      }
    });
  }
  // ── Navigation ──────────────────────────────────────────────────────────────
  navigateToAdd() {
    this.router.navigate(["/static-fees/add"]);
  }
  viewDetail(fee) {
    this.router.navigate(["/static-fees", fee.id]);
  }
  // ── Payment modal ───────────────────────────────────────────────────────────
  openPaymentModal(fee) {
    this.selectedFee = fee;
    this.paymentData = {
      paidDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      notes: ""
    };
    this.showPaymentModal = true;
  }
  markAsPaid() {
    if (!this.selectedFee)
      return;
    this.staticFeesService.markAsPaid(this.selectedFee.id, {
      paidDate: this.paymentData.paidDate,
      notes: this.paymentData.notes || void 0
    }).subscribe({
      next: () => {
        this.showPaymentModal = false;
        this.loadData();
        showSuccessToast(this.translateService.instant("STATIC_FEES_PAGE.SUCCESS"));
      },
      error: (err) => {
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translateService.instant("STATIC_FEES_PAGE.ERROR"),
          text: err.error?.message || this.translateService.instant("STATIC_FEES_PAGE.FAILED_TO_UPDATE")
        });
      }
    });
  }
  markAsPending(fee) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("STATIC_FEES_PAGE.CONFIRM_MARK_PENDING"),
      text: this.translateService.instant("STATIC_FEES_PAGE.MARK_PENDING_MESSAGE"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f0ad4e",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translateService.instant("STATIC_FEES_PAGE.YES_MARK_PENDING"),
      cancelButtonText: this.translateService.instant("STATIC_FEES_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.staticFeesService.markAsPending(fee.id).subscribe({
          next: () => {
            this.loadData();
            showSuccessToast(this.translateService.instant("STATIC_FEES_PAGE.SUCCESS"));
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("STATIC_FEES_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("STATIC_FEES_PAGE.FAILED_TO_UPDATE")
            });
          }
        });
      }
    });
  }
  deleteFee(fee) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("STATIC_FEES_PAGE.DELETE_CONFIRM_TITLE"),
      text: this.translateService.instant("STATIC_FEES_PAGE.DELETE_CONFIRM_MESSAGE", { title: fee.title }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translateService.instant("STATIC_FEES_PAGE.YES_DELETE"),
      cancelButtonText: this.translateService.instant("STATIC_FEES_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.staticFeesService.deleteStaticFee(fee.id).subscribe({
          next: () => {
            this.loadData();
            showSuccessToast(this.translateService.instant("STATIC_FEES_PAGE.DELETED"));
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("STATIC_FEES_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("STATIC_FEES_PAGE.DELETE_ERROR")
            });
          }
        });
      }
    });
  }
  // ── Style helpers ───────────────────────────────────────────────────────────
  getStatusClass(status) {
    switch (status) {
      case "Paid":
        return "badge bg-success-2";
      case "Pending":
        return "badge bg-warning-2";
      default:
        return "badge bg-secondary";
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
  getCategoryClass(category) {
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
  // ── Permissions ─────────────────────────────────────────────────────────────
  canEdit() {
    return this.permissionService.canEdit();
  }
  canDelete() {
    return this.permissionService.canDelete();
  }
  static \u0275fac = function StaticFeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaticFeesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StaticFeesService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(PermissionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaticFeesComponent, selectors: [["app-static-fees"]], decls: 87, vars: 72, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-cash-coin", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "row", "mb-4"], [1, "col-xl-3", "col-md-6", "col-6", "mb-3"], [1, "card", "stat-card", "shadow-sm"], [1, "card-body", "d-flex", "justify-content-between", "align-items-center", "p-3"], [1, "stat-content"], [1, "mb-0"], [1, "stat-number"], [1, "text-muted"], [1, "stat-icon-wrapper", "total"], [1, "bi", "bi-cash-coin"], [1, "stat-icon-wrapper", "paid"], [1, "bi", "bi-check-circle"], [1, "stat-icon-wrapper", "pending"], [1, "bi", "bi-hourglass-split"], [1, "stat-icon-wrapper", "rate"], [1, "bi", "bi-graph-up-arrow"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "placeholder", "ngModel"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "date-filter-group", "d-flex", "align-items-center"], [1, "date-picker-wrapper"], [1, "bi", "bi-calendar3", "date-icon"], ["type", "month", 1, "form-control", "date-input", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "date-clear-btn", 3, "click", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], ["type", "button", 1, "date-clear-btn", 3, "click"], [1, "bi", "bi-x"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card"], [1, "card-body"], ["class", "text-center p-4", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], [1, "text-center", "p-4"], [1, "bi", "bi-cash-coin", "fs-1", "text-muted"], [1, "mt-3"], [1, "action-btn", "btn-add-global-2", "custom-btn-2", "mx-auto", 3, "click"], [1, "bi", "bi-plus-lg", "me-2"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column"], [1, "fw-semibold"], [3, "class", 4, "ngIf"], [4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "fw-bold"], ["class", "text-success", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "text-muted d-block", 4, "ngIf"], [1, "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-sm", "btn-view", 3, "click", "title"], [1, "bi", "bi-eye"], ["type", "button", "class", "btn btn-sm btn-active", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-warning-custom", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-remove", 3, "title", "click", 4, "ngIf"], [1, "bi", "bi-person-fill", "me-1"], [1, "text-success"], [1, "bi", "bi-check-circle", "me-1"], [1, "text-muted", "d-block"], ["type", "button", 1, "btn", "btn-sm", "btn-active", 3, "click", "title"], [1, "bi", "bi-check-lg"], ["type", "button", 1, "btn", "btn-sm", "btn-warning-custom", 3, "click", "title"], [1, "bi", "bi-arrow-counterclockwise"], ["type", "button", 1, "btn", "btn-sm", "btn-remove", 3, "click", "title"], [1, "bi", "bi-trash3"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-calendar-plus", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "alert", "alert-info"], [1, "bi", "bi-info-circle", "me-2"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "title", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "name", "amount", "step", "0.01", "min", "0", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row"], [1, "col-md-6", "mb-3"], ["type", "date", "name", "feeDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "category", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "paymentMethod", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Cash"], ["value", "Check"], ["value", "BankTransfer"], ["value", "Other"], [1, "modal-footer"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-lg me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-2"], [1, "mb-3", "p-3", "bg-light", "rounded"], ["type", "date", "name", "paidDate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "modal-backdrop", "fade", "show"]], template: function StaticFeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h5", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "appCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "small", 9);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10);
      \u0275\u0275element(19, "i", 11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 3)(21, "div", 4)(22, "div", 5)(23, "div", 6)(24, "p", 7);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h5", 8);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "appCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "small", 9);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 12);
      \u0275\u0275element(34, "i", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 3)(36, "div", 4)(37, "div", 5)(38, "div", 6)(39, "p", 7);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "h5", 8);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "appCurrency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "small", 9);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 14);
      \u0275\u0275element(49, "i", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 3)(51, "div", 4)(52, "div", 5)(53, "div", 6)(54, "p", 7);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h5", 8);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "small", 9);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 16);
      \u0275\u0275element(62, "i", 17);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "div", 18)(64, "h4", 19);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 20)(68, "div", 21);
      \u0275\u0275element(69, "i", 22);
      \u0275\u0275elementStart(70, "input", 23);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StaticFeesComponent_Template_input_ngModelChange_70_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "ng-select", 24);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_Template_ng_select_ngModelChange_72_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StaticFeesComponent_Template_ng_select_change_72_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275template(74, StaticFeesComponent_ng_template_74_Template, 4, 4, "ng-template", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ng-select", 24);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_Template_ng_select_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterCategory, $event) || (ctx.filterCategory = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StaticFeesComponent_Template_ng_select_change_75_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 26)(78, "div", 27);
      \u0275\u0275element(79, "i", 28);
      \u0275\u0275elementStart(80, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function StaticFeesComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterDate, $event) || (ctx.filterDate = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StaticFeesComponent_Template_input_ngModelChange_80_listener() {
        return ctx.onDateFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, StaticFeesComponent_button_81_Template, 2, 0, "button", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(82, StaticFeesComponent_div_82_Template, 5, 3, "div", 31)(83, StaticFeesComponent_div_83_Template, 5, 3, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, StaticFeesComponent_div_84_Template, 72, 53, "div", 33)(85, StaticFeesComponent_div_85_Template, 47, 39, "div", 33)(86, StaticFeesComponent_div_86_Template, 1, 0, "div", 34);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 40, "STATIC_FEES_PAGE.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 42, "STATIC_FEES_PAGE.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 44, "STATIC_FEES_PAGE.TOTAL_FEES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 46, ctx.computedSummary.totalAmount));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.computedSummary.totalFees, " ", \u0275\u0275pipeBind1(17, 48, "STATIC_FEES_PAGE.FEES"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 50, "STATIC_FEES_PAGE.PAID"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 52, ctx.computedSummary.paidAmount));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.computedSummary.paidFees, " ", \u0275\u0275pipeBind1(32, 54, "STATIC_FEES_PAGE.FEES"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 56, "STATIC_FEES_PAGE.PENDING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 58, ctx.computedSummary.pendingAmount));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.computedSummary.pendingFees, " ", \u0275\u0275pipeBind1(47, 60, "STATIC_FEES_PAGE.FEES"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 62, "STATIC_FEES_PAGE.COLLECTION_RATE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.computedSummary.totalFees > 0 ? (ctx.computedSummary.paidFees / ctx.computedSummary.totalFees * 100).toFixed(0) : 0, "%");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.computedSummary.paidFees, "/", ctx.computedSummary.totalFees);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 64, "STATIC_FEES_PAGE.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 66, "STATIC_FEES_PAGE.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275property("items", ctx.statusOptions)("placeholder", \u0275\u0275pipeBind1(73, 68, "STATIC_FEES_PAGE.FILTER_BY_STATUS"))("clearable", false)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterCategory);
      \u0275\u0275property("items", ctx.categoryOptions)("placeholder", \u0275\u0275pipeBind1(76, 70, "STATIC_FEES_PAGE.FILTER_BY_CATEGORY"))("clearable", false)("searchable", false);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filterDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBulkFeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentModal && ctx.selectedFee);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentModal || ctx.showBulkFeeModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitlePage, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.stat-card[_ngcontent-%COMP%] {\n  transition: none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background-color: var(--secondary-color);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #6f42c1 !important;\n  color: white;\n}\n.bg-orange[_ngcontent-%COMP%] {\n  background-color: #fd7e14 !important;\n  color: white;\n}\n.bg-teal[_ngcontent-%COMP%] {\n  background-color: #20c997 !important;\n  color: white;\n}\n.bg-indigo[_ngcontent-%COMP%] {\n  background-color: #6610f2 !important;\n  color: white;\n}\n.btn-warning-custom[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n  color: #856404;\n}\n.btn-warning-custom[_ngcontent-%COMP%]:hover {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.btn-view[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  border-color: #e7f1ff;\n  color: #fff;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-color: #fff3cd;\n  color: #856404;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background-color: #ffc107;\n  color: #000;\n}\n.btn-active[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  border-color: #d1e7dd;\n  color: #0f5132;\n}\n.btn-active[_ngcontent-%COMP%]:hover {\n  background-color: #198754;\n  color: white;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-color: #f8d7da;\n  color: #842029;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.title-filter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #333;\n}\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 38px;\n  border-radius: 8px;\n  min-width: 200px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  padding: 12px 8px;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 12px 8px;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.bg-success-2[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.bg-warning-2[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.date-filter-group[_ngcontent-%COMP%]   .date-picker-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.date-filter-group[_ngcontent-%COMP%]   .date-picker-wrapper[_ngcontent-%COMP%]   .date-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  color: #6c757d;\n  pointer-events: none;\n  z-index: 1;\n}\n.date-filter-group[_ngcontent-%COMP%]   .date-picker-wrapper[_ngcontent-%COMP%]   .date-input[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-right: 28px;\n  border-radius: 8px;\n  min-width: 160px;\n  font-size: 14px;\n}\n.date-filter-group[_ngcontent-%COMP%]   .date-picker-wrapper[_ngcontent-%COMP%]   .date-clear-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  background: none;\n  border: none;\n  padding: 0;\n  line-height: 1;\n  color: #6c757d;\n  cursor: pointer;\n  font-size: 16px;\n}\n.date-filter-group[_ngcontent-%COMP%]   .date-picker-wrapper[_ngcontent-%COMP%]   .date-clear-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.date-filter-group[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #495057;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .filter-select[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n}\n@media (max-width: 576px) {\n  .stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    gap: 0.5rem !important;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    padding: 10px !important;\n  }\n}\n/*# sourceMappingURL=static-fees.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticFeesComponent, [{
    type: Component,
    args: [{ selector: "app-static-fees", standalone: true, imports: [CommonModule, TitlePage, FormsModule, NgSelectModule, AppCurrencyPipe, TranslateModule], template: `<div class="container-fluid mt-4">
  <app-title-page
    [title]="'STATIC_FEES_PAGE.TITLE' | translate"
    [subtitle]="'STATIC_FEES_PAGE.SUBTITLE' | translate"
    icon="bi bi-cash-coin"
    [breadcrumbs]="breadcrumbs"
    [actions]="titleActions">
  </app-title-page>

  <!-- Summary Cards -->
  <div class="row mb-4">
    <div class="col-xl-3 col-md-6 col-6 mb-3">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center p-3">
          <div class="stat-content">
            <p class="mb-0">{{ 'STATIC_FEES_PAGE.TOTAL_FEES' | translate }}</p>
            <h5 class="stat-number">{{ computedSummary.totalAmount | appCurrency }}</h5>
            <small class="text-muted">{{ computedSummary.totalFees }} {{ 'STATIC_FEES_PAGE.FEES' | translate }}</small>
          </div>
          <div class="stat-icon-wrapper total">
            <i class="bi bi-cash-coin"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 col-6 mb-3">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center p-3">
          <div class="stat-content">
            <p class="mb-0">{{ 'STATIC_FEES_PAGE.PAID' | translate }}</p>
            <h5 class="stat-number">{{ computedSummary.paidAmount | appCurrency }}</h5>
            <small class="text-muted">{{ computedSummary.paidFees }} {{ 'STATIC_FEES_PAGE.FEES' | translate }}</small>
          </div>
          <div class="stat-icon-wrapper paid">
            <i class="bi bi-check-circle"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 col-6 mb-3">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center p-3">
          <div class="stat-content">
            <p class="mb-0">{{ 'STATIC_FEES_PAGE.PENDING' | translate }}</p>
            <h5 class="stat-number">{{ computedSummary.pendingAmount | appCurrency }}</h5>
            <small class="text-muted">{{ computedSummary.pendingFees }} {{ 'STATIC_FEES_PAGE.FEES' | translate }}</small>
          </div>
          <div class="stat-icon-wrapper pending">
            <i class="bi bi-hourglass-split"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 col-6 mb-3">
      <div class="card stat-card shadow-sm">
        <div class="card-body d-flex justify-content-between align-items-center p-3">
          <div class="stat-content">
            <p class="mb-0">{{ 'STATIC_FEES_PAGE.COLLECTION_RATE' | translate }}</p>
            <h5 class="stat-number">{{ computedSummary.totalFees > 0 ? ((computedSummary.paidFees / computedSummary.totalFees) * 100).toFixed(0) : 0 }}%</h5>
            <small class="text-muted">{{ computedSummary.paidFees }}/{{ computedSummary.totalFees }}</small>
          </div>
          <div class="stat-icon-wrapper rate">
            <i class="bi bi-graph-up-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Filters -->
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">
    <h4 class="title-filter">{{ 'STATIC_FEES_PAGE.TITLE' | translate }}</h4>
    <div class="d-flex align-items-center flex-wrap gap-2">

      <!-- Search -->
      <div class="search-box">
        <i class="bi bi-search search-icon"></i>
        <input
          type="text"
          class="form-control search-input"
          [placeholder]="'STATIC_FEES_PAGE.SEARCH_PLACEHOLDER' | translate"
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearchChange()">
      </div>

      <!-- Status -->
      <ng-select
        class="filter-select"
        [(ngModel)]="filterStatus"
        [items]="statusOptions"
        bindLabel="label"
        bindValue="value"
        [placeholder]="'STATIC_FEES_PAGE.FILTER_BY_STATUS' | translate"
        [clearable]="false"
        [searchable]="false"
        (change)="onFilterChange()">
        <ng-template ng-option-tmp let-item="item">
          <div class="option-with-image">
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>
            <span class="option-title">{{ item.label }}</span>
          </div>
        </ng-template>
      </ng-select>

      <!-- Category -->
      <ng-select
        class="filter-select"
        [(ngModel)]="filterCategory"
        [items]="categoryOptions"
        bindLabel="label"
        bindValue="value"
        [placeholder]="'STATIC_FEES_PAGE.FILTER_BY_CATEGORY' | translate"
        [clearable]="false"
        [searchable]="false"
        (change)="onFilterChange()">
      </ng-select>


      <!-- Month picker -->
      <div class="date-filter-group d-flex align-items-center">
        <div class="date-picker-wrapper">
          <i class="bi bi-calendar3 date-icon"></i>
          <input
            type="month"
            class="form-control date-input"
            [(ngModel)]="filterDate"
            (ngModelChange)="onDateFilterChange()">
          <button *ngIf="filterDate" type="button" class="date-clear-btn" (click)="clearDateFilter()">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">{{ 'STATIC_FEES_PAGE.LOADING' | translate }}</span>
    </div>
  </div>

  <!-- Table -->
  <div class="card" *ngIf="!loading">
    <div class="card-body">
      <div *ngIf="hasNoFees" class="text-center p-4">
        <i class="bi bi-cash-coin fs-1 text-muted"></i>
        <h4 class="mt-3">{{ 'STATIC_FEES_PAGE.NO_FEES_FOUND' | translate }}</h4>
        <p class="text-muted">{{ fees.length === 0 ? ('STATIC_FEES_PAGE.NO_FEES_MESSAGE' | translate) : ('STATIC_FEES_PAGE.ADJUST_FILTERS' | translate) }}</p>
        <button class="action-btn btn-add-global-2 custom-btn-2 mx-auto" (click)="navigateToAdd()">
          <i class="bi bi-plus-lg me-2"></i>{{ 'STATIC_FEES_PAGE.ADD_FIRST_FEE' | translate }}
        </button>
      </div>

      <div *ngIf="!hasNoFees" class="table-responsive custom-table">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>{{ 'STATIC_FEES_PAGE.TITLE_COLUMN' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.PAYER' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.AMOUNT' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.FEE_DATE' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.PAYMENT_METHOD' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.STATUS' | translate }}</th>
              <th>{{ 'STATIC_FEES_PAGE.ACTIONS' | translate }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fee of displayedFees">
              <td>
                <div class="d-flex flex-column">
                  <span class="fw-semibold">{{ fee.title }}</span>
                  <small *ngIf="fee.category" [class]="getCategoryClass(fee.category)">{{ translateCategory(fee.category) }}</small>
                </div>
              </td>
              <td>
                <div class="d-flex flex-column">
                  <span *ngIf="fee.payerName">{{ fee.payerName }}</span>
                  <span *ngIf="!fee.payerName && fee.parentName">{{ fee.parentName }}</span>
                  <span *ngIf="!fee.payerName && !fee.parentName" class="text-muted">-</span>
                  <small *ngIf="fee.childName" class="text-muted">
                    <i class="bi bi-person-fill me-1"></i>{{ fee.childName }}
                  </small>
                </div>
              </td>
              <td>
                <span class="fw-bold">{{ fee.amount | appCurrency }}</span>
              </td>
              <td>
                <div>{{ fee.feeDate | date:'mediumDate':'':currentLocale }}</div>
                <small *ngIf="fee.paidDate" class="text-success">
                  <i class="bi bi-check-circle me-1"></i>{{ 'STATIC_FEES_PAGE.PAID_ON' | translate }}: {{ fee.paidDate | date:'shortDate':'':currentLocale }}
                </small>
              </td>
              <td>
                <span class="d-flex align-items-center">
                  <i class="bi {{ getPaymentMethodIcon(fee.paymentMethod) }} me-2"></i>
                  {{ translatePaymentMethod(fee.paymentMethod) }}
                </span>
                <small *ngIf="fee.referenceNumber" class="text-muted d-block">
                  {{ 'STATIC_FEES_PAGE.REF' | translate }}: {{ fee.referenceNumber }}
                </small>
              </td>
              <td>
                <span [class]="getStatusClass(fee.status)">{{ translateStatus(fee.status) }}</span>
              </td>
              <td>
                <div class="d-flex gap-1">
                  <button type="button" class="btn btn-sm btn-view" (click)="viewDetail(fee)" [title]="'STATIC_FEES_PAGE.VIEW_DETAILS' | translate">
                    <i class="bi bi-eye"></i>
                  </button>
                  <button *ngIf="fee.status === 'Pending' && canEdit()" type="button" class="btn btn-sm btn-active" (click)="openPaymentModal(fee)" [title]="'STATIC_FEES_PAGE.MARK_AS_PAID' | translate">
                    <i class="bi bi-check-lg"></i>
                  </button>
                  <button *ngIf="fee.status === 'Paid' && canEdit()" type="button" class="btn btn-sm btn-warning-custom" (click)="markAsPending(fee)" [title]="'STATIC_FEES_PAGE.MARK_AS_PENDING' | translate">
                    <i class="bi bi-arrow-counterclockwise"></i>
                  </button>
                  <button *ngIf="canDelete()" type="button" class="btn btn-sm btn-remove" (click)="deleteFee(fee)" [title]="'STATIC_FEES_PAGE.DELETE' | translate">
                    <i class="bi bi-trash3"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Load More -->
    <div *ngIf="hasMoreFees()" class="text-center d-flex justify-content-center mt-3">
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreFees()">
        <i class="bi bi-plus-circle me-2"></i>{{ 'STATIC_FEES_PAGE.LOAD_MORE' | translate }}
      </button>
    </div>
  </div>
</div>

<!-- Bulk Monthly Fee Modal -->
<div class="modal fade" [class.show]="showBulkFeeModal" [style.display]="showBulkFeeModal ? 'block' : 'none'" *ngIf="showBulkFeeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="bi bi-calendar-plus me-2"></i>{{ 'STATIC_FEES_PAGE.CREATE_MONTHLY_FEES' | translate }}
        </h5>
        <button type="button" class="btn-close" (click)="showBulkFeeModal = false"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-info">
          <i class="bi bi-info-circle me-2"></i>
          {{ 'STATIC_FEES_PAGE.BULK_FEE_INFO' | translate }}
        </div>
        <form>
          <div class="mb-3">
            <label class="form-label">{{ 'STATIC_FEES_PAGE.FEE_TITLE' | translate }} <span class="text-danger">*</span></label>
            <input type="text" class="form-control" [(ngModel)]="bulkFee.title" name="title" required>
          </div>
          <div class="mb-3">
            <label class="form-label">{{ 'STATIC_FEES_PAGE.AMOUNT' | translate }} <span class="text-danger">*</span></label>
            <div class="input-group">
              <span class="input-group-text">$</span>
              <input type="number" class="form-control" [(ngModel)]="bulkFee.amount" name="amount" step="0.01" min="0" required>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">{{ 'STATIC_FEES_PAGE.FEE_DATE' | translate }} <span class="text-danger">*</span></label>
              <input type="date" class="form-control" [(ngModel)]="bulkFee.feeDate" name="feeDate" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">{{ 'STATIC_FEES_PAGE.CATEGORY' | translate }}</label>
              <input type="text" class="form-control" [(ngModel)]="bulkFee.category" name="category">
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">{{ 'STATIC_FEES_PAGE.PAYMENT_METHOD' | translate }}</label>
            <select class="form-select" [(ngModel)]="bulkFee.paymentMethod" name="paymentMethod">
              <option value="Cash">{{ 'STATIC_FEES_PAGE.METHOD_CASH' | translate }}</option>
              <option value="Check">{{ 'STATIC_FEES_PAGE.METHOD_CHECK' | translate }}</option>
              <option value="BankTransfer">{{ 'STATIC_FEES_PAGE.METHOD_BANK_TRANSFER' | translate }}</option>
              <option value="Other">{{ 'STATIC_FEES_PAGE.METHOD_OTHER' | translate }}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="showBulkFeeModal = false">
          {{ 'STATIC_FEES_PAGE.CANCEL' | translate }}
        </button>
        <button type="button" class="action-btn custom-btn-2 btn-add-global-2" (click)="createBulkFees()" [disabled]="bulkSubmitting || !bulkFee.title || !bulkFee.amount || !bulkFee.feeDate">
          <span *ngIf="bulkSubmitting" class="spinner-border spinner-border-sm me-2"></span>
          <i *ngIf="!bulkSubmitting" class="bi bi-check-lg me-2"></i>
          {{ bulkSubmitting ? ('STATIC_FEES_PAGE.CREATING' | translate) : ('STATIC_FEES_PAGE.CREATE_FEES' | translate) }}
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Mark as Paid Modal -->
<div class="modal fade" [class.show]="showPaymentModal" [style.display]="showPaymentModal ? 'block' : 'none'" *ngIf="showPaymentModal && selectedFee">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ 'STATIC_FEES_PAGE.MARK_FEE_PAID' | translate }}</h5>
        <button type="button" class="btn-close" (click)="showPaymentModal = false"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3 p-3 bg-light rounded">
          <strong>{{ 'STATIC_FEES_PAGE.FEE_TITLE' | translate }}:</strong> {{ selectedFee.title }}<br>
          <strong>{{ 'STATIC_FEES_PAGE.AMOUNT' | translate }}:</strong> {{ selectedFee.amount | appCurrency }}<br>
          <strong>{{ 'STATIC_FEES_PAGE.PAYMENT_METHOD' | translate }}:</strong> {{ selectedFee.paymentMethod }}
          <span *ngIf="selectedFee.referenceNumber"> ({{ 'STATIC_FEES_PAGE.REF' | translate }}: {{ selectedFee.referenceNumber }})</span>
        </div>
        <hr>
        <form>
          <div class="mb-3">
            <label class="form-label">{{ 'STATIC_FEES_PAGE.PAYMENT_DATE' | translate }}</label>
            <input type="date" class="form-control" [(ngModel)]="paymentData.paidDate" name="paidDate">
          </div>
          <div class="mb-3">
            <label class="form-label">{{ 'STATIC_FEES_PAGE.PAYMENT_NOTES' | translate }}</label>
            <textarea class="form-control" [(ngModel)]="paymentData.notes" name="notes" rows="3" [placeholder]="'STATIC_FEES_PAGE.PAYMENT_NOTES_PLACEHOLDER' | translate"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="showPaymentModal = false">{{ 'STATIC_FEES_PAGE.CANCEL' | translate }}</button>
        <button type="button" class="action-btn custom-btn-2 btn-add-global-2" (click)="markAsPaid()">
          <i class="bi bi-check-lg me-2"></i>{{ 'STATIC_FEES_PAGE.CONFIRM_PAID' | translate }}
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Backdrop -->
<div class="modal-backdrop fade show" *ngIf="showPaymentModal || showBulkFeeModal"></div>
`, styles: ["/* src/app/features/static-fees/static-fees.scss */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.badge {\n  font-size: 0.75em;\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.stat-card {\n  transition: none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card .stat-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background-color: var(--secondary-color);\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card .stat-number {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card .stat-content p {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.bg-purple {\n  background-color: #6f42c1 !important;\n  color: white;\n}\n.bg-orange {\n  background-color: #fd7e14 !important;\n  color: white;\n}\n.bg-teal {\n  background-color: #20c997 !important;\n  color: white;\n}\n.bg-indigo {\n  background-color: #6610f2 !important;\n  color: white;\n}\n.btn-warning-custom {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n  color: #856404;\n}\n.btn-warning-custom:hover {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.btn-view {\n  background-color: #e7f1ff;\n  border-color: #e7f1ff;\n  color: #fff;\n}\n.btn-view:hover {\n  background-color: #0d6efd;\n  color: white;\n}\n.btn-edit {\n  background-color: #fff3cd;\n  border-color: #fff3cd;\n  color: #856404;\n}\n.btn-edit:hover {\n  background-color: #ffc107;\n  color: #000;\n}\n.btn-active {\n  background-color: #d1e7dd;\n  border-color: #d1e7dd;\n  color: #0f5132;\n}\n.btn-active:hover {\n  background-color: #198754;\n  color: white;\n}\n.btn-remove {\n  background-color: #f8d7da;\n  border-color: #f8d7da;\n  color: #842029;\n}\n.btn-remove:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.title-filter {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #333;\n}\n.search-box {\n  position: relative;\n}\n.search-box .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n}\n.search-box .search-input {\n  padding-left: 38px;\n  border-radius: 8px;\n  min-width: 200px;\n}\n.filter-select {\n  min-width: 150px;\n}\n.custom-table .table th {\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  padding: 12px 8px;\n}\n.custom-table .table td {\n  vertical-align: middle;\n  padding: 12px 8px;\n}\n.custom-table .table tr:hover {\n  background-color: #f8f9fa;\n}\n.bg-success-2 {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.bg-warning-2 {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.modal-header {\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.modal-header .modal-title {\n  font-weight: 600;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.date-filter-group .date-picker-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.date-filter-group .date-picker-wrapper .date-icon {\n  position: absolute;\n  left: 10px;\n  color: #6c757d;\n  pointer-events: none;\n  z-index: 1;\n}\n.date-filter-group .date-picker-wrapper .date-input {\n  padding-left: 32px;\n  padding-right: 28px;\n  border-radius: 8px;\n  min-width: 160px;\n  font-size: 14px;\n}\n.date-filter-group .date-picker-wrapper .date-clear-btn {\n  position: absolute;\n  right: 6px;\n  background: none;\n  border: none;\n  padding: 0;\n  line-height: 1;\n  color: #6c757d;\n  cursor: pointer;\n  font-size: 16px;\n}\n.date-filter-group .date-picker-wrapper .date-clear-btn:hover {\n  color: #dc3545;\n}\n.date-filter-group .form-check-label {\n  font-size: 13px;\n  color: #495057;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .table-responsive {\n    font-size: 0.875rem;\n  }\n  .card-body {\n    padding: 1rem;\n  }\n  .stat-card .stat-number {\n    font-size: 1.2rem;\n  }\n  .filter-select {\n    min-width: 120px;\n  }\n  .search-box .search-input {\n    min-width: 150px;\n  }\n}\n@media (max-width: 576px) {\n  .stat-card .stat-number {\n    font-size: 1rem;\n  }\n  .d-flex.gap-2 {\n    gap: 0.5rem !important;\n  }\n  .stat-icon-wrapper {\n    width: 30px !important;\n    height: 30px !important;\n  }\n  .stat-icon-wrapper i {\n    font-size: 14px !important;\n    padding: 10px !important;\n  }\n}\n/*# sourceMappingURL=static-fees.css.map */\n"] }]
  }], () => [{ type: Router }, { type: StaticFeesService }, { type: TranslateService }, { type: PageTitleService }, { type: PermissionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaticFeesComponent, { className: "StaticFeesComponent", filePath: "src/app/features/static-fees/static-fees.ts", lineNumber: 27 });
})();
export {
  StaticFeesComponent
};
//# sourceMappingURL=chunk-KEBA32FX.js.map
