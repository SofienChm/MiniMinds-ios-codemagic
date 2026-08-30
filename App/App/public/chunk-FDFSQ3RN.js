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

// src/app/features/children/children.service.ts
var ChildrenService = class _ChildrenService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.CHILDREN;
  children = [];
  childrenSubject = new BehaviorSubject([]);
  children$ = this.childrenSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  loadChildren() {
    return this.http.get(this.apiUrl);
  }
  addChild(child) {
    return this.http.post(this.apiUrl, child);
  }
  updateChild(child) {
    return this.http.put(`${this.apiUrl}/${child.id}`, child);
  }
  deleteChild(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getChild(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  refreshChildren() {
    this.loadChildren().subscribe((children) => {
      this.children = children;
      this.childrenSubject.next([...this.children]);
    });
  }
  removeParentFromChild(childParentId) {
    return this.http.delete(`${this.apiUrl}/remove-parent/${childParentId}`);
  }
  toggleChildStatus(id) {
    return this.http.put(`${this.apiUrl}/${id}/toggle-status`, {});
  }
  getChildProfilePicture(id) {
    return this.http.get(`${this.apiUrl}/${id}/profile-picture`);
  }
  uploadChildProfilePicture(id, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${id}/profile-picture`, formData);
  }
  uploadChildProfilePictureBase64(id, base64Image) {
    const formData = new FormData();
    formData.append("base64Image", base64Image);
    return this.http.post(`${this.apiUrl}/${id}/profile-picture`, formData);
  }
  deleteChildProfilePicture(id) {
    return this.http.delete(`${this.apiUrl}/${id}/profile-picture`);
  }
  static \u0275fac = function ChildrenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChildrenService, factory: _ChildrenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ChildrenService
};
//# sourceMappingURL=chunk-FDFSQ3RN.js.map
