import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  CommonModule,
  Location,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";

// src/app/shared/components/parent-child-header/parent-child-header.component.ts
var _c0 = [[["", "headerCard", ""]]];
var _c1 = ["[headerCard]"];
function ParentChildHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function ParentChildHeaderComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleEditClick());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementEnd();
  }
}
function ParentChildHeaderComponent_div_8_p_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateAge(ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].dateOfBirth).years, " years old ");
  }
}
function ParentChildHeaderComponent_div_8_p_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateAge(ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].dateOfBirth).months, " months old ");
  }
}
function ParentChildHeaderComponent_div_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275conditionalCreate(1, ParentChildHeaderComponent_div_8_p_6_Conditional_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(2, ParentChildHeaderComponent_div_8_p_6_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].dateOfBirth).years > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.calculateAge(ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].dateOfBirth).years <= 0 ? 2 : -1);
  }
}
function ParentChildHeaderComponent_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function ParentChildHeaderComponent_div_8_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPrevChild.emit());
    });
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function ParentChildHeaderComponent_div_8_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNextChild.emit());
    });
    \u0275\u0275element(6, "i", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentChildIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.currentChildIndex + 1, "/", ctx_r1.children.length);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentChildIndex === ctx_r1.children.length - 1);
  }
}
function ParentChildHeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "h5", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ParentChildHeaderComponent_div_8_p_6_Template, 3, 2, "p", 17)(7, ParentChildHeaderComponent_div_8_div_7_Template, 7, 4, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getProfilePictureUrl(ctx_r1.children[ctx_r1.currentChildIndex]) || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].firstName, " ", ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.children[ctx_r1.currentChildIndex] == null ? null : ctx_r1.children[ctx_r1.currentChildIndex].dateOfBirth);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.children.length > 1);
  }
}
function ParentChildHeaderComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "label", 30);
    \u0275\u0275listener("click", function ParentChildHeaderComponent_div_9_div_3_Template_label_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const dateInput_r5 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(dateInput_r5.showPicker());
    });
    \u0275\u0275text(3, "Select Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "input", 32, 0);
    \u0275\u0275listener("ngModelChange", function ParentChildHeaderComponent_div_9_div_3_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDateChange.emit($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.selectedDate);
  }
}
function ParentChildHeaderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275projection(2);
    \u0275\u0275template(3, ParentChildHeaderComponent_div_9_div_3_Template, 7, 1, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showDatePicker && !ctx_r1.hasCustomContent);
  }
}
var ParentChildHeaderComponent = class _ParentChildHeaderComponent {
  location;
  title = "";
  children = [];
  currentChildIndex = 0;
  selectedDate = "";
  showDatePicker = true;
  showSettings = false;
  showEdit = false;
  showImages = true;
  hasCustomContent = false;
  onBack = new EventEmitter();
  onPrevChild = new EventEmitter();
  onNextChild = new EventEmitter();
  onDateChange = new EventEmitter();
  onSettings = new EventEmitter();
  onEdit = new EventEmitter();
  handleEditClick() {
    console.log("Edit button clicked in header component");
    this.onEdit.emit();
  }
  get child() {
    return this.children[this.currentChildIndex];
  }
  back() {
    this.location.back();
  }
  constructor(location) {
    this.location = location;
  }
  calculateAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) {
      months--;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return { years: years < 0 ? 0 : years, months: months < 0 ? 0 : months };
  }
  /**
   * Get profile picture URL, handling both file-based and Base64 formats
   */
  getProfilePictureUrl(entity) {
    if (!entity)
      return null;
    if (entity.profilePictureUrl) {
      return this.getFullUrl(entity.profilePictureUrl);
    }
    if (entity.profilePicture) {
      if (entity.profilePicture.startsWith("data:") || entity.profilePicture.startsWith("http")) {
        return entity.profilePicture;
      }
      return this.getFullUrl(entity.profilePicture);
    }
    return null;
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:")) {
      return path;
    }
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  static \u0275fac = function ParentChildHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentChildHeaderComponent)(\u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentChildHeaderComponent, selectors: [["app-parent-child-header"]], inputs: { title: "title", children: "children", currentChildIndex: "currentChildIndex", selectedDate: "selectedDate", showDatePicker: "showDatePicker", showSettings: "showSettings", showEdit: "showEdit", showImages: "showImages", hasCustomContent: "hasCustomContent" }, outputs: { onBack: "onBack", onPrevChild: "onPrevChild", onNextChild: "onNextChild", onDateChange: "onDateChange", onSettings: "onSettings", onEdit: "onEdit" }, ngContentSelectors: _c1, decls: 10, vars: 4, consts: [["dateInput", ""], [1, "parent-detailchild", "font-inter"], [1, "header-info"], [1, "title-icons", "mb-2"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "title-page"], ["class", "page-setting", 3, "click", 4, "ngIf"], ["class", "d-flex image-name row_direction", 4, "ngIf"], ["class", "header-info_card", 4, "ngIf"], [1, "page-setting", 3, "click"], [1, "bi", "bi-pen"], [1, "d-flex", "image-name", "row_direction"], [1, "d-flex", "image-active"], [1, "img-fluid", 3, "src", "alt"], [1, "overflow-hidden"], [1, "name"], ["class", "age", 4, "ngIf"], ["class", "slider-controls", 4, "ngIf"], [1, "age"], [1, "slider-controls"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "mx-2"], [1, "bi", "bi-chevron-right"], [1, "header-info_card"], [1, "card-body"], ["class", "row justify-content-around", 4, "ngIf"], [1, "row", "justify-content-around"], [1, "d-flex"], [1, "form-label", "col-form-label", "col-5", 3, "click"], [1, "col-7", 2, "position", "relative"], ["type", "date", 1, "form-control", 2, "cursor", "pointer", 3, "ngModelChange", "ngModel"]], template: function ParentChildHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275listener("click", function ParentChildHeaderComponent_Template_div_click_3_listener() {
        return ctx.back();
      });
      \u0275\u0275element(4, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ParentChildHeaderComponent_div_7_Template, 2, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ParentChildHeaderComponent_div_8_Template, 8, 6, "div", 8)(9, ParentChildHeaderComponent_div_9_Template, 4, 1, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEdit);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showImages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDatePicker || ctx.hasCustomContent);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   .page-setting[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n  z-index: 99;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   .page-setting[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  pointer-events: none;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -35px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -55px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px 8px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  white-space: nowrap;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  min-width: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=parent-child-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentChildHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-parent-child-header", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="parent-detailchild font-inter">\r
  <div class="header-info">\r
    <div class="title-icons mb-2">\r
      <div class="page-back" (click)="back()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
      <div class="title-page">{{ title }}</div>\r
      <!-- <div class="page-setting" *ngIf="showSettings" (click)="onSettings.emit()">\r
        <i class="bi bi-gear"  ></i>\r
      </div> -->\r
      <div class="page-setting" *ngIf="showEdit" (click)="handleEditClick()">\r
        <i class="bi bi-pen"></i>\r
      </div>\r
    </div>\r
    <div *ngIf="showImages" class="d-flex image-name row_direction">\r
      <div class="d-flex image-active">\r
        <img [src]="getProfilePictureUrl(children[currentChildIndex]) || 'assets/child.png'"\r
             [alt]="children[currentChildIndex]?.firstName"\r
             class="img-fluid">\r
      </div>\r
      <div class="overflow-hidden">\r
        <h5 class="name">{{ children[currentChildIndex]?.firstName }} {{ children[currentChildIndex]?.lastName }}</h5>\r
        <p class="age" *ngIf="children[currentChildIndex]?.dateOfBirth">\r
          @if(calculateAge(children[currentChildIndex]?.dateOfBirth).years > 0){\r
          {{ calculateAge(children[currentChildIndex]?.dateOfBirth).years }} years old\r
          }\r
          @if(calculateAge(children[currentChildIndex]?.dateOfBirth).years <= 0){\r
          {{ calculateAge(children[currentChildIndex]?.dateOfBirth).months }} months old\r
          }\r
        </p>\r
        <div class="slider-controls" *ngIf="children.length > 1">\r
          <button class="btn btn-sm btn-outline-secondary" (click)="onPrevChild.emit()" [disabled]="currentChildIndex === 0">\r
            <i class="bi bi-chevron-left"></i>\r
          </button>\r
          <span class="mx-2">{{ currentChildIndex + 1 }}/{{ children.length }}</span>\r
          <button class="btn btn-sm btn-outline-secondary" (click)="onNextChild.emit()" [disabled]="currentChildIndex === children.length - 1">\r
            <i class="bi bi-chevron-right"></i>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="header-info_card" *ngIf="showDatePicker || hasCustomContent">\r
      <div class="card-body">\r
        <ng-content select="[headerCard]"></ng-content>\r
        <div *ngIf="showDatePicker && !hasCustomContent" class="row justify-content-around">\r
          <div class="d-flex">\r
            <label class="form-label col-form-label col-5" (click)="dateInput.showPicker()">Select Date</label>\r
            <div class="col-7" style="position: relative;">\r
              <input #dateInput type="date" class="form-control" [ngModel]="selectedDate" (ngModelChange)="onDateChange.emit($event)" style="cursor: pointer;">\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/components/parent-child-header/parent-child-header.component.scss */\n.parent-detailchild .header-info {\n  position: relative;\n}\n.parent-detailchild .header-info .title-icons .page-setting {\n  min-width: 44px;\n  min-height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n  z-index: 99;\n}\n.parent-detailchild .header-info .title-icons .page-setting i {\n  font-size: 18px;\n  pointer-events: none;\n}\n.parent-detailchild .header-info .image-name {\n  position: relative;\n  margin-top: -35px;\n}\n.parent-detailchild .header-info .image-name .slider-controls {\n  position: absolute;\n  bottom: -55px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 4px 8px;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  white-space: nowrap;\n}\n.parent-detailchild .header-info .image-name .slider-controls button {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.parent-detailchild .header-info .image-name .slider-controls button i {\n  font-size: 14px;\n}\n.parent-detailchild .header-info .image-name .slider-controls span {\n  font-size: 13px;\n  font-weight: 500;\n  min-width: 40px;\n  text-align: center;\n}\n/*# sourceMappingURL=parent-child-header.component.css.map */\n"] }]
  }], () => [{ type: Location }], { title: [{
    type: Input
  }], children: [{
    type: Input
  }], currentChildIndex: [{
    type: Input
  }], selectedDate: [{
    type: Input
  }], showDatePicker: [{
    type: Input
  }], showSettings: [{
    type: Input
  }], showEdit: [{
    type: Input
  }], showImages: [{
    type: Input
  }], hasCustomContent: [{
    type: Input
  }], onBack: [{
    type: Output
  }], onPrevChild: [{
    type: Output
  }], onNextChild: [{
    type: Output
  }], onDateChange: [{
    type: Output
  }], onSettings: [{
    type: Output
  }], onEdit: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentChildHeaderComponent, { className: "ParentChildHeaderComponent", filePath: "src/app/shared/components/parent-child-header/parent-child-header.component.ts", lineNumber: 14 });
})();

export {
  ParentChildHeaderComponent
};
//# sourceMappingURL=chunk-FEEGDPUH.js.map
