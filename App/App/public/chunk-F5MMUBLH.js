import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  environment
} from "./chunk-XUYKXYA7.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/auth/register/register.ts
function Register_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275property("value", role_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r1.label, " ");
  }
}
function Register_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function Register_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
var Register = class _Register {
  authService;
  router;
  registerData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Parent",
    isOver18: false,
    acceptedTermsOfService: false,
    acceptedPrivacyPolicy: false,
    parentalConsentAcknowledged: false
  };
  loading = false;
  errorMessage = "";
  roles = [
    { value: "Admin", label: "Administrator" },
    { value: "Parent", label: "Parent" },
    { value: "Teacher", label: "Teacher" }
  ];
  // Base URL for legal documents (remove /api from apiUrl)
  baseUrl = environment.apiUrl.replace("/api", "");
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  onSubmit() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = "Passwords do not match";
      return;
    }
    if (!this.registerData.isOver18) {
      this.errorMessage = "You must confirm you are 18 years or older";
      return;
    }
    if (!this.registerData.acceptedTermsOfService) {
      this.errorMessage = "You must accept the Terms of Service";
      return;
    }
    if (!this.registerData.acceptedPrivacyPolicy) {
      this.errorMessage = "You must accept the Privacy Policy";
      return;
    }
    if (!this.registerData.parentalConsentAcknowledged) {
      this.errorMessage = "You must acknowledge the parental consent requirements";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.authService.register(this.registerData).subscribe({
      next: () => {
        this.router.navigate(["/login"]);
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Registration failed";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 74, vars: 15, consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [1, "auth-form", 3, "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3"], ["type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "role", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "consent-section", "mb-4", "p-3", "bg-light", "rounded"], [1, "fw-bold", "mb-3"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "isOver18", "name", "isOver18", "required", "", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "isOver18", 1, "form-check-label"], ["type", "checkbox", "id", "acceptTerms", "name", "acceptedTermsOfService", "required", "", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "acceptTerms", 1, "form-check-label"], ["routerLink", "/terms-of-service", "target", "_blank"], ["type", "checkbox", "id", "acceptPrivacy", "name", "acceptedPrivacyPolicy", "required", "", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "acceptPrivacy", 1, "form-check-label"], ["routerLink", "/privacy-policy", "target", "_blank"], ["type", "checkbox", "id", "parentalConsent", "name", "parentalConsentAcknowledged", "required", "", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "parentalConsent", 1, "form-check-label"], [1, "text-muted", "d-block", "mt-2"], [1, "bi", "bi-info-circle", "me-1"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "auth-footer"], ["routerLink", "/login"], [3, "value"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275text(4, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Register for MiniMinds Daycare");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "label", 6);
      \u0275\u0275text(11, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.firstName, $event) || (ctx.registerData.firstName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 5)(14, "label", 6);
      \u0275\u0275text(15, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.lastName, $event) || (ctx.registerData.lastName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 9)(18, "label", 6);
      \u0275\u0275text(19, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.email, $event) || (ctx.registerData.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 6);
      \u0275\u0275text(23, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.role, $event) || (ctx.registerData.role = $event);
        return $event;
      });
      \u0275\u0275template(25, Register_option_25_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 6);
      \u0275\u0275text(28, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.password, $event) || (ctx.registerData.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 9)(31, "label", 6);
      \u0275\u0275text(32, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.confirmPassword, $event) || (ctx.registerData.confirmPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 15)(35, "h6", 16);
      \u0275\u0275text(36, "Legal Agreements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 17)(38, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.isOver18, $event) || (ctx.registerData.isOver18 = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "label", 19);
      \u0275\u0275text(40, " I confirm that I am ");
      \u0275\u0275elementStart(41, "strong");
      \u0275\u0275text(42, "18 years of age or older");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 17)(44, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.acceptedTermsOfService, $event) || (ctx.registerData.acceptedTermsOfService = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "label", 21);
      \u0275\u0275text(46, " I have read and agree to the ");
      \u0275\u0275elementStart(47, "a", 22);
      \u0275\u0275text(48, "Terms of Service");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 17)(50, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.acceptedPrivacyPolicy, $event) || (ctx.registerData.acceptedPrivacyPolicy = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "label", 24);
      \u0275\u0275text(52, " I have read and agree to the ");
      \u0275\u0275elementStart(53, "a", 25);
      \u0275\u0275text(54, "Privacy Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 17)(56, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.registerData.parentalConsentAcknowledged, $event) || (ctx.registerData.parentalConsentAcknowledged = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "label", 27);
      \u0275\u0275text(58, " I understand that this app collects information about children and I, as a parent/guardian, ");
      \u0275\u0275elementStart(59, "strong");
      \u0275\u0275text(60, "provide consent");
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " for data collection in accordance with COPPA regulations ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "small", 28);
      \u0275\u0275element(63, "i", 29);
      \u0275\u0275text(64, " By registering, you acknowledge that MiniMinds collects children's data only with verifiable parental consent. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(65, Register_div_65_Template, 2, 1, "div", 30);
      \u0275\u0275elementStart(66, "button", 31);
      \u0275\u0275template(67, Register_span_67_Template, 1, 0, "span", 32);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 33)(70, "p");
      \u0275\u0275text(71, "Already have an account? ");
      \u0275\u0275elementStart(72, "a", 34);
      \u0275\u0275text(73, "Sign in");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.role);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.roles);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.password);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.confirmPassword);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.isOver18);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.acceptedTermsOfService);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.acceptedPrivacyPolicy);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.registerData.parentalConsentAcknowledged);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Creating Account..." : "Create Account", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, NgModel, NgForm, RouterModule, RouterLink], styles: ["\n\n.consent-section[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n.consent-section[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.consent-section[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  text-decoration: underline;\n}\n.consent-section[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0a58ca;\n}\n.consent-section[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #198754;\n  border-color: #198754;\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [CommonModule, FormsModule, RouterModule], standalone: true, template: `<div class="auth-container">\r
  <div class="auth-card">\r
    <div class="auth-header">\r
      <h2>Create Account</h2>\r
      <p>Register for MiniMinds Daycare</p>\r
    </div>\r
\r
    <form (ngSubmit)="onSubmit()" class="auth-form">\r
      <div class="row">\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">First Name</label>\r
          <input \r
            type="text" \r
            class="form-control" \r
            [(ngModel)]="registerData.firstName" \r
            name="firstName" \r
            required>\r
        </div>\r
        <div class="col-md-6 mb-3">\r
          <label class="form-label">Last Name</label>\r
          <input \r
            type="text" \r
            class="form-control" \r
            [(ngModel)]="registerData.lastName" \r
            name="lastName" \r
            required>\r
        </div>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label">Email</label>\r
        <input \r
          type="email" \r
          class="form-control" \r
          [(ngModel)]="registerData.email" \r
          name="email" \r
          required>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label">Role</label>\r
        <select \r
          class="form-select" \r
          [(ngModel)]="registerData.role" \r
          name="role" \r
          required>\r
          <option *ngFor="let role of roles" [value]="role.value">\r
            {{ role.label }}\r
          </option>\r
        </select>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label">Password</label>\r
        <input \r
          type="password" \r
          class="form-control" \r
          [(ngModel)]="registerData.password" \r
          name="password" \r
          required>\r
      </div>\r
\r
      <div class="mb-3">\r
        <label class="form-label">Confirm Password</label>\r
        <input\r
          type="password"\r
          class="form-control"\r
          [(ngModel)]="registerData.confirmPassword"\r
          name="confirmPassword"\r
          required>\r
      </div>\r
\r
      <!-- COPPA Compliance Section -->\r
      <div class="consent-section mb-4 p-3 bg-light rounded">\r
        <h6 class="fw-bold mb-3">Legal Agreements</h6>\r
\r
        <div class="form-check mb-2">\r
          <input\r
            type="checkbox"\r
            class="form-check-input"\r
            id="isOver18"\r
            [(ngModel)]="registerData.isOver18"\r
            name="isOver18"\r
            required>\r
          <label class="form-check-label" for="isOver18">\r
            I confirm that I am <strong>18 years of age or older</strong>\r
          </label>\r
        </div>\r
\r
        <div class="form-check mb-2">\r
          <input\r
            type="checkbox"\r
            class="form-check-input"\r
            id="acceptTerms"\r
            [(ngModel)]="registerData.acceptedTermsOfService"\r
            name="acceptedTermsOfService"\r
            required>\r
          <label class="form-check-label" for="acceptTerms">\r
            I have read and agree to the\r
            <a routerLink="/terms-of-service" target="_blank">Terms of Service</a>\r
          </label>\r
        </div>\r
\r
        <div class="form-check mb-2">\r
          <input\r
            type="checkbox"\r
            class="form-check-input"\r
            id="acceptPrivacy"\r
            [(ngModel)]="registerData.acceptedPrivacyPolicy"\r
            name="acceptedPrivacyPolicy"\r
            required>\r
          <label class="form-check-label" for="acceptPrivacy">\r
            I have read and agree to the\r
            <a routerLink="/privacy-policy" target="_blank">Privacy Policy</a>\r
          </label>\r
        </div>\r
\r
        <div class="form-check mb-2">\r
          <input\r
            type="checkbox"\r
            class="form-check-input"\r
            id="parentalConsent"\r
            [(ngModel)]="registerData.parentalConsentAcknowledged"\r
            name="parentalConsentAcknowledged"\r
            required>\r
          <label class="form-check-label" for="parentalConsent">\r
            I understand that this app collects information about children and I, as a parent/guardian,\r
            <strong>provide consent</strong> for data collection in accordance with COPPA regulations\r
          </label>\r
        </div>\r
\r
        <small class="text-muted d-block mt-2">\r
          <i class="bi bi-info-circle me-1"></i>\r
          By registering, you acknowledge that MiniMinds collects children's data only with verifiable parental consent.\r
        </small>\r
      </div>\r
\r
      <div *ngIf="errorMessage" class="alert alert-danger">\r
        {{ errorMessage }}\r
      </div>\r
\r
      <button \r
        type="submit" \r
        class="btn btn-primary w-100" \r
        [disabled]="loading">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
        {{ loading ? 'Creating Account...' : 'Create Account' }}\r
      </button>\r
    </form>\r
\r
    <div class="auth-footer">\r
      <p>Already have an account? <a routerLink="/login">Sign in</a></p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/auth/register/register.scss */\n.consent-section {\n  border: 1px solid #dee2e6;\n}\n.consent-section .form-check-label {\n  font-size: 0.9rem;\n}\n.consent-section .form-check-label a {\n  color: #0d6efd;\n  text-decoration: underline;\n}\n.consent-section .form-check-label a:hover {\n  color: #0a58ca;\n}\n.consent-section .form-check-input:checked {\n  background-color: #198754;\n  border-color: #198754;\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/features/auth/register/register.ts", lineNumber: 16 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-F5MMUBLH.js.map
