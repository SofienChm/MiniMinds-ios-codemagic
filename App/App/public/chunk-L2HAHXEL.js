import {
  HeaderSuperadminComponent
} from "./chunk-ES7BPUNO.js";
import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
import {
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
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
  HostBinding,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/super-admin/demo-requests/demo-requests.ts
var _c0 = () => [1, 2, 3];
function DemoRequests_div_1_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
function DemoRequests_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, DemoRequests_div_1_div_15_div_1_Template, 1, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function DemoRequests_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3, "No demo requests found");
    \u0275\u0275elementEnd()();
  }
}
function DemoRequests_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function DemoRequests_div_1_div_17_Template_div_click_0_listener() {
      const request_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(request_r4));
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 40);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 41)(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 45)(12, "div", 46)(13, "span", 47);
    \u0275\u0275text(14, "Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 48)(16, "div", 49);
    \u0275\u0275element(17, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 51);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 46)(21, "span", 47);
    \u0275\u0275text(22, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 52);
    \u0275\u0275element(24, "i", 53);
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const request_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getStatusColor(request_r4.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusIcon(request_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getStatusColor(request_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r4.statusName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r4.centerName);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(request_r4.numberOfChildren);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(request_r4.createdAt));
  }
}
function DemoRequests_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19);
    \u0275\u0275listener("click", function DemoRequests_div_1_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "div", 22)(7, "h5", 23);
    \u0275\u0275text(8, "Demo Requests");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 25)(11, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function DemoRequests_div_1_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function DemoRequests_div_1_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 27);
    \u0275\u0275listener("click", function DemoRequests_div_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275element(13, "i", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275template(15, DemoRequests_div_1_div_15_Template, 2, 2, "div", 29)(16, DemoRequests_div_1_div_16_Template, 4, 0, "div", 30)(17, DemoRequests_div_1_div_17_Template, 27, 11, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.demoRequests.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.demoRequests)("ngForTrackBy", ctx_r1.trackById);
  }
}
function DemoRequests_app_title_page_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-page", 54);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.titleActions);
  }
}
function DemoRequests_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57);
    \u0275\u0275element(3, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 61);
    \u0275\u0275text(8, "New Requests");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 62)(10, "div", 57);
    \u0275\u0275element(11, "i", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 59)(13, "span", 60);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 61);
    \u0275\u0275text(16, "Contacted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 64)(18, "div", 57);
    \u0275\u0275element(19, "i", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 59)(21, "span", 60);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 61);
    \u0275\u0275text(24, "Scheduled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 66)(26, "div", 57);
    \u0275\u0275element(27, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 59)(29, "span", 60);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 61);
    \u0275\u0275text(32, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 68)(34, "div", 57);
    \u0275\u0275element(35, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 59)(37, "span", 60);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 61);
    \u0275\u0275text(40, "This Month");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.stats.newRequests);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.contacted);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.scheduled);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.completed);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.stats.thisMonth);
  }
}
function DemoRequests_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function DemoRequests_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.searchTerm = "";
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function DemoRequests_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", option_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r6.label, " ");
  }
}
function DemoRequests_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 74);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading demo requests...");
    \u0275\u0275elementEnd()();
  }
}
function DemoRequests_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Demo Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "There are no demo requests matching your criteria.");
    \u0275\u0275elementEnd()();
  }
}
function DemoRequests_div_15_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81);
    \u0275\u0275listener("click", function DemoRequests_div_15_tr_19_Template_tr_click_0_listener() {
      const request_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetails(request_r8));
    });
    \u0275\u0275elementStart(1, "td", 82)(2, "div", 83)(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "div", 85)(9, "span", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 87);
    \u0275\u0275element(19, "i");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span", 88);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 89)(26, "button", 90);
    \u0275\u0275listener("click", function DemoRequests_div_15_tr_19_Template_button_click_26_listener($event) {
      const request_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewDetails(request_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(27, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 92);
    \u0275\u0275listener("click", function DemoRequests_div_15_tr_19_Template_button_click_28_listener($event) {
      const request_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteRequest(request_r8, $event));
    });
    \u0275\u0275element(29, "i", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const request_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r8.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r8.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(request_r8.centerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r8.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r8.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(request_r8.numberOfChildren);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getStatusColor(request_r8.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusIcon(request_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", request_r8.statusName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTimeAgo(request_r8.createdAt));
  }
}
function DemoRequests_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "table", 79)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, DemoRequests_div_15_tr_19_Template, 30, 12, "tr", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.demoRequests)("ngForTrackBy", ctx_r1.trackById);
  }
}
function DemoRequests_div_16_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function DemoRequests_div_16_button_3_Template_button_click_0_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r11, " ");
  }
}
function DemoRequests_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "button", 95);
    \u0275\u0275listener("click", function DemoRequests_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(2, "i", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DemoRequests_div_16_button_3_Template, 2, 3, "button", 97);
    \u0275\u0275elementStart(4, "button", 95);
    \u0275\u0275listener("click", function DemoRequests_div_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(5, "i", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Showing ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, " - ", ctx_r1.currentPage * ctx_r1.pageSize > ctx_r1.totalCount ? ctx_r1.totalCount : ctx_r1.currentPage * ctx_r1.pageSize, " of ", ctx_r1.totalCount, " ");
  }
}
function DemoRequests_div_17_div_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "label");
    \u0275\u0275text(2, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.comments);
  }
}
function DemoRequests_div_17_div_7_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "label");
    \u0275\u0275text(2, "First Contacted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedRequest.contactedAt));
  }
}
function DemoRequests_div_17_div_7_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "label");
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedRequest.completedAt));
  }
}
function DemoRequests_div_17_div_7_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function DemoRequests_div_17_div_7_button_75_Template_button_click_0_listener() {
      const option_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateStatus(ctx_r1.selectedRequest, option_r14.value));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("border-color", option_r14.color)("color", ctx_r1.selectedRequest.status === option_r14.value ? "#fff" : option_r14.color)("background-color", ctx_r1.selectedRequest.status === option_r14.value ? option_r14.color : "transparent");
    \u0275\u0275classProp("active", ctx_r1.selectedRequest.status === option_r14.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(option_r14.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r14.label, " ");
  }
}
function DemoRequests_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "div", 108)(2, "h3");
    \u0275\u0275text(3, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109)(5, "div", 110)(6, "label");
    \u0275\u0275text(7, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 110)(11, "label");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 111);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 110)(16, "label");
    \u0275\u0275text(17, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 111);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 108)(21, "h3");
    \u0275\u0275text(22, "Center Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 109)(24, "div", 110)(25, "label");
    \u0275\u0275text(26, "Center Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 110)(30, "label");
    \u0275\u0275text(31, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 110)(35, "label");
    \u0275\u0275text(36, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 110)(40, "label");
    \u0275\u0275text(41, "Number of Children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 108)(45, "h3");
    \u0275\u0275text(46, "Additional Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 109)(48, "div", 110)(49, "label");
    \u0275\u0275text(50, "How they heard about us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, DemoRequests_div_17_div_7_div_53_Template, 5, 1, "div", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 108)(55, "h3");
    \u0275\u0275text(56, "Status & Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 109)(58, "div", 110)(59, "label");
    \u0275\u0275text(60, "Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 87);
    \u0275\u0275element(62, "i");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 110)(65, "label");
    \u0275\u0275text(66, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, DemoRequests_div_17_div_7_div_69_Template, 5, 1, "div", 113)(70, DemoRequests_div_17_div_7_div_70_Template, 5, 1, "div", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 114)(72, "label");
    \u0275\u0275text(73, "Update Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 115);
    \u0275\u0275template(75, DemoRequests_div_17_div_7_button_75_Template, 3, 11, "button", 116);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.fullName);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "mailto:" + ctx_r1.selectedRequest.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.email);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "tel:" + ctx_r1.selectedRequest.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.phone);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.centerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.jobTitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.numberOfChildren);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.selectedRequest.hearAboutUs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRequest.comments);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("background-color", ctx_r1.getStatusColor(ctx_r1.selectedRequest.status));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusIcon(ctx_r1.selectedRequest.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRequest.statusName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedRequest.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRequest.contactedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRequest.completedAt);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.statusOptions.slice(1));
  }
}
function DemoRequests_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("click", function DemoRequests_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 102);
    \u0275\u0275listener("click", function DemoRequests_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 103)(3, "h2");
    \u0275\u0275text(4, "Demo Request Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 104);
    \u0275\u0275listener("click", function DemoRequests_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275element(6, "i", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DemoRequests_div_17_div_7_Template, 76, 20, "div", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.selectedRequest);
  }
}
var DemoRequests = class _DemoRequests {
  http;
  location;
  demoRequests = [];
  stats = null;
  selectedRequest = null;
  showDetailModal = false;
  loading = true;
  searchTerm = "";
  statusFilter = null;
  currentPage = 1;
  totalPages = 1;
  totalCount = 0;
  pageSize = 15;
  isMobile() {
    return window.innerWidth < 768;
  }
  get mobileMode() {
    return this.isMobile();
  }
  back() {
    this.location.back();
  }
  // Title page config
  breadcrumbs = [
    { label: "Dashboard", url: "/super-admin/dashboard" },
    { label: "Demo Requests", url: "/super-admin/demo-requests" }
  ];
  titleActions = [];
  statusOptions = [
    { value: null, label: "All Status", icon: "bi-list" },
    { value: 0, label: "New", icon: "bi-star", color: "#3b82f6" },
    { value: 1, label: "Contacted", icon: "bi-telephone", color: "#f59e0b" },
    { value: 2, label: "Scheduled", icon: "bi-calendar-check", color: "#8b5cf6" },
    { value: 3, label: "Completed", icon: "bi-check-circle", color: "#10b981" },
    { value: 4, label: "Not Interested", icon: "bi-x-circle", color: "#6b7280" }
  ];
  subscriptions = [];
  constructor(http, location) {
    this.http = http;
    this.location = location;
  }
  ngOnInit() {
    this.loadStats();
    this.loadDemoRequests();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadStats() {
    const sub = this.http.get(`${ApiConfig.ENDPOINTS.DEMO_REQUESTS}/stats`).subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (err) => {
        console.error("Error loading stats:", err);
      }
    });
    this.subscriptions.push(sub);
  }
  loadDemoRequests() {
    this.loading = true;
    let url = `${ApiConfig.ENDPOINTS.DEMO_REQUESTS}?page=${this.currentPage}&pageSize=${this.pageSize}`;
    if (this.statusFilter !== null) {
      url += `&status=${this.statusFilter}`;
    }
    if (this.searchTerm.trim()) {
      url += `&search=${encodeURIComponent(this.searchTerm)}`;
    }
    const sub = this.http.get(url).subscribe({
      next: (response) => {
        this.demoRequests = response.data;
        this.totalCount = response.totalCount;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading demo requests:", err);
        this.loading = false;
      }
    });
    this.subscriptions.push(sub);
  }
  onSearch() {
    this.currentPage = 1;
    this.loadDemoRequests();
  }
  onStatusChange() {
    this.currentPage = 1;
    this.loadDemoRequests();
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadDemoRequests();
    }
  }
  viewDetails(request) {
    this.selectedRequest = request;
    this.showDetailModal = true;
  }
  closeModal() {
    this.showDetailModal = false;
    this.selectedRequest = null;
  }
  updateStatus(request, newStatus, notes) {
    const sub = this.http.put(`${ApiConfig.ENDPOINTS.DEMO_REQUESTS}/${request.id}/status`, {
      status: newStatus,
      notes: notes || request.notes
    }).subscribe({
      next: () => {
        request.status = newStatus;
        request.statusName = this.getStatusLabel(newStatus);
        this.loadStats();
      },
      error: (err) => {
        console.error("Error updating status:", err);
      }
    });
    this.subscriptions.push(sub);
  }
  deleteRequest(request, event) {
    event.stopPropagation();
    if (confirm(`Are you sure you want to delete this demo request from ${request.fullName}?`)) {
      const sub = this.http.delete(`${ApiConfig.ENDPOINTS.DEMO_REQUESTS}/${request.id}`).subscribe({
        next: () => {
          this.demoRequests = this.demoRequests.filter((r) => r.id !== request.id);
          this.loadStats();
          if (this.selectedRequest?.id === request.id) {
            this.closeModal();
          }
        },
        error: (err) => {
          console.error("Error deleting request:", err);
        }
      });
      this.subscriptions.push(sub);
    }
  }
  getStatusLabel(status) {
    const option = this.statusOptions.find((o) => o.value === status);
    return option?.label || "Unknown";
  }
  getStatusColor(status) {
    const option = this.statusOptions.find((o) => o.value === status);
    return option?.color || "#6b7280";
  }
  getStatusIcon(status) {
    const option = this.statusOptions.find((o) => o.value === status);
    return option?.icon || "bi-question-circle";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getTimeAgo(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 6e4);
    const hours = Math.floor(diff / 36e5);
    const days = Math.floor(diff / 864e5);
    if (minutes < 60)
      return `${minutes}m ago`;
    if (hours < 24)
      return `${hours}h ago`;
    if (days < 7)
      return `${days}d ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  trackById(index, item) {
    return item.id;
  }
  getPageNumbers() {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  static \u0275fac = function DemoRequests_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DemoRequests)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Location));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoRequests, selectors: [["app-demo-requests"]], hostVars: 2, hostBindings: function DemoRequests_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mobile-mode", ctx.mobileMode);
    }
  }, decls: 18, vars: 14, consts: [["class", "mobile-view-superadmin", 4, "ngIf"], ["title", "Demo Requests", 3, "breadcrumbs", "actions", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], [1, "filters-section"], [1, "search-box"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search by name, email, or center...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "filter-group"], [3, "ngModelChange", "change", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "mobile-view-superadmin"], [1, "header-info"], [1, "title-icons"], [1, "page-back", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "d-flex"], [1, "overflow-hidden"], [1, "name", "simple"], [1, "search-add-section"], [1, "search-container"], ["type", "text", "placeholder", "Search by name, email...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "search-btn", 3, "click"], [1, "container-fluid", "superadmin-content", "mt-3", "px-3"], ["class", "p-2", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card request-card mb-3", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-2"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "text-center", "py-5"], [1, "bi", "bi-inbox", 2, "font-size", "3rem", "opacity", "0.25"], [1, "mt-3", "mb-0", "text-muted"], [1, "card", "request-card", "mb-3", 3, "click"], [1, "status-container"], [1, "status-circle"], [1, "title-section"], [1, "status-badge-mini"], [1, "contact-name"], [1, "center-name"], [1, "bottom-section"], [1, "info-section"], [1, "info-label"], [1, "info-value"], [1, "info-icon"], [1, "bi", "bi-people-fill"], [1, "info-count"], [1, "date-value"], [1, "bi", "bi-clock"], ["title", "Demo Requests", 3, "breadcrumbs", "actions"], [1, "stats-grid"], [1, "stat-card", "stat-new"], [1, "stat-icon"], [1, "bi", "bi-star-fill"], [1, "stat-info"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "stat-contacted"], [1, "bi", "bi-telephone-fill"], [1, "stat-card", "stat-scheduled"], [1, "bi", "bi-calendar-check-fill"], [1, "stat-card", "stat-completed"], [1, "bi", "bi-check-circle-fill"], [1, "stat-card", "stat-total"], [1, "bi", "bi-graph-up"], [1, "clear-btn", 3, "click"], [1, "bi", "bi-x"], [3, "ngValue"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "bi", "bi-inbox"], [1, "table-container"], [1, "requests-table"], [3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [1, "contact-cell"], [1, "contact-info"], [1, "contact-email"], [1, "center-info"], [1, "center-role"], [1, "status-badge"], [1, "time-ago"], [1, "action-buttons"], ["title", "View Details", 1, "btn-action", "btn-view", 3, "click"], [1, "bi", "bi-eye"], ["title", "Delete", 1, "btn-action", "btn-delete", 3, "click"], [1, "bi", "bi-trash"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "bi", "bi-chevron-right"], [1, "page-info"], [1, "page-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "bi", "bi-x-lg"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "detail-section"], [1, "detail-grid"], [1, "detail-item"], [3, "href"], ["class", "detail-item full-width", 4, "ngIf"], ["class", "detail-item", 4, "ngIf"], [1, "status-actions"], [1, "status-buttons"], ["class", "status-btn", 3, "active", "border-color", "color", "background-color", "click", 4, "ngFor", "ngForOf"], [1, "detail-item", "full-width"], [1, "comments-text"], [1, "status-btn", 3, "click"]], template: function DemoRequests_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header-superadmin");
      \u0275\u0275template(1, DemoRequests_div_1_Template, 18, 5, "div", 0);
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275template(3, DemoRequests_app_title_page_3_Template, 1, 2, "app-title-page", 1)(4, DemoRequests_div_4_Template, 41, 5, "div", 2);
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275element(7, "i", 5);
      \u0275\u0275elementStart(8, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DemoRequests_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function DemoRequests_Template_input_keyup_enter_8_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, DemoRequests_button_9_Template, 2, 0, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DemoRequests_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DemoRequests_Template_select_change_11_listener() {
        return ctx.onStatusChange();
      });
      \u0275\u0275template(12, DemoRequests_option_12_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, DemoRequests_div_13_Template, 4, 0, "div", 11)(14, DemoRequests_div_14_Template, 7, 0, "div", 12)(15, DemoRequests_div_15_Template, 20, 2, "div", 13)(16, DemoRequests_div_16_Template, 8, 6, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DemoRequests_div_17_Template, 8, 1, "div", 15);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.isMobile() ? "d-none" : "container-fluid mt-4");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stats);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statusOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.demoRequests.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.demoRequests.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitlePage, HeaderSuperadminComponent], styles: [`

.stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 1200px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .stats-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.stat-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e9edf4;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 22px;
  color: white;
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: #202c4b;
  line-height: 1;
}
.stat-card[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #6a7287;
  margin-top: 4px;
}
.stat-card.stat-new[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #3b82f6,
      #60a5fa);
}
.stat-card.stat-contacted[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f59e0b,
      #fbbf24);
}
.stat-card.stat-scheduled[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #a78bfa);
}
.stat-card.stat-completed[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #10b981,
      #34d399);
}
.stat-card.stat-total[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #818cf8);
}
.filters-section[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .filters-section[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
.search-box[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 280px;
  position: relative;
}
.search-box[_ngcontent-%COMP%]   i.bi-search[_ngcontent-%COMP%] {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}
.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 12px 40px 12px 42px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.2s;
}
.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #7dd3c0;
  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);
}
.search-box[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
}
.search-box[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {
  color: #6b7280;
}
.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  padding: 12px 36px 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236a7287' d='M4.427 6.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 6H4.604a.25.25 0 0 0-.177.427z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #7dd3c0;
}
.loading-state[_ngcontent-%COMP%], 
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e9edf4;
}
.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {
  width: 40px;
  height: 40px;
  border: 3px solid #e9edf4;
  border-top-color: #7dd3c0;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
  margin: 0 auto 16px;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6a7287;
  font-size: 14px;
}
.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 28px;
  color: #9ca3af;
}
.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 600;
  color: #202c4b;
  margin-bottom: 8px;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: #6a7287;
  font-size: 14px;
}
.table-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  border: 1px solid #e9edf4;
  overflow: hidden;
}
.requests-table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
}
.requests-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
.requests-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f3f4f6;
}
.requests-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background: #f9fafb;
  font-weight: 600;
  font-size: 13px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  cursor: pointer;
  transition: background 0.2s;
}
.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #f9fafb;
}
.requests-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {
  border-bottom: none;
}
.requests-table[_ngcontent-%COMP%]   .contact-cell[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.requests-table[_ngcontent-%COMP%]   .contact-cell[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-name[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #202c4b;
}
.requests-table[_ngcontent-%COMP%]   .contact-cell[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-email[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #6a7287;
}
.requests-table[_ngcontent-%COMP%]   .center-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.requests-table[_ngcontent-%COMP%]   .center-info[_ngcontent-%COMP%]   .center-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #202c4b;
}
.requests-table[_ngcontent-%COMP%]   .center-info[_ngcontent-%COMP%]   .center-role[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #6a7287;
}
.requests-table[_ngcontent-%COMP%]   .time-ago[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #6a7287;
}
.status-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}
.status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 12px;
}
.action-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
}
.btn-action[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-action.btn-view[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #3b82f6;
}
.btn-action.btn-view[_ngcontent-%COMP%]:hover {
  background: #dbeafe;
}
.btn-action.btn-delete[_ngcontent-%COMP%] {
  background: #fef2f2;
  color: #ef4444;
}
.btn-action.btn-delete[_ngcontent-%COMP%]:hover {
  background: #fee2e2;
}
.pagination[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%] {
  min-width: 36px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: #7dd3c0;
  color: #7dd3c0;
}
.pagination[_ngcontent-%COMP%]   .page-btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination[_ngcontent-%COMP%]   .page-btn.active[_ngcontent-%COMP%] {
  background: #7dd3c0;
  border-color: #7dd3c0;
  color: white;
}
.pagination[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {
  margin-left: 16px;
  font-size: 13px;
  color: #6a7287;
}
.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e9edf4;
}
.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #202c4b;
  margin: 0;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border: none;
  background: #f3f4f6;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {
  background: #e5e7eb;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 24px;
}
.detail-section[_ngcontent-%COMP%] {
  margin-bottom: 28px;
}
.detail-section[_ngcontent-%COMP%]:last-of-type {
  margin-bottom: 0;
}
.detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f3f4f6;
}
.detail-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 480px) {
  .detail-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.detail-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.detail-item.full-width[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.detail-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], 
.detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 15px;
  color: #202c4b;
}
.detail-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #3b82f6;
  text-decoration: none;
}
.detail-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.detail-item[_ngcontent-%COMP%]   .comments-text[_ngcontent-%COMP%] {
  background: #f9fafb;
  padding: 12px;
  border-radius: 8px;
  margin: 0;
  line-height: 1.6;
}
.status-actions[_ngcontent-%COMP%] {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e9edf4;
}
.status-actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #202c4b;
  margin-bottom: 12px;
}
.status-actions[_ngcontent-%COMP%]   .status-buttons[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.status-actions[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: 2px solid;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;
}
.status-actions[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
}
.status-actions[_ngcontent-%COMP%]   .status-btn.active[_ngcontent-%COMP%] {
  color: white !important;
}
.mobile-view[_ngcontent-%COMP%] {
  padding-bottom: 110px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {
  background: var(--secondary-color);
  padding: 40px 20px 23px;
  border-radius: 0 0 15px 15px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2117647059);
  padding: 4px 8px;
  border-radius: 12px;
  position: absolute;
  left: 20px;
  bottom: 19px;
  font-size: 15px;
  color: #fff;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 25px;
  overflow: hidden;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 14px;
  color: #1e293b;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {
  color: #94a3b8;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {
  background: var(--secondary-color);
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .search-add-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #fff;
  font-size: 16px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .skeleton-card[_ngcontent-%COMP%] {
  height: 160px;
  background:
    linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%);
  background-size: 200% 100%;
  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;
  border-radius: 16px;
  margin-bottom: 16px;
}
@keyframes _ngcontent-%COMP%_shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%] {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  border: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%] {
  position: absolute;
  top: 20px;
  right: 20px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-circle[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .status-container[_ngcontent-%COMP%]   .status-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #fff;
  font-size: 20px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {
  padding-right: 70px;
  margin-bottom: 20px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .status-badge-mini[_ngcontent-%COMP%] {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  color: #fff;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .contact-name[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .center-name[_ngcontent-%COMP%] {
  font-size: 13px;
  color: #64748b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
  margin-top: 8px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 500;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #fff;
  font-size: 14px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-count[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 12px;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}
.mobile-view-superadmin[_ngcontent-%COMP%]   .request-card[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #94a3b8;
}
/*# sourceMappingURL=demo-requests.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoRequests, [{
    type: Component,
    args: [{ selector: "app-demo-requests", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TitlePage, HeaderSuperadminComponent], template: `<app-header-superadmin></app-header-superadmin>\r
<div *ngIf="isMobile()" class="mobile-view-superadmin">\r
  <div class="header-info">\r
    <div class="title-icons">\r
      <div class="page-back" (click)="back()">\r
        <i class="bi bi-arrow-left"></i>\r
      </div>\r
    </div>\r
    <div class="d-flex">\r
      <div class="overflow-hidden">\r
        <h5 class="name simple">Demo Requests</h5>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search Section -->\r
  <div class="search-add-section">\r
    <div class="search-container">\r
      <input type="text"\r
             class="search-input"\r
             placeholder="Search by name, email..."\r
             [(ngModel)]="searchTerm"\r
             (keyup.enter)="onSearch()">\r
      <button class="search-btn" (click)="onSearch()">\r
        <i class="bi bi-search"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="container-fluid superadmin-content mt-3 px-3">\r
    <!-- Loading -->\r
    <div *ngIf="loading" class="p-2">\r
      <div class="skeleton-card" *ngFor="let i of [1,2,3]"></div>\r
    </div>\r
\r
    <!-- No results -->\r
    <div *ngIf="!loading && demoRequests.length === 0" class="text-center py-5">\r
      <i class="bi bi-inbox" style="font-size: 3rem; opacity: 0.25;"></i>\r
      <p class="mt-3 mb-0 text-muted">No demo requests found</p>\r
    </div>\r
\r
    <!-- Request Cards -->\r
    <div class="card request-card mb-3"\r
         *ngFor="let request of demoRequests; trackBy: trackById"\r
         (click)="viewDetails(request)">\r
\r
      <!-- Status Circle -->\r
      <div class="status-container">\r
        <div class="status-circle" [style.background]="getStatusColor(request.status)">\r
          <i [class]="getStatusIcon(request.status)"></i>\r
        </div>\r
      </div>\r
\r
      <!-- Title Section -->\r
      <div class="title-section">\r
        <span class="status-badge-mini" [style.background-color]="getStatusColor(request.status)">\r
          {{ request.statusName }}\r
        </span>\r
        <h3 class="contact-name">{{ request.fullName }}</h3>\r
        <p class="center-name">{{ request.centerName }}</p>\r
      </div>\r
\r
      <!-- Bottom Section -->\r
      <div class="bottom-section">\r
        <div class="info-section">\r
          <span class="info-label">Children</span>\r
          <div class="info-value">\r
            <div class="info-icon">\r
              <i class="bi bi-people-fill"></i>\r
            </div>\r
            <span class="info-count">{{ request.numberOfChildren }}</span>\r
          </div>\r
        </div>\r
        <div class="info-section">\r
          <span class="info-label">Submitted</span>\r
          <div class="date-value">\r
            <i class="bi bi-clock"></i>\r
            <span>{{ getTimeAgo(request.createdAt) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div [class]="isMobile() ? 'd-none' : 'container-fluid mt-4'">\r
  <app-title-page *ngIf="!isMobile()"\r
    title="Demo Requests"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <!-- Stats Cards -->\r
  <div class="stats-grid" *ngIf="stats">\r
    <div class="stat-card stat-new">\r
      <div class="stat-icon">\r
        <i class="bi bi-star-fill"></i>\r
      </div>\r
      <div class="stat-info">\r
        <span class="stat-value">{{ stats.newRequests }}</span>\r
        <span class="stat-label">New Requests</span>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-contacted">\r
      <div class="stat-icon">\r
        <i class="bi bi-telephone-fill"></i>\r
      </div>\r
      <div class="stat-info">\r
        <span class="stat-value">{{ stats.contacted }}</span>\r
        <span class="stat-label">Contacted</span>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-scheduled">\r
      <div class="stat-icon">\r
        <i class="bi bi-calendar-check-fill"></i>\r
      </div>\r
      <div class="stat-info">\r
        <span class="stat-value">{{ stats.scheduled }}</span>\r
        <span class="stat-label">Scheduled</span>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-completed">\r
      <div class="stat-icon">\r
        <i class="bi bi-check-circle-fill"></i>\r
      </div>\r
      <div class="stat-info">\r
        <span class="stat-value">{{ stats.completed }}</span>\r
        <span class="stat-label">Completed</span>\r
      </div>\r
    </div>\r
    <div class="stat-card stat-total">\r
      <div class="stat-icon">\r
        <i class="bi bi-graph-up"></i>\r
      </div>\r
      <div class="stat-info">\r
        <span class="stat-value">{{ stats.thisMonth }}</span>\r
        <span class="stat-label">This Month</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="filters-section">\r
    <div class="search-box">\r
      <i class="bi bi-search"></i>\r
      <input\r
        type="text"\r
        placeholder="Search by name, email, or center..."\r
        [(ngModel)]="searchTerm"\r
        (keyup.enter)="onSearch()">\r
      <button *ngIf="searchTerm" class="clear-btn" (click)="searchTerm = ''; onSearch()">\r
        <i class="bi bi-x"></i>\r
      </button>\r
    </div>\r
\r
    <div class="filter-group">\r
      <select [(ngModel)]="statusFilter" (change)="onStatusChange()">\r
        <option *ngFor="let option of statusOptions" [ngValue]="option.value">\r
          {{ option.label }}\r
        </option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <p>Loading demo requests...</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading && demoRequests.length === 0">\r
    <div class="empty-icon">\r
      <i class="bi bi-inbox"></i>\r
    </div>\r
    <h3>No Demo Requests</h3>\r
    <p>There are no demo requests matching your criteria.</p>\r
  </div>\r
\r
  <!-- Request Table -->\r
  <div class="table-container" *ngIf="!loading && demoRequests.length > 0">\r
    <table class="requests-table">\r
      <thead>\r
        <tr>\r
          <th>Contact</th>\r
          <th>Center</th>\r
          <th>Location</th>\r
          <th>Children</th>\r
          <th>Status</th>\r
          <th>Submitted</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let request of demoRequests; trackBy: trackById" (click)="viewDetails(request)">\r
          <td class="contact-cell">\r
            <div class="contact-info">\r
              <span class="contact-name">{{ request.fullName }}</span>\r
              <span class="contact-email">{{ request.email }}</span>\r
            </div>\r
          </td>\r
          <td>\r
            <div class="center-info">\r
              <span class="center-name">{{ request.centerName }}</span>\r
              <span class="center-role">{{ request.jobTitle }}</span>\r
            </div>\r
          </td>\r
          <td>{{ request.country }}</td>\r
          <td>{{ request.numberOfChildren }}</td>\r
          <td>\r
            <span class="status-badge" [style.background-color]="getStatusColor(request.status)">\r
              <i [class]="getStatusIcon(request.status)"></i>\r
              {{ request.statusName }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="time-ago">{{ getTimeAgo(request.createdAt) }}</span>\r
          </td>\r
          <td>\r
            <div class="action-buttons">\r
              <button class="btn-action btn-view" (click)="viewDetails(request); $event.stopPropagation()" title="View Details">\r
                <i class="bi bi-eye"></i>\r
              </button>\r
              <button class="btn-action btn-delete" (click)="deleteRequest(request, $event)" title="Delete">\r
                <i class="bi bi-trash"></i>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="pagination" *ngIf="totalPages > 1">\r
    <button\r
      class="page-btn"\r
      [disabled]="currentPage === 1"\r
      (click)="goToPage(currentPage - 1)">\r
      <i class="bi bi-chevron-left"></i>\r
    </button>\r
\r
    <button\r
      *ngFor="let page of getPageNumbers()"\r
      class="page-btn"\r
      [class.active]="page === currentPage"\r
      (click)="goToPage(page)">\r
      {{ page }}\r
    </button>\r
\r
    <button\r
      class="page-btn"\r
      [disabled]="currentPage === totalPages"\r
      (click)="goToPage(currentPage + 1)">\r
      <i class="bi bi-chevron-right"></i>\r
    </button>\r
\r
    <span class="page-info">\r
      Showing {{ (currentPage - 1) * pageSize + 1 }} - {{ currentPage * pageSize > totalCount ? totalCount : currentPage * pageSize }} of {{ totalCount }}\r
    </span>\r
  </div>\r
\r
\r
</div>\r
\r
<!-- Detail Modal -->\r
<div class="modal-overlay" *ngIf="showDetailModal" (click)="closeModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Demo Request Details</h2>\r
      <button class="close-btn" (click)="closeModal()">\r
        <i class="bi bi-x-lg"></i>\r
      </button>\r
    </div>\r
\r
    <div class="modal-body" *ngIf="selectedRequest">\r
      <div class="detail-section">\r
        <h3>Contact Information</h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label>Full Name</label>\r
            <span>{{ selectedRequest.fullName }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label>Email</label>\r
            <a [href]="'mailto:' + selectedRequest.email">{{ selectedRequest.email }}</a>\r
          </div>\r
          <div class="detail-item">\r
            <label>Phone</label>\r
            <a [href]="'tel:' + selectedRequest.phone">{{ selectedRequest.phone }}</a>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="detail-section">\r
        <h3>Center Details</h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label>Center Name</label>\r
            <span>{{ selectedRequest.centerName }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label>Role</label>\r
            <span>{{ selectedRequest.jobTitle }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label>Country</label>\r
            <span>{{ selectedRequest.country }}</span>\r
          </div>\r
          <div class="detail-item">\r
            <label>Number of Children</label>\r
            <span>{{ selectedRequest.numberOfChildren }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="detail-section">\r
        <h3>Additional Info</h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label>How they heard about us</label>\r
            <span>{{ selectedRequest.hearAboutUs }}</span>\r
          </div>\r
          <div class="detail-item full-width" *ngIf="selectedRequest.comments">\r
            <label>Comments</label>\r
            <p class="comments-text">{{ selectedRequest.comments }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="detail-section">\r
        <h3>Status & Timeline</h3>\r
        <div class="detail-grid">\r
          <div class="detail-item">\r
            <label>Current Status</label>\r
            <span class="status-badge" [style.background-color]="getStatusColor(selectedRequest.status)">\r
              <i [class]="getStatusIcon(selectedRequest.status)"></i>\r
              {{ selectedRequest.statusName }}\r
            </span>\r
          </div>\r
          <div class="detail-item">\r
            <label>Submitted</label>\r
            <span>{{ formatDate(selectedRequest.createdAt) }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedRequest.contactedAt">\r
            <label>First Contacted</label>\r
            <span>{{ formatDate(selectedRequest.contactedAt) }}</span>\r
          </div>\r
          <div class="detail-item" *ngIf="selectedRequest.completedAt">\r
            <label>Completed</label>\r
            <span>{{ formatDate(selectedRequest.completedAt) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="status-actions">\r
        <label>Update Status:</label>\r
        <div class="status-buttons">\r
          <button\r
            *ngFor="let option of statusOptions.slice(1)"\r
            class="status-btn"\r
            [class.active]="selectedRequest.status === option.value"\r
            [style.border-color]="option.color"\r
            [style.color]="selectedRequest.status === option.value ? '#fff' : option.color"\r
            [style.background-color]="selectedRequest.status === option.value ? option.color : 'transparent'"\r
            (click)="updateStatus(selectedRequest, option.value!)">\r
            <i [class]="option.icon"></i>\r
            {{ option.label }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: [`/* src/app/features/super-admin/demo-requests/demo-requests.scss */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e9edf4;
}
.stat-card .stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-card .stat-icon i {
  font-size: 22px;
  color: white;
}
.stat-card .stat-info {
  display: flex;
  flex-direction: column;
}
.stat-card .stat-info .stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #202c4b;
  line-height: 1;
}
.stat-card .stat-info .stat-label {
  font-size: 13px;
  color: #6a7287;
  margin-top: 4px;
}
.stat-card.stat-new .stat-icon {
  background:
    linear-gradient(
      135deg,
      #3b82f6,
      #60a5fa);
}
.stat-card.stat-contacted .stat-icon {
  background:
    linear-gradient(
      135deg,
      #f59e0b,
      #fbbf24);
}
.stat-card.stat-scheduled .stat-icon {
  background:
    linear-gradient(
      135deg,
      #8b5cf6,
      #a78bfa);
}
.stat-card.stat-completed .stat-icon {
  background:
    linear-gradient(
      135deg,
      #10b981,
      #34d399);
}
.stat-card.stat-total .stat-icon {
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #818cf8);
}
.filters-section {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .filters-section {
    flex-direction: column;
  }
}
.search-box {
  flex: 1;
  min-width: 280px;
  position: relative;
}
.search-box i.bi-search {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}
.search-box input {
  width: 100%;
  padding: 12px 40px 12px 42px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.2s;
}
.search-box input:focus {
  outline: none;
  border-color: #7dd3c0;
  box-shadow: 0 0 0 3px rgba(125, 211, 192, 0.1);
}
.search-box .clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
}
.search-box .clear-btn:hover {
  color: #6b7280;
}
.filter-group select {
  padding: 12px 36px 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236a7287' d='M4.427 6.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 6H4.604a.25.25 0 0 0-.177.427z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.filter-group select:focus {
  outline: none;
  border-color: #7dd3c0;
}
.loading-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e9edf4;
}
.loading-state .spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e9edf4;
  border-top-color: #7dd3c0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading-state p {
  color: #6a7287;
  font-size: 14px;
}
.empty-state .empty-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-state .empty-icon i {
  font-size: 28px;
  color: #9ca3af;
}
.empty-state h3 {
  font-size: 18px;
  font-weight: 600;
  color: #202c4b;
  margin-bottom: 8px;
}
.empty-state p {
  color: #6a7287;
  font-size: 14px;
}
.table-container {
  background: white;
  border-radius: 12px;
  border: 1px solid #e9edf4;
  overflow: hidden;
}
.requests-table {
  width: 100%;
  border-collapse: collapse;
}
.requests-table th,
.requests-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f3f4f6;
}
.requests-table th {
  background: #f9fafb;
  font-weight: 600;
  font-size: 13px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.requests-table tbody tr {
  cursor: pointer;
  transition: background 0.2s;
}
.requests-table tbody tr:hover {
  background: #f9fafb;
}
.requests-table tbody tr:last-child td {
  border-bottom: none;
}
.requests-table .contact-cell .contact-info {
  display: flex;
  flex-direction: column;
}
.requests-table .contact-cell .contact-info .contact-name {
  font-weight: 600;
  color: #202c4b;
}
.requests-table .contact-cell .contact-info .contact-email {
  font-size: 13px;
  color: #6a7287;
}
.requests-table .center-info {
  display: flex;
  flex-direction: column;
}
.requests-table .center-info .center-name {
  font-weight: 500;
  color: #202c4b;
}
.requests-table .center-info .center-role {
  font-size: 13px;
  color: #6a7287;
}
.requests-table .time-ago {
  font-size: 13px;
  color: #6a7287;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}
.status-badge i {
  font-size: 12px;
}
.action-buttons {
  display: flex;
  gap: 8px;
}
.btn-action {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-action.btn-view {
  background: #eff6ff;
  color: #3b82f6;
}
.btn-action.btn-view:hover {
  background: #dbeafe;
}
.btn-action.btn-delete {
  background: #fef2f2;
  color: #ef4444;
}
.btn-action.btn-delete:hover {
  background: #fee2e2;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.pagination .page-btn {
  min-width: 36px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.pagination .page-btn:hover:not(:disabled) {
  border-color: #7dd3c0;
  color: #7dd3c0;
}
.pagination .page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination .page-btn.active {
  background: #7dd3c0;
  border-color: #7dd3c0;
  color: white;
}
.pagination .page-info {
  margin-left: 16px;
  font-size: 13px;
  color: #6a7287;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e9edf4;
}
.modal-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: #202c4b;
  margin: 0;
}
.modal-header .close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f3f4f6;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.modal-header .close-btn:hover {
  background: #e5e7eb;
}
.modal-body {
  padding: 24px;
}
.detail-section {
  margin-bottom: 28px;
}
.detail-section:last-of-type {
  margin-bottom: 0;
}
.detail-section h3 {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f3f4f6;
}
.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (max-width: 480px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.detail-item.full-width {
  grid-column: 1/-1;
}
.detail-item label {
  font-size: 12px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.detail-item span,
.detail-item a,
.detail-item p {
  font-size: 15px;
  color: #202c4b;
}
.detail-item a {
  color: #3b82f6;
  text-decoration: none;
}
.detail-item a:hover {
  text-decoration: underline;
}
.detail-item .comments-text {
  background: #f9fafb;
  padding: 12px;
  border-radius: 8px;
  margin: 0;
  line-height: 1.6;
}
.status-actions {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #e9edf4;
}
.status-actions label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #202c4b;
  margin-bottom: 12px;
}
.status-actions .status-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.status-actions .status-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: 2px solid;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s;
}
.status-actions .status-btn:hover {
  transform: translateY(-1px);
}
.status-actions .status-btn.active {
  color: white !important;
}
.mobile-view {
  padding-bottom: 110px;
}
.mobile-view-superadmin .header-info {
  background: var(--secondary-color);
  padding: 40px 20px 23px;
  border-radius: 0 0 15px 15px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.mobile-view-superadmin .header-info h5 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
}
.mobile-view-superadmin .header-info .page-back i {
  background: rgba(255, 255, 255, 0.2117647059);
  padding: 4px 8px;
  border-radius: 12px;
  position: absolute;
  left: 20px;
  bottom: 19px;
  font-size: 15px;
  color: #fff;
}
.mobile-view-superadmin .search-add-section {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.mobile-view-superadmin .search-add-section .search-container {
  flex: 1;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 25px;
  overflow: hidden;
}
.mobile-view-superadmin .search-add-section .search-container .search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 14px;
  color: #1e293b;
}
.mobile-view-superadmin .search-add-section .search-container .search-input::placeholder {
  color: #94a3b8;
}
.mobile-view-superadmin .search-add-section .search-container .search-btn {
  background: var(--secondary-color);
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin .search-add-section .search-container .search-btn i {
  color: #fff;
  font-size: 16px;
}
.mobile-view-superadmin .skeleton-card {
  height: 160px;
  background:
    linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 16px;
  margin-bottom: 16px;
}
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.mobile-view-superadmin .request-card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  border: none;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.mobile-view-superadmin .request-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
.mobile-view-superadmin .request-card .status-container {
  position: absolute;
  top: 20px;
  right: 20px;
}
.mobile-view-superadmin .request-card .status-container .status-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin .request-card .status-container .status-circle i {
  color: #fff;
  font-size: 20px;
}
.mobile-view-superadmin .request-card .title-section {
  padding-right: 70px;
  margin-bottom: 20px;
}
.mobile-view-superadmin .request-card .title-section .status-badge-mini {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  color: #fff;
}
.mobile-view-superadmin .request-card .title-section .contact-name {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px;
}
.mobile-view-superadmin .request-card .title-section .center-name {
  font-size: 13px;
  color: #64748b;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mobile-view-superadmin .request-card .bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
  margin-top: 8px;
}
.mobile-view-superadmin .request-card .bottom-section .info-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mobile-view-superadmin .request-card .bottom-section .info-section .info-label {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 500;
}
.mobile-view-superadmin .request-card .bottom-section .info-value {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mobile-view-superadmin .request-card .bottom-section .info-value .info-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-view-superadmin .request-card .bottom-section .info-value .info-icon i {
  color: #fff;
  font-size: 14px;
}
.mobile-view-superadmin .request-card .bottom-section .info-value .info-count {
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 12px;
}
.mobile-view-superadmin .request-card .bottom-section .date-value {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}
.mobile-view-superadmin .request-card .bottom-section .date-value i {
  color: #94a3b8;
}
/*# sourceMappingURL=demo-requests.css.map */
`] }]
  }], () => [{ type: HttpClient }, { type: Location }], { mobileMode: [{
    type: HostBinding,
    args: ["class.mobile-mode"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoRequests, { className: "DemoRequests", filePath: "src/app/features/super-admin/demo-requests/demo-requests.ts", lineNumber: 51 });
})();
export {
  DemoRequests
};
//# sourceMappingURL=chunk-L2HAHXEL.js.map
