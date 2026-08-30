import {
  ClassesService
} from "./chunk-J7YF57MV.js";
import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
import {
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/classes/classes.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ClassesComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 16)(18, "button", 17);
    \u0275\u0275listener("click", function ClassesComponent_tr_35_Template_button_click_18_listener() {
      const class_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDetail(class_r2));
    });
    \u0275\u0275element(19, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 19);
    \u0275\u0275listener("click", function ClassesComponent_tr_35_Template_button_click_20_listener() {
      const class_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editClass(class_r2));
    });
    \u0275\u0275element(21, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275listener("click", function ClassesComponent_tr_35_Template_button_click_22_listener() {
      const class_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails(class_r2.id));
    });
    \u0275\u0275element(23, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275listener("click", function ClassesComponent_tr_35_Template_button_click_24_listener() {
      const class_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteClass(class_r2.id));
    });
    \u0275\u0275element(25, "i", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const class_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(class_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", class_r2.ageGroupMin, " - ", class_r2.ageGroupMax, " ", \u0275\u0275pipeBind1(5, 10, "CLASSES.YEARS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", class_r2.enrollmentCount || 0, " / ", class_r2.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(class_r2.teacher ? class_r2.teacher.firstName + " " + class_r2.teacher.lastName : \u0275\u0275pipeBind1(10, 12, "CLASSES.NOT_ASSIGNED"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(class_r2.isActive ? "badge-success" : "badge-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", class_r2.isActive ? \u0275\u0275pipeBind1(14, 14, "CLASSES.ACTIVE") : \u0275\u0275pipeBind1(15, 16, "CLASSES.INACTIVE"), " ");
  }
}
function ClassesComponent_div_36_div_7_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "CLASSES.SCHEDULE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedClass.schedule);
  }
}
function ClassesComponent_div_36_div_7_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 3)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "CLASSES.DESCRIPTION"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedClass.description);
  }
}
function ClassesComponent_div_36_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "div", 36)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 35)(18, "div", 36)(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 36);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ClassesComponent_div_36_div_7_div_26_Template, 7, 4, "div", 37)(27, ClassesComponent_div_36_div_7_div_27_Template, 7, 4, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 11, "CLASSES.AGE_GROUP"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r2.selectedClass.ageGroupMin, " - ", ctx_r2.selectedClass.ageGroupMax, " ", \u0275\u0275pipeBind1(8, 13, "CLASSES.YEARS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 15, "CLASSES.CAPACITY"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedClass.capacity, " ", \u0275\u0275pipeBind1(16, 17, "CLASSES.STUDENTS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 19, "CLASSES.STATUS"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedClass.isActive ? \u0275\u0275pipeBind1(24, 21, "CLASSES.ACTIVE") : \u0275\u0275pipeBind1(25, 23, "CLASSES.INACTIVE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.selectedClass.schedule);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedClass.description);
  }
}
function ClassesComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "h5", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function ClassesComponent_div_36_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ClassesComponent_div_36_div_7_Template, 28, 25, "div", 31);
    \u0275\u0275elementStart(8, "div", 32)(9, "button", 33);
    \u0275\u0275listener("click", function ClassesComponent_div_36_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
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
    \u0275\u0275textInterpolate(ctx_r2.selectedClass == null ? null : ctx_r2.selectedClass.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedClass);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "CLASSES.CLOSE"));
  }
}
function ClassesComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.showDetailModal);
  }
}
function ClassesComponent_div_38_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const educator_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", educator_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", educator_r6.firstName, " ", educator_r6.lastName, " (", educator_r6.email, ") ");
  }
}
function ClassesComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 39)(2, "div", 27)(3, "div", 28)(4, "h5", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275listener("click", function ClassesComponent_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "form", 40);
    \u0275\u0275listener("ngSubmit", function ClassesComponent_div_38_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 34)(10, "div", 2)(11, "div", 41)(12, "label", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 41)(17, "label", 42);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 2)(22, "div", 41)(23, "label", 42);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41)(28, "label", 42);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 2)(33, "div", 47)(34, "label", 42);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 48)(38, "option", 49);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, ClassesComponent_div_38_option_41_Template, 2, 4, "option", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "small", 51);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 52)(46, "label", 42);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 53);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 52)(52, "label", 42);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "textarea", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 55);
    \u0275\u0275element(57, "input", 56);
    \u0275\u0275elementStart(58, "label", 57);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 32)(62, "button", 33);
    \u0275\u0275listener("click", function ClassesComponent_div_38_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEditModal());
    });
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 58);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r2.showEditModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showEditModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 22, "CLASSES.EDIT_CLASS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.classForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 24, "CLASSES.CLASS_NAME"), " *");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 26, "CLASSES.CAPACITY"), " *");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 28, "CLASSES.AGE_GROUP_MIN"), " *");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 30, "CLASSES.AGE_GROUP_MAX"), " *");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 32, "CLASSES.ASSIGN_TEACHER_OPTIONAL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 34, "CLASSES.NO_TEACHER_ASSIGNED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.educators);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 36, "CLASSES.TEACHER_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 38, "CLASSES.SCHEDULE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(50, 40, "CLASSES.SCHEDULE_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 42, "CLASSES.DESCRIPTION"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 44, "CLASSES.ACTIVE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 46, "CLASSES.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.classForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 48, "CLASSES.UPDATE_CLASS"));
  }
}
function ClassesComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.showEditModal);
  }
}
var ClassesComponent = class _ClassesComponent {
  classesService;
  educatorService;
  router;
  fb;
  translate;
  pageTitleService;
  classes = [];
  educators = [];
  selectedClass = null;
  showDetailModal = false;
  showEditModal = false;
  classForm;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  constructor(classesService, educatorService, router, fb, translate, pageTitleService) {
    this.classesService = classesService;
    this.educatorService = educatorService;
    this.router = router;
    this.fb = fb;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.classForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: [""],
      teacherId: [null],
      capacity: [20, [Validators.required, Validators.min(1)]],
      ageGroupMin: [2, [Validators.required, Validators.min(0)]],
      ageGroupMax: [5, [Validators.required, Validators.min(0)]],
      schedule: [""],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("CLASSES.TITLE"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.loadClasses();
    this.loadEducators();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("CLASSES.TITLE"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  loadEducators() {
    this.educatorService.loadEducators().subscribe({
      next: (educators) => this.educators = educators,
      error: (error) => console.error("Error loading educators:", error)
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("CLASSES.TITLE") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("CLASSES.ADD_CLASS"),
        class: "btn-add-global-2",
        icon: "bi bi-plus-lg",
        action: () => this.addClass()
      }
    ];
  }
  loadClasses() {
    this.classesService.getClasses().subscribe({
      next: (classes) => this.classes = classes,
      error: (error) => console.error("Error loading classes:", error)
    });
  }
  showDetail(classItem) {
    this.selectedClass = classItem;
    this.showDetailModal = true;
  }
  closeModal() {
    this.showDetailModal = false;
    this.selectedClass = null;
  }
  editClass(classItem) {
    this.selectedClass = classItem;
    this.classForm.patchValue({
      name: classItem.name,
      description: classItem.description,
      teacherId: classItem.teacherId,
      capacity: classItem.capacity,
      ageGroupMin: classItem.ageGroupMin,
      ageGroupMax: classItem.ageGroupMax,
      schedule: classItem.schedule,
      isActive: classItem.isActive
    });
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.selectedClass = null;
    this.classForm.reset();
  }
  onSubmit() {
    if (this.classForm.valid && this.selectedClass?.id) {
      const updatedClass = __spreadProps(__spreadValues({}, this.classForm.value), { id: this.selectedClass.id });
      this.classesService.updateClass(this.selectedClass.id, updatedClass).subscribe({
        next: () => {
          this.closeEditModal();
          this.loadClasses();
          showSuccessToast(this.translate.instant("CLASSES.UPDATE_SUCCESS"));
        },
        error: (error) => {
          console.error("Error updating class:", error);
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("MESSAGES.ERROR"),
            text: this.translate.instant("CLASSES.UPDATE_ERROR")
          });
        }
      });
    }
  }
  deleteClass(id) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("CLASSES.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("CLASSES.YES_DELETE"),
      cancelButtonText: this.translate.instant("CLASSES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.classesService.deleteClass(id).subscribe({
          next: () => {
            this.loadClasses();
            import_sweetalert2.default.fire({
              icon: "success",
              title: this.translate.instant("CLASSES.DELETED"),
              text: this.translate.instant("CLASSES.DELETE_SUCCESS"),
              timer: 2e3,
              showConfirmButton: false
            });
          },
          error: (error) => {
            console.error("Error deleting class:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("CLASSES.DELETE_ERROR")
            });
          }
        });
      }
    });
  }
  addClass = () => {
    this.router.navigate(["/classes/add"]);
  };
  viewDetails(id) {
    this.router.navigate(["/classes/detail", id]);
  }
  static \u0275fac = function ClassesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassesComponent)(\u0275\u0275directiveInject(ClassesService), \u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassesComponent, selectors: [["app-classes"]], decls: 40, vars: 31, consts: [[1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], [1, "row"], [1, "col-12"], [1, "card", "card-general"], [1, "card-header"], [1, "bi", "bi-backpack2"], [1, "mb-0"], [1, "card-body"], [1, "table-responsive", "custom-table"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "modal fade", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "name-last"], [1, "badge"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-active", 3, "click"], [1, "bi", "bi-info-circle"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], [1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-6"], ["class", "row mb-3", 4, "ngIf"], [1, "modal-backdrop", "fade"], [1, "modal-dialog", "modal-lg"], [3, "ngSubmit", "formGroup"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "number", "formControlName", "capacity", 1, "form-control"], ["type", "number", "formControlName", "ageGroupMin", 1, "form-control"], ["type", "number", "formControlName", "ageGroupMax", 1, "form-control"], [1, "col-md-12", "mb-3"], ["formControlName", "teacherId", 1, "form-select"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-text", "text-muted"], [1, "mb-3"], ["type", "text", "formControlName", "schedule", 1, "form-control", 3, "placeholder"], ["formControlName", "description", "rows", "3", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"]], template: function ClassesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementStart(8, "h5", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "table", 10)(14, "thead")(15, "tr")(16, "th");
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ClassesComponent_tr_35_Template, 26, 18, "tr", 11);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275template(36, ClassesComponent_div_36_Template, 12, 9, "div", 12)(37, ClassesComponent_div_37_Template, 1, 2, "div", 13)(38, ClassesComponent_div_38_Template, 68, 50, "div", 12)(39, ClassesComponent_div_39_Template, 1, 2, "div", 13);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 15, "CLASSES.TITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "CLASSES.ALL_CLASSES"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 19, "CLASSES.CLASS_NAME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 21, "CLASSES.AGE_GROUP"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "CLASSES.CAPACITY"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, "CLASSES.TEACHER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "CLASSES.STATUS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 29, "CLASSES.ACTIONS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, TitlePage, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], styles: ["\n\n.title-table[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #202C4B;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background-color: rgba(26, 190, 23, 0.1);\n  color: #1ABE17;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  background-color: rgba(108, 117, 125, 0.1);\n  color: #6c757d;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7dd3c0;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=classes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassesComponent, [{
    type: Component,
    args: [{ selector: "app-classes", standalone: true, imports: [CommonModule, RouterModule, TitlePage, ReactiveFormsModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'CLASSES.TITLE' | translate"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <i class="bi bi-backpack2"></i>\r
          <h5 class="mb-0">{{ 'CLASSES.ALL_CLASSES' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="table-responsive custom-table">\r
            <table class="table">\r
              <thead>\r
                <tr>\r
                  <th>{{ 'CLASSES.CLASS_NAME' | translate }}</th>\r
                  <th>{{ 'CLASSES.AGE_GROUP' | translate }}</th>\r
                  <th>{{ 'CLASSES.CAPACITY' | translate }}</th>\r
                  <th>{{ 'CLASSES.TEACHER' | translate }}</th>\r
                  <th>{{ 'CLASSES.STATUS' | translate }}</th>\r
                  <th>{{ 'CLASSES.ACTIONS' | translate }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let class of classes">\r
                  <td class="name-last">{{ class.name }}</td>\r
                  <td>{{ class.ageGroupMin }} - {{ class.ageGroupMax }} {{ 'CLASSES.YEARS' | translate }}</td>\r
                  <td>{{ class.enrollmentCount || 0 }} / {{ class.capacity }}</td>\r
                  <td>{{ class.teacher ? class.teacher.firstName + ' ' + class.teacher.lastName : ('CLASSES.NOT_ASSIGNED' | translate) }}</td>\r
                  <td>\r
                    <span class="badge" [class]="class.isActive ? 'badge-success' : 'badge-secondary'">\r
                      {{ class.isActive ? ('CLASSES.ACTIVE' | translate) : ('CLASSES.INACTIVE' | translate) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex gap-1">\r
                      <button class="btn btn-sm btn-view" (click)="showDetail(class)">\r
                        <i class="bi bi-eye"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-edit" (click)="editClass(class)">\r
                        <i class="bi bi-pencil-square"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-active" (click)="viewDetails(class.id!)">\r
                        <i class="bi bi-info-circle"></i>\r
                      </button>\r
                      <button class="btn btn-sm btn-remove" (click)="deleteClass(class.id!)">\r
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
    </div>\r
  </div>\r
</div>\r
\r
<!-- Detail Modal -->\r
<div class="modal fade" [class.show]="showDetailModal" [style.display]="showDetailModal ? 'block' : 'none'" *ngIf="showDetailModal">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ selectedClass?.name }}</h5>\r
        <button type="button" class="btn-close" (click)="closeModal()"></button>\r
      </div>\r
      <div class="modal-body" *ngIf="selectedClass">\r
        <div class="row mb-3">\r
          <div class="col-6"><strong>{{ 'CLASSES.AGE_GROUP' | translate }}:</strong></div>\r
          <div class="col-6">{{ selectedClass.ageGroupMin }} - {{ selectedClass.ageGroupMax }} {{ 'CLASSES.YEARS' | translate }}</div>\r
        </div>\r
        <div class="row mb-3">\r
          <div class="col-6"><strong>{{ 'CLASSES.CAPACITY' | translate }}:</strong></div>\r
          <div class="col-6">{{ selectedClass.capacity }} {{ 'CLASSES.STUDENTS' | translate }}</div>\r
        </div>\r
        <div class="row mb-3">\r
          <div class="col-6"><strong>{{ 'CLASSES.STATUS' | translate }}:</strong></div>\r
          <div class="col-6">{{ selectedClass.isActive ? ('CLASSES.ACTIVE' | translate) : ('CLASSES.INACTIVE' | translate) }}</div>\r
        </div>\r
        <div class="row mb-3" *ngIf="selectedClass.schedule">\r
          <div class="col-6"><strong>{{ 'CLASSES.SCHEDULE' | translate }}:</strong></div>\r
          <div class="col-6">{{ selectedClass.schedule }}</div>\r
        </div>\r
        <div class="row mb-3" *ngIf="selectedClass.description">\r
          <div class="col-12"><strong>{{ 'CLASSES.DESCRIPTION' | translate }}:</strong></div>\r
          <div class="col-12">{{ selectedClass.description }}</div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="custom-btn-2 btn-cancel-2" (click)="closeModal()">{{ 'CLASSES.CLOSE' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showDetailModal" *ngIf="showDetailModal"></div>\r
\r
<!-- Edit Modal -->\r
<div class="modal fade" [class.show]="showEditModal" [style.display]="showEditModal ? 'block' : 'none'" *ngIf="showEditModal">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'CLASSES.EDIT_CLASS' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="closeEditModal()"></button>\r
      </div>\r
      <form [formGroup]="classForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'CLASSES.CLASS_NAME' | translate }} *</label>\r
              <input type="text" class="form-control" formControlName="name">\r
            </div>\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'CLASSES.CAPACITY' | translate }} *</label>\r
              <input type="number" class="form-control" formControlName="capacity">\r
            </div>\r
          </div>\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'CLASSES.AGE_GROUP_MIN' | translate }} *</label>\r
              <input type="number" class="form-control" formControlName="ageGroupMin">\r
            </div>\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label">{{ 'CLASSES.AGE_GROUP_MAX' | translate }} *</label>\r
              <input type="number" class="form-control" formControlName="ageGroupMax">\r
            </div>\r
          </div>\r
          <div class="row">\r
            <div class="col-md-12 mb-3">\r
              <label class="form-label">{{ 'CLASSES.ASSIGN_TEACHER_OPTIONAL' | translate }}</label>\r
              <select class="form-select" formControlName="teacherId">\r
                <option [ngValue]="null">{{ 'CLASSES.NO_TEACHER_ASSIGNED' | translate }}</option>\r
                <option *ngFor="let educator of educators" [ngValue]="educator.id">\r
                  {{ educator.firstName }} {{ educator.lastName }} ({{ educator.email }})\r
                </option>\r
              </select>\r
              <small class="form-text text-muted">{{ 'CLASSES.TEACHER_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'CLASSES.SCHEDULE' | translate }}</label>\r
            <input type="text" class="form-control" formControlName="schedule" [placeholder]="'CLASSES.SCHEDULE_PLACEHOLDER' | translate">\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'CLASSES.DESCRIPTION' | translate }}</label>\r
            <textarea class="form-control" formControlName="description" rows="3"></textarea>\r
          </div>\r
          <div class="form-check">\r
            <input class="form-check-input" type="checkbox" formControlName="isActive" id="isActive">\r
            <label class="form-check-label" for="isActive">{{ 'CLASSES.ACTIVE' | translate }}</label>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="closeEditModal()">{{ 'CLASSES.CANCEL' | translate }}</button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="classForm.invalid">{{ 'CLASSES.UPDATE_CLASS' | translate }}</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showEditModal" *ngIf="showEditModal"></div>\r
`, styles: ["/* src/app/features/classes/classes.component.scss */\n.title-table {\n  font-weight: 500;\n  color: #202C4B;\n}\n.badge-success {\n  background-color: rgba(26, 190, 23, 0.1);\n  color: #1ABE17;\n}\n.badge-secondary {\n  background-color: rgba(108, 117, 125, 0.1);\n  color: #6c757d;\n}\n.card-general .card-header {\n  display: flex;\n  align-items: center;\n}\n.card-general .card-header i {\n  font-size: 22px;\n  color: #7dd3c0;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=classes.component.css.map */\n"] }]
  }], () => [{ type: ClassesService }, { type: EducatorService }, { type: Router }, { type: FormBuilder }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassesComponent, { className: "ClassesComponent", filePath: "src/app/features/classes/classes.component.ts", lineNumber: 23 });
})();
export {
  ClassesComponent
};
//# sourceMappingURL=chunk-3HFWSSVU.js.map
