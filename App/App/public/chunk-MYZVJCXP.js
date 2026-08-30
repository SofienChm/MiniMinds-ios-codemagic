import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  catchError,
  inject,
  throwError
} from "./chunk-NYEMFD63.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/core/interceptors/error.interceptor.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var SKIP_ERROR_HANDLER = "X-Skip-Error-Handler";
var sessionExpiredShowing = false;
var errorInterceptor = (req, next) => {
  const router = inject(Router);
  const skipErrorHandler = req.headers.has(SKIP_ERROR_HANDLER);
  const cleanReq = skipErrorHandler ? req.clone({ headers: req.headers.delete(SKIP_ERROR_HANDLER) }) : req;
  return next(cleanReq).pipe(catchError((error) => {
    if (skipErrorHandler) {
      return throwError(() => error);
    }
    const isGetRequest = cleanReq.method === "GET";
    let errorMessage = "An unexpected error occurred";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 0:
          {
            const urlPath = cleanReq.url.replace(/https?:\/\/[^/]+/, "");
            errorMessage = `Could not reach server. URL: ${cleanReq.url}`;
            console.error(`[Error] Network error (status 0) for ${cleanReq.method} ${cleanReq.url}`);
            import_sweetalert2.default.fire({
              icon: "error",
              title: "Connection Error",
              html: `<p>Could not connect to the server.</p><p style="font-size:12px;color:#888;word-break:break-all;margin-top:8px;"><b>URL:</b> ${cleanReq.url}</p>`,
              confirmButtonColor: "#506EE4"
            });
          }
          break;
        case 400:
          errorMessage = error.error?.message || "Invalid request. Please check your input.";
          import_sweetalert2.default.fire({
            icon: "warning",
            title: "Invalid Request",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          });
          break;
        case 401:
          const isAuthEndpoint = cleanReq.url.includes("/api/auth/login") || cleanReq.url.includes("/api/auth/register") || cleanReq.url.includes("/api/auth/refresh") || cleanReq.url.includes("/api/auth/logout") || cleanReq.url.includes("/api/passwordreset");
          if (isAuthEndpoint) {
            return throwError(() => error);
          }
          errorMessage = "Your session has expired. Please login again.";
          if (sessionExpiredShowing) {
            return throwError(() => error);
          }
          sessionExpiredShowing = true;
          import_sweetalert2.default.fire({
            icon: "warning",
            title: "Session Expired",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          }).then(() => {
            sessionExpiredShowing = false;
            localStorage.removeItem("currentUser");
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            router.navigate(["/login"]);
          });
          break;
        case 403:
          router.navigate(["/403"]);
          break;
        case 404:
          errorMessage = error.error?.message || "The requested resource was not found.";
          import_sweetalert2.default.fire({
            icon: "info",
            title: "Not Found",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          });
          break;
        case 500:
          errorMessage = "Server error. Please try again later.";
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Server Error",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          });
          break;
        case 503:
          errorMessage = "Service temporarily unavailable. Please try again later.";
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Service Unavailable",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          });
          break;
        default:
          errorMessage = error.error?.message || `Error: ${error.message}`;
          import_sweetalert2.default.fire({
            icon: "error",
            title: "Error",
            text: errorMessage,
            confirmButtonColor: "#506EE4"
          });
      }
    }
    return throwError(() => error);
  }));
};

export {
  SKIP_ERROR_HANDLER,
  errorInterceptor
};
//# sourceMappingURL=chunk-MYZVJCXP.js.map
