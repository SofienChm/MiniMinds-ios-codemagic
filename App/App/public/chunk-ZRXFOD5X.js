import {
  AttendanceService
} from "./chunk-QXM2DGJD.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  SignalRService
} from "./chunk-723J4PWM.js";
import "./chunk-PPPAYIKG.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-7KUBODN6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  interval,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
import "./chunk-C7TRL22M.js";

// src/app/features/attendance-sheet/attendance-sheet.ts
var _c0 = (a0) => ({ label: a0, url: "/dashboard" });
var _c1 = (a0) => ({ label: a0 });
var _c2 = (a0, a1) => [a0, a1];
function AttendanceSheet_div_79_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r3.firstName, " ", item_r3.lastName, " ");
  }
}
function AttendanceSheet_div_79_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r4.firstName, " ", item_r4.lastName, " ");
  }
}
function AttendanceSheet_div_79_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "small", 9);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "ATTENDANCE_PAGE.ALL_CHECKED_IN"));
  }
}
function AttendanceSheet_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 36)(2, "h5", 8);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "div", 45)(8, "div", 46)(9, "label", 47);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ng-select", 48);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSheet_div_79_Template_ng_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedChildId, $event) || (ctx_r1.selectedChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(14, AttendanceSheet_div_79_ng_template_14_Template, 1, 2, "ng-template", 49)(15, AttendanceSheet_div_79_ng_template_15_Template, 1, 2, "ng-template", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 51)(17, "label", 47);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 30);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSheet_div_79_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.checkInNotes, $event) || (ctx_r1.checkInNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52)(23, "button", 53);
    \u0275\u0275listener("click", function AttendanceSheet_div_79_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkInChild());
    });
    \u0275\u0275element(24, "i", 54);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, AttendanceSheet_div_79_div_27_Template, 5, 3, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 14, "ATTENDANCE_PAGE.QUICK_CHECK_IN"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 16, "ATTENDANCE_PAGE.SELECT_CHILD"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedChildId);
    \u0275\u0275property("items", ctx_r1.availableChildren)("placeholder", \u0275\u0275pipeBind1(13, 18, "ATTENDANCE_PAGE.CHOOSE_CHILD"))("searchable", true)("clearable", true)("searchFn", ctx_r1.searchChild);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "ATTENDANCE_PAGE.NOTES_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 22, "ATTENDANCE_PAGE.NOTES_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.checkInNotes);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.selectedChildId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 24, "ATTENDANCE_PAGE.CHECK_IN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.availableChildren.length === 0);
  }
}
function AttendanceSheet_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ATTENDANCE_PAGE.LOADING"));
  }
}
function AttendanceSheet_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "p", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ATTENDANCE_PAGE.NO_RECORDS"));
  }
}
function AttendanceSheet_div_93_tr_26_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendance_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", attendance_r5.checkInNotes, " ");
  }
}
function AttendanceSheet_div_93_tr_26_div_17_small_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendance_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", attendance_r5.checkOutNotes, " ");
  }
}
function AttendanceSheet_div_93_tr_26_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "p", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AttendanceSheet_div_93_tr_26_div_17_small_3_Template, 3, 1, "small", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendance_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(attendance_r5.checkOutTime));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendance_r5.checkOutNotes);
  }
}
function AttendanceSheet_div_93_tr_26_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AttendanceSheet_div_93_tr_26_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendance_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r1.calculateDuration(attendance_r5.checkInTime, attendance_r5.checkOutTime), "1.1-1"), "h ");
  }
}
function AttendanceSheet_div_93_tr_26_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendance_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getActiveDuration(attendance_r5.checkInTime), " ");
  }
}
function AttendanceSheet_div_93_tr_26_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function AttendanceSheet_div_93_tr_26_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const attendance_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkOut(attendance_r5));
    });
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "ATTENDANCE_PAGE.CHECK_OUT"), " ");
  }
}
function AttendanceSheet_div_93_tr_26_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ATTENDANCE_PAGE.COMPLETED"));
  }
}
function AttendanceSheet_div_93_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 67)(1, "td", 68)(2, "div", 69)(3, "a", 70);
    \u0275\u0275element(4, "img", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 72)(6, "span", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 74)(13, "p", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AttendanceSheet_div_93_tr_26_small_15_Template, 3, 1, "small", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, AttendanceSheet_div_93_tr_26_div_17_Template, 4, 2, "div", 76)(18, AttendanceSheet_div_93_tr_26_span_18_Template, 2, 0, "span", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "span", 78);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, AttendanceSheet_div_93_tr_26_span_23_Template, 3, 4, "span", 77)(24, AttendanceSheet_div_93_tr_26_span_24_Template, 3, 1, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275template(26, AttendanceSheet_div_93_tr_26_button_26_Template, 4, 3, "button", 80)(27, AttendanceSheet_div_93_tr_26_span_27_Template, 3, 3, "span", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attendance_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getChildProfilePictureUrl(attendance_r5.child), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", attendance_r5.child == null ? null : attendance_r5.child.firstName, " ", attendance_r5.child == null ? null : attendance_r5.child.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", attendance_r5.child == null ? null : attendance_r5.child.parent == null ? null : attendance_r5.child.parent.firstName, " ", attendance_r5.child == null ? null : attendance_r5.child.parent == null ? null : attendance_r5.child.parent.lastName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(attendance_r5.checkInTime));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendance_r5.checkInNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendance_r5.checkOutTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendance_r5.checkOutTime);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(attendance_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(attendance_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendance_r5.checkOutTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendance_r5.checkOutTime);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !attendance_r5.checkOutTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendance_r5.checkOutTime);
  }
}
function AttendanceSheet_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "table", 64)(2, "thead", 65)(3, "tr")(4, "th");
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
    \u0275\u0275template(26, AttendanceSheet_div_93_tr_26_Template, 28, 16, "tr", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "ATTENDANCE_PAGE.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "ATTENDANCE_PAGE.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "ATTENDANCE_PAGE.CHECK_IN_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "ATTENDANCE_PAGE.CHECK_OUT_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "ATTENDANCE_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "ATTENDANCE_PAGE.DURATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "ATTENDANCE_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.filteredAttendances);
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var AttendanceSheet = class _AttendanceSheet {
  authService;
  attendanceService;
  childrenService;
  signalRService;
  cdr;
  translate;
  pageTitleService;
  attendances = [];
  stats = { totalPresent: 0, totalAbsent: 0, checkInsToday: 0, checkOutsToday: 0 };
  selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  searchTerm = "";
  loading = false;
  currentTime = /* @__PURE__ */ new Date();
  currentLocale = "en";
  children = [];
  availableChildren = [];
  selectedChildId = null;
  checkInNotes = "";
  showCheckInForm = false;
  refreshSubscription;
  clockSubscription;
  langChangeSub;
  get isParent() {
    return this.authService.isParent();
  }
  constructor(authService, attendanceService, childrenService, signalRService, cdr, translate, pageTitleService) {
    this.authService = authService;
    this.attendanceService = attendanceService;
    this.childrenService = childrenService;
    this.signalRService = signalRService;
    this.cdr = cdr;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  localeMapping = {
    "fr": "fr-FR",
    "it": "it-IT",
    "ar": "ar-SA"
  };
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("ATTENDANCE_PAGE.TITLE"));
    this.currentLocale = this.translate.currentLang ?? this.translate.defaultLang ?? "en";
    this.loadTodayData();
    this.loadChildren();
    this.setupRealtimeUpdates();
    this.startClock();
    this.langChangeSub = this.translate.onLangChange.subscribe((event) => {
      this.currentLocale = event.lang;
      this.pageTitleService.setTitle(this.translate.instant("ATTENDANCE_PAGE.TITLE"));
      this.cdr.detectChanges();
    });
  }
  loadChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        this.updateAvailableChildren();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading children:", error?.message || error);
      }
    });
  }
  ngOnDestroy() {
    this.refreshSubscription?.unsubscribe();
    this.clockSubscription?.unsubscribe();
    this.langChangeSub?.unsubscribe();
    this.signalRService.offAttendanceUpdate();
  }
  setupRealtimeUpdates() {
    this.signalRService.onAttendanceUpdate(() => {
      if (this.selectedDate === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]) {
        this.loadTodayData();
      }
    });
    this.refreshSubscription = interval(12e4).subscribe(() => {
      if (this.selectedDate === (/* @__PURE__ */ new Date()).toISOString().split("T")[0]) {
        this.loadTodayData();
      }
    });
  }
  startClock() {
    this.clockSubscription = interval(1e3).subscribe(() => {
      this.currentTime = /* @__PURE__ */ new Date();
      this.cdr.detectChanges();
    });
  }
  loadTodayData() {
    this.loading = true;
    this.cdr.detectChanges();
    this.attendanceService.getTodayAttendance().subscribe({
      next: (data) => {
        this.attendances = data;
        this.updateAvailableChildren();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading attendance:", error?.message || error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
    this.attendanceService.getTodayStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading stats:", error?.message || error);
      }
    });
  }
  onDateChange() {
    this.loading = true;
    this.cdr.detectChanges();
    this.attendanceService.getAttendanceByDate(this.selectedDate).subscribe({
      next: (data) => {
        this.attendances = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading attendance by date:", error?.message || error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  checkOut(attendance, notes) {
    this.attendanceService.checkOut(attendance.id, notes).subscribe({
      next: () => {
        attendance.checkOutTime = (/* @__PURE__ */ new Date()).toISOString();
        attendance.checkOutNotes = notes;
        setTimeout(() => this.loadTodayData(), 500);
      }
    });
  }
  get filteredAttendances() {
    if (!this.searchTerm)
      return this.attendances;
    return this.attendances.filter((a) => a.child?.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) || a.child?.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  getStatusClass(attendance) {
    if (attendance.checkOutTime)
      return "status-checked-out";
    return "status-present";
  }
  getStatusText(attendance) {
    if (attendance.checkOutTime)
      return this.translate.instant("ATTENDANCE_PAGE.STATUS_CHECKED_OUT");
    return this.translate.instant("ATTENDANCE_PAGE.STATUS_PRESENT");
  }
  /**
   * Parse a date string from the API as UTC time.
   * The API returns UTC times without the 'Z' suffix, so we need to add it.
   */
  parseUtcDate(dateString) {
    if (!dateString)
      return /* @__PURE__ */ new Date();
    if (!dateString.endsWith("Z") && !dateString.includes("+") && !dateString.includes("-", 10)) {
      return /* @__PURE__ */ new Date(dateString + "Z");
    }
    return new Date(dateString);
  }
  formatTime(dateString) {
    const locale = this.localeMapping[this.currentLocale] || "en-US";
    return this.parseUtcDate(dateString).toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  calculateDuration(checkIn, checkOut) {
    const checkInTime = this.parseUtcDate(checkIn).getTime();
    const endTime = checkOut ? this.parseUtcDate(checkOut).getTime() : Date.now();
    return (endTime - checkInTime) / (1e3 * 60 * 60);
  }
  getCurrentTime() {
    const locale = this.localeMapping[this.currentLocale] || "en-US";
    return this.currentTime.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  getActiveDuration(checkIn) {
    const duration = this.calculateDuration(checkIn);
    const hours = Math.floor(duration);
    const minutes = Math.floor((duration - hours) * 60);
    return `${hours}h ${minutes}m`;
  }
  updateAvailableChildren() {
    const checkedInIds = this.attendances.filter((a) => !a.checkOutTime).map((a) => a.childId);
    this.availableChildren = this.children.filter((c) => !checkedInIds.includes(c.id));
  }
  // Custom search function for ng-select to search by first and last name
  searchChild = (term, item) => {
    const searchTerm = term.toLowerCase();
    const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
    return fullName.includes(searchTerm) || item.firstName.toLowerCase().includes(searchTerm) || item.lastName.toLowerCase().includes(searchTerm);
  };
  toggleCheckInForm() {
    this.showCheckInForm = !this.showCheckInForm;
    if (!this.showCheckInForm) {
      this.resetCheckInForm();
    }
  }
  resetCheckInForm() {
    this.selectedChildId = null;
    this.checkInNotes = "";
  }
  checkInChild() {
    if (!this.selectedChildId)
      return;
    this.attendanceService.checkIn(this.selectedChildId, this.checkInNotes).subscribe({
      next: () => {
        this.loadTodayData();
        this.resetCheckInForm();
        this.showCheckInForm = false;
      }
    });
  }
  /**
   * Get the profile picture URL for a child, preferring file-based URL over Base64
   */
  getChildProfilePictureUrl(child) {
    const defaultPicture = "assets/child.png";
    if (!child)
      return defaultPicture;
    if (child.profilePictureUrl && child.profilePictureUrl.trim() !== "") {
      if (child.profilePictureUrl.startsWith("/")) {
        return ApiConfig.HUB_URL + child.profilePictureUrl;
      }
      return child.profilePictureUrl;
    }
    if (child.profilePicture && child.profilePicture.trim() !== "") {
      return child.profilePicture;
    }
    return defaultPicture;
  }
  static \u0275fac = function AttendanceSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceSheet)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AttendanceService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(SignalRService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceSheet, selectors: [["app-attendance-sheet"]], decls: 99, vars: 72, consts: [[3, "title", "breadcrumbs"], [1, "container-fluid", "mt-4"], [1, "row", "mb-3"], [1, "col-12", "col-md-4", "live", "mb-2", "mb-sm-2"], [1, "card", "card-body", "stats-card", "live-clock-card"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "live-indicator", "mb-2"], [1, "pulse-dot"], [1, "mb-0"], [1, "text-muted"], [1, "col-12", "col-md-8"], [1, "row", "g-2"], [1, "col-6", "col-md-3"], [1, "card", "card-body", "stats-card", "present"], [1, "stats-icon", "mb-2"], [1, "bi", "bi-person-check"], [1, "stats-content"], [1, "card", "card-body", "stats-card", "absent"], [1, "bi", "bi-person-x"], [1, "card", "card-body", "stats-card", "checkin"], [1, "bi", "bi-clock"], [1, "card", "card-body", "stats-card", "checkout"], [1, "bi", "bi-box-arrow-right"], [1, "row"], [1, "col-12", "col-md-4", "S"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-12", "mb-1"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "col-md-12", "d-flex", "align-items-end"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-arrow-clockwise"], ["class", "card card-general shadow-sm mb-4", 4, "ngIf"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-list-task"], [1, "badge", "bg-primary"], ["class", "text-center p-4", 4, "ngIf"], ["class", "text-center p-4 text-muted", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], [1, "card", "card-general", "shadow-sm", "mb-4"], [1, "bi", "bi-person-plus"], [1, "row", "align-items-end"], [1, "col-md-4"], [1, "form-label"], ["bindValue", "id", "appendTo", "body", 3, "ngModelChange", "ngModel", "items", "placeholder", "searchable", "clearable", "searchFn"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "col-md-5"], [1, "col-md-3"], [1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "bi", "bi-box-arrow-in-right"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "bi", "bi-info-circle"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "text-center", "p-4", "text-muted"], [1, "bi", "bi-calendar-x", "fs-1"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["class", "attendance-row", 4, "ngFor", "ngForOf"], [1, "attendance-row"], [1, "name-last"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "child-avatar", "flex-shrink-0"], ["loading", "lazy", "alt", "Child", "width", "80", "height", "80", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "title-dt-body-card"], [1, "time-info"], ["class", "d-block text-muted", 4, "ngIf"], ["class", "time-info", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "status-badge"], ["class", "text-success live-duration", 4, "ngIf"], ["class", "btn btn-sm btn-remove", 3, "click", 4, "ngIf"], ["class", "title-dt-body-card complited", 4, "ngIf"], [1, "d-block", "text-muted"], [1, "bi", "bi-chat-left-text"], [1, "text-success", "live-duration"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "title-dt-body-card", "complited"]], template: function AttendanceSheet_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275element(1, "app-title-page", 0);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 1)(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div")(11, "div", 6);
      \u0275\u0275element(12, "span", 7);
      \u0275\u0275elementStart(13, "small");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "h4", 8);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "small", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14);
      \u0275\u0275element(26, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16)(28, "h3");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 12)(34, "div", 17)(35, "div", 14);
      \u0275\u0275element(36, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16)(38, "h3");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "div", 12)(44, "div", 19)(45, "div", 14);
      \u0275\u0275element(46, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 16)(48, "h3");
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 12)(54, "div", 21)(55, "div", 14);
      \u0275\u0275element(56, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 16)(58, "h3");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(63, "div", 23)(64, "div", 24)(65, "div", 25)(66, "div", 26)(67, "div", 27)(68, "div", 28)(69, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSheet_Template_input_ngModelChange_69_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function AttendanceSheet_Template_input_change_69_listener() {
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 28)(71, "input", 30);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSheet_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 31)(74, "button", 32);
      \u0275\u0275listener("click", function AttendanceSheet_Template_button_click_74_listener() {
        return ctx.loadTodayData();
      });
      \u0275\u0275element(75, "i", 33);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(78, "div", 10);
      \u0275\u0275template(79, AttendanceSheet_div_79_Template, 28, 26, "div", 34);
      \u0275\u0275pipe(80, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 35)(82, "div", 36)(83, "h5", 8);
      \u0275\u0275element(84, "i", 37);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span", 38);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 26);
      \u0275\u0275template(91, AttendanceSheet_div_91_Template, 5, 3, "div", 39)(92, AttendanceSheet_div_92_Template, 5, 3, "div", 40)(93, AttendanceSheet_div_93_Template, 27, 22, "div", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 42)(95, "span", 9);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.isParent ? "" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 29, "ATTENDANCE_PAGE.TITLE"))("breadcrumbs", \u0275\u0275pureFunction2(69, _c2, \u0275\u0275pureFunction1(65, _c0, \u0275\u0275pipeBind1(3, 31, "ATTENDANCE_PAGE.DASHBOARD")), \u0275\u0275pureFunction1(67, _c1, \u0275\u0275pipeBind1(4, 33, "ATTENDANCE_PAGE.ATTENDANCE"))));
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 35, "ATTENDANCE_PAGE.LIVE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getCurrentTime());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 37, ctx.currentTime, "fullDate", "", ctx.currentLocale));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.stats.totalPresent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 42, "ATTENDANCE_PAGE.PRESENT_TODAY"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.totalAbsent);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 44, "ATTENDANCE_PAGE.ABSENT_TODAY"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.checkInsToday);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 46, "ATTENDANCE_PAGE.CHECK_INS"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.stats.checkOutsToday);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 48, "ATTENDANCE_PAGE.CHECK_OUTS"));
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(72, 50, "ATTENDANCE_PAGE.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 52, "ATTENDANCE_PAGE.REFRESH"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedDate === \u0275\u0275pipeBind2(80, 54, ctx.currentTime, "yyyy-MM-dd"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 57, "ATTENDANCE_PAGE.ATTENDANCE_RECORDS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.filteredAttendances.length, " ", \u0275\u0275pipeBind1(89, 59, "ATTENDANCE_PAGE.RECORDS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredAttendances.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredAttendances.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(97, 61, "ATTENDANCE_PAGE.TOTAL"), ": ", ctx.filteredAttendances.length, " ", \u0275\u0275pipeBind1(98, 63, "ATTENDANCE_PAGE.RECORD"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, DecimalPipe, DatePipe, TranslatePipe], styles: ["\n\n.stats-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  background: var(--secondary-color);\n  color: #fff;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2c3e50;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.status-present[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  border: 1px solid var(--primary-color);\n}\n.status-badge.status-checked-out[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  color: white;\n  border: 1px solid var(--secondary-color);\n}\n.child-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.time-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n.time-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.time-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table[_ngcontent-%COMP%]   .attendance-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.live[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.live[_ngcontent-%COMP%]   .live-clock-card[_ngcontent-%COMP%] {\n  color: white;\n  height: 100%;\n}\n.live[_ngcontent-%COMP%]   .live-clock-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #2c3e50;\n}\n.live[_ngcontent-%COMP%]   .live-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #7dd3c0;\n  width: max-content;\n  padding: 4px 10px;\n  border-radius: 50px;\n}\n.live[_ngcontent-%COMP%]   .live-indicator[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 10px;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(54, 184, 84, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(54, 191, 86, 0);\n  }\n}\n.live-duration[_ngcontent-%COMP%] {\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0.5;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202C4B !important;\n}\n.check-in[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  font-weight: 600;\n  color: #0e567d !important;\n  border: none !important;\n}\n.complited[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: bold;\n}\n/*# sourceMappingURL=attendance-sheet.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceSheet, [{
    type: Component,
    args: [{ selector: "app-attendance-sheet", imports: [CommonModule, FormsModule, TitlePage, TranslateModule, NgSelectModule], standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div [class]="isParent ? '' : 'container-fluid mt-4'" >\r
  <app-title-page\r
    [title]="'ATTENDANCE_PAGE.TITLE' | translate"\r
    [breadcrumbs]="[{label: 'ATTENDANCE_PAGE.DASHBOARD' | translate, url: '/dashboard'}, {label: 'ATTENDANCE_PAGE.ATTENDANCE' | translate}]">\r
  </app-title-page>\r
</div>\r
<div class="container-fluid mt-4">\r
\r
  <div class="row mb-3">\r
    <div class="col-12 col-md-4 live mb-2 mb-sm-2">\r
      <div class="card card-body stats-card live-clock-card">\r
      <div class="d-flex justify-content-between align-items-center">\r
        <div>\r
          <div class="live-indicator mb-2">\r
            <span class="pulse-dot"></span>\r
            <small>{{ 'ATTENDANCE_PAGE.LIVE' | translate }}</small>\r
          </div>\r
          <h4 class="mb-0">{{ getCurrentTime() }}</h4>\r
          <small class="text-muted">{{ currentTime | date:'fullDate':'':currentLocale }}</small>\r
        </div>\r
      </div>\r
    </div>\r
    </div>\r
    <div class="col-12 col-md-8">\r
      <div class="row g-2">\r
        <div class="col-6 col-md-3">\r
          <div class="card card-body stats-card present">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-person-check"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ stats.totalPresent }}</h3>\r
              <p>{{ 'ATTENDANCE_PAGE.PRESENT_TODAY' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="card card-body stats-card absent">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-person-x"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ stats.totalAbsent }}</h3>\r
              <p>{{ 'ATTENDANCE_PAGE.ABSENT_TODAY' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="card card-body stats-card checkin">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-clock"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ stats.checkInsToday }}</h3>\r
              <p>{{ 'ATTENDANCE_PAGE.CHECK_INS' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-6 col-md-3">\r
          <div class="card card-body stats-card checkout">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-box-arrow-right"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ stats.checkOutsToday }}</h3>\r
              <p>{{ 'ATTENDANCE_PAGE.CHECK_OUTS' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="row">\r
    <div class="col-12 col-md-4 S">\r
      <div class="card mb-4">\r
        <div class="card-body">\r
          <div class="row align-items-center">\r
            <div class="col-md-12 mb-1">\r
              <input type="date" class="form-control" [(ngModel)]="selectedDate" (change)="onDateChange()">\r
            </div>\r
            <div class="col-md-12 mb-1">\r
              <input type="text" class="form-control" [placeholder]="'ATTENDANCE_PAGE.SEARCH_PLACEHOLDER' | translate" [(ngModel)]="searchTerm">\r
            </div>\r
            <div class="col-md-12 d-flex align-items-end">\r
              <button class="custom-btn-2 btn-add-global-2 " (click)="loadTodayData()">\r
                <i class="bi bi-arrow-clockwise"></i> {{ 'ATTENDANCE_PAGE.REFRESH' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
    <div class="col-12 col-md-8">\r
      <div class="card card-general shadow-sm mb-4" *ngIf="selectedDate === (currentTime | date:'yyyy-MM-dd')">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5 class="mb-0"><i class="bi bi-person-plus"></i> {{ 'ATTENDANCE_PAGE.QUICK_CHECK_IN' | translate }}</h5>\r
        </div>\r
        <div class="card-body" >\r
          <div class="row align-items-end">\r
            <div class="col-md-4">\r
              <label class="form-label">{{ 'ATTENDANCE_PAGE.SELECT_CHILD' | translate }}</label>\r
              <ng-select\r
                [(ngModel)]="selectedChildId"\r
                [items]="availableChildren"\r
                bindValue="id"\r
                [placeholder]="'ATTENDANCE_PAGE.CHOOSE_CHILD' | translate"\r
                [searchable]="true"\r
                [clearable]="true"\r
                [searchFn]="searchChild"\r
                appendTo="body">\r
                <ng-template ng-label-tmp let-item="item">\r
                  {{ item.firstName }} {{ item.lastName }}\r
                </ng-template>\r
                <ng-template ng-option-tmp let-item="item">\r
                  {{ item.firstName }} {{ item.lastName }}\r
                </ng-template>\r
              </ng-select>\r
            </div>\r
            <div class="col-md-5">\r
              <label class="form-label">{{ 'ATTENDANCE_PAGE.NOTES_OPTIONAL' | translate }}</label>\r
              <input type="text" class="form-control" [placeholder]="'ATTENDANCE_PAGE.NOTES_PLACEHOLDER' | translate" [(ngModel)]="checkInNotes">\r
            </div>\r
            <div class="col-md-3">\r
              <button class="btn custom-btn-2 btn-add-global-2" [disabled]="!selectedChildId" (click)="checkInChild()">\r
                <i class="bi bi-box-arrow-in-right"></i> {{ 'ATTENDANCE_PAGE.CHECK_IN' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
          <div class="mt-2" *ngIf="availableChildren.length === 0">\r
            <small class="text-muted"><i class="bi bi-info-circle"></i> {{ 'ATTENDANCE_PAGE.ALL_CHECKED_IN' | translate }}</small>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Attendance List -->\r
  <div class="card flex-fill card-general card-recently mb-3">\r
    <div class="card-header d-flex justify-content-between align-items-center">\r
      <h5 class="mb-0">\r
        <i class="bi bi-list-task"></i>\r
        {{ 'ATTENDANCE_PAGE.ATTENDANCE_RECORDS' | translate }}\r
      </h5>\r
      <span class="badge bg-primary">{{ filteredAttendances.length }} {{ 'ATTENDANCE_PAGE.RECORDS' | translate }}</span>\r
    </div>\r
    <div class="card-body">\r
      <div *ngIf="loading" class="text-center p-4">\r
        <div class="spinner-border" role="status">\r
          <span class="visually-hidden">{{ 'ATTENDANCE_PAGE.LOADING' | translate }}</span>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!loading && filteredAttendances.length === 0" class="text-center p-4 text-muted">\r
        <i class="bi bi-calendar-x fs-1"></i>\r
        <p class="mt-2">{{ 'ATTENDANCE_PAGE.NO_RECORDS' | translate }}</p>\r
      </div>\r
\r
      <div *ngIf="!loading && filteredAttendances.length > 0" class="table-responsive custom-table">\r
        <table class="table table-hover mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th>{{ 'ATTENDANCE_PAGE.CHILD' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.PARENT' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.CHECK_IN_TIME' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.CHECK_OUT_TIME' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.STATUS' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.DURATION' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_PAGE.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let attendance of filteredAttendances" class="attendance-row">\r
              <td class="name-last">\r
                <div class="d-flex align-items-center">\r
                      <a href="#" class="child-avatar flex-shrink-0">\r
                        <img loading="lazy" [src]="getChildProfilePictureUrl(attendance.child)" class="img-fluid rounded-circle" alt="Child" width="80" height="80">\r
                      </a>\r
\r
                  <div class="ms-2">\r
                    <span class="title-dt-body-card">{{ attendance.child?.firstName }} {{ attendance.child?.lastName }}</span>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <span>\r
                  {{ attendance.child?.parent?.firstName }} {{ attendance.child?.parent?.lastName }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="time-info">\r
                  <p class="title-dt-body-card">{{ formatTime(attendance.checkInTime) }}</p>\r
                  <small *ngIf="attendance.checkInNotes" class="d-block text-muted">\r
                    <i class="bi bi-chat-left-text"></i> {{ attendance.checkInNotes }}\r
                  </small>\r
                </div>\r
              </td>\r
              <td>\r
                <div *ngIf="attendance.checkOutTime" class="time-info">\r
                  <p class="title-dt-body-card">{{ formatTime(attendance.checkOutTime) }}</p>\r
                  <small *ngIf="attendance.checkOutNotes" class="d-block text-muted">\r
                    <i class="bi bi-chat-left-text"></i> {{ attendance.checkOutNotes }}\r
                  </small>\r
                </div>\r
                <span *ngIf="!attendance.checkOutTime" class="text-muted">-</span>\r
              </td>\r
              <td>\r
                <span class="status-badge" [class]="getStatusClass(attendance)">\r
                  {{ getStatusText(attendance) }}\r
                </span>\r
              </td>\r
              <td>\r
                <span *ngIf="attendance.checkOutTime" class="text-muted">\r
                  {{ calculateDuration(attendance.checkInTime, attendance.checkOutTime) | number:'1.1-1' }}h\r
                </span>\r
                <span *ngIf="!attendance.checkOutTime" class="text-success live-duration">\r
                  <i class="bi bi-clock"></i> {{ getActiveDuration(attendance.checkInTime) }}\r
                </span>\r
              </td>\r
              <td>\r
                <button\r
                  *ngIf="!attendance.checkOutTime"\r
                  class="btn btn-sm btn-remove"\r
                  (click)="checkOut(attendance)">\r
                  <i class="bi bi-box-arrow-right"></i> {{ 'ATTENDANCE_PAGE.CHECK_OUT' | translate }}\r
                </button>\r
                <span *ngIf="attendance.checkOutTime" class="title-dt-body-card complited">{{ 'ATTENDANCE_PAGE.COMPLETED' | translate }}</span>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
    <div class="card-footer d-flex align-items-center justify-content-between">\r
      <span class="text-muted">{{ 'ATTENDANCE_PAGE.TOTAL' | translate }}: {{ filteredAttendances.length }} {{ 'ATTENDANCE_PAGE.RECORD' | translate }}</span>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/attendance-sheet/attendance-sheet.scss */\n.stats-card {\n  transition: transform 0.2s;\n}\n.stats-card:hover {\n  transform: translateY(-2px);\n}\n.stats-card .stats-icon {\n  width: 35px;\n  height: 35px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  background: var(--secondary-color);\n  color: #fff;\n}\n.stats-card .stats-content h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2c3e50;\n}\n.stats-card .stats-content p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.status-present {\n  background: var(--primary-color);\n  color: white;\n  border: 1px solid var(--primary-color);\n}\n.status-badge.status-checked-out {\n  background: var(--secondary-color);\n  color: white;\n  border: 1px solid var(--secondary-color);\n}\n.child-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.time-info strong {\n  color: #2c3e50;\n}\n.time-info small {\n  font-size: 0.75rem;\n}\n.time-info small i {\n  margin-right: 0.25rem;\n}\n.table th {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table .attendance-row:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.live {\n  flex: 1;\n}\n.live .live-clock-card {\n  color: white;\n  height: 100%;\n}\n.live .live-clock-card h4 {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #2c3e50;\n}\n.live .live-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #7dd3c0;\n  width: max-content;\n  padding: 4px 10px;\n  border-radius: 50px;\n}\n.live .live-indicator small {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 10px;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  background: #ffffff;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(54, 184, 84, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(54, 191, 86, 0);\n  }\n}\n.live-duration {\n  font-weight: 600;\n  animation: fadeIn 0.5s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0.5;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.card {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n}\n.card .card-header {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card .badge {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202C4B !important;\n}\n.check-in {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  font-weight: 600;\n  color: #0e567d !important;\n  border: none !important;\n}\n.complited {\n  color: var(--primary-color);\n  font-weight: bold;\n}\n/*# sourceMappingURL=attendance-sheet.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: AttendanceService }, { type: ChildrenService }, { type: SignalRService }, { type: ChangeDetectorRef }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceSheet, { className: "AttendanceSheet", filePath: "src/app/features/attendance-sheet/attendance-sheet.ts", lineNumber: 32 });
})();
export {
  AttendanceSheet
};
//# sourceMappingURL=chunk-ZRXFOD5X.js.map
