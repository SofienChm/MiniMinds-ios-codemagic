import {
  ExportUtil
} from "./chunk-CAKYQ2FY.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/parent/parent.ts
var _c0 = (a0) => ({ count: a0 });
function Parent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r1.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function Parent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function Parent_div_22_div_1_li_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 37);
    \u0275\u0275listener("click", function Parent_div_22_div_1_li_17_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const parent_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleParentStatus(parent_r3));
    });
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const parent_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-pause-fill", parent_r3.isActive)("bi-play-fill", !parent_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parent_r3.isActive ? \u0275\u0275pipeBind1(4, 5, "COMMON.DEACTIVATE") : \u0275\u0275pipeBind1(5, 7, "COMMON.ACTIVATE"), " ");
  }
}
function Parent_div_22_div_1_ng_container_53_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 58);
    \u0275\u0275listener("click", function Parent_div_22_div_1_ng_container_53_img_1_Template_img_click_0_listener($event) {
      const child_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      ctx_r3.viewChildDetails(child_r7.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(child_r7) || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", child_r7.firstName)("title", child_r7.firstName + " " + child_r7.lastName);
  }
}
function Parent_div_22_div_1_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Parent_div_22_div_1_ng_container_53_img_1_Template, 1, 3, "img", 57);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const parent_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", parent_r3.children);
  }
}
function Parent_div_22_div_1_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PARENTS.NONE"));
  }
}
function Parent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 33)(9, "a", 34);
    \u0275\u0275element(10, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 36)(12, "li")(13, "a", 37);
    \u0275\u0275listener("click", function Parent_div_22_div_1_Template_a_click_13_listener() {
      const parent_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editParent(parent_r3));
    });
    \u0275\u0275element(14, "i", 38);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, Parent_div_22_div_1_li_17_Template, 6, 9, "li", 18);
    \u0275\u0275elementStart(18, "li")(19, "a", 37);
    \u0275\u0275listener("click", function Parent_div_22_div_1_Template_a_click_19_listener() {
      const parent_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteParent(parent_r3.id));
    });
    \u0275\u0275element(20, "i", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 40)(24, "div", 41)(25, "div", 32)(26, "a", 42);
    \u0275\u0275listener("click", function Parent_div_22_div_1_Template_a_click_26_listener($event) {
      const parent_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.viewDetails(parent_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(27, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 44)(29, "h6", 45)(30, "a", 46);
    \u0275\u0275listener("click", function Parent_div_22_div_1_Template_a_click_30_listener($event) {
      const parent_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.viewDetails(parent_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 47);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 48)(35, "div")(36, "p", 49);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 50);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "p", 49);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 50);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 51)(48, "div", 32)(49, "span", 52);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 53);
    \u0275\u0275template(53, Parent_div_22_div_1_ng_container_53_Template, 2, 1, "ng-container", 54)(54, Parent_div_22_div_1_ng_template_54_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "button", 55);
    \u0275\u0275listener("click", function Parent_div_22_div_1_Template_button_click_56_listener() {
      const parent_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(parent_r3));
    });
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const parent_r3 = ctx.$implicit;
    const noChildren_r8 = \u0275\u0275reference(55);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", parent_r3.isActive)("bg-danger", !parent_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", parent_r3.isActive ? \u0275\u0275pipeBind1(5, 20, "PARENTS.ACTIVE") : \u0275\u0275pipeBind1(6, 22, "PARENTS.INACTIVE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 24, "COMMON.EDIT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isAdmin);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 26, "COMMON.DELETE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(parent_r3) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", parent_r3.firstName, " ", parent_r3.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parent_r3.address);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 28, "PARENTS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(parent_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 30, "PARENTS.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(parent_r3.phoneNumber);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 32, "PARENTS.CHILDREN"), " : ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", parent_r3.children && parent_r3.children.length > 0)("ngIfElse", noChildren_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 34, "PARENTS.VIEW_DETAILS"));
  }
}
function Parent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "PARENTS.NO_PARENTS_FOUND"));
  }
}
function Parent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Parent_div_22_div_1_Template, 59, 36, "div", 26)(2, Parent_div_22_div_2_Template, 4, 3, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayedParents)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.displayedParents.length === 0 && !ctx_r3.loading);
  }
}
function Parent_div_23_tr_31_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const parent_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleParentStatus(parent_r10));
    });
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("btn-", parent_r10.isActive)("btn-", !parent_r10.isActive);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-pause-fill", parent_r10.isActive)("bi-play-fill", !parent_r10.isActive);
  }
}
function Parent_div_23_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 67);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_Template_tr_click_0_listener() {
      const parent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(parent_r10));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "img", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 69)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 70);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_Template_div_click_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(15, "button", 71);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_Template_button_click_15_listener() {
      const parent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(parent_r10));
    });
    \u0275\u0275element(16, "i", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 73);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_Template_button_click_17_listener() {
      const parent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editParent(parent_r10));
    });
    \u0275\u0275element(18, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Parent_div_23_tr_31_button_19_Template, 2, 8, "button", 75);
    \u0275\u0275elementStart(20, "button", 76);
    \u0275\u0275listener("click", function Parent_div_23_tr_31_Template_button_click_20_listener() {
      const parent_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteParent(parent_r10.id));
    });
    \u0275\u0275element(21, "i", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const parent_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(parent_r10) || ((parent_r10.gender == null ? null : parent_r10.gender.toLowerCase()) === "female" ? "assets/mother.png" : "assets/father.png"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", parent_r10.firstName, " ", parent_r10.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parent_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parent_r10.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(parent_r10.address || \u0275\u0275pipeBind1(12, 7, "COMMON.NA"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.isAdmin);
  }
}
function Parent_div_23_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "PARENTS.NO_PARENTS_FOUND"), " ");
  }
}
function Parent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 61)(2, "div", 30)(3, "h5");
    \u0275\u0275element(4, "i", 62);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "div", 63)(9, "table", 64)(10, "thead", 65)(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, Parent_div_23_tr_31_Template, 22, 9, "tr", 66)(32, Parent_div_23_tr_32_Template, 4, 3, "tr", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 51)(34, "span", 59);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "PARENTS.LIST_TITLE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "PARENTS.PHOTO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "PARENTS.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "PARENTS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, "PARENTS.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "PARENTS.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "PARENTS.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.displayedParents)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.displayedParents.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 25, "PARENTS.TOTAL_COUNT", \u0275\u0275pureFunction1(28, _c0, ctx_r3.displayedParents.length)));
  }
}
function Parent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 81)(2, "div", 82)(3, "button", 83);
    \u0275\u0275listener("click", function Parent_div_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMore());
    });
    \u0275\u0275element(4, "i", 84);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "PARENTS.LOAD_MORE"), " ");
  }
}
var Parent = class _Parent {
  parentService;
  router;
  translate;
  pageTitleService;
  parents = [];
  filteredParents = [];
  displayedParents = [];
  loading = false;
  itemsPerPage = 9;
  currentPage = 1;
  showExportDropdown = false;
  viewMode = "grid";
  sortBy = "recent-added";
  showSortMenu = false;
  isAdmin = true;
  // TODO: Get from auth service
  searchTerm = "";
  breadcrumbs = [];
  titleActions = [];
  sortOptions = [];
  langChangeSub;
  parentsSub;
  constructor(parentService, router, translate, pageTitleService) {
    this.parentService = parentService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("PARENTS.TITLE"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.setupSortOptions();
    this.loadParents();
    this.parentsSub = this.parentService.parents$.subscribe((parents) => {
      this.parents = parents;
      this.applySort();
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("PARENTS.TITLE"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
      this.setupSortOptions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.parentsSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("PARENTS.TITLE") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            {
              label: this.translate.instant("COMMON.EXPORT_PDF"),
              icon: "bi bi-file-earmark-pdf",
              action: () => this.exportToPDF()
            },
            {
              label: this.translate.instant("COMMON.EXPORT_EXCEL"),
              icon: "bi bi-file-earmark-excel",
              action: () => this.exportToExcel()
            }
          ]
        }
      },
      {
        label: this.translate.instant("PARENTS.ADD_PARENT"),
        class: "",
        action: () => this.router.navigate(["/parents/add"])
      }
    ];
  }
  setupSortOptions() {
    this.sortOptions = [
      { value: "name-asc", label: this.translate.instant("COMMON.SORT_A_TO_Z"), icon: "bi-sort-alpha-down" },
      { value: "name-desc", label: this.translate.instant("COMMON.SORT_Z_TO_A"), icon: "bi-sort-alpha-up" },
      { value: "recent-added", label: this.translate.instant("COMMON.RECENTLY_ADDED"), icon: "bi-calendar-check" },
      { value: "email-asc", label: this.translate.instant("COMMON.SORT_BY_EMAIL"), icon: "bi-envelope" }
    ];
  }
  loadParents() {
    this.loading = true;
    this.parentService.loadParents(this.searchTerm).subscribe({
      next: (parents) => {
        this.parents = parents;
        this.applySort();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading parents");
        this.loading = false;
      }
    });
  }
  searchTimeout;
  onSearch() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.loadParents();
    }, 300);
  }
  editParent(parent) {
    this.router.navigate(["/parents/edit", parent.id]);
  }
  async deleteParent(id) {
    const { default: Swal } = await import("./chunk-EL3QVOEY.js");
    const result = await Swal.fire({
      title: this.translate.instant("PARENTS.DELETE_CONFIRM_TITLE"),
      text: this.translate.instant("PARENTS.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.YES_DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    });
    if (result.isConfirmed) {
      this.parentService.deleteParent(id).subscribe({
        next: () => {
          this.loadParents();
        },
        error: () => {
          console.error("Error deleting parent");
        }
      });
    }
  }
  async toggleParentStatus(parent) {
    if (!parent.isActive) {
      const { default: Swal } = await import("./chunk-EL3QVOEY.js");
      const result = await Swal.fire({
        title: this.translate.instant("PARENTS.ACTIVATE_PARENT"),
        text: this.translate.instant("PARENTS.ACTIVATE_CONFIRM", { name: `${parent.firstName} ${parent.lastName}` }),
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("PARENTS.YES_ACTIVATE")
      });
      if (result.isConfirmed) {
        this.parentService.toggleParentStatus(parent.id, false).subscribe({
          next: () => this.loadParents(),
          error: () => console.error("Error activating parent")
        });
      }
    } else {
      const { default: Swal } = await import("./chunk-EL3QVOEY.js");
      const hasChildren = parent.children && parent.children.length > 0;
      if (hasChildren) {
        const result = await Swal.fire({
          title: this.translate.instant("PARENTS.DEACTIVATE_PARENT"),
          text: this.translate.instant("PARENTS.DEACTIVATE_WITH_CHILDREN", { name: `${parent.firstName} ${parent.lastName}`, count: parent.children.length }),
          icon: "warning",
          showCancelButton: true,
          showDenyButton: true,
          confirmButtonColor: "#dc3545",
          denyButtonColor: "#ffc107",
          cancelButtonColor: "#6c757d",
          confirmButtonText: this.translate.instant("PARENTS.DEACTIVATE_PARENT_AND_CHILDREN"),
          denyButtonText: this.translate.instant("PARENTS.DEACTIVATE_PARENT_ONLY"),
          cancelButtonText: this.translate.instant("COMMON.CANCEL")
        });
        if (result.isConfirmed) {
          this.parentService.toggleParentStatus(parent.id, true).subscribe({
            next: () => this.loadParents(),
            error: () => console.error("Error deactivating parent and children")
          });
        } else if (result.isDenied) {
          this.parentService.toggleParentStatus(parent.id, false).subscribe({
            next: () => this.loadParents(),
            error: () => console.error("Error deactivating parent")
          });
        }
      } else {
        const result = await Swal.fire({
          title: this.translate.instant("PARENTS.DEACTIVATE_PARENT"),
          text: this.translate.instant("PARENTS.DEACTIVATE_CONFIRM", { name: `${parent.firstName} ${parent.lastName}` }),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: this.translate.instant("PARENTS.YES_DEACTIVATE")
        });
        if (result.isConfirmed) {
          this.parentService.toggleParentStatus(parent.id, false).subscribe({
            next: () => this.loadParents(),
            error: () => console.error("Error deactivating parent")
          });
        }
      }
    }
  }
  viewDetails(parent) {
    this.router.navigate(["/parents/detail", parent.id]);
  }
  viewChildDetails(childId) {
    this.router.navigate(["/children/detail", childId]);
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  setSortBy(sortBy) {
    this.sortBy = sortBy;
    this.showSortMenu = false;
    this.applySort();
  }
  onSortChange() {
    this.applySort();
  }
  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }
  applySort() {
    let sorted = [...this.parents];
    switch (this.sortBy) {
      case "name-asc":
        sorted.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`));
        break;
      case "name-desc":
        sorted.sort((a, b) => `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`));
        break;
      case "recent-added":
        sorted.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
        break;
      case "email-asc":
        sorted.sort((a, b) => a.email.localeCompare(b.email));
        break;
    }
    this.filteredParents = sorted;
    this.currentPage = 1;
    this.updateDisplayedParents();
  }
  updateDisplayedParents() {
    const endIndex = this.currentPage * this.itemsPerPage;
    this.displayedParents = this.filteredParents.slice(0, endIndex);
  }
  loadMore() {
    this.currentPage++;
    this.updateDisplayedParents();
  }
  get hasMoreItems() {
    return this.displayedParents.length < this.filteredParents.length;
  }
  getSortLabel() {
    switch (this.sortBy) {
      case "name-asc":
        return this.translate.instant("COMMON.SORT_A_TO_Z");
      case "name-desc":
        return this.translate.instant("COMMON.SORT_Z_TO_A");
      case "recent-added":
        return this.translate.instant("COMMON.RECENTLY_ADDED");
      case "email-asc":
        return this.translate.instant("COMMON.SORT_BY_EMAIL");
      default:
        return this.translate.instant("COMMON.SORT_A_TO_Z");
    }
  }
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  exportToPDF() {
    const data = this.filteredParents.map((parent) => ({
      [this.translate.instant("PARENTS.NAME")]: `${parent.firstName} ${parent.lastName}`,
      [this.translate.instant("PARENTS.EMAIL")]: parent.email,
      [this.translate.instant("PARENTS.PHONE")]: parent.phoneNumber,
      [this.translate.instant("PARENTS.ADDRESS")]: parent.address || this.translate.instant("COMMON.NA"),
      [this.translate.instant("PARENTS.EMERGENCY_CONTACT")]: parent.emergencyContact || this.translate.instant("COMMON.NA")
    }));
    ExportUtil.exportToPDF(data, this.translate.instant("PARENTS.REPORT_TITLE"));
  }
  exportToExcel() {
    const data = this.filteredParents.map((parent) => ({
      [this.translate.instant("PARENTS.NAME")]: `${parent.firstName} ${parent.lastName}`,
      [this.translate.instant("PARENTS.EMAIL")]: parent.email,
      [this.translate.instant("PARENTS.PHONE")]: parent.phoneNumber,
      [this.translate.instant("PARENTS.ADDRESS")]: parent.address || this.translate.instant("COMMON.NA"),
      [this.translate.instant("PARENTS.EMERGENCY_CONTACT")]: parent.emergencyContact || this.translate.instant("COMMON.NA")
    }));
    ExportUtil.exportToExcel(data, this.translate.instant("PARENTS.REPORT_TITLE"));
  }
  // TrackBy function for ngFor performance optimization
  trackById(index, item) {
    return item.id;
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
  static \u0275fac = function Parent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Parent)(\u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Parent, selectors: [["app-parent"]], decls: 25, vars: 34, consts: [["noChildren", ""], [1, "container-fluid", "mt-4"], ["icon", "bi bi-people-fill", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "me-2"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "card", "flex-fill", "card-general", "mb-3"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "badge"], [1, "d-flex", "align-items-center"], [1, "dropdown"], ["href", "#", "data-bs-toggle", "dropdown", 1, "btn", "border-0", "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-pencil-square", "me-2"], [1, "bi", "bi-trash3", "me-2"], [1, "card-body"], [1, "bg-light", "rounded-2", "p-3", "mb-3"], ["href", "#", 1, "avatar", "avatar-lg", "flex-shrink-0", 3, "click"], ["loading", "lazy", "alt", "Parent", "width", "80", "height", "80", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "text-dark", "text-truncate", "mb-0", "title-card__name"], ["href", "#", 3, "click"], [1, "mb-0", "card-age"], [1, "d-flex", "align-items-center", "justify-content-between", "body-information"], [1, "mb-0", "information-title"], [1, "text-dark", "information-description"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted", "me-1"], [1, "d-flex", "align-items-center", 2, "margin-left", "-5px"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-light", "btn-sm", "btn-footer", 3, "click"], [1, "bi", "me-2"], ["loading", "lazy", "class", "rounded-circle child-avatar", "width", "30", "height", "30", "style", "cursor: pointer; margin-left: 5px; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);", 3, "src", "alt", "title", "click", 4, "ngFor", "ngForOf"], ["loading", "lazy", "width", "30", "height", "30", 1, "rounded-circle", "child-avatar", 2, "cursor", "pointer", "margin-left", "5px", "border", "2px solid #fff", "box-shadow", "0 1px 3px rgba(0,0,0,0.1)", 3, "click", "src", "alt", "title"], [1, "text-muted"], [1, "col-12", "text-center"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "bi", "bi-list-task"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "cursor", "pointer", 3, "click"], ["loading", "lazy", "width", "40", "height", "40", "alt", "Parent", 1, "rounded-circle", 3, "src"], [1, "name-last"], [1, "d-flex", "gap-1", 3, "click"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], ["class", "btn btn-sm btn-active", 3, "btn-", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], [1, "btn", "btn-sm", "btn-active", 3, "click"], [1, "bi"], ["colspan", "6", 1, "text-center", "py-4"], [1, "col-md-12"], [1, "load-more", "text-center", "d-flex", "justify-content-center", "mt-4"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"]], template: function Parent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-title-page", 2);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 3)(5, "h4", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275element(10, "i", 7);
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Parent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Parent_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "ng-select", 9);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Parent_Template_ng_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Parent_Template_ng_select_change_13_listener() {
        return ctx.onSortChange();
      });
      \u0275\u0275template(15, Parent_ng_template_15_Template, 4, 4, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "button", 12);
      \u0275\u0275listener("click", function Parent_Template_button_click_17_listener() {
        return ctx.setViewMode("list");
      });
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function Parent_Template_button_click_19_listener() {
        return ctx.setViewMode("grid");
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, Parent_div_21_Template, 5, 3, "div", 16)(22, Parent_div_22_Template, 3, 3, "div", 17)(23, Parent_div_23_Template, 37, 30, "div", 18)(24, Parent_div_24_Template, 7, 3, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 24, "PARENTS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 26, "PARENTS.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 28, "PARENTS.GRID_TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 30, "PARENTS.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275property("items", ctx.sortOptions)("placeholder", \u0275\u0275pipeBind1(14, 32, "COMMON.SORT_BY"))("clearable", false)("searchable", false);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("bg-light", ctx.viewMode === "list")("primary-hover", ctx.viewMode !== "list");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-light", ctx.viewMode === "grid")("primary-hover", ctx.viewMode !== "grid");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid" && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "list" && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasMoreItems && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, TranslatePipe], styles: ["\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=parent.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Parent, [{
    type: Component,
    args: [{ selector: "app-parent", standalone: true, imports: [CommonModule, FormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'PARENTS.TITLE' | translate"\r
    [subtitle]="'PARENTS.SUBTITLE' | translate"\r
    icon="bi bi-people-fill"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- View Controls -->\r
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">\r
    <h4 class="title-filter">{{ 'PARENTS.GRID_TITLE' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search Input -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input\r
          type="text"\r
          class="form-control search-input"\r
          [placeholder]="'PARENTS.SEARCH_PLACEHOLDER' | translate"\r
          [(ngModel)]="searchTerm"\r
          (input)="onSearch()">\r
      </div>\r
\r
      <!-- Sort Select -->\r
      <ng-select\r
        class="filter-select"\r
        [(ngModel)]="sortBy"\r
        [items]="sortOptions"\r
        bindLabel="label"\r
        bindValue="value"\r
        [placeholder]="'COMMON.SORT_BY' | translate"\r
        [clearable]="false"\r
        [searchable]="false"\r
        (change)="onSortChange()">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 me-2">\r
        <button\r
          class="btn btn-icon btn-sm me-1"\r
          [class.bg-light]="viewMode === 'list'"\r
          [class.primary-hover]="viewMode !== 'list'"\r
          (click)="setViewMode('list')">\r
          <i class="bi bi-list-ul"></i>\r
        </button>\r
        <button\r
          class="btn btn-icon btn-sm"\r
          [class.bg-light]="viewMode === 'grid'"\r
          [class.primary-hover]="viewMode !== 'grid'"\r
          (click)="setViewMode('grid')">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'COMMON.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
\r
    <div *ngFor="let parent of displayedParents; trackBy: trackById" class="col-xl-4 col-md-6 d-flex">\r
      <div class="card flex-fill card-general mb-3">\r
        <div class="card-header d-flex align-items-center justify-content-between">\r
          <span class="badge" [class.bg-success]="parent.isActive" [class.bg-danger]="!parent.isActive">\r
            {{ parent.isActive ? ('PARENTS.ACTIVE' | translate) : ('PARENTS.INACTIVE' | translate) }}\r
          </span>\r
          <div class="d-flex align-items-center">\r
            <div class="dropdown">\r
              <a href="#" class="btn border-0 btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0" data-bs-toggle="dropdown">\r
                <i class="bi bi-three-dots-vertical"></i>\r
              </a>\r
              <ul class="dropdown-menu dropdown-menu-end p-3">\r
                <li>\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="editParent(parent)">\r
                    <i class="bi bi-pencil-square me-2"></i>{{ 'COMMON.EDIT' | translate }}\r
                  </a>\r
                </li>\r
                <li *ngIf="isAdmin">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="toggleParentStatus(parent)">\r
                    <i class="bi me-2" [class.bi-pause-fill]="parent.isActive" [class.bi-play-fill]="!parent.isActive"></i>\r
                    {{ parent.isActive ? ('COMMON.DEACTIVATE' | translate) : ('COMMON.ACTIVATE' | translate) }}\r
                  </a>\r
                </li>\r
                <li>\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="deleteParent(parent.id!)">\r
                    <i class="bi bi-trash3 me-2"></i>{{ 'COMMON.DELETE' | translate }}\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <div class="bg-light rounded-2 p-3 mb-3">\r
            <div class="d-flex align-items-center">\r
              <a href="#" class="avatar avatar-lg flex-shrink-0" (click)="viewDetails(parent); $event.preventDefault()">\r
                <img loading="lazy" [src]="getProfilePictureUrl(parent) || 'assets/default-avatar.svg'" class="img-fluid rounded-circle" alt="Parent" width="80" height="80">\r
              </a>\r
              <div class="ms-2">\r
                <h6 class="text-dark text-truncate mb-0 title-card__name">\r
                  <a href="#" (click)="viewDetails(parent); $event.preventDefault()">{{ parent.firstName }} {{ parent.lastName }}</a>\r
                </h6>\r
                <p class="mb-0 card-age">{{ parent.address }}</p>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center justify-content-between body-information">\r
            <div>\r
              <p class="mb-0 information-title">{{ 'PARENTS.EMAIL' | translate }}</p>\r
              <p class="text-dark information-description">{{ parent.email }}</p>\r
            </div>\r
            <div>\r
              <p class="mb-0 information-title">{{ 'PARENTS.PHONE' | translate }}</p>\r
              <p class="text-dark information-description">{{ parent.phoneNumber }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center">\r
            <span class="text-muted me-1">{{ 'PARENTS.CHILDREN' | translate }} : </span>\r
            <div class="d-flex align-items-center" style="margin-left: -5px;">\r
              <ng-container *ngIf="parent.children && parent.children.length > 0; else noChildren">\r
                <img *ngFor="let child of parent.children"\r
                     loading="lazy"\r
                     [src]="getProfilePictureUrl(child) || 'assets/child.png'"\r
                     class="rounded-circle child-avatar"\r
                     width="30"\r
                     height="30"\r
                     [alt]="child.firstName"\r
                     [title]="child.firstName + ' ' + child.lastName"\r
                     style="cursor: pointer; margin-left: 5px; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"\r
                     (click)="viewChildDetails(child.id); $event.stopPropagation()">\r
              </ng-container>\r
              <ng-template #noChildren>\r
                <span class="text-muted">{{ 'PARENTS.NONE' | translate }}</span>\r
              </ng-template>\r
            </div>\r
          </div>\r
          <button class="btn btn-light btn-sm btn-footer" (click)="viewDetails(parent)">{{ 'PARENTS.VIEW_DETAILS' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="displayedParents.length === 0 && !loading" class="col-12 text-center">\r
      <p>{{ 'PARENTS.NO_PARENTS_FOUND' | translate }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewMode === 'list' && !loading">\r
    <div class="card flex-fill card-general card-recently mb-3">\r
      <div class="card-header d-flex align-items-center justify-content-between">\r
        <h5>\r
          <i class="bi bi-list-task"></i>\r
          {{ 'PARENTS.LIST_TITLE' | translate }}\r
        </h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="table-responsive custom-table">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'PARENTS.PHOTO' | translate }}</th>\r
                <th>{{ 'PARENTS.NAME' | translate }}</th>\r
                <th>{{ 'PARENTS.EMAIL' | translate }}</th>\r
                <th>{{ 'PARENTS.PHONE' | translate }}</th>\r
                <th>{{ 'PARENTS.ADDRESS' | translate }}</th>\r
                <th>{{ 'PARENTS.ACTIONS' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let parent of displayedParents; trackBy: trackById" (click)="viewDetails(parent)" style="cursor: pointer;">\r
                <td>\r
                  <img loading="lazy" [src]="getProfilePictureUrl(parent) || (parent.gender?.toLowerCase() === 'female' ? 'assets/mother.png' : 'assets/father.png')"\r
                       class="rounded-circle" width="40" height="40" alt="Parent">\r
                </td>\r
                <td class="name-last">\r
                  <span>{{ parent.firstName }} {{ parent.lastName }}</span>\r
                </td>\r
                <td>{{ parent.email }}</td>\r
                <td>{{ parent.phoneNumber }}</td>\r
                <td>{{ parent.address || ('COMMON.NA' | translate) }}</td>\r
                <td>\r
                  <div class="d-flex gap-1" (click)="$event.stopPropagation()">\r
                    <button class="btn btn-sm btn-view" (click)="viewDetails(parent)">\r
                      <i class="bi bi-eye"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-edit" (click)="editParent(parent)">\r
                      <i class="bi bi-pencil-square"></i>\r
                    </button>\r
                    <button\r
                      *ngIf="isAdmin"\r
                      class="btn btn-sm btn-active"\r
                      [class.btn-]="parent.isActive"\r
                      [class.btn-]="!parent.isActive"\r
                      (click)="toggleParentStatus(parent)">\r
                      <i class="bi" [class.bi-pause-fill]="parent.isActive" [class.bi-play-fill]="!parent.isActive"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-remove" (click)="deleteParent(parent.id!)">\r
                      <i class="bi bi-trash3"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
              <tr *ngIf="displayedParents.length === 0">\r
                <td colspan="6" class="text-center py-4">\r
                  {{ 'PARENTS.NO_PARENTS_FOUND' | translate }}\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      <div class="card-footer d-flex align-items-center justify-content-between">\r
        <span class="text-muted">{{ 'PARENTS.TOTAL_COUNT' | translate: { count: displayedParents.length } }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Load More -->\r
  <div class="row" *ngIf="hasMoreItems && !loading">\r
    <div class="col-md-12">\r
      <div class="load-more text-center d-flex justify-content-center mt-4">\r
        <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMore()">\r
          <i class="bi bi-plus-circle me-2"></i> {{ 'PARENTS.LOAD_MORE' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/parent/parent.scss */\n.btn-group .btn {\n  margin-right: 5px;\n}\n.btn-group .btn:last-child {\n  margin-right: 0;\n}\n.modal.show {\n  display: block !important;\n}\n.avatar {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.avatar img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.card-header h5 {\n  margin: 0;\n}\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n.dropdown-menu {\n  min-width: 150px;\n}\n.card {\n  transition: transform 0.2s;\n}\n.card:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=parent.css.map */\n"] }]
  }], () => [{ type: ParentService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Parent, { className: "Parent", filePath: "src/app/features/parent/parent.ts", lineNumber: 22 });
})();
export {
  Parent
};
//# sourceMappingURL=chunk-C5ADXCQZ.js.map
