import {
  LanguageService
} from "./chunk-LJABGPK5.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import {
  Capacitor
} from "./chunk-7KUBODN6.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  UpperCasePipe,
  isPlatformBrowser
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  Inject,
  PLATFORM_ID,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/landing/landing.ts
function Landing_a_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 131);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LANDING.NAV.SIGN_IN"));
  }
}
function Landing_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 132);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LANDING.NAV.GO_TO_DASHBOARD"));
  }
}
function Landing_div_37_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 135);
    \u0275\u0275listener("click", function Landing_div_37_button_1_Template_button_click_0_listener() {
      const lang_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectLanguage(lang_r2.code));
    });
    \u0275\u0275elementStart(1, "span", 136);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", lang_r2.code === ctx_r2.currentLang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r2.nativeName);
  }
}
function Landing_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, Landing_div_37_button_1_Template, 3, 3, "button", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.availableLanguages);
  }
}
function Landing_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275listener("click", function Landing_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
function Landing_a_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 138);
    \u0275\u0275listener("click", function Landing_a_64_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LANDING.NAV.SIGN_IN"));
  }
}
function Landing_a_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 139);
    \u0275\u0275listener("click", function Landing_a_65_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "LANDING.NAV.GO_TO_DASHBOARD"));
  }
}
function Landing_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275listener("click", function Landing_button_67_Template_button_click_0_listener() {
      const lang_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLanguage(lang_r8.code));
    });
    \u0275\u0275elementStart(1, "span", 136);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lang_r8.code === ctx_r2.currentLang);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r8.nativeName);
  }
}
function Landing_a_368_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 141);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "LANDING.CTA.GET_STARTED"), " ");
  }
}
function Landing_a_369_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 143);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "LANDING.NAV.GO_TO_DASHBOARD"), " ");
  }
}
var Landing = class _Landing {
  authService;
  router;
  languageService;
  platformId;
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  showLanguageDropdown = false;
  isMobileMenuOpen = false;
  clickListener;
  constructor(authService, router, languageService, platformId) {
    this.authService = authService;
    this.router = router;
    this.languageService = languageService;
    this.platformId = platformId;
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (Capacitor.isNativePlatform()) {
        if (this.authService.isAuthenticated()) {
          this.router.navigate(["/dashboard"]);
        } else {
          this.router.navigate(["/login"]);
        }
        return;
      }
      this.setupSmoothScroll();
    }
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.clickListener) {
      document.removeEventListener("click", this.clickListener);
    }
  }
  get isLoggedIn() {
    return this.authService.isAuthenticated();
  }
  get currentLang() {
    return this.languageService.currentLanguage();
  }
  get availableLanguages() {
    return this.languageService.getAvailableLanguages();
  }
  toggleLanguageDropdown() {
    this.showLanguageDropdown = !this.showLanguageDropdown;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = "";
  }
  selectLanguage(langCode) {
    this.languageService.use(langCode);
    this.showLanguageDropdown = false;
  }
  getCurrentLanguageFlag() {
    const flags = {
      "en": "",
      "fr": "",
      "it": "",
      "ar": ""
    };
    return flags[this.currentLang] || "\u{1F310}";
  }
  setupSmoothScroll() {
    this.clickListener = (e) => {
      const target = e.target;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const navHeight = 80;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }
        }
      }
      if (!target.closest(".language-selector")) {
        this.showLanguageDropdown = false;
      }
    };
    document.addEventListener("click", this.clickListener);
  }
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 386, vars: 246, consts: [[1, "landing-page"], [1, "landing-nav"], [1, "nav-container"], [1, "logo"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo", 1, "logo-img"], [1, "logo-text"], [1, "nav-center"], ["href", "#features", 1, "page-scroll"], ["href", "#how-it-works", 1, "page-scroll"], ["href", "#roles", 1, "page-scroll"], ["routerLink", "/about"], ["href", "#download", 1, "page-scroll"], [1, "nav-actions"], ["routerLink", "/request-demo", 1, "btn-nav", "btn-demo-nav"], ["routerLink", "/login", "class", "btn-nav btn-login-nav", 4, "ngIf"], ["routerLink", "/dashboard", "class", "btn-nav btn-login-nav", 4, "ngIf"], [1, "language-selector"], [1, "language-btn", 3, "click"], [1, "lang-flag"], [1, "lang-code"], [1, "bi", "bi-chevron-down"], ["class", "language-dropdown", 4, "ngIf"], [1, "burger-menu", 3, "click"], [1, "burger-line"], ["class", "mobile-menu-overlay", 3, "click", 4, "ngIf"], [1, "mobile-menu"], [1, "mobile-menu-links"], ["href", "#features", 1, "page-scroll", 3, "click"], ["href", "#how-it-works", 1, "page-scroll", 3, "click"], ["href", "#roles", 1, "page-scroll", 3, "click"], ["routerLink", "/about", 3, "click"], ["href", "#download", 1, "page-scroll", 3, "click"], [1, "mobile-menu-actions"], ["routerLink", "/request-demo", 1, "btn-nav", "btn-demo-nav", 3, "click"], ["routerLink", "/login", "class", "btn-nav btn-login-nav", 3, "click", 4, "ngIf"], ["routerLink", "/dashboard", "class", "btn-nav btn-login-nav", 3, "click", 4, "ngIf"], [1, "mobile-language-selector"], ["class", "mobile-lang-option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "hero-section"], [1, "hero-background"], [1, "gradient-blob", "blob-1"], [1, "gradient-blob", "blob-2"], [1, "gradient-blob", "blob-3"], [1, "hero-container"], [1, "hero-content"], [1, "hero-title"], [1, "highlight"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/request-demo", 1, "btn-hero", "btn-primary-hero"], [1, "bi", "bi-play-circle"], ["href", "#features", 1, "btn-hero", "btn-secondary-hero"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "stat-divider"], [1, "hero-image"], ["src", "/assets/mockup.png", "alt", "MiniMinds App Mockup", 1, "mockup-image"], ["id", "features", 1, "features-section"], [1, "section-container"], [1, "section-header"], [1, "section-badge"], [1, "section-title"], [1, "section-subtitle"], [1, "features-grid"], [1, "feature-card"], [1, "feature-icon", "icon-attendance"], [1, "bi", "bi-qr-code-scan"], [1, "feature-title"], [1, "feature-desc"], [1, "feature-icon", "icon-activities"], [1, "bi", "bi-journal-text"], [1, "feature-icon", "icon-messaging"], [1, "bi", "bi-chat-heart"], [1, "feature-icon", "icon-gallery"], [1, "bi", "bi-images"], [1, "feature-icon", "icon-payments"], [1, "bi", "bi-credit-card"], [1, "feature-icon", "icon-notifications"], [1, "bi", "bi-bell"], ["id", "how-it-works", 1, "how-it-works-section"], [1, "steps-container"], [1, "step-item"], [1, "step-number"], [1, "step-content"], [1, "step-connector"], ["id", "roles", 1, "roles-section"], [1, "roles-grid"], [1, "role-card", "role-admin"], [1, "role-icon"], [1, "bi", "bi-shield-check"], [1, "role-features"], [1, "bi", "bi-check2"], [1, "role-card", "role-teacher"], [1, "bi", "bi-mortarboard"], [1, "role-card", "role-parent"], [1, "bi", "bi-people-fill"], ["id", "download", 1, "download-section"], [1, "download-grid"], [1, "download-content"], [1, "download-title"], [1, "download-subtitle"], [1, "download-features"], [1, "download-feature"], [1, "bi", "bi-check-circle-fill"], [1, "store-buttons"], ["href", "#", 1, "store-btn", "app-store"], [1, "bi", "bi-apple"], [1, "store-text"], [1, "store-label"], [1, "store-name"], ["href", "#", 1, "store-btn", "play-store"], [1, "bi", "bi-google-play"], [1, "download-image"], [1, "phone-frame"], ["src", "/assets/mockup.png", "alt", "MiniMinds Mobile App", 1, "app-screenshot"], [1, "cta-section"], [1, "cta-container"], [1, "cta-content"], ["routerLink", "/login", "class", "btn-cta", 4, "ngIf"], ["routerLink", "/dashboard", "class", "btn-cta", 4, "ngIf"], [1, "landing-footer"], [1, "footer-container"], [1, "footer-brand"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo", 1, "footer-logo"], [1, "footer-brand-name"], [1, "footer-links"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-of-service"], [1, "footer-copyright"], ["routerLink", "/login", 1, "btn-nav", "btn-login-nav"], ["routerLink", "/dashboard", 1, "btn-nav", "btn-login-nav"], [1, "language-dropdown"], ["class", "language-option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "language-option", 3, "click"], [1, "lang-name"], [1, "mobile-menu-overlay", 3, "click"], ["routerLink", "/login", 1, "btn-nav", "btn-login-nav", 3, "click"], ["routerLink", "/dashboard", 1, "btn-nav", "btn-login-nav", 3, "click"], [1, "mobile-lang-option", 3, "click"], ["routerLink", "/login", 1, "btn-cta"], [1, "bi", "bi-arrow-right"], ["routerLink", "/dashboard", 1, "btn-cta"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6, "MiniMinds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 11);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 12)(24, "a", 13);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, Landing_a_27_Template, 3, 3, "a", 14)(28, Landing_a_28_Template, 3, 3, "a", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 16)(30, "button", 17);
      \u0275\u0275listener("click", function Landing_Template_button_click_30_listener() {
        return ctx.toggleLanguageDropdown();
      });
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "uppercase");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, Landing_div_37_Template, 2, 1, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 22);
      \u0275\u0275listener("click", function Landing_Template_button_click_38_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(39, "span", 23)(40, "span", 23)(41, "span", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(42, Landing_div_42_Template, 1, 0, "div", 24);
      \u0275\u0275elementStart(43, "div", 25)(44, "div", 26)(45, "a", 27);
      \u0275\u0275listener("click", function Landing_Template_a_click_45_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 28);
      \u0275\u0275listener("click", function Landing_Template_a_click_48_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 29);
      \u0275\u0275listener("click", function Landing_Template_a_click_51_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 30);
      \u0275\u0275listener("click", function Landing_Template_a_click_54_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 31);
      \u0275\u0275listener("click", function Landing_Template_a_click_57_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 32)(61, "a", 33);
      \u0275\u0275listener("click", function Landing_Template_a_click_61_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, Landing_a_64_Template, 3, 3, "a", 34)(65, Landing_a_65_Template, 3, 3, "a", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 36);
      \u0275\u0275template(67, Landing_button_67_Template, 3, 3, "button", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "section", 38)(69, "div", 39);
      \u0275\u0275element(70, "div", 40)(71, "div", 41)(72, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 43)(74, "div", 44)(75, "h1", 45);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementStart(78, "span", 46);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "p", 47);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 48)(85, "a", 49);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275element(88, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "a", 51);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 52)(93, "div", 53)(94, "span", 54);
      \u0275\u0275text(95, "100+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span", 55);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(99, "div", 56);
      \u0275\u0275elementStart(100, "div", 53)(101, "span", 54);
      \u0275\u0275text(102, "5,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 55);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(106, "div", 56);
      \u0275\u0275elementStart(107, "div", 53)(108, "span", 54);
      \u0275\u0275text(109, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span", 55);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "div", 57);
      \u0275\u0275element(114, "img", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "section", 59)(116, "div", 60)(117, "div", 61)(118, "span", 62);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "h2", 63);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p", 64);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "div", 65)(128, "div", 66)(129, "div", 67);
      \u0275\u0275element(130, "i", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "h3", 69);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p", 70);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 66)(138, "div", 71);
      \u0275\u0275element(139, "i", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "h3", 69);
      \u0275\u0275text(141);
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p", 70);
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 66)(147, "div", 73);
      \u0275\u0275element(148, "i", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "h3", 69);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 70);
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 66)(156, "div", 75);
      \u0275\u0275element(157, "i", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "h3", 69);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "p", 70);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 66)(165, "div", 77);
      \u0275\u0275element(166, "i", 78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "h3", 69);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 70);
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 66)(174, "div", 79);
      \u0275\u0275element(175, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "h3", 69);
      \u0275\u0275text(177);
      \u0275\u0275pipe(178, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 70);
      \u0275\u0275text(180);
      \u0275\u0275pipe(181, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(182, "section", 81)(183, "div", 60)(184, "div", 61)(185, "span", 62);
      \u0275\u0275text(186);
      \u0275\u0275pipe(187, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "h2", 63);
      \u0275\u0275text(189);
      \u0275\u0275pipe(190, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 82)(192, "div", 83)(193, "div", 84);
      \u0275\u0275text(194, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div", 85)(196, "h3");
      \u0275\u0275text(197);
      \u0275\u0275pipe(198, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "p");
      \u0275\u0275text(200);
      \u0275\u0275pipe(201, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(202, "div", 86);
      \u0275\u0275elementStart(203, "div", 83)(204, "div", 84);
      \u0275\u0275text(205, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "div", 85)(207, "h3");
      \u0275\u0275text(208);
      \u0275\u0275pipe(209, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p");
      \u0275\u0275text(211);
      \u0275\u0275pipe(212, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(213, "div", 86);
      \u0275\u0275elementStart(214, "div", 83)(215, "div", 84);
      \u0275\u0275text(216, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "div", 85)(218, "h3");
      \u0275\u0275text(219);
      \u0275\u0275pipe(220, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p");
      \u0275\u0275text(222);
      \u0275\u0275pipe(223, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(224, "section", 87)(225, "div", 60)(226, "div", 61)(227, "span", 62);
      \u0275\u0275text(228);
      \u0275\u0275pipe(229, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "h2", 63);
      \u0275\u0275text(231);
      \u0275\u0275pipe(232, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 88)(234, "div", 89)(235, "div", 90);
      \u0275\u0275element(236, "i", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "h3");
      \u0275\u0275text(238);
      \u0275\u0275pipe(239, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "ul", 92)(241, "li");
      \u0275\u0275element(242, "i", 93);
      \u0275\u0275text(243);
      \u0275\u0275pipe(244, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "li");
      \u0275\u0275element(246, "i", 93);
      \u0275\u0275text(247);
      \u0275\u0275pipe(248, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "li");
      \u0275\u0275element(250, "i", 93);
      \u0275\u0275text(251);
      \u0275\u0275pipe(252, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "li");
      \u0275\u0275element(254, "i", 93);
      \u0275\u0275text(255);
      \u0275\u0275pipe(256, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(257, "div", 94)(258, "div", 90);
      \u0275\u0275element(259, "i", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "h3");
      \u0275\u0275text(261);
      \u0275\u0275pipe(262, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "ul", 92)(264, "li");
      \u0275\u0275element(265, "i", 93);
      \u0275\u0275text(266);
      \u0275\u0275pipe(267, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "li");
      \u0275\u0275element(269, "i", 93);
      \u0275\u0275text(270);
      \u0275\u0275pipe(271, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "li");
      \u0275\u0275element(273, "i", 93);
      \u0275\u0275text(274);
      \u0275\u0275pipe(275, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "li");
      \u0275\u0275element(277, "i", 93);
      \u0275\u0275text(278);
      \u0275\u0275pipe(279, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(280, "div", 96)(281, "div", 90);
      \u0275\u0275element(282, "i", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "h3");
      \u0275\u0275text(284);
      \u0275\u0275pipe(285, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "ul", 92)(287, "li");
      \u0275\u0275element(288, "i", 93);
      \u0275\u0275text(289);
      \u0275\u0275pipe(290, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "li");
      \u0275\u0275element(292, "i", 93);
      \u0275\u0275text(293);
      \u0275\u0275pipe(294, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "li");
      \u0275\u0275element(296, "i", 93);
      \u0275\u0275text(297);
      \u0275\u0275pipe(298, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "li");
      \u0275\u0275element(300, "i", 93);
      \u0275\u0275text(301);
      \u0275\u0275pipe(302, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(303, "section", 98)(304, "div", 60)(305, "div", 99)(306, "div", 100)(307, "span", 62);
      \u0275\u0275text(308);
      \u0275\u0275pipe(309, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "h2", 101);
      \u0275\u0275text(311);
      \u0275\u0275pipe(312, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "p", 102);
      \u0275\u0275text(314);
      \u0275\u0275pipe(315, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "div", 103)(317, "div", 104);
      \u0275\u0275element(318, "i", 105);
      \u0275\u0275elementStart(319, "span");
      \u0275\u0275text(320);
      \u0275\u0275pipe(321, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 104);
      \u0275\u0275element(323, "i", 105);
      \u0275\u0275elementStart(324, "span");
      \u0275\u0275text(325);
      \u0275\u0275pipe(326, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "div", 104);
      \u0275\u0275element(328, "i", 105);
      \u0275\u0275elementStart(329, "span");
      \u0275\u0275text(330);
      \u0275\u0275pipe(331, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(332, "div", 104);
      \u0275\u0275element(333, "i", 105);
      \u0275\u0275elementStart(334, "span");
      \u0275\u0275text(335);
      \u0275\u0275pipe(336, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 106)(338, "a", 107);
      \u0275\u0275element(339, "i", 108);
      \u0275\u0275elementStart(340, "div", 109)(341, "span", 110);
      \u0275\u0275text(342);
      \u0275\u0275pipe(343, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "span", 111);
      \u0275\u0275text(345);
      \u0275\u0275pipe(346, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(347, "a", 112);
      \u0275\u0275element(348, "i", 113);
      \u0275\u0275elementStart(349, "div", 109)(350, "span", 110);
      \u0275\u0275text(351);
      \u0275\u0275pipe(352, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "span", 111);
      \u0275\u0275text(354);
      \u0275\u0275pipe(355, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(356, "div", 114)(357, "div", 115);
      \u0275\u0275element(358, "img", 116);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(359, "section", 117)(360, "div", 118)(361, "div", 119)(362, "h2");
      \u0275\u0275text(363);
      \u0275\u0275pipe(364, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p");
      \u0275\u0275text(366);
      \u0275\u0275pipe(367, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(368, Landing_a_368_Template, 4, 3, "a", 120)(369, Landing_a_369_Template, 4, 3, "a", 121);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(370, "footer", 122)(371, "div", 123)(372, "div", 124);
      \u0275\u0275element(373, "img", 125);
      \u0275\u0275elementStart(374, "span", 126);
      \u0275\u0275text(375, "MiniMinds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "div", 127)(377, "a", 128);
      \u0275\u0275text(378);
      \u0275\u0275pipe(379, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "a", 129);
      \u0275\u0275text(381);
      \u0275\u0275pipe(382, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "div", 130);
      \u0275\u0275text(384);
      \u0275\u0275pipe(385, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 92, "LANDING.NAV.FEATURES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 94, "LANDING.NAV.HOW_IT_WORKS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 96, "LANDING.NAV.ROLES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 98, "LANDING.NAV.ABOUT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 100, "LANDING.NAV.DOWNLOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 102, "LANDING.NAV.REQUEST_DEMO"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.getCurrentLanguageFlag());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 104, ctx.currentLang));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showLanguageDropdown);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.isMobileMenuOpen);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isMobileMenuOpen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 106, "LANDING.NAV.FEATURES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 108, "LANDING.NAV.HOW_IT_WORKS"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 110, "LANDING.NAV.ROLES"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 112, "LANDING.NAV.ABOUT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 114, "LANDING.NAV.DOWNLOAD"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 116, "LANDING.NAV.REQUEST_DEMO"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.availableLanguages);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 118, "LANDING.HERO.TITLE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 120, "LANDING.HERO.TITLE_HIGHLIGHT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 122, "LANDING.HERO.SUBTITLE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 124, "LANDING.HERO.REQUEST_DEMO"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(91, 126, "LANDING.HERO.LEARN_MORE"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 128, "LANDING.HERO.STAT_DAYCARES"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 130, "LANDING.HERO.STAT_CHILDREN"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 132, "LANDING.HERO.STAT_PARENTS"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 134, "LANDING.FEATURES.BADGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 136, "LANDING.FEATURES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(126, 138, "LANDING.FEATURES.SUBTITLE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 140, "LANDING.FEATURES.QR_CHECKIN.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 142, "LANDING.FEATURES.QR_CHECKIN.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(142, 144, "LANDING.FEATURES.DAILY_ACTIVITIES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 146, "LANDING.FEATURES.DAILY_ACTIVITIES.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 148, "LANDING.FEATURES.MESSAGING.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(154, 150, "LANDING.FEATURES.MESSAGING.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(160, 152, "LANDING.FEATURES.GALLERY.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(163, 154, "LANDING.FEATURES.GALLERY.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 156, "LANDING.FEATURES.PAYMENTS.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(172, 158, "LANDING.FEATURES.PAYMENTS.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(178, 160, "LANDING.FEATURES.NOTIFICATIONS.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(181, 162, "LANDING.FEATURES.NOTIFICATIONS.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 164, "LANDING.HOW_IT_WORKS.BADGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(190, 166, "LANDING.HOW_IT_WORKS.TITLE"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(198, 168, "LANDING.HOW_IT_WORKS.STEP1.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(201, 170, "LANDING.HOW_IT_WORKS.STEP1.DESC"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(209, 172, "LANDING.HOW_IT_WORKS.STEP2.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(212, 174, "LANDING.HOW_IT_WORKS.STEP2.DESC"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(220, 176, "LANDING.HOW_IT_WORKS.STEP3.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(223, 178, "LANDING.HOW_IT_WORKS.STEP3.DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(229, 180, "LANDING.ROLES.BADGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(232, 182, "LANDING.ROLES.TITLE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(239, 184, "LANDING.ROLES.ADMIN.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(244, 186, "LANDING.ROLES.ADMIN.FEATURE1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(248, 188, "LANDING.ROLES.ADMIN.FEATURE2"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(252, 190, "LANDING.ROLES.ADMIN.FEATURE3"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(256, 192, "LANDING.ROLES.ADMIN.FEATURE4"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(262, 194, "LANDING.ROLES.TEACHER.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(267, 196, "LANDING.ROLES.TEACHER.FEATURE1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(271, 198, "LANDING.ROLES.TEACHER.FEATURE2"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(275, 200, "LANDING.ROLES.TEACHER.FEATURE3"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(279, 202, "LANDING.ROLES.TEACHER.FEATURE4"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(285, 204, "LANDING.ROLES.PARENT.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(290, 206, "LANDING.ROLES.PARENT.FEATURE1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(294, 208, "LANDING.ROLES.PARENT.FEATURE2"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(298, 210, "LANDING.ROLES.PARENT.FEATURE3"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(302, 212, "LANDING.ROLES.PARENT.FEATURE4"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(309, 214, "LANDING.DOWNLOAD.BADGE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(312, 216, "LANDING.DOWNLOAD.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(315, 218, "LANDING.DOWNLOAD.SUBTITLE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(321, 220, "LANDING.DOWNLOAD.FEATURE1"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(326, 222, "LANDING.DOWNLOAD.FEATURE2"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(331, 224, "LANDING.DOWNLOAD.FEATURE3"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(336, 226, "LANDING.DOWNLOAD.FEATURE4"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(343, 228, "LANDING.DOWNLOAD.DOWNLOAD_ON"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(346, 230, "LANDING.DOWNLOAD.APP_STORE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(352, 232, "LANDING.DOWNLOAD.GET_IT_ON"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(355, 234, "LANDING.DOWNLOAD.PLAY_STORE"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(364, 236, "LANDING.CTA.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(367, 238, "LANDING.CTA.SUBTITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(379, 240, "LANDING.FOOTER.PRIVACY_POLICY"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(382, 242, "LANDING.FOOTER.TERMS_OF_SERVICE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2(" \xA9 ", ctx.currentYear, " ", \u0275\u0275pipeBind1(385, 244, "LANDING.FOOTER.COPYRIGHT"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, TranslateModule, UpperCasePipe, TranslatePipe], styles: ['\n\n.landing-page[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    "Poppins",\n    sans-serif;\n  overflow-x: hidden;\n  background: #ffffff;\n}\n.nav-center[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.nav-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #202C4B;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.nav-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7dd3c0;\n}\n@media (max-width: 768px) {\n  .nav-center[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.landing-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 16px 0;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.landing-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.landing-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.landing-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202C4B;\n  font-family: "Poppins", sans-serif;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-login-nav[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-login-nav[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(125, 185, 255, 0.4);\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-demo-nav[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #202C4B;\n  border: 2px solid #7dd3c0;\n}\n.landing-nav[_ngcontent-%COMP%]   .nav-actions[_ngcontent-%COMP%]   .btn-demo-nav[_ngcontent-%COMP%]:hover {\n  background: rgba(125, 211, 192, 0.1);\n  transform: translateY(-2px);\n}\n.burger-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 8px;\n  transition: background 0.2s ease;\n  z-index: 1002;\n}\n.burger-menu[_ngcontent-%COMP%]:hover {\n  background: rgba(125, 211, 192, 0.1);\n}\n.burger-menu[_ngcontent-%COMP%]   .burger-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2.5px;\n  background: #202C4B;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n  transform-origin: center;\n}\n.burger-menu.active[_ngcontent-%COMP%]   .burger-line[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.burger-menu.active[_ngcontent-%COMP%]   .burger-line[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.burger-menu.active[_ngcontent-%COMP%]   .burger-line[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n@media (max-width: 768px) {\n  .burger-menu[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.mobile-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 999;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -100%;\n  width: 280px;\n  height: 100vh;\n  background: white;\n  z-index: 1001;\n  padding: 80px 24px 32px;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);\n  transition: right 0.3s ease;\n  overflow-y: auto;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #E9EDF4;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #202C4B;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 12px 16px;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #E9EDF4;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-actions[_ngcontent-%COMP%]   .btn-nav[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-actions[_ngcontent-%COMP%]   .btn-demo-nav[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #202C4B;\n  border: 2px solid #7dd3c0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-menu-actions[_ngcontent-%COMP%]   .btn-login-nav[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-language-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-language-selector[_ngcontent-%COMP%]   .mobile-lang-option[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #E9EDF4;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  color: #202C4B;\n  transition: all 0.2s ease;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-language-selector[_ngcontent-%COMP%]   .mobile-lang-option[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-language-selector[_ngcontent-%COMP%]   .mobile-lang-option.active[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.15);\n  border-color: #7dd3c0;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.language-selector[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n@media (max-width: 768px) {\n  .language-selector[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.language-selector[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.language-selector[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.language-selector[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]   .lang-flag[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.language-selector[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]   .lang-code[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #202C4B;\n}\n.language-selector[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.language-selector[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  min-width: 140px;\n  z-index: 1001;\n  animation: _ngcontent-%COMP%_dropdownFade 0.2s ease;\n}\n.language-selector[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.language-selector[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option[_ngcontent-%COMP%]:hover {\n  background: rgba(125, 211, 192, 0.1);\n}\n.language-selector[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option.active[_ngcontent-%COMP%] {\n  background: rgba(125, 211, 192, 0.2);\n  font-weight: 600;\n}\n.language-selector[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   .language-option[_ngcontent-%COMP%]   .lang-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #202C4B;\n}\n@keyframes _ngcontent-%COMP%_dropdownFade {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 120px 24px 80px;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .gradient-blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.5;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .blob-1[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #a8d8ff 100%);\n  top: -200px;\n  right: -100px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .blob-2[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #a8f0e0 100%);\n  bottom: -100px;\n  left: -100px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-background[_ngcontent-%COMP%]   .blob-3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0b8ff 0%,\n      #ffd0ff 100%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 800;\n  line-height: 1.1;\n  color: #202C4B;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6A7287;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 500px;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 48px;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-primary-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-primary-hero[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(125, 185, 255, 0.4);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-secondary-hero[_ngcontent-%COMP%] {\n  background: white;\n  color: #202C4B;\n  border: 2px solid #E9EDF4;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-secondary-hero[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  color: #202C4B;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6A7287;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: #E9EDF4;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .mockup-image[_ngcontent-%COMP%] {\n  max-height: 550px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n}\n@media (max-width: 968px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .mockup-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 600px;\n  background:\n    linear-gradient(\n      145deg,\n      #2d2d2d 0%,\n      #1a1a1a 100%);\n  border-radius: 40px;\n  padding: 12px;\n  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2);\n  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n  border-radius: 32px;\n  padding: 24px;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-header[_ngcontent-%COMP%]   .mockup-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-header[_ngcontent-%COMP%]   .mockup-greeting[_ngcontent-%COMP%]   .mockup-text-sm[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 12px;\n  background: #E9EDF4;\n  border-radius: 6px;\n  margin-bottom: 6px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-header[_ngcontent-%COMP%]   .mockup-greeting[_ngcontent-%COMP%]   .mockup-text-lg[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 16px;\n  background: #202C4B;\n  border-radius: 8px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .mockup-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .mockup-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .card-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9f7d 0%,\n      #ff7d5a 100%);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   .phone-mockup[_ngcontent-%COMP%]   .phone-screen[_ngcontent-%COMP%]   .mockup-cards[_ngcontent-%COMP%]   .card-4[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.section-header[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 20px;\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6A7287;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.features-section[_ngcontent-%COMP%] {\n  padding: 100px 24px;\n  background: #f8fafc;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 30px;\n}\n@media (max-width: 968px) {\n  .features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  transition: all 0.3s ease;\n  border: 1px solid #E9EDF4;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-attendance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-activities[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-messaging[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9f7d 0%,\n      #ff7d5a 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-gallery[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-payments[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd07d 0%,\n      #ffb84d 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-icon.icon-notifications[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7da4 0%,\n      #ff5a8a 100%);\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.features-section[_ngcontent-%COMP%]   .feature-card[_ngcontent-%COMP%]   .feature-desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6A7287;\n  line-height: 1.6;\n}\n.how-it-works-section[_ngcontent-%COMP%] {\n  padding: 100px 24px;\n}\n.how-it-works-section[_ngcontent-%COMP%]   .steps-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .how-it-works-section[_ngcontent-%COMP%]   .steps-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.how-it-works-section[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 280px;\n}\n.how-it-works-section[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  font-size: 24px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: "Poppins", sans-serif;\n}\n.how-it-works-section[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.how-it-works-section[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6A7287;\n  line-height: 1.6;\n}\n.how-it-works-section[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  margin-top: 32px;\n}\n@media (max-width: 768px) {\n  .how-it-works-section[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%] {\n    width: 2px;\n    height: 40px;\n    margin-top: 0;\n  }\n}\n.roles-section[_ngcontent-%COMP%] {\n  padding: 100px 24px;\n  background: #f8fafc;\n}\n.roles-section[_ngcontent-%COMP%]   .roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 30px;\n}\n@media (max-width: 968px) {\n  .roles-section[_ngcontent-%COMP%]   .roles-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 40px 32px;\n  text-align: center;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  font-size: 15px;\n  color: #6A7287;\n  border-bottom: 1px solid #f0f0f0;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card[_ngcontent-%COMP%]   .role-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-admin[_ngcontent-%COMP%]   .role-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-admin[_ngcontent-%COMP%]:hover {\n  border-color: #7db9ff;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-teacher[_ngcontent-%COMP%]   .role-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-teacher[_ngcontent-%COMP%]:hover {\n  border-color: #7dd3c0;\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-parent[_ngcontent-%COMP%]   .role-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.roles-section[_ngcontent-%COMP%]   .role-card.role-parent[_ngcontent-%COMP%]:hover {\n  border-color: #b8a4ff;\n}\n.download-section[_ngcontent-%COMP%] {\n  padding: 100px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e8f4f8 100%);\n}\n.download-section[_ngcontent-%COMP%]   .download-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .download-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 20px;\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.download-section[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   .download-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .download-section[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   .download-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   .download-subtitle[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #6A7287;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 480px;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   .download-subtitle[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n@media (max-width: 480px) {\n  .download-section[_ngcontent-%COMP%]   .download-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-features[_ngcontent-%COMP%]   .download-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  color: #202C4B;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .download-features[_ngcontent-%COMP%]   .download-feature[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-features[_ngcontent-%COMP%]   .download-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 24px;\n  border-radius: 12px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  min-width: 180px;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%]   .store-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.9;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn[_ngcontent-%COMP%]   .store-text[_ngcontent-%COMP%]   .store-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn.app-store[_ngcontent-%COMP%] {\n  background: #000000;\n  color: white;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn.app-store[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn.play-store[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.download-section[_ngcontent-%COMP%]   .store-buttons[_ngcontent-%COMP%]   .store-btn.play-store[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(125, 185, 255, 0.4);\n}\n.download-section[_ngcontent-%COMP%]   .download-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .download-image[_ngcontent-%COMP%] {\n    order: -1;\n    margin-bottom: 20px;\n  }\n}\n.download-section[_ngcontent-%COMP%]   .download-image[_ngcontent-%COMP%]   .phone-frame[_ngcontent-%COMP%] {\n  position: relative;\n}\n.download-section[_ngcontent-%COMP%]   .download-image[_ngcontent-%COMP%]   .phone-frame[_ngcontent-%COMP%]   .app-screenshot[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 500px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n  border-radius: 24px;\n}\n@media (max-width: 968px) {\n  .download-section[_ngcontent-%COMP%]   .download-image[_ngcontent-%COMP%]   .phone-frame[_ngcontent-%COMP%]   .app-screenshot[_ngcontent-%COMP%] {\n    max-height: 350px;\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 100px 24px;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border-radius: 32px;\n  padding: 60px 40px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 32px;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 36px;\n  background: white;\n  color: #202C4B;\n  border-radius: 14px;\n  font-weight: 700;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   .btn-cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.landing-footer[_ngcontent-%COMP%] {\n  background: #202C4B;\n  padding: 40px 24px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .landing-footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   .footer-brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "Poppins", sans-serif;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 14px;\n  transition: color 0.3s ease;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.landing-footer[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=landing.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `<div class="landing-page">\r
  <!-- Navigation -->\r
  <nav class="landing-nav">\r
    <div class="nav-container">\r
      <div class="logo">\r
        <img src="/assets/images/icon.png" alt="MiniMinds Logo" class="logo-img">\r
        <span class="logo-text">MiniMinds</span>\r
      </div>\r
      <div class="nav-center">\r
        <a class="page-scroll" href="#features">{{ 'LANDING.NAV.FEATURES' | translate }}</a>\r
        <a class="page-scroll" href="#how-it-works">{{ 'LANDING.NAV.HOW_IT_WORKS' | translate }}</a>\r
        <a class="page-scroll" href="#roles">{{ 'LANDING.NAV.ROLES' | translate }}</a>\r
        <a routerLink="/about">{{ 'LANDING.NAV.ABOUT' | translate }}</a>\r
        <a class="page-scroll" href="#download">{{ 'LANDING.NAV.DOWNLOAD' | translate }}</a>\r
      </div>\r
      <div class="nav-actions">\r
        <a routerLink="/request-demo" class="btn-nav btn-demo-nav">{{ 'LANDING.NAV.REQUEST_DEMO' | translate }}</a>\r
        <a *ngIf="!isLoggedIn" routerLink="/login" class="btn-nav btn-login-nav">{{ 'LANDING.NAV.SIGN_IN' | translate }}</a>\r
        <a *ngIf="isLoggedIn" routerLink="/dashboard" class="btn-nav btn-login-nav">{{ 'LANDING.NAV.GO_TO_DASHBOARD' | translate }}</a>\r
      </div>\r
      <!-- Language Selector -->\r
      <div class="language-selector">\r
        <button class="language-btn" (click)="toggleLanguageDropdown()">\r
          <span class="lang-flag">{{ getCurrentLanguageFlag() }}</span>\r
          <span class="lang-code">{{ currentLang | uppercase }}</span>\r
          <i class="bi bi-chevron-down"></i>\r
        </button>\r
        <div class="language-dropdown" *ngIf="showLanguageDropdown">\r
          <button\r
            *ngFor="let lang of availableLanguages"\r
            class="language-option"\r
            [class.active]="lang.code === currentLang"\r
            (click)="selectLanguage(lang.code)">\r
            <span class="lang-name">{{ lang.nativeName }}</span>\r
          </button>\r
        </div>\r
      </div>\r
      <!-- Burger Menu Button -->\r
      <button class="burger-menu" (click)="toggleMobileMenu()" [class.active]="isMobileMenuOpen">\r
        <span class="burger-line"></span>\r
        <span class="burger-line"></span>\r
        <span class="burger-line"></span>\r
      </button>\r
    </div>\r
  </nav>\r
\r
  <!-- Mobile Menu Overlay -->\r
  <div class="mobile-menu-overlay" *ngIf="isMobileMenuOpen" (click)="closeMobileMenu()"></div>\r
  <div class="mobile-menu" [class.open]="isMobileMenuOpen">\r
    <div class="mobile-menu-links">\r
      <a class="page-scroll" href="#features" (click)="closeMobileMenu()">{{ 'LANDING.NAV.FEATURES' | translate }}</a>\r
      <a class="page-scroll" href="#how-it-works" (click)="closeMobileMenu()">{{ 'LANDING.NAV.HOW_IT_WORKS' | translate }}</a>\r
      <a class="page-scroll" href="#roles" (click)="closeMobileMenu()">{{ 'LANDING.NAV.ROLES' | translate }}</a>\r
      <a routerLink="/about" (click)="closeMobileMenu()">{{ 'LANDING.NAV.ABOUT' | translate }}</a>\r
      <a class="page-scroll" href="#download" (click)="closeMobileMenu()">{{ 'LANDING.NAV.DOWNLOAD' | translate }}</a>\r
    </div>\r
    <div class="mobile-menu-actions">\r
      <a routerLink="/request-demo" class="btn-nav btn-demo-nav" (click)="closeMobileMenu()">{{ 'LANDING.NAV.REQUEST_DEMO' | translate }}</a>\r
      <a *ngIf="!isLoggedIn" routerLink="/login" class="btn-nav btn-login-nav" (click)="closeMobileMenu()">{{ 'LANDING.NAV.SIGN_IN' | translate }}</a>\r
      <a *ngIf="isLoggedIn" routerLink="/dashboard" class="btn-nav btn-login-nav" (click)="closeMobileMenu()">{{ 'LANDING.NAV.GO_TO_DASHBOARD' | translate }}</a>\r
    </div>\r
    <div class="mobile-language-selector">\r
      <button\r
        *ngFor="let lang of availableLanguages"\r
        class="mobile-lang-option"\r
        [class.active]="lang.code === currentLang"\r
        (click)="selectLanguage(lang.code)">\r
        <span class="lang-name">{{ lang.nativeName }}</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Hero Section -->\r
  <section class="hero-section">\r
    <div class="hero-background">\r
      <div class="gradient-blob blob-1"></div>\r
      <div class="gradient-blob blob-2"></div>\r
      <div class="gradient-blob blob-3"></div>\r
    </div>\r
    <div class="hero-container">\r
      <div class="hero-content">\r
        <h1 class="hero-title">\r
          {{ 'LANDING.HERO.TITLE' | translate }} <span class="highlight">{{ 'LANDING.HERO.TITLE_HIGHLIGHT' | translate }}</span>\r
        </h1>\r
        <p class="hero-subtitle">\r
          {{ 'LANDING.HERO.SUBTITLE' | translate }}\r
        </p>\r
        <div class="hero-actions">\r
          <a routerLink="/request-demo" class="btn-hero btn-primary-hero">\r
            {{ 'LANDING.HERO.REQUEST_DEMO' | translate }}\r
            <i class="bi bi-play-circle"></i>\r
          </a>\r
          <a href="#features" class="btn-hero btn-secondary-hero">\r
            {{ 'LANDING.HERO.LEARN_MORE' | translate }}\r
          </a>\r
        </div>\r
        <div class="hero-stats">\r
          <div class="stat-item">\r
            <span class="stat-number">100+</span>\r
            <span class="stat-label">{{ 'LANDING.HERO.STAT_DAYCARES' | translate }}</span>\r
          </div>\r
          <div class="stat-divider"></div>\r
          <div class="stat-item">\r
            <span class="stat-number">5,000+</span>\r
            <span class="stat-label">{{ 'LANDING.HERO.STAT_CHILDREN' | translate }}</span>\r
          </div>\r
          <div class="stat-divider"></div>\r
          <div class="stat-item">\r
            <span class="stat-number">10,000+</span>\r
            <span class="stat-label">{{ 'LANDING.HERO.STAT_PARENTS' | translate }}</span>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="hero-image">\r
        <img src="/assets/mockup.png" alt="MiniMinds App Mockup" class="mockup-image">\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Features Section -->\r
  <section id="features" class="features-section">\r
    <div class="section-container">\r
      <div class="section-header">\r
        <span class="section-badge">{{ 'LANDING.FEATURES.BADGE' | translate }}</span>\r
        <h2 class="section-title">{{ 'LANDING.FEATURES.TITLE' | translate }}</h2>\r
        <p class="section-subtitle">{{ 'LANDING.FEATURES.SUBTITLE' | translate }}</p>\r
      </div>\r
      <div class="features-grid">\r
        <div class="feature-card">\r
          <div class="feature-icon icon-attendance">\r
            <i class="bi bi-qr-code-scan"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.QR_CHECKIN.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.QR_CHECKIN.DESC' | translate }}</p>\r
        </div>\r
        <div class="feature-card">\r
          <div class="feature-icon icon-activities">\r
            <i class="bi bi-journal-text"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.DAILY_ACTIVITIES.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.DAILY_ACTIVITIES.DESC' | translate }}</p>\r
        </div>\r
        <div class="feature-card">\r
          <div class="feature-icon icon-messaging">\r
            <i class="bi bi-chat-heart"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.MESSAGING.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.MESSAGING.DESC' | translate }}</p>\r
        </div>\r
        <div class="feature-card">\r
          <div class="feature-icon icon-gallery">\r
            <i class="bi bi-images"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.GALLERY.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.GALLERY.DESC' | translate }}</p>\r
        </div>\r
        <div class="feature-card">\r
          <div class="feature-icon icon-payments">\r
            <i class="bi bi-credit-card"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.PAYMENTS.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.PAYMENTS.DESC' | translate }}</p>\r
        </div>\r
        <div class="feature-card">\r
          <div class="feature-icon icon-notifications">\r
            <i class="bi bi-bell"></i>\r
          </div>\r
          <h3 class="feature-title">{{ 'LANDING.FEATURES.NOTIFICATIONS.TITLE' | translate }}</h3>\r
          <p class="feature-desc">{{ 'LANDING.FEATURES.NOTIFICATIONS.DESC' | translate }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- How It Works Section -->\r
  <section id="how-it-works" class="how-it-works-section">\r
    <div class="section-container">\r
      <div class="section-header">\r
        <span class="section-badge">{{ 'LANDING.HOW_IT_WORKS.BADGE' | translate }}</span>\r
        <h2 class="section-title">{{ 'LANDING.HOW_IT_WORKS.TITLE' | translate }}</h2>\r
      </div>\r
      <div class="steps-container">\r
        <div class="step-item">\r
          <div class="step-number">1</div>\r
          <div class="step-content">\r
            <h3>{{ 'LANDING.HOW_IT_WORKS.STEP1.TITLE' | translate }}</h3>\r
            <p>{{ 'LANDING.HOW_IT_WORKS.STEP1.DESC' | translate }}</p>\r
          </div>\r
        </div>\r
        <div class="step-connector"></div>\r
        <div class="step-item">\r
          <div class="step-number">2</div>\r
          <div class="step-content">\r
            <h3>{{ 'LANDING.HOW_IT_WORKS.STEP2.TITLE' | translate }}</h3>\r
            <p>{{ 'LANDING.HOW_IT_WORKS.STEP2.DESC' | translate }}</p>\r
          </div>\r
        </div>\r
        <div class="step-connector"></div>\r
        <div class="step-item">\r
          <div class="step-number">3</div>\r
          <div class="step-content">\r
            <h3>{{ 'LANDING.HOW_IT_WORKS.STEP3.TITLE' | translate }}</h3>\r
            <p>{{ 'LANDING.HOW_IT_WORKS.STEP3.DESC' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Roles Section -->\r
  <section id="roles" class="roles-section">\r
    <div class="section-container">\r
      <div class="section-header">\r
        <span class="section-badge">{{ 'LANDING.ROLES.BADGE' | translate }}</span>\r
        <h2 class="section-title">{{ 'LANDING.ROLES.TITLE' | translate }}</h2>\r
      </div>\r
      <div class="roles-grid">\r
        <div class="role-card role-admin">\r
          <div class="role-icon">\r
            <i class="bi bi-shield-check"></i>\r
          </div>\r
          <h3>{{ 'LANDING.ROLES.ADMIN.TITLE' | translate }}</h3>\r
          <ul class="role-features">\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.ADMIN.FEATURE1' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.ADMIN.FEATURE2' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.ADMIN.FEATURE3' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.ADMIN.FEATURE4' | translate }}</li>\r
          </ul>\r
        </div>\r
        <div class="role-card role-teacher">\r
          <div class="role-icon">\r
            <i class="bi bi-mortarboard"></i>\r
          </div>\r
          <h3>{{ 'LANDING.ROLES.TEACHER.TITLE' | translate }}</h3>\r
          <ul class="role-features">\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.TEACHER.FEATURE1' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.TEACHER.FEATURE2' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.TEACHER.FEATURE3' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.TEACHER.FEATURE4' | translate }}</li>\r
          </ul>\r
        </div>\r
        <div class="role-card role-parent">\r
          <div class="role-icon">\r
            <i class="bi bi-people-fill"></i>\r
          </div>\r
          <h3>{{ 'LANDING.ROLES.PARENT.TITLE' | translate }}</h3>\r
          <ul class="role-features">\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.PARENT.FEATURE1' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.PARENT.FEATURE2' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.PARENT.FEATURE3' | translate }}</li>\r
            <li><i class="bi bi-check2"></i> {{ 'LANDING.ROLES.PARENT.FEATURE4' | translate }}</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Download Section -->\r
  <section id="download" class="download-section">\r
    <div class="section-container">\r
      <div class="download-grid">\r
        <div class="download-content">\r
          <span class="section-badge">{{ 'LANDING.DOWNLOAD.BADGE' | translate }}</span>\r
          <h2 class="download-title">{{ 'LANDING.DOWNLOAD.TITLE' | translate }}</h2>\r
          <p class="download-subtitle">\r
            {{ 'LANDING.DOWNLOAD.SUBTITLE' | translate }}\r
          </p>\r
          <div class="download-features">\r
            <div class="download-feature">\r
              <i class="bi bi-check-circle-fill"></i>\r
              <span>{{ 'LANDING.DOWNLOAD.FEATURE1' | translate }}</span>\r
            </div>\r
            <div class="download-feature">\r
              <i class="bi bi-check-circle-fill"></i>\r
              <span>{{ 'LANDING.DOWNLOAD.FEATURE2' | translate }}</span>\r
            </div>\r
            <div class="download-feature">\r
              <i class="bi bi-check-circle-fill"></i>\r
              <span>{{ 'LANDING.DOWNLOAD.FEATURE3' | translate }}</span>\r
            </div>\r
            <div class="download-feature">\r
              <i class="bi bi-check-circle-fill"></i>\r
              <span>{{ 'LANDING.DOWNLOAD.FEATURE4' | translate }}</span>\r
            </div>\r
          </div>\r
          <div class="store-buttons">\r
            <a href="#" class="store-btn app-store">\r
              <i class="bi bi-apple"></i>\r
              <div class="store-text">\r
                <span class="store-label">{{ 'LANDING.DOWNLOAD.DOWNLOAD_ON' | translate }}</span>\r
                <span class="store-name">{{ 'LANDING.DOWNLOAD.APP_STORE' | translate }}</span>\r
              </div>\r
            </a>\r
            <a href="#" class="store-btn play-store">\r
              <i class="bi bi-google-play"></i>\r
              <div class="store-text">\r
                <span class="store-label">{{ 'LANDING.DOWNLOAD.GET_IT_ON' | translate }}</span>\r
                <span class="store-name">{{ 'LANDING.DOWNLOAD.PLAY_STORE' | translate }}</span>\r
              </div>\r
            </a>\r
          </div>\r
        </div>\r
        <div class="download-image">\r
          <div class="phone-frame">\r
            <img src="/assets/mockup.png" alt="MiniMinds Mobile App" class="app-screenshot">\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="cta-section">\r
    <div class="cta-container">\r
      <div class="cta-content">\r
        <h2>{{ 'LANDING.CTA.TITLE' | translate }}</h2>\r
        <p>{{ 'LANDING.CTA.SUBTITLE' | translate }}</p>\r
        <a *ngIf="!isLoggedIn" routerLink="/login" class="btn-cta">\r
          {{ 'LANDING.CTA.GET_STARTED' | translate }}\r
          <i class="bi bi-arrow-right"></i>\r
        </a>\r
        <a *ngIf="isLoggedIn" routerLink="/dashboard" class="btn-cta">\r
          {{ 'LANDING.NAV.GO_TO_DASHBOARD' | translate }}\r
          <i class="bi bi-arrow-right"></i>\r
        </a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Footer -->\r
  <footer class="landing-footer">\r
    <div class="footer-container">\r
      <div class="footer-brand">\r
        <img src="/assets/images/icon.png" alt="MiniMinds Logo" class="footer-logo">\r
        <span class="footer-brand-name">MiniMinds</span>\r
      </div>\r
      <div class="footer-links">\r
        <a routerLink="/privacy-policy">{{ 'LANDING.FOOTER.PRIVACY_POLICY' | translate }}</a>\r
        <a routerLink="/terms-of-service">{{ 'LANDING.FOOTER.TERMS_OF_SERVICE' | translate }}</a>\r
      </div>\r
      <div class="footer-copyright">\r
        &copy; {{ currentYear }} {{ 'LANDING.FOOTER.COPYRIGHT' | translate }}\r
      </div>\r
    </div>\r
  </footer>\r
</div>\r
`, styles: ['/* src/app/features/landing/landing.scss */\n.landing-page {\n  font-family:\n    "Inter",\n    "Poppins",\n    sans-serif;\n  overflow-x: hidden;\n  background: #ffffff;\n}\n.nav-center {\n  display: flex;\n  gap: 24px;\n}\n.nav-center a {\n  font-size: 16px;\n  color: #202C4B;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.nav-center a:hover {\n  color: #7dd3c0;\n}\n@media (max-width: 768px) {\n  .nav-center {\n    display: none;\n  }\n}\n.landing-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 16px 0;\n}\n.landing-nav .nav-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.landing-nav .logo {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.landing-nav .logo .logo-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.landing-nav .logo .logo-text {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202C4B;\n  font-family: "Poppins", sans-serif;\n}\n.landing-nav .nav-actions {\n  display: flex;\n  gap: 12px;\n}\n@media (max-width: 768px) {\n  .landing-nav .nav-actions {\n    display: none;\n  }\n}\n.landing-nav .nav-actions .btn-nav {\n  padding: 10px 24px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.landing-nav .nav-actions .btn-login-nav {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.landing-nav .nav-actions .btn-login-nav:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(125, 185, 255, 0.4);\n}\n.landing-nav .nav-actions .btn-demo-nav {\n  background: transparent;\n  color: #202C4B;\n  border: 2px solid #7dd3c0;\n}\n.landing-nav .nav-actions .btn-demo-nav:hover {\n  background: rgba(125, 211, 192, 0.1);\n  transform: translateY(-2px);\n}\n.burger-menu {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 40px;\n  height: 40px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 8px;\n  transition: background 0.2s ease;\n  z-index: 1002;\n}\n.burger-menu:hover {\n  background: rgba(125, 211, 192, 0.1);\n}\n.burger-menu .burger-line {\n  display: block;\n  width: 24px;\n  height: 2.5px;\n  background: #202C4B;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n  transform-origin: center;\n}\n.burger-menu.active .burger-line:nth-child(1) {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.burger-menu.active .burger-line:nth-child(2) {\n  opacity: 0;\n}\n.burger-menu.active .burger-line:nth-child(3) {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n@media (max-width: 768px) {\n  .burger-menu {\n    display: flex;\n  }\n}\n.mobile-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 999;\n  animation: fadeIn 0.3s ease;\n}\n.mobile-menu {\n  position: fixed;\n  top: 0;\n  right: -100%;\n  width: 280px;\n  height: 100vh;\n  background: white;\n  z-index: 1001;\n  padding: 80px 24px 32px;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);\n  transition: right 0.3s ease;\n  overflow-y: auto;\n}\n.mobile-menu.open {\n  right: 0;\n}\n.mobile-menu .mobile-menu-links {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #E9EDF4;\n}\n.mobile-menu .mobile-menu-links a {\n  font-size: 16px;\n  color: #202C4B;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 12px 16px;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n}\n.mobile-menu .mobile-menu-links a:hover {\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n}\n.mobile-menu .mobile-menu-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #E9EDF4;\n}\n.mobile-menu .mobile-menu-actions .btn-nav {\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.mobile-menu .mobile-menu-actions .btn-demo-nav {\n  background: transparent;\n  color: #202C4B;\n  border: 2px solid #7dd3c0;\n}\n.mobile-menu .mobile-menu-actions .btn-login-nav {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.mobile-menu .mobile-language-selector {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.mobile-menu .mobile-language-selector .mobile-lang-option {\n  padding: 8px 16px;\n  border: 1px solid #E9EDF4;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 14px;\n  color: #202C4B;\n  transition: all 0.2s ease;\n}\n.mobile-menu .mobile-language-selector .mobile-lang-option:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.mobile-menu .mobile-language-selector .mobile-lang-option.active {\n  background: rgba(125, 211, 192, 0.15);\n  border-color: #7dd3c0;\n  font-weight: 600;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.language-selector {\n  position: absolute;\n  right: 10px;\n}\n@media (max-width: 768px) {\n  .language-selector {\n    display: none;\n  }\n}\n.language-selector .language-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.language-selector .language-btn:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.language-selector .language-btn .lang-flag {\n  font-size: 18px;\n}\n.language-selector .language-btn .lang-code {\n  font-size: 13px;\n  font-weight: 600;\n  color: #202C4B;\n}\n.language-selector .language-btn i {\n  font-size: 12px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.language-selector .language-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  min-width: 140px;\n  z-index: 1001;\n  animation: dropdownFade 0.2s ease;\n}\n.language-selector .language-dropdown .language-option {\n  display: block;\n  width: 100%;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.language-selector .language-dropdown .language-option:hover {\n  background: rgba(125, 211, 192, 0.1);\n}\n.language-selector .language-dropdown .language-option.active {\n  background: rgba(125, 211, 192, 0.2);\n  font-weight: 600;\n}\n.language-selector .language-dropdown .language-option .lang-name {\n  font-size: 14px;\n  color: #202C4B;\n}\n@keyframes dropdownFade {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-section {\n  min-height: 100vh;\n  padding: 120px 24px 80px;\n  position: relative;\n  overflow: hidden;\n}\n.hero-section .hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 0;\n}\n.hero-section .hero-background .gradient-blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.5;\n}\n.hero-section .hero-background .blob-1 {\n  width: 600px;\n  height: 600px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #a8d8ff 100%);\n  top: -200px;\n  right: -100px;\n}\n.hero-section .hero-background .blob-2 {\n  width: 400px;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #a8f0e0 100%);\n  bottom: -100px;\n  left: -100px;\n}\n.hero-section .hero-background .blob-3 {\n  width: 300px;\n  height: 300px;\n  background:\n    linear-gradient(\n      135deg,\n      #f0b8ff 0%,\n      #ffd0ff 100%);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hero-section .hero-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 968px) {\n  .hero-section .hero-container {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.hero-section .hero-content .hero-title {\n  font-size: 56px;\n  font-weight: 800;\n  line-height: 1.1;\n  color: #202C4B;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n.hero-section .hero-content .hero-title .highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 768px) {\n  .hero-section .hero-content .hero-title {\n    font-size: 36px;\n  }\n}\n.hero-section .hero-content .hero-subtitle {\n  font-size: 18px;\n  color: #6A7287;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 500px;\n}\n@media (max-width: 968px) {\n  .hero-section .hero-content .hero-subtitle {\n    max-width: 100%;\n  }\n}\n.hero-section .hero-content .hero-actions {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 48px;\n}\n@media (max-width: 968px) {\n  .hero-section .hero-content .hero-actions {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section .hero-content .hero-actions {\n    flex-direction: column;\n  }\n}\n.hero-section .hero-content .hero-actions .btn-hero {\n  padding: 16px 32px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.hero-section .hero-content .hero-actions .btn-primary-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.hero-section .hero-content .hero-actions .btn-primary-hero:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(125, 185, 255, 0.4);\n}\n.hero-section .hero-content .hero-actions .btn-secondary-hero {\n  background: white;\n  color: #202C4B;\n  border: 2px solid #E9EDF4;\n}\n.hero-section .hero-content .hero-actions .btn-secondary-hero:hover {\n  border-color: #7dd3c0;\n  background: rgba(125, 211, 192, 0.05);\n}\n.hero-section .hero-content .hero-stats {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n}\n@media (max-width: 968px) {\n  .hero-section .hero-content .hero-stats {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section .hero-content .hero-stats {\n    gap: 16px;\n  }\n}\n.hero-section .hero-content .hero-stats .stat-item {\n  display: flex;\n  flex-direction: column;\n}\n.hero-section .hero-content .hero-stats .stat-item .stat-number {\n  font-size: 32px;\n  font-weight: 800;\n  color: #202C4B;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 480px) {\n  .hero-section .hero-content .hero-stats .stat-item .stat-number {\n    font-size: 24px;\n  }\n}\n.hero-section .hero-content .hero-stats .stat-item .stat-label {\n  font-size: 14px;\n  color: #6A7287;\n}\n.hero-section .hero-content .hero-stats .stat-divider {\n  width: 1px;\n  height: 40px;\n  background: #E9EDF4;\n}\n.hero-section .hero-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.hero-section .hero-image .mockup-image {\n  max-height: 550px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n}\n@media (max-width: 968px) {\n  .hero-section .hero-image .mockup-image {\n    max-width: 100%;\n  }\n}\n.hero-section .hero-image .phone-mockup {\n  width: 300px;\n  height: 600px;\n  background:\n    linear-gradient(\n      145deg,\n      #2d2d2d 0%,\n      #1a1a1a 100%);\n  border-radius: 40px;\n  padding: 12px;\n  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2);\n  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);\n}\n.hero-section .hero-image .phone-mockup .phone-screen {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n  border-radius: 32px;\n  padding: 24px;\n  overflow: hidden;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-header .mockup-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-header .mockup-greeting .mockup-text-sm {\n  width: 60px;\n  height: 12px;\n  background: #E9EDF4;\n  border-radius: 6px;\n  margin-bottom: 6px;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-header .mockup-greeting .mockup-text-lg {\n  width: 120px;\n  height: 16px;\n  background: #202C4B;\n  border-radius: 8px;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .mockup-card {\n  padding: 20px;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .mockup-card i {\n  font-size: 28px;\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .card-1 {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .card-2 {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .card-3 {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9f7d 0%,\n      #ff7d5a 100%);\n}\n.hero-section .hero-image .phone-mockup .phone-screen .mockup-cards .card-4 {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.section-header {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.section-header .section-badge {\n  display: inline-block;\n  padding: 8px 20px;\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.section-header .section-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .section-header .section-title {\n    font-size: 28px;\n  }\n}\n.section-header .section-subtitle {\n  font-size: 18px;\n  color: #6A7287;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.features-section {\n  padding: 100px 24px;\n  background: #f8fafc;\n}\n.features-section .features-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 30px;\n}\n@media (max-width: 968px) {\n  .features-section .features-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .features-section .features-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.features-section .feature-card {\n  background: white;\n  border-radius: 20px;\n  padding: 32px;\n  transition: all 0.3s ease;\n  border: 1px solid #E9EDF4;\n}\n.features-section .feature-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.features-section .feature-card .feature-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.features-section .feature-card .feature-icon i {\n  font-size: 28px;\n  color: white;\n}\n.features-section .feature-card .feature-icon.icon-attendance {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.features-section .feature-card .feature-icon.icon-activities {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.features-section .feature-card .feature-icon.icon-messaging {\n  background:\n    linear-gradient(\n      135deg,\n      #ff9f7d 0%,\n      #ff7d5a 100%);\n}\n.features-section .feature-card .feature-icon.icon-gallery {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.features-section .feature-card .feature-icon.icon-payments {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd07d 0%,\n      #ffb84d 100%);\n}\n.features-section .feature-card .feature-icon.icon-notifications {\n  background:\n    linear-gradient(\n      135deg,\n      #ff7da4 0%,\n      #ff5a8a 100%);\n}\n.features-section .feature-card .feature-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.features-section .feature-card .feature-desc {\n  font-size: 15px;\n  color: #6A7287;\n  line-height: 1.6;\n}\n.how-it-works-section {\n  padding: 100px 24px;\n}\n.how-it-works-section .steps-container {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .how-it-works-section .steps-container {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.how-it-works-section .step-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 280px;\n}\n.how-it-works-section .step-item .step-number {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n  font-size: 24px;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  font-family: "Poppins", sans-serif;\n}\n.how-it-works-section .step-item .step-content h3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 12px;\n  font-family: "Poppins", sans-serif;\n}\n.how-it-works-section .step-item .step-content p {\n  font-size: 15px;\n  color: #6A7287;\n  line-height: 1.6;\n}\n.how-it-works-section .step-connector {\n  width: 100px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  margin-top: 32px;\n}\n@media (max-width: 768px) {\n  .how-it-works-section .step-connector {\n    width: 2px;\n    height: 40px;\n    margin-top: 0;\n  }\n}\n.roles-section {\n  padding: 100px 24px;\n  background: #f8fafc;\n}\n.roles-section .roles-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 30px;\n}\n@media (max-width: 968px) {\n  .roles-section .roles-grid {\n    grid-template-columns: 1fr;\n    max-width: 400px;\n    margin: 0 auto;\n  }\n}\n.roles-section .role-card {\n  background: white;\n  border-radius: 24px;\n  padding: 40px 32px;\n  text-align: center;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.roles-section .role-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.roles-section .role-card .role-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n}\n.roles-section .role-card .role-icon i {\n  font-size: 36px;\n  color: white;\n}\n.roles-section .role-card h3 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 24px;\n  font-family: "Poppins", sans-serif;\n}\n.roles-section .role-card .role-features {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n.roles-section .role-card .role-features li {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 0;\n  font-size: 15px;\n  color: #6A7287;\n  border-bottom: 1px solid #f0f0f0;\n}\n.roles-section .role-card .role-features li:last-child {\n  border-bottom: none;\n}\n.roles-section .role-card .role-features li i {\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.roles-section .role-card.role-admin .role-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #5a9fef 100%);\n}\n.roles-section .role-card.role-admin:hover {\n  border-color: #7db9ff;\n}\n.roles-section .role-card.role-teacher .role-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bc0a3 100%);\n}\n.roles-section .role-card.role-teacher:hover {\n  border-color: #7dd3c0;\n}\n.roles-section .role-card.role-parent .role-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #b8a4ff 0%,\n      #9b7dff 100%);\n}\n.roles-section .role-card.role-parent:hover {\n  border-color: #b8a4ff;\n}\n.download-section {\n  padding: 100px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e8f4f8 100%);\n}\n.download-section .download-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .download-section .download-grid {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n.download-section .download-content .section-badge {\n  display: inline-block;\n  padding: 8px 20px;\n  background: rgba(125, 211, 192, 0.1);\n  color: #5bc0a3;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.download-section .download-content .download-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #202C4B;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .download-section .download-content .download-title {\n    font-size: 32px;\n  }\n}\n.download-section .download-content .download-subtitle {\n  font-size: 18px;\n  color: #6A7287;\n  line-height: 1.7;\n  margin-bottom: 32px;\n  max-width: 480px;\n}\n@media (max-width: 968px) {\n  .download-section .download-content .download-subtitle {\n    max-width: 100%;\n  }\n}\n.download-section .download-features {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n@media (max-width: 480px) {\n  .download-section .download-features {\n    grid-template-columns: 1fr;\n  }\n}\n.download-section .download-features .download-feature {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 15px;\n  color: #202C4B;\n}\n@media (max-width: 968px) {\n  .download-section .download-features .download-feature {\n    justify-content: center;\n  }\n}\n.download-section .download-features .download-feature i {\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.download-section .store-buttons {\n  display: flex;\n  gap: 16px;\n}\n@media (max-width: 968px) {\n  .download-section .store-buttons {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .download-section .store-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.download-section .store-buttons .store-btn {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 24px;\n  border-radius: 12px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  min-width: 180px;\n}\n.download-section .store-buttons .store-btn i {\n  font-size: 28px;\n}\n.download-section .store-buttons .store-btn .store-text {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.download-section .store-buttons .store-btn .store-text .store-label {\n  font-size: 11px;\n  opacity: 0.9;\n}\n.download-section .store-buttons .store-btn .store-text .store-name {\n  font-size: 16px;\n  font-weight: 700;\n}\n.download-section .store-buttons .store-btn.app-store {\n  background: #000000;\n  color: white;\n}\n.download-section .store-buttons .store-btn.app-store:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.download-section .store-buttons .store-btn.play-store {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  color: white;\n}\n.download-section .store-buttons .store-btn.play-store:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(125, 185, 255, 0.4);\n}\n.download-section .download-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 968px) {\n  .download-section .download-image {\n    order: -1;\n    margin-bottom: 20px;\n  }\n}\n.download-section .download-image .phone-frame {\n  position: relative;\n}\n.download-section .download-image .phone-frame .app-screenshot {\n  max-width: 100%;\n  max-height: 500px;\n  object-fit: contain;\n  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15));\n  border-radius: 24px;\n}\n@media (max-width: 968px) {\n  .download-section .download-image .phone-frame .app-screenshot {\n    max-height: 350px;\n  }\n}\n.cta-section {\n  padding: 100px 24px;\n}\n.cta-section .cta-container {\n  max-width: 900px;\n  margin: 0 auto;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border-radius: 32px;\n  padding: 60px 40px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.cta-section .cta-container::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n}\n.cta-section .cta-content {\n  position: relative;\n  z-index: 1;\n}\n.cta-section .cta-content h2 {\n  font-size: 36px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 16px;\n  font-family: "Poppins", sans-serif;\n}\n@media (max-width: 768px) {\n  .cta-section .cta-content h2 {\n    font-size: 28px;\n  }\n}\n.cta-section .cta-content p {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 32px;\n}\n.cta-section .cta-content .btn-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 36px;\n  background: white;\n  color: #202C4B;\n  border-radius: 14px;\n  font-weight: 700;\n  font-size: 16px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.cta-section .cta-content .btn-cta:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);\n}\n.landing-footer {\n  background: #202C4B;\n  padding: 40px 24px;\n}\n.landing-footer .footer-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n@media (max-width: 768px) {\n  .landing-footer .footer-container {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.landing-footer .footer-brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.landing-footer .footer-brand .footer-logo {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n}\n.landing-footer .footer-brand .footer-brand-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  font-family: "Poppins", sans-serif;\n}\n.landing-footer .footer-links {\n  display: flex;\n  gap: 24px;\n}\n.landing-footer .footer-links a {\n  color: rgba(255, 255, 255, 0.7);\n  text-decoration: none;\n  font-size: 14px;\n  transition: color 0.3s ease;\n}\n.landing-footer .footer-links a:hover {\n  color: white;\n}\n.landing-footer .footer-copyright {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=landing.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: LanguageService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/features/landing/landing.ts", lineNumber: 16 });
})();
export {
  Landing
};
//# sourceMappingURL=chunk-NDU5KYTS.js.map
