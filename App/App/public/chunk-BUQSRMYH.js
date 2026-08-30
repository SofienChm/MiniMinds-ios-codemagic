import {
  AppointmentsService
} from "./chunk-SOAHY7WP.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/appointments/appointments.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function Appointments_app_parent_child_header_simple_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parent-child-header-simple", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.TITLE"));
  }
}
function Appointments_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 5, "APPOINTMENTS_PAGE.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 7, "APPOINTMENTS_PAGE.SUBTITLE"))("icon", "bi bi-calendar-check")("breadcrumbs", ctx_r0.breadcrumbs)("actions", ctx_r0.titleActions);
  }
}
function Appointments_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r2.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function Appointments_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APPOINTMENTS_PAGE.LOADING"));
  }
}
function Appointments_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function Appointments_div_13_div_2_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "APPOINTMENTS_PAGE.PARENT"));
  }
}
function Appointments_div_13_div_2_tr_30_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apt_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(apt_r4.parentName || "-");
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_31_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_ng_container_31_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const apt_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editAppointment(apt_r4));
    });
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.EDIT"));
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_31_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_ng_container_31_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const apt_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelAppointment(apt_r4));
    });
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.CANCEL_APPOINTMENT"));
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Appointments_div_13_div_2_tr_30_ng_container_31_button_1_Template, 3, 3, "button", 38)(2, Appointments_div_13_div_2_tr_30_ng_container_31_button_2_Template, 3, 3, "button", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const apt_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r4.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r4.status === "Pending" || apt_r4.status === "Approved");
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_32_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_ng_container_32_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const apt_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.approve(apt_r4));
    });
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.APPROVE"));
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_32_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_ng_container_32_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const apt_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.reject(apt_r4));
    });
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.REJECT"));
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_32_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_ng_container_32_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const apt_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.complete(apt_r4));
    });
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "APPOINTMENTS_PAGE.MARK_COMPLETED"));
  }
}
function Appointments_div_13_div_2_tr_30_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Appointments_div_13_div_2_tr_30_ng_container_32_button_1_Template, 3, 3, "button", 44)(2, Appointments_div_13_div_2_tr_30_ng_container_32_button_2_Template, 3, 3, "button", 39)(3, Appointments_div_13_div_2_tr_30_ng_container_32_button_3_Template, 3, 3, "button", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const apt_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r4.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r4.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", apt_r4.status === "Approved");
  }
}
function Appointments_div_13_div_2_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, Appointments_div_13_div_2_tr_30_td_4_Template, 3, 1, "td", 30);
    \u0275\u0275elementStart(5, "td")(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 34);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 35)(28, "button", 36);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function Appointments_div_13_div_2_tr_30_Template_button_click_28_listener() {
      const apt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewDetails(apt_r4));
    });
    \u0275\u0275element(30, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, Appointments_div_13_div_2_tr_30_ng_container_31_Template, 3, 2, "ng-container", 30)(32, Appointments_div_13_div_2_tr_30_ng_container_32_Template, 4, 3, "ng-container", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const apt_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apt_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isParent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(apt_r4.childName || \u0275\u0275pipeBind1(8, 14, "APPOINTMENTS_PAGE.NOT_SPECIFIED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(apt_r4.teacherName || \u0275\u0275pipeBind1(12, 16, "APPOINTMENTS_PAGE.ANY_AVAILABLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.getTypeBadgeClass(apt_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 18, "APPOINTMENTS_PAGE.TYPE_" + apt_r4.type.toUpperCase()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 20, apt_r4.appointmentDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", apt_r4.startTime, " - ", apt_r4.endTime);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getStatusBadgeClass(apt_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "APPOINTMENTS_PAGE." + apt_r4.status.toUpperCase()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 25, "APPOINTMENTS_PAGE.VIEW_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isAdmin || ctx_r0.isTeacher);
  }
}
function Appointments_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead", 29)(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Appointments_div_13_div_2_th_7_Template, 3, 3, "th", 30);
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, Appointments_div_13_div_2_tr_30_Template, 33, 27, "tr", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "APPOINTMENTS_PAGE.TITLE_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isParent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "APPOINTMENTS_PAGE.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "APPOINTMENTS_PAGE.TEACHER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "APPOINTMENTS_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "APPOINTMENTS_PAGE.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "APPOINTMENTS_PAGE.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 23, "APPOINTMENTS_PAGE.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 25, "APPOINTMENTS_PAGE.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.displayedAppointments)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Appointments_div_13_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function Appointments_div_13_ng_template_3_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.navigateToAddAppointment());
    });
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "APPOINTMENTS_PAGE.BOOK_FIRST_APPOINTMENT"), " ");
  }
}
function Appointments_div_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "p", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Appointments_div_13_ng_template_3_button_5_Template, 4, 3, "button", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "APPOINTMENTS_PAGE.NO_APPOINTMENTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isParent);
  }
}
function Appointments_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275template(2, Appointments_div_13_div_2_Template, 31, 27, "div", 26)(3, Appointments_div_13_ng_template_3_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noAppointments_r11 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.appointments && ctx_r0.appointments.length > 0)("ngIfElse", noAppointments_r11);
  }
}
function Appointments_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function Appointments_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navigateToAdd());
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "APPOINTMENTS_PAGE.BOOK_APPOINTMENT"), " ");
  }
}
function Appointments_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 57);
    \u0275\u0275listener("click", function Appointments_div_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadMore());
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "APPOINTMENTS_PAGE.LOAD_MORE"), " ");
  }
}
var Appointments = class _Appointments {
  authService;
  appointmentsService;
  router;
  translateService;
  pageTitleService;
  isAdmin = false;
  isTeacher = false;
  isParent = false;
  breadcrumbs = [];
  titleActions = [];
  langChangeSub;
  // Appointments state
  appointments = [];
  displayedAppointments = [];
  loading = false;
  errorMessage = "";
  // Filters
  allStatus = ["All", "Pending", "Approved", "Rejected", "Completed", "Cancelled"];
  selectedStatus = "All";
  statusOptions = [];
  // Pagination
  itemsPerPage = 9;
  currentPage = 1;
  constructor(authService, appointmentsService, router, translateService, pageTitleService) {
    this.authService = authService;
    this.appointmentsService = appointmentsService;
    this.router = router;
    this.translateService = translateService;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.TITLE"));
    this.isAdmin = this.authService.isAdmin();
    this.isTeacher = this.authService.isTeacher();
    this.isParent = this.authService.isParent();
    this.loadAppointments();
    this.updateTranslatedContent();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translateService.instant("APPOINTMENTS_PAGE.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  navigateToAdd() {
    this.router.navigate(["/appointments/add"]);
  }
  updateTranslatedContent() {
    this.breadcrumbs = [
      { label: this.translateService.instant("APPOINTMENTS_PAGE.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("APPOINTMENTS_PAGE.APPOINTMENTS") }
    ];
    if (this.isParent) {
      this.titleActions = [
        {
          label: this.translateService.instant("APPOINTMENTS_PAGE.BOOK_APPOINTMENT"),
          class: "btn-add-global-2",
          action: () => this.router.navigate(["/appointments/add"])
        }
      ];
    } else {
      this.titleActions = [];
    }
    this.statusOptions = [
      { value: "All", label: this.translateService.instant("APPOINTMENTS_PAGE.ALL_STATUS"), icon: "bi-list-ul" },
      { value: "Pending", label: this.translateService.instant("APPOINTMENTS_PAGE.PENDING"), icon: "bi-hourglass-split" },
      { value: "Approved", label: this.translateService.instant("APPOINTMENTS_PAGE.APPROVED"), icon: "bi-check-circle" },
      { value: "Rejected", label: this.translateService.instant("APPOINTMENTS_PAGE.REJECTED"), icon: "bi-x-circle" },
      { value: "Completed", label: this.translateService.instant("APPOINTMENTS_PAGE.COMPLETED"), icon: "bi-check-all" },
      { value: "Cancelled", label: this.translateService.instant("APPOINTMENTS_PAGE.CANCELLED"), icon: "bi-slash-circle" }
    ];
  }
  loadAppointments() {
    this.loading = true;
    this.errorMessage = "";
    const loadFn = this.isParent ? this.appointmentsService.getMyAppointments(this.selectedStatus) : this.appointmentsService.getAllAppointments(this.selectedStatus);
    loadFn.subscribe({
      next: (list) => {
        this.appointments = list;
        this.currentPage = 1;
        this.updateDisplayedAppointments();
        this.loading = false;
      },
      error: (err) => {
        this.appointments = [];
        this.displayedAppointments = [];
        this.errorMessage = err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_LOAD");
        this.loading = false;
      }
    });
  }
  updateDisplayedAppointments() {
    const endIndex = this.currentPage * this.itemsPerPage;
    this.displayedAppointments = this.appointments.slice(0, endIndex);
  }
  loadMore() {
    this.currentPage++;
    this.updateDisplayedAppointments();
  }
  hasMore() {
    return this.displayedAppointments.length < this.appointments.length;
  }
  viewDetails(appointment) {
    this.router.navigate(["/appointments/detail", appointment.id]);
  }
  // Admin/Teacher actions
  approve(appointment) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_APPROVE"),
      text: this.translateService.instant("APPOINTMENTS_PAGE.APPROVE_MESSAGE"),
      icon: "question",
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_APPROVE"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentsService.approveAppointment(appointment.id).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.APPROVED"));
            this.loadAppointments();
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_APPROVE")
            });
          }
        });
      }
    });
  }
  reject(appointment) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_REJECT"),
      input: "textarea",
      inputLabel: this.translateService.instant("APPOINTMENTS_PAGE.REJECTION_REASON"),
      inputPlaceholder: this.translateService.instant("APPOINTMENTS_PAGE.REJECTION_REASON_PLACEHOLDER"),
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_REJECT"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL"),
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentsService.rejectAppointment(appointment.id, { rejectionReason: result.value }).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.REJECTED"));
            this.loadAppointments();
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_REJECT")
            });
          }
        });
      }
    });
  }
  complete(appointment) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_COMPLETE"),
      input: "textarea",
      inputLabel: this.translateService.instant("APPOINTMENTS_PAGE.MEETING_NOTES"),
      inputPlaceholder: this.translateService.instant("APPOINTMENTS_PAGE.NOTES_PLACEHOLDER"),
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.MARK_COMPLETED"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentsService.completeAppointment(appointment.id, { notes: result.value }).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.COMPLETED"));
            this.loadAppointments();
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_COMPLETE")
            });
          }
        });
      }
    });
  }
  // Parent actions
  cancelAppointment(appointment) {
    import_sweetalert2.default.fire({
      title: this.translateService.instant("APPOINTMENTS_PAGE.CONFIRM_CANCEL"),
      text: this.translateService.instant("APPOINTMENTS_PAGE.CANCEL_MESSAGE"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: this.translateService.instant("APPOINTMENTS_PAGE.YES_CANCEL"),
      cancelButtonText: this.translateService.instant("APPOINTMENTS_PAGE.NO"),
      confirmButtonColor: "#dc3545"
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointmentsService.cancelMyAppointment(appointment.id).subscribe({
          next: () => {
            showSuccessToast(this.translateService.instant("APPOINTMENTS_PAGE.CANCELLED"));
            this.loadAppointments();
          },
          error: (err) => {
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translateService.instant("APPOINTMENTS_PAGE.ERROR"),
              text: err.error?.message || this.translateService.instant("APPOINTMENTS_PAGE.FAILED_TO_CANCEL")
            });
          }
        });
      }
    });
  }
  editAppointment(appointment) {
    this.router.navigate(["/appointments/edit", appointment.id]);
  }
  navigateToAddAppointment() {
    this.router.navigate(["/appointments/add"]);
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "Pending":
        return "badge-pending";
      case "Approved":
        return "badge-approved";
      case "Rejected":
        return "badge-rejected";
      case "Completed":
        return "badge-completed";
      case "Cancelled":
        return "badge-cancelled";
      default:
        return "badge-secondary";
    }
  }
  getTypeBadgeClass(type) {
    switch (type) {
      case "General":
        return "badge-general";
      case "Academic":
        return "badge-academic";
      case "Behavioral":
        return "badge-behavioral";
      case "Medical":
        return "badge-medical";
      case "Other":
        return "badge-other";
      default:
        return "badge-secondary";
    }
  }
  trackById(index, item) {
    return item.id;
  }
  static \u0275fac = function Appointments_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Appointments)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppointmentsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Appointments, selectors: [["app-appointments"]], decls: 16, vars: 17, consts: [["noAppointments", ""], [3, "title", 4, "ngIf"], [1, "container-fluid", "mt-4"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions", 4, "ngIf"], [1, "bg-white", "p-3", "border", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4", "rounded-1"], [1, "title-filter", "mb-0"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "card card-general card-appointments", 4, "ngIf"], ["class", "action-btn btn-add-global-2 custom-btn-2 mx-auto", 3, "click", 4, "ngIf"], ["class", "text-center d-flex justify-content-center mt-3", 4, "ngIf"], [3, "title"], [3, "title", "subtitle", "icon", "breadcrumbs", "actions"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "card", "card-general", "card-appointments"], [1, "card-body"], ["class", "table-responsive custom-table", 4, "ngIf", "ngIfElse"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fw-medium"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-view", 3, "click", "title"], [1, "bi", "bi-eye"], ["class", "btn btn-sm btn-edit", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-remove", 3, "title", "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-edit", 3, "click", "title"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-remove", 3, "click", "title"], [1, "bi", "bi-x-lg"], ["class", "btn btn-sm btn-view", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-sm btn-info", 3, "title", "click", 4, "ngIf"], [1, "bi", "bi-check-lg"], [1, "btn", "btn-sm", "btn-info", 3, "click", "title"], [1, "bi", "bi-check-all"], [1, "bi", "bi-calendar-x", "fs-1", "text-muted", "mb-3", "d-block"], [1, "text-muted", "mb-0"], ["class", "action-btn custom-btn-2 btn-add-global-2 mt-4 mx-auto", 3, "click", 4, "ngIf"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", "mt-4", "mx-auto", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "action-btn", "btn-add-global-2", "custom-btn-2", "mx-auto", 3, "click"], [1, "bi", "bi-plus-lg", "me-2"], [1, "text-center", "d-flex", "justify-content-center", "mt-3"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"]], template: function Appointments_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Appointments_app_parent_child_header_simple_0_Template, 2, 3, "app-parent-child-header-simple", 1);
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275template(2, Appointments_app_title_page_2_Template, 3, 9, "app-title-page", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "h4", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "ng-select", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function Appointments_Template_ng_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function Appointments_Template_ng_select_change_8_listener() {
        return ctx.loadAppointments();
      });
      \u0275\u0275template(10, Appointments_ng_template_10_Template, 4, 4, "ng-template", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, Appointments_div_11_Template, 5, 3, "div", 9)(12, Appointments_div_12_Template, 3, 1, "div", 10)(13, Appointments_div_13_Template, 5, 2, "div", 11)(14, Appointments_button_14_Template, 4, 3, "button", 12)(15, Appointments_div_15_Template, 5, 3, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "APPOINTMENTS_PAGE.APPOINTMENTS_LIST"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275property("items", ctx.statusOptions)("placeholder", \u0275\u0275pipeBind1(9, 15, "APPOINTMENTS_PAGE.FILTER_BY_STATUS"))("clearable", false)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasMore());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, TranslateModule, ParentChildHeaderSimpleComponent, DatePipe, TranslatePipe], styles: ["\n\n.card-appointments[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.filter-select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.title-filter[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.badge-approved[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n}\n.badge-rejected[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.badge-completed[_ngcontent-%COMP%] {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background-color: #e2e3e5;\n  color: #383d41;\n}\n.badge-general[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  color: #0056b3;\n}\n.badge-academic[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-behavioral[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: #f57c00;\n}\n.badge-medical[_ngcontent-%COMP%] {\n  background-color: #fce4ec;\n  color: #c2185b;\n}\n.badge-other[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n.btn-view[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  color: #0056b3;\n  border: none;\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  background-color: #cce5ff;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n  border: none;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background-color: #ffeeba;\n}\n.btn-remove[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: none;\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background-color: #f5c6cb;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n  border-bottom: 2px solid #dee2e6;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 1rem 0.75rem;\n}\n.custom-table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.option-with-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.option-with-image[_ngcontent-%COMP%]   .option-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.custom-btn-2[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.custom-btn-2.btn-add-border[_ngcontent-%COMP%] {\n  border: 1px solid #7dd3c0;\n  color: #7dd3c0;\n  background: transparent;\n}\n.custom-btn-2.btn-add-border[_ngcontent-%COMP%]:hover {\n  background-color: #7dd3c0;\n  color: white;\n}\n/*# sourceMappingURL=appointments.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Appointments, [{
    type: Component,
    args: [{ selector: "app-appointments", standalone: true, imports: [CommonModule, FormsModule, TitlePage, NgSelectModule, TranslateModule, ParentChildHeaderSimpleComponent], template: `<app-parent-child-header-simple *ngIf="isParent"\r
  [title]="'APPOINTMENTS_PAGE.TITLE' | translate"\r
>\r
</app-parent-child-header-simple>\r
<div class="container-fluid mt-4">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="'APPOINTMENTS_PAGE.TITLE' | translate"\r
    [subtitle]="'APPOINTMENTS_PAGE.SUBTITLE' | translate"\r
    [icon]="'bi bi-calendar-check'"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Filter Section -->\r
  <div class="bg-white p-3 border d-flex align-items-center justify-content-between flex-wrap mb-4 rounded-1">\r
    <h4 class="title-filter mb-0">{{ 'APPOINTMENTS_PAGE.APPOINTMENTS_LIST' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Status Filter -->\r
      <ng-select\r
        class="filter-select"\r
        [(ngModel)]="selectedStatus"\r
        [items]="statusOptions"\r
        bindLabel="label"\r
        bindValue="value"\r
        [placeholder]="'APPOINTMENTS_PAGE.FILTER_BY_STATUS' | translate"\r
        [clearable]="false"\r
        [searchable]="false"\r
        (change)="loadAppointments()">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ 'APPOINTMENTS_PAGE.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div *ngIf="errorMessage && !loading" class="alert alert-danger">\r
    <i class="bi bi-exclamation-triangle me-2"></i>{{ errorMessage }}\r
  </div>\r
\r
  <!-- Appointments Table -->\r
  <div *ngIf="!loading" class="card card-general card-appointments">\r
    <div class="card-body">\r
      <div *ngIf="appointments && appointments.length > 0; else noAppointments" class="table-responsive custom-table">\r
        <table class="table table-hover mb-0">\r
          <thead class="table-light">\r
            <tr>\r
              <th>{{ 'APPOINTMENTS_PAGE.TITLE_LABEL' | translate }}</th>\r
              <th *ngIf="!isParent">{{ 'APPOINTMENTS_PAGE.PARENT' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.CHILD' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.TEACHER' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.TYPE' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.DATE' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.TIME' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.STATUS' | translate }}</th>\r
              <th>{{ 'APPOINTMENTS_PAGE.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let apt of displayedAppointments; trackBy:trackById">\r
              <td>\r
                <span class="fw-medium">{{ apt.title }}</span>\r
              </td>\r
              <td *ngIf="!isParent">\r
                <span class="text-muted">{{ apt.parentName || '-' }}</span>\r
              </td>\r
              <td>\r
                <span class="text-muted">{{ apt.childName || ('APPOINTMENTS_PAGE.NOT_SPECIFIED' | translate) }}</span>\r
              </td>\r
              <td>\r
                <span class="text-muted">{{ apt.teacherName || ('APPOINTMENTS_PAGE.ANY_AVAILABLE' | translate) }}</span>\r
              </td>\r
              <td>\r
                <span class="badge" [ngClass]="getTypeBadgeClass(apt.type)">\r
                  {{ 'APPOINTMENTS_PAGE.TYPE_' + apt.type.toUpperCase() | translate }}\r
                </span>\r
              </td>\r
              <td>{{ apt.appointmentDate | date:'mediumDate' }}</td>\r
              <td>{{ apt.startTime }} - {{ apt.endTime }}</td>\r
              <td>\r
                <span class="badge" [ngClass]="getStatusBadgeClass(apt.status)">\r
                  {{ 'APPOINTMENTS_PAGE.' + apt.status.toUpperCase() | translate }}\r
                </span>\r
              </td>\r
              <td>\r
                <div class="d-flex gap-1">\r
                  <!-- View Details -->\r
                  <button class="btn btn-sm btn-view"\r
                          (click)="viewDetails(apt)"\r
                          [title]="'APPOINTMENTS_PAGE.VIEW_DETAILS' | translate">\r
                    <i class="bi bi-eye"></i>\r
                  </button>\r
\r
                  <!-- Parent Actions -->\r
                  <ng-container *ngIf="isParent">\r
                    <!-- Edit (only pending) -->\r
                    <button *ngIf="apt.status === 'Pending'"\r
                            class="btn btn-sm btn-edit"\r
                            (click)="editAppointment(apt)"\r
                            [title]="'APPOINTMENTS_PAGE.EDIT' | translate">\r
                      <i class="bi bi-pencil"></i>\r
                    </button>\r
                    <!-- Cancel (pending or approved) -->\r
                    <button *ngIf="apt.status === 'Pending' || apt.status === 'Approved'"\r
                            class="btn btn-sm btn-remove"\r
                            (click)="cancelAppointment(apt)"\r
                            [title]="'APPOINTMENTS_PAGE.CANCEL_APPOINTMENT' | translate">\r
                      <i class="bi bi-x-lg"></i>\r
                    </button>\r
                  </ng-container>\r
\r
                  <!-- Admin/Teacher Actions -->\r
                  <ng-container *ngIf="isAdmin || isTeacher">\r
                    <!-- Approve (only pending) -->\r
                    <button *ngIf="apt.status === 'Pending'"\r
                            class="btn btn-sm btn-view"\r
                            (click)="approve(apt)"\r
                            [title]="'APPOINTMENTS_PAGE.APPROVE' | translate">\r
                      <i class="bi bi-check-lg"></i>\r
                    </button>\r
                    <!-- Reject (only pending) -->\r
                    <button *ngIf="apt.status === 'Pending'"\r
                            class="btn btn-sm btn-remove"\r
                            (click)="reject(apt)"\r
                            [title]="'APPOINTMENTS_PAGE.REJECT' | translate">\r
                      <i class="bi bi-x-lg"></i>\r
                    </button>\r
                    <!-- Complete (only approved) -->\r
                    <button *ngIf="apt.status === 'Approved'"\r
                            class="btn btn-sm btn-info"\r
                            (click)="complete(apt)"\r
                            [title]="'APPOINTMENTS_PAGE.MARK_COMPLETED' | translate">\r
                      <i class="bi bi-check-all"></i>\r
                    </button>\r
                  </ng-container>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
      <ng-template #noAppointments>\r
        <div class="text-center py-5">\r
          <i class="bi bi-calendar-x fs-1 text-muted mb-3 d-block"></i>\r
          <p class="text-muted mb-0">{{ 'APPOINTMENTS_PAGE.NO_APPOINTMENTS' | translate }}</p>\r
          <button *ngIf="isParent" class="action-btn custom-btn-2 btn-add-global-2 mt-4 mx-auto" (click)="navigateToAddAppointment()">\r
            <i class="bi bi-plus-circle me-2"></i>{{ 'APPOINTMENTS_PAGE.BOOK_FIRST_APPOINTMENT' | translate }}\r
          </button>\r
        </div>\r
      </ng-template>\r
    </div>\r
  </div>\r
  <!-- Add Appointments -->\r
  <button *ngIf="isParent" class="action-btn btn-add-global-2 custom-btn-2 mx-auto" (click)="navigateToAdd()">\r
    <i class="bi bi-plus-lg me-2"></i>{{ 'APPOINTMENTS_PAGE.BOOK_APPOINTMENT' | translate }}\r
  </button>\r
  <!-- Load More Button -->\r
  <div *ngIf="hasMore()" class="text-center d-flex justify-content-center mt-3">\r
    <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMore()">\r
      <i class="bi bi-plus-circle me-2"></i>{{ 'APPOINTMENTS_PAGE.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/appointments/appointments.scss */\n.card-appointments {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.filter-select {\n  min-width: 200px;\n}\n.title-filter {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n}\n.badge-pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.badge-approved {\n  background-color: #d4edda;\n  color: #155724;\n}\n.badge-rejected {\n  background-color: #f8d7da;\n  color: #721c24;\n}\n.badge-completed {\n  background-color: #cce5ff;\n  color: #004085;\n}\n.badge-cancelled {\n  background-color: #e2e3e5;\n  color: #383d41;\n}\n.badge-general {\n  background-color: #e7f1ff;\n  color: #0056b3;\n}\n.badge-academic {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-behavioral {\n  background-color: #fff8e1;\n  color: #f57c00;\n}\n.badge-medical {\n  background-color: #fce4ec;\n  color: #c2185b;\n}\n.badge-other {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n.btn-view {\n  background-color: #e7f1ff;\n  color: #0056b3;\n  border: none;\n}\n.btn-view:hover {\n  background-color: #cce5ff;\n}\n.btn-edit {\n  background-color: #fff3cd;\n  color: #856404;\n  border: none;\n}\n.btn-edit:hover {\n  background-color: #ffeeba;\n}\n.btn-remove {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: none;\n}\n.btn-remove:hover {\n  background-color: #f5c6cb;\n}\n.custom-table .table th {\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6c757d;\n  border-bottom: 2px solid #dee2e6;\n}\n.custom-table .table td {\n  vertical-align: middle;\n  padding: 1rem 0.75rem;\n}\n.custom-table .table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.option-with-image {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.option-with-image .option-title {\n  font-size: 14px;\n}\n.custom-btn-2 {\n  padding: 0.5rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.custom-btn-2.btn-add-border {\n  border: 1px solid #7dd3c0;\n  color: #7dd3c0;\n  background: transparent;\n}\n.custom-btn-2.btn-add-border:hover {\n  background-color: #7dd3c0;\n  color: white;\n}\n/*# sourceMappingURL=appointments.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: AppointmentsService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Appointments, { className: "Appointments", filePath: "src/app/features/appointments/appointments.ts", lineNumber: 23 });
})();
export {
  Appointments
};
//# sourceMappingURL=chunk-BUQSRMYH.js.map
