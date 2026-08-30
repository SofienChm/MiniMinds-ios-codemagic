import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  EventService
} from "./chunk-CF5UU2UU.js";
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
  MaxValidator,
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
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/event/edit-event/edit-event.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
function EditEvent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDIT_EVENT.LOADING"));
  }
}
function EditEvent_div_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function EditEvent_div_6_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r3.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function EditEvent_div_6_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function EditEvent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function EditEvent_div_6_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("price"), " ");
  }
}
function EditEvent_div_6_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("capacity"), " ");
  }
}
function EditEvent_div_6_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("ageFrom"), " ");
  }
}
function EditEvent_div_6_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("ageTo"), " ");
  }
}
function EditEvent_div_6_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventDate"), " ");
  }
}
function EditEvent_div_6_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventTime"), " ");
  }
}
function EditEvent_div_6_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("place"), " ");
  }
}
function EditEvent_div_6_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
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
function EditEvent_div_6_img_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 69);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function EditEvent_div_6_button_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function EditEvent_div_6_button_148_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function EditEvent_div_6_span_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function EditEvent_div_6_i_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
  }
}
function EditEvent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "form", 10);
    \u0275\u0275listener("ngSubmit", function EditEvent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateEvent());
    });
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "i", 13);
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "label", 16);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275element(15, "i", 18)(16, "input", 19);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditEvent_div_6_div_18_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "label", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275element(25, "i", 21);
    \u0275\u0275elementStart(26, "ng-select", 22);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275template(28, EditEvent_div_6_ng_template_28_Template, 4, 4, "ng-template", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, EditEvent_div_6_div_29_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 24)(31, "label", 16);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17);
    \u0275\u0275element(36, "i", 25)(37, "textarea", 26);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, EditEvent_div_6_div_39_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 27)(41, "div", 28)(42, "input", 29);
    \u0275\u0275listener("change", function EditEvent_div_6_Template_input_change_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onIncludeAllChildrenChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label", 30);
    \u0275\u0275element(44, "i", 31);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "small", 32);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 11)(51, "div", 12);
    \u0275\u0275element(52, "i", 33);
    \u0275\u0275elementStart(53, "h4");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "div", 15)(58, "label", 16);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 17);
    \u0275\u0275element(63, "i", 34)(64, "input", 35);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, EditEvent_div_6_div_66_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 15)(68, "label", 16);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 17);
    \u0275\u0275element(73, "i", 36)(74, "input", 37);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(76, EditEvent_div_6_div_76_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 15)(78, "label", 16);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 17);
    \u0275\u0275element(83, "i", 38)(84, "input", 39);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(86, EditEvent_div_6_div_86_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 15)(88, "label", 16);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 17);
    \u0275\u0275element(93, "i", 40)(94, "input", 41);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, EditEvent_div_6_div_96_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 11)(98, "div", 12);
    \u0275\u0275element(99, "i", 42);
    \u0275\u0275elementStart(100, "h4");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 14)(104, "div", 15)(105, "label", 16);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 17);
    \u0275\u0275element(110, "i", 43)(111, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(112, EditEvent_div_6_div_112_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 15)(114, "label", 16);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 17);
    \u0275\u0275element(119, "i", 45)(120, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(121, EditEvent_div_6_div_121_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 27)(123, "label", 16);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 17);
    \u0275\u0275element(127, "i", 47)(128, "input", 48);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(130, EditEvent_div_6_div_130_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 11)(132, "div", 12);
    \u0275\u0275element(133, "i", 49);
    \u0275\u0275elementStart(134, "h4");
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 14)(138, "div", 15)(139, "label", 16);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 50)(143, "input", 51, 0);
    \u0275\u0275listener("change", function EditEvent_div_6_Template_input_change_143_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "label", 52);
    \u0275\u0275template(146, EditEvent_div_6_div_146_Template, 5, 3, "div", 53)(147, EditEvent_div_6_img_147_Template, 2, 4, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(148, EditEvent_div_6_button_148_Template, 4, 3, "button", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "small", 56);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(152, "div", 57)(153, "button", 58);
    \u0275\u0275listener("click", function EditEvent_div_6_Template_button_click_153_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(154, "i", 59);
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "button", 60);
    \u0275\u0275template(158, EditEvent_div_6_span_158_Template, 1, 0, "span", 61)(159, EditEvent_div_6_i_159_Template, 1, 0, "i", 62);
    \u0275\u0275text(160);
    \u0275\u0275pipe(161, "translate");
    \u0275\u0275pipe(162, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.eventForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 78, "EDIT_EVENT.EVENT_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(12, 80, "EDIT_EVENT.EVENT_NAME"), " ", \u0275\u0275pipeBind1(13, 82, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 84, "EDIT_EVENT.EVENT_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(22, 86, "EDIT_EVENT.EVENT_TYPE"), " ", \u0275\u0275pipeBind1(23, 88, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("type"));
    \u0275\u0275property("items", ctx_r1.eventTypes)("placeholder", \u0275\u0275pipeBind1(27, 90, "EDIT_EVENT.SELECT_TYPE"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(33, 92, "EDIT_EVENT.DESCRIPTION"), " ", \u0275\u0275pipeBind1(34, 94, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 96, "EDIT_EVENT.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 98, "EDIT_EVENT.INCLUDE_ALL_CHILDREN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 100, "EDIT_EVENT.INCLUDE_ALL_CHILDREN_HINT"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 102, "EDIT_EVENT.EVENT_DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(60, 104, "EDIT_EVENT.PRICE"), " ", \u0275\u0275pipeBind1(61, 106, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("price"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 108, "EDIT_EVENT.PRICE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(70, 110, "EDIT_EVENT.CAPACITY"), " ", \u0275\u0275pipeBind1(71, 112, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("capacity"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(75, 114, "EDIT_EVENT.CAPACITY_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("capacity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(80, 116, "EDIT_EVENT.AGE_FROM"), " ", \u0275\u0275pipeBind1(81, 118, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("ageFrom"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(85, 120, "EDIT_EVENT.AGE_FROM_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("ageFrom"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(90, 122, "EDIT_EVENT.AGE_TO"), " ", \u0275\u0275pipeBind1(91, 124, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("ageTo"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(95, 126, "EDIT_EVENT.AGE_TO_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("ageTo"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 128, "EDIT_EVENT.DATE_LOCATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(107, 130, "EDIT_EVENT.DATE"), " ", \u0275\u0275pipeBind1(108, 132, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("eventDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("eventDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(116, 134, "EDIT_EVENT.TIME"), " ", \u0275\u0275pipeBind1(117, 136, "EDIT_EVENT.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("eventTime"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("eventTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 138, "EDIT_EVENT.PLACE"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("place"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(129, 140, "EDIT_EVENT.PLACE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("place"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 142, "EDIT_EVENT.EVENT_IMAGE_SECTION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 144, "EDIT_EVENT.EVENT_IMAGE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 146, "GLOBAL.IMAGE_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(156, 148, "EDIT_EVENT.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving || ctx_r1.eventForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(161, 150, "EDIT_EVENT.UPDATING") : \u0275\u0275pipeBind1(162, 152, "EDIT_EVENT.UPDATE_EVENT"), " ");
  }
}
var EditEvent = class _EditEvent {
  fb;
  eventService;
  router;
  route;
  translate;
  pageTitleService;
  fileInput;
  langChangeSub;
  saving = false;
  loading = false;
  eventId = 0;
  eventForm;
  imagePreview = null;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  eventTypes = [];
  constructor(fb, eventService, router, route, translate, pageTitleService) {
    this.fb = fb;
    this.eventService = eventService;
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("EDIT_EVENT.TITLE"));
    this.eventId = Number(this.route.snapshot.paramMap.get("id"));
    this.updateTranslatedContent();
    this.initForm();
    this.loadEvent();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translate.instant("EDIT_EVENT.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.initBreadcrumbs();
    this.initSelectOptions();
    this.initTitleActions();
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-2",
        action: () => this.back()
      }
    ];
  }
  back() {
    this.router.navigate(["/events"]);
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EVENTS"), url: "/events" },
      { label: this.translate.instant("BREADCRUMBS.EDIT_EVENT") }
    ];
  }
  initForm() {
    this.eventForm = this.fb.group({
      id: [0],
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      type: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.maxLength(1e3)]],
      includeAllChildren: [false],
      price: [0, [Validators.required, Validators.min(0)]],
      capacity: [1, [Validators.required, Validators.min(1), Validators.max(1e3)]],
      ageFrom: [0, [Validators.required, Validators.min(0), Validators.max(18)]],
      ageTo: [18, [Validators.required, Validators.min(0), Validators.max(18)]],
      eventDate: ["", [Validators.required]],
      eventTime: ["", [Validators.required]],
      place: ["", [Validators.maxLength(200)]],
      image: [""]
    });
  }
  onIncludeAllChildrenChange() {
    const includeAll = this.eventForm.get("includeAllChildren")?.value;
    const capacityControl = this.eventForm.get("capacity");
    const ageFromControl = this.eventForm.get("ageFrom");
    const ageToControl = this.eventForm.get("ageTo");
    if (includeAll) {
      capacityControl?.disable();
      ageFromControl?.disable();
      ageToControl?.disable();
      capacityControl?.clearValidators();
      ageFromControl?.clearValidators();
      ageToControl?.clearValidators();
    } else {
      capacityControl?.enable();
      ageFromControl?.enable();
      ageToControl?.enable();
      capacityControl?.setValidators([Validators.required, Validators.min(1), Validators.max(1e3)]);
      ageFromControl?.setValidators([Validators.required, Validators.min(0), Validators.max(18)]);
      ageToControl?.setValidators([Validators.required, Validators.min(0), Validators.max(18)]);
    }
    capacityControl?.updateValueAndValidity();
    ageFromControl?.updateValueAndValidity();
    ageToControl?.updateValueAndValidity();
  }
  initSelectOptions() {
    this.eventTypes = [
      { value: "Workshop", label: this.translate.instant("EDIT_EVENT.TYPE_WORKSHOP"), icon: "bi-tools" },
      { value: "Party", label: this.translate.instant("EDIT_EVENT.TYPE_PARTY"), icon: "bi-balloon" },
      { value: "Educational", label: this.translate.instant("EDIT_EVENT.TYPE_EDUCATIONAL"), icon: "bi-book" },
      { value: "Sports", label: this.translate.instant("EDIT_EVENT.TYPE_SPORTS"), icon: "bi-trophy" },
      { value: "Arts & Crafts", label: this.translate.instant("EDIT_EVENT.TYPE_ARTS"), icon: "bi-palette" },
      { value: "Music", label: this.translate.instant("EDIT_EVENT.TYPE_MUSIC"), icon: "bi-music-note-beamed" },
      { value: "Outdoor", label: this.translate.instant("EDIT_EVENT.TYPE_OUTDOOR"), icon: "bi-tree" },
      { value: "Special Event", label: this.translate.instant("EDIT_EVENT.TYPE_SPECIAL"), icon: "bi-star" }
    ];
  }
  loadEvent() {
    this.loading = true;
    this.eventService.getEvent(this.eventId).subscribe({
      next: (event) => {
        let eventDate = "";
        let eventTime = "";
        if (event.time) {
          let eventDateTime = new Date(event.time);
          if (isNaN(eventDateTime.getTime())) {
            eventDateTime = /* @__PURE__ */ new Date(event.time + "T00:00:00");
          }
          if (!isNaN(eventDateTime.getTime())) {
            const year = eventDateTime.getFullYear();
            const month = String(eventDateTime.getMonth() + 1).padStart(2, "0");
            const day = String(eventDateTime.getDate()).padStart(2, "0");
            eventDate = `${year}-${month}-${day}`;
            const hours = String(eventDateTime.getHours()).padStart(2, "0");
            const minutes = String(eventDateTime.getMinutes()).padStart(2, "0");
            eventTime = `${hours}:${minutes}`;
          }
        }
        this.eventForm.patchValue({
          id: event.id,
          name: event.name,
          type: event.type,
          description: event.description,
          includeAllChildren: event.includeAllChildren || false,
          price: event.price,
          capacity: event.capacity,
          ageFrom: event.ageFrom,
          ageTo: event.ageTo,
          eventDate,
          eventTime,
          place: event.place || "",
          image: event.image || ""
        });
        if (event.includeAllChildren) {
          this.onIncludeAllChildrenChange();
        }
        if (event.imageUrl) {
          this.imagePreview = event.imageUrl.startsWith("http") ? event.imageUrl : ApiConfig.HUB_URL + event.imageUrl;
        } else {
          this.imagePreview = event.image || null;
        }
        this.loading = false;
      },
      error: (error) => {
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        console.error(`Error loading event: ${sanitizedMessage}`);
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EDIT_EVENT.LOAD_ERROR")
        }).then(() => {
          this.router.navigate(["/events"]);
        });
      }
    });
  }
  updateEvent() {
    if (this.eventForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    const formValue = this.eventForm.getRawValue();
    if (!formValue.includeAllChildren && formValue.ageFrom > formValue.ageTo) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.ERROR"),
        text: this.translate.instant("EDIT_EVENT.AGE_RANGE_ERROR")
      });
      return;
    }
    this.saving = true;
    const combinedDateTime = `${formValue.eventDate}T${formValue.eventTime}:00`;
    const eventData = {
      id: formValue.id,
      name: formValue.name,
      type: formValue.type,
      description: formValue.description,
      includeAllChildren: formValue.includeAllChildren,
      price: formValue.price,
      capacity: formValue.includeAllChildren ? 0 : formValue.capacity,
      ageFrom: formValue.includeAllChildren ? 0 : formValue.ageFrom,
      ageTo: formValue.includeAllChildren ? 99 : formValue.ageTo,
      time: combinedDateTime,
      place: formValue.place,
      image: formValue.image && formValue.image.startsWith("data:") ? formValue.image : void 0
    };
    this.eventService.updateEvent(eventData).subscribe({
      next: () => {
        this.saving = false;
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
        this.router.navigate(["/events"]);
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        console.error(`Failed to update event: ${sanitizedMessage}`);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EDIT_EVENT.UPDATE_ERROR")
        });
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
    if (this.eventForm.dirty) {
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
          this.router.navigate(["/events"]);
        }
      });
    } else {
      this.router.navigate(["/events"]);
    }
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.INVALID_FILE_TYPE"),
        text: this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES")
      });
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.FILE_TOO_LARGE"),
        text: this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() })
      });
      this.resetFileInput();
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string" && result.startsWith("data:image/")) {
        this.imagePreview = result;
        this.eventForm.patchValue({ image: result });
      } else {
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("MESSAGES.IMAGE_READ_ERROR")
        });
        this.resetFileInput();
      }
    };
    reader.onerror = () => {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.ERROR"),
        text: this.translate.instant("MESSAGES.IMAGE_READ_ERROR")
      });
      this.resetFileInput();
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.resetFileInput();
  }
  resetFileInput() {
    this.imagePreview = null;
    this.eventForm.patchValue({ image: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.eventForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  get formControls() {
    return this.eventForm.controls;
  }
  isFieldInvalid(fieldName) {
    const field = this.eventForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.eventForm.get(fieldName);
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
      const minValue = field.errors["min"].min;
      return this.translate.instant("VALIDATION.MIN_VALUE", { value: minValue });
    }
    if (field.errors["max"]) {
      const maxValue = field.errors["max"].max;
      return this.translate.instant("VALIDATION.MAX_VALUE", { value: maxValue });
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  static \u0275fac = function EditEvent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEvent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEvent, selectors: [["app-edit-event"]], viewQuery: function EditEvent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, decls: 7, vars: 10, consts: [["fileInput", ""], [1, "edit-event-container"], [1, "container-fluid", "mt-4", "mb-4"], ["icon", "bi bi-calendar-check", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card-add-pages", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-calendar-event"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-tag", "input-icon"], ["type", "text", "formControlName", "name", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "bi", "bi-collection", "input-icon"], ["formControlName", "type", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-text-paragraph", "input-icon"], ["formControlName", "description", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "form-check"], ["type", "checkbox", "id", "includeAllChildren", "formControlName", "includeAllChildren", 1, "form-check-input", 3, "change"], ["for", "includeAllChildren", 1, "form-check-label"], [1, "bi", "bi-people-fill", "me-2"], [1, "form-hint", "text-muted"], [1, "bi", "bi-info-circle"], [1, "bi", "bi-currency-dollar", "input-icon"], ["type", "number", "formControlName", "price", "min", "0", "step", "0.01", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-people", "input-icon"], ["type", "number", "formControlName", "capacity", "min", "1", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-person", "input-icon"], ["type", "number", "formControlName", "ageFrom", "min", "0", "max", "18", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-person-fill", "input-icon"], ["type", "number", "formControlName", "ageTo", "min", "0", "max", "18", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "eventDate", 1, "form-input"], [1, "bi", "bi-clock", "input-icon"], ["type", "time", "formControlName", "eventTime", 1, "form-input"], [1, "bi", "bi-pin-map", "input-icon"], ["type", "text", "formControlName", "place", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "eventImage", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "eventImage", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function EditEvent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "app-title-page", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, EditEvent_div_5_Template, 5, 3, "div", 4)(6, EditEvent_div_6_Template, 163, 154, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 6, "EDIT_EVENT.TITLE"))("subtitle", \u0275\u0275pipeBind1(4, 8, "EDIT_EVENT.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TitlePage, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEvent, [{
    type: Component,
    args: [{ selector: "app-edit-event", imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule, TitlePage], standalone: true, template: `<div class="edit-event-container">\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page\r
      [title]="'EDIT_EVENT.TITLE' | translate"\r
      [subtitle]="'EDIT_EVENT.SUBTITLE' | translate"\r
      icon="bi bi-calendar-check"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="text-center py-5">\r
      <div class="spinner-border" role="status">\r
        <span class="visually-hidden">{{ 'EDIT_EVENT.LOADING' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <div class="card-add-pages" *ngIf="!loading">\r
      <form [formGroup]="eventForm" (ngSubmit)="updateEvent()" class="add-form">\r
        <!-- Section Event Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-calendar-event"></i>\r
            <h4>{{ 'EDIT_EVENT.EVENT_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.EVENT_NAME' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-tag input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('name')" formControlName="name" [placeholder]="'EDIT_EVENT.EVENT_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('name')" class="error-message">\r
                {{ getFieldError('name') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.EVENT_TYPE' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-collection input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('type')"\r
                  formControlName="type"\r
                  [items]="eventTypes"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'EDIT_EVENT.SELECT_TYPE' | translate"\r
                  [clearable]="false"\r
                  [searchable]="false">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('type')" class="error-message">\r
                {{ getFieldError('type') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'EDIT_EVENT.DESCRIPTION' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-text-paragraph input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('description')" formControlName="description" rows="3" [placeholder]="'EDIT_EVENT.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('description')" class="error-message">\r
                {{ getFieldError('description') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <div class="form-check">\r
                <input type="checkbox" class="form-check-input" id="includeAllChildren" formControlName="includeAllChildren" (change)="onIncludeAllChildrenChange()">\r
                <label class="form-check-label" for="includeAllChildren">\r
                  <i class="bi bi-people-fill me-2"></i>{{ 'EDIT_EVENT.INCLUDE_ALL_CHILDREN' | translate }}\r
                </label>\r
              </div>\r
              <small class="form-hint text-muted">{{ 'EDIT_EVENT.INCLUDE_ALL_CHILDREN_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Event Details -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-info-circle"></i>\r
            <h4>{{ 'EDIT_EVENT.EVENT_DETAILS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.PRICE' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-currency-dollar input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('price')" formControlName="price" min="0" step="0.01" [placeholder]="'EDIT_EVENT.PRICE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('price')" class="error-message">\r
                {{ getFieldError('price') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.CAPACITY' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-people input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('capacity')" formControlName="capacity" min="1" [placeholder]="'EDIT_EVENT.CAPACITY_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('capacity')" class="error-message">\r
                {{ getFieldError('capacity') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.AGE_FROM' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('ageFrom')" formControlName="ageFrom" min="0" max="18" [placeholder]="'EDIT_EVENT.AGE_FROM_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('ageFrom')" class="error-message">\r
                {{ getFieldError('ageFrom') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.AGE_TO' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person-fill input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('ageTo')" formControlName="ageTo" min="0" max="18" [placeholder]="'EDIT_EVENT.AGE_TO_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('ageTo')" class="error-message">\r
                {{ getFieldError('ageTo') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Date, Time & Location -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-geo-alt"></i>\r
            <h4>{{ 'EDIT_EVENT.DATE_LOCATION' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.DATE' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('eventDate')" formControlName="eventDate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('eventDate')" class="error-message">\r
                {{ getFieldError('eventDate') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.TIME' | translate }} {{ 'EDIT_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-clock input-icon"></i>\r
                <input type="time" class="form-input" [class.is-invalid]="isFieldInvalid('eventTime')" formControlName="eventTime">\r
              </div>\r
              <div *ngIf="isFieldInvalid('eventTime')" class="error-message">\r
                {{ getFieldError('eventTime') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'EDIT_EVENT.PLACE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-pin-map input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('place')" formControlName="place" [placeholder]="'EDIT_EVENT.PLACE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('place')" class="error-message">\r
                {{ getFieldError('place') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Event Image -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'EDIT_EVENT.EVENT_IMAGE_SECTION' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'EDIT_EVENT.EVENT_IMAGE' | translate }}</label>\r
              <div class="file-upload-area">\r
                <input type="file" #fileInput id="eventImage" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                <label for="eventImage" class="file-upload-label">\r
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
          </div>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'EDIT_EVENT.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving || eventForm.invalid">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('EDIT_EVENT.UPDATING' | translate) : ('EDIT_EVENT.UPDATE_EVENT' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: EventService }, { type: Router }, { type: ActivatedRoute }, { type: TranslateService }, { type: PageTitleService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEvent, { className: "EditEvent", filePath: "src/app/features/event/edit-event/edit-event.ts", lineNumber: 23 });
})();
export {
  EditEvent
};
//# sourceMappingURL=chunk-GJOXSF7F.js.map
