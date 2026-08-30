import {
  HolidayService
} from "./chunk-EJ66QMTR.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  concatMap,
  finalize,
  from,
  setClassMetadata,
  tap,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/holiday/holiday.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => ({ label: a0 });
var _c1 = (a0) => [a0];
function HolidayComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 18)(15, "button", 19);
    \u0275\u0275listener("click", function HolidayComponent_tr_32_Template_button_click_15_listener() {
      const holiday_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDetail(holiday_r2));
    });
    \u0275\u0275element(16, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 21);
    \u0275\u0275listener("click", function HolidayComponent_tr_32_Template_button_click_17_listener() {
      const holiday_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editHoliday(holiday_r2));
    });
    \u0275\u0275element(18, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function HolidayComponent_tr_32_Template_button_click_19_listener() {
      const holiday_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteHoliday(holiday_r2.id));
    });
    \u0275\u0275element(20, "i", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const holiday_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(holiday_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 7, holiday_r2.date, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", holiday_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(holiday_r2.isRecurring ? "badge-success" : "badge-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", holiday_r2.isRecurring ? \u0275\u0275pipeBind1(11, 12, "HOLIDAYS_PAGE.YES") : \u0275\u0275pipeBind1(12, 14, "HOLIDAYS_PAGE.NO"), " ");
  }
}
function HolidayComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 26);
    \u0275\u0275listener("click", function HolidayComponent_div_33_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMoreHolidays());
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "HOLIDAYS_PAGE.LOAD_MORE"), " ");
  }
}
function HolidayComponent_div_34_div_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "HOLIDAYS_PAGE.RECURRENCE_TYPE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday.recurrenceType);
  }
}
function HolidayComponent_div_34_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "HOLIDAYS_PAGE.DESCRIPTION"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday.description);
  }
}
function HolidayComponent_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 2)(2, "div", 38)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 38)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275element(14, "span", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 2)(17, "div", 38)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, HolidayComponent_div_34_div_7_div_25_Template, 6, 4, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, HolidayComponent_div_34_div_7_div_26_Template, 7, 4, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 10, "HOLIDAYS_PAGE.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 12, ctx_r2.selectedHoliday.date, "fullDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 17, "HOLIDAYS_PAGE.COLOR"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r2.selectedHoliday.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedHoliday.color, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 19, "HOLIDAYS_PAGE.RECURRING"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday.isRecurring ? \u0275\u0275pipeBind1(23, 21, "HOLIDAYS_PAGE.YES") : \u0275\u0275pipeBind1(24, 23, "HOLIDAYS_PAGE.NO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedHoliday.isRecurring);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedHoliday.description);
  }
}
function HolidayComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "h5", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function HolidayComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HolidayComponent_div_34_div_7_Template, 27, 25, "div", 34);
    \u0275\u0275elementStart(8, "div", 35)(9, "button", 36);
    \u0275\u0275listener("click", function HolidayComponent_div_34_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r2.showDetailModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showDetailModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday == null ? null : ctx_r2.selectedHoliday.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedHoliday);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "HOLIDAYS_PAGE.CLOSE"));
  }
}
function HolidayComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.showDetailModal);
  }
}
function HolidayComponent_div_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOLIDAYS_PAGE.HOLIDAY_NAME_REQUIRED"), " ");
  }
}
function HolidayComponent_div_36_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOLIDAYS_PAGE.DATE_REQUIRED"), " ");
  }
}
function HolidayComponent_div_36_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 38)(2, "div", 43)(3, "label", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 59)(7, "option", 60);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 61);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 62);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "HOLIDAYS_PAGE.RECURRENCE_TYPE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "HOLIDAYS_PAGE.SELECT_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "HOLIDAYS_PAGE.YEARLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOLIDAYS_PAGE.MONTHLY"));
  }
}
function HolidayComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "h5", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 33);
    \u0275\u0275listener("click", function HolidayComponent_div_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 42);
    \u0275\u0275listener("ngSubmit", function HolidayComponent_div_36_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 2)(11, "div", 38)(12, "div", 43)(13, "label", 44);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 45);
    \u0275\u0275template(17, HolidayComponent_div_36_div_17_Template, 3, 3, "div", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "div", 43)(20, "label", 47);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 48);
    \u0275\u0275template(24, HolidayComponent_div_36_div_24_Template, 3, 3, "div", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 2)(26, "div", 38)(27, "div", 43)(28, "label", 49);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 38)(33, "div", 43)(34, "div", 51);
    \u0275\u0275element(35, "input", 52);
    \u0275\u0275elementStart(36, "label", 53);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(39, HolidayComponent_div_36_div_39_Template, 16, 12, "div", 40);
    \u0275\u0275elementStart(40, "div", 43)(41, "label", 54);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "textarea", 55);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 35)(47, "button", 36);
    \u0275\u0275listener("click", function HolidayComponent_div_36_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 56);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r2.showEditModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showEditModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "HOLIDAYS_PAGE.EDIT_HOLIDAY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.holidayForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 24, "HOLIDAYS_PAGE.HOLIDAY_NAME"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r2.holidayForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.holidayForm.get("name")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r2.holidayForm.get("name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r2.holidayForm.get("name")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 26, "HOLIDAYS_PAGE.DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r2.holidayForm.get("date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.holidayForm.get("date")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r2.holidayForm.get("date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r2.holidayForm.get("date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 28, "HOLIDAYS_PAGE.COLOR"), " *");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 30, "HOLIDAYS_PAGE.RECURRING_HOLIDAY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_13_0 = ctx_r2.holidayForm.get("isRecurring")) == null ? null : tmp_13_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 32, "HOLIDAYS_PAGE.DESCRIPTION"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 34, "HOLIDAYS_PAGE.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 36, "HOLIDAYS_PAGE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.holidayForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 38, "HOLIDAYS_PAGE.UPDATE_HOLIDAY"));
  }
}
function HolidayComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.showEditModal);
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var HolidayComponent = class _HolidayComponent {
  holidayService;
  router;
  fb;
  http;
  translateService;
  pageTitleService;
  simpleToast;
  holidays = [];
  displayedHolidays = [];
  selectedHoliday = null;
  showDetailModal = false;
  showEditModal = false;
  holidayForm;
  holidaysPerPage = 9;
  currentPage = 1;
  selectedCountry = localStorage.getItem("selectedCountry") || "US";
  titleActions = [];
  holidaySub;
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  constructor(holidayService, router, fb, http, translateService, pageTitleService, simpleToast) {
    this.holidayService = holidayService;
    this.router = router;
    this.fb = fb;
    this.http = http;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    this.simpleToast = simpleToast;
    this.holidayForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", Validators.maxLength(500)],
      date: ["", Validators.required],
      isRecurring: [false],
      recurrenceType: [""],
      color: ["#FF6B6B", Validators.required]
    });
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("HOLIDAYS_PAGE.TITLE"));
    this.selectedCountry = localStorage.getItem("selectedCountry") || "US";
    this.updateTitleActions();
    this.holidaySub = this.holidayService.holidays$.subscribe((holidays) => {
      this.holidays = holidays;
      this.currentPage = 1;
      this.updateDisplayedHolidays();
    });
    this.holidayService.refreshHolidays();
    this.translateService.onLangChange.subscribe(() => {
      this.updateTitleActions();
    });
  }
  updateTitleActions() {
    this.titleActions = [
      { label: this.translateService.instant("HOLIDAYS_PAGE.CLEAR_HOLIDAYS"), icon: "bi bi-trash", class: "custom-btn-2 btn-remove-2", action: () => this.clearImportedHolidays() },
      { label: this.translateService.instant("HOLIDAYS_PAGE.IMPORT_HOLIDAYS"), icon: "bi bi-download", class: "custom-btn-2 btn-edit-global-2", action: () => this.importHolidays() },
      { label: this.translateService.instant("HOLIDAYS_PAGE.ADD_HOLIDAY"), icon: "bi bi-plus-square", class: "", action: () => this.addHoliday() }
    ];
  }
  ngOnDestroy() {
    this.holidaySub?.unsubscribe();
  }
  loadHolidays() {
    this.holidayService.getHolidays().subscribe((holidays) => {
      this.holidays = holidays;
      this.currentPage = 1;
      this.updateDisplayedHolidays();
    });
  }
  importHolidays() {
    const country = localStorage.getItem("selectedCountry") || this.selectedCountry || "US";
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const key = `importedHolidays_${country}_${year}`;
    const existingImport = localStorage.getItem(key);
    if (existingImport) {
      this.simpleToast.warning(this.translateService.instant("HOLIDAYS_PAGE.ALREADY_IMPORTED_TEXT", { country, year }));
      return;
    }
    const apiUrl = `https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`;
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        if (!data || !data.length) {
          this.simpleToast.warning(this.translateService.instant("HOLIDAYS_PAGE.NO_HOLIDAYS_TEXT"));
          return;
        }
        const createdIds = [];
        from(data).pipe(concatMap((h) => {
          const holiday = {
            name: h.localName || h.name,
            description: h.name || "",
            date: h.date,
            isRecurring: false,
            color: "#FFA500"
          };
          return this.holidayService.createHoliday(holiday).pipe(tap((created) => createdIds.push(created.id)));
        }), finalize(() => {
          const key2 = `importedHolidays_${country}_${year}`;
          localStorage.setItem(key2, JSON.stringify(createdIds));
          this.holidayService.refreshHolidays();
          this.loadHolidays();
          this.simpleToast.success(this.translateService.instant("HOLIDAYS_PAGE.IMPORTED_TEXT", { count: createdIds.length }));
        })).subscribe();
      },
      error: (err) => {
        console.error("Error fetching external holidays", err);
        this.simpleToast.error(this.translateService.instant("HOLIDAYS_PAGE.IMPORT_ERROR_TEXT"));
      }
    });
  }
  clearImportedHolidays() {
    const country = localStorage.getItem("selectedCountry") || this.selectedCountry || "US";
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const key = `importedHolidays_${country}_${year}`;
    const ids = this.holidays.map((h) => h.id).filter((id) => !!id);
    if (!ids.length) {
      this.simpleToast.warning(this.translateService.instant("HOLIDAYS_PAGE.NOTHING_TO_CLEAR_TEXT"));
      return;
    }
    import_sweetalert2.default.fire({
      title: this.translateService.instant("HOLIDAYS_PAGE.CLEAR_CONFIRM_TITLE"),
      text: this.translateService.instant("HOLIDAYS_PAGE.CLEAR_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translateService.instant("HOLIDAYS_PAGE.YES_DELETE_THEM"),
      cancelButtonText: this.translateService.instant("HOLIDAYS_PAGE.CANCEL")
    }).then((result) => {
      if (!result.isConfirmed)
        return;
      from(ids).pipe(concatMap((id) => this.holidayService.deleteHoliday(id))).subscribe({
        complete: () => {
          try {
            localStorage.removeItem(key);
          } catch {
          }
          this.holidays = [];
          this.displayedHolidays = [];
          this.currentPage = 1;
          this.holidayService.refreshHolidays();
          this.simpleToast.success(this.translateService.instant("HOLIDAYS_PAGE.CLEARED_TEXT"));
        },
        error: (err) => {
          console.error("Error clearing holidays", err);
          this.simpleToast.error(this.translateService.instant("HOLIDAYS_PAGE.CLEAR_ERROR_TEXT"));
          this.holidayService.refreshHolidays();
        }
      });
    });
  }
  updateDisplayedHolidays() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const filteredHolidays = this.holidays.filter((holiday) => {
      const holidayYear = new Date(holiday.date).getFullYear();
      return holidayYear >= currentYear;
    });
    const endIndex = this.currentPage * this.holidaysPerPage;
    this.displayedHolidays = filteredHolidays.slice(0, endIndex);
  }
  loadMoreHolidays() {
    this.currentPage++;
    this.updateDisplayedHolidays();
  }
  hasMoreHolidays() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const filteredCount = this.holidays.filter((holiday) => {
      const holidayYear = new Date(holiday.date).getFullYear();
      return holidayYear >= currentYear;
    }).length;
    return this.displayedHolidays.length < filteredCount;
  }
  showDetail(holiday) {
    this.selectedHoliday = holiday;
    this.showDetailModal = true;
  }
  closeModal() {
    this.showDetailModal = false;
    this.selectedHoliday = null;
  }
  editHoliday(holiday) {
    this.selectedHoliday = holiday;
    this.holidayForm.patchValue({
      name: holiday.name,
      description: holiday.description,
      date: holiday.date.split("T")[0],
      isRecurring: holiday.isRecurring,
      recurrenceType: holiday.recurrenceType,
      color: holiday.color
    });
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.selectedHoliday = null;
    this.holidayForm.reset();
  }
  onSubmit() {
    if (this.holidayForm.valid && this.selectedHoliday?.id) {
      const updatedHoliday = __spreadProps(__spreadValues({}, this.holidayForm.value), { id: this.selectedHoliday.id });
      this.holidayService.updateHoliday(this.selectedHoliday.id, updatedHoliday).subscribe({
        next: () => {
          this.closeEditModal();
          this.loadHolidays();
          this.simpleToast.success(this.translateService.instant("HOLIDAYS_PAGE.UPDATE_SUCCESS"));
        },
        error: (error) => {
          console.error("Error updating holiday:", error);
          this.simpleToast.error(this.translateService.instant("HOLIDAYS_PAGE.UPDATE_ERROR"));
        }
      });
    }
  }
  deleteHoliday(id) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("HOLIDAYS_PAGE.DELETE_CONFIRM_TITLE"),
      text: this.translateService.instant("HOLIDAYS_PAGE.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translateService.instant("HOLIDAYS_PAGE.YES_DELETE"),
      cancelButtonText: this.translateService.instant("HOLIDAYS_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.holidayService.deleteHoliday(id).subscribe({
          next: () => {
            this.loadHolidays();
            this.simpleToast.success(this.translateService.instant("HOLIDAYS_PAGE.DELETE_SUCCESS"));
          },
          error: () => {
            this.simpleToast.error(this.translateService.instant("HOLIDAYS_PAGE.DELETE_ERROR"));
          }
        });
      }
    });
  }
  addHoliday = () => {
    this.router.navigate(["/holidays/add"]);
  };
  static \u0275fac = function HolidayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HolidayComponent)(\u0275\u0275directiveInject(HolidayService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HolidayComponent, selectors: [["app-holiday"]], decls: 38, vars: 35, consts: [[1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], [1, "row"], [1, "col-12"], [1, "card", "card-general", "holiday-style"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-calendar-event"], [1, "card-body"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "title-table", "name-last"], [1, "color-indicator"], [1, "badge"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "modal-body"], [1, "col-md-6"], ["class", "col-md-6", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "modal-backdrop", "fade"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "date", 1, "form-label"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-control"], ["for", "color", 1, "form-label"], ["type", "color", "id", "color", "formControlName", "color", 1, "form-control", "form-control-color"], [1, "form-check"], ["type", "checkbox", "id", "isRecurring", "formControlName", "isRecurring", 1, "form-check-input"], ["for", "isRecurring", 1, "form-check-label"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], [1, "invalid-feedback"], ["for", "recurrenceType", 1, "form-label"], ["id", "recurrenceType", "formControlName", "recurrenceType", 1, "form-select"], ["value", ""], ["value", "yearly"], ["value", "monthly"]], template: function HolidayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "table", 10)(15, "tbody")(16, "tr")(17, "th");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, HolidayComponent_tr_32_Template, 21, 16, "tr", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(33, HolidayComponent_div_33_Template, 5, 3, "div", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, HolidayComponent_div_34_Template, 12, 9, "div", 13)(35, HolidayComponent_div_35_Template, 1, 2, "div", 14)(36, HolidayComponent_div_36_Template, 53, 40, "div", 13)(37, HolidayComponent_div_37_Template, 1, 2, "div", 14);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 15, "HOLIDAYS_PAGE.TITLE"))("breadcrumbs", \u0275\u0275pureFunction1(33, _c1, \u0275\u0275pureFunction1(31, _c0, \u0275\u0275pipeBind1(3, 17, "HOLIDAYS_PAGE.HOLIDAYS"))))("actions", ctx.titleActions);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 19, "HOLIDAYS_PAGE.HOLIDAYS"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 21, "HOLIDAYS_PAGE.NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 23, "HOLIDAYS_PAGE.DATE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 25, "HOLIDAYS_PAGE.COLOR"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "HOLIDAYS_PAGE.RECURRING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 29, "HOLIDAYS_PAGE.ACTIONS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.displayedHolidays);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasMoreHolidays());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, TitlePage, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, DatePipe, TranslatePipe], styles: ["\n\n.color-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 8px;\n  border: 1px solid #ddd;\n}\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.holiday-style[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.holiday-style[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0;\n  align-items: center;\n  display: flex;\n}\n.holiday-style[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7dd3c0;\n  margin-right: 10px;\n}\n.holiday-style[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.holiday-style[_ngcontent-%COMP%]   .table-holiday[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #202C4B;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 12px 20px;\n  background-color: #E9EDF4 !important;\n}\n.holiday-style[_ngcontent-%COMP%]   .table-holiday[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #515B73;\n  border-bottom: 1px solid #E9EDF4;\n  padding: 12px 20px;\n}\n.holiday-style[_ngcontent-%COMP%]   .table-holiday[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .title-table[_ngcontent-%COMP%] {\n  color: #202C4B;\n  font-weight: 500;\n}\n.holiday-style[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=holiday.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HolidayComponent, [{
    type: Component,
    args: [{ selector: "app-holiday", standalone: true, imports: [CommonModule, RouterModule, TitlePage, ReactiveFormsModule, TranslateModule], template: `\r
<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'HOLIDAYS_PAGE.TITLE' | translate"\r
    [breadcrumbs]="[\r
      { label: 'HOLIDAYS_PAGE.HOLIDAYS' | translate }\r
    ]"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card card-general holiday-style">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-calendar-event"></i>{{ 'HOLIDAYS_PAGE.HOLIDAYS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="table-responsive custom-table">\r
            <table class="table table-hover">\r
              <tbody>\r
                  <tr>\r
                  <th>{{ 'HOLIDAYS_PAGE.NAME' | translate }}</th>\r
                  <th>{{ 'HOLIDAYS_PAGE.DATE' | translate }}</th>\r
                  <th>{{ 'HOLIDAYS_PAGE.COLOR' | translate }}</th>\r
                  <th>{{ 'HOLIDAYS_PAGE.RECURRING' | translate }}</th>\r
                  <th>{{ 'HOLIDAYS_PAGE.ACTIONS' | translate }}</th>\r
                </tr>\r
                <tr *ngFor="let holiday of displayedHolidays">\r
                  <td class="title-table name-last">{{ holiday.name }}</td>\r
                  <td>{{ holiday.date | date:'mediumDate':'':currentLocale }}</td>\r
                  <td>\r
                    <span class="color-indicator" [style.background-color]="holiday.color"></span>\r
\r
                  </td>\r
                  <td>\r
                    <span class="badge" [class]="holiday.isRecurring ? 'badge-success' : 'badge-secondary'">\r
                      {{ holiday.isRecurring ? ('HOLIDAYS_PAGE.YES' | translate) : ('HOLIDAYS_PAGE.NO' | translate) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex gap-1" >\r
                      <button class="btn btn-sm btn-view" (click)="showDetail(holiday)">\r
                        <i class="bi bi-eye"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-edit" (click)="editHoliday(holiday)">\r
                        <i class="bi bi-pencil-square"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-remove" (click)="deleteHoliday(holiday.id!)">\r
                        <i class="bi bi-trash3"></i>\r
                      </button>\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Load More Button -->\r
      <div *ngIf="hasMoreHolidays()" class="text-center d-flex justify-content-center mt-3">\r
        <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreHolidays()">\r
          <i class="bi bi-plus-circle me-2"></i>{{ 'HOLIDAYS_PAGE.LOAD_MORE' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Detail Modal -->\r
<div class="modal fade" [class.show]="showDetailModal" [style.display]="showDetailModal ? 'block' : 'none'" *ngIf="showDetailModal">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ selectedHoliday?.name }}</h5>\r
        <button type="button" class="btn-close" (click)="closeModal()"></button>\r
      </div>\r
      <div class="modal-body" *ngIf="selectedHoliday">\r
        <div class="row">\r
          <div class="col-md-6">\r
            <strong>{{ 'HOLIDAYS_PAGE.DATE' | translate }}:</strong>\r
            <p>{{ selectedHoliday.date | date:'fullDate':'':currentLocale }}</p>\r
          </div>\r
          <div class="col-md-6">\r
            <strong>{{ 'HOLIDAYS_PAGE.COLOR' | translate }}:</strong>\r
            <p>\r
              <span class="color-indicator" [style.background-color]="selectedHoliday.color"></span>\r
              {{ selectedHoliday.color }}\r
            </p>\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div class="col-md-6">\r
            <strong>{{ 'HOLIDAYS_PAGE.RECURRING' | translate }}:</strong>\r
            <p>{{ selectedHoliday.isRecurring ? ('HOLIDAYS_PAGE.YES' | translate) : ('HOLIDAYS_PAGE.NO' | translate) }}</p>\r
          </div>\r
          <div class="col-md-6" *ngIf="selectedHoliday.isRecurring">\r
            <strong>{{ 'HOLIDAYS_PAGE.RECURRENCE_TYPE' | translate }}:</strong>\r
            <p>{{ selectedHoliday.recurrenceType }}</p>\r
          </div>\r
        </div>\r
        <div class="row" *ngIf="selectedHoliday.description">\r
          <div class="col-12">\r
            <strong>{{ 'HOLIDAYS_PAGE.DESCRIPTION' | translate }}:</strong>\r
            <p>{{ selectedHoliday.description }}</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="custom-btn-2 btn-cancel-2" (click)="closeModal()">{{ 'HOLIDAYS_PAGE.CLOSE' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showDetailModal" *ngIf="showDetailModal"></div>\r
\r
<!-- Edit Modal -->\r
<div class="modal fade" [class.show]="showEditModal" [style.display]="showEditModal ? 'block' : 'none'" *ngIf="showEditModal">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'HOLIDAYS_PAGE.EDIT_HOLIDAY' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="closeEditModal()"></button>\r
      </div>\r
      <form [formGroup]="holidayForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row">\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="name" class="form-label">{{ 'HOLIDAYS_PAGE.HOLIDAY_NAME' | translate }} *</label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  id="name"\r
                  formControlName="name"\r
                  [class.is-invalid]="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched"\r
                >\r
                <div class="invalid-feedback" *ngIf="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched">\r
                  {{ 'HOLIDAYS_PAGE.HOLIDAY_NAME_REQUIRED' | translate }}\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="date" class="form-label">{{ 'HOLIDAYS_PAGE.DATE' | translate }} *</label>\r
                <input\r
                  type="date"\r
                  class="form-control"\r
                  id="date"\r
                  formControlName="date"\r
                  [class.is-invalid]="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched"\r
                >\r
                <div class="invalid-feedback" *ngIf="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched">\r
                  {{ 'HOLIDAYS_PAGE.DATE_REQUIRED' | translate }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row">\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="color" class="form-label">{{ 'HOLIDAYS_PAGE.COLOR' | translate }} *</label>\r
                <input\r
                  type="color"\r
                  class="form-control form-control-color"\r
                  id="color"\r
                  formControlName="color"\r
                >\r
              </div>\r
            </div>\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <div class="form-check">\r
                  <input\r
                    class="form-check-input"\r
                    type="checkbox"\r
                    id="isRecurring"\r
                    formControlName="isRecurring"\r
                  >\r
                  <label class="form-check-label" for="isRecurring">\r
                    {{ 'HOLIDAYS_PAGE.RECURRING_HOLIDAY' | translate }}\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row" *ngIf="holidayForm.get('isRecurring')?.value">\r
            <div class="col-md-6">\r
              <div class="mb-3">\r
                <label for="recurrenceType" class="form-label">{{ 'HOLIDAYS_PAGE.RECURRENCE_TYPE' | translate }}</label>\r
                <select class="form-select" id="recurrenceType" formControlName="recurrenceType">\r
                  <option value="">{{ 'HOLIDAYS_PAGE.SELECT_TYPE' | translate }}</option>\r
                  <option value="yearly">{{ 'HOLIDAYS_PAGE.YEARLY' | translate }}</option>\r
                  <option value="monthly">{{ 'HOLIDAYS_PAGE.MONTHLY' | translate }}</option>\r
                </select>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label for="description" class="form-label">{{ 'HOLIDAYS_PAGE.DESCRIPTION' | translate }}</label>\r
            <textarea\r
              class="form-control"\r
              id="description"\r
              rows="3"\r
              formControlName="description"\r
              [placeholder]="'HOLIDAYS_PAGE.DESCRIPTION_PLACEHOLDER' | translate"\r
            ></textarea>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="closeEditModal()">{{ 'HOLIDAYS_PAGE.CANCEL' | translate }}</button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="holidayForm.invalid">{{ 'HOLIDAYS_PAGE.UPDATE_HOLIDAY' | translate }}</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showEditModal" *ngIf="showEditModal"></div>\r
`, styles: ["/* src/app/features/holiday/holiday.component.scss */\n.color-indicator {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  margin-right: 8px;\n  border: 1px solid #ddd;\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.badge-success {\n  background-color: #28a745;\n}\n.badge-secondary {\n  background-color: var(--primary-color);\n}\n.holiday-style .card-header {\n  display: flex;\n  align-items: center;\n}\n.holiday-style .card-header h5 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0;\n  align-items: center;\n  display: flex;\n}\n.holiday-style .card-header h5 i {\n  font-size: 22px;\n  color: #7dd3c0;\n  margin-right: 10px;\n}\n.holiday-style .table-responsive {\n  overflow-x: auto;\n}\n.holiday-style .table-holiday thead tr th {\n  color: #202C4B;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 12px 20px;\n  background-color: #E9EDF4 !important;\n}\n.holiday-style .table-holiday tbody tr td {\n  font-size: 14px;\n  color: #515B73;\n  border-bottom: 1px solid #E9EDF4;\n  padding: 12px 20px;\n}\n.holiday-style .table-holiday tbody tr .title-table {\n  color: #202C4B;\n  font-weight: 500;\n}\n.holiday-style .card-body {\n  padding: 0;\n}\n/*# sourceMappingURL=holiday.component.css.map */\n"] }]
  }], () => [{ type: HolidayService }, { type: Router }, { type: FormBuilder }, { type: HttpClient }, { type: TranslateService }, { type: PageTitleService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HolidayComponent, { className: "HolidayComponent", filePath: "src/app/features/holiday/holiday.component.ts", lineNumber: 31 });
})();
export {
  HolidayComponent
};
//# sourceMappingURL=chunk-62YWWUBN.js.map
