import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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

// src/app/features/parent/add-parent/add-parent.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
function AddParentComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("firstName"), " ");
  }
}
function AddParentComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("lastName"), " ");
  }
}
function AddParentComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementStart(2, "span", 71);
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
function AddParentComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("email"), " ");
  }
}
function AddParentComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("password"), " ");
  }
}
function AddParentComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("phoneNumber"), " ");
  }
}
function AddParentComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("emergencyContact"), " ");
  }
}
function AddParentComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("address"), " ");
  }
}
function AddParentComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("work"), " ");
  }
}
function AddParentComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("zipCode"), " ");
  }
}
function AddParentComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementStart(2, "span", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r4.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function AddParentComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ADD_PARENT.UPLOAD_PHOTO"));
  }
}
function AddParentComponent_img_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 74);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "ADD_PARENT.PREVIEW"));
  }
}
function AddParentComponent_button_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function AddParentComponent_button_163_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function AddParentComponent_span_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 76);
  }
}
function AddParentComponent_i_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 77);
  }
}
var AddParentComponent = class _AddParentComponent {
  fb;
  parentService;
  router;
  translate;
  pageTitleService;
  simpleToastService;
  fileInput;
  imageCropper;
  saving = false;
  imagePreview = null;
  selectedImageFile = null;
  showPassword = false;
  parentForm;
  langChangeSub;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  PHONE_PATTERN = /^\+?[1-9]\d{0,14}$/;
  // E.164: 1-15 digits, optionally starting with +
  ZIP_CODE_PATTERN = /^\d{4,10}(-\d{4})?$/;
  // Error message mapping for pattern validation
  PATTERN_ERROR_FIELDS = {
    phoneNumber: "VALIDATION.INVALID_PHONE",
    emergencyContact: "VALIDATION.INVALID_PHONE",
    zipCode: "VALIDATION.INVALID_ZIP_CODE"
  };
  breadcrumbs = [];
  titleActions = [];
  genders = [];
  parentTypes = [];
  constructor(fb, parentService, router, translate, pageTitleService, simpleToastService) {
    this.fb = fb;
    this.parentService = parentService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("PARENTS.ADD_PARENT"));
    this.initBreadcrumbs();
    this.initTitleActions();
    this.initSelectOptions();
    this.initForm();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("PARENTS.ADD_PARENT"));
      this.initBreadcrumbs();
      this.initTitleActions();
      this.initSelectOptions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  initSelectOptions() {
    this.genders = [
      { value: "Male", label: this.translate.instant("COMMON.MALE"), icon: "bi-gender-male" },
      { value: "Female", label: this.translate.instant("COMMON.FEMALE"), icon: "bi-gender-female" }
    ];
    this.parentTypes = [
      { value: "Father", label: this.translate.instant("PARENTS.FATHER"), icon: "bi-person" },
      { value: "Mother", label: this.translate.instant("PARENTS.MOTHER"), icon: "bi-person" },
      { value: "Grandfather", label: this.translate.instant("PARENTS.GRANDFATHER"), icon: "bi-person" },
      { value: "Grandmother", label: this.translate.instant("PARENTS.GRANDMOTHER"), icon: "bi-person" },
      { value: "Guardian", label: this.translate.instant("PARENTS.GUARDIAN"), icon: "bi-shield-check" }
    ];
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.PARENTS"), url: "/parents" },
      { label: this.translate.instant("BREADCRUMBS.ADD_PARENT") }
    ];
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
    this.router.navigate(["/parents"]);
  }
  initForm() {
    this.parentForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.pattern(this.PHONE_PATTERN)]],
      address: ["", [Validators.maxLength(255)]],
      emergencyContact: ["", [Validators.pattern(this.PHONE_PATTERN)]],
      profilePicture: [""],
      gender: [""],
      dateOfBirth: [""],
      work: ["", [Validators.maxLength(100)]],
      zipCode: ["", [Validators.pattern(this.ZIP_CODE_PATTERN)]],
      parentType: [""],
      isActive: [true],
      password: ["", [Validators.minLength(6), Validators.maxLength(100)]]
    });
  }
  saveParent() {
    if (this.parentForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const parentData = this.parentForm.value;
    this.parentService.addParent(parentData).subscribe({
      next: (createdParent) => {
        if (this.selectedImageFile && createdParent?.id) {
          this.parentService.uploadParentProfilePicture(createdParent.id, this.selectedImageFile).subscribe({
            next: () => {
              this.saving = false;
              showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
              this.router.navigate(["/parents"]);
            },
            error: () => {
              this.saving = false;
              showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
              this.router.navigate(["/parents"]);
            }
          });
        } else {
          this.saving = false;
          showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          this.router.navigate(["/parents"]);
        }
      },
      error: (error) => {
        this.saving = false;
        console.error("Failed to create parent:", error);
        const errorMessage = this.extractErrorMessage(error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: errorMessage
        });
      }
    });
  }
  extractErrorMessage(error) {
    if (error?.error) {
      if (error.error.errors) {
        const errorMessages = [];
        if (Array.isArray(error.error.errors)) {
          errorMessages.push(...this.extractFromArray(error.error.errors));
        } else if (typeof error.error.errors === "object") {
          for (const key in error.error.errors) {
            if (error.error.errors.hasOwnProperty(key)) {
              const messages = error.error.errors[key];
              if (Array.isArray(messages)) {
                errorMessages.push(...messages);
              } else if (typeof messages === "string") {
                errorMessages.push(messages);
              }
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join("\n");
        }
      }
      if (error.error.message) {
        return error.error.message;
      }
      if (error.error.detail) {
        return error.error.detail;
      }
      if (error.error.title) {
        return error.error.title;
      }
      if (typeof error.error === "string") {
        return error.error;
      }
      if (Array.isArray(error.error)) {
        const extracted = this.extractFromArray(error.error);
        if (extracted.length > 0) {
          return extracted.join("\n");
        }
      }
    }
    if (error?.status === 409 || error?.error?.message?.includes("already exists")) {
      return this.translate.instant("MESSAGES.EMAIL_ALREADY_EXISTS");
    }
    return this.translate.instant("MESSAGES.PARENT_CREATE_ERROR");
  }
  extractFromArray(errors) {
    const messages = [];
    for (const item of errors) {
      if (!item)
        continue;
      if (typeof item === "string") {
        messages.push(item);
      } else if (item.description) {
        messages.push(item.description);
      } else if (item.message) {
        messages.push(item.message);
      } else if (item.error) {
        messages.push(typeof item.error === "string" ? item.error : item.error.message || item.error.description || JSON.stringify(item.error));
      }
    }
    return messages;
  }
  cancel() {
    if (this.parentForm.dirty) {
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
          this.router.navigate(["/parents"]);
        }
      });
    } else {
      this.router.navigate(["/parents"]);
    }
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToastService.error(this.translate.instant("MESSAGES_PAGE.ALLOWED_IMAGE_TYPES"));
      this.resetFileInput();
      return;
    }
    if (file.size > this.MAX_FILE_SIZE) {
      this.simpleToastService.error(this.translate.instant("MESSAGES.MAX_FILE_SIZE", { size: this.getReadableFileSize() }));
      this.resetFileInput();
      return;
    }
    this.selectedImageFile = file;
    if (this.imageCropper) {
      this.imageCropper.show();
    }
  }
  onImageCropped(croppedImage) {
    this.imagePreview = croppedImage;
    this.parentForm.patchValue({ profilePicture: "" });
    this.selectedImageFile = this.base64ToFile(croppedImage, "profile.jpg");
  }
  base64ToFile(base64, filename) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  onCropCancelled() {
    this.selectedImageFile = null;
    this.resetFileInput();
  }
  removeImage() {
    this.resetFileInput();
  }
  resetFileInput() {
    this.imagePreview = null;
    this.selectedImageFile = null;
    this.parentForm.patchValue({ profilePicture: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.parentForm.controls).forEach((control) => {
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
  // Getter methods for easy access in template
  get formControls() {
    return this.parentForm.controls;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  dismissKeyboard(event) {
    const target = event.target;
    const tag = target.tagName;
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && !target.closest("ng-select")) {
      document.activeElement?.blur();
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.parentForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.parentForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"]) {
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    if (field.errors["email"]) {
      return this.translate.instant("VALIDATION.INVALID_EMAIL");
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return this.translate.instant("VALIDATION.MIN_LENGTH", { length: minLength });
    }
    if (field.errors["maxlength"]) {
      const maxLength = field.errors["maxlength"].requiredLength;
      return this.translate.instant("VALIDATION.MAX_LENGTH", { length: maxLength });
    }
    if (field.errors["pattern"]) {
      const errorKey = this.PATTERN_ERROR_FIELDS[fieldName];
      if (errorKey) {
        return this.translate.instant(errorKey);
      }
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  static \u0275fac = function AddParentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddParentComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddParentComponent, selectors: [["app-add-parent"]], viewQuery: function AddParentComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 199, vars: 178, consts: [["imageCropper", ""], ["fileInput", ""], [1, "add-parent-container", 3, "click"], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight"], [1, "container-fluid", "mt-4", "mb-4"], ["title", "Add Parent", "subtitle", "Create a new parent/guardian profile", "icon", "bi bi-person-plus-fill", 3, "breadcrumbs", "actions"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-gender-ambiguous", "input-icon"], ["formControlName", "gender", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-input"], [1, "bi", "bi-telephone"], [1, "bi", "bi-envelope", "input-icon"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], [1, "form-hint"], [1, "bi", "bi-lock", "input-icon"], ["formControlName", "password", 1, "form-input", 3, "type", "placeholder"], ["type", "button", 1, "toggle-password-btn", 3, "click"], [1, "bi"], [1, "bi", "bi-phone", "input-icon"], ["type", "tel", "formControlName", "phoneNumber", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-exclamation-triangle", "input-icon"], ["type", "text", "formControlName", "emergencyContact", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-geo-alt", "input-icon"], ["formControlName", "address", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-briefcase"], [1, "bi", "bi-building", "input-icon"], ["type", "text", "formControlName", "work", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-mailbox", "input-icon"], ["type", "text", "formControlName", "zipCode", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-people", "input-icon"], ["formControlName", "parentType", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "status-toggle"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "toggle-input"], ["for", "isActive", 1, "toggle-slider"], [1, "info-note"], [1, "note-icon"], [1, "bi", "bi-info-circle"], [1, "note-content"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddParentComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function AddParentComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dismissKeyboard($event));
      });
      \u0275\u0275elementStart(1, "app-image-cropper-modal", 3, 0);
      \u0275\u0275listener("imageCropped", function AddParentComponent_Template_app_image_cropper_modal_imageCropped_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function AddParentComponent_Template_app_image_cropper_modal_cancelled_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275element(4, "app-title-page", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddParentComponent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveParent());
      });
      \u0275\u0275elementStart(7, "div", 8)(8, "div", 9);
      \u0275\u0275element(9, "i", 10);
      \u0275\u0275elementStart(10, "h4");
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "label", 13);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "i", 15)(21, "input", 16);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, AddParentComponent_div_23_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "label", 13);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 14);
      \u0275\u0275element(30, "i", 15)(31, "input", 18);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, AddParentComponent_div_33_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 12)(35, "label", 13);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14);
      \u0275\u0275element(39, "i", 19);
      \u0275\u0275elementStart(40, "ng-select", 20);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275template(42, AddParentComponent_ng_template_42_Template, 4, 4, "ng-template", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 12)(44, "label", 13);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 14);
      \u0275\u0275element(48, "i", 22)(49, "input", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 8)(51, "div", 9);
      \u0275\u0275element(52, "i", 24);
      \u0275\u0275elementStart(53, "h4");
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 11)(57, "div", 12)(58, "label", 13);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 14);
      \u0275\u0275element(63, "i", 25)(64, "input", 26);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "small", 27);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, AddParentComponent_div_69_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 12)(71, "label", 13);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 14);
      \u0275\u0275element(75, "i", 28)(76, "input", 29);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementStart(78, "button", 30);
      \u0275\u0275listener("click", function AddParentComponent_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePasswordVisibility());
      });
      \u0275\u0275element(79, "i", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "small", 27);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, AddParentComponent_div_83_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 12)(85, "label", 13);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 14);
      \u0275\u0275element(90, "i", 32)(91, "input", 33);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, AddParentComponent_div_93_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 12)(95, "label", 13);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 14);
      \u0275\u0275element(99, "i", 34)(100, "input", 35);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(102, AddParentComponent_div_102_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 36)(104, "label", 13);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 14);
      \u0275\u0275element(108, "i", 37)(109, "textarea", 38);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, AddParentComponent_div_111_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 8)(113, "div", 9);
      \u0275\u0275element(114, "i", 39);
      \u0275\u0275elementStart(115, "h4");
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 11)(119, "div", 12)(120, "label", 13);
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 14);
      \u0275\u0275element(124, "i", 40)(125, "input", 41);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(127, AddParentComponent_div_127_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 12)(129, "label", 13);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 14);
      \u0275\u0275element(133, "i", 42)(134, "input", 43);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(136, AddParentComponent_div_136_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 12)(138, "label", 13);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 14);
      \u0275\u0275element(142, "i", 44);
      \u0275\u0275elementStart(143, "ng-select", 45);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275template(145, AddParentComponent_ng_template_145_Template, 4, 4, "ng-template", 21);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(146, "div", 8)(147, "div", 9);
      \u0275\u0275element(148, "i", 46);
      \u0275\u0275elementStart(149, "h4");
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 11)(153, "div", 12)(154, "label", 13);
      \u0275\u0275text(155);
      \u0275\u0275pipe(156, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 47)(158, "input", 48, 1);
      \u0275\u0275listener("change", function AddParentComponent_Template_input_change_158_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "label", 49);
      \u0275\u0275template(161, AddParentComponent_div_161_Template, 5, 3, "div", 50)(162, AddParentComponent_img_162_Template, 2, 4, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(163, AddParentComponent_button_163_Template, 4, 3, "button", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "small", 27);
      \u0275\u0275text(165);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 12)(168, "label", 13);
      \u0275\u0275text(169);
      \u0275\u0275pipe(170, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 53)(172, "label", 54);
      \u0275\u0275text(173);
      \u0275\u0275pipe(174, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 55);
      \u0275\u0275element(176, "input", 56)(177, "label", 57);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(178, "div", 58)(179, "div", 59);
      \u0275\u0275element(180, "i", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "div", 61)(182, "h5");
      \u0275\u0275text(183);
      \u0275\u0275pipe(184, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p");
      \u0275\u0275text(186);
      \u0275\u0275pipe(187, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "div", 62)(189, "button", 63);
      \u0275\u0275listener("click", function AddParentComponent_Template_button_click_189_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275element(190, "i", 64);
      \u0275\u0275text(191);
      \u0275\u0275pipe(192, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "button", 65);
      \u0275\u0275template(194, AddParentComponent_span_194_Template, 1, 0, "span", 66)(195, AddParentComponent_i_195_Template, 1, 0, "i", 67);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275pipe(198, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 300)("resizeToHeight", 300);
      \u0275\u0275advance(3);
      \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.parentForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 94, "ADD_PARENT.PERSONAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(17, 96, "ADD_PARENT.FIRST_NAME"), " ", \u0275\u0275pipeBind1(18, 98, "ADD_PARENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 100, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(27, 102, "ADD_PARENT.LAST_NAME"), " ", \u0275\u0275pipeBind1(28, 104, "ADD_PARENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 106, "GLOBAL.LAST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 108, "ADD_PARENT.GENDER"));
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.genders)("placeholder", \u0275\u0275pipeBind1(41, 110, "ADD_PARENT.SELECT_GENDER"))("clearable", true)("searchable", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 112, "ADD_PARENT.DATE_OF_BIRTH"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 114, "ADD_PARENT.CONTACT_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(60, 116, "ADD_PARENT.EMAIL"), " ", \u0275\u0275pipeBind1(61, 118, "ADD_PARENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 120, "ADD_PARENT.EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 122, "ADD_PARENT.EMAIL_HINT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 124, "ADD_PARENT.PASSWORD"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(77, 126, "ADD_PARENT.PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 128, "ADD_PARENT.PASSWORD_HINT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("password"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(87, 130, "ADD_PARENT.PHONE"), " ", \u0275\u0275pipeBind1(88, 132, "ADD_PARENT.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(92, 134, "ADD_PARENT.PHONE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 136, "ADD_PARENT.EMERGENCY_CONTACT"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("emergencyContact"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(101, 138, "ADD_PARENT.EMERGENCY_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("emergencyContact"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 140, "ADD_PARENT.ADDRESS"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("address"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(110, 142, "ADD_PARENT.ADDRESS_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("address"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 144, "ADD_PARENT.PROFESSIONAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 146, "ADD_PARENT.PROFESSION"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("work"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(126, 148, "ADD_PARENT.PROFESSION_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("work"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(131, 150, "ADD_PARENT.ZIP_CODE"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("zipCode"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(135, 152, "ADD_PARENT.ZIP_CODE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("zipCode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 154, "ADD_PARENT.PARENT_TYPE"));
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.parentTypes)("placeholder", \u0275\u0275pipeBind1(144, 156, "ADD_PARENT.SELECT_TYPE"))("clearable", true)("searchable", false);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 158, "ADD_PARENT.PHOTO_STATUS"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(156, 160, "ADD_PARENT.PROFILE_PICTURE"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(166, 162, "GLOBAL.IMAGE_HINT"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(170, 164, "ADD_CHILD.Status"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(174, 166, "ADD_PARENT.ACTIVE_STATUS"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(184, 168, "ADD_PARENT.IMPORTANT_INFO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(187, 170, "ADD_PARENT.INFO_MESSAGE"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(192, 172, "ADD_PARENT.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(197, 174, "ADD_PARENT.CREATING") : \u0275\u0275pipeBind1(198, 176, "ADD_PARENT.CREATE_PARENT"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TitlePage, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, ImageCropperModalComponent, TranslatePipe], styles: ['\n\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 4px;\n}\n.toggle-password-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #888;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 16px;\n  z-index: 2;\n  line-height: 1;\n}\n.toggle-password-btn[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.form-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.form-input.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc3545;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.error-message[_ngcontent-%COMP%]::before {\n  content: "\\f33a";\n  font-family: "bootstrap-icons";\n  font-size: 14px;\n}\n.btn-remove-image[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #fff;\n  border: 1px solid #dc3545;\n  border-radius: 8px;\n  color: #dc3545;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.3s ease;\n}\n.btn-remove-image[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n}\n.btn-remove-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.file-upload-area[_ngcontent-%COMP%]   .file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.file-upload-area[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: 2px dashed #7dd3c0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.file-upload-area[_ngcontent-%COMP%]   .file-upload-label[_ngcontent-%COMP%]:hover {\n  border-color: #5bc0a3;\n  background: rgba(125, 211, 192, 0.05);\n}\n.file-upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #7dd3c0;\n}\n.file-upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.file-upload-area[_ngcontent-%COMP%]   .upload-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.file-upload-area[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 2px solid #e8e8e8;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #555;\n  margin: 0;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background: #7dd3c0;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(24px);\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 24px;\n  background: #ccc;\n  border-radius: 24px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.status-toggle[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  padding-top: 32px;\n  border-top: 2px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #f8f9fa;\n  border: 2px solid #e8e8e8;\n  border-radius: 12px;\n  color: #666;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #dee2e6;\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .parent-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-parent.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddParentComponent, [{
    type: Component,
    args: [{ selector: "app-add-parent", imports: [CommonModule, ReactiveFormsModule, TitlePage, TranslateModule, NgSelectModule, ImageCropperModalComponent], standalone: true, template: `<div class="add-parent-container" (click)="dismissKeyboard($event)">\r
  <!-- Image Cropper Modal -->\r
  <app-image-cropper-modal\r
    #imageCropper\r
    [imageFile]="selectedImageFile"\r
    [roundCropper]="true"\r
    [aspectRatio]="1"\r
    [resizeToWidth]="300"\r
    [resizeToHeight]="300"\r
    (imageCropped)="onImageCropped($event)"\r
    (cancelled)="onCropCancelled()">\r
  </app-image-cropper-modal>\r
\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page\r
      title="Add Parent"\r
      subtitle="Create a new parent/guardian profile"\r
      icon="bi bi-person-plus-fill"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <div class="card-add-pages">\r
      <form [formGroup]="parentForm" (ngSubmit)="saveParent()" class="add-form">\r
        <!-- Section Informations Personnelles -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-person-circle"></i>\r
            <h4>{{ 'ADD_PARENT.PERSONAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.FIRST_NAME' | translate }} {{ 'ADD_PARENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('firstName')" formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('firstName')" class="error-message">\r
                {{ getFieldError('firstName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.LAST_NAME' | translate }} {{ 'ADD_PARENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('lastName')" formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('lastName')" class="error-message">\r
                {{ getFieldError('lastName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.GENDER' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-gender-ambiguous input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  formControlName="gender"\r
                  [items]="genders"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_PARENT.SELECT_GENDER' | translate"\r
                  [clearable]="true"\r
                  [searchable]="false">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.DATE_OF_BIRTH' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" formControlName="dateOfBirth">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Contact -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-telephone"></i>\r
            <h4>{{ 'ADD_PARENT.CONTACT_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.EMAIL' | translate }} {{ 'ADD_PARENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-envelope input-icon"></i>\r
                <input type="email" class="form-input" [class.is-invalid]="isFieldInvalid('email')" formControlName="email" [placeholder]="'ADD_PARENT.EMAIL_PLACEHOLDER' | translate">\r
              </div>\r
              <small class="form-hint">{{ 'ADD_PARENT.EMAIL_HINT' | translate }}</small>\r
              <div *ngIf="isFieldInvalid('email')" class="error-message">\r
                {{ getFieldError('email') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.PASSWORD' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-lock input-icon"></i>\r
                <input [type]="showPassword ? 'text' : 'password'" class="form-input" [class.is-invalid]="isFieldInvalid('password')" formControlName="password" [placeholder]="'ADD_PARENT.PASSWORD_PLACEHOLDER' | translate">\r
                <button type="button" class="toggle-password-btn" (click)="togglePasswordVisibility()">\r
                  <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>\r
                </button>\r
              </div>\r
              <small class="form-hint">{{ 'ADD_PARENT.PASSWORD_HINT' | translate }}</small>\r
              <div *ngIf="isFieldInvalid('password')" class="error-message">\r
                {{ getFieldError('password') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.PHONE' | translate }} {{ 'ADD_PARENT.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-phone input-icon"></i>\r
                <input type="tel" class="form-input" [class.is-invalid]="isFieldInvalid('phoneNumber')" formControlName="phoneNumber" [placeholder]="'ADD_PARENT.PHONE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('phoneNumber')" class="error-message">\r
                {{ getFieldError('phoneNumber') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.EMERGENCY_CONTACT' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-exclamation-triangle input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('emergencyContact')" formControlName="emergencyContact" [placeholder]="'ADD_PARENT.EMERGENCY_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('emergencyContact')" class="error-message">\r
                {{ getFieldError('emergencyContact') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'ADD_PARENT.ADDRESS' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-geo-alt input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('address')" formControlName="address" rows="3" [placeholder]="'ADD_PARENT.ADDRESS_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('address')" class="error-message">\r
                {{ getFieldError('address') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Professionnelle -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-briefcase"></i>\r
            <h4>{{ 'ADD_PARENT.PROFESSIONAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.PROFESSION' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-building input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('work')" formControlName="work" [placeholder]="'ADD_PARENT.PROFESSION_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('work')" class="error-message">\r
                {{ getFieldError('work') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.ZIP_CODE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-mailbox input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('zipCode')" formControlName="zipCode" [placeholder]="'ADD_PARENT.ZIP_CODE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('zipCode')" class="error-message">\r
                {{ getFieldError('zipCode') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.PARENT_TYPE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-people input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  formControlName="parentType"\r
                  [items]="parentTypes"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_PARENT.SELECT_TYPE' | translate"\r
                  [clearable]="true"\r
                  [searchable]="false">\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Photo et Statut -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'ADD_PARENT.PHOTO_STATUS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_PARENT.PROFILE_PICTURE' | translate }}</label>\r
              <div class="file-upload-area">\r
                <input type="file" #fileInput id="profilePicture" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                <label for="profilePicture" class="file-upload-label">\r
                  <div *ngIf="!imagePreview" class="upload-placeholder">\r
                    <i class="bi bi-cloud-upload"></i>\r
                    <span>{{ 'ADD_PARENT.UPLOAD_PHOTO' | translate }}</span>\r
                  </div>\r
                  <img *ngIf="imagePreview" [src]="imagePreview" class="preview-image" [alt]="'ADD_PARENT.PREVIEW' | translate">\r
                </label>\r
                <button *ngIf="imagePreview" type="button" class="btn-remove-image" (click)="removeImage()">\r
                  <i class="bi bi-x-circle"></i>\r
                  {{ 'GLOBAL.REMOVE_PHOTO' | translate }}\r
                </button>\r
              </div>\r
              <small class="form-hint">{{ 'GLOBAL.IMAGE_HINT' | translate }}</small>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.Status' | translate }}</label>\r
              <div class="status-toggle">\r
                <label class="toggle-label">{{ 'ADD_PARENT.ACTIVE_STATUS' | translate }}</label>\r
                <div class="toggle-switch">\r
                  <input type="checkbox" formControlName="isActive" id="isActive" class="toggle-input">\r
                  <label for="isActive" class="toggle-slider"></label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Note d'information -->\r
        <div class="info-note">\r
          <div class="note-icon">\r
            <i class="bi bi-info-circle"></i>\r
          </div>\r
          <div class="note-content">\r
            <h5>{{ 'ADD_PARENT.IMPORTANT_INFO' | translate }}</h5>\r
            <p>{{ 'ADD_PARENT.INFO_MESSAGE' | translate }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- Boutons d'action -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'ADD_PARENT.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('ADD_PARENT.CREATING' | translate) : ('ADD_PARENT.CREATE_PARENT' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/parent/add-parent/add-parent.scss */\ntextarea.form-input {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-hint {\n  font-size: 12px;\n  color: #888;\n  margin-top: 4px;\n}\n.toggle-password-btn {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #888;\n  cursor: pointer;\n  padding: 4px;\n  font-size: 16px;\n  z-index: 2;\n  line-height: 1;\n}\n.toggle-password-btn:hover {\n  color: var(--primary-color);\n}\n.form-input.is-invalid {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.form-input.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);\n}\n.error-message {\n  font-size: 12px;\n  color: #dc3545;\n  margin-top: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.error-message::before {\n  content: "\\f33a";\n  font-family: "bootstrap-icons";\n  font-size: 14px;\n}\n.btn-remove-image {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #fff;\n  border: 1px solid #dc3545;\n  border-radius: 8px;\n  color: #dc3545;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  transition: all 0.3s ease;\n}\n.btn-remove-image:hover {\n  background: #dc3545;\n  color: white;\n}\n.btn-remove-image i {\n  font-size: 14px;\n}\n.file-upload-area .file-input {\n  display: none;\n}\n.file-upload-area .file-upload-label {\n  display: block;\n  width: 100%;\n  height: 120px;\n  border: 2px dashed #7dd3c0;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.file-upload-area .file-upload-label:hover {\n  border-color: #5bc0a3;\n  background: rgba(125, 211, 192, 0.05);\n}\n.file-upload-area .upload-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #7dd3c0;\n}\n.file-upload-area .upload-placeholder i {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.file-upload-area .upload-placeholder span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.file-upload-area .preview-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.status-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 2px solid #e8e8e8;\n}\n.status-toggle .toggle-label {\n  font-size: 15px;\n  font-weight: 500;\n  color: #555;\n  margin: 0;\n}\n.status-toggle .toggle-switch {\n  position: relative;\n}\n.status-toggle .toggle-switch .toggle-input {\n  display: none;\n}\n.status-toggle .toggle-switch .toggle-input:checked + .toggle-slider {\n  background: #7dd3c0;\n}\n.status-toggle .toggle-switch .toggle-input:checked + .toggle-slider::before {\n  transform: translateX(24px);\n}\n.status-toggle .toggle-switch .toggle-slider {\n  width: 48px;\n  height: 24px;\n  background: #ccc;\n  border-radius: 24px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.status-toggle .toggle-switch .toggle-slider::before {\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.form-actions {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  padding-top: 32px;\n  border-top: 2px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 12px 24px;\n  background: #f8f9fa;\n  border: 2px solid #e8e8e8;\n  border-radius: 12px;\n  color: #666;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn-cancel:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #dee2e6;\n}\n.btn-cancel:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .parent-form {\n    padding: 20px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .form-actions .btn-cancel,\n  .form-actions .btn-submit {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-parent.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: ParentService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddParentComponent, { className: "AddParentComponent", filePath: "src/app/features/parent/add-parent/add-parent.ts", lineNumber: 24 });
})();
export {
  AddParentComponent
};
//# sourceMappingURL=chunk-GAEISRXB.js.map
