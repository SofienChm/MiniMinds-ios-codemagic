import {
  EventParticipantsService
} from "./chunk-7YLPMD5M.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  AppCurrencyPipe
} from "./chunk-6S3KDPAE.js";
import "./chunk-OQBHM43H.js";
import {
  EventService
} from "./chunk-CF5UU2UU.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  IonContent,
  IonRefresher,
  IonRefresherContent
} from "./chunk-Z4CVTZRC.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-I34BDRB4.js";
import "./chunk-OP56HYPY.js";
import "./chunk-XRULW7VX.js";
import "./chunk-3ZGDTXDI.js";
import "./chunk-TV7O33EV.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  Location,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/event/event-detail/event-detail.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => ({ label: "Dashboard", url: "/dashboard" });
var _c1 = () => ({ label: "Events", url: "/events" });
var _c2 = (a0) => ({ label: a0 });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
function EventDetailComponent_ion_content_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275listener("click", function EventDetailComponent_ion_content_0_div_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275element(3, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 13);
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275element(6, "i", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "div", 17);
    \u0275\u0275element(9, "div", 18)(10, "img", 19);
    \u0275\u0275elementStart(11, "h2", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("src", ctx_r1.getEventImageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r1.event.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event.name);
  }
}
function EventDetailComponent_ion_content_0_div_5_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EventDetailComponent_ion_content_0_div_5_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openAddParticipantModal());
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "EVENT_DETAIL.ADD_CHILD"), " ");
  }
}
function EventDetailComponent_ion_content_0_div_5_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "EVENT_DETAIL.REQUEST_PENDING"), " ");
  }
}
function EventDetailComponent_ion_content_0_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "EVENT_DETAIL.CHILD_REGISTERED"), " ");
  }
}
function EventDetailComponent_ion_content_0_div_5_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ctx_r1.event.type);
  }
}
function EventDetailComponent_ion_content_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "div", 25)(5, "h3", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "i", 28);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "div", 23)(14, "div", 24)(15, "div", 25)(16, "div", 27);
    \u0275\u0275template(17, EventDetailComponent_ion_content_0_div_5_button_17_Template, 4, 3, "button", 29)(18, EventDetailComponent_ion_content_0_div_5_div_18_Template, 4, 3, "div", 30)(19, EventDetailComponent_ion_content_0_div_5_div_19_Template, 4, 3, "div", 31);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "div", 32)(21, "div", 25)(22, "h3", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27);
    \u0275\u0275element(26, "i", 33);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 27);
    \u0275\u0275element(33, "i", 34);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 35);
    \u0275\u0275template(41, EventDetailComponent_ion_content_0_div_5_span_41_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 24)(43, "div", 25)(44, "h3", 26);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 37);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "EVENT_DETAIL.EVENT_LOCATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.event.place || \u0275\u0275pipeBind1(12, 17, "EVENT_DETAIL.LOCATION_TBD"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.hasChildInEvent());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasChildInEvent() && ctx_r1.getChildStatus() === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasChildInEvent() && ctx_r1.getChildStatus() === "Registered");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 19, "EVENT_DETAIL.EVENT_DETAILS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(29, 21, "EVENT_DETAIL.PRICE"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.event.price);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(36, 23, "EVENT_DETAIL.AGE_RANGE"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r1.event.ageFrom, "-", ctx_r1.event.ageTo, " ", \u0275\u0275pipeBind1(39, 25, "EVENT_DETAIL.YEARS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.event.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 27, "EVENT_DETAIL.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.event.description);
  }
}
function EventDetailComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 4)(1, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function EventDetailComponent_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275template(4, EventDetailComponent_ion_content_0_div_4_Template, 13, 3, "div", 7)(5, EventDetailComponent_ion_content_0_div_5_Template, 49, 29, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.event);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.event);
  }
}
function EventDetailComponent_div_1_app_title_page_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 100);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.event.name)("breadcrumbs", \u0275\u0275pureFunction3(7, _c3, \u0275\u0275pureFunction0(3, _c0), \u0275\u0275pureFunction0(4, _c1), \u0275\u0275pureFunction1(5, _c2, ctx_r1.event.name)))("actions", ctx_r1.titleActions);
  }
}
function EventDetailComponent_div_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 101);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getEventImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function EventDetailComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div");
    \u0275\u0275element(2, "i", 103);
    \u0275\u0275elementStart(3, "p", 104);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "EVENT_DETAIL.NO_IMAGE"));
  }
}
function EventDetailComponent_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 105);
  }
}
function EventDetailComponent_div_1_i_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 106);
  }
}
function EventDetailComponent_div_1_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "small", 79);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 80);
    \u0275\u0275element(5, "i", 107);
    \u0275\u0275elementStart(6, "div", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "EVENT_DETAIL.LOCATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.event.place);
  }
}
function EventDetailComponent_div_1_div_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275elementStart(2, "p", 110);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EVENT_DETAIL.NO_PARTICIPANTS"));
  }
}
function EventDetailComponent_div_1_div_132_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114);
    \u0275\u0275element(2, "img", 115);
    \u0275\u0275elementStart(3, "div", 116)(4, "h6", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 83);
    \u0275\u0275element(7, "i", 118);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 119);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const participant_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", participant_r6.child.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", participant_r6.child.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", participant_r6.child.firstName, " ", participant_r6.child.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 6, participant_r6.registeredAt, "MMM d, y"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(participant_r6.status);
  }
}
function EventDetailComponent_div_1_div_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, EventDetailComponent_div_1_div_132_div_1_Template, 12, 9, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.event.participants);
  }
}
function EventDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, EventDetailComponent_div_1_app_title_page_1_Template, 1, 11, "app-title-page", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "div", 48)(4, "div", 49)(5, "div", 50)(6, "div", 51);
    \u0275\u0275template(7, EventDetailComponent_div_1_img_7_Template, 1, 1, "img", 52)(8, EventDetailComponent_div_1_div_8_Template, 6, 3, "div", 53);
    \u0275\u0275elementStart(9, "div", 54)(10, "button", 55);
    \u0275\u0275listener("click", function EventDetailComponent_div_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerImageUpload());
    });
    \u0275\u0275template(11, EventDetailComponent_div_1_span_11_Template, 1, 0, "span", 56)(12, EventDetailComponent_div_1_i_12_Template, 1, 0, "i", 57);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 58);
    \u0275\u0275listener("change", function EventDetailComponent_div_1_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 59)(19, "span", 60);
    \u0275\u0275element(20, "i", 61);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 62)(23, "h2", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 63);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 47)(28, "div", 64)(29, "div", 49)(30, "div", 65)(31, "div", 66);
    \u0275\u0275element(32, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 68)(34, "span", 69);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 70);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "appCurrency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "div", 64)(41, "div", 49)(42, "div", 65)(43, "div", 71);
    \u0275\u0275element(44, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 68)(46, "span", 69);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 70);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 64)(53, "div", 49)(54, "div", 65)(55, "div", 72);
    \u0275\u0275element(56, "i", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 68)(58, "span", 69);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 70);
    \u0275\u0275text(62, "$25");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(63, "div", 64)(64, "div", 74)(65, "div", 75)(66, "h5", 76);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 77)(70, "div", 78)(71, "small", 79);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 80);
    \u0275\u0275element(75, "i", 81);
    \u0275\u0275elementStart(76, "div")(77, "div", 82);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "small", 83);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(81, EventDetailComponent_div_1_div_81_Template, 8, 4, "div", 84);
    \u0275\u0275elementStart(82, "div", 78)(83, "small", 79);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 80);
    \u0275\u0275element(87, "i", 85);
    \u0275\u0275elementStart(88, "div")(89, "div", 86);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "small", 83);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "appCurrency");
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "div", 78)(97, "small", 79);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 87)(101, "div", 88);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "small", 89);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div")(107, "small", 79);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 80);
    \u0275\u0275element(111, "i", 90);
    \u0275\u0275elementStart(112, "small");
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "date");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(115, "div", 47)(116, "div", 91)(117, "div", 92)(118, "div", 93)(119, "div", 94)(120, "h5", 76);
    \u0275\u0275element(121, "i", 95);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementStart(124, "span", 96);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "button", 97);
    \u0275\u0275listener("click", function EventDetailComponent_div_1_Template_button_click_126_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddParticipantModal());
    });
    \u0275\u0275element(127, "i", 39);
    \u0275\u0275text(128);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(130, "div", 77);
    \u0275\u0275template(131, EventDetailComponent_div_1_div_131_Template, 5, 3, "div", 98)(132, EventDetailComponent_div_1_div_132_Template, 2, 1, "div", 99);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isParent);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.event.image || ctx_r1.event.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.event.image && !ctx_r1.event.imageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploading ? \u0275\u0275pipeBind1(14, 40, "EVENT_DETAIL.UPLOADING") : ctx_r1.event.image || ctx_r1.event.imageUrl ? \u0275\u0275pipeBind1(15, 42, "EVENT_DETAIL.CHANGE_IMAGE") : \u0275\u0275pipeBind1(16, 44, "EVENT_DETAIL.ADD_IMAGE"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.event.type, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.event.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 46, "EVENT_DETAIL.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 48, ctx_r1.event.price));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 50, "EVENT_DETAIL.CAPACITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.event.capacity, " ", \u0275\u0275pipeBind1(51, 52, "EVENT_DETAIL.SPOTS"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 54, "EVENT_DETAIL.PRICE"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 56, "EVENT_DETAIL.EVENT_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 58, "EVENT_DETAIL.DATE_TIME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.event.time));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.event.time));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event.place);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 60, "EVENT_DETAIL.TOTAL_REVENUE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 62, ctx_r1.getTotalRevenue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(94, 64, ctx_r1.event.price), " \xD7 ", ctx_r1.registeredCount, " ", \u0275\u0275pipeBind1(95, 66, "EVENT_DETAIL.REGISTERED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 68, "EVENT_DETAIL.AVAILABILITY"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.registeredCount / ctx_r1.event.capacity * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.registeredCount, " / ", ctx_r1.event.capacity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.event.capacity - ctx_r1.registeredCount, " ", \u0275\u0275pipeBind1(105, 70, "EVENT_DETAIL.SPOTS_REMAINING"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 72, "EVENT_DETAIL.CREATED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 74, ctx_r1.event.createdAt, "MMM d, y - h:mm a"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 77, "EVENT_DETAIL.REGISTERED_PARTICIPANTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.event.participants == null ? null : ctx_r1.event.participants.length) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(129, 79, "EVENT_DETAIL.ADD_PARTICIPANT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.event.participants || ctx_r1.event.participants.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event.participants && ctx_r1.event.participants.length > 0);
  }
}
function EventDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 120)(2, "div", 121)(3, "span", 122);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 123);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "EVENT_DETAIL.LOADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "EVENT_DETAIL.LOADING_EVENT"));
  }
}
function EventDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 120);
    \u0275\u0275element(2, "i", 124);
    \u0275\u0275elementStart(3, "h4", 125);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 83);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 126);
    \u0275\u0275listener("click", function EventDetailComponent_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "EVENT_DETAIL.EVENT_NOT_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "EVENT_DETAIL.EVENT_NOT_FOUND_TEXT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "EVENT_DETAIL.BACK_TO_EVENTS"), " ");
  }
}
function EventDetailComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 121)(2, "span", 122);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 123);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "EVENT_DETAIL.LOADING_STUDENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "EVENT_DETAIL.LOADING_STUDENTS"));
  }
}
function EventDetailComponent_div_4_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275elementStart(2, "p", 110);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EVENT_DETAIL.NO_STUDENTS_FOUND"));
  }
}
function EventDetailComponent_div_4_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_div_11_div_6_Template_div_click_0_listener() {
      const student_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStudentSelection(student_r11));
    });
    \u0275\u0275elementStart(1, "div", 80);
    \u0275\u0275element(2, "img", 115);
    \u0275\u0275elementStart(3, "div", 116)(4, "h6", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 83);
    \u0275\u0275element(7, "i", 147);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 148)(12, "input", 149);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_div_11_div_6_Template_input_click_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const student_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", student_r11.id && ctx_r1.selectedStudents.includes(student_r11.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", student_r11.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", student_r11.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", student_r11.firstName, " ", student_r11.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(9, 10, "EVENT_DETAIL.AGE"), ": ", ctx_r1.calculateAge(student_r11.dateOfBirth), " ", \u0275\u0275pipeBind1(10, 12, "EVENT_DETAIL.YEARS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", student_r11.id && ctx_r1.selectedStudents.includes(student_r11.id));
  }
}
function EventDetailComponent_div_4_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "EVENT_DETAIL.ALL_CHILDREN_REGISTERED"), " ");
  }
}
function EventDetailComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 141)(2, "input", 142);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventDetailComponent_div_4_div_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function EventDetailComponent_div_4_div_11_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterStudents());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, EventDetailComponent_div_4_div_11_div_4_Template, 5, 3, "div", 135);
    \u0275\u0275elementStart(5, "div", 143);
    \u0275\u0275template(6, EventDetailComponent_div_4_div_11_div_6_Template, 13, 14, "div", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EventDetailComponent_div_4_div_11_div_7_Template, 4, 3, "div", 145);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 5, "EVENT_DETAIL.SEARCH_STUDENTS"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredStudents.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredStudents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.students.length === 0 && !ctx_r1.loadingStudents && ((ctx_r1.event == null ? null : ctx_r1.event.participants == null ? null : ctx_r1.event.participants.length) || 0) > 0);
  }
}
function EventDetailComponent_div_4_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 105);
  }
}
function EventDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127)(1, "div", 128)(2, "div", 129)(3, "div", 130)(4, "h5", 131);
    \u0275\u0275element(5, "i", 132);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddParticipantModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 134);
    \u0275\u0275template(10, EventDetailComponent_div_4_div_10_Template, 8, 6, "div", 135)(11, EventDetailComponent_div_4_div_11_Template, 8, 7, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 137)(13, "button", 138);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddParticipantModal());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 139);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSelectedParticipants());
    });
    \u0275\u0275template(17, EventDetailComponent_div_4_span_17_Template, 1, 0, "span", 56);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 10, "EVENT_DETAIL.ADD_PARTICIPANT_TO"), " ", ctx_r1.event == null ? null : ctx_r1.event.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingStudents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingStudents);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "EVENT_DETAIL.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.selectedStudents.length === 0 || ctx_r1.addingParticipants);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingParticipants);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(19, 14, "EVENT_DETAIL.ADD_PARTICIPANT"), " ", ctx_r1.selectedStudents.length, " ", ctx_r1.selectedStudents.length !== 1 ? "s" : "", " ");
  }
}
function EventDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275listener("click", function EventDetailComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddParticipantModal());
    });
    \u0275\u0275elementEnd();
  }
}
var EventDetailComponent = class _EventDetailComponent {
  route;
  router;
  eventService;
  eventParticipantsService;
  childrenService;
  authService;
  location;
  translate;
  pageTitleService;
  langChangeSub;
  event = null;
  loading = true;
  eventId = 0;
  registeredCount = 0;
  uploading = false;
  titleActions = [];
  // Modal properties
  showAddParticipantModal = false;
  loadingStudents = false;
  addingParticipants = false;
  students = [];
  filteredStudents = [];
  selectedStudents = [];
  searchTerm = "";
  get isParent() {
    return this.authService.isParent();
  }
  constructor(route, router, eventService, eventParticipantsService, childrenService, authService, location, translate, pageTitleService) {
    this.route = route;
    this.router = router;
    this.eventService = eventService;
    this.eventParticipantsService = eventParticipantsService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.location = location;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("EVENT_DETAIL.EVENT_DETAILS"));
    this.route.params.subscribe((params) => {
      this.eventId = +params["id"];
      this.loadEvent();
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("EVENT_DETAIL.EVENT_DETAILS"));
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  back() {
    this.location.back();
  }
  loadEvent() {
    this.loading = true;
    this.eventService.getEvent(this.eventId).subscribe({
      next: (event) => {
        this.event = event;
        this.loadParticipantsCount();
      },
      error: (error) => {
        console.error("Error loading event:", error);
        this.loading = false;
      }
    });
  }
  loadParticipantsCount() {
    this.eventService.getEventParticipants(this.eventId).subscribe({
      next: (participants) => {
        this.registeredCount = participants.filter((p) => p.status === "Registered").length;
        if (this.event) {
          this.event.participants = participants;
        }
        this.setupTitleActions();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading participants:", error);
        this.loading = false;
      }
    });
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EVENT_DETAIL.BACK_TO_EVENTS"),
        icon: "bi bi-arrow-left",
        class: "btn-cancel-global",
        action: () => this.goBack()
      },
      {
        label: this.translate.instant("EVENT_DETAIL.VIEW_PARTICIPANTS"),
        icon: "bi bi-people",
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/events", this.eventId, "participants"])
      },
      {
        label: this.translate.instant("EVENT_DETAIL.EDIT_EVENT"),
        icon: "bi bi-pencil",
        class: "btn-edit-global-2",
        action: () => this.router.navigate(["/events/edit", this.eventId])
      }
    ];
  }
  goBack() {
    this.router.navigate(["/events"]);
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getTotalRevenue() {
    return this.event ? this.event.price * this.registeredCount : 0;
  }
  /**
   * Get the event banner image URL, preferring file-based URL over Base64
   */
  getEventImageUrl() {
    if (!this.event)
      return "assets/dark.png";
    if (this.event.imageUrl && this.event.imageUrl.trim() !== "") {
      return this.getFullUrl(this.event.imageUrl);
    }
    if (this.event.image && this.event.image.trim() !== "") {
      return this.getFullUrl(this.event.image);
    }
    return "assets/dark.png";
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:"))
      return path;
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  triggerImageUpload() {
    const fileInput = document.querySelector('input[type="file"]');
    fileInput?.click();
  }
  onImageSelected(event) {
    const file = event.target.files[0];
    if (file && this.event) {
      this.uploading = true;
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result;
        this.updateEventImage(imageBase64);
      };
      reader.readAsDataURL(file);
    }
  }
  updateEventImage(imageBase64) {
    if (!this.event)
      return;
    const updatedEvent = __spreadProps(__spreadValues({}, this.event), { image: imageBase64 });
    this.eventService.updateEvent(updatedEvent).subscribe({
      next: () => {
        this.event.image = imageBase64;
        this.event.imageUrl = void 0;
        this.uploading = false;
      },
      error: (error) => {
        console.error("Error updating event image:", error);
        this.uploading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to update image. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  openAddParticipantModal() {
    this.showAddParticipantModal = true;
    this.loadStudents();
  }
  closeAddParticipantModal() {
    this.showAddParticipantModal = false;
    this.selectedStudents = [];
    this.searchTerm = "";
    this.filteredStudents = [];
  }
  loadStudents() {
    this.loadingStudents = true;
    this.childrenService.loadChildren().subscribe({
      next: (students) => {
        const participantChildIds = this.event?.participants?.map((p) => p.child.id) || [];
        this.students = students.filter((student) => student.id && !participantChildIds.includes(student.id));
        this.filteredStudents = [...this.students];
        this.loadingStudents = false;
      },
      error: (error) => {
        console.error("Error loading students:", error);
        this.loadingStudents = false;
      }
    });
  }
  filterStudents() {
    if (!this.searchTerm.trim()) {
      this.filteredStudents = [...this.students];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredStudents = this.students.filter((student) => student.firstName.toLowerCase().includes(term) || student.lastName.toLowerCase().includes(term));
  }
  toggleStudentSelection(student) {
    if (!student.id)
      return;
    const studentId = student.id;
    const index = this.selectedStudents.indexOf(studentId);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    } else {
      this.selectedStudents.push(studentId);
    }
  }
  calculateAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  addSelectedParticipants() {
    if (this.selectedStudents.length === 0)
      return;
    this.addingParticipants = true;
    const participantPromises = this.selectedStudents.map((childId) => {
      const participant = {
        eventId: this.eventId,
        childId,
        status: this.isParent ? "Pending" : "Registered",
        registeredAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return this.eventParticipantsService.registerParticipant(participant);
    });
    Promise.all(participantPromises.map((p) => p.toPromise())).then(() => {
      this.addingParticipants = false;
      this.closeAddParticipantModal();
      this.loadEvent();
    }).catch((error) => {
      console.error("Error adding participants:", error);
      this.addingParticipants = false;
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("COMMON.ERROR"),
        text: "Failed to add participants. Please try again.",
        confirmButtonColor: "#7dd3c0"
      });
    });
  }
  hasChildInEvent() {
    if (!this.event?.participants)
      return false;
    return this.event.participants.some((p) => p.child);
  }
  getChildStatus() {
    if (!this.event?.participants)
      return "";
    const participant = this.event.participants.find((p) => p.child);
    return participant?.status || "";
  }
  // Pull-to-refresh handler for Ionic refresher
  onRefresh(event) {
    this.loadEvent();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  static \u0275fac = function EventDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(EventParticipantsService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], decls: 6, vars: 6, consts: [["class", "parent-event-detail-page", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], ["class", "modal fade-transition", "id", "addParticipantModal", "tabindex", "-1", 4, "ngIf"], ["class", "modal-backdrop fade show", 3, "click", 4, "ngIf"], [1, "parent-event-detail-page"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "font-inter"], ["class", "header-info", 4, "ngIf"], ["class", "parent-event-detail", 4, "ngIf"], [1, "header-info"], [1, "title-icons", "mb-3", 3, "click"], [1, "page-back"], [1, "bi", "bi-arrow-left"], [1, "title-page"], [1, "page-setting"], [1, "bi", "bi-share"], [1, "d-flex", "image-name", "row_direction"], [1, "overflow-hidden"], [1, "filter-black"], [1, "event-image", 3, "src", "alt"], [1, "event-title"], [1, "parent-event-detail"], [1, "row", "mb-3", "align-items-stretch"], [1, "col-6"], [1, "event-content"], [1, "event-section"], [1, "section-title"], [1, "detail-item"], [1, "bi", "bi-geo-alt"], ["class", "btn custom-btn-2 btn-add-global-2", 3, "click", 4, "ngIf"], ["class", "status pending mb-0 py-2", 4, "ngIf"], ["class", "status success mb-0 py-2", 4, "ngIf"], [1, "event-content", "mb-3"], [1, "bi", "bi-cash"], [1, "bi", "bi-people"], [1, "detail-tags"], ["class", "tag", 4, "ngIf"], [1, "section-text"], [1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-person-plus", "me-1"], [1, "status", "pending", "mb-0", "py-2"], [1, "bi", "bi-clock-history", "me-2"], [1, "status", "success", "mb-0", "py-2"], [1, "bi", "bi-check-circle", "me-2"], [1, "tag"], [1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions", 4, "ngIf"], [1, "row"], [1, "col-12", "col-md-8"], [1, "card", "card-general"], [1, "event-header"], [1, "event-image-container", "position-relative"], ["loading", "lazy", "class", "card-img-top", "style", "height: 350px; object-fit: cover;", "alt", "Event", 3, "src", 4, "ngIf"], ["class", "event-placeholder text-white text-center", "style", "height: 350px; display: flex; align-items: center; justify-content: center;", 4, "ngIf"], [1, "change-image-btn"], [1, "btn", "btn-light", "btn-sm", "shadow", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-camera me-1", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "badge"], [1, "event-badge", "px-3", "py-2", "shadow"], [1, "bi", "bi-tag-fill", "me-1"], [1, "event-info"], [1, "event-description"], [1, "col-12", "col-md-4"], [1, "stat-card"], [1, "stat-icon", "price"], [1, "bi", "bi-currency-dollar"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "capacity"], [1, "stat-icon", "age"], [1, "bi", "bi-person-badge"], [1, "card", "participants-card", "event-details-card", "card-general", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "event-details-header", "text-white", "py-3"], [1, "mb-0"], [1, "card-body"], [1, "mb-3", "pb-3", "border-bottom"], [1, "text-muted", "d-block", "mb-1"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-calendar3", "detail-icon", "me-2"], [1, "fw-bold"], [1, "text-muted"], ["class", "mb-3 pb-3 border-bottom", 4, "ngIf"], [1, "bi", "bi-cash-stack", "detail-icon", "me-2"], [1, "fw-bold", "revenue-text"], [1, "progress", "event-progress", 2, "height", "25px"], [1, "progress-bar", "event-progress-bar"], [1, "text-muted", "mt-1", "d-block"], [1, "bi", "bi-clock-history", "detail-icon", "me-2"], [1, "col-12"], [1, "card", "participants-card", "card-general", "border-0", "shadow-sm"], [1, "card-header", "participants-header", "py-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-people-fill", "me-2", "header-icon"], [1, "badge", "participants-badge", "ms-2"], [1, "btn", "custom-btn-2", "btn-add-border", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [3, "title", "breadcrumbs", "actions"], ["loading", "lazy", "alt", "Event", 1, "card-img-top", 2, "height", "350px", "object-fit", "cover", 3, "src"], [1, "event-placeholder", "text-white", "text-center", 2, "height", "350px", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "bi", "bi-calendar-event", 2, "font-size", "80px", "opacity", "0.3"], [1, "mt-3", "opacity-75"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-camera", "me-1"], [1, "bi", "bi-geo-alt", "detail-icon", "me-2"], [1, "text-center", "py-5"], [1, "bi", "bi-person-x", 2, "font-size", "60px", "opacity", "0.2"], [1, "text-muted", "mt-3"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "p-3", "border", "rounded", "hover-shadow"], [1, "rounded-circle", "me-3", 2, "width", "50px", "height", "50px", "object-fit", "cover", 3, "src", "alt"], [1, "flex-grow-1"], [1, "mb-1"], [1, "bi", "bi-clock", "me-1"], [1, "badge", "bg-success"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "bi", "bi-exclamation-triangle", "fs-1", "text-warning"], [1, "mt-3"], [1, "btn", "btn-primary", 3, "click"], ["id", "addParticipantModal", "tabindex", "-1", 1, "modal", "fade-transition"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-person-plus", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "button", 1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "text-center", "py-4"], [1, "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "student-list", 2, "max-height", "400px", "overflow-y", "auto"], ["class", "student-item p-3 border rounded mb-2 hover-shadow", "style", "cursor: pointer;", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "alert alert-info mt-3", 4, "ngIf"], [1, "student-item", "p-3", "border", "rounded", "mb-2", "hover-shadow", 2, "cursor", "pointer", 3, "click"], [1, "bi", "bi-calendar", "me-1"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "click", "checked"], [1, "alert", "alert-info", "mt-3"], [1, "bi", "bi-info-circle", "me-2"], [1, "modal-backdrop", "fade", "show", 3, "click"]], template: function EventDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EventDetailComponent_ion_content_0_Template, 6, 2, "ion-content", 0)(1, EventDetailComponent_div_1_Template, 133, 81, "div", 1)(2, EventDetailComponent_div_2_Template, 9, 6, "div", 1)(3, EventDetailComponent_div_3_Template, 13, 9, "div", 1)(4, EventDetailComponent_div_4_Template, 20, 16, "div", 2)(5, EventDetailComponent_div_5_Template, 1, 0, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent && !ctx.loading && ctx.event);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.event);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddParticipantModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddParticipantModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, TranslateModule, IonContent, IonRefresher, IonRefresherContent, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\nion-content.parent-event-detail-page[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-event-detail-page[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.participants-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.participants-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #7dd3c0;\n  margin-right: 12px;\n}\n.card-general[_ngcontent-%COMP%] {\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card-general[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.card-general[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%]   .event-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 280px;\n  border-radius: 12px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #d4f4dd 0%,\n      #c8e6c9 100%);\n}\n.card-general[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%]   .event-image-container[_ngcontent-%COMP%]   .event-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: #7dbcf9;\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.card-general[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%]   .event-image-container[_ngcontent-%COMP%]   .change-image-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  border: none;\n  font-size: 14px;\n  color: #4f46e5;\n  cursor: pointer;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.price[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.capacity[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #db2777;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon.age[_ngcontent-%COMP%] {\n  background: #d8f2ed;\n  color: #7cd1c0;\n}\n.hover-shadow[_ngcontent-%COMP%]   .bg-success[_ngcontent-%COMP%] {\n  background-color: #7cd1c0 !important;\n}\n.event-progress[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: rgba(205, 234, 240, 0.3);\n}\n.event-progress-bar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n}\n.add-participant[_ngcontent-%COMP%] {\n  background: #7db9ff;\n  border: none;\n  font-weight: 400;\n  color: white;\n  font-size: 14px;\n  padding: 9px 15px;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #7cd1c0;\n  padding: 10px;\n  border-radius: 50px;\n  line-height: 1;\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid rgba(32, 44, 75, 0.1);\n}\n@media (max-width: 420px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 10px !important;\n  }\n  .card[_ngcontent-%COMP%]   .participants-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.hover-shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(32, 44, 75, 0.15);\n  transform: translateY(-2px);\n  transition: all 0.3s ease;\n}\n.event-card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.event-stat-card[_ngcontent-%COMP%] {\n  background-color: rgba(205, 234, 240, 0.3);\n  border: 1px solid rgba(205, 234, 240, 0.5);\n  transition: all 0.3s ease;\n}\n.event-stat-card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(205, 234, 240, 0.5);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(32, 44, 75, 0.1);\n}\n.stat-icon-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(254, 204, 253, 0.3);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  color: #202c4b;\n  line-height: 1;\n}\n.parent-event-detail[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n.event-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #202c4b;\n  margin: 0 0 4px 0;\n}\n.event-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.event-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.event-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #202c4b;\n  margin: 0 0 12px 0;\n}\n.section-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n}\n.detail-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #202c4b;\n  font-size: 16px;\n}\n.detail-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 12px;\n  background-color: #feccfd;\n  color: #202c4b;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.revenue-text[_ngcontent-%COMP%] {\n  color: #202c4b !important;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  box-shadow: 0 2px 8px rgba(32, 44, 75, 0.1);\n}\n@media (max-width: 768px) {\n  .event-stat-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.student-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.student-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(205, 234, 240, 0.1);\n  border-color: rgba(32, 44, 75, 0.2) !important;\n}\n.student-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(254, 204, 253, 0.2);\n  border-color: #202c4b !important;\n  border-width: 2px;\n}\n.student-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.student-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.student-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #202c4b;\n  border-radius: 3px;\n}\n  .parent-detailchild .header-info {\n  padding-bottom: 30px;\n  margin-bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #B8E6F0 0%,\n      #D4F1E8 55%,\n      #f5f5f5 100%);\n}\n  .parent-detailchild .overflow-hidden {\n  min-width: 100%;\n  position: relative;\n}\n  .parent-detailchild .overflow-hidden .event-image {\n  max-height: 150px;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n}\n  .parent-detailchild .overflow-hidden .filter-black {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n  border-radius: 20px;\n}\n  .parent-detailchild .overflow-hidden .event-title {\n  position: absolute;\n  bottom: 20px;\n  left: 15px;\n  font-size: 24px;\n  color: #fff;\n}\n  .event-content {\n  height: 100%;\n}\n  .event-content .detail-item:last-child {\n  margin-bottom: 0;\n}\n  .event-content .status.pending {\n  color: #664d03;\n}\n  .event-content .status.success {\n  color: #0a3622;\n}\n/*# sourceMappingURL=event-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailComponent, [{
    type: Component,
    args: [{ selector: "app-event-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TitlePage, AppCurrencyPipe, TranslateModule, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-event-detail-page">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild font-inter">\r
    <div class="header-info" *ngIf="!loading && event">\r
    <div class="title-icons mb-3" (click)="back()">\r
      <div class="page-back">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
      <div class="title-page"></div>\r
      <div class="page-setting">\r
        <i class="bi bi-share"></i>\r
      </div>\r
    </div>\r
    <div class="d-flex image-name row_direction">\r
      <div class="overflow-hidden">\r
        <div class="filter-black"></div>\r
        <img [src]="getEventImageUrl()" [alt]="event.name" class="event-image">\r
        <h2 class="event-title">{{ event.name }}</h2>\r
      </div>\r
    </div>\r
  </div>\r
  \r
  <div class="parent-event-detail" *ngIf="!loading && event">\r
    <div class="row mb-3 align-items-stretch">\r
      <div class="col-6">\r
        <div class="event-content">      \r
          <div class="event-section">\r
            <h3 class="section-title">{{ 'EVENT_DETAIL.EVENT_LOCATION' | translate }}</h3>\r
            <div class="detail-item">\r
              <i class="bi bi-geo-alt"></i>\r
              <span>{{ event.place || ('EVENT_DETAIL.LOCATION_TBD' | translate) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-6">\r
        <div class="event-content">      \r
          <div class="event-section">\r
            <div class="detail-item">\r
              <button *ngIf="!hasChildInEvent()" class="btn custom-btn-2 btn-add-global-2" (click)="openAddParticipantModal()">\r
                <i class="bi bi-person-plus me-1"></i>{{ 'EVENT_DETAIL.ADD_CHILD' | translate }}\r
              </button>\r
              <div *ngIf="hasChildInEvent() && getChildStatus() === 'Pending'" class="status pending mb-0 py-2">\r
                <i class="bi bi-clock-history me-2"></i>{{ 'EVENT_DETAIL.REQUEST_PENDING' | translate }}\r
              </div>\r
              <div *ngIf="hasChildInEvent() && getChildStatus() === 'Registered'" class="status success mb-0 py-2">\r
                <i class="bi bi-check-circle me-2"></i>{{ 'EVENT_DETAIL.CHILD_REGISTERED' | translate }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="event-content mb-3">      \r
      <div class="event-section">\r
        <h3 class="section-title">{{ 'EVENT_DETAIL.EVENT_DETAILS' | translate }}</h3>\r
\r
        <div class="detail-item">\r
          <i class="bi bi-cash"></i>\r
          <span>{{ 'EVENT_DETAIL.PRICE' | translate }}: </span>\r
          <span>{{ event.price}}</span>\r
        </div>\r
        <div class="detail-item">\r
          <i class="bi bi-people"></i>\r
          <span>{{ 'EVENT_DETAIL.AGE_RANGE' | translate }}: </span>\r
          <span>{{ event.ageFrom }}-{{ event.ageTo }} {{ 'EVENT_DETAIL.YEARS' | translate }}</span>\r
        </div>\r
        <div class="detail-tags">\r
          <span class="tag" *ngIf="event.type">#{{ event.type }}</span>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="event-content">\r
      <div class="event-section">\r
        <h3 class="section-title">{{ 'EVENT_DETAIL.DESCRIPTION' | translate }}</h3>\r
        <p class="section-text">{{ event.description }}</p>\r
      </div>\r
    </div>\r
  </div>\r
  </div>\r
</ion-content>\r
\r
<div class="container-fluid mt-4" *ngIf="!isParent && !loading && event">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="event.name" \r
    [breadcrumbs]="[{label: 'Dashboard', url: '/dashboard'}, {label: 'Events', url: '/events'}, {label: event.name}]"\r
    [actions]="titleActions">\r
  </app-title-page>\r
  <div class="row">\r
    <div class="col-12 col-md-8">\r
      <div class="card card-general">\r
        <div class="event-header">\r
            <div class="event-image-container position-relative">\r
              <img *ngIf="event.image || event.imageUrl" loading="lazy" [src]="getEventImageUrl()" class="card-img-top" style="height: 350px; object-fit: cover;" alt="Event">\r
              <div *ngIf="!event.image && !event.imageUrl" class="event-placeholder text-white text-center" style="height: 350px; display: flex; align-items: center; justify-content: center;">\r
                <div>\r
                  <i class="bi bi-calendar-event" style="font-size: 80px; opacity: 0.3;"></i>\r
                  <p class="mt-3 opacity-75">{{ 'EVENT_DETAIL.NO_IMAGE' | translate }}</p>\r
                </div>\r
              </div>\r
              \r
              <div class="change-image-btn">\r
                <button class="btn btn-light btn-sm shadow" (click)="triggerImageUpload()" [disabled]="uploading">\r
                  <span *ngIf="uploading" class="spinner-border spinner-border-sm me-2"></span>\r
                  <i *ngIf="!uploading" class="bi bi-camera me-1"></i>\r
                  {{ uploading ? ('EVENT_DETAIL.UPLOADING' | translate) : ((event.image || event.imageUrl) ? ('EVENT_DETAIL.CHANGE_IMAGE' | translate) : ('EVENT_DETAIL.ADD_IMAGE' | translate)) }}\r
                </button>\r
                <input type="file" class="d-none" (change)="onImageSelected($event)" accept="image/*">\r
              </div>\r
              \r
              <div class="badge">\r
                <span class="event-badge px-3 py-2 shadow">\r
                  <i class="bi bi-tag-fill me-1"></i>{{ event.type }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="event-info">\r
            <h2 class="event-title">{{ event.name }}</h2>\r
            <p class="event-description">{{ event.description }}</p>\r
          </div>\r
      </div>\r
      <div class="row">\r
        <div class="col-12 col-md-4">\r
          <div class="card card-general">\r
            <div class="stat-card">\r
              <div class="stat-icon price">\r
                <i class="bi bi-currency-dollar"></i>\r
              </div>\r
              <div class="stat-content">\r
                <span class="stat-label">{{ 'EVENT_DETAIL.PRICE' | translate }}</span>\r
                <div class="stat-value">{{ event.price | appCurrency }}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-12 col-md-4">\r
          <div class="card card-general">\r
            <div class="stat-card">\r
              <div class="stat-icon capacity">\r
                <i class="bi bi-people"></i>\r
              </div>\r
              <div class="stat-content">\r
                <span class="stat-label">{{ 'EVENT_DETAIL.CAPACITY' | translate }}</span>\r
                <div class="stat-value">{{ event.capacity }} {{ 'EVENT_DETAIL.SPOTS' | translate }}</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-12 col-md-4">\r
          <div class="card card-general">\r
            <div class="stat-card">\r
              <div class="stat-icon age">\r
                <i class="bi bi-person-badge"></i>\r
              </div>\r
              <div class="stat-content">\r
                <span class="stat-label">{{ 'EVENT_DETAIL.PRICE' | translate }}</span>\r
                <div class="stat-value">$25</div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-12 col-md-4">\r
      <div class="card participants-card event-details-card card-general border-0 shadow-sm mb-4">\r
        <div class="card-header event-details-header text-white py-3">\r
          <h5 class="mb-0">\r
            {{ 'EVENT_DETAIL.EVENT_DETAILS' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="mb-3 pb-3 border-bottom">\r
            <small class="text-muted d-block mb-1">{{ 'EVENT_DETAIL.DATE_TIME' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-calendar3 detail-icon me-2"></i>\r
              <div>\r
                <div class="fw-bold">{{ formatDate(event.time) }}</div>\r
                <small class="text-muted">{{ formatTime(event.time) }}</small>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="mb-3 pb-3 border-bottom" *ngIf="event.place">\r
            <small class="text-muted d-block mb-1">{{ 'EVENT_DETAIL.LOCATION' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-geo-alt detail-icon me-2"></i>\r
              <div class="fw-bold">{{ event.place }}</div>\r
            </div>\r
          </div>\r
          \r
          <div class="mb-3 pb-3 border-bottom">\r
            <small class="text-muted d-block mb-1">{{ 'EVENT_DETAIL.TOTAL_REVENUE' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-cash-stack detail-icon me-2"></i>\r
              <div>\r
                <div class="fw-bold revenue-text">{{ getTotalRevenue() | appCurrency }}</div>\r
                <small class="text-muted">{{ event.price | appCurrency }} \xD7 {{ registeredCount }} {{ 'EVENT_DETAIL.REGISTERED' | translate }}</small>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="mb-3 pb-3 border-bottom">\r
            <small class="text-muted d-block mb-1">{{ 'EVENT_DETAIL.AVAILABILITY' | translate }}</small>\r
            <div class="progress event-progress" style="height: 25px;">\r
              <div class="progress-bar event-progress-bar" [style.width.%]="(registeredCount / event.capacity) * 100">\r
                {{ registeredCount }} / {{ event.capacity }}\r
              </div>\r
            </div>\r
            <small class="text-muted mt-1 d-block">{{ event.capacity - registeredCount }} {{ 'EVENT_DETAIL.SPOTS_REMAINING' | translate }}</small>\r
          </div>\r
          \r
          <div>\r
            <small class="text-muted d-block mb-1">{{ 'EVENT_DETAIL.CREATED' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-clock-history detail-icon me-2"></i>\r
              <small>{{ event.createdAt | date:'MMM d, y - h:mm a' }}</small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card participants-card card-general border-0 shadow-sm">\r
        <div class="card-header participants-header py-3">\r
          <div class="d-flex justify-content-between align-items-center">\r
            <h5 class="mb-0">\r
              <i class="bi bi-people-fill me-2 header-icon"></i>\r
              {{ 'EVENT_DETAIL.REGISTERED_PARTICIPANTS' | translate }}\r
              <span class="badge participants-badge ms-2">{{ event.participants?.length || 0 }}</span>\r
            </h5>\r
            <button class="btn custom-btn-2 btn-add-border" (click)="openAddParticipantModal()">\r
              <i class="bi bi-person-plus me-1"></i>{{ 'EVENT_DETAIL.ADD_PARTICIPANT' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="!event.participants || event.participants.length === 0" class="text-center py-5">\r
            <i class="bi bi-person-x" style="font-size: 60px; opacity: 0.2;"></i>\r
            <p class="text-muted mt-3">{{ 'EVENT_DETAIL.NO_PARTICIPANTS' | translate }}</p>\r
          </div>\r
          \r
          <div *ngIf="event.participants && event.participants.length > 0" class="row g-3">\r
            <div *ngFor="let participant of event.participants" class="col-md-6">\r
              <div class="d-flex align-items-center p-3 border rounded hover-shadow">\r
                <img [src]="participant.child.profilePicture || 'assets/child.png'" \r
                     class="rounded-circle me-3" \r
                     style="width: 50px; height: 50px; object-fit: cover;"\r
                     [alt]="participant.child.firstName">\r
                <div class="flex-grow-1">\r
                  <h6 class="mb-1">{{ participant.child.firstName }} {{ participant.child.lastName }}</h6>\r
                  <small class="text-muted">\r
                    <i class="bi bi-clock me-1"></i>{{ participant.registeredAt | date:'MMM d, y' }}\r
                  </small>\r
                </div>\r
                <span class="badge bg-success">{{ participant.status }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<div class="container-fluid mt-4" *ngIf="loading">\r
  <div class="text-center p-4">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'EVENT_DETAIL.LOADING' | translate }}</span>\r
    </div>\r
    <p class="mt-2">{{ 'EVENT_DETAIL.LOADING_EVENT' | translate }}</p>\r
  </div>\r
</div>\r
\r
<div class="container-fluid mt-4" *ngIf="!loading && !event">\r
  <div class="text-center p-4">\r
    <i class="bi bi-exclamation-triangle fs-1 text-warning"></i>\r
    <h4 class="mt-3">{{ 'EVENT_DETAIL.EVENT_NOT_FOUND' | translate }}</h4>\r
    <p class="text-muted">{{ 'EVENT_DETAIL.EVENT_NOT_FOUND_TEXT' | translate }}</p>\r
    <button class="btn btn-primary" (click)="goBack()">\r
      <i class="bi bi-arrow-left"></i> {{ 'EVENT_DETAIL.BACK_TO_EVENTS' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Add Participant Modal -->\r
<div class="modal fade-transition" id="addParticipantModal" tabindex="-1" *ngIf="showAddParticipantModal">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">\r
          <i class="bi bi-person-plus me-2"></i>{{ 'EVENT_DETAIL.ADD_PARTICIPANT_TO' | translate }} {{ event?.name }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="closeAddParticipantModal()"></button>\r
      </div>\r
      <div class="modal-body">\r
        <div *ngIf="loadingStudents" class="text-center py-4">\r
          <div class="spinner-border" role="status">\r
            <span class="visually-hidden">{{ 'EVENT_DETAIL.LOADING_STUDENTS' | translate }}</span>\r
          </div>\r
          <p class="mt-2">{{ 'EVENT_DETAIL.LOADING_STUDENTS' | translate }}</p>\r
        </div>\r
        \r
        <div *ngIf="!loadingStudents">\r
          <div class="mb-3">\r
            <input type="text" class="form-control" [placeholder]="'EVENT_DETAIL.SEARCH_STUDENTS' | translate" \r
                   [(ngModel)]="searchTerm" (input)="filterStudents()">\r
          </div>\r
          \r
          <div *ngIf="filteredStudents.length === 0" class="text-center py-4">\r
            <i class="bi bi-person-x" style="font-size: 60px; opacity: 0.2;"></i>\r
            <p class="text-muted mt-3">{{ 'EVENT_DETAIL.NO_STUDENTS_FOUND' | translate }}</p>\r
          </div>\r
          \r
          <div class="student-list" style="max-height: 400px; overflow-y: auto;">\r
            <div *ngFor="let student of filteredStudents" class="student-item p-3 border rounded mb-2 hover-shadow" \r
                 [class.selected]="student.id && selectedStudents.includes(student.id)" \r
                 (click)="toggleStudentSelection(student)" \r
                 style="cursor: pointer;">\r
              <div class="d-flex align-items-center">\r
                <img [src]="student.profilePicture || 'assets/child.png'" \r
                     class="rounded-circle me-3" \r
                     style="width: 50px; height: 50px; object-fit: cover;"\r
                     [alt]="student.firstName">\r
                <div class="flex-grow-1">\r
                  <h6 class="mb-1">{{ student.firstName }} {{ student.lastName }}</h6>\r
                  <small class="text-muted">\r
                    <i class="bi bi-calendar me-1"></i>{{ 'EVENT_DETAIL.AGE' | translate }}: {{ calculateAge(student.dateOfBirth) }} {{ 'EVENT_DETAIL.YEARS' | translate }}\r
                  </small>\r
                </div>\r
                <div class="form-check">\r
                  <input class="form-check-input" type="checkbox" \r
                         [checked]="student.id && selectedStudents.includes(student.id)" \r
                         (click)="$event.stopPropagation()">\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div *ngIf="students.length === 0 && !loadingStudents && (event?.participants?.length || 0) > 0" class="alert alert-info mt-3">\r
            <i class="bi bi-info-circle me-2"></i>{{ 'EVENT_DETAIL.ALL_CHILDREN_REGISTERED' | translate }}\r
          </div>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn custom-btn-2 btn-cancel-2" (click)="closeAddParticipantModal()">{{ 'EVENT_DETAIL.CANCEL' | translate }}</button>\r
        <button type="button" class="btn custom-btn-2 btn-add-global-2" \r
                [disabled]="selectedStudents.length === 0 || addingParticipants" \r
                (click)="addSelectedParticipants()">\r
          <span *ngIf="addingParticipants" class="spinner-border spinner-border-sm me-2"></span>\r
          {{ 'EVENT_DETAIL.ADD_PARTICIPANT' | translate }} {{ selectedStudents.length }} {{ selectedStudents.length !== 1 ? 's' : '' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade show" *ngIf="showAddParticipantModal" (click)="closeAddParticipantModal()"></div>\r
`, styles: ["/* src/app/features/event/event-detail/event-detail.component.scss */\nion-content.parent-event-detail-page {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-event-detail-page .inner-scroll {\n  display: block !important;\n}\n.participants-card .card-header h5 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.participants-card .card-header h5 i {\n  font-size: 24px;\n  color: #7dd3c0;\n  margin-right: 12px;\n}\n.card-general {\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.card-general .event-header {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 24px;\n}\n.card-general .event-header .event-image-container {\n  position: relative;\n  width: 100%;\n  height: 280px;\n  border-radius: 12px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      135deg,\n      #d4f4dd 0%,\n      #c8e6c9 100%);\n}\n.card-general .event-header .event-image-container .event-badge {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: #7dbcf9;\n  color: white;\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.card-general .event-header .event-image-container .change-image-btn {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  border: none;\n  font-size: 14px;\n  color: #4f46e5;\n  cursor: pointer;\n}\n.stat-card {\n  background: #f7f7f7;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.stat-card .stat-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n.stat-card .stat-icon.price {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.stat-card .stat-icon.capacity {\n  background: #fce7f3;\n  color: #db2777;\n}\n.stat-card .stat-icon.age {\n  background: #d8f2ed;\n  color: #7cd1c0;\n}\n.hover-shadow .bg-success {\n  background-color: #7cd1c0 !important;\n}\n.event-progress {\n  border-radius: 10px;\n  background-color: rgba(205, 234, 240, 0.3);\n}\n.event-progress-bar {\n  border-radius: 10px;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n}\n.add-participant {\n  background: #7db9ff;\n  border: none;\n  font-weight: 400;\n  color: white;\n  font-size: 14px;\n  padding: 9px 15px;\n}\n.detail-icon {\n  color: #ffffff;\n  background: #7cd1c0;\n  padding: 10px;\n  border-radius: 50px;\n  line-height: 1;\n}\n.card {\n  transition: all 0.3s ease;\n  border: 1px solid rgba(32, 44, 75, 0.1);\n}\n@media (max-width: 420px) {\n  .card {\n    padding: 10px !important;\n  }\n  .card .participants-card .card-header h5 {\n    font-size: 18px;\n  }\n}\n.hover-shadow:hover {\n  box-shadow: 0 4px 12px rgba(32, 44, 75, 0.15);\n  transform: translateY(-2px);\n  transition: all 0.3s ease;\n}\n.event-card .card-img-top {\n  border-radius: 0;\n}\n.event-stat-card {\n  background-color: rgba(205, 234, 240, 0.3);\n  border: 1px solid rgba(205, 234, 240, 0.5);\n  transition: all 0.3s ease;\n}\n.event-stat-card:hover {\n  background-color: rgba(205, 234, 240, 0.5);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(32, 44, 75, 0.1);\n}\n.stat-icon-wrapper {\n  background-color: rgba(254, 204, 253, 0.3);\n}\n.stat-icon {\n  color: #202c4b;\n  line-height: 1;\n}\n.parent-event-detail {\n  padding: 16px;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n.event-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.event-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #202c4b;\n  margin: 0 0 4px 0;\n}\n.event-content {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.event-section {\n  margin-bottom: 24px;\n}\n.event-section:last-child {\n  margin-bottom: 0;\n}\n.section-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #202c4b;\n  margin: 0 0 12px 0;\n}\n.section-text {\n  font-size: 14px;\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n}\n.detail-item i {\n  color: #202c4b;\n  font-size: 16px;\n}\n.detail-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.tag {\n  display: inline-block;\n  padding: 6px 12px;\n  background-color: #feccfd;\n  color: #202c4b;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n.revenue-text {\n  color: #202c4b !important;\n}\n.rounded-circle {\n  border: 2px solid #fff;\n  box-shadow: 0 2px 8px rgba(32, 44, 75, 0.1);\n}\n@media (max-width: 768px) {\n  .event-stat-card {\n    margin-bottom: 1rem;\n  }\n}\n.modal {\n  display: block !important;\n}\n.modal-backdrop {\n  z-index: 1040;\n}\n.modal-dialog {\n  z-index: 1050;\n}\n.student-item {\n  transition: all 0.3s ease;\n}\n.student-item:hover {\n  background-color: rgba(205, 234, 240, 0.1);\n  border-color: rgba(32, 44, 75, 0.2) !important;\n}\n.student-item.selected {\n  background-color: rgba(254, 204, 253, 0.2);\n  border-color: #202c4b !important;\n  border-width: 2px;\n}\n.student-list::-webkit-scrollbar {\n  width: 6px;\n}\n.student-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.student-list::-webkit-scrollbar-thumb {\n  background: #202c4b;\n  border-radius: 3px;\n}\n::ng-deep .parent-detailchild .header-info {\n  padding-bottom: 30px;\n  margin-bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #B8E6F0 0%,\n      #D4F1E8 55%,\n      #f5f5f5 100%);\n}\n::ng-deep .parent-detailchild .overflow-hidden {\n  min-width: 100%;\n  position: relative;\n}\n::ng-deep .parent-detailchild .overflow-hidden .event-image {\n  max-height: 150px;\n  border-radius: 20px;\n  object-fit: cover;\n  object-position: center;\n}\n::ng-deep .parent-detailchild .overflow-hidden .filter-black {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n  border-radius: 20px;\n}\n::ng-deep .parent-detailchild .overflow-hidden .event-title {\n  position: absolute;\n  bottom: 20px;\n  left: 15px;\n  font-size: 24px;\n  color: #fff;\n}\n::ng-deep .event-content {\n  height: 100%;\n}\n::ng-deep .event-content .detail-item:last-child {\n  margin-bottom: 0;\n}\n::ng-deep .event-content .status.pending {\n  color: #664d03;\n}\n::ng-deep .event-content .status.success {\n  color: #0a3622;\n}\n/*# sourceMappingURL=event-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: EventService }, { type: EventParticipantsService }, { type: ChildrenService }, { type: AuthService }, { type: Location }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src/app/features/event/event-detail/event-detail.component.ts", lineNumber: 29 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-XPT3YUSS.js.map
