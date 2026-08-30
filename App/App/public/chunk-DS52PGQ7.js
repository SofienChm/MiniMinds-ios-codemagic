import {
  require_sweetalert2_all
} from "./chunk-MQZU4GYV.js";
import {
  __toESM
} from "./chunk-C7TRL22M.js";

// src/app/shared/utils/export.util.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var ExportUtil = class {
  static async exportToPDF(data, title) {
    if (data.length === 0) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: "No Data",
        text: "No data to export",
        confirmButtonColor: "#7dd3c0"
      });
      return;
    }
    const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
      import("./chunk-L7UBIIWO.js"),
      import("./chunk-NRLYT4RH.js")
    ]);
    const doc = new jsPDF();
    const headers = Object.keys(data[0]);
    const rows = data.map((item) => headers.map((h) => item[h]));
    doc.text(title, 14, 15);
    autoTable(doc, {
      head: [headers],
      body: rows,
      startY: 20
    });
    doc.save(`${title.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`);
  }
  static async exportToExcel(data, title) {
    if (data.length === 0) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: "No Data",
        text: "No data to export",
        confirmButtonColor: "#7dd3c0"
      });
      return;
    }
    const [XLSX, { saveAs }] = await Promise.all([
      import("./chunk-4Y2IX2AF.js"),
      import("./chunk-2PKLDECA.js")
    ]);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, `${title.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.xlsx`);
  }
};

export {
  ExportUtil
};
//# sourceMappingURL=chunk-DS52PGQ7.js.map
