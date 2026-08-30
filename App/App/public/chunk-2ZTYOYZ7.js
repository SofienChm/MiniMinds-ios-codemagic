import {
  ClassesService
} from "./chunk-J7YF57MV.js";
import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
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
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/classes/add-class/add-class.component.ts
function AddClassComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const educator_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", educator_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", educator_r1.firstName, " ", educator_r1.lastName, " (", educator_r1.email, ") ");
  }
}
function AddClassComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
var AddClassComponent = class _AddClassComponent {
  classesService;
  educatorService;
  router;
  translate;
  pageTitleService;
  simpleToastService;
  classData = {
    name: "",
    description: "",
    capacity: 20,
    ageGroupMin: 2,
    ageGroupMax: 5,
    schedule: "",
    isActive: true
  };
  educators = [];
  saving = false;
  breadcrumbs = [];
  langChangeSub;
  constructor(classesService, educatorService, router, translate, pageTitleService, simpleToastService) {
    this.classesService = classesService;
    this.educatorService = educatorService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("CLASSES.ADD_CLASS"));
    this.setupBreadcrumbs();
    this.loadEducators();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("CLASSES.ADD_CLASS"));
      this.setupBreadcrumbs();
    });
  }
  loadEducators() {
    this.educatorService.loadEducators().subscribe({
      next: (educators) => this.educators = educators,
      error: (error) => console.error("Error loading educators:", error)
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("CLASSES.TITLE"), url: "/classes" },
      { label: this.translate.instant("CLASSES.ADD_CLASS") }
    ];
  }
  onSubmit() {
    this.saving = true;
    this.classesService.createClass(this.classData).subscribe({
      next: () => {
        this.simpleToastService.success(this.translate.instant("CLASSES.CREATE_SUCCESS"));
        setTimeout(() => {
          this.router.navigate(["/classes"]);
        }, 200);
      },
      error: (error) => {
        console.error("Error creating class:", error);
        this.saving = false;
        this.simpleToastService.error(this.translate.instant("CLASSES.CREATE_ERROR"));
      }
    });
  }
  cancel() {
    this.router.navigate(["/classes"]);
  }
  static \u0275fac = function AddClassComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddClassComponent)(\u0275\u0275directiveInject(ClassesService), \u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddClassComponent, selectors: [["app-add-class"]], decls: 72, vars: 67, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-plus-square", 3, "title", "subtitle", "breadcrumbs"], [1, "card", "card-general"], [1, "card-header"], [1, "card-body"], [3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "capacity", "required", "", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "ageGroupMin", "required", "", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "ageGroupMax", "required", "", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-12", "mb-3"], ["name", "teacherId", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-text", "text-muted"], [1, "mb-3"], ["type", "text", "name", "schedule", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "description", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-check", "mb-3"], ["type", "checkbox", "name", "isActive", "id", "isActive", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isActive", 1, "form-check-label"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["type", "button", 1, "btn", "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddClassComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "h5");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "form", 5);
      \u0275\u0275listener("ngSubmit", function AddClassComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.name, $event) || (ctx.classData.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.capacity, $event) || (ctx.classData.capacity = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "div", 7)(24, "label", 8);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.ageGroupMin, $event) || (ctx.classData.ageGroupMin = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "label", 8);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.ageGroupMax, $event) || (ctx.classData.ageGroupMax = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 6)(34, "div", 13)(35, "label", 8);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_select_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.teacherId, $event) || (ctx.classData.teacherId = $event);
        return $event;
      });
      \u0275\u0275elementStart(39, "option", 15);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, AddClassComponent_option_42_Template, 2, 4, "option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "small", 17);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 18)(47, "label", 8);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 19);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.schedule, $event) || (ctx.classData.schedule = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18)(53, "label", 8);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "textarea", 20);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_textarea_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.description, $event) || (ctx.classData.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 21)(59, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function AddClassComponent_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classData.isActive, $event) || (ctx.classData.isActive = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "label", 23);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 24)(64, "button", 25);
      \u0275\u0275template(65, AddClassComponent_span_65_Template, 1, 0, "span", 26);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "button", 27);
      \u0275\u0275listener("click", function AddClassComponent_Template_button_click_69_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 31, "CLASSES.ADD_NEW_CLASS"))("subtitle", \u0275\u0275pipeBind1(3, 33, "CLASSES.ADD_SUBTITLE"))("breadcrumbs", ctx.breadcrumbs);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 35, "CLASSES.CLASS_INFORMATION"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 37, "CLASSES.CLASS_NAME"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 39, "CLASSES.CAPACITY"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.capacity);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 41, "CLASSES.AGE_GROUP_MIN"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.ageGroupMin);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 43, "CLASSES.AGE_GROUP_MAX"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.ageGroupMax);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 45, "CLASSES.ASSIGN_TEACHER_OPTIONAL"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.teacherId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 47, "CLASSES.NO_TEACHER_ASSIGNED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.educators);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 49, "CLASSES.TEACHER_HINT_ADD"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 51, "CLASSES.SCHEDULE"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.schedule);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 53, "CLASSES.SCHEDULE_PLACEHOLDER"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 55, "CLASSES.DESCRIPTION"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.description);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 57, "CLASSES.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.classData.isActive);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 59, "CLASSES.ACTIVE"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(67, 61, "CLASSES.CREATING") : \u0275\u0275pipeBind1(68, 63, "CLASSES.CREATE_CLASS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 65, "CLASSES.CANCEL"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n/*# sourceMappingURL=add-class.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddClassComponent, [{
    type: Component,
    args: [{ selector: "app-add-class", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'CLASSES.ADD_NEW_CLASS' | translate"\r
    [subtitle]="'CLASSES.ADD_SUBTITLE' | translate"\r
    icon="bi bi-plus-square"\r
    [breadcrumbs]="breadcrumbs">\r
  </app-title-page>\r
\r
  <div class="card card-general">\r
    <div class="card-header">\r
      <h5>{{ 'CLASSES.CLASS_INFORMATION' | translate }}</h5>\r
    </div>\r
    <div class="card-body">\r
      <form (ngSubmit)="onSubmit()">\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'CLASSES.CLASS_NAME' | translate }} *</label>\r
            <input type="text" class="form-control" [(ngModel)]="classData.name" name="name" required>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'CLASSES.CAPACITY' | translate }} *</label>\r
            <input type="number" class="form-control" [(ngModel)]="classData.capacity" name="capacity" required min="1">\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'CLASSES.AGE_GROUP_MIN' | translate }} *</label>\r
            <input type="number" class="form-control" [(ngModel)]="classData.ageGroupMin" name="ageGroupMin" required min="0">\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <label class="form-label">{{ 'CLASSES.AGE_GROUP_MAX' | translate }} *</label>\r
            <input type="number" class="form-control" [(ngModel)]="classData.ageGroupMax" name="ageGroupMax" required min="0">\r
          </div>\r
        </div>\r
        <div class="row">\r
          <div class="col-md-12 mb-3">\r
            <label class="form-label">{{ 'CLASSES.ASSIGN_TEACHER_OPTIONAL' | translate }}</label>\r
            <select class="form-select" [(ngModel)]="classData.teacherId" name="teacherId">\r
              <option [ngValue]="null">{{ 'CLASSES.NO_TEACHER_ASSIGNED' | translate }}</option>\r
              <option *ngFor="let educator of educators" [ngValue]="educator.id">\r
                {{ educator.firstName }} {{ educator.lastName }} ({{ educator.email }})\r
              </option>\r
            </select>\r
            <small class="form-text text-muted">{{ 'CLASSES.TEACHER_HINT_ADD' | translate }}</small>\r
          </div>\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'CLASSES.SCHEDULE' | translate }}</label>\r
          <input type="text" class="form-control" [(ngModel)]="classData.schedule" name="schedule" [placeholder]="'CLASSES.SCHEDULE_PLACEHOLDER' | translate">\r
        </div>\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'CLASSES.DESCRIPTION' | translate }}</label>\r
          <textarea class="form-control" [(ngModel)]="classData.description" name="description" rows="3" [placeholder]="'CLASSES.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
        </div>\r
        <div class="form-check mb-3">\r
          <input class="form-check-input" type="checkbox" [(ngModel)]="classData.isActive" name="isActive" id="isActive">\r
          <label class="form-check-label" for="isActive">{{ 'CLASSES.ACTIVE' | translate }}</label>\r
        </div>\r
        <div class="d-flex gap-2">\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ saving ? ('CLASSES.CREATING' | translate) : ('CLASSES.CREATE_CLASS' | translate) }}\r
          </button>\r
          <button type="button" class="btn custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">{{ 'CLASSES.CANCEL' | translate }}</button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/classes/add-class/add-class.component.scss */\n/*# sourceMappingURL=add-class.component.css.map */\n"] }]
  }], () => [{ type: ClassesService }, { type: EducatorService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddClassComponent, { className: "AddClassComponent", filePath: "src/app/features/classes/add-class/add-class.component.ts", lineNumber: 22 });
})();
export {
  AddClassComponent
};
//# sourceMappingURL=chunk-2ZTYOYZ7.js.map
