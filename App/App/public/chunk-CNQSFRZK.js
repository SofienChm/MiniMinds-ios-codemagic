import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router,
  RouterModule
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ForgotPasswordComponent_ng_container_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
function ForgotPasswordComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 3);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 6)(4, "defs")(5, "linearGradient", 7);
    \u0275\u0275element(6, "stop", 8)(7, "stop", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "h1", 13);
    \u0275\u0275text(12, "Forgot Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "form", 14, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_ng_container_0_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275template(15, ForgotPasswordComponent_ng_container_0_div_15_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(16, "div", 16)(17, "label", 17);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275element(20, "i", 19);
    \u0275\u0275elementStart(21, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_ng_container_0_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 21);
    \u0275\u0275template(23, ForgotPasswordComponent_ng_container_0_span_23_Template, 1, 0, "span", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "a", 24);
    \u0275\u0275listener("click", function ForgotPasswordComponent_ng_container_0_Template_a_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(27, "Back to Login");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const forgotForm_r3 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !forgotForm_r3.valid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "Sending..." : "Send Reset Link", " ");
  }
}
function ForgotPasswordComponent_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ForgotPasswordComponent_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
function ForgotPasswordComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "h1", 31);
    \u0275\u0275text(5, "Forgot Password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 32);
    \u0275\u0275text(7, "Enter your email to reset your password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34);
    \u0275\u0275element(10, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 36);
    \u0275\u0275text(12, "MiniMinds Daycare");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 37);
    \u0275\u0275element(14, "i", 38)(15, "i", 39)(16, "i", 40)(17, "i", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 42)(19, "div", 43);
    \u0275\u0275template(20, ForgotPasswordComponent_div_1_div_20_Template, 2, 1, "div", 15);
    \u0275\u0275elementStart(21, "form", 44, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_div_1_Template_form_ngSubmit_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(23, "div", 45)(24, "label", 46);
    \u0275\u0275text(25, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 47)(27, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_div_1_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 49);
    \u0275\u0275template(29, ForgotPasswordComponent_div_1_span_29_Template, 1, 0, "span", 22);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 50)(32, "a", 24);
    \u0275\u0275listener("click", function ForgotPasswordComponent_div_1_Template_a_click_32_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToLogin());
    });
    \u0275\u0275text(33, "Back to Login");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const forgotForm_r5 = \u0275\u0275reference(22);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !forgotForm_r5.valid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading ? "Sending..." : "Send Reset Link", " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  router;
  authService;
  email = "";
  isLoading = false;
  errorMessage = "";
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  isMobile() {
    return window.innerWidth <= 768;
  }
  onSubmit() {
    if (!this.email)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.sendPasswordResetEmail(this.email).subscribe({
      next: () => {
        this.isLoading = false;
        alert("Un lien de r\xE9initialisation a \xE9t\xE9 envoy\xE9 \xE0 votre adresse email.");
        this.backToLogin();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Erreur lors de l'envoi du mail.";
      }
    });
  }
  backToLogin() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 2, vars: 2, consts: [["forgotForm", "ngForm"], ["class", "font-inter", 4, "ngIf"], ["class", "desktop-login-container", 4, "ngIf"], [1, "font-inter"], [1, "welcome-screen", "show-login"], [1, "welcome-top-section"], ["viewBox", "0 0 390 520", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "wave-svg"], ["id", "waveGradient", "x1", "0%", "y1", "100%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#90b9fc"], ["offset", "100%", "stop-color", "#95f2d7"], ["d", "M0 0 L390 0 L390 420 Q320 480 195 450 Q70 420 0 480 L0 0 Z", "fill", "url(#waveGradient)"], [1, "welcome-bottom-section"], [1, "login-content", "visible"], [1, "signin-title"], [1, "login-form", 3, "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group-mobile"], [1, "form-label-mobile"], [1, "input-wrapper"], [1, "bi", "bi-envelope"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", "autocomplete", "username", "placeholder", "demo@email.com", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-login", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "signup-prompt"], [3, "click"], ["role", "alert", 1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "desktop-login-container"], [1, "login-split-layout"], [1, "left-section"], [1, "welcome-content"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "logo-section"], [1, "logo-circle"], ["src", "/assets/images/icon.png", "alt", "MiniMinds Logo"], [1, "brand-name"], [1, "decorative-icons"], [1, "icon", "icon-star"], [1, "icon", "icon-cloud"], [1, "icon", "icon-leaf"], [1, "icon", "icon-sparkle"], [1, "right-section"], [1, "login-form-card"], [3, "ngSubmit"], [1, "form-group"], [1, "form-label"], [1, "input-with-icon"], ["type", "email", "name", "email", "required", "", "email", "", "autocomplete", "username", "placeholder", "Enter your email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-signin", 3, "disabled"], [1, "forgot-password"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ForgotPasswordComponent_ng_container_0_Template, 28, 5, "ng-container", 1)(1, ForgotPasswordComponent_div_1_Template, 34, 5, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.desktop-login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  overflow: hidden;\n}\n.login-split-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.left-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-content[_ngcontent-%COMP%] {\n  text-align: left;\n  z-index: 2;\n  padding: 0px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 800;\n  color: #000;\n  margin-bottom: 16px;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n  margin-bottom: 60px;\n}\n.logo-section[_ngcontent-%COMP%] {\n  margin: 60px 0;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.logo-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin-top: 20px;\n}\n.decorative-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.decorative-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.6;\n}\n.decorative-icons[_ngcontent-%COMP%]   .icon.icon-star[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 20%;\n  color: #9fd4c9;\n  font-size: 40px;\n}\n.decorative-icons[_ngcontent-%COMP%]   .icon.icon-cloud[_ngcontent-%COMP%] {\n  top: 25%;\n  left: 35%;\n  color: #b8d4ff;\n  font-size: 50px;\n}\n.decorative-icons[_ngcontent-%COMP%]   .icon.icon-leaf[_ngcontent-%COMP%] {\n  bottom: 30%;\n  right: 25%;\n  color: #9fd4c9;\n  font-size: 45px;\n}\n.decorative-icons[_ngcontent-%COMP%]   .icon.icon-sparkle[_ngcontent-%COMP%] {\n  top: 40%;\n  right: 20%;\n  color: #b8d4ff;\n  font-size: 35px;\n}\n.right-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.login-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 50px 60px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 500;\n  color: #666;\n  margin-bottom: 8px;\n}\n.input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.input-with-icon[_ngcontent-%COMP%]   .toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  cursor: pointer;\n  font-size: 18px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px 14px 20px;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.form-check-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.form-check-custom[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.form-check-custom[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  cursor: pointer;\n  margin: 0;\n}\n.btn-signin[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-bottom: 20px;\n}\n.btn-signin[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(125, 211, 192, 0.4);\n}\n.btn-signin[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 14px;\n}\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.signup-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.signup-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n}\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.welcome-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-screen.show-login[_ngcontent-%COMP%]   .welcome-top-section[_ngcontent-%COMP%] {\n  min-height: 40vh;\n}\n.welcome-screen.show-login[_ngcontent-%COMP%]   .welcome-bottom-section[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  border-radius: 32px 32px 0 0;\n  margin-top: -30px;\n}\n.welcome-top-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 55vh;\n  transition: min-height 0.5s ease;\n}\n.welcome-top-section[_ngcontent-%COMP%]   .wave-svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.welcome-bottom-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 40px 30px 40px;\n  position: relative;\n  z-index: 2;\n  min-height: 45vh;\n  transition: all 0.5s ease;\n}\n.welcome-content[_ngcontent-%COMP%] {\n  transition: all 0.4s ease;\n  opacity: 1;\n  transform: translateY(0);\n}\n.welcome-content.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-20px);\n  position: absolute;\n  pointer-events: none;\n}\n.welcome-content[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n}\n.welcome-content[_ngcontent-%COMP%]   .welcome-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9a9a9a;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%]   .continue-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9a9a9a;\n  font-weight: 500;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #ffffff;\n  border: 3px solid #7ABFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #7ABFFF;\n  background: none;\n  position: static;\n  padding: 0;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]:hover {\n  background: #7ABFFF;\n}\n.welcome-content[_ngcontent-%COMP%]   .continue-btn-wrapper[_ngcontent-%COMP%]   .continue-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.login-content[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all 0.5s ease 0.2s;\n  pointer-events: none;\n  position: absolute;\n  width: calc(100% - 60px);\n}\n.login-content.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  position: relative;\n  width: 100%;\n}\n.login-content[_ngcontent-%COMP%]   .signin-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 30px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .form-label-mobile[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 8px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 8px;\n  position: relative;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-size: 18px;\n  margin-right: 12px;\n  background: none;\n  position: static;\n  padding: 0;\n  border-radius: 0;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   i.toggle-pass[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: auto;\n  cursor: pointer;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  color: #333;\n  background: transparent;\n}\n.login-form[_ngcontent-%COMP%]   .form-group-mobile[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #7ABFFF;\n}\n.form-options[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333;\n  margin: 0;\n}\n.form-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #7ABFFF;\n  text-decoration: none;\n}\n.form-options[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background: #7ABFFF;\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 20px;\n}\n.btn-login[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5aa8f5;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(122, 191, 255, 0.4);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.signup-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n.signup-prompt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n}\n.signup-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7ABFFF;\n  text-decoration: none;\n  margin-left: 4px;\n  font-weight: 500;\n}\n.signup-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.header-info[_ngcontent-%COMP%] {\n  padding: 50px 20px 16px;\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 60px;\n}\n.header-info[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: bold;\n}\n.header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-transform: capitalize;\n  margin-bottom: 0;\n}\n.header-info[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5b5f63;\n  font-size: 14px;\n}\n.mobile-view-login[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  margin-top: -79px;\n}\n.mobile-view-login[_ngcontent-%COMP%]   .main-information[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b9ceff 0%,\n      #b2f1e3 100%);\n  padding: 50px 20px 16px;\n  border-radius: 32px 32px 0 0;\n  height: calc(100vh - 167px);\n}\n.mobile-view-login[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: none !important;\n  border: none !important;\n}\n.logo-login-mobile[_ngcontent-%COMP%] {\n  transform: translateY(-15px);\n  width: max-content;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  background: #f8f8f8;\n}\n.logo-login-mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85px;\n}\n.form-login_mobile[_ngcontent-%COMP%] {\n  justify-self: center;\n  margin: 0 auto;\n}\n.login-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: none !important;\n  color: #202C4B;\n  font-weight: 600;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--white);\n  text-decoration: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.link[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.link[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: -0.65em;\n  transform: translateY(-50%);\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background-color: #90bafc;\n  z-index: 0;\n  transition: width 0.4s cubic-bezier(0.5, 1.5, 0.5, 1), left 0.6s cubic-bezier(0.5, 1.5, 0.5, 1);\n}\n.link[_ngcontent-%COMP%]:hover   .color[_ngcontent-%COMP%] {\n  width: calc(100% + 1.3em);\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<ng-container *ngIf="isMobile()" class="font-inter">\r
  <div class="welcome-screen show-login">\r
    <div class="welcome-top-section">\r
      <svg viewBox="0 0 390 520" preserveAspectRatio="xMidYMax slice" class="wave-svg" xmlns="http://www.w3.org/2000/svg">\r
        <defs>\r
          <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="0%">\r
            <stop offset="0%" stop-color="#90b9fc" />\r
            <stop offset="100%" stop-color="#95f2d7" />\r
          </linearGradient>\r
        </defs>\r
        <path d="M0 0 L390 0 L390 420 Q320 480 195 450 Q70 420 0 480 L0 0 Z" fill="url(#waveGradient)"></path>\r
      </svg>\r
    </div>\r
    <div class="welcome-bottom-section">\r
      <div class="login-content visible">\r
        <h1 class="signin-title">Forgot Password</h1>\r
        <form (ngSubmit)="onSubmit()" #forgotForm="ngForm" class="login-form">\r
          <div *ngIf="errorMessage" class="alert alert-danger" role="alert">\r
            {{ errorMessage }}\r
          </div>\r
          <div class="form-group-mobile">\r
            <label class="form-label-mobile">Email</label>\r
            <div class="input-wrapper">\r
              <i class="bi bi-envelope"></i>\r
              <input\r
                type="email"\r
                id="email"\r
                name="email"\r
                [(ngModel)]="email"\r
                required\r
                email\r
                autocomplete="username"\r
                placeholder="demo@email.com">\r
            </div>\r
          </div>\r
          <button type="submit" class="btn-login" [disabled]="!forgotForm.valid || isLoading">\r
            <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ isLoading ? 'Sending...' : 'Send Reset Link' }}\r
          </button>\r
        </form>\r
        <div class="signup-prompt">\r
          <a (click)="backToLogin()">Back to Login</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ng-container>\r
\r
<div *ngIf="!isMobile()" class="desktop-login-container">\r
  <div class="login-split-layout">\r
    <div class="left-section">\r
      <div class="welcome-content">\r
        <h1 class="welcome-title">Forgot Password?</h1>\r
        <p class="welcome-subtitle">Enter your email to reset your password</p>\r
        <div class="logo-section">\r
          <div class="logo-circle">\r
            <img src="/assets/images/icon.png" alt="MiniMinds Logo">\r
          </div>\r
          <h2 class="brand-name">MiniMinds Daycare</h2>\r
        </div>\r
        <div class="decorative-icons">\r
          <i class="icon icon-star"></i>\r
          <i class="icon icon-cloud"></i>\r
          <i class="icon icon-leaf"></i>\r
          <i class="icon icon-sparkle"></i>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="right-section">\r
      <div class="login-form-card">\r
        <div *ngIf="errorMessage" class="alert alert-danger" role="alert">\r
          {{ errorMessage }}\r
        </div>\r
        <form (ngSubmit)="onSubmit()" #forgotForm="ngForm">\r
          <div class="form-group">\r
            <label class="form-label">Email Address</label>\r
            <div class="input-with-icon">\r
              <input\r
                type="email"\r
                class="form-input"\r
                name="email"\r
                [(ngModel)]="email"\r
                required\r
                email\r
                autocomplete="username"\r
                placeholder="Enter your email">\r
            </div>\r
          </div>\r
          <button type="submit" class="btn-signin" [disabled]="!forgotForm.valid || isLoading">\r
            <span *ngIf="isLoading" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ isLoading ? 'Sending...' : 'Send Reset Link' }}\r
          </button>\r
        </form>\r
        <div class="forgot-password">\r
          <a (click)="backToLogin()">Back to Login</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/auth/forgot-password/forgot-password.component.scss */\n.desktop-login-container {\n  min-height: 100vh;\n  overflow: hidden;\n}\n.login-split-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.left-section {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-content {\n  text-align: left;\n  z-index: 2;\n  padding: 0px;\n}\n.welcome-title {\n  font-size: 56px;\n  font-weight: 800;\n  color: #000;\n  margin-bottom: 16px;\n}\n.welcome-subtitle {\n  font-size: 20px;\n  color: #666;\n  margin-bottom: 60px;\n}\n.logo-section {\n  margin: 60px 0;\n}\n.logo-circle {\n  width: 180px;\n  height: 180px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 30px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.logo-circle img {\n  width: 100px;\n  height: 100px;\n  object-fit: contain;\n}\n.brand-name {\n  font-size: 32px;\n  font-weight: 700;\n  color: #000;\n  margin-top: 20px;\n}\n.decorative-icons {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.decorative-icons .icon {\n  position: absolute;\n  opacity: 0.6;\n}\n.decorative-icons .icon.icon-star {\n  top: 15%;\n  left: 20%;\n  color: #9fd4c9;\n  font-size: 40px;\n}\n.decorative-icons .icon.icon-cloud {\n  top: 25%;\n  left: 35%;\n  color: #b8d4ff;\n  font-size: 50px;\n}\n.decorative-icons .icon.icon-leaf {\n  bottom: 30%;\n  right: 25%;\n  color: #9fd4c9;\n  font-size: 45px;\n}\n.decorative-icons .icon.icon-sparkle {\n  top: 40%;\n  right: 20%;\n  color: #b8d4ff;\n  font-size: 35px;\n}\n.right-section {\n  flex: 1;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n}\n.login-form-card {\n  background: white;\n  border-radius: 24px;\n  padding: 50px 60px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-size: 15px;\n  font-weight: 500;\n  color: #666;\n  margin-bottom: 8px;\n}\n.input-with-icon {\n  position: relative;\n}\n.input-with-icon .input-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  font-size: 18px;\n}\n.input-with-icon .toggle-password {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #7dd3c0;\n  cursor: pointer;\n  font-size: 18px;\n}\n.form-input {\n  width: 100%;\n  padding: 14px 16px 14px 20px;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);\n}\n.form-input::placeholder {\n  color: #bbb;\n}\n.form-check-custom {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 24px;\n}\n.form-check-custom input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.form-check-custom label {\n  font-size: 14px;\n  color: #666;\n  cursor: pointer;\n  margin: 0;\n}\n.btn-signin {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-bottom: 20px;\n}\n.btn-signin:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(125, 211, 192, 0.4);\n}\n.btn-signin:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.forgot-password {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.forgot-password a {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 14px;\n}\n.forgot-password a:hover {\n  text-decoration: underline;\n}\n.signup-link {\n  text-align: center;\n}\n.signup-link p {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.signup-link a {\n  color: #7db9ff;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n}\n.signup-link a:hover {\n  text-decoration: underline;\n}\n.welcome-screen {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  position: relative;\n  overflow: hidden;\n}\n.welcome-screen.show-login .welcome-top-section {\n  min-height: 40vh;\n}\n.welcome-screen.show-login .welcome-bottom-section {\n  min-height: 60vh;\n  border-radius: 32px 32px 0 0;\n  margin-top: -30px;\n}\n.welcome-top-section {\n  position: relative;\n  min-height: 55vh;\n  transition: min-height 0.5s ease;\n}\n.welcome-top-section .wave-svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.welcome-bottom-section {\n  background: #ffffff;\n  padding: 40px 30px 40px;\n  position: relative;\n  z-index: 2;\n  min-height: 45vh;\n  transition: all 0.5s ease;\n}\n.welcome-content {\n  transition: all 0.4s ease;\n  opacity: 1;\n  transform: translateY(0);\n}\n.welcome-content.hidden {\n  opacity: 0;\n  transform: translateY(-20px);\n  position: absolute;\n  pointer-events: none;\n}\n.welcome-content .welcome-title {\n  font-size: 42px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 16px;\n}\n.welcome-content .welcome-description {\n  font-size: 16px;\n  color: #9a9a9a;\n  line-height: 1.6;\n  margin-bottom: 40px;\n}\n.welcome-content .continue-btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 16px;\n}\n.welcome-content .continue-btn-wrapper .continue-text {\n  font-size: 16px;\n  color: #9a9a9a;\n  font-weight: 500;\n}\n.welcome-content .continue-btn-wrapper .continue-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #ffffff;\n  border: 3px solid #7ABFFF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.welcome-content .continue-btn-wrapper .continue-btn i {\n  font-size: 20px;\n  color: #7ABFFF;\n  background: none;\n  position: static;\n  padding: 0;\n}\n.welcome-content .continue-btn-wrapper .continue-btn:hover {\n  background: #7ABFFF;\n}\n.welcome-content .continue-btn-wrapper .continue-btn:hover i {\n  color: #ffffff;\n}\n.login-content {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: all 0.5s ease 0.2s;\n  pointer-events: none;\n  position: absolute;\n  width: calc(100% - 60px);\n}\n.login-content.visible {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  position: relative;\n  width: 100%;\n}\n.login-content .signin-title {\n  font-size: 36px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 30px;\n}\n.login-form .form-group-mobile {\n  margin-bottom: 20px;\n}\n.login-form .form-group-mobile .form-label-mobile {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 8px;\n}\n.login-form .form-group-mobile .input-wrapper {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 8px;\n  position: relative;\n}\n.login-form .form-group-mobile .input-wrapper i {\n  color: #9a9a9a;\n  font-size: 18px;\n  margin-right: 12px;\n  background: none;\n  position: static;\n  padding: 0;\n  border-radius: 0;\n}\n.login-form .form-group-mobile .input-wrapper i.toggle-pass {\n  margin-right: 0;\n  margin-left: auto;\n  cursor: pointer;\n}\n.login-form .form-group-mobile .input-wrapper input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 15px;\n  color: #333;\n  background: transparent;\n}\n.login-form .form-group-mobile .input-wrapper input::placeholder {\n  color: #bbb;\n}\n.form-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  margin-top: 10px;\n}\n.form-options .remember-me {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-options .remember-me input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: #7ABFFF;\n}\n.form-options .remember-me label {\n  font-size: 14px;\n  color: #333;\n  margin: 0;\n}\n.form-options .forgot-link {\n  font-size: 14px;\n  color: #7ABFFF;\n  text-decoration: none;\n}\n.form-options .forgot-link:hover {\n  text-decoration: underline;\n}\n.btn-login {\n  width: 100%;\n  padding: 16px;\n  background: #7ABFFF;\n  border: none;\n  border-radius: 12px;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-bottom: 20px;\n}\n.btn-login:hover:not(:disabled) {\n  background: #5aa8f5;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(122, 191, 255, 0.4);\n}\n.btn-login:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.signup-prompt {\n  text-align: center;\n  font-size: 14px;\n}\n.signup-prompt span {\n  color: #666;\n}\n.signup-prompt a {\n  color: #7ABFFF;\n  text-decoration: none;\n  margin-left: 4px;\n  font-weight: 500;\n}\n.signup-prompt a:hover {\n  text-decoration: underline;\n}\n.header-info {\n  padding: 50px 20px 16px;\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 60px;\n}\n.header-info .login-title {\n  font-size: 34px;\n  font-weight: bold;\n}\n.header-info .image-name {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.header-info .image-name .name {\n  margin-top: 10px;\n  text-transform: capitalize;\n  margin-bottom: 0;\n}\n.header-info .image-name p {\n  color: #5b5f63;\n  font-size: 14px;\n}\n.mobile-view-login .body {\n  margin-top: -79px;\n}\n.mobile-view-login .main-information {\n  background:\n    linear-gradient(\n      135deg,\n      #b9ceff 0%,\n      #b2f1e3 100%);\n  padding: 50px 20px 16px;\n  border-radius: 32px 32px 0 0;\n  height: calc(100vh - 167px);\n}\n.mobile-view-login .card {\n  background: none !important;\n  border: none !important;\n}\n.logo-login-mobile {\n  transform: translateY(-15px);\n  width: max-content;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  background: #f8f8f8;\n}\n.logo-login-mobile img {\n  max-width: 85px;\n}\n.form-login_mobile {\n  justify-self: center;\n  margin: 0 auto;\n}\n.login-btn {\n  background: white;\n  border: none !important;\n  color: #202C4B;\n  font-weight: 600;\n}\n.link {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--white);\n  text-decoration: none;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n}\n.link > span,\n.link > i {\n  position: relative;\n  z-index: 1;\n}\n.link i {\n  margin-left: 0.5em;\n}\n.link .color {\n  position: absolute;\n  top: 50%;\n  left: -0.65em;\n  transform: translateY(-50%);\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background-color: #90bafc;\n  z-index: 0;\n  transition: width 0.4s cubic-bezier(0.5, 1.5, 0.5, 1), left 0.6s cubic-bezier(0.5, 1.5, 0.5, 1);\n}\n.link:hover .color {\n  width: calc(100% + 1.3em);\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.component.ts", lineNumber: 14 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-CNQSFRZK.js.map
