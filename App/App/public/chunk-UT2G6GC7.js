import {
  FOOD_CATEGORIES,
  FoodMenuService,
  MEAL_TYPES
} from "./chunk-JLY7SDMZ.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
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
import "./chunk-2FXTNIWG.js";
import {
  ActivatedRoute,
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/food-menu/add-menu/add-menu.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function AddMenuComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function AddMenuComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementEnd();
  }
}
function AddMenuComponent_div_66_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50)(9, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_div_66_div_1_div_9_Template_input_ngModelChange_9_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(item_r5.servingSize, $event) || (item_r5.servingSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 52);
    \u0275\u0275listener("click", function AddMenuComponent_div_66_div_1_div_9_Template_button_click_10_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeMenuItem(ctx_r2.menuItems.indexOf(item_r5)));
    });
    \u0275\u0275element(11, "i", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getCategoryIcon((item_r5.foodItem == null ? null : item_r5.foodItem.category) || ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.foodItem == null ? null : item_r5.foodItem.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.foodItem == null ? null : item_r5.foodItem.category);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r5.servingSize);
  }
}
function AddMenuComponent_div_66_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3, 'No items added. Click "Add Food" to start.');
    \u0275\u0275elementEnd()();
  }
}
function AddMenuComponent_div_66_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h6", 6);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41);
    \u0275\u0275listener("click", function AddMenuComponent_div_66_div_1_Template_button_click_5_listener() {
      const mealType_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openFoodPicker(mealType_r2));
    });
    \u0275\u0275element(6, "i", 42);
    \u0275\u0275text(7, " Add Food ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 43);
    \u0275\u0275template(9, AddMenuComponent_div_66_div_1_div_9_Template, 12, 5, "div", 44)(10, AddMenuComponent_div_66_div_1_div_10_Template, 4, 0, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mealType_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getMealTypeIcon(mealType_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mealType_r2, " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.getItemsForMealType(mealType_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getItemsForMealType(mealType_r2).length === 0);
  }
}
function AddMenuComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AddMenuComponent_div_66_div_1_Template, 11, 5, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.mealTypes);
  }
}
function AddMenuComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function AddMenuComponent_div_67_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFoodPicker());
    });
    \u0275\u0275elementEnd();
  }
}
function AddMenuComponent_div_68_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    \u0275\u0275property("value", cat_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r8);
  }
}
function AddMenuComponent_div_68_div_17_div_9_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 80);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const food_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", food_r10.calories, " cal ");
  }
}
function AddMenuComponent_div_68_div_17_div_9_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const food_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", food_r10.allergens, " ");
  }
}
function AddMenuComponent_div_68_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, AddMenuComponent_div_68_div_17_div_9_small_1_Template, 3, 1, "small", 78)(2, AddMenuComponent_div_68_div_17_div_9_small_2_Template, 3, 1, "small", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const food_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", food_r10.calories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", food_r10.allergens);
  }
}
function AddMenuComponent_div_68_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275listener("click", function AddMenuComponent_div_68_div_17_Template_div_click_0_listener() {
      const food_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addFoodToMeal(food_r10));
    });
    \u0275\u0275elementStart(1, "div", 74)(2, "div", 47);
    \u0275\u0275element(3, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AddMenuComponent_div_68_div_17_div_9_Template, 3, 2, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "i", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const food_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getCategoryIcon(food_r10.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(food_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(food_r10.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", food_r10.calories || food_r10.allergens);
  }
}
function AddMenuComponent_div_68_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No food items found. Try a different search or category.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 86);
    \u0275\u0275text(5, " Add New Food Item ");
    \u0275\u0275elementEnd()();
  }
}
function AddMenuComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "h5", 60);
    \u0275\u0275element(4, "i", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 61);
    \u0275\u0275listener("click", function AddMenuComponent_div_68_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeFoodPicker());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 62)(8, "div", 63)(9, "div", 64)(10, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_div_68_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.foodSearchTerm, $event) || (ctx_r2.foodSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function AddMenuComponent_div_68_Template_input_input_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterFoodItems());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 64)(12, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_div_68_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedCategory, $event) || (ctx_r2.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AddMenuComponent_div_68_Template_select_change_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterFoodItems());
    });
    \u0275\u0275elementStart(13, "option", 67);
    \u0275\u0275text(14, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AddMenuComponent_div_68_option_15_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 69);
    \u0275\u0275template(17, AddMenuComponent_div_68_div_17_Template, 11, 5, "div", 70)(18, AddMenuComponent_div_68_div_18_Template, 6, 0, "div", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r2.getMealTypeIcon(ctx_r2.selectedMealType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Add Food to ", ctx_r2.selectedMealType, " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.foodSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredFoodItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredFoodItems.length === 0);
  }
}
var AddMenuComponent = class _AddMenuComponent {
  foodMenuService;
  router;
  route;
  translate;
  pageTitleService;
  menu = {
    name: "",
    description: "",
    menuDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    menuType: "Daily",
    isTemplate: false,
    notes: ""
  };
  menuItems = [];
  foodItems = [];
  filteredFoodItems = [];
  loading = false;
  saving = false;
  showFoodPicker = false;
  selectedMealType = "";
  foodSearchTerm = "";
  selectedCategory = "";
  mealTypes = MEAL_TYPES;
  categories = FOOD_CATEGORIES;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  // Edit mode properties
  isEditMode = false;
  menuId;
  constructor(foodMenuService, router, route, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.router = router;
    this.route = route;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.menuId = +params["id"];
        this.loadMenuForEdit(this.menuId);
      }
    });
    const titleKey = this.isEditMode ? "FOOD_MENU.EDIT_MENU" : "FOOD_MENU.ADD_MENU";
    this.pageTitleService.setTitle(this.translate.instant(titleKey));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    if (!this.isEditMode) {
      this.route.queryParams.subscribe((params) => {
        if (params["date"]) {
          this.menu.menuDate = params["date"];
        }
      });
    }
    this.loadFoodItems();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      const titleKey2 = this.isEditMode ? "FOOD_MENU.EDIT_MENU" : "FOOD_MENU.ADD_MENU";
      this.pageTitleService.setTitle(this.translate.instant(titleKey2));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    const lastLabel = this.isEditMode ? "FOOD_MENU.EDIT_MENU" : "FOOD_MENU.ADD_MENU";
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("FOOD_MENU.TITLE"), url: "/food-menu" },
      { label: this.translate.instant(lastLabel) }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        class: "btn-cancel-2",
        icon: "bi bi-arrow-left",
        action: () => this.router.navigate(["/food-menu"])
      }
    ];
  }
  loadFoodItems() {
    this.loading = true;
    this.foodMenuService.loadFoodItems().subscribe({
      next: (items) => {
        this.foodItems = items;
        this.filteredFoodItems = items;
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
  loadedMenu;
  // Store the full loaded menu for CACFP compliance fields
  loadMenuForEdit(menuId) {
    this.loading = true;
    this.foodMenuService.getMenu(menuId).subscribe({
      next: (menu) => {
        this.loadedMenu = menu;
        this.menu = {
          name: menu.name,
          description: menu.description,
          menuDate: menu.menuDate,
          menuType: menu.menuType,
          isTemplate: menu.isTemplate,
          notes: menu.notes
        };
        if (menu.menuItems && menu.menuItems.length > 0) {
          this.menuItems = menu.menuItems.map((mi) => ({
            mealType: mi.mealType,
            foodItemId: mi.foodItem.id,
            servingSize: mi.servingSize,
            notes: mi.notes,
            foodItem: mi.foodItem
          }));
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading menu:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: this.translate.instant("FOOD_MENU.ERROR_LOADING_MENU"),
          confirmButtonColor: "#7dd3c0"
        });
        this.loading = false;
        this.router.navigate(["/food-menu"]);
      }
    });
  }
  openFoodPicker(mealType) {
    this.selectedMealType = mealType;
    this.showFoodPicker = true;
    this.filterFoodItems();
  }
  closeFoodPicker() {
    this.showFoodPicker = false;
    this.selectedMealType = "";
    this.foodSearchTerm = "";
    this.selectedCategory = "";
  }
  filterFoodItems() {
    let filtered = [...this.foodItems];
    if (this.selectedCategory) {
      filtered = filtered.filter((f) => f.category === this.selectedCategory);
    }
    if (this.foodSearchTerm.trim()) {
      const term = this.foodSearchTerm.toLowerCase();
      filtered = filtered.filter((f) => f.name.toLowerCase().includes(term) || f.description?.toLowerCase().includes(term));
    }
    this.filteredFoodItems = filtered;
  }
  addFoodToMeal(foodItem) {
    this.menuItems.push({
      mealType: this.selectedMealType,
      foodItemId: foodItem.id,
      foodItem
    });
    this.closeFoodPicker();
  }
  removeMenuItem(index) {
    this.menuItems.splice(index, 1);
  }
  getItemsForMealType(mealType) {
    return this.menuItems.filter((mi) => mi.mealType === mealType);
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
  async saveMenu() {
    if (!this.menu.name || !this.menu.menuDate) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("COMMON.WARNING"),
        text: this.translate.instant("FOOD_MENU.FILL_REQUIRED_FIELDS"),
        confirmButtonColor: "#7dd3c0"
      });
      return;
    }
    this.saving = true;
    try {
      if (this.isEditMode && this.menuId) {
        await this.foodMenuService.updateMenu(this.menuId, {
          name: this.menu.name,
          description: this.menu.description,
          menuDate: this.menu.menuDate,
          menuType: this.menu.menuType,
          isTemplate: this.menu.isTemplate,
          notes: this.menu.notes,
          // Preserve CACFP compliance fields from loaded menu
          isPublished: this.loadedMenu?.isPublished ?? false,
          meetsGrainRequirement: this.loadedMenu?.meetsGrainRequirement ?? false,
          meetsProteinRequirement: this.loadedMenu?.meetsProteinRequirement ?? false,
          meetsDairyRequirement: this.loadedMenu?.meetsDairyRequirement ?? false,
          meetsFruitVegRequirement: this.loadedMenu?.meetsFruitVegRequirement ?? false
        }).toPromise();
        for (let i = 0; i < this.menuItems.length; i++) {
          const item = this.menuItems[i];
          await this.foodMenuService.addMenuItem(this.menuId, {
            menuId: this.menuId,
            foodItemId: item.foodItemId,
            mealType: item.mealType,
            servingSize: item.servingSize,
            displayOrder: i,
            notes: item.notes
          }).toPromise();
        }
        showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
      } else {
        const createdMenu = await this.foodMenuService.createMenu({
          name: this.menu.name,
          description: this.menu.description,
          menuDate: this.menu.menuDate,
          menuType: this.menu.menuType,
          isTemplate: this.menu.isTemplate,
          notes: this.menu.notes
        }).toPromise();
        for (let i = 0; i < this.menuItems.length; i++) {
          const item = this.menuItems[i];
          await this.foodMenuService.addMenuItem(createdMenu.id, {
            menuId: createdMenu.id,
            foodItemId: item.foodItemId,
            mealType: item.mealType,
            servingSize: item.servingSize,
            displayOrder: i,
            notes: item.notes
          }).toPromise();
        }
        showSuccessToast(this.translate.instant("COMMON.SUCCESS"));
      }
      this.router.navigate(["/food-menu"]);
    } catch (error) {
      console.error("Error saving menu:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: this.translate.instant("FOOD_MENU.ERROR_SAVING_MENU"),
        confirmButtonColor: "#7dd3c0"
      });
    } finally {
      this.saving = false;
    }
  }
  cancel() {
    this.router.navigate(["/food-menu"]);
  }
  static \u0275fac = function AddMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddMenuComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddMenuComponent, selectors: [["app-add-menu"]], decls: 69, vars: 35, consts: [[1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], [1, "row"], [1, "col-lg-4"], [1, "card", "card-general", "mb-4"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-info-circle", "me-2"], [1, "card-body"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "e.g., Monday Menu - Week 1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Daily"], ["value", "Weekly"], ["rows", "2", "placeholder", "Optional description...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Special notes for this menu...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-check"], ["type", "checkbox", "id", "isTemplate", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isTemplate", 1, "form-check-label"], [1, "d-block", "text-muted"], [1, "d-grid", "gap-2"], [1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "btn", "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "col-lg-8"], [1, "card", "card-general"], [1, "bi", "bi-list-ul", "me-2"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "food-picker-modal", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], ["class", "meal-section mb-4", 4, "ngFor", "ngForOf"], [1, "meal-section", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "bi", "me-2"], [1, "btn", "custom-btn-2", "btn-add-border", 3, "click"], [1, "bi", "bi-plus"], [1, "meal-items"], ["class", "food-item-card d-flex align-items-center p-2 mb-2 border rounded", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-3 border rounded bg-light", 4, "ngIf"], [1, "food-item-card", "d-flex", "align-items-center", "p-2", "mb-2", "border", "rounded"], [1, "food-icon", "me-3"], [1, "bi"], [1, "flex-grow-1"], [1, "me-3"], ["type", "text", "placeholder", "Serving", 1, "form-control", "form-control-sm", 2, "width", "100px", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-x"], [1, "text-center", "text-muted", "py-3", "border", "rounded", "bg-light"], [1, "bi", "bi-plus-circle", "mb-2", "d-block"], [1, "modal-backdrop", 3, "click"], [1, "food-picker-modal"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "mb-3"], [1, "col-md-6"], ["type", "text", "placeholder", "Search food items...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "food-items-grid"], ["class", "food-item-option p-3 border rounded mb-2 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [3, "value"], [1, "food-item-option", "p-3", "border", "rounded", "mb-2", "cursor-pointer", 3, "click"], [1, "d-flex", "align-items-center"], ["class", "d-flex gap-2 mt-1", 4, "ngIf"], [1, "bi", "bi-plus-circle", "text-primary"], [1, "d-flex", "gap-2", "mt-1"], ["class", "text-info", 4, "ngIf"], ["class", "text-warning", 4, "ngIf"], [1, "text-info"], [1, "bi", "bi-fire"], [1, "text-warning"], [1, "bi", "bi-exclamation-triangle"], [1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-search", "display-6", "mb-2", "d-block"], ["routerLink", "/food-menu/food-items", 1, "btn", "btn-outline-primary", "btn-sm"]], template: function AddMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "h5", 6);
      \u0275\u0275element(11, "i", 7);
      \u0275\u0275text(12, "Menu Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16, "Menu Name ");
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.name, $event) || (ctx.menu.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
      \u0275\u0275text(22, "Date ");
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.menuDate, $event) || (ctx.menu.menuDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 10);
      \u0275\u0275text(28, "Menu Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_select_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.menuType, $event) || (ctx.menu.menuType = $event);
        return $event;
      });
      \u0275\u0275elementStart(30, "option", 15);
      \u0275\u0275text(31, "Daily");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 16);
      \u0275\u0275text(33, "Weekly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 9)(35, "label", 10);
      \u0275\u0275text(36, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "textarea", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_textarea_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.description, $event) || (ctx.menu.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 9)(39, "label", 10);
      \u0275\u0275text(40, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "textarea", 18);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_textarea_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.notes, $event) || (ctx.menu.notes = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 19)(43, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AddMenuComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.menu.isTemplate, $event) || (ctx.menu.isTemplate = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "label", 21);
      \u0275\u0275text(45, " Save as Template ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "small", 22);
      \u0275\u0275text(47, "Templates can be duplicated for future use");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 23)(49, "button", 24);
      \u0275\u0275listener("click", function AddMenuComponent_Template_button_click_49_listener() {
        return ctx.saveMenu();
      });
      \u0275\u0275template(50, AddMenuComponent_span_50_Template, 1, 0, "span", 25);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 26);
      \u0275\u0275listener("click", function AddMenuComponent_Template_button_click_55_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 27)(59, "div", 28)(60, "div", 5)(61, "h5", 6);
      \u0275\u0275element(62, "i", 29);
      \u0275\u0275text(63, "Menu Items");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 8);
      \u0275\u0275template(65, AddMenuComponent_div_65_Template, 2, 0, "div", 30)(66, AddMenuComponent_div_66_Template, 2, 1, "div", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(67, AddMenuComponent_div_67_Template, 1, 0, "div", 32)(68, AddMenuComponent_div_68_Template, 19, 8, "div", 33);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isEditMode ? \u0275\u0275pipeBind1(2, 19, "FOOD_MENU.EDIT_MENU") : \u0275\u0275pipeBind1(3, 21, "FOOD_MENU.ADD_MENU"))("subtitle", ctx.isEditMode ? \u0275\u0275pipeBind1(4, 23, "FOOD_MENU.EDIT_MENU_SUBTITLE") : \u0275\u0275pipeBind1(5, 25, "FOOD_MENU.ADD_MENU_SUBTITLE"))("icon", ctx.isEditMode ? "bi bi-pencil-square" : "bi bi-plus-circle")("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.menuDate);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.menuType);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.description);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.notes);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.menu.isTemplate);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(52, 27, "COMMON.SAVING") : ctx.isEditMode ? \u0275\u0275pipeBind1(53, 29, "FOOD_MENU.UPDATE_MENU") : \u0275\u0275pipeBind1(54, 31, "FOOD_MENU.SAVE_MENU"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 33, "COMMON.CANCEL"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFoodPicker);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFoodPicker);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n.meal-section[_ngcontent-%COMP%]   .meal-items[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n.food-item-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  transition: all 0.2s;\n}\n.food-item-card[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.food-item-card[_ngcontent-%COMP%]   .food-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #e9ecef;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.food-picker-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 90%;\n  max-width: 700px;\n  max-height: 80vh;\n}\n.food-picker-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.food-picker-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.food-picker-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.food-items-grid[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.food-item-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.food-item-option[_ngcontent-%COMP%]:hover {\n  background-color: #e3f2fd;\n  border-color: #2196f3 !important;\n}\n.food-item-option[_ngcontent-%COMP%]   .food-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background-color: #e9ecef;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.btn-add-global-2[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.btn-cancel-2[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n/*# sourceMappingURL=add-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddMenuComponent, [{
    type: Component,
    args: [{ selector: "app-add-menu", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="isEditMode ? ('FOOD_MENU.EDIT_MENU' | translate) : ('FOOD_MENU.ADD_MENU' | translate)"\r
    [subtitle]="isEditMode ? ('FOOD_MENU.EDIT_MENU_SUBTITLE' | translate) : ('FOOD_MENU.ADD_MENU_SUBTITLE' | translate)"\r
    [icon]="isEditMode ? 'bi bi-pencil-square' : 'bi bi-plus-circle'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <div class="row">\r
    <!-- Menu Details -->\r
    <div class="col-lg-4">\r
      <div class="card card-general mb-4">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-info-circle me-2"></i>Menu Details</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="mb-3">\r
            <label class="form-label">Menu Name <span class="text-danger">*</span></label>\r
            <input type="text" class="form-control" [(ngModel)]="menu.name"\r
                   placeholder="e.g., Monday Menu - Week 1">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Date <span class="text-danger">*</span></label>\r
            <input type="date" class="form-control" [(ngModel)]="menu.menuDate">\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Menu Type</label>\r
            <select class="form-select" [(ngModel)]="menu.menuType">\r
              <option value="Daily">Daily</option>\r
              <option value="Weekly">Weekly</option>\r
            </select>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Description</label>\r
            <textarea class="form-control" rows="2" [(ngModel)]="menu.description"\r
                      placeholder="Optional description..."></textarea>\r
          </div>\r
\r
          <div class="mb-3">\r
            <label class="form-label">Notes</label>\r
            <textarea class="form-control" rows="2" [(ngModel)]="menu.notes"\r
                      placeholder="Special notes for this menu..."></textarea>\r
          </div>\r
\r
          <div class="form-check">\r
            <input class="form-check-input" type="checkbox" [(ngModel)]="menu.isTemplate" id="isTemplate">\r
            <label class="form-check-label" for="isTemplate">\r
              Save as Template\r
            </label>\r
            <small class="d-block text-muted">Templates can be duplicated for future use</small>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Actions -->\r
      <div class="d-grid gap-2">\r
        <button class="btn custom-btn-2 btn-add-global-2" (click)="saveMenu()" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
          {{ saving ? ('COMMON.SAVING' | translate) : (isEditMode ? ('FOOD_MENU.UPDATE_MENU' | translate) : ('FOOD_MENU.SAVE_MENU' | translate)) }}\r
        </button>\r
        <button class="btn custom-btn-2 btn-cancel-2" (click)="cancel()">{{ 'COMMON.CANCEL' | translate }}</button>\r
      </div>\r
    </div>\r
\r
    <!-- Menu Items by Meal Type -->\r
    <div class="col-lg-8">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-list-ul me-2"></i>Menu Items</h5>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="loading" class="text-center py-4">\r
            <div class="spinner-border text-primary" role="status"></div>\r
          </div>\r
\r
          <div *ngIf="!loading">\r
            <div *ngFor="let mealType of mealTypes" class="meal-section mb-4">\r
              <div class="d-flex align-items-center justify-content-between mb-2">\r
                <h6 class="mb-0">\r
                  <i class="bi me-2" [class]="getMealTypeIcon(mealType)"></i>\r
                  {{ mealType }}\r
                </h6>\r
                <button class="btn  custom-btn-2 btn-add-border" (click)="openFoodPicker(mealType)">\r
                  <i class="bi bi-plus"></i> Add Food\r
                </button>\r
              </div>\r
\r
              <div class="meal-items">\r
                <div *ngFor="let item of getItemsForMealType(mealType); let i = index"\r
                     class="food-item-card d-flex align-items-center p-2 mb-2 border rounded">\r
                  <div class="food-icon me-3">\r
                    <i class="bi" [class]="getCategoryIcon(item.foodItem?.category || '')"></i>\r
                  </div>\r
                  <div class="flex-grow-1">\r
                    <strong>{{ item.foodItem?.name }}</strong>\r
                    <small class="d-block text-muted">{{ item.foodItem?.category }}</small>\r
                  </div>\r
                  <div class="me-3">\r
                    <input type="text" class="form-control form-control-sm" style="width: 100px;"\r
                           placeholder="Serving" [(ngModel)]="item.servingSize">\r
                  </div>\r
                  <button class="btn btn-sm btn-outline-danger" (click)="removeMenuItem(menuItems.indexOf(item))">\r
                    <i class="bi bi-x"></i>\r
                  </button>\r
                </div>\r
\r
                <div *ngIf="getItemsForMealType(mealType).length === 0"\r
                     class="text-center text-muted py-3 border rounded bg-light">\r
                  <i class="bi bi-plus-circle mb-2 d-block"></i>\r
                  <small>No items added. Click "Add Food" to start.</small>\r
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
<!-- Food Picker Modal -->\r
<div class="modal-backdrop" *ngIf="showFoodPicker" (click)="closeFoodPicker()"></div>\r
<div class="food-picker-modal" *ngIf="showFoodPicker">\r
  <div class="modal-content">\r
    <div class="modal-header">\r
      <h5 class="modal-title">\r
        <i class="bi me-2" [class]="getMealTypeIcon(selectedMealType)"></i>\r
        Add Food to {{ selectedMealType }}\r
      </h5>\r
      <button type="button" class="btn-close" (click)="closeFoodPicker()"></button>\r
    </div>\r
    <div class="modal-body">\r
      <!-- Filters -->\r
      <div class="row mb-3">\r
        <div class="col-md-6">\r
          <input type="text" class="form-control" placeholder="Search food items..."\r
                 [(ngModel)]="foodSearchTerm" (input)="filterFoodItems()">\r
        </div>\r
        <div class="col-md-6">\r
          <select class="form-select" [(ngModel)]="selectedCategory" (change)="filterFoodItems()">\r
            <option value="">All Categories</option>\r
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <!-- Food Items Grid -->\r
      <div class="food-items-grid">\r
        <div *ngFor="let food of filteredFoodItems"\r
             class="food-item-option p-3 border rounded mb-2 cursor-pointer"\r
             (click)="addFoodToMeal(food)">\r
          <div class="d-flex align-items-center">\r
            <div class="food-icon me-3">\r
              <i class="bi" [class]="getCategoryIcon(food.category)"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <strong>{{ food.name }}</strong>\r
              <small class="d-block text-muted">{{ food.category }}</small>\r
              <div class="d-flex gap-2 mt-1" *ngIf="food.calories || food.allergens">\r
                <small *ngIf="food.calories" class="text-info">\r
                  <i class="bi bi-fire"></i> {{ food.calories }} cal\r
                </small>\r
                <small *ngIf="food.allergens" class="text-warning">\r
                  <i class="bi bi-exclamation-triangle"></i> {{ food.allergens }}\r
                </small>\r
              </div>\r
            </div>\r
            <i class="bi bi-plus-circle text-primary"></i>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="filteredFoodItems.length === 0" class="text-center text-muted py-4">\r
          <i class="bi bi-search display-6 mb-2 d-block"></i>\r
          <p>No food items found. Try a different search or category.</p>\r
          <a routerLink="/food-menu/food-items" class="btn btn-outline-primary btn-sm">\r
            Add New Food Item\r
          </a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/food-menu/add-menu/add-menu.component.scss */\n.meal-section .meal-items {\n  min-height: 60px;\n}\n.food-item-card {\n  background-color: #fff;\n  transition: all 0.2s;\n}\n.food-item-card:hover {\n  background-color: #f8f9fa;\n}\n.food-item-card .food-icon {\n  width: 40px;\n  height: 40px;\n  background-color: #e9ecef;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n}\n.food-picker-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1050;\n  width: 90%;\n  max-width: 700px;\n  max-height: 80vh;\n}\n.food-picker-modal .modal-content {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  max-height: 80vh;\n}\n.food-picker-modal .modal-header {\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.food-picker-modal .modal-body {\n  padding: 1rem;\n  overflow-y: auto;\n  flex: 1;\n}\n.food-items-grid {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.food-item-option {\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.food-item-option:hover {\n  background-color: #e3f2fd;\n  border-color: #2196f3 !important;\n}\n.food-item-option .food-icon {\n  width: 45px;\n  height: 45px;\n  background-color: #e9ecef;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.btn-add-global-2 {\n  min-width: 100%;\n}\n.btn-cancel-2 {\n  min-width: 100%;\n}\n/*# sourceMappingURL=add-menu.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: Router }, { type: ActivatedRoute }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddMenuComponent, { className: "AddMenuComponent", filePath: "src/app/features/food-menu/add-menu/add-menu.component.ts", lineNumber: 21 });
})();
export {
  AddMenuComponent
};
//# sourceMappingURL=chunk-UT2G6GC7.js.map
