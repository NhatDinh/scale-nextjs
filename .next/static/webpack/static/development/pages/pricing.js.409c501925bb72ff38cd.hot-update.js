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
    className: "jsx-1809880619" + " " + "product-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1809880619" + " " + "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.productName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1809880619" + " " + "product-des",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.productDes), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1809880619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.featureList.map(function (feature) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: feature.id,
      className: "jsx-1809880619",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1809880619" + " " + "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-1809880619" + " " + "feature-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, feature.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1809880619" + " " + "col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1809880619",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, feature.pricing)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1809880619",
    __self: this
  }, ".product-wrapper.jsx-1809880619{margin:20px;padding:0 20px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;height:500px;display:grid;grid-template-rows:0.5fr 1fr 3fr;}.product-wrapper.jsx-1809880619 h4.jsx-1809880619{display:grid;grid-template-columns:repeat(2,1fr);font-size:26px;}.feature-name.jsx-1809880619{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fd9d52;border-radius:20px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;}.product-wrapper.jsx-1809880619 li.jsx-1809880619{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-1809880619 li.jsx-1809880619{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:20px 0px;}.product-wrapper.jsx-1809880619 col.jsx-1809880619{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align-center;}.product-wrapper.jsx-1809880619 ul.jsx-1809880619,.product-wrapper.jsx-1809880619 p.jsx-1809880619{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd1QixBQVlDLEFBS0EsQUFRQSxBQU9BLEFBT0EsQUFNSCxVQUNELEVBN0NNLENBWXNCLEFBYVAsQUFPQSxNQWNoQixRQTdDRixNQThDZCxNQTdDeUIsSUF3QmIsQUFPQSxNQXBCSyxJQWNDLEFBT0EsU0EvQjZCLEVBVy9DLEtBY0EsQUFPQSxLQWxCMkIsQUFzQlIsa0JBQ25CLE9BdEJxQixLQWRBLGNBZUksS0FkUixlQUNGLGFBQ0EsYUFDb0IsaUNBQ25DLG9CQVcyQix5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL05oYXQvRGVza3RvcC9HaXRodWIvc2NhbGUvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvZHVjdENhcmQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXdyYXBwZXJcIj5cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57cHJvcHMucHJvZHVjdE5hbWV9PC9oND5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtZGVzXCI+e3Byb3BzLnByb2R1Y3REZXN9PC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvcHMuZmVhdHVyZUxpc3QubWFwKGZlYXR1cmUgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZS1uYW1lXCI+e2ZlYXR1cmUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8cD57ZmVhdHVyZS5wcmljaW5nfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAzZnI7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBoNCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgfVxuICAgICAgICAuZmVhdHVyZS1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDlkNTI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBjb2wge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1hbGlnbi1jZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIHVsLFxuICAgICAgICAucHJvZHVjdC13cmFwcGVyIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.409c501925bb72ff38cd.hot-update.js.map