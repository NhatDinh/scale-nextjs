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
    };
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
        className: "jsx-4180312783" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-4180312783",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4180312783" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick,
        className: "jsx-4180312783" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-4180312783" + " " + ((this.state.showStandard ? "standard standardActive" : "standard") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-4180312783" + " " + ((this.state.showStandard ? "enterprise" : "enterprise enterpriseActive") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4180312783" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: this.state.showStandard,
        productName: "Computer Vision",
        productDes: "High level understanding from images or videos.",
        featureList: [{
          id: 1,
          title: "Video Annotation",
          pricing: "Contact Sales",
          type: "Enterprise",
          featureDes: "Human-powered video annotation"
        }, {
          id: 2,
          title: "Semantic Segmentation",
          pricing: "$6.40 / IMAGE",
          type: "Standard",
          featureDes: "Human-powered pixel-level image segmentation and annotation"
        }, {
          id: 3,
          title: "Sensor Fusion",
          pricing: "Contact Sales",
          type: "Enterprise",
          featureDes: "All the data you need to build 3D perception using LiDAR, camera, and radar"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productName: "Natural Language",
        productDes: "Processing of text in order to extract abstract syntactic and semantic content.",
        featureList: [{
          id: 1,
          title: "Ocr Transcription",
          pricing: "$0.12 / INVOICE + $0.08 / ANNOTATION",
          featureDes: "Invoice, Menu, and Form Transcription"
        }, {
          id: 2,
          title: "Text Categorization",
          pricing: "$0.08 / CATEGORIZATION",
          featureDes: "Content Moderation, Data Tagging, Other"
        }, {
          id: 3,
          title: "Comparison",
          pricing: "$0.08 / COMPARISON",
          featureDes: "Deduplication, A/B Comparisons, Others"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4180312783",
        __self: this
      }, ".pc-wrapper.jsx-4180312783{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-4180312783{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-4180312783 span.jsx-4180312783{font-size:26px;font-weight:400;text-transform:uppercase;}.enterprise.jsx-4180312783{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.enterpriseActive.jsx-4180312783{border:1px solid black;background:#fd62e9;color:white;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);box-shadow:2px 5px 5px rgba(0,0,0,0.25);}.standard.jsx-4180312783{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.standardActive.jsx-4180312783{border:1px solid black;background-color:#fd62e9;color:white;box-shadow:2px 5px 5px rgba(0,0,0,0.25);}h2.jsx-4180312783{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR29CLEFBRzBCLEFBSU0sQUFhSixBQU1FLEFBU00sQUFRTixBQVdNLEFBT1gsWUFDTSxDQTFEbUIsRUFpQnJCLEVBTU8sQUFpQkEsTUFSSixBQW1CTSxPQVFWLENBekNVLFNBTU4sQUFpQkEsRUFSUCxHQTJCSSxHQVJKLENBbkRkLEtBaUNpRCxFQWZqRCxHQU1lLEFBaUJBLENBVzhCLENBUTdDLGdDQXpEYyxPQWtEZCxLQWpEYyxZQUNLLGdCQW9CRixBQWlCUSxDQXBDRSxjQW9Cc0IsRUFRSixTQTNCeEIsbUJBQ0ksWUEyQnpCLDBDQVFxQixZQWhCckIsaUNBbEJlLGFBQ3dCLG1DQWtDdEIsQ0FqQ0EsY0FrQ2dDLENBakNqRCwrRkFrQ0EiLCJmaWxlIjoiL1VzZXJzL05oYXQvRGVza3RvcC9HaXRodWIvc2NhbGUvY29tcG9uZW50cy9QcmljaW5nVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5cbmNsYXNzIFByaWNpbmdUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzaG93U3RhbmRhcmQ6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIHNob3dTdGFuZGFyZDogIXRoaXMuc3RhdGUuc2hvd1N0YW5kYXJkXG4gICAgfSkpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+UExBTlM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRvZ2dsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3dTdGFuZGFyZCA/IFwic3RhbmRhcmQgc3RhbmRhcmRBY3RpdmVcIiA6IFwic3RhbmRhcmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YW5kYXJkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1N0YW5kYXJkXG4gICAgICAgICAgICAgICAgICA/IFwiZW50ZXJwcmlzZVwiXG4gICAgICAgICAgICAgICAgICA6IFwiZW50ZXJwcmlzZSBlbnRlcnByaXNlQWN0aXZlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFbnRlcnByaXNlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RlZH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYy13cmFwcGVyXCI+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnNob3dTdGFuZGFyZH1cbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiQ29tcHV0ZXIgVmlzaW9uXCJcbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJIaWdoIGxldmVsIHVuZGVyc3RhbmRpbmcgZnJvbSBpbWFnZXMgb3IgdmlkZW9zLlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlkZW8gQW5ub3RhdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiQ29udGFjdCBTYWxlc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW50ZXJwcmlzZVwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6IFwiSHVtYW4tcG93ZXJlZCB2aWRlbyBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbWFudGljIFNlZ21lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDYuNDAgLyBJTUFHRVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOlxuICAgICAgICAgICAgICAgICAgXCJIdW1hbi1wb3dlcmVkIHBpeGVsLWxldmVsIGltYWdlIHNlZ21lbnRhdGlvbiBhbmQgYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW5zb3IgRnVzaW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCJDb250YWN0IFNhbGVzXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJFbnRlcnByaXNlXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczpcbiAgICAgICAgICAgICAgICAgIFwiQWxsIHRoZSBkYXRhIHlvdSBuZWVkIHRvIGJ1aWxkIDNEIHBlcmNlcHRpb24gdXNpbmcgTGlEQVIsIGNhbWVyYSwgYW5kIHJhZGFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJOYXR1cmFsIExhbmd1YWdlXCJcbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJQcm9jZXNzaW5nIG9mIHRleHQgaW4gb3JkZXIgdG8gZXh0cmFjdCBhYnN0cmFjdCBzeW50YWN0aWMgYW5kIHNlbWFudGljIGNvbnRlbnQuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJPY3IgVHJhbnNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDAuMTIgLyBJTlZPSUNFICsgJDAuMDggLyBBTk5PVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJJbnZvaWNlLCBNZW51LCBhbmQgRm9ybSBUcmFuc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRleHQgQ2F0ZWdvcml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBwcmljaW5nOiBcIiQwLjA4IC8gQ0FURUdPUklaQVRJT05cIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOiBcIkNvbnRlbnQgTW9kZXJhdGlvbiwgRGF0YSBUYWdnaW5nLCBPdGhlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb21wYXJpc29uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCIkMC4wOCAvIENPTVBBUklTT05cIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOiBcIkRlZHVwbGljYXRpb24sIEEvQiBDb21wYXJpc29ucywgT3RoZXJzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBjLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNpbmctdG9nZ2xlIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVudGVycHJpc2Uge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVudGVycHJpc2VBY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmQ2MmU5O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFuZGFyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxLjJzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RhbmRhcmRBY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ2MmU5O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZ1RvZ2dsZTtcbiJdfQ== */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.586ae6793fbfb2afeb34.hot-update.js.map