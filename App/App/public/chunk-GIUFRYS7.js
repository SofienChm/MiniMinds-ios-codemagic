import {
  ClassesService
} from "./chunk-J7YF57MV.js";
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-7X4BWHV7.js";
import {
  TitlePage
} from "./chunk-T6BZLT4B.js";
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
import "./chunk-Y62O6ZFA.js";
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
  ɵɵclassProp,
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
  ɵɵstyleProp,
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

// src/app/features/classes/class-detail/class-detail.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ClassDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "CLASSES.LOADING"));
  }
}
function ClassDetailComponent_div_5_div_65_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 45);
    \u0275\u0275listener("click", function ClassDetailComponent_div_5_div_65_div_1_Template_button_click_3_listener() {
      const teacher_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeTeacher(teacher_r3.id));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", teacher_r3.firstName, " ", teacher_r3.lastName, " ");
  }
}
function ClassDetailComponent_div_5_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ClassDetailComponent_div_5_div_65_div_1_Template, 4, 2, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.assignedTeachers);
  }
}
function ClassDetailComponent_div_5_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "CLASSES.SCHEDULE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classData.schedule);
  }
}
function ClassDetailComponent_div_5_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "CLASSES.DESCRIPTION"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classData.description);
  }
}
function ClassDetailComponent_div_5_div_90_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const child_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", child_r6.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_5_div_90_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 58);
  }
}
function ClassDetailComponent_div_5_div_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "div", 50);
    \u0275\u0275template(4, ClassDetailComponent_div_5_div_90_div_1_img_4_Template, 1, 1, "img", 51)(5, ClassDetailComponent_div_5_div_90_div_1_i_5_Template, 1, 0, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 54)(14, "button", 55);
    \u0275\u0275listener("click", function ClassDetailComponent_div_5_div_90_div_1_Template_button_click_14_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeChild(child_r6.id));
    });
    \u0275\u0275element(15, "i", 56);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", child_r6.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r6.profilePicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", child_r6.firstName, " ", child_r6.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(11, 7, "CLASSES.AGE"), ": ", \u0275\u0275pipeBind2(12, 9, child_r6.dateOfBirth, "yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 12, "CLASSES.REMOVE"), " ");
  }
}
function ClassDetailComponent_div_5_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ClassDetailComponent_div_5_div_90_div_1_Template, 18, 14, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.enrolledChildren);
  }
}
function ClassDetailComponent_div_5_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "CLASSES.NO_CHILDREN"));
  }
}
function ClassDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "span", 15);
    \u0275\u0275element(7, "i", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h5", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "h5", 20);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dl", 21)(22, "dt", 22);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "dt", 22);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd", 23);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "dt", 22);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "dd", 23);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dt", 22);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "dd", 23);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "dt", 22);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "dd", 23);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 24)(53, "div", 25)(54, "div", 12)(55, "h5");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 19)(59, "div", 26)(60, "div", 27)(61, "strong");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 28);
    \u0275\u0275template(65, ClassDetailComponent_div_5_div_65_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(66, "button", 30);
    \u0275\u0275listener("click", function ClassDetailComponent_div_5_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAssignTeacherModal());
    });
    \u0275\u0275element(67, "i", 31);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(71, ClassDetailComponent_div_5_div_71_Template, 7, 4, "div", 32)(72, ClassDetailComponent_div_5_div_72_Template, 7, 4, "div", 32);
    \u0275\u0275elementStart(73, "div", 26)(74, "div", 27)(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 28);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 33)(81, "div", 34)(82, "h5");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 30);
    \u0275\u0275listener("click", function ClassDetailComponent_div_5_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAddChildModal());
    });
    \u0275\u0275element(86, "i", 31);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 19);
    \u0275\u0275template(90, ClassDetailComponent_div_5_div_90_Template, 2, 1, "div", 29)(91, ClassDetailComponent_div_5_div_91_Template, 4, 3, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 33)(93, "div", 12)(94, "h5");
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 19)(98, "div", 36)(99, "div", 10)(100, "div", 37)(101, "h3", 38);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p", 39);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "div", 10)(107, "div", 37)(108, "h3", 40);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 39);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 10)(114, "div", 37)(115, "h3", 41);
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p", 39);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("badge-active", ctx_r3.classData.isActive)("badge-inactive", !ctx_r3.classData.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.classData.isActive ? \u0275\u0275pipeBind1(9, 44, "CLASSES.ACTIVE") : \u0275\u0275pipeBind1(10, 46, "CLASSES.INACTIVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.classData.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", \u0275\u0275pipeBind1(15, 48, "CLASSES.AGE"), ": ", ctx_r3.classData.ageGroupMin, " - ", ctx_r3.classData.ageGroupMax, " ", \u0275\u0275pipeBind1(16, 50, "CLASSES.YEARS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 52, "CLASSES.BASIC_INFO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 54, "CLASSES.CLASS_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classData.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 56, "CLASSES.AGE_GROUP"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", ctx_r3.classData.ageGroupMin, " - ", ctx_r3.classData.ageGroupMax, " ", \u0275\u0275pipeBind1(32, 58, "CLASSES.YEARS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 60, "CLASSES.CAPACITY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.classData.capacity, " ", \u0275\u0275pipeBind1(38, 62, "CLASSES.STUDENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 64, "CLASSES.ENROLLED"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.classData.enrollmentCount || 0, " ", \u0275\u0275pipeBind1(44, 66, "CLASSES.STUDENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 68, "CLASSES.STATUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classData.isActive ? \u0275\u0275pipeBind1(50, 70, "CLASSES.ACTIVE") : \u0275\u0275pipeBind1(51, 72, "CLASSES.INACTIVE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 74, "CLASSES.CLASS_INFORMATION"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(63, 76, "CLASSES.TEACHERS"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.assignedTeachers.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.assignedTeachers.length > 0 ? \u0275\u0275pipeBind1(69, 78, "CLASSES.ADD_MORE") : \u0275\u0275pipeBind1(70, 80, "CLASSES.ASSIGN_TEACHERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.classData.schedule);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.classData.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(77, 82, "CLASSES.AVAILABLE_SPOTS"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.classData.capacity - (ctx_r3.classData.enrollmentCount || 0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 84, "CLASSES.ENROLLED_CHILDREN"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(88, 86, "CLASSES.ADD_CHILD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.enrolledChildren.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.enrolledChildren.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 88, "CLASSES.STATISTICS"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.classData.enrollmentCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 90, "CLASSES.ENROLLED_STUDENTS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.classData.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(112, 92, "CLASSES.TOTAL_CAPACITY"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.classData.capacity - (ctx_r3.classData.enrollmentCount || 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 94, "CLASSES.AVAILABLE_SPOTS"));
  }
}
function ClassDetailComponent_div_6_ng_template_15_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().item;
    \u0275\u0275property("src", item_r8.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_6_ng_template_15_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function ClassDetailComponent_div_6_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275template(2, ClassDetailComponent_div_6_ng_template_15_img_2_Template, 1, 1, "img", 51)(3, ClassDetailComponent_div_6_ng_template_15_i_3_Template, 1, 0, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r8.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r8.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r8.firstName, " ", item_r8.lastName, " ");
  }
}
function ClassDetailComponent_div_6_ng_template_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().item;
    \u0275\u0275property("src", item_r9.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_6_ng_template_16_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 83);
  }
}
function ClassDetailComponent_div_6_ng_template_16_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 84);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, item_r9.dateOfBirth, "yyyy"));
  }
}
function ClassDetailComponent_div_6_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275template(2, ClassDetailComponent_div_6_ng_template_16_img_2_Template, 1, 1, "img", 51)(3, ClassDetailComponent_div_6_ng_template_16_i_3_Template, 1, 0, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ClassDetailComponent_div_6_ng_template_16_small_7_Template, 3, 4, "small", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r9.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.profilePicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r9.firstName, " ", item_r9.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.dateOfBirth);
  }
}
function ClassDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "h5", 64);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function ClassDetailComponent_div_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddChildModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "div", 67)(10, "label", 68);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-select", 69);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ClassDetailComponent_div_6_Template_ng_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedChildIds, $event) || (ctx_r3.selectedChildIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(15, ClassDetailComponent_div_6_ng_template_15_Template, 5, 4, "ng-template", 70)(16, ClassDetailComponent_div_6_ng_template_16_Template, 8, 5, "ng-template", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 72)(18, "button", 73);
    \u0275\u0275listener("click", function ClassDetailComponent_div_6_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddChildModal());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 74);
    \u0275\u0275listener("click", function ClassDetailComponent_div_6_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addChildToClass());
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r3.showAddChildModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r3.showAddChildModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "CLASSES.ADD_CHILD_TO_CLASS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "CLASSES.SELECT_CHILDREN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r3.availableChildren)("multiple", true)("closeOnSelect", false);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedChildIds);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 20, "CLASSES.CHOOSE_CHILDREN"))("searchable", true)("clearable", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 22, "CLASSES.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.selectedChildIds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 24, "CLASSES.ADD_CHILD"));
  }
}
function ClassDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r3.showAddChildModal);
  }
}
function ClassDetailComponent_div_8_ng_template_15_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const item_r11 = \u0275\u0275nextContext().item;
    \u0275\u0275property("src", item_r11.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_8_ng_template_15_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function ClassDetailComponent_div_8_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275template(2, ClassDetailComponent_div_8_ng_template_15_img_2_Template, 1, 1, "img", 51)(3, ClassDetailComponent_div_8_ng_template_15_i_3_Template, 1, 0, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r11.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r11.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r11.firstName, " ", item_r11.lastName, " ");
  }
}
function ClassDetailComponent_div_8_ng_template_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().item;
    \u0275\u0275property("src", item_r12.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function ClassDetailComponent_div_8_ng_template_16_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 83);
  }
}
function ClassDetailComponent_div_8_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275template(2, ClassDetailComponent_div_8_ng_template_16_img_2_Template, 1, 1, "img", 51)(3, ClassDetailComponent_div_8_ng_template_16_i_3_Template, 1, 0, "i", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 84);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r12.profilePicture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r12.profilePicture);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r12.firstName, " ", item_r12.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.email);
  }
}
function ClassDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "h5", 64);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function ClassDetailComponent_div_8_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAssignTeacherModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "div", 67)(10, "label", 68);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ng-select", 86);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ClassDetailComponent_div_8_Template_ng_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedTeacherIds, $event) || (ctx_r3.selectedTeacherIds = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(15, ClassDetailComponent_div_8_ng_template_15_Template, 5, 4, "ng-template", 70)(16, ClassDetailComponent_div_8_ng_template_16_Template, 9, 5, "ng-template", 71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 72)(18, "button", 73);
    \u0275\u0275listener("click", function ClassDetailComponent_div_8_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAssignTeacherModal());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 74);
    \u0275\u0275listener("click", function ClassDetailComponent_div_8_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.assignTeacher());
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r3.showAssignTeacherModal ? "block" : "none");
    \u0275\u0275classProp("show", ctx_r3.showAssignTeacherModal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "CLASSES.ASSIGN_TEACHER"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "CLASSES.SELECT_TEACHERS_MULTIPLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r3.availableTeachers)("multiple", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedTeacherIds);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 20, "CLASSES.SELECT_TEACHERS"))("closeOnSelect", false)("searchable", true)("clearable", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 22, "CLASSES.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.selectedTeacherIds.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 24, "CLASSES.ASSIGN_TEACHERS"));
  }
}
function ClassDetailComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 85);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r3.showAssignTeacherModal);
  }
}
var ClassDetailComponent = class _ClassDetailComponent {
  classesService;
  router;
  route;
  http;
  translate;
  pageTitleService;
  classData = null;
  loading = false;
  classId = 0;
  showAddChildModal = false;
  availableChildren = [];
  enrolledChildren = [];
  selectedChildIds = [];
  showAssignTeacherModal = false;
  availableTeachers = [];
  selectedTeacherIds = [];
  assignedTeachers = [];
  langChangeSub;
  breadcrumbs = [];
  titleActions = [];
  constructor(classesService, router, route, http, translate, pageTitleService) {
    this.classesService = classesService;
    this.router = router;
    this.route = route;
    this.http = http;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    this.classId = Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitleService.setTitle(this.translate.instant("CLASSES.CLASS_DETAILS"));
    this.setupBreadcrumbs();
    this.setupTitleActions();
    this.loadClass();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("CLASSES.CLASS_DETAILS"));
      this.setupBreadcrumbs();
      this.setupTitleActions();
    });
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("CLASSES.TITLE"), url: "/classes" },
      { label: this.classData?.name || this.translate.instant("CLASSES.CLASS_DETAILS") }
    ];
  }
  setupTitleActions() {
    this.titleActions = [
      {
        label: this.translate.instant("CLASSES.BACK_TO_CLASSES"),
        class: "btn-btn-outline-secondary btn-cancel-global",
        icon: "bi bi-arrow-left",
        action: () => this.goBack()
      }
    ];
  }
  loadClass() {
    this.loading = true;
    this.classesService.getClass(this.classId).subscribe({
      next: (classData) => {
        this.classData = classData;
        this.loading = false;
        this.loadEnrolledChildren();
        this.loadAssignedTeachers();
      },
      error: (error) => {
        console.error("Error loading class:", error);
        this.loading = false;
        this.router.navigate(["/classes"]);
      }
    });
  }
  loadAssignedTeachers() {
    this.http.get(`${ApiConfig.ENDPOINTS.CLASSES}/${this.classId}/teachers`).subscribe({
      next: (teachers) => this.assignedTeachers = teachers,
      error: (error) => console.error("Error loading assigned teachers:", error)
    });
  }
  loadEnrolledChildren() {
    this.http.get(`${ApiConfig.ENDPOINTS.CLASSES}/${this.classId}/children`).subscribe({
      next: (children) => this.enrolledChildren = children,
      error: (error) => console.error("Error loading enrolled children:", error)
    });
  }
  openAddChildModal() {
    this.showAddChildModal = true;
    this.loadAvailableChildren();
  }
  closeAddChildModal() {
    this.showAddChildModal = false;
    this.selectedChildIds = [];
  }
  loadAvailableChildren() {
    this.http.get(ApiConfig.ENDPOINTS.CHILDREN).subscribe({
      next: (children) => {
        const enrolledIds = this.enrolledChildren.map((c) => c.id);
        this.availableChildren = children.filter((c) => !enrolledIds.includes(c.id));
      },
      error: (error) => console.error("Error loading children:", error)
    });
  }
  addChildToClass() {
    if (!this.selectedChildIds || this.selectedChildIds.length === 0)
      return;
    const payload = { classId: this.classId, childIds: this.selectedChildIds };
    this.http.post(`${ApiConfig.ENDPOINTS.CLASSES}/enroll`, payload).subscribe({
      next: () => {
        this.closeAddChildModal();
        this.loadClass();
        showSuccessToast(this.translate.instant("CLASSES.ENROLL_SUCCESS"));
      },
      error: (error) => {
        console.error("Error enrolling child:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("CLASSES.ENROLL_ERROR")
        });
      }
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  openAssignTeacherModal() {
    this.showAssignTeacherModal = true;
    this.selectedTeacherIds = [];
    this.loadAvailableTeachers();
  }
  closeAssignTeacherModal() {
    this.showAssignTeacherModal = false;
    this.selectedTeacherIds = [];
  }
  loadAvailableTeachers() {
    this.http.get(ApiConfig.ENDPOINTS.EDUCATORS).subscribe({
      next: (teachers) => {
        const assignedIds = this.assignedTeachers.map((t) => t.id);
        this.availableTeachers = teachers.filter((t) => !assignedIds.includes(t.id));
      },
      error: (error) => console.error("Error loading teachers:", error)
    });
  }
  assignTeacher() {
    if (!this.selectedTeacherIds || this.selectedTeacherIds.length === 0) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: this.translate.instant("CLASSES.WARNING"),
        text: this.translate.instant("CLASSES.SELECT_TEACHER_WARNING_TEXT")
      });
      return;
    }
    const payload = { classId: this.classId, teacherIds: this.selectedTeacherIds };
    this.http.post(`${ApiConfig.ENDPOINTS.CLASSES}/assign-teachers`, payload).subscribe({
      next: () => {
        this.closeAssignTeacherModal();
        this.loadClass();
        showSuccessToast(this.translate.instant("CLASSES.ASSIGN_TEACHER_SUCCESS"));
      },
      error: (error) => {
        console.error("Error assigning teacher:", error);
        import_sweetalert2.default.fire({
          icon: "error",
          title: this.translate.instant("MESSAGES.ERROR"),
          text: this.translate.instant("CLASSES.ASSIGN_TEACHER_ERROR")
        });
      }
    });
  }
  removeTeacher(teacherId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("CLASSES.REMOVE_TEACHER_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("COMMON.YES_REMOVE"),
      cancelButtonText: this.translate.instant("CLASSES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${ApiConfig.ENDPOINTS.CLASSES}/${this.classId}/teachers/${teacherId}`).subscribe({
          next: () => {
            this.loadClass();
            showSuccessToast(this.translate.instant("CLASSES.REMOVE_TEACHER_SUCCESS"));
          },
          error: (error) => {
            console.error("Error removing teacher:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("CLASSES.REMOVE_TEACHER_ERROR")
            });
          }
        });
      }
    });
  }
  removeChild(childId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("COMMON.ARE_YOU_SURE"),
      text: this.translate.instant("CLASSES.REMOVE_CHILD_CONFIRM_TEXT"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: this.translate.instant("COMMON.YES_REMOVE"),
      cancelButtonText: this.translate.instant("CLASSES.CANCEL")
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${ApiConfig.ENDPOINTS.CLASSES}/${this.classId}/children/${childId}`).subscribe({
          next: () => {
            this.loadClass();
            showSuccessToast(this.translate.instant("CLASSES.REMOVE_CHILD_SUCCESS"));
          },
          error: (error) => {
            console.error("Error removing child:", error);
            import_sweetalert2.default.fire({
              icon: "error",
              title: this.translate.instant("MESSAGES.ERROR"),
              text: this.translate.instant("CLASSES.REMOVE_CHILD_ERROR")
            });
          }
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/classes"]);
  }
  static \u0275fac = function ClassDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassDetailComponent)(\u0275\u0275directiveInject(ClassesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassDetailComponent, selectors: [["app-class-detail"]], decls: 10, vars: 14, consts: [[1, "container-fluid", "mt-4"], ["icon", "bi bi-backpack2", 3, "title", "subtitle", "breadcrumbs", "actions"], ["class", "text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "modal", "style", "z-index: 1055;", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", "style", "z-index: 1050;", 3, "show", 4, "ngIf"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "row"], [1, "col-md-4"], [1, "card", "card-general", "card-detail_pages", "border-white"], [1, "card-header"], [1, "d-flex", "align-items-center", "flex-wrap", "row-gap-3"], [1, "overflow-hidden"], [1, "badge", "d-inline-flex", "align-items-center", "mb-2"], [1, "ti", "ti-circle-filled", "fs-5", "me-1"], [1, "mb-1", "text-truncate"], [1, "age"], [1, "card-body"], [1, "mb-3", "title-body"], [1, "row", "mb-0", "table"], [1, "col-6", "fw-medium", "text-dark", "mb-3"], [1, "col-6", "mb-3"], [1, "col-md-8"], [1, "card", "card-general"], [1, "row", "mb-3"], [1, "col-sm-4"], [1, "col-sm-8"], [4, "ngIf"], [1, "action-btn", "custom-btn-2", "btn-add-global-2", 3, "click"], [1, "bi", "bi-plus-square", "me-1"], ["class", "row mb-3", 4, "ngIf"], [1, "card", "card-general", "mt-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "text-muted text-center py-3", 4, "ngIf"], [1, "row", "text-center"], [1, "p-3"], [1, "text-primary"], [1, "text-muted", "mb-0"], [1, "text-success"], [1, "text-info"], ["class", "d-inline-block me-2 mb-2", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "me-2", "mb-2"], [1, "badge", "bg-primary"], [1, "btn-close", "btn-close", "ms-1", 2, "font-size", "10px", 3, "click"], ["class", "border rounded p-3 mb-3", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-3"], [1, "row", "align-items-center"], [1, "col-md-8", "d-flex", "align-items-center", "gap-3"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-light", "overflow-hidden", 2, "width", "45px", "height", "45px"], ["alt", "", "class", "w-100 h-100", "style", "object-fit: cover;", 3, "src", 4, "ngIf"], ["class", "bi bi-person text-muted fs-4", 4, "ngIf"], [1, "mb-1"], [1, "col-md-4", "text-end"], [1, "action-btn", "custom-btn-2", "btn-remove-2", 3, "click"], [1, "bi", "bi-trash3"], ["alt", "", 1, "w-100", "h-100", 2, "object-fit", "cover", 3, "src"], [1, "bi", "bi-person", "text-muted", "fs-4"], [1, "text-muted", "text-center", "py-3"], [1, "modal", 2, "z-index", "1055"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body", 2, "overflow", "visible"], [1, "mb-3"], [1, "form-label"], ["bindLabel", "firstName", "bindValue", "id", 3, "ngModelChange", "items", "multiple", "closeOnSelect", "ngModel", "placeholder", "searchable", "clearable"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "modal-footer"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-cancel-2", 3, "click"], ["type", "button", 1, "action-btn", "custom-btn-2", "btn-view-global-2", 3, "click", "disabled"], [1, "d-flex", "align-items-center", "gap-1"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-light", "overflow-hidden", 2, "width", "20px", "height", "20px"], ["class", "bi bi-person text-muted", "style", "font-size: 12px;", 4, "ngIf"], [1, "bi", "bi-person", "text-muted", 2, "font-size", "12px"], [1, "d-flex", "align-items-center", "gap-2"], [1, "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-light", "overflow-hidden", 2, "width", "32px", "height", "32px"], ["class", "bi bi-person text-muted", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "bi", "bi-person", "text-muted"], [1, "text-muted"], [1, "modal-backdrop", "fade", 2, "z-index", "1050"], ["bindLabel", "firstName", "bindValue", "id", 3, "ngModelChange", "items", "multiple", "ngModel", "placeholder", "closeOnSelect", "searchable", "clearable"]], template: function ClassDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-title-page", 1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, ClassDetailComponent_div_4_Template, 5, 3, "div", 2)(5, ClassDetailComponent_div_5_Template, 120, 96, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, ClassDetailComponent_div_6_Template, 24, 26, "div", 4)(7, ClassDetailComponent_div_7_Template, 1, 2, "div", 5)(8, ClassDetailComponent_div_8_Template, 24, 26, "div", 4)(9, ClassDetailComponent_div_9_Template, 1, 2, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 10, "CLASSES.CLASS_DETAILS"))("subtitle", \u0275\u0275pipeBind1(3, 12, "CLASSES.CLASS_DETAILS_SUBTITLE"))("breadcrumbs", ctx.breadcrumbs)("actions", ctx.titleActions);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.classData && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddChildModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddChildModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAssignTeacherModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAssignTeacherModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, TitlePage, FormsModule, NgControlStatus, NgModel, TranslateModule, NgSelectModule, NgSelectComponent, NgOptionTemplateDirective, NgLabelTemplateDirective, DatePipe, TranslatePipe], styles: ["\n\n.frames[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: rgba(26, 190, 23, 0.1);\n  color: #1ABE17;\n}\n.badge.bg-primary[_ngcontent-%COMP%] {\n  background-color: #e9ecef !important;\n  color: var(--text-color) !important;\n}\n.card-detail_pages[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border: 1px solid #E9EDF4 !important;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.modal[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%] {\n  z-index: 1060 !important;\n}\n  .ng-dropdown-panel {\n  z-index: 1060 !important;\n}\n/*# sourceMappingURL=class-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassDetailComponent, [{
    type: Component,
    args: [{ selector: "app-class-detail", standalone: true, imports: [CommonModule, TitlePage, FormsModule, TranslateModule, NgSelectModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'CLASSES.CLASS_DETAILS' | translate"\r
    [subtitle]="'CLASSES.CLASS_DETAILS_SUBTITLE' | translate"\r
    icon="bi bi-backpack2"\r
    [breadcrumbs]="breadcrumbs"\r
    [actions]="titleActions">\r
  </app-title-page>\r
\r
  <div *ngIf="loading" class="text-center">\r
    <div class="spinner-border" role="status">\r
      <span class="visually-hidden">{{ 'CLASSES.LOADING' | translate }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="classData && !loading" class="row">\r
    <div class="  col-md-4">\r
      <div class="card card-general card-detail_pages border-white">\r
        <div class="card-header">\r
          <div class="d-flex align-items-center flex-wrap row-gap-3">\r
\r
            <div class="overflow-hidden">\r
              <span class="badge d-inline-flex align-items-center mb-2" [class.badge-active]="classData.isActive" [class.badge-inactive]="!classData.isActive">\r
                <i class="ti ti-circle-filled fs-5 me-1"></i>{{ classData.isActive ? ('CLASSES.ACTIVE' | translate) : ('CLASSES.INACTIVE' | translate) }}\r
              </span>\r
              <h5 class="mb-1 text-truncate">{{ classData.name }}</h5>\r
              <p class="age">{{ 'CLASSES.AGE' | translate }}: {{ classData.ageGroupMin }} - {{ classData.ageGroupMax }} {{ 'CLASSES.YEARS' | translate }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card-body">\r
          <h5 class="mb-3 title-body">{{ 'CLASSES.BASIC_INFO' | translate }}</h5>\r
          <dl class="row mb-0 table">\r
            <dt class="col-6 fw-medium text-dark mb-3">{{ 'CLASSES.CLASS_NAME' | translate }}</dt>\r
            <dd class="col-6 mb-3">{{ classData.name }}</dd>\r
            <dt class="col-6 fw-medium text-dark mb-3">{{ 'CLASSES.AGE_GROUP' | translate }}</dt>\r
            <dd class="col-6 mb-3">{{ classData.ageGroupMin }} - {{ classData.ageGroupMax }} {{ 'CLASSES.YEARS' | translate }}</dd>\r
            <dt class="col-6 fw-medium text-dark mb-3">{{ 'CLASSES.CAPACITY' | translate }}</dt>\r
            <dd class="col-6 mb-3">{{ classData.capacity }} {{ 'CLASSES.STUDENTS' | translate }}</dd>\r
            <dt class="col-6 fw-medium text-dark mb-3">{{ 'CLASSES.ENROLLED' | translate }}</dt>\r
            <dd class="col-6 mb-3">{{ classData.enrollmentCount || 0 }} {{ 'CLASSES.STUDENTS' | translate }}</dd>\r
            <dt class="col-6 fw-medium text-dark mb-3">{{ 'CLASSES.STATUS' | translate }}</dt>\r
            <dd class="col-6 mb-3">{{ classData.isActive ? ('CLASSES.ACTIVE' | translate) : ('CLASSES.INACTIVE' | translate) }}</dd>\r
          </dl>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-md-8">\r
      <div class="card card-general">\r
        <div class="card-header">\r
          <h5>{{ 'CLASSES.CLASS_INFORMATION' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="row mb-3">\r
            <div class="col-sm-4"><strong>{{ 'CLASSES.TEACHERS' | translate }}:</strong></div>\r
            <div class="col-sm-8">\r
              <div *ngIf="assignedTeachers.length > 0">\r
                <div *ngFor="let teacher of assignedTeachers" class="d-inline-block me-2 mb-2">\r
                  <span class="badge bg-primary">\r
                    {{ teacher.firstName }} {{ teacher.lastName }}\r
                    <button class="btn-close btn-close ms-1" style="font-size: 10px;" (click)="removeTeacher(teacher.id)"></button>\r
                  </span>\r
                </div>\r
              </div>\r
              <button class="action-btn custom-btn-2 btn-add-global-2" (click)="openAssignTeacherModal()">\r
                <i class="bi bi-plus-square me-1"></i>{{ assignedTeachers.length > 0 ? ('CLASSES.ADD_MORE' | translate) : ('CLASSES.ASSIGN_TEACHERS' | translate) }}\r
              </button>\r
            </div>\r
          </div>\r
          <div class="row mb-3" *ngIf="classData.schedule">\r
            <div class="col-sm-4"><strong>{{ 'CLASSES.SCHEDULE' | translate }}:</strong></div>\r
            <div class="col-sm-8">{{ classData.schedule }}</div>\r
          </div>\r
          <div class="row mb-3" *ngIf="classData.description">\r
            <div class="col-sm-4"><strong>{{ 'CLASSES.DESCRIPTION' | translate }}:</strong></div>\r
            <div class="col-sm-8">{{ classData.description }}</div>\r
          </div>\r
          <div class="row mb-3">\r
            <div class="col-sm-4"><strong>{{ 'CLASSES.AVAILABLE_SPOTS' | translate }}:</strong></div>\r
            <div class="col-sm-8">{{ classData.capacity - (classData.enrollmentCount || 0) }}</div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card card-general mt-3">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5>{{ 'CLASSES.ENROLLED_CHILDREN' | translate }}</h5>\r
          <button class="action-btn custom-btn-2 btn-add-global-2" (click)="openAddChildModal()">\r
            <i class="bi bi-plus-square me-1"></i>{{ 'CLASSES.ADD_CHILD' | translate }}\r
          </button>\r
        </div>\r
        <div class="card-body">\r
          <div *ngIf="enrolledChildren.length > 0">\r
            <div *ngFor="let child of enrolledChildren" class="border rounded p-3 mb-3">\r
              <div class="row align-items-center">\r
                <div class="col-md-8 d-flex align-items-center gap-3">\r
                  <div class="d-flex align-items-center justify-content-center rounded-circle bg-light overflow-hidden" style="width: 45px; height: 45px;">\r
                    <img *ngIf="child.profilePicture" [src]="child.profilePicture" alt="" class="w-100 h-100" style="object-fit: cover;">\r
                    <i *ngIf="!child.profilePicture" class="bi bi-person text-muted fs-4"></i>\r
                  </div>\r
                  <div>\r
                    <h6 class="mb-1">{{ child.firstName }} {{ child.lastName }}</h6>\r
                    <p class="text-muted mb-0">{{ 'CLASSES.AGE' | translate }}: {{ child.dateOfBirth | date:'yyyy' }}</p>\r
                  </div>\r
                </div>\r
                <div class="col-md-4 text-end">\r
                  <button class="action-btn custom-btn-2 btn-remove-2" (click)="removeChild(child.id)">\r
                    <i class="bi bi-trash3"></i> {{ 'CLASSES.REMOVE' | translate }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div *ngIf="enrolledChildren.length === 0" class="text-muted text-center py-3">\r
            <p>{{ 'CLASSES.NO_CHILDREN' | translate }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card card-general mt-3">\r
        <div class="card-header">\r
          <h5>{{ 'CLASSES.STATISTICS' | translate }}</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="row text-center">\r
            <div class="col-md-4">\r
              <div class="p-3">\r
                <h3 class="text-primary">{{ classData.enrollmentCount || 0 }}</h3>\r
                <p class="text-muted mb-0">{{ 'CLASSES.ENROLLED_STUDENTS' | translate }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="p-3">\r
                <h3 class="text-success">{{ classData.capacity }}</h3>\r
                <p class="text-muted mb-0">{{ 'CLASSES.TOTAL_CAPACITY' | translate }}</p>\r
              </div>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="p-3">\r
                <h3 class="text-info">{{ classData.capacity - (classData.enrollmentCount || 0) }}</h3>\r
                <p class="text-muted mb-0">{{ 'CLASSES.AVAILABLE_SPOTS' | translate }}</p>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add Child Modal -->\r
<div class="modal" [class.show]="showAddChildModal" [style.display]="showAddChildModal ? 'block' : 'none'" style="z-index: 1055;" *ngIf="showAddChildModal">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'CLASSES.ADD_CHILD_TO_CLASS' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="closeAddChildModal()"></button>\r
      </div>\r
      <div class="modal-body" style="overflow: visible;">\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'CLASSES.SELECT_CHILDREN' | translate }}</label>\r
          <ng-select\r
            [items]="availableChildren"\r
            [multiple]="true"\r
            [closeOnSelect]="false"\r
            bindLabel="firstName"\r
            bindValue="id"\r
            [(ngModel)]="selectedChildIds"\r
            [placeholder]="'CLASSES.CHOOSE_CHILDREN' | translate"\r
            [searchable]="true"\r
            [clearable]="true">\r
            <ng-template ng-label-tmp let-item="item">\r
              <div class="d-flex align-items-center gap-1">\r
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-light overflow-hidden" style="width: 20px; height: 20px;">\r
                  <img *ngIf="item.profilePicture" [src]="item.profilePicture" alt="" class="w-100 h-100" style="object-fit: cover;">\r
                  <i *ngIf="!item.profilePicture" class="bi bi-person text-muted" style="font-size: 12px;"></i>\r
                </div>\r
                {{ item.firstName }} {{ item.lastName }}\r
              </div>\r
            </ng-template>\r
            <ng-template ng-option-tmp let-item="item">\r
              <div class="d-flex align-items-center gap-2">\r
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-light overflow-hidden" style="width: 32px; height: 32px;">\r
                  <img *ngIf="item.profilePicture" [src]="item.profilePicture" alt="" class="w-100 h-100" style="object-fit: cover;">\r
                  <i *ngIf="!item.profilePicture" class="bi bi-person text-muted"></i>\r
                </div>\r
                <div>\r
                  <div>{{ item.firstName }} {{ item.lastName }}</div>\r
                  <small class="text-muted" *ngIf="item.dateOfBirth">{{ item.dateOfBirth | date:'yyyy' }}</small>\r
                </div>\r
              </div>\r
            </ng-template>\r
          </ng-select>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="closeAddChildModal()">{{ 'CLASSES.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn custom-btn-2 btn-view-global-2" (click)="addChildToClass()" [disabled]="selectedChildIds.length === 0">{{ 'CLASSES.ADD_CHILD' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showAddChildModal" style="z-index: 1050;" *ngIf="showAddChildModal"></div>\r
\r
<!-- Assign Teacher Modal -->\r
<div class="modal" [class.show]="showAssignTeacherModal" [style.display]="showAssignTeacherModal ? 'block' : 'none'" style="z-index: 1055;" *ngIf="showAssignTeacherModal">\r
  <div class="modal-dialog modal-dialog-centered">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h5 class="modal-title">{{ 'CLASSES.ASSIGN_TEACHER' | translate }}</h5>\r
        <button type="button" class="btn-close" (click)="closeAssignTeacherModal()"></button>\r
      </div>\r
      <div class="modal-body" style="overflow: visible;">\r
        <div class="mb-3">\r
          <label class="form-label">{{ 'CLASSES.SELECT_TEACHERS_MULTIPLE' | translate }}</label>\r
          <ng-select\r
            [items]="availableTeachers"\r
            [multiple]="true"\r
            bindLabel="firstName"\r
            bindValue="id"\r
            [(ngModel)]="selectedTeacherIds"\r
            [placeholder]="'CLASSES.SELECT_TEACHERS' | translate"\r
            [closeOnSelect]="false"\r
            [searchable]="true"\r
            [clearable]="true">\r
            <ng-template ng-label-tmp let-item="item">\r
              <div class="d-flex align-items-center gap-1">\r
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-light overflow-hidden" style="width: 20px; height: 20px;">\r
                  <img *ngIf="item.profilePicture" [src]="item.profilePicture" alt="" class="w-100 h-100" style="object-fit: cover;">\r
                  <i *ngIf="!item.profilePicture" class="bi bi-person text-muted" style="font-size: 12px;"></i>\r
                </div>\r
                {{ item.firstName }} {{ item.lastName }}\r
              </div>\r
            </ng-template>\r
            <ng-template ng-option-tmp let-item="item">\r
              <div class="d-flex align-items-center gap-2">\r
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-light overflow-hidden" style="width: 32px; height: 32px;">\r
                  <img *ngIf="item.profilePicture" [src]="item.profilePicture" alt="" class="w-100 h-100" style="object-fit: cover;">\r
                  <i *ngIf="!item.profilePicture" class="bi bi-person text-muted"></i>\r
                </div>\r
                <div>\r
                  <div>{{ item.firstName }} {{ item.lastName }}</div>\r
                  <small class="text-muted">{{ item.email }}</small>\r
                </div>\r
              </div>\r
            </ng-template>\r
          </ng-select>\r
        </div>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="action-btn custom-btn-2 btn-cancel-2" (click)="closeAssignTeacherModal()">{{ 'CLASSES.CANCEL' | translate }}</button>\r
        <button type="button" class="action-btn custom-btn-2 btn-view-global-2" (click)="assignTeacher()" [disabled]="selectedTeacherIds.length === 0">{{ 'CLASSES.ASSIGN_TEACHERS' | translate }}</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<div class="modal-backdrop fade" [class.show]="showAssignTeacherModal" style="z-index: 1050;" *ngIf="showAssignTeacherModal"></div>\r
`, styles: ["/* src/app/features/classes/class-detail/class-detail.component.scss */\n.frames {\n  background-color: #f8f9fa;\n}\n.badge-active {\n  background: rgba(26, 190, 23, 0.1);\n  color: #1ABE17;\n}\n.badge.bg-primary {\n  background-color: #e9ecef !important;\n  color: var(--text-color) !important;\n}\n.card-detail_pages .card-header {\n  border: 1px solid #E9EDF4 !important;\n}\n.modal .modal-content {\n  overflow: visible;\n}\n.modal .modal-body {\n  overflow: visible;\n}\n.modal ng-select .ng-dropdown-panel {\n  z-index: 1060 !important;\n}\n::ng-deep .ng-dropdown-panel {\n  z-index: 1060 !important;\n}\n/*# sourceMappingURL=class-detail.component.css.map */\n"] }]
  }], () => [{ type: ClassesService }, { type: Router }, { type: ActivatedRoute }, { type: HttpClient }, { type: TranslateService }, { type: PageTitleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassDetailComponent, { className: "ClassDetailComponent", filePath: "src/app/features/classes/class-detail/class-detail.component.ts", lineNumber: 24 });
})();
export {
  ClassDetailComponent
};
//# sourceMappingURL=chunk-GIUFRYS7.js.map
