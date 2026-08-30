import {
  SimpleToastService
} from "./chunk-EQXZY767.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NEGRQ2LF.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  TitleCasePipe
} from "./chunk-HDGNZI2G.js";
import {
  Component,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/features/learning-games/learning-games.component.ts
function LearningGamesComponent_div_8_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h1", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23)(5, "div", 24)(6, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function LearningGamesComponent_div_8_div_14_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.userAnswer, $event) || (ctx_r1.userAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LearningGamesComponent_div_8_div_14_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitAnswer());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitAnswer());
    });
    \u0275\u0275element(8, "i", 27);
    \u0275\u0275text(9, "Submit ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mathQuestion.question);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userAnswer);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.userAnswer === null);
  }
}
function LearningGamesComponent_div_8_div_15_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_15_button_7_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectLetter(option_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn-success", ctx_r1.selectedLetter === option_r5 && option_r5 === ctx_r1.currentLetter)("btn-danger", ctx_r1.selectedLetter === option_r5 && option_r5 !== ctx_r1.currentLetter);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5, " ");
  }
}
function LearningGamesComponent_div_8_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 21)(2, "h2", 29);
    \u0275\u0275text(3, "Find the letter:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275template(7, LearningGamesComponent_div_8_div_15_button_7_Template, 2, 5, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.currentLetter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.letterOptions);
  }
}
function LearningGamesComponent_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 21)(2, "h2", 29);
    \u0275\u0275text(3, "Mix these colors:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275element(5, "div", 36);
    \u0275\u0275elementStart(6, "span", 37);
    \u0275\u0275text(7, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 36);
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mixColors());
    });
    \u0275\u0275element(13, "i", 40);
    \u0275\u0275text(14, "Mix Colors! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngStyle", ctx_r1.getColorStyle(ctx_r1.color1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", ctx_r1.getColorStyle(ctx_r1.color2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", ctx_r1.getColorStyle(ctx_r1.mixedColor));
  }
}
function LearningGamesComponent_div_8_div_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_17_button_5_Template_button_click_0_listener() {
      const shape_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addShape(shape_r8));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shape_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi bi-", shape_r8 === "circle" ? "circle" : shape_r8 === "square" ? "square" : shape_r8 === "triangle" ? "triangle" : "rectangle"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, shape_r8), " ");
  }
}
function LearningGamesComponent_div_8_div_17_span_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_17_span_10_Template_span_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeShape(i_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const shape_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", shape_r11, " ");
  }
}
function LearningGamesComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 21)(2, "h2", 29);
    \u0275\u0275text(3, "Build with shapes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275template(5, LearningGamesComponent_div_8_div_17_button_5_Template, 4, 6, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "h5");
    \u0275\u0275text(8, "Your creation:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275template(10, LearningGamesComponent_div_8_div_17_span_10_Template, 3, 1, "span", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.availableShapes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.selectedShapes);
  }
}
function LearningGamesComponent_div_8_div_18_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_18_button_5_Template_button_click_0_listener() {
      const note_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addNote(note_r14));
    });
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", note_r14, " ");
  }
}
function LearningGamesComponent_div_8_div_18_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r15, " ");
  }
}
function LearningGamesComponent_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 21)(2, "h2", 29);
    \u0275\u0275text(3, "Create your melody:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275template(5, LearningGamesComponent_div_8_div_18_button_5_Template, 3, 1, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53)(7, "h5");
    \u0275\u0275text(8, "Your melody:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 54);
    \u0275\u0275template(10, LearningGamesComponent_div_8_div_18_span_10_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 56)(12, "button", 57);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.playMelody());
    });
    \u0275\u0275element(13, "i", 58);
    \u0275\u0275text(14, "Play ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 59);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_div_18_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearMelody());
    });
    \u0275\u0275element(16, "i", 60);
    \u0275\u0275text(17, "Clear ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.notes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.melody);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.melody.length === 0);
  }
}
function LearningGamesComponent_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 21)(2, "h2", 29);
    \u0275\u0275text(3, "Create your story:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "div", 66)(6, "div", 67)(7, "h6");
    \u0275\u0275text(8, "Characters:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 68)(10, "button", 69);
    \u0275\u0275text(11, "\u{1F43B} Bear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 69);
    \u0275\u0275text(13, "\u{1F430} Rabbit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 69);
    \u0275\u0275text(15, "\u{1F98A} Fox");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 67)(17, "h6");
    \u0275\u0275text(18, "Places:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 68)(20, "button", 70);
    \u0275\u0275text(21, "\u{1F332} Forest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 70);
    \u0275\u0275text(23, "\u{1F3F0} Castle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 70);
    \u0275\u0275text(25, "\u{1F3D6}\uFE0F Beach");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 67)(27, "h6");
    \u0275\u0275text(28, "Actions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 68)(30, "button", 71);
    \u0275\u0275text(31, "\u{1F3C3} Running");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 71);
    \u0275\u0275text(33, "\u{1F3B5} Singing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 71);
    \u0275\u0275text(35, "\u{1F3A8} Painting");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function LearningGamesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 8)(3, "div", 9)(4, "h5");
    \u0275\u0275element(5, "i");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function LearningGamesComponent_div_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.endGame());
    });
    \u0275\u0275element(11, "i", 12);
    \u0275\u0275text(12, "End Game ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275template(14, LearningGamesComponent_div_8_div_14_Template, 10, 3, "div", 14)(15, LearningGamesComponent_div_8_div_15_Template, 8, 2, "div", 15)(16, LearningGamesComponent_div_8_div_16_Template, 15, 3, "div", 16)(17, LearningGamesComponent_div_8_div_17_Template, 11, 2, "div", 17)(18, LearningGamesComponent_div_8_div_18_Template, 18, 3, "div", 18)(19, LearningGamesComponent_div_8_div_19_Template, 36, 0, "div", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.currentGame.icon + " me-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.currentGame.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Score: ", ctx_r1.score);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "2");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "3");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "4");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "5");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentGame.id === "6");
  }
}
function LearningGamesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 67)(2, "div", 72)(3, "span", 73);
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function LearningGamesComponent_div_9_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 67)(7, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function LearningGamesComponent_div_9_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 77);
    \u0275\u0275text(9, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 78);
    \u0275\u0275text(11, "Math");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 79);
    \u0275\u0275text(13, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 80);
    \u0275\u0275text(15, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 81);
    \u0275\u0275text(17, "Art");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 82);
    \u0275\u0275text(19, "Music");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 67)(21, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function LearningGamesComponent_div_9_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDifficulty, $event) || (ctx_r1.selectedDifficulty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 77);
    \u0275\u0275text(23, "All Difficulties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 83);
    \u0275\u0275text(25, "Easy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 84);
    \u0275\u0275text(27, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 85);
    \u0275\u0275text(29, "Hard");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategory);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDifficulty);
  }
}
function LearningGamesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div", 89)(3, "div", 90);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 92);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 93)(10, "div", 94)(11, "span", 95);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 4);
    \u0275\u0275element(15, "i", 96);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 97)(18, "span", 98);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 99);
    \u0275\u0275element(21, "i");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "titlecase");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 100)(25, "button", 101);
    \u0275\u0275listener("click", function LearningGamesComponent_div_10_div_1_Template_button_click_25_listener() {
      const game_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startGame(game_r18));
    });
    \u0275\u0275element(26, "i", 58);
    \u0275\u0275text(27, "Start Game ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const game_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", game_r18.color);
    \u0275\u0275advance();
    \u0275\u0275classMap(game_r18.icon + " display-4");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(game_r18.description);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("bg-" + ctx_r1.getDifficultyColor(game_r18.difficulty));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 14, game_r18.difficulty), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", game_r18.duration, " min ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(game_r18.ageGroup);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getCategoryIcon(game_r18.category) + " me-1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 16, game_r18.category), " ");
  }
}
function LearningGamesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, LearningGamesComponent_div_10_div_1_Template, 28, 18, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredGames);
  }
}
function LearningGamesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 102);
    \u0275\u0275element(2, "i", 103);
    \u0275\u0275elementStart(3, "h4", 4);
    \u0275\u0275text(4, "No games found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Try adjusting your search criteria");
    \u0275\u0275elementEnd()()();
  }
}
function LearningGamesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 2)(2, "div", 105)(3, "div", 106)(4, "h5");
    \u0275\u0275element(5, "i", 107);
    \u0275\u0275text(6, "Game Categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 89)(8, "div", 108)(9, "div", 109)(10, "div", 110);
    \u0275\u0275element(11, "i", 111);
    \u0275\u0275elementStart(12, "h6");
    \u0275\u0275text(13, "Math");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 4);
    \u0275\u0275text(15, "Numbers & Logic");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 109)(17, "div", 110);
    \u0275\u0275element(18, "i", 112);
    \u0275\u0275elementStart(19, "h6");
    \u0275\u0275text(20, "Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 4);
    \u0275\u0275text(22, "Reading & Writing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 109)(24, "div", 110);
    \u0275\u0275element(25, "i", 113);
    \u0275\u0275elementStart(26, "h6");
    \u0275\u0275text(27, "Science");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small", 4);
    \u0275\u0275text(29, "Discovery & Experiments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 109)(31, "div", 110);
    \u0275\u0275element(32, "i", 114);
    \u0275\u0275elementStart(33, "h6");
    \u0275\u0275text(34, "Art");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "small", 4);
    \u0275\u0275text(36, "Creativity & Design");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 109)(38, "div", 110);
    \u0275\u0275element(39, "i", 115);
    \u0275\u0275elementStart(40, "h6");
    \u0275\u0275text(41, "Music");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "small", 4);
    \u0275\u0275text(43, "Rhythm & Melody");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 109)(45, "div", 110);
    \u0275\u0275element(46, "i", 116);
    \u0275\u0275elementStart(47, "h6");
    \u0275\u0275text(48, "Puzzles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "small", 4);
    \u0275\u0275text(50, "Problem Solving");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
var LearningGamesComponent = class _LearningGamesComponent {
  simpleToast;
  constructor(simpleToast) {
    this.simpleToast = simpleToast;
  }
  games = [
    {
      id: "1",
      title: "Number Adventure",
      description: "Learn counting and basic math through fun adventures",
      category: "math",
      ageGroup: "3-5 years",
      difficulty: "easy",
      duration: 15,
      icon: "bi-calculator",
      color: "#4CAF50"
    },
    {
      id: "2",
      title: "Letter Safari",
      description: "Explore the alphabet with animal friends",
      category: "language",
      ageGroup: "4-6 years",
      difficulty: "easy",
      duration: 20,
      icon: "bi-alphabet",
      color: "#2196F3"
    },
    {
      id: "3",
      title: "Color Mixer Lab",
      description: "Discover how colors mix and create new ones",
      category: "science",
      ageGroup: "3-7 years",
      difficulty: "medium",
      duration: 25,
      icon: "bi-palette",
      color: "#FF9800"
    },
    {
      id: "4",
      title: "Shape Builder",
      description: "Build structures using different geometric shapes",
      category: "math",
      ageGroup: "4-6 years",
      difficulty: "medium",
      duration: 30,
      icon: "bi-shapes",
      color: "#9C27B0"
    },
    {
      id: "5",
      title: "Music Maker",
      description: "Create melodies and learn about rhythm",
      category: "music",
      ageGroup: "3-8 years",
      difficulty: "easy",
      duration: 20,
      icon: "bi-music-note",
      color: "#E91E63"
    },
    {
      id: "6",
      title: "Story Creator",
      description: "Build your own stories with characters and scenes",
      category: "language",
      ageGroup: "5-8 years",
      difficulty: "hard",
      duration: 35,
      icon: "bi-book",
      color: "#795548"
    }
  ];
  selectedCategory = "all";
  selectedDifficulty = "all";
  searchTerm = "";
  // Game state
  currentGame = null;
  mathQuestion = null;
  userAnswer = null;
  score = 0;
  gameStarted = false;
  // Letter Safari game state
  currentLetter = "";
  letterOptions = [];
  selectedLetter = "";
  // Color Mixer game state
  color1 = "";
  color2 = "";
  mixedColor = "";
  colorOptions = ["red", "blue", "yellow", "green", "orange", "purple"];
  // Shape Builder game state
  availableShapes = ["circle", "square", "triangle", "rectangle"];
  selectedShapes = [];
  // Music Maker game state
  notes = ["C", "D", "E", "F", "G", "A", "B"];
  melody = [];
  ngOnInit() {
  }
  get filteredGames() {
    return this.games.filter((game) => {
      const matchesCategory = this.selectedCategory === "all" || game.category === this.selectedCategory;
      const matchesDifficulty = this.selectedDifficulty === "all" || game.difficulty === this.selectedDifficulty;
      const matchesSearch = game.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || game.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }
  startGame(game) {
    this.currentGame = game;
    this.gameStarted = true;
    this.score = 0;
    switch (game.id) {
      case "1":
        this.startMathGame();
        break;
      case "2":
        this.startLetterGame();
        break;
      case "3":
        this.startColorGame();
        break;
      case "4":
        this.startShapeGame();
        break;
      case "5":
        this.startMusicGame();
        break;
      case "6":
        this.startStoryGame();
        break;
      default:
        this.simpleToast.success(`Starting ${game.title}!`);
    }
  }
  startMathGame() {
    this.generateMathQuestion();
  }
  startLetterGame() {
    this.generateLetterQuestion();
  }
  startColorGame() {
    this.generateColorMix();
  }
  startShapeGame() {
    this.selectedShapes = [];
  }
  startMusicGame() {
    this.melody = [];
  }
  startStoryGame() {
  }
  generateMathQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let answer;
    let question;
    if (operation === "+") {
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
    } else {
      const larger = Math.max(num1, num2);
      const smaller = Math.min(num1, num2);
      answer = larger - smaller;
      question = `${larger} - ${smaller} = ?`;
    }
    this.mathQuestion = { question, answer };
    this.userAnswer = null;
  }
  submitAnswer() {
    if (this.userAnswer === this.mathQuestion.answer) {
      this.score += 10;
      this.simpleToast.success("Correct! \u{1F389} Well done!");
    } else {
      this.simpleToast.warning(`The answer is ${this.mathQuestion.answer}. Try the next one!`);
    }
    this.generateMathQuestion();
  }
  endGame() {
    this.gameStarted = false;
    this.currentGame = null;
    this.simpleToast.success(`Game Finished! \u{1F3C6} Final score: ${this.score}`);
  }
  generateLetterQuestion() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.currentLetter = letters[Math.floor(Math.random() * letters.length)];
    this.letterOptions = [this.currentLetter];
    while (this.letterOptions.length < 4) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      if (!this.letterOptions.includes(randomLetter)) {
        this.letterOptions.push(randomLetter);
      }
    }
    this.letterOptions = this.shuffleArray(this.letterOptions);
    this.selectedLetter = "";
  }
  selectLetter(letter) {
    this.selectedLetter = letter;
    if (letter === this.currentLetter) {
      this.score += 10;
      this.simpleToast.success("Correct! \u{1F389} Great job!");
    } else {
      this.simpleToast.warning(`The correct letter is ${this.currentLetter}. Try again!`);
    }
    setTimeout(() => this.generateLetterQuestion(), 1e3);
  }
  generateColorMix() {
    this.color1 = this.colorOptions[Math.floor(Math.random() * 3)];
    this.color2 = this.colorOptions[Math.floor(Math.random() * 3)];
    if (this.color1 === "red" && this.color2 === "blue" || this.color1 === "blue" && this.color2 === "red") {
      this.mixedColor = "purple";
    } else if (this.color1 === "red" && this.color2 === "yellow" || this.color1 === "yellow" && this.color2 === "red") {
      this.mixedColor = "orange";
    } else if (this.color1 === "blue" && this.color2 === "yellow" || this.color1 === "yellow" && this.color2 === "blue") {
      this.mixedColor = "green";
    } else {
      this.mixedColor = this.color1;
    }
  }
  mixColors() {
    this.score += 15;
    this.simpleToast.success(`${this.color1} + ${this.color2} = ${this.mixedColor}!`);
    setTimeout(() => this.generateColorMix(), 1e3);
  }
  addShape(shape) {
    this.selectedShapes.push(shape);
    this.score += 5;
  }
  removeShape(index) {
    this.selectedShapes.splice(index, 1);
  }
  addNote(note) {
    this.melody.push(note);
    this.score += 3;
  }
  playMelody() {
    this.simpleToast.success(`Playing Melody \u{1F3B5} ${this.melody.join(" - ")}`);
    this.score += 20;
  }
  clearMelody() {
    this.melody = [];
  }
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  getDifficultyColor(difficulty) {
    const colors = {
      easy: "success",
      medium: "warning",
      hard: "danger"
    };
    return colors[difficulty] || "secondary";
  }
  getCategoryIcon(category) {
    const icons = {
      math: "bi-calculator",
      language: "bi-chat-text",
      science: "bi-flask",
      art: "bi-palette",
      music: "bi-music-note"
    };
    return icons[category] || "bi-controller";
  }
  getColorStyle(color) {
    return {
      "background-color": color,
      "width": "60px",
      "height": "60px",
      "border-radius": "50%",
      "display": "inline-block",
      "margin": "5px",
      "border": "2px solid #333"
    };
  }
  static \u0275fac = function LearningGamesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LearningGamesComponent)(\u0275\u0275directiveInject(SimpleToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LearningGamesComponent, selectors: [["app-learning-games"]], decls: 13, vars: 5, consts: [[1, "container-fluid", "mt-4"], [1, "row", "mb-4"], [1, "col-12"], [1, "bi", "bi-controller", "me-2"], [1, "text-muted"], ["class", "row mb-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [1, "card", "game-interface"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-primary", "me-2"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-x-lg", "me-1"], [1, "card-body", "text-center"], ["class", "math-game", 4, "ngIf"], ["class", "letter-game", 4, "ngIf"], ["class", "color-game", 4, "ngIf"], ["class", "shape-game", 4, "ngIf"], ["class", "music-game", 4, "ngIf"], ["class", "story-game", 4, "ngIf"], [1, "math-game"], [1, "question-container", "mb-4"], [1, "display-4", "text-primary"], [1, "answer-container"], [1, "input-group", "justify-content-center"], ["type", "number", "placeholder", "Your answer", 1, "form-control", "answer-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "bi", "bi-check-lg", "me-1"], [1, "letter-game"], [1, "text-primary", "mb-3"], [1, "display-1", "text-success"], [1, "options-container"], ["class", "btn btn-outline-primary btn-lg me-3 mb-3 letter-btn", 3, "btn-success", "btn-danger", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-primary", "btn-lg", "me-3", "mb-3", "letter-btn", 3, "click"], [1, "color-game"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-4"], [3, "ngStyle"], [1, "mx-3", "display-4"], [1, "result-color", 3, "ngStyle"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "bi", "bi-palette", "me-1"], [1, "shape-game"], [1, "available-shapes", "mb-3"], ["class", "btn btn-outline-info me-2 mb-2", 3, "click", 4, "ngFor", "ngForOf"], [1, "selected-shapes"], [1, "shape-display"], ["class", "badge bg-info me-2 mb-2 shape-badge", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-info", "me-2", "mb-2", 3, "click"], [1, "badge", "bg-info", "me-2", "mb-2", "shape-badge", 3, "click"], [1, "bi", "bi-x"], [1, "music-game"], [1, "notes-container", "mb-3"], ["class", "btn btn-outline-warning me-2 mb-2 note-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "melody-display", "mb-3"], [1, "melody-notes"], ["class", "badge bg-warning text-dark me-1", 4, "ngFor", "ngForOf"], [1, "music-controls"], [1, "btn", "btn-success", "me-2", 3, "click", "disabled"], [1, "bi", "bi-play-fill", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "btn", "btn-outline-warning", "me-2", "mb-2", "note-btn", 3, "click"], [1, "bi", "bi-music-note"], [1, "badge", "bg-warning", "text-dark", "me-1"], [1, "story-game"], [1, "story-elements"], [1, "row"], [1, "col-md-4"], [1, "btn-group-vertical", "d-grid", "gap-2"], [1, "btn", "btn-outline-primary"], [1, "btn", "btn-outline-success"], [1, "btn", "btn-outline-warning"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Search games...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "math"], ["value", "language"], ["value", "science"], ["value", "art"], ["value", "music"], ["value", "easy"], ["value", "medium"], ["value", "hard"], ["class", "col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "card", "game-card", "h-100"], [1, "card-body"], [1, "game-icon", "mb-3"], [1, "card-title"], [1, "card-text", "text-muted"], [1, "game-meta", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "badge"], [1, "bi", "bi-clock", "me-1"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "bg-info"], [1, "badge", "bg-secondary"], [1, "card-footer", "bg-transparent"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "col-12", "text-center", "py-5"], [1, "bi", "bi-search", "display-1", "text-muted", "mb-3"], [1, "row", "mt-5"], [1, "card"], [1, "card-header"], [1, "bi", "bi-grid", "me-2"], [1, "row", "text-center"], [1, "col-md-2"], [1, "category-item"], [1, "bi", "bi-calculator", "display-4", "text-success", "mb-2"], [1, "bi", "bi-chat-text", "display-4", "text-primary", "mb-2"], [1, "bi", "bi-flask", "display-4", "text-warning", "mb-2"], [1, "bi", "bi-palette", "display-4", "text-info", "mb-2"], [1, "bi", "bi-music-note", "display-4", "text-danger", "mb-2"], [1, "bi", "bi-puzzle", "display-4", "text-secondary", "mb-2"]], template: function LearningGamesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275text(5, "Learning Games");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Interactive educational games for children");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, LearningGamesComponent_div_8_Template, 20, 10, "div", 5)(9, LearningGamesComponent_div_9_Template, 30, 3, "div", 5)(10, LearningGamesComponent_div_10_Template, 2, 1, "div", 6)(11, LearningGamesComponent_div_11_Template, 7, 0, "div", 6)(12, LearningGamesComponent_div_12_Template, 51, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.gameStarted && ctx.currentGame);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.gameStarted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.gameStarted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.gameStarted && ctx.filteredGames.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.gameStarted);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe], styles: ["\n\n.game-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.game-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.game-card[_ngcontent-%COMP%]   .game-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.game-card[_ngcontent-%COMP%]   .game-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.game-card[_ngcontent-%COMP%]:hover   .game-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.game-interface[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.game-interface[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 12px 12px 0 0 !important;\n}\n.math-game[_ngcontent-%COMP%], \n.letter-game[_ngcontent-%COMP%], \n.color-game[_ngcontent-%COMP%], \n.shape-game[_ngcontent-%COMP%], \n.music-game[_ngcontent-%COMP%], \n.story-game[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.math-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%], \n.letter-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%], \n.color-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%], \n.shape-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%], \n.music-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%], \n.story-game[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n.math-game[_ngcontent-%COMP%]   .answer-input[_ngcontent-%COMP%] {\n  max-width: 200px;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 8px 0 0 8px;\n}\n.math-game[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  border-radius: 0 8px 8px 0;\n  padding: 0.75rem 2rem;\n}\n.game-meta[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.6rem;\n}\n.category-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n}\n.category-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.category-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0.25rem 0;\n  font-weight: 600;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background: white;\n  border-right: none;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #506EE4;\n  box-shadow: 0 0 0 0.2rem rgba(80, 110, 228, 0.25);\n}\n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #506EE4;\n  box-shadow: 0 0 0 0.2rem rgba(80, 110, 228, 0.25);\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #f0f0f0;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.letter-game[_ngcontent-%COMP%]   .letter-btn[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 50%;\n}\n.color-game[_ngcontent-%COMP%]   .result-color[_ngcontent-%COMP%] {\n  border: 3px dashed #333 !important;\n  animation: _ngcontent-%COMP%_pulse 1s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.shape-game[_ngcontent-%COMP%]   .shape-badge[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n}\n.shape-game[_ngcontent-%COMP%]   .shape-badge[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545 !important;\n}\n.shape-game[_ngcontent-%COMP%]   .shape-display[_ngcontent-%COMP%] {\n  min-height: 60px;\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.music-game[_ngcontent-%COMP%]   .note-btn[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n}\n.music-game[_ngcontent-%COMP%]   .note-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.music-game[_ngcontent-%COMP%]   .melody-notes[_ngcontent-%COMP%] {\n  min-height: 50px;\n  border: 2px dashed #ffc107;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fff8e1;\n}\n.story-game[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=learning-games.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LearningGamesComponent, [{
    type: Component,
    args: [{ selector: "app-learning-games", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container-fluid mt-4">\r
  <!-- Header -->\r
  <div class="row mb-4">\r
    <div class="col-12">\r
      <h2><i class="bi bi-controller me-2"></i>Learning Games</h2>\r
      <p class="text-muted">Interactive educational games for children</p>\r
    </div>\r
  </div>\r
\r
  <!-- Game Playing Interface -->\r
  <div *ngIf="gameStarted && currentGame" class="row mb-4">\r
    <div class="col-12">\r
      <div class="card game-interface">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5><i [class]="currentGame.icon + ' me-2'"></i>{{ currentGame.title }}</h5>\r
          <div>\r
            <span class="badge bg-primary me-2">Score: {{ score }}</span>\r
            <button class="btn btn-sm btn-outline-danger" (click)="endGame()">\r
              <i class="bi bi-x-lg me-1"></i>End Game\r
            </button>\r
          </div>\r
        </div>\r
        <div class="card-body text-center">\r
          <!-- Math Game Interface -->\r
          <div *ngIf="currentGame.id === '1'" class="math-game">\r
            <div class="question-container mb-4">\r
              <h1 class="display-4 text-primary">{{ mathQuestion.question }}</h1>\r
            </div>\r
            <div class="answer-container">\r
              <div class="input-group justify-content-center">\r
                <input \r
                  type="number" \r
                  class="form-control answer-input" \r
                  [(ngModel)]="userAnswer"\r
                  placeholder="Your answer"\r
                  (keyup.enter)="submitAnswer()">\r
                <button \r
                  class="btn btn-success btn-lg" \r
                  (click)="submitAnswer()"\r
                  [disabled]="userAnswer === null">\r
                  <i class="bi bi-check-lg me-1"></i>Submit\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <!-- Letter Safari Game -->\r
          <div *ngIf="currentGame.id === '2'" class="letter-game">\r
            <div class="question-container mb-4">\r
              <h2 class="text-primary mb-3">Find the letter:</h2>\r
              <h1 class="display-1 text-success">{{ currentLetter }}</h1>\r
            </div>\r
            <div class="options-container">\r
              <button \r
                *ngFor="let option of letterOptions"\r
                class="btn btn-outline-primary btn-lg me-3 mb-3 letter-btn"\r
                [class.btn-success]="selectedLetter === option && option === currentLetter"\r
                [class.btn-danger]="selectedLetter === option && option !== currentLetter"\r
                (click)="selectLetter(option)">\r
                {{ option }}\r
              </button>\r
            </div>\r
          </div>\r
          \r
          <!-- Color Mixer Game -->\r
          <div *ngIf="currentGame.id === '3'" class="color-game">\r
            <div class="question-container mb-4">\r
              <h2 class="text-primary mb-3">Mix these colors:</h2>\r
              <div class="d-flex justify-content-center align-items-center mb-4">\r
                <div [ngStyle]="getColorStyle(color1)"></div>\r
                <span class="mx-3 display-4">+</span>\r
                <div [ngStyle]="getColorStyle(color2)"></div>\r
                <span class="mx-3 display-4">=</span>\r
                <div [ngStyle]="getColorStyle(mixedColor)" class="result-color"></div>\r
              </div>\r
            </div>\r
            <button class="btn btn-success btn-lg" (click)="mixColors()">\r
              <i class="bi bi-palette me-1"></i>Mix Colors!\r
            </button>\r
          </div>\r
          \r
          <!-- Shape Builder Game -->\r
          <div *ngIf="currentGame.id === '4'" class="shape-game">\r
            <div class="question-container mb-4">\r
              <h2 class="text-primary mb-3">Build with shapes:</h2>\r
              <div class="available-shapes mb-3">\r
                <button \r
                  *ngFor="let shape of availableShapes"\r
                  class="btn btn-outline-info me-2 mb-2"\r
                  (click)="addShape(shape)">\r
                  <i class="bi bi-{{ shape === 'circle' ? 'circle' : shape === 'square' ? 'square' : shape === 'triangle' ? 'triangle' : 'rectangle' }}"></i>\r
                  {{ shape | titlecase }}\r
                </button>\r
              </div>\r
              <div class="selected-shapes">\r
                <h5>Your creation:</h5>\r
                <div class="shape-display">\r
                  <span \r
                    *ngFor="let shape of selectedShapes; let i = index"\r
                    class="badge bg-info me-2 mb-2 shape-badge"\r
                    (click)="removeShape(i)">\r
                    {{ shape }} <i class="bi bi-x"></i>\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <!-- Music Maker Game -->\r
          <div *ngIf="currentGame.id === '5'" class="music-game">\r
            <div class="question-container mb-4">\r
              <h2 class="text-primary mb-3">Create your melody:</h2>\r
              <div class="notes-container mb-3">\r
                <button \r
                  *ngFor="let note of notes"\r
                  class="btn btn-outline-warning me-2 mb-2 note-btn"\r
                  (click)="addNote(note)">\r
                  <i class="bi bi-music-note"></i> {{ note }}\r
                </button>\r
              </div>\r
              <div class="melody-display mb-3">\r
                <h5>Your melody:</h5>\r
                <div class="melody-notes">\r
                  <span \r
                    *ngFor="let note of melody"\r
                    class="badge bg-warning text-dark me-1">\r
                    {{ note }}\r
                  </span>\r
                </div>\r
              </div>\r
              <div class="music-controls">\r
                <button class="btn btn-success me-2" (click)="playMelody()" [disabled]="melody.length === 0">\r
                  <i class="bi bi-play-fill me-1"></i>Play\r
                </button>\r
                <button class="btn btn-outline-secondary" (click)="clearMelody()">\r
                  <i class="bi bi-trash me-1"></i>Clear\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <!-- Story Creator Game -->\r
          <div *ngIf="currentGame.id === '6'" class="story-game">\r
            <div class="question-container mb-4">\r
              <h2 class="text-primary mb-3">Create your story:</h2>\r
              <div class="story-elements">\r
                <div class="row">\r
                  <div class="col-md-4">\r
                    <h6>Characters:</h6>\r
                    <div class="btn-group-vertical d-grid gap-2">\r
                      <button class="btn btn-outline-primary">\u{1F43B} Bear</button>\r
                      <button class="btn btn-outline-primary">\u{1F430} Rabbit</button>\r
                      <button class="btn btn-outline-primary">\u{1F98A} Fox</button>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4">\r
                    <h6>Places:</h6>\r
                    <div class="btn-group-vertical d-grid gap-2">\r
                      <button class="btn btn-outline-success">\u{1F332} Forest</button>\r
                      <button class="btn btn-outline-success">\u{1F3F0} Castle</button>\r
                      <button class="btn btn-outline-success">\u{1F3D6}\uFE0F Beach</button>\r
                    </div>\r
                  </div>\r
                  <div class="col-md-4">\r
                    <h6>Actions:</h6>\r
                    <div class="btn-group-vertical d-grid gap-2">\r
                      <button class="btn btn-outline-warning">\u{1F3C3} Running</button>\r
                      <button class="btn btn-outline-warning">\u{1F3B5} Singing</button>\r
                      <button class="btn btn-outline-warning">\u{1F3A8} Painting</button>\r
                    </div>\r
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
  <!-- Filters and Search -->\r
  <div *ngIf="!gameStarted" class="row mb-4">\r
    <div class="col-md-4">\r
      <div class="input-group">\r
        <span class="input-group-text"><i class="bi bi-search"></i></span>\r
        <input \r
          type="text" \r
          class="form-control" \r
          placeholder="Search games..."\r
          [(ngModel)]="searchTerm">\r
      </div>\r
    </div>\r
    <div class="col-md-4">\r
      <select class="form-select" [(ngModel)]="selectedCategory">\r
        <option value="all">All Categories</option>\r
        <option value="math">Math</option>\r
        <option value="language">Language</option>\r
        <option value="science">Science</option>\r
        <option value="art">Art</option>\r
        <option value="music">Music</option>\r
      </select>\r
    </div>\r
    <div class="col-md-4">\r
      <select class="form-select" [(ngModel)]="selectedDifficulty">\r
        <option value="all">All Difficulties</option>\r
        <option value="easy">Easy</option>\r
        <option value="medium">Medium</option>\r
        <option value="hard">Hard</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- Games Grid -->\r
  <div *ngIf="!gameStarted" class="row">\r
    <div class="col-lg-4 col-md-6 mb-4" *ngFor="let game of filteredGames">\r
      <div class="card game-card h-100">\r
        <div class="card-body">\r
          <div class="game-icon mb-3" [style.color]="game.color">\r
            <i [class]="game.icon + ' display-4'"></i>\r
          </div>\r
          \r
          <h5 class="card-title">{{ game.title }}</h5>\r
          <p class="card-text text-muted">{{ game.description }}</p>\r
          \r
          <div class="game-meta mb-3">\r
            <div class="d-flex justify-content-between align-items-center mb-2">\r
              <span class="badge" [class]="'bg-' + getDifficultyColor(game.difficulty)">\r
                {{ game.difficulty | titlecase }}\r
              </span>\r
              <small class="text-muted">\r
                <i class="bi bi-clock me-1"></i>{{ game.duration }} min\r
              </small>\r
            </div>\r
            <div class="d-flex justify-content-between align-items-center">\r
              <span class="badge bg-info">{{ game.ageGroup }}</span>\r
              <span class="badge bg-secondary">\r
                <i [class]="getCategoryIcon(game.category) + ' me-1'"></i>\r
                {{ game.category | titlecase }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="card-footer bg-transparent">\r
          <button \r
            class="btn btn-primary w-100" \r
            (click)="startGame(game)">\r
            <i class="bi bi-play-fill me-1"></i>Start Game\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- No Games Found -->\r
  <div *ngIf="!gameStarted && filteredGames.length === 0" class="row">\r
    <div class="col-12 text-center py-5">\r
      <i class="bi bi-search display-1 text-muted mb-3"></i>\r
      <h4 class="text-muted">No games found</h4>\r
      <p class="text-muted">Try adjusting your search criteria</p>\r
    </div>\r
  </div>\r
\r
  <!-- Game Categories Overview -->\r
  <div *ngIf="!gameStarted" class="row mt-5">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-header">\r
          <h5><i class="bi bi-grid me-2"></i>Game Categories</h5>\r
        </div>\r
        <div class="card-body">\r
          <div class="row text-center">\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-calculator display-4 text-success mb-2"></i>\r
                <h6>Math</h6>\r
                <small class="text-muted">Numbers & Logic</small>\r
              </div>\r
            </div>\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-chat-text display-4 text-primary mb-2"></i>\r
                <h6>Language</h6>\r
                <small class="text-muted">Reading & Writing</small>\r
              </div>\r
            </div>\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-flask display-4 text-warning mb-2"></i>\r
                <h6>Science</h6>\r
                <small class="text-muted">Discovery & Experiments</small>\r
              </div>\r
            </div>\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-palette display-4 text-info mb-2"></i>\r
                <h6>Art</h6>\r
                <small class="text-muted">Creativity & Design</small>\r
              </div>\r
            </div>\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-music-note display-4 text-danger mb-2"></i>\r
                <h6>Music</h6>\r
                <small class="text-muted">Rhythm & Melody</small>\r
              </div>\r
            </div>\r
            <div class="col-md-2">\r
              <div class="category-item">\r
                <i class="bi bi-puzzle display-4 text-secondary mb-2"></i>\r
                <h6>Puzzles</h6>\r
                <small class="text-muted">Problem Solving</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ["/* src/app/features/learning-games/learning-games.component.scss */\n.game-card {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.game-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.game-card .game-icon {\n  text-align: center;\n}\n.game-card .game-icon i {\n  transition: transform 0.3s ease;\n}\n.game-card:hover .game-icon i {\n  transform: scale(1.1);\n}\n.game-interface {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.game-interface .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 12px 12px 0 0 !important;\n}\n.math-game,\n.letter-game,\n.color-game,\n.shape-game,\n.music-game,\n.story-game {\n  padding: 2rem;\n}\n.math-game .question-container,\n.letter-game .question-container,\n.color-game .question-container,\n.shape-game .question-container,\n.music-game .question-container,\n.story-game .question-container {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n.math-game .answer-input {\n  max-width: 200px;\n  text-align: center;\n  font-size: 1.5rem;\n  border-radius: 8px 0 0 8px;\n}\n.math-game .btn-success {\n  border-radius: 0 8px 8px 0;\n  padding: 0.75rem 2rem;\n}\n.game-meta .badge {\n  font-size: 0.75rem;\n  padding: 0.4rem 0.6rem;\n}\n.category-item {\n  padding: 1rem;\n  border-radius: 8px;\n  transition: background-color 0.2s;\n}\n.category-item:hover {\n  background-color: #f8f9fa;\n}\n.category-item h6 {\n  margin: 0.5rem 0 0.25rem 0;\n  font-weight: 600;\n}\n.input-group-text {\n  background: white;\n  border-right: none;\n}\n.form-control {\n  border-left: none;\n}\n.form-control:focus {\n  border-color: #506EE4;\n  box-shadow: 0 0 0 0.2rem rgba(80, 110, 228, 0.25);\n}\n.form-select {\n  border-radius: 8px;\n}\n.form-select:focus {\n  border-color: #506EE4;\n  box-shadow: 0 0 0 0.2rem rgba(80, 110, 228, 0.25);\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.btn:hover {\n  transform: translateY(-1px);\n}\n.card {\n  border: none;\n  border-radius: 12px;\n}\n.card .card-header {\n  background: white;\n  border-bottom: 1px solid #f0f0f0;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card .card-header h5 {\n  margin: 0;\n  font-weight: 600;\n}\n.badge {\n  border-radius: 20px;\n}\n.letter-game .letter-btn {\n  width: 80px;\n  height: 80px;\n  font-size: 2rem;\n  font-weight: bold;\n  border-radius: 50%;\n}\n.color-game .result-color {\n  border: 3px dashed #333 !important;\n  animation: pulse 1s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.shape-game .shape-badge {\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n}\n.shape-game .shape-badge:hover {\n  background-color: #dc3545 !important;\n}\n.shape-game .shape-display {\n  min-height: 60px;\n  border: 2px dashed #ccc;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.music-game .note-btn {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  font-weight: bold;\n}\n.music-game .note-btn:hover {\n  transform: scale(1.1);\n}\n.music-game .melody-notes {\n  min-height: 50px;\n  border: 2px dashed #ffc107;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fff8e1;\n}\n.story-game .btn {\n  text-align: left;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=learning-games.component.css.map */\n"] }]
  }], () => [{ type: SimpleToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LearningGamesComponent, { className: "LearningGamesComponent", filePath: "src/app/features/learning-games/learning-games.component.ts", lineNumber: 33 });
})();
export {
  LearningGamesComponent
};
//# sourceMappingURL=chunk-7PXYLFB7.js.map
