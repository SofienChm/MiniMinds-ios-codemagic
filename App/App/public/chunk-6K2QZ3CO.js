import {
  HolidayService
} from "./chunk-EJ66QMTR.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
import "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/holiday/edit-holiday/edit-holiday.component.ts
function EditHolidayComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOLIDAYS_PAGE.HOLIDAY_NAME_REQUIRED"), " ");
  }
}
function EditHolidayComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "HOLIDAYS_PAGE.DATE_REQUIRED"), " ");
  }
}
function EditHolidayComponent_div_41_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "HOLIDAYS_PAGE.RECURRENCE_TYPE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "HOLIDAYS_PAGE.SELECT_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "HOLIDAYS_PAGE.YEARLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOLIDAYS_PAGE.MONTHLY"));
  }
}
var EditHolidayComponent = class _EditHolidayComponent {
  fb;
  holidayService;
  router;
  route;
  holidayForm;
  holidayId = 0;
  constructor(fb, holidayService, router, route) {
    this.fb = fb;
    this.holidayService = holidayService;
    this.router = router;
    this.route = route;
    this.holidayForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", Validators.maxLength(500)],
      date: ["", Validators.required],
      isRecurring: [false],
      recurrenceType: [""],
      color: ["#FF6B6B", Validators.required]
    });
  }
  ngOnInit() {
    this.holidayId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadHoliday();
  }
  loadHoliday() {
    this.holidayService.getHoliday(this.holidayId).subscribe({
      next: (holiday) => {
        this.holidayForm.patchValue({
          name: holiday.name,
          description: holiday.description,
          date: holiday.date.split("T")[0],
          // Format date for input
          isRecurring: holiday.isRecurring,
          recurrenceType: holiday.recurrenceType,
          color: holiday.color
        });
      },
      error: (error) => {
        console.error("Error loading holiday:", error);
        this.router.navigate(["/holidays"]);
      }
    });
  }
  onSubmit() {
    if (this.holidayForm.valid) {
      this.holidayService.updateHoliday(this.holidayId, this.holidayForm.value).subscribe({
        next: () => {
          this.router.navigate(["/holidays"]);
        },
        error: (error) => {
          console.error("Error updating holiday:", error);
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/holidays"]);
  }
  static \u0275fac = function EditHolidayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditHolidayComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HolidayService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditHolidayComponent, selectors: [["app-edit-holiday"]], decls: 55, vars: 39, consts: [[3, "title"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "date", 1, "form-label"], ["type", "date", "id", "date", "formControlName", "date", 1, "form-control"], ["for", "color", 1, "form-label"], ["type", "color", "id", "color", "formControlName", "color", 1, "form-control", "form-control-color"], [1, "form-check"], ["type", "checkbox", "id", "isRecurring", "formControlName", "isRecurring", 1, "form-check-input"], ["for", "isRecurring", 1, "form-check-label"], ["class", "row", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "rows", "3", "formControlName", "description", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "invalid-feedback"], ["for", "recurrenceType", 1, "form-label"], ["id", "recurrenceType", "formControlName", "recurrenceType", 1, "form-select"], ["value", ""], ["value", "yearly"], ["value", "monthly"]], template: function EditHolidayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-title-page", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "form", 8);
      \u0275\u0275listener("ngSubmit", function EditHolidayComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 13);
      \u0275\u0275template(19, EditHolidayComponent_div_19_Template, 3, 3, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "label", 15);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 16);
      \u0275\u0275template(26, EditHolidayComponent_div_26_Template, 3, 3, "div", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 9)(28, "div", 10)(29, "div", 11)(30, "label", 17);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 10)(35, "div", 11)(36, "div", 19);
      \u0275\u0275element(37, "input", 20);
      \u0275\u0275elementStart(38, "label", 21);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(41, EditHolidayComponent_div_41_Template, 16, 12, "div", 22);
      \u0275\u0275elementStart(42, "div", 11)(43, "label", 23);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "textarea", 24);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 25)(49, "button", 26);
      \u0275\u0275listener("click", function EditHolidayComponent_Template_button_click_49_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_11_0;
      \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 19, "HOLIDAYS_PAGE.EDIT_HOLIDAY"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 21, "HOLIDAYS_PAGE.EDIT_HOLIDAY"));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.holidayForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 23, "HOLIDAYS_PAGE.HOLIDAY_NAME"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx.holidayForm.get("name")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.holidayForm.get("name")) == null ? null : tmp_4_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.holidayForm.get("name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.holidayForm.get("name")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 25, "HOLIDAYS_PAGE.DATE"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx.holidayForm.get("date")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.holidayForm.get("date")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.holidayForm.get("date")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.holidayForm.get("date")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 27, "HOLIDAYS_PAGE.COLOR"), " *");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 29, "HOLIDAYS_PAGE.RECURRING_HOLIDAY"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (tmp_11_0 = ctx.holidayForm.get("isRecurring")) == null ? null : tmp_11_0.value);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 31, "HOLIDAYS_PAGE.DESCRIPTION"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(47, 33, "HOLIDAYS_PAGE.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 35, "HOLIDAYS_PAGE.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.holidayForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 37, "HOLIDAYS_PAGE.UPDATE_HOLIDAY"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n.form-control-color[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 38px;\n  padding: 0.375rem 0.5rem;\n}\n/*# sourceMappingURL=edit-holiday.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditHolidayComponent, [{
    type: Component,
    args: [{ selector: "app-edit-holiday", standalone: true, imports: [CommonModule, ReactiveFormsModule, TitlePage, TranslateModule], template: `<app-title-page [title]="'HOLIDAYS_PAGE.EDIT_HOLIDAY' | translate"></app-title-page>\r
\r
<div class="container-fluid">\r
  <div class="row justify-content-center">\r
    <div class="col-md-8">\r
      <div class="card">\r
        <div class="card-header">\r
          <h5 class="mb-0">{{ 'HOLIDAYS_PAGE.EDIT_HOLIDAY' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <form [formGroup]="holidayForm" (ngSubmit)="onSubmit()">\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="name" class="form-label">{{ 'HOLIDAYS_PAGE.HOLIDAY_NAME' | translate }} *</label>\r
                  <input\r
                    type="text"\r
                    class="form-control"\r
                    id="name"\r
                    formControlName="name"\r
                    [class.is-invalid]="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="holidayForm.get('name')?.invalid && holidayForm.get('name')?.touched">\r
                    {{ 'HOLIDAYS_PAGE.HOLIDAY_NAME_REQUIRED' | translate }}\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="date" class="form-label">{{ 'HOLIDAYS_PAGE.DATE' | translate }} *</label>\r
                  <input\r
                    type="date"\r
                    class="form-control"\r
                    id="date"\r
                    formControlName="date"\r
                    [class.is-invalid]="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="holidayForm.get('date')?.invalid && holidayForm.get('date')?.touched">\r
                    {{ 'HOLIDAYS_PAGE.DATE_REQUIRED' | translate }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="color" class="form-label">{{ 'HOLIDAYS_PAGE.COLOR' | translate }} *</label>\r
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
                      {{ 'HOLIDAYS_PAGE.RECURRING_HOLIDAY' | translate }}\r
                    </label>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row" *ngIf="holidayForm.get('isRecurring')?.value">\r
              <div class="col-md-6">\r
                <div class="mb-3">\r
                  <label for="recurrenceType" class="form-label">{{ 'HOLIDAYS_PAGE.RECURRENCE_TYPE' | translate }}</label>\r
                  <select class="form-select" id="recurrenceType" formControlName="recurrenceType">\r
                    <option value="">{{ 'HOLIDAYS_PAGE.SELECT_TYPE' | translate }}</option>\r
                    <option value="yearly">{{ 'HOLIDAYS_PAGE.YEARLY' | translate }}</option>\r
                    <option value="monthly">{{ 'HOLIDAYS_PAGE.MONTHLY' | translate }}</option>\r
                  </select>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label for="description" class="form-label">{{ 'HOLIDAYS_PAGE.DESCRIPTION' | translate }}</label>\r
              <textarea\r
                class="form-control"\r
                id="description"\r
                rows="3"\r
                formControlName="description"\r
                [placeholder]="'HOLIDAYS_PAGE.DESCRIPTION_PLACEHOLDER' | translate"\r
              ></textarea>\r
            </div>\r
\r
            <div class="d-flex justify-content-end gap-2">\r
              <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
                {{ 'HOLIDAYS_PAGE.CANCEL' | translate }}\r
              </button>\r
              <button type="submit" class="btn btn-primary" [disabled]="holidayForm.invalid">\r
                {{ 'HOLIDAYS_PAGE.UPDATE_HOLIDAY' | translate }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/holiday/edit-holiday/edit-holiday.component.scss */\n.form-control-color {\n  width: 60px;\n  height: 38px;\n  padding: 0.375rem 0.5rem;\n}\n/*# sourceMappingURL=edit-holiday.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: HolidayService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditHolidayComponent, { className: "EditHolidayComponent", filePath: "src/app/features/holiday/edit-holiday/edit-holiday.component.ts", lineNumber: 17 });
})();
export {
  EditHolidayComponent
};
//# sourceMappingURL=chunk-6K2QZ3CO.js.map
