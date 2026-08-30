import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  NotificationService
} from "./chunk-PPPAYIKG.js";
import {
  IonContent,
  IonRefresher,
  IonRefresherContent
} from "./chunk-6T32DAUD.js";
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
import "./chunk-7KUBODN6.js";
import "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/notifications/notifications.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ({ label: a0, url: "/dashboard" });
var _c2 = (a0) => ({ label: a0 });
var _c3 = (a0, a1) => [a0, a1];
function NotificationsComponent_ion_content_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function NotificationsComponent_ion_content_0_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "NOTIFICATIONS_PAGE.MARK_ALL_READ"), " ");
  }
}
function NotificationsComponent_ion_content_0_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "app-skeleton", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275element(5, "app-skeleton", 21)(6, "app-skeleton", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-skeleton", 22)(8, "app-skeleton", 23)(9, "app-skeleton", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 48)("width", "48px")("circle", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 18)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "20%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "90%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 16)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 20)("width", "80px");
  }
}
function NotificationsComponent_ion_content_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, NotificationsComponent_ion_content_0_div_9_div_1_Template, 10, 13, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function NotificationsComponent_ion_content_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "NOTIFICATIONS_PAGE.NO_NOTIFICATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "NOTIFICATIONS_PAGE.ALL_CAUGHT_UP"));
  }
}
function NotificationsComponent_ion_content_0_div_11_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function NotificationsComponent_ion_content_0_div_11_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getNotificationTypeLabel(notification_r5.type), " ");
  }
}
function NotificationsComponent_ion_content_0_div_11_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_ion_content_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function NotificationsComponent_ion_content_0_div_11_div_1_Template_div_click_0_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notification_r5));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NotificationsComponent_ion_content_0_div_11_div_1_div_4_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "div", 34)(7, "h4", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, NotificationsComponent_ion_content_0_div_11_div_1_div_13_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, NotificationsComponent_ion_content_0_div_11_div_1_div_14_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !notification_r5.isRead);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getAvatarText(ctx_r1.getTranslatedTitle(notification_r5)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notification_r5.isRead);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTranslatedTitle(notification_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(notification_r5.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTranslatedMessage(notification_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r5.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r5.isRead);
  }
}
function NotificationsComponent_ion_content_0_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function NotificationsComponent_ion_content_0_div_11_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "NOTIFICATIONS_PAGE.LOAD_MORE"), " ");
  }
}
function NotificationsComponent_ion_content_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, NotificationsComponent_ion_content_0_div_11_div_1_Template, 15, 9, "div", 27)(2, NotificationsComponent_ion_content_0_div_11_div_2_Template, 4, 3, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMoreNotifications);
  }
}
function NotificationsComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "ion-refresher", 3);
    \u0275\u0275listener("ionRefresh", function NotificationsComponent_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
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
    \u0275\u0275template(8, NotificationsComponent_ion_content_0_div_8_Template, 5, 3, "div", 8)(9, NotificationsComponent_ion_content_0_div_9_Template, 2, 2, "div", 9)(10, NotificationsComponent_ion_content_0_div_10_Template, 8, 6, "div", 10)(11, NotificationsComponent_ion_content_0_div_11_Template, 3, 2, "div", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 5, "NOTIFICATIONS_PAGE.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredNotifications.length > 0 && ctx_r1.hasUnreadNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredNotifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredNotifications.length > 0);
  }
}
function NotificationsComponent_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAllAsRead());
    });
    \u0275\u0275element(1, "i", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "NOTIFICATIONS_PAGE.MARK_ALL_READ"), " ");
  }
}
function NotificationsComponent_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "NOTIFICATIONS_PAGE.LOADING"));
  }
}
function NotificationsComponent_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "NOTIFICATIONS_PAGE.NO_NOTIFICATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "NOTIFICATIONS_PAGE.ALL_CAUGHT_UP"));
  }
}
function NotificationsComponent_div_1_div_17_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function NotificationsComponent_div_1_div_17_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getNotificationTypeLabel(notification_r10.type), " ");
  }
}
function NotificationsComponent_div_1_div_17_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_1_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_div_17_div_1_Template_div_click_0_listener() {
      const notification_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notification_r10));
    });
    \u0275\u0275elementStart(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NotificationsComponent_div_1_div_17_div_1_div_4_Template, 1, 0, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "div", 34)(7, "h4", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, NotificationsComponent_div_1_div_17_div_1_div_13_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, NotificationsComponent_div_1_div_17_div_1_div_14_Template, 2, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", !notification_r10.isRead);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getAvatarText(ctx_r1.getTranslatedTitle(notification_r10)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notification_r10.isRead);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTranslatedTitle(notification_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(notification_r10.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTranslatedMessage(notification_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r10.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notification_r10.isRead);
  }
}
function NotificationsComponent_div_1_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "button", 45);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_div_17_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "NOTIFICATIONS_PAGE.LOAD_MORE"), " ");
  }
}
function NotificationsComponent_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, NotificationsComponent_div_1_div_17_div_1_Template, 15, 9, "div", 27)(2, NotificationsComponent_div_1_div_17_div_2_Template, 4, 3, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayedNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasMoreNotifications);
  }
}
function NotificationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-title-page", 46);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "div", 47)(6, "div", 48);
    \u0275\u0275template(7, NotificationsComponent_div_1_button_7_Template, 4, 3, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50)(9, "button", 51);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("all"));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 51);
    \u0275\u0275listener("click", function NotificationsComponent_div_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveTab("unread"));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, NotificationsComponent_div_1_div_15_Template, 5, 3, "div", 52)(16, NotificationsComponent_div_1_div_16_Template, 8, 6, "div", 10)(17, NotificationsComponent_div_1_div_17_Template, 3, 2, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.isParent ? "" : "container-fluid mt-4");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 14, "NOTIFICATIONS_PAGE.TITLE"))("breadcrumbs", \u0275\u0275pureFunction2(28, _c3, \u0275\u0275pureFunction1(24, _c1, \u0275\u0275pipeBind1(3, 16, "BREADCRUMBS.DASHBOARD")), \u0275\u0275pureFunction1(26, _c2, \u0275\u0275pipeBind1(4, 18, "NOTIFICATIONS_PAGE.TITLE"))));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.filteredNotifications.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "NOTIFICATIONS_PAGE.TAB_ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 22, "NOTIFICATIONS_PAGE.TAB_UNREAD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredNotifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredNotifications.length > 0);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  notificationService;
  authService;
  router;
  translate;
  notifications = [];
  filteredNotifications = [];
  displayedNotifications = [];
  activeTab = "all";
  isLoading = false;
  loading = false;
  currentPage = 1;
  pageSize = 10;
  get isParent() {
    return this.authService.isParent();
  }
  constructor(notificationService, authService, router, translate) {
    this.notificationService = notificationService;
    this.authService = authService;
    this.router = router;
    this.translate = translate;
  }
  ngOnInit() {
    if (!this.authService.isParent()) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.loadNotifications();
    this.notificationService.notificationReceived$.subscribe((notification) => {
      if (notification) {
        this.loadNotifications();
      }
    });
  }
  loadNotifications() {
    this.isLoading = true;
    this.notificationService.getAllNotifications().subscribe({
      next: (notifications) => {
        this.notifications = notifications;
        this.filterNotifications();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  filterNotifications() {
    if (this.activeTab === "all") {
      this.filteredNotifications = this.notifications;
    } else {
      this.filteredNotifications = this.notifications.filter((n) => !n.isRead);
    }
    this.currentPage = 1;
    this.updateDisplayedNotifications();
  }
  updateDisplayedNotifications() {
    const endIndex = this.currentPage * this.pageSize;
    this.displayedNotifications = this.filteredNotifications.slice(0, endIndex);
  }
  loadMore() {
    this.currentPage++;
    this.updateDisplayedNotifications();
  }
  get hasMoreNotifications() {
    return this.displayedNotifications.length < this.filteredNotifications.length;
  }
  get hasUnreadNotifications() {
    return this.filteredNotifications.some((n) => !n.isRead);
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    this.filterNotifications();
  }
  onNotificationClick(notification) {
    this.notificationService.handleNotificationClick(notification);
    notification.isRead = true;
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe(() => {
      this.notifications.forEach((n) => n.isRead = true);
      this.filterNotifications();
    });
  }
  NOTIFICATION_TYPE_KEYS = {
    "general": "NOTIFICATIONS_PAGE.TYPES.GENERAL",
    "event": "NOTIFICATIONS_PAGE.TYPES.EVENT",
    "message": "NOTIFICATIONS_PAGE.TYPES.MESSAGE",
    "payment": "NOTIFICATIONS_PAGE.TYPES.PAYMENT",
    "feepayment": "NOTIFICATIONS_PAGE.TYPES.PAYMENT",
    "fee": "NOTIFICATIONS_PAGE.TYPES.FEE",
    "system": "NOTIFICATIONS_PAGE.TYPES.SYSTEM",
    "dailyactivity": "NOTIFICATIONS_PAGE.TYPES.DAILY_ACTIVITY",
    "attendance": "NOTIFICATIONS_PAGE.TYPES.ATTENDANCE",
    "activities": "NOTIFICATIONS_PAGE.TYPES.ACTIVITY",
    "reclamation": "NOTIFICATIONS_PAGE.TYPES.RECLAMATION"
  };
  getNotificationTypeLabel(type) {
    if (!type)
      return "";
    const key = this.NOTIFICATION_TYPE_KEYS[type.toLowerCase()];
    if (key) {
      const translated = this.translate.instant(key);
      return translated === key ? type : translated;
    }
    return type;
  }
  getNotificationIcon(type) {
    const icons = {
      "info": "bi bi-info-circle-fill",
      "success": "bi bi-check-circle-fill",
      "warning": "bi bi-exclamation-triangle-fill",
      "error": "bi bi-x-circle-fill",
      "message": "bi bi-chat-dots-fill",
      "system": "bi bi-gear-fill"
    };
    return icons[type.toLowerCase()] || "bi bi-bell-fill";
  }
  getNotificationIconClass(type) {
    const classes = {
      "info": "icon-info",
      "success": "icon-success",
      "warning": "icon-warning",
      "error": "icon-error",
      "message": "icon-message",
      "system": "icon-system"
    };
    return classes[type.toLowerCase()] || "icon-default";
  }
  getTimeAgo(dateString) {
    let dateStr = dateString;
    if (!dateString.endsWith("Z") && !dateString.includes("+") && dateString.includes("T")) {
      dateStr = dateString + "Z";
    }
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const seconds = Math.floor(diffMs / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const timeStr = date.toLocaleTimeString(this.translate.currentLang || "en", { hour: "numeric", minute: "2-digit", hour12: true });
    const todayLabel = this.translate.instant("NOTIFICATIONS_PAGE.TIME.TODAY");
    const yesterdayLabel = this.translate.instant("NOTIFICATIONS_PAGE.TIME.YESTERDAY");
    const justNowLabel = this.translate.instant("NOTIFICATIONS_PAGE.TIME.JUST_NOW");
    if (seconds < 0)
      return justNowLabel;
    if (seconds < 60)
      return `${todayLabel}, ${timeStr}`;
    if (minutes < 60)
      return `${todayLabel}, ${timeStr}`;
    if (hours < 24)
      return `${todayLabel}, ${timeStr}`;
    if (days === 1)
      return `${yesterdayLabel}, ${timeStr}`;
    return date.toLocaleDateString(this.translate.currentLang || "en");
  }
  /**
   * Get the translated title for a notification.
   * Uses titleKey if available, otherwise falls back to title.
   */
  getTranslatedTitle(notification) {
    if (notification.titleKey) {
      const params = this.parseMessageParams(notification.messageParams);
      const translated = this.translate.instant(notification.titleKey, params);
      return translated === notification.titleKey ? notification.title : translated;
    }
    return notification.title;
  }
  /**
   * Get the translated message for a notification.
   * Uses messageKey if available, otherwise falls back to message.
   */
  getTranslatedMessage(notification) {
    if (notification.messageKey) {
      const params = this.parseMessageParams(notification.messageParams);
      const translated = this.translate.instant(notification.messageKey, params);
      return translated === notification.messageKey ? notification.message : translated;
    }
    return notification.message;
  }
  /**
   * Parse messageParams from JSON string or return as-is if already an object
   */
  parseMessageParams(messageParams) {
    if (!messageParams)
      return {};
    if (typeof messageParams === "string") {
      try {
        return JSON.parse(messageParams);
      } catch {
        return {};
      }
    }
    return messageParams;
  }
  getAvatarText(name) {
    if (!name)
      return "SY";
    const words = name.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  // Pull-to-refresh handler for Ionic refresher
  onRefresh(event) {
    this.loadNotifications();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 2, vars: 2, consts: [["class", "parent-notifications", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "parent-notifications"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "font-inter"], [3, "title"], [1, "body", "container-fluid"], [1, "main-information"], ["class", "mb-3 d-flex justify-content-end", 4, "ngIf"], ["class", "notifications-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "mb-3", "d-flex", "justify-content-end"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-check-all", "me-2"], [1, "notifications-list"], ["class", "notification-card mb-3", "style", "padding: 16px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);", 4, "ngFor", "ngForOf"], [1, "notification-card", "mb-3", 2, "padding", "16px", "background", "white", "border-radius", "12px", "box-shadow", "0 1px 3px rgba(0,0,0,0.08)"], [1, "d-flex", "gap-3"], [3, "height", "width", "circle"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "mb-2"], [3, "height", "width"], [1, "mb-1", 3, "height", "width"], [1, "mb-2", 3, "height", "width"], ["borderRadius", "12px", 3, "height", "width"], [1, "empty-state"], [1, "bi", "bi-bell-slash"], ["class", "notification-card", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "load-more-container", 4, "ngIf"], [1, "notification-card", 3, "click"], [1, "notification-avatar"], [1, "avatar-text"], ["class", "unread-dot", 4, "ngIf"], [1, "notification-content"], [1, "notification-header"], [1, "sender-name"], [1, "notification-time"], [1, "notification-message"], ["class", "notification-tag", 4, "ngIf"], ["class", "read-check", 4, "ngIf"], [1, "unread-dot"], [1, "notification-tag"], [1, "read-check"], [1, "bi", "bi-check-circle-fill"], [1, "load-more-container"], [1, "btn", "btn-outline-primary", "load-more-btn", 3, "click"], [3, "title", "breadcrumbs"], [1, "container-fluid"], [1, "notifications-header", "mb-4"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "tabs", "mb-4"], [1, "btn", "tab", 3, "click"], ["class", "loading-state", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-check-all"], [1, "loading-state"], [1, "spinner"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NotificationsComponent_ion_content_0_Template, 12, 7, "ion-content", 0)(1, NotificationsComponent_div_1_Template, 18, 31, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, ParentChildHeaderSimpleComponent, TitlePage, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent, TranslatePipe], styles: ["\n\nion-content.parent-notifications[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-notifications[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .main-information[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.notifications-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: #fff;\n  border-color: #007bff;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e9ecef;\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #dee2e6;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 8px 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.load-more-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  margin: 16px;\n}\n.load-more-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.load-more-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n.notification-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  gap: 16px;\n  position: relative;\n  transition: all 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  margin: 8px 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #fff 100%);\n  border-left: 4px solid #007bff;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9a9e 0%,\n      #fecfef 50%,\n      #fecfef 100%);\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]   .avatar-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]   .unread-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n  background: #dc3545;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]:nth-child(3n+1) {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]:nth-child(3n+2) {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]:nth-child(3n+3) {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.notification-card[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.notification-card[_ngcontent-%COMP%]   .sender-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n  line-height: 1.3;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #495057;\n  line-height: 1.4;\n  margin: 0 0 12px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notification-card[_ngcontent-%COMP%]   .notification-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.notification-card[_ngcontent-%COMP%]   .read-check[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  color: #28a745;\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .parent-detailchild[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    margin: 8px;\n    padding: 16px;\n  }\n  .notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .notification-card[_ngcontent-%COMP%]   .notification-avatar[_ngcontent-%COMP%]   .avatar-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .notification-card[_ngcontent-%COMP%]   .sender-name[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .notification-card[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .notification-card[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n  .header-info {\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule, TranslateModule, ParentChildHeaderSimpleComponent, TitlePage, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-notifications">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild font-inter">\r
    <app-parent-child-header-simple\r
      [title]="'NOTIFICATIONS_PAGE.TITLE' | translate"\r
    >\r
    </app-parent-child-header-simple>\r
\r
    <div class="body container-fluid">\r
      <div class="main-information">\r
        <!-- Mark all as read button -->\r
        <div *ngIf="!isLoading && filteredNotifications.length > 0 && hasUnreadNotifications" class="mb-3 d-flex justify-content-end">\r
          <button class="btn btn-outline-primary btn-sm" (click)="markAllAsRead()">\r
            <i class="bi bi-check-all me-2"></i>{{ 'NOTIFICATIONS_PAGE.MARK_ALL_READ' | translate }}\r
          </button>\r
        </div>\r
\r
        <!-- Skeleton Loading for Parent View -->\r
        <div *ngIf="isLoading" class="notifications-list">\r
          <div *ngFor="let i of [1,2,3,4,5,6]" class="notification-card mb-3" style="padding: 16px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">\r
            <div class="d-flex gap-3">\r
              <app-skeleton [height]="48" [width]="'48px'" [circle]="true"></app-skeleton>\r
              <div class="flex-grow-1">\r
                <div class="d-flex justify-content-between mb-2">\r
                  <app-skeleton [height]="18" [width]="'60%'"></app-skeleton>\r
                  <app-skeleton [height]="14" [width]="'20%'"></app-skeleton>\r
                </div>\r
                <app-skeleton [height]="16" [width]="'90%'" class="mb-1"></app-skeleton>\r
                <app-skeleton [height]="16" [width]="'70%'" class="mb-2"></app-skeleton>\r
                <app-skeleton [height]="20" [width]="'80px'" borderRadius="12px"></app-skeleton>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="!isLoading && filteredNotifications.length === 0" class="empty-state">\r
          <i class="bi bi-bell-slash"></i>\r
          <h3>{{ 'NOTIFICATIONS_PAGE.NO_NOTIFICATIONS' | translate }}</h3>\r
          <p>{{ 'NOTIFICATIONS_PAGE.ALL_CAUGHT_UP' | translate }}</p>\r
        </div>\r
\r
        <div *ngIf="!isLoading && filteredNotifications.length > 0" class="notifications-list">\r
          <div *ngFor="let notification of displayedNotifications"\r
               class="notification-card"\r
               [class.unread]="!notification.isRead"\r
               (click)="onNotificationClick(notification)">\r
            <div class="notification-avatar">\r
              <span class="avatar-text">{{ getAvatarText(getTranslatedTitle(notification)) }}</span>\r
              <div *ngIf="!notification.isRead" class="unread-dot"></div>\r
            </div>\r
            <div class="notification-content">\r
              <div class="notification-header">\r
                <h4 class="sender-name">{{ getTranslatedTitle(notification) }}</h4>\r
                <span class="notification-time">{{ getTimeAgo(notification.createdAt) }}</span>\r
              </div>\r
              <p class="notification-message">{{ getTranslatedMessage(notification) }}</p>\r
              <div *ngIf="notification.type" class="notification-tag">\r
                {{ getNotificationTypeLabel(notification.type) }}\r
              </div>\r
            </div>\r
            <div *ngIf="notification.isRead" class="read-check">\r
              <i class="bi bi-check-circle-fill"></i>\r
            </div>\r
          </div>\r
          <div *ngIf="hasMoreNotifications" class="load-more-container">\r
            <button class="btn btn-outline-primary load-more-btn" (click)="loadMore()">\r
              {{ 'NOTIFICATIONS_PAGE.LOAD_MORE' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <!-- </app-pull-to-refresh> -->\r
  </div>\r
</ion-content>\r
\r
<div *ngIf="!isParent" [class]="isParent ? '' : 'container-fluid mt-4'">\r
  <app-title-page\r
    [title]="'NOTIFICATIONS_PAGE.TITLE' | translate"\r
    [breadcrumbs]="[{label: 'BREADCRUMBS.DASHBOARD' | translate, url: '/dashboard'}, {label: 'NOTIFICATIONS_PAGE.TITLE' | translate}]">\r
  </app-title-page>\r
\r
  <div class="container-fluid">\r
    <div class="notifications-header mb-4">\r
      <button *ngIf="filteredNotifications.length > 0" class="btn btn-outline-primary" (click)="markAllAsRead()">\r
        <i class="bi bi-check-all"></i> {{ 'NOTIFICATIONS_PAGE.MARK_ALL_READ' | translate }}\r
      </button>\r
    </div>\r
\r
    <div class="tabs mb-4">\r
      <button class="btn tab" [class.active]="activeTab === 'all'" (click)="setActiveTab('all')">\r
        {{ 'NOTIFICATIONS_PAGE.TAB_ALL' | translate }}\r
      </button>\r
      <button class="btn tab" [class.active]="activeTab === 'unread'" (click)="setActiveTab('unread')">\r
        {{ 'NOTIFICATIONS_PAGE.TAB_UNREAD' | translate }}\r
      </button>\r
    </div>\r
\r
    <div *ngIf="isLoading" class="loading-state">\r
      <div class="spinner"></div>\r
      <p>{{ 'NOTIFICATIONS_PAGE.LOADING' | translate }}</p>\r
    </div>\r
\r
    <div *ngIf="!isLoading && filteredNotifications.length === 0" class="empty-state">\r
      <i class="bi bi-bell-slash"></i>\r
      <h3>{{ 'NOTIFICATIONS_PAGE.NO_NOTIFICATIONS' | translate }}</h3>\r
      <p>{{ 'NOTIFICATIONS_PAGE.ALL_CAUGHT_UP' | translate }}</p>\r
    </div>\r
\r
    <div *ngIf="!isLoading && filteredNotifications.length > 0" class="notifications-list">\r
      <div *ngFor="let notification of displayedNotifications"\r
           class="notification-card"\r
           [class.unread]="!notification.isRead"\r
           (click)="onNotificationClick(notification)">\r
        <div class="notification-avatar">\r
          <span class="avatar-text">{{ getAvatarText(getTranslatedTitle(notification)) }}</span>\r
          <div *ngIf="!notification.isRead" class="unread-dot"></div>\r
        </div>\r
        <div class="notification-content">\r
          <div class="notification-header">\r
            <h4 class="sender-name">{{ getTranslatedTitle(notification) }}</h4>\r
            <span class="notification-time">{{ getTimeAgo(notification.createdAt) }}</span>\r
          </div>\r
          <p class="notification-message">{{ getTranslatedMessage(notification) }}</p>\r
          <div *ngIf="notification.type" class="notification-tag">\r
            {{ getNotificationTypeLabel(notification.type) }}\r
          </div>\r
        </div>\r
        <div *ngIf="notification.isRead" class="read-check">\r
          <i class="bi bi-check-circle-fill"></i>\r
        </div>\r
      </div>\r
      <div *ngIf="hasMoreNotifications" class="load-more-container">\r
        <button class="btn btn-outline-primary load-more-btn" (click)="loadMore()">\r
          {{ 'NOTIFICATIONS_PAGE.LOAD_MORE' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/notifications/notifications.component.scss */\nion-content.parent-notifications {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-notifications .inner-scroll {\n  display: block !important;\n}\n.parent-detailchild .body {\n  padding: 20px;\n}\n.parent-detailchild .main-information {\n  padding: 0;\n  overflow: hidden;\n}\n.notifications-header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tabs {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.tabs .tab {\n  padding: 8px 16px;\n  border: 1px solid #dee2e6;\n  background: #fff;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tabs .tab:hover {\n  background: #f8f9fa;\n}\n.tabs .tab.active {\n  background: #007bff;\n  color: #fff;\n  border-color: #007bff;\n}\n.loading-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: #6c757d;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e9ecef;\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 16px;\n}\n.loading-state p {\n  font-size: 15px;\n  margin: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 80px 20px;\n  color: #6c757d;\n}\n.empty-state i {\n  font-size: 64px;\n  color: #dee2e6;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 8px 0;\n}\n.empty-state p {\n  font-size: 15px;\n  margin: 0;\n}\n.notifications-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.load-more-container {\n  text-align: center;\n  padding: 20px;\n  margin: 16px;\n}\n.load-more-btn {\n  padding: 12px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.load-more-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n.notification-card {\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  gap: 16px;\n  position: relative;\n  transition: all 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  margin: 8px 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n}\n.notification-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n}\n.notification-card.unread {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9ff 0%,\n      #fff 100%);\n  border-left: 4px solid #007bff;\n}\n.notification-card .notification-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9a9e 0%,\n      #fecfef 50%,\n      #fecfef 100%);\n}\n.notification-card .notification-avatar .avatar-text {\n  font-size: 18px;\n  font-weight: 700;\n}\n.notification-card .notification-avatar .unread-dot {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n  background: #dc3545;\n  border: 2px solid #fff;\n  border-radius: 50%;\n}\n.notification-card .notification-avatar:nth-child(3n+1) {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.notification-card .notification-avatar:nth-child(3n+2) {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb 0%,\n      #f5576c 100%);\n}\n.notification-card .notification-avatar:nth-child(3n+3) {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe 0%,\n      #00f2fe 100%);\n}\n.notification-card .notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.notification-card .notification-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.notification-card .sender-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n  line-height: 1.3;\n}\n.notification-card .notification-time {\n  font-size: 13px;\n  color: #6c757d;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.notification-card .notification-message {\n  font-size: 15px;\n  color: #495057;\n  line-height: 1.4;\n  margin: 0 0 12px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notification-card .notification-tag {\n  display: inline-block;\n  padding: 4px 12px;\n  background: #e3f2fd;\n  color: #1976d2;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.notification-card .read-check {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  color: #28a745;\n  font-size: 20px;\n}\n@media (max-width: 768px) {\n  .parent-detailchild .body {\n    padding: 16px;\n  }\n  .notification-card {\n    margin: 8px;\n    padding: 16px;\n  }\n  .notification-card .notification-avatar {\n    width: 48px;\n    height: 48px;\n  }\n  .notification-card .notification-avatar .avatar-text {\n    font-size: 16px;\n  }\n  .notification-card .sender-name {\n    font-size: 15px;\n  }\n  .notification-card .notification-message {\n    font-size: 14px;\n  }\n  .notification-card .notification-time {\n    font-size: 12px;\n  }\n}\n::ng-deep .header-info {\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=notifications.component.css.map */\n"] }]
  }], () => [{ type: NotificationService }, { type: AuthService }, { type: Router }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/notifications/notifications.component.ts", lineNumber: 20 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-FR3NMIQU.js.map
