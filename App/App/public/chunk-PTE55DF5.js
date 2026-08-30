import {
  TenantService
} from "./chunk-CKPEZZTC.js";
import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
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
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  HostBinding,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/super-admin/tenants/add-tenant/add-tenant.ts
function AddTenant_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275listener("click", function AddTenant_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "h5", 11);
    \u0275\u0275text(8, " Daycare");
    \u0275\u0275elementEnd()()()()();
  }
}
function AddTenant_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(1, 4, "SUPER_ADMIN.EDIT_DAYCARE") : \u0275\u0275pipeBind1(2, 6, "SUPER_ADMIN.ADD_DAYCARE"))("subtitle", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(3, 8, "SUPER_ADMIN.EDIT_DAYCARE_SUBTITLE") : \u0275\u0275pipeBind1(4, 10, "SUPER_ADMIN.ADD_DAYCARE_SUBTITLE"))("icon", ctx_r1.isEditMode ? "bi bi-pencil-square" : "bi bi-plus-circle")("breadcrumbs", ctx_r1.breadcrumbs);
  }
}
function AddTenant_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function AddTenant_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function AddTenant_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("name")), " ");
  }
}
function AddTenant_div_5_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("subdomain")), " ");
  }
}
function AddTenant_div_5_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("email")), " ");
  }
}
function AddTenant_div_5_div_88_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("adminFirstName")), " ");
  }
}
function AddTenant_div_5_div_88_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("adminLastName")), " ");
  }
}
function AddTenant_div_5_div_88_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("adminEmail")), " ");
  }
}
function AddTenant_div_5_div_88_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.getFieldError("adminPassword")), " ");
  }
}
function AddTenant_div_5_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "label", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275element(15, "i", 59)(16, "input", 60);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AddTenant_div_5_div_88_div_18_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23)(20, "label", 24);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 25);
    \u0275\u0275element(24, "i", 59)(25, "input", 61);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AddTenant_div_5_div_88_div_27_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 23)(29, "label", 24);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 25);
    \u0275\u0275element(33, "i", 32)(34, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AddTenant_div_5_div_88_div_35_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 23)(37, "label", 24);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 25);
    \u0275\u0275element(41, "i", 63)(42, "input", 64);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small", 31);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, AddTenant_div_5_div_88_div_47_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 22, "SUPER_ADMIN.ADMIN_USER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 24, "SUPER_ADMIN.ADMIN_USER_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 26, "SUPER_ADMIN.ADMIN_FIRST_NAME"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("adminFirstName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 28, "SUPER_ADMIN.FIRST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("adminFirstName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 30, "SUPER_ADMIN.ADMIN_LAST_NAME"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("adminLastName"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 32, "SUPER_ADMIN.LAST_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("adminLastName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 34, "SUPER_ADMIN.ADMIN_EMAIL"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("adminEmail"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("adminEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 36, "SUPER_ADMIN.ADMIN_PASSWORD"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("adminPassword"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 38, "SUPER_ADMIN.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 40, "SUPER_ADMIN.PASSWORD_REQUIREMENTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("adminPassword"));
  }
}
function AddTenant_div_5_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 65);
  }
}
function AddTenant_div_5_i_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 66);
  }
}
function AddTenant_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "form", 17);
    \u0275\u0275listener("ngSubmit", function AddTenant_div_5_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(2, AddTenant_div_5_div_2_Template, 3, 1, "div", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275element(5, "i", 21);
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "label", 24);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275element(15, "i", 26)(16, "input", 27);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AddTenant_div_5_div_18_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 23)(20, "label", 24);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 25);
    \u0275\u0275element(24, "i", 29)(25, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "small", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AddTenant_div_5_div_29_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 23)(31, "label", 24);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 25);
    \u0275\u0275element(35, "i", 32)(36, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, AddTenant_div_5_div_37_Template, 3, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 23)(39, "label", 24);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 25);
    \u0275\u0275element(43, "i", 34)(44, "input", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 36)(46, "label", 24);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25);
    \u0275\u0275element(50, "i", 37)(51, "textarea", 38);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 19)(54, "div", 20);
    \u0275\u0275element(55, "i", 39);
    \u0275\u0275elementStart(56, "h4");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 22)(60, "div", 23)(61, "label", 24);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 25);
    \u0275\u0275element(65, "i", 40)(66, "ng-select", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 23)(68, "label", 24);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 25);
    \u0275\u0275element(72, "i", 42)(73, "ng-select", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 23)(75, "label", 24);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 25);
    \u0275\u0275element(79, "i", 44)(80, "ng-select", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 23)(82, "label", 24);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 25);
    \u0275\u0275element(86, "i", 29)(87, "ng-select", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(88, AddTenant_div_5_div_88_Template, 48, 42, "div", 47);
    \u0275\u0275elementStart(89, "div", 48)(90, "button", 49);
    \u0275\u0275listener("click", function AddTenant_div_5_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275element(91, "i", 50);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 51);
    \u0275\u0275template(95, AddTenant_div_5_span_95_Template, 1, 0, "span", 52)(96, AddTenant_div_5_i_96_Template, 1, 0, "i", 53);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.tenantForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 39, "SUPER_ADMIN.DAYCARE_INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 41, "SUPER_ADMIN.DAYCARE_NAME"), " *");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 43, "SUPER_ADMIN.DAYCARE_NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 45, "SUPER_ADMIN.SUBDOMAIN"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("subdomain"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 47, "SUPER_ADMIN.SUBDOMAIN_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("subdomain"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 49, "SUPER_ADMIN.DAYCARE_EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 51, "SUPER_ADMIN.PHONE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 53, "SUPER_ADMIN.ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(52, 55, "SUPER_ADMIN.ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 57, "SUPER_ADMIN.REGIONAL_SETTINGS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 59, "SUPER_ADMIN.TIMEZONE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.timezones)("clearable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 61, "SUPER_ADMIN.CURRENCY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.currencies)("clearable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 63, "SUPER_ADMIN.LANGUAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.languages)("clearable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 65, "SUPER_ADMIN.COUNTRY"));
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.countries)("clearable", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEditMode);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(93, 67, "SUPER_ADMIN.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? \u0275\u0275pipeBind1(98, 69, "SUPER_ADMIN.UPDATE_DAYCARE") : \u0275\u0275pipeBind1(99, 71, "SUPER_ADMIN.CREATE_DAYCARE"), " ");
  }
}
var AddTenant = class _AddTenant {
  fb;
  tenantService;
  router;
  route;
  location;
  translate;
  tenantForm;
  loading = false;
  loadingData = false;
  errorMessage = "";
  isEditMode = false;
  tenantId = null;
  tenant = null;
  breadcrumbs = [];
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  back() {
    this.location.back();
  }
  timezones = [
    { value: "UTC", label: "UTC" },
    { value: "Europe/Paris", label: "Europe/Paris (CET)" },
    { value: "Europe/London", label: "Europe/London (GMT)" },
    { value: "America/New_York", label: "America/New_York (EST)" },
    { value: "America/Los_Angeles", label: "America/Los_Angeles (PST)" },
    { value: "Asia/Tokyo", label: "Asia/Tokyo (JST)" },
    { value: "Australia/Sydney", label: "Australia/Sydney (AEST)" }
  ];
  currencies = [
    { value: "USD", label: "USD ($)" },
    { value: "EUR", label: "EUR (\u20AC)" },
    { value: "GBP", label: "GBP (\xA3)" },
    { value: "CAD", label: "CAD ($)" },
    { value: "TND", label: "TND (\u062F.\u062A)" },
    { value: "AUD", label: "AUD ($)" },
    { value: "JPY", label: "JPY (\xA5)" }
  ];
  languages = [
    { value: "en", label: "English" },
    { value: "fr", label: "Fran\xE7ais" },
    { value: "es", label: "Espa\xF1ol" },
    { value: "de", label: "Deutsch" },
    { value: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" }
  ];
  countries = [
    { value: "US", label: "United States" },
    { value: "FR", label: "France" },
    { value: "IT", label: "Italy" },
    { value: "CA", label: "Canada" },
    { value: "TN", label: "Tunisia" }
  ];
  constructor(fb, tenantService, router, route, location, translate) {
    this.fb = fb;
    this.tenantService = tenantService;
    this.router = router;
    this.route = route;
    this.location = location;
    this.translate = translate;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.tenantId = parseInt(id, 10);
    }
    this.initForm();
    this.updateBreadcrumbs();
    if (this.isEditMode && this.tenantId) {
      this.loadTenantData();
    }
  }
  updateBreadcrumbs() {
    this.breadcrumbs = [
      { label: "Dashboard", url: "/super-admin/dashboard" },
      { label: "Daycares", url: "/super-admin/tenants" },
      { label: this.isEditMode ? "Edit Daycare" : "Add Daycare" }
    ];
  }
  loadTenantData() {
    if (!this.tenantId)
      return;
    this.loadingData = true;
    this.tenantService.getTenant(this.tenantId).subscribe({
      next: (tenant) => {
        this.tenant = tenant;
        this.populateForm(tenant);
        this.loadingData = false;
      },
      error: (err) => {
        this.loadingData = false;
        this.errorMessage = err.error?.message || "Failed to load daycare data.";
        console.error("Error loading tenant:", err);
      }
    });
  }
  populateForm(tenant) {
    this.tenantForm.patchValue({
      name: tenant.name,
      subdomain: tenant.subdomain || "",
      address: tenant.address || "",
      phone: tenant.phone || "",
      email: tenant.email || "",
      timezone: tenant.timezone || "UTC",
      currency: tenant.currency || "USD",
      language: tenant.language || "en",
      country: tenant.country || "US"
    });
  }
  initForm() {
    const formConfig = {
      // Daycare Information
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      subdomain: ["", [Validators.maxLength(100), Validators.pattern(/^[a-z0-9-]*$/)]],
      address: ["", [Validators.maxLength(500)]],
      phone: ["", [Validators.maxLength(20)]],
      email: ["", [Validators.email, Validators.maxLength(255)]],
      timezone: ["UTC"],
      currency: ["USD"],
      language: ["en"],
      country: ["US"]
    };
    if (!this.isEditMode) {
      formConfig.adminFirstName = ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]];
      formConfig.adminLastName = ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]];
      formConfig.adminEmail = ["", [Validators.required, Validators.email]];
      formConfig.adminPassword = ["", [Validators.required, Validators.minLength(6), Validators.maxLength(100)]];
    }
    this.tenantForm = this.fb.group(formConfig);
  }
  isFieldInvalid(fieldName) {
    const field = this.tenantForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }
  getFieldError(fieldName) {
    const field = this.tenantForm.get(fieldName);
    if (!field || !field.errors)
      return "";
    if (field.errors["required"])
      return "VALIDATION.REQUIRED";
    if (field.errors["email"])
      return "VALIDATION.INVALID_EMAIL";
    if (field.errors["minlength"])
      return "VALIDATION.MIN_LENGTH";
    if (field.errors["maxlength"])
      return "VALIDATION.MAX_LENGTH";
    if (field.errors["pattern"])
      return "VALIDATION.INVALID_SUBDOMAIN";
    return "VALIDATION.INVALID";
  }
  onSubmit() {
    if (this.tenantForm.invalid) {
      Object.keys(this.tenantForm.controls).forEach((key) => {
        this.tenantForm.get(key)?.markAsTouched();
      });
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const formData = this.tenantForm.value;
    if (this.isEditMode && this.tenantId) {
      this.tenantService.updateTenant(this.tenantId, formData).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(["/super-admin/tenants/detail", this.tenantId]);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || "Failed to update daycare. Please try again.";
          console.error("Error updating tenant:", err);
        }
      });
    } else {
      this.tenantService.createTenant(formData).subscribe({
        next: (tenant) => {
          this.loading = false;
          this.router.navigate(["/super-admin/tenants/detail", tenant.id]);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.error?.message || "Failed to create daycare. Please try again.";
          console.error("Error creating tenant:", err);
        }
      });
    }
  }
  onCancel() {
    this.router.navigate(["/super-admin/tenants"]);
  }
  static \u0275fac = function AddTenant_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddTenant)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddTenant, selectors: [["app-add-tenant"]], hostVars: 2, hostBindings: function AddTenant_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 6, vars: 6, consts: [["class", "mobile-view-superadmin", 4, "ngIf"], [3, "title", "subtitle", "icon", "breadcrumbs", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card-add-pages mb-4", 4, "ngIf"], [1, "mobile-view-superadmin"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], [3, "title", "subtitle", "icon", "breadcrumbs"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card-add-pages", "mb-4"], [1, "add-form", 3, "ngSubmit", "formGroup"], ["class", "alert alert-danger mb-4", 4, "ngIf"], [1, "form-section"], [1, "section-header"], [1, "bi", "bi-building"], [1, "form-grid"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], [1, "bi", "bi-building", "input-icon"], ["type", "text", "formControlName", "name", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "bi", "bi-globe", "input-icon"], ["type", "text", "formControlName", "subdomain", "placeholder", "my-daycare", 1, "form-input"], [1, "form-hint"], [1, "bi", "bi-envelope", "input-icon"], ["type", "email", "formControlName", "email", "placeholder", "contact@daycare.com", 1, "form-input"], [1, "bi", "bi-telephone", "input-icon"], ["type", "text", "formControlName", "phone", "placeholder", "+1 234 567 8900", 1, "form-input"], [1, "form-group", "full-width"], [1, "bi", "bi-geo-alt", "input-icon"], ["formControlName", "address", "rows", "2", 1, "form-input", 3, "placeholder"], [1, "bi", "bi-globe2"], [1, "bi", "bi-clock", "input-icon"], ["formControlName", "timezone", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "clearable"], [1, "bi", "bi-currency-dollar", "input-icon"], ["formControlName", "currency", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "clearable"], [1, "bi", "bi-translate", "input-icon"], ["formControlName", "language", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "clearable"], ["formControlName", "country", "bindLabel", "label", "bindValue", "value", 1, "form-input", 3, "items", "clearable"], ["class", "form-section", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-x-circle"], ["type", "submit", 1, "custom-btn-2", "btn-add-global-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle", 4, "ngIf"], [1, "alert", "alert-danger", "mb-4"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "error-message"], [1, "bi", "bi-person-badge"], [1, "section-description"], [1, "bi", "bi-person", "input-icon"], ["type", "text", "formControlName", "adminFirstName", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "adminLastName", 1, "form-input", 3, "placeholder"], ["type", "email", "formControlName", "adminEmail", "placeholder", "admin@daycare.com", 1, "form-input"], [1, "bi", "bi-lock", "input-icon"], ["type", "password", "formControlName", "adminPassword", 1, "form-input", 3, "placeholder"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-check-circle"]], template: function AddTenant_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, AddTenant_div_1_Template, 9, 0, "div", 0);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275template(3, AddTenant_app_title_page_3_Template, 5, 12, "app-title-page", 1)(4, AddTenant_div_4_Template, 4, 0, "div", 2)(5, AddTenant_div_5_Template, 100, 73, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isMobile() ? "mobileview mobile-view container-fluid mt-4" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, NgSelectModule, NgSelectComponent, TitlePage, HeaderSuperadminComponent, TranslatePipe], styles: ["\n\n.section-description[_ngcontent-%COMP%] {\n  color: var(--color-gray);\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: -0.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.1);\n  border-color: rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n.form-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--color-gray);\n  margin-top: 0.25rem;\n}\n.input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.input-with-icon[_ngcontent-%COMP%]   ng-select.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.input-with-icon[_ngcontent-%COMP%]   ng-select.form-input[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  min-height: 44px;\n  border-radius: 8px;\n}\n@media (max-width: 380px) {\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages[_ngcontent-%COMP%]   .add-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n.mobile-view[_ngcontent-%COMP%] {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=add-tenant.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddTenant, [{
    type: Component,
    args: [{ selector: "app-add-tenant", standalone: true, imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule, NgSelectModule, TitlePage, HeaderSuperadminComponent], template: `<app-header-superadmin></app-header-superadmin>
<div *ngIf="isMobile()" class="mobile-view-superadmin">
  <div class="header-info">
    <div class="title-icons">
      <div class="page-back" (click)="back()">
        <i class="bi bi-arrow-left"></i>
      </div>
    </div>
    <div class="d-flex">
      <div class="overflow-hidden">
        <h5 class="name simple"> Daycare</h5>
      </div>
    </div>
  </div>
</div>
<div [class]="isMobile() ? 'mobileview mobile-view container-fluid mt-4' : 'container-fluid mt-4'">
  <app-title-page *ngIf=" !isMobile()"
    [title]="isEditMode ? ('SUPER_ADMIN.EDIT_DAYCARE' | translate) : ('SUPER_ADMIN.ADD_DAYCARE' | translate)"
    [subtitle]="isEditMode ? ('SUPER_ADMIN.EDIT_DAYCARE_SUBTITLE' | translate) : ('SUPER_ADMIN.ADD_DAYCARE_SUBTITLE' | translate)"
    [icon]="isEditMode ? 'bi bi-pencil-square' : 'bi bi-plus-circle'"
    [breadcrumbs]="breadcrumbs">
  </app-title-page>

  <!-- Loading Data -->
  <div *ngIf="loadingData" class="text-center py-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div class="card-add-pages mb-4" *ngIf="!loadingData">
    <form [formGroup]="tenantForm" (ngSubmit)="onSubmit()" class="add-form">
      <!-- Error Message -->
      <div *ngIf="errorMessage" class="alert alert-danger mb-4">
        <i class="bi bi-exclamation-triangle me-2"></i>
        {{ errorMessage }}
      </div>

      <!-- Daycare Information Section -->
      <div class="form-section">
        <div class="section-header">
          <i class="bi bi-building"></i>
          <h4>{{ 'SUPER_ADMIN.DAYCARE_INFO' | translate }}</h4>
        </div>
        <div class="form-grid">
          <!-- Name -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.DAYCARE_NAME' | translate }} *</label>
            <div class="input-with-icon">
              <i class="bi bi-building input-icon"></i>
              <input
                type="text"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('name')"
                formControlName="name"
                [placeholder]="'SUPER_ADMIN.DAYCARE_NAME_PLACEHOLDER' | translate">
            </div>
            <div *ngIf="isFieldInvalid('name')" class="error-message">
              {{ getFieldError('name') | translate }}
            </div>
          </div>

          <!-- Subdomain -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.SUBDOMAIN' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-globe input-icon"></i>
              <input
                type="text"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('subdomain')"
                formControlName="subdomain"
                placeholder="my-daycare">
            </div>
            <small class="form-hint">{{ 'SUPER_ADMIN.SUBDOMAIN_HINT' | translate }}</small>
            <div *ngIf="isFieldInvalid('subdomain')" class="error-message">
              {{ getFieldError('subdomain') | translate }}
            </div>
          </div>

          <!-- Email -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.DAYCARE_EMAIL' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-envelope input-icon"></i>
              <input
                type="email"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('email')"
                formControlName="email"
                placeholder="contact@daycare.com">
            </div>
            <div *ngIf="isFieldInvalid('email')" class="error-message">
              {{ getFieldError('email') | translate }}
            </div>
          </div>

          <!-- Phone -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.PHONE' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-telephone input-icon"></i>
              <input
                type="text"
                class="form-input"
                formControlName="phone"
                placeholder="+1 234 567 8900">
            </div>
          </div>

          <!-- Address -->
          <div class="form-group full-width">
            <label class="form-label">{{ 'SUPER_ADMIN.ADDRESS' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-geo-alt input-icon"></i>
              <textarea
                class="form-input"
                formControlName="address"
                rows="2"
                [placeholder]="'SUPER_ADMIN.ADDRESS_PLACEHOLDER' | translate"></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Regional Settings Section -->
      <div class="form-section">
        <div class="section-header">
          <i class="bi bi-globe2"></i>
          <h4>{{ 'SUPER_ADMIN.REGIONAL_SETTINGS' | translate }}</h4>
        </div>
        <div class="form-grid">
          <!-- Timezone -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.TIMEZONE' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-clock input-icon"></i>
              <ng-select
                class="form-input"
                formControlName="timezone"
                [items]="timezones"
                bindLabel="label"
                bindValue="value"
                [clearable]="false">
              </ng-select>
            </div>
          </div>

          <!-- Currency -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.CURRENCY' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-currency-dollar input-icon"></i>
              <ng-select
                class="form-input"
                formControlName="currency"
                [items]="currencies"
                bindLabel="label"
                bindValue="value"
                [clearable]="false">
              </ng-select>
            </div>
          </div>

          <!-- Language -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.LANGUAGE' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-translate input-icon"></i>
              <ng-select
                class="form-input"
                formControlName="language"
                [items]="languages"
                bindLabel="label"
                bindValue="value"
                [clearable]="false">
              </ng-select>
            </div>
          </div>

          <!-- Country -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.COUNTRY' | translate }}</label>
            <div class="input-with-icon">
              <i class="bi bi-globe input-icon"></i>
              <ng-select
                class="form-input"
                formControlName="country"
                [items]="countries"
                bindLabel="label"
                bindValue="value"
                [clearable]="false">
              </ng-select>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin User Section - Only show in create mode -->
      <div class="form-section" *ngIf="!isEditMode">
        <div class="section-header">
          <i class="bi bi-person-badge"></i>
          <h4>{{ 'SUPER_ADMIN.ADMIN_USER' | translate }}</h4>
        </div>
        <p class="section-description">{{ 'SUPER_ADMIN.ADMIN_USER_DESC' | translate }}</p>
        <div class="form-grid">
          <!-- First Name -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.ADMIN_FIRST_NAME' | translate }} *</label>
            <div class="input-with-icon">
              <i class="bi bi-person input-icon"></i>
              <input
                type="text"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('adminFirstName')"
                formControlName="adminFirstName"
                [placeholder]="'SUPER_ADMIN.FIRST_NAME_PLACEHOLDER' | translate">
            </div>
            <div *ngIf="isFieldInvalid('adminFirstName')" class="error-message">
              {{ getFieldError('adminFirstName') | translate }}
            </div>
          </div>

          <!-- Last Name -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.ADMIN_LAST_NAME' | translate }} *</label>
            <div class="input-with-icon">
              <i class="bi bi-person input-icon"></i>
              <input
                type="text"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('adminLastName')"
                formControlName="adminLastName"
                [placeholder]="'SUPER_ADMIN.LAST_NAME_PLACEHOLDER' | translate">
            </div>
            <div *ngIf="isFieldInvalid('adminLastName')" class="error-message">
              {{ getFieldError('adminLastName') | translate }}
            </div>
          </div>

          <!-- Admin Email -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.ADMIN_EMAIL' | translate }} *</label>
            <div class="input-with-icon">
              <i class="bi bi-envelope input-icon"></i>
              <input
                type="email"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('adminEmail')"
                formControlName="adminEmail"
                placeholder="admin@daycare.com">
            </div>
            <div *ngIf="isFieldInvalid('adminEmail')" class="error-message">
              {{ getFieldError('adminEmail') | translate }}
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label class="form-label">{{ 'SUPER_ADMIN.ADMIN_PASSWORD' | translate }} *</label>
            <div class="input-with-icon">
              <i class="bi bi-lock input-icon"></i>
              <input
                type="password"
                class="form-input"
                [class.is-invalid]="isFieldInvalid('adminPassword')"
                formControlName="adminPassword"
                [placeholder]="'SUPER_ADMIN.PASSWORD_PLACEHOLDER' | translate">
            </div>
            <small class="form-hint">{{ 'SUPER_ADMIN.PASSWORD_REQUIREMENTS' | translate }}</small>
            <div *ngIf="isFieldInvalid('adminPassword')" class="error-message">
              {{ getFieldError('adminPassword') | translate }}
            </div>
          </div>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <button type="button" class="custom-btn-2 btn-cancel-2" (click)="onCancel()">
          <i class="bi bi-x-circle"></i>
          {{ 'SUPER_ADMIN.CANCEL' | translate }}
        </button>
        <button type="submit" class="custom-btn-2 btn-add-global-2" [disabled]="loading">
          <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
          <i *ngIf="!loading" class="bi bi-check-circle"></i>
          {{ isEditMode ? ('SUPER_ADMIN.UPDATE_DAYCARE' | translate) : ('SUPER_ADMIN.CREATE_DAYCARE' | translate) }}
        </button>
      </div>
    </form>
  </div>
</div>
`, styles: ["/* src/app/features/super-admin/tenants/add-tenant/add-tenant.scss */\n.section-description {\n  color: var(--color-gray);\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  margin-top: -0.5rem;\n}\n.alert {\n  border-radius: 8px;\n}\n.alert.alert-danger {\n  background-color: rgba(220, 53, 69, 0.1);\n  border-color: rgba(220, 53, 69, 0.2);\n  color: #dc3545;\n}\n.form-hint {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--color-gray);\n  margin-top: 0.25rem;\n}\n.input-with-icon .input-icon {\n  pointer-events: none;\n}\n.input-with-icon ng-select.form-input {\n  width: 100%;\n}\n.input-with-icon ng-select.form-input .ng-select-container {\n  padding-left: 40px;\n  min-height: 44px;\n  border-radius: 8px;\n}\n@media (max-width: 380px) {\n  .card-add-pages .add-form .form-grid {\n    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));\n  }\n  .card-add-pages .add-form .form-grid .form-input {\n    font-size: 14px;\n    padding: 10px 10px 10px 40px;\n  }\n}\n.mobile-view {\n  padding-bottom: 110px;\n}\n.mobile-view-superadmin .header-info {\n  background: var(--secondary-color);\n  padding: 40px 20px 23px;\n  border-radius: 0 0 15px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: center;\n}\n.mobile-view-superadmin .header-info h5 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n}\n.mobile-view-superadmin .header-info .page-back i {\n  background: rgba(255, 255, 255, 0.2117647059);\n  padding: 4px 8px;\n  border-radius: 12px;\n  position: absolute;\n  left: 20px;\n  bottom: 19px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=add-tenant.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TenantService }, { type: Router }, { type: ActivatedRoute }, { type: Location }, { type: TranslateService }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddTenant, { className: "AddTenant", filePath: "src/app/features/super-admin/tenants/add-tenant/add-tenant.ts", lineNumber: 20 });
})();
export {
  AddTenant
};
//# sourceMappingURL=chunk-PTE55DF5.js.map
