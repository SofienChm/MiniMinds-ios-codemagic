import {
  COMMON_ALLERGENS,
  DIETARY_TAGS,
  FOOD_CATEGORIES,
  FoodMenuService
} from "./chunk-JLY7SDMZ.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/food-menu/food-items/food-items.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
function FoodItemsComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1);
  }
}
function FoodItemsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
}
function FoodItemsComponent_div_19_div_1_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.description);
  }
}
function FoodItemsComponent_div_19_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "small", 53);
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r3.allergens, " ");
  }
}
function FoodItemsComponent_div_19_div_1_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r5.trim(), " ");
  }
}
function FoodItemsComponent_div_19_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FoodItemsComponent_div_19_div_1_div_28_span_1_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r3.dietaryTags.split(","));
  }
}
function FoodItemsComponent_div_19_div_1_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2, "Inactive ");
    \u0275\u0275elementEnd();
  }
}
function FoodItemsComponent_div_19_div_1_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2, "Active ");
    \u0275\u0275elementEnd();
  }
}
function FoodItemsComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "span", 29);
    \u0275\u0275element(4, "i", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31)(7, "a", 32);
    \u0275\u0275element(8, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 34)(10, "li")(11, "a", 35);
    \u0275\u0275listener("click", function FoodItemsComponent_div_19_div_1_Template_a_click_11_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.openEditForm(item_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(12, "i", 36);
    \u0275\u0275text(13, "Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 35);
    \u0275\u0275listener("click", function FoodItemsComponent_div_19_div_1_Template_a_click_15_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.toggleStatus(item_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(16, "i", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 38);
    \u0275\u0275listener("click", function FoodItemsComponent_div_19_div_1_Template_a_click_19_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.deleteItem(item_r3);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(20, "i", 39);
    \u0275\u0275text(21, "Delete ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 40)(23, "h6", 41);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, FoodItemsComponent_div_19_div_1_p_25_Template, 2, 1, "p", 42);
    \u0275\u0275elementStart(26, "div", 43);
    \u0275\u0275template(27, FoodItemsComponent_div_19_div_1_div_27_Template, 4, 1, "div", 44)(28, FoodItemsComponent_div_19_div_1_div_28_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 46);
    \u0275\u0275template(30, FoodItemsComponent_div_19_div_1_small_30_Template, 3, 0, "small", 47)(31, FoodItemsComponent_div_19_div_1_small_31_Template, 3, 0, "small", 48);
    \u0275\u0275elementStart(32, "button", 49);
    \u0275\u0275listener("click", function FoodItemsComponent_div_19_div_1_Template_button_click_32_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditForm(item_r3));
    });
    \u0275\u0275element(33, "i", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("inactive-card", !item_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-left", "4px solid " + ctx_r3.getCategoryColor(item_r3.category));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r3.getCategoryColor(item_r3.category));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getCategoryIcon(item_r3.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.category, " ");
    \u0275\u0275advance(11);
    \u0275\u0275classProp("bi-eye", !item_r3.isActive)("bi-eye-slash", item_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.isActive ? "Deactivate" : "Activate", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.allergens);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.dietaryTags);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !item_r3.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.isActive);
  }
}
function FoodItemsComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64);
    \u0275\u0275element(4, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 66);
    \u0275\u0275text(6, "No food items found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 67)(8, "button", 68);
    \u0275\u0275listener("click", function FoodItemsComponent_div_19_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openAddForm());
    });
    \u0275\u0275element(9, "i", 69);
    \u0275\u0275text(10, " Add Your First Food Item ");
    \u0275\u0275elementEnd()()()()();
  }
}
function FoodItemsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, FoodItemsComponent_div_19_div_1_Template, 34, 20, "div", 24)(2, FoodItemsComponent_div_19_div_2_Template, 11, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.filteredItems.length === 0);
  }
}
function FoodItemsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function FoodItemsComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275elementEnd();
  }
}
function FoodItemsComponent_div_21_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    \u0275\u0275property("value", cat_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r9);
  }
}
function FoodItemsComponent_div_21_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "i", 99);
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
function FoodItemsComponent_div_21_img_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 100);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.imagePreview, \u0275\u0275sanitizeUrl);
  }
}
function FoodItemsComponent_div_21_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeImage());
    });
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function FoodItemsComponent_div_21_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_button_44_Template_button_click_0_listener() {
      const allergen_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleAllergen(allergen_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allergen_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-warning", ctx_r3.hasAllergen(allergen_r12))("btn-outline-secondary", !ctx_r3.hasAllergen(allergen_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", allergen_r12, " ");
  }
}
function FoodItemsComponent_div_21_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_button_48_Template_button_click_0_listener() {
      const tag_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleDietaryTag(tag_r14));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-success", ctx_r3.hasDietaryTag(tag_r14))("btn-outline-secondary", !ctx_r3.hasDietaryTag(tag_r14));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r14, " ");
  }
}
function FoodItemsComponent_div_21_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 104);
  }
}
function FoodItemsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "h5", 74);
    \u0275\u0275element(4, "i", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 76);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 23)(9, "div", 78)(10, "div", 79)(11, "label", 80);
    \u0275\u0275text(12, "Name ");
    \u0275\u0275elementStart(13, "span", 57);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_div_21_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formItem.name, $event) || (ctx_r3.formItem.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 78)(17, "div", 79)(18, "label", 80);
    \u0275\u0275text(19, "Category ");
    \u0275\u0275elementStart(20, "span", 57);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 82);
    \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_div_21_Template_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formItem.category, $event) || (ctx_r3.formItem.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(23, "option", 11);
    \u0275\u0275text(24, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, FoodItemsComponent_div_21_option_25_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 79)(27, "label", 80);
    \u0275\u0275text(28, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 83);
    \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_div_21_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formItem.description, $event) || (ctx_r3.formItem.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 79)(31, "label", 80);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 84)(35, "input", 85, 0);
    \u0275\u0275listener("change", function FoodItemsComponent_div_21_Template_input_change_35_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "label", 86);
    \u0275\u0275template(38, FoodItemsComponent_div_21_div_38_Template, 5, 3, "div", 87)(39, FoodItemsComponent_div_21_img_39_Template, 1, 1, "img", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, FoodItemsComponent_div_21_button_40_Template, 4, 3, "button", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "h6", 90);
    \u0275\u0275text(42, "Allergens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 91);
    \u0275\u0275template(44, FoodItemsComponent_div_21_button_44_Template, 2, 5, "button", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "h6", 90);
    \u0275\u0275text(46, "Dietary Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 91);
    \u0275\u0275template(48, FoodItemsComponent_div_21_button_48_Template, 2, 5, "button", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 94)(50, "button", 95);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 96);
    \u0275\u0275listener("click", function FoodItemsComponent_div_21_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveItem());
    });
    \u0275\u0275template(53, FoodItemsComponent_div_21_span_53_Template, 1, 0, "span", 97);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingItem ? "Edit Food Item" : "Add Food Item", " ");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formItem.name);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formItem.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formItem.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 14, "FOOD_MENU.FOOD_IMAGE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r3.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.imagePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.imagePreview);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.allergens);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.dietaryTags);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.saving ? "Saving..." : ctx_r3.editingItem ? "Update" : "Add", " ");
  }
}
var FoodItemsComponent = class _FoodItemsComponent {
  foodMenuService;
  router;
  translate;
  pageTitleService;
  fileInput;
  foodItems = [];
  filteredItems = [];
  loading = false;
  searchTerm = "";
  selectedCategory = "";
  showInactive = false;
  // Form state
  showForm = false;
  editingItem = null;
  formItem = this.getEmptyItem();
  saving = false;
  // Image upload state
  imagePreview = null;
  categories = FOOD_CATEGORIES;
  allergens = COMMON_ALLERGENS;
  dietaryTags = DIETARY_TAGS;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  constructor(foodMenuService, router, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.FOOD_DATABASE"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.loadFoodItems();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.FOOD_DATABASE"));
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
      { label: this.translate.instant("FOOD_MENU.TITLE"), url: "/food-menu" },
      { label: this.translate.instant("FOOD_MENU.FOOD_DATABASE") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        class: "btn-cancel-2 me-2",
        icon: "bi bi-arrow-left",
        action: () => this.router.navigate(["/food-menu"])
      },
      {
        label: this.translate.instant("FOOD_MENU.ADD_FOOD_ITEM"),
        class: "btn-add-global-2",
        action: () => this.openAddForm()
      }
    ];
  }
  loadFoodItems() {
    this.loading = true;
    this.foodMenuService.loadFoodItems(void 0, !this.showInactive).subscribe({
      next: (items) => {
        this.foodItems = items;
        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading food items:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: this.translate.instant("FOOD_MENU.ERROR_LOADING_ITEMS"),
          confirmButtonColor: "#7dd3c0"
        });
        this.loading = false;
      }
    });
  }
  applyFilter() {
    let filtered = [...this.foodItems];
    if (this.selectedCategory) {
      filtered = filtered.filter((f) => f.category === this.selectedCategory);
    }
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((f) => f.name.toLowerCase().includes(term) || f.description?.toLowerCase().includes(term) || f.allergens?.toLowerCase().includes(term));
    }
    if (!this.showInactive) {
      filtered = filtered.filter((f) => f.isActive);
    }
    this.filteredItems = filtered;
  }
  getEmptyItem() {
    return {
      name: "",
      description: "",
      category: "",
      calories: void 0,
      protein: void 0,
      carbohydrates: void 0,
      fat: void 0,
      fiber: void 0,
      sugar: void 0,
      allergens: "",
      dietaryTags: "",
      isActive: true
    };
  }
  openAddForm() {
    this.editingItem = null;
    this.formItem = this.getEmptyItem();
    this.imagePreview = null;
    this.showForm = true;
  }
  openEditForm(item) {
    this.editingItem = item;
    this.formItem = __spreadValues({}, item);
    this.imagePreview = item.imageUrl || null;
    this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
    this.imagePreview = null;
    this.resetFileInput();
    this.editingItem = null;
    this.formItem = this.getEmptyItem();
  }
  async saveItem() {
    if (!this.formItem.name || !this.formItem.category) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("COMMON.WARNING"),
        text: "Please fill in the required fields",
        confirmButtonColor: "#7dd3c0"
      });
      return;
    }
    this.saving = true;
    try {
      if (this.editingItem) {
        await this.foodMenuService.updateFoodItem(this.editingItem.id, this.formItem).toPromise();
      } else {
        await this.foodMenuService.createFoodItem(this.formItem).toPromise();
      }
      this.closeForm();
      this.loadFoodItems();
      showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
    } catch (error) {
      console.error("Error saving food item:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: this.translate.instant("FOOD_MENU.ERROR_SAVING_ITEM"),
        confirmButtonColor: "#7dd3c0"
      });
    } finally {
      this.saving = false;
    }
  }
  async deleteItem(item) {
    const result = await import_sweetalert2.default.fire({
      icon: "warning",
      title: this.translate.instant("COMMON.CONFIRM"),
      text: this.translate.instant("FOOD_MENU.DELETE_ITEM_CONFIRM", { name: item.name }),
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    });
    if (result.isConfirmed) {
      try {
        await this.foodMenuService.deleteFoodItem(item.id).toPromise();
        this.loadFoodItems();
        showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
      } catch (error) {
        console.error("Error deleting food item:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: this.translate.instant("FOOD_MENU.ERROR_DELETING_ITEM"),
          confirmButtonColor: "#7dd3c0"
        });
      }
    }
  }
  async toggleStatus(item) {
    try {
      await this.foodMenuService.toggleFoodItemStatus(item.id).toPromise();
      this.loadFoodItems();
      showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
    } catch (error) {
      console.error("Error toggling status:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: this.translate.instant("FOOD_MENU.ERROR_UPDATING_STATUS"),
        confirmButtonColor: "#7dd3c0"
      });
    }
  }
  toggleAllergen(allergen) {
    const current = this.formItem.allergens ? this.formItem.allergens.split(",").map((a) => a.trim()) : [];
    const index = current.indexOf(allergen);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(allergen);
    }
    this.formItem.allergens = current.filter((a) => a).join(", ");
  }
  hasAllergen(allergen) {
    if (!this.formItem.allergens)
      return false;
    return this.formItem.allergens.split(",").map((a) => a.trim()).includes(allergen);
  }
  toggleDietaryTag(tag) {
    const current = this.formItem.dietaryTags ? this.formItem.dietaryTags.split(",").map((t) => t.trim()) : [];
    const index = current.indexOf(tag);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(tag);
    }
    this.formItem.dietaryTags = current.filter((t) => t).join(", ");
  }
  hasDietaryTag(tag) {
    if (!this.formItem.dietaryTags)
      return false;
    return this.formItem.dietaryTags.split(",").map((t) => t.trim()).includes(tag);
  }
  getCategoryIcon(category) {
    const icons = {
      "Grain": "bi-basket2",
      "Protein": "bi-egg",
      "Dairy": "bi-droplet",
      "Fruit": "bi-apple",
      "Vegetable": "bi-flower1",
      "Beverage": "bi-cup-straw",
      "Other": "bi-three-dots"
    };
    return icons[category] || "bi-egg-fried";
  }
  getCategoryColor(category) {
    const colors = {
      "Grain": "#ffc107",
      "Protein": "#dc3545",
      "Dairy": "#17a2b8",
      "Fruit": "#28a745",
      "Vegetable": "#20c997",
      "Beverage": "#6610f2",
      "Other": "#6c757d"
    };
    return colors[category] || "#6c757d";
  }
  // Image upload methods
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: this.translate.instant("FOOD_MENU.INVALID_IMAGE_TYPE"),
        confirmButtonColor: "#7dd3c0"
      });
      this.resetFileInput();
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: this.translate.instant("FOOD_MENU.IMAGE_TOO_LARGE"),
        confirmButtonColor: "#7dd3c0"
      });
      this.resetFileInput();
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePreview = e.target?.result;
      this.formItem.imageUrl = this.imagePreview;
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.imagePreview = null;
    this.formItem.imageUrl = "";
    this.resetFileInput();
  }
  resetFileInput() {
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  static \u0275fac = function FoodItemsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodItemsComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodItemsComponent, selectors: [["app-food-items"]], viewQuery: function FoodItemsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, decls: 22, vars: 10, consts: [["fileInput", ""], [1, "container-fluid", "mt-4"], ["title", "Food Database", "subtitle", "Manage your food item library", "icon", "bi bi-database", 3, "breadcrumbs", "actions"], [1, "bg-white", "p-3", "border", "rounded-1", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4"], [1, "title-filter", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "input-group", 2, "width", "250px"], [1, "input-group-text", "bg-white"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search foods...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-select", 2, "width", "150px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "id", "showInactive", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], ["for", "showInactive", 1, "form-check-label"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "food-form-modal", 4, "ngIf"], [3, "value"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "row"], ["class", "col-xl-3 col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], ["class", "col-12 text-center py-5", 4, "ngIf"], [1, "col-xl-3", "col-lg-4", "col-md-6", "mb-4"], [1, "card", "h-100"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], [1, "bi", "me-1"], [1, "dropdown"], ["href", "#", "data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-light"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end", "p-2"], ["href", "#", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-pencil", "me-2"], [1, "bi", "me-2"], ["href", "#", 1, "dropdown-item", "rounded-1", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-2"], [1, "card-body"], [1, "card-title", "mb-1"], ["class", "text-muted small mb-2", 4, "ngIf"], [1, "tags-section"], ["class", "mb-1", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "text-muted", "d-flex", "justify-content-between"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], [1, "text-muted", "small", "mb-2"], [1, "mb-1"], [1, "text-warning"], [1, "bi", "bi-exclamation-triangle", "me-1"], ["class", "badge bg-light text-dark me-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "me-1"], [1, "text-danger"], [1, "bi", "bi-eye-slash", "me-1"], [1, "text-success"], [1, "bi", "bi-check-circle", "me-1"], [1, "col-12", "text-center", "py-5"], [1, "card", "card-general", "empty-state-card"], [1, "card-body", "text-center", "py-5"], [1, "empty-icon-wrapper", "mb-3"], [1, "bi", "bi-egg-fried"], [1, "empty-title"], [1, "d-flex", "justify-content-center"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle-dotted", "me-2"], [1, "modal-backdrop", 3, "click"], [1, "food-form-modal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-egg-fried", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "e.g., Whole Wheat Bread", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Optional description...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "file-upload-area"], ["type", "file", "id", "foodImage", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "foodImage", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", "alt", "Food preview", 3, "src", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "mt-3", "mb-2"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["type", "button", "class", "btn btn-sm", 3, "btn-warning", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-sm", 3, "btn-success", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], ["alt", "Food preview", 1, "preview-image", 3, "src"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "bi", "bi-x-circle"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function FoodItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-title-page", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "h4", 4);
      \u0275\u0275text(4, "Food Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function FoodItemsComponent_Template_input_input_9_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FoodItemsComponent_Template_select_change_10_listener() {
        return ctx.applyFilter();
      });
      \u0275\u0275elementStart(11, "option", 11);
      \u0275\u0275text(12, "All Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, FoodItemsComponent_option_13_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function FoodItemsComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showInactive, $event) || (ctx.showInactive = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FoodItemsComponent_Template_input_change_15_listener() {
        return ctx.loadFoodItems();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label", 15);
      \u0275\u0275text(17, "Show Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(18, FoodItemsComponent_div_18_Template, 2, 0, "div", 16)(19, FoodItemsComponent_div_19_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, FoodItemsComponent_div_20_Template, 1, 0, "div", 18)(21, FoodItemsComponent_div_21_Template, 55, 16, "div", 19);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.showInactive);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n.title-filter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #202c4b;\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  border: 1px solid #e9ecef;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.card.inactive-card[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background-color: #f8f9fa;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: 1px solid #f0f0f0;\n}\n.nutrition-info[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 0.375rem;\n  padding: 0.5rem;\n}\n.tags-section[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.food-form-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 90%;\n  max-width: 700px;\n  max-height: 90vh;\n}\n.food-form-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.food-form-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.food-form-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.food-form-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 0.5rem 1rem;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fff5f5;\n}\n/*# sourceMappingURL=food-items.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoodItemsComponent, [{
    type: Component,
    args: [{ selector: "app-food-items", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    title="Food Database"\r
    subtitle="Manage your food item library"\r
    icon="bi bi-database"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Filters -->\r
  <div class="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4">\r
    <h4 class="title-filter mb-0">Food Items</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search -->\r
      <div class="input-group" style="width: 250px;">\r
        <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>\r
        <input type="text" class="form-control" placeholder="Search foods..."\r
               [(ngModel)]="searchTerm" (input)="applyFilter()">\r
      </div>\r
\r
      <!-- Category Filter -->\r
      <select class="form-select" style="width: 150px;" [(ngModel)]="selectedCategory" (change)="applyFilter()">\r
        <option value="">All Categories</option>\r
        <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
      </select>\r
\r
      <!-- Show Inactive -->\r
      <div class="form-check">\r
        <input class="form-check-input" type="checkbox" [(ngModel)]="showInactive"\r
               (change)="loadFoodItems()" id="showInactive">\r
        <label class="form-check-label" for="showInactive">Show Inactive</label>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status"></div>\r
  </div>\r
\r
  <!-- Food Items Grid -->\r
  <div class="row" *ngIf="!loading">\r
    <div *ngFor="let item of filteredItems" class="col-xl-3 col-lg-4 col-md-6 mb-4">\r
      <div class="card h-100" [class.inactive-card]="!item.isActive">\r
        <div class="card-header d-flex justify-content-between align-items-center"\r
             [style.border-left]="'4px solid ' + getCategoryColor(item.category)">\r
          <span class="badge" [style.background-color]="getCategoryColor(item.category)">\r
            <i class="bi me-1" [class]="getCategoryIcon(item.category)"></i>\r
            {{ item.category }}\r
          </span>\r
          <div class="dropdown">\r
            <a href="#" class="btn btn-sm btn-light" data-bs-toggle="dropdown">\r
              <i class="bi bi-three-dots-vertical"></i>\r
            </a>\r
            <ul class="dropdown-menu dropdown-menu-end p-2">\r
              <li>\r
                <a class="dropdown-item rounded-1" href="#" (click)="openEditForm(item); $event.preventDefault()">\r
                  <i class="bi bi-pencil me-2"></i>Edit\r
                </a>\r
              </li>\r
              <li>\r
                <a class="dropdown-item rounded-1" href="#" (click)="toggleStatus(item); $event.preventDefault()">\r
                  <i class="bi me-2" [class.bi-eye]="!item.isActive" [class.bi-eye-slash]="item.isActive"></i>\r
                  {{ item.isActive ? 'Deactivate' : 'Activate' }}\r
                </a>\r
              </li>\r
              <li>\r
                <a class="dropdown-item rounded-1 text-danger" href="#" (click)="deleteItem(item); $event.preventDefault()">\r
                  <i class="bi bi-trash me-2"></i>Delete\r
                </a>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <h6 class="card-title mb-1">{{ item.name }}</h6>\r
          <p class="text-muted small mb-2" *ngIf="item.description">{{ item.description }}</p>\r
\r
          <!-- Nutritional Info - COMMENTED OUT\r
          <div class="nutrition-info mb-2" *ngIf="item.calories">\r
            <div class="row text-center">\r
              <div class="col-4">\r
                <small class="d-block text-muted">Calories</small>\r
                <strong>{{ item.calories }}</strong>\r
              </div>\r
              <div class="col-4" *ngIf="item.protein">\r
                <small class="d-block text-muted">Protein</small>\r
                <strong>{{ item.protein }}g</strong>\r
              </div>\r
              <div class="col-4" *ngIf="item.carbohydrates">\r
                <small class="d-block text-muted">Carbs</small>\r
                <strong>{{ item.carbohydrates }}g</strong>\r
              </div>\r
            </div>\r
          </div>\r
          -->\r
\r
          <!-- Tags -->\r
          <div class="tags-section">\r
            <div *ngIf="item.allergens" class="mb-1">\r
              <small class="text-warning">\r
                <i class="bi bi-exclamation-triangle me-1"></i>\r
                {{ item.allergens }}\r
              </small>\r
            </div>\r
            <div *ngIf="item.dietaryTags">\r
              <span *ngFor="let tag of item.dietaryTags.split(',')" class="badge bg-light text-dark me-1">\r
                {{ tag.trim() }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer text-muted d-flex justify-content-between">\r
          <small *ngIf="!item.isActive" class="text-danger">\r
            <i class="bi bi-eye-slash me-1"></i>Inactive\r
          </small>\r
          <small *ngIf="item.isActive" class="text-success">\r
            <i class="bi bi-check-circle me-1"></i>Active\r
          </small>\r
          <button class="btn btn-sm btn-outline-primary" (click)="openEditForm(item)">\r
            <i class="bi bi-pencil"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="filteredItems.length === 0" class="col-12 text-center py-5">\r
      <div class="card card-general empty-state-card">\r
        <div class="card-body text-center py-5">\r
          <div class="empty-icon-wrapper mb-3">\r
            <i class="bi bi-egg-fried"></i>\r
          </div>\r
          <h5 class="empty-title">No food items found</h5>\r
          <div class="d-flex justify-content-center ">\r
            <button class="action-btn custom-btn-2 btn-add-global-2" (click)="openAddForm()">\r
              <i class="bi bi-plus-circle-dotted me-2"></i>\r
             Add Your First Food Item\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add/Edit Form Modal -->\r
<div class="modal-backdrop" *ngIf="showForm" (click)="closeForm()"></div>\r
<div class="food-form-modal" *ngIf="showForm">\r
  <div class="modal-content">\r
    <div class="modal-header">\r
      <h5 class="modal-title">\r
        <i class="bi bi-egg-fried me-2"></i>\r
        {{ editingItem ? 'Edit Food Item' : 'Add Food Item' }}\r
      </h5>\r
      <button type="button" class="btn-close" (click)="closeForm()"></button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="row">\r
        <div class="col-md-6">\r
          <div class="mb-3">\r
            <label class="form-label">Name <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" [(ngModel)]="formItem.name"\r
                   placeholder="e.g., Whole Wheat Bread">\r
          </div>\r
        </div>\r
        <div class="col-md-6">\r
          <div class="mb-3">\r
            <label class="form-label">Category <span class="text-danger">*</span></label>\r
            <select class="form-select" [(ngModel)]="formItem.category">\r
              <option value="">Select Category</option>\r
              <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
            </select>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label">Description</label>\r
        <textarea class="form-control" rows="2" [(ngModel)]="formItem.description"\r
                  placeholder="Optional description..."></textarea>\r
      </div>\r
\r
      <!-- Image Upload -->\r
      <div class="mb-3">\r
        <label class="form-label">{{ 'FOOD_MENU.FOOD_IMAGE' | translate }}</label>\r
        <div class="file-upload-area">\r
          <input type="file" #fileInput id="foodImage" class="file-input"\r
                 (change)="onImageSelect($event)"\r
                 accept="image/jpeg,image/png,image/gif,image/webp">\r
          <label for="foodImage" class="file-upload-label">\r
            <div *ngIf="!imagePreview" class="upload-placeholder">\r
              <i class="bi bi-cloud-upload"></i>\r
              <span>{{ 'GLOBAL.UPLOAD_PHOTO' | translate }}</span>\r
            </div>\r
            <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image" alt="Food preview">\r
          </label>\r
          <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Nutritional Information - COMMENTED OUT\r
      <h6 class="mt-4 mb-3">Nutritional Information (per serving)</h6>\r
      <div class="row">\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Calories</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.calories" placeholder="0">\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Protein (g)</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.protein" placeholder="0">\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Carbs (g)</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.carbohydrates" placeholder="0">\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Fat (g)</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.fat" placeholder="0">\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Fiber (g)</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.fiber" placeholder="0">\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <div class="mb-3">\r
            <label class="form-label">Sugar (g)</label>\r
            <input type="number" class="form-control" [(ngModel)]="formItem.sugar" placeholder="0">\r
          </div>\r
        </div>\r
      </div>\r
      -->\r
\r
      <!-- Allergens -->\r
      <h6 class="mt-3 mb-2">Allergens</h6>\r
      <div class="d-flex flex-wrap gap-2 mb-3">\r
        <button *ngFor="let allergen of allergens"\r
                type="button"\r
                class="btn btn-sm"\r
                [class.btn-warning]="hasAllergen(allergen)"\r
                [class.btn-outline-secondary]="!hasAllergen(allergen)"\r
                (click)="toggleAllergen(allergen)">\r
          {{ allergen }}\r
        </button>\r
      </div>\r
\r
      <!-- Dietary Tags -->\r
      <h6 class="mt-3 mb-2">Dietary Tags</h6>\r
      <div class="d-flex flex-wrap gap-2 mb-3">\r
        <button *ngFor="let tag of dietaryTags"\r
                type="button"\r
                class="btn btn-sm"\r
                [class.btn-success]="hasDietaryTag(tag)"\r
                [class.btn-outline-secondary]="!hasDietaryTag(tag)"\r
                (click)="toggleDietaryTag(tag)">\r
          {{ tag }}\r
        </button>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button type="button" class="btn btn-secondary" (click)="closeForm()">Cancel</button>\r
      <button type="button" class="btn btn-primary" (click)="saveItem()" [disabled]="saving">\r
        <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
        {{ saving ? 'Saving...' : (editingItem ? 'Update' : 'Add') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/food-menu/food-items/food-items.component.scss */\n.title-filter {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #202c4b;\n}\n.card {\n  transition: all 0.2s ease-in-out;\n  border: 1px solid #e9ecef;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.card.inactive-card {\n  opacity: 0.7;\n  background-color: #f8f9fa;\n}\n.card-header {\n  background-color: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.card-footer {\n  background-color: #fff;\n  border-top: 1px solid #f0f0f0;\n}\n.nutrition-info {\n  background-color: #f8f9fa;\n  border-radius: 0.375rem;\n  padding: 0.5rem;\n}\n.tags-section {\n  min-height: 40px;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.food-form-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 90%;\n  max-width: 700px;\n  max-height: 90vh;\n}\n.food-form-modal .modal-content {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.food-form-modal .modal-header {\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.food-form-modal .modal-body {\n  padding: 1rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.food-form-modal .modal-footer {\n  padding: 1rem;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n.dropdown-menu {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.dropdown-menu .dropdown-item {\n  font-size: 14px;\n  padding: 0.5rem 1rem;\n}\n.dropdown-menu .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-menu .dropdown-item.text-danger:hover {\n  background-color: #fff5f5;\n}\n/*# sourceMappingURL=food-items.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodItemsComponent, { className: "FoodItemsComponent", filePath: "src/app/features/food-menu/food-items/food-items.component.ts", lineNumber: 21 });
})();
export {
  FoodItemsComponent
};
//# sourceMappingURL=chunk-SE5G2HRA.js.map
