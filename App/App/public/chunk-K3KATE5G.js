import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  EventService
} from "./chunk-CF5UU2UU.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/event/add-event/add-event.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
function AddEvent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function AddEvent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementStart(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r3.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function AddEvent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function AddEvent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function AddEvent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("price"), " ");
  }
}
function AddEvent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("capacity"), " ");
  }
}
function AddEvent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("ageFrom"), " ");
  }
}
function AddEvent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("ageTo"), " ");
  }
}
function AddEvent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventDate"), " ");
  }
}
function AddEvent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventTime"), " ");
  }
}
function AddEvent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("place"), " ");
  }
}
function AddEvent_div_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "GLOBAL.UPLOAD_PHOTO"));
  }
}
function AddEvent_img_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function AddEvent_button_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AddEvent_button_152_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function AddEvent_span_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 66);
  }
}
function AddEvent_i_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 67);
  }
}
var AddEvent = class _AddEvent {
  fb;
  eventService;
  router;
  translate;
  pageTitleService;
  fileInput;
  langChangeSub;
  saving = false;
  imagePreview = null;
  eventForm;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  eventTypes = [];
  constructor(fb, eventService, router, translate, pageTitleService) {
    this.fb = fb;
    this.eventService = eventService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("ADD_EVENT.TITLE"));
    this.updateTranslatedContent();
    this.initForm();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translate.instant("ADD_EVENT.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.initBreadcrumbs();
    this.initEventTypes();
    this.initTitleActions();
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-2",
        action: () => this.back()
      }
    ];
  }
  back() {
    this.router.navigate(["/events"]);
  }
  initEventTypes() {
    this.eventTypes = [
      { value: "Workshop", label: this.translate.instant("ADD_EVENT.TYPE_WORKSHOP"), icon: "bi-tools" },
      { value: "Party", label: this.translate.instant("ADD_EVENT.TYPE_PARTY"), icon: "bi-balloon" },
      { value: "Educational", label: this.translate.instant("ADD_EVENT.TYPE_EDUCATIONAL"), icon: "bi-book" },
      { value: "Sports", label: this.translate.instant("ADD_EVENT.TYPE_SPORTS"), icon: "bi-dribbble" },
      { value: "Arts & Crafts", label: this.translate.instant("ADD_EVENT.TYPE_ARTS"), icon: "bi-palette" },
      { value: "Music", label: this.translate.instant("ADD_EVENT.TYPE_MUSIC"), icon: "bi-music-note-beamed" },
      { value: "Outdoor", label: this.translate.instant("ADD_EVENT.TYPE_OUTDOOR"), icon: "bi-tree" },
      { value: "Special Event", label: this.translate.instant("ADD_EVENT.TYPE_SPECIAL"), icon: "bi-star" }
    ];
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EVENTS"), url: "/events" },
      { label: this.translate.instant("BREADCRUMBS.ADD_EVENT") }
    ];
  }
  initForm() {
    this.eventForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      type: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(1e3)]],
      includeAllChildren: [false],
      price: [0, [Validators.min(0)]],
      capacity: [1, [Validators.required, Validators.min(1)]],
      ageFrom: [0, [Validators.required, Validators.min(0), Validators.max(18)]],
      ageTo: [18, [Validators.required, Validators.min(0), Validators.max(18)]],
      eventDate: ["", [Validators.required]],
      eventTime: ["", [Validators.required]],
      place: ["", [Validators.maxLength(200)]],
      image: [""]
    });
  }
  onIncludeAllChildrenChange() {
    const includeAll = this.eventForm.get("includeAllChildren")?.value;
    const capacityControl = this.eventForm.get("capacity");
    const ageFromControl = this.eventForm.get("ageFrom");
    const ageToControl = this.eventForm.get("ageTo");
    if (includeAll) {
      capacityControl?.disable();
      ageFromControl?.disable();
      ageToControl?.disable();
      capacityControl?.clearValidators();
      ageFromControl?.clearValidators();
      ageToControl?.clearValidators();
    } else {
      capacityControl?.enable();
      ageFromControl?.enable();
      ageToControl?.enable();
      capacityControl?.setValidators([Validators.required, Validators.min(1)]);
      ageFromControl?.setValidators([Validators.required, Validators.min(0), Validators.max(18)]);
      ageToControl?.setValidators([Validators.required, Validators.min(0), Validators.max(18)]);
    }
    capacityControl?.updateValueAndValidity();
    ageFromControl?.updateValueAndValidity();
    ageToControl?.updateValueAndValidity();
  }
  saveEvent() {
    if (this.eventForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const formValue = this.eventForm.getRawValue();
    const combinedDateTime = `${formValue.eventDate}T${formValue.eventTime}:00`;
    const eventData = {
      name: formValue.name,
      type: formValue.type,
      description: formValue.description,
      price: formValue.price,
      capacity: formValue.includeAllChildren ? 0 : formValue.capacity,
      ageFrom: formValue.includeAllChildren ? 0 : formValue.ageFrom,
      ageTo: formValue.includeAllChildren ? 99 : formValue.ageTo,
      time: combinedDateTime,
      place: formValue.place,
      image: formValue.image,
      includeAllChildren: formValue.includeAllChildren
    };
    this.eventService.addEvent(eventData).subscribe({
      next: () => {
        this.saving = false;
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
        this.router.navigate(["/events"]);
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        const sanitizedStatus = typeof error?.status === "number" ? error.status : 0;
        const sanitizedStatusText = this.sanitizeLogMessage(error?.statusText);
        console.error(`Failed to create event: status=${sanitizedStatus}, statusText=${sanitizedStatusText}, message=${sanitizedMessage}`);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("MESSAGES.EVENT_CREATE_ERROR")
        });
      }
    });
  }
  sanitizeLogMessage(input) {
    if (typeof input !== "string") {
      return "Unknown";
    }
    return input.substring(0, 200).replace(/[\r\n\t]/g, " ").replace(/[^\x20-\x7E]/g, "");
  }
  cancel() {
    if (this.eventForm.dirty) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("MESSAGES.UNSAVED_CHANGES"),
        text: this.translate.instant("MESSAGES.UNSAVED_CHANGES_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: this.translate.instant("MESSAGES.YES_LEAVE"),
        cancelButtonText: this.translate.instant("MESSAGES.STAY")
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/events"]);
        }
      });
    } else {
      this.router.navigate(["/events"]);
    }
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.INVALID_FILE_TYPE"),
        text: this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES")
      });
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.FILE_TOO_LARGE"),
        text: this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() })
      });
      this.resetFileInput();
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string" && result.startsWith("data:image/")) {
        this.imagePreview = result;
        this.eventForm.patchValue({ image: result });
      } else {
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("MESSAGES.IMAGE_READ_ERROR")
        });
        this.resetFileInput();
      }
    };
    reader.onerror = () => {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("MESSAGES.ERROR"),
        text: this.translate.instant("MESSAGES.IMAGE_READ_ERROR")
      });
      this.resetFileInput();
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.resetFileInput();
  }
  resetFileInput() {
    this.imagePreview = null;
    this.eventForm.patchValue({ image: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.eventForm.controls).forEach((control) => {
      control.markAsTouched();
    });
    setTimeout(() => {
      const firstInvalid = document.querySelector(".is-invalid");
      if (firstInvalid) {
        const formGroup = firstInvalid.closest(".form-group");
        (formGroup || firstInvalid).scrollIntoView({ behavior: "smooth", block: "center" });
        if (firstInvalid.tagName === "INPUT" || firstInvalid.tagName === "TEXTAREA") {
          firstInvalid.focus();
        }
      }
    });
  }
  get formControls() {
    return this.eventForm.controls;
  }
  dismissKeyboard(event) {
    const target = event.target;
    const tag = target.tagName;
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && !target.closest("ng-select")) {
      document.activeElement?.blur();
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.eventForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.eventForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return this.translate.instant("VALIDATION.MIN_LENGTH", { length: minLength });
    }
    if (field.errors["maxlength"]) {
      const maxLength = field.errors["maxlength"].requiredLength;
      return this.translate.instant("VALIDATION.MAX_LENGTH", { length: maxLength });
    }
    if (field.errors["min"]) {
      return this.translate.instant("VALIDATION.MIN_VALUE", { value: field.errors["min"].min });
    }
    if (field.errors["max"]) {
      return this.translate.instant("VALIDATION.MAX_VALUE", { value: field.errors["max"].max });
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  static \u0275fac = function AddEvent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEvent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEvent, selectors: [["app-add-event"]], viewQuery: function AddEvent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, decls: 167, vars: 159, consts: [["fileInput", ""], [1, "add-event-container", 3, "click"], [1, "container-fluid", "mt-4", "mb-4"], ["icon", "bi bi-calendar-plus", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-calendar-event"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-bookmark", "input-icon"], ["type", "text", "formControlName", "name", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "bi", "bi-tag", "input-icon"], ["formControlName", "type", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-text-paragraph", "input-icon"], ["formControlName", "description", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "form-check"], ["type", "checkbox", "id", "includeAllChildren", "formControlName", "includeAllChildren", 1, "form-check-input", 3, "change"], ["for", "includeAllChildren", 1, "form-check-label"], [1, "bi", "bi-people-fill", "me-2"], [1, "form-hint", "text-muted"], [1, "bi", "bi-info-circle"], [1, "bi", "bi-currency-dollar", "input-icon"], ["type", "number", "formControlName", "price", "min", "0", "step", "0.01", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-people", "input-icon"], ["type", "number", "formControlName", "capacity", "min", "1", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-person-dash", "input-icon"], ["type", "number", "formControlName", "ageFrom", "min", "0", "max", "18", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-person-plus", "input-icon"], ["type", "number", "formControlName", "ageTo", "min", "0", "max", "18", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "eventDate", 1, "form-input"], [1, "bi", "bi-clock", "input-icon"], ["type", "time", "formControlName", "eventTime", 1, "form-input"], [1, "bi", "bi-building", "input-icon"], ["type", "text", "formControlName", "place", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "eventImage", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "eventImage", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddEvent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function AddEvent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dismissKeyboard($event));
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275element(2, "app-title-page", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementStart(5, "div", 4)(6, "form", 5);
      \u0275\u0275listener("ngSubmit", function AddEvent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveEvent());
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementStart(10, "h4");
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "label", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12);
      \u0275\u0275element(20, "i", 13)(21, "input", 14);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, AddEvent_div_23_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "label", 11);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12);
      \u0275\u0275element(30, "i", 16);
      \u0275\u0275elementStart(31, "ng-select", 17);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275template(33, AddEvent_ng_template_33_Template, 4, 4, "ng-template", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, AddEvent_div_34_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 19)(36, "label", 11);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 12);
      \u0275\u0275element(41, "i", 20)(42, "textarea", 21);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, AddEvent_div_44_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 22)(46, "div", 23)(47, "input", 24);
      \u0275\u0275listener("change", function AddEvent_Template_input_change_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onIncludeAllChildrenChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "label", 25);
      \u0275\u0275element(49, "i", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "small", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 6)(56, "div", 7);
      \u0275\u0275element(57, "i", 28);
      \u0275\u0275elementStart(58, "h4");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 10)(63, "label", 11);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 12);
      \u0275\u0275element(67, "i", 29)(68, "input", 30);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, AddEvent_div_70_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 10)(72, "label", 11);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 12);
      \u0275\u0275element(77, "i", 31)(78, "input", 32);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, AddEvent_div_80_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 10)(82, "label", 11);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 12);
      \u0275\u0275element(87, "i", 33)(88, "input", 34);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(90, AddEvent_div_90_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 10)(92, "label", 11);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 12);
      \u0275\u0275element(97, "i", 35)(98, "input", 36);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(100, AddEvent_div_100_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div", 6)(102, "div", 7);
      \u0275\u0275element(103, "i", 37);
      \u0275\u0275elementStart(104, "h4");
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 9)(108, "div", 10)(109, "label", 11);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 12);
      \u0275\u0275element(114, "i", 38)(115, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(116, AddEvent_div_116_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 10)(118, "label", 11);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 12);
      \u0275\u0275element(123, "i", 40)(124, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(125, AddEvent_div_125_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 22)(127, "label", 11);
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 12);
      \u0275\u0275element(131, "i", 42)(132, "input", 43);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(134, AddEvent_div_134_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "div", 6)(136, "div", 7);
      \u0275\u0275element(137, "i", 44);
      \u0275\u0275elementStart(138, "h4");
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 9)(142, "div", 10)(143, "label", 11);
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 45)(147, "input", 46, 0);
      \u0275\u0275listener("change", function AddEvent_Template_input_change_147_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "label", 47);
      \u0275\u0275template(150, AddEvent_div_150_Template, 5, 3, "div", 48)(151, AddEvent_img_151_Template, 2, 4, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(152, AddEvent_button_152_Template, 4, 3, "button", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "small", 51);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(156, "div", 52)(157, "button", 53);
      \u0275\u0275listener("click", function AddEvent_Template_button_click_157_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275element(158, "i", 54);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "button", 55);
      \u0275\u0275template(162, AddEvent_span_162_Template, 1, 0, "span", 56)(163, AddEvent_i_163_Template, 1, 0, "i", 57);
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 81, "ADD_EVENT.TITLE"))("subtitle", \u0275\u0275pipeBind1(4, 83, "ADD_EVENT.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.eventForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 85, "ADD_EVENT.EVENT_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(17, 87, "ADD_EVENT.EVENT_NAME"), " ", \u0275\u0275pipeBind1(18, 89, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("name"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 91, "ADD_EVENT.EVENT_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(27, 93, "ADD_EVENT.EVENT_TYPE"), " ", \u0275\u0275pipeBind1(28, 95, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("type"));
      \u0275\u0275property("items", ctx.eventTypes)("placeholder", \u0275\u0275pipeBind1(32, 97, "ADD_EVENT.SELECT_TYPE"))("clearable", false)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("type"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(38, 99, "ADD_EVENT.DESCRIPTION"), " ", \u0275\u0275pipeBind1(39, 101, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("description"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 103, "ADD_EVENT.DESCRIPTION_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("description"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 105, "ADD_EVENT.INCLUDE_ALL_CHILDREN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 107, "ADD_EVENT.INCLUDE_ALL_CHILDREN_HINT"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 109, "ADD_EVENT.EVENT_DETAILS"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 111, "ADD_EVENT.PRICE"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("price"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 113, "ADD_EVENT.PRICE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("price"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(74, 115, "ADD_EVENT.CAPACITY"), " ", \u0275\u0275pipeBind1(75, 117, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("capacity"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(79, 119, "ADD_EVENT.CAPACITY_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("capacity"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(84, 121, "ADD_EVENT.AGE_FROM"), " ", \u0275\u0275pipeBind1(85, 123, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("ageFrom"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(89, 125, "ADD_EVENT.AGE_FROM_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("ageFrom"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(94, 127, "ADD_EVENT.AGE_TO"), " ", \u0275\u0275pipeBind1(95, 129, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("ageTo"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(99, 131, "ADD_EVENT.AGE_TO_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("ageTo"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 133, "ADD_EVENT.DATE_LOCATION"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(111, 135, "ADD_EVENT.DATE"), " ", \u0275\u0275pipeBind1(112, 137, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("eventDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("eventDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(120, 139, "ADD_EVENT.TIME"), " ", \u0275\u0275pipeBind1(121, 141, "ADD_EVENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("eventTime"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("eventTime"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 143, "ADD_EVENT.PLACE"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("place"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(133, 145, "ADD_EVENT.PLACE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("place"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 147, "ADD_EVENT.EVENT_IMAGE_SECTION"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(145, 149, "ADD_EVENT.EVENT_IMAGE"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 151, "GLOBAL.IMAGE_HINT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(160, 153, "ADD_EVENT.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(165, 155, "ADD_EVENT.CREATING") : \u0275\u0275pipeBind1(166, 157, "ADD_EVENT.CREATE_EVENT"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TitlePage, TranslatePipe], styles: ["\n\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-event.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEvent, [{
    type: Component,
    args: [{ selector: "app-add-event", imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule, TitlePage], standalone: true, template: `<div class="add-event-container" (click)="dismissKeyboard($event)">\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page\r
      [title]="'ADD_EVENT.TITLE' | translate"\r
      [subtitle]="'ADD_EVENT.SUBTITLE' | translate"\r
      icon="bi bi-calendar-plus"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <div class="card-add-pages">\r
      <form [formGroup]="eventForm" (ngSubmit)="saveEvent()" class="add-form">\r
        <!-- Section Event Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-calendar-event"></i>\r
            <h4>{{ 'ADD_EVENT.EVENT_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.EVENT_NAME' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-bookmark input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('name')" formControlName="name" [placeholder]="'ADD_EVENT.EVENT_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('name')" class="error-message">\r
                {{ getFieldError('name') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.EVENT_TYPE' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-tag input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('type')"\r
                  formControlName="type"\r
                  [items]="eventTypes"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_EVENT.SELECT_TYPE' | translate"\r
                  [clearable]="false"\r
                  [searchable]="false">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('type')" class="error-message">\r
                {{ getFieldError('type') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'ADD_EVENT.DESCRIPTION' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-text-paragraph input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('description')" formControlName="description" rows="3" [placeholder]="'ADD_EVENT.DESCRIPTION_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('description')" class="error-message">\r
                {{ getFieldError('description') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <div class="form-check">\r
                <input type="checkbox" class="form-check-input" id="includeAllChildren" formControlName="includeAllChildren" (change)="onIncludeAllChildrenChange()">\r
                <label class="form-check-label" for="includeAllChildren">\r
                  <i class="bi bi-people-fill me-2"></i>{{ 'ADD_EVENT.INCLUDE_ALL_CHILDREN' | translate }}\r
                </label>\r
              </div>\r
              <small class="form-hint text-muted">{{ 'ADD_EVENT.INCLUDE_ALL_CHILDREN_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Details -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-info-circle"></i>\r
            <h4>{{ 'ADD_EVENT.EVENT_DETAILS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.PRICE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-currency-dollar input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('price')" formControlName="price" min="0" step="0.01" [placeholder]="'ADD_EVENT.PRICE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('price')" class="error-message">\r
                {{ getFieldError('price') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.CAPACITY' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-people input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('capacity')" formControlName="capacity" min="1" [placeholder]="'ADD_EVENT.CAPACITY_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('capacity')" class="error-message">\r
                {{ getFieldError('capacity') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.AGE_FROM' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person-dash input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('ageFrom')" formControlName="ageFrom" min="0" max="18" [placeholder]="'ADD_EVENT.AGE_FROM_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('ageFrom')" class="error-message">\r
                {{ getFieldError('ageFrom') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.AGE_TO' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person-plus input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('ageTo')" formControlName="ageTo" min="0" max="18" [placeholder]="'ADD_EVENT.AGE_TO_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('ageTo')" class="error-message">\r
                {{ getFieldError('ageTo') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Date, Time & Location -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-geo-alt"></i>\r
            <h4>{{ 'ADD_EVENT.DATE_LOCATION' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.DATE' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('eventDate')" formControlName="eventDate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('eventDate')" class="error-message">\r
                {{ getFieldError('eventDate') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.TIME' | translate }} {{ 'ADD_EVENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-clock input-icon"></i>\r
                <input type="time" class="form-input" [class.is-invalid]="isFieldInvalid('eventTime')" formControlName="eventTime">\r
              </div>\r
              <div *ngIf="isFieldInvalid('eventTime')" class="error-message">\r
                {{ getFieldError('eventTime') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'ADD_EVENT.PLACE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-building input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('place')" formControlName="place" [placeholder]="'ADD_EVENT.PLACE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('place')" class="error-message">\r
                {{ getFieldError('place') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Event Image -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'ADD_EVENT.EVENT_IMAGE_SECTION' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EVENT.EVENT_IMAGE' | translate }}</label>\r
              <div class="file-upload-area">\r
                <input type="file" #fileInput id="eventImage" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                <label for="eventImage" class="file-upload-label">\r
                  <div *ngIf="!imagePreview" class="upload-placeholder">\r
                    <i class="bi bi-cloud-upload"></i>\r
                    <span>{{ 'GLOBAL.UPLOAD_PHOTO' | translate }}</span>\r
                  </div>\r
                  <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image" [alt]="'GLOBAL.PREVIEW' | translate">\r
                </label>\r
                <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
                  <i class="bi bi-x-circle"></i>\r
                  {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
                </button>\r
              </div>\r
              <small class="form-hint">{{ 'GLOBAL.IMAGE_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'ADD_EVENT.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('ADD_EVENT.CREATING' | translate) : ('ADD_EVENT.CREATE_EVENT' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/event/add-event/add-event.scss */\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-event.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EventService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEvent, { className: "AddEvent", filePath: "src/app/features/event/add-event/add-event.ts", lineNumber: 22 });
})();
export {
  AddEvent
};
//# sourceMappingURL=chunk-K3KATE5G.js.map
