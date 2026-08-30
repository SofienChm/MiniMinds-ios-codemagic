// node_modules/@angular/common/locales/fr.js
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 0 || i === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var fr_default = ["fr", [["AM", "PM"]], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "f\xE9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xFBt", "sept.", "oct.", "nov.", "d\xE9c."], ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant J\xE9sus-Christ", "apr\xE8s J\xE9sus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} '\xE0' {0}", u], [",", "\u202F", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "ARS": ["$AR", "$"], "AUD": ["$AU", "$"], "BEF": ["FB"], "BMD": ["$BM", "$"], "BND": ["$BN", "$"], "BYN": [u, "\u0440."], "BZD": ["$BZ", "$"], "CAD": ["$CA", "$"], "CLP": ["$CL", "$"], "CNY": [u, "\xA5"], "COP": ["$CO", "$"], "CYP": ["\xA3CY"], "EGP": [u, "\xA3E"], "FJD": ["$FJ", "$"], "FKP": ["\xA3FK", "\xA3"], "FRF": ["F"], "GBP": ["\xA3GB", "\xA3"], "GIP": ["\xA3GI", "\xA3"], "HKD": [u, "$"], "IEP": ["\xA3IE"], "ILP": ["\xA3IL"], "ITL": ["\u20A4IT"], "JPY": [u, "\xA5"], "KMF": [u, "FC"], "LBP": ["\xA3LB", "\xA3L"], "MTP": ["\xA3MT"], "MXN": ["$MX", "$"], "NAD": ["$NA", "$"], "NIO": [u, "$C"], "NZD": ["$NZ", "$"], "PHP": [u, "\u20B1"], "RHD": ["$RH"], "RON": [u, "L"], "RWF": [u, "FR"], "SBD": ["$SB", "$"], "SGD": ["$SG", "$"], "SRD": ["$SR", "$"], "TOP": [u, "$T"], "TTD": ["$TT", "$"], "TWD": [u, "NT$"], "USD": ["$US", "$"], "UYU": ["$UY", "$"], "WST": ["$WS"], "XCD": [u, "$"], "XPF": ["FCFP"], "ZMW": [u, "Kw"] }, "ltr", plural];

// node_modules/@angular/common/locales/it.js
var u2 = void 0;
function plural2(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 1 && v === 0)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var it_default = ["it", [["m.", "p."], ["AM", "PM"]], u2, [["D", "L", "M", "M", "G", "V", "S"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]], u2, [["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]], u2, [["aC", "dC"], ["a.C.", "d.C."], ["avanti Cristo", "dopo Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u2, "{1} {0}", u2], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "BRL": [u2, "R$"], "BYN": [u2, "Br"], "EGP": [u2, "\xA3E"], "HKD": [u2, "$"], "INR": [u2, "\u20B9"], "JPY": [u2, "\xA5"], "KRW": [u2, "\u20A9"], "MXN": [u2, "$"], "NOK": [u2, "NKr"], "THB": ["\u0E3F"], "TWD": [u2, "NT$"], "USD": [u2, "$"], "VND": [u2, "\u20AB"] }, "ltr", plural2];

// node_modules/@angular/common/locales/ar.js
var u3 = void 0;
function plural3(val) {
  const n = val;
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
    return 3;
  if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
    return 4;
  return 5;
}
var ar_default = ["ar", [["\u0635", "\u0645"]], [["\u0635", "\u0645"], u3, ["\u0635\u0628\u0627\u062D\u064B\u0627", "\u0645\u0633\u0627\u0621\u064B"]], [["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"], ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"], u3, ["\u0623\u062D\u062F", "\u0625\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"]], u3, [["\u064A", "\u0641", "\u0645", "\u0623", "\u0648", "\u0646", "\u0644", "\u063A", "\u0633", "\u0643", "\u0628", "\u062F"], ["\u064A\u0646\u0627\u064A\u0631", "\u0641\u0628\u0631\u0627\u064A\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064A\u0644", "\u0645\u0627\u064A\u0648", "\u064A\u0648\u0646\u064A\u0648", "\u064A\u0648\u0644\u064A\u0648", "\u0623\u063A\u0633\u0637\u0633", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]], u3, [["\u0642.\u0645", "\u0645"], u3, ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0645\u064A\u0644\u0627\u062F\u064A"]], 6, [5, 6], ["d\u200F/M\u200F/y", "dd\u200F/MM\u200F/y", "d MMMM y", "EEEE\u060C d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u3, "{1} \u0641\u064A {0}", u3], [".", ",", ";", "\u200E%\u200E", "\u200E+", "\u200E-", "E", "\xD7", "\u2030", "\u221E", "\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "EGP", "\u062C.\u0645.\u200F", "\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A", { "AED": ["\u062F.\u0625.\u200F"], "ARS": [u3, "AR$"], "AUD": ["AU$"], "BBD": [u3, "BB$"], "BHD": ["\u062F.\u0628.\u200F"], "BMD": [u3, "BM$"], "BND": [u3, "BN$"], "BSD": [u3, "BS$"], "BYN": [u3, "\u0440."], "BZD": [u3, "BZ$"], "CAD": ["CA$"], "CLP": [u3, "CL$"], "CNY": ["CN\xA5"], "COP": [u3, "CO$"], "CUP": [u3, "CU$"], "DOP": [u3, "DO$"], "DZD": ["\u062F.\u062C.\u200F"], "EGP": ["\u062C.\u0645.\u200F", "E\xA3"], "FJD": [u3, "FJ$"], "GBP": ["UK\xA3"], "GYD": [u3, "GY$"], "HKD": ["HK$"], "IQD": ["\u062F.\u0639.\u200F"], "IRR": ["\u0631.\u0625."], "JMD": [u3, "JM$"], "JOD": ["\u062F.\u0623.\u200F"], "JPY": ["JP\xA5"], "KWD": ["\u062F.\u0643.\u200F"], "KYD": [u3, "KY$"], "LBP": ["\u0644.\u0644.\u200F", "L\xA3"], "LRD": [u3, "$LR"], "LYD": ["\u062F.\u0644.\u200F"], "MAD": ["\u062F.\u0645.\u200F"], "MRU": ["\u0623.\u0645."], "MXN": ["MX$"], "NZD": ["NZ$"], "OMR": ["\u0631.\u0639.\u200F"], "PHP": [u3, "\u20B1"], "QAR": ["\u0631.\u0642.\u200F"], "SAR": ["\u0631.\u0633.\u200F"], "SBD": [u3, "SB$"], "SDD": ["\u062F.\u0633.\u200F"], "SDG": ["\u062C.\u0633."], "SRD": [u3, "SR$"], "SYP": ["\u0644.\u0633.\u200F", "\xA3"], "THB": ["\u0E3F"], "TND": ["\u062F.\u062A.\u200F"], "TTD": [u3, "TT$"], "TWD": ["NT$"], "USD": ["US$"], "UYU": [u3, "UY$"], "YER": ["\u0631.\u064A.\u200F"] }, "rtl", plural3];

export {
  fr_default,
  it_default,
  ar_default
};
/*! Bundled license information:

@angular/common/locales/fr.js:
@angular/common/locales/it.js:
@angular/common/locales/ar.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=chunk-ASBB4ZWR.js.map
