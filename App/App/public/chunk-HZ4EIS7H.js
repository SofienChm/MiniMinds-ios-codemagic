import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  environment
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/interfaces/ai-compliance.interface.ts
var QueryCategory;
(function(QueryCategory2) {
  QueryCategory2["SAFE"] = "safe";
  QueryCategory2["AGGREGATE"] = "aggregate";
  QueryCategory2["INDIVIDUAL"] = "individual";
  QueryCategory2["BLOCKED"] = "blocked";
})(QueryCategory || (QueryCategory = {}));
var AIRiskLevel;
(function(AIRiskLevel2) {
  AIRiskLevel2["MINIMAL"] = "minimal";
  AIRiskLevel2["LOW"] = "low";
  AIRiskLevel2["HIGH"] = "high";
  AIRiskLevel2["PROHIBITED"] = "prohibited";
})(AIRiskLevel || (AIRiskLevel = {}));

// src/app/core/services/ai-query-classifier.service.ts
var AIQueryClassifierService = class _AIQueryClassifierService {
  // Patterns that indicate queries about specific children (BLOCKED)
  individualChildPatterns = [
    {
      pattern: /\b(which|what|who)\s+(child|children|kid|kids)\s+(has|have|had|need|needs)\s+(allerg|medication|special need|disabilit)/i,
      reason: "Query requests individual child health/medical information",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "For allergy information, please check directly with your child's teacher or the administration."
    },
    {
      pattern: /\b(show|list|get|display)\s+(me\s+)?(child|children|kid|kids)('s|s')?\s+(emergency|contact|parent|guardian)/i,
      reason: "Query requests individual child contact information",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Contact information is available in the parent portal under your child's profile."
    },
    {
      pattern: /\b(what|how)\s+(did|does|is|was)\s+(\w+)\s+(eat|do|behave|perform|sleep|nap)/i,
      reason: "Query requests individual child activity/behavior data",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Daily activity reports for your child are available in the Activities section."
    },
    {
      pattern: /\b(incident|accident|injury|hurt)\s+(report|for|about)/i,
      reason: "Query requests sensitive incident information",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Incident reports are confidential. Please contact administration directly."
    },
    {
      pattern: /\b(diaper|toilet|potty)\s+(change|training|need)/i,
      reason: "Query requests individual child care information",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Care schedules are managed by teachers. Check your child's daily report."
    },
    {
      pattern: /\b(analyze|assess|evaluate|compare|rank)\s+(child|children|kid|kids|student|students)/i,
      reason: "Query attempts to profile or compare children",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Child assessments are not available through AI. Please speak with teachers directly."
    },
    {
      pattern: /\b(photo|picture|image)\s+(of|with|showing)\s+(child|children|kid|kids)/i,
      reason: "Query requests child photos",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Photos are available in the Gallery section with appropriate permissions."
    },
    {
      pattern: /\bchild(ren)?('s)?\s+(by|grouped by|sorted by|list by)\s+(age|group|class)/i,
      reason: "Query requests child categorization data",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Class rosters are available to teachers in the Classes section."
    },
    {
      pattern: /\b(medication|medicine|drug)\s+(given|administered|schedule)/i,
      reason: "Query requests medication information",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Medication records are confidential. Contact administration for this information."
    },
    {
      pattern: /\bstaff\s+schedule/i,
      reason: "Query requests staff personal schedule data",
      category: QueryCategory.BLOCKED,
      suggestedAlternative: "Staff schedules are internal. Contact administration for staffing questions."
    }
  ];
  // Patterns for aggregate data queries (ALLOWED with aggregate response)
  aggregatePatterns = [
    /\b(how many|count|total|number of)\s+(child|children|kid|kids|student|students)\s+(present|absent|today|enrolled)/i,
    /\b(attendance)\s+(rate|percentage|summary|overview)/i,
    /\b(fee|payment)\s+(summary|total|overview|report)/i,
    /\b(menu|meal)\s+(this week|today|tomorrow|weekly)/i,
    /\b(upcoming|scheduled|next)\s+(event|events|activity|activities)/i
  ];
  // Safe patterns that don't access any personal data
  safePatterns = [
    /\b(daycare|nursery|school)\s+(hour|hours|time|schedule|open|close)/i,
    /\b(how|what)\s+(do|can|to)\s+(i|we)\s+(request|submit|make|enroll|register|pay)/i,
    /\b(fee|payment)\s+(structure|process|method|how)/i,
    /\b(document|paper|form)\s+(need|required|necessary)/i,
    /\b(contact|reach|call|email)\s+(admin|support|teacher|staff)/i,
    /\b(policy|policies|rule|rules|guideline)/i,
    /\b(hello|hi|hey|ciao|buongiorno|grazie|thank)/i,
    /\b(help|assist|support)\s+(me|with)/i,
    /\b(what is|explain|tell me about)\s+(miniminds|the app|this app)/i,
    /\b(translate|translation)/i,
    /\b(holiday|vacation|closure|closed)/i
  ];
  /**
   * Classify a query for safety and compliance
   */
  classifyQuery(query) {
    const normalizedQuery = query.toLowerCase().trim();
    for (const blocked of this.individualChildPatterns) {
      if (blocked.pattern.test(normalizedQuery)) {
        return {
          category: QueryCategory.BLOCKED,
          riskLevel: AIRiskLevel.PROHIBITED,
          requiresConsent: false,
          requiresHumanReview: true,
          blockedReason: blocked.reason,
          dataCategories: ["individual_child_data"],
          suggestedAlternative: blocked.suggestedAlternative
        };
      }
    }
    for (const safe of this.safePatterns) {
      if (safe.test(normalizedQuery)) {
        return {
          category: QueryCategory.SAFE,
          riskLevel: AIRiskLevel.MINIMAL,
          requiresConsent: false,
          requiresHumanReview: false,
          dataCategories: []
        };
      }
    }
    for (const aggregate of this.aggregatePatterns) {
      if (aggregate.test(normalizedQuery)) {
        return {
          category: QueryCategory.AGGREGATE,
          riskLevel: AIRiskLevel.LOW,
          requiresConsent: false,
          requiresHumanReview: false,
          dataCategories: ["aggregate_statistics"]
        };
      }
    }
    if (this.containsChildNamePattern(normalizedQuery)) {
      return {
        category: QueryCategory.BLOCKED,
        riskLevel: AIRiskLevel.PROHIBITED,
        requiresConsent: false,
        requiresHumanReview: true,
        blockedReason: "Query appears to reference a specific child",
        dataCategories: ["individual_child_data"],
        suggestedAlternative: "For information about your child, please check the Activities or Profile section directly."
      };
    }
    return {
      category: QueryCategory.SAFE,
      riskLevel: AIRiskLevel.MINIMAL,
      requiresConsent: false,
      requiresHumanReview: false,
      dataCategories: []
    };
  }
  /**
   * Check if query contains patterns suggesting a child's name
   */
  containsChildNamePattern(query) {
    const namePatterns = [
      /\b(what|how|where|when)\s+(did|does|is|was|has)\s+[A-Z][a-z]+\s/i,
      /\b(show|tell|get)\s+(me\s+)?(about\s+)?[A-Z][a-z]+('s)?\s/i,
      /\b[A-Z][a-z]+('s)?\s+(activity|attendance|meal|nap|report)/i
    ];
    return namePatterns.some((pattern) => pattern.test(query));
  }
  /**
   * Get safe suggested queries for the UI
   */
  getSafeQueries() {
    return [
      {
        query: "What are the daycare hours?",
        queryIt: "Quali sono gli orari dell'asilo?",
        category: QueryCategory.SAFE,
        description: "Get information about opening and closing times",
        descriptionIt: "Informazioni sugli orari di apertura e chiusura"
      },
      {
        query: "How do I request leave for my child?",
        queryIt: "Come posso richiedere un permesso per mio figlio?",
        category: QueryCategory.SAFE,
        description: "Learn how to submit absence requests",
        descriptionIt: "Scopri come inviare richieste di assenza"
      },
      {
        query: "Explain the fee payment process",
        queryIt: "Spiega il processo di pagamento delle rette",
        category: QueryCategory.SAFE,
        description: "Understand how to pay daycare fees",
        descriptionIt: "Capire come pagare le rette"
      },
      {
        query: "What's on the menu this week?",
        queryIt: "Cosa c'\xE8 nel menu di questa settimana?",
        category: QueryCategory.AGGREGATE,
        description: "View the weekly meal plan",
        descriptionIt: "Visualizza il menu settimanale"
      },
      {
        query: "How do I update my contact information?",
        queryIt: "Come aggiorno i miei dati di contatto?",
        category: QueryCategory.SAFE,
        description: "Learn how to edit your profile",
        descriptionIt: "Scopri come modificare il tuo profilo"
      },
      {
        query: "What documents do I need for enrollment?",
        queryIt: "Quali documenti servono per l'iscrizione?",
        category: QueryCategory.SAFE,
        description: "Get the enrollment requirements checklist",
        descriptionIt: "Ottieni la lista dei documenti per l'iscrizione"
      },
      {
        query: "Show upcoming events",
        queryIt: "Mostra i prossimi eventi",
        category: QueryCategory.AGGREGATE,
        description: "See scheduled activities and events",
        descriptionIt: "Visualizza le attivit\xE0 e gli eventi programmati"
      },
      {
        query: "How many children are present today?",
        queryIt: "Quanti bambini sono presenti oggi?",
        category: QueryCategory.AGGREGATE,
        description: "Get today's attendance count",
        descriptionIt: "Ottieni il conteggio delle presenze di oggi"
      },
      {
        query: "What are the holiday closures?",
        queryIt: "Quali sono i giorni di chiusura festiva?",
        category: QueryCategory.SAFE,
        description: "View scheduled holidays",
        descriptionIt: "Visualizza le festivit\xE0 programmate"
      },
      {
        query: "Help me write a parent announcement",
        queryIt: "Aiutami a scrivere un annuncio per i genitori",
        category: QueryCategory.SAFE,
        description: "Get help drafting communications",
        descriptionIt: "Ottieni aiuto per redigere comunicazioni"
      }
    ];
  }
  /**
   * Get blocked response message with alternative
   */
  getBlockedResponse(classification, lang = "it") {
    const messages = {
      en: {
        prefix: "\u{1F512} I cannot process this request.",
        reason: `Reason: ${classification.blockedReason}`,
        alternative: classification.suggestedAlternative ? `

\u{1F4A1} Alternative: ${classification.suggestedAlternative}` : "",
        contact: "\n\n\u{1F464} For assistance, please contact the daycare administration directly or speak with your child's teacher."
      },
      it: {
        prefix: "\u{1F512} Non posso elaborare questa richiesta.",
        reason: `Motivo: ${this.translateReason(classification.blockedReason || "")}`,
        alternative: classification.suggestedAlternative ? `

\u{1F4A1} Alternativa: ${this.translateAlternative(classification.suggestedAlternative)}` : "",
        contact: "\n\n\u{1F464} Per assistenza, contatta direttamente l'amministrazione dell'asilo o parla con l'educatore di tuo figlio."
      }
    };
    const m = messages[lang];
    return `${m.prefix}
${m.reason}${m.alternative}${m.contact}`;
  }
  translateReason(reason) {
    const translations = {
      "Query requests individual child health/medical information": "La richiesta riguarda informazioni sanitarie individuali del bambino",
      "Query requests individual child contact information": "La richiesta riguarda informazioni di contatto individuali",
      "Query requests individual child activity/behavior data": "La richiesta riguarda dati di attivit\xE0/comportamento individuali",
      "Query requests sensitive incident information": "La richiesta riguarda informazioni sensibili sugli incidenti",
      "Query requests individual child care information": "La richiesta riguarda informazioni di cura individuali",
      "Query attempts to profile or compare children": "La richiesta tenta di profilare o confrontare i bambini",
      "Query requests child photos": "La richiesta riguarda foto dei bambini",
      "Query requests child categorization data": "La richiesta riguarda dati di categorizzazione dei bambini",
      "Query requests medication information": "La richiesta riguarda informazioni sui farmaci",
      "Query requests staff personal schedule data": "La richiesta riguarda dati personali del personale",
      "Query appears to reference a specific child": "La richiesta sembra riferirsi a un bambino specifico"
    };
    return translations[reason] || reason;
  }
  translateAlternative(alternative) {
    const translations = {
      "For allergy information, please check directly with your child's teacher or the administration.": "Per informazioni sulle allergie, contatta direttamente l'educatore di tuo figlio o l'amministrazione.",
      "Contact information is available in the parent portal under your child's profile.": "Le informazioni di contatto sono disponibili nel portale genitori sotto il profilo di tuo figlio.",
      "Daily activity reports for your child are available in the Activities section.": "I report giornalieri delle attivit\xE0 di tuo figlio sono disponibili nella sezione Attivit\xE0.",
      "Incident reports are confidential. Please contact administration directly.": "I report degli incidenti sono riservati. Contatta direttamente l'amministrazione.",
      "Care schedules are managed by teachers. Check your child's daily report.": "Gli orari di cura sono gestiti dagli educatori. Controlla il report giornaliero di tuo figlio.",
      "Child assessments are not available through AI. Please speak with teachers directly.": "Le valutazioni dei bambini non sono disponibili tramite AI. Parla direttamente con gli educatori.",
      "Photos are available in the Gallery section with appropriate permissions.": "Le foto sono disponibili nella sezione Galleria con le appropriate autorizzazioni.",
      "Class rosters are available to teachers in the Classes section.": "Gli elenchi delle classi sono disponibili per gli educatori nella sezione Classi.",
      "Medication records are confidential. Contact administration for this information.": "I registri dei farmaci sono riservati. Contatta l'amministrazione per queste informazioni.",
      "Staff schedules are internal. Contact administration for staffing questions.": "Gli orari del personale sono interni. Contatta l'amministrazione per domande sul personale.",
      "For information about your child, please check the Activities or Profile section directly.": "Per informazioni su tuo figlio, controlla direttamente la sezione Attivit\xE0 o Profilo."
    };
    return translations[alternative] || alternative;
  }
  static \u0275fac = function AIQueryClassifierService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIQueryClassifierService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIQueryClassifierService, factory: _AIQueryClassifierService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIQueryClassifierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/ai-audit.service.ts
var AIAuditService = class _AIAuditService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/AIAudit`;
  localStorageKey = "miniminds_ai_audit_queue";
  maxLocalLogs = 100;
  sessionId;
  pendingLogs = new BehaviorSubject([]);
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.sessionId = this.generateSessionId();
    this.loadPendingLogs();
    this.processPendingLogs();
  }
  /**
   * Log an AI interaction (GDPR Article 30 compliance)
   */
  logInteraction(params) {
    const currentUser = this.authService.getCurrentUser();
    const userId = this.getUserId(currentUser);
    const logEntry = {
      timestamp: /* @__PURE__ */ new Date(),
      userId,
      userRole: this.getUserRole(),
      sessionId: this.sessionId,
      query: params.query,
      queryCategory: params.queryCategory,
      riskLevel: params.riskLevel,
      wasBlocked: params.wasBlocked,
      blockedReason: params.blockedReason,
      responseType: params.responseType,
      dataAccessed: params.dataAccessed,
      consentVerified: params.consentVerified,
      userAgent: navigator.userAgent
    };
    return this.http.post(`${this.apiUrl}/log`, logEntry).pipe(tap((response) => {
      logEntry.id = response.auditLogId;
    }), catchError((error) => {
      this.storeLocally(logEntry);
      return of({ auditLogId: this.generateLocalId() });
    }));
  }
  /**
   * Submit a human escalation request
   */
  requestHumanEscalation(params) {
    const currentUser = this.authService.getCurrentUser();
    const request = {
      userId: this.getUserId(currentUser),
      originalQuery: params.originalQuery,
      reason: params.reason,
      priority: params.priority || "medium",
      contactPreference: params.contactPreference || "app",
      timestamp: /* @__PURE__ */ new Date()
    };
    return this.http.post(`${this.apiUrl}/escalate`, request).pipe(catchError((error) => {
      return of({
        escalationId: this.generateLocalId(),
        message: "La tua richiesta \xE8 stata registrata. Un operatore ti contatter\xE0 presto."
      });
    }));
  }
  /**
   * Get audit logs for admin review (admin only)
   */
  getAuditLogs(params) {
    return this.http.get(`${this.apiUrl}/logs`, { params });
  }
  /**
   * Get statistics for compliance dashboard (admin only)
   */
  getComplianceStats(period = "week") {
    return this.http.get(`${this.apiUrl}/stats`, { params: { period } });
  }
  /**
   * Get current session ID
   */
  getSessionId() {
    return this.sessionId;
  }
  /**
   * Start a new session (e.g., on login)
   */
  startNewSession() {
    this.sessionId = this.generateSessionId();
  }
  // Private methods
  getUserRole() {
    if (this.authService.isAdmin())
      return "admin";
    if (this.authService.isTeacher())
      return "teacher";
    return "parent";
  }
  /**
   * Extract user ID from AuthResponse (uses email as identifier since no id field)
   */
  getUserId(user) {
    if (!user)
      return "anonymous";
    return user.email || "anonymous";
  }
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }
  generateLocalId() {
    return `local_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }
  storeLocally(logEntry) {
    logEntry.id = this.generateLocalId();
    const pending = this.pendingLogs.value;
    pending.push(logEntry);
    if (pending.length > this.maxLocalLogs) {
      pending.shift();
    }
    this.pendingLogs.next(pending);
    this.savePendingLogs();
  }
  loadPendingLogs() {
    try {
      const stored = localStorage.getItem(this.localStorageKey);
      if (stored) {
        const logs = JSON.parse(stored);
        this.pendingLogs.next(logs);
      }
    } catch (error) {
      console.error("Failed to load pending audit logs:", error);
    }
  }
  savePendingLogs() {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.pendingLogs.value));
    } catch (error) {
      console.error("Failed to save pending audit logs:", error);
    }
  }
  processPendingLogs() {
    setInterval(() => {
      const pending = this.pendingLogs.value;
      if (pending.length === 0)
        return;
      this.http.post(`${this.apiUrl}/batch`, { logs: pending }).subscribe({
        next: (response) => {
          this.pendingLogs.next([]);
          this.savePendingLogs();
          console.log(`Processed ${response.processed} pending audit logs`);
        },
        error: () => {
          console.log("Failed to process pending audit logs, will retry later");
        }
      });
    }, 5 * 60 * 1e3);
  }
  static \u0275fac = function AIAuditService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AIAuditService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AIAuditService, factory: _AIAuditService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AIAuditService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  QueryCategory,
  AIQueryClassifierService,
  AIAuditService
};
//# sourceMappingURL=chunk-HZ4EIS7H.js.map
