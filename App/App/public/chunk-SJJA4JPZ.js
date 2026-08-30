import {
  Html5Qrcode
} from "./chunk-E6MI3USO.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  GeolocationService
} from "./chunk-GJ45YLOP.js";
import {
  QrCheckinService
} from "./chunk-Q6ENMSPI.js";
import "./chunk-JHHNP67E.js";
import "./chunk-7KUBODN6.js";
import {
  FormsModule
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app/features/qr-checkin/qr-checkin.ts
function QrCheckin_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function QrCheckin_div_2_ng_container_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.getLocation());
    });
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275text(5, " Retry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.locationError);
  }
}
function QrCheckin_div_2_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2, " You are at the school ");
    \u0275\u0275elementEnd();
  }
}
function QrCheckin_div_2_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, ctx_r1.distanceToSchool, "1.0-0"), "m away from school (must be within ", ctx_r1.schoolSettings == null ? null : ctx_r1.schoolSettings.geofenceRadiusMeters, "m) ");
  }
}
function QrCheckin_div_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QrCheckin_div_2_ng_container_6_span_1_Template, 3, 0, "span", 19)(2, QrCheckin_div_2_ng_container_6_span_2_Template, 4, 5, "span", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isWithinGeofence);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isWithinGeofence && (ctx_r1.schoolSettings == null ? null : ctx_r1.schoolSettings.geofenceEnabled));
  }
}
function QrCheckin_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275template(5, QrCheckin_div_2_ng_container_5_Template, 6, 1, "ng-container", 15)(6, QrCheckin_div_2_ng_container_6_Template, 3, 2, "ng-container", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ctx_r1.locationError)("warning", !ctx_r1.isWithinGeofence && !ctx_r1.locationError);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-geo-alt-fill", ctx_r1.currentPosition)("bi-geo-alt", !ctx_r1.currentPosition);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.locationError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentPosition && !ctx_r1.locationError);
  }
}
function QrCheckin_div_3_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
  }
  if (rf & 2) {
    const child_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", child_r3.profilePicture, \u0275\u0275sanitizeUrl)("alt", child_r3.firstName);
  }
}
function QrCheckin_div_3_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r3.firstName.charAt(0), "", child_r3.lastName.charAt(0), " ");
  }
}
function QrCheckin_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275template(2, QrCheckin_div_3_div_4_img_2_Template, 1, 2, "img", 30)(3, QrCheckin_div_3_div_4_div_3_Template, 2, 2, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35);
    \u0275\u0275element(10, "i", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", child_r3.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r3.profilePicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r3.firstName, " ", child_r3.lastName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getChildStatusClass(child_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getChildStatusText(child_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getChildStatusClass(child_r3));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", child_r3.isCheckedIn && !child_r3.isCheckedOut)("bi-box-arrow-right", child_r3.isCheckedOut)("bi-circle", !child_r3.isCheckedIn);
  }
}
function QrCheckin_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h3");
    \u0275\u0275text(2, "Your Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275template(4, QrCheckin_div_3_div_4_Template, 11, 15, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.children);
  }
}
function QrCheckin_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Scan QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Point your camera at the QR code at the school entrance or exit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function QrCheckin_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startScanner());
    });
    \u0275\u0275element(8, "i", 42);
    \u0275\u0275text(9, " Start Scanning ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !ctx_r1.currentPosition || !ctx_r1.isWithinGeofence && (ctx_r1.schoolSettings == null ? null : ctx_r1.schoolSettings.geofenceEnabled));
  }
}
function QrCheckin_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h3");
    \u0275\u0275text(3, "Scanning...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 45);
    \u0275\u0275listener("click", function QrCheckin_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.stopScanner();
      return \u0275\u0275resetView(ctx_r1.state = "idle");
    });
    \u0275\u0275element(5, "i", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 47);
    \u0275\u0275elementStart(7, "p", 48);
    \u0275\u0275text(8, "Position the QR code within the frame");
    \u0275\u0275elementEnd()();
  }
}
function QrCheckin_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Validating QR code...");
    \u0275\u0275elementEnd()();
  }
}
function QrCheckin_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "button", 61);
    \u0275\u0275listener("click", function QrCheckin_div_7_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectAllEligible());
    });
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275text(3, " Select All ");
    \u0275\u0275elementEnd()();
  }
}
function QrCheckin_div_7_div_8_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 36);
  }
  if (rf & 2) {
    const child_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", child_r9.profilePicture, \u0275\u0275sanitizeUrl)("alt", child_r9.firstName);
  }
}
function QrCheckin_div_7_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", child_r9.firstName.charAt(0), "", child_r9.lastName.charAt(0), " ");
  }
}
function QrCheckin_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function QrCheckin_div_7_div_8_Template_div_click_0_listener() {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isChildEligible(child_r9) && ctx_r1.toggleChildSelection(child_r9.id));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275template(4, QrCheckin_div_7_div_8_img_4_Template, 1, 2, "img", 30)(5, QrCheckin_div_7_div_8_div_5_Template, 2, 2, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 65)(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isChildSelected(child_r9.id))("disabled", !ctx_r1.isChildEligible(child_r9));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-check-square-fill", ctx_r1.isChildSelected(child_r9.id))("bi-square", !ctx_r1.isChildSelected(child_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", child_r9.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r9.profilePicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r9.firstName, " ", child_r9.lastName);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getChildStatusClass(child_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getChildStatusText(child_r9), " ");
  }
}
function QrCheckin_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275template(7, QrCheckin_div_7_div_7_Template, 4, 0, "div", 54)(8, QrCheckin_div_7_div_8_Template, 11, 15, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56)(10, "button", 57);
    \u0275\u0275listener("click", function QrCheckin_div_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(11, "i", 58);
    \u0275\u0275text(12, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 59);
    \u0275\u0275listener("click", function QrCheckin_div_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmAction());
    });
    \u0275\u0275element(14, "i", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.qrType === "CheckIn" ? "Check In" : "Check Out");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Select children to ", ctx_r1.qrType === "CheckIn" ? "check in" : "check out");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.children.filter(ctx_r1.isChildEligible.bind(ctx_r1)).length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.children);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.selectedChildIds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-box-arrow-in-right", ctx_r1.qrType === "CheckIn")("bi-box-arrow-right", ctx_r1.qrType === "CheckOut");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.qrType === "CheckIn" ? "Check In" : "Check Out", " (", ctx_r1.selectedChildIds.length, ") ");
  }
}
function QrCheckin_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Processing ", ctx_r1.qrType === "CheckIn" ? "check-in" : "check-out", "...");
  }
}
function QrCheckin_div_9_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275classProp("success", item_r11.success)("error", !item_r11.success);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle", item_r11.success)("bi-x-circle", !item_r11.success);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r11.childName, ": ", item_r11.message);
  }
}
function QrCheckin_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, QrCheckin_div_9_div_7_div_1_Template, 4, 10, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.result.results);
  }
}
function QrCheckin_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Success!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QrCheckin_div_9_div_7_Template, 2, 1, "div", 71);
    \u0275\u0275elementStart(8, "button", 72);
    \u0275\u0275listener("click", function QrCheckin_div_9_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(9, "i", 73);
    \u0275\u0275text(10, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.result == null ? null : ctx_r1.result.results == null ? null : ctx_r1.result.results.length);
  }
}
function QrCheckin_div_10_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275classProp("success", item_r13.success)("error", !item_r13.success);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle", item_r13.success)("bi-x-circle", !item_r13.success);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r13.childName, ": ", item_r13.message);
  }
}
function QrCheckin_div_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, QrCheckin_div_10_div_7_div_1_Template, 4, 10, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.result.results);
  }
}
function QrCheckin_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 69);
    \u0275\u0275element(2, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QrCheckin_div_10_div_7_Template, 2, 1, "div", 71);
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function QrCheckin_div_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275element(9, "i", 18);
    \u0275\u0275text(10, " Try Again ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.result == null ? null : ctx_r1.result.results == null ? null : ctx_r1.result.results.length);
  }
}
var QrCheckin = class _QrCheckin {
  qrService;
  geolocationService;
  authService;
  router;
  // State
  state = "idle";
  errorMessage = "";
  successMessage = "";
  // Location
  currentPosition = null;
  schoolSettings = null;
  locationError = "";
  isWithinGeofence = false;
  distanceToSchool = 0;
  // QR Scanner
  html5QrCode = null;
  scannedCode = "";
  qrType = "";
  // Children
  children = [];
  selectedChildIds = [];
  // Result
  result = null;
  constructor(qrService, geolocationService, authService, router) {
    this.qrService = qrService;
    this.geolocationService = geolocationService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    if (!this.authService.isParent() && !this.authService.isTeacher()) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.loadInitialData();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.stopScanner();
  }
  async loadInitialData() {
    this.qrService.getSchoolSettings().subscribe({
      next: (settings) => {
        this.schoolSettings = settings;
        this.getLocation();
      },
      error: () => {
        this.getLocation();
      }
    });
    this.loadChildrenStatus();
  }
  loadChildrenStatus() {
    const childrenObservable = this.authService.isParent() ? this.qrService.getMyChildrenStatus() : this.qrService.getTeacherChildrenStatus();
    childrenObservable.subscribe({
      next: (children) => {
        this.children = children;
      },
      error: (err) => {
        console.error("Failed to load children status:", err);
      }
    });
  }
  getLocation() {
    this.locationError = "";
    this.geolocationService.getCurrentPosition().subscribe({
      next: (position) => {
        this.currentPosition = position;
        this.checkGeofence();
      },
      error: (err) => {
        this.locationError = err.message;
      }
    });
  }
  checkGeofence() {
    if (!this.currentPosition || !this.schoolSettings) {
      return;
    }
    if (!this.schoolSettings.geofenceEnabled) {
      this.isWithinGeofence = true;
      return;
    }
    this.distanceToSchool = this.geolocationService.calculateDistance(this.currentPosition.latitude, this.currentPosition.longitude, this.schoolSettings.latitude, this.schoolSettings.longitude);
    this.isWithinGeofence = this.distanceToSchool <= this.schoolSettings.geofenceRadiusMeters;
  }
  async startScanner() {
    if (!this.currentPosition) {
      this.errorMessage = "Please enable location access to continue";
      return;
    }
    if (this.schoolSettings?.geofenceEnabled && !this.isWithinGeofence) {
      this.errorMessage = `You must be within ${this.schoolSettings.geofenceRadiusMeters}m of the school. Current distance: ${Math.round(this.distanceToSchool)}m`;
      return;
    }
    this.state = "scanning";
    this.errorMessage = "";
    try {
      this.html5QrCode = new Html5Qrcode("qr-reader");
      await this.html5QrCode.start({ facingMode: "environment" }, {
        fps: 10,
        qrbox: { width: 250, height: 250 }
      }, (decodedText) => {
        this.onQrCodeScanned(decodedText);
      }, (errorMessage) => {
      });
    } catch (err) {
      this.state = "error";
      this.errorMessage = err.message || "Failed to start camera. Please ensure camera permissions are granted.";
    }
  }
  async stopScanner() {
    if (this.html5QrCode) {
      try {
        await this.html5QrCode.stop();
        this.html5QrCode.clear();
      } catch (err) {
      }
      this.html5QrCode = null;
    }
  }
  async onQrCodeScanned(code) {
    if (this.state !== "scanning")
      return;
    await this.stopScanner();
    this.scannedCode = code;
    this.state = "validating";
    this.qrService.validateQrCode(code).subscribe({
      next: (response) => {
        if (response.isValid) {
          this.qrType = response.type;
          this.prepareChildSelection();
        } else {
          this.state = "error";
          this.errorMessage = response.message || "Invalid QR code";
        }
      },
      error: (err) => {
        this.state = "error";
        this.errorMessage = err.error?.message || "Failed to validate QR code";
      }
    });
  }
  prepareChildSelection() {
    const eligibleChildren = this.qrType === "CheckIn" ? this.children.filter((c) => !c.isCheckedIn) : this.children.filter((c) => c.isCheckedIn && !c.isCheckedOut);
    if (eligibleChildren.length === 0) {
      this.state = "error";
      this.errorMessage = this.qrType === "CheckIn" ? "All your children are already checked in today" : "No children are currently checked in";
      return;
    }
    if (eligibleChildren.length === 1) {
      this.selectedChildIds = [eligibleChildren[0].id];
      this.confirmAction();
    } else {
      this.state = "selecting";
    }
  }
  toggleChildSelection(childId) {
    const index = this.selectedChildIds.indexOf(childId);
    if (index > -1) {
      this.selectedChildIds.splice(index, 1);
    } else {
      this.selectedChildIds.push(childId);
    }
  }
  isChildSelected(childId) {
    return this.selectedChildIds.includes(childId);
  }
  isChildEligible(child) {
    if (this.qrType === "CheckIn") {
      return !child.isCheckedIn;
    } else {
      return child.isCheckedIn && !child.isCheckedOut;
    }
  }
  selectAllEligible() {
    this.selectedChildIds = this.children.filter((c) => this.isChildEligible(c)).map((c) => c.id);
  }
  confirmAction() {
    if (this.selectedChildIds.length === 0) {
      this.errorMessage = "Please select at least one child";
      return;
    }
    if (!this.currentPosition) {
      this.errorMessage = "Location not available";
      return;
    }
    this.state = "processing";
    this.errorMessage = "";
    const request = {
      qrCode: this.scannedCode,
      childIds: this.selectedChildIds,
      latitude: this.currentPosition.latitude,
      longitude: this.currentPosition.longitude
    };
    const action$ = this.qrType === "CheckIn" ? this.qrService.qrCheckIn(request) : this.qrService.qrCheckOut(request);
    action$.subscribe({
      next: (result) => {
        this.result = result;
        this.state = result.success ? "success" : "error";
        if (result.success) {
          this.successMessage = result.message;
          this.loadChildrenStatus();
        } else {
          this.errorMessage = result.message;
        }
      },
      error: (err) => {
        this.state = "error";
        this.errorMessage = err.error?.message || "Operation failed. Please try again.";
      }
    });
  }
  reset() {
    this.state = "idle";
    this.scannedCode = "";
    this.qrType = "";
    this.selectedChildIds = [];
    this.result = null;
    this.errorMessage = "";
    this.successMessage = "";
    this.loadChildrenStatus();
  }
  formatTime(dateString) {
    if (!dateString)
      return "";
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getChildStatusText(child) {
    if (child.isCheckedOut) {
      return `Checked out at ${this.formatTime(child.checkOutTime)}`;
    }
    if (child.isCheckedIn) {
      return `Checked in at ${this.formatTime(child.checkInTime)}`;
    }
    return "Not checked in";
  }
  getChildStatusClass(child) {
    if (child.isCheckedOut)
      return "status-checked-out";
    if (child.isCheckedIn)
      return "status-checked-in";
    return "status-not-checked-in";
  }
  static \u0275fac = function QrCheckin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrCheckin)(\u0275\u0275directiveInject(QrCheckinService), \u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrCheckin, selectors: [["app-qr-checkin"]], decls: 11, vars: 9, consts: [["title", "QR Check-in/Check-out"], [1, "qr-checkin-container"], ["class", "location-status", 4, "ngIf"], ["class", "children-overview", 4, "ngIf"], ["class", "scan-prompt", 4, "ngIf"], ["class", "scanner-container", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "selection-container", 4, "ngIf"], ["class", "result-container success", 4, "ngIf"], ["class", "result-container error", 4, "ngIf"], [1, "location-status"], [1, "location-card"], [1, "location-icon"], [1, "bi"], [1, "location-info"], [4, "ngIf"], [1, "status-text", "error"], [1, "btn-retry", 3, "click"], [1, "bi", "bi-arrow-clockwise"], ["class", "status-text", 4, "ngIf"], ["class", "status-text warning", 4, "ngIf"], [1, "status-text"], [1, "bi", "bi-check-circle-fill", "text-success"], [1, "status-text", "warning"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "children-overview"], [1, "children-list"], ["class", "child-status-card", 4, "ngFor", "ngForOf"], [1, "child-status-card"], [1, "child-avatar"], [3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "child-info"], [1, "child-name"], [1, "child-status"], [1, "status-indicator"], [3, "src", "alt"], [1, "avatar-placeholder"], [1, "scan-prompt"], [1, "scan-icon"], [1, "bi", "bi-qr-code-scan"], [1, "btn-scan", 3, "click", "disabled"], [1, "bi", "bi-camera"], [1, "scanner-container"], [1, "scanner-header"], [1, "btn-cancel", 3, "click"], [1, "bi", "bi-x-lg"], ["id", "qr-reader"], [1, "scanner-hint"], [1, "loading-state"], [1, "spinner"], [1, "selection-container"], [1, "selection-header"], [1, "children-selection"], ["class", "select-all", 4, "ngIf"], ["class", "child-select-card", 3, "selected", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "selection-actions"], [1, "btn-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "btn-confirm", 3, "click", "disabled"], [1, "select-all"], [1, "btn-select-all", 3, "click"], [1, "bi", "bi-check-all"], [1, "child-select-card", 3, "click"], [1, "checkbox"], [1, "child-details"], [1, "name"], [1, "status"], [1, "result-container", "success"], [1, "result-icon"], [1, "bi", "bi-check-circle-fill"], ["class", "result-details", 4, "ngIf"], [1, "btn-done", 3, "click"], [1, "bi", "bi-house"], [1, "result-details"], ["class", "result-item", 3, "success", "error", 4, "ngFor", "ngForOf"], [1, "result-item"], [1, "result-container", "error"], [1, "bi", "bi-x-circle-fill"]], template: function QrCheckin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-title-page", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, QrCheckin_div_2_Template, 7, 10, "div", 2)(3, QrCheckin_div_3_Template, 5, 1, "div", 3)(4, QrCheckin_div_4_Template, 10, 1, "div", 4)(5, QrCheckin_div_5_Template, 9, 0, "div", 5)(6, QrCheckin_div_6_Template, 4, 0, "div", 6)(7, QrCheckin_div_7_Template, 16, 11, "div", 7)(8, QrCheckin_div_8_Template, 4, 1, "div", 6)(9, QrCheckin_div_9_Template, 11, 2, "div", 8)(10, QrCheckin_div_10_Template, 11, 2, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentPosition || ctx.locationError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "idle" && ctx.children.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "idle");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "scanning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "validating");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "selecting");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "processing");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.state === "error");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, TitlePage, DecimalPipe], styles: ["\n\n.qr-checkin-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100vh;\n  background: var(--gradient-primary);\n}\n.location-status[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  border-radius: 12px;\n  border: 1px solid #a5d6a7;\n}\n.location-status[_ngcontent-%COMP%]   .location-card.error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  border-color: #ef9a9a;\n}\n.location-status[_ngcontent-%COMP%]   .location-card.warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  border-color: #ffcc80;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #4caf50;\n}\n.error[_ngcontent-%COMP%]   .location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.warning[_ngcontent-%COMP%]   .location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .status-text.error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .status-text.warning[_ngcontent-%COMP%] {\n  color: #e65100;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.8rem;\n  border: none;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.location-status[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .location-info[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.children-overview[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.children-overview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.children-overview[_ngcontent-%COMP%]   .children-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%]   .child-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%]   .child-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%]   .child-status.status-checked-in[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%]   .child-status.status-checked-out[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%]   .child-status.status-not-checked-in[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .status-indicator.status-checked-in[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .status-indicator.status-checked-out[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.children-overview[_ngcontent-%COMP%]   .child-status-card[_ngcontent-%COMP%]   .status-indicator.status-not-checked-in[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.scan-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.scan-prompt[_ngcontent-%COMP%]   .scan-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #667eea;\n  margin-bottom: 1rem;\n}\n.scan-prompt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.scan-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 2rem;\n}\n.scan-prompt[_ngcontent-%COMP%]   .btn-scan[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.scan-prompt[_ngcontent-%COMP%]   .btn-scan[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.scan-prompt[_ngcontent-%COMP%]   .btn-scan[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.scanner-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.scanner-container[_ngcontent-%COMP%]   .scanner-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n}\n.scanner-container[_ngcontent-%COMP%]   .scanner-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.scanner-container[_ngcontent-%COMP%]   .scanner-header[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: #f5f5f5;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scanner-container[_ngcontent-%COMP%]   .scanner-header[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.scanner-container[_ngcontent-%COMP%]   #qr-reader[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.scanner-container[_ngcontent-%COMP%]   .scanner-hint[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.selection-container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n  color: #333;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .select-all[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .select-all[_ngcontent-%COMP%]   .btn-select-all[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px dashed #ddd;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .select-all[_ngcontent-%COMP%]   .btn-select-all[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 2px solid #eee;\n  border-radius: 12px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: #667eea;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f8f9ff;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #bdbdbd;\n}\n.selected[_ngcontent-%COMP%]   .selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-weight: 600;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%]   .status.status-checked-in[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%]   .status.status-checked-out[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n.selection-container[_ngcontent-%COMP%]   .children-selection[_ngcontent-%COMP%]   .child-select-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%]   .status.status-not-checked-in[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  border-top: 1px solid #eee;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  border: 2px solid #ddd;\n  background: #fff;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #bbb;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  flex: 2;\n  padding: 1rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.selection-container[_ngcontent-%COMP%]   .selection-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.result-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.result-container[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.result-container.success[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.result-container.error[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.result-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.result-container.success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.result-container.error[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.result-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 1.5rem;\n}\n.result-container[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f5f5f5;\n  border-radius: 12px;\n}\n.result-container[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #eee;\n}\n.result-container[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.result-container[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-item.success[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.result-container[_ngcontent-%COMP%]   .result-details[_ngcontent-%COMP%]   .result-item.error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.result-container[_ngcontent-%COMP%]   .btn-done[_ngcontent-%COMP%], \n.result-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.result-container[_ngcontent-%COMP%]   .btn-done[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #43a047 100%);\n  color: #fff;\n}\n.result-container[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n}\n@media (max-width: 480px) {\n  .qr-checkin-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .scan-prompt[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .scan-prompt[_ngcontent-%COMP%]   .scan-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=qr-checkin.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCheckin, [{
    type: Component,
    args: [{ selector: "app-qr-checkin", standalone: true, imports: [CommonModule, FormsModule, TitlePage], template: `<app-title-page title="QR Check-in/Check-out" />\r
\r
<div class="qr-checkin-container">\r
  <!-- Location Status -->\r
  <div class="location-status" *ngIf="currentPosition || locationError">\r
    <div class="location-card" [class.error]="locationError" [class.warning]="!isWithinGeofence && !locationError">\r
      <div class="location-icon">\r
        <i class="bi" [class.bi-geo-alt-fill]="currentPosition" [class.bi-geo-alt]="!currentPosition"></i>\r
      </div>\r
      <div class="location-info">\r
        <ng-container *ngIf="locationError">\r
          <span class="status-text error">{{ locationError }}</span>\r
          <button class="btn-retry" (click)="getLocation()">\r
            <i class="bi bi-arrow-clockwise"></i> Retry\r
          </button>\r
        </ng-container>\r
        <ng-container *ngIf="currentPosition && !locationError">\r
          <span class="status-text" *ngIf="isWithinGeofence">\r
            <i class="bi bi-check-circle-fill text-success"></i> You are at the school\r
          </span>\r
          <span class="status-text warning" *ngIf="!isWithinGeofence && schoolSettings?.geofenceEnabled">\r
            <i class="bi bi-exclamation-triangle-fill"></i>\r
            {{ distanceToSchool | number:'1.0-0' }}m away from school (must be within {{ schoolSettings?.geofenceRadiusMeters }}m)\r
          </span>\r
        </ng-container>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Children Status Overview -->\r
  <div class="children-overview" *ngIf="state === 'idle' && children.length > 0">\r
    <h3>Your Children</h3>\r
    <div class="children-list">\r
      <div class="child-status-card" *ngFor="let child of children">\r
        <div class="child-avatar">\r
          <img *ngIf="child.profilePicture" [src]="child.profilePicture" [alt]="child.firstName">\r
          <div *ngIf="!child.profilePicture" class="avatar-placeholder">\r
            {{ child.firstName.charAt(0) }}{{ child.lastName.charAt(0) }}\r
          </div>\r
        </div>\r
        <div class="child-info">\r
          <span class="child-name">{{ child.firstName }} {{ child.lastName }}</span>\r
          <span class="child-status" [class]="getChildStatusClass(child)">\r
            {{ getChildStatusText(child) }}\r
          </span>\r
        </div>\r
        <div class="status-indicator" [class]="getChildStatusClass(child)">\r
          <i class="bi" [class.bi-check-circle-fill]="child.isCheckedIn && !child.isCheckedOut"\r
             [class.bi-box-arrow-right]="child.isCheckedOut"\r
             [class.bi-circle]="!child.isCheckedIn"></i>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Idle State - Start Scanning -->\r
  <div class="scan-prompt" *ngIf="state === 'idle'">\r
    <div class="scan-icon">\r
      <i class="bi bi-qr-code-scan"></i>\r
    </div>\r
    <h2>Scan QR Code</h2>\r
    <p>Point your camera at the QR code at the school entrance or exit</p>\r
    <button class="btn-scan" (click)="startScanner()" [disabled]="!currentPosition || (!isWithinGeofence && schoolSettings?.geofenceEnabled)">\r
      <i class="bi bi-camera"></i> Start Scanning\r
    </button>\r
  </div>\r
\r
  <!-- Scanning State -->\r
  <div class="scanner-container" *ngIf="state === 'scanning'">\r
    <div class="scanner-header">\r
      <h3>Scanning...</h3>\r
      <button class="btn-cancel" (click)="stopScanner(); state = 'idle'">\r
        <i class="bi bi-x-lg"></i>\r
      </button>\r
    </div>\r
    <div id="qr-reader"></div>\r
    <p class="scanner-hint">Position the QR code within the frame</p>\r
  </div>\r
\r
  <!-- Validating State -->\r
  <div class="loading-state" *ngIf="state === 'validating'">\r
    <div class="spinner"></div>\r
    <p>Validating QR code...</p>\r
  </div>\r
\r
  <!-- Child Selection State -->\r
  <div class="selection-container" *ngIf="state === 'selecting'">\r
    <div class="selection-header">\r
      <h3>{{ qrType === 'CheckIn' ? 'Check In' : 'Check Out' }}</h3>\r
      <p>Select children to {{ qrType === 'CheckIn' ? 'check in' : 'check out' }}</p>\r
    </div>\r
\r
    <div class="children-selection">\r
      <div class="select-all" *ngIf="children.filter(isChildEligible.bind(this)).length > 1">\r
        <button class="btn-select-all" (click)="selectAllEligible()">\r
          <i class="bi bi-check-all"></i> Select All\r
        </button>\r
      </div>\r
\r
      <div class="child-select-card" *ngFor="let child of children"\r
           [class.selected]="isChildSelected(child.id)"\r
           [class.disabled]="!isChildEligible(child)"\r
           (click)="isChildEligible(child) && toggleChildSelection(child.id)">\r
        <div class="checkbox">\r
          <i class="bi" [class.bi-check-square-fill]="isChildSelected(child.id)"\r
             [class.bi-square]="!isChildSelected(child.id)"></i>\r
        </div>\r
        <div class="child-avatar">\r
          <img *ngIf="child.profilePicture" [src]="child.profilePicture" [alt]="child.firstName">\r
          <div *ngIf="!child.profilePicture" class="avatar-placeholder">\r
            {{ child.firstName.charAt(0) }}{{ child.lastName.charAt(0) }}\r
          </div>\r
        </div>\r
        <div class="child-details">\r
          <span class="name">{{ child.firstName }} {{ child.lastName }}</span>\r
          <span class="status" [class]="getChildStatusClass(child)">\r
            {{ getChildStatusText(child) }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="selection-actions">\r
      <button class="btn-back" (click)="reset()">\r
        <i class="bi bi-arrow-left"></i> Cancel\r
      </button>\r
      <button class="btn-confirm" (click)="confirmAction()" [disabled]="selectedChildIds.length === 0">\r
        <i class="bi" [class.bi-box-arrow-in-right]="qrType === 'CheckIn'"\r
           [class.bi-box-arrow-right]="qrType === 'CheckOut'"></i>\r
        {{ qrType === 'CheckIn' ? 'Check In' : 'Check Out' }} ({{ selectedChildIds.length }})\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Processing State -->\r
  <div class="loading-state" *ngIf="state === 'processing'">\r
    <div class="spinner"></div>\r
    <p>Processing {{ qrType === 'CheckIn' ? 'check-in' : 'check-out' }}...</p>\r
  </div>\r
\r
  <!-- Success State -->\r
  <div class="result-container success" *ngIf="state === 'success'">\r
    <div class="result-icon">\r
      <i class="bi bi-check-circle-fill"></i>\r
    </div>\r
    <h2>Success!</h2>\r
    <p>{{ successMessage }}</p>\r
\r
    <div class="result-details" *ngIf="result?.results?.length">\r
      <div class="result-item" *ngFor="let item of result!.results" [class.success]="item.success" [class.error]="!item.success">\r
        <i class="bi" [class.bi-check-circle]="item.success" [class.bi-x-circle]="!item.success"></i>\r
        <span>{{ item.childName }}: {{ item.message }}</span>\r
      </div>\r
    </div>\r
\r
    <button class="btn-done" (click)="reset()">\r
      <i class="bi bi-house"></i> Done\r
    </button>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div class="result-container error" *ngIf="state === 'error'">\r
    <div class="result-icon">\r
      <i class="bi bi-x-circle-fill"></i>\r
    </div>\r
    <h2>Error</h2>\r
    <p>{{ errorMessage }}</p>\r
\r
    <div class="result-details" *ngIf="result?.results?.length">\r
      <div class="result-item" *ngFor="let item of result!.results" [class.success]="item.success" [class.error]="!item.success">\r
        <i class="bi" [class.bi-check-circle]="item.success" [class.bi-x-circle]="!item.success"></i>\r
        <span>{{ item.childName }}: {{ item.message }}</span>\r
      </div>\r
    </div>\r
\r
    <button class="btn-retry" (click)="reset()">\r
      <i class="bi bi-arrow-clockwise"></i> Try Again\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/qr-checkin/qr-checkin.scss */\n.qr-checkin-container {\n  padding: 1rem;\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100vh;\n  background: var(--gradient-primary);\n}\n.location-status {\n  margin-bottom: 1.5rem;\n}\n.location-status .location-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  border-radius: 12px;\n  border: 1px solid #a5d6a7;\n}\n.location-status .location-card.error {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  border-color: #ef9a9a;\n}\n.location-status .location-card.warning {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3e0 0%,\n      #ffe0b2 100%);\n  border-color: #ffcc80;\n}\n.location-status .location-card .location-icon {\n  font-size: 1.5rem;\n  color: #4caf50;\n}\n.error .location-status .location-card .location-icon {\n  color: #f44336;\n}\n.warning .location-status .location-card .location-icon {\n  color: #ff9800;\n}\n.location-status .location-card .location-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.location-status .location-card .location-info .status-text {\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.location-status .location-card .location-info .status-text.error {\n  color: #c62828;\n}\n.location-status .location-card .location-info .status-text.warning {\n  color: #e65100;\n}\n.location-status .location-card .location-info .btn-retry {\n  align-self: flex-start;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.8rem;\n  border: none;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.location-status .location-card .location-info .btn-retry:hover {\n  background: #f5f5f5;\n}\n.children-overview {\n  margin-bottom: 1.5rem;\n}\n.children-overview h3 {\n  font-size: 1rem;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.children-overview .children-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.children-overview .child-status-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.children-overview .child-status-card .child-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.children-overview .child-status-card .child-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.children-overview .child-status-card .child-avatar .avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.children-overview .child-status-card .child-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.children-overview .child-status-card .child-info .child-name {\n  font-weight: 600;\n  color: #333;\n}\n.children-overview .child-status-card .child-info .child-status {\n  font-size: 0.85rem;\n}\n.children-overview .child-status-card .child-info .child-status.status-checked-in {\n  color: #4caf50;\n}\n.children-overview .child-status-card .child-info .child-status.status-checked-out {\n  color: #9e9e9e;\n}\n.children-overview .child-status-card .child-info .child-status.status-not-checked-in {\n  color: #ff9800;\n}\n.children-overview .child-status-card .status-indicator {\n  font-size: 1.5rem;\n}\n.children-overview .child-status-card .status-indicator.status-checked-in {\n  color: #4caf50;\n}\n.children-overview .child-status-card .status-indicator.status-checked-out {\n  color: #9e9e9e;\n}\n.children-overview .child-status-card .status-indicator.status-not-checked-in {\n  color: #bdbdbd;\n}\n.scan-prompt {\n  text-align: center;\n  padding: 3rem 1rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.scan-prompt .scan-icon {\n  font-size: 4rem;\n  color: #667eea;\n  margin-bottom: 1rem;\n}\n.scan-prompt h2 {\n  font-size: 1.5rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.scan-prompt p {\n  color: #666;\n  margin-bottom: 2rem;\n}\n.scan-prompt .btn-scan {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.scan-prompt .btn-scan:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.scan-prompt .btn-scan:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.scanner-container {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.scanner-container .scanner-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n}\n.scanner-container .scanner-header h3 {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.scanner-container .scanner-header .btn-cancel {\n  width: 36px;\n  height: 36px;\n  border: none;\n  background: #f5f5f5;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scanner-container .scanner-header .btn-cancel:hover {\n  background: #e0e0e0;\n}\n.scanner-container #qr-reader {\n  width: 100%;\n}\n.scanner-container .scanner-hint {\n  text-align: center;\n  padding: 1rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.loading-state {\n  text-align: center;\n  padding: 3rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.loading-state .spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  color: #666;\n}\n.selection-container {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.selection-container .selection-header {\n  padding: 1.5rem;\n  text-align: center;\n  border-bottom: 1px solid #eee;\n}\n.selection-container .selection-header h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n  color: #333;\n}\n.selection-container .selection-header p {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.selection-container .children-selection {\n  padding: 1rem;\n}\n.selection-container .children-selection .select-all {\n  margin-bottom: 1rem;\n}\n.selection-container .children-selection .select-all .btn-select-all {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px dashed #ddd;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.selection-container .children-selection .select-all .btn-select-all:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.selection-container .children-selection .child-select-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border: 2px solid #eee;\n  border-radius: 12px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.selection-container .children-selection .child-select-card:hover:not(.disabled) {\n  border-color: #667eea;\n}\n.selection-container .children-selection .child-select-card.selected {\n  border-color: #667eea;\n  background: #f8f9ff;\n}\n.selection-container .children-selection .child-select-card.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.selection-container .children-selection .child-select-card .checkbox {\n  font-size: 1.5rem;\n  color: #bdbdbd;\n}\n.selected .selection-container .children-selection .child-select-card .checkbox {\n  color: #667eea;\n}\n.selection-container .children-selection .child-select-card .child-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.selection-container .children-selection .child-select-card .child-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.selection-container .children-selection .child-select-card .child-avatar .avatar-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-weight: 600;\n}\n.selection-container .children-selection .child-select-card .child-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selection-container .children-selection .child-select-card .child-details .name {\n  font-weight: 600;\n  color: #333;\n}\n.selection-container .children-selection .child-select-card .child-details .status {\n  font-size: 0.8rem;\n}\n.selection-container .children-selection .child-select-card .child-details .status.status-checked-in {\n  color: #4caf50;\n}\n.selection-container .children-selection .child-select-card .child-details .status.status-checked-out {\n  color: #9e9e9e;\n}\n.selection-container .children-selection .child-select-card .child-details .status.status-not-checked-in {\n  color: #ff9800;\n}\n.selection-container .selection-actions {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  border-top: 1px solid #eee;\n}\n.selection-container .selection-actions .btn-back {\n  flex: 1;\n  padding: 1rem;\n  border: 2px solid #ddd;\n  background: #fff;\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #666;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.selection-container .selection-actions .btn-back:hover {\n  border-color: #bbb;\n}\n.selection-container .selection-actions .btn-confirm {\n  flex: 2;\n  padding: 1rem;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.selection-container .selection-actions .btn-confirm:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.result-container {\n  text-align: center;\n  padding: 2rem;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.result-container .result-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.result-container.success .result-icon {\n  color: #4caf50;\n}\n.result-container.error .result-icon {\n  color: #f44336;\n}\n.result-container h2 {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.result-container.success h2 {\n  color: #2e7d32;\n}\n.result-container.error h2 {\n  color: #c62828;\n}\n.result-container p {\n  color: #666;\n  margin-bottom: 1.5rem;\n}\n.result-container .result-details {\n  text-align: left;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f5f5f5;\n  border-radius: 12px;\n}\n.result-container .result-details .result-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #eee;\n}\n.result-container .result-details .result-item:last-child {\n  border-bottom: none;\n}\n.result-container .result-details .result-item.success {\n  color: #2e7d32;\n}\n.result-container .result-details .result-item.error {\n  color: #c62828;\n}\n.result-container .btn-done,\n.result-container .btn-retry {\n  padding: 1rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.result-container .btn-done {\n  background:\n    linear-gradient(\n      135deg,\n      #4caf50 0%,\n      #43a047 100%);\n  color: #fff;\n}\n.result-container .btn-retry {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n}\n@media (max-width: 480px) {\n  .qr-checkin-container {\n    padding: 0.75rem;\n  }\n  .scan-prompt {\n    padding: 2rem 1rem;\n  }\n  .scan-prompt .scan-icon {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=qr-checkin.css.map */\n"] }]
  }], () => [{ type: QrCheckinService }, { type: GeolocationService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrCheckin, { className: "QrCheckin", filePath: "src/app/features/qr-checkin/qr-checkin.ts", lineNumber: 26 });
})();
export {
  QrCheckin
};
//# sourceMappingURL=chunk-SJJA4JPZ.js.map
