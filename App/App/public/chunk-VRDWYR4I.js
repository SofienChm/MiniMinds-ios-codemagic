import {
  ApiConfig
} from "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NYEMFD63.js";

// src/app/features/gallery/gallery.service.ts
var GalleryService = class _GalleryService {
  http;
  apiUrl = ApiConfig.ENDPOINTS.PHOTOS;
  photosSubject = new BehaviorSubject([]);
  photos$ = this.photosSubject.asObservable();
  constructor(http) {
    this.http = http;
  }
  getPhotos(page = 1, pageSize = 20, childId, category) {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString());
    if (childId) {
      params = params.set("childId", childId.toString());
    }
    if (category) {
      params = params.set("category", category);
    }
    return this.http.get(this.apiUrl, { params }).pipe(tap((response) => this.photosSubject.next(response.data)));
  }
  getPhoto(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getPhotosByChild(childId, page = 1, pageSize = 20, category) {
    let params = new HttpParams().set("page", page.toString()).set("pageSize", pageSize.toString());
    if (category) {
      params = params.set("category", category);
    }
    return this.http.get(`${this.apiUrl}/by-child/${childId}`, { params });
  }
  uploadPhoto(file, childId, title, description, category = "Memory", relatedEntityType, relatedEntityId) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    if (childId) {
      formData.append("childId", childId.toString());
    }
    if (title) {
      formData.append("title", title);
    }
    if (description) {
      formData.append("description", description);
    }
    if (relatedEntityType) {
      formData.append("relatedEntityType", relatedEntityType);
    }
    if (relatedEntityId) {
      formData.append("relatedEntityId", relatedEntityId.toString());
    }
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
  uploadMultiplePhotos(files, childId, category = "Memory", description) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    if (childId) {
      formData.append("childId", childId.toString());
    }
    formData.append("category", category);
    if (description) {
      formData.append("description", description);
    }
    return this.http.post(`${this.apiUrl}/upload-multiple`, formData);
  }
  getPhotoTags(id) {
    return this.http.get(`${this.apiUrl}/${id}/tags`);
  }
  setPhotoTags(id, childIds) {
    return this.http.put(`${this.apiUrl}/${id}/tags`, { childIds });
  }
  updatePhoto(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deletePhoto(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  permanentlyDeletePhoto(id) {
    return this.http.delete(`${this.apiUrl}/${id}/permanent`);
  }
  restorePhoto(id) {
    return this.http.post(`${this.apiUrl}/${id}/restore`, {});
  }
  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }
  refreshPhotos(childId, category) {
    this.getPhotos(1, 20, childId, category).subscribe();
  }
  static \u0275fac = function GalleryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GalleryService, factory: _GalleryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  GalleryService
};
//# sourceMappingURL=chunk-VRDWYR4I.js.map
