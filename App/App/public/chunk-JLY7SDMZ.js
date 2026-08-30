import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/food-menu/food-menu.interface.ts
var MEAL_TYPES = ["Breakfast", "AM Snack", "Lunch", "PM Snack", "Dinner"];
var FOOD_CATEGORIES = ["Grain", "Protein", "Dairy", "Fruit", "Vegetable", "Beverage", "Other"];
var COMMON_ALLERGENS = ["Milk", "Eggs", "Peanuts", "Tree Nuts", "Wheat", "Soy", "Fish", "Shellfish", "Sesame"];
var DIETARY_TAGS = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut-Free", "Organic"];

// src/app/features/food-menu/food-menu.service.ts
var FoodMenuService = class _FoodMenuService {
  http;
  foodItemsUrl = ApiConfig.ENDPOINTS.FOOD_ITEMS;
  menusUrl = ApiConfig.ENDPOINTS.MENUS;
  selectionsUrl = ApiConfig.ENDPOINTS.MENU_SELECTIONS;
  menusSubject = new BehaviorSubject([]);
  menus$ = this.menusSubject.asObservable();
  foodItemsSubject = new BehaviorSubject([]);
  foodItems$ = this.foodItemsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  // Food Items
  loadFoodItems(category, activeOnly = true, search) {
    let params = new HttpParams();
    if (category)
      params = params.set("category", category);
    if (activeOnly !== void 0)
      params = params.set("activeOnly", activeOnly.toString());
    if (search)
      params = params.set("search", search);
    return this.http.get(this.foodItemsUrl, { params });
  }
  getFoodItem(id) {
    return this.http.get(`${this.foodItemsUrl}/${id}`);
  }
  getCategories() {
    return this.http.get(`${this.foodItemsUrl}/Categories`);
  }
  getAllergens() {
    return this.http.get(`${this.foodItemsUrl}/Allergens`);
  }
  createFoodItem(foodItem) {
    return this.http.post(this.foodItemsUrl, foodItem);
  }
  updateFoodItem(id, foodItem) {
    return this.http.put(`${this.foodItemsUrl}/${id}`, foodItem);
  }
  deleteFoodItem(id) {
    return this.http.delete(`${this.foodItemsUrl}/${id}`);
  }
  toggleFoodItemStatus(id) {
    return this.http.put(`${this.foodItemsUrl}/${id}/toggle-status`, {});
  }
  // Menus
  loadMenus(startDate, endDate, menuType, publishedOnly, templatesOnly) {
    let params = new HttpParams();
    if (startDate)
      params = params.set("startDate", startDate.toISOString());
    if (endDate)
      params = params.set("endDate", endDate.toISOString());
    if (menuType)
      params = params.set("menuType", menuType);
    if (publishedOnly !== void 0)
      params = params.set("publishedOnly", publishedOnly.toString());
    if (templatesOnly !== void 0)
      params = params.set("templatesOnly", templatesOnly.toString());
    return this.http.get(this.menusUrl, { params });
  }
  getMenu(id) {
    return this.http.get(`${this.menusUrl}/${id}`);
  }
  getMenuByDate(date) {
    const params = new HttpParams().set("date", date.toISOString());
    return this.http.get(`${this.menusUrl}/ByDate`, { params });
  }
  getWeekMenus(startDate) {
    const dateStr = startDate.toISOString().split("T")[0];
    const params = new HttpParams().set("startDate", dateStr);
    return this.http.get(`${this.menusUrl}/Week`, { params });
  }
  createMenu(menu) {
    return this.http.post(this.menusUrl, menu);
  }
  updateMenu(id, menu) {
    return this.http.put(`${this.menusUrl}/${id}`, menu);
  }
  publishMenu(id) {
    return this.http.put(`${this.menusUrl}/${id}/publish`, {});
  }
  unpublishMenu(id) {
    return this.http.put(`${this.menusUrl}/${id}/unpublish`, {});
  }
  duplicateMenu(dto) {
    return this.http.post(`${this.menusUrl}/duplicate`, dto);
  }
  deleteMenu(id) {
    return this.http.delete(`${this.menusUrl}/${id}`);
  }
  // Menu Items
  addMenuItem(menuId, dto) {
    return this.http.post(`${this.menusUrl}/${menuId}/items`, dto);
  }
  updateMenuItem(menuId, itemId, dto) {
    return this.http.put(`${this.menusUrl}/${menuId}/items/${itemId}`, dto);
  }
  deleteMenuItem(menuId, itemId) {
    return this.http.delete(`${this.menusUrl}/${menuId}/items/${itemId}`);
  }
  reorderMenuItems(menuId, items) {
    return this.http.put(`${this.menusUrl}/${menuId}/items/reorder`, { items });
  }
  getMenuNutrition(menuId) {
    return this.http.get(`${this.menusUrl}/${menuId}/nutrition`);
  }
  // Menu Selections
  getChildMenuSelections(childId, menuId) {
    return this.http.get(`${this.selectionsUrl}/child/${childId}/menu/${menuId}`);
  }
  getMenuSelections(menuId) {
    return this.http.get(`${this.selectionsUrl}/menu/${menuId}`);
  }
  createSelection(selection) {
    return this.http.post(this.selectionsUrl, selection);
  }
  createBulkSelections(dto) {
    return this.http.post(`${this.selectionsUrl}/bulk`, dto);
  }
  updateSelection(id, dto) {
    return this.http.put(`${this.selectionsUrl}/${id}`, dto);
  }
  updateSelectionStatus(id, status) {
    return this.http.put(`${this.selectionsUrl}/${id}/status`, JSON.stringify(status), {
      headers: { "Content-Type": "application/json" }
    });
  }
  deleteSelection(id) {
    return this.http.delete(`${this.selectionsUrl}/${id}`);
  }
  getMenuReport(menuId) {
    return this.http.get(`${this.selectionsUrl}/report/menu/${menuId}`);
  }
  // Helper methods
  refreshMenus() {
    this.loadMenus().subscribe((menus) => {
      this.menusSubject.next(menus);
    });
  }
  refreshFoodItems() {
    this.loadFoodItems().subscribe((items) => {
      this.foodItemsSubject.next(items);
    });
  }
  static \u0275fac = function FoodMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodMenuService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FoodMenuService, factory: _FoodMenuService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoodMenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MEAL_TYPES,
  FOOD_CATEGORIES,
  COMMON_ALLERGENS,
  DIETARY_TAGS,
  FoodMenuService
};
//# sourceMappingURL=chunk-JLY7SDMZ.js.map
