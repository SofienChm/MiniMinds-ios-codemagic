import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  Component,
  Input,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";

// src/app/shared/layouts/title-page/title-page.ts
function TitlePage_div_1_nav_7_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", crumb_r1.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", crumb_r1.label, " ");
  }
}
function TitlePage_div_1_nav_7_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", crumb_r1.label, " ");
  }
}
function TitlePage_div_1_nav_7_li_2_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function TitlePage_div_1_nav_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, TitlePage_div_1_nav_7_li_2_a_1_Template, 2, 2, "a", 12)(2, TitlePage_div_1_nav_7_li_2_span_2_Template, 2, 1, "span", 13)(3, TitlePage_div_1_nav_7_li_2_i_3_Template, 1, 0, "i", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    \u0275\u0275classProp("active", last_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", crumb_r1.url && !last_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !crumb_r1.url || last_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r2);
  }
}
function TitlePage_div_1_nav_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 10)(1, "ol");
    \u0275\u0275template(2, TitlePage_div_1_nav_7_li_2_Template, 4, 5, "li", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.breadcrumbs);
  }
}
function TitlePage_div_1_div_8_div_1_button_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
  }
}
function TitlePage_div_1_div_8_div_1_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const action_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(action_r5.icon + " me-2");
  }
}
function TitlePage_div_1_div_8_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TitlePage_div_1_div_8_div_1_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const action_r5 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(action_r5.action());
    });
    \u0275\u0275template(1, TitlePage_div_1_div_8_div_1_button_1_i_1_Template, 1, 0, "i", 23)(2, TitlePage_div_1_div_8_div_1_button_1_i_2_Template, 1, 2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("action-btn custom-btn-2 " + (action_r5.class || "btn-add-global-2"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !action_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r5.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r5.label, " ");
  }
}
function TitlePage_div_1_div_8_div_1_div_2_li_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r9.icon + " me-2");
  }
}
function TitlePage_div_1_div_8_div_1_div_2_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 30);
    \u0275\u0275listener("click", function TitlePage_div_1_div_8_div_1_div_2_li_5_Template_button_click_1_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const i_r7 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      item_r9.action();
      return \u0275\u0275resetView(ctx_r2.showDropdown[i_r7] = false);
    });
    \u0275\u0275template(2, TitlePage_div_1_div_8_div_1_div_2_li_5_i_2_Template, 1, 2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r9.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.label, " ");
  }
}
function TitlePage_div_1_div_8_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 22);
    \u0275\u0275listener("click", function TitlePage_div_1_div_8_div_1_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleDropdown(i_r7));
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 28);
    \u0275\u0275template(5, TitlePage_div_1_div_8_div_1_div_2_li_5_Template, 4, 2, "li", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    const action_r5 = ctx_r9.$implicit;
    const i_r7 = ctx_r9.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("action-btn btn-add dropdown-toggle export-btn " + (action_r5.class || "btn-primary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", action_r5.label, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showDropdown[i_r7] ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showDropdown[i_r7]);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", action_r5.dropdown.items);
  }
}
function TitlePage_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, TitlePage_div_1_div_8_div_1_button_1_Template, 4, 5, "button", 20)(2, TitlePage_div_1_div_8_div_1_div_2_Template, 6, 8, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !action_r5.dropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r5.dropdown);
  }
}
function TitlePage_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, TitlePage_div_1_div_8_div_1_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.actions);
  }
}
function TitlePage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div")(5, "h1", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(7, TitlePage_div_1_nav_7_Template, 3, 1, "nav", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TitlePage_div_1_div_8_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.breadcrumbs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.actions.length > 0);
  }
}
function TitlePage_div_2_nav_6_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", crumb_r11.url);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", crumb_r11.label, " ");
  }
}
function TitlePage_div_2_nav_6_li_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", crumb_r11.label, " ");
  }
}
function TitlePage_div_2_nav_6_li_2_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 38);
  }
}
function TitlePage_div_2_nav_6_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, TitlePage_div_2_nav_6_li_2_a_1_Template, 2, 2, "a", 12)(2, TitlePage_div_2_nav_6_li_2_span_2_Template, 2, 1, "span", 13)(3, TitlePage_div_2_nav_6_li_2_i_3_Template, 1, 0, "i", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const crumb_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    \u0275\u0275classProp("active", last_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", crumb_r11.url && !last_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !crumb_r11.url || last_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r12);
  }
}
function TitlePage_div_2_nav_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 36)(1, "ol");
    \u0275\u0275template(2, TitlePage_div_2_nav_6_li_2_Template, 4, 5, "li", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.breadcrumbs);
  }
}
function TitlePage_div_2_div_7_div_1_button_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
  }
}
function TitlePage_div_2_div_7_div_1_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const action_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(action_r14.icon + " me-2");
  }
}
function TitlePage_div_2_div_7_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function TitlePage_div_2_div_7_div_1_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const action_r14 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(action_r14.action());
    });
    \u0275\u0275template(1, TitlePage_div_2_div_7_div_1_button_1_i_1_Template, 1, 0, "i", 23)(2, TitlePage_div_2_div_7_div_1_button_1_i_2_Template, 1, 2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("action-btn custom-btn-2 " + (action_r14.class || "btn-add-global-2"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !action_r14.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r14.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r14.label, " ");
  }
}
function TitlePage_div_2_div_7_div_1_div_2_li_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r18.icon + " me-2");
  }
}
function TitlePage_div_2_div_7_div_1_div_2_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 30);
    \u0275\u0275listener("click", function TitlePage_div_2_div_7_div_1_div_2_li_5_Template_button_click_1_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const i_r16 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      item_r18.action();
      return \u0275\u0275resetView(ctx_r2.showDropdown[i_r16] = false);
    });
    \u0275\u0275template(2, TitlePage_div_2_div_7_div_1_div_2_li_5_i_2_Template, 1, 2, "i", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r18.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r18.label, " ");
  }
}
function TitlePage_div_2_div_7_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 22);
    \u0275\u0275listener("click", function TitlePage_div_2_div_7_div_1_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const i_r16 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleDropdown(i_r16));
    });
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 28);
    \u0275\u0275template(5, TitlePage_div_2_div_7_div_1_div_2_li_5_Template, 4, 2, "li", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r18 = \u0275\u0275nextContext();
    const action_r14 = ctx_r18.$implicit;
    const i_r16 = ctx_r18.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap("action-btn btn-add dropdown-toggle export-btn " + (action_r14.class || "btn-primary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", action_r14.label, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showDropdown[i_r16] ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r2.showDropdown[i_r16]);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", action_r14.dropdown.items);
  }
}
function TitlePage_div_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, TitlePage_div_2_div_7_div_1_button_1_Template, 4, 5, "button", 20)(2, TitlePage_div_2_div_7_div_1_div_2_Template, 6, 8, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !action_r14.dropdown);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", action_r14.dropdown);
  }
}
function TitlePage_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, TitlePage_div_2_div_7_div_1_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.actions);
  }
}
function TitlePage_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 4)(2, "div", 32)(3, "div")(4, "h1", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, TitlePage_div_2_nav_6_Template, 3, 1, "nav", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TitlePage_div_2_div_7_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.breadcrumbs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.actions.length > 0);
  }
}
var TitlePage = class _TitlePage {
  authService;
  title = "";
  subtitle;
  icon;
  breadcrumbs = [];
  actions = [];
  showDropdown = {};
  constructor(authService) {
    this.authService = authService;
  }
  get isParent() {
    return this.authService.isParent();
  }
  toggleDropdown(index) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
  static \u0275fac = function TitlePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitlePage)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TitlePage, selectors: [["app-title-page"]], inputs: { title: "title", subtitle: "subtitle", icon: "icon", breadcrumbs: "breadcrumbs", actions: "actions" }, decls: 3, vars: 4, consts: [[1, "titlepage-container"], ["class", "title-section parent-title-section", 4, "ngIf"], ["class", "title-section", 4, "ngIf"], [1, "title-section", "parent-title-section"], [1, "title-content", "container-fluid"], [1, "parent-title-wrapper"], [1, "parent-header"], [1, "page-title", "parent-title", "mb-1"], ["class", "breadcrumbs parent-breadcrumbs", 4, "ngIf"], ["class", "title-actions parent-title-actions", 4, "ngIf"], [1, "breadcrumbs", "parent-breadcrumbs"], [3, "active", 4, "ngFor", "ngForOf"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "bi bi-chevron-right", 4, "ngIf"], [3, "routerLink"], [1, "bi", "bi-chevron-right"], [1, "title-actions", "parent-title-actions"], ["class", "d-inline-block position-relative", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "position-relative"], [3, "class", "click", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [3, "click"], ["class", "bi bi-plus-circle-dotted me-2", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "bi", "bi-plus-circle-dotted", "me-2"], [1, "dropdown"], [1, "bi", "bi-download", "me-2"], [1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"], [1, "title-section"], [1, "title-wrapper"], [1, "page-title", "mb-1"], ["class", "breadcrumbs titlepage-breadcrumbs", 4, "ngIf"], ["class", "title-actions", 4, "ngIf"], [1, "breadcrumbs", "titlepage-breadcrumbs"], ["class", "", 4, "ngIf"], [1, ""], [1, "title-actions"]], template: function TitlePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TitlePage_div_1_Template, 9, 3, "div", 1)(2, TitlePage_div_2_Template, 8, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("parent-layout", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.titlepage-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  text-decoration: underline;\n}\n.breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.breadcrumbs[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin: 0 0.25rem;\n}\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.title-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.title-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin: 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0.25rem 0 0 0;\n  line-height: 1.4;\n}\n.title-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.action-btn.btn-cancel-global[_ngcontent-%COMP%] {\n  background-color: #E9EDF4 !important;\n  background: #E9EDF4 !important;\n  border: 1px solid #E9EDF4 !important;\n  padding: 0.5rem 0.85rem !important;\n  font-size: 14px;\n  transition: all 0.5s;\n  font-weight: 500;\n  color: #202C4B !important;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.3);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  transform: translateY(-1px);\n}\n@media (max-width: 768px) {\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .title-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .title-icon[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .title-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    font-size: 0.8125rem;\n  }\n}\n.titlepage-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "/";\n  color: #6A7287;\n  opacity: 0.4;\n  float: left;\n  padding-left: 7px;\n}\n.titlepage-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6A7287;\n}\n.titlepage-breadcrumbs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n.titlepage-breadcrumbs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 600;\n}\n.export-btn[_ngcontent-%COMP%] {\n  background-color: #E9EDF4 !important;\n  border: 1px solid #E9EDF4 !important;\n  color: #515B73 !important;\n  box-shadow: 0 4px 15px rgba(161, 161, 161, 0.4) !important;\n}\n.parent-layout[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B8E6F0 0%,\n      #D4F1E8 100%);\n  padding: 24px 20px 16px;\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 2rem;\n}\n.parent-title-section[_ngcontent-%COMP%]   .parent-breadcrumbs[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n}\n.parent-title-section[_ngcontent-%COMP%]   .parent-breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.parent-title-section[_ngcontent-%COMP%]   .parent-breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n}\n.parent-title-section[_ngcontent-%COMP%]   .parent-breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.parent-title-section[_ngcontent-%COMP%]   .parent-breadcrumbs[_ngcontent-%COMP%]   .bi-chevron-right[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  font-size: 0.75rem;\n  margin: 0 0.5rem;\n}\n.parent-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.parent-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 0.75rem;\n  border-radius: 50%;\n}\n.parent-title[_ngcontent-%COMP%] {\n  color: #2d3748;\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.parent-subtitle[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.parent-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.parent-title-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n.parent-btn[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.1) !important;\n  border: 2px solid #667eea !important;\n  color: #667eea !important;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.parent-btn[_ngcontent-%COMP%]:hover {\n  background: #667eea !important;\n  color: white !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 15px rgba(102, 126, 234, 0.3);\n}\n@media (max-width: 768px) {\n  .parent-layout[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .parent-title-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .parent-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 0.75rem;\n  }\n  .parent-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .parent-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=title-page.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitlePage, [{
    type: Component,
    args: [{ selector: "app-title-page", imports: [CommonModule, RouterModule], template: `<div class="titlepage-container" [class.parent-layout]="isParent">\r
\r
  <!-- Parent Design -->\r
  <div *ngIf="isParent" class="title-section parent-title-section">\r
    <div class="title-content container-fluid">\r
      <div class="parent-title-wrapper">\r
        <div class="parent-header">\r
          <div>\r
            <h1 class="page-title parent-title mb-1">{{ title }}</h1>\r
          </div>\r
        </div>\r
      </div>\r
      <!-- Parent Breadcrumbs -->\r
      <nav class="breadcrumbs parent-breadcrumbs" *ngIf="breadcrumbs.length > 0">\r
        <ol>\r
          <li *ngFor="let crumb of breadcrumbs; let last = last" [class.active]="last">\r
            <a *ngIf="crumb.url && !last" [routerLink]="crumb.url">\r
              {{ crumb.label }}\r
            </a>\r
            <span *ngIf="!crumb.url || last">\r
              {{ crumb.label }}\r
            </span>\r
            <i class="bi bi-chevron-right" *ngIf="!last"></i>\r
          </li>\r
        </ol>\r
      </nav>\r
    </div>\r
\r
    <!-- Parent Action Buttons -->\r
    <div class="title-actions parent-title-actions" *ngIf="actions.length > 0">\r
      <div *ngFor="let action of actions; let i = index" class="d-inline-block position-relative">\r
        <button\r
          *ngIf="!action.dropdown"\r
          [class]="'action-btn custom-btn-2 ' + (action.class || 'btn-add-global-2')"\r
          (click)="action.action()">\r
          <i class="bi bi-plus-circle-dotted me-2" *ngIf="!action.icon"></i>\r
          <i *ngIf="action.icon" [class]="action.icon + ' me-2'"></i>\r
          {{ action.label }}\r
        </button>\r
\r
        <div *ngIf="action.dropdown" class="dropdown">\r
          <button\r
            [class]="'action-btn btn-add dropdown-toggle export-btn ' + (action.class || 'btn-primary')"\r
            (click)="toggleDropdown(i)">\r
            <i class="bi bi-download me-2"></i>\r
            {{ action.label }}\r
          </button>\r
          <ul class="dropdown-menu" [class.show]="showDropdown[i]" [style.display]="showDropdown[i] ? 'block' : 'none'">\r
            <li *ngFor="let item of action.dropdown.items">\r
              <button class="dropdown-item" (click)="item.action(); showDropdown[i] = false">\r
                <i *ngIf="item.icon" [class]="item.icon + ' me-2'"></i>\r
                {{ item.label }}\r
              </button>\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Default Design (Admin/Teacher) -->\r
  <div *ngIf="!isParent" class="title-section">\r
    <div class="title-content container-fluid">\r
      <div class="title-wrapper">\r
        <div>\r
          <h1 class="page-title mb-1">{{ title }}</h1>\r
        </div>\r
      </div>\r
      <!-- Breadcrumbs -->\r
      <nav class="breadcrumbs titlepage-breadcrumbs" *ngIf="breadcrumbs.length > 0">\r
        <ol>\r
          <li *ngFor="let crumb of breadcrumbs; let last = last" [class.active]="last">\r
            <a *ngIf="crumb.url && !last" [routerLink]="crumb.url">\r
              {{ crumb.label }} \r
            </a>\r
            <span *ngIf="!crumb.url || last">\r
              {{ crumb.label }}\r
            </span>\r
            <i class="" *ngIf="!last"></i>\r
          </li>\r
        </ol>\r
      </nav>\r
    </div>\r
\r
    <!-- Action Buttons -->\r
    <div class="title-actions" *ngIf="actions.length > 0">\r
      <div *ngFor="let action of actions; let i = index" class="d-inline-block position-relative">\r
        <button \r
          *ngIf="!action.dropdown"\r
          [class]="'action-btn custom-btn-2 ' + (action.class || 'btn-add-global-2')"\r
          (click)="action.action()">\r
          <i class="bi bi-plus-circle-dotted me-2" *ngIf="!action.icon"></i>\r
          <i *ngIf="action.icon" [class]="action.icon + ' me-2'"></i>\r
          {{ action.label }}\r
        </button>\r
        \r
        <div *ngIf="action.dropdown" class="dropdown">\r
          <button \r
            [class]="'action-btn btn-add dropdown-toggle export-btn ' + (action.class || 'btn-primary')"\r
            (click)="toggleDropdown(i)">\r
            <i class="bi bi-download me-2"></i>\r
            {{ action.label }}\r
          </button>\r
          <ul class="dropdown-menu" [class.show]="showDropdown[i]" [style.display]="showDropdown[i] ? 'block' : 'none'">\r
            <li *ngFor="let item of action.dropdown.items">\r
              <button class="dropdown-item" (click)="item.action(); showDropdown[i] = false">\r
                <i *ngIf="item.icon" [class]="item.icon + ' me-2'"></i>\r
                {{ item.label }}\r
              </button>\r
            </li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/shared/layouts/title-page/title-page.scss */\n.titlepage-container {\n  margin-bottom: 1.5rem;\n}\n.breadcrumbs ol {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.breadcrumbs li {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.breadcrumbs a {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.breadcrumbs a:hover {\n  color: #2563eb;\n  text-decoration: underline;\n}\n.breadcrumbs span {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.breadcrumbs .separator {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin: 0 0.25rem;\n}\n.title-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.title-content {\n  flex: 1;\n  min-width: 0;\n}\n.title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.title-icon {\n  font-size: 2rem;\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin: 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0.25rem 0 0 0;\n  line-height: 1.4;\n}\n.title-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.action-btn.btn-cancel-global {\n  background-color: #E9EDF4 !important;\n  background: #E9EDF4 !important;\n  border: 1px solid #E9EDF4 !important;\n  padding: 0.5rem 0.85rem !important;\n  font-size: 14px;\n  transition: all 0.5s;\n  font-weight: 500;\n  color: #202C4B !important;\n}\n.action-btn i {\n  font-size: 1rem;\n}\n.btn-danger {\n  background: #ef4444;\n  color: white;\n}\n.btn-danger:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.3);\n}\n.btn-outline {\n  background: white;\n  color: #3b82f6;\n  border: 1px solid #3b82f6;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n  transform: translateY(-1px);\n}\n@media (max-width: 768px) {\n  .title-section {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .title-wrapper {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .title-icon {\n    font-size: 1.5rem;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .title-actions {\n    width: 100%;\n  }\n  .action-btn {\n    flex: 1;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .page-title {\n    font-size: 1.25rem;\n  }\n  .breadcrumbs li {\n    font-size: 0.75rem;\n  }\n  .action-btn {\n    padding: 0.5rem 1rem;\n    font-size: 0.8125rem;\n  }\n}\n.titlepage-breadcrumbs li:not(:last-child)::after {\n  content: "/";\n  color: #6A7287;\n  opacity: 0.4;\n  float: left;\n  padding-left: 7px;\n}\n.titlepage-breadcrumbs li a {\n  color: #6A7287;\n}\n.titlepage-breadcrumbs li.active {\n  font-weight: 600;\n  color: #374151;\n}\n.titlepage-breadcrumbs li.active span {\n  color: #374151;\n  font-weight: 600;\n}\n.export-btn {\n  background-color: #E9EDF4 !important;\n  border: 1px solid #E9EDF4 !important;\n  color: #515B73 !important;\n  box-shadow: 0 4px 15px rgba(161, 161, 161, 0.4) !important;\n}\n.parent-layout {\n  background:\n    linear-gradient(\n      135deg,\n      #B8E6F0 0%,\n      #D4F1E8 100%);\n  padding: 24px 20px 16px;\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 2rem;\n}\n.parent-title-section .parent-breadcrumbs {\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n}\n.parent-title-section .parent-breadcrumbs ol {\n  justify-content: center;\n}\n.parent-title-section .parent-breadcrumbs ol li {\n  color: #667eea;\n  font-weight: 500;\n}\n.parent-title-section .parent-breadcrumbs ol li a {\n  color: #667eea;\n}\n.parent-title-section .parent-breadcrumbs .bi-chevron-right {\n  color: #a0aec0;\n  font-size: 0.75rem;\n  margin: 0 0.5rem;\n}\n.parent-header {\n  display: flex;\n  align-items: center;\n}\n.parent-icon {\n  font-size: 2.5rem;\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.1);\n  padding: 0.75rem;\n  border-radius: 50%;\n}\n.parent-title {\n  color: #2d3748;\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.parent-subtitle {\n  color: #667eea;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.parent-actions {\n  margin-top: 1rem;\n}\n.parent-title-actions {\n  display: flex;\n  justify-content: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n.parent-btn {\n  background: rgba(102, 126, 234, 0.1) !important;\n  border: 2px solid #667eea !important;\n  color: #667eea !important;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.parent-btn:hover {\n  background: #667eea !important;\n  color: white !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 15px rgba(102, 126, 234, 0.3);\n}\n@media (max-width: 768px) {\n  .parent-layout {\n    padding: 0.75rem;\n  }\n  .parent-title-section {\n    padding: 1rem;\n  }\n  .parent-header {\n    flex-direction: column;\n    text-align: center;\n    gap: 0.75rem;\n  }\n  .parent-icon {\n    font-size: 2rem;\n  }\n  .parent-title {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=title-page.css.map */\n'] }]
  }], () => [{ type: AuthService }], { title: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], icon: [{
    type: Input
  }], breadcrumbs: [{
    type: Input
  }], actions: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TitlePage, { className: "TitlePage", filePath: "src/app/shared/layouts/title-page/title-page.ts", lineNumber: 32 });
})();

export {
  TitlePage
};
//# sourceMappingURL=chunk-T6BZLT4B.js.map
