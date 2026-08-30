import {
  CommonModule,
  NgStyle
} from "./chunk-HDGNZI2G.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty,
  ɵɵpureFunction3
} from "./chunk-NYEMFD63.js";

// src/app/shared/components/skeleton/skeleton.component.ts
var _c0 = (a0, a1, a2) => ({ "height.px": a0, "width": a1, "border-radius": a2 });
var SkeletonComponent = class _SkeletonComponent {
  height = 20;
  width = "100%";
  circle = false;
  pulse = false;
  borderRadius = "8px";
  static \u0275fac = function SkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonComponent, selectors: [["app-skeleton"]], inputs: { height: "height", width: "width", circle: "circle", pulse: "pulse", borderRadius: "borderRadius" }, decls: 1, vars: 9, consts: [[1, "skeleton", 3, "ngStyle"]], template: function SkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275classProp("skeleton-circle", ctx.circle)("skeleton-pulse", ctx.pulse);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(5, _c0, ctx.height, ctx.width, ctx.borderRadius));
    }
  }, dependencies: [CommonModule, NgStyle], styles: ["\n\n.skeleton[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0%,\n      #f0f0f0 40%,\n      #e8e8e8 50%,\n      #f0f0f0 60%,\n      #f0f0f0 100%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s ease-in-out infinite;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.skeleton-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n.skeleton-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .skeleton[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        90deg,\n        #f0f0f0 0%,\n        #f0f0f0 40%,\n        #e8e8e8 50%,\n        #f0f0f0 60%,\n        #f0f0f0 100%);\n  }\n}\n/*# sourceMappingURL=skeleton.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{ selector: "app-skeleton", standalone: true, imports: [CommonModule], template: `
    <div
      class="skeleton"
      [class.skeleton-circle]="circle"
      [class.skeleton-pulse]="pulse"
      [ngStyle]="{
        'height.px': height,
        'width': width,
        'border-radius': borderRadius
      }">
    </div>
  `, styles: ["/* angular:styles/component:scss;787d8e7103cd69ce6e7c4e5ba4cba3529e63148afbccfb0a9eb6d3bc670aafbd;C:/laragon/www/miniminds/miniminds-web/src/app/shared/components/skeleton/skeleton.component.ts */\n.skeleton {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0%,\n      #f0f0f0 40%,\n      #e8e8e8 50%,\n      #f0f0f0 60%,\n      #f0f0f0 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s ease-in-out infinite;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.skeleton-circle {\n  border-radius: 50% !important;\n}\n.skeleton-pulse {\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .skeleton {\n    background:\n      linear-gradient(\n        90deg,\n        #f0f0f0 0%,\n        #f0f0f0 40%,\n        #e8e8e8 50%,\n        #f0f0f0 60%,\n        #f0f0f0 100%);\n  }\n}\n/*# sourceMappingURL=skeleton.component.css.map */\n"] }]
  }], null, { height: [{
    type: Input
  }], width: [{
    type: Input
  }], circle: [{
    type: Input
  }], pulse: [{
    type: Input
  }], borderRadius: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonComponent, { className: "SkeletonComponent", filePath: "src/app/shared/components/skeleton/skeleton.component.ts", lineNumber: 87 });
})();

export {
  SkeletonComponent
};
//# sourceMappingURL=chunk-Z37IA3IJ.js.map
