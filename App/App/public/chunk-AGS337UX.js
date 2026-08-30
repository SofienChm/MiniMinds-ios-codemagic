import {
  FoodMenuService,
  MEAL_TYPES
} from "./chunk-JLY7SDMZ.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  FormsModule
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
  NgClass,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/food-menu/menu-detail/menu-detail.component.ts
function MenuDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Loading menu details...");
    \u0275\u0275elementEnd()();
  }
}
function MenuDetailComponent_div_3_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Template");
    \u0275\u0275elementEnd();
  }
}
function MenuDetailComponent_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 22);
    \u0275\u0275text(2, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.menu.description);
  }
}
function MenuDetailComponent_div_3_div_74_li_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", item_r2.servingSize, ")");
  }
}
function MenuDetailComponent_div_3_div_74_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 57);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275template(3, MenuDetailComponent_div_3_div_74_li_6_span_3_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.foodItem.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.servingSize);
  }
}
function MenuDetailComponent_div_3_div_74_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 59)(1, "small");
    \u0275\u0275text(2, "No items");
    \u0275\u0275elementEnd()();
  }
}
function MenuDetailComponent_div_3_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "h6", 52);
    \u0275\u0275element(3, "i", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 54);
    \u0275\u0275template(6, MenuDetailComponent_div_3_div_74_li_6_Template, 4, 2, "li", 55)(7, MenuDetailComponent_div_3_div_74_li_7_Template, 3, 0, "li", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mealType_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getMealTypeIcon(mealType_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mealType_r3, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getMenuItemsByMealType(mealType_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getMenuItemsByMealType(mealType_r3).length === 0);
  }
}
function MenuDetailComponent_div_3_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 60);
    \u0275\u0275element(2, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 62);
    \u0275\u0275text(4, "No selections yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6, "No parent selections have been made yet for this menu.");
    \u0275\u0275elementEnd()();
  }
}
function MenuDetailComponent_div_3_div_85_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275element(1, "i", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", child_r5.allergies, " ");
  }
}
function MenuDetailComponent_div_3_div_85_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", child_r5.totalDeclined, " declined");
  }
}
function MenuDetailComponent_div_3_div_85_div_17_div_2_li_6_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 87);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sel_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", sel_r6.notes, " ");
  }
}
function MenuDetailComponent_div_3_div_85_div_17_div_2_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275elementStart(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MenuDetailComponent_div_3_div_85_div_17_div_2_li_6_small_5_Template, 3, 1, "small", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", sel_r6.isSelected)("selection-selected", sel_r6.isSelected)("bi-x-circle-fill", !sel_r6.isSelected)("selection-declined", !sel_r6.isSelected);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-decoration-line-through", !sel_r6.isSelected)("text-muted", !sel_r6.isSelected);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sel_r6.foodItemName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sel_r6.notes);
  }
}
function MenuDetailComponent_div_3_div_85_div_17_div_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 59)(1, "small");
    \u0275\u0275text(2, "No selections");
    \u0275\u0275elementEnd()();
  }
}
function MenuDetailComponent_div_3_div_85_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 81)(2, "h6", 82);
    \u0275\u0275element(3, "i", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 54);
    \u0275\u0275template(6, MenuDetailComponent_div_3_div_85_div_17_div_2_li_6_Template, 6, 14, "li", 83)(7, MenuDetailComponent_div_3_div_85_div_17_div_2_li_7_Template, 3, 0, "li", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mealType_r7 = ctx.$implicit;
    const child_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getMealTypeIcon(mealType_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mealType_r7, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getChildSelectionsByMealType(child_r5, mealType_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getChildSelectionsByMealType(child_r5, mealType_r7).length === 0);
  }
}
function MenuDetailComponent_div_3_div_85_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 41);
    \u0275\u0275template(2, MenuDetailComponent_div_3_div_85_div_17_div_2_Template, 8, 4, "div", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.mealTypes);
  }
}
function MenuDetailComponent_div_3_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275listener("click", function MenuDetailComponent_div_3_div_85_Template_div_click_1_listener() {
      const child_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleChildExpand(child_r5.childId));
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "div", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 70);
    \u0275\u0275template(11, MenuDetailComponent_div_3_div_85_span_11_Template, 3, 1, "span", 71);
    \u0275\u0275elementStart(12, "div", 72)(13, "span", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MenuDetailComponent_div_3_div_85_span_15_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, MenuDetailComponent_div_3_div_85_div_17_Template, 3, 1, "div", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r0.isChildExpanded(child_r5.childId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", child_r5.childName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r5.childName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Parent: ", child_r5.parentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", child_r5.allergies);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", child_r5.totalSelected, " selected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r5.totalDeclined > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-chevron-down", !ctx_r0.isChildExpanded(child_r5.childId))("bi-chevron-up", ctx_r0.isChildExpanded(child_r5.childId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isChildExpanded(child_r5.childId));
  }
}
function MenuDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13);
    \u0275\u0275element(7, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h4", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16)(12, "span", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MenuDetailComponent_div_3_span_14_Template, 2, 0, "span", 18);
    \u0275\u0275elementStart(15, "span", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21)(19, "div")(20, "p", 22);
    \u0275\u0275text(21, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 23);
    \u0275\u0275element(23, "i", 24);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, MenuDetailComponent_div_3_div_25_Template, 5, 1, "div", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 25)(27, "div", 26)(28, "div", 27)(29, "div", 28)(30, "div", 29);
    \u0275\u0275element(31, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 31)(33, "h3", 32);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 33);
    \u0275\u0275text(36, "Children with selections");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "div", 28)(40, "div", 34);
    \u0275\u0275element(41, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 31)(43, "h3", 32);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 33);
    \u0275\u0275text(46, "Items total menu");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 35);
    \u0275\u0275element(51, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 31)(53, "h3", 32);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 33);
    \u0275\u0275text(56, "Children with allergies");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(57, "div", 26)(58, "div", 27)(59, "div", 28)(60, "div", 37);
    \u0275\u0275element(61, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 31)(63, "h3", 32);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 33);
    \u0275\u0275text(66, "Children declined items");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 39)(68, "div", 9)(69, "h5");
    \u0275\u0275element(70, "i", 40);
    \u0275\u0275text(71, "Today's Menu Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 20)(73, "div", 41);
    \u0275\u0275template(74, MenuDetailComponent_div_3_div_74_Template, 8, 4, "div", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 43)(76, "div", 44)(77, "h5");
    \u0275\u0275element(78, "i", 45);
    \u0275\u0275text(79, "Children's Food Selections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 19);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 46);
    \u0275\u0275template(83, MenuDetailComponent_div_3_div_83_Template, 7, 0, "div", 2);
    \u0275\u0275elementStart(84, "div", 47);
    \u0275\u0275template(85, MenuDetailComponent_div_3_div_85_Template, 18, 13, "div", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.menu.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-published", ctx_r0.menu.isPublished)("badge-draft", !ctx_r0.menu.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.menu.isPublished ? "Published" : "Draft", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.menu.isTemplate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.menu.menuType);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.formatDate(ctx_r0.menu.menuDate), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.menu.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getTotalChildren());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.menu.menuItems == null ? null : ctx_r0.menu.menuItems.length) || 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.getChildrenWithAllergies().length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.getChildrenWithDeclines().length);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.mealTypes);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.childSelections.length, " children");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.childSelections.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.childSelections);
  }
}
function MenuDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 60);
    \u0275\u0275element(3, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 62);
    \u0275\u0275text(5, "Menu not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 63);
    \u0275\u0275text(7, "The menu you're looking for doesn't exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 92);
    \u0275\u0275listener("click", function MenuDetailComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275element(9, "i", 93);
    \u0275\u0275text(10, " Back to Menus ");
    \u0275\u0275elementEnd()()();
  }
}
var MenuDetailComponent = class _MenuDetailComponent {
  foodMenuService;
  route;
  router;
  authService;
  translate;
  pageTitleService;
  menuId = null;
  menu = null;
  childSelections = [];
  loading = false;
  expandedChildId = null;
  selectedMealTypeFilter = "";
  mealTypes = MEAL_TYPES;
  titleActions = [];
  breadcrumbs = [];
  langChangeSub;
  constructor(foodMenuService, route, router, authService, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.MENU_DETAILS"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.menuId = +params["id"];
        this.loadMenuDetails();
      }
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.MENU_DETAILS"));
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
      { label: this.menu?.name || this.translate.instant("FOOD_MENU.MENU_DETAILS") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("FOOD_MENU.BACK_TO_MENU_LIST"),
        class: "btn-outline-secondary btn-cancel-global",
        icon: "bi bi-arrow-left",
        action: () => this.router.navigate(["/food-menu"])
      }
    ];
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.titleActions.push({
        label: this.translate.instant("FOOD_MENU.EDIT_MENU"),
        class: "btn-edit-global-2",
        icon: "bi bi-pencil-square",
        action: () => this.router.navigate(["/food-menu/edit", this.menuId])
      });
    }
  }
  loadMenuDetails() {
    if (!this.menuId)
      return;
    this.loading = true;
    this.foodMenuService.getMenu(this.menuId).subscribe({
      next: (menu) => {
        this.menu = menu;
        this.setupBreadcrumbs();
      },
      error: (error) => console.error("Error loading menu:", error)
    });
    this.foodMenuService.getMenuSelections(this.menuId).subscribe({
      next: (selections) => {
        this.processSelections(selections);
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading selections:", error);
        this.loading = false;
      }
    });
  }
  processSelections(selections) {
    const childMap = /* @__PURE__ */ new Map();
    selections.forEach((sel) => {
      if (!childMap.has(sel.childId)) {
        childMap.set(sel.childId, {
          childId: sel.childId,
          childName: sel.childName,
          allergies: sel.childAllergies,
          parentName: sel.parentName,
          selections: [],
          totalSelected: 0,
          totalDeclined: 0,
          hasSubmitted: true
        });
      }
      const child = childMap.get(sel.childId);
      child.selections.push({
        menuItemId: sel.menuItemId,
        foodItemName: sel.foodItemName,
        mealType: sel.mealType,
        isSelected: sel.isSelected,
        notes: sel.notes,
        selectionStatus: sel.selectionStatus
      });
      if (sel.isSelected) {
        child.totalSelected++;
      } else {
        child.totalDeclined++;
      }
    });
    this.childSelections = Array.from(childMap.values()).sort((a, b) => a.childName.localeCompare(b.childName));
  }
  toggleChildExpand(childId) {
    this.expandedChildId = this.expandedChildId === childId ? null : childId;
  }
  isChildExpanded(childId) {
    return this.expandedChildId === childId;
  }
  getChildSelectionsByMealType(child, mealType) {
    return child.selections.filter((s) => s.mealType === mealType);
  }
  getMenuItemsByMealType(mealType) {
    if (!this.menu?.menuItems)
      return [];
    return this.menu.menuItems.filter((mi) => mi.mealType === mealType);
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
  getTotalChildren() {
    return this.childSelections.length;
  }
  getChildrenWithDeclines() {
    return this.childSelections.filter((c) => c.totalDeclined > 0);
  }
  getChildrenWithAllergies() {
    return this.childSelections.filter((c) => c.allergies);
  }
  goBack() {
    this.router.navigate(["/food-menu"]);
  }
  editMenu() {
    if (this.menuId) {
      this.router.navigate(["/food-menu/edit", this.menuId]);
    }
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  static \u0275fac = function MenuDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuDetailComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuDetailComponent, selectors: [["app-menu-detail"]], decls: 5, vars: 6, consts: [[1, "container-fluid", "py-4", "mt-4"], [3, "title", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["class", "card card-general", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "spinner-custom"], [1, "mt-2", "text-muted"], [1, "card", "card-general", "card-detail_pages", "mb-4"], [1, "card-header"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "d-flex", "align-items-center", "mb-2"], [1, "menu-header-icon", "me-3"], [1, "bi", "bi-egg-fried"], [1, "mb-1", "title-body"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge"], ["class", "badge badge-template", 4, "ngIf"], [1, "badge", "badge-type"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "body-information"], [1, "mb-0", "information-title"], [1, "text-dark", "information-description"], [1, "bi", "bi-calendar3", "me-1"], [1, "row", "mb-4", "g-3"], [1, "col-md-3"], [1, "card", "stat-card"], [1, "card-body", "d-flex", "align-items-center", "p-4"], [1, "stat-icon-wrapper", "me-3", "stat-icon-primary"], [1, "bi", "bi-people-fill"], [1, "stat-content"], [1, "stat-number", "mb-1"], [1, "stat-label", "mb-0"], [1, "stat-icon-wrapper", "me-3", "stat-icon-secondary"], [1, "stat-icon-wrapper", "me-3", "stat-icon-warning"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "stat-icon-wrapper", "me-3", "stat-icon-danger"], [1, "bi", "bi-x-circle-fill"], [1, "card", "card-general", "mb-4"], [1, "bi", "bi-list-ul"], [1, "row"], ["class", "col-md-4 col-lg mb-3 mb-lg-0", 4, "ngFor", "ngForOf"], [1, "card", "card-general", "card-recently"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-person-lines-fill"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item p-0", 4, "ngFor", "ngForOf"], [1, "badge", "badge-template"], [1, "col-md-4", "col-lg", "mb-3", "mb-lg-0"], [1, "meal-type-card", "p-3", "h-100"], [1, "d-flex", "align-items-center", "mb-3", "meal-type-title"], [1, "bi", "me-2", 3, "ngClass"], [1, "list-unstyled", "mb-0"], ["class", "mb-2 menu-item-row", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "mb-2", "menu-item-row"], [1, "bi", "bi-dot"], [1, "text-muted"], [1, "empty-icon-wrapper", "mb-3"], [1, "bi", "bi-inbox"], [1, "empty-title"], [1, "empty-description"], [1, "list-group-item", "p-0"], [1, "child-header", "p-3", "d-flex", "align-items-center", "justify-content-between", "cursor-pointer", 3, "click"], [1, "d-flex", "align-items-center"], [1, "avatar-circle", "me-3"], [1, "mb-0", "title-card__name"], [1, "card-age"], [1, "d-flex", "align-items-center", "gap-3"], ["class", "badge badge-warning-custom", 4, "ngIf"], [1, "text-end"], [1, "badge", "badge-published", "me-1"], ["class", "badge badge-danger-custom", 4, "ngIf"], [1, "bi", "expand-icon"], ["class", "child-details p-3 border-top", 4, "ngIf"], [1, "badge", "badge-warning-custom"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "badge", "badge-danger-custom"], [1, "child-details", "p-3", "border-top"], [1, "meal-selections", "p-3", "rounded"], [1, "border-bottom", "pb-2", "mb-2", "d-flex", "align-items-center", "meal-type-title"], ["class", "mb-2 d-flex align-items-start selection-item", 4, "ngFor", "ngForOf"], [1, "mb-2", "d-flex", "align-items-start", "selection-item"], [1, "bi", "me-2", "mt-1"], ["class", "d-block note-text", 4, "ngIf"], [1, "d-block", "note-text"], [1, "bi", "bi-chat-left-text", "me-1"], [1, "card", "card-general"], [1, "card-body", "text-center", "py-5"], [1, "bi", "bi-calendar-x"], [1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"]], template: function MenuDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275template(2, MenuDetailComponent_div_2_Template, 4, 0, "div", 2)(3, MenuDetailComponent_div_3_Template, 86, 18, "div", 3)(4, MenuDetailComponent_div_4_Template, 11, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", (ctx.menu == null ? null : ctx.menu.name) || "Menu Details")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.menu);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.menu);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, TitlePage, TranslateModule], styles: ["\n\n.spinner-custom[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-header-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: var(--gradient-primary);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.badge-published[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: var(--primary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: rgba(106, 114, 135, 0.15) !important;\n  color: var(--color-gray) !important;\n  font-weight: 600 !important;\n}\n.badge-template[_ngcontent-%COMP%] {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-type[_ngcontent-%COMP%] {\n  background: var(--gradient-primary) !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n.badge-warning-custom[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.15) !important;\n  color: #856404 !important;\n  font-weight: 600 !important;\n}\n.badge-danger-custom[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 107, 0.15) !important;\n  color: var(--red-color) !important;\n  font-weight: 600 !important;\n}\n.stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.stat-icon-wrapper.stat-icon-primary[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.15);\n}\n.stat-icon-wrapper.stat-icon-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.stat-icon-wrapper.stat-icon-secondary[_ngcontent-%COMP%] {\n  background: rgba(125, 185, 255, 0.15);\n}\n.stat-icon-wrapper.stat-icon-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.stat-icon-wrapper.stat-icon-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.15);\n}\n.stat-icon-wrapper.stat-icon-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.stat-icon-wrapper.stat-icon-danger[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 107, 0.15);\n}\n.stat-icon-wrapper.stat-icon-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--red-color);\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid #E9EDF4;\n  box-shadow: var(--shadow-card);\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--title-color);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-gray);\n}\n.meal-type-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.08) 0%,\n      rgba(125, 185, 255, 0.08) 100%);\n  border: 1px solid rgba(125, 211, 192, 0.2);\n  border-radius: 10px;\n}\n.meal-type-title[_ngcontent-%COMP%] {\n  color: var(--title-color);\n  font-weight: 600;\n  font-size: 14px;\n}\n.meal-type-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.menu-item-row[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-color);\n}\n.menu-item-row[_ngcontent-%COMP%]   .bi-dot[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.child-header[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.child-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(125, 211, 192, 0.05);\n}\n.child-header.expanded[_ngcontent-%COMP%] {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.expand-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 16px;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.child-details[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.05) 0%,\n      rgba(125, 185, 255, 0.05) 100%);\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meal-selections[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #E9EDF4;\n  min-height: 100px;\n}\n.selection-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.selection-selected[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n.selection-declined[_ngcontent-%COMP%] {\n  color: var(--red-color) !important;\n}\n.note-text[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-size: 12px;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-color: #E9EDF4;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.empty-icon-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.empty-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--primary-color);\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 8px;\n}\n.empty-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-gray);\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n  .stat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .child-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 12px;\n  }\n  .child-header[_ngcontent-%COMP%]   .d-flex.align-items-center.gap-3[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=menu-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuDetailComponent, [{
    type: Component,
    args: [{ selector: "app-menu-detail", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid py-4 mt-4">\r
  <app-title-page\r
    [title]="menu?.name || 'Menu Details'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border spinner-custom" role="status"></div>\r
    <p class="mt-2 text-muted">Loading menu details...</p>\r
  </div>\r
\r
  <!-- Content -->\r
  <div *ngIf="!loading && menu">\r
    <!-- Menu Header Card -->\r
    <div class="card card-general card-detail_pages mb-4">\r
      <div class="card-header">\r
        <div class="row align-items-center">\r
          <div class="col-md-8">\r
            <div class="d-flex align-items-center mb-2">\r
              <div class="menu-header-icon me-3">\r
                <i class="bi bi-egg-fried"></i>\r
              </div>\r
              <div>\r
                <h4 class="mb-1 title-body">{{ menu.name }}</h4>\r
                <div class="d-flex align-items-center gap-2">\r
                  <span class="badge" [class.badge-published]="menu.isPublished" [class.badge-draft]="!menu.isPublished">\r
                    {{ menu.isPublished ? 'Published' : 'Draft' }}\r
                  </span>\r
                  <span *ngIf="menu.isTemplate" class="badge badge-template">Template</span>\r
                  <span class="badge badge-type">{{ menu.menuType }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between body-information">\r
          <div>\r
            <p class="mb-0 information-title">Date</p>\r
            <p class="text-dark information-description">\r
              <i class="bi bi-calendar3 me-1"></i>{{ formatDate(menu.menuDate) }}\r
            </p>\r
          </div>\r
          <div *ngIf="menu.description">\r
            <p class="mb-0 information-title">Description</p>\r
            <p class="text-dark information-description">{{ menu.description }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Summary Cards -->\r
    <div class="row mb-4 g-3">\r
      <div class="col-md-3">\r
        <div class="card stat-card">\r
          <div class="card-body d-flex align-items-center p-4">\r
            <div class="stat-icon-wrapper me-3 stat-icon-primary">\r
              <i class="bi bi-people-fill"></i>\r
            </div>\r
            <div class="stat-content">\r
              <h3 class="stat-number mb-1">{{ getTotalChildren() }}</h3>\r
              <p class="stat-label mb-0">Children with selections</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-md-3">\r
        <div class="card stat-card">\r
          <div class="card-body d-flex align-items-center p-4">\r
            <div class="stat-icon-wrapper me-3 stat-icon-secondary">\r
              <i class="bi bi-egg-fried"></i>\r
            </div>\r
            <div class="stat-content">\r
              <h3 class="stat-number mb-1">{{ menu.menuItems?.length || 0 }}</h3>\r
              <p class="stat-label mb-0">Items total menu</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-md-3">\r
        <div class="card stat-card">\r
          <div class="card-body d-flex align-items-center p-4">\r
            <div class="stat-icon-wrapper me-3 stat-icon-warning">\r
              <i class="bi bi-exclamation-triangle-fill"></i>\r
            </div>\r
            <div class="stat-content">\r
              <h3 class="stat-number mb-1">{{ getChildrenWithAllergies().length }}</h3>\r
              <p class="stat-label mb-0">Children with allergies</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-md-3">\r
        <div class="card stat-card">\r
          <div class="card-body d-flex align-items-center p-4">\r
            <div class="stat-icon-wrapper me-3 stat-icon-danger">\r
              <i class="bi bi-x-circle-fill"></i>\r
            </div>\r
            <div class="stat-content">\r
              <h3 class="stat-number mb-1">{{ getChildrenWithDeclines().length }}</h3>\r
              <p class="stat-label mb-0">Children declined items</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Menu Items Overview -->\r
    <div class="card card-general mb-4">\r
      <div class="card-header">\r
        <h5><i class="bi bi-list-ul"></i>Today's Menu Items</h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="row">\r
          <div *ngFor="let mealType of mealTypes" class="col-md-4 col-lg mb-3 mb-lg-0">\r
            <div class="meal-type-card p-3 h-100">\r
              <h6 class="d-flex align-items-center mb-3 meal-type-title">\r
                <i class="bi me-2" [ngClass]="getMealTypeIcon(mealType)"></i>\r
                {{ mealType }}\r
              </h6>\r
              <ul class="list-unstyled mb-0">\r
                <li *ngFor="let item of getMenuItemsByMealType(mealType)" class="mb-2 menu-item-row">\r
                  <i class="bi bi-dot"></i>\r
                  {{ item.foodItem.name }}\r
                  <span *ngIf="item.servingSize" class="text-muted">({{ item.servingSize }})</span>\r
                </li>\r
                <li *ngIf="getMenuItemsByMealType(mealType).length === 0" class="text-muted">\r
                  <small>No items</small>\r
                </li>\r
              </ul>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Children Selections -->\r
    <div class="card card-general card-recently">\r
      <div class="card-header d-flex justify-content-between align-items-center">\r
        <h5><i class="bi bi-person-lines-fill"></i>Children's Food Selections</h5>\r
        <span class="badge badge-type">{{ childSelections.length }} children</span>\r
      </div>\r
      <div class="card-body p-0">\r
        <!-- No Selections -->\r
        <div *ngIf="childSelections.length === 0" class="text-center py-5">\r
          <div class="empty-icon-wrapper mb-3">\r
            <i class="bi bi-inbox"></i>\r
          </div>\r
          <h5 class="empty-title">No selections yet</h5>\r
          <p class="empty-description">No parent selections have been made yet for this menu.</p>\r
        </div>\r
\r
        <!-- Children List -->\r
        <div class="list-group list-group-flush">\r
          <div *ngFor="let child of childSelections" class="list-group-item p-0">\r
            <!-- Child Header (Clickable) -->\r
            <div class="child-header p-3 d-flex align-items-center justify-content-between cursor-pointer"\r
                 [class.expanded]="isChildExpanded(child.childId)"\r
                 (click)="toggleChildExpand(child.childId)">\r
              <div class="d-flex align-items-center">\r
                <div class="avatar-circle me-3">\r
                  {{ child.childName.charAt(0) }}\r
                </div>\r
                <div>\r
                  <h6 class="mb-0 title-card__name">{{ child.childName }}</h6>\r
                  <small class="card-age">Parent: {{ child.parentName }}</small>\r
                </div>\r
              </div>\r
              <div class="d-flex align-items-center gap-3">\r
                <!-- Allergy Badge -->\r
                <span *ngIf="child.allergies" class="badge badge-warning-custom">\r
                  <i class="bi bi-exclamation-triangle me-1"></i>{{ child.allergies }}\r
                </span>\r
                <!-- Selection Summary -->\r
                <div class="text-end">\r
                  <span class="badge badge-published me-1">{{ child.totalSelected }} selected</span>\r
                  <span *ngIf="child.totalDeclined > 0" class="badge badge-danger-custom">{{ child.totalDeclined }} declined</span>\r
                </div>\r
                <!-- Expand Icon -->\r
                <i class="bi expand-icon" [class.bi-chevron-down]="!isChildExpanded(child.childId)"\r
                   [class.bi-chevron-up]="isChildExpanded(child.childId)"></i>\r
              </div>\r
            </div>\r
\r
            <!-- Child Details (Expandable) -->\r
            <div *ngIf="isChildExpanded(child.childId)" class="child-details p-3 border-top">\r
              <div class="row">\r
                <div *ngFor="let mealType of mealTypes" class="col-md-4 col-lg mb-3 mb-lg-0">\r
                  <div class="meal-selections p-3 rounded">\r
                    <h6 class="border-bottom pb-2 mb-2 d-flex align-items-center meal-type-title">\r
                      <i class="bi me-2" [ngClass]="getMealTypeIcon(mealType)"></i>\r
                      {{ mealType }}\r
                    </h6>\r
                    <ul class="list-unstyled mb-0">\r
                      <li *ngFor="let sel of getChildSelectionsByMealType(child, mealType)"\r
                          class="mb-2 d-flex align-items-start selection-item">\r
                        <i class="bi me-2 mt-1"\r
                           [class.bi-check-circle-fill]="sel.isSelected"\r
                           [class.selection-selected]="sel.isSelected"\r
                           [class.bi-x-circle-fill]="!sel.isSelected"\r
                           [class.selection-declined]="!sel.isSelected"></i>\r
                        <div>\r
                          <span [class.text-decoration-line-through]="!sel.isSelected"\r
                                [class.text-muted]="!sel.isSelected">\r
                            {{ sel.foodItemName }}\r
                          </span>\r
                          <small *ngIf="sel.notes" class="d-block note-text">\r
                            <i class="bi bi-chat-left-text me-1"></i>{{ sel.notes }}\r
                          </small>\r
                        </div>\r
                      </li>\r
                      <li *ngIf="getChildSelectionsByMealType(child, mealType).length === 0"\r
                          class="text-muted">\r
                        <small>No selections</small>\r
                      </li>\r
                    </ul>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- No Menu Found -->\r
  <div *ngIf="!loading && !menu" class="card card-general">\r
    <div class="card-body text-center py-5">\r
      <div class="empty-icon-wrapper mb-3">\r
        <i class="bi bi-calendar-x"></i>\r
      </div>\r
      <h5 class="empty-title">Menu not found</h5>\r
      <p class="empty-description">The menu you're looking for doesn't exist.</p>\r
      <button class="action-btn custom-btn-2 btn-cancel-2" (click)="goBack()">\r
        <i class="bi bi-arrow-left me-2"></i>\r
        Back to Menus\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/food-menu/menu-detail/menu-detail.component.scss */\n.spinner-custom {\n  color: var(--primary-color);\n}\n.menu-header-icon {\n  width: 50px;\n  height: 50px;\n  background: var(--gradient-primary);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-header-icon i {\n  font-size: 24px;\n  color: white;\n}\n.badge-published {\n  background: rgba(125, 211, 192, 0.15) !important;\n  color: var(--primary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-draft {\n  background: rgba(106, 114, 135, 0.15) !important;\n  color: var(--color-gray) !important;\n  font-weight: 600 !important;\n}\n.badge-template {\n  background: rgba(125, 185, 255, 0.15) !important;\n  color: var(--secondary-color) !important;\n  font-weight: 600 !important;\n}\n.badge-type {\n  background: var(--gradient-primary) !important;\n  color: white !important;\n  font-weight: 500 !important;\n}\n.badge-warning-custom {\n  background: rgba(255, 193, 7, 0.15) !important;\n  color: #856404 !important;\n  font-weight: 600 !important;\n}\n.badge-danger-custom {\n  background: rgba(255, 107, 107, 0.15) !important;\n  color: var(--red-color) !important;\n  font-weight: 600 !important;\n}\n.stat-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrapper i {\n  font-size: 22px;\n}\n.stat-icon-wrapper.stat-icon-primary {\n  background: rgba(125, 211, 192, 0.15);\n}\n.stat-icon-wrapper.stat-icon-primary i {\n  color: var(--primary-color);\n}\n.stat-icon-wrapper.stat-icon-secondary {\n  background: rgba(125, 185, 255, 0.15);\n}\n.stat-icon-wrapper.stat-icon-secondary i {\n  color: var(--secondary-color);\n}\n.stat-icon-wrapper.stat-icon-warning {\n  background: rgba(255, 193, 7, 0.15);\n}\n.stat-icon-wrapper.stat-icon-warning i {\n  color: #ffc107;\n}\n.stat-icon-wrapper.stat-icon-danger {\n  background: rgba(255, 107, 107, 0.15);\n}\n.stat-icon-wrapper.stat-icon-danger i {\n  color: var(--red-color);\n}\n.stat-card {\n  border-radius: 12px;\n  border: 1px solid #E9EDF4;\n  box-shadow: var(--shadow-card);\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.stat-number {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--title-color);\n}\n.stat-label {\n  font-size: 13px;\n  color: var(--color-gray);\n}\n.meal-type-card {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.08) 0%,\n      rgba(125, 185, 255, 0.08) 100%);\n  border: 1px solid rgba(125, 211, 192, 0.2);\n  border-radius: 10px;\n}\n.meal-type-title {\n  color: var(--title-color);\n  font-weight: 600;\n  font-size: 14px;\n}\n.meal-type-title i {\n  color: var(--primary-color);\n}\n.menu-item-row {\n  font-size: 14px;\n  color: var(--text-color);\n}\n.menu-item-row .bi-dot {\n  color: var(--primary-color);\n}\n.avatar-circle {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.child-header {\n  transition: background-color 0.2s ease;\n}\n.child-header:hover {\n  background-color: rgba(125, 211, 192, 0.05);\n}\n.child-header.expanded {\n  background-color: rgba(125, 211, 192, 0.1);\n}\n.expand-icon {\n  color: var(--primary-color);\n  font-size: 16px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.child-details {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.05) 0%,\n      rgba(125, 185, 255, 0.05) 100%);\n  animation: slideDown 0.2s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meal-selections {\n  background: white;\n  border: 1px solid #E9EDF4;\n  min-height: 100px;\n}\n.selection-item {\n  font-size: 14px;\n}\n.selection-selected {\n  color: var(--primary-color) !important;\n}\n.selection-declined {\n  color: var(--red-color) !important;\n}\n.note-text {\n  color: var(--secondary-color);\n  font-size: 12px;\n}\n.list-group-item {\n  border-left: none;\n  border-right: none;\n  border-color: #E9EDF4;\n}\n.list-group-item:first-child {\n  border-top: none;\n}\n.empty-icon-wrapper {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.15) 0%,\n      rgba(125, 185, 255, 0.15) 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n.empty-icon-wrapper i {\n  font-size: 36px;\n  color: var(--primary-color);\n}\n.empty-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 8px;\n}\n.empty-description {\n  font-size: 14px;\n  color: var(--color-gray);\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n  .stat-card .card-body {\n    padding: 1rem !important;\n  }\n  .stat-icon-wrapper {\n    width: 40px;\n    height: 40px;\n  }\n  .stat-icon-wrapper i {\n    font-size: 18px;\n  }\n  .stat-number {\n    font-size: 1.25rem;\n  }\n  .child-header {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 12px;\n  }\n  .child-header .d-flex.align-items-center.gap-3 {\n    width: 100%;\n    justify-content: space-between;\n  }\n}\n/*# sourceMappingURL=menu-detail.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: ActivatedRoute }, { type: Router }, { type: AuthService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuDetailComponent, { className: "MenuDetailComponent", filePath: "src/app/features/food-menu/menu-detail/menu-detail.component.ts", lineNumber: 38 });
})();
export {
  MenuDetailComponent
};
//# sourceMappingURL=chunk-AGS337UX.js.map
