import {
  Haptics
} from "./chunk-LFPP2QRJ.js";
import {
  GeolocationService
} from "./chunk-GJ45YLOP.js";
import {
  QrCheckinService
} from "./chunk-Q6ENMSPI.js";
import "./chunk-JHHNP67E.js";
import {
  ImpactStyle
} from "./chunk-2FGXCAFF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  Capacitor
} from "./chunk-7KUBODN6.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  ChangeDetectorRef,
  Component,
  NgZone,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/qr-action/qr-action.component.ts
function QrActionComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "QR_ACTION.VALIDATING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "QR_ACTION.PLEASE_WAIT"));
  }
}
function QrActionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "QR_ACTION.GETTING_LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "QR_ACTION.LOCATION_WAIT"));
  }
}
function QrActionComponent_div_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.processingChildren.join(", "), " ");
  }
}
function QrActionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QrActionComponent_div_4_p_7_Template, 2, 1, "p", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.qrType === "CheckIn" ? \u0275\u0275pipeBind1(5, 2, "QR_ACTION.CHECKING_IN") : \u0275\u0275pipeBind1(6, 4, "QR_ACTION.CHECKING_OUT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.processingChildren.length > 0);
  }
}
function QrActionComponent_div_5_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.processedChildren.join(", "), " ");
  }
}
function QrActionComponent_div_5_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    \u0275\u0275classProp("success", detail_r3.success)("error", !detail_r3.success);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle", detail_r3.success)("bi-x-circle", !detail_r3.success);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", detail_r3.childName, ": ", detail_r3.message);
  }
}
function QrActionComponent_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, QrActionComponent_div_5_div_6_div_1_Template, 4, 10, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.resultDetails);
  }
}
function QrActionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QrActionComponent_div_5_p_5_Template, 2, 1, "p", 9)(6, QrActionComponent_div_5_div_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function QrActionComponent_div_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275element(8, "i", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processedChildren.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.resultDetails.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 4, "QR_ACTION.GO_HOME"), " ");
  }
}
function QrActionComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "button", 24);
    \u0275\u0275listener("click", function QrActionComponent_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 25);
    \u0275\u0275listener("click", function QrActionComponent_div_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retry());
    });
    \u0275\u0275element(10, "i", 26);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "QR_ACTION.GO_HOME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 5, "QR_ACTION.TRY_AGAIN"), " ");
  }
}
function QrActionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 27);
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 14);
    \u0275\u0275listener("click", function QrActionComponent_div_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToLogin());
    });
    \u0275\u0275element(10, "i", 29);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "QR_ACTION.LOGIN_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "QR_ACTION.LOGIN_MESSAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 7, "QR_ACTION.LOGIN"), " ");
  }
}
function QrActionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 27);
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 14);
    \u0275\u0275listener("click", function QrActionComponent_div_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retryLocation());
    });
    \u0275\u0275element(10, "i", 26);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 31);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "QR_ACTION.LOCATION_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.locationErrorMessage || \u0275\u0275pipeBind1(8, 6, "QR_ACTION.LOCATION_MESSAGE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 8, "QR_ACTION.TRY_AGAIN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "QR_ACTION.LOCATION_TIP"));
  }
}
function QrActionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 21);
    \u0275\u0275element(2, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function QrActionComponent_div_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "QR_ACTION.OUTSIDE_GEOFENCE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.geofenceMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "QR_ACTION.GO_HOME"), " ");
  }
}
function QrActionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 27);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function QrActionComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToDashboard());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.noEligibleMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "QR_ACTION.GO_HOME"), " ");
  }
}
function QrActionComponent_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function QrActionComponent_div_11_div_8_Template_div_click_0_listener() {
      const child_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleChildSelection(child_r11));
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 44);
    \u0275\u0275elementStart(4, "div", 45)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isChildSelected(child_r11.id))("disabled", ctx_r0.isChildDisabled(child_r11));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-check-square-fill", ctx_r0.isChildSelected(child_r11.id))("bi-square", !ctx_r0.isChildSelected(child_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getChildProfilePicture(child_r11), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r11.firstName, " ", child_r11.lastName);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", child_r11.isCheckedIn && !child_r11.isCheckedOut)("text-secondary", child_r11.isCheckedOut)("text-warning", !child_r11.isCheckedIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getChildStatusText(child_r11), " ");
  }
}
function QrActionComponent_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275listener("click", function QrActionComponent_div_11_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectAll());
    });
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "QR_ACTION.SELECT_ALL"), " ");
  }
}
function QrActionComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 35);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275template(8, QrActionComponent_div_11_div_8_Template, 9, 18, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, QrActionComponent_div_11_div_9_Template, 5, 3, "div", 39);
    \u0275\u0275elementStart(10, "button", 40);
    \u0275\u0275listener("click", function QrActionComponent_div_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.processSelectedChildren());
    });
    \u0275\u0275element(11, "i", 41);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("checkin-icon", ctx_r0.qrType === "CheckIn")("checkout-icon", ctx_r0.qrType === "CheckOut");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qrType === "CheckIn" ? \u0275\u0275pipeBind1(5, 14, "QR_ACTION.SELECT_CHECKIN") : \u0275\u0275pipeBind1(6, 16, "QR_ACTION.SELECT_CHECKOUT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.eligibleChildren);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.eligibleChildren.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.selectedChildIds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-box-arrow-in-right", ctx_r0.qrType === "CheckIn")("bi-box-arrow-right", ctx_r0.qrType === "CheckOut");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.qrType === "CheckIn" ? \u0275\u0275pipeBind1(13, 18, "QR_ACTION.CHECK_IN") : \u0275\u0275pipeBind1(14, 20, "QR_ACTION.CHECK_OUT"), " (", ctx_r0.selectedChildIds.length, ") ");
  }
}
var QrActionComponent = class _QrActionComponent {
  route;
  router;
  translate;
  qrService;
  geolocationService;
  authService;
  cdr;
  ngZone;
  state = "loading";
  qrCode = "";
  qrType = "CheckIn";
  // Children
  allChildren = [];
  eligibleChildren = [];
  selectedChildIds = [];
  processingChildren = [];
  processedChildren = [];
  // Messages
  successMessage = "";
  errorMessage = "";
  geofenceMessage = "";
  noEligibleMessage = "";
  // Results
  resultDetails = [];
  // Location
  currentPosition = null;
  locationRetryCount = 0;
  maxLocationRetries = 3;
  locationErrorMessage = "";
  subscriptions = [];
  constructor(route, router, translate, qrService, geolocationService, authService, cdr, ngZone) {
    this.route = route;
    this.router = router;
    this.translate = translate;
    this.qrService = qrService;
    this.geolocationService = geolocationService;
    this.authService = authService;
    this.cdr = cdr;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.qrCode = this.route.snapshot.paramMap.get("code") || "";
    if (!this.qrCode) {
      this.state = "error";
      this.errorMessage = this.translate.instant("QR_ACTION.INVALID_QR");
      return;
    }
    if (!this.authService.isAuthenticated()) {
      this.state = "login-required";
      localStorage.setItem("pendingQrAction", this.qrCode);
      return;
    }
    localStorage.removeItem("pendingQrAction");
    this.startAutomaticFlow();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  /**
   * Main automatic flow - validates QR, checks if geofencing is needed, processes attendance
   */
  async startAutomaticFlow() {
    this.state = "loading";
    const sub1 = this.qrService.validateQrCode(this.qrCode).subscribe({
      next: (response) => {
        if (response.isValid) {
          this.qrType = response.type;
          this.checkGeofencingRequired();
        } else {
          this.state = "error";
          this.errorMessage = response.message || this.translate.instant("QR_ACTION.INVALID_QR");
        }
      },
      error: () => {
        this.state = "error";
        this.errorMessage = this.translate.instant("QR_ACTION.VALIDATION_ERROR");
      }
    });
    this.subscriptions.push(sub1);
  }
  /**
   * Check if geofencing is required before requesting location
   */
  checkGeofencingRequired() {
    const sub = this.qrService.getSchoolSettings().subscribe({
      next: (settings) => {
        if (settings.geofenceEnabled) {
          this.schoolSettings = settings;
          this.requestLocation();
        } else {
          this.loadChildrenAndProcess();
        }
      },
      error: () => {
        this.loadChildrenAndProcess();
      }
    });
    this.subscriptions.push(sub);
  }
  schoolSettings = null;
  /**
   * Request location and continue flow
   */
  requestLocation() {
    this.state = "requesting-location";
    this.locationRetryCount++;
    const sub = this.geolocationService.getCurrentPosition({
      enableHighAccuracy: false,
      // Low accuracy is faster and sufficient for geofencing
      timeout: 1e4,
      // 10 seconds
      maximumAge: 6e4
      // Accept cached position up to 1 minute
    }).subscribe({
      next: (position) => {
        this.currentPosition = {
          latitude: position.latitude,
          longitude: position.longitude
        };
        this.locationRetryCount = 0;
        this.validateGeofenceAndContinue();
      },
      error: (error) => {
        console.error("Location error:", error);
        this.locationErrorMessage = error?.message || this.translate.instant("QR_ACTION.LOCATION_MESSAGE");
        if (this.locationRetryCount < this.maxLocationRetries) {
          setTimeout(() => {
            this.requestLocation();
          }, 1e3);
        } else {
          this.state = "location-required";
          this.locationRetryCount = 0;
        }
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Validate geofence using cached settings and continue
   */
  validateGeofenceAndContinue() {
    if (this.schoolSettings && this.currentPosition) {
      const distance = this.geolocationService.calculateDistance(this.currentPosition.latitude, this.currentPosition.longitude, this.schoolSettings.latitude, this.schoolSettings.longitude);
      if (distance > this.schoolSettings.geofenceRadiusMeters) {
        this.state = "geofence-error";
        this.geofenceMessage = this.translate.instant("QR_ACTION.GEOFENCE_MESSAGE", {
          distance: Math.round(distance),
          radius: this.schoolSettings.geofenceRadiusMeters
        });
        return;
      }
    }
    this.loadChildrenAndProcess();
  }
  /**
   * Load children and automatically process if only one eligible
   */
  loadChildrenAndProcess() {
    let childrenObservable;
    if (this.authService.isParent()) {
      childrenObservable = this.qrService.getMyChildrenStatus();
    } else if (this.authService.isAdmin()) {
      childrenObservable = this.qrService.getAllChildrenStatus();
    } else {
      childrenObservable = this.qrService.getTeacherChildrenStatus();
    }
    const sub = childrenObservable.subscribe({
      next: (children) => {
        this.allChildren = children.map((c) => ({
          id: c.id,
          firstName: c.firstName,
          lastName: c.lastName,
          profilePicture: c.profilePicture,
          profilePictureUrl: c.profilePictureUrl,
          isCheckedIn: c.isCheckedIn,
          isCheckedOut: c.isCheckedOut
        }));
        this.eligibleChildren = this.allChildren.filter((c) => !this.isChildDisabled(c));
        if (this.eligibleChildren.length === 0) {
          this.state = "no-eligible-children";
          this.noEligibleMessage = this.qrType === "CheckIn" ? this.translate.instant("QR_ACTION.ALL_CHECKED_IN") : this.translate.instant("QR_ACTION.NONE_TO_CHECKOUT");
          return;
        }
        if (this.eligibleChildren.length === 1) {
          this.selectedChildIds = [this.eligibleChildren[0].id];
          this.processSelectedChildren();
        } else {
          this.state = "select-child";
        }
      },
      error: () => {
        this.state = "error";
        this.errorMessage = this.translate.instant("QR_ACTION.LOAD_CHILDREN_ERROR");
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Check if a child is disabled for selection
   */
  isChildDisabled(child) {
    if (this.qrType === "CheckIn") {
      return child.isCheckedIn;
    } else {
      return !child.isCheckedIn || child.isCheckedOut;
    }
  }
  /**
   * Check if child is selected
   */
  isChildSelected(childId) {
    return this.selectedChildIds.includes(childId);
  }
  /**
   * Toggle child selection
   */
  toggleChildSelection(child) {
    if (this.isChildDisabled(child))
      return;
    const index = this.selectedChildIds.indexOf(child.id);
    if (index > -1) {
      this.selectedChildIds.splice(index, 1);
    } else {
      this.selectedChildIds.push(child.id);
    }
  }
  /**
   * Select all eligible children
   */
  selectAll() {
    this.selectedChildIds = this.eligibleChildren.filter((c) => !this.isChildDisabled(c)).map((c) => c.id);
  }
  /**
   * Get child profile picture URL
   */
  getChildProfilePicture(child) {
    if (child.profilePictureUrl) {
      return ApiConfig.STATIC_URL + child.profilePictureUrl;
    }
    if (child.profilePicture) {
      return child.profilePicture;
    }
    return "assets/child.png";
  }
  /**
   * Get child status text
   */
  getChildStatusText(child) {
    if (child.isCheckedOut) {
      return this.translate.instant("QR_ACTION.CHECKED_OUT");
    }
    if (child.isCheckedIn) {
      return this.translate.instant("QR_ACTION.CHECKED_IN");
    }
    return this.translate.instant("QR_ACTION.NOT_CHECKED_IN");
  }
  /**
   * Process attendance for selected children
   */
  processSelectedChildren() {
    if (this.selectedChildIds.length === 0)
      return;
    this.state = "processing";
    this.cdr.detectChanges();
    this.processingChildren = this.allChildren.filter((c) => this.selectedChildIds.includes(c.id)).map((c) => c.firstName);
    const request = {
      qrCode: this.qrCode,
      childIds: this.selectedChildIds
    };
    if (this.currentPosition) {
      request.latitude = this.currentPosition.latitude;
      request.longitude = this.currentPosition.longitude;
    }
    const action$ = this.qrType === "CheckIn" ? this.qrService.qrCheckIn(request) : this.qrService.qrCheckOut(request);
    const sub = action$.subscribe({
      next: (result) => {
        this.ngZone.run(() => {
          this.triggerHaptic(result.success !== false);
          if (result.success !== false) {
            this.state = "success";
            this.successMessage = this.qrType === "CheckIn" ? this.translate.instant("QR_ACTION.CHECKIN_SUCCESS") : this.translate.instant("QR_ACTION.CHECKOUT_SUCCESS");
            this.processedChildren = this.processingChildren;
            this.resultDetails = result.results || [];
          } else {
            this.state = "error";
            this.errorMessage = result.message || this.translate.instant("QR_ACTION.ACTION_FAILED");
            this.resultDetails = result.results || [];
          }
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.triggerHaptic(false);
          this.state = "error";
          this.errorMessage = err.error?.message || this.translate.instant("QR_ACTION.ACTION_FAILED");
          this.cdr.detectChanges();
        });
      }
    });
    this.subscriptions.push(sub);
  }
  /**
   * Trigger haptic feedback
   */
  async triggerHaptic(success) {
    if (Capacitor.isNativePlatform()) {
      try {
        await Haptics.impact({
          style: success ? ImpactStyle.Medium : ImpactStyle.Heavy
        });
      } catch {
      }
    }
  }
  /**
   * Retry location manually (after max auto-retries failed)
   */
  retryLocation() {
    this.locationErrorMessage = "";
    this.requestLocation();
  }
  /**
   * Retry the flow
   */
  retry() {
    this.state = "loading";
    this.selectedChildIds = [];
    this.resultDetails = [];
    this.startAutomaticFlow();
  }
  /**
   * Navigate to dashboard
   */
  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  /**
   * Navigate to login with return URL
   */
  goToLogin() {
    this.router.navigate(["/login"], {
      queryParams: { returnUrl: `/qr-action/${this.qrCode}` }
    });
  }
  static \u0275fac = function QrActionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrActionComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(QrCheckinService), \u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrActionComponent, selectors: [["app-qr-action"]], decls: 12, vars: 10, consts: [[1, "qr-action-container"], [1, "qr-action-card"], ["class", "state-container", 4, "ngIf"], ["class", "state-container success", 4, "ngIf"], ["class", "state-container error", 4, "ngIf"], [1, "state-container"], [1, "spinner-container"], [1, "spinner"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "state-container", "success"], [1, "icon-container", "success-icon"], [1, "bi", "bi-check-circle-fill"], ["class", "result-details", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "mt-4", 3, "click"], [1, "bi", "bi-house", "me-2"], [1, "result-details"], ["class", "result-item", 3, "success", "error", 4, "ngFor", "ngForOf"], [1, "result-item"], [1, "bi"], [1, "state-container", "error"], [1, "icon-container", "error-icon"], [1, "bi", "bi-x-circle-fill"], [1, "button-group", "mt-4"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-arrow-repeat", "me-2"], [1, "icon-container", "warning-icon"], [1, "bi", "bi-person-lock"], [1, "bi", "bi-box-arrow-in-right", "me-2"], [1, "bi", "bi-geo-alt"], [1, "text-muted", "small", "mt-3"], [1, "bi", "bi-geo-alt-fill"], [1, "btn", "btn-outline-secondary", "mt-4", 3, "click"], [1, "bi", "bi-person-x"], [1, "icon-container"], [1, "bi", "bi-qr-code-scan"], [1, "children-list"], ["class", "child-item", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "button-group mt-4", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "w-100", "mt-3", 3, "click", "disabled"], [1, "me-2"], [1, "child-item", 3, "click"], [1, "child-checkbox"], ["alt", "Child", 1, "child-avatar", 3, "src"], [1, "child-info"], [1, "bi", "bi-check-all", "me-2"]], template: function QrActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, QrActionComponent_div_2_Template, 9, 6, "div", 2)(3, QrActionComponent_div_3_Template, 9, 6, "div", 2)(4, QrActionComponent_div_4_Template, 8, 6, "div", 2)(5, QrActionComponent_div_5_Template, 11, 6, "div", 3)(6, QrActionComponent_div_6_Template, 13, 7, "div", 4)(7, QrActionComponent_div_7_Template, 13, 9, "div", 2)(8, QrActionComponent_div_8_Template, 16, 12, "div", 2)(9, QrActionComponent_div_9_Template, 11, 7, "div", 2)(10, QrActionComponent_div_10_Template, 8, 4, "div", 2)(11, QrActionComponent_div_11_Template, 15, 22, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.state === "loading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "requesting-location");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "processing");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "error");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "login-required");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "location-required");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "geofence-error");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "no-eligible-children");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "select-child");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.qr-action-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  padding: 20px;\n}\n.qr-action-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 40px 30px;\n  max-width: 420px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.state-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 4px solid #e9ecef;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon-container[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  font-size: 48px;\n}\n.icon-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounceIn 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_bounceIn {\n  0% {\n    transform: scale(0.3);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  70% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #28a745;\n}\n.error-icon[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #dc3545;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #ffc107;\n}\n.checkin-icon[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #28a745;\n}\n.checkout-icon[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #dc3545;\n}\n.state-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.state-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #333;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.button-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.children-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-top: 20px;\n}\n.child-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.child-item[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: #f8f9fa;\n  border-color: #667eea;\n}\n.child-item.selected[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  border-color: #667eea;\n}\n.child-item.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.child-checkbox[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 20px;\n  color: #667eea;\n}\n.child-avatar[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 12px;\n}\n.child-info[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.child-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 15px;\n}\n.child-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n.result-details[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  text-align: left;\n}\n.result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  font-size: 14px;\n}\n.result-item.success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.result-item.error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.btn-lg[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  font-size: 16px;\n  border-radius: 12px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #7dd3c0 100%);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n}\n/*# sourceMappingURL=qr-action.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrActionComponent, [{
    type: Component,
    args: [{ selector: "app-qr-action", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <div class="qr-action-container">
      <div class="qr-action-card">
        <!-- Loading State -->
        <div *ngIf="state === 'loading'" class="state-container">
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
          <h4>{{ 'QR_ACTION.VALIDATING' | translate }}</h4>
          <p class="text-muted">{{ 'QR_ACTION.PLEASE_WAIT' | translate }}</p>
        </div>

        <!-- Requesting Location State -->
        <div *ngIf="state === 'requesting-location'" class="state-container">
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
          <h4>{{ 'QR_ACTION.GETTING_LOCATION' | translate }}</h4>
          <p class="text-muted">{{ 'QR_ACTION.LOCATION_WAIT' | translate }}</p>
        </div>

        <!-- Processing State -->
        <div *ngIf="state === 'processing'" class="state-container">
          <div class="spinner-container">
            <div class="spinner"></div>
          </div>
          <h4>{{ qrType === 'CheckIn' ? ('QR_ACTION.CHECKING_IN' | translate) : ('QR_ACTION.CHECKING_OUT' | translate) }}</h4>
          <p class="text-muted" *ngIf="processingChildren.length > 0">
            {{ processingChildren.join(', ') }}
          </p>
        </div>

        <!-- Success State -->
        <div *ngIf="state === 'success'" class="state-container success">
          <div class="icon-container success-icon">
            <i class="bi bi-check-circle-fill"></i>
          </div>
          <h3>{{ successMessage }}</h3>
          <p class="text-muted" *ngIf="processedChildren.length > 0">
            {{ processedChildren.join(', ') }}
          </p>
          <div class="result-details" *ngIf="resultDetails.length > 0">
            <div *ngFor="let detail of resultDetails" class="result-item" [class.success]="detail.success" [class.error]="!detail.success">
              <i class="bi" [class.bi-check-circle]="detail.success" [class.bi-x-circle]="!detail.success"></i>
              <span>{{ detail.childName }}: {{ detail.message }}</span>
            </div>
          </div>
          <button class="btn btn-primary btn-lg mt-4" (click)="goToDashboard()">
            <i class="bi bi-house me-2"></i>{{ 'QR_ACTION.GO_HOME' | translate }}
          </button>
        </div>

        <!-- Error State -->
        <div *ngIf="state === 'error'" class="state-container error">
          <div class="icon-container error-icon">
            <i class="bi bi-x-circle-fill"></i>
          </div>
          <h3>{{ errorMessage }}</h3>
          <div class="button-group mt-4">
            <button class="btn btn-outline-secondary" (click)="goToDashboard()">
              {{ 'QR_ACTION.GO_HOME' | translate }}
            </button>
            <button class="btn btn-primary" (click)="retry()">
              <i class="bi bi-arrow-repeat me-2"></i>{{ 'QR_ACTION.TRY_AGAIN' | translate }}
            </button>
          </div>
        </div>

        <!-- Login Required State -->
        <div *ngIf="state === 'login-required'" class="state-container">
          <div class="icon-container warning-icon">
            <i class="bi bi-person-lock"></i>
          </div>
          <h4>{{ 'QR_ACTION.LOGIN_REQUIRED' | translate }}</h4>
          <p class="text-muted">{{ 'QR_ACTION.LOGIN_MESSAGE' | translate }}</p>
          <button class="btn btn-primary btn-lg mt-4" (click)="goToLogin()">
            <i class="bi bi-box-arrow-in-right me-2"></i>{{ 'QR_ACTION.LOGIN' | translate }}
          </button>
        </div>

        <!-- Location Required State -->
        <div *ngIf="state === 'location-required'" class="state-container">
          <div class="icon-container warning-icon">
            <i class="bi bi-geo-alt"></i>
          </div>
          <h4>{{ 'QR_ACTION.LOCATION_REQUIRED' | translate }}</h4>
          <p class="text-muted">{{ locationErrorMessage || ('QR_ACTION.LOCATION_MESSAGE' | translate) }}</p>
          <button class="btn btn-primary btn-lg mt-4" (click)="retryLocation()">
            <i class="bi bi-arrow-repeat me-2"></i>{{ 'QR_ACTION.TRY_AGAIN' | translate }}
          </button>
          <p class="text-muted small mt-3">{{ 'QR_ACTION.LOCATION_TIP' | translate }}</p>
        </div>

        <!-- Geofence Error State -->
        <div *ngIf="state === 'geofence-error'" class="state-container">
          <div class="icon-container error-icon">
            <i class="bi bi-geo-alt-fill"></i>
          </div>
          <h4>{{ 'QR_ACTION.OUTSIDE_GEOFENCE' | translate }}</h4>
          <p class="text-muted">{{ geofenceMessage }}</p>
          <button class="btn btn-outline-secondary mt-4" (click)="goToDashboard()">
            {{ 'QR_ACTION.GO_HOME' | translate }}
          </button>
        </div>

        <!-- No Eligible Children State -->
        <div *ngIf="state === 'no-eligible-children'" class="state-container">
          <div class="icon-container warning-icon">
            <i class="bi bi-person-x"></i>
          </div>
          <h4>{{ noEligibleMessage }}</h4>
          <button class="btn btn-outline-secondary mt-4" (click)="goToDashboard()">
            {{ 'QR_ACTION.GO_HOME' | translate }}
          </button>
        </div>

        <!-- Select Child State (only when multiple children need selection) -->
        <div *ngIf="state === 'select-child'" class="state-container">
          <div class="icon-container" [class.checkin-icon]="qrType === 'CheckIn'" [class.checkout-icon]="qrType === 'CheckOut'">
            <i class="bi bi-qr-code-scan"></i>
          </div>
          <h4>{{ qrType === 'CheckIn' ? ('QR_ACTION.SELECT_CHECKIN' | translate) : ('QR_ACTION.SELECT_CHECKOUT' | translate) }}</h4>

          <div class="children-list">
            <div *ngFor="let child of eligibleChildren"
                 class="child-item"
                 [class.selected]="isChildSelected(child.id)"
                 [class.disabled]="isChildDisabled(child)"
                 (click)="toggleChildSelection(child)">
              <div class="child-checkbox">
                <i class="bi" [class.bi-check-square-fill]="isChildSelected(child.id)" [class.bi-square]="!isChildSelected(child.id)"></i>
              </div>
              <img [src]="getChildProfilePicture(child)" class="child-avatar" alt="Child">
              <div class="child-info">
                <h6>{{ child.firstName }} {{ child.lastName }}</h6>
                <small [class.text-success]="child.isCheckedIn && !child.isCheckedOut"
                       [class.text-secondary]="child.isCheckedOut"
                       [class.text-warning]="!child.isCheckedIn">
                  {{ getChildStatusText(child) }}
                </small>
              </div>
            </div>
          </div>

          <div class="button-group mt-4" *ngIf="eligibleChildren.length > 1">
            <button class="btn btn-outline-secondary" (click)="selectAll()">
              <i class="bi bi-check-all me-2"></i>{{ 'QR_ACTION.SELECT_ALL' | translate }}
            </button>
          </div>

          <button class="btn btn-primary btn-lg w-100 mt-3"
                  [disabled]="selectedChildIds.length === 0"
                  (click)="processSelectedChildren()">
            <i class="bi" [class.bi-box-arrow-in-right]="qrType === 'CheckIn'" [class.bi-box-arrow-right]="qrType === 'CheckOut'" class="me-2"></i>
            {{ qrType === 'CheckIn' ? ('QR_ACTION.CHECK_IN' | translate) : ('QR_ACTION.CHECK_OUT' | translate) }}
            ({{ selectedChildIds.length }})
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;70bf0c949258d5d53314a7a819308c930c89531a0f6691fbba778819e441e6dd;C:/laragon/www/miniminds/miniminds-web/src/app/features/qr-action/qr-action.component.ts */\n.qr-action-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  padding: 20px;\n}\n.qr-action-card {\n  background: white;\n  border-radius: 24px;\n  padding: 40px 30px;\n  max-width: 420px;\n  width: 100%;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.state-container {\n  text-align: center;\n}\n.spinner-container {\n  margin-bottom: 24px;\n}\n.spinner {\n  width: 60px;\n  height: 60px;\n  border: 4px solid #e9ecef;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon-container {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  font-size: 48px;\n}\n.icon-container i {\n  animation: bounceIn 0.5s ease;\n}\n@keyframes bounceIn {\n  0% {\n    transform: scale(0.3);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  70% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.success-icon {\n  background: #d4edda;\n  color: #28a745;\n}\n.error-icon {\n  background: #f8d7da;\n  color: #dc3545;\n}\n.warning-icon {\n  background: #fff3cd;\n  color: #ffc107;\n}\n.checkin-icon {\n  background: #d4edda;\n  color: #28a745;\n}\n.checkout-icon {\n  background: #f8d7da;\n  color: #dc3545;\n}\n.state-container h3,\n.state-container h4 {\n  margin-bottom: 8px;\n  color: #333;\n}\n.text-muted {\n  color: #6c757d;\n  margin-bottom: 0;\n}\n.button-group {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}\n.children-list {\n  max-height: 300px;\n  overflow-y: auto;\n  margin-top: 20px;\n}\n.child-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.child-item:hover:not(.disabled) {\n  background: #f8f9fa;\n  border-color: #667eea;\n}\n.child-item.selected {\n  background: #e8f0fe;\n  border-color: #667eea;\n}\n.child-item.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.child-checkbox {\n  margin-right: 12px;\n  font-size: 20px;\n  color: #667eea;\n}\n.child-avatar {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 12px;\n}\n.child-info {\n  flex: 1;\n  text-align: left;\n}\n.child-info h6 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 15px;\n}\n.child-info small {\n  display: block;\n  font-size: 12px;\n}\n.result-details {\n  margin-top: 16px;\n  text-align: left;\n}\n.result-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  margin-bottom: 6px;\n  font-size: 14px;\n}\n.result-item.success {\n  background: #d4edda;\n  color: #155724;\n}\n.result-item.error {\n  background: #f8d7da;\n  color: #721c24;\n}\n.btn-lg {\n  padding: 14px 28px;\n  font-size: 16px;\n  border-radius: 12px;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%);\n  border: none;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #7dd3c0 0%,\n      #7dd3c0 100%);\n}\n.btn-primary:disabled {\n  background: #ccc;\n}\n/*# sourceMappingURL=qr-action.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: TranslateService }, { type: QrCheckinService }, { type: GeolocationService }, { type: AuthService }, { type: ChangeDetectorRef }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrActionComponent, { className: "QrActionComponent", filePath: "src/app/features/qr-action/qr-action.component.ts", lineNumber: 411 });
})();
export {
  QrActionComponent
};
//# sourceMappingURL=chunk-S3N4BF3Z.js.map
