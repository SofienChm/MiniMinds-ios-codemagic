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
  FeeService
} from "./chunk-4QI4UUMP.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/fee/add-fee/add-fee.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function AddFeeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADD_FEE.LOADING"));
  }
}
function AddFeeComponent_div_6_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "img", 43);
    \u0275\u0275elementStart(2, "div", 44)(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r3 == null ? null : item_r3.profilePicture) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r3.firstName, " ", item_r3.lastName);
  }
}
function AddFeeComponent_div_6_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "img", 48);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r4 == null ? null : item_r4.profilePicture) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.firstName, " ", item_r4.lastName);
  }
}
function AddFeeComponent_div_6_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddFeeComponent_div_6_ng_template_19_div_0_Template, 4, 3, "div", 46);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275property("ngIf", item_r4 == null ? null : item_r4.id);
  }
}
function AddFeeComponent_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("childId"), " ");
  }
}
function AddFeeComponent_div_6_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("amount"), " ");
  }
}
function AddFeeComponent_div_6_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function AddFeeComponent_div_6_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("dueDate"), " ");
  }
}
function AddFeeComponent_div_6_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r5.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.label);
  }
}
function AddFeeComponent_div_6_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("feeType"), " ");
  }
}
function AddFeeComponent_div_6_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("notes"), " ");
  }
}
function AddFeeComponent_div_6_span_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 52);
  }
}
function AddFeeComponent_div_6_i_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 53);
  }
}
function AddFeeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function AddFeeComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createFee());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11);
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "label", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275element(15, "i", 17);
    \u0275\u0275elementStart(16, "ng-select", 18);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275template(18, AddFeeComponent_div_6_ng_template_18_Template, 5, 3, "ng-template", 19)(19, AddFeeComponent_div_6_ng_template_19_Template, 1, 1, "ng-template", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AddFeeComponent_div_6_div_20_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14)(22, "label", 15);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16);
    \u0275\u0275element(27, "i", 22)(28, "input", 23);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AddFeeComponent_div_6_div_30_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 24)(32, "label", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 16);
    \u0275\u0275element(37, "i", 25)(38, "input", 26);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, AddFeeComponent_div_6_div_40_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 10)(42, "div", 11);
    \u0275\u0275element(43, "i", 27);
    \u0275\u0275elementStart(44, "h4");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 13)(48, "div", 14)(49, "label", 15);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 16);
    \u0275\u0275element(54, "i", 28)(55, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, AddFeeComponent_div_6_div_56_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 14)(58, "label", 15);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 16);
    \u0275\u0275element(63, "i", 30);
    \u0275\u0275elementStart(64, "ng-select", 31);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275template(66, AddFeeComponent_div_6_ng_template_66_Template, 4, 4, "ng-template", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, AddFeeComponent_div_6_div_67_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 10)(69, "div", 11);
    \u0275\u0275element(70, "i", 32);
    \u0275\u0275elementStart(71, "h4");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 13)(75, "div", 33)(76, "label", 15);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 16);
    \u0275\u0275element(80, "i", 34)(81, "textarea", 35);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(83, AddFeeComponent_div_6_div_83_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 36)(85, "button", 37);
    \u0275\u0275listener("click", function AddFeeComponent_div_6_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(86, "i", 38);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 39);
    \u0275\u0275template(90, AddFeeComponent_div_6_span_90_Template, 1, 0, "span", 40)(91, AddFeeComponent_div_6_i_91_Template, 1, 0, "i", 41);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.feeForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 50, "ADD_FEE.FEE_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 52, "ADD_FEE.CHILD"), " ", \u0275\u0275pipeBind1(13, 54, "ADD_FEE.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("childId"));
    \u0275\u0275property("items", ctx_r1.children)("placeholder", \u0275\u0275pipeBind1(17, 56, "ADD_FEE.SELECT_CHILD"))("clearable", true)("searchable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("childId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(24, 58, "ADD_FEE.AMOUNT"), " ", \u0275\u0275pipeBind1(25, 60, "ADD_FEE.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("amount"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 62, "ADD_FEE.AMOUNT_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(34, 64, "ADD_FEE.DESCRIPTION"), " ", \u0275\u0275pipeBind1(35, 66, "ADD_FEE.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 68, "ADD_FEE.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 70, "ADD_FEE.PAYMENT_DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(51, 72, "ADD_FEE.DUE_DATE"), " ", \u0275\u0275pipeBind1(52, 74, "ADD_FEE.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("dueDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("dueDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(60, 76, "ADD_FEE.FEE_TYPE"), " ", \u0275\u0275pipeBind1(61, 78, "ADD_FEE.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("feeType"));
    \u0275\u0275property("items", ctx_r1.feeTypes)("placeholder", \u0275\u0275pipeBind1(65, 80, "ADD_FEE.SELECT_FEE_TYPE"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("feeType"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 82, "ADD_FEE.ADDITIONAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 84, "ADD_FEE.NOTES"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("notes"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(82, 86, "ADD_FEE.NOTES_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("notes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 88, "ADD_FEE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.feeForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(93, 90, "ADD_FEE.CREATING") : \u0275\u0275pipeBind1(94, 92, "ADD_FEE.CREATE_FEE"), " ");
  }
}
var AddFeeComponent = class _AddFeeComponent {
  fb;
  router;
  feeService;
  childrenService;
  translate;
  pageTitleService;
  feeForm;
  children = [];
  loading = false;
  saving = false;
  langChangeSub;
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  feeTypes = [];
  constructor(fb, router, feeService, childrenService, translate, pageTitleService) {
    this.fb = fb;
    this.router = router;
    this.feeService = feeService;
    this.childrenService = childrenService;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("ADD_FEE.TITLE"));
    this.updateTranslatedContent();
    this.initForm();
    this.loadChildren();
    this.setDefaultDueDate();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translate.instant("ADD_FEE.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translate.instant("ADD_FEE.FEES"), url: "/fees" },
      { label: this.translate.instant("ADD_FEE.ADD_FEE") }
    ];
    this.titleActions = [
      {
        label: this.translate.instant("ADD_FEE.BACK_TO_FEES"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.cancel()
      }
    ];
    this.feeTypes = [
      { value: "monthly", label: this.translate.instant("ADD_FEE.MONTHLY"), icon: "bi-calendar-month" },
      { value: "one-time", label: this.translate.instant("ADD_FEE.ONE_TIME"), icon: "bi-1-circle" },
      { value: "late-fee", label: this.translate.instant("ADD_FEE.LATE_FEE"), icon: "bi-exclamation-circle" }
    ];
  }
  initForm() {
    this.feeForm = this.fb.group({
      childId: [null, [Validators.required, Validators.min(1)]],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      description: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      dueDate: ["", [Validators.required]],
      feeType: ["monthly", [Validators.required]],
      notes: ["", [Validators.maxLength(500)]]
    });
  }
  loadChildren() {
    this.loading = true;
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading children:", error);
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("MESSAGES.LOAD_CHILDREN_ERROR")
        });
      }
    });
  }
  setDefaultDueDate() {
    const nextMonth = /* @__PURE__ */ new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);
    this.feeForm.patchValue({
      dueDate: nextMonth.toISOString().split("T")[0]
    });
  }
  createFee() {
    if (this.feeForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const feeData = this.feeForm.value;
    this.feeService.createFee(feeData).subscribe({
      next: () => {
        this.saving = false;
        import_sweetalert2.default.fire({
          icon: "success",
          title: this.translate.instant("MESSAGES.SUCCESS"),
          text: this.translate.instant("ADD_FEE.CREATE_SUCCESS")
        }).then(() => {
          this.router.navigate(["/fees"]);
        });
      },
      error: (error) => {
        this.saving = false;
        console.error("Error creating fee:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("ADD_FEE.CREATE_ERROR")
        });
      }
    });
  }
  markFormGroupTouched() {
    Object.values(this.feeForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  cancel() {
    if (this.feeForm.dirty) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("MESSAGES.UNSAVED_CHANGES"),
        text: this.translate.instant("MESSAGES.UNSAVED_CHANGES_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("MESSAGES.YES_LEAVE"),
        cancelButtonText: this.translate.instant("MESSAGES.STAY")
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/fees"]);
        }
      });
    } else {
      this.router.navigate(["/fees"]);
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.feeForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.feeForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return this.translate.instant("VALIDATION.MIN_LENGTH", { length: minLength });
    }
    if (field.errors["maxlength"]) {
      const maxLength = field.errors["maxlength"].requiredLength;
      return this.translate.instant("VALIDATION.MAX_LENGTH", { length: maxLength });
    }
    if (field.errors["min"]) {
      return this.translate.instant("VALIDATION.MIN_VALUE");
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  static \u0275fac = function AddFeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddFeeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddFeeComponent, selectors: [["app-add-fee"]], decls: 7, vars: 10, consts: [[1, "add-fee-container"], [1, "container-fluid", "mt-4", "mb-4"], ["icon", "bi bi-plus-circle", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card-add-pages", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-cash-coin"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["formControlName", "childId", "bindLabel", "firstName", "bindValue", "id", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], ["class", "error-message", 4, "ngIf"], [1, "bi", "bi-currency-dollar", "input-icon"], ["type", "number", "formControlName", "amount", "step", "0.01", "min", "0", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-card-text", "input-icon"], ["type", "text", "formControlName", "description", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-credit-card"], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dueDate", 1, "form-input"], [1, "bi", "bi-tag", "input-icon"], ["formControlName", "feeType", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], [1, "bi", "bi-journal-text"], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-pencil", "input-icon"], ["formControlName", "notes", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "option-with-image"], ["alt", "", 1, "option-image", 3, "src"], [1, "option-text"], [1, "option-title"], ["class", "selected-with-image", 4, "ngIf"], [1, "selected-with-image"], ["alt", "", 1, "selected-image", 3, "src"], [1, "selected-text"], [1, "error-message"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddFeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-title-page", 2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, AddFeeComponent_div_5_Template, 5, 3, "div", 3)(6, AddFeeComponent_div_6_Template, 95, 94, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 6, "ADD_FEE.TITLE"))("subtitle", \u0275\u0275pipeBind1(4, 8, "ADD_FEE.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, TitlePage, TranslatePipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #ced4da;\n}\n@media (max-width: 768px) {\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-fee.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddFeeComponent, [{
    type: Component,
    args: [{ selector: "app-add-fee", imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule, TitlePage], standalone: true, template: `<div class="add-fee-container">\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page\r
      [title]="'ADD_FEE.TITLE' | translate"\r
      [subtitle]="'ADD_FEE.SUBTITLE' | translate"\r
      icon="bi bi-plus-circle"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border" role="status">\r
        <span class="visually-hidden">{{ 'ADD_FEE.LOADING' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="card-add-pages" *ngIf="!loading">\r
      <form [formGroup]="feeForm" (ngSubmit)="createFee()" class="add-form">\r
        <!-- Section Fee Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-cash-coin"></i>\r
            <h4>{{ 'ADD_FEE.FEE_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_FEE.CHILD' | translate }} {{ 'ADD_FEE.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('childId')"\r
                  formControlName="childId"\r
                  [items]="children"\r
                  bindLabel="firstName"\r
                  bindValue="id"\r
                  [placeholder]="'ADD_FEE.SELECT_CHILD' | translate"\r
                  [clearable]="true"\r
                  [searchable]="true">\r
                  <!-- Custom option template with image -->\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <img [src]="item?.profilePicture || 'assets/child.png'" class="option-image" alt="">\r
                      <div class="option-text">\r
                        <span class="option-title">{{ item.firstName }} {{ item.lastName }}</span>\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <!-- Custom selected label template -->\r
                  <ng-template ng-label-tmp let-item="item">\r
                    <div class="selected-with-image" *ngIf="item?.id">\r
                      <img [src]="item?.profilePicture || 'assets/child.png'" class="selected-image" alt="">\r
                      <span class="selected-text">{{ item.firstName }} {{ item.lastName }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('childId')" class="error-message">\r
                {{ getFieldError('childId') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_FEE.AMOUNT' | translate }} {{ 'ADD_FEE.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-currency-dollar input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('amount')" formControlName="amount" step="0.01" min="0" [placeholder]="'ADD_FEE.AMOUNT_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('amount')" class="error-message">\r
                {{ getFieldError('amount') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'ADD_FEE.DESCRIPTION' | translate }} {{ 'ADD_FEE.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-card-text input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('description')" formControlName="description" [placeholder]="'ADD_FEE.DESCRIPTION_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('description')" class="error-message">\r
                {{ getFieldError('description') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Payment Details -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-credit-card"></i>\r
            <h4>{{ 'ADD_FEE.PAYMENT_DETAILS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_FEE.DUE_DATE' | translate }} {{ 'ADD_FEE.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('dueDate')" formControlName="dueDate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('dueDate')" class="error-message">\r
                {{ getFieldError('dueDate') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_FEE.FEE_TYPE' | translate }} {{ 'ADD_FEE.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-tag input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('feeType')"\r
                  formControlName="feeType"\r
                  [items]="feeTypes"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_FEE.SELECT_FEE_TYPE' | translate"\r
                  [clearable]="false"\r
                  [searchable]="false">\r
                  <!-- Custom option template with icon -->\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('feeType')" class="error-message">\r
                {{ getFieldError('feeType') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Additional Notes -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-journal-text"></i>\r
            <h4>{{ 'ADD_FEE.ADDITIONAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'ADD_FEE.NOTES' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-pencil input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('notes')" formControlName="notes" rows="3" [placeholder]="'ADD_FEE.NOTES_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('notes')" class="error-message">\r
                {{ getFieldError('notes') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'ADD_FEE.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || feeForm.invalid">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('ADD_FEE.CREATING' | translate) : ('ADD_FEE.CREATE_FEE' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/fee/add-fee/add-fee.component.scss */\n.card {\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.btn:disabled {\n  opacity: 0.65;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.input-group-text {\n  background-color: #f8f9fa;\n  border-color: #ced4da;\n}\n@media (max-width: 768px) {\n  .card-body {\n    padding: 1rem;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-fee.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: FeeService }, { type: ChildrenService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddFeeComponent, { className: "AddFeeComponent", filePath: "src/app/features/fee/add-fee/add-fee.component.ts", lineNumber: 23 });
})();
export {
  AddFeeComponent
};
//# sourceMappingURL=chunk-Z6Y7JIOS.js.map
