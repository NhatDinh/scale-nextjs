webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/ProductCard.js";



var ProductCard = function ProductCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-712308847" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-712308847" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-712308847" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-712308847",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.featureList.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: feature.id,
      className: "jsx-712308847",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-712308847" + " " + "l-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-712308847" + " " + "feature-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, feature.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-712308847",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-712308847" + " " + "r-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-712308847",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, feature.pricing)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "712308847",
    __self: this
  }, ".product-wrapper.jsx-712308847{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;}.product-wrapper.jsx-712308847 h4.jsx-712308847{display:grid;grid-template-columns:repeat(2,1fr);font-size:26px;}.feature-name.jsx-712308847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fd9d52;border-radius:20px;padding:5px;text-transform:uppercase;color:white;}.product-wrapper.jsx-712308847 li.jsx-712308847{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-712308847 li.jsx-712308847{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-712308847 ul.jsx-712308847,.product-wrapper.jsx-712308847 p.jsx-712308847{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUd1QixBQVlDLEFBS0EsQUFTQSxBQU9BLEFBUUgsVUFDRCxFQXpDTSxDQVlzQixBQWNQLEFBT0EsTUFTaEIsUUF6Q0YsTUEwQ2QsTUF6Q3lCLElBeUJiLEFBT0EsTUFyQkssSUFlQyxBQU9BLFNBaEM2QixFQVcvQyxLQWVBLEFBT0EsS0FuQjJCLHlCQUNOLEtBZEEsY0FlUCxLQWRHLE9BZVUsUUFkWixhQUNBLElBY0QsU0FicUIsR0FjbkMsOEJBYkEiLCJmaWxlIjoiL1VzZXJzL05oYXQvRGVza3RvcC9HaXRodWIvc2NhbGUvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvZHVjdENhcmQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXdyYXBwZXJcIj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57cHJvcHMucHJvZHVjdE5hbWV9PC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzXCI+e3Byb3BzLnByb2R1Y3REZXN9PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMuZmVhdHVyZUxpc3QubWFwKGZlYXR1cmUgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLWNvbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0dXJlLW5hbWVcIj57ZmVhdHVyZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxwPntmZWF0dXJlLmZlYXR1cmVEZXN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItY29sXCI+XG4gICAgICAgICAgICAgIDxwPntmZWF0dXJlLnByaWNpbmd9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDNmcjtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIGg0IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mZWF0dXJlLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOWQ1MjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgdWwsXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgcCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICM1ODU4NTg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.edad5b7f67670ef44cbe.hot-update.js.map