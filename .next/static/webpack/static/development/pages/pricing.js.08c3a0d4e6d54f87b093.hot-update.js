webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/ProductCard.js";



var ProductCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductCard, _React$Component);

  function ProductCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-980988706" + " " + "product-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-980988706" + " " + "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.productName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-980988706" + " " + "product-des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.productDes), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-980988706",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.featureList.map(function (feature) {
        return feature.type == _this.props.activeType && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: feature.id,
          className: "jsx-980988706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-980988706" + " " + "l-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-980988706" + " " + "feature-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, feature.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-980988706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-980988706" + " " + "r-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-980988706" + " " + "dark-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, feature.pricing)));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "980988706",
        __self: this
      }, ".dark-btn.jsx-980988706{padding:5px 10px;border-radius:20px;background-color:black;text-transform:uppercase;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;text-align:center;}.dark-btn.jsx-980988706:hover{box-shadow:0 10px 20px rgba(0,0,0,0.25);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);color:#fd62e9;}.product-wrapper.jsx-980988706{margin:20px;padding:0 10px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;display:grid;grid-template-rows:1fr 1fr 3fr;font-weight:600;overflow:hidden;}.product-wrapper.jsx-980988706 h4.jsx-980988706{font-size:26px;}.feature-name.jsx-980988706{background-color:#fd9d52;border-radius:20px;padding:5px;text-transform:uppercase;color:white;font-weight:700;font-size:12px;}.product-wrapper.jsx-980988706 li.jsx-980988706{display:grid;grid-template-columns:2fr 3fr;padding:0;margin:10px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.r-col.jsx-980988706{padding-left:30px;}.l-col.jsx-980988706{display:grid;grid-template-rows:auto auto;grid-gap:10px;}.product-wrapper.jsx-980988706 ul.jsx-980988706,.product-wrapper.jsx-980988706 p.jsx-980988706{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUc4QixBQVcwQixBQUsvQixBQWNHLEFBSVUsQUFVWixBQVFLLEFBSUwsQUFPSCxVQUNELEVBL0NNLENBNEJlLEFBWUQsRUExQi9CLEVBOUJxQixDQW9EckIsQ0FZQSxNQTlCcUIsRUFqQlAsU0FoQlcsR0FpQkEsQ0FQSyxFQThDZCxDQVpKLENBVkUsU0FXQSxHQVZhLEFBc0IzQixHQXhEMkIsR0FpQm9CLEdBNEJmLGdCQVZsQixHQWxDVyxTQW1DUCxXQWxCRyxLQW1CSixjQWxCQSxDQW1CakIsWUE1QmdCLEVBVUQsWUFUZixDQVVpQyw2QkF5QmdCLEVBeEIvQixDQXBCRCxlQUNNLEFBb0JMLGdCQUNsQixrQ0FwQm9CLGtCQUNwQixVQTBDQSIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQcm9kdWN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3RoaXMucHJvcHMucHJvZHVjdE5hbWV9PC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNcIj57dGhpcy5wcm9wcy5wcm9kdWN0RGVzfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmVMaXN0Lm1hcChcbiAgICAgICAgICAgIGZlYXR1cmUgPT5cbiAgICAgICAgICAgICAgZmVhdHVyZS50eXBlID09IHRoaXMucHJvcHMuYWN0aXZlVHlwZSAmJiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZmVhdHVyZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImwtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtbmFtZVwiPntmZWF0dXJlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2ZlYXR1cmUuZmVhdHVyZURlc308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFyay1idG5cIj57ZmVhdHVyZS5wcmljaW5nfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRhcmstYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kYXJrLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmQ2MmU5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgM2ZyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZlYXR1cmUtbmFtZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5ZDUyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxLjJzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnItY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubC1jb2wge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB1bCxcbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIHAge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.08c3a0d4e6d54f87b093.hot-update.js.map