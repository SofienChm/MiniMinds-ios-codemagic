import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  PermissionService
} from "./chunk-3MPWTHNE.js";
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
  FeeService
} from "./chunk-4QI4UUMP.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  Location,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/fee/fee.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function FeeComponent_div_0_app_parent_child_header_simple_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parent-child-header-simple", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FEES_PAGE.TITLE"));
  }
}
function FeeComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 20)(6, "div", 21);
    \u0275\u0275element(7, "i", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "h6", 24);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h4", 25);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "small", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 19)(22, "div", 20)(23, "div", 27);
    \u0275\u0275element(24, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "h6", 24);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h4", 25);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small", 26);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "div", 16)(36, "div", 17)(37, "div", 18)(38, "div", 19)(39, "div", 20)(40, "div", 29);
    \u0275\u0275element(41, "i", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 23)(43, "h6", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h4", 25);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "small", 26);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(52, "div", 16)(53, "div", 17)(54, "div", 18)(55, "div", 19)(56, "div", 20)(57, "div", 31);
    \u0275\u0275element(58, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 23)(60, "h6", 24);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h4", 25);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "small", 26);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "FEES_PAGE.TOTAL_FEES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, ctx_r0.summary.totalAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.summary.totalFees, " ", \u0275\u0275pipeBind1(17, 20, "FEES_PAGE.FEES"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 22, "FEES_PAGE.PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 24, ctx_r0.summary.paidAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.summary.paidFees, " ", \u0275\u0275pipeBind1(34, 26, "FEES_PAGE.FEES"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 28, "FEES_PAGE.PENDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 30, ctx_r0.summary.pendingAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.summary.pendingFees, " ", \u0275\u0275pipeBind1(51, 32, "FEES_PAGE.FEES"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 34, "FEES_PAGE.OVERDUE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 36, ctx_r0.summary.overdueAmount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.summary.overdueFees, " ", \u0275\u0275pipeBind1(68, 38, "FEES_PAGE.FEES"));
  }
}
function FeeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, FeeComponent_div_0_app_parent_child_header_simple_1_Template, 2, 3, "app-parent-child-header-simple", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12);
    \u0275\u0275template(4, FeeComponent_div_0_div_4_Template, 69, 40, "div", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isParent);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.summary);
  }
}
function FeeComponent_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 4, "FEES_PAGE.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 6, "FEES_PAGE.SUBTITLE"))("breadcrumbs", ctx_r0.breadcrumbs)("actions", ctx_r0.titleActions);
  }
}
function FeeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "div", 38)(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 41);
    \u0275\u0275element(12, "i", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 43)(14, "div", 36)(15, "div", 37)(16, "div", 38)(17, "p", 39);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h5", 40);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 41);
    \u0275\u0275element(24, "i", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 45)(26, "div", 36)(27, "div", 37)(28, "div", 38)(29, "p", 39);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h5", 40);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 41);
    \u0275\u0275element(36, "i", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 47)(38, "div", 36)(39, "div", 37)(40, "div", 38)(41, "p", 39);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "h5", 40);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 41);
    \u0275\u0275element(48, "i", 48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "FEES_PAGE.TOTAL_FEES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, ctx_r0.summary.totalAmount));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "FEES_PAGE.PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 14, ctx_r0.summary.paidAmount));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 16, "FEES_PAGE.PENDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 18, ctx_r0.summary.pendingAmount));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 20, "FEES_PAGE.OVERDUE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 22, ctx_r0.summary.overdueAmount));
  }
}
function FeeComponent_div_4_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r3.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function FeeComponent_div_4_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span", 66);
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
function FeeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "h4", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "div", 52);
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275elementStart(7, "input", 54);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_4_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ng-select", 55);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_4_Template_ng_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterStatus, $event) || (ctx_r0.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, FeeComponent_div_4_ng_template_11_Template, 4, 4, "ng-template", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-select", 55);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_4_Template_ng_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filterChild, $event) || (ctx_r0.filterChild = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, FeeComponent_div_4_ng_template_14_Template, 4, 4, "ng-template", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 57)(16, "button", 58);
    \u0275\u0275listener("click", function FeeComponent_div_4_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleExportDropdown());
    });
    \u0275\u0275element(17, "i", 59);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 60)(21, "li")(22, "button", 61);
    \u0275\u0275listener("click", function FeeComponent_div_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportAsPDF());
    });
    \u0275\u0275element(23, "i", 62);
    \u0275\u0275text(24, "PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "li")(26, "button", 61);
    \u0275\u0275listener("click", function FeeComponent_div_4_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportAsExcel());
    });
    \u0275\u0275element(27, "i", 63);
    \u0275\u0275text(28, "Excel");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "FEES_PAGE.TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 18, "FEES_PAGE.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterStatus);
    \u0275\u0275property("items", ctx_r0.statusOptions)("placeholder", \u0275\u0275pipeBind1(10, 20, "FEES_PAGE.FILTER_BY_STATUS"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filterChild);
    \u0275\u0275property("items", ctx_r0.childOptions)("placeholder", \u0275\u0275pipeBind1(13, 22, "FEES_PAGE.FILTER_BY_CHILD"))("clearable", false)("searchable", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 24, "FEES_PAGE.EXPORT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("show", ctx_r0.showExportDropdown);
  }
}
function FeeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "FEES_PAGE.LOADING"));
  }
}
function FeeComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "h4", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "FEES_PAGE.NO_FEES_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "FEES_PAGE.NO_FEES_MESSAGE"));
  }
}
function FeeComponent_div_6_div_3_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 81);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 82);
    \u0275\u0275listener("click", function FeeComponent_div_6_div_3_tr_20_Template_button_click_16_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      return \u0275\u0275resetView(item_r6.navigate());
    });
    \u0275\u0275element(17, "i", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 7, item_r6.date, "mediumDate", "", ctx_r0.currentLocale));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translateType(item_r6.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, item_r6.amount));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(item_r6.statusClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translateStatus(item_r6.status));
  }
}
function FeeComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "table", 78)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, FeeComponent_div_6_div_3_tr_20_Template, 18, 14, "tr", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "FEES_PAGE.DUE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "FEES_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "FEES_PAGE.AMOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "FEES_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "FEES_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.combinedFees);
  }
}
function FeeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 18);
    \u0275\u0275template(2, FeeComponent_div_6_div_2_Template, 8, 6, "div", 71)(3, FeeComponent_div_6_div_3_Template, 21, 16, "div", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.combinedFees.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.combinedFees.length > 0);
  }
}
function FeeComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "h4", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "FEES_PAGE.NO_FEES_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fees.length === 0 ? \u0275\u0275pipeBind1(7, 4, "FEES_PAGE.NO_FEES_MESSAGE") : \u0275\u0275pipeBind1(8, 6, "FEES_PAGE.ADJUST_FILTERS"));
  }
}
function FeeComponent_div_7_div_3_tr_26_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 93);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", fee_r8.daysOverdue, " ", \u0275\u0275pipeBind1(2, 2, "FEES_PAGE.DAYS_OVERDUE"), " ");
  }
}
function FeeComponent_div_7_div_3_tr_26_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "FEES_PAGE.PAID_DATE"), ": ", \u0275\u0275pipeBind4(3, 4, fee_r8.paidDate, "shortDate", "", ctx_r0.currentLocale), " ");
  }
}
function FeeComponent_div_7_div_3_tr_26_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FeeComponent_div_7_div_3_tr_26_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const fee_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.navigateToEdit(fee_r8.id));
    });
    \u0275\u0275element(2, "i", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FEES_PAGE.EDIT_FEE"));
  }
}
function FeeComponent_div_7_div_3_tr_26_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FeeComponent_div_7_div_3_tr_26_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const fee_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPaymentModal(fee_r8));
    });
    \u0275\u0275element(2, "i", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FEES_PAGE.MARK_AS_PAID"));
  }
}
function FeeComponent_div_7_div_3_tr_26_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FeeComponent_div_7_div_3_tr_26_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const fee_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteFee(fee_r8));
    });
    \u0275\u0275element(2, "i", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FEES_PAGE.DELETE_FEE"));
  }
}
function FeeComponent_div_7_div_3_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FeeComponent_div_7_div_3_tr_26_small_13_Template, 3, 4, "small", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, FeeComponent_div_7_div_3_tr_26_div_17_Template, 4, 9, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 88)(23, "button", 89);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function FeeComponent_div_7_div_3_tr_26_Template_button_click_23_listener() {
      const fee_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.navigateToDetail(fee_r8.id));
    });
    \u0275\u0275element(25, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, FeeComponent_div_7_div_3_tr_26_button_26_Template, 3, 3, "button", 90)(27, FeeComponent_div_7_div_3_tr_26_button_27_Template, 3, 3, "button", 91)(28, FeeComponent_div_7_div_3_tr_26_button_28_Template, 3, 3, "button", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fee_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fee_r8.childName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", fee_r8.parentName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, fee_r8.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 18, fee_r8.dueDate, "mediumDate", "", ctx_r0.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", fee_r8.daysOverdue && fee_r8.daysOverdue > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getStatusClass(fee_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translateStatus(fee_r8.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r8.paidDate);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getFeeTypeClass(fee_r8.feeType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translateFeeType(fee_r8.feeType));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 23, "FEES_PAGE.VIEW_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", fee_r8.status !== "paid" && ctx_r0.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canDelete());
  }
}
function FeeComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "table", 78)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(26, FeeComponent_div_7_div_3_tr_26_Template, 29, 25, "tr", 79);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "FEES_PAGE.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "FEES_PAGE.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "FEES_PAGE.AMOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "FEES_PAGE.DUE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "FEES_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "FEES_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "FEES_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.filteredFees);
  }
}
function FeeComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "button", 102);
    \u0275\u0275listener("click", function FeeComponent_div_7_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadMoreFees());
    });
    \u0275\u0275element(2, "i", 103);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "FEES_PAGE.LOAD_MORE"), " ");
  }
}
function FeeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 18);
    \u0275\u0275template(2, FeeComponent_div_7_div_2_Template, 9, 8, "div", 71)(3, FeeComponent_div_7_div_3_Template, 27, 22, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FeeComponent_div_7_div_4_Template, 5, 3, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.filteredFees.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredFees.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasMoreFees());
  }
}
function FeeComponent_div_8_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r14 = ctx.$implicit;
    \u0275\u0275property("value", child_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", child_r14.firstName, " ", child_r14.lastName);
  }
}
function FeeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "div", 107)(4, "h5", 108);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function FeeComponent_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddFeeModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 110)(9, "form")(10, "div", 111)(11, "label", 112);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 113);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.childId, $event) || (ctx_r0.newFee.childId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 114);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FeeComponent_div_8_option_18_Template, 2, 3, "option", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 111)(20, "label", 112);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.amount, $event) || (ctx_r0.newFee.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 111)(25, "label", 112);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.description, $event) || (ctx_r0.newFee.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 111)(30, "label", 112);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.dueDate, $event) || (ctx_r0.newFee.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 111)(35, "label", 112);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "select", 119);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.feeType, $event) || (ctx_r0.newFee.feeType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(39, "option", 120);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 121);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 122);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 111)(49, "label", 112);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 123);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_8_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newFee.notes, $event) || (ctx_r0.newFee.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 124)(54, "button", 125);
    \u0275\u0275listener("click", function FeeComponent_div_8_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddFeeModal = false);
    });
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 126);
    \u0275\u0275listener("click", function FeeComponent_div_8_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createFee());
    });
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r0.showAddFeeModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r0.showAddFeeModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 24, "FEES_PAGE.ADD_NEW_FEE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 26, "FEES_PAGE.CHILD"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.childId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 28, "FEES_PAGE.SELECT_CHILD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.children);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 30, "FEES_PAGE.AMOUNT"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 32, "FEES_PAGE.DESCRIPTION"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 34, "FEES_PAGE.DUE_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.dueDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 36, "FEES_PAGE.FEE_TYPE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.feeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 38, "FEES_PAGE.MONTHLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 40, "FEES_PAGE.ONE_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 42, "FEES_PAGE.LATE_FEE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 44, "FEES_PAGE.NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newFee.notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 46, "FEES_PAGE.CANCEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 48, "FEES_PAGE.ADD_FEE"));
  }
}
function FeeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "div", 107)(4, "h5", 108);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function FeeComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showBulkFeeModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 110)(9, "div", 128);
    \u0275\u0275element(10, "i", 129);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "form")(15, "div", 111)(16, "label", 112);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_9_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bulkFee.amount, $event) || (ctx_r0.bulkFee.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 111)(21, "label", 112);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_9_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bulkFee.description, $event) || (ctx_r0.bulkFee.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 111)(26, "label", 112);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_9_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.bulkFee.dueDate, $event) || (ctx_r0.bulkFee.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 124)(31, "button", 130);
    \u0275\u0275listener("click", function FeeComponent_div_9_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showBulkFeeModal = false);
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 131);
    \u0275\u0275listener("click", function FeeComponent_div_9_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createBulkFees());
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r0.showBulkFeeModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r0.showBulkFeeModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "FEES_PAGE.CREATE_MONTHLY_FEES"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(12, 18, "FEES_PAGE.BULK_FEE_INFO"), " ", ctx_r0.children.length, " ", \u0275\u0275pipeBind1(13, 20, "FEES_PAGE.CHILDREN"), ". ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 22, "FEES_PAGE.AMOUNT_PER_CHILD"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bulkFee.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 24, "FEES_PAGE.DESCRIPTION"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bulkFee.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 26, "FEES_PAGE.DUE_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bulkFee.dueDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 28, "FEES_PAGE.CANCEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 30, "FEES_PAGE.CREATE_FEES"));
  }
}
function FeeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "div", 107)(4, "h5", 108);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function FeeComponent_div_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPaymentModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 110)(9, "div", 111)(10, "strong");
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
    \u0275\u0275element(19, "br");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "appCurrency");
    \u0275\u0275element(25, "br");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "hr");
    \u0275\u0275elementStart(31, "form")(32, "div", 111)(33, "label", 112);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 132);
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_10_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentData.paidDate, $event) || (ctx_r0.paymentData.paidDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 111)(38, "label", 112);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "textarea", 133);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FeeComponent_div_10_Template_textarea_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentData.paymentNotes, $event) || (ctx_r0.paymentData.paymentNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 124)(44, "button", 134);
    \u0275\u0275listener("click", function FeeComponent_div_10_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPaymentModal = false);
    });
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 135);
    \u0275\u0275listener("click", function FeeComponent_div_10_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.payFee());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r0.showPaymentModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r0.showPaymentModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 20, "FEES_PAGE.MARK_FEE_PAID"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 22, "FEES_PAGE.CHILD"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedFee.childName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 24, "FEES_PAGE.PARENT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedFee.parentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 26, "FEES_PAGE.AMOUNT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 28, ctx_r0.selectedFee.amount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 30, "FEES_PAGE.DESCRIPTION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedFee.description, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 32, "FEES_PAGE.PAYMENT_DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentData.paidDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 34, "FEES_PAGE.PAYMENT_NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentData.paymentNotes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 36, "FEES_PAGE.PAYMENT_NOTES_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 38, "FEES_PAGE.CANCEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 40, "FEES_PAGE.CONFIRM_PAID"));
  }
}
function FeeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 136);
  }
}
var FeeComponent = class _FeeComponent {
  router;
  feeService;
  childrenService;
  staticFeesService;
  location;
  authService;
  permissionService;
  translateService;
  pageTitleService;
  tooltipInstances = [];
  langChangeSub;
  fees = [];
  displayedFees = [];
  staticFees = [];
  children = [];
  summary = null;
  loading = false;
  showExportDropdown = false;
  showAddFeeModal = false;
  showBulkFeeModal = false;
  showPaymentModal = false;
  selectedFee = null;
  feesPerPage = 9;
  currentPage = 1;
  // Filter options
  filterStatus = "all";
  filterChild = "all";
  searchTerm = "";
  statusOptions = [];
  childOptions = [];
  // New fee form
  newFee = {
    childId: 0,
    amount: 0,
    description: "",
    dueDate: "",
    feeType: "monthly"
  };
  // Bulk fee form
  bulkFee = {
    amount: 0,
    description: "",
    dueDate: ""
  };
  // Payment form
  paymentData = {
    paidDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    paymentNotes: ""
  };
  breadcrumbs = [];
  titleActions = [];
  constructor(router, feeService, childrenService, staticFeesService, location, authService, permissionService, translateService, pageTitleService) {
    this.router = router;
    this.feeService = feeService;
    this.childrenService = childrenService;
    this.staticFeesService = staticFeesService;
    this.location = location;
    this.authService = authService;
    this.permissionService = permissionService;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    registerLocaleData(fr_default);
    registerLocaleData(it_default);
    registerLocaleData(ar_default);
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("FEES_PAGE.TITLE"));
    this.updateTranslatedContent();
    this.loadData();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("FEES_PAGE.TITLE"));
      this.updateChildOptions();
    });
  }
  ngAfterViewInit() {
    this.initTooltips();
  }
  ngOnDestroy() {
    this.disposeTooltips();
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("FEES_PAGE.DASHBOARD") },
      { label: this.translateService.instant("FEES_PAGE.FEES_LABEL") }
    ];
    this.titleActions = [
      {
        label: this.translateService.instant("FEES_PAGE.UPDATE_OVERDUE"),
        class: "custom-btn-2 btn-view-global-2",
        action: () => this.updateOverdueFees()
      },
      {
        label: this.translateService.instant("FEES_PAGE.BULK_MONTHLY_FEE"),
        class: "custom-btn-2 btn-edit-global-2",
        action: () => this.openBulkFeeModal()
      },
      {
        label: this.translateService.instant("FEES_PAGE.ADD_FEE"),
        class: "custom-btn-2 btn-add-global-2",
        action: () => this.navigateToAddFee()
      }
    ];
    this.statusOptions = [
      { value: "all", label: this.translateService.instant("FEES_PAGE.ALL_STATUS"), icon: "bi-list-ul" },
      { value: "pending", label: this.translateService.instant("FEES_PAGE.PENDING"), icon: "bi-hourglass-split" },
      { value: "paid", label: this.translateService.instant("FEES_PAGE.PAID"), icon: "bi-check-circle" },
      { value: "overdue", label: this.translateService.instant("FEES_PAGE.OVERDUE"), icon: "bi-exclamation-triangle" }
    ];
  }
  updateChildOptions() {
    this.childOptions = [
      { value: "all", label: this.translateService.instant("FEES_PAGE.ALL_CHILDREN"), icon: "bi-people" },
      ...this.children.map((child) => ({
        value: child.id.toString(),
        label: `${child.firstName} ${child.lastName}`,
        icon: "bi-person"
      }))
    ];
  }
  initTooltips() {
    setTimeout(() => {
      this.disposeTooltips();
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      this.tooltipInstances = tooltipTriggerList.map((el) => new window.bootstrap.Tooltip(el, {
        trigger: "hover"
      }));
    }, 100);
  }
  disposeTooltips() {
    this.tooltipInstances.forEach((tooltip) => tooltip?.dispose());
    this.tooltipInstances = [];
  }
  back() {
    this.location.back();
  }
  loadData() {
    this.loading = true;
    const tasks = [this.loadFees(), this.loadChildren(), this.loadSummary()];
    if (this.isParent)
      tasks.push(this.loadStaticFees());
    Promise.all(tasks).finally(() => {
      this.loading = false;
      this.initTooltips();
    });
  }
  async loadStaticFees() {
    try {
      this.staticFees = await firstValueFrom(this.staticFeesService.getMyStaticFees());
    } catch {
      this.staticFees = [];
    }
  }
  viewStaticFeeDetail(id) {
    this.router.navigate(["/static-fees", id]);
  }
  get combinedFees() {
    const normal = this.fees.map((f) => ({
      id: f.id,
      type: "Fee",
      title: f.description || f.childName || "",
      amount: f.amount,
      date: f.dueDate,
      status: f.status,
      statusClass: this.getStatusClass(f.status),
      navigate: () => this.navigateToDetail(f.id)
    }));
    const staticItems = this.staticFees.map((s) => ({
      id: s.id,
      type: "Invoice",
      title: s.title,
      amount: s.amount,
      date: s.feeDate,
      status: s.status,
      statusClass: s.status === "Paid" ? "badge bg-success-2" : "badge bg-warning-2",
      navigate: () => this.viewStaticFeeDetail(s.id)
    }));
    return [...normal, ...staticItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  loadFees() {
    return this.feeService.getFees().toPromise().then((fees) => {
      this.fees = fees || [];
    }).catch((error) => {
      console.error("Error loading fees:", error);
      this.fees = [];
    });
  }
  loadChildren() {
    return this.childrenService.loadChildren().toPromise().then((children) => {
      this.children = children || [];
      this.updateChildOptions();
    }).catch((error) => {
      console.error("Error loading children:", error);
      this.children = [];
      this.childOptions = [{ value: "all", label: this.translateService.instant("FEES_PAGE.ALL_CHILDREN"), icon: "bi-people" }];
    });
  }
  loadSummary() {
    return this.feeService.getFeesSummary().toPromise().then((summary) => {
      this.summary = summary || null;
    }).catch((error) => {
      console.error("Error loading summary:", error);
    });
  }
  get filteredFees() {
    const filtered = this.fees.filter((fee) => {
      const matchesStatus = this.filterStatus === "all" || fee.status === this.filterStatus;
      const matchesChild = this.filterChild === "all" || fee.childId.toString() === this.filterChild;
      const matchesSearch = !this.searchTerm || fee.childName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || fee.parentName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || fee.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesChild && matchesSearch;
    });
    this.updateDisplayedFees(filtered);
    return this.displayedFees;
  }
  updateDisplayedFees(filtered) {
    const endIndex = this.currentPage * this.feesPerPage;
    this.displayedFees = filtered.slice(0, endIndex);
  }
  loadMoreFees() {
    this.currentPage++;
    const _ = this.filteredFees;
  }
  hasMoreFees() {
    const filtered = this.fees.filter((fee) => {
      const matchesStatus = this.filterStatus === "all" || fee.status === this.filterStatus;
      const matchesChild = this.filterChild === "all" || fee.childId.toString() === this.filterChild;
      const matchesSearch = !this.searchTerm || fee.childName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || fee.parentName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || fee.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesChild && matchesSearch;
    });
    return this.displayedFees.length < filtered.length;
  }
  navigateToAddFee() {
    this.router.navigate(["/fees/add"]);
  }
  navigateToDetail(feeId) {
    this.router.navigate(["/fees/detail", feeId]);
  }
  navigateToEdit(feeId) {
    this.router.navigate(["/fees/edit", feeId]);
  }
  openBulkFeeModal() {
    const nextMonth = /* @__PURE__ */ new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);
    const currentLang = this.translateService.currentLang || "en";
    const monthYear = nextMonth.toLocaleDateString(currentLang, { month: "long", year: "numeric" });
    this.bulkFee = {
      amount: 0,
      description: `${this.translateService.instant("FEES_PAGE.MONTHLY_FEE")} - ${monthYear}`,
      dueDate: nextMonth.toISOString().split("T")[0]
    };
    this.showBulkFeeModal = true;
  }
  openPaymentModal(fee) {
    this.selectedFee = fee;
    this.paymentData = {
      paidDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      paymentNotes: ""
    };
    this.showPaymentModal = true;
  }
  createFee() {
    if (this.newFee.childId && this.newFee.amount && this.newFee.description && this.newFee.dueDate) {
      this.feeService.createFee(this.newFee).subscribe({
        next: () => {
          this.showAddFeeModal = false;
          this.loadData();
        },
        error: (error) => {
          console.error("Error creating fee:", error);
        }
      });
    }
  }
  createBulkFees() {
    if (this.bulkFee.amount && this.bulkFee.description && this.bulkFee.dueDate) {
      this.feeService.createMonthlyFeesForAll(this.bulkFee.amount, this.bulkFee.description, this.bulkFee.dueDate).subscribe({
        next: (result) => {
          this.showBulkFeeModal = false;
          this.loadData();
          showSuccessToast(this.translateService.instant("FEES_PAGE.SUCCESS"));
        },
        error: (error) => {
          console.error("Error creating bulk fees:", error);
          import_sweetalert2.default.fire(this.translateService.instant("FEES_PAGE.ERROR"), this.translateService.instant("FEES_PAGE.BULK_FEES_ERROR"), "error");
        }
      });
    }
  }
  payFee() {
    if (this.selectedFee) {
      this.feeService.payFee(this.selectedFee.id, {
        feeId: this.selectedFee.id,
        paidDate: this.paymentData.paidDate,
        paymentNotes: this.paymentData.paymentNotes
      }).subscribe({
        next: () => {
          this.showPaymentModal = false;
          this.loadData();
        },
        error: (error) => {
          console.error("Error paying fee:", error);
        }
      });
    }
  }
  updateOverdueFees() {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("FEES_PAGE.UPDATE_OVERDUE_TITLE"),
      text: this.translateService.instant("FEES_PAGE.UPDATE_OVERDUE_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translateService.instant("FEES_PAGE.YES_UPDATE"),
      cancelButtonText: this.translateService.instant("FEES_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.feeService.updateOverdueFees().subscribe({
          next: (result2) => {
            this.loadData();
            showSuccessToast(this.translateService.instant("FEES_PAGE.UPDATED"));
          },
          error: (error) => {
            console.error("Error updating overdue fees:", error);
            import_sweetalert2.default.fire(this.translateService.instant("FEES_PAGE.ERROR"), this.translateService.instant("FEES_PAGE.UPDATE_OVERDUE_ERROR"), "error");
          }
        });
      }
    });
  }
  deleteFee(fee) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("FEES_PAGE.DELETE_CONFIRM_TITLE"),
      text: this.translateService.instant("FEES_PAGE.DELETE_CONFIRM_TEXT", { childName: fee.childName }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translateService.instant("FEES_PAGE.YES_DELETE"),
      cancelButtonText: this.translateService.instant("FEES_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.feeService.deleteFee(fee.id).subscribe({
          next: () => {
            this.loadData();
            showSuccessToast(this.translateService.instant("FEES_PAGE.DELETED"));
          },
          error: (error) => {
            console.error("Error deleting fee:", error);
            import_sweetalert2.default.fire(this.translateService.instant("FEES_PAGE.ERROR"), this.translateService.instant("FEES_PAGE.DELETE_ERROR"), "error");
          }
        });
      }
    });
  }
  getStatusClass(status) {
    switch (status) {
      case "paid":
        return "badge bg-success-2";
      case "overdue":
        return "badge bg-danger-2";
      case "pending":
        return "badge bg-warning-2";
      default:
        return "badge bg-secondary";
    }
  }
  getFeeTypeClass(feeType) {
    switch (feeType) {
      case "monthly":
        return "badge bg-primary";
      case "one-time":
        return "badge bg-info";
      case "late-fee":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
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
      case "Paid":
        return this.translateService.instant("STATIC_FEES_PAGE.PAID");
      case "Pending":
        return this.translateService.instant("STATIC_FEES_PAGE.PENDING");
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
      case "Monthly":
        return this.translateService.instant("STATIC_FEES_PAGE.CATEGORY_TUITION");
      default:
        return feeType;
    }
  }
  translateType(type) {
    return this.translateService.instant("FEES_PAGE.TYPE_" + type.toUpperCase());
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
      case "Monthly":
        return this.translateService.instant("FEES_PAGE.MONTHLY_FEE");
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
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  exportAsPDF() {
    console.log("Exporting fees as PDF...");
    this.showExportDropdown = false;
  }
  exportAsExcel() {
    console.log("Exporting fees as Excel...");
    this.showExportDropdown = false;
  }
  get isParent() {
    return this.authService.getUserRole() === "Parent";
  }
  canEdit() {
    return this.permissionService.canEdit();
  }
  canDelete() {
    return this.permissionService.canDelete();
  }
  canView() {
    return this.permissionService.canView();
  }
  static \u0275fac = function FeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(StaticFeesService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeComponent, selectors: [["app-fee"]], decls: 12, vars: 11, consts: [["class", "parent-detailchild font-inter", 4, "ngIf"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-currency-dollar", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], ["class", "row mb-1 mb-md-4", 4, "ngIf"], ["class", "bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "parent-detailchild", "font-inter"], [3, "title", 4, "ngIf"], [1, "body", "container-fluid"], [1, "main-information"], ["class", "row mb-1 mb-md4 fee-tab g-2", 4, "ngIf"], [3, "title"], [1, "row", "mb-1", "mb-md4", "fee-tab", "g-2"], [1, "col-xl-3", "col-md-6", "col-6", "mb-1", "mb-md-3"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], [1, "bg-primary", "bg-opacity-10", "rounded-3", "p-3", "icons"], [1, "bi", "bi-currency-dollar", "text-primary", "fs-4"], [1, "flex-grow-1", "ms-3"], [1, "mb-0", "total"], [1, "mb-0", "spent"], [1, "text-muted", "number"], [1, "bg-success", "bg-opacity-10", "rounded-3", "p-3", "icons"], [1, "bi", "bi-check-circle", "text-success", "fs-4"], [1, "bg-warning", "bg-opacity-10", "rounded-3", "p-3", "icons"], [1, "bi", "bi-clock", "text-warning", "fs-4"], [1, "bg-danger", "bg-opacity-10", "rounded-3", "p-3", "icons"], [1, "bi", "bi-exclamation-triangle", "text-danger", "fs-4"], ["icon", "bi bi-currency-dollar", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "row", "mb-1", "mb-md-4"], [1, "col-xl-3", "col-md-6", "col-6", "mb-3", "fee-mobile", "first"], [1, "card", "stat-card", "shadow-sm"], [1, "card-body", "d-flex", "justify-content-between", "align-items-center", "p-3"], [1, "stat-content"], [1, "mb-0"], [1, "stat-number"], [1, "stat-icon-wrapper"], [1, "bi", "bi-currency-dollar"], [1, "col-xl-3", "col-md-6", "col-6", "mb-3", "fee-mobile", "second"], [1, "bi", "bi-check-circle"], [1, "col-xl-3", "col-md-6", "col-6", "mb-3", "fee-mobile", "third"], [1, "bi", "bi-clock", "text"], [1, "col-xl-3", "col-md-6", "col-6", "mb-3", "fee-mobile", "last"], [1, "bi", "bi-exclamation-triangle"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "placeholder", "ngModel"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "dropdown"], ["type", "button", 1, "btn", "btn-outline-secondary", "dropdown-toggle", 3, "click"], [1, "bi", "bi-download", "me-2"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "bi", "bi-file-earmark-pdf", "me-2"], [1, "bi", "bi-file-earmark-excel", "me-2"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card"], ["class", "text-center p-4", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "text-center", "p-4"], [1, "bi", "bi-currency-dollar", "fs-1", "text-muted"], [1, "mt-3"], [1, "text-muted"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [1, "badge", "bg-secondary", "ms-1", 2, "font-size", "0.65rem"], [1, "fw-bold"], ["type", "button", 1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], [1, "name-last"], ["class", "text-danger", 4, "ngIf"], ["class", "small text-muted mt-1", 4, "ngIf"], [1, "d-flex", "gap-1"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-view", 3, "click", "title"], ["type", "button", "class", "btn btn-sm btn-edit", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-active", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-remove", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 3, "title", "click", 4, "ngIf"], [1, "text-danger"], [1, "small", "text-muted", "mt-1"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-edit", 3, "click", "title"], [1, "bi", "bi-pencil-square"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-active", 3, "click", "title"], [1, "bi", "bi-check"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-remove", 3, "click", "title"], [1, "bi", "bi-trash3"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["name", "childId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "name", "amount", "step", "0.01", "min", "0", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dueDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "feeType", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "monthly"], ["value", "one-time"], ["value", "late-fee"], ["name", "notes", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], [1, "alert", "alert-info"], [1, "bi", "bi-info-circle", "me-2"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "button", 1, "custom-btn-2", "btn-add-global-2", 3, "click"], ["type", "date", "name", "paidDate", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "paymentNotes", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "modal-backdrop", "fade", "show"]], template: function FeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FeeComponent_div_0_Template, 5, 2, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, FeeComponent_app_title_page_2_Template, 3, 8, "app-title-page", 2)(3, FeeComponent_div_3_Template, 49, 24, "div", 3)(4, FeeComponent_div_4_Template, 29, 26, "div", 4)(5, FeeComponent_div_5_Template, 5, 3, "div", 5)(6, FeeComponent_div_6_Template, 4, 2, "div", 6)(7, FeeComponent_div_7_Template, 5, 3, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, FeeComponent_div_8_Template, 60, 50, "div", 7)(9, FeeComponent_div_9_Template, 37, 32, "div", 7)(10, FeeComponent_div_10_Template, 50, 42, "div", 7)(11, FeeComponent_div_11_Template, 1, 0, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.summary && !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddFeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showBulkFeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPaymentModal && ctx.selectedFee);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddFeeModal || ctx.showBulkFeeModal || ctx.showPaymentModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitlePage, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, ParentChildHeaderSimpleComponent, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.bg-opacity-10[_ngcontent-%COMP%] {\n  background-color: rgba(var(--bs-primary-rgb), 0.1) !important;\n}\n.summary-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n@media (max-width: 768px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n  .header-info {\n  margin-bottom: 30px !important;\n}\n  .header-info .name {\n  padding-bottom: 20px !important;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .fee-tab[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .fee-tab[_ngcontent-%COMP%]   .spent[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .fee-tab[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  background-color: #E0F2FE !important;\n  background: #E0F2FE !important;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4 !important;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary) !important;\n  background-color: var(--gradient-primary) !important;\n  color: white;\n}\n.stat-card[_ngcontent-%COMP%] {\n  transition: none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n@media (max-width: 576px) {\n  .fee-mobile[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .fee-mobile.first[_ngcontent-%COMP%] {\n    padding-right: 2px;\n  }\n  .fee-mobile.second[_ngcontent-%COMP%] {\n    padding-left: 2px;\n  }\n  .fee-mobile.third[_ngcontent-%COMP%] {\n    padding-right: 2px;\n  }\n  .fee-mobile.last[_ngcontent-%COMP%] {\n    padding-left: 2px;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    padding: 10px !important;\n  }\n}\n@media (max-width: 768px) {\n  .parent-detailchild[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding: 16px;\n    padding-bottom: 0 !important;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 80px auto;\n  }\n}\n/*# sourceMappingURL=fee.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeComponent, [{
    type: Component,
    args: [{ selector: "app-fee", imports: [CommonModule, TitlePage, FormsModule, NgSelectModule, ParentChildHeaderSimpleComponent, AppCurrencyPipe, TranslateModule], template: `<div *ngIf="isParent" class="parent-detailchild font-inter">\r
  <app-parent-child-header-simple *ngIf="isParent"\r
    [title]="'FEES_PAGE.TITLE' | translate"\r
  >\r
  </app-parent-child-header-simple>\r
  <div class="body container-fluid">\r
    <div class="main-information">\r
\r
      <div class="row mb-1 mb-md4 fee-tab g-2" *ngIf="summary">\r
        <div class="col-xl-3 col-md-6 col-6 mb-1 mb-md-3">\r
          <div class="card border-0 shadow-sm">\r
            <div class="card-body">\r
              <div class="d-flex align-items-center">\r
                <div class="flex-shrink-0">\r
                  <div class="bg-primary bg-opacity-10 rounded-3 p-3 icons">\r
                    <i class="bi bi-currency-dollar text-primary fs-4"></i>\r
                  </div>\r
                </div>\r
                <div class="flex-grow-1 ms-3">\r
                  <h6 class="mb-0 total">{{ 'FEES_PAGE.TOTAL_FEES' | translate }}</h6>\r
                  <h4 class="mb-0 spent">{{ summary.totalAmount | appCurrency }}</h4>\r
                  <small class="text-muted number">{{ summary.totalFees }} {{ 'FEES_PAGE.FEES' | translate }}</small>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
          <div class="col-xl-3 col-md-6 col-6 mb-1 mb-md-3">\r
            <div class="card border-0 shadow-sm">\r
              <div class="card-body">\r
                <div class="d-flex align-items-center">\r
                  <div class="flex-shrink-0">\r
                    <div class="bg-success bg-opacity-10 rounded-3 p-3 icons">\r
                      <i class="bi bi-check-circle text-success fs-4"></i>\r
                    </div>\r
                  </div>\r
                  <div class="flex-grow-1 ms-3">\r
                    <h6 class="mb-0 total">{{ 'FEES_PAGE.PAID' | translate }}</h6>\r
                    <h4 class="mb-0 spent">{{ summary.paidAmount | appCurrency }}</h4>\r
                    <small class="text-muted number">{{ summary.paidFees }} {{ 'FEES_PAGE.FEES' | translate }}</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-xl-3 col-md-6 col-6 mb-1 mb-md-3">\r
            <div class="card border-0 shadow-sm">\r
              <div class="card-body">\r
                <div class="d-flex align-items-center">\r
                  <div class="flex-shrink-0">\r
                    <div class="bg-warning bg-opacity-10 rounded-3 p-3 icons">\r
                      <i class="bi bi-clock text-warning fs-4"></i>\r
                    </div>\r
                  </div>\r
                  <div class="flex-grow-1 ms-3">\r
                    <h6 class="mb-0 total">{{ 'FEES_PAGE.PENDING' | translate }}</h6>\r
                    <h4 class="mb-0 spent">{{ summary.pendingAmount | appCurrency }}</h4>\r
                    <small class="text-muted number">{{ summary.pendingFees }} {{ 'FEES_PAGE.FEES' | translate }}</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-xl-3 col-md-6 col-6 mb-1 mb-md-3">\r
            <div class="card border-0 shadow-sm">\r
              <div class="card-body">\r
                <div class="d-flex align-items-center">\r
                  <div class="flex-shrink-0">\r
                    <div class="bg-danger bg-opacity-10 rounded-3 p-3 icons">\r
                      <i class="bi bi-exclamation-triangle text-danger fs-4"></i>\r
                    </div>\r
                  </div>\r
                  <div class="flex-grow-1 ms-3">\r
                    <h6 class="mb-0 total">{{ 'FEES_PAGE.OVERDUE' | translate }}</h6>\r
                    <h4 class="mb-0 spent">{{ summary.overdueAmount | appCurrency }}</h4>\r
                    <small class="text-muted number">{{ summary.overdueFees }} {{ 'FEES_PAGE.FEES' | translate }}</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="container-fluid mt-4">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="'FEES_PAGE.TITLE' | translate"\r
    [subtitle]="'FEES_PAGE.SUBTITLE' | translate"\r
    icon="bi bi-currency-dollar"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Summary Cards -->\r
  <div class="row mb-1 mb-md-4" *ngIf="summary && !isParent">\r
    <div class="col-xl-3 col-md-6 col-6 mb-3 fee-mobile first">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex justify-content-between align-items-center p-3">\r
          <div class="stat-content">\r
            <p class="mb-0">{{ 'FEES_PAGE.TOTAL_FEES' | translate }}</p>\r
            <h5 class="stat-number">{{ summary.totalAmount | appCurrency }}</h5>\r
          </div>\r
          <div class="stat-icon-wrapper">\r
            <i class="bi bi-currency-dollar"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-xl-3 col-md-6 col-6 mb-3 fee-mobile second">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex justify-content-between align-items-center p-3">\r
          <div class="stat-content">\r
            <p class="mb-0">{{ 'FEES_PAGE.PAID' | translate }}</p>\r
            <h5 class="stat-number">{{ summary.paidAmount | appCurrency }}</h5>\r
          </div>\r
          <div class="stat-icon-wrapper">\r
            <i class="bi bi-check-circle"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-xl-3 col-md-6 col-6 mb-3 fee-mobile third">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex justify-content-between align-items-center p-3">\r
          <div class="stat-content">\r
            <p class="mb-0">{{ 'FEES_PAGE.PENDING' | translate }}</p>\r
            <h5 class="stat-number">{{ summary.pendingAmount | appCurrency }}</h5>\r
          </div>\r
          <div class="stat-icon-wrapper">\r
            <i class="bi bi-clock text"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-xl-3 col-md-6 col-6 mb-3 fee-mobile last">\r
      <div class="card stat-card shadow-sm">\r
        <div class="card-body d-flex justify-content-between align-items-center p-3">\r
          <div class="stat-content">\r
            <p class="mb-0">{{ 'FEES_PAGE.OVERDUE' | translate }}</p>\r
            <h5 class="stat-number">{{ summary.overdueAmount | appCurrency }}</h5>\r
          </div>\r
          <div class="stat-icon-wrapper">\r
            <i class="bi bi-exclamation-triangle"></i>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1" *ngIf="!isParent">\r
    <h4 class="title-filter">{{ 'FEES_PAGE.TITLE' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search Input -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input\r
          type="text"\r
          class="form-control search-input"\r
          [placeholder]="'FEES_PAGE.SEARCH_PLACEHOLDER' | translate"\r
          [(ngModel)]="searchTerm">\r
      </div>\r
\r
      <!-- Status Filter -->\r
      <ng-select\r
        class="filter-select"\r
        [(ngModel)]="filterStatus"\r
        [items]="statusOptions"\r
        bindLabel="label"\r
        bindValue="value"\r
        [placeholder]="'FEES_PAGE.FILTER_BY_STATUS' | translate"\r
        [clearable]="false"\r
        [searchable]="false">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- Child Filter -->\r
      <ng-select\r
        class="filter-select"\r
        [(ngModel)]="filterChild"\r
        [items]="childOptions"\r
        bindLabel="label"\r
        bindValue="value"\r
        [placeholder]="'FEES_PAGE.FILTER_BY_CHILD' | translate"\r
        [clearable]="false"\r
        [searchable]="true">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- Export Dropdown -->\r
      <div class="dropdown">\r
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" (click)="toggleExportDropdown()">\r
          <i class="bi bi-download me-2"></i>{{ 'FEES_PAGE.EXPORT' | translate }}\r
        </button>\r
        <ul class="dropdown-menu" [class.show]="showExportDropdown">\r
          <li><button class="dropdown-item" (click)="exportAsPDF()"><i class="bi bi-file-earmark-pdf me-2"></i>PDF</button></li>\r
          <li><button class="dropdown-item" (click)="exportAsExcel()"><i class="bi bi-file-earmark-excel me-2"></i>Excel</button></li>\r
        </ul>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'FEES_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Combined Fees Table (Parent view) -->\r
  <div class="card" *ngIf="!loading && isParent">\r
    <div class="card-body">\r
      <div *ngIf="combinedFees.length === 0" class="text-center p-4">\r
        <i class="bi bi-currency-dollar fs-1 text-muted"></i>\r
        <h4 class="mt-3">{{ 'FEES_PAGE.NO_FEES_FOUND' | translate }}</h4>\r
        <p class="text-muted">{{ 'FEES_PAGE.NO_FEES_MESSAGE' | translate }}</p>\r
      </div>\r
      <div *ngIf="combinedFees.length > 0" class="table-responsive custom-table">\r
        <table class="table table-hover">\r
          <thead>\r
            <tr>\r
              <th>{{ 'FEES_PAGE.DUE_DATE' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.DESCRIPTION' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.AMOUNT' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.STATUS' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let item of combinedFees">\r
              <td>{{ item.date | date:'mediumDate':'':currentLocale }}</td>\r
              <td>\r
                {{ item.title }}\r
                <span class="badge bg-secondary ms-1" style="font-size:0.65rem;">{{ translateType(item.type) }}</span>\r
              </td>\r
              <td><span class="fw-bold">{{ item.amount | appCurrency }}</span></td>\r
              <td>\r
                <span [class]="item.statusClass">{{ translateStatus(item.status) }}</span>\r
              </td>\r
              <td>\r
                <button type="button" class="btn btn-sm btn-view" (click)="item.navigate()">\r
                  <i class="bi bi-eye"></i>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Fees Table (Admin/Teacher view) -->\r
  <div class="card" *ngIf="!loading && !isParent">\r
    <div class="card-body">\r
      <div *ngIf="filteredFees.length === 0" class="text-center p-4">\r
        <i class="bi bi-currency-dollar fs-1 text-muted"></i>\r
        <h4 class="mt-3">{{ 'FEES_PAGE.NO_FEES_FOUND' | translate }}</h4>\r
        <p class="text-muted">{{ fees.length === 0 ? ('FEES_PAGE.NO_FEES_MESSAGE' | translate) : ('FEES_PAGE.ADJUST_FILTERS' | translate) }}</p>\r
      </div>\r
\r
      <div *ngIf="filteredFees.length > 0" class="table-responsive custom-table">\r
        <table class="table table-hover">\r
          <thead>\r
            <tr>\r
              <th>{{ 'FEES_PAGE.CHILD' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.PARENT' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.AMOUNT' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.DUE_DATE' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.STATUS' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.TYPE' | translate }}</th>\r
              <th>{{ 'FEES_PAGE.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let fee of filteredFees">\r
              <td class="name-last">\r
                {{ fee.childName }}\r
              </td>\r
              <td>\r
                {{ fee.parentName }}\r
              </td>\r
              <td>\r
                <span class="fw-bold">{{ fee.amount | appCurrency }}</span>\r
              </td>\r
              <td>\r
                <div>{{ fee.dueDate | date:'mediumDate':'':currentLocale }}</div>\r
                <small class="text-danger" *ngIf="fee.daysOverdue && fee.daysOverdue > 0">\r
                  {{ fee.daysOverdue }} {{ 'FEES_PAGE.DAYS_OVERDUE' | translate }}\r
                </small>\r
              </td>\r
              <td>\r
                <span [class]="getStatusClass(fee.status)">{{ translateStatus(fee.status) }}</span>\r
                <div *ngIf="fee.paidDate" class="small text-muted mt-1">\r
                  {{ 'FEES_PAGE.PAID_DATE' | translate }}: {{ fee.paidDate | date:'shortDate':'':currentLocale }}\r
                </div>\r
              </td>\r
              <td>\r
                <span [class]="getFeeTypeClass(fee.feeType)">{{ translateFeeType(fee.feeType) }}</span>\r
              </td>\r
              <td>\r
\r
                <div class="d-flex gap-1" >\r
                  <button type="button" class="btn btn-sm btn-view" (click)="navigateToDetail(fee.id!)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" [title]="'FEES_PAGE.VIEW_DETAILS' | translate">\r
                    <i class="bi bi-eye"></i>\r
                  </button>\r
                  <button *ngIf="canEdit()" type="button" class="btn btn-sm btn-edit" (click)="navigateToEdit(fee.id!)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" [title]="'FEES_PAGE.EDIT_FEE' | translate">\r
                    <i class="bi bi-pencil-square"></i>\r
                  </button>\r
                  <button *ngIf="fee.status !== 'paid' && canEdit()" type="button" class="btn btn-sm btn-active" (click)="openPaymentModal(fee)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" [title]="'FEES_PAGE.MARK_AS_PAID' | translate">\r
                    <i class="bi bi-check"></i>\r
                  </button>\r
                  <button *ngIf="canDelete()" type="button" class="btn btn-sm btn-remove" (click)="deleteFee(fee)" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" [title]="'FEES_PAGE.DELETE_FEE' | translate">\r
                    <i class="bi bi-trash3"></i>\r
                  </button>\r
                </div>\r
\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- Load More Button -->\r
    <div *ngIf="hasMoreFees()" class="text-center d-flex justify-content-center mt-3">\r
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreFees()">\r
        <i class="bi bi-plus-circle me-2"></i>{{ 'FEES_PAGE.LOAD_MORE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add Fee Modal -->\r
<div class="modal fade" [class.show]="showAddFeeModal" [style.display]="showAddFeeModal ? 'block' : 'none'" *ngIf="showAddFeeModal">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'FEES_PAGE.ADD_NEW_FEE' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="showAddFeeModal = false"></button>\r
      </div>\r
      <div class="modal-body">\r
        <form>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.CHILD' | translate }} *</label>\r
            <select class="form-select" [(ngModel)]="newFee.childId" name="childId" required>\r
              <option value="0">{{ 'FEES_PAGE.SELECT_CHILD' | translate }}</option>\r
              <option *ngFor="let child of children" [value]="child.id">{{ child.firstName }} {{ child.lastName }}</option>\r
            </select>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.AMOUNT' | translate }} *</label>\r
            <input type="number" class="form-control" [(ngModel)]="newFee.amount" name="amount" step="0.01" min="0" required>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.DESCRIPTION' | translate }} *</label>\r
            <input type="text" class="form-control" [(ngModel)]="newFee.description" name="description" required>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.DUE_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="newFee.dueDate" name="dueDate" required>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.FEE_TYPE' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="newFee.feeType" name="feeType">\r
              <option value="monthly">{{ 'FEES_PAGE.MONTHLY' | translate }}</option>\r
              <option value="one-time">{{ 'FEES_PAGE.ONE_TIME' | translate }}</option>\r
              <option value="late-fee">{{ 'FEES_PAGE.LATE_FEE' | translate }}</option>\r
            </select>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.NOTES' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="newFee.notes" name="notes" rows="3"></textarea>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="showAddFeeModal = false">{{ 'FEES_PAGE.CANCEL' | translate }}</button>\r
        <button type="button" class="btn btn-primary" (click)="createFee()">{{ 'FEES_PAGE.ADD_FEE' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Bulk Monthly Fee Modal -->\r
<div class="modal fade" [class.show]="showBulkFeeModal" [style.display]="showBulkFeeModal ? 'block' : 'none'" *ngIf="showBulkFeeModal">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'FEES_PAGE.CREATE_MONTHLY_FEES' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="showBulkFeeModal = false"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="alert alert-info">\r
          <i class="bi bi-info-circle me-2"></i>\r
          {{ 'FEES_PAGE.BULK_FEE_INFO' | translate }} {{ children.length }} {{ 'FEES_PAGE.CHILDREN' | translate }}.\r
        </div>\r
        <form>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.AMOUNT_PER_CHILD' | translate }} *</label>\r
            <input type="number" class="form-control" [(ngModel)]="bulkFee.amount" name="amount" step="0.01" min="0" required>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.DESCRIPTION' | translate }} *</label>\r
            <input type="text" class="form-control" [(ngModel)]="bulkFee.description" name="description" required>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.DUE_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="bulkFee.dueDate" name="dueDate" required>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="custom-btn-2 btn-cancel-2" (click)="showBulkFeeModal = false">{{ 'FEES_PAGE.CANCEL' | translate }}</button>\r
        <button type="button" class="custom-btn-2 btn-add-global-2" (click)="createBulkFees()">{{ 'FEES_PAGE.CREATE_FEES' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Payment Modal -->\r
<div class="modal fade" [class.show]="showPaymentModal" [style.display]="showPaymentModal ? 'block' : 'none'" *ngIf="showPaymentModal && selectedFee">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'FEES_PAGE.MARK_FEE_PAID' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="showPaymentModal = false"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="mb-3">\r
          <strong>{{ 'FEES_PAGE.CHILD' | translate }}:</strong> {{ selectedFee.childName }}<br>\r
          <strong>{{ 'FEES_PAGE.PARENT' | translate }}:</strong> {{ selectedFee.parentName }}<br>\r
          <strong>{{ 'FEES_PAGE.AMOUNT' | translate }}:</strong> {{ selectedFee.amount | appCurrency }}<br>\r
          <strong>{{ 'FEES_PAGE.DESCRIPTION' | translate }}:</strong> {{ selectedFee.description }}\r
        </div>\r
        <hr>\r
        <form>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.PAYMENT_DATE' | translate }}</label>\r
            <input type="date" class="form-control" [(ngModel)]="paymentData.paidDate" name="paidDate">\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'FEES_PAGE.PAYMENT_NOTES' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="paymentData.paymentNotes" name="paymentNotes" rows="3" [placeholder]="'FEES_PAGE.PAYMENT_NOTES_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="showPaymentModal = false">{{ 'FEES_PAGE.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn custom-btn-2 btn-add-global-2" (click)="payFee()">{{ 'FEES_PAGE.CONFIRM_PAID' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade show" *ngIf="showAddFeeModal || showBulkFeeModal || showPaymentModal"></div>\r
`, styles: ["/* src/app/features/fee/fee.component.scss */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.badge {\n  font-size: 0.75em;\n}\n.dropdown-menu {\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.text-success {\n  color: #198754 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\n.bg-opacity-10 {\n  background-color: rgba(var(--bs-primary-rgb), 0.1) !important;\n}\n.summary-card {\n  transition: transform 0.2s;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.alert {\n  border: none;\n  border-radius: 0.5rem;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n@media (max-width: 768px) {\n  .table-responsive {\n    font-size: 0.875rem;\n  }\n  .card-body {\n    padding: 1rem;\n  }\n}\n::ng-deep .header-info {\n  margin-bottom: 30px !important;\n}\n::ng-deep .header-info .name {\n  padding-bottom: 20px !important;\n}\n.parent-detailchild .fee-tab .total {\n  font-size: 16px;\n}\n.parent-detailchild .fee-tab .spent {\n  font-size: 14px;\n}\n.parent-detailchild .fee-tab .number {\n  font-size: 12px;\n}\n.parent-detailchild .icons {\n  background-color: #E0F2FE !important;\n  background: #E0F2FE !important;\n}\n.parent-detailchild .icons i {\n  color: #1DBAB4 !important;\n}\n.bg-primary {\n  background: var(--gradient-primary) !important;\n  background-color: var(--gradient-primary) !important;\n  color: white;\n}\n.stat-card {\n  transition: none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card .stat-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card .stat-number {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card .stat-label {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n@media (max-width: 576px) {\n  .fee-mobile .stat-number {\n    font-size: 0.9rem;\n  }\n  .fee-mobile.first {\n    padding-right: 2px;\n  }\n  .fee-mobile.second {\n    padding-left: 2px;\n  }\n  .fee-mobile.third {\n    padding-right: 2px;\n  }\n  .fee-mobile.last {\n    padding-left: 2px;\n  }\n  .stat-icon-wrapper {\n    width: 30px !important;\n    height: 30px !important;\n  }\n  .stat-icon-wrapper i {\n    font-size: 14px !important;\n    padding: 10px !important;\n  }\n}\n@media (max-width: 768px) {\n  .parent-detailchild .body {\n    padding: 16px;\n    padding-bottom: 0 !important;\n  }\n  .modal-dialog {\n    margin: 80px auto;\n  }\n}\n/*# sourceMappingURL=fee.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: FeeService }, { type: ChildrenService }, { type: StaticFeesService }, { type: Location }, { type: AuthService }, { type: PermissionService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeComponent, { className: "FeeComponent", filePath: "src/app/features/fee/fee.component.ts", lineNumber: 32 });
})();
export {
  FeeComponent
};
//# sourceMappingURL=chunk-7DADM5SH.js.map
