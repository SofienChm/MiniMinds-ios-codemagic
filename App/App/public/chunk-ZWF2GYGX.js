import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  SkeletonComponent
} from "./chunk-Z37IA3IJ.js";
import {
  MessagesService
} from "./chunk-5GNI2KYS.js";
import {
  NotificationService
} from "./chunk-PPPAYIKG.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
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
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import "./chunk-7KUBODN6.js";
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
} from "./chunk-2FXTNIWG.js";
import {
  ActivatedRoute
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf,
  TitleCasePipe
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/messages/messages.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function MessagesComponent_ion_content_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "label", 17)(3, "input", 18);
    \u0275\u0275listener("change", function MessagesComponent_ion_content_0_div_22_Template_input_change_3_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function MessagesComponent_ion_content_0_div_22_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function MessagesComponent_ion_content_0_div_22_Template_select_change_9_listener() {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "MESSAGES_PAGE.SELECT_ALL"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "MESSAGES_PAGE.ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "MESSAGES_PAGE.UNREAD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "MESSAGES_PAGE.READ"));
  }
}
function MessagesComponent_ion_content_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsRead());
    });
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsUnread());
    });
    \u0275\u0275element(7, "i", 30);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 31);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_23_Template_button_click_11_listener() {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "MESSAGES_PAGE.MARK_AS_READ"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "MESSAGES_PAGE.MARK_AS_UNREAD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 7, "MESSAGES_PAGE.DELETE"));
  }
}
function MessagesComponent_ion_content_0_div_24_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "app-skeleton", 39);
    \u0275\u0275elementStart(3, "div", 40)(4, "div", 41);
    \u0275\u0275element(5, "app-skeleton", 39)(6, "app-skeleton", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-skeleton", 42)(8, "app-skeleton", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("height", 20)("width", "20px");
    \u0275\u0275advance(3);
    \u0275\u0275property("height", 16)("width", "40%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "15%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 18)("width", "70%");
    \u0275\u0275advance();
    \u0275\u0275property("height", 14)("width", "90%");
  }
}
function MessagesComponent_ion_content_0_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MessagesComponent_ion_content_0_div_24_div_1_div_1_Template, 9, 10, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function MessagesComponent_ion_content_0_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "MESSAGES_PAGE.NO_MESSAGES"));
  }
}
function MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_Template_div_click_0_listener() {
      const message_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r6));
    });
    \u0275\u0275elementStart(1, "div", 48);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 18);
    \u0275\u0275listener("change", function MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_Template_input_change_2_listener() {
      const message_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(message_r6));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 49)(4, "div", 50)(5, "span", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_span_9_Template, 1, 0, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("unread", !message_r6.isRead)("selected", ctx_r1.isSelected(message_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(message_r6));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? message_r6.recipientName : message_r6.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(message_r6.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !message_r6.isRead && ctx_r1.activeTab !== "sent");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r6.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", message_r6.content.substring(0, 80), "", message_r6.content.length > 80 ? "..." : "");
  }
}
function MessagesComponent_ion_content_0_div_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MessagesComponent_ion_content_0_div_24_ng_container_3_div_1_Template, 14, 11, "div", 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredMessages);
  }
}
function MessagesComponent_ion_content_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, MessagesComponent_ion_content_0_div_24_div_1_Template, 2, 2, "div", 34)(2, MessagesComponent_ion_content_0_div_24_div_2_Template, 5, 3, "div", 35)(3, MessagesComponent_ion_content_0_div_24_ng_container_3_Template, 2, 1, "ng-container", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.filteredMessages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
  }
}
function MessagesComponent_ion_content_0_div_25_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "span", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("own-reply", reply_r8.senderId === ctx_r1.currentUserId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reply_r8.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(reply_r8.sentAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r8.content);
  }
}
function MessagesComponent_ion_content_0_div_25_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "h3", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MessagesComponent_ion_content_0_div_25_div_23_div_4_Template, 8, 5, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "MESSAGES_PAGE.REPLIES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedMessage.replies);
  }
}
function MessagesComponent_ion_content_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 60)(5, "div", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 63)(12, "div", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 65);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 66)(19, "div", 67);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 68);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, MessagesComponent_ion_content_0_div_25_div_23_Template, 5, 4, "div", 69);
    \u0275\u0275elementStart(24, "div", 70)(25, "div", 71)(26, "textarea", 72);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_ion_content_0_div_25_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.replyText = $event);
    })("input", function MessagesComponent_ion_content_0_div_25_Template_textarea_input_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.replyText = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 73);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_25_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275element(29, "i", 74);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 75);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_25_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(31, "i", 76);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.activeTab === "sent" ? ctx_r1.selectedMessage.recipientName : ctx_r1.selectedMessage.senderName) == null ? null : (ctx_r1.activeTab === "sent" ? ctx_r1.selectedMessage.recipientName : ctx_r1.selectedMessage.senderName).charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? ctx_r1.selectedMessage.recipientName : ctx_r1.selectedMessage.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? \u0275\u0275pipeBind1(9, 16, "MESSAGES_PAGE.TO") : \u0275\u0275pipeBind1(10, 18, "MESSAGES_PAGE.FROM"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedMessage.sentAt));
    \u0275\u0275advance();
    \u0275\u0275classProp("read", ctx_r1.selectedMessage.isRead)("unread", !ctx_r1.selectedMessage.isRead);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMessage.isRead ? \u0275\u0275pipeBind1(16, 20, "MESSAGES_PAGE.READ") : \u0275\u0275pipeBind1(17, 22, "MESSAGES_PAGE.UNREAD"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedMessage.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedMessage.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedMessage.replies == null ? null : ctx_r1.selectedMessage.replies.length) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(27, 24, "MESSAGES_PAGE.WRITE_REPLY"))("ngModel", ctx_r1.replyText);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.replyText.trim());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 26, "MESSAGES_PAGE.BACK"), " ");
  }
}
function MessagesComponent_ion_content_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "div", 88);
    \u0275\u0275element(4, "i", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 90);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 87)(9, "div", 88);
    \u0275\u0275element(10, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 92);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_ion_content_0_div_26_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.subject = $event);
    })("input", function MessagesComponent_ion_content_0_div_26_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.subject = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 93)(14, "textarea", 94);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_ion_content_0_div_26_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.content = $event);
    })("input", function MessagesComponent_ion_content_0_div_26_Template_textarea_input_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.content = $event.target.value);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 95)(17, "button", 96);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_26_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNewMessageModal());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 97);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_div_26_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "MESSAGES_PAGE.TO_DAYCARE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 10, "MESSAGES_PAGE.ENTER_SUBJECT"))("ngModel", ctx_r1.composeForm.subject);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 12, "MESSAGES_PAGE.ENTER_MESSAGE"))("ngModel", ctx_r1.composeForm.content);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "MESSAGES_PAGE.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.composeForm.content.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "MESSAGES_PAGE.SEND_MESSAGE"), " ");
  }
}
function MessagesComponent_ion_content_0_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openNewMessageModal());
    });
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275elementEnd();
  }
}
function MessagesComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "ion-refresher", 3);
    \u0275\u0275listener("ionRefresh", function MessagesComponent_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
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
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("received"));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("sent"));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("important"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 8);
    \u0275\u0275listener("click", function MessagesComponent_ion_content_0_Template_div_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("trash"));
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, MessagesComponent_ion_content_0_div_22_Template, 19, 14, "div", 9)(23, MessagesComponent_ion_content_0_div_23_Template, 16, 9, "div", 10)(24, MessagesComponent_ion_content_0_div_24_Template, 4, 3, "div", 11)(25, MessagesComponent_ion_content_0_div_25_Template, 34, 28, "div", 12)(26, MessagesComponent_ion_content_0_div_26_Template, 23, 18, "div", 13)(27, MessagesComponent_ion_content_0_button_27_Template, 2, 0, "button", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 21, "MESSAGES_PAGE.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.getUnreadCount(), " ", \u0275\u0275pipeBind1(8, 23, "MESSAGES_PAGE.UNREAD"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "received");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 25, "MESSAGES_PAGE.INBOX"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "sent");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 27, "MESSAGES_PAGE.SENT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "important");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 29, "MESSAGES_PAGE.IMPORTANT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "trash");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 31, "MESSAGES_PAGE.TRASH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeMessages.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMessages.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showModal && !ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal && ctx_r1.selectedMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showNewMessageModal && !ctx_r1.showModal);
  }
}
function MessagesComponent_div_1_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 126);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_43_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("all"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 126);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_43_div_3_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("unread"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 126);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_43_div_3_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setFilter("read"));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "MESSAGES_PAGE.ALL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.statusFilter === "unread");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, "MESSAGES_PAGE.UNREAD"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.statusFilter === "read");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 13, "MESSAGES_PAGE.READ"), " ");
  }
}
function MessagesComponent_div_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "button", 122);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_43_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFilterMenu());
    });
    \u0275\u0275element(2, "i", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MessagesComponent_div_1_div_43_div_3_Template, 10, 15, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.showFilterMenu);
  }
}
function MessagesComponent_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedMessage == null ? null : ctx_r1.selectedMessage.subject);
  }
}
function MessagesComponent_div_1_h4_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "received" ? \u0275\u0275pipeBind1(2, 1, "MESSAGES_PAGE.INBOX") : ctx_r1.activeTab === "sent" ? \u0275\u0275pipeBind1(3, 3, "MESSAGES_PAGE.SENT") : \u0275\u0275pipeBind1(4, 5, ctx_r1.activeTab));
  }
}
function MessagesComponent_div_1_h4_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 127);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "MESSAGES_PAGE.NEW_MESSAGE"));
  }
}
function MessagesComponent_div_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "button", 129);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsRead());
    });
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 130);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markAsUnread());
    });
    \u0275\u0275element(6, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 131);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_47_Template_button_click_7_listener() {
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
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 3, "MESSAGES_PAGE.MARK_AS_READ"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 5, "MESSAGES_PAGE.MARK_AS_UNREAD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 7, "MESSAGES_PAGE.DELETE") + " (" + ctx_r1.selectedMessages.length + ")");
  }
}
function MessagesComponent_div_1_div_49_table_1_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "MESSAGES_PAGE.SEEN"));
  }
}
function MessagesComponent_div_1_div_49_table_1_tr_20_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 143);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_td_11_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const message_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r17));
    });
    \u0275\u0275elementStart(1, "span", 144);
    \u0275\u0275element(2, "i", 145);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("seen", message_r17.isRead)("not-seen", !message_r17.isRead);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-eye", message_r17.isRead)("bi-eye-slash", !message_r17.isRead);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", message_r17.isRead ? \u0275\u0275pipeBind1(4, 9, "MESSAGES_PAGE.SEEN") : \u0275\u0275pipeBind1(5, 11, "MESSAGES_PAGE.NOT_SEEN"), " ");
  }
}
function MessagesComponent_div_1_div_49_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 137);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 18);
    \u0275\u0275listener("change", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_input_change_2_listener() {
      const message_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(message_r17));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 138);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_td_click_3_listener() {
      const message_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r17));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 139);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_td_click_5_listener() {
      const message_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r17));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 140);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_td_click_7_listener() {
      const message_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r17));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 141);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_49_table_1_tr_20_Template_td_click_9_listener() {
      const message_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectMessage(message_r17));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MessagesComponent_div_1_div_49_table_1_tr_20_td_11_Template, 6, 13, "td", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("unread", !message_r17.isRead);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.isSelected(message_r17));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? message_r17.recipientName : message_r17.senderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r17.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", message_r17.content.substring(0, 50), "", message_r17.content.length > 50 ? "..." : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(message_r17.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent");
  }
}
function MessagesComponent_div_1_div_49_table_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 134)(1, "thead")(2, "tr")(3, "th", 135)(4, "input", 18);
    \u0275\u0275listener("change", function MessagesComponent_div_1_div_49_table_1_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MessagesComponent_div_1_div_49_table_1_th_18_Template, 3, 3, "th", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, MessagesComponent_div_1_div_49_table_1_tr_20_Template, 12, 9, "tr", 136);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.activeTab === "sent" ? \u0275\u0275pipeBind1(7, 7, "MESSAGES_PAGE.TO") : \u0275\u0275pipeBind1(8, 9, "MESSAGES_PAGE.FROM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "MESSAGES_PAGE.SUBJECT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "MESSAGES_PAGE.CONTENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "MESSAGES_PAGE.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "sent");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredMessages);
  }
}
function MessagesComponent_div_1_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "p", 147);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "MESSAGES_PAGE.NO_MESSAGES"));
  }
}
function MessagesComponent_div_1_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, MessagesComponent_div_1_div_49_table_1_Template, 21, 17, "table", 132)(2, MessagesComponent_div_1_div_49_div_2_Template, 4, 3, "div", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeMessages.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeMessages.length === 0);
  }
}
function MessagesComponent_div_1_div_50_div_37_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reply_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("my-message", reply_r20.senderId === ctx_r1.currentUserId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", reply_r20.senderName, " - ", ctx_r1.formatDate(reply_r20.sentAt));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reply_r20.content, " ");
  }
}
function MessagesComponent_div_1_div_50_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160)(1, "h5", 157);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MessagesComponent_div_1_div_50_div_37_div_4_Template, 4, 5, "div", 168);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "MESSAGES_PAGE.REPLIES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedMessage.replies);
  }
}
function MessagesComponent_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 149)(2, "div", 150)(3, "div", 151)(4, "span", 152);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 153);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 151)(10, "span", 152);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 153);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 154)(16, "div", 151)(17, "span", 152);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 153);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 151)(23, "span", 152);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 155);
    \u0275\u0275element(27, "i", 145);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 156)(32, "h5", 157);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 158);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, MessagesComponent_div_1_div_50_div_37_Template, 5, 4, "div", 159);
    \u0275\u0275elementStart(38, "div", 160)(39, "h5", 157);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 161);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_div_1_div_50_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.replyText = $event);
    })("input", function MessagesComponent_div_1_div_50_Template_textarea_input_42_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.replyText = $event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 162)(45, "div", 163)(46, "button", 164);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_50_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendReply());
    });
    \u0275\u0275element(47, "i", 165);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 166);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_50_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(51, "i", 167);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 25, "MESSAGES_PAGE.FROM"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMessage.senderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 27, "MESSAGES_PAGE.TO"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMessage.recipientName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 29, "MESSAGES_PAGE.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedMessage.sentAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 31, "MESSAGES_PAGE.STATUS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("unread", !ctx_r1.selectedMessage.isRead)("read", ctx_r1.selectedMessage.isRead);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-eye", ctx_r1.selectedMessage.isRead)("bi-eye-slash", !ctx_r1.selectedMessage.isRead);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMessage.isRead ? \u0275\u0275pipeBind1(29, 33, "MESSAGES_PAGE.SEEN") : \u0275\u0275pipeBind1(30, 35, "MESSAGES_PAGE.NOT_SEEN"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 37, "MESSAGES_PAGE.MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMessage.content, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedMessage.replies == null ? null : ctx_r1.selectedMessage.replies.length) > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 39, "MESSAGES_PAGE.REPLY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 41, "MESSAGES_PAGE.WRITE_REPLY"))("ngModel", ctx_r1.replyText);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.replyText.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 43, "MESSAGES_PAGE.SEND_REPLY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 45, "MESSAGES_PAGE.CANCEL"), " ");
  }
}
function MessagesComponent_div_1_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173)(1, "label", 174);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 180);
    \u0275\u0275twoWayListener("ngModelChange", function MessagesComponent_div_1_div_51_div_1_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.composeForm.recipientType, $event) || (ctx_r1.composeForm.recipientType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 181);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "MESSAGES_PAGE.RECIPIENT_TYPE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.composeForm.recipientType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "MESSAGES_PAGE.INDIVIDUAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "MESSAGES_PAGE.ALL_USERS"));
  }
}
function MessagesComponent_div_1_div_51_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173)(1, "label", 174);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ng-select", 182);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function MessagesComponent_div_1_div_51_div_2_Template_ng_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.composeForm.recipientId, $event) || (ctx_r1.composeForm.recipientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "MESSAGES_PAGE.RECIPIENT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.composeForm.recipientId);
    \u0275\u0275property("items", ctx_r1.groupedRecipients)("placeholder", \u0275\u0275pipeBind1(5, 8, "MESSAGES_PAGE.SELECT_RECIPIENT"))("clearable", true)("searchable", true);
  }
}
function MessagesComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275template(1, MessagesComponent_div_1_div_51_div_1_Template, 11, 10, "div", 172)(2, MessagesComponent_div_1_div_51_div_2_Template, 6, 10, "div", 172);
    \u0275\u0275elementStart(3, "div", 173)(4, "label", 174);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 175);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_div_1_div_51_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.subject = $event);
    })("input", function MessagesComponent_div_1_div_51_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.subject = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 173)(10, "label", 174);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 176);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ngModelChange", function MessagesComponent_div_1_div_51_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.content = $event);
    })("input", function MessagesComponent_div_1_div_51_Template_textarea_input_13_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.composeForm.content = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 177)(16, "button", 178);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_51_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275element(17, "i", 74);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 179);
    \u0275\u0275listener("click", function MessagesComponent_div_1_div_51_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeNewMessageModal());
    });
    \u0275\u0275element(21, "i", 167);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.composeForm.recipientType === "individual");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "MESSAGES_PAGE.SUBJECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 13, "MESSAGES_PAGE.ENTER_SUBJECT"))("ngModel", ctx_r1.composeForm.subject);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "MESSAGES_PAGE.CONTENT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 17, "MESSAGES_PAGE.ENTER_MESSAGE"))("ngModel", ctx_r1.composeForm.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.composeForm.recipientType === "individual" && !ctx_r1.composeForm.recipientId || !ctx_r1.composeForm.content.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, "MESSAGES_PAGE.SEND_MESSAGE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 21, "MESSAGES_PAGE.CANCEL"), " ");
  }
}
function MessagesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "div", 103)(4, "div", 104)(5, "button", 105);
    \u0275\u0275listener("click", function MessagesComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewMessageModal());
    });
    \u0275\u0275element(6, "i", 106);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 107)(10, "div", 108)(11, "div", 109);
    \u0275\u0275listener("click", function MessagesComponent_div_1_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("received"));
    });
    \u0275\u0275element(12, "i", 110);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 111);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 109);
    \u0275\u0275listener("click", function MessagesComponent_div_1_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("sent"));
    });
    \u0275\u0275element(19, "i", 74);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 111);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 109);
    \u0275\u0275listener("click", function MessagesComponent_div_1_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("important"));
    });
    \u0275\u0275element(26, "i", 112);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 111);
    \u0275\u0275text(31, "0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 109);
    \u0275\u0275listener("click", function MessagesComponent_div_1_Template_div_click_32_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("trash"));
    });
    \u0275\u0275element(33, "i", 32);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 111);
    \u0275\u0275text(38, "0");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(39, "div", 113)(40, "div", 114)(41, "div", 104)(42, "div", 115);
    \u0275\u0275template(43, MessagesComponent_div_1_div_43_Template, 4, 1, "div", 116)(44, MessagesComponent_div_1_div_44_Template, 3, 1, "div", 34)(45, MessagesComponent_div_1_h4_45_Template, 5, 7, "h4", 34)(46, MessagesComponent_div_1_h4_46_Template, 3, 3, "h4", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, MessagesComponent_div_1_div_47_Template, 10, 9, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 107);
    \u0275\u0275template(49, MessagesComponent_div_1_div_49_Template, 3, 2, "div", 34)(50, MessagesComponent_div_1_div_50_Template, 54, 47, "div", 119)(51, MessagesComponent_div_1_div_51_Template, 24, 23, "div", 120);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 23, "MESSAGES_PAGE.NEW_MESSAGE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "received");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 25, "MESSAGES_PAGE.INBOX"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.inbox.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "sent");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 27, "MESSAGES_PAGE.SENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.sent.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "important");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 29, "MESSAGES_PAGE.IMPORTANT"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "trash");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 31, "MESSAGES_PAGE.TRASH"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.activeMessages.length > 0 && !ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showModal && !ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewMessageModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMessages.length > 0 && !ctx_r1.showModal && !ctx_r1.showNewMessageModal);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.showNewMessageModal && !ctx_r1.showModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showModal && ctx_r1.selectedMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNewMessageModal);
  }
}
var MessagesComponent = class _MessagesComponent {
  messagesService;
  authService;
  location;
  pageTitleService;
  notificationService;
  route;
  translateService;
  simpleToastService;
  destroy$ = new Subject();
  activeTab = "received";
  inbox = [];
  sent = [];
  selectedMessage = null;
  isAdmin = false;
  currentUserId = "";
  showNewMessageModal = false;
  showModal = false;
  selectedMessages = [];
  statusFilter = "all";
  showFilterMenu = false;
  replyText = "";
  loading = true;
  composeForm = {
    recipientType: "individual",
    recipientId: "",
    subject: "",
    content: ""
  };
  recipients = { parents: [], teachers: [] };
  groupedRecipients = [];
  get activeMessages() {
    switch (this.activeTab) {
      case "received":
        return this.inbox;
      case "sent":
        return this.sent;
      case "important":
        return [];
      case "trash":
        return [];
      default:
        return [];
    }
  }
  get filteredMessages() {
    return this.filterByStatus(this.activeMessages);
  }
  back() {
    this.location.back();
  }
  constructor(messagesService, authService, location, pageTitleService, notificationService, route, translateService, simpleToastService) {
    this.messagesService = messagesService;
    this.authService = authService;
    this.location = location;
    this.pageTitleService = pageTitleService;
    this.notificationService = notificationService;
    this.route = route;
    this.translateService = translateService;
    this.simpleToastService = simpleToastService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translateService.instant("MESSAGES_PAGE.TITLE"));
    this.currentUserId = this.getCurrentUserId();
    this.isAdmin = this.getUserRole() === "Admin";
    this.loadInbox();
    this.loadSent();
    if (this.isAdmin) {
      this.loadRecipients();
    }
    this.notificationService.messageUnreadCount$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadInbox();
    });
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const messageId = params["id"];
      if (messageId) {
        this.openMessageById(parseInt(messageId, 10));
      }
    });
  }
  openMessageById(messageId) {
    this.messagesService.getMessage(messageId).subscribe({
      next: (data) => {
        this.selectedMessage = data;
        this.showModal = true;
        this.showNewMessageModal = false;
        const inboxMessage = this.inbox.find((m) => m.id === messageId);
        if (inboxMessage) {
          inboxMessage.isRead = true;
        }
      },
      error: (err) => console.error("Error loading message:", err)
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
  getUserRole() {
    const token = localStorage.getItem("token");
    if (!token)
      return "";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || "";
    } catch {
      return "";
    }
  }
  loadInbox() {
    this.messagesService.getInbox().subscribe({
      next: (messages) => {
        this.inbox = messages;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading inbox:", err);
        this.loading = false;
      }
    });
  }
  loadSent() {
    this.messagesService.getSent().subscribe({
      next: (messages) => {
        this.sent = messages;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading sent:", err);
        this.loading = false;
      }
    });
  }
  loadRecipients() {
    this.messagesService.getRecipients().subscribe({
      next: (data) => {
        this.recipients = data;
        this.buildGroupedRecipients();
      },
      error: (err) => console.error("Error loading recipients:", err)
    });
  }
  buildGroupedRecipients() {
    const parentsLabel = this.translateService.instant("MESSAGES_PAGE.PARENTS");
    const teachersLabel = this.translateService.instant("MESSAGES_PAGE.TEACHERS");
    const parents = this.recipients.parents.map((p) => ({
      id: p.id,
      name: p.name,
      email: p.email,
      displayName: `${p.name} (${p.email})`,
      group: parentsLabel
    }));
    const teachers = this.recipients.teachers.map((t) => ({
      id: t.id,
      name: t.name,
      email: t.email,
      displayName: `${t.name} (${t.email})`,
      group: teachersLabel
    }));
    this.groupedRecipients = [...parents, ...teachers];
  }
  switchTab(tab) {
    if (this.showNewMessageModal && this.hasFormData()) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("MESSAGES_PAGE.UNSAVED_DATA_TITLE"),
        text: this.translateService.instant("MESSAGES_PAGE.UNSAVED_DATA_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0e567d",
        cancelButtonColor: "#e5e7eb",
        confirmButtonText: this.translateService.instant("MESSAGES_PAGE.YES_LEAVE"),
        cancelButtonText: this.translateService.instant("MESSAGES_PAGE.CANCEL"),
        customClass: {
          confirmButton: "swal-confirm-btn",
          cancelButton: "swal-cancel-btn"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetComposeForm();
          this.activeTab = tab;
          this.showNewMessageModal = false;
          this.showModal = false;
          this.selectedMessage = null;
        }
      });
    } else {
      this.activeTab = tab;
      this.showNewMessageModal = false;
      this.showModal = false;
      this.selectedMessage = null;
    }
    if (tab === "received")
      this.loadInbox();
    if (tab === "sent")
      this.loadSent();
  }
  selectMessage(message) {
    this.messagesService.getMessage(message.id).subscribe({
      next: (data) => {
        this.selectedMessage = data;
        this.showModal = true;
        this.showNewMessageModal = false;
        const inboxMessage = this.inbox.find((m) => m.id === message.id);
        if (inboxMessage) {
          inboxMessage.isRead = true;
        }
      },
      error: (err) => console.error("Error loading message:", err)
    });
  }
  resetComposeForm() {
    this.composeForm = {
      recipientType: "individual",
      recipientId: "",
      subject: "",
      content: ""
    };
  }
  hasFormData() {
    return this.composeForm.subject.trim() !== "" || this.composeForm.content.trim() !== "";
  }
  sendMessage() {
    if (!this.composeForm.content)
      return;
    this.messagesService.sendMessage(this.composeForm).subscribe({
      next: () => {
        this.resetComposeForm();
        this.closeNewMessageModal();
        this.loadSent();
        this.activeTab = "sent";
        this.simpleToastService.success(this.translateService.instant("MESSAGES_PAGE.MESSAGE_SENT_SUCCESS"));
      },
      error: (err) => {
        console.error("Error sending message:", err);
        this.simpleToastService.error(this.translateService.instant("MESSAGES_PAGE.MESSAGE_SEND_FAILED"));
      }
    });
  }
  sendReply() {
    if (!this.replyText.trim() || !this.selectedMessage)
      return;
    const replyData = {
      recipientType: "individual",
      recipientId: this.selectedMessage.senderId,
      subject: "Re: " + this.selectedMessage.subject,
      content: this.replyText,
      parentMessageId: this.selectedMessage.id
    };
    this.messagesService.sendMessage(replyData).subscribe({
      next: () => {
        this.replyText = "";
        this.loadInbox();
        this.loadSent();
        if (this.selectedMessage) {
          this.messagesService.getMessage(this.selectedMessage.id).subscribe({
            next: (message) => this.selectedMessage = message,
            error: (err) => console.error("Error reloading message:", err)
          });
        }
        this.simpleToastService.success(this.translateService.instant("MESSAGES_PAGE.REPLY_SENT_SUCCESS"));
      },
      error: (err) => {
        console.error("Error sending reply:", err);
        this.simpleToastService.error(this.translateService.instant("MESSAGES_PAGE.reply_send_failed"));
      }
    });
  }
  reply() {
    this.composeForm = {
      recipientType: "individual",
      recipientId: this.selectedMessage.senderId,
      subject: "Re: " + this.selectedMessage.subject,
      content: ""
    };
    this.closeModal();
    if (this.isParent) {
      this.openNewMessageModal();
    }
  }
  getRecipientsList() {
    return [...this.recipients.parents, ...this.recipients.teachers];
  }
  get isParent() {
    return this.authService.isParent();
  }
  openNewMessageModal() {
    this.showNewMessageModal = true;
    this.showModal = false;
    this.selectedMessage = null;
  }
  closeNewMessageModal() {
    if (this.hasFormData()) {
      import_sweetalert2.default.fire({
        title: this.translateService.instant("MESSAGES_PAGE.UNSAVED_DATA_TITLE"),
        text: this.translateService.instant("MESSAGES_PAGE.UNSAVED_DATA_CLOSE_TEXT"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0e567d",
        cancelButtonColor: "#e5e7eb",
        confirmButtonText: this.translateService.instant("MESSAGES_PAGE.YES_CLOSE"),
        cancelButtonText: this.translateService.instant("MESSAGES_PAGE.CANCEL"),
        customClass: {
          confirmButton: "swal-confirm-btn",
          cancelButton: "swal-cancel-btn"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.resetComposeForm();
          this.showNewMessageModal = false;
          this.activeTab = "received";
        }
      });
    } else {
      this.showNewMessageModal = false;
      this.activeTab = "received";
    }
  }
  closeModal() {
    this.showModal = false;
    this.selectedMessage = null;
    this.replyText = "";
    this.activeTab = "received";
  }
  formatDate(date) {
    if (!date)
      return "";
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  // Filter methods
  filterByStatus(messages) {
    if (this.statusFilter === "all")
      return messages;
    if (this.statusFilter === "unread")
      return messages.filter((m) => !m.isRead);
    if (this.statusFilter === "read")
      return messages.filter((m) => m.isRead);
    return messages;
  }
  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }
  setFilter(filter) {
    this.statusFilter = filter;
    this.showFilterMenu = false;
    this.selectedMessages = [];
  }
  // Selection methods
  toggleSelection(message) {
    const index = this.selectedMessages.findIndex((m) => m.id === message.id);
    if (index > -1) {
      this.selectedMessages.splice(index, 1);
    } else {
      this.selectedMessages.push(message);
    }
  }
  isSelected(message) {
    return this.selectedMessages.some((m) => m.id === message.id);
  }
  toggleSelectAll(event) {
    if (event.target.checked) {
      this.selectedMessages = [...this.filteredMessages];
    } else {
      this.selectedMessages = [];
    }
  }
  isAllSelected() {
    return this.filteredMessages.length > 0 && this.selectedMessages.length === this.filteredMessages.length;
  }
  // Bulk actions
  deleteSelected() {
    if (this.selectedMessages.length === 0)
      return;
    import_sweetalert2.default.fire({
      title: this.translateService.instant("MESSAGES_PAGE.DELETE_MESSAGES_TITLE"),
      text: this.translateService.instant("MESSAGES_PAGE.DELETE_MESSAGES_TEXT", { count: this.selectedMessages.length }),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0e567d",
      cancelButtonColor: "#e5e7eb",
      confirmButtonText: this.translateService.instant("MESSAGES_PAGE.YES_DELETE"),
      cancelButtonText: this.translateService.instant("MESSAGES_PAGE.CANCEL"),
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleting:", this.selectedMessages);
        this.selectedMessages = [];
      }
    });
  }
  markAsRead() {
    if (this.selectedMessages.length === 0)
      return;
    console.log("Marking as read:", this.selectedMessages);
    this.selectedMessages.forEach((msg) => msg.isRead = true);
    this.selectedMessages = [];
  }
  markAsUnread() {
    if (this.selectedMessages.length === 0)
      return;
    console.log("Marking as unread:", this.selectedMessages);
    this.selectedMessages.forEach((msg) => msg.isRead = false);
    this.selectedMessages = [];
  }
  getUnreadCount() {
    return this.inbox.filter((m) => !m.isRead).length;
  }
  // Pull-to-refresh handler for Ionic refresher
  onRefresh(event) {
    this.loadInbox();
    this.loadSent();
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  static \u0275fac = function MessagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesComponent)(\u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesComponent, selectors: [["app-messages"]], decls: 2, vars: 2, consts: [["class", "parent-messages", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], [1, "parent-messages"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "new-design"], [3, "title"], [1, "nd-unread-badge"], [1, "nd-tab-bar"], [1, "nd-tab", 3, "click"], ["class", "nd-filter-row", 4, "ngIf"], ["class", "nd-bulk-actions", 4, "ngIf"], ["class", "nd-message-list", 4, "ngIf"], ["class", "nd-message-detail", 4, "ngIf"], ["class", "nd-compose-view", 4, "ngIf"], ["class", "nd-fab", 3, "click", 4, "ngIf"], [1, "nd-filter-row"], [1, "nd-filter-left"], [1, "nd-checkbox-container"], ["type", "checkbox", 3, "change", "checked"], [1, "nd-checkbox-label"], [1, "nd-filter-right"], [1, "nd-filter-dropdown"], [3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "unread"], ["value", "read"], [1, "nd-bulk-actions"], [1, "nd-action-btn", "nd-action-read", 3, "click"], [1, "bi", "bi-envelope-open"], [1, "nd-action-btn", "nd-action-unread", 3, "click"], [1, "bi", "bi-envelope"], [1, "nd-action-btn", "nd-action-delete", 3, "click"], [1, "bi", "bi-trash"], [1, "nd-message-list"], [4, "ngIf"], ["class", "nd-empty-state", 4, "ngIf"], ["class", "nd-message-card mb-2", "style", "padding: 16px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);", 4, "ngFor", "ngForOf"], [1, "nd-message-card", "mb-2", 2, "padding", "16px", "background", "white", "border-radius", "12px", "box-shadow", "0 1px 3px rgba(0,0,0,0.08)"], [1, "d-flex", "gap-2"], [3, "height", "width"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "mb-2", 3, "height", "width"], [1, "nd-empty-state"], [1, "bi", "bi-inbox", "nd-empty-icon"], [1, "nd-empty-text"], ["class", "nd-message-card", 3, "unread", "selected", "click", 4, "ngFor", "ngForOf"], [1, "nd-message-card", 3, "click"], [1, "nd-card-checkbox", 3, "click"], [1, "nd-card-content"], [1, "nd-card-header"], [1, "nd-card-sender"], [1, "nd-card-time"], ["class", "nd-unread-dot", 4, "ngIf"], [1, "nd-card-subject"], [1, "nd-card-preview"], [1, "nd-unread-dot"], [1, "nd-message-detail"], [1, "nd-detail-header-card"], [1, "nd-detail-avatar"], [1, "nd-detail-info"], [1, "nd-detail-name"], [1, "nd-detail-role"], [1, "nd-detail-meta"], [1, "nd-detail-date"], [1, "nd-detail-status"], [1, "nd-detail-content-card"], [1, "nd-detail-subject"], [1, "nd-detail-body"], ["class", "nd-replies-section", 4, "ngIf"], [1, "nd-reply-input-section"], [1, "nd-reply-input-container"], ["autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", 1, "nd-reply-textarea", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "nd-send-btn", 3, "click", "disabled"], [1, "bi", "bi-send"], [1, "nd-back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "nd-replies-section"], [1, "nd-section-title"], ["class", "nd-reply-card", 3, "own-reply", 4, "ngFor", "ngForOf"], [1, "nd-reply-card"], [1, "nd-reply-header"], [1, "nd-reply-sender"], [1, "nd-reply-date"], [1, "nd-reply-content"], [1, "nd-compose-view"], [1, "nd-compose-card"], [1, "nd-compose-field"], [1, "nd-field-icon"], [1, "bi", "bi-building"], [1, "nd-field-text"], [1, "bi", "bi-chat-text"], ["type", "text", "autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", 1, "nd-field-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "nd-compose-textarea-container"], ["autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", 1, "nd-compose-textarea", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "nd-compose-actions"], [1, "nd-cancel-btn", 3, "click"], [1, "nd-submit-btn", 3, "click", "disabled"], [1, "nd-fab", 3, "click"], [1, "bi", "bi-pencil"], [1, "container-fluid", "mt-4"], [1, "row"], [1, "col-xs-12", "col-sm-3"], [1, "panel", "menu-card-fixed"], [1, "panel-header"], [1, "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "panel-body"], [1, "sidebar-menu"], [1, "menu-item", 3, "click"], [1, "bi", "bi-inbox"], [1, "badge"], [1, "bi", "bi-star"], [1, "col-xs-12", "col-sm-9"], [1, "panel"], [1, "header-left", "p-1"], ["class", "filter-dropdown", 4, "ngIf"], ["class", "form-header-title", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], ["class", "message-details", 4, "ngIf"], ["class", "new-message-form", 4, "ngIf"], [1, "filter-dropdown"], [1, "filter-btn", 3, "click"], [1, "bi", "bi-three-dots-vertical"], ["class", "filter-menu", 4, "ngIf"], [1, "filter-menu"], [1, "filter-item", 3, "click"], [1, "form-header-title"], [1, "action-buttons"], [1, "action-btn", "read-btn", 3, "click", "title"], [1, "action-btn", "unread-btn", 3, "click", "title"], [1, "action-btn", "delete-btn", 3, "click", "title"], ["class", "messages-table", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "messages-table"], [1, "checkbox-col"], [3, "unread", 4, "ngFor", "ngForOf"], [1, "checkbox-col", 3, "click"], [1, "person-cell", 3, "click"], [1, "subject-cell", 3, "click"], [1, "content-cell", 3, "click"], [1, "date-cell", 3, "click"], ["class", "seen-cell", 3, "click", 4, "ngIf"], [1, "seen-cell", 3, "click"], [1, "seen-badge"], [1, "bi"], [1, "empty-state"], [1, "empty-cell"], [1, "message-details"], [1, "detail-info-row"], [1, "detail-info-left"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "detail-info-right"], [1, "status-badge"], [1, "detail-content-section"], [1, "section-title"], [1, "content-box"], ["class", "detail-response-section", 4, "ngIf"], [1, "detail-response-section"], ["autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", 1, "response-textarea", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "response-actions"], [1, "response-actions-left"], [1, "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "bi", "bi-reply"], [1, "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-x-circle"], ["class", "response-box", "style", "margin-bottom: 12px;", 3, "my-message", 4, "ngFor", "ngForOf"], [1, "response-box", 2, "margin-bottom", "12px"], [1, "reply-header"], [1, "new-message-form"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "form-label"], ["type", "text", "autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", 1, "form-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["autocapitalize", "off", "autocorrect", "off", "spellcheck", "false", "required", "", 1, "form-textarea", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "form-actions"], [1, "btn-send", 3, "click", "disabled"], [1, "btn-cancel", 3, "click"], ["required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "individual"], ["bindValue", "id", "bindLabel", "displayName", "groupBy", "group", "appendTo", "body", 1, "form-ng-select", 3, "ngModelChange", "ngModel", "items", "placeholder", "clearable", "searchable"]], template: function MessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MessagesComponent_ion_content_0_Template, 28, 33, "ion-content", 0)(1, MessagesComponent_div_1_Template, 52, 33, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, NgSelectModule, NgSelectComponent, ParentChildHeaderSimpleComponent, TranslateModule, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent, TitleCasePipe, TranslatePipe], styles: ['\n\nion-content.parent-messages[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-messages[_ngcontent-%COMP%]   .inner-scroll[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.form-header-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.header-checkbox[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  margin-left: 5px;\n}\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #a8c5ff;\n}\n.filter-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 4px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  min-width: 140px;\n  z-index: 1000;\n  overflow: hidden;\n}\n.filter-item[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #334155;\n  transition: all 0.2s;\n  font-weight: 500;\n}\n.filter-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.filter-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n  color: #334155;\n  font-weight: 600;\n}\n.btn-add-global-2[_ngcontent-%COMP%] {\n  min-width: 100% !important;\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.btn-cancel-2[_ngcontent-%COMP%] {\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.panel-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n.messages-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.left-message-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.message-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.messages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 4px 2px;\n  overflow-y: auto;\n  flex: 1;\n}\n.message-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n}\n.message-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.message-item.active[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #dbeafe;\n}\n.message-item.unread[_ngcontent-%COMP%] {\n  background: #fefce8;\n}\n.message-subject[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.message-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.message-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.message-date[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.message-sender[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.message-header[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.message-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.message-sender[_ngcontent-%COMP%], \n.message-recipient[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.message-date-full[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.message-content-full[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.response-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 16px;\n}\n.response-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.response-content[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 12px;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  margin-top: 12px;\n  flex-shrink: 0;\n}\n.input[_ngcontent-%COMP%], \n.textarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.textarea[_ngcontent-%COMP%] {\n  min-height: 200px;\n  resize: vertical;\n}\n.send[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  width: max-content;\n}\n.send[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.resolve[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n}\n.resolve[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.sidebar-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.menu-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #64748b;\n}\n.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #0e567d;\n}\n.menu-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  line-height: 1;\n  min-width: 1.5em;\n  text-align: center;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.menu-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.menu-item.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #a8c5ff;\n}\n.menu-item.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  color: #0e567d;\n  font-weight: 600;\n}\n.menu-item.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n}\n.menu-card-fixed[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n}\n.messages-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%;\n}\n.messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n}\n.messages-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 14px;\n  color: #0e567d;\n  border-bottom: 2px solid #e2e8f0;\n}\n.checkbox-col[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.checkbox-col[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 36px;\n  height: 36px;\n}\n.read-btn[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.read-btn[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  border-color: #16a34a;\n}\n.unread-btn[_ngcontent-%COMP%] {\n  color: #ea580c;\n}\n.unread-btn[_ngcontent-%COMP%]:hover {\n  background: #fff7ed;\n  border-color: #ea580c;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: block;\n  overflow-y: auto;\n  height: calc(100vh - 350px);\n}\n.messages-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.unread[_ngcontent-%COMP%] {\n  background: #fefce8;\n}\n.messages-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.unread[_ngcontent-%COMP%]:hover {\n  background: #fef9c3;\n}\n.messages-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  font-size: 14px;\n}\n.person-cell[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.subject-cell[_ngcontent-%COMP%] {\n  color: #334155;\n}\n.content-cell[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.status-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.unread[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-badge.read[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.empty-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.new-message-form[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 320px);\n}\n.form-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #0e567d;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  min-height: 180px;\n  resize: vertical;\n  font-family: inherit;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.btn-send[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-send[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4);\n}\n.btn-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-link[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-size: 14px;\n}\n.breadcrumb-link[_ngcontent-%COMP%]:hover {\n  color: #a8c5ff;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.breadcrumb-current[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  font-size: 14px;\n}\n.message-details[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.detail-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.detail-info-left[_ngcontent-%COMP%], \n.detail-info-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #0e567d;\n  font-size: 14px;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 14px;\n}\n.detail-content-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.detail-response-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #0e567d;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.content-box[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n  min-height: 120px;\n}\n.response-box[_ngcontent-%COMP%] {\n  width: 78%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n}\n.response-box.my-message[_ngcontent-%COMP%] {\n  align-self: end;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.25) 0%,\n      rgba(125, 211, 192, 0.25) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.reply-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #0e567d;\n}\n.response-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  min-height: 120px;\n  resize: vertical;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.response-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.response-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.response-actions-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: block;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 9999;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  display: block;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n  padding: 0;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n  .header-info {\n  margin-bottom: 0px !important;\n  border-radius: 0 !important;\n}\n  .parent-menu {\n  display: none !important;\n}\n  .float-btn {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  z-index: 9999;\n  background: #2563eb;\n  padding: 10px 14px;\n  border-radius: 8px;\n  color: #fff;\n}\n  .image-name .name {\n  padding-bottom: 20px !important;\n}\n  .swal-confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  border: none !important;\n  box-shadow: 0 2px 8px rgba(168, 197, 255, 0.3) !important;\n}\n  .swal-confirm-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4) !important;\n}\n  .swal-cancel-btn {\n  background: #fff !important;\n  color: #64748b !important;\n  border: 1px solid #e5e7eb !important;\n}\n  .swal-cancel-btn:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n@media screen and (max-width: 768px) {\n  .panel[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-bottom: 1rem;\n  }\n}\n.new-design[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  padding-bottom: 80px;\n}\n.nd-unread-badge[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 6px 10px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 8px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.nd-tab[_ngcontent-%COMP%]:hover {\n  color: #1DBAB4;\n  background-color: rgba(29, 186, 180, 0.05);\n}\n.nd-tab.active[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  font-weight: 600;\n  border-bottom-color: #1DBAB4;\n}\n.nd-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.nd-checkbox-container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-checkbox-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2D3748;\n}\n.nd-filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #2D3748;\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n.nd-filter-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1DBAB4;\n}\n.nd-bulk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid;\n  background-color: transparent;\n}\n.nd-action-read[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  border-color: #1DBAB4;\n}\n.nd-action-read[_ngcontent-%COMP%]:hover {\n  background-color: rgba(29, 186, 180, 0.1);\n}\n.nd-action-unread[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  border-color: #1DBAB4;\n}\n.nd-action-unread[_ngcontent-%COMP%]:hover {\n  background-color: rgba(29, 186, 180, 0.1);\n}\n.nd-action-delete[_ngcontent-%COMP%] {\n  color: #EF4444;\n  border-color: #EF4444;\n}\n.nd-action-delete[_ngcontent-%COMP%]:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n.nd-message-list[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.nd-empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.nd-empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: rgba(107, 114, 128, 0.5);\n  margin-bottom: 16px;\n}\n.nd-empty-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(107, 114, 128, 0.7);\n  margin: 0;\n}\n.nd-message-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.nd-message-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.nd-message-card.unread[_ngcontent-%COMP%] {\n  background-color: #FEFCE8;\n}\n.nd-message-card.selected[_ngcontent-%COMP%] {\n  border-color: #1DBAB4;\n}\n.nd-card-checkbox[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n.nd-card-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.nd-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.nd-card-sender[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #2D3748;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread[_ngcontent-%COMP%]   .nd-card-sender[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.nd-card-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.nd-unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #1DBAB4;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.nd-card-subject[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread[_ngcontent-%COMP%]   .nd-card-subject[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.nd-card-preview[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.nd-message-detail[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.nd-detail-header-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background-color: #E0F2FE;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1DBAB4;\n}\n.nd-detail-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nd-detail-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-detail-role[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6B7280;\n}\n.nd-detail-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.nd-detail-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.nd-detail-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.nd-detail-status.read[_ngcontent-%COMP%] {\n  background-color: #E0E7FF;\n  color: #4F46E5;\n}\n.nd-detail-status.unread[_ngcontent-%COMP%] {\n  background-color: #E0F2FE;\n  color: #1DBAB4;\n}\n.nd-detail-content-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-subject[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #2D3748;\n  margin-bottom: 16px;\n}\n.nd-detail-body[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #2D3748;\n  white-space: pre-wrap;\n}\n.nd-replies-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.nd-section-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 12px 0;\n}\n.nd-reply-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n}\n.nd-reply-card.own-reply[_ngcontent-%COMP%] {\n  background-color: #F0F9FF;\n  border-left: 4px solid #1DBAB4;\n}\n.nd-reply-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nd-reply-sender[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-reply-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n}\n.nd-reply-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #2D3748;\n}\n.nd-reply-input-section[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}\n.nd-reply-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.nd-reply-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 24px;\n  background-color: #F5F5F5;\n  font-size: 14px;\n  resize: none;\n  min-height: 44px;\n  max-height: 120px;\n  font-family: "Poppins", sans-serif;\n}\n.nd-reply-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-reply-textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(107, 114, 128, 0.7);\n}\n.nd-send-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.nd-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #19a8a3;\n}\n.nd-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: transparent;\n  border: none;\n  color: #6B7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 80px;\n}\n.nd-back-btn[_ngcontent-%COMP%]:hover {\n  color: #2D3748;\n}\n.nd-compose-view[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.nd-compose-card[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.nd-compose-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-field-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #1DBAB4 0%,\n      #7DD3C0 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-right: 12px;\n}\n.nd-field-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.nd-field-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  font-family: "Poppins", sans-serif;\n}\n.nd-field-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-field-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.nd-field-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2D3748;\n  font-weight: 500;\n}\n.nd-compose-textarea-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.nd-compose-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 200px;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  resize: vertical;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.6;\n}\n.nd-compose-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nd-compose-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.nd-compose-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.nd-cancel-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background-color: #FFFFFF;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nd-cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n  border-color: #CBD5E1;\n}\n.nd-submit-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px;\n  background: var(--gradient-primary);\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(155, 107, 204, 0.3);\n}\n.nd-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(155, 107, 204, 0.4);\n}\n.nd-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 186, 180, 0.4);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.nd-fab[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(29, 186, 180, 0.5);\n}\n/*# sourceMappingURL=messages.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesComponent, [{
    type: Component,
    args: [{ selector: "app-messages", standalone: true, imports: [CommonModule, FormsModule, NgSelectModule, ParentChildHeaderSimpleComponent, TranslateModule, SkeletonComponent, IonContent, IonRefresher, IonRefresherContent], template: `<ion-content *ngIf="isParent" class="parent-messages">\r
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">\r
    <ion-refresher-content></ion-refresher-content>\r
  </ion-refresher>\r
\r
  <div class="parent-detailchild new-design">\r
    <app-parent-child-header-simple\r
      [title]="'MESSAGES_PAGE.TITLE' | translate"\r
    >\r
      <span class="nd-unread-badge">{{ getUnreadCount() }} {{ 'MESSAGES_PAGE.UNREAD' | translate }}</span>\r
    </app-parent-child-header-simple>\r
\r
    <!-- Tab Bar -->\r
  <div class="nd-tab-bar">\r
    <div class="nd-tab" [class.active]="activeTab === 'received'" (click)="switchTab('received')">\r
      {{ 'MESSAGES_PAGE.INBOX' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'sent'" (click)="switchTab('sent')">\r
      {{ 'MESSAGES_PAGE.SENT' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'important'" (click)="switchTab('important')">\r
      {{ 'MESSAGES_PAGE.IMPORTANT' | translate }}\r
    </div>\r
    <div class="nd-tab" [class.active]="activeTab === 'trash'" (click)="switchTab('trash')">\r
      {{ 'MESSAGES_PAGE.TRASH' | translate }}\r
    </div>\r
  </div>\r
\r
  <!-- Filter and Actions Row -->\r
  <div class="nd-filter-row" *ngIf="activeMessages.length > 0 && !showModal && !showNewMessageModal">\r
    <div class="nd-filter-left">\r
      <label class="nd-checkbox-container">\r
        <input type="checkbox" (change)="toggleSelectAll($event)" [checked]="isAllSelected()">\r
        <span class="nd-checkbox-label">{{ 'MESSAGES_PAGE.SELECT_ALL' | translate }}</span>\r
      </label>\r
    </div>\r
    <div class="nd-filter-right">\r
      <div class="nd-filter-dropdown">\r
        <select [(ngModel)]="statusFilter" (change)="setFilter(statusFilter)">\r
          <option value="all">{{ 'MESSAGES_PAGE.ALL' | translate }}</option>\r
          <option value="unread">{{ 'MESSAGES_PAGE.UNREAD' | translate }}</option>\r
          <option value="read">{{ 'MESSAGES_PAGE.READ' | translate }}</option>\r
        </select>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Actions -->\r
  <div class="nd-bulk-actions" *ngIf="selectedMessages.length > 0 && !showModal && !showNewMessageModal">\r
    <button class="nd-action-btn nd-action-read" (click)="markAsRead()">\r
      <i class="bi bi-envelope-open"></i>\r
      <span>{{ 'MESSAGES_PAGE.MARK_AS_READ' | translate }}</span>\r
    </button>\r
    <button class="nd-action-btn nd-action-unread" (click)="markAsUnread()">\r
      <i class="bi bi-envelope"></i>\r
      <span>{{ 'MESSAGES_PAGE.MARK_AS_UNREAD' | translate }}</span>\r
    </button>\r
    <button class="nd-action-btn nd-action-delete" (click)="deleteSelected()">\r
      <i class="bi bi-trash"></i>\r
      <span>{{ 'MESSAGES_PAGE.DELETE' | translate }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Message List -->\r
  <div class="nd-message-list" *ngIf="!showModal && !showNewMessageModal">\r
    <!-- Loading Skeleton -->\r
    <div *ngIf="loading">\r
      <div *ngFor="let i of [1,2,3,4,5,6,7,8]" class="nd-message-card mb-2" style="padding: 16px; background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">\r
        <div class="d-flex gap-2">\r
          <app-skeleton [height]="20" [width]="'20px'"></app-skeleton>\r
          <div class="flex-grow-1">\r
            <div class="d-flex justify-content-between mb-2">\r
              <app-skeleton [height]="16" [width]="'40%'"></app-skeleton>\r
              <app-skeleton [height]="14" [width]="'15%'"></app-skeleton>\r
            </div>\r
            <app-skeleton [height]="18" [width]="'70%'" class="mb-2"></app-skeleton>\r
            <app-skeleton [height]="14" [width]="'90%'"></app-skeleton>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div class="nd-empty-state" *ngIf="!loading && filteredMessages.length === 0">\r
      <i class="bi bi-inbox nd-empty-icon"></i>\r
      <p class="nd-empty-text">{{ 'MESSAGES_PAGE.NO_MESSAGES' | translate }}</p>\r
    </div>\r
\r
    <!-- Message Cards -->\r
    <ng-container *ngIf="!loading">\r
      <div class="nd-message-card"\r
           *ngFor="let message of filteredMessages"\r
           [class.unread]="!message.isRead"\r
           [class.selected]="isSelected(message)"\r
           (click)="selectMessage(message)">\r
      <div class="nd-card-checkbox" (click)="$event.stopPropagation()">\r
        <input type="checkbox" [checked]="isSelected(message)" (change)="toggleSelection(message)">\r
      </div>\r
      <div class="nd-card-content">\r
        <div class="nd-card-header">\r
          <span class="nd-card-sender">{{ activeTab === 'sent' ? message.recipientName : message.senderName }}</span>\r
          <span class="nd-card-time">{{ formatDate(message.sentAt) }}</span>\r
          <span class="nd-unread-dot" *ngIf="!message.isRead && activeTab !== 'sent'"></span>\r
        </div>\r
        <div class="nd-card-subject">{{ message.subject }}</div>\r
        <div class="nd-card-preview">{{ message.content.substring(0, 80) }}{{ message.content.length > 80 ? '...' : '' }}</div>\r
      </div>\r
      </div>\r
    </ng-container>\r
  </div>\r
\r
  <!-- Message Detail View -->\r
  <div class="nd-message-detail" *ngIf="showModal && selectedMessage">\r
    <!-- Detail Header Card -->\r
    <div class="nd-detail-header-card">\r
      <div class="nd-detail-avatar">\r
        {{ (activeTab === 'sent' ? selectedMessage.recipientName : selectedMessage.senderName)?.charAt(0).toUpperCase() }}\r
      </div>\r
      <div class="nd-detail-info">\r
        <div class="nd-detail-name">{{ activeTab === 'sent' ? selectedMessage.recipientName : selectedMessage.senderName }}</div>\r
        <div class="nd-detail-role">{{ activeTab === 'sent' ? ('MESSAGES_PAGE.TO' | translate) : ('MESSAGES_PAGE.FROM' | translate) }}</div>\r
      </div>\r
      <div class="nd-detail-meta">\r
        <div class="nd-detail-date">{{ formatDate(selectedMessage.sentAt) }}</div>\r
        <span class="nd-detail-status" [class.read]="selectedMessage.isRead" [class.unread]="!selectedMessage.isRead">\r
          {{ selectedMessage.isRead ? ('MESSAGES_PAGE.READ' | translate) : ('MESSAGES_PAGE.UNREAD' | translate) }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Message Content Card -->\r
    <div class="nd-detail-content-card">\r
      <div class="nd-detail-subject">{{ selectedMessage.subject }}</div>\r
      <div class="nd-detail-body">{{ selectedMessage.content }}</div>\r
    </div>\r
\r
    <!-- Replies Section -->\r
    <div class="nd-replies-section" *ngIf="selectedMessage.replies?.length > 0">\r
      <h3 class="nd-section-title">{{ 'MESSAGES_PAGE.REPLIES' | translate }}</h3>\r
      <div class="nd-reply-card" *ngFor="let reply of selectedMessage.replies" [class.own-reply]="reply.senderId === currentUserId">\r
        <div class="nd-reply-header">\r
          <span class="nd-reply-sender">{{ reply.senderName }}</span>\r
          <span class="nd-reply-date">{{ formatDate(reply.sentAt) }}</span>\r
        </div>\r
        <div class="nd-reply-content">{{ reply.content }}</div>\r
      </div>\r
    </div>\r
\r
    <!-- Reply Input -->\r
    <div class="nd-reply-input-section">\r
      <div class="nd-reply-input-container">\r
        <textarea class="nd-reply-textarea"\r
                  [placeholder]="'MESSAGES_PAGE.WRITE_REPLY' | translate"\r
                  [ngModel]="replyText"\r
                  (ngModelChange)="replyText = $event"\r
                  (input)="replyText = $any($event.target).value"\r
                  autocapitalize="off"\r
                  autocorrect="off"\r
                  spellcheck="false"></textarea>\r
        <button class="nd-send-btn" (click)="sendReply()" [disabled]="!replyText.trim()">\r
          <i class="bi bi-send"></i>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Back Button -->\r
    <button class="nd-back-btn" (click)="closeModal()">\r
      <i class="bi bi-arrow-left"></i>\r
      {{ 'MESSAGES_PAGE.BACK' | translate }}\r
    </button>\r
  </div>\r
\r
  <!-- Compose Message View -->\r
  <div class="nd-compose-view" *ngIf="showNewMessageModal">\r
    <div class="nd-compose-card">\r
      <div class="nd-compose-field">\r
        <div class="nd-field-icon">\r
          <i class="bi bi-building"></i>\r
        </div>\r
        <span class="nd-field-text">{{ 'MESSAGES_PAGE.TO_DAYCARE' | translate }}</span>\r
      </div>\r
      <div class="nd-compose-field">\r
        <div class="nd-field-icon">\r
          <i class="bi bi-chat-text"></i>\r
        </div>\r
        <input type="text" class="nd-field-input" [placeholder]="'MESSAGES_PAGE.ENTER_SUBJECT' | translate"\r
               [ngModel]="composeForm.subject"\r
               (ngModelChange)="composeForm.subject = $event"\r
               (input)="composeForm.subject = $any($event.target).value"\r
               autocapitalize="off"\r
               autocorrect="off"\r
               spellcheck="false">\r
      </div>\r
      <div class="nd-compose-textarea-container">\r
        <textarea class="nd-compose-textarea"\r
                  [placeholder]="'MESSAGES_PAGE.ENTER_MESSAGE' | translate"\r
                  [ngModel]="composeForm.content"\r
                  (ngModelChange)="composeForm.content = $event"\r
                  (input)="composeForm.content = $any($event.target).value"\r
                  autocapitalize="off"\r
                  autocorrect="off"\r
                  spellcheck="false"></textarea>\r
      </div>\r
    </div>\r
    <div class="nd-compose-actions">\r
      <button class="nd-cancel-btn" (click)="closeNewMessageModal()">\r
        {{ 'MESSAGES_PAGE.CANCEL' | translate }}\r
      </button>\r
      <button class="nd-submit-btn" (click)="sendMessage()" [disabled]="!composeForm.content.trim()">\r
        {{ 'MESSAGES_PAGE.SEND_MESSAGE' | translate }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Action Button -->\r
  <button class="nd-fab" (click)="openNewMessageModal()" *ngIf="!showNewMessageModal && !showModal">\r
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
          <button class="custom-btn-2 btn-add-global-2" (click)="openNewMessageModal()">\r
            <i class="bi bi-plus-circle"></i>\r
            {{ 'MESSAGES_PAGE.NEW_MESSAGE' | translate }}\r
          </button>\r
        </div>\r
        <div class="panel-body">\r
          <div class="sidebar-menu">\r
            <div class="menu-item" [class.active]="activeTab === 'received'" (click)="switchTab('received')">\r
              <i class="bi bi-inbox"></i>\r
              <span>{{ 'MESSAGES_PAGE.INBOX' | translate }}</span>\r
              <span class="badge">{{ inbox.length }}</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'sent'" (click)="switchTab('sent')">\r
              <i class="bi bi-send"></i>\r
              <span>{{ 'MESSAGES_PAGE.SENT' | translate }}</span>\r
              <span class="badge">{{ sent.length }}</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'important'" (click)="switchTab('important')">\r
              <i class="bi bi-star"></i>\r
              <span>{{ 'MESSAGES_PAGE.IMPORTANT' | translate }}</span>\r
              <span class="badge">0</span>\r
            </div>\r
            <div class="menu-item" [class.active]="activeTab === 'trash'" (click)="switchTab('trash')">\r
              <i class="bi bi-trash"></i>\r
              <span>{{ 'MESSAGES_PAGE.TRASH' | translate }}</span>\r
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
            <div *ngIf="activeMessages.length > 0 && !showModal" class="filter-dropdown">\r
              <button class="filter-btn" (click)="toggleFilterMenu()">\r
                <i class="bi bi-three-dots-vertical"></i>\r
              </button>\r
              <div class="filter-menu" *ngIf="showFilterMenu">\r
                <div class="filter-item" [class.active]="statusFilter === 'all'" (click)="setFilter('all')">\r
                  {{ 'MESSAGES_PAGE.ALL' | translate }}\r
                </div>\r
                <div class="filter-item" [class.active]="statusFilter === 'unread'" (click)="setFilter('unread')">\r
                  {{ 'MESSAGES_PAGE.UNREAD' | translate }}\r
                </div>\r
                <div class="filter-item" [class.active]="statusFilter === 'read'" (click)="setFilter('read')">\r
                  {{ 'MESSAGES_PAGE.READ' | translate }}\r
                </div>\r
              </div>\r
            </div>\r
            <div *ngIf="showModal">\r
              <h4 class="form-header-title">{{ selectedMessage?.subject }}</h4>\r
            </div>\r
            <h4 *ngIf="!showModal && !showNewMessageModal">{{ activeTab === 'received' ? ('MESSAGES_PAGE.INBOX' | translate) : activeTab === 'sent' ? ('MESSAGES_PAGE.SENT' | translate) : (activeTab | titlecase) }}</h4>\r
            <h4 *ngIf="showNewMessageModal" class="form-header-title">{{ 'MESSAGES_PAGE.NEW_MESSAGE' | translate }}</h4>\r
          </div>\r
          <div *ngIf="selectedMessages.length > 0 && !showModal && !showNewMessageModal" class="action-buttons">\r
            <button class="action-btn read-btn" (click)="markAsRead()" [title]="'MESSAGES_PAGE.MARK_AS_READ' | translate">\r
              <i class="bi bi-envelope-open"></i>\r
            </button>\r
            <button class="action-btn unread-btn" (click)="markAsUnread()" [title]="'MESSAGES_PAGE.MARK_AS_UNREAD' | translate">\r
              <i class="bi bi-envelope"></i>\r
            </button>\r
            <button class="action-btn delete-btn" (click)="deleteSelected()" [title]="('MESSAGES_PAGE.DELETE' | translate) + ' (' + selectedMessages.length + ')'">\r
              <i class="bi bi-trash"></i>\r
            </button>\r
          </div>\r
        </div>\r
        <div class="panel-body">\r
          <div *ngIf="!showNewMessageModal && !showModal">\r
            <table class="messages-table" *ngIf="activeMessages.length > 0">\r
              <thead>\r
                <tr>\r
                  <th class="checkbox-col">\r
                    <input type="checkbox" (change)="toggleSelectAll($event)" [checked]="isAllSelected()">\r
                  </th>\r
                  <th>{{ activeTab === 'sent' ? ('MESSAGES_PAGE.TO' | translate) : ('MESSAGES_PAGE.FROM' | translate) }}</th>\r
                  <th>{{ 'MESSAGES_PAGE.SUBJECT' | translate }}</th>\r
                  <th>{{ 'MESSAGES_PAGE.CONTENT' | translate }}</th>\r
                  <th>{{ 'MESSAGES_PAGE.DATE' | translate }}</th>\r
                  <th *ngIf="activeTab === 'sent'">{{ 'MESSAGES_PAGE.SEEN' | translate }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let message of filteredMessages" [class.unread]="!message.isRead">\r
                  <td class="checkbox-col" (click)="$event.stopPropagation()">\r
                    <input type="checkbox" [checked]="isSelected(message)" (change)="toggleSelection(message)">\r
                  </td>\r
                  <td class="person-cell" (click)="selectMessage(message)">{{ activeTab === 'sent' ? message.recipientName : message.senderName }}</td>\r
                  <td class="subject-cell" (click)="selectMessage(message)">{{ message.subject }}</td>\r
                  <td class="content-cell" (click)="selectMessage(message)">{{ message.content.substring(0, 50) }}{{ message.content.length > 50 ? '...' : '' }}</td>\r
                  <td class="date-cell" (click)="selectMessage(message)">{{ formatDate(message.sentAt) }}</td>\r
                  <td *ngIf="activeTab === 'sent'" class="seen-cell" (click)="selectMessage(message)">\r
                    <span class="seen-badge" [class.seen]="message.isRead" [class.not-seen]="!message.isRead">\r
                      <i class="bi" [class.bi-eye]="message.isRead" [class.bi-eye-slash]="!message.isRead"></i>\r
                      {{ message.isRead ? ('MESSAGES_PAGE.SEEN' | translate) : ('MESSAGES_PAGE.NOT_SEEN' | translate) }}\r
                    </span>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
            <div class="empty-state" *ngIf="activeMessages.length === 0">\r
              <p class="empty-cell">{{ 'MESSAGES_PAGE.NO_MESSAGES' | translate }}</p>\r
            </div>\r
          </div>\r
          <div *ngIf="showModal && selectedMessage" class="message-details">\r
            <div class="detail-info-row">\r
              <div class="detail-info-left">\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'MESSAGES_PAGE.FROM' | translate }}:</span>\r
                  <span class="info-value">{{ selectedMessage.senderName }}</span>\r
                </div>\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'MESSAGES_PAGE.TO' | translate }}:</span>\r
                  <span class="info-value">{{ selectedMessage.recipientName }}</span>\r
                </div>\r
              </div>\r
              <div class="detail-info-right">\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'MESSAGES_PAGE.DATE' | translate }}:</span>\r
                  <span class="info-value">{{ formatDate(selectedMessage.sentAt) }}</span>\r
                </div>\r
                <div class="info-item">\r
                  <span class="info-label">{{ 'MESSAGES_PAGE.STATUS' | translate }}:</span>\r
                  <span class="status-badge" [class.unread]="!selectedMessage.isRead" [class.read]="selectedMessage.isRead">\r
                    <i class="bi" [class.bi-eye]="selectedMessage.isRead" [class.bi-eye-slash]="!selectedMessage.isRead"></i>\r
                    {{ selectedMessage.isRead ? ('MESSAGES_PAGE.SEEN' | translate) : ('MESSAGES_PAGE.NOT_SEEN' | translate) }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="detail-content-section">\r
              <h5 class="section-title">{{ 'MESSAGES_PAGE.MESSAGE' | translate }}</h5>\r
              <div class="content-box">\r
                {{ selectedMessage.content }}\r
              </div>\r
            </div>\r
            <div class="detail-response-section" *ngIf="selectedMessage.replies?.length > 0">\r
              <h5 class="section-title">{{ 'MESSAGES_PAGE.REPLIES' | translate }}</h5>\r
              <div *ngFor="let reply of selectedMessage.replies" class="response-box" [class.my-message]="reply.senderId === currentUserId" style="margin-bottom: 12px;">\r
                <div class="reply-header">{{ reply.senderName }} - {{ formatDate(reply.sentAt) }}</div>\r
                {{ reply.content }}\r
              </div>\r
            </div>\r
            <div class="detail-response-section">\r
              <h5 class="section-title">{{ 'MESSAGES_PAGE.REPLY' | translate }}</h5>\r
              <textarea class="response-textarea" [placeholder]="'MESSAGES_PAGE.WRITE_REPLY' | translate"\r
                        [ngModel]="replyText"\r
                        (ngModelChange)="replyText = $event"\r
                        (input)="replyText = $any($event.target).value"\r
                        autocapitalize="off"\r
                        autocorrect="off"\r
                        spellcheck="false"></textarea>\r
              <div class="response-actions">\r
                <div class="response-actions-left">\r
                  <button class="custom-btn-2 btn-add-global-2" (click)="sendReply()" [disabled]="!replyText.trim()">\r
                    <i class="bi bi-reply"></i> {{ 'MESSAGES_PAGE.SEND_REPLY' | translate }}\r
                  </button>\r
                </div>\r
                <button class="custom-btn-2 btn-cancel-2" (click)="closeModal()">\r
                  <i class="bi bi-x-circle"></i> {{ 'MESSAGES_PAGE.CANCEL' | translate }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
          <div *ngIf="showNewMessageModal" class="new-message-form">\r
            <div class="form-group" *ngIf="isAdmin">\r
              <label class="form-label">{{ 'MESSAGES_PAGE.RECIPIENT_TYPE' | translate }}</label>\r
              <select class="form-input" [(ngModel)]="composeForm.recipientType" required>\r
                <option value="individual">{{ 'MESSAGES_PAGE.INDIVIDUAL' | translate }}</option>\r
                <option value="all">{{ 'MESSAGES_PAGE.ALL_USERS' | translate }}</option>\r
              </select>\r
            </div>\r
            <div class="form-group" *ngIf="composeForm.recipientType === 'individual'">\r
              <label class="form-label">{{ 'MESSAGES_PAGE.RECIPIENT' | translate }}</label>\r
              <ng-select\r
                [(ngModel)]="composeForm.recipientId"\r
                [items]="groupedRecipients"\r
                [placeholder]="'MESSAGES_PAGE.SELECT_RECIPIENT' | translate"\r
                [clearable]="true"\r
                [searchable]="true"\r
                bindValue="id"\r
                bindLabel="displayName"\r
                groupBy="group"\r
                appendTo="body"\r
                class="form-ng-select">\r
              </ng-select>\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'MESSAGES_PAGE.SUBJECT' | translate }}</label>\r
              <input type="text" class="form-input" [placeholder]="'MESSAGES_PAGE.ENTER_SUBJECT' | translate"\r
                     [ngModel]="composeForm.subject"\r
                     (ngModelChange)="composeForm.subject = $event"\r
                     (input)="composeForm.subject = $any($event.target).value"\r
                     autocapitalize="off"\r
                     autocorrect="off"\r
                     spellcheck="false">\r
            </div>\r
            <div class="form-group">\r
              <label class="form-label">{{ 'MESSAGES_PAGE.CONTENT' | translate }}</label>\r
              <textarea class="form-textarea" [placeholder]="'MESSAGES_PAGE.ENTER_MESSAGE' | translate"\r
                        [ngModel]="composeForm.content"\r
                        (ngModelChange)="composeForm.content = $event"\r
                        (input)="composeForm.content = $any($event.target).value"\r
                        autocapitalize="off"\r
                        autocorrect="off"\r
                        spellcheck="false"\r
                        required></textarea>\r
            </div>\r
            <div class="form-actions">\r
              <button class="btn-send" (click)="sendMessage()" [disabled]="(composeForm.recipientType === 'individual' && !composeForm.recipientId) || !composeForm.content.trim()">\r
                <i class="bi bi-send"></i> {{ 'MESSAGES_PAGE.SEND_MESSAGE' | translate }}\r
              </button>\r
              <button class="btn-cancel" (click)="closeNewMessageModal()">\r
                <i class="bi bi-x-circle"></i> {{ 'MESSAGES_PAGE.CANCEL' | translate }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/messages/messages.component.scss */\nion-content.parent-messages {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\nion-content.parent-messages .inner-scroll {\n  display: block !important;\n}\n.panel {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n  height: calc(100vh - 200px);\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 25px;\n}\n.panel-header {\n  padding: 12px 14px;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.header-left h4 {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.form-header-title {\n  color: #0e567d;\n  font-weight: 600;\n  margin-top: 5px;\n}\n.header-checkbox {\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  margin-left: 5px;\n}\n.filter-dropdown {\n  position: relative;\n}\n.filter-btn {\n  padding: 8px;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.filter-btn:hover {\n  background: #f8fafc;\n  border-color: #a8c5ff;\n}\n.filter-btn i {\n  font-size: 16px;\n  color: #64748b;\n}\n.filter-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  margin-top: 4px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  min-width: 140px;\n  z-index: 1000;\n  overflow: hidden;\n}\n.filter-item {\n  padding: 12px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #334155;\n  transition: all 0.2s;\n  font-weight: 500;\n}\n.filter-item:hover {\n  background: #f8fafc;\n}\n.filter-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n  color: #334155;\n  font-weight: 600;\n}\n.btn-add-global-2 {\n  min-width: 100% !important;\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.btn-cancel-2 {\n  padding: 12px !important;\n  justify-content: center !important;\n}\n.panel-body {\n  padding: 12px;\n  flex: 1;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n}\n.messages-panel .panel-body {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.left-message-title h4 {\n  font-size: 16px;\n  margin: 0;\n}\n.icon-btn {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.icon-btn:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.empty {\n  padding: 8px;\n}\n.muted {\n  color: #64748b;\n}\n.message-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.messages-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 4px 2px;\n  overflow-y: auto;\n  flex: 1;\n}\n.message-item {\n  padding: 12px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  cursor: pointer;\n}\n.message-item:hover {\n  background: #f8fafc;\n}\n.message-item.active {\n  background: #eff6ff;\n  border-color: #dbeafe;\n}\n.message-item.unread {\n  background: #fefce8;\n}\n.message-subject {\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.message-content {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.message-meta {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.message-date {\n  margin-right: 8px;\n}\n.message-sender {\n  font-size: 12px;\n}\n.message-header {\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.message-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n}\n.message-sender,\n.message-recipient {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.message-date-full {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.message-content-full {\n  flex: 1;\n  padding: 16px 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.response-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 16px;\n}\n.response-title {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.response-content {\n  background: #f1f5f9;\n  padding: 12px;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.input-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  margin-top: 12px;\n  flex-shrink: 0;\n}\n.input,\n.textarea {\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n}\n.textarea {\n  min-height: 200px;\n  resize: vertical;\n}\n.send {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  width: max-content;\n}\n.send:hover {\n  background: #1d4ed8;\n}\n.resolve {\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #16a34a;\n  color: #fff;\n  border: none;\n  display: inline-flex;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n}\n.resolve:hover {\n  background: #15803d;\n}\n.sidebar-menu {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.menu-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.menu-item i {\n  font-size: 18px;\n  color: #64748b;\n}\n.menu-item span:first-of-type {\n  flex: 1;\n  font-weight: 500;\n  color: #0e567d;\n}\n.menu-item .badge {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  display: inline-block;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  line-height: 1;\n  min-width: 1.5em;\n  text-align: center;\n}\n.menu-item:hover {\n  background: #f8fafc;\n}\n.menu-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.menu-item.active i {\n  color: #a8c5ff;\n}\n.menu-item.active span:first-of-type {\n  color: #0e567d;\n  font-weight: 600;\n}\n.menu-item.active .badge {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n}\n.menu-card-fixed {\n  position: sticky;\n  top: 20px;\n}\n.messages-table {\n  width: 100%;\n  border-collapse: collapse;\n  height: 100%;\n}\n.messages-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.2) 0%,\n      rgba(125, 211, 192, 0.2) 100%);\n}\n.messages-table th {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 14px;\n  color: #0e567d;\n  border-bottom: 2px solid #e2e8f0;\n}\n.checkbox-col {\n  width: 40px;\n  text-align: center;\n}\n.checkbox-col input[type=checkbox] {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.action-btn {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 36px;\n  height: 36px;\n}\n.read-btn {\n  color: #16a34a;\n}\n.read-btn:hover {\n  background: #f0fdf4;\n  border-color: #16a34a;\n}\n.unread-btn {\n  color: #ea580c;\n}\n.unread-btn:hover {\n  background: #fff7ed;\n  border-color: #ea580c;\n}\n.delete-btn {\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background: #fef2f2;\n  border-color: #dc2626;\n}\n.messages-table tbody {\n  display: block;\n  overflow-y: auto;\n  height: calc(100vh - 350px);\n}\n.messages-table thead,\n.messages-table tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.messages-table tbody tr {\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #e5e7eb;\n}\n.messages-table tbody tr:hover {\n  background: #f8fafc;\n}\n.messages-table tbody tr.unread {\n  background: #fefce8;\n}\n.messages-table tbody tr.unread:hover {\n  background: #fef9c3;\n}\n.messages-table td {\n  padding: 12px;\n  font-size: 14px;\n}\n.person-cell {\n  color: #0f172a;\n}\n.subject-cell {\n  color: #334155;\n}\n.content-cell {\n  color: #64748b;\n}\n.date-cell {\n  color: #94a3b8;\n  font-size: 13px;\n  white-space: nowrap;\n}\n.status-cell {\n  text-align: center;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.status-badge.unread {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-badge.read {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.empty-cell {\n  text-align: center;\n  color: #94a3b8;\n  padding: 24px;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.new-message-form {\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 320px);\n}\n.form-title {\n  color: #0e567d;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 20px 0;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-label {\n  display: block;\n  color: #0e567d;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n.form-input,\n.form-textarea {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.form-textarea {\n  min-height: 180px;\n  resize: vertical;\n  font-family: inherit;\n}\n.form-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.btn-send {\n  flex: 1;\n  padding: 12px 16px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%);\n  color: #fff;\n  border: none;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.btn-send:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4);\n}\n.btn-send:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  padding: 12px 16px;\n  border-radius: 8px;\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e5e7eb;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-cancel:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  color: #475569;\n}\n.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-link {\n  color: #0e567d;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-size: 14px;\n}\n.breadcrumb-link:hover {\n  color: #a8c5ff;\n}\n.breadcrumb-nav i {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.breadcrumb-current {\n  color: #64748b;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  font-size: 14px;\n}\n.message-details {\n  padding: 5px 10px;\n}\n.detail-info-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.detail-info-left,\n.detail-info-right {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.info-label {\n  font-weight: 600;\n  color: #0e567d;\n  font-size: 14px;\n}\n.info-value {\n  color: #334155;\n  font-size: 14px;\n}\n.detail-content-section {\n  margin-bottom: 20px;\n}\n.detail-response-section {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n}\n.section-title {\n  color: #0e567d;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.content-box {\n  padding: 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n  min-height: 120px;\n}\n.response-box {\n  width: 78%;\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.1) 0%,\n      rgba(125, 211, 192, 0.1) 100%);\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: 1.6;\n  color: #334155;\n}\n.response-box.my-message {\n  align-self: end;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(168, 197, 255, 0.25) 0%,\n      rgba(125, 211, 192, 0.25) 100%);\n  border-left: 4px solid #a8c5ff;\n}\n.reply-header {\n  font-weight: 600;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #0e567d;\n}\n.response-textarea {\n  width: 100%;\n  padding: 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  min-height: 120px;\n  resize: vertical;\n  font-family: inherit;\n  transition: all 0.2s;\n}\n.response-textarea:focus {\n  outline: none;\n  border-color: #a8c5ff;\n  box-shadow: 0 0 0 3px rgba(168, 197, 255, 0.1);\n}\n.response-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 20px;\n}\n.response-actions-left {\n  display: flex;\n  gap: 12px;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9998;\n  display: block;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  z-index: 9999;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  display: block;\n}\n.modal-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #64748b;\n  line-height: 1;\n  padding: 0;\n}\n.modal-close:hover {\n  color: #0f172a;\n}\n.modal-body {\n  padding: 20px;\n}\n::ng-deep .header-info {\n  margin-bottom: 0px !important;\n  border-radius: 0 !important;\n}\n::ng-deep .parent-menu {\n  display: none !important;\n}\n::ng-deep .float-btn {\n  position: fixed;\n  bottom: 80px;\n  right: 20px;\n  z-index: 9999;\n  background: #2563eb;\n  padding: 10px 14px;\n  border-radius: 8px;\n  color: #fff;\n}\n::ng-deep .image-name .name {\n  padding-bottom: 20px !important;\n}\n::ng-deep .swal-confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #a8c5ff 0%,\n      #7dd3c0 100%) !important;\n  border: none !important;\n  box-shadow: 0 2px 8px rgba(168, 197, 255, 0.3) !important;\n}\n::ng-deep .swal-confirm-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(168, 197, 255, 0.4) !important;\n}\n::ng-deep .swal-cancel-btn {\n  background: #fff !important;\n  color: #64748b !important;\n  border: 1px solid #e5e7eb !important;\n}\n::ng-deep .swal-cancel-btn:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n@media screen and (max-width: 768px) {\n  .panel {\n    height: 100%;\n    margin-bottom: 1rem;\n  }\n}\n.new-design {\n  background-color: #F5F5F5;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  padding-bottom: 80px;\n}\n.nd-unread-badge {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 6px 10px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-tab-bar {\n  display: flex;\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-tab {\n  flex: 1;\n  padding: 14px 8px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6B7280;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.nd-tab:hover {\n  color: #1DBAB4;\n  background-color: rgba(29, 186, 180, 0.05);\n}\n.nd-tab.active {\n  color: #1DBAB4;\n  font-weight: 600;\n  border-bottom-color: #1DBAB4;\n}\n.nd-filter-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-checkbox-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.nd-checkbox-container input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-checkbox-label {\n  font-size: 13px;\n  color: #2D3748;\n}\n.nd-filter-dropdown select {\n  padding: 6px 12px;\n  border: 1px solid #E5E7EB;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #2D3748;\n  background-color: #F5F5F5;\n  cursor: pointer;\n}\n.nd-filter-dropdown select:focus {\n  outline: none;\n  border-color: #1DBAB4;\n}\n.nd-bulk-actions {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n}\n.nd-action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 1px solid;\n  background-color: transparent;\n}\n.nd-action-read {\n  color: #1DBAB4;\n  border-color: #1DBAB4;\n}\n.nd-action-read:hover {\n  background-color: rgba(29, 186, 180, 0.1);\n}\n.nd-action-unread {\n  color: #1DBAB4;\n  border-color: #1DBAB4;\n}\n.nd-action-unread:hover {\n  background-color: rgba(29, 186, 180, 0.1);\n}\n.nd-action-delete {\n  color: #EF4444;\n  border-color: #EF4444;\n}\n.nd-action-delete:hover {\n  background-color: rgba(239, 68, 68, 0.1);\n}\n.nd-message-list {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.nd-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n}\n.nd-empty-icon {\n  font-size: 64px;\n  color: rgba(107, 114, 128, 0.5);\n  margin-bottom: 16px;\n}\n.nd-empty-text {\n  font-size: 16px;\n  color: rgba(107, 114, 128, 0.7);\n  margin: 0;\n}\n.nd-message-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: 2px solid transparent;\n}\n.nd-message-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.nd-message-card.unread {\n  background-color: #FEFCE8;\n}\n.nd-message-card.selected {\n  border-color: #1DBAB4;\n}\n.nd-card-checkbox {\n  padding-top: 2px;\n}\n.nd-card-checkbox input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  accent-color: #1DBAB4;\n}\n.nd-card-content {\n  flex: 1;\n  min-width: 0;\n}\n.nd-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.nd-card-sender {\n  font-size: 15px;\n  font-weight: 500;\n  color: #2D3748;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread .nd-card-sender {\n  font-weight: 700;\n}\n.nd-card-time {\n  font-size: 12px;\n  color: #6B7280;\n  white-space: nowrap;\n}\n.nd-unread-dot {\n  width: 8px;\n  height: 8px;\n  background-color: #1DBAB4;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.nd-card-subject {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2D3748;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nd-message-card.unread .nd-card-subject {\n  font-weight: 600;\n}\n.nd-card-preview {\n  font-size: 13px;\n  color: #6B7280;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.nd-message-detail {\n  padding: 20px;\n}\n.nd-detail-header-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-avatar {\n  width: 48px;\n  height: 48px;\n  background-color: #E0F2FE;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1DBAB4;\n}\n.nd-detail-info {\n  flex: 1;\n}\n.nd-detail-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-detail-role {\n  font-size: 13px;\n  color: #6B7280;\n}\n.nd-detail-meta {\n  text-align: right;\n}\n.nd-detail-date {\n  font-size: 12px;\n  color: #6B7280;\n  margin-bottom: 4px;\n}\n.nd-detail-status {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.nd-detail-status.read {\n  background-color: #E0E7FF;\n  color: #4F46E5;\n}\n.nd-detail-status.unread {\n  background-color: #E0F2FE;\n  color: #1DBAB4;\n}\n.nd-detail-content-card {\n  padding: 20px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 16px;\n}\n.nd-detail-subject {\n  font-size: 18px;\n  font-weight: 600;\n  color: #2D3748;\n  margin-bottom: 16px;\n}\n.nd-detail-body {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #2D3748;\n  white-space: pre-wrap;\n}\n.nd-replies-section {\n  margin-bottom: 16px;\n}\n.nd-section-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #2D3748;\n  margin: 0 0 12px 0;\n}\n.nd-reply-card {\n  padding: 16px;\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n}\n.nd-reply-card.own-reply {\n  background-color: #F0F9FF;\n  border-left: 4px solid #1DBAB4;\n}\n.nd-reply-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.nd-reply-sender {\n  font-size: 14px;\n  font-weight: 600;\n  color: #2D3748;\n}\n.nd-reply-date {\n  font-size: 12px;\n  color: #6B7280;\n}\n.nd-reply-content {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #2D3748;\n}\n.nd-reply-input-section {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px 20px;\n  background-color: #FFFFFF;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n}\n.nd-reply-input-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n}\n.nd-reply-textarea {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  border-radius: 24px;\n  background-color: #F5F5F5;\n  font-size: 14px;\n  resize: none;\n  min-height: 44px;\n  max-height: 120px;\n  font-family: "Poppins", sans-serif;\n}\n.nd-reply-textarea:focus {\n  outline: none;\n}\n.nd-reply-textarea::placeholder {\n  color: rgba(107, 114, 128, 0.7);\n}\n.nd-send-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.nd-send-btn:hover:not(:disabled) {\n  background-color: #19a8a3;\n}\n.nd-send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  background-color: transparent;\n  border: none;\n  color: #6B7280;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 80px;\n}\n.nd-back-btn:hover {\n  color: #2D3748;\n}\n.nd-compose-view {\n  padding: 20px;\n}\n.nd-compose-card {\n  background-color: #FFFFFF;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.nd-compose-field {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.nd-field-icon {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #1DBAB4 0%,\n      #7DD3C0 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #FFFFFF;\n  margin-right: 12px;\n}\n.nd-field-icon i {\n  padding: 10px;\n}\n.nd-field-input {\n  flex: 1;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  font-family: "Poppins", sans-serif;\n}\n.nd-field-input:focus {\n  outline: none;\n}\n.nd-field-input::placeholder {\n  color: #9CA3AF;\n}\n.nd-field-text {\n  font-size: 14px;\n  color: #2D3748;\n  font-weight: 500;\n}\n.nd-compose-textarea-container {\n  padding: 16px;\n}\n.nd-compose-textarea {\n  width: 100%;\n  min-height: 200px;\n  border: none;\n  font-size: 14px;\n  color: #2D3748;\n  resize: vertical;\n  font-family: "Poppins", sans-serif;\n  line-height: 1.6;\n}\n.nd-compose-textarea:focus {\n  outline: none;\n}\n.nd-compose-textarea::placeholder {\n  color: #9CA3AF;\n}\n.nd-compose-actions {\n  display: flex;\n  gap: 12px;\n}\n.nd-cancel-btn {\n  flex: 1;\n  padding: 14px;\n  background-color: #FFFFFF;\n  border: 1px solid #E5E7EB;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nd-cancel-btn:hover {\n  background-color: #F5F5F5;\n  border-color: #CBD5E1;\n}\n.nd-submit-btn {\n  flex: 1;\n  padding: 14px;\n  background: var(--gradient-primary);\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #FFFFFF;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 12px rgba(155, 107, 204, 0.3);\n}\n.nd-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(155, 107, 204, 0.4);\n}\n.nd-submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nd-fab {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background-color: #1DBAB4;\n  border: none;\n  color: #FFFFFF;\n  font-size: 24px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(29, 186, 180, 0.4);\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n.nd-fab:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(29, 186, 180, 0.5);\n}\n/*# sourceMappingURL=messages.component.css.map */\n'] }]
  }], () => [{ type: MessagesService }, { type: AuthService }, { type: Location }, { type: PageTitleService }, { type: NotificationService }, { type: ActivatedRoute }, { type: TranslateService }, { type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesComponent, { className: "MessagesComponent", filePath: "src/app/features/messages/messages.component.ts", lineNumber: 26 });
})();
export {
  MessagesComponent
};
//# sourceMappingURL=chunk-ZWF2GYGX.js.map
