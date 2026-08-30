import {
  FoodMenuService,
  MEAL_TYPES
} from "./chunk-JLY7SDMZ.js";
import {
  ExportUtil
} from "./chunk-DS52PGQ7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
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
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/food-menu/food-menu.component.ts
function FoodMenuComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "FOOD_MENU.LOADING"));
  }
}
function FoodMenuComponent_div_38_div_17_ng_container_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FOOD_MENU.PUBLISHED"));
  }
}
function FoodMenuComponent_div_38_div_17_ng_container_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FOOD_MENU.DRAFT"));
  }
}
function FoodMenuComponent_div_38_div_17_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275listener("click", function FoodMenuComponent_div_38_div_17_ng_container_9_Template_div_click_1_listener() {
      const menu_r4 = \u0275\u0275restoreView(_r3).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewMenu(menu_r4));
    });
    \u0275\u0275elementStart(2, "small", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275template(5, FoodMenuComponent_div_38_div_17_ng_container_9_span_5_Template, 3, 3, "span", 45)(6, FoodMenuComponent_div_38_div_17_ng_container_9_span_6_Template, 3, 3, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 47);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const menu_r4 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", menu_r4.isPublished);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !menu_r4.isPublished);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (menu_r4.menuItems == null ? null : menu_r4.menuItems.length) || 0, " ", \u0275\u0275pipeBind1(9, 5, "FOOD_MENU.ITEMS"));
  }
}
function FoodMenuComponent_div_38_div_17_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "button", 52);
    \u0275\u0275listener("click", function FoodMenuComponent_div_38_div_17_ng_template_10_div_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const day_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/food-menu/add"], { queryParams: { date: day_r6.toISOString().split("T")[0] } }));
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.ADD"), " ");
  }
}
function FoodMenuComponent_div_38_div_17_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FoodMenuComponent_div_38_div_17_ng_template_10_div_0_Template, 5, 3, "div", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function FoodMenuComponent_div_38_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "small", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40);
    \u0275\u0275template(9, FoodMenuComponent_div_38_div_17_ng_container_9_Template, 10, 7, "ng-container", 41)(10, FoodMenuComponent_div_38_div_17_ng_template_10_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const noMenu_r7 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, day_r6, "EEE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, day_r6, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getMenuForDay(day_r6))("ngIfElse", noMenu_r7);
  }
}
function FoodMenuComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "button", 29);
    \u0275\u0275listener("click", function FoodMenuComponent_div_38_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousWeek());
    });
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h5", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 29);
    \u0275\u0275listener("click", function FoodMenuComponent_div_38_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextWeek());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "div", 34);
    \u0275\u0275template(17, FoodMenuComponent_div_38_div_17_Template, 12, 10, "div", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "FOOD_MENU.PREVIOUS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 7, ctx_r1.selectedWeekStart, "MMM d"), " - ", \u0275\u0275pipeBind2(10, 10, ctx_r1.getWeekDays()[6], "MMM d, yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 13, "FOOD_MENU.NEXT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getWeekDays());
  }
}
function FoodMenuComponent_div_39_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FOOD_MENU.TEMPLATE"));
  }
}
function FoodMenuComponent_div_39_div_1_div_11_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 89);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_li_9_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const menu_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.editMenu(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 91);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.EDIT"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_11_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 89);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_li_10_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const menu_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.duplicateMenu(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.DUPLICATE"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_11_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 89);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_li_11_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const menu_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.togglePublish(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 93);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-eye", !menu_r10.isPublished)("bi-eye-slash", menu_r10.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r10.isPublished ? \u0275\u0275pipeBind1(4, 5, "FOOD_MENU.UNPUBLISH") : \u0275\u0275pipeBind1(5, 7, "FOOD_MENU.PUBLISH"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_11_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 89);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_li_12_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const menu_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewReport(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 94);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.VIEW_REPORT"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_11_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 95);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_li_13_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const menu_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.deleteMenu(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 96);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.DELETE"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "a", 86);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 88)(4, "li")(5, "a", 89);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_div_11_Template_a_click_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const menu_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewMenu(menu_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(6, "i", 90);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FoodMenuComponent_div_39_div_1_div_11_li_9_Template, 5, 3, "li", 22)(10, FoodMenuComponent_div_39_div_1_div_11_li_10_Template, 5, 3, "li", 22)(11, FoodMenuComponent_div_39_div_1_div_11_li_11_Template, 6, 9, "li", 22)(12, FoodMenuComponent_div_39_div_1_div_11_li_12_Template, 5, 3, "li", 22)(13, FoodMenuComponent_div_39_div_1_div_11_li_13_Template, 5, 3, "li", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 6, "FOOD_MENU.VIEW_DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function FoodMenuComponent_div_39_div_1_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r10.description);
  }
}
function FoodMenuComponent_div_39_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r16 = ctx.$implicit;
    \u0275\u0275classMap(badge_r16.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r16.label, " ");
  }
}
function FoodMenuComponent_div_39_div_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FOOD_MENU.NOT_MEETING_REQUIREMENTS"), " ");
  }
}
function FoodMenuComponent_div_39_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "p", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mealType_r17 = ctx.$implicit;
    const menu_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mealType_r17.split(" ")[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getMealItemsCount(menu_r10, mealType_r17));
  }
}
function FoodMenuComponent_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 28)(3, "div", 59)(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FoodMenuComponent_div_39_div_1_span_8_Template, 3, 3, "span", 61);
    \u0275\u0275elementStart(9, "span", 62);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, FoodMenuComponent_div_39_div_1_div_11_Template, 14, 8, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 64)(13, "div", 65)(14, "div", 4)(15, "div", 66);
    \u0275\u0275element(16, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 68)(18, "h6", 69);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 70);
    \u0275\u0275element(21, "i", 71);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, FoodMenuComponent_div_39_div_1_p_23_Template, 2, 1, "p", 72);
    \u0275\u0275elementStart(24, "div", 73)(25, "p", 74);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 75);
    \u0275\u0275template(29, FoodMenuComponent_div_39_div_1_span_29_Template, 2, 3, "span", 76)(30, FoodMenuComponent_div_39_div_1_span_30_Template, 3, 3, "span", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 78);
    \u0275\u0275template(32, FoodMenuComponent_div_39_div_1_div_32_Template, 5, 2, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 80)(34, "div", 4)(35, "span", 81);
    \u0275\u0275element(36, "i", 82);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 83);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_1_Template_button_click_39_listener() {
      const menu_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMenu(menu_r10));
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-published", menu_r10.isPublished)("badge-draft", !menu_r10.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r10.isPublished ? \u0275\u0275pipeBind1(6, 17, "FOOD_MENU.PUBLISHED") : \u0275\u0275pipeBind1(7, 19, "FOOD_MENU.DRAFT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", menu_r10.isTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menu_r10.menuType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit() || ctx_r1.canDelete());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", menu_r10.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatDate(menu_r10.menuDate), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r10.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 21, "FOOD_MENU.CACFP_COMPLIANCE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getComplianceBadges(menu_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getComplianceBadges(menu_r10).length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.mealTypes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 23, menu_r10.createdAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 26, "FOOD_MENU.VIEW_MENU"));
  }
}
function FoodMenuComponent_div_39_div_2_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function FoodMenuComponent_div_39_div_2_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/food-menu/add"]));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FOOD_MENU.CREATE_FIRST_MENU"), " ");
  }
}
function FoodMenuComponent_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105)(3, "div", 106);
    \u0275\u0275element(4, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 108);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 109);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 110);
    \u0275\u0275template(12, FoodMenuComponent_div_39_div_2_button_12_Template, 4, 3, "button", 111);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "FOOD_MENU.NO_MENUS_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "FOOD_MENU.START_CREATING"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function FoodMenuComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, FoodMenuComponent_div_39_div_1_Template, 42, 28, "div", 55)(2, FoodMenuComponent_div_39_div_2_Template, 13, 7, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedMenus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredMenus.length === 0);
  }
}
function FoodMenuComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "button", 115);
    \u0275\u0275listener("click", function FoodMenuComponent_div_40_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275element(2, "i", 116);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.LOAD_MORE"), " ");
  }
}
function FoodMenuComponent_div_41_tr_28_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FOOD_MENU.TEMPLATE"));
  }
}
function FoodMenuComponent_div_41_tr_28_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r21 = ctx.$implicit;
    \u0275\u0275classMap(badge_r21.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", badge_r21.label, " ");
  }
}
function FoodMenuComponent_div_41_tr_28_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 133);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_tr_28_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const menu_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editMenu(menu_r22));
    });
    \u0275\u0275element(2, "i", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FOOD_MENU.EDIT"));
  }
}
function FoodMenuComponent_div_41_tr_28_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_tr_28_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const menu_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.duplicateMenu(menu_r22));
    });
    \u0275\u0275element(2, "i", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FOOD_MENU.DUPLICATE"));
  }
}
function FoodMenuComponent_div_41_tr_28_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 137);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_tr_28_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const menu_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePublish(menu_r22));
    });
    \u0275\u0275element(3, "i", 138);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menu_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("btn-view", !menu_r22.isPublished)("btn-active", menu_r22.isPublished);
    \u0275\u0275property("title", menu_r22.isPublished ? \u0275\u0275pipeBind1(1, 9, "FOOD_MENU.UNPUBLISH") : \u0275\u0275pipeBind1(2, 11, "FOOD_MENU.PUBLISH"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-eye", !menu_r22.isPublished)("bi-eye-slash", menu_r22.isPublished);
  }
}
function FoodMenuComponent_div_41_tr_28_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 139);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_tr_28_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const menu_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteMenu(menu_r22));
    });
    \u0275\u0275element(2, "i", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "FOOD_MENU.DELETE"));
  }
}
function FoodMenuComponent_div_41_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FoodMenuComponent_div_41_tr_28_span_12_Template, 3, 3, "span", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 60);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 75);
    \u0275\u0275template(23, FoodMenuComponent_div_41_tr_28_span_23_Template, 2, 3, "span", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 125)(26, "button", 126);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_tr_28_Template_button_click_26_listener() {
      const menu_r22 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewMenu(menu_r22));
    });
    \u0275\u0275element(28, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, FoodMenuComponent_div_41_tr_28_button_29_Template, 3, 3, "button", 128)(30, FoodMenuComponent_div_41_tr_28_button_30_Template, 3, 3, "button", 129)(31, FoodMenuComponent_div_41_tr_28_button_31_Template, 4, 13, "button", 130)(32, FoodMenuComponent_div_41_tr_28_button_32_Template, 3, 3, "button", 131);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menu_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r22.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r22.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(menu_r22.menuDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(menu_r22.menuType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menu_r22.isTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-published", menu_r22.isPublished)("badge-draft", !menu_r22.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menu_r22.isPublished ? \u0275\u0275pipeBind1(16, 18, "FOOD_MENU.PUBLISHED") : \u0275\u0275pipeBind1(17, 20, "FOOD_MENU.DRAFT"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (menu_r22.menuItems == null ? null : menu_r22.menuItems.length) || 0, " ", \u0275\u0275pipeBind1(20, 22, "FOOD_MENU.ITEMS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getComplianceBadges(menu_r22));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 24, "FOOD_MENU.VIEW_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function FoodMenuComponent_div_41_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 141);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "FOOD_MENU.NO_MENUS_FOUND"), " ");
  }
}
function FoodMenuComponent_div_41_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "button", 115);
    \u0275\u0275listener("click", function FoodMenuComponent_div_41_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275element(2, "i", 116);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "FOOD_MENU.LOAD_MORE"), " ");
  }
}
function FoodMenuComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 117)(2, "div", 118)(3, "table", 119)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, FoodMenuComponent_div_41_tr_28_Template, 33, 26, "tr", 120)(29, FoodMenuComponent_div_41_tr_29_Template, 4, 3, "tr", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(30, FoodMenuComponent_div_41_div_30_Template, 5, 3, "div", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "FOOD_MENU.MENU_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "FOOD_MENU.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "FOOD_MENU.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "FOOD_MENU.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, "FOOD_MENU.ITEMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "FOOD_MENU.COMPLIANCE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, "FOOD_MENU.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayedMenus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredMenus.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMoreMenus());
  }
}
var FoodMenuComponent = class _FoodMenuComponent {
  foodMenuService;
  authService;
  router;
  translate;
  pageTitleService;
  menus = [];
  filteredMenus = [];
  displayedMenus = [];
  loading = false;
  viewMode = "grid";
  filterType = "all";
  selectedWeekStart = this.getMonday(/* @__PURE__ */ new Date());
  searchTerm = "";
  menusPerPage = 9;
  currentPage = 1;
  breadcrumbs = [];
  titleActions = [];
  mealTypes = MEAL_TYPES;
  langChangeSub;
  constructor(foodMenuService, authService, router, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.authService = authService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.TITLE"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.loadMenus();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.TITLE"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("FOOD_MENU.TITLE") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("FOOD_MENU.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            { label: this.translate.instant("FOOD_MENU.EXPORT_PDF"), icon: "bi bi-file-earmark-pdf", action: () => this.exportToPDF() },
            { label: this.translate.instant("FOOD_MENU.EXPORT_EXCEL"), icon: "bi bi-file-earmark-excel", action: () => this.exportToExcel() }
          ]
        }
      }
    ];
    if (this.canEdit()) {
      this.titleActions.push({
        label: this.translate.instant("FOOD_MENU.FOOD_DATABASE"),
        class: "btn-view-global-2 me-2",
        action: () => this.router.navigate(["/food-menu/food-items"])
      }, {
        label: this.translate.instant("FOOD_MENU.ADD_MENU"),
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/food-menu/add"])
      });
    }
  }
  loadMenus() {
    this.loading = true;
    let publishedOnly;
    let templatesOnly;
    if (this.filterType === "published")
      publishedOnly = true;
    if (this.filterType === "templates")
      templatesOnly = true;
    this.foodMenuService.loadMenus(void 0, void 0, void 0, publishedOnly, templatesOnly).subscribe({
      next: (menus) => {
        this.menus = menus;
        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading menus:", error);
        this.loading = false;
      }
    });
  }
  applyFilter() {
    let filtered = [...this.menus];
    if (this.filterType === "published") {
      filtered = filtered.filter((m) => m.isPublished && !m.isTemplate);
    } else if (this.filterType === "draft") {
      filtered = filtered.filter((m) => !m.isPublished && !m.isTemplate);
    } else if (this.filterType === "templates") {
      filtered = filtered.filter((m) => m.isTemplate);
    }
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((m) => m.name.toLowerCase().includes(term) || m.description?.toLowerCase().includes(term));
    }
    filtered.sort((a, b) => new Date(b.menuDate).getTime() - new Date(a.menuDate).getTime());
    this.filteredMenus = filtered;
    this.currentPage = 1;
    this.updateDisplayedMenus();
  }
  updateDisplayedMenus() {
    const endIndex = this.currentPage * this.menusPerPage;
    this.displayedMenus = this.filteredMenus.slice(0, endIndex);
  }
  loadMore() {
    this.currentPage++;
    this.updateDisplayedMenus();
  }
  hasMoreMenus() {
    return this.displayedMenus.length < this.filteredMenus.length;
  }
  setViewMode(mode) {
    this.viewMode = mode;
    if (mode === "calendar") {
      this.loadWeekMenus();
    }
  }
  setFilterType(type) {
    this.filterType = type;
    this.loadMenus();
  }
  loadWeekMenus() {
    this.loading = true;
    this.foodMenuService.getWeekMenus(this.selectedWeekStart).subscribe({
      next: (menus) => {
        this.menus = menus;
        this.filteredMenus = menus;
        this.displayedMenus = menus;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading week menus:", error);
        this.loading = false;
      }
    });
  }
  previousWeek() {
    this.selectedWeekStart = new Date(this.selectedWeekStart.getTime() - 7 * 24 * 60 * 60 * 1e3);
    this.loadWeekMenus();
  }
  nextWeek() {
    this.selectedWeekStart = new Date(this.selectedWeekStart.getTime() + 7 * 24 * 60 * 60 * 1e3);
    this.loadWeekMenus();
  }
  getMonday(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
  getWeekDays() {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(this.selectedWeekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  }
  getMenuForDay(date) {
    return this.menus.find((m) => {
      const menuDate = new Date(m.menuDate);
      return menuDate.toDateString() === date.toDateString();
    });
  }
  viewMenu(menu) {
    this.router.navigate(["/food-menu/detail", menu.id]);
  }
  editMenu(menu) {
    this.router.navigate(["/food-menu/edit", menu.id]);
  }
  duplicateMenu(menu) {
    const newDate = prompt(this.translate.instant("FOOD_MENU.ENTER_NEW_DATE"));
    if (newDate) {
      this.foodMenuService.duplicateMenu({
        sourceMenuId: menu.id,
        newMenuDate: newDate,
        newName: `${menu.name} (${this.translate.instant("FOOD_MENU.COPY")})`
      }).subscribe({
        next: (newMenu) => {
          this.loadMenus();
          this.router.navigate(["/food-menu/edit", newMenu.id]);
        },
        error: (error) => console.error("Error duplicating menu:", error)
      });
    }
  }
  togglePublish(menu) {
    const action = menu.isPublished ? this.foodMenuService.unpublishMenu(menu.id) : this.foodMenuService.publishMenu(menu.id);
    action.subscribe({
      next: () => this.loadMenus(),
      error: (error) => console.error("Error toggling publish status:", error)
    });
  }
  deleteMenu(menu) {
    if (confirm(this.translate.instant("FOOD_MENU.DELETE_CONFIRM", { name: menu.name }))) {
      this.foodMenuService.deleteMenu(menu.id).subscribe({
        next: () => this.loadMenus(),
        error: (error) => console.error("Error deleting menu:", error)
      });
    }
  }
  viewReport(menu) {
    this.router.navigate(["/food-menu/report", menu.id]);
  }
  canEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }
  canDelete() {
    return this.authService.isAdmin();
  }
  getComplianceBadges(menu) {
    const badges = [];
    if (menu.meetsGrainRequirement)
      badges.push({ label: "Grain", class: "bg-warning text-dark" });
    if (menu.meetsProteinRequirement)
      badges.push({ label: "Protein", class: "bg-danger" });
    if (menu.meetsDairyRequirement)
      badges.push({ label: "Dairy", class: "bg-info" });
    if (menu.meetsFruitVegRequirement)
      badges.push({ label: "Fruit/Veg", class: "bg-success" });
    return badges;
  }
  getMealItemsCount(menu, mealType) {
    return menu.menuItems?.filter((mi) => mi.mealType === mealType).length || 0;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  }
  exportToPDF() {
    const data = this.filteredMenus.map((menu) => ({
      [this.translate.instant("FOOD_MENU.NAME")]: menu.name,
      [this.translate.instant("FOOD_MENU.DATE")]: this.formatDate(menu.menuDate),
      [this.translate.instant("FOOD_MENU.TYPE")]: menu.menuType,
      [this.translate.instant("FOOD_MENU.STATUS")]: menu.isPublished ? this.translate.instant("FOOD_MENU.PUBLISHED") : this.translate.instant("FOOD_MENU.DRAFT"),
      [this.translate.instant("FOOD_MENU.ITEMS")]: menu.menuItems?.length || 0,
      "Grain": menu.meetsGrainRequirement ? "Yes" : "No",
      "Protein": menu.meetsProteinRequirement ? "Yes" : "No",
      "Dairy": menu.meetsDairyRequirement ? "Yes" : "No",
      "Fruit/Veg": menu.meetsFruitVegRequirement ? "Yes" : "No"
    }));
    ExportUtil.exportToPDF(data, this.translate.instant("FOOD_MENU.REPORT_TITLE"));
  }
  exportToExcel() {
    const data = this.filteredMenus.map((menu) => ({
      [this.translate.instant("FOOD_MENU.NAME")]: menu.name,
      [this.translate.instant("FOOD_MENU.DATE")]: this.formatDate(menu.menuDate),
      [this.translate.instant("FOOD_MENU.TYPE")]: menu.menuType,
      [this.translate.instant("FOOD_MENU.STATUS")]: menu.isPublished ? this.translate.instant("FOOD_MENU.PUBLISHED") : this.translate.instant("FOOD_MENU.DRAFT"),
      [this.translate.instant("FOOD_MENU.ITEMS")]: menu.menuItems?.length || 0,
      "Grain": menu.meetsGrainRequirement ? "Yes" : "No",
      "Protein": menu.meetsProteinRequirement ? "Yes" : "No",
      "Dairy": menu.meetsDairyRequirement ? "Yes" : "No",
      "Fruit/Veg": menu.meetsFruitVegRequirement ? "Yes" : "No"
    }));
    ExportUtil.exportToExcel(data, this.translate.instant("FOOD_MENU.REPORT_TITLE"));
  }
  static \u0275fac = function FoodMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodMenuComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodMenuComponent, selectors: [["app-food-menu"]], decls: 42, vars: 63, consts: [["noMenu", ""], [1, "container-fluid", "mt-4"], ["icon", "bi bi-egg-fried", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "card", "card-general", "p-3", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "flex-row", "mb-4"], [1, "d-flex", "align-items-center"], [1, "title-filter", "mb-0", "me-3"], ["role", "group", 1, "btn-group", "me-3", "bg-white", "border", "rounded-2", "p-1", "filter-custom"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "view-toggle"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click", "title"], [1, "bi", "bi-grid"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click", "title"], [1, "bi", "bi-calendar-week"], ["class", "text-center py-5", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "spinner-custom"], [1, "visually-hidden"], [1, "mb-4"], [1, "card", "card-general", "calendar-card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "btn", "btn-sm", "btn-calendar-nav", 3, "click"], [1, "bi", "bi-chevron-left", "me-1"], [1, "mb-0", "calendar-title"], [1, "bi", "bi-chevron-right", "ms-1"], [1, "card-body", "p-0"], [1, "row", "g-0"], ["class", "col calendar-day-col", 4, "ngFor", "ngForOf"], [1, "col", "calendar-day-col"], [1, "calendar-day-header"], [1, "d-block", "day-name"], [1, "day-number"], [1, "calendar-day-content"], [4, "ngIf", "ngIfElse"], [1, "calendar-menu-card", 3, "click"], [1, "fw-bold", "text-truncate", "menu-name"], [1, "d-flex", "flex-wrap", "gap-1", "mt-1"], ["class", "badge badge-published", 4, "ngIf"], ["class", "badge badge-draft", 4, "ngIf"], [1, "menu-items-count"], [1, "badge", "badge-published"], [1, "badge", "badge-draft"], ["class", "text-center py-3", 4, "ngIf"], [1, "text-center", "py-3"], [1, "btn", "btn-sm", "btn-add-menu", 3, "click"], [1, "bi", "bi-plus"], [1, "row"], ["class", "col-xl-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "mb-4"], [1, "card", "card-general", "h-100", "menu-card"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "badge"], ["class", "badge badge-template", 4, "ngIf"], [1, "badge", "badge-type"], ["class", "dropdown", 4, "ngIf"], [1, "card-body"], [1, "bg-light", "rounded-2", "p-3", "mb-3", "menu-info-box"], [1, "menu-icon-wrapper", "flex-shrink-0"], [1, "bi", "bi-egg-fried"], [1, "ms-3"], [1, "text-dark", "text-truncate", "mb-0", "title-card__name"], [1, "mb-0", "card-age"], [1, "bi", "bi-calendar3", "me-1"], ["class", "menu-description", 4, "ngIf"], [1, "compliance-section", "mb-3"], [1, "mb-1", "information-title"], [1, "d-flex", "flex-wrap", "gap-1"], ["class", "badge compliance-badge", 3, "class", 4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "body-information", "meal-summary"], ["class", "meal-type-item text-center", 4, "ngFor", "ngForOf"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted", "me-1"], [1, "bi", "bi-clock", "me-1"], [1, "btn", "btn-light", "btn-sm", "btn-footer", 3, "click"], [1, "badge", "badge-template"], [1, "dropdown"], ["href", "#", "data-bs-toggle", "dropdown", 1, "btn", "border-0", "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "p-0"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "#", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-pencil-square", "me-2"], [1, "bi", "bi-copy", "me-2"], [1, "bi", "me-2"], [1, "bi", "bi-bar-chart", "me-2"], ["href", "#", 1, "dropdown-item", "rounded-1", "text-danger", 3, "click"], [1, "bi", "bi-trash3", "me-2"], [1, "menu-description"], [1, "badge", "compliance-badge"], [1, "text-muted", "small"], [1, "meal-type-item", "text-center"], [1, "mb-0", "information-title"], [1, "text-dark", "information-description", "meal-count"], [1, "col-12"], [1, "card", "card-general", "empty-state-card"], [1, "card-body", "text-center", "py-5"], [1, "empty-icon-wrapper", "mb-3"], [1, "bi", "bi-calendar-x"], [1, "empty-title"], [1, "empty-description"], [1, "d-flex", "justify-content-center"], ["class", "action-btn custom-btn-2 btn-add-global-2", 3, "click", 4, "ngIf"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle-dotted", "me-2"], [1, "text-center", "mt-4"], [1, "action-btn", "custom-btn-2", "btn-add-border", 3, "click"], [1, "bi", "bi-arrow-down-circle", "me-1"], [1, "card", "card-general", "card-recently"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0", "custom-table"], [4, "ngFor", "ngForOf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "name-last"], [1, "text-muted"], ["class", "badge badge-template ms-1", 4, "ngIf"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-view", 3, "click", "title"], [1, "bi", "bi-eye"], ["class", "btn btn-sm btn-edit", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-active", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-sm", 3, "btn-view", "btn-active", "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-remove", 3, "title", "click", 4, "ngIf"], [1, "badge", "badge-template", "ms-1"], [1, "btn", "btn-sm", "btn-edit", 3, "click", "title"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-active", 3, "click", "title"], [1, "bi", "bi-copy"], [1, "btn", "btn-sm", 3, "click", "title"], [1, "bi"], [1, "btn", "btn-sm", "btn-remove", 3, "click", "title"], [1, "bi", "bi-trash3"], ["colspan", "7", 1, "text-center", "py-4"], [1, "text-center", "mt-3"]], template: function FoodMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-title-page", 2);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h4", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_10_listener() {
        return ctx.setFilterType("all");
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_13_listener() {
        return ctx.setFilterType("published");
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 7);
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_16_listener() {
        return ctx.setFilterType("draft");
      });
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 7);
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_19_listener() {
        return ctx.setFilterType("templates");
      });
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 8)(23, "div", 9);
      \u0275\u0275element(24, "i", 10);
      \u0275\u0275elementStart(25, "input", 11);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function FoodMenuComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function FoodMenuComponent_Template_input_input_25_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 12)(28, "button", 13);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_28_listener() {
        return ctx.setViewMode("grid");
      });
      \u0275\u0275element(30, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 13);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_31_listener() {
        return ctx.setViewMode("list");
      });
      \u0275\u0275element(33, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 16);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275listener("click", function FoodMenuComponent_Template_button_click_34_listener() {
        return ctx.setViewMode("calendar");
      });
      \u0275\u0275element(36, "i", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(37, FoodMenuComponent_div_37_Template, 5, 3, "div", 18)(38, FoodMenuComponent_div_38_Template, 18, 15, "div", 19)(39, FoodMenuComponent_div_39_Template, 3, 2, "div", 20)(40, FoodMenuComponent_div_40_Template, 5, 3, "div", 21)(41, FoodMenuComponent_div_41_Template, 31, 24, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 41, "FOOD_MENU.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 43, "FOOD_MENU.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 45, "FOOD_MENU.MENUS"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("btn-primary", ctx.filterType === "all")("btn-outline-secondary", ctx.filterType !== "all");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 47, "FOOD_MENU.ALL"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-primary", ctx.filterType === "published")("btn-outline-secondary", ctx.filterType !== "published");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 49, "FOOD_MENU.PUBLISHED"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-primary", ctx.filterType === "draft")("btn-outline-secondary", ctx.filterType !== "draft");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 51, "FOOD_MENU.DRAFTS"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-primary", ctx.filterType === "templates")("btn-outline-secondary", ctx.filterType !== "templates");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 53, "FOOD_MENU.TEMPLATES"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 55, "FOOD_MENU.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode === "grid");
      \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 57, "FOOD_MENU.GRID_VIEW"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode === "list");
      \u0275\u0275property("title", \u0275\u0275pipeBind1(32, 59, "FOOD_MENU.LIST_VIEW"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode === "calendar");
      \u0275\u0275property("title", \u0275\u0275pipeBind1(35, 61, "FOOD_MENU.CALENDAR_VIEW"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "calendar" && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid" && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "grid" && !ctx.loading && ctx.hasMoreMenus());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode === "list" && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, DatePipe, TranslatePipe], styles: ["\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-custom[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.view-toggle[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.5rem;\n  color: var(--text-color);\n  border: none;\n  background: transparent;\n  transition: all 0.3s ease;\n}\n.view-toggle[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.view-toggle[_ngcontent-%COMP%]   .btn-icon.active[_ngcontent-%COMP%] {\n  background: var(--primary-color) !important;\n  color: white;\n  border-radius: 6px;\n}\n.filter-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n.filter-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #f7f7f7;\n}\n.filter-custom[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  color: white;\n}\n.filter-custom[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.badge-published[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: var(--primary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: rgba(106, 114, 135, 0.15) !important;\n  color: var(--color-gray) !important;\n  font-weight: 600 !important;\n}\n.badge-template[_ngcontent-%COMP%] {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-type[_ngcontent-%COMP%] {\n  background: var(--gradient-primary) !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n.compliance-badge[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n  padding: 0.35em 0.65em;\n}\n.compliance-badge.bg-success[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: #155724 !important;\n}\n.compliance-badge.bg-warning[_ngcontent-%COMP%] {\n  background: #fff3cd !important;\n  color: #856404 !important;\n}\n.compliance-badge.bg-danger[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 107, 0.15) !important;\n  color: var(--red-color) !important;\n}\n.compliance-badge.bg-info[_ngcontent-%COMP%] {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n}\n.menu-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.menu-card[_ngcontent-%COMP%]   .menu-info-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%) !important;\n  border: 1px solid rgba(125, 211, 192, 0.2);\n}\n.menu-card[_ngcontent-%COMP%]   .menu-icon-wrapper[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background: var(--gradient-primary);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-card[_ngcontent-%COMP%]   .menu-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.menu-card[_ngcontent-%COMP%]   .menu-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-color);\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-card[_ngcontent-%COMP%]   .compliance-section[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px solid #E9EDF4;\n}\n.menu-card[_ngcontent-%COMP%]   .meal-summary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 12px;\n  margin-top: 12px;\n}\n.menu-card[_ngcontent-%COMP%]   .meal-summary[_ngcontent-%COMP%]   .meal-type-item[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.menu-card[_ngcontent-%COMP%]   .meal-summary[_ngcontent-%COMP%]   .meal-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--title-color);\n}\n.calendar-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.calendar-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%);\n}\n.calendar-card[_ngcontent-%COMP%]   .calendar-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--title-color);\n}\n.calendar-card[_ngcontent-%COMP%]   .btn-calendar-nav[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #E9EDF4;\n  color: var(--text-color);\n  font-weight: 500;\n  padding: 6px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.calendar-card[_ngcontent-%COMP%]   .btn-calendar-nav[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.calendar-day-col[_ngcontent-%COMP%] {\n  border-right: 1px solid #E9EDF4;\n  min-height: 200px;\n}\n.calendar-day-col[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.calendar-day-header[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #E9EDF4;\n  text-align: center;\n}\n.calendar-day-header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.calendar-day-header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--title-color);\n}\n.calendar-day-content[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.calendar-menu-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #E9EDF4;\n  border-radius: 8px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.calendar-menu-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-color);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.2);\n}\n.calendar-menu-card[_ngcontent-%COMP%]   .menu-name[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--title-color);\n  font-size: 13px;\n}\n.calendar-menu-card[_ngcontent-%COMP%]   .menu-items-count[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-gray);\n  font-size: 11px;\n  margin-top: 4px;\n}\n.btn-add-menu[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px dashed var(--primary-color);\n  color: var(--primary-color);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn-add-menu[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  border-style: solid;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-icon-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--primary-color);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 8px;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-gray);\n  margin-bottom: 20px;\n}\n.custom-table[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%], \n.custom-table[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%], \n.custom-table[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%], \n.custom-table[_ngcontent-%COMP%]   .btn-active[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-dropdown);\n  border: 1px solid #E9EDF4;\n  border-radius: 10px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0.5rem 1rem;\n  color: var(--title-color);\n  transition: all 0.2s ease;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .filter-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 4px 10px;\n    font-size: 12px;\n  }\n  .calendar-day-col[_ngcontent-%COMP%] {\n    min-height: 150px;\n  }\n  .calendar-day-header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .meal-summary[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .meal-summary[_ngcontent-%COMP%]   .meal-type-item[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: none;\n}\n.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  border: none;\n}\n.dropdown[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 20px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=food-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoodMenuComponent, [{
    type: Component,
    args: [{ selector: "app-food-menu", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'FOOD_MENU.TITLE' | translate"\r
    [subtitle]="'FOOD_MENU.SUBTITLE' | translate"\r
    icon="bi bi-egg-fried"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- View Controls -->\r
  <div class="card card-general p-3 d-flex align-items-center justify-content-between flex-wrap flex-row mb-4">\r
    <div class="d-flex align-items-center">\r
      <h4 class="title-filter mb-0 me-3">{{ 'FOOD_MENU.MENUS' | translate }}</h4>\r
      <!-- Filter Pills -->\r
      <div class="btn-group me-3 bg-white border rounded-2 p-1 filter-custom" role="group">\r
        <button type="button" class="btn btn-sm"\r
                [class.btn-primary]="filterType === 'all'"\r
                [class.btn-outline-secondary]="filterType !== 'all'"\r
                (click)="setFilterType('all')">{{ 'FOOD_MENU.ALL' | translate }}</button>\r
        <button type="button" class="btn btn-sm"\r
                [class.btn-primary]="filterType === 'published'"\r
                [class.btn-outline-secondary]="filterType !== 'published'"\r
                (click)="setFilterType('published')">{{ 'FOOD_MENU.PUBLISHED' | translate }}</button>\r
        <button type="button" class="btn btn-sm"\r
                [class.btn-primary]="filterType === 'draft'"\r
                [class.btn-outline-secondary]="filterType !== 'draft'"\r
                (click)="setFilterType('draft')">{{ 'FOOD_MENU.DRAFTS' | translate }}</button>\r
        <button type="button" class="btn btn-sm"\r
                [class.btn-primary]="filterType === 'templates'"\r
                [class.btn-outline-secondary]="filterType !== 'templates'"\r
                (click)="setFilterType('templates')">{{ 'FOOD_MENU.TEMPLATES' | translate }}</button>\r
      </div>\r
    </div>\r
\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input\r
          type="text"\r
          class="form-control search-input"\r
          [placeholder]="'FOOD_MENU.SEARCH_PLACEHOLDER' | translate"\r
          [(ngModel)]="searchTerm"\r
          (input)="applyFilter()">\r
      </div>\r
\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 view-toggle">\r
        <button\r
          class="btn btn-icon btn-sm me-1"\r
          [class.active]="viewMode === 'grid'"\r
          (click)="setViewMode('grid')"\r
          [title]="'FOOD_MENU.GRID_VIEW' | translate">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
        <button\r
          class="btn btn-icon btn-sm me-1"\r
          [class.active]="viewMode === 'list'"\r
          (click)="setViewMode('list')"\r
          [title]="'FOOD_MENU.LIST_VIEW' | translate">\r
          <i class="bi bi-list-ul"></i>\r
        </button>\r
        <button\r
          class="btn btn-icon btn-sm"\r
          [class.active]="viewMode === 'calendar'"\r
          (click)="setViewMode('calendar')"\r
          [title]="'FOOD_MENU.CALENDAR_VIEW' | translate">\r
          <i class="bi bi-calendar-week"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border spinner-custom" role="status">\r
      <span class="visually-hidden">{{ 'FOOD_MENU.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Calendar View -->\r
  <div *ngIf="viewMode === 'calendar' && !loading" class="mb-4">\r
    <div class="card card-general calendar-card">\r
      <div class="card-header d-flex align-items-center justify-content-between">\r
        <button class="btn btn-sm btn-calendar-nav" (click)="previousWeek()">\r
          <i class="bi bi-chevron-left me-1"></i> {{ 'FOOD_MENU.PREVIOUS' | translate }}\r
        </button>\r
        <h5 class="mb-0 calendar-title">\r
          {{ selectedWeekStart | date:'MMM d' }} - {{ getWeekDays()[6] | date:'MMM d, yyyy' }}\r
        </h5>\r
        <button class="btn btn-sm btn-calendar-nav" (click)="nextWeek()">\r
          {{ 'FOOD_MENU.NEXT' | translate }} <i class="bi bi-chevron-right ms-1"></i>\r
        </button>\r
      </div>\r
      <div class="card-body p-0">\r
        <div class="row g-0">\r
          <div *ngFor="let day of getWeekDays()" class="col calendar-day-col">\r
            <div class="calendar-day-header">\r
              <small class="d-block day-name">{{ day | date:'EEE' }}</small>\r
              <strong class="day-number">{{ day | date:'d' }}</strong>\r
            </div>\r
            <div class="calendar-day-content">\r
              <ng-container *ngIf="getMenuForDay(day) as menu; else noMenu">\r
                <div class="calendar-menu-card" (click)="viewMenu(menu)">\r
                  <small class="fw-bold text-truncate menu-name">{{ menu.name }}</small>\r
                  <div class="d-flex flex-wrap gap-1 mt-1">\r
                    <span *ngIf="menu.isPublished" class="badge badge-published">{{ 'FOOD_MENU.PUBLISHED' | translate }}</span>\r
                    <span *ngIf="!menu.isPublished" class="badge badge-draft">{{ 'FOOD_MENU.DRAFT' | translate }}</span>\r
                  </div>\r
                  <small class="menu-items-count">{{ menu.menuItems?.length || 0 }} {{ 'FOOD_MENU.ITEMS' | translate }}</small>\r
                </div>\r
              </ng-container>\r
              <ng-template #noMenu>\r
                <div class="text-center py-3" *ngIf="canEdit()">\r
                  <button class="btn btn-sm btn-add-menu"\r
                          (click)="router.navigate(['/food-menu/add'], { queryParams: { date: day.toISOString().split('T')[0] } })">\r
                    <i class="bi bi-plus"></i> {{ 'FOOD_MENU.ADD' | translate }}\r
                  </button>\r
                </div>\r
              </ng-template>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
    <div *ngFor="let menu of displayedMenus" class="col-xl-4 col-md-6 mb-4">\r
      <div class="card card-general h-100 menu-card">\r
        <div class="card-header d-flex align-items-center justify-content-between">\r
          <div class="d-flex gap-2 flex-wrap">\r
            <span class="badge" [class.badge-published]="menu.isPublished" [class.badge-draft]="!menu.isPublished">\r
              {{ menu.isPublished ? ('FOOD_MENU.PUBLISHED' | translate) : ('FOOD_MENU.DRAFT' | translate) }}\r
            </span>\r
            <span *ngIf="menu.isTemplate" class="badge badge-template">{{ 'FOOD_MENU.TEMPLATE' | translate }}</span>\r
            <span class="badge badge-type">{{ menu.menuType }}</span>\r
          </div>\r
          <div class="dropdown" *ngIf="canEdit() || canDelete()">\r
            <a href="#" class="btn border-0 btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0" data-bs-toggle="dropdown">\r
              <i class="bi bi-three-dots-vertical"></i>\r
            </a>\r
            <ul class="dropdown-menu dropdown-menu-end p-3">\r
              <li>\r
                <a class="dropdown-item rounded-1" href="#" (click)="viewMenu(menu); $event.preventDefault()">\r
                  <i class="bi bi-eye me-2"></i>{{ 'FOOD_MENU.VIEW_DETAILS' | translate }}\r
                </a>\r
              </li>\r
              <li *ngIf="canEdit()">\r
                <a class="dropdown-item rounded-1" href="#" (click)="editMenu(menu); $event.preventDefault()">\r
                  <i class="bi bi-pencil-square me-2"></i>{{ 'FOOD_MENU.EDIT' | translate }}\r
                </a>\r
              </li>\r
              <li *ngIf="canEdit()">\r
                <a class="dropdown-item rounded-1" href="#" (click)="duplicateMenu(menu); $event.preventDefault()">\r
                  <i class="bi bi-copy me-2"></i>{{ 'FOOD_MENU.DUPLICATE' | translate }}\r
                </a>\r
              </li>\r
              <li *ngIf="canEdit()">\r
                <a class="dropdown-item rounded-1" href="#" (click)="togglePublish(menu); $event.preventDefault()">\r
                  <i class="bi me-2" [class.bi-eye]="!menu.isPublished" [class.bi-eye-slash]="menu.isPublished"></i>\r
                  {{ menu.isPublished ? ('FOOD_MENU.UNPUBLISH' | translate) : ('FOOD_MENU.PUBLISH' | translate) }}\r
                </a>\r
              </li>\r
              <li *ngIf="canEdit()">\r
                <a class="dropdown-item rounded-1" href="#" (click)="viewReport(menu); $event.preventDefault()">\r
                  <i class="bi bi-bar-chart me-2"></i>{{ 'FOOD_MENU.VIEW_REPORT' | translate }}\r
                </a>\r
              </li>\r
              <li *ngIf="canDelete()">\r
                <a class="dropdown-item rounded-1 text-danger" href="#" (click)="deleteMenu(menu); $event.preventDefault()">\r
                  <i class="bi bi-trash3 me-2"></i>{{ 'FOOD_MENU.DELETE' | translate }}\r
                </a>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
\r
        <div class="card-body">\r
          <div class="bg-light rounded-2 p-3 mb-3 menu-info-box">\r
            <div class="d-flex align-items-center">\r
              <div class="menu-icon-wrapper flex-shrink-0">\r
                <i class="bi bi-egg-fried"></i>\r
              </div>\r
              <div class="ms-3">\r
                <h6 class="text-dark text-truncate mb-0 title-card__name">\r
                  {{ menu.name }}\r
                </h6>\r
                <p class="mb-0 card-age">\r
                  <i class="bi bi-calendar3 me-1"></i>{{ formatDate(menu.menuDate) }}\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <p class="menu-description" *ngIf="menu.description">{{ menu.description }}</p>\r
\r
          <!-- CACFP Compliance -->\r
          <div class="compliance-section mb-3">\r
            <p class="mb-1 information-title">{{ 'FOOD_MENU.CACFP_COMPLIANCE' | translate }}</p>\r
            <div class="d-flex flex-wrap gap-1">\r
              <span *ngFor="let badge of getComplianceBadges(menu)"\r
                    class="badge compliance-badge" [class]="badge.class">\r
                {{ badge.label }}\r
              </span>\r
              <span *ngIf="getComplianceBadges(menu).length === 0" class="text-muted small">\r
                {{ 'FOOD_MENU.NOT_MEETING_REQUIREMENTS' | translate }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Meal Summary -->\r
          <div class="d-flex align-items-center justify-content-between body-information meal-summary">\r
            <div *ngFor="let mealType of mealTypes" class="meal-type-item text-center">\r
              <p class="mb-0 information-title">{{ mealType.split(' ')[0] }}</p>\r
              <p class="text-dark information-description meal-count">{{ getMealItemsCount(menu, mealType) }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card-footer d-flex align-items-center justify-content-between">\r
          <div class="d-flex align-items-center">\r
            <span class="text-muted me-1"><i class="bi bi-clock me-1"></i>{{ menu.createdAt | date:'short' }}</span>\r
          </div>\r
          <button class="btn btn-light btn-sm btn-footer" (click)="viewMenu(menu)">{{ 'FOOD_MENU.VIEW_MENU' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="filteredMenus.length === 0" class="col-12">\r
      <div class="card card-general empty-state-card">\r
        <div class="card-body text-center py-5">\r
          <div class="empty-icon-wrapper mb-3">\r
            <i class="bi bi-calendar-x"></i>\r
          </div>\r
          <h5 class="empty-title">{{ 'FOOD_MENU.NO_MENUS_FOUND' | translate }}</h5>\r
          <p class="empty-description">{{ 'FOOD_MENU.START_CREATING' | translate }}</p>\r
          <div class="d-flex justify-content-center ">\r
            <button *ngIf="canEdit()" class="action-btn custom-btn-2 btn-add-global-2" (click)="router.navigate(['/food-menu/add'])">\r
              <i class="bi bi-plus-circle-dotted me-2"></i>\r
              {{ 'FOOD_MENU.CREATE_FIRST_MENU' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Load More Button for Grid View -->\r
  <div *ngIf="viewMode === 'grid' && !loading && hasMoreMenus()" class="text-center mt-4">\r
    <button class="action-btn custom-btn-2 btn-add-border" (click)="loadMore()">\r
      <i class="bi bi-arrow-down-circle me-1"></i>\r
      {{ 'FOOD_MENU.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewMode === 'list' && !loading">\r
    <div class="card card-general card-recently">\r
      <div class="table-responsive">\r
        <table class="table table-hover mb-0 custom-table">\r
          <thead>\r
            <tr>\r
              <th>{{ 'FOOD_MENU.MENU_NAME' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.DATE' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.TYPE' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.STATUS' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.ITEMS' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.COMPLIANCE' | translate }}</th>\r
              <th>{{ 'FOOD_MENU.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let menu of displayedMenus">\r
              <td>\r
                <span class="name-last">{{ menu.name }}</span>\r
                <br>\r
                <small class="text-muted">{{ menu.description }}</small>\r
              </td>\r
              <td>{{ formatDate(menu.menuDate) }}</td>\r
              <td>\r
                <span class="badge badge-type">{{ menu.menuType }}</span>\r
                <span *ngIf="menu.isTemplate" class="badge badge-template ms-1">{{ 'FOOD_MENU.TEMPLATE' | translate }}</span>\r
              </td>\r
              <td>\r
                <span class="badge" [class.badge-published]="menu.isPublished" [class.badge-draft]="!menu.isPublished">\r
                  {{ menu.isPublished ? ('FOOD_MENU.PUBLISHED' | translate) : ('FOOD_MENU.DRAFT' | translate) }}\r
                </span>\r
              </td>\r
              <td>{{ menu.menuItems?.length || 0 }} {{ 'FOOD_MENU.ITEMS' | translate }}</td>\r
              <td>\r
                <div class="d-flex flex-wrap gap-1">\r
                  <span *ngFor="let badge of getComplianceBadges(menu)"\r
                        class="badge compliance-badge" [class]="badge.class">\r
                    {{ badge.label }}\r
                  </span>\r
                </div>\r
              </td>\r
              <td>\r
                <div class="d-flex gap-1">\r
                  <button class="btn btn-sm btn-view" (click)="viewMenu(menu)" [title]="'FOOD_MENU.VIEW_DETAILS' | translate">\r
                    <i class="bi bi-eye"></i>\r
                  </button>\r
                  <button *ngIf="canEdit()" class="btn btn-sm btn-edit" (click)="editMenu(menu)" [title]="'FOOD_MENU.EDIT' | translate">\r
                    <i class="bi bi-pencil-square"></i>\r
                  </button>\r
                  <button *ngIf="canEdit()" class="btn btn-sm btn-active" (click)="duplicateMenu(menu)" [title]="'FOOD_MENU.DUPLICATE' | translate">\r
                    <i class="bi bi-copy"></i>\r
                  </button>\r
                  <button *ngIf="canEdit()" class="btn btn-sm"\r
                          [class.btn-view]="!menu.isPublished"\r
                          [class.btn-active]="menu.isPublished"\r
                          (click)="togglePublish(menu)"\r
                          [title]="menu.isPublished ? ('FOOD_MENU.UNPUBLISH' | translate) : ('FOOD_MENU.PUBLISH' | translate)">\r
                    <i class="bi" [class.bi-eye]="!menu.isPublished" [class.bi-eye-slash]="menu.isPublished"></i>\r
                  </button>\r
                  <button *ngIf="canDelete()" class="btn btn-sm btn-remove" (click)="deleteMenu(menu)" [title]="'FOOD_MENU.DELETE' | translate">\r
                    <i class="bi bi-trash3"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
            <tr *ngIf="filteredMenus.length === 0">\r
              <td colspan="7" class="text-center py-4">\r
                {{ 'FOOD_MENU.NO_MENUS_FOUND' | translate }}\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- Load More Button for List View -->\r
    <div *ngIf="hasMoreMenus()" class="text-center mt-3">\r
      <button class="action-btn custom-btn-2 btn-add-border" (click)="loadMore()">\r
        <i class="bi bi-arrow-down-circle me-1"></i>\r
        {{ 'FOOD_MENU.LOAD_MORE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/food-menu/food-menu.component.scss */\n.cursor-pointer {\n  cursor: pointer;\n}\n.spinner-custom {\n  color: var(--primary-color);\n}\n.view-toggle .btn-icon {\n  padding: 0.375rem 0.5rem;\n  color: var(--text-color);\n  border: none;\n  background: transparent;\n  transition: all 0.3s ease;\n}\n.view-toggle .btn-icon:hover {\n  color: var(--primary-color);\n}\n.view-toggle .btn-icon.active {\n  background: var(--primary-color) !important;\n  color: white;\n  border-radius: 6px;\n}\n.filter-custom .btn {\n  padding: 5px 15px;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n.filter-custom .btn:hover {\n  background-color: #f7f7f7;\n}\n.filter-custom .btn.btn-primary {\n  background-color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n  color: white;\n}\n.filter-custom .btn.btn-outline-secondary {\n  color: var(--text-color);\n}\n.badge-published {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: var(--primary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-draft {\n  background: rgba(106, 114, 135, 0.15) !important;\n  color: var(--color-gray) !important;\n  font-weight: 600 !important;\n}\n.badge-template {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-type {\n  background: var(--gradient-primary) !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n.compliance-badge {\n  font-size: 10px !important;\n  padding: 0.35em 0.65em;\n}\n.compliance-badge.bg-success {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: #155724 !important;\n}\n.compliance-badge.bg-warning {\n  background: #fff3cd !important;\n  color: #856404 !important;\n}\n.compliance-badge.bg-danger {\n  background: rgba(255, 107, 107, 0.15) !important;\n  color: var(--red-color) !important;\n}\n.compliance-badge.bg-info {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n}\n.menu-card {\n  transition: all 0.3s ease-in-out;\n}\n.menu-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.menu-card .menu-info-box {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%) !important;\n  border: 1px solid rgba(125, 211, 192, 0.2);\n}\n.menu-card .menu-icon-wrapper {\n  width: 45px;\n  height: 45px;\n  background: var(--gradient-primary);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-card .menu-icon-wrapper i {\n  font-size: 20px;\n  color: white;\n}\n.menu-card .menu-description {\n  font-size: 14px;\n  color: var(--text-color);\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.menu-card .compliance-section {\n  padding-top: 12px;\n  border-top: 1px solid #E9EDF4;\n}\n.menu-card .meal-summary {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 12px;\n  margin-top: 12px;\n}\n.menu-card .meal-summary .meal-type-item {\n  flex: 1;\n}\n.menu-card .meal-summary .meal-count {\n  font-weight: 600;\n  color: var(--title-color);\n}\n.calendar-card {\n  overflow: hidden;\n}\n.calendar-card .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.1) 0%,\n      rgba(125, 185, 255, 0.1) 100%);\n}\n.calendar-card .calendar-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--title-color);\n}\n.calendar-card .btn-calendar-nav {\n  background: white;\n  border: 1px solid #E9EDF4;\n  color: var(--text-color);\n  font-weight: 500;\n  padding: 6px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n.calendar-card .btn-calendar-nav:hover {\n  background: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color);\n}\n.calendar-day-col {\n  border-right: 1px solid #E9EDF4;\n  min-height: 200px;\n}\n.calendar-day-col:last-child {\n  border-right: none;\n}\n.calendar-day-header {\n  padding: 12px 8px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #E9EDF4;\n  text-align: center;\n}\n.calendar-day-header .day-name {\n  font-size: 12px;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.calendar-day-header .day-number {\n  font-size: 18px;\n  color: var(--title-color);\n}\n.calendar-day-content {\n  padding: 8px;\n}\n.calendar-menu-card {\n  background: white;\n  border: 1px solid #E9EDF4;\n  border-radius: 8px;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.calendar-menu-card:hover {\n  border-color: var(--primary-color);\n  box-shadow: 0 4px 12px rgba(125, 211, 192, 0.2);\n}\n.calendar-menu-card .menu-name {\n  display: block;\n  color: var(--title-color);\n  font-size: 13px;\n}\n.calendar-menu-card .menu-items-count {\n  display: block;\n  color: var(--color-gray);\n  font-size: 11px;\n  margin-top: 4px;\n}\n.btn-add-menu {\n  background: transparent;\n  border: 1px dashed var(--primary-color);\n  color: var(--primary-color);\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.btn-add-menu:hover {\n  background: var(--primary-color);\n  color: white;\n  border-style: solid;\n}\n.empty-state-card .empty-icon-wrapper {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.empty-state-card .empty-icon-wrapper i {\n  font-size: 36px;\n  color: var(--primary-color);\n}\n.empty-state-card .empty-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 8px;\n}\n.empty-state-card .empty-description {\n  font-size: 14px;\n  color: var(--color-gray);\n  margin-bottom: 20px;\n}\n.custom-table .btn-view,\n.custom-table .btn-edit,\n.custom-table .btn-remove,\n.custom-table .btn-active {\n  padding: 4px 8px;\n  border-radius: 6px;\n}\n.dropdown-menu {\n  box-shadow: var(--shadow-dropdown);\n  border: 1px solid #E9EDF4;\n  border-radius: 10px;\n}\n.dropdown-menu .dropdown-item {\n  font-size: 14px;\n  padding: 0.5rem 1rem;\n  color: var(--title-color);\n  transition: all 0.2s ease;\n}\n.dropdown-menu .dropdown-item:hover {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.dropdown-menu .dropdown-item.text-danger:hover {\n  background-color: rgba(255, 107, 107, 0.1);\n}\n.dropdown-menu .dropdown-item i {\n  color: var(--primary-color);\n}\n@media (max-width: 768px) {\n  .filter-custom .btn {\n    padding: 4px 10px;\n    font-size: 12px;\n  }\n  .calendar-day-col {\n    min-height: 150px;\n  }\n  .calendar-day-header .day-number {\n    font-size: 14px;\n  }\n  .meal-summary {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .meal-summary .meal-type-item {\n    min-width: 60px;\n  }\n}\n.dropdown .btn {\n  border: none;\n}\n.dropdown .btn:active {\n  border: none;\n}\n.dropdown .btn i {\n  color: #374151;\n  font-size: 20px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=food-menu.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: AuthService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodMenuComponent, { className: "FoodMenuComponent", filePath: "src/app/features/food-menu/food-menu.component.ts", lineNumber: 21 });
})();
export {
  FoodMenuComponent
};
//# sourceMappingURL=chunk-ABRRZGUA.js.map
