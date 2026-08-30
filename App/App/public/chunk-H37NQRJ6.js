import {
  ParentChildHeaderComponent
} from "./chunk-FEEGDPUH.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  ArcElement,
  BaseChartDirective,
  CategoryScale,
  Chart,
  DoughnutController,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  SkeletonActivityTimelineComponent,
  plugin_legend,
  plugin_tooltip
} from "./chunk-3KXGNDEJ.js";
import {
  DailyActivityService
} from "./chunk-D442GME6.js";
import "./chunk-Z37IA3IJ.js";
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
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  Location,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/features/daily-activities/daily-activities.ts
var _c0 = ["activityChart"];
var _c1 = ["timelineChart"];
var _c2 = (a0) => ["/activities/detail", a0];
var _c3 = (a0) => ({ label: a0, url: "/dashboard" });
var _c4 = (a0) => ({ label: a0 });
var _c5 = (a0, a1) => [a0, a1];
var _c6 = () => ["Morning", "Afternoon", "Evening"];
function DailyActivities_ion_content_0_h2_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "DAILY_REPORT.TODAYS_ACTIVITIES"), " - ", ctx_r1.getSelectedChildName());
  }
}
function DailyActivities_ion_content_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-skeleton-activity-timeline", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("count", 6);
  }
}
function DailyActivities_ion_content_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.NO_ACTIVITIES_TODAY"));
  }
}
function DailyActivities_ion_content_0_div_9_div_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(activity_r3.notes);
  }
}
function DailyActivities_ion_content_0_div_9_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DailyActivities_ion_content_0_div_9_div_1_div_1_div_8_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r3 = ctx.$implicit;
    const activityGroup_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(activity_r3.activityType.toLowerCase());
    \u0275\u0275classProp("single-activity", activityGroup_r4.length === 1);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c2, activity_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, activity_r3.activityTime, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r3.activityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getActivityIcon(activity_r3.activityType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r3.notes);
  }
}
function DailyActivities_ion_content_0_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, DailyActivities_ion_content_0_div_9_div_1_div_1_Template, 9, 14, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activityGroup_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", activityGroup_r4);
  }
}
function DailyActivities_ion_content_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, DailyActivities_ion_content_0_div_9_div_1_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getActivityRows());
  }
}
function DailyActivities_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 5)(1, "ion-refresher", 6);
    \u0275\u0275listener("ionRefresh", function DailyActivities_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-parent-child-header", 7);
    \u0275\u0275listener("onBack", function DailyActivities_ion_content_0_Template_app_parent_child_header_onBack_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    })("onPrevChild", function DailyActivities_ion_content_0_Template_app_parent_child_header_onPrevChild_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevChild());
    })("onNextChild", function DailyActivities_ion_content_0_Template_app_parent_child_header_onNextChild_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextChild());
    })("onDateChange", function DailyActivities_ion_content_0_Template_app_parent_child_header_onDateChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.selectedDate = $event;
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "div", 9);
    \u0275\u0275template(6, DailyActivities_ion_content_0_h2_6_Template, 3, 4, "h2", 10)(7, DailyActivities_ion_content_0_div_7_Template, 2, 1, "div", 11)(8, DailyActivities_ion_content_0_div_8_Template, 5, 3, "div", 12)(9, DailyActivities_ion_content_0_div_9_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.children.length > 1 ? "header-with-carrousel" : "");
    \u0275\u0275property("children", ctx_r1.children)("currentChildIndex", ctx_r1.currentChildIndex)("selectedDate", ctx_r1.selectedDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.children.length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.activities.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.activities.length > 0);
  }
}
function DailyActivities_app_title_page_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 3, "DAILY_REPORT.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 5, "DAILY_REPORT.SUBTITLE"))("breadcrumbs", \u0275\u0275pureFunction2(15, _c5, \u0275\u0275pureFunction1(11, _c3, \u0275\u0275pipeBind1(3, 7, "BREADCRUMBS.DASHBOARD")), \u0275\u0275pureFunction1(13, _c4, \u0275\u0275pipeBind1(4, 9, "DAILY_REPORT.TITLE"))));
  }
}
function DailyActivities_div_3_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r6.firstName, " ", item_r6.lastName, " ");
  }
}
function DailyActivities_div_3_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r7 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r7.firstName, " ", item_r7.lastName, " ");
  }
}
function DailyActivities_div_3_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "button", 87);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_87_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showBulkAdd = true);
    });
    \u0275\u0275element(2, "i", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_87_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportReport());
    });
    \u0275\u0275element(6, "i", 89);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "DAILY_REPORT.ADD_ACTIVITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "DAILY_REPORT.EXPORT_REPORT"), " ");
  }
}
function DailyActivities_div_3_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.LOADING"));
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_13_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 109);
    \u0275\u0275element(2, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 111)(4, "li")(5, "a", 112);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_13_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const activity_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.editActivity(activity_r10));
    });
    \u0275\u0275element(6, "i", 113);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "a", 114);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_13_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const activity_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteActivity(activity_r10.id));
    });
    \u0275\u0275element(11, "i", 115);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 2, "DAILY_REPORT.EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 4, "DAILY_REPORT.DELETE"));
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "small", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(3, 3, "DAILY_REPORT.CHILD"), ": ", activity_r10.child.firstName, " ", activity_r10.child.lastName);
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "small");
    \u0275\u0275element(2, "i", 118);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", activity_r10.duration, " ", \u0275\u0275pipeBind1(4, 2, "DAILY_REPORT.MINUTES"));
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "small");
    \u0275\u0275element(2, "i", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r10.foodItem);
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "small");
    \u0275\u0275element(2, "i", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r10.mood);
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "small", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r10.notes);
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "div", 44)(3, "div", 100)(4, "div", 101)(5, "div", 102);
    \u0275\u0275element(6, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h6", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 103);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_13_Template, 14, 6, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_14_Template, 4, 5, "div", 105)(15, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_15_Template, 5, 4, "div", 106)(16, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_16_Template, 4, 1, "div", 106)(17, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_17_Template, 4, 1, "div", 106)(18, DailyActivities_div_3_div_99_div_1_div_1_div_12_div_18_Template, 3, 1, "div", 107);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c2, activity_r10.id));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(activity_r10.activityType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", ctx_r1.getTemplate(activity_r10.activityType).icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r10.activityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 14, activity_r10.activityTime, "shortTime"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedChildId && activity_r10.child);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.foodItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.mood);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", activity_r10.notes);
  }
}
function DailyActivities_div_3_div_99_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 40)(2, "div", 41)(3, "h5", 42);
    \u0275\u0275element(4, "i", 94);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 96);
    \u0275\u0275template(12, DailyActivities_div_3_div_99_div_1_div_1_div_12_Template, 19, 19, "div", 97);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const period_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bi-sun", period_r11 === "Morning")("bi-cloud-sun-fill", period_r11 === "Afternoon")("bi-moon-stars", period_r11 === "Evening");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 10, "DAILY_REPORT.TIME_PERIODS." + period_r11.toUpperCase()), " ", \u0275\u0275pipeBind1(7, 12, "DAILY_REPORT.ACTIVITIES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTimelineGroups()[period_r11].length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTimelineGroups()[period_r11]);
  }
}
function DailyActivities_div_3_div_99_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, DailyActivities_div_3_div_99_div_1_div_1_Template, 13, 14, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTimelineGroups()[period_r11] && ctx_r1.getTimelineGroups()[period_r11].length > 0);
  }
}
function DailyActivities_div_3_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, DailyActivities_div_3_div_99_div_1_Template, 2, 1, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c6));
  }
}
function DailyActivities_div_3_div_100_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "small", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r12.child.firstName);
  }
}
function DailyActivities_div_3_div_100_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_100_div_9_div_11_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 132);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_100_div_9_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const activity_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editActivity(activity_r12));
    });
    \u0275\u0275element(2, "i", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 134);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_100_div_9_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const activity_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteActivity(activity_r12.id));
    });
    \u0275\u0275element(4, "i", 135);
    \u0275\u0275elementEnd()();
  }
}
function DailyActivities_div_3_div_100_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 126)(3, "div", 127);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h6", 117);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 128);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, DailyActivities_div_3_div_100_div_9_div_10_Template, 3, 1, "div", 105)(11, DailyActivities_div_3_div_100_div_9_div_11_Template, 5, 0, "div", 129);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c2, activity_r12.id));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(activity_r12.activityType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", ctx_r1.getTemplate(activity_r12.activityType).icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r12.activityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, activity_r12.activityTime, "shortTime"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.selectedChildId && activity_r12.child);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function DailyActivities_div_3_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 40)(2, "div", 41)(3, "h5", 42);
    \u0275\u0275element(4, "i", 122);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 96);
    \u0275\u0275template(9, DailyActivities_div_3_div_100_div_9_Template, 12, 15, "div", 123);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "DAILY_REPORT.ALL_ACTIVITIES"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.activities);
  }
}
function DailyActivities_div_3_div_101_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_101_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showBulkAdd = true);
    });
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.ADD_FIRST_ACTIVITY"), " ");
  }
}
function DailyActivities_div_3_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 40)(2, "div", 137);
    \u0275\u0275element(3, "i", 138);
    \u0275\u0275elementStart(4, "h5", 103);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 103);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 139);
    \u0275\u0275template(12, DailyActivities_div_3_div_101_button_12_Template, 4, 3, "button", 140);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 4, "DAILY_REPORT.NO_ACTIVITIES_FOR_DATE"), " ", \u0275\u0275pipeBind2(7, 6, ctx_r1.selectedDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "DAILY_REPORT.START_TRACKING"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function DailyActivities_div_3_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "div", 143);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_117_Template_div_click_1_listener() {
      const template_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTemplate(template_r16));
    });
    \u0275\u0275elementStart(2, "div", 144);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const template_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.newActivity.activityType === template_r16.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(template_r16.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", template_r16.icon));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(template_r16.label);
  }
}
function DailyActivities_div_3_div_118_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "label", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 162);
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_div_118_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newActivity.duration, $event) || (ctx_r1.newActivity.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.DURATION_MINUTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newActivity.duration);
  }
}
function DailyActivities_div_3_div_118_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "label", 54);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 163);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_div_118_div_18_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newActivity.foodItem, $event) || (ctx_r1.newActivity.foodItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.FOOD_DRINK"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newActivity.foodItem);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 5, "DAILY_REPORT.FOOD_PLACEHOLDER"));
  }
}
function DailyActivities_div_3_div_118_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 164);
    \u0275\u0275listener("click", function DailyActivities_div_3_div_118_button_25_Template_button_click_0_listener() {
      const mood_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.newActivity.mood = mood_r21);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mood_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.newActivity.mood === mood_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "DAILY_REPORT.MOODS." + mood_r21.toUpperCase()), " ");
  }
}
function DailyActivities_div_3_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 146)(2, "div", 147)(3, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_div_118_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.applyToAllChildren, $event) || (ctx_r1.applyToAllChildren = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 149);
    \u0275\u0275element(5, "i", 150);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "small", 151);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 152)(12, "div", 153)(13, "label", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_div_118_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newActivity.activityTime, $event) || (ctx_r1.newActivity.activityTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, DailyActivities_div_3_div_118_div_17_Template, 5, 4, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, DailyActivities_div_3_div_118_div_18_Template, 7, 7, "div", 156);
    \u0275\u0275elementStart(19, "div", 157)(20, "div", 158)(21, "label", 54);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 159);
    \u0275\u0275template(25, DailyActivities_div_3_div_118_button_25_Template, 3, 5, "button", 160);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 157)(27, "div", 158)(28, "label", 54);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 161);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_div_118_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newActivity.notes, $event) || (ctx_r1.newActivity.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.applyToAllChildren);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 12, "DAILY_REPORT.APPLY_TO_ALL_CHILDREN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "DAILY_REPORT.APPLY_TO_ALL_CHILDREN_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "DAILY_REPORT.TIME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newActivity.activityTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTemplate(ctx_r1.newActivity.activityType).defaultDuration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getTemplate(ctx_r1.newActivity.activityType).requiresFood);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "DAILY_REPORT.MOOD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.moods);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 20, "DAILY_REPORT.NOTES"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newActivity.notes);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 22, "DAILY_REPORT.ADDITIONAL_NOTES"));
  }
}
function DailyActivities_div_3_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 165);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("show", ctx_r1.showBulkAdd);
  }
}
function DailyActivities_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "div", 34);
    \u0275\u0275element(7, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 32)(15, "div", 33)(16, "div", 34);
    \u0275\u0275element(17, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 36)(19, "h3");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 32)(25, "div", 33)(26, "div", 34);
    \u0275\u0275element(27, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 36)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 32)(35, "div", 33)(36, "div", 34);
    \u0275\u0275element(37, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 36)(39, "h3");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 39)(45, "div", 40)(46, "div", 41)(47, "h5", 42);
    \u0275\u0275element(48, "i", 43);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 44)(52, "div", 45);
    \u0275\u0275element(53, "canvas", 46, 0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 39)(56, "div", 40)(57, "div", 41)(58, "h5", 42);
    \u0275\u0275element(59, "i", 47);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 44)(63, "div", 48);
    \u0275\u0275element(64, "canvas", 49, 1);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(66, "div", 50)(67, "div", 51)(68, "div", 41)(69, "h5", 42);
    \u0275\u0275element(70, "i", 52);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 44)(74, "div", 53)(75, "label", 54);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DailyActivities_div_3_Template_input_change_78_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 53)(80, "label", 54);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "ng-select", 56);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DailyActivities_div_3_Template_ng_select_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedChildId, $event) || (ctx_r1.selectedChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DailyActivities_div_3_Template_ng_select_change_83_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onChildChange());
    });
    \u0275\u0275template(85, DailyActivities_div_3_ng_template_85_Template, 1, 2, "ng-template", 57)(86, DailyActivities_div_3_ng_template_86_Template, 1, 2, "ng-template", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(87, DailyActivities_div_3_div_87_Template, 9, 6, "div", 59);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 60)(89, "h4", 61);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 62)(93, "div", 63)(94, "button", 64);
    \u0275\u0275listener("click", function DailyActivities_div_3_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "timeline");
    });
    \u0275\u0275element(95, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 66);
    \u0275\u0275listener("click", function DailyActivities_div_3_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "grid");
    });
    \u0275\u0275element(97, "i", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(98, DailyActivities_div_3_div_98_Template, 5, 3, "div", 68)(99, DailyActivities_div_3_div_99_Template, 2, 2, "div", 10)(100, DailyActivities_div_3_div_100_Template, 10, 4, "div", 10)(101, DailyActivities_div_3_div_101_Template, 13, 11, "div", 69);
    \u0275\u0275elementStart(102, "div", 70)(103, "div", 71)(104, "div", 72)(105, "div", 73)(106, "h5", 74);
    \u0275\u0275element(107, "i", 75);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 76);
    \u0275\u0275listener("click", function DailyActivities_div_3_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBulkAdd = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 77)(112, "div", 78)(113, "label", 79);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 31);
    \u0275\u0275template(117, DailyActivities_div_3_div_117_Template, 6, 8, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(118, DailyActivities_div_3_div_118_Template, 33, 24, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 81)(120, "button", 82);
    \u0275\u0275listener("click", function DailyActivities_div_3_Template_button_click_120_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showBulkAdd = false);
    });
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "button", 83);
    \u0275\u0275listener("click", function DailyActivities_div_3_Template_button_click_123_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveActivity());
    });
    \u0275\u0275element(124, "i", 84);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(127, DailyActivities_div_3_div_127_Template, 1, 2, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.getActivityCount("Meal") + ctx_r1.getActivityCount("Snack"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 49, "DAILY_REPORT.MEALS_SNACKS"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getActivityCount("Nap"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 51, "DAILY_REPORT.NAP_TIMES"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.getActivityCount("Play") + ctx_r1.getActivityCount("Learning"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 53, "DAILY_REPORT.ACTIVITIES"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.activities.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 55, "DAILY_REPORT.TOTAL_ACTIVITIES"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 57, "DAILY_REPORT.ACTIVITY_DISTRIBUTION"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r1.activityChartData)("options", ctx_r1.chartOptions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 59, "DAILY_REPORT.DAILY_TIMELINE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r1.timelineChartData)("options", ctx_r1.timelineChartOptions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 61, "DAILY_REPORT.FILTERS_CONTROLS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 63, "DAILY_REPORT.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 65, "DAILY_REPORT.CHILD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.children);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedChildId);
    \u0275\u0275property("clearable", true)("searchable", true)("placeholder", \u0275\u0275pipeBind1(84, 67, "DAILY_REPORT.ALL_CHILDREN") + " (" + ctx_r1.children.length + ")");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 69, "DAILY_REPORT.ACTIVITY_TIMELINE"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-light", ctx_r1.viewMode === "timeline")("primary-hover", ctx_r1.viewMode !== "timeline");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-light", ctx_r1.viewMode === "grid")("primary-hover", ctx_r1.viewMode !== "grid");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.viewMode === "timeline" && ctx_r1.activities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.viewMode === "grid" && ctx_r1.activities.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.activities.length === 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r1.showBulkAdd ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r1.showBulkAdd);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(109, 71, "DAILY_REPORT.ADD_DAILY_ACTIVITY"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 73, "DAILY_REPORT.SELECT_ACTIVITY_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.activityTemplates);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newActivity.activityType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 75, "DAILY_REPORT.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.newActivity.activityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(126, 77, "DAILY_REPORT.SAVE_ACTIVITY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showBulkAdd);
  }
}
Chart.register(ArcElement, plugin_tooltip, plugin_legend, DoughnutController, LineElement, LineController, LinearScale, CategoryScale, PointElement);
var DailyActivities = class _DailyActivities {
  activityService;
  childrenService;
  authService;
  cdr;
  location;
  translate;
  pageTitleService;
  activityChartRef;
  timelineChartRef;
  activities = [];
  children = [];
  selectedDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  selectedChildId = null;
  loading = false;
  showBulkAdd = false;
  userRole = null;
  viewMode = "timeline";
  currentChildIndex = 0;
  get isParent() {
    return this.authService.isParent();
  }
  // Chart data
  activityChartData = {
    labels: [],
    datasets: []
  };
  timelineChartData = {
    labels: [],
    datasets: []
  };
  chartOptions = {};
  timelineChartOptions = {};
  activityTemplates = [];
  langChangeSub;
  back() {
    this.location.back();
  }
  moods = ["Happy", "Sad", "Cranky", "Sleepy", "Energetic", "Calm"];
  applyToAllChildren = false;
  newActivity = this.getEmptyActivity();
  constructor(activityService, childrenService, authService, cdr, location, translate, pageTitleService) {
    this.activityService = activityService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.cdr = cdr;
    this.location = location;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("DAILY_REPORT.TITLE"));
    this.userRole = this.authService.getUserRole();
    this.initActivityTemplates();
    this.loadChildren();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("DAILY_REPORT.TITLE"));
      this.initActivityTemplates();
      this.cdr.detectChanges();
    });
  }
  initActivityTemplates() {
    this.activityTemplates = [
      { type: "Nap", icon: "bi-moon-stars", color: "primary", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.NAP"), defaultDuration: 60 },
      { type: "Meal", icon: "bi-egg-fried", color: "success", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.MEAL"), requiresFood: true },
      { type: "Snack", icon: "bi-cup-hot", color: "warning", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.SNACK"), requiresFood: true },
      { type: "Play", icon: "bi-controller", color: "info", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.PLAY"), defaultDuration: 30 },
      { type: "Diaper", icon: "bi-table", color: "secondary", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.DIAPER") },
      { type: "Outdoor", icon: "bi-tree", color: "success", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.OUTDOOR"), defaultDuration: 45 },
      { type: "Learning", icon: "bi-book", color: "primary", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.LEARNING"), defaultDuration: 30 },
      { type: "Bathroom", icon: "bi-badge-wc", color: "info", label: this.translate.instant("DAILY_REPORT.ACTIVITY_TYPES.BATHROOM") }
    ];
  }
  ngAfterViewInit() {
    this.setupChartOptions();
    this.updateChartData();
  }
  setupChartOptions() {
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            usePointStyle: true
          }
        }
      }
    };
    this.timelineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    };
  }
  loadChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        this.children = children;
        console.log("Loaded children:", this.children);
        if (children.length > 0 && !this.selectedChildId) {
          this.selectedChildId = children[0].id;
          this.currentChildIndex = 0;
        }
        this.loadActivities();
      }
    });
  }
  loadActivities() {
    this.loading = true;
    if (this.selectedChildId) {
      this.activityService.getActivitiesByChild(this.selectedChildId, this.selectedDate).subscribe({
        next: (activities) => {
          this.activities = activities.sort((a, b) => new Date(b.activityTime).getTime() - new Date(a.activityTime).getTime());
          this.loading = false;
          this.updateChartData();
        },
        error: () => this.loading = false
      });
    } else {
      this.activityService.getActivities(this.selectedDate).subscribe({
        next: (activities) => {
          this.activities = activities.sort((a, b) => new Date(b.activityTime).getTime() - new Date(a.activityTime).getTime());
          this.loading = false;
          this.updateChartData();
        },
        error: () => this.loading = false
      });
    }
  }
  onDateChange() {
    this.loadActivities();
  }
  onChildChange() {
    this.loadActivities();
  }
  selectTemplate(template) {
    this.newActivity = __spreadProps(__spreadValues({}, this.getEmptyActivity()), {
      activityType: template.type,
      childId: this.selectedChildId,
      activityTime: this.getCurrentDateTimeLocal(),
      duration: template.defaultDuration ? `${template.defaultDuration}` : void 0
    });
  }
  getCurrentDateTimeLocal() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  saveActivity() {
    if (!this.newActivity.activityType)
      return;
    if (!this.applyToAllChildren && !this.newActivity.childId)
      return;
    const activityData = __spreadProps(__spreadValues({}, this.newActivity), {
      // Convert duration minutes to TimeSpan format (HH:mm:ss)
      duration: this.newActivity.duration ? `${Math.floor(parseInt(this.newActivity.duration) / 60).toString().padStart(2, "0")}:${(parseInt(this.newActivity.duration) % 60).toString().padStart(2, "0")}:00` : void 0
    });
    console.log("Sending activity data:", activityData);
    if (this.applyToAllChildren) {
      this.activityService.addBulkActivity(activityData).subscribe({
        next: (response) => {
          console.log(`Created activities for ${response.count} children`);
          this.showBulkAdd = false;
          this.newActivity = this.getEmptyActivity();
          this.applyToAllChildren = false;
          this.loadActivities();
        },
        error: (err) => {
          console.error("Error saving bulk activity:", err);
          console.error("Error details:", err.error);
        }
      });
    } else {
      this.activityService.addActivity(activityData).subscribe({
        next: () => {
          this.showBulkAdd = false;
          this.newActivity = this.getEmptyActivity();
          this.applyToAllChildren = false;
          this.loadActivities();
        },
        error: (err) => {
          console.error("Error saving activity:", err);
          console.error("Error details:", err.error);
        }
      });
    }
  }
  editActivity(activity) {
    this.newActivity = __spreadValues({}, activity);
    this.showBulkAdd = true;
  }
  updateChartData() {
    const activityCounts = this.getActivityCounts();
    this.activityChartData = {
      labels: Object.keys(activityCounts),
      datasets: [{
        data: Object.values(activityCounts),
        backgroundColor: [
          "#7dd3c0",
          // Primary
          "#7db9ff ",
          // Secondary  
          "#cdeaf0",
          // Accent
          "#10b981",
          // Green
          "#f59e0b",
          // Yellow
          "#ef4444",
          // Red
          "#8b5cf6",
          // Purple
          "#06b6d4"
          // Cyan
        ],
        borderWidth: 0
      }]
    };
    const timelineData = this.getTimelineData();
    this.timelineChartData = {
      labels: timelineData.labels,
      datasets: [{
        label: "Activities",
        data: timelineData.data,
        borderColor: "#7dd3c0",
        backgroundColor: "#7dd3c01a",
        fill: true,
        tension: 0.4
      }]
    };
  }
  getActivityCounts() {
    const counts = {};
    this.activities.forEach((activity) => {
      counts[activity.activityType] = (counts[activity.activityType] || 0) + 1;
    });
    return counts;
  }
  getTimelineData() {
    const hourCounts = {};
    for (let i = 6; i <= 18; i++) {
      const hour = i.toString().padStart(2, "0") + ":00";
      hourCounts[hour] = 0;
    }
    this.activities.forEach((activity) => {
      const hour = new Date(activity.activityTime).getHours();
      if (hour >= 6 && hour <= 18) {
        const hourKey = hour.toString().padStart(2, "0") + ":00";
        hourCounts[hourKey]++;
      }
    });
    return {
      labels: Object.keys(hourCounts),
      data: Object.values(hourCounts)
    };
  }
  getActivityCount(type) {
    return this.activities.filter((a) => a.activityType === type).length;
  }
  exportReport() {
    const reportData = {
      date: this.selectedDate,
      child: this.selectedChildId ? this.children.find((c) => c.id === this.selectedChildId) : null,
      activities: this.activities,
      summary: {
        totalActivities: this.activities.length,
        meals: this.getActivityCount("Meal") + this.getActivityCount("Snack"),
        naps: this.getActivityCount("Nap"),
        activities: this.getActivityCount("Play") + this.getActivityCount("Learning")
      }
    };
    console.log("Exporting report:", reportData);
  }
  deleteActivity(id) {
    if (!confirm("Delete this activity?"))
      return;
    this.activityService.deleteActivity(id).subscribe({
      next: () => this.loadActivities(),
      error: (err) => console.error("Error deleting activity:", err)
    });
  }
  getTemplate(type) {
    return this.activityTemplates.find((t) => t.type === type) || this.activityTemplates[0];
  }
  getEmptyActivity() {
    return {
      childId: this.selectedChildId || 0,
      activityType: "",
      activityTime: this.getCurrentDateTimeLocal(),
      notes: "",
      mood: "Happy"
    };
  }
  getTimelineGroups() {
    const groups = {};
    this.activities.forEach((activity) => {
      const hour = new Date(activity.activityTime).getHours();
      const period = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
      if (!groups[period])
        groups[period] = [];
      groups[period].push(activity);
    });
    return groups;
  }
  canEdit() {
    return this.userRole === "Admin" || this.userRole === "Teacher";
  }
  getSelectedChildName() {
    if (!this.selectedChildId || !this.children.length)
      return "Child";
    const child = this.children.find((c) => c.id === this.selectedChildId);
    return child ? `${child.firstName} ${child.lastName}` : "Child";
  }
  getActivityRows() {
    const rows = [];
    for (let i = 0; i < this.activities.length; i += 2) {
      rows.push(this.activities.slice(i, i + 2));
    }
    return rows;
  }
  getActivityIcon(type) {
    const icons = {
      "Meal": "\u{1F37D}\uFE0F \u{1F96A}",
      "Snack": "\u{1F34E} \u{1F968}",
      "Nap": "\u{1F6CF}\uFE0F \u{1F634}",
      "Play": "\u{1F3AE} \u26BD",
      "Learning": "\u{1F4DA} \u270F\uFE0F",
      "Outdoor": "\u{1F333} \u{1F308}",
      "Diaper": "\u{1F476} \u{1F9F7}",
      "Bathroom": "\u{1F6BD} \u{1F9FB}"
    };
    return icons[type] || "\u{1F4DD} \u2728";
  }
  getCurrentChild() {
    return this.children[this.currentChildIndex] || this.children[0];
  }
  prevChild() {
    if (this.currentChildIndex > 0) {
      this.currentChildIndex--;
      this.selectedChildId = this.children[this.currentChildIndex].id;
      this.loadActivities();
    }
  }
  nextChild() {
    if (this.currentChildIndex < this.children.length - 1) {
      this.currentChildIndex++;
      this.selectedChildId = this.children[this.currentChildIndex].id;
      this.loadActivities();
    }
  }
  selectChildByIndex(index) {
    this.currentChildIndex = index;
    this.selectedChildId = this.children[this.currentChildIndex].id;
    this.loadActivities();
  }
  getAge(dateOfBirth) {
    if (!dateOfBirth)
      return "N/A";
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    const years = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    if (years < 1) {
      return `${months + years * 12} months`;
    } else if (years === 1) {
      return "1 year";
    } else {
      return `${years} years`;
    }
  }
  trackByChildId(index, child) {
    return child.id;
  }
  // Pull-to-refresh handler
  onRefresh(event) {
    this.loadActivities();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  static \u0275fac = function DailyActivities_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyActivities)(\u0275\u0275directiveInject(DailyActivityService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyActivities, selectors: [["app-daily-activities"]], viewQuery: function DailyActivities_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.activityChartRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.timelineChartRef = _t.first);
    }
  }, decls: 4, vars: 5, consts: [["activityChart", ""], ["timelineChart", ""], ["class", "parent-activities", 4, "ngIf"], ["icon", "bi bi-clipboard-data", 3, "title", "subtitle", "breadcrumbs", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "parent-activities"], ["slot", "fixed", 3, "ionRefresh"], [3, "onBack", "onPrevChild", "onNextChild", "onDateChange", "children", "currentChildIndex", "selectedDate"], [1, "container-fluid"], [1, "activities-container"], [4, "ngIf"], ["class", "mb-5", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "mb-5 container-fluid", 4, "ngIf"], [1, "mb-5"], [3, "count"], [1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-calendar-x", "fs-1", "mb-2"], [1, "mb-5", "container-fluid"], ["class", "activity-row row", 4, "ngFor", "ngForOf"], [1, "activity-row", "row"], ["class", "activity-card col-6", "style", "cursor: pointer;", 3, "class", "single-activity", "routerLink", 4, "ngFor", "ngForOf"], [1, "activity-card", "col-6", 2, "cursor", "pointer", 3, "routerLink"], [1, "activity-time"], [1, "activity-title"], [1, "activity-icons"], ["class", "activity-notes", 4, "ngIf"], [1, "activity-notes"], ["icon", "bi bi-clipboard-data", 3, "title", "subtitle", "breadcrumbs"], [1, "row", "mb-4"], [1, "col-xl-8", "first-dashbord-card", "order-2", "order-xl-1"], [1, "row", "g-2"], [1, "col-xl-3", "col-6"], [1, "card", "card-body", "stats-card", "present"], [1, "stats-icon", "mb-2"], [1, "bi", "bi-egg-fried"], [1, "stats-content"], [1, "bi", "bi-moon-stars"], [1, "bi", "bi-controller"], [1, "col-xl-6", "mt-3", "d-none", "d-xl-block"], [1, "card", "card-dashbord-all", "card-general"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-pie-chart"], [1, "card-body"], [1, "chart-container", "text-center", 2, "height", "200px", "width", "200px", "margin", "0 auto"], ["baseChart", "", "type", "doughnut", 3, "data", "options"], [1, "bi", "bi-graph-up"], [2, "position", "relative", "height", "200px"], ["baseChart", "", "type", "line", 3, "data", "options"], [1, "col-xl-4", "order-1", "order-xl-2", "mb-3", "mb-xl-0"], [1, "card", "card-dashbord-all", "card-general", "mb-3"], [1, "bi", "bi-funnel-fill"], [1, "mb-3"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["bindLabel", "firstName", "bindValue", "id", 3, "ngModelChange", "change", "items", "ngModel", "clearable", "searchable", "placeholder"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["class", "d-grid gap-2", 4, "ngIf"], [1, "bg-white", "p-3", "border", "rounded-1", "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "title-filter"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "bg-white", "border", "rounded-2", "p-1", "me-2"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click"], [1, "bi", "bi-clock"], [1, "btn", "btn-icon", "btn-sm", 3, "click"], [1, "bi", "bi-grid"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["tabindex", "-1", 1, "modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-plus-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-4"], [1, "form-label", "fw-bold"], ["class", "col-md-3 col-sm-4 col-6", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "d-grid", "gap-2"], [1, "btn", "btn-add-global-2", "add", 3, "click"], [1, "btn", "btn-add-global-2", "export", 3, "click"], [1, "bi", "bi-download", "me-2"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "bi"], [1, "badge", "bg-primary", "ms-2"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-3"], [1, "card", "h-100", "border", "activity-card-item", "clickable-card", 2, "cursor", "pointer", 3, "routerLink"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "activity-icon", "me-2"], [1, "text-muted"], ["class", "dropdown", 3, "click", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["class", "mb-1", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "dropdown", 3, "click"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-outline-light"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-pencil", "me-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-2"], [1, "mb-2"], [1, "mb-1"], [1, "bi", "bi-clock", "me-1"], [1, "bi", "bi-egg-fried", "me-1"], [1, "bi", "bi-emoji-smile", "me-1"], [1, "mt-2"], [1, "bi", "bi-grid", "me-2"], ["class", "col-xl-3 col-md-4 col-sm-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-md-4", "col-sm-6", "mb-3"], [1, "card", "h-100", "border", "activity-grid-item", "clickable-card", 2, "cursor", "pointer", 3, "routerLink"], [1, "card-body", "text-center"], [1, "activity-icon-large", "mb-3"], [1, "text-muted", "d-block", "mb-2"], ["class", "d-flex justify-content-center gap-1", 3, "click", 4, "ngIf"], [1, "badge", "bg-light", "text-dark"], [1, "d-flex", "justify-content-center", "gap-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "text-center", "py-4"], [1, "card-body", "py-5"], [1, "bi", "bi-clipboard-data", "icon-4x", "text-muted", "mb-3", "opacity-25"], [1, "d-flex", "justify-content-center"], ["class", "btn custom-btn-2 btn-add-global-2 s", 3, "click", 4, "ngIf"], [1, "btn", "custom-btn-2", "btn-add-global-2", "s", 3, "click"], [1, "col-md-3", "col-sm-4", "col-6"], [1, "activity-template-card", 3, "click"], [1, "template-icon"], [1, "template-label"], [1, "mb-3", "p-3", "bg-light", "rounded"], [1, "form-check"], ["type", "checkbox", "id", "applyToAllChildren", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "applyToAllChildren", 1, "form-check-label"], [1, "bi", "bi-people-fill", "me-2"], [1, "form-text", "text-muted"], [1, "row", "g-3"], [1, "col-md-6"], ["type", "datetime-local", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "col-md-6", 4, "ngIf"], ["class", "row g-3 mt-2", 4, "ngIf"], [1, "row", "g-3", "mt-2"], [1, "col-12"], [1, "mood-buttons"], ["type", "button", "class", "btn btn-outline-secondary btn-sm me-2 mb-2", 3, "active", "click", 4, "ngFor", "ngForOf"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "number", "placeholder", "30", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "me-2", "mb-2", 3, "click"], [1, "modal-backdrop", "fade"]], template: function DailyActivities_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DailyActivities_ion_content_0_Template, 10, 9, "ion-content", 2);
      \u0275\u0275elementStart(1, "div");
      \u0275\u0275template(2, DailyActivities_app_title_page_2_Template, 5, 18, "app-title-page", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, DailyActivities_div_3_Template, 128, 79, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isParent ? "" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, TranslateModule, TitlePage, BaseChartDirective, ParentChildHeaderComponent, SkeletonActivityTimelineComponent, IonContent, IonRefresher, IonRefresherContent, DatePipe, TranslatePipe], styles: ["\n\nion-content.parent-activities[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-activities[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.activity-card-item[_ngcontent-%COMP%] {\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-card-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.meal[_ngcontent-%COMP%], \n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.snack[_ngcontent-%COMP%] {\n  background: #b5f8e5;\n  color: #202c4b;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.nap[_ngcontent-%COMP%] {\n  background: #ffc9bc;\n  color: #202c4b;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.eat[_ngcontent-%COMP%] {\n  background-color: #8cd1bd;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.music[_ngcontent-%COMP%] {\n  background-color: #84a0d8;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.art[_ngcontent-%COMP%] {\n  background-color: #84c76a;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.check-in[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.check-out[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.bathroom[_ngcontent-%COMP%] {\n  background-color: #dceba5;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.play[_ngcontent-%COMP%], \n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.learning[_ngcontent-%COMP%] {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.outdoor[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.art[_ngcontent-%COMP%] {\n  background-color: #84c76a;\n}\n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.diaper[_ngcontent-%COMP%], \n.activity-card-item[_ngcontent-%COMP%]   .activity-icon.bathroom[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.activity-grid-item[_ngcontent-%COMP%] {\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-grid-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.meal[_ngcontent-%COMP%], \n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.snack[_ngcontent-%COMP%] {\n  background: #cdeaf0;\n  color: #202c4b;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.nap[_ngcontent-%COMP%] {\n  background: #202c4b;\n  color: #feccfd;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.play[_ngcontent-%COMP%], \n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.learning[_ngcontent-%COMP%] {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.outdoor[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.diaper[_ngcontent-%COMP%], \n.activity-grid-item[_ngcontent-%COMP%]   .activity-icon-large.bathroom[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.title-filter[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n}\n.btn-icon.primary-hover[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n}\n.activity-template-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: white;\n}\n.activity-template-card[_ngcontent-%COMP%]:hover {\n  border-color: #feccfd;\n  background: #f9fafb;\n}\n.activity-template-card.selected[_ngcontent-%COMP%] {\n  border-color: #202c4b;\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto 0.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon.meal[_ngcontent-%COMP%], \n.activity-template-card[_ngcontent-%COMP%]   .template-icon.snack[_ngcontent-%COMP%] {\n  background: #cdeaf0;\n  color: #202c4b;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon.nap[_ngcontent-%COMP%] {\n  background: #202c4b;\n  color: #feccfd;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon.play[_ngcontent-%COMP%], \n.activity-template-card[_ngcontent-%COMP%]   .template-icon.learning[_ngcontent-%COMP%] {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon.outdoor[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-icon.diaper[_ngcontent-%COMP%], \n.activity-template-card[_ngcontent-%COMP%]   .template-icon.bathroom[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.activity-template-card[_ngcontent-%COMP%]   .template-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: block;\n}\n.mood-buttons[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background-color: #202c4b;\n  border-color: #202c4b;\n  color: white;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n@media (max-width: 768px) {\n  .activity-template-card[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .activity-template-card[_ngcontent-%COMP%]   .template-icon[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 1rem;\n  }\n  .activity-template-card[_ngcontent-%COMP%]   .template-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.modal-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.activities-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 15px;\n}\n.activity-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 18px;\n}\n.activity-row[_ngcontent-%COMP%]   .activity-card[_ngcontent-%COMP%]:nth-child(2) {\n  transform: translateY(30px);\n}\n.activity-card[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 18px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 7px rgba(50, 50, 93, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.activity-card.meal[_ngcontent-%COMP%] {\n  background-color: #b5f8e5;\n}\n.activity-card.diaper[_ngcontent-%COMP%] {\n  background-color: #eef7cd;\n}\n.activity-card.snack[_ngcontent-%COMP%] {\n  background-color: #E5F0FB;\n}\n.activity-card.bathroom[_ngcontent-%COMP%] {\n  background-color: #dceba5;\n}\n.activity-card.check-in[_ngcontent-%COMP%] {\n  background-color: #e1e3fb;\n}\n.activity-card.nap[_ngcontent-%COMP%] {\n  background-color: #ffc9bc;\n}\n.activity-card.learning[_ngcontent-%COMP%] {\n  background-color: #d9d9d9;\n}\n.activity-card.play[_ngcontent-%COMP%] {\n  background-color: #feebc3;\n}\n.activity-card.outdoor[_ngcontent-%COMP%] {\n  background-color: #D9D8FB;\n}\n.activity-card.eat[_ngcontent-%COMP%] {\n  background-color: #8cd1bd;\n}\n.activity-card.music[_ngcontent-%COMP%] {\n  background-color: #84a0d8;\n}\n.activity-card.art[_ngcontent-%COMP%] {\n  background-color: #84c76a;\n}\n.activity-time[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  color: #6182A5;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.activity-title[_ngcontent-%COMP%] {\n  font-size: 1.07rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: #272A3C;\n}\n.activity-icons[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n  .slider-controls {\n  place-self: center;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.7607843137);\n  margin: 10px 0;\n  border-radius: 20px;\n  max-width: max-content;\n}\n  .slider-controls .btn {\n  padding: 4px 8px;\n  font-size: 12px;\n  border: none;\n}\n  .header-info_card {\n  margin-top: -70px !important;\n}\n.single-activity[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.clickable-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.clickable-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12) !important;\n}\n.clickable-card[_ngcontent-%COMP%]:active {\n  transform: translateY(-1px);\n}\n.btn-add-global-2[_ngcontent-%COMP%]:focus {\n  box-shadow: rgba(129, 210, 198, 0.5) 0px 0px 0px 0.2rem;\n}\n.btn-add-global-2.add[_ngcontent-%COMP%] {\n  background: #7dd3c0 !important;\n  border: none;\n  color: white;\n  justify-content: center;\n}\n.btn-add-global-2.add[_ngcontent-%COMP%]:hover {\n  background: #7dd3c0;\n  color: white;\n}\n.btn-add-global-2.add[_ngcontent-%COMP%]:focus {\n  box-shadow: rgba(129, 210, 198, 0.5) 0px 0px 0px 0.2rem;\n}\n.btn-add-global-2.export[_ngcontent-%COMP%] {\n  background: #7db9ff !important;\n  justify-content: center;\n}\n.card-dashbord_top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card-dashbord_top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  max-height: fit-content;\n  padding: 10px;\n  border-radius: 5px;\n  background: #7dd3c0;\n  line-height: 1;\n  margin-right: 8px;\n  color: white;\n}\n.stats-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.stats-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.stats-card[_ngcontent-%COMP%]   .stats-icon[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  background: var(--secondary-color);\n  color: #fff;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2c3e50;\n}\n.stats-card[_ngcontent-%COMP%]   .stats-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  margin-bottom: 0;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202C4B !important;\n}\n  .header-with-carrousel .image-name {\n  margin-bottom: 45px;\n}\n/*# sourceMappingURL=daily-activities.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DailyActivities, [{
    type: Component,
    args: [{ selector: "app-daily-activities", standalone: true, imports: [CommonModule, FormsModule, RouterModule, NgSelectModule, TranslateModule, TitlePage, BaseChartDirective, ParentChildHeaderComponent, SkeletonActivityTimelineComponent, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-activities">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <app-parent-child-header\r
    [class]="children.length > 1 ? 'header-with-carrousel' : ''"\r
    [children]="children"\r
    [currentChildIndex]="currentChildIndex"\r
    [selectedDate]="selectedDate"\r
    (onBack)="back()"\r
    (onPrevChild)="prevChild()"\r
    (onNextChild)="nextChild()"\r
    (onDateChange)="selectedDate = $event; onDateChange()">\r
  </app-parent-child-header>\r
\r
  <!-- parent view-->\r
  <div class="container-fluid">\r
    <div class="activities-container">\r
      <h2 *ngIf="children.length > 1">{{ 'DAILY_REPORT.TODAYS_ACTIVITIES' | translate }} - {{ getSelectedChildName() }}</h2>\r
\r
      <!-- Loading Skeleton -->\r
      <div *ngIf="loading" class="mb-5">\r
        <app-skeleton-activity-timeline [count]="6"></app-skeleton-activity-timeline>\r
      </div>\r
\r
      <div *ngIf="!loading && activities.length === 0" class="text-center py-4 text-muted">\r
        <i class="bi bi-calendar-x fs-1 mb-2"></i>\r
        <p>{{ 'DAILY_REPORT.NO_ACTIVITIES_TODAY' | translate }}</p>\r
      </div>\r
      <div *ngIf="!loading && activities.length > 0" class="mb-5 container-fluid">\r
        <div class="activity-row row" *ngFor="let activityGroup of getActivityRows(); let i = index">\r
          <div class="activity-card col-6"\r
              *ngFor="let activity of activityGroup"\r
              [class]="activity.activityType.toLowerCase()"\r
              [class.single-activity]="activityGroup.length === 1"\r
              [routerLink]="['/activities/detail', activity.id]"\r
              style="cursor: pointer;">\r
            <div class="activity-time">{{ activity.activityTime | date:'shortTime' }}</div>\r
            <div class="activity-title">{{ activity.activityType }}</div>\r
            <div class="activity-icons">{{ getActivityIcon(activity.activityType) }}</div>\r
            <div class="activity-notes" *ngIf="activity.notes">{{ activity.notes }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ion-content>\r
\r
<div [class]="isParent ? '' : 'container-fluid mt-4'">\r
  <app-title-page *ngIf="!isParent"\r
    [title]="'DAILY_REPORT.TITLE' | translate"\r
    [subtitle]="'DAILY_REPORT.SUBTITLE' | translate"\r
    icon="bi bi-clipboard-data"\r
    [breadcrumbs]="[{label: 'BREADCRUMBS.DASHBOARD' | translate, url: '/dashboard'}, {label: 'DAILY_REPORT.TITLE' | translate}]">\r
  </app-title-page>\r
</div>\r
\r
<!-- Stats Overview -->\r
<div class="container-fluid" *ngIf="!isParent">\r
  <div class="row mb-4">\r
    <div class="col-xl-8 first-dashbord-card order-2 order-xl-1">\r
      <div class="row g-2">\r
        <div class="col-xl-3 col-6">\r
          <div class="card card-body stats-card present">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-egg-fried"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ getActivityCount('Meal') + getActivityCount('Snack') }}</h3>\r
              <p>{{ 'DAILY_REPORT.MEALS_SNACKS' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-xl-3 col-6">\r
          <div class="card card-body stats-card present">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-moon-stars"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ getActivityCount('Nap') }}</h3>\r
              <p>{{ 'DAILY_REPORT.NAP_TIMES' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-xl-3 col-6">\r
          <div class="card card-body stats-card present">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-controller"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ getActivityCount('Play') + getActivityCount('Learning') }}</h3>\r
              <p>{{ 'DAILY_REPORT.ACTIVITIES' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-xl-3 col-6">\r
          <div class="card card-body stats-card present">\r
            <div class="stats-icon mb-2">\r
              <i class="bi bi-controller"></i>\r
            </div>\r
            <div class="stats-content">\r
              <h3>{{ activities.length }}</h3>\r
              <p>{{ 'DAILY_REPORT.TOTAL_ACTIVITIES' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <!-- Charts Row -->\r
        <div class="col-xl-6 mt-3 d-none d-xl-block">\r
          <div class="card card-dashbord-all card-general">\r
            <div class="card-header">\r
              <h5 class="mb-0"><i class="bi bi-pie-chart"></i>{{ 'DAILY_REPORT.ACTIVITY_DISTRIBUTION' | translate }}</h5>\r
            </div>\r
            <div class="card-body">\r
              <div class="chart-container text-center" style="height: 200px; width: 200px; margin: 0 auto;">\r
                <canvas #activityChart baseChart [data]="activityChartData" [options]="chartOptions" type="doughnut"></canvas>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="col-xl-6 mt-3 d-none d-xl-block">\r
          <div class="card card-dashbord-all card-general">\r
            <div class="card-header">\r
              <h5 class="mb-0"><i class="bi bi-graph-up"></i>{{ 'DAILY_REPORT.DAILY_TIMELINE' | translate }}</h5>\r
            </div>\r
            <div class="card-body">\r
              <div style="position: relative; height: 200px;">\r
                <canvas #timelineChart baseChart [data]="timelineChartData" [options]="timelineChartOptions" type="line"></canvas>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <!-- Filters & Controls -->\r
    <div class="col-xl-4 order-1 order-xl-2 mb-3 mb-xl-0">\r
      <div class="card card-dashbord-all card-general mb-3">\r
        <div class="card-header">\r
          <h5 class="mb-0"><i class="bi bi-funnel-fill"></i>{{ 'DAILY_REPORT.FILTERS_CONTROLS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'DAILY_REPORT.DATE' | translate }}</label>\r
            <input type="date" class="form-control" [(ngModel)]="selectedDate" (change)="onDateChange()">\r
          </div>\r
          <div class="mb-3">\r
            <label class="form-label">{{ 'DAILY_REPORT.CHILD' | translate }}</label>\r
            <ng-select\r
              [items]="children"\r
              bindLabel="firstName"\r
              bindValue="id"\r
              [(ngModel)]="selectedChildId"\r
              (change)="onChildChange()"\r
              [clearable]="true"\r
              [searchable]="true"\r
              [placeholder]="('DAILY_REPORT.ALL_CHILDREN' | translate) + ' (' + children.length + ')'">\r
              <ng-template ng-label-tmp let-item="item">\r
                {{ item.firstName }} {{ item.lastName }}\r
              </ng-template>\r
              <ng-template ng-option-tmp let-item="item">\r
                {{ item.firstName }} {{ item.lastName }}\r
              </ng-template>\r
            </ng-select>\r
          </div>\r
          <div class="d-grid gap-2" *ngIf="canEdit()">\r
            <button class="btn btn-add-global-2 add" (click)="showBulkAdd = true">\r
              <i class="bi bi-plus-circle me-2"></i>{{ 'DAILY_REPORT.ADD_ACTIVITY' | translate }}\r
            </button>\r
            <button class="btn btn-add-global-2 export" (click)="exportReport()">\r
              <i class="bi bi-download me-2"></i>{{ 'DAILY_REPORT.EXPORT_REPORT' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- View Controls -->\r
  <div class="bg-white p-3 border rounded-1 d-flex align-items-center justify-content-between flex-wrap">\r
    <h4 class="title-filter">{{ 'DAILY_REPORT.ACTIVITY_TIMELINE' | translate }}</h4>\r
    <div class="d-flex align-items-center flex-wrap gap-2">\r
      <!-- View Toggle -->\r
      <div class="d-flex align-items-center bg-white border rounded-2 p-1 me-2">\r
        <button \r
          class="btn btn-icon btn-sm me-1" \r
          [class.bg-light]="viewMode === 'timeline'"\r
          [class.primary-hover]="viewMode !== 'timeline'"\r
          (click)="viewMode = 'timeline'">\r
          <i class="bi bi-clock"></i>\r
        </button>\r
        <button \r
          class="btn btn-icon btn-sm" \r
          [class.bg-light]="viewMode === 'grid'"\r
          [class.primary-hover]="viewMode !== 'grid'"\r
          (click)="viewMode = 'grid'">\r
          <i class="bi bi-grid"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-3">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ 'DAILY_REPORT.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Timeline View -->\r
  <div *ngIf="!loading && viewMode === 'timeline' && activities.length > 0">\r
    <div *ngFor="let period of ['Morning', 'Afternoon', 'Evening']" class="mb-4">\r
      <div *ngIf="getTimelineGroups()[period] && getTimelineGroups()[period]!.length > 0">\r
        <div class="card card-dashbord-all card-general">\r
          <div class="card-header">\r
            <h5 class="mb-0">\r
              <i class="bi" [class.bi-sun]="period === 'Morning'"\r
                 [class.bi-cloud-sun-fill]="period === 'Afternoon'"\r
                 [class.bi-moon-stars]="period === 'Evening'"></i>\r
              {{ 'DAILY_REPORT.TIME_PERIODS.' + period.toUpperCase() | translate }} {{ 'DAILY_REPORT.ACTIVITIES' | translate }}\r
              <span class="badge bg-primary ms-2">{{ getTimelineGroups()[period]!.length }}</span>\r
            </h5>\r
          </div>\r
          <div class="card-body">\r
            <div class="row">\r
              <div *ngFor="let activity of getTimelineGroups()[period]!" class="col-md-6 col-lg-4 mb-3">\r
                <div class="card h-100 border activity-card-item clickable-card" [routerLink]="['/activities/detail', activity.id]" style="cursor: pointer;">\r
                  <div class="card-body">\r
                    <div class="d-flex align-items-center justify-content-between mb-2">\r
                      <div class="d-flex align-items-center">\r
                        <div class="activity-icon me-2" [class]="activity.activityType.toLowerCase()">\r
                          <i class="bi {{ getTemplate(activity.activityType).icon }}"></i>\r
                        </div>\r
                        <div>\r
                          <h6 class="mb-0">{{ activity.activityType }}</h6>\r
                          <small class="text-muted">{{ activity.activityTime | date:'shortTime' }}</small>\r
                        </div>\r
                      </div>\r
                      <div class="dropdown" *ngIf="canEdit()" (click)="$event.stopPropagation()">\r
                        <button class="btn btn-sm btn-outline-light" data-bs-toggle="dropdown">\r
                          <i class="bi bi-three-dots-vertical"></i>\r
                        </button>\r
                        <ul class="dropdown-menu dropdown-menu-end">\r
                          <li><a class="dropdown-item" href="javascript:void(0);" (click)="editActivity(activity)"><i class="bi bi-pencil me-2"></i>{{ 'DAILY_REPORT.EDIT' | translate }}</a></li>\r
                          <li><a class="dropdown-item text-danger" href="javascript:void(0);" (click)="deleteActivity(activity.id!)"><i class="bi bi-trash me-2"></i>{{ 'DAILY_REPORT.DELETE' | translate }}</a></li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
\r
                    <div *ngIf="!selectedChildId && activity.child" class="mb-2">\r
                      <small class="text-muted">{{ 'DAILY_REPORT.CHILD' | translate }}: {{ activity.child.firstName }} {{ activity.child.lastName }}</small>\r
                    </div>\r
\r
                    <div *ngIf="activity.duration" class="mb-1">\r
                      <small><i class="bi bi-clock me-1"></i>{{ activity.duration }} {{ 'DAILY_REPORT.MINUTES' | translate }}</small>\r
                    </div>\r
\r
                    <div *ngIf="activity.foodItem" class="mb-1">\r
                      <small><i class="bi bi-egg-fried me-1"></i>{{ activity.foodItem }}</small>\r
                    </div>\r
\r
                    <div *ngIf="activity.mood" class="mb-1">\r
                      <small><i class="bi bi-emoji-smile me-1"></i>{{ activity.mood }}</small>\r
                    </div>\r
\r
                    <div *ngIf="activity.notes" class="mt-2">\r
                      <small class="text-muted">{{ activity.notes }}</small>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Grid View -->\r
  <div *ngIf="!loading && viewMode === 'grid' && activities.length > 0">\r
    <div class="card card-dashbord-all card-general">\r
      <div class="card-header">\r
        <h5 class="mb-0"><i class="bi bi-grid me-2"></i>{{ 'DAILY_REPORT.ALL_ACTIVITIES' | translate }}</h5>\r
      </div>\r
      <div class="card-body">\r
        <div class="row">\r
          <div *ngFor="let activity of activities" class="col-xl-3 col-md-4 col-sm-6 mb-3">\r
            <div class="card h-100 border activity-grid-item clickable-card" [routerLink]="['/activities/detail', activity.id]" style="cursor: pointer;">\r
              <div class="card-body text-center">\r
                <div class="activity-icon-large mb-3" [class]="activity.activityType.toLowerCase()">\r
                  <i class="bi {{ getTemplate(activity.activityType).icon }}"></i>\r
                </div>\r
                <h6 class="mb-1">{{ activity.activityType }}</h6>\r
                <small class="text-muted d-block mb-2">{{ activity.activityTime | date:'shortTime' }}</small>\r
\r
                <div *ngIf="!selectedChildId && activity.child" class="mb-2">\r
                  <small class="badge bg-light text-dark">{{ activity.child.firstName }}</small>\r
                </div>\r
\r
                <div class="d-flex justify-content-center gap-1" *ngIf="canEdit()" (click)="$event.stopPropagation()">\r
                  <button class="btn btn-sm btn-outline-primary" (click)="editActivity(activity)">\r
                    <i class="bi bi-pencil"></i>\r
                  </button>\r
                  <button class="btn btn-sm btn-outline-danger" (click)="deleteActivity(activity.id!)">\r
                    <i class="bi bi-trash"></i>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && activities.length === 0" class="text-center py-4">\r
    <div class="card card-dashbord-all card-general">\r
      <div class="card-body py-5">\r
        <i class="bi bi-clipboard-data icon-4x text-muted mb-3 opacity-25"></i>\r
        <h5 class="text-muted">{{ 'DAILY_REPORT.NO_ACTIVITIES_FOR_DATE' | translate }} {{ selectedDate | date:'mediumDate' }}</h5>\r
        <p class="text-muted">{{ 'DAILY_REPORT.START_TRACKING' | translate }}</p>\r
        <div class="d-flex justify-content-center">\r
          <button *ngIf="canEdit()" class="btn custom-btn-2 btn-add-global-2 s" (click)="showBulkAdd = true">\r
            <i class="bi bi-plus-circle me-2"></i>{{ 'DAILY_REPORT.ADD_FIRST_ACTIVITY' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Activity Modal -->\r
  <div class="modal" [class.show]="showBulkAdd" [style.display]="showBulkAdd ? 'block' : 'none'" tabindex="-1">\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">\r
            <i class="bi bi-plus-circle me-2"></i>\r
            {{ 'DAILY_REPORT.ADD_DAILY_ACTIVITY' | translate }}\r
          </h5>\r
          <button type="button" class="btn-close" (click)="showBulkAdd = false"></button>\r
        </div>\r
        <div class="modal-body">\r
          <!-- Activity Templates -->\r
          <div class="mb-4">\r
            <label class="form-label fw-bold">{{ 'DAILY_REPORT.SELECT_ACTIVITY_TYPE' | translate }}</label>\r
            <div class="row g-2">\r
              <div *ngFor="let template of activityTemplates" class="col-md-3 col-sm-4 col-6">\r
                <div class="activity-template-card" \r
                     [class.selected]="newActivity.activityType === template.type"\r
                     (click)="selectTemplate(template)">\r
                  <div class="template-icon" [class]="template.type.toLowerCase()">\r
                    <i class="bi {{template.icon}}"></i>\r
                  </div>\r
                  <span class="template-label">{{ template.label }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Activity Form -->\r
          <div *ngIf="newActivity.activityType">\r
            <!-- Apply to all children checkbox -->\r
            <div class="mb-3 p-3 bg-light rounded">\r
              <div class="form-check">\r
                <input type="checkbox" class="form-check-input" id="applyToAllChildren" [(ngModel)]="applyToAllChildren">\r
                <label class="form-check-label" for="applyToAllChildren">\r
                  <i class="bi bi-people-fill me-2"></i>{{ 'DAILY_REPORT.APPLY_TO_ALL_CHILDREN' | translate }}\r
                </label>\r
              </div>\r
              <small class="form-text text-muted">{{ 'DAILY_REPORT.APPLY_TO_ALL_CHILDREN_HINT' | translate }}</small>\r
            </div>\r
\r
            <div class="row g-3">\r
              <div class="col-md-6">\r
                <label class="form-label">{{ 'DAILY_REPORT.TIME' | translate }}</label>\r
                <input type="datetime-local" class="form-control" [(ngModel)]="newActivity.activityTime">\r
              </div>\r
              <div class="col-md-6" *ngIf="getTemplate(newActivity.activityType).defaultDuration">\r
                <label class="form-label">{{ 'DAILY_REPORT.DURATION_MINUTES' | translate }}</label>\r
                <input type="number" class="form-control" [(ngModel)]="newActivity.duration" placeholder="30">\r
              </div>\r
            </div>\r
\r
            <div class="row g-3 mt-2" *ngIf="getTemplate(newActivity.activityType).requiresFood">\r
              <div class="col-12">\r
                <label class="form-label">{{ 'DAILY_REPORT.FOOD_DRINK' | translate }}</label>\r
                <input type="text" class="form-control" [(ngModel)]="newActivity.foodItem"\r
                       [placeholder]="'DAILY_REPORT.FOOD_PLACEHOLDER' | translate">\r
              </div>\r
            </div>\r
\r
            <div class="row g-3 mt-2">\r
              <div class="col-12">\r
                <label class="form-label">{{ 'DAILY_REPORT.MOOD' | translate }}</label>\r
                <div class="mood-buttons">\r
                  <button *ngFor="let mood of moods"\r
                          type="button"\r
                          class="btn btn-outline-secondary btn-sm me-2 mb-2"\r
                          [class.active]="newActivity.mood === mood"\r
                          (click)="newActivity.mood = mood">\r
                    {{ 'DAILY_REPORT.MOODS.' + mood.toUpperCase() | translate }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="row g-3 mt-2">\r
              <div class="col-12">\r
                <label class="form-label">{{ 'DAILY_REPORT.NOTES' | translate }}</label>\r
                <textarea class="form-control" rows="3" [(ngModel)]="newActivity.notes"\r
                          [placeholder]="'DAILY_REPORT.ADDITIONAL_NOTES' | translate"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="showBulkAdd = false">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
          <button type="button" class="btn custom-btn-2 btn-add-global-2" (click)="saveActivity()" [disabled]="!newActivity.activityType">\r
            <i class="bi bi-check-circle me-2"></i>{{ 'DAILY_REPORT.SAVE_ACTIVITY' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="modal-backdrop fade" [class.show]="showBulkAdd" *ngIf="showBulkAdd"></div>\r
</div>  `, styles: ["/* src/app/features/daily-activities/daily-activities.scss */\nion-content.parent-activities {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-activities .inner-scroll {\n  display: block !important;\n}\n.activity-card-item {\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-card-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.activity-card-item .activity-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.activity-card-item .activity-icon.meal,\n.activity-card-item .activity-icon.snack {\n  background: #b5f8e5;\n  color: #202c4b;\n}\n.activity-card-item .activity-icon.nap {\n  background: #ffc9bc;\n  color: #202c4b;\n}\n.activity-card-item .activity-icon.eat {\n  background-color: #8cd1bd;\n}\n.activity-card-item .activity-icon.music {\n  background-color: #84a0d8;\n}\n.activity-card-item .activity-icon.art {\n  background-color: #84c76a;\n}\n.activity-card-item .activity-icon.check-in {\n  background-color: var(--primary-color);\n}\n.activity-card-item .activity-icon.check-out {\n  background-color: var(--secondary-color);\n}\n.activity-card-item .activity-icon.bathroom {\n  background-color: #dceba5;\n}\n.activity-card-item .activity-icon.play,\n.activity-card-item .activity-icon.learning {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-card-item .activity-icon.outdoor {\n  background: #10b981;\n  color: white;\n}\n.activity-card-item .activity-icon.art {\n  background-color: #84c76a;\n}\n.activity-card-item .activity-icon.diaper,\n.activity-card-item .activity-icon.bathroom {\n  background: #e5e7eb;\n  color: #374151;\n}\n.activity-grid-item {\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-grid-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.activity-grid-item .activity-icon-large {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin: 0 auto;\n}\n.activity-grid-item .activity-icon-large.meal,\n.activity-grid-item .activity-icon-large.snack {\n  background: #cdeaf0;\n  color: #202c4b;\n}\n.activity-grid-item .activity-icon-large.nap {\n  background: #202c4b;\n  color: #feccfd;\n}\n.activity-grid-item .activity-icon-large.play,\n.activity-grid-item .activity-icon-large.learning {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-grid-item .activity-icon-large.outdoor {\n  background: #10b981;\n  color: white;\n}\n.activity-grid-item .activity-icon-large.diaper,\n.activity-grid-item .activity-icon-large.bathroom {\n  background: #e5e7eb;\n  color: #374151;\n}\n.title-filter {\n  font-size: 17px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 0;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n}\n.btn-icon.primary-hover:hover {\n  background: #f3f4f6;\n}\n.chart-container canvas {\n  display: block;\n  box-sizing: border-box;\n}\n.activity-template-card {\n  padding: 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: white;\n}\n.activity-template-card:hover {\n  border-color: #feccfd;\n  background: #f9fafb;\n}\n.activity-template-card.selected {\n  border-color: #202c4b;\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-template-card .template-icon {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto 0.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n}\n.activity-template-card .template-icon.meal,\n.activity-template-card .template-icon.snack {\n  background: #cdeaf0;\n  color: #202c4b;\n}\n.activity-template-card .template-icon.nap {\n  background: #202c4b;\n  color: #feccfd;\n}\n.activity-template-card .template-icon.play,\n.activity-template-card .template-icon.learning {\n  background: #feccfd;\n  color: #202c4b;\n}\n.activity-template-card .template-icon.outdoor {\n  background: #10b981;\n  color: white;\n}\n.activity-template-card .template-icon.diaper,\n.activity-template-card .template-icon.bathroom {\n  background: #e5e7eb;\n  color: #374151;\n}\n.activity-template-card .template-label {\n  font-weight: 500;\n  font-size: 0.875rem;\n  display: block;\n}\n.mood-buttons .btn.active {\n  background-color: #202c4b;\n  border-color: #202c4b;\n  color: white;\n}\n.modal.show {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n@media (max-width: 768px) {\n  .activity-template-card {\n    padding: 0.75rem 0.5rem;\n  }\n  .activity-template-card .template-icon {\n    width: 32px;\n    height: 32px;\n    font-size: 1rem;\n  }\n  .activity-template-card .template-label {\n    font-size: 0.75rem;\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.modal-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n.activities-container h2 {\n  font-size: 20px;\n  font-weight: 500;\n  color: #202C4B;\n  margin-bottom: 15px;\n}\n.activity-row {\n  display: flex;\n  gap: 18px;\n  margin-bottom: 18px;\n}\n.activity-row .activity-card:nth-child(2) {\n  transform: translateY(30px);\n}\n.activity-card {\n  flex: 1;\n  border-radius: 18px;\n  padding: 18px 16px;\n  box-shadow: 0 1px 7px rgba(50, 50, 93, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  min-width: 0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.activity-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);\n}\n.activity-card.meal {\n  background-color: #b5f8e5;\n}\n.activity-card.diaper {\n  background-color: #eef7cd;\n}\n.activity-card.snack {\n  background-color: #E5F0FB;\n}\n.activity-card.bathroom {\n  background-color: #dceba5;\n}\n.activity-card.check-in {\n  background-color: #e1e3fb;\n}\n.activity-card.nap {\n  background-color: #ffc9bc;\n}\n.activity-card.learning {\n  background-color: #d9d9d9;\n}\n.activity-card.play {\n  background-color: #feebc3;\n}\n.activity-card.outdoor {\n  background-color: #D9D8FB;\n}\n.activity-card.eat {\n  background-color: #8cd1bd;\n}\n.activity-card.music {\n  background-color: #84a0d8;\n}\n.activity-card.art {\n  background-color: #84c76a;\n}\n.activity-time {\n  font-size: 0.98rem;\n  color: #6182A5;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.activity-title {\n  font-size: 1.07rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: #272A3C;\n}\n.activity-icons {\n  font-size: 1.4rem;\n}\n::ng-deep .slider-controls {\n  place-self: center;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.7607843137);\n  margin: 10px 0;\n  border-radius: 20px;\n  max-width: max-content;\n}\n::ng-deep .slider-controls .btn {\n  padding: 4px 8px;\n  font-size: 12px;\n  border: none;\n}\n::ng-deep .header-info_card {\n  margin-top: -70px !important;\n}\n.single-activity {\n  flex: 0 0 auto;\n}\n.clickable-card {\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.clickable-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12) !important;\n}\n.clickable-card:active {\n  transform: translateY(-1px);\n}\n.btn-add-global-2:focus {\n  box-shadow: rgba(129, 210, 198, 0.5) 0px 0px 0px 0.2rem;\n}\n.btn-add-global-2.add {\n  background: #7dd3c0 !important;\n  border: none;\n  color: white;\n  justify-content: center;\n}\n.btn-add-global-2.add:hover {\n  background: #7dd3c0;\n  color: white;\n}\n.btn-add-global-2.add:focus {\n  box-shadow: rgba(129, 210, 198, 0.5) 0px 0px 0px 0.2rem;\n}\n.btn-add-global-2.export {\n  background: #7db9ff !important;\n  justify-content: center;\n}\n.card-dashbord_top {\n  display: flex;\n  align-items: center;\n}\n.card-dashbord_top i {\n  max-height: fit-content;\n  padding: 10px;\n  border-radius: 5px;\n  background: #7dd3c0;\n  line-height: 1;\n  margin-right: 8px;\n  color: white;\n}\n.stats-card {\n  transition: transform 0.2s;\n}\n.stats-card:hover {\n  transform: translateY(-2px);\n}\n.stats-card .stats-icon {\n  width: 35px;\n  height: 35px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  background: var(--secondary-color);\n  color: #fff;\n}\n.stats-card .stats-content h3 {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #2c3e50;\n}\n.stats-card .stats-content p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 0.9rem;\n}\n.card {\n  border: none;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  margin-bottom: 0;\n}\n.card .card-header {\n  background: #fff;\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card .badge {\n  background: #cdeaf0 !important;\n  border: 1px solid #cdeaf0 !important;\n  padding: 0.5rem 0.85rem !important;\n  color: #202C4B !important;\n}\n::ng-deep .header-with-carrousel .image-name {\n  margin-bottom: 45px;\n}\n/*# sourceMappingURL=daily-activities.css.map */\n"] }]
  }], () => [{ type: DailyActivityService }, { type: ChildrenService }, { type: AuthService }, { type: ChangeDetectorRef }, { type: Location }, { type: TranslateService }, { type: PageTitleService }], { activityChartRef: [{
    type: ViewChild,
    args: ["activityChart"]
  }], timelineChartRef: [{
    type: ViewChild,
    args: ["timelineChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyActivities, { className: "DailyActivities", filePath: "src/app/features/daily-activities/daily-activities.ts", lineNumber: 33 });
})();
export {
  DailyActivities
};
//# sourceMappingURL=chunk-H37NQRJ6.js.map
