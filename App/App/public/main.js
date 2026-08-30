import {
  provideIonicAngular
} from "./chunk-6T32DAUD.js";
import "./chunk-CSKJ3OEL.js";
import "./chunk-T5LCTCQ6.js";
import {
  FeatureCodes
} from "./chunk-MQPIBHSQ.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-I34BDRB4.js";
import "./chunk-OP56HYPY.js";
import "./chunk-XRULW7VX.js";
import "./chunk-3ZGDTXDI.js";
import "./chunk-TV7O33EV.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-DZBRP4UD.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  FcmPushNotificationService
} from "./chunk-RMTREPAI.js";
import {
  errorInterceptor
} from "./chunk-MYZVJCXP.js";
import "./chunk-MQZU4GYV.js";
import {
  TenantFeatureService
} from "./chunk-WNVYLB4C.js";
import {
  OfflineCacheService
} from "./chunk-TVKEU73H.js";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from "./chunk-HXQXS5SJ.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-7KUBODN6.js";
import "./chunk-NEGRQ2LF.js";
import {
  AuthService
} from "./chunk-2FXTNIWG.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-MW573DHT.js";
import {
  CommonModule,
  NgIf
} from "./chunk-HDGNZI2G.js";
import "./chunk-XUYKXYA7.js";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  provideHttpClient,
  withInterceptors
} from "./chunk-JR6HYZ4P.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  NgZone,
  catchError,
  firstValueFrom,
  from,
  importProvidersFrom,
  inject,
  map,
  of,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-NYEMFD63.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-C7TRL22M.js";

// node_modules/zone.js/fesm2015/zone.js
var global = globalThis;
function __symbol__(name) {
  const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance = global["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  class ZoneImpl {
    static __symbol__ = __symbol__;
    static assertZonePatched() {
      if (global["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = ZoneImpl.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global, ZoneImpl, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    _parent;
    _name;
    _properties;
    _zoneDelegate;
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone)
        return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec)
        throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const { type, data: { isPeriodic = false, isRefreshable = false } = {} } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this)
        throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    get zone() {
      return this._zone;
    }
    _zone;
    _taskCounts = {
      "microTask": 0,
      "macroTask": 0,
      "eventTask": 0
    };
    _parentDelegate;
    _forkDlgt;
    _forkZS;
    _forkCurrZone;
    _interceptDlgt;
    _interceptZS;
    _interceptCurrZone;
    _invokeDlgt;
    _invokeZS;
    _invokeCurrZone;
    _handleErrorDlgt;
    _handleErrorZS;
    _handleErrorCurrZone;
    _scheduleTaskDlgt;
    _scheduleTaskZS;
    _scheduleTaskCurrZone;
    _invokeTaskDlgt;
    _invokeTaskZS;
    _invokeTaskCurrZone;
    _cancelTaskDlgt;
    _cancelTaskZS;
    _cancelTaskCurrZone;
    _hasTaskDlgt;
    _hasTaskDlgtOwner;
    _hasTaskZS;
    _hasTaskCurrZone;
    constructor(zone, parentDelegate, zoneSpec) {
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask)
          returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    type;
    source;
    invoke;
    callback;
    data;
    scheduleFn;
    cancelFn;
    _zone = null;
    runCount = 0;
    _zoneDelegates = null;
    _state = "notScheduled";
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = { name: "NO ZONE" };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = { parent: null, zone: new ZoneImpl(null, null) };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  const global2 = globalThis;
  const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global2["Zone"] && (checkDuplicate || typeof global2["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  global2["Zone"] ??= initZone();
  return global2["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && _global.process.toString() === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && _global.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames$1 = {};
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === "string"
    ) {
      event.returnValue = result;
    } else if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = { enumerable: true, configurable: true };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet?.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass)
    return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob")
      continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {
  }
  return ieOrEdge;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return { capture: options, passive: true };
      }
      if (!options) {
        return { passive: true };
      }
      if (typeof options === "object" && options.passive !== false) {
        return __spreadProps(__spreadValues({}, options), { passive: true });
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = patchOptions2?.diff || compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options === "object" && options !== null) {
        const newOptions = __spreadValues({}, options);
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isEventListenerObject = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isEventListenerObject = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal2 = options?.signal;
        if (signal2?.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal2) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal2) {
          taskData.options.signal = signal2;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal2, "abort", onAbort, { once: true });
          task.removeAbortListener = () => signal2.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (typeof task.options !== "boolean") {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isEventListenerObject) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global2, api) {
  const Event = global2["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global2, api) {
  api.patchMethod(global2, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const { handle, handleId } = task.data;
    return clearNative.call(window2, handle ?? handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const { handle: handle2, handleId: handleId2, isPeriodic: isPeriodic2, isRefreshable: isRefreshable2 } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const { handleId, handle, isRefreshable, isPeriodic } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const { zone, state } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return handle ?? handleId ?? task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id?.[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task?.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const { isBrowser: isBrowser2, isMix: isMix2 } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback"
  ];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const { eventNames, zoneSymbolEventNames: zoneSymbolEventNames2, TRUE_STR: TRUE_STR2, FALSE_STR: FALSE_STR2, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2 } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames2[eventName] = {};
    zoneSymbolEventNames2[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames2[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global2, api) {
  api.patchEventPrototype(global2, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker"
    ]);
    const ignoreErrorProperties = [];
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket"
  ]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    target?.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone2) {
  Zone2.__load_patch("legacy", (global2) => {
    const legacyPatch = global2[Zone2.__symbol__("legacyPatch")];
    if (legacyPatch) {
      legacyPatch();
    }
  });
  Zone2.__load_patch("timers", (global2) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global2, set, clear, "Timeout");
    patchTimer(global2, set, clear, "Interval");
    patchTimer(global2, set, clear, "Immediate");
  });
  Zone2.__load_patch("requestAnimationFrame", (global2) => {
    patchTimer(global2, "request", "cancel", "AnimationFrame");
    patchTimer(global2, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global2, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone2.__load_patch("blocking", (global2, Zone3) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global2, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone3.current.run(delegate, global2, args, name2);
        };
      });
    }
  });
  Zone2.__load_patch("EventTarget", (global2, Zone3, api) => {
    patchEvent(global2, api);
    eventTargetPatch(global2, api);
    const XMLHttpRequestEventTarget = global2["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global2, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone2.__load_patch("MutationObserver", (global2, Zone3, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone2.__load_patch("IntersectionObserver", (global2, Zone3, api) => {
    patchClass("IntersectionObserver");
  });
  Zone2.__load_patch("FileReader", (global2, Zone3, api) => {
    patchClass("FileReader");
  });
  Zone2.__load_patch("on_property", (global2, Zone3, api) => {
    propertyDescriptorPatch(api, global2);
  });
  Zone2.__load_patch("customElements", (global2, Zone3, api) => {
    patchCustomElements(global2, api);
  });
  Zone2.__load_patch("XHR", (global2, Zone3) => {
    patchXHR(global2);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest = window2["XMLHttpRequest"];
      if (!XMLHttpRequest) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone3.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone3.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone3.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone3.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone2.__load_patch("geolocation", (global2) => {
    if (global2["navigator"] && global2["navigator"].geolocation) {
      patchPrototype(global2["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone2.__load_patch("PromiseRejectionEvent", (global2, Zone3) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global2, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global2["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global2["PromiseRejectionEvent"]) {
      Zone3[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone3[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone2.__load_patch("queueMicrotask", (global2, Zone3, api) => {
    patchQueueMicrotask(global2, api);
  });
}
function patchPromise(Zone2) {
  Zone2.__load_patch("ZoneAwarePromise", (global2, Zone3, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__2 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__2("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__2("Promise");
    const symbolThen = __symbol__2("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__2("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone3[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && typeof value.then === "function";
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__2("state");
    const symbolValue = __symbol__2("value");
    const symbolFinally = __symbol__2("finally");
    const symbolParentPromiseValue = __symbol__2("parentPromiseValue");
    const symbolParentPromiseState = __symbol__2("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__2("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone3.currentTask && Zone3.currentTask.data && Zone3.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone3.current;
            uncaughtPromiseError.task = Zone3.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__2("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone3[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, { rejection: promise[symbolValue], promise });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {
    };
    const AggregateError = global2.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({ status: "fulfilled", value }),
          errorCallback: (err) => ({ status: "rejected", reason: err })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        let C = this.constructor?.[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global2[symbolPromise] = global2["Promise"];
    global2["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__2("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global2, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone3.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone2) {
  Zone2.__load_patch("toString", (global2) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global2[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global2[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone2) {
  Zone2.__load_patch("util", (global2, Zone3, api) => {
    const eventNames = getOnEventNames(global2);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone3.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone3.__symbol__("UNPATCHED_EVENTS");
    if (global2[SYMBOL_UNPATCHED_EVENTS]) {
      global2[SYMBOL_BLACK_LISTED_EVENTS] = global2[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global2[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone3[SYMBOL_BLACK_LISTED_EVENTS] = Zone3[SYMBOL_UNPATCHED_EVENTS] = global2[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone2) {
  patchPromise(Zone2);
  patchToString(Zone2);
  patchUtil(Zone2);
}
var Zone$1 = loadZone();
patchCommon(Zone$1);
patchBrowser(Zone$1);

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};

// src/app/core/guards/role.guard.ts
var roleGuard = (...allowedRoles) => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const userRole = authService.getUserRole();
    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    }
    return router.createUrlTree(["/403"]);
  };
};

// src/app/core/guards/feature.guard.ts
var featureGuard = (requiredFeature) => {
  return () => {
    const featureService = inject(TenantFeatureService);
    const authService = inject(AuthService);
    const router = inject(Router);
    if (authService.isSuperAdmin()) {
      return true;
    }
    const cachedFeatures = featureService.getEnabledFeatures();
    if (cachedFeatures.length > 0) {
      if (cachedFeatures.includes(requiredFeature)) {
        return true;
      }
      return router.createUrlTree(["/403"]);
    }
    return featureService.loadFeaturesIfNeeded().pipe(map((features) => {
      if (features.includes(requiredFeature)) {
        return true;
      }
      return router.createUrlTree(["/403"]);
    }), catchError(() => {
      return of(router.createUrlTree(["/403"]));
    }));
  };
};

// src/app/core/guards/no-auth.guard.ts
var noAuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    router.navigate(["/dashboard"], { replaceUrl: true });
    return false;
  }
  return true;
};
var landingGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    router.navigate(["/dashboard"], { replaceUrl: true });
    return false;
  }
  if (Capacitor.isNativePlatform()) {
    router.navigate(["/login"], { replaceUrl: true });
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var ADMIN_ONLY = roleGuard("Admin");
var ADMIN_TEACHER = roleGuard("Admin", "Teacher");
var ADMIN_TEACHER_PARENT = roleGuard("Admin", "Teacher", "Parent");
var SUPER_ADMIN_ONLY = roleGuard("SuperAdmin");
var EVENTS_FEATURE = featureGuard(FeatureCodes.EVENTS);
var DAILY_ACTIVITIES_FEATURE = featureGuard(FeatureCodes.DAILY_ACTIVITIES);
var HOLIDAYS_FEATURE = featureGuard(FeatureCodes.HOLIDAYS);
var LEAVES_FEATURE = featureGuard(FeatureCodes.LEAVES);
var FEES_FEATURE = featureGuard(FeatureCodes.FEES);
var GALLERY_FEATURE = featureGuard(FeatureCodes.GALLERY);
var FOOD_MENU_FEATURE = featureGuard(FeatureCodes.FOOD_MENU);
var QR_CHECKIN_FEATURE = featureGuard(FeatureCodes.QR_CHECKIN);
var RECLAMATIONS_FEATURE = featureGuard(FeatureCodes.RECLAMATIONS);
var LEARNING_GAMES_FEATURE = featureGuard(FeatureCodes.LEARNING_GAMES);
var AI_ASSISTANT_FEATURE = featureGuard(FeatureCodes.AI_ASSISTANT);
var BASIC_AI_FEATURE = featureGuard(FeatureCodes.BASIC_AI);
var CHAT_FEATURE = featureGuard(FeatureCodes.CHAT);
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-DBOYDTAV.js").then((m) => m.Landing),
    canActivate: [landingGuard],
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-VURXEBUP.js").then((m) => m.Login),
    canActivate: [noAuthGuard]
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-YDWTRNEO.js").then((m) => m.Register),
    canActivate: [noAuthGuard]
  },
  {
    path: "forgot-password",
    loadComponent: () => import("./chunk-CNQSFRZK.js").then((m) => m.ForgotPasswordComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "reset-password",
    loadComponent: () => import("./chunk-WLWNACSH.js").then((m) => m.ResetPasswordComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "request-demo",
    loadComponent: () => import("./chunk-Y43V5G7K.js").then((m) => m.RequestDemo)
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-7JLM72WQ.js").then((m) => m.About)
  },
  {
    path: "terms-of-service",
    loadComponent: () => import("./chunk-QQQOXNPZ.js").then((m) => m.TermsOfService)
  },
  {
    path: "privacy-policy",
    loadComponent: () => import("./chunk-NY5TW32A.js").then((m) => m.PrivacyPolicy)
  },
  // QR Action - Public route for deep linking (no auth guard, handles auth internally)
  {
    path: "qr-action/:code",
    loadComponent: () => import("./chunk-GLXSS7UM.js").then((m) => m.QrActionComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-SFQEEFNV.js").then((m) => m.MainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-UUKBN6YW.js").then((m) => m.Dashboard)
      },
      // Parent routes - Admin & Teacher only
      {
        path: "parents",
        loadComponent: () => import("./chunk-EFOHKCGO.js").then((m) => m.Parent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "parents/add",
        loadComponent: () => import("./chunk-GAEISRXB.js").then((m) => m.AddParentComponent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "parents/edit/:id",
        loadComponent: () => import("./chunk-SYQMLSEJ.js").then((m) => m.EditParent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "parents/detail/:id",
        loadComponent: () => import("./chunk-PR4FNBX2.js").then((m) => m.ParentDetail)
      },
      // Children routes - Admin & Teacher only
      {
        path: "children",
        loadComponent: () => import("./chunk-7NIN7WHA.js").then((m) => m.Children)
      },
      {
        path: "children/add",
        loadComponent: () => import("./chunk-6XH7GJPT.js").then((m) => m.AddChildren),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "children/edit/:id",
        loadComponent: () => import("./chunk-BJJZSBBO.js").then((m) => m.EditChildren)
      },
      {
        path: "children/detail/:id",
        loadComponent: () => import("./chunk-7JEKTFIP.js").then((m) => m.ChildDetail)
      },
      {
        path: "events",
        loadComponent: () => import("./chunk-DDALRZX7.js").then((m) => m.Event),
        canActivate: [EVENTS_FEATURE]
      },
      {
        path: "events/add",
        loadComponent: () => import("./chunk-O4OY7T7Z.js").then((m) => m.AddEvent),
        canActivate: [ADMIN_TEACHER, EVENTS_FEATURE]
      },
      {
        path: "events/edit/:id",
        loadComponent: () => import("./chunk-GJOXSF7F.js").then((m) => m.EditEvent),
        canActivate: [EVENTS_FEATURE]
      },
      {
        path: "events/:id/participants",
        loadComponent: () => import("./chunk-GMV4H4C6.js").then((m) => m.EventParticipants),
        canActivate: [EVENTS_FEATURE]
      },
      {
        path: "events/detail/:id",
        loadComponent: () => import("./chunk-63WVZYX7.js").then((m) => m.EventDetailComponent),
        canActivate: [EVENTS_FEATURE]
      },
      {
        path: "daily-activities",
        loadComponent: () => import("./chunk-CIDZ2HE5.js").then((m) => m.DailyActivities),
        canActivate: [DAILY_ACTIVITIES_FEATURE]
      },
      {
        path: "activities",
        loadComponent: () => import("./chunk-CIDZ2HE5.js").then((m) => m.DailyActivities),
        canActivate: [DAILY_ACTIVITIES_FEATURE]
      },
      {
        path: "activities/detail/:id",
        loadComponent: () => import("./chunk-SMW6TZXP.js").then((m) => m.ActivityDetail),
        canActivate: [DAILY_ACTIVITIES_FEATURE]
      },
      // Attendance routes - Admin & Teacher only
      {
        path: "attendance",
        loadComponent: () => import("./chunk-M7R23AX2.js").then((m) => m.AttendanceSheet),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "attendance-list",
        loadComponent: () => import("./chunk-MB5LXJUB.js").then((m) => m.AttendanceList),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "calendar",
        loadComponent: () => import("./chunk-5OFOSN4D.js").then((m) => m.CalendarPageComponent)
      },
      {
        path: "holidays",
        loadComponent: () => import("./chunk-VFV63NBH.js").then((m) => m.HolidayComponent),
        canActivate: [ADMIN_TEACHER, HOLIDAYS_FEATURE]
      },
      {
        path: "holidays/add",
        loadComponent: () => import("./chunk-CZ2ZVZUU.js").then((m) => m.AddHolidayComponent),
        canActivate: [HOLIDAYS_FEATURE]
      },
      {
        path: "holidays/edit/:id",
        loadComponent: () => import("./chunk-F3U42OOQ.js").then((m) => m.EditHolidayComponent),
        canActivate: [HOLIDAYS_FEATURE]
      },
      // Leaves routes - Admin & Teacher only
      {
        path: "leaves",
        loadComponent: () => import("./chunk-2FZIXTUV.js").then((m) => m.Leaves),
        canActivate: [ADMIN_TEACHER, LEAVES_FEATURE]
      },
      {
        path: "leaves/add",
        loadComponent: () => import("./chunk-FFIZQQ2H.js").then((m) => m.AddLeave),
        canActivate: [ADMIN_TEACHER, LEAVES_FEATURE]
      },
      {
        path: "fees",
        loadComponent: () => import("./chunk-HHR6YU2L.js").then((m) => m.FeeComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "fees/add",
        loadComponent: () => import("./chunk-Z6Y7JIOS.js").then((m) => m.AddFeeComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "fees/edit/:id",
        loadComponent: () => import("./chunk-JD3XGE6P.js").then((m) => m.FeeEditComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "fees/detail/:id",
        loadComponent: () => import("./chunk-O6ABHZQ5.js").then((m) => m.FeeDetailComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      // Educator routes - Admin & Teacher only
      {
        path: "educators",
        loadComponent: () => import("./chunk-PLHMAEP7.js").then((m) => m.Educator),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "educators/add",
        loadComponent: () => import("./chunk-JUH7C4F3.js").then((m) => m.AddEducator),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "educators/edit/:id",
        loadComponent: () => import("./chunk-NV443AT5.js").then((m) => m.EditEducator),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "educators/detail/:id",
        loadComponent: () => import("./chunk-CT2X3YF2.js").then((m) => m.EducatorDetail),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-7PV6EXYX.js").then((m) => m.EditProfile)
      },
      {
        path: "basic-ai",
        loadComponent: () => import("./chunk-5NX7BQ5J.js").then((m) => m.BasicAIComponent),
        canActivate: [BASIC_AI_FEATURE]
      },
      {
        path: "ai-assistant",
        loadComponent: () => import("./chunk-UPOJL5G7.js").then((m) => m.AIAssistantComponent),
        canActivate: [AI_ASSISTANT_FEATURE]
      },
      {
        path: "messages",
        loadComponent: () => import("./chunk-ZWF2GYGX.js").then((m) => m.MessagesComponent)
      },
      {
        path: "chat",
        loadComponent: () => import("./chunk-MQKXLJWQ.js").then((m) => m.ChatComponent),
        canActivate: [CHAT_FEATURE]
      },
      {
        path: "profile/edit",
        loadComponent: () => import("./chunk-7PV6EXYX.js").then((m) => m.EditProfile)
      },
      // Settings - Admin & Teacher only
      {
        path: "settings",
        loadComponent: () => import("./chunk-XC6RI4HO.js").then((m) => m.SettingsComponent),
        canActivate: [ADMIN_TEACHER]
      },
      // Classes routes - Admin & Teacher only
      {
        path: "classes",
        loadComponent: () => import("./chunk-3HFWSSVU.js").then((m) => m.ClassesComponent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "classes/add",
        loadComponent: () => import("./chunk-KWOMT34Z.js").then((m) => m.AddClassComponent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "classes/detail/:id",
        loadComponent: () => import("./chunk-RGAU3SVZ.js").then((m) => m.ClassDetailComponent),
        canActivate: [ADMIN_TEACHER]
      },
      {
        path: "learning-games",
        loadComponent: () => import("./chunk-7PXYLFB7.js").then((m) => m.LearningGamesComponent),
        canActivate: [LEARNING_GAMES_FEATURE]
      },
      {
        path: "reclamations",
        loadComponent: () => import("./chunk-VUM4FN5Z.js").then((m) => m.ReclamationsComponent),
        canActivate: [RECLAMATIONS_FEATURE]
      },
      // Appointments routes - All authenticated users
      {
        path: "appointments",
        loadComponent: () => import("./chunk-BUQSRMYH.js").then((m) => m.Appointments)
      },
      {
        path: "appointments/add",
        loadComponent: () => import("./chunk-3IZHMTLB.js").then((m) => m.AddAppointment),
        canActivate: [roleGuard("Parent")]
      },
      {
        path: "appointments/edit/:id",
        loadComponent: () => import("./chunk-U5XRUT75.js").then((m) => m.EditAppointment),
        canActivate: [roleGuard("Parent")]
      },
      {
        path: "appointments/detail/:id",
        loadComponent: () => import("./chunk-LVQTBDKH.js").then((m) => m.AppointmentDetail)
      },
      // Static Fees routes - Admin & Parent only
      {
        path: "static-fees",
        loadComponent: () => import("./chunk-Y3UDMPRO.js").then((m) => m.StaticFeesComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "static-fees/add",
        loadComponent: () => import("./chunk-X4N3U7DH.js").then((m) => m.AddStaticFeeComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "static-fees/:id",
        loadComponent: () => import("./chunk-DCDPSNO4.js").then((m) => m.StaticFeeDetailComponent),
        canActivate: [roleGuard("Admin", "Parent"), FEES_FEATURE]
      },
      {
        path: "gallery",
        loadComponent: () => import("./chunk-IEGTSHGQ.js").then((m) => m.Gallery),
        canActivate: [GALLERY_FEATURE]
      },
      {
        path: "food-menu",
        loadComponent: () => import("./chunk-ABRRZGUA.js").then((m) => m.FoodMenuComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/add",
        loadComponent: () => import("./chunk-UT2G6GC7.js").then((m) => m.AddMenuComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/edit/:id",
        loadComponent: () => import("./chunk-UT2G6GC7.js").then((m) => m.AddMenuComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/food-items",
        loadComponent: () => import("./chunk-7K7NGQOV.js").then((m) => m.FoodItemsComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/parent",
        loadComponent: () => import("./chunk-LDHS3CLG.js").then((m) => m.ParentMenuViewComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/detail/:id",
        loadComponent: () => import("./chunk-QRKQ66QG.js").then((m) => m.MenuDetailComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "food-menu/report/:id",
        loadComponent: () => import("./chunk-6W5AOGRW.js").then((m) => m.MenuReportComponent),
        canActivate: [FOOD_MENU_FEATURE]
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-FR3NMIQU.js").then((m) => m.NotificationsComponent)
      },
      {
        path: "notification-settings",
        loadComponent: () => import("./chunk-RP5JBGH6.js").then((m) => m.NotificationSettingsComponent)
      },
      {
        path: "profile-menu",
        loadComponent: () => import("./chunk-XOXRGMD2.js").then((m) => m.ProfileMenuComponent)
      },
      {
        path: "qr-checkin",
        loadComponent: () => import("./chunk-46XQBLFL.js").then((m) => m.QrCheckin),
        canActivate: [QR_CHECKIN_FEATURE]
      },
      // QR Management - Admin & Teacher only
      {
        path: "qr-management",
        loadComponent: () => import("./chunk-ME7OEOJE.js").then((m) => m.QrManagement),
        canActivate: [ADMIN_TEACHER, QR_CHECKIN_FEATURE]
      },
      {
        path: "base-ui",
        loadComponent: () => import("./chunk-K6N7RRMD.js").then((m) => m.BaseUi)
      },
      // SuperAdmin routes
      {
        path: "super-admin/dashboard",
        loadComponent: () => import("./chunk-IHSJWDPQ.js").then((m) => m.SuperAdminDashboard),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/tenants",
        loadComponent: () => import("./chunk-YCZGMJII.js").then((m) => m.Tenants),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/tenants/add",
        loadComponent: () => import("./chunk-PTE55DF5.js").then((m) => m.AddTenant),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/tenants/edit/:id",
        loadComponent: () => import("./chunk-PTE55DF5.js").then((m) => m.AddTenant),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/tenants/detail/:id",
        loadComponent: () => import("./chunk-MWEXV4FA.js").then((m) => m.TenantDetail),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/tenants/:id/features",
        loadComponent: () => import("./chunk-BRW6W37G.js").then((m) => m.TenantFeatures),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      // SuperAdmin Billing routes
      {
        path: "super-admin/billing",
        loadComponent: () => import("./chunk-ER6RH24Y.js").then((m) => m.Billing),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "super-admin/billing/:id",
        loadComponent: () => import("./chunk-O6CIN4CW.js").then((m) => m.BillingDetail),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      // SuperAdmin Demo Requests
      {
        path: "super-admin/demo-requests",
        loadComponent: () => import("./chunk-L2HAHXEL.js").then((m) => m.DemoRequests),
        canActivate: [SUPER_ADMIN_ONLY]
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "404",
    loadComponent: () => import("./chunk-FWZV3OGR.js").then((m) => m.NotFoundComponent)
  },
  {
    path: "403",
    loadComponent: () => import("./chunk-VU36QRMA.js").then((m) => m.ForbiddenComponent)
  },
  {
    path: "500",
    loadComponent: () => import("./chunk-VU36QRMA.js").then((m) => m.ForbiddenComponent)
  },
  {
    path: "**",
    loadComponent: () => import("./chunk-FWZV3OGR.js").then((m) => m.NotFoundComponent)
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var AUTH_ENDPOINT_MARKERS = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/refresh",
  "/api/auth/logout",
  "/api/passwordreset"
];
var isAuthEndpoint = (url) => AUTH_ENDPOINT_MARKERS.some((marker) => url.includes(marker));
var refreshInFlight = null;
function refreshAccessToken(authService) {
  const inFlight = refreshInFlight;
  if (inFlight) {
    return inFlight;
  }
  const promise = firstValueFrom(authService.refreshSession()).then((res) => res.token).finally(() => {
    refreshInFlight = null;
  });
  refreshInFlight = promise;
  return promise;
}
var attachToken = (req, token) => req.clone({ headers: req.headers.set("Authorization", `Bearer ${token}`) });
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  if (isAuthEndpoint(req.url)) {
    return next(req);
  }
  const token = authService.getToken();
  if (!token) {
    return next(req);
  }
  return next(attachToken(req, token)).pipe(catchError((error) => {
    if (error.status === 401 && authService.getRefreshToken()) {
      return from(refreshAccessToken(authService)).pipe(
        switchMap((newToken) => next(attachToken(req, newToken))),
        catchError(() => throwError(() => error))
        // refresh failed - let error interceptor handle logout
      );
    }
    return throwError(() => error);
  }));
};

// node_modules/@capacitor/network/dist/esm/index.js
var Network = registerPlugin("Network", {
  web: () => import("./chunk-J7KZXMBF.js").then((m) => new m.NetworkWeb())
});

// src/app/core/services/offline-queue.service.ts
var OfflineQueueService = class _OfflineQueueService {
  STORAGE_KEY = "miniminds_offline_queue";
  MAX_QUEUE_SIZE = 50;
  queue = [];
  queueStatus$ = new BehaviorSubject({
    pending: 0,
    syncing: false
  });
  constructor() {
    this.loadQueue();
  }
  /**
   * Add a request to the offline queue
   */
  addToQueue(request, description) {
    const id = this.generateId();
    const queuedRequest = {
      id,
      request: this.cloneRequest(request),
      timestamp: Date.now(),
      retryCount: 0,
      maxRetries: 3,
      description: description || this.getRequestDescription(request)
    };
    this.queue.push(queuedRequest);
    this.saveQueue();
    this.updateStatus();
    console.log(`[OfflineQueue] Added request to queue: ${queuedRequest.description}`);
    return id;
  }
  /**
   * Get all queued requests
   */
  getQueue() {
    return [...this.queue];
  }
  /**
   * Get queue status as observable
   */
  getStatus() {
    return this.queueStatus$.asObservable();
  }
  /**
   * Get current queue status synchronously
   */
  getCurrentStatus() {
    return this.queueStatus$.value;
  }
  /**
   * Remove a request from queue by ID
   */
  removeFromQueue(id) {
    const index = this.queue.findIndex((item) => item.id === id);
    if (index > -1) {
      const removed = this.queue.splice(index, 1)[0];
      console.log(`[OfflineQueue] Removed from queue: ${removed.description}`);
      this.saveQueue();
      this.updateStatus();
    }
  }
  /**
   * Clear the entire queue
   */
  clearQueue() {
    this.queue = [];
    this.saveQueue();
    this.updateStatus();
    console.log("[OfflineQueue] Queue cleared");
  }
  /**
   * Mark syncing started
   */
  startSync() {
    this.queueStatus$.next(__spreadProps(__spreadValues({}, this.queueStatus$.value), {
      syncing: true
    }));
  }
  /**
   * Mark syncing completed
   */
  endSync() {
    this.queueStatus$.next(__spreadProps(__spreadValues({}, this.queueStatus$.value), {
      syncing: false,
      lastSync: /* @__PURE__ */ new Date()
    }));
  }
  /**
   * Increment retry count for a request
   */
  incrementRetry(id) {
    const item = this.queue.find((req) => req.id === id);
    if (item) {
      item.retryCount++;
      if (item.retryCount >= item.maxRetries) {
        console.warn(`[OfflineQueue] Max retries exceeded for: ${item.description}`);
        this.removeFromQueue(id);
        return false;
      }
      this.saveQueue();
      return true;
    }
    return false;
  }
  /**
   * Check if queue has requests
   */
  hasQueuedRequests() {
    return this.queue.length > 0;
  }
  /**
   * Get queue size
   */
  getQueueSize() {
    return this.queue.length;
  }
  /**
   * Load queue from localStorage
   */
  loadQueue() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.queue = parsed.map((item) => __spreadProps(__spreadValues({}, item), {
          request: new HttpRequest(item.request.method, item.request.url, item.request.body, {
            headers: item.request.headers,
            params: item.request.params,
            responseType: item.request.responseType,
            withCredentials: item.request.withCredentials
          })
        }));
        console.log(`[OfflineQueue] Loaded ${this.queue.length} queued requests`);
        this.updateStatus();
      }
    } catch (error) {
      console.error("[OfflineQueue] Error loading queue:", error);
      this.queue = [];
    }
  }
  /**
   * Save queue to localStorage
   */
  saveQueue() {
    try {
      if (this.queue.length > this.MAX_QUEUE_SIZE) {
        console.warn(`[OfflineQueue] Queue size exceeded ${this.MAX_QUEUE_SIZE}, removing oldest`);
        this.queue = this.queue.slice(-this.MAX_QUEUE_SIZE);
      }
      const serializable = this.queue.map((item) => ({
        id: item.id,
        request: {
          method: item.request.method,
          url: item.request.url,
          body: item.request.body,
          headers: this.serializeHeaders(item.request.headers),
          params: this.serializeParams(item.request.params),
          responseType: item.request.responseType,
          withCredentials: item.request.withCredentials
        },
        timestamp: item.timestamp,
        retryCount: item.retryCount,
        maxRetries: item.maxRetries,
        description: item.description
      }));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      console.error("[OfflineQueue] Error saving queue:", error);
    }
  }
  /**
   * Update queue status
   */
  updateStatus() {
    this.queueStatus$.next(__spreadProps(__spreadValues({}, this.queueStatus$.value), {
      pending: this.queue.length
    }));
  }
  /**
   * Clone HttpRequest (can't store directly in localStorage)
   */
  cloneRequest(request) {
    return request.clone();
  }
  /**
   * Serialize headers for storage
   */
  serializeHeaders(headers) {
    const serialized = {};
    headers.keys().forEach((key) => {
      serialized[key] = headers.get(key);
    });
    return serialized;
  }
  /**
   * Serialize params for storage
   */
  serializeParams(params) {
    const serialized = {};
    params.keys().forEach((key) => {
      serialized[key] = params.get(key);
    });
    return serialized;
  }
  /**
   * Generate unique ID for queue item
   */
  generateId() {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Get human-readable description of request
   */
  getRequestDescription(request) {
    const method = request.method;
    const url = request.url;
    const parts = url.split("/");
    const endpoint = parts[parts.length - 1] || parts[parts.length - 2] || "unknown";
    return `${method} ${endpoint}`;
  }
  static \u0275fac = function OfflineQueueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OfflineQueueService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OfflineQueueService, factory: _OfflineQueueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflineQueueService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/core/services/network.service.ts
var NetworkService = class _NetworkService {
  ngZone;
  networkStatus$ = new BehaviorSubject({
    connected: true,
    connectionType: "unknown"
  });
  isInitialized = false;
  isSyncing = false;
  offlineQueue = inject(OfflineQueueService);
  http = inject(HttpClient);
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.initNetworkListener();
  }
  /**
   * Initialize network status listener
   */
  async initNetworkListener() {
    if (this.isInitialized)
      return;
    this.isInitialized = true;
    try {
      const status = await Network.getStatus();
      this.updateStatus(status);
    } catch (error) {
      console.warn("Could not get initial network status:", error);
      this.updateStatus({
        connected: navigator.onLine,
        connectionType: "unknown"
      });
    }
    Network.addListener("networkStatusChange", (status) => {
      this.ngZone.run(() => {
        this.updateStatus(status);
        console.log("Network status changed:", status);
      });
    });
    window.addEventListener("online", () => {
      this.ngZone.run(() => {
        this.networkStatus$.next(__spreadProps(__spreadValues({}, this.networkStatus$.value), {
          connected: true
        }));
      });
    });
    window.addEventListener("offline", () => {
      this.ngZone.run(() => {
        this.networkStatus$.next(__spreadProps(__spreadValues({}, this.networkStatus$.value), {
          connected: false
        }));
      });
    });
  }
  updateStatus(status) {
    const wasConnected = this.networkStatus$.value.connected;
    const isNowConnected = status.connected;
    this.networkStatus$.next({
      connected: status.connected,
      connectionType: status.connectionType
    });
    if (!wasConnected && isNowConnected) {
      console.log("[NetworkService] Connection restored, processing offline queue...");
      this.processOfflineQueue();
    }
  }
  /**
   * Get current network status as observable
   */
  get status$() {
    return this.networkStatus$.asObservable();
  }
  /**
   * Get current connection status synchronously
   */
  get isConnected() {
    return this.networkStatus$.value.connected;
  }
  /**
   * Get current connection type
   */
  get connectionType() {
    return this.networkStatus$.value.connectionType;
  }
  /**
   * Check if on WiFi
   */
  get isOnWifi() {
    return this.networkStatus$.value.connectionType === "wifi";
  }
  /**
   * Check if on cellular
   */
  get isOnCellular() {
    return this.networkStatus$.value.connectionType === "cellular";
  }
  /**
   * Get current status (async)
   */
  async getStatus() {
    try {
      return await Network.getStatus();
    } catch {
      return {
        connected: navigator.onLine,
        connectionType: "unknown"
      };
    }
  }
  /**
   * Process offline queue when connection is restored
   */
  async processOfflineQueue() {
    if (this.isSyncing || !this.isConnected) {
      return;
    }
    const queue = this.offlineQueue.getQueue();
    if (queue.length === 0) {
      console.log("[NetworkService] No queued requests to process");
      return;
    }
    this.isSyncing = true;
    this.offlineQueue.startSync();
    console.log(`[NetworkService] Processing ${queue.length} queued requests...`);
    let successCount = 0;
    let failCount = 0;
    for (const item of queue) {
      try {
        const request = item.request;
        await firstValueFrom(this.http.request(request.method, request.url, {
          body: request.body,
          headers: request.headers,
          params: request.params,
          responseType: request.responseType,
          withCredentials: request.withCredentials
        }));
        console.log(`[NetworkService] \u2713 Synced: ${item.description}`);
        this.offlineQueue.removeFromQueue(item.id);
        successCount++;
      } catch (error) {
        console.error(`[NetworkService] \u2717 Failed to sync: ${item.description}`, error);
        const shouldRetry = this.offlineQueue.incrementRetry(item.id);
        if (!shouldRetry) {
          console.warn(`[NetworkService] Removing from queue (max retries): ${item.description}`);
          failCount++;
        }
      }
    }
    this.isSyncing = false;
    this.offlineQueue.endSync();
    console.log(`[NetworkService] Queue processing complete: ${successCount} succeeded, ${failCount} failed`);
  }
  /**
   * Get offline queue service (for components to access)
   */
  getOfflineQueue() {
    return this.offlineQueue;
  }
  static \u0275fac = function NetworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkService)(\u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NetworkService, factory: _NetworkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: NgZone }], null);
})();

// src/app/core/interceptors/offline.interceptor.ts
var SKIP_OFFLINE_QUEUE = "X-Skip-Offline-Queue";
var ENABLE_OFFLINE_QUEUE = "X-Enable-Offline-Queue";
var offlineInterceptor = (req, next) => {
  const networkService = inject(NetworkService);
  const offlineQueue = inject(OfflineQueueService);
  const skipQueue = req.headers.has(SKIP_OFFLINE_QUEUE);
  const forceQueue = req.headers.has(ENABLE_OFFLINE_QUEUE);
  let cleanReq = req;
  if (skipQueue || forceQueue) {
    cleanReq = req.clone({
      headers: req.headers.delete(SKIP_OFFLINE_QUEUE).delete(ENABLE_OFFLINE_QUEUE)
    });
  }
  const shouldQueue = !skipQueue && (forceQueue || shouldQueueRequest(cleanReq));
  if (!networkService.isConnected && shouldQueue) {
    const queueId = offlineQueue.addToQueue(cleanReq, getRequestDescription(cleanReq));
    console.log(`[OfflineInterceptor] Request queued: ${getRequestDescription(cleanReq)}`);
    return of(new HttpResponse({
      status: 202,
      // 202 Accepted (queued for processing)
      statusText: "Queued",
      body: {
        success: true,
        queued: true,
        queueId,
        message: "Request saved. Will sync when online."
      },
      headers: cleanReq.headers
    }));
  }
  return next(cleanReq).pipe(tap((event) => {
    if (event instanceof HttpResponse && shouldQueue) {
      console.log(`[OfflineInterceptor] Request succeeded: ${getRequestDescription(cleanReq)}`);
    }
  }), catchError((error) => {
    if (error.status === 0 && shouldQueue) {
      console.warn(`[OfflineInterceptor] Network error, queueing request: ${getRequestDescription(cleanReq)}`);
      const queueId = offlineQueue.addToQueue(cleanReq, getRequestDescription(cleanReq));
      return of(new HttpResponse({
        status: 202,
        statusText: "Queued",
        body: {
          success: true,
          queued: true,
          queueId,
          message: "Network error. Request saved and will sync when online."
        },
        headers: cleanReq.headers
      }));
    }
    return throwError(() => error);
  }));
};
function shouldQueueRequest(req) {
  const method = req.method.toUpperCase();
  if (!["POST", "PUT", "DELETE", "PATCH"].includes(method)) {
    return false;
  }
  const url = req.url.toLowerCase();
  const queueableEndpoints = [
    "/attendance",
    // Check-in/check-out
    "/messages",
    // Send messages
    "/daily-activities",
    // Upload activities/photos
    "/qr-action",
    // QR code actions
    "/leaves",
    // Leave requests
    "/reclamations",
    // Reclamation submissions
    "/fees"
    // Fee updates
  ];
  return queueableEndpoints.some((endpoint) => url.includes(endpoint));
}
function getRequestDescription(req) {
  const method = req.method;
  const url = req.url;
  const parts = url.split("/");
  const endpoint = parts[parts.length - 1] || parts[parts.length - 2] || "unknown";
  let bodyInfo = "";
  if (req.body) {
    if (typeof req.body === "object") {
      const keys = Object.keys(req.body);
      if (keys.length > 0) {
        bodyInfo = ` (${keys.slice(0, 3).join(", ")})`;
      }
    }
  }
  return `${method} /${endpoint}${bodyInfo}`;
}

// src/app/core/interceptors/cache.interceptor.ts
var SKIP_CACHE = "X-Skip-Cache";
var MAX_CACHE_SIZE = 500 * 1024;
var NO_CACHE_PATTERNS = [
  /\/profile-picture/,
  /\/photos\/\d+$/,
  // Individual photo fetch
  /\/photos\/download/,
  /imageData/i,
  /fullImage/i,
  /\/i18n\//,
  // Translation files - always fetch fresh so updates show immediately
  /\/tenantfeatures\//
  // Feature flags - dynamic, must never be stale
];
var cacheInterceptor = (req, next) => {
  const cacheService = inject(OfflineCacheService);
  const networkService = inject(NetworkService);
  if (req.method !== "GET") {
    return next(req);
  }
  const skipCache = req.headers.has(SKIP_CACHE);
  if (skipCache) {
    const cleanReq = req.clone({ headers: req.headers.delete(SKIP_CACHE) });
    return next(cleanReq);
  }
  const shouldSkipUrl = NO_CACHE_PATTERNS.some((pattern) => pattern.test(req.url));
  if (shouldSkipUrl) {
    return next(req);
  }
  if (!networkService.isConnected) {
    const cached = cacheService.get(req.url);
    if (cached) {
      console.log(`[Cache] Serving from cache (offline): ${req.url}`);
      const cachedWithHeader = cached.clone({
        headers: cached.headers.set("X-From-Cache", "true")
      });
      return of(cachedWithHeader);
    }
    console.log(`[Cache] No cache available for: ${req.url}`);
  }
  return next(req).pipe(tap((event) => {
    if (event instanceof HttpResponse && event.status === 200) {
      const responseSize = JSON.stringify(event.body).length;
      if (responseSize > MAX_CACHE_SIZE) {
        console.log(`[Cache] Skipping large response (${Math.round(responseSize / 1024)}KB): ${req.url}`);
        return;
      }
      cacheService.set(req.url, event);
      console.log(`[Cache] Cached response: ${req.url}`);
    }
  }));
};

// src/app/app.config.ts
var CustomTranslateLoader = class {
  http;
  constructor(http) {
    this.http = http;
  }
  getTranslation(lang) {
    return this.http.get(`/i18n/${lang}.json`);
  }
};
function HttpLoaderFactory(http) {
  return new CustomTranslateLoader(http);
}
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(withInterceptors([authInterceptor, cacheInterceptor, offlineInterceptor, errorInterceptor])),
    provideIonicAngular({
      swipeBackEnabled: true
    }),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]
};

// node_modules/@capacitor/status-bar/dist/esm/definitions.js
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
var Animation;
(function(Animation2) {
  Animation2["None"] = "NONE";
  Animation2["Slide"] = "SLIDE";
  Animation2["Fade"] = "FADE";
})(Animation || (Animation = {}));

// node_modules/@capacitor/status-bar/dist/esm/index.js
var StatusBar = registerPlugin("StatusBar");

// src/app/core/services/status-bar.service.ts
var StatusBarService = class _StatusBarService {
  isNative = Capacitor.isNativePlatform();
  constructor() {
    this.initialize();
  }
  /**
   * Initialize status bar with default settings
   */
  async initialize() {
    if (!this.isNative)
      return;
    const isIOS = Capacitor.getPlatform() === "ios";
    if (!isIOS)
      return;
    try {
      await this.setStyle("dark");
    } catch (error) {
      console.warn("StatusBar initialization failed:", error);
    }
  }
  /**
   * Set status bar background color
   * @param color Hex color string (e.g., '#ffffff', '#7dd3c0')
   */
  async setBackgroundColor(color) {
    if (!this.isNative)
      return;
    try {
      await StatusBar.setBackgroundColor({ color });
    } catch (error) {
      console.warn("Failed to set status bar color:", error);
    }
  }
  /**
   * Set status bar style
   * @param style 'dark' = black icons (for light backgrounds), 'light' = white icons (for dark backgrounds)
   */
  async setStyle(style) {
    if (!this.isNative)
      return;
    try {
      await StatusBar.setStyle({
        style: style === "dark" ? Style.Light : Style.Dark
      });
    } catch (error) {
      console.warn("Failed to set status bar style:", error);
    }
  }
  /**
   * Set status bar for light background (black icons)
   */
  async setForLightBackground() {
    await this.setStyle("dark");
  }
  /**
   * Set status bar for dark background (white icons)
   */
  async setForDarkBackground() {
    await this.setStyle("light");
  }
  /**
   * Hide the status bar
   */
  async hide() {
    if (!this.isNative)
      return;
    try {
      await StatusBar.hide();
    } catch (error) {
      console.warn("Failed to hide status bar:", error);
    }
  }
  /**
   * Show the status bar
   */
  async show() {
    if (!this.isNative)
      return;
    try {
      await StatusBar.show();
    } catch (error) {
      console.warn("Failed to show status bar:", error);
    }
  }
  /**
   * Set overlay mode (content goes behind status bar)
   * Only works on Android
   */
  async setOverlay(overlay) {
    if (!this.isNative)
      return;
    try {
      await StatusBar.setOverlaysWebView({ overlay });
    } catch (error) {
      console.warn("Failed to set overlay:", error);
    }
  }
  /**
   * Quick preset: White status bar with dark icons
   */
  async setWhiteTheme() {
    await this.setBackgroundColor("#ffffff");
    await this.setStyle("dark");
  }
  /**
   * Quick preset: Primary color status bar (teal/mint) with white icons
   */
  async setPrimaryTheme() {
    await this.setBackgroundColor("#7dd3c0");
    await this.setStyle("light");
  }
  /**
   * Quick preset: Dark status bar with white icons
   */
  async setDarkTheme() {
    await this.setBackgroundColor("#1f2937");
    await this.setStyle("light");
  }
  /**
   * Quick preset: Transparent status bar (Android only)
   */
  async setTransparent() {
    await this.setBackgroundColor("#00000000");
    await this.setOverlay(true);
  }
  static \u0275fac = function StatusBarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusBarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatusBarService, factory: _StatusBarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusBarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/components/offline-indicator/offline-indicator.component.ts
function OfflineIndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "i", 4);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No internet connection");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@slideDown", void 0);
  }
}
function OfflineIndicatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275element(2, "i", 7);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Back online");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@slideDown", void 0);
  }
}
var OfflineIndicatorComponent = class _OfflineIndicatorComponent {
  networkService;
  isConnected = true;
  showOnlineMessage = false;
  subscription;
  wasOffline = false;
  constructor(networkService) {
    this.networkService = networkService;
  }
  ngOnInit() {
    this.subscription = this.networkService.status$.subscribe((state) => {
      const wasConnected = this.isConnected;
      this.isConnected = state.connected;
      if (!wasConnected && state.connected && this.wasOffline) {
        this.showOnlineMessage = true;
        setTimeout(() => {
          this.showOnlineMessage = false;
        }, 3e3);
      }
      if (!state.connected) {
        this.wasOffline = true;
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static \u0275fac = function OfflineIndicatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OfflineIndicatorComponent)(\u0275\u0275directiveInject(NetworkService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfflineIndicatorComponent, selectors: [["app-offline-indicator"]], decls: 2, vars: 2, consts: [["class", "offline-banner", 4, "ngIf"], ["class", "online-banner", 4, "ngIf"], [1, "offline-banner"], [1, "offline-content"], [1, "bi", "bi-wifi-off"], [1, "online-banner"], [1, "online-content"], [1, "bi", "bi-wifi"]], template: function OfflineIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, OfflineIndicatorComponent_div_0_Template, 5, 1, "div", 0)(1, OfflineIndicatorComponent_div_1_Template, 5, 1, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.isConnected);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOnlineMessage);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.offline-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  padding: 8px 16px;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.online-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  padding: 8px 16px;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.offline-content[_ngcontent-%COMP%], \n.online-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.offline-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.online-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  .offline-banner[_ngcontent-%COMP%], \n   .online-banner[_ngcontent-%COMP%] {\n    padding-top: calc(8px + env(safe-area-inset-top));\n  }\n}\n/*# sourceMappingURL=offline-indicator.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OfflineIndicatorComponent, [{
    type: Component,
    args: [{ selector: "app-offline-indicator", standalone: true, imports: [CommonModule], template: `
    <div class="offline-banner" *ngIf="!isConnected" [@slideDown]>
      <div class="offline-content">
        <i class="bi bi-wifi-off"></i>
        <span>No internet connection</span>
      </div>
    </div>
    <div class="online-banner" *ngIf="showOnlineMessage" [@slideDown]>
      <div class="online-content">
        <i class="bi bi-wifi"></i>
        <span>Back online</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;9f661a069bb0bf906665221333d359bfba96580831772d352946216584fce7b9;C:/laragon/www/miniminds/miniminds-web/src/app/shared/components/offline-indicator/offline-indicator.component.ts */\n.offline-banner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  padding: 8px 16px;\n  z-index: 9999;\n  animation: slideDown 0.3s ease-out;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.online-banner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  padding: 8px 16px;\n  z-index: 9999;\n  animation: slideDown 0.3s ease-out;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.offline-content,\n.online-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.offline-content i,\n.online-content i {\n  font-size: 16px;\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  .offline-banner,\n  .online-banner {\n    padding-top: calc(8px + env(safe-area-inset-top));\n  }\n}\n/*# sourceMappingURL=offline-indicator.component.css.map */\n"] }]
  }], () => [{ type: NetworkService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfflineIndicatorComponent, { className: "OfflineIndicatorComponent", filePath: "src/app/shared/components/offline-indicator/offline-indicator.component.ts", lineNumber: 97 });
})();

// node_modules/@capacitor/app/dist/esm/index.js
var App = registerPlugin("App", {
  web: () => import("./chunk-4OFBL32F.js").then((m) => new m.AppWeb())
});

// node_modules/@notnotsamuel/capacitor-swipe-back/dist/esm/index.js
var CapacitorSwipeBackPlugin = registerPlugin("CapacitorSwipeBackPlugin", {
  web: () => import("./chunk-2XY2Q3SF.js").then((m) => new m.CapacitorSwipeBackWeb())
});

// src/app/app.ts
var App2 = class _App {
  translates;
  title = signal("miniminds-web", ...ngDevMode ? [{ debugName: "title" }] : []);
  translate = inject(TranslateService);
  authService = inject(AuthService);
  fcmService = inject(FcmPushNotificationService);
  networkService = inject(NetworkService);
  // Initialize network monitoring
  statusBarService = inject(StatusBarService);
  // Initialize status bar
  router = inject(Router);
  zone = inject(NgZone);
  userSubscription;
  constructor(translates) {
    this.translates = translates;
    const savedLang = localStorage.getItem("lang") || "en";
    translates.setDefaultLang("en");
    translates.use(savedLang);
    this.initializeSwipeBack();
    this.initializeDeepLinks();
  }
  ngOnInit() {
    this.handleMobileStartup();
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      if (user?.preferredLanguage) {
        this.translate.use(user.preferredLanguage);
        localStorage.setItem("lang", user.preferredLanguage);
      }
      if (user && this.fcmService.isSupported()) {
        this.initializePushNotifications();
      }
    });
    if (this.authService.isAuthenticated() && this.fcmService.isSupported()) {
      this.initializePushNotifications();
    }
  }
  /**
   * Handle mobile app startup - redirect to appropriate page based on auth status
   * Mobile apps should skip the landing page and go directly to login or dashboard
   */
  handleMobileStartup() {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    const currentPath = window.location.pathname;
    if (currentPath !== "/" && currentPath !== "") {
      return;
    }
    this.zone.run(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(["/dashboard"], { replaceUrl: true });
      } else {
        this.router.navigate(["/login"], { replaceUrl: true });
      }
    });
  }
  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }
  async initializePushNotifications() {
    try {
      await this.fcmService.initialize();
      console.log("FCM Push notifications initialized");
    } catch (error) {
      console.error("Failed to initialize FCM push notifications:", error);
    }
  }
  async initializeSwipeBack() {
    if (Capacitor.isNativePlatform()) {
      try {
        await CapacitorSwipeBackPlugin.enable();
        console.log(`${Capacitor.getPlatform()} swipe back gesture enabled`);
      } catch (error) {
        console.error("Failed to enable swipe back gesture:", error);
      }
    }
  }
  initializeDeepLinks() {
    if (!Capacitor.isNativePlatform()) {
      return;
    }
    App.addListener("appUrlOpen", (event) => {
      console.log("Deep link received:", event.url);
      this.zone.run(() => {
        const url = new URL(event.url);
        let path = url.pathname;
        if (event.url.startsWith("miniminds://")) {
          const parts = event.url.replace("miniminds://", "").split("/");
          if (parts[0] === "qr-action" && parts[1]) {
            path = `/qr-action/${parts[1]}`;
          }
        }
        if (path && path !== "/") {
          console.log("Navigating to:", path);
          this.router.navigateByUrl(path);
        }
      });
    });
    console.log("Deep link listener initialized");
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-offline-indicator")(1, "router-outlet");
    }
  }, dependencies: [RouterOutlet, OfflineIndicatorComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App2, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, OfflineIndicatorComponent], template: "<app-offline-indicator></app-offline-indicator>\r\n<router-outlet></router-outlet>\r\n" }]
  }], () => [{ type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App2, { className: "App", filePath: "src/app/app.ts", lineNumber: 21 });
})();

// src/main.ts
bootstrapApplication(App2, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
