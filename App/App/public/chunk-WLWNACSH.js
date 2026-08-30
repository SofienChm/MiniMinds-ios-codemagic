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
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/auth/reset-password/reset-password.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/core/services/password-reset.service.ts
var PasswordResetService = class _PasswordResetService {
  http;
  apiUrl = `${ApiConfig.BASE_URL}/PasswordReset`;
  constructor(http) {
    this.http = http;
  }
  resetPassword(email, newPassword) {
    return this.http.post(`${this.apiUrl}/reset`, {
      email,
      newPassword
    });
  }
  static \u0275fac = function PasswordResetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordResetService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PasswordResetService, factory: _PasswordResetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordResetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESET_PASSWORD.PASSWORD_MIN_LENGTH"), " ");
  }
}
function ResetPasswordComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESET_PASSWORD.PASSWORD_MISMATCH"), " ");
  }
}
function ResetPasswordComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  route;
  router;
  passwordResetService;
  translate;
  resetForm;
  email = "";
  loading = false;
  constructor(fb, route, router, passwordResetService, translate) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.passwordResetService = passwordResetService;
    this.translate = translate;
    this.resetForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"] || "";
      if (!this.email) {
        import_sweetalert2.default.fire(this.translate.instant("RESET_PASSWORD.ERROR_TITLE"), this.translate.instant("RESET_PASSWORD.ERROR_MISSING_EMAIL"), "error");
        this.router.navigate(["/login"]);
      }
    });
  }
  passwordMatchValidator(form) {
    const password = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");
    return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.resetForm.valid) {
      this.loading = true;
      const newPassword = this.resetForm.get("newPassword")?.value;
      this.passwordResetService.resetPassword(this.email, newPassword).subscribe({
        next: (response) => {
          showSuccessToast(this.translate.instant("RESET_PASSWORD.SUCCESS_TITLE"));
          this.router.navigate(["/login"]);
        },
        error: (error) => {
          const message = error.error?.message || this.translate.instant("RESET_PASSWORD.ERROR_MESSAGE");
          import_sweetalert2.default.fire(this.translate.instant("RESET_PASSWORD.ERROR_TITLE"), message, "error");
          this.loading = false;
        }
      });
    }
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PasswordResetService), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 56, vars: 38, consts: [[1, "reset-password-container"], [1, "reset-password-layout"], [1, "left-section"], [1, "welcome-content"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "logo-section"], [1, "logo-circle"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo"], [1, "brand-name"], [1, "right-section"], [1, "reset-form-card"], [3, "ngSubmit", "formGroup"], [1, "email-display"], [1, "form-label"], [1, "email-info"], [1, "bi", "bi-envelope", "input-icon"], [1, "form-group"], [1, "input-with-icon"], [1, "bi", "bi-lock", "input-icon"], ["id", "newPassword", "type", "password", "formControlName", "newPassword", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "bi", "bi-shield-check", "input-icon"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", 1, "form-input", 3, "placeholder"], ["type", "submit", 1, "btn-reset", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "support-link"], ["href", "#"], [1, "error-message"], [1, "bi", "bi-exclamation-circle"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h2", 9);
      \u0275\u0275text(14, "MiniMinds Daycare");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "form", 12);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 17)(27, "label", 14);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275element(31, "i", 19)(32, "input", 20);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, ResetPasswordComponent_div_34_Template, 4, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 17)(36, "label", 14);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 18);
      \u0275\u0275element(40, "i", 22)(41, "input", 23);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, ResetPasswordComponent_div_43_Template, 4, 3, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 24);
      \u0275\u0275template(45, ResetPasswordComponent_span_45_Template, 1, 0, "span", 25);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 26)(50, "p");
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 27);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_10_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "RESET_PASSWORD.WELCOME"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "RESET_PASSWORD.SUBTITLE"));
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 20, "RESET_PASSWORD.YOUR_EMAIL"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.email);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "RESET_PASSWORD.NEW_PASSWORD"));
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 24, "RESET_PASSWORD.NEW_PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.resetForm.get("newPassword")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.resetForm.get("newPassword")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 26, "RESET_PASSWORD.CONFIRM_PASSWORD"));
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 28, "RESET_PASSWORD.CONFIRM_PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.resetForm.errors == null ? null : ctx.resetForm.errors["mismatch"]) && ((tmp_10_0 = ctx.resetForm.get("confirmPassword")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.resetForm.valid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? \u0275\u0275pipeBind1(47, 30, "RESET_PASSWORD.LOADING") : \u0275\u0275pipeBind1(48, 32, "RESET_PASSWORD.SUBMIT_BUTTON"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 34, "RESET_PASSWORD.NEED_HELP"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 36, "RESET_PASSWORD.CONTACT_SUPPORT"));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], styles: ["\n\n.reset-password-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  overflow: hidden;\n}\n.reset-password-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.left-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-content[_ngcontent-%COMP%] {\n  text-align: center;\n  z-index: 2;\n  padding: 40px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 800;\n  color: #000;\n  margin-bottom: 16px;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n  margin-bottom: 60px;\n}\n.logo-section[_ngcontent-%COMP%] {\n  margin: 60px 0;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.logo-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin-top: 20px;\n}\n.right-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.reset-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 50px 60px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.email-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  border-left: 4px solid #7dd3c0;\n}\n.email-display[_ngcontent-%COMP%]   .email-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n}\n.email-display[_ngcontent-%COMP%]   .email-info[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  color: #7dd3c0;\n  margin-right: 12px;\n  font-size: 16px;\n}\n.email-display[_ngcontent-%COMP%]   .email-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 500;\n  color: #666;\n  margin-bottom: 8px;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  font-size: 16px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px 14px 48px;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #dc3545;\n  font-size: 14px;\n  margin-top: 8px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.btn-reset[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-bottom: 20px;\n}\n.btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(125, 211, 192, 0.4);\n}\n.btn-reset[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.support-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.support-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.support-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n}\n.support-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslateModule], template: `<div class="reset-password-container">\r
  <div class="reset-password-layout">\r
    <div class="left-section">\r
      <div class="welcome-content">\r
        <h1 class="welcome-title">{{ 'RESET_PASSWORD.WELCOME' | translate }}</h1>\r
        <p class="welcome-subtitle">{{ 'RESET_PASSWORD.SUBTITLE' | translate }}</p>\r
\r
        <div class="logo-section">\r
          <div class="logo-circle">\r
            <img src="/assets/images/icon.png" alt="MiniMinds Logo">\r
          </div>\r
          <h2 class="brand-name">MiniMinds Daycare</h2>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="right-section">\r
      <div class="reset-form-card">\r
        <form [formGroup]="resetForm" (ngSubmit)="onSubmit()">\r
          <!-- Email Display -->\r
          <div class="email-display">\r
            <label class="form-label">{{ 'RESET_PASSWORD.YOUR_EMAIL' | translate }}</label>\r
            <div class="email-info">\r
              <i class="bi bi-envelope input-icon"></i>\r
              <span>{{ email }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Password Fields -->\r
          <div class="form-group">\r
            <label class="form-label">{{ 'RESET_PASSWORD.NEW_PASSWORD' | translate }}</label>\r
            <div class="input-with-icon">\r
              <i class="bi bi-lock input-icon"></i>\r
              <input\r
                id="newPassword"\r
                type="password"\r
                formControlName="newPassword"\r
                class="form-input"\r
                [placeholder]="'RESET_PASSWORD.NEW_PASSWORD_PLACEHOLDER' | translate">\r
            </div>\r
            <div *ngIf="resetForm.get('newPassword')?.invalid && resetForm.get('newPassword')?.touched" class="error-message">\r
              <i class="bi bi-exclamation-circle"></i>\r
              {{ 'RESET_PASSWORD.PASSWORD_MIN_LENGTH' | translate }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="form-label">{{ 'RESET_PASSWORD.CONFIRM_PASSWORD' | translate }}</label>\r
            <div class="input-with-icon">\r
              <i class="bi bi-shield-check input-icon"></i>\r
              <input\r
                id="confirmPassword"\r
                type="password"\r
                formControlName="confirmPassword"\r
                class="form-input"\r
                [placeholder]="'RESET_PASSWORD.CONFIRM_PASSWORD_PLACEHOLDER' | translate">\r
            </div>\r
            <div *ngIf="resetForm.errors?.['mismatch'] && resetForm.get('confirmPassword')?.touched" class="error-message">\r
              <i class="bi bi-exclamation-circle"></i>\r
              {{ 'RESET_PASSWORD.PASSWORD_MISMATCH' | translate }}\r
            </div>\r
          </div>\r
\r
          <button\r
            type="submit"\r
            class="btn-reset"\r
            [disabled]="!resetForm.valid || loading">\r
            <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ loading ? ('RESET_PASSWORD.LOADING' | translate) : ('RESET_PASSWORD.SUBMIT_BUTTON' | translate) }}\r
          </button>\r
        </form>\r
\r
        <div class="support-link">\r
          <p>{{ 'RESET_PASSWORD.NEED_HELP' | translate }}</p>\r
          <a href="#">{{ 'RESET_PASSWORD.CONTACT_SUPPORT' | translate }}</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/auth/reset-password/reset-password.component.scss */\n.reset-password-container {\n  min-height: 100vh;\n  overflow: hidden;\n}\n.reset-password-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.left-section {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-content {\n  text-align: center;\n  z-index: 2;\n  padding: 40px;\n}\n.welcome-title {\n  font-size: 56px;\n  font-weight: 800;\n  color: #000;\n  margin-bottom: 16px;\n}\n.welcome-subtitle {\n  font-size: 20px;\n  color: #666;\n  margin-bottom: 60px;\n}\n.logo-section {\n  margin: 60px 0;\n}\n.logo-circle {\n  width: 180px;\n  height: 180px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.logo-circle img {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n}\n.brand-name {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin-top: 20px;\n}\n.right-section {\n  flex: 1;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.reset-form-card {\n  background: white;\n  border-radius: 24px;\n  padding: 50px 60px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.email-display {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 16px;\n  margin-bottom: 24px;\n  border-left: 4px solid #7dd3c0;\n}\n.email-display .email-info {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n}\n.email-display .email-info .input-icon {\n  color: #7dd3c0;\n  margin-right: 12px;\n  font-size: 16px;\n}\n.email-display .email-info span {\n  font-weight: 500;\n  color: #333;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-size: 15px;\n  font-weight: 500;\n  color: #666;\n  margin-bottom: 8px;\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .input-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  font-size: 16px;\n}\n.form-input {\n  width: 100%;\n  padding: 14px 16px 14px 48px;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);\n}\n.form-input::placeholder {\n  color: #bbb;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #dc3545;\n  font-size: 14px;\n  margin-top: 8px;\n}\n.error-message i {\n  font-size: 14px;\n}\n.btn-reset {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-bottom: 20px;\n}\n.btn-reset:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(125, 211, 192, 0.4);\n}\n.btn-reset:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.support-link {\n  text-align: center;\n}\n.support-link p {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.support-link a {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n}\n.support-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: PasswordResetService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 17 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-WLWNACSH.js.map
