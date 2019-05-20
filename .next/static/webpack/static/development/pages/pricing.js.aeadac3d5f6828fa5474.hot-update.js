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
  handleType();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4124738948" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-4124738948" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4124738948" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4124738948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
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
  }, ".product-wrapper.jsx-4124738948{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;font-weight:600;}.product-wrapper.jsx-4124738948 h4.jsx-4124738948{display:grid;grid-template-columns:repeat(2,1fr);font-size:26px;}.feature-name.jsx-4124738948{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#e23e7c;border-radius:20px;padding:5px;text-transform:uppercase;color:white;font-weight:700;font-size:12px;}.product-wrapper.jsx-4124738948 li.jsx-4124738948{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-4124738948 ul.jsx-4124738948,.product-wrapper.jsx-4124738948 p.jsx-4124738948{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUd1QixBQWFDLEFBS0EsQUFXQSxBQVFILFVBQ0QsRUFyQ00sQ0Fhc0IsQUFnQlAsTUFTaEIsUUFyQ0YsTUFzQ2QsTUFyQ3lCLElBNEJiLE1BaEJLLElBaUJDLFNBNUI2QixFQVkvQyxLQWlCQSxLQWQyQix5QkFDTixLQWZBLGNBZ0JQLEtBZkcsT0FnQlUsUUFmWixhQUNBLElBZUQsU0FkcUIsR0FlakIsZ0JBQ0QsY0FmQyxDQWdCbEIsZUFmQSIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IHByb3BzID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMudHlwZSk7XG4gIGhhbmRsZVR5cGUoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3Byb3BzLnByb2R1Y3ROYW1lfTwvaDQ+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc1wiPntwcm9wcy5wcm9kdWN0RGVzfTwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLmZlYXR1cmVMaXN0Lm1hcChmZWF0dXJlID0+IChcbiAgICAgICAgICA8bGkga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibC1jb2xcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZS1uYW1lXCI+e2ZlYXR1cmUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8cD57ZmVhdHVyZS5mZWF0dXJlRGVzfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyLWNvbFwiPlxuICAgICAgICAgICAgICA8cD57ZmVhdHVyZS5wcmljaW5nfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAzZnI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIGg0IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mZWF0dXJlLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyM2U3YztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgdWwsXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgcCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6ICM1ODU4NTg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.aeadac3d5f6828fa5474.hot-update.js.map