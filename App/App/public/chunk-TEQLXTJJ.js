import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
import {
  ParentChildHeaderComponent
} from "./chunk-FEEGDPUH.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  Location,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/children/edit-children/edit-children.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
var _c2 = (a0) => [a0];
function EditChildren_div_2_div_1_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gender_r4 = ctx.$implicit;
    \u0275\u0275property("value", gender_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", gender_r4.label, " ");
  }
}
function EditChildren_div_2_div_1_img_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditChildren_div_2_div_1_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function EditChildren_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-parent-child-header", 7);
    \u0275\u0275listener("onBack", function EditChildren_div_2_div_1_Template_app_parent_child_header_onBack_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "form", 12);
    \u0275\u0275listener("ngSubmit", function EditChildren_div_2_div_1_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateChild());
    });
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14)(12, "label", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.firstName, $event) || (ctx_r2.child.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "label", 15);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.lastName, $event) || (ctx_r2.child.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.dateOfBirth, $event) || (ctx_r2.child.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "label", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.gender, $event) || (ctx_r2.child.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(35, "option", 20);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EditChildren_div_2_div_1_option_38_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "label", 15);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 22);
    \u0275\u0275listener("change", function EditChildren_div_2_div_1_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, EditChildren_div_2_div_1_img_44_Template, 2, 4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 14)(46, "div", 24)(47, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.isActive, $event) || (ctx_r2.child.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "label", 26);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 27)(52, "label", 15);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 28);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.allergies, $event) || (ctx_r2.child.allergies = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 27)(58, "label", 15);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "textarea", 29);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EditChildren_div_2_div_1_Template_textarea_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.child.medicalNotes, $event) || (ctx_r2.child.medicalNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 30)(64, "button", 31);
    \u0275\u0275template(65, EditChildren_div_2_div_1_span_65_Template, 1, 0, "span", 32);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 33);
    \u0275\u0275listener("click", function EditChildren_div_2_div_1_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancel());
    });
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("children", \u0275\u0275pureFunction1(75, _c2, ctx_r2.child))("currentChildIndex", 0)("showDatePicker", false)("showSettings", false)("showEdit", false)("showImages", true)("hasCustomContent", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 37, "EDIT_CHILD.GENERAL_INFO"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(14, 39, "EDIT_CHILD.FIRST_NAME"), " ", \u0275\u0275pipeBind1(15, 41, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(20, 43, "EDIT_CHILD.LAST_NAME"), " ", \u0275\u0275pipeBind1(21, 45, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(26, 47, "EDIT_CHILD.DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(27, 49, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.dateOfBirth);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(32, 51, "EDIT_CHILD.GENDER"), " ", \u0275\u0275pipeBind1(33, 53, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 55, "EDIT_CHILD.SELECT_GENDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.genders);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 57, "EDIT_CHILD.PROFILE_PICTURE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(50, 59, "EDIT_CHILD.ACTIVE_STATUS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 61, "EDIT_CHILD.ALLERGIES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.allergies);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 63, "EDIT_CHILD.ALLERGIES_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 65, "EDIT_CHILD.MEDICAL_NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.child.medicalNotes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(62, 67, "EDIT_CHILD.MEDICAL_NOTES_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? \u0275\u0275pipeBind1(67, 69, "EDIT_CHILD.UPDATING") : \u0275\u0275pipeBind1(68, 71, "EDIT_CHILD.UPDATE_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 73, "EDIT_CHILD.CANCEL"));
  }
}
function EditChildren_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, EditChildren_div_2_div_1_Template, 72, 77, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.isParent() ? "" : " mt-4");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.child && !ctx_r2.loading);
  }
}
function EditChildren_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_CHILD.LOADING"));
  }
}
function EditChildren_div_3_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("firstName"), " ");
  }
}
function EditChildren_div_3_div_5_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("lastName"), " ");
  }
}
function EditChildren_div_3_div_5_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "i", 89);
    \u0275\u0275elementStart(2, "span", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r6.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function EditChildren_div_3_div_5_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("gender"), " ");
  }
}
function EditChildren_div_3_div_5_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("dateOfBirth"), " ");
  }
}
function EditChildren_div_3_div_5_div_49_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "img", 95);
    \u0275\u0275elementStart(2, "div", 96)(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 97);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r7 == null ? null : item_r7.profilePicture) || "assets/father.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r7.firstName, " ", item_r7.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.email);
  }
}
function EditChildren_div_3_div_5_div_49_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "img", 100);
    \u0275\u0275elementStart(2, "span", 101);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r8 == null ? null : item_r8.profilePicture) || "assets/father.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r8.firstName, " ", item_r8.lastName);
  }
}
function EditChildren_div_3_div_5_div_49_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditChildren_div_3_div_5_div_49_ng_template_17_div_0_Template, 4, 3, "div", 98);
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    \u0275\u0275property("ngIf", item_r8 == null ? null : item_r8.id);
  }
}
function EditChildren_div_3_div_5_div_49_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("parentId"), " ");
  }
}
function EditChildren_div_3_div_5_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "i", 91);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 50)(7, "div", 51)(8, "label", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52);
    \u0275\u0275element(13, "i", 92);
    \u0275\u0275elementStart(14, "ng-select", 93);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275template(16, EditChildren_div_3_div_5_div_49_ng_template_16_Template, 7, 4, "ng-template", 59)(17, EditChildren_div_3_div_5_div_49_ng_template_17_Template, 1, 1, "ng-template", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, EditChildren_div_3_div_5_div_49_div_18_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "EDIT_CHILD.PARENT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 12, "EDIT_CHILD.PARENT"), " ", \u0275\u0275pipeBind1(11, 14, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("parentId"));
    \u0275\u0275property("items", ctx_r2.parents)("placeholder", \u0275\u0275pipeBind1(15, 16, "EDIT_CHILD.SELECT_PARENT"))("clearable", true)("searchable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("parentId"));
  }
}
function EditChildren_div_3_div_5_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("allergies"), " ");
  }
}
function EditChildren_div_3_div_5_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getFieldError("medicalNotes"), " ");
  }
}
function EditChildren_div_3_div_5_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "i", 103);
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
function EditChildren_div_3_div_5_img_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 104);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r2.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditChildren_div_3_div_5_button_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 105);
    \u0275\u0275listener("click", function EditChildren_div_3_div_5_button_92_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeImage());
    });
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function EditChildren_div_3_div_5_span_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function EditChildren_div_3_div_5_i_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 106);
  }
}
function EditChildren_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "form", 46);
    \u0275\u0275listener("ngSubmit", function EditChildren_div_3_div_5_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateChild());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48);
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "div", 51)(10, "label", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 52);
    \u0275\u0275element(15, "i", 53)(16, "input", 54);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditChildren_div_3_div_5_div_18_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 51)(20, "label", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 52);
    \u0275\u0275element(25, "i", 53)(26, "input", 56);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EditChildren_div_3_div_5_div_28_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 51)(30, "label", 15);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 52);
    \u0275\u0275element(35, "i", 57);
    \u0275\u0275elementStart(36, "ng-select", 58);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275template(38, EditChildren_div_3_div_5_ng_template_38_Template, 4, 4, "ng-template", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, EditChildren_div_3_div_5_div_39_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 51)(41, "label", 15);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 52);
    \u0275\u0275element(46, "i", 60)(47, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, EditChildren_div_3_div_5_div_48_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, EditChildren_div_3_div_5_div_49_Template, 19, 18, "div", 62);
    \u0275\u0275elementStart(50, "div", 47)(51, "div", 48);
    \u0275\u0275element(52, "i", 63);
    \u0275\u0275elementStart(53, "h4");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 50)(57, "div", 64)(58, "label", 15);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 52);
    \u0275\u0275element(62, "i", 65)(63, "textarea", 66);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, EditChildren_div_3_div_5_div_65_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 67)(67, "label", 15);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 52);
    \u0275\u0275element(71, "i", 68)(72, "textarea", 69);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, EditChildren_div_3_div_5_div_74_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 47)(76, "div", 48);
    \u0275\u0275element(77, "i", 70);
    \u0275\u0275elementStart(78, "h4");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 50)(82, "div", 51)(83, "label", 15);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 71)(87, "input", 72, 1);
    \u0275\u0275listener("change", function EditChildren_div_3_div_5_Template_input_change_87_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "label", 73);
    \u0275\u0275template(90, EditChildren_div_3_div_5_div_90_Template, 5, 3, "div", 74)(91, EditChildren_div_3_div_5_img_91_Template, 2, 4, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275template(92, EditChildren_div_3_div_5_button_92_Template, 4, 3, "button", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "small", 77);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 51)(97, "label", 15);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 78)(101, "label", 79);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 80);
    \u0275\u0275element(105, "input", 81)(106, "label", 82);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(107, "div", 83)(108, "button", 84);
    \u0275\u0275listener("click", function EditChildren_div_3_div_5_Template_button_click_108_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancel());
    });
    \u0275\u0275element(109, "i", 85);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "button", 31);
    \u0275\u0275template(113, EditChildren_div_3_div_5_span_113_Template, 1, 0, "span", 32)(114, EditChildren_div_3_div_5_i_114_Template, 1, 0, "i", 86);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.childForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 54, "EDIT_CHILD.GENERAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 56, "EDIT_CHILD.FIRST_NAME"), " ", \u0275\u0275pipeBind1(13, 58, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("firstName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 60, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("firstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 62, "EDIT_CHILD.LAST_NAME"), " ", \u0275\u0275pipeBind1(23, 64, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("lastName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 66, "GLOBAL.LAST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("lastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(32, 68, "EDIT_CHILD.GENDER"), " ", \u0275\u0275pipeBind1(33, 70, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("gender"));
    \u0275\u0275property("items", ctx_r2.genders)("placeholder", \u0275\u0275pipeBind1(37, 72, "EDIT_CHILD.SELECT_GENDER"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("gender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(43, 74, "EDIT_CHILD.DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(44, 76, "EDIT_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("dateOfBirth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("dateOfBirth"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isParent());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 78, "EDIT_CHILD.MEDICAL_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 80, "EDIT_CHILD.ALLERGIES"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("allergies"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(64, 82, "EDIT_CHILD.ALLERGIES_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("allergies"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 84, "EDIT_CHILD.MEDICAL_NOTES"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r2.isFieldInvalid("medicalNotes"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(73, 86, "EDIT_CHILD.MEDICAL_NOTES_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isFieldInvalid("medicalNotes"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 88, "EDIT_CHILD.PHOTO_STATUS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 90, "EDIT_CHILD.PROFILE_PICTURE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 92, "GLOBAL.IMAGE_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 94, "EDIT_CHILD.STATUS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 96, "EDIT_CHILD.ACTIVE_STATUS"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(111, 98, "EDIT_CHILD.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving || ctx_r2.childForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving ? \u0275\u0275pipeBind1(116, 100, "EDIT_CHILD.UPDATING") : \u0275\u0275pipeBind1(117, 102, "EDIT_CHILD.UPDATE_CHILD"), " ");
  }
}
function EditChildren_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "app-title-page", 39);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, EditChildren_div_3_div_4_Template, 5, 3, "div", 40)(5, EditChildren_div_3_div_5_Template, 118, 104, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 5, "EDIT_CHILD.TITLE"))("breadcrumbs", ctx_r2.breadcrumbs)("actions", ctx_r2.titleActions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading);
  }
}
var EditChildren = class _EditChildren {
  fb;
  childrenService;
  parentService;
  authService;
  router;
  route;
  location;
  translate;
  simpleToastService;
  fileInput;
  imageCropper;
  saving = false;
  loading = false;
  imagePreview = null;
  selectedImageFile = null;
  childId = 0;
  parents = [];
  childForm;
  // Child object for parent mobile version (uses ngModel)
  child = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    allergies: "",
    medicalNotes: "",
    parentId: 0,
    isActive: true
  };
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  genders = [];
  constructor(fb, childrenService, parentService, authService, router, route, location, translate, simpleToastService) {
    this.fb = fb;
    this.childrenService = childrenService;
    this.parentService = parentService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.location = location;
    this.translate = translate;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.childId = Number(this.route.snapshot.paramMap.get("id"));
    this.initGenders();
    this.initBreadcrumbs();
    this.initTitleActions();
    this.initForm();
    this.loadParents();
    this.loadChild();
    this.translate.onLangChange.subscribe(() => {
      this.initGenders();
      this.initBreadcrumbs();
      this.initTitleActions();
    });
  }
  initGenders() {
    this.genders = [
      { value: "Male", label: this.translate.instant("COMMON.MALE"), icon: "bi-gender-male" },
      { value: "Female", label: this.translate.instant("COMMON.FEMALE"), icon: "bi-gender-female" }
    ];
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.CHILDREN"), url: "/children" },
      { label: this.translate.instant("BREADCRUMBS.EDIT_CHILD") }
    ];
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
  initForm() {
    this.childForm = this.fb.group({
      id: [0],
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      dateOfBirth: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      allergies: ["", [Validators.maxLength(500)]],
      medicalNotes: ["", [Validators.maxLength(1e3)]],
      profilePicture: [""],
      parentId: [0, [Validators.required, Validators.min(1)]],
      isActive: [true]
    });
  }
  loadParents() {
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.parentService.loadParents().subscribe({
        next: (parents) => {
          this.parents = parents;
        },
        error: (error) => {
          const sanitizedMessage = this.sanitizeLogMessage(error?.message);
          console.error(`Error loading parents: ${sanitizedMessage}`);
          this.simpleToastService.error(this.translate.instant("MESSAGES.LOAD_PARENTS_ERROR"));
        }
      });
    }
  }
  loadChild() {
    this.loading = true;
    this.childrenService.getChild(this.childId).subscribe({
      next: (childData) => {
        let dateOfBirth = childData.dateOfBirth;
        if (dateOfBirth) {
          dateOfBirth = new Date(dateOfBirth).toISOString().split("T")[0];
        }
        this.childForm.patchValue({
          id: childData.id,
          firstName: childData.firstName,
          lastName: childData.lastName,
          dateOfBirth,
          gender: childData.gender,
          allergies: childData.allergies || "",
          medicalNotes: childData.medicalNotes || "",
          profilePicture: childData.profilePicture || "",
          parentId: childData.parentId,
          isActive: childData.isActive
        });
        this.child = __spreadProps(__spreadValues({}, childData), {
          dateOfBirth: dateOfBirth || "",
          allergies: childData.allergies || "",
          medicalNotes: childData.medicalNotes || ""
        });
        this.imagePreview = childData.profilePictureUrl || childData.profilePicture || null;
        this.loading = false;
      },
      error: (error) => {
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        console.error(`Error loading child: ${sanitizedMessage}`);
        this.loading = false;
        this.simpleToastService.error(this.translate.instant("EDIT_CHILD.LOAD_ERROR"));
        setTimeout(() => {
          this.router.navigate(["/children"]);
        }, 200);
      }
    });
  }
  updateChild() {
    if (this.isParent()) {
      this.saving = true;
      if (this.selectedImageFile && this.child.id) {
        this.childrenService.uploadChildProfilePicture(this.child.id, this.selectedImageFile).subscribe({
          next: () => {
            this.child.profilePicture = void 0;
            this.childrenService.updateChild(this.child).subscribe({
              next: () => {
                this.saving = false;
                this.router.navigate(["/children"]);
              },
              error: () => {
                this.saving = false;
              }
            });
          },
          error: () => {
            this.childrenService.updateChild(this.child).subscribe({
              next: () => {
                this.saving = false;
                this.router.navigate(["/children"]);
              },
              error: () => {
                this.saving = false;
              }
            });
          }
        });
      } else {
        this.childrenService.updateChild(this.child).subscribe({
          next: () => {
            this.saving = false;
            this.router.navigate(["/children"]);
          },
          error: () => {
            this.saving = false;
          }
        });
      }
      return;
    }
    if (this.childForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const childData = this.childForm.value;
    if (this.selectedImageFile && this.childId) {
      this.childrenService.uploadChildProfilePicture(this.childId, this.selectedImageFile).subscribe({
        next: () => {
          childData.profilePicture = void 0;
          this.saveChildData(childData);
        },
        error: () => {
          this.saveChildData(childData);
        }
      });
    } else {
      this.saveChildData(childData);
    }
  }
  saveChildData(childData) {
    this.childrenService.updateChild(childData).subscribe({
      next: () => {
        this.saving = false;
        this.simpleToastService.success(this.translate.instant("EDIT_CHILD.UPDATE_SUCCESS"));
        setTimeout(() => {
          this.router.navigate(["/children"]);
        }, 200);
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        const sanitizedStatus = typeof error?.status === "number" ? error.status : 0;
        const sanitizedStatusText = this.sanitizeLogMessage(error?.statusText);
        console.error(`Failed to update child: status=${sanitizedStatus}, statusText=${sanitizedStatusText}, message=${sanitizedMessage}`);
        this.simpleToastService.error(this.translate.instant("EDIT_CHILD.UPDATE_ERROR"));
      }
    });
  }
  sanitizeLogMessage(input) {
    if (typeof input !== "string") {
      return "Unknown";
    }
    return input.substring(0, 200).replace(/[\r\n\t]/g, " ").replace(/[^\x20-\x7E]/g, "");
  }
  cancel() {
    if (this.childForm.dirty) {
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
          this.router.navigate(["/children"]);
        }
      });
    } else {
      this.router.navigate(["/children"]);
    }
  }
  back() {
    this.location.back();
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (this.isParent()) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        this.imagePreview = result;
        this.child.profilePicture = result;
      };
      reader.readAsDataURL(file);
      return;
    }
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToastService.error(this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES"));
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      this.simpleToastService.error(this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() }));
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
    this.childForm.patchValue({ profilePicture: "" });
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
  removeImage() {
    this.resetFileInput();
  }
  resetFileInput() {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.childForm.patchValue({ profilePicture: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.childForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  get formControls() {
    return this.childForm.controls;
  }
  isFieldInvalid(fieldName) {
    const field = this.childForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
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
    if (field.errors["min"]) {
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  isParent() {
    return this.authService.isParent();
  }
  static \u0275fac = function EditChildren_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditChildren)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditChildren, selectors: [["app-edit-children"]], viewQuery: function EditChildren_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 4, vars: 9, consts: [["imageCropper", ""], ["fileInput", ""], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight", "format", "quality"], [3, "class", 4, "ngIf"], ["class", "edit-child-container", 4, "ngIf"], ["class", "parent-detailchild font-inter", 4, "ngIf"], [1, "parent-detailchild", "font-inter"], [3, "onBack", "children", "currentChildIndex", "showDatePicker", "showSettings", "showEdit", "showImages", "hasCustomContent"], [1, "body", "container-fluid"], [1, "card", "card-general"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateOfBirth", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "gender", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["loading", "lazy", "class", "mt-2 rounded", "width", "100", "height", "100", 3, "src", "alt", 4, "ngIf"], [1, "form-check", "form-switch"], ["type", "checkbox", "name", "isActive", "id", "isActiveEdit", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isActiveEdit", 1, "form-check-label"], [1, "col-12", "mb-3"], ["name", "allergies", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "medicalNotes", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "gap-2", "flex-row-reverse"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-cancel-global", 3, "click", "disabled"], [3, "value"], ["loading", "lazy", "width", "100", "height", "100", 1, "mt-2", "rounded", 3, "src", "alt"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "edit-child-container"], [1, "container-fluid", "mt-4", "mb-4"], [3, "title", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card-add-pages", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-gender-ambiguous", "input-icon"], ["formControlName", "gender", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-input"], ["class", "form-section", 4, "ngIf"], [1, "bi", "bi-heart-pulse"], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-exclamation-triangle", "input-icon"], ["formControlName", "allergies", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-clipboard2-pulse", "input-icon"], ["formControlName", "medicalNotes", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "status-toggle"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "toggle-input"], ["for", "isActive", 1, "toggle-slider"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "bi", "bi-people"], [1, "bi", "bi-person-badge", "input-icon"], ["formControlName", "parentId", "bindLabel", "firstName", "bindValue", "id", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-label-tmp", ""], ["alt", "", 1, "option-image", 3, "src"], [1, "option-text"], [1, "option-subtitle"], ["class", "selected-with-image", 4, "ngIf"], [1, "selected-with-image"], ["alt", "", 1, "selected-image", 3, "src"], [1, "selected-text"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "bi", "bi-check-circle"]], template: function EditChildren_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "app-image-cropper-modal", 2, 0);
      \u0275\u0275listener("imageCropped", function EditChildren_Template_app_image_cropper_modal_imageCropped_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function EditChildren_Template_app_image_cropper_modal_cancelled_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, EditChildren_div_2_Template, 2, 3, "div", 3)(3, EditChildren_div_3_Template, 6, 7, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 200)("resizeToHeight", 200)("format", "jpeg")("quality", 70);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isParent());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, NgForm, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, ParentChildHeaderComponent, ImageCropperModalComponent, TitlePage, TranslatePipe], styles: ["\n\n  .parent-detailchild .header-info {\n  margin-bottom: 45px;\n}\n/*# sourceMappingURL=edit-children.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditChildren, [{
    type: Component,
    args: [{ selector: "app-edit-children", imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslateModule, NgSelectModule, ParentChildHeaderComponent, ImageCropperModalComponent, TitlePage], standalone: true, template: `\r
<!-- Image Cropper Modal -->\r
<app-image-cropper-modal\r
  #imageCropper\r
  [imageFile]="selectedImageFile"\r
  [roundCropper]="true"\r
  [aspectRatio]="1"\r
  [resizeToWidth]="200"\r
  [resizeToHeight]="200"\r
  [format]="'jpeg'"\r
  [quality]="70"\r
  (imageCropped)="onImageCropped($event)"\r
  (cancelled)="onCropCancelled()">\r
</app-image-cropper-modal>\r
\r
<div *ngIf="isParent()" [class]="isParent() ? '' : ' mt-4'">\r
    <div *ngIf="child && !loading" class="parent-detailchild font-inter">\r
      <app-parent-child-header\r
        [children]="[child]"\r
        [currentChildIndex]="0"\r
        [showDatePicker]="false"\r
        [showSettings]="false"\r
        [showEdit]="false"\r
        [showImages]="true"\r
        [hasCustomContent]="false"\r
        (onBack)="back()">\r
      </app-parent-child-header>\r
      <div class="body container-fluid">\r
        <div class="card card-general">\r
          <div class="card-header">\r
            <h5>{{ 'EDIT_CHILD.GENERAL_INFO' | translate }}</h5>\r
          </div>\r
          <div class="card-body">\r
            <form (ngSubmit)="updateChild()">\r
              <div class="row">\r
                <div class="col-md-6 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.FIRST_NAME' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
                  <input type="text" class="form-control" [(ngModel)]="child.firstName" name="firstName" required>\r
                </div>\r
                <div class="col-md-6 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.LAST_NAME' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
                  <input type="text" class="form-control" [(ngModel)]="child.lastName" name="lastName" required>\r
                </div>\r
                <div class="col-md-6 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.DATE_OF_BIRTH' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
                  <input type="date" class="form-control" [(ngModel)]="child.dateOfBirth" name="dateOfBirth" required>\r
                </div>\r
                <div class="col-md-6 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.GENDER' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
                  <select class="form-select" [(ngModel)]="child.gender" name="gender" required>\r
                    <option value="">{{ 'EDIT_CHILD.SELECT_GENDER' | translate }}</option>\r
                    <option *ngFor="let gender of genders" [value]="gender.value">\r
                      {{ gender.label }}\r
                    </option>\r
                  </select>\r
                </div>\r
                <div class="col-md-6 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.PROFILE_PICTURE' | translate }}</label>\r
                  <input type="file" class="form-control" (change)="onImageSelect($event)" accept="image/*">\r
                  <img *ngIf="imagePreview" loading="lazy" [src]="imagePreview" class="mt-2 rounded" width="100" height="100" [alt]="'GLOBAL.PREVIEW' | translate">\r
                </div>\r
                <div class="col-md-6 mb-3">\r
                  <div class="form-check form-switch">\r
                    <input class="form-check-input" type="checkbox" [(ngModel)]="child.isActive" name="isActive" id="isActiveEdit">\r
                    <label class="form-check-label" for="isActiveEdit">\r
                      {{ 'EDIT_CHILD.ACTIVE_STATUS' | translate }}\r
                    </label>\r
                  </div>\r
                </div>\r
                <div class="col-12 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.ALLERGIES' | translate }}</label>\r
                  <textarea class="form-control" [(ngModel)]="child.allergies" name="allergies" rows="3" [placeholder]="'EDIT_CHILD.ALLERGIES_PLACEHOLDER' | translate"></textarea>\r
                </div>\r
                <div class="col-12 mb-3">\r
                  <label class="form-label">{{ 'EDIT_CHILD.MEDICAL_NOTES' | translate }}</label>\r
                  <textarea class="form-control" [(ngModel)]="child.medicalNotes" name="medicalNotes" rows="3" [placeholder]="'EDIT_CHILD.MEDICAL_NOTES_PLACEHOLDER' | translate"></textarea>\r
                </div>\r
              </div>\r
              <div class="d-flex gap-2 flex-row-reverse">\r
                <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
                  <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
                  {{ saving ? ('EDIT_CHILD.UPDATING' | translate) : ('EDIT_CHILD.UPDATE_CHILD' | translate) }}\r
                </button>\r
                <button type="button" class="btn btn-cancel-global" (click)="cancel()" [disabled]="saving">{{ 'EDIT_CHILD.CANCEL' | translate }}</button>\r
              </div>\r
            </form>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
</div>\r
<div  *ngIf="!isParent()" class="edit-child-container">\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page [title]="'EDIT_CHILD.TITLE' | translate" [breadcrumbs]="breadcrumbs" [actions]="titleActions">\r
    </app-title-page>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border" role="status">\r
        <span class="visually-hidden">{{ 'EDIT_CHILD.LOADING' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="card-add-pages" *ngIf="!loading">\r
      <form [formGroup]="childForm" (ngSubmit)="updateChild()" class="add-form">\r
        <!-- Section Personal Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-person-circle"></i>\r
            <h4>{{ 'EDIT_CHILD.GENERAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.FIRST_NAME' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('firstName')" formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('firstName')" class="error-message">\r
                {{ getFieldError('firstName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.LAST_NAME' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('lastName')" formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('lastName')" class="error-message">\r
                {{ getFieldError('lastName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.GENDER' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-gender-ambiguous input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('gender')"\r
                  formControlName="gender"\r
                  [items]="genders"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'EDIT_CHILD.SELECT_GENDER' | translate"\r
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
              <div *ngIf="isFieldInvalid('gender')" class="error-message">\r
                {{ getFieldError('gender') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.DATE_OF_BIRTH' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('dateOfBirth')" formControlName="dateOfBirth">\r
              </div>\r
              <div *ngIf="isFieldInvalid('dateOfBirth')" class="error-message">\r
                {{ getFieldError('dateOfBirth') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Parent Selection (only for admin/teacher) -->\r
        <div class="form-section" *ngIf="!isParent()">\r
          <div class="section-header">\r
            <i class="bi bi-people"></i>\r
            <h4>{{ 'EDIT_CHILD.PARENT' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.PARENT' | translate }} {{ 'EDIT_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person-badge input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('parentId')"\r
                  formControlName="parentId"\r
                  [items]="parents"\r
                  bindLabel="firstName"\r
                  bindValue="id"\r
                  [placeholder]="'EDIT_CHILD.SELECT_PARENT' | translate"\r
                  [clearable]="true"\r
                  [searchable]="true">\r
                  <!-- Custom option template with image -->\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <img [src]="item?.profilePicture || 'assets/father.png'" class="option-image" alt="">\r
                      <div class="option-text">\r
                        <span class="option-title">{{ item.firstName }} {{ item.lastName }}</span>\r
                        <span class="option-subtitle">{{ item.email }}</span>\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <!-- Custom selected label template -->\r
                  <ng-template ng-label-tmp let-item="item">\r
                    <div class="selected-with-image" *ngIf="item?.id">\r
                      <img [src]="item?.profilePicture || 'assets/father.png'" class="selected-image" alt="">\r
                      <span class="selected-text">{{ item.firstName }} {{ item.lastName }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('parentId')" class="error-message">\r
                {{ getFieldError('parentId') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Medical Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-heart-pulse"></i>\r
            <h4>{{ 'EDIT_CHILD.MEDICAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'EDIT_CHILD.ALLERGIES' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-exclamation-triangle input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('allergies')" formControlName="allergies" rows="3" [placeholder]="'EDIT_CHILD.ALLERGIES_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('allergies')" class="error-message">\r
                {{ getFieldError('allergies') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'EDIT_CHILD.MEDICAL_NOTES' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-clipboard2-pulse input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('medicalNotes')" formControlName="medicalNotes" rows="3" [placeholder]="'EDIT_CHILD.MEDICAL_NOTES_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('medicalNotes')" class="error-message">\r
                {{ getFieldError('medicalNotes') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Photo and Status -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'EDIT_CHILD.PHOTO_STATUS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.PROFILE_PICTURE' | translate }}</label>\r
              <div class="file-upload-area">\r
                <input type="file" #fileInput id="profilePicture" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                <label for="profilePicture" class="file-upload-label">\r
                  <div *ngIf="!imagePreview" class="upload-placeholder">\r
                    <i class="bi bi-cloud-upload"></i>\r
                    <span>{{ 'GLOBAL.UPLOAD_PHOTO' | translate }}</span>\r
                  </div>\r
                  <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image" [alt]="'GLOBAL.PREVIEW' | translate">\r
                </label>\r
                <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
                  <i class="bi bi-x-circle"></i>\r
                  {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
                </button>\r
              </div>\r
              <small class="form-hint">{{ 'GLOBAL.IMAGE_HINT' | translate }}</small>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_CHILD.STATUS' | translate }}</label>\r
              <div class="status-toggle">\r
                <label class="toggle-label">{{ 'EDIT_CHILD.ACTIVE_STATUS' | translate }}</label>\r
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
            {{ 'EDIT_CHILD.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || childForm.invalid">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('EDIT_CHILD.UPDATING' | translate) : ('EDIT_CHILD.UPDATE_CHILD' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/children/edit-children/edit-children.scss */\n::ng-deep .parent-detailchild .header-info {\n  margin-bottom: 45px;\n}\n/*# sourceMappingURL=edit-children.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ChildrenService }, { type: ParentService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: Location }, { type: TranslateService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditChildren, { className: "EditChildren", filePath: "src/app/features/children/edit-children/edit-children.ts", lineNumber: 25 });
})();
export {
  EditChildren
};
//# sourceMappingURL=chunk-TEQLXTJJ.js.map
