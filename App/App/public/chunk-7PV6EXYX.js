import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  ParentChildHeaderComponent
} from "./chunk-FEEGDPUH.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  LanguageService
} from "./chunk-LJABGPK5.js";
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
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  environment
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
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
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/shared/validators/custom.validators.ts
var CustomValidators = class {
  static email(control) {
    if (!control.value)
      return null;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(control.value) ? null : { invalidEmail: true };
  }
  static phone(control) {
    if (!control.value)
      return null;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    const cleaned = control.value.replace(/\D/g, "");
    return cleaned.length >= 6 ? null : { invalidPhone: true };
  }
  static minAge(minAge) {
    return (control) => {
      if (!control.value)
        return null;
      const birthDate = new Date(control.value);
      const today = /* @__PURE__ */ new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const actualAge = monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate() ? age - 1 : age;
      return actualAge >= minAge ? null : { minAge: { required: minAge, actual: actualAge } };
    };
  }
  static maxAge(maxAge) {
    return (control) => {
      if (!control.value)
        return null;
      const birthDate = new Date(control.value);
      const today = /* @__PURE__ */ new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age <= maxAge ? null : { maxAge: { required: maxAge, actual: age } };
    };
  }
  static futureDate(control) {
    if (!control.value)
      return null;
    const inputDate = new Date(control.value);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate >= today ? null : { pastDate: true };
  }
  static pastDate(control) {
    if (!control.value)
      return null;
    const inputDate = new Date(control.value);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today ? null : { futureDate: true };
  }
  static positiveNumber(control) {
    if (!control.value)
      return null;
    return control.value > 0 ? null : { notPositive: true };
  }
  static matchPassword(passwordField) {
    return (control) => {
      if (!control.parent)
        return null;
      const password = control.parent.get(passwordField);
      return password && control.value === password.value ? null : { passwordMismatch: true };
    };
  }
  static noWhitespace(control) {
    if (!control.value)
      return null;
    const isWhitespace = (control.value || "").trim().length === 0;
    return !isWhitespace ? null : { whitespace: true };
  }
  static alphaOnly(control) {
    if (!control.value)
      return null;
    const alphaRegex = /^[a-zA-Z\s]+$/;
    return alphaRegex.test(control.value) ? null : { notAlpha: true };
  }
};

// src/app/features/profile/edit-profile/edit-profile.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
var _c2 = (a0, a1, a2) => ({ firstName: a0, lastName: a1, profilePicture: a2 });
var _c3 = (a0) => [a0];
function EditProfile_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "firstName"), " ");
  }
}
function EditProfile_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "lastName"), " ");
  }
}
function EditProfile_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "email"), " ");
  }
}
function EditProfile_div_0_div_33_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "phoneNumber"), " ");
  }
}
function EditProfile_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 40);
    \u0275\u0275template(6, EditProfile_div_0_div_33_div_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 5, "EDIT_PROFILE.PHONE"), " ", \u0275\u0275pipeBind1(4, 7, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.phoneNumber.invalid && ctx_r1.phoneNumber.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.phoneNumber.invalid && ctx_r1.phoneNumber.touched);
  }
}
function EditProfile_div_0_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "EDIT_PROFILE.ADDRESS"));
  }
}
function EditProfile_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "EDIT_PROFILE.EMERGENCY_CONTACT"));
  }
}
function EditProfile_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 43);
    \u0275\u0275elementStart(5, "small", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EDIT_PROFILE.ROLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.userRole);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "EDIT_PROFILE.ROLE_HINT"));
  }
}
function EditProfile_div_0_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EditProfile_div_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function EditProfile_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "currentPassword"), " ");
  }
}
function EditProfile_div_0_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "newPassword"), " ");
  }
}
function EditProfile_div_0_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "confirmPassword"), " ");
  }
}
function EditProfile_div_0_option_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    \u0275\u0275property("value", lang_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", lang_r3.flag, " ", lang_r3.name);
  }
}
function EditProfile_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-parent-child-header", 5);
    \u0275\u0275listener("onBack", function EditProfile_div_0_Template_app_parent_child_header_onBack_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 10)(10, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_0_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateProfile());
    });
    \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "label", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 15);
    \u0275\u0275template(18, EditProfile_div_0_div_18_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "label", 14);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 17);
    \u0275\u0275template(25, EditProfile_div_0_div_25_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13)(27, "label", 14);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 18);
    \u0275\u0275template(32, EditProfile_div_0_div_32_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EditProfile_div_0_div_33_Template, 7, 9, "div", 19)(34, EditProfile_div_0_div_34_Template, 5, 3, "div", 19)(35, EditProfile_div_0_div_35_Template, 5, 3, "div", 19)(36, EditProfile_div_0_div_36_Template, 8, 7, "div", 19);
    \u0275\u0275elementStart(37, "div", 13)(38, "label", 14);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 20);
    \u0275\u0275listener("change", function EditProfile_div_0_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageSelect($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, EditProfile_div_0_div_42_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(43, "div", 22)(44, "button", 23);
    \u0275\u0275template(45, EditProfile_div_0_span_45_Template, 1, 0, "span", 24);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 25);
    \u0275\u0275listener("click", function EditProfile_div_0_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 8)(53, "div", 9)(54, "h5");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 10)(58, "p", 26);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_0_Template_form_ngSubmit_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePassword());
    });
    \u0275\u0275elementStart(62, "div", 27)(63, "label", 14);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 28);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275template(69, EditProfile_div_0_div_69_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 27)(71, "label", 14);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "input", 29);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275template(77, EditProfile_div_0_div_77_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 27)(79, "label", 14);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 30);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275template(85, EditProfile_div_0_div_85_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 31);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "div", 8)(90, "div", 9)(91, "h5");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 10)(95, "p", 26);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_0_Template_form_ngSubmit_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePreferences());
    });
    \u0275\u0275elementStart(99, "div", 27)(100, "label", 14);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "select", 32);
    \u0275\u0275template(104, EditProfile_div_0_option_104_Template, 2, 3, "option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 27)(106, "label", 14);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "select", 34)(110, "option", 35);
    \u0275\u0275text(111, "UTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "option", 36);
    \u0275\u0275text(113, "EST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "option", 37);
    \u0275\u0275text(115, "PST");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "button", 38);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_31_0;
    let tmp_33_0;
    let tmp_35_0;
    let tmp_37_0;
    let tmp_39_0;
    let tmp_41_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("children", \u0275\u0275pureFunction1(122, _c3, \u0275\u0275pureFunction3(118, _c2, (tmp_1_0 = ctx_r1.profileForm.get("firstName")) == null ? null : tmp_1_0.value, (tmp_1_0 = ctx_r1.profileForm.get("lastName")) == null ? null : tmp_1_0.value, ctx_r1.imagePreview)))("currentChildIndex", 0)("showDatePicker", false)("showSettings", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 62, "EDIT_PROFILE.PERSONAL_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(15, 64, "EDIT_PROFILE.FIRST_NAME"), " ", \u0275\u0275pipeBind1(16, 66, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.firstName.invalid && ctx_r1.firstName.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstName.invalid && ctx_r1.firstName.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 68, "EDIT_PROFILE.LAST_NAME"), " ", \u0275\u0275pipeBind1(23, 70, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.lastName.invalid && ctx_r1.lastName.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastName.invalid && ctx_r1.lastName.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(29, 72, "EDIT_PROFILE.EMAIL"), " ", \u0275\u0275pipeBind1(30, 74, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.email.invalid && ctx_r1.email.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email.invalid && ctx_r1.email.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isParent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isParent());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 76, "EDIT_PROFILE.PROFILE_PICTURE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.profileForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(47, 78, "EDIT_PROFILE.UPDATING") : \u0275\u0275pipeBind1(48, 80, "EDIT_PROFILE.UPDATE_PROFILE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 82, "EDIT_PROFILE.CANCEL"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 84, "EDIT_PROFILE.SECURITY_SETTINGS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 86, "EDIT_PROFILE.SECURITY_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.securityForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(65, 88, "EDIT_PROFILE.CURRENT_PASSWORD"), " ", \u0275\u0275pipeBind1(66, 90, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_31_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_31_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(68, 92, "EDIT_PROFILE.CURRENT_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_33_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_33_0.invalid) && ((tmp_33_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_33_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(73, 94, "EDIT_PROFILE.NEW_PASSWORD"), " ", \u0275\u0275pipeBind1(74, 96, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_35_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_35_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(76, 98, "EDIT_PROFILE.NEW_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_37_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_37_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(81, 100, "EDIT_PROFILE.CONFIRM_PASSWORD"), " ", \u0275\u0275pipeBind1(82, 102, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_39_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_39_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(84, 104, "EDIT_PROFILE.CONFIRM_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_41_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_41_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.securityForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 106, "EDIT_PROFILE.UPDATE_PASSWORD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 108, "EDIT_PROFILE.PREFERENCES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 110, "EDIT_PROFILE.PREFERENCES_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.preferencesForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 112, "EDIT_PROFILE.LANGUAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.languages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 114, "EDIT_PROFILE.TIMEZONE"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 116, "EDIT_PROFILE.SAVE_PREFERENCES"));
  }
}
function EditProfile_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "img", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function EditProfile_div_1_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(), " ");
  }
}
function EditProfile_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "firstName"), " ");
  }
}
function EditProfile_div_1_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "lastName"), " ");
  }
}
function EditProfile_div_1_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.profileForm, "email"), " ");
  }
}
function EditProfile_div_1_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EditProfile_div_1_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function EditProfile_div_1_i_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
  }
}
function EditProfile_div_1_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "currentPassword"), " ");
  }
}
function EditProfile_div_1_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "newPassword"), " ");
  }
}
function EditProfile_div_1_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.securityForm, "confirmPassword"), " ");
  }
}
function EditProfile_div_1_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r5.flag, " ", item_r5.name);
  }
}
function EditProfile_div_1_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r6.flag, " ", item_r6.name);
  }
}
function EditProfile_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "app-title-page", 48);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 49)(6, "div", 50)(7, "div", 9)(8, "h5", 51);
    \u0275\u0275element(9, "i", 52);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 53)(13, "div", 54);
    \u0275\u0275template(14, EditProfile_div_1_div_14_Template, 2, 1, "div", 55)(15, EditProfile_div_1_ng_template_15_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(17, "button", 56);
    \u0275\u0275listener("click", function EditProfile_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPhotoModal());
    });
    \u0275\u0275element(18, "i", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "h5", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 59);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 60)(24, "div", 50)(25, "div", 9)(26, "h5", 51);
    \u0275\u0275element(27, "i", 61);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_1_Template_form_ngSubmit_31_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateProfile());
    });
    \u0275\u0275elementStart(32, "div", 12)(33, "div", 13)(34, "label", 14);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 15);
    \u0275\u0275template(39, EditProfile_div_1_div_39_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 13)(41, "label", 14);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 17);
    \u0275\u0275template(46, EditProfile_div_1_div_46_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 13)(48, "label", 14);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 18);
    \u0275\u0275template(53, EditProfile_div_1_div_53_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 13)(55, "label", 14);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 43);
    \u0275\u0275elementStart(59, "small", 26);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, EditProfile_div_1_div_62_Template, 2, 1, "div", 21);
    \u0275\u0275elementStart(63, "div", 22)(64, "button", 62);
    \u0275\u0275listener("click", function EditProfile_div_1_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 63);
    \u0275\u0275template(68, EditProfile_div_1_span_68_Template, 1, 0, "span", 24)(69, EditProfile_div_1_i_69_Template, 1, 0, "i", 64);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 50)(74, "div", 9)(75, "h5", 51);
    \u0275\u0275element(76, "i", 65);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 10)(80, "p", 26);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_1_Template_form_ngSubmit_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePassword());
    });
    \u0275\u0275elementStart(84, "div", 12)(85, "div", 13)(86, "label", 14);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 28);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275template(92, EditProfile_div_1_div_92_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 13)(94, "label", 14);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 29);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275template(100, EditProfile_div_1_div_100_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 13)(102, "label", 14);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "input", 30);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275template(108, EditProfile_div_1_div_108_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 66)(110, "button", 63);
    \u0275\u0275element(111, "i", 67);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(114, "div", 50)(115, "div", 9)(116, "h5", 51);
    \u0275\u0275element(117, "i", 68);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 10)(121, "p", 26);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "form", 11);
    \u0275\u0275listener("ngSubmit", function EditProfile_div_1_Template_form_ngSubmit_124_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updatePreferences());
    });
    \u0275\u0275elementStart(125, "div", 12)(126, "div", 13)(127, "label", 69);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ng-select", 70);
    \u0275\u0275listener("change", function EditProfile_div_1_Template_ng_select_change_130_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchLanguage($event == null ? null : $event.code));
    });
    \u0275\u0275template(131, EditProfile_div_1_ng_template_131_Template, 2, 2, "ng-template", 71)(132, EditProfile_div_1_ng_template_132_Template, 2, 2, "ng-template", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 13)(134, "label", 69);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "select", 34)(138, "option", 35);
    \u0275\u0275text(139, "UTC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "option", 36);
    \u0275\u0275text(141, "EST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "option", 37);
    \u0275\u0275text(143, "PST");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(144, "div", 66)(145, "button", 73);
    \u0275\u0275element(146, "i", 74);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(149, "input", 75, 1);
    \u0275\u0275listener("change", function EditProfile_div_1_Template_input_change_149_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "app-image-cropper-modal", 76, 2);
    \u0275\u0275listener("imageCropped", function EditProfile_div_1_Template_app_image_cropper_modal_imageCropped_151_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageCropped($event));
    })("cancelled", function EditProfile_div_1_Template_app_image_cropper_modal_cancelled_151_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCropCancelled());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_37_0;
    let tmp_39_0;
    let tmp_41_0;
    let tmp_43_0;
    let tmp_45_0;
    let tmp_47_0;
    const defaultPhoto_r7 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 73, "EDIT_PROFILE.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 75, "EDIT_PROFILE.SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 77, "EDIT_PROFILE.PROFILE_PICTURE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.imagePreview)("ngIfElse", defaultPhoto_r7);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", (tmp_10_0 = ctx_r1.profileForm.get("firstName")) == null ? null : tmp_10_0.value, " ", (tmp_10_0 = ctx_r1.profileForm.get("lastName")) == null ? null : tmp_10_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userRole);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 79, "EDIT_PROFILE.PERSONAL_INFO"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(36, 81, "EDIT_PROFILE.FIRST_NAME"), " ", \u0275\u0275pipeBind1(37, 83, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.firstName.invalid && ctx_r1.firstName.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.firstName.invalid && ctx_r1.firstName.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(43, 85, "EDIT_PROFILE.LAST_NAME"), " ", \u0275\u0275pipeBind1(44, 87, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.lastName.invalid && ctx_r1.lastName.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lastName.invalid && ctx_r1.lastName.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(50, 89, "EDIT_PROFILE.EMAIL"), " ", \u0275\u0275pipeBind1(51, 91, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.email.invalid && ctx_r1.email.touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.email.invalid && ctx_r1.email.touched);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 93, "EDIT_PROFILE.ROLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.userRole);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 95, "EDIT_PROFILE.ROLE_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 97, "EDIT_PROFILE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.profileForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(71, 99, "EDIT_PROFILE.UPDATING") : \u0275\u0275pipeBind1(72, 101, "EDIT_PROFILE.UPDATE_PROFILE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 103, "EDIT_PROFILE.SECURITY_SETTINGS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 105, "EDIT_PROFILE.SECURITY_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.securityForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(88, 107, "EDIT_PROFILE.CURRENT_PASSWORD"), " ", \u0275\u0275pipeBind1(89, 109, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_37_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_37_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(91, 111, "EDIT_PROFILE.CURRENT_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_39_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx_r1.securityForm.get("currentPassword")) == null ? null : tmp_39_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(96, 113, "EDIT_PROFILE.NEW_PASSWORD"), " ", \u0275\u0275pipeBind1(97, 115, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_41_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_41_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(99, 117, "EDIT_PROFILE.NEW_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_43_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_43_0.invalid) && ((tmp_43_0 = ctx_r1.securityForm.get("newPassword")) == null ? null : tmp_43_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(104, 119, "EDIT_PROFILE.CONFIRM_PASSWORD"), " ", \u0275\u0275pipeBind1(105, 121, "EDIT_PROFILE.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_45_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_45_0.invalid) && ((tmp_45_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_45_0.touched));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(107, 123, "EDIT_PROFILE.CONFIRM_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_47_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_47_0.invalid) && ((tmp_47_0 = ctx_r1.securityForm.get("confirmPassword")) == null ? null : tmp_47_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.securityForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 125, "EDIT_PROFILE.UPDATE_PASSWORD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 127, "EDIT_PROFILE.PREFERENCES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 129, "EDIT_PROFILE.PREFERENCES_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.preferencesForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 131, "EDIT_PROFILE.LANGUAGE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.languages)("clearable", false)("searchable", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 133, "EDIT_PROFILE.TIMEZONE"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(148, 135, "EDIT_PROFILE.SAVE_PREFERENCES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("imageFile", ctx_r1.selectedImageFile)("aspectRatio", 1)("roundCropper", true)("resizeToWidth", 300)("resizeToHeight", 300);
  }
}
var EditProfile = class _EditProfile {
  authService;
  http;
  router;
  fb;
  location;
  translate;
  languageService;
  simpleToastService;
  fileInput;
  imageCropper;
  profileForm;
  securityForm;
  preferencesForm;
  saving = false;
  imagePreview = null;
  selectedImageFile = null;
  errorMessage = "";
  activeTab = "personal";
  userRole = "";
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  // Language options
  languages = [
    { code: "en", name: "English", flag: "\u{1F1EA}\u{1F1F3}" },
    { code: "fr", name: "Fran\xE7ais", flag: "\u{1F1EB}\u{1F1F7}" },
    { code: "it", name: "Italiano", flag: "\u{1F1EE}\u{1F1F9}" },
    { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\u{1F1F8}\u{1F1E6}" }
  ];
  breadcrumbs = [];
  isParent() {
    return this.authService.isParent();
  }
  constructor(authService, http, router, fb, location, translate, languageService, simpleToastService) {
    this.authService = authService;
    this.http = http;
    this.router = router;
    this.fb = fb;
    this.location = location;
    this.translate = translate;
    this.languageService = languageService;
    this.simpleToastService = simpleToastService;
    this.initBreadcrumbs();
  }
  get currentLang() {
    return this.translate.currentLang;
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("EDIT_PROFILE.TITLE") }
    ];
  }
  ngOnInit() {
    this.initForms();
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userRole = user.role;
      if (this.isParent()) {
        this.loadParentData();
      } else {
        this.profileForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        });
        if (user.profilePictureUrl) {
          this.imagePreview = user.profilePictureUrl.startsWith("/") ? environment.apiUrl.replace("/api", "") + user.profilePictureUrl : user.profilePictureUrl;
        } else {
          this.imagePreview = user.profilePicture || null;
        }
      }
    }
  }
  loadParentData() {
    const parentId = this.authService.getParentId();
    if (parentId) {
      this.http.get(`${environment.apiUrl}/parents/${parentId}`).subscribe({
        next: (parent) => {
          this.profileForm.patchValue({
            firstName: parent.firstName,
            lastName: parent.lastName,
            email: parent.email,
            phoneNumber: parent.phoneNumber,
            address: parent.address,
            emergencyContact: parent.emergencyContact
          });
          if (parent.profilePictureUrl) {
            this.imagePreview = parent.profilePictureUrl.startsWith("/") ? environment.apiUrl.replace("/api", "") + parent.profilePictureUrl : parent.profilePictureUrl;
          } else {
            this.imagePreview = parent.profilePicture || null;
          }
        },
        error: (err) => {
          console.error("Failed to load parent data:", err);
          this.errorMessage = this.translate.instant("EDIT_PROFILE.LOAD_ERROR");
        }
      });
    }
  }
  initForms() {
    const phoneValidators = this.isParent() ? [Validators.required, CustomValidators.phone] : [];
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required, CustomValidators.noWhitespace, CustomValidators.alphaOnly]],
      lastName: ["", [Validators.required, CustomValidators.noWhitespace, CustomValidators.alphaOnly]],
      email: ["", [Validators.required, CustomValidators.email]],
      phoneNumber: ["", phoneValidators],
      address: [""],
      emergencyContact: [""],
      profilePicture: [""]
    });
    this.securityForm = this.fb.group({
      currentPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, CustomValidators.matchPassword("newPassword")]]
    });
    const currentLang = localStorage.getItem("lang") || this.translate.currentLang || "en";
    this.preferencesForm = this.fb.group({
      language: [currentLang],
      timezone: ["UTC"]
    });
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  getInitials() {
    const firstName = this.profileForm.get("firstName")?.value || "";
    const lastName = this.profileForm.get("lastName")?.value || "";
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  get firstName() {
    return this.profileForm.get("firstName");
  }
  get lastName() {
    return this.profileForm.get("lastName");
  }
  get email() {
    return this.profileForm.get("email");
  }
  get phoneNumber() {
    return this.profileForm.get("phoneNumber");
  }
  get address() {
    return this.profileForm.get("address");
  }
  get emergencyContact() {
    return this.profileForm.get("emergencyContact");
  }
  updateProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const parentId = this.authService.getParentId();
    if (parentId) {
      this.http.get(`${environment.apiUrl}/parents/${parentId}`).subscribe({
        next: (parent) => {
          const updatedData = __spreadProps(__spreadValues({}, parent), {
            firstName: this.profileForm.value.firstName,
            lastName: this.profileForm.value.lastName,
            email: this.profileForm.value.email,
            phoneNumber: this.profileForm.value.phoneNumber,
            address: this.profileForm.value.address,
            emergencyContact: this.profileForm.value.emergencyContact,
            profilePicture: this.imagePreview || parent.profilePicture
          });
          this.http.put(`${environment.apiUrl}/parents/${parentId}`, updatedData).subscribe({
            next: () => {
              const currentUser = this.authService.getCurrentUser();
              if (currentUser) {
                this.authService.updateCurrentUser(__spreadProps(__spreadValues({}, currentUser), {
                  firstName: updatedData.firstName,
                  lastName: updatedData.lastName,
                  email: updatedData.email,
                  profilePicture: updatedData.profilePicture
                }));
              }
              this.router.navigate(["/dashboard"]);
              this.saving = false;
            },
            error: (error) => {
              this.errorMessage = error.error?.message || this.translate.instant("EDIT_PROFILE.UPDATE_ERROR");
              this.saving = false;
            }
          });
        },
        error: (error) => {
          this.errorMessage = this.translate.instant("EDIT_PROFILE.LOAD_ERROR");
          this.saving = false;
        }
      });
    } else {
      const updatedData = {
        firstName: this.profileForm.value.firstName,
        lastName: this.profileForm.value.lastName,
        email: this.profileForm.value.email,
        profilePicture: this.imagePreview || ""
      };
      this.http.put(`${environment.apiUrl}/auth/update-profile`, updatedData).subscribe({
        next: () => {
          const currentUser = this.authService.getCurrentUser();
          if (currentUser) {
            this.authService.updateCurrentUser(__spreadProps(__spreadValues({}, currentUser), {
              firstName: updatedData.firstName,
              lastName: updatedData.lastName,
              email: updatedData.email,
              profilePicture: updatedData.profilePicture || currentUser.profilePicture
            }));
          }
          showSuccessToast(this.translate.instant("EDIT_PROFILE.SUCCESS"));
          this.router.navigate(["/dashboard"]);
          this.saving = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || this.translate.instant("EDIT_PROFILE.UPDATE_ERROR");
          this.saving = false;
        }
      });
    }
  }
  updatePassword() {
    if (this.securityForm.invalid) {
      this.securityForm.markAllAsTouched();
      return;
    }
    console.log("Update password:", this.securityForm.value);
  }
  switchLanguage(lang) {
    if (lang) {
      this.translate.use(lang);
      this.preferencesForm.patchValue({ language: lang });
    }
  }
  updatePreferences() {
    if (this.preferencesForm.invalid) {
      this.preferencesForm.markAllAsTouched();
      return;
    }
    const selectedLang = this.preferencesForm.get("language")?.value;
    this.languageService.use(selectedLang);
    this.authService.updateLanguage(selectedLang).subscribe({
      next: () => {
        this.initBreadcrumbs();
        this.simpleToastService.success(this.translate.instant("SETTINGS.LANGUAGE_SAVED"));
      },
      error: () => {
        this.simpleToastService.warning(this.translate.instant("SETTINGS.LANGUAGE_SAVED_LOCALLY"));
      }
    });
  }
  cancel() {
    this.router.navigate(["/dashboard"]);
  }
  back() {
    this.location.back();
  }
  getErrorMessage(formGroup, fieldName) {
    const control = formGroup.get(fieldName);
    if (!control || !control.errors || !control.touched)
      return "";
    const fieldKeyMap = {
      "firstName": "FIRST_NAME",
      "lastName": "LAST_NAME",
      "email": "EMAIL",
      "phoneNumber": "PHONE"
    };
    if (control.errors["required"]) {
      const fieldKey = fieldKeyMap[fieldName];
      if (fieldKey) {
        return this.translate.instant(`EDIT_PROFILE.VALIDATION.${fieldKey}_REQUIRED`);
      }
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    if (control.errors["invalidEmail"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.EMAIL_INVALID");
    if (control.errors["invalidPhone"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.PHONE_INVALID");
    if (control.errors["minlength"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.PASSWORD_MIN_LENGTH", { length: control.errors["minlength"].requiredLength });
    if (control.errors["notAlpha"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.LETTERS_ONLY");
    if (control.errors["whitespace"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.NO_WHITESPACE");
    if (control.errors["passwordMismatch"])
      return this.translate.instant("EDIT_PROFILE.VALIDATION.PASSWORD_MISMATCH");
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  openPhotoModal() {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EDIT_PROFILE.CHANGE_PHOTO"),
      showCancelButton: true,
      showDenyButton: this.imagePreview ? true : false,
      confirmButtonText: `<i class="bi bi-upload me-2"></i>${this.translate.instant("EDIT_PROFILE.UPLOAD_PHOTO")}`,
      denyButtonText: `<i class="bi bi-trash me-2"></i>${this.translate.instant("EDIT_PROFILE.REMOVE_PHOTO")}`,
      cancelButtonText: this.translate.instant("EDIT_PROFILE.CANCEL"),
      confirmButtonColor: "#7dd3c0",
      denyButtonColor: "#ff6b6b",
      cancelButtonColor: "#6c757d",
      customClass: {
        popup: "profile-photo-modal",
        confirmButton: "swal-btn-upload",
        denyButton: "swal-btn-remove",
        cancelButton: "swal-btn-cancel"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.fileInput?.nativeElement.click();
      } else if (result.isDenied) {
        this.removeImage();
      }
    });
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToastService.error(this.translate.instant("EDIT_PROFILE.INVALID_FILE_TYPE_TEXT"));
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      this.simpleToastService.error(this.translate.instant("EDIT_PROFILE.FILE_TOO_LARGE_TEXT"));
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
    this.profileForm.patchValue({ profilePicture: croppedImage });
    this.selectedImageFile = null;
  }
  onCropCancelled() {
    this.selectedImageFile = null;
    this.resetFileInput();
  }
  removeImage() {
    this.imagePreview = null;
    this.profileForm.patchValue({ profilePicture: "" });
    this.resetFileInput();
    this.simpleToastService.success(this.translate.instant("EDIT_PROFILE.PHOTO_REMOVED_TEXT"));
  }
  resetFileInput() {
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  static \u0275fac = function EditProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProfile)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfile, selectors: [["app-edit-profile"]], viewQuery: function EditProfile_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 2, vars: 2, consts: [["defaultPhoto", ""], ["fileInput", ""], ["imageCropper", ""], [4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], [3, "onBack", "children", "currentChildIndex", "showDatePicker", "showSettings"], [1, "body", "container-fluid"], [1, "main-information"], [1, "card", "card-general"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["class", "alert alert-danger", 4, "ngIf"], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "submit", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-cancel-global", 3, "click", "disabled"], [1, "text-muted"], [1, "mb-3"], ["type", "password", "formControlName", "currentPassword", 1, "form-control", 3, "placeholder"], ["type", "password", "formControlName", "newPassword", 1, "form-control", 3, "placeholder"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "float-right", "action-btn", "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["formControlName", "language", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "timezone", 1, "form-select"], ["value", "UTC"], ["value", "EST"], ["value", "PST"], ["type", "submit", 1, "action-btn", "custom-btn-2", "btn-add-global-2", "float-right"], [1, "invalid-feedback"], ["type", "number", "formControlName", "phoneNumber", 1, "form-control"], ["type", "text", "formControlName", "address", 1, "form-control"], ["type", "text", "formControlName", "emergencyContact", 1, "form-control"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [3, "value"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-person-circle", 3, "title", "subtitle", "breadcrumbs"], [1, "col-12", "col-md-4"], [1, "card", "card-general", "shadow-sm"], [1, "mb-0"], [1, "bi", "bi-person-circle"], [1, "card-body", "text-center"], [1, "profile-picture-container"], ["class", "profile-picture-wrapper", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "btn-add-photo", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "mt-3"], [1, "text-muted", "mb-0"], [1, "col-12", "col-md-8"], [1, "bi", "bi-person-fill"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "bi bi-check-circle me-2", 4, "ngIf"], [1, "bi", "bi-shield-lock-fill"], [1, "d-flex", "justify-content-end"], [1, "bi", "bi-check-circle", "me-2"], [1, "bi", "bi-gear-fill"], [1, "form-label", "fw-bold"], ["formControlName", "language", "bindLabel", "name", "bindValue", "code", 3, "change", "items", "clearable", "searchable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2"], [1, "bi", "bi-floppy", "me-2"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [3, "imageCropped", "cancelled", "imageFile", "aspectRatio", "roundCropper", "resizeToWidth", "resizeToHeight"], [1, "profile-picture-wrapper"], ["loading", "lazy", "alt", "Profile", 1, "rounded-circle", "profile-picture", 3, "src"], [1, "profile-initials", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"]], template: function EditProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditProfile_div_0_Template, 119, 124, "div", 3)(1, EditProfile_div_1_Template, 153, 137, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, TitlePage, ParentChildHeaderComponent, ImageCropperModalComponent, TranslatePipe], styles: ["\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #202C4B;\n  border-color: #202C4B;\n  color: white;\n}\n  .page-setting i {\n  display: none !important;\n}\n  .header-info {\n  margin-bottom: 35px !important;\n}\n.profile-picture-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.profile-picture-container[_ngcontent-%COMP%]   .profile-picture-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-picture-container[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border: 3px solid #e9ecef;\n  transition: border-color 0.3s ease;\n}\n.profile-picture-container[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color, #7dd3c0);\n}\n.profile-picture-container[_ngcontent-%COMP%]   .profile-initials[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  font-size: 48px;\n  font-weight: 600;\n  background: var(--gradient-primary, linear-gradient(135deg, #7db9ff 0%, #7dd3c0 100%));\n  color: white;\n  border: 3px solid #e9ecef;\n  transition: transform 0.3s ease;\n}\n.profile-picture-container[_ngcontent-%COMP%]   .btn-add-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary, linear-gradient(135deg, #7db9ff 0%, #7dd3c0 100%));\n  border: 3px solid white;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.profile-picture-container[_ngcontent-%COMP%]   .btn-add-photo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.profile-picture-container[_ngcontent-%COMP%]   .btn-add-photo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.4);\n}\n.profile-picture-container[_ngcontent-%COMP%]   .btn-add-photo[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n  .profile-photo-modal {\n  border-radius: 16px;\n}\n  .profile-photo-modal .swal2-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #202C4B;\n}\n  .profile-photo-modal .swal2-actions {\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 0 20px;\n}\n  .profile-photo-modal .swal2-actions button {\n  width: 100%;\n  margin: 0;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n  .profile-photo-modal .swal-btn-upload {\n  order: 1;\n}\n  .profile-photo-modal .swal-btn-remove {\n  order: 2;\n}\n  .profile-photo-modal .swal-btn-cancel {\n  order: 3;\n  background: transparent !important;\n  color: #666 !important;\n  border: 1px solid #e9ecef !important;\n}\n  .profile-photo-modal .swal-btn-cancel:hover {\n  background: #f8f9fa !important;\n}\n/*# sourceMappingURL=edit-profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProfile, [{
    type: Component,
    args: [{ selector: "app-edit-profile", imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule, TitlePage, ParentChildHeaderComponent, ImageCropperModalComponent], standalone: true, template: `<div *ngIf="isParent()">\r
  <app-parent-child-header\r
    [children]="[{firstName: profileForm.get('firstName')?.value, lastName: profileForm.get('lastName')?.value, profilePicture: imagePreview}]"\r
    [currentChildIndex]="0"\r
    [showDatePicker]="false"\r
    [showSettings]="true"\r
    (onBack)="back()"\r
    >\r
  </app-parent-child-header>\r
  <div class="body container-fluid">\r
    <div class="main-information">\r
      <!-- Personal Info Tab -->\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5>{{ 'EDIT_PROFILE.PERSONAL_INFO' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.FIRST_NAME' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="firstName" \r
                       [class.is-invalid]="firstName.invalid && firstName.touched">\r
                <div class="invalid-feedback" *ngIf="firstName.invalid && firstName.touched">\r
                  {{ getErrorMessage(profileForm, 'firstName') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.LAST_NAME' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="lastName"\r
                       [class.is-invalid]="lastName.invalid && lastName.touched">\r
                <div class="invalid-feedback" *ngIf="lastName.invalid && lastName.touched">\r
                  {{ getErrorMessage(profileForm, 'lastName') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.EMAIL' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="email" class="form-control" formControlName="email"\r
                       [class.is-invalid]="email.invalid && email.touched">\r
                <div class="invalid-feedback" *ngIf="email.invalid && email.touched">\r
                  {{ getErrorMessage(profileForm, 'email') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="isParent()">\r
                <label class="form-label">{{ 'EDIT_PROFILE.PHONE' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="number" class="form-control" formControlName="phoneNumber"\r
                       [class.is-invalid]="phoneNumber.invalid && phoneNumber.touched">\r
                <div class="invalid-feedback" *ngIf="phoneNumber.invalid && phoneNumber.touched">\r
                  {{ getErrorMessage(profileForm, 'phoneNumber') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="isParent()">\r
                <label class="form-label">{{ 'EDIT_PROFILE.ADDRESS' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="address">\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="isParent()">\r
                <label class="form-label">{{ 'EDIT_PROFILE.EMERGENCY_CONTACT' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="emergencyContact">\r
              </div>\r
              <div class="col-md-6 mb-3" *ngIf="!isParent()">\r
                <label class="form-label">{{ 'EDIT_PROFILE.ROLE' | translate }}</label>\r
                <input type="text" class="form-control" [value]="userRole" disabled>\r
                <small class="text-muted">{{ 'EDIT_PROFILE.ROLE_HINT' | translate }}</small>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.PROFILE_PICTURE' | translate }}</label>\r
                <input type="file" class="form-control" (change)="onImageSelect($event)" accept="image/*">\r
              </div>\r
            </div>\r
\r
            <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>\r
\r
            <div class="d-flex gap-2 justify-content-end">\r
              <button type="submit" class="action-btn custom-btn-2 btn-add-global-2" [disabled]="saving || profileForm.invalid">\r
                <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
                {{ saving ? ('EDIT_PROFILE.UPDATING' | translate) : ('EDIT_PROFILE.UPDATE_PROFILE' | translate) }}\r
              </button>\r
              <button type="button" class="btn btn-secondary btn-cancel-global" (click)="cancel()" [disabled]="saving">{{ 'EDIT_PROFILE.CANCEL' | translate }}</button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Security Tab -->\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5>{{ 'EDIT_PROFILE.SECURITY_SETTINGS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted">{{ 'EDIT_PROFILE.SECURITY_DESC' | translate }}</p>\r
          <form [formGroup]="securityForm" (ngSubmit)="updatePassword()">\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'EDIT_PROFILE.CURRENT_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
              <input type="password" class="form-control" formControlName="currentPassword"\r
                     [class.is-invalid]="securityForm.get('currentPassword')?.invalid && securityForm.get('currentPassword')?.touched"\r
                     [placeholder]="'EDIT_PROFILE.CURRENT_PASSWORD_PLACEHOLDER' | translate">\r
              <div class="invalid-feedback" *ngIf="securityForm.get('currentPassword')?.invalid && securityForm.get('currentPassword')?.touched">\r
                {{ getErrorMessage(securityForm, 'currentPassword') }}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'EDIT_PROFILE.NEW_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
              <input type="password" class="form-control" formControlName="newPassword"\r
                     [class.is-invalid]="securityForm.get('newPassword')?.invalid && securityForm.get('newPassword')?.touched"\r
                     [placeholder]="'EDIT_PROFILE.NEW_PASSWORD_PLACEHOLDER' | translate">\r
              <div class="invalid-feedback" *ngIf="securityForm.get('newPassword')?.invalid && securityForm.get('newPassword')?.touched">\r
                {{ getErrorMessage(securityForm, 'newPassword') }}\r
              </div>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'EDIT_PROFILE.CONFIRM_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
              <input type="password" class="form-control" formControlName="confirmPassword"\r
                     [class.is-invalid]="securityForm.get('confirmPassword')?.invalid && securityForm.get('confirmPassword')?.touched"\r
                     [placeholder]="'EDIT_PROFILE.CONFIRM_PASSWORD_PLACEHOLDER' | translate">\r
              <div class="invalid-feedback" *ngIf="securityForm.get('confirmPassword')?.invalid && securityForm.get('confirmPassword')?.touched">\r
                {{ getErrorMessage(securityForm, 'confirmPassword') }}\r
              </div>\r
            </div>\r
            <button type="submit" class="float-right action-btn custom-btn-2 btn-add-global-2" [disabled]="securityForm.invalid">{{ 'EDIT_PROFILE.UPDATE_PASSWORD' | translate }}</button>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Preferences Tab -->\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5>{{ 'EDIT_PROFILE.PREFERENCES' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted">{{ 'EDIT_PROFILE.PREFERENCES_DESC' | translate }}</p>\r
          <form [formGroup]="preferencesForm" (ngSubmit)="updatePreferences()">\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'EDIT_PROFILE.LANGUAGE' | translate }}</label>\r
              <select class="form-select" formControlName="language">\r
                <option *ngFor="let lang of languages" [value]="lang.code">{{ lang.flag }} {{ lang.name }}</option>\r
              </select>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'EDIT_PROFILE.TIMEZONE' | translate }}</label>\r
              <select class="form-select" formControlName="timezone">\r
                <option value="UTC">UTC</option>\r
                <option value="EST">EST</option>\r
                <option value="PST">PST</option>\r
              </select>\r
            </div>\r
            <button type="submit" class="action-btn custom-btn-2 btn-add-global-2 float-right">{{ 'EDIT_PROFILE.SAVE_PREFERENCES' | translate }}</button>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="container-fluid mt-4" *ngIf="!isParent()">\r
  <app-title-page\r
    [title]="'EDIT_PROFILE.TITLE' | translate"\r
    [subtitle]="'EDIT_PROFILE.SUBTITLE' | translate"\r
    icon="bi bi-person-circle"\r
    [breadcrumbs]="breadcrumbs">\r
  </app-title-page>\r
\r
  <!-- Profile Picture Card -->\r
   <div class="row">\r
    <div class="col-12 col-md-4">\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-person-circle"></i>{{ 'EDIT_PROFILE.PROFILE_PICTURE' | translate }}</h5>\r
        </div>\r
        <div class="card-body text-center">\r
          <div class="profile-picture-container">\r
            <div *ngIf="imagePreview; else defaultPhoto" class="profile-picture-wrapper">\r
              <img loading="lazy" [src]="imagePreview" class="rounded-circle profile-picture" alt="Profile">\r
            </div>\r
            <ng-template #defaultPhoto>\r
              <div class="profile-initials rounded-circle d-inline-flex align-items-center justify-content-center">\r
                {{ getInitials() }}\r
              </div>\r
            </ng-template>\r
            <button type="button" class="btn-add-photo" (click)="openPhotoModal()">\r
              <i class="bi bi-plus-lg"></i>\r
            </button>\r
          </div>\r
          <h5 class="mt-3">{{ profileForm.get('firstName')?.value }} {{ profileForm.get('lastName')?.value }}</h5>\r
          <p class="text-muted mb-0">{{ userRole }}</p>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-12 col-md-8">\r
      <!-- Personal Info Card -->\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-person-fill"></i>{{ 'EDIT_PROFILE.PERSONAL_INFO' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="profileForm" (ngSubmit)="updateProfile()">\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.FIRST_NAME' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="firstName"\r
                      [class.is-invalid]="firstName.invalid && firstName.touched">\r
                <div class="invalid-feedback" *ngIf="firstName.invalid && firstName.touched">\r
                  {{ getErrorMessage(profileForm, 'firstName') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.LAST_NAME' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="text" class="form-control" formControlName="lastName"\r
                      [class.is-invalid]="lastName.invalid && lastName.touched">\r
                <div class="invalid-feedback" *ngIf="lastName.invalid && lastName.touched">\r
                  {{ getErrorMessage(profileForm, 'lastName') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.EMAIL' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="email" class="form-control" formControlName="email"\r
                      [class.is-invalid]="email.invalid && email.touched">\r
                <div class="invalid-feedback" *ngIf="email.invalid && email.touched">\r
                  {{ getErrorMessage(profileForm, 'email') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.ROLE' | translate }}</label>\r
                <input type="text" class="form-control" [value]="userRole" disabled>\r
                <small class="text-muted">{{ 'EDIT_PROFILE.ROLE_HINT' | translate }}</small>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>\r
\r
            <div class="d-flex gap-2 justify-content-end">\r
              <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">{{ 'EDIT_PROFILE.CANCEL' | translate }}</button>\r
              <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || profileForm.invalid">\r
                <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
                <i class="bi bi-check-circle me-2" *ngIf="!saving"></i>\r
                {{ saving ? ('EDIT_PROFILE.UPDATING' | translate) : ('EDIT_PROFILE.UPDATE_PROFILE' | translate) }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Security Card -->\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-shield-lock-fill"></i>{{ 'EDIT_PROFILE.SECURITY_SETTINGS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted">{{ 'EDIT_PROFILE.SECURITY_DESC' | translate }}</p>\r
          <form [formGroup]="securityForm" (ngSubmit)="updatePassword()">\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.CURRENT_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="password" class="form-control" formControlName="currentPassword"\r
                      [class.is-invalid]="securityForm.get('currentPassword')?.invalid && securityForm.get('currentPassword')?.touched"\r
                      [placeholder]="'EDIT_PROFILE.CURRENT_PASSWORD_PLACEHOLDER' | translate">\r
                <div class="invalid-feedback" *ngIf="securityForm.get('currentPassword')?.invalid && securityForm.get('currentPassword')?.touched">\r
                  {{ getErrorMessage(securityForm, 'currentPassword') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.NEW_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="password" class="form-control" formControlName="newPassword"\r
                      [class.is-invalid]="securityForm.get('newPassword')?.invalid && securityForm.get('newPassword')?.touched"\r
                      [placeholder]="'EDIT_PROFILE.NEW_PASSWORD_PLACEHOLDER' | translate">\r
                <div class="invalid-feedback" *ngIf="securityForm.get('newPassword')?.invalid && securityForm.get('newPassword')?.touched">\r
                  {{ getErrorMessage(securityForm, 'newPassword') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ 'EDIT_PROFILE.CONFIRM_PASSWORD' | translate }} {{ 'EDIT_PROFILE.REQUIRED' | translate }}</label>\r
                <input type="password" class="form-control" formControlName="confirmPassword"\r
                      [class.is-invalid]="securityForm.get('confirmPassword')?.invalid && securityForm.get('confirmPassword')?.touched"\r
                      [placeholder]="'EDIT_PROFILE.CONFIRM_PASSWORD_PLACEHOLDER' | translate">\r
                <div class="invalid-feedback" *ngIf="securityForm.get('confirmPassword')?.invalid && securityForm.get('confirmPassword')?.touched">\r
                  {{ getErrorMessage(securityForm, 'confirmPassword') }}\r
                </div>\r
              </div>\r
            </div>\r
            <div class="d-flex justify-content-end">\r
              <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="securityForm.invalid">\r
                <i class="bi bi-check-circle me-2"></i>\r
                {{ 'EDIT_PROFILE.UPDATE_PASSWORD' | translate }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Preferences Card -->\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-gear-fill"></i>{{ 'EDIT_PROFILE.PREFERENCES' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted">{{ 'EDIT_PROFILE.PREFERENCES_DESC' | translate }}</p>\r
          <form [formGroup]="preferencesForm" (ngSubmit)="updatePreferences()">\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label fw-bold">{{ 'EDIT_PROFILE.LANGUAGE' | translate }}</label>\r
                <ng-select\r
                  formControlName="language"\r
                  [items]="languages"\r
                  bindLabel="name"\r
                  bindValue="code"\r
                  [clearable]="false"\r
                  [searchable]="false"\r
                  (change)="switchLanguage($event?.code)">\r
                  <ng-template ng-label-tmp let-item="item">\r
                    <span>{{ item.flag }} {{ item.name }}</span>\r
                  </ng-template>\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <span>{{ item.flag }} {{ item.name }}</span>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label fw-bold">{{ 'EDIT_PROFILE.TIMEZONE' | translate }}</label>\r
                <select class="form-select" formControlName="timezone">\r
                  <option value="UTC">UTC</option>\r
                  <option value="EST">EST</option>\r
                  <option value="PST">PST</option>\r
                </select>\r
              </div>\r
            </div>\r
            <div class="d-flex justify-content-end">\r
              <button type="submit" class="custom-btn-2 btn-add-global-2">\r
                <i class="bi bi-floppy me-2"></i>\r
                {{ 'EDIT_PROFILE.SAVE_PREFERENCES' | translate }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
   </div>\r
\r
  <!-- Hidden file input for image upload -->\r
  <input type="file" #fileInput class="d-none" (change)="onImageSelect($event)" accept="image/*">\r
\r
  <!-- Image Cropper Modal -->\r
  <app-image-cropper-modal\r
    #imageCropper\r
    [imageFile]="selectedImageFile"\r
    [aspectRatio]="1"\r
    [roundCropper]="true"\r
    [resizeToWidth]="300"\r
    [resizeToHeight]="300"\r
    (imageCropped)="onImageCropped($event)"\r
    (cancelled)="onCropCancelled()">\r
  </app-image-cropper-modal>\r
</div>\r
`, styles: ["/* src/app/features/profile/edit-profile/edit-profile.scss */\n.list-group-item {\n  cursor: pointer;\n}\n.list-group-item.active {\n  background-color: #202C4B;\n  border-color: #202C4B;\n  color: white;\n}\n::ng-deep .page-setting i {\n  display: none !important;\n}\n::ng-deep .header-info {\n  margin-bottom: 35px !important;\n}\n.profile-picture-container {\n  position: relative;\n  display: inline-block;\n}\n.profile-picture-container .profile-picture-wrapper {\n  position: relative;\n}\n.profile-picture-container .profile-picture {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border: 3px solid #e9ecef;\n  transition: border-color 0.3s ease;\n}\n.profile-picture-container .profile-picture:hover {\n  border-color: var(--primary-color, #7dd3c0);\n}\n.profile-picture-container .profile-initials {\n  width: 120px;\n  height: 120px;\n  font-size: 48px;\n  font-weight: 600;\n  background: var(--gradient-primary, linear-gradient(135deg, #7db9ff 0%, #7dd3c0 100%));\n  color: white;\n  border: 3px solid #e9ecef;\n  transition: transform 0.3s ease;\n}\n.profile-picture-container .btn-add-photo {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary, linear-gradient(135deg, #7db9ff 0%, #7dd3c0 100%));\n  border: 3px solid white;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.profile-picture-container .btn-add-photo i {\n  font-size: 16px;\n  font-weight: bold;\n}\n.profile-picture-container .btn-add-photo:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.4);\n}\n.profile-picture-container .btn-add-photo:active {\n  transform: scale(0.95);\n}\n::ng-deep .profile-photo-modal {\n  border-radius: 16px;\n}\n::ng-deep .profile-photo-modal .swal2-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #202C4B;\n}\n::ng-deep .profile-photo-modal .swal2-actions {\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  padding: 0 20px;\n}\n::ng-deep .profile-photo-modal .swal2-actions button {\n  width: 100%;\n  margin: 0;\n  padding: 12px 20px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n::ng-deep .profile-photo-modal .swal-btn-upload {\n  order: 1;\n}\n::ng-deep .profile-photo-modal .swal-btn-remove {\n  order: 2;\n}\n::ng-deep .profile-photo-modal .swal-btn-cancel {\n  order: 3;\n  background: transparent !important;\n  color: #666 !important;\n  border: 1px solid #e9ecef !important;\n}\n::ng-deep .profile-photo-modal .swal-btn-cancel:hover {\n  background: #f8f9fa !important;\n}\n/*# sourceMappingURL=edit-profile.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: HttpClient }, { type: Router }, { type: FormBuilder }, { type: Location }, { type: TranslateService }, { type: LanguageService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfile, { className: "EditProfile", filePath: "src/app/features/profile/edit-profile/edit-profile.ts", lineNumber: 27 });
})();
export {
  EditProfile
};
//# sourceMappingURL=chunk-7PV6EXYX.js.map
