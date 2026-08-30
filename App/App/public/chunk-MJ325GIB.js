import {
  AttendanceService
} from "./chunk-QXM2DGJD.js";
import {
  QrScannerService
} from "./chunk-2FNMRWHI.js";
import {
  Html5Qrcode
} from "./chunk-E6MI3USO.js";
import "./chunk-RPAPGFQN.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  GeolocationService
} from "./chunk-GJ45YLOP.js";
import {
  QrCheckinService
} from "./chunk-Q6ENMSPI.js";
import "./chunk-JHHNP67E.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-7KUBODN6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/attendance-sheet/attendance-list/attendance-list.ts
var _c0 = (a0) => ({ label: a0, url: "/dashboard" });
var _c1 = (a0) => ({ label: a0 });
var _c2 = (a0, a1) => [a0, a1];
var _c3 = (a0) => ({ distance: a0 });
function AttendanceList_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ATTENDANCE_LIST.LOADING"));
  }
}
function AttendanceList_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "ATTENDANCE_LIST.NO_CHILDREN"));
  }
}
function AttendanceList_div_29_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32)(2, "div", 33)(3, "a", 34);
    \u0275\u0275element(4, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36)(6, "span", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td")(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 39)(15, "button", 40);
    \u0275\u0275listener("click", function AttendanceList_div_29_tr_14_Template_button_click_15_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkIn(item_r2));
    });
    \u0275\u0275element(16, "i", 41);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 42);
    \u0275\u0275listener("click", function AttendanceList_div_29_tr_14_Template_button_click_19_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkOut(item_r2));
    });
    \u0275\u0275element(20, "i", 43);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.getChildProfilePictureUrl(item_r2.child), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r2.child.firstName, " ", item_r2.child.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("status-present", item_r2.isCheckedIn)("status-not-present", !item_r2.isCheckedIn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.isCheckedIn ? \u0275\u0275pipeBind1(11, 12, "ATTENDANCE_LIST.CHECKED_IN") : \u0275\u0275pipeBind1(12, 14, "ATTENDANCE_LIST.NOT_CHECKED_IN"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", item_r2.isCheckedIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "ATTENDANCE_LIST.CHECK_IN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !item_r2.isCheckedIn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 18, "ATTENDANCE_LIST.CHECK_OUT"), " ");
  }
}
function AttendanceList_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead", 29)(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, AttendanceList_div_29_tr_14_Template, 23, 20, "tr", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "ATTENDANCE_LIST.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "ATTENDANCE_LIST.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "ATTENDANCE_LIST.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.filteredChildren);
  }
}
function AttendanceList_div_35_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "ATTENDANCE_LIST.LOADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "ATTENDANCE_LIST.QR_GETTING_LOCATION"));
  }
}
function AttendanceList_div_35_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_11_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.retryLocation());
    });
    \u0275\u0275element(4, "i", 67);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.qrScannerError, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 2, "ATTENDANCE_LIST.QR_TRY_AGAIN"), " ");
  }
}
function AttendanceList_div_35_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "ATTENDANCE_LIST.QR_GETTING_LOCATION"), " ");
  }
}
function AttendanceList_div_35_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, "ATTENDANCE_LIST.QR_OUTSIDE_GEOFENCE", \u0275\u0275pureFunction1(7, _c3, \u0275\u0275pipeBind2(3, 1, ctx_r2.distanceToSchool, "1.0-0"))), " ");
  }
}
function AttendanceList_div_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementStart(3, "p", 59);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AttendanceList_div_35_div_11_div_6_Template, 7, 4, "div", 60)(7, AttendanceList_div_35_div_11_div_7_Template, 4, 3, "div", 61)(8, AttendanceList_div_35_div_11_div_8_Template, 5, 9, "div", 60);
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startQrScanner());
    });
    \u0275\u0275element(10, "i", 63);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "ATTENDANCE_LIST.QR_READY_TO_SCAN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.qrScannerError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.currentPosition && !ctx_r2.qrScannerError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentPosition && (ctx_r2.schoolSettings == null ? null : ctx_r2.schoolSettings.geofenceEnabled) && !ctx_r2.isWithinGeofence);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.currentPosition || (ctx_r2.schoolSettings == null ? null : ctx_r2.schoolSettings.geofenceEnabled) && !ctx_r2.isWithinGeofence);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 8, "ATTENDANCE_LIST.QR_START_SCAN"), " ");
  }
}
function AttendanceList_div_35_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 71);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.stopQrScanner();
      return \u0275\u0275resetView(ctx_r2.qrScannerState = "idle");
    });
    \u0275\u0275element(6, "i", 72);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "ATTENDANCE_LIST.QR_SCANNING_INSTRUCTION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "ATTENDANCE_LIST.QR_CANCEL_SCAN"), " ");
  }
}
function AttendanceList_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "ATTENDANCE_LIST.LOADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "ATTENDANCE_LIST.QR_PROCESSING"));
  }
}
function AttendanceList_div_35_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 73);
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeQrScannerModal());
    });
    \u0275\u0275element(6, "i", 77);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.qrScannerSuccess);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 2, "ATTENDANCE_LIST.QR_DONE"), " ");
  }
}
function AttendanceList_div_35_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 78);
    \u0275\u0275element(2, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 81)(6, "button", 71);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeQrScannerModal());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 76);
    \u0275\u0275listener("click", function AttendanceList_div_35_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.qrScannerState = "idle";
      return \u0275\u0275resetView(ctx_r2.qrScannerError = "");
    });
    \u0275\u0275element(10, "i", 82);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.qrScannerError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "ATTENDANCE_LIST.CANCEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 5, "ATTENDANCE_LIST.QR_TRY_AGAIN"), " ");
  }
}
function AttendanceList_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function AttendanceList_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeQrScannerModal());
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275listener("click", function AttendanceList_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 46)(3, "div", 47)(4, "h5", 48);
    \u0275\u0275element(5, "i", 49);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function AttendanceList_div_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeQrScannerModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275template(10, AttendanceList_div_35_div_10_Template, 8, 6, "div", 52)(11, AttendanceList_div_35_div_11_Template, 13, 10, "div", 53)(12, AttendanceList_div_35_div_12_Template, 9, 6, "div", 53)(13, AttendanceList_div_35_div_13_Template, 8, 6, "div", 52)(14, AttendanceList_div_35_div_14_Template, 9, 4, "div", 52)(15, AttendanceList_div_35_div_15_Template, 13, 7, "div", 52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 7, "ATTENDANCE_LIST.QR_SCAN_TITLE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "getting-location");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "scanning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "processing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.qrScannerState === "error");
  }
}
var AttendanceList = class _AttendanceList {
  attendanceService;
  childrenService;
  cdr;
  translate;
  pageTitleService;
  router;
  qrService;
  geolocationService;
  qrScannerService;
  ngZone;
  childrenWithStatus = [];
  children = [];
  attendances = [];
  searchTerm = "";
  loading = false;
  langChangeSub;
  // QR Scanner properties
  showQrScannerModal = false;
  qrScannerState = "idle";
  html5QrCode = null;
  currentPosition = null;
  schoolSettings = null;
  qrScannerError = "";
  qrScannerSuccess = "";
  isWithinGeofence = false;
  distanceToSchool = 0;
  locationRetryCount = 0;
  maxLocationRetries = 3;
  locationTimeoutId = null;
  titleActions = [];
  constructor(attendanceService, childrenService, cdr, translate, pageTitleService, router, qrService, geolocationService, qrScannerService, ngZone) {
    this.attendanceService = attendanceService;
    this.childrenService = childrenService;
    this.cdr = cdr;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.router = router;
    this.qrService = qrService;
    this.geolocationService = geolocationService;
    this.qrScannerService = qrScannerService;
    this.ngZone = ngZone;
    this.titleActions = [
      {
        label: this.translate.instant("ATTENDANCE_LIST.SCAN_QR"),
        icon: "bi bi-qr-code-scan",
        class: "btn-add-global-2",
        action: () => this.scanQrCode()
      }
    ];
  }
  scanQrCode() {
    this.openQrScannerModal();
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("ATTENDANCE_LIST.TITLE"));
    this.loadData();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("ATTENDANCE_LIST.TITLE"));
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.stopQrScanner();
    if (this.locationTimeoutId) {
      clearTimeout(this.locationTimeoutId);
    }
  }
  loadData() {
    this.loading = true;
    this.cdr.detectChanges();
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        this.loadTodayAttendance();
      },
      error: (error) => {
        console.error("Error loading children:", error?.message || error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadTodayAttendance() {
    this.attendanceService.getTodayAttendance().subscribe({
      next: (attendances) => {
        this.attendances = attendances;
        this.buildChildrenWithStatus();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading attendance:", error?.message || error);
        this.buildChildrenWithStatus();
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  buildChildrenWithStatus() {
    this.childrenWithStatus = this.children.map((child) => {
      const attendance = this.attendances.find((a) => a.childId === child.id && !a.checkOutTime);
      return {
        child,
        attendance,
        isCheckedIn: !!attendance
      };
    });
  }
  get filteredChildren() {
    if (!this.searchTerm)
      return this.childrenWithStatus;
    const term = this.searchTerm.toLowerCase();
    return this.childrenWithStatus.filter((item) => item.child.firstName.toLowerCase().includes(term) || item.child.lastName.toLowerCase().includes(term));
  }
  checkIn(item) {
    if (!item.child.id)
      return;
    this.attendanceService.checkIn(item.child.id).subscribe({
      next: (attendance) => {
        item.attendance = attendance;
        item.isCheckedIn = true;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error checking in:", error?.message || error);
      }
    });
  }
  checkOut(item) {
    if (!item.attendance)
      return;
    this.attendanceService.checkOut(item.attendance.id).subscribe({
      next: () => {
        item.isCheckedIn = false;
        item.attendance = void 0;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error checking out:", error?.message || error);
      }
    });
  }
  refresh() {
    this.loadData();
  }
  // QR Scanner Methods
  openQrScannerModal() {
    this.showQrScannerModal = true;
    this.qrScannerState = "idle";
    this.qrScannerError = "";
    this.qrScannerSuccess = "";
    this.loadSchoolSettings();
  }
  closeQrScannerModal() {
    this.stopQrScanner();
    if (this.locationTimeoutId) {
      clearTimeout(this.locationTimeoutId);
      this.locationTimeoutId = null;
    }
    this.showQrScannerModal = false;
    this.qrScannerState = "idle";
    this.qrScannerError = "";
    this.qrScannerSuccess = "";
    this.locationRetryCount = 0;
    this.currentPosition = null;
  }
  loadSchoolSettings() {
    this.qrService.getSchoolSettings().subscribe({
      next: (settings) => {
        this.schoolSettings = settings;
        if (settings.geofenceEnabled) {
          this.getLocation();
        } else {
          this.isWithinGeofence = true;
          this.currentPosition = { latitude: 0, longitude: 0, accuracy: 0 };
          this.qrScannerState = "idle";
        }
      },
      error: () => {
        this.isWithinGeofence = true;
        this.currentPosition = { latitude: 0, longitude: 0, accuracy: 0 };
        this.qrScannerState = "idle";
      }
    });
  }
  getLocation() {
    this.qrScannerState = "getting-location";
    this.qrScannerError = "";
    this.locationRetryCount++;
    if (this.locationTimeoutId) {
      clearTimeout(this.locationTimeoutId);
    }
    this.locationTimeoutId = setTimeout(() => {
      if (this.qrScannerState === "getting-location") {
        this.qrScannerState = "idle";
        this.qrScannerError = this.translate.instant("ATTENDANCE_LIST.QR_LOCATION_ERROR");
        this.locationRetryCount = 0;
      }
    }, 12e3);
    this.geolocationService.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 1e4,
      maximumAge: 6e4
    }).subscribe({
      next: (position) => {
        if (this.locationTimeoutId) {
          clearTimeout(this.locationTimeoutId);
          this.locationTimeoutId = null;
        }
        this.currentPosition = position;
        this.locationRetryCount = 0;
        this.qrScannerState = "idle";
        this.checkGeofence();
      },
      error: (err) => {
        if (this.locationTimeoutId) {
          clearTimeout(this.locationTimeoutId);
          this.locationTimeoutId = null;
        }
        if (this.locationRetryCount < this.maxLocationRetries) {
          setTimeout(() => this.getLocation(), 1e3);
        } else {
          this.qrScannerState = "idle";
          this.qrScannerError = err.message || this.translate.instant("ATTENDANCE_LIST.QR_LOCATION_ERROR");
          this.locationRetryCount = 0;
        }
      }
    });
  }
  retryLocation() {
    this.qrScannerError = "";
    this.getLocation();
  }
  checkGeofence() {
    if (!this.currentPosition || !this.schoolSettings)
      return;
    if (!this.schoolSettings.geofenceEnabled) {
      this.isWithinGeofence = true;
      return;
    }
    this.distanceToSchool = this.geolocationService.calculateDistance(this.currentPosition.latitude, this.currentPosition.longitude, this.schoolSettings.latitude, this.schoolSettings.longitude);
    this.isWithinGeofence = this.distanceToSchool <= this.schoolSettings.geofenceRadiusMeters;
  }
  async startQrScanner() {
    if (!this.currentPosition) {
      this.qrScannerError = this.translate.instant("ATTENDANCE_LIST.QR_ENABLE_LOCATION");
      return;
    }
    if (this.schoolSettings?.geofenceEnabled && !this.isWithinGeofence) {
      this.qrScannerError = this.translate.instant("ATTENDANCE_LIST.QR_GEOFENCE_ERROR");
      return;
    }
    this.qrScannerError = "";
    if (this.qrScannerService.isNativePlatform()) {
      await this.startNativeScanner();
    } else {
      await this.startWebScanner();
    }
  }
  async startNativeScanner() {
    this.qrScannerState = "scanning";
    try {
      const result = await this.qrScannerService.scanOnce();
      if (result.success && result.code) {
        await this.onQrCodeScanned(result.code);
      } else if (result.error === "Scan cancelled") {
        this.qrScannerState = "idle";
      } else {
        this.qrScannerState = "error";
        this.qrScannerError = result.error || this.translate.instant("ATTENDANCE_LIST.QR_SCAN_FAILED");
      }
    } catch (err) {
      this.qrScannerState = "error";
      this.qrScannerError = err.message || this.translate.instant("ATTENDANCE_LIST.QR_CAMERA_ERROR");
    }
  }
  async startWebScanner() {
    this.qrScannerState = "scanning";
    setTimeout(async () => {
      try {
        const element = document.getElementById("attendance-qr-reader");
        if (!element) {
          this.qrScannerState = "error";
          this.qrScannerError = this.translate.instant("ATTENDANCE_LIST.QR_CAMERA_ERROR");
          return;
        }
        this.html5QrCode = new Html5Qrcode("attendance-qr-reader");
        await this.html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 250, height: 250 } }, (decodedText) => this.onQrCodeScanned(decodedText), () => {
        });
      } catch (err) {
        this.qrScannerState = "error";
        this.qrScannerError = err.message || this.translate.instant("ATTENDANCE_LIST.QR_CAMERA_ERROR");
      }
    }, 100);
  }
  async stopQrScanner() {
    await this.qrScannerService.stopScan();
    if (this.html5QrCode) {
      try {
        await this.html5QrCode.stop();
        this.html5QrCode.clear();
      } catch {
      }
      this.html5QrCode = null;
    }
  }
  async onQrCodeScanned(scannedValue) {
    if (this.qrScannerState !== "scanning")
      return;
    await this.stopQrScanner();
    this.qrScannerState = "processing";
    let code = scannedValue;
    const extractedCode = this.qrScannerService.extractQrCodeFromUrl(scannedValue);
    if (extractedCode)
      code = extractedCode;
    this.qrService.validateQrCode(code).subscribe({
      next: (response) => {
        this.ngZone.run(() => {
          if (response.isValid) {
            this.qrScannerState = "success";
            this.qrScannerSuccess = this.translate.instant("ATTENDANCE_LIST.QR_SUCCESS");
            this.loadData();
            this.cdr.detectChanges();
          } else {
            this.qrScannerState = "error";
            this.qrScannerError = response.message || this.translate.instant("ATTENDANCE_LIST.QR_INVALID");
            this.cdr.detectChanges();
          }
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.qrScannerState = "error";
          this.qrScannerError = err.error?.message || this.translate.instant("ATTENDANCE_LIST.QR_VALIDATION_ERROR");
          this.cdr.detectChanges();
        });
      }
    });
  }
  /**
   * Get the profile picture URL for a child, preferring file-based URL over Base64
   */
  getChildProfilePictureUrl(child, defaultPicture = "assets/child.png") {
    if (!child)
      return defaultPicture;
    if (child.profilePictureUrl && child.profilePictureUrl.trim() !== "") {
      return this.getFullUrl(child.profilePictureUrl);
    }
    if (child.profilePicture && child.profilePicture.trim() !== "") {
      return child.profilePicture;
    }
    return defaultPicture;
  }
  /**
   * Convert a relative path to a full URL with the API base
   */
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:")) {
      return path;
    }
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  static \u0275fac = function AttendanceList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceList)(\u0275\u0275directiveInject(AttendanceService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(QrCheckinService), \u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(QrScannerService), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceList, selectors: [["app-attendance-list"]], decls: 36, vars: 41, consts: [[1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-8", "mb-2", "mb-md-0"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "col-md-4", "d-flex", "justify-content-md-end"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "bi", "bi-people"], [1, "badge", "bg-primary"], ["class", "text-center p-4", 4, "ngIf"], ["class", "text-center p-4 text-muted", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted"], ["class", "modal fade show d-block", "style", "background-color: rgba(0,0,0,0.5)", 3, "click", 4, "ngIf"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "text-center", "p-4", "text-muted"], [1, "bi", "bi-person-x", "fs-1"], [1, "mt-2"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], ["class", "attendance-row", 4, "ngFor", "ngForOf"], [1, "attendance-row"], [1, "name-last"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "child-avatar", "flex-shrink-0"], ["loading", "lazy", "alt", "Child", "width", "40", "height", "40", 1, "img-fluid", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "title-dt-body-card"], [1, "status-badge"], [1, "action-buttons"], [1, "btn", "btn-sm", "btn-checkin", "me-2", 3, "click", "disabled"], [1, "bi", "bi-box-arrow-in-right"], [1, "btn", "btn-sm", "btn-checkout", 3, "click", "disabled"], [1, "bi", "bi-box-arrow-right"], [1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-qr-code-scan", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary", "mb-3"], [1, "text-center"], [1, "qr-scanner-placeholder", "mb-3"], [1, "bi", "bi-qr-code", "display-1", "text-muted"], [1, "text-muted", "mt-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click", "disabled"], [1, "bi", "bi-camera", "me-2"], [1, "alert", "alert-danger"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "btn", "btn-link", "btn-sm", "p-0", "ms-2", 3, "click"], [1, "bi", "bi-arrow-repeat", "me-1"], [1, "alert", "alert-warning"], [1, "bi", "bi-geo-alt", "me-2"], ["id", "attendance-qr-reader", 1, "qr-reader-container", "mb-3"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "success-icon", "mb-3"], [1, "bi", "bi-check-circle-fill", "text-success", "display-1"], [1, "text-success", "mb-3"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check", "me-2"], [1, "error-icon", "mb-3"], [1, "bi", "bi-x-circle-fill", "text-danger", "display-1"], [1, "text-danger", "mb-3"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "bi", "bi-arrow-repeat", "me-2"]], template: function AttendanceList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 0)(6, "div", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "input", 6);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceList_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function AttendanceList_Template_button_click_13_listener() {
        return ctx.refresh();
      });
      \u0275\u0275element(14, "i", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "h5", 12);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 14);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 3);
      \u0275\u0275template(27, AttendanceList_div_27_Template, 5, 3, "div", 15)(28, AttendanceList_div_28_Template, 5, 3, "div", 16)(29, AttendanceList_div_29_Template, 15, 10, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18)(31, "span", 19);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(35, AttendanceList_div_35_Template, 16, 9, "div", 20);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 16, "ATTENDANCE_LIST.TITLE"))("breadcrumbs", \u0275\u0275pureFunction2(38, _c2, \u0275\u0275pureFunction1(34, _c0, \u0275\u0275pipeBind1(3, 18, "ATTENDANCE_LIST.DASHBOARD")), \u0275\u0275pureFunction1(36, _c1, \u0275\u0275pipeBind1(4, 20, "ATTENDANCE_LIST.ATTENDANCE_LIST"))))("actions", ctx.titleActions);
      \u0275\u0275advance(9);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 22, "ATTENDANCE_LIST.SEARCH_PLACEHOLDER"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 24, "ATTENDANCE_LIST.REFRESH"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 26, "ATTENDANCE_LIST.CHILDREN_LIST"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.filteredChildren.length, " ", \u0275\u0275pipeBind1(25, 28, "ATTENDANCE_LIST.CHILDREN"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredChildren.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredChildren.length > 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(33, 30, "ATTENDANCE_LIST.TOTAL"), ": ", ctx.filteredChildren.length, " ", \u0275\u0275pipeBind1(34, 32, "ATTENDANCE_LIST.CHILDREN"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showQrScannerModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, DecimalPipe, TranslatePipe], styles: ["\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.status-present[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  border: 1px solid var(--primary-color);\n}\n.status-badge.status-not-present[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n@media screen and (max-width: 576px) {\n  .status-badge.status-not-present[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n  }\n}\n.child-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.child-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkin[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  font-weight: 600;\n  color: #0e567d;\n  border: none;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkin[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #8fb3ff 0%,\n      #6bc4b0 100%);\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkin[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  font-weight: 600;\n  color: white;\n  border: none;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-checkout[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table[_ngcontent-%COMP%]   .attendance-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202c4b !important;\n}\n/*# sourceMappingURL=attendance-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceList, [{
    type: Component,
    args: [{ selector: "app-attendance-list", imports: [CommonModule, FormsModule, TitlePage, TranslateModule], standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'ATTENDANCE_LIST.TITLE' | translate"\r
    [breadcrumbs]="[{label: 'ATTENDANCE_LIST.DASHBOARD' | translate, url: '/dashboard'}, {label: 'ATTENDANCE_LIST.ATTENDANCE_LIST' | translate}]"\r
    [actions]="titleActions">\r
  </app-title-page>\r
</div>\r
\r
<div class="container-fluid mt-4">\r
  <!-- Search and Refresh -->\r
  <div class="card mb-4">\r
    <div class="card-body">\r
      <div class="row align-items-center">\r
        <div class="col-md-8 mb-2 mb-md-0">\r
          <input\r
            type="text"\r
            class="form-control"\r
            [placeholder]="'ATTENDANCE_LIST.SEARCH_PLACEHOLDER' | translate"\r
            [(ngModel)]="searchTerm">\r
        </div>\r
        <div class="col-md-4 d-flex justify-content-md-end">\r
          <button class="custom-btn-2 btn-add-global-2" (click)="refresh()">\r
            <i class="bi bi-arrow-clockwise"></i> {{ 'ATTENDANCE_LIST.REFRESH' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Children Attendance List -->\r
  <div class="card flex-fill card-general card-recently mb-3">\r
    <div class="card-header d-flex justify-content-between align-items-center">\r
      <h5 class="mb-0">\r
        <i class="bi bi-people"></i>\r
        {{ 'ATTENDANCE_LIST.CHILDREN_LIST' | translate }}\r
      </h5>\r
      <span class="badge bg-primary">{{ filteredChildren.length }} {{ 'ATTENDANCE_LIST.CHILDREN' | translate }}</span>\r
    </div>\r
    <div class="card-body">\r
      <div *ngIf="loading" class="text-center p-4">\r
        <div class="spinner-border" role="status">\r
          <span class="visually-hidden">{{ 'ATTENDANCE_LIST.LOADING' | translate }}</span>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!loading && filteredChildren.length === 0" class="text-center p-4 text-muted">\r
        <i class="bi bi-person-x fs-1"></i>\r
        <p class="mt-2">{{ 'ATTENDANCE_LIST.NO_CHILDREN' | translate }}</p>\r
      </div>\r
\r
      <div *ngIf="!loading && filteredChildren.length > 0" class="table-responsive custom-table">\r
        <table class="table table-hover mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th>{{ 'ATTENDANCE_LIST.CHILD' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_LIST.STATUS' | translate }}</th>\r
              <th>{{ 'ATTENDANCE_LIST.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let item of filteredChildren" class="attendance-row">\r
              <td class="name-last">\r
                <div class="d-flex align-items-center">\r
                  <a href="#" class="child-avatar flex-shrink-0">\r
                    <img\r
                      loading="lazy"\r
                      [src]="getChildProfilePictureUrl(item.child)"\r
                      class="img-fluid rounded-circle"\r
                      alt="Child"\r
                      width="40"\r
                      height="40">\r
                  </a>\r
                  <div class="ms-2">\r
                    <span class="title-dt-body-card">{{ item.child.firstName }} {{ item.child.lastName }}</span>\r
                  </div>\r
                </div>\r
              </td>\r
              <td>\r
                <span class="status-badge" [class.status-present]="item.isCheckedIn" [class.status-not-present]="!item.isCheckedIn">\r
                  {{ item.isCheckedIn ? ('ATTENDANCE_LIST.CHECKED_IN' | translate) : ('ATTENDANCE_LIST.NOT_CHECKED_IN' | translate) }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="action-buttons">\r
                  <button\r
                    class="btn btn-sm btn-checkin me-2"\r
                    [disabled]="item.isCheckedIn"\r
                    (click)="checkIn(item)">\r
                    <i class="bi bi-box-arrow-in-right"></i> {{ 'ATTENDANCE_LIST.CHECK_IN' | translate }}\r
                  </button>\r
                  <button\r
                    class="btn btn-sm btn-checkout"\r
                    [disabled]="!item.isCheckedIn"\r
                    (click)="checkOut(item)">\r
                    <i class="bi bi-box-arrow-right"></i> {{ 'ATTENDANCE_LIST.CHECK_OUT' | translate }}\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
    <div class="card-footer d-flex align-items-center justify-content-between">\r
      <span class="text-muted">{{ 'ATTENDANCE_LIST.TOTAL' | translate }}: {{ filteredChildren.length }} {{ 'ATTENDANCE_LIST.CHILDREN' | translate }}</span>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- QR Scanner Modal -->\r
<div class="modal fade show d-block" *ngIf="showQrScannerModal" style="background-color: rgba(0,0,0,0.5)"\r
  (click)="closeQrScannerModal()">\r
  <div class="modal-dialog modal-dialog-centered modal-lg" (click)="$event.stopPropagation()">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-qr-code-scan me-2"></i>{{ 'ATTENDANCE_LIST.QR_SCAN_TITLE' | translate }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeQrScannerModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <!-- Getting Location State -->\r
        <div *ngIf="qrScannerState === 'getting-location'" class="text-center py-4">\r
          <div class="spinner-border text-primary mb-3" role="status">\r
            <span class="visually-hidden">{{ 'ATTENDANCE_LIST.LOADING' | translate }}</span>\r
          </div>\r
          <p class="text-muted">{{ 'ATTENDANCE_LIST.QR_GETTING_LOCATION' | translate }}</p>\r
        </div>\r
\r
        <!-- Idle State -->\r
        <div *ngIf="qrScannerState === 'idle'" class="text-center">\r
          <div class="qr-scanner-placeholder mb-3">\r
            <i class="bi bi-qr-code display-1 text-muted"></i>\r
            <p class="text-muted mt-2">{{ 'ATTENDANCE_LIST.QR_READY_TO_SCAN' | translate }}</p>\r
          </div>\r
          <div *ngIf="qrScannerError" class="alert alert-danger">\r
            <i class="bi bi-exclamation-triangle me-2"></i>{{ qrScannerError }}\r
            <button class="btn btn-link btn-sm p-0 ms-2" (click)="retryLocation()">\r
              <i class="bi bi-arrow-repeat me-1"></i>{{ 'ATTENDANCE_LIST.QR_TRY_AGAIN' | translate }}\r
            </button>\r
          </div>\r
          <div *ngIf="!currentPosition && !qrScannerError" class="alert alert-warning">\r
            <i class="bi bi-geo-alt me-2"></i>{{ 'ATTENDANCE_LIST.QR_GETTING_LOCATION' | translate }}\r
          </div>\r
          <div *ngIf="currentPosition && schoolSettings?.geofenceEnabled && !isWithinGeofence" class="alert alert-danger">\r
            <i class="bi bi-exclamation-triangle me-2"></i>\r
            {{ 'ATTENDANCE_LIST.QR_OUTSIDE_GEOFENCE' | translate: { distance: (distanceToSchool | number:'1.0-0') } }}\r
          </div>\r
          <button class="btn btn-primary btn-lg w-100" (click)="startQrScanner()"\r
            [disabled]="!currentPosition || (schoolSettings?.geofenceEnabled && !isWithinGeofence)">\r
            <i class="bi bi-camera me-2"></i>{{ 'ATTENDANCE_LIST.QR_START_SCAN' | translate }}\r
          </button>\r
        </div>\r
\r
        <!-- Scanning State -->\r
        <div *ngIf="qrScannerState === 'scanning'" class="text-center">\r
          <div id="attendance-qr-reader" class="qr-reader-container mb-3"></div>\r
          <p class="text-muted">{{ 'ATTENDANCE_LIST.QR_SCANNING_INSTRUCTION' | translate }}</p>\r
          <button class="btn btn-outline-secondary" (click)="stopQrScanner(); qrScannerState = 'idle'">\r
            <i class="bi bi-x-circle me-2"></i>{{ 'ATTENDANCE_LIST.QR_CANCEL_SCAN' | translate }}\r
          </button>\r
        </div>\r
\r
        <!-- Processing State -->\r
        <div *ngIf="qrScannerState === 'processing'" class="text-center py-4">\r
          <div class="spinner-border text-primary mb-3" role="status">\r
            <span class="visually-hidden">{{ 'ATTENDANCE_LIST.LOADING' | translate }}</span>\r
          </div>\r
          <p class="text-muted">{{ 'ATTENDANCE_LIST.QR_PROCESSING' | translate }}</p>\r
        </div>\r
\r
        <!-- Success State -->\r
        <div *ngIf="qrScannerState === 'success'" class="text-center py-4">\r
          <div class="success-icon mb-3">\r
            <i class="bi bi-check-circle-fill text-success display-1"></i>\r
          </div>\r
          <h5 class="text-success mb-3">{{ qrScannerSuccess }}</h5>\r
          <button class="btn btn-primary" (click)="closeQrScannerModal()">\r
            <i class="bi bi-check me-2"></i>{{ 'ATTENDANCE_LIST.QR_DONE' | translate }}\r
          </button>\r
        </div>\r
\r
        <!-- Error State -->\r
        <div *ngIf="qrScannerState === 'error'" class="text-center py-4">\r
          <div class="error-icon mb-3">\r
            <i class="bi bi-x-circle-fill text-danger display-1"></i>\r
          </div>\r
          <h5 class="text-danger mb-3">{{ qrScannerError }}</h5>\r
          <div class="d-flex gap-2 justify-content-center">\r
            <button class="btn btn-outline-secondary" (click)="closeQrScannerModal()">\r
              {{ 'ATTENDANCE_LIST.CANCEL' | translate }}\r
            </button>\r
            <button class="btn btn-primary" (click)="qrScannerState = 'idle'; qrScannerError = ''">\r
              <i class="bi bi-arrow-repeat me-2"></i>{{ 'ATTENDANCE_LIST.QR_TRY_AGAIN' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/attendance-sheet/attendance-list/attendance-list.scss */\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.status-present {\n  background: var(--primary-color);\n  color: white;\n  border: 1px solid var(--primary-color);\n}\n.status-badge.status-not-present {\n  background: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n@media screen and (max-width: 576px) {\n  .status-badge.status-not-present {\n    background: none;\n    border: none;\n  }\n}\n.child-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.child-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-buttons .btn-checkin {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  font-weight: 600;\n  color: #0e567d;\n  border: none;\n}\n.action-buttons .btn-checkin:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #8fb3ff 0%,\n      #6bc4b0 100%);\n}\n.action-buttons .btn-checkin:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.action-buttons .btn-checkout {\n  background: var(--secondary-color);\n  font-weight: 600;\n  color: white;\n  border: none;\n}\n.action-buttons .btn-checkout:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.action-buttons .btn-checkout:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.table th {\n  border-top: none;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n.table .attendance-row:hover {\n  background-color: rgba(0, 123, 255, 0.05);\n}\n.card {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n}\n.card .card-header {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card .badge {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202c4b !important;\n}\n/*# sourceMappingURL=attendance-list.css.map */\n"] }]
  }], () => [{ type: AttendanceService }, { type: ChildrenService }, { type: ChangeDetectorRef }, { type: TranslateService }, { type: PageTitleService }, { type: Router }, { type: QrCheckinService }, { type: GeolocationService }, { type: QrScannerService }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceList, { className: "AttendanceList", filePath: "src/app/features/attendance-sheet/attendance-list/attendance-list.ts", lineNumber: 34 });
})();
export {
  AttendanceList
};
//# sourceMappingURL=chunk-MJ325GIB.js.map
