import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  get isSuperAdmin() {
    return this.authService.isSuperAdmin();
  }
  get dashboardRoute() {
    return this.isSuperAdmin ? "/super-admin/dashboard" : "/dashboard";
  }
  static \u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 36, vars: 13, consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "illustration"], [1, "number-404"], [1, "digit"], [1, "zero-container"], [1, "zero"], [1, "bi", "bi-emoji-frown"], [1, "message-section"], [1, "title"], [1, "description"], [1, "decorations"], [1, "decoration-item", "item-1"], [1, "bi", "bi-stars"], [1, "decoration-item", "item-2"], [1, "bi", "bi-cloud"], [1, "decoration-item", "item-3"], [1, "bi", "bi-balloon-heart"], [1, "decoration-item", "item-4"], [1, "bi", "bi-rocket-takeoff"], [1, "actions"], [1, "custom-btn-2", "btn-add-global-2", 3, "routerLink"], [1, "bi", "bi-house-door"], ["type", "button", "onclick", "history.back()", 1, "custom-btn-2", "btn-cancel-2"], [1, "bi", "bi-arrow-left"]], template: function NotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 8)(12, "h1", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 10);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11)(19, "div", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16);
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 20)(28, "a", 21);
      \u0275\u0275element(29, "i", 22);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 23);
      \u0275\u0275element(33, "i", 24);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 5, "NOT_FOUND.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "NOT_FOUND.DESCRIPTION"));
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.dashboardRoute);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 9, "NOT_FOUND.GO_HOME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 11, "NOT_FOUND.GO_BACK"), " ");
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.not-found-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff 0%,\n      #f0faf7 100%);\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.not-found-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 600px;\n  height: 600px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 185, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.not-found-container[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30%;\n  left: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.08) 0%,\n      rgba(125, 185, 255, 0.08) 100%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.not-found-content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n  width: 100%;\n}\n.illustration[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.number-404[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.number-404[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 140px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n  text-shadow: 0 10px 30px rgba(125, 185, 255, 0.3);\n}\n@media (max-width: 576px) {\n  .number-404[_ngcontent-%COMP%]   .digit[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n.number-404[_ngcontent-%COMP%]   .zero-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.number-404[_ngcontent-%COMP%]   .zero[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 15px 40px rgba(125, 185, 255, 0.4);\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n@media (max-width: 576px) {\n  .number-404[_ngcontent-%COMP%]   .zero[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n}\n.number-404[_ngcontent-%COMP%]   .zero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: white;\n}\n@media (max-width: 576px) {\n  .number-404[_ngcontent-%COMP%]   .zero[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n}\n.message-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.message-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 16px;\n}\n@media (max-width: 576px) {\n  .message-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.message-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-gray);\n  max-width: 400px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n@media (max-width: 576px) {\n  .message-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.decorations[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.6;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--primary-color);\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 15%;\n  animation: _ngcontent-%COMP%_twinkle 2s ease-in-out infinite;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-2[_ngcontent-%COMP%] {\n  top: 20%;\n  right: 10%;\n  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite;\n  animation-delay: 0.5s;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: rgba(125, 185, 255, 0.5);\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-3[_ngcontent-%COMP%] {\n  bottom: 25%;\n  left: 10%;\n  animation: _ngcontent-%COMP%_bounce 2.5s ease-in-out infinite;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--red-color);\n  opacity: 0.6;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-4[_ngcontent-%COMP%] {\n  bottom: 30%;\n  right: 15%;\n  animation: _ngcontent-%COMP%_rocket 3s ease-in-out infinite;\n}\n.decorations[_ngcontent-%COMP%]   .decoration-item.item-4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n@keyframes _ngcontent-%COMP%_twinkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_rocket {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  50% {\n    transform: translate(5px, -10px) rotate(5deg);\n  }\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.actions[_ngcontent-%COMP%]   .custom-btn-2[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n@media (max-width: 576px) {\n  .actions[_ngcontent-%COMP%]   .custom-btn-2[_ngcontent-%COMP%] {\n    min-width: 140px;\n    padding: 10px 20px !important;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=not-found.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `<div class="not-found-container">\r
  <div class="not-found-content">\r
    <div class="illustration">\r
      <div class="number-404">\r
        <span class="digit">4</span>\r
        <div class="zero-container">\r
          <div class="zero">\r
            <i class="bi bi-emoji-frown"></i>\r
          </div>\r
        </div>\r
        <span class="digit">4</span>\r
      </div>\r
    </div>\r
\r
    <div class="message-section">\r
      <h1 class="title">{{ 'NOT_FOUND.TITLE' | translate }}</h1>\r
      <p class="description">{{ 'NOT_FOUND.DESCRIPTION' | translate }}</p>\r
    </div>\r
\r
    <div class="decorations">\r
      <div class="decoration-item item-1">\r
        <i class="bi bi-stars"></i>\r
      </div>\r
      <div class="decoration-item item-2">\r
        <i class="bi bi-cloud"></i>\r
      </div>\r
      <div class="decoration-item item-3">\r
        <i class="bi bi-balloon-heart"></i>\r
      </div>\r
      <div class="decoration-item item-4">\r
        <i class="bi bi-rocket-takeoff"></i>\r
      </div>\r
    </div>\r
\r
    <div class="actions">\r
      <a [routerLink]="dashboardRoute" class="custom-btn-2 btn-add-global-2">\r
        <i class="bi bi-house-door"></i>\r
        {{ 'NOT_FOUND.GO_HOME' | translate }}\r
      </a>\r
      <button type="button" class="custom-btn-2 btn-cancel-2" onclick="history.back()">\r
        <i class="bi bi-arrow-left"></i>\r
        {{ 'NOT_FOUND.GO_BACK' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/not-found/not-found.component.scss */\n.not-found-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff 0%,\n      #f0faf7 100%);\n  padding: 40px 20px;\n  position: relative;\n  overflow: hidden;\n}\n.not-found-container::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 600px;\n  height: 600px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 185, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.not-found-container::after {\n  content: "";\n  position: absolute;\n  bottom: -30%;\n  left: -10%;\n  width: 400px;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(125, 211, 192, 0.08) 0%,\n      rgba(125, 185, 255, 0.08) 100%);\n  border-radius: 50%;\n  z-index: 0;\n}\n.not-found-content {\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  max-width: 600px;\n  width: 100%;\n}\n.illustration {\n  margin-bottom: 40px;\n}\n.number-404 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.number-404 .digit {\n  font-family: "Poppins", sans-serif;\n  font-size: 140px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n  text-shadow: 0 10px 30px rgba(125, 185, 255, 0.3);\n}\n@media (max-width: 576px) {\n  .number-404 .digit {\n    font-size: 80px;\n  }\n}\n.number-404 .zero-container {\n  position: relative;\n}\n.number-404 .zero {\n  width: 120px;\n  height: 120px;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 15px 40px rgba(125, 185, 255, 0.4);\n  animation: float 3s ease-in-out infinite;\n}\n@media (max-width: 576px) {\n  .number-404 .zero {\n    width: 70px;\n    height: 70px;\n  }\n}\n.number-404 .zero i {\n  font-size: 60px;\n  color: white;\n}\n@media (max-width: 576px) {\n  .number-404 .zero i {\n    font-size: 35px;\n  }\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n}\n.message-section {\n  margin-bottom: 40px;\n}\n.message-section .title {\n  font-family: "Poppins", sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n  color: var(--title-color);\n  margin-bottom: 16px;\n}\n@media (max-width: 576px) {\n  .message-section .title {\n    font-size: 24px;\n  }\n}\n.message-section .description {\n  font-size: 16px;\n  color: var(--color-gray);\n  max-width: 400px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n@media (max-width: 576px) {\n  .message-section .description {\n    font-size: 14px;\n  }\n}\n.decorations {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n.decorations .decoration-item {\n  position: absolute;\n  opacity: 0.6;\n}\n.decorations .decoration-item i {\n  font-size: 28px;\n  color: var(--primary-color);\n}\n.decorations .decoration-item.item-1 {\n  top: 10%;\n  left: 15%;\n  animation: twinkle 2s ease-in-out infinite;\n}\n.decorations .decoration-item.item-1 i {\n  color: var(--secondary-color);\n}\n.decorations .decoration-item.item-2 {\n  top: 20%;\n  right: 10%;\n  animation: float 4s ease-in-out infinite;\n  animation-delay: 0.5s;\n}\n.decorations .decoration-item.item-2 i {\n  font-size: 40px;\n  color: rgba(125, 185, 255, 0.5);\n}\n.decorations .decoration-item.item-3 {\n  bottom: 25%;\n  left: 10%;\n  animation: bounce 2.5s ease-in-out infinite;\n}\n.decorations .decoration-item.item-3 i {\n  color: var(--red-color);\n  opacity: 0.6;\n}\n.decorations .decoration-item.item-4 {\n  bottom: 30%;\n  right: 15%;\n  animation: rocket 3s ease-in-out infinite;\n}\n.decorations .decoration-item.item-4 i {\n  color: var(--primary-color);\n}\n@keyframes twinkle {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes rocket {\n  0%, 100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  50% {\n    transform: translate(5px, -10px) rotate(5deg);\n  }\n}\n.actions {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.actions .custom-btn-2 {\n  min-width: 160px;\n}\n@media (max-width: 576px) {\n  .actions .custom-btn-2 {\n    min-width: 140px;\n    padding: 10px 20px !important;\n    font-size: 13px !important;\n  }\n}\n/*# sourceMappingURL=not-found.component.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/features/not-found/not-found.component.ts", lineNumber: 14 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-Q2SJK5TR.js.map
