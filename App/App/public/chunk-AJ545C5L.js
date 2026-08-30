import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/educator/edit-educator/edit-educator.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
function EditEducator_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_EDUCATOR.LOADING"));
  }
}
function EditEducator_div_8_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_EDUCATOR.UPLOAD_PHOTO"));
  }
}
function EditEducator_div_8_img_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 56);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditEducator_div_8_button_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function EditEducator_div_8_button_117_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EDIT_EDUCATOR.REMOVE_PHOTO"), " ");
  }
}
function EditEducator_div_8_span_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 58);
  }
}
function EditEducator_div_8_i_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
  }
}
function EditEducator_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "form", 12);
    \u0275\u0275listener("ngSubmit", function EditEducator_div_8_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateEducator());
    });
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275element(5, "i", 15);
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 17)(11, "label", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275element(16, "i", 20);
    \u0275\u0275elementStart(17, "input", 21);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.firstName, $event) || (ctx_r2.educator.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 17)(20, "label", 18);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19);
    \u0275\u0275element(25, "i", 20);
    \u0275\u0275elementStart(26, "input", 22);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.lastName, $event) || (ctx_r2.educator.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 17)(29, "label", 18);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19);
    \u0275\u0275element(34, "i", 23);
    \u0275\u0275elementStart(35, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.dateOfBirth, $event) || (ctx_r2.educator.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 17)(37, "label", 18);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 19);
    \u0275\u0275element(41, "i", 25);
    \u0275\u0275elementStart(42, "input", 26);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.phone, $event) || (ctx_r2.educator.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 13)(45, "div", 14);
    \u0275\u0275element(46, "i", 27);
    \u0275\u0275elementStart(47, "h4");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 16)(51, "div", 17)(52, "label", 18);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 19);
    \u0275\u0275element(57, "i", 28);
    \u0275\u0275elementStart(58, "input", 29);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.email, $event) || (ctx_r2.educator.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 30)(61, "label", 18);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 19);
    \u0275\u0275element(65, "i", 31);
    \u0275\u0275elementStart(66, "textarea", 32);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_textarea_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.address, $event) || (ctx_r2.educator.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "div", 13)(69, "div", 14);
    \u0275\u0275element(70, "i", 33);
    \u0275\u0275elementStart(71, "h4");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 16)(75, "div", 17)(76, "label", 18);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 19);
    \u0275\u0275element(80, "i", 34);
    \u0275\u0275elementStart(81, "input", 35);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.specialization, $event) || (ctx_r2.educator.specialization = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 17)(84, "label", 18);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 19);
    \u0275\u0275element(89, "i", 36);
    \u0275\u0275elementStart(90, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.hireDate, $event) || (ctx_r2.educator.hireDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 17)(92, "label", 18);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 19);
    \u0275\u0275element(97, "i", 38);
    \u0275\u0275elementStart(98, "input", 39);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditEducator_div_8_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.educator.salary, $event) || (ctx_r2.educator.salary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(100, "div", 13)(101, "div", 14);
    \u0275\u0275element(102, "i", 40);
    \u0275\u0275elementStart(103, "h4");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 16)(107, "div", 17)(108, "label", 18);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 41)(112, "input", 42, 1);
    \u0275\u0275listener("change", function EditEducator_div_8_Template_input_change_112_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "label", 43);
    \u0275\u0275template(115, EditEducator_div_8_div_115_Template, 5, 3, "div", 44)(116, EditEducator_div_8_img_116_Template, 2, 4, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(117, EditEducator_div_8_button_117_Template, 4, 3, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "small", 47);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(121, "div", 48)(122, "button", 49);
    \u0275\u0275listener("click", function EditEducator_div_8_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel());
    });
    \u0275\u0275element(123, "i", 50);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "button", 51);
    \u0275\u0275template(127, EditEducator_div_8_span_127_Template, 1, 0, "span", 52)(128, EditEducator_div_8_i_128_Template, 1, 0, "i", 53);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275pipe(131, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 46, "EDIT_EDUCATOR.PERSONAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(13, 48, "EDIT_EDUCATOR.FIRST_NAME"), " ", \u0275\u0275pipeBind1(14, 50, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.firstName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 52, "EDIT_EDUCATOR.FIRST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 54, "EDIT_EDUCATOR.LAST_NAME"), " ", \u0275\u0275pipeBind1(23, 56, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.lastName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 58, "EDIT_EDUCATOR.LAST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(31, 60, "EDIT_EDUCATOR.DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(32, 62, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.dateOfBirth);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 64, "EDIT_EDUCATOR.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.phone);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 66, "EDIT_EDUCATOR.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 68, "EDIT_EDUCATOR.CONTACT_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(54, 70, "EDIT_EDUCATOR.EMAIL"), " ", \u0275\u0275pipeBind1(55, 72, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(59, 74, "EDIT_EDUCATOR.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 76, "EDIT_EDUCATOR.ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.address);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(67, 78, "EDIT_EDUCATOR.ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 80, "EDIT_EDUCATOR.PROFESSIONAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 82, "EDIT_EDUCATOR.SPECIALIZATION"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.specialization);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(82, 84, "EDIT_EDUCATOR.SPECIALIZATION_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(86, 86, "EDIT_EDUCATOR.HIRE_DATE"), " ", \u0275\u0275pipeBind1(87, 88, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.hireDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(94, 90, "EDIT_EDUCATOR.SALARY"), " ", \u0275\u0275pipeBind1(95, 92, "EDIT_EDUCATOR.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.educator.salary);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(99, 94, "EDIT_EDUCATOR.SALARY_PLACEHOLDER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 96, "EDIT_EDUCATOR.PROFILE_PHOTO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 98, "EDIT_EDUCATOR.PROFILE_PICTURE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 100, "EDIT_EDUCATOR.IMAGE_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(125, 102, "EDIT_EDUCATOR.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? \u0275\u0275pipeBind1(130, 104, "EDIT_EDUCATOR.UPDATING") : \u0275\u0275pipeBind1(131, 106, "EDIT_EDUCATOR.UPDATE_EDUCATOR"), " ");
  }
}
var EditEducator = class _EditEducator {
  educatorService;
  router;
  route;
  translate;
  simpleToastService;
  fileInput;
  imageCropper;
  saving = false;
  loading = false;
  imagePreview = null;
  selectedImageFile = null;
  educatorId = 0;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  breadcrumbs = [];
  titleActions = [];
  educator = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    hireDate: "",
    specialization: "",
    salary: 0,
    profilePicture: ""
  };
  constructor(educatorService, router, route, translate, simpleToastService) {
    this.educatorService = educatorService;
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.initBreadcrumbs();
    this.initTitleActions();
    this.educatorId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadEducator();
    this.translate.onLangChange.subscribe(() => {
      this.initBreadcrumbs();
      this.initTitleActions();
    });
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.EDUCATORS"), url: "/educators" },
      { label: this.translate.instant("EDIT_EDUCATOR.TITLE") }
    ];
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EDIT_EDUCATOR.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-2",
        action: () => this.back()
      }
    ];
  }
  back() {
    this.router.navigate(["/educators"]);
  }
  loadEducator() {
    this.loading = true;
    this.educatorService.getEducator(this.educatorId).subscribe({
      next: (educator) => {
        this.educator = __spreadValues({}, educator);
        if (educator.dateOfBirth) {
          this.educator.dateOfBirth = this.formatDateForInput(educator.dateOfBirth);
        }
        if (educator.hireDate) {
          this.educator.hireDate = this.formatDateForInput(educator.hireDate);
        }
        if (educator.profilePictureUrl) {
          this.imagePreview = educator.profilePictureUrl.startsWith("http") ? educator.profilePictureUrl : ApiConfig.HUB_URL + educator.profilePictureUrl;
        } else {
          this.imagePreview = educator.profilePicture || null;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading educator:", error);
        this.loading = false;
        this.router.navigate(["/educators"]);
      }
    });
  }
  formatDateForInput(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  }
  updateEducator() {
    this.saving = true;
    this.educatorService.updateEducator(this.educator).subscribe({
      next: () => {
        this.simpleToastService.success(this.translate.instant("EDIT_EDUCATOR.UPDATE_SUCCESS"));
        setTimeout(() => {
          this.router.navigate(["/educators"]);
        }, 200);
        this.saving = false;
      },
      error: (error) => {
        console.error("Error updating educator:", error);
        const errorMessage = this.extractErrorMessage(error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: errorMessage
        });
        this.saving = false;
      }
    });
  }
  extractErrorMessage(error) {
    if (error?.status === 0) {
      return this.translate.instant("ERRORS.NETWORK_ERROR") || "Network error. Please check your internet connection.";
    }
    if (error?.name === "TimeoutError" || error?.message?.includes("timeout")) {
      return this.translate.instant("ERRORS.TIMEOUT") || "Request timed out. Please try again.";
    }
    if (error?.status >= 500) {
      return this.translate.instant("ERRORS.SERVER_ERROR") || "Server error. Please try again later.";
    }
    if (error?.status === 403) {
      return this.translate.instant("ERRORS.FORBIDDEN") || "You do not have permission to perform this action.";
    }
    if (error?.status === 401) {
      return this.translate.instant("ERRORS.UNAUTHORIZED") || "Your session has expired. Please log in again.";
    }
    if (error?.status === 404) {
      return this.translate.instant("ERRORS.EDUCATOR_NOT_FOUND") || "Educator not found. They may have been deleted.";
    }
    if (error?.error) {
      if (Array.isArray(error.error)) {
        const errorMessages = error.error.map((e) => this.mapIdentityError(e)).filter(Boolean);
        if (errorMessages.length > 0) {
          return errorMessages.join("\n\u2022 ");
        }
      }
      if (error.error.errors) {
        const errorMessages = [];
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            const messages = error.error.errors[key];
            const fieldName = this.getFieldLabel(key);
            if (Array.isArray(messages)) {
              messages.forEach((msg) => {
                errorMessages.push(`${fieldName}: ${msg}`);
              });
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join("\n\u2022 ");
        }
      }
      if (error.error.message) {
        return this.mapCommonErrorMessage(error.error.message);
      }
      if (error.error.title) {
        return error.error.title;
      }
      if (typeof error.error === "string") {
        return this.mapCommonErrorMessage(error.error);
      }
    }
    if (error?.status === 409) {
      return this.translate.instant("MESSAGES.EMAIL_ALREADY_EXISTS") || "This email is already registered.";
    }
    if (error?.status) {
      return `${this.translate.instant("EDIT_EDUCATOR.UPDATE_ERROR")} (Error ${error.status})`;
    }
    return this.translate.instant("EDIT_EDUCATOR.UPDATE_ERROR");
  }
  /**
   * Map ASP.NET Identity error codes to user-friendly messages
   */
  mapIdentityError(error) {
    if (!error)
      return "";
    const code = error.code || error.Code;
    const description = error.description || error.Description || "";
    const errorMap = {
      "DuplicateUserName": this.translate.instant("ERRORS.DUPLICATE_EMAIL") || "This email is already registered.",
      "DuplicateEmail": this.translate.instant("ERRORS.DUPLICATE_EMAIL") || "This email is already registered.",
      "InvalidEmail": this.translate.instant("ERRORS.INVALID_EMAIL") || "Please enter a valid email address.",
      "InvalidUserName": this.translate.instant("ERRORS.INVALID_EMAIL") || "Please enter a valid email address."
    };
    return errorMap[code] || description || code;
  }
  /**
   * Map common error messages to translated versions
   */
  mapCommonErrorMessage(message) {
    if (!message)
      return "";
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("already exists") || lowerMessage.includes("duplicate")) {
      return this.translate.instant("MESSAGES.EMAIL_ALREADY_EXISTS") || message;
    }
    if (lowerMessage.includes("not found")) {
      return this.translate.instant("ERRORS.EDUCATOR_NOT_FOUND") || message;
    }
    if (lowerMessage.includes("invalid email")) {
      return this.translate.instant("ERRORS.INVALID_EMAIL") || message;
    }
    return message;
  }
  /**
   * Get user-friendly field label for validation errors
   */
  getFieldLabel(fieldName) {
    const fieldMap = {
      "FirstName": this.translate.instant("EDUCATORS.FIRST_NAME") || "First Name",
      "LastName": this.translate.instant("EDUCATORS.LAST_NAME") || "Last Name",
      "Email": this.translate.instant("EDUCATORS.EMAIL") || "Email",
      "Phone": this.translate.instant("EDUCATORS.PHONE") || "Phone",
      "DateOfBirth": this.translate.instant("EDUCATORS.DATE_OF_BIRTH") || "Date of Birth",
      "HireDate": this.translate.instant("EDUCATORS.HIRE_DATE") || "Hire Date",
      "Salary": this.translate.instant("EDUCATORS.SALARY") || "Salary",
      "Address": this.translate.instant("EDUCATORS.ADDRESS") || "Address",
      "Specialization": this.translate.instant("EDUCATORS.SPECIALIZATION") || "Specialization"
    };
    return fieldMap[fieldName] || fieldName;
  }
  cancel() {
    this.router.navigate(["/educators"]);
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToastService.error(this.translate.instant("EDIT_EDUCATOR.INVALID_FILE_TYPE"));
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.ERROR"),
        text: this.translate.instant("EDIT_EDUCATOR.FILE_TOO_LARGE")
      });
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
    this.educator.profilePicture = croppedImage;
    this.selectedImageFile = null;
  }
  onCropCancelled() {
    this.selectedImageFile = null;
    this.resetFileInput();
  }
  removeImage() {
    this.resetFileInput();
  }
  resetFileInput() {
    this.imagePreview = null;
    this.educator.profilePicture = "";
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  static \u0275fac = function EditEducator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEducator)(\u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEducator, selectors: [["app-edit-educator"]], viewQuery: function EditEducator_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 9, vars: 15, consts: [["imageCropper", ""], ["fileInput", ""], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight"], [1, "edit-educator-container"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-person-fill-gear", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card-add-pages", "mb-4"], [1, "add-form", 3, "ngSubmit"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "name", "firstName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "text", "name", "lastName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "name", "dateOfBirth", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-phone", "input-icon"], ["type", "text", "name", "phone", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bi", "bi-telephone"], [1, "bi", "bi-envelope", "input-icon"], ["type", "email", "name", "email", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-geo-alt", "input-icon"], ["name", "address", "rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bi", "bi-briefcase"], [1, "bi", "bi-award", "input-icon"], ["type", "text", "name", "specialization", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bi", "bi-calendar-check", "input-icon"], ["type", "date", "name", "hireDate", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-currency-dollar", "input-icon"], ["type", "number", "name", "salary", "required", "", "min", "0", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function EditEducator_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-image-cropper-modal", 2, 0);
      \u0275\u0275listener("imageCropped", function EditEducator_Template_app_image_cropper_modal_imageCropped_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function EditEducator_Template_app_image_cropper_modal_cancelled_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "app-title-page", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275template(7, EditEducator_div_7_Template, 5, 3, "div", 6)(8, EditEducator_div_8_Template, 132, 108, "div", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 300)("resizeToHeight", 300);
      \u0275\u0275advance(4);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 11, "EDIT_EDUCATOR.TITLE"))("subtitle", \u0275\u0275pipeBind1(6, 13, "EDIT_EDUCATOR.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, TitlePage, ImageCropperModalComponent, TranslateModule, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEducator, [{
    type: Component,
    args: [{ selector: "app-edit-educator", imports: [CommonModule, FormsModule, TitlePage, ImageCropperModalComponent, TranslateModule], standalone: true, template: `<!-- Image Cropper Modal -->\r
<app-image-cropper-modal\r
  #imageCropper\r
  [imageFile]="selectedImageFile"\r
  [roundCropper]="true"\r
  [aspectRatio]="1"\r
  [resizeToWidth]="300"\r
  [resizeToHeight]="300"\r
  (imageCropped)="onImageCropped($event)"\r
  (cancelled)="onCropCancelled()">\r
</app-image-cropper-modal>\r
\r
<div class="edit-educator-container">\r
  <div class="container-fluid mt-4">\r
    <app-title-page\r
      [title]="'EDIT_EDUCATOR.TITLE' | translate"\r
      [subtitle]="'EDIT_EDUCATOR.SUBTITLE' | translate"\r
      icon="bi bi-person-fill-gear"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border" role="status">\r
        <span class="visually-hidden">{{ 'EDIT_EDUCATOR.LOADING' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="!loading">\r
      <!-- Educator Form -->\r
      <div class="card-add-pages mb-4">\r
        <form (ngSubmit)="updateEducator()" class="add-form">\r
          <!-- Section Personal Information -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-person-circle"></i>\r
              <h4>{{ 'EDIT_EDUCATOR.PERSONAL_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.FIRST_NAME' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-person input-icon"></i>\r
                  <input type="text" class="form-input" [(ngModel)]="educator.firstName" name="firstName" [placeholder]="'EDIT_EDUCATOR.FIRST_NAME_PLACEHOLDER' | translate" required>\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.LAST_NAME' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-person input-icon"></i>\r
                  <input type="text" class="form-input" [(ngModel)]="educator.lastName" name="lastName" [placeholder]="'EDIT_EDUCATOR.LAST_NAME_PLACEHOLDER' | translate" required>\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.DATE_OF_BIRTH' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-calendar input-icon"></i>\r
                  <input type="date" class="form-input" [(ngModel)]="educator.dateOfBirth" name="dateOfBirth" required>\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.PHONE' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-phone input-icon"></i>\r
                  <input type="text" class="form-input" [(ngModel)]="educator.phone" name="phone" [placeholder]="'EDIT_EDUCATOR.PHONE_PLACEHOLDER' | translate">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Contact Information -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-telephone"></i>\r
              <h4>{{ 'EDIT_EDUCATOR.CONTACT_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.EMAIL' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-envelope input-icon"></i>\r
                  <input type="email" class="form-input" [(ngModel)]="educator.email" name="email" [placeholder]="'EDIT_EDUCATOR.EMAIL_PLACEHOLDER' | translate" required>\r
                </div>\r
              </div>\r
              <div class="form-group full-width">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.ADDRESS' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-geo-alt input-icon"></i>\r
                  <textarea class="form-input" [(ngModel)]="educator.address" name="address" rows="3" [placeholder]="'EDIT_EDUCATOR.ADDRESS_PLACEHOLDER' | translate"></textarea>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Professional Information -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-briefcase"></i>\r
              <h4>{{ 'EDIT_EDUCATOR.PROFESSIONAL_INFO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.SPECIALIZATION' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-award input-icon"></i>\r
                  <input type="text" class="form-input" [(ngModel)]="educator.specialization" name="specialization" [placeholder]="'EDIT_EDUCATOR.SPECIALIZATION_PLACEHOLDER' | translate">\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.HIRE_DATE' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-calendar-check input-icon"></i>\r
                  <input type="date" class="form-input" [(ngModel)]="educator.hireDate" name="hireDate" required>\r
                </div>\r
              </div>\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.SALARY' | translate }} {{ 'EDIT_EDUCATOR.REQUIRED' | translate }}</label>\r
                <div class="input-with-icon">\r
                  <i class="bi bi-currency-dollar input-icon"></i>\r
                  <input type="number" class="form-input" [(ngModel)]="educator.salary" name="salary" [placeholder]="'EDIT_EDUCATOR.SALARY_PLACEHOLDER' | translate" required min="0">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Section Photo -->\r
          <div class="form-section">\r
            <div class="section-header">\r
              <i class="bi bi-image"></i>\r
              <h4>{{ 'EDIT_EDUCATOR.PROFILE_PHOTO' | translate }}</h4>\r
            </div>\r
            <div class="form-grid">\r
              <div class="form-group">\r
                <label class="form-label">{{ 'EDIT_EDUCATOR.PROFILE_PICTURE' | translate }}</label>\r
                <div class="file-upload-area">\r
                  <input type="file" #fileInput id="profilePicture" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                  <label for="profilePicture" class="file-upload-label">\r
                    <div *ngIf="!imagePreview" class="upload-placeholder">\r
                      <i class="bi bi-cloud-upload"></i>\r
                      <span>{{ 'EDIT_EDUCATOR.UPLOAD_PHOTO' | translate }}</span>\r
                    </div>\r
                    <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image" [alt]="'GLOBAL.PREVIEW' | translate">\r
                  </label>\r
                  <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
                    <i class="bi bi-x-circle"></i>\r
                    {{ 'EDIT_EDUCATOR.REMOVE_PHOTO' | translate }}\r
                  </button>\r
                </div>\r
                <small class="form-hint">{{ 'EDIT_EDUCATOR.IMAGE_HINT' | translate }}</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Action Buttons -->\r
          <div class="form-actions">\r
            <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
              <i class="bi bi-x-circle"></i>\r
              {{ 'EDIT_EDUCATOR.CANCEL' | translate }}\r
            </button>\r
            <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
              <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
              <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
              {{ saving ? ('EDIT_EDUCATOR.UPDATING' | translate) : ('EDIT_EDUCATOR.UPDATE_EDUCATOR' | translate) }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: EducatorService }, { type: Router }, { type: ActivatedRoute }, { type: TranslateService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEducator, { className: "EditEducator", filePath: "src/app/features/educator/edit-educator/edit-educator.ts", lineNumber: 21 });
})();
export {
  EditEducator
};
//# sourceMappingURL=chunk-AJ545C5L.js.map
