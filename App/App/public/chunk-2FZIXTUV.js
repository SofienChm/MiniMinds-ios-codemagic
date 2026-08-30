import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  LeavesService
} from "./chunk-Z7NXYY4J.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/leaves/leaves.ts
function Leaves_div_4_div_60_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 48);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 50);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 48);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-annual", l_r2.leaveType === "Annual")("badge-medical", l_r2.leaveType === "Medical")("badge-Emergency", l_r2.leaveType === "Emergency");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-calendar", l_r2.leaveType === "Annual")("bi-heart-pulse", l_r2.leaveType === "Medical")("bi-exclamation-triangle", l_r2.leaveType === "Emergency");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r2.leaveType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(7, 26, l_r2.startDate, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 31, l_r2.endDate, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", l_r2.days, " ", \u0275\u0275pipeBind1(14, 36, "LEAVES_PAGE.DAYS_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-pending", l_r2.status === "Pending")("badge-approved", l_r2.status === "Approved")("badge-rejected", l_r2.status === "Rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r2.reason || \u0275\u0275pipeBind1(20, 38, "LEAVES_PAGE.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(23, 40, l_r2.requestedAt, "short", "", ctx_r2.currentLocale));
  }
}
function Leaves_div_4_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "table", 45)(2, "thead", 46)(3, "tr")(4, "th");
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
    \u0275\u0275template(26, Leaves_div_4_div_60_tr_26_Template, 24, 45, "tr", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "LEAVES_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "LEAVES_PAGE.START_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "LEAVES_PAGE.END_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "LEAVES_PAGE.DAYS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "LEAVES_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 19, "LEAVES_PAGE.REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 21, "LEAVES_PAGE.REQUESTED_ON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.myLeaves)("ngForTrackBy", ctx_r2.trackById);
  }
}
function Leaves_div_4_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "LEAVES_PAGE.NO_LEAVE_REQUESTS"));
  }
}
function Leaves_div_4_span_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function Leaves_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "div", 10)(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "span", 15);
    \u0275\u0275element(15, "i", 16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 6)(20, "div", 18)(21, "div", 8)(22, "div", 9)(23, "div", 10)(24, "p", 11);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h4", 12);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 13)(30, "div", 14)(31, "span", 15);
    \u0275\u0275element(32, "i", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "span", 20);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 6)(37, "div", 21)(38, "div", 8)(39, "div", 9)(40, "div", 10)(41, "p", 11);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "h4", 12);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 13)(47, "div", 14)(48, "span", 15);
    \u0275\u0275element(49, "i", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "span", 23);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 24)(54, "div", 25)(55, "h5", 12);
    \u0275\u0275element(56, "i", 26);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 8);
    \u0275\u0275template(60, Leaves_div_4_div_60_Template, 27, 23, "div", 27)(61, Leaves_div_4_ng_template_61_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 24)(64, "div", 25)(65, "h5", 12);
    \u0275\u0275element(66, "i", 28);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 8)(70, "form", 29);
    \u0275\u0275listener("ngSubmit", function Leaves_div_4_Template_form_ngSubmit_70_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitLeave());
    });
    \u0275\u0275elementStart(71, "div", 30)(72, "div", 31)(73, "label", 32);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementStart(76, "span", 33);
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Leaves_div_4_Template_select_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLeave.leaveType, $event) || (ctx_r2.newLeave.leaveType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(79, "option", 35);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 36);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "option", 37);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "div", 31)(89, "label", 32);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementStart(92, "span", 33);
    \u0275\u0275text(93, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function Leaves_div_4_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLeave.startDate, $event) || (ctx_r2.newLeave.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 31)(96, "label", 32);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementStart(99, "span", 33);
    \u0275\u0275text(100, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function Leaves_div_4_Template_input_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLeave.endDate, $event) || (ctx_r2.newLeave.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "div", 30)(103, "div", 40)(104, "label", 32);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "textarea", 41);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Leaves_div_4_Template_textarea_ngModelChange_107_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLeave.reason, $event) || (ctx_r2.newLeave.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 9);
    \u0275\u0275template(110, Leaves_div_4_span_110_Template, 3, 1, "span", 42);
    \u0275\u0275elementStart(111, "button", 43);
    \u0275\u0275element(112, "i", 28);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const noRequests_r4 = \u0275\u0275reference(62);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 31, "LEAVES_PAGE.ANNUAL_LEAVES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.balance == null ? null : ctx_r2.balance.annualUsedDays) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(18, 33, "LEAVES_PAGE.REMAINING_LEAVES"), ": ", (ctx_r2.balance == null ? null : ctx_r2.balance.annualRemainingDays) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 35, "LEAVES_PAGE.MEDICAL_LEAVES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r2.balance == null ? null : ctx_r2.balance.medicalUsedDays) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(35, 37, "LEAVES_PAGE.REMAINING_LEAVES"), ": ", (ctx_r2.balance == null ? null : ctx_r2.balance.medicalRemainingDays) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 39, "LEAVES_PAGE.TOTAL_ALLOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((ctx_r2.balance == null ? null : ctx_r2.balance.annualAllocation) || 0) + ((ctx_r2.balance == null ? null : ctx_r2.balance.medicalAllocation) || 0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(52, 41, "LEAVES_PAGE.TOTAL_REMAINING"), ": ", ((ctx_r2.balance == null ? null : ctx_r2.balance.annualRemainingDays) || 0) + ((ctx_r2.balance == null ? null : ctx_r2.balance.medicalRemainingDays) || 0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 43, "LEAVES_PAGE.YOUR_LEAVE_REQUESTS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.myLeaves && ctx_r2.myLeaves.length > 0)("ngIfElse", noRequests_r4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 45, "LEAVES_PAGE.REQUEST_NEW_LEAVE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 47, "LEAVES_PAGE.LEAVE_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLeave.leaveType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 49, "LEAVES_PAGE.ANNUAL_LEAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 51, "LEAVES_PAGE.MEDICAL_LEAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 53, "LEAVES_PAGE.EMERGENCY_LEAVE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(91, 55, "LEAVES_PAGE.START_DATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLeave.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(98, 57, "LEAVES_PAGE.END_DATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLeave.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 59, "LEAVES_PAGE.REASON_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLeave.reason);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(108, 61, "LEAVES_PAGE.REASON_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.submitting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.submitting ? \u0275\u0275pipeBind1(114, 63, "LEAVES_PAGE.SUBMITTING") : \u0275\u0275pipeBind1(115, 65, "LEAVES_PAGE.SUBMIT_REQUEST"), " ");
  }
}
function Leaves_div_5_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r6.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function Leaves_div_5_div_11_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 67)(3, "div", 68);
    \u0275\u0275element(4, "img", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "span", 48);
    \u0275\u0275element(9, "i", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 50);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 48);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td")(31, "div", 71)(32, "button", 72);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("click", function Leaves_div_5_div_11_tr_32_Template_button_click_32_listener() {
      const l_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.approve(l_r8));
    });
    \u0275\u0275element(35, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 72);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function Leaves_div_5_div_11_tr_32_Template_button_click_36_listener() {
      const l_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.reject(l_r8));
    });
    \u0275\u0275element(39, "i", 74);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const l_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", (l_r8.teacher == null ? null : l_r8.teacher.profilePicture) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r8.teacher ? l_r8.teacher.firstName + " " + l_r8.teacher.lastName : "#" + l_r8.teacherId);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-annual", l_r8.leaveType === "Annual")("badge-medical", l_r8.leaveType === "Medical")("badge-Emergency", l_r8.leaveType === "Emergency");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-calendar", l_r8.leaveType === "Annual")("bi-heart-pulse", l_r8.leaveType === "Medical")("bi-exclamation-triangle", l_r8.leaveType === "Emergency");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r8.leaveType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 40, l_r8.startDate, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 45, l_r8.endDate, "mediumDate", "", ctx_r2.currentLocale));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", l_r8.days, " ", \u0275\u0275pipeBind1(20, 50, "LEAVES_PAGE.DAYS_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-pending", l_r8.status === "Pending")("badge-approved", l_r8.status === "Approved")("badge-rejected", l_r8.status === "Rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r8.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r8.reason || \u0275\u0275pipeBind1(26, 52, "LEAVES_PAGE.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 54, l_r8.requestedAt, "short", "", ctx_r2.currentLocale));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-view", l_r8.status !== "Approved")("btn-edit", l_r8.status === "Approved");
    \u0275\u0275property("disabled", l_r8.status === "Approved")("title", l_r8.status === "Approved" ? \u0275\u0275pipeBind1(33, 59, "LEAVES_PAGE.ALREADY_APPROVED") : \u0275\u0275pipeBind1(34, 61, "LEAVES_PAGE.APPROVE"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-remove", l_r8.status !== "Rejected")("btn-outline-danger", l_r8.status === "Rejected");
    \u0275\u0275property("disabled", l_r8.status === "Rejected")("title", l_r8.status === "Rejected" ? \u0275\u0275pipeBind1(37, 63, "LEAVES_PAGE.ALREADY_REJECTED") : \u0275\u0275pipeBind1(38, 65, "LEAVES_PAGE.REJECT"));
  }
}
function Leaves_div_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "table", 45)(2, "thead", 46)(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275template(32, Leaves_div_5_div_11_tr_32_Template, 40, 67, "tr", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "LEAVES_PAGE.TEACHER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "LEAVES_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "LEAVES_PAGE.START_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "LEAVES_PAGE.END_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "LEAVES_PAGE.DAYS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "LEAVES_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "LEAVES_PAGE.REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "LEAVES_PAGE.REQUESTED_ON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "LEAVES_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.displayedLeaves)("ngForTrackBy", ctx_r2.trackById);
  }
}
function Leaves_div_5_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 52);
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "LEAVES_PAGE.NO_REQUESTS_FOUND"));
  }
}
function Leaves_div_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "button", 76);
    \u0275\u0275listener("click", function Leaves_div_5_div_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.loadMoreLeaves());
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "LEAVES_PAGE.LOAD_MORE_LEAVES"), " ");
  }
}
function Leaves_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 55)(2, "h4", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57)(6, "ng-select", 58);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Leaves_div_5_Template_ng_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedStatus, $event) || (ctx_r2.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Leaves_div_5_Template_ng_select_change_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadAdminLeaves());
    });
    \u0275\u0275template(8, Leaves_div_5_ng_template_8_Template, 4, 4, "ng-template", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 60)(10, "div", 8);
    \u0275\u0275template(11, Leaves_div_5_div_11_Template, 33, 29, "div", 61)(12, Leaves_div_5_ng_template_12_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, Leaves_div_5_div_14_Template, 5, 3, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noPending_r10 = \u0275\u0275reference(13);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "LEAVES_PAGE.LEAVE_REQUESTS"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedStatus);
    \u0275\u0275property("items", ctx_r2.statusOptions)("placeholder", \u0275\u0275pipeBind1(7, 11, "LEAVES_PAGE.FILTER_BY_STATUS"))("clearable", false)("searchable", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.pendingLeaves && ctx_r2.pendingLeaves.length > 0)("ngIfElse", noPending_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.hasMoreLeaves());
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var Leaves = class _Leaves {
  authService;
  leavesService;
  educatorService;
  router;
  translateService;
  pageTitleService;
  isAdmin = false;
  isTeacher = false;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  // Teacher view state
  balance = null;
  myLeaves = [];
  submitting = false;
  errorMessage = "";
  newLeave = {
    startDate: "",
    endDate: "",
    reason: "",
    leaveType: "Annual"
  };
  // Admin view state
  pendingLeaves = [];
  displayedLeaves = [];
  allStatus = ["All", "Pending", "Approved", "Rejected"];
  selectedStatus = "All";
  statusOptions = [];
  loadingAdmin = false;
  leavesPerPage = 9;
  currentPage = 1;
  teachers = [];
  adminSelectedTeacherId = null;
  adminNewLeave = { startDate: "", endDate: "", reason: "", leaveType: "Annual" };
  adminApprove = true;
  adminSubmitting = false;
  adminError = "";
  constructor(authService, leavesService, educatorService, router, translateService, pageTitleService) {
    this.authService = authService;
    this.leavesService = leavesService;
    this.educatorService = educatorService;
    this.router = router;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("LEAVES_PAGE.TITLE"));
    this.isAdmin = this.authService.isAdmin();
    this.isTeacher = this.authService.isTeacher();
    if (this.isTeacher) {
      this.loadBalance();
      this.loadMyLeaves();
    }
    if (this.isAdmin) {
      this.loadAdminLeaves();
      this.loadTeachers();
    }
    this.updateTranslatedContent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("LEAVES_PAGE.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("LEAVES_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("LEAVES_PAGE.LEAVES") }
    ];
    this.titleActions = [
      {
        label: this.translateService.instant("LEAVES_PAGE.ADD_LEAVE"),
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/leaves/add"])
      }
    ];
    this.statusOptions = [
      { value: "All", label: this.translateService.instant("LEAVES_PAGE.ALL_STATUS"), icon: "bi-list-ul" },
      { value: "Pending", label: this.translateService.instant("LEAVES_PAGE.PENDING"), icon: "bi-hourglass-split" },
      { value: "Approved", label: this.translateService.instant("LEAVES_PAGE.APPROVED"), icon: "bi-check-circle" },
      { value: "Rejected", label: this.translateService.instant("LEAVES_PAGE.REJECTED"), icon: "bi-x-circle" }
    ];
  }
  // Teacher functions
  loadBalance() {
    this.leavesService.getMyBalance().subscribe({
      next: (bal) => this.balance = bal,
      error: () => this.balance = null
    });
  }
  loadMyLeaves() {
    this.leavesService.getMyLeaves().subscribe({
      next: (list) => this.myLeaves = list,
      error: () => this.myLeaves = []
    });
  }
  submitLeave() {
    this.errorMessage = "";
    this.submitting = true;
    const { startDate, endDate, reason } = this.newLeave;
    if (!startDate || !endDate) {
      this.errorMessage = this.translateService.instant("LEAVES_PAGE.DATES_REQUIRED");
      this.submitting = false;
      return;
    }
    this.leavesService.requestLeave({ startDate, endDate, reason: (reason || "").trim(), leaveType: this.newLeave.leaveType }).subscribe({
      next: (_) => {
        this.newLeave = { startDate: "", endDate: "", reason: "", leaveType: "Annual" };
        this.submitting = false;
        this.loadMyLeaves();
        this.loadBalance();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("LEAVES_PAGE.FAILED_SUBMIT_REQUEST");
        this.submitting = false;
      }
    });
  }
  // Admin functions
  loadAdminLeaves() {
    this.loadingAdmin = true;
    this.leavesService.getAllLeaves(this.selectedStatus).subscribe({
      next: (list) => {
        this.pendingLeaves = list;
        this.currentPage = 1;
        this.updateDisplayedLeaves();
        this.loadingAdmin = false;
      },
      error: () => {
        this.pendingLeaves = [];
        this.displayedLeaves = [];
        this.loadingAdmin = false;
      }
    });
  }
  updateDisplayedLeaves() {
    const endIndex = this.currentPage * this.leavesPerPage;
    this.displayedLeaves = this.pendingLeaves.slice(0, endIndex);
  }
  loadMoreLeaves() {
    this.currentPage++;
    this.updateDisplayedLeaves();
  }
  hasMoreLeaves() {
    return this.displayedLeaves.length < this.pendingLeaves.length;
  }
  loadTeachers() {
    this.educatorService.loadEducators().subscribe({
      next: (list) => this.teachers = list || [],
      error: () => this.teachers = []
    });
  }
  approve(leave) {
    this.leavesService.approveLeave(leave.id).subscribe({
      next: () => this.loadAdminLeaves(),
      error: () => {
      }
    });
  }
  reject(leave) {
    this.leavesService.rejectLeave(leave.id).subscribe({
      next: () => this.loadAdminLeaves(),
      error: () => {
      }
    });
  }
  adminSubmitLeave() {
    this.adminError = "";
    this.adminSubmitting = true;
    const tid = this.adminSelectedTeacherId;
    const { startDate, endDate, reason } = this.adminNewLeave;
    if (!tid) {
      this.adminError = this.translateService.instant("LEAVES_PAGE.PLEASE_SELECT_TEACHER");
      this.adminSubmitting = false;
      return;
    }
    if (!startDate || !endDate) {
      this.adminError = this.translateService.instant("LEAVES_PAGE.DATES_REQUIRED");
      this.adminSubmitting = false;
      return;
    }
    this.leavesService.adminCreateLeave(tid, { startDate, endDate, reason: (reason || "").trim(), leaveType: this.adminNewLeave.leaveType, approve: this.adminApprove }).subscribe({
      next: () => {
        this.adminNewLeave = { startDate: "", endDate: "", reason: "", leaveType: "Annual" };
        this.adminSelectedTeacherId = null;
        this.adminApprove = true;
        this.adminSubmitting = false;
        this.loadAdminLeaves();
      },
      error: (err) => {
        this.adminError = err.error?.message || this.translateService.instant("LEAVES_PAGE.FAILED_CREATE_LEAVE");
        this.adminSubmitting = false;
      }
    });
  }
  // TrackBy function for ngFor performance optimization
  trackById(index, item) {
    return item.id;
  }
  static \u0275fac = function Leaves_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Leaves)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LeavesService), \u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Leaves, selectors: [["app-leaves"]], decls: 6, vars: 11, consts: [["noRequests", ""], ["noPending", ""], [1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], [4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "card", "card-general", "card-leaves", "bg-black-le"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-start"], [1, "mb-1", "text-muted"], [1, "mb-0"], [1, "d-flex"], [1, "flex-shrink-0", "me-2"], [1, "avatar", "avatar-md", "d-flex", "align-items-center", "justify-content-center", "rounded"], [1, "bi", "bi-calendar-event-check", "fs-4", "text-white"], [1, "badge", "bg-secondary-transparent", "mt-2"], [1, "card", "card-general", "card-leaves", "bg-blue-le"], [1, "bi", "bi-prescription2", "fs-4", "text-white"], [1, "badge", "bg-info-transparent", "mt-2"], [1, "card", "card-general", "card-leaves", "bg-pink-le"], [1, "bi", "bi-calendar-event-alt", "fs-4", "text-white"], [1, "badge", "bg-pink-transparent", "mt-2"], [1, "card", "card-general", "mb-4"], [1, "card-header"], [1, "bi", "bi-list-ul", "me-2"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "bi", "bi-send-fill", "me-2"], [1, "leave-form", 3, "ngSubmit"], [1, "row"], [1, "col-md-4", "mb-3"], [1, "form-label"], [1, "text-danger"], ["name", "leaveType", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Annual"], ["value", "Medical"], ["value", "Emergency"], ["type", "date", "name", "startDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "mb-3"], ["name", "reason", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "badge"], [1, "bi"], [1, "badge", "bg-leave"], [1, "text-center", "py-5"], [1, "bi", "bi-inbox", "icon-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "bi", "bi-exclamation-circle-fill", "me-1"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "card", "card-general", "card-leaves"], ["class", "table-responsive custom-table", 4, "ngIf", "ngIfElse"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "table-responsive", "custom-table"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", "me-2"], ["loading", "lazy", "alt", "Teacher", 1, "avatar-img", "rounded-circle", "img-leaves", 3, "src"], [1, "name-last"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", 3, "click", "disabled", "title"], [1, "bi", "bi-check"], [1, "bi", "bi-x-lg"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"]], template: function Leaves_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "app-title-page", 3);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, Leaves_div_4_Template, 116, 67, "div", 4)(5, Leaves_div_5_Template, 15, 13, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 7, "LEAVES_PAGE.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 9, "LEAVES_PAGE.SUBTITLE"))("icon", "bi bi-calendar-event-times")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isTeacher);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, DatePipe, TranslatePipe], styles: ["\n\n.leave-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0.5rem;\n}\n.leave-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.leave-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #E9EDF4;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n  font-size: 14px;\n  color: #515B73;\n  transition: all 0.3s ease;\n}\n.leave-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.leave-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #3D5EE1;\n  box-shadow: 0 0 0 0.2rem rgba(61, 94, 225, 0.15);\n}\n.leave-form[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.table[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #202C4B;\n  border-bottom: 2px solid #E9EDF4;\n  padding: 0.75rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #F8F9FA;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  color: #515B73;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.65rem;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.badge.badge-pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.1);\n  color: #FFC107;\n}\n.badge.badge-approved[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n}\n.badge.badge-rejected[_ngcontent-%COMP%] {\n  background: var(--red-color);\n  color: white;\n}\n.badge.badge-annual[_ngcontent-%COMP%] {\n  background: rgba(61, 94, 225, 0.1);\n  color: #3D5EE1;\n}\n.badge.badge-medical[_ngcontent-%COMP%] {\n  background: #feccfd;\n  color: #DC3545;\n}\n.badge.badge-Emergency[_ngcontent-%COMP%] {\n  background: #cdeaf0;\n  color: #2c7e8f;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.avatar.avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%]   .avatar-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #fff;\n}\n.card-leaves[_ngcontent-%COMP%] {\n  background-position: right top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: none;\n}\n.card-leaves.bg-black-le[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/bg-black-le.svg);\n}\n.card-leaves.bg-blue-le[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/bg-blue-le.svg);\n}\n.card-leaves.bg-pink-le[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/bg-purple-le.svg);\n}\n.bg-secondary-transparent[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  color: #6c757d;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.bg-info-transparent[_ngcontent-%COMP%] {\n  background: rgba(13, 202, 240, 0.1);\n  color: #0dcaf0;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.bg-pink-transparent[_ngcontent-%COMP%] {\n  background: rgba(233, 30, 99, 0.1);\n  color: #e91e63;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.avatar.avatar-md[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.text-center[_ngcontent-%COMP%]   .bi-inbox[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.card-leaves[_ngcontent-%COMP%]   .img-leaves[_ngcontent-%COMP%] {\n  max-width: 32px;\n}\n.bg-leave[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  color: white;\n}\n/*# sourceMappingURL=leaves.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Leaves, [{
    type: Component,
    args: [{ selector: "app-leaves", standalone: true, imports: [CommonModule, FormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page \r
    [title]="'LEAVES_PAGE.TITLE' | translate" \r
    [subtitle]="'LEAVES_PAGE.SUBTITLE' | translate"\r
    [icon]="'bi bi-calendar-event-times'"\r
    [breadcrumbs]="breadcrumbs" \r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Teacher View -->\r
  <div *ngIf="isTeacher">\r
    <!-- Leave Balance Cards -->\r
    <div class="row mb-4">\r
      <!-- Annual Leave -->\r
      <div class="col-md-4">\r
        <div class="card card-general card-leaves bg-black-le">\r
          <div class="card-body">\r
            <div class="d-flex align-items-center justify-content-between">\r
              <div class="text-start">\r
                <p class="mb-1 text-muted">{{ 'LEAVES_PAGE.ANNUAL_LEAVES' | translate }}</p>\r
                <h4 class="mb-0">{{ balance?.annualUsedDays || 0 }}</h4>\r
              </div>\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-2">\r
                  <span class="avatar avatar-md d-flex align-items-center justify-content-center rounded">\r
                    <i class="bi bi-calendar-event-check fs-4 text-white"></i>\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <span class="badge bg-secondary-transparent mt-2">{{ 'LEAVES_PAGE.REMAINING_LEAVES' | translate }}: {{ balance?.annualRemainingDays || 0 }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Medical Leave -->\r
      <div class="col-md-4">\r
        <div class="card card-general card-leaves bg-blue-le">\r
          <div class="card-body">\r
            <div class="d-flex align-items-center justify-content-between">\r
              <div class="text-start">\r
                <p class="mb-1 text-muted">{{ 'LEAVES_PAGE.MEDICAL_LEAVES' | translate }}</p>\r
                <h4 class="mb-0">{{ balance?.medicalUsedDays || 0 }}</h4>\r
              </div>\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-2">\r
                  <span class="avatar avatar-md d-flex align-items-center justify-content-center  rounded">\r
                    <i class="bi bi-prescription2 fs-4 text-white"></i>\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <span class="badge bg-info-transparent mt-2">{{ 'LEAVES_PAGE.REMAINING_LEAVES' | translate }}: {{ balance?.medicalRemainingDays || 0 }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Total Allocation -->\r
      <div class="col-md-4">\r
        <div class="card card-general card-leaves bg-pink-le">\r
          <div class="card-body">\r
            <div class="d-flex align-items-center justify-content-between">\r
              <div class="text-start">\r
                <p class="mb-1 text-muted">{{ 'LEAVES_PAGE.TOTAL_ALLOCATION' | translate }}</p>\r
                <h4 class="mb-0">{{ (balance?.annualAllocation || 0) + (balance?.medicalAllocation || 0) }}</h4>\r
              </div>\r
              <div class="d-flex">\r
                <div class="flex-shrink-0 me-2">\r
                  <span class="avatar avatar-md d-flex align-items-center justify-content-center rounded">\r
                    <i class="bi bi-calendar-event-alt fs-4 text-white"></i>\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <span class="badge bg-pink-transparent mt-2">{{ 'LEAVES_PAGE.TOTAL_REMAINING' | translate }}: {{ (balance?.annualRemainingDays || 0) + (balance?.medicalRemainingDays || 0) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Your Requests -->\r
    <div class="card card-general mb-4">\r
      <div class="card-header">\r
        <h5 class="mb-0"><i class="bi bi-list-ul me-2"></i>{{ 'LEAVES_PAGE.YOUR_LEAVE_REQUESTS' | translate }}</h5>\r
      </div>\r
      <div class="card-body">\r
        <div *ngIf="myLeaves && myLeaves.length > 0; else noRequests" class="table-responsive">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'LEAVES_PAGE.TYPE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.START_DATE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.END_DATE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.DAYS' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.STATUS' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.REASON' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.REQUESTED_ON' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let l of myLeaves; trackBy: trackById">\r
                <td>\r
                  <span class="badge" [class.badge-annual]="l.leaveType === 'Annual'" [class.badge-medical]="l.leaveType === 'Medical'" [class.badge-Emergency]="l.leaveType === 'Emergency'">\r
                    <i class="bi" [class.bi-calendar]="l.leaveType === 'Annual'"  [class.bi-heart-pulse]="l.leaveType === 'Medical'" [class.bi-exclamation-triangle]="l.leaveType === 'Emergency'"></i>\r
                    {{ l.leaveType }}\r
                  </span>\r
                </td>\r
                <td>{{ l.startDate | date:'mediumDate':'':currentLocale }}</td>\r
                <td>{{ l.endDate | date:'mediumDate':'':currentLocale }}</td>\r
                <td><span class="badge bg-leave">{{ l.days }} {{ 'LEAVES_PAGE.DAYS_COUNT' | translate }}</span></td>\r
                <td>\r
                  <span class="badge" \r
                    [class.badge-pending]="l.status === 'Pending'"\r
                    [class.badge-approved]="l.status === 'Approved'"\r
                    [class.badge-rejected]="l.status === 'Rejected'">\r
                    {{ l.status }}\r
                  </span>\r
                </td>\r
                <td>{{ l.reason || ('LEAVES_PAGE.NA' | translate) }}</td>\r
                <td>{{ l.requestedAt | date:'short':'':currentLocale }}</td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
        <ng-template #noRequests>\r
          <div class="text-center py-5">\r
            <i class="bi bi-inbox icon-3x text-muted mb-3"></i>\r
            <p class="text-muted">{{ 'LEAVES_PAGE.NO_LEAVE_REQUESTS' | translate }}</p>\r
          </div>\r
        </ng-template>\r
      </div>\r
    </div>\r
\r
    <!-- Request Leave Form -->\r
    <div class="card card-general mb-4">\r
      <div class="card-header">\r
        <h5 class="mb-0"><i class="bi bi-send-fill me-2"></i>{{ 'LEAVES_PAGE.REQUEST_NEW_LEAVE' | translate }}</h5>\r
      </div>\r
      <div class="card-body">\r
        <form (ngSubmit)="submitLeave()" class="leave-form">\r
          <div class="row">\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.LEAVE_TYPE' | translate }} <span class="text-danger">*</span></label>\r
              <select class="form-select" [(ngModel)]="newLeave.leaveType" name="leaveType" required>\r
                <option value="Annual">{{ 'LEAVES_PAGE.ANNUAL_LEAVE' | translate }}</option>\r
                <option value="Medical">{{ 'LEAVES_PAGE.MEDICAL_LEAVE' | translate }}</option>\r
                <option value="Emergency">{{ 'LEAVES_PAGE.EMERGENCY_LEAVE' | translate }}</option>\r
              </select>\r
            </div>\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.START_DATE' | translate }} <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control" [(ngModel)]="newLeave.startDate" name="startDate" required />\r
            </div>\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.END_DATE' | translate }} <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control" [(ngModel)]="newLeave.endDate" name="endDate" required />\r
            </div>\r
          </div>\r
          <div class="row">\r
            <div class="col-12 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.REASON_OPTIONAL' | translate }}</label>\r
              <textarea class="form-control" [(ngModel)]="newLeave.reason" name="reason" rows="3" [placeholder]="'LEAVES_PAGE.REASON_PLACEHOLDER' | translate"></textarea>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center justify-content-between">\r
            <span class="text-danger" *ngIf="errorMessage"><i class="bi bi-exclamation-circle-fill me-1"></i>{{ errorMessage }}</span>\r
            <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="submitting">\r
              <i class="bi bi-send-fill me-2"></i>{{ submitting ? ('LEAVES_PAGE.SUBMITTING' | translate) : ('LEAVES_PAGE.SUBMIT_REQUEST' | translate) }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Admin View -->\r
  <div *ngIf="isAdmin">\r
    <!-- Filter Section -->\r
    <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">\r
      <h4 class="title-filter mb-0">{{ 'LEAVES_PAGE.LEAVE_REQUESTS' | translate }}</h4>\r
      <div class="d-flex align-items-center flex-wrap gap-2">\r
        <!-- Status Filter -->\r
        <ng-select\r
          class="filter-select"\r
          [(ngModel)]="selectedStatus"\r
          [items]="statusOptions"\r
          bindLabel="label"\r
          bindValue="value"\r
          [placeholder]="'LEAVES_PAGE.FILTER_BY_STATUS' | translate"\r
          [clearable]="false"\r
          [searchable]="false"\r
          (change)="loadAdminLeaves()">\r
          <ng-template ng-option-tmp let-item="item">\r
            <div class="option-with-image">\r
              <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
              <span class="option-title">{{ item.label }}</span>\r
            </div>\r
          </ng-template>\r
        </ng-select>\r
      </div>\r
    </div>\r
\r
    <!-- Requests Table -->\r
    <div class="card card-general card-leaves">\r
      <div class="card-body">\r
        <div *ngIf="pendingLeaves && pendingLeaves.length > 0; else noPending" class="table-responsive custom-table">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'LEAVES_PAGE.TEACHER' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.TYPE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.START_DATE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.END_DATE' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.DAYS' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.STATUS' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.REASON' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.REQUESTED_ON' | translate }}</th>\r
                <th>{{ 'LEAVES_PAGE.ACTIONS' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let l of displayedLeaves; trackBy: trackById">\r
                <td>\r
                  <div class="d-flex align-items-center">\r
                    <div class="avatar avatar-sm me-2">\r
                      <img loading="lazy" [src]="l.teacher?.profilePicture || 'assets/default-avatar.svg'" class="avatar-img rounded-circle img-leaves" alt="Teacher">\r
                    </div>\r
                    <span class="name-last">{{ l.teacher ? (l.teacher.firstName + ' ' + l.teacher.lastName) : ('#' + l.teacherId) }}</span>\r
                  </div>\r
                </td>\r
                <td>\r
                  <span class="badge" [class.badge-annual]="l.leaveType === 'Annual'" [class.badge-medical]="l.leaveType === 'Medical'" [class.badge-Emergency]="l.leaveType === 'Emergency'">\r
                    <i class="bi" [class.bi-calendar]="l.leaveType === 'Annual'" [class.bi-heart-pulse]="l.leaveType === 'Medical'" [class.bi-exclamation-triangle]="l.leaveType === 'Emergency'"></i>\r
                    {{ l.leaveType }}\r
                  </span>\r
                </td>\r
                <td>{{ l.startDate | date:'mediumDate':'':currentLocale }}</td>\r
                <td>{{ l.endDate | date:'mediumDate':'':currentLocale }}</td>\r
                <td><span class="badge bg-leave">{{ l.days }} {{ 'LEAVES_PAGE.DAYS_COUNT' | translate }}</span></td>\r
                <td>\r
                  <span class="badge" \r
                    [class.badge-pending]="l.status === 'Pending'"\r
                    [class.badge-approved]="l.status === 'Approved'"\r
                    [class.badge-rejected]="l.status === 'Rejected'">\r
                    {{ l.status }}\r
                  </span>\r
                </td>\r
                <td>{{ l.reason || ('LEAVES_PAGE.NA' | translate) }}</td>\r
                <td>{{ l.requestedAt | date:'short':'':currentLocale }}</td>\r
                <td>\r
                  <div class="d-flex gap-1">\r
                    <button class="btn btn-sm" \r
                            [class.btn-view]="l.status !== 'Approved'"\r
                            [class.btn-edit]="l.status === 'Approved'"\r
                            (click)="approve(l)" \r
                            [disabled]="l.status === 'Approved'"\r
                            [title]="l.status === 'Approved' ? ('LEAVES_PAGE.ALREADY_APPROVED' | translate) : ('LEAVES_PAGE.APPROVE' | translate)">\r
                      <i class="bi bi-check"></i>\r
                    </button>\r
                    <button class="btn btn-sm" \r
                            [class.btn-remove]="l.status !== 'Rejected'"\r
                            [class.btn-outline-danger]="l.status === 'Rejected'"\r
                            (click)="reject(l)" \r
                            [disabled]="l.status === 'Rejected'"\r
                            [title]="l.status === 'Rejected' ? ('LEAVES_PAGE.ALREADY_REJECTED' | translate) : ('LEAVES_PAGE.REJECT' | translate)">\r
                      <i class="bi bi-x-lg"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
        <ng-template #noPending>\r
          <div class="text-center py-5">\r
            <i class="bi bi-inbox icon-3x text-muted mb-3"></i>\r
            <p class="text-muted">{{ 'LEAVES_PAGE.NO_REQUESTS_FOUND' | translate }}</p>\r
          </div>\r
        </ng-template>\r
      </div>\r
    </div>\r
    \r
    <!-- Load More Button -->\r
    <div *ngIf="hasMoreLeaves()" class="text-center d-flex justify-content-center mt-3">\r
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreLeaves()">\r
        <i class="bi bi-plus-circle me-2"></i>{{ 'LEAVES_PAGE.LOAD_MORE_LEAVES' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/leaves/leaves.scss */\n.leave-form .form-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0.5rem;\n}\n.leave-form .form-control,\n.leave-form .form-select {\n  border: 1px solid #E9EDF4;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n  font-size: 14px;\n  color: #515B73;\n  transition: all 0.3s ease;\n}\n.leave-form .form-control:focus,\n.leave-form .form-select:focus {\n  border-color: #3D5EE1;\n  box-shadow: 0 0 0 0.2rem rgba(61, 94, 225, 0.15);\n}\n.leave-form textarea.form-control {\n  resize: vertical;\n}\n.table {\n  font-size: 14px;\n}\n.table thead th {\n  font-weight: 600;\n  color: #202C4B;\n  border-bottom: 2px solid #E9EDF4;\n  padding: 0.75rem;\n}\n.table tbody tr {\n  transition: all 0.2s ease;\n}\n.table tbody tr:hover {\n  background-color: #F8F9FA;\n}\n.table tbody tr td {\n  padding: 0.75rem;\n  color: #515B73;\n  vertical-align: middle;\n}\n.badge {\n  padding: 0.35rem 0.65rem;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.badge.badge-pending {\n  background: rgba(255, 193, 7, 0.1);\n  color: #FFC107;\n}\n.badge.badge-approved {\n  background: var(--primary-color);\n  color: #fff;\n}\n.badge.badge-rejected {\n  background: var(--red-color);\n  color: white;\n}\n.badge.badge-annual {\n  background: rgba(61, 94, 225, 0.1);\n  color: #3D5EE1;\n}\n.badge.badge-medical {\n  background: #feccfd;\n  color: #DC3545;\n}\n.badge.badge-Emergency {\n  background: #cdeaf0;\n  color: #2c7e8f;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.avatar.avatar-sm {\n  width: 32px;\n  height: 32px;\n  font-size: 12px;\n}\n.avatar .avatar-title {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #fff;\n}\n.card-leaves {\n  background-position: right top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: none;\n}\n.card-leaves.bg-black-le {\n  background-image: url(/assets/images/bg-black-le.svg);\n}\n.card-leaves.bg-blue-le {\n  background-image: url(/assets/images/bg-blue-le.svg);\n}\n.card-leaves.bg-pink-le {\n  background-image: url(/assets/images/bg-purple-le.svg);\n}\n.bg-secondary-transparent {\n  background: rgba(108, 117, 125, 0.1);\n  color: #6c757d;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.bg-info-transparent {\n  background: rgba(13, 202, 240, 0.1);\n  color: #0dcaf0;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.bg-pink-transparent {\n  background: rgba(233, 30, 99, 0.1);\n  color: #e91e63;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 0.35rem 0.65rem;\n  border-radius: 4px;\n}\n.avatar.avatar-md {\n  width: 48px;\n  height: 48px;\n}\n.text-center .bi-inbox {\n  opacity: 0.3;\n}\n.card-leaves .img-leaves {\n  max-width: 32px;\n}\n.bg-leave {\n  background: var(--secondary-color);\n  color: white;\n}\n/*# sourceMappingURL=leaves.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: LeavesService }, { type: EducatorService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Leaves, { className: "Leaves", filePath: "src/app/features/leaves/leaves.ts", lineNumber: 29 });
})();
export {
  Leaves
};
//# sourceMappingURL=chunk-2FZIXTUV.js.map
