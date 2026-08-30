import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/tenant-feature.service.ts
var TenantFeatureService = class _TenantFeatureService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.TENANT_FEATURES;
  // Cache for current user's enabled features
  enabledFeaturesSubject = new BehaviorSubject([]);
  enabledFeatures$ = this.enabledFeaturesSubject.asObservable();
  featuresLoaded = false;
  constructor(http) {
    this.http = http;
  }
  /**
   * Get all available features (SuperAdmin only)
   */
  getAvailableFeatures() {
    return this.http.get(`${this.apiUrl}/available`);
  }
  /**
   * Get features for a specific tenant (SuperAdmin only)
   */
  getTenantFeatures(tenantId) {
    return this.http.get(`${this.apiUrl}/tenant/${tenantId}`);
  }
  /**
   * Update features for a specific tenant (SuperAdmin only)
   */
  updateTenantFeatures(tenantId, request) {
    return this.http.put(`${this.apiUrl}/tenant/${tenantId}`, request);
  }
  /**
   * Toggle a single feature for a tenant (SuperAdmin only)
   */
  toggleFeature(tenantId, featureCode, isEnabled) {
    const toggle = { featureCode, isEnabled };
    return this.http.patch(`${this.apiUrl}/tenant/${tenantId}/toggle`, toggle);
  }
  /**
   * Initialize default features for a tenant (SuperAdmin only)
   */
  initializeFeatures(tenantId) {
    return this.http.post(`${this.apiUrl}/tenant/${tenantId}/initialize`, {});
  }
  /**
   * Get enabled features for the current user's tenant
   * Used by guards and sidebar to determine access
   */
  getMyFeatures() {
    return this.http.get(`${this.apiUrl}/my-features`).pipe(tap((features) => {
      this.enabledFeaturesSubject.next(features);
      this.featuresLoaded = true;
    }));
  }
  /**
   * Load features if not already loaded
   */
  loadFeaturesIfNeeded() {
    if (this.featuresLoaded && this.enabledFeaturesSubject.value.length > 0) {
      return of(this.enabledFeaturesSubject.value);
    }
    return this.getMyFeatures();
  }
  /**
   * Check if a specific feature is enabled for the current user
   */
  checkFeature(featureCode) {
    return this.http.get(`${this.apiUrl}/check/${featureCode}`);
  }
  /**
   * Check if a feature is enabled (uses cached data)
   */
  isFeatureEnabled(featureCode) {
    const features = this.enabledFeaturesSubject.value;
    return features.includes(featureCode);
  }
  /**
   * Get current enabled features synchronously
   */
  getEnabledFeatures() {
    return this.enabledFeaturesSubject.value;
  }
  /**
   * Clear cached features (call on logout)
   */
  clearCache() {
    this.enabledFeaturesSubject.next([]);
    this.featuresLoaded = false;
  }
  /**
   * Group features by category for UI display
   */
  groupFeaturesByCategory(features) {
    const grouped = /* @__PURE__ */ new Map();
    features.forEach((feature) => {
      const category = feature.category;
      if (!grouped.has(category)) {
        grouped.set(category, []);
      }
      grouped.get(category).push(feature);
    });
    return grouped;
  }
  static \u0275fac = function TenantFeatureService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TenantFeatureService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantFeatureService, factory: _TenantFeatureService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantFeatureService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TenantFeatureService
};
//# sourceMappingURL=chunk-WNVYLB4C.js.map
