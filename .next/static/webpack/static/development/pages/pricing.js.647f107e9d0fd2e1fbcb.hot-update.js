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
      showStandard: false
    }; // This binding is necessary to make `this` work in the callback

    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      this.setState(function (state) {
        return {
          showStandard: !_this2.state.showStandard
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state.selected);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2586097353" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2586097353",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2586097353" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick,
        className: "jsx-2586097353" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2586097353" + " " + ((this.state.showStandard ? "standard standardActive" : "standard") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2586097353" + " " + ((this.state.showStandard ? "enterprise enterpriseActive" : "standard") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2586097353" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
          lineNumber: 40
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
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2586097353",
        __self: this
      }, ".pc-wrapper.jsx-2586097353{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-2586097353{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-2586097353 span.jsx-2586097353{color:black;font-size:26px;font-weight:400;text-transform:uppercase;}.enterprise.jsx-2586097353{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.entepriseActive.jsx-2586097353{border:1px solid black;background:#fd62e9;}.standard.jsx-2586097353{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.standardActive.jsx-2586097353{border:1px solid black;background:#fd62e9;}h2.jsx-2586097353{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RW9CLEFBRzBCLEFBSU0sQUFhUCxBQU9LLEFBVU0sQUFLTixBQVVNLEFBS1gsWUFwQ0csQUFxQ0csQ0F0RG1CLElBd0JwQixBQWVBLE1BTEUsQUFlQSxJQS9CSCxHQXFDRCxJQTlCSSxBQWVBLFFBTHJCLEFBZUEsQ0EvQjJCLEVBcUNULElBdkRsQixJQXlCZSxBQWVBLFFBZ0JmLE9BckNBLHlCQWhCYyxZQUNBLFlBQ0ssVUFxQk0sQUFlQSxPQW5DRSx5QkFDTixtQkFDSSxnREFtQkosQUFlQSxtREFqQ04sYUFDd0IsNkJBa0J0QixBQWVBLE9BaENBLFFBa0JqQixBQWVBLE9BaENBIiwiZmlsZSI6Ii9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiLi9Qcm9kdWN0Q2FyZFwiO1xuXG5jbGFzcyBQcmljaW5nVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgc2hvd1N0YW5kYXJkOiBmYWxzZSB9O1xuICAgIC8vIFRoaXMgYmluZGluZyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBgdGhpc2Agd29yayBpbiB0aGUgY2FsbGJhY2tcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgc2hvd1N0YW5kYXJkOiAhdGhpcy5zdGF0ZS5zaG93U3RhbmRhcmRcbiAgICB9KSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5QTEFOUzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdG9nZ2xlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1N0YW5kYXJkID8gXCJzdGFuZGFyZCBzdGFuZGFyZEFjdGl2ZVwiIDogXCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3RhbmRhcmRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U3RhbmRhcmQgPyBcImVudGVycHJpc2UgZW50ZXJwcmlzZUFjdGl2ZVwiIDogXCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgIH0+RW50ZXJwcmlzZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBjLXdyYXBwZXJcIj5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiQ29tcHV0ZXIgVmlzaW9uXCJcbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJIaWdoIGxldmVsIHVuZGVyc3RhbmRpbmcgZnJvbSBpbWFnZXMgb3IgdmlkZW9zLlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlkZW8gQW5ub3RhdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ29udGFjdCBTYWxlc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW1hbnRpYyBTZWdtZW50YXRpb25cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiQ2LjQwIC8gSU1BR0VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICBwcm9kdWN0TmFtZT1cIk5hdHVyYWwgTGFuZ3VhZ2VcIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIlByb2Nlc3Npbmcgb2YgdGV4dCBpbiBvcmRlciB0byBleHRyYWN0IGFic3RyYWN0IHN5bnRhY3RpYyBhbmQgc2VtYW50aWMgY29udGVudC5cIlxuICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9jciBUcmFuc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIkMC4xMiAvIElOVk9JQ0UgKyAkMC4wOCAvIEFOTk9UQVRJT05cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGV4dCBDYXRlZ29yaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJDAuMDggLyBDQVRFR09SSVpBVElPTlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wYy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2luZy10b2dnbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbnRlcnByaXNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZW50ZXByaXNlQWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkNjJlOTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RhbmRhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFuZGFyZEFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZDYyZTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.647f107e9d0fd2e1fbcb.hot-update.js.map