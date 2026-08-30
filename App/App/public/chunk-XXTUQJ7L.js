import {
  AIAuditService,
  AIQueryClassifierService,
  QueryCategory
} from "./chunk-D5NG4UZA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import "./chunk-Y62O6ZFA.js";
import "./chunk-MW573DHT.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-HDGNZI2G.js";
import {
  environment
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  Subscription,
  ViewChild,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import "./chunk-C7TRL22M.js";

// src/app/core/services/basic-ai.service.ts
var BasicAIService = class _BasicAIService {
  http;
  queryClassifier;
  auditService;
  apiUrl = `${environment.apiUrl}/BasicAI`;
  messagesSubject = new BehaviorSubject([]);
  messages$ = this.messagesSubject.asObservable();
  currentLang = "it";
  constructor(http, queryClassifier, auditService) {
    this.http = http;
    this.queryClassifier = queryClassifier;
    this.auditService = auditService;
    this.initializeChat();
  }
  initializeChat() {
    const welcomeMessage = {
      id: this.generateId(),
      content: this.currentLang === "it" ? "Ciao! Sono l'assistente AI di base. Posso aiutarti con informazioni generali sull'asilo usando il riconoscimento di parole chiave. Per la privacy dei bambini, non posso accedere a dati individuali. Prova a chiedere 'Quali sono gli orari?' o 'Cosa c'\xE8 nel menu?'" : "Hi! I'm the basic AI assistant. I can help you with general daycare information using keyword detection. For children's privacy, I cannot access individual data. Try asking 'What are the hours?' or 'What's on the menu?'",
      isUser: false,
      timestamp: /* @__PURE__ */ new Date()
    };
    this.messagesSubject.next([welcomeMessage]);
  }
  sendMessage(query) {
    const userMessage = {
      id: this.generateId(),
      content: query,
      isUser: true,
      timestamp: /* @__PURE__ */ new Date()
    };
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, userMessage]);
    const classification = this.queryClassifier.classifyQuery(query);
    if (classification.category === QueryCategory.BLOCKED) {
      return this.handleBlockedQuery(query, classification);
    }
    const request = { query };
    const response$ = this.http.post(`${this.apiUrl}/query`, request);
    response$.subscribe({
      next: (response) => {
        this.auditService.logInteraction({
          query,
          queryCategory: classification.category,
          riskLevel: classification.riskLevel,
          wasBlocked: false,
          responseType: "success",
          dataAccessed: classification.dataCategories,
          consentVerified: true
        }).subscribe();
        const aiMessage = {
          id: this.generateId(),
          content: response.success ? response.response.message : response.message,
          isUser: false,
          timestamp: /* @__PURE__ */ new Date(),
          data: response.success ? response.response.data : null,
          compliance: {
            queryCategory: classification.category,
            wasBlocked: false
          }
        };
        const updatedMessages = this.messagesSubject.value;
        this.messagesSubject.next([...updatedMessages, aiMessage]);
      },
      error: (error) => {
        this.auditService.logInteraction({
          query,
          queryCategory: classification.category,
          riskLevel: classification.riskLevel,
          wasBlocked: false,
          responseType: "error",
          dataAccessed: [],
          consentVerified: true
        }).subscribe();
        const errorMessage = {
          id: this.generateId(),
          content: this.currentLang === "it" ? "Mi dispiace, si \xE8 verificato un errore. Riprova pi\xF9 tardi." : "Sorry, I encountered an error processing your request. Please try again.",
          isUser: false,
          timestamp: /* @__PURE__ */ new Date()
        };
        const updatedMessages = this.messagesSubject.value;
        this.messagesSubject.next([...updatedMessages, errorMessage]);
      }
    });
    return response$;
  }
  handleBlockedQuery(query, classification) {
    this.auditService.logInteraction({
      query,
      queryCategory: classification.category,
      riskLevel: classification.riskLevel,
      wasBlocked: true,
      blockedReason: classification.blockedReason,
      responseType: "blocked",
      dataAccessed: [],
      consentVerified: false
    }).subscribe();
    const blockedMessage = this.queryClassifier.getBlockedResponse(classification, this.currentLang);
    const aiMessage = {
      id: this.generateId(),
      content: blockedMessage,
      isUser: false,
      timestamp: /* @__PURE__ */ new Date(),
      compliance: {
        queryCategory: QueryCategory.BLOCKED,
        wasBlocked: true
      }
    };
    const updatedMessages = this.messagesSubject.value;
    this.messagesSubject.next([...updatedMessages, aiMessage]);
    return of({
      success: false,
      message: blockedMessage
    });
  }
  clearChat() {
    this.initializeChat();
  }
  generateId() {
    return Math.random().toString(36).substring(2, 11);
  }
  /**
   * Get GDPR-safe suggested queries
   */
  getSuggestedQueries() {
    const safeQueries = this.queryClassifier.getSafeQueries();
    return safeQueries.slice(0, 7).map((q) => this.currentLang === "it" ? q.queryIt : q.query);
  }
  /**
   * Set language for responses
   */
  setLanguage(lang) {
    this.currentLang = lang;
  }
  static \u0275fac = function BasicAIService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicAIService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AIQueryClassifierService), \u0275\u0275inject(AIAuditService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BasicAIService, factory: _BasicAIService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicAIService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AIQueryClassifierService }, { type: AIAuditService }], null);
})();

// src/app/features/basic-ai/basic-ai.component.ts
var _c0 = ["messagesContainer"];
var _c1 = (a0, a1) => ({ "user-message": a0, "ai-message": a1 });
function BasicAIComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275text(3, " Data Results: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "pre", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatData(message_r2.data));
  }
}
function BasicAIComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BasicAIComponent_div_11_div_4_Template, 6, 1, "div", 19);
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c1, message_r2.isUser, !message_r2.isUser));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(message_r2.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasData(message_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, message_r2.timestamp, "short"));
  }
}
function BasicAIComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 17)(2, "div", 26);
    \u0275\u0275element(3, "span")(4, "span")(5, "span");
    \u0275\u0275elementEnd()()();
  }
}
function BasicAIComponent_div_13_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function BasicAIComponent_div_13_button_4_Template_button_click_0_listener() {
      const suggestion_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.useSuggestedQuery(suggestion_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const suggestion_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", suggestion_r5, " ");
  }
}
function BasicAIComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2, "Try asking:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275template(4, BasicAIComponent_div_13_button_4_Template, 2, 1, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.suggestedQueries);
  }
}
var BasicAIComponent = class _BasicAIComponent {
  basicAIService;
  messagesContainer;
  messages = [];
  currentQuery = "";
  isLoading = false;
  suggestedQueries = [];
  showSuggestions = true;
  subscription = new Subscription();
  constructor(basicAIService) {
    this.basicAIService = basicAIService;
  }
  ngOnInit() {
    this.subscription.add(this.basicAIService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.showSuggestions = messages.length <= 1;
    }));
    this.suggestedQueries = this.basicAIService.getSuggestedQueries();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  sendMessage() {
    if (!this.currentQuery.trim() || this.isLoading)
      return;
    this.isLoading = true;
    this.showSuggestions = false;
    this.basicAIService.sendMessage(this.currentQuery).subscribe({
      next: () => {
        this.currentQuery = "";
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  useSuggestedQuery(query) {
    this.currentQuery = query;
    this.sendMessage();
  }
  clearChat() {
    this.basicAIService.clearChat();
    this.showSuggestions = true;
  }
  onKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  scrollToBottom() {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error("Error scrolling to bottom:", err);
    }
  }
  formatData(data) {
    if (!data || !Array.isArray(data))
      return "";
    return data.map((item) => {
      const entries = Object.entries(item);
      return entries.map(([key, value]) => {
        const formattedKey = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
        let formattedValue = value;
        if (value instanceof Date || typeof value === "string" && value.includes("T")) {
          formattedValue = new Date(value).toLocaleString();
        }
        return `${formattedKey}: ${formattedValue}`;
      }).join("\n");
    }).join("\n\n");
  }
  hasData(message) {
    return message.data && Array.isArray(message.data) && message.data.length > 0;
  }
  static \u0275fac = function BasicAIComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicAIComponent)(\u0275\u0275directiveInject(BasicAIService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BasicAIComponent, selectors: [["app-basic-ai"]], viewQuery: function BasicAIComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, decls: 19, vars: 6, consts: [["messagesContainer", ""], [1, "ai-assistant-container"], [1, "chat-header"], [1, "header-content"], [1, "bi", "bi-search"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-trash3"], [1, "messages-container"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "message ai-message", 4, "ngIf"], ["class", "suggestions-container", 4, "ngIf"], [1, "input-container"], [1, "input-group"], ["type", "text", "placeholder", "Ask me anything using simple keywords...", 1, "form-control", 3, "ngModelChange", "keypress", "ngModel", "disabled"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "bi", "bi-send-fill"], [1, "message", 3, "ngClass"], [1, "message-content"], [1, "message-text"], ["class", "message-data", 4, "ngIf"], [1, "message-time"], [1, "message-data"], [1, "data-header"], [1, "bi", "bi-table"], [1, "data-content"], [1, "message", "ai-message"], [1, "typing-indicator"], [1, "suggestions-container"], [1, "suggestions-header"], [1, "suggestions-grid"], ["class", "suggestion-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion-btn", 3, "click"]], template: function BasicAIComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementStart(4, "h3");
      \u0275\u0275text(5, "Basic AI (Pattern Matching)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function BasicAIComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearChat());
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7, 0);
      \u0275\u0275template(11, BasicAIComponent_div_11_Template, 8, 10, "div", 8)(12, BasicAIComponent_div_12_Template, 6, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, BasicAIComponent_div_13_Template, 5, 1, "div", 10);
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BasicAIComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentQuery, $event) || (ctx.currentQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keypress", function BasicAIComponent_Template_input_keypress_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyPress($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275listener("click", function BasicAIComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuggestions);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentQuery);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.currentQuery.trim() || ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.ai-assistant-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 800px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 100%);\n  color: white;\n  font-size: 0.85rem;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #00d4ff;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%]   .disclosure-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #00d4ff;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%]   .disclosure-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.9;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .btn-outline-light[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .btn-outline-light[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .privacy-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.15rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .privacy-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.chat-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chat-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.messages-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n}\n.messages-container[_ngcontent-%COMP%]   .message.user-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.messages-container[_ngcontent-%COMP%]   .message.user-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n  max-width: 70%;\n}\n.messages-container[_ngcontent-%COMP%]   .message.ai-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.messages-container[_ngcontent-%COMP%]   .message.ai-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  border: 1px solid #e9ecef;\n  max-width: 80%;\n}\n.messages-container[_ngcontent-%COMP%]   .message.blocked-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border-color: #feb2b2;\n}\n.messages-container[_ngcontent-%COMP%]   .message.disclosure-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4fd 0%,\n      #f0e6ff 100%);\n  border-color: #b8d4e8;\n}\n.messages-container[_ngcontent-%COMP%]   .message.escalation-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .blocked-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .blocked-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .data-header[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .compliance-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #22c55e;\n}\n.messages-container[_ngcontent-%COMP%]   .ai-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #6c757d;\n  animation: _ngcontent-%COMP%_typing 1.4s infinite ease-in-out;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.suggestions-container[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-header[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestion-btn[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestion-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.query-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1.5rem;\n  background: #fffbeb;\n  border-top: 1px solid #fcd34d;\n  color: #92400e;\n  font-size: 0.8rem;\n}\n.query-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.input-container[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 25px;\n  border: 1px solid #dee2e6;\n  padding: 0.75rem 1rem;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.input-container[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.input-container[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.human-contact-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.human-contact-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.human-contact-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BasicAIComponent, [{
    type: Component,
    args: [{ selector: "app-basic-ai", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div class="ai-assistant-container">
      <div class="chat-header">
        <div class="header-content">
          <i class="bi bi-search"></i>
          <h3>Basic AI (Pattern Matching)</h3>
        </div>
        <button class="btn btn-sm btn-outline-secondary" (click)="clearChat()">
          <i class="bi bi-trash3"></i> Clear
        </button>
      </div>

      <div class="messages-container" #messagesContainer>
        <div *ngFor="let message of messages" class="message" [ngClass]="{'user-message': message.isUser, 'ai-message': !message.isUser}">
          <div class="message-content">
            <div class="message-text">{{ message.content }}</div>
            <div *ngIf="hasData(message)" class="message-data">
              <div class="data-header">
                <i class="bi bi-table"></i> Data Results:
              </div>
              <pre class="data-content">{{ formatData(message.data) }}</pre>
            </div>
            <div class="message-time">{{ message.timestamp | date:'short' }}</div>
          </div>
        </div>

        <div *ngIf="isLoading" class="message ai-message">
          <div class="message-content">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div *ngIf="showSuggestions" class="suggestions-container">
        <div class="suggestions-header">Try asking:</div>
        <div class="suggestions-grid">
          <button 
            *ngFor="let suggestion of suggestedQueries" 
            class="suggestion-btn"
            (click)="useSuggestedQuery(suggestion)">
            {{ suggestion }}
          </button>
        </div>
      </div>

      <div class="input-container">
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            [(ngModel)]="currentQuery"
            (keypress)="onKeyPress($event)"
            placeholder="Ask me anything using simple keywords..."
            [disabled]="isLoading">
          <button 
            class="btn btn-success" 
            (click)="sendMessage()"
            [disabled]="!currentQuery.trim() || isLoading">
            <i class="bi bi-send-fill"></i>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* src/app/features/ai-assistant/ai-assistant.component.scss */\n.ai-assistant-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 800px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ai-disclosure-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 100%);\n  color: white;\n  font-size: 0.85rem;\n}\n.ai-disclosure-banner .disclosure-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.ai-disclosure-banner .disclosure-icon i {\n  font-size: 1rem;\n  color: #00d4ff;\n}\n.ai-disclosure-banner .disclosure-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.ai-disclosure-banner .disclosure-content .disclosure-label {\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #00d4ff;\n}\n.ai-disclosure-banner .disclosure-content .disclosure-text {\n  font-size: 0.8rem;\n  opacity: 0.9;\n}\n.ai-disclosure-banner .btn-outline-light {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ai-disclosure-banner .btn-outline-light:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.chat-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chat-header .header-content i {\n  font-size: 1.2rem;\n}\n.chat-header .header-content h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.chat-header .header-content .privacy-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.15rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chat-header .header-content .privacy-badge i {\n  font-size: 0.7rem;\n}\n.chat-header button {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chat-header button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.messages-container .message {\n  margin-bottom: 1rem;\n  display: flex;\n}\n.messages-container .message.user-message {\n  justify-content: flex-end;\n}\n.messages-container .message.user-message .message-content {\n  background: #007bff;\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n  max-width: 70%;\n}\n.messages-container .message.ai-message {\n  justify-content: flex-start;\n}\n.messages-container .message.ai-message .message-content {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  border: 1px solid #e9ecef;\n  max-width: 80%;\n}\n.messages-container .message.blocked-message .message-content {\n  background: #fff5f5;\n  border-color: #feb2b2;\n}\n.messages-container .message.disclosure-message .message-content {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4fd 0%,\n      #f0e6ff 100%);\n  border-color: #b8d4e8;\n}\n.messages-container .message.escalation-message .message-content {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.messages-container .message-content {\n  padding: 0.75rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.messages-container .message-content .blocked-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.messages-container .message-content .blocked-indicator i {\n  font-size: 1rem;\n}\n.messages-container .message-content .message-text {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.messages-container .message-content .message-data {\n  margin-top: 0.75rem;\n}\n.messages-container .message-content .message-data .data-header {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.messages-container .message-content .message-data .data-content {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n}\n.messages-container .message-content .message-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.messages-container .message-content .message-footer .message-time {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.messages-container .message-content .message-footer .compliance-badge {\n  font-size: 0.7rem;\n  color: #22c55e;\n}\n.messages-container .ai-message .message-content .message-footer .message-time {\n  color: #6c757d;\n}\n.typing-indicator {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.typing-indicator span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #6c757d;\n  animation: typing 1.4s infinite ease-in-out;\n}\n.typing-indicator span:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.typing-indicator span:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes typing {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.suggestions-container {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.suggestions-container .suggestions-header {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.suggestions-container .suggestions-header i {\n  color: #f59e0b;\n}\n.suggestions-container .suggestions-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.suggestions-container .suggestion-btn {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestions-container .suggestion-btn:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.query-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1.5rem;\n  background: #fffbeb;\n  border-top: 1px solid #fcd34d;\n  color: #92400e;\n  font-size: 0.8rem;\n}\n.query-warning i {\n  color: #f59e0b;\n}\n.input-container {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.input-container .input-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.input-container .input-group .form-control {\n  flex: 1;\n  border-radius: 25px;\n  border: 1px solid #dee2e6;\n  padding: 0.75rem 1rem;\n}\n.input-container .input-group .form-control:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-container .input-group .btn {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-container .input-group .btn:disabled {\n  opacity: 0.6;\n}\n.input-container .input-hint {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.input-container .input-hint i {\n  color: #9ca3af;\n}\n.human-contact-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.human-contact-footer a {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.human-contact-footer a:hover {\n  text-decoration: underline;\n}\n.messages-container::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.messages-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.messages-container::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */\n"] }]
  }], () => [{ type: BasicAIService }], { messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BasicAIComponent, { className: "BasicAIComponent", filePath: "src/app/features/basic-ai/basic-ai.component.ts", lineNumber: 81 });
})();
export {
  BasicAIComponent
};
//# sourceMappingURL=chunk-XXTUQJ7L.js.map
