webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./components/PricingToggle.js":
/*!*************************************!*\
  !*** ./components/PricingToggle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductCard */ "./components/ProductCard.js");






var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js";





var PricingToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PricingToggle, _React$Component);

  function PricingToggle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricingToggle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PricingToggle).call(this, props));
    _this.state = {
      selected: "Enterprise"
    }; // This binding is necessary to make `this` work in the callback

    _this.handleClickStandard = _this.handleClickStandard.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingToggle, [{
    key: "handleClickStandard",
    value: function handleClickStandard() {
      this.setState(function (state) {
        return {
          selected: "Standard"
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1878465133" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-1878465133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1878465133" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClickStandard,
        className: "jsx-1878465133" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1878465133" + " " + ((this.state.selected = "standard" ? "standard active" : undefined) || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "enterprise",
        className: "jsx-1878465133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1878465133" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productName: "Computer Vision",
        productDes: "High level understanding from images or videos.",
        featureList: [{
          id: 1,
          title: "Video Annotation",
          content: "Contact Sales"
        }, {
          id: 2,
          title: "Semantic Segmentation",
          content: "$6.40 / IMAGE"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productName: "Natural Language",
        productDes: "Processing of text in order to extract abstract syntactic and semantic content.",
        featureList: [{
          id: 1,
          title: "Ocr Transcription",
          content: "$0.12 / INVOICE + $0.08 / ANNOTATION"
        }, {
          id: 2,
          title: "Text Categorization",
          content: "$0.08 / CATEGORIZATION"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1878465133",
        __self: this
      }, ".pc-wrapper.jsx-1878465133{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-1878465133{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-1878465133 span.jsx-1878465133{color:black;font-size:26px;font-weight:400;text-transform:uppercase;}.pricing-toggle.jsx-1878465133 #enterprise.jsx-1878465133{padding:5px 20px;background:#fd62e9;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid black;cursor:pointer;}.standard.jsx-1878465133{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}h2.jsx-1878465133{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRW9CLEFBRzBCLEFBSU0sQUFhUCxBQU9LLEFBV0EsQUFhTCxZQTlCRyxBQStCRyxDQWhEbUIsSUF3QmxCLEFBV0YsVUFqQkQsR0ErQkQsSUFiSSxFQVhBLE9BTk0sRUErQlQsSUFqRGxCLElBb0NlLEVBWEEsTUF5QmYsT0EvQkEseUJBaEJjLFlBQ0EsWUFDSyxVQWdDTSxFQVhBLEtBcEJFLHlCQUNOLG1CQUNJLGdEQThCSixFQVhBLGlEQWxCTixhQUN3Qiw2QkE2QnRCLEVBWFEsS0FqQlIsUUE2QmpCLE9BNUJBLEdBaUJpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1ByaWNpbmdUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcblxuY2xhc3MgUHJpY2luZ1RvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNlbGVjdGVkOiBcIkVudGVycHJpc2VcIiB9O1xuICAgIC8vIFRoaXMgYmluZGluZyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBgdGhpc2Agd29yayBpbiB0aGUgY2FsbGJhY2tcbiAgICB0aGlzLmhhbmRsZUNsaWNrU3RhbmRhcmQgPSB0aGlzLmhhbmRsZUNsaWNrU3RhbmRhcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrU3RhbmRhcmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgc2VsZWN0ZWQ6IFwiU3RhbmRhcmRcIlxuICAgIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1jb250YWluZXJcIj5cbiAgICAgICAgPGgyPlBMQU5TPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10b2dnbGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrU3RhbmRhcmR9PlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zZWxlY3RlZCA9IFwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICAgICAgPyBcInN0YW5kYXJkIGFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICA6IFwic3RhbmRhcmRcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdGFuZGFyZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbnRlcnByaXNlXCI+RW50ZXJwcmlzZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBjLXdyYXBwZXJcIj5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiQ29tcHV0ZXIgVmlzaW9uXCJcbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJIaWdoIGxldmVsIHVuZGVyc3RhbmRpbmcgZnJvbSBpbWFnZXMgb3IgdmlkZW9zLlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlkZW8gQW5ub3RhdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ29udGFjdCBTYWxlc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW1hbnRpYyBTZWdtZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiQ2LjQwIC8gSU1BR0VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICBwcm9kdWN0TmFtZT1cIk5hdHVyYWwgTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIlByb2Nlc3Npbmcgb2YgdGV4dCBpbiBvcmRlciB0byBleHRyYWN0IGFic3RyYWN0IHN5bnRhY3RpYyBhbmQgc2VtYW50aWMgY29udGVudC5cIlxuICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9jciBUcmFuc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIkMC4xMiAvIElOVk9JQ0UgKyAkMC4wOCAvIEFOTk9UQVRJT05cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGV4dCBDYXRlZ29yaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJDAuMDggLyBDQVRFR09SSVpBVElPTlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wYy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2luZy10b2dnbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSAjZW50ZXJwcmlzZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZDYyZTk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFuZGFyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFjdGl2ZSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.4b20741825b87969b1ee.hot-update.js.map