import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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

// src/app/features/educator/add-educator/add-educator.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
function AddEducator_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("firstName"), " ");
  }
}
function AddEducator_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("lastName"), " ");
  }
}
function AddEducator_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("dateOfBirth"), " ");
  }
}
function AddEducator_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("phone"), " ");
  }
}
function AddEducator_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("email"), " ");
  }
}
function AddEducator_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("password"), " ");
  }
}
function AddEducator_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("hireDate"), " ");
  }
}
function AddEducator_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span", 66);
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
function AddEducator_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("salary"), " ");
  }
}
function AddEducator_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("address"), " ");
  }
}
function AddEducator_div_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "i", 68);
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
function AddEducator_img_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 69);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function AddEducator_button_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function AddEducator_button_148_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function AddEducator_span_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function AddEducator_i_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
  }
}
var AddEducator = class _AddEducator {
  fb;
  educatorService;
  router;
  translate;
  simpleToastService;
  fileInput;
  imageCropper;
  saving = false;
  showPassword = false;
  imagePreview = null;
  selectedImageFile = null;
  educatorForm;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  PHONE_PATTERN = /^\+?[1-9]\d{0,14}$/;
  EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  specializations = [
    { value: "Early Childhood Education", label: "Early Childhood Education", icon: "bi-mortarboard" },
    { value: "Special Education", label: "Special Education", icon: "bi-heart" },
    { value: "Montessori", label: "Montessori", icon: "bi-puzzle" },
    { value: "Music", label: "Music", icon: "bi-music-note-beamed" },
    { value: "Art", label: "Art", icon: "bi-palette" },
    { value: "Physical Education", label: "Physical Education", icon: "bi-dribbble" },
    { value: "Language", label: "Language", icon: "bi-translate" },
    { value: "Other", label: "Other", icon: "bi-three-dots" }
  ];
  constructor(fb, educatorService, router, translate, simpleToastService) {
    this.fb = fb;
    this.educatorService = educatorService;
    this.router = router;
    this.translate = translate;
    this.simpleToastService = simpleToastService;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    this.initBreadcrumbs();
    this.initTitleActions();
    this.initForm();
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EDUCATORS"), url: "/educators" },
      { label: this.translate.instant("BREADCRUMBS.ADD_EDUCATOR") }
    ];
  }
  initTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("COMMON.BACK"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-2",
        action: () => this.cancel()
      }
    ];
  }
  initForm() {
    this.educatorForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      phone: ["", [Validators.pattern(this.PHONE_PATTERN)]],
      dateOfBirth: ["", [Validators.required]],
      hireDate: ["", [Validators.required]],
      specialization: [""],
      salary: [0, [Validators.required, Validators.min(0)]],
      address: ["", [Validators.maxLength(500)]],
      profilePicture: [""],
      isActive: [true]
    });
  }
  saveEducator() {
    if (this.educatorForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const educatorData = this.educatorForm.value;
    this.educatorService.addEducator(educatorData).subscribe({
      next: () => {
        this.saving = false;
        this.simpleToastService.success(this.translate.instant("MESSAGES.EDUCATOR_CREATED"));
        setTimeout(() => {
          this.router.navigate(["/educators"]);
        }, 200);
      },
      error: (error) => {
        this.saving = false;
        console.error("Failed to create educator:", error);
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
    if (error?.status === 0) {
      return this.translate.instant("ERRORS.NETWORK_ERROR") || "Network error. Please check your internet connection.";
    }
    if (error?.name === "TimeoutError" || error?.message?.includes("timeout")) {
      return this.translate.instant("ERRORS.TIMEOUT") || "Request timed out. Please try again.";
    }
    if (error?.status >= 500) {
      return this.translate.instant("ERRORS.SERVER_ERROR") || "Server error. Please try again later.";
    }
    if (error?.status === 403) {
      return this.translate.instant("ERRORS.FORBIDDEN") || "You do not have permission to perform this action.";
    }
    if (error?.status === 401) {
      return this.translate.instant("ERRORS.UNAUTHORIZED") || "Your session has expired. Please log in again.";
    }
    if (error?.error) {
      if (Array.isArray(error.error)) {
        const errorMessages = error.error.map((e) => this.mapIdentityError(e)).filter(Boolean);
        if (errorMessages.length > 0) {
          return errorMessages.join("\n\u2022 ");
        }
      }
      if (error.error.errors) {
        const errorMessages = [];
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            const messages = error.error.errors[key];
            const fieldName = this.getFieldLabel(key);
            if (Array.isArray(messages)) {
              messages.forEach((msg) => {
                errorMessages.push(`${fieldName}: ${msg}`);
              });
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join("\n\u2022 ");
        }
      }
      if (error.error.message) {
        return this.mapCommonErrorMessage(error.error.message);
      }
      if (error.error.title) {
        return error.error.title;
      }
      if (typeof error.error === "string") {
        return this.mapCommonErrorMessage(error.error);
      }
    }
    if (error?.status === 409) {
      return this.translate.instant("MESSAGES.EMAIL_ALREADY_EXISTS") || "This email is already registered.";
    }
    if (error?.status) {
      return `${this.translate.instant("MESSAGES.EDUCATOR_CREATE_ERROR")} (Error ${error.status})`;
    }
    return this.translate.instant("MESSAGES.EDUCATOR_CREATE_ERROR");
  }
  /**
   * Map ASP.NET Identity error codes to user-friendly messages
   */
  mapIdentityError(error) {
    if (!error)
      return "";
    const code = error.code || error.Code;
    const description = error.description || error.Description || "";
    const errorMap = {
      "DuplicateUserName": this.translate.instant("ERRORS.DUPLICATE_EMAIL") || "This email is already registered.",
      "DuplicateEmail": this.translate.instant("ERRORS.DUPLICATE_EMAIL") || "This email is already registered.",
      "InvalidEmail": this.translate.instant("ERRORS.INVALID_EMAIL") || "Please enter a valid email address.",
      "InvalidUserName": this.translate.instant("ERRORS.INVALID_EMAIL") || "Please enter a valid email address.",
      "PasswordTooShort": this.translate.instant("ERRORS.PASSWORD_TOO_SHORT") || "Password must be at least 6 characters.",
      "PasswordRequiresDigit": this.translate.instant("ERRORS.PASSWORD_REQUIRES_DIGIT") || "Password must contain at least one digit.",
      "PasswordRequiresLower": this.translate.instant("ERRORS.PASSWORD_REQUIRES_LOWER") || "Password must contain at least one lowercase letter.",
      "PasswordRequiresUpper": this.translate.instant("ERRORS.PASSWORD_REQUIRES_UPPER") || "Password must contain at least one uppercase letter.",
      "PasswordRequiresNonAlphanumeric": this.translate.instant("ERRORS.PASSWORD_REQUIRES_SPECIAL") || "Password must contain at least one special character.",
      "PasswordRequiresUniqueChars": this.translate.instant("ERRORS.PASSWORD_REQUIRES_UNIQUE") || "Password must contain more unique characters."
    };
    return errorMap[code] || description || code;
  }
  /**
   * Map common error messages to translated versions
   */
  mapCommonErrorMessage(message) {
    if (!message)
      return "";
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("already exists") || lowerMessage.includes("duplicate")) {
      return this.translate.instant("MESSAGES.EMAIL_ALREADY_EXISTS") || message;
    }
    if (lowerMessage.includes("not found")) {
      return this.translate.instant("ERRORS.NOT_FOUND") || message;
    }
    if (lowerMessage.includes("invalid email")) {
      return this.translate.instant("ERRORS.INVALID_EMAIL") || message;
    }
    return message;
  }
  /**
   * Get user-friendly field label for validation errors
   */
  getFieldLabel(fieldName) {
    const fieldMap = {
      "FirstName": this.translate.instant("EDUCATORS.FIRST_NAME") || "First Name",
      "LastName": this.translate.instant("EDUCATORS.LAST_NAME") || "Last Name",
      "Email": this.translate.instant("EDUCATORS.EMAIL") || "Email",
      "Password": this.translate.instant("EDUCATORS.PASSWORD") || "Password",
      "Phone": this.translate.instant("EDUCATORS.PHONE") || "Phone",
      "DateOfBirth": this.translate.instant("EDUCATORS.DATE_OF_BIRTH") || "Date of Birth",
      "HireDate": this.translate.instant("EDUCATORS.HIRE_DATE") || "Hire Date",
      "Salary": this.translate.instant("EDUCATORS.SALARY") || "Salary",
      "Address": this.translate.instant("EDUCATORS.ADDRESS") || "Address",
      "Specialization": this.translate.instant("EDUCATORS.SPECIALIZATION") || "Specialization"
    };
    return fieldMap[fieldName] || fieldName;
  }
  cancel() {
    if (this.educatorForm.dirty) {
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
          this.router.navigate(["/educators"]);
        }
      });
    } else {
      this.router.navigate(["/educators"]);
    }
  }
  onImageSelect(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!this.ALLOWED_IMAGE_TYPES.includes(file.type)) {
      this.simpleToastService.error(this.translate.instant("MESSAGES.ALLOWED_IMAGE_TYPES"));
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
    this.educatorForm.patchValue({ profilePicture: croppedImage });
    this.selectedImageFile = null;
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
    this.educatorForm.patchValue({ profilePicture: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.educatorForm.controls).forEach((control) => {
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
    return this.educatorForm.controls;
  }
  dismissKeyboard(event) {
    const target = event.target;
    const tag = target.tagName;
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && !target.closest("ng-select")) {
      document.activeElement?.blur();
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.educatorForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.educatorForm.get(fieldName);
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
    if (field.errors["min"]) {
      return this.translate.instant("VALIDATION.MIN_VALUE", { value: field.errors["min"].min });
    }
    if (field.errors["pattern"]) {
      if (fieldName === "phone") {
        return this.translate.instant("VALIDATION.INVALID_PHONE");
      }
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  static \u0275fac = function AddEducator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEducator)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEducator, selectors: [["app-add-educator"]], viewQuery: function AddEducator_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 184, vars: 170, consts: [["imageCropper", ""], ["fileInput", ""], [1, "add-educator-container", 3, "click"], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight"], [1, "container-fluid", "mt-4", "mb-4"], [3, "title", "breadcrumbs", "actions"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-input"], [1, "bi", "bi-telephone", "input-icon"], ["type", "text", "formControlName", "phone", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-shield-lock"], [1, "bi", "bi-envelope", "input-icon"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], [1, "form-hint"], [1, "bi", "bi-key", "input-icon"], ["formControlName", "password", 1, "form-input", 3, "type", "placeholder"], [2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-briefcase"], [1, "bi", "bi-calendar-check", "input-icon"], ["type", "date", "formControlName", "hireDate", 1, "form-input"], [1, "bi", "bi-mortarboard", "input-icon"], ["formControlName", "specialization", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "bi", "bi-currency-dollar", "input-icon"], ["type", "number", "formControlName", "salary", "min", "0", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-geo-alt", "input-icon"], ["formControlName", "address", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "status-toggle"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "toggle-input"], ["for", "isActive", 1, "toggle-slider"], [1, "info-note"], [1, "note-icon"], [1, "bi", "bi-info-circle"], [1, "note-content"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddEducator_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function AddEducator_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dismissKeyboard($event));
      });
      \u0275\u0275elementStart(1, "app-image-cropper-modal", 3, 0);
      \u0275\u0275listener("imageCropped", function AddEducator_Template_app_image_cropper_modal_imageCropped_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function AddEducator_Template_app_image_cropper_modal_cancelled_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275element(4, "app-title-page", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 6)(7, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddEducator_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveEducator());
      });
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
      \u0275\u0275element(10, "i", 10);
      \u0275\u0275elementStart(11, "h4");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "label", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275element(21, "i", 15)(22, "input", 16);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, AddEducator_div_24_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 12)(26, "label", 13);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 14);
      \u0275\u0275element(31, "i", 15)(32, "input", 18);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, AddEducator_div_34_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "label", 13);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 14);
      \u0275\u0275element(41, "i", 19)(42, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, AddEducator_div_43_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 12)(45, "label", 13);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 14);
      \u0275\u0275element(49, "i", 21)(50, "input", 22);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, AddEducator_div_52_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 8)(54, "div", 9);
      \u0275\u0275element(55, "i", 23);
      \u0275\u0275elementStart(56, "h4");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 11)(60, "div", 12)(61, "label", 13);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 14);
      \u0275\u0275element(66, "i", 24)(67, "input", 25);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "small", 26);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, AddEducator_div_72_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 12)(74, "label", 13);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 14);
      \u0275\u0275element(79, "i", 27)(80, "input", 28);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementStart(82, "i", 29);
      \u0275\u0275listener("click", function AddEducator_Template_i_click_82_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.togglePasswordVisibility());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "small", 26);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, AddEducator_div_86_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 8)(88, "div", 9);
      \u0275\u0275element(89, "i", 30);
      \u0275\u0275elementStart(90, "h4");
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 11)(94, "div", 12)(95, "label", 13);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 14);
      \u0275\u0275element(100, "i", 31)(101, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(102, AddEducator_div_102_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 12)(104, "label", 13);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 14);
      \u0275\u0275element(108, "i", 33);
      \u0275\u0275elementStart(109, "ng-select", 34);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275template(111, AddEducator_ng_template_111_Template, 4, 4, "ng-template", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 12)(113, "label", 13);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 14);
      \u0275\u0275element(118, "i", 36)(119, "input", 37);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(121, AddEducator_div_121_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 38)(123, "label", 13);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 14);
      \u0275\u0275element(127, "i", 39)(128, "textarea", 40);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(130, AddEducator_div_130_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "div", 8)(132, "div", 9);
      \u0275\u0275element(133, "i", 41);
      \u0275\u0275elementStart(134, "h4");
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 11)(138, "div", 12)(139, "label", 13);
      \u0275\u0275text(140);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 42)(143, "input", 43, 1);
      \u0275\u0275listener("change", function AddEducator_Template_input_change_143_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "label", 44);
      \u0275\u0275template(146, AddEducator_div_146_Template, 5, 3, "div", 45)(147, AddEducator_img_147_Template, 2, 4, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275template(148, AddEducator_button_148_Template, 4, 3, "button", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "small", 26);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 12)(153, "label", 13);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 48)(157, "label", 49);
      \u0275\u0275text(158);
      \u0275\u0275pipe(159, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 50);
      \u0275\u0275element(161, "input", 51)(162, "label", 52);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(163, "div", 53)(164, "div", 54);
      \u0275\u0275element(165, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 56)(167, "h5");
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p");
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 57)(174, "button", 58);
      \u0275\u0275listener("click", function AddEducator_Template_button_click_174_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275element(175, "i", 59);
      \u0275\u0275text(176);
      \u0275\u0275pipe(177, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 60);
      \u0275\u0275template(179, AddEducator_span_179_Template, 1, 0, "span", 61)(180, AddEducator_i_180_Template, 1, 0, "i", 62);
      \u0275\u0275text(181);
      \u0275\u0275pipe(182, "translate");
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 300)("resizeToHeight", 300);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 88, "ADD_EDUCATOR.TITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.educatorForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 90, "ADD_EDUCATOR.PERSONAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(18, 92, "ADD_EDUCATOR.FIRST_NAME"), " ", \u0275\u0275pipeBind1(19, 94, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 96, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(28, 98, "ADD_EDUCATOR.LAST_NAME"), " ", \u0275\u0275pipeBind1(29, 100, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 102, "GLOBAL.LAST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(38, 104, "ADD_EDUCATOR.DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(39, 106, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("dateOfBirth"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("dateOfBirth"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 108, "ADD_EDUCATOR.PHONE"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("phone"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 110, "ADD_EDUCATOR.PHONE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("phone"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 112, "ADD_EDUCATOR.ACCOUNT_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(63, 114, "ADD_EDUCATOR.EMAIL"), " ", \u0275\u0275pipeBind1(64, 116, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(68, 118, "ADD_EDUCATOR.EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 120, "ADD_EDUCATOR.EMAIL_HINT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(76, 122, "ADD_EDUCATOR.PASSWORD"), " ", \u0275\u0275pipeBind1(77, 124, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(81, 126, "ADD_EDUCATOR.PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.showPassword ? "bi bi-eye toggle-password" : "bi bi-eye-slash toggle-password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 128, "ADD_EDUCATOR.PASSWORD_HINT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("password"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 130, "ADD_EDUCATOR.PROFESSIONAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(97, 132, "ADD_EDUCATOR.HIRE_DATE"), " ", \u0275\u0275pipeBind1(98, 134, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 136, "ADD_EDUCATOR.SPECIALIZATION"));
      \u0275\u0275advance(4);
      \u0275\u0275property("items", ctx.specializations)("placeholder", \u0275\u0275pipeBind1(110, 138, "ADD_EDUCATOR.SELECT_SPECIALIZATION"))("clearable", true)("searchable", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(115, 140, "ADD_EDUCATOR.SALARY"), " ", \u0275\u0275pipeBind1(116, 142, "ADD_EDUCATOR.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("salary"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(120, 144, "ADD_EDUCATOR.SALARY_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("salary"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(125, 146, "ADD_EDUCATOR.ADDRESS"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("address"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(129, 148, "ADD_EDUCATOR.ADDRESS_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("address"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 150, "ADD_EDUCATOR.PHOTO_STATUS"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 152, "ADD_EDUCATOR.PROFILE_PICTURE"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 154, "GLOBAL.IMAGE_HINT"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 156, "ADD_EDUCATOR.STATUS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(159, 158, "ADD_EDUCATOR.ACTIVE_STATUS"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 160, "ADD_EDUCATOR.INFO_NOTE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(172, 162, "ADD_EDUCATOR.INFO_MESSAGE"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(177, 164, "ADD_EDUCATOR.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(182, 166, "ADD_EDUCATOR.CREATING") : \u0275\u0275pipeBind1(183, 168, "ADD_EDUCATOR.CREATE_EDUCATOR"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, ImageCropperModalComponent, TitlePage, TranslatePipe], styles: ["\n\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-educator.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEducator, [{
    type: Component,
    args: [{ selector: "app-add-educator", imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgSelectModule, ImageCropperModalComponent, TitlePage], standalone: true, template: `<div class="add-educator-container" (click)="dismissKeyboard($event)">\r
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
    <app-title-page [title]="'ADD_EDUCATOR.TITLE' | translate" [breadcrumbs]="breadcrumbs" [actions]="titleActions">\r
    </app-title-page>\r
\r
    <div class="card-add-pages">\r
      <form [formGroup]="educatorForm" (ngSubmit)="saveEducator()" class="add-form">\r
        <!-- Section Personal Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-person-circle"></i>\r
            <h4>{{ 'ADD_EDUCATOR.PERSONAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.FIRST_NAME' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('firstName')" formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('firstName')" class="error-message">\r
                {{ getFieldError('firstName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.LAST_NAME' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('lastName')" formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('lastName')" class="error-message">\r
                {{ getFieldError('lastName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.DATE_OF_BIRTH' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('dateOfBirth')" formControlName="dateOfBirth">\r
              </div>\r
              <div *ngIf="isFieldInvalid('dateOfBirth')" class="error-message">\r
                {{ getFieldError('dateOfBirth') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.PHONE' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-telephone input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('phone')" formControlName="phone" [placeholder]="'ADD_EDUCATOR.PHONE_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('phone')" class="error-message">\r
                {{ getFieldError('phone') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Account Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-shield-lock"></i>\r
            <h4>{{ 'ADD_EDUCATOR.ACCOUNT_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.EMAIL' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-envelope input-icon"></i>\r
                <input type="email" class="form-input" [class.is-invalid]="isFieldInvalid('email')" formControlName="email" [placeholder]="'ADD_EDUCATOR.EMAIL_PLACEHOLDER' | translate">\r
              </div>\r
              <small class="form-hint">{{ 'ADD_EDUCATOR.EMAIL_HINT' | translate }}</small>\r
              <div *ngIf="isFieldInvalid('email')" class="error-message">\r
                {{ getFieldError('email') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.PASSWORD' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-key input-icon"></i>\r
                <input [type]="showPassword ? 'text' : 'password'" class="form-input" [class.is-invalid]="isFieldInvalid('password')" formControlName="password" [placeholder]="'ADD_EDUCATOR.PASSWORD_PLACEHOLDER' | translate">\r
                <i [class]="showPassword ? 'bi bi-eye toggle-password' : 'bi bi-eye-slash toggle-password'" (click)="togglePasswordVisibility()" style="cursor: pointer;"></i>\r
              </div>\r
              <small class="form-hint">{{ 'ADD_EDUCATOR.PASSWORD_HINT' | translate }}</small>\r
              <div *ngIf="isFieldInvalid('password')" class="error-message">\r
                {{ getFieldError('password') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Professional Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-briefcase"></i>\r
            <h4>{{ 'ADD_EDUCATOR.PROFESSIONAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.HIRE_DATE' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar-check input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('hireDate')" formControlName="hireDate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('hireDate')" class="error-message">\r
                {{ getFieldError('hireDate') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.SPECIALIZATION' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-mortarboard input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  formControlName="specialization"\r
                  [items]="specializations"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_EDUCATOR.SELECT_SPECIALIZATION' | translate"\r
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
              <label class="form-label">{{ 'ADD_EDUCATOR.SALARY' | translate }} {{ 'ADD_EDUCATOR.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-currency-dollar input-icon"></i>\r
                <input type="number" class="form-input" [class.is-invalid]="isFieldInvalid('salary')" formControlName="salary" min="0" [placeholder]="'ADD_EDUCATOR.SALARY_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('salary')" class="error-message">\r
                {{ getFieldError('salary') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.ADDRESS' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-geo-alt input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('address')" formControlName="address" rows="3" [placeholder]="'ADD_EDUCATOR.ADDRESS_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('address')" class="error-message">\r
                {{ getFieldError('address') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Photo and Status -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'ADD_EDUCATOR.PHOTO_STATUS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.PROFILE_PICTURE' | translate }}</label>\r
              <div class="file-upload-area">\r
                <input type="file" #fileInput id="profilePicture" class="file-input" (change)="onImageSelect($event)" accept="image/jpeg,image/png,image/gif,image/webp">\r
                <label for="profilePicture" class="file-upload-label">\r
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
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_EDUCATOR.STATUS' | translate }}</label>\r
              <div class="status-toggle">\r
                <label class="toggle-label">{{ 'ADD_EDUCATOR.ACTIVE_STATUS' | translate }}</label>\r
                <div class="toggle-switch">\r
                  <input type="checkbox" formControlName="isActive" id="isActive" class="toggle-input">\r
                  <label for="isActive" class="toggle-slider"></label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Info Note -->\r
        <div class="info-note">\r
          <div class="note-icon">\r
            <i class="bi bi-info-circle"></i>\r
          </div>\r
          <div class="note-content">\r
            <h5>{{ 'ADD_EDUCATOR.INFO_NOTE' | translate }}</h5>\r
            <p>{{ 'ADD_EDUCATOR.INFO_MESSAGE' | translate }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'ADD_EDUCATOR.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('ADD_EDUCATOR.CREATING' | translate) : ('ADD_EDUCATOR.CREATE_EDUCATOR' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/educator/add-educator/add-educator.scss */\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-educator.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: EducatorService }, { type: Router }, { type: TranslateService }, { type: SimpleToastService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEducator, { className: "AddEducator", filePath: "src/app/features/educator/add-educator/add-educator.ts", lineNumber: 21 });
})();
export {
  AddEducator
};
//# sourceMappingURL=chunk-JUH7C4F3.js.map
