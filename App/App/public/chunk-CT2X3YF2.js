import {
  EducatorService
} from "./chunk-XGGPRLZT.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  AppCurrencyPipe
} from "./chunk-6S3KDPAE.js";
import "./chunk-OQBHM43H.js";
import {
  ChildrenService
} from "./chunk-FDFSQ3RN.js";
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
  DefaultValueAccessor,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/educator/educator-detail/educator-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function EducatorDetail_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDUCATOR_DETAIL.LOADING"));
  }
}
function EducatorDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function EducatorDetail_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EDUCATOR_DETAIL.ACTIVE"));
  }
}
function EducatorDetail_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "EDUCATOR_DETAIL.INACTIVE"));
  }
}
function EducatorDetail_div_5_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "EDUCATOR_DETAIL.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.educator.address);
  }
}
function EducatorDetail_div_5_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "EDUCATOR_DETAIL.NO_CHILDREN_ASSIGNED"));
  }
}
function EducatorDetail_div_5_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementStart(2, "div", 36)(3, "h6", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 37);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 38)(13, "button", 39);
    \u0275\u0275listener("click", function EducatorDetail_div_5_div_62_Template_button_click_13_listener() {
      const child_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeChild(child_r4.id));
    });
    \u0275\u0275element(14, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 41);
    \u0275\u0275listener("click", function EducatorDetail_div_5_div_62_Template_button_click_15_listener() {
      const child_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewChildDetails(child_r4.id));
    });
    \u0275\u0275element(16, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", child_r4.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r4.firstName, " ", child_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", child_r4.gender, " - ", ctx_r0.getAge(child_r4.dateOfBirth), " ", \u0275\u0275pipeBind1(7, 8, "EDUCATOR_DETAIL.YEARS_OLD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 10, "EDUCATOR_DETAIL.BORN"), " ", \u0275\u0275pipeBind2(11, 12, child_r4.dateOfBirth, "mediumDate"));
  }
}
function EducatorDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    \u0275\u0275element(5, "img", 14);
    \u0275\u0275template(6, EducatorDetail_div_5_span_6_Template, 3, 3, "span", 15)(7, EducatorDetail_div_5_span_7_Template, 3, 3, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h4", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 21);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 20)(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 21);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 20)(36, "strong");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 21);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 20)(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 21);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "appCurrency");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, EducatorDetail_div_5_div_50_Template, 6, 4, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "h5", 21);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 25);
    \u0275\u0275listener("click", function EducatorDetail_div_5_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAddChildModal());
    });
    \u0275\u0275element(57, "i", 26);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 11);
    \u0275\u0275template(61, EducatorDetail_div_5_div_61_Template, 5, 3, "div", 27)(62, EducatorDetail_div_5_div_62_Template, 17, 15, "div", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.getProfilePictureUrl(ctx_r0.educator) || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.educator.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.educator.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.educator.firstName, " ", ctx_r0.educator.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.educator.specialization || \u0275\u0275pipeBind1(13, 22, "EDUCATOR_DETAIL.EDUCATOR"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 24, "EDUCATOR_DETAIL.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.educator.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 26, "EDUCATOR_DETAIL.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.educator.phone || \u0275\u0275pipeBind1(27, 28, "COMMON.NA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 30, "EDUCATOR_DETAIL.DATE_OF_BIRTH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 32, ctx_r0.educator.dateOfBirth, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 35, "EDUCATOR_DETAIL.HIRE_DATE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 37, ctx_r0.educator.hireDate, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 40, "EDUCATOR_DETAIL.SALARY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.educator.salary ? \u0275\u0275pipeBind1(48, 42, ctx_r0.educator.salary) : \u0275\u0275pipeBind1(49, 44, "COMMON.NA"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.educator.address);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(55, 46, "EDUCATOR_DETAIL.ASSIGNED_CHILDREN"), " (", ctx_r0.assignedChildren.length, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 48, "EDUCATOR_DETAIL.ASSIGN_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.assignedChildren.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.assignedChildren);
  }
}
function EducatorDetail_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "EDUCATOR_DETAIL.NO_AVAILABLE_CHILDREN"));
  }
}
function EducatorDetail_div_6_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function EducatorDetail_div_6_button_14_Template_button_click_0_listener() {
      const child_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.assignChildToEducator(child_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275element(2, "img", 56);
    \u0275\u0275elementStart(3, "div", 36)(4, "h6", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 37);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.assigningChild);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", child_r7.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r7.firstName, " ", child_r7.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", \u0275\u0275pipeBind1(8, 8, "EDUCATOR_DETAIL.AGE"), ": ", ctx_r0.getAge(child_r7.dateOfBirth), " | ", \u0275\u0275pipeBind1(9, 10, "EDUCATOR_DETAIL.GENDER"), ": ", child_r7.gender);
  }
}
function EducatorDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function EducatorDetail_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddChildModal());
    });
    \u0275\u0275elementStart(1, "div", 44);
    \u0275\u0275listener("click", function EducatorDetail_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46)(4, "h5", 47);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 48);
    \u0275\u0275listener("click", function EducatorDetail_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddChildModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "div", 50)(10, "input", 51);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EducatorDetail_div_6_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EducatorDetail_div_6_Template_input_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterChildren());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, EducatorDetail_div_6_div_12_Template, 4, 3, "div", 27);
    \u0275\u0275elementStart(13, "div", 52);
    \u0275\u0275template(14, EducatorDetail_div_6_button_14_Template, 10, 12, "button", 53);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "EDUCATOR_DETAIL.ASSIGN_CHILD_MODAL_TITLE"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 7, "EDUCATOR_DETAIL.SEARCH_BY_NAME"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.filteredChildren.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredChildren);
  }
}
var EducatorDetail = class _EducatorDetail {
  educatorService;
  childrenService;
  authService;
  router;
  route;
  http;
  translate;
  educator = null;
  loading = false;
  error = "";
  educatorId = 0;
  showAddChildModal = false;
  availableChildren = [];
  filteredChildren = [];
  assignedChildren = [];
  selectedChildId = null;
  searchTerm = "";
  assigningChild = false;
  breadcrumbs = [];
  titleActions = [];
  constructor(educatorService, childrenService, authService, router, route, http, translate) {
    this.educatorService = educatorService;
    this.childrenService = childrenService;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.http = http;
    this.translate = translate;
  }
  ngOnInit() {
    this.educatorId = Number(this.route.snapshot.paramMap.get("id"));
    this.initBreadcrumbs();
    this.setupTitleActions();
    this.loadEducator();
    this.loadAssignedChildren();
    this.translate.onLangChange.subscribe(() => {
      this.initBreadcrumbs();
      this.setupTitleActions();
    });
  }
  initBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.EDUCATORS"), url: "/educators" },
      { label: this.translate.instant("EDUCATOR_DETAIL.BREADCRUMB_DETAILS") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("EDUCATOR_DETAIL.BACK_TO_EDUCATORS"),
        class: "btn-outline-secondary btn-cancel-global",
        icon: "bi bi-arrow-left",
        action: () => this.goBack()
      }
    ];
    if (this.authService.isAdmin()) {
      this.titleActions.push({
        label: this.translate.instant("EDUCATOR_DETAIL.EDIT_EDUCATOR"),
        class: "btn-edit-global-2",
        icon: "bi bi-pencil-square",
        action: () => this.router.navigate(["/educators/edit", this.educatorId])
      });
    }
  }
  loadEducator() {
    this.loading = true;
    this.educatorService.getEducator(this.educatorId).subscribe({
      next: (educator) => {
        this.educator = educator;
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading educator:", error);
        this.loading = false;
        const errorMessage = this.extractErrorMessage(error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: errorMessage
        }).then(() => {
          this.router.navigate(["/educators"]);
        });
      }
    });
  }
  loadAssignedChildren() {
    this.http.get(`${ApiConfig.ENDPOINTS.EDUCATORS}/${this.educatorId}/children`).subscribe({
      next: (children) => this.assignedChildren = children,
      error: (error) => console.error("Error loading assigned children:", error)
    });
  }
  getAge(dateOfBirth) {
    const today = /* @__PURE__ */ new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  /**
   * Get the profile picture URL for an educator, preferring file-based URL over Base64
   */
  getProfilePictureUrl(educator) {
    if (!educator)
      return null;
    if (educator.profilePictureUrl && educator.profilePictureUrl.trim() !== "") {
      return this.getFullUrl(educator.profilePictureUrl);
    }
    if (educator.profilePicture && educator.profilePicture.trim() !== "") {
      return this.getFullUrl(educator.profilePicture);
    }
    return null;
  }
  getFullUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http") || path.startsWith("data:"))
      return path;
    return `${ApiConfig.HUB_URL}${path.startsWith("/") ? "" : "/"}${path}`;
  }
  goBack() {
    this.router.navigate(["/educators"]);
  }
  openAddChildModal() {
    this.showAddChildModal = true;
    this.loadAvailableChildren();
  }
  closeAddChildModal() {
    this.showAddChildModal = false;
    this.selectedChildId = null;
    this.searchTerm = "";
    this.filteredChildren = [];
  }
  loadAvailableChildren() {
    this.childrenService.loadChildren().subscribe({
      next: (children) => {
        const assignedIds = this.assignedChildren.map((c) => c.id);
        this.availableChildren = children.filter((c) => !assignedIds.includes(c.id));
        this.filteredChildren = [...this.availableChildren];
      },
      error: (error) => console.error("Error loading children:", error)
    });
  }
  filterChildren() {
    if (!this.searchTerm.trim()) {
      this.filteredChildren = [...this.availableChildren];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredChildren = this.availableChildren.filter((child) => `${child.firstName} ${child.lastName}`.toLowerCase().includes(term));
    }
  }
  assignChildToEducator(childId) {
    const idToAssign = childId || this.selectedChildId;
    if (!idToAssign)
      return;
    this.assigningChild = true;
    this.http.post(`${ApiConfig.ENDPOINTS.EDUCATORS}/${this.educatorId}/assign-child`, {
      childId: idToAssign
    }).subscribe({
      next: () => {
        this.assigningChild = false;
        this.closeAddChildModal();
        this.loadAssignedChildren();
        showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
      },
      error: (error) => {
        this.assigningChild = false;
        console.error("Error assigning child:", error);
        const errorMessage = this.extractErrorMessage(error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: errorMessage
        });
      }
    });
  }
  removeChild(childId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("EDUCATOR_DETAIL.REMOVE_CHILD_CONFIRM"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("COMMON.YES_REMOVE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${ApiConfig.ENDPOINTS.EDUCATORS}/${this.educatorId}/remove-child/${childId}`).subscribe({
          next: () => {
            this.loadAssignedChildren();
            showSuccessToast(this.translate.instant("MESSAGES.SUCCESS"));
          },
          error: (error) => {
            console.error("Error removing child:", error);
            const errorMessage = this.extractErrorMessage(error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: errorMessage
            });
          }
        });
      }
    });
  }
  viewChildDetails(childId) {
    this.router.navigate(["/children/detail", childId]);
  }
  /**
   * Extract user-friendly error message from HTTP error response
   */
  extractErrorMessage(error) {
    console.log("Full error object:", error);
    if (error?.status === 0) {
      return this.translate.instant("ERRORS.NETWORK_ERROR") || "Network error. Please check your internet connection.";
    }
    if (error?.name === "TimeoutError" || error?.message?.includes("timeout")) {
      return this.translate.instant("ERRORS.TIMEOUT") || "Request timed out. Please try again.";
    }
    if (error?.status >= 500) {
      return this.translate.instant("ERRORS.SERVER_ERROR") || "Server error. Please try again later.";
    }
    if (error?.status === 403) {
      return this.translate.instant("ERRORS.FORBIDDEN") || "You do not have permission to perform this action.";
    }
    if (error?.status === 401) {
      return this.translate.instant("ERRORS.UNAUTHORIZED") || "Your session has expired. Please log in again.";
    }
    if (error?.status === 404) {
      const errorMessage = error?.error?.message || error?.error || "";
      if (typeof errorMessage === "string") {
        if (errorMessage.toLowerCase().includes("child")) {
          return this.translate.instant("ERRORS.CHILD_NOT_FOUND") || "Child not found.";
        }
        if (errorMessage.toLowerCase().includes("teacher") || errorMessage.toLowerCase().includes("educator")) {
          return this.translate.instant("ERRORS.EDUCATOR_NOT_FOUND") || "Educator not found.";
        }
      }
      return this.translate.instant("ERRORS.NOT_FOUND") || "The requested resource was not found.";
    }
    if (error?.status === 400) {
      const errorBody = error?.error;
      if (typeof errorBody === "string") {
        return this.mapBackendErrorMessage(errorBody);
      }
      if (errorBody?.message) {
        return this.mapBackendErrorMessage(errorBody.message);
      }
      if (errorBody?.errors) {
        const errorMessages = [];
        for (const key in errorBody.errors) {
          if (errorBody.errors.hasOwnProperty(key)) {
            const messages = errorBody.errors[key];
            if (Array.isArray(messages)) {
              errorMessages.push(...messages);
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join(". ");
        }
      }
      if (errorBody?.title) {
        return errorBody.title;
      }
    }
    if (error?.error) {
      if (error.error.message) {
        return this.mapBackendErrorMessage(error.error.message);
      }
      if (error.error.title) {
        return error.error.title;
      }
      if (typeof error.error === "string") {
        return this.mapBackendErrorMessage(error.error);
      }
      if (error.error.errors) {
        const errorMessages = [];
        for (const key in error.error.errors) {
          if (error.error.errors.hasOwnProperty(key)) {
            const messages = error.error.errors[key];
            if (Array.isArray(messages)) {
              errorMessages.push(...messages);
            }
          }
        }
        if (errorMessages.length > 0) {
          return errorMessages.join(". ");
        }
      }
    }
    if (error?.status) {
      return `${this.translate.instant("MESSAGES.ERROR")} (Error ${error.status})`;
    }
    return this.translate.instant("MESSAGES.GENERIC_ERROR") || "An unexpected error occurred. Please try again.";
  }
  /**
   * Map backend error messages to user-friendly translated messages
   */
  mapBackendErrorMessage(message) {
    if (!message)
      return "";
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("no active classes")) {
      return this.translate.instant("ERRORS.NO_ACTIVE_CLASSES") || "This educator has no active classes. Please assign them to a class first before adding children.";
    }
    if (lowerMessage.includes("already assigned") || lowerMessage.includes("already enrolled")) {
      return this.translate.instant("ERRORS.CHILD_ALREADY_ASSIGNED") || "This child is already assigned to this educator's class.";
    }
    if (lowerMessage.includes("child not found")) {
      return this.translate.instant("ERRORS.CHILD_NOT_FOUND") || "Child not found.";
    }
    if (lowerMessage.includes("teacher not found") || lowerMessage.includes("educator not found")) {
      return this.translate.instant("ERRORS.EDUCATOR_NOT_FOUND") || "Educator not found.";
    }
    return message;
  }
  static \u0275fac = function EducatorDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducatorDetail)(\u0275\u0275directiveInject(EducatorService), \u0275\u0275directiveInject(ChildrenService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducatorDetail, selectors: [["app-educator-detail"]], decls: 7, vars: 9, consts: [[1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], ["class", "modal fade show d-block", "style", "background-color: rgba(0,0,0,0.5)", 3, "click", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "alert", "alert-danger"], [1, "card", "mb-4"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-4"], [1, "position-relative", "me-3"], ["loading", "lazy", "width", "100", "height", "100", "alt", "Educator Photo", 1, "rounded-circle", 3, "src"], ["class", "badge bg-success position-absolute bottom-0 end-0", 4, "ngIf"], ["class", "badge bg-danger position-absolute bottom-0 end-0", 4, "ngIf"], [1, "mb-1"], [1, "mb-0", "text-muted"], [1, "row"], [1, "col-md-6", "mb-3"], [1, "mb-0"], ["class", "col-md-6 mb-3", 4, "ngIf"], [1, "card", "card-general"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "d-flex align-items-center p-3 border rounded mb-2", 4, "ngFor", "ngForOf"], [1, "badge", "bg-success", "position-absolute", "bottom-0", "end-0"], [1, "badge", "bg-danger", "position-absolute", "bottom-0", "end-0"], [1, "text-center", "text-muted", "py-4"], [1, "bi", "bi-people", 2, "font-size", "48px", "opacity", "0.5"], [1, "mt-2"], [1, "d-flex", "align-items-center", "p-3", "border", "rounded", "mb-2"], ["loading", "lazy", "width", "60", "height", "60", "alt", "Child", 1, "rounded-circle", "me-3", 3, "src"], [1, "flex-grow-1"], [1, "text-muted"], [1, "text-end", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-remove", 3, "click"], [1, "bi", "bi-x-circle"], [1, "btn", "btn-sm", "btn-view", 3, "click"], [1, "bi", "bi-eye"], [1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)", 3, "click"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [1, "list-group", 2, "max-height", "400px", "overflow-y", "auto"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click", "disabled"], [1, "d-flex", "align-items-center"], ["loading", "lazy", "alt", "Child Photo", 1, "rounded-circle", "me-3", 2, "width", "50px", "height", "50px", 3, "src"]], template: function EducatorDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275template(3, EducatorDetail_div_3_Template, 5, 3, "div", 2)(4, EducatorDetail_div_4_Template, 2, 1, "div", 3)(5, EducatorDetail_div_5_Template, 63, 50, "div", 4)(6, EducatorDetail_div_6_Template, 15, 9, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 7, "EDUCATOR_DETAIL.TITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.educator && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddChildModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitlePage, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, DatePipe, AppCurrencyPipe, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducatorDetail, [{
    type: Component,
    args: [{ selector: "app-educator-detail", imports: [CommonModule, TitlePage, FormsModule, AppCurrencyPipe, TranslateModule], standalone: true, template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'EDUCATOR_DETAIL.TITLE' | translate"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'EDUCATOR_DETAIL.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="error" class="alert alert-danger">\r
    {{ error }}\r
  </div>\r
\r
  <div *ngIf="educator && !loading">\r
    <!-- Educator Profile Card -->\r
    <div class="card mb-4">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center mb-4">\r
          <div class="position-relative me-3">\r
            <img loading="lazy"\r
                [src]="getProfilePictureUrl(educator) || 'assets/default-avatar.svg'"\r
                class="rounded-circle"\r
                width="100"\r
                height="100"\r
                alt="Educator Photo">\r
            <span *ngIf="educator.isActive" class="badge bg-success position-absolute bottom-0 end-0">{{ 'EDUCATOR_DETAIL.ACTIVE' | translate }}</span>\r
            <span *ngIf="!educator.isActive" class="badge bg-danger position-absolute bottom-0 end-0">{{ 'EDUCATOR_DETAIL.INACTIVE' | translate }}</span>\r
          </div>\r
          <div>\r
            <h4 class="mb-1">{{ educator.firstName }} {{ educator.lastName }}</h4>\r
            <p class="mb-0 text-muted">{{ educator.specialization || ('EDUCATOR_DETAIL.EDUCATOR' | translate) }}</p>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <strong>{{ 'EDUCATOR_DETAIL.EMAIL' | translate }}</strong>\r
            <p class="mb-0">{{ educator.email }}</p>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <strong>{{ 'EDUCATOR_DETAIL.PHONE' | translate }}</strong>\r
            <p class="mb-0">{{ educator.phone || ('COMMON.NA' | translate) }}</p>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <strong>{{ 'EDUCATOR_DETAIL.DATE_OF_BIRTH' | translate }}</strong>\r
            <p class="mb-0">{{ educator.dateOfBirth | date:'mediumDate' }}</p>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <strong>{{ 'EDUCATOR_DETAIL.HIRE_DATE' | translate }}</strong>\r
            <p class="mb-0">{{ educator.hireDate | date:'mediumDate' }}</p>\r
          </div>\r
          <div class="col-md-6 mb-3">\r
            <strong>{{ 'EDUCATOR_DETAIL.SALARY' | translate }}</strong>\r
            <p class="mb-0">{{ educator.salary ? (educator.salary | appCurrency) : ('COMMON.NA' | translate) }}</p>\r
          </div>\r
          <div class="col-md-6 mb-3" *ngIf="educator.address">\r
            <strong>{{ 'EDUCATOR_DETAIL.ADDRESS' | translate }}</strong>\r
            <p class="mb-0">{{ educator.address }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Assigned Children Section -->\r
    <div class="card card-general">\r
      <div class="card-header d-flex justify-content-between align-items-center">\r
        <h5 class="mb-0">{{ 'EDUCATOR_DETAIL.ASSIGNED_CHILDREN' | translate }} ({{ assignedChildren.length }})</h5>\r
        <button type="button" class="btn custom-btn-2 btn-add-global-2" (click)="openAddChildModal()">\r
          <i class="bi bi-plus-circle me-1"></i>\r
          {{ 'EDUCATOR_DETAIL.ASSIGN_CHILD' | translate }}\r
        </button>\r
      </div>\r
      <div class="card-body">\r
        <!-- Children List -->\r
        <div *ngIf="assignedChildren.length === 0" class="text-center text-muted py-4">\r
          <i class="bi bi-people" style="font-size: 48px; opacity: 0.5;"></i>\r
          <p class="mt-2">{{ 'EDUCATOR_DETAIL.NO_CHILDREN_ASSIGNED' | translate }}</p>\r
        </div>\r
\r
        <div *ngFor="let child of assignedChildren" class="d-flex align-items-center p-3 border rounded mb-2">\r
          <img loading="lazy" [src]="child.profilePicture || 'assets/child.png'"\r
               class="rounded-circle me-3" width="60" height="60" alt="Child">\r
          <div class="flex-grow-1">\r
            <h6 class="mb-1">{{ child.firstName }} {{ child.lastName }}</h6>\r
            <p class="mb-0 text-muted">{{ child.gender }} - {{ getAge(child.dateOfBirth) }} {{ 'EDUCATOR_DETAIL.YEARS_OLD' | translate }}</p>\r
            <small class="text-muted">{{ 'EDUCATOR_DETAIL.BORN' | translate }} {{ child.dateOfBirth | date:'mediumDate' }}</small>\r
          </div>\r
          <div class="text-end d-flex gap-2">\r
            <button class="btn btn-sm btn-remove" (click)="removeChild(child.id!)">\r
              <i class="bi bi-x-circle"></i> \r
            </button>\r
            <button class="btn btn-sm btn-view" (click)="viewChildDetails(child.id!)">\r
              <i class="bi bi-eye"></i>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Assign Child Modal -->\r
  <div class="modal fade show d-block" *ngIf="showAddChildModal" style="background-color: rgba(0,0,0,0.5)" (click)="closeAddChildModal()">\r
    <div class="modal-dialog modal-lg modal-dialog-centered" (click)="$event.stopPropagation()">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ 'EDUCATOR_DETAIL.ASSIGN_CHILD_MODAL_TITLE' | translate }}</h5>\r
          <button type="button" class="btn-close" (click)="closeAddChildModal()"></button>\r
        </div>\r
        <div class="modal-body">\r
          <div class="mb-3">\r
            <input\r
              type="text"\r
              class="form-control"\r
              [placeholder]="'EDUCATOR_DETAIL.SEARCH_BY_NAME' | translate"\r
              [(ngModel)]="searchTerm"\r
              (ngModelChange)="filterChildren()">\r
          </div>\r
          <div *ngIf="filteredChildren.length === 0" class="text-center text-muted py-4">\r
            <p>{{ 'EDUCATOR_DETAIL.NO_AVAILABLE_CHILDREN' | translate }}</p>\r
          </div>\r
          <div class="list-group" style="max-height: 400px; overflow-y: auto;">\r
            <button\r
              *ngFor="let child of filteredChildren"\r
              type="button"\r
              class="list-group-item list-group-item-action"\r
              (click)="assignChildToEducator(child.id!)"\r
              [disabled]="assigningChild">\r
              <div class="d-flex align-items-center">\r
                <img loading="lazy"\r
                  [src]="child.profilePicture || 'assets/child.png'"\r
                  class="rounded-circle me-3"\r
                  style="width: 50px; height: 50px;"\r
                  alt="Child Photo">\r
                <div class="flex-grow-1">\r
                  <h6 class="mb-0">{{ child.firstName }} {{ child.lastName }}</h6>\r
                  <small class="text-muted">{{ 'EDUCATOR_DETAIL.AGE' | translate }}: {{ getAge(child.dateOfBirth) }} | {{ 'EDUCATOR_DETAIL.GENDER' | translate }}: {{ child.gender }}</small>\r
                </div>\r
              </div>\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: EducatorService }, { type: ChildrenService }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: HttpClient }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducatorDetail, { className: "EducatorDetail", filePath: "src/app/features/educator/educator-detail/educator-detail.ts", lineNumber: 25 });
})();
export {
  EducatorDetail
};
//# sourceMappingURL=chunk-CT2X3YF2.js.map
