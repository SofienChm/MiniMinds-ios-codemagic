import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  StaticFeesService
} from "./chunk-G5VH4N7Z.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
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

// src/app/features/static-fees/add-static-fee/add-static-fee.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function AddStaticFeeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "STATIC_FEES_PAGE.LOADING"));
  }
}
function AddStaticFeeComponent_div_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function AddStaticFeeComponent_div_5_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("amount"), " ");
  }
}
function AddStaticFeeComponent_div_5_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("feeDate"), " ");
  }
}
function AddStaticFeeComponent_div_5_div_58_Template(rf, ctx) {
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
function AddStaticFeeComponent_div_5_ng_template_74_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.email);
  }
}
function AddStaticFeeComponent_div_5_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddStaticFeeComponent_div_5_ng_template_74_small_5_Template, 2, 1, "small", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.email);
  }
}
function AddStaticFeeComponent_div_5_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
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
function AddStaticFeeComponent_div_5_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("payerEmail"), " ");
  }
}
function AddStaticFeeComponent_div_5_span_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275element(1, "span", 69);
    \u0275\u0275elementEnd();
  }
}
function AddStaticFeeComponent_div_5_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 22)(2, "label", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "STATIC_FEES_PAGE.PAID_DATE"), " ");
  }
}
function AddStaticFeeComponent_div_5_div_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function AddStaticFeeComponent_div_5_span_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
}
function AddStaticFeeComponent_div_5_i_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 74);
  }
}
function AddStaticFeeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "h5", 11);
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "form", 14);
    \u0275\u0275listener("ngSubmit", function AddStaticFeeComponent_div_5_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createStaticFee());
    });
    \u0275\u0275elementStart(10, "h6", 15);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7)(15, "div", 17)(16, "label", 18);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 19);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 20);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275template(23, AddStaticFeeComponent_div_5_div_23_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 22)(25, "label", 18);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span", 19);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "span", 24);
    \u0275\u0275text(32, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, AddStaticFeeComponent_div_5_div_34_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 7)(36, "div", 27)(37, "label", 18);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "ng-select", 28);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 27)(43, "label", 18);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementStart(46, "span", 19);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "input", 29);
    \u0275\u0275template(49, AddStaticFeeComponent_div_5_div_49_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 7)(51, "div", 30)(52, "label", 18);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 31);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275text(57, "                ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, AddStaticFeeComponent_div_5_div_58_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "hr", 32);
    \u0275\u0275elementStart(60, "h6", 15);
    \u0275\u0275element(61, "i", 33);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 7)(65, "div", 27)(66, "label", 18);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementStart(69, "span", 34);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "ng-select", 35);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275listener("change", function AddStaticFeeComponent_div_5_Template_ng_select_change_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onParentChange($event == null ? null : $event.id));
    });
    \u0275\u0275template(74, AddStaticFeeComponent_div_5_ng_template_74_Template, 6, 2, "ng-template", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 27)(76, "label", 18);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementStart(79, "span", 34);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "ng-select", 37);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275template(85, AddStaticFeeComponent_div_5_ng_template_85_Template, 4, 1, "ng-template", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 7)(87, "div", 22)(88, "label", 18);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "input", 38);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 22)(94, "label", 18);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 39);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275template(99, AddStaticFeeComponent_div_5_div_99_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 22)(101, "label", 18);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(104, "input", 40);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(106, "hr", 32);
    \u0275\u0275elementStart(107, "h6", 15);
    \u0275\u0275element(108, "i", 41);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 7)(112, "div", 22)(113, "label", 18);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementStart(116, "span", 19);
    \u0275\u0275text(117, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(118, "ng-select", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 22)(120, "label", 18);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementStart(123, "span", 19);
    \u0275\u0275text(124, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(125, "ng-select", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 22)(127, "label", 18);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 23);
    \u0275\u0275element(131, "input", 44);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275template(134, AddStaticFeeComponent_div_5_span_134_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "small", 34);
    \u0275\u0275text(136);
    \u0275\u0275pipe(137, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(138, AddStaticFeeComponent_div_5_div_138_Template, 6, 3, "div", 3);
    \u0275\u0275elementStart(139, "div", 7)(140, "div", 30)(141, "label", 18);
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "textarea", 46);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275text(146, "                ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(147, AddStaticFeeComponent_div_5_div_147_Template, 3, 1, "div", 47);
    \u0275\u0275elementStart(148, "div", 48)(149, "button", 49);
    \u0275\u0275listener("click", function AddStaticFeeComponent_div_5_Template_button_click_149_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(150, "i", 50);
    \u0275\u0275text(151);
    \u0275\u0275pipe(152, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "button", 51);
    \u0275\u0275template(154, AddStaticFeeComponent_div_5_span_154_Template, 1, 0, "span", 52)(155, AddStaticFeeComponent_div_5_i_155_Template, 1, 0, "i", 53);
    \u0275\u0275text(156);
    \u0275\u0275pipe(157, "translate");
    \u0275\u0275pipe(158, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(159, "div", 54)(160, "div", 9)(161, "div", 10)(162, "h5", 11);
    \u0275\u0275element(163, "i", 55);
    \u0275\u0275text(164);
    \u0275\u0275pipe(165, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "div", 13)(167, "div", 56)(168, "h6");
    \u0275\u0275element(169, "i", 57);
    \u0275\u0275text(170);
    \u0275\u0275pipe(171, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "p", 58);
    \u0275\u0275text(173);
    \u0275\u0275pipe(174, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "div", 56)(176, "h6");
    \u0275\u0275element(177, "i", 59);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "ul", 60)(181, "li");
    \u0275\u0275text(182);
    \u0275\u0275pipe(183, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "li");
    \u0275\u0275text(185);
    \u0275\u0275pipe(186, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "li");
    \u0275\u0275text(188);
    \u0275\u0275pipe(189, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(190, "div", 61)(191, "h6");
    \u0275\u0275element(192, "i", 62);
    \u0275\u0275text(193);
    \u0275\u0275pipe(194, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "p", 58);
    \u0275\u0275text(196);
    \u0275\u0275pipe(197, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_34_0;
    let tmp_35_0;
    let tmp_58_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 80, "STATIC_FEES_PAGE.FEE_DETAILS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.staticFeeForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 82, "STATIC_FEES_PAGE.BASIC_INFO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 84, "STATIC_FEES_PAGE.FEE_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 86, "STATIC_FEES_PAGE.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 88, "STATIC_FEES_PAGE.AMOUNT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("amount"));
    \u0275\u0275property("placeholder", "0.00");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("amount"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 90, "STATIC_FEES_PAGE.CATEGORY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.categories)("clearable", true)("placeholder", \u0275\u0275pipeBind1(41, 92, "STATIC_FEES_PAGE.SELECT_CATEGORY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 94, "STATIC_FEES_PAGE.FEE_DATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("feeDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("feeDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 96, "STATIC_FEES_PAGE.DESCRIPTION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 98, "STATIC_FEES_PAGE.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(63, 100, "STATIC_FEES_PAGE.PAYER_INFO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 102, "STATIC_FEES_PAGE.LINK_TO_PARENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(71, 104, "STATIC_FEES_PAGE.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.parents)("clearable", true)("placeholder", \u0275\u0275pipeBind1(73, 106, "STATIC_FEES_PAGE.SELECT_PARENT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 108, "STATIC_FEES_PAGE.LINK_TO_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(81, 110, "STATIC_FEES_PAGE.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.filteredChildren)("clearable", true)("loading", ctx_r1.loadingChildren)("disabled", !((tmp_34_0 = ctx_r1.staticFeeForm.get("parentId")) == null ? null : tmp_34_0.value))("placeholder", ((tmp_35_0 = ctx_r1.staticFeeForm.get("parentId")) == null ? null : tmp_35_0.value) ? \u0275\u0275pipeBind1(83, 112, "STATIC_FEES_PAGE.SELECT_CHILD") : \u0275\u0275pipeBind1(84, 114, "STATIC_FEES_PAGE.SELECT_PARENT_FIRST"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 116, "STATIC_FEES_PAGE.PAYER_NAME"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(92, 118, "STATIC_FEES_PAGE.PAYER_NAME_PLACEHOLDER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(96, 120, "STATIC_FEES_PAGE.PAYER_EMAIL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("payerEmail"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(98, 122, "STATIC_FEES_PAGE.PAYER_EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("payerEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 124, "STATIC_FEES_PAGE.PAYER_PHONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(105, 126, "STATIC_FEES_PAGE.PAYER_PHONE_PLACEHOLDER"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(110, 128, "STATIC_FEES_PAGE.PAYMENT_INFO"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(115, 130, "STATIC_FEES_PAGE.STATUS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.statusOptions)("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(122, 132, "STATIC_FEES_PAGE.PAYMENT_METHOD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.paymentMethods)("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(129, 134, "STATIC_FEES_PAGE.REFERENCE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx_r1.generatingRef ? \u0275\u0275pipeBind1(132, 136, "STATIC_FEES_PAGE.GENERATING") : \u0275\u0275pipeBind1(133, 138, "STATIC_FEES_PAGE.REFERENCE_PLACEHOLDER"))("readonly", ctx_r1.generatingRef);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.generatingRef);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 140, "STATIC_FEES_PAGE.REFERENCE_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_58_0 = ctx_r1.staticFeeForm.get("status")) == null ? null : tmp_58_0.value) === "Paid");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(143, 142, "STATIC_FEES_PAGE.NOTES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(145, 144, "STATIC_FEES_PAGE.NOTES_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(152, 146, "STATIC_FEES_PAGE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? \u0275\u0275pipeBind1(157, 148, "STATIC_FEES_PAGE.CREATING") : \u0275\u0275pipeBind1(158, 150, "STATIC_FEES_PAGE.CREATE_FEE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 152, "STATIC_FEES_PAGE.HELP_TITLE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(171, 154, "STATIC_FEES_PAGE.WHAT_IS_STATIC_FEE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(174, 156, "STATIC_FEES_PAGE.STATIC_FEE_EXPLANATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(179, 158, "STATIC_FEES_PAGE.PAYMENT_METHODS_TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(183, 160, "STATIC_FEES_PAGE.METHOD_CASH_DESC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(186, 162, "STATIC_FEES_PAGE.METHOD_CHECK_DESC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(189, 164, "STATIC_FEES_PAGE.METHOD_BANK_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(194, 166, "STATIC_FEES_PAGE.LINKING_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(197, 168, "STATIC_FEES_PAGE.LINKING_EXPLANATION"));
  }
}
var AddStaticFeeComponent = class _AddStaticFeeComponent {
  fb;
  staticFeesService;
  router;
  translateService;
  pageTitleService;
  http;
  breadcrumbs = [];
  actions = [];
  langChangeSub;
  staticFeeForm;
  submitting = false;
  loading = false;
  generatingRef = false;
  errorMessage = "";
  // Options for dropdowns
  parents = [];
  children = [];
  filteredChildren = [];
  loadingChildren = false;
  categories = [];
  paymentMethods = [];
  statusOptions = [];
  rawCategories = [];
  rawPaymentMethods = [];
  constructor(fb, staticFeesService, router, translateService, pageTitleService, http) {
    this.fb = fb;
    this.staticFeesService = staticFeesService;
    this.router = router;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
    this.http = http;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.ADD_STATIC_FEE"));
    this.initForm();
    this.generateReference();
    this.loadDropdownData();
    this.updateTranslatedContent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("STATIC_FEES_PAGE.ADD_STATIC_FEE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  initForm() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.staticFeeForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      description: ["", [Validators.maxLength(1e3)]],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      payerName: ["", [Validators.maxLength(200)]],
      payerEmail: ["", [Validators.email, Validators.maxLength(100)]],
      payerPhone: ["", [Validators.maxLength(50)]],
      parentId: [null],
      childId: [null],
      status: ["Pending", Validators.required],
      paymentMethod: ["Cash", Validators.required],
      referenceNumber: ["", [Validators.maxLength(100)]],
      feeDate: [today, Validators.required],
      paidDate: [null],
      notes: ["", [Validators.maxLength(1e3)]],
      category: ["Monthly"]
    });
    this.staticFeeForm.get("status")?.valueChanges.subscribe((status) => {
      const paidDateControl = this.staticFeeForm.get("paidDate");
      if (status === "Paid") {
        paidDateControl?.setValue(paidDateControl?.value || today);
      }
    });
  }
  loadDropdownData() {
    this.loading = true;
    this.staticFeesService.getCategories().subscribe({
      next: (cats) => {
        this.rawCategories = cats.includes("Monthly") ? cats : ["Monthly", ...cats];
        this.categories = this.rawCategories.map((cat) => this.toCategoryOption(cat));
      },
      error: () => {
        this.rawCategories = ["Monthly", "Tuition", "Supplies", "Events", "Meals", "Transportation", "Registration", "Late Pickup", "Other"];
        this.categories = this.defaultCategoryOptions();
      }
    });
    this.staticFeesService.getPaymentMethods().subscribe({
      next: (methods) => {
        this.rawPaymentMethods = methods;
        this.paymentMethods = this.rawPaymentMethods.map((m) => this.toPaymentMethodOption(m));
      },
      error: () => {
        this.rawPaymentMethods = ["Cash", "Check", "BankTransfer", "Other"];
        this.paymentMethods = this.defaultPaymentMethodOptions();
      }
    });
    this.http.get(`${ApiConfig.ENDPOINTS.PARENTS}`).subscribe({
      next: (list) => {
        this.parents = list.map((p) => ({
          id: p.id,
          fullName: `${p.firstName} ${p.lastName}`,
          email: p.email
        }));
      },
      error: () => this.parents = []
    });
    this.http.get(`${ApiConfig.ENDPOINTS.CHILDREN}`).subscribe({
      next: (list) => {
        this.children = list.map((c) => ({
          id: c.id,
          fullName: `${c.firstName} ${c.lastName}`
        }));
        this.loading = false;
      },
      error: () => {
        this.children = [];
        this.loading = false;
      }
    });
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("STATIC_FEES_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("STATIC_FEES_PAGE.TITLE"), url: "/static-fees" },
      { label: this.translateService.instant("STATIC_FEES_PAGE.ADD_STATIC_FEE") }
    ];
    this.actions = [
      {
        label: this.translateService.instant("STATIC_FEES_PAGE.BACK_TO_LIST"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.cancel()
      }
    ];
    this.statusOptions = [
      { value: "Pending", label: this.translateService.instant("STATIC_FEES_PAGE.PENDING") },
      { value: "Paid", label: this.translateService.instant("STATIC_FEES_PAGE.PAID") }
    ];
    if (this.rawCategories.length) {
      this.categories = this.rawCategories.map((cat) => this.toCategoryOption(cat));
    }
    if (this.rawPaymentMethods.length) {
      this.paymentMethods = this.rawPaymentMethods.map((m) => this.toPaymentMethodOption(m));
    }
  }
  toCategoryOption(category) {
    const keys = {
      "Monthly": "CATEGORY_MONTHLY",
      "Tuition": "CATEGORY_TUITION",
      "Supplies": "CATEGORY_SUPPLIES",
      "Events": "CATEGORY_EVENTS",
      "Meals": "CATEGORY_MEALS",
      "Transportation": "CATEGORY_TRANSPORTATION",
      "Registration": "CATEGORY_REGISTRATION",
      "Late Pickup": "CATEGORY_LATE_PICKUP",
      "Other": "CATEGORY_OTHER"
    };
    const key = keys[category];
    return { value: category, label: key ? this.translateService.instant(`STATIC_FEES_PAGE.${key}`) : category };
  }
  toPaymentMethodOption(method) {
    const keys = {
      "Cash": "METHOD_CASH",
      "Check": "METHOD_CHECK",
      "BankTransfer": "METHOD_BANK_TRANSFER",
      "Other": "METHOD_OTHER"
    };
    const key = keys[method];
    return { value: method, label: key ? this.translateService.instant(`STATIC_FEES_PAGE.${key}`) : method };
  }
  defaultCategoryOptions() {
    return ["Monthly", "Tuition", "Supplies", "Events", "Meals", "Transportation", "Registration", "Late Pickup", "Other"].map((cat) => this.toCategoryOption(cat));
  }
  defaultPaymentMethodOptions() {
    return ["Cash", "Check", "BankTransfer", "Other"].map((m) => this.toPaymentMethodOption(m));
  }
  cancel() {
    if (this.staticFeeForm.dirty) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("STATIC_FEES_PAGE.UNSAVED_CHANGES"),
        text: this.translateService.instant("STATIC_FEES_PAGE.UNSAVED_CHANGES_MESSAGE"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: this.translateService.instant("STATIC_FEES_PAGE.YES_LEAVE"),
        cancelButtonText: this.translateService.instant("STATIC_FEES_PAGE.NO_STAY")
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/static-fees"]);
        }
      });
    } else {
      this.router.navigate(["/static-fees"]);
    }
  }
  createStaticFee() {
    if (this.staticFeeForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.errorMessage = "";
    this.submitting = true;
    const formValue = this.staticFeeForm.value;
    const dto = {
      title: formValue.title.trim(),
      description: formValue.description?.trim() || void 0,
      amount: formValue.amount,
      payerName: formValue.payerName?.trim() || void 0,
      payerEmail: formValue.payerEmail?.trim() || void 0,
      payerPhone: formValue.payerPhone?.trim() || void 0,
      parentId: formValue.parentId || void 0,
      childId: formValue.childId || void 0,
      status: formValue.status,
      paymentMethod: formValue.paymentMethod,
      referenceNumber: formValue.referenceNumber?.trim() || void 0,
      feeDate: formValue.feeDate,
      paidDate: formValue.status === "Paid" ? formValue.paidDate : void 0,
      notes: formValue.notes?.trim() || void 0,
      category: formValue.category || void 0
    };
    this.staticFeesService.createStaticFee(dto).subscribe({
      next: () => {
        showSuccessToast(this.translateService.instant("STATIC_FEES_PAGE.SUCCESS"));
        this.router.navigate(["/static-fees"]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || this.translateService.instant("STATIC_FEES_PAGE.FAILED_TO_CREATE");
        this.submitting = false;
      }
    });
  }
  markFormGroupTouched() {
    Object.values(this.staticFeeForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.staticFeeForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.staticFeeForm.get(fieldName);
    if (field?.errors) {
      if (field.errors["required"]) {
        return this.translateService.instant("STATIC_FEES_PAGE.FIELD_REQUIRED");
      }
      if (field.errors["minlength"]) {
        return this.translateService.instant("STATIC_FEES_PAGE.MIN_LENGTH", { min: field.errors["minlength"].requiredLength });
      }
      if (field.errors["maxlength"]) {
        return this.translateService.instant("STATIC_FEES_PAGE.MAX_LENGTH", { max: field.errors["maxlength"].requiredLength });
      }
      if (field.errors["min"]) {
        return this.translateService.instant("STATIC_FEES_PAGE.MIN_AMOUNT");
      }
      if (field.errors["email"]) {
        return this.translateService.instant("STATIC_FEES_PAGE.INVALID_EMAIL");
      }
    }
    return "";
  }
  generateReference() {
    this.generatingRef = true;
    this.staticFeesService.generateReference().subscribe({
      next: (res) => {
        this.staticFeeForm.patchValue({ referenceNumber: res.reference });
        this.generatingRef = false;
      },
      error: () => {
        this.generatingRef = false;
      }
    });
  }
  onParentChange(parentId) {
    this.staticFeeForm.patchValue({ childId: null });
    this.filteredChildren = [];
    if (parentId) {
      const parent = this.parents.find((p) => p.id === parentId);
      if (parent) {
        this.staticFeeForm.patchValue({
          payerName: parent.fullName,
          payerEmail: parent.email || ""
        });
      }
      this.loadingChildren = true;
      this.http.get(`${ApiConfig.ENDPOINTS.CHILDREN}/ByParent/${parentId}`).subscribe({
        next: (list) => {
          this.filteredChildren = list.map((c) => ({
            id: c.id,
            fullName: `${c.firstName} ${c.lastName}`
          }));
          this.loadingChildren = false;
        },
        error: () => {
          this.filteredChildren = [];
          this.loadingChildren = false;
        }
      });
    }
  }
  static \u0275fac = function AddStaticFeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddStaticFeeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StaticFeesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddStaticFeeComponent, selectors: [["app-add-static-fee"]], decls: 6, vars: 11, consts: [[1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row"], [1, "col-lg-8"], [1, "card", "card-general"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-cash-coin", "me-2"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "section-title", "mb-3"], [1, "bi", "bi-info-circle", "me-2"], [1, "col-md-8", "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-4", "mb-3"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "formControlName", "amount", "step", "0.01", "min", "0", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-md-6", "mb-3"], ["formControlName", "category", "bindLabel", "label", "bindValue", "value", 3, "items", "clearable", "placeholder"], ["type", "date", "formControlName", "feeDate", 1, "form-control"], [1, "col-12", "mb-3"], ["formControlName", "description", "rows", "2", 1, "form-control", 3, "placeholder"], [1, "my-4"], [1, "bi", "bi-person", "me-2"], [1, "text-muted"], ["formControlName", "parentId", "bindLabel", "fullName", "bindValue", "id", 3, "change", "items", "clearable", "placeholder"], ["ng-option-tmp", ""], ["formControlName", "childId", "bindLabel", "fullName", "bindValue", "id", 3, "items", "clearable", "loading", "disabled", "placeholder"], ["type", "text", "formControlName", "payerName", 1, "form-control", 3, "placeholder"], ["type", "email", "formControlName", "payerEmail", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "payerPhone", 1, "form-control", 3, "placeholder"], [1, "bi", "bi-credit-card", "me-2"], ["formControlName", "status", "bindLabel", "label", "bindValue", "value", 3, "items", "clearable", "searchable"], ["formControlName", "paymentMethod", "bindLabel", "label", "bindValue", "value", 3, "items", "clearable", "searchable"], ["type", "text", "formControlName", "referenceNumber", 1, "form-control", 3, "placeholder", "readonly"], ["class", "input-group-text", 4, "ngIf"], ["formControlName", "notes", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "alert alert-danger mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-x-lg", "me-2"], ["type", "submit", 1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-lg me-2", 4, "ngIf"], [1, "col-lg-4"], [1, "bi", "bi-lightbulb", "me-2"], [1, "help-item", "mb-3"], [1, "bi", "bi-question-circle", "me-2", "text-primary"], [1, "text-muted", "small", "mb-0"], [1, "bi", "bi-cash-stack", "me-2", "text-success"], [1, "text-muted", "small", "mb-0", "ps-3"], [1, "help-item"], [1, "bi", "bi-link-45deg", "me-2", "text-info"], [1, "invalid-feedback"], [1, "invalid-feedback", "d-block"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-fill", "me-2"], ["class", "text-muted d-block", 4, "ngIf"], [1, "text-muted", "d-block"], [1, "spinner-border", "spinner-border-sm", "text-secondary"], ["type", "date", "formControlName", "paidDate", 1, "form-control"], [1, "alert", "alert-danger", "mb-3"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-2"]], template: function AddStaticFeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, AddStaticFeeComponent_div_4_Template, 5, 3, "div", 2)(5, AddStaticFeeComponent_div_5_Template, 198, 170, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 7, "STATIC_FEES_PAGE.ADD_STATIC_FEE"))("subtitle", \u0275\u0275pipeBind1(3, 9, "STATIC_FEES_PAGE.ADD_SUBTITLE"))("icon", "bi bi-plus-circle")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.actions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, TranslatePipe], styles: ["\n\n.card-general[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control[_ngcontent-%COMP%], \n.ng-select[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.ng-select[_ngcontent-%COMP%]:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-color: #ced4da;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #6bc4b0;\n  border-color: #6bc4b0;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #a8e0d3;\n  border-color: #a8e0d3;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option {\n  padding: 8px 12px;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select[_ngcontent-%COMP%]     .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n.help-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.help-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.help-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n@media (max-width: 991px) {\n  .col-lg-4[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=add-static-fee.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddStaticFeeComponent, [{
    type: Component,
    args: [{ selector: "app-add-static-fee", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'STATIC_FEES_PAGE.ADD_STATIC_FEE' | translate"\r
    [subtitle]="'STATIC_FEES_PAGE.ADD_SUBTITLE' | translate"\r
    [icon]="'bi bi-plus-circle'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="actions">\r
  </app-title-page>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ 'STATIC_FEES_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!loading" class="row">\r
    <div class="col-lg-8">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-cash-coin me-2"></i>\r
            {{ 'STATIC_FEES_PAGE.FEE_DETAILS' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="staticFeeForm" (ngSubmit)="createStaticFee()">\r
            <!-- Basic Info Section -->\r
            <h6 class="section-title mb-3">\r
              <i class="bi bi-info-circle me-2"></i>{{ 'STATIC_FEES_PAGE.BASIC_INFO' | translate }}\r
            </h6>\r
\r
            <div class="row">\r
              <!-- Title -->\r
              <div class="col-md-8 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.FEE_TITLE' | translate }}\r
                  <span class="text-danger">*</span>\r
                </label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  formControlName="title"\r
                  [placeholder]="'STATIC_FEES_PAGE.TITLE_PLACEHOLDER' | translate"\r
                  [class.is-invalid]="isFieldInvalid('title')">\r
                <div class="invalid-feedback" *ngIf="isFieldInvalid('title')">\r
                  {{ getFieldError('title') }}\r
                </div>\r
              </div>\r
\r
              <!-- Amount -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.AMOUNT' | translate }}\r
                  <span class="text-danger">*</span>\r
                </label>\r
                <div class="input-group">\r
                  <span class="input-group-text">$</span>\r
                  <input\r
                    type="number"\r
                    class="form-control"\r
                    formControlName="amount"\r
                    step="0.01"\r
                    min="0"\r
                    [placeholder]="'0.00'"\r
                    [class.is-invalid]="isFieldInvalid('amount')">\r
                </div>\r
                <div class="invalid-feedback d-block" *ngIf="isFieldInvalid('amount')">\r
                  {{ getFieldError('amount') }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <!-- Category -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.CATEGORY' | translate }}\r
                </label>\r
                <ng-select\r
                  formControlName="category"\r
                  [items]="categories"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [clearable]="true"\r
                  [placeholder]="'STATIC_FEES_PAGE.SELECT_CATEGORY' | translate">\r
                </ng-select>\r
              </div>\r
\r
              <!-- Fee Date -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.FEE_DATE' | translate }}\r
                  <span class="text-danger">*</span>\r
                </label>\r
                <input\r
                  type="date"\r
                  class="form-control"\r
                  formControlName="feeDate"\r
                  [class.is-invalid]="isFieldInvalid('feeDate')">\r
                <div class="invalid-feedback" *ngIf="isFieldInvalid('feeDate')">\r
                  {{ getFieldError('feeDate') }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <!-- Description -->\r
              <div class="col-12 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.DESCRIPTION' | translate }}\r
                </label>\r
                <textarea\r
                  class="form-control"\r
                  formControlName="description"\r
                  rows="2"\r
                  [placeholder]="'STATIC_FEES_PAGE.DESCRIPTION_PLACEHOLDER' | translate"\r
                  [class.is-invalid]="isFieldInvalid('description')">\r
                </textarea>\r
                <div class="invalid-feedback" *ngIf="isFieldInvalid('description')">\r
                  {{ getFieldError('description') }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Payer Info Section -->\r
            <hr class="my-4">\r
            <h6 class="section-title mb-3">\r
              <i class="bi bi-person me-2"></i>{{ 'STATIC_FEES_PAGE.PAYER_INFO' | translate }}\r
            </h6>\r
\r
            <div class="row">\r
              <!-- Link to Parent -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.LINK_TO_PARENT' | translate }}\r
                  <span class="text-muted">({{ 'STATIC_FEES_PAGE.OPTIONAL' | translate }})</span>\r
                </label>\r
                <ng-select\r
                  formControlName="parentId"\r
                  [items]="parents"\r
                  bindLabel="fullName"\r
                  bindValue="id"\r
                  [clearable]="true"\r
                  [placeholder]="'STATIC_FEES_PAGE.SELECT_PARENT' | translate"\r
                  (change)="onParentChange($event?.id)">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="d-flex align-items-center">\r
                      <i class="bi bi-person-fill me-2"></i>\r
                      <div>\r
                        <span>{{ item.fullName }}</span>\r
                        <small *ngIf="item.email" class="text-muted d-block">{{ item.email }}</small>\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
\r
              <!-- Link to Child -->\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.LINK_TO_CHILD' | translate }}\r
                  <span class="text-muted">({{ 'STATIC_FEES_PAGE.OPTIONAL' | translate }})</span>\r
                </label>\r
                <ng-select\r
                  formControlName="childId"\r
                  [items]="filteredChildren"\r
                  bindLabel="fullName"\r
                  bindValue="id"\r
                  [clearable]="true"\r
                  [loading]="loadingChildren"\r
                  [disabled]="!staticFeeForm.get('parentId')?.value"\r
                  [placeholder]="staticFeeForm.get('parentId')?.value ? ('STATIC_FEES_PAGE.SELECT_CHILD' | translate) : ('STATIC_FEES_PAGE.SELECT_PARENT_FIRST' | translate)">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="d-flex align-items-center">\r
                      <i class="bi bi-person-fill me-2"></i>\r
                      <span>{{ item.fullName }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <!-- Payer Name -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.PAYER_NAME' | translate }}\r
                </label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  formControlName="payerName"\r
                  [placeholder]="'STATIC_FEES_PAGE.PAYER_NAME_PLACEHOLDER' | translate">\r
              </div>\r
\r
              <!-- Payer Email -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.PAYER_EMAIL' | translate }}\r
                </label>\r
                <input\r
                  type="email"\r
                  class="form-control"\r
                  formControlName="payerEmail"\r
                  [placeholder]="'STATIC_FEES_PAGE.PAYER_EMAIL_PLACEHOLDER' | translate"\r
                  [class.is-invalid]="isFieldInvalid('payerEmail')">\r
                <div class="invalid-feedback" *ngIf="isFieldInvalid('payerEmail')">\r
                  {{ getFieldError('payerEmail') }}\r
                </div>\r
              </div>\r
\r
              <!-- Payer Phone -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.PAYER_PHONE' | translate }}\r
                </label>\r
                <input\r
                  type="tel"\r
                  class="form-control"\r
                  formControlName="payerPhone"\r
                  [placeholder]="'STATIC_FEES_PAGE.PAYER_PHONE_PLACEHOLDER' | translate">\r
              </div>\r
            </div>\r
\r
            <!-- Payment Info Section -->\r
            <hr class="my-4">\r
            <h6 class="section-title mb-3">\r
              <i class="bi bi-credit-card me-2"></i>{{ 'STATIC_FEES_PAGE.PAYMENT_INFO' | translate }}\r
            </h6>\r
\r
            <div class="row">\r
              <!-- Status -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.STATUS' | translate }}\r
                  <span class="text-danger">*</span>\r
                </label>\r
                <ng-select\r
                  formControlName="status"\r
                  [items]="statusOptions"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [clearable]="false"\r
                  [searchable]="false">\r
                </ng-select>\r
              </div>\r
\r
              <!-- Payment Method -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.PAYMENT_METHOD' | translate }}\r
                  <span class="text-danger">*</span>\r
                </label>\r
                <ng-select\r
                  formControlName="paymentMethod"\r
                  [items]="paymentMethods"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [clearable]="false"\r
                  [searchable]="false">\r
                </ng-select>\r
              </div>\r
\r
              <!-- Reference Number -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.REFERENCE_NUMBER' | translate }}\r
                </label>\r
                <div class="input-group">\r
                  <input\r
                    type="text"\r
                    class="form-control"\r
                    formControlName="referenceNumber"\r
                    [placeholder]="generatingRef ? ('STATIC_FEES_PAGE.GENERATING' | translate) : ('STATIC_FEES_PAGE.REFERENCE_PLACEHOLDER' | translate)"\r
                    [readonly]="generatingRef">\r
                  <span *ngIf="generatingRef" class="input-group-text">\r
                    <span class="spinner-border spinner-border-sm text-secondary"></span>\r
                  </span>\r
                </div>\r
                <small class="text-muted">{{ 'STATIC_FEES_PAGE.REFERENCE_HINT' | translate }}</small>\r
              </div>\r
            </div>\r
\r
            <div class="row" *ngIf="staticFeeForm.get('status')?.value === 'Paid'">\r
              <!-- Paid Date -->\r
              <div class="col-md-4 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.PAID_DATE' | translate }}\r
                </label>\r
                <input\r
                  type="date"\r
                  class="form-control"\r
                  formControlName="paidDate">\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <!-- Notes -->\r
              <div class="col-12 mb-3">\r
                <label class="form-label">\r
                  {{ 'STATIC_FEES_PAGE.NOTES' | translate }}\r
                </label>\r
                <textarea\r
                  class="form-control"\r
                  formControlName="notes"\r
                  rows="3"\r
                  [placeholder]="'STATIC_FEES_PAGE.NOTES_PLACEHOLDER' | translate">\r
                </textarea>\r
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
                <i class="bi bi-x-lg me-2"></i>{{ 'STATIC_FEES_PAGE.CANCEL' | translate }}\r
              </button>\r
              <button type="submit" class="action-btn custom-btn-2 btn-add-global-2" [disabled]="submitting">\r
                <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>\r
                <i *ngIf="!submitting" class="bi bi-check-lg me-2"></i>\r
                {{ submitting ? ('STATIC_FEES_PAGE.CREATING' | translate) : ('STATIC_FEES_PAGE.CREATE_FEE' | translate) }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Help Sidebar -->\r
    <div class="col-lg-4">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5 class="mb-0">\r
            <i class="bi bi-lightbulb me-2"></i>\r
            {{ 'STATIC_FEES_PAGE.HELP_TITLE' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="help-item mb-3">\r
            <h6><i class="bi bi-question-circle me-2 text-primary"></i>{{ 'STATIC_FEES_PAGE.WHAT_IS_STATIC_FEE' | translate }}</h6>\r
            <p class="text-muted small mb-0">{{ 'STATIC_FEES_PAGE.STATIC_FEE_EXPLANATION' | translate }}</p>\r
          </div>\r
          <div class="help-item mb-3">\r
            <h6><i class="bi bi-cash-stack me-2 text-success"></i>{{ 'STATIC_FEES_PAGE.PAYMENT_METHODS_TITLE' | translate }}</h6>\r
            <ul class="text-muted small mb-0 ps-3">\r
              <li>{{ 'STATIC_FEES_PAGE.METHOD_CASH_DESC' | translate }}</li>\r
              <li>{{ 'STATIC_FEES_PAGE.METHOD_CHECK_DESC' | translate }}</li>\r
              <li>{{ 'STATIC_FEES_PAGE.METHOD_BANK_DESC' | translate }}</li>\r
            </ul>\r
          </div>\r
          <div class="help-item">\r
            <h6><i class="bi bi-link-45deg me-2 text-info"></i>{{ 'STATIC_FEES_PAGE.LINKING_TITLE' | translate }}</h6>\r
            <p class="text-muted small mb-0">{{ 'STATIC_FEES_PAGE.LINKING_EXPLANATION' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/static-fees/add-static-fee/add-static-fee.scss */\n.card-general {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.card-general .card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.card-general .card-header h5 {\n  font-weight: 600;\n  color: #333;\n}\n.section-title {\n  font-weight: 600;\n  color: #495057;\n  font-size: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label .text-muted {\n  font-weight: 400;\n  font-size: 0.85rem;\n}\n.form-control,\n.ng-select {\n  border-radius: 6px;\n}\n.form-control:focus,\n.ng-select:focus {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n.input-group-text {\n  background-color: #f8f9fa;\n  border-color: #ced4da;\n}\n.btn-primary {\n  background-color: #7dd3c0;\n  border-color: #7dd3c0;\n}\n.btn-primary:hover {\n  background-color: #6bc4b0;\n  border-color: #6bc4b0;\n}\n.btn-primary:disabled {\n  background-color: #a8e0d3;\n  border-color: #a8e0d3;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.invalid-feedback {\n  font-size: 0.85rem;\n}\n.ng-select ::ng-deep .ng-select-container {\n  border-radius: 6px;\n  min-height: 38px;\n}\n.ng-select ::ng-deep .ng-dropdown-panel {\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.ng-select ::ng-deep .ng-option {\n  padding: 8px 12px;\n}\n.ng-select ::ng-deep .ng-option.ng-option-selected {\n  background-color: #e7f7f4;\n}\n.ng-select ::ng-deep .ng-option.ng-option-marked {\n  background-color: #f0faf8;\n}\n.help-item h6 {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.help-item p,\n.help-item ul {\n  line-height: 1.5;\n}\n@media (max-width: 991px) {\n  .col-lg-4 {\n    margin-top: 1.5rem;\n  }\n}\n/*# sourceMappingURL=add-static-fee.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: StaticFeesService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddStaticFeeComponent, { className: "AddStaticFeeComponent", filePath: "src/app/features/static-fees/add-static-fee/add-static-fee.ts", lineNumber: 39 });
})();
export {
  AddStaticFeeComponent
};
//# sourceMappingURL=chunk-ITX6OBF7.js.map
