import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
  NotificationService
} from "./chunk-PPPAYIKG.js";
import {
  environment
} from "./chunk-XUYKXYA7.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/signalr.service.ts
var SignalRService = class _SignalRService {
  notificationService;
  hubConnection;
  isConnecting = false;
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  startConnection() {
    const token = localStorage.getItem("token");
    if (!token || this.isConnecting)
      return;
    this.isConnecting = true;
    this.hubConnection = new HubConnectionBuilder().withUrl(`${environment.apiUrl}/notificationHub`, {
      accessTokenFactory: () => token,
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets
    }).withAutomaticReconnect([0, 2e3, 5e3, 1e4]).configureLogging(LogLevel.Warning).build();
    this.hubConnection.onreconnecting(() => {
      console.log("SignalR reconnecting...");
    });
    this.hubConnection.onreconnected(() => {
      console.log("SignalR reconnected");
    });
    this.hubConnection.onclose(() => {
      console.log("SignalR connection closed");
      this.isConnecting = false;
    });
    this.hubConnection.on("ReceiveNotification", (notification) => {
      console.log("Received notification:", notification);
      this.notificationService.loadUnreadCount();
    });
    this.hubConnection.start().then(() => {
      console.log("SignalR Connected");
      this.isConnecting = false;
    }).catch((err) => {
      console.warn("SignalR Connection Error (notifications will still work via polling):", err);
      this.isConnecting = false;
    });
  }
  stopConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop();
      this.hubConnection = void 0;
    }
    this.isConnecting = false;
  }
  onAttendanceUpdate(callback) {
    this.hubConnection?.on("AttendanceUpdated", callback);
  }
  offAttendanceUpdate() {
    this.hubConnection?.off("AttendanceUpdated");
  }
  static \u0275fac = function SignalRService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignalRService)(\u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignalRService, factory: _SignalRService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalRService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: NotificationService }], null);
})();

export {
  SignalRService
};
//# sourceMappingURL=chunk-723J4PWM.js.map
