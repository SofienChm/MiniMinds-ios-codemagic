import {
  Directory
} from "./chunk-HK2EHJHC.js";
import {
  require_FileSaver_min
} from "./chunk-74BU3QHC.js";
import {
  f
} from "./chunk-JHHNP67E.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-7KUBODN6.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// node_modules/@capacitor/filesystem/dist/esm/index.js
var Filesystem = registerPlugin("Filesystem", {
  web: () => import("./chunk-ORL4VIR6.js").then((m) => new m.FilesystemWeb())
});
f();

// node_modules/@capacitor/share/dist/esm/index.js
var Share = registerPlugin("Share", {
  web: () => import("./chunk-5HVII4E4.js").then((m) => new m.ShareWeb())
});

// node_modules/@capacitor-community/media/dist/esm/index.js
var Media = registerPlugin("Media", {
  web: () => import("./chunk-KBFSNQEG.js").then((m) => new m.MediaWeb())
});

// src/app/core/services/image-download.service.ts
var import_file_saver = __toESM(require_FileSaver_min());
var SaveToGallery = registerPlugin("SaveToGallery");
var ImageDownloadService = class _ImageDownloadService {
  /**
   * Download/save an image - works on both web and mobile
   *
   * ANDROID BEHAVIOR (API 29+):
   * - Saves DIRECTLY to device gallery using MediaStore API (scoped storage compliant)
   * - Images appear in Gallery/Photos app under "MiniMinds" folder
   * - No share sheet, automatic save
   *
   * iOS BEHAVIOR:
   * - Saves to Files app under MiniMinds folder
   * - User can access via Files app
   *
   * WEB BEHAVIOR:
   * - Downloads to browser's Downloads folder
   *
   * @param imageData Base64 data URL or URL of the image
   * @param fileName Name for the saved file
   * @returns Promise with download result
   */
  async downloadImage(imageData, fileName) {
    if (Capacitor.isNativePlatform()) {
      return this.saveToDevice(imageData, fileName);
    } else {
      return this.downloadOnWeb(imageData, fileName);
    }
  }
  /**
   * Share an image (mobile only) - allows saving to gallery or sharing
   * @param imageData Base64 data URL
   * @param fileName Name for the file
   * @param title Optional title for share dialog
   */
  async shareImage(imageData, fileName, title) {
    if (!Capacitor.isNativePlatform()) {
      return this.downloadOnWeb(imageData, fileName);
    }
    try {
      const base64Data = this.extractBase64Data(imageData);
      const mimeType = this.getMimeType(imageData);
      const extension = this.getExtension(mimeType);
      const finalFileName = this.ensureExtension(fileName, extension);
      const savedFile = await Filesystem.writeFile({
        path: finalFileName,
        data: base64Data,
        directory: Directory.Cache
      });
      const fileUri = savedFile.uri;
      await Share.share({
        title: title || "Save Image",
        text: title || fileName,
        url: fileUri,
        dialogTitle: "Save or Share Image"
      });
      return {
        success: true,
        message: "Image shared successfully",
        filePath: fileUri
      };
    } catch (error) {
      console.error("Error sharing image:", error);
      return {
        success: false,
        message: error.message || "Failed to share image"
      };
    }
  }
  /**
   * Save image to device storage (mobile)
   *
   * ANDROID: Uses custom MediaStore plugin to save directly to gallery (scoped storage compliant)
   * iOS: Saves to Documents/MiniMinds folder
   */
  async saveToDevice(imageData, fileName) {
    const platform = Capacitor.getPlatform();
    const base64Data = this.extractBase64Data(imageData);
    const mimeType = this.getMimeType(imageData);
    const extension = this.getExtension(mimeType);
    const finalFileName = this.ensureExtension(fileName, extension);
    if (platform === "android") {
      try {
        const result = await SaveToGallery.saveImage({
          base64Data: imageData,
          // Pass full data URL
          fileName: finalFileName
        });
        return {
          success: result.success,
          message: result.message,
          filePath: result.uri
        };
      } catch (error) {
        console.error("Error saving to Android gallery:", error);
        return this.shareImage(imageData, fileName, "Save Image to Gallery");
      }
    }
    try {
      const tempFile = await Filesystem.writeFile({
        path: finalFileName,
        data: base64Data,
        directory: Directory.Cache
      });
      await Media.savePhoto({
        path: tempFile.uri,
        albumIdentifier: void 0
        // Saves to default Photos album
      });
      try {
        await Filesystem.deleteFile({
          path: finalFileName,
          directory: Directory.Cache
        });
      } catch {
      }
      return {
        success: true,
        message: "Image saved to Photos",
        filePath: tempFile.uri
      };
    } catch (error) {
      console.error("Error saving to iOS Photos:", error);
      return this.shareImage(imageData, fileName, "Save Image");
    }
  }
  /**
   * Download image on web browser
   */
  downloadOnWeb(imageData, fileName) {
    return new Promise((resolve) => {
      try {
        const mimeType = this.getMimeType(imageData);
        const extension = this.getExtension(mimeType);
        const finalFileName = this.ensureExtension(fileName, extension);
        const base64Data = this.extractBase64Data(imageData);
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });
        (0, import_file_saver.saveAs)(blob, finalFileName);
        resolve({
          success: true,
          message: "Image downloaded successfully"
        });
      } catch (error) {
        console.error("Error downloading image:", error);
        resolve({
          success: false,
          message: error.message || "Failed to download image"
        });
      }
    });
  }
  /**
   * Extract base64 data from data URL
   */
  extractBase64Data(dataUrl) {
    if (dataUrl.includes(",")) {
      return dataUrl.split(",")[1];
    }
    return dataUrl;
  }
  /**
   * Get MIME type from data URL
   */
  getMimeType(dataUrl) {
    if (dataUrl.startsWith("data:")) {
      const match = dataUrl.match(/data:([^;]+);/);
      if (match) {
        return match[1];
      }
    }
    return "image/jpeg";
  }
  /**
   * Get file extension from MIME type
   */
  getExtension(mimeType) {
    const mimeToExt = {
      "image/jpeg": "jpg",
      "image/jpg": "jpg",
      "image/png": "png",
      "image/gif": "gif",
      "image/webp": "webp",
      "image/bmp": "bmp",
      "image/svg+xml": "svg"
    };
    return mimeToExt[mimeType] || "jpg";
  }
  /**
   * Ensure filename has the correct extension
   */
  ensureExtension(fileName, extension) {
    const hasExtension = /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(fileName);
    if (!hasExtension) {
      return `${fileName}.${extension}`;
    }
    return fileName;
  }
  /**
   * Generate a unique filename with timestamp
   */
  generateFileName(prefix = "image") {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return `${prefix}_${timestamp}`;
  }
  /**
   * Check if running on native platform
   */
  isNativePlatform() {
    return Capacitor.isNativePlatform();
  }
  /**
   * Get current platform
   */
  getPlatform() {
    return Capacitor.getPlatform();
  }
  static \u0275fac = function ImageDownloadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageDownloadService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageDownloadService, factory: _ImageDownloadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageDownloadService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ImageDownloadService
};
//# sourceMappingURL=chunk-3GUYEFWP.js.map
