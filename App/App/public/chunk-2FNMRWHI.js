import {
  Html5Qrcode
} from "./chunk-E6MI3USO.js";
import {
  BarcodeFormat
} from "./chunk-RPAPGFQN.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-7KUBODN6.js";
import {
  Injectable,
  NgZone,
  Observable,
  Subject,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/index.js
var BarcodeScanner = registerPlugin("BarcodeScanner", {
  web: () => import("./chunk-J2RDD3E7.js").then((m) => new m.BarcodeScannerWeb())
});

// src/app/core/services/qr-scanner.service.ts
var QrScannerService = class _QrScannerService {
  zone;
  html5QrCode = null;
  scanSubject = new Subject();
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Check if we're running on a native platform
   */
  isNativePlatform() {
    return Capacitor.isNativePlatform();
  }
  /**
   * Check if the scanner is supported
   */
  async isSupported() {
    if (this.isNativePlatform()) {
      try {
        const result = await BarcodeScanner.isSupported();
        return result.supported;
      } catch {
        return false;
      }
    }
    return true;
  }
  /**
   * Request camera permission
   */
  async requestPermission() {
    if (this.isNativePlatform()) {
      try {
        const status = await BarcodeScanner.requestPermissions();
        return status.camera === "granted";
      } catch {
        return false;
      }
    }
    return true;
  }
  /**
   * Check if camera permission is granted
   */
  async checkPermission() {
    if (this.isNativePlatform()) {
      try {
        const status = await BarcodeScanner.checkPermissions();
        return status.camera === "granted";
      } catch {
        return false;
      }
    }
    return true;
  }
  /**
   * Start scanning - uses native scanner on mobile, html5-qrcode on web
   * For native: Opens full-screen scanner overlay
   * For web: Starts scanning in the provided element
   */
  async startScan(elementId) {
    if (this.isNativePlatform()) {
      return this.startNativeScan();
    } else {
      if (!elementId) {
        return of({ success: false, error: "Element ID required for web scanning" });
      }
      return this.startWebScan(elementId);
    }
  }
  /**
   * Native barcode scanning using MLKit
   */
  async startNativeScan() {
    try {
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        return of({ success: false, error: "Camera permission denied" });
      }
      const result = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode]
      });
      if (result.barcodes && result.barcodes.length > 0) {
        const code = result.barcodes[0].rawValue;
        return of({ success: true, code });
      }
      return of({ success: false, error: "No QR code detected" });
    } catch (error) {
      return of({ success: false, error: error.message || "Scan failed" });
    }
  }
  /**
   * Web-based scanning using html5-qrcode
   */
  startWebScan(elementId) {
    return new Observable((observer) => {
      setTimeout(async () => {
        try {
          const element = document.getElementById(elementId);
          if (!element) {
            observer.next({ success: false, error: "Scanner element not found" });
            observer.complete();
            return;
          }
          this.html5QrCode = new Html5Qrcode(elementId);
          await this.html5QrCode.start({ facingMode: "environment" }, {
            fps: 10,
            qrbox: { width: 250, height: 250 }
          }, (decodedText) => {
            this.zone.run(() => {
              observer.next({ success: true, code: decodedText });
            });
          }, () => {
          });
        } catch (error) {
          this.zone.run(() => {
            observer.next({ success: false, error: error.message || "Failed to start camera" });
            observer.complete();
          });
        }
      }, 100);
      return () => {
        this.stopWebScan();
      };
    });
  }
  /**
   * Stop the web scanner
   */
  async stopWebScan() {
    if (this.html5QrCode) {
      try {
        const state = this.html5QrCode.getState();
        if (state === 2) {
          await this.html5QrCode.stop();
        }
        this.html5QrCode.clear();
      } catch (err) {
      }
      this.html5QrCode = null;
    }
  }
  /**
   * Stop scanning (both native and web)
   */
  async stopScan() {
    if (this.isNativePlatform()) {
      try {
        await BarcodeScanner.stopScan();
      } catch {
      }
    } else {
      await this.stopWebScan();
    }
  }
  /**
   * Single scan - scans once and returns result
   * Best for native platforms
   */
  async scanOnce() {
    if (!this.isNativePlatform()) {
      return { success: false, error: "Use startScan() for web platform" };
    }
    try {
      if (Capacitor.getPlatform() === "android") {
        const moduleAvailable = await this.checkAndInstallGoogleModule();
        if (!moduleAvailable) {
          return {
            success: false,
            error: "Google Barcode Scanner is being installed. Please try again in a moment."
          };
        }
      }
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        return { success: false, error: "Camera permission denied" };
      }
      const result = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode]
      });
      if (result.barcodes && result.barcodes.length > 0) {
        return { success: true, code: result.barcodes[0].rawValue };
      }
      return { success: false, error: "No QR code detected" };
    } catch (error) {
      if (error.message?.includes("canceled")) {
        return { success: false, error: "Scan cancelled" };
      }
      if (error.message?.includes("Google Barcode Scanner") || error.message?.includes("installGoogleBarcodeScanner")) {
        this.installGoogleBarcodeModule();
        return {
          success: false,
          error: "Installing barcode scanner. Please try again in a few seconds."
        };
      }
      return { success: false, error: error.message || "Scan failed" };
    }
  }
  /**
   * Check if Google module is available and install if needed
   */
  async checkAndInstallGoogleModule() {
    try {
      const result = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
      if (!result.available) {
        BarcodeScanner.installGoogleBarcodeScannerModule();
        return false;
      }
      return true;
    } catch {
      return true;
    }
  }
  /**
   * Extract QR code from a URL (for deep linking)
   * Supports both https://app.miniminds.com/qr-action/CODE and miniminds://qr-action/CODE
   */
  extractQrCodeFromUrl(url) {
    try {
      if (url.startsWith("miniminds://")) {
        const parts = url.replace("miniminds://", "").split("/");
        if (parts[0] === "qr-action" && parts[1]) {
          return parts[1];
        }
        return null;
      }
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split("/").filter((p) => p);
      if (pathParts[0] === "qr-action" && pathParts[1]) {
        return pathParts[1];
      }
      return null;
    } catch {
      return null;
    }
  }
  /**
   * Check if Google Barcode Scanner module is available (Android only)
   */
  async installGoogleBarcodeModule() {
    if (!this.isNativePlatform()) {
      return true;
    }
    try {
      const result = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
      if (!result.available) {
        await BarcodeScanner.installGoogleBarcodeScannerModule();
        return true;
      }
      return true;
    } catch {
      return false;
    }
  }
  static \u0275fac = function QrScannerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrScannerService)(\u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrScannerService, factory: _QrScannerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrScannerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: NgZone }], null);
})();

export {
  QrScannerService
};
//# sourceMappingURL=chunk-2FNMRWHI.js.map
