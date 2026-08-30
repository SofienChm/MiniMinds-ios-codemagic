import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
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
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/features/reclamations/reclamations.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/features/reclamations/reclamations.service.ts
var ReclamationsService = class _ReclamationsService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.RECLAMATION;
  constructor(http) {
    this.http = http;
  }
  getSentReclamations() {
    return this.http.get(`${this.apiUrl}/sent`);
  }
  getReceivedReclamations() {
    return this.http.get(`${this.apiUrl}/received`);
  }
  getReclamation(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getAdminUser() {
    return this.http.get(`${this.apiUrl}/admin`);
  }
  sendReclamation(recipientId, subject, content) {
    return this.http.post(`${this.apiUrl}`, { recipientId, subject, content });
  }
  resolveReclamation(id, response) {
    return this.http.put(`${this.apiUrl}/${id}/resolve`, response);
  }
  static \u0275fac = function ReclamationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReclamationsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReclamationsService, factory: _ReclamationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReclamationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/reclamations/reclamations.component.ts
function ReclamationsComponent_ion_content_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "label", 17)(3, "input", 18);
    \u0275\u0275listener("change", function ReclamationsComponent_ion_content_0_div_22_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21)(9, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_ion_content_0_div_22_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ReclamationsComponent_ion_content_0_div_22_Template_select_change_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFilter(ctx_r1.statusFilter));
    });
    \u0275\u0275elementStart(10, "option", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 24);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 25);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "RECLAMATIONS_PAGE.SELECT_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "RECLAMATIONS_PAGE.ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "RECLAMATIONS_PAGE.OPEN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "RECLAMATIONS_PAGE.RESOLVED"));
  }
}
function ReclamationsComponent_ion_content_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsResolved());
    });
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsOpen());
    });
    \u0275\u0275element(7, "i", 30);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 31);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275element(12, "i", 32);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "RECLAMATIONS_PAGE.MARK_AS_RESOLVED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "RECLAMATIONS_PAGE.REOPEN"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 7, "RECLAMATIONS_PAGE.DELETE"));
  }
}
function ReclamationsComponent_ion_content_0_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "RECLAMATIONS_PAGE.NO_RECLAMATIONS"));
  }
}
function ReclamationsComponent_ion_content_0_div_24_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 50);
  }
}
function ReclamationsComponent_ion_content_0_div_24_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 51);
  }
}
function ReclamationsComponent_ion_content_0_div_24_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.NEW_RESPONSE"), " ");
  }
}
function ReclamationsComponent_ion_content_0_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_24_div_2_Template_div_click_0_listener() {
      const reclamation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r6));
    });
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_24_div_2_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 18);
    \u0275\u0275listener("change", function ReclamationsComponent_ion_content_0_div_24_div_2_Template_input_change_2_listener() {
      const reclamation_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(reclamation_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 41)(4, "div", 42)(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ReclamationsComponent_ion_content_0_div_24_div_2_span_9_Template, 1, 0, "span", 45)(10, ReclamationsComponent_ion_content_0_div_24_div_2_span_10_Template, 1, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 48);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ReclamationsComponent_ion_content_0_div_24_div_2_div_15_Template, 4, 3, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reclamation_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unread", ctx_r1.activeTab !== "sent" ? !reclamation_r6.isResolved : reclamation_r6.isResolved && !reclamation_r6.isReadByParent)("selected", ctx_r1.isSelected(reclamation_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(reclamation_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(ctx_r1.activeTab === "sent" ? reclamation_r6.recipientId : reclamation_r6.senderId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(reclamation_r6.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !reclamation_r6.isResolved && ctx_r1.activeTab !== "sent");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent" && reclamation_r6.isResolved && !reclamation_r6.isReadByParent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reclamation_r6.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", reclamation_r6.content.substring(0, 80), "", reclamation_r6.content.length > 80 ? "..." : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent" && reclamation_r6.isResolved && !reclamation_r6.isReadByParent);
  }
}
function ReclamationsComponent_ion_content_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ReclamationsComponent_ion_content_0_div_24_div_1_Template, 5, 3, "div", 34)(2, ReclamationsComponent_ion_content_0_div_24_div_2_Template, 16, 13, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeReclamations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.activeReclamations);
  }
}
function ReclamationsComponent_ion_content_0_div_25_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RECLAMATIONS_PAGE.SEEN"), " \xB7 ", ctx_r1.formatDate(ctx_r1.selectedReclamation.readByParentAt), " ");
  }
}
function ReclamationsComponent_ion_content_0_div_25_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "h3", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 72)(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ReclamationsComponent_ion_content_0_div_25_div_23_div_7_Template, 4, 4, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "RECLAMATIONS_PAGE.RESPONSE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedReclamation.response);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReclamation.isReadByParent && ctx_r1.selectedReclamation.readByParentAt);
  }
}
function ReclamationsComponent_ion_content_0_div_25_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "textarea", 79);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_ion_content_0_div_25_div_24_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.responseText, $event) || (ctx_r1.responseText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 80);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_25_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resolve());
    });
    \u0275\u0275element(5, "i", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 3, "RECLAMATIONS_PAGE.ENTER_RESPONSE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.responseText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.responseText.trim());
  }
}
function ReclamationsComponent_ion_content_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57)(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 60)(12, "div", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 62);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 63)(19, "div", 64);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, ReclamationsComponent_ion_content_0_div_25_div_23_Template, 8, 5, "div", 66)(24, ReclamationsComponent_ion_content_0_div_25_div_24_Template, 6, 5, "div", 67);
    \u0275\u0275elementStart(25, "button", 68);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_25_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(26, "i", 69);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUserName(ctx_r1.activeTab === "sent" ? ctx_r1.selectedReclamation.recipientId : ctx_r1.selectedReclamation.senderId).charAt(0).toUpperCase() || "?", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(ctx_r1.activeTab === "sent" ? ctx_r1.selectedReclamation.recipientId : ctx_r1.selectedReclamation.senderId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? \u0275\u0275pipeBind1(9, 14, "RECLAMATIONS_PAGE.TO") : \u0275\u0275pipeBind1(10, 16, "RECLAMATIONS_PAGE.FROM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedReclamation.sentAt));
    \u0275\u0275advance();
    \u0275\u0275classProp("resolved", ctx_r1.selectedReclamation.isResolved)("open", !ctx_r1.selectedReclamation.isResolved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReclamation.isResolved ? \u0275\u0275pipeBind1(16, 18, "RECLAMATIONS_PAGE.RESOLVED") : \u0275\u0275pipeBind1(17, 20, "RECLAMATIONS_PAGE.OPEN"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedReclamation.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedReclamation.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReclamation.isResolved && ctx_r1.selectedReclamation.response);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedReclamation.isResolved && ctx_r1.selectedReclamation.recipientId === ctx_r1.currentUserId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "RECLAMATIONS_PAGE.BACK"), " ");
  }
}
function ReclamationsComponent_ion_content_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "div", 85);
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 84)(9, "div", 85);
    \u0275\u0275element(10, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 89);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_ion_content_0_div_26_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReclamation.subject, $event) || (ctx_r1.newReclamation.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 90)(14, "textarea", 91);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_ion_content_0_div_26_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReclamation.content, $event) || (ctx_r1.newReclamation.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 92)(17, "button", 93);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_26_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNewReclamationModal());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 94);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_div_26_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "RECLAMATIONS_PAGE.TO_DAYCARE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 10, "RECLAMATIONS_PAGE.ENTER_SUBJECT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReclamation.subject);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 12, "RECLAMATIONS_PAGE.ENTER_MESSAGE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReclamation.content);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "RECLAMATIONS_PAGE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.newReclamation.subject.trim() || !ctx_r1.newReclamation.content.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "RECLAMATIONS_PAGE.SEND_RECLAMATION"), " ");
  }
}
function ReclamationsComponent_ion_content_0_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewReclamationModal());
    });
    \u0275\u0275element(1, "i", 96);
    \u0275\u0275elementEnd();
  }
}
function ReclamationsComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "ion-refresher", 3);
    \u0275\u0275listener("ionRefresh", function ReclamationsComponent_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4)(4, "app-parent-child-header-simple", 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("inbox"));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("sent"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("important"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275listener("click", function ReclamationsComponent_ion_content_0_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("trash"));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ReclamationsComponent_ion_content_0_div_22_Template, 19, 14, "div", 9)(23, ReclamationsComponent_ion_content_0_div_23_Template, 16, 9, "div", 10)(24, ReclamationsComponent_ion_content_0_div_24_Template, 3, 2, "div", 11)(25, ReclamationsComponent_ion_content_0_div_25_Template, 29, 24, "div", 12)(26, ReclamationsComponent_ion_content_0_div_26_Template, 23, 18, "div", 13)(27, ReclamationsComponent_ion_content_0_button_27_Template, 2, 0, "button", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 21, "RECLAMATIONS_PAGE.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getOpenCount(), " ", \u0275\u0275pipeBind1(8, 23, "RECLAMATIONS_PAGE.OPEN"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "inbox");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 25, "RECLAMATIONS_PAGE.INBOX"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "sent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 27, "RECLAMATIONS_PAGE.SENT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "important");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 29, "RECLAMATIONS_PAGE.IMPORTANT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "trash");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 31, "RECLAMATIONS_PAGE.TRASH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeReclamations.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReclamations.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showModal && !ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal && ctx_r1.selectedReclamation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showNewReclamationModal && !ctx_r1.showModal);
  }
}
function ReclamationsComponent_div_1_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "div", 124);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_43_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("all"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_43_div_3_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("open"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 124);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_43_div_3_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("resolved"));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.statusFilter === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "RECLAMATIONS_PAGE.ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.statusFilter === "open");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "RECLAMATIONS_PAGE.OPEN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.statusFilter === "resolved");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 13, "RECLAMATIONS_PAGE.RESOLVED"), " ");
  }
}
function ReclamationsComponent_div_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "button", 120);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_43_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFilterMenu());
    });
    \u0275\u0275element(2, "i", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReclamationsComponent_div_1_div_43_div_3_Template, 10, 15, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showFilterMenu);
  }
}
function ReclamationsComponent_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedReclamation == null ? null : ctx_r1.selectedReclamation.subject);
  }
}
function ReclamationsComponent_div_1_h4_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeTab ? \u0275\u0275pipeBind1(2, 1, "RECLAMATIONS_PAGE." + ctx_r1.activeTab.toUpperCase()) : \u0275\u0275pipeBind1(3, 3, "RECLAMATIONS_PAGE.NEW_RECLAMATION"));
  }
}
function ReclamationsComponent_div_1_h4_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 125);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "RECLAMATIONS_PAGE.NEW_RECLAMATION"));
  }
}
function ReclamationsComponent_div_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 126)(1, "button", 127);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsResolved());
    });
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 128);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsOpen());
    });
    \u0275\u0275element(6, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 129);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275element(9, "i", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 3, "RECLAMATIONS_PAGE.MARK_AS_RESOLVED_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 5, "RECLAMATIONS_PAGE.MARK_AS_OPEN_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 7, "RECLAMATIONS_PAGE.DELETE_TITLE") + " (" + ctx_r1.selectedReclamations.length + ")");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "RECLAMATIONS_PAGE.SEEN_BY_PARENT"));
  }
}
function ReclamationsComponent_div_1_div_49_table_1_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "RECLAMATIONS_PAGE.STATUS"));
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 144);
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reclamation_r17 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("seen", reclamation_r17.isReadByParent)("not-seen", !reclamation_r17.isReadByParent);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-eye", reclamation_r17.isReadByParent)("bi-eye-slash", !reclamation_r17.isReadByParent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reclamation_r17.isReadByParent ? \u0275\u0275pipeBind1(3, 9, "RECLAMATIONS_PAGE.SEEN") : \u0275\u0275pipeBind1(4, 11, "RECLAMATIONS_PAGE.NOT_SEEN"), " ");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.PENDING_RESPONSE"), " ");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 141);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const reclamation_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275template(1, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_span_1_Template, 5, 13, "span", 142)(2, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_span_2_Template, 4, 3, "span", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reclamation_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reclamation_r17.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !reclamation_r17.isResolved);
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.PENDING_RESPONSE"), " ");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275element(1, "i", 151);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.NOT_SEEN"), " ");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275element(1, "i", 153);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.SEEN"), " ");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 141);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const reclamation_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275template(1, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_1_Template, 4, 3, "span", 143)(2, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_2_Template, 4, 3, "span", 148)(3, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_span_3_Template, 4, 3, "span", 149);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reclamation_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !reclamation_r17.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reclamation_r17.isResolved && !reclamation_r17.isReadByParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reclamation_r17.isResolved && reclamation_r17.isReadByParent);
  }
}
function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 135);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 18);
    \u0275\u0275listener("change", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_input_change_2_listener() {
      const reclamation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(reclamation_r17));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 136);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_td_click_3_listener() {
      const reclamation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 137);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_td_click_5_listener() {
      const reclamation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 138);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_td_click_7_listener() {
      const reclamation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 139);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_49_table_1_tr_20_Template_td_click_9_listener() {
      const reclamation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectReclamation(reclamation_r17));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_11_Template, 3, 2, "td", 140)(12, ReclamationsComponent_div_1_div_49_table_1_tr_20_td_12_Template, 4, 3, "td", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reclamation_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("resolved", reclamation_r17.isResolved);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(reclamation_r17));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(ctx_r1.activeTab === "sent" ? reclamation_r17.recipientId : reclamation_r17.senderId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reclamation_r17.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", reclamation_r17.content.substring(0, 50), "", reclamation_r17.content.length > 50 ? "..." : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(reclamation_r17.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "inbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent");
  }
}
function ReclamationsComponent_div_1_div_49_table_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 132)(1, "thead")(2, "tr")(3, "th", 133)(4, "input", 18);
    \u0275\u0275listener("change", function ReclamationsComponent_div_1_div_49_table_1_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
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
    \u0275\u0275template(17, ReclamationsComponent_div_1_div_49_table_1_th_17_Template, 3, 3, "th", 114)(18, ReclamationsComponent_div_1_div_49_table_1_th_18_Template, 3, 3, "th", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ReclamationsComponent_div_1_div_49_table_1_tr_20_Template, 13, 10, "tr", 134);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "RECLAMATIONS_PAGE.PERSON"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "RECLAMATIONS_PAGE.SUBJECT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "RECLAMATIONS_PAGE.CONTENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "RECLAMATIONS_PAGE.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "inbox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.activeReclamations);
  }
}
function ReclamationsComponent_div_1_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "p", 155);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RECLAMATIONS_PAGE.NO_RECLAMATIONS"));
  }
}
function ReclamationsComponent_div_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ReclamationsComponent_div_1_div_49_table_1_Template, 21, 16, "table", 130)(2, ReclamationsComponent_div_1_div_49_div_2_Template, 4, 3, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeReclamations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeReclamations.length === 0);
  }
}
function ReclamationsComponent_div_1_div_50_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "span", 160);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 144);
    \u0275\u0275element(5, "i", 145);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 10, "RECLAMATIONS_PAGE.SEEN_BY_PARENT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("seen", ctx_r1.selectedReclamation.isReadByParent)("not-seen", !ctx_r1.selectedReclamation.isReadByParent);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-eye", ctx_r1.selectedReclamation.isReadByParent)("bi-eye-slash", !ctx_r1.selectedReclamation.isReadByParent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReclamation.isReadByParent ? \u0275\u0275pipeBind1(7, 12, "RECLAMATIONS_PAGE.SEEN") : \u0275\u0275pipeBind1(8, 14, "RECLAMATIONS_PAGE.NOT_SEEN"), " ");
  }
}
function ReclamationsComponent_div_1_div_50_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "h5", 166);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 170);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "RECLAMATIONS_PAGE.RESPONSE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReclamation.response, " ");
  }
}
function ReclamationsComponent_div_1_div_50_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169)(1, "h5", 166);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 171);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_div_1_div_50_div_38_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.responseText, $event) || (ctx_r1.responseText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 172)(7, "div", 173)(8, "button", 174);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_50_div_38_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resolve());
    });
    \u0275\u0275element(9, "i", 175);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 176);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_50_div_38_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resolve());
    });
    \u0275\u0275element(13, "i", 28);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 177);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_50_div_38_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(17, "i", 178);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "RECLAMATIONS_PAGE.RESPONSE_NOTE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 10, "RECLAMATIONS_PAGE.ENTER_RESPONSE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.responseText);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.responseText.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 12, "RECLAMATIONS_PAGE.REPLY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.responseText.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "RECLAMATIONS_PAGE.MARK_AS_RESOLVED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "RECLAMATIONS_PAGE.CANCEL"), " ");
  }
}
function ReclamationsComponent_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 157)(2, "div", 158)(3, "div", 159)(4, "span", 160);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 161);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 159)(10, "span", 160);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 161);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 162)(16, "div", 159)(17, "span", 160);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 161);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 159)(23, "span", 160);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 163);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ReclamationsComponent_div_1_div_50_div_30_Template, 9, 16, "div", 164);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 165)(32, "h5", 166);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 167);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, ReclamationsComponent_div_1_div_50_div_37_Template, 6, 4, "div", 168)(38, ReclamationsComponent_div_1_div_50_div_38_Template, 20, 18, "div", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 17, "RECLAMATIONS_PAGE.FROM"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(ctx_r1.selectedReclamation.senderId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 19, "RECLAMATIONS_PAGE.TO"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getUserName(ctx_r1.selectedReclamation.recipientId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 21, "RECLAMATIONS_PAGE.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedReclamation.sentAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 23, "RECLAMATIONS_PAGE.STATUS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", !ctx_r1.selectedReclamation.isResolved)("resolved", ctx_r1.selectedReclamation.isResolved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReclamation.isResolved ? \u0275\u0275pipeBind1(28, 25, "RECLAMATIONS_PAGE.RESOLVED") : \u0275\u0275pipeBind1(29, 27, "RECLAMATIONS_PAGE.OPEN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "inbox" && ctx_r1.selectedReclamation.isResolved);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 29, "RECLAMATIONS_PAGE.MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedReclamation.content, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReclamation.isResolved && ctx_r1.selectedReclamation.response);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedReclamation.isResolved && ctx_r1.selectedReclamation.recipientId === ctx_r1.currentUserId);
  }
}
function ReclamationsComponent_div_1_div_51_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r23 = ctx.item;
    \u0275\u0275textInterpolate2(" ", item_r23.name, " (", item_r23.email, ") ");
  }
}
function ReclamationsComponent_div_1_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181)(1, "label", 182);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ng-select", 188);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_div_1_div_51_div_1_Template_ng_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReclamation.recipientId, $event) || (ctx_r1.newReclamation.recipientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, ReclamationsComponent_div_1_div_51_div_1_ng_template_6_Template, 1, 2, "ng-template", 189);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "RECLAMATIONS_PAGE.RECIPIENT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReclamation.recipientId);
    \u0275\u0275property("items", ctx_r1.users)("placeholder", \u0275\u0275pipeBind1(5, 8, "RECLAMATIONS_PAGE.SELECT_RECIPIENT"))("clearable", true)("searchable", true);
  }
}
function ReclamationsComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, ReclamationsComponent_div_1_div_51_div_1_Template, 7, 10, "div", 180);
    \u0275\u0275elementStart(2, "div", 181)(3, "label", 182);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 183);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_div_1_div_51_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReclamation.subject, $event) || (ctx_r1.newReclamation.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 181)(9, "label", 182);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 184);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReclamationsComponent_div_1_div_51_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newReclamation.content, $event) || (ctx_r1.newReclamation.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 185)(15, "button", 186);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_51_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275element(16, "i", 81);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 187);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_div_51_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNewReclamationModal());
    });
    \u0275\u0275element(20, "i", 178);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.authService.isParent());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "RECLAMATIONS_PAGE.SUBJECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 12, "RECLAMATIONS_PAGE.ENTER_SUBJECT"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReclamation.subject);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "RECLAMATIONS_PAGE.CONTENT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 16, "RECLAMATIONS_PAGE.ENTER_MESSAGE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newReclamation.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.authService.isParent() && !ctx_r1.newReclamation.recipientId || !ctx_r1.newReclamation.subject.trim() || !ctx_r1.newReclamation.content.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "RECLAMATIONS_PAGE.SEND_RECLAMATION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 20, "RECLAMATIONS_PAGE.CANCEL"), " ");
  }
}
function ReclamationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 98)(2, "div", 99)(3, "div", 100)(4, "div", 101)(5, "button", 102);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewReclamationModal());
    });
    \u0275\u0275element(6, "i", 103);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 104)(10, "div", 105)(11, "div", 106);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("inbox"));
    });
    \u0275\u0275element(12, "i", 107);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 108);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 106);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("sent"));
    });
    \u0275\u0275element(19, "i", 81);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 108);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 106);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("important"));
    });
    \u0275\u0275element(26, "i", 109);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 108);
    \u0275\u0275text(31, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 106);
    \u0275\u0275listener("click", function ReclamationsComponent_div_1_Template_div_click_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("trash"));
    });
    \u0275\u0275element(33, "i", 32);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 108);
    \u0275\u0275text(38, "0");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "div", 110)(40, "div", 111)(41, "div", 101)(42, "div", 112);
    \u0275\u0275template(43, ReclamationsComponent_div_1_div_43_Template, 4, 1, "div", 113)(44, ReclamationsComponent_div_1_div_44_Template, 3, 1, "div", 114)(45, ReclamationsComponent_div_1_h4_45_Template, 4, 5, "h4", 114)(46, ReclamationsComponent_div_1_h4_46_Template, 3, 3, "h4", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, ReclamationsComponent_div_1_div_47_Template, 10, 9, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 104);
    \u0275\u0275template(49, ReclamationsComponent_div_1_div_49_Template, 3, 2, "div", 114)(50, ReclamationsComponent_div_1_div_50_Template, 39, 31, "div", 117)(51, ReclamationsComponent_div_1_div_51_Template, 23, 22, "div", 118);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, "RECLAMATIONS_PAGE.NEW_RECLAMATION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "inbox");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 25, "RECLAMATIONS_PAGE.INBOX"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.receivedReclamations.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "sent");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 27, "RECLAMATIONS_PAGE.SENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.sentReclamations.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "important");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 29, "RECLAMATIONS_PAGE.IMPORTANT"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "trash");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 31, "RECLAMATIONS_PAGE.TRASH"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.activeReclamations.length > 0 && !ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showModal && !ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewReclamationModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedReclamations.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewReclamationModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showNewReclamationModal && !ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal && ctx_r1.selectedReclamation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewReclamationModal);
  }
}
var ReclamationsComponent = class _ReclamationsComponent {
  reclamationsService;
  authService;
  pageTitleService;
  translateService;
  route;
  simpleToastService;
  users = [];
  sentReclamations = [];
  receivedReclamations = [];
  selectedReclamation = null;
  showModal = false;
  showNewReclamationModal = false;
  newReclamation = {
    recipientId: "",
    subject: "",
    content: ""
  };
  responseText = "";
  currentUserId = "";
  activeTab = "inbox";
  selectedReclamations = [];
  statusFilter = "all";
  showFilterMenu = false;
  constructor(reclamationsService, authService, pageTitleService, translateService, route, simpleToastService) {
    this.reclamationsService = reclamationsService;
    this.authService = authService;
    this.pageTitleService = pageTitleService;
    this.translateService = translateService;
    this.route = route;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("RECLAMATIONS_PAGE.TITLE"));
    this.currentUserId = this.getCurrentUserId();
    this.loadUsers();
    this.loadReclamationsAndCheckQueryParam();
    this.autoSelectAdminForParents();
  }
  loadReclamationsAndCheckQueryParam() {
    let sentLoaded = false;
    let receivedLoaded = false;
    const checkAndOpenReclamation = () => {
      if (!sentLoaded || !receivedLoaded)
        return;
      this.route.queryParams.subscribe((params) => {
        const reclamationId = params["id"];
        if (reclamationId) {
          const id = parseInt(reclamationId, 10);
          let reclamation = this.receivedReclamations.find((r) => r.id === id);
          if (reclamation) {
            this.activeTab = "inbox";
            this.selectReclamation(reclamation);
          } else {
            reclamation = this.sentReclamations.find((r) => r.id === id);
            if (reclamation) {
              this.activeTab = "sent";
              this.selectReclamation(reclamation);
            }
          }
        }
      });
    };
    this.reclamationsService.getSentReclamations().subscribe({
      next: (reclamations) => {
        this.sentReclamations = reclamations;
        sentLoaded = true;
        checkAndOpenReclamation();
      },
      error: (err) => {
        console.error("Error loading sent reclamations:", err);
        sentLoaded = true;
        checkAndOpenReclamation();
      }
    });
    this.reclamationsService.getReceivedReclamations().subscribe({
      next: (reclamations) => {
        this.receivedReclamations = reclamations;
        receivedLoaded = true;
        checkAndOpenReclamation();
      },
      error: (err) => {
        console.error("Error loading received reclamations:", err);
        receivedLoaded = true;
        checkAndOpenReclamation();
      }
    });
  }
  autoSelectAdminForParents() {
    if (this.authService.isParent()) {
      this.reclamationsService.getUsers().subscribe({
        next: (users) => {
          const admin = users.find((u) => u.email === "admin@daycare.com");
          if (admin) {
            this.newReclamation.recipientId = admin.id;
            console.log("Set recipientId to admin:", admin.id);
          } else {
            console.error("Admin user not found. Please ensure admin@daycare.com exists.");
          }
        },
        error: (err) => console.error("Error loading users:", err)
      });
    }
  }
  ngOnDestroy() {
  }
  getCurrentUserId() {
    const token = localStorage.getItem("token");
    if (!token)
      return "";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const claims = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      return Array.isArray(claims) ? claims[claims.length - 1] : claims || "";
    } catch {
      return "";
    }
  }
  loadUsers() {
    this.reclamationsService.getUsers().subscribe({
      next: (users) => this.users = users,
      error: (err) => console.error("Error loading users:", err)
    });
  }
  loadReclamations() {
    this.reclamationsService.getSentReclamations().subscribe({
      next: (reclamations) => this.sentReclamations = reclamations,
      error: (err) => console.error("Error loading sent reclamations:", err)
    });
    this.reclamationsService.getReceivedReclamations().subscribe({
      next: (reclamations) => this.receivedReclamations = reclamations,
      error: (err) => console.error("Error loading received reclamations:", err)
    });
  }
  selectReclamation(reclamation) {
    const wasInSentTab = this.activeTab === "sent";
    this.selectedReclamation = reclamation;
    this.showModal = true;
    this.showNewReclamationModal = false;
    this.activeTab = null;
    if (this.isParent && wasInSentTab && reclamation.isResolved && !reclamation.isReadByParent && reclamation.id) {
      this.reclamationsService.getReclamation(reclamation.id).subscribe({
        next: (updated) => {
          this.selectedReclamation = updated;
          const idx = this.sentReclamations.findIndex((r) => r.id === updated.id);
          if (idx > -1) {
            this.sentReclamations[idx] = updated;
          }
        },
        error: (err) => console.error("Error marking reclamation as read:", err)
      });
    }
  }
  closeModal() {
    this.showModal = false;
    this.selectedReclamation = null;
    this.activeTab = "inbox";
  }
  openNewReclamationModal() {
    this.showNewReclamationModal = true;
    this.showModal = false;
    this.selectedReclamation = null;
    this.activeTab = null;
  }
  closeNewReclamationModal() {
    if (this.hasFormData()) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("RECLAMATIONS_PAGE.UNSAVED_DATA_TITLE"),
        text: this.translateService.instant("RECLAMATIONS_PAGE.UNSAVED_DATA_CLOSE_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0e567d",
        cancelButtonColor: "#e5e7eb",
        confirmButtonText: this.translateService.instant("RECLAMATIONS_PAGE.YES_CLOSE"),
        cancelButtonText: this.translateService.instant("RECLAMATIONS_PAGE.CANCEL"),
        customClass: {
          confirmButton: "swal-confirm-btn",
          cancelButton: "swal-cancel-btn"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetForm();
          this.showNewReclamationModal = false;
          this.activeTab = "inbox";
        }
      });
    } else {
      this.showNewReclamationModal = false;
      this.activeTab = "inbox";
    }
  }
  hasFormData() {
    return this.newReclamation.subject.trim() !== "" || this.newReclamation.content.trim() !== "";
  }
  resetForm() {
    this.newReclamation.subject = "";
    this.newReclamation.content = "";
  }
  send() {
    console.log("Send clicked", this.newReclamation);
    if (!this.newReclamation.recipientId || !this.newReclamation.subject.trim() || !this.newReclamation.content.trim()) {
      console.log("Validation failed", {
        recipientId: this.newReclamation.recipientId,
        subject: this.newReclamation.subject,
        content: this.newReclamation.content
      });
      return;
    }
    const { recipientId, subject, content } = this.newReclamation;
    this.reclamationsService.sendReclamation(recipientId, subject, content).subscribe({
      next: () => {
        console.log("Reclamation sent successfully");
        this.resetForm();
        this.loadReclamations();
        this.closeNewReclamationModal();
        this.simpleToastService.success(this.translateService.instant("RECLAMATIONS_PAGE.RECLAMATION_SENT_SUCCESS"));
      },
      error: (err) => {
        console.error("Error sending reclamation:", err);
        this.simpleToastService.error(this.translateService.instant("RECLAMATIONS_PAGE.RECLAMATION_SEND_FAILED"));
      }
    });
  }
  resolve() {
    if (!this.selectedReclamation || !this.responseText.trim())
      return;
    this.reclamationsService.resolveReclamation(this.selectedReclamation.id, this.responseText).subscribe({
      next: () => {
        this.responseText = "";
        this.loadReclamations();
        if (this.selectedReclamation) {
          this.reclamationsService.getReclamation(this.selectedReclamation.id).subscribe({
            next: (reclamation) => this.selectedReclamation = reclamation,
            error: (err) => console.error("Error reloading reclamation:", err)
          });
        }
      },
      error: (err) => console.error("Error resolving reclamation:", err)
    });
  }
  formatDate(date) {
    if (!date)
      return "";
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  getUserName(userId) {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.name : "Unknown User";
  }
  switchTab(tab) {
    if (this.showNewReclamationModal && this.hasFormData()) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("RECLAMATIONS_PAGE.UNSAVED_DATA_TITLE"),
        text: this.translateService.instant("RECLAMATIONS_PAGE.UNSAVED_DATA_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0e567d",
        cancelButtonColor: "#e5e7eb",
        confirmButtonText: this.translateService.instant("RECLAMATIONS_PAGE.YES_LEAVE"),
        cancelButtonText: this.translateService.instant("RECLAMATIONS_PAGE.CANCEL"),
        customClass: {
          confirmButton: "swal-confirm-btn",
          cancelButton: "swal-cancel-btn"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetForm();
          this.activeTab = tab;
          this.showNewReclamationModal = false;
          this.showModal = false;
          this.selectedReclamation = null;
        }
      });
    } else {
      this.activeTab = tab;
      this.showNewReclamationModal = false;
      this.showModal = false;
      this.selectedReclamation = null;
    }
  }
  get isParent() {
    return this.authService.isParent();
  }
  get activeReclamations() {
    let reclamations = [];
    switch (this.activeTab) {
      case "inbox":
        reclamations = this.receivedReclamations;
        break;
      case "sent":
        reclamations = this.sentReclamations;
        break;
      case "important":
        reclamations = [];
        break;
      case "trash":
        reclamations = [];
        break;
      default:
        reclamations = [];
    }
    return this.filterByStatus(reclamations);
  }
  filterByStatus(reclamations) {
    if (this.statusFilter === "all")
      return reclamations;
    if (this.statusFilter === "open")
      return reclamations.filter((r) => !r.isResolved);
    if (this.statusFilter === "resolved")
      return reclamations.filter((r) => r.isResolved);
    return reclamations;
  }
  onFilterChange() {
    this.selectedReclamations = [];
  }
  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }
  setFilter(filter) {
    this.statusFilter = filter;
    this.showFilterMenu = false;
    this.onFilterChange();
  }
  toggleSelection(reclamation) {
    const index = this.selectedReclamations.findIndex((r) => r.id === reclamation.id);
    if (index > -1) {
      this.selectedReclamations.splice(index, 1);
    } else {
      this.selectedReclamations.push(reclamation);
    }
  }
  isSelected(reclamation) {
    return this.selectedReclamations.some((r) => r.id === reclamation.id);
  }
  toggleSelectAll(event) {
    if (event.target.checked) {
      this.selectedReclamations = [...this.activeReclamations];
    } else {
      this.selectedReclamations = [];
    }
  }
  isAllSelected() {
    return this.activeReclamations.length > 0 && this.selectedReclamations.length === this.activeReclamations.length;
  }
  deleteSelected() {
    if (this.selectedReclamations.length === 0)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("RECLAMATIONS_PAGE.DELETE_RECLAMATIONS_TITLE"),
      text: this.translateService.instant("RECLAMATIONS_PAGE.DELETE_RECLAMATIONS_TEXT", { count: this.selectedReclamations.length }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0e567d",
      cancelButtonColor: "#e5e7eb",
      confirmButtonText: this.translateService.instant("RECLAMATIONS_PAGE.YES_DELETE"),
      cancelButtonText: this.translateService.instant("RECLAMATIONS_PAGE.CANCEL"),
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleting:", this.selectedReclamations);
        this.selectedReclamations = [];
      }
    });
  }
  markAsResolved() {
    if (this.selectedReclamations.length === 0)
      return;
    this.selectedReclamations.forEach((reclamation) => {
      if (reclamation.id) {
        this.reclamationsService.resolveReclamation(reclamation.id, "Marked as resolved").subscribe({
          next: () => {
            reclamation.isResolved = true;
            this.loadReclamations();
          },
          error: (err) => console.error("Error resolving reclamation:", err)
        });
      }
    });
    this.selectedReclamations = [];
  }
  markAsOpen() {
    if (this.selectedReclamations.length === 0)
      return;
    console.log("Marking as open:", this.selectedReclamations);
    this.selectedReclamations.forEach((r) => r.isResolved = false);
    this.selectedReclamations = [];
  }
  getOpenCount() {
    return this.receivedReclamations.filter((r) => !r.isResolved).length;
  }
  // Pull-to-refresh handler for Ionic refresher
  onRefresh(event) {
    this.loadReclamations();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  static \u0275fac = function ReclamationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReclamationsComponent)(\u0275\u0275directiveInject(ReclamationsService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReclamationsComponent, selectors: [["app-reclamations"]], decls: 2, vars: 2, consts: [["class", "parent-reclamations", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], [1, "parent-reclamations"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "new-design"], [3, "title"], [1, "nd-unread-badge"], [1, "nd-tab-bar"], [1, "nd-tab", 3, "click"], ["class", "nd-filter-row", 4, "ngIf"], ["class", "nd-bulk-actions", 4, "ngIf"], ["class", "nd-message-list", 4, "ngIf"], ["class", "nd-message-detail", 4, "ngIf"], ["class", "nd-compose-view", 4, "ngIf"], ["class", "nd-fab", 3, "click", 4, "ngIf"], [1, "nd-filter-row"], [1, "nd-filter-left"], [1, "nd-checkbox-container"], ["type", "checkbox", 3, "change", "checked"], [1, "nd-checkbox-label"], [1, "nd-filter-right"], [1, "nd-filter-dropdown"], [3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "open"], ["value", "resolved"], [1, "nd-bulk-actions"], [1, "nd-action-btn", "nd-action-resolve", 3, "click"], [1, "bi", "bi-check-circle"], [1, "nd-action-btn", "nd-action-open", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], [1, "nd-action-btn", "nd-action-delete", 3, "click"], [1, "bi", "bi-trash"], [1, "nd-message-list"], ["class", "nd-empty-state", 4, "ngIf"], ["class", "nd-message-card", 3, "unread", "selected", "click", 4, "ngFor", "ngForOf"], [1, "nd-empty-state"], [1, "bi", "bi-inbox", "nd-empty-icon"], [1, "nd-empty-text"], [1, "nd-message-card", 3, "click"], [1, "nd-card-checkbox", 3, "click"], [1, "nd-card-content"], [1, "nd-card-header"], [1, "nd-card-sender"], [1, "nd-card-time"], ["class", "nd-unread-dot", 4, "ngIf"], ["class", "nd-unread-dot nd-new-response-dot", 4, "ngIf"], [1, "nd-card-subject"], [1, "nd-card-preview"], ["class", "nd-card-response-badge", 4, "ngIf"], [1, "nd-unread-dot"], [1, "nd-unread-dot", "nd-new-response-dot"], [1, "nd-card-response-badge"], [1, "bi", "bi-reply-fill"], [1, "nd-message-detail"], [1, "nd-detail-header-card"], [1, "nd-detail-avatar"], [1, "nd-detail-info"], [1, "nd-detail-name"], [1, "nd-detail-role"], [1, "nd-detail-meta"], [1, "nd-detail-date"], [1, "nd-detail-status"], [1, "nd-detail-content-card"], [1, "nd-detail-subject"], [1, "nd-detail-body"], ["class", "nd-replies-section", 4, "ngIf"], ["class", "nd-reply-input-section", 4, "ngIf"], [1, "nd-back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "nd-replies-section"], [1, "nd-section-title"], [1, "nd-reply-card"], [1, "nd-reply-content"], ["class", "nd-seen-indicator", 4, "ngIf"], [1, "nd-seen-indicator"], [1, "bi", "bi-check2-all"], [1, "nd-reply-input-section"], [1, "nd-reply-input-container"], [1, "nd-reply-textarea", 3, "ngModelChange", "placeholder", "ngModel"], [1, "nd-send-btn", 3, "click", "disabled"], [1, "bi", "bi-send"], [1, "nd-compose-view"], [1, "nd-compose-card"], [1, "nd-compose-field"], [1, "nd-field-icon"], [1, "bi", "bi-building"], [1, "nd-field-text"], [1, "bi", "bi-chat-text"], ["type", "text", 1, "nd-field-input", 3, "ngModelChange", "placeholder", "ngModel"], [1, "nd-compose-textarea-container"], [1, "nd-compose-textarea", 3, "ngModelChange", "placeholder", "ngModel"], [1, "nd-compose-actions"], [1, "nd-cancel-btn", 3, "click"], [1, "nd-submit-btn", 3, "click", "disabled"], [1, "nd-fab", 3, "click"], [1, "bi", "bi-pencil"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-xs-12", "col-sm-3"], [1, "panel", "menu-card-fixed"], [1, "panel-header"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "panel-body"], [1, "sidebar-menu"], [1, "menu-item", 3, "click"], [1, "bi", "bi-inbox"], [1, "badge"], [1, "bi", "bi-star"], [1, "col-xs-12", "col-sm-9"], [1, "panel"], [1, "header-left", "p-1"], ["class", "filter-dropdown", 4, "ngIf"], [4, "ngIf"], ["class", "form-header-title", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], ["class", "reclamation-details", 4, "ngIf"], ["class", "new-reclamation-form", 4, "ngIf"], [1, "filter-dropdown"], [1, "filter-btn", 3, "click"], [1, "bi", "bi-three-dots-vertical"], ["class", "filter-menu", 4, "ngIf"], [1, "filter-menu"], [1, "filter-item", 3, "click"], [1, "form-header-title"], [1, "action-buttons"], [1, "action-btn", "resolve-btn", 3, "click", "title"], [1, "action-btn", "open-btn", 3, "click", "title"], [1, "action-btn", "delete-btn", 3, "click", "title"], ["class", "reclamations-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "reclamations-table"], [1, "checkbox-col"], [3, "resolved", 4, "ngFor", "ngForOf"], [1, "checkbox-col", 3, "click"], [1, "person-cell", 3, "click"], [1, "subject-cell", 3, "click"], [1, "content-cell", 3, "click"], [1, "date-cell", 3, "click"], ["class", "seen-cell", 3, "click", 4, "ngIf"], [1, "seen-cell", 3, "click"], ["class", "seen-badge", 3, "seen", "not-seen", 4, "ngIf"], ["class", "seen-badge pending", 4, "ngIf"], [1, "seen-badge"], [1, "bi"], [1, "seen-badge", "pending"], [1, "bi", "bi-hourglass-split"], ["class", "seen-badge not-seen", 4, "ngIf"], ["class", "seen-badge seen", 4, "ngIf"], [1, "seen-badge", "not-seen"], [1, "bi", "bi-eye-slash"], [1, "seen-badge", "seen"], [1, "bi", "bi-eye"], [1, "empty-state"], [1, "empty-cell"], [1, "reclamation-details"], [1, "detail-info-row"], [1, "detail-info-left"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "detail-info-right"], [1, "status-badge"], ["class", "info-item", 4, "ngIf"], [1, "detail-content-section"], [1, "section-title"], [1, "content-box"], ["class", "detail-response-section", 4, "ngIf"], [1, "detail-response-section"], [1, "response-box"], [1, "response-textarea", 3, "ngModelChange", "placeholder", "ngModel"], [1, "response-actions"], [1, "response-actions-left"], [1, "custom-btn-2", "btn-add-global-2", "replay", 3, "click", "disabled"], [1, "bi", "bi-reply"], [1, "custom-btn-2", "btn-edit-global-2", 3, "click", "disabled"], [1, "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-x-circle"], [1, "new-reclamation-form"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "form-label"], ["type", "text", "required", "", 1, "form-input", 3, "ngModelChange", "placeholder", "ngModel"], ["required", "", 1, "form-textarea", 3, "ngModelChange", "placeholder", "ngModel"], [1, "form-actions"], [1, "btn-send", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], ["bindValue", "id", "bindLabel", "name", 1, "form-ng-select", 3, "ngModelChange", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""]], template: function ReclamationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ReclamationsComponent_ion_content_0_Template, 28, 33, "ion-content", 0)(1, ReclamationsComponent_div_1_Template, 52, 33, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, ParentChildHeaderSimpleComponent, TranslateModule, IonContent, IonRefresher, IonRefresherContent, TranslatePipe], styles: ['\n\nion-content.parent-reclamations[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-reclamations[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.form-header-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.header-checkbox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  margin-left: 5px;\n}\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #a8c5ff;\n}\n.filter-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 4px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  min-width: 140px;\n  z-index: 1000;\n  overflow: hidden;\n}\n.filter-item[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #334155;\n  transition: all 0.2s;\n  font-weight: 500;\n}\n.filter-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.filter-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n  color: #334155;\n  font-weight: 600;\n}\n.btn-add-global-2[_ngcontent-%COMP%] {\n  min-width: 100% !important;\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.btn-add-global-2.replay[_ngcontent-%COMP%] {\n  min-width: 130px !important;\n}\n.btn-cancel-2[_ngcontent-%COMP%] {\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.panel-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n.reclamations-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.left-reclamation-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.reclamation-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.reclamations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 4px 2px;\n  overflow-y: auto;\n  flex: 1;\n}\n.reclamation-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n}\n.reclamation-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.reclamation-item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #dbeafe;\n}\n.reclamation-item.resolved[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.reclamation-subject[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.reclamation-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.reclamation-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.reclamation-date[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.reclamation-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.reclamation-status.open[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.reclamation-status.resolved[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.reclamation-header[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reclamation-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.reclamation-sender[_ngcontent-%COMP%], \n.reclamation-recipient[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.reclamation-date-full[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.reclamation-content-full[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.response-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 16px;\n}\n.response-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.response-content[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 12px;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  margin-top: 12px;\n  flex-shrink: 0;\n}\n.input[_ngcontent-%COMP%], \n.textarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.textarea[_ngcontent-%COMP%] {\n  min-height: 200px;\n  resize: vertical;\n}\n.send[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  width: max-content;\n}\n.send[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.resolve[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n}\n.resolve[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #0e567d;\n}\n.menu-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  line-height: 1;\n  min-width: 1.5em;\n  text-align: center;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.menu-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.menu-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a8c5ff;\n}\n.menu-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  color: #0e567d;\n  font-weight: 600;\n}\n.menu-item.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n}\n.menu-card-fixed[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n.reclamations-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%;\n}\n.reclamations-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n}\n.reclamations-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 14px;\n  color: #0e567d;\n  border-bottom: 2px solid #e2e8f0;\n}\n.checkbox-col[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.checkbox-col[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 36px;\n  height: 36px;\n}\n.resolve-btn[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.resolve-btn[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #16a34a;\n}\n.open-btn[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.open-btn[_ngcontent-%COMP%]:hover {\n  background: #fff7ed;\n  border-color: #ea580c;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.reclamations-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: block;\n  overflow-y: auto;\n  height: calc(100vh - 350px);\n}\n.reclamations-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n.reclamations-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.reclamations-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reclamations-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.reclamations-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.resolved[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.reclamations-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n}\n.person-cell[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.subject-cell[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.content-cell[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.status-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.open[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-badge.resolved[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.new-reclamation-form[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 320px);\n}\n.form-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: bl ock;\n  color: #0e567d;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 180px;\n  resize: vertical;\n  font-family: inherit;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.btn-send[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-send[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4);\n}\n.btn-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-size: 14px;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #a8c5ff;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  font-size: 14px;\n}\n.reclamation-details[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.detail-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.detail-info-left[_ngcontent-%COMP%], \n.detail-info-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0e567d;\n  font-size: 14px;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 14px;\n}\n.detail-content-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.detail-response-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.content-box[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n  min-height: 120px;\n}\n.response-box[_ngcontent-%COMP%] {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n}\n.response-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  min-height: 120px;\n  resize: vertical;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.response-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.response-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.response-actions-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: block;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 9999;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  display: block;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n  padding: 0;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n  .header-info {\n  margin-bottom: 35px !important;\n}\n  .parent-menu {\n  display: none !important;\n}\n  .float-btn {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  z-index: 9999;\n  background: #2563eb;\n  padding: 10px 14px;\n  border-radius: 8px;\n  color: #fff;\n}\n  .image-name .name {\n  padding-bottom: 20px !important;\n}\n  .swal-confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  border: none !important;\n  box-shadow: 0 2px 8px rgba(168, 197, 255, 0.3) !important;\n}\n  .swal-confirm-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4) !important;\n}\n  .swal-cancel-btn {\n  background: #fff !important;\n  color: #64748b !important;\n  border: 1px solid #e5e7eb !important;\n}\n  .swal-cancel-btn:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n@media screen and (max-width: 768px) {\n  .panel[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-bottom: 1rem;\n  }\n}\n.new-design[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  padding-bottom: 80px;\n}\n.nd-unread-badge[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 6px 10px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 8px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.nd-tab[_ngcontent-%COMP%]:hover {\n  color: #1DBAB4;\n  background-color: rgba(29, 186, 180, 0.05);\n}\n.nd-tab.active[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  font-weight: 600;\n  border-bottom-color: #1DBAB4;\n}\n.nd-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.nd-checkbox-container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-checkbox-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2D3748;\n}\n.nd-filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #2D3748;\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n.nd-filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1DBAB4;\n}\n.nd-bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid;\n  background-color: transparent;\n}\n.nd-action-resolve[_ngcontent-%COMP%] {\n  color: #16a34a;\n  border-color: #16a34a;\n}\n.nd-action-resolve[_ngcontent-%COMP%]:hover {\n  background-color: rgba(22, 163, 74, 0.1);\n}\n.nd-action-open[_ngcontent-%COMP%] {\n  color: #ea580c;\n  border-color: #ea580c;\n}\n.nd-action-open[_ngcontent-%COMP%]:hover {\n  background-color: rgba(234, 88, 12, 0.1);\n}\n.nd-action-delete[_ngcontent-%COMP%] {\n  color: #EF4444;\n  border-color: #EF4444;\n}\n.nd-action-delete[_ngcontent-%COMP%]:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n.nd-message-list[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.nd-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.nd-empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: rgba(107, 114, 128, 0.5);\n  margin-bottom: 16px;\n}\n.nd-empty-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(107, 114, 128, 0.7);\n  margin: 0;\n}\n.nd-message-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.nd-message-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.nd-message-card.unread[_ngcontent-%COMP%] {\n  background-color: #FEF3C7;\n}\n.nd-message-card.selected[_ngcontent-%COMP%] {\n  border-color: #1DBAB4;\n}\n.nd-card-checkbox[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n.nd-card-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.nd-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.nd-card-sender[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #2D3748;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread[_ngcontent-%COMP%]   .nd-card-sender[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.nd-card-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.nd-unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #ea580c;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.nd-unread-dot.nd-new-response-dot[_ngcontent-%COMP%] {\n  background-color: #16a34a;\n}\n.nd-card-response-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #16a34a;\n  background-color: #dcfce7;\n  border-radius: 10px;\n  padding: 2px 8px;\n}\n.nd-card-response-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.nd-seen-indicator[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #6B7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.nd-seen-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 14px;\n}\n.nd-card-subject[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread[_ngcontent-%COMP%]   .nd-card-subject[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.nd-card-preview[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.nd-message-detail[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.nd-detail-header-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background-color: #E0F2FE;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1DBAB4;\n}\n.nd-detail-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nd-detail-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-detail-role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.nd-detail-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.nd-detail-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.nd-detail-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.nd-detail-status.resolved[_ngcontent-%COMP%] {\n  background-color: #DCFCE7;\n  color: #16a34a;\n}\n.nd-detail-status.open[_ngcontent-%COMP%] {\n  background-color: #FEF3C7;\n  color: #ea580c;\n}\n.nd-detail-content-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-subject[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #2D3748;\n  margin-bottom: 16px;\n}\n.nd-detail-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #2D3748;\n  white-space: pre-wrap;\n}\n.nd-replies-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.nd-section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 12px 0;\n}\n.nd-reply-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n}\n.nd-reply-card.own-reply[_ngcontent-%COMP%] {\n  background-color: #F0F9FF;\n  border-left: 4px solid #1DBAB4;\n}\n.nd-reply-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nd-reply-sender[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-reply-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n.nd-reply-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #2D3748;\n}\n.nd-reply-input-section[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}\n.nd-reply-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.nd-reply-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 24px;\n  background-color: #F5F5F5;\n  font-size: 14px;\n  resize: none;\n  min-height: 44px;\n  max-height: 120px;\n  font-family: "Poppins", sans-serif;\n}\n.nd-reply-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-reply-textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(107, 114, 128, 0.7);\n}\n.nd-send-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.nd-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #19a8a3;\n}\n.nd-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: transparent;\n  border: none;\n  color: #6B7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 80px;\n}\n.nd-back-btn[_ngcontent-%COMP%]:hover {\n  color: #2D3748;\n}\n.nd-compose-view[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.nd-compose-card[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.nd-compose-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-field-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #1DBAB4 0%,\n      #7DD3C0 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-right: 12px;\n}\n.nd-field-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.nd-field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  font-family: "Poppins", sans-serif;\n}\n.nd-field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-field-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.nd-field-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2D3748;\n  font-weight: 500;\n}\n.nd-compose-textarea-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.nd-compose-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  resize: vertical;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.6;\n}\n.nd-compose-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-compose-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.nd-compose-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.nd-cancel-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background-color: #FFFFFF;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nd-cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n  border-color: #CBD5E1;\n}\n.nd-submit-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background: var(--gradient-primary);\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(155, 107, 204, 0.3);\n}\n.nd-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(155, 107, 204, 0.4);\n}\n.nd-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 186, 180, 0.4);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.nd-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(29, 186, 180, 0.5);\n}\n/*# sourceMappingURL=reclamations.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReclamationsComponent, [{
    type: Component,
    args: [{ selector: "app-reclamations", standalone: true, imports: [CommonModule, FormsModule, NgSelectModule, ParentChildHeaderSimpleComponent, TranslateModule, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-reclamations">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild new-design">\r
    <app-parent-child-header-simple [title]="'RECLAMATIONS_PAGE.TITLE' | translate">\r
      <span class="nd-unread-badge">{{ getOpenCount() }} {{ 'RECLAMATIONS_PAGE.OPEN' | translate }}</span>\r
    </app-parent-child-header-simple>\r
\r
  <!-- Tab Bar -->\r
  <div class="nd-tab-bar">\r
    <div class="nd-tab" [class.active]="activeTab === 'inbox'" (click)="switchTab('inbox')">\r
      {{ 'RECLAMATIONS_PAGE.INBOX' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'sent'" (click)="switchTab('sent')">\r
      {{ 'RECLAMATIONS_PAGE.SENT' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'important'" (click)="switchTab('important')">\r
      {{ 'RECLAMATIONS_PAGE.IMPORTANT' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'trash'" (click)="switchTab('trash')">\r
      {{ 'RECLAMATIONS_PAGE.TRASH' | translate }}\r
    </div>\r
  </div>\r
\r
  <!-- Filter and Actions Row -->\r
  <div class="nd-filter-row" *ngIf="activeReclamations.length > 0 && !showModal && !showNewReclamationModal">\r
    <div class="nd-filter-left">\r
      <label class="nd-checkbox-container">\r
        <input type="checkbox" (change)="toggleSelectAll($event)" [checked]="isAllSelected()">\r
        <span class="nd-checkbox-label">{{ 'RECLAMATIONS_PAGE.SELECT_ALL' | translate }}</span>\r
      </label>\r
    </div>\r
    <div class="nd-filter-right">\r
      <div class="nd-filter-dropdown">\r
        <select [(ngModel)]="statusFilter" (change)="setFilter(statusFilter)">\r
          <option value="all">{{ 'RECLAMATIONS_PAGE.ALL' | translate }}</option>\r
          <option value="open">{{ 'RECLAMATIONS_PAGE.OPEN' | translate }}</option>\r
          <option value="resolved">{{ 'RECLAMATIONS_PAGE.RESOLVED' | translate }}</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Actions -->\r
  <div class="nd-bulk-actions" *ngIf="selectedReclamations.length > 0 && !showModal && !showNewReclamationModal">\r
    <button class="nd-action-btn nd-action-resolve" (click)="markAsResolved()">\r
      <i class="bi bi-check-circle"></i>\r
      <span>{{ 'RECLAMATIONS_PAGE.MARK_AS_RESOLVED' | translate }}</span>\r
    </button>\r
    <button class="nd-action-btn nd-action-open" (click)="markAsOpen()">\r
      <i class="bi bi-arrow-counterclockwise"></i>\r
      <span>{{ 'RECLAMATIONS_PAGE.REOPEN' | translate }}</span>\r
    </button>\r
    <button class="nd-action-btn nd-action-delete" (click)="deleteSelected()">\r
      <i class="bi bi-trash"></i>\r
      <span>{{ 'RECLAMATIONS_PAGE.DELETE' | translate }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Reclamation List -->\r
  <div class="nd-message-list" *ngIf="!showModal && !showNewReclamationModal">\r
    <!-- Empty State -->\r
    <div class="nd-empty-state" *ngIf="activeReclamations.length === 0">\r
      <i class="bi bi-inbox nd-empty-icon"></i>\r
      <p class="nd-empty-text">{{ 'RECLAMATIONS_PAGE.NO_RECLAMATIONS' | translate }}</p>\r
    </div>\r
\r
    <!-- Reclamation Cards -->\r
    <div class="nd-message-card"\r
         *ngFor="let reclamation of activeReclamations"\r
         [class.unread]="activeTab !== 'sent' ? !reclamation.isResolved : (reclamation.isResolved && !reclamation.isReadByParent)"\r
         [class.selected]="isSelected(reclamation)"\r
         (click)="selectReclamation(reclamation)">\r
      <div class="nd-card-checkbox" (click)="$event.stopPropagation()">\r
        <input type="checkbox" [checked]="isSelected(reclamation)" (change)="toggleSelection(reclamation)">\r
      </div>\r
      <div class="nd-card-content">\r
        <div class="nd-card-header">\r
          <span class="nd-card-sender">{{ getUserName(activeTab === 'sent' ? reclamation.recipientId : reclamation.senderId) }}</span>\r
          <span class="nd-card-time">{{ formatDate(reclamation.sentAt) }}</span>\r
          <span class="nd-unread-dot" *ngIf="!reclamation.isResolved && activeTab !== 'sent'"></span>\r
          <span class="nd-unread-dot nd-new-response-dot" *ngIf="activeTab === 'sent' && reclamation.isResolved && !reclamation.isReadByParent"></span>\r
        </div>\r
        <div class="nd-card-subject">{{ reclamation.subject }}</div>\r
        <div class="nd-card-preview">{{ reclamation.content.substring(0, 80) }}{{ reclamation.content.length > 80 ? '...' : '' }}</div>\r
        <div class="nd-card-response-badge" *ngIf="activeTab === 'sent' && reclamation.isResolved && !reclamation.isReadByParent">\r
          <i class="bi bi-reply-fill"></i> {{ 'RECLAMATIONS_PAGE.NEW_RESPONSE' | translate }}\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Reclamation Detail View -->\r
  <div class="nd-message-detail" *ngIf="showModal && selectedReclamation">\r
    <!-- Detail Header Card -->\r
    <div class="nd-detail-header-card">\r
      <div class="nd-detail-avatar">\r
        {{ getUserName(activeTab === 'sent' ? selectedReclamation.recipientId : selectedReclamation.senderId).charAt(0).toUpperCase() || '?' }}\r
      </div>\r
      <div class="nd-detail-info">\r
        <div class="nd-detail-name">{{ getUserName(activeTab === 'sent' ? selectedReclamation.recipientId : selectedReclamation.senderId) }}</div>\r
        <div class="nd-detail-role">{{ activeTab === 'sent' ? ('RECLAMATIONS_PAGE.TO' | translate) : ('RECLAMATIONS_PAGE.FROM' | translate) }}</div>\r
      </div>\r
      <div class="nd-detail-meta">\r
        <div class="nd-detail-date">{{ formatDate(selectedReclamation.sentAt) }}</div>\r
        <span class="nd-detail-status" [class.resolved]="selectedReclamation.isResolved" [class.open]="!selectedReclamation.isResolved">\r
          {{ selectedReclamation.isResolved ? ('RECLAMATIONS_PAGE.RESOLVED' | translate) : ('RECLAMATIONS_PAGE.OPEN' | translate) }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Reclamation Content Card -->\r
    <div class="nd-detail-content-card">\r
      <div class="nd-detail-subject">{{ selectedReclamation.subject }}</div>\r
      <div class="nd-detail-body">{{ selectedReclamation.content }}</div>\r
    </div>\r
\r
    <!-- Response Section -->\r
    <div class="nd-replies-section" *ngIf="selectedReclamation.isResolved && selectedReclamation.response">\r
      <h3 class="nd-section-title">{{ 'RECLAMATIONS_PAGE.RESPONSE' | translate }}</h3>\r
      <div class="nd-reply-card">\r
        <div class="nd-reply-content">{{ selectedReclamation.response }}</div>\r
      </div>\r
      <div class="nd-seen-indicator" *ngIf="selectedReclamation.isReadByParent && selectedReclamation.readByParentAt">\r
        <i class="bi bi-check2-all"></i>\r
        {{ 'RECLAMATIONS_PAGE.SEEN' | translate }} \xB7 {{ formatDate(selectedReclamation.readByParentAt) }}\r
      </div>\r
    </div>\r
\r
    <!-- Reply Input (for recipient) -->\r
    <div class="nd-reply-input-section" *ngIf="!selectedReclamation.isResolved && selectedReclamation.recipientId === currentUserId">\r
      <div class="nd-reply-input-container">\r
        <textarea class="nd-reply-textarea"\r
                  [placeholder]="'RECLAMATIONS_PAGE.ENTER_RESPONSE' | translate"\r
                  [(ngModel)]="responseText"></textarea>\r
        <button class="nd-send-btn" (click)="resolve()" [disabled]="!responseText.trim()">\r
          <i class="bi bi-send"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Back Button -->\r
    <button class="nd-back-btn" (click)="closeModal()">\r
      <i class="bi bi-arrow-left"></i>\r
      {{ 'RECLAMATIONS_PAGE.BACK' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- Compose Reclamation View -->\r
  <div class="nd-compose-view" *ngIf="showNewReclamationModal">\r
    <div class="nd-compose-card">\r
      <div class="nd-compose-field">\r
        <div class="nd-field-icon">\r
          <i class="bi bi-building"></i>\r
        </div>\r
        <span class="nd-field-text">{{ 'RECLAMATIONS_PAGE.TO_DAYCARE' | translate }}</span>\r
      </div>\r
      <div class="nd-compose-field">\r
        <div class="nd-field-icon">\r
          <i class="bi bi-chat-text"></i>\r
        </div>\r
        <input type="text" class="nd-field-input" [placeholder]="'RECLAMATIONS_PAGE.ENTER_SUBJECT' | translate" [(ngModel)]="newReclamation.subject">\r
      </div>\r
      <div class="nd-compose-textarea-container">\r
        <textarea class="nd-compose-textarea"\r
                  [placeholder]="'RECLAMATIONS_PAGE.ENTER_MESSAGE' | translate"\r
                  [(ngModel)]="newReclamation.content"></textarea>\r
      </div>\r
    </div>\r
    <div class="nd-compose-actions">\r
      <button class="nd-cancel-btn" (click)="closeNewReclamationModal()">\r
        {{ 'RECLAMATIONS_PAGE.CANCEL' | translate }}\r
      </button>\r
      <button class="nd-submit-btn" (click)="send()" [disabled]="!newReclamation.subject.trim() || !newReclamation.content.trim()">\r
        {{ 'RECLAMATIONS_PAGE.SEND_RECLAMATION' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Action Button -->\r
  <button class="nd-fab" (click)="openNewReclamationModal()" *ngIf="!showNewReclamationModal && !showModal">\r
    <i class="bi bi-pencil"></i>\r
  </button>\r
  </div>\r
</ion-content>\r
\r
<div *ngIf="!isParent" class="container-fluid mt-4">\r
  \r
  <div class="row">\r
    <div class="col-xs-12 col-sm-3">\r
      <div class="panel menu-card-fixed">\r
        <div class="panel-header">\r
          <button class="custom-btn-2 btn-add-global-2" (click)="openNewReclamationModal()">\r
            <i class="bi bi-plus-circle"></i>\r
            {{ 'RECLAMATIONS_PAGE.NEW_RECLAMATION' | translate }}\r
          </button>\r
        </div>\r
        <div class="panel-body">\r
          <div class="sidebar-menu">\r
            <div class="menu-item" [class.active]="activeTab === 'inbox'" (click)="switchTab('inbox')">\r
              <i class="bi bi-inbox"></i>\r
              <span>{{ 'RECLAMATIONS_PAGE.INBOX' | translate }}</span>\r
              <span class="badge">{{ receivedReclamations.length }}</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'sent'" (click)="switchTab('sent')">\r
              <i class="bi bi-send"></i>\r
              <span>{{ 'RECLAMATIONS_PAGE.SENT' | translate }}</span>\r
              <span class="badge">{{ sentReclamations.length }}</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'important'" (click)="switchTab('important')">\r
              <i class="bi bi-star"></i>\r
              <span>{{ 'RECLAMATIONS_PAGE.IMPORTANT' | translate }}</span>\r
              <span class="badge">0</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'trash'" (click)="switchTab('trash')">\r
              <i class="bi bi-trash"></i>\r
              <span>{{ 'RECLAMATIONS_PAGE.TRASH' | translate }}</span>\r
              <span class="badge">0</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xs-12 col-sm-9">\r
      <div class="panel">\r
        <div class="panel-header">\r
          <div class="header-left p-1">\r
            <div *ngIf="activeReclamations.length > 0 && !showModal" class="filter-dropdown">\r
              <button class="filter-btn" (click)="toggleFilterMenu()">\r
                <i class="bi bi-three-dots-vertical"></i>\r
              </button>\r
              <div class="filter-menu" *ngIf="showFilterMenu">\r
                <div class="filter-item" [class.active]="statusFilter === 'all'" (click)="setFilter('all')">\r
                  {{ 'RECLAMATIONS_PAGE.ALL' | translate }}\r
                </div>\r
                <div class="filter-item" [class.active]="statusFilter === 'open'" (click)="setFilter('open')">\r
                  {{ 'RECLAMATIONS_PAGE.OPEN' | translate }}\r
                </div>\r
                <div class="filter-item" [class.active]="statusFilter === 'resolved'" (click)="setFilter('resolved')">\r
                  {{ 'RECLAMATIONS_PAGE.RESOLVED' | translate }}\r
                </div>\r
              </div>\r
            </div>\r
            <div *ngIf="showModal" >\r
              <h4 class="form-header-title">{{ selectedReclamation?.subject }}</h4>\r
            </div>\r
            <h4 *ngIf="!showModal && !showNewReclamationModal">{{ activeTab ? ('RECLAMATIONS_PAGE.' + activeTab.toUpperCase() | translate) : ('RECLAMATIONS_PAGE.NEW_RECLAMATION' | translate) }}</h4>\r
            <h4 *ngIf="showNewReclamationModal" class="form-header-title">{{ 'RECLAMATIONS_PAGE.NEW_RECLAMATION' | translate }}</h4>\r
          </div>\r
          <div *ngIf="selectedReclamations.length > 0 && !showModal && !showNewReclamationModal" class="action-buttons">\r
            <button class="action-btn resolve-btn" (click)="markAsResolved()" [title]="'RECLAMATIONS_PAGE.MARK_AS_RESOLVED_TITLE' | translate">\r
              <i class="bi bi-check-circle"></i>\r
            </button>\r
            <button class="action-btn open-btn" (click)="markAsOpen()" [title]="'RECLAMATIONS_PAGE.MARK_AS_OPEN_TITLE' | translate">\r
              <i class="bi bi-arrow-counterclockwise"></i>\r
            </button>\r
            <button class="action-btn delete-btn" (click)="deleteSelected()" [title]="('RECLAMATIONS_PAGE.DELETE_TITLE' | translate) + ' (' + selectedReclamations.length + ')'">\r
              <i class="bi bi-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
        <div class="panel-body">\r
          <div *ngIf="!showNewReclamationModal && !showModal">\r
            <table class="reclamations-table" *ngIf="activeReclamations.length > 0">\r
              <thead>\r
                <tr>\r
                  <th class="checkbox-col">\r
                    <input type="checkbox" (change)="toggleSelectAll($event)" [checked]="isAllSelected()">\r
                  </th>\r
                  <th>{{ 'RECLAMATIONS_PAGE.PERSON' | translate }}</th>\r
                  <th>{{ 'RECLAMATIONS_PAGE.SUBJECT' | translate }}</th>\r
                  <th>{{ 'RECLAMATIONS_PAGE.CONTENT' | translate }}</th>\r
                  <th>{{ 'RECLAMATIONS_PAGE.DATE' | translate }}</th>\r
                  <th *ngIf="activeTab === 'inbox'">{{ 'RECLAMATIONS_PAGE.SEEN_BY_PARENT' | translate }}</th>\r
                  <th *ngIf="activeTab === 'sent'">{{ 'RECLAMATIONS_PAGE.STATUS' | translate }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let reclamation of activeReclamations" [class.resolved]="reclamation.isResolved">\r
                  <td class="checkbox-col" (click)="$event.stopPropagation()">\r
                    <input type="checkbox" [checked]="isSelected(reclamation)" (change)="toggleSelection(reclamation)">\r
                  </td>\r
                  <td class="person-cell" (click)="selectReclamation(reclamation)">{{ getUserName(activeTab === 'sent' ? reclamation.recipientId : reclamation.senderId) }}</td>\r
                  <td class="subject-cell" (click)="selectReclamation(reclamation)">{{ reclamation.subject }}</td>\r
                  <td class="content-cell" (click)="selectReclamation(reclamation)">{{ reclamation.content.substring(0, 50) }}{{ reclamation.content.length > 50 ? '...' : '' }}</td>\r
                  <td class="date-cell" (click)="selectReclamation(reclamation)">{{ formatDate(reclamation.sentAt) }}</td>\r
                  <td *ngIf="activeTab === 'inbox'" class="seen-cell" (click)="selectReclamation(reclamation)">\r
                    <span *ngIf="reclamation.isResolved" class="seen-badge" [class.seen]="reclamation.isReadByParent" [class.not-seen]="!reclamation.isReadByParent">\r
                      <i class="bi" [class.bi-eye]="reclamation.isReadByParent" [class.bi-eye-slash]="!reclamation.isReadByParent"></i>\r
                      {{ reclamation.isReadByParent ? ('RECLAMATIONS_PAGE.SEEN' | translate) : ('RECLAMATIONS_PAGE.NOT_SEEN' | translate) }}\r
                    </span>\r
                    <span *ngIf="!reclamation.isResolved" class="seen-badge pending">\r
                      <i class="bi bi-hourglass-split"></i>\r
                      {{ 'RECLAMATIONS_PAGE.PENDING_RESPONSE' | translate }}\r
                    </span>\r
                  </td>\r
                  <td *ngIf="activeTab === 'sent'" class="seen-cell" (click)="selectReclamation(reclamation)">\r
                    <span *ngIf="!reclamation.isResolved" class="seen-badge pending">\r
                      <i class="bi bi-hourglass-split"></i>\r
                      {{ 'RECLAMATIONS_PAGE.PENDING_RESPONSE' | translate }}\r
                    </span>\r
                    <span *ngIf="reclamation.isResolved && !reclamation.isReadByParent" class="seen-badge not-seen">\r
                      <i class="bi bi-eye-slash"></i>\r
                      {{ 'RECLAMATIONS_PAGE.NOT_SEEN' | translate }}\r
                    </span>\r
                    <span *ngIf="reclamation.isResolved && reclamation.isReadByParent" class="seen-badge seen">\r
                      <i class="bi bi-eye"></i>\r
                      {{ 'RECLAMATIONS_PAGE.SEEN' | translate }}\r
                    </span>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
            <div class="empty-state" *ngIf="activeReclamations.length === 0">\r
              <p class="empty-cell">{{ 'RECLAMATIONS_PAGE.NO_RECLAMATIONS' | translate }}</p>\r
            </div>\r
          </div>\r
          <div *ngIf="showModal && selectedReclamation" class="reclamation-details">\r
            <div class="detail-info-row">\r
              <div class="detail-info-left">\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'RECLAMATIONS_PAGE.FROM' | translate }}:</span>\r
                  <span class="info-value">{{ getUserName(selectedReclamation.senderId) }}</span>\r
                </div>\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'RECLAMATIONS_PAGE.TO' | translate }}:</span>\r
                  <span class="info-value">{{ getUserName(selectedReclamation.recipientId) }}</span>\r
                </div>\r
              </div>\r
              <div class="detail-info-right">\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'RECLAMATIONS_PAGE.DATE' | translate }}:</span>\r
                  <span class="info-value">{{ formatDate(selectedReclamation.sentAt) }}</span>\r
                </div>\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'RECLAMATIONS_PAGE.STATUS' | translate }}:</span>\r
                  <span class="status-badge" [class.open]="!selectedReclamation.isResolved" [class.resolved]="selectedReclamation.isResolved">\r
                    {{ selectedReclamation.isResolved ? ('RECLAMATIONS_PAGE.RESOLVED' | translate) : ('RECLAMATIONS_PAGE.OPEN' | translate) }}\r
                  </span>\r
                </div>\r
                <div class="info-item" *ngIf="activeTab === 'inbox' && selectedReclamation.isResolved">\r
                  <span class="info-label">{{ 'RECLAMATIONS_PAGE.SEEN_BY_PARENT' | translate }}:</span>\r
                  <span class="seen-badge" [class.seen]="selectedReclamation.isReadByParent" [class.not-seen]="!selectedReclamation.isReadByParent">\r
                    <i class="bi" [class.bi-eye]="selectedReclamation.isReadByParent" [class.bi-eye-slash]="!selectedReclamation.isReadByParent"></i>\r
                    {{ selectedReclamation.isReadByParent ? ('RECLAMATIONS_PAGE.SEEN' | translate) : ('RECLAMATIONS_PAGE.NOT_SEEN' | translate) }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="detail-content-section">\r
              <h5 class="section-title">{{ 'RECLAMATIONS_PAGE.MESSAGE' | translate }}</h5>\r
              <div class="content-box">\r
                {{ selectedReclamation.content }}\r
              </div>\r
            </div>\r
            <div class="detail-response-section" *ngIf="selectedReclamation.isResolved && selectedReclamation.response">\r
              <h5 class="section-title">{{ 'RECLAMATIONS_PAGE.RESPONSE' | translate }}</h5>\r
              <div class="response-box">\r
                {{ selectedReclamation.response }}\r
              </div>\r
            </div>\r
            <div class="detail-response-section" *ngIf="!selectedReclamation.isResolved && selectedReclamation.recipientId === currentUserId">\r
              <h5 class="section-title">{{ 'RECLAMATIONS_PAGE.RESPONSE_NOTE' | translate }}</h5>\r
              <textarea class="response-textarea" [placeholder]="'RECLAMATIONS_PAGE.ENTER_RESPONSE' | translate" [(ngModel)]="responseText"></textarea>\r
                  <div class="response-actions">\r
                    <div class="response-actions-left">\r
                      <button class="custom-btn-2 btn-add-global-2 replay" (click)="resolve()" [disabled]="!responseText.trim()">\r
                        <i class="bi bi-reply"></i> {{ 'RECLAMATIONS_PAGE.REPLY' | translate }}\r
                      </button>\r
                      <button class="custom-btn-2 btn-edit-global-2" (click)="resolve()" [disabled]="!responseText.trim()">\r
                        <i class="bi bi-check-circle"></i> {{ 'RECLAMATIONS_PAGE.MARK_AS_RESOLVED' | translate }}\r
                      </button>\r
                    </div>\r
                    <button class="custom-btn-2 btn-cancel-2" (click)="closeModal()">\r
                      <i class="bi bi-x-circle"></i> {{ 'RECLAMATIONS_PAGE.CANCEL' | translate }}\r
                    </button>\r
                  </div>\r
            </div>\r
          </div>\r
          <div *ngIf="showNewReclamationModal" class="new-reclamation-form">\r
            <div class="form-group" *ngIf="!authService.isParent()">\r
              <label class="form-label">{{ 'RECLAMATIONS_PAGE.RECIPIENT' | translate }}</label>\r
              <ng-select\r
                [(ngModel)]="newReclamation.recipientId"\r
                [items]="users"\r
                [placeholder]="'RECLAMATIONS_PAGE.SELECT_RECIPIENT' | translate"\r
                [clearable]="true"\r
                [searchable]="true"\r
                bindValue="id"\r
                bindLabel="name"\r
                class="form-ng-select">\r
                <ng-template ng-option-tmp let-item="item">\r
                  {{ item.name }} ({{ item.email }})\r
                </ng-template>\r
              </ng-select>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'RECLAMATIONS_PAGE.SUBJECT' | translate }}</label>\r
              <input type="text" class="form-input" [placeholder]="'RECLAMATIONS_PAGE.ENTER_SUBJECT' | translate" [(ngModel)]="newReclamation.subject" required>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'RECLAMATIONS_PAGE.CONTENT' | translate }}</label>\r
              <textarea class="form-textarea" [placeholder]="'RECLAMATIONS_PAGE.ENTER_MESSAGE' | translate" [(ngModel)]="newReclamation.content" required></textarea>\r
            </div>\r
            <div class="form-actions">\r
              <button class="btn-send" (click)="send()" [disabled]="(!authService.isParent() && !newReclamation.recipientId) || !newReclamation.subject.trim() || !newReclamation.content.trim()">\r
                <i class="bi bi-send"></i> {{ 'RECLAMATIONS_PAGE.SEND_RECLAMATION' | translate }}\r
              </button>\r
              <button class="btn-cancel" (click)="closeNewReclamationModal()">\r
                <i class="bi bi-x-circle"></i> {{ 'RECLAMATIONS_PAGE.CANCEL' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/reclamations/reclamations.component.scss */\nion-content.parent-reclamations {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-reclamations .inner-scroll {\n  display: block !important;\n}\n.panel {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n}\n.panel-header {\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-left h4 {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.form-header-title {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.header-checkbox {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  margin-left: 5px;\n}\n.filter-dropdown {\n  position: relative;\n}\n.filter-btn {\n  padding: 8px;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.filter-btn:hover {\n  background: #f8fafc;\n  border-color: #a8c5ff;\n}\n.filter-btn i {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 4px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  min-width: 140px;\n  z-index: 1000;\n  overflow: hidden;\n}\n.filter-item {\n  padding: 12px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #334155;\n  transition: all 0.2s;\n  font-weight: 500;\n}\n.filter-item:hover {\n  background: #f8fafc;\n}\n.filter-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n  color: #334155;\n  font-weight: 600;\n}\n.btn-add-global-2 {\n  min-width: 100% !important;\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.btn-add-global-2.replay {\n  min-width: 130px !important;\n}\n.btn-cancel-2 {\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.panel-body {\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n.reclamations-panel .panel-body {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.left-reclamation-title h4 {\n  font-size: 16px;\n  margin: 0;\n}\n.icon-btn {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.icon-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.empty {\n  padding: 8px;\n}\n.muted {\n  color: #64748b;\n}\n.reclamation-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.reclamations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 4px 2px;\n  overflow-y: auto;\n  flex: 1;\n}\n.reclamation-item {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n}\n.reclamation-item:hover {\n  background: #f8fafc;\n}\n.reclamation-item.active {\n  background: #eff6ff;\n  border-color: #dbeafe;\n}\n.reclamation-item.resolved {\n  opacity: 0.7;\n}\n.reclamation-subject {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.reclamation-content {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.reclamation-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.reclamation-date {\n  margin-right: 8px;\n}\n.reclamation-status {\n  font-weight: 500;\n}\n.reclamation-status.open {\n  color: #ea580c;\n}\n.reclamation-status.resolved {\n  color: #16a34a;\n}\n.reclamation-header {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reclamation-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.reclamation-sender,\n.reclamation-recipient {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.reclamation-date-full {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.reclamation-content-full {\n  flex: 1;\n  padding: 16px 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.response-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 16px;\n}\n.response-title {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.response-content {\n  background: #f1f5f9;\n  padding: 12px;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.input-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  margin-top: 12px;\n  flex-shrink: 0;\n}\n.input,\n.textarea {\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.textarea {\n  min-height: 200px;\n  resize: vertical;\n}\n.send {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  width: max-content;\n}\n.send:hover {\n  background: #1d4ed8;\n}\n.resolve {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n}\n.resolve:hover {\n  background: #15803d;\n}\n.sidebar-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.menu-item i {\n  font-size: 18px;\n  color: #64748b;\n}\n.menu-item span:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #0e567d;\n}\n.menu-item .badge {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  line-height: 1;\n  min-width: 1.5em;\n  text-align: center;\n}\n.menu-item:hover {\n  background: #f8fafc;\n}\n.menu-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.menu-item.active i {\n  color: #a8c5ff;\n}\n.menu-item.active span:first-of-type {\n  color: #0e567d;\n  font-weight: 600;\n}\n.menu-item.active .badge {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n}\n.menu-card-fixed {\n  position: sticky;\n  top: 20px;\n}\n.reclamations-table {\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%;\n}\n.reclamations-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n}\n.reclamations-table th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 14px;\n  color: #0e567d;\n  border-bottom: 2px solid #e2e8f0;\n}\n.checkbox-col {\n  width: 40px;\n  text-align: center;\n}\n.checkbox-col input[type=checkbox] {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 36px;\n  height: 36px;\n}\n.resolve-btn {\n  color: #16a34a;\n}\n.resolve-btn:hover {\n  background: #f0fdf4;\n  border-color: #16a34a;\n}\n.open-btn {\n  color: #ea580c;\n}\n.open-btn:hover {\n  background: #fff7ed;\n  border-color: #ea580c;\n}\n.delete-btn {\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.reclamations-table tbody {\n  display: block;\n  overflow-y: auto;\n  height: calc(100vh - 350px);\n}\n.reclamations-table thead,\n.reclamations-table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.reclamations-table tbody tr {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.reclamations-table tbody tr:hover {\n  background: #f8fafc;\n}\n.reclamations-table tbody tr.resolved {\n  opacity: 0.6;\n}\n.reclamations-table td {\n  padding: 12px;\n  font-size: 14px;\n}\n.person-cell {\n  color: #0f172a;\n}\n.subject-cell {\n  color: #334155;\n}\n.content-cell {\n  color: #64748b;\n}\n.date-cell {\n  color: #94a3b8;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.status-cell {\n  text-align: center;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.open {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-badge.resolved {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.empty-cell {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.new-reclamation-form {\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 320px);\n}\n.form-title {\n  color: #0e567d;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-label {\n  display: bl ock;\n  color: #0e567d;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.form-input,\n.form-textarea {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.form-textarea {\n  min-height: 180px;\n  resize: vertical;\n  font-family: inherit;\n}\n.form-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.btn-send {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-send:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4);\n}\n.btn-send:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-link {\n  color: #0e567d;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-size: 14px;\n}\n.breadcrumb-link:hover {\n  color: #a8c5ff;\n}\n.breadcrumb-nav i {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.breadcrumb-current {\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  font-size: 14px;\n}\n.reclamation-details {\n  padding: 5px 10px;\n}\n.detail-info-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.detail-info-left,\n.detail-info-right {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-label {\n  font-weight: 600;\n  color: #0e567d;\n  font-size: 14px;\n}\n.info-value {\n  color: #334155;\n  font-size: 14px;\n}\n.detail-content-section {\n  margin-bottom: 20px;\n}\n.detail-response-section {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n}\n.section-title {\n  color: #0e567d;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.content-box {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n  min-height: 120px;\n}\n.response-box {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n}\n.response-textarea {\n  width: 100%;\n  padding: 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  min-height: 120px;\n  resize: vertical;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.response-textarea:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.response-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.response-actions-left {\n  display: flex;\n  gap: 12px;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: block;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 9999;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  display: block;\n}\n.modal-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n  padding: 0;\n}\n.modal-close:hover {\n  color: #0f172a;\n}\n.modal-body {\n  padding: 20px;\n}\n::ng-deep .header-info {\n  margin-bottom: 35px !important;\n}\n::ng-deep .parent-menu {\n  display: none !important;\n}\n::ng-deep .float-btn {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  z-index: 9999;\n  background: #2563eb;\n  padding: 10px 14px;\n  border-radius: 8px;\n  color: #fff;\n}\n::ng-deep .image-name .name {\n  padding-bottom: 20px !important;\n}\n::ng-deep .swal-confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  border: none !important;\n  box-shadow: 0 2px 8px rgba(168, 197, 255, 0.3) !important;\n}\n::ng-deep .swal-confirm-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4) !important;\n}\n::ng-deep .swal-cancel-btn {\n  background: #fff !important;\n  color: #64748b !important;\n  border: 1px solid #e5e7eb !important;\n}\n::ng-deep .swal-cancel-btn:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n@media screen and (max-width: 768px) {\n  .panel {\n    height: 100%;\n    margin-bottom: 1rem;\n  }\n}\n.new-design {\n  background-color: #F5F5F5;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  padding-bottom: 80px;\n}\n.nd-unread-badge {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 6px 10px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-tab-bar {\n  display: flex;\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-tab {\n  flex: 1;\n  padding: 14px 8px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.nd-tab:hover {\n  color: #1DBAB4;\n  background-color: rgba(29, 186, 180, 0.05);\n}\n.nd-tab.active {\n  color: #1DBAB4;\n  font-weight: 600;\n  border-bottom-color: #1DBAB4;\n}\n.nd-filter-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-checkbox-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.nd-checkbox-container input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-checkbox-label {\n  font-size: 13px;\n  color: #2D3748;\n}\n.nd-filter-dropdown select {\n  padding: 6px 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #2D3748;\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n.nd-filter-dropdown select:focus {\n  outline: none;\n  border-color: #1DBAB4;\n}\n.nd-bulk-actions {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid;\n  background-color: transparent;\n}\n.nd-action-resolve {\n  color: #16a34a;\n  border-color: #16a34a;\n}\n.nd-action-resolve:hover {\n  background-color: rgba(22, 163, 74, 0.1);\n}\n.nd-action-open {\n  color: #ea580c;\n  border-color: #ea580c;\n}\n.nd-action-open:hover {\n  background-color: rgba(234, 88, 12, 0.1);\n}\n.nd-action-delete {\n  color: #EF4444;\n  border-color: #EF4444;\n}\n.nd-action-delete:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n.nd-message-list {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.nd-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.nd-empty-icon {\n  font-size: 64px;\n  color: rgba(107, 114, 128, 0.5);\n  margin-bottom: 16px;\n}\n.nd-empty-text {\n  font-size: 16px;\n  color: rgba(107, 114, 128, 0.7);\n  margin: 0;\n}\n.nd-message-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.nd-message-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.nd-message-card.unread {\n  background-color: #FEF3C7;\n}\n.nd-message-card.selected {\n  border-color: #1DBAB4;\n}\n.nd-card-checkbox {\n  padding-top: 2px;\n}\n.nd-card-checkbox input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-card-content {\n  flex: 1;\n  min-width: 0;\n}\n.nd-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.nd-card-sender {\n  font-size: 15px;\n  font-weight: 500;\n  color: #2D3748;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread .nd-card-sender {\n  font-weight: 700;\n}\n.nd-card-time {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.nd-unread-dot {\n  width: 8px;\n  height: 8px;\n  background-color: #ea580c;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.nd-unread-dot.nd-new-response-dot {\n  background-color: #16a34a;\n}\n.nd-card-response-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #16a34a;\n  background-color: #dcfce7;\n  border-radius: 10px;\n  padding: 2px 8px;\n}\n.nd-card-response-badge i {\n  font-size: 11px;\n}\n.nd-seen-indicator {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #6B7280;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.nd-seen-indicator i {\n  color: #16a34a;\n  font-size: 14px;\n}\n.nd-card-subject {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread .nd-card-subject {\n  font-weight: 600;\n}\n.nd-card-preview {\n  font-size: 13px;\n  color: #6B7280;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.nd-message-detail {\n  padding: 20px;\n}\n.nd-detail-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-avatar {\n  width: 48px;\n  height: 48px;\n  background-color: #E0F2FE;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1DBAB4;\n}\n.nd-detail-info {\n  flex: 1;\n}\n.nd-detail-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-detail-role {\n  font-size: 13px;\n  color: #6B7280;\n}\n.nd-detail-meta {\n  text-align: right;\n}\n.nd-detail-date {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.nd-detail-status {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.nd-detail-status.resolved {\n  background-color: #DCFCE7;\n  color: #16a34a;\n}\n.nd-detail-status.open {\n  background-color: #FEF3C7;\n  color: #ea580c;\n}\n.nd-detail-content-card {\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-subject {\n  font-size: 18px;\n  font-weight: 600;\n  color: #2D3748;\n  margin-bottom: 16px;\n}\n.nd-detail-body {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #2D3748;\n  white-space: pre-wrap;\n}\n.nd-replies-section {\n  margin-bottom: 16px;\n}\n.nd-section-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 12px 0;\n}\n.nd-reply-card {\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n}\n.nd-reply-card.own-reply {\n  background-color: #F0F9FF;\n  border-left: 4px solid #1DBAB4;\n}\n.nd-reply-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nd-reply-sender {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-reply-date {\n  font-size: 12px;\n  color: #6B7280;\n}\n.nd-reply-content {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #2D3748;\n}\n.nd-reply-input-section {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}\n.nd-reply-input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.nd-reply-textarea {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 24px;\n  background-color: #F5F5F5;\n  font-size: 14px;\n  resize: none;\n  min-height: 44px;\n  max-height: 120px;\n  font-family: "Poppins", sans-serif;\n}\n.nd-reply-textarea:focus {\n  outline: none;\n}\n.nd-reply-textarea::placeholder {\n  color: rgba(107, 114, 128, 0.7);\n}\n.nd-send-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.nd-send-btn:hover:not(:disabled) {\n  background-color: #19a8a3;\n}\n.nd-send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: transparent;\n  border: none;\n  color: #6B7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 80px;\n}\n.nd-back-btn:hover {\n  color: #2D3748;\n}\n.nd-compose-view {\n  padding: 20px;\n}\n.nd-compose-card {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.nd-compose-field {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-field-icon {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #1DBAB4 0%,\n      #7DD3C0 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-right: 12px;\n}\n.nd-field-icon i {\n  padding: 10px;\n}\n.nd-field-input {\n  flex: 1;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  font-family: "Poppins", sans-serif;\n}\n.nd-field-input:focus {\n  outline: none;\n}\n.nd-field-input::placeholder {\n  color: #9CA3AF;\n}\n.nd-field-text {\n  font-size: 14px;\n  color: #2D3748;\n  font-weight: 500;\n}\n.nd-compose-textarea-container {\n  padding: 16px;\n}\n.nd-compose-textarea {\n  width: 100%;\n  min-height: 200px;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  resize: vertical;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.6;\n}\n.nd-compose-textarea:focus {\n  outline: none;\n}\n.nd-compose-textarea::placeholder {\n  color: #9CA3AF;\n}\n.nd-compose-actions {\n  display: flex;\n  gap: 12px;\n}\n.nd-cancel-btn {\n  flex: 1;\n  padding: 14px;\n  background-color: #FFFFFF;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nd-cancel-btn:hover {\n  background-color: #F5F5F5;\n  border-color: #CBD5E1;\n}\n.nd-submit-btn {\n  flex: 1;\n  padding: 14px;\n  background: var(--gradient-primary);\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(155, 107, 204, 0.3);\n}\n.nd-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(155, 107, 204, 0.4);\n}\n.nd-submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-fab {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 186, 180, 0.4);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.nd-fab:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(29, 186, 180, 0.5);\n}\n/*# sourceMappingURL=reclamations.component.css.map */\n'] }]
  }], () => [{ type: ReclamationsService }, { type: AuthService }, { type: PageTitleService }, { type: TranslateService }, { type: ActivatedRoute }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReclamationsComponent, { className: "ReclamationsComponent", filePath: "src/app/features/reclamations/reclamations.component.ts", lineNumber: 22 });
})();
export {
  ReclamationsComponent
};
//# sourceMappingURL=chunk-AHS7RCFA.js.map
