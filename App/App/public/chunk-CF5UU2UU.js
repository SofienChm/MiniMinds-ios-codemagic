import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/event/event.service.ts
var EventService = class _EventService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.EVENTS;
  events = [];
  eventsSubject = new BehaviorSubject([]);
  events$ = this.eventsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  loadEvents() {
    return this.http.get(this.apiUrl);
  }
  addEvent(event) {
    return this.http.post(this.apiUrl, event);
  }
  updateEvent(event) {
    return this.http.put(`${this.apiUrl}/${event.id}`, event);
  }
  deleteEvent(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getEvent(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getEventParticipants(eventId) {
    return this.http.get(`${ApiConfig.ENDPOINTS.EVENT_PARTICIPANTS}/event/${eventId}`);
  }
  refreshEvents() {
    this.loadEvents().subscribe((events) => {
      this.events = events;
      this.eventsSubject.next([...this.events]);
    });
  }
  static \u0275fac = function EventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EventService
};
//# sourceMappingURL=chunk-CF5UU2UU.js.map
