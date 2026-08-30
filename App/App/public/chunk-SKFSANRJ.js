import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  ExportUtil
} from "./chunk-CAKYQ2FY.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
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
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
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
  Component,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/event/event.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => [1, 2, 3, 4, 5];
function Event_ion_content_0_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "app-skeleton", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275element(5, "app-skeleton", 17)(6, "app-skeleton", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-skeleton", 18)(8, "app-skeleton", 19)(9, "app-skeleton", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20);
    \u0275\u0275element(11, "app-skeleton", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 100)("width", "100px");
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 20)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "70px");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "40%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "90%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "70%");
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 24)("width", "80px");
  }
}
function Event_ion_content_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, Event_ion_content_0_div_8_div_1_Template, 12, 14, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function Event_ion_content_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EVENTS.NO_EVENTS"));
  }
}
function Event_ion_content_0_div_10_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("event-type ", event_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r5.type, " ");
  }
}
function Event_ion_content_0_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function Event_ion_content_0_div_10_div_1_Template_div_click_0_listener($event) {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.viewEventDetail(event_r5);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "div", 29);
    \u0275\u0275element(3, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32)(6, "h4", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34)(9, "span", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 36);
    \u0275\u0275element(12, "i", 37);
    \u0275\u0275elementStart(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 40);
    \u0275\u0275template(19, Event_ion_content_0_div_10_div_1_div_19_Template, 2, 4, "div", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getEventImageUrl(event_r5), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getEventStatusClass(event_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getEventStatus(event_r5));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r5.type);
  }
}
function Event_ion_content_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, Event_ion_content_0_div_10_div_1_Template, 20, 8, "div", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "button", 25);
    \u0275\u0275listener("click", function Event_ion_content_0_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275element(4, "i", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedEvents)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 3, "EVENTS.LOAD_MORE"), " ");
  }
}
function Event_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "ion-refresher", 3);
    \u0275\u0275listener("ionRefresh", function Event_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "app-parent-child-header-simple", 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
    \u0275\u0275template(8, Event_ion_content_0_div_8_Template, 2, 2, "div", 8)(9, Event_ion_content_0_div_9_Template, 5, 3, "div", 9)(10, Event_ion_content_0_div_10_Template, 7, 5, "div", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 4, "EVENTS.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.events.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.events.length > 0);
  }
}
function Event_div_1_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementStart(2, "span", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", item_r7.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
  }
}
function Event_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "span", 66);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EVENTS.LOADING"));
  }
}
function Event_div_1_div_22_div_1_div_3_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 96)(1, "a", 97);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_div_3_li_15_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const event_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editEvent(event_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 101);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "EVENTS.EDIT"), " ");
  }
}
function Event_div_1_div_22_div_1_div_3_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 96)(1, "a", 97);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_div_3_li_16_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const event_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.deleteEvent(event_r10.id);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "i", 102);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "EVENTS.DELETE"), " ");
  }
}
function Event_div_1_div_22_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "a", 93);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_div_3_Template_a_click_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      $event.stopPropagation();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(3, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 95)(5, "li", 96)(6, "a", 97);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_div_3_Template_a_click_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const event_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.viewEventDetail(event_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(7, "i", 98);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li", 96)(11, "a", 97);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_div_3_Template_a_click_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const event_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.viewParticipants(event_r10);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(12, "i", 99);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, Event_div_1_div_22_div_1_div_3_li_15_Template, 5, 3, "li", 100)(16, Event_div_1_div_22_div_1_div_3_li_16_Template, 5, 3, "li", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 4, "EVENTS.VIEW_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 6, "EVENTS.PARTICIPANTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function Event_div_1_div_22_div_1_div_38_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 108);
  }
  if (rf & 2) {
    const participant_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275styleProp("z-index", 10 - i_r14);
    \u0275\u0275property("src", participant_r13.child.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl)("title", participant_r13.child.firstName + " " + participant_r13.child.lastName);
  }
}
function Event_div_1_div_22_div_1_div_38_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", "+" + (event_r10.participants.length - 3) + " " + \u0275\u0275pipeBind1(1, 2, "EVENTS.MORE_PARTICIPANTS"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" +", event_r10.participants.length - 3, " ");
  }
}
function Event_div_1_div_22_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275template(2, Event_div_1_div_22_div_1_div_38_img_2_Template, 1, 4, "img", 105)(3, Event_div_1_div_22_div_1_div_38_span_3_Template, 3, 4, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 107);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", event_r10.participants.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r10.participants.length > 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", event_r10.participants.length, " ", \u0275\u0275pipeBind1(6, 4, "EVENTS.REGISTERED"));
  }
}
function Event_div_1_div_22_div_1_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 110);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EVENTS.NO_PARTICIPANTS"));
  }
}
function Event_div_1_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "div", 72);
    \u0275\u0275template(3, Event_div_1_div_22_div_1_div_3_Template, 17, 8, "div", 73);
    \u0275\u0275elementStart(4, "button", 74);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_Template_button_click_4_listener() {
      const event_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewEventDetail(event_r10));
    });
    \u0275\u0275elementStart(5, "p", 75);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "img", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 77)(9, "button", 74);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_Template_button_click_9_listener() {
      const event_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewEventDetail(event_r10));
    });
    \u0275\u0275elementStart(10, "h5", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 79);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 80)(15, "div", 81)(16, "div", 82)(17, "small", 83);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 84);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 82)(24, "small", 83);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 84);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 82)(31, "small", 83);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 85);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "div", 86)(37, "div", 87);
    \u0275\u0275template(38, Event_div_1_div_22_div_1_div_38_Template, 7, 6, "div", 88)(39, Event_div_1_div_22_div_1_small_39_Template, 3, 3, "small", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 90);
    \u0275\u0275listener("click", function Event_div_1_div_22_div_1_Template_button_click_40_listener() {
      const event_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewEventDetail(event_r10));
    });
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit() || ctx_r1.canDelete());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r10.type);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getEventImageUrl(event_r10), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r10.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 17, "EVENTS.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 19, event_r10.price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "EVENTS.CAPACITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", event_r10.capacity, " ", \u0275\u0275pipeBind1(29, 23, "EVENTS.PEOPLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 25, "EVENTS.STATUS"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getEventStatusClass(event_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getEventStatus(event_r10));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r10.participants && event_r10.participants.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r10.participants || event_r10.participants.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 27, "EVENTS.VIEW_DETAILS"));
  }
}
function Event_div_1_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "EVENTS.NO_EVENTS_FOUND"));
  }
}
function Event_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275template(1, Event_div_1_div_22_div_1_Template, 43, 29, "div", 68)(2, Event_div_1_div_22_div_2_Template, 4, 3, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedEvents)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredEvents.length === 0 && !ctx_r1.loading);
  }
}
function Event_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "button", 25);
    \u0275\u0275listener("click", function Event_div_1_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "EVENTS.LOAD_MORE"), " ");
  }
}
function Event_div_1_div_24_tr_37_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function Event_div_1_div_24_tr_37_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const event_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editEvent(event_r17));
    });
    \u0275\u0275element(1, "i", 131);
    \u0275\u0275elementEnd();
  }
}
function Event_div_1_div_24_tr_37_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 132);
    \u0275\u0275listener("click", function Event_div_1_div_24_tr_37_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const event_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteEvent(event_r17.id));
    });
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275elementEnd();
  }
}
function Event_div_1_div_24_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 122)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 123);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "div", 124)(26, "button", 125);
    \u0275\u0275listener("click", function Event_div_1_div_24_tr_37_Template_button_click_26_listener() {
      const event_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewEventDetail(event_r17));
    });
    \u0275\u0275element(27, "i", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 125);
    \u0275\u0275listener("click", function Event_div_1_div_24_tr_37_Template_button_click_28_listener() {
      const event_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.viewParticipants(event_r17));
    });
    \u0275\u0275element(29, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, Event_div_1_div_24_tr_37_button_30_Template, 2, 0, "button", 128)(31, Event_div_1_div_24_tr_37_button_31_Template, 2, 0, "button", 129);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r17.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r17.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r17.type);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getEventStatusClass(event_r17));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getEventStatus(event_r17));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, event_r17.price));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", event_r17.ageFrom, "-", event_r17.ageTo, " ", \u0275\u0275pipeBind1(18, 17, "EVENTS.YEARS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", event_r17.capacity, " ", \u0275\u0275pipeBind1(21, 19, "EVENTS.PEOPLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r17.time);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function Event_div_1_div_24_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 134);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EVENTS.NO_EVENTS_FOUND"), " ");
  }
}
function Event_div_1_div_24_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "button", 25);
    \u0275\u0275listener("click", function Event_div_1_div_24_div_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "EVENTS.LOAD_MORE"), " ");
  }
}
function Event_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 113)(2, "div", 114)(3, "h5", 115);
    \u0275\u0275element(4, "i", 116);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 117)(9, "table", 118)(10, "thead", 119)(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, Event_div_1_div_24_tr_37_Template, 32, 21, "tr", 120)(38, Event_div_1_div_24_tr_38_Template, 4, 3, "tr", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 86)(40, "span", 110);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, Event_div_1_div_24_div_44_Template, 5, 3, "div", 121);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 16, "EVENTS.EVENTS_LIST"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "EVENTS.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "EVENTS.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 22, "EVENTS.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 24, "EVENTS.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "EVENTS.AGE_RANGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "EVENTS.CAPACITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 30, "EVENTS.TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 32, "EVENTS.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayedEvents)("ngForTrackBy", ctx_r1.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredEvents.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(42, 34, "EVENTS.TOTAL"), ": ", ctx_r1.displayedEvents.length, " ", \u0275\u0275pipeBind1(43, 36, "EVENTS.EVENT_S"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hasMoreEvents());
  }
}
function Event_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "app-title-page", 43);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "div", 44)(5, "h4", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46)(9, "div", 47);
    \u0275\u0275element(10, "i", 48);
    \u0275\u0275elementStart(11, "input", 49);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Event_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Event_div_1_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ng-select", 50);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function Event_div_1_Template_ng_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sortBy, $event) || (ctx_r1.sortBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function Event_div_1_Template_ng_select_change_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSortChange());
    });
    \u0275\u0275template(15, Event_div_1_ng_template_15_Template, 4, 4, "ng-template", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 52)(17, "button", 53);
    \u0275\u0275listener("click", function Event_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("list"));
    });
    \u0275\u0275element(18, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 55);
    \u0275\u0275listener("click", function Event_div_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setViewMode("grid"));
    });
    \u0275\u0275element(20, "i", 56);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, Event_div_1_div_21_Template, 5, 3, "div", 57)(22, Event_div_1_div_22_Template, 3, 3, "div", 58)(23, Event_div_1_div_23_Template, 5, 3, "div", 59)(24, Event_div_1_div_24_Template, 45, 38, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 24, "EVENTS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 26, "EVENTS.SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.titleActions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 28, "EVENTS.EVENTS_GRID"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 30, "EVENTS.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sortBy);
    \u0275\u0275property("items", ctx_r1.sortOptions)("placeholder", \u0275\u0275pipeBind1(14, 32, "EVENTS.SORT_BY"))("clearable", false)("searchable", false);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-light", ctx_r1.viewMode === "list")("primary-hover", ctx_r1.viewMode !== "list");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r1.viewMode === "grid")("primary-hover", ctx_r1.viewMode !== "grid");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "grid" && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "grid" && !ctx_r1.loading && ctx_r1.hasMoreEvents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "list" && !ctx_r1.loading);
  }
}
var Event = class _Event {
  eventService;
  authService;
  router;
  translate;
  pageTitleService;
  langChangeSub;
  eventsSub;
  events = [];
  filteredEvents = [];
  displayedEvents = [];
  loading = false;
  userRole = null;
  viewMode = "grid";
  sortBy = "created-desc";
  showSortMenu = false;
  showExportDropdown = false;
  eventsPerPage = 5;
  currentPage = 1;
  searchTerm = "";
  breadcrumbs = [];
  titleActions = [];
  // Options for ng-select
  sortOptions = [];
  get isParent() {
    return this.authService.isParent();
  }
  constructor(eventService, authService, router, translate, pageTitleService) {
    this.eventService = eventService;
    this.authService = authService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("EVENTS.TITLE"));
    this.userRole = this.authService.getUserRole();
    this.updateTranslatedContent();
    this.loadEvents();
    this.eventsSub = this.eventService.events$.subscribe((events) => {
      this.events = events;
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.updateTranslatedContent();
      this.pageTitleService.setTitle(this.translate.instant("EVENTS.TITLE"));
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
    this.eventsSub?.unsubscribe();
  }
  updateTranslatedContent() {
    this.initBreadcrumbs();
    this.initSortOptions();
    this.setupTitleActions();
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EVENTS") }
    ];
  }
  initSortOptions() {
    this.sortOptions = [
      { value: "name-asc", label: this.translate.instant("EVENTS.SORT_AZ"), icon: "bi-sort-alpha-down" },
      { value: "name-desc", label: this.translate.instant("EVENTS.SORT_ZA"), icon: "bi-sort-alpha-up" },
      { value: "price-asc", label: this.translate.instant("EVENTS.SORT_PRICE_LOW"), icon: "bi-sort-numeric-down" },
      { value: "price-desc", label: this.translate.instant("EVENTS.SORT_PRICE_HIGH"), icon: "bi-sort-numeric-up" },
      { value: "created-desc", label: this.translate.instant("EVENTS.SORT_NEWEST"), icon: "bi-clock-history" },
      { value: "created-asc", label: this.translate.instant("EVENTS.SORT_OLDEST"), icon: "bi-clock" }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EVENTS.EXPORT"),
        class: "btn btn-light me-2",
        action: () => {
        },
        dropdown: {
          items: [
            {
              label: this.translate.instant("EVENTS.EXPORT_PDF"),
              icon: "bi bi-file-earmark-pdf",
              action: () => this.exportToPDF()
            },
            {
              label: this.translate.instant("EVENTS.EXPORT_EXCEL"),
              icon: "bi bi-file-earmark-excel",
              action: () => this.exportToExcel()
            }
          ]
        }
      }
    ];
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      this.titleActions.push({
        label: this.translate.instant("EVENTS.ADD_EVENT"),
        class: "btn-add-global-2",
        action: () => this.router.navigate(["/events/add"])
      });
    }
  }
  loadEvents() {
    this.loading = true;
    this.eventService.loadEvents().subscribe({
      next: (events) => {
        if (this.isParent) {
          const now = /* @__PURE__ */ new Date();
          this.events = events.filter((event) => new Date(event.time) > now);
        } else {
          this.events = events;
        }
        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading events:", error);
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENTS.LOAD_ERROR")
        });
      }
    });
  }
  editEvent(event) {
    this.router.navigate(["/events/edit", event.id]);
  }
  deleteEvent(id) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EVENTS.DELETE_CONFIRM_TITLE"),
      text: this.translate.instant("EVENTS.DELETE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("EVENTS.YES_DELETE"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEvent(id).subscribe({
          next: () => {
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
            this.loadEvents();
          },
          error: (error) => {
            console.error("Error deleting event:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("EVENTS.DELETE_ERROR")
            });
          }
        });
      }
    });
  }
  canEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }
  canDelete() {
    return this.authService.isAdmin();
  }
  setViewMode(mode) {
    this.viewMode = mode;
  }
  setSortBy(sortBy) {
    this.sortBy = sortBy;
    this.showSortMenu = false;
    this.applySort();
  }
  onSortChange() {
    this.applySort();
  }
  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }
  applyFilter() {
    let filtered = [...this.events];
    if (this.searchTerm.trim()) {
      filtered = filtered.filter((event) => event.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    if (this.isParent) {
      filtered.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    } else {
      switch (this.sortBy) {
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "created-desc":
          filtered.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
          break;
        case "created-asc":
          filtered.sort((a, b) => new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime());
          break;
      }
    }
    this.filteredEvents = filtered;
    this.currentPage = 1;
    this.updateDisplayedEvents();
  }
  applySort() {
    this.applyFilter();
  }
  updateDisplayedEvents() {
    const endIndex = this.currentPage * this.eventsPerPage;
    this.displayedEvents = this.filteredEvents.slice(0, endIndex);
  }
  loadMore() {
    this.currentPage++;
    this.updateDisplayedEvents();
  }
  hasMoreEvents() {
    return this.displayedEvents.length < this.filteredEvents.length;
  }
  getSortLabel() {
    const option = this.sortOptions.find((o) => o.value === this.sortBy);
    return option ? option.label : this.translate.instant("EVENTS.SORT_NEWEST");
  }
  viewParticipants(event) {
    this.router.navigate(["/events", event.id, "participants"]);
  }
  viewEventDetail(event) {
    this.router.navigate(["/events/detail", event.id]);
  }
  isEventActive(event) {
    const eventDate = new Date(event.time);
    const now = /* @__PURE__ */ new Date();
    return eventDate > now;
  }
  getEventStatus(event) {
    return this.isEventActive(event) ? this.translate.instant("EVENTS.STATUS_ACTIVE") : this.translate.instant("EVENTS.STATUS_EXPIRED");
  }
  getEventStatusClass(event) {
    return this.isEventActive(event) ? "bg-success" : "bg-danger";
  }
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  exportToPDF() {
    const data = this.filteredEvents.map((event) => ({
      "Name": event.name,
      "Type": event.type,
      "Price": `$${event.price}`,
      "Age Range": `${event.ageFrom}-${event.ageTo} years`,
      "Capacity": event.capacity,
      "Date & Time": new Date(event.time).toLocaleString(),
      "Status": this.getEventStatus(event),
      "Participants": event.participants?.length || 0
    }));
    ExportUtil.exportToPDF(data, this.translate.instant("EVENTS.REPORT_TITLE"));
  }
  exportToExcel() {
    const data = this.filteredEvents.map((event) => ({
      "Name": event.name,
      "Type": event.type,
      "Price": `$${event.price}`,
      "Age Range": `${event.ageFrom}-${event.ageTo} years`,
      "Capacity": event.capacity,
      "Date & Time": new Date(event.time).toLocaleString(),
      "Status": this.getEventStatus(event),
      "Participants": event.participants?.length || 0
    }));
    ExportUtil.exportToExcel(data, this.translate.instant("EVENTS.REPORT_TITLE"));
  }
  // TrackBy function for ngFor performance optimization
  trackById(index, item) {
    return item.id;
  }
  /**
   * Get the event banner image URL, preferring file-based URL over Base64
   */
  getEventImageUrl(event) {
    if (event.imageUrl && event.imageUrl.trim() !== "") {
      return this.getFullUrl(event.imageUrl);
    }
    if (event.image && event.image.trim() !== "") {
      return this.getFullUrl(event.image);
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
  // Pull-to-refresh handler for Ionic refresher
  onRefresh(event) {
    this.loadEvents();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  static \u0275fac = function Event_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Event)(\u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Event, selectors: [["app-event"]], decls: 2, vars: 2, consts: [["class", "parent-events", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], [1, "parent-events"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "font-inter"], [3, "title"], [1, "body", "container-fluid"], [1, "main-information"], ["class", "events-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "events-list"], ["class", "events-card mb-3", "style", "background: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);", 4, "ngFor", "ngForOf"], [1, "events-card", "mb-3", 2, "background", "white", "border-radius", "12px", "padding", "16px", "box-shadow", "0 1px 3px rgba(0,0,0,0.08)"], [1, "event-upper", "d-flex", "gap-3", "mb-3"], ["borderRadius", "12px", 3, "height", "width"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "mb-2"], [3, "height", "width"], [1, "mb-2", 3, "height", "width"], [1, "mb-1", 3, "height", "width"], [1, "event-bottom_content"], [1, "empty-state"], [1, "bi", "bi-bell-slash"], ["class", "events-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "load-more-container"], [1, "custom-btn-2", "btn-add-border", "mb-4", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "events-card", 3, "click"], [1, "event-upper"], [1, "event-avatar"], ["loading", "lazy", "alt", "", 1, "banner-img", "img-fluid", 3, "src"], [1, "eventparent-content"], [1, "eventparent-header"], [1, "event-name"], [1, "event-active"], [1, "badge"], [1, "mb-2"], [1, "bi", "bi-calendar3", "pe-2"], [1, "event-time"], [1, "event-message"], [1, "event-tag-bottom"], [3, "class", 4, "ngIf"], [1, "container-fluid", "mt-4"], ["icon", "bi bi-calendar-event", 3, "title", "subtitle", "breadcrumbs", "actions"], [1, "bg-white", "p-3", "border", "rounded-1", "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "mb-4"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "search-box"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["bindLabel", "label", "bindValue", "value", 1, "filter-select", 3, "ngModelChange", "change", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "me-2"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "text-center d-flex justify-content-center mt-4", 4, "ngIf"], [4, "ngIf"], [1, "option-with-image"], [2, "font-size", "16px", "color", "#7dd3c0"], [1, "option-title"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "col-12 text-center", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "card", "col-xl-4", "card-event", "circ", "card-general"], [1, "card-banner"], ["class", "d-flex action-edit-add", 4, "ngIf"], [1, "link-to-event", 3, "click"], [1, "category-tag", "popular"], ["loading", "lazy", "alt", "", 1, "banner-img", 3, "src"], [1, "card-body"], [1, "blog-title"], [1, "blog-description"], [1, "card-profile"], [1, "row", "mb-3"], [1, "col-xl-4"], [1, "information-title"], [1, "information-description"], [1, "information-description", "badge"], [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"], [1, "d-flex", "align-items-center"], ["class", "d-flex align-items-center me-2", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "btn", "btn-outline-info", "btn-sm", "btn-footer", 3, "click"], [1, "d-flex", "action-edit-add"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-white", "btn-icon", "btn-sm", "d-flex", "align-items-center", "justify-content-center", "p-0", 3, "click"], [1, "bi", "bi-three-dots-vertical", "icon-action"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], [1, "dropdown-item_list"], ["href", "#", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "bi", "bi-eye", "me-2"], [1, "bi", "bi-people-fill", "me-2"], ["class", "dropdown-item_list", 4, "ngIf"], [1, "bi", "bi-pencil-square", "me-2"], [1, "bi", "bi-trash3", "me-2"], [1, "d-flex", "align-items-center", "me-2"], [1, "d-flex"], ["class", "rounded-circle border border-2 border-white", "style", "width: 32px; height: 32px; object-fit: cover; margin-left: -8px;", 3, "src", "zIndex", "title", 4, "ngFor", "ngForOf"], ["class", "rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center border border-2 border-white", "style", "width: 32px; height: 32px; font-size: 12px; margin-left: -8px; z-index: 1;", 3, "title", 4, "ngIf"], [1, "text-muted", "ms-2"], [1, "rounded-circle", "border", "border-2", "border-white", 2, "width", "32px", "height", "32px", "object-fit", "cover", "margin-left", "-8px", 3, "src", "title"], [1, "rounded-circle", "bg-secondary", "text-white", "d-flex", "align-items-center", "justify-content-center", "border", "border-2", "border-white", 2, "width", "32px", "height", "32px", "font-size", "12px", "margin-left", "-8px", "z-index", "1", 3, "title"], [1, "text-muted"], [1, "col-12", "text-center"], [1, "text-center", "d-flex", "justify-content-center", "mt-4"], [1, "card", "flex-fill", "card-general", "card-recently", "mb-3"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], [1, "bi", "bi-list-task"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "text-center mt-3", 4, "ngIf"], [1, "name-last"], [1, "badge", "bg-primary"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "bi", "bi-people"], ["class", "btn btn-sm btn-edit", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-remove", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-edit", 3, "click"], [1, "bi", "bi-pencil-square"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-trash3"], ["colspan", "8", 1, "text-center", "py-4"], [1, "text-center", "mt-3"]], template: function Event_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Event_ion_content_0_Template, 11, 6, "ion-content", 0)(1, Event_div_1_Template, 25, 34, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitlePage, ParentChildHeaderSimpleComponent, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent, TranslatePipe, AppCurrencyPipe], styles: ['\n\nion-content.parent-events[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-events[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.card-event[_ngcontent-%COMP%] {\n  overflow: hidden;\n  box-shadow: 0px 2px 20px var(--clr-gray-light);\n  background: white;\n  position: relative;\n  width: 100%;\n  margin: 1rem 0;\n  transition: 250ms all ease-in-out;\n}\n.card-event[_ngcontent-%COMP%]   .category-tag[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  background: #7dbcf9;\n  padding: 0.5rem 1.3rem 0.5rem 1rem;\n  text-transform: uppercase;\n  position: absolute;\n  z-index: 1;\n  top: 1rem;\n  border-radius: 0 2rem 2rem 0;\n  left: 0;\n}\n.card-event[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 12rem;\n  width: 100%;\n}\n.card-event[_ngcontent-%COMP%]   .blog-description[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-event[_ngcontent-%COMP%]   .link-to-event[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n  text-align: left;\n}\n.card-event[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background: none !important;\n  color: #198754 !important;\n  font-weight: 700 !important;\n}\n.card-event[_ngcontent-%COMP%]   .badge.bg-danger[_ngcontent-%COMP%] {\n  background: none !important;\n  color: #dc3545 !important;\n  font-weight: 700 !important;\n}\n.card-event[_ngcontent-%COMP%]   .information-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-event[_ngcontent-%COMP%]   .information-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(32, 44, 75);\n}\n.card-event[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.card-event[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .action-edit-add[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.card-event[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .action-edit-add[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  z-index: 9;\n}\n.card-event[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .action-edit-add[_ngcontent-%COMP%]   a.btn-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n  border-radius: 5px !important;\n}\n.card-event[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   .action-edit-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.icon-action[_ngcontent-%COMP%] {\n  color: #fff;\n  z-index: 999;\n  padding: 1px 6px;\n}\n.dropdown-item_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #202C4B !important;\n  padding: 0.594rem 0.9375rem;\n  font-size: 14px;\n}\n.dropdown-item_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  background-color: #F4F6FA;\n}\n.card-banner[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1882352941);\n  opacity: 1;\n  height: 100%;\n}\n.card-banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%] {\n  margin: 8px;\n  padding: 16px;\n  background: #fff;\n  gap: 16px;\n  position: relative;\n  transition: all 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-upper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-upper[_ngcontent-%COMP%]   .event-avatar[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  margin-right: 1rem;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-upper[_ngcontent-%COMP%]   .event-avatar[_ngcontent-%COMP%]   .banner-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .eventparent-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 3px;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .eventparent-header[_ngcontent-%COMP%]   .event-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n  line-height: 1.3;\n  text-transform: capitalize;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .eventparent-header[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .event-message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #495057;\n  line-height: 1.4;\n  margin: 0 0 12px 0;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  border-radius: 50px;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge.bg-danger[_ngcontent-%COMP%] {\n  background-color: #fde3c6 !important;\n  color: #92531a;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .eventparent-content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background-color: #c5f1da !important;\n  color: #277247;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  border-radius: 50px;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge.bg-danger[_ngcontent-%COMP%] {\n  background-color: #fde3c6 !important;\n  color: #92531a;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-active[_ngcontent-%COMP%]   .badge.bg-success[_ngcontent-%COMP%] {\n  background-color: #c5f1da !important;\n  color: #277247;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  justify-self: right;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0.35em 0.7em;\n  border-radius: 50px;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Workshop[_ngcontent-%COMP%] {\n  background-color: #d6cdf7;\n  color: #6957a9;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Sports[_ngcontent-%COMP%] {\n  background-color: #95ecdc;\n  color: #3a8073;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Meeting[_ngcontent-%COMP%] {\n  background-color: #d8cff8;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Festival[_ngcontent-%COMP%] {\n  background-color: #ffcabd;\n  color: #d97357;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Outdoor[_ngcontent-%COMP%] {\n  background-color: #e6ff8c;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Special[_ngcontent-%COMP%] {\n  background-color: #f7eede;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Music[_ngcontent-%COMP%] {\n  background: #d9d9d9;\n  color: #5e5050;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Crafts[_ngcontent-%COMP%] {\n  background: #fef6c9;\n}\n.events-list[_ngcontent-%COMP%]   .events-card[_ngcontent-%COMP%]   .event-bottom_content[_ngcontent-%COMP%]   .event-tag-bottom[_ngcontent-%COMP%]   .event-type.Party[_ngcontent-%COMP%] {\n  background: #d6b34e;\n  color: #5d4d1d;\n}\n.events-list[_ngcontent-%COMP%]   .load-more-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #4886ed;\n  border: 1px solid #4886ed;\n  color: white;\n  margin-top: 14px;\n  border-radius: 14px;\n}\n  .header-info {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=event.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Event, [{
    type: Component,
    args: [{ selector: "app-event", standalone: true, imports: [CommonModule, FormsModule, TitlePage, ParentChildHeaderSimpleComponent, TranslateModule, NgSelectModule, AppCurrencyPipe, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-events">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild font-inter">\r
    <app-parent-child-header-simple\r
      [title]="'EVENTS.TITLE' | translate"\r
    >\r
    </app-parent-child-header-simple>\r
\r
  <div class="body container-fluid">\r
      <div class="main-information">\r
        <!-- Loading Skeleton -->\r
        <div *ngIf="loading" class="events-list">\r
          <div *ngFor="let i of [1,2,3,4,5]" class="events-card mb-3" style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">\r
            <div class="event-upper d-flex gap-3 mb-3">\r
              <app-skeleton [height]="100" [width]="'100px'" borderRadius="12px"></app-skeleton>\r
              <div class="flex-grow-1">\r
                <div class="d-flex justify-content-between mb-2">\r
                  <app-skeleton [height]="20" [width]="'60%'"></app-skeleton>\r
                  <app-skeleton [height]="24" [width]="'70px'" borderRadius="12px"></app-skeleton>\r
                </div>\r
                <app-skeleton [height]="16" [width]="'40%'" class="mb-2"></app-skeleton>\r
                <app-skeleton [height]="14" [width]="'90%'" class="mb-1"></app-skeleton>\r
                <app-skeleton [height]="14" [width]="'70%'"></app-skeleton>\r
              </div>\r
            </div>\r
            <div class="event-bottom_content">\r
              <app-skeleton [height]="24" [width]="'80px'" borderRadius="12px"></app-skeleton>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="!loading && events.length === 0" class="empty-state">\r
          <i class="bi bi-bell-slash"></i>\r
          <h3>{{ 'EVENTS.NO_EVENTS' | translate }}</h3>\r
        </div>\r
\r
        <div *ngIf="!loading && events.length > 0" class="events-list">\r
          <div *ngFor="let event of displayedEvents; trackBy: trackById"\r
               class="events-card" (click)="viewEventDetail(event); $event.preventDefault()"\r
            >\r
            <div class="event-upper">\r
              <div class="event-avatar" >\r
                <img loading="lazy" class="banner-img img-fluid" [src]="getEventImageUrl(event)" alt="">\r
              </div>\r
              <div class="eventparent-content">\r
                <div class="eventparent-header">\r
                  <h4 class="event-name">{{ event.name }}</h4>\r
                <div class="event-active">\r
                  <span class="badge" [class]="getEventStatusClass(event)">{{ getEventStatus(event) }}</span>\r
                </div>\r
                </div>\r
                <div class="mb-2">\r
                  <i class="bi bi-calendar3 pe-2"></i>\r
                  <span class="event-time">{{ event.time }}</span>\r
                </div>\r
                <p class="event-message">{{event.description}}</p>\r
              </div>\r
            </div>\r
            <div class="event-bottom_content">\r
              <div class="event-tag-bottom">\r
                <div *ngIf="event.type" class="event-type {{ event.type }}">\r
                  {{ event.type }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="load-more-container">\r
            <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMore()">\r
              <i class="bi bi-plus-circle me-2"></i>{{ 'EVENTS.LOAD_MORE' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ion-content>\r
\r
<div class="container-fluid mt-4" *ngIf="!isParent">\r
  <app-title-page\r
    [title]="'EVENTS.TITLE' | translate"\r
    [subtitle]="'EVENTS.SUBTITLE' | translate"\r
    icon="bi bi-calendar-event"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- View Controls -->\r
  <div class="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap mb-4">\r
    <h4 class="title-filter">{{ 'EVENTS.EVENTS_GRID' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- Search -->\r
      <div class="search-box">\r
        <i class="bi bi-search search-icon"></i>\r
        <input\r
          type="text"\r
          class="form-control search-input"\r
          [placeholder]="'EVENTS.SEARCH_PLACEHOLDER' | translate"\r
          [(ngModel)]="searchTerm"\r
          (input)="applyFilter()">\r
      </div>\r
\r
      <!-- Sort Select with ng-select -->\r
      <ng-select\r
        class="filter-select"\r
        [(ngModel)]="sortBy"\r
        [items]="sortOptions"\r
        bindLabel="label"\r
        bindValue="value"\r
        [placeholder]="'EVENTS.SORT_BY' | translate"\r
        [clearable]="false"\r
        [searchable]="false"\r
        (change)="onSortChange()">\r
        <ng-template ng-option-tmp let-item="item">\r
          <div class="option-with-image">\r
            <i class="bi {{item.icon}}" style="font-size: 16px; color: #7dd3c0;"></i>\r
            <span class="option-title">{{ item.label }}</span>\r
          </div>\r
        </ng-template>\r
      </ng-select>\r
\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 me-2">\r
        <button\r
          class="btn btn-icon btn-sm me-1"\r
          [class.bg-light]="viewMode === 'list'"\r
          [class.primary-hover]="viewMode !== 'list'"\r
          (click)="setViewMode('list')">\r
          <i class="bi bi-list-ul"></i>\r
        </button>\r
        <button\r
          class="btn btn-icon btn-sm"\r
          [class.bg-light]="viewMode === 'grid'"\r
          [class.primary-hover]="viewMode !== 'grid'"\r
          (click)="setViewMode('grid')">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'EVENTS.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div class="row" *ngIf="viewMode === 'grid' && !loading">\r
    <div *ngFor="let event of displayedEvents; trackBy: trackById" class="col-xl-4 col-md-6 d-flex">\r
\r
      <div class="card col-xl-4 card-event circ card-general">\r
          <div class="card-banner">\r
            <div class="d-flex action-edit-add" *ngIf="canEdit() || canDelete()">\r
                <div class="dropdown">\r
                  <a class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center p-0" data-bs-toggle="dropdown" (click)="$event.stopPropagation(); $event.preventDefault()">\r
                    <i class="bi bi-three-dots-vertical icon-action"></i>\r
                  </a>\r
                  <ul class="dropdown-menu dropdown-menu-end p-3">\r
                    <li class="dropdown-item_list">\r
                      <a class="dropdown-item rounded-1" href="#" (click)="viewEventDetail(event); $event.preventDefault()">\r
                        <i class="bi bi-eye me-2"></i>{{ 'EVENTS.VIEW_DETAILS' | translate }}\r
                      </a>\r
                    </li>\r
                    <li class="dropdown-item_list">\r
                      <a class="dropdown-item rounded-1" href="#" (click)="viewParticipants(event); $event.preventDefault()">\r
                        <i class="bi bi-people-fill me-2"></i>{{ 'EVENTS.PARTICIPANTS' | translate }}\r
                      </a>\r
                    </li>\r
                    <li *ngIf="canEdit()" class="dropdown-item_list">\r
                      <a class="dropdown-item rounded-1" href="#" (click)="editEvent(event); $event.preventDefault()">\r
                        <i class="bi bi-pencil-square me-2"></i>{{ 'EVENTS.EDIT' | translate }}\r
                      </a>\r
                    </li>\r
                    <li *ngIf="canDelete()" class="dropdown-item_list">\r
                      <a class="dropdown-item rounded-1" href="#" (click)="deleteEvent(event.id!); $event.preventDefault()">\r
                        <i class="bi bi-trash3 me-2"></i>{{ 'EVENTS.DELETE' | translate }}\r
                      </a>\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            <button class="link-to-event" (click)="viewEventDetail(event)">\r
\r
              <p class="category-tag popular">{{ event.type }}</p>\r
              <img loading="lazy" class="banner-img" [src]="getEventImageUrl(event)" alt="">\r
            </button>\r
          </div>\r
          <div class="card-body">\r
            <button class="link-to-event" (click)="viewEventDetail(event)"><h5 class="blog-title">{{ event.name }}</h5></button>\r
            <p class="blog-description">{{ event.description }}</p>\r
            <div class="card-profile">\r
              <div class="row mb-3">\r
                <div class="col-xl-4">\r
                  <small class="information-title">{{ 'EVENTS.PRICE' | translate }}</small>\r
                  <div class="information-description">{{ event.price | appCurrency }}</div>\r
                </div>\r
                <div class="col-xl-4">\r
                  <small class="information-title">{{ 'EVENTS.CAPACITY' | translate }}</small>\r
                  <div class="information-description">{{ event.capacity }} {{ 'EVENTS.PEOPLE' | translate }}</div>\r
                </div>\r
                <div class="col-xl-4">\r
                  <small class="information-title">{{ 'EVENTS.STATUS' | translate }}</small>\r
                  <div class="information-description badge" [class]="getEventStatusClass(event)">{{ getEventStatus(event) }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="card-footer d-flex align-items-center justify-content-between">\r
            <div class="d-flex align-items-center">\r
              <div class="d-flex align-items-center me-2" *ngIf="event.participants && event.participants.length > 0">\r
                <div class="d-flex">\r
                  <img *ngFor="let participant of event.participants.slice(0, 3); let i = index"\r
                  [src]="participant.child.profilePicture || 'assets/child.png'"\r
                  class="rounded-circle border border-2 border-white"\r
                  style="width: 32px; height: 32px; object-fit: cover; margin-left: -8px;"\r
                  [style.zIndex]="10 - i"\r
                  [title]="participant.child.firstName + ' ' + participant.child.lastName">\r
                  <span *ngIf="event.participants.length > 3"\r
                        class="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center border border-2 border-white"\r
                        style="width: 32px; height: 32px; font-size: 12px; margin-left: -8px; z-index: 1;"\r
                        [title]="'+' + (event.participants.length - 3) + ' ' + ('EVENTS.MORE_PARTICIPANTS' | translate)">\r
                    +{{ event.participants.length - 3 }}\r
                  </span>\r
                </div>\r
                <small class="text-muted ms-2">{{ event.participants.length }} {{ 'EVENTS.REGISTERED' | translate }}</small>\r
              </div>\r
              <small class="text-muted" *ngIf="!event.participants || event.participants.length === 0">{{ 'EVENTS.NO_PARTICIPANTS' | translate }}</small>\r
            </div>\r
            <button class="btn btn-outline-info btn-sm btn-footer" (click)="viewEventDetail(event)">{{ 'EVENTS.VIEW_DETAILS' | translate }}</button>\r
          </div>\r
\r
    </div>\r
\r
    </div>\r
\r
    <div *ngIf="filteredEvents.length === 0 && !loading" class="col-12 text-center">\r
      <p>{{ 'EVENTS.NO_EVENTS_FOUND' | translate }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Load More Button for Grid View -->\r
  <div *ngIf="viewMode === 'grid' && !loading && hasMoreEvents()" class="text-center d-flex justify-content-center mt-4">\r
    <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMore()">\r
      <i class="bi bi-plus-circle me-2"></i>{{ 'EVENTS.LOAD_MORE' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewMode === 'list' && !loading">\r
    <div class="card flex-fill card-general card-recently mb-3">\r
      <div class="card-header d-flex align-items-center justify-content-between">\r
        <h5 class="mb-0">\r
          <i class="bi bi-list-task"></i>\r
          {{ 'EVENTS.EVENTS_LIST' | translate }}\r
        </h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="table-responsive custom-table">\r
          <table class="table table-hover mb-0">\r
            <thead class="table-light">\r
              <tr>\r
                <th>{{ 'EVENTS.NAME' | translate }}</th>\r
                <th>{{ 'EVENTS.TYPE' | translate }}</th>\r
                <th>{{ 'EVENTS.STATUS' | translate }}</th>\r
                <th>{{ 'EVENTS.PRICE' | translate }}</th>\r
                <th>{{ 'EVENTS.AGE_RANGE' | translate }}</th>\r
                <th>{{ 'EVENTS.CAPACITY' | translate }}</th>\r
                <th>{{ 'EVENTS.TIME' | translate }}</th>\r
                <th>{{ 'EVENTS.ACTIONS' | translate }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr *ngFor="let event of displayedEvents; trackBy: trackById">\r
                <td class="name-last">\r
                  <span>{{ event.name }}</span>\r
                  <br>\r
                  <small class="text-muted">{{ event.description }}</small>\r
                </td>\r
                <td><span class="badge bg-primary">{{ event.type }}</span></td>\r
                <td><span class="badge" [class]="getEventStatusClass(event)">{{ getEventStatus(event) }}</span></td>\r
                <td>{{ event.price | appCurrency }}</td>\r
                <td>{{ event.ageFrom }}-{{ event.ageTo }} {{ 'EVENTS.YEARS' | translate }}</td>\r
                <td>{{ event.capacity }} {{ 'EVENTS.PEOPLE' | translate }}</td>\r
                <td>{{ event.time }}</td>\r
                <td>\r
                  <div class="d-flex gap-1">\r
                    <button class="btn btn-sm btn-view" (click)="viewEventDetail(event)">\r
                      <i class="bi bi-eye"></i>\r
                    </button>\r
                    <button class="btn btn-sm btn-view" (click)="viewParticipants(event)">\r
                      <i class="bi bi-people"></i>\r
                    </button>\r
                    <button *ngIf="canEdit()" class="btn btn-sm btn-edit" (click)="editEvent(event)">\r
                      <i class="bi bi-pencil-square"></i>\r
                    </button>\r
                    <button *ngIf="canDelete()" class="btn btn-sm btn-remove" (click)="deleteEvent(event.id!)">\r
                      <i class="bi bi-trash3"></i>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
              <tr *ngIf="filteredEvents.length === 0">\r
                <td colspan="8" class="text-center py-4">\r
                  {{ 'EVENTS.NO_EVENTS_FOUND' | translate }}\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      <div class="card-footer d-flex align-items-center justify-content-between">\r
        <span class="text-muted">{{ 'EVENTS.TOTAL' | translate }}: {{ displayedEvents.length }} {{ 'EVENTS.EVENT_S' | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Load More Button for List View -->\r
    <div *ngIf="hasMoreEvents()" class="text-center mt-3">\r
      <button class="custom-btn-2 btn-add-border mb-4" (click)="loadMore()">\r
        <i class="bi bi-plus-circle me-2"></i> {{ 'EVENTS.LOAD_MORE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/event/event.scss */\nion-content.parent-events {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-events .inner-scroll {\n  display: block !important;\n}\n.card-event {\n  overflow: hidden;\n  box-shadow: 0px 2px 20px var(--clr-gray-light);\n  background: white;\n  position: relative;\n  width: 100%;\n  margin: 1rem 0;\n  transition: 250ms all ease-in-out;\n}\n.card-event .category-tag {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  background: #7dbcf9;\n  padding: 0.5rem 1.3rem 0.5rem 1rem;\n  text-transform: uppercase;\n  position: absolute;\n  z-index: 1;\n  top: 1rem;\n  border-radius: 0 2rem 2rem 0;\n  left: 0;\n}\n.card-event .banner-img {\n  object-fit: cover;\n  height: 12rem;\n  width: 100%;\n}\n.card-event .blog-description {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-event .link-to-event {\n  width: 100%;\n  outline: none;\n  border: none;\n  background: none;\n  padding: 0;\n  text-align: left;\n}\n.card-event .badge.bg-success {\n  background: none !important;\n  color: #198754 !important;\n  font-weight: 700 !important;\n}\n.card-event .badge.bg-danger {\n  background: none !important;\n  color: #dc3545 !important;\n  font-weight: 700 !important;\n}\n.card-event .information-title {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(106, 114, 135);\n}\n.card-event .information-description {\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(32, 44, 75);\n}\n.card-event .card-footer {\n  background-color: #fff;\n}\n.card-event .card-banner .action-edit-add {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.card-event .card-banner .action-edit-add .dropdown {\n  z-index: 9;\n}\n.card-event .card-banner .action-edit-add a.btn-icon {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n  border-radius: 5px !important;\n}\n.card-event .card-banner .action-edit-add a i.icon-action {\n  color: #fff;\n  z-index: 999;\n  padding: 1px 6px;\n}\n.dropdown-item_list a {\n  color: #202C4B !important;\n  padding: 0.594rem 0.9375rem;\n  font-size: 14px;\n}\n.dropdown-item_list a:active {\n  background-color: #F4F6FA;\n}\n.card-banner:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1882352941);\n  opacity: 1;\n  height: 100%;\n}\n.card-banner {\n  position: relative;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.events-list .events-card {\n  margin: 8px;\n  padding: 16px;\n  background: #fff;\n  gap: 16px;\n  position: relative;\n  transition: all 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.events-list .events-card .event-upper {\n  display: flex;\n  align-items: center;\n}\n.events-list .events-card .event-upper .event-avatar {\n  width: 75px;\n  height: 75px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  margin-right: 1rem;\n}\n.events-list .events-card .event-upper .event-avatar .banner-img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.events-list .events-card .eventparent-content {\n  flex: 1;\n  min-width: 0;\n}\n.events-list .events-card .eventparent-content .eventparent-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 3px;\n}\n.events-list .events-card .eventparent-content .eventparent-header .event-name {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n  line-height: 1.3;\n  text-transform: capitalize;\n}\n.events-list .events-card .eventparent-content .eventparent-header .event-time {\n  font-size: 13px;\n  color: #6c757d;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.events-list .events-card .eventparent-content .event-message {\n  font-size: 15px;\n  color: #495057;\n  line-height: 1.4;\n  margin: 0 0 12px 0;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.events-list .events-card .eventparent-content .event-active .badge {\n  font-weight: 400;\n  font-size: 13px;\n  border-radius: 50px;\n}\n.events-list .events-card .eventparent-content .event-active .badge.bg-danger {\n  background-color: #fde3c6 !important;\n  color: #92531a;\n}\n.events-list .events-card .eventparent-content .event-active .badge.bg-success {\n  background-color: #c5f1da !important;\n  color: #277247;\n}\n.events-list .events-card .event-bottom_content .event-active .badge {\n  font-weight: 400;\n  font-size: 13px;\n  border-radius: 50px;\n}\n.events-list .events-card .event-bottom_content .event-active .badge.bg-danger {\n  background-color: #fde3c6 !important;\n  color: #92531a;\n}\n.events-list .events-card .event-bottom_content .event-active .badge.bg-success {\n  background-color: #c5f1da !important;\n  color: #277247;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom {\n  display: flex;\n  justify-content: space-between;\n  justify-self: right;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0.35em 0.7em;\n  border-radius: 50px;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Workshop {\n  background-color: #d6cdf7;\n  color: #6957a9;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Sports {\n  background-color: #95ecdc;\n  color: #3a8073;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Meeting {\n  background-color: #d8cff8;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Festival {\n  background-color: #ffcabd;\n  color: #d97357;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Outdoor {\n  background-color: #e6ff8c;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Special {\n  background-color: #f7eede;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Music {\n  background: #d9d9d9;\n  color: #5e5050;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Crafts {\n  background: #fef6c9;\n}\n.events-list .events-card .event-bottom_content .event-tag-bottom .event-type.Party {\n  background: #d6b34e;\n  color: #5d4d1d;\n}\n.events-list .load-more-container button {\n  width: 100%;\n  background: #4886ed;\n  border: 1px solid #4886ed;\n  color: white;\n  margin-top: 14px;\n  border-radius: 14px;\n}\n::ng-deep .header-info {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=event.css.map */\n'] }]
  }], () => [{ type: EventService }, { type: AuthService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Event, { className: "Event", filePath: "src/app/features/event/event.ts", lineNumber: 29 });
})();
export {
  Event
};
//# sourceMappingURL=chunk-SKFSANRJ.js.map
