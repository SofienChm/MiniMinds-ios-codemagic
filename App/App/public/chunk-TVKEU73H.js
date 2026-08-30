import {
  HttpResponse
} from "./chunk-JR6HYZ4P.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";

// src/app/core/services/offline-cache.service.ts
var OfflineCacheService = class _OfflineCacheService {
  STORAGE_KEY = "miniminds_http_cache";
  DEFAULT_TTL = 36e5;
  // 1 hour in milliseconds
  MAX_CACHE_ENTRIES = 50;
  // Limit cache entries to prevent quota issues
  cache = /* @__PURE__ */ new Map();
  constructor() {
    this.loadCache();
    this.cleanExpiredCache();
  }
  /**
   * Cache a GET response
   */
  set(url, response, ttl = this.DEFAULT_TTL) {
    if (this.cache.size >= this.MAX_CACHE_ENTRIES && !this.cache.has(url)) {
      this.clearOldest(5);
    }
    const cached = {
      url,
      response,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl
    };
    this.cache.set(url, cached);
    this.saveCache();
  }
  /**
   * Get cached response
   */
  get(url) {
    const cached = this.cache.get(url);
    if (!cached) {
      return null;
    }
    if (Date.now() > cached.expiresAt) {
      this.cache.delete(url);
      this.saveCache();
      return null;
    }
    return cached.response;
  }
  /**
   * Check if URL has cached response
   */
  has(url) {
    return this.get(url) !== null;
  }
  /**
   * Get cache age in milliseconds
   */
  getCacheAge(url) {
    const cached = this.cache.get(url);
    if (!cached) {
      return null;
    }
    return Date.now() - cached.timestamp;
  }
  /**
   * Get human-readable cache age
   */
  getCacheAgeString(url) {
    const age = this.getCacheAge(url);
    if (age === null) {
      return null;
    }
    const minutes = Math.floor(age / 6e4);
    const hours = Math.floor(minutes / 60);
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "just now";
    }
  }
  /**
   * Clear cache for specific URL
   */
  delete(url) {
    this.cache.delete(url);
    this.saveCache();
  }
  /**
   * Clear all cache
   */
  clear() {
    this.cache.clear();
    localStorage.removeItem(this.STORAGE_KEY);
  }
  /**
   * Get all cached URLs
   */
  getCachedUrls() {
    return Array.from(this.cache.keys());
  }
  /**
   * Get cache size
   */
  getSize() {
    return this.cache.size;
  }
  /**
   * Load cache from localStorage
   */
  loadCache() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        return;
      }
      const parsed = JSON.parse(stored);
      parsed.forEach((item) => {
        const response = new HttpResponse({
          body: item.response.body,
          headers: item.response.headers,
          status: item.response.status,
          statusText: item.response.statusText,
          url: item.response.url
        });
        this.cache.set(item.url, {
          url: item.url,
          response,
          timestamp: item.timestamp,
          expiresAt: item.expiresAt
        });
      });
      console.log(`[OfflineCache] Loaded ${this.cache.size} cached responses`);
    } catch (error) {
      console.error("[OfflineCache] Error loading cache:", error);
      this.cache.clear();
    }
  }
  /**
   * Save cache to localStorage
   */
  saveCache(retryCount = 0) {
    const MAX_RETRIES = 3;
    try {
      const serializable = Array.from(this.cache.values()).map((item) => ({
        url: item.url,
        response: {
          body: item.response.body,
          headers: this.serializeHeaders(item.response.headers),
          status: item.response.status,
          statusText: item.response.statusText,
          url: item.response.url
        },
        timestamp: item.timestamp,
        expiresAt: item.expiresAt
      }));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      if (error instanceof DOMException && (error.name === "QuotaExceededError" || error.code === 22)) {
        if (retryCount < MAX_RETRIES) {
          console.warn(`[OfflineCache] Storage quota exceeded, clearing old cache (attempt ${retryCount + 1}/${MAX_RETRIES})`);
          this.clearOldest(10);
          this.saveCache(retryCount + 1);
        } else {
          console.warn("[OfflineCache] Storage quota still exceeded after retries, clearing all cache");
          this.cache.clear();
          localStorage.removeItem(this.STORAGE_KEY);
        }
      } else {
        console.error("[OfflineCache] Error saving cache:", error);
      }
    }
  }
  /**
   * Serialize headers for storage
   */
  serializeHeaders(headers) {
    const serialized = {};
    headers.keys().forEach((key) => {
      serialized[key] = headers.get(key);
    });
    return serialized;
  }
  /**
   * Clean expired cache entries
   */
  cleanExpiredCache() {
    let expiredCount = 0;
    const now = Date.now();
    this.cache.forEach((cached, url) => {
      if (now > cached.expiresAt) {
        this.cache.delete(url);
        expiredCount++;
      }
    });
    if (expiredCount > 0) {
      console.log(`[OfflineCache] Cleaned ${expiredCount} expired entries`);
      this.saveCache();
    }
  }
  /**
   * Clear oldest cache entries
   */
  clearOldest(count) {
    const entries = Array.from(this.cache.entries()).sort(([, a], [, b]) => a.timestamp - b.timestamp);
    for (let i = 0; i < Math.min(count, entries.length); i++) {
      this.cache.delete(entries[i][0]);
    }
  }
  static \u0275fac = function OfflineCacheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OfflineCacheService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflineCacheService, factory: _OfflineCacheService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflineCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  OfflineCacheService
};
//# sourceMappingURL=chunk-TVKEU73H.js.map
