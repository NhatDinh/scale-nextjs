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
    className: "jsx-424431704" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-424431704" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-424431704" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-424431704",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.featureList.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: feature.id,
      className: "jsx-424431704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-424431704" + " " + "l-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-424431704" + " " + "feature-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, feature.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-424431704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-424431704" + " " + "r-col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-424431704",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, feature.pricing)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "424431704",
    __self: this
  }, ".product-wrapper.jsx-424431704{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;}.product-wrapper.jsx-424431704 h4.jsx-424431704{display:grid;grid-template-columns:repeat(2,1fr);font-size:26px;}.feature-name.jsx-424431704{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fd9d52;border-radius:20px;padding:5px;text-transform:uppercase;}r-col.jsx-424431704{display;-webkit-flex;-ms-flex;flex;-webkit-box-pack:right;-webkit-justify-content:right;-ms-flex-pack:right;justify-content:right;}.product-wrapper.jsx-424431704 li.jsx-424431704{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-424431704 li.jsx-424431704{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-424431704 ul.jsx-424431704,.product-wrapper.jsx-424431704 p.jsx-424431704{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUd1QixBQVlDLEFBS0EsQUFRTixBQUlNLEFBT0EsQUFRSCxRQW5CRSxFQW9CSCxFQTVDTSxDQVlzQixBQWlCUCxBQU9BLE1BU2hCLFFBNUNGLE1BNkNkLEVBckJ3QixJQXZCQyxJQTRCYixBQU9BLE1BeEJLLElBa0JDLEFBT0EsU0FuQzZCLEVBVy9DLEtBa0JBLEFBT0EsS0F0QjJCLHlCQUNOLEtBZEEsY0FlUCxLQWRHLE9BZVUsQUFNM0IsUUFwQmUsYUFDQSxJQWNmLFNBYm1DLGlDQUNuQyIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntwcm9wcy5wcm9kdWN0TmFtZX08L2g0PlxuICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNcIj57cHJvcHMucHJvZHVjdERlc308L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5mZWF0dXJlTGlzdC5tYXAoZmVhdHVyZSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17ZmVhdHVyZS5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImwtY29sXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtbmFtZVwiPntmZWF0dXJlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+e2ZlYXR1cmUuZmVhdHVyZURlc308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jb2xcIj5cbiAgICAgICAgICAgICAgPHA+e2ZlYXR1cmUucHJpY2luZ308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgM2ZyO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgaDQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZlYXR1cmUtbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5ZDUyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICByLWNvbHtcbiAgICAgICAgICBkaXNwbGF5OyBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB1bCxcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBwIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzU4NTg1ODtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.1cdba26e6006ae834074.hot-update.js.map