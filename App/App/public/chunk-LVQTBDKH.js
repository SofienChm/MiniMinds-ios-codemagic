import {
  AppointmentsService
} from "./chunk-SOAHY7WP.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
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
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/appointments/appointment-detail/appointment-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => ["/appointments/edit", a0];
function AppointmentDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APPOINTMENTS_PAGE.LOADING"));
  }
}
function AppointmentDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function AppointmentDetail_div_6_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APPOINTMENTS_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.description);
  }
}
function AppointmentDetail_div_6_div_51_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APPOINTMENTS_PAGE.MEETING_NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.notes);
  }
}
function AppointmentDetail_div_6_div_51_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "APPOINTMENTS_PAGE.REJECTION_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.rejectionReason);
  }
}
function AppointmentDetail_div_6_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 28)(2, "h5", 14);
    \u0275\u0275element(3, "i", 52);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, AppointmentDetail_div_6_div_51_div_7_Template, 6, 4, "div", 25)(8, AppointmentDetail_div_6_div_51_div_8_Template, 6, 4, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "APPOINTMENTS_PAGE.NOTES_AND_FEEDBACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.appointment.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appointment.rejectionReason);
  }
}
function AppointmentDetail_div_6_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 56);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "label", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "APPOINTMENTS_PAGE.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.parentName || "-");
  }
}
function AppointmentDetail_div_6_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "div", 45)(3, "p", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", ctx_r0.appointment.status === "Approved" || ctx_r0.appointment.status === "Completed")("bg-danger", ctx_r0.appointment.status === "Rejected")("bg-secondary", ctx_r0.appointment.status === "Cancelled");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, "APPOINTMENTS_PAGE." + ctx_r0.appointment.status.toUpperCase()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 10, ctx_r0.appointment.processedAt, "medium", void 0, ctx_r0.currentLocale));
  }
}
function AppointmentDetail_div_6_div_99_button_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx_r0.appointment.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "APPOINTMENTS_PAGE.EDIT_APPOINTMENT"), " ");
  }
}
function AppointmentDetail_div_6_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 28)(2, "h5", 14);
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, AppointmentDetail_div_6_div_99_button_7_Template, 4, 6, "button", 61);
    \u0275\u0275elementStart(8, "button", 62);
    \u0275\u0275listener("click", function AppointmentDetail_div_6_div_99_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAppointment());
    });
    \u0275\u0275element(9, "i", 63);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "APPOINTMENTS_PAGE.QUICK_ACTIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.appointment.status === "Pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 5, "APPOINTMENTS_PAGE.CANCEL_APPOINTMENT"), " ");
  }
}
function AppointmentDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "h5", 14);
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 10)(13, "div", 18)(14, "label", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label", 19);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p")(24, "span", 16);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 10)(28, "div", 21)(29, "label", 19);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 20);
    \u0275\u0275element(33, "i", 22);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 21)(37, "label", 19);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 20);
    \u0275\u0275element(41, "i", 23);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 21)(44, "label", 19);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 20);
    \u0275\u0275element(48, "i", 24);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, AppointmentDetail_div_6_div_50_Template, 6, 4, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, AppointmentDetail_div_6_div_51_Template, 9, 5, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 27)(53, "div", 12)(54, "div", 28)(55, "h5", 14);
    \u0275\u0275element(56, "i", 29);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 17);
    \u0275\u0275template(60, AppointmentDetail_div_6_div_60_Template, 9, 4, "div", 30);
    \u0275\u0275elementStart(61, "div", 31)(62, "div", 32);
    \u0275\u0275element(63, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 34)(65, "label", 35);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 36);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 37)(72, "div", 38);
    \u0275\u0275element(73, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 34)(75, "label", 35);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 36);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 40)(82, "div", 28)(83, "h5", 14);
    \u0275\u0275element(84, "i", 41);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 17)(88, "div", 42)(89, "div", 43);
    \u0275\u0275element(90, "div", 44);
    \u0275\u0275elementStart(91, "div", 45)(92, "p", 46);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p", 47);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(98, AppointmentDetail_div_6_div_98_Template, 9, 15, "div", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(99, AppointmentDetail_div_6_div_99_Template, 12, 7, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 27, "APPOINTMENTS_PAGE.APPOINTMENT_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusBadgeClass(ctx_r0.appointment.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 29, "APPOINTMENTS_PAGE." + ctx_r0.appointment.status.toUpperCase()), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 31, "APPOINTMENTS_PAGE.TITLE_LABEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 33, "APPOINTMENTS_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getTypeBadgeClass(ctx_r0.appointment.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 35, "APPOINTMENTS_PAGE.TYPE_" + ctx_r0.appointment.type.toUpperCase()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 37, "APPOINTMENTS_PAGE.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(35, 39, ctx_r0.appointment.appointmentDate, "fullDate", void 0, ctx_r0.currentLocale), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 44, "APPOINTMENTS_PAGE.START_TIME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.appointment.startTime, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 46, "APPOINTMENTS_PAGE.END_TIME"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.appointment.endTime, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appointment.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appointment.notes || ctx_r0.appointment.rejectionReason);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 48, "APPOINTMENTS_PAGE.PEOPLE_INVOLVED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.isParent);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 50, "APPOINTMENTS_PAGE.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.childName || \u0275\u0275pipeBind1(70, 52, "APPOINTMENTS_PAGE.NOT_SPECIFIED"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 54, "APPOINTMENTS_PAGE.TEACHER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.appointment.teacherName || \u0275\u0275pipeBind1(80, 56, "APPOINTMENTS_PAGE.ANY_AVAILABLE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 58, "APPOINTMENTS_PAGE.TIMELINE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 60, "APPOINTMENTS_PAGE.CREATED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(97, 62, ctx_r0.appointment.createdAt, "medium", void 0, ctx_r0.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.appointment.processedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isParent && (ctx_r0.appointment.status === "Pending" || ctx_r0.appointment.status === "Approved"));
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var AppointmentDetail = class _AppointmentDetail {
  route;
  router;
  authService;
  appointmentsService;
  translateService;
  pageTitleService;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  routeSub;
  appointment = null;
  loading = true;
  errorMessage = "";
  isAdmin = false;
  isTeacher = false;
  isParent = false;
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  constructor(route, router, authService, appointmentsService, translateService, pageTitleService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.appointmentsService = appointmentsService;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.isTeacher = this.authService.isTeacher();
    this.isParent = this.authService.isParent();
    this.routeSub = this.route.params.subscribe((params) => {
      const id = +params["id"];
      if (id) {
        this.loadAppointment(id);
      }
    });
    this.updateTranslatedContent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("APPOINTMENTS_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("APPOINTMENTS_PAGE.APPOINTMENTS"), url: "/appointments" },
      { label: this.translateService.instant("APPOINTMENTS_PAGE.DETAILS") }
    ];
    this.updateTitleActions();
  }
  updateTitleActions() {
    this.titleActions = [
      {
        label: this.translateService.instant("APPOINTMENTS_PAGE.BACK_TO_LIST"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.router.navigate(["/appointments"])
      }
    ];
    if (this.appointment) {
      if (this.isParent && this.appointment.status === "Pending") {
        this.titleActions.push({
          label: this.translateService.instant("APPOINTMENTS_PAGE.EDIT"),
          icon: "bi bi-pencil",
          class: "btn-edit-global",
          action: () => this.router.navigate(["/appointments/edit", this.appointment?.id])
        });
      }
      if ((this.isAdmin || this.isTeacher) && this.appointment.status === "Pending") {
        this.titleActions.push({
          label: this.translateService.instant("APPOINTMENTS_PAGE.APPROVE"),
          icon: "bi bi-check-lg",
          class: "btn-add-global-2",
          action: () => this.approve()
        });
        this.titleActions.push({
          label: this.translateService.instant("APPOINTMENTS_PAGE.REJECT"),
          icon: "bi bi-x-lg",
          class: "btn-remove-global",
          action: () => this.reject()
        });
      }
      if ((this.isAdmin || this.isTeacher) && this.appointment.status === "Approved") {
        this.titleActions.push({
          label: this.translateService.instant("APPOINTMENTS_PAGE.MARK_COMPLETED"),
          icon: "bi bi-check-all",
          class: "btn-add-global-2",
          action: () => this.complete()
        });
      }
    }
  }
  loadAppointment(id) {
    this.loading = true;
    this.errorMessage = "";
    this.appointmentsService.getAppointmentById(id).subscribe({
      next: (apt) => {
        this.appointment = apt;
        this.pageTitleService.setTitle(apt.title);
        this.updateTitleActions();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_LOAD");
        this.loading = false;
      }
    });
  }
  approve() {
    if (!this.appointment)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_APPROVE"),
      text: this.translateService.instant("APPOINTMENTS_PAGE.APPROVE_MESSAGE"),
      icon: "question",
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_APPROVE"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed && this.appointment) {
        this.appointmentsService.approveAppointment(this.appointment.id).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.APPROVED"));
            this.loadAppointment(this.appointment.id);
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_APPROVE")
            });
          }
        });
      }
    });
  }
  reject() {
    if (!this.appointment)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_REJECT"),
      input: "textarea",
      inputLabel: this.translateService.instant("APPOINTMENTS_PAGE.REJECTION_REASON"),
      inputPlaceholder: this.translateService.instant("APPOINTMENTS_PAGE.REJECTION_REASON_PLACEHOLDER"),
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_REJECT"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL"),
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result.isConfirmed && this.appointment) {
        this.appointmentsService.rejectAppointment(this.appointment.id, { rejectionReason: result.value }).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.REJECTED"));
            this.loadAppointment(this.appointment.id);
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_REJECT")
            });
          }
        });
      }
    });
  }
  complete() {
    if (!this.appointment)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_COMPLETE"),
      input: "textarea",
      inputLabel: this.translateService.instant("APPOINTMENTS_PAGE.MEETING_NOTES"),
      inputPlaceholder: this.translateService.instant("APPOINTMENTS_PAGE.NOTES_PLACEHOLDER"),
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.MARK_COMPLETED"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed && this.appointment) {
        this.appointmentsService.completeAppointment(this.appointment.id, { notes: result.value }).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.COMPLETED"));
            this.loadAppointment(this.appointment.id);
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_COMPLETE")
            });
          }
        });
      }
    });
  }
  cancelAppointment() {
    if (!this.appointment)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_CANCEL"),
      text: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL_MESSAGE"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_CANCEL"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.NO"),
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result.isConfirmed && this.appointment) {
        this.appointmentsService.cancelMyAppointment(this.appointment.id).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.CANCELLED"));
            this.loadAppointment(this.appointment.id);
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_CANCEL")
            });
          }
        });
      }
    });
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "Pending":
        return "badge-pending";
      case "Approved":
        return "badge-approved";
      case "Rejected":
        return "badge-rejected";
      case "Completed":
        return "badge-completed";
      case "Cancelled":
        return "badge-cancelled";
      default:
        return "badge-secondary";
    }
  }
  getTypeBadgeClass(type) {
    switch (type) {
      case "General":
        return "badge-general";
      case "Academic":
        return "badge-academic";
      case "Behavioral":
        return "badge-behavioral";
      case "Medical":
        return "badge-medical";
      case "Other":
        return "badge-other";
      default:
        return "badge-secondary";
    }
  }
  static \u0275fac = function AppointmentDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppointmentsService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppointmentDetail, selectors: [["app-appointment-detail"]], decls: 7, vars: 12, consts: [[1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "row"], [1, "col-lg-8"], [1, "card", "card-general", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "bi", "bi-info-circle", "me-2"], [1, "badge", 3, "ngClass"], [1, "card-body"], [1, "col-md-6", "mb-3"], [1, "detail-label"], [1, "detail-value"], [1, "col-md-4", "mb-3"], [1, "bi", "bi-calendar-event", "me-2", "text-primary"], [1, "bi", "bi-clock", "me-2", "text-success"], [1, "bi", "bi-clock-history", "me-2", "text-warning"], ["class", "mb-3", 4, "ngIf"], ["class", "card card-general mb-4", 4, "ngIf"], [1, "col-lg-4"], [1, "card-header"], [1, "bi", "bi-people", "me-2"], ["class", "person-item mb-3", 4, "ngIf"], [1, "person-item", "mb-3"], [1, "person-icon", "bg-info-light"], [1, "bi", "bi-person-heart", "text-info"], [1, "person-info"], [1, "detail-label", "mb-0"], [1, "detail-value", "mb-0"], [1, "person-item"], [1, "person-icon", "bg-success-light"], [1, "bi", "bi-person-badge", "text-success"], [1, "card", "card-general"], [1, "bi", "bi-clock-history", "me-2"], [1, "timeline"], [1, "timeline-item"], [1, "timeline-marker", "bg-primary"], [1, "timeline-content"], [1, "timeline-label"], [1, "timeline-date"], ["class", "timeline-item", 4, "ngIf"], ["class", "card card-general mt-4", 4, "ngIf"], [1, "mb-3"], [1, "detail-value", "description-box"], [1, "bi", "bi-sticky", "me-2"], [1, "detail-value", "notes-box"], [1, "detail-label", "text-danger"], [1, "detail-value", "rejection-box"], [1, "person-icon", "bg-primary-light"], [1, "bi", "bi-person-fill", "text-primary"], [1, "timeline-marker"], [1, "card", "card-general", "mt-4"], [1, "bi", "bi-lightning", "me-2"], ["class", "btn btn-outline-primary w-100 mb-2", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-outline-danger", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "btn", "btn-outline-primary", "w-100", "mb-2", 3, "routerLink"], [1, "bi", "bi-pencil", "me-2"]], template: function AppointmentDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, AppointmentDetail_div_4_Template, 5, 3, "div", 2)(5, AppointmentDetail_div_5_Template, 3, 1, "div", 3)(6, AppointmentDetail_div_6_Template, 100, 67, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", (ctx.appointment == null ? null : ctx.appointment.title) || \u0275\u0275pipeBind1(2, 8, "APPOINTMENTS_PAGE.DETAILS"))("subtitle", \u0275\u0275pipeBind1(3, 10, "APPOINTMENTS_PAGE.DETAIL_SUBTITLE"))("icon", "bi bi-calendar-check")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.appointment && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, TitlePage, TranslateModule, RouterModule, RouterLink, DatePipe, TranslatePipe], styles: ['\n\n.card-general[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: none;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 1rem;\n}\n.card-general[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333;\n  margin-bottom: 0;\n}\n.description-box[_ngcontent-%COMP%], \n.notes-box[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 6px;\n  white-space: pre-wrap;\n}\n.rejection-box[_ngcontent-%COMP%] {\n  background-color: #fff5f5;\n  border-left: 3px solid #dc3545;\n  padding: 1rem;\n  border-radius: 0 6px 6px 0;\n  white-space: pre-wrap;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-approved[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-rejected[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-completed[_ngcontent-%COMP%] {\n  background-color: #cce5ff;\n  color: #004085;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background-color: #e2e3e5;\n  color: #383d41;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-general[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  color: #0056b3;\n}\n.badge-academic[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-behavioral[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #f57c00;\n}\n.badge-medical[_ngcontent-%COMP%] {\n  background-color: #fce4ec;\n  color: #c2185b;\n}\n.badge-other[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n.person-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.person-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.person-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.bg-primary-light[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n}\n.bg-info-light[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n}\n.bg-success-light[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n}\n.person-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: #e9ecef;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 1.5rem;\n}\n.timeline-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -26px;\n  top: 4px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px #e9ecef;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.timeline-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.25rem;\n  font-size: 0.9rem;\n}\n.timeline-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #7dd3c0;\n  color: #7dd3c0;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n  color: #fff;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n/*# sourceMappingURL=appointment-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentDetail, [{
    type: Component,
    args: [{ selector: "app-appointment-detail", standalone: true, imports: [CommonModule, TitlePage, TranslateModule, RouterModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="appointment?.title || ('APPOINTMENTS_PAGE.DETAILS' | translate)"\r
    [subtitle]="'APPOINTMENTS_PAGE.DETAIL_SUBTITLE' | translate"\r
    [icon]="'bi bi-calendar-check'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ 'APPOINTMENTS_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div *ngIf="errorMessage && !loading" class="alert alert-danger">\r
    <i class="bi bi-exclamation-triangle me-2"></i>{{ errorMessage }}\r
  </div>\r
\r
  <!-- Appointment Details -->\r
  <div *ngIf="appointment && !loading" class="row">\r
    <!-- Main Info Card -->\r
    <div class="col-lg-8">\r
      <div class="card card-general mb-4">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5 class="mb-0">\r
            <i class="bi bi-info-circle me-2"></i>\r
            {{ 'APPOINTMENTS_PAGE.APPOINTMENT_INFO' | translate }}\r
          </h5>\r
          <span class="badge" [ngClass]="getStatusBadgeClass(appointment.status)">\r
            {{ 'APPOINTMENTS_PAGE.' + appointment.status.toUpperCase() | translate }}\r
          </span>\r
        </div>\r
        <div class="card-body">\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label class="detail-label">{{ 'APPOINTMENTS_PAGE.TITLE_LABEL' | translate }}</label>\r
              <p class="detail-value">{{ appointment.title }}</p>\r
            </div>\r
            <div class="col-md-6 mb-3">\r
              <label class="detail-label">{{ 'APPOINTMENTS_PAGE.TYPE' | translate }}</label>\r
              <p>\r
                <span class="badge" [ngClass]="getTypeBadgeClass(appointment.type)">\r
                  {{ 'APPOINTMENTS_PAGE.TYPE_' + appointment.type.toUpperCase() | translate }}\r
                </span>\r
              </p>\r
            </div>\r
          </div>\r
\r
          <div class="row">\r
            <div class="col-md-4 mb-3">\r
              <label class="detail-label">{{ 'APPOINTMENTS_PAGE.DATE' | translate }}</label>\r
              <p class="detail-value">\r
                <i class="bi bi-calendar-event me-2 text-primary"></i>\r
                {{ appointment.appointmentDate | date:'fullDate':undefined:currentLocale }}\r
              </p>\r
            </div>\r
            <div class="col-md-4 mb-3">\r
              <label class="detail-label">{{ 'APPOINTMENTS_PAGE.START_TIME' | translate }}</label>\r
              <p class="detail-value">\r
                <i class="bi bi-clock me-2 text-success"></i>\r
                {{ appointment.startTime }}\r
              </p>\r
            </div>\r
            <div class="col-md-4 mb-3">\r
              <label class="detail-label">{{ 'APPOINTMENTS_PAGE.END_TIME' | translate }}</label>\r
              <p class="detail-value">\r
                <i class="bi bi-clock-history me-2 text-warning"></i>\r
                {{ appointment.endTime }}\r
              </p>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="appointment.description" class="mb-3">\r
            <label class="detail-label">{{ 'APPOINTMENTS_PAGE.DESCRIPTION' | translate }}</label>\r
            <p class="detail-value description-box">{{ appointment.description }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Notes Card (if any) -->\r
      <div *ngIf="appointment.notes || appointment.rejectionReason" class="card card-general mb-4">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-sticky me-2"></i>\r
            {{ 'APPOINTMENTS_PAGE.NOTES_AND_FEEDBACK' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="appointment.notes" class="mb-3">\r
            <label class="detail-label">{{ 'APPOINTMENTS_PAGE.MEETING_NOTES' | translate }}</label>\r
            <p class="detail-value notes-box">{{ appointment.notes }}</p>\r
          </div>\r
          <div *ngIf="appointment.rejectionReason" class="mb-3">\r
            <label class="detail-label text-danger">{{ 'APPOINTMENTS_PAGE.REJECTION_REASON' | translate }}</label>\r
            <p class="detail-value rejection-box">{{ appointment.rejectionReason }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Side Info -->\r
    <div class="col-lg-4">\r
      <!-- People Involved -->\r
      <div class="card card-general mb-4">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-people me-2"></i>\r
            {{ 'APPOINTMENTS_PAGE.PEOPLE_INVOLVED' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="person-item mb-3" *ngIf="!isParent">\r
            <div class="person-icon bg-primary-light">\r
              <i class="bi bi-person-fill text-primary"></i>\r
            </div>\r
            <div class="person-info">\r
              <label class="detail-label mb-0">{{ 'APPOINTMENTS_PAGE.PARENT' | translate }}</label>\r
              <p class="detail-value mb-0">{{ appointment.parentName || '-' }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="person-item mb-3">\r
            <div class="person-icon bg-info-light">\r
              <i class="bi bi-person-heart text-info"></i>\r
            </div>\r
            <div class="person-info">\r
              <label class="detail-label mb-0">{{ 'APPOINTMENTS_PAGE.CHILD' | translate }}</label>\r
              <p class="detail-value mb-0">{{ appointment.childName || ('APPOINTMENTS_PAGE.NOT_SPECIFIED' | translate) }}</p>\r
            </div>\r
          </div>\r
\r
          <div class="person-item">\r
            <div class="person-icon bg-success-light">\r
              <i class="bi bi-person-badge text-success"></i>\r
            </div>\r
            <div class="person-info">\r
              <label class="detail-label mb-0">{{ 'APPOINTMENTS_PAGE.TEACHER' | translate }}</label>\r
              <p class="detail-value mb-0">{{ appointment.teacherName || ('APPOINTMENTS_PAGE.ANY_AVAILABLE' | translate) }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Timeline -->\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-clock-history me-2"></i>\r
            {{ 'APPOINTMENTS_PAGE.TIMELINE' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="timeline">\r
            <div class="timeline-item">\r
              <div class="timeline-marker bg-primary"></div>\r
              <div class="timeline-content">\r
                <p class="timeline-label">{{ 'APPOINTMENTS_PAGE.CREATED' | translate }}</p>\r
                <p class="timeline-date">{{ appointment.createdAt | date:'medium':undefined:currentLocale }}</p>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="appointment.processedAt" class="timeline-item">\r
              <div class="timeline-marker"\r
                   [class.bg-success]="appointment.status === 'Approved' || appointment.status === 'Completed'"\r
                   [class.bg-danger]="appointment.status === 'Rejected'"\r
                   [class.bg-secondary]="appointment.status === 'Cancelled'">\r
              </div>\r
              <div class="timeline-content">\r
                <p class="timeline-label">{{ 'APPOINTMENTS_PAGE.' + appointment.status.toUpperCase() | translate }}</p>\r
                <p class="timeline-date">{{ appointment.processedAt | date:'medium':undefined:currentLocale }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Quick Actions for Parent -->\r
      <div *ngIf="isParent && (appointment.status === 'Pending' || appointment.status === 'Approved')" class="card card-general mt-4">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-lightning me-2"></i>\r
            {{ 'APPOINTMENTS_PAGE.QUICK_ACTIONS' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <button *ngIf="appointment.status === 'Pending'"\r
                  class="btn btn-outline-primary w-100 mb-2"\r
                  [routerLink]="['/appointments/edit', appointment.id]">\r
            <i class="bi bi-pencil me-2"></i>{{ 'APPOINTMENTS_PAGE.EDIT_APPOINTMENT' | translate }}\r
          </button>\r
          <button class="btn btn-outline-danger w-100" (click)="cancelAppointment()">\r
            <i class="bi bi-x-circle me-2"></i>{{ 'APPOINTMENTS_PAGE.CANCEL_APPOINTMENT' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/appointments/appointment-detail/appointment-detail.scss */\n.card-general {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border: none;\n}\n.card-general .card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n}\n.card-general .card-header h5 {\n  font-weight: 600;\n  color: #333;\n  font-size: 1rem;\n}\n.card-general .card-body {\n  padding: 1.25rem;\n}\n.detail-label {\n  font-size: 0.8rem;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.detail-value {\n  font-size: 1rem;\n  color: #333;\n  margin-bottom: 0;\n}\n.description-box,\n.notes-box {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 6px;\n  white-space: pre-wrap;\n}\n.rejection-box {\n  background-color: #fff5f5;\n  border-left: 3px solid #dc3545;\n  padding: 1rem;\n  border-radius: 0 6px 6px 0;\n  white-space: pre-wrap;\n}\n.badge-pending {\n  background-color: #fff3cd;\n  color: #856404;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-approved {\n  background-color: #d4edda;\n  color: #155724;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-rejected {\n  background-color: #f8d7da;\n  color: #721c24;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-completed {\n  background-color: #cce5ff;\n  color: #004085;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-cancelled {\n  background-color: #e2e3e5;\n  color: #383d41;\n  font-size: 0.85rem;\n  padding: 0.5em 1em;\n}\n.badge-general {\n  background-color: #e7f1ff;\n  color: #0056b3;\n}\n.badge-academic {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-behavioral {\n  background-color: #fff8e1;\n  color: #f57c00;\n}\n.badge-medical {\n  background-color: #fce4ec;\n  color: #c2185b;\n}\n.badge-other {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n.person-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.person-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.person-icon i {\n  font-size: 1.2rem;\n}\n.bg-primary-light {\n  background-color: #e7f1ff;\n}\n.bg-info-light {\n  background-color: #e0f7fa;\n}\n.bg-success-light {\n  background-color: #e8f5e9;\n}\n.person-info {\n  flex: 1;\n}\n.timeline {\n  position: relative;\n  padding-left: 30px;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: #e9ecef;\n}\n.timeline-item {\n  position: relative;\n  padding-bottom: 1.5rem;\n}\n.timeline-item:last-child {\n  padding-bottom: 0;\n}\n.timeline-marker {\n  position: absolute;\n  left: -26px;\n  top: 4px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px #e9ecef;\n}\n.timeline-content {\n  padding-left: 0.5rem;\n}\n.timeline-label {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.25rem;\n  font-size: 0.9rem;\n}\n.timeline-date {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.btn-outline-primary {\n  border-color: #7dd3c0;\n  color: #7dd3c0;\n}\n.btn-outline-primary:hover {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n  color: #fff;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n/*# sourceMappingURL=appointment-detail.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AuthService }, { type: AppointmentsService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppointmentDetail, { className: "AppointmentDetail", filePath: "src/app/features/appointments/appointment-detail/appointment-detail.ts", lineNumber: 27 });
})();
export {
  AppointmentDetail
};
//# sourceMappingURL=chunk-LVQTBDKH.js.map
