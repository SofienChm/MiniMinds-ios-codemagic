import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TenantFeatureService
} from "./chunk-WNVYLB4C.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  FormsModule
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  KeyValuePipe,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/super-admin/tenants/tenant-features/tenant-features.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0) => ({ count: a0 });
function TenantFeatures_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 7);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TenantFeatures_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function TenantFeatures_div_7_div_12_tr_24_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 34);
  }
}
function TenantFeatures_div_7_div_12_tr_24_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Core");
    \u0275\u0275elementEnd();
  }
}
function TenantFeatures_div_7_div_12_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275template(2, TenantFeatures_div_7_div_12_tr_24_i_2_Template, 1, 0, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TenantFeatures_div_7_div_12_tr_24_span_6_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 28)(10, "div", 32)(11, "input", 33);
    \u0275\u0275listener("change", function TenantFeatures_div_7_div_12_tr_24_Template_input_change_11_listener() {
      const feature_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFeatureToggle(feature_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-secondary", feature_r3.isCore);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", feature_r3.isCore);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r3.featureName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r3.isCore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "feature-" + feature_r3.featureCode)("checked", feature_r3.isEnabled)("disabled", feature_r3.isCore || ctx_r0.saving);
  }
}
function TenantFeatures_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h5", 19);
    \u0275\u0275element(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22)(10, "table", 23)(11, "thead", 24)(12, "tr");
    \u0275\u0275element(13, "th", 25);
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 26);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, TenantFeatures_div_7_div_12_tr_24_Template, 12, 9, "tr", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.getCategoryIcon(category_r4.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", category_r4.value.length, " ", \u0275\u0275pipeBind1(7, 9, "SUPER_ADMIN.FEATURES"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "SUPER_ADMIN.FEATURE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "SUPER_ADMIN.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 15, "SUPER_ADMIN.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", category_r4.value);
  }
}
function TenantFeatures_div_7_div_14_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 41);
  }
}
function TenantFeatures_div_7_div_14_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 42);
  }
}
function TenantFeatures_div_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 36)(2, "span", 31);
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function TenantFeatures_div_7_div_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275template(7, TenantFeatures_div_7_div_14_span_7_Template, 1, 0, "span", 39)(8, TenantFeatures_div_7_div_14_i_8_Template, 1, 0, "i", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "SUPER_ADMIN.UNSAVED_CHANGES_COUNT", \u0275\u0275pureFunction1(10, _c0, ctx_r0.pendingChanges.size)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "COMMON.SAVE_CHANGES"), " ");
  }
}
function TenantFeatures_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275template(12, TenantFeatures_div_7_div_12_Template, 25, 17, "div", 15);
    \u0275\u0275pipe(13, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TenantFeatures_div_7_div_14_Template, 11, 12, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "SUPER_ADMIN.FEATURE_INFO_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "SUPER_ADMIN.FEATURE_INFO_MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 8, ctx_r0.groupedFeatures));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hasChanges);
  }
}
var TenantFeatures = class _TenantFeatures {
  tenantFeatureService;
  tenantService;
  route;
  router;
  translate;
  tenantId;
  tenantName = "";
  features = [];
  groupedFeatures = /* @__PURE__ */ new Map();
  loading = true;
  saving = false;
  error = null;
  breadcrumbs = [];
  subscriptions = [];
  // Track pending changes
  pendingChanges = /* @__PURE__ */ new Map();
  hasChanges = false;
  constructor(tenantFeatureService, tenantService, route, router, translate) {
    this.tenantFeatureService = tenantFeatureService;
    this.tenantService = tenantService;
    this.route = route;
    this.router = router;
    this.translate = translate;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.tenantId = +id;
      this.loadTenantFeatures();
    }
    const langSub = this.translate.onLangChange.subscribe(() => {
      this.setupBreadcrumbs();
    });
    this.subscriptions.push(langSub);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("SUPER_ADMIN.DASHBOARD"), url: "/super-admin/dashboard" },
      { label: this.translate.instant("SUPER_ADMIN.DAYCARES"), url: "/super-admin/tenants" },
      { label: this.tenantName || this.translate.instant("SUPER_ADMIN.DAYCARE_DETAILS"), url: `/super-admin/tenants/detail/${this.tenantId}` },
      { label: this.translate.instant("SUPER_ADMIN.FEATURE_SETTINGS") }
    ];
  }
  loadTenantFeatures() {
    this.loading = true;
    const sub = this.tenantFeatureService.getTenantFeatures(this.tenantId).subscribe({
      next: (response) => {
        this.tenantName = response.tenantName;
        this.features = response.features;
        this.groupedFeatures = this.tenantFeatureService.groupFeaturesByCategory(response.features);
        this.setupBreadcrumbs();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading tenant features:", err);
        this.error = "Failed to load feature settings";
        this.loading = false;
      }
    });
    this.subscriptions.push(sub);
  }
  getActions() {
    const actions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-outline-secondary btn-cancel-global",
        action: () => this.goBack()
      }
    ];
    if (this.hasChanges) {
      actions.push({
        label: this.translate.instant("COMMON.SAVE"),
        icon: "bi bi-check-lg",
        class: "btn-edit-global-2",
        action: () => this.saveChanges()
      });
    }
    return actions;
  }
  goBack() {
    if (this.hasChanges) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("COMMON.UNSAVED_CHANGES"),
        text: this.translate.instant("COMMON.UNSAVED_CHANGES_MESSAGE"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("COMMON.YES_LEAVE"),
        cancelButtonText: this.translate.instant("COMMON.STAY")
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/super-admin/tenants/detail", this.tenantId]);
        }
      });
    } else {
      this.router.navigate(["/super-admin/tenants/detail", this.tenantId]);
    }
  }
  onFeatureToggle(feature) {
    if (feature.isCore && feature.isEnabled) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("SUPER_ADMIN.DISABLE_CORE_FEATURE"),
        text: this.translate.instant("SUPER_ADMIN.DISABLE_CORE_FEATURE_WARNING"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("COMMON.YES_DISABLE"),
        cancelButtonText: this.translate.instant("COMMON.CANCEL")
      }).then((result) => {
        if (result.isConfirmed) {
          feature.isEnabled = false;
          this.pendingChanges.set(feature.featureCode, false);
          this.hasChanges = this.pendingChanges.size > 0;
        }
      });
      return;
    }
    feature.isEnabled = !feature.isEnabled;
    this.pendingChanges.set(feature.featureCode, feature.isEnabled);
    this.hasChanges = this.pendingChanges.size > 0;
  }
  saveChanges() {
    if (!this.hasChanges || this.saving)
      return;
    this.saving = true;
    const toggles = Array.from(this.pendingChanges.entries()).map(([code, enabled]) => ({
      featureCode: code,
      isEnabled: enabled
    }));
    const sub = this.tenantFeatureService.updateTenantFeatures(this.tenantId, { features: toggles }).subscribe({
      next: (response) => {
        this.features = response.features;
        this.groupedFeatures = this.tenantFeatureService.groupFeaturesByCategory(response.features);
        this.pendingChanges.clear();
        this.hasChanges = false;
        this.saving = false;
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
      },
      error: (err) => {
        console.error("Error saving features:", err);
        this.saving = false;
        import_sweetalert2.default.fire(this.translate.instant("MESSAGES.ERROR"), this.translate.instant("SUPER_ADMIN.FEATURES_UPDATE_FAILED"), "error");
      }
    });
    this.subscriptions.push(sub);
  }
  getCategoryIcon(category) {
    const icons = {
      "Core": "bi-star-fill",
      "Activities": "bi-activity",
      "Media": "bi-images",
      "Schedule": "bi-calendar",
      "Finance": "bi-currency-dollar",
      "Communication": "bi-chat",
      "Attendance": "bi-calendar-check",
      "Education": "bi-book",
      "AI": "bi-robot"
    };
    return icons[category] || "bi-grid";
  }
  getCategoryClass(category) {
    const classes = {
      "Core": "bg-primary",
      "Activities": "bg-success",
      "Media": "bg-info",
      "Schedule": "bg-warning",
      "Finance": "bg-danger",
      "Communication": "bg-secondary",
      "Attendance": "bg-primary",
      "Education": "bg-success",
      "AI": "bg-dark"
    };
    return classes[category] || "bg-secondary";
  }
  static \u0275fac = function TenantFeatures_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantFeatures)(\u0275\u0275directiveInject(TenantFeatureService), \u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TenantFeatures, selectors: [["app-tenant-features"]], decls: 8, vars: 11, consts: [[1, "container-fluid", "mobile-view", "mt-4"], ["icon", "bi bi-toggles", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "row"], [1, "col-12", "mb-4"], [1, "alert", "alert-info", "d-flex", "align-items-center"], [1, "bi", "bi-info-circle", "me-2", "fs-5"], [1, "mb-0", "small"], [1, "col-12"], ["class", "card card-general shadow-sm mb-4", 4, "ngFor", "ngForOf"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "card", "card-general", "shadow-sm", "mb-4"], [1, "card-header", "border-0", "d-flex"], [1, "mb-0"], [1, "badge", "bg-secondary", "ms-auto"], [1, "card-body", "p-0"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [2, "width", "50px"], [1, "text-center", 2, "width", "100px"], [3, "table-secondary", 4, "ngFor", "ngForOf"], [1, "text-center"], ["class", "bi bi-star-fill text-warning", "title", "Core Feature", 4, "ngIf"], ["class", "badge bg-warning text-dark ms-2 small", 4, "ngIf"], [1, "text-muted"], [1, "form-check", "form-switch", "d-flex", "justify-content-center"], ["type", "checkbox", "role", "switch", 1, "form-check-input", "feature-toggle", 3, "change", "id", "checked", "disabled"], ["title", "Core Feature", 1, "bi", "bi-star-fill", "text-warning"], [1, "badge", "bg-warning", "text-dark", "ms-2", "small"], [1, "save-bar", "d-flex", "justify-content-between", "align-items-center", "p-3", "bg-light", "rounded", "shadow-sm"], [1, "bi", "bi-exclamation-circle", "me-2"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-lg me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-lg", "me-2"]], template: function TenantFeatures_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header-superadmin")(2, "app-title-page", 1);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275template(5, TenantFeatures_div_5_Template, 4, 0, "div", 2)(6, TenantFeatures_div_6_Template, 2, 1, "div", 3)(7, TenantFeatures_div_7_Template, 15, 10, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 7, "SUPER_ADMIN.FEATURE_SETTINGS") + (ctx.tenantName ? " - " + ctx.tenantName : ""))("subtitle", \u0275\u0275pipeBind1(4, 9, "SUPER_ADMIN.FEATURE_SETTINGS_SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.getActions());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent, KeyValuePipe, TranslatePipe], styles: ["\n\n.feature-toggle[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 1.5rem;\n  cursor: pointer;\n}\n.feature-toggle[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.feature-toggle[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.table-secondary[_ngcontent-%COMP%] {\n  background-color: rgba(108, 117, 125, 0.05) !important;\n}\n.save-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 1rem;\n  z-index: 100;\n  border: 1px solid #dee2e6;\n}\n@media (max-width: 768px) {\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .save-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .save-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .save-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n.mobile-view[_ngcontent-%COMP%] {\n  padding-bottom: 110px;\n}\n/*# sourceMappingURL=tenant-features.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantFeatures, [{
    type: Component,
    args: [{ selector: "app-tenant-features", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, TitlePage, HeaderSuperadminComponent], template: `<div class="container-fluid mobile-view mt-4">\r
  <app-header-superadmin></app-header-superadmin>\r
  <app-title-page\r
    [title]="('SUPER_ADMIN.FEATURE_SETTINGS' | translate) + (tenantName ? ' - ' + tenantName : '')"\r
    [subtitle]="'SUPER_ADMIN.FEATURE_SETTINGS_SUBTITLE' | translate"\r
    icon="bi bi-toggles"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="getActions()">\r
  </app-title-page>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error -->\r
  <div *ngIf="error" class="alert alert-danger">\r
    {{ error }}\r
  </div>\r
\r
  <!-- Features Configuration -->\r
  <div *ngIf="!loading && !error" class="row">\r
    <!-- Info Card -->\r
    <div class="col-12 mb-4">\r
      <div class="alert alert-info d-flex align-items-center">\r
        <i class="bi bi-info-circle me-2 fs-5"></i>\r
        <div>\r
          <strong>{{ 'SUPER_ADMIN.FEATURE_INFO_TITLE' | translate }}</strong>\r
          <p class="mb-0 small">{{ 'SUPER_ADMIN.FEATURE_INFO_MESSAGE' | translate }}</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Feature Categories -->\r
    <div class="col-12">\r
      <div *ngFor="let category of groupedFeatures | keyvalue" class="card card-general shadow-sm mb-4">\r
          <div class="card-header border-0 d-flex">\r
              <h5 class="mb-0"><i [class]="getCategoryIcon(category.key)"></i>{{ category.key }}</h5>\r
              <span class="badge bg-secondary ms-auto">{{ category.value.length }} {{ 'SUPER_ADMIN.FEATURES' | translate }}</span>\r
          </div>\r
        <div class="card-body p-0">\r
          <div class="table-responsive custom-table">\r
            <table class="table table-hover mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th style="width: 50px;"></th>\r
                  <th>{{ 'SUPER_ADMIN.FEATURE_NAME' | translate }}</th>\r
                  <th>{{ 'SUPER_ADMIN.DESCRIPTION' | translate }}</th>\r
                  <th style="width: 100px;" class="text-center">{{ 'SUPER_ADMIN.STATUS' | translate }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let feature of category.value" [class.table-secondary]="feature.isCore">\r
                  <td class="text-center">\r
                    <i *ngIf="feature.isCore" class="bi bi-star-fill text-warning" title="Core Feature"></i>\r
                  </td>\r
                  <td>\r
                    <strong>{{ feature.featureName }}</strong>\r
                    <span *ngIf="feature.isCore" class="badge bg-warning text-dark ms-2 small">Core</span>\r
                  </td>\r
                  <td class="text-muted">{{ feature.description }}</td>\r
                  <td class="text-center">\r
                    <div class="form-check form-switch d-flex justify-content-center">\r
                      <input\r
                        class="form-check-input feature-toggle"\r
                        type="checkbox"\r
                        role="switch"\r
                        [id]="'feature-' + feature.featureCode"\r
                        [checked]="feature.isEnabled"\r
                        [disabled]="feature.isCore || saving"\r
                        (change)="onFeatureToggle(feature)">\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Save Button (Fixed at bottom for mobile) -->\r
    <div *ngIf="hasChanges" class="col-12 mb-4">\r
      <div class="save-bar d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm">\r
        <span class="text-muted">\r
          <i class="bi bi-exclamation-circle me-2"></i>\r
          {{ 'SUPER_ADMIN.UNSAVED_CHANGES_COUNT' | translate: { count: pendingChanges.size } }}\r
        </span>\r
        <button class="action-btn custom-btn-2 btn-add-global-2" (click)="saveChanges()" [disabled]="saving">\r
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
          <i *ngIf="!saving" class="bi bi-check-lg me-2"></i>\r
          {{ 'COMMON.SAVE_CHANGES' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/super-admin/tenants/tenant-features/tenant-features.scss */\n.feature-toggle {\n  width: 3rem;\n  height: 1.5rem;\n  cursor: pointer;\n}\n.feature-toggle:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.feature-toggle:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.table th {\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.table td {\n  vertical-align: middle;\n}\n.table-secondary {\n  background-color: rgba(108, 117, 125, 0.05) !important;\n}\n.save-bar {\n  position: sticky;\n  bottom: 1rem;\n  z-index: 100;\n  border: 1px solid #dee2e6;\n}\n@media (max-width: 768px) {\n  .table {\n    font-size: 0.9rem;\n  }\n  .save-bar {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .save-bar span {\n    text-align: center;\n  }\n  .save-bar button {\n    width: 100%;\n  }\n}\n.badge {\n  background-color: var(--secondary-color) !important;\n}\n.mobile-view {\n  padding-bottom: 110px;\n}\n/*# sourceMappingURL=tenant-features.css.map */\n"] }]
  }], () => [{ type: TenantFeatureService }, { type: TenantService }, { type: ActivatedRoute }, { type: Router }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TenantFeatures, { className: "TenantFeatures", filePath: "src/app/features/super-admin/tenants/tenant-features/tenant-features.ts", lineNumber: 22 });
})();
export {
  TenantFeatures
};
//# sourceMappingURL=chunk-SMUQRQWE.js.map
