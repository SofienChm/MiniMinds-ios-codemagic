import {
  ParentChildHeaderComponent
} from "./chunk-FEEGDPUH.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  FeeService
} from "./chunk-4QI4UUMP.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
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
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
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
  DatePipe,
  Location,
  NgForOf,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/parent/parent-detail/parent-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3];
var _c2 = () => [1, 2];
var _c3 = (a0) => [a0];
var _c4 = (a0) => ({ label: a0, url: "/parents" });
var _c5 = (a0) => ({ label: a0 });
var _c6 = (a0, a1) => [a0, a1];
function ParentDetail_div_0_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "app-skeleton", 20)(2, "app-skeleton", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "30%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "55%");
  }
}
function ParentDetail_div_0_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "app-skeleton", 20)(2, "app-skeleton", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "30%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "50%");
  }
}
function ParentDetail_div_0_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "app-skeleton", 20)(2, "app-skeleton", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "30%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "60%");
  }
}
function ParentDetail_div_0_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275element(2, "app-skeleton", 14);
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275element(4, "app-skeleton", 18)(5, "app-skeleton", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-skeleton", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 48)("width", "48px")("circle", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 18)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "40%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 20)("width", "20px");
  }
}
function ParentDetail_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "app-skeleton", 13)(4, "app-skeleton", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16);
    \u0275\u0275element(7, "app-skeleton", 17)(8, "app-skeleton", 18)(9, "app-skeleton", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275element(11, "app-skeleton", 20)(12, "app-skeleton", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 21)(14, "div", 22)(15, "div", 23);
    \u0275\u0275element(16, "app-skeleton", 24)(17, "app-skeleton", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ParentDetail_div_0_div_1_div_18_Template, 3, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22)(20, "div", 23);
    \u0275\u0275element(21, "app-skeleton", 24)(22, "app-skeleton", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ParentDetail_div_0_div_1_div_23_Template, 3, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23);
    \u0275\u0275element(26, "app-skeleton", 24)(27, "app-skeleton", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ParentDetail_div_0_div_1_div_28_Template, 3, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 27);
    \u0275\u0275element(30, "app-skeleton", 28);
    \u0275\u0275template(31, ParentDetail_div_0_div_1_div_31_Template, 7, 9, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 24)("width", "150px");
    \u0275\u0275advance();
    \u0275\u0275property("height", 32)("width", "32px")("circle", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 112)("width", "112px")("circle", true);
    \u0275\u0275advance();
    \u0275\u0275property("height", 28)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "40%");
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 14)("width", "35%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "45%");
    \u0275\u0275advance(4);
    \u0275\u0275property("height", 40)("width", "40px")("circle", true);
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "180px");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(37, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 40)("width", "40px")("circle", true);
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "160px");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(38, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 40)("width", "40px")("circle", true);
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "120px");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(39, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 24)("width", "120px");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(40, _c2));
  }
}
function ParentDetail_div_0_div_2_div_96_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(child_r4.dateOfBirth).years, " ", \u0275\u0275pipeBind1(2, 2, "PARENTS.YEARS_OLD"), " ");
  }
}
function ParentDetail_div_0_div_2_div_96_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(child_r4.dateOfBirth).months, " ", \u0275\u0275pipeBind1(2, 2, "PARENTS.MONTHS_OLD"), " ");
  }
}
function ParentDetail_div_0_div_2_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275listener("click", function ParentDetail_div_0_div_2_div_96_Template_div_click_1_listener() {
      const child_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewChildDetails(child_r4.id));
    });
    \u0275\u0275elementStart(2, "div", 52);
    \u0275\u0275element(3, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54)(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ParentDetail_div_0_div_2_div_96_Conditional_7_Template, 3, 4, "div", 39);
    \u0275\u0275conditionalCreate(8, ParentDetail_div_0_div_2_div_96_Conditional_8_Template, 3, 4, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275element(10, "i", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(child_r4) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r4.firstName, " ", child_r4.lastName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(child_r4.dateOfBirth).years > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(child_r4.dateOfBirth).years <= 0 ? 8 : -1);
  }
}
function ParentDetail_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "app-parent-child-header", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBack", function ParentDetail_div_0_div_2_Template_app_parent_child_header_onBack_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    })("onEdit", function ParentDetail_div_0_div_2_Template_app_parent_child_header_onEdit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editParent());
    });
    \u0275\u0275elementStart(3, "div", 35)(4, "span", 36)(5, "i", 37);
    \u0275\u0275listener("click", function ParentDetail_div_0_div_2_Template_i_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 21)(16, "div", 22)(17, "div", 40)(18, "div", 41);
    \u0275\u0275element(19, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h5");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 43)(24, "div", 44);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 45);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 43)(30, "div", 44);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 45);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 43)(36, "div", 44);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 45);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 43)(42, "div", 44);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 45);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 22)(48, "div", 40)(49, "div", 41);
    \u0275\u0275element(50, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h5");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 43)(55, "div", 44);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 45);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 43)(61, "div", 44);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 45);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 43)(67, "div", 44);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 45);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 22)(74, "div", 40)(75, "div", 41);
    \u0275\u0275element(76, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "h5");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 43)(81, "div", 44);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 45);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 43)(87, "div", 44);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 45);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 27)(93, "h5", 48);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, ParentDetail_div_0_div_2_div_96_Template, 11, 5, "div", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 32, "PARENTS.PARENT_PROFILE"))("children", \u0275\u0275pureFunction1(74, _c3, ctx_r1.parent))("currentChildIndex", 0)("hasCustomContent", true)("showEdit", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 34, "PARENTS.LOGOUT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 36, "PARENTS.REGISTRATION_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 38, ctx_r1.parent.createdAt, "yy/MM/dd", "", ctx_r1.currentLocale));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 43, "PARENTS.PERSONAL_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 45, "PARENTS.FULL_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.parent.firstName, " ", ctx_r1.parent.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 47, "PARENTS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 49, "PARENTS.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.phoneNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 51, "PARENTS.RELATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translateParentType(ctx_r1.parent.parentType));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 53, "PARENTS.OTHER_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 55, "PARENTS.WORK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.work);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 57, "PARENTS.EMERGENCY_CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.emergencyContact);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 59, "PARENTS.BIRTHDAY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(72, 61, ctx_r1.parent.dateOfBirth, "yy/MM/dd", "", ctx_r1.currentLocale));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 66, "PARENTS.ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 68, "PARENTS.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.address);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 70, "PARENTS.ZIP_CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.zipCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 72, "PARENTS.CHILDREN_INFO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.parent.children);
  }
}
function ParentDetail_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ParentDetail_div_0_div_1_Template, 32, 41, "div", 9)(2, ParentDetail_div_0_div_2_Template, 97, 76, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parent && !ctx_r1.loading);
  }
}
function ParentDetail_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 57);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 3, "PARENTS.PARENT_DETAILS"))("breadcrumbs", \u0275\u0275pureFunction2(13, _c6, \u0275\u0275pureFunction1(9, _c4, \u0275\u0275pipeBind1(2, 5, "PARENTS.TITLE")), \u0275\u0275pureFunction1(11, _c5, \u0275\u0275pipeBind1(3, 7, "PARENTS.DETAILS"))))("actions", ctx_r1.getActions());
  }
}
function ParentDetail_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "span", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function ParentDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function ParentDetail_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "PARENTS.ACTIVE"));
  }
}
function ParentDetail_div_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "PARENTS.INACTIVE"));
  }
}
function ParentDetail_div_5_div_59_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 79);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PARENTS.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.address || \u0275\u0275pipeBind1(6, 4, "COMMON.NA"));
  }
}
function ParentDetail_div_5_div_59_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 79);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "PARENTS.ZIP_CODE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.zipCode || \u0275\u0275pipeBind1(6, 4, "COMMON.NA"));
  }
}
function ParentDetail_div_5_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "h6", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 77);
    \u0275\u0275template(5, ParentDetail_div_5_div_59_div_5_Template, 7, 6, "div", 1)(6, ParentDetail_div_5_div_59_div_6_Template, 7, 6, "div", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PARENTS.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.parent.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parent.zipCode);
  }
}
function ParentDetail_div_5_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "PARENTS.NO_CHILDREN_YET"));
  }
}
function ParentDetail_div_5_ng_container_72_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(ctx_r1.currentChild.dateOfBirth).years, " ", \u0275\u0275pipeBind1(1, 2, "PARENTS.YEARS_OLD"), " ");
  }
}
function ParentDetail_div_5_ng_container_72_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(ctx_r1.currentChild.dateOfBirth).months, " ", \u0275\u0275pipeBind1(1, 2, "PARENTS.MONTHS_OLD"), " ");
  }
}
function ParentDetail_div_5_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 112)(2, "div", 113)(3, "div", 114)(4, "div", 115)(5, "div", 67);
    \u0275\u0275element(6, "img", 116);
    \u0275\u0275elementStart(7, "span", 117);
    \u0275\u0275conditionalCreate(8, ParentDetail_div_5_ng_container_72_Conditional_8_Template, 2, 4);
    \u0275\u0275conditionalCreate(9, ParentDetail_div_5_ng_container_72_Conditional_9_Template, 2, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 71)(11, "h5", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 87)(14, "h5", 118);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dl", 119)(18, "dt", 120);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd", 121);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dt", 120);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd", 121);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dt", 120);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "dd", 121);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dt", 120);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd", 121);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dt", 120);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "dd", 121);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "dt", 122);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "dd", 123);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(ctx_r1.currentChild) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.calculateAge(ctx_r1.currentChild.dateOfBirth).years > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(ctx_r1.currentChild.dateOfBirth).years <= 0 ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentChild == null ? null : ctx_r1.currentChild.firstName, " ", ctx_r1.currentChild == null ? null : ctx_r1.currentChild.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 18, "PARENTS.BASIC_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 20, "PARENTS.DATE_OF_BIRTH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.dateOfBirth));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 22, "PARENTS.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translateGender(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.gender));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "PARENTS.ALLERGIES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.allergies == null ? null : ctx_r1.currentChild.allergies.length) ?? 0) > 1 ? ctx_r1.currentChild == null ? null : ctx_r1.currentChild.allergies : \u0275\u0275pipeBind1(33, 26, "PARENTS.NOTHING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 28, "PARENTS.MEDICAL_NOTE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.medicalNotes == null ? null : ctx_r1.currentChild.medicalNotes.length) ?? 0) > 1 ? ctx_r1.currentChild == null ? null : ctx_r1.currentChild.medicalNotes : \u0275\u0275pipeBind1(39, 30, "PARENTS.NOTHING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 32, "PARENTS.EMERGENCY_CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.emergencyContact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 34, "PARENTS.REGISTRATION_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.parent.createdAt));
  }
}
function ParentDetail_div_5_ng_template_73_div_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(child_r6.dateOfBirth).years, " ", \u0275\u0275pipeBind1(1, 2, "PARENTS.YEARS_OLD"), " ");
  }
}
function ParentDetail_div_5_ng_template_73_div_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.calculateAge(child_r6.dateOfBirth).months, " ", \u0275\u0275pipeBind1(1, 2, "PARENTS.MONTHS_OLD"), " ");
  }
}
function ParentDetail_div_5_ng_template_73_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 114)(3, "div", 115)(4, "div", 67);
    \u0275\u0275element(5, "img", 116);
    \u0275\u0275elementStart(6, "span", 117);
    \u0275\u0275conditionalCreate(7, ParentDetail_div_5_ng_template_73_div_0_Conditional_7_Template, 2, 4);
    \u0275\u0275conditionalCreate(8, ParentDetail_div_5_ng_template_73_div_0_Conditional_8_Template, 2, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 71)(10, "h5", 72);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 87)(13, "h5", 118);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dl", 119)(17, "dt", 120);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 121);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt", 120);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd", 121);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dt", 120);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd", 121);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dt", 120);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd", 121);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dt", 120);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "dd", 121);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "dt", 122);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "dd", 123);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(child_r6) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.calculateAge(child_r6.dateOfBirth).years > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(child_r6.dateOfBirth).years <= 0 ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r6.firstName, " ", child_r6.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "PARENTS.BASIC_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "PARENTS.DATE_OF_BIRTH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(child_r6.dateOfBirth));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "PARENTS.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translateGender(child_r6.gender));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 24, "PARENTS.ALLERGIES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((child_r6.allergies == null ? null : child_r6.allergies.length) ?? 0) > 1 ? child_r6.allergies : \u0275\u0275pipeBind1(32, 26, "PARENTS.NOTHING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 28, "PARENTS.MEDICAL_NOTE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((child_r6.medicalNotes == null ? null : child_r6.medicalNotes.length) ?? 0) > 1 ? child_r6.medicalNotes : \u0275\u0275pipeBind1(38, 30, "PARENTS.NOTHING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 32, "PARENTS.EMERGENCY_CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.emergencyContact);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 34, "PARENTS.REGISTRATION_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.parent.createdAt));
  }
}
function ParentDetail_div_5_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParentDetail_div_5_ng_template_73_div_0_Template, 49, 36, "div", 124);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.parent.children);
  }
}
function ParentDetail_div_5_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 125)(2, "button", 126);
    \u0275\u0275listener("click", function ParentDetail_div_5_ng_container_78_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevChild());
    });
    \u0275\u0275element(3, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 129);
    \u0275\u0275listener("click", function ParentDetail_div_5_ng_container_78_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextChild());
    });
    \u0275\u0275element(7, "i", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.currentChildIndex + 1, " / ", ctx_r1.parent.children.length);
  }
}
function ParentDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "div", 65)(4, "div", 66)(5, "div", 67);
    \u0275\u0275element(6, "img", 68);
    \u0275\u0275template(7, ParentDetail_div_5_span_7_Template, 4, 3, "span", 69)(8, ParentDetail_div_5_span_8_Template, 4, 3, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 71)(10, "h5", 72);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 73);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 74)(16, "div", 75)(17, "h6", 76);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 77)(21, "dt", 78);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd", 79);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt", 78);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "dd", 79);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dt", 78);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd", 79);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dt", 78);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "dd", 79);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 75)(45, "h6", 76);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 77)(49, "dt", 78);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "dd", 79);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "dt", 78);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "dd", 79);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(59, ParentDetail_div_5_div_59_Template, 7, 5, "div", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 81)(61, "div", 82)(62, "div", 83)(63, "h5", 84);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 85);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addChild());
    });
    \u0275\u0275element(67, "i", 86);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 87);
    \u0275\u0275template(71, ParentDetail_div_5_div_71_Template, 4, 3, "div", 88)(72, ParentDetail_div_5_ng_container_72_Template, 50, 36, "ng-container", 89)(73, ParentDetail_div_5_ng_template_73_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 90)(76, "div", 91)(77, "div", 92);
    \u0275\u0275template(78, ParentDetail_div_5_ng_container_78_Template, 8, 2, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 93)(80, "button", 94);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeChildFromParent(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id, ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.firstName) || "") + " " + ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.lastName) || "")));
    });
    \u0275\u0275element(81, "i", 95);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 96);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addFeeForChild(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id, ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.firstName) || "") + " " + ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.lastName) || "")));
    });
    \u0275\u0275element(85, "i", 97);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 98);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewChildDetails(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id));
    });
    \u0275\u0275element(89, "i", 99);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 100)(93, "button", 101);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeChildFromParent(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id, ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.firstName) || "") + " " + ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.lastName) || "")));
    });
    \u0275\u0275element(94, "i", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 103);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addFeeForChild(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id, ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.firstName) || "") + " " + ((ctx_r1.currentChild == null ? null : ctx_r1.currentChild.lastName) || "")));
    });
    \u0275\u0275element(96, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 105);
    \u0275\u0275listener("click", function ParentDetail_div_5_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewChildDetails(ctx_r1.currentChild == null ? null : ctx_r1.currentChild.id));
    });
    \u0275\u0275element(98, "i", 106);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const singleChildren_r8 = \u0275\u0275reference(74);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(ctx_r1.parent) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parent.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.parent.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.parent.firstName, " ", ctx_r1.parent.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 31, "PARENTS.PARENT_LABEL"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 33, "PARENTS.BASIC_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 35, "PARENTS.FULL_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.parent.firstName, " ", ctx_r1.parent.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 37, "PARENTS.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.gender ? ctx_r1.translateGender(ctx_r1.parent.gender) : \u0275\u0275pipeBind1(31, 39, "COMMON.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 41, "PARENTS.DATE_OF_BIRTH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.dateOfBirth ? \u0275\u0275pipeBind4(37, 43, ctx_r1.parent.dateOfBirth, "yy/MM/dd", "", ctx_r1.currentLocale) : \u0275\u0275pipeBind1(38, 48, "COMMON.NA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 50, "PARENTS.REGISTRATION_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.parent.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 52, "PARENTS.CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 54, "PARENTS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 56, "PARENTS.PHONE_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parent.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parent.address || ctx_r1.parent.zipCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 58, "PARENTS.CHILDREN_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(69, 60, "PARENTS.ADD_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.parent.children || ctx_r1.parent.children.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.parent.children && ctx_r1.parent.children.length > 1)("ngIfElse", singleChildren_r8);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.parent.children && ctx_r1.parent.children.length > 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 62, "PARENTS.REMOVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 64, "PARENTS.ADD_FEES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 66, "PARENTS.VIEW_DETAILS"), " ");
  }
}
function ParentDetail_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "PARENTS.NO_AVAILABLE_CHILDREN"));
  }
}
function ParentDetail_div_6_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 143);
    \u0275\u0275listener("click", function ParentDetail_div_6_button_14_Template_button_click_0_listener() {
      const child_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.linkChildToParent(child_r11.id));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275element(2, "img", 144);
    \u0275\u0275elementStart(3, "div", 33)(4, "h6", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 145);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.linkingChild);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(child_r11) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r11.firstName, " ", child_r11.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", \u0275\u0275pipeBind1(8, 8, "PARENTS.DOB"), ": ", ctx_r1.formatDate(child_r11.dateOfBirth), " | ", \u0275\u0275pipeBind1(9, 10, "PARENTS.GENDER"), ": ", ctx_r1.translateGender(child_r11.gender));
  }
}
function ParentDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function ParentDetail_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSelectChildModal());
    });
    \u0275\u0275elementStart(1, "div", 131);
    \u0275\u0275listener("click", function ParentDetail_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 132)(3, "div", 133)(4, "h5", 134);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 135);
    \u0275\u0275listener("click", function ParentDetail_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSelectChildModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 136)(9, "div", 137)(10, "input", 138);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_6_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParentDetail_div_6_Template_input_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterChildren());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ParentDetail_div_6_div_12_Template, 4, 3, "div", 139);
    \u0275\u0275elementStart(13, "div", 140);
    \u0275\u0275template(14, ParentDetail_div_6_button_14_Template, 10, 12, "button", 141);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "PARENTS.SELECT_EXISTING_CHILD"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 7, "PARENTS.SEARCH_BY_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredChildren.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredChildren);
  }
}
function ParentDetail_div_7_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 162);
  }
}
function ParentDetail_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147)(2, "div", 132)(3, "div", 133)(4, "h5", 134);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 135);
    \u0275\u0275listener("click", function ParentDetail_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAddFee());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 136)(9, "form", 148);
    \u0275\u0275listener("ngSubmit", function ParentDetail_div_7_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFee());
    });
    \u0275\u0275elementStart(10, "div", 137)(11, "label", 149);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_7_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newFee.amount, $event) || (ctx_r1.newFee.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 137)(16, "label", 149);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_7_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newFee.description, $event) || (ctx_r1.newFee.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 137)(21, "label", 149);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_7_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newFee.dueDate, $event) || (ctx_r1.newFee.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 137)(26, "label", 149);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 153);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_7_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newFee.feeType, $event) || (ctx_r1.newFee.feeType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 154);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 155);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 156);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 137)(40, "label", 149);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ParentDetail_div_7_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newFee.notes, $event) || (ctx_r1.newFee.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 158)(45, "button", 159);
    \u0275\u0275listener("click", function ParentDetail_div_7_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAddFee());
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 160);
    \u0275\u0275listener("click", function ParentDetail_div_7_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFee());
    });
    \u0275\u0275template(49, ParentDetail_div_7_span_49_Template, 1, 0, "span", 161);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 19, "PARENTS.ADD_FEE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 21, "PARENTS.AMOUNT"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newFee.amount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 23, "PARENTS.DESCRIPTION"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newFee.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 25, "PARENTS.DUE_DATE"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newFee.dueDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "PARENTS.FEE_TYPE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newFee.feeType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "PARENTS.MONTHLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 31, "PARENTS.ONE_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 33, "PARENTS.LATE_FEE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 35, "PARENTS.NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newFee.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingFee);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 37, "COMMON.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingFee);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingFee);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingFee ? \u0275\u0275pipeBind1(51, 39, "PARENTS.ADDING") : \u0275\u0275pipeBind1(52, 41, "PARENTS.ADD_FEE"), " ");
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var ParentDetail = class _ParentDetail {
  route;
  router;
  parentService;
  feeService;
  childrenService;
  authService;
  location;
  translate;
  pageTitleService;
  simpleToastService;
  parent = null;
  // index of the currently displayed child in the children column
  currentChildIndex = 0;
  loading = true;
  error = null;
  currentUserProfilePicture = "";
  showAddFee = false;
  showAddChildModal = false;
  showSelectChildModal = false;
  availableChildren = [];
  filteredChildren = [];
  searchTerm = "";
  selectedChildId = null;
  savingFee = false;
  linkingChild = false;
  isAdmin = true;
  // TODO: Get from auth service
  breadcrumbs = [];
  currentLocale = "en";
  langChangeSub;
  localeMapping = {
    "fr": "fr-FR",
    "it": "it-IT",
    "ar": "ar-SA"
  };
  get isParent() {
    return this.authService.isParent();
  }
  newFee = {
    childId: 0,
    amount: 0,
    description: "",
    dueDate: "",
    feeType: "monthly"
  };
  constructor(route, router, parentService, feeService, childrenService, authService, location, translate, pageTitleService, simpleToastService) {
    this.route = route;
    this.router = router;
    this.parentService = parentService;
    this.feeService = feeService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.location = location;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.currentUserProfilePicture = user?.profilePicture || "";
    this.currentLocale = this.translate.currentLang ?? this.translate.defaultLang ?? "en";
    this.pageTitleService.setTitle(this.translate.instant("PARENTS.PARENT_DETAILS"));
    this.setupBreadcrumbs();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.loadParentDetails(+id);
    }
    this.langChangeSub = this.translate.onLangChange.subscribe((event) => {
      this.currentLocale = event.lang;
      this.pageTitleService.setTitle(this.translate.instant("PARENTS.PARENT_DETAILS"));
      this.setupBreadcrumbs();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("PARENTS.TITLE"), url: "/parents" },
      { label: this.parent?.firstName ? `${this.parent.firstName} ${this.parent.lastName}` : this.translate.instant("PARENTS.PARENT_DETAILS") }
    ];
  }
  // move to next child (wraps around)
  nextChild() {
    if (!this.parent?.children || this.parent.children.length === 0)
      return;
    this.currentChildIndex = (this.currentChildIndex + 1) % this.parent.children.length;
  }
  // move to previous child (wraps around)
  prevChild() {
    if (!this.parent?.children || this.parent.children.length === 0)
      return;
    this.currentChildIndex = (this.currentChildIndex - 1 + this.parent.children.length) % this.parent.children.length;
  }
  // current child getter
  get currentChild() {
    if (!this.parent?.children || this.parent.children.length === 0)
      return null;
    return this.parent.children[this.currentChildIndex] || null;
  }
  loadParentDetails(id) {
    this.loading = true;
    this.parentService.getParentWithChildren(id).subscribe({
      next: (parent) => {
        this.parent = parent;
        if (this.isParent && this.currentUserProfilePicture) {
          this.parent.profilePicture = this.currentUserProfilePicture;
        }
        if (this.parent?.children) {
          this.parent.children = this.parent.children.map((child) => __spreadProps(__spreadValues({}, child), {
            age: this.calculateAge(child.dateOfBirth)
          }));
          this.currentChildIndex = 0;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load parent details";
        this.loading = false;
        console.error("Error loading parent:", error);
      }
    });
  }
  /**
   * Retourne l'âge sous forme d'objet { years, months }
   * Ex : { years: 2, months: 5 }
   */
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
  formatDate(dateString) {
    if (!dateString)
      return "N/A";
    const date = new Date(dateString);
    const locale = this.localeMapping[this.currentLocale] || "en-US";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  translateParentType(type) {
    if (!type)
      return "";
    const key = `PARENTS.${type.toUpperCase()}`;
    const translated = this.translate.instant(key);
    return translated !== key ? translated : type;
  }
  translateGender(gender) {
    if (!gender)
      return "";
    const key = `COMMON.${gender.toUpperCase()}`;
    const translated = this.translate.instant(key);
    return translated !== key ? translated : gender;
  }
  goBack() {
    this.router.navigate(["/parents"]);
  }
  editParent() {
    console.log("editParent() called, parent:", this.parent?.id, "isParent:", this.isParent);
    if (this.parent?.id) {
      if (this.isParent) {
        console.log("Navigating to /profile/edit");
        this.router.navigate(["/profile/edit"]).then((success) => console.log("Navigation success:", success), (error) => console.error("Navigation error:", error));
      } else {
        console.log("Navigating to /parents/edit/", this.parent.id);
        this.router.navigate(["/parents/edit", this.parent.id]);
      }
    } else {
      console.log("editParent() - no parent id");
    }
  }
  viewChildDetails(childId) {
    this.router.navigate(["/children/detail", childId]);
  }
  addChild() {
    import_sweetalert2.default.fire({
      title: this.translate.instant("PARENTS.ADD_CHILD"),
      text: this.translate.instant("PARENTS.CHOOSE_OPTION"),
      icon: "question",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: `<i class="bi bi-plus-square"></i> ${this.translate.instant("PARENTS.CREATE_NEW_CHILD")}`,
      denyButtonText: `<i class="bi bi-list-ul"></i> ${this.translate.instant("PARENTS.SELECT_EXISTING_CHILD")}`,
      cancelButtonText: this.translate.instant("COMMON.CANCEL"),
      confirmButtonColor: "#3085d6",
      denyButtonColor: "#6c757d",
      cancelButtonColor: "#d33",
      customClass: {
        confirmButton: "custom-btn-2 btn-add-global-2 me-2",
        denyButton: "custom-btn-2 btn-edit-global-2 me-2",
        cancelButton: "custom-btn-2 btn-cancel-2"
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.createNewChild();
      } else if (result.isDenied) {
        this.selectExistingChild();
      }
    });
  }
  selectExistingChild() {
    this.loadAvailableChildren();
    this.showSelectChildModal = true;
  }
  loadAvailableChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        const currentChildIds = this.parent?.children?.map((c) => c.id).filter((id) => id !== void 0) || [];
        this.availableChildren = children.filter((c) => c.id && !currentChildIds.includes(c.id));
        this.filteredChildren = [...this.availableChildren];
      },
      error: () => {
        this.simpleToastService.error(this.translate.instant("PARENTS.FAILED_LOAD_CHILDREN"));
      }
    });
  }
  filterChildren() {
    const term = this.searchTerm.toLowerCase();
    this.filteredChildren = this.availableChildren.filter((child) => `${child.firstName} ${child.lastName}`.toLowerCase().includes(term));
  }
  linkChildToParent(childId) {
    if (!this.parent?.id)
      return;
    this.linkingChild = true;
    this.childrenService.getChild(childId).subscribe({
      next: (child) => {
        const updatedChild = __spreadProps(__spreadValues({}, child), { parentId: this.parent.id });
        this.childrenService.updateChild(updatedChild).subscribe({
          next: () => {
            this.linkingChild = false;
            this.showSelectChildModal = false;
            this.loadParentDetails(this.parent.id);
            this.simpleToastService.success(this.translate.instant("PARENTS.CHILD_LINKED_SUCCESS"));
          },
          error: () => {
            this.linkingChild = false;
            this.simpleToastService.error(this.translate.instant("PARENTS.FAILED_LINK_CHILD"));
          }
        });
      },
      error: () => {
        this.linkingChild = false;
        this.simpleToastService.error(this.translate.instant("PARENTS.FAILED_LOAD_CHILD_DETAILS"));
      }
    });
  }
  closeSelectChildModal() {
    this.showSelectChildModal = false;
    this.searchTerm = "";
  }
  createNewChild() {
    this.showAddChildModal = false;
    this.router.navigate(["/children/add"], { queryParams: { parentId: this.parent?.id } });
  }
  addFeeForChild(childId, childName) {
    this.selectedChildId = childId;
    this.newFee = {
      childId,
      amount: 0,
      description: `Monthly fee for ${childName}`,
      dueDate: this.getNextMonthDate(),
      feeType: "monthly"
    };
    this.showAddFee = true;
  }
  saveFee() {
    this.savingFee = true;
    this.feeService.createFee(this.newFee).subscribe({
      next: () => {
        this.savingFee = false;
        this.showAddFee = false;
        this.simpleToastService.success(this.translate.instant("PARENTS.FEE_ADDED_SUCCESS"));
      },
      error: () => {
        this.savingFee = false;
        this.simpleToastService.error(this.translate.instant("PARENTS.FEE_ADD_ERROR"));
      }
    });
  }
  cancelAddFee() {
    this.showAddFee = false;
    this.selectedChildId = null;
  }
  back() {
    this.location.back();
  }
  logout() {
    this.authService.logout();
  }
  removeChildFromParent(childId, childName) {
    if (!this.parent?.id)
      return;
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("PARENTS.REMOVE_CHILD_CONFIRM", { name: childName }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.YES_REMOVE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.parentService.unlinkChildFromParent(this.parent.id, childId).subscribe({
          next: () => {
            this.loadParentDetails(this.parent.id);
            this.simpleToastService.success(this.translate.instant("PARENTS.CHILD_REMOVED_SUCCESS"));
          },
          error: () => {
            this.simpleToastService.error(this.translate.instant("PARENTS.FAILED_REMOVE_CHILD"));
          }
        });
      }
    });
  }
  toggleParentStatus() {
    if (!this.parent)
      return;
    const isActive = this.parent.isActive;
    const actionText = isActive ? this.translate.instant("PARENTS.DEACTIVATE_PARENT_CONFIRM") : this.translate.instant("PARENTS.ACTIVATE_PARENT_CONFIRM");
    const confirmText = isActive ? this.translate.instant("PARENTS.YES_DEACTIVATE") : this.translate.instant("PARENTS.YES_ACTIVATE");
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: actionText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmText,
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        const request = this.parent.isActive ? this.parentService.deactivateParent(this.parent.id) : this.parentService.activateParent(this.parent.id);
        request.subscribe({
          next: () => {
            if (this.parent) {
              this.parent.isActive = !this.parent.isActive;
              this.updateChildrenStatus(this.parent.isActive);
            }
            const successMsg = isActive ? this.translate.instant("PARENTS.PARENT_DEACTIVATED_SUCCESS") : this.translate.instant("PARENTS.PARENT_ACTIVATED_SUCCESS");
            this.simpleToastService.success(successMsg);
          },
          error: () => {
            const errorMsg = isActive ? this.translate.instant("PARENTS.FAILED_DEACTIVATE_PARENT") : this.translate.instant("PARENTS.FAILED_ACTIVATE_PARENT");
            this.simpleToastService.error(errorMsg);
          }
        });
      }
    });
  }
  getNextMonthDate() {
    const date = /* @__PURE__ */ new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toISOString().split("T")[0];
  }
  updateChildrenStatus(isActive) {
    if (!this.parent?.children)
      return;
    this.parent.children.forEach((child) => {
      if (child.id) {
        const updatedChild = __spreadProps(__spreadValues({}, child), { isActive, parentId: this.parent.id });
        this.childrenService.updateChild(updatedChild).subscribe({
          next: () => {
            child.isActive = isActive;
          },
          error: (error) => {
            console.error(`Failed to update child ${child.firstName} status:`, error);
          }
        });
      }
    });
  }
  getActions() {
    const actions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-outline-secondary btn-cancel-global",
        action: () => this.goBack()
      }
    ];
    if (this.parent) {
      if (this.isAdmin) {
        actions.push({
          label: this.parent.isActive ? this.translate.instant("COMMON.DEACTIVATE") : this.translate.instant("COMMON.ACTIVATE"),
          icon: this.parent.isActive ? "bi bi-pause-circle" : "bi bi-play",
          class: this.parent.isActive ? "btn-view-global-2" : "btn-edit-global-2",
          action: () => this.toggleParentStatus()
        });
      }
      actions.push({
        label: this.translate.instant("COMMON.EDIT"),
        icon: "bi bi-pencil-square me-2",
        class: "btn-edit-global-2",
        action: () => this.editParent()
      });
    }
    return actions;
  }
  /**
   * Get profile picture URL, handling both file-based and Base64 formats
   */
  getProfilePictureUrl(entity) {
    if (!entity)
      return null;
    if (entity.profilePictureUrl) {
      return this.getFullUrl(entity.profilePictureUrl);
    }
    if (entity.profilePicture) {
      if (entity.profilePicture.startsWith("data:") || entity.profilePicture.startsWith("http")) {
        return entity.profilePicture;
      }
      return this.getFullUrl(entity.profilePicture);
    }
    return null;
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:")) {
      return path;
    }
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  static \u0275fac = function ParentDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentDetail, selectors: [["app-parent-detail"]], decls: 8, vars: 7, consts: [["singleChildren", ""], [4, "ngIf"], [1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row mb-4 parent-detail-row", 4, "ngIf"], ["class", "modal fade show d-block", "style", "background-color: rgba(0,0,0,0.5)", 3, "click", 4, "ngIf"], ["class", "modal fade show d-block", "style", "background-color: rgba(0,0,0,0.5)", 4, "ngIf"], ["class", "parent-detailchild font-inter", 4, "ngIf"], [1, "parent-detailchild", "font-inter"], [1, "dashboard-header", 2, "background", "linear-gradient(135deg, #B8E6F0 0%, #D4F1E8 100%)", "padding", "35px 20px 16px", "padding-top", "calc(env(safe-area-inset-top, 0px) + 16px)", "border-radius", "0 0 32px 32px", "margin-bottom", "80px"], [1, "title-icons", "d-flex", "justify-content-between", "mb-4"], [3, "height", "width"], [3, "height", "width", "circle"], [2, "background", "white", "border-radius", "14px", "padding", "20px", "margin", "20px 20px 24px", "box-shadow", "0 2px 8px rgba(0, 0, 0, 0.08)", "transform", "translateY(85px)", "margin-top", "-90px"], [1, "d-flex", "flex-column", "align-items-center", "text-center", "mb-3"], [1, "mb-3", 3, "height", "width", "circle"], [1, "mb-2", 3, "height", "width"], [1, "mb-2"], [1, "mb-1", 3, "height", "width"], [1, "body", "container-fluid"], [1, "info-card", "card-mobile", "card", "mb-3"], [1, "card-title", "mb-3"], [1, "d-inline-block", "me-2", 3, "height", "width", "circle"], [1, "d-inline-block", 3, "height", "width"], ["class", "info-row mb-2", 4, "ngFor", "ngForOf"], [1, "other-information"], [1, "mb-3", 3, "height", "width"], ["class", "profile-info-card_parent mb-3", "style", "background: #fff; border-radius: 10px; box-shadow: 0 1px 7px rgba(50, 50, 93, 0.1); padding: 15px 12px;", 4, "ngFor", "ngForOf"], [1, "info-row", "mb-2"], [1, "profile-info-card_parent", "mb-3", 2, "background", "#fff", "border-radius", "10px", "box-shadow", "0 1px 7px rgba(50, 50, 93, 0.1)", "padding", "15px 12px"], [1, "d-flex", "gap-3", "align-items-center"], [1, "flex-grow-1"], [3, "onBack", "onEdit", "title", "children", "currentChildIndex", "hasCustomContent", "showEdit"], ["headerCard", ""], [1, "badge", "logout", "d-inline-flex", "align-items-center", "mb-2"], [1, "bi", "bi-box-arrow-left", 2, "cursor", "pointer", 3, "click"], [1, "info-title"], [1, "info-desc"], [1, "card-title"], [1, "icon-box"], [1, "bi", "bi-person-circle"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "bi-info-circle"], [1, "bi", "bi-geo-alt"], [1, "title-body"], ["class", "profile-info-card_parent mb-3", 4, "ngFor", "ngForOf"], [1, "profile-info-card_parent", "mb-3"], [1, "d-flex", "gap-3", "align-items-center", 3, "click"], [1, "info-image"], ["alt", "Child Photo", 1, "img-fluid", 3, "src"], [1, "info"], [1, "link"], [1, "bi", "bi-chevron-right"], [3, "title", "breadcrumbs", "actions"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "row", "mb-4", "parent-detail-row"], ["id", "parent-detail-section", 1, "col-md-6"], [1, "card", "card-detail_pages", "card-general", "shodown-effect"], [1, "card", "card-header", "pb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-2", "row_direction"], [1, "d-flex", "align-items-center", "justify-content-center", "avatar", "avatar-xxl", "border", "border-dashed", "me-2", "flex-shrink-0", "text-dark", "frames"], ["loading", "lazy", "alt", "Parent Photo", 1, "img-fluid", 3, "src"], ["class", "badge badge-active d-inline-flex align-items-center mb-2", 4, "ngIf"], ["class", "badge badge-inactive d-inline-flex align-items-center mb-2", 4, "ngIf"], [1, "overflow-hidden"], [1, "mb-1", "text-truncate", "name-user"], [1, "age"], [1, "card-body", "grouped-card-body"], [1, "info-group"], [1, "mb-1", "title-body"], [1, "row"], [1, "col-6", "title-dt-body-card"], [1, "col-6", "description-dt-body-card"], ["class", "info-group mb-0", 4, "ngIf"], ["id", "children-detail-section", 1, "col-md-6"], [1, "card", "card-general", "card-children-info", "shodown-effect"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "custom-btn-2", "btn-add-border", 3, "click"], [1, "bi", "bi-plus-square", "me-1"], [1, "card-body"], ["class", "text-center text-muted", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "card-footer"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between", "action-child"], [1, "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "gap-2", "desktop-only", "d-none", "d-md-flex"], [1, "custom-btn-2", "btn-remove-2", 3, "click"], [1, "bi", "bi-trash", "me-2"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle-dotted", "me-2"], [1, "custom-btn-2", "btn-view-global-2", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "d-flex", "align-items-center", "gap-2", "mobile-only", "d-md-none"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-plus-circle-dotted"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "badge", "badge-active", "d-inline-flex", "align-items-center", "mb-2"], [1, "ti", "ti-circle-filled", "fs-5", "me-1"], [1, "badge", "badge-inactive", "d-inline-flex", "align-items-center", "mb-2"], [1, "info-group", "mb-0"], [1, "text-center", "text-muted"], [1, "p-3", "pb-0", "pt-0", "mb-3"], [1, "card", "card-detail_pages", "card-custom-no-hover"], [1, "card-header"], [1, "d-flex", "align-items-start", "flex-wrap", "row-gap-2", "row_direction"], ["loading", "lazy", "alt", "Child Photo", 1, "img-fluid", 3, "src"], [1, "badge", "badge-age", "d-inline-flex", "align-items-center", "mb-2"], [1, "mb-3", "title-body"], [1, "row", "mb-0", "table"], [1, "col-6", "title-dt-body-card", "mb-2"], [1, "col-6", "description-dt-body-card", "mb-2"], [1, "col-6", "title-dt-body-card", "mb-3"], [1, "col-6", "description-dt-body-card", "mb-3"], ["class", "p-3 pb-0 pt-0 mb-3", 4, "ngFor", "ngForOf"], ["role", "group", "aria-label", "Children navigation", 1, "btn-group", "btn-group-sm", "me-2"], ["type", "button", "title", "Previous child", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-chevron-left"], ["type", "button", 1, "btn", "btn-outline-secondary", "disabled"], ["type", "button", "title", "Next child", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "sweet-center", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "list-group", 2, "max-height", "400px", "overflow-y", "auto"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "py-4"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click", "disabled"], ["loading", "lazy", "alt", "Child Photo", 1, "rounded-circle", "me-3", 2, "width", "50px", "height", "50px", 3, "src"], [1, "text-muted"], [1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog"], [3, "ngSubmit"], [1, "form-label"], ["type", "number", "name", "amount", "required", "", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "description", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dueDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "feeType", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "monthly"], ["value", "one-time"], ["value", "late-fee"], ["name", "notes", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ParentDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ParentDetail_div_0_Template, 3, 2, "div", 1);
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, ParentDetail_app_title_page_2_Template, 4, 16, "app-title-page", 3)(3, ParentDetail_div_3_Template, 5, 3, "div", 4)(4, ParentDetail_div_4_Template, 2, 1, "div", 5)(5, ParentDetail_div_5_Template, 99, 68, "div", 6)(6, ParentDetail_div_6_Template, 15, 9, "div", 7)(7, ParentDetail_div_7_Template, 53, 43, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.parent && !ctx.loading && !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSelectChildModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddFee);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, TitlePage, ParentChildHeaderComponent, TranslateModule, SkeletonComponent, DatePipe, TranslatePipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.card-children-info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n}\n.card-children-info[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-children-info[_ngcontent-%COMP%]   .child-image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 2.813rem;\n  height: 2.813rem;\n  font-size: 1rem;\n  border: 1px solid rgba(0, 0, 0, 0.2784313725);\n  border-radius: 4px;\n}\n.card-children-info[_ngcontent-%COMP%]   .title-age[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  font-size: 14px;\n  color: #202C4B !important;\n  font-weight: 500;\n}\n.card-children-info[_ngcontent-%COMP%]   .title-age[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgb(106, 114, 135) !important;\n  font-weight: 400;\n}\n.card-children-info[_ngcontent-%COMP%]   .child-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 15px;\n  font-weight: 500;\n}\n.card-children-info[_ngcontent-%COMP%]   .child-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card-children-info[_ngcontent-%COMP%]   .child-text[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: none;\n  color: #1ABE17;\n  padding: 0.25rem 0.45rem;\n  text-transform: capitalize;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  font-size: 10.5px;\n}\n.card-children-info[_ngcontent-%COMP%]   .action-child[_ngcontent-%COMP%]   .desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.card-children-info[_ngcontent-%COMP%]   .action-child[_ngcontent-%COMP%]   .desktop-only[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 1.2;\n  font-size: 12px;\n}\n.card-children-info[_ngcontent-%COMP%]   .allergies-medical[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #202C4B;\n}\n.card-children-info[_ngcontent-%COMP%]   .allergies-medical[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n  .header-info_card {\n  margin-top: -70px !important;\n}\n  .header-info {\n  margin-bottom: 65px !important;\n}\n  .title-page {\n  display: none !important;\n}\n  .image-name {\n  margin-top: -20px;\n}\n.logout[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 5px !important;\n  font-weight: 500 !important;\n}\n.logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.parent-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: stretch;\n  flex-wrap: nowrap;\n  overflow-x: hidden;\n}\n.parent-detail-row[_ngcontent-%COMP%]    > .col-md-6[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1 1 0;\n  min-width: 0;\n}\n.parent-detail-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.parent-detail-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.parent-detail-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n#children-detail-section[_ngcontent-%COMP%] {\n}\n#children-detail-section[_ngcontent-%COMP%]   .card-detail_pages[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], \n#children-detail-section[_ngcontent-%COMP%]   .card-detail_pages[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n#children-detail-section[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #fff;\n  border-radius: 0 0 8px 8px;\n}\n@media (max-width: 767px) {\n  .parent-detail-row[_ngcontent-%COMP%] {\n    min-height: auto;\n    display: block;\n  }\n  .parent-detail-row[_ngcontent-%COMP%]    > .col-md-6[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fbfdff 100%);\n  border-radius: 10px;\n  padding: 14px;\n  box-shadow: 0 6px 18px rgba(18, 38, 63, 0.06);\n  font-family: inherit;\n  font-size: 14px;\n  color: inherit;\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n  display: block;\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .info-group[_ngcontent-%COMP%]    + .info-group[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(15, 23, 36, 0.04);\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 10px;\n  letter-spacing: 0.2px;\n  text-transform: none;\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: #667085;\n  font-weight: 600;\n}\n#parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2n) {\n  color: #0f1724;\n  font-size: 14px;\n}\n@media (max-width: 480px) {\n  #parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 6px 4px;\n  }\n  #parent-detail-section[_ngcontent-%COMP%]   .grouped-card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n}\n.info-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin: 0 auto;\n}\n.info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background-color: #E0F2FE;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n.info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1DBAB4;\n}\n.info-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.info-card[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  width: 130px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #6B7280;\n}\n.info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=parent-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentDetail, [{
    type: Component,
    args: [{ selector: "app-parent-detail", standalone: true, imports: [CommonModule, FormsModule, TitlePage, ParentChildHeaderComponent, TranslateModule, SkeletonComponent], template: `<div *ngIf="isParent">\r
  <!-- Loading Skeleton for Parent View -->\r
  <div *ngIf="loading" class="parent-detailchild font-inter">\r
    <!-- Header Skeleton -->\r
    <div class="dashboard-header" style="background: linear-gradient(135deg, #B8E6F0 0%, #D4F1E8 100%); padding: 35px 20px 16px; padding-top: calc(env(safe-area-inset-top, 0px) + 16px); border-radius: 0 0 32px 32px; margin-bottom: 80px;">\r
      <div class="title-icons d-flex justify-content-between mb-4">\r
        <app-skeleton [height]="24" [width]="'150px'"></app-skeleton>\r
        <app-skeleton [height]="32" [width]="'32px'" [circle]="true"></app-skeleton>\r
      </div>\r
\r
      <!-- Parent info card skeleton -->\r
      <div style="background: white; border-radius: 14px; padding: 20px; margin: 20px 20px 24px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); transform: translateY(85px); margin-top: -90px;">\r
        <div class="d-flex flex-column align-items-center text-center mb-3">\r
          <app-skeleton [height]="112" [width]="'112px'" [circle]="true" class="mb-3"></app-skeleton>\r
          <app-skeleton [height]="28" [width]="'60%'" class="mb-2"></app-skeleton>\r
          <app-skeleton [height]="16" [width]="'40%'"></app-skeleton>\r
        </div>\r
        <div class="mb-2">\r
          <app-skeleton [height]="14" [width]="'35%'" class="mb-1"></app-skeleton>\r
          <app-skeleton [height]="16" [width]="'45%'"></app-skeleton>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Body Content Skeleton -->\r
    <div class="body container-fluid">\r
      <!-- Personal Info Card Skeleton -->\r
      <div class="info-card card-mobile card mb-3">\r
        <div class="card-title mb-3">\r
          <app-skeleton [height]="40" [width]="'40px'" [circle]="true" class="d-inline-block me-2"></app-skeleton>\r
          <app-skeleton [height]="24" [width]="'180px'" class="d-inline-block"></app-skeleton>\r
        </div>\r
        <div class="info-row mb-2" *ngFor="let i of [1,2,3,4]">\r
          <app-skeleton [height]="16" [width]="'30%'" class="mb-1"></app-skeleton>\r
          <app-skeleton [height]="16" [width]="'55%'"></app-skeleton>\r
        </div>\r
      </div>\r
\r
      <!-- Other Info Card Skeleton -->\r
      <div class="info-card card-mobile card mb-3">\r
        <div class="card-title mb-3">\r
          <app-skeleton [height]="40" [width]="'40px'" [circle]="true" class="d-inline-block me-2"></app-skeleton>\r
          <app-skeleton [height]="24" [width]="'160px'" class="d-inline-block"></app-skeleton>\r
        </div>\r
        <div class="info-row mb-2" *ngFor="let i of [1,2,3]">\r
          <app-skeleton [height]="16" [width]="'30%'" class="mb-1"></app-skeleton>\r
          <app-skeleton [height]="16" [width]="'50%'"></app-skeleton>\r
        </div>\r
      </div>\r
\r
      <!-- Address Card Skeleton -->\r
      <div class="info-card card-mobile card mb-3">\r
        <div class="card-title mb-3">\r
          <app-skeleton [height]="40" [width]="'40px'" [circle]="true" class="d-inline-block me-2"></app-skeleton>\r
          <app-skeleton [height]="24" [width]="'120px'" class="d-inline-block"></app-skeleton>\r
        </div>\r
        <div class="info-row mb-2" *ngFor="let i of [1,2]">\r
          <app-skeleton [height]="16" [width]="'30%'" class="mb-1"></app-skeleton>\r
          <app-skeleton [height]="16" [width]="'60%'"></app-skeleton>\r
        </div>\r
      </div>\r
\r
      <!-- Children Section Skeleton -->\r
      <div class="other-information">\r
        <app-skeleton [height]="24" [width]="'120px'" class="mb-3"></app-skeleton>\r
        <div *ngFor="let i of [1,2]" class="profile-info-card_parent mb-3" style="background: #fff; border-radius: 10px; box-shadow: 0 1px 7px rgba(50, 50, 93, 0.1); padding: 15px 12px;">\r
          <div class="d-flex gap-3 align-items-center">\r
            <app-skeleton [height]="48" [width]="'48px'" [circle]="true"></app-skeleton>\r
            <div class="flex-grow-1">\r
              <app-skeleton [height]="18" [width]="'60%'" class="mb-2"></app-skeleton>\r
              <app-skeleton [height]="14" [width]="'40%'"></app-skeleton>\r
            </div>\r
            <app-skeleton [height]="20" [width]="'20px'"></app-skeleton>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loaded Content -->\r
  <div *ngIf="parent && !loading" class="parent-detailchild font-inter">\r
    <app-parent-child-header [title]="'PARENTS.PARENT_PROFILE' | translate" [children]="[parent]" [currentChildIndex]="0"\r
      [hasCustomContent]="true" (onBack)="back()" [showEdit]="true" (onEdit)="editParent()">\r
      <div headerCard>\r
        <span class="badge logout d-inline-flex align-items-center mb-2">\r
          <i class="bi bi-box-arrow-left" (click)="logout()" style="cursor: pointer;"></i>\r
          {{ 'PARENTS.LOGOUT' | translate }}\r
        </span>\r
        <div>\r
          <div class="info-title">{{ 'PARENTS.REGISTRATION_DATE' | translate }}</div>\r
          <div class="info-desc">{{ parent.createdAt | date:'yy/MM/dd':'':currentLocale }}</div>\r
        </div>\r
      </div>\r
    </app-parent-child-header>\r
    <div class="body container-fluid">\r
      <div class="info-card card-mobile card mb-3">\r
        <div class="card-title">\r
          <div class="icon-box">\r
            <i class="bi bi-person-circle"></i>\r
          </div>\r
          <h5>{{ 'PARENTS.PERSONAL_INFO' | translate }}</h5>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.FULL_NAME' | translate }}</div>\r
            <div class="info-value">{{ parent.firstName }} {{ parent.lastName }}</div>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.EMAIL' | translate }}</div>\r
            <div class="info-value">{{ parent.email }}</div>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.PHONE' | translate }}</div>\r
            <div class="info-value">{{ parent.phoneNumber }}</div>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.RELATION' | translate }}</div>\r
            <div class="info-value">{{ translateParentType(parent.parentType) }}</div>\r
        </div>\r
      </div>\r
      <div class="info-card card-mobile card mb-3">\r
        <div class="card-title">\r
          <div class="icon-box">\r
            <i class="bi-info-circle"></i>\r
          </div>\r
          <h5>{{ 'PARENTS.OTHER_INFO' | translate }}</h5>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.WORK' | translate }}</div>\r
            <div class="info-value">{{ parent.work }}</div>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.EMERGENCY_CONTACT' | translate }}</div>\r
            <div class="info-value">{{ parent.emergencyContact }}</div>\r
        </div>\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.BIRTHDAY' | translate }}</div>\r
            <div class="info-value">{{ parent.dateOfBirth | date:'yy/MM/dd':'':currentLocale }}</div>\r
        </div>\r
      </div>\r
      <div class="info-card card-mobile card mb-3">\r
         <div class="card-title">\r
          <div class="icon-box">\r
            <i class="bi bi-geo-alt"></i>\r
          </div>\r
          <h5>{{ 'PARENTS.ADDRESS' | translate }}</h5>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.ADDRESS' | translate }}</div>\r
            <div class="info-value">{{ parent.address }}</div>\r
        </div>\r
\r
        <div class="info-row">\r
            <div class="info-label">{{ 'PARENTS.ZIP_CODE' | translate }}</div>\r
            <div class="info-value">{{ parent.zipCode }}</div>\r
        </div>\r
      </div>\r
      <div class="other-information">\r
        <h5 class="title-body">\r
          {{ 'PARENTS.CHILDREN_INFO' | translate }}\r
        </h5>\r
        <div *ngFor="let child of parent.children" class="profile-info-card_parent mb-3">\r
          <div class="d-flex gap-3 align-items-center" (click)="viewChildDetails(child.id)">\r
            <div class="info-image">\r
              <img [src]="getProfilePictureUrl(child) || 'assets/child.png'" class="img-fluid" alt="Child Photo">\r
            </div>\r
            <div class="info">\r
              <div class="info-title">{{ child.firstName }} {{ child.lastName }}</div>\r
                        @if( calculateAge(child.dateOfBirth).years > 0){\r
                          <div class="info-desc">\r
                            {{ calculateAge(child.dateOfBirth).years }} {{ 'PARENTS.YEARS_OLD' | translate }}\r
                          </div>\r
                        }\r
                        @if( calculateAge(child.dateOfBirth).years  <= 0){\r
                          <div class="info-desc">\r
                            {{ calculateAge(child.dateOfBirth).months }} {{ 'PARENTS.MONTHS_OLD' | translate }}\r
                          </div>\r
                        }\r
\r
\r
            </div>\r
            <div class="link">\r
              <i class="bi bi-chevron-right"></i>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="container-fluid mt-4">\r
  <app-title-page *ngIf="!isParent" [title]="'PARENTS.PARENT_DETAILS' | translate" [breadcrumbs]="[\r
    { label: ('PARENTS.TITLE' | translate), url: '/parents' },\r
    { label: ('PARENTS.DETAILS' | translate) }\r
  ]" [actions]="getActions()">\r
  </app-title-page>\r
\r
  <div *ngIf="loading" class="text-center">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'COMMON.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="error" class="alert alert-danger">\r
    {{ error }}\r
  </div>\r
\r
  <div *ngIf="parent && !loading && !isParent" class="row mb-4 parent-detail-row">\r
    <div class="col-md-6" id="parent-detail-section">\r
      <div class="card card-detail_pages card-general shodown-effect">\r
        <div class="card card-header pb-0">\r
          <div class="d-flex align-items-center flex-wrap row-gap-2 row_direction">\r
            <div\r
              class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">\r
              <img loading="lazy" [src]="getProfilePictureUrl(parent) || 'assets/default-avatar.svg'" class="img-fluid"\r
                alt="Parent Photo">\r
              <span *ngIf="parent.isActive" class="badge badge-active d-inline-flex align-items-center mb-2"><i\r
                  class="ti ti-circle-filled fs-5 me-1"></i>{{ 'PARENTS.ACTIVE' | translate }}</span>\r
              <span *ngIf="!parent.isActive" class="badge badge-inactive d-inline-flex align-items-center mb-2"><i\r
                  class="ti ti-circle-filled fs-5 me-1"></i>{{ 'PARENTS.INACTIVE' | translate }}</span>\r
            </div>\r
            <div class="overflow-hidden">\r
              <h5 class="mb-1 text-truncate name-user">{{ parent.firstName }} {{ parent.lastName }}</h5>\r
              <p class="age">{{ 'PARENTS.PARENT_LABEL' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Basic Information grouped into three sections -->\r
        <div class="card-body grouped-card-body">\r
          <div class="info-group">\r
            <h6 class="mb-1 title-body">{{ 'PARENTS.BASIC_INFO' | translate }}</h6>\r
            <div class="row">\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.FULL_NAME' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ parent.firstName }} {{ parent.lastName }}</dd>\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.GENDER' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ parent.gender ? translateGender(parent.gender) : ('COMMON.NA' | translate) }}</dd>\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.DATE_OF_BIRTH' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ parent.dateOfBirth ? (parent.dateOfBirth | date:'yy/MM/dd':'':currentLocale)\r
                : ('COMMON.NA' | translate) }}</dd>\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.REGISTRATION_DATE' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ formatDate(parent.createdAt) }}</dd>\r
            </div>\r
          </div>\r
\r
          <div class="info-group">\r
            <h6 class="mb-1 title-body">{{ 'PARENTS.CONTACT' | translate }}</h6>\r
            <div class="row">\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.EMAIL' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ parent.email }}</dd>\r
              <dt class="col-6 title-dt-body-card">{{ 'PARENTS.PHONE_NUMBER' | translate }}</dt>\r
              <dd class="col-6 description-dt-body-card">{{ parent.phoneNumber }}</dd>\r
            </div>\r
          </div>\r
\r
          <div class="info-group mb-0" *ngIf="parent.address || parent.zipCode">\r
            <h6 class="mb-1 title-body">{{ 'PARENTS.ADDRESS' | translate }}</h6>\r
            <div class="row">\r
              <div *ngIf="parent.address">\r
                <dt class="col-6 title-dt-body-card">{{ 'PARENTS.ADDRESS' | translate }}</dt>\r
                <dd class="col-6 description-dt-body-card">{{ parent.address || ('COMMON.NA' | translate) }}</dd>\r
              </div>\r
              <div *ngIf="parent.zipCode">\r
                <dt class="col-6 title-dt-body-card">{{ 'PARENTS.ZIP_CODE' | translate }}</dt>\r
                <dd class="col-6 description-dt-body-card">{{ parent.zipCode || ('COMMON.NA' | translate) }}</dd>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <div class="col-md-6" id="children-detail-section">\r
      <div class="card card-general card-children-info shodown-effect">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5 class="mb-0">{{ 'PARENTS.CHILDREN_INFO' | translate }}</h5>\r
          <button class="custom-btn-2 btn-add-border" (click)="addChild()">\r
\r
            <i class="bi bi-plus-square me-1"></i>{{ 'PARENTS.ADD_CHILD' | translate }}\r
          </button>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="!parent.children || parent.children.length === 0" class="text-center text-muted">\r
            <p>{{ 'PARENTS.NO_CHILDREN_YET' | translate }}</p>\r
          </div>\r
\r
          <!-- If there are multiple children, display only the currently selected child in this column -->\r
          <ng-container *ngIf="parent.children && parent.children.length > 1; else singleChildren">\r
            <div class="p-3 pb-0 pt-0 mb-3">\r
              <div class="card card-detail_pages card-custom-no-hover">\r
                <div class="card-header">\r
                  <div class="d-flex align-items-start flex-wrap row-gap-2 row_direction">\r
                    <div\r
                      class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">\r
                      <img loading="lazy" [src]="getProfilePictureUrl(currentChild) || 'assets/child.png'" class="img-fluid"\r
                        alt="Child Photo">\r
                      <span class="badge badge-age d-inline-flex align-items-center mb-2">\r
                        @if( calculateAge(currentChild!.dateOfBirth).years  > 0){\r
                        {{ calculateAge(currentChild!.dateOfBirth).years}} {{ 'PARENTS.YEARS_OLD' | translate }}\r
                        }\r
                        @if( calculateAge(currentChild!.dateOfBirth).years  <= 0){\r
                        {{ calculateAge(currentChild!.dateOfBirth).months}} {{ 'PARENTS.MONTHS_OLD' | translate }}\r
                        }\r
                      </span>\r
                    </div>\r
                    <div class="overflow-hidden">\r
                      <h5 class="mb-1 text-truncate name-user">{{ currentChild?.firstName }} {{ currentChild?.lastName\r
                        }}</h5>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="card-body">\r
                  <h5 class="mb-3 title-body">{{ 'PARENTS.BASIC_INFO' | translate }}</h5>\r
                  <dl class="row mb-0 table">\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.DATE_OF_BIRTH' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ formatDate(currentChild?.dateOfBirth) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.GENDER' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ translateGender(currentChild?.gender) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.ALLERGIES' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ (currentChild?.allergies?.length ?? 0) > 1 ?\r
                      currentChild?.allergies : ('PARENTS.NOTHING' | translate) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.MEDICAL_NOTE' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ (currentChild?.medicalNotes?.length ?? 0) > 1 ?\r
                      currentChild?.medicalNotes : ('PARENTS.NOTHING' | translate) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.EMERGENCY_CONTACT' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ parent.emergencyContact }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-3">{{ 'PARENTS.REGISTRATION_DATE' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-3">{{ formatDate(parent.createdAt) }}</dd>\r
                  </dl>\r
                </div>\r
\r
              </div>\r
            </div>\r
          </ng-container>\r
          <ng-template #singleChildren>\r
            <div *ngFor="let child of parent.children" class="p-3 pb-0 pt-0 mb-3">\r
              <div class="card card-detail_pages card-custom-no-hover ">\r
                <div class="card-header">\r
                  <div class="d-flex align-items-start flex-wrap row-gap-2 row_direction">\r
                    <div\r
                      class="d-flex align-items-center justify-content-center avatar avatar-xxl border border-dashed me-2 flex-shrink-0 text-dark frames">\r
                      <img loading="lazy" [src]="getProfilePictureUrl(child) || 'assets/child.png'" class="img-fluid"\r
                        alt="Child Photo">\r
                      <span class="badge badge-age d-inline-flex align-items-center mb-2">\r
                        @if( calculateAge(child.dateOfBirth).years  > 0){\r
                        {{ calculateAge(child.dateOfBirth).years}} {{ 'PARENTS.YEARS_OLD' | translate }}\r
                        }\r
                        @if( calculateAge(child.dateOfBirth).years  <= 0){\r
                        {{ calculateAge(child.dateOfBirth).months}} {{ 'PARENTS.MONTHS_OLD' | translate }}\r
                        }\r
                      </span>\r
                    </div>\r
                    <div class="overflow-hidden">\r
                      <h5 class="mb-1 text-truncate name-user">{{ child.firstName }} {{ child.lastName }}</h5>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="card-body">\r
                  <h5 class="mb-3 title-body">{{ 'PARENTS.BASIC_INFO' | translate }}</h5>\r
                  <dl class="row mb-0 table">\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.DATE_OF_BIRTH' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ formatDate(child.dateOfBirth) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.GENDER' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ translateGender(child.gender) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.ALLERGIES' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ (child.allergies?.length ?? 0) > 1 ?\r
                      child.allergies : ('PARENTS.NOTHING' | translate) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.MEDICAL_NOTE' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ (child.medicalNotes?.length ?? 0) > 1 ?\r
                      child.medicalNotes : ('PARENTS.NOTHING' | translate) }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-2">{{ 'PARENTS.EMERGENCY_CONTACT' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-2">{{ parent.emergencyContact }}</dd>\r
                    <dt class="col-6 title-dt-body-card mb-3">{{ 'PARENTS.REGISTRATION_DATE' | translate }}</dt>\r
                    <dd class="col-6 description-dt-body-card mb-3">{{ formatDate(parent.createdAt) }}</dd>\r
                  </dl>\r
                </div>\r
              </div>\r
            </div>\r
          </ng-template>\r
        </div>\r
        <div class="card-footer">\r
          <div class="d-flex w-100 align-items-center justify-content-between action-child">\r
            <div class="d-flex align-items-center">\r
              <ng-container *ngIf="parent.children && parent.children.length > 1">\r
                <div class="btn-group btn-group-sm me-2" role="group" aria-label="Children navigation">\r
                  <button class="btn btn-outline-secondary" type="button" (click)="prevChild()" title="Previous child">\r
                    <i class="bi bi-chevron-left"></i>\r
                  </button>\r
                  <button class="btn btn-outline-secondary disabled" type="button">{{ currentChildIndex + 1 }} / {{ parent.children.length }}</button>\r
                  <button class="btn btn-outline-secondary" type="button" (click)="nextChild()" title="Next child">\r
                    <i class="bi bi-chevron-right"></i>\r
                  </button>\r
                </div>\r
              </ng-container>\r
            </div>\r
\r
            <div class="d-flex align-items-center gap-2 desktop-only d-none d-md-flex">\r
              <button class="custom-btn-2 btn-remove-2" (click)="removeChildFromParent(currentChild?.id!, (currentChild?.firstName || '') + ' ' + (currentChild?.lastName || ''))">\r
                <i class="bi bi-trash me-2"></i>\r
                {{ 'PARENTS.REMOVE' | translate }}\r
              </button>\r
              <button class="custom-btn-2 btn-add-global-2" (click)="addFeeForChild(currentChild?.id!, (currentChild?.firstName || '') + ' ' + (currentChild?.lastName || ''))">\r
                <i class="bi bi-plus-circle-dotted me-2"></i>\r
                {{ 'PARENTS.ADD_FEES' | translate }}\r
              </button>\r
              <button class="custom-btn-2 btn-view-global-2" (click)="viewChildDetails(currentChild?.id!)">\r
                <i class="bi bi-eye me-2"></i>\r
                {{ 'PARENTS.VIEW_DETAILS' | translate }}\r
              </button>\r
            </div>\r
            <div class="d-flex align-items-center gap-2 mobile-only d-md-none">\r
              <button class="btn btn-sm btn-remove" (click)="removeChildFromParent(currentChild?.id!, (currentChild?.firstName || '') + ' ' + (currentChild?.lastName || ''))">\r
                <i class="bi bi-trash"></i>\r
              </button>\r
              <button class="btn btn-sm btn-edit" (click)="addFeeForChild(currentChild?.id!, (currentChild?.firstName || '') + ' ' + (currentChild?.lastName || ''))">\r
                <i class="bi bi-plus-circle-dotted"></i>\r
              </button> \r
              <button class="btn btn-sm btn-view" (click)="viewChildDetails(currentChild?.id!)">\r
                <i class="bi bi-eye"></i>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Select Existing Child Modal -->\r
  <div class="modal fade show d-block" *ngIf="showSelectChildModal" style="background-color: rgba(0,0,0,0.5)"\r
    (click)="closeSelectChildModal()">\r
    <div class="modal-dialog modal-lg modal-dialog-centered sweet-center" (click)="$event.stopPropagation()">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ 'PARENTS.SELECT_EXISTING_CHILD' | translate }}</h5>\r
          <button type="button" class="btn-close" (click)="closeSelectChildModal()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <div class="mb-3">\r
            <input type="text" class="form-control" [placeholder]="'PARENTS.SEARCH_BY_NAME' | translate" [(ngModel)]="searchTerm"\r
              (ngModelChange)="filterChildren()">\r
          </div>\r
          <div *ngIf="filteredChildren.length === 0" class="text-center text-muted py-4">\r
            <p>{{ 'PARENTS.NO_AVAILABLE_CHILDREN' | translate }}</p>\r
          </div>\r
          <div class="list-group" style="max-height: 400px; overflow-y: auto;">\r
            <button *ngFor="let child of filteredChildren" type="button" class="list-group-item list-group-item-action"\r
              (click)="linkChildToParent(child.id!)" [disabled]="linkingChild">\r
              <div class="d-flex align-items-center">\r
                <img loading="lazy"\r
                  [src]="getProfilePictureUrl(child) || 'assets/child.png'"\r
                  class="rounded-circle me-3" style="width: 50px; height: 50px;" alt="Child Photo">\r
                <div class="flex-grow-1">\r
                  <h6 class="mb-0">{{ child.firstName }} {{ child.lastName }}</h6>\r
                  <small class="text-muted">{{ 'PARENTS.DOB' | translate }}: {{ formatDate(child.dateOfBirth) }} | {{ 'PARENTS.GENDER' | translate }}: {{ translateGender(child.gender)\r
                    }}</small>\r
                </div>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Add Fee Modal -->\r
  <div class="modal fade show d-block" *ngIf="showAddFee" style="background-color: rgba(0,0,0,0.5)">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ 'PARENTS.ADD_FEE' | translate }}</h5>\r
          <button type="button" class="btn-close" (click)="cancelAddFee()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <form (ngSubmit)="saveFee()">\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'PARENTS.AMOUNT' | translate }} *</label>\r
              <input type="number" class="form-control" [(ngModel)]="newFee.amount" name="amount" required min="0"\r
                step="0.01">\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'PARENTS.DESCRIPTION' | translate }} *</label>\r
              <input type="text" class="form-control" [(ngModel)]="newFee.description" name="description" required>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'PARENTS.DUE_DATE' | translate }} *</label>\r
              <input type="date" class="form-control" [(ngModel)]="newFee.dueDate" name="dueDate" required>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'PARENTS.FEE_TYPE' | translate }}</label>\r
              <select class="form-select" [(ngModel)]="newFee.feeType" name="feeType">\r
                <option value="monthly">{{ 'PARENTS.MONTHLY' | translate }}</option>\r
                <option value="one-time">{{ 'PARENTS.ONE_TIME' | translate }}</option>\r
                <option value="late-fee">{{ 'PARENTS.LATE_FEE' | translate }}</option>\r
              </select>\r
            </div>\r
            <div class="mb-3">\r
              <label class="form-label">{{ 'PARENTS.NOTES' | translate }}</label>\r
              <textarea class="form-control" [(ngModel)]="newFee.notes" name="notes" rows="3"></textarea>\r
            </div>\r
          </form>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="cancelAddFee()"\r
            [disabled]="savingFee">{{ 'COMMON.CANCEL' | translate }}</button>\r
          <button type="button" class="btn btn-primary" (click)="saveFee()" [disabled]="savingFee">\r
            <span *ngIf="savingFee" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ savingFee ? ('PARENTS.ADDING' | translate) : ('PARENTS.ADD_FEE' | translate) }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/parent/parent-detail/parent-detail.scss */\n.card {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.badge {\n  font-size: 0.875rem;\n}\nimg {\n  object-fit: cover;\n}\n.card-children-info .card-header {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n}\n.card-children-info .content {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-children-info .child-image .avatar {\n  width: 2.813rem;\n  height: 2.813rem;\n  font-size: 1rem;\n  border: 1px solid rgba(0, 0, 0, 0.2784313725);\n  border-radius: 4px;\n}\n.card-children-info .title-age p:first-child {\n  font-size: 14px;\n  color: #202C4B !important;\n  font-weight: 500;\n}\n.card-children-info .title-age span {\n  font-size: 14px;\n  color: rgb(106, 114, 135) !important;\n  font-weight: 400;\n}\n.card-children-info .child-text h6 {\n  margin-bottom: 0;\n  font-size: 15px;\n  font-weight: 500;\n}\n.card-children-info .child-text p {\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n}\n.card-children-info .child-text .badge {\n  background: none;\n  color: #1ABE17;\n  padding: 0.25rem 0.45rem;\n  text-transform: capitalize;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border-radius: 4px;\n  font-size: 10.5px;\n}\n.card-children-info .action-child .desktop-only {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.card-children-info .action-child .desktop-only button.btn {\n  padding: 10px;\n  line-height: 1.2;\n  font-size: 12px;\n}\n.card-children-info .allergies-medical .title {\n  font-size: 14px;\n  font-weight: 500;\n  color: #202C4B;\n}\n.card-children-info .allergies-medical .detail {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n::ng-deep .header-info_card {\n  margin-top: -70px !important;\n}\n::ng-deep .header-info {\n  margin-bottom: 65px !important;\n}\n::ng-deep .title-page {\n  display: none !important;\n}\n::ng-deep .image-name {\n  margin-top: -20px;\n}\n.logout {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 5px !important;\n  font-weight: 500 !important;\n}\n.logout i {\n  font-size: 18px;\n}\n.parent-detail-row {\n  display: flex;\n  gap: 1rem;\n  align-items: stretch;\n  flex-wrap: nowrap;\n  overflow-x: hidden;\n}\n.parent-detail-row > .col-md-6 {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  flex: 1 1 0;\n  min-width: 0;\n}\n.parent-detail-row .card .card-body {\n  overflow: auto;\n}\n.parent-detail-row .card {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.parent-detail-row .card .card-body {\n  overflow: auto;\n}\n#children-detail-section {\n}\n#children-detail-section .card-detail_pages .card-header,\n#children-detail-section .card-detail_pages .card-body {\n  padding: 5px 15px;\n}\n#children-detail-section .card-footer {\n  margin-top: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #fff;\n  border-radius: 0 0 8px 8px;\n}\n@media (max-width: 767px) {\n  .parent-detail-row {\n    min-height: auto;\n    display: block;\n  }\n  .parent-detail-row > .col-md-6 {\n    display: block;\n  }\n}\n#parent-detail-section .grouped-card-body {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #fbfdff 100%);\n  border-radius: 10px;\n  padding: 14px;\n  box-shadow: 0 6px 18px rgba(18, 38, 63, 0.06);\n  font-family: inherit;\n  font-size: 14px;\n  color: inherit;\n}\n#parent-detail-section .grouped-card-body .info-group {\n  padding: 5px 6px;\n  display: block;\n}\n#parent-detail-section .grouped-card-body .info-group + .info-group {\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(15, 23, 36, 0.04);\n}\n#parent-detail-section .grouped-card-body .group-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f1724;\n  margin-bottom: 10px;\n  letter-spacing: 0.2px;\n  text-transform: none;\n}\n#parent-detail-section .grouped-card-body .row > div {\n  padding: 6px 8px;\n}\n#parent-detail-section .grouped-card-body strong {\n  display: inline-block;\n  font-size: 12px;\n  color: #667085;\n  font-weight: 600;\n}\n#parent-detail-section .grouped-card-body .row > div:nth-child(2n) {\n  color: #0f1724;\n  font-size: 14px;\n}\n@media (max-width: 480px) {\n  #parent-detail-section .grouped-card-body .row > div {\n    padding: 6px 4px;\n  }\n  #parent-detail-section .grouped-card-body .row {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n}\n.info-card {\n  width: 100%;\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin: 0 auto;\n}\n.info-card .card-title {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.info-card .card-title .icon-box {\n  width: 36px;\n  height: 36px;\n  background-color: #E0F2FE;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n.info-card .card-title i {\n  font-size: 20px;\n  color: #1DBAB4;\n}\n.info-card .card-title h5 {\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.info-card .info-row {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.info-card .info-row:last-child {\n  margin-bottom: 0;\n}\n.info-card .info-label {\n  width: 130px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #6B7280;\n}\n.info-card .info-value {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=parent-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ParentService }, { type: FeeService }, { type: ChildrenService }, { type: AuthService }, { type: Location }, { type: TranslateService }, { type: PageTitleService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentDetail, { className: "ParentDetail", filePath: "src/app/features/parent/parent-detail/parent-detail.ts", lineNumber: 37 });
})();
export {
  ParentDetail
};
//# sourceMappingURL=chunk-Z5IEPNZV.js.map
