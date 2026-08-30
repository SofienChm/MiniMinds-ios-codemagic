import {
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/langauge-service.ts
var LanguageService = class _LanguageService {
  translate;
  // Supported languages
  supportedLanguages = ["en", "fr", "it", "ar"];
  currentLanguage = signal(this.getInitialLanguage(), ...ngDevMode ? [{ debugName: "currentLanguage" }] : []);
  constructor(translate) {
    this.translate = translate;
    this.translate.setDefaultLang("en");
    this.translate.addLangs(this.supportedLanguages);
    this.use(this.currentLanguage());
  }
  /**
   * Get initial language - checks localStorage first, then browser language
   */
  getInitialLanguage() {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && this.supportedLanguages.includes(storedLang)) {
      return storedLang;
    }
    const browserLang = this.detectBrowserLanguage();
    if (browserLang) {
      return browserLang;
    }
    return "en";
  }
  /**
   * Detect browser language and return supported language code
   */
  detectBrowserLanguage() {
    if (typeof navigator === "undefined") {
      return null;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (!browserLang) {
      return null;
    }
    const primaryLang = browserLang.split("-")[0].toLowerCase();
    if (this.supportedLanguages.includes(primaryLang)) {
      return primaryLang;
    }
    if (navigator.languages && navigator.languages.length > 0) {
      for (const lang of navigator.languages) {
        const primary = lang.split("-")[0].toLowerCase();
        if (this.supportedLanguages.includes(primary)) {
          return primary;
        }
      }
    }
    return null;
  }
  /**
   * Get the detected browser language (for display purposes)
   */
  getBrowserLanguage() {
    return this.detectBrowserLanguage();
  }
  /**
   * Get all supported languages with their display names
   */
  getAvailableLanguages() {
    return [
      { code: "en", name: "English", nativeName: "English" },
      { code: "fr", name: "French", nativeName: "Fran\xE7ais" },
      { code: "it", name: "Italian", nativeName: "Italiano" },
      { code: "ar", name: "Arabic", nativeName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }
    ];
  }
  use(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      lang = "en";
    }
    this.translate.use(lang);
    this.currentLanguage.set(lang);
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-LJABGPK5.js.map
