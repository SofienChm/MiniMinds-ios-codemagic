import {
  TitlePage
} from "./chunk-5B7TBFWC.js";
import {
  QrCheckinService
} from "./chunk-Q6ENMSPI.js";
import {
  PageTitleService
} from "./chunk-CO3LWQR2.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import "./chunk-JR6HYZ4P.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-NYEMFD63.js";
import {
  __commonJS,
  __toESM
} from "./chunk-C7TRL22M.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    "use strict";
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    "use strict";
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    "use strict";
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    "use strict";
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    "use strict";
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    "use strict";
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    "use strict";
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    "use strict";
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    "use strict";
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    "use strict";
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    "use strict";
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    "use strict";
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    "use strict";
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    "use strict";
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    "use strict";
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app/features/qr-management/qr-management.ts
var QRCode = __toESM(require_browser());
var _c0 = ["checkInCanvas"];
var _c1 = ["checkOutCanvas"];
function QrManagement_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function QrManagement_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function QrManagement_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "QR_MANAGEMENT.CREATED"), ": ", ctx_r0.formatDate(ctx_r0.checkInQrCode.createdAt), " ");
  }
}
function QrManagement_div_16_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "QR_MANAGEMENT.CREATED"), ": ", ctx_r0.formatDate(ctx_r0.checkOutQrCode.createdAt), " ");
  }
}
function QrManagement_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50);
    \u0275\u0275element(8, "canvas", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275template(11, QrManagement_div_16_span_11_Template, 3, 4, "span", 52);
    \u0275\u0275elementStart(12, "button", 53);
    \u0275\u0275listener("click", function QrManagement_div_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printQrCode("checkIn"));
    });
    \u0275\u0275element(13, "i", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 55)(17, "div", 48);
    \u0275\u0275element(18, "i", 56);
    \u0275\u0275elementStart(19, "h3");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 50);
    \u0275\u0275element(23, "canvas", null, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 51);
    \u0275\u0275template(26, QrManagement_div_16_span_26_Template, 3, 4, "span", 52);
    \u0275\u0275elementStart(27, "button", 53);
    \u0275\u0275listener("click", function QrManagement_div_16_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.printQrCode("checkOut"));
    });
    \u0275\u0275element(28, "i", 54);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "QR_MANAGEMENT.CHECK_IN_QR_CODE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.checkInQrCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "QR_MANAGEMENT.PRINT"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 10, "QR_MANAGEMENT.CHECK_OUT_QR_CODE"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.checkOutQrCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 12, "QR_MANAGEMENT.PRINT"), " ");
  }
}
function QrManagement_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "div", 59);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "QR_MANAGEMENT.LOADING_QR_CODES"));
  }
}
function QrManagement_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "QR_MANAGEMENT.SAVED"), " ");
  }
}
var QrManagement = class _QrManagement {
  qrService;
  authService;
  router;
  translate;
  pageTitleService;
  checkInCanvas;
  checkOutCanvas;
  // QR Codes
  checkInQrCode = null;
  checkOutQrCode = null;
  loadingQrCodes = true;
  regenerating = false;
  // School Settings
  settings = {
    id: 0,
    schoolName: "MiniMinds Daycare",
    latitude: 0,
    longitude: 0,
    geofenceRadiusMeters: 100,
    geofenceEnabled: true
  };
  savingSettings = false;
  settingsSaved = false;
  // Messages
  errorMessage = "";
  successMessage = "";
  breadcrumbs = [];
  langChangeSub;
  constructor(qrService, authService, router, translate, pageTitleService) {
    this.qrService = qrService;
    this.authService = authService;
    this.router = router;
    this.translate = translate;
    this.pageTitleService = pageTitleService;
  }
  ngOnInit() {
    if (!this.authService.isAdmin()) {
      this.router.navigate(["/dashboard"]);
      return;
    }
    this.pageTitleService.setTitle(this.translate.instant("QR_MANAGEMENT.TITLE"));
    this.setupBreadcrumbs();
    this.loadData();
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.pageTitleService.setTitle(this.translate.instant("QR_MANAGEMENT.TITLE"));
      this.setupBreadcrumbs();
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
  setupBreadcrumbs() {
    this.breadcrumbs = [
      { label: this.translate.instant("BREADCRUMBS.DASHBOARD"), url: "/dashboard" },
      { label: this.translate.instant("QR_MANAGEMENT.TITLE") }
    ];
  }
  loadData() {
    this.loadQrCodes();
    this.loadSettings();
  }
  loadQrCodes() {
    this.loadingQrCodes = true;
    this.qrService.getCheckInQrCode().subscribe({
      next: (qr) => {
        this.checkInQrCode = qr;
        this.generateQrCodeImage("checkIn", qr.code);
      },
      error: (err) => {
        console.error("Failed to load check-in QR code:", err);
      }
    });
    this.qrService.getCheckOutQrCode().subscribe({
      next: (qr) => {
        this.checkOutQrCode = qr;
        this.generateQrCodeImage("checkOut", qr.code);
        this.loadingQrCodes = false;
      },
      error: (err) => {
        console.error("Failed to load check-out QR code:", err);
        this.loadingQrCodes = false;
      }
    });
  }
  loadSettings() {
    this.qrService.getSchoolSettings().subscribe({
      next: (settings) => {
        this.settings = settings;
      },
      error: (err) => {
        console.error("Failed to load settings:", err);
      }
    });
  }
  async generateQrCodeImage(type, code) {
    setTimeout(async () => {
      const canvas = type === "checkIn" ? this.checkInCanvas : this.checkOutCanvas;
      if (!canvas?.nativeElement)
        return;
      const qrUrl = `miniminds://qr-action/${code}`;
      try {
        await QRCode.toCanvas(canvas.nativeElement, qrUrl, {
          width: 280,
          margin: 2,
          color: {
            dark: type === "checkIn" ? "#4caf50" : "#f44336",
            light: "#ffffff"
          }
        });
      } catch (err) {
        console.error(`Failed to generate ${type} QR code:`, err);
      }
    }, 100);
  }
  regenerateQrCodes() {
    if (!confirm("Are you sure you want to regenerate all QR codes? The old codes will stop working immediately.")) {
      return;
    }
    this.regenerating = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.qrService.regenerateQrCodes().subscribe({
      next: (result) => {
        this.checkInQrCode = result.checkIn;
        this.checkOutQrCode = result.checkOut;
        this.generateQrCodeImage("checkIn", result.checkIn.code);
        this.generateQrCodeImage("checkOut", result.checkOut.code);
        this.successMessage = "QR codes regenerated successfully! Please print new QR codes.";
        this.regenerating = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Failed to regenerate QR codes";
        this.regenerating = false;
      }
    });
  }
  saveSettings() {
    this.savingSettings = true;
    this.settingsSaved = false;
    this.errorMessage = "";
    this.qrService.updateSchoolSettings({
      schoolName: this.settings.schoolName,
      latitude: this.settings.latitude,
      longitude: this.settings.longitude,
      geofenceRadiusMeters: this.settings.geofenceRadiusMeters,
      geofenceEnabled: this.settings.geofenceEnabled
    }).subscribe({
      next: (settings) => {
        this.settings = settings;
        this.settingsSaved = true;
        this.savingSettings = false;
        setTimeout(() => this.settingsSaved = false, 3e3);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Failed to save settings";
        this.savingSettings = false;
      }
    });
  }
  getCurrentLocation() {
    if (!navigator.geolocation) {
      this.errorMessage = "Geolocation is not supported by your browser";
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.settings.latitude = position.coords.latitude;
      this.settings.longitude = position.coords.longitude;
    }, (error) => {
      this.errorMessage = "Failed to get current location: " + error.message;
    }, { enableHighAccuracy: true });
  }
  printQrCode(type) {
    const canvas = type === "checkIn" ? this.checkInCanvas : this.checkOutCanvas;
    if (!canvas?.nativeElement)
      return;
    const title = type === "checkIn" ? "CHECK IN" : "CHECK OUT";
    const color = type === "checkIn" ? "#4caf50" : "#f44336";
    const dataUrl = canvas.nativeElement.toDataURL("image/png");
    const printWindow = window.open("", "_blank");
    if (!printWindow)
      return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title} QR Code - ${this.settings.schoolName}</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          .container {
            padding: 40px;
            border: 4px solid ${color};
            border-radius: 20px;
          }
          h1 {
            color: ${color};
            font-size: 48px;
            margin: 0 0 10px;
          }
          h2 {
            color: #333;
            font-size: 24px;
            margin: 0 0 30px;
            font-weight: normal;
          }
          img {
            width: 300px;
            height: 300px;
          }
          .instructions {
            margin-top: 30px;
            color: #666;
            font-size: 18px;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${title}</h1>
          <h2>${this.settings.schoolName}</h2>
          <img src="${dataUrl}" alt="${title} QR Code">
          <p class="instructions">
            Scan this QR code with the MiniMinds app<br>
            to ${type === "checkIn" ? "check in" : "check out"} your child
          </p>
        </div>
        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function QrManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QrManagement)(\u0275\u0275directiveInject(QrCheckinService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(PageTitleService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrManagement, selectors: [["app-qr-management"]], viewQuery: function QrManagement_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkInCanvas = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkOutCanvas = _t.first);
    }
  }, decls: 114, vars: 90, consts: [["checkInCanvas", ""], ["checkOutCanvas", ""], [1, "container-fluid", "mt-4"], [3, "title"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "section", "qr-codes-section", "card", "card-general"], [1, "section-header", "card-header"], [1, "bi", "bi-qr-code"], [1, "custom-btn-2", "btn-add-global-2", 3, "click", "disabled"], [1, "bi"], ["class", "qr-cards", 4, "ngIf"], ["class", "loading", 4, "ngIf"], [1, "card", "card-general"], [1, "card-header"], [1, "bi", "bi-geo-alt"], [1, "settings-form", "card-body"], [1, "form-group"], ["for", "schoolName"], ["type", "text", "id", "schoolName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-row"], ["for", "latitude"], ["type", "number", "id", "latitude", "step", "0.000001", "placeholder", "e.g., 40.7128", 3, "ngModelChange", "ngModel"], ["for", "longitude"], ["type", "number", "id", "longitude", "step", "0.000001", "placeholder", "e.g., -74.0060", 3, "ngModelChange", "ngModel"], [1, "btn-location", 3, "click", "title"], [1, "bi", "bi-crosshairs"], ["for", "radius"], ["type", "number", "id", "radius", "min", "10", "max", "1000", "placeholder", "100", 3, "ngModelChange", "ngModel"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "form-actions"], ["class", "save-success", 4, "ngIf"], [1, "section", "instructions-section", "card", "card-general"], [1, "card-header", "section-header"], [1, "bi", "bi-info-circle"], [1, "instructions-content"], [1, "instruction-item"], [1, "step-number"], [1, "step-content"], [1, "alert", "alert-success"], [1, "bi", "bi-check-circle-fill"], [1, "alert", "alert-error"], [1, "bi", "bi-exclamation-circle-fill"], [1, "qr-cards"], [1, "qr-card", "check-in"], [1, "qr-header"], [1, "bi", "bi-box-arrow-in-right"], [1, "qr-body"], [1, "qr-footer"], ["class", "qr-date", 4, "ngIf"], [1, "btn-print", 3, "click"], [1, "bi", "bi-printer"], [1, "qr-card", "check-out"], [1, "bi", "bi-box-arrow-right"], [1, "qr-date"], [1, "loading"], [1, "spinner"], [1, "save-success"]], template: function QrManagement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275element(1, "app-title-page", 3);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275template(3, QrManagement_div_3_Template, 3, 1, "div", 4)(4, QrManagement_div_4_Template, 3, 1, "div", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "h5");
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function QrManagement_Template_button_click_11_listener() {
        return ctx.regenerateQrCodes();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, QrManagement_div_16_Template, 31, 14, "div", 11)(17, QrManagement_div_17_Template, 5, 3, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "h5");
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "label", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 19);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function QrManagement_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.schoolName, $event) || (ctx.settings.schoolName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 17)(33, "label", 21);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function QrManagement_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.latitude, $event) || (ctx.settings.latitude = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "label", 23);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function QrManagement_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.longitude, $event) || (ctx.settings.longitude = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "button", 25);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275listener("click", function QrManagement_Template_button_click_42_listener() {
        return ctx.getCurrentLocation();
      });
      \u0275\u0275element(44, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 20)(46, "div", 17)(47, "label", 27);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function QrManagement_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.geofenceRadiusMeters, $event) || (ctx.settings.geofenceRadiusMeters = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 29)(52, "label", 30)(53, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function QrManagement_Template_input_ngModelChange_53_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.geofenceEnabled, $event) || (ctx.settings.geofenceEnabled = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "span", 32);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "small");
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 33)(61, "button", 9);
      \u0275\u0275listener("click", function QrManagement_Template_button_click_61_listener() {
        return ctx.saveSettings();
      });
      \u0275\u0275element(62, "i", 10);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(66, QrManagement_span_66_Template, 4, 3, "span", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 35)(68, "div", 36)(69, "h5");
      \u0275\u0275element(70, "i", 37);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 38)(74, "div", 39)(75, "div", 40);
      \u0275\u0275text(76, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 41)(78, "h4");
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 39)(85, "div", 40);
      \u0275\u0275text(86, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 41)(88, "h4");
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 39)(95, "div", 40);
      \u0275\u0275text(96, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 41)(98, "h4");
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p");
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 39)(105, "div", 40);
      \u0275\u0275text(106, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 41)(108, "h4");
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 42, "QR_MANAGEMENT.TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 44, "QR_MANAGEMENT.QR_CODES"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.regenerating);
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-arrow-clockwise", !ctx.regenerating)("bi-hourglass-split", ctx.regenerating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.regenerating ? \u0275\u0275pipeBind1(14, 46, "QR_MANAGEMENT.REGENERATING") : \u0275\u0275pipeBind1(15, 48, "QR_MANAGEMENT.REGENERATE_ALL_BTN"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingQrCodes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingQrCodes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 50, "QR_MANAGEMENT.SCHOOL_LOCATION_GEOFENCE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 52, "QR_MANAGEMENT.SCHOOL_NAME"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.schoolName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 54, "QR_MANAGEMENT.SCHOOL_NAME_PLACEHOLDER"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 56, "QR_MANAGEMENT.LATITUDE"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.latitude);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 58, "QR_MANAGEMENT.LONGITUDE"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.longitude);
      \u0275\u0275advance();
      \u0275\u0275property("title", \u0275\u0275pipeBind1(43, 60, "QR_MANAGEMENT.USE_CURRENT_LOCATION"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 62, "QR_MANAGEMENT.GEOFENCE_RADIUS"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.geofenceRadiusMeters);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.geofenceEnabled);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 64, "QR_MANAGEMENT.ENABLE_GEOFENCING"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 66, "QR_MANAGEMENT.GEOFENCE_HINT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.savingSettings);
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-check-lg", !ctx.savingSettings)("bi-hourglass-split", ctx.savingSettings);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.savingSettings ? \u0275\u0275pipeBind1(64, 68, "QR_MANAGEMENT.SAVING") : \u0275\u0275pipeBind1(65, 70, "QR_MANAGEMENT.SAVE_SETTINGS"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.settingsSaved);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 72, "QR_MANAGEMENT.HOW_IT_WORKS"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 74, "QR_MANAGEMENT.STEP_1_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 76, "QR_MANAGEMENT.STEP_1_DESC"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 78, "QR_MANAGEMENT.STEP_2_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 80, "QR_MANAGEMENT.STEP_2_DESC"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 82, "QR_MANAGEMENT.STEP_3_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 84, "QR_MANAGEMENT.STEP_3_DESC"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 86, "QR_MANAGEMENT.STEP_4_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 88, "QR_MANAGEMENT.STEP_4_DESC"));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, TitlePage, TranslateModule, TranslatePipe], styles: ["\n\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.section[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-regenerate[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-regenerate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-regenerate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qr-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n.qr-card[_ngcontent-%COMP%] {\n  border: 2px solid #eee;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.qr-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.qr-card.check-in[_ngcontent-%COMP%] {\n  border-color: #c8e6c9;\n}\n.qr-card.check-in[_ngcontent-%COMP%]   .qr-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n}\n.qr-card.check-out[_ngcontent-%COMP%] {\n  border-color: #ffcdd2;\n}\n.qr-card.check-out[_ngcontent-%COMP%]   .qr-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  color: #c62828;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem;\n  background: #fafafa;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-body[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid #eee;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-footer[_ngcontent-%COMP%]   .qr-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-footer[_ngcontent-%COMP%]   .btn-print[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #667eea;\n  background: #f0f4ff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.qr-card[_ngcontent-%COMP%]   .qr-footer[_ngcontent-%COMP%]   .btn-print[_ngcontent-%COMP%]:hover {\n  background: #e0e8ff;\n}\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n}\n.settings-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 0.9rem;\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #eee;\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: border-color 0.2s;\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus, \n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  color: #999;\n  font-size: 0.8rem;\n}\n.settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .btn-location[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 2px solid #eee;\n  background: #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #667eea;\n  margin-bottom: 1.25rem;\n  transition: all 0.2s;\n}\n.settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .btn-location[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n}\n.settings-form[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #333;\n}\n.settings-form[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  accent-color: #667eea;\n}\n.settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #eee;\n}\n.settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .save-success[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.instructions-section[_ngcontent-%COMP%]   .instructions-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.instructions-section[_ngcontent-%COMP%]   .instruction-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.instructions-section[_ngcontent-%COMP%]   .instruction-item[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.instructions-section[_ngcontent-%COMP%]   .instruction-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  color: #333;\n}\n.instructions-section[_ngcontent-%COMP%]   .instruction-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #666;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .qr-management-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn-regenerate[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .settings-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .btn-location[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0;\n  }\n  .instructions-section[_ngcontent-%COMP%]   .instructions-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.custom-btn-2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=qr-management.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrManagement, [{
    type: Component,
    args: [{ selector: "app-qr-management", standalone: true, imports: [CommonModule, FormsModule, TitlePage, TranslateModule], template: `<div class="container-fluid mt-4">\r
  <app-title-page\r
    [title]="'QR_MANAGEMENT.TITLE' | translate">\r
  </app-title-page>\r
  <!-- Messages -->\r
  <div class="alert alert-success" *ngIf="successMessage">\r
    <i class="bi bi-check-circle-fill"></i>\r
    {{ successMessage }}\r
  </div>\r
  <div class="alert alert-error" *ngIf="errorMessage">\r
    <i class="bi bi-exclamation-circle-fill"></i>\r
    {{ errorMessage }}\r
  </div>\r
\r
  <!-- QR Codes Section -->\r
  <div class="section qr-codes-section card card-general">\r
    <div class="section-header card-header">\r
      <h5><i class="bi bi-qr-code"></i> {{ 'QR_MANAGEMENT.QR_CODES' | translate }}</h5>\r
      <button class="custom-btn-2 btn-add-global-2" (click)="regenerateQrCodes()" [disabled]="regenerating">\r
        <i class="bi" [class.bi-arrow-clockwise]="!regenerating" [class.bi-hourglass-split]="regenerating"></i>\r
        {{ regenerating ? ('QR_MANAGEMENT.REGENERATING' | translate) : ('QR_MANAGEMENT.REGENERATE_ALL_BTN' | translate) }}\r
      </button>\r
    </div>\r
\r
    <div class="qr-cards" *ngIf="!loadingQrCodes">\r
      <!-- Check-In QR Code -->\r
      <div class="qr-card check-in">\r
        <div class="qr-header">\r
          <i class="bi bi-box-arrow-in-right"></i>\r
          <h3>{{ 'QR_MANAGEMENT.CHECK_IN_QR_CODE' | translate }}</h3>\r
        </div>\r
        <div class="qr-body">\r
          <canvas #checkInCanvas></canvas>\r
        </div>\r
        <div class="qr-footer">\r
          <span class="qr-date" *ngIf="checkInQrCode">\r
            {{ 'QR_MANAGEMENT.CREATED' | translate }}: {{ formatDate(checkInQrCode.createdAt) }}\r
          </span>\r
          <button class="btn-print" (click)="printQrCode('checkIn')">\r
            <i class="bi bi-printer"></i> {{ 'QR_MANAGEMENT.PRINT' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Check-Out QR Code -->\r
      <div class="qr-card check-out">\r
        <div class="qr-header">\r
          <i class="bi bi-box-arrow-right"></i>\r
          <h3>{{ 'QR_MANAGEMENT.CHECK_OUT_QR_CODE' | translate }}</h3>\r
        </div>\r
        <div class="qr-body">\r
          <canvas #checkOutCanvas></canvas>\r
        </div>\r
        <div class="qr-footer">\r
          <span class="qr-date" *ngIf="checkOutQrCode">\r
            {{ 'QR_MANAGEMENT.CREATED' | translate }}: {{ formatDate(checkOutQrCode.createdAt) }}\r
          </span>\r
          <button class="btn-print" (click)="printQrCode('checkOut')">\r
            <i class="bi bi-printer"></i> {{ 'QR_MANAGEMENT.PRINT' | translate }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="loading" *ngIf="loadingQrCodes">\r
      <div class="spinner"></div>\r
      <p>{{ 'QR_MANAGEMENT.LOADING_QR_CODES' | translate }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- School Settings Section -->\r
  <div class="card card-general">\r
    <div class="card-header">\r
      <h5><i class="bi bi-geo-alt"></i> {{ 'QR_MANAGEMENT.SCHOOL_LOCATION_GEOFENCE' | translate }}</h5>\r
    </div>\r
\r
    <div class="settings-form card-body">\r
      <div class="form-group">\r
        <label for="schoolName">{{ 'QR_MANAGEMENT.SCHOOL_NAME' | translate }}</label>\r
        <input type="text" id="schoolName" [(ngModel)]="settings.schoolName"\r
               [placeholder]="'QR_MANAGEMENT.SCHOOL_NAME_PLACEHOLDER' | translate">\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="latitude">{{ 'QR_MANAGEMENT.LATITUDE' | translate }}</label>\r
          <input type="number" id="latitude" [(ngModel)]="settings.latitude"\r
                 step="0.000001" placeholder="e.g., 40.7128">\r
        </div>\r
        <div class="form-group">\r
          <label for="longitude">{{ 'QR_MANAGEMENT.LONGITUDE' | translate }}</label>\r
          <input type="number" id="longitude" [(ngModel)]="settings.longitude"\r
                 step="0.000001" placeholder="e.g., -74.0060">\r
        </div>\r
        <button class="btn-location" (click)="getCurrentLocation()" [title]="'QR_MANAGEMENT.USE_CURRENT_LOCATION' | translate">\r
          <i class="bi bi-crosshairs"></i>\r
        </button>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="radius">{{ 'QR_MANAGEMENT.GEOFENCE_RADIUS' | translate }}</label>\r
          <input type="number" id="radius" [(ngModel)]="settings.geofenceRadiusMeters"\r
                 min="10" max="1000" placeholder="100">\r
        </div>\r
        <div class="form-group checkbox-group">\r
          <label class="checkbox-label">\r
            <input type="checkbox" [(ngModel)]="settings.geofenceEnabled">\r
            <span class="checkmark"></span>\r
            {{ 'QR_MANAGEMENT.ENABLE_GEOFENCING' | translate }}\r
          </label>\r
          <small>{{ 'QR_MANAGEMENT.GEOFENCE_HINT' | translate }}</small>\r
        </div>\r
      </div>\r
\r
      <div class="form-actions">\r
        <button class="custom-btn-2 btn-add-global-2" (click)="saveSettings()" [disabled]="savingSettings">\r
          <i class="bi" [class.bi-check-lg]="!savingSettings" [class.bi-hourglass-split]="savingSettings"></i>\r
          {{ savingSettings ? ('QR_MANAGEMENT.SAVING' | translate) : ('QR_MANAGEMENT.SAVE_SETTINGS' | translate) }}\r
        </button>\r
        <span class="save-success" *ngIf="settingsSaved">\r
          <i class="bi bi-check-circle-fill"></i> {{ 'QR_MANAGEMENT.SAVED' | translate }}\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Instructions Section -->\r
  <div class="section instructions-section card card-general">\r
    <div class="card-header section-header">\r
      <h5><i class="bi bi-info-circle"></i> {{ 'QR_MANAGEMENT.HOW_IT_WORKS' | translate }}</h5>\r
    </div>\r
\r
    <div class="instructions-content">\r
      <div class="instruction-item">\r
        <div class="step-number">1</div>\r
        <div class="step-content">\r
          <h4>{{ 'QR_MANAGEMENT.STEP_1_TITLE' | translate }}</h4>\r
          <p>{{ 'QR_MANAGEMENT.STEP_1_DESC' | translate }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="instruction-item">\r
        <div class="step-number">2</div>\r
        <div class="step-content">\r
          <h4>{{ 'QR_MANAGEMENT.STEP_2_TITLE' | translate }}</h4>\r
          <p>{{ 'QR_MANAGEMENT.STEP_2_DESC' | translate }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="instruction-item">\r
        <div class="step-number">3</div>\r
        <div class="step-content">\r
          <h4>{{ 'QR_MANAGEMENT.STEP_3_TITLE' | translate }}</h4>\r
          <p>{{ 'QR_MANAGEMENT.STEP_3_DESC' | translate }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="instruction-item">\r
        <div class="step-number">4</div>\r
        <div class="step-content">\r
          <h4>{{ 'QR_MANAGEMENT.STEP_4_TITLE' | translate }}</h4>\r
          <p>{{ 'QR_MANAGEMENT.STEP_4_DESC' | translate }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/qr-management/qr-management.scss */\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert.alert-success {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n.alert.alert-error {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  color: #c62828;\n  border: 1px solid #ef9a9a;\n}\n.section {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-bottom: 1.5rem;\n  overflow: hidden;\n}\n.section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.section .section-header h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #333;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.section .section-header h2 i {\n  color: #667eea;\n}\n.section .section-header .btn-regenerate {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9800 0%,\n      #f57c00 100%);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.section .section-header .btn-regenerate:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);\n}\n.section .section-header .btn-regenerate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.qr-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n.qr-card {\n  border: 2px solid #eee;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.qr-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  transform: translateY(-2px);\n}\n.qr-card.check-in {\n  border-color: #c8e6c9;\n}\n.qr-card.check-in .qr-header {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f5e9 0%,\n      #c8e6c9 100%);\n  color: #2e7d32;\n}\n.qr-card.check-out {\n  border-color: #ffcdd2;\n}\n.qr-card.check-out .qr-header {\n  background:\n    linear-gradient(\n      135deg,\n      #ffebee 0%,\n      #ffcdd2 100%);\n  color: #c62828;\n}\n.qr-card .qr-header {\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.qr-card .qr-header i {\n  font-size: 1.5rem;\n}\n.qr-card .qr-header h3 {\n  margin: 0;\n  font-size: 1rem;\n}\n.qr-card .qr-body {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem;\n  background: #fafafa;\n}\n.qr-card .qr-body canvas {\n  border-radius: 8px;\n}\n.qr-card .qr-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-top: 1px solid #eee;\n}\n.qr-card .qr-footer .qr-date {\n  font-size: 0.8rem;\n  color: #999;\n}\n.qr-card .qr-footer .btn-print {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #667eea;\n  background: #f0f4ff;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.qr-card .qr-footer .btn-print:hover {\n  background: #e0e8ff;\n}\n.loading {\n  text-align: center;\n  padding: 3rem;\n}\n.loading .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #667eea;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading p {\n  color: #666;\n}\n.settings-form {\n  padding: 1.5rem;\n}\n.settings-form .form-group {\n  margin-bottom: 1.25rem;\n}\n.settings-form .form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 0.9rem;\n}\n.settings-form .form-group input[type=text],\n.settings-form .form-group input[type=number] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #eee;\n  border-radius: 10px;\n  font-size: 1rem;\n  transition: border-color 0.2s;\n}\n.settings-form .form-group input[type=text]:focus,\n.settings-form .form-group input[type=number]:focus {\n  outline: none;\n  border-color: #667eea;\n}\n.settings-form .form-group small {\n  display: block;\n  margin-top: 0.25rem;\n  color: #999;\n  font-size: 0.8rem;\n}\n.settings-form .form-row {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-end;\n}\n.settings-form .form-row .form-group {\n  flex: 1;\n}\n.settings-form .form-row .btn-location {\n  width: 48px;\n  height: 48px;\n  border: 2px solid #eee;\n  background: #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: #667eea;\n  margin-bottom: 1.25rem;\n  transition: all 0.2s;\n}\n.settings-form .form-row .btn-location:hover {\n  background: #f0f4ff;\n  border-color: #667eea;\n}\n.settings-form .checkbox-group .checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #333;\n}\n.settings-form .checkbox-group .checkbox-label input[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  accent-color: #667eea;\n}\n.settings-form .form-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #eee;\n}\n.settings-form .form-actions .btn-save {\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.settings-form .form-actions .btn-save:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n}\n.settings-form .form-actions .btn-save:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.settings-form .form-actions .save-success {\n  color: #4caf50;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  animation: fadeIn 0.3s;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.instructions-section .instructions-content {\n  padding: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n}\n.instructions-section .instruction-item {\n  display: flex;\n  gap: 1rem;\n}\n.instructions-section .instruction-item .step-number {\n  width: 40px;\n  height: 40px;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.instructions-section .instruction-item .step-content h4 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  color: #333;\n}\n.instructions-section .instruction-item .step-content p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #666;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .qr-management-container {\n    padding: 1rem;\n  }\n  .section .section-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .section .section-header .btn-regenerate {\n    width: 100%;\n    justify-content: center;\n  }\n  .settings-form .form-row {\n    flex-direction: column;\n  }\n  .settings-form .form-row .btn-location {\n    width: 100%;\n    margin-bottom: 0;\n  }\n  .instructions-section .instructions-content {\n    grid-template-columns: 1fr;\n  }\n}\n.custom-btn-2 i {\n  color: white;\n}\n/*# sourceMappingURL=qr-management.css.map */\n"] }]
  }], () => [{ type: QrCheckinService }, { type: AuthService }, { type: Router }, { type: TranslateService }, { type: PageTitleService }], { checkInCanvas: [{
    type: ViewChild,
    args: ["checkInCanvas"]
  }], checkOutCanvas: [{
    type: ViewChild,
    args: ["checkOutCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrManagement, { className: "QrManagement", filePath: "src/app/features/qr-management/qr-management.ts", lineNumber: 22 });
})();
export {
  QrManagement
};
//# sourceMappingURL=chunk-ME7OEOJE.js.map
