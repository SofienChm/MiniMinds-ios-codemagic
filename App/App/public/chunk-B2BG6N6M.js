import {
  NotificationPreferencesService
} from "./chunk-4EWG6MA4.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/notification-settings/notification-settings.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function NotificationSettingsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "app-skeleton", 13);
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275element(4, "app-skeleton", 15)(5, "app-skeleton", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-skeleton", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 40)("width", "40px");
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 18)("width", "60%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "80%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 24)("width", "44px");
  }
}
function NotificationSettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, NotificationSettingsComponent_div_11_div_1_Template, 7, 8, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function NotificationSettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "h3", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "SETTINGS.NO_PREFERENCES"));
  }
}
function NotificationSettingsComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 24);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "h4", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "label", 30)(10, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function NotificationSettingsComponent_div_13_div_1_Template_input_ngModelChange_10_listener($event) {
      const pref_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(pref_r3.isEnabled, $event) || (pref_r3.isEnabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "span", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pref_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "icon-" + pref_r3.notificationType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.getIconClass(pref_r3.notificationType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getNotificationTypeLabel(pref_r3.notificationType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getNotificationTypeDescription(pref_r3.notificationType));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", pref_r3.isEnabled);
    \u0275\u0275property("disabled", pref_r3.isCore);
  }
}
function NotificationSettingsComponent_div_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SETTINGS.SAVE_NOTIFICATION_PREFERENCES"), " ");
  }
}
function NotificationSettingsComponent_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SETTINGS.SAVING"), " ");
  }
}
function NotificationSettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, NotificationSettingsComponent_div_13_div_1_Template, 12, 6, "div", 10);
    \u0275\u0275elementStart(2, "div", 21)(3, "button", 22);
    \u0275\u0275listener("click", function NotificationSettingsComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.savePreferences());
    });
    \u0275\u0275template(4, NotificationSettingsComponent_div_13_span_4_Template, 4, 3, "span", 23)(5, NotificationSettingsComponent_div_13_span_5_Template, 4, 3, "span", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.notificationPreferences);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSaving);
  }
}
var NotificationSettingsComponent = class _NotificationSettingsComponent {
  notificationPreferencesService;
  toast;
  translate;
  router;
  notificationPreferences = [];
  isLoading = false;
  isSaving = false;
  constructor(notificationPreferencesService, toast, translate, router) {
    this.notificationPreferencesService = notificationPreferencesService;
    this.toast = toast;
    this.translate = translate;
    this.router = router;
  }
  ngOnInit() {
    this.loadPreferences();
  }
  loadPreferences() {
    this.isLoading = true;
    this.notificationPreferencesService.getPreferences().subscribe({
      next: (response) => {
        this.notificationPreferences = response.preferences;
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading preferences:", error);
        this.isLoading = false;
        this.toast.error(this.translate.instant("SETTINGS.ERROR_LOADING_PREFERENCES"));
      }
    });
  }
  savePreferences() {
    this.isSaving = true;
    const updates = this.notificationPreferences.map((p) => ({
      notificationType: p.notificationType,
      isEnabled: p.isEnabled
    }));
    this.notificationPreferencesService.updatePreferences({ preferences: updates }).subscribe({
      next: () => {
        this.isSaving = false;
        this.toast.success(this.translate.instant("SETTINGS.NOTIFICATION_PREFERENCES_SAVED"));
      },
      error: (error) => {
        console.error("Error saving preferences:", error);
        this.isSaving = false;
        this.toast.error(this.translate.instant("SETTINGS.ERROR_SAVING_PREFERENCES"));
      }
    });
  }
  getNotificationTypeLabel(type) {
    const key = `SETTINGS.NOTIF_TYPE_${type.toUpperCase()}`;
    const translation = this.translate.instant(key);
    return translation !== key ? translation : type;
  }
  getNotificationTypeDescription(type) {
    const key = `SETTINGS.NOTIF_TYPE_${type.toUpperCase()}_DESC`;
    const translation = this.translate.instant(key);
    return translation !== key ? translation : "";
  }
  getIconClass(type) {
    const icons = {
      "Event": "bi bi-calendar-event",
      "Message": "bi bi-chat-dots",
      "DailyActivity": "bi bi-bar-chart",
      "Fee": "bi bi-credit-card",
      "Attendance": "bi bi-person-check",
      "Reclamation": "bi bi-exclamation-circle",
      "System": "bi bi-gear",
      "Appointment": "bi bi-calendar-check"
    };
    return icons[type] || "bi bi-bell";
  }
  onRefresh(event) {
    this.loadPreferences();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  goBack() {
    this.router.navigate(["/profile-menu"]);
  }
  static \u0275fac = function NotificationSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationSettingsComponent)(\u0275\u0275directiveInject(NotificationPreferencesService), \u0275\u0275directiveInject(SimpleToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationSettingsComponent, selectors: [["app-notification-settings"]], decls: 14, vars: 9, consts: [[1, "notification-settings-page"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "font-inter"], [3, "title"], [1, "body", "container-fluid"], [1, "main-information"], [1, "description", "text-muted", "mb-4"], ["class", "preferences-list", 4, "ngIf"], ["class", "empty-state text-center py-5", 4, "ngIf"], [1, "preferences-list"], ["class", "preference-card mb-3", 4, "ngFor", "ngForOf"], [1, "preference-card", "mb-3"], [1, "d-flex", "align-items-center", "gap-3"], ["borderRadius", "8px", 3, "height", "width"], [1, "flex-grow-1"], [1, "mb-2", 3, "height", "width"], [3, "height", "width"], ["borderRadius", "12px", 3, "height", "width"], [1, "empty-state", "text-center", "py-5"], [1, "bi", "bi-bell-slash", 2, "font-size", "48px", "color", "#ccc"], [1, "mt-3"], [1, "save-button-container", "mt-4"], [1, "btn", "btn-primary", "btn-save", "w-100", 3, "click", "disabled"], [4, "ngIf"], [1, "preference-icon", 3, "ngClass"], [3, "ngClass"], [1, "preference-content"], [1, "preference-title"], [1, "preference-description"], [1, "preference-toggle"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "slider", "round"], [1, "bi", "bi-check-lg", "me-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function NotificationSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-refresher", 1);
      \u0275\u0275listener("ionRefresh", function NotificationSettingsComponent_Template_ion_refresher_ionRefresh_1_listener($event) {
        return ctx.onRefresh($event);
      });
      \u0275\u0275element(2, "ion-refresher-content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "app-parent-child-header-simple", 3);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, NotificationSettingsComponent_div_11_Template, 2, 2, "div", 7)(12, NotificationSettingsComponent_div_12_Template, 5, 3, "div", 8)(13, NotificationSettingsComponent_div_13_Template, 6, 4, "div", 7);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 5, "SETTINGS.NOTIFICATION_PREFERENCES"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "SETTINGS.NOTIFICATION_PREFERENCES_DESC"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notificationPreferences.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notificationPreferences.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgModel,
    TranslateModule,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    ParentChildHeaderSimpleComponent,
    SkeletonComponent,
    TranslatePipe
  ], styles: ['\n\nion-content.notification-settings-page[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.notification-settings-page[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.parent-detailchild[_ngcontent-%COMP%]   .main-information[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.preferences-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.preference-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  padding: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s;\n}\n.preference-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.preference-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.preference-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n.preference-icon.icon-event[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8cc8 0%,\n      #f06595 100%);\n}\n.preference-icon.icon-message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b197fc 0%,\n      #9775fa 100%);\n}\n.preference-icon.icon-dailyactivity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd43b 0%,\n      #fab005 100%);\n}\n.preference-icon.icon-fee[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #74c0fc 0%,\n      #339af0 100%);\n}\n.preference-icon.icon-attendance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8ce99a 0%,\n      #51cf66 100%);\n}\n.preference-icon.icon-reclamation[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffa94d 0%,\n      #fd7e14 100%);\n}\n.preference-icon.icon-system[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #868e96 0%,\n      #495057 100%);\n}\n.preference-icon.icon-appointment[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #69db7c 0%,\n      #37b24d 100%);\n}\n.preference-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.preference-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px 0;\n}\n.preference-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.preference-toggle[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #90bbfa,\n      #95f1d8);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(22px);\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + .slider[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e9ecef;\n  transition: 0.3s;\n}\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 22px;\n  width: 22px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 28px;\n}\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n.save-button-container[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 12px;\n  background: var(--primary-color);\n  border: none;\n  transition: all 0.3s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #dee2e6;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .parent-detailchild[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .preference-card[_ngcontent-%COMP%] {\n    padding: 14px;\n    gap: 12px;\n  }\n  .preference-icon[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n  .preference-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .preference-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .preference-description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .switch[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 26px;\n  }\n  .switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n    transform: translateX(20px);\n  }\n  .slider[_ngcontent-%COMP%]:before {\n    height: 20px;\n    width: 20px;\n  }\n}\n  .header-info {\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=notification-settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-notification-settings", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslateModule,
      IonContent,
      IonRefresher,
      IonRefresherContent,
      ParentChildHeaderSimpleComponent,
      SkeletonComponent
    ], template: `<ion-content class="notification-settings-page">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild font-inter">\r
    <app-parent-child-header-simple\r
      [title]="'SETTINGS.NOTIFICATION_PREFERENCES' | translate"\r
    >\r
    </app-parent-child-header-simple>\r
\r
    <div class="body container-fluid">\r
      <div class="main-information">\r
        <!-- Description -->\r
        <p class="description text-muted mb-4">\r
          {{ 'SETTINGS.NOTIFICATION_PREFERENCES_DESC' | translate }}\r
        </p>\r
\r
        <!-- Skeleton Loading -->\r
        <div *ngIf="isLoading" class="preferences-list">\r
          <div *ngFor="let i of [1,2,3,4,5,6]" class="preference-card mb-3">\r
            <div class="d-flex align-items-center gap-3">\r
              <app-skeleton [height]="40" [width]="'40px'" borderRadius="8px"></app-skeleton>\r
              <div class="flex-grow-1">\r
                <app-skeleton [height]="18" [width]="'60%'" class="mb-2"></app-skeleton>\r
                <app-skeleton [height]="14" [width]="'80%'"></app-skeleton>\r
              </div>\r
              <app-skeleton [height]="24" [width]="'44px'" borderRadius="12px"></app-skeleton>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div *ngIf="!isLoading && notificationPreferences.length === 0" class="empty-state text-center py-5">\r
          <i class="bi bi-bell-slash" style="font-size: 48px; color: #ccc;"></i>\r
          <h3 class="mt-3">{{ 'SETTINGS.NO_PREFERENCES' | translate }}</h3>\r
        </div>\r
\r
        <!-- Preferences List -->\r
        <div *ngIf="!isLoading && notificationPreferences.length > 0" class="preferences-list">\r
          <div *ngFor="let pref of notificationPreferences" class="preference-card mb-3">\r
            <div class="preference-icon" [ngClass]="'icon-' + pref.notificationType.toLowerCase()">\r
              <i [ngClass]="getIconClass(pref.notificationType)"></i>\r
            </div>\r
            <div class="preference-content">\r
              <h4 class="preference-title">{{ getNotificationTypeLabel(pref.notificationType) }}</h4>\r
              <p class="preference-description">{{ getNotificationTypeDescription(pref.notificationType) }}</p>\r
            </div>\r
            <div class="preference-toggle">\r
              <label class="switch">\r
                <input type="checkbox"\r
                       [(ngModel)]="pref.isEnabled"\r
                       [disabled]="pref.isCore">\r
                <span class="slider round"></span>\r
              </label>\r
            </div>\r
          </div>\r
\r
          <!-- Save Button -->\r
          <div class="save-button-container mt-4">\r
            <button class="btn btn-primary btn-save w-100"\r
                    (click)="savePreferences()"\r
                    [disabled]="isSaving">\r
              <span *ngIf="!isSaving">\r
                <i class="bi bi-check-lg me-2"></i>\r
                {{ 'SETTINGS.SAVE_NOTIFICATION_PREFERENCES' | translate }}\r
              </span>\r
              <span *ngIf="isSaving">\r
                <span class="spinner-border spinner-border-sm me-2" role="status"></span>\r
                {{ 'SETTINGS.SAVING' | translate }}\r
              </span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</ion-content>\r
`, styles: ['/* src/app/features/notification-settings/notification-settings.component.scss */\nion-content.notification-settings-page {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.notification-settings-page .inner-scroll {\n  display: block !important;\n}\n.parent-detailchild .body {\n  padding: 20px;\n}\n.parent-detailchild .main-information {\n  padding: 0;\n  overflow: hidden;\n}\n.description {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.preferences-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.preference-card {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #fff;\n  padding: 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.2s;\n}\n.preference-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.preference-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.preference-icon i {\n  font-size: 20px;\n  color: #fff;\n}\n.preference-icon.icon-event {\n  background:\n    linear-gradient(\n      135deg,\n      #ff8cc8 0%,\n      #f06595 100%);\n}\n.preference-icon.icon-message {\n  background:\n    linear-gradient(\n      135deg,\n      #b197fc 0%,\n      #9775fa 100%);\n}\n.preference-icon.icon-dailyactivity {\n  background:\n    linear-gradient(\n      135deg,\n      #ffd43b 0%,\n      #fab005 100%);\n}\n.preference-icon.icon-fee {\n  background:\n    linear-gradient(\n      135deg,\n      #74c0fc 0%,\n      #339af0 100%);\n}\n.preference-icon.icon-attendance {\n  background:\n    linear-gradient(\n      135deg,\n      #8ce99a 0%,\n      #51cf66 100%);\n}\n.preference-icon.icon-reclamation {\n  background:\n    linear-gradient(\n      135deg,\n      #ffa94d 0%,\n      #fd7e14 100%);\n}\n.preference-icon.icon-system {\n  background:\n    linear-gradient(\n      135deg,\n      #868e96 0%,\n      #495057 100%);\n}\n.preference-icon.icon-appointment {\n  background:\n    linear-gradient(\n      135deg,\n      #69db7c 0%,\n      #37b24d 100%);\n}\n.preference-content {\n  flex: 1;\n  min-width: 0;\n}\n.preference-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0 0 4px 0;\n}\n.preference-description {\n  font-size: 13px;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.preference-toggle {\n  flex-shrink: 0;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch input:checked + .slider {\n  background:\n    linear-gradient(\n      135deg,\n      #90bbfa,\n      #95f1d8);\n}\n.switch input:checked + .slider:before {\n  transform: translateX(22px);\n}\n.switch input:disabled + .slider {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #e9ecef;\n  transition: 0.3s;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 22px;\n  width: 22px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.slider.round {\n  border-radius: 28px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.save-button-container {\n  padding: 16px 0;\n}\n.btn-save {\n  padding: 14px 24px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 12px;\n  background: var(--primary-color);\n  border: none;\n  transition: all 0.3s;\n}\n.btn-save:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);\n}\n.btn-save:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state i {\n  font-size: 64px;\n  color: #dee2e6;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #212529;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .parent-detailchild .body {\n    padding: 16px;\n  }\n  .preference-card {\n    padding: 14px;\n    gap: 12px;\n  }\n  .preference-icon {\n    width: 44px;\n    height: 44px;\n  }\n  .preference-icon i {\n    font-size: 18px;\n  }\n  .preference-title {\n    font-size: 15px;\n  }\n  .preference-description {\n    font-size: 12px;\n  }\n  .switch {\n    width: 46px;\n    height: 26px;\n  }\n  .switch input:checked + .slider:before {\n    transform: translateX(20px);\n  }\n  .slider:before {\n    height: 20px;\n    width: 20px;\n  }\n}\n::ng-deep .header-info {\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=notification-settings.component.css.map */\n'] }]
  }], () => [{ type: NotificationPreferencesService }, { type: SimpleToastService }, { type: TranslateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationSettingsComponent, { className: "NotificationSettingsComponent", filePath: "src/app/features/notification-settings/notification-settings.component.ts", lineNumber: 28 });
})();
export {
  NotificationSettingsComponent
};
//# sourceMappingURL=chunk-B2BG6N6M.js.map
