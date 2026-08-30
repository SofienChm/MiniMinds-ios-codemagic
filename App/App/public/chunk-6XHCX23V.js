import {
  FormsModule
} from "./chunk-NEGRQ2LF.js";
import {
  CommonModule,
  Location
} from "./chunk-HDGNZI2G.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";

// src/app/shared/components/parent-child-header-simple/parent-child-header-simple.component.ts
var _c0 = ["*"];
var ParentChildHeaderSimpleComponent = class _ParentChildHeaderSimpleComponent {
  location;
  title = "";
  showEdit = false;
  onBack = new EventEmitter();
  onDateChange = new EventEmitter();
  onEdit = new EventEmitter();
  back() {
    this.location.back();
  }
  constructor(location) {
    this.location = location;
  }
  static \u0275fac = function ParentChildHeaderSimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentChildHeaderSimpleComponent)(\u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentChildHeaderSimpleComponent, selectors: [["app-parent-child-header-simple"]], inputs: { title: "title", showEdit: "showEdit" }, outputs: { onBack: "onBack", onDateChange: "onDateChange", onEdit: "onEdit" }, ngContentSelectors: _c0, decls: 11, vars: 1, consts: [[1, "parent-detailchild", "font-inter"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex", "image-name", "row_direction", "flex-grow-1"], [1, "overflow-hidden"], [1, "name", "simple"], [1, "header-actions"]], template: function ParentChildHeaderSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275domListener("click", function ParentChildHeaderSimpleComponent_Template_div_click_3_listener() {
        return ctx.back();
      });
      \u0275\u0275domElement(4, "i", 4);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(5, "div", 5)(6, "div", 6)(7, "h5", 7);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "div", 8);
      \u0275\u0275projection(10);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.title, " ");
    }
  }, dependencies: [CommonModule, FormsModule], styles: ["\n\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px !important;\n  padding-top: env(safe-area-inset-top, 0px);\n}\n.header-info[_ngcontent-%COMP%]   .name.simple[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.header-info[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=parent-child-header-simple.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentChildHeaderSimpleComponent, [{
    type: Component,
    args: [{ selector: "app-parent-child-header-simple", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="parent-detailchild font-inter">\r\n <div class="header-info">\r\n        <div class="title-icons">\r\n          <div class="page-back" (click)="back()">\r\n            <i class="bi bi-arrow-left"></i>\r\n          </div>\r\n        </div>\r\n        <div class="d-flex image-name row_direction flex-grow-1">\r\n          <div class="overflow-hidden">\r\n            <h5 class="name simple"> {{ title }} </h5>\r\n          </div>\r\n        </div>\r\n        <div class="header-actions">\r\n          <ng-content></ng-content>\r\n        </div>\r\n      </div>\r\n</div>\r\n', styles: ["/* src/app/shared/components/parent-child-header-simple/parent-child-header-simple.component.scss */\n.header-info {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px !important;\n  padding-top: env(safe-area-inset-top, 0px);\n}\n.header-info .name.simple {\n  padding-bottom: 20px;\n}\n.header-info .header-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=parent-child-header-simple.component.css.map */\n"] }]
  }], () => [{ type: Location }], { title: [{
    type: Input
  }], showEdit: [{
    type: Input
  }], onBack: [{
    type: Output
  }], onDateChange: [{
    type: Output
  }], onEdit: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentChildHeaderSimpleComponent, { className: "ParentChildHeaderSimpleComponent", filePath: "src/app/shared/components/parent-child-header-simple/parent-child-header-simple.component.ts", lineNumber: 13 });
})();

export {
  ParentChildHeaderSimpleComponent
};
//# sourceMappingURL=chunk-6XHCX23V.js.map
