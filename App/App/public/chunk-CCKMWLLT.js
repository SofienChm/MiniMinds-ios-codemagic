import {
  MessagesService
} from "./chunk-5GNI2KYS.js";
import {
  PrefixService
} from "./chunk-IEUTH76P.js";
import {
  SignalRService
} from "./chunk-723J4PWM.js";
import {
  NotificationService,
  PushNotificationService
} from "./chunk-PPPAYIKG.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  FeatureCodes
} from "./chunk-MQPIBHSQ.js";
import {
  TenantFeatureService
} from "./chunk-WNVYLB4C.js";
import {
  LanguageService
} from "./chunk-LJABGPK5.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import "./chunk-7KUBODN6.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Pipe,
  Subject,
  filter,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/shared/components/language-selector/language-selector.ts
function LanguageSelector_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function LanguageSelector_div_5_div_1_Template_div_click_0_listener() {
      const lang_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeLanguage(lang_r2));
    });
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(lang_r2))("src", ctx_r2.getFlag(lang_r2), \u0275\u0275sanitizeUrl);
  }
}
function LanguageSelector_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, LanguageSelector_div_5_div_1_Template, 2, 3, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.availableLanguages);
  }
}
var LanguageSelector = class _LanguageSelector {
  languageService = inject(LanguageService);
  elementRef = inject(ElementRef);
  availableLanguages = ["en", "fr", "it", "ar"];
  showMenu = signal(false, ...ngDevMode ? [{ debugName: "showMenu" }] : []);
  toggleMenu() {
    this.showMenu.update((v) => !v);
  }
  handleClickOutside(event) {
    if (this.showMenu() && !this.elementRef.nativeElement.contains(event.target)) {
      this.showMenu.set(false);
    }
  }
  changeLanguage(lang) {
    this.languageService.use(lang);
    this.showMenu.set(false);
  }
  getFlag(lang) {
    const map = {
      en: "/assets/images/us.png",
      fr: "/assets/images/fr.png",
      it: "/assets/images/it.png",
      ar: "/assets/images/tn.png"
    };
    return map[lang] ?? "/assets/images/us.png";
  }
  get currentLanguage() {
    return this.languageService.currentLanguage();
  }
  static \u0275fac = function LanguageSelector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSelector)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSelector, selectors: [["app-language-selector"]], hostBindings: function LanguageSelector_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function LanguageSelector_click_HostBindingHandler($event) {
        return ctx.handleClickOutside($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 6, vars: 4, consts: [[1, "position-relative"], [1, "btn", "btn-header", "btn-outline-light", "bg-white", "btn-icon", "position-relative", "me-1", 3, "click"], ["loading", "lazy", 1, "w-100", "h-100", "object-fit-cover", "rounded", 3, "src", "alt"], [1, "visually-hidden"], ["class", "position-absolute end-0 mt-2 bg-white border rounded shadow-lg", "style", "overflow-y: auto; z-index: 1000;", 4, "ngIf"], [1, "position-absolute", "end-0", "mt-2", "bg-white", "border", "rounded", "shadow-lg", 2, "overflow-y", "auto", "z-index", "1000"], ["class", "p-2 border-bottom d-flex align-items-center gap-2 cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-2", "border-bottom", "d-flex", "align-items-center", "gap-2", "cursor-pointer", 3, "click"], ["loading", "lazy", 1, "flag-item", "w-6", "h-6", "object-fit-cover", "rounded", 3, "src", "alt"]], template: function LanguageSelector_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275listener("click", function LanguageSelector_Template_a_click_1_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, LanguageSelector_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.getFlag(ctx.currentLanguage), \u0275\u0275sanitizeUrl)("alt", ctx.currentLanguage);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentLanguage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMenu());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.btn-header[_ngcontent-%COMP%] {\n  width: 2.313rem;\n  height: 2.313rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border-radius: 0.5rem;\n  border: 1px solid #E9EDF4 !important;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.btn-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.flag-item[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=language-selector.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelector, [{
    type: Component,
    args: [{ selector: "app-language-selector", standalone: true, imports: [CommonModule], template: '<div class="position-relative">\r\n    <a class="btn btn-header btn-outline-light bg-white btn-icon position-relative me-1" (click)="toggleMenu()">\r\n        <img loading="lazy" [src]="getFlag(currentLanguage)" [alt]="currentLanguage"\r\n            class="w-100 h-100 object-fit-cover rounded" />\r\n        <span class="visually-hidden">{{ currentLanguage }}</span>\r\n    </a>\r\n\r\n    <div *ngIf="showMenu()" class="position-absolute end-0 mt-2 bg-white border rounded shadow-lg"\r\n        style="overflow-y: auto; z-index: 1000;">\r\n\r\n        <div *ngFor="let lang of availableLanguages"\r\n            class="p-2 border-bottom d-flex align-items-center gap-2 cursor-pointer" (click)="changeLanguage(lang)">\r\n            <img loading="lazy" [src]="getFlag(lang)" alt="{{lang}}" class=" flag-item w-6 h-6 object-fit-cover rounded" />\r\n        </div>\r\n    </div>\r\n\r\n</div>', styles: ["/* src/app/shared/components/language-selector/language-selector.scss */\n.btn-header {\n  width: 2.313rem;\n  height: 2.313rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border-radius: 0.5rem;\n  border: 1px solid #E9EDF4 !important;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.dropdown-menu {\n  display: none;\n}\n.dropdown-menu.show {\n  display: block;\n}\n.btn-header img {\n  width: 24px !important;\n  height: 24px !important;\n}\n.flag-item {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=language-selector.css.map */\n"] }]
  }], null, { handleClickOutside: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSelector, { className: "LanguageSelector", filePath: "src/app/shared/components/language-selector/language-selector.ts", lineNumber: 12 });
})();

// src/app/shared/layouts/header/header.ts
var _c0 = () => ({ exact: true });
function Header_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function Header_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllDropdowns());
    });
    \u0275\u0275elementEnd();
  }
}
function Header_header_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "a", 36);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 38);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(8, "i", 39);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 40);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(13, "i", 41);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 42);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(18, "i", 43);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 44);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(23, "i", 45);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "a", 46);
    \u0275\u0275listener("click", function Header_header_1_div_10_Template_a_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeQuickLinks());
    });
    \u0275\u0275element(28, "i", 47);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "DASHBOARD.ADD_CHILD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "DASHBOARD.CHILDREN_LIST"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 10, "DASHBOARD.ADD_LEAVE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "DASHBOARD.DAILY_REPORTS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 14, "DASHBOARD.PAYMENTS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 16, "DASHBOARD.RECLAMATIONS"));
  }
}
function Header_header_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function Header_header_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unreadCount, " ");
  }
}
function Header_header_1_div_18_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function Header_header_1_div_18_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "HEADER.MARK_ALL_READ"), " ");
  }
}
function Header_header_1_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementStart(2, "p", 61);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HEADER.NO_NOTIFICATIONS"));
  }
}
function Header_header_1_div_18_div_8_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "HEADER.VIEW_DETAILS"), " ");
  }
}
function Header_header_1_div_18_div_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 73);
  }
}
function Header_header_1_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function Header_header_1_div_18_div_8_Template_div_click_0_listener() {
      const notification_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notification_r7));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65)(5, "strong", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 67);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, Header_header_1_div_18_div_8_small_11_Template, 4, 3, "small", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, Header_header_1_div_18_div_8_div_12_Template, 1, 0, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("clickable", notification_r7.redirectUrl)("read", notification_r7.isRead)("unread", !notification_r7.isRead);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getNotificationIconClass(notification_r7.type));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getNotificationIcon(notification_r7.type));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notification_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(notification_r7.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r7.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r7.redirectUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notification_r7.isRead);
  }
}
function Header_header_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Header_header_1_div_18_button_5_Template, 4, 3, "button", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Header_header_1_div_18_div_6_Template, 5, 3, "div", 54);
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275template(8, Header_header_1_div_18_div_8_Template, 13, 14, "div", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "HEADER.NOTIFICATIONS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.notifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.notifications.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.notifications);
  }
}
function Header_header_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getInitials());
  }
}
function Header_header_1_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275element(2, "img", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const profilePic_r8 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", profilePic_r8, \u0275\u0275sanitizeUrl);
  }
}
function Header_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 5)(1, "div", 6)(2, "div", 7)(3, "button", 8);
    \u0275\u0275listener("click", function Header_header_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275element(4, "i", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275element(6, "app-language-selector");
    \u0275\u0275elementStart(7, "div", 11)(8, "button", 12);
    \u0275\u0275listener("click", function Header_header_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleQuickLinks());
    });
    \u0275\u0275element(9, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, Header_header_1_div_10_Template, 32, 18, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "a", 16);
    \u0275\u0275element(13, "i", 17);
    \u0275\u0275template(14, Header_header_1_span_14_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 19);
    \u0275\u0275listener("click", function Header_header_1_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275element(16, "i", 20);
    \u0275\u0275template(17, Header_header_1_span_17_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, Header_header_1_div_18_Template, 9, 6, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275template(20, Header_header_1_ng_template_20_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(22, "div", 23)(23, "button", 24);
    \u0275\u0275listener("click", function Header_header_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserMenu());
    });
    \u0275\u0275template(24, Header_header_1_ng_container_24_Template, 3, 1, "ng-container", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul", 26)(26, "li")(27, "a", 27);
    \u0275\u0275listener("click", function Header_header_1_Template_a_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275element(28, "i", 28);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "li")(32, "a", 29);
    \u0275\u0275listener("click", function Header_header_1_Template_a_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserMenu());
    });
    \u0275\u0275element(33, "i", 30);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275element(37, "hr", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li")(39, "a", 32);
    \u0275\u0275listener("click", function Header_header_1_Template_a_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275element(40, "i", 33);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const initials_r9 = \u0275\u0275reference(21);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.showQuickLinks);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.messagesUnreadCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNotifications);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.profilePicture)("ngIfElse", initials_r9);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r1.showUserMenu);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 11, "HEADER.PROFILE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 13, "HEADER.SETTINGS"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 15, "HEADER.LOGOUT"));
  }
}
function Header_header_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.unreadCount);
  }
}
function Header_header_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 77)(1, "nav", 78)(2, "a", 79);
    \u0275\u0275element(3, "i", 80);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 81);
    \u0275\u0275element(8, "i", 82);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 83);
    \u0275\u0275element(13, "i", 84);
    \u0275\u0275template(14, Header_header_2_span_14_Template, 2, 1, "span", 85);
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 86);
    \u0275\u0275listener("click", function Header_header_2_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToParentProfile());
    });
    \u0275\u0275element(19, "i", 87);
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(14, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "HEADER.DASHBOARD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "HEADER.ACTIVITY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "HEADER.NOTIFICATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "HEADER.MENU"));
  }
}
var Header = class _Header {
  authService;
  notificationService;
  pushNotificationService;
  messagesService;
  pageTitleService;
  router;
  mobileMenuToggle = new EventEmitter();
  currentUser = null;
  unreadCount = 0;
  messagesUnreadCount = 0;
  showNotifications = false;
  showUserMenu = false;
  showQuickLinks = false;
  notifications = [];
  isAdmin = false;
  isParent = false;
  pageTitle = "";
  destroy$ = new Subject();
  constructor(authService, notificationService, pushNotificationService, messagesService, pageTitleService, router) {
    this.authService = authService;
    this.notificationService = notificationService;
    this.pushNotificationService = pushNotificationService;
    this.messagesService = messagesService;
    this.pageTitleService = pageTitleService;
    this.router = router;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.isAdmin = this.authService.isAdmin();
    this.isParent = this.authService.isParent();
    if (this.currentUser) {
      this.loadNotifications();
      this.loadMessagesUnreadCount();
      const token = localStorage.getItem("token");
      let userId = localStorage.getItem("userId");
      if (!userId && token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] || payload.nameid || payload.sub;
          if (userId) {
            localStorage.setItem("userId", userId);
          }
        } catch {
        }
      }
      if (token && userId) {
        this.notificationService.startConnection(userId, token);
      }
      if (this.isParent && this.pushNotificationService.getPermission() === "default") {
        this.pushNotificationService.requestPermission();
      }
    }
    this.notificationService.unreadCount$.pipe(takeUntil(this.destroy$)).subscribe((count) => {
      this.unreadCount = count;
    });
    this.notificationService.notificationReceived$.pipe(takeUntil(this.destroy$)).subscribe((notification) => {
      if (notification) {
        this.notifications.unshift(notification);
      }
    });
    this.pageTitleService.title$.subscribe((title) => {
      this.pageTitle = title;
    });
    this.notificationService.messageUnreadCount$.pipe(takeUntil(this.destroy$)).subscribe((count) => {
      this.messagesUnreadCount = count;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.notificationService.stopConnection();
  }
  loadNotifications() {
    if (this.currentUser) {
      this.notificationService.getAllNotifications().subscribe({
        next: (notifications) => {
          this.notifications = notifications;
        },
        error: () => {
          this.notifications = [];
        }
      });
    }
  }
  loadMessagesUnreadCount() {
    this.messagesService.getUnreadCount().subscribe({
      next: (count) => {
        this.messagesUnreadCount = count;
      },
      error: () => {
        this.messagesUnreadCount = 0;
      }
    });
  }
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    if (this.showNotifications) {
      this.loadNotifications();
    }
  }
  onNotificationClick(notification) {
    this.notificationService.handleNotificationClick(notification);
    const index = this.notifications.findIndex((n) => n.id === notification.id);
    if (index !== -1) {
      this.notifications[index].isRead = true;
    }
    this.showNotifications = false;
  }
  markAsRead(id) {
    this.notificationService.markAsRead(id).subscribe(() => {
      this.loadNotifications();
    });
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe(() => {
      this.loadNotifications();
    });
  }
  logout() {
    this.authService.logout();
  }
  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  closeUserMenu() {
    this.showUserMenu = false;
  }
  getInitials() {
    if (!this.currentUser)
      return "";
    return `${this.currentUser.firstName.charAt(0)}${this.currentUser.lastName.charAt(0)}`.toUpperCase();
  }
  toggleMobileMenu() {
    this.mobileMenuToggle.emit();
  }
  getNotificationIcon(type) {
    const icons = {
      "info": "bi bi-info-circle-fill",
      "success": "bi bi-check-circle-fill",
      "warning": "bi bi-exclamation-triangle-fill",
      "error": "bi bi-x-circle-fill",
      "message": "bi bi-chat-dots-fill",
      "event": "bi bi-calendar-event-fill",
      "system": "bi bi-gear-fill",
      "eventregistration": "bi bi-patch-question",
      "payment": "bi bi-currency-dollar",
      "fee": "bi bi-currency-dollar"
    };
    return icons[type.toLowerCase()] || "bi bi-bell-fill";
  }
  getNotificationIconClass(type) {
    const classes = {
      "info": "icon-info",
      "success": "icon-success",
      "warning": "icon-warning",
      "error": "icon-error",
      "payment": "icon-error",
      "message": "icon-message",
      "event": "icon-event",
      "system": "icon-system"
    };
    return classes[type.toLowerCase()] || "icon-default";
  }
  getTimeAgo(dateString) {
    let dateStr = dateString;
    if (!dateString.endsWith("Z") && !dateString.includes("+") && dateString.includes("T")) {
      dateStr = dateString + "Z";
    }
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const seconds = Math.floor(diffMs / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 0)
      return "Just now";
    if (seconds < 60)
      return `${seconds}s ago`;
    if (minutes < 60)
      return `${minutes}min ago`;
    if (hours < 24)
      return `${hours}h ago`;
    if (days < 7)
      return `${days}d ago`;
    return date.toLocaleDateString();
  }
  toggleQuickLinks() {
    this.showQuickLinks = !this.showQuickLinks;
  }
  closeQuickLinks() {
    this.showQuickLinks = false;
  }
  closeAllDropdowns() {
    this.showQuickLinks = false;
    this.showNotifications = false;
    this.showUserMenu = false;
  }
  handleClickOutside(event) {
    const target = event.target;
    if (this.showQuickLinks && !target.closest(".quick-links-dropdown") && !target.closest(".position-relative-mobile")) {
      this.showQuickLinks = false;
    }
    if (this.showNotifications && !target.closest(".notification-dropdown") && !target.closest(".btn-header") && !target.closest(".nav-link")) {
      this.showNotifications = false;
    }
    if (this.showUserMenu && !target.closest(".dropdown")) {
      this.showUserMenu = false;
    }
  }
  goToParentProfile() {
    this.router.navigate(["/profile-menu"]);
  }
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(PushNotificationService), \u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function Header_click_HostBindingHandler($event) {
        return ctx.handleClickOutside($event);
      }, \u0275\u0275resolveDocument);
    }
  }, outputs: { mobileMenuToggle: "mobileMenuToggle" }, decls: 3, vars: 3, consts: [["initials", ""], ["class", "header-backdrop", 3, "click", 4, "ngIf"], ["class", "bg-white py-2 px-4 main-header", 4, "ngIf"], ["class", "parent-menu", 4, "ngIf"], [1, "header-backdrop", 3, "click"], [1, "bg-white", "py-2", "px-4", "main-header"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn", "btn-link", "d-lg-none", "p-0", 3, "click"], [1, "bi", "bi-list", "fs-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "position-relative", "position-relative-mobile"], [1, "btn", "btn-header", "btn-outline-light", "bg-white", "btn-icon", "position-relative", "me-1", 3, "click"], [1, "bi", "bi-plus"], ["class", "quick-links-dropdown", 4, "ngIf"], [1, "position-relative", "d-flex", "align-items-center", "gap-2", 2, "overflow", "visible"], ["routerLink", "/messages", 1, "btn", "btn-header", "btn-outline-light", "bg-white", "btn-icon", "position-relative", "me-1"], [1, "bi", "bi-chat-dots"], ["class", "notification-status-dot", 4, "ngIf"], [1, "btn", "btn-header", "btn-outline-light", "bg-white", "btn-icon", "position-relative-mobile", "me-1", 3, "click"], [1, "bi", "bi-bell"], ["class", "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger", 4, "ngIf"], ["class", "notification-dropdown", 4, "ngIf"], [1, "dropdown", "position-relative", "profile-header"], ["type", "button", 1, "btn", "btn-link", "text-decoration-none", "text-dark", "dropdown-toggle", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "right", "0", "top", "100%"], ["routerLink", "/profile", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-person", "me-2"], ["routerLink", "/settings", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-gear", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"], [1, "quick-links-dropdown"], [1, "dropdown-grid"], ["routerLink", "/children/add", 1, "grid-item", 3, "click"], [1, "bi", "bi-person-plus-fill", 2, "color", "#7dd3c0"], ["routerLink", "/children", 1, "grid-item", 3, "click"], [1, "bi", "bi-people-fill", 2, "color", "#7dd3c0"], ["routerLink", "/leaves/add", 1, "grid-item", 3, "click"], [1, "bi", "bi-calendar-plus", 2, "color", "#7dd3c0"], ["routerLink", "/daily-activities", 1, "grid-item", 3, "click"], [1, "bi", "bi-clipboard-data", 2, "color", "#7dd3c0"], ["routerLink", "/fees", 1, "grid-item", 3, "click"], [1, "bi", "bi-credit-card", 2, "color", "#7dd3c0"], ["routerLink", "/reclamations", 1, "grid-item", 3, "click"], [1, "bi", "bi-exclamation-triangle", 2, "color", "#7dd3c0"], [1, "notification-status-dot"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], [1, "notification-dropdown"], [1, "notification-header"], [1, "mb-0", "fw-bold"], ["class", "btn-mark-all", 3, "click", 4, "ngIf"], ["class", "notification-empty", 4, "ngIf"], [1, "notification-list"], ["class", "notification-item", 3, "clickable", "read", "unread", "click", 4, "ngFor", "ngForOf"], [1, "btn-mark-all", 3, "click"], [1, "bi", "bi-check-all", "me-1"], [1, "notification-empty"], [1, "bi", "bi-bell-slash", "fs-1", "text-muted", "mb-2"], [1, "text-muted", "mb-0"], [1, "notification-item", 3, "click"], [1, "notificati", 3, "ngClass"], [1, "notification-content"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-1"], [1, "notification-title"], [1, "notification-time"], [1, "notification-message", "mb-0"], ["class", "notification-action", 4, "ngIf"], ["class", "unread-dot", 4, "ngIf"], [1, "notification-action"], [1, "bi", "bi-arrow-right-circle", "me-1"], [1, "unread-dot"], [1, "text-white", "d-flex", "align-items-center", "justify-content-center", "profilePicture"], [1, "image-profile-header", "overflow-hidden"], ["loading", "lazy", "alt", "Profile", 1, "w-100", "h-100", "object-fit-cover", 3, "src"], [1, "parent-menu"], [1, "parent-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "bi", "bi-house-fill"], ["routerLink", "/activities", "routerLinkActive", "active", 1, "nav-link"], [1, "bi", "bi-file-text-fill"], ["routerLink", "/notifications", "routerLinkActive", "active", 1, "nav-link"], [1, "bi", "bi-bell-fill"], ["class", "nav-badge", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-list"], [1, "nav-badge"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Header_div_0_Template, 1, 0, "div", 1)(1, Header_header_1_Template, 43, 17, "header", 2)(2, Header_header_2_Template, 23, 15, "header", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showQuickLinks || ctx.showNotifications || ctx.showUserMenu);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isParent);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, LanguageSelector, TranslateModule, TranslatePipe], styles: ["\n\n.header-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background: transparent;\n}\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%] {\n    position: relative !important;\n  }\n}\n@media (min-width: 767px) {\n  .position-relative-mobile[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n@media (max-width: 767px) {\n  .position-relative-mobile[_ngcontent-%COMP%] {\n    position: inherit !important;\n  }\n}\n.quick-links-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  width: 330px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .quick-links-dropdown[_ngcontent-%COMP%] {\n    width: 90vw;\n    max-width: 320px;\n    right: -10px;\n  }\n}\n@media (max-width: 480px) {\n  .quick-links-dropdown[_ngcontent-%COMP%] {\n    width: calc(100vw - 20px);\n    left: 50%;\n    top: 70px;\n    transform: translate(-50%, 0);\n    padding: 0.75rem;\n  }\n}\n.dropdown-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 480px) {\n  .dropdown-grid[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n}\n.grid-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 0.5rem;\n  color: #495057;\n  text-decoration: none;\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border-radius: 8px;\n  text-align: center;\n  background: #f1f6ff;\n}\n@media (max-width: 480px) {\n  .grid-item[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.375rem;\n    font-size: 0.688rem;\n  }\n}\n.grid-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #0E567D;\n  transform: translateY(-2px);\n}\n.grid-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 480px) {\n  .grid-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 0.375rem;\n  }\n}\n.grid-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1.2;\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  width: 420px;\n  max-height: 500px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n@media (max-width: 768px) {\n  .notification-dropdown[_ngcontent-%COMP%] {\n    width: 90vw;\n    max-width: 380px;\n    right: -10px;\n  }\n}\n@media (max-width: 380px) {\n  .notification-dropdown[_ngcontent-%COMP%] {\n    width: calc(100vw - 20px);\n    left: 15%;\n    top: 70px;\n    transform: translate(-55%, 0);\n    max-height: 70vh;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  margin: 1rem;\n  background: #cdeaf0;\n  border-radius: 12px;\n}\n@media (max-width: 480px) {\n  .notification-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin: 0.75rem;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .notification-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.notification-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.btn-mark-all[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: #111827;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.813rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n@media (max-width: 480px) {\n  .btn-mark-all[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n.btn-mark-all[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.notification-empty[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.notification-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.notification-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f3f5;\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n  transition: all 0.2s;\n}\n@media (max-width: 480px) {\n  .notification-item[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    gap: 0.625rem;\n  }\n}\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-item.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.notification-item.clickable[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #f8f9ff 0%,\n      #fff 100%);\n  transform: translateX(4px);\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4ff 0%,\n      #fff 100%);\n  border-left: 3px solid #667eea;\n}\n.notification-item.read[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.notificati[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  align-items: center !important;\n  justify-content: center !important;\n  display: flex !important;\n  height: 2.75rem !important;\n  width: 2.75rem !important;\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .notificati[_ngcontent-%COMP%] {\n    height: 2.25rem !important;\n    width: 2.25rem !important;\n    font-size: 0.875rem;\n  }\n}\n.notificati.icon-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.notificati.icon-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.notificati.icon-warning[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #495057;\n}\n.notificati.icon-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: white;\n}\n.notificati.icon-message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.notificati.icon-system[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8edea 0%,\n      #fed6e3 100%);\n  color: #495057;\n}\n.notificati.icon-default[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #cffafe 100%);\n  color: #495057;\n}\n.notificati.icon-event[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #495057;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #212529;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n@media (max-width: 480px) {\n  .notification-title[_ngcontent-%COMP%] {\n    font-size: 0.813rem;\n  }\n}\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 0.813rem;\n  color: #6c757d;\n  line-height: 1.4;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 480px) {\n  .notification-message[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 1.3;\n  }\n}\n.notification-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #adb5bd;\n  white-space: nowrap;\n}\n.notification-action[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n}\n.unread-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  width: 8px;\n  height: 8px;\n  background: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  margin-left: 0.5em;\n}\n.btn-header[_ngcontent-%COMP%] {\n  width: 2.313rem;\n  height: 2.313rem;\n  font-size: 0.95rem;\n  border: 1px solid #E9EDF4 !important;\n  color: #515B73 !important;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n}\n.btn-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0rem;\n  margin: -0.5rem;\n  font-size: 0.95rem;\n}\n.image-profile-header[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 4px;\n}\n.notification-status-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.1rem;\n  right: 0.1rem;\n  width: 10px;\n  height: 10px;\n  background-color: #dc3545;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.profilePicture[_ngcontent-%COMP%] {\n  width: 2.313rem;\n  height: 2.313rem;\n  font-size: 0.95rem;\n  border: 1px solid #E9EDF4 !important;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n  background-color: var(--primary-color);\n}\n.profile-header[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n.profile-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding-left: 0;\n}\n.parent-menu[_ngcontent-%COMP%] {\n  position: fixed !important;\n  bottom: 9px;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: box-shadow 0.3s;\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 85%;\n  margin: 0 auto;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(7px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 4px 10px;\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 15px;\n  border-radius: 30px;\n  text-decoration: none;\n  color: #1f2937;\n  font-size: 13px;\n  font-weight: 400;\n  position: relative;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.2s;\n}\n@media screen and (max-width: 400px) {\n  .parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 12px;\n  }\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  transition: color 0.2s, transform 0.2s;\n  line-height: 0;\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 10px;\n  background: #EF4444;\n  color: white;\n  min-width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.15);\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  color: #1DBAB4;\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  transform: scale(1.12);\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  animation: _ngcontent-%COMP%_bounce 0.3s;\n  background: #ebebeb;\n}\n.parent-menu[_ngcontent-%COMP%]   .parent-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.18);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 700;\n  font-size: 22px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 460px) {\n  .parent-menu[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n/*# sourceMappingURL=header.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule, RouterLink, RouterLinkActive, LanguageSelector, TranslateModule], template: `<div *ngIf="showQuickLinks || showNotifications || showUserMenu" class="header-backdrop" (click)="closeAllDropdowns()"></div>\r
<header class="bg-white py-2 px-4 main-header" *ngIf="!isParent">\r
  <div class="d-flex justify-content-between align-items-center">\r
    <div class="d-flex align-items-center gap-3">\r
      <button class="btn btn-link d-lg-none p-0" (click)="toggleMobileMenu()">\r
        <i class="bi bi-list fs-3"></i>\r
      </button>\r
    </div>\r
    \r
    <div class="d-flex align-items-center gap-2">\r
      <app-language-selector></app-language-selector>\r
\r
      <!-- Quick Links Dropdown -->\r
      <div class="position-relative position-relative-mobile">\r
        <button class="btn btn-header btn-outline-light bg-white btn-icon position-relative me-1" (click)="toggleQuickLinks()">\r
          <i class="bi bi-plus"></i>\r
        </button>\r
        \r
        <div *ngIf="showQuickLinks" class="quick-links-dropdown">\r
          <div class="dropdown-grid">\r
            <a routerLink="/children/add" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-person-plus-fill" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.ADD_CHILD' | translate }}</span>\r
            </a>\r
            <a routerLink="/children" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-people-fill" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.CHILDREN_LIST' | translate }}</span>\r
            </a>\r
            <a routerLink="/leaves/add" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-calendar-plus" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.ADD_LEAVE' | translate }}</span>\r
            </a>\r
            <a routerLink="/daily-activities" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-clipboard-data" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.DAILY_REPORTS' | translate }}</span>\r
            </a>\r
            <a routerLink="/fees" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-credit-card" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.PAYMENTS' | translate }}</span>\r
            </a>\r
            <a routerLink="/reclamations" class="grid-item" (click)="closeQuickLinks()">\r
              <i class="bi bi-exclamation-triangle" style="color: #7dd3c0;"></i>\r
              <span>{{ 'DASHBOARD.RECLAMATIONS' | translate }}</span>\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Notifications -->\r
      <div class="position-relative d-flex align-items-center gap-2" style="overflow: visible;">\r
        <!-- Messages Icon with unread dot -->\r
        <a routerLink="/messages" class="btn btn-header btn-outline-light bg-white btn-icon position-relative me-1">\r
          <i class="bi bi-chat-dots"></i>\r
          <span *ngIf="messagesUnreadCount > 0" class="notification-status-dot"></span>\r
        </a>\r
\r
        <a class="btn btn-header btn-outline-light bg-white btn-icon position-relative-mobile me-1" (click)="toggleNotifications()">\r
          <i class="bi bi-bell"></i>\r
          <span *ngIf="unreadCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">\r
            {{ unreadCount }}\r
          </span>\r
        </a>\r
        \r
        <!-- Notifications Dropdown -->\r
        <div *ngIf="showNotifications" class="notification-dropdown">\r
          <div class="notification-header">\r
            <h6 class="mb-0 fw-bold">{{ 'HEADER.NOTIFICATIONS' | translate }}</h6>\r
            <button *ngIf="notifications.length > 0" class="btn-mark-all" (click)="markAllAsRead()">\r
              <i class="bi bi-check-all me-1"></i>{{ 'HEADER.MARK_ALL_READ' | translate }}\r
            </button>\r
          </div>\r
          \r
          <div *ngIf="notifications.length === 0" class="notification-empty">\r
            <i class="bi bi-bell-slash fs-1 text-muted mb-2"></i>\r
            <p class="text-muted mb-0">{{ 'HEADER.NO_NOTIFICATIONS' | translate }}</p>\r
          </div>\r
          \r
          <div class="notification-list">\r
            <div *ngFor="let notification of notifications" \r
                 class="notification-item" \r
                 [class.clickable]="notification.redirectUrl"\r
                 [class.read]="notification.isRead"\r
                 [class.unread]="!notification.isRead"\r
                 (click)="onNotificationClick(notification)">\r
              <div class="notificati" [ngClass]="getNotificationIconClass(notification.type)">\r
                <i [class]="getNotificationIcon(notification.type)"></i>\r
              </div>\r
              <div class="notification-content">\r
                <div class="d-flex justify-content-between align-items-start mb-1">\r
                  <strong class="notification-title">{{ notification.title }}</strong>\r
                  <span class="notification-time">{{ getTimeAgo(notification.createdAt) }}</span>\r
                </div>\r
                <p class="notification-message mb-0">{{ notification.message }}</p>\r
                <small *ngIf="notification.redirectUrl" class="notification-action">\r
                  <i class="bi bi-arrow-right-circle me-1"></i>{{ 'HEADER.VIEW_DETAILS' | translate }}\r
                </small>\r
              </div>\r
              <div *ngIf="!notification.isRead" class="unread-dot"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <!-- User Profile -->\r
      <div class="d-flex align-items-center gap-2">\r
       \r
        <ng-template #initials>\r
          <div class="text-white d-flex align-items-center justify-content-center profilePicture">\r
            <strong>{{ getInitials() }}</strong>\r
          </div>\r
        </ng-template>\r
        \r
        <div class="dropdown position-relative profile-header">\r
          <button class="btn btn-link text-decoration-none text-dark dropdown-toggle" type="button" (click)="toggleUserMenu()">\r
            <ng-container *ngIf="currentUser?.profilePicture as profilePic; else initials">\r
              <div class="image-profile-header overflow-hidden">\r
                <img loading="lazy" [src]="profilePic" alt="Profile" class="w-100 h-100 object-fit-cover">\r
              </div>\r
            </ng-container>\r
            <!--  <span>{{ currentUser?.firstName }} {{ currentUser?.lastName }}</span>-->\r
          </button>\r
          <ul class="dropdown-menu dropdown-menu-end" [class.show]="showUserMenu" style="position: absolute; right: 0; top: 100%;">\r
            <li><a class="dropdown-item" routerLink="/profile" (click)="closeUserMenu()"><i class="bi bi-person me-2"></i>{{ 'HEADER.PROFILE' | translate }}</a></li>\r
            <li><a class="dropdown-item" routerLink="/settings" (click)="closeUserMenu()"><i class="bi bi-gear me-2"></i>{{ 'HEADER.SETTINGS' | translate }}</a></li>\r
            <li><hr class="dropdown-divider"></li>\r
            <li><a class="dropdown-item" (click)="logout()"><i class="bi bi-box-arrow-right me-2"></i>{{ 'HEADER.LOGOUT' | translate }}</a></li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</header>\r
\r
<header *ngIf="isParent" class="parent-menu">\r
  <nav class="parent-nav">\r
    <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">\r
      <i class="bi bi-house-fill"></i>\r
      <p>{{ 'HEADER.DASHBOARD' | translate }}</p>\r
    </a>\r
    <a routerLink="/activities" routerLinkActive="active" class="nav-link">\r
      <i class="bi bi-file-text-fill"></i>\r
      <p>{{ 'HEADER.ACTIVITY' | translate }}</p>\r
    </a>\r
    <a routerLink="/notifications" routerLinkActive="active" class="nav-link">\r
      <i class="bi bi-bell-fill"></i>\r
      <span class="nav-badge" *ngIf="unreadCount > 0">{{ unreadCount }}</span>\r
      <p>{{ 'HEADER.NOTIFICATION' | translate }}</p>\r
    </a>\r
    <a (click)="goToParentProfile()" routerLinkActive="active" class="nav-link" style="cursor: pointer;">\r
      <i class="bi bi-list"></i>\r
      <p>{{ 'HEADER.MENU' | translate }}</p>\r
    </a>\r
  </nav>\r
\r
</header>`, styles: ["/* src/app/shared/layouts/header/header.scss */\n.header-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background: transparent;\n}\n@media (max-width: 767px) {\n  header {\n    position: relative !important;\n  }\n}\n@media (min-width: 767px) {\n  .position-relative-mobile {\n    position: relative;\n  }\n}\n@media (max-width: 767px) {\n  .position-relative-mobile {\n    position: inherit !important;\n  }\n}\n.quick-links-dropdown {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  width: 330px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  animation: slideDown 0.2s ease-out;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .quick-links-dropdown {\n    width: 90vw;\n    max-width: 320px;\n    right: -10px;\n  }\n}\n@media (max-width: 480px) {\n  .quick-links-dropdown {\n    width: calc(100vw - 20px);\n    left: 50%;\n    top: 70px;\n    transform: translate(-50%, 0);\n    padding: 0.75rem;\n  }\n}\n.dropdown-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 480px) {\n  .dropdown-grid {\n    gap: 0.5rem;\n  }\n}\n.grid-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 0.5rem;\n  color: #495057;\n  text-decoration: none;\n  font-size: 0.75rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  border-radius: 8px;\n  text-align: center;\n  background: #f1f6ff;\n}\n@media (max-width: 480px) {\n  .grid-item {\n    padding: 0.75rem 0.375rem;\n    font-size: 0.688rem;\n  }\n}\n.grid-item:hover {\n  background: #f8f9fa;\n  color: #0E567D;\n  transform: translateY(-2px);\n}\n.grid-item i {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 480px) {\n  .grid-item i {\n    font-size: 1.25rem;\n    margin-bottom: 0.375rem;\n  }\n}\n.grid-item span {\n  line-height: 1.2;\n}\n.notification-dropdown {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  width: 420px;\n  max-height: 500px;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  animation: slideDown 0.2s ease-out;\n}\n@media (max-width: 768px) {\n  .notification-dropdown {\n    width: 90vw;\n    max-width: 380px;\n    right: -10px;\n  }\n}\n@media (max-width: 380px) {\n  .notification-dropdown {\n    width: calc(100vw - 20px);\n    left: 15%;\n    top: 70px;\n    transform: translate(-55%, 0);\n    max-height: 70vh;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.notification-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  margin: 1rem;\n  background: #cdeaf0;\n  border-radius: 12px;\n}\n@media (max-width: 480px) {\n  .notification-header {\n    padding: 0.75rem;\n    margin: 0.75rem;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .notification-header h6 {\n    font-size: 0.875rem;\n  }\n}\n.notification-header h6 {\n  color: #111827;\n}\n.btn-mark-all {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: #111827;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.813rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n@media (max-width: 480px) {\n  .btn-mark-all {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n.btn-mark-all:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.notification-empty {\n  padding: 3rem 1.5rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.notification-list {\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.notification-item {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f1f3f5;\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n  transition: all 0.2s;\n}\n@media (max-width: 480px) {\n  .notification-item {\n    padding: 0.75rem 1rem;\n    gap: 0.625rem;\n  }\n}\n.notification-item:last-child {\n  border-bottom: none;\n}\n.notification-item.clickable {\n  cursor: pointer;\n}\n.notification-item.clickable:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #f8f9ff 0%,\n      #fff 100%);\n  transform: translateX(4px);\n}\n.notification-item.unread {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4ff 0%,\n      #fff 100%);\n  border-left: 3px solid #667eea;\n}\n.notification-item.read {\n  opacity: 0.7;\n}\n.notificati {\n  border-radius: 50% !important;\n  align-items: center !important;\n  justify-content: center !important;\n  display: flex !important;\n  height: 2.75rem !important;\n  width: 2.75rem !important;\n  flex-shrink: 0;\n}\n@media (max-width: 480px) {\n  .notificati {\n    height: 2.25rem !important;\n    width: 2.25rem !important;\n    font-size: 0.875rem;\n  }\n}\n.notificati.icon-info {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.notificati.icon-success {\n  background:\n    linear-gradient(\n      135deg,\n      #11998e 0%,\n      #38ef7d 100%);\n  color: white;\n}\n.notificati.icon-warning {\n  background: #f8d7da;\n  color: #495057;\n}\n.notificati.icon-error {\n  background: #f8d7da;\n  color: white;\n}\n.notificati.icon-message {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n  color: white;\n}\n.notificati.icon-system {\n  background:\n    linear-gradient(\n      135deg,\n      #a8edea 0%,\n      #fed6e3 100%);\n  color: #495057;\n}\n.notificati.icon-default {\n  background:\n    linear-gradient(\n      135deg,\n      #e0e7ff 0%,\n      #cffafe 100%);\n  color: #495057;\n}\n.notificati.icon-event {\n  background: #f8d7da;\n  color: #495057;\n}\n.notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.notification-title {\n  font-size: 0.875rem;\n  color: #212529;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n@media (max-width: 480px) {\n  .notification-title {\n    font-size: 0.813rem;\n  }\n}\n.notification-message {\n  font-size: 0.813rem;\n  color: #6c757d;\n  line-height: 1.4;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 480px) {\n  .notification-message {\n    font-size: 0.75rem;\n    line-height: 1.3;\n  }\n}\n.notification-time {\n  font-size: 0.75rem;\n  color: #adb5bd;\n  white-space: nowrap;\n}\n.notification-action {\n  color: #667eea;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n}\n.unread-dot {\n  position: absolute;\n  top: 0.9rem;\n  right: 1rem;\n  width: 8px;\n  height: 8px;\n  background: #667eea;\n  border-radius: 50%;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.dropdown-toggle::after {\n  margin-left: 0.5em;\n}\n.btn-header {\n  width: 2.313rem;\n  height: 2.313rem;\n  font-size: 0.95rem;\n  border: 1px solid #E9EDF4 !important;\n  color: #515B73 !important;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n}\n.btn-header i {\n  padding: 0rem;\n  margin: -0.5rem;\n  font-size: 0.95rem;\n}\n.image-profile-header {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 4px;\n}\n.notification-status-dot {\n  position: absolute;\n  top: 0.1rem;\n  right: 0.1rem;\n  width: 10px;\n  height: 10px;\n  background-color: #dc3545;\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.profilePicture {\n  width: 2.313rem;\n  height: 2.313rem;\n  font-size: 0.95rem;\n  border: 1px solid #E9EDF4 !important;\n  border-radius: 5px;\n  padding: 0.5rem 0.85rem;\n  background-color: var(--primary-color);\n}\n.profile-header {\n  z-index: 1000;\n}\n.profile-header button {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding-left: 0;\n}\n.parent-menu {\n  position: fixed !important;\n  bottom: 9px;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: box-shadow 0.3s;\n  padding-bottom: env(safe-area-inset-bottom, 0px);\n}\n.parent-menu .parent-nav {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 85%;\n  margin: 0 auto;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(7px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 4px 10px;\n}\n.parent-menu .parent-nav .nav-link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 15px;\n  border-radius: 30px;\n  text-decoration: none;\n  color: #1f2937;\n  font-size: 13px;\n  font-weight: 400;\n  position: relative;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.2s;\n}\n@media screen and (max-width: 400px) {\n  .parent-menu .parent-nav .nav-link {\n    padding: 5px 10px;\n    font-size: 12px;\n  }\n}\n.parent-menu .parent-nav .nav-link p {\n  margin-bottom: 0;\n}\n.parent-menu .parent-nav .nav-link i {\n  font-size: 20px;\n  transition: color 0.2s, transform 0.2s;\n  line-height: 0;\n}\n.parent-menu .parent-nav .nav-link .nav-badge {\n  position: absolute;\n  top: 2px;\n  right: 10px;\n  background: #EF4444;\n  color: white;\n  min-width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  animation: pulse 2s infinite;\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.15);\n}\n.parent-menu .parent-nav .nav-link:hover {\n  background: #F3F4F6;\n  color: #1DBAB4;\n}\n.parent-menu .parent-nav .nav-link:hover i {\n  color: #1DBAB4;\n  transform: scale(1.12);\n}\n.parent-menu .parent-nav .nav-link.active {\n  color: #1DBAB4;\n  animation: bounce 0.3s;\n  background: #ebebeb;\n}\n.parent-menu .parent-nav .nav-link.active i {\n  color: #1DBAB4;\n}\n@keyframes bounce {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.18);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.page-title {\n  color: #0e567d;\n  font-weight: 700;\n  font-size: 22px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 460px) {\n  .parent-menu {\n    bottom: 20px;\n  }\n}\n/*# sourceMappingURL=header.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: NotificationService }, { type: PushNotificationService }, { type: MessagesService }, { type: PageTitleService }, { type: Router }], { mobileMenuToggle: [{
    type: Output
  }], handleClickOutside: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/layouts/header/header.ts", lineNumber: 22 });
})();

// src/app/core/services/prefix/prefix.pipe.ts
var PrefixPipe = class _PrefixPipe {
  prefixService;
  constructor(prefixService) {
    this.prefixService = prefixService;
  }
  transform(value, type = "child", plural = false) {
    let prefix = "";
    switch (type) {
      case "child":
        prefix = this.prefixService.getChildPrefix();
        break;
      case "parent":
        prefix = this.prefixService.getParentPrefix();
        break;
      case "educator":
        prefix = this.prefixService.getEducatorPrefix();
        break;
    }
    if (plural && !prefix.endsWith("s")) {
      prefix += "s";
    }
    return prefix;
  }
  static \u0275fac = function PrefixPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrefixPipe)(\u0275\u0275directiveInject(PrefixService, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "prefix", type: _PrefixPipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixPipe, [{
    type: Pipe,
    args: [{
      name: "prefix",
      standalone: true,
      pure: false
    }]
  }], () => [{ type: PrefixService }], null);
})();

// src/app/shared/layouts/sidebar/sidebar.ts
var _c02 = () => ({ exact: true });
var _c1 = () => ({ exact: false });
function Sidebar_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275listener("click", function Sidebar_li_11_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r3.path);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r3.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, item_r3.label));
  }
}
function Sidebar_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.MANAGEMENT"));
  }
}
function Sidebar_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 11);
    \u0275\u0275listener("click", function Sidebar_li_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r5.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c02));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r5.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, item_r5.label));
  }
}
function Sidebar_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.PRINCIPAL"));
  }
}
function Sidebar_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275listener("click", function Sidebar_li_15_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r7.path);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r7.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, item_r7.label));
  }
}
function Sidebar_li_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.CHILD"));
  }
}
function Sidebar_li_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275listener("click", function Sidebar_li_17_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r9.path);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r9.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, item_r9.label));
  }
}
function Sidebar_li_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.PEOPLE"));
  }
}
function Sidebar_li_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 11);
    \u0275\u0275listener("click", function Sidebar_li_19_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "prefix");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r11.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(12, _c1));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r11.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.usePrefix ? \u0275\u0275pipeBind3(5, 6, "", "child", true) : \u0275\u0275pipeBind1(6, 10, item_r11.label));
  }
}
function Sidebar_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.IA"));
  }
}
function Sidebar_li_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275listener("click", function Sidebar_li_21_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r13.path);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r13.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, item_r13.label));
  }
}
function Sidebar_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6", 6)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SIDEBAR.SECTIONS.SETTING"));
  }
}
function Sidebar_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 10);
    \u0275\u0275listener("click", function Sidebar_li_23_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLinkClick());
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r15.path);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r15.icon, " me-3 fs-5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, item_r15.label));
  }
}
var Sidebar = class _Sidebar {
  authService;
  featureService;
  linkClicked = new EventEmitter();
  menuItemsMain = [];
  menuItemsPrincipal = [];
  menuItemsChild = [];
  menuItemsPeople = [];
  menuItemsIa = [];
  menuItemsSetting = [];
  menuItemsSuperAdmin = [];
  userRole = null;
  subscriptions = [];
  enabledFeatures = [];
  featuresLoaded = false;
  constructor(authService, featureService) {
    this.authService = authService;
    this.featureService = featureService;
  }
  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    if (this.authService.isSuperAdmin()) {
      this.setupMenuItems();
      return;
    }
    const featureSub = this.featureService.loadFeaturesIfNeeded().subscribe({
      next: (features) => {
        this.enabledFeatures = features;
        this.featuresLoaded = true;
        this.setupMenuItems();
      },
      error: () => {
        this.enabledFeatures = [];
        this.featuresLoaded = true;
        this.setupMenuItems();
      }
    });
    this.subscriptions.push(featureSub);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  /**
   * Check if a feature is enabled for the current tenant
   */
  isFeatureEnabled(featureCode) {
    if (!featureCode)
      return true;
    if (!this.featuresLoaded)
      return false;
    return this.enabledFeatures.includes(featureCode);
  }
  /**
   * Filter menu items by enabled features
   */
  filterByFeatures(items) {
    return items.filter((item) => this.isFeatureEnabled(item.featureCode));
  }
  setupMenuItems() {
    const isParent = this.authService.isParent();
    const isAdmin = this.authService.isAdmin();
    const isTeacher = this.authService.isTeacher();
    const isSuperAdmin = this.authService.isSuperAdmin();
    if (isSuperAdmin) {
      this.setupSuperAdminMenu();
      return;
    }
    const mainItems = [
      { path: "/dashboard", icon: "bi-speedometer2", label: "SIDEBAR.MENU.DASHBOARD", featureCode: FeatureCodes.DASHBOARD },
      { path: "/messages", icon: "bi-envelope", label: "SIDEBAR.MENU.MESSAGES", featureCode: FeatureCodes.MESSAGES },
      { path: "/chat", icon: "bi-chat-dots", label: "SIDEBAR.MENU.CHAT", featureCode: FeatureCodes.CHAT },
      { path: "/appointments", icon: "bi-calendar-plus", label: "SIDEBAR.MENU.APPOINTMENTS", featureCode: FeatureCodes.APPOINTMENTS },
      { path: "/reclamations", icon: "bi-exclamation-circle", label: "SIDEBAR.MENU.RECLAMATIONS", featureCode: FeatureCodes.RECLAMATIONS },
      { path: "/calendar", icon: "bi-calendar", label: "SIDEBAR.MENU.CALENDAR", featureCode: FeatureCodes.CALENDAR }
    ];
    this.menuItemsMain = this.filterByFeatures(mainItems);
    const principalItems = [
      { path: "/holidays", icon: "bi-calendar-heart", label: "SIDEBAR.MENU.HOLIDAYS", featureCode: FeatureCodes.HOLIDAYS },
      ...!isTeacher ? [{ path: "/fees", icon: "bi-currency-dollar", label: "SIDEBAR.MENU.FEES", featureCode: FeatureCodes.FEES }] : [],
      { path: "/events", icon: "bi-calendar-event", label: "SIDEBAR.MENU.EVENTS", featureCode: FeatureCodes.EVENTS }
    ];
    if (!isParent) {
      principalItems.splice(1, 0, { path: "/leaves", icon: "bi-person-raised-hand", label: "SIDEBAR.MENU.LEAVES", featureCode: FeatureCodes.LEAVES });
    }
    if (!isTeacher) {
      const feesIndex = principalItems.findIndex((item) => item.path === "/fees");
      if (feesIndex !== -1) {
        principalItems.splice(feesIndex + 1, 0, { path: "/static-fees", icon: "bi-cash-coin", label: "SIDEBAR.MENU.STATIC_FEES", featureCode: FeatureCodes.STATIC_FEES });
      } else {
        principalItems.push({ path: "/static-fees", icon: "bi-cash-coin", label: "SIDEBAR.MENU.STATIC_FEES", featureCode: FeatureCodes.STATIC_FEES });
      }
    }
    this.menuItemsPrincipal = this.filterByFeatures(principalItems);
    const childItems = [
      { path: "/activities", icon: "bi-activity", label: "SIDEBAR.MENU.DAILY_REPORT", featureCode: FeatureCodes.DAILY_ACTIVITIES },
      { path: isParent ? "/food-menu/parent" : "/food-menu", icon: "bi-egg-fried", label: "SIDEBAR.MENU.FOOD_MENU", featureCode: FeatureCodes.FOOD_MENU },
      { path: "/gallery", icon: "bi-images", label: "SIDEBAR.MENU.GALLERY", featureCode: FeatureCodes.GALLERY },
      { path: "/learning-games", icon: "bi-controller", label: "SIDEBAR.MENU.LEARNING_GAMES", featureCode: FeatureCodes.LEARNING_GAMES }
    ];
    if (!isParent) {
      childItems.unshift({ path: "/attendance-list", icon: "bi-list-check", label: "SIDEBAR.MENU.ATTENDANCE_HISTORY", featureCode: FeatureCodes.ATTENDANCE }, { path: "/attendance", icon: "bi-calendar-check", label: "SIDEBAR.MENU.ATTENDANCE", featureCode: FeatureCodes.ATTENDANCE });
    }
    if (!isParent) {
      childItems.push({ path: "/classes", icon: "bi-book", label: "SIDEBAR.MENU.CLASSES", featureCode: FeatureCodes.CLASSES });
    }
    if (isParent) {
      childItems.unshift({ path: "/qr-checkin", icon: "bi-qr-code-scan", label: "SIDEBAR.MENU.QR_CHECKIN", featureCode: FeatureCodes.QR_CHECKIN });
    }
    if (isAdmin || isTeacher) {
      childItems.push({ path: "/qr-management", icon: "bi-qr-code", label: "SIDEBAR.MENU.QR_MANAGEMENT", featureCode: FeatureCodes.QR_CHECKIN });
    }
    this.menuItemsChild = this.filterByFeatures(childItems);
    const peopleItems = [];
    if (isAdmin) {
      peopleItems.push({ path: "/parents", icon: "bi-people", label: "SIDEBAR.MENU.PARENTS", featureCode: FeatureCodes.PARENTS }, { path: "/educators", icon: "bi-person-workspace", label: "SIDEBAR.MENU.EDUCATORS", featureCode: FeatureCodes.TEACHERS }, { path: "/children", icon: "bi-person-hearts", label: "SIDEBAR.MENU.CHILDREN", usePrefix: true, featureCode: FeatureCodes.CHILDREN });
    } else if (isTeacher) {
      peopleItems.push({ path: "/parents", icon: "bi-people", label: "SIDEBAR.MENU.PARENTS", featureCode: FeatureCodes.PARENTS }, { path: "/children", icon: "bi-person-hearts", label: "SIDEBAR.MENU.CHILDREN", usePrefix: true, featureCode: FeatureCodes.CHILDREN });
    }
    this.menuItemsPeople = this.filterByFeatures(peopleItems);
    const iaItems = [];
    if (isAdmin) {
      iaItems.push({ path: "/basic-ai", icon: "bi-search", label: "SIDEBAR.MENU.BASIC_AI", featureCode: FeatureCodes.BASIC_AI }, { path: "/ai-assistant", icon: "bi-robot", label: "SIDEBAR.MENU.OPENAI_ASSISTANT", featureCode: FeatureCodes.AI_ASSISTANT });
    }
    this.menuItemsIa = this.filterByFeatures(iaItems);
    if (!isParent) {
      this.menuItemsSetting = [
        { path: "/settings", icon: "bi-gear", label: "SIDEBAR.MENU.SETTINGS" }
      ];
    } else {
      this.menuItemsSetting = [];
    }
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isParent() {
    return this.authService.isParent();
  }
  isTeacher() {
    return this.authService.isTeacher();
  }
  isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  setupSuperAdminMenu() {
    this.menuItemsMain = [
      { path: "/super-admin/dashboard", icon: "bi-speedometer2", label: "SIDEBAR.MENU.DASHBOARD" }
    ];
    this.menuItemsSuperAdmin = [
      { path: "/super-admin/tenants", icon: "bi-building", label: "SIDEBAR.MENU.DAYCARES" },
      { path: "/super-admin/tenants/add", icon: "bi-plus-circle", label: "SIDEBAR.MENU.ADD_DAYCARE" },
      { path: "/super-admin/billing", icon: "bi-cash-stack", label: "SIDEBAR.MENU.BILLING" }
    ];
    this.menuItemsPrincipal = [];
    this.menuItemsChild = [];
    this.menuItemsPeople = [];
    this.menuItemsIa = [];
    this.menuItemsSetting = [];
  }
  onLinkClick() {
    this.linkClicked.emit();
  }
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TenantFeatureService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], outputs: { linkClicked: "linkClicked" }, decls: 24, vars: 16, consts: [[1, "sidebar", "bg-white", "text-dark", "vh-100", "p-3"], [1, "mb-4"], [1, "text-left"], ["src", "/assets/images/logo-app.png", "alt", "MiniMinds Logo", 1, "logo-img", "img-fluid"], [1, "nav-sidebar"], [1, "nav", "flex-column"], [1, "submenu-hdr"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "text-dark", "d-flex", "align-items-center", "py-1", "px-3", "rounded", "mb-1", 3, "click", "routerLink"], ["routerLinkActive", "active", 1, "nav-link", "text-dark", "d-flex", "align-items-center", "py-1", "px-3", "rounded", "mb-1", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "h5", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "nav", 4)(5, "ul", 5)(6, "li")(7, "h6", 6)(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, Sidebar_li_11_Template, 6, 7, "li", 7)(12, Sidebar_li_12_Template, 5, 3, "li", 8)(13, Sidebar_li_13_Template, 6, 9, "li", 7)(14, Sidebar_li_14_Template, 5, 3, "li", 8)(15, Sidebar_li_15_Template, 6, 7, "li", 7)(16, Sidebar_li_16_Template, 5, 3, "li", 8)(17, Sidebar_li_17_Template, 6, 7, "li", 7)(18, Sidebar_li_18_Template, 5, 3, "li", 8)(19, Sidebar_li_19_Template, 7, 13, "li", 7)(20, Sidebar_li_20_Template, 5, 3, "li", 8)(21, Sidebar_li_21_Template, 6, 7, "li", 7)(22, Sidebar_li_22_Template, 5, 3, "li", 8)(23, Sidebar_li_23_Template, 6, 7, "li", 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "SIDEBAR.SECTIONS.MAIN"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.menuItemsMain);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsSuperAdmin.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsSuperAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsPrincipal.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsPrincipal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsChild.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsChild);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsPeople.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsPeople);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsIa.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsIa);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemsSetting.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItemsSetting);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, TranslateModule, PrefixPipe, TranslatePipe], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 250px;\n  overflow-y: auto;\n  border-right: 1px solid #E9EDF4;\n  transition: transform 0.3s ease;\n  z-index: 1002;\n  background-color: white;\n}\n@media (max-width: 991.98px) {\n  [dir=rtl][_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(100%) !important;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n.nav-link[_ngcontent-%COMP%] {\n  transition: background-color 0.3s;\n  padding: 7px 1rem !important;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  font-weight: 600;\n  color: #0e567d !important;\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.submenu-hdr[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  color: #9CA1AF;\n  text-transform: uppercase;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.submenu-hdr[_ngcontent-%COMP%]::after {\n  content: "";\n  width: 100%;\n  height: 1px;\n  background: #E9EDF4;\n  margin-left: 8px;\n}\n.nav-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #515B73;\n  font-size: 16px !important;\n  background: #F6F8FB;\n  border-radius: 5px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0e567d !important;\n  background: transparent !important;\n}\n.nav-sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=sidebar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", imports: [CommonModule, RouterModule, PrefixPipe, TranslateModule], template: `<aside class="sidebar bg-white text-dark vh-100 p-3">\r
  <div class="mb-4">\r
    <h5 class="text-left">\r
\r
      <img src="/assets/images/logo-app.png"  class="logo-img img-fluid" alt="MiniMinds Logo">\r
    </h5>\r
  </div>\r
  \r
  <nav class="nav-sidebar">\r
    <ul class="nav flex-column">\r
      <li>\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.MAIN' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsMain">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
      <!-- SuperAdmin Management Section -->\r
      <li *ngIf="menuItemsSuperAdmin.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.MANAGEMENT' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsSuperAdmin">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          [routerLinkActiveOptions]="{ exact: true }"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
      <li *ngIf="menuItemsPrincipal.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.PRINCIPAL' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsPrincipal">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
      <li *ngIf="menuItemsChild.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.CHILD' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsChild">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
      <li *ngIf="menuItemsPeople.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.PEOPLE' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsPeople">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          [routerLinkActiveOptions]="{ exact: false }"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.usePrefix ? ('' | prefix:'child':true) : (item.label | translate) }}</span>\r
        </a>\r
      </li>\r
      <li *ngIf="menuItemsIa.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.IA' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsIa">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
      <li *ngIf="menuItemsSetting.length > 0">\r
        <h6 class="submenu-hdr"><span>{{ 'SIDEBAR.SECTIONS.SETTING' | translate }}</span></h6>\r
      </li>\r
      <li class="nav-item" *ngFor="let item of menuItemsSetting">\r
        <a\r
          [routerLink]="item.path"\r
          routerLinkActive="active"\r
          (click)="onLinkClick()"\r
          class="nav-link text-dark d-flex align-items-center py-1 px-3 rounded mb-1">\r
          <i class="bi {{ item.icon }} me-3 fs-5"></i>\r
          <span>{{ item.label | translate }}</span>\r
        </a>\r
      </li>\r
    </ul>\r
  </nav>\r
</aside>`, styles: ['/* src/app/shared/layouts/sidebar/sidebar.scss */\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 250px;\n  overflow-y: auto;\n  border-right: 1px solid #E9EDF4;\n  transition: transform 0.3s ease;\n  z-index: 1002;\n  background-color: white;\n}\n@media (max-width: 991.98px) {\n  [dir=rtl] .sidebar {\n    transform: translateX(100%) !important;\n  }\n  .sidebar {\n    transform: translateX(-100%);\n    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);\n  }\n  .sidebar.mobile-open {\n    transform: translateX(0);\n  }\n}\n.nav-link {\n  transition: background-color 0.3s;\n  padding: 7px 1rem !important;\n}\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.nav-link.active {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  font-weight: 600;\n  color: #0e567d !important;\n}\n.logo-img {\n  width: 130px;\n}\n.submenu-hdr {\n  font-weight: 600;\n  font-size: 12px;\n  color: #9CA1AF;\n  text-transform: uppercase;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.submenu-hdr::after {\n  content: "";\n  width: 100%;\n  height: 1px;\n  background: #E9EDF4;\n  margin-left: 8px;\n}\n.nav-sidebar li i {\n  color: #515B73;\n  font-size: 16px !important;\n  background: #F6F8FB;\n  border-radius: 5px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nav-sidebar li .nav-link.active i {\n  color: #0e567d !important;\n  background: transparent !important;\n}\n.nav-sidebar .nav-item a span {\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=sidebar.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: TenantFeatureService }], { linkClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/shared/layouts/sidebar/sidebar.ts", lineNumber: 26 });
})();

// src/app/shared/components/ai-chat-button/ai-chat-button.component.ts
function AIChatButtonComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AIChatButtonComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAIAssistant());
    });
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3, "Ask AI Assistant");
    \u0275\u0275elementEnd()();
  }
}
var AIChatButtonComponent = class _AIChatButtonComponent {
  router;
  authService;
  tenantFeatureService;
  showButton = false;
  subs = [];
  constructor(router, authService, tenantFeatureService) {
    this.router = router;
    this.authService = authService;
    this.tenantFeatureService = tenantFeatureService;
  }
  ngOnInit() {
    const sub = this.tenantFeatureService.enabledFeatures$.subscribe((features) => {
      this.showButton = this.authService.isAdmin() && features.includes("ai_assistant");
    });
    this.subs.push(sub);
  }
  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
  openAIAssistant() {
    this.router.navigate(["/ai-assistant"]);
  }
  static \u0275fac = function AIChatButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIChatButtonComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TenantFeatureService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIChatButtonComponent, selectors: [["app-ai-chat-button"]], decls: 1, vars: 1, consts: [["class", "ai-chat-button", 3, "click", 4, "ngIf"], [1, "ai-chat-button", 3, "click"], [1, "bi", "bi-robot"], [1, "tooltip"]], template: function AIChatButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AIChatButtonComponent_div_0_Template, 4, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showButton);
    }
  }, dependencies: [CommonModule, NgIf], styles: ['\n\n.ai-chat-button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  color: white;\n  font-size: 24px;\n}\n.ai-chat-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);\n}\n.ai-chat-button[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 70px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  right: 20px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=ai-chat-button.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIChatButtonComponent, [{
    type: Component,
    args: [{ selector: "app-ai-chat-button", standalone: true, imports: [CommonModule], template: `
    <div *ngIf="showButton" class="ai-chat-button" (click)="openAIAssistant()">
      <i class="bi bi-robot"></i>
      <div class="tooltip">Ask AI Assistant</div>
    </div>
  `, styles: ['/* angular:styles/component:scss;a107ec79d45795dd00678964d1ced6d58d3a678e12ea68d8ac4c0a8fb9aa227f;C:/laragon/www/miniminds/miniminds-web/src/app/shared/components/ai-chat-button/ai-chat-button.component.ts */\n.ai-chat-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  color: white;\n  font-size: 24px;\n}\n.ai-chat-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);\n}\n.ai-chat-button:hover .tooltip {\n  opacity: 1;\n  visibility: visible;\n}\n.tooltip {\n  position: absolute;\n  bottom: 70px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.tooltip::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  right: 20px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=ai-chat-button.component.css.map */\n'] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: TenantFeatureService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIChatButtonComponent, { className: "AIChatButtonComponent", filePath: "src/app/shared/components/ai-chat-button/ai-chat-button.component.ts", lineNumber: 73 });
})();

// src/app/shared/layouts/main-layout/main-layout.ts
function MainLayout_app_header_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-header", 6);
    \u0275\u0275listener("mobileMenuToggle", function MainLayout_app_header_4_Template_app_header_mobileMenuToggle_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileMenu());
    });
    \u0275\u0275elementEnd();
  }
}
var MainLayout = class _MainLayout {
  authService;
  signalRService;
  router;
  isMobileMenuOpen = false;
  isParentRole = false;
  isSuperAdminRoute = false;
  constructor(authService, signalRService, router) {
    this.authService = authService;
    this.signalRService = signalRService;
    this.router = router;
  }
  ngOnInit() {
    this.isParentRole = this.authService.isParent();
    this.checkSuperAdminRoute(this.router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.checkSuperAdminRoute(event.urlAfterRedirects);
    });
  }
  checkSuperAdminRoute(url) {
    this.isSuperAdminRoute = url.startsWith("/super-admin");
  }
  isMobile() {
    return window.innerWidth < 768;
  }
  shouldHideHeader() {
    return this.isSuperAdminRoute && this.isMobile();
  }
  ngOnDestroy() {
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SignalRService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 8, vars: 7, consts: [[1, "d-flex"], [1, "sidebar-overlay", 3, "click"], [3, "linkClicked"], [1, "main-content"], [3, "mobileMenuToggle", 4, "ngIf"], [1, "content-area"], [3, "mobileMenuToggle"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function MainLayout_Template_div_click_1_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-sidebar", 2);
      \u0275\u0275listener("linkClicked", function MainLayout_Template_app_sidebar_linkClicked_2_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, MainLayout_app_header_4_Template, 1, 0, "app-header", 4);
      \u0275\u0275elementStart(5, "main", 5);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "app-ai-chat-button");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("mobile-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("parentrole", ctx.isParentRole);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.shouldHideHeader());
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, Header, Sidebar, AIChatButtonComponent], styles: ["\n\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 250px;\n  width: calc(100% - 250px);\n  min-height: 100vh;\n  background-color: #f7f7f7;\n}\n.main-content.parentrole[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 246, 0.6274509804);\n  margin-bottom: 0;\n  padding-bottom: 80px;\n}\n.content-area[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 95px);\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n}\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .sidebar-overlay.show[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.parentrole[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 250px;\n}\n@media (max-width: 991.98px) {\n  [dir=rtl][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", imports: [CommonModule, RouterModule, Header, Sidebar, AIChatButtonComponent], template: '<div class="d-flex">\r\n  <div class="sidebar-overlay" [class.show]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>\r\n  <app-sidebar [class.mobile-open]="isMobileMenuOpen" (linkClicked)="closeMobileMenu()"></app-sidebar>\r\n  \r\n  <div class="main-content" [class.parentrole]="isParentRole">\r\n    <app-header *ngIf="!shouldHideHeader()" (mobileMenuToggle)="toggleMobileMenu()"></app-header>\r\n    <main class="content-area ">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n  \r\n  <app-ai-chat-button></app-ai-chat-button>\r\n</div>', styles: ["/* src/app/shared/layouts/main-layout/main-layout.scss */\n.main-content {\n  margin-left: 250px;\n  width: calc(100% - 250px);\n  min-height: 100vh;\n  background-color: #f7f7f7;\n}\n.main-content.parentrole {\n  background-color: rgba(243, 243, 246, 0.6274509804);\n  margin-bottom: 0;\n  padding-bottom: 80px;\n}\n.content-area {\n  min-height: calc(100vh - 95px);\n}\n.sidebar-overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1001;\n}\n@media (max-width: 991.98px) {\n  .main-content {\n    margin-left: 0;\n    width: 100%;\n  }\n  .sidebar-overlay.show {\n    display: block;\n  }\n}\n.parentrole {\n  margin-bottom: 80px;\n}\n[dir=rtl] .main-content {\n  margin-left: 0 !important;\n  margin-right: 250px;\n}\n@media (max-width: 991.98px) {\n  [dir=rtl] .main-content {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: SignalRService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/shared/layouts/main-layout/main-layout.ts", lineNumber: 17 });
})();
export {
  MainLayout
};
//# sourceMappingURL=chunk-CCKMWLLT.js.map
