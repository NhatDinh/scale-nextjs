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
      this.setState(function (state) {
        return {
          showStandard: true
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
        className: "jsx-2020991427" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2020991427",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2020991427" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick,
        className: "jsx-2020991427" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2020991427" + " " + ((this.state.showStandard ? "standardActive" : "standard") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2020991427" + " " + "enterprise",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2020991427" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
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
          lineNumber: 32
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
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2020991427",
        __self: this
      }, ".pc-wrapper.jsx-2020991427{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-2020991427{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-2020991427 span.jsx-2020991427{color:black;font-size:26px;font-weight:400;text-transform:uppercase;}.enterprise.jsx-2020991427{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.standard.jsx-2020991427{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.standardActive.jsx-2020991427{padding:5px 20px;border:1px solid black;background:#fd62e9;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}h2.jsx-2020991427{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBRzBCLEFBSU0sQUFhUCxBQU9LLEFBVUEsQUFVQSxBQVdMLFlBckNHLEFBc0NHLENBdkRtQixJQXdCcEIsQUFVQSxBQVVNLFVBMUJQLEdBc0NELElBL0JJLEFBVUEsTUFVQSxHQTFCTSxFQXNDVCxJQXhEbEIsSUF5QmUsQUFVQSxNQVVNLEVBWXJCLE9BdENBLFVBMkJlLGVBM0NELFlBQ0EsWUFDSyxVQXFCTSxBQVVBLE9BOUJFLGtCQXlDRixPQXhDSixtQkFDSSxnREFtQkosQUFVQSx5QkFXQSwwQkF2Q04sYUFDd0IsNkJBa0J0QixBQVVBLE9BM0JBLFFBa0JqQixBQVVBLE9BM0JBLEdBcUNpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1ByaWNpbmdUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcblxuY2xhc3MgUHJpY2luZ1RvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNob3dTdGFuZGFyZDogZmFsc2UgIH07XG4gICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBzaG93U3RhbmRhcmQ6IHRydWVcbiAgICB9KSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5QTEFOUzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdG9nZ2xlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1N0YW5kYXJkID8gXCJzdGFuZGFyZEFjdGl2ZVwiIDogXCJzdGFuZGFyZFwifT5TdGFuZGFyZDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVudGVycHJpc2VcIj5FbnRlcnByaXNlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGMtd3JhcHBlclwiPlxuICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJDb21wdXRlciBWaXNpb25cIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIkhpZ2ggbGV2ZWwgdW5kZXJzdGFuZGluZyBmcm9tIGltYWdlcyBvciB2aWRlb3MuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWRlbyBBbm5vdGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDb250YWN0IFNhbGVzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbWFudGljIFNlZ21lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJDYuNDAgLyBJTUFHRVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiTmF0dXJhbCBMYW5ndWFnZVwiXG4gICAgICAgICAgICBwcm9kdWN0RGVzPVwiUHJvY2Vzc2luZyBvZiB0ZXh0IGluIG9yZGVyIHRvIGV4dHJhY3QgYWJzdHJhY3Qgc3ludGFjdGljIGFuZCBzZW1hbnRpYyBjb250ZW50LlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT2NyIFRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiQwLjEyIC8gSU5WT0lDRSArICQwLjA4IC8gQU5OT1RBVElPTlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUZXh0IENhdGVnb3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIkMC4wOCAvIENBVEVHT1JJWkFUSU9OXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBjLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNpbmctdG9nZ2xlIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVudGVycHJpc2Uge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFuZGFyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0YW5kYXJkQWN0aXZlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmQ2MmU5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.20cd493cf3f6f775b67c.hot-update.js.map