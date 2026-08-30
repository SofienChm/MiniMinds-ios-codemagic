import {
  HolidayService
} from "./chunk-EJ66QMTR.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/holiday/add-holiday/add-holiday.component.ts
var _c0 = (a0) => ({ label: a0, url: "/dashboard" });
var _c1 = (a0) => ({ label: a0, url: "/holidays" });
var _c2 = (a0) => ({ label: a0 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0, a1) => ({ label: a0, icon: "bi bi-arrow-left", class: "btn-cancel-global", action: a1 });
var _c5 = (a0) => [a0];
function AddHolidayComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADD_HOLIDAY.HOLIDAY_NAME_REQUIRED"), " ");
  }
}
function AddHolidayComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADD_HOLIDAY.DATE_REQUIRED"), " ");
  }
}
function AddHolidayComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "label", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 30)(7, "option", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 33);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "ADD_HOLIDAY.RECURRENCE_TYPE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "ADD_HOLIDAY.SELECT_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "ADD_HOLIDAY.YEARLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "ADD_HOLIDAY.MONTHLY"));
  }
}
var AddHolidayComponent = class _AddHolidayComponent {
  fb;
  holidayService;
  router;
  holidayForm;
  constructor(fb, holidayService, router) {
    this.fb = fb;
    this.holidayService = holidayService;
    this.router = router;
    this.holidayForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", Validators.maxLength(500)],
      date: ["", Validators.required],
      isRecurring: [false],
      recurrenceType: [""],
      color: ["#FF6B6B", Validators.required]
    });
  }
  onSubmit() {
    if (this.holidayForm.valid) {
      this.holidayService.createHoliday(this.holidayForm.value).subscribe({
        next: () => {
          this.router.navigate(["/holidays"]);
        },
        error: (error) => {
          console.error("Error creating holiday:", error);
        }
      });
    }
  }
  onCancel = () => {
    this.router.navigate(["/holidays"]);
  };
  static \u0275fac = function AddHolidayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddHolidayComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HolidayService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddHolidayComponent, selectors: [["app-add-holiday"]], decls: 59, vars: 64, consts: [[1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], [1, "row", "justify-content-center"], [1, "col-md-12"], [1, "card", "card-general"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "date", 1, "form-label"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-control"], ["for", "color", 1, "form-label"], ["type", "color", "id", "color", "formControlName", "color", 1, "form-control", "form-control-color"], [1, "form-check"], ["type", "checkbox", "id", "isRecurring", "formControlName", "isRecurring", 1, "form-check-input"], ["for", "isRecurring", 1, "form-check-label"], ["class", "row", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], [1, "invalid-feedback"], ["for", "recurrenceType", 1, "form-label"], ["id", "recurrenceType", "formControlName", "recurrenceType", 1, "form-select"], ["value", ""], ["value", "yearly"], ["value", "monthly"]], template: function AddHolidayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "h5", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7)(15, "form", 8);
      \u0275\u0275listener("ngSubmit", function AddHolidayComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "label", 12);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275template(23, AddHolidayComponent_div_23_Template, 3, 3, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "label", 15);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275template(30, AddHolidayComponent_div_30_Template, 3, 3, "div", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 9)(32, "div", 10)(33, "div", 11)(34, "label", 17);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "div", 19);
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275elementStart(42, "label", 21);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(45, AddHolidayComponent_div_45_Template, 16, 12, "div", 22);
      \u0275\u0275elementStart(46, "div", 11)(47, "label", 23);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "textarea", 24);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 25)(53, "button", 26);
      \u0275\u0275listener("click", function AddHolidayComponent_Template_button_click_53_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 27);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_7_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_13_0;
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 21, "ADD_HOLIDAY.TITLE"))("breadcrumbs", \u0275\u0275pureFunction3(55, _c3, \u0275\u0275pureFunction1(49, _c0, \u0275\u0275pipeBind1(3, 23, "HOLIDAYS_PAGE.DASHBOARD")), \u0275\u0275pureFunction1(51, _c1, \u0275\u0275pipeBind1(4, 25, "HOLIDAYS_PAGE.HOLIDAYS")), \u0275\u0275pureFunction1(53, _c2, \u0275\u0275pipeBind1(5, 27, "ADD_HOLIDAY.TITLE"))))("actions", \u0275\u0275pureFunction1(62, _c5, \u0275\u0275pureFunction2(59, _c4, \u0275\u0275pipeBind1(6, 29, "ADD_HOLIDAY.BACK_TO_HOLIDAYS"), ctx.onCancel)));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 31, "ADD_HOLIDAY.ADD_NEW_HOLIDAY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.holidayForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 33, "ADD_HOLIDAY.HOLIDAY_NAME"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx.holidayForm.get("name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.holidayForm.get("name")) == null ? null : tmp_6_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.holidayForm.get("name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.holidayForm.get("name")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 35, "ADD_HOLIDAY.DATE"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx.holidayForm.get("date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.holidayForm.get("date")) == null ? null : tmp_9_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.holidayForm.get("date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.holidayForm.get("date")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(36, 37, "ADD_HOLIDAY.COLOR"), " *");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 39, "ADD_HOLIDAY.RECURRING_HOLIDAY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (tmp_13_0 = ctx.holidayForm.get("isRecurring")) == null ? null : tmp_13_0.value);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 41, "ADD_HOLIDAY.DESCRIPTION"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 43, "ADD_HOLIDAY.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(55, 45, "ADD_HOLIDAY.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.holidayForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 47, "ADD_HOLIDAY.ADD_HOLIDAY_BTN"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n.form-control-color[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 38px;\n  padding: 0.375rem 0.5rem;\n}\n/*# sourceMappingURL=add-holiday.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddHolidayComponent, [{
    type: Component,
    args: [{ selector: "app-add-holiday", standalone: true, imports: [CommonModule, ReactiveFormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'ADD_HOLIDAY.TITLE' | translate"\r
    [breadcrumbs]="[\r
      { label: ('HOLIDAYS_PAGE.DASHBOARD' | translate), url: '/dashboard' },\r
      { label: ('HOLIDAYS_PAGE.HOLIDAYS' | translate), url: '/holidays' },\r
      { label: ('ADD_HOLIDAY.TITLE' | translate) }\r
    ]"\r
    [actions]="[\r
      {\r
        label: ('ADD_HOLIDAY.BACK_TO_HOLIDAYS' | translate),\r
        icon: 'bi bi-arrow-left',\r
        class: 'btn-cancel-global',\r
        action: onCancel\r
      }\r
    ]">\r
  </app-title-page>\r
\r
\r
  <div class="row justify-content-center">\r
    <div class="col-md-12">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5 class="mb-0">{{ 'ADD_HOLIDAY.ADD_NEW_HOLIDAY' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="holidayForm" (ngSubmit)="onSubmit()">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="name" class="form-label">{{ 'ADD_HOLIDAY.HOLIDAY_NAME' | translate }} *</label>\r
                  <input\r
                    type="text"\r
                    class="form-control"\r
                    id="name"\r
                    formControlName="name"\r
                    [class.is-invalid]="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched">\r
                    {{ 'ADD_HOLIDAY.HOLIDAY_NAME_REQUIRED' | translate }}\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="date" class="form-label">{{ 'ADD_HOLIDAY.DATE' | translate }} *</label>\r
                  <input\r
                    type="date"\r
                    class="form-control"\r
                    id="date"\r
                    formControlName="date"\r
                    [class.is-invalid]="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched">\r
                    {{ 'ADD_HOLIDAY.DATE_REQUIRED' | translate }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="color" class="form-label">{{ 'ADD_HOLIDAY.COLOR' | translate }} *</label>\r
                  <input\r
                    type="color"\r
                    class="form-control form-control-color"\r
                    id="color"\r
                    formControlName="color"\r
                  >\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <div class="form-check">\r
                    <input\r
                      class="form-check-input"\r
                      type="checkbox"\r
                      id="isRecurring"\r
                      formControlName="isRecurring"\r
                    >\r
                    <label class="form-check-label" for="isRecurring">\r
                      {{ 'ADD_HOLIDAY.RECURRING_HOLIDAY' | translate }}\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row" *ngIf="holidayForm.get('isRecurring')?.value">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="recurrenceType" class="form-label">{{ 'ADD_HOLIDAY.RECURRENCE_TYPE' | translate }}</label>\r
                  <select class="form-select" id="recurrenceType" formControlName="recurrenceType">\r
                    <option value="">{{ 'ADD_HOLIDAY.SELECT_TYPE' | translate }}</option>\r
                    <option value="yearly">{{ 'ADD_HOLIDAY.YEARLY' | translate }}</option>\r
                    <option value="monthly">{{ 'ADD_HOLIDAY.MONTHLY' | translate }}</option>\r
                  </select>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label for="description" class="form-label">{{ 'ADD_HOLIDAY.DESCRIPTION' | translate }}</label>\r
              <textarea\r
                class="form-control"\r
                id="description"\r
                rows="3"\r
                formControlName="description"\r
                [placeholder]="'ADD_HOLIDAY.DESCRIPTION_PLACEHOLDER' | translate"\r
              ></textarea>\r
            </div>\r
\r
            <div class="d-flex justify-content-end gap-2">\r
              <button type="button" class="custom-btn-2 btn-cancel-2" (click)="onCancel()">\r
                {{ 'ADD_HOLIDAY.CANCEL' | translate }}\r
              </button>\r
              <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="holidayForm.invalid">\r
                {{ 'ADD_HOLIDAY.ADD_HOLIDAY_BTN' | translate }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/holiday/add-holiday/add-holiday.component.scss */\n.form-control-color {\n  width: 60px;\n  height: 38px;\n  padding: 0.375rem 0.5rem;\n}\n/*# sourceMappingURL=add-holiday.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HolidayService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddHolidayComponent, { className: "AddHolidayComponent", filePath: "src/app/features/holiday/add-holiday/add-holiday.component.ts", lineNumber: 16 });
})();
export {
  AddHolidayComponent
};
//# sourceMappingURL=chunk-CZ2ZVZUU.js.map
