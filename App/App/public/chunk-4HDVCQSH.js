import {
  ImageDownloadService
} from "./chunk-3GUYEFWP.js";
import "./chunk-HK2EHJHC.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import "./chunk-74BU3QHC.js";
import {
  PermissionService
} from "./chunk-3MPWTHNE.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  GalleryService
} from "./chunk-VRDWYR4I.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import "./chunk-JHHNP67E.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  Capacitor
} from "./chunk-7KUBODN6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/gallery/gallery.interface.ts
var PHOTO_CATEGORIES = ["Memory", "Activity", "Event", "General"];

// src/app/features/gallery/gallery.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/shared/components/pull-to-refresh/pull-to-refresh.component.ts
var _c0 = ["*"];
function PullToRefreshComponent__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 8);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("opacity", ctx_r0.pullProgress);
  }
}
function PullToRefreshComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
var PullToRefreshComponent = class _PullToRefreshComponent {
  el;
  ngZone;
  threshold = 70;
  // Distance to trigger refresh
  maxPullDistance = 100;
  // Max pull distance
  disabled = false;
  refresh = new EventEmitter();
  pullDistance = 0;
  isRefreshing = false;
  startY = 0;
  isTouching = false;
  canPull = false;
  // Expose Math to template
  Math = Math;
  get pullProgress() {
    return Math.min(this.pullDistance / this.threshold, 1);
  }
  get pullText() {
    if (this.isRefreshing)
      return "Refreshing...";
    if (this.pullDistance >= this.threshold)
      return "Release to refresh";
    return "Pull to refresh";
  }
  constructor(el, ngZone) {
    this.el = el;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    if (!this.isMobile()) {
      this.disabled = true;
    }
  }
  ngOnDestroy() {
  }
  isMobile() {
    if (Capacitor.isNativePlatform())
      return true;
    const userAgent = navigator.userAgent || navigator.vendor;
    return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
  }
  onTouchStart(event) {
    if (this.disabled || this.isRefreshing)
      return;
    const scrollTop = this.getScrollTop();
    this.canPull = scrollTop <= 0;
    if (this.canPull) {
      this.startY = event.touches[0].clientY;
      this.isTouching = true;
    }
  }
  onTouchMove(event) {
    if (!this.isTouching || this.disabled || this.isRefreshing || !this.canPull)
      return;
    const currentY = event.touches[0].clientY;
    const diff = currentY - this.startY;
    if (diff > 0) {
      this.pullDistance = diff * 0.5;
      if (this.pullDistance > 10) {
        event.preventDefault();
      }
    }
  }
  onTouchEnd() {
    if (!this.isTouching || this.disabled)
      return;
    this.isTouching = false;
    if (this.pullDistance >= this.threshold && !this.isRefreshing) {
      this.triggerRefresh();
    } else {
      this.resetPull();
    }
  }
  triggerRefresh() {
    this.isRefreshing = true;
    this.pullDistance = 60;
    this.refresh.emit();
  }
  // Call this from parent component when refresh is complete
  completeRefresh() {
    this.ngZone.run(() => {
      this.isRefreshing = false;
      this.resetPull();
    });
  }
  resetPull() {
    this.pullDistance = 0;
  }
  getScrollTop() {
    const container = this.el.nativeElement.closest(".pull-content, .scrollable, [scrollable]");
    if (container) {
      return container.scrollTop;
    }
    return window.scrollY || document.documentElement.scrollTop;
  }
  static \u0275fac = function PullToRefreshComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PullToRefreshComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PullToRefreshComponent, selectors: [["app-pull-to-refresh"]], inputs: { threshold: "threshold", maxPullDistance: "maxPullDistance", disabled: "disabled" }, outputs: { refresh: "refresh" }, ngContentSelectors: _c0, decls: 10, vars: 13, consts: [[1, "pull-to-refresh-container", 3, "touchstart", "touchmove", "touchend"], [1, "pull-indicator"], [1, "pull-indicator-content"], [1, "spinner-container"], ["class", "pull-arrow", "viewBox", "0 0 24 24", "width", "24", "height", "24", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "pull-text"], [1, "pull-content"], ["viewBox", "0 0 24 24", "width", "24", "height", "24", 1, "pull-arrow"], ["fill", "currentColor", "d", "M12 4l-8 8h5v8h6v-8h5z"], [1, "spinner"]], template: function PullToRefreshComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("touchstart", function PullToRefreshComponent_Template_div_touchstart_0_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function PullToRefreshComponent_Template_div_touchmove_0_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function PullToRefreshComponent_Template_div_touchend_0_listener() {
        return ctx.onTouchEnd();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, PullToRefreshComponent__svg_svg_4_Template, 2, 2, "svg", 4)(5, PullToRefreshComponent_div_5_Template, 1, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275projection(9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("visible", ctx.pullDistance > 0)("refreshing", ctx.isRefreshing);
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateY(" + ctx.Math.min(ctx.pullDistance, ctx.maxPullDistance) + "px)");
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "rotate(" + ctx.pullDistance * 2 + "deg)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isRefreshing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isRefreshing);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pullText);
      \u0275\u0275advance();
      \u0275\u0275styleProp("transform", "translateY(" + ctx.Math.min(ctx.pullDistance, ctx.maxPullDistance) + "px)");
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.pull-to-refresh-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 100%;\n}\n.pull-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translateY(-100%);\n  transition: opacity 0.2s ease;\n  opacity: 0;\n  z-index: 10;\n}\n.pull-indicator.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.pull-indicator-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  color: #7dd3c0;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pull-arrow[_ngcontent-%COMP%] {\n  color: #7dd3c0;\n  transition: transform 0.2s ease;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #7dd3c0;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pull-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  font-weight: 500;\n}\n.pull-content[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.pull-indicator.refreshing[_ngcontent-%COMP%]   .pull-content[_ngcontent-%COMP%] {\n  transition: none;\n}\n/*# sourceMappingURL=pull-to-refresh.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PullToRefreshComponent, [{
    type: Component,
    args: [{ selector: "app-pull-to-refresh", standalone: true, imports: [CommonModule], template: `
    <div class="pull-to-refresh-container"
         (touchstart)="onTouchStart($event)"
         (touchmove)="onTouchMove($event)"
         (touchend)="onTouchEnd()">

      <!-- Pull indicator -->
      <div class="pull-indicator" [class.visible]="pullDistance > 0" [class.refreshing]="isRefreshing">
        <div class="pull-indicator-content" [style.transform]="'translateY(' + Math.min(pullDistance, maxPullDistance) + 'px)'">
          <div class="spinner-container" [style.transform]="'rotate(' + (pullDistance * 2) + 'deg)'">
            <svg *ngIf="!isRefreshing" class="pull-arrow" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 4l-8 8h5v8h6v-8h5z" [style.opacity]="pullProgress"/>
            </svg>
            <div *ngIf="isRefreshing" class="spinner"></div>
          </div>
          <span class="pull-text">{{ pullText }}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="pull-content" [style.transform]="'translateY(' + Math.min(pullDistance, maxPullDistance) + 'px)'">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;92388bd2b019455a250e3e0bcd2ff318bc034bd9c55b232133174ed2992e7d33;C:/laragon/www/miniminds/miniminds-web/src/app/shared/components/pull-to-refresh/pull-to-refresh.component.ts */\n.pull-to-refresh-container {\n  position: relative;\n  overflow: hidden;\n  min-height: 100%;\n}\n.pull-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translateY(-100%);\n  transition: opacity 0.2s ease;\n  opacity: 0;\n  z-index: 10;\n}\n.pull-indicator.visible {\n  opacity: 1;\n}\n.pull-indicator-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  color: #7dd3c0;\n}\n.spinner-container {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pull-arrow {\n  color: #7dd3c0;\n  transition: transform 0.2s ease;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #e0e0e0;\n  border-top-color: #7dd3c0;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.pull-text {\n  font-size: 12px;\n  color: #666;\n  font-weight: 500;\n}\n.pull-content {\n  transition: transform 0.2s ease;\n}\n.pull-indicator.refreshing .pull-content {\n  transition: none;\n}\n/*# sourceMappingURL=pull-to-refresh.component.css.map */\n"] }]
  }], () => [{ type: ElementRef }, { type: NgZone }], { threshold: [{
    type: Input
  }], maxPullDistance: [{
    type: Input
  }], disabled: [{
    type: Input
  }], refresh: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PullToRefreshComponent, { className: "PullToRefreshComponent", filePath: "src/app/shared/components/pull-to-refresh/pull-to-refresh.component.ts", lineNumber: 109 });
})();

// src/app/shared/components/skeleton/skeleton-photo-grid.component.ts
function SkeletonPhotoGridComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-skeleton", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "app-skeleton", 5)(4, "app-skeleton", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 200)("width", "100%");
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 14)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 12)("width", "50%");
  }
}
var SkeletonPhotoGridComponent = class _SkeletonPhotoGridComponent {
  count = 12;
  get items() {
    return Array(this.count).fill(0).map((_, i) => i);
  }
  static \u0275fac = function SkeletonPhotoGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonPhotoGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPhotoGridComponent, selectors: [["app-skeleton-photo-grid"]], inputs: { count: "count" }, decls: 2, vars: 1, consts: [[1, "photo-grid"], ["class", "photo-item skeleton-photo", 4, "ngFor", "ngForOf"], [1, "photo-item", "skeleton-photo"], ["borderRadius", "12px", 3, "height", "width"], [1, "p-2"], [1, "mb-1", 3, "height", "width"], [3, "height", "width"]], template: function SkeletonPhotoGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SkeletonPhotoGridComponent_div_1_Template, 5, 6, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.items);
    }
  }, dependencies: [CommonModule, NgForOf, SkeletonComponent], styles: ["\n\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px 0;\n}\n.photo-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.skeleton-photo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .photo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=skeleton-photo-grid.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonPhotoGridComponent, [{
    type: Component,
    args: [{ selector: "app-skeleton-photo-grid", standalone: true, imports: [CommonModule, SkeletonComponent], template: `
    <div class="photo-grid">
      <div class="photo-item skeleton-photo" *ngFor="let i of items">
        <app-skeleton [height]="200" [width]="'100%'" borderRadius="12px"></app-skeleton>
        <div class="p-2">
          <app-skeleton [height]="14" [width]="'70%'" class="mb-1"></app-skeleton>
          <app-skeleton [height]="12" [width]="'50%'"></app-skeleton>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;dfdbd83341565f812f450e7699afa773b5caa42258680f7339203e1e14a72c77;C:/laragon/www/miniminds/miniminds-web/src/app/shared/components/skeleton/skeleton-photo-grid.component.ts */\n.photo-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px 0;\n}\n.photo-item {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.skeleton-photo {\n  animation: fadeIn 0.3s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .photo-grid {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=skeleton-photo-grid.component.css.map */\n"] }]
  }], null, { count: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPhotoGridComponent, { className: "SkeletonPhotoGridComponent", filePath: "src/app/shared/components/skeleton/skeleton-photo-grid.component.ts", lineNumber: 65 });
})();

// src/app/features/gallery/gallery.ts
var _c02 = ["videoElement"];
var _c1 = ["canvasElement"];
var _c2 = ["nativeCameraInput"];
var _c3 = ["pullToRefresh"];
var _c4 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _c5 = () => [];
function Gallery_app_pull_to_refresh_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pull-to-refresh", 65, 3);
    \u0275\u0275listener("refresh", function Gallery_app_pull_to_refresh_2_Template_app_pull_to_refresh_refresh_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRefresh());
    });
    \u0275\u0275elementEnd();
  }
}
function Gallery_div_3_div_4_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function Gallery_div_3_div_4_button_5_Template_button_click_0_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.selectedChildId = child_r6.id ?? null;
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.selectedChildId === child_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r6.firstName, " ");
  }
}
function Gallery_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "button", 77);
    \u0275\u0275listener("click", function Gallery_div_3_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectedChildId = null;
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Gallery_div_3_div_4_button_5_Template, 2, 3, "button", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.selectedChildId === null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "GALLERY.ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.children);
  }
}
function Gallery_div_3_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 82);
  }
}
function Gallery_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275template(2, Gallery_div_3_div_5_div_2_Template, 1, 0, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c4));
  }
}
function Gallery_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275element(2, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "GALLERY.NO_PHOTOS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "GALLERY.NO_PHOTOS_DESC"));
  }
}
function Gallery_div_3_div_7_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 92);
  }
}
function Gallery_div_3_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function Gallery_div_3_div_7_div_1_Template_div_click_0_listener() {
      const photo_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPreview(photo_r8));
    });
    \u0275\u0275element(1, "img", 89);
    \u0275\u0275elementStart(2, "div", 90);
    \u0275\u0275template(3, Gallery_div_3_div_7_div_1_i_3_Template, 1, 0, "i", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("animation-delay", i_r9 * 30 + "ms");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(photo_r8), \u0275\u0275sanitizeUrl)("alt", photo_r8.title || "Photo");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", photo_r8.category === "Memory");
  }
}
function Gallery_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, Gallery_div_3_div_7_div_1_Template, 4, 5, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.photos);
  }
}
function Gallery_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "button", 94);
    \u0275\u0275listener("click", function Gallery_div_3_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GALLERY.LOAD_MORE"), " ");
  }
}
function Gallery_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.totalCount, " ", ctx_r2.totalCount === 1 ? \u0275\u0275pipeBind1(2, 2, "GALLERY.PHOTO") : \u0275\u0275pipeBind1(3, 4, "GALLERY.PHOTOS"), " ");
  }
}
function Gallery_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275element(2, "app-parent-child-header-simple", 68);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, Gallery_div_3_div_4_Template, 6, 6, "div", 69)(5, Gallery_div_3_div_5_Template, 3, 2, "div", 70)(6, Gallery_div_3_div_6_Template, 9, 6, "div", 71)(7, Gallery_div_3_div_7_Template, 2, 1, "div", 72)(8, Gallery_div_3_div_8_Template, 4, 3, "div", 73)(9, Gallery_div_3_div_9_Template, 4, 6, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 7, "GALLERY.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.children.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.photos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.photos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.currentPage < ctx_r2.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.photos.length > 0);
  }
}
function Gallery_div_4_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", child_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r12.firstName, " ", child_r12.lastName, " ");
  }
}
function Gallery_div_4_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r13 = ctx.$implicit;
    \u0275\u0275property("value", cat_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r13);
  }
}
function Gallery_div_4_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function Gallery_div_4_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GALLERY.CLEAR"), " ");
  }
}
function Gallery_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-photo-grid", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("count", ctx_r2.pageSize);
  }
}
function Gallery_div_4_div_26_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function Gallery_div_4_div_26_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openUploadModal());
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "GALLERY.UPLOAD_PHOTOS"), " ");
  }
}
function Gallery_div_4_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "i", 119);
    \u0275\u0275elementStart(2, "h5", 120);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, Gallery_div_4_div_26_button_9_Template, 4, 3, "button", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "GALLERY.NO_PHOTOS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedChildId || ctx_r2.selectedCategory ? \u0275\u0275pipeBind1(7, 5, "GALLERY.TRY_ADJUSTING_FILTERS") : \u0275\u0275pipeBind1(8, 7, "GALLERY.UPLOAD_SOME_PHOTOS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
  }
}
function Gallery_div_4_div_27_div_1_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275element(1, "i", 138);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.getTaggedNames(photo_r17), " ");
  }
}
function Gallery_div_4_div_27_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "button", 141);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function Gallery_div_4_div_27_div_1_div_15_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r18);
      const photo_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openTagModal(photo_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(4, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 143);
    \u0275\u0275listener("click", function Gallery_div_4_div_27_div_1_div_15_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const photo_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.openEditModal(photo_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(6, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 145);
    \u0275\u0275listener("click", function Gallery_div_4_div_27_div_1_div_15_Template_button_click_7_listener($event) {
      \u0275\u0275restoreView(_r18);
      const photo_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.deletePhoto(photo_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(8, "i", 146);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 1, "GALLERY.TAG_PEOPLE"));
  }
}
function Gallery_div_4_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126)(2, "div", 127);
    \u0275\u0275listener("click", function Gallery_div_4_div_27_div_1_Template_div_click_2_listener() {
      const photo_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPreview(photo_r17));
    });
    \u0275\u0275element(3, "img", 128);
    \u0275\u0275elementStart(4, "div", 129);
    \u0275\u0275element(5, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 131);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 132)(9, "h6", 133);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, Gallery_div_4_div_27_div_1_p_11_Template, 3, 1, "p", 134);
    \u0275\u0275elementStart(12, "p", 135);
    \u0275\u0275element(13, "i", 136);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, Gallery_div_4_div_27_div_1_div_15_Template, 9, 3, "div", 137);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(photo_r17), \u0275\u0275sanitizeUrl)("alt", photo_r17.title || photo_r17.fileName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(photo_r17.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(photo_r17.title || photo_r17.fileName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasTaggedPeople(photo_r17));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.formatDate(photo_r17.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
  }
}
function Gallery_div_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, Gallery_div_4_div_27_div_1_Template, 16, 7, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.photos);
  }
}
function Gallery_div_4_div_28_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 154);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "GALLERY.ACTIONS"));
  }
}
function Gallery_div_4_div_28_tr_25_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", photo_r20.description, " ");
  }
}
function Gallery_div_4_div_28_tr_25_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "GALLERY.BY"), " ", photo_r20.uploadedByName);
  }
}
function Gallery_div_4_div_28_tr_25_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 162);
    \u0275\u0275listener("click", function Gallery_div_4_div_28_tr_25_td_17_Template_td_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 163)(2, "button", 164);
    \u0275\u0275listener("click", function Gallery_div_4_div_28_tr_25_td_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r21);
      const photo_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openEditModal(photo_r20));
    });
    \u0275\u0275element(3, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 145);
    \u0275\u0275listener("click", function Gallery_div_4_div_28_tr_25_td_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const photo_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deletePhoto(photo_r20));
    });
    \u0275\u0275element(5, "i", 146);
    \u0275\u0275elementEnd()()();
  }
}
function Gallery_div_4_div_28_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 155);
    \u0275\u0275listener("click", function Gallery_div_4_div_28_tr_25_Template_tr_click_0_listener() {
      const photo_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPreview(photo_r20));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Gallery_div_4_div_28_tr_25_p_6_Template, 2, 1, "p", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 158);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275template(16, Gallery_div_4_div_28_tr_25_p_16_Template, 3, 4, "p", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, Gallery_div_4_div_28_tr_25_td_17_Template, 6, 0, "td", 160);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getPhotoUrl(photo_r20), \u0275\u0275sanitizeUrl)("alt", photo_r20.title || photo_r20.fileName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(photo_r20.title || photo_r20.fileName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTaggedNames(photo_r20));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(photo_r20.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatFileSize(photo_r20.fileSize));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(photo_r20.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", photo_r20.uploadedByName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
  }
}
function Gallery_div_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148)(2, "table", 149)(3, "thead", 150)(4, "tr")(5, "th", 151);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, Gallery_div_4_div_28_th_23_Template, 3, 3, "th", 152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, Gallery_div_4_div_28_tr_25_Template, 18, 10, "tr", 153);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "GALLERY.PREVIEW"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "GALLERY.TITLE_FILENAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "GALLERY.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "GALLERY.CATEGORY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 16, "GALLERY.SIZE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 18, "GALLERY.UPLOADED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.photos);
  }
}
function Gallery_div_4_div_29_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 167)(1, "button", 168);
    \u0275\u0275listener("click", function Gallery_div_4_div_29_li_6_Template_button_click_1_listener() {
      const i_r24 = \u0275\u0275restoreView(_r23).index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPage(i_r24 + 1));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.currentPage === i_r24 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r24 + 1);
  }
}
function Gallery_div_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165)(1, "nav")(2, "ul", 166)(3, "li", 167)(4, "button", 168);
    \u0275\u0275listener("click", function Gallery_div_4_div_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previousPage());
    });
    \u0275\u0275element(5, "i", 169);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, Gallery_div_4_div_29_li_6_Template, 3, 3, "li", 170);
    \u0275\u0275elementStart(7, "li", 167)(8, "button", 168);
    \u0275\u0275listener("click", function Gallery_div_4_div_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275element(9, "i", 171);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c5).constructor(ctx_r2.totalPages));
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function Gallery_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "app-title-page", 97);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 98)(5, "h4", 99);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 100)(9, "select", 101);
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_4_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedChildId, $event) || (ctx_r2.selectedChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Gallery_div_4_Template_select_change_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275elementStart(10, "option", 22);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, Gallery_div_4_option_13_Template, 2, 3, "option", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 101);
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_4_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedCategory, $event) || (ctx_r2.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Gallery_div_4_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFilterChange());
    });
    \u0275\u0275elementStart(15, "option", 102);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, Gallery_div_4_option_18_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Gallery_div_4_button_19_Template, 4, 3, "button", 103);
    \u0275\u0275elementStart(20, "div", 104)(21, "button", 105);
    \u0275\u0275listener("click", function Gallery_div_4_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setViewMode("list"));
    });
    \u0275\u0275element(22, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 107);
    \u0275\u0275listener("click", function Gallery_div_4_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setViewMode("grid"));
    });
    \u0275\u0275element(24, "i", 108);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(25, Gallery_div_4_div_25_Template, 2, 1, "div", 109)(26, Gallery_div_4_div_26_Template, 10, 9, "div", 110)(27, Gallery_div_4_div_27_Template, 2, 1, "div", 111)(28, Gallery_div_4_div_28_Template, 26, 20, "div", 112)(29, Gallery_div_4_div_29_Template, 10, 6, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 22, "GALLERY.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 24, "GALLERY.SUBTITLE_ADMIN"))("breadcrumbs", ctx_r2.breadcrumbs)("actions", ctx_r2.titleActions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 26, "GALLERY.PHOTOS"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedChildId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 28, "GALLERY.ALL_CHILDREN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.children);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 30, "GALLERY.ALL_CATEGORIES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedChildId || ctx_r2.selectedCategory);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r2.viewMode === "list");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r2.viewMode === "grid");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.photos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.viewMode === "grid" && ctx_r2.photos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.viewMode === "list" && ctx_r2.photos.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && ctx_r2.totalPages > 1);
  }
}
function Gallery_div_5_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275element(1, "div", 187);
    \u0275\u0275elementEnd();
  }
}
function Gallery_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275listener("click", function Gallery_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePreview());
    });
    \u0275\u0275elementStart(1, "div", 173);
    \u0275\u0275listener("click", function Gallery_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 174);
    \u0275\u0275listener("click", function Gallery_div_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePreview());
    });
    \u0275\u0275element(3, "i", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 175)(5, "span", 176);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 177);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 178);
    \u0275\u0275listener("click", function Gallery_div_5_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.downloadPhoto();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "i", 179);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 180);
    \u0275\u0275listener("click", function Gallery_div_5_Template_div_click_11_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(12, Gallery_div_5_div_12_Template, 2, 0, "div", 181);
    \u0275\u0275element(13, "img", 182);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 183);
    \u0275\u0275listener("click", function Gallery_div_5_Template_div_click_14_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(15, "button", 184);
    \u0275\u0275listener("click", function Gallery_div_5_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadPhoto());
    });
    \u0275\u0275element(16, "i", 185);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedPhoto.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getTaggedNames(ctx_r2.selectedPhoto));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.downloadingImage);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-arrow-down-circle", !ctx_r2.downloadingImage)("bi-hourglass-split", ctx_r2.downloadingImage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loadingFullImage);
    \u0275\u0275advance();
    \u0275\u0275classProp("loading", ctx_r2.loadingFullImage);
    \u0275\u0275property("src", ctx_r2.getFullImageUrl(ctx_r2.selectedPhoto), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedPhoto.title || "Photo");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.downloadingImage || ctx_r2.loadingFullImage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 14, "GALLERY.SAVE"));
  }
}
function Gallery_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r26 = ctx.$implicit;
    \u0275\u0275property("ngValue", child_r26.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r26.firstName, " ", child_r26.lastName, " ");
  }
}
function Gallery_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r27 = ctx.$implicit;
    \u0275\u0275property("value", cat_r27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r27);
  }
}
function Gallery_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 46);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_32_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.uploadTitle, $event) || (ctx_r2.uploadTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "GALLERY.TITLE_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.uploadTitle);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "GALLERY.TITLE_PLACEHOLDER"));
  }
}
function Gallery_div_53_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275elementStart(2, "span", 192);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 193);
    \u0275\u0275listener("click", function Gallery_div_53_div_5_Template_button_click_4_listener() {
      const i_r31 = \u0275\u0275restoreView(_r30).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile(i_r31));
    });
    \u0275\u0275element(5, "i", 194);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r32 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r32.name);
  }
}
function Gallery_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 188);
    \u0275\u0275template(5, Gallery_div_53_div_5_Template, 6, 1, "div", 189);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(3, 3, "GALLERY.SELECTED_FILES"), " (", ctx_r2.uploadFiles.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.uploadFiles);
  }
}
function Gallery_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 195);
  }
}
function Gallery_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 196);
  }
}
function Gallery_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198)(2, "span", 199);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "GALLERY.LOADING"));
  }
}
function Gallery_img_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 200);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r2.loadingFullImage);
    \u0275\u0275property("src", ctx_r2.getFullImageUrl(ctx_r2.selectedPhoto), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedPhoto.title || ctx_r2.selectedPhoto.fileName);
  }
}
function Gallery_div_74_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 204)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "GALLERY.PEOPLE"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTaggedNames(ctx_r2.selectedPhoto));
  }
}
function Gallery_div_74_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 204)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "GALLERY.DESCRIPTION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedPhoto.description);
  }
}
function Gallery_div_74_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "GALLERY.BY"), " ", ctx_r2.selectedPhoto.uploadedByName);
  }
}
function Gallery_div_74_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 209);
    \u0275\u0275listener("click", function Gallery_div_74_ng_container_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openTagModal(ctx_r2.selectedPhoto));
    });
    \u0275\u0275element(2, "i", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 210);
    \u0275\u0275listener("click", function Gallery_div_74_ng_container_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openEditModal(ctx_r2.selectedPhoto);
      return \u0275\u0275resetView(ctx_r2.closePreview());
    });
    \u0275\u0275element(4, "i", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 211);
    \u0275\u0275listener("click", function Gallery_div_74_ng_container_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePhoto(ctx_r2.selectedPhoto));
    });
    \u0275\u0275element(6, "i", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function Gallery_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 202);
    \u0275\u0275template(2, Gallery_div_74_p_2_Template, 5, 4, "p", 203);
    \u0275\u0275elementStart(3, "p", 204)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Gallery_div_74_p_8_Template, 5, 4, "p", 203);
    \u0275\u0275elementStart(9, "p", 205);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, Gallery_div_74_span_12_Template, 3, 4, "span", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 206)(14, "button", 207);
    \u0275\u0275listener("click", function Gallery_div_74_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadPhoto());
    });
    \u0275\u0275element(15, "i", 208);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, Gallery_div_74_ng_container_19_Template, 7, 0, "ng-container", 109);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasTaggedPeople(ctx_r2.selectedPhoto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 14, "GALLERY.CATEGORY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedPhoto.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPhoto.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(11, 16, "GALLERY.UPLOADED_ON"), " ", ctx_r2.formatDate(ctx_r2.selectedPhoto.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedPhoto.uploadedByName);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.downloadingImage || ctx_r2.loadingFullImage);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-download", !ctx_r2.downloadingImage)("bi-hourglass-split", ctx_r2.downloadingImage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.downloadingImage ? \u0275\u0275pipeBind1(17, 18, "GALLERY.SAVING") : \u0275\u0275pipeBind1(18, 20, "GALLERY.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
  }
}
function Gallery_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 196);
  }
}
function Gallery_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r35 = ctx.$implicit;
    \u0275\u0275property("value", cat_r35);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r35);
  }
}
function Gallery_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 196);
  }
}
function Gallery_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r36 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r36.firstName, " ", item_r36.lastName, " ");
  }
}
function Gallery_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r37 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r37.firstName, " ", item_r37.lastName, " ");
  }
}
function Gallery_span_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 195);
  }
}
function Gallery_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 196);
  }
}
function Gallery_video_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 213, 4);
  }
}
function Gallery_img_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 214);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.capturedImage, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GALLERY.CAPTURED_PHOTO_ALT"));
  }
}
function Gallery_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 215)(1, "button", 216);
    \u0275\u0275listener("click", function Gallery_div_157_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.capturePhoto());
    });
    \u0275\u0275element(2, "i", 217);
    \u0275\u0275elementEnd()();
  }
}
function Gallery_div_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 215)(1, "button", 115);
    \u0275\u0275listener("click", function Gallery_div_158_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retakePhoto());
    });
    \u0275\u0275element(2, "i", 218);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "GALLERY.RETAKE"), " ");
  }
}
function Gallery_div_159_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r41 = ctx.$implicit;
    \u0275\u0275property("ngValue", child_r41.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r41.firstName, " ", child_r41.lastName, " ");
  }
}
function Gallery_div_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_159_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cameraChildId, $event) || (ctx_r2.cameraChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, Gallery_div_159_option_8_Template, 2, 3, "option", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "GALLERY.SELECT_CHILD_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cameraChildId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "GALLERY.NO_CHILD_TAG_LATER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.children);
  }
}
function Gallery_div_160_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r43 = ctx.$implicit;
    \u0275\u0275property("value", cat_r43);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r43);
  }
}
function Gallery_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_160_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cameraCategory, $event) || (ctx_r2.cameraCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, Gallery_div_160_option_5_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "GALLERY.CATEGORY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cameraCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function Gallery_div_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 46);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_161_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cameraTitle, $event) || (ctx_r2.cameraTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "GALLERY.TITLE_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cameraTitle);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "GALLERY.TITLE_PLACEHOLDER"));
  }
}
function Gallery_div_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 27);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Gallery_div_162_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cameraDescription, $event) || (ctx_r2.cameraDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "GALLERY.DESCRIPTION_OPTIONAL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.cameraDescription);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "GALLERY.DESCRIPTION_PLACEHOLDER"));
  }
}
function Gallery_button_167_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 195);
  }
}
function Gallery_button_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function Gallery_button_167_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCapturedPhoto());
    });
    \u0275\u0275template(1, Gallery_button_167_span_1_Template, 1, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.uploading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.uploading ? \u0275\u0275pipeBind1(3, 3, "GALLERY.SAVING") : \u0275\u0275pipeBind1(4, 5, "GALLERY.SAVE_PHOTO"), " ");
  }
}
function Gallery_div_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 196);
  }
}
var IMAGE_MAX_WIDTH = 1920;
var IMAGE_MAX_HEIGHT = 1080;
var IMAGE_QUALITY = 0.8;
var Gallery = class _Gallery {
  galleryService;
  childrenService;
  authService;
  router;
  permissions;
  translate;
  pageTitleService;
  imageDownloadService;
  simpleToastService;
  videoElement;
  canvasElement;
  nativeCameraInput;
  pullToRefresh;
  photos = [];
  children = [];
  loading = false;
  uploading = false;
  userRole = null;
  viewMode = "grid";
  // Filters
  selectedChildId = null;
  selectedCategory = "";
  categories = PHOTO_CATEGORIES;
  // Pagination
  currentPage = 1;
  pageSize = 20;
  totalPages = 1;
  totalCount = 0;
  // Upload modal
  showUploadModal = false;
  uploadFiles = [];
  uploadChildId = null;
  uploadCategory = "Memory";
  uploadTitle = "";
  uploadDescription = "";
  // Preview modal
  showPreviewModal = false;
  selectedPhoto = null;
  // Tag people modal
  showTagModal = false;
  tagPhoto = null;
  tagChildIds = [];
  tagSaving = false;
  // Edit modal
  showEditModal = false;
  editPhoto = null;
  editTitle = "";
  editDescription = "";
  editCategory = "";
  // Camera modal
  showCameraModal = false;
  cameraStream = null;
  capturedImage = null;
  cameraChildId = null;
  cameraCategory = "Memory";
  cameraTitle = "";
  cameraDescription = "";
  // Loading state for preview modal
  loadingFullImage = false;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  // Download state
  downloadingImage = false;
  constructor(galleryService, childrenService, authService, router, permissions, translate, pageTitleService, imageDownloadService, simpleToastService) {
    this.galleryService = galleryService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.router = router;
    this.permissions = permissions;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.imageDownloadService = imageDownloadService;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    this.pageTitleService.setTitle(this.translate.instant("GALLERY.TITLE"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.loadChildren();
    this.loadPhotos();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("GALLERY.TITLE"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.stopCamera();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("GALLERY.TITLE") }
    ];
  }
  setupTitleActions() {
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.titleActions = [
        {
          label: this.translate.instant("GALLERY.TAKE_PHOTO"),
          class: "btn-view-global-2 me-2",
          icon: "bi bi-camera",
          action: () => this.openCameraModal()
        },
        {
          label: this.translate.instant("GALLERY.UPLOAD_PHOTOS"),
          class: "btn-edit-global-2",
          icon: "bi bi-upload",
          action: () => this.openUploadModal()
        }
      ];
    }
  }
  loadChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
      },
      error: (error) => {
        console.error("Error loading children:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.ERROR"),
          text: this.translate.instant("GALLERY.FAILED_TO_LOAD_CHILDREN")
        });
      }
    });
  }
  loadPhotos() {
    this.loading = true;
    this.galleryService.getPhotos(this.currentPage, this.pageSize, this.selectedChildId || void 0, this.selectedCategory || void 0).subscribe({
      next: (response) => {
        this.photos = response.data;
        this.totalCount = response.totalCount;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading photos:", error);
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.ERROR"),
          text: this.translate.instant("GALLERY.FAILED_TO_LOAD_PHOTOS")
        });
      }
    });
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadPhotos();
  }
  clearFilters() {
    this.selectedChildId = null;
    this.selectedCategory = "";
    this.currentPage = 1;
    this.loadPhotos();
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  // Pagination
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadPhotos();
    }
  }
  previousPage() {
    this.goToPage(this.currentPage - 1);
  }
  nextPage() {
    this.goToPage(this.currentPage + 1);
  }
  // Upload modal
  openUploadModal() {
    this.showUploadModal = true;
    this.uploadFiles = [];
    this.uploadChildId = null;
    this.uploadCategory = "Memory";
    this.uploadTitle = "";
    this.uploadDescription = "";
  }
  closeUploadModal() {
    this.showUploadModal = false;
    this.uploadFiles = [];
  }
  onFileSelect(event) {
    const input = event.target;
    if (input.files) {
      this.uploadFiles = Array.from(input.files);
    }
  }
  removeFile(index) {
    this.uploadFiles.splice(index, 1);
  }
  uploadPhotos() {
    if (this.uploadFiles.length === 0) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("GALLERY.MISSING_INFO"),
        text: this.translate.instant("GALLERY.SELECT_AT_LEAST_ONE_PHOTO")
      });
      return;
    }
    this.uploading = true;
    if (this.uploadFiles.length === 1) {
      this.galleryService.uploadPhoto(this.uploadFiles[0], this.uploadChildId || void 0, this.uploadTitle || void 0, this.uploadDescription || void 0, this.uploadCategory).subscribe({
        next: () => {
          this.uploading = false;
          this.closeUploadModal();
          this.loadPhotos();
          showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
        },
        error: (error) => {
          console.error("Error uploading photo:", error);
          this.uploading = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("GALLERY.UPLOAD_FAILED"),
            text: this.translate.instant("GALLERY.UPLOAD_PHOTO_ERROR")
          });
        }
      });
    } else {
      this.galleryService.uploadMultiplePhotos(this.uploadFiles, this.uploadChildId || void 0, this.uploadCategory, this.uploadDescription || void 0).subscribe({
        next: (response) => {
          this.uploading = false;
          this.closeUploadModal();
          this.loadPhotos();
          if (response.errors && response.errors.length > 0) {
            import_sweetalert2.default.fire({
              icon: "warning",
              title: this.translate.instant("GALLERY.PARTIAL_UPLOAD"),
              html: `${this.translate.instant("GALLERY.UPLOADED_PHOTOS_COUNT", { count: response.uploaded.length })}<br>${this.translate.instant("GALLERY.ERRORS")}: ${response.errors.join(", ")}`
            });
          } else {
            showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
          }
        },
        error: (error) => {
          console.error("Error uploading photos:", error);
          this.uploading = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("GALLERY.UPLOAD_FAILED"),
            text: this.translate.instant("GALLERY.UPLOAD_PHOTOS_ERROR")
          });
        }
      });
    }
  }
  // Check if running on native mobile platform or mobile browser
  // Use native file input for camera on mobile devices
  isNativeMobile() {
    if (Capacitor.isNativePlatform()) {
      return true;
    }
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const noMediaDevices = !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia;
    return isMobile || noMediaDevices;
  }
  // Camera functions - web browser camera API
  async openCameraModal() {
    this.capturedImage = null;
    this.cameraChildId = null;
    this.cameraCategory = "Memory";
    this.cameraTitle = "";
    this.cameraDescription = "";
    if (this.isNativeMobile()) {
      this.nativeCameraInput?.nativeElement.click();
      return;
    }
    const isSecure = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
    if (!isSecure) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("GALLERY.SECURE_CONNECTION_REQUIRED"),
        html: this.translate.instant("GALLERY.SECURE_CONNECTION_DETAILS")
      });
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.CAMERA_NOT_SUPPORTED"),
        text: this.translate.instant("GALLERY.CAMERA_NOT_SUPPORTED_DETAILS")
      });
      return;
    }
    this.showCameraModal = true;
    setTimeout(async () => {
      await this.startCamera();
    }, 100);
  }
  // Start camera with mobile-friendly settings
  async startCamera() {
    try {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: "environment" },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: false
        });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
      }
      this.cameraStream = stream;
      if (this.videoElement?.nativeElement) {
        const video = this.videoElement.nativeElement;
        video.srcObject = this.cameraStream;
        video.setAttribute("playsinline", "true");
        video.setAttribute("autoplay", "true");
        video.setAttribute("muted", "true");
        video.muted = true;
        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            video.play().then(() => resolve()).catch(reject);
          };
          video.onerror = () => reject(new Error("Video failed to load"));
          setTimeout(() => reject(new Error("Camera timeout")), 1e4);
        });
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      let errorMessage = this.translate.instant("GALLERY.CAMERA_COULD_NOT_ACCESS");
      let errorTitle = this.translate.instant("GALLERY.CAMERA_ERROR");
      if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
        errorTitle = this.translate.instant("GALLERY.CAMERA_PERMISSION_DENIED");
        errorMessage = this.translate.instant("GALLERY.CAMERA_PERMISSION_DENIED_DETAILS");
      } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
        errorMessage = this.translate.instant("GALLERY.CAMERA_NOT_FOUND");
      } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
        errorMessage = this.translate.instant("GALLERY.CAMERA_IN_USE");
      } else if (error.name === "OverconstrainedError") {
        errorMessage = this.translate.instant("GALLERY.CAMERA_SETTINGS_NOT_SUPPORTED");
      } else if (error.name === "SecurityError") {
        errorMessage = this.translate.instant("GALLERY.CAMERA_SECURITY_BLOCKED");
      } else if (error.message) {
        errorMessage = error.message;
      }
      import_sweetalert2.default.fire({
        icon: "error",
        title: errorTitle,
        text: errorMessage
      });
      this.closeCameraModal();
    }
  }
  // Capture photo from web camera with compression
  capturePhoto() {
    if (!this.videoElement?.nativeElement || !this.canvasElement?.nativeElement)
      return;
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext("2d");
    if (!context)
      return;
    let width = video.videoWidth;
    let height = video.videoHeight;
    if (width > IMAGE_MAX_WIDTH || height > IMAGE_MAX_HEIGHT) {
      const ratio = Math.min(IMAGE_MAX_WIDTH / width, IMAGE_MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    this.capturedImage = canvas.toDataURL("image/jpeg", IMAGE_QUALITY);
    this.stopCamera();
  }
  retakePhoto() {
    this.capturedImage = null;
    setTimeout(async () => {
      await this.startCamera();
    }, 100);
  }
  stopCamera() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach((track) => track.stop());
      this.cameraStream = null;
    }
  }
  closeCameraModal() {
    this.stopCamera();
    this.showCameraModal = false;
    this.capturedImage = null;
    this.cameraChildId = null;
    this.cameraCategory = "Memory";
    this.cameraTitle = "";
    this.cameraDescription = "";
  }
  // Handle native camera capture (from file input with capture="environment")
  onNativeCameraCapture(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.capturedImage = reader.result;
      this.showCameraModal = true;
    };
    reader.readAsDataURL(file);
    input.value = "";
  }
  async saveCapturedPhoto() {
    if (!this.capturedImage) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("GALLERY.MISSING_INFO"),
        text: this.translate.instant("GALLERY.CAPTURE_A_PHOTO")
      });
      return;
    }
    this.uploading = true;
    try {
      const file = await this.base64ToCompressedFile(this.capturedImage);
      this.galleryService.uploadPhoto(file, this.cameraChildId || void 0, this.cameraTitle || void 0, this.cameraDescription || void 0, this.cameraCategory).subscribe({
        next: () => {
          this.uploading = false;
          this.closeCameraModal();
          this.loadPhotos();
          showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
        },
        error: (error) => {
          console.error("Error saving captured photo:", error);
          this.uploading = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("GALLERY.SAVE_FAILED"),
            text: this.translate.instant("GALLERY.SAVE_PHOTO_ERROR")
          });
        }
      });
    } catch (error) {
      console.error("Error processing photo:", error);
      this.uploading = false;
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.PROCESSING_ERROR"),
        text: this.translate.instant("GALLERY.PROCESSING_PHOTO_ERROR")
      });
    }
  }
  // Convert base64 to compressed file
  async base64ToCompressedFile(base64) {
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = base64;
    });
    const canvas = document.createElement("canvas");
    let width = img.width;
    let height = img.height;
    if (width > IMAGE_MAX_WIDTH || height > IMAGE_MAX_HEIGHT) {
      const ratio = Math.min(IMAGE_MAX_WIDTH / width, IMAGE_MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      throw new Error("Could not get canvas context");
    ctx.drawImage(img, 0, 0, width, height);
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((b) => b ? resolve(b) : reject(new Error("Failed to create blob")), "image/jpeg", IMAGE_QUALITY);
    });
    return new File([blob], `photo_${Date.now()}.jpg`, { type: "image/jpeg" });
  }
  // Preview modal - fetches full resolution image
  openPreview(photo) {
    this.selectedPhoto = photo;
    this.showPreviewModal = true;
    if (photo.imageUrl) {
      this.loadingFullImage = false;
      return;
    }
    this.loadingFullImage = true;
    this.galleryService.getPhoto(photo.id).subscribe({
      next: (fullPhoto) => {
        if (this.selectedPhoto && this.selectedPhoto.id === photo.id) {
          this.selectedPhoto = __spreadProps(__spreadValues({}, this.selectedPhoto), {
            imageData: fullPhoto.imageData,
            imageUrl: fullPhoto.imageUrl
          });
        }
        this.loadingFullImage = false;
      },
      error: (error) => {
        console.error("Error loading full image:", error);
        this.loadingFullImage = false;
      }
    });
  }
  closePreview() {
    this.showPreviewModal = false;
    this.selectedPhoto = null;
  }
  /**
   * Download/save the currently selected photo
   */
  async downloadPhoto() {
    if (!this.selectedPhoto || this.downloadingImage)
      return;
    const imageUrl = this.selectedPhoto.imageUrl ? ApiConfig.HUB_URL + this.selectedPhoto.imageUrl : null;
    const imageData = this.selectedPhoto.imageData || this.selectedPhoto.thumbnailData;
    if (!imageUrl && !imageData) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.ERROR"),
        text: this.translate.instant("GALLERY.NO_IMAGE_DATA")
      });
      return;
    }
    this.downloadingImage = true;
    try {
      const fileName = this.selectedPhoto.title || this.selectedPhoto.fileName || this.imageDownloadService.generateFileName("miniminds_photo");
      let downloadData = imageData;
      if (imageUrl && !imageData) {
        try {
          const response = await fetch(imageUrl);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          const blob = await response.blob();
          downloadData = await this.blobToBase64(blob);
        } catch (fetchError) {
          console.error("Error fetching image from URL:", fetchError);
          if (!this.imageDownloadService.isNativePlatform()) {
            window.open(imageUrl, "_blank");
          } else {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("GALLERY.ERROR"),
              text: this.translate.instant("GALLERY.DOWNLOAD_FAILED")
            });
          }
          this.downloadingImage = false;
          return;
        }
      }
      if (!downloadData) {
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.ERROR"),
          text: this.translate.instant("GALLERY.NO_IMAGE_DATA")
        });
        this.downloadingImage = false;
        return;
      }
      const result = await this.imageDownloadService.downloadImage(downloadData, fileName);
      if (result.success) {
        this.simpleToastService.success(this.imageDownloadService.isNativePlatform() ? this.translate.instant("GALLERY.IMAGE_SAVED_TO_GALLERY") : this.translate.instant("GALLERY.IMAGE_DOWNLOADED"));
      } else {
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.ERROR"),
          text: result.message
        });
      }
    } catch (error) {
      console.error("Error downloading photo:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.ERROR"),
        text: error.message || this.translate.instant("GALLERY.DOWNLOAD_FAILED")
      });
    } finally {
      this.downloadingImage = false;
    }
  }
  /**
   * Convert blob to base64 string
   */
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  // Edit modal
  openEditModal(photo) {
    this.editPhoto = photo;
    this.editTitle = photo.title || "";
    this.editDescription = photo.description || "";
    this.editCategory = photo.category;
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.editPhoto = null;
  }
  savePhotoEdit() {
    if (!this.editPhoto)
      return;
    this.galleryService.updatePhoto(this.editPhoto.id, {
      title: this.editTitle || void 0,
      description: this.editDescription || void 0,
      category: this.editCategory
    }).subscribe({
      next: () => {
        this.closeEditModal();
        this.loadPhotos();
        showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
      },
      error: (error) => {
        console.error("Error updating photo:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.UPDATE_FAILED"),
          text: this.translate.instant("GALLERY.UPDATE_PHOTO_ERROR")
        });
      }
    });
  }
  // Tag people
  openTagModal(photo) {
    this.tagPhoto = photo;
    this.tagSaving = false;
    this.tagChildIds = (photo.taggedChildren || []).map((t) => t.childId);
    this.showTagModal = true;
    this.galleryService.getPhotoTags(photo.id).subscribe({
      next: (tags) => {
        this.tagChildIds = tags.map((t) => t.childId);
      },
      error: (error) => console.error("Error loading photo tags:", error)
    });
  }
  closeTagModal() {
    this.showTagModal = false;
    this.tagPhoto = null;
    this.tagChildIds = [];
  }
  saveTags() {
    if (!this.tagPhoto)
      return;
    const photoId = this.tagPhoto.id;
    const childIds = this.tagChildIds;
    this.tagSaving = true;
    this.galleryService.setPhotoTags(photoId, childIds).subscribe({
      next: () => {
        this.tagSaving = false;
        this.closeTagModal();
        this.loadPhotos();
        if (this.selectedPhoto && this.selectedPhoto.id === photoId) {
          this.selectedPhoto.taggedChildren = childIds.map((id) => {
            const child = this.children.find((c) => c.id === id);
            return { childId: id, firstName: child?.firstName, lastName: child?.lastName };
          });
        }
        showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
      },
      error: (error) => {
        console.error("Error saving tags:", error);
        this.tagSaving = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("GALLERY.UPDATE_FAILED"),
          text: this.translate.instant("GALLERY.UPDATE_TAGS_ERROR")
        });
      }
    });
  }
  getTaggedNames(photo) {
    const tags = photo.taggedChildren || [];
    if (tags.length > 0) {
      return tags.map((t) => `${t.firstName || ""} ${t.lastName || ""}`.trim()).filter(Boolean).join(", ");
    }
    return photo.childName || "";
  }
  hasTaggedPeople(photo) {
    return photo.taggedChildren && photo.taggedChildren.length > 0 || !!photo.childName;
  }
  // Delete photo
  deletePhoto(photo) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("GALLERY.DELETE_CONFIRM_TITLE"),
      text: this.translate.instant("GALLERY.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("GALLERY.YES_DELETE"),
      cancelButtonText: this.translate.instant("GALLERY.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.galleryService.deletePhoto(photo.id).subscribe({
          next: () => {
            this.loadPhotos();
            if (this.showPreviewModal) {
              this.closePreview();
            }
            showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
          },
          error: (error) => {
            console.error("Error deleting photo:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("GALLERY.DELETE_FAILED"),
              text: this.translate.instant("GALLERY.DELETE_PHOTO_ERROR")
            });
          }
        });
      }
    });
  }
  // Helpers - prefers file-based URLs, falls back to Base64
  getPhotoUrl(photo) {
    if (photo.thumbnailUrl) {
      return ApiConfig.HUB_URL + photo.thumbnailUrl;
    }
    return photo.thumbnailData || "";
  }
  getFullImageUrl(photo) {
    if (photo.imageUrl) {
      return ApiConfig.HUB_URL + photo.imageUrl;
    }
    return photo.imageData || photo.thumbnailData || "";
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  canEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }
  get isParent() {
    return this.authService.isParent();
  }
  // Pull-to-refresh handler
  onRefresh() {
    this.loadPhotos();
    setTimeout(() => {
      this.pullToRefresh?.completeRefresh();
    }, 500);
  }
  static \u0275fac = function Gallery_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Gallery)(\u0275\u0275directiveInject(GalleryService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PermissionService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(ImageDownloadService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Gallery, selectors: [["app-gallery"]], viewQuery: function Gallery_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nativeCameraInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pullToRefresh = _t.first);
    }
  }, decls: 169, vars: 149, consts: [["nativeCameraInput", ""], ["fileInput", ""], ["canvasElement", ""], ["pullToRefresh", ""], ["videoElement", ""], ["type", "file", "accept", "image/*", "capture", "environment", 2, "display", "none", 3, "change"], [3, "refresh", 4, "ngIf"], ["class", "ios-gallery-container", 4, "ngIf"], ["class", "container mt-4", 4, "ngIf"], ["class", "ios-fullscreen-viewer", 3, "click", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-upload", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], ["rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "upload-zone", "p-4", "border", "border-2", "border-dashed", "rounded", "text-center", 3, "click", "dragover", "drop"], ["type", "file", "accept", "image/*", "multiple", "", 1, "d-none", 3, "change"], [1, "bi", "bi-cloud-upload", "display-4", "text-muted"], [1, "mb-0", "mt-2"], [1, "text-muted"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "action-btn", "btn-add-global-2", "custom-btn-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-body", "text-center", "p-0", "position-relative"], ["class", "position-absolute top-50 start-50 translate-middle", 4, "ngIf"], ["class", "img-fluid", "style", "max-height: 70vh;", 3, "src", "alt", "opacity-50", 4, "ngIf"], ["class", "modal-footer justify-content-between", 4, "ngIf"], [1, "modal-dialog"], [1, "bi", "bi-pencil", "me-2"], [1, "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "action-btn", "btn-add-global-2", "custom-btn-2", 3, "click"], [1, "bi", "bi-people", "me-2"], [1, "modal-body", 2, "overflow", "visible"], [1, "text-muted", "small", "mb-2"], ["bindLabel", "firstName", "bindValue", "id", 3, "ngModelChange", "items", "multiple", "closeOnSelect", "ngModel", "placeholder", "searchable", "clearable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "bi", "bi-camera", "me-2"], [1, "camera-container", "position-relative", "bg-dark", "rounded", "overflow-hidden", 2, "aspect-ratio", "16/9"], ["autoplay", "", "playsinline", "", "class", "w-100 h-100", "style", "object-fit: cover;", 4, "ngIf"], ["class", "w-100 h-100", "style", "object-fit: contain;", 3, "src", "alt", 4, "ngIf"], [1, "d-none"], [1, "col-12", "text-center"], ["class", "d-flex justify-content-center gap-3", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], ["type", "button", "class", "action-btn btn-add-global-2 custom-btn-2", 3, "disabled", "click", 4, "ngIf"], [3, "refresh"], [1, "ios-gallery-container"], [1, "ios-gallery-header", "mb-4"], [3, "title"], ["class", "ios-filter-section", 4, "ngIf"], ["class", "ios-gallery-loading", 4, "ngIf"], ["class", "ios-empty-state", 4, "ngIf"], ["class", "ios-photo-grid", 4, "ngIf"], ["class", "ios-load-more", 4, "ngIf"], ["class", "ios-photo-count", 4, "ngIf"], [1, "ios-filter-section"], [1, "ios-filter-scroll"], [1, "ios-filter-pill", 3, "click"], ["class", "ios-filter-pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ios-gallery-loading"], [1, "ios-skeleton-grid"], ["class", "ios-skeleton-item", 4, "ngFor", "ngForOf"], [1, "ios-skeleton-item"], [1, "ios-empty-state"], [1, "ios-empty-icon"], [1, "bi", "bi-photo"], [1, "ios-photo-grid"], ["class", "ios-photo-item", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "ios-photo-item", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "ios-photo-overlay"], ["class", "bi bi-heart-fill", 4, "ngIf"], [1, "bi", "bi-heart-fill"], [1, "ios-load-more"], [1, "ios-load-more-btn", 3, "click"], [1, "ios-photo-count"], [1, "container", "mt-4"], ["icon", "bi bi-images", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "bg-white", "p-3", "border", "rounded-1", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4"], [1, "title-filter", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "form-select", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], [4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "d-flex justify-content-center mt-4", 4, "ngIf"], [3, "value"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-lg"], [3, "count"], [1, "text-center", "py-5"], [1, "bi", "bi-images", "display-1", "text-muted"], [1, "mt-3"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "g-4"], ["class", "col-xl-3 col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "card", "h-100", "photo-card"], [1, "photo-container", "position-relative", 3, "click"], [1, "card-img-top", "photo-thumbnail", 3, "src", "alt"], [1, "photo-overlay"], [1, "bi", "bi-zoom-in"], [1, "badge", "bg-primary", "position-absolute", "top-0", "end-0", "m-2", "badge-galery"], [1, "card-body", "p-3"], [1, "card-title", "text-truncate", "mb-1"], ["class", "text-muted small mb-2", 4, "ngIf"], [1, "text-muted", "small", "mb-0"], [1, "bi", "bi-calendar", "me-1"], ["class", "card-footer bg-transparent border-top-0 p-3 pt-0", 4, "ngIf"], [1, "bi", "bi-person-fill", "me-1"], [1, "card-footer", "bg-transparent", "border-top-0", "p-3", "pt-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-info", "flex-grow-1", 3, "click", "title"], [1, "bi", "bi-people"], [1, "btn", "btn-sm", "btn-outline-primary", "flex-grow-1", "btn-edit", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "card"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [2, "width", "80px"], ["style", "width: 120px;", 4, "ngIf"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "width", "120px"], [2, "cursor", "pointer", 3, "click"], [1, "rounded", 2, "width", "60px", "height", "60px", "object-fit", "cover", 3, "src", "alt"], ["class", "text-muted small mb-0 text-truncate", "style", "max-width: 200px;", 4, "ngIf"], [1, "badge", "bg-primary"], ["class", "text-muted small mb-0", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "text-muted", "small", "mb-0", "text-truncate", 2, "max-width", "200px"], [3, "click"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "bi", "bi-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "ios-fullscreen-viewer", 3, "click"], [1, "ios-viewer-header", 3, "click"], [1, "ios-viewer-close", 3, "click"], [1, "ios-viewer-title"], [1, "ios-viewer-date"], [1, "ios-viewer-child"], [1, "ios-viewer-action", 3, "click", "disabled"], [1, "bi"], [1, "ios-viewer-content", 3, "click"], ["class", "ios-viewer-loading", 4, "ngIf"], [3, "src", "alt"], [1, "ios-viewer-footer", 3, "click"], [1, "ios-footer-btn", 3, "click", "disabled"], [1, "bi", "bi-download"], [1, "ios-viewer-loading"], [1, "ios-spinner"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "selected-file d-flex align-items-center bg-light rounded p-2", 4, "ngFor", "ngForOf"], [1, "selected-file", "d-flex", "align-items-center", "bg-light", "rounded", "p-2"], [1, "bi", "bi-image", "me-2"], [1, "text-truncate", 2, "max-width", "150px"], [1, "btn", "btn-sm", "btn-link", "text-danger", "p-0", "ms-2", 3, "click"], [1, "bi", "bi-x"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade", "show"], [1, "position-absolute", "top-50", "start-50", "translate-middle"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "img-fluid", 2, "max-height", "70vh", 3, "src", "alt"], [1, "modal-footer", "justify-content-between"], [1, "text-start"], ["class", "mb-1", 4, "ngIf"], [1, "mb-1"], [1, "mb-0", "text-muted", "small"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-view", 3, "click", "disabled"], [1, "me-1"], [1, "btn", "btn-sm", "btn-active", 3, "click"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], ["autoplay", "", "playsinline", "", 1, "w-100", "h-100", 2, "object-fit", "cover"], [1, "w-100", "h-100", 2, "object-fit", "contain", 3, "src", "alt"], [1, "d-flex", "justify-content-center", "gap-3"], [1, "btn", "btn-primary", "btn-lg", "rounded-circle", 2, "width", "70px", "height", "70px", 3, "click"], [1, "bi", "bi-camera-fill", "fs-4"], [1, "bi", "bi-arrow-repeat", "me-2"]], template: function Gallery_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "input", 5, 0);
      \u0275\u0275listener("change", function Gallery_Template_input_change_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNativeCameraCapture($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, Gallery_app_pull_to_refresh_2_Template, 2, 0, "app-pull-to-refresh", 6)(3, Gallery_div_3_Template, 10, 9, "div", 7)(4, Gallery_div_4_Template, 30, 32, "div", 8)(5, Gallery_div_5_Template, 20, 16, "div", 9);
      \u0275\u0275elementStart(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "h5", 14);
      \u0275\u0275element(11, "i", 15);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 16);
      \u0275\u0275listener("click", function Gallery_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeUploadModal());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 17)(16, "div", 18)(17, "div", 19)(18, "label", 20);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.uploadChildId, $event) || (ctx.uploadChildId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(22, "option", 22);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, Gallery_option_25_Template, 2, 3, "option", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19)(27, "label", 20);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.uploadCategory, $event) || (ctx.uploadCategory = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(31, Gallery_option_31_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, Gallery_div_32_Template, 6, 7, "div", 25);
      \u0275\u0275elementStart(33, "div", 26)(34, "label", 20);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "textarea", 27);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_textarea_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.uploadDescription, $event) || (ctx.uploadDescription = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 26)(40, "label", 20);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 28);
      \u0275\u0275listener("click", function Gallery_Template_div_click_43_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r29 = \u0275\u0275reference(45);
        return \u0275\u0275resetView(fileInput_r29.click());
      })("dragover", function Gallery_Template_div_dragover_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.preventDefault());
      })("drop", function Gallery_Template_div_drop_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.preventDefault());
      });
      \u0275\u0275elementStart(44, "input", 29, 1);
      \u0275\u0275listener("change", function Gallery_Template_input_change_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "i", 30);
      \u0275\u0275elementStart(47, "p", 31);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "small", 32);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(53, Gallery_div_53_Template, 6, 5, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 33)(55, "button", 34);
      \u0275\u0275listener("click", function Gallery_Template_button_click_55_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeUploadModal());
      });
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 35);
      \u0275\u0275listener("click", function Gallery_Template_button_click_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.uploadPhotos());
      });
      \u0275\u0275template(59, Gallery_span_59_Template, 1, 0, "span", 36);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(63, Gallery_div_63_Template, 1, 0, "div", 37);
      \u0275\u0275elementStart(64, "div", 10)(65, "div", 38)(66, "div", 12)(67, "div", 13)(68, "h5", 14);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "button", 16);
      \u0275\u0275listener("click", function Gallery_Template_button_click_70_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closePreview());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 39);
      \u0275\u0275template(72, Gallery_div_72_Template, 5, 3, "div", 40)(73, Gallery_img_73_Template, 1, 4, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, Gallery_div_74_Template, 20, 22, "div", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(75, Gallery_div_75_Template, 1, 0, "div", 37);
      \u0275\u0275elementStart(76, "div", 10)(77, "div", 43)(78, "div", 12)(79, "div", 13)(80, "h5", 14);
      \u0275\u0275element(81, "i", 44);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 16);
      \u0275\u0275listener("click", function Gallery_Template_button_click_84_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeEditModal());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 17)(86, "div", 45)(87, "label", 20);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "input", 46);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_input_ngModelChange_90_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editTitle, $event) || (ctx.editTitle = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 45)(93, "label", 20);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "textarea", 47);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_textarea_ngModelChange_96_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editDescription, $event) || (ctx.editDescription = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 45)(99, "label", 20);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_select_ngModelChange_102_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.editCategory, $event) || (ctx.editCategory = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(103, Gallery_option_103_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 33)(105, "button", 48);
      \u0275\u0275listener("click", function Gallery_Template_button_click_105_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeEditModal());
      });
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 49);
      \u0275\u0275listener("click", function Gallery_Template_button_click_108_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePhotoEdit());
      });
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(111, Gallery_div_111_Template, 1, 0, "div", 37);
      \u0275\u0275elementStart(112, "div", 10)(113, "div", 43)(114, "div", 12)(115, "div", 13)(116, "h5", 14);
      \u0275\u0275element(117, "i", 50);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "button", 16);
      \u0275\u0275listener("click", function Gallery_Template_button_click_120_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeTagModal());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div", 51)(122, "p", 52);
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "ng-select", 53);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Gallery_Template_ng_select_ngModelChange_125_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.tagChildIds, $event) || (ctx.tagChildIds = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(127, Gallery_ng_template_127_Template, 1, 2, "ng-template", 54)(128, Gallery_ng_template_128_Template, 1, 2, "ng-template", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 33)(130, "button", 34);
      \u0275\u0275listener("click", function Gallery_Template_button_click_130_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeTagModal());
      });
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 35);
      \u0275\u0275listener("click", function Gallery_Template_button_click_133_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveTags());
      });
      \u0275\u0275template(134, Gallery_span_134_Template, 1, 0, "span", 36);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(138, Gallery_div_138_Template, 1, 0, "div", 37);
      \u0275\u0275elementStart(139, "div", 10)(140, "div", 11)(141, "div", 12)(142, "div", 13)(143, "h5", 14);
      \u0275\u0275element(144, "i", 56);
      \u0275\u0275text(145);
      \u0275\u0275pipe(146, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "button", 16);
      \u0275\u0275listener("click", function Gallery_Template_button_click_147_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeCameraModal());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 17)(149, "div", 18)(150, "div", 26)(151, "div", 57);
      \u0275\u0275template(152, Gallery_video_152_Template, 2, 0, "video", 58)(153, Gallery_img_153_Template, 2, 4, "img", 59);
      \u0275\u0275element(154, "canvas", 60, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 61);
      \u0275\u0275template(157, Gallery_div_157_Template, 3, 0, "div", 62)(158, Gallery_div_158_Template, 5, 3, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275template(159, Gallery_div_159_Template, 9, 9, "div", 63)(160, Gallery_div_160_Template, 6, 5, "div", 63)(161, Gallery_div_161_Template, 6, 7, "div", 25)(162, Gallery_div_162_Template, 6, 7, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 33)(164, "button", 34);
      \u0275\u0275listener("click", function Gallery_Template_button_click_164_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeCameraModal());
      });
      \u0275\u0275text(165);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(167, Gallery_button_167_Template, 5, 7, "button", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(168, Gallery_div_168_Template, 1, 0, "div", 37);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isParent && ctx.showPreviewModal && ctx.selectedPhoto);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showUploadModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showUploadModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 93, "GALLERY.UPLOAD_MODAL_TITLE"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 95, "GALLERY.SELECT_CHILD_OPTIONAL"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.uploadChildId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 97, "GALLERY.NO_CHILD_TAG_LATER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.children);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 99, "GALLERY.CATEGORY"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.uploadCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploadFiles.length <= 1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 101, "GALLERY.DESCRIPTION_OPTIONAL"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.uploadDescription);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 103, "GALLERY.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 105, "GALLERY.SELECT_PHOTOS"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 107, "GALLERY.CLICK_TO_SELECT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 109, "GALLERY.MAX_PHOTO_LIMIT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.uploadFiles.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 111, "GALLERY.CANCEL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.uploading || ctx.uploadFiles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.uploading ? \u0275\u0275pipeBind1(61, 113, "GALLERY.UPLOADING") : \u0275\u0275pipeBind1(62, 115, "GALLERY.UPLOAD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showUploadModal);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showPreviewModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showPreviewModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.selectedPhoto == null ? null : ctx.selectedPhoto.title) || (ctx.selectedPhoto == null ? null : ctx.selectedPhoto.fileName));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loadingFullImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPhoto);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPhoto);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPreviewModal);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showEditModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showEditModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(83, 117, "GALLERY.EDIT_PHOTO"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 119, "GALLERY.TITLE_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.editTitle);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(91, 121, "GALLERY.TITLE_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 123, "GALLERY.DESCRIPTION"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.editDescription);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(97, 125, "GALLERY.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 127, "GALLERY.CATEGORY"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.editCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 129, "GALLERY.CANCEL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 131, "GALLERY.SAVE_CHANGES"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showTagModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showTagModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(119, 133, "GALLERY.TAG_PEOPLE"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 135, "GALLERY.TAG_MODAL_HELP"));
      \u0275\u0275advance(2);
      \u0275\u0275property("items", ctx.children)("multiple", true)("closeOnSelect", false);
      \u0275\u0275twoWayProperty("ngModel", ctx.tagChildIds);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(126, 137, "GALLERY.SELECT_CHILDREN_PLACEHOLDER"))("searchable", true)("clearable", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.tagSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 139, "GALLERY.CANCEL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.tagSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tagSaving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.tagSaving ? \u0275\u0275pipeBind1(136, 141, "GALLERY.SAVING") : \u0275\u0275pipeBind1(137, 143, "GALLERY.SAVE_TAGS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showTagModal);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showCameraModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showCameraModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(146, 145, "GALLERY.CAMERA_MODAL_TITLE"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.uploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(166, 147, "GALLERY.CANCEL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.capturedImage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCameraModal);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    TitlePage,
    TranslateModule,
    ParentChildHeaderSimpleComponent,
    PullToRefreshComponent,
    SkeletonPhotoGridComponent,
    NgSelectModule,
    NgSelectComponent,
    NgOptionTemplateDirective,
    NgLabelTemplateDirective,
    TranslatePipe
  ], styles: ["\n\n.photo-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.photo-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n.photo-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.photo-container[_ngcontent-%COMP%]   .photo-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-container[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.photo-container[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n}\n.photo-container[_ngcontent-%COMP%]:hover   .photo-thumbnail[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.photo-container[_ngcontent-%COMP%]:hover   .photo-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.upload-zone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #f8f9fa;\n  transition: all 0.2s ease;\n}\n.upload-zone[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #6c757d !important;\n}\n.selected-file[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.selected-file[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.title-filter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n}\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n}\n.modal-xl[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: var(--bs-primary);\n}\n.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.4em 0.8em;\n}\n.form-select[_ngcontent-%COMP%], \n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border-color: #dee2e6;\n}\n.form-select[_ngcontent-%COMP%]:focus, \n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);\n}\n.display-1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n.camera-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  background: #000;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.camera-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.captured-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.captured-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.camera-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.camera-controls[_ngcontent-%COMP%]   .btn-capture[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #dc3545;\n  border: 4px solid white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  transition: transform 0.2s ease;\n}\n.camera-controls[_ngcontent-%COMP%]   .btn-capture[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.camera-controls[_ngcontent-%COMP%]   .btn-capture[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n@media (max-width: 768px) {\n  .title-filter[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n  .photo-container[_ngcontent-%COMP%] {\n    aspect-ratio: 4/3;\n  }\n  .camera-container[_ngcontent-%COMP%], \n   .captured-preview[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.badge-galery[_ngcontent-%COMP%] {\n  background: var(--secondary-color) !important;\n  padding: 0.5rem 1.3rem 0.5rem 1rem;\n  border-radius: 2rem;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color) !important;\n}\n.btn-edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info_card[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n  .header-info {\n  margin-bottom: 35px !important;\n}\n.ios-gallery-container[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  min-height: 100vh;\n  padding-bottom: 100px;\n}\n.ios-gallery-header[_ngcontent-%COMP%] {\n  background: #f2f2f7;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.ios-filter-section[_ngcontent-%COMP%] {\n  padding: 0 16px 12px;\n  background: #f2f2f7;\n}\n.ios-filter-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.ios-filter-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.ios-filter-pill[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 8px 16px;\n  border-radius: 20px;\n  border: none;\n  background: #ffffff;\n  color: #1c1c1e;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.ios-filter-pill.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bbaa7 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(125, 211, 192, 0.4);\n}\n.ios-filter-pill[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.ios-gallery-loading[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.ios-skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2px;\n}\n.ios-skeleton-item[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e5ea 25%,\n      #f2f2f7 50%,\n      #e5e5ea 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_ios-shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_ios-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.ios-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.ios-empty-state[_ngcontent-%COMP%]   .ios-empty-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e5e5ea 0%,\n      #d1d1d6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.ios-empty-state[_ngcontent-%COMP%]   .ios-empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #8e8e93;\n}\n.ios-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1c1c1e;\n  margin-bottom: 8px;\n}\n.ios-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #8e8e93;\n  max-width: 280px;\n}\n.ios-photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2px;\n  padding: 0 2px;\n}\n.ios-photo-item[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_ios-fade-in 0.3s ease forwards;\n  opacity: 0;\n}\n.ios-photo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.ios-photo-item[_ngcontent-%COMP%]:active   img[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n}\n.ios-photo-item[_ngcontent-%COMP%]   .ios-photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n}\n.ios-photo-item[_ngcontent-%COMP%]   .ios-photo-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n@keyframes _ngcontent-%COMP%_ios-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.ios-load-more[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.ios-load-more-btn[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  border-radius: 22px;\n  border: none;\n  background: white;\n  color: #007aff;\n  font-size: 15px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease;\n}\n.ios-load-more-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  background: #f2f2f7;\n}\n.ios-photo-count[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  font-size: 13px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.ios-fullscreen-viewer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_ios-viewer-open 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_ios-viewer-open {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ios-viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  padding-top: max(12px, env(safe-area-inset-top));\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n.ios-viewer-close[_ngcontent-%COMP%], \n.ios-viewer-action[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.ios-viewer-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.ios-viewer-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.ios-viewer-close[_ngcontent-%COMP%]:active, \n.ios-viewer-action[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.25);\n  transform: scale(0.9);\n}\n.ios-viewer-close[_ngcontent-%COMP%]:disabled, \n.ios-viewer-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.ios-viewer-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.ios-viewer-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n}\n.ios-viewer-child[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.ios-viewer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.ios-viewer-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  transition: opacity 0.3s ease;\n}\n.ios-viewer-content[_ngcontent-%COMP%]   img.loading[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.ios-viewer-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.ios-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_ios-spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ios-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ios-viewer-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-bottom: max(16px, env(safe-area-inset-bottom));\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\n.ios-footer-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #007aff;\n  padding: 8px 16px;\n  transition: all 0.2s ease;\n}\n.ios-footer-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.ios-footer-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.ios-footer-btn[_ngcontent-%COMP%]:active {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.ios-footer-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n}\n@media (min-width: 768px) {\n  .ios-photo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3px;\n    padding: 0 3px;\n  }\n}\n@media (min-width: 1024px) {\n  .ios-photo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 4px;\n    padding: 0 4px;\n  }\n  .ios-photo-item[_ngcontent-%COMP%] {\n    border-radius: 4px;\n  }\n}\n/*# sourceMappingURL=gallery.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Gallery, [{
    type: Component,
    args: [{ selector: "app-gallery", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TitlePage,
      TranslateModule,
      ParentChildHeaderSimpleComponent,
      PullToRefreshComponent,
      SkeletonPhotoGridComponent,
      NgSelectModule
    ], template: `<!-- Hidden native camera input for mobile devices -->\r
<input type="file" #nativeCameraInput (change)="onNativeCameraCapture($event)" accept="image/*" capture="environment" style="display: none;">\r
\r
<app-pull-to-refresh #pullToRefresh (refresh)="onRefresh()" *ngIf="isParent">\r
</app-pull-to-refresh>\r
\r
<!-- ==================== PARENT VIEW - iPhone Style Gallery ==================== -->\r
<div *ngIf="isParent" class="ios-gallery-container">\r
  <!-- Header -->\r
  <div class="ios-gallery-header mb-4">\r
    <app-parent-child-header-simple [title]="'GALLERY.TITLE' | translate">\r
    </app-parent-child-header-simple>\r
  </div>\r
\r
  <!-- Child Filter Pills -->\r
  <div class="ios-filter-section" *ngIf="children.length > 1">\r
    <div class="ios-filter-scroll">\r
      <button class="ios-filter-pill" [class.active]="selectedChildId === null" (click)="selectedChildId = null; onFilterChange()">\r
        {{ 'GALLERY.ALL' | translate }}\r
      </button>\r
      <button *ngFor="let child of children" class="ios-filter-pill" [class.active]="selectedChildId === child.id" (click)="selectedChildId = child.id ?? null; onFilterChange()">\r
        {{ child.firstName }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="ios-gallery-loading">\r
    <div class="ios-skeleton-grid">\r
      <div *ngFor="let i of [1,2,3,4,5,6,7,8,9]" class="ios-skeleton-item"></div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && photos.length === 0" class="ios-empty-state">\r
    <div class="ios-empty-icon">\r
      <i class="bi bi-photo"></i>\r
    </div>\r
    <h3>{{ 'GALLERY.NO_PHOTOS' | translate }}</h3>\r
    <p>{{ 'GALLERY.NO_PHOTOS_DESC' | translate }}</p>\r
  </div>\r
\r
  <!-- Photo Grid - iPhone Style -->\r
  <div *ngIf="!loading && photos.length > 0" class="ios-photo-grid">\r
    <div *ngFor="let photo of photos; let i = index"\r
         class="ios-photo-item"\r
         (click)="openPreview(photo)"\r
         [style.animation-delay]="(i * 30) + 'ms'">\r
      <img [src]="getPhotoUrl(photo)" [alt]="photo.title || 'Photo'" loading="lazy">\r
      <div class="ios-photo-overlay">\r
        <i class="bi bi-heart-fill" *ngIf="photo.category === 'Memory'"></i>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Load More -->\r
  <div *ngIf="!loading && currentPage < totalPages" class="ios-load-more">\r
    <button class="ios-load-more-btn" (click)="nextPage()">\r
      {{ 'GALLERY.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- Photo Count -->\r
  <div *ngIf="!loading && photos.length > 0" class="ios-photo-count">\r
    {{ totalCount }} {{ totalCount === 1 ? ('GALLERY.PHOTO' | translate) : ('GALLERY.PHOTOS' | translate) }}\r
  </div>\r
</div>\r
\r
<!-- ==================== ADMIN/TEACHER VIEW - Original Design ==================== -->\r
<div class="container mt-4" *ngIf="!isParent">\r
  <app-title-page\r
    [title]="'GALLERY.TITLE' | translate"\r
    [subtitle]="'GALLERY.SUBTITLE_ADMIN' | translate"\r
    icon="bi bi-images"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Filters -->\r
  <div class="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4">\r
    <h4 class="title-filter mb-0">{{ 'GALLERY.PHOTOS' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Child Filter -->\r
      <select class="form-select" style="width: auto;" [(ngModel)]="selectedChildId" (change)="onFilterChange()">\r
        <option [ngValue]="null">{{ 'GALLERY.ALL_CHILDREN' | translate }}</option>\r
        <option *ngFor="let child of children" [ngValue]="child.id">\r
          {{ child.firstName }} {{ child.lastName }}\r
        </option>\r
      </select>\r
\r
      <!-- Category Filter -->\r
      <select class="form-select" style="width: auto;" [(ngModel)]="selectedCategory" (change)="onFilterChange()">\r
        <option value="">{{ 'GALLERY.ALL_CATEGORIES' | translate }}</option>\r
        <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
      </select>\r
\r
      <!-- Clear Filters -->\r
      <button *ngIf="selectedChildId || selectedCategory" class="btn btn-outline-secondary" (click)="clearFilters()">\r
        <i class="bi bi-x-lg"></i> {{ 'GALLERY.CLEAR' | translate }}\r
      </button>\r
\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1">\r
        <button\r
          class="btn btn-icon btn-sm me-1"\r
          [class.bg-light]="viewMode === 'list'"\r
          (click)="setViewMode('list')">\r
          <i class="bi bi-list-ul"></i>\r
        </button>\r
        <button\r
          class="btn btn-icon btn-sm"\r
          [class.bg-light]="viewMode === 'grid'"\r
          (click)="setViewMode('grid')">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading Skeleton -->\r
  <div *ngIf="loading">\r
    <app-skeleton-photo-grid [count]="pageSize"></app-skeleton-photo-grid>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && photos.length === 0" class="text-center py-5">\r
    <i class="bi bi-images display-1 text-muted"></i>\r
    <h5 class="mt-3">{{ 'GALLERY.NO_PHOTOS' | translate }}</h5>\r
    <p class="text-muted">\r
      {{ selectedChildId || selectedCategory ? ('GALLERY.TRY_ADJUSTING_FILTERS' | translate) : ('GALLERY.UPLOAD_SOME_PHOTOS' | translate) }}\r
    </p>\r
    <button *ngIf="canEdit()" class="btn btn-primary" (click)="openUploadModal()">\r
      <i class="bi bi-upload me-2"></i>{{ 'GALLERY.UPLOAD_PHOTOS' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div *ngIf="!loading && viewMode === 'grid' && photos.length > 0" class="row g-4">\r
    <div *ngFor="let photo of photos" class="col-xl-3 col-lg-4 col-md-6">\r
      <div class="card h-100 photo-card">\r
        <div class="photo-container position-relative" (click)="openPreview(photo)">\r
          <img [src]="getPhotoUrl(photo)" [alt]="photo.title || photo.fileName" class="card-img-top photo-thumbnail">\r
          <div class="photo-overlay">\r
            <i class="bi bi-zoom-in"></i>\r
          </div>\r
          <span class="badge bg-primary position-absolute top-0 end-0 m-2 badge-galery">{{ photo.category }}</span>\r
        </div>\r
        <div class="card-body p-3">\r
          <h6 class="card-title text-truncate mb-1">{{ photo.title || photo.fileName }}</h6>\r
          <p class="text-muted small mb-2" *ngIf="hasTaggedPeople(photo)">\r
            <i class="bi bi-person-fill me-1"></i>{{ getTaggedNames(photo) }}\r
          </p>\r
          <p class="text-muted small mb-0">\r
            <i class="bi bi-calendar me-1"></i>{{ formatDate(photo.createdAt) }}\r
          </p>\r
        </div>\r
        <div *ngIf="canEdit()" class="card-footer bg-transparent border-top-0 p-3 pt-0">\r
          <div class="d-flex gap-2">\r
            <button class="btn btn-sm btn-outline-info flex-grow-1" [title]="'GALLERY.TAG_PEOPLE' | translate" (click)="openTagModal(photo); $event.stopPropagation()">\r
              <i class="bi bi-people"></i>\r
            </button>\r
            <button class="btn btn-sm btn-outline-primary flex-grow-1 btn-edit" (click)="openEditModal(photo); $event.stopPropagation()">\r
              <i class="bi bi-pencil"></i>\r
            </button>\r
            <button class="btn btn-sm btn-outline-danger" (click)="deletePhoto(photo); $event.stopPropagation()">\r
              <i class="bi bi-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="!loading && viewMode === 'list' && photos.length > 0" class="card">\r
    <div class="table-responsive">\r
      <table class="table table-hover mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th style="width: 80px;">{{ 'GALLERY.PREVIEW' | translate }}</th>\r
            <th>{{ 'GALLERY.TITLE_FILENAME' | translate }}</th>\r
            <th>{{ 'GALLERY.CHILD' | translate }}</th>\r
            <th>{{ 'GALLERY.CATEGORY' | translate }}</th>\r
            <th>{{ 'GALLERY.SIZE' | translate }}</th>\r
            <th>{{ 'GALLERY.UPLOADED' | translate }}</th>\r
            <th *ngIf="canEdit()" style="width: 120px;">{{ 'GALLERY.ACTIONS' | translate }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let photo of photos" (click)="openPreview(photo)" style="cursor: pointer;">\r
            <td>\r
              <img [src]="getPhotoUrl(photo)" [alt]="photo.title || photo.fileName"\r
                   class="rounded" style="width: 60px; height: 60px; object-fit: cover;">\r
            </td>\r
            <td>\r
              <strong>{{ photo.title || photo.fileName }}</strong>\r
              <p *ngIf="photo.description" class="text-muted small mb-0 text-truncate" style="max-width: 200px;">\r
                {{ photo.description }}\r
              </p>\r
            </td>\r
            <td>{{ getTaggedNames(photo) }}</td>\r
            <td><span class="badge bg-primary">{{ photo.category }}</span></td>\r
            <td>{{ formatFileSize(photo.fileSize) }}</td>\r
            <td>\r
              {{ formatDate(photo.createdAt) }}\r
              <p *ngIf="photo.uploadedByName" class="text-muted small mb-0">{{ 'GALLERY.BY' | translate }} {{ photo.uploadedByName }}</p>\r
            </td>\r
            <td *ngIf="canEdit()" (click)="$event.stopPropagation()">\r
              <div class="d-flex gap-1">\r
                <button class="btn btn-sm btn-outline-primary" (click)="openEditModal(photo)">\r
                  <i class="bi bi-pencil"></i>\r
                </button>\r
                <button class="btn btn-sm btn-outline-danger" (click)="deletePhoto(photo)">\r
                  <i class="bi bi-trash"></i>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="!loading && totalPages > 1" class="d-flex justify-content-center mt-4">\r
    <nav>\r
      <ul class="pagination">\r
        <li class="page-item" [class.disabled]="currentPage === 1">\r
          <button class="page-link" (click)="previousPage()">\r
            <i class="bi bi-chevron-left"></i>\r
          </button>\r
        </li>\r
        <li *ngFor="let page of [].constructor(totalPages); let i = index"\r
            class="page-item" [class.active]="currentPage === i + 1">\r
          <button class="page-link" (click)="goToPage(i + 1)">{{ i + 1 }}</button>\r
        </li>\r
        <li class="page-item" [class.disabled]="currentPage === totalPages">\r
          <button class="page-link" (click)="nextPage()">\r
            <i class="bi bi-chevron-right"></i>\r
          </button>\r
        </li>\r
      </ul>\r
    </nav>\r
  </div>\r
</div>\r
\r
<!-- ==================== iOS-Style Full Screen Photo Viewer (Parent Only) ==================== -->\r
<div *ngIf="isParent && showPreviewModal && selectedPhoto" class="ios-fullscreen-viewer" (click)="closePreview()">\r
  <div class="ios-viewer-header" (click)="$event.stopPropagation()">\r
    <button class="ios-viewer-close" (click)="closePreview()">\r
      <i class="bi bi-x-lg"></i>\r
    </button>\r
    <div class="ios-viewer-title">\r
      <span class="ios-viewer-date">{{ formatDate(selectedPhoto.createdAt) }}</span>\r
      <span class="ios-viewer-child">{{ getTaggedNames(selectedPhoto) }}</span>\r
    </div>\r
    <button class="ios-viewer-action" (click)="downloadPhoto(); $event.stopPropagation()" [disabled]="downloadingImage">\r
      <i class="bi" [class.bi-arrow-down-circle]="!downloadingImage" [class.bi-hourglass-split]="downloadingImage"></i>\r
    </button>\r
  </div>\r
\r
  <div class="ios-viewer-content" (click)="$event.stopPropagation()">\r
    <div *ngIf="loadingFullImage" class="ios-viewer-loading">\r
      <div class="ios-spinner"></div>\r
    </div>\r
    <img [src]="getFullImageUrl(selectedPhoto)" [alt]="selectedPhoto.title || 'Photo'" [class.loading]="loadingFullImage">\r
  </div>\r
\r
  <div class="ios-viewer-footer" (click)="$event.stopPropagation()">\r
    <button class="ios-footer-btn" (click)="downloadPhoto()" [disabled]="downloadingImage || loadingFullImage">\r
      <i class="bi bi-download"></i>\r
      <span>{{ 'GALLERY.SAVE' | translate }}</span>\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Upload Modal -->\r
<div class="modal fade" [class.show]="showUploadModal" [style.display]="showUploadModal ? 'block' : 'none'" tabindex="-1">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-upload me-2"></i>{{ 'GALLERY.UPLOAD_MODAL_TITLE' | translate }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeUploadModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="row g-3">\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'GALLERY.SELECT_CHILD_OPTIONAL' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="uploadChildId">\r
              <option [ngValue]="null">{{ 'GALLERY.NO_CHILD_TAG_LATER' | translate }}</option>\r
              <option *ngFor="let child of children" [ngValue]="child.id">\r
                {{ child.firstName }} {{ child.lastName }}\r
              </option>\r
            </select>\r
          </div>\r
          <div class="col-md-6">\r
            <label class="form-label">{{ 'GALLERY.CATEGORY' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="uploadCategory">\r
              <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
            </select>\r
          </div>\r
          <div class="col-12" *ngIf="uploadFiles.length <= 1">\r
            <label class="form-label">{{ 'GALLERY.TITLE_OPTIONAL' | translate }}</label>\r
            <input type="text" class="form-control" [(ngModel)]="uploadTitle" [placeholder]="'GALLERY.TITLE_PLACEHOLDER' | translate">\r
          </div>\r
          <div class="col-12">\r
            <label class="form-label">{{ 'GALLERY.DESCRIPTION_OPTIONAL' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="uploadDescription" rows="2" [placeholder]="'GALLERY.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
          <div class="col-12">\r
            <label class="form-label">{{ 'GALLERY.SELECT_PHOTOS' | translate }}</label>\r
            <div class="upload-zone p-4 border border-2 border-dashed rounded text-center"\r
                 (click)="fileInput.click()"\r
                 (dragover)="$event.preventDefault()"\r
                 (drop)="$event.preventDefault()">\r
              <input #fileInput type="file" class="d-none" accept="image/*" multiple (change)="onFileSelect($event)">\r
              <i class="bi bi-cloud-upload display-4 text-muted"></i>\r
              <p class="mb-0 mt-2">{{ 'GALLERY.CLICK_TO_SELECT' | translate }}</p>\r
              <small class="text-muted">{{ 'GALLERY.MAX_PHOTO_LIMIT' | translate }}</small>\r
            </div>\r
          </div>\r
          <div class="col-12" *ngIf="uploadFiles.length > 0">\r
            <label class="form-label">{{ 'GALLERY.SELECTED_FILES' | translate }} ({{ uploadFiles.length }})</label>\r
            <div class="d-flex flex-wrap gap-2">\r
              <div *ngFor="let file of uploadFiles; let i = index" class="selected-file d-flex align-items-center bg-light rounded p-2">\r
                <i class="bi bi-image me-2"></i>\r
                <span class="text-truncate" style="max-width: 150px;">{{ file.name }}</span>\r
                <button class="btn btn-sm btn-link text-danger p-0 ms-2" (click)="removeFile(i)">\r
                  <i class="bi bi-x"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeUploadModal()" [disabled]="uploading">{{ 'GALLERY.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn btn-add-global-2 custom-btn-2" (click)="uploadPhotos()" [disabled]="uploading || uploadFiles.length === 0">\r
          <span *ngIf="uploading" class="spinner-border spinner-border-sm me-2"></span>\r
          {{ uploading ? ('GALLERY.UPLOADING' | translate) : ('GALLERY.UPLOAD' | translate) }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div *ngIf="showUploadModal" class="modal-backdrop fade show"></div>\r
\r
<!-- Preview Modal -->\r
<div class="modal fade" [class.show]="showPreviewModal" [style.display]="showPreviewModal ? 'block' : 'none'" tabindex="-1">\r
  <div class="modal-dialog modal-xl modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ selectedPhoto?.title || selectedPhoto?.fileName }}</h5>\r
        <button type="button" class="btn-close" (click)="closePreview()"></button>\r
      </div>\r
      <div class="modal-body text-center p-0 position-relative">\r
        <!-- Loading spinner while fetching full image -->\r
        <div *ngIf="loadingFullImage" class="position-absolute top-50 start-50 translate-middle">\r
          <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">{{ 'GALLERY.LOADING' | translate }}</span>\r
          </div>\r
        </div>\r
        <img *ngIf="selectedPhoto" [src]="getFullImageUrl(selectedPhoto)" [alt]="selectedPhoto.title || selectedPhoto.fileName"\r
             class="img-fluid" style="max-height: 70vh;" [class.opacity-50]="loadingFullImage">\r
      </div>\r
      <div class="modal-footer justify-content-between" *ngIf="selectedPhoto">\r
        <div class="text-start">\r
          <p class="mb-1" *ngIf="hasTaggedPeople(selectedPhoto)"><strong>{{ 'GALLERY.PEOPLE' | translate }}</strong> {{ getTaggedNames(selectedPhoto) }}</p>\r
          <p class="mb-1"><strong>{{ 'GALLERY.CATEGORY' | translate }}:</strong> {{ selectedPhoto.category }}</p>\r
          <p class="mb-1" *ngIf="selectedPhoto.description"><strong>{{ 'GALLERY.DESCRIPTION' | translate }}:</strong> {{ selectedPhoto.description }}</p>\r
          <p class="mb-0 text-muted small">\r
            {{ 'GALLERY.UPLOADED_ON' | translate }} {{ formatDate(selectedPhoto.createdAt) }}\r
            <span *ngIf="selectedPhoto.uploadedByName"> {{ 'GALLERY.BY' | translate }} {{ selectedPhoto.uploadedByName }}</span>\r
          </p>\r
        </div>\r
        <div class="d-flex gap-2 flex-wrap">\r
          <!-- Download/Save Button - Available to all users -->\r
          <button class="btn btn-view" (click)="downloadPhoto()" [disabled]="downloadingImage || loadingFullImage">\r
            <i class="bi" [class.bi-download]="!downloadingImage" [class.bi-hourglass-split]="downloadingImage" class="me-1"></i>\r
            {{ downloadingImage ? ('GALLERY.SAVING' | translate) : ('GALLERY.SAVE' | translate) }}\r
          </button>\r
          <!-- Edit, Tag People & Delete (Admin/Teacher only) -->\r
          <ng-container *ngIf="canEdit()">\r
            <button class="btn btn-sm btn-active" (click)="openTagModal(selectedPhoto)">\r
              <i class="bi bi-people"></i>\r
            </button>\r
            <button class="btn btn-sm btn-edit" (click)="openEditModal(selectedPhoto); closePreview()">\r
              <i class="bi bi-pencil"></i>\r
            </button>\r
            <button class="btn btn-sm btn-remove" (click)="deletePhoto(selectedPhoto)">\r
              <i class="bi bi-trash3"></i>\r
            </button>\r
          </ng-container>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div *ngIf="showPreviewModal" class="modal-backdrop fade show"></div>\r
\r
<!-- Edit Modal -->\r
<div class="modal fade" [class.show]="showEditModal" [style.display]="showEditModal ? 'block' : 'none'" tabindex="-1">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-pencil me-2"></i>{{ 'GALLERY.EDIT_PHOTO' | translate }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeEditModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'GALLERY.TITLE_LABEL' | translate }}</label>\r
          <input type="text" class="form-control" [(ngModel)]="editTitle" [placeholder]="'GALLERY.TITLE_PLACEHOLDER' | translate">\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'GALLERY.DESCRIPTION' | translate }}</label>\r
          <textarea class="form-control" [(ngModel)]="editDescription" rows="3" [placeholder]="'GALLERY.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'GALLERY.CATEGORY' | translate }}</label>\r
          <select class="form-select" [(ngModel)]="editCategory">\r
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
          </select>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeEditModal()">{{ 'GALLERY.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn btn-add-global-2 custom-btn-2" (click)="savePhotoEdit()">{{ 'GALLERY.SAVE_CHANGES' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div *ngIf="showEditModal" class="modal-backdrop fade show"></div>\r
\r
<!-- Tag People Modal -->\r
<div class="modal fade" [class.show]="showTagModal" [style.display]="showTagModal ? 'block' : 'none'" tabindex="-1">\r
  <div class="modal-dialog">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-people me-2"></i>{{ 'GALLERY.TAG_PEOPLE' | translate }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeTagModal()"></button>\r
      </div>\r
      <div class="modal-body" style="overflow: visible;">\r
        <p class="text-muted small mb-2">{{ 'GALLERY.TAG_MODAL_HELP' | translate }}</p>\r
        <ng-select\r
          [items]="children"\r
          [multiple]="true"\r
          [closeOnSelect]="false"\r
          bindLabel="firstName"\r
          bindValue="id"\r
          [(ngModel)]="tagChildIds"\r
          [placeholder]="'GALLERY.SELECT_CHILDREN_PLACEHOLDER' | translate"\r
          [searchable]="true"\r
          [clearable]="true">\r
          <ng-template ng-label-tmp let-item="item">\r
            {{ item.firstName }} {{ item.lastName }}\r
          </ng-template>\r
          <ng-template ng-option-tmp let-item="item">\r
            {{ item.firstName }} {{ item.lastName }}\r
          </ng-template>\r
        </ng-select>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeTagModal()" [disabled]="tagSaving">{{ 'GALLERY.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn btn-add-global-2 custom-btn-2" (click)="saveTags()" [disabled]="tagSaving">\r
          <span *ngIf="tagSaving" class="spinner-border spinner-border-sm me-2"></span>\r
          {{ tagSaving ? ('GALLERY.SAVING' | translate) : ('GALLERY.SAVE_TAGS' | translate) }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div *ngIf="showTagModal" class="modal-backdrop fade show"></div>\r
\r
<!-- Camera Modal -->\r
<div class="modal fade" [class.show]="showCameraModal" [style.display]="showCameraModal ? 'block' : 'none'" tabindex="-1">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-camera me-2"></i>{{ 'GALLERY.CAMERA_MODAL_TITLE' | translate }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeCameraModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="row g-3">\r
          <!-- Camera/Preview Section -->\r
          <div class="col-12">\r
            <div class="camera-container position-relative bg-dark rounded overflow-hidden" style="aspect-ratio: 16/9;">\r
              <!-- Live Video Feed -->\r
              <video #videoElement\r
                     *ngIf="!capturedImage"\r
                     autoplay\r
                     playsinline\r
                     class="w-100 h-100"\r
                     style="object-fit: cover;">\r
              </video>\r
              <!-- Captured Image Preview -->\r
              <img *ngIf="capturedImage"\r
                   [src]="capturedImage"\r
                   [alt]="'GALLERY.CAPTURED_PHOTO_ALT' | translate"\r
                   class="w-100 h-100"\r
                   style="object-fit: contain;">\r
              <!-- Hidden Canvas for Capture -->\r
              <canvas #canvasElement class="d-none"></canvas>\r
            </div>\r
          </div>\r
\r
          <!-- Camera Controls -->\r
          <div class="col-12 text-center">\r
            <div *ngIf="!capturedImage" class="d-flex justify-content-center gap-3">\r
              <button class="btn btn-primary btn-lg rounded-circle" style="width: 70px; height: 70px;" (click)="capturePhoto()">\r
                <i class="bi bi-camera-fill fs-4"></i>\r
              </button>\r
            </div>\r
            <div *ngIf="capturedImage" class="d-flex justify-content-center gap-3">\r
              <button class="btn btn-outline-secondary" (click)="retakePhoto()">\r
                <i class="bi bi-arrow-repeat me-2"></i>{{ 'GALLERY.RETAKE' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
\r
          <!-- Form Fields (only show after capture) -->\r
          <div *ngIf="capturedImage" class="col-md-6">\r
            <label class="form-label">{{ 'GALLERY.SELECT_CHILD_OPTIONAL' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="cameraChildId">\r
              <option [ngValue]="null">{{ 'GALLERY.NO_CHILD_TAG_LATER' | translate }}</option>\r
              <option *ngFor="let child of children" [ngValue]="child.id">\r
                {{ child.firstName }} {{ child.lastName }}\r
              </option>\r
            </select>\r
          </div>\r
          <div *ngIf="capturedImage" class="col-md-6">\r
            <label class="form-label">{{ 'GALLERY.CATEGORY' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="cameraCategory">\r
              <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>\r
            </select>\r
          </div>\r
          <div *ngIf="capturedImage" class="col-12">\r
            <label class="form-label">{{ 'GALLERY.TITLE_OPTIONAL' | translate }}</label>\r
            <input type="text" class="form-control" [(ngModel)]="cameraTitle" [placeholder]="'GALLERY.TITLE_PLACEHOLDER' | translate">\r
          </div>\r
          <div *ngIf="capturedImage" class="col-12">\r
            <label class="form-label">{{ 'GALLERY.DESCRIPTION_OPTIONAL' | translate }}</label>\r
            <textarea class="form-control" [(ngModel)]="cameraDescription" rows="2" [placeholder]="'GALLERY.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeCameraModal()" [disabled]="uploading">{{ 'GALLERY.CANCEL' | translate }}</button>\r
        <button *ngIf="capturedImage"\r
                type="button"\r
                class="action-btn btn-add-global-2 custom-btn-2"\r
                (click)="saveCapturedPhoto()"\r
                [disabled]="uploading">\r
          <span *ngIf="uploading" class="spinner-border spinner-border-sm me-2"></span>\r
          {{ uploading ? ('GALLERY.SAVING' | translate) : ('GALLERY.SAVE_PHOTO' | translate) }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div *ngIf="showCameraModal" class="modal-backdrop fade show"></div>\r
`, styles: ["/* src/app/features/gallery/gallery.scss */\n.photo-card {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.photo-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.modal-footer .btn-sm {\n  width: 36px;\n  height: 36px;\n}\n.photo-container {\n  cursor: pointer;\n  overflow: hidden;\n  aspect-ratio: 1;\n}\n.photo-container .photo-thumbnail {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.photo-container .photo-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.photo-container .photo-overlay i {\n  font-size: 2rem;\n  color: white;\n}\n.photo-container:hover .photo-thumbnail {\n  transform: scale(1.05);\n}\n.photo-container:hover .photo-overlay {\n  opacity: 1;\n}\n.upload-zone {\n  cursor: pointer;\n  background: #f8f9fa;\n  transition: all 0.2s ease;\n}\n.upload-zone:hover {\n  background: #e9ecef;\n  border-color: #6c757d !important;\n}\n.selected-file {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.selected-file .btn-link {\n  line-height: 1;\n}\n.title-filter {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.5);\n}\n.modal-xl .modal-body img {\n  max-width: 100%;\n}\n.pagination .page-item.active .page-link {\n  background-color: var(--bs-primary);\n  border-color: var(--bs-primary);\n}\n.pagination .page-item .page-link {\n  color: var(--bs-primary);\n}\n.pagination .page-item .page-link:hover {\n  background-color: #e9ecef;\n}\n.table tr:hover {\n  background-color: #f8f9fa;\n}\n.table td {\n  vertical-align: middle;\n}\n.badge {\n  font-weight: 500;\n  padding: 0.4em 0.8em;\n}\n.form-select,\n.form-control {\n  border-radius: 0.375rem;\n  border-color: #dee2e6;\n}\n.form-select:focus,\n.form-control:focus {\n  border-color: var(--bs-primary);\n  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);\n}\n.display-1 {\n  font-size: 5rem;\n}\n.camera-container {\n  position: relative;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n  background: #000;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.camera-container video {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.captured-preview {\n  position: relative;\n  width: 100%;\n  max-width: 640px;\n  margin: 0 auto;\n}\n.captured-preview img {\n  width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.camera-controls {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.camera-controls .btn-capture {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #dc3545;\n  border: 4px solid white;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n  transition: transform 0.2s ease;\n}\n.camera-controls .btn-capture:hover {\n  transform: scale(1.1);\n}\n.camera-controls .btn-capture:active {\n  transform: scale(0.95);\n}\n@media (max-width: 768px) {\n  .title-filter {\n    margin-bottom: 1rem;\n    width: 100%;\n  }\n  .photo-container {\n    aspect-ratio: 4/3;\n  }\n  .camera-container,\n  .captured-preview {\n    max-width: 100%;\n  }\n}\n.badge-galery {\n  background: var(--secondary-color) !important;\n  padding: 0.5rem 1.3rem 0.5rem 1rem;\n  border-radius: 2rem;\n}\n.btn-edit {\n  background: var(--primary-color);\n  color: white;\n  border-color: var(--primary-color) !important;\n}\n.btn-edit i {\n  font-size: 14px;\n}\n.parent-detailchild .header-info_card {\n  margin-bottom: 30px;\n}\n::ng-deep .header-info {\n  margin-bottom: 35px !important;\n}\n.ios-gallery-container {\n  background: #f2f2f7;\n  min-height: 100vh;\n  padding-bottom: 100px;\n}\n.ios-gallery-header {\n  background: #f2f2f7;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n.ios-filter-section {\n  padding: 0 16px 12px;\n  background: #f2f2f7;\n}\n.ios-filter-scroll {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.ios-filter-scroll::-webkit-scrollbar {\n  display: none;\n}\n.ios-filter-pill {\n  flex-shrink: 0;\n  padding: 8px 16px;\n  border-radius: 20px;\n  border: none;\n  background: #ffffff;\n  color: #1c1c1e;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.ios-filter-pill.active {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #5bbaa7 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(125, 211, 192, 0.4);\n}\n.ios-filter-pill:active {\n  transform: scale(0.95);\n}\n.ios-gallery-loading {\n  padding: 16px;\n}\n.ios-skeleton-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2px;\n}\n.ios-skeleton-item {\n  aspect-ratio: 1;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e5ea 25%,\n      #f2f2f7 50%,\n      #e5e5ea 75%);\n  background-size: 200% 100%;\n  animation: ios-shimmer 1.5s infinite;\n}\n@keyframes ios-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.ios-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.ios-empty-state .ios-empty-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #e5e5ea 0%,\n      #d1d1d6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.ios-empty-state .ios-empty-icon i {\n  font-size: 36px;\n  color: #8e8e93;\n}\n.ios-empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1c1c1e;\n  margin-bottom: 8px;\n}\n.ios-empty-state p {\n  font-size: 15px;\n  color: #8e8e93;\n  max-width: 280px;\n}\n.ios-photo-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2px;\n  padding: 0 2px;\n}\n.ios-photo-item {\n  aspect-ratio: 1;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  animation: ios-fade-in 0.3s ease forwards;\n  opacity: 0;\n}\n.ios-photo-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.ios-photo-item:active img {\n  transform: scale(0.95);\n}\n.ios-photo-item .ios-photo-overlay {\n  position: absolute;\n  bottom: 6px;\n  left: 6px;\n}\n.ios-photo-item .ios-photo-overlay i {\n  font-size: 14px;\n  color: white;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n@keyframes ios-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.ios-load-more {\n  padding: 20px;\n  text-align: center;\n}\n.ios-load-more-btn {\n  padding: 12px 32px;\n  border-radius: 22px;\n  border: none;\n  background: white;\n  color: #007aff;\n  font-size: 15px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease;\n}\n.ios-load-more-btn:active {\n  transform: scale(0.95);\n  background: #f2f2f7;\n}\n.ios-photo-count {\n  text-align: center;\n  padding: 20px;\n  font-size: 13px;\n  color: #8e8e93;\n  font-weight: 500;\n}\n.ios-fullscreen-viewer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #000;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  animation: ios-viewer-open 0.3s ease;\n}\n@keyframes ios-viewer-open {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.ios-viewer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  padding-top: max(12px, env(safe-area-inset-top));\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n.ios-viewer-close,\n.ios-viewer-action {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.ios-viewer-close i,\n.ios-viewer-action i {\n  font-size: 18px;\n}\n.ios-viewer-close:active,\n.ios-viewer-action:active {\n  background: rgba(255, 255, 255, 0.25);\n  transform: scale(0.9);\n}\n.ios-viewer-close:disabled,\n.ios-viewer-action:disabled {\n  opacity: 0.5;\n}\n.ios-viewer-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.ios-viewer-date {\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n}\n.ios-viewer-child {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.ios-viewer-content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.ios-viewer-content img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  transition: opacity 0.3s ease;\n}\n.ios-viewer-content img.loading {\n  opacity: 0.3;\n}\n.ios-viewer-loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.ios-spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: ios-spin 0.8s linear infinite;\n}\n@keyframes ios-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ios-viewer-footer {\n  padding: 16px;\n  padding-bottom: max(16px, env(safe-area-inset-bottom));\n  background: rgba(0, 0, 0, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n}\n.ios-footer-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #007aff;\n  padding: 8px 16px;\n  transition: all 0.2s ease;\n}\n.ios-footer-btn i {\n  font-size: 22px;\n}\n.ios-footer-btn span {\n  font-size: 11px;\n  font-weight: 500;\n}\n.ios-footer-btn:active {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.ios-footer-btn:disabled {\n  opacity: 0.4;\n}\n@media (min-width: 768px) {\n  .ios-photo-grid {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3px;\n    padding: 0 3px;\n  }\n}\n@media (min-width: 1024px) {\n  .ios-photo-grid {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 4px;\n    padding: 0 4px;\n  }\n  .ios-photo-item {\n    border-radius: 4px;\n  }\n}\n/*# sourceMappingURL=gallery.css.map */\n"] }]
  }], () => [{ type: GalleryService }, { type: ChildrenService }, { type: AuthService }, { type: Router }, { type: PermissionService }, { type: TranslateService }, { type: PageTitleService }, { type: ImageDownloadService }, { type: SimpleToastService }], { videoElement: [{
    type: ViewChild,
    args: ["videoElement"]
  }], canvasElement: [{
    type: ViewChild,
    args: ["canvasElement"]
  }], nativeCameraInput: [{
    type: ViewChild,
    args: ["nativeCameraInput"]
  }], pullToRefresh: [{
    type: ViewChild,
    args: ["pullToRefresh"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Gallery, { className: "Gallery", filePath: "src/app/features/gallery/gallery.ts", lineNumber: 47 });
})();
export {
  Gallery
};
//# sourceMappingURL=chunk-4HDVCQSH.js.map
