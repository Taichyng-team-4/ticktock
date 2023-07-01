import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  unref,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OWZKEKZD.js";

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}

// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

// node_modules/date-fns/esm/addMonths/index.js
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

// node_modules/date-fns/esm/add/index.js
function add(dirtyDate, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var date = toDate(dirtyDate);
  var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date;
  var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1e3;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/startOfWeek/index.js
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/startOfISOWeek/index.js
function startOfISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  return startOfWeek(dirtyDate, {
    weekStartsOn: 1
  });
}

// node_modules/date-fns/esm/getISOWeekYear/index.js
function getISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfISOWeekYear/index.js
function startOfISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = startOfISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/startOfDay/index.js
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/differenceInCalendarDays/index.js
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

// node_modules/date-fns/esm/addYears/index.js
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

// node_modules/date-fns/esm/constants/index.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;

// node_modules/date-fns/esm/isDate/index.js
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/eachDayOfInterval/index.js
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}

// node_modules/date-fns/esm/endOfWeek/index.js
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY2 = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY2) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds2 = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds2 * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/esm/_lib/assign/index.js
function assign(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

// node_modules/date-fns/esm/formatDistanceStrict/index.js
var MILLISECONDS_IN_MINUTE = 1e3 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;

// node_modules/date-fns/esm/getDay/index.js
function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

// node_modules/date-fns/esm/getDaysInMonth/index.js
function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth2 = /* @__PURE__ */ new Date(0);
  lastDayOfMonth2.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth2.setHours(0, 0, 0, 0);
  return lastDayOfMonth2.getDate();
}

// node_modules/date-fns/esm/getHours/index.js
function getHours(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

// node_modules/date-fns/esm/getISOWeek/index.js
var MILLISECONDS_IN_WEEK3 = 6048e5;
function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK3) + 1;
}

// node_modules/date-fns/esm/getMinutes/index.js
function getMinutes(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

// node_modules/date-fns/esm/getMonth/index.js
function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

// node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js
var MILLISECONDS_IN_DAY3 = 24 * 60 * 60 * 1e3;

// node_modules/date-fns/esm/getSeconds/index.js
function getSeconds(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

// node_modules/date-fns/esm/getWeekYear/index.js
function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/startOfWeekYear/index.js
function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getWeekYear(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = startOfWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/getWeek/index.js
var MILLISECONDS_IN_WEEK4 = 6048e5;
function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK4) + 1;
}

// node_modules/date-fns/esm/getYear/index.js
function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

// node_modules/date-fns/esm/isAfter/index.js
function isAfter(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

// node_modules/date-fns/esm/isBefore/index.js
function isBefore(dirtyDate, dirtyDateToCompare) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// node_modules/date-fns/esm/isEqual/index.js
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i2 = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i2 >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i2++]
          };
        },
        e: function e2(_e2) {
          throw _e2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s3() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e2(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

// node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/date-fns/esm/parse/_lib/Setter.js
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = function() {
  function Setter2() {
    _classCallCheck(this, Setter2);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
}();
var ValueSetter = function(_Setter) {
  _inherits(ValueSetter2, _Setter);
  var _super = _createSuper(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set2(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = function(_Setter2) {
  _inherits(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set2(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
}(Setter);

// node_modules/date-fns/esm/parse/_lib/Parser.js
var Parser = function() {
  function Parser2() {
    _classCallCheck(this, Parser2);
    _defineProperty(this, "incompatibleTokens", void 0);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", void 0);
  }
  _createClass(Parser2, [{
    key: "run",
    value: function run(dateString, token, match2, options) {
      var result = this.parse(dateString, token, match2, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
}();

// node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js
var EraParser = function(_Parser) {
  _inherits(EraParser2, _Parser);
  var _super = _createSuper(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 140);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
        case "GGGGG":
          return match2.era(dateString, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return match2.era(dateString, {
            width: "wide"
          }) || match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/constants.js
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

// node_modules/date-fns/esm/parse/_lib/utils.js
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

// node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js
var YearParser = function(_Parser) {
  _inherits(YearParser2, _Parser);
  var _super = _createSuper(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js
var LocalWeekYearParser = function(_Parser) {
  _inherits(LocalWeekYearParser2, _Parser);
  var _super = _createSuper(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "Yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);
  return LocalWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js
var ISOWeekYearParser = function(_Parser) {
  _inherits(ISOWeekYearParser2, _Parser);
  var _super = _createSuper(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js
var ExtendedYearParser = function(_Parser) {
  _inherits(ExtendedYearParser2, _Parser);
  var _super = _createSuper(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js
var QuarterParser = function(_Parser) {
  _inherits(QuarterParser2, _Parser);
  var _super = _createSuper(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        case "Qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "QQQ":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js
var StandAloneQuarterParser = function(_Parser) {
  _inherits(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        case "qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "qqq":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js
var MonthParser = function(_Parser) {
  _inherits(MonthParser2, _Parser);
  var _super = _createSuper(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    return _this;
  }
  _createClass(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Mo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "MMM":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js
var StandAloneMonthParser = function(_Parser) {
  _inherits(StandAloneMonthParser2, _Parser);
  var _super = _createSuper(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Lo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "LLL":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCWeek/index.js
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js
var LocalWeekParser = function(_Parser) {
  _inherits(LocalWeekParser2, _Parser);
  var _super = _createSuper(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js
var ISOWeekParser = function(_Parser) {
  _inherits(ISOWeekParser2, _Parser);
  var _super = _createSuper(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = function(_Parser) {
  _inherits(DateParser2, _Parser);
  var _super = _createSuper(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      var month = date.getUTCMonth();
      if (isLeapYear2) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js
var DayOfYearParser = function(_Parser) {
  _inherits(DayOfYearParser2, _Parser);
  var _super = _createSuper(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear2 = isLeapYearIndex(year);
      if (isLeapYear2) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCDay/index.js
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(2, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js
var DayParser = function(_Parser) {
  _inherits(DayParser2, _Parser);
  var _super = _createSuper(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js
var LocalDayParser = function(_Parser) {
  _inherits(LocalDayParser2, _Parser);
  var _super = _createSuper(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "eo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "eee":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js
var StandAloneLocalDayParser = function(_Parser) {
  _inherits(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "co":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "ccc":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
}(Parser);

// node_modules/date-fns/esm/_lib/setUTCISODay/index.js
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js
var ISODayParser = function(_Parser) {
  _inherits(ISODayParser2, _Parser);
  var _super = _createSuper(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        case "io":
          return match2.ordinalNumber(dateString, {
            unit: "day"
          });
        case "iii":
          return mapValue(match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiii":
          return mapValue(match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiiii":
          return mapValue(match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiii":
        default:
          return mapValue(match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js
var AMPMParser = function(_Parser) {
  _inherits(AMPMParser2, _Parser);
  var _super = _createSuper(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js
var AMPMMidnightParser = function(_Parser) {
  _inherits(AMPMMidnightParser2, _Parser);
  var _super = _createSuper(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js
var DayPeriodParser = function(_Parser) {
  _inherits(DayPeriodParser2, _Parser);
  var _super = _createSuper(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js
var Hour1to12Parser = function(_Parser) {
  _inherits(Hour1to12Parser2, _Parser);
  var _super = _createSuper(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js
var Hour0to23Parser = function(_Parser) {
  _inherits(Hour0to23Parser2, _Parser);
  var _super = _createSuper(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js
var Hour0To11Parser = function(_Parser) {
  _inherits(Hour0To11Parser2, _Parser);
  var _super = _createSuper(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js
var Hour1To24Parser = function(_Parser) {
  _inherits(Hour1To24Parser2, _Parser);
  var _super = _createSuper(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js
var MinuteParser = function(_Parser) {
  _inherits(MinuteParser2, _Parser);
  var _super = _createSuper(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 60);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match2.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js
var SecondParser = function(_Parser) {
  _inherits(SecondParser2, _Parser);
  var _super = _createSuper(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 50);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match2.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js
var FractionOfSecondParser = function(_Parser) {
  _inherits(FractionOfSecondParser2, _Parser);
  var _super = _createSuper(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 30);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback3 = function valueCallback4(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback3);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js
var ISOTimezoneWithZParser = function(_Parser) {
  _inherits(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js
var ISOTimezoneParser = function(_Parser) {
  _inherits(ISOTimezoneParser2, _Parser);
  var _super = _createSuper(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js
var TimestampSecondsParser = function(_Parser) {
  _inherits(TimestampSecondsParser2, _Parser);
  var _super = _createSuper(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 40);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js
var TimestampMillisecondsParser = function(_Parser) {
  _inherits(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 20);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
}(Parser);

// node_modules/date-fns/esm/parse/_lib/parsers/index.js
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

// node_modules/date-fns/esm/parse/index.js
var formattingTokensRegExp2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp2 = /^'([^]*?)'?$/;
var doubleQuoteRegExp2 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp2 = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  if (!locale2.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp2).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters_default) {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp2);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale2.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp2)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString2(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof(_ret) === "object")
        return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a3, b2) {
    return b2 - a3;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a3, b2) {
      return b2.subPriority - a3.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString2(input) {
  return input.match(escapedStringRegExp2)[1].replace(doubleQuoteRegExp2, "'");
}

// node_modules/date-fns/esm/subDays/index.js
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

// node_modules/date-fns/esm/parseISO/index.js
function parseISO(argument, options) {
  var _options$additionalDi;
  requiredArgs(1, arguments);
  var additionalDigits = toInteger((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return /* @__PURE__ */ new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = /* @__PURE__ */ new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return /* @__PURE__ */ new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return /* @__PURE__ */ new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = /* @__PURE__ */ new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex2(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex2(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex2(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// node_modules/date-fns/esm/setMonth/index.js
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

// node_modules/date-fns/esm/set/index.js
function set(dirtyDate, values) {
  requiredArgs(2, arguments);
  if (_typeof(values) !== "object" || values === null) {
    throw new RangeError("values parameter must be an object");
  }
  var date = toDate(dirtyDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds));
  }
  return date;
}

// node_modules/date-fns/esm/setHours/index.js
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

// node_modules/date-fns/esm/setMilliseconds/index.js
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var milliseconds2 = toInteger(dirtyMilliseconds);
  date.setMilliseconds(milliseconds2);
  return date;
}

// node_modules/date-fns/esm/setMinutes/index.js
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

// node_modules/date-fns/esm/setSeconds/index.js
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

// node_modules/date-fns/esm/setYear/index.js
function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}

// node_modules/date-fns/esm/subMonths/index.js
function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

// node_modules/date-fns/esm/sub/index.js
function sub(date, duration) {
  requiredArgs(2, arguments);
  if (!duration || _typeof(duration) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var years = duration.years ? toInteger(duration.years) : 0;
  var months = duration.months ? toInteger(duration.months) : 0;
  var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
  var days = duration.days ? toInteger(duration.days) : 0;
  var hours = duration.hours ? toInteger(duration.hours) : 0;
  var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
  var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
  var dateWithoutMonths = subMonths(date, months + years * 12);
  var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7);
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1e3;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

// node_modules/date-fns/esm/subYears/index.js
function subYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

// node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js
function jt() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      createBaseVNode("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function wa() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      createBaseVNode("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function Sn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Pn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function qn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      createBaseVNode("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Xn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Jn() {
  return openBlock(), createElementBlock(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      createBaseVNode("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
var Cn = (e2, n, a3, t2, i2) => {
  const v = parse(e2, n.slice(0, e2.length), /* @__PURE__ */ new Date());
  return isValid(v) && isDate(v) ? t2 || i2 ? v : set(v, {
    hours: +a3.hours,
    minutes: +(a3 == null ? void 0 : a3.minutes),
    seconds: +(a3 == null ? void 0 : a3.seconds),
    milliseconds: 0
  }) : null;
};
var Da = (e2, n, a3, t2, i2) => {
  const v = Array.isArray(a3) ? a3[0] : a3;
  if (typeof n == "string")
    return Cn(e2, n, v, t2, i2);
  if (Array.isArray(n)) {
    let m3 = null;
    for (const P of n)
      if (m3 = Cn(e2, P, v, t2, i2), m3)
        break;
    return m3;
  }
  return typeof n == "function" ? n(e2) : null;
};
var _ = (e2) => e2 ? new Date(e2) : /* @__PURE__ */ new Date();
var $a = (e2, n, a3) => {
  if (n) {
    const i2 = (e2.getMonth() + 1).toString().padStart(2, "0"), v = e2.getDate().toString().padStart(2, "0"), m3 = e2.getHours().toString().padStart(2, "0"), P = e2.getMinutes().toString().padStart(2, "0"), V = a3 ? e2.getSeconds().toString().padStart(2, "0") : "00";
    return `${e2.getFullYear()}-${i2}-${v}T${m3}:${P}:${V}.000Z`;
  }
  const t2 = Date.UTC(
    e2.getUTCFullYear(),
    e2.getUTCMonth(),
    e2.getUTCDate(),
    e2.getUTCHours(),
    e2.getUTCMinutes(),
    e2.getUTCSeconds()
  );
  return new Date(t2).toISOString();
};
var Ke = (e2) => {
  let n = _(JSON.parse(JSON.stringify(e2)));
  return n = setHours(n, 0), n = setMinutes(n, 0), n = setSeconds(n, 0), n = setMilliseconds(n, 0), n;
};
var je = (e2, n, a3, t2) => {
  let i2 = e2 ? _(e2) : _();
  return (n || n === 0) && (i2 = setHours(i2, +n)), (a3 || a3 === 0) && (i2 = setMinutes(i2, +a3)), (t2 || t2 === 0) && (i2 = setSeconds(i2, +t2)), setMilliseconds(i2, 0);
};
var Ve = (e2, n) => !e2 || !n ? false : isBefore(Ke(e2), Ke(n));
var pe = (e2, n) => !e2 || !n ? false : isEqual(Ke(e2), Ke(n));
var Ue = (e2, n) => !e2 || !n ? false : isAfter(Ke(e2), Ke(n));
var Qn = (e2, n, a3) => e2 && e2[0] && e2[1] ? Ue(a3, e2[0]) && Ve(a3, e2[1]) : e2 && e2[0] && n ? Ue(a3, e2[0]) && Ve(a3, n) || Ve(a3, e2[0]) && Ue(a3, n) : false;
var Tt = (e2) => {
  const n = set(new Date(e2), { date: 1 });
  return Ke(n);
};
var Jt = (e2, n, a3) => n && (a3 || a3 === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((t2) => t2 === n ? [t2, a3] : [t2, isNaN(+e2[t2]) ? void 0 : +e2[t2]])
) : {
  hours: isNaN(+e2.hours) ? void 0 : +e2.hours,
  minutes: isNaN(+e2.minutes) ? void 0 : +e2.minutes,
  seconds: isNaN(+e2.seconds) ? void 0 : +e2.seconds
};
var Lt = (e2) => ({
  hours: getHours(e2),
  minutes: getMinutes(e2),
  seconds: getSeconds(e2)
});
var St = reactive({
  menuFocused: false,
  shiftKeyInMenu: false
});
var ea = () => {
  const e2 = (t2) => {
    St.menuFocused = t2;
  }, n = (t2) => {
    St.shiftKeyInMenu !== t2 && (St.shiftKeyInMenu = t2);
  };
  return {
    control: computed(() => ({ shiftKeyInMenu: St.shiftKeyInMenu, menuFocused: St.menuFocused })),
    setMenuFocused: e2,
    setShiftKey: n
  };
};
function bn(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var ta = { exports: {} };
(function(e2) {
  function n(a3) {
    return a3 && a3.__esModule ? a3 : {
      default: a3
    };
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(ta);
var Ma = ta.exports;
var cn = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2) {
    if (t2 === null || t2 === true || t2 === false)
      return NaN;
    var i2 = Number(t2);
    return isNaN(i2) ? i2 : i2 < 0 ? Math.ceil(i2) : Math.floor(i2);
  }
  e2.exports = n.default;
})(cn, cn.exports);
var _a = cn.exports;
var Aa = bn(_a);
var fn = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2) {
    var i2 = new Date(Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate(), t2.getHours(), t2.getMinutes(), t2.getSeconds(), t2.getMilliseconds()));
    return i2.setUTCFullYear(t2.getFullYear()), t2.getTime() - i2.getTime();
  }
  e2.exports = n.default;
})(fn, fn.exports);
var Ta = fn.exports;
var Nn = bn(Ta);
function Sa(e2, n) {
  var a3 = Ra(n);
  return a3.formatToParts ? Ca(a3, e2) : Na(a3, e2);
}
var Pa = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function Ca(e2, n) {
  try {
    for (var a3 = e2.formatToParts(n), t2 = [], i2 = 0; i2 < a3.length; i2++) {
      var v = Pa[a3[i2].type];
      v >= 0 && (t2[v] = parseInt(a3[i2].value, 10));
    }
    return t2;
  } catch (m3) {
    if (m3 instanceof RangeError)
      return [NaN];
    throw m3;
  }
}
function Na(e2, n) {
  var a3 = e2.format(n).replace(/\u200E/g, ""), t2 = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a3);
  return [t2[3], t2[1], t2[2], t2[4], t2[5], t2[6]];
}
var Qt = {};
function Ra(e2) {
  if (!Qt[e2]) {
    var n = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), a3 = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Qt[e2] = a3 ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e2,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Qt[e2];
}
function wn(e2, n, a3, t2, i2, v, m3) {
  var P = /* @__PURE__ */ new Date(0);
  return P.setUTCFullYear(e2, n, a3), P.setUTCHours(t2, i2, v, m3), P;
}
var Rn = 36e5;
var Ia = 6e4;
var en = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Dn(e2, n, a3) {
  var t2, i2;
  if (!e2 || (t2 = en.timezoneZ.exec(e2), t2))
    return 0;
  var v;
  if (t2 = en.timezoneHH.exec(e2), t2)
    return v = parseInt(t2[1], 10), In(v) ? -(v * Rn) : NaN;
  if (t2 = en.timezoneHHMM.exec(e2), t2) {
    v = parseInt(t2[1], 10);
    var m3 = parseInt(t2[2], 10);
    return In(v, m3) ? (i2 = Math.abs(v) * Rn + m3 * Ia, v > 0 ? -i2 : i2) : NaN;
  }
  if (Ya(e2)) {
    n = new Date(n || Date.now());
    var P = a3 ? n : Oa(n), V = vn(P, e2), S3 = a3 ? V : Ba(n, V, e2);
    return -S3;
  }
  return NaN;
}
function Oa(e2) {
  return wn(
    e2.getFullYear(),
    e2.getMonth(),
    e2.getDate(),
    e2.getHours(),
    e2.getMinutes(),
    e2.getSeconds(),
    e2.getMilliseconds()
  );
}
function vn(e2, n) {
  var a3 = Sa(e2, n), t2 = wn(
    a3[0],
    a3[1] - 1,
    a3[2],
    a3[3] % 24,
    a3[4],
    a3[5],
    0
  ).getTime(), i2 = e2.getTime(), v = i2 % 1e3;
  return i2 -= v >= 0 ? v : 1e3 + v, t2 - i2;
}
function Ba(e2, n, a3) {
  var t2 = e2.getTime(), i2 = t2 - n, v = vn(new Date(i2), a3);
  if (n === v)
    return n;
  i2 -= v - n;
  var m3 = vn(new Date(i2), a3);
  return v === m3 ? v : Math.max(v, m3);
}
function In(e2, n) {
  return -23 <= e2 && e2 <= 23 && (n == null || 0 <= n && n <= 59);
}
var On = {};
function Ya(e2) {
  if (On[e2])
    return true;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e2 }), On[e2] = true, true;
  } catch {
    return false;
  }
}
var Va = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var na = Va;
var tn = 36e5;
var Bn = 6e4;
var Ea = 2;
var Fe = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: na
};
function mn(e2, n) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e2 === null)
    return /* @__PURE__ */ new Date(NaN);
  var a3 = n || {}, t2 = a3.additionalDigits == null ? Ea : Aa(a3.additionalDigits);
  if (t2 !== 2 && t2 !== 1 && t2 !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e2 instanceof Date || typeof e2 == "object" && Object.prototype.toString.call(e2) === "[object Date]")
    return new Date(e2.getTime());
  if (typeof e2 == "number" || Object.prototype.toString.call(e2) === "[object Number]")
    return new Date(e2);
  if (!(typeof e2 == "string" || Object.prototype.toString.call(e2) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var i2 = La(e2), v = Fa(i2.date, t2), m3 = v.year, P = v.restDateString, V = Ua(P, m3);
  if (isNaN(V))
    return /* @__PURE__ */ new Date(NaN);
  if (V) {
    var S3 = V.getTime(), U = 0, C;
    if (i2.time && (U = Wa(i2.time), isNaN(U)))
      return /* @__PURE__ */ new Date(NaN);
    if (i2.timeZone || a3.timeZone) {
      if (C = Dn(i2.timeZone || a3.timeZone, new Date(S3 + U)), isNaN(C))
        return /* @__PURE__ */ new Date(NaN);
    } else
      C = Nn(new Date(S3 + U)), C = Nn(new Date(S3 + U + C));
    return new Date(S3 + U + C);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function La(e2) {
  var n = {}, a3 = Fe.dateTimePattern.exec(e2), t2;
  if (a3 ? (n.date = a3[1], t2 = a3[3]) : (a3 = Fe.datePattern.exec(e2), a3 ? (n.date = a3[1], t2 = a3[2]) : (n.date = null, t2 = e2)), t2) {
    var i2 = Fe.timeZone.exec(t2);
    i2 ? (n.time = t2.replace(i2[1], ""), n.timeZone = i2[1].trim()) : n.time = t2;
  }
  return n;
}
function Fa(e2, n) {
  var a3 = Fe.YYY[n], t2 = Fe.YYYYY[n], i2;
  if (i2 = Fe.YYYY.exec(e2) || t2.exec(e2), i2) {
    var v = i2[1];
    return {
      year: parseInt(v, 10),
      restDateString: e2.slice(v.length)
    };
  }
  if (i2 = Fe.YY.exec(e2) || a3.exec(e2), i2) {
    var m3 = i2[1];
    return {
      year: parseInt(m3, 10) * 100,
      restDateString: e2.slice(m3.length)
    };
  }
  return {
    year: null
  };
}
function Ua(e2, n) {
  if (n === null)
    return null;
  var a3, t2, i2, v;
  if (e2.length === 0)
    return t2 = /* @__PURE__ */ new Date(0), t2.setUTCFullYear(n), t2;
  if (a3 = Fe.MM.exec(e2), a3)
    return t2 = /* @__PURE__ */ new Date(0), i2 = parseInt(a3[1], 10) - 1, Vn(n, i2) ? (t2.setUTCFullYear(n, i2), t2) : /* @__PURE__ */ new Date(NaN);
  if (a3 = Fe.DDD.exec(e2), a3) {
    t2 = /* @__PURE__ */ new Date(0);
    var m3 = parseInt(a3[1], 10);
    return za(n, m3) ? (t2.setUTCFullYear(n, 0, m3), t2) : /* @__PURE__ */ new Date(NaN);
  }
  if (a3 = Fe.MMDD.exec(e2), a3) {
    t2 = /* @__PURE__ */ new Date(0), i2 = parseInt(a3[1], 10) - 1;
    var P = parseInt(a3[2], 10);
    return Vn(n, i2, P) ? (t2.setUTCFullYear(n, i2, P), t2) : /* @__PURE__ */ new Date(NaN);
  }
  if (a3 = Fe.Www.exec(e2), a3)
    return v = parseInt(a3[1], 10) - 1, En(n, v) ? Yn(n, v) : /* @__PURE__ */ new Date(NaN);
  if (a3 = Fe.WwwD.exec(e2), a3) {
    v = parseInt(a3[1], 10) - 1;
    var V = parseInt(a3[2], 10) - 1;
    return En(n, v, V) ? Yn(n, v, V) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Wa(e2) {
  var n, a3, t2;
  if (n = Fe.HH.exec(e2), n)
    return a3 = parseFloat(n[1].replace(",", ".")), nn(a3) ? a3 % 24 * tn : NaN;
  if (n = Fe.HHMM.exec(e2), n)
    return a3 = parseInt(n[1], 10), t2 = parseFloat(n[2].replace(",", ".")), nn(a3, t2) ? a3 % 24 * tn + t2 * Bn : NaN;
  if (n = Fe.HHMMSS.exec(e2), n) {
    a3 = parseInt(n[1], 10), t2 = parseInt(n[2], 10);
    var i2 = parseFloat(n[3].replace(",", "."));
    return nn(a3, t2, i2) ? a3 % 24 * tn + t2 * Bn + i2 * 1e3 : NaN;
  }
  return null;
}
function Yn(e2, n, a3) {
  n = n || 0, a3 = a3 || 0;
  var t2 = /* @__PURE__ */ new Date(0);
  t2.setUTCFullYear(e2, 0, 4);
  var i2 = t2.getUTCDay() || 7, v = n * 7 + a3 + 1 - i2;
  return t2.setUTCDate(t2.getUTCDate() + v), t2;
}
var Ha = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var xa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function aa(e2) {
  return e2 % 400 === 0 || e2 % 4 === 0 && e2 % 100 !== 0;
}
function Vn(e2, n, a3) {
  if (n < 0 || n > 11)
    return false;
  if (a3 != null) {
    if (a3 < 1)
      return false;
    var t2 = aa(e2);
    if (t2 && a3 > xa[n] || !t2 && a3 > Ha[n])
      return false;
  }
  return true;
}
function za(e2, n) {
  if (n < 1)
    return false;
  var a3 = aa(e2);
  return !(a3 && n > 366 || !a3 && n > 365);
}
function En(e2, n, a3) {
  return !(n < 0 || n > 52 || a3 != null && (a3 < 0 || a3 > 6));
}
function nn(e2, n, a3) {
  return !(e2 != null && (e2 < 0 || e2 >= 25) || n != null && (n < 0 || n >= 60) || a3 != null && (a3 < 0 || a3 >= 60));
}
var yn = { exports: {} };
var gn = { exports: {} };
(function(e2, n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = a3;
  function a3(t2, i2) {
    if (t2 == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var v in i2)
      Object.prototype.hasOwnProperty.call(i2, v) && (t2[v] = i2[v]);
    return t2;
  }
  e2.exports = n.default;
})(gn, gn.exports);
var ja = gn.exports;
(function(e2, n) {
  var a3 = Ma.default;
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.default = i2;
  var t2 = a3(ja);
  function i2(v) {
    return (0, t2.default)({}, v);
  }
  e2.exports = n.default;
})(yn, yn.exports);
var Ka = yn.exports;
var Ga = bn(Ka);
function Za(e2, n, a3) {
  var t2 = mn(e2, a3), i2 = Dn(n, t2, true), v = new Date(t2.getTime() - i2), m3 = /* @__PURE__ */ new Date(0);
  return m3.setFullYear(v.getUTCFullYear(), v.getUTCMonth(), v.getUTCDate()), m3.setHours(v.getUTCHours(), v.getUTCMinutes(), v.getUTCSeconds(), v.getUTCMilliseconds()), m3;
}
function qa(e2, n, a3) {
  if (typeof e2 == "string" && !e2.match(na)) {
    var t2 = Ga(a3);
    return t2.timeZone = n, mn(e2, t2);
  }
  var i2 = mn(e2, a3), v = wn(
    i2.getFullYear(),
    i2.getMonth(),
    i2.getDate(),
    i2.getHours(),
    i2.getMinutes(),
    i2.getSeconds(),
    i2.getMilliseconds()
  ).getTime(), m3 = Dn(n, new Date(v));
  return new Date(v + m3);
}
var Xa = (e2, n = 3) => {
  const a3 = [];
  for (let t2 = 0; t2 < e2.length; t2 += n)
    a3.push([e2[t2], e2[t2 + 1], e2[t2 + 2]]);
  return a3;
};
var Ja = (e2, n) => {
  const a3 = [1, 2, 3, 4, 5, 6, 7].map((v) => new Intl.DateTimeFormat(e2, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${v}T00:00:00+00:00`)).slice(0, 2)), t2 = a3.slice(0, n), i2 = a3.slice(n + 1, a3.length);
  return [a3[n]].concat(...i2).concat(...t2);
};
var Qa = (e2, n) => {
  const a3 = [];
  for (let t2 = +e2[0]; t2 <= +e2[1]; t2++)
    a3.push({ value: +t2, text: `${t2}` });
  return n ? a3.reverse() : a3;
};
var el = (e2, n) => {
  const a3 = new Intl.DateTimeFormat(e2, { month: n, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i2) => {
    const v = i2 < 10 ? `0${i2}` : i2;
    return /* @__PURE__ */ new Date(`2017-${v}-01T00:00:00+00:00`);
  }).map((i2, v) => {
    const m3 = a3.format(i2);
    return {
      text: m3.charAt(0).toUpperCase() + m3.substring(1),
      value: v
    };
  });
};
var tl = (e2) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e2];
var _e = (e2) => {
  const n = unref(e2);
  return n != null && n.$el ? n == null ? void 0 : n.$el : n;
};
var nl = (e2) => Object.assign({ type: "dot" }, e2);
var la = (e2) => Array.isArray(e2) ? !!e2[0] && !!e2[1] : false;
var zt = {
  prop: (e2) => `"${e2}" prop must be enabled!`,
  dateArr: (e2) => `You need to use array as "model-value" binding in order to support "${e2}"`
};
var Pe = (e2) => e2;
var Ln = (e2) => e2 === 0 ? e2 : !e2 || isNaN(+e2) ? null : +e2;
var al = (e2) => e2 === 0 ? true : !!e2;
var Fn = (e2) => e2 === null;
var ll = (e2) => {
  if (e2)
    return [...e2.querySelectorAll("input, button, select, textarea, a[href]")][0];
};
var Un = (e2) => Object.assign(
  {
    menuAppear: "",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e2
);
var rl = (e2) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e2
);
var ol = (e2) => e2 === null ? 0 : typeof e2 == "boolean" ? e2 ? 2 : 0 : +e2 >= 2 ? +e2 : 2;
var sl = (e2, n, a3) => e2 || (typeof a3 == "string" ? a3 : n);
var il = (e2) => typeof e2 == "boolean" ? e2 ? Un({}) : false : Un(e2);
var ul = () => ({
  enterSubmit: true,
  tabSubmit: true,
  openMenu: true,
  rangeSeparator: " - "
});
var dl = (e2) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e2);
var cl = (e2) => Object.assign({ showSelect: true, showCancel: true, showNow: false, showPreview: true }, e2);
var ze = (e2) => {
  const n = () => {
    if (e2.partialRange)
      return null;
    throw new Error(zt.prop("partial-range"));
  }, a3 = computed(() => ({
    ariaLabels: rl(e2.ariaLabels),
    textInputOptions: Object.assign(ul(), e2.textInputOptions),
    multiCalendars: ol(e2.multiCalendars),
    previewFormat: sl(e2.previewFormat, e2.format, v()),
    filters: dl(e2.filters),
    transitions: il(e2.transitions),
    startTime: h3(),
    actionRow: cl(e2.actionRow)
  })), t2 = (s3) => {
    if (e2.range)
      return s3();
    throw new Error(zt.prop("range"));
  }, i2 = () => {
    const s3 = e2.enableSeconds ? ":ss" : "";
    return e2.is24 ? `HH:mm${s3}` : `hh:mm${s3} aa`;
  }, v = () => e2.format ? e2.format : e2.monthPicker ? "MM/yyyy" : e2.timePicker ? i2() : e2.weekPicker ? "MM/dd/yyyy" : e2.yearPicker ? "yyyy" : e2.enableTimePicker ? `MM/dd/yyyy, ${i2()}` : "MM/dd/yyyy", m3 = (s3, r) => {
    if (typeof e2.format == "function")
      return e2.format(s3);
    const l = r || v(), M3 = e2.formatLocale ? { locale: e2.formatLocale } : void 0;
    return Array.isArray(s3) ? `${format(s3[0], l, M3)}${e2.modelAuto && !s3[1] ? "" : a3.value.textInputOptions.rangeSeparator || "-"}${s3[1] ? format(s3[1], l, M3) : ""}` : format(s3, l, M3);
  }, P = (s3) => e2.timezone ? Za(s3, e2.timezone) : s3, V = (s3) => e2.timezone ? qa(s3, e2.timezone) : s3, S3 = computed(() => (s3) => {
    var r;
    return (r = e2.hideNavigation) == null ? void 0 : r.includes(s3);
  }), U = (s3) => {
    var r, l, M3;
    return (r = e2.arrMapValues) != null && r.allowedDates ? !F(s3, e2.arrMapValues.allowedDates) : (l = e2.allowedDates) != null && l.length ? !((M3 = e2.allowedDates) != null && M3.some(
      (oe) => pe(P(_(oe)), P(s3))
    )) : false;
  }, C = (s3) => {
    var Ie;
    const r = e2.maxDate ? Ue(P(s3), P(_(e2.maxDate))) : false, l = e2.minDate ? Ve(P(s3), P(_(e2.minDate))) : false, M3 = F(
      s3,
      (Ie = e2.arrMapValues) != null && Ie.disabledDates ? e2.arrMapValues.disabledDates : e2.disabledDates
    ), ue = a3.value.filters.months.map((Ae) => +Ae).includes(getMonth(s3)), Se = e2.disabledWeekDays.length ? e2.disabledWeekDays.some((Ae) => +Ae === getDay(s3)) : false, Te = U(s3), ee = getYear(s3), We = ee < +e2.yearRange[0] || ee > +e2.yearRange[1];
    return !(r || l || M3 || ue || We || Se || Te);
  }, d3 = (s3) => {
    const r = {
      hours: getHours(_()),
      minutes: getMinutes(_()),
      seconds: e2.enableSeconds ? getSeconds(_()) : 0
    };
    return Object.assign(r, s3);
  }, h3 = () => e2.range ? e2.startTime && Array.isArray(e2.startTime) ? [d3(e2.startTime[0]), d3(e2.startTime[1])] : null : e2.startTime && !Array.isArray(e2.startTime) ? d3(e2.startTime) : null, Q2 = (s3) => !C(s3), H3 = (s3) => Array.isArray(s3) ? isValid(s3[0]) && (s3[1] ? isValid(s3[1]) : true) : s3 ? isValid(s3) : false, z2 = (s3) => s3 instanceof Date ? s3 : parseISO(s3), E2 = (s3) => {
    const r = startOfWeek(P(s3), { weekStartsOn: +e2.weekStart }), l = endOfWeek(P(s3), { weekStartsOn: +e2.weekStart });
    return [r, l];
  }, F = (s3, r) => s3 ? r instanceof Map ? !!r.get(u2(s3)) : Array.isArray(r) ? r.some((l) => pe(P(_(l)), P(s3))) : r(_(JSON.parse(JSON.stringify(s3)))) : true, ne = (s3, r, l) => {
    let M3 = s3 ? _(s3) : _();
    return (r || r === 0) && (M3 = setMonth(M3, r)), l && (M3 = setYear(M3, l)), M3;
  }, re = (s3) => set(_(), Lt(s3)), Y2 = (s3) => set(_(), {
    hours: +s3.hours || 0,
    minutes: +s3.minutes || 0,
    seconds: +s3.seconds || 0
  }), Z = (s3, r, l, M3) => {
    if (!s3)
      return true;
    if (M3) {
      const oe = l === "max" ? isBefore(s3, r) : isAfter(s3, r), ue = { seconds: 0, milliseconds: 0 };
      return oe || isEqual(set(s3, ue), set(r, ue));
    }
    return l === "max" ? s3.getTime() <= r.getTime() : s3.getTime() >= r.getTime();
  }, J = () => !e2.enableTimePicker || e2.monthPicker || e2.yearPicker || e2.ignoreTimeValidation, te = (s3) => Array.isArray(s3) ? [s3[0] ? re(s3[0]) : null, s3[1] ? re(s3[1]) : null] : re(s3), ie = (s3) => {
    const r = e2.maxTime ? Y2(e2.maxTime) : _(e2.maxDate);
    return Array.isArray(s3) ? Z(s3[0], r, "max", !!e2.maxDate) && Z(s3[1], r, "max", !!e2.maxDate) : Z(s3, r, "max", !!e2.maxDate);
  }, ye = (s3, r) => {
    const l = e2.minTime ? Y2(e2.minTime) : _(e2.minDate);
    return Array.isArray(s3) ? Z(s3[0], l, "min", !!e2.minDate) && Z(s3[1], l, "min", !!e2.minDate) && r : Z(s3, l, "min", !!e2.minDate) && r;
  }, B2 = (s3) => {
    let r = true;
    if (!s3 || J())
      return true;
    const l = !e2.minDate && !e2.maxDate ? te(s3) : s3;
    if ((e2.maxTime || e2.maxDate) && (r = ie(Pe(l))), (e2.minTime || e2.minDate) && (r = ye(Pe(l), r)), e2.disabledTimes) {
      const M3 = Array.isArray(s3) ? [Lt(s3[0]), s3[1] ? Lt(s3[1]) : void 0] : Lt(s3);
      r = !e2.disabledTimes(M3);
    }
    return r;
  }, k2 = (s3, r) => {
    const l = _(JSON.parse(JSON.stringify(s3))), M3 = [];
    for (let oe = 0; oe < 7; oe++) {
      const ue = addDays(l, oe), Se = getMonth(ue) !== r;
      M3.push({
        text: e2.hideOffsetDates && Se ? "" : ue.getDate(),
        value: ue,
        current: !Se,
        classData: {}
      });
    }
    return M3;
  }, f = (s3, r) => {
    switch (e2.sixWeeks === true ? "append" : e2.sixWeeks) {
      case "prepend":
        return [true, false];
      case "center":
        return [s3 == 0, true];
      case "fair":
        return [s3 == 0 || r > s3, true];
      case "append":
        return [false, false];
      default:
        return [false, false];
    }
  }, I2 = (s3, r) => {
    const l = [], M3 = _(P(new Date(r, s3))), oe = _(P(new Date(r, s3 + 1, 0))), ue = e2.weekStart, Se = startOfWeek(M3, { weekStartsOn: ue }), Te = (ee) => {
      const We = k2(ee, s3);
      if (l.push({ days: We }), !l[l.length - 1].days.some(
        (Ie) => pe(Ke(Ie.value), Ke(oe))
      )) {
        const Ie = addDays(ee, 7);
        Te(Ie);
      }
    };
    if (Te(Se), e2.sixWeeks && l.length < 6) {
      const ee = 6 - l.length, We = (M3.getDay() + 7 - ue) % 7, Ae = 6 - (oe.getDay() + 7 - ue) % 7, [Xe, ft] = f(We, Ae);
      for (let tt = 1; tt <= ee; tt++)
        if (ft ? !!(tt % 2) == Xe : Xe) {
          const Ee = l[0].days[0], j = k2(addDays(Ee.value, -7), getMonth(M3));
          l.unshift({ days: j });
        } else {
          const Ee = l[l.length - 1], j = Ee.days[Ee.days.length - 1], se = k2(addDays(j.value, 1), getMonth(M3));
          l.push({ days: se });
        }
    }
    return l;
  }, O2 = (s3, r, l) => [set(_(s3), { date: 1 }), set(_(), { month: r, year: l, date: 1 })], p = (s3, r) => Ve(...O2(e2.minDate, s3, r)) || pe(...O2(e2.minDate, s3, r)), N = (s3, r) => Ue(...O2(e2.maxDate, s3, r)) || pe(...O2(e2.maxDate, s3, r)), D2 = (s3, r, l) => {
    let M3 = false;
    return e2.maxDate && l && N(s3, r) && (M3 = true), e2.minDate && !l && p(s3, r) && (M3 = true), M3;
  }, c2 = (s3, r, l, M3) => {
    let oe = false;
    return M3 ? e2.minDate && e2.maxDate ? oe = D2(s3, r, l) : (e2.minDate && p(s3, r) || e2.maxDate && N(s3, r)) && (oe = true) : oe = true, oe;
  }, u2 = (s3) => {
    const r = Ke(P(_(s3))).toISOString(), [l] = r.split("T");
    return l;
  }, w2 = (s3) => new Map(s3.map((r) => [u2(r), true])), A = (s3) => Array.isArray(s3) && s3.length > 0;
  return {
    checkPartialRangeValue: n,
    checkRangeEnabled: t2,
    getZonedDate: P,
    getZonedToUtc: V,
    formatDate: m3,
    getDefaultPattern: v,
    validateDate: C,
    getDefaultStartTime: h3,
    isDisabled: Q2,
    isValidDate: H3,
    sanitizeDate: z2,
    getWeekFromDate: E2,
    matchDate: F,
    setDateMonthOrYear: ne,
    isValidTime: B2,
    getCalendarDays: I2,
    validateMonthYearInRange: c2,
    validateMaxDate: N,
    validateMinDate: p,
    assignDefaultTime: d3,
    mapDatesArrToMap: (s3) => {
      A(e2.allowedDates) && (s3.allowedDates = w2(e2.allowedDates)), A(e2.highlight) && (s3.highlightedDates = w2(e2.highlight)), A(e2.disabledDates) && (s3.disabledDates = w2(e2.disabledDates));
    },
    defaults: a3,
    hideNavigationButtons: S3
  };
};
var we = reactive({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
});
var an = ref(null);
var Ft = ref(false);
var ln = ref(false);
var rn = ref(false);
var on = ref(false);
var Le = ref(0);
var Oe = ref(0);
var dt = () => {
  const e2 = computed(() => Ft.value ? [...we.selectionGrid, we.actionRow].filter((E2) => E2.length) : ln.value ? [
    ...we.timePicker[0],
    ...we.timePicker[1],
    on.value ? [] : [an.value],
    we.actionRow
  ].filter((E2) => E2.length) : rn.value ? [...we.monthPicker, we.actionRow] : [we.monthYear, ...we.calendar, we.time, we.actionRow].filter((E2) => E2.length)), n = (E2) => {
    Le.value = E2 ? Le.value + 1 : Le.value - 1;
    let F = null;
    e2.value[Oe.value] && (F = e2.value[Oe.value][Le.value]), F || (Le.value = E2 ? Le.value - 1 : Le.value + 1);
  }, a3 = (E2) => {
    if (Oe.value === 0 && !E2 || Oe.value === e2.value.length && E2)
      return;
    Oe.value = E2 ? Oe.value + 1 : Oe.value - 1, e2.value[Oe.value] ? e2.value[Oe.value] && !e2.value[Oe.value][Le.value] && Le.value !== 0 && (Le.value = e2.value[Oe.value].length - 1) : Oe.value = E2 ? Oe.value - 1 : Oe.value + 1;
  }, t2 = (E2) => {
    let F = null;
    e2.value[Oe.value] && (F = e2.value[Oe.value][Le.value]), F ? F.focus({ preventScroll: !Ft.value }) : Le.value = E2 ? Le.value - 1 : Le.value + 1;
  }, i2 = () => {
    n(true), t2(true);
  }, v = () => {
    n(false), t2(false);
  }, m3 = () => {
    a3(false), t2(true);
  }, P = () => {
    a3(true), t2(true);
  }, V = (E2, F) => {
    we[F] = E2;
  }, S3 = (E2, F) => {
    we[F] = E2;
  }, U = () => {
    Le.value = 0, Oe.value = 0;
  };
  return {
    buildMatrix: V,
    buildMultiLevelMatrix: S3,
    setTimePickerBackRef: (E2) => {
      an.value = E2;
    },
    setSelectionGrid: (E2) => {
      Ft.value = E2, U(), E2 || (we.selectionGrid = []);
    },
    setTimePicker: (E2, F = false) => {
      ln.value = E2, on.value = F, U(), E2 || (we.timePicker[0] = [], we.timePicker[1] = []);
    },
    setTimePickerElements: (E2, F = 0) => {
      we.timePicker[F] = E2;
    },
    arrowRight: i2,
    arrowLeft: v,
    arrowUp: m3,
    arrowDown: P,
    clearArrowNav: () => {
      we.monthYear = [], we.calendar = [], we.time = [], we.actionRow = [], we.selectionGrid = [], we.timePicker[0] = [], we.timePicker[1] = [], Ft.value = false, ln.value = false, on.value = false, rn.value = false, U(), an.value = null;
    },
    setMonthPicker: (E2) => {
      rn.value = E2, U();
    },
    refSets: we
    // exposed for testing
  };
};
var Wn = (e2) => Array.isArray(e2);
var mt = (e2) => Array.isArray(e2);
var Hn = (e2) => Array.isArray(e2) && e2.length === 2;
var fl = (e2, n, a3, t2, i2) => {
  const {
    getDefaultStartTime: v,
    isDisabled: m3,
    sanitizeDate: P,
    getWeekFromDate: V,
    setDateMonthOrYear: S3,
    validateMonthYearInRange: U,
    defaults: C
  } = ze(e2), d3 = computed({
    get: () => e2.internalModelValue,
    set: (o) => {
      !e2.readonly && !e2.disabled && n("update:internal-model-value", o);
    }
  }), h3 = ref([]);
  watch(d3, (o, b2) => {
    e2.range ? J() : isEqual(o, b2) || J();
  });
  const Q2 = toRef(e2, "multiCalendars");
  watch(Q2, () => {
    Ee(0);
  });
  const H3 = ref([{ month: getMonth(_()), year: getYear(_()) }]), z2 = reactive({
    hours: e2.range ? [getHours(_()), getHours(_())] : getHours(_()),
    minutes: e2.range ? [getMinutes(_()), getMinutes(_())] : getMinutes(_()),
    seconds: e2.range ? [0, 0] : 0
  }), E2 = computed(
    () => (o) => H3.value[o] ? H3.value[o].month : 0
  ), F = computed(
    () => (o) => H3.value[o] ? H3.value[o].year : 0
  ), ne = computed(() => {
    var o;
    return (o = e2.flow) != null && o.length && !e2.partialFlow ? i2.value === e2.flow.length : true;
  }), re = (o, b2, q2) => {
    var le, De;
    H3.value[o] || (H3.value[o] = { month: 0, year: 0 }), H3.value[o].month = Fn(b2) ? (le = H3.value[o]) == null ? void 0 : le.month : b2, H3.value[o].year = Fn(q2) ? (De = H3.value[o]) == null ? void 0 : De.year : q2;
  }, Y2 = (o, b2) => {
    z2[o] = b2;
  }, Z = () => {
    e2.startDate && (re(0, getMonth(_(e2.startDate)), getYear(_(e2.startDate))), C.value.multiCalendars && Ee(0));
  };
  onMounted(() => {
    d3.value || (Z(), C.value.startTime && N()), J(true), e2.focusStartDate && e2.startDate && Z();
  });
  const J = (o = false) => {
    if (d3.value)
      return Array.isArray(d3.value) ? (h3.value = d3.value, k2(o)) : ie(d3.value, o);
    if (e2.timePicker)
      return f();
    if (e2.monthPicker && !e2.range)
      return I2();
    if (e2.yearPicker && !e2.range)
      return O2();
    if (C.value.multiCalendars && o && !e2.startDate)
      return te(_(), o);
  }, te = (o, b2 = false) => {
    if ((!C.value.multiCalendars || !e2.multiStatic || b2) && re(0, getMonth(o), getYear(o)), C.value.multiCalendars)
      for (let q2 = 1; q2 < C.value.multiCalendars; q2++) {
        const le = set(_(), { month: E2.value(q2 - 1), year: F.value(q2 - 1) }), De = add(le, { months: 1 });
        H3.value[q2] = { month: getMonth(De), year: getYear(De) };
      }
  }, ie = (o, b2) => {
    te(o), Y2("hours", getHours(o)), Y2("minutes", getMinutes(o)), Y2("seconds", getSeconds(o)), C.value.multiCalendars && b2 && c2();
  }, ye = (o, b2) => {
    o[1] && e2.showLastInRange ? te(o[1], b2) : te(o[0], b2);
    const q2 = (le, De) => [
      le(o[0]),
      o[1] ? le(o[1]) : z2[De][1]
    ];
    Y2("hours", q2(getHours, "hours")), Y2("minutes", q2(getMinutes, "minutes")), Y2("seconds", q2(getSeconds, "seconds"));
  }, B2 = (o, b2) => {
    if ((e2.range || e2.weekPicker) && !e2.multiDates)
      return ye(o, b2);
    if (e2.multiDates) {
      const q2 = o[o.length - 1];
      return ie(q2, b2);
    }
  }, k2 = (o) => {
    const b2 = d3.value;
    B2(b2, o), C.value.multiCalendars && e2.multiCalendarsSolo && c2();
  }, f = () => {
    if (N(), !e2.range)
      d3.value = je(_(), z2.hours, z2.minutes, p());
    else {
      const o = z2.hours, b2 = z2.minutes;
      d3.value = [
        je(_(), o[0], b2[0], p()),
        je(_(), o[1], b2[1], p(false))
      ];
    }
  }, I2 = () => {
    e2.multiDates ? d3.value = [S3(_(), E2.value(0), F.value(0))] : d3.value = S3(_(), E2.value(0), F.value(0));
  }, O2 = () => {
    d3.value = _();
  }, p = (o = true) => e2.enableSeconds ? Array.isArray(z2.seconds) ? o ? z2.seconds[0] : z2.seconds[1] : z2.seconds : 0, N = () => {
    const o = v();
    if (o) {
      const b2 = Array.isArray(o), q2 = b2 ? [+o[0].hours, +o[1].hours] : +o.hours, le = b2 ? [+o[0].minutes, +o[1].minutes] : +o.minutes, De = b2 ? [+o[0].seconds, +o[1].seconds] : +o.seconds;
      Y2("hours", q2), Y2("minutes", le), e2.enableSeconds && Y2("seconds", De);
    }
  }, D2 = () => Array.isArray(d3.value) && d3.value.length ? d3.value[d3.value.length - 1] : null, c2 = () => {
    if (Array.isArray(d3.value) && d3.value.length === 2) {
      const o = _(
        _(d3.value[1] ? d3.value[1] : addMonths(d3.value[0], 1))
      ), [b2, q2] = [getMonth(d3.value[0]), getYear(d3.value[0])], [le, De] = [getMonth(d3.value[1]), getYear(d3.value[1])];
      (b2 !== le || b2 === le && q2 !== De) && e2.multiCalendarsSolo && re(1, getMonth(o), getYear(o));
    } else
      d3.value && !Array.isArray(d3.value) && re(0, getMonth(d3.value), getYear(d3.value));
  }, u2 = (o) => {
    const b2 = addMonths(o, 1);
    return { month: getMonth(b2), year: getYear(b2) };
  }, w2 = (o) => {
    const b2 = getMonth(_(o)), q2 = getYear(_(o));
    if (re(0, b2, q2), C.value.multiCalendars > 0)
      for (let le = 1; le < C.value.multiCalendars; le++) {
        const De = u2(
          set(_(o), { year: E2.value(le - 1), month: F.value(le - 1) })
        );
        re(le, De.month, De.year);
      }
  }, A = (o) => {
    if (d3.value && Array.isArray(d3.value))
      if (d3.value.some((b2) => pe(o, b2))) {
        const b2 = d3.value.filter((q2) => !pe(q2, o));
        d3.value = b2.length ? b2 : null;
      } else
        (e2.multiDatesLimit && +e2.multiDatesLimit > d3.value.length || !e2.multiDatesLimit) && d3.value.push(o);
    else
      d3.value = [o];
  }, K2 = (o, b2) => {
    const q2 = Ue(o, b2) ? b2 : o, le = Ue(b2, o) ? b2 : o;
    return eachDayOfInterval({ start: q2, end: le });
  }, s3 = (o, b2 = 0) => {
    if (Array.isArray(d3.value) && d3.value[b2]) {
      const q2 = differenceInCalendarDays(o, d3.value[b2]), le = K2(d3.value[b2], o), De = le.length === 1 ? 0 : le.filter((st) => m3(st)).length, Je = Math.abs(q2) - De;
      if (e2.minRange && e2.maxRange)
        return Je >= +e2.minRange && Je <= +e2.maxRange;
      if (e2.minRange)
        return Je >= +e2.minRange;
      if (e2.maxRange)
        return Je <= +e2.maxRange;
    }
    return true;
  }, r = (o) => Array.isArray(d3.value) && d3.value.length === 2 ? e2.fixedStart && (Ue(o, d3.value[0]) || pe(o, d3.value[0])) ? [d3.value[0], o] : e2.fixedEnd && (Ve(o, d3.value[1]) || pe(o, d3.value[1])) ? [o, d3.value[1]] : (n("invalid-fixed-range", o), d3.value) : [], l = () => {
    e2.autoApply && ne.value && n("auto-apply", e2.partialFlow);
  }, M3 = () => {
    e2.autoApply && n("select-date");
  }, oe = (o) => !eachDayOfInterval({ start: o[0], end: o[1] }).some((q2) => m3(q2)), ue = (o) => (d3.value = V(_(o.value)), l()), Se = (o) => {
    const b2 = je(_(o.value), z2.hours, z2.minutes, p());
    e2.multiDates ? A(b2) : d3.value = b2, a3(), l();
  }, Te = () => {
    h3.value = d3.value ? d3.value.slice() : [], h3.value.length === 2 && !(e2.fixedStart || e2.fixedEnd) && (h3.value = []);
  }, ee = (o, b2) => {
    const q2 = [_(o.value), addDays(_(o.value), +e2.autoRange)];
    oe(q2) && (b2 && w2(o.value), h3.value = q2);
  }, We = (o) => {
    Ie(o.value) || !s3(o.value, e2.fixedStart ? 0 : 1) || (h3.value = r(_(o.value)));
  }, Ie = (o) => e2.noDisabledRange ? K2(h3.value[0], o).some((q2) => m3(q2)) : false, Ae = (o, b2) => {
    if (Te(), e2.autoRange)
      return ee(o, b2);
    if (e2.fixedStart || e2.fixedEnd)
      return We(o);
    h3.value[0] ? s3(_(o.value)) && !Ie(o.value) && (Ve(_(o.value), _(h3.value[0])) ? (h3.value.unshift(_(o.value)), n("range-end", h3.value[0])) : (h3.value[1] = _(o.value), n("range-end", h3.value[1]))) : (h3.value[0] = _(o.value), n("range-start", h3.value[0]));
  }, Xe = (o) => {
    h3.value[o] = je(
      h3.value[o],
      z2.hours[o],
      z2.minutes[o],
      p(o !== 1)
    );
  }, ft = () => {
    h3.value.length && (h3.value[0] && !h3.value[1] ? Xe(0) : (Xe(0), Xe(1), a3()), d3.value = h3.value.slice(), h3.value[0] && h3.value[1] && e2.autoApply && n("auto-apply"), h3.value[0] && !h3.value[1] && e2.modelAuto && e2.autoApply && n("auto-apply"));
  }, tt = (o, b2 = false) => {
    if (!(m3(o.value) || !o.current && e2.hideOffsetDates)) {
      if (e2.weekPicker)
        return ue(o);
      if (!e2.range)
        return Se(o);
      mt(z2.hours) && mt(z2.minutes) && !e2.multiDates && (Ae(o, b2), ft());
    }
  }, bt = (o) => {
    const b2 = o[0];
    return e2.weekNumbers === "local" ? getWeek(b2.value, { weekStartsOn: +e2.weekStart }) : e2.weekNumbers === "iso" ? getISOWeek(b2.value) : typeof e2.weekNumbers == "function" ? e2.weekNumbers(b2.value) : "";
  }, Ee = (o) => {
    for (let b2 = o - 1; b2 >= 0; b2--) {
      const q2 = subMonths(set(_(), { month: E2.value(b2 + 1), year: F.value(b2 + 1) }), 1);
      re(b2, getMonth(q2), getYear(q2));
    }
    for (let b2 = o + 1; b2 <= C.value.multiCalendars - 1; b2++) {
      const q2 = addMonths(set(_(), { month: E2.value(b2 - 1), year: F.value(b2 - 1) }), 1);
      re(b2, getMonth(q2), getYear(q2));
    }
  }, j = (o) => S3(_(), E2.value(o), F.value(o)), se = (o) => je(o, z2.hours, z2.minutes, p()), de = (o) => {
    A(j(o));
  }, _t = (o, b2) => {
    const q2 = e2.monthPicker ? E2.value(o) !== b2.month || !b2.fromNav : F.value(o) !== b2.year || !b2.fromNav;
    if (re(o, b2.month, b2.year), C.value.multiCalendars && !e2.multiCalendarsSolo && Ee(o), e2.monthPicker || e2.yearPicker)
      if (e2.multiDates)
        q2 && de(o);
      else if (e2.range) {
        if (q2 && s3(j(o))) {
          let le = d3.value ? d3.value.slice() : [];
          le.length === 2 && le[1] !== null && (le = []), le.length ? Ve(j(o), le[0]) ? le.unshift(j(o)) : le[1] = j(o) : le = [j(o)], d3.value = le;
        }
      } else
        (e2.autoApplyMonth || q2) && (d3.value = j(o));
    n("update-month-year", { instance: o, month: b2.month, year: b2.year }), t2(e2.multiCalendarsSolo ? o : void 0);
  }, vt = async (o = false) => {
    if (e2.autoApply && (e2.monthPicker || e2.yearPicker)) {
      await nextTick();
      const b2 = e2.monthPicker ? o : false;
      e2.range ? n("auto-apply", b2 || !d3.value || d3.value.length === 1) : n("auto-apply", b2);
    }
    a3();
  }, Yt = (o, b2) => {
    const q2 = set(_(), { month: E2.value(b2), year: F.value(b2) }), le = o < 0 ? addMonths(q2, 1) : subMonths(q2, 1);
    U(getMonth(le), getYear(le), o < 0, e2.preventMinMaxNavigation) && (re(b2, getMonth(le), getYear(le)), C.value.multiCalendars && !e2.multiCalendarsSolo && Ee(b2), n("update-month-year", { instance: b2, month: getMonth(le), year: getYear(le) }), t2());
  }, At = (o) => {
    Wn(o) && Wn(d3.value) && mt(z2.hours) && mt(z2.minutes) ? (o[0] && d3.value[0] && (d3.value[0] = je(o[0], z2.hours[0], z2.minutes[0], p())), o[1] && d3.value[1] && (d3.value[1] = je(o[1], z2.hours[1], z2.minutes[1], p(false)))) : e2.multiDates && Array.isArray(d3.value) ? d3.value[d3.value.length - 1] = se(o) : !e2.range && !Hn(o) && (d3.value = se(o)), n("time-update");
  }, Gt = (o, b2 = true, q2 = false) => {
    const le = b2 ? o : z2.hours, De = !b2 && !q2 ? o : z2.minutes, Je = q2 ? o : z2.seconds;
    if (e2.range && Hn(d3.value) && mt(le) && mt(De) && mt(Je) && !e2.disableTimeRangeValidation) {
      const st = (W) => je(d3.value[W], le[W], De[W], Je[W]), g = (W) => setMilliseconds(d3.value[W], 0);
      if (pe(d3.value[0], d3.value[1]) && (isAfter(st(0), g(1)) || isBefore(st(1), g(0))))
        return;
    }
    if (Y2("hours", le), Y2("minutes", De), Y2("seconds", Je), d3.value)
      if (e2.multiDates) {
        const st = D2();
        st && At(st);
      } else
        At(d3.value);
    else
      e2.timePicker && At(e2.range ? [_(), _()] : _());
    a3();
  }, Zt = (o, b2) => {
    e2.monthChangeOnScroll && Yt(e2.monthChangeOnScroll !== "inverse" ? -o.deltaY : o.deltaY, b2);
  }, qt = (o, b2, q2 = false) => {
    e2.monthChangeOnArrows && e2.vertical === q2 && Vt(o, b2);
  }, Vt = (o, b2) => {
    Yt(o === "right" ? -1 : 1, b2);
  };
  return {
    time: z2,
    month: E2,
    year: F,
    modelValue: d3,
    calendars: H3,
    monthYearSelect: vt,
    isDisabled: m3,
    updateTime: Gt,
    getWeekNum: bt,
    selectDate: tt,
    updateMonthYear: _t,
    handleScroll: Zt,
    getMarker: (o) => e2.markers.find((b2) => pe(P(o.value), P(b2.date))),
    handleArrow: qt,
    handleSwipe: Vt,
    selectCurrentDate: () => {
      e2.range ? d3.value && Array.isArray(d3.value) && d3.value[0] ? d3.value = Ve(_(), d3.value[0]) ? [_(), d3.value[0]] : [d3.value[0], _()] : d3.value = [_()] : d3.value = _(), M3();
    },
    presetDateRange: (o, b2) => {
      b2 || o.length && o.length <= 2 && e2.range && (d3.value = o.map((q2) => _(q2)), M3(), e2.multiCalendars && nextTick().then(() => J(true)));
    }
  };
};
var vl = (e2, n, a3) => {
  const t2 = ref(), {
    getZonedToUtc: i2,
    getZonedDate: v,
    formatDate: m3,
    getDefaultPattern: P,
    checkRangeEnabled: V,
    checkPartialRangeValue: S3,
    isValidDate: U,
    setDateMonthOrYear: C,
    defaults: d3
  } = ze(n), h3 = ref(""), Q2 = toRef(n, "format");
  watch(t2, () => {
    e2("internal-model-change", t2.value);
  }), watch(Q2, () => {
    D2();
  });
  const H3 = (l) => {
    const M3 = l || _();
    return n.modelType ? u2(M3) : {
      hours: getHours(M3),
      minutes: getMinutes(M3),
      seconds: n.enableSeconds ? getSeconds(M3) : 0
    };
  }, z2 = (l) => n.modelType ? u2(l) : { month: getMonth(l), year: getYear(l) }, E2 = (l) => Array.isArray(l) ? V(() => [
    setYear(_(), l[0]),
    l[1] ? setYear(_(), l[1]) : S3()
  ]) : setYear(_(), +l), F = (l, M3) => (typeof l == "string" || typeof l == "number") && n.modelType ? c2(l) : M3, ne = (l) => Array.isArray(l) ? [
    F(
      l[0],
      je(null, +l[0].hours, +l[0].minutes, l[0].seconds)
    ),
    F(
      l[1],
      je(null, +l[1].hours, +l[1].minutes, l[1].seconds)
    )
  ] : F(l, je(null, l.hours, l.minutes, l.seconds)), re = (l) => Array.isArray(l) ? n.multiDates ? l.map((M3) => F(M3, C(null, +M3.month, +M3.year))) : V(() => [
    F(l[0], C(null, +l[0].month, +l[0].year)),
    F(
      l[1],
      l[1] ? C(null, +l[1].month, +l[1].year) : S3()
    )
  ]) : F(l, C(null, +l.month, +l.year)), Y2 = (l) => {
    if (Array.isArray(l))
      return l.map((M3) => c2(M3));
    throw new Error(zt.dateArr("multi-dates"));
  }, Z = (l) => {
    if (Array.isArray(l))
      return [_(l[0]), _(l[1])];
    throw new Error(zt.dateArr("week-picker"));
  }, J = (l) => n.modelAuto ? Array.isArray(l) ? [c2(l[0]), c2(l[1])] : n.autoApply ? [c2(l)] : [c2(l), null] : Array.isArray(l) ? V(() => [
    c2(l[0]),
    l[1] ? c2(l[1]) : S3()
  ]) : c2(l), te = () => {
    Array.isArray(t2.value) && n.range && t2.value.length === 1 && t2.value.push(S3());
  }, ie = () => {
    const l = t2.value;
    return [
      u2(l[0]),
      l[1] ? u2(l[1]) : S3()
    ];
  }, ye = () => t2.value[1] ? ie() : u2(Pe(t2.value[0])), B2 = () => (t2.value || []).map((l) => u2(l)), k2 = () => (te(), n.modelAuto ? ye() : n.multiDates ? B2() : Array.isArray(t2.value) ? V(() => ie()) : u2(Pe(t2.value))), f = (l) => l ? n.timePicker ? ne(Pe(l)) : n.monthPicker ? re(Pe(l)) : n.yearPicker ? E2(Pe(l)) : n.multiDates ? Y2(Pe(l)) : n.weekPicker ? Z(Pe(l)) : J(Pe(l)) : null, I2 = (l) => {
    const M3 = f(l);
    U(Pe(M3)) ? (t2.value = Pe(M3), D2()) : (t2.value = null, h3.value = "");
  }, O2 = () => {
    var M3;
    const l = (oe) => {
      var ue;
      return format(oe, (ue = d3.value.textInputOptions) == null ? void 0 : ue.format);
    };
    return `${l(t2.value[0])} ${(M3 = d3.value.textInputOptions) == null ? void 0 : M3.rangeSeparator} ${t2.value[1] ? l(t2.value[1]) : ""}`;
  }, p = () => {
    var l;
    return a3.value && t2.value ? Array.isArray(t2.value) ? O2() : format(t2.value, (l = d3.value.textInputOptions) == null ? void 0 : l.format) : m3(t2.value);
  }, N = () => {
    var l;
    return t2.value ? n.multiDates ? t2.value.map((M3) => m3(M3)).join("; ") : n.textInput && typeof ((l = d3.value.textInputOptions) == null ? void 0 : l.format) == "string" ? p() : m3(t2.value) : "";
  }, D2 = () => {
    !n.format || typeof n.format == "string" ? h3.value = N() : h3.value = n.format(t2.value);
  }, c2 = (l) => {
    if (n.utc) {
      const M3 = new Date(l);
      return n.utc === "preserve" ? new Date(M3.getTime() + M3.getTimezoneOffset() * 6e4) : M3;
    }
    return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? v(new Date(l)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? parse(l, P(), /* @__PURE__ */ new Date()) : v(parse(l, n.modelType, /* @__PURE__ */ new Date())) : v(new Date(l));
  }, u2 = (l) => l ? n.utc ? $a(l, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +i2(l) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? m3(i2(l)) : m3(i2(l), n.modelType) : i2(l) : "", w2 = (l) => {
    e2("update:model-value", l);
  }, A = (l) => Array.isArray(t2.value) ? n.multiDates ? t2.value.map((M3) => l(M3)) : [
    l(t2.value[0]),
    t2.value[1] ? l(t2.value[1]) : S3()
  ] : l(Pe(t2.value)), K2 = (l) => w2(Pe(A(l)));
  return {
    inputValue: h3,
    internalModelValue: t2,
    checkBeforeEmit: () => t2.value ? n.range ? n.partialRange ? t2.value.length >= 1 : t2.value.length === 2 : !!t2.value : false,
    parseExternalModelValue: I2,
    formatInputValue: D2,
    emitModelValue: () => (D2(), n.monthPicker ? K2(z2) : n.timePicker ? K2(H3) : n.yearPicker ? K2(getYear) : n.weekPicker ? w2(t2.value) : w2(k2()))
  };
};
var ml = (e2, n) => {
  const { validateMonthYearInRange: a3, validateMaxDate: t2, validateMinDate: i2, defaults: v } = ze(e2), m3 = (C, d3) => {
    let h3 = C;
    return v.value.filters.months.includes(getMonth(h3)) ? (h3 = d3 ? addMonths(C, 1) : subMonths(C, 1), m3(h3, d3)) : h3;
  }, P = (C, d3) => {
    let h3 = C;
    return v.value.filters.years.includes(getYear(h3)) ? (h3 = d3 ? addYears(C, 1) : subYears(C, 1), P(h3, d3)) : h3;
  }, V = (C) => {
    const d3 = set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year });
    let h3 = C ? addMonths(d3, 1) : subMonths(d3, 1);
    e2.disableYearSelect && (h3 = setYear(h3, e2.year));
    let Q2 = getMonth(h3), H3 = getYear(h3);
    v.value.filters.months.includes(Q2) && (h3 = m3(h3, C), Q2 = getMonth(h3), H3 = getYear(h3)), v.value.filters.years.includes(H3) && (h3 = P(h3, C), H3 = getYear(h3)), a3(Q2, H3, C, e2.preventMinMaxNavigation) && S3(Q2, H3);
  }, S3 = (C, d3) => {
    n("update-month-year", { month: C, year: d3 });
  }, U = computed(() => (C) => {
    if (!e2.preventMinMaxNavigation || C && !e2.maxDate || !C && !e2.minDate)
      return false;
    const d3 = set(/* @__PURE__ */ new Date(), { month: e2.month, year: e2.year }), h3 = C ? addMonths(d3, 1) : subMonths(d3, 1), Q2 = [getMonth(h3), getYear(h3)];
    return C ? !t2(...Q2) : !i2(...Q2);
  });
  return { handleMonthYearChange: V, isDisabled: U, updateMonthYear: S3 };
};
var xt = ((e2) => (e2.center = "center", e2.left = "left", e2.right = "right", e2))(xt || {});
var yl = (e2, n, a3, t2) => {
  const i2 = ref({
    top: "0",
    left: "0",
    transform: "none",
    opacity: "0"
  }), v = ref(false), m3 = toRef(t2, "teleportCenter"), P = computed(() => v.value ? "-100%" : "0"), V = () => {
    S3(), i2.value.opacity = "0";
  };
  watch(m3, () => {
    F();
  }), onMounted(() => {
    S3();
  });
  const S3 = () => {
    const k2 = _e(n);
    if (k2) {
      const { top: f, left: I2, width: O2, height: p } = Q2(k2);
      i2.value.top = `${f + p / 2}px`, h3(I2, O2, 50);
    }
  }, U = (k2) => {
    if (t2.teleport) {
      const f = k2.getBoundingClientRect();
      return {
        left: f.left + window.scrollX,
        top: f.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, C = (k2, f) => {
    i2.value.left = `${k2 + f}px`, i2.value.transform = `translate(-100%, ${P.value})`;
  }, d3 = (k2) => {
    i2.value.left = `${k2}px`, i2.value.transform = `translate(0, ${P.value})`;
  }, h3 = (k2, f, I2) => {
    t2.position === xt.left && d3(k2), t2.position === xt.right && C(k2, f), t2.position === xt.center && (i2.value.left = `${k2 + f / 2}px`, i2.value.transform = I2 ? `translate(-50%, -${I2}%)` : `translate(-50%, ${P.value})`);
  }, Q2 = (k2) => {
    const { width: f, height: I2 } = k2.getBoundingClientRect(), { top: O2, left: p } = t2.altPosition ? t2.altPosition(k2) : U(k2);
    return { top: +O2, left: +p, width: f, height: I2 };
  }, H3 = () => {
    const k2 = _e(n);
    if (k2) {
      const { top: f, left: I2, width: O2, height: p } = Q2(k2), N = J();
      i2.value.top = `${f + p / 2}px`, h3(I2, O2, N === "top" ? 100 : 0);
    }
  }, z2 = () => {
    i2.value.left = "50%", i2.value.top = "50%", i2.value.transform = "translate(-50%, -50%)", i2.value.position = "fixed", delete i2.value.opacity;
  }, E2 = () => {
    const k2 = _e(n), { top: f, left: I2, transform: O2 } = t2.altPosition(k2);
    i2.value = { top: `${f}px`, left: `${I2}px`, transform: O2 || "" };
  }, F = (k2 = true) => {
    if (!t2.inline)
      return m3.value ? z2() : t2.altPosition !== null ? E2() : (k2 && a3("recalculate-position"), ie());
  }, ne = ({
    inputEl: k2,
    menuEl: f,
    left: I2,
    width: O2
  }) => {
    window.screen.width > 768 && h3(I2, O2), Z(k2, f);
  }, re = (k2, f) => {
    const { top: I2, left: O2, height: p, width: N } = Q2(k2);
    i2.value.top = `${p + I2 + +t2.offset}px`, v.value = false, ne({ inputEl: k2, menuEl: f, left: O2, width: N });
  }, Y2 = (k2, f) => {
    const { top: I2, left: O2, width: p } = Q2(k2);
    i2.value.top = `${I2 - +t2.offset}px`, v.value = true, ne({ inputEl: k2, menuEl: f, left: O2, width: p });
  }, Z = (k2, f) => {
    if (t2.autoPosition) {
      const { left: I2, width: O2 } = Q2(k2), { left: p, right: N } = f.getBoundingClientRect();
      return p <= 0 ? d3(I2) : N >= document.documentElement.clientWidth ? C(I2, O2) : h3(I2, O2);
    }
  }, J = () => {
    const k2 = _e(e2), f = _e(n);
    if (k2 && f) {
      const { height: I2 } = k2.getBoundingClientRect(), { top: O2, height: p } = f.getBoundingClientRect(), D2 = window.innerHeight - O2 - p, c2 = O2;
      return I2 <= D2 ? "bottom" : I2 > D2 && I2 <= c2 ? "top" : D2 >= c2 ? "bottom" : "top";
    }
    return "bottom";
  }, te = (k2, f) => J() === "bottom" ? re(k2, f) : Y2(k2, f), ie = () => {
    const k2 = _e(n), f = _e(e2);
    if (k2 && f)
      return t2.autoPosition ? te(k2, f) : re(k2, f);
  }, ye = function(k2) {
    if (k2) {
      const f = k2.scrollHeight > k2.clientHeight, O2 = window.getComputedStyle(k2).overflowY.indexOf("hidden") !== -1;
      return f && !O2;
    }
    return true;
  }, B2 = function(k2) {
    return !k2 || k2 === document.body || k2.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ye(k2) ? k2 : B2(k2.parentNode);
  };
  return { openOnTop: v, menuStyle: i2, resetPosition: V, setMenuPosition: F, setInitialPosition: H3, getScrollableParent: B2 };
};
var wt = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
];
var gl = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }];
var hl = {
  all: () => wt,
  monthYear: () => wt.filter((e2) => e2.use.includes("month-year")),
  input: () => gl,
  timePicker: () => wt.filter((e2) => e2.use.includes("time")),
  action: () => wt.filter((e2) => e2.use.includes("action")),
  calendar: () => wt.filter((e2) => e2.use.includes("calendar")),
  menu: () => wt.filter((e2) => e2.use.includes("menu"))
};
var pt = (e2, n, a3) => {
  const t2 = [];
  return hl[n]().forEach((i2) => {
    e2[i2.name] && t2.push(i2.name);
  }), a3 && a3.length && a3.forEach((i2) => {
    i2.slot && t2.push(i2.slot);
  }), t2;
};
var Kt = (e2) => ({ transitionName: computed(() => (a3) => e2 && typeof e2 != "boolean" ? a3 ? e2.open : e2.close : ""), showTransition: !!e2 });
var ct = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: false },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: false },
  autoPosition: { type: Boolean, default: true },
  closeOnAutoApply: { type: Boolean, default: true },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: true },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: false },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: false },
  disableMonthYearSelect: { type: Boolean, default: false },
  disableYearSelect: { type: Boolean, default: false },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: false },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: true },
  autoApply: { type: Boolean, default: false },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: false },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: false },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: false },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: true },
  spaceConfirm: { type: Boolean, default: true },
  monthChangeOnArrows: { type: Boolean, default: true },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: false },
  preventMinMaxNavigation: { type: Boolean, default: false },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: false },
  keepActionRow: { type: Boolean, default: false },
  weekPicker: { type: Boolean, default: false },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: false },
  multiStatic: { type: Boolean, default: true },
  disableTimeRangeValidation: { type: Boolean, default: false },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: false },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: false },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: false },
  monthChangeOnScroll: { type: [Boolean, String], default: true },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: false },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: false },
  modelAuto: { type: Boolean, default: false },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: false },
  partialRange: { type: Boolean, default: true },
  ignoreTimeValidation: { type: Boolean, default: false },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: false },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: false },
  fixedEnd: { type: Boolean, default: false },
  timePicker: { type: Boolean, default: false },
  enableSeconds: { type: Boolean, default: false },
  is24: { type: Boolean, default: true },
  noHoursOverlay: { type: Boolean, default: false },
  noMinutesOverlay: { type: Boolean, default: false },
  noSecondsOverlay: { type: Boolean, default: false },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: false },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  inline: { type: Boolean, default: false },
  textInput: { type: Boolean, default: false },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: false },
  sixWeeks: { type: [Boolean, String], default: false },
  actionRow: { type: Object, default: () => ({}) },
  allowPreventDefault: { type: Boolean, default: false },
  closeOnClearValue: { type: Boolean, default: true },
  focusStartDate: { type: Boolean, default: false },
  disabledTimes: { type: Function, default: void 0 },
  showLastInRange: { type: Boolean, default: true },
  timePickerInline: { type: Boolean, default: false },
  calendar: { type: Function, default: null },
  autoApplyMonth: { type: Boolean, default: true }
};
var pl = {
  key: 1,
  class: "dp__input_wrap"
};
var kl = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "onKeydown"];
var bl = {
  key: 0,
  class: "dp__input_icon"
};
var wl = {
  key: 2,
  class: "dp__clear_icon"
};
var Dl = defineComponent({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: false },
    inputValue: { type: String, default: "" },
    ...ct
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { getDefaultPattern: i2, isValidDate: v, defaults: m3, getDefaultStartTime: P, assignDefaultTime: V } = ze(t2), S3 = ref(), U = ref(null), C = ref(false), d3 = ref(false), h3 = computed(
      () => ({
        dp__pointer: !t2.disabled && !t2.readonly && !t2.textInput,
        dp__disabled: t2.disabled,
        dp__input_readonly: !t2.textInput,
        dp__input: true,
        dp__input_icon_pad: !t2.hideInputIcon,
        dp__input_valid: t2.state,
        dp__input_invalid: t2.state === false,
        dp__input_focus: C.value || t2.isMenuOpen,
        dp__input_reg: !t2.textInput,
        [t2.inputClassName]: !!t2.inputClassName
      })
    ), Q2 = () => {
      a3("set-input-date", null), t2.autoApply && (a3("set-empty-date"), S3.value = null);
    }, H3 = (f) => {
      var O2;
      const I2 = P();
      return Da(
        f,
        ((O2 = m3.value.textInputOptions) == null ? void 0 : O2.format) || i2(),
        I2 || V({}),
        t2.inputValue,
        d3.value
      );
    }, z2 = (f) => {
      const { rangeSeparator: I2 } = m3.value.textInputOptions, [O2, p] = f.split(`${I2}`);
      if (O2) {
        const N = H3(O2.trim()), D2 = p ? H3(p.trim()) : null, c2 = N && D2 ? [N, D2] : [N];
        S3.value = N ? c2 : null;
      }
    }, E2 = () => {
      d3.value = true;
    }, F = (f) => {
      if (t2.range)
        z2(f);
      else if (t2.multiDates) {
        const I2 = f.split(";");
        S3.value = I2.map((O2) => H3(O2.trim())).filter((O2) => O2);
      } else
        S3.value = H3(f);
    }, ne = (f) => {
      var O2;
      const { value: I2 } = f.target;
      I2 !== "" ? ((O2 = m3.value.textInputOptions) != null && O2.openMenu && !t2.isMenuOpen && a3("open"), F(I2), a3("set-input-date", S3.value)) : Q2(), d3.value = false, a3("update:input-value", I2);
    }, re = (f) => {
      var I2, O2;
      t2.textInput ? (F(f.target.value), (I2 = m3.value.textInputOptions) != null && I2.enterSubmit && v(S3.value) && t2.inputValue !== "" ? (a3("set-input-date", S3.value, true), S3.value = null) : (O2 = m3.value.textInputOptions) != null && O2.enterSubmit && t2.inputValue === "" && (S3.value = null, a3("clear"))) : J(f);
    }, Y2 = (f) => {
      var I2, O2, p;
      t2.textInput && ((I2 = m3.value.textInputOptions) != null && I2.tabSubmit) && F(f.target.value), (O2 = m3.value.textInputOptions) != null && O2.tabSubmit && v(S3.value) && t2.inputValue !== "" ? (a3("set-input-date", S3.value, true), S3.value = null) : (p = m3.value.textInputOptions) != null && p.tabSubmit && t2.inputValue === "" && (S3.value = null, a3("clear"));
    }, Z = () => {
      C.value = true, a3("focus");
    }, J = (f) => {
      var I2;
      f.preventDefault(), f.stopImmediatePropagation(), f.stopPropagation(), t2.textInput && ((I2 = m3.value.textInputOptions) != null && I2.openMenu) && !t2.inlineWithInput ? (a3("toggle"), m3.value.textInputOptions.enterSubmit && a3("select-date")) : t2.textInput || a3("toggle");
    }, te = () => {
      a3("real-blur"), C.value = false, t2.isMenuOpen || a3("blur"), t2.autoApply && t2.textInput && S3.value && !t2.isMenuOpen && (a3("set-input-date", S3.value), a3("select-date"), S3.value = null);
    }, ie = () => {
      a3("clear");
    }, ye = (f) => {
      if (!t2.textInput) {
        if (f.code === "Tab")
          return;
        f.preventDefault();
      }
    };
    return n({
      focusInput: () => {
        var f;
        (f = U.value) == null || f.focus({ preventScroll: true });
      },
      setParsedDate: (f) => {
        S3.value = f;
      }
    }), (f, I2) => {
      var O2;
      return openBlock(), createElementBlock("div", { onClick: J }, [
        f.$slots.trigger && !f.$slots["dp-input"] && !f.inline ? renderSlot(f.$slots, "trigger", { key: 0 }) : createCommentVNode("", true),
        !f.$slots.trigger && (!f.inline || f.inlineWithInput) ? (openBlock(), createElementBlock("div", pl, [
          f.$slots["dp-input"] && !f.$slots.trigger && !f.inline ? renderSlot(f.$slots, "dp-input", {
            key: 0,
            value: e2.inputValue,
            isMenuOpen: e2.isMenuOpen,
            onInput: ne,
            onEnter: re,
            onTab: Y2,
            onClear: ie,
            onBlur: te,
            onKeypress: ye,
            onPaste: E2
          }) : createCommentVNode("", true),
          f.$slots["dp-input"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", {
            key: 1,
            ref_key: "inputRef",
            ref: U,
            id: f.uid ? `dp-input-${f.uid}` : void 0,
            name: f.name,
            class: normalizeClass(h3.value),
            inputmode: f.textInput ? "text" : "none",
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            value: e2.inputValue,
            autocomplete: f.autocomplete,
            "aria-label": (O2 = unref(m3).ariaLabels) == null ? void 0 : O2.input,
            onInput: ne,
            onKeydown: [
              withKeys(re, ["enter"]),
              withKeys(Y2, ["tab"]),
              ye
            ],
            onBlur: te,
            onFocus: Z,
            onKeypress: ye,
            onPaste: E2
          }, null, 42, kl)),
          createBaseVNode("div", {
            onClick: I2[0] || (I2[0] = (p) => a3("toggle"))
          }, [
            f.$slots["input-icon"] && !f.hideInputIcon ? (openBlock(), createElementBlock("span", bl, [
              renderSlot(f.$slots, "input-icon")
            ])) : createCommentVNode("", true),
            !f.$slots["input-icon"] && !f.hideInputIcon && !f.$slots["dp-input"] ? (openBlock(), createBlock(unref(jt), {
              key: 1,
              class: "dp__input_icon dp__input_icons"
            })) : createCommentVNode("", true)
          ]),
          f.$slots["clear-icon"] && e2.inputValue && f.clearable && !f.disabled && !f.readonly ? (openBlock(), createElementBlock("span", wl, [
            renderSlot(f.$slots, "clear-icon", { clear: ie })
          ])) : createCommentVNode("", true),
          f.clearable && !f.$slots["clear-icon"] && e2.inputValue && !f.disabled && !f.readonly ? (openBlock(), createBlock(unref(wa), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: withModifiers(ie, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var $l = ["title"];
var Ml = { class: "dp__action_buttons" };
var _l = ["onKeydown", "disabled"];
var Al = defineComponent({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    calendarWidth: { type: Number, default: 0 },
    ...ct
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e2, { emit: n }) {
    const a3 = e2, { formatDate: t2, isValidTime: i2, defaults: v } = ze(a3), { buildMatrix: m3 } = dt(), P = ref(null), V = ref(null);
    onMounted(() => {
      a3.arrowNavigation && m3([_e(P), _e(V)], "actionRow");
    });
    const S3 = computed(() => a3.range && !a3.partialRange && a3.internalModelValue ? a3.internalModelValue.length === 2 : true), U = computed(() => !C.value || !d3.value || !S3.value), C = computed(() => !a3.enableTimePicker || a3.ignoreTimeValidation ? true : i2(a3.internalModelValue)), d3 = computed(() => a3.monthPicker ? a3.range && Array.isArray(a3.internalModelValue) ? !a3.internalModelValue.filter((Z) => !ne(Z)).length : ne(a3.internalModelValue) : true), h3 = () => {
      const Y2 = v.value.previewFormat;
      return a3.timePicker || a3.monthPicker, Y2(Pe(a3.internalModelValue));
    }, Q2 = () => {
      const Y2 = a3.internalModelValue;
      return v.value.multiCalendars > 0 ? `${H3(Y2[0])} - ${H3(Y2[1])}` : [H3(Y2[0]), H3(Y2[1])];
    }, H3 = (Y2) => t2(Y2, v.value.previewFormat), z2 = computed(() => !a3.internalModelValue || !a3.menuMount ? "" : typeof v.value.previewFormat == "string" ? Array.isArray(a3.internalModelValue) ? a3.internalModelValue.length === 2 && a3.internalModelValue[1] ? Q2() : a3.multiDates ? a3.internalModelValue.map((Y2) => `${H3(Y2)}`) : a3.modelAuto ? `${H3(a3.internalModelValue[0])}` : `${H3(a3.internalModelValue[0])} -` : H3(a3.internalModelValue) : h3()), E2 = () => a3.multiDates ? "; " : " - ", F = computed(
      () => Array.isArray(z2.value) ? z2.value.join(E2()) : z2.value
    ), ne = (Y2) => {
      if (!a3.monthPicker)
        return true;
      let Z = true;
      const J = _(Tt(Y2));
      if (a3.minDate && a3.maxDate) {
        const te = _(Tt(a3.minDate)), ie = _(Tt(a3.maxDate));
        return Ue(J, te) && Ve(J, ie) || pe(J, te) || pe(J, ie);
      }
      if (a3.minDate) {
        const te = _(Tt(a3.minDate));
        Z = Ue(J, te) || pe(J, te);
      }
      if (a3.maxDate) {
        const te = _(Tt(a3.maxDate));
        Z = Ve(J, te) || pe(J, te);
      }
      return Z;
    }, re = () => {
      C.value && d3.value && S3.value ? n("select-date") : n("invalid-select");
    };
    return (Y2, Z) => (openBlock(), createElementBlock("div", {
      class: "dp__action_row",
      style: normalizeStyle(e2.calendarWidth ? { width: `${e2.calendarWidth}px` } : {})
    }, [
      Y2.$slots["action-row"] ? renderSlot(Y2.$slots, "action-row", normalizeProps(mergeProps({ key: 0 }, {
        internalModelValue: e2.internalModelValue,
        disabled: U.value,
        selectDate: () => Y2.$emit("select-date"),
        closePicker: () => Y2.$emit("close-picker")
      }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(v).actionRow.showPreview ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "dp__selection_preview",
          title: F.value
        }, [
          Y2.$slots["action-preview"] ? renderSlot(Y2.$slots, "action-preview", {
            key: 0,
            value: e2.internalModelValue
          }) : createCommentVNode("", true),
          Y2.$slots["action-preview"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(F.value), 1)
          ], 64))
        ], 8, $l)) : createCommentVNode("", true),
        createBaseVNode("div", Ml, [
          Y2.$slots["action-buttons"] ? renderSlot(Y2.$slots, "action-buttons", {
            key: 0,
            value: e2.internalModelValue
          }) : createCommentVNode("", true),
          Y2.$slots["action-buttons"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !Y2.inline && unref(v).actionRow.showCancel ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: P,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[0] || (Z[0] = (J) => Y2.$emit("close-picker")),
              onKeydown: [
                Z[1] || (Z[1] = withKeys((J) => Y2.$emit("close-picker"), ["enter"])),
                Z[2] || (Z[2] = withKeys((J) => Y2.$emit("close-picker"), ["space"]))
              ]
            }, toDisplayString(Y2.cancelText), 545)) : createCommentVNode("", true),
            Y2.showNowButton || unref(v).actionRow.showNow ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              ref_key: "cancelButtonRef",
              ref: P,
              class: "dp__action_button dp__action_cancel",
              onClick: Z[3] || (Z[3] = (J) => Y2.$emit("select-now")),
              onKeydown: [
                Z[4] || (Z[4] = withKeys((J) => Y2.$emit("select-now"), ["enter"])),
                Z[5] || (Z[5] = withKeys((J) => Y2.$emit("select-now"), ["space"]))
              ]
            }, toDisplayString(Y2.nowButtonLabel), 545)) : createCommentVNode("", true),
            unref(v).actionRow.showSelect ? (openBlock(), createElementBlock("button", {
              key: 2,
              type: "button",
              class: "dp__action_button dp__action_select",
              onKeydown: [
                withKeys(re, ["enter"]),
                withKeys(re, ["space"])
              ],
              onClick: re,
              disabled: U.value,
              ref_key: "selectButtonRef",
              ref: V
            }, toDisplayString(Y2.selectText), 41, _l)) : createCommentVNode("", true)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
});
var Tl = ["aria-label"];
var Sl = {
  class: "dp__calendar_header",
  role: "row"
};
var Pl = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
};
var Cl = createBaseVNode("div", { class: "dp__calendar_header_separator" }, null, -1);
var Nl = ["aria-label"];
var Rl = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
};
var Il = { class: "dp__cell_inner" };
var Ol = ["aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"];
var Bl = defineComponent({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: false },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...ct
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { buildMultiLevelMatrix: i2 } = dt(), { setDateMonthOrYear: v, defaults: m3 } = ze(t2), P = ref(null), V = ref({
      bottom: "",
      left: "",
      transform: ""
    }), S3 = ref([]), U = ref(null), C = ref(true), d3 = ref(""), h3 = ref({ startX: 0, endX: 0, startY: 0, endY: 0 }), Q2 = ref([]), H3 = ref({ left: "50%" }), z2 = computed(() => t2.calendar ? t2.calendar(t2.mappedDates) : t2.mappedDates), E2 = computed(() => t2.dayNames ? Array.isArray(t2.dayNames) ? t2.dayNames : t2.dayNames(t2.locale, +t2.weekStart) : Ja(t2.locale, +t2.weekStart));
    onMounted(() => {
      a3("mount", { cmp: "calendar", refs: S3 }), t2.noSwipe || U.value && (U.value.addEventListener("touchstart", k2, { passive: false }), U.value.addEventListener("touchend", f, { passive: false }), U.value.addEventListener("touchmove", I2, { passive: false })), t2.monthChangeOnScroll && U.value && U.value.addEventListener("wheel", N, { passive: false });
    });
    const F = (D2) => D2 ? t2.vertical ? "vNext" : "next" : t2.vertical ? "vPrevious" : "previous", ne = (D2, c2) => {
      if (t2.transitions) {
        const u2 = Ke(v(_(), t2.month, t2.year));
        d3.value = Ue(Ke(v(_(), D2, c2)), u2) ? m3.value.transitions[F(true)] : m3.value.transitions[F(false)], C.value = false, nextTick(() => {
          C.value = true;
        });
      }
    }, re = computed(
      () => ({
        [t2.calendarClassName]: !!t2.calendarClassName
      })
    ), Y2 = computed(() => (D2) => {
      const c2 = nl(D2);
      return {
        dp__marker_dot: c2.type === "dot",
        dp__marker_line: c2.type === "line"
      };
    }), Z = computed(() => (D2) => pe(D2, P.value)), J = computed(() => ({
      dp__calendar: true,
      dp__calendar_next: m3.value.multiCalendars > 0 && t2.instance !== 0
    })), te = computed(() => (D2) => t2.hideOffsetDates ? D2.current : true), ie = computed(() => t2.specificMode ? { height: `${t2.modeHeight}px` } : void 0), ye = async (D2, c2, u2) => {
      var w2, A;
      if (a3("set-hover-date", D2), (A = (w2 = D2.marker) == null ? void 0 : w2.tooltip) != null && A.length) {
        const K2 = _e(S3.value[c2][u2]);
        if (K2) {
          const { width: s3, height: r } = K2.getBoundingClientRect();
          P.value = D2.value;
          let l = { left: `${s3 / 2}px` }, M3 = -50;
          if (await nextTick(), Q2.value[0]) {
            const { left: oe, width: ue } = Q2.value[0].getBoundingClientRect();
            oe < 0 && (l = { left: "0" }, M3 = 0, H3.value.left = `${s3 / 2}px`), window.innerWidth < oe + ue && (l = { right: "0" }, M3 = 0, H3.value.left = `${ue - s3 / 2}px`);
          }
          V.value = {
            bottom: `${r}px`,
            ...l,
            transform: `translateX(${M3}%)`
          }, a3("tooltip-open", D2.marker);
        }
      }
    }, B2 = (D2) => {
      P.value && (P.value = null, V.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a3("tooltip-close", D2.marker));
    }, k2 = (D2) => {
      h3.value.startX = D2.changedTouches[0].screenX, h3.value.startY = D2.changedTouches[0].screenY;
    }, f = (D2) => {
      h3.value.endX = D2.changedTouches[0].screenX, h3.value.endY = D2.changedTouches[0].screenY, O2();
    }, I2 = (D2) => {
      t2.vertical && !t2.inline && D2.preventDefault();
    }, O2 = () => {
      const D2 = t2.vertical ? "Y" : "X";
      Math.abs(h3.value[`start${D2}`] - h3.value[`end${D2}`]) > 10 && a3("handle-swipe", h3.value[`start${D2}`] > h3.value[`end${D2}`] ? "right" : "left");
    }, p = (D2, c2, u2) => {
      D2 && (Array.isArray(S3.value[c2]) ? S3.value[c2][u2] = D2 : S3.value[c2] = [D2]), t2.arrowNavigation && i2(S3.value, "calendar");
    }, N = (D2) => {
      t2.monthChangeOnScroll && (D2.preventDefault(), a3("handle-scroll", D2));
    };
    return n({ triggerTransition: ne }), (D2, c2) => {
      var u2;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(J.value)
      }, [
        createBaseVNode("div", {
          style: normalizeStyle(ie.value),
          ref_key: "calendarWrapRef",
          ref: U,
          role: "grid",
          class: normalizeClass(re.value),
          "aria-label": (u2 = unref(m3).ariaLabels) == null ? void 0 : u2.calendarWrap
        }, [
          e2.specificMode ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", Sl, [
              D2.weekNumbers ? (openBlock(), createElementBlock("div", Pl, toDisplayString(D2.weekNumName), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(E2.value, (w2, A) => (openBlock(), createElementBlock("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: A
              }, [
                D2.$slots["calendar-header"] ? renderSlot(D2.$slots, "calendar-header", {
                  key: 0,
                  day: w2,
                  index: A
                }) : createCommentVNode("", true),
                D2.$slots["calendar-header"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(w2), 1)
                ], 64))
              ]))), 128))
            ]),
            Cl,
            createVNode(Transition, {
              name: d3.value,
              css: !!D2.transitions
            }, {
              default: withCtx(() => {
                var w2;
                return [
                  C.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (w2 = unref(m3).ariaLabels) == null ? void 0 : w2.calendarDays
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(z2.value, (A, K2) => (openBlock(), createElementBlock("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: K2
                    }, [
                      D2.weekNumbers ? (openBlock(), createElementBlock("div", Rl, [
                        createBaseVNode("div", Il, toDisplayString(e2.getWeekNum(A.days)), 1)
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(A.days, (s3, r) => {
                        var l, M3, oe;
                        return openBlock(), createElementBlock("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: true,
                          ref: (ue) => p(ue, K2, r),
                          key: r + K2,
                          "aria-selected": s3.classData.dp__active_date || s3.classData.dp__range_start || s3.classData.dp__range_start,
                          "aria-disabled": s3.classData.dp__cell_disabled,
                          "aria-label": (M3 = (l = unref(m3).ariaLabels) == null ? void 0 : l.day) == null ? void 0 : M3.call(l, s3),
                          tabindex: "0",
                          onClick: withModifiers((ue) => D2.$emit("select-date", s3), ["stop", "prevent"]),
                          onKeydown: [
                            withKeys((ue) => D2.$emit("select-date", s3), ["enter"]),
                            withKeys((ue) => D2.$emit("handle-space", s3), ["space"])
                          ],
                          onMouseenter: (ue) => ye(s3, K2, r),
                          onMouseleave: (ue) => B2(s3)
                        }, [
                          createBaseVNode("div", {
                            class: normalizeClass(["dp__cell_inner", s3.classData])
                          }, [
                            D2.$slots.day && te.value(s3) ? renderSlot(D2.$slots, "day", {
                              key: 0,
                              day: +s3.text,
                              date: s3.value
                            }) : createCommentVNode("", true),
                            D2.$slots.day ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(s3.text), 1)
                            ], 64)),
                            s3.marker && te.value(s3) ? (openBlock(), createElementBlock("div", {
                              key: 2,
                              class: normalizeClass(Y2.value(s3.marker)),
                              style: normalizeStyle(s3.marker.color ? { backgroundColor: s3.marker.color } : {})
                            }, null, 6)) : createCommentVNode("", true),
                            Z.value(s3.value) ? (openBlock(), createElementBlock("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: true,
                              ref_key: "activeTooltip",
                              ref: Q2,
                              style: normalizeStyle(V.value)
                            }, [
                              (oe = s3.marker) != null && oe.tooltip ? (openBlock(), createElementBlock("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: c2[0] || (c2[0] = withModifiers(() => {
                                }, ["stop"]))
                              }, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(s3.marker.tooltip, (ue, Se) => (openBlock(), createElementBlock("div", {
                                  key: Se,
                                  class: "dp__tooltip_text"
                                }, [
                                  D2.$slots["marker-tooltip"] ? renderSlot(D2.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: ue,
                                    day: s3.value
                                  }) : createCommentVNode("", true),
                                  D2.$slots["marker-tooltip"] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                    createBaseVNode("div", {
                                      class: "dp__tooltip_mark",
                                      style: normalizeStyle(ue.color ? { backgroundColor: ue.color } : {})
                                    }, null, 4),
                                    createBaseVNode("div", null, toDisplayString(ue.text), 1)
                                  ], 64))
                                ]))), 128)),
                                createBaseVNode("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: normalizeStyle(H3.value)
                                }, null, 4)
                              ])) : createCommentVNode("", true)
                            ], 4)) : createCommentVNode("", true)
                          ], 2)
                        ], 40, Ol);
                      }), 128))
                    ]))), 128))
                  ], 8, Nl)) : createCommentVNode("", true)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 64))
        ], 14, Tl)
      ], 2);
    };
  }
});
var Yl = ["aria-label", "aria-disabled"];
var sn = defineComponent({
  __name: "ActionIcon",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e2, { emit: n }) {
    const a3 = ref(null);
    return onMounted(() => n("set-ref", a3)), (t2, i2) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "dp__btn dp__month_year_col_nav",
      onClick: i2[0] || (i2[0] = (v) => t2.$emit("activate")),
      onKeydown: [
        i2[1] || (i2[1] = withKeys(withModifiers((v) => t2.$emit("activate"), ["prevent"]), ["enter"])),
        i2[2] || (i2[2] = withKeys(withModifiers((v) => t2.$emit("activate"), ["prevent"]), ["space"]))
      ],
      tabindex: "0",
      "aria-label": t2.ariaLabel,
      "aria-disabled": t2.disabled,
      ref_key: "elRef",
      ref: a3
    }, [
      createBaseVNode("span", {
        class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: t2.disabled }])
      }, [
        renderSlot(t2.$slots, "default")
      ], 2)
    ], 40, Yl));
  }
});
var Vl = ["onKeydown"];
var El = { class: "dp__selection_grid_header" };
var Ll = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"];
var Fl = ["aria-label", "onKeydown"];
var Rt = defineComponent({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: false },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: false },
    monthPicker: { type: Boolean, default: false },
    yearPicker: { type: Boolean, default: false },
    escClose: { type: Boolean, default: true },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: false },
    autoApply: { type: Boolean, default: false },
    textInput: { type: Boolean, default: false },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    autoApplyMonth: { type: Boolean, default: false }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { setSelectionGrid: i2, buildMultiLevelMatrix: v, setMonthPicker: m3 } = dt(), { hideNavigationButtons: P } = ze(t2), V = ref(false), S3 = ref(null), U = ref(null), C = ref([]), d3 = ref(), h3 = ref(null), Q2 = ref(0), H3 = ref(null);
    onBeforeUpdate(() => {
      S3.value = null;
    }), onMounted(() => {
      nextTick().then(() => ie()), E2(), z2(true);
    }), onUnmounted(() => z2(false));
    const z2 = (p) => {
      var N;
      t2.arrowNavigation && ((N = t2.headerRefs) != null && N.length ? m3(p) : i2(p));
    }, E2 = () => {
      const p = _e(U);
      p && (t2.textInput || p.focus({ preventScroll: true }), V.value = p.clientHeight < p.scrollHeight);
    }, F = computed(
      () => ({
        dp__overlay: true
      })
    ), ne = computed(() => ({
      dp__overlay_col: true
    })), re = (p) => t2.monthPicker && !t2.autoApplyMonth ? pe(
      t2.internalModelValue,
      setYear(setMonth(/* @__PURE__ */ new Date(), p.value), t2.year)
    ) : t2.skipActive ? false : p.value === t2.modelValue, Y2 = computed(() => t2.items.map((p) => p.filter((N) => N).map((N) => {
      var u2, w2, A;
      const D2 = t2.disabledValues.some((K2) => K2 === N.value) || te(N.value), c2 = (u2 = t2.multiModelValue) != null && u2.length ? (w2 = t2.multiModelValue) == null ? void 0 : w2.some(
        (K2) => pe(
          K2,
          setYear(
            t2.monthPicker ? setMonth(/* @__PURE__ */ new Date(), N.value) : /* @__PURE__ */ new Date(),
            t2.monthPicker ? t2.year : N.value
          )
        )
      ) : re(N);
      return {
        ...N,
        className: {
          dp__overlay_cell_active: c2,
          dp__overlay_cell: !c2,
          dp__overlay_cell_disabled: D2,
          dp__overlay_cell_active_disabled: D2 && c2,
          dp__overlay_cell_pad: true,
          dp__cell_in_between: (A = t2.multiModelValue) != null && A.length && t2.skipActive ? B2(N.value) : false
        }
      };
    }))), Z = computed(
      () => ({
        dp__button: true,
        dp__overlay_action: true,
        dp__over_action_scroll: V.value,
        dp__button_bottom: t2.autoApply
      })
    ), J = computed(() => {
      var p, N;
      return {
        dp__overlay_container: true,
        dp__container_flex: ((p = t2.items) == null ? void 0 : p.length) <= 6,
        dp__container_block: ((N = t2.items) == null ? void 0 : N.length) > 6
      };
    }), te = (p) => {
      const N = t2.maxValue || t2.maxValue === 0, D2 = t2.minValue || t2.minValue === 0;
      return !N && !D2 ? false : N && D2 ? +p > +t2.maxValue || +p < +t2.minValue : N ? +p > +t2.maxValue : D2 ? +p < +t2.minValue : false;
    }, ie = () => {
      const p = _e(S3), N = _e(U), D2 = _e(h3), c2 = _e(H3), u2 = D2 ? D2.getBoundingClientRect().height : 0;
      N && (Q2.value = N.getBoundingClientRect().height - u2), p && c2 && (c2.scrollTop = p.offsetTop - c2.offsetTop - (Q2.value / 2 - p.getBoundingClientRect().height) - u2);
    }, ye = (p) => {
      !t2.disabledValues.some((N) => N === p) && !te(p) && (a3("update:model-value", p), a3("selected"));
    }, B2 = (p) => {
      const N = t2.monthPicker ? t2.year : p;
      return Qn(
        t2.multiModelValue,
        setYear(
          t2.monthPicker ? setMonth(/* @__PURE__ */ new Date(), d3.value || 0) : /* @__PURE__ */ new Date(),
          t2.monthPicker ? N : d3.value || N
        ),
        setYear(t2.monthPicker ? setMonth(/* @__PURE__ */ new Date(), p) : /* @__PURE__ */ new Date(), N)
      );
    }, k2 = () => {
      a3("toggle"), a3("reset-flow");
    }, f = () => {
      t2.escClose && k2();
    }, I2 = (p, N, D2, c2) => {
      p && (N.value === +t2.modelValue && !t2.disabledValues.includes(N.value) && (S3.value = p), t2.arrowNavigation && (Array.isArray(C.value[D2]) ? C.value[D2][c2] = p : C.value[D2] = [p], O2()));
    }, O2 = () => {
      var N, D2;
      const p = (N = t2.headerRefs) != null && N.length ? [t2.headerRefs].concat(C.value) : C.value.concat([t2.skipButtonRef ? [] : [h3.value]]);
      v(Pe(p), (D2 = t2.headerRefs) != null && D2.length ? "monthPicker" : "selectionGrid");
    };
    return n({ focusGrid: E2 }), (p, N) => {
      var D2;
      return openBlock(), createElementBlock("div", {
        ref_key: "gridWrapRef",
        ref: U,
        class: normalizeClass(F.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: withKeys(f, ["esc"])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(J.value),
          ref_key: "containerRef",
          ref: H3,
          role: "grid",
          style: normalizeStyle({ height: `${Q2.value}px` })
        }, [
          createBaseVNode("div", El, [
            renderSlot(p.$slots, "header")
          ]),
          p.$slots.overlay ? renderSlot(p.$slots, "overlay", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(Y2.value, (c2, u2) => (openBlock(), createElementBlock("div", {
            class: normalizeClass(["dp__overlay_row", { dp__flex_row: Y2.value.length >= 3 }]),
            key: u2,
            role: "row"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(c2, (w2, A) => (openBlock(), createElementBlock("div", {
              role: "gridcell",
              class: normalizeClass(ne.value),
              key: w2.value,
              "aria-selected": w2.value === e2.modelValue && !e2.disabledValues.includes(w2.value),
              "aria-disabled": w2.className.dp__overlay_cell_disabled,
              ref_for: true,
              ref: (K2) => I2(K2, w2, u2, A),
              tabindex: "0",
              onClick: (K2) => ye(w2.value),
              onKeydown: [
                withKeys((K2) => ye(w2.value), ["enter"]),
                withKeys((K2) => ye(w2.value), ["space"])
              ],
              onMouseover: (K2) => d3.value = w2.value
            }, [
              createBaseVNode("div", {
                class: normalizeClass(w2.className)
              }, [
                p.$slots.item ? renderSlot(p.$slots, "item", {
                  key: 0,
                  item: w2
                }) : createCommentVNode("", true),
                p.$slots.item ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(w2.text), 1)
                ], 64))
              ], 2)
            ], 42, Ll))), 128))
          ], 2))), 128))
        ], 6),
        p.$slots["button-icon"] ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          role: "button",
          "aria-label": (D2 = e2.ariaLabels) == null ? void 0 : D2.toggleOverlay,
          class: normalizeClass(Z.value),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: h3,
          onClick: k2,
          onKeydown: [
            withKeys(k2, ["enter"]),
            withKeys(k2, ["tab"])
          ]
        }, [
          renderSlot(p.$slots, "button-icon")
        ], 42, Fl)), [
          [vShow, !unref(P)(e2.type)]
        ]) : createCommentVNode("", true)
      ], 42, Vl);
    };
  }
});
var Ul = ["aria-label"];
var xn = defineComponent({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: false },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: true },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: false },
    arrowNavigation: { type: Boolean, default: false },
    autoApply: { type: Boolean, default: false },
    textInput: { type: Boolean, default: false },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e2, { emit: n }) {
    const a3 = e2, { transitionName: t2, showTransition: i2 } = Kt(a3.transitions), v = ref(null);
    return onMounted(() => n("set-ref", v)), (m3, P) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("button", {
        type: "button",
        class: "dp__btn dp__month_year_select",
        onClick: P[0] || (P[0] = (V) => m3.$emit("toggle")),
        onKeydown: [
          P[1] || (P[1] = withKeys(withModifiers((V) => m3.$emit("toggle"), ["prevent"]), ["enter"])),
          P[2] || (P[2] = withKeys(withModifiers((V) => m3.$emit("toggle"), ["prevent"]), ["space"]))
        ],
        "aria-label": e2.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: v
      }, [
        renderSlot(m3.$slots, "default")
      ], 40, Ul),
      createVNode(Transition, {
        name: unref(t2)(e2.showSelectionGrid),
        css: unref(i2)
      }, {
        default: withCtx(() => [
          e2.showSelectionGrid ? (openBlock(), createBlock(Rt, mergeProps({ key: 0 }, {
            modelValue: e2.modelValue,
            items: e2.items,
            disabledValues: e2.disabledValues,
            minValue: e2.minValue,
            maxValue: e2.maxValue,
            escClose: e2.escClose,
            type: e2.type,
            arrowNavigation: e2.arrowNavigation,
            textInput: e2.textInput,
            autoApply: e2.autoApply,
            ariaLabels: e2.ariaLabels,
            hideNavigation: e2.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": P[3] || (P[3] = (V) => m3.$emit("update:model-value", V)),
            onToggle: P[4] || (P[4] = (V) => m3.$emit("toggle"))
          }), createSlots({
            "button-icon": withCtx(() => [
              m3.$slots["calendar-icon"] ? renderSlot(m3.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
              m3.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(jt), { key: 1 }))
            ]),
            _: 2
          }, [
            m3.$slots[e2.slotName] ? {
              name: "item",
              fn: withCtx(({ item: V }) => [
                renderSlot(m3.$slots, e2.slotName, { item: V })
              ]),
              key: "0"
            } : void 0,
            m3.$slots[e2.overlaySlot] ? {
              name: "overlay",
              fn: withCtx(() => [
                renderSlot(m3.$slots, e2.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            m3.$slots[`${e2.overlaySlot}-header`] ? {
              name: "header",
              fn: withCtx(() => [
                renderSlot(m3.$slots, `${e2.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
});
var Wl = { class: "dp__month_year_row" };
var Hl = { class: "dp__month_picker_header" };
var xl = ["aria-label"];
var zl = ["aria-label"];
var jl = ["aria-label"];
var Kl = defineComponent({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...ct
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { defaults: i2 } = ze(t2), { transitionName: v, showTransition: m3 } = Kt(i2.value.transitions), { buildMatrix: P } = dt(), { handleMonthYearChange: V, isDisabled: S3, updateMonthYear: U } = ml(t2, a3), C = ref(false), d3 = ref(false), h3 = ref([null, null, null, null]), Q2 = ref(null), H3 = ref(null), z2 = ref(null);
    onMounted(() => {
      a3("mount");
    });
    const E2 = (r) => ({
      get: () => t2[r],
      set: (l) => {
        const M3 = r === "month" ? "year" : "month";
        a3("update-month-year", { [r]: l, [M3]: t2[M3] }), a3("month-year-select", r === "year"), r === "month" ? u2(true) : w2(true);
      }
    }), F = computed(E2("month")), ne = computed(E2("year")), re = (r) => {
      const l = getYear(_(r));
      return t2.year === l;
    }, Y2 = computed(() => t2.monthPicker ? Array.isArray(t2.disabledDates) ? t2.disabledDates.map((r) => _(r)).filter((r) => re(r)).map((r) => getMonth(r)) : [] : []), Z = computed(() => (r) => {
      const l = r === "month";
      return {
        showSelectionGrid: (l ? C : d3).value,
        items: (l ? O2 : p).value,
        disabledValues: i2.value.filters[l ? "months" : "years"].concat(Y2.value),
        minValue: (l ? ye : te).value,
        maxValue: (l ? B2 : ie).value,
        headerRefs: l && t2.monthPicker ? [Q2.value, H3.value, z2.value] : [],
        escClose: t2.escClose,
        transitions: i2.value.transitions,
        ariaLabels: i2.value.ariaLabels,
        textInput: t2.textInput,
        autoApply: t2.autoApply,
        arrowNavigation: t2.arrowNavigation,
        hideNavigation: t2.hideNavigation
      };
    }), J = computed(() => (r) => ({
      month: t2.month,
      year: t2.year,
      items: r === "month" ? t2.months : t2.years,
      instance: t2.instance,
      updateMonthYear: U,
      toggle: r === "month" ? u2 : w2
    })), te = computed(() => t2.minDate ? getYear(_(t2.minDate)) : null), ie = computed(() => t2.maxDate ? getYear(_(t2.maxDate)) : null), ye = computed(() => {
      if (t2.minDate && te.value) {
        if (te.value > t2.year)
          return 12;
        if (te.value === t2.year)
          return getMonth(_(t2.minDate));
      }
      return null;
    }), B2 = computed(() => t2.maxDate && ie.value ? ie.value < t2.year ? -1 : ie.value === t2.year ? getMonth(_(t2.maxDate)) : null : null), k2 = computed(() => (t2.range || t2.multiDates) && t2.internalModelValue && (t2.monthPicker || t2.yearPicker) ? t2.internalModelValue : []), f = (r) => {
      const l = [], M3 = (oe) => oe;
      for (let oe = 0; oe < r.length; oe += 3) {
        const ue = [r[oe], r[oe + 1], r[oe + 2]];
        l.push(M3(ue));
      }
      return l;
    }, I2 = computed(() => {
      const r = t2.months.find((l) => l.value === t2.month);
      return r || { text: "", value: 0 };
    }), O2 = computed(() => f(t2.months)), p = computed(() => f(t2.years)), N = computed(() => i2.value.multiCalendars ? t2.multiCalendarsSolo ? true : t2.instance === 0 : true), D2 = computed(() => i2.value.multiCalendars ? t2.multiCalendarsSolo ? true : t2.instance === i2.value.multiCalendars - 1 : true), c2 = (r, l) => {
      l !== void 0 ? r.value = l : r.value = !r.value;
    }, u2 = (r = false, l) => {
      A(r), c2(C, l), C.value || a3("overlay-closed");
    }, w2 = (r = false, l) => {
      A(r), c2(d3, l), d3.value || a3("overlay-closed");
    }, A = (r) => {
      r || a3("reset-flow");
    }, K2 = (r = false) => {
      S3.value(r) || a3("update-month-year", {
        year: r ? t2.year + 1 : t2.year - 1,
        month: t2.month,
        fromNav: true
      });
    }, s3 = (r, l) => {
      t2.arrowNavigation && (h3.value[l] = _e(r), P(h3.value, "monthYear"));
    };
    return n({
      toggleMonthPicker: u2,
      toggleYearPicker: w2,
      handleMonthYearChange: V
    }), (r, l) => {
      var M3, oe, ue, Se, Te;
      return openBlock(), createElementBlock("div", Wl, [
        r.$slots["month-year"] ? renderSlot(r.$slots, "month-year", normalizeProps(mergeProps({ key: 0 }, { month: e2.month, year: e2.year, months: e2.months, years: e2.years, updateMonthYear: unref(U), handleMonthYearChange: unref(V), instance: e2.instance }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          !r.monthPicker && !r.yearPicker ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            N.value && !r.vertical ? (openBlock(), createBlock(sn, {
              key: 0,
              "aria-label": (M3 = unref(i2).ariaLabels) == null ? void 0 : M3.prevMonth,
              disabled: unref(S3)(false),
              onActivate: l[0] || (l[0] = (ee) => unref(V)(false)),
              onSetRef: l[1] || (l[1] = (ee) => s3(ee, 0))
            }, {
              default: withCtx(() => [
                r.$slots["arrow-left"] ? renderSlot(r.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
                r.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Sn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["dp__month_year_wrap", {
                dp__year_disable_select: t2.disableYearSelect
              }])
            }, [
              createVNode(xn, mergeProps({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (oe = unref(i2).ariaLabels) == null ? void 0 : oe.openMonthsOverlay,
                modelValue: F.value,
                "onUpdate:modelValue": l[2] || (l[2] = (ee) => F.value = ee)
              }, Z.value("month"), {
                onToggle: u2,
                onSetRef: l[3] || (l[3] = (ee) => s3(ee, 1))
              }), createSlots({
                default: withCtx(() => [
                  r.$slots.month ? renderSlot(r.$slots, "month", normalizeProps(mergeProps({ key: 0 }, I2.value))) : createCommentVNode("", true),
                  r.$slots.month ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(I2.value.text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                r.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                r.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: withCtx(({ item: ee }) => [
                    renderSlot(r.$slots, "month-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                r.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "month-overlay", normalizeProps(guardReactiveProps(J.value("month"))))
                  ]),
                  key: "2"
                } : void 0,
                r.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "month-overlay-header", { toggle: u2 })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              t2.disableYearSelect ? createCommentVNode("", true) : (openBlock(), createBlock(xn, mergeProps({
                key: 0,
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (ue = unref(i2).ariaLabels) == null ? void 0 : ue.openYearsOverlay,
                modelValue: ne.value,
                "onUpdate:modelValue": l[4] || (l[4] = (ee) => ne.value = ee)
              }, Z.value("year"), {
                onToggle: w2,
                onSetRef: l[5] || (l[5] = (ee) => s3(ee, 2))
              }), createSlots({
                default: withCtx(() => [
                  r.$slots.year ? renderSlot(r.$slots, "year", {
                    key: 0,
                    year: e2.year
                  }) : createCommentVNode("", true),
                  r.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(e2.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                r.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                r.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: withCtx(({ item: ee }) => [
                    renderSlot(r.$slots, "year-overlay-value", {
                      text: ee.text,
                      value: ee.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                r.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "year-overlay", normalizeProps(guardReactiveProps(J.value("year"))))
                  ]),
                  key: "2"
                } : void 0,
                r.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: withCtx(() => [
                    renderSlot(r.$slots, "year-overlay-header", { toggle: w2 })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]))
            ], 2),
            N.value && r.vertical ? (openBlock(), createBlock(sn, {
              key: 1,
              "aria-label": (Se = unref(i2).ariaLabels) == null ? void 0 : Se.prevMonth,
              disabled: unref(S3)(false),
              onActivate: l[6] || (l[6] = (ee) => unref(V)(false))
            }, {
              default: withCtx(() => [
                r.$slots["arrow-up"] ? renderSlot(r.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                r.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Xn), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
            D2.value ? (openBlock(), createBlock(sn, {
              key: 2,
              ref: "rightIcon",
              disabled: unref(S3)(true),
              "aria-label": (Te = unref(i2).ariaLabels) == null ? void 0 : Te.nextMonth,
              onActivate: l[7] || (l[7] = (ee) => unref(V)(true)),
              onSetRef: l[8] || (l[8] = (ee) => s3(ee, 3))
            }, {
              default: withCtx(() => [
                r.$slots[r.vertical ? "arrow-down" : "arrow-right"] ? renderSlot(r.$slots, r.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : createCommentVNode("", true),
                r.$slots[r.vertical ? "arrow-down" : "arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(resolveDynamicComponent(r.vertical ? unref(Jn) : unref(Pn)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true),
          r.monthPicker ? (openBlock(), createBlock(Rt, mergeProps({ key: 1 }, Z.value("month"), {
            "internal-model-value": e2.internalModelValue,
            year: e2.year,
            "auto-apply-month": r.autoApplyMonth,
            "multi-model-value": k2.value,
            "month-picker": "",
            modelValue: F.value,
            "onUpdate:modelValue": l[17] || (l[17] = (ee) => F.value = ee),
            onToggle: u2,
            onSelected: l[18] || (l[18] = (ee) => r.$emit("overlay-closed"))
          }), createSlots({
            header: withCtx(() => {
              var ee, We, Ie;
              return [
                createBaseVNode("div", Hl, [
                  createBaseVNode("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: Q2,
                    onClick: l[9] || (l[9] = (Ae) => K2(false)),
                    onKeydown: l[10] || (l[10] = withKeys((Ae) => K2(false), ["enter"]))
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: unref(S3)(false) }]),
                      role: "button",
                      "aria-label": (ee = unref(i2).ariaLabels) == null ? void 0 : ee.prevMonth
                    }, [
                      r.$slots["arrow-left"] ? renderSlot(r.$slots, "arrow-left", { key: 0 }) : createCommentVNode("", true),
                      r.$slots["arrow-left"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Sn), { key: 1 }))
                    ], 10, xl)
                  ], 544),
                  createBaseVNode("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: H3,
                    "aria-label": (We = unref(i2).ariaLabels) == null ? void 0 : We.openYearsOverlay,
                    tabindex: "0",
                    onClick: l[11] || (l[11] = () => w2(false)),
                    onKeydown: l[12] || (l[12] = withKeys(() => w2(false), ["enter"]))
                  }, [
                    r.$slots.year ? renderSlot(r.$slots, "year", {
                      key: 0,
                      year: e2.year
                    }) : createCommentVNode("", true),
                    r.$slots.year ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(e2.year), 1)
                    ], 64))
                  ], 40, zl),
                  createBaseVNode("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: z2,
                    onClick: l[13] || (l[13] = (Ae) => K2(true)),
                    onKeydown: l[14] || (l[14] = withKeys((Ae) => K2(true), ["enter"]))
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(["dp__inner_nav", { dp__inner_nav_disabled: unref(S3)(true) }]),
                      role: "button",
                      "aria-label": (Ie = unref(i2).ariaLabels) == null ? void 0 : Ie.nextMonth
                    }, [
                      r.$slots["arrow-right"] ? renderSlot(r.$slots, "arrow-right", { key: 0 }) : createCommentVNode("", true),
                      r.$slots["arrow-right"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Pn), { key: 1 }))
                    ], 10, jl)
                  ], 544)
                ]),
                createVNode(Transition, {
                  name: unref(v)(d3.value),
                  css: unref(m3)
                }, {
                  default: withCtx(() => [
                    d3.value ? (openBlock(), createBlock(Rt, mergeProps({ key: 0 }, Z.value("year"), {
                      modelValue: ne.value,
                      "onUpdate:modelValue": l[15] || (l[15] = (Ae) => ne.value = Ae),
                      onToggle: w2,
                      onSelected: l[16] || (l[16] = (Ae) => r.$emit("overlay-closed"))
                    }), createSlots({
                      "button-icon": withCtx(() => [
                        r.$slots["calendar-icon"] ? renderSlot(r.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                        r.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(jt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      r.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: withCtx(({ item: Ae }) => [
                          renderSlot(r.$slots, "year-overlay-value", {
                            text: Ae.text,
                            value: Ae.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : createCommentVNode("", true)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            r.$slots["month-overlay-value"] ? {
              name: "item",
              fn: withCtx(({ item: ee }) => [
                renderSlot(r.$slots, "month-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["internal-model-value", "year", "auto-apply-month", "multi-model-value", "modelValue"])) : createCommentVNode("", true),
          r.yearPicker ? (openBlock(), createBlock(Rt, mergeProps({ key: 2 }, Z.value("year"), {
            modelValue: ne.value,
            "onUpdate:modelValue": l[19] || (l[19] = (ee) => ne.value = ee),
            "multi-model-value": k2.value,
            "skip-active": r.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: w2,
            onSelected: l[20] || (l[20] = (ee) => r.$emit("overlay-closed"))
          }), createSlots({ _: 2 }, [
            r.$slots["year-overlay-value"] ? {
              name: "item",
              fn: withCtx(({ item: ee }) => [
                renderSlot(r.$slots, "year-overlay-value", {
                  text: ee.text,
                  value: ee.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
});
var Gl = {
  key: 0,
  class: "dp__time_input"
};
var Zl = ["aria-label", "onKeydown", "onClick"];
var ql = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var Xl = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var Jl = ["aria-label", "onKeydown", "onClick"];
var Ql = ["aria-label", "onKeydown", "onClick"];
var er = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1);
var tr = createBaseVNode("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1);
var nr = { key: 0 };
var ar = ["aria-label", "onKeydown"];
var lr = defineComponent({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...ct
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { setTimePickerElements: i2, setTimePickerBackRef: v } = dt(), { defaults: m3 } = ze(t2), { transitionName: P, showTransition: V } = Kt(m3.value.transitions), S3 = reactive({
      hours: false,
      minutes: false,
      seconds: false
    }), U = ref("AM"), C = ref(null), d3 = ref([]);
    onMounted(() => {
      a3("mounted");
    });
    const h3 = (c2) => set(/* @__PURE__ */ new Date(), {
      hours: c2.hours,
      minutes: c2.minutes,
      seconds: t2.enableSeconds ? c2.seconds : 0,
      milliseconds: 0
    }), Q2 = computed(() => ({ hours: t2.hours, minutes: t2.minutes, seconds: t2.seconds })), H3 = computed(() => (c2) => !te(+t2[c2] + +t2[`${c2}Increment`], c2)), z2 = computed(() => (c2) => !te(+t2[c2] - +t2[`${c2}Increment`], c2)), E2 = (c2, u2) => add(set(_(), c2), u2), F = (c2, u2) => sub(set(_(), c2), u2), ne = computed(
      () => ({
        dp__time_col: true,
        dp__time_col_block: !t2.timePickerInline,
        dp__time_col_reg_block: !t2.enableSeconds && t2.is24 && !t2.timePickerInline,
        dp__time_col_reg_inline: !t2.enableSeconds && t2.is24 && t2.timePickerInline,
        dp__time_col_reg_with_button: !t2.enableSeconds && !t2.is24,
        dp__time_col_sec: t2.enableSeconds && t2.is24,
        dp__time_col_sec_with_button: t2.enableSeconds && !t2.is24
      })
    ), re = computed(() => {
      const c2 = [{ type: "hours" }, { type: "", separator: true }, { type: "minutes" }];
      return t2.enableSeconds ? c2.concat([{ type: "", separator: true }, { type: "seconds" }]) : c2;
    }), Y2 = computed(() => re.value.filter((c2) => !c2.separator)), Z = computed(() => (c2) => {
      if (c2 === "hours") {
        const u2 = I2(+t2.hours);
        return { text: u2 < 10 ? `0${u2}` : `${u2}`, value: u2 };
      }
      return { text: t2[c2] < 10 ? `0${t2[c2]}` : `${t2[c2]}`, value: t2[c2] };
    }), J = (c2) => {
      const u2 = t2.is24 ? 24 : 12, w2 = c2 === "hours" ? u2 : 60, A = +t2[`${c2}GridIncrement`], K2 = c2 === "hours" && !t2.is24 ? A : 0, s3 = [];
      for (let r = K2; r < w2; r += A)
        s3.push({ value: r, text: r < 10 ? `0${r}` : `${r}` });
      return c2 === "hours" && !t2.is24 && s3.push({ value: 0, text: "12" }), Xa(s3);
    }, te = (c2, u2) => {
      const w2 = t2.minTime ? h3(Jt(t2.minTime)) : null, A = t2.maxTime ? h3(Jt(t2.maxTime)) : null, K2 = h3(Jt(Q2.value, u2, c2));
      return w2 && A ? (isBefore(K2, A) || isEqual(K2, A)) && (isAfter(K2, w2) || isEqual(K2, w2)) : w2 ? isAfter(K2, w2) || isEqual(K2, w2) : A ? isBefore(K2, A) || isEqual(K2, A) : true;
    }, ie = computed(() => (c2) => J(c2).flat().filter((w2) => al(w2.value)).map((w2) => w2.value).filter((w2) => !te(w2, c2))), ye = (c2) => t2[`no${c2[0].toUpperCase() + c2.slice(1)}Overlay`], B2 = (c2) => {
      ye(c2) || (S3[c2] = !S3[c2], S3[c2] || a3("overlay-closed"));
    }, k2 = (c2) => c2 === "hours" ? getHours : c2 === "minutes" ? getMinutes : getSeconds, f = (c2, u2 = true) => {
      const w2 = u2 ? E2 : F, A = u2 ? +t2[`${c2}Increment`] : -+t2[`${c2}Increment`];
      te(+t2[c2] + A, c2) && a3(
        `update:${c2}`,
        k2(c2)(w2({ [c2]: +t2[c2] }, { [c2]: +t2[`${c2}Increment`] }))
      );
    }, I2 = (c2) => t2.is24 ? c2 : (c2 >= 12 ? U.value = "PM" : U.value = "AM", tl(c2)), O2 = () => {
      U.value === "PM" ? (U.value = "AM", a3("update:hours", t2.hours - 12)) : (U.value = "PM", a3("update:hours", t2.hours + 12)), a3("am-pm-change", U.value);
    }, p = (c2) => {
      S3[c2] = true;
    }, N = (c2, u2, w2) => {
      if (c2 && t2.arrowNavigation) {
        Array.isArray(d3.value[u2]) ? d3.value[u2][w2] = c2 : d3.value[u2] = [c2];
        const A = d3.value.reduce(
          (K2, s3) => s3.map((r, l) => [...K2[l] || [], s3[l]]),
          []
        );
        v(t2.closeTimePickerBtn), C.value && (A[1] = A[1].concat(C.value)), i2(A, t2.order);
      }
    }, D2 = (c2, u2) => c2 === "hours" && !t2.is24 ? a3(`update:${c2}`, U.value === "PM" ? u2 + 12 : u2) : a3(`update:${c2}`, u2);
    return n({ openChildCmp: p }), (c2, u2) => {
      var w2;
      return c2.disabled ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Gl, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(re.value, (A, K2) => {
          var s3, r, l;
          return openBlock(), createElementBlock("div", {
            key: K2,
            class: normalizeClass(ne.value)
          }, [
            A.separator ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(" : ")
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t2.timePickerInline,
                  dp__inc_dec_button_inline: t2.timePickerInline,
                  dp__tp_inline_btn_top: t2.timePickerInline,
                  dp__inc_dec_button_disabled: H3.value(A.type)
                }),
                "aria-label": (s3 = unref(m3).ariaLabels) == null ? void 0 : s3.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  withKeys((M3) => f(A.type), ["enter"]),
                  withKeys((M3) => f(A.type), ["space"])
                ],
                onClick: (M3) => f(A.type),
                ref_for: true,
                ref: (M3) => N(M3, K2, 0)
              }, [
                t2.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  ql,
                  Xl
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  c2.$slots["arrow-up"] ? renderSlot(c2.$slots, "arrow-up", { key: 0 }) : createCommentVNode("", true),
                  c2.$slots["arrow-up"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Xn), { key: 1 }))
                ], 64))
              ], 42, Zl),
              createBaseVNode("button", {
                type: "button",
                "aria-label": (r = unref(m3).ariaLabels) == null ? void 0 : r.openTpOverlay(A.type),
                class: normalizeClass([
                  "dp__btn",
                  ye(A.type) ? void 0 : {
                    dp__time_display: true,
                    dp__time_display_block: !t2.timePickerInline,
                    dp__time_display_inline: t2.timePickerInline
                  }
                ]),
                tabindex: "0",
                onKeydown: [
                  withKeys((M3) => B2(A.type), ["enter"]),
                  withKeys((M3) => B2(A.type), ["space"])
                ],
                onClick: (M3) => B2(A.type),
                ref_for: true,
                ref: (M3) => N(M3, K2, 1)
              }, [
                c2.$slots[A.type] ? renderSlot(c2.$slots, A.type, {
                  key: 0,
                  text: Z.value(A.type).text,
                  value: Z.value(A.type).value
                }) : createCommentVNode("", true),
                c2.$slots[A.type] ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(Z.value(A.type).text), 1)
                ], 64))
              ], 42, Jl),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass({
                  dp__btn: true,
                  dp__inc_dec_button: !t2.timePickerInline,
                  dp__inc_dec_button_inline: t2.timePickerInline,
                  dp__tp_inline_btn_bottom: t2.timePickerInline,
                  dp__inc_dec_button_disabled: z2.value(A.type)
                }),
                "aria-label": (l = unref(m3).ariaLabels) == null ? void 0 : l.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  withKeys((M3) => f(A.type, false), ["enter"]),
                  withKeys((M3) => f(A.type, false), ["space"])
                ],
                onClick: (M3) => f(A.type, false),
                ref_for: true,
                ref: (M3) => N(M3, K2, 2)
              }, [
                t2.timePickerInline ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  er,
                  tr
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  c2.$slots["arrow-down"] ? renderSlot(c2.$slots, "arrow-down", { key: 0 }) : createCommentVNode("", true),
                  c2.$slots["arrow-down"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Jn), { key: 1 }))
                ], 64))
              ], 42, Ql)
            ], 64))
          ], 2);
        }), 128)),
        c2.is24 ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", nr, [
          c2.$slots["am-pm-button"] ? renderSlot(c2.$slots, "am-pm-button", {
            key: 0,
            toggle: O2,
            value: U.value
          }) : createCommentVNode("", true),
          c2.$slots["am-pm-button"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: C,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (w2 = unref(m3).ariaLabels) == null ? void 0 : w2.amPmButton,
            tabindex: "0",
            onClick: O2,
            onKeydown: [
              withKeys(withModifiers(O2, ["prevent"]), ["enter"]),
              withKeys(withModifiers(O2, ["prevent"]), ["space"])
            ]
          }, toDisplayString(U.value), 41, ar))
        ])),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Y2.value, (A, K2) => (openBlock(), createBlock(Transition, {
          key: K2,
          name: unref(P)(S3[A.type]),
          css: unref(V)
        }, {
          default: withCtx(() => [
            S3[A.type] ? (openBlock(), createBlock(Rt, {
              key: 0,
              items: J(A.type),
              "disabled-values": unref(m3).filters.times[A.type].concat(ie.value(A.type)),
              "esc-close": c2.escClose,
              "aria-labels": unref(m3).ariaLabels,
              "hide-navigation": c2.hideNavigation,
              "onUpdate:modelValue": (s3) => D2(A.type, s3),
              onSelected: (s3) => B2(A.type),
              onToggle: (s3) => B2(A.type),
              onResetFlow: u2[0] || (u2[0] = (s3) => c2.$emit("reset-flow")),
              type: A.type
            }, createSlots({
              "button-icon": withCtx(() => [
                c2.$slots["clock-icon"] ? renderSlot(c2.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
                c2.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(qn), { key: 1 }))
              ]),
              _: 2
            }, [
              c2.$slots[`${A.type}-overlay-value`] ? {
                name: "item",
                fn: withCtx(({ item: s3 }) => [
                  renderSlot(c2.$slots, `${A.type}-overlay-value`, {
                    text: s3.text,
                    value: s3.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
});
var rr = ["aria-label"];
var or = ["tabindex"];
var sr = ["aria-label"];
var ir = defineComponent({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...ct
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, { buildMatrix: i2, setTimePicker: v } = dt(), m3 = useSlots(), { hideNavigationButtons: P, defaults: V } = ze(t2), { transitionName: S3, showTransition: U } = Kt(V.value.transitions), C = ref(null), d3 = ref(null), h3 = ref([]), Q2 = ref(null);
    onMounted(() => {
      a3("mount"), !t2.timePicker && t2.arrowNavigation ? i2([_e(C.value)], "time") : v(true, t2.timePicker);
    });
    const H3 = computed(() => t2.range && t2.modelAuto ? la(t2.internalModelValue) : true), z2 = ref(false), E2 = (B2) => ({
      hours: Array.isArray(t2.hours) ? t2.hours[B2] : t2.hours,
      minutes: Array.isArray(t2.minutes) ? t2.minutes[B2] : t2.minutes,
      seconds: Array.isArray(t2.seconds) ? t2.seconds[B2] : t2.seconds
    }), F = computed(() => {
      const B2 = [];
      if (t2.range)
        for (let k2 = 0; k2 < 2; k2++)
          B2.push(E2(k2));
      else
        B2.push(E2(0));
      return B2;
    }), ne = (B2, k2 = false, f = "") => {
      k2 || a3("reset-flow"), z2.value = B2, a3(B2 ? "overlay-opened" : "overlay-closed"), t2.arrowNavigation && v(B2), nextTick(() => {
        f !== "" && h3.value[0] && h3.value[0].openChildCmp(f);
      });
    }, re = computed(() => ({
      dp__btn: true,
      dp__button: true,
      dp__button_bottom: t2.autoApply && !t2.keepActionRow
    })), Y2 = pt(m3, "timePicker"), Z = (B2, k2, f) => t2.range ? k2 === 0 ? [B2, F.value[1][f]] : [F.value[0][f], B2] : B2, J = (B2) => {
      a3("update:hours", B2);
    }, te = (B2) => {
      a3("update:minutes", B2);
    }, ie = (B2) => {
      a3("update:seconds", B2);
    }, ye = () => {
      if (Q2.value) {
        const B2 = ll(Q2.value);
        B2 && B2.focus({ preventScroll: true });
      }
    };
    return n({ toggleTimePicker: ne }), (B2, k2) => {
      var f;
      return openBlock(), createElementBlock("div", null, [
        !B2.timePicker && !B2.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: normalizeClass(re.value),
          "aria-label": (f = unref(V).ariaLabels) == null ? void 0 : f.openTimePicker,
          tabindex: "0",
          ref_key: "openTimePickerBtn",
          ref: C,
          onKeydown: [
            k2[0] || (k2[0] = withKeys((I2) => ne(true), ["enter"])),
            k2[1] || (k2[1] = withKeys((I2) => ne(true), ["space"]))
          ],
          onClick: k2[2] || (k2[2] = (I2) => ne(true))
        }, [
          B2.$slots["clock-icon"] ? renderSlot(B2.$slots, "clock-icon", { key: 0 }) : createCommentVNode("", true),
          B2.$slots["clock-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(qn), { key: 1 }))
        ], 42, rr)), [
          [vShow, !unref(P)("time")]
        ]) : createCommentVNode("", true),
        createVNode(Transition, {
          name: unref(S3)(z2.value),
          css: unref(U) && !B2.timePickerInline
        }, {
          default: withCtx(() => {
            var I2;
            return [
              z2.value || B2.timePicker || B2.timePickerInline ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({ dp__overlay: !B2.timePickerInline }),
                ref_key: "overlayRef",
                ref: Q2,
                tabindex: B2.timePickerInline ? void 0 : 0
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(
                    B2.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  B2.$slots["time-picker-overlay"] ? renderSlot(B2.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e2.hours,
                    minutes: e2.minutes,
                    seconds: e2.seconds,
                    setHours: J,
                    setMinutes: te,
                    setSeconds: ie
                  }) : createCommentVNode("", true),
                  B2.$slots["time-picker-overlay"] ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(B2.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(F.value, (O2, p) => withDirectives((openBlock(), createBlock(lr, mergeProps({ key: p }, {
                      ...B2.$props,
                      order: p,
                      hours: O2.hours,
                      minutes: O2.minutes,
                      seconds: O2.seconds,
                      closeTimePickerBtn: d3.value,
                      disabled: p === 0 ? B2.fixedStart : B2.fixedEnd
                    }, {
                      ref_for: true,
                      ref_key: "timeInputRefs",
                      ref: h3,
                      "onUpdate:hours": (N) => J(Z(N, p, "hours")),
                      "onUpdate:minutes": (N) => te(Z(N, p, "minutes")),
                      "onUpdate:seconds": (N) => ie(Z(N, p, "seconds")),
                      onMounted: ye,
                      onOverlayClosed: ye,
                      onAmPmChange: k2[3] || (k2[3] = (N) => B2.$emit("am-pm-change", N))
                    }), createSlots({ _: 2 }, [
                      renderList(unref(Y2), (N, D2) => ({
                        name: N,
                        fn: withCtx((c2) => [
                          renderSlot(B2.$slots, N, normalizeProps(guardReactiveProps(c2)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [vShow, p === 0 ? true : H3.value]
                    ])), 128))
                  ], 2)),
                  !B2.timePicker && !B2.timePickerInline ? withDirectives((openBlock(), createElementBlock("button", {
                    key: 2,
                    type: "button",
                    ref_key: "closeTimePickerBtn",
                    ref: d3,
                    class: normalizeClass(re.value),
                    "aria-label": (I2 = unref(V).ariaLabels) == null ? void 0 : I2.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      k2[4] || (k2[4] = withKeys((O2) => ne(false), ["enter"])),
                      k2[5] || (k2[5] = withKeys((O2) => ne(false), ["space"]))
                    ],
                    onClick: k2[6] || (k2[6] = (O2) => ne(false))
                  }, [
                    B2.$slots["calendar-icon"] ? renderSlot(B2.$slots, "calendar-icon", { key: 0 }) : createCommentVNode("", true),
                    B2.$slots["calendar-icon"] ? createCommentVNode("", true) : (openBlock(), createBlock(unref(jt), { key: 1 }))
                  ], 42, sr)), [
                    [vShow, !unref(P)("time")]
                  ]) : createCommentVNode("", true)
                ], 2)
              ], 10, or)) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
});
var ur = (e2, n) => {
  const { isDisabled: a3, matchDate: t2, getWeekFromDate: i2, defaults: v } = ze(n), m3 = ref(null), P = ref(_()), V = (u2) => {
    !u2.current && n.hideOffsetDates || (m3.value = u2.value);
  }, S3 = () => {
    m3.value = null;
  }, U = (u2) => Array.isArray(e2.value) && n.range && e2.value[0] && m3.value ? u2 ? Ue(m3.value, e2.value[0]) : Ve(m3.value, e2.value[0]) : true, C = (u2, w2) => {
    const A = () => e2.value ? w2 ? e2.value[0] || null : e2.value[1] : null, K2 = e2.value && Array.isArray(e2.value) ? A() : null;
    return pe(_(u2.value), K2);
  }, d3 = (u2) => {
    const w2 = Array.isArray(e2.value) ? e2.value[0] : null;
    return u2 ? !Ve(m3.value || null, w2) : true;
  }, h3 = (u2, w2 = true) => (n.range || n.weekPicker) && Array.isArray(e2.value) && e2.value.length === 2 ? n.hideOffsetDates && !u2.current ? false : pe(_(u2.value), e2.value[w2 ? 0 : 1]) : n.range ? C(u2, w2) && d3(w2) || pe(u2.value, Array.isArray(e2.value) ? e2.value[0] : null) && U(w2) : false, Q2 = (u2, w2, A) => Array.isArray(e2.value) && e2.value[0] && e2.value.length === 1 ? u2 ? false : A ? Ue(e2.value[0], w2.value) : Ve(e2.value[0], w2.value) : false, H3 = (u2) => !e2.value || n.hideOffsetDates && !u2.current ? false : n.range ? n.modelAuto && Array.isArray(e2.value) ? pe(u2.value, e2.value[0] ? e2.value[0] : P.value) : false : n.multiDates && Array.isArray(e2.value) ? e2.value.some((w2) => pe(w2, u2.value)) : pe(u2.value, e2.value ? e2.value : P.value), z2 = (u2) => {
    if (n.autoRange || n.weekPicker) {
      if (m3.value) {
        if (n.hideOffsetDates && !u2.current)
          return false;
        const w2 = addDays(m3.value, +n.autoRange), A = i2(_(m3.value));
        return n.weekPicker ? pe(A[1], _(u2.value)) : pe(w2, _(u2.value));
      }
      return false;
    }
    return false;
  }, E2 = (u2) => {
    if (n.autoRange || n.weekPicker) {
      if (m3.value) {
        const w2 = addDays(m3.value, +n.autoRange);
        if (n.hideOffsetDates && !u2.current)
          return false;
        const A = i2(_(m3.value));
        return n.weekPicker ? Ue(u2.value, A[0]) && Ve(u2.value, A[1]) : Ue(u2.value, m3.value) && Ve(u2.value, w2);
      }
      return false;
    }
    return false;
  }, F = (u2) => {
    if (n.autoRange || n.weekPicker) {
      if (m3.value) {
        if (n.hideOffsetDates && !u2.current)
          return false;
        const w2 = i2(_(m3.value));
        return n.weekPicker ? pe(w2[0], u2.value) : pe(m3.value, u2.value);
      }
      return false;
    }
    return false;
  }, ne = (u2) => Qn(e2.value, m3.value, u2.value), re = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : false, Y2 = () => n.modelAuto ? la(n.internalModelValue) : true, Z = (u2) => {
    if (Array.isArray(e2.value) && e2.value.length || n.weekPicker)
      return false;
    const w2 = n.range ? !h3(u2) && !h3(u2, false) : true;
    return !a3(u2.value) && !H3(u2) && !(!u2.current && n.hideOffsetDates) && w2;
  }, J = (u2) => n.range ? n.modelAuto ? re() && H3(u2) : false : H3(u2), te = (u2) => {
    var w2;
    return n.highlight ? t2(
      u2.value,
      (w2 = n.arrMapValues) != null && w2.highlightedDates ? n.arrMapValues.highlightedDates : n.highlight
    ) : false;
  }, ie = (u2) => a3(u2.value) && n.highlightDisabledDays === false, ye = (u2) => n.highlightWeekDays && n.highlightWeekDays.includes(u2.value.getDay()), B2 = (u2) => (n.range || n.weekPicker) && (!(v.value.multiCalendars > 0) || u2.current) && Y2() && !(!u2.current && n.hideOffsetDates) && !H3(u2) ? ne(u2) : false, k2 = (u2) => {
    const { isRangeStart: w2, isRangeEnd: A } = O2(u2), K2 = n.range ? w2 || A : false;
    return {
      dp__cell_offset: !u2.current,
      dp__pointer: !n.disabled && !(!u2.current && n.hideOffsetDates) && !a3(u2.value),
      dp__cell_disabled: a3(u2.value),
      dp__cell_highlight: !ie(u2) && (te(u2) || ye(u2)) && !J(u2) && !K2,
      dp__cell_highlight_active: !ie(u2) && (te(u2) || ye(u2)) && J(u2),
      dp__today: !n.noToday && pe(u2.value, P.value) && u2.current
    };
  }, f = (u2) => ({
    dp__active_date: J(u2),
    dp__date_hover: Z(u2)
  }), I2 = (u2) => ({
    ...p(u2),
    ...N(u2),
    dp__range_between_week: B2(u2) && n.weekPicker
  }), O2 = (u2) => {
    const w2 = v.value.multiCalendars > 0 ? u2.current && h3(u2) && Y2() : h3(u2) && Y2(), A = v.value.multiCalendars > 0 ? u2.current && h3(u2, false) && Y2() : h3(u2, false) && Y2();
    return { isRangeStart: w2, isRangeEnd: A };
  }, p = (u2) => {
    const { isRangeStart: w2, isRangeEnd: A } = O2(u2);
    return {
      dp__range_start: w2,
      dp__range_end: A,
      dp__range_between: B2(u2) && !n.weekPicker,
      dp__date_hover_start: Q2(Z(u2), u2, true),
      dp__date_hover_end: Q2(Z(u2), u2, false)
    };
  }, N = (u2) => ({
    ...p(u2),
    dp__cell_auto_range: E2(u2),
    dp__cell_auto_range_start: F(u2),
    dp__cell_auto_range_end: z2(u2)
  }), D2 = (u2) => n.range ? n.autoRange ? N(u2) : n.modelAuto ? { ...f(u2), ...p(u2) } : p(u2) : n.weekPicker ? I2(u2) : f(u2);
  return {
    setHoverDate: V,
    clearHoverDate: S3,
    getDayClassData: (u2) => n.hideOffsetDates && !u2.current ? {} : {
      ...k2(u2),
      ...D2(u2),
      [n.dayClass ? n.dayClass(u2.value) : ""]: true,
      [n.calendarCellClassName]: !!n.calendarCellClassName
    }
  };
};
var dr = ["id", "onKeydown"];
var cr = {
  key: 0,
  class: "dp__sidebar_left"
};
var fr = {
  key: 1,
  class: "dp__preset_ranges"
};
var vr = ["onClick"];
var mr = {
  key: 2,
  class: "dp__sidebar_right"
};
var yr = {
  key: 3,
  class: "dp__action_extra"
};
var gr = defineComponent({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: false },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    ...ct
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, i2 = computed(() => {
      const { openOnTop: g, internalModelValue: W, arrMapValues: $e, ...Me } = t2;
      return Me;
    }), { setMenuFocused: v, setShiftKey: m3, control: P } = ea(), { getCalendarDays: V, defaults: S3 } = ze(t2), U = useSlots(), C = ref(null), d3 = reactive({
      timePicker: !!(!t2.enableTimePicker || t2.timePicker || t2.monthPicker),
      monthYearInput: !!t2.timePicker,
      calendar: false
    }), h3 = ref([]), Q2 = ref([]), H3 = ref(null), z2 = ref(null), E2 = ref(0), F = ref(false), ne = ref(0);
    onMounted(() => {
      var W;
      F.value = true, !((W = t2.presetRanges) != null && W.length) && !U["left-sidebar"] && !U["right-sidebar"] && (Ee(), window.addEventListener("resize", Ee));
      const g = _e(z2);
      if (g && !t2.textInput && !t2.inline && (v(true), ie()), g) {
        const $e = (Me) => {
          t2.allowPreventDefault && Me.preventDefault(), Me.stopImmediatePropagation(), Me.stopPropagation();
        };
        g.addEventListener("pointerdown", $e), g.addEventListener("mousedown", $e);
      }
    }), onUnmounted(() => {
      window.removeEventListener("resize", Ee);
    });
    const { arrowRight: re, arrowLeft: Y2, arrowDown: Z, arrowUp: J } = dt(), te = (g) => {
      g || g === 0 ? Q2.value[g].triggerTransition(
        I2.value(g),
        O2.value(g)
      ) : Q2.value.forEach(
        (W, $e) => W.triggerTransition(I2.value($e), O2.value($e))
      );
    }, ie = () => {
      const g = _e(z2);
      g && g.focus({ preventScroll: true });
    }, ye = () => {
      var g;
      (g = t2.flow) != null && g.length && ne.value !== -1 && (ne.value += 1, a3("flow-step", ne.value), b2());
    }, B2 = () => {
      ne.value = -1;
    }, {
      calendars: k2,
      modelValue: f,
      month: I2,
      year: O2,
      time: p,
      updateTime: N,
      updateMonthYear: D2,
      selectDate: c2,
      getWeekNum: u2,
      monthYearSelect: w2,
      handleScroll: A,
      handleArrow: K2,
      handleSwipe: s3,
      getMarker: r,
      selectCurrentDate: l,
      presetDateRange: M3
    } = fl(t2, a3, ye, te, ne), { setHoverDate: oe, clearHoverDate: ue, getDayClassData: Se } = ur(f, t2), ee = {
      modelValue: f,
      month: I2,
      year: O2,
      time: p,
      updateTime: N,
      updateMonthYear: D2,
      selectDate: c2,
      presetDateRange: M3,
      handleMonthYearChange: (g) => {
        h3.value[0] && h3.value[0].handleMonthYearChange(g);
      }
    };
    watch(
      k2,
      () => {
        t2.openOnTop && setTimeout(() => {
          a3("recalculate-position");
        }, 0);
      },
      { deep: true }
    );
    const We = pt(U, "calendar"), Ie = pt(U, "action"), Ae = pt(U, "timePicker"), Xe = pt(U, "monthYear"), ft = computed(() => t2.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), tt = computed(() => Qa(t2.yearRange, t2.reverseYears)), bt = computed(() => el(t2.locale, t2.monthNameFormat)), Ee = () => {
      const g = _e(C);
      g && (E2.value = g.getBoundingClientRect().width);
    }, j = computed(() => (g) => V(I2.value(g), O2.value(g))), se = computed(
      () => S3.value.multiCalendars > 0 ? [...Array(S3.value.multiCalendars).keys()] : [0]
    ), de = computed(
      () => (g) => g === 1
    ), _t = computed(() => t2.monthPicker || t2.timePicker || t2.yearPicker), vt = computed(
      () => ({
        dp__menu_inner: true,
        dp__flex_display: S3.value.multiCalendars > 0
      })
    ), Yt = computed(() => ({
      dp__instance_calendar: S3.value.multiCalendars > 0
    })), At = computed(() => ({
      dp__menu_disabled: t2.disabled,
      dp__menu_readonly: t2.readonly
    })), Gt = computed(
      () => (g) => qt(j, g)
    ), Zt = computed(
      () => ({
        dp__menu: true,
        dp__menu_index: !t2.inline,
        dp__relative: t2.inline,
        [t2.menuClassName]: !!t2.menuClassName
      })
    ), qt = (g, W) => g.value(W).map(($e) => ({
      ...$e,
      days: $e.days.map((Me) => (Me.marker = r(Me), Me.classData = Se(Me), Me))
    })), Vt = (g) => {
      g.stopPropagation(), g.stopImmediatePropagation();
    }, $n = () => {
      t2.escClose && a3("close-picker");
    }, Mn = (g, W = false) => {
      c2(g, W), t2.spaceConfirm && a3("select-date");
    }, Et = (g) => {
      var W;
      (W = t2.flow) != null && W.length && (d3[g] = true, Object.keys(d3).filter(($e) => !d3[$e]).length || b2());
    }, o = (g, W, $e, Me, ...Qe) => {
      if (t2.flow[ne.value] === g) {
        const X2 = Me ? W.value[0] : W.value;
        X2 && X2[$e](...Qe);
      }
    }, b2 = () => {
      o("month", h3, "toggleMonthPicker", true, true), o("year", h3, "toggleYearPicker", true, true), o("calendar", H3, "toggleTimePicker", false, false, true), o("time", H3, "toggleTimePicker", false, true, true);
      const g = t2.flow[ne.value];
      (g === "hours" || g === "minutes" || g === "seconds") && o(g, H3, "toggleTimePicker", false, true, true, g);
    }, q2 = (g) => {
      if (t2.arrowNavigation) {
        if (g === "up")
          return J();
        if (g === "down")
          return Z();
        if (g === "left")
          return Y2();
        if (g === "right")
          return re();
      } else
        g === "left" || g === "up" ? K2("left", 0, g === "up") : K2("right", 0, g === "down");
    }, le = (g) => {
      m3(g.shiftKey), !t2.disableMonthYearSelect && g.code === "Tab" && g.target.classList.contains("dp__menu") && P.value.shiftKeyInMenu && (g.preventDefault(), g.stopImmediatePropagation(), a3("close-picker"));
    }, De = () => {
      ie(), a3("time-picker-close");
    }, Je = (g) => {
      var W, $e, Me, Qe, X2;
      (W = H3.value) == null || W.toggleTimePicker(false, false), (Me = ($e = h3.value) == null ? void 0 : $e[g]) == null || Me.toggleMonthPicker(false, false), (X2 = (Qe = h3.value) == null ? void 0 : Qe[g]) == null || X2.toggleYearPicker(false, false);
    };
    return n({
      updateMonthYear: D2,
      switchView: (g, W = 0) => {
        var $e, Me, Qe, X2, nt;
        return g === "month" ? (Me = ($e = h3.value) == null ? void 0 : $e[W]) == null ? void 0 : Me.toggleMonthPicker(false, true) : g === "year" ? (X2 = (Qe = h3.value) == null ? void 0 : Qe[W]) == null ? void 0 : X2.toggleYearPicker(false, true) : g === "time" ? (nt = H3.value) == null ? void 0 : nt.toggleTimePicker(true, false) : Je(W);
      }
    }), (g, W) => {
      var $e;
      return openBlock(), createBlock(Transition, {
        appear: "",
        name: ($e = unref(S3).transitions) == null ? void 0 : $e.menuAppear,
        css: !!g.transitions
      }, {
        default: withCtx(() => {
          var Me, Qe;
          return [
            createBaseVNode("div", {
              id: g.uid ? `dp-menu-${g.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: z2,
              role: "dialog",
              class: normalizeClass(Zt.value),
              onMouseleave: W[14] || (W[14] = //@ts-ignore
              (...X2) => unref(ue) && unref(ue)(...X2)),
              onClick: Vt,
              onKeydown: [
                withKeys($n, ["esc"]),
                W[15] || (W[15] = withKeys(withModifiers((X2) => q2("left"), ["prevent"]), ["left"])),
                W[16] || (W[16] = withKeys(withModifiers((X2) => q2("up"), ["prevent"]), ["up"])),
                W[17] || (W[17] = withKeys(withModifiers((X2) => q2("down"), ["prevent"]), ["down"])),
                W[18] || (W[18] = withKeys(withModifiers((X2) => q2("right"), ["prevent"]), ["right"])),
                le
              ]
            }, [
              (g.disabled || g.readonly) && g.inline ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(At.value)
              }, null, 2)) : createCommentVNode("", true),
              !g.inline && !g.teleportCenter ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(ft.value)
              }, null, 2)) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass({
                  dp__menu_content_wrapper: ((Me = g.presetRanges) == null ? void 0 : Me.length) || !!g.$slots["left-sidebar"] || !!g.$slots["right-sidebar"]
                })
              }, [
                g.$slots["left-sidebar"] ? (openBlock(), createElementBlock("div", cr, [
                  renderSlot(g.$slots, "left-sidebar", normalizeProps(guardReactiveProps(ee)))
                ])) : createCommentVNode("", true),
                (Qe = g.presetRanges) != null && Qe.length ? (openBlock(), createElementBlock("div", fr, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(g.presetRanges, (X2, nt) => (openBlock(), createElementBlock("div", {
                    key: nt,
                    style: normalizeStyle(X2.style || {}),
                    class: "dp__preset_range",
                    onClick: (ve) => unref(M3)(X2.range, !!X2.slot)
                  }, [
                    X2.slot ? renderSlot(g.$slots, X2.slot, {
                      key: 0,
                      presetDateRange: unref(M3),
                      label: X2.label,
                      range: X2.range
                    }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(X2.label), 1)
                    ], 64))
                  ], 12, vr))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: C,
                  role: "document"
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(vt.value)
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(se.value, (X2, nt) => (openBlock(), createElementBlock("div", {
                      key: X2,
                      class: normalizeClass(Yt.value)
                    }, [
                      !g.disableMonthYearSelect && !g.timePicker ? (openBlock(), createBlock(Kl, mergeProps({
                        key: 0,
                        ref_for: true,
                        ref: (ve) => {
                          ve && (h3.value[nt] = ve);
                        },
                        months: bt.value,
                        years: tt.value,
                        month: unref(I2)(X2),
                        year: unref(O2)(X2),
                        instance: X2,
                        "internal-model-value": e2.internalModelValue
                      }, i2.value, {
                        onMount: W[0] || (W[0] = (ve) => Et("monthYearInput")),
                        onResetFlow: B2,
                        onUpdateMonthYear: (ve) => unref(D2)(X2, ve),
                        onMonthYearSelect: unref(w2),
                        onOverlayClosed: ie
                      }), createSlots({ _: 2 }, [
                        renderList(unref(Xe), (ve, oa) => ({
                          name: ve,
                          fn: withCtx((Xt) => [
                            renderSlot(g.$slots, ve, normalizeProps(guardReactiveProps(Xt)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : createCommentVNode("", true),
                      createVNode(Bl, mergeProps({
                        ref_for: true,
                        ref: (ve) => {
                          ve && (Q2.value[nt] = ve);
                        },
                        "specific-mode": _t.value,
                        "get-week-num": unref(u2),
                        instance: X2,
                        "mapped-dates": Gt.value(X2),
                        month: unref(I2)(X2),
                        year: unref(O2)(X2)
                      }, i2.value, {
                        onSelectDate: (ve) => unref(c2)(ve, !de.value(X2)),
                        onHandleSpace: (ve) => Mn(ve, !de.value(X2)),
                        onSetHoverDate: W[1] || (W[1] = (ve) => unref(oe)(ve)),
                        onHandleScroll: (ve) => unref(A)(ve, X2),
                        onHandleSwipe: (ve) => unref(s3)(ve, X2),
                        onMount: W[2] || (W[2] = (ve) => Et("calendar")),
                        onResetFlow: B2,
                        onTooltipOpen: W[3] || (W[3] = (ve) => g.$emit("tooltip-open", ve)),
                        onTooltipClose: W[4] || (W[4] = (ve) => g.$emit("tooltip-close", ve))
                      }), createSlots({ _: 2 }, [
                        renderList(unref(We), (ve, oa) => ({
                          name: ve,
                          fn: withCtx((Xt) => [
                            renderSlot(g.$slots, ve, normalizeProps(guardReactiveProps({ ...Xt })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  createBaseVNode("div", null, [
                    g.$slots["time-picker"] ? renderSlot(g.$slots, "time-picker", normalizeProps(mergeProps({ key: 0 }, { time: unref(p), updateTime: unref(N) }))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      g.enableTimePicker && !g.monthPicker && !g.weekPicker ? (openBlock(), createBlock(ir, mergeProps({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: H3,
                        hours: unref(p).hours,
                        minutes: unref(p).minutes,
                        seconds: unref(p).seconds,
                        "internal-model-value": e2.internalModelValue
                      }, i2.value, {
                        onMount: W[5] || (W[5] = (X2) => Et("timePicker")),
                        "onUpdate:hours": W[6] || (W[6] = (X2) => unref(N)(X2)),
                        "onUpdate:minutes": W[7] || (W[7] = (X2) => unref(N)(X2, false)),
                        "onUpdate:seconds": W[8] || (W[8] = (X2) => unref(N)(X2, false, true)),
                        onResetFlow: B2,
                        onOverlayClosed: De,
                        onOverlayOpened: W[9] || (W[9] = (X2) => g.$emit("time-picker-open", X2)),
                        onAmPmChange: W[10] || (W[10] = (X2) => g.$emit("am-pm-change", X2))
                      }), createSlots({ _: 2 }, [
                        renderList(unref(Ae), (X2, nt) => ({
                          name: X2,
                          fn: withCtx((ve) => [
                            renderSlot(g.$slots, X2, normalizeProps(guardReactiveProps(ve)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : createCommentVNode("", true)
                    ], 64))
                  ])
                ], 512),
                g.$slots["right-sidebar"] ? (openBlock(), createElementBlock("div", mr, [
                  renderSlot(g.$slots, "right-sidebar", normalizeProps(guardReactiveProps(ee)))
                ])) : createCommentVNode("", true),
                g.$slots["action-extra"] ? (openBlock(), createElementBlock("div", yr, [
                  g.$slots["action-extra"] ? renderSlot(g.$slots, "action-extra", {
                    key: 0,
                    selectCurrentDate: unref(l)
                  }) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ], 2),
              !g.autoApply || g.keepActionRow ? (openBlock(), createBlock(Al, mergeProps({
                key: 2,
                "menu-mount": F.value,
                "calendar-width": E2.value,
                "internal-model-value": e2.internalModelValue
              }, i2.value, {
                onClosePicker: W[11] || (W[11] = (X2) => g.$emit("close-picker")),
                onSelectDate: W[12] || (W[12] = (X2) => g.$emit("select-date")),
                onInvalidSelect: W[13] || (W[13] = (X2) => g.$emit("invalid-select")),
                onSelectNow: unref(l)
              }), createSlots({ _: 2 }, [
                renderList(unref(Ie), (X2, nt) => ({
                  name: X2,
                  fn: withCtx((ve) => [
                    renderSlot(g.$slots, X2, normalizeProps(guardReactiveProps({ ...ve })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value", "onSelectNow"])) : createCommentVNode("", true)
            ], 42, dr)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
});
var hr = typeof window < "u" ? window : void 0;
var un = () => {
};
var pr = (e2) => getCurrentScope() ? (onScopeDispose(e2), true) : false;
var kr = (e2, n, a3, t2) => {
  if (!e2)
    return un;
  let i2 = un;
  const v = watch(
    () => unref(e2),
    (P) => {
      i2(), P && (P.addEventListener(n, a3, t2), i2 = () => {
        P.removeEventListener(n, a3, t2), i2 = un;
      });
    },
    { immediate: true, flush: "post" }
  ), m3 = () => {
    v(), i2();
  };
  return pr(m3), m3;
};
var br = (e2, n, a3, t2 = {}) => {
  const { window: i2 = hr, event: v = "pointerdown" } = t2;
  return i2 ? kr(i2, v, (P) => {
    const V = _e(e2), S3 = _e(n);
    !V || !S3 || V === P.target || P.composedPath().includes(V) || P.composedPath().includes(S3) || a3(P);
  }, { passive: true }) : void 0;
};
var wr = defineComponent({
  __name: "VueDatePicker",
  props: {
    ...ct
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end"
  ],
  setup(e2, { expose: n, emit: a3 }) {
    const t2 = e2, i2 = useSlots(), v = ref(false), m3 = toRef(t2, "modelValue"), P = toRef(t2, "timezone"), V = ref(null), S3 = ref(null), U = ref(false), C = ref(null), d3 = reactive({
      disabledDates: null,
      allowedDates: null,
      highlightedDates: null
    }), { setMenuFocused: h3, setShiftKey: Q2 } = ea(), { clearArrowNav: H3 } = dt(), { validateDate: z2, isValidTime: E2, defaults: F, mapDatesArrToMap: ne } = ze(t2);
    onMounted(() => {
      I2(t2.modelValue), t2.inline || (B2(C.value).addEventListener("scroll", w2), window.addEventListener("resize", A)), t2.inline && (v.value = true), ne(d3);
    }), onUnmounted(() => {
      if (!t2.inline) {
        const j = B2(C.value);
        j && j.removeEventListener("scroll", w2), window.removeEventListener("resize", A);
      }
    });
    const re = pt(i2, "all", t2.presetRanges), Y2 = pt(i2, "input");
    watch(
      [m3, P],
      () => {
        I2(m3.value);
      },
      { deep: true }
    );
    const { openOnTop: Z, menuStyle: J, resetPosition: te, setMenuPosition: ie, setInitialPosition: ye, getScrollableParent: B2 } = yl(V, S3, a3, t2), {
      inputValue: k2,
      internalModelValue: f,
      parseExternalModelValue: I2,
      emitModelValue: O2,
      formatInputValue: p,
      checkBeforeEmit: N
    } = vl(a3, t2, U), D2 = computed(
      () => ({
        dp__main: true,
        dp__theme_dark: t2.dark,
        dp__theme_light: !t2.dark,
        dp__flex_display: t2.inline,
        dp__flex_display_with_input: t2.inlineWithInput
      })
    ), c2 = computed(() => t2.dark ? "dp__theme_dark" : "dp__theme_light"), u2 = computed(() => t2.teleport ? {
      to: typeof t2.teleport == "boolean" ? "body" : t2.teleport,
      disabled: t2.inline
    } : { class: "dp__outer_menu_wrap" }), w2 = () => {
      v.value && (t2.closeOnScroll ? Te() : ie());
    }, A = () => {
      v.value && ie();
    }, K2 = async () => {
      var j, se, de;
      !t2.disabled && !t2.readonly && (te(), await nextTick(), v.value = true, await nextTick(), ye(), await nextTick(), ie(), delete J.value.opacity, (j = F.value.transitions) != null && j.menuAppear || (de = (se = V.value) == null ? void 0 : se.$el) == null || de.classList.add("dp__menu_transitioned"), v.value && a3("open"), v.value || Se(), I2(t2.modelValue));
    }, s3 = () => {
      k2.value = "", Se(), a3("update:model-value", null), a3("cleared"), t2.closeOnClearValue && Te();
    }, r = () => {
      const j = f.value;
      return !j || !Array.isArray(j) && z2(j) ? true : Array.isArray(j) ? j.length === 2 && z2(j[0]) && z2(j[1]) ? true : z2(j[0]) : false;
    }, l = () => {
      N() && r() ? (O2(), Te()) : a3("invalid-select", f.value);
    }, M3 = (j) => {
      oe(), O2(), t2.closeOnAutoApply && !j && Te();
    }, oe = () => {
      S3.value && t2.textInput && S3.value.setParsedDate(f.value);
    }, ue = (j = false) => {
      t2.autoApply && E2(f.value) && r() && (t2.range && Array.isArray(f.value) ? (t2.partialRange || f.value.length === 2) && M3(j) : M3(j));
    }, Se = () => {
      t2.textInput || (f.value = null);
    }, Te = () => {
      t2.inline || (v.value && (v.value = false, h3(false), Q2(false), H3(), a3("closed"), ye(), k2.value && I2(m3.value)), Se());
    }, ee = (j, se) => {
      if (!j) {
        f.value = null;
        return;
      }
      f.value = j, se && (l(), a3("text-submit"));
    }, We = () => {
      t2.autoApply && E2(f.value) && O2(), oe();
    }, Ie = () => v.value ? Te() : K2(), Ae = (j) => {
      f.value = j;
    }, Xe = () => {
      t2.textInput && (U.value = true, p()), a3("focus");
    }, ft = () => {
      t2.textInput && (U.value = false, I2(t2.modelValue)), a3("blur");
    }, tt = (j) => {
      V.value && V.value.updateMonthYear(0, {
        month: Ln(j.month),
        year: Ln(j.year)
      });
    }, bt = (j) => {
      I2(j || t2.modelValue);
    }, Ee = (j, se) => {
      var de;
      (de = V.value) == null || de.switchView(j, se);
    };
    return br(
      V,
      S3,
      t2.onClickOutside ? () => t2.onClickOutside(r) : Te
    ), n({
      closeMenu: Te,
      selectDate: l,
      clearValue: s3,
      openMenu: K2,
      onScroll: w2,
      formatInputValue: p,
      // exposed for testing purposes
      updateInternalModelValue: Ae,
      // modify internal modelValue
      setMonthYear: tt,
      parseModel: bt,
      switchView: Ee
    }), (j, se) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(D2.value),
      ref_key: "pickerWrapperRef",
      ref: C
    }, [
      createVNode(Dl, mergeProps({
        ref_key: "inputRef",
        ref: S3,
        "is-menu-open": v.value,
        "input-value": unref(k2),
        "onUpdate:inputValue": se[0] || (se[0] = (de) => isRef(k2) ? k2.value = de : null)
      }, j.$props, {
        onClear: s3,
        onOpen: K2,
        onSetInputDate: ee,
        onSetEmptyDate: unref(O2),
        onSelectDate: l,
        onToggle: Ie,
        onClose: Te,
        onFocus: Xe,
        onBlur: ft,
        onRealBlur: se[1] || (se[1] = (de) => U.value = false)
      }), createSlots({ _: 2 }, [
        renderList(unref(Y2), (de, _t) => ({
          name: de,
          fn: withCtx((vt) => [
            renderSlot(j.$slots, de, normalizeProps(guardReactiveProps(vt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      v.value ? (openBlock(), createBlock(resolveDynamicComponent(j.teleport ? Teleport : "div"), normalizeProps(mergeProps({ key: 0 }, u2.value)), {
        default: withCtx(() => [
          v.value ? (openBlock(), createBlock(gr, mergeProps({
            key: 0,
            ref_key: "dpMenuRef",
            ref: V,
            class: c2.value,
            style: j.inline ? void 0 : unref(J),
            "open-on-top": unref(Z),
            "arr-map-values": d3
          }, j.$props, {
            "internal-model-value": unref(f),
            "onUpdate:internalModelValue": se[2] || (se[2] = (de) => isRef(f) ? f.value = de : null),
            onClosePicker: Te,
            onSelectDate: l,
            onAutoApply: ue,
            onTimeUpdate: We,
            onFlowStep: se[3] || (se[3] = (de) => j.$emit("flow-step", de)),
            onUpdateMonthYear: se[4] || (se[4] = (de) => j.$emit("update-month-year", de)),
            onInvalidSelect: se[5] || (se[5] = (de) => j.$emit("invalid-select", unref(f))),
            onInvalidFixedRange: se[6] || (se[6] = (de) => j.$emit("invalid-fixed-range", de)),
            onRecalculatePosition: unref(ie),
            onTooltipOpen: se[7] || (se[7] = (de) => j.$emit("tooltip-open", de)),
            onTooltipClose: se[8] || (se[8] = (de) => j.$emit("tooltip-close", de)),
            onTimePickerOpen: se[9] || (se[9] = (de) => j.$emit("time-picker-open", de)),
            onTimePickerClose: se[10] || (se[10] = (de) => j.$emit("time-picker-close", de)),
            onAmPmChange: se[11] || (se[11] = (de) => j.$emit("am-pm-change", de)),
            onRangeStart: se[12] || (se[12] = (de) => j.$emit("range-start", de)),
            onRangeEnd: se[13] || (se[13] = (de) => j.$emit("range-end", de))
          }), createSlots({ _: 2 }, [
            renderList(unref(re), (de, _t) => ({
              name: de,
              fn: withCtx((vt) => [
                renderSlot(j.$slots, de, normalizeProps(guardReactiveProps({ ...vt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "arr-map-values", "internal-model-value", "onRecalculatePosition"])) : createCommentVNode("", true)
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true)
    ], 2));
  }
});
var ra = (() => {
  const e2 = wr;
  return e2.install = (n) => {
    n.component("Vue3DatePicker", e2);
  }, e2;
})();
var Dr = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: ra
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Dr).forEach(([e2, n]) => {
  e2 !== "default" && (ra[e2] = n);
});
export {
  ra as default
};
//# sourceMappingURL=@vuepic_vue-datepicker.js.map
