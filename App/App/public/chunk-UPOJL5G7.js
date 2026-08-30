import {
  AIAuditService,
  AIQueryClassifierService,
  QueryCategory
} from "./chunk-HZ4EIS7H.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-NEGRQ2LF.js";
import "./chunk-2FXTNIWG.js";
import {
  DomSanitizer
} from "./chunk-MW573DHT.js";
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
  Subject,
  Subscription,
  ViewChild,
  catchError,
  debounceTime,
  map,
  of,
  setClassMetadata,
  tap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
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

// src/app/core/services/ai-assistant.service.ts
var AIAssistantService = class _AIAssistantService {
  http;
  queryClassifier;
  auditService;
  apiUrl = `${environment.apiUrl}/AIAssistant`;
  messagesSubject = new BehaviorSubject([]);
  messages$ = this.messagesSubject.asObservable();
  // AI Disclosure configuration (EU AI Act compliance)
  disclosureConfig = {
    enabled: true,
    message: {
      en: "\u{1F916} AI Assistant | You are interacting with an artificial intelligence system. This AI cannot access individual child data. For personal assistance, contact the daycare administration.",
      it: "\u{1F916} Assistente AI | Stai interagendo con un sistema di intelligenza artificiale. Questa AI non pu\xF2 accedere ai dati individuali dei bambini. Per assistenza personale, contatta l'amministrazione dell'asilo."
    },
    humanContact: {
      email: "support@miniminds.it",
      phone: "+39 051 000 0000"
    },
    showOnEveryMessage: false,
    requireAcknowledgment: false
  };
  // Current language (can be updated based on user preference)
  currentLang = "it";
  constructor(http, queryClassifier, auditService) {
    this.http = http;
    this.queryClassifier = queryClassifier;
    this.auditService = auditService;
    this.initializeChat();
  }
  /**
   * Set the current language for AI responses
   */
  setLanguage(lang) {
    this.currentLang = lang;
  }
  /**
   * Get the AI disclosure configuration
   */
  getDisclosureConfig() {
    return this.disclosureConfig;
  }
  /**
   * Get the current disclosure message
   */
  getDisclosureMessage() {
    return this.disclosureConfig.message[this.currentLang];
  }
  initializeChat() {
    const welcomeMessage = {
      id: this.generateId(),
      content: this.currentLang === "it" ? "Ciao! Sono il tuo assistente AI per MiniMinds. Posso aiutarti con informazioni generali sull'asilo, orari, procedure e domande frequenti. Per la privacy dei bambini, non posso accedere a dati individuali - per queste informazioni, consulta direttamente le sezioni dell'app o contatta gli educatori." : "Hi! I'm your MiniMinds AI assistant. I can help you with general daycare information, schedules, procedures, and FAQs. For children's privacy, I cannot access individual data - for this information, please check the app sections directly or contact the teachers.",
      isUser: false,
      timestamp: /* @__PURE__ */ new Date(),
      isDisclosure: true
    };
    this.messagesSubject.next([welcomeMessage]);
  }
  /**
   * Send a message with full compliance checking
   */
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
    const basicResponse = this.handleBasicQueries(query);
    if (basicResponse) {
      return this.handleSafeResponse(query, basicResponse, classification);
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
  /**
   * Handle a blocked query (GDPR compliance)
   */
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
  /**
   * Handle a safe response (basic queries)
   */
  handleSafeResponse(query, response, classification) {
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
      content: response,
      isUser: false,
      timestamp: /* @__PURE__ */ new Date(),
      compliance: {
        queryCategory: classification.category,
        wasBlocked: false
      }
    };
    const updatedMessages = this.messagesSubject.value;
    this.messagesSubject.next([...updatedMessages, aiMessage]);
    return of({ success: true, response: { message: response } });
  }
  /**
   * Request human assistance (EU AI Act compliance)
   */
  requestHumanAssistance(originalQuery, reason) {
    return this.auditService.requestHumanEscalation({
      originalQuery,
      reason: reason || "User requested human assistance",
      priority: "medium",
      contactPreference: "app"
    }).pipe(tap(() => {
      const escalationMessage = {
        id: this.generateId(),
        content: this.currentLang === "it" ? `\u2705 La tua richiesta di assistenza \xE8 stata inviata.

\u{1F4E7} Email: ${this.disclosureConfig.humanContact.email}
\u{1F4DE} Telefono: ${this.disclosureConfig.humanContact.phone}

Un operatore ti contatter\xE0 il prima possibile.` : `\u2705 Your assistance request has been submitted.

\u{1F4E7} Email: ${this.disclosureConfig.humanContact.email}
\u{1F4DE} Phone: ${this.disclosureConfig.humanContact.phone}

An operator will contact you as soon as possible.`,
        isUser: false,
        timestamp: /* @__PURE__ */ new Date(),
        isEscalation: true
      };
      const updatedMessages = this.messagesSubject.value;
      this.messagesSubject.next([...updatedMessages, escalationMessage]);
    }), map((response) => ({
      success: true,
      message: response.message
    })), catchError(() => {
      return of({
        success: false,
        message: this.currentLang === "it" ? "Si \xE8 verificato un errore. Contatta direttamente support@miniminds.it" : "An error occurred. Please contact support@miniminds.it directly"
      });
    }));
  }
  clearChat() {
    this.initializeChat();
  }
  generateId() {
    return Math.random().toString(36).substring(2, 11);
  }
  handleBasicQueries(query) {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery.match(/^(hello|hi|hey)$/)) {
      return "Hello! How can I help you with your daycare today?";
    }
    if (lowerQuery.match(/^(thank you|thanks)$/)) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    if (lowerQuery.match(/^(bye|goodbye)$/)) {
      return "Goodbye! Have a great day at the daycare!";
    }
    return null;
  }
  /**
   * Get safe suggested queries (GDPR compliant)
   */
  getSuggestedQueries() {
    const safeQueries = this.queryClassifier.getSafeQueries();
    return safeQueries.map((q) => this.currentLang === "it" ? q.queryIt : q.query);
  }
  /**
   * Get safe queries with full metadata
   */
  getSafeQueriesWithMetadata() {
    return this.queryClassifier.getSafeQueries();
  }
  /**
   * Check if a query would be blocked before sending
   */
  preCheckQuery(query) {
    return this.queryClassifier.classifyQuery(query);
  }
  /**
   * Get human contact information
   */
  getHumanContactInfo() {
    return this.disclosureConfig.humanContact;
  }
  static \u0275fac = function AIAssistantService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIAssistantService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AIQueryClassifierService), \u0275\u0275inject(AIAuditService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIAssistantService, factory: _AIAssistantService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAssistantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AIQueryClassifierService }, { type: AIAuditService }], null);
})();

// src/app/features/ai-assistant/ai-assistant.component.ts
var _c0 = ["messagesContainer"];
var _c1 = (a0, a1, a2, a3, a4) => ({ "user-message": a0, "ai-message": a1, "blocked-message": a2, "disclosure-message": a3, "escalation-message": a4 });
function AIAssistantComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Richiesta bloccata per privacy");
    \u0275\u0275elementEnd()();
  }
}
function AIAssistantComponent_div_26_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275text(3, " Risultati: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "pre", 48);
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
function AIAssistantComponent_div_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementEnd();
  }
}
function AIAssistantComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275template(2, AIAssistantComponent_div_26_div_2_Template, 4, 0, "div", 37);
    \u0275\u0275element(3, "div", 38);
    \u0275\u0275template(4, AIAssistantComponent_div_26_div_4_Template, 6, 1, "div", 39);
    \u0275\u0275elementStart(5, "div", 40)(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AIAssistantComponent_div_26_span_9_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(9, _c1, message_r2.isUser, !message_r2.isUser, message_r2.compliance == null ? null : message_r2.compliance.wasBlocked, message_r2.isDisclosure, message_r2.isEscalation));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r2.compliance == null ? null : message_r2.compliance.wasBlocked);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.formatMessageText(message_r2.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasData(message_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 6, message_r2.timestamp, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", message_r2.compliance && !message_r2.isUser);
  }
}
function AIAssistantComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 36)(2, "div", 52);
    \u0275\u0275element(3, "span")(4, "span")(5, "span");
    \u0275\u0275elementEnd()()();
  }
}
function AIAssistantComponent_div_28_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function AIAssistantComponent_div_28_button_5_Template_button_click_0_listener() {
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
function AIAssistantComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275text(3, " Prova a chiedere: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275template(5, AIAssistantComponent_div_28_button_5_Template, 2, 1, "button", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.suggestedQueries);
  }
}
function AIAssistantComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.queryWarning);
  }
}
function AIAssistantComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "|");
    \u0275\u0275elementEnd();
  }
}
function AIAssistantComponent_a_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", \u0275\u0275interpolate1("tel:", ctx_r2.humanContact.phone), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.humanContact.phone, " ");
  }
}
var AIAssistantComponent = class _AIAssistantComponent {
  aiService;
  sanitizer;
  messagesContainer;
  messages = [];
  currentQuery = "";
  isLoading = false;
  suggestedQueries = [];
  showSuggestions = true;
  // Compliance features
  queryWarning = null;
  humanContact = { email: "support@miniminds.it" };
  subscription = new Subscription();
  queryCheck$ = new Subject();
  constructor(aiService, sanitizer) {
    this.aiService = aiService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.subscription.add(this.aiService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.showSuggestions = messages.length <= 1;
    }));
    this.suggestedQueries = this.aiService.getSuggestedQueries();
    this.humanContact = this.aiService.getHumanContactInfo();
    this.subscription.add(this.queryCheck$.pipe(debounceTime(300)).subscribe((query) => {
      this.checkQuerySafety(query);
    }));
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Send message with compliance checking
   */
  sendMessage() {
    if (!this.currentQuery.trim() || this.isLoading)
      return;
    this.isLoading = true;
    this.showSuggestions = false;
    this.queryWarning = null;
    this.aiService.sendMessage(this.currentQuery).subscribe({
      next: () => {
        this.currentQuery = "";
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  /**
   * Use a suggested query (all pre-verified as safe)
   */
  useSuggestedQuery(query) {
    this.currentQuery = query;
    this.queryWarning = null;
    this.sendMessage();
  }
  /**
   * Clear chat and reset
   */
  clearChat() {
    this.aiService.clearChat();
    this.showSuggestions = true;
    this.queryWarning = null;
  }
  /**
   * Handle query input changes - pre-check for warnings
   */
  onQueryChange() {
    if (this.currentQuery.trim()) {
      this.queryCheck$.next(this.currentQuery);
    } else {
      this.queryWarning = null;
    }
  }
  /**
   * Handle Enter key press
   */
  onKeyPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  /**
   * Request human assistance (EU AI Act compliance)
   */
  requestHumanHelp() {
    this.aiService.requestHumanAssistance(this.currentQuery || "Richiesta assistenza generale", "Utente ha richiesto assistenza umana").subscribe();
  }
  /**
   * Pre-check query safety and show warning if needed
   */
  checkQuerySafety(query) {
    const classification = this.aiService.preCheckQuery(query);
    if (classification.category === QueryCategory.BLOCKED) {
      this.queryWarning = "Questa domanda potrebbe riguardare dati individuali dei bambini e verr\xE0 bloccata per privacy.";
    } else if (classification.category === QueryCategory.INDIVIDUAL) {
      this.queryWarning = "Questa domanda richiede accesso a dati individuali - potrebbe richiedere consenso.";
    } else {
      this.queryWarning = null;
    }
  }
  /**
   * Scroll to bottom of messages
   */
  scrollToBottom() {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error("Error scrolling to bottom:", err);
    }
  }
  /**
   * Format message text with line breaks preserved
   */
  formatMessageText(content) {
    const formatted = content.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
  /**
   * Format data for display
   */
  formatData(data) {
    if (!data || !Array.isArray(data))
      return "";
    return data.map((item) => {
      const entries = Object.entries(item);
      return entries.map(([key, value]) => {
        const formattedKey = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
        let formattedValue = value;
        if (value instanceof Date || typeof value === "string" && value.includes("T")) {
          formattedValue = new Date(value).toLocaleString("it-IT");
        }
        return `${formattedKey}: ${formattedValue}`;
      }).join("\n");
    }).join("\n\n");
  }
  /**
   * Check if message has data
   */
  hasData(message) {
    return message.data && Array.isArray(message.data) && message.data.length > 0;
  }
  static \u0275fac = function AIAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIAssistantComponent)(\u0275\u0275directiveInject(AIAssistantService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIAssistantComponent, selectors: [["app-ai-assistant"]], viewQuery: function AIAssistantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, decls: 46, vars: 12, consts: [["messagesContainer", ""], [1, "ai-assistant-container"], [1, "ai-disclosure-banner"], [1, "disclosure-icon"], [1, "bi", "bi-robot"], [1, "disclosure-content"], [1, "disclosure-label"], [1, "disclosure-text"], ["title", "Parla con un operatore", 1, "btn", "btn-sm", "btn-outline-light", 3, "click"], [1, "bi", "bi-person-fill"], [1, "d-none", "d-md-inline"], [1, "chat-header"], [1, "header-content"], [1, "bi", "bi-chat-dots"], ["title", "I dati dei bambini sono protetti", 1, "privacy-badge"], [1, "bi", "bi-shield-check"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-trash3"], [1, "messages-container"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "message ai-message", 4, "ngIf"], ["class", "suggestions-container", 4, "ngIf"], ["class", "query-warning", 4, "ngIf"], [1, "input-container"], [1, "input-group"], ["type", "text", "placeholder", "Chiedi informazioni generali sull'asilo...", 1, "form-control", 3, "ngModelChange", "keypress", "input", "ngModel", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-send-fill"], [1, "input-hint"], [1, "bi", "bi-info-circle"], [1, "human-contact-footer"], [3, "href"], [1, "bi", "bi-envelope"], [4, "ngIf"], [3, "href", 4, "ngIf"], [1, "message", 3, "ngClass"], [1, "message-content"], ["class", "blocked-indicator", 4, "ngIf"], [1, "message-text", 3, "innerHTML"], ["class", "message-data", 4, "ngIf"], [1, "message-footer"], [1, "message-time"], ["class", "compliance-badge", 4, "ngIf"], [1, "blocked-indicator"], [1, "bi", "bi-shield-lock"], [1, "message-data"], [1, "data-header"], [1, "bi", "bi-table"], [1, "data-content"], [1, "compliance-badge"], [1, "bi", "bi-check-circle"], [1, "message", "ai-message"], [1, "typing-indicator"], [1, "suggestions-container"], [1, "suggestions-header"], [1, "bi", "bi-lightbulb"], [1, "suggestions-grid"], ["class", "suggestion-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion-btn", 3, "click"], [1, "query-warning"], [1, "bi", "bi-exclamation-triangle"], [1, "bi", "bi-telephone"]], template: function AIAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "span", 6);
      \u0275\u0275text(6, "Assistente AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "Stai interagendo con un'intelligenza artificiale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 8);
      \u0275\u0275listener("click", function AIAssistantComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestHumanHelp());
      });
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementStart(11, "span", 10);
      \u0275\u0275text(12, "Assistenza Umana");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementStart(16, "h3");
      \u0275\u0275text(17, "MiniMinds Assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275text(20, " GDPR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 16);
      \u0275\u0275listener("click", function AIAssistantComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearChat());
      });
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23, " Cancella ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 18, 0);
      \u0275\u0275template(26, AIAssistantComponent_div_26_Template, 10, 15, "div", 19)(27, AIAssistantComponent_div_27_Template, 6, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, AIAssistantComponent_div_28_Template, 6, 1, "div", 21)(29, AIAssistantComponent_div_29_Template, 4, 1, "div", 22);
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 24)(32, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AIAssistantComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.currentQuery, $event) || (ctx.currentQuery = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keypress", function AIAssistantComponent_Template_input_keypress_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyPress($event));
      })("input", function AIAssistantComponent_Template_input_input_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onQueryChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 26);
      \u0275\u0275listener("click", function AIAssistantComponent_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.sendMessage());
      });
      \u0275\u0275element(34, "i", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 28);
      \u0275\u0275element(36, "i", 29);
      \u0275\u0275text(37, " Per privacy, non posso accedere a dati individuali dei bambini ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 30)(39, "span");
      \u0275\u0275text(40, "Hai bisogno di assistenza personale?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 31);
      \u0275\u0275element(42, "i", 32);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, AIAssistantComponent_span_44_Template, 2, 0, "span", 33)(45, AIAssistantComponent_a_45_Template, 3, 3, "a", 34);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275property("ngForOf", ctx.messages);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuggestions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.queryWarning);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.currentQuery);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.currentQuery.trim() || ctx.isLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("href", \u0275\u0275interpolate1("mailto:", ctx.humanContact.email), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.humanContact.email, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.humanContact.phone);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.humanContact.phone);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.ai-assistant-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 800px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 100%);\n  color: white;\n  font-size: 0.85rem;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #00d4ff;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%]   .disclosure-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #00d4ff;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .disclosure-content[_ngcontent-%COMP%]   .disclosure-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.9;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .btn-outline-light[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ai-disclosure-banner[_ngcontent-%COMP%]   .btn-outline-light[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .privacy-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.15rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chat-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .privacy-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.chat-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chat-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.messages-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n}\n.messages-container[_ngcontent-%COMP%]   .message.user-message[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.messages-container[_ngcontent-%COMP%]   .message.user-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n  max-width: 70%;\n}\n.messages-container[_ngcontent-%COMP%]   .message.ai-message[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.messages-container[_ngcontent-%COMP%]   .message.ai-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  border: 1px solid #e9ecef;\n  max-width: 80%;\n}\n.messages-container[_ngcontent-%COMP%]   .message.blocked-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border-color: #feb2b2;\n}\n.messages-container[_ngcontent-%COMP%]   .message.disclosure-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4fd 0%,\n      #f0e6ff 100%);\n  border-color: #b8d4e8;\n}\n.messages-container[_ngcontent-%COMP%]   .message.escalation-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .blocked-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .blocked-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .data-header[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-data[_ngcontent-%COMP%]   .data-content[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.messages-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .compliance-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #22c55e;\n}\n.messages-container[_ngcontent-%COMP%]   .ai-message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-footer[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #6c757d;\n  animation: _ngcontent-%COMP%_typing 1.4s infinite ease-in-out;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.suggestions-container[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-header[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestion-btn[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestions-container[_ngcontent-%COMP%]   .suggestion-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.query-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1.5rem;\n  background: #fffbeb;\n  border-top: 1px solid #fcd34d;\n  color: #92400e;\n  font-size: 0.8rem;\n}\n.query-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.input-container[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 25px;\n  border: 1px solid #dee2e6;\n  padding: 0.75rem 1rem;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-container[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.input-container[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.input-container[_ngcontent-%COMP%]   .input-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.human-contact-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.human-contact-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.human-contact-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.messages-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAssistantComponent, [{
    type: Component,
    args: [{ selector: "app-ai-assistant", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="ai-assistant-container">\r
  <!-- EU AI Act Compliance: Disclosure Banner -->\r
  <div class="ai-disclosure-banner">\r
    <div class="disclosure-icon">\r
      <i class="bi bi-robot"></i>\r
    </div>\r
    <div class="disclosure-content">\r
      <span class="disclosure-label">Assistente AI</span>\r
      <span class="disclosure-text">Stai interagendo con un'intelligenza artificiale</span>\r
    </div>\r
    <button class="btn btn-sm btn-outline-light" (click)="requestHumanHelp()" title="Parla con un operatore">\r
      <i class="bi bi-person-fill"></i>\r
      <span class="d-none d-md-inline">Assistenza Umana</span>\r
    </button>\r
  </div>\r
\r
  <div class="chat-header">\r
    <div class="header-content">\r
      <i class="bi bi-chat-dots"></i>\r
      <h3>MiniMinds Assistant</h3>\r
      <span class="privacy-badge" title="I dati dei bambini sono protetti">\r
        <i class="bi bi-shield-check"></i>\r
        GDPR\r
      </span>\r
    </div>\r
    <button class="btn btn-sm btn-outline-secondary" (click)="clearChat()">\r
      <i class="bi bi-trash3"></i> Cancella\r
    </button>\r
  </div>\r
\r
  <div class="messages-container" #messagesContainer>\r
    <!-- Messages -->\r
    <div *ngFor="let message of messages"\r
         class="message"\r
         [ngClass]="{\r
           'user-message': message.isUser,\r
           'ai-message': !message.isUser,\r
           'blocked-message': message.compliance?.wasBlocked,\r
           'disclosure-message': message.isDisclosure,\r
           'escalation-message': message.isEscalation\r
         }">\r
      <div class="message-content">\r
        <!-- Blocked indicator -->\r
        <div *ngIf="message.compliance?.wasBlocked" class="blocked-indicator">\r
          <i class="bi bi-shield-lock"></i>\r
          <span>Richiesta bloccata per privacy</span>\r
        </div>\r
\r
        <!-- Message text with preserved line breaks -->\r
        <div class="message-text" [innerHTML]="formatMessageText(message.content)"></div>\r
\r
        <!-- Data results -->\r
        <div *ngIf="hasData(message)" class="message-data">\r
          <div class="data-header">\r
            <i class="bi bi-table"></i> Risultati:\r
          </div>\r
          <pre class="data-content">{{ formatData(message.data) }}</pre>\r
        </div>\r
\r
        <!-- Message metadata -->\r
        <div class="message-footer">\r
          <span class="message-time">{{ message.timestamp | date:'short' }}</span>\r
          <span *ngIf="message.compliance && !message.isUser" class="compliance-badge">\r
            <i class="bi bi-check-circle"></i>\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Loading indicator -->\r
    <div *ngIf="isLoading" class="message ai-message">\r
      <div class="message-content">\r
        <div class="typing-indicator">\r
          <span></span>\r
          <span></span>\r
          <span></span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Suggestions (GDPR-safe queries only) -->\r
  <div *ngIf="showSuggestions" class="suggestions-container">\r
    <div class="suggestions-header">\r
      <i class="bi bi-lightbulb"></i>\r
      Prova a chiedere:\r
    </div>\r
    <div class="suggestions-grid">\r
      <button\r
        *ngFor="let suggestion of suggestedQueries"\r
        class="suggestion-btn"\r
        (click)="useSuggestedQuery(suggestion)">\r
        {{ suggestion }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Query pre-check warning -->\r
  <div *ngIf="queryWarning" class="query-warning">\r
    <i class="bi bi-exclamation-triangle"></i>\r
    <span>{{ queryWarning }}</span>\r
  </div>\r
\r
  <!-- Input area -->\r
  <div class="input-container">\r
    <div class="input-group">\r
      <input\r
        type="text"\r
        class="form-control"\r
        [(ngModel)]="currentQuery"\r
        (keypress)="onKeyPress($event)"\r
        (input)="onQueryChange()"\r
        placeholder="Chiedi informazioni generali sull'asilo..."\r
        [disabled]="isLoading">\r
      <button\r
        class="btn btn-primary"\r
        (click)="sendMessage()"\r
        [disabled]="!currentQuery.trim() || isLoading">\r
        <i class="bi bi-send-fill"></i>\r
      </button>\r
    </div>\r
    <div class="input-hint">\r
      <i class="bi bi-info-circle"></i>\r
      Per privacy, non posso accedere a dati individuali dei bambini\r
    </div>\r
  </div>\r
\r
  <!-- Human contact footer -->\r
  <div class="human-contact-footer">\r
    <span>Hai bisogno di assistenza personale?</span>\r
    <a href="mailto:{{ humanContact.email }}">\r
      <i class="bi bi-envelope"></i> {{ humanContact.email }}\r
    </a>\r
    <span *ngIf="humanContact.phone">|</span>\r
    <a *ngIf="humanContact.phone" href="tel:{{ humanContact.phone }}">\r
      <i class="bi bi-telephone"></i> {{ humanContact.phone }}\r
    </a>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/ai-assistant/ai-assistant.component.scss */\n.ai-assistant-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 800px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.ai-disclosure-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 100%);\n  color: white;\n  font-size: 0.85rem;\n}\n.ai-disclosure-banner .disclosure-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 50%;\n}\n.ai-disclosure-banner .disclosure-icon i {\n  font-size: 1rem;\n  color: #00d4ff;\n}\n.ai-disclosure-banner .disclosure-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.ai-disclosure-banner .disclosure-content .disclosure-label {\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #00d4ff;\n}\n.ai-disclosure-banner .disclosure-content .disclosure-text {\n  font-size: 0.8rem;\n  opacity: 0.9;\n}\n.ai-disclosure-banner .btn-outline-light {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.ai-disclosure-banner .btn-outline-light:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.chat-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.chat-header .header-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.chat-header .header-content i {\n  font-size: 1.2rem;\n}\n.chat-header .header-content h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.chat-header .header-content .privacy-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.15rem 0.5rem;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.chat-header .header-content .privacy-badge i {\n  font-size: 0.7rem;\n}\n.chat-header button {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.chat-header button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.messages-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #f8f9fa;\n}\n.messages-container .message {\n  margin-bottom: 1rem;\n  display: flex;\n}\n.messages-container .message.user-message {\n  justify-content: flex-end;\n}\n.messages-container .message.user-message .message-content {\n  background: #007bff;\n  color: white;\n  border-radius: 18px 18px 4px 18px;\n  max-width: 70%;\n}\n.messages-container .message.ai-message {\n  justify-content: flex-start;\n}\n.messages-container .message.ai-message .message-content {\n  background: white;\n  color: #333;\n  border-radius: 18px 18px 18px 4px;\n  border: 1px solid #e9ecef;\n  max-width: 80%;\n}\n.messages-container .message.blocked-message .message-content {\n  background: #fff5f5;\n  border-color: #feb2b2;\n}\n.messages-container .message.disclosure-message .message-content {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4fd 0%,\n      #f0e6ff 100%);\n  border-color: #b8d4e8;\n}\n.messages-container .message.escalation-message .message-content {\n  background: #f0fdf4;\n  border-color: #86efac;\n}\n.messages-container .message-content {\n  padding: 0.75rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.messages-container .message-content .blocked-indicator {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.messages-container .message-content .blocked-indicator i {\n  font-size: 1rem;\n}\n.messages-container .message-content .message-text {\n  margin-bottom: 0.5rem;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.messages-container .message-content .message-data {\n  margin-top: 0.75rem;\n}\n.messages-container .message-content .message-data .data-header {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.messages-container .message-content .message-data .data-content {\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  max-height: 200px;\n  overflow-y: auto;\n  margin: 0;\n}\n.messages-container .message-content .message-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.25rem;\n}\n.messages-container .message-content .message-footer .message-time {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.messages-container .message-content .message-footer .compliance-badge {\n  font-size: 0.7rem;\n  color: #22c55e;\n}\n.messages-container .ai-message .message-content .message-footer .message-time {\n  color: #6c757d;\n}\n.typing-indicator {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.typing-indicator span {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #6c757d;\n  animation: typing 1.4s infinite ease-in-out;\n}\n.typing-indicator span:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.typing-indicator span:nth-child(2) {\n  animation-delay: -0.16s;\n}\n@keyframes typing {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.suggestions-container {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.suggestions-container .suggestions-header {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.suggestions-container .suggestions-header i {\n  color: #f59e0b;\n}\n.suggestions-container .suggestions-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.suggestions-container .suggestion-btn {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 20px;\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.suggestions-container .suggestion-btn:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.query-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1.5rem;\n  background: #fffbeb;\n  border-top: 1px solid #fcd34d;\n  color: #92400e;\n  font-size: 0.8rem;\n}\n.query-warning i {\n  color: #f59e0b;\n}\n.input-container {\n  padding: 1rem 1.5rem;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n.input-container .input-group {\n  display: flex;\n  gap: 0.5rem;\n}\n.input-container .input-group .form-control {\n  flex: 1;\n  border-radius: 25px;\n  border: 1px solid #dee2e6;\n  padding: 0.75rem 1rem;\n}\n.input-container .input-group .form-control:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-container .input-group .btn {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.input-container .input-group .btn:disabled {\n  opacity: 0.6;\n}\n.input-container .input-hint {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.input-container .input-hint i {\n  color: #9ca3af;\n}\n.human-contact-footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: #f3f4f6;\n  border-top: 1px solid #e5e7eb;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.human-contact-footer a {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #4f46e5;\n  text-decoration: none;\n}\n.human-contact-footer a:hover {\n  text-decoration: underline;\n}\n.messages-container::-webkit-scrollbar {\n  width: 6px;\n}\n.messages-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.messages-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.messages-container::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */\n"] }]
  }], () => [{ type: AIAssistantService }, { type: DomSanitizer }], { messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIAssistantComponent, { className: "AIAssistantComponent", filePath: "src/app/features/ai-assistant/ai-assistant.component.ts", lineNumber: 26 });
})();
export {
  AIAssistantComponent
};
//# sourceMappingURL=chunk-UPOJL5G7.js.map
