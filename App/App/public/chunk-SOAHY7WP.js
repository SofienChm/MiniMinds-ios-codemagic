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
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/appointments/appointments.service.ts
var AppointmentsService = class _AppointmentsService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.APPOINTMENTS;
  appointmentsSubject = new BehaviorSubject([]);
  appointments$ = this.appointmentsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  // Parent: Request a new appointment
  requestAppointment(dto) {
    return this.http.post(`${this.apiUrl}/request`, dto);
  }
  // Parent: Get my appointments
  getMyAppointments(status) {
    const url = status && status !== "All" ? `${this.apiUrl}/my?status=${status}` : `${this.apiUrl}/my`;
    return this.http.get(url);
  }
  // Parent: Update my pending appointment
  updateMyAppointment(id, dto) {
    return this.http.put(`${this.apiUrl}/my/${id}`, dto);
  }
  // Parent: Cancel my appointment
  cancelMyAppointment(id) {
    return this.http.put(`${this.apiUrl}/my/${id}/cancel`, {});
  }
  // Admin/Teacher: Get all appointments
  getAllAppointments(status, teacherId) {
    let url = this.apiUrl;
    const params = [];
    if (status && status !== "All") {
      params.push(`status=${status}`);
    }
    if (teacherId) {
      params.push(`teacherId=${teacherId}`);
    }
    if (params.length > 0) {
      url += "?" + params.join("&");
    }
    return this.http.get(url).pipe(tap((appointments) => this.appointmentsSubject.next(appointments)));
  }
  // Get appointment by ID
  getAppointmentById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Admin/Teacher: Approve appointment
  approveAppointment(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}/approve`, dto || {});
  }
  // Admin/Teacher: Reject appointment
  rejectAppointment(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}/reject`, dto || {});
  }
  // Admin/Teacher: Mark appointment as completed
  completeAppointment(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}/complete`, dto || {});
  }
  // Admin: Delete appointment
  deleteAppointment(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Get appointment types
  getTypes() {
    return this.http.get(`${this.apiUrl}/types`);
  }
  // Parent: Get available teachers for booking
  getAvailableTeachers() {
    return this.http.get(`${this.apiUrl}/available-teachers`);
  }
  // Refresh appointments list
  refreshAppointments(status) {
    this.getAllAppointments(status).subscribe();
  }
  static \u0275fac = function AppointmentsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppointmentsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppointmentsService, factory: _AppointmentsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppointmentsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AppointmentsService
};
//# sourceMappingURL=chunk-SOAHY7WP.js.map
