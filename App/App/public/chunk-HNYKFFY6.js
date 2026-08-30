import {
  ImageCropperModalComponent
} from "./chunk-KWJDSYHH.js";
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
  ParentService
} from "./chunk-DDBL3ML4.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
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

// src/app/features/children/add-children/add-children.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["imageCropper"];
function AddChildren_app_title_page_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 51);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 4, "ADD_CHILD.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 6, "ADD_CHILD.SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.titleActions);
  }
}
function AddChildren_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("firstName"), " ");
  }
}
function AddChildren_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("lastName"), " ");
  }
}
function AddChildren_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275elementStart(2, "span", 55);
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
function AddChildren_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("gender"), " ");
  }
}
function AddChildren_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("dateOfBirth"), " ");
  }
}
function AddChildren_div_54_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "img", 60);
    \u0275\u0275elementStart(2, "div", 61)(3, "span", 55);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r4 == null ? null : item_r4.profilePicture) || "assets/father.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r4.firstName, " ", item_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.email);
  }
}
function AddChildren_div_54_ng_template_17_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 65);
    \u0275\u0275elementStart(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r5 == null ? null : item_r5.profilePicture) || "assets/father.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r5.firstName, " ", item_r5.lastName);
  }
}
function AddChildren_div_54_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AddChildren_div_54_ng_template_17_div_0_Template, 4, 3, "div", 63);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275property("ngIf", item_r5 == null ? null : item_r5.id);
  }
}
function AddChildren_div_54_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("parentId"), " ");
  }
}
function AddChildren_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "label", 13);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275element(13, "i", 57);
    \u0275\u0275elementStart(14, "ng-select", 58);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275template(16, AddChildren_div_54_ng_template_16_Template, 7, 4, "ng-template", 21)(17, AddChildren_div_54_ng_template_17_Template, 1, 1, "ng-template", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AddChildren_div_54_div_18_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, "ADD_CHILD.PARENT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 13, "ADD_CHILD.PARENT"), " ", \u0275\u0275pipeBind1(11, 15, "ADD_CHILD.REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("parentId"));
    \u0275\u0275property("items", ctx_r1.parents)("placeholder", \u0275\u0275pipeBind1(15, 17, "ADD_CHILD.SELECT_PARENT"))("searchFn", ctx_r1.searchParentsFullName)("clearable", true)("searchable", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("parentId"));
  }
}
function AddChildren_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("allergies"), " ");
  }
}
function AddChildren_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("medicalNotes"), " ");
  }
}
function AddChildren_div_95_Template(rf, ctx) {
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
function AddChildren_img_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 69);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.imagePreview, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(1, 2, "GLOBAL.PREVIEW"));
  }
}
function AddChildren_button_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function AddChildren_button_97_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeImage());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "GLOBAL.REMOVE_PHOTO"), " ");
  }
}
function AddChildren_span_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function AddChildren_i_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 72);
  }
}
var AddChildren = class _AddChildren {
  fb;
  childrenService;
  parentService;
  authService;
  router;
  simpleToastService;
  translate;
  fileInput;
  imageCropper;
  saving = false;
  imagePreview = null;
  selectedImageFile = null;
  parents = [];
  childForm;
  // Validation constants
  MAX_FILE_SIZE = 2 * 1024 * 1024;
  // 2MB
  ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  genders = [];
  constructor(fb, childrenService, parentService, authService, router, simpleToastService, translate) {
    this.fb = fb;
    this.childrenService = childrenService;
    this.parentService = parentService;
    this.authService = authService;
    this.router = router;
    this.simpleToastService = simpleToastService;
    this.translate = translate;
  }
  ngOnInit() {
    this.initGenders();
    this.initBreadcrumbs();
    this.initTitleActions();
    this.initForm();
    this.loadParents();
    const currentParentId = this.authService.getParentId();
    if (currentParentId) {
      this.childForm.patchValue({ parentId: currentParentId });
    }
    this.translate.onLangChange.subscribe(() => {
      this.initGenders();
      this.initBreadcrumbs();
      this.initTitleActions();
    });
  }
  initGenders() {
    this.genders = [
      { value: "Male", label: this.translate.instant("COMMON.MALE"), icon: "bi-gender-male" },
      { value: "Female", label: this.translate.instant("COMMON.FEMALE"), icon: "bi-gender-female" }
    ];
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.CHILDREN"), url: "/children" },
      { label: this.translate.instant("BREADCRUMBS.ADD_CHILD") }
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
    this.router.navigate(["/children"]);
  }
  initForm() {
    this.childForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      dateOfBirth: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      allergies: ["", [Validators.maxLength(500)]],
      medicalNotes: ["", [Validators.maxLength(1e3)]],
      profilePicture: [""],
      parentId: [0, [Validators.required, Validators.min(1)]],
      isActive: [true]
    });
  }
  loadParents() {
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.parentService.loadParents().subscribe({
        next: (parents) => {
          this.parents = parents;
        },
        error: (error) => {
          const sanitizedMessage = this.sanitizeLogMessage(error?.message);
          console.error(`Error loading parents: ${sanitizedMessage}`);
          this.simpleToastService.error(this.translate.instant("MESSAGES.LOAD_PARENTS_ERROR"));
        }
      });
    }
  }
  saveChild() {
    if (this.childForm.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    const childData = this.childForm.value;
    this.childrenService.addChild(childData).subscribe({
      next: (createdChild) => {
        if (this.selectedImageFile && createdChild?.id) {
          this.childrenService.uploadChildProfilePicture(createdChild.id, this.selectedImageFile).subscribe({
            next: () => {
              this.saving = false;
              showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
              this.router.navigate(["/children"]);
            },
            error: () => {
              this.saving = false;
              showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
              this.router.navigate(["/children"]);
            }
          });
        } else {
          this.saving = false;
          showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          this.router.navigate(["/children"]);
        }
      },
      error: (error) => {
        this.saving = false;
        const sanitizedMessage = this.sanitizeLogMessage(error?.message);
        const sanitizedStatus = typeof error?.status === "number" ? error.status : 0;
        const sanitizedStatusText = this.sanitizeLogMessage(error?.statusText);
        console.error(`Failed to create child: status=${sanitizedStatus}, statusText=${sanitizedStatusText}, message=${sanitizedMessage}`);
        this.simpleToastService.error(this.translate.instant("MESSAGES.CHILD_CREATE_ERROR"));
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
    if (this.childForm.dirty) {
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
          this.router.navigate(["/children"]);
        }
      });
    } else {
      this.router.navigate(["/children"]);
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
      this.simpleToastService.error(this.translate.instant("MESSAGES.FILE_TOO_LARGE", { size: this.getReadableFileSize() }));
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
    this.childForm.patchValue({ profilePicture: "" });
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
    this.childForm.patchValue({ profilePicture: "" });
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
  }
  getReadableFileSize() {
    const sizeInMB = this.MAX_FILE_SIZE / (1024 * 1024);
    return `${sizeInMB}MB`;
  }
  markFormGroupTouched() {
    Object.values(this.childForm.controls).forEach((control) => {
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
    return this.childForm.controls;
  }
  dismissKeyboard(event) {
    const target = event.target;
    const tag = target.tagName;
    if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT" && !target.closest("ng-select")) {
      document.activeElement?.blur();
    }
  }
  isFieldInvalid(fieldName) {
    const field = this.childForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.childForm.get(fieldName);
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
      return this.translate.instant("VALIDATION.REQUIRED");
    }
    return this.translate.instant("VALIDATION.INVALID_FIELD");
  }
  isParent() {
    return this.authService.isParent();
  }
  searchParentsFullName(term, item) {
    term = term.toLowerCase();
    return item.firstName?.toLowerCase().includes(term) || item.lastName?.toLowerCase().includes(term);
  }
  static \u0275fac = function AddChildren_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddChildren)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SimpleToastService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddChildren, selectors: [["app-add-children"]], viewQuery: function AddChildren_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageCropper = _t.first);
    }
  }, decls: 123, vars: 112, consts: [["imageCropper", ""], ["fileInput", ""], [1, "add-child-container", 3, "click"], [3, "imageCropped", "cancelled", "imageFile", "roundCropper", "aspectRatio", "resizeToWidth", "resizeToHeight", "format", "quality"], [1, "container-fluid", "mt-4", "mb-4"], ["icon", "bi bi-person-plus-fill", 3, "title", "subtitle", "breadcrumbs", "actions", 4, "ngIf"], [1, "card-add-pages"], [1, "add-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-person-circle"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-gender-ambiguous", "input-icon"], ["formControlName", "gender", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "bi", "bi-calendar", "input-icon"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-input"], ["class", "form-section", 4, "ngIf"], [1, "bi", "bi-heart-pulse"], [1, "form-group", "full-width", "textarea"], [1, "bi", "bi-exclamation-triangle", "input-icon"], ["formControlName", "allergies", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], [1, "bi", "bi-clipboard2-pulse", "input-icon"], ["formControlName", "medicalNotes", "rows", "3", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-image"], [1, "file-upload-area"], ["type", "file", "id", "profilePicture", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "file-input", 3, "change"], ["for", "profilePicture", 1, "file-upload-label"], ["class", "upload-placeholder", 4, "ngIf"], ["class", "preview-image", 3, "src", "alt", 4, "ngIf"], ["type", "button", "class", "btn-remove-image", 3, "click", 4, "ngIf"], [1, "form-hint"], [1, "status-toggle"], [1, "toggle-label"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", "id", "isActive", 1, "toggle-input"], ["for", "isActive", 1, "toggle-slider"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click", "disabled"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], ["icon", "bi bi-person-plus-fill", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "error-message"], [1, "option-with-image"], [2, "font-size", "18px", "color", "#7dd3c0"], [1, "option-title"], [1, "bi", "bi-people"], [1, "bi", "bi-person-badge", "input-icon"], ["formControlName", "parentId", "bindLabel", "firstName", "bindValue", "id", 1, "form-input", 3, "items", "placeholder", "searchFn", "clearable", "searchable"], ["ng-label-tmp", ""], ["alt", "", 1, "option-image", 3, "src"], [1, "option-text"], [1, "option-subtitle"], ["class", "selected-with-image", 4, "ngIf"], [1, "selected-with-image"], ["alt", "", 1, "selected-image", 3, "src"], [1, "selected-text"], [1, "upload-placeholder"], [1, "bi", "bi-cloud-upload"], [1, "preview-image", 3, "src", "alt"], ["type", "button", 1, "btn-remove-image", 3, "click"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddChildren_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function AddChildren_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dismissKeyboard($event));
      });
      \u0275\u0275elementStart(1, "app-image-cropper-modal", 3, 0);
      \u0275\u0275listener("imageCropped", function AddChildren_Template_app_image_cropper_modal_imageCropped_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageCropped($event));
      })("cancelled", function AddChildren_Template_app_image_cropper_modal_cancelled_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCropCancelled());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275template(4, AddChildren_app_title_page_4_Template, 3, 8, "app-title-page", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddChildren_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.saveChild());
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
      \u0275\u0275template(23, AddChildren_div_23_Template, 2, 1, "div", 17);
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
      \u0275\u0275template(33, AddChildren_div_33_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 12)(35, "label", 13);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275element(40, "i", 19);
      \u0275\u0275elementStart(41, "ng-select", 20);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275template(43, AddChildren_ng_template_43_Template, 4, 4, "ng-template", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, AddChildren_div_44_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 12)(46, "label", 13);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 14);
      \u0275\u0275element(51, "i", 22)(52, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, AddChildren_div_53_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(54, AddChildren_div_54_Template, 19, 19, "div", 24);
      \u0275\u0275elementStart(55, "div", 8)(56, "div", 9);
      \u0275\u0275element(57, "i", 25);
      \u0275\u0275elementStart(58, "h4");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 11)(62, "div", 26)(63, "label", 13);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 14);
      \u0275\u0275element(67, "i", 27)(68, "textarea", 28);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, AddChildren_div_70_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 29)(72, "label", 13);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 14);
      \u0275\u0275element(76, "i", 30)(77, "textarea", 31);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, AddChildren_div_79_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 8)(81, "div", 9);
      \u0275\u0275element(82, "i", 32);
      \u0275\u0275elementStart(83, "h4");
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 11)(87, "div", 12)(88, "label", 13);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 33)(92, "input", 34, 1);
      \u0275\u0275listener("change", function AddChildren_Template_input_change_92_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImageSelect($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "label", 35);
      \u0275\u0275template(95, AddChildren_div_95_Template, 5, 3, "div", 36)(96, AddChildren_img_96_Template, 2, 4, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(97, AddChildren_button_97_Template, 4, 3, "button", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "small", 39);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 12)(102, "label", 13);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 40)(106, "label", 41);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 42);
      \u0275\u0275element(110, "input", 43)(111, "label", 44);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 45)(113, "button", 46);
      \u0275\u0275listener("click", function AddChildren_Template_button_click_113_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275element(114, "i", 47);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "button", 48);
      \u0275\u0275template(118, AddChildren_span_118_Template, 1, 0, "span", 49)(119, AddChildren_i_119_Template, 1, 0, "i", 50);
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("imageFile", ctx.selectedImageFile)("roundCropper", true)("aspectRatio", 1)("resizeToWidth", 200)("resizeToHeight", 200)("format", "jpeg")("quality", 70);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.isParent());
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.childForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 62, "ADD_CHILD.GENERAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(17, 64, "ADD_CHILD.FIRST_NAME"), " ", \u0275\u0275pipeBind1(18, 66, "ADD_CHILD.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 68, "GLOBAL.FIRST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(27, 70, "ADD_CHILD.LAST_NAME"), " ", \u0275\u0275pipeBind1(28, 72, "ADD_CHILD.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 74, "GLOBAL.LAST_NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(37, 76, "ADD_CHILD.GENDER"), " ", \u0275\u0275pipeBind1(38, 78, "ADD_CHILD.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("gender"));
      \u0275\u0275property("items", ctx.genders)("placeholder", \u0275\u0275pipeBind1(42, 80, "ADD_CHILD.SELECT_GENDER"))("clearable", false)("searchable", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("gender"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(48, 82, "ADD_CHILD.DATE_OF_BIRTH"), " ", \u0275\u0275pipeBind1(49, 84, "ADD_CHILD.REQUIRED"));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("dateOfBirth"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("dateOfBirth"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 86, "ADD_CHILD.MEDICAL_INFO"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 88, "ADD_CHILD.ALLERGIES"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("allergies"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 90, "ADD_CHILD.ALLERGIES_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("allergies"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 92, "ADD_CHILD.MEDICAL_NOTES"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("medicalNotes"));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(78, 94, "ADD_CHILD.MEDICAL_NOTES_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("medicalNotes"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 96, "ADD_CHILD.PHOTO_STATUS"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 98, "ADD_CHILD.PROFILE_PICTURE"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.imagePreview);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 100, "GLOBAL.IMAGE_HINT"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(104, 102, "ADD_CHILD.Status"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 104, "ADD_CHILD.ACTIVE_STATUS"));
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(116, 106, "ADD_CHILD.CANCEL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving ? \u0275\u0275pipeBind1(121, 108, "ADD_CHILD.SAVING") : \u0275\u0275pipeBind1(122, 110, "ADD_CHILD.SAVE_CHILD"), " ");
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TitlePage, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, ImageCropperModalComponent, TranslatePipe], styles: ["\n\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-top: 4px;\n}\n.form-input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.form-input.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);\n}\n@media (max-width: 768px) {\n  .child-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-children.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddChildren, [{
    type: Component,
    args: [{ selector: "app-add-children", imports: [CommonModule, ReactiveFormsModule, TitlePage, TranslateModule, NgSelectModule, ImageCropperModalComponent], standalone: true, template: `<div class="add-child-container" (click)="dismissKeyboard($event)">\r
  <!-- Image Cropper Modal -->\r
  <app-image-cropper-modal\r
    #imageCropper\r
    [imageFile]="selectedImageFile"\r
    [roundCropper]="true"\r
    [aspectRatio]="1"\r
    [resizeToWidth]="200"\r
    [resizeToHeight]="200"\r
    [format]="'jpeg'"\r
    [quality]="70"\r
    (imageCropped)="onImageCropped($event)"\r
    (cancelled)="onCropCancelled()">\r
  </app-image-cropper-modal>\r
\r
  <div class="container-fluid mt-4 mb-4">\r
    <app-title-page *ngIf="!isParent()"\r
      [title]="'ADD_CHILD.TITLE' | translate"\r
      [subtitle]="'ADD_CHILD.SUBTITLE' | translate"\r
      icon="bi bi-person-plus-fill"\r
      [breadcrumbs]="breadcrumbs"\r
      [actions]="titleActions">\r
    </app-title-page>\r
\r
    <div class="card-add-pages">\r
      <form [formGroup]="childForm" (ngSubmit)="saveChild()" class="add-form">\r
        <!-- Section Personal Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-person-circle"></i>\r
            <h4>{{ 'ADD_CHILD.GENERAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.FIRST_NAME' | translate }} {{ 'ADD_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('firstName')" formControlName="firstName" [placeholder]="'GLOBAL.FIRST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('firstName')" class="error-message">\r
                {{ getFieldError('firstName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.LAST_NAME' | translate }} {{ 'ADD_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person input-icon"></i>\r
                <input type="text" class="form-input" [class.is-invalid]="isFieldInvalid('lastName')" formControlName="lastName" [placeholder]="'GLOBAL.LAST_NAME_PLACEHOLDER' | translate">\r
              </div>\r
              <div *ngIf="isFieldInvalid('lastName')" class="error-message">\r
                {{ getFieldError('lastName') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.GENDER' | translate }} {{ 'ADD_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-gender-ambiguous input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('gender')"\r
                  formControlName="gender"\r
                  [items]="genders"\r
                  bindLabel="label"\r
                  bindValue="value"\r
                  [placeholder]="'ADD_CHILD.SELECT_GENDER' | translate"\r
                  [clearable]="false"\r
                  [searchable]="true">\r
                  <!-- Custom option template with icon -->\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <i class="bi {{item.icon}}" style="font-size: 18px; color: #7dd3c0;"></i>\r
                      <span class="option-title">{{ item.label }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('gender')" class="error-message">\r
                {{ getFieldError('gender') }}\r
              </div>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.DATE_OF_BIRTH' | translate }} {{ 'ADD_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-calendar input-icon"></i>\r
                <input type="date" class="form-input" [class.is-invalid]="isFieldInvalid('dateOfBirth')" formControlName="dateOfBirth">\r
              </div>\r
              <div *ngIf="isFieldInvalid('dateOfBirth')" class="error-message">\r
                {{ getFieldError('dateOfBirth') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Parent Selection (only for admin/teacher) -->\r
        <div class="form-section" *ngIf="!isParent()">\r
          <div class="section-header">\r
            <i class="bi bi-people"></i>\r
            <h4>{{ 'ADD_CHILD.PARENT' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.PARENT' | translate }} {{ 'ADD_CHILD.REQUIRED' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-person-badge input-icon"></i>\r
                <ng-select\r
                  class="form-input"\r
                  [class.is-invalid]="isFieldInvalid('parentId')"\r
                  formControlName="parentId"\r
                  [items]="parents"\r
                  bindLabel="firstName"\r
                  bindValue="id"\r
                  [placeholder]="'ADD_CHILD.SELECT_PARENT' | translate"\r
                  [searchFn]="searchParentsFullName"\r
                  [clearable]="true"\r
                  [searchable]="true">\r
                  <!-- Custom option template with image -->\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="option-with-image">\r
                      <img [src]="item?.profilePicture || 'assets/father.png'" class="option-image" alt="">\r
                      <div class="option-text">\r
                        <span class="option-title">{{ item.firstName }} {{ item.lastName }}</span>\r
                        <span class="option-subtitle">{{ item.email }}</span>\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <!-- Custom selected label template -->\r
                  <ng-template ng-label-tmp let-item="item">\r
                    <div class="selected-with-image" *ngIf="item?.id">\r
                      <img [src]="item?.profilePicture || 'assets/father.png'" class="selected-image" alt="">\r
                      <span class="selected-text">{{ item.firstName }} {{ item.lastName }}</span>\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
              </div>\r
              <div *ngIf="isFieldInvalid('parentId')" class="error-message">\r
                {{ getFieldError('parentId') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Medical Information -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-heart-pulse"></i>\r
            <h4>{{ 'ADD_CHILD.MEDICAL_INFO' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group full-width textarea">\r
              <label class="form-label">{{ 'ADD_CHILD.ALLERGIES' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-exclamation-triangle input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('allergies')" formControlName="allergies" rows="3" [placeholder]="'ADD_CHILD.ALLERGIES_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('allergies')" class="error-message">\r
                {{ getFieldError('allergies') }}\r
              </div>\r
            </div>\r
            <div class="form-group full-width">\r
              <label class="form-label">{{ 'ADD_CHILD.MEDICAL_NOTES' | translate }}</label>\r
              <div class="input-with-icon">\r
                <i class="bi bi-clipboard2-pulse input-icon"></i>\r
                <textarea class="form-input" [class.is-invalid]="isFieldInvalid('medicalNotes')" formControlName="medicalNotes" rows="3" [placeholder]="'ADD_CHILD.MEDICAL_NOTES_PLACEHOLDER' | translate"></textarea>\r
              </div>\r
              <div *ngIf="isFieldInvalid('medicalNotes')" class="error-message">\r
                {{ getFieldError('medicalNotes') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Section Photo and Status -->\r
        <div class="form-section">\r
          <div class="section-header">\r
            <i class="bi bi-image"></i>\r
            <h4>{{ 'ADD_CHILD.PHOTO_STATUS' | translate }}</h4>\r
          </div>\r
          <div class="form-grid">\r
            <div class="form-group">\r
              <label class="form-label">{{ 'ADD_CHILD.PROFILE_PICTURE' | translate }}</label>\r
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
              <label class="form-label">{{ 'ADD_CHILD.Status' | translate }}</label>\r
              <div class="status-toggle">\r
                <label class="toggle-label">{{ 'ADD_CHILD.ACTIVE_STATUS' | translate }}</label>\r
                <div class="toggle-switch">\r
                  <input type="checkbox" formControlName="isActive" id="isActive" class="toggle-input">\r
                  <label for="isActive" class="toggle-slider"></label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Action Buttons -->\r
        <div class="form-actions">\r
          <button type="button" class="custom-btn-2 btn-cancel-2" (click)="cancel()" [disabled]="saving">\r
            <i class="bi bi-x-circle"></i>\r
            {{ 'ADD_CHILD.CANCEL' | translate }}\r
          </button>\r
          <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="saving">\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            <i *ngIf="!saving" class="bi bi-check-circle"></i>\r
            {{ saving ? ('ADD_CHILD.SAVING' | translate) : ('ADD_CHILD.SAVE_CHILD' | translate) }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/children/add-children/add-children.scss */\ntextarea.form-input {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-hint {\n  font-size: 12px;\n  color: #888;\n  margin-top: 4px;\n}\n.form-input.is-invalid {\n  border-color: #dc3545;\n  background: #fff8f8;\n}\n.form-input.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);\n}\n@media (max-width: 768px) {\n  .child-form {\n    padding: 20px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .form-actions {\n    flex-direction: row;\n  }\n  .form-actions .btn-cancel,\n  .form-actions .btn-submit {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n/*# sourceMappingURL=add-children.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ChildrenService }, { type: ParentService }, { type: AuthService }, { type: Router }, { type: SimpleToastService }, { type: TranslateService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], imageCropper: [{
    type: ViewChild,
    args: ["imageCropper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddChildren, { className: "AddChildren", filePath: "src/app/features/children/add-children/add-children.ts", lineNumber: 25 });
})();
export {
  AddChildren
};
//# sourceMappingURL=chunk-HNYKFFY6.js.map
