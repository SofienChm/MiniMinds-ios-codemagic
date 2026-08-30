import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  NgLabelTemplateDirective,
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
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/leaves/add-leave.ts
function AddLeave_div_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function AddLeave_div_4_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
function AddLeave_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "form", 6);
    \u0275\u0275listener("ngSubmit", function AddLeave_div_4_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitTeacherLeave());
    });
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "label", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_4_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeave.startDate, $event) || (ctx_r1.newLeave.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_4_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeave.endDate, $event) || (ctx_r1.newLeave.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "label", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "ng-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_4_Template_ng_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeave.leaveType, $event) || (ctx_r1.newLeave.leaveType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "label", 9);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 15);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_4_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLeave.reason, $event) || (ctx_r1.newLeave.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, AddLeave_div_4_div_31_Template, 3, 1, "div", 16);
    \u0275\u0275elementStart(32, "div", 17)(33, "button", 18);
    \u0275\u0275listener("click", function AddLeave_div_4_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 19);
    \u0275\u0275template(37, AddLeave_div_4_span_37_Template, 1, 0, "span", 20);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 19, "LEAVES_PAGE.REQUEST_LEAVE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 21, "LEAVES_PAGE.START_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeave.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 23, "LEAVES_PAGE.END_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeave.endDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 25, "LEAVES_PAGE.LEAVE_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeave.leaveType);
    \u0275\u0275property("items", ctx_r1.leaveTypeOptions)("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "LEAVES_PAGE.REASON"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLeave.reason);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 29, "LEAVES_PAGE.REASON_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 31, "LEAVES_PAGE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? \u0275\u0275pipeBind1(39, 33, "LEAVES_PAGE.SUBMITTING") : \u0275\u0275pipeBind1(40, 35, "LEAVES_PAGE.SUBMIT_REQUEST"), " ");
  }
}
function AddLeave_div_5_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r4.firstName, " ", item_r4.lastName, " ");
  }
}
function AddLeave_div_5_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275textInterpolate3(" ", item_r5.firstName, " ", item_r5.lastName, " (", item_r5.email, ") ");
  }
}
function AddLeave_div_5_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.adminError, " ");
  }
}
function AddLeave_div_5_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
function AddLeave_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "form", 6);
    \u0275\u0275listener("ngSubmit", function AddLeave_div_5_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAdminLeave());
    });
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "label", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ng-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_ng_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminNewLeave.leaveType, $event) || (ctx_r1.adminNewLeave.leaveType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "label", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ng-select", 25);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_ng_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminSelectedTeacherId, $event) || (ctx_r1.adminSelectedTeacherId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, AddLeave_div_5_ng_template_21_Template, 1, 2, "ng-template", 26)(22, AddLeave_div_5_ng_template_22_Template, 1, 3, "ng-template", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 8)(24, "label", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminNewLeave.startDate, $event) || (ctx_r1.adminNewLeave.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label", 9);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminNewLeave.endDate, $event) || (ctx_r1.adminNewLeave.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 14)(34, "label", 9);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 30);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminNewLeave.reason, $event) || (ctx_r1.adminNewLeave.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "div", 31)(41, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AddLeave_div_5_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.adminApprove, $event) || (ctx_r1.adminApprove = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label", 33);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(45, AddLeave_div_5_div_45_Template, 3, 1, "div", 16);
    \u0275\u0275elementStart(46, "div", 17)(47, "button", 18);
    \u0275\u0275listener("click", function AddLeave_div_5_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 19);
    \u0275\u0275template(51, AddLeave_div_5_span_51_Template, 1, 0, "span", 20);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 26, "LEAVES_PAGE.ADD_LEAVE_FOR_TEACHER"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 28, "LEAVES_PAGE.LEAVE_TYPE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminNewLeave.leaveType);
    \u0275\u0275property("items", ctx_r1.leaveTypeOptions)("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 30, "LEAVES_PAGE.TEACHER"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminSelectedTeacherId);
    \u0275\u0275property("items", ctx_r1.teachers)("placeholder", \u0275\u0275pipeBind1(20, 32, "LEAVES_PAGE.SELECT_TEACHER"))("clearable", false);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 34, "LEAVES_PAGE.START_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminNewLeave.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 36, "LEAVES_PAGE.END_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminNewLeave.endDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 38, "LEAVES_PAGE.REASON"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminNewLeave.reason);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 40, "LEAVES_PAGE.REASON_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.adminApprove);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 42, "LEAVES_PAGE.APPROVE_IMMEDIATELY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.adminError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.adminSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 44, "LEAVES_PAGE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.adminSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.adminSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.adminSubmitting ? \u0275\u0275pipeBind1(53, 46, "LEAVES_PAGE.ADDING") : \u0275\u0275pipeBind1(54, 48, "LEAVES_PAGE.ADD_LEAVE"), " ");
  }
}
var AddLeave = class _AddLeave {
  authService;
  leavesService;
  educatorService;
  router;
  translateService;
  pageTitleService;
  isAdmin = false;
  isTeacher = false;
  breadcrumbs = [];
  actions = [];
  langChangeSub;
  // Leave type options for ng-select
  leaveTypeOptions = [];
  // Teacher form
  newLeave = { startDate: "", endDate: "", reason: "", leaveType: "Annual" };
  submitting = false;
  errorMessage = "";
  // Admin form
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
  cancel() {
    this.router.navigate(["/leaves"]);
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("LEAVES_PAGE.ADD_LEAVE"));
    this.isAdmin = this.authService.isAdmin();
    this.isTeacher = this.authService.isTeacher();
    if (this.isAdmin) {
      this.loadTeachers();
    }
    this.updateTranslatedContent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("LEAVES_PAGE.ADD_LEAVE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("LEAVES_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("LEAVES_PAGE.LEAVES"), url: "/leaves" },
      { label: this.translateService.instant("LEAVES_PAGE.ADD") }
    ];
    this.actions = [
      {
        label: this.translateService.instant("LEAVES_PAGE.BACK_TO_LEAVES"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.cancel()
      }
    ];
    this.leaveTypeOptions = [
      { value: "Annual", label: this.translateService.instant("LEAVES_PAGE.ANNUAL_LEAVE") },
      { value: "Medical", label: this.translateService.instant("LEAVES_PAGE.MEDICAL_LEAVE") },
      { value: "Emergency", label: this.translateService.instant("LEAVES_PAGE.EMERGENCY_LEAVE") }
    ];
  }
  loadTeachers() {
    this.educatorService.loadEducators().subscribe({
      next: (list) => this.teachers = list || [],
      error: () => this.teachers = []
    });
  }
  submitTeacherLeave() {
    this.errorMessage = "";
    this.submitting = true;
    const { startDate, endDate, reason } = this.newLeave;
    if (!startDate || !endDate) {
      this.errorMessage = this.translateService.instant("LEAVES_PAGE.DATES_REQUIRED");
      this.submitting = false;
      return;
    }
    this.leavesService.requestLeave({ startDate, endDate, reason: (reason || "").trim(), leaveType: this.newLeave.leaveType }).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(["/leaves"]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("LEAVES_PAGE.FAILED_SUBMIT_REQUEST");
        this.submitting = false;
      }
    });
  }
  submitAdminLeave() {
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
        this.adminSubmitting = false;
        this.router.navigate(["/leaves"]);
      },
      error: (err) => {
        this.adminError = err.error?.message || this.translateService.instant("LEAVES_PAGE.FAILED_CREATE_LEAVE");
        this.adminSubmitting = false;
      }
    });
  }
  static \u0275fac = function AddLeave_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddLeave)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LeavesService), \u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddLeave, selectors: [["app-add-leave"]], decls: 6, vars: 10, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-calendar-x", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "card card-general", 4, "ngIf"], [1, "card", "card-general"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "date", "name", "startDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "endDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["bindLabel", "label", "bindValue", "value", "name", "leaveType", "required", "", 1, "custom-ng-select", 3, "ngModelChange", "ngModel", "items", "clearable", "searchable"], [1, "col-12", "mb-3"], ["name", "reason", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-flex", "gap-2", "float-right"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "col-6", "mb-3"], ["bindLabel", "firstName", "bindValue", "id", "name", "teacherId", "required", "", 1, "custom-ng-select", 3, "ngModelChange", "ngModel", "items", "placeholder", "clearable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "date", "name", "adminStartDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "adminEndDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "adminReason", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-check"], ["type", "checkbox", "name", "adminApprove", "id", "adminApprove", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "adminApprove", 1, "form-check-label"]], template: function AddLeave_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, AddLeave_div_4_Template, 41, 37, "div", 2)(5, AddLeave_div_5_Template, 55, 50, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 6, "LEAVES_PAGE.ADD_LEAVE"))("subtitle", \u0275\u0275pipeBind1(3, 8, "LEAVES_PAGE.ADD_LEAVE_SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.actions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isTeacher);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, TranslateModule, TranslatePipe], styles: ["\n\n.form-select[_ngcontent-%COMP%] {\n  border-color: #E9EDF4;\n  color: #202C4B;\n  background-color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.6;\n  border-radius: 5px;\n  padding: 0.5rem 0.625rem;\n  height: 38px;\n  transition: all 0.5s;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  border-color: #E9EDF4;\n  cursor: pointer;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #506EE4;\n  border-color: #506EE4;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #202C4B;\n  cursor: pointer;\n}\n.alert[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=add-leave.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddLeave, [{
    type: Component,
    args: [{ selector: "app-add-leave", standalone: true, imports: [CommonModule, FormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'LEAVES_PAGE.ADD_LEAVE' | translate"\r
    [subtitle]="'LEAVES_PAGE.ADD_LEAVE_SUBTITLE' | translate"\r
    icon="bi bi-calendar-x"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="actions">\r
  </app-title-page>\r
\r
  <!-- Teacher Add Leave Form -->\r
  <div *ngIf="isTeacher" class="card card-general">\r
    <div class="card-header">\r
      <h5>{{ 'LEAVES_PAGE.REQUEST_LEAVE' | translate }}</h5>\r
    </div>\r
    <div class="card-body">\r
      <form (ngSubmit)="submitTeacherLeave()">\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.START_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="newLeave.startDate" name="startDate" required />\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.END_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="newLeave.endDate" name="endDate" required />\r
          </div>\r
          <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.LEAVE_TYPE' | translate }} <span class="text-danger">*</span></label>\r
              <ng-select\r
                class="custom-ng-select"\r
                [(ngModel)]="newLeave.leaveType"\r
                [items]="leaveTypeOptions"\r
                bindLabel="label"\r
                bindValue="value"\r
                [clearable]="false"\r
                [searchable]="false"\r
                name="leaveType"\r
                required>\r
              </ng-select>\r
          </div>\r
          <div class="col-12 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.REASON' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="newLeave.reason" name="reason" rows="3" [placeholder]="'LEAVES_PAGE.REASON_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
        </div>\r
        <div *ngIf="errorMessage" class="alert alert-danger" role="alert">\r
          <i class="bi bi-exclamation-triangle me-2"></i>{{ errorMessage }}\r
        </div>\r
        <div class="d-flex gap-2 float-right">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="submitting">{{ 'LEAVES_PAGE.CANCEL' | translate }}</button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="submitting">\r
            <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ submitting ? ('LEAVES_PAGE.SUBMITTING' | translate) : ('LEAVES_PAGE.SUBMIT_REQUEST' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- Admin Add Leave for Teacher -->\r
  <div *ngIf="isAdmin" class="card card-general">\r
    <div class="card-header">\r
      <h5>{{ 'LEAVES_PAGE.ADD_LEAVE_FOR_TEACHER' | translate }}</h5>\r
    </div>\r
    <div class="card-body">\r
      <form (ngSubmit)="submitAdminLeave()">\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'LEAVES_PAGE.LEAVE_TYPE' | translate }} <span class="text-danger">*</span></label>\r
              <ng-select\r
                class="custom-ng-select"\r
                [(ngModel)]="adminNewLeave.leaveType"\r
                [items]="leaveTypeOptions"\r
                bindLabel="label"\r
                bindValue="value"\r
                [clearable]="false"\r
                [searchable]="false"\r
                name="leaveType"\r
                required>\r
              </ng-select>\r
            </div>\r
          <div class="col-6 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.TEACHER' | translate }} *</label>\r
            <ng-select\r
              class="custom-ng-select"\r
              [(ngModel)]="adminSelectedTeacherId"\r
              [items]="teachers"\r
              bindLabel="firstName"\r
              bindValue="id"\r
              [placeholder]="'LEAVES_PAGE.SELECT_TEACHER' | translate"\r
              [clearable]="false"\r
              name="teacherId"\r
              required>\r
              <ng-template ng-label-tmp let-item="item">\r
                {{ item.firstName }} {{ item.lastName }}\r
              </ng-template>\r
              <ng-template ng-option-tmp let-item="item">\r
                {{ item.firstName }} {{ item.lastName }} ({{ item.email }})\r
              </ng-template>\r
            </ng-select>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.START_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="adminNewLeave.startDate" name="adminStartDate" required />\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.END_DATE' | translate }} *</label>\r
            <input type="date" class="form-control" [(ngModel)]="adminNewLeave.endDate" name="adminEndDate" required />\r
          </div>\r
          <div class="col-12 mb-3">\r
            <label class="form-label">{{ 'LEAVES_PAGE.REASON' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="adminNewLeave.reason" name="adminReason" rows="3" [placeholder]="'LEAVES_PAGE.REASON_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
          <div class="col-12 mb-3">\r
            <div class="form-check">\r
              <input class="form-check-input" type="checkbox" [(ngModel)]="adminApprove" name="adminApprove" id="adminApprove" />\r
              <label class="form-check-label" for="adminApprove">\r
                {{ 'LEAVES_PAGE.APPROVE_IMMEDIATELY' | translate }}\r
              </label>\r
            </div>\r
          </div>\r
        </div>\r
        <div *ngIf="adminError" class="alert alert-danger" role="alert">\r
          <i class="bi bi-exclamation-triangle me-2"></i>{{ adminError }}\r
        </div>\r
        <div class="d-flex gap-2 float-right">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="adminSubmitting">{{ 'LEAVES_PAGE.CANCEL' | translate }}</button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="adminSubmitting">\r
            <span *ngIf="adminSubmitting" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ adminSubmitting ? ('LEAVES_PAGE.ADDING' | translate) : ('LEAVES_PAGE.ADD_LEAVE' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/leaves/add-leave.scss */\n.form-select {\n  border-color: #E9EDF4;\n  color: #202C4B;\n  background-color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.6;\n  border-radius: 5px;\n  padding: 0.5rem 0.625rem;\n  height: 38px;\n  transition: all 0.5s;\n}\n.form-check-input {\n  border-color: #E9EDF4;\n  cursor: pointer;\n}\n.form-check-input:checked {\n  background-color: #506EE4;\n  border-color: #506EE4;\n}\n.form-check-label {\n  font-size: 14px;\n  font-weight: 400;\n  color: #202C4B;\n  cursor: pointer;\n}\n.alert {\n  font-size: 14px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=add-leave.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: LeavesService }, { type: EducatorService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddLeave, { className: "AddLeave", filePath: "src/app/features/leaves/add-leave.ts", lineNumber: 22 });
})();
export {
  AddLeave
};
//# sourceMappingURL=chunk-FFIZQQ2H.js.map
