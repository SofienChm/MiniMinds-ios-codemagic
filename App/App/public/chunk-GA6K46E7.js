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
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/food-menu/menu-report/menu-report.component.ts
function MenuReportComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p", 6);
    \u0275\u0275text(3, "Loading report...");
    \u0275\u0275elementEnd()();
  }
}
function MenuReportComponent_div_3_div_42_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r3.childName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(child_r3.allergies);
  }
}
function MenuReportComponent_div_3_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 35)(2, "h5", 19);
    \u0275\u0275element(3, "i", 36);
    \u0275\u0275text(4, "Allergy Alerts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "div", 31)(7, "table", 37)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Child");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Allergies");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, MenuReportComponent_div_3_div_42_tr_15_Template, 6, 2, "tr", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.report.childrenWithAllergies);
  }
}
function MenuReportComponent_div_3_div_43_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 33)(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.menuItem);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.mealType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.totalDeclined);
  }
}
function MenuReportComponent_div_3_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "h5", 19);
    \u0275\u0275element(3, "i", 41);
    \u0275\u0275text(4, "Declined Food Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 42);
    \u0275\u0275text(7, "The following items have been declined by one or more parents:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31)(9, "table", 37)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Food Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Meal Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 33);
    \u0275\u0275text(17, "Declined Count");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, MenuReportComponent_div_3_div_43_tr_19_Template, 9, 3, "tr", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.getDeclinedItems());
  }
}
function MenuReportComponent_div_3_option_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275property("value", type_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5);
  }
}
function MenuReportComponent_div_3_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 33)(8, "span", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 33)(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 33)(14, "span", 48);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 33)(17, "span", 49);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 33)(20, "span", 43);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.menuItem);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.mealType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.totalSelected);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-danger", item_r6.totalDeclined > 0)("bg-secondary", item_r6.totalDeclined === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.totalDeclined, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.pending);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.confirmed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.served);
  }
}
function MenuReportComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div")(5, "h4", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275element(8, "i", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 13);
    \u0275\u0275listener("click", function MenuReportComponent_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(11, "i", 14);
    \u0275\u0275text(12, "Back to Menus ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 15)(14, "div", 16)(15, "div", 17)(16, "div", 18)(17, "h3", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small");
    \u0275\u0275text(20, "Children with Selections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 16)(22, "div", 20)(23, "div", 18)(24, "h3", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "Items Selected");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 21)(30, "div", 18)(31, "h3", 19);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small");
    \u0275\u0275text(34, "Items Declined");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 16)(36, "div", 22)(37, "div", 18)(38, "h3", 19);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "small");
    \u0275\u0275text(41, "Children with Allergies");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(42, MenuReportComponent_div_3_div_42_Template, 16, 1, "div", 23)(43, MenuReportComponent_div_3_div_43_Template, 20, 1, "div", 24);
    \u0275\u0275elementStart(44, "div", 25)(45, "div", 26)(46, "h5", 19);
    \u0275\u0275element(47, "i", 27);
    \u0275\u0275text(48, "Selection Breakdown by Menu Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MenuReportComponent_div_3_Template_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMealType, $event) || (ctx_r1.selectedMealType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(50, "option", 29);
    \u0275\u0275text(51, "All Meals");
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, MenuReportComponent_div_3_option_52_Template, 2, 2, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 8)(54, "div", 31)(55, "table", 32)(56, "thead")(57, "tr")(58, "th");
    \u0275\u0275text(59, "Food Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Meal Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th", 33);
    \u0275\u0275text(63, "Selected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th", 33);
    \u0275\u0275text(65, "Declined");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th", 33);
    \u0275\u0275text(67, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 33);
    \u0275\u0275text(69, "Confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th", 33);
    \u0275\u0275text(71, "Served");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "tbody");
    \u0275\u0275template(73, MenuReportComponent_div_3_tr_73_Template, 22, 11, "tr", 34);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.menu.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.formatDate(ctx_r1.menu.menuDate), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.report.totalChildren);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getTotalSelected());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getTotalDeclined());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r1.report.childrenWithAllergies == null ? null : ctx_r1.report.childrenWithAllergies.length) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.report.childrenWithAllergies == null ? null : ctx_r1.report.childrenWithAllergies.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDeclinedItems().length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMealType);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.mealTypes);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.getItemsByMealType(ctx_r1.selectedMealType));
  }
}
function MenuReportComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3, "No selection data available for this menu.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function MenuReportComponent_div_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(5, "Back to Menus");
    \u0275\u0275elementEnd()();
  }
}
var MenuReportComponent = class _MenuReportComponent {
  foodMenuService;
  route;
  router;
  translate;
  pageTitleService;
  menuId = null;
  menu = null;
  report = null;
  loading = false;
  selectedMealType = "";
  mealTypes = MEAL_TYPES;
  breadcrumbs = [];
  langChangeSub;
  constructor(foodMenuService, route, router, translate, pageTitleService) {
    this.foodMenuService = foodMenuService;
    this.route = route;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.MENU_REPORT"));
    this.setupBreadcrumbs();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.menuId = +params["id"];
        this.loadReport();
      }
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("FOOD_MENU.MENU_REPORT"));
      this.setupBreadcrumbs();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("FOOD_MENU.TITLE"), url: "/food-menu" },
      { label: this.translate.instant("FOOD_MENU.MENU_REPORT") }
    ];
  }
  loadReport() {
    if (!this.menuId)
      return;
    this.loading = true;
    this.foodMenuService.getMenu(this.menuId).subscribe({
      next: (menu) => {
        this.menu = menu;
      },
      error: (error) => console.error("Error loading menu:", error)
    });
    this.foodMenuService.getMenuReport(this.menuId).subscribe({
      next: (report) => {
        this.report = report;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading report:", error);
        this.loading = false;
      }
    });
  }
  getDeclinedItems() {
    if (!this.report?.mealBreakdown)
      return [];
    return this.report.mealBreakdown.filter((item) => item.totalDeclined > 0);
  }
  getItemsByMealType(mealType) {
    if (!this.report?.mealBreakdown)
      return [];
    if (!mealType)
      return this.report.mealBreakdown;
    return this.report.mealBreakdown.filter((item) => item.mealType === mealType);
  }
  getTotalSelected() {
    if (!this.report?.mealBreakdown)
      return 0;
    return this.report.mealBreakdown.reduce((sum, item) => sum + item.totalSelected, 0);
  }
  getTotalDeclined() {
    if (!this.report?.mealBreakdown)
      return 0;
    return this.report.mealBreakdown.reduce((sum, item) => sum + item.totalDeclined, 0);
  }
  goBack() {
    this.router.navigate(["/food-menu"]);
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  static \u0275fac = function MenuReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuReportComponent)(\u0275\u0275directiveInject(FoodMenuService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuReportComponent, selectors: [["app-menu-report"]], decls: 5, vars: 4, consts: [["title", "Menu Selection Report", 3, "breadcrumbs"], [1, "container-fluid", "py-4"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "card", "mb-4"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "bi", "bi-calendar3", "me-2"], [1, "btn", "btn-outline-secondary", "btn-cancel-global", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], [1, "row", "mb-4"], [1, "col-md-3"], [1, "card", "bg-primary", "text-white"], [1, "card-body", "text-center"], [1, "mb-0"], [1, "card", "bg-success", "text-white"], [1, "card", "bg-danger", "text-white"], [1, "card", "bg-warning", "text-dark"], ["class", "card mb-4", 4, "ngIf"], ["class", "card mb-4 border-danger", 4, "ngIf"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-bar-chart", "me-2"], [1, "form-select", "form-select-sm", "w-auto", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "card-header", "bg-warning"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "table", "table-sm", "mb-0"], [1, "badge", "bg-danger"], [1, "card", "mb-4", "border-danger"], [1, "card-header", "bg-danger", "text-white"], [1, "bi", "bi-x-circle", "me-2"], [1, "text-muted", "mb-3"], [1, "badge", "bg-secondary"], [3, "value"], [1, "badge", "bg-info"], [1, "badge", "bg-success"], [1, "badge"], [1, "badge", "bg-warning", "text-dark"], [1, "badge", "bg-primary"], [1, "bi", "bi-clipboard-x", "display-4", "text-muted"], [1, "mt-3", "text-muted"], [1, "btn", "btn-primary", 3, "click"]], template: function MenuReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-title-page", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, MenuReportComponent_div_2_Template, 4, 0, "div", 2)(3, MenuReportComponent_div_3_Template, 74, 11, "div", 3)(4, MenuReportComponent_div_4_Template, 6, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("breadcrumbs", ctx.breadcrumbs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.menu && ctx.report);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.report);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=menu-report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuReportComponent, [{
    type: Component,
    args: [{ selector: "app-menu-report", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: '<app-title-page\r\n  title="Menu Selection Report"\r\n  [breadcrumbs]="breadcrumbs">\r\n</app-title-page>\r\n\r\n<div class="container-fluid py-4">\r\n  <!-- Loading -->\r\n  <div *ngIf="loading" class="text-center py-5">\r\n    <div class="spinner-border text-primary" role="status"></div>\r\n    <p class="mt-2 text-muted">Loading report...</p>\r\n  </div>\r\n\r\n  <!-- Report Content -->\r\n  <div *ngIf="!loading && menu && report">\r\n    <!-- Menu Header -->\r\n    <div class="card mb-4">\r\n      <div class="card-body">\r\n        <div class="d-flex justify-content-between align-items-start">\r\n          <div>\r\n            <h4 class="mb-1">{{ menu.name }}</h4>\r\n            <p class="text-muted mb-0">\r\n              <i class="bi bi-calendar3 me-2"></i>{{ formatDate(menu.menuDate) }}\r\n            </p>\r\n          </div>\r\n          <button class="btn btn-outline-secondary btn-cancel-global" (click)="goBack()">\r\n            <i class="bi bi-arrow-left me-2"></i>Back to Menus\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Summary Cards -->\r\n    <div class="row mb-4">\r\n      <div class="col-md-3">\r\n        <div class="card bg-primary text-white">\r\n          <div class="card-body text-center">\r\n            <h3 class="mb-0">{{ report.totalChildren }}</h3>\r\n            <small>Children with Selections</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-md-3">\r\n        <div class="card bg-success text-white">\r\n          <div class="card-body text-center">\r\n            <h3 class="mb-0">{{ getTotalSelected() }}</h3>\r\n            <small>Items Selected</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-md-3">\r\n        <div class="card bg-danger text-white">\r\n          <div class="card-body text-center">\r\n            <h3 class="mb-0">{{ getTotalDeclined() }}</h3>\r\n            <small>Items Declined</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="col-md-3">\r\n        <div class="card bg-warning text-dark">\r\n          <div class="card-body text-center">\r\n            <h3 class="mb-0">{{ report.childrenWithAllergies?.length || 0 }}</h3>\r\n            <small>Children with Allergies</small>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Allergy Alerts -->\r\n    <div class="card mb-4" *ngIf="report.childrenWithAllergies?.length > 0">\r\n      <div class="card-header bg-warning">\r\n        <h5 class="mb-0"><i class="bi bi-exclamation-triangle me-2"></i>Allergy Alerts</h5>\r\n      </div>\r\n      <div class="card-body">\r\n        <div class="table-responsive">\r\n          <table class="table table-sm mb-0">\r\n            <thead>\r\n              <tr>\r\n                <th>Child</th>\r\n                <th>Allergies</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor="let child of report.childrenWithAllergies">\r\n                <td>{{ child.childName }}</td>\r\n                <td><span class="badge bg-danger">{{ child.allergies }}</span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Declined Items Alert -->\r\n    <div class="card mb-4 border-danger" *ngIf="getDeclinedItems().length > 0">\r\n      <div class="card-header bg-danger text-white">\r\n        <h5 class="mb-0"><i class="bi bi-x-circle me-2"></i>Declined Food Items</h5>\r\n      </div>\r\n      <div class="card-body">\r\n        <p class="text-muted mb-3">The following items have been declined by one or more parents:</p>\r\n        <div class="table-responsive">\r\n          <table class="table table-sm mb-0">\r\n            <thead>\r\n              <tr>\r\n                <th>Food Item</th>\r\n                <th>Meal Type</th>\r\n                <th class="text-center">Declined Count</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor="let item of getDeclinedItems()">\r\n                <td>{{ item.menuItem }}</td>\r\n                <td><span class="badge bg-secondary">{{ item.mealType }}</span></td>\r\n                <td class="text-center">\r\n                  <span class="badge bg-danger">{{ item.totalDeclined }}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Meal Breakdown -->\r\n    <div class="card">\r\n      <div class="card-header d-flex justify-content-between align-items-center">\r\n        <h5 class="mb-0"><i class="bi bi-bar-chart me-2"></i>Selection Breakdown by Menu Item</h5>\r\n        <select class="form-select form-select-sm w-auto" [(ngModel)]="selectedMealType">\r\n          <option value="">All Meals</option>\r\n          <option *ngFor="let type of mealTypes" [value]="type">{{ type }}</option>\r\n        </select>\r\n      </div>\r\n      <div class="card-body">\r\n        <div class="table-responsive">\r\n          <table class="table table-hover">\r\n            <thead>\r\n              <tr>\r\n                <th>Food Item</th>\r\n                <th>Meal Type</th>\r\n                <th class="text-center">Selected</th>\r\n                <th class="text-center">Declined</th>\r\n                <th class="text-center">Pending</th>\r\n                <th class="text-center">Confirmed</th>\r\n                <th class="text-center">Served</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor="let item of getItemsByMealType(selectedMealType)">\r\n                <td>\r\n                  <strong>{{ item.menuItem }}</strong>\r\n                </td>\r\n                <td>\r\n                  <span class="badge bg-info">{{ item.mealType }}</span>\r\n                </td>\r\n                <td class="text-center">\r\n                  <span class="badge bg-success">{{ item.totalSelected }}</span>\r\n                </td>\r\n                <td class="text-center">\r\n                  <span class="badge" [class.bg-danger]="item.totalDeclined > 0" [class.bg-secondary]="item.totalDeclined === 0">\r\n                    {{ item.totalDeclined }}\r\n                  </span>\r\n                </td>\r\n                <td class="text-center">\r\n                  <span class="badge bg-warning text-dark">{{ item.pending }}</span>\r\n                </td>\r\n                <td class="text-center">\r\n                  <span class="badge bg-primary">{{ item.confirmed }}</span>\r\n                </td>\r\n                <td class="text-center">\r\n                  <span class="badge bg-secondary">{{ item.served }}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- No Report -->\r\n  <div *ngIf="!loading && !report" class="text-center py-5">\r\n    <i class="bi bi-clipboard-x display-4 text-muted"></i>\r\n    <p class="mt-3 text-muted">No selection data available for this menu.</p>\r\n    <button class="btn btn-primary" (click)="goBack()">Back to Menus</button>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/features/food-menu/menu-report/menu-report.component.scss */\n.card {\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.table th {\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  color: #6c757d;\n}\n.badge {\n  font-weight: 500;\n}\n/*# sourceMappingURL=menu-report.component.css.map */\n"] }]
  }], () => [{ type: FoodMenuService }, { type: ActivatedRoute }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuReportComponent, { className: "MenuReportComponent", filePath: "src/app/features/food-menu/menu-report/menu-report.component.ts", lineNumber: 33 });
})();
export {
  MenuReportComponent
};
//# sourceMappingURL=chunk-GA6K46E7.js.map
