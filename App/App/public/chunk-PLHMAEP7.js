import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  ExportUtil
} from "./chunk-DS52PGQ7.js";
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
import "./chunk-2FXTNIWG.js";
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

// src/app/features/educator/educator.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function Educator_ng_template_15_Template(rf, ctx) {
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
function Educator_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDUCATORS.LOADING"));
  }
}
function Educator_div_22_div_1_a_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275listener("click", function Educator_div_22_div_1_a_54_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const educator_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "tel:" + educator_r3.phone, \u0275\u0275sanitizeUrl)("title", educator_r3.firstName + " " + educator_r3.lastName + ": " + educator_r3.phone);
  }
}
function Educator_div_22_div_1_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "COMMON.NO_PHONE"));
  }
}
function Educator_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32)(8, "div", 33)(9, "span", 34);
    \u0275\u0275element(10, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 36)(12, "li", 37)(13, "a", 38);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_a_click_13_listener() {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(educator_r3));
    });
    \u0275\u0275element(14, "i", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li", 37)(18, "a", 38);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_a_click_18_listener() {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editEducator(educator_r3));
    });
    \u0275\u0275element(19, "i", 40);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li", 37)(23, "a", 38);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_a_click_23_listener() {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteEducator(educator_r3.id));
    });
    \u0275\u0275element(24, "i", 41);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(27, "div", 42)(28, "div", 43)(29, "div", 32)(30, "a", 44);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_a_click_30_listener($event) {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.viewDetails(educator_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(31, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 46)(33, "h6", 47)(34, "a", 48);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_a_click_34_listener($event) {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.viewDetails(educator_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 49);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 50)(39, "div")(40, "p", 51);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 52);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "p", 51);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 53);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 54)(53, "div", 32);
    \u0275\u0275template(54, Educator_div_22_div_1_a_54_Template, 2, 2, "a", 55)(55, Educator_div_22_div_1_span_55_Template, 3, 3, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 57);
    \u0275\u0275listener("click", function Educator_div_22_div_1_Template_button_click_56_listener() {
      const educator_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(educator_r3));
    });
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const educator_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", educator_r3.isActive)("bg-danger", !educator_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", educator_r3.isActive ? \u0275\u0275pipeBind1(5, 19, "EDUCATORS.ACTIVE") : \u0275\u0275pipeBind1(6, 21, "EDUCATORS.INACTIVE"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 23, "EDUCATORS.VIEW_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 25, "EDUCATORS.EDIT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 27, "EDUCATORS.DELETE"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(educator_r3) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", educator_r3.firstName, " ", educator_r3.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(educator_r3.specialization);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 29, "EDUCATORS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(educator_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 31, "EDUCATORS.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(educator_r3.phone || \u0275\u0275pipeBind1(51, 33, "COMMON.NA"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", educator_r3.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !educator_r3.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 35, "EDUCATORS.VIEW_DETAILS"));
  }
}
function Educator_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "EDUCATORS.NO_EDUCATORS_FOUND"));
  }
}
function Educator_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, Educator_div_22_div_1_Template, 59, 37, "div", 26)(2, Educator_div_22_div_2_Template, 4, 3, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.displayedEducators)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredEducators.length === 0 && !ctx_r3.loading);
  }
}
function Educator_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "button", 63);
    \u0275\u0275listener("click", function Educator_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMoreEducators());
    });
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "EDUCATORS.LOAD_MORE"), " ");
  }
}
function Educator_div_24_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 73);
    \u0275\u0275listener("click", function Educator_div_24_tr_34_Template_tr_click_0_listener() {
      const educator_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(educator_r8));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 75)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 76);
    \u0275\u0275listener("click", function Educator_div_24_tr_34_Template_div_click_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "button", 77);
    \u0275\u0275listener("click", function Educator_div_24_tr_34_Template_button_click_19_listener() {
      const educator_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetails(educator_r8));
    });
    \u0275\u0275element(20, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 79);
    \u0275\u0275listener("click", function Educator_div_24_tr_34_Template_button_click_21_listener() {
      const educator_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editEducator(educator_r8));
    });
    \u0275\u0275element(22, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 81);
    \u0275\u0275listener("click", function Educator_div_24_tr_34_Template_button_click_23_listener() {
      const educator_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteEducator(educator_r8.id));
    });
    \u0275\u0275element(24, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const educator_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r3.getProfilePictureUrl(educator_r8) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", educator_r8.firstName, " ", educator_r8.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(educator_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(educator_r8.phone || \u0275\u0275pipeBind1(10, 7, "COMMON.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(educator_r8.specialization || \u0275\u0275pipeBind1(13, 9, "COMMON.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 11, educator_r8.hireDate, "shortDate"));
  }
}
function Educator_div_24_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EDUCATORS.NO_EDUCATORS_FOUND"), " ");
  }
}
function Educator_div_24_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 63);
    \u0275\u0275listener("click", function Educator_div_24_div_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.loadMoreEducators());
    });
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "EDUCATORS.LOAD_MORE"), " ");
  }
}
function Educator_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 65)(2, "div", 30)(3, "h5");
    \u0275\u0275element(4, "i", 66);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "div", 67)(9, "table", 68)(10, "thead", 69)(11, "tr")(12, "th");
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
    \u0275\u0275template(34, Educator_div_24_tr_34_Template, 25, 14, "tr", 70)(35, Educator_div_24_tr_35_Template, 4, 3, "tr", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 54)(37, "span", 71);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(41, Educator_div_24_div_41_Template, 5, 3, "div", 72);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "EDUCATORS.EDUCATORS_LIST"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "EDUCATORS.PHOTO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "EDUCATORS.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 21, "EDUCATORS.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, "EDUCATORS.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 25, "EDUCATORS.SPECIALIZATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "EDUCATORS.HIRE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 29, "EDUCATORS.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.displayedEducators)("ngForTrackBy", ctx_r3.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredEducators.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(39, 31, "EDUCATORS.TOTAL"), ": ", ctx_r3.displayedEducators.length, " ", \u0275\u0275pipeBind1(40, 33, "EDUCATORS.EDUCATOR_S"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.hasMoreEducators());
  }
}
var Educator = class _Educator {
  educatorService;
  router;
  translate;
  simpleToast;
  educatorsSub;
  langChangeSub;
  educators = [];
  filteredEducators = [];
  displayedEducators = [];
  loading = false;
  viewMode = "grid";
  sortBy = "recent-hired";
  showSortMenu = false;
  showExportDropdown = false;
  educatorsPerPage = 9;
  currentPage = 1;
  searchTerm = "";
  breadcrumbs = [];
  sortOptions = [];
  titleActions = [];
  constructor(educatorService, router, translate, simpleToast) {
    this.educatorService = educatorService;
    this.router = router;
    this.translate = translate;
    this.simpleToast = simpleToast;
  }
  ngOnInit() {
    this.initBreadcrumbs();
    this.initSortOptions();
    this.initTitleActions();
    this.loadEducators();
    this.educatorsSub = this.educatorService.educators$.subscribe((educators) => {
      this.educators = educators;
      this.filteredEducators = educators;
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.initBreadcrumbs();
      this.initSortOptions();
      this.initTitleActions();
    });
  }
  ngOnDestroy() {
    this.educatorsSub?.unsubscribe();
    this.langChangeSub?.unsubscribe();
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EDUCATORS") }
    ];
  }
  initSortOptions() {
    this.sortOptions = [
      { value: "name-asc", label: this.translate.instant("EDUCATORS.SORT_AZ"), icon: "bi-sort-alpha-down" },
      { value: "name-desc", label: this.translate.instant("EDUCATORS.SORT_ZA"), icon: "bi-sort-alpha-up" },
      { value: "recent-hired", label: this.translate.instant("EDUCATORS.RECENTLY_HIRED"), icon: "bi-calendar-check" }
    ];
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EDUCATORS.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            {
              label: this.translate.instant("EDUCATORS.EXPORT_PDF"),
              icon: "bi bi-file-earmark-pdf",
              action: () => this.exportToPDF()
            },
            {
              label: this.translate.instant("EDUCATORS.EXPORT_EXCEL"),
              icon: "bi bi-file-earmark-excel",
              action: () => this.exportToExcel()
            }
          ]
        }
      },
      {
        label: this.translate.instant("EDUCATORS.ADD_EDUCATOR"),
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/educators/add"])
      }
    ];
  }
  loadEducators() {
    this.loading = true;
    this.educatorService.loadEducators(this.searchTerm).subscribe({
      next: (educators) => {
        this.educators = educators;
        this.applySort();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading educators:", error);
        this.loading = false;
        const errorMessage = this.extractErrorMessage(error);
        this.simpleToast.error(errorMessage);
      }
    });
  }
  searchTimeout;
  onSearch() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.loadEducators();
    }, 300);
  }
  editEducator(educator) {
    this.router.navigate(["/educators/edit", educator.id]);
  }
  deleteEducator(id) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EDUCATORS.DELETE_CONFIRM_TITLE"),
      text: this.translate.instant("EDUCATORS.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("EDUCATORS.YES_DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.educatorService.deleteEducator(id).subscribe({
          next: () => {
            this.simpleToast.success(this.translate.instant("EDUCATORS.DELETE_SUCCESS_TEXT"));
            this.loadEducators();
          },
          error: (error) => {
            console.error("Error deleting educator:", error);
            const errorMessage = this.extractErrorMessage(error, "delete");
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: errorMessage
            });
          }
        });
      }
    });
  }
  viewDetails(educator) {
    this.router.navigate(["/educators/detail", educator.id]);
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
    let sorted = [...this.educators];
    switch (this.sortBy) {
      case "name-asc":
        sorted.sort((a, b) => `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`));
        break;
      case "name-desc":
        sorted.sort((a, b) => `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`));
        break;
      case "recent-hired":
        sorted.sort((a, b) => new Date(b.hireDate).getTime() - new Date(a.hireDate).getTime());
        break;
    }
    this.filteredEducators = sorted;
    this.currentPage = 1;
    this.updateDisplayedEducators();
  }
  updateDisplayedEducators() {
    const endIndex = this.currentPage * this.educatorsPerPage;
    this.displayedEducators = this.filteredEducators.slice(0, endIndex);
  }
  loadMoreEducators() {
    this.currentPage++;
    this.updateDisplayedEducators();
  }
  hasMoreEducators() {
    return this.displayedEducators.length < this.filteredEducators.length;
  }
  getSortLabel() {
    switch (this.sortBy) {
      case "name-asc":
        return this.translate.instant("EDUCATORS.SORT_AZ");
      case "name-desc":
        return this.translate.instant("EDUCATORS.SORT_ZA");
      case "recent-hired":
        return this.translate.instant("EDUCATORS.RECENTLY_HIRED");
      default:
        return this.translate.instant("EDUCATORS.SORT_AZ");
    }
  }
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  exportToPDF() {
    const data = this.filteredEducators.map((educator) => ({
      [this.translate.instant("EDUCATORS.NAME")]: `${educator.firstName} ${educator.lastName}`,
      [this.translate.instant("EDUCATORS.EMAIL")]: educator.email,
      [this.translate.instant("EDUCATORS.PHONE")]: educator.phone || this.translate.instant("COMMON.NA"),
      [this.translate.instant("EDUCATORS.SPECIALIZATION")]: educator.specialization || this.translate.instant("COMMON.NA"),
      [this.translate.instant("EDUCATORS.HIRE_DATE")]: new Date(educator.hireDate).toLocaleDateString(),
      [this.translate.instant("EDUCATORS.STATUS")]: educator.isActive ? this.translate.instant("EDUCATORS.ACTIVE") : this.translate.instant("EDUCATORS.INACTIVE")
    }));
    if (data.length === 0) {
      this.simpleToast.warning(this.translate.instant("EDUCATORS.NO_DATA_EXPORT"));
      return;
    }
    ExportUtil.exportToPDF(data, this.translate.instant("EDUCATORS.REPORT_TITLE"));
  }
  exportToExcel() {
    const data = this.filteredEducators.map((educator) => ({
      [this.translate.instant("EDUCATORS.NAME")]: `${educator.firstName} ${educator.lastName}`,
      [this.translate.instant("EDUCATORS.EMAIL")]: educator.email,
      [this.translate.instant("EDUCATORS.PHONE")]: educator.phone || this.translate.instant("COMMON.NA"),
      [this.translate.instant("EDUCATORS.SPECIALIZATION")]: educator.specialization || this.translate.instant("COMMON.NA"),
      [this.translate.instant("EDUCATORS.HIRE_DATE")]: new Date(educator.hireDate).toLocaleDateString(),
      [this.translate.instant("EDUCATORS.STATUS")]: educator.isActive ? this.translate.instant("EDUCATORS.ACTIVE") : this.translate.instant("EDUCATORS.INACTIVE")
    }));
    if (data.length === 0) {
      this.simpleToast.warning(this.translate.instant("EDUCATORS.NO_DATA_EXPORT"));
      return;
    }
    ExportUtil.exportToExcel(data, this.translate.instant("EDUCATORS.REPORT_TITLE"));
  }
  // TrackBy function for ngFor performance optimization
  trackById(index, item) {
    return item.id;
  }
  /**
   * Get the profile picture URL for an educator, preferring file-based URL over Base64
   */
  getProfilePictureUrl(educator) {
    if (!educator)
      return null;
    if (educator.profilePictureUrl && educator.profilePictureUrl.trim() !== "") {
      return this.getFullUrl(educator.profilePictureUrl);
    }
    if (educator.profilePicture && educator.profilePicture.trim() !== "") {
      return this.getFullUrl(educator.profilePicture);
    }
    return null;
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:"))
      return path;
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  /**
   * Extract user-friendly error message from HTTP error response
   */
  extractErrorMessage(error, operation = "load") {
    const defaultMessage = operation === "delete" ? this.translate.instant("EDUCATORS.DELETE_ERROR") : this.translate.instant("EDUCATORS.LOAD_ERROR");
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
      if (error.error.message) {
        return error.error.message;
      }
      if (error.error.title) {
        return error.error.title;
      }
      if (typeof error.error === "string") {
        return error.error;
      }
      if (error.error.errors) {
        const errorMessages = [];
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            const messages = error.error.errors[key];
            if (Array.isArray(messages)) {
              errorMessages.push(...messages);
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join(". ");
        }
      }
    }
    if (error?.status) {
      return `${defaultMessage} (Error ${error.status})`;
    }
    return defaultMessage;
  }
  static \u0275fac = function Educator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Educator)(\u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Educator, selectors: [["app-educator"]], decls: 25, vars: 34, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-backpack2", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "me-2"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "text-center d-flex justify-content-center mt-4", 4, "ngIf"], [4, "ngIf"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "card", "flex-fill", "card-general", "rounded-1"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "badge"], [1, "d-flex", "align-items-center"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "border-0", "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "dropdown-item_list"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-pencil-square", "me-2"], [1, "bi", "bi-trash3", "me-2"], [1, "card-body"], [1, "bg-light", "rounded-2", "p-3", "mb-3"], ["href", "#", 1, "avatar", "avatar-lg", "flex-shrink-0", 3, "click"], ["loading", "lazy", "alt", "Educator", "width", "80", "height", "80", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "text-dark", "text-truncate", "mb-0", "title-card__name"], ["href", "#", 3, "click"], [1, "mb-0", "card-age"], [1, "d-flex", "justify-content-between", "body-information"], [1, "mb-0", "information-title"], [1, "text-dark", "information-description"], [1, "mb-0", "information-description"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], ["class", "btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action", 3, "href", "title", "click", 4, "ngIf"], ["class", "btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action disabled", "style", "opacity: 0.5; cursor: not-allowed;", 3, "title", 4, "ngIf"], [1, "btn", "btn-light", "btn-sm", "btn-footer", 3, "click"], [1, "btn", "btn-outline-light", "bg-white", "btn-icon", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0", "me-2", "footer-icon-action", 3, "click", "href", "title"], [1, "bi", "bi-telephone"], [1, "btn", "btn-outline-light", "bg-white", "btn-icon", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0", "me-2", "footer-icon-action", "disabled", 2, "opacity", "0.5", "cursor", "not-allowed", 3, "title"], [1, "col-12", "text-center"], [1, "text-center", "d-flex", "justify-content-center", "mt-4"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "bi", "bi-list-task"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-muted"], ["class", "text-center mt-3", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["loading", "lazy", "width", "40", "height", "40", "alt", "Educator", 1, "rounded-circle", 3, "src"], [1, "name-last"], [1, "d-flex", "gap-1", 3, "click"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], ["colspan", "7", 1, "text-center", "py-4"], [1, "text-center", "mt-3"]], template: function Educator_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 2)(5, "h4", 3);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5);
      \u0275\u0275element(10, "i", 6);
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Educator_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function Educator_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "ng-select", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Educator_Template_ng_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Educator_Template_ng_select_change_13_listener() {
        return ctx.onSortChange();
      });
      \u0275\u0275template(15, Educator_ng_template_15_Template, 4, 4, "ng-template", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275listener("click", function Educator_Template_button_click_17_listener() {
        return ctx.setViewMode("list");
      });
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function Educator_Template_button_click_19_listener() {
        return ctx.setViewMode("grid");
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, Educator_div_21_Template, 5, 3, "div", 15)(22, Educator_div_22_Template, 3, 3, "div", 16)(23, Educator_div_23_Template, 5, 3, "div", 17)(24, Educator_div_24_Template, 42, 35, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 24, "EDUCATORS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 26, "EDUCATORS.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 28, "EDUCATORS.EDUCATORS_GRID"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 30, "EDUCATORS.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
      \u0275\u0275property("items", ctx.sortOptions)("placeholder", \u0275\u0275pipeBind1(14, 32, "EDUCATORS.SORT_BY"))("clearable", false)("searchable", false);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("bg-light", ctx.viewMode === "list")("primary-hover", ctx.viewMode !== "list");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-light", ctx.viewMode === "grid")("primary-hover", ctx.viewMode !== "grid");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid" && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid" && !ctx.loading && ctx.hasMoreEducators());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "list" && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, DatePipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Educator, [{
    type: Component,
    args: [{ selector: "app-educator", standalone: true, imports: [CommonModule, FormsModule, TitlePage, NgSelectModule, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'EDUCATORS.TITLE' | translate"\r
    [subtitle]="'EDUCATORS.SUBTITLE' | translate"\r
    icon="bi bi-backpack2"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- View Controls -->\r
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">\r
    <h4 class="title-filter">{{ 'EDUCATORS.EDUCATORS_GRID' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search Input -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input\r
          type="text"\r
          class="form-control search-input"\r
          [placeholder]="'EDUCATORS.SEARCH_PLACEHOLDER' | translate"\r
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
        [placeholder]="'EDUCATORS.SORT_BY' | translate"\r
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
      <span class="visually-hidden">{{ 'EDUCATORS.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
    <div *ngFor="let educator of displayedEducators; trackBy: trackById" class="col-xl-4 col-md-6 d-flex">\r
      <div class="card flex-fill card-general rounded-1">\r
        <div class="card-header d-flex align-items-center justify-content-between">\r
          <span class="badge" [class.bg-success]="educator.isActive" [class.bg-danger]="!educator.isActive">\r
            {{ educator.isActive ? ('EDUCATORS.ACTIVE' | translate) : ('EDUCATORS.INACTIVE' | translate) }}\r
          </span>\r
          <div class="d-flex align-items-center">\r
            <div class="dropdown">\r
              <span class="btn border-0 btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0" data-bs-toggle="dropdown">\r
                <i class="bi bi-three-dots-vertical"></i>\r
              </span>\r
              <ul class="dropdown-menu dropdown-menu-end p-3">\r
                <li class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="viewDetails(educator)">\r
                    <i class="bi bi-eye me-2"></i>{{ 'EDUCATORS.VIEW_DETAILS' | translate }}\r
                  </a>\r
                </li>\r
                <li class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="editEducator(educator)">\r
                    <i class="bi bi-pencil-square me-2"></i>{{ 'EDUCATORS.EDIT' | translate }}\r
                  </a>\r
                </li>\r
                <li class="dropdown-item_list">\r
                  <a class="dropdown-item rounded-1" href="javascript:void(0);" (click)="deleteEducator(educator.id!)">\r
                    <i class="bi bi-trash3 me-2"></i>{{ 'EDUCATORS.DELETE' | translate }}\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <div class="bg-light rounded-2 p-3 mb-3">\r
            <div class="d-flex align-items-center">\r
              <a href="#" class="avatar avatar-lg flex-shrink-0" (click)="viewDetails(educator); $event.preventDefault()">\r
                <img loading="lazy" [src]="getProfilePictureUrl(educator) || 'assets/default-avatar.svg'" class="img-fluid rounded-circle" alt="Educator" width="80" height="80">\r
              </a>\r
              <div class="ms-2">\r
                <h6 class="text-dark text-truncate mb-0 title-card__name">\r
                  <a href="#" (click)="viewDetails(educator); $event.preventDefault()">{{ educator.firstName }} {{ educator.lastName }}</a>\r
                </h6>\r
                <p class="mb-0 card-age">{{ educator.specialization }}</p>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="d-flex justify-content-between body-information">\r
            <div>\r
              <p class="mb-0 information-title">{{ 'EDUCATORS.EMAIL' | translate }}</p>\r
              <p class="text-dark information-description">{{ educator.email }}</p>\r
            </div>\r
            <div>\r
              <p class="mb-0 information-title">{{ 'EDUCATORS.PHONE' | translate }}</p>\r
              <p class="mb-0 information-description">{{ educator.phone || ('COMMON.NA' | translate) }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center">\r
            <a *ngIf="educator.phone"\r
              [href]="'tel:' + educator.phone"\r
              [title]="educator.firstName + ' ' + educator.lastName + ': ' + educator.phone"\r
              class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action"\r
              (click)="$event.stopPropagation()">\r
              <i class="bi bi-telephone"></i>\r
            </a>\r
            <span *ngIf="!educator.phone"\r
              class="btn btn-outline-light bg-white btn-icon d-flex align-items-center justify-content-center rounded-circle p-0 me-2 footer-icon-action disabled"\r
              style="opacity: 0.5; cursor: not-allowed;"\r
              [title]="'COMMON.NO_PHONE' | translate">\r
              <i class="bi bi-telephone"></i>\r
            </span>\r
          </div>\r
          <button class="btn btn-light btn-sm btn-footer" (click)="viewDetails(educator)">{{ 'EDUCATORS.VIEW_DETAILS' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="filteredEducators.length === 0 && !loading" class="col-12 text-center">\r
      <p>{{ 'EDUCATORS.NO_EDUCATORS_FOUND' | translate }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Load More Button for Grid View -->\r
  <div *ngIf="viewMode === 'grid' && !loading && hasMoreEducators()" class="text-center d-flex justify-content-center mt-4">\r
    <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreEducators()">\r
      <i class="bi bi-plus-circle me-2"></i>{{ 'EDUCATORS.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewMode === 'list' && !loading">\r
    <div class="card flex-fill card-general card-recently mb-3">\r
      <div class="card-header d-flex align-items-center justify-content-between">\r
        <h5>\r
          <i class="bi bi-list-task"></i>\r
          {{ 'EDUCATORS.EDUCATORS_LIST' | translate }}\r
        </h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="table-responsive custom-table">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'EDUCATORS.PHOTO' | translate }}</th>\r
                <th>{{ 'EDUCATORS.NAME' | translate }}</th>\r
                <th>{{ 'EDUCATORS.EMAIL' | translate }}</th>\r
                <th>{{ 'EDUCATORS.PHONE' | translate }}</th>\r
                <th>{{ 'EDUCATORS.SPECIALIZATION' | translate }}</th>\r
                <th>{{ 'EDUCATORS.HIRE_DATE' | translate }}</th>\r
                <th>{{ 'EDUCATORS.ACTIONS' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let educator of displayedEducators; trackBy: trackById" (click)="viewDetails(educator)" style="cursor: pointer;">\r
                <td>\r
                  <img loading="lazy" [src]="getProfilePictureUrl(educator) || 'assets/default-avatar.svg'"\r
                       class="rounded-circle" width="40" height="40" alt="Educator">\r
                </td>\r
                <td class="name-last">\r
                  <span>{{ educator.firstName }} {{ educator.lastName }}</span>\r
                </td>\r
                <td>{{ educator.email }}</td>\r
                <td>{{ educator.phone || ('COMMON.NA' | translate) }}</td>\r
                <td>{{ educator.specialization || ('COMMON.NA' | translate) }}</td>\r
                <td>{{ educator.hireDate | date:'shortDate' }}</td>\r
                <td>\r
                  <div class="d-flex gap-1" (click)="$event.stopPropagation()">\r
                    <button class="btn btn-sm btn-view" (click)="viewDetails(educator)">\r
                      <i class="bi bi-eye"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-edit" (click)="editEducator(educator)">\r
                      <i class="bi bi-pencil-square"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-remove" (click)="deleteEducator(educator.id!)">\r
                      <i class="bi bi-trash3"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
              <tr *ngIf="filteredEducators.length === 0">\r
                <td colspan="7" class="text-center py-4">\r
                  {{ 'EDUCATORS.NO_EDUCATORS_FOUND' | translate }}\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      <div class="card-footer d-flex align-items-center justify-content-between">\r
        <span class="text-muted">{{ 'EDUCATORS.TOTAL' | translate }}: {{ displayedEducators.length }} {{ 'EDUCATORS.EDUCATOR_S' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Load More Button for List View -->\r
    <div *ngIf="hasMoreEducators()" class="text-center mt-3">\r
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMoreEducators()">\r
        <i class="bi bi-plus-circle me-2"></i> {{ 'EDUCATORS.LOAD_MORE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: EducatorService }, { type: Router }, { type: TranslateService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Educator, { className: "Educator", filePath: "src/app/features/educator/educator.ts", lineNumber: 23 });
})();
export {
  Educator
};
//# sourceMappingURL=chunk-PLHMAEP7.js.map
