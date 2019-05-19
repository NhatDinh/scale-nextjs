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
      show: "Enterprise"
    }; // This binding is necessary to make `this` work in the callback

    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingToggle, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState(function (state) {
        return {
          selected: "Standard"
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
        className: "jsx-2382967849" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-2382967849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2382967849" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick,
        className: "jsx-2382967849" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2382967849" + " " + "standard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-2382967849" + " " + "enterprise",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2382967849" + " " + "pc-wrapper",
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
        id: "2382967849",
        __self: this
      }, ".pc-wrapper.jsx-2382967849{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-2382967849{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-2382967849 span.jsx-2382967849{color:black;font-size:26px;font-weight:400;text-transform:uppercase;}.enterprise.jsx-2382967849{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid black;cursor:pointer;}.standard.jsx-2382967849{padding:5px 20px;background:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.active.jsx-2382967849{background:#fd62e9;}h2.jsx-2382967849{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBRzBCLEFBSU0sQUFhUCxBQU9LLEFBV0EsQUFVRSxBQUdQLFlBOUJHLEFBK0JHLENBaERtQixJQXdCcEIsQUFXQSxFQVVuQixRQTNCa0IsR0ErQkQsSUF4QkksQUFXQSxTQWpCTSxFQStCVCxJQWpEbEIsSUF5QmUsQUFXQSxRQWNmLE9BL0JBLHlCQWhCYyxZQUNBLFlBQ0ssVUFxQk0sQUFXQSxPQS9CRSx5QkFDTixtQkFDSSxnREFtQkosQUFXQSxtREE3Qk4sYUFDd0IsNkJBa0JkLEFBV1IsT0E1QkEsUUE2QmpCLE9BNUJBLENBaUJpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1ByaWNpbmdUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcblxuY2xhc3MgUHJpY2luZ1RvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNob3c6IFwiRW50ZXJwcmlzZVwiIH07XG4gICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBzZWxlY3RlZDogXCJTdGFuZGFyZFwiXG4gICAgfSkpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+UExBTlM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRvZ2dsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhbmRhcmRcIj5TdGFuZGFyZDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVudGVycHJpc2VcIj5FbnRlcnByaXNlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGMtd3JhcHBlclwiPlxuICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJDb21wdXRlciBWaXNpb25cIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIkhpZ2ggbGV2ZWwgdW5kZXJzdGFuZGluZyBmcm9tIGltYWdlcyBvciB2aWRlb3MuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWRlbyBBbm5vdGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDb250YWN0IFNhbGVzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbWFudGljIFNlZ21lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJDYuNDAgLyBJTUFHRVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiTmF0dXJhbCBMYW5ndWFnZVwiXG4gICAgICAgICAgICBwcm9kdWN0RGVzPVwiUHJvY2Vzc2luZyBvZiB0ZXh0IGluIG9yZGVyIHRvIGV4dHJhY3QgYWJzdHJhY3Qgc3ludGFjdGljIGFuZCBzZW1hbnRpYyBjb250ZW50LlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT2NyIFRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiQwLjEyIC8gSU5WT0lDRSArICQwLjA4IC8gQU5OT1RBVElPTlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUZXh0IENhdGVnb3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIkMC4wOCAvIENBVEVHT1JJWkFUSU9OXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBjLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNpbmctdG9nZ2xlIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVudGVycHJpc2Uge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0YW5kYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZDYyZTk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcmljaW5nVG9nZ2xlO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.cbc6c75c0680f5488555.hot-update.js.map