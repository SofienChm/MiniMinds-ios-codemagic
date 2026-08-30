import {
  EventParticipantsService
} from "./chunk-7YLPMD5M.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  EventService
} from "./chunk-CF5UU2UU.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  showSuccessToast
} from "./chunk-ANAILLWU.js";
import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/features/event/event-participants/event-participants.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0, a1, a2, a3) => ({ "bg-success": a0, "bg-warning": a1, "bg-danger": a2, "bg-info": a3 });
function EventParticipants_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EVENT_PARTICIPANTS.ADD_PARTICIPANT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.participants.length, "/", ctx_r1.event.capacity);
  }
}
function EventParticipants_div_4_ng_template_10_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", item_r3.parent.firstName, " ", item_r3.parent.lastName);
  }
}
function EventParticipants_div_4_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EventParticipants_div_4_ng_template_10_span_5_Template, 2, 2, "span", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r3 == null ? null : item_r3.profilePicture) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r3.firstName, " ", item_r3.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.parent);
  }
}
function EventParticipants_div_4_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementStart(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r4 == null ? null : item_r4.profilePicture) || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.firstName, " ", item_r4.lastName);
  }
}
function EventParticipants_div_4_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventParticipants_div_4_ng_template_11_div_0_Template, 4, 3, "div", 31);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    \u0275\u0275property("ngIf", item_r4 == null ? null : item_r4.id);
  }
}
function EventParticipants_div_4_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
}
function EventParticipants_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, EventParticipants_div_4_div_1_Template, 6, 5, "div", 12);
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 13)(4, "div", 14)(5, "label", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ng-select", 16);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EventParticipants_div_4_Template_ng_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedChildId, $event) || (ctx_r1.selectedChildId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, EventParticipants_div_4_ng_template_10_Template, 6, 4, "ng-template", 17)(11, EventParticipants_div_4_ng_template_11_Template, 1, 1, "ng-template", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "button", 20);
    \u0275\u0275listener("click", function EventParticipants_div_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addParticipant());
    });
    \u0275\u0275element(14, "i", 21);
    \u0275\u0275template(15, EventParticipants_div_4_span_15_Template, 1, 0, "span", 22);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "EVENT_PARTICIPANTS.SELECT_CHILD"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedChildId);
    \u0275\u0275property("items", ctx_r1.availableChildren)("placeholder", \u0275\u0275pipeBind1(9, 12, "EVENT_PARTICIPANTS.CHOOSE_CHILD"))("clearable", true)("searchable", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.selectedChildId || ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? \u0275\u0275pipeBind1(17, 14, "EVENT_PARTICIPANTS.ADDING") : \u0275\u0275pipeBind1(18, 16, "EVENT_PARTICIPANTS.ADD_PARTICIPANT_BTN"), " ");
  }
}
function EventParticipants_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EVENT_PARTICIPANTS.LOADING"));
  }
}
function EventParticipants_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "EVENT_PARTICIPANTS.NO_PARTICIPANTS"), " ");
  }
}
function EventParticipants_div_17_tr_20_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveParticipant(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.APPROVE"));
  }
}
function EventParticipants_div_17_tr_20_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectParticipant(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.REJECT"));
  }
}
function EventParticipants_div_17_tr_20_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveCancellation(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.APPROVE_CANCELLATION"));
  }
}
function EventParticipants_div_17_tr_20_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectCancellation(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.REJECT_CANCELLATION"));
  }
}
function EventParticipants_div_17_tr_20_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestCancellation(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.REQUEST_CANCELLATION"));
  }
}
function EventParticipants_div_17_tr_20_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function EventParticipants_div_17_tr_20_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const participant_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeParticipant(participant_r6.id));
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "EVENT_PARTICIPANTS.REMOVE"));
  }
}
function EventParticipants_div_17_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 45);
    \u0275\u0275template(14, EventParticipants_div_17_tr_20_button_14_Template, 3, 3, "button", 46)(15, EventParticipants_div_17_tr_20_button_15_Template, 3, 3, "button", 47)(16, EventParticipants_div_17_tr_20_button_16_Template, 3, 3, "button", 46)(17, EventParticipants_div_17_tr_20_button_17_Template, 3, 3, "button", 47)(18, EventParticipants_div_17_tr_20_button_18_Template, 3, 3, "button", 47)(19, EventParticipants_div_17_tr_20_button_19_Template, 3, 3, "button", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const participant_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", participant_r6.child == null ? null : participant_r6.child.firstName, " ", participant_r6.child == null ? null : participant_r6.child.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", participant_r6.child == null ? null : participant_r6.child.parent == null ? null : participant_r6.child.parent.firstName, " ", participant_r6.child == null ? null : participant_r6.child.parent == null ? null : participant_r6.child.parent.lastName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 13, participant_r6.registeredAt, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(16, _c0, participant_r6.status === "Registered", participant_r6.status === "Pending", participant_r6.status === "Rejected", participant_r6.status === "CancellationPending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(participant_r6.status));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.authService.isAdmin() && participant_r6.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isAdmin() && participant_r6.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isAdmin() && participant_r6.status === "CancellationPending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isAdmin() && participant_r6.status === "CancellationPending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRequestCancellation(participant_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRemoveParticipant(participant_r6) && participant_r6.status !== "CancellationPending");
  }
}
function EventParticipants_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41)(2, "thead", 42)(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, EventParticipants_div_17_tr_20_Template, 20, 21, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "EVENT_PARTICIPANTS.CHILD_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "EVENT_PARTICIPANTS.PARENT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "EVENT_PARTICIPANTS.REGISTERED_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "EVENT_PARTICIPANTS.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "EVENT_PARTICIPANTS.ACTIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.participants);
  }
}
var EventParticipants = class _EventParticipants {
  route;
  router;
  participantsService;
  childrenService;
  eventService;
  authService;
  translate;
  pageTitleService;
  langChangeSub;
  eventId = 0;
  event = null;
  participants = [];
  availableChildren = [];
  selectedChildId = 0;
  loading = false;
  saving = false;
  breadcrumbs = [];
  titleActions = [];
  constructor(route, router, participantsService, childrenService, eventService, authService, translate, pageTitleService) {
    this.route = route;
    this.router = router;
    this.participantsService = participantsService;
    this.childrenService = childrenService;
    this.eventService = eventService;
    this.authService = authService;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("EVENT_PARTICIPANTS.TITLE"));
    this.eventId = Number(this.route.snapshot.paramMap.get("id"));
    this.initBreadcrumbs();
    this.loadEvent();
    this.loadParticipants();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("EVENT_PARTICIPANTS.TITLE"));
      this.initBreadcrumbs();
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD") },
      { label: this.translate.instant("BREADCRUMBS.EVENTS"), url: "/events" },
      { label: this.translate.instant("EVENT_PARTICIPANTS.TITLE") }
    ];
  }
  loadEvent() {
    this.eventService.getEvent(this.eventId).subscribe({
      next: (event) => {
        this.event = event;
        this.setupTitleActions();
      },
      error: (error) => {
        console.error("Error loading event:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENT_PARTICIPANTS.LOAD_EVENT_ERROR")
        });
      }
    });
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EVENT_PARTICIPANTS.BACK_TO_EVENT"),
        icon: "bi bi-arrow-left",
        class: "btn-outline-primary",
        action: () => this.router.navigate(["/events/detail", this.eventId])
      }
    ];
  }
  loadParticipants() {
    this.loading = true;
    this.participantsService.getEventParticipants(this.eventId).subscribe({
      next: (participants) => {
        this.participants = participants;
        this.loadAvailableChildren();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading participants:", error);
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENT_PARTICIPANTS.LOAD_ERROR")
        });
      }
    });
  }
  loadAvailableChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        const registeredChildIds = this.participants.map((p) => p.childId);
        this.availableChildren = children.filter((c) => !registeredChildIds.includes(c.id));
      },
      error: (error) => {
        console.error("Error loading children:", error);
      }
    });
  }
  addParticipant() {
    if (!this.selectedChildId)
      return;
    this.saving = true;
    const participant = {
      eventId: this.eventId,
      childId: Number(this.selectedChildId)
    };
    this.participantsService.registerParticipant(participant).subscribe({
      next: () => {
        this.selectedChildId = 0;
        this.loadParticipants();
        this.saving = false;
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
      },
      error: (error) => {
        console.error("Error adding participant:", error);
        this.saving = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENT_PARTICIPANTS.ADD_ERROR")
        });
      }
    });
  }
  removeParticipant(participantId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EVENT_PARTICIPANTS.REMOVE_CONFIRM_TITLE"),
      text: this.translate.instant("EVENT_PARTICIPANTS.REMOVE_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("EVENT_PARTICIPANTS.YES_REMOVE"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.participantsService.removeParticipant(participantId).subscribe({
          next: () => {
            this.loadParticipants();
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: (error) => {
            console.error("Error removing participant:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("EVENT_PARTICIPANTS.REMOVE_ERROR")
            });
          }
        });
      }
    });
  }
  canAddParticipants() {
    return this.authService.isAdmin() || this.authService.isTeacher() || this.authService.isParent();
  }
  canRemoveParticipant(participant) {
    if (this.authService.isAdmin() || this.authService.isTeacher()) {
      return true;
    }
    if (this.authService.isParent()) {
      const parentId = this.authService.getParentId();
      return !!(participant.child?.parent?.id && parentId === participant.child.parent.id);
    }
    return false;
  }
  approveParticipant(participantId) {
    this.participantsService.approveParticipant(participantId).subscribe({
      next: () => {
        this.loadParticipants();
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
      },
      error: (error) => {
        console.error("Error approving participant:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENT_PARTICIPANTS.APPROVE_ERROR")
        });
      }
    });
  }
  rejectParticipant(participantId) {
    this.participantsService.rejectParticipant(participantId).subscribe({
      next: () => {
        this.loadParticipants();
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
      },
      error: (error) => {
        console.error("Error rejecting participant:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("EVENT_PARTICIPANTS.REJECT_ERROR")
        });
      }
    });
  }
  getStatusLabel(status) {
    switch (status) {
      case "Registered":
        return this.translate.instant("EVENT_PARTICIPANTS.STATUS_REGISTERED");
      case "Pending":
        return this.translate.instant("EVENT_PARTICIPANTS.STATUS_PENDING");
      case "Rejected":
        return this.translate.instant("EVENT_PARTICIPANTS.STATUS_REJECTED");
      case "CancellationPending":
        return this.translate.instant("EVENT_PARTICIPANTS.STATUS_CANCELLATION_PENDING");
      default:
        return status || "";
    }
  }
  canRequestCancellation(participant) {
    if (!this.authService.isParent())
      return false;
    if (participant.status !== "Registered")
      return false;
    const parentId = this.authService.getParentId();
    return !!(participant.child?.parent?.id && parentId === participant.child.parent.id);
  }
  requestCancellation(participantId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EVENT_PARTICIPANTS.CANCEL_REQUEST_TITLE"),
      text: this.translate.instant("EVENT_PARTICIPANTS.CANCEL_REQUEST_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("EVENT_PARTICIPANTS.YES_REQUEST_CANCEL"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.participantsService.requestCancellation(participantId).subscribe({
          next: () => {
            this.loadParticipants();
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: (error) => {
            console.error("Error requesting cancellation:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("EVENT_PARTICIPANTS.CANCEL_REQUEST_ERROR")
            });
          }
        });
      }
    });
  }
  approveCancellation(participantId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EVENT_PARTICIPANTS.APPROVE_CANCEL_TITLE"),
      text: this.translate.instant("EVENT_PARTICIPANTS.APPROVE_CANCEL_TEXT"),
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("EVENT_PARTICIPANTS.YES_APPROVE_CANCEL"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.participantsService.approveCancellation(participantId).subscribe({
          next: () => {
            this.loadParticipants();
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: (error) => {
            console.error("Error approving cancellation:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("EVENT_PARTICIPANTS.APPROVE_CANCEL_ERROR")
            });
          }
        });
      }
    });
  }
  rejectCancellation(participantId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("EVENT_PARTICIPANTS.REJECT_CANCEL_TITLE"),
      text: this.translate.instant("EVENT_PARTICIPANTS.REJECT_CANCEL_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("EVENT_PARTICIPANTS.YES_REJECT_CANCEL"),
      cancelButtonText: this.translate.instant("MESSAGES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.participantsService.rejectCancellation(participantId).subscribe({
          next: () => {
            this.loadParticipants();
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: (error) => {
            console.error("Error rejecting cancellation:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("EVENT_PARTICIPANTS.REJECT_CANCEL_ERROR")
            });
          }
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/events"]);
  }
  static \u0275fac = function EventParticipants_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventParticipants)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EventParticipantsService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventParticipants, selectors: [["app-event-participants"]], decls: 18, vars: 19, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-people", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "card card-general add-participant mb-4", 4, "ngIf"], [1, "card", "card-general", "add-participant"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "btn", "custom-btn-2", "btn-cancel-2", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "card-body"], ["class", "text-center py-4", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "card", "card-general", "add-participant", "mb-4"], ["class", "card-header", 4, "ngIf"], [1, "row", "align-items-end"], [1, "col-md-8"], [1, "form-label"], ["bindLabel", "firstName", "bindValue", "id", 1, "form-input", 3, "ngModelChange", "ngModel", "items", "placeholder", "clearable", "searchable"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "col-md-4"], [1, "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "bi", "bi-plus-circle-dotted", "me-2"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card-header"], [1, "h4"], [1, "option-with-image"], ["alt", "", 1, "option-image", 3, "src"], [1, "option-text"], [1, "option-title"], ["class", "option-subtitle", 4, "ngIf"], [1, "option-subtitle"], ["class", "selected-with-image", 4, "ngIf"], [1, "selected-with-image"], ["alt", "", 1, "selected-image", 3, "src"], [1, "selected-text"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "text-center", "py-4", "text-muted"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "d-flex", "gap-1"], ["type", "button", "class", "btn btn-sm btn-active", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-remove", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 3, "title", "click", 4, "ngIf"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-active", 3, "click", "title"], [1, "bi", "bi-check"], ["type", "button", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "data-bs-trigger", "hover", 1, "btn", "btn-sm", "btn-remove", 3, "click", "title"], [1, "bi", "bi-x"], [1, "bi", "bi-x-circle"], [1, "bi", "bi-trash"]], template: function EventParticipants_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, EventParticipants_div_4_Template, 19, 18, "div", 2);
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "h6");
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function EventParticipants_Template_button_click_10_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(11, "i", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275template(15, EventParticipants_div_15_Template, 5, 3, "div", 8)(16, EventParticipants_div_16_Template, 3, 3, "div", 9)(17, EventParticipants_div_17_Template, 21, 16, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 11, "EVENT_PARTICIPANTS.TITLE"))("subtitle", ctx.event ? ctx.event.name : \u0275\u0275pipeBind1(3, 13, "EVENT_PARTICIPANTS.SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.canAddParticipants());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(9, 15, "EVENT_PARTICIPANTS.REGISTERED_PARTICIPANTS"), " (", ctx.participants.length, ")");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 17, "EVENT_PARTICIPANTS.BACK_TO_EVENTS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.participants.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.participants.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, TitlePage, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, DatePipe, TranslatePipe], styles: ["\n\n.add-participant[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n  .ng-select.form-input .ng-select-container {\n  border: 1px solid #e0e0e0 !important;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=event-participants.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventParticipants, [{
    type: Component,
    args: [{ selector: "app-event-participants", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule, NgSelectModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'EVENT_PARTICIPANTS.TITLE' | translate"\r
    [subtitle]="event ? event.name : ('EVENT_PARTICIPANTS.SUBTITLE' | translate)"\r
    icon="bi bi-people"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Add Participant Form -->\r
  <div class="card card-general add-participant mb-4" *ngIf="canAddParticipants()">\r
    <div class="card-header" *ngIf="event">\r
      <h6>{{ 'EVENT_PARTICIPANTS.ADD_PARTICIPANT' | translate }}</h6>\r
      <div class="h4">{{ participants.length }}/{{ event.capacity }}</div>\r
    </div>\r
    <div class="card-body">\r
      <div class="row align-items-end">\r
        <div class="col-md-8">\r
          <label class="form-label">{{ 'EVENT_PARTICIPANTS.SELECT_CHILD' | translate }}</label>\r
          <ng-select\r
            class="form-input"\r
            [(ngModel)]="selectedChildId"\r
            [items]="availableChildren"\r
            bindLabel="firstName"\r
            bindValue="id"\r
            [placeholder]="'EVENT_PARTICIPANTS.CHOOSE_CHILD' | translate"\r
            [clearable]="true"\r
            [searchable]="true">\r
            <ng-template ng-option-tmp let-item="item">\r
              <div class="option-with-image">\r
                <img [src]="item?.profilePicture || 'assets/child.png'" class="option-image" alt="">\r
                <div class="option-text">\r
                  <span class="option-title">{{ item.firstName }} {{ item.lastName }}</span>\r
                  <span class="option-subtitle" *ngIf="item.parent">{{ item.parent.firstName }} {{ item.parent.lastName }}</span>\r
                </div>\r
              </div>\r
            </ng-template>\r
            <ng-template ng-label-tmp let-item="item">\r
              <div class="selected-with-image" *ngIf="item?.id">\r
                <img [src]="item?.profilePicture || 'assets/child.png'" class="selected-image" alt="">\r
                <span class="selected-text">{{ item.firstName }} {{ item.lastName }}</span>\r
              </div>\r
            </ng-template>\r
          </ng-select>\r
        </div>\r
        <div class="col-md-4">\r
          <button class="custom-btn-2 btn-add-global-2" (click)="addParticipant()"\r
                  [disabled]="!selectedChildId || saving">\r
            <i class="bi bi-plus-circle-dotted me-2"></i>\r
            <span *ngIf="saving" class="spinner-border spinner-border-sm me-2"></span>\r
            {{ saving ? ('EVENT_PARTICIPANTS.ADDING' | translate) : ('EVENT_PARTICIPANTS.ADD_PARTICIPANT_BTN' | translate) }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Participants List -->\r
  <div class="card card-general add-participant">\r
    <div class="card-header d-flex justify-content-between align-items-center">\r
      <h6>{{ 'EVENT_PARTICIPANTS.REGISTERED_PARTICIPANTS' | translate }} ({{ participants.length }})</h6>\r
      <button class="btn custom-btn-2 btn-cancel-2" (click)="goBack()">\r
        <i class="bi bi-arrow-left me-1"></i>{{ 'EVENT_PARTICIPANTS.BACK_TO_EVENTS' | translate }}\r
      </button>\r
    </div>\r
    <div class="card-body">\r
      <div *ngIf="loading" class="text-center py-4">\r
        <div class="spinner-border" role="status">\r
          <span class="visually-hidden">{{ 'EVENT_PARTICIPANTS.LOADING' | translate }}</span>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="!loading && participants.length === 0" class="text-center py-4 text-muted">\r
        {{ 'EVENT_PARTICIPANTS.NO_PARTICIPANTS' | translate }}\r
      </div>\r
\r
      <div class="table-responsive" *ngIf="!loading && participants.length > 0">\r
        <table class="table table-hover">\r
          <thead class="table-light">\r
            <tr>\r
              <th>{{ 'EVENT_PARTICIPANTS.CHILD_NAME' | translate }}</th>\r
              <th>{{ 'EVENT_PARTICIPANTS.PARENT' | translate }}</th>\r
              <th>{{ 'EVENT_PARTICIPANTS.REGISTERED_DATE' | translate }}</th>\r
              <th>{{ 'EVENT_PARTICIPANTS.STATUS' | translate }}</th>\r
              <th>{{ 'EVENT_PARTICIPANTS.ACTIONS' | translate }}</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let participant of participants">\r
              <td>\r
                <strong>{{ participant.child?.firstName }} {{ participant.child?.lastName }}</strong>\r
              </td>\r
              <td>\r
                {{ participant.child?.parent?.firstName }} {{ participant.child?.parent?.lastName }}\r
              </td>\r
              <td>{{ participant.registeredAt | date:'short' }}</td>\r
              <td>\r
                <span class="badge" [ngClass]="{\r
                  'bg-success': participant.status === 'Registered',\r
                  'bg-warning': participant.status === 'Pending',\r
                  'bg-danger': participant.status === 'Rejected',\r
                  'bg-info': participant.status === 'CancellationPending'\r
                }">{{ getStatusLabel(participant.status) }}</span>\r
              </td>\r
              <td>\r
                <div class="d-flex gap-1">\r
                  <!-- Admin: Approve/Reject registration (Pending status) -->\r
                  <button *ngIf="authService.isAdmin() && participant.status === 'Pending'"\r
                          type="button"\r
                          class="btn btn-sm btn-active"\r
                          (click)="approveParticipant(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.APPROVE' | translate">\r
                    <i class="bi bi-check"></i>\r
                  </button>\r
                  <button *ngIf="authService.isAdmin() && participant.status === 'Pending'"\r
                          type="button"\r
                          class="btn btn-sm btn-remove"\r
                          (click)="rejectParticipant(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.REJECT' | translate">\r
                    <i class="bi bi-x"></i>\r
                  </button>\r
\r
                  <!-- Admin: Approve/Reject cancellation request (CancellationPending status) -->\r
                  <button *ngIf="authService.isAdmin() && participant.status === 'CancellationPending'"\r
                          type="button"\r
                          class="btn btn-sm btn-active"\r
                          (click)="approveCancellation(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.APPROVE_CANCELLATION' | translate">\r
                    <i class="bi bi-check"></i>\r
                  </button>\r
                  <button *ngIf="authService.isAdmin() && participant.status === 'CancellationPending'"\r
                          type="button"\r
                          class="btn btn-sm btn-remove"\r
                          (click)="rejectCancellation(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.REJECT_CANCELLATION' | translate">\r
                    <i class="bi bi-x"></i>\r
                  </button>\r
\r
                  <!-- Parent: Request cancellation (Registered status) -->\r
                  <button *ngIf="canRequestCancellation(participant)"\r
                          type="button"\r
                          class="btn btn-sm btn-remove"\r
                          (click)="requestCancellation(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.REQUEST_CANCELLATION' | translate">\r
                    <i class="bi bi-x-circle"></i>\r
                  </button>\r
\r
                  <!-- Admin/Teacher: Remove participant -->\r
                  <button *ngIf="canRemoveParticipant(participant) && participant.status !== 'CancellationPending'"\r
                          type="button"\r
                          class="btn btn-sm btn-remove"\r
                          (click)="removeParticipant(participant.id!)"\r
                          data-bs-toggle="tooltip"\r
                          data-bs-placement="top"\r
                          data-bs-trigger="hover"\r
                          [title]="'EVENT_PARTICIPANTS.REMOVE' | translate">\r
                    <i class="bi bi-trash"></i>\r
                  </button>\r
                </div>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/event/event-participants/event-participants.scss */\n.add-participant .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n::ng-deep .ng-select.form-input .ng-select-container {\n  border: 1px solid #e0e0e0 !important;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=event-participants.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: EventParticipantsService }, { type: ChildrenService }, { type: EventService }, { type: AuthService }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventParticipants, { className: "EventParticipants", filePath: "src/app/features/event/event-participants/event-participants.ts", lineNumber: 27 });
})();
export {
  EventParticipants
};
//# sourceMappingURL=chunk-GMV4H4C6.js.map
