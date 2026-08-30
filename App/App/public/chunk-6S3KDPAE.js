import {
  CurrencyService
} from "./chunk-OQBHM43H.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe,
  ɵɵdirectiveInject
} from "./chunk-NYEMFD63.js";

// src/app/core/services/currency/currency.pipe.ts
var AppCurrencyPipe = class _AppCurrencyPipe {
  currencyService;
  constructor(currencyService) {
    this.currencyService = currencyService;
  }
  transform(value, showCode = false) {
    const amount = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(amount)) {
      return "";
    }
    const currency = this.currencyService.getSelectedCurrency();
    const formattedAmount = amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    if (showCode) {
      return `${currency.symbol}${formattedAmount} ${currency.code}`;
    }
    return `${currency.symbol}${formattedAmount}`;
  }
  static \u0275fac = function AppCurrencyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppCurrencyPipe)(\u0275\u0275directiveInject(CurrencyService, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "appCurrency", type: _AppCurrencyPipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppCurrencyPipe, [{
    type: Pipe,
    args: [{
      name: "appCurrency",
      standalone: true,
      pure: false
    }]
  }], () => [{ type: CurrencyService }], null);
})();

export {
  AppCurrencyPipe
};
//# sourceMappingURL=chunk-6S3KDPAE.js.map
