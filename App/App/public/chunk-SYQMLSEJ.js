import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
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
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/parent/edit-parent/edit-parent.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["childFileInput"];
var _c2 = ["imageCropper"];
var _c3 = ["childImageCropper"];
var _c4 = (a0) => ["/children/edit", a0];
var _c5 = (a0) => ["/children/detail", a0];
function EditParent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_PARENT.LOADING"));
  }
}
function EditParent_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("firstName"), " ");
  }
}
function EditParent_div_9_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("lastName"), " ");
  }
}
function EditParent_div_9_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span", 87);
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
function EditParent_div_9_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("email"), " ");
  }
}
function EditParent_div_9_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("phoneNumber"), " ");
  }
}
function EditParent_div_9_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("emergencyContact"), " ");
  }
}
function EditParent_div_9_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("address"), " ");
  }
}
function EditParent_div_9_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("work"), " ");
  }
}
function EditParent_div_9_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("zipCode"), " ");
  }
}
function EditParent_div_9_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span", 87);
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
function EditParent_div_9_div_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "GLOBAL.UPLOAD_PHOTO"));
  }
}
function EditParent_div_9_img_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 90);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditParent_div_9_button_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function EditParent_div_9_button_142_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function EditParent_div_9_span_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function EditParent_div_9_i_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 93);
  }
}
function EditParent_div_9_div_180_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getChildFieldError("firstName"), " ");
  }
}
function EditParent_div_9_div_180_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getChildFieldError("lastName"), " ");
  }
}
function EditParent_div_9_div_180_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getChildFieldError("dateOfBirth"), " ");
  }
}
function EditParent_div_9_div_180_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r8.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.label);
  }
}
function EditParent_div_9_div_180_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getChildFieldError("gender"), " ");
  }
}
function EditParent_div_9_div_180_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "GLOBAL.UPLOAD_PHOTO"));
  }
}
function EditParent_div_9_div_180_img_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 90);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.childImagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditParent_div_9_div_180_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function EditParent_div_9_div_180_button_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeChildImage());
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function EditParent_div_9_div_180_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function EditParent_div_9_div_180_i_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 93);
  }
}
function EditParent_div_9_div_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "form", 95);
    \u0275\u0275listener("ngSubmit", function EditParent_div_9_div_180_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addChild());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19)(4, "label", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275element(9, "i", 22)(10, "input", 23);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EditParent_div_9_div_180_div_12_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 19)(14, "label", 20);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 21);
    \u0275\u0275element(19, "i", 22)(20, "input", 25);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EditParent_div_9_div_180_div_22_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 19)(24, "label", 20);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 21);
    \u0275\u0275element(29, "i", 29)(30, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, EditParent_div_9_div_180_div_31_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "label", 20);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 21);
    \u0275\u0275element(38, "i", 26);
    \u0275\u0275elementStart(39, "ng-select", 27);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275template(41, EditParent_div_9_div_180_ng_template_41_Template, 4, 4, "ng-template", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, EditParent_div_9_div_180_div_42_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 38)(44, "label", 20);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 21);
    \u0275\u0275element(48, "i", 36)(49, "textarea", 96);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 38)(52, "label", 20);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 21);
    \u0275\u0275element(56, "i", 97)(57, "textarea", 98);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 19)(60, "label", 20);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 49)(64, "input", 99, 3);
    \u0275\u0275listener("change", function EditParent_div_9_div_180_Template_input_change_64_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onChildImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "label", 100);
    \u0275\u0275template(67, EditParent_div_9_div_180_div_67_Template, 5, 3, "div", 52)(68, EditParent_div_9_div_180_img_68_Template, 2, 4, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, EditParent_div_9_div_180_button_69_Template, 4, 3, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "small", 55);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 101)(74, "button", 62);
    \u0275\u0275listener("click", function EditParent_div_9_div_180_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAddChild());
    });
    \u0275\u0275element(75, "i", 63);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 64);
    \u0275\u0275template(79, EditParent_div_9_div_180_span_79_Template, 1, 0, "span", 65)(80, EditParent_div_9_div_180_i_80_Template, 1, 0, "i", 66);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.childForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 42, "EDIT_PARENT.CHILD_FIRST_NAME"), " ", \u0275\u0275pipeBind1(7, 44, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isChildFieldInvalid("firstName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 46, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isChildFieldInvalid("firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 48, "EDIT_PARENT.CHILD_LAST_NAME"), " ", \u0275\u0275pipeBind1(17, 50, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isChildFieldInvalid("lastName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 52, "GLOBAL.LAST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isChildFieldInvalid("lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(26, 54, "EDIT_PARENT.CHILD_DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(27, 56, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isChildFieldInvalid("dateOfBirth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isChildFieldInvalid("dateOfBirth"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(35, 58, "EDIT_PARENT.CHILD_GENDER"), " ", \u0275\u0275pipeBind1(36, 60, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isChildFieldInvalid("gender"));
    \u0275\u0275property("items", ctx_r2.genders)("placeholder", \u0275\u0275pipeBind1(40, 62, "EDIT_PARENT.SELECT_GENDER"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isChildFieldInvalid("gender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 64, "EDIT_PARENT.CHILD_ALLERGIES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(50, 66, "EDIT_PARENT.ALLERGIES_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 68, "EDIT_PARENT.CHILD_MEDICAL_NOTES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(58, 70, "EDIT_PARENT.MEDICAL_NOTES_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 72, "EDIT_PARENT.CHILD_PROFILE_PICTURE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.childImagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.childImagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.childImagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 74, "GLOBAL.IMAGE_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 76, "EDIT_PARENT.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.childForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? \u0275\u0275pipeBind1(82, 78, "EDIT_PARENT.ADDING_CHILD") : \u0275\u0275pipeBind1(83, 80, "EDIT_PARENT.SAVE_CHILD"), " ");
  }
}
function EditParent_div_9_div_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 103);
    \u0275\u0275elementStart(2, "p", 104);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_PARENT.NO_CHILDREN"));
  }
}
function EditParent_div_9_div_182_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.calculateAge(child_r10.dateOfBirth).years, " ", \u0275\u0275pipeBind1(1, 2, "EDIT_PARENT.YEARS"), " ");
  }
}
function EditParent_div_9_div_182_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const child_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.calculateAge(child_r10.dateOfBirth).months, " months old ");
  }
}
function EditParent_div_9_div_182_div_23_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 119)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EDIT_PARENT.ALLERGIES"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r10.allergies, " ");
  }
}
function EditParent_div_9_div_182_div_23_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 119)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EDIT_PARENT.MEDICAL_NOTES"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r10.medicalNotes, " ");
  }
}
function EditParent_div_9_div_182_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275template(1, EditParent_div_9_div_182_div_23_small_1_Template, 5, 4, "small", 118)(2, EditParent_div_9_div_182_div_23_small_2_Template, 5, 4, "small", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r10.allergies);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r10.medicalNotes);
  }
}
function EditParent_div_9_div_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 70);
    \u0275\u0275element(2, "img", 106);
    \u0275\u0275elementStart(3, "div", 107)(4, "h6", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 109);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, EditParent_div_9_div_182_Conditional_8_Template, 2, 4);
    \u0275\u0275conditionalCreate(9, EditParent_div_9_div_182_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 110);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 111)(15, "button", 112);
    \u0275\u0275element(16, "i", 113);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 114);
    \u0275\u0275element(20, "i", 115);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, EditParent_div_9_div_182_div_23_Template, 3, 2, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", child_r10.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r10.firstName, " ", child_r10.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", child_r10.gender, " - ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.calculateAge(child_r10.dateOfBirth).years > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.calculateAge(child_r10.dateOfBirth).years <= 0 ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 13, "EDIT_PARENT.BORN"), ": ", \u0275\u0275pipeBind2(13, 15, child_r10.dateOfBirth, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c4, child_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "EDIT_PARENT.EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c5, child_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, "EDIT_PARENT.VIEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", child_r10.allergies || child_r10.medicalNotes);
  }
}
function EditParent_div_9_span_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 92);
  }
}
function EditParent_div_9_i_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 120);
  }
}
function EditParent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "form", 14);
    \u0275\u0275listener("ngSubmit", function EditParent_div_9_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateParent());
    });
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275element(5, "i", 17);
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 19)(11, "label", 20);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21);
    \u0275\u0275element(16, "i", 22)(17, "input", 23);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditParent_div_9_div_19_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 19)(21, "label", 20);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21);
    \u0275\u0275element(26, "i", 22)(27, "input", 25);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, EditParent_div_9_div_29_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19)(31, "label", 20);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275element(35, "i", 26);
    \u0275\u0275elementStart(36, "ng-select", 27);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275template(38, EditParent_div_9_ng_template_38_Template, 4, 4, "ng-template", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 19)(40, "label", 20);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 21);
    \u0275\u0275element(44, "i", 29)(45, "input", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 15)(47, "div", 16);
    \u0275\u0275element(48, "i", 31);
    \u0275\u0275elementStart(49, "h4");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 18)(53, "div", 19)(54, "label", 20);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 21);
    \u0275\u0275element(59, "i", 32)(60, "input", 33);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, EditParent_div_9_div_62_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 19)(64, "label", 20);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 21);
    \u0275\u0275element(69, "i", 34)(70, "input", 35);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, EditParent_div_9_div_72_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 19)(74, "label", 20);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 21);
    \u0275\u0275element(78, "i", 36)(79, "input", 37);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, EditParent_div_9_div_81_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 38)(83, "label", 20);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 21);
    \u0275\u0275element(87, "i", 39)(88, "textarea", 40);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, EditParent_div_9_div_90_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 15)(92, "div", 16);
    \u0275\u0275element(93, "i", 41);
    \u0275\u0275elementStart(94, "h4");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 18)(98, "div", 19)(99, "label", 20);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 21);
    \u0275\u0275element(103, "i", 42)(104, "input", 43);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, EditParent_div_9_div_106_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 19)(108, "label", 20);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 21);
    \u0275\u0275element(112, "i", 44)(113, "input", 45);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(115, EditParent_div_9_div_115_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 19)(117, "label", 20);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 21);
    \u0275\u0275element(121, "i", 46);
    \u0275\u0275elementStart(122, "ng-select", 47);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275template(124, EditParent_div_9_ng_template_124_Template, 4, 4, "ng-template", 28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(125, "div", 15)(126, "div", 16);
    \u0275\u0275element(127, "i", 48);
    \u0275\u0275elementStart(128, "h4");
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 18)(132, "div", 19)(133, "label", 20);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 49)(137, "input", 50, 2);
    \u0275\u0275listener("change", function EditParent_div_9_Template_input_change_137_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "label", 51);
    \u0275\u0275template(140, EditParent_div_9_div_140_Template, 5, 3, "div", 52)(141, EditParent_div_9_img_141_Template, 2, 4, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(142, EditParent_div_9_button_142_Template, 4, 3, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "small", 55);
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 19)(147, "label", 20);
    \u0275\u0275text(148);
    \u0275\u0275pipe(149, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 56)(151, "label", 57);
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "div", 58);
    \u0275\u0275element(155, "input", 59)(156, "label", 60);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(157, "div", 61)(158, "button", 62);
    \u0275\u0275listener("click", function EditParent_div_9_Template_button_click_158_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel());
    });
    \u0275\u0275element(159, "i", 63);
    \u0275\u0275text(160);
    \u0275\u0275pipe(161, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "button", 64);
    \u0275\u0275template(163, EditParent_div_9_span_163_Template, 1, 0, "span", 65)(164, EditParent_div_9_i_164_Template, 1, 0, "i", 66);
    \u0275\u0275text(165);
    \u0275\u0275pipe(166, "translate");
    \u0275\u0275pipe(167, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(168, "div", 67)(169, "div", 68)(170, "div", 69)(171, "div", 70);
    \u0275\u0275element(172, "i", 71);
    \u0275\u0275elementStart(173, "h4");
    \u0275\u0275text(174);
    \u0275\u0275pipe(175, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "button", 72);
    \u0275\u0275listener("click", function EditParent_div_9_Template_button_click_176_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAddChild());
    });
    \u0275\u0275element(177, "i", 73);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(180, EditParent_div_9_div_180_Template, 84, 82, "div", 74)(181, EditParent_div_9_div_181_Template, 5, 3, "div", 75)(182, EditParent_div_9_div_182_Template, 24, 26, "div", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "div", 77)(184, "div", 68)(185, "div", 78);
    \u0275\u0275element(186, "i", 79);
    \u0275\u0275elementStart(187, "h4");
    \u0275\u0275text(188);
    \u0275\u0275pipe(189, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 80)(191, "div", 81)(192, "h5");
    \u0275\u0275text(193);
    \u0275\u0275pipe(194, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "p");
    \u0275\u0275text(196);
    \u0275\u0275pipe(197, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "button", 82);
    \u0275\u0275listener("click", function EditParent_div_9_Template_button_click_198_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteAccount());
    });
    \u0275\u0275template(199, EditParent_div_9_span_199_Template, 1, 0, "span", 65)(200, EditParent_div_9_i_200_Template, 1, 0, "i", 83);
    \u0275\u0275text(201);
    \u0275\u0275pipe(202, "translate");
    \u0275\u0275pipe(203, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.parentForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 86, "EDIT_PARENT.PERSONAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 88, "EDIT_PARENT.FIRST_NAME"), " ", \u0275\u0275pipeBind1(14, 90, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("firstName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 92, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(23, 94, "EDIT_PARENT.LAST_NAME"), " ", \u0275\u0275pipeBind1(24, 96, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("lastName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 98, "GLOBAL.LAST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 100, "EDIT_PARENT.GENDER"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r2.genders)("placeholder", \u0275\u0275pipeBind1(37, 102, "EDIT_PARENT.SELECT_GENDER"))("clearable", true)("searchable", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 104, "EDIT_PARENT.DATE_OF_BIRTH"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 106, "EDIT_PARENT.CONTACT_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(56, 108, "EDIT_PARENT.EMAIL"), " ", \u0275\u0275pipeBind1(57, 110, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("email"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(61, 112, "EDIT_PARENT.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(66, 114, "EDIT_PARENT.PHONE"), " ", \u0275\u0275pipeBind1(67, 116, "EDIT_PARENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("phoneNumber"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 118, "EDIT_PARENT.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("phoneNumber"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 120, "EDIT_PARENT.EMERGENCY_CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("emergencyContact"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(80, 122, "EDIT_PARENT.EMERGENCY_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("emergencyContact"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 124, "EDIT_PARENT.ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("address"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(89, 126, "EDIT_PARENT.ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("address"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 128, "EDIT_PARENT.PROFESSIONAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 130, "EDIT_PARENT.PROFESSION"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("work"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(105, 132, "EDIT_PARENT.PROFESSION_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("work"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 134, "EDIT_PARENT.ZIP_CODE"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("zipCode"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(114, 136, "EDIT_PARENT.ZIP_CODE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("zipCode"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 138, "EDIT_PARENT.PARENT_TYPE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r2.parentTypes)("placeholder", \u0275\u0275pipeBind1(123, 140, "EDIT_PARENT.SELECT_TYPE"))("clearable", true)("searchable", false);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(130, 142, "EDIT_PARENT.PHOTO_STATUS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(135, 144, "EDIT_PARENT.PROFILE_PICTURE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 146, "GLOBAL.IMAGE_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(149, 148, "EDIT_PARENT.STATUS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(153, 150, "EDIT_PARENT.ACTIVE_STATUS"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(161, 152, "EDIT_PARENT.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.parentForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? \u0275\u0275pipeBind1(166, 154, "EDIT_PARENT.UPDATING") : \u0275\u0275pipeBind1(167, 156, "EDIT_PARENT.UPDATE_PARENT"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(175, 158, "EDIT_PARENT.CHILDREN"), " (", ctx_r2.children.length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(179, 160, "EDIT_PARENT.ADD_CHILD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showAddChild);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.children.length === 0 && !ctx_r2.showAddChild);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.children);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(189, 162, "SETTINGS.DANGER_ZONE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(194, 164, "SETTINGS.DELETE_ACCOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(197, 166, "SETTINGS.DELETE_ACCOUNT_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.deleting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.deleting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.deleting ? \u0275\u0275pipeBind1(202, 168, "SETTINGS.DELETING") : \u0275\u0275pipeBind1(203, 170, "SETTINGS.DELETE_ACCOUNT_BTN"), " ");
  }
}
var EditParent = class _EditParent {
  fb;
  route;
  router;
  parentService;
  childrenService;
  authService;
  translate;
  pageTitleService;
  simpleToast;
  fileInput;
  childFileInput;
  imageCropper;
  childImageCropper;
  loading = true;
  saving = false;
  deleting = false;
  showAddChild = false;
  imagePreview = null;
  childImagePreview = null;
  selectedImageFile = null;
  selectedChildImageFile = null;
  parentId = 0;
  parentForm;
  childForm;
  children = [];
  langChangeSub;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  PHONE_PATTERN = /^\+?[1-9]\d{0,14}$/;
  ZIP_CODE_PATTERN = /^\d{4,10}(-\d{4})?$/;
  // Error message mapping for pattern validation
  PATTERN_ERROR_FIELDS = {
    phoneNumber: "VALIDATION.INVALID_PHONE",
    emergencyContact: "VALIDATION.INVALID_PHONE",
    zipCode: "VALIDATION.INVALID_ZIP_CODE"
  };
  breadcrumbs = [];
  titleActions = [];
  genders = [];
  parentTypes = [];
  constructor(fb, route, router, parentService, childrenService, authService, translate, pageTitleService, simpleToast) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.parentService = parentService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.simpleToast = simpleToast;
  }
  ngOnInit() {
    this.parentId = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitleService.setTitle(this.translate.instant("PARENTS.EDIT_PARENT"));
    this.initBreadcrumbs();
    this.initTitleActions();
    this.initSelectOptions();
    this.initForm();
    this.initChildForm();
    this.loadParent();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("PARENTS.EDIT_PARENT"));
      this.initBreadcrumbs();
      this.initTitleActions();
      this.initSelectOptions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-2",
        action: () => this.cancel()
      }
    ];
  }
  initSelectOptions() {
    this.genders = [
      { value: "Male", label: this.translate.instant("COMMON.MALE"), icon: "bi-gender-male" },
      { value: "Female", label: this.translate.instant("COMMON.FEMALE"), icon: "bi-gender-female" }
    ];
    this.parentTypes = [
      { value: "Father", label: this.translate.instant("PARENTS.FATHER"), icon: "bi-person" },
      { value: "Mother", label: this.translate.instant("PARENTS.MOTHER"), icon: "bi-person" },
      { value: "Grandfather", label: this.translate.instant("PARENTS.GRANDFATHER"), icon: "bi-person" },
      { value: "Grandmother", label: this.translate.instant("PARENTS.GRANDMOTHER"), icon: "bi-person" },
      { value: "Guardian", label: this.translate.instant("PARENTS.GUARDIAN"), icon: "bi-shield-check" }
    ];
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.PARENTS"), url: "/parents" },
      { label: this.translate.instant("BREADCRUMBS.EDIT_PARENT") }
    ];
  }
  initForm() {
    this.parentForm = this.fb.group({
      id: [0],
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.pattern(this.PHONE_PATTERN)]],
      address: ["", [Validators.maxLength(255)]],
      emergencyContact: ["", [Validators.pattern(this.PHONE_PATTERN)]],
      profilePicture: [""],
      gender: [""],
      dateOfBirth: [""],
      work: ["", [Validators.maxLength(100)]],
      zipCode: ["", [Validators.pattern(this.ZIP_CODE_PATTERN)]],
      parentType: [""],
      isActive: [true]
    });
  }
  initChildForm() {
    this.childForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      dateOfBirth: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      allergies: ["", [Validators.maxLength(500)]],
      medicalNotes: ["", [Validators.maxLength(1e3)]],
      profilePicture: [""],
      parentId: [0]
    });
  }
  loadParent() {
    this.loading = true;
    this.parentService.getParentWithChildren(this.parentId).subscribe({
      next: (parent) => {
        let dateOfBirth = parent.dateOfBirth;
        if (dateOfBirth) {
          dateOfBirth = new Date(dateOfBirth).toISOString().split("T")[0];
        }
        this.parentForm.patchValue({
          id: parent.id,
          firstName: parent.firstName,
          lastName: parent.lastName,
          email: parent.email,
          phoneNumber: parent.phoneNumber,
          address: parent.address || "",
          emergencyContact: parent.emergencyContact || "",
          profilePicture: parent.profilePicture || "",
          gender: parent.gender || "",
          dateOfBirth: dateOfBirth || "",
          work: parent.work || "",
          zipCode: parent.zipCode || "",
          parentType: parent.parentType || "",
          isActive: parent.isActive
        });
        if (parent.profilePictureUrl) {
          this.imagePreview = this.getFullImageUrl(parent.profilePictureUrl);
        } else if (parent.profilePicture) {
          this.imagePreview = parent.profilePicture;
        } else {
          this.imagePreview = null;
        }
        if (parent.children) {
          this.children = parent.children.map((child) => __spreadProps(__spreadValues({}, child), {
            age: this.calculateAge(child.dateOfBirth)
          }));
        }
        this.childForm.patchValue({ parentId: parent.id });
        this.loading = false;
      },
      error: (error) => {
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        console.error(`Error loading parent: ${sanitizedMessage}`);
        this.loading = false;
        this.simpleToast.error(this.translate.instant("EDIT_PARENT.LOAD_ERROR"));
        this.router.navigate(["/parents"]);
      }
    });
  }
  updateParent() {
    if (this.parentForm.invalid) {
      this.markFormGroupTouched(this.parentForm);
      return;
    }
    this.saving = true;
    const parentData = this.parentForm.value;
    if (this.selectedImageFile && this.parentId) {
      this.parentService.uploadParentProfilePicture(this.parentId, this.selectedImageFile).subscribe({
        next: () => {
          parentData.profilePicture = void 0;
          this.saveParentData(parentData);
        },
        error: () => {
          this.saveParentData(parentData);
        }
      });
    } else {
      this.saveParentData(parentData);
    }
  }
  saveParentData(parentData) {
    this.parentService.updateParent(parentData).subscribe({
      next: () => {
        this.saving = false;
        this.simpleToast.success(this.translate.instant("EDIT_PARENT.UPDATE_SUCCESS"));
        this.router.navigate(["/parents/detail", this.parentId]);
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        const sanitizedStatus = typeof error?.status === "number" ? error.status : 0;
        const sanitizedStatusText = this.sanitizeLogMessage(error?.statusText);
        console.error(`Failed to update parent: status=${sanitizedStatus}, statusText=${sanitizedStatusText}, message=${sanitizedMessage}`);
        this.simpleToast.error(this.translate.instant("EDIT_PARENT.UPDATE_ERROR"));
      }
    });
  }
  addChild() {
    if (this.childForm.invalid) {
      this.markFormGroupTouched(this.childForm);
      return;
    }
    this.saving = true;
    const childData = this.childForm.value;
    this.childrenService.addChild(childData).subscribe({
      next: () => {
        this.saving = false;
        this.showAddChild = false;
        this.resetChildForm();
        this.simpleToast.success(this.translate.instant("MESSAGES.CHILD_CREATED"));
        this.loadParent();
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        console.error(`Failed to add child: ${sanitizedMessage}`);
        this.simpleToast.error(this.translate.instant("MESSAGES.CHILD_CREATE_ERROR"));
      }
    });
  }
  resetChildForm() {
    this.childForm.reset({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      allergies: "",
      medicalNotes: "",
      profilePicture: "",
      parentId: this.parentId
    });
    this.childImagePreview = null;
    if (this.childFileInput?.nativeElement) {
      this.childFileInput.nativeElement.value = "";
    }
  }
  sanitizeLogMessage(input) {
    if (typeof input !== "string") {
      return "Unknown";
    }
    return input.substring(0, 200).replace(/[\r\n\t]/g, " ").replace(/[^\x20-\x7E]/g, "");
  }
  cancel() {
    if (this.parentForm.dirty) {
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
          this.router.navigate(["/parents/detail", this.parentId]);
        }
      });
    } else {
      this.router.navigate(["/parents/detail", this.parentId]);
    }
  }
  toggleAddChild() {
    this.showAddChild = !this.showAddChild;
    if (this.showAddChild) {
      this.resetChildForm();
    }
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToast.error(this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES"));
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      this.simpleToast.error(this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() }));
      this.resetFileInput();
      return;
    }
    this.selectedImageFile = file;
    if (this.imageCropper) {
      this.imageCropper.show();
    }
  }
  onImageCropped(croppedImage) {
    this.imagePreview = croppedImage;
    this.parentForm.patchValue({ profilePicture: "" });
    this.selectedImageFile = this.base64ToFile(croppedImage, "profile.jpg");
  }
  base64ToFile(base64, filename) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  onCropCancelled() {
    this.selectedImageFile = null;
    this.resetFileInput();
  }
  onChildImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToast.error(this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES"));
      if (this.childFileInput?.nativeElement) {
        this.childFileInput.nativeElement.value = "";
      }
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      this.simpleToast.error(this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() }));
      if (this.childFileInput?.nativeElement) {
        this.childFileInput.nativeElement.value = "";
      }
      return;
    }
    this.selectedChildImageFile = file;
    if (this.childImageCropper) {
      this.childImageCropper.show();
    }
  }
  onChildImageCropped(croppedImage) {
    this.childImagePreview = croppedImage;
    this.childForm.patchValue({ profilePicture: croppedImage });
    this.selectedChildImageFile = null;
  }
  onChildCropCancelled() {
    this.selectedChildImageFile = null;
    if (this.childFileInput?.nativeElement) {
      this.childFileInput.nativeElement.value = "";
    }
  }
  removeImage() {
    if (this.parentId && this.imagePreview) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("MESSAGES.CONFIRM_DELETE"),
        text: this.translate.instant("MESSAGES.DELETE_PROFILE_PICTURE_CONFIRM"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("COMMON.YES_DELETE"),
        cancelButtonText: this.translate.instant("COMMON.CANCEL")
      }).then((result) => {
        if (result.isConfirmed) {
          this.parentService.deleteParentProfilePicture(this.parentId).subscribe({
            next: () => {
              this.resetFileInput();
              showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
            },
            error: (error) => {
              const sanitizedMessage = this.sanitizeLogMessage(error?.message);
              console.error(`Failed to delete profile picture: ${sanitizedMessage}`);
              import_sweetalert2.default.fire({
                icon: "error",
                title: this.translate.instant("MESSAGES.ERROR"),
                text: this.translate.instant("MESSAGES.DELETE_PROFILE_PICTURE_ERROR")
              });
            }
          });
        }
      });
    } else {
      this.resetFileInput();
    }
  }
  removeChildImage() {
    this.childImagePreview = null;
    this.childForm.patchValue({ profilePicture: "" });
    if (this.childFileInput?.nativeElement) {
      this.childFileInput.nativeElement.value = "";
    }
  }
  resetFileInput() {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.parentForm.patchValue({ profilePicture: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  get formControls() {
    return this.parentForm.controls;
  }
  get childFormControls() {
    return this.childForm.controls;
  }
  isFieldInvalid(fieldName) {
    const field = this.parentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  isChildFieldInvalid(fieldName) {
    const field = this.childForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.parentForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    if (field.errors["email"]) {
      return this.translate.instant("VALIDATION.INVALID_EMAIL");
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return this.translate.instant("VALIDATION.MIN_LENGTH", { length: minLength });
    }
    if (field.errors["maxlength"]) {
      const maxLength = field.errors["maxlength"].requiredLength;
      return this.translate.instant("VALIDATION.MAX_LENGTH", { length: maxLength });
    }
    if (field.errors["pattern"]) {
      const errorKey = this.PATTERN_ERROR_FIELDS[fieldName];
      if (errorKey) {
        return this.translate.instant(errorKey);
      }
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  getChildFieldError(fieldName) {
    const field = this.childForm.get(fieldName);
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
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  calculateAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) {
      months--;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years: years < 0 ? 0 : years, months: months < 0 ? 0 : months };
  }
  getFullImageUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:")) {
      return path;
    }
    const baseUrl = ApiConfig.HUB_URL;
    return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  deleteAccount() {
    import_sweetalert2.default.fire({
      title: this.translate.instant("SETTINGS.DELETE_ACCOUNT_CONFIRM_TITLE"),
      html: `
        <div class="text-start">
          <p class="text-danger fw-bold mb-3">${this.translate.instant("SETTINGS.DELETE_ACCOUNT_WARNING")}</p>
          <ul class="text-muted small">
            <li>${this.translate.instant("SETTINGS.DELETE_WARNING_1")}</li>
            <li>${this.translate.instant("SETTINGS.DELETE_WARNING_2")}</li>
            <li>${this.translate.instant("SETTINGS.DELETE_WARNING_3")}</li>
            <li>${this.translate.instant("SETTINGS.DELETE_WARNING_4")}</li>
          </ul>
          <p class="mt-3 mb-2">${this.translate.instant("SETTINGS.DELETE_ACCOUNT_TYPE_CONFIRM")}</p>
        </div>
      `,
      input: "text",
      inputPlaceholder: "DELETE",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("SETTINGS.DELETE_ACCOUNT_BTN"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL"),
      preConfirm: (inputValue) => {
        if (inputValue !== "DELETE") {
          import_sweetalert2.default.showValidationMessage(this.translate.instant("SETTINGS.DELETE_ACCOUNT_TYPE_ERROR"));
          return false;
        }
        return true;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleting = true;
        this.authService.deleteAccount().subscribe({
          next: () => {
            this.deleting = false;
            showSuccessToast(this.translate.instant("SETTINGS.ACCOUNT_DELETED"));
            this.router.navigate(["/login"]);
          },
          error: (error) => {
            this.deleting = false;
            const sanitizedMessage = this.sanitizeLogMessage(error?.message);
            console.error(`Failed to delete account: ${sanitizedMessage}`);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("SETTINGS.DELETE_ACCOUNT_ERROR")
            });
          }
        });
      }
    });
  }
  static \u0275fac = function EditParent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditParent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditParent, selectors: [["app-edit-parent"]], viewQuery: function EditParent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.childFileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.childImageCropper = _t.first);
    }
  }, decls: 10, vars: 17, consts: [["imageCropper", ""], ["childImageCropper", ""], ["fileInput", ""], ["childFileInput", ""], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight"], [1, "edit-parent-container"], [1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card-add-pages", "mb-4"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-gender-ambiguous", "input-icon"], ["formControlName", "gender", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-input"], [1, "bi", "bi-telephone"], [1, "bi", "bi-envelope", "input-icon"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-phone", "input-icon"], ["type", "tel", "formControlName", "phoneNumber", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-exclamation-triangle", "input-icon"], ["type", "text", "formControlName", "emergencyContact", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-geo-alt", "input-icon"], ["formControlName", "address", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-briefcase"], [1, "bi", "bi-building", "input-icon"], ["type", "text", "formControlName", "work", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-mailbox", "input-icon"], ["type", "text", "formControlName", "zipCode", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-people", "input-icon"], ["formControlName", "parentType", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "status-toggle"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "toggle-input"], ["for", "isActive", 1, "toggle-slider"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "card-add-pages"], [1, "add-form", "form-section"], [1, "section-header", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-people-fill"], ["type", "button", 1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle"], ["class", "add-child-form mt-4", 4, "ngIf"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "child-card mt-3", 4, "ngFor", "ngForOf"], [1, "card-add-pages", "danger-zone-card"], [1, "section-header", "danger-header"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "danger-zone-content"], [1, "danger-zone-info"], ["type", "button", 1, "btn-delete-account", 3, "click", "disabled"], ["class", "bi bi-trash3", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"], [1, "add-child-form", "mt-4"], [3, "ngSubmit", "formGroup"], ["formControlName", "allergies", "rows", "2", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-clipboard2-pulse", "input-icon"], ["formControlName", "medicalNotes", "rows", "2", 1, "form-input", 3, "placeholder"], ["type", "file", "id", "childProfilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "childProfilePicture", 1, "file-upload-label"], [1, "form-actions", "mt-3"], [1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-people", 2, "font-size", "48px", "opacity", "0.5"], [1, "mt-2"], [1, "child-card", "mt-3"], ["loading", "lazy", "width", "60", "height", "60", "alt", "Child", 1, "rounded-circle", "me-3", 3, "src"], [1, "flex-grow-1"], [1, "mb-1"], [1, "mb-0", "text-muted"], [1, "text-muted"], [1, "text-end"], [1, "btn", "btn-outline-primary", "btn-sm", "me-2", 3, "routerLink"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-outline-info", "btn-sm", 3, "routerLink"], [1, "bi", "bi-eye"], ["class", "mt-2 pt-2 border-top", 4, "ngIf"], [1, "mt-2", "pt-2", "border-top"], ["class", "text-muted d-block", 4, "ngIf"], [1, "text-muted", "d-block"], [1, "bi", "bi-trash3"]], template: function EditParent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-image-cropper-modal", 4, 0);
      \u0275\u0275listener("imageCropped", function EditParent_Template_app_image_cropper_modal_imageCropped_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function EditParent_Template_app_image_cropper_modal_cancelled_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-image-cropper-modal", 4, 1);
      \u0275\u0275listener("imageCropped", function EditParent_Template_app_image_cropper_modal_imageCropped_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChildImageCropped($event));
      })("cancelled", function EditParent_Template_app_image_cropper_modal_cancelled_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onChildCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
      \u0275\u0275element(6, "app-title-page", 7);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275template(8, EditParent_div_8_Template, 5, 3, "div", 8)(9, EditParent_div_9_Template, 204, 172, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 300)("resizeToHeight", 300);
      \u0275\u0275advance(2);
      \u0275\u0275property("imageFile", ctx.selectedChildImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 300)("resizeToHeight", 300);
      \u0275\u0275advance(4);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(7, 15, "EDIT_PARENT.TITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, ImageCropperModalComponent, TitlePage, DatePipe, TranslatePipe], styles: ["\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6 !important;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex: 1 1 auto !important;\n}\n.me-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.me-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n.pt-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem !important;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem !important;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.add-form.form-section[_ngcontent-%COMP%]   .btn-add-global-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ffffff;\n}\n.danger-zone-card[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545 !important;\n  margin-top: 1.5rem;\n}\n.danger-zone-card[_ngcontent-%COMP%]   .danger-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.danger-zone-card[_ngcontent-%COMP%]   .danger-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.danger-zone-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n.danger-zone-content[_ngcontent-%COMP%]   .danger-zone-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.danger-zone-content[_ngcontent-%COMP%]   .danger-zone-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n.danger-zone-content[_ngcontent-%COMP%]   .danger-zone-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.btn-delete-account[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background-color: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-delete-account[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #bb2d3b;\n}\n.btn-delete-account[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-delete-account[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=edit-parent.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditParent, [{
    type: Component,
    args: [{ selector: "app-edit-parent", imports: [CommonModule, ReactiveFormsModule, RouterModule, TranslateModule, NgSelectModule, ImageCropperModalComponent, TitlePage], standalone: true, template: `<!-- Image Cropper Modal for Parent -->\r
<app-image-cropper-modal #imageCropper [imageFile]="selectedImageFile" [roundCropper]="true" [aspectRatio]="1"\r
  [resizeToWidth]="300" [resizeToHeight]="300" (imageCropped)="onImageCropped($event)" (cancelled)="onCropCancelled()">\r
</app-image-cropper-modal>\r
\r
<!-- Image Cropper Modal for Child -->\r
<app-image-cropper-modal #childImageCropper [imageFile]="selectedChildImageFile" [roundCropper]="true" [aspectRatio]="1"\r
  [resizeToWidth]="300" [resizeToHeight]="300" (imageCropped)="onChildImageCropped($event)"\r
  (cancelled)="onChildCropCancelled()">\r
</app-image-cropper-modal>\r
\r
<div class="edit-parent-container">\r
  <div class="container-fluid mt-4">\r
    <app-title-page [title]="'EDIT_PARENT.TITLE' | translate" [breadcrumbs]="breadcrumbs" [actions]="titleActions">\r
    </app-title-page>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border" role="status">\r
        <span class="visually-hidden">{{ 'EDIT_PARENT.LOADING' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="!loading">\r
      <!-- Parent Form -->\r
      <div class="card-add-pages mb-4">\r
        <form [formGroup]="parentForm" (ngSubmit)="updateParent()" class="add-form">\r
          <!-- Section Personal Information -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-person-circle"></i>\r
              <h4>{{ 'EDIT_PARENT.PERSONAL_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.FIRST_NAME' | translate }} {{ 'EDIT_PARENT.REQUIRED' |\r
                  translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-person input-icon"></i>\r
                  <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('firstName')"\r
                    formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('firstName')" class="error-message">\r
                  {{ getFieldError('firstName') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.LAST_NAME' | translate }} {{ 'EDIT_PARENT.REQUIRED' |\r
                  translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-person input-icon"></i>\r
                  <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('lastName')"\r
                    formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('lastName')" class="error-message">\r
                  {{ getFieldError('lastName') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.GENDER' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-gender-ambiguous input-icon"></i>\r
                  <ng-select class="form-input" formControlName="gender" [items]="genders" bindLabel="label"\r
                    bindValue="value" [placeholder]="'EDIT_PARENT.SELECT_GENDER' | translate" [clearable]="true"\r
                    [searchable]="false">\r
                    <ng-template ng-option-tmp let-item="item">\r
                      <div class="option-with-image">\r
                        <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                        <span class="option-title">{{ item.label }}</span>\r
                      </div>\r
                    </ng-template>\r
                  </ng-select>\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.DATE_OF_BIRTH' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-calendar input-icon"></i>\r
                  <input type="date" class="form-input" formControlName="dateOfBirth">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Contact -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-telephone"></i>\r
              <h4>{{ 'EDIT_PARENT.CONTACT_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.EMAIL' | translate }} {{ 'EDIT_PARENT.REQUIRED' | translate\r
                  }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-envelope input-icon"></i>\r
                  <input type="email" class="form-input" [class.is-invalid]="isFieldInvalid('email')"\r
                    formControlName="email" [placeholder]="'EDIT_PARENT.EMAIL_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('email')" class="error-message">\r
                  {{ getFieldError('email') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.PHONE' | translate }} {{ 'EDIT_PARENT.REQUIRED' | translate\r
                  }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-phone input-icon"></i>\r
                  <input type="tel" class="form-input" [class.is-invalid]="isFieldInvalid('phoneNumber')"\r
                    formControlName="phoneNumber" [placeholder]="'EDIT_PARENT.PHONE_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('phoneNumber')" class="error-message">\r
                  {{ getFieldError('phoneNumber') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.EMERGENCY_CONTACT' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-exclamation-triangle input-icon"></i>\r
                  <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('emergencyContact')"\r
                    formControlName="emergencyContact" [placeholder]="'EDIT_PARENT.EMERGENCY_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('emergencyContact')" class="error-message">\r
                  {{ getFieldError('emergencyContact') }}\r
                </div>\r
              </div>\r
              <div class="form-group full-width">\r
                <label class="form-label">{{ 'EDIT_PARENT.ADDRESS' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-geo-alt input-icon"></i>\r
                  <textarea class="form-input" [class.is-invalid]="isFieldInvalid('address')" formControlName="address"\r
                    rows="3" [placeholder]="'EDIT_PARENT.ADDRESS_PLACEHOLDER' | translate"></textarea>\r
                </div>\r
                <div *ngIf="isFieldInvalid('address')" class="error-message">\r
                  {{ getFieldError('address') }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Professional -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-briefcase"></i>\r
              <h4>{{ 'EDIT_PARENT.PROFESSIONAL_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.PROFESSION' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-building input-icon"></i>\r
                  <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('work')"\r
                    formControlName="work" [placeholder]="'EDIT_PARENT.PROFESSION_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('work')" class="error-message">\r
                  {{ getFieldError('work') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.ZIP_CODE' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-mailbox input-icon"></i>\r
                  <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('zipCode')"\r
                    formControlName="zipCode" [placeholder]="'EDIT_PARENT.ZIP_CODE_PLACEHOLDER' | translate">\r
                </div>\r
                <div *ngIf="isFieldInvalid('zipCode')" class="error-message">\r
                  {{ getFieldError('zipCode') }}\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.PARENT_TYPE' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-people input-icon"></i>\r
                  <ng-select class="form-input" formControlName="parentType" [items]="parentTypes" bindLabel="label"\r
                    bindValue="value" [placeholder]="'EDIT_PARENT.SELECT_TYPE' | translate" [clearable]="true"\r
                    [searchable]="false">\r
                    <ng-template ng-option-tmp let-item="item">\r
                      <div class="option-with-image">\r
                        <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                        <span class="option-title">{{ item.label }}</span>\r
                      </div>\r
                    </ng-template>\r
                  </ng-select>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Photo and Status -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-image"></i>\r
              <h4>{{ 'EDIT_PARENT.PHOTO_STATUS' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.PROFILE_PICTURE' | translate }}</label>\r
                <div class="file-upload-area">\r
                  <input type="file" #fileInput id="profilePicture" class="file-input" (change)="onImageSelect($event)"\r
                    accept="image/jpeg,image/png,image/gif,image/webp">\r
                  <label for="profilePicture" class="file-upload-label">\r
                    <div *ngIf="!imagePreview" class="upload-placeholder">\r
                      <i class="bi bi-cloud-upload"></i>\r
                      <span>{{ 'GLOBAL.UPLOAD_PHOTO' | translate }}</span>\r
                    </div>\r
                    <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image"\r
                      [alt]="'GLOBAL.PREVIEW' | translate">\r
                  </label>\r
                  <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
                    <i class="bi bi-x-circle"></i>\r
                    {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
                  </button>\r
                </div>\r
                <small class="form-hint">{{ 'GLOBAL.IMAGE_HINT' | translate }}</small>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_PARENT.STATUS' | translate }}</label>\r
                <div class="status-toggle">\r
                  <label class="toggle-label">{{ 'EDIT_PARENT.ACTIVE_STATUS' | translate }}</label>\r
                  <div class="toggle-switch">\r
                    <input type="checkbox" formControlName="isActive" id="isActive" class="toggle-input">\r
                    <label for="isActive" class="toggle-slider"></label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Action Buttons -->\r
          <div class="form-actions">\r
            <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
              <i class="bi bi-x-circle"></i>\r
              {{ 'EDIT_PARENT.CANCEL' | translate }}\r
            </button>\r
            <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || parentForm.invalid">\r
              <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
              <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
              {{ saving ? ('EDIT_PARENT.UPDATING' | translate) : ('EDIT_PARENT.UPDATE_PARENT' | translate) }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <!-- Children Section -->\r
      <div class="card-add-pages">\r
        <div class="add-form form-section">\r
          <div class="section-header d-flex justify-content-between align-items-center">\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-people-fill"></i>\r
              <h4>{{ 'EDIT_PARENT.CHILDREN' | translate }} ({{ children.length }})</h4>\r
            </div>\r
            <button type="button" class="custom-btn-2 btn-add-global-2" (click)="toggleAddChild()">\r
              <i class="bi bi-plus-circle"></i>\r
              {{ 'EDIT_PARENT.ADD_CHILD' | translate }}\r
            </button>\r
          </div>\r
\r
          <!-- Add Child Form -->\r
          <div *ngIf="showAddChild" class="add-child-form mt-4">\r
            <form [formGroup]="childForm" (ngSubmit)="addChild()">\r
              <div class="form-grid">\r
                <div class="form-group">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_FIRST_NAME' | translate }} {{ 'EDIT_PARENT.REQUIRED' |\r
                    translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-person input-icon"></i>\r
                    <input type="text" class="form-input" [class.is-invalid]="isChildFieldInvalid('firstName')"\r
                      formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
                  </div>\r
                  <div *ngIf="isChildFieldInvalid('firstName')" class="error-message">\r
                    {{ getChildFieldError('firstName') }}\r
                  </div>\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_LAST_NAME' | translate }} {{ 'EDIT_PARENT.REQUIRED' |\r
                    translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-person input-icon"></i>\r
                    <input type="text" class="form-input" [class.is-invalid]="isChildFieldInvalid('lastName')"\r
                      formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
                  </div>\r
                  <div *ngIf="isChildFieldInvalid('lastName')" class="error-message">\r
                    {{ getChildFieldError('lastName') }}\r
                  </div>\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_DATE_OF_BIRTH' | translate }} {{\r
                    'EDIT_PARENT.REQUIRED' | translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-calendar input-icon"></i>\r
                    <input type="date" class="form-input" [class.is-invalid]="isChildFieldInvalid('dateOfBirth')"\r
                      formControlName="dateOfBirth">\r
                  </div>\r
                  <div *ngIf="isChildFieldInvalid('dateOfBirth')" class="error-message">\r
                    {{ getChildFieldError('dateOfBirth') }}\r
                  </div>\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_GENDER' | translate }} {{ 'EDIT_PARENT.REQUIRED' |\r
                    translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-gender-ambiguous input-icon"></i>\r
                    <ng-select class="form-input" [class.is-invalid]="isChildFieldInvalid('gender')"\r
                      formControlName="gender" [items]="genders" bindLabel="label" bindValue="value"\r
                      [placeholder]="'EDIT_PARENT.SELECT_GENDER' | translate" [clearable]="false" [searchable]="false">\r
                      <ng-template ng-option-tmp let-item="item">\r
                        <div class="option-with-image">\r
                          <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                          <span class="option-title">{{ item.label }}</span>\r
                        </div>\r
                      </ng-template>\r
                    </ng-select>\r
                  </div>\r
                  <div *ngIf="isChildFieldInvalid('gender')" class="error-message">\r
                    {{ getChildFieldError('gender') }}\r
                  </div>\r
                </div>\r
                <div class="form-group full-width">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_ALLERGIES' | translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-exclamation-triangle input-icon"></i>\r
                    <textarea class="form-input" formControlName="allergies" rows="2"\r
                      [placeholder]="'EDIT_PARENT.ALLERGIES_PLACEHOLDER' | translate"></textarea>\r
                  </div>\r
                </div>\r
                <div class="form-group full-width">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_MEDICAL_NOTES' | translate }}</label>\r
                  <div class="input-with-icon">\r
                    <i class="bi bi-clipboard2-pulse input-icon"></i>\r
                    <textarea class="form-input" formControlName="medicalNotes" rows="2"\r
                      [placeholder]="'EDIT_PARENT.MEDICAL_NOTES_PLACEHOLDER' | translate"></textarea>\r
                  </div>\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">{{ 'EDIT_PARENT.CHILD_PROFILE_PICTURE' | translate }}</label>\r
                  <div class="file-upload-area">\r
                    <input type="file" #childFileInput id="childProfilePicture" class="file-input"\r
                      (change)="onChildImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                    <label for="childProfilePicture" class="file-upload-label">\r
                      <div *ngIf="!childImagePreview" class="upload-placeholder">\r
                        <i class="bi bi-cloud-upload"></i>\r
                        <span>{{ 'GLOBAL.UPLOAD_PHOTO' | translate }}</span>\r
                      </div>\r
                      <img *ngIf="childImagePreview" [src]="childImagePreview" class="preview-image"\r
                        [alt]="'GLOBAL.PREVIEW' | translate">\r
                    </label>\r
                    <button *ngIf="childImagePreview" type="button" class="btn-remove-image"\r
                      (click)="removeChildImage()">\r
                      <i class="bi bi-x-circle"></i>\r
                      {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
                    </button>\r
                  </div>\r
                  <small class="form-hint">{{ 'GLOBAL.IMAGE_HINT' | translate }}</small>\r
                </div>\r
              </div>\r
              <div class="form-actions mt-3">\r
                <button type="button" class="custom-btn-2 btn-cancel-2" (click)="toggleAddChild()" [disabled]="saving">\r
                  <i class="bi bi-x-circle"></i>\r
                  {{ 'EDIT_PARENT.CANCEL' | translate }}\r
                </button>\r
                <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || childForm.invalid">\r
                  <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
                  <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
                  {{ saving ? ('EDIT_PARENT.ADDING_CHILD' | translate) : ('EDIT_PARENT.SAVE_CHILD' | translate) }}\r
                </button>\r
              </div>\r
            </form>\r
          </div>\r
\r
          <!-- Children List -->\r
          <div *ngIf="children.length === 0 && !showAddChild" class="text-center text-muted py-4">\r
            <i class="bi bi-people" style="font-size: 48px; opacity: 0.5;"></i>\r
            <p class="mt-2">{{ 'EDIT_PARENT.NO_CHILDREN' | translate }}</p>\r
          </div>\r
\r
          <div *ngFor="let child of children" class="child-card mt-3">\r
            <div class="d-flex align-items-center">\r
              <img loading="lazy" [src]="child.profilePicture || 'assets/child.png'" class="rounded-circle me-3"\r
                width="60" height="60" alt="Child">\r
              <div class="flex-grow-1">\r
                <h6 class="mb-1">{{ child.firstName }} {{ child.lastName }}</h6>\r
                <p class="mb-0 text-muted">\r
                  {{ child.gender }} -\r
                  @if( calculateAge(child.dateOfBirth).years > 0){\r
                  {{ calculateAge(child.dateOfBirth).years}} {{ 'EDIT_PARENT.YEARS' | translate }}\r
                  }\r
                  @if( calculateAge(child.dateOfBirth).years <= 0){ {{ calculateAge(child.dateOfBirth).months}} months\r
                    old }  </p>\r
                    <small class="text-muted">{{ 'EDIT_PARENT.BORN' | translate }}: {{ child.dateOfBirth |\r
                      date:'mediumDate' }}</small>\r
              </div>\r
              <div class="text-end">\r
                <button class="btn btn-outline-primary btn-sm me-2" [routerLink]="['/children/edit', child.id]">\r
                  <i class="bi bi-pencil-square"></i> {{ 'EDIT_PARENT.EDIT' | translate }}\r
                </button>\r
                <button class="btn btn-outline-info btn-sm" [routerLink]="['/children/detail', child.id]">\r
                  <i class="bi bi-eye"></i> {{ 'EDIT_PARENT.VIEW' | translate }}\r
                </button>\r
              </div>\r
            </div>\r
            <div *ngIf="child.allergies || child.medicalNotes" class="mt-2 pt-2 border-top">\r
              <small class="text-muted d-block" *ngIf="child.allergies">\r
                <strong>{{ 'EDIT_PARENT.ALLERGIES' | translate }}:</strong> {{ child.allergies }}\r
              </small>\r
              <small class="text-muted d-block" *ngIf="child.medicalNotes">\r
                <strong>{{ 'EDIT_PARENT.MEDICAL_NOTES' | translate }}:</strong> {{ child.medicalNotes }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Danger Zone - Delete Account -->\r
      <div class="card-add-pages danger-zone-card">\r
        <div class="add-form form-section">\r
          <div class="section-header danger-header">\r
            <i class="bi bi-exclamation-triangle-fill"></i>\r
            <h4>{{ 'SETTINGS.DANGER_ZONE' | translate }}</h4>\r
          </div>\r
          <div class="danger-zone-content">\r
            <div class="danger-zone-info">\r
              <h5>{{ 'SETTINGS.DELETE_ACCOUNT' | translate }}</h5>\r
              <p>{{ 'SETTINGS.DELETE_ACCOUNT_DESC' | translate }}</p>\r
            </div>\r
            <button type="button" class="btn-delete-account" (click)="deleteAccount()" [disabled]="deleting">\r
              <span *ngIf="deleting" class="spinner-border spinner-border-sm me-2"></span>\r
              <i *ngIf="!deleting" class="bi bi-trash3"></i>\r
              {{ deleting ? ('SETTINGS.DELETING' | translate) : ('SETTINGS.DELETE_ACCOUNT_BTN' | translate) }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/parent/edit-parent/edit-parent.scss */\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n.rounded-circle {\n  border-radius: 50% !important;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n}\n.flex-grow-1 {\n  flex: 1 1 auto !important;\n}\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n.me-3 {\n  margin-right: 1rem !important;\n}\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n.p-3 {\n  padding: 1rem !important;\n}\n.gap-2 {\n  gap: 0.5rem !important;\n}\n.d-flex {\n  display: flex !important;\n}\n.align-items-center {\n  align-items: center !important;\n}\n.justify-content-between {\n  justify-content: space-between !important;\n}\n.text-end {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.add-form.form-section .btn-add-global-2 i {\n  font-size: 14px;\n  color: #ffffff;\n}\n.danger-zone-card {\n  border: 1px solid #dc3545 !important;\n  margin-top: 1.5rem;\n}\n.danger-zone-card .danger-header i,\n.danger-zone-card .danger-header h4 {\n  color: #dc3545 !important;\n}\n.danger-zone-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n.danger-zone-content .danger-zone-info {\n  flex: 1;\n  min-width: 200px;\n}\n.danger-zone-content .danger-zone-info h5 {\n  color: #dc3545;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n.danger-zone-content .danger-zone-info p {\n  color: #6c757d;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.btn-delete-account {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background-color: #dc3545;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-delete-account:hover:not(:disabled) {\n  background-color: #bb2d3b;\n}\n.btn-delete-account:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn-delete-account i {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=edit-parent.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: ParentService }, { type: ChildrenService }, { type: AuthService }, { type: TranslateService }, { type: PageTitleService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], childFileInput: [{
    type: ViewChild,
    args: ["childFileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }], childImageCropper: [{
    type: ViewChild,
    args: ["childImageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditParent, { className: "EditParent", filePath: "src/app/features/parent/edit-parent/edit-parent.ts", lineNumber: 28 });
})();
export {
  EditParent
};
//# sourceMappingURL=chunk-SYQMLSEJ.js.map
