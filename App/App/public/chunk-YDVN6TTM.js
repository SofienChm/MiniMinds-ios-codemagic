import {
  ClassesService
} from "./chunk-J7YF57MV.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
import "./chunk-7KUBODN6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-HDGNZI2G.js";
import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/features/chat/chat.component.ts
var _c0 = ["messagesContainer"];
function ChatComponent_ion_content_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 7)(1, "ion-refresher", 8);
    \u0275\u0275listener("ionRefresh", function ChatComponent_ion_content_0_Template_ion_refresher_ionRefresh_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRefresh($event));
    });
    \u0275\u0275element(2, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "app-parent-child-header-simple", 10);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatComponent_ion_content_0_ng_container_6_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const chatContent_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 2, "CHAT_PAGE.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", chatContent_r3);
  }
}
function ChatComponent_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ChatComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-title-page", 13);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, ChatComponent_div_1_ng_container_4_Template, 1, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const chatContent_r3 = \u0275\u0275reference(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "CHAT_PAGE.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 6, "CHAT_PAGE.SUBTITLE"))("breadcrumbs", ctx_r1.breadcrumbs);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", chatContent_r3);
  }
}
function ChatComponent_ng_template_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_ng_template_2_div_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ChatComponent_ng_template_2_div_20_ng_container_3_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getFullUrl(item_r6.profilePictureUrl), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_ng_template_2_div_20_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.avatarColor(item_r6.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(item_r6.name));
  }
}
function ChatComponent_ng_template_2_div_20_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatComponent_ng_template_2_div_20_ng_container_3_img_1_Template, 1, 1, "img", 41)(2, ChatComponent_ng_template_2_div_20_ng_container_3_div_2_Template, 2, 3, "div", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.profilePictureUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r6.profilePictureUrl);
  }
}
function ChatComponent_ng_template_2_div_20_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.unreadCount);
  }
}
function ChatComponent_ng_template_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_div_20_Template_div_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectContact(item_r6));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275template(2, ChatComponent_ng_template_2_div_20_ng_container_2_Template, 3, 0, "ng-container", 32)(3, ChatComponent_ng_template_2_div_20_ng_container_3_Template, 3, 2, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 34)(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 34)(11, "span", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ChatComponent_ng_template_2_div_20_span_13_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isActiveContact(item_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r6.kind === "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.kind === "conversation");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(item_r6.lastMessageAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r6.unreadCount > 0);
  }
}
function ChatComponent_ng_template_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CHAT_PAGE.NO_CONVERSATIONS"), " ");
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 31)(2, "div", 39);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedGroupName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedGroupMemberCount, " ", \u0275\u0275pipeBind1(9, 3, "CHAT_PAGE.MEMBERS"));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_template_6_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.getFullUrl(ctx_r1.selectedUserPicture), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("background", ctx_r1.avatarColor(ctx_r1.selectedUserName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(ctx_r1.selectedUserName));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, ChatComponent_ng_template_2_ng_container_23_ng_template_6_img_1_Template, 1, 1, "img", 41)(2, ChatComponent_ng_template_2_ng_container_23_ng_template_6_div_2_Template, 2, 3, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedUserPicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedUserPicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedUserName);
  }
}
function ChatComponent_ng_template_2_ng_container_23_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CHAT_PAGE.NO_MESSAGES_YET"));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(message_r8.senderName);
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67);
    \u0275\u0275template(2, ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_3_div_2_Template, 2, 1, "div", 68);
    \u0275\u0275elementStart(3, "div", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sent", ctx_r1.isMyGroupMessage(message_r8))("received", !ctx_r1.isMyGroupMessage(message_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isMyGroupMessage(message_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r8.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(message_r8.sentAt));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_1_Template, 3, 3, "div", 62)(2, ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_2_Template, 5, 3, "div", 62)(3, ChatComponent_ng_template_2_ng_container_23_ng_container_21_div_3_Template, 7, 7, "div", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingGroupMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingGroupMessages && ctx_r1.groupMessages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.groupMessages);
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CHAT_PAGE.NO_MESSAGES_YET"));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "CHAT_PAGE.SEEN"), " ");
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_3_span_6_Template, 4, 3, "span", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sent", ctx_r1.isMyMessage(message_r9))("received", !ctx_r1.isMyMessage(message_r9));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r9.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatTime(message_r9.sentAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isMyMessage(message_r9) && message_r9.isRead && ctx_r1.isLastSentMessage(message_r9));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "span", 78);
    \u0275\u0275element(3, "span")(4, "span")(5, "span");
    \u0275\u0275elementEnd()()();
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_1_Template, 3, 3, "div", 62)(2, ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_2_Template, 5, 3, "div", 62)(3, ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_3_Template, 7, 7, "div", 63)(4, ChatComponent_ng_template_2_ng_container_23_ng_container_22_div_4_Template, 6, 0, "div", 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingMessages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingMessages && ctx_r1.messages.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTyping);
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 51);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 80);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_ng_template_2_ng_container_23_ng_container_24_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatComponent_ng_template_2_ng_container_23_ng_container_24_Template_input_keydown_enter_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendGroupMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 81);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_ng_container_23_ng_container_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendGroupMessage());
    });
    \u0275\u0275element(8, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "CHAT_PAGE.ATTACH"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "CHAT_PAGE.TYPE_MESSAGE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(7, 8, "CHAT_PAGE.SEND"));
  }
}
function ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 51);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 84);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template_input_keydown_enter_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    })("input", function ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onTypingInput());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 81);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275element(11, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 5, "CHAT_PAGE.ATTACH"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(5, 7, "CHAT_PAGE.EMOJI"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 9, "CHAT_PAGE.TYPE_MESSAGE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(10, 11, "CHAT_PAGE.SEND"));
  }
}
function ChatComponent_ng_template_2_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47)(3, "button", 48);
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_ng_container_23_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(4, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ChatComponent_ng_template_2_ng_container_23_ng_container_5_Template, 10, 5, "ng-container", 28)(6, ChatComponent_ng_template_2_ng_container_23_ng_template_6_Template, 6, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50)(9, "button", 51);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275element(11, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 51);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275element(14, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 51);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275element(17, "i", 54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 55, 3);
    \u0275\u0275listener("scroll", function ChatComponent_ng_template_2_ng_container_23_Template_div_scroll_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMessagesScroll($event));
    });
    \u0275\u0275template(20, ChatComponent_ng_template_2_ng_container_23_div_20_Template, 4, 3, "div", 56)(21, ChatComponent_ng_template_2_ng_container_23_ng_container_21_Template, 4, 3, "ng-container", 32)(22, ChatComponent_ng_template_2_ng_container_23_ng_container_22_Template, 5, 4, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 57);
    \u0275\u0275template(24, ChatComponent_ng_template_2_ng_container_23_ng_container_24_Template, 9, 10, "ng-container", 32)(25, ChatComponent_ng_template_2_ng_container_23_ng_container_25_Template, 12, 13, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const individualHeader_r12 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedGroupId !== null)("ngIfElse", individualHeader_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(10, 10, "CHAT_PAGE.AUDIO_CALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(13, 12, "CHAT_PAGE.VIDEO_CALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(16, 14, "CHAT_PAGE.INFO"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loadingOlder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGroupId !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGroupId === null && ctx_r1.selectedUserId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedGroupId !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGroupId === null && ctx_r1.selectedUserId);
  }
}
function ChatComponent_ng_template_2_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "CHAT_PAGE.SELECT_CONVERSATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "CHAT_PAGE.CHOOSE_CONTACT"));
  }
}
function ChatComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "button", 17);
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewChatModal());
    });
    \u0275\u0275element(4, "i", 18);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 17);
    \u0275\u0275listener("click", function ChatComponent_ng_template_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewGroupModal());
    });
    \u0275\u0275element(9, "i", 19);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 20)(14, "div", 21);
    \u0275\u0275element(15, "i", 22);
    \u0275\u0275elementStart(16, "input", 23);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_ng_template_2_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.contactSearchTerm, $event) || (ctx_r1.contactSearchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 24);
    \u0275\u0275template(19, ChatComponent_ng_template_2_div_19_Template, 3, 3, "div", 25)(20, ChatComponent_ng_template_2_div_20_Template, 14, 8, "div", 26)(21, ChatComponent_ng_template_2_div_21_Template, 3, 3, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27);
    \u0275\u0275template(23, ChatComponent_ng_template_2_ng_container_23_Template, 26, 16, "ng-container", 28)(24, ChatComponent_ng_template_2_ng_template_24_Template, 8, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emptyState_r13 = \u0275\u0275reference(25);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show-list", ctx_r1.isMobile && !ctx_r1.hasActiveChat)("show-chat", ctx_r1.isMobile && ctx_r1.hasActiveChat);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "CHAT_PAGE.NEW_CHAT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 15, "CHAT_PAGE.NEW_GROUP"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 17, "CHAT_PAGE.SEARCH_CONTACTS"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.contactSearchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.loadingConversations || ctx_r1.loadingGroups) && ctx_r1.conversations.length === 0 && ctx_r1.groups.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingConversations && !ctx_r1.loadingGroups && ctx_r1.conversations.length === 0 && ctx_r1.groups.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasActiveChat)("ngIfElse", emptyState_r13);
  }
}
function ChatComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_div_4_div_15_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const user_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getFullUrl(user_r16.profilePictureUrl), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_div_4_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.avatarColor(user_r16.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(user_r16.name));
  }
}
function ChatComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function ChatComponent_div_4_div_15_Template_div_click_0_listener() {
      const user_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startChat(user_r16));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275template(2, ChatComponent_div_4_div_15_img_2_Template, 1, 1, "img", 41)(3, ChatComponent_div_4_div_15_div_3_Template, 2, 3, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r16.profilePictureUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r16.profilePictureUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r16.email);
  }
}
function ChatComponent_div_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CHAT_PAGE.NO_USERS"), " ");
  }
}
function ChatComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function ChatComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewChatModal());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function ChatComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 87)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function ChatComponent_div_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewChatModal());
    });
    \u0275\u0275element(7, "i", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 90)(9, "div", 21);
    \u0275\u0275element(10, "i", 22);
    \u0275\u0275elementStart(11, "input", 23);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_div_4_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 91);
    \u0275\u0275template(14, ChatComponent_div_4_div_14_Template, 3, 3, "div", 92)(15, ChatComponent_div_4_div_15_Template, 9, 4, "div", 93)(16, ChatComponent_div_4_div_16_Template, 3, 3, "div", 94);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "CHAT_PAGE.NEW_DISCUSSION_TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 8, "CHAT_PAGE.SEARCH_USERS"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loadingContacts);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingContacts && ctx_r1.filteredUsers.length === 0);
  }
}
function ChatComponent_div_5_ng_container_16_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classItem_r19 = ctx.$implicit;
    \u0275\u0275property("ngValue", classItem_r19.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classItem_r19.name);
  }
}
function ChatComponent_div_5_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 102)(2, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_div_5_ng_container_16_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedClassId, $event) || (ctx_r1.selectedClassId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option", 104);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ChatComponent_div_5_ng_container_16_option_6_Template, 2, 2, "option", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedClassId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "CHAT_PAGE.SELECT_CLASS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
  }
}
function ChatComponent_div_5_ng_container_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"), " ");
  }
}
function ChatComponent_div_5_ng_container_17_div_4_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const user_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getFullUrl(user_r22.profilePictureUrl), \u0275\u0275sanitizeUrl);
  }
}
function ChatComponent_div_5_ng_container_17_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.avatarColor(user_r22.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(user_r22.name));
  }
}
function ChatComponent_div_5_ng_container_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function ChatComponent_div_5_ng_container_17_div_4_Template_div_click_0_listener() {
      const user_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleMemberSelection(user_r22.id));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275template(2, ChatComponent_div_5_ng_container_17_div_4_img_2_Template, 1, 1, "img", 41)(3, ChatComponent_div_5_ng_container_17_div_4_div_3_Template, 2, 3, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "i", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r22.profilePictureUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r22.profilePictureUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r22.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle-fill", ctx_r1.selectedMemberIds.includes(user_r22.id))("bi-circle", !ctx_r1.selectedMemberIds.includes(user_r22.id));
  }
}
function ChatComponent_div_5_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 107);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_div_5_ng_container_17_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.groupName, $event) || (ctx_r1.groupName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ChatComponent_div_5_ng_container_17_div_3_Template, 3, 3, "div", 92)(4, ChatComponent_div_5_ng_container_17_div_4_Template, 10, 8, "div", 108);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 4, "CHAT_PAGE.GROUP_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.groupName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.tenantUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tenantUsers);
  }
}
function ChatComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewGroupModal());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 87)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeNewGroupModal());
    });
    \u0275\u0275element(7, "i", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 97)(9, "div", 98)(10, "button", 99);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.groupMode = "class");
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 99);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.groupMode = "manual");
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ChatComponent_div_5_ng_container_16_Template, 7, 6, "ng-container", 32)(17, ChatComponent_div_5_ng_container_17_Template, 5, 6, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 100)(19, "button", 101);
    \u0275\u0275listener("click", function ChatComponent_div_5_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createGroup());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "CHAT_PAGE.NEW_GROUP"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.groupMode === "class");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "CHAT_PAGE.FROM_CLASS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.groupMode === "manual");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "CHAT_PAGE.MANUAL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.groupMode === "class");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.groupMode === "manual");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "CHAT_PAGE.CREATE_GROUP"));
  }
}
var ChatComponent = class _ChatComponent {
  pageTitleService;
  translateService;
  authService;
  messagesService;
  notificationService;
  classesService;
  cdr;
  messagesContainer;
  breadcrumbs = [];
  conversations = [];
  groups = [];
  tenantUsers = [];
  classes = [];
  messages = [];
  groupMessages = [];
  selectedUserId = null;
  selectedUserName = "";
  selectedUserPicture = null;
  selectedGroupId = null;
  selectedGroupName = "";
  selectedGroupMemberCount = 0;
  showNewChatModal = false;
  showNewGroupModal = false;
  groupMode = "class";
  selectedClassId = null;
  groupName = "";
  selectedMemberIds = [];
  newMessage = "";
  searchTerm = "";
  contactSearchTerm = "";
  currentUserId = "";
  loadingConversations = false;
  loadingMessages = false;
  loadingContacts = false;
  loadingOlder = false;
  loadingGroups = false;
  loadingGroupMessages = false;
  conversationPage = 1;
  hasMoreMessages = false;
  pageSize = 30;
  groupPage = 1;
  hasMoreGroupMessages = false;
  isTyping = false;
  isMobile = window.innerWidth < 768;
  typingTimer;
  subscriptions = [];
  constructor(pageTitleService, translateService, authService, messagesService, notificationService, classesService, cdr) {
    this.pageTitleService = pageTitleService;
    this.translateService = translateService;
    this.authService = authService;
    this.messagesService = messagesService;
    this.notificationService = notificationService;
    this.classesService = classesService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.updateTranslations();
    this.currentUserId = this.authService.getUserId() || "";
    this.loadConversations();
    this.loadGroups();
    const langSub = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
    this.subscriptions.push(langSub);
    const msgSub = this.notificationService.chatMessageReceived$.subscribe((data) => {
      this.handleIncomingMessage(data);
    });
    this.subscriptions.push(msgSub);
    const groupMsgSub = this.notificationService.groupMessageReceived$.subscribe((data) => {
      this.handleGroupMessage(data);
    });
    this.subscriptions.push(groupMsgSub);
    const readSub = this.notificationService.messageRead$.subscribe((data) => {
      this.handleMessageRead(data);
    });
    this.subscriptions.push(readSub);
    const typingSub = this.notificationService.typing$.subscribe((data) => {
      this.handleTyping(data);
    });
    this.subscriptions.push(typingSub);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    clearTimeout(this.typingTimer);
  }
  get hasActiveChat() {
    return this.selectedGroupId !== null || !!this.selectedUserId;
  }
  get isParent() {
    return this.authService.isParent();
  }
  onRefresh(event) {
    this.loadConversations();
    this.loadGroups();
    if (this.selectedGroupId !== null) {
      this.loadGroupMessages(this.selectedGroupId, true);
    } else if (this.selectedUserId) {
      this.loadConversation(this.selectedUserId, true);
    }
    setTimeout(() => {
      if (event?.target) {
        event.target.complete();
      }
    }, 500);
  }
  loadConversations() {
    this.loadingConversations = true;
    this.messagesService.getConversations().subscribe({
      next: (conversations) => {
        this.conversations = conversations;
        this.loadingConversations = false;
      },
      error: () => {
        this.loadingConversations = false;
      }
    });
  }
  loadGroups() {
    this.loadingGroups = true;
    this.messagesService.getChatGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
        this.loadingGroups = false;
      },
      error: () => {
        this.loadingGroups = false;
      }
    });
  }
  selectConversation(conversation) {
    this.clearSelection();
    this.selectedUserId = conversation.userId;
    this.selectedUserName = conversation.name;
    this.selectedUserPicture = conversation.profilePictureUrl || null;
    this.loadConversation(conversation.userId);
  }
  selectGroup(group) {
    this.clearSelection();
    this.selectedGroupId = group.id;
    this.selectedGroupName = group.name;
    this.selectedGroupMemberCount = group.memberCount;
    this.loadGroupMessages(group.id);
  }
  loadConversation(userId, silent = false) {
    if (!silent)
      this.loadingMessages = true;
    this.conversationPage = 1;
    this.messagesService.getConversation(userId, 1, this.pageSize).subscribe({
      next: (res) => {
        this.messages = res.messages.slice().reverse();
        this.hasMoreMessages = res.hasMore;
        this.loadingMessages = false;
        this.scrollToBottom();
      },
      error: () => {
        this.loadingMessages = false;
      }
    });
  }
  loadGroupMessages(groupId, silent = false) {
    if (!silent)
      this.loadingGroupMessages = true;
    this.groupPage = 1;
    this.messagesService.getChatGroupMessages(groupId, 1, this.pageSize).subscribe({
      next: (res) => {
        this.groupMessages = res.messages.slice().reverse();
        this.hasMoreGroupMessages = res.hasMore;
        this.loadingGroupMessages = false;
        this.scrollToBottom();
      },
      error: () => {
        this.loadingGroupMessages = false;
      }
    });
  }
  loadOlderMessages() {
    if (!this.selectedUserId || this.loadingOlder || !this.hasMoreMessages)
      return;
    this.loadingOlder = true;
    const nextPage = this.conversationPage + 1;
    this.messagesService.getConversation(this.selectedUserId, nextPage, this.pageSize).subscribe({
      next: (res) => {
        const el = this.messagesContainer?.nativeElement;
        const prevHeight = el?.scrollHeight ?? 0;
        const prevTop = el?.scrollTop ?? 0;
        const older = res.messages.slice().reverse();
        this.messages = [...older, ...this.messages];
        this.conversationPage = nextPage;
        this.hasMoreMessages = res.hasMore;
        this.loadingOlder = false;
        this.cdr.detectChanges();
        const container = this.messagesContainer?.nativeElement;
        if (container) {
          container.scrollTop = container.scrollHeight - prevHeight + prevTop;
        }
      },
      error: () => {
        this.loadingOlder = false;
      }
    });
  }
  loadOlderGroupMessages() {
    if (this.selectedGroupId === null || this.loadingOlder || !this.hasMoreGroupMessages)
      return;
    this.loadingOlder = true;
    const nextPage = this.groupPage + 1;
    this.messagesService.getChatGroupMessages(this.selectedGroupId, nextPage, this.pageSize).subscribe({
      next: (res) => {
        const el = this.messagesContainer?.nativeElement;
        const prevHeight = el?.scrollHeight ?? 0;
        const prevTop = el?.scrollTop ?? 0;
        const older = res.messages.slice().reverse();
        this.groupMessages = [...older, ...this.groupMessages];
        this.groupPage = nextPage;
        this.hasMoreGroupMessages = res.hasMore;
        this.loadingOlder = false;
        this.cdr.detectChanges();
        const container = this.messagesContainer?.nativeElement;
        if (container) {
          container.scrollTop = container.scrollHeight - prevHeight + prevTop;
        }
      },
      error: () => {
        this.loadingOlder = false;
      }
    });
  }
  onMessagesScroll(event) {
    const el = event.target;
    if (el.scrollTop <= 40) {
      if (this.selectedGroupId !== null) {
        this.loadOlderGroupMessages();
      } else if (this.selectedUserId) {
        this.loadOlderMessages();
      }
    }
  }
  openNewChatModal() {
    this.showNewChatModal = true;
    this.loadingContacts = true;
    this.messagesService.getContacts().subscribe({
      next: (users) => {
        this.tenantUsers = users;
        this.loadingContacts = false;
      },
      error: () => {
        this.loadingContacts = false;
      }
    });
  }
  closeNewChatModal() {
    this.showNewChatModal = false;
    this.tenantUsers = [];
    this.searchTerm = "";
  }
  openNewGroupModal() {
    this.showNewGroupModal = true;
    this.groupMode = "class";
    this.selectedClassId = null;
    this.groupName = "";
    this.selectedMemberIds = [];
    if (this.classes.length === 0) {
      this.classesService.getClasses().subscribe({
        next: (classes) => {
          this.classes = classes;
        },
        error: () => {
        }
      });
    }
    if (this.tenantUsers.length === 0) {
      this.messagesService.getContacts().subscribe({
        next: (users) => {
          this.tenantUsers = users;
        },
        error: () => {
        }
      });
    }
  }
  closeNewGroupModal() {
    this.showNewGroupModal = false;
  }
  toggleMemberSelection(userId) {
    const index = this.selectedMemberIds.indexOf(userId);
    if (index > -1) {
      this.selectedMemberIds.splice(index, 1);
    } else {
      this.selectedMemberIds.push(userId);
    }
  }
  createGroup() {
    if (this.groupMode === "class") {
      if (!this.selectedClassId)
        return;
      this.messagesService.createChatGroup({ classId: this.selectedClassId }).subscribe({
        next: (res) => {
          this.closeNewGroupModal();
          this.loadGroups();
          this.openGroupFromCreate(res.groupId, res.name);
        },
        error: () => {
        }
      });
    } else {
      const name = this.groupName.trim();
      if (!name || this.selectedMemberIds.length === 0)
        return;
      this.messagesService.createChatGroup({ name, memberIds: this.selectedMemberIds }).subscribe({
        next: (res) => {
          this.closeNewGroupModal();
          this.loadGroups();
          this.openGroupFromCreate(res.groupId, res.name);
        },
        error: () => {
        }
      });
    }
  }
  openGroupFromCreate(groupId, name) {
    this.clearSelection();
    this.selectedGroupId = groupId;
    this.selectedGroupName = name;
    this.loadGroupMessages(groupId);
    this.loadGroups();
  }
  startChat(user) {
    this.clearSelection();
    this.selectedUserId = user.id;
    this.selectedUserName = user.name;
    this.selectedUserPicture = user.profilePictureUrl || null;
    this.messages = [];
    this.closeNewChatModal();
    if (!this.conversations.some((c) => c.userId === user.id)) {
      this.conversations.unshift({
        userId: user.id,
        name: user.name,
        profilePictureUrl: user.profilePictureUrl,
        lastMessage: "",
        lastMessageAt: (/* @__PURE__ */ new Date()).toISOString(),
        unreadCount: 0
      });
    }
  }
  sendMessage() {
    const content = this.newMessage.trim();
    if (!content || !this.selectedUserId)
      return;
    clearTimeout(this.typingTimer);
    this.notificationService.sendTyping(this.selectedUserId, false);
    this.messagesService.chatSendMessage(this.selectedUserId, content).subscribe({
      next: () => {
        this.newMessage = "";
        this.loadConversation(this.selectedUserId);
        this.loadConversations();
      },
      error: () => {
      }
    });
  }
  sendGroupMessage() {
    const content = this.newMessage.trim();
    if (!content || this.selectedGroupId === null)
      return;
    this.messagesService.sendChatGroupMessage(this.selectedGroupId, content).subscribe({
      next: () => {
        this.newMessage = "";
        this.loadGroupMessages(this.selectedGroupId);
        this.loadGroups();
      },
      error: () => {
      }
    });
  }
  isMyMessage(message) {
    return message.senderId === this.currentUserId;
  }
  isMyGroupMessage(message) {
    return message.senderId === this.currentUserId;
  }
  handleIncomingMessage(data) {
    console.log("[Chat] incoming message event", data);
    this.loadConversations();
    if (data?.senderId && this.selectedUserId && data.senderId === this.selectedUserId) {
      if (data.content) {
        this.messages.push({
          id: data.messageId,
          senderId: data.senderId,
          content: data.content,
          sentAt: data.sentAt,
          isRead: false
        });
        this.scrollToBottom();
      } else {
        this.loadConversation(this.selectedUserId);
      }
    }
  }
  handleGroupMessage(data) {
    this.loadGroups();
    if (data?.groupId && this.selectedGroupId !== null && data.groupId === this.selectedGroupId) {
      this.groupMessages.push({
        id: data.messageId,
        senderId: data.senderId,
        senderName: data.senderName,
        content: data.content,
        sentAt: data.sentAt
      });
      this.scrollToBottom();
    }
  }
  handleMessageRead(data) {
    if (data?.readerId && data.readerId === this.selectedUserId) {
      this.messages = this.messages.map((m) => this.isMyMessage(m) ? __spreadProps(__spreadValues({}, m), { isRead: true }) : m);
      this.cdr.detectChanges();
    }
  }
  handleTyping(data) {
    if (this.selectedUserId && data?.senderId === this.selectedUserId) {
      this.isTyping = !!data.isTyping;
      this.cdr.detectChanges();
    }
  }
  onTypingInput() {
    if (!this.selectedUserId)
      return;
    this.notificationService.sendTyping(this.selectedUserId, true);
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.notificationService.sendTyping(this.selectedUserId, false);
    }, 1500);
  }
  isLastSentMessage(message) {
    if (!this.isMyMessage(message))
      return false;
    const sent = this.messages.filter((m) => this.isMyMessage(m));
    const last = sent[sent.length - 1];
    return !!last && last.id === message.id;
  }
  get filteredUsers() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term)
      return this.tenantUsers;
    return this.tenantUsers.filter((user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term));
  }
  get filteredContacts() {
    const term = this.contactSearchTerm.trim().toLowerCase();
    const conversations = this.conversations.filter((c) => !term || c.name.toLowerCase().includes(term)).map((c) => ({
      kind: "conversation",
      name: c.name,
      profilePictureUrl: c.profilePictureUrl,
      lastMessage: c.lastMessage,
      lastMessageAt: c.lastMessageAt,
      unreadCount: c.unreadCount,
      conversation: c
    }));
    const groups = this.groups.filter((g) => !term || g.name.toLowerCase().includes(term)).map((g) => ({
      kind: "group",
      name: g.name,
      profilePictureUrl: void 0,
      lastMessage: g.lastMessage || "",
      lastMessageAt: g.lastMessageAt,
      unreadCount: g.unreadCount || 0,
      group: g
    }));
    return [...conversations, ...groups].sort((a, b) => {
      const ta = a.lastMessageAt ? new Date(a.lastMessageAt).getTime() : 0;
      const tb = b.lastMessageAt ? new Date(b.lastMessageAt).getTime() : 0;
      return tb - ta;
    });
  }
  isActiveContact(item) {
    return item.kind === "group" ? item.group.id === this.selectedGroupId : item.conversation.userId === this.selectedUserId;
  }
  selectContact(item) {
    if (item.kind === "group") {
      this.selectGroup(item.group);
    } else {
      this.selectConversation(item.conversation);
    }
  }
  initials(name) {
    return name.split(" ").filter(Boolean).map((word) => word[0]).slice(0, 2).join("").toUpperCase();
  }
  avatarColor(name) {
    const palette = ["#7db9ff", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6", "#ec4899"];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = hash * 31 + name.charCodeAt(i) >>> 0;
    }
    return palette[hash % palette.length];
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:"))
      return path;
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  formatTime(date) {
    if (!date)
      return "";
    const d = new Date(date);
    const now = /* @__PURE__ */ new Date();
    if (d.toDateString() === now.toDateString()) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    return d.toLocaleDateString();
  }
  onWindowFocus() {
    this.loadConversations();
    this.loadGroups();
    if (this.selectedGroupId !== null) {
      this.loadGroupMessages(this.selectedGroupId, true);
    } else if (this.selectedUserId) {
      this.loadConversation(this.selectedUserId, true);
    }
  }
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
  goBack() {
    this.clearSelection();
  }
  clearSelection() {
    this.selectedUserId = null;
    this.selectedUserName = "";
    this.selectedUserPicture = null;
    this.selectedGroupId = null;
    this.selectedGroupName = "";
    this.selectedGroupMemberCount = 0;
    this.messages = [];
    this.groupMessages = [];
    this.isTyping = false;
  }
  scrollToBottom() {
    this.cdr.detectChanges();
    const el = this.messagesContainer?.nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }
  updateTranslations() {
    this.pageTitleService.setTitle(this.translateService.instant("CHAT_PAGE.TITLE"));
    this.breadcrumbs = [
      { label: this.translateService.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translateService.instant("CHAT_PAGE.TITLE") }
    ];
  }
  static \u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatComponent)(\u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessagesService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ClassesService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, hostBindings: function ChatComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("focus", function ChatComponent_focus_HostBindingHandler() {
        return ctx.onWindowFocus();
      }, \u0275\u0275resolveWindow)("resize", function ChatComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 6, vars: 4, consts: [["chatContent", ""], ["emptyState", ""], ["individualHeader", ""], ["messagesContainer", ""], ["class", "parent-messages", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], ["class", "px-chat-modal-backdrop", 3, "click", 4, "ngIf"], [1, "parent-messages"], ["slot", "fixed", 3, "ionRefresh"], [1, "parent-detailchild", "new-design"], [3, "title"], [4, "ngTemplateOutlet"], [1, "container-fluid", "mt-4"], [3, "title", "subtitle", "breadcrumbs"], [1, "px-chat-container"], [1, "px-chat-sidebar"], [1, "px-chat-sidebar-actions"], [1, "px-chat-action-btn", 3, "click"], [1, "bi", "bi-chat-square-text"], [1, "bi", "bi-people"], [1, "px-chat-sidebar-search"], [1, "px-chat-search-wrapper"], [1, "bi", "bi-search", "px-chat-search-icon"], ["type", "text", 1, "px-chat-search-input", 3, "ngModelChange", "placeholder", "ngModel"], [1, "px-chat-contact-list"], ["class", "px-chat-contact-empty", 4, "ngIf"], ["class", "px-chat-contact", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "px-chat-main"], [4, "ngIf", "ngIfElse"], [1, "px-chat-contact-empty"], [1, "px-chat-contact", 3, "click"], [1, "px-avatar-wrap"], [4, "ngIf"], [1, "px-chat-contact-info"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "px-chat-contact-name"], [1, "px-chat-contact-time"], [1, "px-chat-contact-last"], ["class", "px-chat-unread", 4, "ngIf"], [1, "px-avatar", "px-group-avatar"], [1, "bi", "bi-people-fill"], ["class", "px-avatar", "alt", "", 3, "src", 4, "ngIf"], ["class", "px-avatar", 3, "background", 4, "ngIf"], ["alt", "", 1, "px-avatar", 3, "src"], [1, "px-avatar"], [1, "px-chat-unread"], [1, "px-chat-header"], [1, "d-flex", "align-items-center", "gap-2", "gap-sm-3"], [1, "px-chat-back-btn", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex", "gap-2"], [1, "px-chat-icon-btn", 3, "title"], [1, "bi", "bi-telephone"], [1, "bi", "bi-camera-video"], [1, "bi", "bi-info-circle"], [1, "px-chat-messages", 3, "scroll"], ["class", "px-chat-older-loader", 4, "ngIf"], [1, "px-chat-input"], [1, "px-chat-header-name"], [1, "px-chat-header-status"], [1, "px-chat-older-loader"], [1, "bi", "bi-arrow-repeat"], ["class", "px-chat-empty", 4, "ngIf"], ["class", "px-chat-message", 3, "sent", "received", 4, "ngFor", "ngForOf"], [1, "px-chat-empty"], [1, "bi", "bi-chat-dots", "px-chat-empty-icon"], [1, "px-chat-message"], [1, "px-chat-bubble"], ["class", "px-chat-sender", 4, "ngIf"], [1, "px-chat-bubble-text"], [1, "px-chat-bubble-time"], [1, "px-chat-sender"], ["class", "px-chat-message received", 4, "ngIf"], ["class", "px-chat-seen", 4, "ngIf"], [1, "px-chat-seen"], [1, "bi", "bi-check2-all"], [1, "px-chat-message", "received"], [1, "px-chat-bubble", "px-chat-bubble-typing"], [1, "px-chat-typing-dots"], [1, "bi", "bi-paperclip"], ["type", "text", 1, "px-chat-input-field", 3, "ngModelChange", "keydown.enter", "placeholder", "ngModel"], [1, "px-chat-send-btn", 3, "click", "title"], [1, "bi", "bi-send"], [1, "bi", "bi-emoji-smile"], ["type", "text", 1, "px-chat-input-field", 3, "ngModelChange", "keydown.enter", "input", "placeholder", "ngModel"], [1, "px-chat-modal-backdrop", 3, "click"], [1, "px-chat-modal", 3, "click"], [1, "px-chat-modal-header"], [1, "px-chat-icon-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "px-chat-modal-search"], [1, "px-chat-modal-body"], ["class", "px-chat-modal-loading", 4, "ngIf"], ["class", "px-chat-contact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "px-chat-modal-empty", 4, "ngIf"], [1, "px-chat-modal-loading"], [1, "px-chat-modal-empty"], [1, "px-chat-modal-body", "px-chat-group-modal-body"], [1, "px-chat-group-modes"], [1, "px-chat-group-mode", 3, "click"], [1, "px-chat-modal-footer"], [1, "px-chat-submit-btn", 3, "click"], [1, "px-chat-group-select-container"], [1, "px-chat-group-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "text", 1, "px-chat-group-input", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "px-chat-member-select", 3, "click", 4, "ngFor", "ngForOf"], [1, "px-chat-member-select", 3, "click"], [1, "bi"]], template: function ChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ChatComponent_ion_content_0_Template, 7, 4, "ion-content", 4)(1, ChatComponent_div_1_Template, 5, 8, "div", 5)(2, ChatComponent_ng_template_2_Template, 26, 19, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ChatComponent_div_4_Template, 17, 10, "div", 6)(5, ChatComponent_div_5_Template, 22, 18, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showNewChatModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewGroupModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslateModule, TitlePage, ParentChildHeaderSimpleComponent, IonContent, IonRefresher, IonRefresherContent, TranslatePipe], styles: ["\n\nion-content.parent-messages[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\n  .header-info {\n  margin-bottom: 0px !important;\n  border-radius: 0 !important;\n}\n.px-chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 200px);\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.px-chat-sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  border-right: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.px-chat-sidebar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 13px;\n  cursor: pointer;\n}\n.px-chat-sidebar-search[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.px-chat-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  pointer-events: none;\n}\n.px-chat-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px 8px 36px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.px-chat-contact-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.px-chat-contact-empty[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  font-size: 13px;\n}\n.px-chat-contact[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.15s;\n}\n.px-chat-contact.active[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.px-chat-contact-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.px-chat-contact-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.px-chat-contact-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.px-chat-contact-last[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n.px-chat-unread[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #7db9ff;\n  color: #fff;\n  line-height: 1.4;\n}\n.px-avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.px-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  object-fit: cover;\n}\n.px-online-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.px-chat-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.px-chat-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n  color: #64748b;\n}\n.px-chat-empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #cbd5e1;\n  margin-bottom: 12px;\n}\n.px-chat-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 16px;\n  color: #0f172a;\n}\n.px-chat-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.px-chat-header[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.px-chat-header-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #0f172a;\n}\n.px-chat-header-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n.px-chat-header-status.online[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.px-chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.px-chat-older-loader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: #64748b;\n  font-size: 12px;\n  padding: 8px 0;\n}\n.px-chat-message[_ngcontent-%COMP%] {\n  display: flex;\n}\n.px-chat-message.sent[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.px-chat-message.received[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.px-chat-bubble[_ngcontent-%COMP%] {\n  max-width: 65%;\n  padding: 10px 16px;\n  border-radius: 16px 16px 4px 16px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.px-chat-message.sent[_ngcontent-%COMP%]   .px-chat-bubble[_ngcontent-%COMP%] {\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 16px 16px 4px 16px;\n}\n.px-chat-message.received[_ngcontent-%COMP%]   .px-chat-bubble[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-radius: 16px 16px 16px 4px;\n}\n.px-chat-bubble-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.px-chat-bubble-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 4px;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.7);\n}\n.px-chat-message.received[_ngcontent-%COMP%]   .px-chat-bubble-time[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.px-chat-seen[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 10px;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.px-chat-bubble-typing[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: inline-flex;\n}\n.px-chat-typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.px-chat-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #94a3b8;\n  animation: _ngcontent-%COMP%_px-chat-typing-bounce 1.2s infinite;\n}\n.px-chat-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.px-chat-typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_px-chat-typing-bounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n.px-chat-back-btn[_ngcontent-%COMP%] {\n  display: none;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  color: #0f172a;\n  font-size: 22px;\n  padding: 4px;\n  cursor: pointer;\n}\n.px-chat-section-label[_ngcontent-%COMP%] {\n  padding: 12px 16px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #94a3b8;\n}\n.px-group-avatar[_ngcontent-%COMP%] {\n  background: #0ea5e9;\n}\n.px-chat-member-count[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #e2e8f0;\n  color: #64748b;\n  line-height: 1.4;\n}\n.px-chat-sender[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #7db9ff;\n  margin-bottom: 2px;\n}\n.px-chat-message.sent[_ngcontent-%COMP%]   .px-chat-sender[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.px-chat-group-modes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-group-mode[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 13px;\n  cursor: pointer;\n}\n.px-chat-group-mode.active[_ngcontent-%COMP%] {\n  background: #7db9ff;\n  color: #fff;\n  border-color: #7db9ff;\n}\n.px-chat-group-select-container[_ngcontent-%COMP%] {\n  margin: 12px 16px;\n}\n.px-chat-group-select[_ngcontent-%COMP%], \n.px-chat-group-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 12px 0;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.px-chat-group-modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n  max-height: 420px;\n}\n.px-chat-member-select[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f1f5f9;\n}\n.px-chat-member-select[_ngcontent-%COMP%]   .px-chat-contact-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.px-chat-member-select[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #7db9ff;\n}\n.px-chat-modal-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n}\n.px-chat-submit-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n}\n@media (max-width: 767px) {\n  .px-chat-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 160px);\n  }\n  .px-chat-sidebar[_ngcontent-%COMP%], \n   .px-chat-main[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .px-chat-container.show-list[_ngcontent-%COMP%]   .px-chat-sidebar[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    border-right: none;\n  }\n  .px-chat-container.show-chat[_ngcontent-%COMP%]   .px-chat-main[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n  .px-chat-back-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .px-chat-contact-last[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.px-chat-input[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .px-chat-input[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n}\n.px-chat-input-field[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n}\n.px-chat-icon-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  cursor: pointer;\n}\n.px-chat-send-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: none;\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 8px;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n}\n.px-chat-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.px-chat-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 420px;\n  max-width: 92vw;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.px-chat-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #0f172a;\n}\n.px-chat-modal-search[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 360px;\n  padding: 8px 0;\n}\n.px-chat-modal-loading[_ngcontent-%COMP%], \n.px-chat-modal-empty[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  font-size: 13px;\n}\n/*# sourceMappingURL=chat.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", standalone: true, imports: [CommonModule, FormsModule, TranslateModule, TitlePage, ParentChildHeaderSimpleComponent, IonContent, IonRefresher, IonRefresherContent], template: `

<ion-content *ngIf="isParent" class="parent-messages">
  <ion-refresher slot="fixed" (ionRefresh)="onRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="parent-detailchild new-design">
    <app-parent-child-header-simple
      [title]="'CHAT_PAGE.TITLE' | translate">
    </app-parent-child-header-simple>
  </div>

  <ng-container *ngTemplateOutlet="chatContent"></ng-container>
</ion-content>

<div *ngIf="!isParent" class="container-fluid mt-4">
  <app-title-page
    [title]="'CHAT_PAGE.TITLE' | translate"
    [subtitle]="'CHAT_PAGE.SUBTITLE' | translate"
    [breadcrumbs]="breadcrumbs">
  </app-title-page>

  <ng-container *ngTemplateOutlet="chatContent"></ng-container>
</div>

<ng-template #chatContent>
  <div class="px-chat-container"
       [class.show-list]="isMobile && !hasActiveChat"
       [class.show-chat]="isMobile && hasActiveChat">

    <!-- Sidebar -->
    <div class="px-chat-sidebar">
      <div class="px-chat-sidebar-actions">
        <button class="px-chat-action-btn" (click)="openNewChatModal()">
          <i class="bi bi-chat-square-text"></i>
          <span>{{ 'CHAT_PAGE.NEW_CHAT' | translate }}</span>
        </button>
        <button class="px-chat-action-btn" (click)="openNewGroupModal()">
          <i class="bi bi-people"></i>
          <span>{{ 'CHAT_PAGE.NEW_GROUP' | translate }}</span>
        </button>
      </div>

      <div class="px-chat-sidebar-search">
        <div class="px-chat-search-wrapper">
          <i class="bi bi-search px-chat-search-icon"></i>
          <input type="text" class="px-chat-search-input" [placeholder]="'CHAT_PAGE.SEARCH_CONTACTS' | translate" [(ngModel)]="contactSearchTerm">
        </div>
      </div>

      <div class="px-chat-contact-list">
        <div class="px-chat-contact-empty" *ngIf="(loadingConversations || loadingGroups) && conversations.length === 0 && groups.length === 0">
          {{ 'COMMON.LOADING' | translate }}
        </div>

        <div class="px-chat-contact"
             *ngFor="let item of filteredContacts"
             [class.active]="isActiveContact(item)"
             (click)="selectContact(item)">
          <div class="px-avatar-wrap">
            <ng-container *ngIf="item.kind === 'group'">
              <div class="px-avatar px-group-avatar"><i class="bi bi-people-fill"></i></div>
            </ng-container>
            <ng-container *ngIf="item.kind === 'conversation'">
              <img *ngIf="item.profilePictureUrl" class="px-avatar" [src]="getFullUrl(item.profilePictureUrl)" alt="">
              <div *ngIf="!item.profilePictureUrl" class="px-avatar" [style.background]="avatarColor(item.name)">{{ initials(item.name) }}</div>
            </ng-container>
          </div>
          <div class="px-chat-contact-info">
            <div class="d-flex justify-content-between align-items-center">
              <span class="px-chat-contact-name">{{ item.name }}</span>
              <span class="px-chat-contact-time">{{ formatTime(item.lastMessageAt) }}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class="px-chat-contact-last">{{ item.lastMessage }}</span>
              <span class="px-chat-unread" *ngIf="item.unreadCount > 0">{{ item.unreadCount }}</span>
            </div>
          </div>
        </div>

        <div class="px-chat-contact-empty" *ngIf="!loadingConversations && !loadingGroups && conversations.length === 0 && groups.length === 0">
          {{ 'CHAT_PAGE.NO_CONVERSATIONS' | translate }}
        </div>
      </div>
    </div>

    <!-- Main -->
    <div class="px-chat-main">
      <ng-container *ngIf="hasActiveChat; else emptyState">
        <div class="px-chat-header">
          <div class="d-flex align-items-center gap-2 gap-sm-3">
            <button class="px-chat-back-btn" (click)="goBack()">
              <i class="bi bi-arrow-left"></i>
            </button>

            <ng-container *ngIf="selectedGroupId !== null; else individualHeader">
              <div class="px-avatar-wrap">
                <div class="px-avatar px-group-avatar"><i class="bi bi-people-fill"></i></div>
              </div>
              <div>
                <div class="px-chat-header-name">{{ selectedGroupName }}</div>
                <div class="px-chat-header-status">{{ selectedGroupMemberCount }} {{ 'CHAT_PAGE.MEMBERS' | translate }}</div>
              </div>
            </ng-container>
            <ng-template #individualHeader>
              <div class="px-avatar-wrap">
                <img *ngIf="selectedUserPicture" class="px-avatar" [src]="getFullUrl(selectedUserPicture)" alt="">
                <div *ngIf="!selectedUserPicture" class="px-avatar" [style.background]="avatarColor(selectedUserName)">{{ initials(selectedUserName) }}</div>
              </div>
              <div>
                <div class="px-chat-header-name">{{ selectedUserName }}</div>
              </div>
            </ng-template>
          </div>
          <div class="d-flex gap-2">
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.AUDIO_CALL' | translate"><i class="bi bi-telephone"></i></button>
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.VIDEO_CALL' | translate"><i class="bi bi-camera-video"></i></button>
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.INFO' | translate"><i class="bi bi-info-circle"></i></button>
          </div>
        </div>

        <div class="px-chat-messages" #messagesContainer (scroll)="onMessagesScroll($event)">
          <div class="px-chat-older-loader" *ngIf="loadingOlder">
            <i class="bi bi-arrow-repeat"></i>
            {{ 'COMMON.LOADING' | translate }}
          </div>

          <!-- Group messages -->
          <ng-container *ngIf="selectedGroupId !== null">
            <div class="px-chat-empty" *ngIf="loadingGroupMessages">
              {{ 'COMMON.LOADING' | translate }}
            </div>
            <div class="px-chat-empty" *ngIf="!loadingGroupMessages && groupMessages.length === 0">
              <i class="bi bi-chat-dots px-chat-empty-icon"></i>
              <p>{{ 'CHAT_PAGE.NO_MESSAGES_YET' | translate }}</p>
            </div>
            <div class="px-chat-message"
                 *ngFor="let message of groupMessages"
                 [class.sent]="isMyGroupMessage(message)"
                 [class.received]="!isMyGroupMessage(message)">
              <div class="px-chat-bubble">
                <div class="px-chat-sender" *ngIf="!isMyGroupMessage(message)">{{ message.senderName }}</div>
                <div class="px-chat-bubble-text">{{ message.content }}</div>
                <div class="px-chat-bubble-time">{{ formatTime(message.sentAt) }}</div>
              </div>
            </div>
          </ng-container>

          <!-- Individual messages -->
          <ng-container *ngIf="selectedGroupId === null && selectedUserId">
            <div class="px-chat-empty" *ngIf="loadingMessages">
              {{ 'COMMON.LOADING' | translate }}
            </div>
            <div class="px-chat-empty" *ngIf="!loadingMessages && messages.length === 0">
              <i class="bi bi-chat-dots px-chat-empty-icon"></i>
              <p>{{ 'CHAT_PAGE.NO_MESSAGES_YET' | translate }}</p>
            </div>
            <div class="px-chat-message"
                 *ngFor="let message of messages"
                 [class.sent]="isMyMessage(message)"
                 [class.received]="!isMyMessage(message)">
              <div class="px-chat-bubble">
                <div class="px-chat-bubble-text">{{ message.content }}</div>
                <div class="px-chat-bubble-time">
                  {{ formatTime(message.sentAt) }}
                  <span *ngIf="isMyMessage(message) && message.isRead && isLastSentMessage(message)" class="px-chat-seen">
                    <i class="bi bi-check2-all"></i> {{ 'CHAT_PAGE.SEEN' | translate }}
                  </span>
                </div>
              </div>
            </div>
            <div class="px-chat-message received" *ngIf="isTyping">
              <div class="px-chat-bubble px-chat-bubble-typing">
                <span class="px-chat-typing-dots"><span></span><span></span><span></span></span>
              </div>
            </div>
          </ng-container>
        </div>

        <div class="px-chat-input">
          <ng-container *ngIf="selectedGroupId !== null">
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.ATTACH' | translate"><i class="bi bi-paperclip"></i></button>
            <input type="text" class="px-chat-input-field" [placeholder]="'CHAT_PAGE.TYPE_MESSAGE' | translate"
                   [(ngModel)]="newMessage" (keydown.enter)="sendGroupMessage()">
            <button class="px-chat-send-btn" (click)="sendGroupMessage()" [title]="'CHAT_PAGE.SEND' | translate"><i class="bi bi-send"></i></button>
          </ng-container>

          <ng-container *ngIf="selectedGroupId === null && selectedUserId">
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.ATTACH' | translate"><i class="bi bi-paperclip"></i></button>
            <button class="px-chat-icon-btn" [title]="'CHAT_PAGE.EMOJI' | translate"><i class="bi bi-emoji-smile"></i></button>
            <input type="text" class="px-chat-input-field" [placeholder]="'CHAT_PAGE.TYPE_MESSAGE' | translate"
                   [(ngModel)]="newMessage" (keydown.enter)="sendMessage()" (input)="onTypingInput()">
            <button class="px-chat-send-btn" (click)="sendMessage()" [title]="'CHAT_PAGE.SEND' | translate"><i class="bi bi-send"></i></button>
          </ng-container>
        </div>
      </ng-container>

      <ng-template #emptyState>
        <div class="px-chat-empty">
          <i class="bi bi-chat-dots px-chat-empty-icon"></i>
          <h3>{{ 'CHAT_PAGE.SELECT_CONVERSATION' | translate }}</h3>
          <p>{{ 'CHAT_PAGE.CHOOSE_CONTACT' | translate }}</p>
        </div>
      </ng-template>
    </div>

  </div>
</ng-template>

<!-- New discussion modal -->
<div class="px-chat-modal-backdrop" *ngIf="showNewChatModal" (click)="closeNewChatModal()">
  <div class="px-chat-modal" (click)="$event.stopPropagation()">
    <div class="px-chat-modal-header">
      <h3>{{ 'CHAT_PAGE.NEW_DISCUSSION_TITLE' | translate }}</h3>
      <button class="px-chat-icon-btn" (click)="closeNewChatModal()"><i class="bi bi-x-lg"></i></button>
    </div>
    <div class="px-chat-modal-search">
      <div class="px-chat-search-wrapper">
        <i class="bi bi-search px-chat-search-icon"></i>
        <input type="text" class="px-chat-search-input" [placeholder]="'CHAT_PAGE.SEARCH_USERS' | translate" [(ngModel)]="searchTerm">
      </div>
    </div>
    <div class="px-chat-modal-body">
      <div class="px-chat-modal-loading" *ngIf="loadingContacts">
        {{ 'COMMON.LOADING' | translate }}
      </div>
      <div class="px-chat-contact" *ngFor="let user of filteredUsers" (click)="startChat(user)">
        <div class="px-avatar-wrap">
          <img *ngIf="user.profilePictureUrl" class="px-avatar" [src]="getFullUrl(user.profilePictureUrl)" alt="">
          <div *ngIf="!user.profilePictureUrl" class="px-avatar" [style.background]="avatarColor(user.name)">{{ initials(user.name) }}</div>
        </div>
        <div class="px-chat-contact-info">
          <div class="px-chat-contact-name">{{ user.name }}</div>
          <div class="px-chat-contact-last">{{ user.email }}</div>
        </div>
      </div>
      <div class="px-chat-modal-empty" *ngIf="!loadingContacts && filteredUsers.length === 0">
        {{ 'CHAT_PAGE.NO_USERS' | translate }}
      </div>
    </div>
  </div>
</div>

<!-- New group modal -->
<div class="px-chat-modal-backdrop" *ngIf="showNewGroupModal" (click)="closeNewGroupModal()">
  <div class="px-chat-modal" (click)="$event.stopPropagation()">
    <div class="px-chat-modal-header">
      <h3>{{ 'CHAT_PAGE.NEW_GROUP' | translate }}</h3>
      <button class="px-chat-icon-btn" (click)="closeNewGroupModal()"><i class="bi bi-x-lg"></i></button>
    </div>
    <div class="px-chat-modal-body px-chat-group-modal-body">

      <div class="px-chat-group-modes">
        <button class="px-chat-group-mode" [class.active]="groupMode === 'class'" (click)="groupMode = 'class'">
          {{ 'CHAT_PAGE.FROM_CLASS' | translate }}
        </button>
        <button class="px-chat-group-mode" [class.active]="groupMode === 'manual'" (click)="groupMode = 'manual'">
          {{ 'CHAT_PAGE.MANUAL' | translate }}
        </button>
      </div>

      <ng-container *ngIf="groupMode === 'class'">
        <div class="px-chat-group-select-container" >
          <select class="px-chat-group-select" [(ngModel)]="selectedClassId">
            <option [ngValue]="null" disabled>{{ 'CHAT_PAGE.SELECT_CLASS' | translate }}</option>
            <option *ngFor="let classItem of classes" [ngValue]="classItem.id">{{ classItem.name }}</option>
          </select>
        </div>
      </ng-container>

      <ng-container *ngIf="groupMode === 'manual'">
        <input type="text" class="px-chat-group-input" [placeholder]="'CHAT_PAGE.GROUP_NAME' | translate" [(ngModel)]="groupName">
        <div class="px-chat-modal-loading" *ngIf="tenantUsers.length === 0">
          {{ 'COMMON.LOADING' | translate }}
        </div>
        <div class="px-chat-member-select" *ngFor="let user of tenantUsers" (click)="toggleMemberSelection(user.id)">
          <div class="px-avatar-wrap">
            <img *ngIf="user.profilePictureUrl" class="px-avatar" [src]="getFullUrl(user.profilePictureUrl)" alt="">
            <div *ngIf="!user.profilePictureUrl" class="px-avatar" [style.background]="avatarColor(user.name)">{{ initials(user.name) }}</div>
          </div>
          <div class="px-chat-contact-info">
            <div class="px-chat-contact-name">{{ user.name }}</div>
            <div class="px-chat-contact-last">{{ user.email }}</div>
          </div>
          <i class="bi" [class.bi-check-circle-fill]="selectedMemberIds.includes(user.id)" [class.bi-circle]="!selectedMemberIds.includes(user.id)"></i>
        </div>
      </ng-container>
    </div>
    <div class="px-chat-modal-footer">
      <button class="px-chat-submit-btn" (click)="createGroup()">{{ 'CHAT_PAGE.CREATE_GROUP' | translate }}</button>
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/chat/chat.component.scss */\nion-content.parent-messages {\n  --background: #ffffff;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  display: block !important;\n  position: relative !important;\n  min-height: calc(100vh - 95px) !important;\n}\n::ng-deep .header-info {\n  margin-bottom: 0px !important;\n  border-radius: 0 !important;\n}\n.px-chat-container {\n  display: flex;\n  height: calc(100vh - 200px);\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.px-chat-sidebar {\n  width: 320px;\n  border-right: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.px-chat-sidebar-actions {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-action-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 13px;\n  cursor: pointer;\n}\n.px-chat-sidebar-search {\n  padding: 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-search-wrapper {\n  position: relative;\n}\n.px-chat-search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #64748b;\n  pointer-events: none;\n}\n.px-chat-search-input {\n  width: 100%;\n  padding: 8px 12px 8px 36px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.px-chat-contact-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.px-chat-contact-empty {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  font-size: 13px;\n}\n.px-chat-contact {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #e2e8f0;\n  transition: background 0.15s;\n}\n.px-chat-contact.active {\n  background: #f8fafc;\n}\n.px-chat-contact-info {\n  flex: 1;\n  min-width: 0;\n}\n.px-chat-contact-name {\n  font-weight: 600;\n  font-size: 14px;\n  color: #0f172a;\n}\n.px-chat-contact-time {\n  font-size: 11px;\n  color: #64748b;\n  white-space: nowrap;\n}\n.px-chat-contact-last {\n  font-size: 12px;\n  color: #64748b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n.px-chat-unread {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #7db9ff;\n  color: #fff;\n  line-height: 1.4;\n}\n.px-avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.px-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  object-fit: cover;\n}\n.px-online-dot {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.px-chat-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.px-chat-empty {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 24px;\n  color: #64748b;\n}\n.px-chat-empty-icon {\n  font-size: 3rem;\n  color: #cbd5e1;\n  margin-bottom: 12px;\n}\n.px-chat-empty h3 {\n  margin: 0 0 6px;\n  font-size: 16px;\n  color: #0f172a;\n}\n.px-chat-empty p {\n  margin: 0;\n  font-size: 13px;\n}\n.px-chat-header {\n  padding: 12px 20px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.px-chat-header-name {\n  font-weight: 600;\n  font-size: 15px;\n  color: #0f172a;\n}\n.px-chat-header-status {\n  font-size: 12px;\n  color: #64748b;\n}\n.px-chat-header-status.online {\n  color: #10b981;\n}\n.px-chat-messages {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.px-chat-older-loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  color: #64748b;\n  font-size: 12px;\n  padding: 8px 0;\n}\n.px-chat-message {\n  display: flex;\n}\n.px-chat-message.sent {\n  justify-content: flex-end;\n}\n.px-chat-message.received {\n  justify-content: flex-start;\n}\n.px-chat-bubble {\n  max-width: 65%;\n  padding: 10px 16px;\n  border-radius: 16px 16px 4px 16px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.px-chat-message.sent .px-chat-bubble {\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 16px 16px 4px 16px;\n}\n.px-chat-message.received .px-chat-bubble {\n  background: #f1f5f9;\n  color: #0f172a;\n  border-radius: 16px 16px 16px 4px;\n}\n.px-chat-bubble-text {\n  font-size: 14px;\n  line-height: 1.5;\n}\n.px-chat-bubble-time {\n  font-size: 10px;\n  margin-top: 4px;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.7);\n}\n.px-chat-message.received .px-chat-bubble-time {\n  color: #64748b;\n}\n.px-chat-seen {\n  margin-left: 6px;\n  font-size: 10px;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.px-chat-bubble-typing {\n  padding: 14px 16px;\n  display: inline-flex;\n}\n.px-chat-typing-dots {\n  display: flex;\n  gap: 4px;\n}\n.px-chat-typing-dots span {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #94a3b8;\n  animation: px-chat-typing-bounce 1.2s infinite;\n}\n.px-chat-typing-dots span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.px-chat-typing-dots span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes px-chat-typing-bounce {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-4px);\n    opacity: 1;\n  }\n}\n.px-chat-back-btn {\n  display: none;\n  flex-shrink: 0;\n  border: none;\n  background: transparent;\n  color: #0f172a;\n  font-size: 22px;\n  padding: 4px;\n  cursor: pointer;\n}\n.px-chat-section-label {\n  padding: 12px 16px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #94a3b8;\n}\n.px-group-avatar {\n  background: #0ea5e9;\n}\n.px-chat-member-count {\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #e2e8f0;\n  color: #64748b;\n  line-height: 1.4;\n}\n.px-chat-sender {\n  font-size: 12px;\n  font-weight: 600;\n  color: #7db9ff;\n  margin-bottom: 2px;\n}\n.px-chat-message.sent .px-chat-sender {\n  color: rgba(255, 255, 255, 0.85);\n}\n.px-chat-group-modes {\n  display: flex;\n  gap: 8px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-group-mode {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 13px;\n  cursor: pointer;\n}\n.px-chat-group-mode.active {\n  background: #7db9ff;\n  color: #fff;\n  border-color: #7db9ff;\n}\n.px-chat-group-select-container {\n  margin: 12px 16px;\n}\n.px-chat-group-select,\n.px-chat-group-input {\n  width: 100%;\n  margin: 12px 0;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 13px;\n  outline: none;\n}\n.px-chat-group-modal-body {\n  padding: 0;\n  max-height: 420px;\n}\n.px-chat-member-select {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f1f5f9;\n}\n.px-chat-member-select .px-chat-contact-info {\n  flex: 1;\n}\n.px-chat-member-select > i {\n  font-size: 20px;\n  color: #7db9ff;\n}\n.px-chat-modal-footer {\n  padding: 12px 16px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  justify-content: flex-end;\n}\n.px-chat-submit-btn {\n  border: none;\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 8px;\n  padding: 8px 16px;\n  cursor: pointer;\n  font-size: 14px;\n}\n@media (max-width: 767px) {\n  .px-chat-container {\n    height: calc(100vh - 160px);\n  }\n  .px-chat-sidebar,\n  .px-chat-main {\n    display: none;\n  }\n  .px-chat-container.show-list .px-chat-sidebar {\n    display: flex;\n    width: 100%;\n    border-right: none;\n  }\n  .px-chat-container.show-chat .px-chat-main {\n    display: flex;\n    width: 100%;\n  }\n  .px-chat-back-btn {\n    display: flex;\n  }\n  .px-chat-contact-last {\n    max-width: 100%;\n  }\n}\n.px-chat-input {\n  padding: 12px 20px;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 480px) {\n  .px-chat-input {\n    gap: 6px;\n  }\n}\n.px-chat-input-field {\n  flex: 1;\n  padding: 8px 12px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n}\n.px-chat-icon-btn {\n  flex-shrink: 0;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  border-radius: 8px;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  cursor: pointer;\n}\n.px-chat-send-btn {\n  flex-shrink: 0;\n  border: none;\n  background: #7db9ff;\n  color: #fff;\n  border-radius: 8px;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-size: 18px;\n}\n.px-chat-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.px-chat-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 420px;\n  max-width: 92vw;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.px-chat-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-modal-header h3 {\n  margin: 0;\n  font-size: 16px;\n  color: #0f172a;\n}\n.px-chat-modal-search {\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.px-chat-modal-body {\n  overflow-y: auto;\n  max-height: 360px;\n  padding: 8px 0;\n}\n.px-chat-modal-loading,\n.px-chat-modal-empty {\n  padding: 24px 16px;\n  text-align: center;\n  color: #64748b;\n  font-size: 13px;\n}\n/*# sourceMappingURL=chat.component.css.map */\n"] }]
  }], () => [{ type: PageTitleService }, { type: TranslateService }, { type: AuthService }, { type: MessagesService }, { type: NotificationService }, { type: ClassesService }, { type: ChangeDetectorRef }], { messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }], onWindowFocus: [{
    type: HostListener,
    args: ["window:focus"]
  }], onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/features/chat/chat.component.ts", lineNumber: 37 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chunk-YDVN6TTM.js.map
