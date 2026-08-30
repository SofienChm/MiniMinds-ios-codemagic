import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/event/event-participants.service.ts
var EventParticipantsService = class _EventParticipantsService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.EVENT_PARTICIPANTS;
  constructor(http) {
    this.http = http;
  }
  getEventParticipants(eventId) {
    return this.http.get(`${this.apiUrl}/event/${eventId}`);
  }
  getChildParticipations(childId) {
    return this.http.get(`${this.apiUrl}/child/${childId}`);
  }
  registerParticipant(participant) {
    return this.http.post(this.apiUrl, participant);
  }
  removeParticipant(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  approveParticipant(id) {
    return this.http.put(`${this.apiUrl}/${id}/approve`, {});
  }
  rejectParticipant(id) {
    return this.http.put(`${this.apiUrl}/${id}/reject`, {});
  }
  requestCancellation(id) {
    return this.http.put(`${this.apiUrl}/${id}/request-cancellation`, {});
  }
  approveCancellation(id) {
    return this.http.put(`${this.apiUrl}/${id}/approve-cancellation`, {});
  }
  rejectCancellation(id) {
    return this.http.put(`${this.apiUrl}/${id}/reject-cancellation`, {});
  }
  static \u0275fac = function EventParticipantsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventParticipantsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventParticipantsService, factory: _EventParticipantsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventParticipantsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EventParticipantsService
};
//# sourceMappingURL=chunk-7YLPMD5M.js.map
