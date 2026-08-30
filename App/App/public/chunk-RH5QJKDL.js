import {
  GalleryService
} from "./chunk-VRDWYR4I.js";
import {
  LeavesService
} from "./chunk-Z7NXYY4J.js";
import {
  StaticFeesService
} from "./chunk-G5VH4N7Z.js";
import {
  ArcElement,
  BarController,
  BarElement,
  BaseChartDirective,
  CategoryScale,
  Chart,
  DoughnutController,
  LinearScale,
  SkeletonActivityTimelineComponent,
  plugin_legend,
  plugin_tooltip
} from "./chunk-3KXGNDEJ.js";
import {
  DailyActivityService
} from "./chunk-D442GME6.js";
import {
  AppCurrencyPipe
} from "./chunk-6S3KDPAE.js";
import "./chunk-OQBHM43H.js";
import {
  EventService
} from "./chunk-CF5UU2UU.js";
import {
  FeeService
} from "./chunk-4QI4UUMP.js";
import {
  ar_default,
  fr_default,
  it_default
} from "./chunk-ASBB4ZWR.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  ParentService
} from "./chunk-DDBL3ML4.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  IonContent
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
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-NEGRQ2LF.js";
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
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  registerLocaleData
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  catchError,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/shared/components/calendar/calendar.component.ts
function CalendarComponent_div_32_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275listener("click", function CalendarComponent_div_32_div_1_div_4_Template_div_click_1_listener($event) {
      const holiday_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showHolidayDetails(holiday_r5, $event));
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const holiday_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", holiday_r5.color);
    \u0275\u0275property("title", holiday_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(holiday_r5.name);
  }
}
function CalendarComponent_div_32_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 24);
    \u0275\u0275listener("click", function CalendarComponent_div_32_div_1_div_5_Template_div_click_1_listener($event) {
      const event_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showEventDetails(event_r7, $event));
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", event_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r7.name);
  }
}
function CalendarComponent_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function CalendarComponent_div_32_div_1_Template_div_click_0_listener() {
      const day_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectDate(day_r2));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275template(4, CalendarComponent_div_32_div_1_div_4_Template, 5, 4, "div", 18)(5, CalendarComponent_div_32_div_1_div_5_Template, 5, 2, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r2))("selected", ctx_r2.isSelected(day_r2))("other-month", !ctx_r2.isCurrentMonth(day_r2))("has-event", ctx_r2.hasEvent(day_r2))("has-holiday", ctx_r2.hasHoliday(day_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r2.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getHolidaysForDay(day_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDay(day_r2))("ngForTrackBy", ctx_r2.trackByEventId);
  }
}
function CalendarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, CalendarComponent_div_32_div_1_Template, 6, 14, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r8);
  }
}
function CalendarComponent_div_33_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "CALENDAR_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday == null ? null : ctx_r2.selectedHoliday.description);
  }
}
function CalendarComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CalendarComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHolidayModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CalendarComponent_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "h5", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CalendarComponent_div_33_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHolidayModal());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 32)(10, "div", 33)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CalendarComponent_div_33_div_17_Template, 7, 4, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 35)(19, "button", 36);
    \u0275\u0275listener("click", function CalendarComponent_div_33_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHolidayModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedHoliday == null ? null : ctx_r2.selectedHoliday.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 5, "CALENDAR_PAGE.DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 7, ctx_r2.selectedHoliday == null ? null : ctx_r2.selectedHoliday.date, "fullDate", void 0, ctx_r2.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedHoliday == null ? null : ctx_r2.selectedHoliday.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "CALENDAR_PAGE.CLOSE"));
  }
}
function CalendarComponent_div_34_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.selectedEvent.image, \u0275\u0275sanitizeUrl);
  }
}
function CalendarComponent_div_34_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 45);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementStart(3, "p", 47);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "CALENDAR_PAGE.NO_IMAGE_AVAILABLE"));
  }
}
function CalendarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEventModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "h5", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEventModal());
    });
    \u0275\u0275text(7, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275template(9, CalendarComponent_div_34_div_9_Template, 2, 1, "div", 40)(10, CalendarComponent_div_34_div_10_Template, 6, 3, "div", 40);
    \u0275\u0275elementStart(11, "div", 32)(12, "div", 33)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 33);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 37)(19, "div", 33)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 33);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 37)(27, "div", 33)(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 33);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "appCurrency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 37)(35, "div", 33)(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 33);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 37)(42, "div", 33)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 33);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 41)(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 42);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 35)(56, "button", 36);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeEventModal());
    });
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedEvent.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedEvent.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedEvent.image);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 18, "CALENDAR_PAGE.TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedEvent.type);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 20, "CALENDAR_PAGE.DATE_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(25, 22, ctx_r2.selectedEvent.time, "medium", void 0, ctx_r2.currentLocale));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 27, "CALENDAR_PAGE.PRICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 29, ctx_r2.selectedEvent.price));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 31, "CALENDAR_PAGE.CAPACITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedEvent.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 33, "CALENDAR_PAGE.AGE_RANGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r2.selectedEvent.ageFrom, " - ", ctx_r2.selectedEvent.ageTo, " ", \u0275\u0275pipeBind1(48, 35, "CALENDAR_PAGE.YEARS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 37, "CALENDAR_PAGE.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedEvent.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, "CALENDAR_PAGE.CLOSE"));
  }
}
function CalendarComponent_div_35_div_12_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r12.place);
  }
}
function CalendarComponent_div_35_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 54);
    \u0275\u0275element(7, "i", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CalendarComponent_div_35_div_12_p_10_Template, 3, 1, "p", 56);
    \u0275\u0275elementStart(11, "small", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r12.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 5, event_r12.time, "h:mm a", void 0, ctx_r2.currentLocale));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r12.place);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r12.description);
  }
}
function CalendarComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDateEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "h5", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 30);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDateEventsModal());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 48);
    \u0275\u0275template(12, CalendarComponent_div_35_div_12_Template, 13, 10, "div", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35)(14, "button", 36);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDateEventsModal());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 4, "CALENDAR_PAGE.EVENTS_ON"), " ", \u0275\u0275pipeBind4(7, 6, ctx_r2.selectedDate, "fullDate", void 0, ctx_r2.currentLocale));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.selectedDateEvents);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "CALENDAR_PAGE.CLOSE"));
  }
}
registerLocaleData(fr_default);
registerLocaleData(it_default);
registerLocaleData(ar_default);
var CalendarComponent = class _CalendarComponent {
  translateService;
  selectedDate = /* @__PURE__ */ new Date();
  events = [];
  holidays = [];
  dateSelected = new EventEmitter();
  currentMonth = /* @__PURE__ */ new Date();
  weeks = [];
  constructor(translateService) {
    this.translateService = translateService;
  }
  ngOnInit() {
    this.generateCalendar();
    console.log("Calendar component events:", this.events);
  }
  ngOnChanges() {
    console.log("Calendar events changed:", this.events);
  }
  generateCalendar() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    this.weeks = [];
    let currentWeek = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      currentWeek.push(date);
      if (currentWeek.length === 7) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }
    }
  }
  previousMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
    this.generateCalendar();
  }
  nextMonth() {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
    this.generateCalendar();
  }
  selectDate(date) {
    this.selectedDate = date;
    this.dateSelected.emit(date);
    const dayEvents = this.getEventsForDay(date);
    if (dayEvents.length > 0) {
      this.selectedDateEvents = dayEvents;
      this.showDateEventsModal = true;
    }
  }
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.toDateString() === today.toDateString();
  }
  isSelected(date) {
    return date.toDateString() === this.selectedDate.toDateString();
  }
  isCurrentMonth(date) {
    return date.getMonth() === this.currentMonth.getMonth();
  }
  get currentLocale() {
    return this.translateService.currentLang || this.translateService.defaultLang || "en";
  }
  getMonthYear() {
    return this.currentMonth.toLocaleDateString(this.currentLocale, {
      month: "long",
      year: "numeric"
    });
  }
  hasEvent(date) {
    return this.events.some((event) => {
      const eventDate = new Date(event.time);
      return eventDate.toDateString() === date.toDateString();
    });
  }
  hasHoliday(date) {
    return this.holidays.some((holiday) => {
      const holidayDate = new Date(holiday.date);
      return holidayDate.toDateString() === date.toDateString();
    });
  }
  getHolidaysForDay(date) {
    return this.holidays.filter((holiday) => {
      const holidayDate = new Date(holiday.date);
      return holidayDate.toDateString() === date.toDateString();
    });
  }
  getEventNames(date) {
    const dayEvents = this.events.filter((event) => {
      const eventDate = new Date(event.time);
      return eventDate.toDateString() === date.toDateString();
    });
    return dayEvents.map((event) => event.name).join(", ");
  }
  getEventsForDay(date) {
    const dayEvents = this.events.filter((event) => {
      const eventDate = new Date(event.time);
      return eventDate.toDateString() === date.toDateString();
    });
    return dayEvents;
  }
  trackByEventId(index, event) {
    return event.id;
  }
  selectedEvent = null;
  selectedHoliday = null;
  showModal = false;
  showHolidayModal = false;
  selectedDateEvents = [];
  showDateEventsModal = false;
  showEventDetails(event, clickEvent) {
    clickEvent.stopPropagation();
    this.selectedEvent = event;
    this.showModal = true;
  }
  closeEventModal() {
    this.selectedEvent = null;
    this.showModal = false;
  }
  showHolidayDetails(holiday, clickEvent) {
    clickEvent.stopPropagation();
    this.selectedHoliday = holiday;
    this.showHolidayModal = true;
  }
  closeHolidayModal() {
    this.selectedHoliday = null;
    this.showHolidayModal = false;
  }
  closeDateEventsModal() {
    this.selectedDateEvents = [];
    this.showDateEventsModal = false;
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], inputs: { selectedDate: "selectedDate", events: "events", holidays: "holidays" }, outputs: { dateSelected: "dateSelected" }, features: [\u0275\u0275NgOnChangesFeature], decls: 36, vars: 26, consts: [[1, "calendar-container"], [1, "calendar-header"], [1, "btn", "btn-sm", "btn-outline-primary", "left", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "mb-0"], [1, "btn", "btn-sm", "btn-outline-primary", "right", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "calendar-grid"], [1, "calendar-weekdays"], [1, "weekday"], [1, "calendar-days"], ["class", "calendar-week", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "calendar-week"], ["class", "calendar-day", 3, "today", "selected", "other-month", "has-event", "has-holiday", "click", 4, "ngFor", "ngForOf"], [1, "calendar-day", 3, "click"], [1, "day-number"], [1, "events-container"], ["class", "fc-event-container", 4, "ngFor", "ngForOf"], ["class", "fc-event-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fc-event-container"], [1, "fc-day-grid-event", "fc-h-event", "fc-event", "fc-start", "fc-end", "holiday-event", 3, "click", "title"], [1, "fc-content"], [1, "fc-title"], [1, "fc-day-grid-event", "fc-h-event", "fc-event", "fc-start", "fc-end", "bg-info", 3, "click", "title"], [1, "modal-overlay", 3, "click"], [1, "modal-dialog", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-6"], ["class", "row mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "row", "mt-2"], [1, "col-12"], [1, "col-12", "mt-1"], ["class", "text-center mb-3", 4, "ngIf"], [1, "mt-3"], [1, "mt-1"], [1, "text-center", "mb-3"], ["loading", "lazy", "alt", "Event Image", 1, "img-fluid", "rounded", 2, "max-width", "100%", "max-height", "200px", 3, "src"], [1, "bg-light", "rounded", "p-4"], [1, "bi", "bi-image", "fs-1", "text-muted"], [1, "text-muted", "mt-2"], [1, "list-group"], ["class", "list-group-item list-group-item-action", "style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 2, "cursor", "pointer"], [1, "d-flex", "w-100", "justify-content-between", "align-items-center"], [1, "mb-1"], [1, "badge", "bg-primary"], [1, "mb-1", "text-muted"], [1, "bi", "bi-clock", "me-1"], ["class", "mb-1", 4, "ngIf"], [1, "text-muted"], [1, "bi", "bi-geo-alt", "me-1"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_2_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_6_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 9);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 9);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 9);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10);
      \u0275\u0275template(32, CalendarComponent_div_32_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(33, CalendarComponent_div_33_Template, 22, 14, "div", 12)(34, CalendarComponent_div_34_Template, 59, 41, "div", 12)(35, CalendarComponent_div_35_Template, 17, 13, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getMonthYear());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, "CALENDAR_PAGE.SUN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 14, "CALENDAR_PAGE.MON"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "CALENDAR_PAGE.TUE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "CALENDAR_PAGE.WED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 20, "CALENDAR_PAGE.THU"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "CALENDAR_PAGE.FRI"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "CALENDAR_PAGE.SAT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.weeks);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showHolidayModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDateEventsModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], styles: ["\n\n.calendar-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #fff;\n}\n.calendar-header[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 12px;\n  border: 1px solid #E9EDF4;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.calendar-header[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #202C4B;\n}\n.calendar-header[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover {\n  background-color: #202C4B;\n}\n.calendar-header[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  margin: 1rem;\n  border: 1px solid #E9EDF4;\n}\n.calendar-weekdays[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #f4f6fa;\n  padding: 8px 0;\n}\n.weekday[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #202C4B;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 0;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.calendar-day[_ngcontent-%COMP%] {\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  padding: 0px;\n  position: relative;\n  border: 1px solid #E9EDF4;\n  max-width: 92px;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 2px;\n  text-align: right;\n  padding-right: 5px;\n  padding-top: 5px;\n}\n.events-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fc-event-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fc-day-grid-event[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  color: white;\n  border-radius: 2px;\n  padding: 1px 3px;\n  font-size: 0.7rem;\n  margin-bottom: 1px;\n  overflow: hidden;\n}\n.fc-content[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fc-title[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  line-height: 1.2;\n}\n.fc-day-grid-event[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.fc-day-grid-event[_ngcontent-%COMP%]:hover {\n  background: #138496 !important;\n  transform: scale(1.02);\n  transition: all 0.2s ease;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  font-weight: 600;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n  font-weight: 600;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.calendar-day.other-month[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.has-event[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.calendar-day.has-event[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #202C4B;\n  transition: ease 0.5;\n}\n.calendar-day.has-holiday[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n}\n.calendar-day.has-holiday[_ngcontent-%COMP%]:hover {\n  background: #ffeaa7;\n}\n.holiday-event[_ngcontent-%COMP%] {\n  color: white !important;\n  font-weight: 600;\n  border: none;\n}\n.holiday-event[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", imports: [CommonModule, AppCurrencyPipe, TranslateModule], template: `<div class="calendar-container">\r
  <div class="calendar-header">\r
    <button class="btn btn-sm btn-outline-primary left" (click)="previousMonth()">\r
      <i class="bi bi-chevron-left"></i>\r
    </button>\r
    <h5 class="mb-0">{{ getMonthYear() }}</h5>\r
    <button class="btn btn-sm btn-outline-primary right" (click)="nextMonth()">\r
      <i class="bi bi-chevron-right"></i>\r
    </button>\r
  </div>\r
\r
  <div class="calendar-grid">\r
    <div class="calendar-weekdays">\r
      <div class="weekday">{{ 'CALENDAR_PAGE.SUN' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.MON' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.TUE' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.WED' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.THU' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.FRI' | translate }}</div>\r
      <div class="weekday">{{ 'CALENDAR_PAGE.SAT' | translate }}</div>\r
    </div>\r
\r
    <div class="calendar-days">\r
      <div class="calendar-week" *ngFor="let week of weeks">\r
        <div \r
          class="calendar-day"\r
          *ngFor="let day of week"\r
          [class.today]="isToday(day)"\r
          [class.selected]="isSelected(day)"\r
          [class.other-month]="!isCurrentMonth(day)"\r
          [class.has-event]="hasEvent(day)"\r
          [class.has-holiday]="hasHoliday(day)"\r
          (click)="selectDate(day)">\r
          <div class="day-number">{{ day.getDate() }}</div>\r
          <div class="events-container">\r
            <!-- Holidays -->\r
            <div \r
              class="fc-event-container" \r
              *ngFor="let holiday of getHolidaysForDay(day)">\r
              <div \r
                class="fc-day-grid-event fc-h-event fc-event fc-start fc-end holiday-event"\r
                [style.background-color]="holiday.color"\r
                [title]="holiday.name"\r
                (click)="showHolidayDetails(holiday, $event)">\r
                <div class="fc-content">\r
                  <span class="fc-title">{{ holiday.name }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <!-- Events -->\r
            <div \r
              class="fc-event-container" \r
              *ngFor="let event of getEventsForDay(day); trackBy: trackByEventId">\r
              <div \r
                class="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-info"\r
                [title]="event.name"\r
                (click)="showEventDetails(event, $event)">\r
                <div class="fc-content">\r
                  <span class="fc-title">{{ event.name }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Holiday Details Modal -->\r
  <div class="modal-overlay" *ngIf="showHolidayModal" (click)="closeHolidayModal()">\r
    <div class="modal-dialog" (click)="$event.stopPropagation()">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ selectedHoliday?.name }}</h5>\r
          <button type="button" class="btn-close" (click)="closeHolidayModal()">&times;</button>\r
        </div>\r
        <div class="modal-body">\r
          <div class="row">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.DATE' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedHoliday?.date | date:'fullDate':undefined:currentLocale }}</div>\r
          </div>\r
          <div class="row mt-2" *ngIf="selectedHoliday?.description">\r
            <div class="col-12"><strong>{{ 'CALENDAR_PAGE.DESCRIPTION' | translate }}</strong></div>\r
            <div class="col-12 mt-1">{{ selectedHoliday?.description }}</div>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeHolidayModal()">{{ 'CALENDAR_PAGE.CLOSE' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Event Details Modal -->\r
  <div class="modal-overlay" *ngIf="showModal" (click)="closeEventModal()">\r
    <div class="modal-dialog" (click)="$event.stopPropagation()">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ selectedEvent.name }}</h5>\r
          <button type="button" class="btn-close" (click)="closeEventModal()">&times;</button>\r
        </div>\r
        <div class="modal-body">\r
          <div *ngIf="selectedEvent.image" class="text-center mb-3">\r
            <img loading="lazy" [src]="selectedEvent.image" alt="Event Image" class="img-fluid rounded" style="max-width: 100%; max-height: 200px;">\r
          </div>\r
          <div *ngIf="!selectedEvent.image" class="text-center mb-3">\r
            <div class="bg-light rounded p-4">\r
              <i class="bi bi-image fs-1 text-muted"></i>\r
              <p class="text-muted mt-2">{{ 'CALENDAR_PAGE.NO_IMAGE_AVAILABLE' | translate }}</p>\r
            </div>\r
          </div>\r
          <div class="row">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.TYPE' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedEvent.type }}</div>\r
          </div>\r
          <div class="row mt-2">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.DATE_TIME' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedEvent.time | date:'medium':undefined:currentLocale }}</div>\r
          </div>\r
          <div class="row mt-2">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.PRICE' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedEvent.price | appCurrency }}</div>\r
          </div>\r
          <div class="row mt-2">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.CAPACITY' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedEvent.capacity }}</div>\r
          </div>\r
          <div class="row mt-2">\r
            <div class="col-6"><strong>{{ 'CALENDAR_PAGE.AGE_RANGE' | translate }}</strong></div>\r
            <div class="col-6">{{ selectedEvent.ageFrom }} - {{ selectedEvent.ageTo }} {{ 'CALENDAR_PAGE.YEARS' | translate }}</div>\r
          </div>\r
          <div class="mt-3">\r
            <strong>{{ 'CALENDAR_PAGE.DESCRIPTION' | translate }}</strong>\r
            <p class="mt-1">{{ selectedEvent.description }}</p>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeEventModal()">{{ 'CALENDAR_PAGE.CLOSE' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Date Events Modal -->\r
  <div class="modal-overlay" *ngIf="showDateEventsModal" (click)="closeDateEventsModal()">\r
    <div class="modal-dialog" (click)="$event.stopPropagation()">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ 'CALENDAR_PAGE.EVENTS_ON' | translate }} {{ selectedDate | date:'fullDate':undefined:currentLocale }}</h5>\r
          <button type="button" class="btn-close" (click)="closeDateEventsModal()">&times;</button>\r
        </div>\r
        <div class="modal-body">\r
          <div class="list-group">\r
            <div *ngFor="let event of selectedDateEvents" class="list-group-item list-group-item-action" style="cursor: pointer;">\r
              <div class="d-flex w-100 justify-content-between align-items-center">\r
                <h6 class="mb-1">{{ event.name }}</h6>\r
                <span class="badge bg-primary">{{ event.type }}</span>\r
              </div>\r
              <p class="mb-1 text-muted"><i class="bi bi-clock me-1"></i>{{ event.time | date:'h:mm a':undefined:currentLocale }}</p>\r
              <p class="mb-1" *ngIf="event.place"><i class="bi bi-geo-alt me-1"></i>{{ event.place }}</p>\r
              <small class="text-muted">{{ event.description }}</small>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeDateEventsModal()">{{ 'CALENDAR_PAGE.CLOSE' | translate }}</button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/shared/components/calendar/calendar.component.scss */\n.calendar-container {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #fff;\n}\n.calendar-header .btn-sm {\n  width: 30px;\n  height: 30px;\n  font-size: 12px;\n  border: 1px solid #E9EDF4;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.calendar-header .btn-sm i {\n  color: #202C4B;\n}\n.calendar-header .btn-sm:hover {\n  background-color: #202C4B;\n}\n.calendar-header .btn-sm:hover i {\n  color: #fff;\n}\n.calendar-grid {\n  margin: 1rem;\n  border: 1px solid #E9EDF4;\n}\n.calendar-weekdays {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #f4f6fa;\n  padding: 8px 0;\n}\n.weekday {\n  text-align: center;\n  color: #202C4B;\n  font-size: 14px;\n  font-weight: 700;\n  padding: 0;\n}\n.calendar-days {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-week {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.calendar-day {\n  min-height: 80px;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  padding: 0px;\n  position: relative;\n  border: 1px solid #E9EDF4;\n  max-width: 92px;\n}\n.day-number {\n  font-weight: 600;\n  margin-bottom: 2px;\n  text-align: right;\n  padding-right: 5px;\n  padding-top: 5px;\n}\n.events-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.fc-event-container {\n  width: 100%;\n}\n.fc-day-grid-event {\n  background: #17a2b8;\n  color: white;\n  border-radius: 2px;\n  padding: 1px 3px;\n  font-size: 0.7rem;\n  margin-bottom: 1px;\n  overflow: hidden;\n}\n.fc-content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fc-title {\n  font-size: 0.65rem;\n  line-height: 1.2;\n}\n.fc-day-grid-event {\n  cursor: pointer;\n}\n.fc-day-grid-event:hover {\n  background: #138496 !important;\n  transform: scale(1.02);\n  transition: all 0.2s ease;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.modal-dialog {\n  background: white;\n  border-radius: 8px;\n  max-width: 500px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-content {\n  padding: 0;\n}\n.modal-header {\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  padding: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-body {\n  padding: 1rem;\n}\n.modal-footer {\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n}\n.calendar-day:hover {\n  background: #e9ecef;\n}\n.calendar-day.today {\n  background: #007bff;\n  color: white;\n  font-weight: 600;\n}\n.calendar-day.selected {\n  background: #28a745;\n  color: white;\n  font-weight: 600;\n}\n.calendar-day.other-month {\n  color: #adb5bd;\n}\n.calendar-day.other-month:hover {\n  background: #f8f9fa;\n}\n.calendar-day.has-event {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.calendar-day.has-event:hover {\n  background: #e9ecef;\n  color: #202C4B;\n  transition: ease 0.5;\n}\n.calendar-day.has-holiday {\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n}\n.calendar-day.has-holiday:hover {\n  background: #ffeaa7;\n}\n.holiday-event {\n  color: white !important;\n  font-weight: 600;\n  border: none;\n}\n.holiday-event:hover {\n  opacity: 0.9;\n  transform: scale(1.02);\n}\n/*# sourceMappingURL=calendar.component.css.map */\n"] }]
  }], () => [{ type: TranslateService }], { selectedDate: [{
    type: Input
  }], events: [{
    type: Input
  }], holidays: [{
    type: Input
  }], dateSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/shared/components/calendar/calendar.component.ts", lineNumber: 20 });
})();

// src/app/core/services/attendance.service.ts
var AttendanceService = class _AttendanceService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.ATTENDANCE;
  constructor(http) {
    this.http = http;
  }
  getWeeklyAttendance() {
    return this.http.get(`${this.apiUrl}/weekly`);
  }
  getAllAttendance() {
    return this.http.get(`${this.apiUrl}`);
  }
  getTodayAttendance() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return this.http.get(`${this.apiUrl}/ByDate?date=${today}`);
  }
  static \u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http;
  apiUrl = `${ApiConfig.BASE_URL}/dashboard`;
  constructor(http) {
    this.http = http;
  }
  getAdminDashboard() {
    return this.http.get(`${this.apiUrl}/admin`);
  }
  getTeacherDashboard() {
    return this.http.get(`${this.apiUrl}/teacher`);
  }
  getParentDashboard() {
    return this.http.get(`${this.apiUrl}/parent`);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/dashboard/dashboard.ts
var _c0 = () => ["/children"];
var _c1 = () => ["/children/add"];
var _c2 = () => ["/leaves/add"];
var _c3 = () => ["/daily-activities"];
var _c4 = () => ["/fees"];
var _c5 = () => ["/reclamations"];
var _c6 = () => [1, 2, 3, 4];
var _c7 = (a0) => ["/children/detail", a0];
var _c8 = () => [1, 2];
var _c9 = (a0) => ["/events/detail", a0];
var _c10 = () => [1, 2, 3];
var _c11 = (a0, a1) => ({ "bg-warning text-dark": a0, "bg-danger": a1 });
var _c12 = (a0) => ["/activities/detail", a0];
var _c13 = () => ["/gallery"];
function Dashboard_div_0_h3_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stats.children);
  }
}
function Dashboard_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function Dashboard_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "h3", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.stats.teachers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 2, "DASHBOARD.EDUCATORS"));
  }
}
function Dashboard_div_0_div_17_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.stats.parents);
  }
}
function Dashboard_div_0_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function Dashboard_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275element(4, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11);
    \u0275\u0275template(6, Dashboard_div_0_div_17_h3_6_Template, 2, 1, "h3", 12)(7, Dashboard_div_0_div_17_div_7_Template, 1, 0, "div", 13);
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.parents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.parents);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 3, "DASHBOARD.PARENTS"));
  }
}
function Dashboard_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 71);
    \u0275\u0275element(2, "canvas", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 74);
    \u0275\u0275element(5, "span", 75);
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 74);
    \u0275\u0275element(12, "span", 78);
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 77);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.attendanceChartData)("options", ctx_r0.attendanceChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.presentCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "DASHBOARD.PRESENT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.absentCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, "DASHBOARD.ABSENT"));
  }
}
function Dashboard_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "div", 80);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "canvas", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.attendanceBarChartData)("options", ctx_r0.attendanceBarChartOptions);
  }
}
function Dashboard_div_0_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
}
function Dashboard_div_0_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, Dashboard_div_0_div_50_div_1_Template, 1, 0, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c6));
  }
}
function Dashboard_div_0_div_51_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DASHBOARD.NO_CHILDREN"));
  }
}
function Dashboard_div_0_div_51_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 95);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 88)(12, "button", 96);
    \u0275\u0275element(13, "i", 97);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getChildProfilePictureUrl(child_r2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", child_r2.firstName, " ", child_r2.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translateGender(child_r2.gender));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.parentName || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.parentPhoneNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c7, child_r2.id));
  }
}
function Dashboard_div_0_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "table", 87)(2, "tbody")(3, "tr")(4, "th", 54);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 88);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, Dashboard_div_0_div_51_div_22_Template, 5, 3, "div", 89)(23, Dashboard_div_0_div_51_tr_23_Template, 14, 9, "tr", 90);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "DASHBOARD.TABLE_IMG"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "DASHBOARD.TABLE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "DASHBOARD.TABLE_GENDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "DASHBOARD.TABLE_PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 17, "DASHBOARD.TABLE_MOBILE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 19, "DASHBOARD.TABLE_ACTIONS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.recentChildren.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentChildren)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_div_0_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_div_0_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 71);
    \u0275\u0275element(2, "canvas", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 98);
    \u0275\u0275element(5, "span", 99);
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 100);
    \u0275\u0275element(12, "span", 99);
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 77);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.genderChartData)("options", ctx_r0.genderChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.boysCount, " (", ctx_r0.boysPercentage, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "DASHBOARD.BOYS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.girlsCount, " (", ctx_r0.girlsPercentage, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "DASHBOARD.GIRLS"));
  }
}
function Dashboard_div_0_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
}
function Dashboard_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 71);
    \u0275\u0275element(2, "canvas", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 74);
    \u0275\u0275element(5, "span", 101);
    \u0275\u0275elementStart(6, "span", 102);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 103);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 74);
    \u0275\u0275element(12, "span", 104);
    \u0275\u0275elementStart(13, "span", 102);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 103);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 74);
    \u0275\u0275element(19, "span", 105);
    \u0275\u0275elementStart(20, "span", 102);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 103);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r0.paymentChartData)("options", ctx_r0.paymentChartOptions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "DASHBOARD.PAID"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStats.paid);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "DASHBOARD.PENDING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStats.pending);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "DASHBOARD.OVERDUE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.paymentStats.overdue);
  }
}
function Dashboard_div_0_div_126_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 108);
  }
}
function Dashboard_div_0_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275template(1, Dashboard_div_0_div_126_div_1_Template, 1, 0, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c8));
  }
}
function Dashboard_div_0_div_127_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementStart(2, "p", 112);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DASHBOARD.NO_EVENTS"));
  }
}
function Dashboard_div_0_div_127_div_2_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r3.location, " ");
  }
}
function Dashboard_div_0_div_127_div_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275element(1, "i", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r3.type);
  }
}
function Dashboard_div_0_div_127_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 115)(3, "div", 116)(4, "div", 117);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 118);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 119)(11, "div", 120)(12, "h6", 121);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 122);
    \u0275\u0275template(15, Dashboard_div_0_div_127_div_2_small_15_Template, 2, 1, "small", 123);
    \u0275\u0275elementStart(16, "div")(17, "small", 124);
    \u0275\u0275template(18, Dashboard_div_0_div_127_div_2_span_18_Template, 3, 1, "span", 125);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275element(20, "i", 126);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c9, event_r3.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, event_r3.time, "d"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, event_r3.time, "MMM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r3.location);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r3.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 13, event_r3.timeString, "h:mm a"));
  }
}
function Dashboard_div_0_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275template(1, Dashboard_div_0_div_127_div_1_Template, 5, 3, "div", 89)(2, Dashboard_div_0_div_127_div_2_Template, 23, 18, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upcomingEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.upcomingEvents)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_div_0_div_138_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
}
function Dashboard_div_0_div_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, Dashboard_div_0_div_138_div_1_Template, 1, 0, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c10));
  }
}
function Dashboard_div_0_div_139_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementStart(2, "p", 112);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DASHBOARD.NO_UNPAID_CHILDREN"));
  }
}
function Dashboard_div_0_div_139_div_2_tr_17_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 136);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fee_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", fee_r4.daysOverdue, " ", \u0275\u0275pipeBind1(2, 2, "DASHBOARD.DAYS_OVERDUE"), " ");
  }
}
function Dashboard_div_0_div_139_div_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 95);
    \u0275\u0275element(2, "img", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 133);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "appCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 95);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 134);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, Dashboard_div_0_div_139_div_2_tr_17_small_15_Template, 3, 4, "small", 135);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fee_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", fee_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, fee_r4.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, fee_r4.dueDate, "MMM d, yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c11, fee_r4.status === "pending", fee_r4.status === "overdue"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", fee_r4.status === "pending" ? \u0275\u0275pipeBind1(13, 11, "DASHBOARD.PENDING") : \u0275\u0275pipeBind1(14, 13, "DASHBOARD.OVERDUE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", fee_r4.daysOverdue && fee_r4.daysOverdue > 0);
  }
}
function Dashboard_div_0_div_139_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "table", 131)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, Dashboard_div_0_div_139_div_2_tr_17_Template, 16, 18, "tr", 90);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "DASHBOARD.TABLE_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "DASHBOARD.TABLE_AMOUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "DASHBOARD.TABLE_DUE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "DASHBOARD.TABLE_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.unpaidChildren)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_div_0_div_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Dashboard_div_0_div_139_div_1_Template, 5, 3, "div", 89)(2, Dashboard_div_0_div_139_div_2_Template, 18, 14, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.unpaidChildren.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.unpaidChildren.length > 0);
  }
}
function Dashboard_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9);
    \u0275\u0275element(9, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275template(11, Dashboard_div_0_h3_11_Template, 2, 1, "h3", 12)(12, Dashboard_div_0_div_12_Template, 1, 0, "div", 13);
    \u0275\u0275elementStart(13, "p", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(16, Dashboard_div_0_div_16_Template, 11, 4, "div", 15)(17, Dashboard_div_0_div_17_Template, 11, 5, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "div", 19)(22, "h5", 20);
    \u0275\u0275element(23, "i", 21);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 22);
    \u0275\u0275template(27, Dashboard_div_0_div_27_Template, 2, 0, "div", 23)(28, Dashboard_div_0_div_28_Template, 18, 10, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 25)(30, "div", 26)(31, "div", 19)(32, "h5", 27);
    \u0275\u0275element(33, "i", 28);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 22);
    \u0275\u0275template(37, Dashboard_div_0_div_37_Template, 2, 0, "div", 29)(38, Dashboard_div_0_div_38_Template, 2, 2, "div", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 31)(40, "div", 32)(41, "div", 33)(42, "h5", 20);
    \u0275\u0275element(43, "i", 34);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 35);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 22);
    \u0275\u0275template(50, Dashboard_div_0_div_50_Template, 2, 2, "div", 36)(51, Dashboard_div_0_div_51_Template, 24, 21, "div", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 38)(53, "div", 39)(54, "div", 40)(55, "h5", 20);
    \u0275\u0275element(56, "i", 10);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 22);
    \u0275\u0275template(60, Dashboard_div_0_div_60_Template, 2, 0, "div", 23)(61, Dashboard_div_0_div_61_Template, 18, 12, "div", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 38)(63, "div", 41)(64, "div", 40)(65, "h5", 20);
    \u0275\u0275element(66, "i", 42);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 22);
    \u0275\u0275template(70, Dashboard_div_0_div_70_Template, 2, 0, "div", 23)(71, Dashboard_div_0_div_71_Template, 25, 14, "div", 24);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "div", 6)(73, "div", 43)(74, "div", 44)(75, "h5", 20);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 45)(79, "div", 46)(80, "div", 47);
    \u0275\u0275element(81, "i", 48);
    \u0275\u0275elementStart(82, "small");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 46)(86, "div", 47);
    \u0275\u0275element(87, "i", 10);
    \u0275\u0275elementStart(88, "small");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 46)(92, "div", 47);
    \u0275\u0275element(93, "i", 49);
    \u0275\u0275elementStart(94, "small");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 46)(98, "div", 47);
    \u0275\u0275element(99, "i", 50);
    \u0275\u0275elementStart(100, "small");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 46)(104, "div", 47);
    \u0275\u0275element(105, "i", 51);
    \u0275\u0275elementStart(106, "small");
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 46)(110, "div", 47);
    \u0275\u0275element(111, "i", 52);
    \u0275\u0275elementStart(112, "small");
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(115, "div", 53)(116, "div", 54);
    \u0275\u0275element(117, "app-calendar", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 56)(119, "div", 57)(120, "div", 58)(121, "h5", 20);
    \u0275\u0275element(122, "i", 59);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 22);
    \u0275\u0275template(126, Dashboard_div_0_div_126_Template, 2, 2, "div", 60)(127, Dashboard_div_0_div_127_Template, 3, 3, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 62)(129, "div", 63)(130, "h5", 20);
    \u0275\u0275element(131, "i", 64);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "a", 35);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 22);
    \u0275\u0275template(138, Dashboard_div_0_div_138_Template, 2, 2, "div", 36)(139, Dashboard_div_0_div_139_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.children);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 44, "DASHBOARD.CHILDREN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.userRole === "Admin");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userRole === "Admin");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 46, "DASHBOARD.CHILD_ATTENDANCE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.children);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 48, "DASHBOARD.WEEKLY_ATTENDANCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.attendance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.attendance);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 50, "DASHBOARD.RECENTLY_ADDED_CHILDREN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(78, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 52, "DASHBOARD.VIEW_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.children);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 54, "DASHBOARD.GENDER_DISTRIBUTION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.children);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 56, "DASHBOARD.FEE_PAYMENT_STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.fees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.fees);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 58, "DASHBOARD.QUICK_LINKS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(79, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 60, "DASHBOARD.ADD_CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(80, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 62, "DASHBOARD.CHILDREN_LIST"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(81, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 64, "DASHBOARD.ADD_LEAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(82, _c3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 66, "DASHBOARD.DAILY_REPORTS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(83, _c4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 68, "DASHBOARD.PAYMENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(84, _c5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 70, "DASHBOARD.RECLAMATIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("events", ctx_r0.upcomingEvents);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 72, "DASHBOARD.UPCOMING_EVENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.events);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.events);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 74, "DASHBOARD.UNPAID_CHILDREN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(85, _c4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 76, "DASHBOARD.VIEW_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.fees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.fees);
  }
}
function Dashboard_ion_content_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158);
    \u0275\u0275element(2, "app-skeleton", 159);
    \u0275\u0275elementStart(3, "div", 160);
    \u0275\u0275element(4, "app-skeleton", 161)(5, "app-skeleton", 161)(6, "app-skeleton", 162);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 80)("width", "80px")("circle", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 24)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "40%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "50%");
  }
}
function Dashboard_ion_content_1_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174)(1, "button", 175);
    \u0275\u0275listener("click", function Dashboard_ion_content_1_div_14_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.prevChild());
    });
    \u0275\u0275element(2, "i", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 177);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 175);
    \u0275\u0275listener("click", function Dashboard_ion_content_1_div_14_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.nextChild());
    });
    \u0275\u0275element(6, "i", 178);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.selectedChildIndex === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.selectedChildIndex + 1, "/", ctx_r0.myChildren.length);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.selectedChildIndex === ctx_r0.myChildren.length - 1);
  }
}
function Dashboard_ion_content_1_div_14_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 181);
    \u0275\u0275listener("click", function Dashboard_ion_content_1_div_14_div_15_span_1_Template_span_click_0_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectChild(i_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", i_r9 === ctx_r0.selectedChildIndex);
  }
}
function Dashboard_ion_content_1_div_14_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, Dashboard_ion_content_1_div_14_div_15_span_1_Template, 1, 2, "span", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.myChildren)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_ion_content_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275listener("touchstart", function Dashboard_ion_content_1_div_14_Template_div_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTouchStart($event));
    })("touchend", function Dashboard_ion_content_1_div_14_Template_div_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onTouchEnd($event));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275template(2, Dashboard_ion_content_1_div_14_div_2_Template, 7, 4, "div", 164);
    \u0275\u0275elementStart(3, "button", 165);
    \u0275\u0275element(4, "i", 166);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 167);
    \u0275\u0275element(6, "img", 168);
    \u0275\u0275elementStart(7, "div", 169)(8, "h3", 170);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 171);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 172);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, Dashboard_ion_content_1_div_14_div_15_Template, 2, 2, "div", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.myChildren.length > 1 ? "child-status-card children-carousel" : "child-status-card one");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.myChildren.length > 1 ? "card-header-row" : "one-child");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.myChildren.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c7, (tmp_5_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_5_0.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c7, (tmp_6_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_6_0.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getChildProfilePictureUrl(ctx_r0.getSelectedChild()), \u0275\u0275sanitizeUrl)("alt", (tmp_8_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_8_0.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", (tmp_9_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_9_0.firstName, " ", (tmp_9_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_9_0.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.getAge((tmp_10_0 = ctx_r0.getSelectedChild()) == null ? null : tmp_10_0.dateOfBirth), " ", \u0275\u0275pipeBind1(12, 15, "DASHBOARD.OLD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getCheckInStatus(ctx_r0.getSelectedChild()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.myChildren.length > 1);
  }
}
function Dashboard_ion_content_1_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "div", 185);
    \u0275\u0275element(2, "app-skeleton", 159);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 186);
    \u0275\u0275element(4, "app-skeleton", 187)(5, "app-skeleton", 162);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 40)("width", "40px")("circle", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 16)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "50%");
  }
}
function Dashboard_ion_content_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182);
    \u0275\u0275template(1, Dashboard_ion_content_1_div_20_div_1_Template, 6, 7, "div", 183);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c10));
  }
}
function Dashboard_ion_content_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 184)(2, "div", 185)(3, "span", 188);
    \u0275\u0275text(4, "\u{1F34E}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 189)(6, "h4", 190);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 191);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 184)(13, "div", 185)(14, "span", 188);
    \u0275\u0275text(15, "\u{1F319}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 189)(17, "h4", 190);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 191);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 184)(23, "div", 185)(24, "span", 188);
    \u0275\u0275text(25, "\u{1F3A8}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 189)(27, "h4", 190);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 191);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "DASHBOARD.MEALS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("(", ctx_r0.todayStats.meals.completed, "/", ctx_r0.todayStats.meals.total, " ", \u0275\u0275pipeBind1(11, 11, "DASHBOARD.COMPLETED"), ")");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "DASHBOARD.NAP_TIME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r0.todayStats.napTime, ")");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 15, "DASHBOARD.ACTIVITIES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("(", ctx_r0.todayStats.activities, " ", \u0275\u0275pipeBind1(32, 17, "DASHBOARD.COMPLETED"), ")");
  }
}
function Dashboard_ion_content_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-activity-timeline", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 4);
  }
}
function Dashboard_ion_content_1_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 196)(1, "div", 197)(2, "div", 198);
    \u0275\u0275element(3, "i", 199);
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "DASHBOARD.NO_ACTIVITY_TODAY"));
  }
}
function Dashboard_ion_content_1_div_27_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 209);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activity_r10.notes);
  }
}
function Dashboard_ion_content_1_div_27_div_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 210);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "DASHBOARD.DURATION"), ": ", activity_r10.duration);
  }
}
function Dashboard_ion_content_1_div_27_div_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 211);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "DASHBOARD.FOOD"), ": ", activity_r10.foodItem);
  }
}
function Dashboard_ion_content_1_div_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 200);
    \u0275\u0275element(1, "div", 201);
    \u0275\u0275elementStart(2, "div", 202)(3, "div", 203)(4, "p", 204);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Dashboard_ion_content_1_div_27_div_3_p_7_Template, 2, 1, "p", 205)(8, Dashboard_ion_content_1_div_27_div_3_p_8_Template, 3, 4, "p", 206)(9, Dashboard_ion_content_1_div_27_div_3_p_9_Template, 3, 4, "p", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "i", 208);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c12, activity_r10.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 6, activity_r10.activityTime, "h:mm a"), ": ", activity_r10.activityType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", activity_r10.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.foodItem);
  }
}
function Dashboard_ion_content_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Dashboard_ion_content_1_div_27_div_1_Template, 7, 3, "div", 193);
    \u0275\u0275elementStart(2, "div", 194);
    \u0275\u0275template(3, Dashboard_ion_content_1_div_27_div_3_Template, 11, 11, "div", 195);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.todayActivities.length == 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.todayActivities)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_ion_content_1_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "div", 214);
    \u0275\u0275element(2, "app-skeleton", 159);
    \u0275\u0275elementStart(3, "div", 215);
    \u0275\u0275element(4, "app-skeleton", 161)(5, "app-skeleton", 187)(6, "app-skeleton", 162);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 50)("width", "50px")("circle", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 18)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "50%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "40%");
  }
}
function Dashboard_ion_content_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Dashboard_ion_content_1_div_32_div_1_Template, 7, 9, "div", 212);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c8));
  }
}
function Dashboard_ion_content_1_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 218)(2, "div", 198);
    \u0275\u0275element(3, "i", 199);
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "DASHBOARD.NO_EVENTS"));
  }
}
function Dashboard_ion_content_1_div_33_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 225);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r11.place);
  }
}
function Dashboard_ion_content_1_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 219)(1, "div", 220);
    \u0275\u0275element(2, "i", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122)(4, "h4", 222);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 223);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, Dashboard_ion_content_1_div_33_div_2_p_9_Template, 2, 1, "p", 224);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r11 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c9, event_r11.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 4, event_r11.time, "MMM d, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r11.place);
  }
}
function Dashboard_ion_content_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Dashboard_ion_content_1_div_33_div_1_Template, 7, 3, "div", 216)(2, Dashboard_ion_content_1_div_33_div_2_Template, 10, 9, "div", 217);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upcomingEvents.length == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.upcomingEvents)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_ion_content_1_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275element(1, "app-skeleton", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("height", 150)("width", "100%");
  }
}
function Dashboard_ion_content_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226);
    \u0275\u0275template(1, Dashboard_ion_content_1_div_38_div_1_Template, 2, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c10));
  }
}
function Dashboard_ion_content_1_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198);
    \u0275\u0275element(2, "i", 230);
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "DASHBOARD.NO_PHOTOS_YET"));
  }
}
function Dashboard_ion_content_1_div_39_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 232);
    \u0275\u0275element(1, "img", 233);
    \u0275\u0275elementStart(2, "div", 234);
    \u0275\u0275element(3, "i", 235);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c13));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getPhotoThumbnailUrl(photo_r12), \u0275\u0275sanitizeUrl)("alt", photo_r12.title || "Child photo");
  }
}
function Dashboard_ion_content_1_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226);
    \u0275\u0275template(1, Dashboard_ion_content_1_div_39_div_2_div_1_Template, 4, 4, "div", 231);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentPhotos)("ngForTrackBy", ctx_r0.trackById);
  }
}
function Dashboard_ion_content_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Dashboard_ion_content_1_div_39_div_1_Template, 6, 3, "div", 216)(2, Dashboard_ion_content_1_div_39_div_2_Template, 2, 2, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentPhotos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentPhotos.length > 0);
  }
}
function Dashboard_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 137)(1, "div", 138)(2, "div", 139)(3, "div", 140)(4, "div", 141)(5, "div", 142)(6, "h2", 143);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 144);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 145)(12, "img", 146);
    \u0275\u0275listener("click", function Dashboard_ion_content_1_Template_img_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToParentProfile());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(13, Dashboard_ion_content_1_div_13_Template, 7, 9, "div", 147)(14, Dashboard_ion_content_1_div_14_Template, 16, 21, "div", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 149)(16, "div", 150)(17, "h2", 151);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Dashboard_ion_content_1_div_20_Template, 2, 2, "div", 152)(21, Dashboard_ion_content_1_div_21_Template, 33, 19, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 153)(23, "h2", 151);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, Dashboard_ion_content_1_div_26_Template, 2, 1, "div", 24)(27, Dashboard_ion_content_1_div_27_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 154)(29, "h2", 151);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, Dashboard_ion_content_1_div_32_Template, 2, 2, "div", 24)(33, Dashboard_ion_content_1_div_33_Template, 3, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 155)(35, "h2", 151);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, Dashboard_ion_content_1_div_38_Template, 2, 2, "div", 156)(39, Dashboard_ion_content_1_div_39_Template, 3, 2, "div", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r0.getGreeting(), ", ", ctx_r0.userName, " ! \u{1F44B}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 22, "DASHBOARD.MINIMINDS_HOME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.userProfilePicture || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl)("alt", ctx_r0.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.children && ctx_r0.myChildren.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(19, 24, "DASHBOARD.TODAY_STATS"), " - ", ctx_r0.getSelectedChildName());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.activities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.activities);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(25, 26, "DASHBOARD.ACTIVITIES"), " - ", ctx_r0.getSelectedChildName());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.activities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.activities);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 28, "DASHBOARD.UPCOMING_EVENTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.events);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.events);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(37, 30, "DASHBOARD.RECENT_PHOTOS"), " - ", ctx_r0.getSelectedChildName());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingStates.photos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingStates.photos);
  }
}
Chart.register(ArcElement, plugin_tooltip, plugin_legend, DoughnutController, BarElement, BarController, LinearScale, CategoryScale);
var Dashboard = class _Dashboard {
  authService;
  childrenService;
  parentService;
  eventService;
  attendanceService;
  dailyActivityService;
  leavesService;
  galleryService;
  feeService;
  staticFeesService;
  dashboardService;
  router;
  translateService;
  langChangeSub;
  userRole = null;
  userName = "";
  userProfilePicture = "";
  loading = false;
  // Changed to false - page loads immediately
  // Individual loading states for progressive loading
  loadingStates = {
    children: true,
    parents: true,
    events: true,
    attendance: true,
    fees: true,
    leaves: true,
    activities: true,
    photos: true
  };
  stats = {
    children: 0,
    parents: 0,
    teachers: 0,
    events: 0,
    activeChildren: 0,
    todayAttendance: 0
  };
  monthlyStats = {
    childrenChange: 0,
    eventsChange: 0,
    incomeChange: 0,
    income: 0
  };
  recentChildren = [];
  upcomingEvents = [];
  myChildren = [];
  upcomingLeaves = [];
  unpaidChildren = [];
  selectedChildIndex = 0;
  todayActivities = [];
  recentPhotos = [];
  todayStats = {
    meals: { completed: 0, total: 0 },
    napTime: "",
    activities: 0
  };
  // Leave Chart Data
  leavesChartData = {
    labels: ["Present", "Absent"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#202c4b", "#a7a7a7ff"],
      hoverBackgroundColor: ["#1b253dff", "#a7a7a7ff"]
    }]
  };
  leavesChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = (value / total * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };
  // Gender Chart Data
  genderChartData = {
    labels: ["Boys", "Girls"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#a8c5ff", "#feccfd"],
      hoverBackgroundColor: ["#9bbaf6ff", "#f0bfefff"]
    }]
  };
  genderChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = (value / total * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };
  // Educators Attendance Chart Data
  educatorsAttendanceChartData = {
    labels: ["Present", "Absent"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#7dd3c0", "#e9ecef"],
      hoverBackgroundColor: ["#218838", "#dee2e6"]
    }]
  };
  educatorsAttendanceChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = (value / total * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };
  boysCount = 0;
  girlsCount = 0;
  boysPercentage = 0;
  girlsPercentage = 0;
  presentCount = 0;
  absentCount = 0;
  presentPercentage = 0;
  absentPercentage = 0;
  paymentStats = {
    paid: 0,
    pending: 0,
    overdue: 0
  };
  paymentChartData = {
    labels: ["Paid", "Pending", "Overdue"],
    datasets: [{
      data: [0, 0, 0],
      backgroundColor: ["#7dd3c0", "#a8c5ff", "#feccfd"],
      hoverBackgroundColor: ["#75cbb9ff", "#9bbaf6ff", "#f0bfefff"]
    }]
  };
  paymentChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  attendanceChartData = {
    labels: ["Present", "Absent"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#7dd3c0", "#e9ecef"],
      hoverBackgroundColor: ["#6ec9b6ff", "#dee2e6"]
    }]
  };
  attendanceBarChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Attendance",
      data: [10, 12, 11, 13, 12, 8, 7],
      backgroundColor: "#7db9ff",
      borderColor: "#7db9ff",
      borderWidth: 1,
      borderRadius: 12
    }]
  };
  attendanceChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = (value / total * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    }
  };
  attendanceBarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  constructor(authService, childrenService, parentService, eventService, attendanceService, dailyActivityService, leavesService, galleryService, feeService, staticFeesService, dashboardService, router, translateService) {
    this.authService = authService;
    this.childrenService = childrenService;
    this.parentService = parentService;
    this.eventService = eventService;
    this.attendanceService = attendanceService;
    this.dailyActivityService = dailyActivityService;
    this.leavesService = leavesService;
    this.galleryService = galleryService;
    this.feeService = feeService;
    this.staticFeesService = staticFeesService;
    this.dashboardService = dashboardService;
    this.router = router;
    this.translateService = translateService;
  }
  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    const user = this.authService.getCurrentUser();
    this.userName = user?.firstName || this.userRole;
    this.userProfilePicture = user?.profilePicture || "";
    this.initializeCharts();
    this.updateChartLabels();
    this.loadDashboardData();
    this.langChangeSub = this.translateService.onLangChange.subscribe(() => {
      this.updateChartLabels();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  initializeCharts() {
    this.paymentChartData.datasets[0].data = [1, 1, 1];
    this.attendanceChartData.datasets[0].data = [0, 0];
  }
  updateChartLabels() {
    this.leavesChartData.labels = [
      this.translateService.instant("DASHBOARD.PRESENT"),
      this.translateService.instant("DASHBOARD.ABSENT")
    ];
    this.genderChartData.labels = [
      this.translateService.instant("DASHBOARD.BOYS"),
      this.translateService.instant("DASHBOARD.GIRLS")
    ];
    this.educatorsAttendanceChartData.labels = [
      this.translateService.instant("DASHBOARD.PRESENT"),
      this.translateService.instant("DASHBOARD.ABSENT")
    ];
    this.paymentChartData.labels = [
      this.translateService.instant("DASHBOARD.PAID"),
      this.translateService.instant("DASHBOARD.PENDING"),
      this.translateService.instant("DASHBOARD.OVERDUE")
    ];
    this.attendanceChartData.labels = [
      this.translateService.instant("DASHBOARD.PRESENT"),
      this.translateService.instant("DASHBOARD.ABSENT")
    ];
    this.attendanceBarChartData.labels = [
      this.translateService.instant("DASHBOARD.MON"),
      this.translateService.instant("DASHBOARD.TUE"),
      this.translateService.instant("DASHBOARD.WED"),
      this.translateService.instant("DASHBOARD.THU"),
      this.translateService.instant("DASHBOARD.FRI"),
      this.translateService.instant("DASHBOARD.SAT"),
      this.translateService.instant("DASHBOARD.SUN")
    ];
    this.attendanceBarChartData.datasets[0].label = this.translateService.instant("DASHBOARD.ATTENDANCE");
  }
  loadDashboardData() {
    this.loadingStates = {
      children: true,
      parents: true,
      events: true,
      attendance: true,
      fees: true,
      leaves: true,
      activities: true,
      photos: true
    };
    if (this.userRole === "Parent") {
      this.loadParentDashboard();
    } else {
      this.loadAdminTeacherDashboard();
    }
  }
  loadParentDashboard() {
    this.dashboardService.getParentDashboard().pipe(catchError(() => {
      this.loadParentDashboardLegacy();
      return of(null);
    })).subscribe({
      next: (data) => {
        if (!data)
          return;
        if (data.parent?.profilePictureUrl) {
          const fullUrl = this.getFullUrl(data.parent.profilePictureUrl);
          this.authService.updateProfilePicture(fullUrl);
          this.userProfilePicture = fullUrl;
        } else if (data.parent?.profilePicture) {
          this.authService.updateProfilePicture(data.parent.profilePicture);
          this.userProfilePicture = data.parent.profilePicture;
        }
        this.myChildren = data.children.map((c) => __spreadProps(__spreadValues({}, c), {
          checkInTime: c.todayAttendance?.checkInTime,
          checkOutTime: c.todayAttendance?.checkOutTime
        }));
        this.stats.children = data.children.length;
        this.upcomingEvents = data.upcomingEvents.map((e) => __spreadProps(__spreadValues({}, e), { time: e.timeString }));
        this.todayActivities = data.todayActivities;
        this.calculateTodayStats(data.todayActivities);
        if (data.children.length > 0) {
          this.loadRecentPhotos(data.children[0].id);
        } else {
          this.loadingStates.photos = false;
        }
        this.loadingStates = {
          children: false,
          parents: false,
          events: false,
          attendance: false,
          fees: false,
          leaves: false,
          activities: false,
          photos: this.loadingStates.photos
          // Keep photo loading state
        };
      },
      error: () => {
        this.loadParentDashboardLegacy();
      }
    });
  }
  // Fallback method using multiple API calls
  loadParentDashboardLegacy() {
    const parentId = this.authService.getParentId();
    let todayAttendances = [];
    if (parentId) {
      this.parentService.getParentWithChildren(parentId).pipe(catchError(() => of(null))).subscribe({
        next: (parent) => {
          if (parent?.profilePictureUrl) {
            const fullUrl = this.getFullUrl(parent.profilePictureUrl);
            this.authService.updateProfilePicture(fullUrl);
            this.userProfilePicture = fullUrl;
          } else if (parent?.profilePicture) {
            this.authService.updateProfilePicture(parent.profilePicture);
            this.userProfilePicture = parent.profilePicture;
          }
          this.loadingStates.parents = false;
        },
        error: () => {
          this.loadingStates.parents = false;
        }
      });
    } else {
      this.loadingStates.parents = false;
    }
    this.childrenService.loadChildren().pipe(catchError(() => of([]))).subscribe({
      next: (children) => {
        this.myChildren = children;
        this.stats.children = children.length;
        if (todayAttendances.length > 0) {
          this.applyAttendanceToChildren(todayAttendances);
        }
        if (children.length > 0 && children[0].id) {
          this.loadTodayActivities(children[0].id);
        } else {
          this.loadingStates.activities = false;
          this.loadingStates.photos = false;
        }
        this.loadingStates.children = false;
      },
      error: () => {
        this.myChildren = [];
        this.loadingStates.children = false;
        this.loadingStates.activities = false;
        this.loadingStates.photos = false;
      }
    });
    this.eventService.loadEvents().pipe(catchError(() => of([]))).subscribe({
      next: (events) => {
        const now = /* @__PURE__ */ new Date();
        this.upcomingEvents = events.filter((e) => new Date(e.time) > now).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).slice(0, 3);
        this.loadingStates.events = false;
      },
      error: () => {
        this.loadingStates.events = false;
      }
    });
    this.attendanceService.getTodayAttendance().pipe(catchError(() => of([]))).subscribe({
      next: (attendances) => {
        todayAttendances = attendances;
        if (this.myChildren.length > 0) {
          this.applyAttendanceToChildren(attendances);
        }
        this.loadingStates.attendance = false;
      },
      error: () => {
        this.loadingStates.attendance = false;
      }
    });
    this.loadingStates.fees = false;
    this.loadingStates.leaves = false;
  }
  // Helper method to apply attendance data to children
  applyAttendanceToChildren(attendances) {
    this.myChildren.forEach((child) => {
      const todayAttendance = attendances.find((att) => att.childId === child.id);
      if (todayAttendance) {
        if (todayAttendance.checkInTime) {
          child.checkInTime = todayAttendance.checkInTime;
        }
        if (todayAttendance.checkOutTime) {
          child.checkOutTime = todayAttendance.checkOutTime;
        }
      }
    });
  }
  loadTodayActivities(childId) {
    this.loadingStates.activities = true;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.dailyActivityService.getActivitiesByChild(childId, today).subscribe({
      next: (activities) => {
        this.todayActivities = activities.sort((a, b) => new Date(a.activityTime).getTime() - new Date(b.activityTime).getTime());
        this.calculateTodayStats(activities);
        this.loadingStates.activities = false;
      },
      error: (error) => {
        console.error("Error loading activities:", error);
        this.todayActivities = [];
        this.loadingStates.activities = false;
      }
    });
    this.loadRecentPhotos(childId);
  }
  loadRecentPhotos(childId) {
    this.loadingStates.photos = true;
    this.galleryService.getPhotosByChild(childId, 1, 3).subscribe({
      next: (response) => {
        this.recentPhotos = response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3);
        this.loadingStates.photos = false;
      },
      error: (error) => {
        console.error("Error loading recent photos:", error);
        this.recentPhotos = [];
        this.loadingStates.photos = false;
      }
    });
  }
  calculateTodayStats(activities) {
    const meals = activities.filter((a) => a.activityType.toLowerCase().includes("meal") || a.activityType.toLowerCase().includes("snack"));
    this.todayStats.meals.completed = meals.length;
    this.todayStats.meals.total = 3;
    const napActivity = activities.find((a) => a.activityType.toLowerCase().includes("nap"));
    this.todayStats.napTime = napActivity?.duration || "0 hour";
    this.todayStats.activities = activities.filter((a) => !a.activityType.toLowerCase().includes("meal") && !a.activityType.toLowerCase().includes("snack") && !a.activityType.toLowerCase().includes("nap")).length;
  }
  loadAdminTeacherDashboard() {
    const request = this.userRole === "Teacher" ? this.dashboardService.getTeacherDashboard() : this.dashboardService.getAdminDashboard();
    request.pipe(catchError(() => {
      this.loadAdminTeacherDashboardLegacy();
      return of(null);
    })).subscribe({
      next: (data) => {
        if (!data)
          return;
        this.stats.children = data.stats.totalChildren;
        this.stats.activeChildren = data.stats.activeChildren;
        this.stats.parents = data.stats.totalParents;
        this.stats.teachers = data.stats.totalTeachers;
        this.stats.events = data.stats.totalEvents;
        this.boysCount = data.stats.boysCount;
        this.girlsCount = data.stats.girlsCount;
        const total = this.boysCount + this.girlsCount;
        if (total > 0) {
          this.boysPercentage = Math.round(this.boysCount / total * 100);
          this.girlsPercentage = Math.round(this.girlsCount / total * 100);
          this.genderChartData.datasets[0].data = [this.boysCount, this.girlsCount];
        } else {
          this.boysCount = 0;
          this.girlsCount = 0;
          this.boysPercentage = 50;
          this.girlsPercentage = 50;
          this.genderChartData.datasets[0].data = [1, 1];
        }
        this.presentCount = data.stats.todayPresentCount;
        this.absentCount = data.stats.todayAbsentCount;
        const attendanceTotal = this.presentCount + this.absentCount;
        if (attendanceTotal > 0) {
          this.presentPercentage = Math.round(this.presentCount / attendanceTotal * 100);
          this.absentPercentage = Math.round(this.absentCount / attendanceTotal * 100);
          this.attendanceChartData.datasets[0].data = [this.presentCount, this.absentCount];
        } else {
          this.presentCount = 0;
          this.absentCount = 0;
          this.presentPercentage = 50;
          this.absentPercentage = 50;
          this.attendanceChartData.datasets[0].data = [1, 1];
        }
        this.recentChildren = data.recentChildren;
        this.upcomingEvents = data.upcomingEvents.map((e) => __spreadProps(__spreadValues({}, e), { time: e.timeString }));
        if (data.weeklyAttendance.length > 0) {
          this.attendanceBarChartData.datasets[0].data = data.weeklyAttendance.map((day) => day.presentCount);
        } else {
          this.setDefaultAttendanceData();
        }
        this.upcomingLeaves = data.upcomingLeaves;
        this.unpaidChildren = (data.unpaidFees || []).map((f) => this.toUnpaidItem(f, "dashboard")).filter((x) => !!x);
        this.mergeStaticUnpaidFees();
        this.calculatePaymentStats(data.stats.totalChildren);
        this.monthlyStats.childrenChange = data.stats.newChildrenThisMonth;
        this.monthlyStats.income = data.stats.totalChildren * 150;
        this.loadingStates = {
          children: false,
          parents: false,
          events: false,
          attendance: false,
          fees: false,
          leaves: false,
          activities: false,
          photos: false
        };
      },
      error: () => {
        this.loadAdminTeacherDashboardLegacy();
      }
    });
  }
  // Fallback method using multiple API calls
  loadAdminTeacherDashboardLegacy() {
    let loadedChildren = [];
    let loadedEvents = [];
    this.childrenService.loadChildren().pipe(catchError(() => of([]))).subscribe({
      next: (children) => {
        loadedChildren = children;
        this.stats.children = children.length;
        this.stats.activeChildren = children.filter((c) => c.isActive).length;
        this.recentChildren = children.slice(0, 8);
        this.calculateGenderStats(children);
        this.calculateAttendanceStats();
        if (loadedEvents.length > 0 || !this.loadingStates.events) {
          this.calculateMonthlyChanges(children, loadedEvents);
        }
        this.loadingStates.children = false;
      },
      error: () => {
        this.loadingStates.children = false;
      }
    });
    this.parentService.loadParents().pipe(catchError(() => of([]))).subscribe({
      next: (parents) => {
        this.stats.parents = parents.length;
        this.loadingStates.parents = false;
      },
      error: () => {
        this.loadingStates.parents = false;
      }
    });
    this.eventService.loadEvents().pipe(catchError(() => of([]))).subscribe({
      next: (events) => {
        loadedEvents = events;
        this.stats.events = events.length;
        const now = /* @__PURE__ */ new Date();
        this.upcomingEvents = events.filter((e) => new Date(e.time) > now).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()).slice(0, 2);
        if (loadedChildren.length > 0 || !this.loadingStates.children) {
          this.calculateMonthlyChanges(loadedChildren, events);
        }
        this.loadingStates.events = false;
      },
      error: () => {
        this.loadingStates.events = false;
      }
    });
    this.attendanceService.getWeeklyAttendance().pipe(catchError(() => of([]))).subscribe({
      next: (attendanceData) => {
        if (attendanceData.length > 0) {
          this.attendanceBarChartData.datasets[0].data = attendanceData.map((day) => day.presentCount || 0);
        } else {
          this.setDefaultAttendanceData();
        }
        this.loadingStates.attendance = false;
      },
      error: () => {
        this.setDefaultAttendanceData();
        this.loadingStates.attendance = false;
      }
    });
    this.leavesService.getAllLeaves("Approved").pipe(catchError(() => of([]))).subscribe({
      next: (leaves) => {
        const now = /* @__PURE__ */ new Date();
        this.upcomingLeaves = leaves.filter((leave) => new Date(leave.startDate) > now).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()).slice(0, 5);
        this.loadingStates.leaves = false;
      },
      error: () => {
        this.loadingStates.leaves = false;
      }
    });
    this.feeService.getFees().pipe(catchError(() => of([]))).subscribe({
      next: (fees) => {
        const unpaid = fees.filter((fee) => fee.status === "pending" || fee.status === "overdue");
        this.unpaidChildren = unpaid.map((f) => this.toUnpaidItem(f, "fee")).filter((x) => !!x).sort(this.sortUnpaidFees).slice(0, 5);
        this.mergeStaticUnpaidFees();
      },
      error: () => {
        this.unpaidChildren = [];
        this.mergeStaticUnpaidFees();
      }
    });
  }
  sortUnpaidFees(a, b) {
    if (a.status === "overdue" && b.status !== "overdue")
      return -1;
    if (a.status !== "overdue" && b.status === "overdue")
      return 1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  }
  getUnpaidFeeName(fee) {
    const name = fee.childName || fee.payerName || fee.name || [fee.child?.firstName, fee.child?.lastName].filter(Boolean).join(" ") || fee.title;
    return name && name.trim() ? name : "#" + (fee.id ?? "");
  }
  toUnpaidItem(fee, source) {
    const status = (fee.status || "").toLowerCase();
    if (status === "paid")
      return null;
    const dueDate = fee.dueDate || fee.feeDate;
    if (!dueDate)
      return null;
    const now = /* @__PURE__ */ new Date();
    const due = new Date(dueDate);
    const isOverdue = status.includes("overdue") || status === "pending" && due.getTime() < now.getTime();
    const daysOverdue = isOverdue ? Math.max(0, Math.floor((now.getTime() - due.getTime()) / 864e5)) : void 0;
    return {
      id: `${source}-${fee.id}`,
      name: this.getUnpaidFeeName(fee),
      amount: fee.amount,
      dueDate,
      status: isOverdue ? "overdue" : "pending",
      daysOverdue
    };
  }
  mergeStaticUnpaidFees() {
    this.staticFeesService.getStaticFees({ status: "Pending" }).pipe(catchError(() => of([]))).subscribe({
      next: (staticFees) => {
        const staticItems = staticFees.map((f) => this.toUnpaidItem(f, "static")).filter((x) => !!x);
        this.unpaidChildren = [...this.unpaidChildren, ...staticItems].sort(this.sortUnpaidFees).slice(0, 5);
        this.loadingStates.fees = false;
      },
      error: () => {
        this.loadingStates.fees = false;
      }
    });
  }
  setDefaultAttendanceData() {
    this.attendanceBarChartData.datasets[0].data = [0, 0, 0, 0, 0, 0, 0];
  }
  calculateAttendanceStats() {
    const totalChildren = this.stats.children || 20;
    this.presentCount = Math.round(totalChildren * 0.85);
    this.absentCount = totalChildren - this.presentCount;
    if (totalChildren > 0) {
      this.presentPercentage = Math.round(this.presentCount / totalChildren * 100);
      this.absentPercentage = Math.round(this.absentCount / totalChildren * 100);
      this.attendanceChartData.datasets[0].data = [this.presentCount, this.absentCount];
    }
  }
  getGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return this.translateService.instant("DASHBOARD.GOOD_MORNING");
    if (hour < 18)
      return this.translateService.instant("DASHBOARD.GOOD_AFTERNOON");
    return this.translateService.instant("DASHBOARD.GOOD_EVENING");
  }
  getAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || months === 0 && today.getDate() < birthDate.getDate()) {
      years--;
      months += 12;
    }
    if (today.getDate() < birthDate.getDate()) {
      months--;
    }
    if (years < 1) {
      const monthLabel = months !== 1 ? this.translateService.instant("DASHBOARD.MONTHS") : this.translateService.instant("DASHBOARD.MONTH");
      return `${months} ${monthLabel}`;
    }
    const yearLabel = years !== 1 ? this.translateService.instant("DASHBOARD.YEARS") : this.translateService.instant("DASHBOARD.YEAR");
    return `${years} ${yearLabel}`;
  }
  getCheckInStatus(child) {
    const checkInTime = child.checkInTime ? new Date(child.checkInTime) : null;
    const checkOutTime = child.checkOutTime ? new Date(child.checkOutTime) : null;
    if (checkInTime) {
      if (!checkOutTime || checkInTime > checkOutTime) {
        const time2 = checkInTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
        return `${this.translateService.instant("DASHBOARD.CHECKED_IN_AT")} ${time2} \u{1F60A}`;
      }
      const time = checkOutTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
      return `${this.translateService.instant("DASHBOARD.CHECKED_OUT_AT")} ${time} \u{1F44B}`;
    }
    return this.translateService.instant("DASHBOARD.NOT_CHECKED_IN_YET");
  }
  getSelectedChildName() {
    const child = this.getSelectedChild();
    return child ? `${child.firstName} ${child.lastName}` : "";
  }
  calculateGenderStats(children) {
    this.boysCount = children.filter((c) => c.gender?.toLowerCase() === "male").length;
    this.girlsCount = children.filter((c) => c.gender?.toLowerCase() === "female").length;
    const total = this.boysCount + this.girlsCount;
    if (total > 0) {
      this.boysPercentage = Math.round(this.boysCount / total * 100);
      this.girlsPercentage = Math.round(this.girlsCount / total * 100);
      this.genderChartData = {
        labels: [
          this.translateService.instant("DASHBOARD.BOYS"),
          this.translateService.instant("DASHBOARD.GIRLS")
        ],
        datasets: [{
          data: [this.boysCount, this.girlsCount],
          backgroundColor: ["#a8c5ff", "#feccfd"],
          hoverBackgroundColor: ["#9bbaf6ff", "#f0bfefff"]
        }]
      };
    }
    this.calculatePaymentStats(children.length);
  }
  calculatePaymentStats(totalChildren) {
    if (totalChildren === 0)
      totalChildren = 1;
    this.paymentStats.paid = Math.floor(totalChildren * 0.6);
    this.paymentStats.pending = Math.floor(totalChildren * 0.25);
    this.paymentStats.overdue = totalChildren - this.paymentStats.paid - this.paymentStats.pending;
    this.paymentChartData.datasets[0].data = [this.paymentStats.paid || 1, this.paymentStats.pending || 1, this.paymentStats.overdue || 1];
  }
  // Child slider methods
  nextChild() {
    if (this.selectedChildIndex < this.myChildren.length - 1) {
      this.selectedChildIndex++;
      this.loadSelectedChildData();
    }
  }
  prevChild() {
    if (this.selectedChildIndex > 0) {
      this.selectedChildIndex--;
      this.loadSelectedChildData();
    }
  }
  selectChild(index) {
    this.selectedChildIndex = index;
    this.loadSelectedChildData();
  }
  // Swipe functionality for child carousel
  touchStartX = 0;
  touchEndX = 0;
  swipeThreshold = 50;
  // Minimum distance for swipe
  onTouchStart(event) {
    this.touchStartX = event.changedTouches[0].screenX;
  }
  onTouchEnd(event) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }
  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    if (Math.abs(swipeDistance) > this.swipeThreshold) {
      if (swipeDistance > 0) {
        this.prevChild();
      } else {
        this.nextChild();
      }
    }
  }
  getSelectedChild() {
    return this.myChildren[this.selectedChildIndex] || null;
  }
  loadSelectedChildData() {
    const selectedChild = this.getSelectedChild();
    if (selectedChild?.id) {
      this.loadTodayActivities(selectedChild.id);
    }
  }
  calculateMonthlyChanges(children, events = []) {
    const now = /* @__PURE__ */ new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonthChildren = children.filter((c) => new Date(c.createdAt) < thisMonth).length;
    const thisMonthChildren = children.filter((c) => new Date(c.createdAt) >= thisMonth).length;
    this.monthlyStats.childrenChange = lastMonthChildren > 0 ? Math.round(thisMonthChildren / lastMonthChildren * 100) : 0;
    const lastMonthEvents = events.filter((e) => new Date(e.time) >= lastMonth && new Date(e.time) < thisMonth).length;
    const thisMonthEvents = events.filter((e) => new Date(e.time) >= thisMonth).length;
    this.monthlyStats.eventsChange = lastMonthEvents > 0 ? Math.round((thisMonthEvents - lastMonthEvents) / lastMonthEvents * 100) : 0;
    this.monthlyStats.income = children.length * 150;
    this.monthlyStats.incomeChange = Math.floor(Math.random() * 20) - 5;
  }
  goToParentProfile() {
    const parentId = this.authService.getParentId();
    if (parentId) {
      this.router.navigate(["/parents/detail", parentId]);
    }
  }
  getLeaveTypeColor(leaveType) {
    switch (leaveType) {
      case "Annual":
        return "rgb(61 94 225 / 75%) !important";
      case "Medical":
        return "rgb(220 53 69 / 75%) !important";
      case "Emergency":
        return "rgb(44 126 143 / 75%) !important";
      default:
        return "#6c757d !important";
    }
  }
  translateGender(gender) {
    if (!gender)
      return "";
    const key = `COMMON.${gender.toUpperCase()}`;
    const translated = this.translateService.instant(key);
    return translated !== key ? translated : gender;
  }
  // TrackBy functions for ngFor performance optimization
  trackById(index, item) {
    return item.id;
  }
  trackByIndex(index) {
    return index;
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
   * Get the thumbnail URL for a photo, preferring file-based URL over Base64
   */
  getPhotoThumbnailUrl(photo, defaultPicture = "assets/placeholder.jpg") {
    if (!photo)
      return defaultPicture;
    if (photo.thumbnailUrl && photo.thumbnailUrl.trim() !== "") {
      return this.getFullUrl(photo.thumbnailUrl);
    }
    if (photo.thumbnailData && photo.thumbnailData.trim() !== "") {
      return photo.thumbnailData;
    }
    if (photo.imageData && photo.imageData.trim() !== "") {
      return photo.imageData;
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
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(ParentService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(AttendanceService), \u0275\u0275directiveInject(DailyActivityService), \u0275\u0275directiveInject(LeavesService), \u0275\u0275directiveInject(GalleryService), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(StaticFeesService), \u0275\u0275directiveInject(DashboardService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 2, vars: 2, consts: [["class", "container-fluid mt-4", 4, "ngIf"], ["class", "parent", 4, "ngIf"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-xl-8", "first-dashbord-card"], [1, "row", "g-2", "g-md-4", "mb-3"], [1, "col-xl-4"], [1, "card", "stat-card", "shadow-sm"], [1, "card-body", "d-flex", "align-items-center", "p-3"], [1, "stat-icon-wrapper", "me-3"], [1, "bi", "bi-people-fill"], [1, "stat-content"], ["class", "stat-number", 4, "ngIf"], ["class", "skeleton-number", 4, "ngIf"], [1, "stat-label", "mb-0"], ["class", "col-xl-4", 4, "ngIf"], [1, "row", "g-2", "g-md-4"], [1, "col-xl-5", "mb-3"], [1, "card", "card-general", "card-attendance", "shadow-sm", "h-100"], [1, "card-header", "border-0"], [1, "mb-0"], [1, "bi", "bi-people-fill", "me-2"], [1, "card-body"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "col-xl-7"], [1, "card", "card-general", "shadow-sm"], [1, "card-title"], [1, "bi", "bi-calendar-check"], ["class", "d-flex align-items-center justify-content-center", "style", "height: 250px;", 4, "ngIf"], ["style", "height: 250px;", 4, "ngIf"], [1, "col-xl-12", "mt-0"], [1, "card", "card-recently", "shadow-sm", "card-general"], [1, "card-header", "bg-white", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "bi", "bi-person-fill-add"], [1, "view-all", "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], ["class", "skeleton-table", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "col-xl-6"], [1, "card", "card-general", "gender-card", "shadow-sm"], [1, "card-header"], [1, "card", "card-general", "card-statut-payment", "shadow-sm"], [1, "bi", "bi-wallet", "me-2"], [1, "quick-actions-container", "bg-white", "p-3", "mb-3", "shadow-sm"], [1, "mb-3"], [1, "row", "g-2"], [1, "col-4", "items"], [1, "card", "quick-action-card", "text-center", "p-3", 2, "cursor", "pointer", 3, "routerLink"], [1, "bi", "bi-person-plus-fill"], [1, "bi", "bi-calendar-plus"], [1, "bi", "bi-clipboard-data"], [1, "bi", "bi-credit-card"], [1, "bi", "bi-exclamation-triangle"], [1, "card", "calendar-dashbord", "shadow-sm", "mb-3"], [1, ""], [3, "events"], [1, "card", "card-general", "upcoming-events-desk", "shadow-sm", "mb-3"], [1, "card-header", "bg-white", "py-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-calendar-event", "me-2"], ["class", "skeleton-events", 4, "ngIf"], ["class", "events-list", 4, "ngIf"], [1, "card", "card-general", "card-recently", "fee-history", "shadow-sm", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "stat-number"], [1, "skeleton-number"], [1, "bi", "bi-person-workspace"], [1, "bi", "bi-person-fill"], [1, "text-center", "py-4"], [1, "skeleton-chart"], [1, "chart-container", "text-center", 2, "height", "180px", "width", "180px", "margin", "0 auto"], ["baseChart", "", "type", "doughnut", 3, "data", "options"], [1, "mt-3", "stat-style"], [1, "d-flex", "justify-content-between", "align-items-center", "items"], [1, "present", "circle"], [1, "fw-bold"], [1, "text-muted"], [1, "absent", "circle"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "250px"], [1, "skeleton-bar-chart"], [2, "height", "250px"], ["baseChart", "", "type", "bar", 3, "data", "options"], [1, "skeleton-table"], ["class", "skeleton-row", 4, "ngFor", "ngForOf"], [1, "skeleton-row"], [1, "table-responsive", "custom-table"], [1, "table", "table-hover"], [1, "action-recenttly"], ["class", "text-center text-muted py-4", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-inbox", "icon-3x", "mb-3", "opacity-25"], ["loading", "lazy", "alt", "student", 1, "img-fluid", "img-student", 3, "src"], [1, "text-nowrap", "name-last"], [1, "text-nowrap"], [1, "btn", "btn-sm", "btn-view", 3, "routerLink"], [1, "bi", "bi-eye"], [1, "first", "d-flex", "justify-content-between"], [1, "circle"], [1, "second", "d-flex", "justify-content-between"], [1, "circle", "paied"], [1, "text", "me-2"], [1, "text", "fw-bold"], [1, "circle", "pending"], [1, "circle", "overdue"], [1, "skeleton-events"], ["class", "skeleton-event", 4, "ngFor", "ngForOf"], [1, "skeleton-event"], [1, "events-list"], ["class", "event-item mb-3", "style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bi", "bi-calendar-x", 2, "font-size", "3rem", "opacity", "0.3"], [1, "mt-2", "mb-0"], [1, "event-item", "mb-3", 2, "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "align-items-center", "p-3", "bg-light", "rounded"], [1, "event-icon", "me-2"], [1, "icon-circle", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "day"], [1, "month"], [1, "event-content", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "event-name", "mb-0"], [1, "event-details"], ["class", "text-muted clplace", 4, "ngIf"], [1, "text-muted", "date-type"], ["class", "me-2", 4, "ngIf"], [1, "bi", "bi-clock-history"], [1, "text-muted", "clplace"], [1, "me-2"], [1, "bi", "bi-calendar2-event"], [1, "bi", "bi-check-circle", 2, "font-size", "2rem", "opacity", "0.3"], [1, "table", "table-hover", "mb-0"], ["loading", "lazy", "src", "assets/child.png", "alt", "child", 1, "img-fluid", "img-student", "me-2", 2, "width", "30px", "height", "30px", "border-radius", "50%"], [1, "text-nowrap", "fw-bold"], [1, "badge", 3, "ngClass"], ["class", "text-danger d-block", 4, "ngIf"], [1, "text-danger", "d-block"], [1, "parent"], [1, "parent-dashboard-new"], [1, "dashboard-header", "safe-area-top"], [1, "header-content"], [1, "row", "welcome-text"], [1, "col-10", "text-dash"], [1, "mb-1", "mt-4", "welcome", "font-inter"], [1, "mb-0", "black", "font-inter"], [1, "col-2", "img-dash"], [1, "rounded-circle", "profile-image", "img-fluid", 2, "cursor", "pointer", 3, "click", "src", "alt"], ["class", "child-status-card", 4, "ngIf"], ["class", "child-status-card", 3, "class", "touchstart", "touchend", 4, "ngIf"], [1, "container-fluid"], [1, "today-stats"], [1, "section-title"], ["class", "stats-grid", 4, "ngIf"], [1, "activities-section"], [1, "upcoming-events"], [1, "recent-photos-section"], ["class", "photos-grid", 4, "ngIf"], [1, "child-status-card"], [1, "child-info", "d-flex", "align-items-center", "gap-3"], [3, "height", "width", "circle"], [1, "child-details", "flex-grow-1"], [1, "mb-2", 3, "height", "width"], [3, "height", "width"], [1, "child-status-card", 3, "touchstart", "touchend"], ["class", "slider-controls", 4, "ngIf"], [1, "info-btn", 3, "routerLink"], [1, "bi", "bi-info-circle"], [1, "child-info", 2, "cursor", "pointer", 3, "routerLink"], [1, "child-avatar", 3, "src", "alt"], [1, "child-details"], [1, "child-name"], [1, "child-age"], [1, "check-in-time"], ["class", "child-dots", 4, "ngIf"], [1, "slider-controls"], [1, "slider-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "child-counter"], [1, "bi", "bi-chevron-right"], [1, "child-dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dot", 3, "click"], [1, "stats-grid"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "stat-item"], [1, "stat-icon-wrapper"], [1, "stat-info", "flex-grow-1"], [1, "mb-1", 3, "height", "width"], [1, "stat-icon"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [3, "count"], ["class", "event-card", 4, "ngIf"], [1, "timeline"], ["class", "timeline-item clickable-activity", "style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "event-card"], [1, "card", "card-general"], [1, "card-body", "text-center", "text-muted", "py-4"], [1, "bi", "bi-calendar-x", "icon-3x", "mb-3", "opacity-25"], [1, "timeline-item", "clickable-activity", 2, "cursor", "pointer", 3, "routerLink"], [1, "timeline-marker", "active"], [1, "timeline-content"], [1, "activity-info"], [1, "timeline-time"], ["class", "activity-notes", 4, "ngIf"], ["class", "activity-duration", 4, "ngIf"], ["class", "activity-food", 4, "ngIf"], [1, "bi", "bi-chevron-right", "activity-arrow"], [1, "activity-notes"], [1, "activity-duration"], [1, "activity-food"], ["class", "event-card mb-3", 4, "ngFor", "ngForOf"], [1, "event-card", "mb-3"], [1, "d-flex", "align-items-center", "gap-3"], [1, "flex-grow-1"], ["class", "card card-general", 4, "ngIf"], ["class", "event-card", "style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center"], [1, "event-card", 2, "cursor", "pointer", 3, "routerLink"], [1, "event-icon"], [1, "bi", "bi-calendar-event"], [1, "event-title"], [1, "event-date"], ["class", "event-place", 4, "ngIf"], [1, "event-place"], [1, "photos-grid"], ["class", "photo-item", 4, "ngFor", "ngForOf"], [1, "photo-item"], ["borderRadius", "12px", 3, "height", "width"], [1, "bi", "bi-images", "icon-3x", "mb-3", "opacity-25"], ["class", "photo-item", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "photo-item", 3, "routerLink"], [1, "photo-img", 3, "src", "alt"], [1, "photo-overlay"], [1, "bi", "bi-eye-fill"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Dashboard_div_0_Template, 140, 86, "div", 0)(1, Dashboard_ion_content_1_Template, 40, 32, "ion-content", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.userRole === "Admin" || ctx.userRole === "Teacher");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userRole === "Parent");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    BaseChartDirective,
    TranslateModule,
    CalendarComponent,
    SkeletonComponent,
    SkeletonActivityTimelineComponent,
    IonContent,
    DatePipe,
    TranslatePipe,
    AppCurrencyPipe
  ], styles: ['\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: none !important;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.bg-opacity-10[_ngcontent-%COMP%] {\n  opacity: 0.1;\n}\n.border-3[_ngcontent-%COMP%] {\n  border-width: 3px !important;\n}\n.card-recently[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.card-dashbord_top[_ngcontent-%COMP%] {\n  background-color: #7dd3c0 !important;\n  border: 1px solid #7dd3c0 !important;\n}\n.card-dashbord-all[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n  border-color: #E9EDF4;\n  position: relative;\n  background: transparent;\n  padding: 1rem 1.25rem 0rem !important;\n  border-bottom: none !important;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \n.card-dashbord-all[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700 !important;\n  color: #0E567D;\n  margin-bottom: 0;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.card-dashbord-all[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n  color: inherit !important;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .border-color[_ngcontent-%COMP%] {\n  border-color: #202c4b !important;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .border-color[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.card-dashbord-all[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .border-color[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.quick-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #202c4b;\n  border: none;\n  color: white;\n}\n  canvas {\n  display: block;\n  box-sizing: border-box;\n}\n.calendar-dashbord[_ngcontent-%COMP%] {\n  border: none;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-container {\n  box-shadow: none !important;\n  background: #ffffff;\n  background-color: #ffffff;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-day {\n  min-height: 45px;\n  max-height: 45px;\n  max-width: 45px !important;\n  min-width: 45px !important;\n  border-radius: 50%;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-day   .today {\n  background: #fff;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-header {\n  padding-bottom: 0;\n  background: #ffffff;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-header   h5 {\n  grid-column: 1;\n  grid-row: 1;\n  font-size: 18px;\n  font-weight: 600;\n  color: #202C4B;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-header   .left {\n  grid-column: 2;\n  justify-self: end;\n  background-color: #fff;\n  margin-right: 5px;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-header   .right {\n  grid-column: 3;\n  justify-self: start;\n  background-color: #fff;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-header   .right i {\n  color: #202C4B;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-weekdays {\n  background: rgba(255, 255, 255, 0);\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .weekday {\n  color: #202c4b;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-grid {\n  border: none;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-day {\n  border: none;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-day.selected {\n  border: 1px solid #dadce1;\n  background: #fff;\n  color: #202c4b;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .calendar-day.has-event {\n  background: var(--secondary-color);\n  color: white;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .fc-day-grid-event {\n  background-color: #202c4b !important;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .day-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding-right: 0;\n  padding-left: 0;\n}\n.calendar-dashbord[_ngcontent-%COMP%]     .events-container {\n  height: 0;\n  display: none;\n}\n.stat-style[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.event-dashbord[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  border-radius: 7px;\n}\n.event-dashbord[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   .date-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.event-dashbord[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   .date-time[_ngcontent-%COMP%]   .event-date-label[_ngcontent-%COMP%] {\n  background: #feccfd;\n  border-radius: 10px;\n  padding: 2px 10px;\n  font-size: 14px;\n}\n.event-dashbord[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   .date-time[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.event-dashbord[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 15px;\n  font-weight: 500;\n}\n.event-dashbord[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]   .event-classes[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .percentage.text-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  width: max-content;\n  color: white !important;\n  padding: 2px 5px;\n  font-size: 14px;\n  border-radius: 10px;\n  height: max-content;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n  background: #198754;\n  color: white !important;\n  padding: 2px 5px;\n  font-size: 14px;\n  width: max-content;\n  border-radius: 10px;\n  height: max-content;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #202c4b;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #feccfd;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .fee[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.first-dashbord-card[_ngcontent-%COMP%]   .fee[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #202c4b;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.fee-dashbord[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.fee-dashbord[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .circle.blue[_ngcontent-%COMP%] {\n  background: #202c4b;\n}\n.fee-dashbord[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .circle.bluelight[_ngcontent-%COMP%] {\n  background: #cdeaf0;\n}\n.fee-dashbord[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .circle.red[_ngcontent-%COMP%] {\n  background: #feccfd;\n}\n.fee-dashbord[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 767px) {\n  .menu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, calc(25% - 0.75rem));\n    grid-auto-flow: column;\n  }\n}\n.menu-item[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.today-stats-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #202c4b;\n  font-weight: 600;\n}\n.stat-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;\n}\nion-content.parent[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.parent-dashboard-new[_ngcontent-%COMP%] {\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 0;\n  min-height: 100vh;\n  padding-bottom: 20px;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #90b9fc 0%,\n      #95f2d7 100%);\n  padding: 24px 20px 16px;\n  padding-top: calc(env(safe-area-inset-top, 0px) + 16px);\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 105px;\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: black;\n  font-weight: bold;\n  line-height: 1;\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 3rem;\n  max-height: 3rem;\n  width: 3rem;\n  height: 3rem;\n  object-fit: cover;\n}\n.dashboard-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n.child-status-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 20px;\n  margin: 20px 5% 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transform: translateY(140px);\n  margin-top: -120px;\n}\n.child-status-card.one[_ngcontent-%COMP%] {\n  transform: translateY(105px);\n  margin-top: -100px;\n}\n.child-status-card.children-carousel[_ngcontent-%COMP%] {\n  margin: 20px 5% 50px;\n  margin-top: -120px;\n}\n.child-status-card[_ngcontent-%COMP%]   .one-child[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.child-status-card[_ngcontent-%COMP%]   .card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.child-status-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0;\n}\n.child-status-card[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6B7280;\n  cursor: pointer;\n}\n.child-status-card[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.child-status-card[_ngcontent-%COMP%]   .slider-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.child-status-card[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%] {\n  background: #F3F4F6;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.child-status-card[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #E5E7EB;\n  color: #374151;\n}\n.child-status-card[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.child-status-card[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-counter[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  min-width: 40px;\n  text-align: center;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n.child-status-card[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #E5E7EB;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.child-status-card[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background: #1DBAB4;\n  transform: scale(1.2);\n}\n.child-status-card[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover {\n  background: #9CA3AF;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.child-status-card[_ngcontent-%COMP%]   .child-age[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.45;\n  margin: 0px;\n}\n.child-status-card[_ngcontent-%COMP%]   .check-in-time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0 0 8px;\n}\n.today-stats[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.today-stats[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.today-stats[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 16px 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 8px;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: block;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   .stat-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n  margin-top: 4px;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 4px;\n}\n.today-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin: 0;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-bottom: 24px;\n}\n.quick-actions[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-scroll[_ngcontent-%COMP%]   .action-item_btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.quick-actions[_ngcontent-%COMP%]   .actions-scroll[_ngcontent-%COMP%]   .action-item_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: #1DBAB4;\n  border: none;\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(29, 186, 180, 0.3);\n  transition: transform 0.2s;\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 0px;\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 1.2;\n  max-width: 60px;\n  display: none;\n}\n.recent-photos-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]:hover   .photo-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(29, 186, 180, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.recent-photos-section[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n.activities-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.activities-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 32px;\n  margin-bottom: 24px;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 24px;\n  bottom: -24px;\n  width: 2px;\n  background: #1DBAB4;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%]   .activity-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%]:hover   .timeline-content[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%]   .activity-arrow[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 16px;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-item.clickable-activity[_ngcontent-%COMP%]:hover   .activity-arrow[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid #1DBAB4;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-marker.active[_ngcontent-%COMP%] {\n  background: #1DBAB4;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-left[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.activities-section[_ngcontent-%COMP%]   .timeline-time[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 8px;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-notes[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  margin: 4px 0;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-duration[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9CA3AF;\n  margin: 4px 0;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-food[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #1DBAB4;\n  margin: 4px 0;\n  font-weight: 500;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-detail[_ngcontent-%COMP%]   .activity-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.activities-section[_ngcontent-%COMP%]   .activity-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n}\n.upcoming-events[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.upcoming-events[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  transition: transform 0.2s;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #E0F2FE;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #1DBAB4;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 4px;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0;\n}\n.upcoming-events[_ngcontent-%COMP%]   .event-place[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 4px 0 0;\n}\n.quick-actions-container[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.quick-actions-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #202c4b;\n  display: flex;\n  align-items: center;\n}\n.quick-actions-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: inherit !important;\n}\n.quick-actions-container[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .quick-action-card[_ngcontent-%COMP%] {\n  padding: 10px 3px !important;\n  background: #7dd3c0;\n}\n.quick-action-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef !important;\n  border-radius: 8px;\n  transition: none;\n  box-shadow: none;\n}\n.quick-action-card[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n  background-color: #f8f9fa;\n}\n.quick-action-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 12px;\n}\n.quick-action-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #fff;\n}\n.upcoming-events-container[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  transition: none;\n}\n.upcoming-events-container[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover   .bg-light[_ngcontent-%COMP%] {\n  background-color: #e9ecef !important;\n}\n.upcoming-events-container[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(43, 94, 169, 0.18) !important;\n  border-radius: 50%;\n}\n.upcoming-events-container[_ngcontent-%COMP%]   .event-name[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 14px;\n}\n.upcoming-events-container[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.badge[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  color: rgb(43, 94, 169) !important;\n}\n.upcoming-events-desk[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  padding: 10px;\n  border-radius: 8px;\n}\n.upcoming-events-desk[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: white;\n}\n.upcoming-events-desk[_ngcontent-%COMP%]   .event-icon[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n}\n.upcoming-events-desk[_ngcontent-%COMP%]   .clplace[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.upcoming-events-desk[_ngcontent-%COMP%]   .date-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.gender-card[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.gender-card[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n.gender-card[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n.gender-card[_ngcontent-%COMP%]   .stat-style[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: #feccfd;\n}\n.card-statut-payment[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  gap: 5px;\n}\n.card-statut-payment[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.card-statut-payment[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle.paied[_ngcontent-%COMP%] {\n  background: #7dd3c0;\n}\n.card-statut-payment[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle.pending[_ngcontent-%COMP%] {\n  background: #a8c5ff;\n}\n.card-statut-payment[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle.overdue[_ngcontent-%COMP%] {\n  background: #feccfd;\n}\n.card-attendance[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  gap: 5px;\n}\n.card-attendance[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.card-attendance[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle.present[_ngcontent-%COMP%] {\n  background: #7dd3c0;\n}\n.card-attendance[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .circle.absent[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n@keyframes _ngcontent-%COMP%_skeleton-loading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n.skeleton-base[_ngcontent-%COMP%], \n.skeleton-photo[_ngcontent-%COMP%], \n.skeleton-timeline[_ngcontent-%COMP%]   .skeleton-timeline-item[_ngcontent-%COMP%], \n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%], \n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%], \n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%], \n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-avatar[_ngcontent-%COMP%], \n.skeleton-events-parent[_ngcontent-%COMP%]   .skeleton-event-card[_ngcontent-%COMP%], \n.skeleton-events[_ngcontent-%COMP%]   .skeleton-event[_ngcontent-%COMP%], \n.skeleton-table[_ngcontent-%COMP%]   .skeleton-row[_ngcontent-%COMP%], \n.skeleton-bar-chart[_ngcontent-%COMP%], \n.skeleton-chart[_ngcontent-%COMP%], \n.skeleton-number[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0px,\n      #e0e0e0 40px,\n      #f0f0f0 80px);\n  background-size: 200px 100%;\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n  border-radius: 4px;\n}\n.skeleton-number[_ngcontent-%COMP%] {\n  height: 28px;\n  width: 50px;\n  margin-bottom: 4px;\n}\n.skeleton-chart[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.skeleton-bar-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  border-radius: 8px;\n}\n.skeleton-table[_ngcontent-%COMP%]   .skeleton-row[_ngcontent-%COMP%] {\n  height: 50px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n}\n.skeleton-events[_ngcontent-%COMP%]   .skeleton-event[_ngcontent-%COMP%] {\n  height: 80px;\n  margin-bottom: 12px;\n  border-radius: 12px;\n}\n.skeleton-events-parent[_ngcontent-%COMP%]   .skeleton-event-card[_ngcontent-%COMP%] {\n  height: 80px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n}\n.skeleton-child-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n}\n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-bottom: 8px;\n  width: 70%;\n}\n.skeleton-child-card[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text.short[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 16px;\n}\n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%] {\n  height: 14px;\n  margin: 0 auto 6px;\n  width: 60%;\n}\n.skeleton-stat[_ngcontent-%COMP%]   .skeleton-text-group[_ngcontent-%COMP%]   .skeleton-text.short[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 12px;\n}\n.skeleton-timeline[_ngcontent-%COMP%]   .skeleton-timeline-item[_ngcontent-%COMP%] {\n  height: 70px;\n  margin-bottom: 16px;\n  margin-left: 32px;\n  border-radius: 12px;\n  position: relative;\n}\n.skeleton-timeline[_ngcontent-%COMP%]   .skeleton-timeline-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -25px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  border: 3px solid #f0f0f0;\n}\n.skeleton-photo[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 12px;\n}\n@media only screen and (min-device-width: 414px) and (max-device-width: 460px) and (-webkit-min-device-pixel-ratio: 3) {\n  .img-dash[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .img-dash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 4rem !important;\n    max-height: 4rem !important;\n    width: 3.5rem !important;\n    height: 3.5rem !important;\n  }\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 410px) {\n  .img-dash[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .img-dash[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 4rem !important;\n    max-height: 4rem !important;\n    width: 3.5rem !important;\n    height: 3.5rem !important;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [
      CommonModule,
      RouterModule,
      BaseChartDirective,
      TranslateModule,
      CalendarComponent,
      SkeletonComponent,
      SkeletonActivityTimelineComponent,
      IonContent,
      AppCurrencyPipe
    ], standalone: true, template: `<div *ngIf="userRole === 'Admin' || userRole === 'Teacher'" class="container-fluid mt-4">\r
  <!-- Admin/Teacher Dashboard -->\r
  <div>\r
    <!-- Stats Cards -->\r
    <div class="row">\r
      <div class="col-xl-8 first-dashbord-card">\r
        <div class="row g-2 g-md-4 mb-3">\r
          <div class="col-xl-4">\r
            <div class="card stat-card shadow-sm">\r
              <div class="card-body d-flex align-items-center p-3">\r
                <div class="stat-icon-wrapper me-3">\r
                  <i class="bi bi-people-fill"></i>\r
                </div>\r
                <div class="stat-content">\r
                  <h3 class="stat-number" *ngIf="!loadingStates.children">{{ stats.children }}</h3>\r
                  <div *ngIf="loadingStates.children" class="skeleton-number"></div>\r
                  <p class="stat-label mb-0">{{ 'DASHBOARD.CHILDREN' | translate }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-xl-4" *ngIf="userRole === 'Admin'">\r
            <div class="card stat-card shadow-sm">\r
              <div class="card-body d-flex align-items-center p-3">\r
                <div class="stat-icon-wrapper me-3">\r
                  <i class="bi bi-person-workspace"></i>\r
                </div>\r
                <div class="stat-content">\r
                  <h3 class="stat-number">{{ stats.teachers }}</h3>\r
                  <p class="stat-label mb-0">{{ 'DASHBOARD.EDUCATORS' | translate }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-xl-4" *ngIf="userRole === 'Admin'">\r
            <div class="card stat-card shadow-sm">\r
              <div class="card-body d-flex align-items-center p-3">\r
                <div class="stat-icon-wrapper me-3">\r
                  <i class="bi bi-person-fill"></i>\r
                </div>\r
                <div class="stat-content">\r
                  <h3 class="stat-number" *ngIf="!loadingStates.parents">{{ stats.parents }}</h3>\r
                  <div *ngIf="loadingStates.parents" class="skeleton-number"></div>\r
                  <p class="stat-label mb-0">{{ 'DASHBOARD.PARENTS' | translate }}</p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="row g-2 g-md-4">\r
          <div class="col-xl-5 mb-3">\r
            <div class="card card-general card-attendance shadow-sm h-100">\r
              <div class="card-header border-0">\r
                <h5 class="mb-0"><i class="bi bi-people-fill me-2"></i>{{ 'DASHBOARD.CHILD_ATTENDANCE' | translate }}</h5>\r
              </div>\r
              <div class="card-body">\r
                <!-- Loading state -->\r
                <div *ngIf="loadingStates.children" class="text-center py-4">\r
                  <div class="skeleton-chart"></div>\r
                </div>\r
                <!-- Loaded state -->\r
                <div *ngIf="!loadingStates.children">\r
                  <div class="chart-container text-center" style="height: 180px; width: 180px; margin: 0 auto;">\r
                    <canvas baseChart [data]="attendanceChartData" [options]="attendanceChartOptions" type="doughnut"></canvas>\r
                  </div>\r
                  <div class="mt-3 stat-style">\r
                    <div class="d-flex justify-content-between align-items-center items">\r
                      <span class="present circle"></span>\r
                      <span class="fw-bold">{{ presentCount }}</span>\r
                      <span class="text-muted">{{ 'DASHBOARD.PRESENT' | translate }}</span>\r
                    </div>\r
                    <div class="d-flex justify-content-between align-items-center items">\r
                      <span class="absent circle"></span>\r
                      <span class="fw-bold">{{ absentCount }}</span>\r
                      <span class="text-muted">{{ 'DASHBOARD.ABSENT' | translate }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="col-xl-7">\r
            <div class="card card-general shadow-sm">\r
              <div class="card-header border-0">\r
                <h5 class="card-title">\r
                  <i class="bi bi-calendar-check"></i>\r
                  {{ 'DASHBOARD.WEEKLY_ATTENDANCE' | translate }}\r
                </h5>\r
              </div>\r
              <div class="card-body">\r
                <!-- Loading state -->\r
                <div *ngIf="loadingStates.attendance" class="d-flex align-items-center justify-content-center" style="height: 250px;">\r
                  <div class="skeleton-bar-chart"></div>\r
                </div>\r
                <!-- Loaded state -->\r
                <div *ngIf="!loadingStates.attendance" style="height: 250px;">\r
                  <canvas baseChart\r
                    [data]="attendanceBarChartData"\r
                    [options]="attendanceBarChartOptions"\r
                    type="bar">\r
                  </canvas>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
            <div class="col-xl-12 mt-0">\r
              <div class="card card-recently shadow-sm card-general">\r
                <div class="card-header bg-white  d-flex justify-content-between align-items-center py-3">\r
                  <h5 class="mb-0"><i class="bi bi-person-fill-add"></i>{{ 'DASHBOARD.RECENTLY_ADDED_CHILDREN' | translate\r
                    }}</h5>\r
                  <a [routerLink]="['/children']" class="view-all btn btn-sm btn-outline-primary">{{ 'DASHBOARD.VIEW_ALL'\r
                    | translate\r
                    }}</a>\r
                </div>\r
                <div class="card-body">\r
                  <!-- Loading state -->\r
                  <div *ngIf="loadingStates.children" class="skeleton-table">\r
                    <div class="skeleton-row" *ngFor="let i of [1,2,3,4]"></div>\r
                  </div>\r
                  <!-- Loaded state -->\r
                  <div *ngIf="!loadingStates.children" class="table-responsive custom-table">\r
                    <table class="table table-hover">\r
                      <tbody>\r
                        <tr>\r
                          <th class="">{{ 'DASHBOARD.TABLE_IMG' | translate }}</th>\r
                          <th>{{ 'DASHBOARD.TABLE_NAME' | translate }}</th>\r
                          <th>{{ 'DASHBOARD.TABLE_GENDER' | translate }}</th>\r
                          <th>{{ 'DASHBOARD.TABLE_PARENT' | translate }}</th>\r
                          <th>{{ 'DASHBOARD.TABLE_MOBILE' | translate }}</th>\r
                          <th class="action-recenttly">{{ 'DASHBOARD.TABLE_ACTIONS' | translate }}</th>\r
                        </tr>\r
                        <div *ngIf="recentChildren.length === 0" class="text-center text-muted py-4">\r
                          <i class="bi bi-inbox icon-3x mb-3 opacity-25"></i>\r
                          <p>{{ 'DASHBOARD.NO_CHILDREN' | translate }}</p>\r
                        </div>\r
                        <tr *ngFor="let child of recentChildren; trackBy: trackById">\r
                          <td><img loading="lazy" [src]="getChildProfilePictureUrl(child)"\r
                              alt="student" class="img-fluid img-student"></td>\r
                          <td class="text-nowrap name-last">{{ child.firstName }} {{child.lastName }}</td>\r
                          <td class="text-nowrap">{{ translateGender(child.gender) }}</td>\r
                          <td class="text-nowrap">{{ child.parentName || '-' }}</td>\r
                          <td>{{ child.parentPhoneNumber || '-' }}</td>\r
                          <td class="action-recenttly">\r
                            <!-- <a href="#" class="waves-effect waves-light btn btn-sm btn-primary-light btn-circle mx-5"><i class="bi bi-link"></i></a> -->\r
                            <button class="btn btn-sm btn-view" [routerLink]="['/children/detail', child.id]">\r
                              <i class="bi bi-eye"></i>\r
                            </button>\r
                          </td>\r
                        </tr>\r
                      </tbody>\r
                    </table>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="col-xl-6">\r
              <div class="card card-general gender-card shadow-sm">\r
                <div class="card-header">\r
                  <h5 class="mb-0"><i class="bi bi-people-fill"></i>{{ 'DASHBOARD.GENDER_DISTRIBUTION' | translate }}</h5>\r
                </div>\r
                <div class="card-body">\r
                  <!-- Loading state -->\r
                  <div *ngIf="loadingStates.children" class="text-center py-4">\r
                    <div class="skeleton-chart"></div>\r
                  </div>\r
                  <!-- Loaded state -->\r
                  <div *ngIf="!loadingStates.children">\r
                    <div class="chart-container text-center" style="height: 180px; width: 180px; margin: 0 auto;">\r
                      <canvas baseChart [data]="genderChartData" [options]="genderChartOptions" type="doughnut"></canvas>\r
                    </div>\r
                    <div class="mt-3 stat-style">\r
                      <div class="first d-flex justify-content-between">\r
                        <span class="circle"></span>\r
                        <span class="fw-bold">{{ boysCount }} ({{ boysPercentage }}%)</span>\r
                        <span class="text-muted">{{ 'DASHBOARD.BOYS' | translate }}</span>\r
                      </div>\r
                      <div class="second d-flex justify-content-between ">\r
                        <span class="circle"></span>\r
                        <span class="fw-bold">{{ girlsCount }} ({{ girlsPercentage }}%)</span>\r
                        <span class="text-muted">{{ 'DASHBOARD.GIRLS' | translate }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          <div class="col-xl-6">\r
        <div class="card card-general card-statut-payment shadow-sm">\r
          <div class="card-header">\r
            <h5 class="mb-0"><i class="bi bi-wallet me-2 "></i>{{ 'DASHBOARD.FEE_PAYMENT_STATUS' | translate }}</h5>\r
          </div>\r
          <div class="card-body">\r
            <!-- Loading state -->\r
            <div *ngIf="loadingStates.fees" class="text-center py-4">\r
              <div class="skeleton-chart"></div>\r
            </div>\r
            <!-- Loaded state -->\r
            <div *ngIf="!loadingStates.fees">\r
              <div class="chart-container text-center" style="height: 180px; width: 180px; margin: 0 auto;">\r
                <canvas baseChart [data]="paymentChartData" [options]="paymentChartOptions" type="doughnut"></canvas>\r
              </div>\r
              <div class="mt-3 stat-style">\r
                <div class="d-flex justify-content-between align-items-center items">\r
                  <span class="circle paied"></span>\r
                  <span class="text me-2">{{ 'DASHBOARD.PAID' | translate }}</span>\r
                  <span class="text fw-bold">{{ paymentStats.paid }}</span>\r
                </div>\r
                <div class="d-flex justify-content-between align-items-center items">\r
                  <span class="circle pending"></span>\r
                  <span class="text me-2">{{ 'DASHBOARD.PENDING' | translate }}</span>\r
                  <span class="text fw-bold">{{ paymentStats.pending }}</span>\r
                </div>\r
                <div class="d-flex justify-content-between align-items-center items">\r
                  <span class="circle overdue"></span>\r
                  <span class="text me-2">{{ 'DASHBOARD.OVERDUE' | translate }}</span>\r
                  <span class="text fw-bold">{{ paymentStats.overdue }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-xl-4">\r
        <div class="quick-actions-container bg-white p-3 mb-3 shadow-sm">\r
          <div class="mb-3">\r
            <h5 class="mb-0">{{ 'DASHBOARD.QUICK_LINKS' | translate }}</h5>\r
          </div>\r
          <div class="row g-2">\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/children/add']" style="cursor: pointer;">\r
                <i class="bi bi-person-plus-fill"></i>\r
                <small>{{ 'DASHBOARD.ADD_CHILD' | translate }}</small>\r
              </div>\r
            </div>\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/children']" style="cursor: pointer;">\r
                <i class="bi bi-people-fill" ></i>\r
                <small>{{ 'DASHBOARD.CHILDREN_LIST' | translate }}</small>\r
              </div>\r
            </div>\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/leaves/add']" style="cursor: pointer;">\r
                <i class="bi bi-calendar-plus"></i>\r
                <small>{{ 'DASHBOARD.ADD_LEAVE' | translate }}</small>\r
              </div>\r
            </div>\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/daily-activities']" style="cursor: pointer;">\r
                <i class="bi bi-clipboard-data"></i>\r
                <small>{{ 'DASHBOARD.DAILY_REPORTS' | translate }}</small>\r
              </div>\r
            </div>\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/fees']" style="cursor: pointer;">\r
                <i class="bi bi-credit-card"></i>\r
                <small>{{ 'DASHBOARD.PAYMENTS' | translate }}</small>\r
              </div>\r
            </div>\r
            <div class="col-4 items">\r
              <div class="card quick-action-card text-center p-3" [routerLink]="['/reclamations']" style="cursor: pointer;">\r
                <i class="bi bi-exclamation-triangle"></i>\r
                <small>{{ 'DASHBOARD.RECLAMATIONS' | translate }}</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card calendar-dashbord shadow-sm mb-3">\r
          <div class="">\r
            <app-calendar [events]="upcomingEvents"></app-calendar>\r
          </div>\r
        </div>\r
        <div class="card card-general upcoming-events-desk shadow-sm mb-3">\r
          <div class="card-header bg-white py-3">\r
            <div class="d-flex justify-content-between align-items-center">\r
              <h5 class="mb-0"><i class="bi bi-calendar-event me-2"></i>{{ 'DASHBOARD.UPCOMING_EVENTS' | translate }}</h5>\r
            </div>\r
          </div>\r
          <div class="card-body">\r
            <!-- Loading state -->\r
            <div *ngIf="loadingStates.events" class="skeleton-events">\r
              <div class="skeleton-event" *ngFor="let i of [1,2]"></div>\r
            </div>\r
            <!-- Loaded state -->\r
            <div *ngIf="!loadingStates.events" class="events-list">\r
              <div *ngIf="upcomingEvents.length === 0" class="text-center text-muted py-4">\r
                <i class="bi bi-calendar-x" style="font-size: 3rem; opacity: 0.3;"></i>\r
                <p class="mt-2 mb-0">{{ 'DASHBOARD.NO_EVENTS' | translate }}</p>\r
              </div>\r
              <div *ngFor="let event of upcomingEvents; trackBy: trackById" class="event-item mb-3" [routerLink]="['/events/detail', event.id]" style="cursor: pointer;">\r
                <div class="d-flex align-items-center p-3 bg-light rounded">\r
                  <div class="event-icon me-2">\r
                    <div class="icon-circle d-flex flex-column align-items-center justify-content-center">\r
                      <div class="day">{{ event.time | date:'d' }}</div>\r
                      <div class="month">{{ event.time | date:'MMM' }}</div>\r
                    </div>\r
                  </div>\r
                  <div class="event-content flex-grow-1">\r
                    <div class="d-flex justify-content-between align-items-start">\r
                      <h6 class="event-name mb-0">{{ event.title }}</h6>\r
                    </div>\r
                    <div class="event-details">\r
                      <small class="text-muted clplace" *ngIf="event.location">\r
                        {{ event.location }}\r
                      </small>\r
                      <div>\r
\r
                      <small class="text-muted date-type">\r
                        <span class="me-2" *ngIf="event.type"><i class="bi bi-calendar2-event"></i> {{ event.type }}</span>\r
                        <span><i class="bi bi-clock-history"></i> {{ event.timeString | date:'h:mm a' }}</span>\r
                      </small>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card card-general card-recently fee-history shadow-sm mb-3">\r
          <div class="card-header d-flex justify-content-between align-items-center">\r
            <h5 class="mb-0"><i class="bi bi-exclamation-triangle me-2"></i>{{ 'DASHBOARD.UNPAID_CHILDREN' | translate }}</h5>\r
            <a [routerLink]="['/fees']" class="view-all btn btn-sm btn-outline-primary">{{ 'DASHBOARD.VIEW_ALL' | translate }}</a>\r
          </div>\r
          <div class="card-body">\r
            <!-- Loading state -->\r
            <div *ngIf="loadingStates.fees" class="skeleton-table">\r
              <div class="skeleton-row" *ngFor="let i of [1,2,3]"></div>\r
            </div>\r
            <!-- Loaded state -->\r
            <div *ngIf="!loadingStates.fees">\r
              <div *ngIf="unpaidChildren.length === 0" class="text-center text-muted py-4">\r
                <i class="bi bi-check-circle" style="font-size: 2rem; opacity: 0.3;"></i>\r
                <p class="mt-2 mb-0">{{ 'DASHBOARD.NO_UNPAID_CHILDREN' | translate }}</p>\r
              </div>\r
              <div class="table-responsive custom-table" *ngIf="unpaidChildren.length > 0">\r
                <table class="table table-hover mb-0">\r
                  <thead>\r
                    <tr>\r
                      <th>{{ 'DASHBOARD.TABLE_NAME' | translate }}</th>\r
                      <th>{{ 'DASHBOARD.TABLE_AMOUNT' | translate }}</th>\r
                      <th>{{ 'DASHBOARD.TABLE_DUE_DATE' | translate }}</th>\r
                      <th>{{ 'DASHBOARD.TABLE_STATUS' | translate }}</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    <tr *ngFor="let fee of unpaidChildren; trackBy: trackById">\r
                      <td class="text-nowrap">\r
                        <img loading="lazy" src="assets/child.png" alt="child" class="img-fluid img-student me-2" style="width: 30px; height: 30px; border-radius: 50%;">\r
                        {{ fee.name }}\r
                      </td>\r
                      <td class="text-nowrap fw-bold">{{ fee.amount | appCurrency }}</td>\r
                      <td class="text-nowrap">{{ fee.dueDate | date:'MMM d, yyyy' }}</td>\r
                      <td>\r
                        <span class="badge" [ngClass]="{'bg-warning text-dark': fee.status === 'pending', 'bg-danger': fee.status === 'overdue'}">\r
                          {{ fee.status === 'pending' ? ('DASHBOARD.PENDING' | translate) : ('DASHBOARD.OVERDUE' | translate) }}\r
                        </span>\r
                        <small *ngIf="fee.daysOverdue && fee.daysOverdue > 0" class="text-danger d-block">\r
                          {{ fee.daysOverdue }} {{ 'DASHBOARD.DAYS_OVERDUE' | translate }}\r
                        </small>\r
                      </td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- Parent Dashboard -->\r
<ion-content *ngIf="userRole === 'Parent'" class="parent">\r
  <!-- New Design -->\r
  <div class="parent-dashboard-new">\r
    <!-- Header Section -->\r
    <div class="dashboard-header safe-area-top">\r
        <div class="header-content">\r
          <div class="row welcome-text">\r
            <div class="col-10 text-dash">\r
              <h2 class="mb-1 mt-4 welcome font-inter">{{ getGreeting() }}, {{ userName }} ! \u{1F44B}</h2>\r
              <p class="mb-0 black font-inter ">{{ 'DASHBOARD.MINIMINDS_HOME' | translate }}</p>\r
            </div>\r
            <div class="col-2 img-dash">\r
              <img [src]="userProfilePicture || 'assets/default-avatar.svg'" [alt]="userName"\r
                class="rounded-circle profile-image img-fluid" (click)="goToParentProfile()" style="cursor: pointer;">\r
            </div>\r
          </div>\r
\r
        </div>\r
        <!-- Child Status Card with Slider -->\r
        <!-- Loading state for children -->\r
        <div *ngIf="loadingStates.children" class="child-status-card">\r
          <div class="child-info d-flex align-items-center gap-3">\r
            <app-skeleton [height]="80" [width]="'80px'" [circle]="true"></app-skeleton>\r
            <div class="child-details flex-grow-1">\r
              <app-skeleton [height]="24" [width]="'60%'" class="mb-2"></app-skeleton>\r
              <app-skeleton [height]="16" [width]="'40%'" class="mb-2"></app-skeleton>\r
              <app-skeleton [height]="14" [width]="'50%'"></app-skeleton>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Loaded state -->\r
        <div [class]="myChildren.length > 1 ? 'child-status-card children-carousel' : 'child-status-card one'"\r
             class="child-status-card"\r
             *ngIf="!loadingStates.children && myChildren.length > 0"\r
             (touchstart)="onTouchStart($event)"\r
             (touchend)="onTouchEnd($event)">\r
          <div  [class]="myChildren.length > 1 ? 'card-header-row' : 'one-child'">\r
            <div class="slider-controls" *ngIf="myChildren.length > 1">\r
              <button class="slider-btn" (click)="prevChild()" [disabled]="selectedChildIndex === 0">\r
                <i class="bi bi-chevron-left"></i>\r
              </button>\r
              <span class="child-counter">{{ selectedChildIndex + 1 }}/{{ myChildren.length }}</span>\r
              <button class="slider-btn" (click)="nextChild()"\r
                [disabled]="selectedChildIndex === myChildren.length - 1">\r
                <i class="bi bi-chevron-right"></i>\r
              </button>\r
            </div>\r
            <button class="info-btn" [routerLink]="['/children/detail', getSelectedChild()?.id]">\r
              <i class="bi bi-info-circle"></i>\r
            </button>\r
          </div>\r
          <div class="child-info" [routerLink]="['/children/detail', getSelectedChild()?.id]" style="cursor: pointer;">\r
            <img [src]="getChildProfilePictureUrl(getSelectedChild())"\r
              [alt]="getSelectedChild()?.firstName" class="child-avatar">\r
            <div class="child-details">\r
              <h3 class="child-name">{{ getSelectedChild()?.firstName }} {{ getSelectedChild()?.lastName }}</h3>\r
              <p class="child-age">{{ getAge(getSelectedChild()?.dateOfBirth) }} {{ 'DASHBOARD.OLD' | translate }}</p>\r
              <p class="check-in-time">{{ getCheckInStatus(getSelectedChild()) }}</p>\r
            </div>\r
          </div>\r
          <!-- Child Dots Indicator -->\r
          <div class="child-dots" *ngIf="myChildren.length > 1">\r
            <span *ngFor="let child of myChildren; let i = index; trackBy: trackById" class="dot" [class.active]="i === selectedChildIndex"\r
              (click)="selectChild(i)">\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      <div class="container-fluid">\r
        <!-- Today Stats -->\r
        <div class="today-stats">\r
          <h2 class="section-title">{{ 'DASHBOARD.TODAY_STATS' | translate }} - {{ getSelectedChildName() }}</h2>\r
          <!-- Loading state -->\r
          <div *ngIf="loadingStates.activities" class="stats-grid">\r
            <div class="stat-item" *ngFor="let i of [1,2,3]">\r
              <div class="stat-icon-wrapper">\r
                <app-skeleton [height]="40" [width]="'40px'" [circle]="true"></app-skeleton>\r
              </div>\r
              <div class="stat-info flex-grow-1">\r
                <app-skeleton [height]="16" [width]="'70%'" class="mb-1"></app-skeleton>\r
                <app-skeleton [height]="14" [width]="'50%'"></app-skeleton>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Loaded state -->\r
          <div *ngIf="!loadingStates.activities" class="stats-grid">\r
            <div class="stat-item">\r
              <div class="stat-icon-wrapper">\r
                <span class="stat-icon">\u{1F34E}</span>\r
              </div>\r
              <div class="stat-info">\r
                <h4 class="stat-label">{{ 'DASHBOARD.MEALS' | translate }}</h4>\r
                <p class="stat-value">({{ todayStats.meals.completed }}/{{ todayStats.meals.total }} {{ 'DASHBOARD.COMPLETED' | translate }})</p>\r
              </div>\r
            </div>\r
            <div class="stat-item">\r
              <div class="stat-icon-wrapper">\r
                <span class="stat-icon">\u{1F319}</span>\r
              </div>\r
              <div class="stat-info">\r
                <h4 class="stat-label">{{ 'DASHBOARD.NAP_TIME' | translate }}</h4>\r
                <p class="stat-value">({{ todayStats.napTime }})</p>\r
              </div>\r
            </div>\r
            <div class="stat-item">\r
              <div class="stat-icon-wrapper">\r
                <span class="stat-icon">\u{1F3A8}</span>\r
              </div>\r
              <div class="stat-info">\r
                <h4 class="stat-label">{{ 'DASHBOARD.ACTIVITIES' | translate }}</h4>\r
                <p class="stat-value">({{ todayStats.activities }} {{ 'DASHBOARD.COMPLETED' | translate }})</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Activities Timeline -->\r
        <div class="activities-section">\r
          <h2 class="section-title">{{ 'DASHBOARD.ACTIVITIES' | translate }} - {{ getSelectedChildName() }}</h2>\r
          <!-- Loading state -->\r
          <div *ngIf="loadingStates.activities">\r
            <app-skeleton-activity-timeline [count]="4"></app-skeleton-activity-timeline>\r
          </div>\r
          <!-- Loaded state -->\r
          <div *ngIf="!loadingStates.activities">\r
            <div class="event-card" *ngIf="todayActivities.length == 0">\r
              <div class="card card-general">\r
                <div class="card-body text-center text-muted py-4">\r
                  <i class="bi bi-calendar-x icon-3x mb-3 opacity-25"></i>\r
                  <p class="mb-0">{{ 'DASHBOARD.NO_ACTIVITY_TODAY' | translate }}</p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="timeline">\r
              <div class="timeline-item clickable-activity"\r
                   *ngFor="let activity of todayActivities; trackBy: trackById"\r
                   [routerLink]="['/activities/detail', activity.id]"\r
                   style="cursor: pointer;">\r
                <div class="timeline-marker active"></div>\r
                <div class="timeline-content">\r
                  <div class="activity-info">\r
                    <p class="timeline-time">{{ activity.activityTime | date:'h:mm a' }}: {{ activity.activityType }}</p>\r
                    <p class="activity-notes" *ngIf="activity.notes">{{ activity.notes }}</p>\r
                    <p class="activity-duration" *ngIf="activity.duration">{{ 'DASHBOARD.DURATION' | translate }}: {{ activity.duration }}</p>\r
                    <p class="activity-food" *ngIf="activity.foodItem">{{ 'DASHBOARD.FOOD' | translate }}: {{ activity.foodItem }}</p>\r
                  </div>\r
                  <i class="bi bi-chevron-right activity-arrow"></i>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Upcoming Events -->\r
        <div class="upcoming-events">\r
          <h2 class="section-title">{{ 'DASHBOARD.UPCOMING_EVENTS' | translate }}</h2>\r
          <!-- Loading state -->\r
          <div *ngIf="loadingStates.events">\r
            <div class="event-card mb-3" *ngFor="let i of [1,2]">\r
              <div class="d-flex align-items-center gap-3">\r
                <app-skeleton [height]="50" [width]="'50px'" [circle]="true"></app-skeleton>\r
                <div class="flex-grow-1">\r
                  <app-skeleton [height]="18" [width]="'70%'" class="mb-2"></app-skeleton>\r
                  <app-skeleton [height]="14" [width]="'50%'" class="mb-1"></app-skeleton>\r
                  <app-skeleton [height]="14" [width]="'40%'"></app-skeleton>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <!-- Loaded state -->\r
          <div *ngIf="!loadingStates.events">\r
            <div class="card card-general" *ngIf="upcomingEvents.length == 0">\r
              <div class="text-center">\r
                <div class="card-body text-center text-muted py-4">\r
                  <i class="bi bi-calendar-x icon-3x mb-3 opacity-25"></i>\r
                  <p class="mb-0">{{ 'DASHBOARD.NO_EVENTS' | translate }}</p>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="event-card" *ngFor="let event of upcomingEvents; trackBy: trackById" [routerLink]="['/events/detail', event.id]" style="cursor: pointer;">\r
              <div class="event-icon">\r
                <i class="bi bi-calendar-event"></i>\r
              </div>\r
              <div class="event-details">\r
                <h4 class="event-title">{{ event.title }}</h4>\r
                <p class="event-date">{{ event.time | date:'MMM d, yyyy' }}</p>\r
                <p class="event-place" *ngIf="event.place">{{ event.place }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <!-- Recent Photos -->\r
        <div class="recent-photos-section">\r
          <h2 class="section-title">{{ 'DASHBOARD.RECENT_PHOTOS' | translate }} - {{ getSelectedChildName() }}</h2>\r
          <!-- Loading state -->\r
          <div *ngIf="loadingStates.photos" class="photos-grid">\r
            <div class="photo-item" *ngFor="let i of [1,2,3]">\r
              <app-skeleton [height]="150" [width]="'100%'" borderRadius="12px"></app-skeleton>\r
            </div>\r
          </div>\r
          <!-- Loaded state -->\r
          <div *ngIf="!loadingStates.photos">\r
            <div class="card card-general" *ngIf="recentPhotos.length === 0">\r
              <div class="card-body text-center text-muted py-4">\r
                <i class="bi bi-images icon-3x mb-3 opacity-25"></i>\r
                <p class="mb-0">{{ 'DASHBOARD.NO_PHOTOS_YET' | translate }}</p>\r
              </div>\r
            </div>\r
            <div class="photos-grid" *ngIf="recentPhotos.length > 0">\r
              <div class="photo-item" *ngFor="let photo of recentPhotos; trackBy: trackById" [routerLink]="['/gallery']">\r
                <img [src]="getPhotoThumbnailUrl(photo)"\r
                     [alt]="photo.title || 'Child photo'"\r
                     class="photo-img">\r
                <div class="photo-overlay">\r
                  <i class="bi bi-eye-fill"></i>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
</ion-content>`, styles: ['/* src/app/features/dashboard/dashboard.scss */\n.card {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: none !important;\n}\n.card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.bg-opacity-10 {\n  opacity: 0.1;\n}\n.border-3 {\n  border-width: 3px !important;\n}\n.card-recently {\n  margin-bottom: 0;\n}\n.card-dashbord_top {\n  background-color: #7dd3c0 !important;\n  border: 1px solid #7dd3c0 !important;\n}\n.card-dashbord-all {\n  background: #fff;\n}\n.card-dashbord-all .card-header {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n  border-color: #E9EDF4;\n  position: relative;\n  background: transparent;\n  padding: 1rem 1.25rem 0rem !important;\n  border-bottom: none !important;\n}\n.card-dashbord-all .card-header h6,\n.card-dashbord-all .card-header h5 {\n  font-size: 17px;\n  font-weight: 700 !important;\n  color: #0E567D;\n  margin-bottom: 0;\n}\n.card-dashbord-all .card-header h6 i,\n.card-dashbord-all .card-header h5 i {\n  margin-right: 0.5rem !important;\n  color: inherit !important;\n}\n.card-dashbord-all .card-body .table-responsive tr th {\n  font-size: 14px;\n  font-weight: bold;\n}\n.card-dashbord-all .card-body .table-responsive tr td {\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n}\n.card-dashbord-all .card-body .border-color {\n  border-color: #202c4b !important;\n}\n.card-dashbord-all .card-body .border-color h6 {\n  font-size: 15px;\n}\n.card-dashbord-all .card-body .border-color small {\n  font-size: 14px;\n  font-weight: 400;\n}\n.quick-action .btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #202c4b;\n  border: none;\n  color: white;\n}\n::ng-deep canvas {\n  display: block;\n  box-sizing: border-box;\n}\n.calendar-dashbord {\n  border: none;\n}\n.calendar-dashbord ::ng-deep .calendar-container {\n  box-shadow: none !important;\n  background: #ffffff;\n  background-color: #ffffff;\n}\n.calendar-dashbord ::ng-deep .calendar-day {\n  min-height: 45px;\n  max-height: 45px;\n  max-width: 45px !important;\n  min-width: 45px !important;\n  border-radius: 50%;\n}\n.calendar-dashbord ::ng-deep .calendar-day ::ng-deep .today {\n  background: #fff;\n}\n.calendar-dashbord ::ng-deep .calendar-header {\n  padding-bottom: 0;\n  background: #ffffff;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n}\n.calendar-dashbord ::ng-deep .calendar-header ::ng-deep h5 {\n  grid-column: 1;\n  grid-row: 1;\n  font-size: 18px;\n  font-weight: 600;\n  color: #202C4B;\n}\n.calendar-dashbord ::ng-deep .calendar-header ::ng-deep .left {\n  grid-column: 2;\n  justify-self: end;\n  background-color: #fff;\n  margin-right: 5px;\n}\n.calendar-dashbord ::ng-deep .calendar-header ::ng-deep .right {\n  grid-column: 3;\n  justify-self: start;\n  background-color: #fff;\n}\n.calendar-dashbord ::ng-deep .calendar-header ::ng-deep .right i {\n  color: #202C4B;\n}\n.calendar-dashbord ::ng-deep .calendar-weekdays {\n  background: rgba(255, 255, 255, 0);\n}\n.calendar-dashbord ::ng-deep .weekday {\n  color: #202c4b;\n}\n.calendar-dashbord ::ng-deep .calendar-grid {\n  border: none;\n}\n.calendar-dashbord ::ng-deep .calendar-day {\n  border: none;\n}\n.calendar-dashbord ::ng-deep .calendar-day.selected {\n  border: 1px solid #dadce1;\n  background: #fff;\n  color: #202c4b;\n}\n.calendar-dashbord ::ng-deep .calendar-day.has-event {\n  background: var(--secondary-color);\n  color: white;\n}\n.calendar-dashbord ::ng-deep .fc-day-grid-event {\n  background-color: #202c4b !important;\n}\n.calendar-dashbord ::ng-deep .day-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding-right: 0;\n  padding-left: 0;\n}\n.calendar-dashbord ::ng-deep .events-container {\n  height: 0;\n  display: none;\n}\n.stat-style {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.event-dashbord {\n  background-color: #f8f8f8;\n  border-radius: 7px;\n}\n.event-dashbord .event-card .date-time {\n  display: flex;\n  align-items: center;\n}\n.event-dashbord .event-card .date-time .event-date-label {\n  background: #feccfd;\n  border-radius: 10px;\n  padding: 2px 10px;\n  font-size: 14px;\n}\n.event-dashbord .event-card .date-time .event-time {\n  margin-left: 5px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.event-dashbord .event-card .event-title {\n  margin-top: 5px;\n  font-size: 15px;\n  font-weight: 500;\n}\n.event-dashbord .event-card .event-classes {\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.first-dashbord-card .percentage.text-danger {\n  background: #dc3545;\n  width: max-content;\n  color: white !important;\n  padding: 2px 5px;\n  font-size: 14px;\n  border-radius: 10px;\n  height: max-content;\n}\n.first-dashbord-card .text-success {\n  background: #198754;\n  color: white !important;\n  padding: 2px 5px;\n  font-size: 14px;\n  width: max-content;\n  border-radius: 10px;\n  height: max-content;\n}\n.first-dashbord-card .percentage {\n  display: flex;\n  justify-content: space-between;\n}\n.first-dashbord-card .children {\n  background-color: #fff;\n}\n.first-dashbord-card .children i {\n  background: #202c4b;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.first-dashbord-card .event {\n  background-color: #fff;\n}\n.first-dashbord-card .event i {\n  background: #feccfd;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.first-dashbord-card .fee {\n  background-color: #fff;\n}\n.first-dashbord-card .fee i {\n  background: #202c4b;\n  color: white;\n  padding: 10px;\n  border-radius: 50%;\n  line-height: 0;\n}\n.fee-dashbord .stat-style .circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.fee-dashbord .stat-style .circle.blue {\n  background: #202c4b;\n}\n.fee-dashbord .stat-style .circle.bluelight {\n  background: #cdeaf0;\n}\n.fee-dashbord .stat-style .circle.red {\n  background: #feccfd;\n}\n.fee-dashbord .stat-style .text {\n  font-size: 14px;\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 767px) {\n  .menu-grid {\n    grid-template-columns: repeat(6, calc(25% - 0.75rem));\n    grid-auto-flow: column;\n  }\n}\n.menu-item {\n  min-width: 0;\n}\n.today-stats-section h4 {\n  color: #202c4b;\n  font-weight: 600;\n}\n.stat-card {\n  transition: all 0.3s ease;\n}\n.stat-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;\n}\nion-content.parent {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent .inner-scroll {\n  display: block !important;\n}\n.parent-dashboard-new {\n  max-width: 768px;\n  margin: 0 auto;\n  padding: 0;\n  min-height: 100vh;\n  padding-bottom: 20px;\n}\n.dashboard-header {\n  background:\n    linear-gradient(\n      135deg,\n      #90b9fc 0%,\n      #95f2d7 100%);\n  padding: 24px 20px 16px;\n  padding-top: calc(env(safe-area-inset-top, 0px) + 16px);\n  border-radius: 0 0 32px 32px;\n  margin-bottom: 105px;\n}\n.dashboard-header .welcome-text {\n  align-items: center;\n}\n.dashboard-header .welcome-text .profile-image {\n  object-fit: cover;\n  cursor: pointer;\n}\n.dashboard-header .welcome-text .welcome {\n  font-size: 42px;\n  color: black;\n  font-weight: bold;\n  line-height: 1;\n}\n.dashboard-header .welcome-text img {\n  max-width: 3rem;\n  max-height: 3rem;\n  width: 3rem;\n  height: 3rem;\n  object-fit: cover;\n}\n.dashboard-header .header-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n.child-status-card {\n  background: white;\n  border-radius: 14px;\n  padding: 20px;\n  margin: 20px 5% 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transform: translateY(140px);\n  margin-top: -120px;\n}\n.child-status-card.one {\n  transform: translateY(105px);\n  margin-top: -100px;\n}\n.child-status-card.children-carousel {\n  margin: 20px 5% 50px;\n  margin-top: -120px;\n}\n.child-status-card .one-child button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.child-status-card .card-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.child-status-card .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0;\n}\n.child-status-card .info-btn {\n  background: #F3F4F6;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6B7280;\n  cursor: pointer;\n}\n.child-status-card .info-btn i {\n  font-size: 18px;\n}\n.child-status-card .slider-controls {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.child-status-card .slider-btn {\n  background: #F3F4F6;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.child-status-card .slider-btn:hover:not(:disabled) {\n  background: #E5E7EB;\n  color: #374151;\n}\n.child-status-card .slider-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.child-status-card .slider-btn i {\n  font-size: 16px;\n}\n.child-status-card .child-counter {\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  min-width: 40px;\n  text-align: center;\n}\n.child-status-card .child-info {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.child-status-card .child-dots {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n.child-status-card .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #E5E7EB;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.child-status-card .dot.active {\n  background: #1DBAB4;\n  transform: scale(1.2);\n}\n.child-status-card .dot:hover {\n  background: #9CA3AF;\n}\n.child-status-card .child-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.child-status-card .child-details {\n  flex: 1;\n}\n.child-status-card .child-name {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 4px;\n}\n.child-status-card .child-age {\n  font-size: 14px;\n  color: #6B7280;\n  line-height: 1.45;\n  margin: 0px;\n}\n.child-status-card .check-in-time {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0 0 8px;\n}\n.today-stats {\n  margin-bottom: 24px;\n}\n.today-stats .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.today-stats .stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.today-stats .stat-item {\n  background: white;\n  border-radius: 14px;\n  padding: 16px 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.today-stats .stat-icon-wrapper {\n  position: relative;\n  margin-bottom: 8px;\n}\n.today-stats .stat-icon-wrapper .stat-icon {\n  font-size: 32px;\n  display: block;\n}\n.today-stats .stat-icon-wrapper .stat-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n  margin-top: 4px;\n}\n.today-stats .stat-info {\n  width: 100%;\n}\n.today-stats .stat-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 4px;\n}\n.today-stats .stat-value {\n  font-size: 12px;\n  color: #6B7280;\n  margin: 0;\n}\n.quick-actions {\n  padding: 0 20px;\n  margin-bottom: 24px;\n}\n.quick-actions .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.quick-actions .actions-scroll {\n  display: flex;\n  gap: 12px;\n  overflow-x: auto;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n}\n.quick-actions .actions-scroll::-webkit-scrollbar {\n  display: none;\n}\n.quick-actions .actions-scroll .action-item_btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n}\n.quick-actions .actions-scroll .action-item_btn span {\n  font-size: 12px;\n}\n.quick-actions .action-btn {\n  background: #1DBAB4;\n  border: none;\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(29, 186, 180, 0.3);\n  transition: transform 0.2s;\n}\n.quick-actions .action-btn:hover {\n  transform: scale(1.05);\n}\n.quick-actions .action-btn i {\n  font-size: 24px;\n  margin-bottom: 0px;\n}\n.quick-actions .action-btn span {\n  font-size: 10px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 1.2;\n  max-width: 60px;\n  display: none;\n}\n.recent-photos-section {\n  margin-bottom: 24px;\n}\n.recent-photos-section .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.recent-photos-section .photos-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.recent-photos-section .photo-item {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.recent-photos-section .photo-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.recent-photos-section .photo-item:hover .photo-overlay {\n  opacity: 1;\n}\n.recent-photos-section .photo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.recent-photos-section .photo-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(29, 186, 180, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.recent-photos-section .photo-overlay i {\n  color: white;\n  font-size: 24px;\n}\n.activities-section {\n  margin-bottom: 24px;\n}\n.activities-section .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.activities-section .timeline {\n  position: relative;\n}\n.activities-section .timeline-item {\n  position: relative;\n  padding-left: 32px;\n  margin-bottom: 24px;\n}\n.activities-section .timeline-item:not(:last-child)::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 24px;\n  bottom: -24px;\n  width: 2px;\n  background: #1DBAB4;\n}\n.activities-section .timeline-item.clickable-activity {\n  cursor: pointer;\n}\n.activities-section .timeline-item.clickable-activity .timeline-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activities-section .timeline-item.clickable-activity .activity-info {\n  flex: 1;\n}\n.activities-section .timeline-item.clickable-activity:hover .timeline-content {\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.activities-section .timeline-item.clickable-activity .activity-arrow {\n  color: #9CA3AF;\n  font-size: 16px;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.activities-section .timeline-item.clickable-activity:hover .activity-arrow {\n  color: #1DBAB4;\n}\n.activities-section .timeline-marker {\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: white;\n  border: 3px solid #1DBAB4;\n}\n.activities-section .timeline-marker.active {\n  background: #1DBAB4;\n}\n.activities-section .timeline-content {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.activities-section .timeline-left {\n  margin-bottom: 12px;\n}\n.activities-section .timeline-time {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 8px;\n}\n.activities-section .activity-notes {\n  font-size: 13px;\n  color: #6B7280;\n  margin: 4px 0;\n}\n.activities-section .activity-duration {\n  font-size: 12px;\n  color: #9CA3AF;\n  margin: 4px 0;\n}\n.activities-section .activity-food {\n  font-size: 12px;\n  color: #1DBAB4;\n  margin: 4px 0;\n  font-weight: 500;\n}\n.activities-section .activity-detail {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.activities-section .activity-detail .activity-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.activities-section .activity-detail span {\n  font-size: 14px;\n  color: #6B7280;\n}\n.upcoming-events {\n  margin-bottom: 24px;\n}\n.upcoming-events .section-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 16px;\n}\n.upcoming-events .event-card {\n  background: white;\n  border-radius: 14px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n  transition: transform 0.2s;\n}\n.upcoming-events .event-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.upcoming-events .event-icon {\n  width: 48px;\n  height: 48px;\n  background: #E0F2FE;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.upcoming-events .event-icon i {\n  font-size: 24px;\n  color: #1DBAB4;\n}\n.upcoming-events .event-details {\n  flex: 1;\n}\n.upcoming-events .event-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 4px;\n}\n.upcoming-events .event-date {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0;\n}\n.upcoming-events .event-place {\n  font-size: 13px;\n  color: #9CA3AF;\n  margin: 4px 0 0;\n}\n.quick-actions-container {\n  border-radius: 10px;\n}\n.quick-actions-container h5 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #202c4b;\n  display: flex;\n  align-items: center;\n}\n.quick-actions-container h5 i {\n  color: inherit !important;\n}\n.quick-actions-container .items .quick-action-card {\n  padding: 10px 3px !important;\n  background: #7dd3c0;\n}\n.quick-action-card {\n  border: 1px solid #e9ecef !important;\n  border-radius: 8px;\n  transition: none;\n  box-shadow: none;\n}\n.quick-action-card:hover {\n  transform: none;\n  box-shadow: none;\n  background-color: #f8f9fa;\n}\n.quick-action-card small {\n  color: #fff;\n  font-weight: 500;\n  font-size: 12px;\n}\n.quick-action-card i {\n  font-size: 1.5rem;\n  color: #fff;\n}\n.upcoming-events-container .event-item {\n  transition: none;\n}\n.upcoming-events-container .event-item:hover .bg-light {\n  background-color: #e9ecef !important;\n}\n.upcoming-events-container .icon-circle {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(43, 94, 169, 0.18) !important;\n  border-radius: 50%;\n}\n.upcoming-events-container .event-name {\n  color: #2c3e50;\n  font-size: 14px;\n}\n.upcoming-events-container .event-details {\n  font-size: 12px;\n}\n.stat-card {\n  box-shadow: none;\n  border-radius: 12px;\n}\n.stat-card:hover {\n  transform: none;\n  box-shadow: none;\n}\n.stat-card .stat-icon-wrapper {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--secondary-color);\n  border-radius: 12px;\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 22px;\n  color: #ffffff;\n}\n.stat-card .stat-number {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1;\n  margin-bottom: 0;\n}\n.stat-card .stat-label {\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.badge .bg-primary {\n  color: rgb(43, 94, 169) !important;\n}\n.upcoming-events-desk .event-icon {\n  background: var(--secondary-color);\n  padding: 10px;\n  border-radius: 8px;\n}\n.upcoming-events-desk .event-icon .day {\n  font-weight: bold;\n  color: white;\n}\n.upcoming-events-desk .event-icon .month {\n  font-size: 14px;\n  font-weight: 400;\n  color: white;\n}\n.upcoming-events-desk .clplace {\n  font-size: 13px;\n}\n.upcoming-events-desk .date-type span {\n  font-size: 12px;\n}\n.gender-card .stat-style {\n  justify-content: space-around;\n}\n.gender-card .stat-style .first {\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n.gender-card .stat-style .second {\n  flex-direction: row;\n  align-items: center;\n  gap: 5px;\n}\n.gender-card .stat-style .second .circle {\n  background: #feccfd;\n}\n.card-statut-payment .items {\n  gap: 5px;\n}\n.card-statut-payment .items .circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.card-statut-payment .items .circle.paied {\n  background: #7dd3c0;\n}\n.card-statut-payment .items .circle.pending {\n  background: #a8c5ff;\n}\n.card-statut-payment .items .circle.overdue {\n  background: #feccfd;\n}\n.card-attendance .items {\n  gap: 5px;\n}\n.card-attendance .items .circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.card-attendance .items .circle.present {\n  background: #7dd3c0;\n}\n.card-attendance .items .circle.absent {\n  background: #e9ecef;\n}\n@keyframes skeleton-loading {\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n}\n.skeleton-base,\n.skeleton-photo,\n.skeleton-timeline .skeleton-timeline-item,\n.skeleton-stat .skeleton-text-group .skeleton-text,\n.skeleton-stat .skeleton-icon,\n.skeleton-child-card .skeleton-text-group .skeleton-text,\n.skeleton-child-card .skeleton-avatar,\n.skeleton-events-parent .skeleton-event-card,\n.skeleton-events .skeleton-event,\n.skeleton-table .skeleton-row,\n.skeleton-bar-chart,\n.skeleton-chart,\n.skeleton-number {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 0px,\n      #e0e0e0 40px,\n      #f0f0f0 80px);\n  background-size: 200px 100%;\n  animation: skeleton-loading 1.5s ease-in-out infinite;\n  border-radius: 4px;\n}\n.skeleton-number {\n  height: 28px;\n  width: 50px;\n  margin-bottom: 4px;\n}\n.skeleton-chart {\n  width: 180px;\n  height: 180px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.skeleton-bar-chart {\n  width: 100%;\n  height: 200px;\n  border-radius: 8px;\n}\n.skeleton-table .skeleton-row {\n  height: 50px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n}\n.skeleton-events .skeleton-event {\n  height: 80px;\n  margin-bottom: 12px;\n  border-radius: 12px;\n}\n.skeleton-events-parent .skeleton-event-card {\n  height: 80px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n}\n.skeleton-child-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px;\n}\n.skeleton-child-card .skeleton-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-child-card .skeleton-text-group {\n  flex: 1;\n}\n.skeleton-child-card .skeleton-text-group .skeleton-text {\n  height: 20px;\n  margin-bottom: 8px;\n  width: 70%;\n}\n.skeleton-child-card .skeleton-text-group .skeleton-text.short {\n  width: 40%;\n  height: 16px;\n}\n.skeleton-stat .skeleton-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  margin-bottom: 8px;\n}\n.skeleton-stat .skeleton-text-group {\n  width: 100%;\n}\n.skeleton-stat .skeleton-text-group .skeleton-text {\n  height: 14px;\n  margin: 0 auto 6px;\n  width: 60%;\n}\n.skeleton-stat .skeleton-text-group .skeleton-text.short {\n  width: 40%;\n  height: 12px;\n}\n.skeleton-timeline .skeleton-timeline-item {\n  height: 70px;\n  margin-bottom: 16px;\n  margin-left: 32px;\n  border-radius: 12px;\n  position: relative;\n}\n.skeleton-timeline .skeleton-timeline-item::before {\n  content: "";\n  position: absolute;\n  left: -25px;\n  top: 4px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #e0e0e0;\n  border: 3px solid #f0f0f0;\n}\n.skeleton-photo {\n  aspect-ratio: 1;\n  border-radius: 12px;\n}\n@media only screen and (min-device-width: 414px) and (max-device-width: 460px) and (-webkit-min-device-pixel-ratio: 3) {\n  .img-dash {\n    padding-left: 0 !important;\n  }\n  .img-dash img {\n    max-width: 4rem !important;\n    max-height: 4rem !important;\n    width: 3.5rem !important;\n    height: 3.5rem !important;\n  }\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 410px) {\n  .img-dash {\n    padding-left: 0 !important;\n  }\n  .img-dash img {\n    max-width: 4rem !important;\n    max-height: 4rem !important;\n    width: 3.5rem !important;\n    height: 3.5rem !important;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: ChildrenService }, { type: ParentService }, { type: EventService }, { type: AttendanceService }, { type: DailyActivityService }, { type: LeavesService }, { type: GalleryService }, { type: FeeService }, { type: StaticFeesService }, { type: DashboardService }, { type: Router }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/dashboard/dashboard.ts", lineNumber: 59 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-RH5QJKDL.js.map
