import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NYEMFD63.js";

// src/app/core/services/currency/currency.service.ts
var CurrencyService = class _CurrencyService {
  currencies = [
    { code: "USD", symbol: "$", name: "US Dollar" },
    { code: "EUR", symbol: "\u20AC", name: "Euro" },
    { code: "TND", symbol: "\u062F.\u062A", name: "Tunisian Dinar" },
    { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
    { code: "GBP", symbol: "\xA3", name: "British Pound" }
  ];
  selectedCurrencySubject = new BehaviorSubject(this.getStoredCurrency());
  selectedCurrency$ = this.selectedCurrencySubject.asObservable();
  getStoredCurrency() {
    const storedCode = localStorage.getItem("selectedCurrency") || "USD";
    return this.currencies.find((c) => c.code === storedCode) || this.currencies[0];
  }
  getCurrencies() {
    return this.currencies;
  }
  getSelectedCurrency() {
    return this.selectedCurrencySubject.value;
  }
  getSelectedCurrencyCode() {
    return this.selectedCurrencySubject.value.code;
  }
  getSelectedCurrencySymbol() {
    return this.selectedCurrencySubject.value.symbol;
  }
  setSelectedCurrency(code) {
    const currency = this.currencies.find((c) => c.code === code);
    if (currency) {
      localStorage.setItem("selectedCurrency", code);
      this.selectedCurrencySubject.next(currency);
    }
  }
  formatAmount(amount) {
    const currency = this.selectedCurrencySubject.value;
    return `${currency.symbol}${amount.toFixed(2)}`;
  }
  static \u0275fac = function CurrencyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CurrencyService, factory: _CurrencyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CurrencyService
};
//# sourceMappingURL=chunk-OQBHM43H.js.map
