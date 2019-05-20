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
  console.log(props.type);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4124738948" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-4124738948" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4124738948" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4124738948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.featureList.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: feature.id,
      className: "jsx-4124738948",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4124738948" + " " + "l-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4124738948" + " " + "feature-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, feature.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4124738948",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4124738948" + " " + "r-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4124738948",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, feature.pricing)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4124738948",
    __self: this
  }, ".product-wrapper.jsx-4124738948{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;font-weight:600;}.product-wrapper.jsx-4124738948 h4.jsx-4124738948{display:grid;grid-template-columns:repeat(2,1fr);font-size:26px;}.feature-name.jsx-4124738948{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#e23e7c;border-radius:20px;padding:5px;text-transform:uppercase;color:white;font-weight:700;font-size:12px;}.product-wrapper.jsx-4124738948 li.jsx-4124738948{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-4124738948 ul.jsx-4124738948,.product-wrapper.jsx-4124738948 p.jsx-4124738948{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUd1QixBQWFDLEFBS0EsQUFXQSxBQVFILFVBQ0QsRUFyQ00sQ0Fhc0IsQUFnQlAsTUFTaEIsUUFyQ0YsTUFzQ2QsTUFyQ3lCLElBNEJiLE1BaEJLLElBaUJDLFNBNUI2QixFQVkvQyxLQWlCQSxLQWQyQix5QkFDTixLQWZBLGNBZ0JQLEtBZkcsT0FnQlUsUUFmWixhQUNBLElBZUQsU0FkcUIsR0FlakIsZ0JBQ0QsY0FmQyxDQWdCbEIsZUFmQSIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IHByb3BzID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMudHlwZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXdyYXBwZXJcIj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57cHJvcHMucHJvZHVjdE5hbWV9PC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzXCI+e3Byb3BzLnByb2R1Y3REZXN9PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMuZmVhdHVyZUxpc3QubWFwKGZlYXR1cmUgPT4gKFxuICAgICAgICAgIFxuICAgICAgICAgIDxsaSBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsLWNvbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmZWF0dXJlLW5hbWVcIj57ZmVhdHVyZS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxwPntmZWF0dXJlLmZlYXR1cmVEZXN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInItY29sXCI+XG4gICAgICAgICAgICAgIDxwPntmZWF0dXJlLnByaWNpbmd9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDNmcjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgaDQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZlYXR1cmUtbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZTdjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB1bCxcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzU4NTg1ODtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.53a88e175113ab6f39a4.hot-update.js.map