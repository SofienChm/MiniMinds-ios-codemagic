import {
  f
} from "./chunk-JHHNP67E.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-7KUBODN6.js";
import {
  Injectable,
  Observable,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";
import {
  __spreadValues
} from "./chunk-C7TRL22M.js";

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation = registerPlugin("Geolocation", {
  web: () => import("./chunk-OJA4OUY2.js").then((m) => new m.GeolocationWeb())
});
f();

// src/app/core/services/geolocation.service.ts
var GeolocationService = class _GeolocationService {
  /**
   * Check if geolocation is supported
   */
  isSupported() {
    if (Capacitor.isNativePlatform()) {
      return true;
    }
    return "geolocation" in navigator;
  }
  /**
   * Check if we're on a native platform
   */
  isNativePlatform() {
    return Capacitor.isNativePlatform();
  }
  /**
   * Request location permissions (native only)
   */
  async requestPermissions() {
    if (Capacitor.isNativePlatform()) {
      return await Geolocation.requestPermissions();
    }
    return { location: "granted", coarseLocation: "granted" };
  }
  /**
   * Check current permission status (native only)
   */
  async checkPermissions() {
    if (Capacitor.isNativePlatform()) {
      return await Geolocation.checkPermissions();
    }
    return { location: "granted", coarseLocation: "granted" };
  }
  /**
   * Get the current position - uses native plugin on mobile, browser API on web
   * Includes retry logic and longer timeout for reliability
   */
  getCurrentPosition(options) {
    if (!this.isSupported()) {
      return throwError(() => ({
        code: 0,
        message: "Geolocation is not supported"
      }));
    }
    const defaultOptions = {
      enableHighAccuracy: false,
      // Low accuracy is faster and sufficient for geofencing
      timeout: 1e4,
      // 10 seconds - faster timeout
      maximumAge: 6e4,
      // Allow cached position up to 1 minute old for speed
      retries: 1
    };
    const mergedOptions = __spreadValues(__spreadValues({}, defaultOptions), options);
    if (Capacitor.isNativePlatform()) {
      return this.getNativePosition(mergedOptions);
    } else {
      return this.getWebPosition(mergedOptions);
    }
  }
  /**
   * Helper to add timeout to any promise
   */
  withTimeout(promise, ms, errorMsg) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error(errorMsg)), ms))
    ]);
  }
  /**
   * Get position using Capacitor's native Geolocation plugin
   */
  getNativePosition(options) {
    return new Observable((observer) => {
      let isCancelled = false;
      const timeout = options.timeout || 1e4;
      const getPosition = async () => {
        try {
          let permStatus;
          try {
            permStatus = await this.withTimeout(
              Geolocation.checkPermissions(),
              3e3,
              // 3 seconds for permission check
              "Permission check timed out"
            );
          } catch (permCheckError) {
            console.warn("Permission check failed, trying to request directly:", permCheckError);
            permStatus = { location: "prompt", coarseLocation: "prompt" };
          }
          if (permStatus.location !== "granted" && permStatus.coarseLocation !== "granted") {
            try {
              permStatus = await this.withTimeout(
                Geolocation.requestPermissions(),
                5e3,
                // 5 seconds for permission request
                "Permission request timed out"
              );
            } catch (permReqError) {
              console.warn("Permission request failed:", permReqError);
              if (!isCancelled) {
                observer.error({
                  code: 1,
                  message: "Location permission request failed. Please enable location in Settings."
                });
              }
              return;
            }
          }
          if (permStatus.location !== "granted" && permStatus.coarseLocation !== "granted") {
            if (!isCancelled) {
              observer.error({
                code: 1,
                message: "Location permission denied. Please enable location in Settings."
              });
            }
            return;
          }
          try {
            const position = await this.withTimeout(
              Geolocation.getCurrentPosition({
                enableHighAccuracy: options.enableHighAccuracy,
                timeout,
                maximumAge: options.maximumAge
              }),
              timeout + 2e3,
              // Small buffer
              "Location request timed out"
            );
            if (!isCancelled) {
              observer.next({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy
              });
              observer.complete();
            }
          } catch (locationError) {
            if (!isCancelled) {
              observer.error(this.parseNativeError(locationError));
            }
          }
        } catch (error) {
          if (!isCancelled) {
            observer.error(this.parseNativeError(error));
          }
        }
      };
      getPosition();
      return () => {
        isCancelled = true;
      };
    });
  }
  /**
   * Get position using browser's Geolocation API
   */
  getWebPosition(options) {
    return new Observable((observer) => {
      let watchId = null;
      navigator.geolocation.getCurrentPosition((position) => {
        observer.next({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
        observer.complete();
      }, (error) => {
        if (error.code === error.TIMEOUT) {
          console.warn("Initial position timed out, trying watch...");
          watchId = navigator.geolocation.watchPosition((position) => {
            if (watchId !== null) {
              navigator.geolocation.clearWatch(watchId);
              watchId = null;
            }
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy
            });
            observer.complete();
          }, (watchError) => {
            observer.error(this.parseWebError(watchError));
          }, {
            enableHighAccuracy: false,
            // Try low accuracy
            timeout: options.timeout,
            maximumAge: 3e4
            // Accept older positions
          });
          setTimeout(() => {
            if (watchId !== null) {
              navigator.geolocation.clearWatch(watchId);
              observer.error({
                code: 3,
                message: "Location request timed out. Please ensure location services are enabled."
              });
            }
          }, options.timeout || 3e4);
        } else {
          observer.error(this.parseWebError(error));
        }
      }, {
        enableHighAccuracy: options.enableHighAccuracy,
        timeout: options.timeout,
        maximumAge: options.maximumAge
      });
      return () => {
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
  }
  /**
   * Parse native Capacitor geolocation error
   */
  parseNativeError(error) {
    const message = error?.message || error?.toString() || "Unknown location error";
    if (message.includes("permission") || message.includes("denied")) {
      return {
        code: 1,
        message: "Location permission denied. Please enable location access in your device settings."
      };
    }
    if (message.includes("unavailable") || message.includes("Location services")) {
      return {
        code: 2,
        message: "Location unavailable. Please ensure location services are enabled on your device."
      };
    }
    if (message.includes("timeout")) {
      return {
        code: 3,
        message: "Location request timed out. Please try again or move to an area with better GPS signal."
      };
    }
    return {
      code: 0,
      message
    };
  }
  /**
   * Parse web Geolocation API error
   */
  parseWebError(error) {
    let message = "Unknown error";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "Location permission denied. Please enable location access in your browser settings.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Location information unavailable. Please try again.";
        break;
      case error.TIMEOUT:
        message = "Location request timed out. Please try again.";
        break;
    }
    return { code: error.code, message };
  }
  /**
   * Calculate distance between two coordinates using Haversine formula
   * @returns distance in meters
   */
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  /**
   * Check if a position is within a specified radius
   */
  isWithinRadius(currentLat, currentLon, targetLat, targetLon, radiusMeters) {
    const distance = this.calculateDistance(currentLat, currentLon, targetLat, targetLon);
    return distance <= radiusMeters;
  }
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  static \u0275fac = function GeolocationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeolocationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeolocationService, factory: _GeolocationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeolocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  GeolocationService
};
//# sourceMappingURL=chunk-GJ45YLOP.js.map
