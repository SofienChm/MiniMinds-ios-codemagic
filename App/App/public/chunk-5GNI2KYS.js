import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient
} from "./chunk-JR6HYZ4P.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/messages.service.ts
var MessagesService = class _MessagesService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.MESSAGES;
  groupsApiUrl = ApiConfig.ENDPOINTS.CHAT_GROUPS;
  constructor(http) {
    this.http = http;
  }
  getInbox() {
    return this.http.get(`${this.apiUrl}/inbox`);
  }
  getUnreadCount() {
    return this.http.get(`${this.apiUrl}/inbox`).pipe(map((messages) => messages.filter((m) => !m.isRead).length));
  }
  getSent() {
    return this.http.get(`${this.apiUrl}/sent`);
  }
  getMessage(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getRecipients() {
    return this.http.get(`${this.apiUrl}/recipients`);
  }
  getContacts() {
    return this.http.get(`${this.apiUrl}/contacts`);
  }
  getConversations() {
    return this.http.get(`${this.apiUrl}/conversations`);
  }
  getConversation(userId, page = 1, pageSize = 30) {
    return this.http.get(`${this.apiUrl}/conversation/${userId}?page=${page}&pageSize=${pageSize}`);
  }
  chatSendMessage(recipientId, content) {
    return this.http.post(`${this.apiUrl}/chat/send`, { recipientId, content });
  }
  sendMessage(data) {
    return this.http.post(`${this.apiUrl}`, data);
  }
  getChatGroups() {
    return this.http.get(this.groupsApiUrl);
  }
  getChatGroup(id) {
    return this.http.get(`${this.groupsApiUrl}/${id}`);
  }
  getChatGroupMessages(id, page = 1, pageSize = 30) {
    return this.http.get(`${this.groupsApiUrl}/${id}/messages?page=${page}&pageSize=${pageSize}`);
  }
  sendChatGroupMessage(id, content) {
    return this.http.post(`${this.groupsApiUrl}/${id}/messages`, { content });
  }
  createChatGroup(data) {
    return this.http.post(this.groupsApiUrl, data);
  }
  static \u0275fac = function MessagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessagesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagesService, factory: _MessagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MessagesService
};
//# sourceMappingURL=chunk-5GNI2KYS.js.map
