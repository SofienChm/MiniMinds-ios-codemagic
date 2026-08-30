import {
  MessagesService
} from "./chunk-5GNI2KYS.js";
import {
  NotificationService
} from "./chunk-PPPAYIKG.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-HXQXS5SJ.js";
import "./chunk-7KUBODN6.js";
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
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/profile-menu/profile-menu.component.ts
function ProfileMenuComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.messageUnreadCount);
  }
}
var ProfileMenuComponent = class _ProfileMenuComponent {
  authService;
  router;
  notificationService;
  messagesService;
  currentUser = null;
  messageUnreadCount = 0;
  destroy$ = new Subject();
  constructor(authService, router, notificationService, messagesService) {
    this.authService = authService;
    this.router = router;
    this.notificationService = notificationService;
    this.messagesService = messagesService;
  }
  ngOnInit() {
    if (!this.authService.isParent()) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.currentUser = this.authService.getCurrentUser();
    this.loadMessageUnreadCount();
    this.notificationService.messageUnreadCount$.pipe(takeUntil(this.destroy$)).subscribe((count) => {
      this.messageUnreadCount = count;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadMessageUnreadCount() {
    this.messagesService.getUnreadCount().subscribe({
      next: (count) => this.messageUnreadCount = count,
      error: () => this.messageUnreadCount = 0
    });
  }
  navigateTo(route) {
    this.router.navigate([route]);
  }
  goBack() {
    window.history.back();
  }
  /**
   * Get the current user's profile picture URL, preferring file-based URL over Base64
   */
  getProfilePictureUrl() {
    if (!this.currentUser)
      return "assets/default-avatar.svg";
    if (this.currentUser.profilePictureUrl && this.currentUser.profilePictureUrl.trim() !== "") {
      return this.getFullUrl(this.currentUser.profilePictureUrl);
    }
    if (this.currentUser.profilePicture && this.currentUser.profilePicture.trim() !== "") {
      return this.getFullUrl(this.currentUser.profilePicture);
    }
    return "assets/default-avatar.svg";
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:"))
      return path;
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  logout() {
    this.authService.logout();
  }
  static \u0275fac = function ProfileMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileMenuComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(MessagesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileMenuComponent, selectors: [["app-profile-menu"]], decls: 96, vars: 46, consts: [[1, "profile-menu"], [1, "header"], [1, "title-icons", "mb-3"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "page-setting"], [1, "d-flex", "image-name", "row_direction"], [1, "overflow-hidden"], [1, "name", "simple"], [1, "content-header"], [1, "profile-card"], ["routerLink", "/profile/edit"], [1, "profile-image", 3, "src", "alt"], [1, "profile-info"], [1, "email"], ["routerLink", "/profile/edit", 1, "edit-iconbtn"], [1, "bi", "bi-arrow-right"], [1, "menu-section"], [1, "menu-grid"], [1, "menu-item", 3, "click"], [1, "icon-circle", "payments"], [1, "bi", "bi-credit-card"], [1, "icon-circle", "message"], [1, "bi", "bi-chat-dots"], ["class", "badge-count", 4, "ngIf"], [1, "icon-circle", "calendar"], [1, "bi", "bi-calendar3"], [1, "icon-circle", "reclamation"], [1, "bi", "bi-exclamation-circle"], [1, "icon-circle", "events"], [1, "bi", "bi-calendar-event"], [1, "icon-circle", "activities"], [1, "bi", "bi-bar-chart"], [1, "icon-circle", "gallery"], [1, "bi", "bi-images"], [1, "icon-circle", "food"], [1, "bi", "bi-fork-knife"], [1, "icon-circle", "appointments"], [1, "bi", "bi-calendar-check"], [1, "icon-circle", "notification-settings"], [1, "bi", "bi-bell-fill"], [1, "logout-item", 3, "click"], [1, "icon-circle", "logout"], [1, "bi", "bi-box-arrow-right"], [1, "badge-count"]], template: function ProfileMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h5", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "a", 11);
      \u0275\u0275element(14, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "a", 11)(17, "h3");
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 14);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "a", 15);
      \u0275\u0275element(23, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "h2");
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_29_listener() {
        return ctx.navigateTo("/fees");
      });
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_35_listener() {
        return ctx.navigateTo("/messages");
      });
      \u0275\u0275elementStart(36, "div", 22);
      \u0275\u0275element(37, "i", 23);
      \u0275\u0275template(38, ProfileMenuComponent_span_38_Template, 2, 1, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_42_listener() {
        return ctx.navigateTo("/calendar");
      });
      \u0275\u0275elementStart(43, "div", 25);
      \u0275\u0275element(44, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_48_listener() {
        return ctx.navigateTo("/reclamations");
      });
      \u0275\u0275elementStart(49, "div", 27);
      \u0275\u0275element(50, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_54_listener() {
        return ctx.navigateTo("/events");
      });
      \u0275\u0275elementStart(55, "div", 29);
      \u0275\u0275element(56, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_60_listener() {
        return ctx.navigateTo("/daily-activities");
      });
      \u0275\u0275elementStart(61, "div", 31);
      \u0275\u0275element(62, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_66_listener() {
        return ctx.navigateTo("/gallery");
      });
      \u0275\u0275elementStart(67, "div", 33);
      \u0275\u0275element(68, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_72_listener() {
        return ctx.navigateTo("/food-menu/parent");
      });
      \u0275\u0275elementStart(73, "div", 35);
      \u0275\u0275element(74, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_78_listener() {
        return ctx.navigateTo("/appointments");
      });
      \u0275\u0275elementStart(79, "div", 37);
      \u0275\u0275element(80, "i", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 19);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_84_listener() {
        return ctx.navigateTo("/notification-settings");
      });
      \u0275\u0275elementStart(85, "div", 39);
      \u0275\u0275element(86, "i", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 41);
      \u0275\u0275listener("click", function ProfileMenuComponent_Template_div_click_90_listener() {
        return ctx.logout();
      });
      \u0275\u0275elementStart(91, "div", 42);
      \u0275\u0275element(92, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 18, "PROFILE_MENU.TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.getProfilePictureUrl(), \u0275\u0275sanitizeUrl)("alt", ctx.currentUser == null ? null : ctx.currentUser.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "PROFILE_MENU.EDIT_PROFILE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "PROFILE_MENU.MENU_OPTIONS"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 24, "PROFILE_MENU.PAYMENTS"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.messageUnreadCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 26, "PROFILE_MENU.MESSAGES"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 28, "PROFILE_MENU.CALENDAR"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 30, "PROFILE_MENU.RECLAMATION"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 32, "PROFILE_MENU.EVENTS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 34, "PROFILE_MENU.ACTIVITIES"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 36, "PROFILE_MENU.GALLERY"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 38, "PROFILE_MENU.FOOD"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 40, "PROFILE_MENU.APPOINTMENTS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 42, "PROFILE_MENU.NOTIFICATION_SETTINGS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 44, "PROFILE_MENU.LOGOUT"));
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 24px 20px 60px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #90b9fc 0%,\n      #95f2d7 100%);\n  padding-bottom: 100px;\n}\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background: rgba(255, 255, 255, 0.21);\n  padding: 5px 8px;\n  border-radius: 12px;\n}\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image-name[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #000;\n  cursor: pointer;\n  margin-right: 20px;\n}\n.profile-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #000;\n  margin: 0;\n  flex: 1;\n  text-align: center;\n  margin-right: 44px;\n}\nh5.name.simple[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #202C4B;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.profile-card[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 15px;\n}\n.profile-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.profile-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.profile-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  margin: 0 0 5px 0;\n}\n.profile-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 12px;\n  margin: 0 0 2px 0;\n}\n.profile-card[_ngcontent-%COMP%]   .profile-info[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 14px;\n  margin: 0;\n}\n.menu-section[_ngcontent-%COMP%] {\n  padding: 0 20px 0px;\n}\n.menu-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  margin: 0px 0 20px 0;\n}\n.menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n  position: relative;\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ff4757;\n  color: white;\n  border-radius: 10px;\n  min-width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: bold;\n  padding: 0 5px;\n  border: 2px solid white;\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.payments[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #74c0fc 0%,\n      #339af0 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b197fc 0%,\n      #9775fa 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.calendar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8ce99a 0%,\n      #51cf66 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.reclamation[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffa94d 0%,\n      #fd7e14 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.events[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8cc8 0%,\n      #f06595 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.activities[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd43b 0%,\n      #fab005 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.food[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1a0b9 0%,\n      #a46b88 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.gallery[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8fd5 0%,\n      #fa059f 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.appointments[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #69db7c 0%,\n      #37b24d 100%);\n}\n.menu-item[_ngcontent-%COMP%]   .icon-circle.notification-settings[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #748ffc 0%,\n      #5c7cfa 100%);\n}\n.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000;\n  font-weight: 500;\n  text-align: center;\n}\n.logout-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 15px;\n  padding: 15px 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.logout-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ee5a52 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n.logout-item[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n.logout-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n}\n.content-header[_ngcontent-%COMP%] {\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  transform: translateY(-50px);\n  background: white;\n}\n.content-header[_ngcontent-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  transform: translateY(-40px);\n  margin-bottom: 0;\n}\n  .main-content.parentrole {\n  margin-bottom: 35px !important;\n  background-color: #fff !important;\n}\n.edit-iconbtn[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=profile-menu.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileMenuComponent, [{
    type: Component,
    args: [{ selector: "app-profile-menu", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `<div class="profile-menu">\r
  <div class="header">\r
    <div class="title-icons mb-3">\r
      <div class="page-back" (click)="goBack()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
      <div class="page-setting">\r
      </div>\r
    </div>\r
    <div class="d-flex image-name row_direction">\r
      <div class="overflow-hidden">\r
        <h5 class="name simple">{{ 'PROFILE_MENU.TITLE' | translate }}</h5>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="content-header">\r
    <div class="profile-card">\r
      <a routerLink="/profile/edit">\r
        <img [src]="getProfilePictureUrl()"\r
          [alt]="currentUser?.firstName"\r
          class="profile-image">\r
      </a>\r
      <div class="profile-info">\r
        <a routerLink="/profile/edit">\r
          <h3>{{ 'PROFILE_MENU.EDIT_PROFILE' | translate }}</h3>\r
          <p class="email">{{ currentUser?.email }}</p>\r
        </a>\r
      </div>\r
      <a routerLink="/profile/edit" class="edit-iconbtn">\r
        <i class="bi bi-arrow-right"></i>\r
      </a>\r
    </div>\r
    <div class="menu-section">\r
      <h2>{{ 'PROFILE_MENU.MENU_OPTIONS' | translate }}</h2>\r
\r
      <div class="menu-grid">\r
        <div class="menu-item" (click)="navigateTo('/fees')">\r
          <div class="icon-circle payments">\r
            <i class="bi bi-credit-card"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.PAYMENTS' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/messages')">\r
          <div class="icon-circle message">\r
            <i class="bi bi-chat-dots"></i>\r
            <span class="badge-count" *ngIf="messageUnreadCount > 0">{{ messageUnreadCount }}</span>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.MESSAGES' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/calendar')">\r
          <div class="icon-circle calendar">\r
            <i class="bi bi-calendar3"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.CALENDAR' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/reclamations')">\r
          <div class="icon-circle reclamation">\r
            <i class="bi bi-exclamation-circle"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.RECLAMATION' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/events')">\r
          <div class="icon-circle events">\r
            <i class="bi bi-calendar-event"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.EVENTS' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/daily-activities')">\r
          <div class="icon-circle activities">\r
            <i class="bi bi-bar-chart"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.ACTIVITIES' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/gallery')">\r
          <div class="icon-circle gallery">\r
            <i class="bi bi-images"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.GALLERY' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/food-menu/parent')">\r
          <div class="icon-circle food">\r
            <i class="bi bi-fork-knife"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.FOOD' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/appointments')">\r
          <div class="icon-circle appointments">\r
            <i class="bi bi-calendar-check"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.APPOINTMENTS' | translate }}</span>\r
        </div>\r
\r
        <div class="menu-item" (click)="navigateTo('/notification-settings')">\r
          <div class="icon-circle notification-settings">\r
            <i class="bi bi-bell-fill"></i>\r
          </div>\r
          <span>{{ 'PROFILE_MENU.NOTIFICATION_SETTINGS' | translate }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="logout-item" (click)="logout()">\r
        <div class="icon-circle logout">\r
          <i class="bi bi-box-arrow-right"></i>\r
        </div>\r
        <span>{{ 'PROFILE_MENU.LOGOUT' | translate }}</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/profile-menu/profile-menu.component.scss */\n.profile-menu .header {\n  align-items: center;\n  padding: 24px 20px 60px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #90b9fc 0%,\n      #95f2d7 100%);\n  padding-bottom: 100px;\n}\n.profile-menu .header .title-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.profile-menu .header .title-icons i {\n  font-size: 18px;\n  background: rgba(255, 255, 255, 0.21);\n  padding: 5px 8px;\n  border-radius: 12px;\n}\n.profile-menu .header .image-name {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.profile-menu .header .back-btn {\n  background: none;\n  border: none;\n  font-size: 24px;\n  color: #000;\n  cursor: pointer;\n  margin-right: 20px;\n}\n.profile-menu .header h1 {\n  font-size: 32px;\n  font-weight: bold;\n  color: #000;\n  margin: 0;\n  flex: 1;\n  text-align: center;\n  margin-right: 44px;\n}\nh5.name.simple {\n  text-transform: capitalize;\n  margin-bottom: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #202C4B;\n}\n.profile-card {\n  background: white;\n  border-radius: 20px;\n  margin: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.profile-card .profile-image {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-right: 15px;\n}\n.profile-card .profile-info {\n  flex: 1;\n}\n.profile-card .profile-info a {\n  text-decoration: none;\n}\n.profile-card .profile-info h3 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  margin: 0 0 5px 0;\n}\n.profile-card .profile-info .email {\n  color: #888;\n  font-size: 12px;\n  margin: 0 0 2px 0;\n}\n.profile-card .profile-info .points {\n  color: #888;\n  font-size: 14px;\n  margin: 0;\n}\n.menu-section {\n  padding: 0 20px 0px;\n}\n.menu-section h2 {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000;\n  margin: 0px 0 20px 0;\n}\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n}\n.menu-item .icon-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n  position: relative;\n}\n.menu-item .icon-circle i {\n  font-size: 24px;\n  color: white;\n}\n.menu-item .icon-circle .badge-count {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ff4757;\n  color: white;\n  border-radius: 10px;\n  min-width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: bold;\n  padding: 0 5px;\n  border: 2px solid white;\n}\n.menu-item .icon-circle.payments {\n  background:\n    linear-gradient(\n      135deg,\n      #74c0fc 0%,\n      #339af0 100%);\n}\n.menu-item .icon-circle.message {\n  background:\n    linear-gradient(\n      135deg,\n      #b197fc 0%,\n      #9775fa 100%);\n}\n.menu-item .icon-circle.calendar {\n  background:\n    linear-gradient(\n      135deg,\n      #8ce99a 0%,\n      #51cf66 100%);\n}\n.menu-item .icon-circle.reclamation {\n  background:\n    linear-gradient(\n      135deg,\n      #ffa94d 0%,\n      #fd7e14 100%);\n}\n.menu-item .icon-circle.events {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8cc8 0%,\n      #f06595 100%);\n}\n.menu-item .icon-circle.activities {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd43b 0%,\n      #fab005 100%);\n}\n.menu-item .icon-circle.food {\n  background:\n    linear-gradient(\n      135deg,\n      #d1a0b9 0%,\n      #a46b88 100%);\n}\n.menu-item .icon-circle.gallery {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8fd5 0%,\n      #fa059f 100%);\n}\n.menu-item .icon-circle.appointments {\n  background:\n    linear-gradient(\n      135deg,\n      #69db7c 0%,\n      #37b24d 100%);\n}\n.menu-item .icon-circle.notification-settings {\n  background:\n    linear-gradient(\n      135deg,\n      #748ffc 0%,\n      #5c7cfa 100%);\n}\n.menu-item span {\n  font-size: 14px;\n  color: #000;\n  font-weight: 500;\n  text-align: center;\n}\n.logout-item {\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 15px;\n  padding: 15px 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.logout-item .icon-circle {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b6b 0%,\n      #ee5a52 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n.logout-item .icon-circle i {\n  font-size: 20px;\n  color: white;\n}\n.logout-item span {\n  font-size: 18px;\n  font-weight: bold;\n  color: #000;\n}\n.content-header {\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  transform: translateY(-50px);\n  background: white;\n}\n.content-header .profile-card {\n  transform: translateY(-40px);\n  margin-bottom: 0;\n}\n::ng-deep .main-content.parentrole {\n  margin-bottom: 35px !important;\n  background-color: #fff !important;\n}\n.edit-iconbtn {\n  font-size: 22px;\n  font-weight: bold;\n  color: black;\n}\n/*# sourceMappingURL=profile-menu.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }, { type: NotificationService }, { type: MessagesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileMenuComponent, { className: "ProfileMenuComponent", filePath: "src/app/features/profile-menu/profile-menu.component.ts", lineNumber: 19 });
})();
export {
  ProfileMenuComponent
};
//# sourceMappingURL=chunk-YJDQRMOU.js.map
