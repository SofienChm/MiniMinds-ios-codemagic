import {
  AppointmentsService
} from "./chunk-SOAHY7WP.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
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
  ɵɵproperty,
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

// src/app/features/appointments/edit-appointment/edit-appointment.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EditAppointment_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APPOINTMENTS_PAGE.LOADING"));
  }
}
function EditAppointment_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function EditAppointment_div_5_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.fullName);
  }
}
function EditAppointment_div_5_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.fullName);
  }
}
function EditAppointment_div_5_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("appointmentDate"), " ");
  }
}
function EditAppointment_div_5_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("startTime"), " ");
  }
}
function EditAppointment_div_5_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("endTime"), " ");
  }
}
function EditAppointment_div_5_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function EditAppointment_div_5_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function EditAppointment_div_5_span_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function EditAppointment_div_5_i_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function EditAppointment_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h5", 9);
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "form", 12);
    \u0275\u0275listener("ngSubmit", function EditAppointment_div_5_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAppointment());
    });
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "label", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 17);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275template(17, EditAppointment_div_5_div_17_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 19)(19, "label", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "ng-select", 20);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 13)(27, "div", 21)(28, "label", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "span", 22);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ng-select", 23);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275template(36, EditAppointment_div_5_ng_template_36_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 21)(38, "label", 15);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementStart(41, "span", 22);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ng-select", 25);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275template(46, EditAppointment_div_5_ng_template_46_Template, 4, 1, "ng-template", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 13)(48, "div", 19)(49, "label", 15);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementStart(52, "span", 16);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "input", 26);
    \u0275\u0275template(55, EditAppointment_div_5_div_55_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 19)(57, "label", 15);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementStart(60, "span", 16);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "ng-select", 27);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275listener("change", function EditAppointment_div_5_Template_ng_select_change_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartTimeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, EditAppointment_div_5_div_64_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 19)(66, "label", 15);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementStart(69, "span", 16);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "ng-select", 29);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275template(73, EditAppointment_div_5_div_73_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "div", 30)(76, "label", 15);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementStart(79, "span", 22);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "textarea", 31);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275text(84, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, EditAppointment_div_5_div_85_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(86, EditAppointment_div_5_div_86_Template, 3, 1, "div", 32);
    \u0275\u0275elementStart(87, "div", 33)(88, "button", 34);
    \u0275\u0275listener("click", function EditAppointment_div_5_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(89, "i", 35);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 36);
    \u0275\u0275template(93, EditAppointment_div_5_span_93_Template, 1, 0, "span", 37)(94, EditAppointment_div_5_i_94_Template, 1, 0, "i", 38);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 51, "APPOINTMENTS_PAGE.APPOINTMENT_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.appointmentForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 53, "APPOINTMENTS_PAGE.TITLE_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 55, "APPOINTMENTS_PAGE.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 57, "APPOINTMENTS_PAGE.TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.appointmentTypes)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(25, 59, "APPOINTMENTS_PAGE.SELECT_TYPE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 61, "APPOINTMENTS_PAGE.REGARDING_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(33, 63, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.children)("clearable", true)("placeholder", \u0275\u0275pipeBind1(35, 65, "APPOINTMENTS_PAGE.SELECT_CHILD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 67, "APPOINTMENTS_PAGE.PREFERRED_TEACHER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(43, 69, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.teachers)("clearable", true)("placeholder", \u0275\u0275pipeBind1(45, 71, "APPOINTMENTS_PAGE.SELECT_TEACHER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 73, "APPOINTMENTS_PAGE.DATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("appointmentDate"));
    \u0275\u0275property("min", ctx_r1.minDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("appointmentDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 75, "APPOINTMENTS_PAGE.START_TIME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.timeSlots)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(63, 77, "APPOINTMENTS_PAGE.SELECT_TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("startTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 79, "APPOINTMENTS_PAGE.END_TIME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.timeSlots)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(72, 81, "APPOINTMENTS_PAGE.SELECT_TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("endTime"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 83, "APPOINTMENTS_PAGE.DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(81, 85, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(83, 87, "APPOINTMENTS_PAGE.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(91, 89, "APPOINTMENTS_PAGE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? \u0275\u0275pipeBind1(96, 91, "APPOINTMENTS_PAGE.SAVING") : \u0275\u0275pipeBind1(97, 93, "APPOINTMENTS_PAGE.SAVE_CHANGES"), " ");
  }
}
var EditAppointment = class _EditAppointment {
  fb;
  authService;
  appointmentsService;
  childrenService;
  router;
  route;
  translateService;
  pageTitleService;
  breadcrumbs = [];
  actions = [];
  langChangeSub;
  routeSub;
  appointmentForm;
  submitting = false;
  loading = true;
  errorMessage = "";
  appointmentId = null;
  appointment = null;
  // Options for dropdowns
  teachers = [];
  children = [];
  appointmentTypes = [];
  // Time options
  timeSlots = [];
  // Min date for appointment (today)
  minDate = "";
  constructor(fb, authService, appointmentsService, childrenService, router, route, translateService, pageTitleService) {
    this.fb = fb;
    this.authService = authService;
    this.appointmentsService = appointmentsService;
    this.childrenService = childrenService;
    this.router = router;
    this.route = route;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    this.generateTimeSlots();
    this.setMinDate();
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.EDIT_APPOINTMENT"));
    this.initForm();
    this.loadTeachers();
    this.loadChildren();
    this.updateTranslatedContent();
    this.routeSub = this.route.params.subscribe((params) => {
      this.appointmentId = +params["id"];
      if (this.appointmentId) {
        this.loadAppointment(this.appointmentId);
      }
    });
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.EDIT_APPOINTMENT"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
  initForm() {
    this.appointmentForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ["", [Validators.maxLength(1e3)]],
      type: ["General", Validators.required],
      childId: [null],
      teacherId: [null],
      appointmentDate: ["", Validators.required],
      startTime: ["", Validators.required],
      endTime: ["", Validators.required]
    });
  }
  generateTimeSlots() {
    this.timeSlots = [];
    for (let h = 8; h <= 17; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hour = h.toString().padStart(2, "0");
        const minute = m.toString().padStart(2, "0");
        this.timeSlots.push(`${hour}:${minute}`);
      }
    }
  }
  setMinDate() {
    const today = /* @__PURE__ */ new Date();
    this.minDate = today.toISOString().split("T")[0];
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("APPOINTMENTS_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("APPOINTMENTS_PAGE.APPOINTMENTS"), url: "/appointments" },
      { label: this.translateService.instant("APPOINTMENTS_PAGE.EDIT_APPOINTMENT") }
    ];
    this.actions = [
      {
        label: this.translateService.instant("APPOINTMENTS_PAGE.BACK_TO_LIST"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.cancel()
      }
    ];
    this.appointmentTypes = [
      { value: "General", label: this.translateService.instant("APPOINTMENTS_PAGE.TYPE_GENERAL") },
      { value: "Academic", label: this.translateService.instant("APPOINTMENTS_PAGE.TYPE_ACADEMIC") },
      { value: "Behavioral", label: this.translateService.instant("APPOINTMENTS_PAGE.TYPE_BEHAVIORAL") },
      { value: "Medical", label: this.translateService.instant("APPOINTMENTS_PAGE.TYPE_MEDICAL") },
      { value: "Other", label: this.translateService.instant("APPOINTMENTS_PAGE.TYPE_OTHER") }
    ];
  }
  loadAppointment(id) {
    this.loading = true;
    this.appointmentsService.getAppointmentById(id).subscribe({
      next: (apt) => {
        this.appointment = apt;
        if (apt.status !== "Pending") {
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
            text: this.translateService.instant("APPOINTMENTS_PAGE.CANNOT_EDIT_NON_PENDING")
          }).then(() => {
            this.router.navigate(["/appointments"]);
          });
          return;
        }
        const dateStr = new Date(apt.appointmentDate).toISOString().split("T")[0];
        this.appointmentForm.patchValue({
          title: apt.title,
          description: apt.description || "",
          type: apt.type,
          childId: apt.childId || null,
          teacherId: apt.teacherId || null,
          appointmentDate: dateStr,
          startTime: apt.startTime,
          endTime: apt.endTime
        });
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_LOAD");
        this.loading = false;
      }
    });
  }
  loadTeachers() {
    this.appointmentsService.getAvailableTeachers().subscribe({
      next: (list) => this.teachers = list || [],
      error: () => this.teachers = []
    });
  }
  loadChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (list) => {
        this.children = (list || []).map((c) => ({
          id: c.id,
          fullName: `${c.firstName} ${c.lastName}`
        }));
      },
      error: () => this.children = []
    });
  }
  cancel() {
    if (this.appointmentForm.dirty) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("APPOINTMENTS_PAGE.UNSAVED_CHANGES"),
        text: this.translateService.instant("APPOINTMENTS_PAGE.UNSAVED_CHANGES_MESSAGE"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_LEAVE"),
        cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.NO_STAY")
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/appointments"]);
        }
      });
    } else {
      this.router.navigate(["/appointments"]);
    }
  }
  onStartTimeChange() {
    const startTime = this.appointmentForm.get("startTime")?.value;
    if (startTime) {
      const [hours, minutes] = startTime.split(":").map(Number);
      let endMinutes = minutes + 30;
      let endHours = hours;
      if (endMinutes >= 60) {
        endMinutes -= 60;
        endHours += 1;
      }
      const endTime = `${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}`;
      this.appointmentForm.patchValue({ endTime });
    }
  }
  updateAppointment() {
    if (this.appointmentForm.invalid || !this.appointmentId) {
      this.markFormGroupTouched();
      return;
    }
    const startTime = this.appointmentForm.get("startTime")?.value;
    const endTime = this.appointmentForm.get("endTime")?.value;
    if (startTime >= endTime) {
      this.errorMessage = this.translateService.instant("APPOINTMENTS_PAGE.END_TIME_ERROR");
      return;
    }
    this.errorMessage = "";
    this.submitting = true;
    const formValue = this.appointmentForm.value;
    const dto = {
      title: formValue.title.trim(),
      description: formValue.description?.trim() || void 0,
      type: formValue.type,
      childId: formValue.childId || void 0,
      teacherId: formValue.teacherId || void 0,
      appointmentDate: formValue.appointmentDate,
      startTime: formValue.startTime,
      endTime: formValue.endTime
    };
    this.appointmentsService.updateMyAppointment(this.appointmentId, dto).subscribe({
      next: () => {
        showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.SUCCESS"));
        this.router.navigate(["/appointments"]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_UPDATE");
        this.submitting = false;
      }
    });
  }
  markFormGroupTouched() {
    Object.values(this.appointmentForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.appointmentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.appointmentForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"]) {
        return this.translateService.instant("APPOINTMENTS_PAGE.FIELD_REQUIRED");
      }
      if (field.errors["minlength"]) {
        return this.translateService.instant("APPOINTMENTS_PAGE.MIN_LENGTH", { min: field.errors["minlength"].requiredLength });
      }
      if (field.errors["maxlength"]) {
        return this.translateService.instant("APPOINTMENTS_PAGE.MAX_LENGTH", { max: field.errors["maxlength"].requiredLength });
      }
    }
    return "";
  }
  static \u0275fac = function EditAppointment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditAppointment)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppointmentsService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditAppointment, selectors: [["app-edit-appointment"]], decls: 6, vars: 11, consts: [[1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card card-general", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card", "card-general"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-pencil-square", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-8", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["formControlName", "type", "bindLabel", "label", "bindValue", "value", 3, "items", "clearable", "searchable", "placeholder"], [1, "col-md-6", "mb-3"], [1, "text-muted"], ["formControlName", "childId", "bindLabel", "fullName", "bindValue", "id", 3, "items", "clearable", "placeholder"], ["ng-option-tmp", ""], ["formControlName", "teacherId", "bindLabel", "fullName", "bindValue", "id", 3, "items", "clearable", "placeholder"], ["type", "date", "formControlName", "appointmentDate", 1, "form-control", 3, "min"], ["formControlName", "startTime", 3, "change", "items", "clearable", "searchable", "placeholder"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "endTime", 3, "items", "clearable", "searchable", "placeholder"], [1, "col-12", "mb-3"], ["formControlName", "description", "rows", "4", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "action-btn", "btn-cancel-global", "custom-btn-2", 3, "click"], [1, "bi", "bi-x-lg", "me-2"], ["type", "submit", 1, "action-btn", "btn-add-global-2", "custom-btn-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-lg me-2", 4, "ngIf"], [1, "invalid-feedback"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-fill", "me-2"], [1, "bi", "bi-person-badge", "me-2"], [1, "invalid-feedback", "d-block"], [1, "alert", "alert-danger", "mb-3"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-2"]], template: function EditAppointment_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, EditAppointment_div_4_Template, 5, 3, "div", 2)(5, EditAppointment_div_5_Template, 98, 95, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 7, "APPOINTMENTS_PAGE.EDIT_APPOINTMENT"))("subtitle", \u0275\u0275pipeBind1(3, 9, "APPOINTMENTS_PAGE.EDIT_APPOINTMENT_SUBTITLE"))("icon", "bi bi-pencil-square")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.actions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, TranslatePipe], styles: ["\n\n.card-general[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control[_ngcontent-%COMP%], \n.ng-select[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.ng-select[_ngcontent-%COMP%]:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option {\n  padding: 8px 12px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n/*# sourceMappingURL=edit-appointment.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditAppointment, [{
    type: Component,
    args: [{ selector: "app-edit-appointment", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'APPOINTMENTS_PAGE.EDIT_APPOINTMENT' | translate"\r
    [subtitle]="'APPOINTMENTS_PAGE.EDIT_APPOINTMENT_SUBTITLE' | translate"\r
    [icon]="'bi bi-pencil-square'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="actions">\r
  </app-title-page>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ 'APPOINTMENTS_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!loading" class="card card-general">\r
    <div class="card-header">\r
      <h5 class="mb-0">\r
        <i class="bi bi-pencil-square me-2"></i>\r
        {{ 'APPOINTMENTS_PAGE.APPOINTMENT_DETAILS' | translate }}\r
      </h5>\r
    </div>\r
    <div class="card-body">\r
      <form [formGroup]="appointmentForm" (ngSubmit)="updateAppointment()">\r
        <div class="row">\r
          <!-- Title -->\r
          <div class="col-md-8 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.TITLE_LABEL' | translate }}\r
              <span class="text-danger">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              class="form-control"\r
              formControlName="title"\r
              [placeholder]="'APPOINTMENTS_PAGE.TITLE_PLACEHOLDER' | translate"\r
              [class.is-invalid]="isFieldInvalid('title')">\r
            <div class="invalid-feedback" *ngIf="isFieldInvalid('title')">\r
              {{ getFieldError('title') }}\r
            </div>\r
          </div>\r
\r
          <!-- Type -->\r
          <div class="col-md-4 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.TYPE' | translate }}\r
              <span class="text-danger">*</span>\r
            </label>\r
            <ng-select\r
              formControlName="type"\r
              [items]="appointmentTypes"\r
              bindLabel="label"\r
              bindValue="value"\r
              [clearable]="false"\r
              [searchable]="false"\r
              [placeholder]="'APPOINTMENTS_PAGE.SELECT_TYPE' | translate">\r
            </ng-select>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <!-- Child (Optional) -->\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.REGARDING_CHILD' | translate }}\r
              <span class="text-muted">({{ 'APPOINTMENTS_PAGE.OPTIONAL' | translate }})</span>\r
            </label>\r
            <ng-select\r
              formControlName="childId"\r
              [items]="children"\r
              bindLabel="fullName"\r
              bindValue="id"\r
              [clearable]="true"\r
              [placeholder]="'APPOINTMENTS_PAGE.SELECT_CHILD' | translate">\r
              <ng-template ng-option-tmp let-item="item">\r
                <div class="d-flex align-items-center">\r
                  <i class="bi bi-person-fill me-2"></i>\r
                  <span>{{ item.fullName }}</span>\r
                </div>\r
              </ng-template>\r
            </ng-select>\r
          </div>\r
\r
          <!-- Teacher (Optional) -->\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.PREFERRED_TEACHER' | translate }}\r
              <span class="text-muted">({{ 'APPOINTMENTS_PAGE.OPTIONAL' | translate }})</span>\r
            </label>\r
            <ng-select\r
              formControlName="teacherId"\r
              [items]="teachers"\r
              bindLabel="fullName"\r
              bindValue="id"\r
              [clearable]="true"\r
              [placeholder]="'APPOINTMENTS_PAGE.SELECT_TEACHER' | translate">\r
              <ng-template ng-option-tmp let-item="item">\r
                <div class="d-flex align-items-center">\r
                  <i class="bi bi-person-badge me-2"></i>\r
                  <span>{{ item.fullName }}</span>\r
                </div>\r
              </ng-template>\r
            </ng-select>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <!-- Date -->\r
          <div class="col-md-4 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.DATE' | translate }}\r
              <span class="text-danger">*</span>\r
            </label>\r
            <input\r
              type="date"\r
              class="form-control"\r
              formControlName="appointmentDate"\r
              [min]="minDate"\r
              [class.is-invalid]="isFieldInvalid('appointmentDate')">\r
            <div class="invalid-feedback" *ngIf="isFieldInvalid('appointmentDate')">\r
              {{ getFieldError('appointmentDate') }}\r
            </div>\r
          </div>\r
\r
          <!-- Start Time -->\r
          <div class="col-md-4 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.START_TIME' | translate }}\r
              <span class="text-danger">*</span>\r
            </label>\r
            <ng-select\r
              formControlName="startTime"\r
              [items]="timeSlots"\r
              [clearable]="false"\r
              [searchable]="false"\r
              [placeholder]="'APPOINTMENTS_PAGE.SELECT_TIME' | translate"\r
              (change)="onStartTimeChange()">\r
            </ng-select>\r
            <div class="invalid-feedback d-block" *ngIf="isFieldInvalid('startTime')">\r
              {{ getFieldError('startTime') }}\r
            </div>\r
          </div>\r
\r
          <!-- End Time -->\r
          <div class="col-md-4 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.END_TIME' | translate }}\r
              <span class="text-danger">*</span>\r
            </label>\r
            <ng-select\r
              formControlName="endTime"\r
              [items]="timeSlots"\r
              [clearable]="false"\r
              [searchable]="false"\r
              [placeholder]="'APPOINTMENTS_PAGE.SELECT_TIME' | translate">\r
            </ng-select>\r
            <div class="invalid-feedback d-block" *ngIf="isFieldInvalid('endTime')">\r
              {{ getFieldError('endTime') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <!-- Description -->\r
          <div class="col-12 mb-3">\r
            <label class="form-label">\r
              {{ 'APPOINTMENTS_PAGE.DESCRIPTION' | translate }}\r
              <span class="text-muted">({{ 'APPOINTMENTS_PAGE.OPTIONAL' | translate }})</span>\r
            </label>\r
            <textarea\r
              class="form-control"\r
              formControlName="description"\r
              rows="4"\r
              [placeholder]="'APPOINTMENTS_PAGE.DESCRIPTION_PLACEHOLDER' | translate"\r
              [class.is-invalid]="isFieldInvalid('description')">\r
            </textarea>\r
            <div class="invalid-feedback" *ngIf="isFieldInvalid('description')">\r
              {{ getFieldError('description') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="errorMessage" class="alert alert-danger mb-3">\r
          <i class="bi bi-exclamation-triangle me-2"></i>{{ errorMessage }}\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="d-flex justify-content-end gap-2">\r
          <button type="button" class="action-btn btn-cancel-global custom-btn-2" (click)="cancel()">\r
            <i class="bi bi-x-lg me-2"></i>{{ 'APPOINTMENTS_PAGE.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="action-btn btn-add-global-2 custom-btn-2" [disabled]="submitting">\r
            <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!submitting" class="bi bi-check-lg me-2"></i>\r
            {{ submitting ? ('APPOINTMENTS_PAGE.SAVING' | translate) : ('APPOINTMENTS_PAGE.SAVE_CHANGES' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/appointments/edit-appointment/edit-appointment.scss */\n.card-general {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general .card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general .card-header h5 {\n  font-weight: 600;\n  color: #333;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-muted {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control,\n.ng-select {\n  border-radius: 6px;\n}\n.form-control:focus,\n.ng-select:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.85rem;\n}\n.ng-select ::ng-deep .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select ::ng-deep .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select ::ng-deep .ng-option {\n  padding: 8px 12px;\n}\n.ng-select ::ng-deep .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select ::ng-deep .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n/*# sourceMappingURL=edit-appointment.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: AppointmentsService }, { type: ChildrenService }, { type: Router }, { type: ActivatedRoute }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditAppointment, { className: "EditAppointment", filePath: "src/app/features/appointments/edit-appointment/edit-appointment.ts", lineNumber: 28 });
})();
export {
  EditAppointment
};
//# sourceMappingURL=chunk-7MJLR6DS.js.map
