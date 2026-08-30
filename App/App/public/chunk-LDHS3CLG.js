import {
  FoodMenuService,
  MEAL_TYPES
} from "./chunk-JLY7SDMZ.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import "./chunk-MW573DHT.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/food-menu/parent-menu-view/parent-menu-view.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => [1, 2, 3];
var _c1 = () => [1, 2];
var _c2 = () => [];
function ParentMenuViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "No children found linked to your account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5, "Please contact the daycare administrator.");
    \u0275\u0275elementEnd()();
  }
}
function ParentMenuViewComponent_div_4_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r3 = ctx.$implicit;
    \u0275\u0275property("value", child_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r3.firstName, " ", child_r3.lastName, " ");
  }
}
function ParentMenuViewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, "Select Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ParentMenuViewComponent_div_4_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedChildId, $event) || (ctx_r1.selectedChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ParentMenuViewComponent_div_4_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChildChange());
    });
    \u0275\u0275template(4, ParentMenuViewComponent_div_4_option_4_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedChildId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.children);
  }
}
function ParentMenuViewComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Allergies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSelectedChild().allergies, " ");
  }
}
function ParentMenuViewComponent_ng_container_5_div_14_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275elementEnd();
  }
}
function ParentMenuViewComponent_ng_container_5_div_14_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 35);
    \u0275\u0275text(1, " No menu ");
    \u0275\u0275elementEnd();
  }
}
function ParentMenuViewComponent_ng_container_5_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_div_14_Template_div_click_0_listener() {
      const day_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDayClick(day_r6));
    });
    \u0275\u0275elementStart(1, "small", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParentMenuViewComponent_ng_container_5_div_14_small_7_Template, 2, 0, "small", 31)(8, ParentMenuViewComponent_ng_container_5_div_14_small_8_Template, 2, 0, "small", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cursor-pointer", ctx_r1.getMenuForDay(day_r6))("active", ctx_r1.getMenuForDay(day_r6) && ctx_r1.isMenuSelected(ctx_r1.getMenuForDay(day_r6)))("today", ctx_r1.isToday(day_r6))("has-menu", ctx_r1.getMenuForDay(day_r6))("disabled", !ctx_r1.getMenuForDay(day_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 14, day_r6, "EEE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 17, day_r6, "d"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getMenuForDay(day_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getMenuForDay(day_r6));
  }
}
function ParentMenuViewComponent_ng_container_5_div_15_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "app-skeleton", 43);
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275element(4, "app-skeleton", 45)(5, "app-skeleton", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 60)("width", "60px");
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 16)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "50%");
  }
}
function ParentMenuViewComponent_ng_container_5_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "app-skeleton", 38);
    \u0275\u0275elementStart(2, "div", 39);
    \u0275\u0275template(3, ParentMenuViewComponent_ng_container_5_div_15_div_1_div_3_Template, 6, 6, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "40%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c1));
  }
}
function ParentMenuViewComponent_ng_container_5_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ParentMenuViewComponent_ng_container_5_div_15_div_1_Template, 4, 4, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ParentMenuViewComponent_ng_container_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "No menu available for this week");
    \u0275\u0275elementEnd()();
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_14_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const warning_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(warning_r8);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "strong");
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3, "Allergy Warnings:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 69);
    \u0275\u0275template(5, ParentMenuViewComponent_ng_container_5_div_17_div_14_li_5_Template, 2, 1, "li", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", (ctx_r1.childMenuView == null ? null : ctx_r1.childMenuView.allergyWarnings) || \u0275\u0275pureFunction0(1, _c2));
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMenu.description, " ");
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", item_r10.servingSize, ")");
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.foodItem.description, " ");
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275element(2, "i", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r10.foodItem.allergens, " ");
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_10_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const item_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.selections[item_r10.id].notes, $event) || (ctx_r1.selections[item_r10.id].notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selections[item_r10.id].notes);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_Template_div_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(item_r10.id));
    });
    \u0275\u0275elementStart(1, "div", 79)(2, "div", 80);
    \u0275\u0275element(3, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_span_7_Template, 2, 1, "span", 81)(8, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_p_8_Template, 2, 1, "p", 82)(9, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_9_Template, 4, 1, "div", 83)(10, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_div_10_Template, 2, 1, "div", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.selections[item_r10.id] == null ? null : ctx_r1.selections[item_r10.id].isSelected)("warning", ctx_r1.hasAllergyWarning(item_r10));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-check-square-fill", ctx_r1.selections[item_r10.id] == null ? null : ctx_r1.selections[item_r10.id].isSelected)("bi-square", !(ctx_r1.selections[item_r10.id] == null ? null : ctx_r1.selections[item_r10.id].isSelected))("text-success", ctx_r1.selections[item_r10.id] == null ? null : ctx_r1.selections[item_r10.id].isSelected);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.foodItem.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.servingSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.foodItem.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.foodItem.allergens);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selections[item_r10.id]);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "small");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mealType_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("No items for ", mealType_r12);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "h6", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75);
    \u0275\u0275template(5, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_5_Template, 11, 15, "div", 76)(6, ParentMenuViewComponent_ng_container_5_div_17_div_16_div_6_Template, 3, 1, "div", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mealType_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getMealTypeIcon(mealType_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mealType_r12, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getItemsForMealType(mealType_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getItemsForMealType(mealType_r12).length === 0);
  }
}
function ParentMenuViewComponent_ng_container_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "div")(4, "h5", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 52);
    \u0275\u0275element(7, "i", 53);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 54);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_div_17_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveSelections());
    });
    \u0275\u0275template(11, ParentMenuViewComponent_ng_container_5_div_17_span_11_Template, 1, 0, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 56);
    \u0275\u0275template(14, ParentMenuViewComponent_ng_container_5_div_17_div_14_Template, 6, 2, "div", 57)(15, ParentMenuViewComponent_ng_container_5_div_17_p_15_Template, 2, 1, "p", 58)(16, ParentMenuViewComponent_ng_container_5_div_17_div_16_Template, 7, 5, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 60)(18, "div", 61)(19, "h6", 20);
    \u0275\u0275element(20, "i", 62);
    \u0275\u0275text(21, "CACFP Compliance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 56)(23, "div", 63)(24, "div", 64)(25, "div", 65);
    \u0275\u0275element(26, "i", 66);
    \u0275\u0275elementStart(27, "small", 30);
    \u0275\u0275text(28, "Grain");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 64)(30, "div", 65);
    \u0275\u0275element(31, "i", 66);
    \u0275\u0275elementStart(32, "small", 30);
    \u0275\u0275text(33, "Protein");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 64)(35, "div", 65);
    \u0275\u0275element(36, "i", 66);
    \u0275\u0275elementStart(37, "small", 30);
    \u0275\u0275text(38, "Dairy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 64)(40, "div", 65);
    \u0275\u0275element(41, "i", 66);
    \u0275\u0275elementStart(42, "small", 30);
    \u0275\u0275text(43, "Fruit/Veg");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedMenu.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 32, ctx_r1.selectedMenu.menuDate, "fullDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingSelections);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingSelections);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingSelections ? "Saving..." : "Save Preferences", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.childMenuView == null ? null : ctx_r1.childMenuView.allergyWarnings == null ? null : ctx_r1.childMenuView.allergyWarnings.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMenu.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.mealTypes);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("met", ctx_r1.selectedMenu.meetsGrainRequirement);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.selectedMenu.meetsGrainRequirement)("bi-x-circle", !ctx_r1.selectedMenu.meetsGrainRequirement);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("met", ctx_r1.selectedMenu.meetsProteinRequirement);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.selectedMenu.meetsProteinRequirement)("bi-x-circle", !ctx_r1.selectedMenu.meetsProteinRequirement);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("met", ctx_r1.selectedMenu.meetsDairyRequirement);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.selectedMenu.meetsDairyRequirement)("bi-x-circle", !ctx_r1.selectedMenu.meetsDairyRequirement);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("met", ctx_r1.selectedMenu.meetsFruitVegRequirement);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.selectedMenu.meetsFruitVegRequirement)("bi-x-circle", !ctx_r1.selectedMenu.meetsFruitVegRequirement);
  }
}
function ParentMenuViewComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParentMenuViewComponent_ng_container_5_div_1_Template, 5, 1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17)(4, "button", 18);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousWeek());
    });
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 18);
    \u0275\u0275listener("click", function ParentMenuViewComponent_ng_container_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextWeek());
    });
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23);
    \u0275\u0275template(14, ParentMenuViewComponent_ng_container_5_div_14_Template, 9, 20, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ParentMenuViewComponent_ng_container_5_div_15_Template, 2, 2, "div", 5)(16, ParentMenuViewComponent_ng_container_5_div_16_Template, 4, 0, "div", 3)(17, ParentMenuViewComponent_ng_container_5_div_17_Template, 44, 35, "div", 25);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r1.getSelectedChild()) == null ? null : tmp_1_0.allergies);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 7, ctx_r1.getMonday(ctx_r1.selectedDate), "MMM d"), " - ", \u0275\u0275pipeBind2(9, 10, ctx_r1.getWeekDays()[6], "MMM d, yyyy"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.getWeekDays());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && !ctx_r1.selectedMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.selectedMenu);
  }
}
var ParentMenuViewComponent = class _ParentMenuViewComponent {
  foodMenuService;
  childrenService;
  authService;
  translate;
  pageTitleService;
  children = [];
  selectedChildId = null;
  selectedDate = /* @__PURE__ */ new Date();
  weekMenus = [];
  selectedMenu = null;
  childMenuView = null;
  loading = false;
  savingSelections = false;
  // Selection state
  selections = {};
  mealTypes = MEAL_TYPES;
  langChangeSub;
  constructor(foodMenuService, childrenService, authService, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.PARENT_MENU_VIEW"));
    this.loadChildren();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.PARENT_MENU_VIEW"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  loadChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        if (children.length > 0 && children[0].id) {
          this.selectedChildId = children[0].id;
          this.loadWeekMenus();
        }
      },
      error: (error) => console.error("Error loading children:", error)
    });
  }
  onChildChange() {
    if (this.selectedMenu && this.selectedChildId) {
      this.loadChildMenuView();
    }
  }
  loadWeekMenus() {
    const monday = this.getMonday(this.selectedDate);
    this.loading = true;
    this.foodMenuService.getWeekMenus(monday).subscribe({
      next: (menus) => {
        this.weekMenus = menus;
        this.loading = false;
        const today = /* @__PURE__ */ new Date();
        const todayMenu = menus.find((m) => new Date(m.menuDate).toDateString() === today.toDateString());
        if (todayMenu) {
          this.selectMenu(todayMenu);
        } else if (menus.length > 0) {
          this.selectMenu(menus[0]);
        } else {
          this.selectedMenu = null;
        }
      },
      error: (error) => {
        console.error("Error loading menus:", error);
        this.loading = false;
      }
    });
  }
  onDayClick(day) {
    const menu = this.getMenuForDay(day);
    if (menu) {
      this.selectMenu(menu);
    }
  }
  selectMenu(menu) {
    this.selectedMenu = menu;
    this.loadChildMenuView();
  }
  loadChildMenuView() {
    if (!this.selectedChildId || !this.selectedMenu)
      return;
    this.loading = true;
    this.foodMenuService.getChildMenuSelections(this.selectedChildId, this.selectedMenu.id).subscribe({
      next: (view) => {
        this.childMenuView = view;
        this.selectedMenu = view.menu;
        this.selections = {};
        view.menu.menuItems?.forEach((item) => {
          const existing = view.selections.find((s) => s.menuItemId === item.id);
          this.selections[item.id] = {
            isSelected: existing ? existing.isSelected : true,
            notes: existing?.notes || ""
          };
        });
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading child menu view:", error);
        this.loading = false;
      }
    });
  }
  toggleSelection(menuItemId) {
    if (this.selections[menuItemId]) {
      this.selections[menuItemId].isSelected = !this.selections[menuItemId].isSelected;
    }
  }
  async saveSelections() {
    if (!this.selectedChildId || !this.selectedMenu)
      return;
    this.savingSelections = true;
    const selectionsArray = Object.entries(this.selections).map(([menuItemId, sel]) => ({
      menuItemId: parseInt(menuItemId),
      isSelected: sel.isSelected,
      notes: sel.notes || void 0
    }));
    try {
      await this.foodMenuService.createBulkSelections({
        childId: this.selectedChildId,
        menuId: this.selectedMenu.id,
        selections: selectionsArray
      }).toPromise();
      showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
      this.loadChildMenuView();
    } catch (error) {
      console.error("Error saving selections:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: "Error saving preferences. Please try again.",
        confirmButtonColor: "#7dd3c0"
      });
    } finally {
      this.savingSelections = false;
    }
  }
  getMonday(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
  getWeekDays() {
    const monday = this.getMonday(this.selectedDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  }
  getMenuForDay(date) {
    return this.weekMenus.find((m) => new Date(m.menuDate).toDateString() === date.toDateString());
  }
  previousWeek() {
    this.selectedDate = new Date(this.selectedDate.getTime() - 7 * 24 * 60 * 60 * 1e3);
    this.loadWeekMenus();
  }
  nextWeek() {
    this.selectedDate = new Date(this.selectedDate.getTime() + 7 * 24 * 60 * 60 * 1e3);
    this.loadWeekMenus();
  }
  getItemsForMealType(mealType) {
    if (!this.selectedMenu?.menuItems)
      return [];
    return this.selectedMenu.menuItems.filter((mi) => mi.mealType === mealType);
  }
  getMealTypeIcon(mealType) {
    const icons = {
      "Breakfast": "bi-sunrise",
      "AM Snack": "bi-cup-hot",
      "Lunch": "bi-sun",
      "PM Snack": "bi-cookie",
      "Dinner": "bi-moon-stars"
    };
    return icons[mealType] || "bi-egg-fried";
  }
  hasAllergyWarning(item) {
    return this.childMenuView?.allergyWarnings?.some((w) => w.includes(item.foodItem.name)) || false;
  }
  getSelectedChild() {
    return this.children.find((c) => c.id === this.selectedChildId);
  }
  isToday(date) {
    return date.toDateString() === (/* @__PURE__ */ new Date()).toDateString();
  }
  isMenuSelected(menu) {
    return this.selectedMenu?.id === menu.id;
  }
  formatDate(date) {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }
  static \u0275fac = function ParentMenuViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentMenuViewComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentMenuViewComponent, selectors: [["app-parent-menu-view"]], decls: 6, vars: 3, consts: [[1, "parent-menu-view", "font-inter"], ["title", "Food Menu"], [1, "container-fluid", "body"], ["class", "text-center py-5", 4, "ngIf"], ["class", "child-selector mb-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "bi", "bi-person-x", "display-4", "text-muted"], [1, "mt-3", "text-muted"], [1, "text-muted", "small"], [1, "child-selector", "mb-4"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "alert alert-warning mb-4", 4, "ngIf"], [1, "week-navigation", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "mb-0"], [1, "bi", "bi-chevron-right"], [1, "week-days-scroll", "mb-4"], [1, "d-flex", "gap-2", "overflow-auto", "pb-2"], ["class", "day-card p-3 text-center", 3, "cursor-pointer", "active", "today", "has-menu", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "menu-details", 4, "ngIf"], [1, "alert", "alert-warning", "mb-4"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "day-card", "p-3", "text-center", 3, "click"], [1, "d-block", "text-muted"], [1, "d-block"], ["class", "d-block mt-1 text-success", 4, "ngIf"], ["class", "d-block mt-1 text-muted", 4, "ngIf"], [1, "d-block", "mt-1", "text-success"], [1, "bi", "bi-check-circle"], [1, "d-block", "mt-1", "text-muted"], ["class", "menu-skeleton", "style", "background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);", 4, "ngFor", "ngForOf"], [1, "menu-skeleton", 2, "background", "white", "border-radius", "12px", "padding", "20px", "margin-bottom", "16px", "box-shadow", "0 1px 3px rgba(0,0,0,0.08)"], [1, "mb-3", 3, "height", "width"], [1, "row"], ["class", "col-md-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-3"], [1, "d-flex", "gap-3"], ["borderRadius", "8px", 3, "height", "width"], [1, "flex-grow-1"], [1, "mb-2", 3, "height", "width"], [3, "height", "width"], [1, "bi", "bi-calendar-x", "display-4", "text-muted"], [1, "menu-details"], [1, "card", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "text-muted"], [1, "bi", "bi-calendar3", "me-1"], [1, "btn", "preferences", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card-body"], ["class", "alert alert-danger mb-4", 4, "ngIf"], ["class", "text-muted mb-4", 4, "ngIf"], ["class", "meal-section mb-4", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "bi", "bi-shield-check", "me-2"], [1, "row", "text-center"], [1, "col-3"], [1, "compliance-badge"], [1, "bi"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger", "mb-4"], [1, "mb-0", "mt-2"], [4, "ngFor", "ngForOf"], [1, "text-muted", "mb-4"], [1, "meal-section", "mb-4"], [1, "meal-type-header"], [1, "bi", "me-2"], [1, "meal-items"], ["class", "meal-item p-3 mb-2 border rounded", 3, "selected", "warning", "click", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "meal-item", "p-3", "mb-2", "border", "rounded", 3, "click"], [1, "d-flex", "align-items-start"], [1, "selection-checkbox", "me-3"], ["class", "text-muted ms-2", 4, "ngIf"], ["class", "text-muted small mb-1", 4, "ngIf"], ["class", "mt-1", 4, "ngIf"], ["class", "mt-2", 3, "click", 4, "ngIf"], [1, "text-muted", "ms-2"], [1, "text-muted", "small", "mb-1"], [1, "mt-1"], [1, "badge", "bg-warning", "text-dark"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "mt-2", 3, "click"], ["type", "text", "placeholder", "Add a note (e.g., extra portion, allergies)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "text-center", "text-muted", "py-3"]], template: function ParentMenuViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-parent-child-header-simple", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275template(3, ParentMenuViewComponent_div_3_Template, 6, 0, "div", 3)(4, ParentMenuViewComponent_div_4_Template, 5, 2, "div", 4)(5, ParentMenuViewComponent_ng_container_5_Template, 18, 13, "ng-container", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.children.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.children.length > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.children.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ParentChildHeaderSimpleComponent, TranslateModule, SkeletonComponent, DatePipe], styles: ["\n\n.parent-menu-view[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.week-navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #202c4b;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card[_ngcontent-%COMP%] {\n  min-width: 70px;\n  background: #fff;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card[_ngcontent-%COMP%]:hover {\n  border-color: #4886ed;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card.today[_ngcontent-%COMP%] {\n  border-color: #ffc107;\n  background-color: #fff9e6;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card.has-menu[_ngcontent-%COMP%] {\n  border-color: #28a745;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card.active[_ngcontent-%COMP%] {\n  background-color: #4886ed;\n  border-color: #4886ed;\n  color: white;\n}\n.week-days-scroll[_ngcontent-%COMP%]   .day-card.active[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.week-days-scroll[_ngcontent-%COMP%]   .day-card.active[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.meal-section[_ngcontent-%COMP%]   .meal-type-header[_ngcontent-%COMP%] {\n  color: #202c4b;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.meal-item[_ngcontent-%COMP%] {\n  background: #fff;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.meal-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.meal-item.selected[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  border-color: #28a745 !important;\n}\n.meal-item.warning[_ngcontent-%COMP%] {\n  border-color: #ffc107 !important;\n  background-color: #fff9e6;\n}\n.meal-item[_ngcontent-%COMP%]   .selection-checkbox[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.nutrition-summary[_ngcontent-%COMP%]   .nutrition-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #202c4b;\n}\n.compliance-badge[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.compliance-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #dc3545;\n}\n.compliance-badge.met[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.compliance-badge[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: #fff5f5;\n  border-color: #ffcdd2;\n  color: #c62828;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  background-color: #fff9e6;\n  border-color: #ffe082;\n  color: #856404;\n}\n  .header-info {\n  margin-bottom: 20px !important;\n}\n.preferences[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n}\n.preferences[_ngcontent-%COMP%]:disabled {\n  background: #a0c4ff;\n  border-color: #a0c4ff;\n  color: #e0e0e0;\n}\n/*# sourceMappingURL=parent-menu-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentMenuViewComponent, [{
    type: Component,
    args: [{ selector: "app-parent-menu-view", standalone: true, imports: [CommonModule, FormsModule, ParentChildHeaderSimpleComponent, TranslateModule, SkeletonComponent], template: `<div class="parent-menu-view font-inter">\r
  <app-parent-child-header-simple title="Food Menu">\r
  </app-parent-child-header-simple>\r
\r
  <div class="container-fluid body">\r
    <!-- No Children Message -->\r
    <div *ngIf="!loading && children.length === 0" class="text-center py-5">\r
      <i class="bi bi-person-x display-4 text-muted"></i>\r
      <p class="mt-3 text-muted">No children found linked to your account.</p>\r
      <p class="text-muted small">Please contact the daycare administrator.</p>\r
    </div>\r
\r
    <!-- Child Selector -->\r
    <div class="child-selector mb-4" *ngIf="children.length > 1">\r
      <label class="form-label">Select Child</label>\r
      <select class="form-select" [(ngModel)]="selectedChildId" (change)="onChildChange()">\r
        <option *ngFor="let child of children" [value]="child.id">\r
          {{ child.firstName }} {{ child.lastName }}\r
        </option>\r
      </select>\r
    </div>\r
\r
    <!-- Content only shows when children exist -->\r
    <ng-container *ngIf="children.length > 0">\r
      <!-- Allergy Notice -->\r
      <div class="alert alert-warning mb-4" *ngIf="getSelectedChild()?.allergies">\r
        <i class="bi bi-exclamation-triangle me-2"></i>\r
        <strong>Allergies:</strong> {{ getSelectedChild().allergies }}\r
      </div>\r
\r
      <!-- Week Navigation -->\r
    <div class="week-navigation mb-4">\r
      <div class="d-flex align-items-center justify-content-between">\r
        <button class="btn btn-outline-secondary" (click)="previousWeek()">\r
          <i class="bi bi-chevron-left"></i>\r
        </button>\r
        <h5 class="mb-0">\r
          {{ getMonday(selectedDate) | date:'MMM d' }} - {{ getWeekDays()[6] | date:'MMM d, yyyy' }}\r
        </h5>\r
        <button class="btn btn-outline-secondary" (click)="nextWeek()">\r
          <i class="bi bi-chevron-right"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Week Days Menu Cards -->\r
    <div class="week-days-scroll mb-4">\r
      <div class="d-flex gap-2 overflow-auto pb-2">\r
        <div *ngFor="let day of getWeekDays()"\r
             class="day-card p-3 text-center"\r
             [class.cursor-pointer]="getMenuForDay(day)"\r
             [class.active]="getMenuForDay(day) && isMenuSelected(getMenuForDay(day)!)"\r
             [class.today]="isToday(day)"\r
             [class.has-menu]="getMenuForDay(day)"\r
             [class.disabled]="!getMenuForDay(day)"\r
             (click)="onDayClick(day)">\r
          <small class="d-block text-muted">{{ day | date:'EEE' }}</small>\r
          <strong class="d-block">{{ day | date:'d' }}</strong>\r
          <small *ngIf="getMenuForDay(day)" class="d-block mt-1 text-success">\r
            <i class="bi bi-check-circle"></i>\r
          </small>\r
          <small *ngIf="!getMenuForDay(day)" class="d-block mt-1 text-muted">\r
            No menu\r
          </small>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Loading Skeleton -->\r
    <div *ngIf="loading">\r
      <div class="menu-skeleton" *ngFor="let i of [1,2,3]" style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">\r
        <app-skeleton [height]="24" [width]="'40%'" class="mb-3"></app-skeleton>\r
        <div class="row">\r
          <div class="col-md-6 mb-3" *ngFor="let j of [1,2]">\r
            <div class="d-flex gap-3">\r
              <app-skeleton [height]="60" [width]="'60px'" borderRadius="8px"></app-skeleton>\r
              <div class="flex-grow-1">\r
                <app-skeleton [height]="16" [width]="'70%'" class="mb-2"></app-skeleton>\r
                <app-skeleton [height]="14" [width]="'50%'"></app-skeleton>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- No Menu Selected -->\r
    <div *ngIf="!loading && !selectedMenu" class="text-center py-5">\r
      <i class="bi bi-calendar-x display-4 text-muted"></i>\r
      <p class="mt-3 text-muted">No menu available for this week</p>\r
    </div>\r
\r
    <!-- Menu Details -->\r
    <div *ngIf="!loading && selectedMenu" class="menu-details">\r
      <div class="card mb-4">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <div>\r
            <h5 class="mb-1">{{ selectedMenu.name }}</h5>\r
            <small class="text-muted">\r
              <i class="bi bi-calendar3 me-1"></i>\r
              {{ selectedMenu.menuDate | date:'fullDate' }}\r
            </small>\r
          </div>\r
          <button class="btn preferences " (click)="saveSelections()" [disabled]="savingSelections">\r
            <span *ngIf="savingSelections" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ savingSelections ? 'Saving...' : 'Save Preferences' }}\r
          </button>\r
        </div>\r
\r
        <div class="card-body">\r
          <!-- Allergy Warnings -->\r
          <div class="alert alert-danger mb-4" *ngIf="childMenuView?.allergyWarnings?.length">\r
            <strong><i class="bi bi-exclamation-triangle me-2"></i>Allergy Warnings:</strong>\r
            <ul class="mb-0 mt-2">\r
              <li *ngFor="let warning of childMenuView?.allergyWarnings || []">{{ warning }}</li>\r
            </ul>\r
          </div>\r
\r
          <!-- Menu Description -->\r
          <p *ngIf="selectedMenu.description" class="text-muted mb-4">\r
            {{ selectedMenu.description }}\r
          </p>\r
\r
          <!-- Meals by Type -->\r
          <div *ngFor="let mealType of mealTypes" class="meal-section mb-4">\r
            <h6 class="meal-type-header">\r
              <i class="bi me-2" [class]="getMealTypeIcon(mealType)"></i>\r
              {{ mealType }}\r
            </h6>\r
\r
            <div class="meal-items">\r
              <div *ngFor="let item of getItemsForMealType(mealType)"\r
                   class="meal-item p-3 mb-2 border rounded"\r
                   [class.selected]="selections[item.id]?.isSelected"\r
                   [class.warning]="hasAllergyWarning(item)"\r
                   (click)="toggleSelection(item.id)">\r
                <div class="d-flex align-items-start">\r
                  <div class="selection-checkbox me-3">\r
                    <i class="bi" [class.bi-check-square-fill]="selections[item.id]?.isSelected"\r
                       [class.bi-square]="!selections[item.id]?.isSelected"\r
                       [class.text-success]="selections[item.id]?.isSelected"></i>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <strong>{{ item.foodItem.name }}</strong>\r
                    <span *ngIf="item.servingSize" class="text-muted ms-2">({{ item.servingSize }})</span>\r
                    <p *ngIf="item.foodItem.description" class="text-muted small mb-1">\r
                      {{ item.foodItem.description }}\r
                    </p>\r
\r
                    <!-- Nutritional Info - COMMENTED OUT\r
                    <div class="d-flex gap-3 small" *ngIf="item.foodItem.calories">\r
                      <span class="text-info">\r
                        <i class="bi bi-fire"></i> {{ item.foodItem.calories }} cal\r
                      </span>\r
                      <span *ngIf="item.foodItem.protein" class="text-secondary">\r
                        Protein: {{ item.foodItem.protein }}g\r
                      </span>\r
                    </div>\r
                    -->\r
\r
                    <!-- Allergens -->\r
                    <div *ngIf="item.foodItem.allergens" class="mt-1">\r
                      <span class="badge bg-warning text-dark">\r
                        <i class="bi bi-exclamation-triangle me-1"></i>\r
                        {{ item.foodItem.allergens }}\r
                      </span>\r
                    </div>\r
\r
                    <!-- Notes Input -->\r
                    <div class="mt-2" *ngIf="selections[item.id]" (click)="$event.stopPropagation()">\r
                      <input type="text" class="form-control form-control-sm"\r
                             placeholder="Add a note (e.g., extra portion, allergies)"\r
                             [(ngModel)]="selections[item.id].notes">\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div *ngIf="getItemsForMealType(mealType).length === 0"\r
                   class="text-center text-muted py-3">\r
                <small>No items for {{ mealType }}</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Nutrition Summary - COMMENTED OUT\r
          <div class="nutrition-summary p-3 bg-light rounded" *ngIf="selectedMenu.nutritionSummary">\r
            <h6><i class="bi bi-bar-chart me-2"></i>Daily Nutrition Summary</h6>\r
            <div class="row text-center mt-3">\r
              <div class="col">\r
                <div class="nutrition-value">{{ selectedMenu.nutritionSummary.totalCalories }}</div>\r
                <small class="text-muted">Calories</small>\r
              </div>\r
              <div class="col">\r
                <div class="nutrition-value">{{ selectedMenu.nutritionSummary.totalProtein }}g</div>\r
                <small class="text-muted">Protein</small>\r
              </div>\r
              <div class="col">\r
                <div class="nutrition-value">{{ selectedMenu.nutritionSummary.totalCarbohydrates }}g</div>\r
                <small class="text-muted">Carbs</small>\r
              </div>\r
              <div class="col">\r
                <div class="nutrition-value">{{ selectedMenu.nutritionSummary.totalFat }}g</div>\r
                <small class="text-muted">Fat</small>\r
              </div>\r
            </div>\r
          </div>\r
          -->\r
        </div>\r
      </div>\r
\r
      <!-- CACFP Compliance -->\r
      <div class="card">\r
        <div class="card-header">\r
          <h6 class="mb-0"><i class="bi bi-shield-check me-2"></i>CACFP Compliance</h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="row text-center">\r
            <div class="col-3">\r
              <div class="compliance-badge" [class.met]="selectedMenu.meetsGrainRequirement">\r
                <i class="bi" [class.bi-check-circle-fill]="selectedMenu.meetsGrainRequirement"\r
                   [class.bi-x-circle]="!selectedMenu.meetsGrainRequirement"></i>\r
                <small class="d-block">Grain</small>\r
              </div>\r
            </div>\r
            <div class="col-3">\r
              <div class="compliance-badge" [class.met]="selectedMenu.meetsProteinRequirement">\r
                <i class="bi" [class.bi-check-circle-fill]="selectedMenu.meetsProteinRequirement"\r
                   [class.bi-x-circle]="!selectedMenu.meetsProteinRequirement"></i>\r
                <small class="d-block">Protein</small>\r
              </div>\r
            </div>\r
            <div class="col-3">\r
              <div class="compliance-badge" [class.met]="selectedMenu.meetsDairyRequirement">\r
                <i class="bi" [class.bi-check-circle-fill]="selectedMenu.meetsDairyRequirement"\r
                   [class.bi-x-circle]="!selectedMenu.meetsDairyRequirement"></i>\r
                <small class="d-block">Dairy</small>\r
              </div>\r
            </div>\r
            <div class="col-3">\r
              <div class="compliance-badge" [class.met]="selectedMenu.meetsFruitVegRequirement">\r
                <i class="bi" [class.bi-check-circle-fill]="selectedMenu.meetsFruitVegRequirement"\r
                   [class.bi-x-circle]="!selectedMenu.meetsFruitVegRequirement"></i>\r
                <small class="d-block">Fruit/Veg</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    </ng-container>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/food-menu/parent-menu-view/parent-menu-view.component.scss */\n.parent-menu-view .body {\n  padding: 1rem;\n}\n.week-navigation h5 {\n  color: #202c4b;\n}\n.week-days-scroll .day-card {\n  min-width: 70px;\n  background: #fff;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.week-days-scroll .day-card:hover {\n  border-color: #4886ed;\n}\n.week-days-scroll .day-card.today {\n  border-color: #ffc107;\n  background-color: #fff9e6;\n}\n.week-days-scroll .day-card.has-menu {\n  border-color: #28a745;\n}\n.week-days-scroll .day-card.active {\n  background-color: #4886ed;\n  border-color: #4886ed;\n  color: white;\n}\n.week-days-scroll .day-card.active small,\n.week-days-scroll .day-card.active strong {\n  color: white !important;\n}\n.meal-section .meal-type-header {\n  color: #202c4b;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.meal-item {\n  background: #fff;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.meal-item:hover {\n  background-color: #f8f9fa;\n}\n.meal-item.selected {\n  background-color: #e8f5e9;\n  border-color: #28a745 !important;\n}\n.meal-item.warning {\n  border-color: #ffc107 !important;\n  background-color: #fff9e6;\n}\n.meal-item .selection-checkbox {\n  font-size: 1.5rem;\n}\n.nutrition-summary .nutrition-value {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #202c4b;\n}\n.compliance-badge {\n  padding: 1rem;\n}\n.compliance-badge i {\n  font-size: 2rem;\n  color: #dc3545;\n}\n.compliance-badge.met i {\n  color: #28a745;\n}\n.compliance-badge small {\n  color: #6c757d;\n  font-weight: 500;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.card {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 12px;\n}\n.card-header {\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.alert-danger {\n  background-color: #fff5f5;\n  border-color: #ffcdd2;\n  color: #c62828;\n}\n.alert-warning {\n  background-color: #fff9e6;\n  border-color: #ffe082;\n  color: #856404;\n}\n::ng-deep .header-info {\n  margin-bottom: 20px !important;\n}\n.preferences {\n  background: var(--primary-color);\n  color: #fff;\n}\n.preferences:disabled {\n  background: #a0c4ff;\n  border-color: #a0c4ff;\n  color: #e0e0e0;\n}\n/*# sourceMappingURL=parent-menu-view.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: ChildrenService }, { type: AuthService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentMenuViewComponent, { className: "ParentMenuViewComponent", filePath: "src/app/features/food-menu/parent-menu-view/parent-menu-view.component.ts", lineNumber: 23 });
})();
export {
  ParentMenuViewComponent
};
//# sourceMappingURL=chunk-LDHS3CLG.js.map
