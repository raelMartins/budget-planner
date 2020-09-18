/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bootstrap/bootstrap-4.4.1-dist/css/bootstrap.min.css":
/*!******************************************************************!*\
  !*** ./src/bootstrap/bootstrap-4.4.1-dist/css/bootstrap.min.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/bootstrap/bootstrap-4.4.1-dist/css/bootstrap.min.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap_bootstrap_4_4_1_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap/bootstrap-4.4.1-dist/css/bootstrap.min.css */ \"./src/bootstrap/bootstrap-4.4.1-dist/css/bootstrap.min.css\");\n/* harmony import */ var _bootstrap_bootstrap_4_4_1_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_bootstrap_4_4_1_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_Monthly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Monthly */ \"./src/js/models/Monthly.js\");\n/* harmony import */ var _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/monthlyView */ \"./src/js/views/monthlyView.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n\n\n\n\n //set up the projects event listeners\n\nvar setupEventListeners = function setupEventListeners() {\n  //Event listener for adding an item\n  document.querySelector(_views_base__WEBPACK_IMPORTED_MODULE_4__[\"DOMstrings\"].inputBtn).addEventListener('click', ctrlAddItem); //Event listener for adding an item by selecting enter\n\n  document.addEventListener('keypress', function (e) {\n    if (e.keyCode === 13 || e.which === 13) {\n      ctrlAddItem();\n    }\n  }); //Event listener for deleting an item(using event delegation)\n\n  document.querySelector(_views_base__WEBPACK_IMPORTED_MODULE_4__[\"DOMstrings\"].container).addEventListener('click', ctrlDeleteItem); //Event listener for changing type from income to expense and vice versa\n\n  document.querySelector(_views_base__WEBPACK_IMPORTED_MODULE_4__[\"DOMstrings\"].inputType).addEventListener('change', _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"changedType\"]); //Add event listener for changing the current page\n\n  document.querySelector('.goto-page').addEventListener('click', function (el) {\n    console.log('A page button was clicked');\n  });\n}; //Fnction to display the appropriate page\n\n\nvar displayPage = function displayPage(id) {//On start up display the monthly budget which is between the daily and stats\n  //check the id of the \"bottom\" class in the dom\n}; //Function to update the budget\n\n\nvar updateBudget = function updateBudget() {\n  //calculate Budget\n  _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"calculateBudget\"](); //return the budget\n\n  var budget = _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"getBudget\"](); //display budget on UI\n\n  _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"displayBudget\"](budget);\n}; //function to calculate the percentages\n\n\nvar updatePercentages = function updatePercentages() {\n  //calculate percentages\n  _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"calculatePercentages\"](); //read them from budget ctrl\n\n  var percentages = _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"getPercentages\"](); //update the UI with the new percentages\n\n  _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"displayPercentages\"](percentages);\n}; //function to add an item to the Ui\n\n\nvar ctrlAddItem = function ctrlAddItem() {\n  //Get input data\n  var input = _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"getInput\"](); //Check if the description box isn't empty and that the value is not a number and is greater than 0\n\n  if (input.description !== \"\" && !isNaN(input.value) && input.value > 0) {\n    //Add item to budget controller\n    var newItem = _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"addItem\"](input.type, input.description, input.value); //add item to UI\n\n    _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"addListItem\"](newItem, input.type); //Clear fields\n\n    _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"clearFields\"](); //calculate and update the Budget\n\n    updateBudget(); //calculate and update the percentages\n\n    updatePercentages();\n  }\n};\n\nvar ctrlDeleteItem = function ctrlDeleteItem(event) {\n  //get the id of the item being selected\n  var itemID = event.target.parentNode.parentNode.parentNode.id; //if the item has an id\n\n  if (itemID) {\n    //separate the item string (ie 'inc' or 'exp') from the value ie 1, 2, 3 ... etc\n    var splitID = itemID.split('-'); //set the item type to the string value\n\n    var type = splitID[0]; //set the id to the integer part\n\n    var ID = parseInt(splitID[1]); //delete item from data structure\n\n    _models_Monthly__WEBPACK_IMPORTED_MODULE_2__[\"deleteItem\"](type, ID); //delete item from ui\n\n    _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"deleteListItem\"](itemID); //update and show the new budget\n\n    updateBudget(); //calculate and update the percentages\n\n    updatePercentages();\n  }\n}; //This is the initial value of the entire thing... when i'm done adding local storage there will be a \"Reset\" button in the stats page that calls it\n\n\nvar init = function init() {\n  console.log('Application has started afresh');\n  _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"displayMonth\"]();\n  _views_monthlyView__WEBPACK_IMPORTED_MODULE_3__[\"displayBudget\"]({\n    budget: 0,\n    totalInc: 0,\n    totalExp: 0,\n    percentage: -1\n  });\n  setupEventListeners();\n};\n\ninit(); //DAILY CONTROLLER\n//MONTHLY CONTROLLER\n//STATS CONTROLLER\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Budget.js":
/*!*********************************!*\
  !*** ./src/js/models/Budget.js ***!
  \*********************************/
/*! exports provided: Expense, Income */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Expense\", function() { return Expense; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Income\", function() { return Income; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Expense = /*#__PURE__*/function () {\n  function Expense(id, description, value) {\n    _classCallCheck(this, Expense);\n\n    this.id = id;\n    this.description = description;\n    this.value = value;\n    this.percentage = -1;\n  } //create an expense method for calculating the expense percentage\n\n\n  _createClass(Expense, [{\n    key: \"calcPercentage\",\n    value: function calcPercentage(totalIncome) {\n      if (totalIncome > 0) {\n        this.percentage = Math.round(this.value / totalIncome * 100);\n      } else {\n        this.percentage = -1;\n      }\n    } //create a method for returning the percentage\n\n  }, {\n    key: \"getPercentage\",\n    value: function getPercentage() {\n      return this.percentage;\n    }\n  }]);\n\n  return Expense;\n}();\nvar Income = function Income(id, description, value) {\n  _classCallCheck(this, Income);\n\n  this.id = id;\n  this.description = description;\n  this.value = value;\n};\n\n//# sourceURL=webpack:///./src/js/models/Budget.js?");

/***/ }),

/***/ "./src/js/models/Monthly.js":
/*!**********************************!*\
  !*** ./src/js/models/Monthly.js ***!
  \**********************************/
/*! exports provided: addItem, deleteItem, calculateBudget, calculatePercentages, getBudget, getPercentages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addItem\", function() { return addItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateBudget\", function() { return calculateBudget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePercentages\", function() { return calculatePercentages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBudget\", function() { return getBudget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentages\", function() { return getPercentages; });\n/* harmony import */ var _Budget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Budget */ \"./src/js/models/Budget.js\");\n//import the expense and income classe \n //create a data object\n\nvar data = {\n  allItems: {\n    //create two \"range\" objects..one for daily and one for monthly then have \"exp\" and \"inc\" arrays in both\n    exp: [],\n    inc: []\n  },\n  totals: {\n    //create two \"range\" objects..one for daily and one for monthly then have \"exp\" and \"inc\" values in both\n    exp: 0,\n    inc: 0\n  },\n  budget: 0,\n  percentage: -1\n};\n\nvar calculateTotal = function calculateTotal(type) {\n  var sum = 0;\n  data.allItems[type].forEach(function (el) {\n    return sum += el.value;\n  });\n  data.totals[type] = sum;\n};\n\nvar addItem = function addItem(type, des, val) {\n  var newItem, ID; //create a new ID\n\n  if (data.allItems[type].length > 0) {\n    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;\n  } else {\n    ID = 0;\n  } //Create a new Item based on whether type is 'inc' or 'exp'\n\n\n  if (type === 'exp') {\n    newItem = new _Budget__WEBPACK_IMPORTED_MODULE_0__[\"Expense\"](ID, des, val);\n  } else if (type === 'inc') {\n    newItem = new _Budget__WEBPACK_IMPORTED_MODULE_0__[\"Income\"](ID, des, val);\n  } //Push the item into our data structure\n\n\n  data.allItems[type].push(newItem); //Return the new item\n\n  return newItem;\n};\nvar deleteItem = function deleteItem(type, id) {\n  var ids = data.allItems[type].map(function (el) {\n    return el.id;\n  });\n  var index = ids.indexOf(id);\n\n  if (index !== -1) {\n    data.allItems[type].splice(index, 1);\n  }\n};\nvar calculateBudget = function calculateBudget() {\n  //calc total income and expenses\n  calculateTotal('exp');\n  calculateTotal('inc'); //calc budget which is income - expenses\n\n  data.budget = data.totals.inc - data.totals.exp; //calc the percentage o income spent\n\n  if (data.totals.inc > 0) {\n    data.percentage = Math.round(data.totals.exp / data.totals.inc * 100);\n  } else {\n    data.percentage = -1;\n  }\n};\nvar calculatePercentages = function calculatePercentages() {\n  data.allItems.exp.forEach(function (el) {\n    el.calcPercentage(data.totals.inc);\n  });\n};\nvar getBudget = function getBudget() {\n  return {\n    budget: data.budget,\n    totalInc: data.totals.inc,\n    totalExp: data.totals.exp,\n    percentage: data.percentage\n  };\n};\nvar getPercentages = function getPercentages() {\n  var allPerc = data.allItems.exp.map(function (el) {\n    return el.getPercentage();\n  });\n  return allPerc;\n};\n\n//# sourceURL=webpack:///./src/js/models/Monthly.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/*! exports provided: DOMstrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstrings\", function() { return DOMstrings; });\nvar DOMstrings = {\n  inputType: '.add__type',\n  inputDescription: '.add__description',\n  inputValue: '.add__value',\n  inputBtn: '.add__btn',\n  incomeContainer: '.income__list',\n  expensesContainer: '.expenses__list',\n  budgetLabel: '.budget__value',\n  incomeLabel: '.budget__income--value',\n  expenseLabel: '.budget__expenses--value',\n  percentageLabel: '.budget__expenses--percentage',\n  container: '.container',\n  expensesPercLabel: '.item__percentage',\n  dateLabel: '.budget__title--month'\n};\n\n//# sourceURL=webpack:///./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/monthlyView.js":
/*!*************************************!*\
  !*** ./src/js/views/monthlyView.js ***!
  \*************************************/
/*! exports provided: getInput, addListItem, deleteListItem, clearFields, displayBudget, displayPercentages, displayMonth, changedType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addListItem\", function() { return addListItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteListItem\", function() { return deleteListItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearFields\", function() { return clearFields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayBudget\", function() { return displayBudget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayPercentages\", function() { return displayPercentages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMonth\", function() { return displayMonth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changedType\", function() { return changedType; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n//UI CONTROLLER\n\n\nvar formatNumber = function formatNumber(num, type) {\n  num = Math.abs(num);\n  num = num.toFixed(2);\n  var numSplit = num.split('.');\n  var _int = numSplit[0];\n\n  if (_int.length > 3) {\n    _int = \"\".concat(_int.substr(0, _int.length - 3), \",\").concat(_int.substr(_int.length - 3, 3));\n  }\n\n  var dec = numSplit[1];\n  return \"\".concat(type === 'exp' ? '-' : '+', \" \").concat(_int, \".\").concat(dec);\n};\n\nvar nodeListForEach = function nodeListForEach(list, callback) {\n  for (var i = 0; i < list.length; i++) {\n    callback(list[i], i);\n  }\n};\n\nvar getInput = function getInput() {\n  return {\n    type: document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputType).value,\n    //either inc or exp\n    description: document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription).value,\n    value: parseFloat(document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue).value)\n  };\n};\nvar addListItem = function addListItem(obj, type) {\n  var html, newHtml, element; //Create Html string with placeholder text\n  // const markup =`\n  //     <div class=\"item clearfix\" id=\"${type}-0\">\n  //         <div class=\"item__description\">${obj.description}</div>\n  //         <div class=\"right clearfix\">\n  //             <div class=\"item__value\">${formatNumber(obj.value, type)}</div>\n  //             <div class=\"item__delete\">\n  //                 <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\">\n  //                 </i></button>\n  //             </div>\n  //         </div>\n  //     </div>\n  // `;\n\n  if (type === 'inc') {\n    element = _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].incomeContainer;\n    html = '<div class=\"item clearfix\" id=\"inc-%id%\"><div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__delete\"><button class=\"item__delete--btn\">x</button></div></div></div>';\n  } else if (type === 'exp') {\n    element = _base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expensesContainer;\n    html = '<div class=\"item clearfix\" id=\"exp-%id%\"><div class=\"item__description\">%description%</div><div class=\"right clearfix\"><div class=\"item__value\">%value%</div><div class=\"item__percentage\">25%</div><div class=\"item__delete\"><button class=\"item__delete--btn\">x</button></div></div></div>';\n  } //Replace Placeholder text with actual data\n\n\n  newHtml = html.replace('%id%', obj.id);\n  newHtml = newHtml.replace('%description%', obj.description);\n  newHtml = newHtml.replace('%value%', formatNumber(obj.value, type)); //Insert the HTML into the DOM\n\n  document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);\n};\nvar deleteListItem = function deleteListItem(selectorID) {\n  var el = document.getElementById(selectorID);\n  el.parentNode.removeChild(el);\n};\nvar clearFields = function clearFields() {\n  var fields = document.querySelectorAll(\"\".concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription, \", \").concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue));\n  var fieldsArr = Array.from(fields);\n  fieldsArr.forEach(function (el) {\n    return el.value = \"\";\n  });\n  fieldsArr[0].focus();\n};\nvar displayBudget = function displayBudget(obj) {\n  var type;\n  obj.budget > 0 ? type = 'inc' : type = 'exp';\n  document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].budgetLabel).textContent = \"\".concat(type === 'exp' ? '-' : '+', \" \").concat(obj.budget.toLocaleString(\"en-US\", {\n    style: \"currency\",\n    currency: \"USD\"\n  }));\n  document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');\n  document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');\n\n  if (obj.percentage > 0) {\n    document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].percentageLabel).textContent = \"\".concat(obj.percentage, \"%\");\n  } else {\n    document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].percentageLabel).textContent = '--';\n  }\n};\nvar displayPercentages = function displayPercentages(percentages) {\n  var fields = document.querySelectorAll(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].expensesPercLabel);\n  nodeListForEach(fields, function (cur, i) {\n    if (percentages[i] > 0) {\n      cur.textContent = \"\".concat(percentages[i], \"%\");\n    } else {\n      cur.textContent = '--';\n    }\n  });\n};\nvar displayMonth = function displayMonth() {\n  var now = new Date();\n  var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  var month = now.getMonth();\n  var year = now.getFullYear();\n  document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].dateLabel).textContent = \"\".concat(monthArr[month], \" \").concat(year);\n};\nvar changedType = function changedType() {\n  var fields = document.querySelectorAll(\"\".concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputType, \",\").concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputDescription, \",\").concat(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputValue));\n  nodeListForEach(fields, function (cur) {\n    cur.classList.toggle('red-focus');\n  });\n  document.querySelector(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMstrings\"].inputBtn).classList.toggle('red');\n};\n\n//# sourceURL=webpack:///./src/js/views/monthlyView.js?");

/***/ })

/******/ });
