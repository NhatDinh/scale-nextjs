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
    className: "jsx-252682887" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-252682887" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-252682887" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-252682887",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.featureList.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: feature.id,
      className: "jsx-252682887",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-252682887" + " " + "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-252682887" + " " + "feature-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, feature.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-252682887" + " " + "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-252682887",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, feature.pricing)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "252682887",
    __self: this
  }, ".product-wrapper.jsx-252682887{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;}.product-wrapper.jsx-252682887 h4.jsx-252682887{display:grid;grid-template-columns:1fr 3fr;font-size:26px;}.feature-name.jsx-252682887{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fd9d52;border-radius:20px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;}.product-wrapper.jsx-252682887 li.jsx-252682887{display:grid;grid-template-columns:1fr 1fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-252682887 ul.jsx-252682887,.product-wrapper.jsx-252682887 p.jsx-252682887{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd1QixBQVlDLEFBS0EsQUFRQSxBQVFILFVBQ0QsRUFqQ00sQ0FZZSxBQWFBLE1BU2hCLFFBakNGLE1Ba0NkLE1BakN5QixJQVdSLEFBYUwsVUFDTSxLQWJsQixJQVgrQyxPQXlCL0MsS0FYMkIseUJBQ04sS0FkQSxjQWVJLEtBZFIsZUFDRixhQUNBLGFBQ29CLGlDQUNuQyxvQkFXMkIseUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2R1Y3RDYXJkID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3Byb3BzLnByb2R1Y3ROYW1lfTwvaDQ+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc1wiPntwcm9wcy5wcm9kdWN0RGVzfTwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLmZlYXR1cmVMaXN0Lm1hcChmZWF0dXJlID0+IChcbiAgICAgICAgICA8bGkga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtbmFtZVwiPntmZWF0dXJlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHA+e2ZlYXR1cmUucHJpY2luZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgM2ZyO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgaDQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgfVxuICAgICAgICAuZmVhdHVyZS1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDlkNTI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB1bCxcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzU4NTg1ODtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.08aa21096688e8da4283.hot-update.js.map