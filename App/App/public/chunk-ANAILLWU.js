import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/shared/utils/swal.util.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function showSuccessToast(title) {
  import_sweetalert2.default.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 3e3,
    timerProgressBar: true
  });
}

export {
  showSuccessToast
};
//# sourceMappingURL=chunk-ANAILLWU.js.map
