import {
  ImageDownloadService
} from "./chunk-3GUYEFWP.js";
import "./chunk-HK2EHJHC.js";
import {
  ParentChildHeaderSimpleComponent
} from "./chunk-6XHCX23V.js";
import "./chunk-74BU3QHC.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
import {
  DailyActivityService
} from "./chunk-D442GME6.js";
import "./chunk-JHHNP67E.js";
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
import "./chunk-7KUBODN6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-Y62O6ZFA.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  Location,
  NgClass,
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/features/daily-activities/activity-detail/activity-detail.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["fileInput"];
var _c1 = ["cameraInput"];
function ActivityDetail_div_0_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275element(5, "img", 28);
    \u0275\u0275elementStart(6, "div", 29)(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "DAILY_REPORT.CHILD"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.activity.child.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.activity.child.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getChildFullName());
  }
}
function ActivityDetail_div_0_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.DURATION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDuration(ctx_r1.activity.duration), " ");
  }
}
function ActivityDetail_div_0_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275element(5, "i", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.FOOD_DRINK"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.activity.foodItem, " ");
  }
}
function ActivityDetail_div_0_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "DAILY_REPORT.MOOD"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMoodEmoji());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "DAILY_REPORT.MOODS." + ctx_r1.activity.mood.toUpperCase()));
  }
}
function ActivityDetail_div_0_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activity.notes);
  }
}
function ActivityDetail_div_0_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275element(5, "i", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "DAILY_REPORT.RECORDED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.formatDate(ctx_r1.activity.createdAt), " at ", ctx_r1.formatTime(ctx_r1.activity.createdAt), " ");
  }
}
function ActivityDetail_div_0_div_3_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementEnd();
  }
}
function ActivityDetail_div_0_div_3_div_16_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_16_div_6_div_1_Template_div_click_0_listener() {
      const photo_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.openPhotoModal(photo_r4));
    });
    \u0275\u0275element(1, "img", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getThumbnailSrc(photo_r4), \u0275\u0275sanitizeUrl)("alt", photo_r4.title || "Activity photo");
  }
}
function ActivityDetail_div_0_div_3_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, ActivityDetail_div_0_div_3_div_16_div_6_div_1_Template, 2, 2, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.photos);
  }
}
function ActivityDetail_div_0_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3", 17);
    \u0275\u0275element(2, "i", 40);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ActivityDetail_div_0_div_3_div_16_div_5_Template, 2, 0, "div", 24)(6, ActivityDetail_div_0_div_3_div_16_div_6_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.PHOTOS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingPhotos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPhotos);
  }
}
function ActivityDetail_div_0_div_3_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function ActivityDetail_div_0_div_3_i_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function ActivityDetail_div_0_div_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementEnd();
  }
}
function ActivityDetail_div_0_div_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "p", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.NO_COMMENTS_YET"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const comment_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startEditComment(comment_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.EDIT"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const comment_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteComment(comment_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.DELETE"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66)(4, "button", 67);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const comment_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startReply(comment_r6));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_7_Template, 3, 3, "button", 68)(8, ActivityDetail_div_0_div_3_div_33_div_1_div_9_button_8_Template, 3, 3, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r6.content);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "DAILY_REPORT.REPLY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(comment_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(comment_r6));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_0_div_3_div_33_div_1_div_10_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCommentText, $event) || (ctx_r1.editCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 73);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.saveEditComment());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCommentText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.SAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "textarea", 76);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_0_div_3_div_33_div_1_div_11_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 77);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.submitReply());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.cancelReply());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "DAILY_REPORT.WRITE_REPLY"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.replyText.trim() || ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "DAILY_REPORT.REPLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const reply_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.startEditComment(reply_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.EDIT"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const reply_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.deleteComment(reply_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.DELETE"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275template(4, ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_4_Template, 3, 3, "button", 68)(5, ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_button_5_Template, 3, 3, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r12.content);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(reply_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(reply_r12));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_9_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(7);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCommentText, $event) || (ctx_r1.editCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 73);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.saveEditComment());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCommentText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.SAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 81);
    \u0275\u0275elementStart(2, "div", 82)(3, "div", 58)(4, "span", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_8_Template, 6, 3, "div", 61)(9, ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_div_9_Template, 8, 7, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275property("src", reply_r12.user.profilePicture || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl)("alt", reply_r12.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", reply_r12.user.firstName, " ", reply_r12.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeAgo(reply_r12.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) !== reply_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) === reply_r12.id);
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, ActivityDetail_div_0_div_3_div_33_div_1_div_12_div_1_Template, 10, 7, "div", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comment_r6.replies);
  }
}
function ActivityDetail_div_0_div_3_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
    \u0275\u0275element(2, "img", 56);
    \u0275\u0275elementStart(3, "div", 57)(4, "div", 58)(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 60);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ActivityDetail_div_0_div_3_div_33_div_1_div_9_Template, 9, 6, "div", 61)(10, ActivityDetail_div_0_div_3_div_33_div_1_div_10_Template, 8, 7, "div", 62)(11, ActivityDetail_div_0_div_3_div_33_div_1_div_11_Template, 9, 11, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ActivityDetail_div_0_div_3_div_33_div_1_div_12_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", comment_r6.user.profilePicture || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl)("alt", comment_r6.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", comment_r6.user.firstName, " ", comment_r6.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeAgo(comment_r6.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) !== comment_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) === comment_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.replyingTo == null ? null : ctx_r1.replyingTo.id) === comment_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r6.replies && comment_r6.replies.length > 0);
  }
}
function ActivityDetail_div_0_div_3_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, ActivityDetail_div_0_div_3_div_33_div_1_Template, 13, 9, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.comments);
  }
}
function ActivityDetail_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ActivityDetail_div_0_div_3_div_10_Template, 9, 6, "div", 15)(11, ActivityDetail_div_0_div_3_div_11_Template, 7, 4, "div", 15)(12, ActivityDetail_div_0_div_3_div_12_Template, 7, 4, "div", 15)(13, ActivityDetail_div_0_div_3_div_13_Template, 10, 7, "div", 15)(14, ActivityDetail_div_0_div_3_div_14_Template, 6, 4, "div", 15)(15, ActivityDetail_div_0_div_3_div_15_Template, 7, 5, "div", 15)(16, ActivityDetail_div_0_div_3_div_16_Template, 7, 5, "div", 15);
    \u0275\u0275elementStart(17, "div", 16)(18, "h3", 17);
    \u0275\u0275element(19, "i", 18);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19)(23, "textarea", 20);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_0_div_3_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCommentText, $event) || (ctx_r1.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(25, "        ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 21);
    \u0275\u0275listener("click", function ActivityDetail_div_0_div_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitComment());
    });
    \u0275\u0275template(27, ActivityDetail_div_0_div_3_span_27_Template, 1, 0, "span", 22)(28, ActivityDetail_div_0_div_3_i_28_Template, 1, 0, "i", 23);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, ActivityDetail_div_0_div_3_div_31_Template, 2, 0, "div", 24)(32, ActivityDetail_div_0_div_3_div_32_Template, 4, 3, "div", 25)(33, ActivityDetail_div_0_div_3_div_33_Template, 2, 1, "div", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getActivityEmoji());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getActivityLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.activity.activityTime));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.activity.activityTime));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.child);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.foodItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.mood);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.photos.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(21, 23, "DAILY_REPORT.COMMENTS"), " (", ctx_r1.comments.length, ")");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCommentText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 25, "DAILY_REPORT.WRITE_COMMENT"))("disabled", ctx_r1.submittingComment);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.newCommentText.trim() || ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 27, "DAILY_REPORT.POST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingComments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingComments && ctx_r1.comments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingComments && ctx_r1.comments.length > 0);
  }
}
function ActivityDetail_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-parent-child-header-simple", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, ActivityDetail_div_0_div_3_Template, 34, 29, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "DAILY_REPORT.ACTIVITY_DETAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.activity);
  }
}
function ActivityDetail_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "h5", 119);
    \u0275\u0275element(2, "i", 120);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 110);
    \u0275\u0275element(6, "img", 121);
    \u0275\u0275elementStart(7, "div")(8, "h5", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 4, "DAILY_REPORT.CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.activity.child.profilePicture || "assets/child.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.activity.child.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getChildFullName());
  }
}
function ActivityDetail_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "h5", 119);
    \u0275\u0275element(2, "i", 122);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "DAILY_REPORT.NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activity.notes);
  }
}
function ActivityDetail_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 126);
    \u0275\u0275element(3, "i", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "small", 115);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "DAILY_REPORT.DURATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(ctx_r1.activity.duration));
  }
}
function ActivityDetail_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 126);
    \u0275\u0275element(3, "i", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128)(5, "small", 115);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 2, "DAILY_REPORT.FOOD_DRINK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.activity.foodItem);
  }
}
function ActivityDetail_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 130)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 128)(6, "small", 115);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5", 100);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMoodEmoji());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 3, "DAILY_REPORT.MOOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, "DAILY_REPORT.MOODS." + ctx_r1.activity.mood.toUpperCase()));
  }
}
function ActivityDetail_div_1_div_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "span", 144);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.LOADING_PHOTOS"));
  }
}
function ActivityDetail_div_1_div_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275element(1, "div", 146);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.UPLOADING_PHOTOS"), " ");
  }
}
function ActivityDetail_div_1_div_19_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "i", 148);
    \u0275\u0275elementStart(2, "p", 100);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.NO_PHOTOS_YET"));
  }
}
function ActivityDetail_div_1_div_19_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_19_div_23_div_1_Template_div_click_0_listener() {
      const photo_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openPhotoModal(photo_r18));
    });
    \u0275\u0275element(1, "img", 47);
    \u0275\u0275elementStart(2, "div", 152);
    \u0275\u0275element(3, "i", 153);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const photo_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getThumbnailSrc(photo_r18), \u0275\u0275sanitizeUrl)("alt", photo_r18.title || "Activity photo");
  }
}
function ActivityDetail_div_1_div_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149);
    \u0275\u0275template(1, ActivityDetail_div_1_div_19_div_23_div_1_Template, 4, 2, "div", 150);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.photos);
  }
}
function ActivityDetail_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 131)(2, "h5", 100);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 132)(7, "button", 133);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerCameraCapture());
    });
    \u0275\u0275element(8, "i", 134);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 135);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerFileUpload());
    });
    \u0275\u0275element(12, "i", 136);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 137, 0);
    \u0275\u0275listener("change", function ActivityDetail_div_1_div_19_Template_input_change_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 138, 1);
    \u0275\u0275listener("change", function ActivityDetail_div_1_div_19_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCameraCapture($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 101);
    \u0275\u0275template(20, ActivityDetail_div_1_div_19_div_20_Template, 5, 3, "div", 139)(21, ActivityDetail_div_1_div_19_div_21_Template, 4, 3, "div", 140)(22, ActivityDetail_div_1_div_19_div_22_Template, 5, 3, "div", 141)(23, ActivityDetail_div_1_div_19_div_23_Template, 2, 1, "div", 142);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 9, "DAILY_REPORT.ACTIVITY_GALLERY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.uploadingPhoto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 11, "DAILY_REPORT.TAKE_PHOTO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.uploadingPhoto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 13, "DAILY_REPORT.UPLOAD"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.loadingPhotos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadingPhoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPhotos && ctx_r1.photos.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingPhotos && ctx_r1.photos.length > 0);
  }
}
function ActivityDetail_div_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function ActivityDetail_div_1_i_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 49);
  }
}
function ActivityDetail_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementStart(2, "span", 144);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.LOADING_COMMENTS"));
  }
}
function ActivityDetail_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 154);
    \u0275\u0275elementStart(2, "p", 100);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "DAILY_REPORT.NO_COMMENTS_BE_FIRST"));
  }
}
function ActivityDetail_div_1_div_38_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.EDITED"), ")");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_11_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_11_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const comment_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditComment(comment_r20));
    });
    \u0275\u0275element(1, "i", 175);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.EDIT"), " ");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_11_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_11_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const comment_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteComment(comment_r20));
    });
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.DELETE"), " ");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170)(4, "button", 171);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const comment_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startReply(comment_r20));
    });
    \u0275\u0275element(5, "i", 172);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ActivityDetail_div_1_div_38_div_1_div_11_button_8_Template, 4, 3, "button", 173)(9, ActivityDetail_div_1_div_38_div_1_div_11_button_9_Template, 4, 3, "button", 174);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const comment_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r20.content);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 4, "DAILY_REPORT.REPLY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(comment_r20));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(comment_r20));
  }
}
function ActivityDetail_div_1_div_38_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_1_div_38_div_1_div_12_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCommentText, $event) || (ctx_r1.editCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 73);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEditComment());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCommentText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.SAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_1_div_38_div_1_div_13_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 48);
  }
}
function ActivityDetail_div_1_div_38_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179)(1, "textarea", 76);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_1_div_38_div_1_div_13_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.replyText, $event) || (ctx_r1.replyText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(3, "                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 180);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.submitReply());
    });
    \u0275\u0275template(5, ActivityDetail_div_1_div_38_div_1_div_13_span_5_Template, 1, 0, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelReply());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.replyText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 6, "DAILY_REPORT.WRITE_REPLY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.replyText.trim() || ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "DAILY_REPORT.REPLY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "DAILY_REPORT.EDITED"), ")");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const reply_r26 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.startEditComment(reply_r26));
    });
    \u0275\u0275element(1, "i", 175);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.EDIT"), " ");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const reply_r26 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteComment(reply_r26));
    });
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.DELETE"), " ");
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 170);
    \u0275\u0275template(4, ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_4_Template, 4, 3, "button", 173)(5, ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_button_5_Template, 4, 3, "button", 174);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reply_r26.content);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(reply_r26));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditComment(reply_r26));
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 178)(1, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_11_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCommentText, $event) || (ctx_r1.editCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 73);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.saveEditComment());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.cancelEditComment());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCommentText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "DAILY_REPORT.SAVE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "DAILY_REPORT.CANCEL"));
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183)(1, "div", 184);
    \u0275\u0275element(2, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 160)(4, "div", 161)(5, "span", 162);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 163);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ActivityDetail_div_1_div_38_div_1_div_14_div_1_span_9_Template, 3, 3, "span", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_10_Template, 6, 3, "div", 61)(11, ActivityDetail_div_1_div_38_div_1_div_14_div_1_div_11_Template, 8, 7, "div", 165);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reply_r26 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", reply_r26.user.profilePicture || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl)("alt", reply_r26.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", reply_r26.user.firstName, " ", reply_r26.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeAgo(reply_r26.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reply_r26.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) !== reply_r26.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) === reply_r26.id);
  }
}
function ActivityDetail_div_1_div_38_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275template(1, ActivityDetail_div_1_div_38_div_1_div_14_div_1_Template, 12, 8, "div", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", comment_r20.replies);
  }
}
function ActivityDetail_div_1_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159);
    \u0275\u0275element(3, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 160)(5, "div", 161)(6, "span", 162);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 163);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ActivityDetail_div_1_div_38_div_1_span_10_Template, 3, 3, "span", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ActivityDetail_div_1_div_38_div_1_div_11_Template, 10, 6, "div", 61)(12, ActivityDetail_div_1_div_38_div_1_div_12_Template, 8, 7, "div", 165)(13, ActivityDetail_div_1_div_38_div_1_div_13_Template, 11, 12, "div", 166);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ActivityDetail_div_1_div_38_div_1_div_14_Template, 2, 1, "div", 167);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", comment_r20.user.profilePicture || "assets/default-avatar.svg", \u0275\u0275sanitizeUrl)("alt", comment_r20.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", comment_r20.user.firstName, " ", comment_r20.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeAgo(comment_r20.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r20.updatedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) !== comment_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingComment == null ? null : ctx_r1.editingComment.id) === comment_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.replyingTo == null ? null : ctx_r1.replyingTo.id) === comment_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", comment_r20.replies && comment_r20.replies.length > 0);
  }
}
function ActivityDetail_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, ActivityDetail_div_1_div_38_div_1_Template, 15, 10, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.comments);
  }
}
function ActivityDetail_div_1_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "small", 109);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 110);
    \u0275\u0275element(5, "i", 185);
    \u0275\u0275elementStart(6, "div", 114);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.DURATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDuration(ctx_r1.activity.duration));
  }
}
function ActivityDetail_div_1_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "small", 109);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 110)(5, "span", 186);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 114);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "DAILY_REPORT.CHILDS_MOOD"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getMoodEmoji());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "DAILY_REPORT.MOODS." + ctx_r1.activity.mood.toUpperCase()));
  }
}
function ActivityDetail_div_1_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small", 109);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 110);
    \u0275\u0275element(5, "i", 187);
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "DAILY_REPORT.RECORDED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.activity.createdAt));
  }
}
function ActivityDetail_div_1_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 188)(1, "div", 99)(2, "h5", 100);
    \u0275\u0275element(3, "i", 189);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 101)(7, "div", 190)(8, "button", 191);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_69_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editActivity());
    });
    \u0275\u0275element(9, "i", 192);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 193);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_69_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteActivityAction());
    });
    \u0275\u0275element(13, "i", 194);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 195);
    \u0275\u0275listener("click", function ActivityDetail_div_1_div_69_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(17, "i", 196);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 4, "DAILY_REPORT.QUICK_ACTIONS"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 6, "DAILY_REPORT.EDIT_ACTIVITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 8, "DAILY_REPORT.DELETE_ACTIVITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 10, "DAILY_REPORT.BACK_TO_REPORT"), " ");
  }
}
function ActivityDetail_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "app-title-page", 84);
    \u0275\u0275elementStart(2, "div", 85)(3, "div", 86)(4, "div", 87)(5, "div", 88)(6, "div", 89);
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 93);
    \u0275\u0275template(13, ActivityDetail_div_1_div_13_Template, 10, 6, "div", 94)(14, ActivityDetail_div_1_div_14_Template, 7, 4, "div", 94);
    \u0275\u0275elementStart(15, "div", 95);
    \u0275\u0275template(16, ActivityDetail_div_1_div_16_Template, 10, 4, "div", 96)(17, ActivityDetail_div_1_div_17_Template, 10, 4, "div", 96)(18, ActivityDetail_div_1_div_18_Template, 12, 7, "div", 96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, ActivityDetail_div_1_div_19_Template, 24, 15, "div", 97);
    \u0275\u0275elementStart(20, "div", 98)(21, "div", 99)(22, "h5", 100);
    \u0275\u0275element(23, "i", 18);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 101)(27, "div", 102)(28, "textarea", 20);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ActivityDetail_div_1_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCommentText, $event) || (ctx_r1.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(30, "            ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275listener("click", function ActivityDetail_div_1_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitComment());
    });
    \u0275\u0275template(32, ActivityDetail_div_1_span_32_Template, 1, 0, "span", 22)(33, ActivityDetail_div_1_i_33_Template, 1, 0, "i", 23);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, ActivityDetail_div_1_div_36_Template, 5, 3, "div", 24)(37, ActivityDetail_div_1_div_37_Template, 5, 3, "div", 25)(38, ActivityDetail_div_1_div_38_Template, 2, 1, "div", 103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 104)(40, "div", 105)(41, "div", 106)(42, "h5", 100);
    \u0275\u0275element(43, "i", 107);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 101)(47, "div", 108)(48, "small", 109);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 110)(52, "span", 111);
    \u0275\u0275element(53, "i", 112);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 108)(56, "small", 109);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 110);
    \u0275\u0275element(60, "i", 113);
    \u0275\u0275elementStart(61, "div")(62, "div", 114);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "small", 115);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(66, ActivityDetail_div_1_div_66_Template, 8, 4, "div", 116)(67, ActivityDetail_div_1_div_67_Template, 10, 7, "div", 116)(68, ActivityDetail_div_1_div_68_Template, 8, 4, "div", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, ActivityDetail_div_1_div_69_Template, 20, 12, "div", 117);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.getActivityLabel())("breadcrumbs", ctx_r1.breadcrumbs)("actions", ctx_r1.titleActions);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.getActivityColor());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getActivityIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getActivityLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.activity.activityTime));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activity.child);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.notes);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activity.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.foodItem);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.mood);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(25, 37, "DAILY_REPORT.COMMENTS"), " (", ctx_r1.comments.length, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCommentText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 39, "DAILY_REPORT.WRITE_COMMENT"))("disabled", ctx_r1.submittingComment);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.newCommentText.trim() || ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submittingComment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 41, "DAILY_REPORT.POST_COMMENT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.loadingComments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingComments && ctx_r1.comments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingComments && ctx_r1.comments.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(45, 43, "DAILY_REPORT.ACTIVITY_DETAILS"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 45, "DAILY_REPORT.ACTIVITY_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.getActivityColor());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getActivityIcon());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.activity.activityType, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 47, "DAILY_REPORT.DATE_TIME"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.activity.activityTime));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTime(ctx_r1.activity.activityTime));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.mood);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activity.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ActivityDetail_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198)(2, "div", 199)(3, "span", 200);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 201);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "DAILY_REPORT.LOADING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "DAILY_REPORT.LOADING_ACTIVITY"));
  }
}
function ActivityDetail_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 198);
    \u0275\u0275element(2, "i", 202);
    \u0275\u0275elementStart(3, "h4", 203);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 115);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 204);
    \u0275\u0275listener("click", function ActivityDetail_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(10, "i", 205);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "DAILY_REPORT.ACTIVITY_NOT_FOUND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "DAILY_REPORT.ACTIVITY_NOT_FOUND_TEXT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "DAILY_REPORT.BACK_TO_DAILY_REPORT"), " ");
  }
}
function ActivityDetail_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 214);
    \u0275\u0275element(1, "div", 215);
    \u0275\u0275elementStart(2, "p", 216);
    \u0275\u0275text(3, "Loading image...");
    \u0275\u0275elementEnd()();
  }
}
function ActivityDetail_div_4_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 217);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.fullImageData, \u0275\u0275sanitizeUrl)("alt", (ctx_r1.selectedPhoto == null ? null : ctx_r1.selectedPhoto.title) || "Activity photo");
  }
}
function ActivityDetail_div_4_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 227);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPhoto.title);
  }
}
function ActivityDetail_div_4_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 228);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("by ", ctx_r1.selectedPhoto.uploadedByName);
  }
}
function ActivityDetail_div_4_div_7_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 229);
    \u0275\u0275listener("click", function ActivityDetail_div_4_div_7_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePhoto(ctx_r1.selectedPhoto));
    });
    \u0275\u0275element(1, "i", 177);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "DAILY_REPORT.DELETE"), " ");
  }
}
function ActivityDetail_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219);
    \u0275\u0275template(2, ActivityDetail_div_4_div_7_span_2_Template, 2, 1, "span", 220);
    \u0275\u0275elementStart(3, "span", 221);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ActivityDetail_div_4_div_7_span_5_Template, 2, 1, "span", 222);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 223)(7, "button", 224);
    \u0275\u0275listener("click", function ActivityDetail_div_4_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadPhoto());
    });
    \u0275\u0275element(8, "i", 225);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ActivityDetail_div_4_div_7_button_12_Template, 4, 3, "button", 226);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedPhoto.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeAgo(ctx_r1.selectedPhoto.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPhoto.uploadedByName);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.downloadingImage || ctx_r1.loadingFullImage);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-download", !ctx_r1.downloadingImage)("bi-hourglass-split", ctx_r1.downloadingImage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.downloadingImage ? \u0275\u0275pipeBind1(10, 10, "GALLERY.SAVING") : \u0275\u0275pipeBind1(11, 12, "GALLERY.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
  }
}
function ActivityDetail_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 206);
    \u0275\u0275listener("click", function ActivityDetail_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePhotoModal());
    });
    \u0275\u0275elementStart(1, "div", 207);
    \u0275\u0275listener("click", function ActivityDetail_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 208);
    \u0275\u0275listener("click", function ActivityDetail_div_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePhotoModal());
    });
    \u0275\u0275element(3, "i", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 210);
    \u0275\u0275template(5, ActivityDetail_div_4_div_5_Template, 4, 0, "div", 211)(6, ActivityDetail_div_4_img_6_Template, 1, 2, "img", 212);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ActivityDetail_div_4_div_7_Template, 13, 14, "div", 213);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loadingFullImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingFullImage && ctx_r1.fullImageData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPhoto);
  }
}
var ActivityDetail = class _ActivityDetail {
  route;
  router;
  dailyActivityService;
  authService;
  location;
  http;
  translate;
  pageTitleService;
  imageDownloadService;
  fileInput;
  cameraInput;
  langChangeSub;
  activity = null;
  loading = true;
  activityId = 0;
  titleActions = [];
  breadcrumbs = [];
  // Comments
  comments = [];
  loadingComments = false;
  newCommentText = "";
  replyingTo = null;
  replyText = "";
  editingComment = null;
  editCommentText = "";
  submittingComment = false;
  // Gallery
  photos = [];
  loadingPhotos = false;
  uploadingPhoto = false;
  selectedPhoto = null;
  showPhotoModal = false;
  fullImageData = null;
  loadingFullImage = false;
  downloadingImage = false;
  // Activity templates for icon/color mapping
  activityTemplates = [
    { type: "Nap", icon: "bi-moon-stars", color: "primary", label: "Nap Time", defaultDuration: 60 },
    { type: "Meal", icon: "bi-egg-fried", color: "success", label: "Meal", requiresFood: true },
    { type: "Snack", icon: "bi-cup-hot", color: "warning", label: "Snack", requiresFood: true },
    { type: "Play", icon: "bi-controller", color: "info", label: "Play Time", defaultDuration: 30 },
    { type: "Diaper", icon: "bi-baby", color: "secondary", label: "Diaper Change" },
    { type: "Outdoor", icon: "bi-tree", color: "success", label: "Outdoor Activity", defaultDuration: 45 },
    { type: "Learning", icon: "bi-book", color: "primary", label: "Learning", defaultDuration: 30 },
    { type: "Bathroom", icon: "bi-droplet", color: "info", label: "Bathroom" }
  ];
  // Mood emojis
  moodEmojis = {
    "Happy": "\u{1F60A}",
    "Sad": "\u{1F622}",
    "Cranky": "\u{1F624}",
    "Sleepy": "\u{1F634}",
    "Energetic": "\u26A1",
    "Calm": "\u{1F60C}"
  };
  get isParent() {
    return this.authService.isParent();
  }
  get currentUserId() {
    return this.authService.getUserId() || "";
  }
  constructor(route, router, dailyActivityService, authService, location, http, translate, pageTitleService, imageDownloadService) {
    this.route = route;
    this.router = router;
    this.dailyActivityService = dailyActivityService;
    this.authService = authService;
    this.location = location;
    this.http = http;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
    this.imageDownloadService = imageDownloadService;
  }
  ngOnInit() {
    this.pageTitleService.setTitle(this.translate.instant("DAILY_REPORT.ACTIVITY_DETAIL"));
    this.route.params.subscribe((params) => {
      this.activityId = +params["id"];
      this.loadActivity();
      this.loadComments();
      this.loadPhotos();
    });
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("DAILY_REPORT.ACTIVITY_DETAIL"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  back() {
    this.location.back();
  }
  loadActivity() {
    this.loading = true;
    this.dailyActivityService.getActivity(this.activityId).subscribe({
      next: (activity) => {
        this.activity = activity;
        this.setupBreadcrumbs();
        this.setupTitleActions();
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading activity:", error);
        this.loading = false;
      }
    });
  }
  // Comments functionality
  loadComments() {
    this.loadingComments = true;
    this.http.get(`${ApiConfig.ENDPOINTS.ACTIVITY_COMMENTS}/ByActivity/${this.activityId}`).subscribe({
      next: (comments) => {
        this.comments = comments;
        this.loadingComments = false;
      },
      error: (error) => {
        console.error("Error loading comments:", error);
        this.loadingComments = false;
      }
    });
  }
  submitComment() {
    if (!this.newCommentText.trim())
      return;
    this.submittingComment = true;
    this.http.post(`${ApiConfig.ENDPOINTS.ACTIVITY_COMMENTS}`, {
      activityId: this.activityId,
      content: this.newCommentText
    }).subscribe({
      next: (comment) => {
        this.comments.unshift(__spreadProps(__spreadValues({}, comment), { replies: [] }));
        this.newCommentText = "";
        this.submittingComment = false;
      },
      error: (error) => {
        console.error("Error posting comment:", error);
        this.submittingComment = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to post comment. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  startReply(comment) {
    this.replyingTo = comment;
    this.replyText = "";
  }
  cancelReply() {
    this.replyingTo = null;
    this.replyText = "";
  }
  submitReply() {
    if (!this.replyText.trim() || !this.replyingTo)
      return;
    this.submittingComment = true;
    this.http.post(`${ApiConfig.ENDPOINTS.ACTIVITY_COMMENTS}`, {
      activityId: this.activityId,
      content: this.replyText,
      parentCommentId: this.replyingTo.id
    }).subscribe({
      next: (reply) => {
        const parentComment = this.comments.find((c) => c.id === this.replyingTo?.id);
        if (parentComment) {
          if (!parentComment.replies)
            parentComment.replies = [];
          parentComment.replies.push(reply);
        }
        this.cancelReply();
        this.submittingComment = false;
      },
      error: (error) => {
        console.error("Error posting reply:", error);
        this.submittingComment = false;
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to post reply. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  startEditComment(comment) {
    this.editingComment = comment;
    this.editCommentText = comment.content;
  }
  cancelEditComment() {
    this.editingComment = null;
    this.editCommentText = "";
  }
  saveEditComment() {
    if (!this.editCommentText.trim() || !this.editingComment)
      return;
    this.http.put(`${ApiConfig.ENDPOINTS.ACTIVITY_COMMENTS}/${this.editingComment.id}`, {
      content: this.editCommentText
    }).subscribe({
      next: () => {
        if (this.editingComment) {
          this.editingComment.content = this.editCommentText;
          this.editingComment.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
        }
        this.cancelEditComment();
      },
      error: (error) => {
        console.error("Error updating comment:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to update comment. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  async deleteComment(comment) {
    const result = await import_sweetalert2.default.fire({
      icon: "warning",
      title: this.translate.instant("COMMON.CONFIRM"),
      text: "Are you sure you want to delete this comment?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    });
    if (!result.isConfirmed)
      return;
    this.http.delete(`${ApiConfig.ENDPOINTS.ACTIVITY_COMMENTS}/${comment.id}`).subscribe({
      next: () => {
        const index = this.comments.findIndex((c) => c.id === comment.id);
        if (index > -1) {
          this.comments.splice(index, 1);
        } else {
          for (const c of this.comments) {
            if (c.replies) {
              const replyIndex = c.replies.findIndex((r) => r.id === comment.id);
              if (replyIndex > -1) {
                c.replies.splice(replyIndex, 1);
                break;
              }
            }
          }
        }
      },
      error: (error) => {
        console.error("Error deleting comment:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to delete comment. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  canEditComment(comment) {
    return comment.user.id === this.currentUserId || this.authService.isAdmin();
  }
  // Gallery functionality
  loadPhotos() {
    this.loadingPhotos = true;
    this.http.get(`${ApiConfig.ENDPOINTS.PHOTOS}/by-activity/${this.activityId}`).subscribe({
      next: (response) => {
        this.photos = response.data;
        this.loadingPhotos = false;
      },
      error: (error) => {
        console.error("Error loading photos:", error);
        this.loadingPhotos = false;
      }
    });
  }
  triggerFileUpload() {
    this.fileInput?.nativeElement.click();
  }
  triggerCameraCapture() {
    this.cameraInput?.nativeElement.click();
  }
  onCameraCapture(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    this.uploadPhotos([file]);
    input.value = "";
  }
  onFilesSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const files = Array.from(input.files);
    this.uploadPhotos(files);
    input.value = "";
  }
  uploadPhotos(files) {
    if (files.length === 0)
      return;
    this.uploadingPhoto = true;
    if (files.length === 1) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("activityId", this.activityId.toString());
      this.http.post(`${ApiConfig.ENDPOINTS.PHOTOS}/upload-activity`, formData).subscribe({
        next: (photo) => {
          this.photos.unshift(photo);
          this.uploadingPhoto = false;
        },
        error: (error) => {
          console.error("Error uploading photo:", error);
          this.uploadingPhoto = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("COMMON.ERROR"),
            text: "Failed to upload photo. Please try again.",
            confirmButtonColor: "#7dd3c0"
          });
        }
      });
    } else {
      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));
      formData.append("activityId", this.activityId.toString());
      this.http.post(`${ApiConfig.ENDPOINTS.PHOTOS}/upload-activity-multiple`, formData).subscribe({
        next: (response) => {
          this.photos = [...response.uploaded, ...this.photos];
          this.uploadingPhoto = false;
        },
        error: (error) => {
          console.error("Error uploading photos:", error);
          this.uploadingPhoto = false;
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("COMMON.ERROR"),
            text: "Failed to upload photos. Please try again.",
            confirmButtonColor: "#7dd3c0"
          });
        }
      });
    }
  }
  openPhotoModal(photo) {
    this.selectedPhoto = photo;
    this.showPhotoModal = true;
    this.loadFullImage(photo.id);
  }
  closePhotoModal() {
    this.showPhotoModal = false;
    this.selectedPhoto = null;
    this.fullImageData = null;
  }
  /**
   * Download/save the currently selected photo
   */
  async downloadPhoto() {
    if (!this.selectedPhoto || this.downloadingImage)
      return;
    const imageData = this.fullImageData || this.selectedPhoto.thumbnailData;
    if (!imageData) {
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.ERROR"),
        text: this.translate.instant("GALLERY.NO_IMAGE_DATA")
      });
      return;
    }
    this.downloadingImage = true;
    try {
      const fileName = this.selectedPhoto.title || this.selectedPhoto.fileName || this.imageDownloadService.generateFileName("activity_photo");
      if (this.imageDownloadService.isNativePlatform()) {
        const result = await this.imageDownloadService.shareImage(imageData, fileName, this.selectedPhoto.title || "Save Photo");
        if (!result.success) {
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("GALLERY.ERROR"),
            text: result.message
          });
        }
      } else {
        const result = await this.imageDownloadService.downloadImage(imageData, fileName);
        if (result.success) {
          showSuccessToast(this.translate.instant("GALLERY.SUCCESS"));
        } else {
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("GALLERY.ERROR"),
            text: result.message
          });
        }
      }
    } catch (error) {
      console.error("Error downloading photo:", error);
      import_sweetalert2.default.fire({
        icon: "error",
        title: this.translate.instant("GALLERY.ERROR"),
        text: error.message || this.translate.instant("GALLERY.DOWNLOAD_FAILED")
      });
    } finally {
      this.downloadingImage = false;
    }
  }
  loadFullImage(photoId) {
    this.loadingFullImage = true;
    this.http.get(`${ApiConfig.ENDPOINTS.PHOTOS}/${photoId}`).subscribe({
      next: (photo) => {
        if (photo.imageUrl) {
          this.fullImageData = ApiConfig.HUB_URL + photo.imageUrl;
        } else {
          this.fullImageData = photo.imageData || null;
        }
        this.loadingFullImage = false;
      },
      error: (error) => {
        console.error("Error loading full image:", error);
        this.loadingFullImage = false;
      }
    });
  }
  async deletePhoto(photo) {
    const result = await import_sweetalert2.default.fire({
      icon: "warning",
      title: this.translate.instant("COMMON.CONFIRM"),
      text: "Are you sure you want to delete this photo?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    });
    if (!result.isConfirmed)
      return;
    this.http.delete(`${ApiConfig.ENDPOINTS.PHOTOS}/${photo.id}`).subscribe({
      next: () => {
        const index = this.photos.findIndex((p) => p.id === photo.id);
        if (index > -1) {
          this.photos.splice(index, 1);
        }
        if (this.selectedPhoto?.id === photo.id) {
          this.closePhotoModal();
        }
      },
      error: (error) => {
        console.error("Error deleting photo:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("COMMON.ERROR"),
          text: "Failed to delete photo. Please try again.",
          confirmButtonColor: "#7dd3c0"
        });
      }
    });
  }
  formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
    if (seconds < 60)
      return "just now";
    if (seconds < 3600)
      return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400)
      return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800)
      return `${Math.floor(seconds / 86400)}d ago`;
    return date.toLocaleDateString();
  }
  /**
   * Get the thumbnail source URL for a photo
   * Handles both file-based URLs and Base64 data
   */
  getThumbnailSrc(photo) {
    if (photo.thumbnailUrl) {
      return ApiConfig.HUB_URL + photo.thumbnailUrl;
    }
    return photo.thumbnailData || "";
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("DAILY_REPORT.TITLE"), url: "/activities" },
      { label: this.activity?.activityType || this.translate.instant("DAILY_REPORT.ACTIVITY_DETAIL") }
    ];
  }
  setupTitleActions() {
    const actions = [
      {
        label: this.translate.instant("DAILY_REPORT.BACK_TO_DAILY_REPORT"),
        icon: "bi bi-arrow-left",
        class: "custom-btn-2 btn-cancel-2",
        action: () => this.goBack()
      }
    ];
    if (this.canEdit()) {
      actions.push({
        label: this.translate.instant("DAILY_REPORT.DELETE"),
        icon: "bi bi-trash",
        class: "custom-btn-2 btn-remove-2",
        action: () => this.deleteActivityAction()
      });
      actions.push({
        label: this.translate.instant("DAILY_REPORT.EDIT"),
        icon: "bi bi-pencil",
        class: "custom-btn-2 btn-edit-global-2",
        action: () => this.editActivity()
      });
    }
    this.titleActions = actions;
  }
  goBack() {
    this.router.navigate(["/activities"]);
  }
  editActivity() {
    this.router.navigate(["/activities"], { queryParams: { edit: this.activityId } });
  }
  async deleteActivityAction() {
    if (!this.activity?.id)
      return;
    const result = await import_sweetalert2.default.fire({
      icon: "warning",
      title: this.translate.instant("COMMON.CONFIRM"),
      text: "Are you sure you want to delete this activity?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: this.translate.instant("COMMON.DELETE"),
      cancelButtonText: this.translate.instant("COMMON.CANCEL")
    });
    if (result.isConfirmed) {
      this.dailyActivityService.deleteActivity(this.activity.id).subscribe({
        next: () => {
          this.router.navigate(["/activities"]);
        },
        error: (error) => {
          console.error("Error deleting activity:", error);
          import_sweetalert2.default.fire({
            icon: "error",
            title: this.translate.instant("COMMON.ERROR"),
            text: "Failed to delete activity. Please try again.",
            confirmButtonColor: "#7dd3c0"
          });
        }
      });
    }
  }
  canEdit() {
    return this.authService.isAdmin() || this.authService.isTeacher();
  }
  getActivityTemplate() {
    return this.activityTemplates.find((t) => t.type === this.activity?.activityType);
  }
  getActivityIcon() {
    const template = this.getActivityTemplate();
    return template?.icon || "bi-activity";
  }
  getActivityColor() {
    const template = this.getActivityTemplate();
    return template?.color || "secondary";
  }
  getActivityLabel() {
    const template = this.getActivityTemplate();
    return template?.label || this.activity?.activityType || "Activity";
  }
  getMoodEmoji() {
    if (!this.activity?.mood)
      return "";
    return this.moodEmojis[this.activity.mood] || "";
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  formatDuration(duration) {
    if (!duration)
      return "N/A";
    if (duration.includes(":")) {
      const parts = duration.split(":");
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      if (hours > 0 && minutes > 0) {
        return `${hours}h ${minutes}m`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? "s" : ""}`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? "s" : ""}`;
      }
    }
    return duration;
  }
  getChildFullName() {
    if (!this.activity?.child)
      return "Unknown Child";
    return `${this.activity.child.firstName} ${this.activity.child.lastName}`;
  }
  getActivityEmoji() {
    const emojiMap = {
      "Nap": "\u{1F634}",
      "Meal": "\u{1F37D}\uFE0F",
      "Snack": "\u{1F34E}",
      "Play": "\u{1F3AE}",
      "Diaper": "\u{1F476}",
      "Outdoor": "\u{1F333}",
      "Learning": "\u{1F4DA}",
      "Bathroom": "\u{1F6BD}"
    };
    return emojiMap[this.activity?.activityType || ""] || "\u{1F4CB}";
  }
  static \u0275fac = function ActivityDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActivityDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DailyActivityService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService), \u0275\u0275directiveInject(ImageDownloadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityDetail, selectors: [["app-activity-detail"]], viewQuery: function ActivityDetail_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cameraInput = _t.first);
    }
  }, decls: 5, vars: 5, consts: [["fileInput", ""], ["cameraInput", ""], ["class", "parent-activity-detail font-inter", 4, "ngIf"], ["class", "container-fluid mt-4", 4, "ngIf"], ["class", "container mt-4", 4, "ngIf"], ["class", "photo-modal-overlay", 3, "click", 4, "ngIf"], [1, "parent-activity-detail", "font-inter"], [3, "title"], ["class", "activity-detail-content", 4, "ngIf"], [1, "activity-detail-content"], [1, "activity-header-card"], [1, "activity-emoji"], [1, "activity-type"], [1, "activity-time"], [1, "activity-date"], ["class", "info-card", 4, "ngIf"], [1, "info-card"], [1, "section-title"], [1, "bi", "bi-chat-dots", "me-2"], [1, "new-comment-form-parent", "mb-3"], ["rows", "2", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel", "placeholder", "disabled"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-send me-1", 4, "ngIf"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-center py-3 text-muted", 4, "ngIf"], ["class", "comments-list-parent", 4, "ngIf"], [1, "child-info-row"], [1, "child-avatar", 3, "src", "alt"], [1, "child-details"], [1, "child-name"], [1, "info-value"], [1, "bi", "bi-clock", "me-2"], [1, "bi", "bi-cup-hot", "me-2"], [1, "mood-display"], [1, "mood-emoji"], [1, "mood-text"], [1, "notes-text"], [1, "info-value", "text-muted"], [1, "bi", "bi-calendar-check", "me-2"], [1, "bi", "bi-images", "me-2"], ["class", "photo-grid-parent", 4, "ngIf"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm"], [1, "photo-grid-parent"], ["class", "photo-item-parent", 3, "click", 4, "ngFor", "ngForOf"], [1, "photo-item-parent", 3, "click"], [3, "src", "alt"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-send", "me-1"], [1, "text-center", "py-3", "text-muted"], [1, "mb-0", "small"], [1, "comments-list-parent"], ["class", "comment-item-parent", 4, "ngFor", "ngForOf"], [1, "comment-item-parent"], [1, "comment-main-parent"], [1, "comment-avatar-parent", 3, "src", "alt"], [1, "comment-content-parent"], [1, "comment-header-parent"], [1, "comment-author-parent"], [1, "comment-time-parent"], [4, "ngIf"], ["class", "edit-form-parent", 4, "ngIf"], ["class", "reply-form-parent mt-2", 4, "ngIf"], ["class", "replies-parent", 4, "ngIf"], [1, "comment-text-parent"], [1, "comment-actions-parent"], [1, "btn-action-parent", 3, "click"], ["class", "btn-action-parent", 3, "click", 4, "ngIf"], ["class", "btn-action-parent text-danger", 3, "click", 4, "ngIf"], [1, "btn-action-parent", "text-danger", 3, "click"], [1, "edit-form-parent"], ["rows", "2", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "reply-form-parent", "mt-2"], ["rows", "2", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "btn", "btn-sm", "btn-primary", "me-1", 3, "click", "disabled"], [1, "replies-parent"], ["class", "reply-item-parent", 4, "ngFor", "ngForOf"], [1, "reply-item-parent"], [1, "reply-avatar-parent", 3, "src", "alt"], [1, "reply-content-parent"], [1, "container-fluid", "mt-4"], [3, "title", "breadcrumbs", "actions"], [1, "row"], [1, "col-xl-8"], [1, "card", "activity-card", "card-general", "shadow-sm", "mb-4"], [1, "activity-card-header", 3, "ngClass"], [1, "activity-icon-large"], [1, "bi", 3, "ngClass"], [1, "activity-title", "text-white", "mb-0"], [1, "activity-subtitle", "text-white-50", "mb-0"], [1, "card-body", "p-4"], ["class", "detail-section", 4, "ngIf"], [1, "row", "g-3", "mt-3"], ["class", "col-md-4", 4, "ngIf"], ["class", "card card-general shadow-sm mb-4", 4, "ngIf"], [1, "card", "card-general", "shadow-sm", "mb-4"], [1, "card-header", "py-3"], [1, "mb-0"], [1, "card-body"], [1, "new-comment-form", "mb-4"], ["class", "comments-list", 4, "ngIf"], [1, "col-xl-4"], [1, "card", "details-sidebar", "card-general", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "details-header", "py-3"], [1, "bi", "bi-info-circle", "me-2"], [1, "mb-3", "pb-3", "border-bottom"], [1, "text-muted", "d-block", "mb-1"], [1, "d-flex", "align-items-center"], [1, "badge", "me-2", 3, "ngClass"], [1, "bi", "me-1", 3, "ngClass"], [1, "bi", "bi-calendar3", "detail-icon", "me-2"], [1, "fw-bold"], [1, "text-muted"], ["class", "mb-3 pb-3 border-bottom", 4, "ngIf"], ["class", "card card-general action border-0 shadow-sm", 4, "ngIf"], [1, "detail-section"], [1, "detail-label"], [1, "bi", "bi-person-circle", "me-2"], [1, "rounded-circle", "me-3", 2, "width", "60px", "height", "60px", "object-fit", "cover", 3, "src", "alt"], [1, "bi", "bi-journal-text", "me-2"], [1, "notes-content"], [1, "col-md-4"], [1, "stat-card", "p-3", "rounded"], [1, "stat-icon-wrapper"], [1, "bi", "bi-clock"], [1, "stat-content"], [1, "bi", "bi-cup-hot"], [1, "stat-icon-wrapper", "mood-icon"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "d-flex", "gap-2", "photo-action-buttons"], [1, "btn", "take-photo", 3, "click", "disabled"], [1, "bi", "bi-camera", "me-1"], [1, "btn", "upload-photo", 3, "click", "disabled"], [1, "bi", "bi-upload", "me-1"], ["type", "file", "multiple", "", "accept", "image/*", 2, "display", "none", 3, "change"], ["type", "file", "accept", "image/*", "capture", "environment", 2, "display", "none", 3, "change"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-info d-flex align-items-center mb-3", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "photo-grid", 4, "ngIf"], [1, "text-center", "py-4"], [1, "ms-2"], [1, "alert", "alert-info", "d-flex", "align-items-center", "mb-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-camera", "fs-1", "d-block", "mb-2"], [1, "photo-grid"], ["class", "photo-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "photo-item", 3, "click"], [1, "photo-overlay"], [1, "bi", "bi-zoom-in"], [1, "bi", "bi-chat-square", "fs-3", "d-block", "mb-2"], [1, "comments-list"], ["class", "comment-item", 4, "ngFor", "ngForOf"], [1, "comment-item"], [1, "comment-main"], [1, "comment-avatar"], [1, "comment-content"], [1, "comment-header"], [1, "comment-author"], [1, "comment-time"], ["class", "comment-edited", 4, "ngIf"], ["class", "edit-comment-form", 4, "ngIf"], ["class", "reply-form mt-2", 4, "ngIf"], ["class", "comment-replies", 4, "ngIf"], [1, "comment-edited"], [1, "comment-text"], [1, "comment-actions"], [1, "btn", "btn-link", "btn-sm", 3, "click"], [1, "bi", "bi-reply", "me-1"], ["class", "btn btn-link btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-link btn-sm text-danger", 3, "click", 4, "ngIf"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-link", "btn-sm", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "edit-comment-form"], [1, "reply-form", "mt-2"], [1, "btn", "btn-sm", "btn-primary", "me-2", 3, "click", "disabled"], [1, "comment-replies"], ["class", "reply-item", 4, "ngFor", "ngForOf"], [1, "reply-item"], [1, "comment-avatar", "small"], [1, "bi", "bi-hourglass-split", "detail-icon", "me-2"], [1, "mood-badge", "me-2"], [1, "bi", "bi-clock-history", "detail-icon", "me-2"], [1, "card", "card-general", "action", "border-0", "shadow-sm"], [1, "bi", "bi-lightning", "me-2"], [1, "d-grid", "gap-2"], [1, "btn", "custom-btn-2", "btn-edit-global-2", "edit", 3, "click"], [1, "bi", "bi-pencil", "me-2"], [1, "btn", "custom-btn-2", "btn-remove-2", "remove", 3, "click"], [1, "bi", "bi-trash", "me-2"], [1, "btn", "custom-btn-2", "btn-cancel-2", "back", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], [1, "container", "mt-4"], [1, "text-center", "p-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "mt-2"], [1, "bi", "bi-exclamation-triangle", "fs-1", "text-warning"], [1, "mt-3"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-arrow-left", "me-1"], [1, "photo-modal-overlay", 3, "click"], [1, "photo-modal-content", 3, "click"], [1, "photo-modal-close", 3, "click"], [1, "bi", "bi-x-lg"], [1, "photo-modal-body"], ["class", "text-center py-5", 4, "ngIf"], ["class", "photo-modal-image", 3, "src", "alt", 4, "ngIf"], ["class", "photo-modal-footer", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-light"], [1, "text-light", "mt-2"], [1, "photo-modal-image", 3, "src", "alt"], [1, "photo-modal-footer"], [1, "photo-info"], ["class", "photo-title", 4, "ngIf"], [1, "photo-date"], ["class", "photo-uploader", 4, "ngIf"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click", "disabled"], [1, "me-1"], ["class", "btn btn-sm btn-outline-danger", 3, "click", 4, "ngIf"], [1, "photo-title"], [1, "photo-uploader"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"]], template: function ActivityDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ActivityDetail_div_0_Template, 4, 4, "div", 2)(1, ActivityDetail_div_1_Template, 70, 49, "div", 3)(2, ActivityDetail_div_2_Template, 9, 6, "div", 4)(3, ActivityDetail_div_3_Template, 13, 9, "div", 4)(4, ActivityDetail_div_4_Template, 8, 3, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isParent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isParent && !ctx.loading && ctx.activity);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.activity);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPhotoModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslateModule, TitlePage, ParentChildHeaderSimpleComponent, TranslatePipe], styles: ["\n\n.parent-activity-detail[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #B8E6F0 0%,\n      #D4F1E8 100%);\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   .page-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #202c4b;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .title-icons[_ngcontent-%COMP%]   .title-page[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #202c4b;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .activity-header-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 30px 20px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .activity-header-card[_ngcontent-%COMP%]   .activity-emoji[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .activity-header-card[_ngcontent-%COMP%]   .activity-type[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1F2937;\n  margin-bottom: 8px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .activity-header-card[_ngcontent-%COMP%]   .activity-time[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #1DBAB4;\n  margin-bottom: 4px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .activity-header-card[_ngcontent-%COMP%]   .activity-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .child-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .child-info-row[_ngcontent-%COMP%]   .child-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .child-info-row[_ngcontent-%COMP%]   .child-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1F2937;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .mood-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .mood-display[_ngcontent-%COMP%]   .mood-emoji[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .mood-display[_ngcontent-%COMP%]   .mood-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.parent-activity-detail[_ngcontent-%COMP%]   .activity-detail-content[_ngcontent-%COMP%]   .info-card[_ngcontent-%COMP%]   .notes-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4B5563;\n  line-height: 1.6;\n  margin: 0;\n}\n.activity-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%] {\n  padding: 40px 30px;\n  text-align: center;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n}\n.activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-icon-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-icon-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n}\n.activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n.activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.activity-card[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border-bottom: 1px solid #E5E7EB;\n}\n.activity-card[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.activity-card[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  margin-bottom: 12px;\n}\n.activity-card[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n}\n.activity-card[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .notes-content[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #4B5563;\n  line-height: 1.7;\n  background: #F9FAFB;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 0;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #E0F2FE;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1DBAB4;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper.mood-icon[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper.mood-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.details-sidebar[_ngcontent-%COMP%]   .details-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.details-sidebar[_ngcontent-%COMP%]   .details-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  font-size: 22px;\n  margin-right: 8px;\n}\n.details-sidebar[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background: #7cd1c0;\n  padding: 10px;\n  border-radius: 50px;\n  line-height: 1;\n}\n.details-sidebar[_ngcontent-%COMP%]   .mood-badge[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  background: #F3F4F6;\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s ease;\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]   .photo-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.photo-grid[_ngcontent-%COMP%]   .photo-item[_ngcontent-%COMP%]:hover   .photo-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-main[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-avatar.small[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1F2937;\n  font-size: 14px;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9CA3AF;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-edited[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9CA3AF;\n  font-style: italic;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-actions[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 0;\n  margin-right: 12px;\n  text-decoration: none;\n  color: #6B7280;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-actions[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n  color: #1DBAB4;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-actions[_ngcontent-%COMP%]   .btn-link.text-danger[_ngcontent-%COMP%]:hover {\n  color: #DC2626;\n}\n.comments-list[_ngcontent-%COMP%]   .comment-replies[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: 52px;\n  padding-left: 16px;\n  border-left: 2px solid #E5E7EB;\n}\n.comments-list[_ngcontent-%COMP%]   .reply-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.comments-list[_ngcontent-%COMP%]   .reply-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.comments-list[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%], \n.comments-list[_ngcontent-%COMP%]   .edit-comment-form[_ngcontent-%COMP%] {\n  background: #F9FAFB;\n  padding: 12px;\n  border-radius: 8px;\n}\n.photo-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.photo-modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.photo-modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: 0;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 8px;\n  z-index: 10;\n}\n.photo-modal-close[_ngcontent-%COMP%]:hover {\n  color: #1DBAB4;\n}\n.photo-modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.photo-modal-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.photo-modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  color: white;\n}\n.photo-modal-footer[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.photo-modal-footer[_ngcontent-%COMP%]   .photo-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.photo-modal-footer[_ngcontent-%COMP%]   .photo-date[_ngcontent-%COMP%], \n.photo-modal-footer[_ngcontent-%COMP%]   .photo-uploader[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #9CA3AF;\n}\n.photo-grid-parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.photo-grid-parent[_ngcontent-%COMP%]   .photo-item-parent[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-grid-parent[_ngcontent-%COMP%]   .photo-item-parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.new-comment-form-parent[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.reply-form-parent[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.edit-form-parent[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 12px;\n  resize: none;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-item-parent[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-item-parent[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-main-parent[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-avatar-parent[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-content-parent[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-header-parent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-author-parent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1F2937;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-time-parent[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9CA3AF;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-text-parent[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .comment-actions-parent[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .btn-action-parent[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 12px;\n  color: #6B7280;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .btn-action-parent[_ngcontent-%COMP%]:hover {\n  color: #1DBAB4;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .btn-action-parent.text-danger[_ngcontent-%COMP%]:hover {\n  color: #DC2626;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .replies-parent[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-left: 46px;\n  padding-left: 12px;\n  border-left: 2px solid #E5E7EB;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .reply-item-parent[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .reply-item-parent[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .reply-avatar-parent[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.comments-list-parent[_ngcontent-%COMP%]   .reply-content-parent[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n  }\n  .activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-icon-large[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-icon-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .activity-card[_ngcontent-%COMP%]   .activity-card-header[_ngcontent-%COMP%]   .activity-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n}\n.action[_ngcontent-%COMP%]   .custom-btn-2[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.card-general[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1DBAB4;\n  font-size: 22px;\n  margin-right: 8px;\n  line-height: 0;\n}\n.photo-action-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: white !important;\n}\n.photo-action-buttons[_ngcontent-%COMP%]   .take-photo[_ngcontent-%COMP%] {\n  background: #7dd3c0 !important;\n  border: none;\n  color: white;\n}\n.photo-action-buttons[_ngcontent-%COMP%]   .take-photo[_ngcontent-%COMP%]:hover {\n  background: #7dd3c0;\n  color: white;\n}\n.photo-action-buttons[_ngcontent-%COMP%]   .upload-photo[_ngcontent-%COMP%] {\n  background: #7db9ff !important;\n  border: none;\n  color: white;\n}\n.photo-action-buttons[_ngcontent-%COMP%]   .upload-photo[_ngcontent-%COMP%]:hover {\n  background: #7db9ff;\n  color: white;\n}\n/*# sourceMappingURL=activity-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityDetail, [{
    type: Component,
    args: [{ selector: "app-activity-detail", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule, TitlePage, ParentChildHeaderSimpleComponent], template: `<!-- Parent View -->\r
\r
<div *ngIf="isParent" class="parent-activity-detail font-inter">\r
  <app-parent-child-header-simple\r
    [title]="'DAILY_REPORT.ACTIVITY_DETAIL' | translate"\r
  >\r
    <!-- Ajoutez ici des badges ou autres \xE9l\xE9ments si besoin -->\r
  </app-parent-child-header-simple>\r
\r
  <div class="activity-detail-content" *ngIf="!loading && activity">\r
    <!-- Activity Header Card -->\r
    <div class="activity-header-card">\r
      <div class="activity-emoji">{{ getActivityEmoji() }}</div>\r
      <h2 class="activity-type">{{ getActivityLabel() }}</h2>\r
      <p class="activity-time">{{ formatTime(activity.activityTime) }}</p>\r
      <p class="activity-date">{{ formatDate(activity.activityTime) }}</p>\r
    </div>\r
\r
    <!-- Child Info -->\r
    <div class="info-card" *ngIf="activity.child">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.CHILD' | translate }}</h3>\r
      <div class="child-info-row">\r
        <img [src]="activity.child.profilePicture || 'assets/child.png'"\r
             [alt]="activity.child.firstName"\r
             class="child-avatar">\r
        <div class="child-details">\r
          <span class="child-name">{{ getChildFullName() }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Duration -->\r
    <div class="info-card" *ngIf="activity.duration">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.DURATION' | translate }}</h3>\r
      <div class="info-value">\r
        <i class="bi bi-clock me-2"></i>\r
        {{ formatDuration(activity.duration) }}\r
      </div>\r
    </div>\r
\r
    <!-- Food Item -->\r
    <div class="info-card" *ngIf="activity.foodItem">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.FOOD_DRINK' | translate }}</h3>\r
      <div class="info-value">\r
        <i class="bi bi-cup-hot me-2"></i>\r
        {{ activity.foodItem }}\r
      </div>\r
    </div>\r
\r
    <!-- Mood -->\r
    <div class="info-card" *ngIf="activity.mood">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.MOOD' | translate }}</h3>\r
      <div class="mood-display">\r
        <span class="mood-emoji">{{ getMoodEmoji() }}</span>\r
        <span class="mood-text">{{ 'DAILY_REPORT.MOODS.' + activity.mood.toUpperCase() | translate }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Notes -->\r
    <div class="info-card" *ngIf="activity.notes">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.NOTES' | translate }}</h3>\r
      <p class="notes-text">{{ activity.notes }}</p>\r
    </div>\r
\r
    <!-- Recorded Time -->\r
    <div class="info-card" *ngIf="activity.createdAt">\r
      <h3 class="section-title">{{ 'DAILY_REPORT.RECORDED' | translate }}</h3>\r
      <div class="info-value text-muted">\r
        <i class="bi bi-calendar-check me-2"></i>\r
        {{ formatDate(activity.createdAt) }} at {{ formatTime(activity.createdAt) }}\r
      </div>\r
    </div>\r
\r
    <!-- Gallery Section (Parent View - View Only) -->\r
    <div class="info-card" *ngIf="photos.length > 0">\r
      <h3 class="section-title"><i class="bi bi-images me-2"></i>{{ 'DAILY_REPORT.PHOTOS' | translate }}</h3>\r
      <div *ngIf="loadingPhotos" class="text-center py-3">\r
        <div class="spinner-border spinner-border-sm" role="status"></div>\r
      </div>\r
      <div *ngIf="!loadingPhotos" class="photo-grid-parent">\r
        <div class="photo-item-parent" *ngFor="let photo of photos" (click)="openPhotoModal(photo)">\r
          <img [src]="getThumbnailSrc(photo)" [alt]="photo.title || 'Activity photo'">\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Comments Section (Parent View) -->\r
    <div class="info-card">\r
      <h3 class="section-title"><i class="bi bi-chat-dots me-2"></i>{{ 'DAILY_REPORT.COMMENTS' | translate }} ({{ comments.length }})</h3>\r
\r
      <!-- New Comment Form -->\r
      <div class="new-comment-form-parent mb-3">\r
        <textarea\r
          class="form-control mb-2"\r
          [(ngModel)]="newCommentText"\r
          [placeholder]="'DAILY_REPORT.WRITE_COMMENT' | translate"\r
          rows="2"\r
          [disabled]="submittingComment">\r
        </textarea>\r
        <button\r
          class="btn btn-primary btn-sm"\r
          (click)="submitComment()"\r
          [disabled]="!newCommentText.trim() || submittingComment">\r
          <span *ngIf="submittingComment" class="spinner-border spinner-border-sm me-1"></span>\r
          <i class="bi bi-send me-1" *ngIf="!submittingComment"></i>\r
          {{ 'DAILY_REPORT.POST' | translate }}\r
        </button>\r
      </div>\r
\r
      <!-- Loading Comments -->\r
      <div *ngIf="loadingComments" class="text-center py-3">\r
        <div class="spinner-border spinner-border-sm" role="status"></div>\r
      </div>\r
\r
      <!-- Empty State -->\r
      <div *ngIf="!loadingComments && comments.length === 0" class="text-center py-3 text-muted">\r
        <p class="mb-0 small">{{ 'DAILY_REPORT.NO_COMMENTS_YET' | translate }}</p>\r
      </div>\r
\r
      <!-- Comments List -->\r
      <div class="comments-list-parent" *ngIf="!loadingComments && comments.length > 0">\r
        <div class="comment-item-parent" *ngFor="let comment of comments">\r
          <div class="comment-main-parent">\r
            <img [src]="comment.user.profilePicture || 'assets/default-avatar.svg'"\r
                 [alt]="comment.user.firstName"\r
                 class="comment-avatar-parent">\r
            <div class="comment-content-parent">\r
              <div class="comment-header-parent">\r
                <span class="comment-author-parent">{{ comment.user.firstName }} {{ comment.user.lastName }}</span>\r
                <span class="comment-time-parent">{{ formatTimeAgo(comment.createdAt) }}</span>\r
              </div>\r
\r
              <div *ngIf="editingComment?.id !== comment.id">\r
                <p class="comment-text-parent">{{ comment.content }}</p>\r
                <div class="comment-actions-parent">\r
                  <button class="btn-action-parent" (click)="startReply(comment)">{{ 'DAILY_REPORT.REPLY' | translate }}</button>\r
                  <button class="btn-action-parent" *ngIf="canEditComment(comment)" (click)="startEditComment(comment)">{{ 'DAILY_REPORT.EDIT' | translate }}</button>\r
                  <button class="btn-action-parent text-danger" *ngIf="canEditComment(comment)" (click)="deleteComment(comment)">{{ 'DAILY_REPORT.DELETE' | translate }}</button>\r
                </div>\r
              </div>\r
\r
              <!-- Edit Mode -->\r
              <div *ngIf="editingComment?.id === comment.id" class="edit-form-parent">\r
                <textarea class="form-control mb-2" [(ngModel)]="editCommentText" rows="2"></textarea>\r
                <button class="btn btn-sm btn-primary me-2" (click)="saveEditComment()">{{ 'DAILY_REPORT.SAVE' | translate }}</button>\r
                <button class="btn btn-sm btn-outline-secondary" (click)="cancelEditComment()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
              </div>\r
\r
              <!-- Reply Form -->\r
              <div *ngIf="replyingTo?.id === comment.id" class="reply-form-parent mt-2">\r
                <textarea class="form-control mb-2" [(ngModel)]="replyText" [placeholder]="'DAILY_REPORT.WRITE_REPLY' | translate" rows="2"></textarea>\r
                <button class="btn btn-sm btn-primary me-1" (click)="submitReply()" [disabled]="!replyText.trim() || submittingComment">{{ 'DAILY_REPORT.REPLY' | translate }}</button>\r
                <button class="btn btn-sm btn-outline-secondary" (click)="cancelReply()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Replies -->\r
          <div class="replies-parent" *ngIf="comment.replies && comment.replies.length > 0">\r
            <div class="reply-item-parent" *ngFor="let reply of comment.replies">\r
              <img [src]="reply.user.profilePicture || 'assets/default-avatar.svg'" [alt]="reply.user.firstName" class="reply-avatar-parent">\r
              <div class="reply-content-parent">\r
                <div class="comment-header-parent">\r
                  <span class="comment-author-parent">{{ reply.user.firstName }} {{ reply.user.lastName }}</span>\r
                  <span class="comment-time-parent">{{ formatTimeAgo(reply.createdAt) }}</span>\r
                </div>\r
\r
                <div *ngIf="editingComment?.id !== reply.id">\r
                  <p class="comment-text-parent">{{ reply.content }}</p>\r
                  <div class="comment-actions-parent">\r
                    <button class="btn-action-parent" *ngIf="canEditComment(reply)" (click)="startEditComment(reply)">{{ 'DAILY_REPORT.EDIT' | translate }}</button>\r
                    <button class="btn-action-parent text-danger" *ngIf="canEditComment(reply)" (click)="deleteComment(reply)">{{ 'DAILY_REPORT.DELETE' | translate }}</button>\r
                  </div>\r
                </div>\r
\r
                <!-- Edit Mode for Reply -->\r
                <div *ngIf="editingComment?.id === reply.id" class="edit-form-parent">\r
                  <textarea class="form-control mb-2" [(ngModel)]="editCommentText" rows="2"></textarea>\r
                  <button class="btn btn-sm btn-primary me-2" (click)="saveEditComment()">{{ 'DAILY_REPORT.SAVE' | translate }}</button>\r
                  <button class="btn btn-sm btn-outline-secondary" (click)="cancelEditComment()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Admin/Teacher View -->\r
<div class="container-fluid mt-4" *ngIf="!isParent && !loading && activity">\r
  <app-title-page\r
    [title]="getActivityLabel()"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <div class="row">\r
    <!-- Main Content -->\r
    <div class="col-xl-8">\r
      <!-- Activity Main Card -->\r
      <div class="card activity-card card-general shadow-sm mb-4">\r
        <div class="activity-card-header" [ngClass]="'bg-' + getActivityColor()">\r
          <div class="activity-icon-large">\r
            <i class="bi" [ngClass]="getActivityIcon()"></i>\r
          </div>\r
          <h2 class="activity-title text-white mb-0">{{ getActivityLabel() }}</h2>\r
          <p class="activity-subtitle text-white-50 mb-0">{{ formatDate(activity.activityTime) }}</p>\r
        </div>\r
\r
        <div class="card-body p-4">\r
          <!-- Child Info -->\r
          <div class="detail-section" *ngIf="activity.child">\r
            <h5 class="detail-label">\r
              <i class="bi bi-person-circle me-2"></i>{{ 'DAILY_REPORT.CHILD' | translate }}\r
            </h5>\r
            <div class="d-flex align-items-center">\r
              <img [src]="activity.child.profilePicture || 'assets/child.png'"\r
                   [alt]="activity.child.firstName"\r
                   class="rounded-circle me-3"\r
                   style="width: 60px; height: 60px; object-fit: cover;">\r
              <div>\r
                <h5 class="mb-0">{{ getChildFullName() }}</h5>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Notes Section -->\r
          <div class="detail-section" *ngIf="activity.notes">\r
            <h5 class="detail-label">\r
              <i class="bi bi-journal-text me-2"></i>{{ 'DAILY_REPORT.NOTES' | translate }}\r
            </h5>\r
            <p class="notes-content">{{ activity.notes }}</p>\r
          </div>\r
\r
          <!-- Stats Grid -->\r
          <div class="row g-3 mt-3">\r
            <div class="col-md-4" *ngIf="activity.duration">\r
              <div class="stat-card p-3 rounded">\r
                <div class="stat-icon-wrapper">\r
                  <i class="bi bi-clock"></i>\r
                </div>\r
                <div class="stat-content">\r
                  <small class="text-muted">{{ 'DAILY_REPORT.DURATION' | translate }}</small>\r
                  <h5 class="mb-0">{{ formatDuration(activity.duration) }}</h5>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-4" *ngIf="activity.foodItem">\r
              <div class="stat-card p-3 rounded">\r
                <div class="stat-icon-wrapper">\r
                  <i class="bi bi-cup-hot"></i>\r
                </div>\r
                <div class="stat-content">\r
                  <small class="text-muted">{{ 'DAILY_REPORT.FOOD_DRINK' | translate }}</small>\r
                  <h5 class="mb-0">{{ activity.foodItem }}</h5>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-4" *ngIf="activity.mood">\r
              <div class="stat-card p-3 rounded">\r
                <div class="stat-icon-wrapper mood-icon">\r
                  <span>{{ getMoodEmoji() }}</span>\r
                </div>\r
                <div class="stat-content">\r
                  <small class="text-muted">{{ 'DAILY_REPORT.MOOD' | translate }}</small>\r
                  <h5 class="mb-0">{{ 'DAILY_REPORT.MOODS.' + activity.mood.toUpperCase() | translate }}</h5>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Gallery Section (Teacher/Admin only) -->\r
      <div class="card card-general shadow-sm mb-4" *ngIf="canEdit()">\r
        <div class="card-header d-flex justify-content-between align-items-center py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-images me-2"></i>{{ 'DAILY_REPORT.ACTIVITY_GALLERY' | translate }}\r
          </h5>\r
          <div class="d-flex gap-2 photo-action-buttons">\r
            <button class="btn take-photo" (click)="triggerCameraCapture()" [disabled]="uploadingPhoto">\r
              <i class="bi bi-camera me-1"></i>{{ 'DAILY_REPORT.TAKE_PHOTO' | translate }}\r
            </button>\r
            <button class="btn upload-photo" (click)="triggerFileUpload()" [disabled]="uploadingPhoto">\r
              <i class="bi bi-upload me-1"></i>{{ 'DAILY_REPORT.UPLOAD' | translate }}\r
            </button>\r
          </div>\r
          <input type="file" #fileInput (change)="onFilesSelected($event)" multiple accept="image/*" style="display: none;">\r
          <input type="file" #cameraInput (change)="onCameraCapture($event)" accept="image/*" capture="environment" style="display: none;">\r
        </div>\r
        <div class="card-body">\r
          <!-- Loading Photos -->\r
          <div *ngIf="loadingPhotos" class="text-center py-4">\r
            <div class="spinner-border spinner-border-sm" role="status"></div>\r
            <span class="ms-2">{{ 'DAILY_REPORT.LOADING_PHOTOS' | translate }}</span>\r
          </div>\r
\r
          <!-- Uploading Indicator -->\r
          <div *ngIf="uploadingPhoto" class="alert alert-info d-flex align-items-center mb-3">\r
            <div class="spinner-border spinner-border-sm me-2" role="status"></div>\r
            {{ 'DAILY_REPORT.UPLOADING_PHOTOS' | translate }}\r
          </div>\r
\r
          <!-- Empty State -->\r
          <div *ngIf="!loadingPhotos && photos.length === 0" class="text-center py-4 text-muted">\r
            <i class="bi bi-camera fs-1 d-block mb-2"></i>\r
            <p class="mb-0">{{ 'DAILY_REPORT.NO_PHOTOS_YET' | translate }}</p>\r
          </div>\r
\r
          <!-- Photo Grid -->\r
          <div *ngIf="!loadingPhotos && photos.length > 0" class="photo-grid">\r
            <div class="photo-item" *ngFor="let photo of photos" (click)="openPhotoModal(photo)">\r
              <img [src]="getThumbnailSrc(photo)" [alt]="photo.title || 'Activity photo'">\r
              <div class="photo-overlay">\r
                <i class="bi bi-zoom-in"></i>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Comments Section -->\r
      <div class="card card-general shadow-sm mb-4">\r
        <div class="card-header py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-chat-dots me-2"></i>{{ 'DAILY_REPORT.COMMENTS' | translate }} ({{ comments.length }})\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <!-- New Comment Form -->\r
          <div class="new-comment-form mb-4">\r
            <textarea\r
              class="form-control mb-2"\r
              [(ngModel)]="newCommentText"\r
              [placeholder]="'DAILY_REPORT.WRITE_COMMENT' | translate"\r
              rows="2"\r
              [disabled]="submittingComment">\r
            </textarea>\r
            <button\r
              class="btn btn-primary btn-sm"\r
              (click)="submitComment()"\r
              [disabled]="!newCommentText.trim() || submittingComment">\r
              <span *ngIf="submittingComment" class="spinner-border spinner-border-sm me-1"></span>\r
              <i class="bi bi-send me-1" *ngIf="!submittingComment"></i>\r
              {{ 'DAILY_REPORT.POST_COMMENT' | translate }}\r
            </button>\r
          </div>\r
\r
          <!-- Loading Comments -->\r
          <div *ngIf="loadingComments" class="text-center py-3">\r
            <div class="spinner-border spinner-border-sm" role="status"></div>\r
            <span class="ms-2">{{ 'DAILY_REPORT.LOADING_COMMENTS' | translate }}</span>\r
          </div>\r
\r
          <!-- Empty State -->\r
          <div *ngIf="!loadingComments && comments.length === 0" class="text-center py-3 text-muted">\r
            <i class="bi bi-chat-square fs-3 d-block mb-2"></i>\r
            <p class="mb-0">{{ 'DAILY_REPORT.NO_COMMENTS_BE_FIRST' | translate }}</p>\r
          </div>\r
\r
          <!-- Comments List -->\r
          <div class="comments-list" *ngIf="!loadingComments && comments.length > 0">\r
            <div class="comment-item" *ngFor="let comment of comments">\r
              <div class="comment-main">\r
                <div class="comment-avatar">\r
                  <img [src]="comment.user.profilePicture || 'assets/default-avatar.svg'" [alt]="comment.user.firstName">\r
                </div>\r
                <div class="comment-content">\r
                  <div class="comment-header">\r
                    <span class="comment-author">{{ comment.user.firstName }} {{ comment.user.lastName }}</span>\r
                    <span class="comment-time">{{ formatTimeAgo(comment.createdAt) }}</span>\r
                    <span class="comment-edited" *ngIf="comment.updatedAt">({{ 'DAILY_REPORT.EDITED' | translate }})</span>\r
                  </div>\r
\r
                  <!-- Display or Edit Mode -->\r
                  <div *ngIf="editingComment?.id !== comment.id">\r
                    <p class="comment-text">{{ comment.content }}</p>\r
                    <div class="comment-actions">\r
                      <button class="btn btn-link btn-sm" (click)="startReply(comment)">\r
                        <i class="bi bi-reply me-1"></i>{{ 'DAILY_REPORT.REPLY' | translate }}\r
                      </button>\r
                      <button class="btn btn-link btn-sm" *ngIf="canEditComment(comment)" (click)="startEditComment(comment)">\r
                        <i class="bi bi-pencil me-1"></i>{{ 'DAILY_REPORT.EDIT' | translate }}\r
                      </button>\r
                      <button class="btn btn-link btn-sm text-danger" *ngIf="canEditComment(comment)" (click)="deleteComment(comment)">\r
                        <i class="bi bi-trash me-1"></i>{{ 'DAILY_REPORT.DELETE' | translate }}\r
                      </button>\r
                    </div>\r
                  </div>\r
\r
                  <!-- Edit Mode -->\r
                  <div *ngIf="editingComment?.id === comment.id" class="edit-comment-form">\r
                    <textarea class="form-control mb-2" [(ngModel)]="editCommentText" rows="2"></textarea>\r
                    <button class="btn btn-sm btn-primary me-2" (click)="saveEditComment()">{{ 'DAILY_REPORT.SAVE' | translate }}</button>\r
                    <button class="btn btn-sm btn-outline-secondary" (click)="cancelEditComment()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
                  </div>\r
\r
                  <!-- Reply Form -->\r
                  <div *ngIf="replyingTo?.id === comment.id" class="reply-form mt-2">\r
                    <textarea\r
                      class="form-control mb-2"\r
                      [(ngModel)]="replyText"\r
                      [placeholder]="'DAILY_REPORT.WRITE_REPLY' | translate"\r
                      rows="2">\r
                    </textarea>\r
                    <button class="btn btn-sm btn-primary me-2" (click)="submitReply()" [disabled]="!replyText.trim() || submittingComment">\r
                      <span *ngIf="submittingComment" class="spinner-border spinner-border-sm me-1"></span>\r
                      {{ 'DAILY_REPORT.REPLY' | translate }}\r
                    </button>\r
                    <button class="btn btn-sm btn-outline-secondary" (click)="cancelReply()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Replies -->\r
              <div class="comment-replies" *ngIf="comment.replies && comment.replies.length > 0">\r
                <div class="reply-item" *ngFor="let reply of comment.replies">\r
                  <div class="comment-avatar small">\r
                    <img [src]="reply.user.profilePicture || 'assets/default-avatar.svg'" [alt]="reply.user.firstName">\r
                  </div>\r
                  <div class="comment-content">\r
                    <div class="comment-header">\r
                      <span class="comment-author">{{ reply.user.firstName }} {{ reply.user.lastName }}</span>\r
                      <span class="comment-time">{{ formatTimeAgo(reply.createdAt) }}</span>\r
                      <span class="comment-edited" *ngIf="reply.updatedAt">({{ 'DAILY_REPORT.EDITED' | translate }})</span>\r
                    </div>\r
\r
                    <div *ngIf="editingComment?.id !== reply.id">\r
                      <p class="comment-text">{{ reply.content }}</p>\r
                      <div class="comment-actions">\r
                        <button class="btn btn-link btn-sm" *ngIf="canEditComment(reply)" (click)="startEditComment(reply)">\r
                          <i class="bi bi-pencil me-1"></i>{{ 'DAILY_REPORT.EDIT' | translate }}\r
                        </button>\r
                        <button class="btn btn-link btn-sm text-danger" *ngIf="canEditComment(reply)" (click)="deleteComment(reply)">\r
                          <i class="bi bi-trash me-1"></i>{{ 'DAILY_REPORT.DELETE' | translate }}\r
                        </button>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Edit Mode for Reply -->\r
                    <div *ngIf="editingComment?.id === reply.id" class="edit-comment-form">\r
                      <textarea class="form-control mb-2" [(ngModel)]="editCommentText" rows="2"></textarea>\r
                      <button class="btn btn-sm btn-primary me-2" (click)="saveEditComment()">{{ 'DAILY_REPORT.SAVE' | translate }}</button>\r
                      <button class="btn btn-sm btn-outline-secondary" (click)="cancelEditComment()">{{ 'DAILY_REPORT.CANCEL' | translate }}</button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Sidebar -->\r
    <div class="col-xl-4">\r
      <!-- Activity Details Card -->\r
      <div class="card details-sidebar card-general border-0 shadow-sm mb-4">\r
        <div class="card-header details-header py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-info-circle me-2"></i>{{ 'DAILY_REPORT.ACTIVITY_DETAILS' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="mb-3 pb-3 border-bottom">\r
            <small class="text-muted d-block mb-1">{{ 'DAILY_REPORT.ACTIVITY_TYPE' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <span class="badge me-2" [ngClass]="'bg-' + getActivityColor()">\r
                <i class="bi me-1" [ngClass]="getActivityIcon()"></i>\r
                {{ activity.activityType }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3 pb-3 border-bottom">\r
            <small class="text-muted d-block mb-1">{{ 'DAILY_REPORT.DATE_TIME' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-calendar3 detail-icon me-2"></i>\r
              <div>\r
                <div class="fw-bold">{{ formatDate(activity.activityTime) }}</div>\r
                <small class="text-muted">{{ formatTime(activity.activityTime) }}</small>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3 pb-3 border-bottom" *ngIf="activity.duration">\r
            <small class="text-muted d-block mb-1">{{ 'DAILY_REPORT.DURATION' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-hourglass-split detail-icon me-2"></i>\r
              <div class="fw-bold">{{ formatDuration(activity.duration) }}</div>\r
            </div>\r
          </div>\r
\r
          <div class="mb-3 pb-3 border-bottom" *ngIf="activity.mood">\r
            <small class="text-muted d-block mb-1">{{ 'DAILY_REPORT.CHILDS_MOOD' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <span class="mood-badge me-2">{{ getMoodEmoji() }}</span>\r
              <div class="fw-bold">{{ 'DAILY_REPORT.MOODS.' + activity.mood.toUpperCase() | translate }}</div>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="activity.createdAt">\r
            <small class="text-muted d-block mb-1">{{ 'DAILY_REPORT.RECORDED' | translate }}</small>\r
            <div class="d-flex align-items-center">\r
              <i class="bi bi-clock-history detail-icon me-2"></i>\r
              <small>{{ formatDate(activity.createdAt) }}</small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Quick Actions Card -->\r
      <div class="card card-general action border-0 shadow-sm" *ngIf="canEdit()">\r
        <div class="card-header py-3">\r
          <h5 class="mb-0">\r
            <i class="bi bi-lightning me-2"></i>{{ 'DAILY_REPORT.QUICK_ACTIONS' | translate }}\r
          </h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="d-grid gap-2">\r
            <button class="btn custom-btn-2 btn-edit-global-2 edit" (click)="editActivity()">\r
              <i class="bi bi-pencil me-2"></i>{{ 'DAILY_REPORT.EDIT_ACTIVITY' | translate }}\r
            </button>\r
            <button class="btn custom-btn-2 btn-remove-2 remove" (click)="deleteActivityAction()">\r
              <i class="bi bi-trash me-2"></i>{{ 'DAILY_REPORT.DELETE_ACTIVITY' | translate }}\r
            </button>\r
            <button class="btn custom-btn-2 btn-cancel-2 back" (click)="goBack()">\r
              <i class="bi bi-arrow-left me-2"></i>{{ 'DAILY_REPORT.BACK_TO_REPORT' | translate }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Loading State -->\r
<div class="container mt-4" *ngIf="loading">\r
  <div class="text-center p-4">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'DAILY_REPORT.LOADING' | translate }}</span>\r
    </div>\r
    <p class="mt-2">{{ 'DAILY_REPORT.LOADING_ACTIVITY' | translate }}</p>\r
  </div>\r
</div>\r
\r
<!-- Not Found State -->\r
<div class="container mt-4" *ngIf="!loading && !activity">\r
  <div class="text-center p-4">\r
    <i class="bi bi-exclamation-triangle fs-1 text-warning"></i>\r
    <h4 class="mt-3">{{ 'DAILY_REPORT.ACTIVITY_NOT_FOUND' | translate }}</h4>\r
    <p class="text-muted">{{ 'DAILY_REPORT.ACTIVITY_NOT_FOUND_TEXT' | translate }}</p>\r
    <button class="btn btn-primary" (click)="goBack()">\r
      <i class="bi bi-arrow-left me-1"></i> {{ 'DAILY_REPORT.BACK_TO_DAILY_REPORT' | translate }}\r
    </button>\r
  </div>\r
</div>\r
\r
<!-- Photo Modal -->\r
<div class="photo-modal-overlay" *ngIf="showPhotoModal" (click)="closePhotoModal()">\r
  <div class="photo-modal-content" (click)="$event.stopPropagation()">\r
    <button class="photo-modal-close" (click)="closePhotoModal()">\r
      <i class="bi bi-x-lg"></i>\r
    </button>\r
\r
    <div class="photo-modal-body">\r
      <!-- Loading State -->\r
      <div *ngIf="loadingFullImage" class="text-center py-5">\r
        <div class="spinner-border text-light" role="status"></div>\r
        <p class="text-light mt-2">Loading image...</p>\r
      </div>\r
\r
      <!-- Full Image -->\r
      <img *ngIf="!loadingFullImage && fullImageData"\r
           [src]="fullImageData"\r
           [alt]="selectedPhoto?.title || 'Activity photo'"\r
           class="photo-modal-image">\r
    </div>\r
\r
    <div class="photo-modal-footer" *ngIf="selectedPhoto">\r
      <div class="photo-info">\r
        <span class="photo-title" *ngIf="selectedPhoto.title">{{ selectedPhoto.title }}</span>\r
        <span class="photo-date">{{ formatTimeAgo(selectedPhoto.createdAt) }}</span>\r
        <span class="photo-uploader" *ngIf="selectedPhoto.uploadedByName">by {{ selectedPhoto.uploadedByName }}</span>\r
      </div>\r
      <div class="d-flex gap-2">\r
        <!-- Download/Save Button -->\r
        <button class="btn btn-sm btn-outline-success" (click)="downloadPhoto()" [disabled]="downloadingImage || loadingFullImage">\r
          <i class="bi" [class.bi-download]="!downloadingImage" [class.bi-hourglass-split]="downloadingImage" class="me-1"></i>\r
          {{ downloadingImage ? ('GALLERY.SAVING' | translate) : ('GALLERY.SAVE' | translate) }}\r
        </button>\r
        <!-- Delete Button (Admin/Teacher only) -->\r
        <button class="btn btn-sm btn-outline-danger" *ngIf="canEdit()" (click)="deletePhoto(selectedPhoto)">\r
          <i class="bi bi-trash me-1"></i>{{ 'DAILY_REPORT.DELETE' | translate }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/daily-activities/activity-detail/activity-detail.scss */\n.parent-activity-detail .header-info {\n  padding: 16px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #B8E6F0 0%,\n      #D4F1E8 100%);\n}\n.parent-activity-detail .header-info .title-icons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n.parent-activity-detail .header-info .title-icons .page-back {\n  width: 40px;\n  height: 40px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.parent-activity-detail .header-info .title-icons .page-back i {\n  font-size: 20px;\n  color: #202c4b;\n}\n.parent-activity-detail .header-info .title-icons .title-page {\n  font-size: 18px;\n  font-weight: 600;\n  color: #202c4b;\n}\n.parent-activity-detail .activity-detail-content {\n  padding: 20px;\n}\n.parent-activity-detail .activity-detail-content .activity-header-card {\n  background: white;\n  border-radius: 20px;\n  padding: 30px 20px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n.parent-activity-detail .activity-detail-content .activity-header-card .activity-emoji {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.parent-activity-detail .activity-detail-content .activity-header-card .activity-type {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1F2937;\n  margin-bottom: 8px;\n}\n.parent-activity-detail .activity-detail-content .activity-header-card .activity-time {\n  font-size: 32px;\n  font-weight: 600;\n  color: #1DBAB4;\n  margin-bottom: 4px;\n}\n.parent-activity-detail .activity-detail-content .activity-header-card .activity-date {\n  font-size: 14px;\n  color: #6B7280;\n  margin: 0;\n}\n.parent-activity-detail .activity-detail-content .info-card {\n  background: white;\n  border-radius: 16px;\n  padding: 16px 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  margin-bottom: 12px;\n}\n.parent-activity-detail .activity-detail-content .info-card .section-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.parent-activity-detail .activity-detail-content .info-card .child-info-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.parent-activity-detail .activity-detail-content .info-card .child-info-row .child-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.parent-activity-detail .activity-detail-content .info-card .child-info-row .child-name {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.parent-activity-detail .activity-detail-content .info-card .info-value {\n  font-size: 16px;\n  font-weight: 500;\n  color: #1F2937;\n}\n.parent-activity-detail .activity-detail-content .info-card .info-value i {\n  color: #1DBAB4;\n}\n.parent-activity-detail .activity-detail-content .info-card .mood-display {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.parent-activity-detail .activity-detail-content .info-card .mood-display .mood-emoji {\n  font-size: 32px;\n}\n.parent-activity-detail .activity-detail-content .info-card .mood-display .mood-text {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.parent-activity-detail .activity-detail-content .info-card .notes-text {\n  font-size: 15px;\n  color: #4B5563;\n  line-height: 1.6;\n  margin: 0;\n}\n.activity-card {\n  overflow: hidden;\n}\n.activity-card .activity-card-header {\n  padding: 40px 30px;\n  text-align: center;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #7db9ff 0%,\n      #7dd3c0 100%) !important;\n}\n.activity-card .activity-card-header .activity-icon-large {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.activity-card .activity-card-header .activity-icon-large i {\n  font-size: 36px;\n  color: white;\n}\n.activity-card .activity-card-header .activity-title {\n  font-size: 28px;\n  font-weight: 700;\n}\n.activity-card .activity-card-header .activity-subtitle {\n  font-size: 16px;\n}\n.activity-card .detail-section {\n  padding: 20px 0;\n  border-bottom: 1px solid #E5E7EB;\n}\n.activity-card .detail-section:last-child {\n  border-bottom: none;\n}\n.activity-card .detail-section .detail-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #6B7280;\n  margin-bottom: 12px;\n}\n.activity-card .detail-section .detail-label i {\n  color: #1DBAB4;\n}\n.activity-card .detail-section .notes-content {\n  font-size: 15px;\n  color: #4B5563;\n  line-height: 1.7;\n  background: #F9FAFB;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 0;\n}\n.stat-card {\n  background: #F9FAFB;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-card .stat-icon-wrapper {\n  width: 48px;\n  height: 48px;\n  background: #E0F2FE;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card .stat-icon-wrapper i {\n  font-size: 20px;\n  color: #1DBAB4;\n}\n.stat-card .stat-icon-wrapper.mood-icon {\n  background: #FEF3C7;\n}\n.stat-card .stat-icon-wrapper.mood-icon span {\n  font-size: 24px;\n}\n.stat-card .stat-content small {\n  font-size: 12px;\n}\n.stat-card .stat-content h5 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1F2937;\n}\n.details-sidebar .details-header h5 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.details-sidebar .details-header i {\n  color: #1DBAB4;\n  font-size: 22px;\n  margin-right: 8px;\n}\n.details-sidebar .detail-icon {\n  color: #ffffff;\n  background: #7cd1c0;\n  padding: 10px;\n  border-radius: 50px;\n  line-height: 1;\n}\n.details-sidebar .mood-badge {\n  font-size: 24px;\n}\n.photo-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.photo-grid .photo-item {\n  position: relative;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  background: #F3F4F6;\n}\n.photo-grid .photo-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s ease;\n}\n.photo-grid .photo-item .photo-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.photo-grid .photo-item .photo-overlay i {\n  color: white;\n  font-size: 24px;\n}\n.photo-grid .photo-item:hover img {\n  transform: scale(1.05);\n}\n.photo-grid .photo-item:hover .photo-overlay {\n  opacity: 1;\n}\n.comments-list .comment-item {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.comments-list .comment-item:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.comments-list .comment-main {\n  display: flex;\n  gap: 12px;\n}\n.comments-list .comment-avatar {\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n}\n.comments-list .comment-avatar img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.comments-list .comment-avatar.small {\n  width: 32px;\n  height: 32px;\n}\n.comments-list .comment-content {\n  flex: 1;\n  min-width: 0;\n}\n.comments-list .comment-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n}\n.comments-list .comment-author {\n  font-weight: 600;\n  color: #1F2937;\n  font-size: 14px;\n}\n.comments-list .comment-time {\n  font-size: 12px;\n  color: #9CA3AF;\n}\n.comments-list .comment-edited {\n  font-size: 11px;\n  color: #9CA3AF;\n  font-style: italic;\n}\n.comments-list .comment-text {\n  margin: 0;\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.comments-list .comment-actions {\n  margin-top: 8px;\n}\n.comments-list .comment-actions .btn-link {\n  font-size: 12px;\n  padding: 0;\n  margin-right: 12px;\n  text-decoration: none;\n  color: #6B7280;\n}\n.comments-list .comment-actions .btn-link:hover {\n  color: #1DBAB4;\n}\n.comments-list .comment-actions .btn-link.text-danger:hover {\n  color: #DC2626;\n}\n.comments-list .comment-replies {\n  margin-top: 16px;\n  margin-left: 52px;\n  padding-left: 16px;\n  border-left: 2px solid #E5E7EB;\n}\n.comments-list .reply-item {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.comments-list .reply-item:last-child {\n  margin-bottom: 0;\n}\n.comments-list .reply-form,\n.comments-list .edit-comment-form {\n  background: #F9FAFB;\n  padding: 12px;\n  border-radius: 8px;\n}\n.photo-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.photo-modal-content {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n.photo-modal-close {\n  position: absolute;\n  top: -40px;\n  right: 0;\n  background: transparent;\n  border: none;\n  color: white;\n  font-size: 24px;\n  cursor: pointer;\n  padding: 8px;\n  z-index: 10;\n}\n.photo-modal-close:hover {\n  color: #1DBAB4;\n}\n.photo-modal-body {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.photo-modal-image {\n  max-width: 100%;\n  max-height: 80vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.photo-modal-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 0;\n  color: white;\n}\n.photo-modal-footer .photo-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.photo-modal-footer .photo-title {\n  font-weight: 600;\n  font-size: 16px;\n}\n.photo-modal-footer .photo-date,\n.photo-modal-footer .photo-uploader {\n  font-size: 13px;\n  color: #9CA3AF;\n}\n.photo-grid-parent {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.photo-grid-parent .photo-item-parent {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.photo-grid-parent .photo-item-parent img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.new-comment-form-parent textarea,\n.reply-form-parent textarea,\n.edit-form-parent textarea {\n  font-size: 14px;\n  border-radius: 12px;\n  resize: none;\n}\n.comments-list-parent .comment-item-parent {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #E5E7EB;\n}\n.comments-list-parent .comment-item-parent:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.comments-list-parent .comment-main-parent {\n  display: flex;\n  gap: 10px;\n}\n.comments-list-parent .comment-avatar-parent {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.comments-list-parent .comment-content-parent {\n  flex: 1;\n  min-width: 0;\n}\n.comments-list-parent .comment-header-parent {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.comments-list-parent .comment-author-parent {\n  font-weight: 600;\n  font-size: 13px;\n  color: #1F2937;\n}\n.comments-list-parent .comment-time-parent {\n  font-size: 11px;\n  color: #9CA3AF;\n}\n.comments-list-parent .comment-text-parent {\n  margin: 0;\n  font-size: 14px;\n  color: #4B5563;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.comments-list-parent .comment-actions-parent {\n  margin-top: 6px;\n}\n.comments-list-parent .btn-action-parent {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 12px;\n  color: #6B7280;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.comments-list-parent .btn-action-parent:hover {\n  color: #1DBAB4;\n}\n.comments-list-parent .btn-action-parent.text-danger:hover {\n  color: #DC2626;\n}\n.comments-list-parent .replies-parent {\n  margin-top: 12px;\n  margin-left: 46px;\n  padding-left: 12px;\n  border-left: 2px solid #E5E7EB;\n}\n.comments-list-parent .reply-item-parent {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.comments-list-parent .reply-item-parent:last-child {\n  margin-bottom: 0;\n}\n.comments-list-parent .reply-avatar-parent {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.comments-list-parent .reply-content-parent {\n  flex: 1;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .activity-card .activity-card-header {\n    padding: 30px 20px;\n  }\n  .activity-card .activity-card-header .activity-icon-large {\n    width: 60px;\n    height: 60px;\n  }\n  .activity-card .activity-card-header .activity-icon-large i {\n    font-size: 28px;\n  }\n  .activity-card .activity-card-header .activity-title {\n    font-size: 22px;\n  }\n  .stat-card {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n}\n.action .custom-btn-2 {\n  min-width: 100%;\n}\n.card-general .card-header i {\n  color: #1DBAB4;\n  font-size: 22px;\n  margin-right: 8px;\n  line-height: 0;\n}\n.photo-action-buttons i {\n  font-size: 16px !important;\n  color: white !important;\n}\n.photo-action-buttons .take-photo {\n  background: #7dd3c0 !important;\n  border: none;\n  color: white;\n}\n.photo-action-buttons .take-photo:hover {\n  background: #7dd3c0;\n  color: white;\n}\n.photo-action-buttons .upload-photo {\n  background: #7db9ff !important;\n  border: none;\n  color: white;\n}\n.photo-action-buttons .upload-photo:hover {\n  background: #7db9ff;\n  color: white;\n}\n/*# sourceMappingURL=activity-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: DailyActivityService }, { type: AuthService }, { type: Location }, { type: HttpClient }, { type: TranslateService }, { type: PageTitleService }, { type: ImageDownloadService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], cameraInput: [{
    type: ViewChild,
    args: ["cameraInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityDetail, { className: "ActivityDetail", filePath: "src/app/features/daily-activities/activity-detail/activity-detail.ts", lineNumber: 55 });
})();
export {
  ActivityDetail
};
//# sourceMappingURL=chunk-VHER7ZMA.js.map
