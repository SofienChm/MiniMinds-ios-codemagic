import {
  NotificationPreferencesService
} from "./chunk-4EWG6MA4.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  CurrencyService
} from "./chunk-OQBHM43H.js";
import {
  PrefixService
} from "./chunk-IEUTH76P.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  SKIP_ERROR_HANDLER
} from "./chunk-MYZVJCXP.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  LanguageService
} from "./chunk-LJABGPK5.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/settings/settings.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function SettingsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r1.name))("src", item_r1.flag, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.name);
  }
}
function SettingsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r2.name))("src", item_r2.flag, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function SettingsComponent_div_24_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    \u0275\u0275textInterpolate3(" ", item_r5.symbol, " - ", item_r5.name, " (", item_r5.code, ") ");
  }
}
function SettingsComponent_div_24_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r6 = ctx.item;
    \u0275\u0275textInterpolate3(" ", item_r6.symbol, " - ", item_r6.name, " (", item_r6.code, ") ");
  }
}
function SettingsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ng-select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_24_Template_ng_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedCurrency, $event) || (ctx_r3.selectedCurrency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_div_24_Template_ng_select_change_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCurrencyChange());
    });
    \u0275\u0275template(8, SettingsComponent_div_24_ng_template_8_Template, 1, 3, "ng-template", 12)(9, SettingsComponent_div_24_ng_template_9_Template, 1, 3, "ng-template", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "SETTINGS.CURRENCY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "SETTINGS.CURRENCY_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedCurrency);
    \u0275\u0275property("items", ctx_r3.currencies)("clearable", false)("searchable", true);
  }
}
function SettingsComponent_div_25_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r8.name))("src", item_r8.flag, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.name);
  }
}
function SettingsComponent_div_25_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r9.name))("src", item_r9.flag, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.name);
  }
}
function SettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ng-select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_25_Template_ng_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedCountry, $event) || (ctx_r3.selectedCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_div_25_Template_ng_select_change_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onCountryChange());
    });
    \u0275\u0275template(8, SettingsComponent_div_25_ng_template_8_Template, 4, 4, "ng-template", 12)(9, SettingsComponent_div_25_ng_template_9_Template, 4, 4, "ng-template", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "SETTINGS.COUNTRY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "SETTINGS.COUNTRY_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedCountry);
    \u0275\u0275property("items", ctx_r3.countries)("clearable", false)("searchable", true);
  }
}
function SettingsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h5", 19);
    \u0275\u0275element(4, "i", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "p", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 42)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_31_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.defaultAnnualLeaveDays, $event) || (ctx_r3.defaultAnnualLeaveDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 44);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "label", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_31_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.defaultMedicalLeaveDays, $event) || (ctx_r3.defaultMedicalLeaveDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small", 44);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 24)(29, "button", 45);
    \u0275\u0275listener("click", function SettingsComponent_div_31_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveLeaveSettings());
    });
    \u0275\u0275element(30, "i", 17);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "SETTINGS.LEAVE_SETTINGS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "SETTINGS.LEAVE_SETTINGS_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 13, "SETTINGS.DEFAULT_ANNUAL_LEAVE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.defaultAnnualLeaveDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "SETTINGS.DEFAULT_ANNUAL_LEAVE_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "SETTINGS.DEFAULT_MEDICAL_LEAVE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.defaultMedicalLeaveDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 19, "SETTINGS.DEFAULT_MEDICAL_LEAVE_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 21, "SETTINGS.SAVE_LEAVE_SETTINGS"), " ");
  }
}
function SettingsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 46)(2, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_44_Template_input_ngModelChange_2_listener($event) {
      const pref_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(pref_r12.isEnabled, $event) || (pref_r12.isEnabled = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 48)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pref_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "notif-" + pref_r12.notificationType);
    \u0275\u0275twoWayProperty("ngModel", pref_r12.isEnabled);
    \u0275\u0275property("disabled", pref_r12.isCore);
    \u0275\u0275advance();
    \u0275\u0275property("for", "notif-" + pref_r12.notificationType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getNotificationTypeLabel(pref_r12.notificationType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getNotificationTypeDescription(pref_r12.notificationType), " ");
  }
}
function SettingsComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "GLOBAL.LOADING"));
  }
}
function SettingsComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "SETTINGS.SAVE_NOTIFICATION_PREFERENCES"), " ");
  }
}
function SettingsComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SETTINGS.SAVING"), " ");
  }
}
function SettingsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 55)(2, "div", 5)(3, "h5", 19);
    \u0275\u0275element(4, "i", 56);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "p", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 8)(13, "label", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_50_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.childPrefix, $event) || (ctx_r3.childPrefix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_div_50_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPrefixChange("child"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 44);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 8)(21, "label", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_50_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.parentPrefix, $event) || (ctx_r3.parentPrefix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_div_50_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPrefixChange("parent"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "small", 44);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label", 9);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_div_50_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.educatorPrefix, $event) || (ctx_r3.educatorPrefix = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SettingsComponent_div_50_Template_input_change_32_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPrefixChange("educator"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "small", 44);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 24)(37, "button", 45);
    \u0275\u0275listener("click", function SettingsComponent_div_50_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveSettings());
    });
    \u0275\u0275element(38, "i", 17);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "SETTINGS.PREFIXES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "SETTINGS.PREFIXES_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "SETTINGS.CHILD_PREFIX"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.childPrefix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "SETTINGS.CHILD_PREFIX_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "SETTINGS.PARENT_PREFIX"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.parentPrefix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 22, "SETTINGS.PARENT_PREFIX_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 24, "SETTINGS.EDUCATOR_PREFIX"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.educatorPrefix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 26, "SETTINGS.EDUCATOR_PREFIX_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 28, "SETTINGS.SAVE"), " ");
  }
}
function SettingsComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SETTINGS.DELETE_ACCOUNT_BTN"));
  }
}
function SettingsComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SETTINGS.DELETING"), " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  translate = inject(TranslateService);
  langChangeSub;
  prefixService = inject(PrefixService);
  authService = inject(AuthService);
  http = inject(HttpClient);
  languageService = inject(LanguageService);
  currencyService = inject(CurrencyService);
  simpleToastService = inject(SimpleToastService);
  notificationPreferencesService = inject(NotificationPreferencesService);
  isAdmin = false;
  selectedLanguage = "";
  deletingAccount = false;
  // Notification preferences
  notificationPreferences = [];
  savingPreferences = false;
  languages = [
    { code: "en", name: "English", flag: "/assets/images/us.png", label: "\u{1F1EA}\u{1F1F3} English" },
    { code: "fr", name: "Fran\xE7ais", flag: "/assets/images/fr.png", label: "\u{1F1EB}\u{1F1F7} Fran\xE7ais" },
    { code: "it", name: "Italiano", flag: "/assets/images/it.png", label: "\u{1F1EE}\u{1F1F9} Italiano" },
    { code: "ar", name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "/assets/images/tn.png", label: "\u{1F1F8}\u{1F1E6} \u0627\u0644\u0639\u0631\u0628\u064A\u0629" }
  ];
  currencies = this.currencyService.getCurrencies();
  countries = [
    { code: "US", name: "United States", flag: "/assets/images/us.png", label: "\u{1F1FA}\u{1F1F8} United States" },
    { code: "FR", name: "France", flag: "/assets/images/fr.png", label: "\u{1F1EB}\u{1F1F7} France" },
    { code: "IT", name: "Italy", flag: "/assets/images/it.png", label: "\u{1F1EE}\u{1F1F9} Italy" },
    { code: "CA", name: "Canada", flag: "/assets/images/ca.png", label: "\u{1F1E8}\u{1F1E6} Canada" },
    { code: "TN", name: "Tunisia", flag: "/assets/images/tn.png", label: "\u{1F1F9}\u{1F1F3} Tunisia" }
  ];
  selectedCurrency = this.currencyService.getSelectedCurrencyCode();
  selectedCountry = localStorage.getItem("selectedCountry") || "US";
  childPrefix = this.prefixService.getChildPrefix();
  parentPrefix = this.prefixService.getParentPrefix();
  educatorPrefix = this.prefixService.getEducatorPrefix();
  defaultAnnualLeaveDays = 30;
  defaultMedicalLeaveDays = 10;
  breadcrumbs = [];
  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.selectedLanguage = this.translate.currentLang;
    this.setupBreadcrumbs();
    if (this.isAdmin) {
      this.loadLeaveSettings();
      this.loadRegionalSettings();
    }
    this.loadNotificationPreferences();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.setupBreadcrumbs();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("BREADCRUMBS.SETTINGS") }
    ];
  }
  loadLeaveSettings() {
    const silentHeaders = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    this.http.get(`${ApiConfig.ENDPOINTS.SETTINGS}/DefaultAnnualLeaveDays`, { headers: silentHeaders }).subscribe({
      next: (setting) => this.defaultAnnualLeaveDays = parseInt(setting.value),
      error: () => this.defaultAnnualLeaveDays = 30
    });
    this.http.get(`${ApiConfig.ENDPOINTS.SETTINGS}/DefaultMedicalLeaveDays`, { headers: silentHeaders }).subscribe({
      next: (setting) => this.defaultMedicalLeaveDays = parseInt(setting.value),
      error: () => this.defaultMedicalLeaveDays = 10
    });
  }
  saveLeaveSettings() {
    this.http.put(`${ApiConfig.ENDPOINTS.SETTINGS}/DefaultAnnualLeaveDays`, { value: this.defaultAnnualLeaveDays.toString() }).subscribe();
    this.http.put(`${ApiConfig.ENDPOINTS.SETTINGS}/DefaultMedicalLeaveDays`, { value: this.defaultMedicalLeaveDays.toString() }).subscribe({
      next: () => {
        this.simpleToastService.success(this.translate.instant("SETTINGS.LEAVE_SAVED"));
      },
      error: () => {
        this.simpleToastService.error(this.translate.instant("SETTINGS.LEAVE_SAVE_FAILED"));
      }
    });
  }
  get currentLang() {
    return this.translate.currentLang;
  }
  switchLanguage(lang) {
    this.languageService.use(lang);
  }
  onCurrencyChange() {
    this.currencyService.setSelectedCurrency(this.selectedCurrency);
  }
  onCountryChange() {
    localStorage.setItem("selectedCountry", this.selectedCountry);
  }
  loadRegionalSettings() {
    const silentHeaders = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    const load = (key, apply) => {
      this.http.get(`${ApiConfig.ENDPOINTS.SETTINGS}/${key}`, { headers: silentHeaders }).subscribe({
        next: (setting) => {
          if (setting?.value) {
            apply(setting.value);
          }
        },
        error: () => {
        }
      });
    };
    load("Country", (value) => {
      this.selectedCountry = value;
      localStorage.setItem("selectedCountry", value);
    });
    load("Currency", (value) => {
      if (this.currencies.some((c) => c.code === value)) {
        this.selectedCurrency = value;
        this.currencyService.setSelectedCurrency(value);
      }
    });
    load("Language", (value) => {
      if (this.languages.some((l) => l.code === value)) {
        this.selectedLanguage = value;
      }
    });
  }
  saveRegionalSettings() {
    if (!this.isAdmin) {
      return;
    }
    this.http.put(`${ApiConfig.ENDPOINTS.SETTINGS}/Country`, { value: this.selectedCountry }).subscribe({
      error: () => {
      }
    });
    this.http.put(`${ApiConfig.ENDPOINTS.SETTINGS}/Currency`, { value: this.selectedCurrency }).subscribe({
      error: () => {
      }
    });
    this.http.put(`${ApiConfig.ENDPOINTS.SETTINGS}/Language`, { value: this.selectedLanguage }).subscribe({
      error: () => {
      }
    });
  }
  onPrefixChange(type) {
    if (type === "child")
      localStorage.setItem("childPrefix", this.childPrefix);
    if (type === "parent")
      localStorage.setItem("parentPrefix", this.parentPrefix);
    if (type === "educator")
      localStorage.setItem("educatorPrefix", this.educatorPrefix);
  }
  saveLanguage() {
    this.languageService.use(this.selectedLanguage);
    this.saveRegionalSettings();
    this.authService.updateLanguage(this.selectedLanguage).subscribe({
      next: () => {
        this.simpleToastService.success(this.translate.instant("SETTINGS.LANGUAGE_SAVED"));
      },
      error: () => {
        this.simpleToastService.warning(this.translate.instant("SETTINGS.LANGUAGE_SAVED_LOCALLY"));
      }
    });
  }
  saveSettings() {
    this.currencyService.setSelectedCurrency(this.selectedCurrency);
    localStorage.setItem("selectedCountry", this.selectedCountry);
    this.prefixService.setChildPrefix(this.childPrefix);
    this.prefixService.setParentPrefix(this.parentPrefix);
    this.prefixService.setEducatorPrefix(this.educatorPrefix);
    this.saveRegionalSettings();
    showSuccessToast(this.translate.instant("SETTINGS.SUCCESS"));
  }
  confirmDeleteAccount() {
    import_sweetalert2.default.fire({
      title: this.translate.instant("SETTINGS.DELETE_ACCOUNT_CONFIRM_TITLE"),
      html: `
        <p class="text-danger fw-bold">${this.translate.instant("SETTINGS.DELETE_ACCOUNT_WARNING")}</p>
        <ul class="text-start small">
          <li>${this.translate.instant("SETTINGS.DELETE_WARNING_1")}</li>
          <li>${this.translate.instant("SETTINGS.DELETE_WARNING_2")}</li>
          <li>${this.translate.instant("SETTINGS.DELETE_WARNING_3")}</li>
          <li>${this.translate.instant("SETTINGS.DELETE_WARNING_4")}</li>
        </ul>
        <p class="mt-3">${this.translate.instant("SETTINGS.DELETE_ACCOUNT_TYPE_CONFIRM")}</p>
      `,
      input: "text",
      inputPlaceholder: "DELETE",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("SETTINGS.DELETE_ACCOUNT_BTN"),
      cancelButtonText: this.translate.instant("GLOBAL.CANCEL"),
      inputValidator: (value) => {
        if (value !== "DELETE") {
          return this.translate.instant("SETTINGS.DELETE_ACCOUNT_TYPE_ERROR");
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAccount();
      }
    });
  }
  deleteAccount() {
    this.deletingAccount = true;
    this.authService.deleteAccount().subscribe({
      next: () => {
        showSuccessToast(this.translate.instant("SETTINGS.ACCOUNT_DELETED"));
      },
      error: (error) => {
        this.deletingAccount = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("SETTINGS.ERROR"),
          text: error.error?.message || this.translate.instant("SETTINGS.DELETE_ACCOUNT_ERROR"),
          confirmButtonColor: "#dc3545"
        });
      }
    });
  }
  // Notification Preferences Methods
  loadNotificationPreferences() {
    const silentHeaders = new HttpHeaders().set(SKIP_ERROR_HANDLER, "true");
    this.notificationPreferencesService.getPreferences().subscribe({
      next: (response) => {
        this.notificationPreferences = response.preferences;
      },
      error: () => {
        console.error("Failed to load notification preferences");
        this.notificationPreferences = [];
      }
    });
  }
  saveNotificationPreferences() {
    this.savingPreferences = true;
    const request = {
      preferences: this.notificationPreferences.map((p) => ({
        notificationType: p.notificationType,
        isEnabled: p.isEnabled
      }))
    };
    this.notificationPreferencesService.updatePreferences(request).subscribe({
      next: () => {
        this.savingPreferences = false;
        this.simpleToastService.success(this.translate.instant("SETTINGS.NOTIFICATION_PREFERENCES_SAVED"));
      },
      error: () => {
        this.savingPreferences = false;
        this.simpleToastService.error(this.translate.instant("SETTINGS.NOTIFICATION_PREFERENCES_ERROR"));
      }
    });
  }
  getNotificationTypeLabel(type) {
    const key = `SETTINGS.NOTIF_TYPE_${type.toUpperCase()}`;
    const translated = this.translate.instant(key);
    return translated === key ? type : translated;
  }
  getNotificationTypeDescription(type) {
    const key = `SETTINGS.NOTIF_TYPE_${type.toUpperCase()}_DESC`;
    const translated = this.translate.instant(key);
    return translated === key ? "" : translated;
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 71, vars: 50, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-gear", 3, "title", "subtitle", "breadcrumbs"], [1, "row"], [1, "col-12", "mb-4"], [1, "card", "card-general", "shadow-sm"], [1, "card-header", "py-3"], [1, "bi", "bi-info-circle-fill"], [1, "card-body"], [1, "col-md-4", "mb-3"], [1, "form-label", "fw-bold"], [1, "text-muted", "small", "mb-2"], ["bindValue", "code", 1, "form-input", 3, "ngModelChange", "change", "ngModel", "items", "clearable", "searchable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["class", "col-md-4 mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", "w-100", 3, "click"], [1, "bi", "bi-floppy", "me-2"], ["class", "col-12 mb-4", 4, "ngIf"], [1, "mb-0"], [1, "bi", "bi-bell", "me-2"], [1, "text-muted", "mb-4"], ["class", "col-md-6 mb-3", 4, "ngFor", "ngForOf"], ["class", "text-center py-3", 4, "ngIf"], [1, "card-footer", "bg-white", "border-0", "py-3", "d-flex", "justify-content-end"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [4, "ngIf"], [1, "col-12"], [1, "card", "card-general", "border-0", "shadow-sm", "border-danger"], [1, "card-header", "py-3", "bg-danger", "bg-opacity-10"], [1, "mb-0", "text-danger"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "justify-content-between"], [1, "mb-3", "mb-md-0"], [1, "fw-bold", "text-danger", "mb-1"], [1, "text-muted", "mb-0", "small"], [1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-2"], [1, "d-flex", "align-items-center", "gap-2"], ["width", "20", "height", "14", 3, "src", "alt"], ["bindLabel", "label", "bindValue", "code", 1, "form-input", 3, "ngModelChange", "change", "ngModel", "items", "clearable", "searchable"], [1, "bi", "bi-sliders", "me-2"], [1, "col-md-6", "mb-3"], ["type", "number", "min", "0", "max", "365", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "form-check", "form-switch", "d-flex", "align-items-start"], ["type", "checkbox", 1, "form-check-input", "me-3", "mt-1", 3, "ngModelChange", "id", "ngModel", "disabled"], [1, "form-check-label", 3, "for"], [1, "d-block", "text-muted"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "visually-hidden"], [1, "ms-2", "text-muted"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "card", "card-general", "border-0", "shadow-sm"], [1, "bi", "bi-tag"], ["type", "text", "maxlength", "20", "placeholder", "Child, Student, Player", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "text", "maxlength", "20", "placeholder", "Parent, Guardian", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "text", "maxlength", "20", "placeholder", "Educator, Teacher, Coach", 1, "form-control", 3, "ngModelChange", "change", "ngModel"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h5");
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 7)(13, "div", 2)(14, "div", 8)(15, "label", 9);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 10);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ng-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ng_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedLanguage, $event) || (ctx.selectedLanguage = $event);
        return $event;
      });
      \u0275\u0275listener("change", function SettingsComponent_Template_ng_select_change_21_listener() {
        return ctx.switchLanguage(ctx.selectedLanguage);
      });
      \u0275\u0275template(22, SettingsComponent_ng_template_22_Template, 4, 4, "ng-template", 12)(23, SettingsComponent_ng_template_23_Template, 4, 4, "ng-template", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, SettingsComponent_div_24_Template, 10, 10, "div", 14)(25, SettingsComponent_div_25_Template, 10, 10, "div", 14);
      \u0275\u0275elementStart(26, "div", 15)(27, "button", 16);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_27_listener() {
        return ctx.saveLanguage();
      });
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(31, SettingsComponent_div_31_Template, 33, 23, "div", 18);
      \u0275\u0275elementStart(32, "div", 3)(33, "div", 4)(34, "div", 5)(35, "h5", 19);
      \u0275\u0275element(36, "i", 20);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 7)(40, "p", 21);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 2);
      \u0275\u0275template(44, SettingsComponent_div_44_Template, 8, 6, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, SettingsComponent_div_45_Template, 7, 3, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 24)(47, "button", 25);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_47_listener() {
        return ctx.saveNotificationPreferences();
      });
      \u0275\u0275template(48, SettingsComponent_span_48_Template, 4, 3, "span", 26)(49, SettingsComponent_span_49_Template, 4, 3, "span", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(50, SettingsComponent_div_50_Template, 41, 30, "div", 18);
      \u0275\u0275elementStart(51, "div", 27)(52, "div", 28)(53, "div", 29)(54, "h5", 30);
      \u0275\u0275element(55, "i", 31);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 7)(59, "div", 32)(60, "div", 33)(61, "h6", 34);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 35);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "button", 36);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_67_listener() {
        return ctx.confirmDeleteAccount();
      });
      \u0275\u0275element(68, "i", 37);
      \u0275\u0275template(69, SettingsComponent_span_69_Template, 3, 3, "span", 26)(70, SettingsComponent_span_70_Template, 4, 3, "span", 26);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 28, "SETTINGS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 30, "SETTINGS.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 32, "SETTINGS.BASIC_INFO"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 34, "SETTINGS.LANGUAGE"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 36, "SETTINGS.LANGUAGE_DESC"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedLanguage);
      \u0275\u0275property("items", ctx.languages)("clearable", false)("searchable", false);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isAdmin);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 38, "SETTINGS.SAVE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isAdmin);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 40, "SETTINGS.NOTIFICATION_PREFERENCES"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 42, "SETTINGS.NOTIFICATION_PREFERENCES_DESC"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.notificationPreferences);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notificationPreferences.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.savingPreferences || ctx.notificationPreferences.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.savingPreferences);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.savingPreferences);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAdmin);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 44, "SETTINGS.DANGER_ZONE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 46, "SETTINGS.DELETE_ACCOUNT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 48, "SETTINGS.DELETE_ACCOUNT_DESC"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.deletingAccount);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.deletingAccount);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deletingAccount);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TranslateModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, TitlePage, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, TranslatePipe], styles: ["\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #e7f3ff;\n  border-color: #0d6efd;\n}\nng-select[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n  ng-select.form-input .ng-select-container {\n  padding: 14px 16px 14px 15px !important;\n  border: 2px solid #e8e8e8 !important;\n  border-radius: 10px !important;\n  font-size: 15px !important;\n  transition: all 0.3s ease !important;\n  background: #fafafa !important;\n  min-height: auto !important;\n  height: auto !important;\n}\n  ng-select.form-input .ng-select-container .ng-value-container {\n  padding: 0 !important;\n}\n  ng-select.form-input .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n}\n  ng-select.form-input.ng-select-focused .ng-select-container {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n  ng-select.form-input .ng-arrow-wrapper {\n  padding-right: 0;\n}\n.ng-select.form-input[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, TranslateModule, FormsModule, TitlePage, NgSelectModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page [title]="'SETTINGS.TITLE' | translate" [subtitle]="'SETTINGS.SUBTITLE' | translate" icon="bi bi-gear"\r
    [breadcrumbs]="breadcrumbs">\r
  </app-title-page>\r
\r
  <div class="row">\r
    <div class="col-12 mb-4">\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header py-3">\r
          <h5>\r
            <i class="bi bi-info-circle-fill"></i>\r
            {{ 'SETTINGS.BASIC_INFO' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="row">\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">\r
                {{ 'SETTINGS.LANGUAGE' | translate }}\r
              </label>\r
\r
              <p class="text-muted small mb-2">\r
                {{ 'SETTINGS.LANGUAGE_DESC' | translate }}\r
              </p>\r
\r
              <ng-select class="form-input" [(ngModel)]="selectedLanguage" [items]="languages" bindValue="code"\r
                [clearable]="false" [searchable]="false" (change)="switchLanguage(selectedLanguage)">\r
\r
                <!-- Valeur s\xE9lectionn\xE9e -->\r
                <ng-template ng-label-tmp let-item="item">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <img [src]="item.flag" width="20" height="14" alt="{{ item.name }}" />\r
                    <span>{{ item.name }}</span>\r
                  </div>\r
                </ng-template>\r
\r
                <!-- Options du dropdown -->\r
                <ng-template ng-option-tmp let-item="item">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <img [src]="item.flag" width="20" height="14" alt="{{ item.name }}" />\r
                    <span>{{ item.name }}</span>\r
                  </div>\r
                </ng-template>\r
\r
              </ng-select>\r
            </div>\r
\r
\r
            <div *ngIf="isAdmin" class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.CURRENCY' | translate }}</label>\r
              <p class="text-muted small mb-2">{{ 'SETTINGS.CURRENCY_DESC' | translate }}</p>\r
              <ng-select class="form-input" [(ngModel)]="selectedCurrency" [items]="currencies" bindValue="code"\r
                [clearable]="false" [searchable]="true" (change)="onCurrencyChange()">\r
                <ng-template ng-label-tmp let-item="item">\r
                  {{ item.symbol }} - {{ item.name }} ({{ item.code }})\r
                </ng-template>\r
                <ng-template ng-option-tmp let-item="item">\r
                  {{ item.symbol }} - {{ item.name }} ({{ item.code }})\r
                </ng-template>\r
              </ng-select>\r
            </div>\r
\r
            <div *ngIf="isAdmin" class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.COUNTRY' | translate }}</label>\r
              <p class="text-muted small mb-2">{{ 'SETTINGS.COUNTRY_DESC' | translate }}</p>\r
              <ng-select class="form-input" [(ngModel)]="selectedCountry" [items]="countries" bindLabel="label"\r
                bindValue="code" [clearable]="false" [searchable]="true" (change)="onCountryChange()">\r
                                <!-- Valeur s\xE9lectionn\xE9e -->\r
                <ng-template ng-label-tmp let-item="item">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <img [src]="item.flag" width="20" height="14" alt="{{ item.name }}" />\r
                    <span>{{ item.name }}</span>\r
                  </div>\r
                </ng-template>\r
\r
                <!-- Options du dropdown -->\r
                <ng-template ng-option-tmp let-item="item">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <img [src]="item.flag" width="20" height="14" alt="{{ item.name }}" />\r
                    <span>{{ item.name }}</span>\r
                  </div>\r
                </ng-template>\r
              </ng-select>\r
            </div>\r
            <div class="d-flex justify-content-end">\r
              <button class="action-btn custom-btn-2 btn-add-global-2 w-100" (click)="saveLanguage()">\r
                <i class="bi bi-floppy me-2"></i>{{ 'SETTINGS.SAVE' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="isAdmin" class="col-12 mb-4">\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header py-3">\r
          <h5 class="mb-0"><i class="bi bi-sliders me-2"></i>{{ 'SETTINGS.LEAVE_SETTINGS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted mb-4">{{ 'SETTINGS.LEAVE_SETTINGS_DESC' | translate }}</p>\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.DEFAULT_ANNUAL_LEAVE' | translate }}</label>\r
              <input type="number" class="form-control" [(ngModel)]="defaultAnnualLeaveDays" min="0" max="365">\r
              <small class="text-muted">{{ 'SETTINGS.DEFAULT_ANNUAL_LEAVE_HINT' | translate }}</small>\r
            </div>\r
            <div class="col-md-6 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.DEFAULT_MEDICAL_LEAVE' | translate }}</label>\r
              <input type="number" class="form-control" [(ngModel)]="defaultMedicalLeaveDays" min="0" max="365">\r
              <small class="text-muted">{{ 'SETTINGS.DEFAULT_MEDICAL_LEAVE_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer bg-white border-0 py-3 d-flex justify-content-end">\r
          <button class="action-btn custom-btn-2 btn-add-global-2" (click)="saveLeaveSettings()">\r
            <i class="bi bi-floppy me-2"></i>{{ 'SETTINGS.SAVE_LEAVE_SETTINGS' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Notification Preferences Section -->\r
    <div class="col-12 mb-4">\r
      <div class="card card-general shadow-sm">\r
        <div class="card-header py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-bell me-2"></i>\r
            {{ 'SETTINGS.NOTIFICATION_PREFERENCES' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted mb-4">{{ 'SETTINGS.NOTIFICATION_PREFERENCES_DESC' | translate }}</p>\r
          <div class="row">\r
            <div *ngFor="let pref of notificationPreferences" class="col-md-6 mb-3">\r
              <div class="form-check form-switch d-flex align-items-start">\r
                <input class="form-check-input me-3 mt-1" type="checkbox"\r
                       [id]="'notif-' + pref.notificationType"\r
                       [(ngModel)]="pref.isEnabled"\r
                       [disabled]="pref.isCore">\r
                <label class="form-check-label" [for]="'notif-' + pref.notificationType">\r
                  <strong>{{ getNotificationTypeLabel(pref.notificationType) }}</strong>\r
                  <small class="d-block text-muted">\r
                    {{ getNotificationTypeDescription(pref.notificationType) }}\r
                  </small>\r
                </label>\r
              </div>\r
            </div>\r
          </div>\r
          <div *ngIf="notificationPreferences.length === 0" class="text-center py-3">\r
            <div class="spinner-border spinner-border-sm text-primary" role="status">\r
              <span class="visually-hidden">Loading...</span>\r
            </div>\r
            <span class="ms-2 text-muted">{{ 'GLOBAL.LOADING' | translate }}</span>\r
          </div>\r
        </div>\r
        <div class="card-footer bg-white border-0 py-3 d-flex justify-content-end">\r
          <button class="action-btn custom-btn-2 btn-add-global-2"\r
                  (click)="saveNotificationPreferences()"\r
                  [disabled]="savingPreferences || notificationPreferences.length === 0">\r
            <span *ngIf="!savingPreferences">\r
              <i class="bi bi-floppy me-2"></i>{{ 'SETTINGS.SAVE_NOTIFICATION_PREFERENCES' | translate }}\r
            </span>\r
            <span *ngIf="savingPreferences">\r
              <span class="spinner-border spinner-border-sm me-2" role="status"></span>\r
              {{ 'SETTINGS.SAVING' | translate }}\r
            </span>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="isAdmin" class="col-12 mb-4">\r
      <div class="card card-general border-0 shadow-sm">\r
        <div class="card-header py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-tag"></i>\r
            {{ 'SETTINGS.PREFIXES' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <p class="text-muted mb-4">{{ 'SETTINGS.PREFIXES_DESC' | translate }}</p>\r
          <div class="row">\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.CHILD_PREFIX' | translate }}</label>\r
              <input type="text" class="form-control" [(ngModel)]="childPrefix" (change)="onPrefixChange('child')"\r
                maxlength="20" placeholder="Child, Student, Player">\r
              <small class="text-muted">{{ 'SETTINGS.CHILD_PREFIX_HINT' | translate }}</small>\r
            </div>\r
\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.PARENT_PREFIX' | translate }}</label>\r
              <input type="text" class="form-control" [(ngModel)]="parentPrefix" (change)="onPrefixChange('parent')"\r
                maxlength="20" placeholder="Parent, Guardian">\r
              <small class="text-muted">{{ 'SETTINGS.PARENT_PREFIX_HINT' | translate }}</small>\r
            </div>\r
\r
            <div class="col-md-4 mb-3">\r
              <label class="form-label fw-bold">{{ 'SETTINGS.EDUCATOR_PREFIX' | translate }}</label>\r
              <input type="text" class="form-control" [(ngModel)]="educatorPrefix" (change)="onPrefixChange('educator')"\r
                maxlength="20" placeholder="Educator, Teacher, Coach">\r
              <small class="text-muted">{{ 'SETTINGS.EDUCATOR_PREFIX_HINT' | translate }}</small>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-footer bg-white border-0 py-3 d-flex justify-content-end">\r
          <button class="action-btn custom-btn-2 btn-add-global-2" (click)="saveSettings()">\r
            <i class="bi bi-floppy me-2"></i>{{ 'SETTINGS.SAVE' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Delete Account Section -->\r
    <div class="col-12">\r
      <div class="card card-general border-0 shadow-sm border-danger">\r
        <div class="card-header py-3 bg-danger bg-opacity-10">\r
          <h5 class="mb-0 text-danger">\r
            <i class="bi bi-exclamation-triangle-fill me-2"></i>\r
            {{ 'SETTINGS.DANGER_ZONE' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between">\r
            <div class="mb-3 mb-md-0">\r
              <h6 class="fw-bold text-danger mb-1">{{ 'SETTINGS.DELETE_ACCOUNT' | translate }}</h6>\r
              <p class="text-muted mb-0 small">{{ 'SETTINGS.DELETE_ACCOUNT_DESC' | translate }}</p>\r
            </div>\r
            <button class="btn btn-outline-danger" (click)="confirmDeleteAccount()" [disabled]="deletingAccount">\r
              <i class="bi bi-trash me-2"></i>\r
              <span *ngIf="!deletingAccount">{{ 'SETTINGS.DELETE_ACCOUNT_BTN' | translate }}</span>\r
              <span *ngIf="deletingAccount">\r
                <span class="spinner-border spinner-border-sm me-2" role="status"></span>\r
                {{ 'SETTINGS.DELETING' | translate }}\r
              </span>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/settings/settings.component.scss */\n.list-group-item {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n}\n.list-group-item.active {\n  background-color: #e7f3ff;\n  border-color: #0d6efd;\n}\nng-select img {\n  width: 20px;\n  height: 20px;\n}\n::ng-deep ng-select.form-input .ng-select-container {\n  padding: 14px 16px 14px 15px !important;\n  border: 2px solid #e8e8e8 !important;\n  border-radius: 10px !important;\n  font-size: 15px !important;\n  transition: all 0.3s ease !important;\n  background: #fafafa !important;\n  min-height: auto !important;\n  height: auto !important;\n}\n::ng-deep ng-select.form-input .ng-select-container .ng-value-container {\n  padding: 0 !important;\n}\n::ng-deep ng-select.form-input .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n}\n::ng-deep ng-select.form-input.ng-select-focused .ng-select-container {\n  border-color: #7dd3c0;\n  box-shadow: 0 0 0 0.2rem rgba(125, 211, 192, 0.25);\n}\n::ng-deep ng-select.form-input .ng-arrow-wrapper {\n  padding-right: 0;\n}\n.ng-select.form-input .ng-select-container .ng-value-container {\n  padding-right: 0;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 27 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-P2ZAXWYN.js.map
