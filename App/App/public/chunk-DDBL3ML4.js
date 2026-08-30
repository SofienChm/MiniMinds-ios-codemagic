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
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// src/app/features/parent/parent.service.ts
var ParentService = class _ParentService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.PARENTS;
  parents = [];
  parentsSubject = new BehaviorSubject([]);
  parents$ = this.parentsSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  loadParents(search) {
    if (search && search.trim()) {
      return this.http.get(this.apiUrl, { params: { search: search.trim() } });
    }
    return this.http.get(this.apiUrl);
  }
  addParent(parent) {
    return this.http.post(this.apiUrl, parent);
  }
  updateParent(parent) {
    return this.http.put(`${this.apiUrl}/${parent.id}`, parent);
  }
  deleteParent(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  toggleParentStatus(id, deactivateChildren = false) {
    return this.http.put(`${this.apiUrl}/${id}/toggle-status`, { deactivateChildren });
  }
  getParent(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getParentWithChildren(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  activateParent(id) {
    return this.getParent(id).pipe(switchMap((parent) => this.updateParent(__spreadProps(__spreadValues({}, parent), { isActive: true }))));
  }
  deactivateParent(id) {
    return this.getParent(id).pipe(switchMap((parent) => this.updateParent(__spreadProps(__spreadValues({}, parent), { isActive: false }))));
  }
  linkChildToParent(parentId, childId) {
    return this.http.post(`${this.apiUrl}/${parentId}/children/${childId}`, {});
  }
  unlinkChildFromParent(parentId, childId) {
    return this.http.delete(`${this.apiUrl}/${parentId}/children/${childId}`);
  }
  refreshParents() {
    this.loadParents().subscribe((parents) => {
      this.parents = parents;
      this.parentsSubject.next([...this.parents]);
    });
  }
  getParentProfilePicture(id) {
    return this.http.get(`${this.apiUrl}/${id}/profile-picture`);
  }
  uploadParentProfilePicture(id, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.apiUrl}/${id}/profile-picture`, formData);
  }
  uploadParentProfilePictureBase64(id, base64Image) {
    const formData = new FormData();
    formData.append("base64Image", base64Image);
    return this.http.post(`${this.apiUrl}/${id}/profile-picture`, formData);
  }
  deleteParentProfilePicture(id) {
    return this.http.delete(`${this.apiUrl}/${id}/profile-picture`);
  }
  static \u0275fac = function ParentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParentService, factory: _ParentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ParentService
};
//# sourceMappingURL=chunk-DDBL3ML4.js.map
