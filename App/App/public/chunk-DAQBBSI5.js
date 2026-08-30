import {
  AppointmentsService
} from "./chunk-SOAHY7WP.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/appointments/add-appointment/add-appointment.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function AddAppointment_app_parent_child_header_simple_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parent-child-header-simple", 35);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.BOOK_APPOINTMENT"));
  }
}
function AddAppointment_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 5, "APPOINTMENTS_PAGE.BOOK_APPOINTMENT"))("subtitle", \u0275\u0275pipeBind1(2, 7, "APPOINTMENTS_PAGE.BOOK_APPOINTMENT_SUBTITLE"))("icon", "bi bi-calendar-plus")("breadcrumbs", ctx_r0.breadcrumbs)("actions", ctx_r0.actions);
  }
}
function AddAppointment_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("title"), " ");
  }
}
function AddAppointment_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.fullName);
  }
}
function AddAppointment_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 40);
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
function AddAppointment_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("appointmentDate"), " ");
  }
}
function AddAppointment_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("startTime"), " ");
  }
}
function AddAppointment_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("endTime"), " ");
  }
}
function AddAppointment_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("description"), " ");
  }
}
function AddAppointment_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function AddAppointment_span_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function AddAppointment_i_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 45);
  }
}
var AddAppointment = class _AddAppointment {
  fb;
  authService;
  appointmentsService;
  childrenService;
  router;
  translateService;
  pageTitleService;
  breadcrumbs = [];
  actions = [];
  langChangeSub;
  isParent = false;
  appointmentForm;
  submitting = false;
  errorMessage = "";
  // Options for dropdowns
  teachers = [];
  children = [];
  appointmentTypes = [];
  // Time options
  timeSlots = [];
  // Min date for appointment (today)
  minDate = "";
  constructor(fb, authService, appointmentsService, childrenService, router, translateService, pageTitleService) {
    this.fb = fb;
    this.authService = authService;
    this.appointmentsService = appointmentsService;
    this.childrenService = childrenService;
    this.router = router;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    this.generateTimeSlots();
    this.setMinDate();
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.BOOK_APPOINTMENT"));
    this.initForm();
    this.loadTeachers();
    this.loadChildren();
    this.updateTranslatedContent();
    this.isParent = this.authService.isParent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.BOOK_APPOINTMENT"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
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
      { label: this.translateService.instant("APPOINTMENTS_PAGE.BOOK_APPOINTMENT") }
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
  submitAppointment() {
    if (this.appointmentForm.invalid) {
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
    this.appointmentsService.requestAppointment(dto).subscribe({
      next: () => {
        showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.SUCCESS"));
        this.router.navigate(["/appointments"]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_CREATE");
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
  static \u0275fac = function AddAppointment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddAppointment)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppointmentsService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddAppointment, selectors: [["app-add-appointment"]], decls: 110, vars: 106, consts: [[3, "title", 4, "ngIf"], [1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions", 4, "ngIf"], [1, "card", "card-general"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-calendar-plus", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-8", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["formControlName", "type", "bindLabel", "label", "bindValue", "value", 3, "items", "clearable", "searchable", "placeholder"], [1, "col-md-6", "mb-3"], [1, "text-muted"], ["formControlName", "childId", "bindLabel", "fullName", "bindValue", "id", 3, "items", "clearable", "placeholder"], ["ng-option-tmp", ""], ["formControlName", "teacherId", "bindLabel", "fullName", "bindValue", "id", 3, "items", "clearable", "placeholder"], ["type", "date", "formControlName", "appointmentDate", 1, "form-control", 3, "min"], ["formControlName", "startTime", 3, "change", "items", "clearable", "searchable", "placeholder"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "endTime", 3, "items", "clearable", "searchable", "placeholder"], [1, "col-12", "mb-3"], ["formControlName", "description", "rows", "4", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-x-lg", "me-2"], ["type", "submit", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-calendar-check me-2", 4, "ngIf"], [3, "title"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], [1, "invalid-feedback"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-fill", "me-2"], [1, "bi", "bi-person-badge", "me-2"], [1, "invalid-feedback", "d-block"], [1, "alert", "alert-danger", "mb-3"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-calendar-check", "me-2"]], template: function AddAppointment_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddAppointment_app_parent_child_header_simple_0_Template, 2, 3, "app-parent-child-header-simple", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, AddAppointment_app_title_page_2_Template, 3, 9, "app-title-page", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function AddAppointment_Template_form_ngSubmit_10_listener() {
        return ctx.submitAppointment();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275template(20, AddAppointment_div_20_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15)(22, "label", 11);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "ng-select", 16);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 9)(30, "div", 17)(31, "label", 11);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "ng-select", 19);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275template(39, AddAppointment_ng_template_39_Template, 4, 1, "ng-template", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "small", 18);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 17)(44, "label", 11);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementStart(47, "span", 18);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "ng-select", 21);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275template(52, AddAppointment_ng_template_52_Template, 4, 1, "ng-template", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "small", 18);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 9)(57, "div", 15)(58, "label", 11);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementStart(61, "span", 12);
      \u0275\u0275text(62, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(63, "input", 22);
      \u0275\u0275template(64, AddAppointment_div_64_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 15)(66, "label", 11);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementStart(69, "span", 12);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "ng-select", 23);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275listener("change", function AddAppointment_Template_ng_select_change_71_listener() {
        return ctx.onStartTimeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, AddAppointment_div_73_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 15)(75, "label", 11);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementStart(78, "span", 12);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "ng-select", 25);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275template(82, AddAppointment_div_82_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 9)(84, "div", 26)(85, "label", 11);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementStart(88, "span", 18);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "textarea", 27);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275text(93, "            ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, AddAppointment_div_94_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(95, "small", 18);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(98, AddAppointment_div_98_Template, 3, 1, "div", 28);
      \u0275\u0275elementStart(99, "div", 29)(100, "button", 30);
      \u0275\u0275listener("click", function AddAppointment_Template_button_click_100_listener() {
        return ctx.cancel();
      });
      \u0275\u0275element(101, "i", 31);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "button", 32);
      \u0275\u0275template(105, AddAppointment_span_105_Template, 1, 0, "span", 33)(106, AddAppointment_i_106_Template, 1, 0, "i", 34);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 56, "APPOINTMENTS_PAGE.APPOINTMENT_DETAILS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.appointmentForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 58, "APPOINTMENTS_PAGE.TITLE_LABEL"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("title"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 60, "APPOINTMENTS_PAGE.TITLE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 62, "APPOINTMENTS_PAGE.TYPE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.appointmentTypes)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(28, 64, "APPOINTMENTS_PAGE.SELECT_TYPE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 66, "APPOINTMENTS_PAGE.REGARDING_CHILD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(36, 68, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
      \u0275\u0275advance(2);
      \u0275\u0275property("items", ctx.children)("clearable", true)("placeholder", \u0275\u0275pipeBind1(38, 70, "APPOINTMENTS_PAGE.SELECT_CHILD"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 72, "APPOINTMENTS_PAGE.CHILD_HINT"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 74, "APPOINTMENTS_PAGE.PREFERRED_TEACHER"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(49, 76, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
      \u0275\u0275advance(2);
      \u0275\u0275property("items", ctx.teachers)("clearable", true)("placeholder", \u0275\u0275pipeBind1(51, 78, "APPOINTMENTS_PAGE.SELECT_TEACHER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 80, "APPOINTMENTS_PAGE.TEACHER_HINT"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 82, "APPOINTMENTS_PAGE.DATE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("appointmentDate"));
      \u0275\u0275property("min", ctx.minDate);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("appointmentDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 84, "APPOINTMENTS_PAGE.START_TIME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.timeSlots)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(72, 86, "APPOINTMENTS_PAGE.SELECT_TIME"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("startTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 88, "APPOINTMENTS_PAGE.END_TIME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.timeSlots)("clearable", false)("searchable", false)("placeholder", \u0275\u0275pipeBind1(81, 90, "APPOINTMENTS_PAGE.SELECT_TIME"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("endTime"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 92, "APPOINTMENTS_PAGE.DESCRIPTION"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(90, 94, "APPOINTMENTS_PAGE.OPTIONAL"), ")");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("description"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(92, 96, "APPOINTMENTS_PAGE.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("description"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 98, "APPOINTMENTS_PAGE.DESCRIPTION_HINT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(103, 100, "APPOINTMENTS_PAGE.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.submitting ? \u0275\u0275pipeBind1(108, 102, "APPOINTMENTS_PAGE.SUBMITTING") : \u0275\u0275pipeBind1(109, 104, "APPOINTMENTS_PAGE.BOOK_APPOINTMENT"), " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, ParentChildHeaderSimpleComponent, TranslatePipe], styles: ["\n\n.card-general[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control[_ngcontent-%COMP%], \n.ng-select[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.ng-select[_ngcontent-%COMP%]:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #6bc4b0;\n  border-color: #6bc4b0;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #a8e0d3;\n  border-color: #a8e0d3;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\nsmall.text-muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: block;\n  margin-top: 0.25rem;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option {\n  padding: 8px 12px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n/*# sourceMappingURL=add-appointment.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddAppointment, [{
    type: Component,
    args: [{ selector: "app-add-appointment", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, TitlePage, NgSelectModule, TranslateModule, ParentChildHeaderSimpleComponent], template: `\r
<app-parent-child-header-simple *ngIf="isParent"\r
  [title]="'APPOINTMENTS_PAGE.BOOK_APPOINTMENT' | translate"\r
>\r
</app-parent-child-header-simple>\r
<div class="container-fluid mt-4">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="'APPOINTMENTS_PAGE.BOOK_APPOINTMENT' | translate"\r
    [subtitle]="'APPOINTMENTS_PAGE.BOOK_APPOINTMENT_SUBTITLE' | translate"\r
    [icon]="'bi bi-calendar-plus'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="actions">\r
  </app-title-page>\r
\r
  <div class="card card-general">\r
    <div class="card-header">\r
      <h5 class="mb-0">\r
        <i class="bi bi-calendar-plus me-2"></i>\r
        {{ 'APPOINTMENTS_PAGE.APPOINTMENT_DETAILS' | translate }}\r
      </h5>\r
    </div>\r
    <div class="card-body">\r
      <form [formGroup]="appointmentForm" (ngSubmit)="submitAppointment()">\r
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
            <small class="text-muted">{{ 'APPOINTMENTS_PAGE.CHILD_HINT' | translate }}</small>\r
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
            <small class="text-muted">{{ 'APPOINTMENTS_PAGE.TEACHER_HINT' | translate }}</small>\r
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
            <small class="text-muted">{{ 'APPOINTMENTS_PAGE.DESCRIPTION_HINT' | translate }}</small>\r
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
          <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="cancel()">\r
            <i class="bi bi-x-lg me-2"></i>{{ 'APPOINTMENTS_PAGE.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="action-btn custom-btn-2 btn-add-global-2" [disabled]="submitting">\r
            <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!submitting" class="bi bi-calendar-check me-2"></i>\r
            {{ submitting ? ('APPOINTMENTS_PAGE.SUBMITTING' | translate) : ('APPOINTMENTS_PAGE.BOOK_APPOINTMENT' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/appointments/add-appointment/add-appointment.scss */\n.card-general {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general .card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general .card-header h5 {\n  font-weight: 600;\n  color: #333;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-muted {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control,\n.ng-select {\n  border-radius: 6px;\n}\n.form-control:focus,\n.ng-select:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.btn-primary {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n}\n.btn-primary:hover {\n  background-color: #6bc4b0;\n  border-color: #6bc4b0;\n}\n.btn-primary:disabled {\n  background-color: #a8e0d3;\n  border-color: #a8e0d3;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.invalid-feedback {\n  font-size: 0.85rem;\n}\nsmall.text-muted {\n  font-size: 0.8rem;\n  display: block;\n  margin-top: 0.25rem;\n}\n.ng-select ::ng-deep .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select ::ng-deep .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select ::ng-deep .ng-option {\n  padding: 8px 12px;\n}\n.ng-select ::ng-deep .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select ::ng-deep .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n/*# sourceMappingURL=add-appointment.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: AppointmentsService }, { type: ChildrenService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddAppointment, { className: "AddAppointment", filePath: "src/app/features/appointments/add-appointment/add-appointment.ts", lineNumber: 29 });
})();
export {
  AddAppointment
};
//# sourceMappingURL=chunk-DAQBBSI5.js.map
