import {
  PermissionService
} from "./chunk-3MPWTHNE.js";
import {
  ExportUtil
} from "./chunk-CAKYQ2FY.js";
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
} from "./chunk-T6BZLT4B.js";
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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/children/children.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function Children_div_0_div_1_div_17_div_1_div_7_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_div_7_li_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const child_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r3));
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.VIEW_DETAILS"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_div_7_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_div_7_li_6_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const child_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.editChild(child_r3));
    });
    \u0275\u0275element(2, "i", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.EDIT"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_div_7_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_div_7_li_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const child_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.toggleChildStatus(child_r3.id));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi bi-toggle-", child_r3.isActive ? "on" : "off", " me-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", child_r3.isActive ? \u0275\u0275pipeBind1(4, 4, "CHILDREN.DEACTIVATE") : \u0275\u0275pipeBind1(5, 6, "CHILDREN.ACTIVATE"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_div_7_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_div_7_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const child_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.deleteChild(child_r3.id));
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.DELETE"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44)(2, "span", 45);
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 47);
    \u0275\u0275template(5, Children_div_0_div_1_div_17_div_1_div_7_li_5_Template, 5, 3, "li", 48)(6, Children_div_0_div_1_div_17_div_1_div_7_li_6_Template, 5, 3, "li", 48)(7, Children_div_0_div_1_div_17_div_1_div_7_li_7_Template, 6, 8, "li", 48)(8, Children_div_0_div_1_div_17_div_1_div_7_li_8_Template, 5, 3, "li", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canDelete());
  }
}
function Children_div_0_div_1_div_17_div_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate2(" ", ctx_r3.calculateAge(child_r3.dateOfBirth).years, " ", \u0275\u0275pipeBind1(1, 2, "CHILDREN.YEARS"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate2(" ", ctx_r3.calculateAge(child_r3.dateOfBirth).months, " ", \u0275\u0275pipeBind1(1, 2, "CHILDREN.MONTHS"), " ");
  }
}
function Children_div_0_div_1_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Children_div_0_div_1_div_17_div_1_div_7_Template, 9, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28)(10, "div", 29)(11, "a", 30);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_Template_a_click_11_listener($event) {
      const child_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      ctx_r3.viewDetails(child_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(12, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32)(14, "h6", 33)(15, "a", 34);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_Template_a_click_15_listener($event) {
      const child_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      ctx_r3.viewDetails(child_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275conditionalCreate(20, Children_div_0_div_1_div_17_div_1_Conditional_20_Template, 2, 4);
    \u0275\u0275conditionalCreate(21, Children_div_0_div_1_div_17_div_1_Conditional_21_Template, 2, 4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 36)(23, "div")(24, "p", 37);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 38);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "p", 37);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 39);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 40)(36, "div", 29)(37, "a", 41);
    \u0275\u0275element(38, "i", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 43);
    \u0275\u0275listener("click", function Children_div_0_div_1_div_17_div_1_Template_button_click_39_listener() {
      const child_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r3));
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", child_r3.isActive)("bg-danger", !child_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r3.isActive ? \u0275\u0275pipeBind1(5, 18, "CHILDREN.ACTIVE") : \u0275\u0275pipeBind1(6, 20, "CHILDREN.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit() || ctx_r3.permissions.canDelete());
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(child_r3), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", child_r3.firstName, " ", child_r3.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 22, "CHILDREN.AGE"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.calculateAge(child_r3.dateOfBirth).years > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.calculateAge(child_r3.dateOfBirth).years <= 0 ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 24, "CHILDREN.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r3.parent == null ? null : child_r3.parent.firstName, " ", child_r3.parent == null ? null : child_r3.parent.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 26, "CHILDREN.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r3.gender);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 28, "CHILDREN.VIEW_DETAILS"));
  }
}
function Children_div_0_div_1_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.userRole === "Parent" ? \u0275\u0275pipeBind1(3, 1, "CHILDREN.NO_CHILDREN_FOUND") : \u0275\u0275pipeBind1(4, 3, "CHILDREN.NO_CHILDREN_REGISTERED"));
  }
}
function Children_div_0_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Children_div_0_div_1_div_17_div_1_Template, 42, 30, "div", 20)(2, Children_div_0_div_1_div_17_div_2_Template, 5, 5, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayedChildren)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredChildren.length === 0 && !ctx_r3.loading);
  }
}
function Children_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275element(4, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 8);
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275element(7, "i", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12);
    \u0275\u0275element(10, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "h5", 15);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 16)(16, "div", 17);
    \u0275\u0275template(17, Children_div_0_div_1_div_17_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 2, "CHILDREN.MY_CHILDREN"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.viewMode === "grid" && !ctx_r3.loading);
  }
}
function Children_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Children_div_0_div_1_Template, 18, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r3.isParent() ? "" : " mt-4");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isParent() && !ctx_r3.loading);
  }
}
function Children_div_1_app_title_page_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 75);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r3.userRole === "Parent" ? \u0275\u0275pipeBind1(1, 4, "CHILDREN.MY_CHILDREN") : \u0275\u0275pipeBind1(2, 6, "CHILDREN.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 8, "CHILDREN.SUBTITLE"))("breadcrumbs", ctx_r3.breadcrumbs)("actions", ctx_r3.titleActions);
  }
}
function Children_div_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r9.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.label);
  }
}
function Children_div_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r10.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.label);
  }
}
function Children_div_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 77);
    \u0275\u0275elementStart(2, "span", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r11.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.label);
  }
}
function Children_div_1_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function Children_div_1_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "CHILDREN.CLEAR_FILTERS"), " ");
  }
}
function Children_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CHILDREN.LOADING"));
  }
}
function Children_div_1_div_28_div_1_div_7_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_div_7_li_5_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const child_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r15));
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.VIEW_DETAILS"), " ");
  }
}
function Children_div_1_div_28_div_1_div_7_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_div_7_li_6_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const child_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editChild(child_r15));
    });
    \u0275\u0275element(2, "i", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.EDIT"), " ");
  }
}
function Children_div_1_div_28_div_1_div_7_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_div_7_li_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const child_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleChildStatus(child_r15.id));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi bi-toggle-", child_r15.isActive ? "on" : "off", " me-2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", child_r15.isActive ? \u0275\u0275pipeBind1(4, 4, "CHILDREN.DEACTIVATE") : \u0275\u0275pipeBind1(5, 6, "CHILDREN.ACTIVATE"), " ");
  }
}
function Children_div_1_div_28_div_1_div_7_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 49)(1, "a", 50);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_div_7_li_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const child_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteChild(child_r15.id));
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.DELETE"), " ");
  }
}
function Children_div_1_div_28_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 44)(2, "span", 87);
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 47);
    \u0275\u0275template(5, Children_div_1_div_28_div_1_div_7_li_5_Template, 5, 3, "li", 48)(6, Children_div_1_div_28_div_1_div_7_li_6_Template, 5, 3, "li", 48)(7, Children_div_1_div_28_div_1_div_7_li_7_Template, 6, 8, "li", 48)(8, Children_div_1_div_28_div_1_div_7_li_8_Template, 5, 3, "li", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canDelete());
  }
}
function Children_div_1_div_28_div_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.calculateAge(child_r15.dateOfBirth).years, " ", \u0275\u0275pipeBind1(1, 2, "CHILDREN.YEARS"), " ");
  }
}
function Children_div_1_div_28_div_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const child_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.calculateAge(child_r15.dateOfBirth).months, " ", \u0275\u0275pipeBind1(1, 2, "CHILDREN.MONTHS"), " ");
  }
}
function Children_div_1_div_28_div_1_a_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 88);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_a_37_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + (child_r15.parent == null ? null : child_r15.parent.phoneNumber), \u0275\u0275sanitizeUrl)("title", ((child_r15.parent == null ? null : child_r15.parent.firstName) || "") + " " + ((child_r15.parent == null ? null : child_r15.parent.lastName) || "") + ": " + ((child_r15.parent == null ? null : child_r15.parent.phoneNumber) || ""));
  }
}
function Children_div_1_div_28_div_1_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementEnd();
  }
}
function Children_div_1_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 84)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Children_div_1_div_28_div_1_div_7_Template, 9, 4, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28)(10, "div", 29)(11, "a", 30);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_Template_a_click_11_listener($event) {
      const child_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.viewDetails(child_r15);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(12, "img", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32)(14, "h6", 33)(15, "a", 34);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_Template_a_click_15_listener($event) {
      const child_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.viewDetails(child_r15);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275conditionalCreate(20, Children_div_1_div_28_div_1_Conditional_20_Template, 2, 4);
    \u0275\u0275conditionalCreate(21, Children_div_1_div_28_div_1_Conditional_21_Template, 2, 4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 36)(23, "div")(24, "p", 37);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 38);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "p", 37);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 39);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 40)(36, "div", 29);
    \u0275\u0275template(37, Children_div_1_div_28_div_1_a_37_Template, 2, 2, "a", 85)(38, Children_div_1_div_28_div_1_span_38_Template, 2, 0, "span", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 43);
    \u0275\u0275listener("click", function Children_div_1_div_28_div_1_Template_button_click_39_listener() {
      const child_r15 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r15));
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", child_r15.isActive)("bg-danger", !child_r15.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r15.isActive ? \u0275\u0275pipeBind1(5, 20, "CHILDREN.ACTIVE") : \u0275\u0275pipeBind1(6, 22, "CHILDREN.INACTIVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit() || ctx_r3.permissions.canDelete());
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(child_r15), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", child_r15.firstName, " ", child_r15.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 24, "CHILDREN.AGE"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.calculateAge(child_r15.dateOfBirth).years > 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.calculateAge(child_r15.dateOfBirth).years <= 0 ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "CHILDREN.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r15.parent == null ? null : child_r15.parent.firstName, " ", child_r15.parent == null ? null : child_r15.parent.lastName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 28, "CHILDREN.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r15.gender);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", child_r15.parent == null ? null : child_r15.parent.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(child_r15.parent == null ? null : child_r15.parent.phoneNumber));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 30, "CHILDREN.VIEW_DETAILS"));
  }
}
function Children_div_1_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.userRole === "Parent" ? \u0275\u0275pipeBind1(3, 1, "CHILDREN.NO_CHILDREN_FOUND") : \u0275\u0275pipeBind1(4, 3, "CHILDREN.NO_CHILDREN_REGISTERED"));
  }
}
function Children_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, Children_div_1_div_28_div_1_Template, 42, 32, "div", 20)(2, Children_div_1_div_28_div_2_Template, 5, 5, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayedChildren)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredChildren.length === 0 && !ctx_r3.loading);
  }
}
function Children_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "button", 91);
    \u0275\u0275listener("click", function Children_div_1_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadMoreChildren());
    });
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "CHILDREN.LOAD_MORE"), " ");
  }
}
function Children_div_1_div_30_tr_34_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 110);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const child_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editChild(child_r22));
    });
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementEnd();
  }
}
function Children_div_1_div_30_tr_34_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const child_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleChildStatus(child_r22.id));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-pause-fill", child_r22.isActive)("bi-play-fill", !child_r22.isActive);
  }
}
function Children_div_1_div_30_tr_34_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const child_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteChild(child_r22.id));
    });
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275elementEnd();
  }
}
function Children_div_1_div_30_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 101);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_Template_tr_click_0_listener() {
      const child_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r22));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "img", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 103)(4, "span");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 104);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_Template_div_click_16_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "button", 105);
    \u0275\u0275listener("click", function Children_div_1_div_30_tr_34_Template_button_click_17_listener() {
      const child_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.viewDetails(child_r22));
    });
    \u0275\u0275element(18, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Children_div_1_div_30_tr_34_button_19_Template, 2, 0, "button", 107)(20, Children_div_1_div_30_tr_34_button_20_Template, 2, 4, "button", 108)(21, Children_div_1_div_30_tr_34_button_21_Template, 2, 0, "button", 109);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r22 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(child_r22), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r22.firstName, " ", child_r22.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getAgeDisplay(child_r22.dateOfBirth));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r22.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", child_r22.parent == null ? null : child_r22.parent.firstName, " ", child_r22.parent == null ? null : child_r22.parent.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 11, child_r22.enrollmentDate, "shortDate"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.permissions.canDelete());
  }
}
function Children_div_1_div_30_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.userRole === "Parent" ? \u0275\u0275pipeBind1(3, 1, "CHILDREN.NO_CHILDREN_FOUND") : \u0275\u0275pipeBind1(4, 3, "CHILDREN.NO_CHILDREN_REGISTERED"), " ");
  }
}
function Children_div_1_div_30_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "button", 91);
    \u0275\u0275listener("click", function Children_div_1_div_30_div_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.loadMoreChildren());
    });
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "CHILDREN.LOAD_MORE"), " ");
  }
}
function Children_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 93)(2, "div", 24)(3, "h5");
    \u0275\u0275element(4, "i", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 95)(9, "table", 96)(10, "thead", 97)(11, "tr")(12, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, Children_div_1_div_30_tr_34_Template, 22, 14, "tr", 98)(35, Children_div_1_div_30_tr_35_Template, 5, 5, "tr", 74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 40)(37, "span", 99);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, Children_div_1_div_30_div_41_Template, 5, 3, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "CHILDREN.CHILDREN_LIST"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "CHILDREN.PHOTO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "CHILDREN.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "CHILDREN.AGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, "CHILDREN.GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 25, "CHILDREN.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "CHILDREN.ENROLLMENT_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "CHILDREN.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.displayedChildren)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredChildren.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(39, 31, "CHILDREN.TOTAL"), ": ", ctx_r3.displayedChildren.length, " ", \u0275\u0275pipeBind1(40, 33, "CHILDREN.CHILD_S"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.hasMoreChildren());
  }
}
function Children_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, Children_div_1_app_title_page_1_Template, 4, 10, "app-title-page", 56);
    \u0275\u0275elementStart(2, "div", 57)(3, "h4", 58);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 59)(7, "div", 60);
    \u0275\u0275element(8, "i", 61);
    \u0275\u0275elementStart(9, "input", 62);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Children_div_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.searchTerm, $event) || (ctx_r3.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Children_div_1_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSearchChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 63)(12, "ng-select", 64);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Children_div_1_Template_ng_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterGender, $event) || (ctx_r3.filterGender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Children_div_1_Template_ng_select_change_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFilterChange());
    });
    \u0275\u0275template(14, Children_div_1_ng_template_14_Template, 4, 4, "ng-template", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ng-select", 64);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Children_div_1_Template_ng_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filterStatus, $event) || (ctx_r3.filterStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Children_div_1_Template_ng_select_change_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFilterChange());
    });
    \u0275\u0275template(17, Children_div_1_ng_template_17_Template, 4, 4, "ng-template", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ng-select", 64);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Children_div_1_Template_ng_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.sortBy, $event) || (ctx_r3.sortBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Children_div_1_Template_ng_select_change_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSortChange());
    });
    \u0275\u0275template(20, Children_div_1_ng_template_20_Template, 4, 4, "ng-template", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, Children_div_1_button_21_Template, 4, 3, "button", 66);
    \u0275\u0275elementStart(22, "div", 67)(23, "button", 68);
    \u0275\u0275listener("click", function Children_div_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setViewMode("list"));
    });
    \u0275\u0275element(24, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 70);
    \u0275\u0275listener("click", function Children_div_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setViewMode("grid"));
    });
    \u0275\u0275element(26, "i", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, Children_div_1_div_27_Template, 5, 3, "div", 72)(28, Children_div_1_div_28_Template, 3, 3, "div", 18)(29, Children_div_1_div_29_Template, 5, 3, "div", 73)(30, Children_div_1_div_30_Template, 42, 35, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isParent());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 32, "CHILDREN.CHILDREN_GRID"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 34, "CHILDREN.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterGender);
    \u0275\u0275property("items", ctx_r3.genderOptions)("placeholder", \u0275\u0275pipeBind1(13, 36, "CHILDREN.FILTER_GENDER"))("clearable", true)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filterStatus);
    \u0275\u0275property("items", ctx_r3.statusOptions)("placeholder", \u0275\u0275pipeBind1(16, 38, "CHILDREN.FILTER_STATUS"))("clearable", true)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.sortBy);
    \u0275\u0275property("items", ctx_r3.sortOptions)("placeholder", \u0275\u0275pipeBind1(19, 40, "CHILDREN.SORT_BY"))("clearable", false)("searchable", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.searchTerm || ctx_r3.filterGender || ctx_r3.filterStatus !== null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r3.viewMode === "list")("primary-hover", ctx_r3.viewMode !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r3.viewMode === "grid")("primary-hover", ctx_r3.viewMode !== "grid");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.viewMode === "grid" && !ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.viewMode === "grid" && !ctx_r3.loading && ctx_r3.hasMoreChildren());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.viewMode === "list" && !ctx_r3.loading);
  }
}
var Children = class _Children {
  childrenService;
  authService;
  router;
  permissions;
  translate;
  simpleToastService;
  childrenSub;
  children = [];
  filteredChildren = [];
  displayedChildren = [];
  loading = false;
  userRole = null;
  viewMode = "grid";
  sortBy = "recent-added";
  showSortMenu = false;
  showExportDropdown = false;
  searchTerm = "";
  childrenPerPage = 9;
  currentPage = 1;
  // Filter values
  filterGender = null;
  filterStatus = null;
  // Options for ng-select
  genderOptions = [
    { value: "Male", label: "Male", icon: "bi-gender-male" },
    { value: "Female", label: "Female", icon: "bi-gender-female" }
  ];
  statusOptions = [
    { value: true, label: "Active", icon: "bi-check-circle" },
    { value: false, label: "Inactive", icon: "bi-x-circle" }
  ];
  sortOptions = [
    { value: "name-asc", label: "A to Z", icon: "bi-sort-alpha-down" },
    { value: "name-desc", label: "Z to A", icon: "bi-sort-alpha-up" },
    { value: "recent-added", label: "Recently Added", icon: "bi-clock-history" },
    { value: "age-asc", label: "Sort by Age", icon: "bi-calendar" }
  ];
  breadcrumbs = [];
  titleActions = [];
  constructor(childrenService, authService, router, permissions, translate, simpleToastService) {
    this.childrenService = childrenService;
    this.authService = authService;
    this.router = router;
    this.permissions = permissions;
    this.translate = translate;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    this.initBreadcrumbs();
    this.initSelectOptions();
    this.setupTitleActions();
    this.loadChildren();
    this.childrenSub = this.childrenService.children$.subscribe((children) => {
      this.children = children;
    });
  }
  ngOnDestroy() {
    this.childrenSub?.unsubscribe();
  }
  isParent() {
    return this.authService.isParent();
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.CHILDREN") }
    ];
  }
  initSelectOptions() {
    this.genderOptions = [
      { value: "Male", label: this.translate.instant("CHILDREN.MALE"), icon: "bi-gender-male" },
      { value: "Female", label: this.translate.instant("CHILDREN.FEMALE"), icon: "bi-gender-female" }
    ];
    this.statusOptions = [
      { value: true, label: this.translate.instant("CHILDREN.ACTIVE"), icon: "bi-check-circle" },
      { value: false, label: this.translate.instant("CHILDREN.INACTIVE"), icon: "bi-x-circle" }
    ];
    this.sortOptions = [
      { value: "name-asc", label: this.translate.instant("CHILDREN.SORT_AZ"), icon: "bi-sort-alpha-down" },
      { value: "name-desc", label: this.translate.instant("CHILDREN.SORT_ZA"), icon: "bi-sort-alpha-up" },
      { value: "recent-added", label: this.translate.instant("CHILDREN.SORT_RECENT"), icon: "bi-clock-history" },
      { value: "age-asc", label: this.translate.instant("CHILDREN.SORT_AGE"), icon: "bi-calendar" }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("CHILDREN.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            {
              label: this.translate.instant("CHILDREN.EXPORT_PDF"),
              icon: "bi bi-file-earmark-pdf",
              action: () => this.exportToPDF()
            },
            {
              label: this.translate.instant("CHILDREN.EXPORT_EXCEL"),
              icon: "bi bi-file-earmark-excel",
              action: () => this.exportToExcel()
            }
          ]
        }
      }
    ];
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.titleActions.push({
        label: this.translate.instant("CHILDREN.ADD_CHILD"),
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/children/add"])
      });
    }
  }
  loadChildren() {
    this.loading = true;
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading children:", error);
        this.loading = false;
        this.simpleToastService.error(this.translate.instant("CHILDREN.LOAD_ERROR"));
      }
    });
  }
  editChild(child) {
    this.router.navigate(["/children/edit", child.id]);
  }
  deleteChild(id) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("CHILDREN.DELETE_CONFIRM_TITLE"),
      text: this.translate.instant("CHILDREN.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("CHILDREN.YES_DELETE"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.childrenService.deleteChild(id).subscribe({
          next: () => {
            this.simpleToastService.success(this.translate.instant("CHILDREN.DELETE_SUCCESS"));
            this.loadChildren();
          },
          error: (error) => {
            console.error("Error deleting child:", error);
            this.simpleToastService.error(this.translate.instant("CHILDREN.DELETE_ERROR"));
          }
        });
      }
    });
  }
  viewDetails(child) {
    this.router.navigate(["/children/detail", child.id]);
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  onSortChange() {
    this.applyFilters();
  }
  onFilterChange() {
    this.applyFilters();
  }
  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }
  setSortBy(sortBy) {
    this.sortBy = sortBy;
    this.showSortMenu = false;
    this.applyFilters();
  }
  applyFilters() {
    let sorted = [...this.children];
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      sorted = sorted.filter((child) => `${child.firstName} ${child.lastName}`.toLowerCase().includes(term) || child.gender?.toLowerCase().includes(term) || child.parent && `${child.parent.firstName} ${child.parent.lastName}`.toLowerCase().includes(term));
    }
    if (this.filterGender) {
      sorted = sorted.filter((child) => child.gender === this.filterGender);
    }
    if (this.filterStatus !== null) {
      sorted = sorted.filter((child) => child.isActive === this.filterStatus);
    }
    switch (this.sortBy) {
      case "name-asc":
        sorted.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`));
        break;
      case "name-desc":
        sorted.sort((a, b) => `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`));
        break;
      case "recent-added":
        sorted.sort((a, b) => new Date(b.enrollmentDate || "").getTime() - new Date(a.enrollmentDate || "").getTime());
        break;
      case "age-asc":
        sorted.sort((a, b) => this.getAge(a.dateOfBirth) - this.getAge(b.dateOfBirth));
        break;
    }
    this.filteredChildren = sorted;
    this.currentPage = 1;
    this.updateDisplayedChildren();
  }
  // Keep for backwards compatibility
  applySort() {
    this.applyFilters();
  }
  clearFilters() {
    this.searchTerm = "";
    this.filterGender = null;
    this.filterStatus = null;
    this.sortBy = "recent-added";
    this.applyFilters();
  }
  updateDisplayedChildren() {
    const endIndex = this.currentPage * this.childrenPerPage;
    this.displayedChildren = this.filteredChildren.slice(0, endIndex);
  }
  loadMoreChildren() {
    this.currentPage++;
    this.updateDisplayedChildren();
  }
  hasMoreChildren() {
    return this.displayedChildren.length < this.filteredChildren.length;
  }
  onSearchChange() {
    this.applyFilters();
  }
  getSortLabel() {
    const option = this.sortOptions.find((o) => o.value === this.sortBy);
    return option ? option.label : this.translate.instant("CHILDREN.SORT_AZ");
  }
  getAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  getAgeDisplay(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || months === 0 && today.getDate() < birthDate.getDate()) {
      years--;
      months += 12;
    }
    if (today.getDate() < birthDate.getDate()) {
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
    }
    if (years === 0) {
      return months === 1 ? "1 month old" : `${months} months old`;
    }
    return years === 1 ? "1 year old" : `${years} years old`;
  }
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  exportToPDF() {
    const data = this.filteredChildren.map((child) => ({
      "Name": `${child.firstName} ${child.lastName}`,
      "Age": this.getAge(child.dateOfBirth),
      "Gender": child.gender,
      "Parent": child.parent ? `${child.parent.firstName} ${child.parent.lastName}` : "N/A",
      "Enrollment Date": child.enrollmentDate ? new Date(child.enrollmentDate).toLocaleDateString() : "N/A",
      "Allergies": child.allergies || "None"
    }));
    ExportUtil.exportToPDF(data, "Children Report");
  }
  exportToExcel() {
    const data = this.filteredChildren.map((child) => ({
      "Name": `${child.firstName} ${child.lastName}`,
      "Age": this.getAge(child.dateOfBirth),
      "Gender": child.gender,
      "Parent": child.parent ? `${child.parent.firstName} ${child.parent.lastName}` : "N/A",
      "Enrollment Date": child.enrollmentDate ? new Date(child.enrollmentDate).toLocaleDateString() : "N/A",
      "Allergies": child.allergies || "None"
    }));
    ExportUtil.exportToExcel(data, "Children Report");
  }
  toggleChildStatus(id) {
    this.childrenService.toggleChildStatus(id).subscribe({
      next: () => {
        this.simpleToastService.success(this.translate.instant("CHILDREN.STATUS_UPDATED"));
        this.loadChildren();
      },
      error: (error) => {
        console.error("Error toggling child status:", error);
        this.simpleToastService.error(this.translate.instant("CHILDREN.STATUS_ERROR"));
      }
    });
  }
  // TrackBy function for ngFor performance optimization
  trackById(index, item) {
    return item.id;
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
  /**
   * Get the profile picture URL for a child, preferring file-based URL over Base64
   */
  getProfilePictureUrl(child, defaultPicture = "assets/child.png") {
    if (!child)
      return defaultPicture;
    if (child.profilePictureUrl && child.profilePictureUrl.trim() !== "") {
      return this.getFullUrl(child.profilePictureUrl);
    }
    if (child.profilePicture && child.profilePicture.trim() !== "") {
      return child.profilePicture;
    }
    return defaultPicture;
  }
  /**
   * Convert a relative path to a full URL with the API base
   */
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:")) {
      return path;
    }
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  static \u0275fac = function Children_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Children)(\u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Children, selectors: [["app-children"]], decls: 2, vars: 2, consts: [[3, "class", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], ["class", "parent-detailchild font-inter", 4, "ngIf"], [1, "parent-detailchild", "font-inter"], [1, "header-info"], [1, "title-icons", "mb-3"], [1, "page-back"], [1, "bi", "bi-arrow-left"], [1, "title-page"], [1, "page-setting"], [1, "bi", "bi-gear"], [1, "d-flex", "image-name", "row_direction"], [1, "d-flex", "image-active"], ["loading", "lazy", "src", "assets/child.png", "alt", "Parent Photo", 1, "img-fluid"], [1, "overflow-hidden"], [1, "name"], [1, "body", "container-fluid"], [1, "main-information"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "card", "flex-fill", "card-general", "rounded-1"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "badge"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "card-body"], [1, "bg-light", "rounded-2", "p-3", "mb-3"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "avatar", "avatar-lg", "flex-shrink-0", 3, "click"], ["loading", "lazy", "alt", "Child", "width", "80", "height", "80", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "text-dark", "text-truncate", "mb-0", "title-card__name"], ["href", "#", 3, "click"], [1, "mb-0", "card-age"], [1, "d-flex", "justify-content-between", "body-information"], [1, "mb-0", "information-title"], [1, "text-dark", "information-description"], [1, "mb-0", "information-description"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], ["href", "#", 1, "btn", "btn-outline-light", "bg-white", "btn-icon", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0", "me-2", "footer-icon-action"], [1, "bi", "bi-telephone"], [1, "btn", "btn-light", "btn-sm", "btn-footer", 3, "click"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "border-0", "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["class", "dropdown-item_list", 4, "ngIf"], [1, "dropdown-item_list"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-pencil-square", "me-2"], [1, "bi", "bi-trash3", "me-2"], [1, "col-12", "text-center"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-person-fill", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "placeholder", "ngModel"], [1, "input-with-icon"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "me-2"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], ["class", "text-center", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], [4, "ngIf"], ["icon", "bi bi-person-fill", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-x-circle", "me-1"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "card", "flex-fill", "card-general"], ["class", "btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action", 3, "href", "title", "click", 4, "ngIf"], ["class", "btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action disabled", "style", "opacity: 0.5; cursor: not-allowed;", 4, "ngIf"], ["data-bs-toggle", "dropdown", 1, "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "p-0"], [1, "btn", "btn-outline-light", "bg-white", "btn-icon", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0", "me-2", "footer-icon-action", 3, "click", "href", "title"], [1, "btn", "btn-outline-light", "bg-white", "btn-icon", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0", "me-2", "footer-icon-action", "disabled", 2, "opacity", "0.5", "cursor", "not-allowed"], [1, "text-center", "mt-4"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "bi", "bi-list-task"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-muted"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["loading", "lazy", "width", "40", "height", "40", "alt", "Child", 1, "rounded-circle", 3, "src"], [1, "name-last"], [1, "d-flex", "gap-1", 3, "click"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], ["class", "btn btn-sm btn-edit", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-active", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-remove", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-active", 3, "click"], [1, "bi"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], ["colspan", "7", 1, "text-center", "py-4"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"]], template: function Children_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Children_div_0_Template, 2, 3, "div", 0)(1, Children_div_1_Template, 31, 42, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, DatePipe, TranslatePipe], styles: ["\n\n  .parent-detailchild .header-info {\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=children.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Children, [{
    type: Component,
    args: [{ selector: "app-children", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule, NgSelectModule], template: `<div *ngIf="isParent()" [class]="isParent() ? '' : ' mt-4'">\r
  <div *ngIf="isParent() && !loading" class="parent-detailchild font-inter">\r
    <div class="header-info">\r
      <div class="title-icons mb-3">\r
        <div class="page-back">\r
          <i class="bi bi-arrow-left"></i>\r
        </div>\r
        <div class="title-page">\r
\r
        </div>\r
        <div class="page-setting">\r
          <i class="bi bi-gear"></i>\r
        </div>\r
      </div>\r
      <div class="d-flex image-name row_direction">\r
        <div class="d-flex image-active">\r
          <img loading="lazy" src="assets/child.png" class="img-fluid" alt="Parent Photo">\r
        </div>\r
        <div class="overflow-hidden">\r
          <h5 class="name">{{ 'CHILDREN.MY_CHILDREN' | translate }}</h5>\r
        </div>\r
      </div>\r
\r
    </div>\r
    <div class="body container-fluid">\r
      <div class="main-information">\r
        <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
          <div *ngFor="let child of displayedChildren; trackBy: trackById" class="col-xl-4 col-md-6 d-flex">\r
            <div class="card flex-fill card-general rounded-1">\r
              <div class="card-header d-flex align-items-center justify-content-between">\r
                <span class="badge" [class.bg-success]="child.isActive" [class.bg-danger]="!child.isActive">\r
                  {{ child.isActive ? ('CHILDREN.ACTIVE' | translate) : ('CHILDREN.INACTIVE' | translate) }}\r
                </span>\r
                <div class="d-flex align-items-center" *ngIf="permissions.canEdit() || permissions.canDelete()">\r
                  <div class="dropdown">\r
                    <span\r
                      class="btn border-0 btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"\r
                      data-bs-toggle="dropdown">\r
                      <i class="bi bi-three-dots-vertical"></i>\r
                    </span>\r
                    <ul class="dropdown-menu dropdown-menu-end p-3">\r
                      <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="viewDetails(child)">\r
                          <i class="bi bi-eye me-2"></i>{{ 'CHILDREN.VIEW_DETAILS' | translate }}\r
                        </a>\r
                      <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="editChild(child)">\r
                          <i class="bi bi-pencil-square me-2"></i>{{ 'CHILDREN.EDIT' | translate }}\r
                        </a>\r
                      </li>\r
                      <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                        <a class="dropdown-item rounded-1" href="javascript:void(0);"\r
                          (click)="toggleChildStatus(child.id!)">\r
                          <i class="bi bi-toggle-{{ child.isActive ? 'on' : 'off' }} me-2"></i>{{ child.isActive ?\r
                          ('CHILDREN.DEACTIVATE' | translate) : ('CHILDREN.ACTIVATE' | translate) }}\r
                        </a>\r
                      </li>\r
                      <li *ngIf="permissions.canDelete()" class="dropdown-item_list">\r
                        <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="deleteChild(child.id!)">\r
                          <i class="bi bi-trash3 me-2"></i>{{ 'CHILDREN.DELETE' | translate }}\r
                        </a>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="card-body">\r
                <div class="bg-light rounded-2 p-3 mb-3">\r
                  <div class="d-flex align-items-center">\r
                    <a href="#" class="avatar avatar-lg flex-shrink-0"\r
                      (click)="viewDetails(child); $event.preventDefault()">\r
                      <img loading="lazy" [src]="getProfilePictureUrl(child)"\r
                        class="img-fluid rounded-circle" alt="Child" width="80" height="80">\r
                    </a>\r
                    <div class="ms-2">\r
                      <h6 class="text-dark text-truncate mb-0 title-card__name">\r
                        <a href="#" (click)="viewDetails(child); $event.preventDefault()">{{ child.firstName }} {{\r
                          child.lastName }}</a>\r
                      </h6>\r
                      <p class="mb-0 card-age">{{ 'CHILDREN.AGE' | translate }}:\r
                        @if( calculateAge(child.dateOfBirth).years > 0){\r
                        {{ calculateAge(child.dateOfBirth).years}} {{ 'CHILDREN.YEARS' | translate }}\r
                        }\r
                        @if( calculateAge(child.dateOfBirth).years <= 0){ {{ calculateAge(child.dateOfBirth).months}}\r
                          {{ 'CHILDREN.MONTHS' | translate }} } \r
                        </p>\r
\r
                    </div>\r
                  </div>\r
                </div>\r
                <div class="d-flex  justify-content-between body-information">\r
                  <div>\r
                    <p class="mb-0 information-title">{{ 'CHILDREN.PARENT' | translate }}</p>\r
                    <p class="text-dark information-description">{{ child.parent?.firstName }} {{ child.parent?.lastName\r
                      }}</p>\r
                  </div>\r
                  <div>\r
                    <p class="mb-0 information-title">{{ 'CHILDREN.GENDER' | translate }}</p>\r
                    <p class="mb-0 information-description">{{ child.gender }}</p>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="card-footer d-flex align-items-center justify-content-between">\r
                <div class="d-flex align-items-center">\r
                  <a href="#"\r
                    class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action"><i\r
                      class="bi bi-telephone"></i></a>\r
                </div>\r
                <button class="btn btn-light btn-sm btn-footer" (click)="viewDetails(child)">{{ 'CHILDREN.VIEW_DETAILS'\r
                  | translate }}</button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="filteredChildren.length === 0 && !loading" class="col-12 text-center">\r
            <p>{{ userRole === 'Parent' ? ('CHILDREN.NO_CHILDREN_FOUND' | translate) :\r
              ('CHILDREN.NO_CHILDREN_REGISTERED' | translate) }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="container-fluid mt-4" *ngIf="!isParent()">\r
  <app-title-page *ngIf="!isParent()"\r
    [title]="userRole === 'Parent' ? ('CHILDREN.MY_CHILDREN' | translate) : ('CHILDREN.TITLE' | translate)"\r
    [subtitle]="'CHILDREN.SUBTITLE' | translate" icon="bi bi-person-fill" [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- View Controls -->\r
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">\r
    <h4 class="title-filter">{{ 'CHILDREN.CHILDREN_GRID' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search Input -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input type="text" class="form-control search-input" [placeholder]="'CHILDREN.SEARCH_PLACEHOLDER' | translate"\r
          [(ngModel)]="searchTerm" (ngModelChange)="onSearchChange()">\r
      </div>\r
\r
      <!-- Gender Filter -->\r
      <div class="input-with-icon">\r
        <ng-select class="filter-select" [(ngModel)]="filterGender" [items]="genderOptions" bindLabel="label"\r
          bindValue="value" [placeholder]="'CHILDREN.FILTER_GENDER' | translate" [clearable]="true" [searchable]="false"\r
          (change)="onFilterChange()">\r
          <ng-template ng-option-tmp let-item="item">\r
            <div class="option-with-image">\r
              <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
              <span class="option-title">{{ item.label }}</span>\r
            </div>\r
          </ng-template>\r
        </ng-select>\r
      </div>\r
\r
      <!-- Status Filter -->\r
      <ng-select class="filter-select" [(ngModel)]="filterStatus" [items]="statusOptions" bindLabel="label"\r
        bindValue="value" [placeholder]="'CHILDREN.FILTER_STATUS' | translate" [clearable]="true" [searchable]="false"\r
        (change)="onFilterChange()">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- Sort Select -->\r
      <ng-select class="filter-select" [(ngModel)]="sortBy" [items]="sortOptions" bindLabel="label" bindValue="value"\r
        [placeholder]="'CHILDREN.SORT_BY' | translate" [clearable]="false" [searchable]="false"\r
        (change)="onSortChange()">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- Clear Filters -->\r
      <button *ngIf="searchTerm || filterGender || filterStatus !== null" class="btn btn-outline-secondary btn-sm"\r
        (click)="clearFilters()">\r
        <i class="bi bi-x-circle me-1"></i>{{ 'CHILDREN.CLEAR_FILTERS' | translate }}\r
      </button>\r
\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 me-2">\r
        <button class="btn btn-icon btn-sm me-1" [class.bg-light]="viewMode === 'list'"\r
          [class.primary-hover]="viewMode !== 'list'" (click)="setViewMode('list')">\r
          <i class="bi bi-list-ul"></i>\r
        </button>\r
        <button class="btn btn-icon btn-sm" [class.bg-light]="viewMode === 'grid'"\r
          [class.primary-hover]="viewMode !== 'grid'" (click)="setViewMode('grid')">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'CHILDREN.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
    <div *ngFor="let child of displayedChildren; trackBy: trackById" class="col-xl-4 col-md-6 d-flex">\r
      <div class="card flex-fill card-general">\r
        <div class="card-header d-flex align-items-center justify-content-between">\r
          <span class="badge" [class.bg-success]="child.isActive" [class.bg-danger]="!child.isActive">\r
            {{ child.isActive ? ('CHILDREN.ACTIVE' | translate) : ('CHILDREN.INACTIVE' | translate) }}\r
          </span>\r
          <div class="d-flex align-items-center" *ngIf="permissions.canEdit() || permissions.canDelete()">\r
            <div class="dropdown">\r
              <span class=" btn-white btn-icon btn-sm d-flex align-items-center justify-content-center p-0"\r
                data-bs-toggle="dropdown">\r
                <i class="bi bi-three-dots-vertical"></i>\r
              </span>\r
              <ul class="dropdown-menu dropdown-menu-end p-3">\r
                <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="viewDetails(child)">\r
                    <i class="bi bi-eye me-2"></i>{{ 'CHILDREN.VIEW_DETAILS' | translate }}\r
                  </a>\r
                <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="editChild(child)">\r
                    <i class="bi bi-pencil-square me-2"></i>{{ 'CHILDREN.EDIT' | translate }}\r
                  </a>\r
                </li>\r
                <li *ngIf="permissions.canEdit()" class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="toggleChildStatus(child.id!)">\r
                    <i class="bi bi-toggle-{{ child.isActive ? 'on' : 'off' }} me-2"></i>{{ child.isActive ?\r
                    ('CHILDREN.DEACTIVATE' | translate) : ('CHILDREN.ACTIVATE' | translate) }}\r
                  </a>\r
                </li>\r
                <li *ngIf="permissions.canDelete()" class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="deleteChild(child.id!)">\r
                    <i class="bi bi-trash3 me-2"></i>{{ 'CHILDREN.DELETE' | translate }}\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <div class="bg-light rounded-2 p-3 mb-3">\r
            <div class="d-flex align-items-center">\r
              <a href="#" class="avatar avatar-lg flex-shrink-0" (click)="viewDetails(child); $event.preventDefault()">\r
                <img loading="lazy" [src]="getProfilePictureUrl(child)" class="img-fluid rounded-circle"\r
                  alt="Child" width="80" height="80">\r
              </a>\r
              <div class="ms-2">\r
                <h6 class="text-dark text-truncate mb-0 title-card__name">\r
                  <a href="#" (click)="viewDetails(child); $event.preventDefault()">{{ child.firstName }} {{\r
                    child.lastName }}</a>\r
                </h6>\r
                <p class="mb-0 card-age">{{ 'CHILDREN.AGE' | translate }}:\r
                  @if( calculateAge(child.dateOfBirth).years > 0){\r
                  {{ calculateAge(child.dateOfBirth).years}} {{ 'CHILDREN.YEARS' | translate }}\r
                  }\r
                  @if( calculateAge(child.dateOfBirth).years <= 0){ {{ calculateAge(child.dateOfBirth).months}}\r
                    {{ 'CHILDREN.MONTHS' | translate }} } </p>\r
\r
              </div>\r
            </div>\r
          </div>\r
          <div class="d-flex  justify-content-between body-information">\r
            <div>\r
              <p class="mb-0 information-title">{{ 'CHILDREN.PARENT' | translate }}</p>\r
              <p class="text-dark information-description">{{ child.parent?.firstName }} {{ child.parent?.lastName }}\r
              </p>\r
            </div>\r
            <div>\r
              <p class="mb-0 information-title">{{ 'CHILDREN.GENDER' | translate }}</p>\r
              <p class="mb-0 information-description">{{ child.gender }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center">\r
            <a *ngIf="child.parent?.phoneNumber"\r
              [href]="'tel:' + child.parent?.phoneNumber"\r
              [title]="(child.parent?.firstName || '') + ' ' + (child.parent?.lastName || '') + ': ' + (child.parent?.phoneNumber || '')"\r
              class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action"\r
              (click)="$event.stopPropagation()">\r
              <i class="bi bi-telephone"></i>\r
            </a>\r
            <span *ngIf="!child.parent?.phoneNumber"\r
              class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action disabled"\r
              style="opacity: 0.5; cursor: not-allowed;">\r
              <i class="bi bi-telephone"></i>\r
            </span>\r
          </div>\r
          <button class="btn btn-light btn-sm btn-footer" (click)="viewDetails(child)">{{ 'CHILDREN.VIEW_DETAILS' |\r
            translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="filteredChildren.length === 0 && !loading" class="col-12 text-center">\r
      <p>{{ userRole === 'Parent' ? ('CHILDREN.NO_CHILDREN_FOUND' | translate) : ('CHILDREN.NO_CHILDREN_REGISTERED' |\r
        translate) }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Load More Button for Grid View -->\r
  <div *ngIf="viewMode === 'grid' && !loading && hasMoreChildren()" class="text-center mt-4">\r
    <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreChildren()">\r
      <i class="bi bi-plus-circle me-2"></i>{{ 'CHILDREN.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewMode === 'list' && !loading">\r
    <div class="card flex-fill card-general card-recently mb-3">\r
      <div class="card-header d-flex align-items-center justify-content-between">\r
        <h5>\r
          <i class="bi bi-list-task"></i>\r
          {{ 'CHILDREN.CHILDREN_LIST' | translate }}\r
        </h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="table-responsive custom-table">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'CHILDREN.PHOTO' | translate }}</th>\r
                <th>{{ 'CHILDREN.NAME' | translate }}</th>\r
                <th>{{ 'CHILDREN.AGE' | translate }}</th>\r
                <th>{{ 'CHILDREN.GENDER' | translate }}</th>\r
                <th>{{ 'CHILDREN.PARENT' | translate }}</th>\r
                <th>{{ 'CHILDREN.ENROLLMENT_DATE' | translate }}</th>\r
                <th>{{ 'CHILDREN.ACTIONS' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let child of displayedChildren; trackBy: trackById" (click)="viewDetails(child)"\r
                style="cursor: pointer;">\r
                <td>\r
                  <img loading="lazy" [src]="getProfilePictureUrl(child)" class="rounded-circle"\r
                    width="40" height="40" alt="Child">\r
                </td>\r
                <td class="name-last">\r
                  <span>{{ child.firstName }} {{ child.lastName }}</span>\r
                </td>\r
                <td>{{ getAgeDisplay(child.dateOfBirth) }}</td>\r
                <td>{{ child.gender }}</td>\r
                <td>{{ child.parent?.firstName }} {{ child.parent?.lastName }}</td>\r
                <td>{{ child.enrollmentDate | date:'shortDate' }}</td>\r
                <td>\r
                  <div class="d-flex gap-1" (click)="$event.stopPropagation()">\r
                    <button class="btn btn-sm btn-view" (click)="viewDetails(child)">\r
                      <i class="bi bi-eye"></i>\r
                    </button>\r
                    <button *ngIf="permissions.canEdit()" class="btn btn-sm btn-edit" (click)="editChild(child)">\r
                      <i class="bi bi-pencil-square"></i>\r
                    </button>\r
                    <button *ngIf="permissions.canEdit()" class="btn btn-sm btn-active"\r
                      (click)="toggleChildStatus(child.id!)">\r
                      <i class="bi" [class.bi-pause-fill]="child.isActive" [class.bi-play-fill]="!child.isActive"></i>\r
                    </button>\r
                    <button *ngIf="permissions.canDelete()" class="btn btn-sm btn-remove"\r
                      (click)="deleteChild(child.id!)">\r
                      <i class="bi bi-trash3"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
              <tr *ngIf="filteredChildren.length === 0">\r
                <td colspan="7" class="text-center py-4">\r
                  {{ userRole === 'Parent' ? ('CHILDREN.NO_CHILDREN_FOUND' | translate) :\r
                  ('CHILDREN.NO_CHILDREN_REGISTERED' | translate) }}\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      <div class="card-footer d-flex align-items-center justify-content-between">\r
        <span class="text-muted">{{ 'CHILDREN.TOTAL' | translate }}: {{ displayedChildren.length }} {{\r
          'CHILDREN.CHILD_S' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Load More Button for List View -->\r
    <div *ngIf="hasMoreChildren()" class="text-center d-flex justify-content-center mt-3">\r
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreChildren()">\r
        <i class="bi bi-plus-circle me-2"></i> {{ 'CHILDREN.LOAD_MORE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
\r
\r
</div>`, styles: ["/* src/app/features/children/children.scss */\n::ng-deep .parent-detailchild .header-info {\n  margin-bottom: 55px;\n}\n/*# sourceMappingURL=children.css.map */\n"] }]
  }], () => [{ type: ChildrenService }, { type: AuthService }, { type: Router }, { type: PermissionService }, { type: TranslateService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Children, { className: "Children", filePath: "src/app/features/children/children.ts", lineNumber: 25 });
})();
export {
  Children
};
//# sourceMappingURL=chunk-E3LJAAYA.js.map
