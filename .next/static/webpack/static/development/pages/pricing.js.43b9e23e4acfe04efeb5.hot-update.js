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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductCard */ "./components/ProductCard.js");







var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js";





var PricingToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PricingToggle, _React$Component);

  function PricingToggle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricingToggle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PricingToggle).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clickStandard", function () {
      _this.setState({
        activeType: "standard"
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clickEnterprise", function () {
      _this.setState({
        activeType: "enterprise"
      });
    });

    _this.state = {
      activeType: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingToggle, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1767804433" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1767804433",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1767804433" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1767804433" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.clickStandard,
        id: "standard",
        className: "jsx-1767804433" + " " + ((this.state.activeType == "standard" ? "spanActive" : "span") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.clickEnterprise,
        id: "enterprise",
        className: "jsx-1767804433" + " " + ((this.state.activeType == "enterprise" ? "spanActive" : "span") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Enterprise"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1767804433" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "product-card",
        activeType: this.state.activeType,
        productName: "Computer Vision",
        productDes: "High level understanding from images or videos.",
        featureList: [{
          id: 1,
          title: "Video Annotation",
          pricing: "Contact Sales",
          type: "enterprise",
          featureDes: "Human-powered video annotation"
        }, {
          id: 2,
          title: "Semantic Segmentation",
          pricing: "$6.40 / IMAGE",
          type: "standard",
          featureDes: "Human-powered pixel-level image segmentation and annotation"
        }, {
          id: 3,
          title: "Sensor Fusion",
          pricing: "Contact Sales",
          type: "enterprise",
          featureDes: "All the data you need to build 3D perception using LiDAR, camera, and radar"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "product-card",
        productName: "Natural Language",
        activeType: this.state.activeType,
        productDes: "Processing of text in order to extract abstract syntactic and semantic content.",
        featureList: [{
          id: 1,
          title: "Ocr Transcription",
          pricing: "$0.12 / INVOICE + $0.08 / ANNOTATION",
          type: "standard",
          featureDes: "Invoice, Menu, and Form Transcription"
        }, {
          id: 2,
          title: "Text Categorization",
          pricing: "$0.08 / CATEGORIZATION",
          type: "standard",
          featureDes: "Content Moderation, Data Tagging, Other"
        }, {
          id: 3,
          title: "Comparison",
          pricing: "$0.08 / COMPARISON",
          type: "standard",
          featureDes: "Deduplication, A/B Comparisons, Others"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1767804433",
        __self: this
      }, ".pc-wrapper.jsx-1767804433{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-1767804433{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-1767804433 span.jsx-1767804433{font-size:26px;font-weight:400;text-transform:uppercase;}.span.jsx-1767804433{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.spanActive.jsx-1767804433{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);border:1px solid black;background:#fd62e9;color:white;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);box-shadow:2px 5px 5px rgba(0,0,0,0.25);}h2.jsx-1767804433{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSG9CLEFBRzBCLEFBSU0sQUFhSixBQU1FLEFBV0EsQUFnQkwsWUFDTSxDQWxEbUIsRUFpQnJCLEVBTU8sQUFXQSxhQWlCUixDQWpDVSxTQU1OLEFBV0EsS0FpQkgsSUFuRGxCLE9Ba0JBLEdBTWUsQUFXQSxFQWlCZixnQ0FqRGMsWUFDQSxZQUNLLGdCQW9CTSxBQVdBLENBOUJFLHlCQUNOLG1CQUNJLHNEQWtCSixBQVdBLDZDQTVCTixhQUN3QixtQ0FpQnRCLEFBV0EsQ0EzQkEsY0FpQmdDLEFBV0EsQ0EzQmpELCtGQWlCQSxBQVd5Qix1QkFDSixtQkFDUCxZQUNtQyxnR0FDSix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL05oYXQvRGVza3RvcC9HaXRodWIvc2NhbGUvY29tcG9uZW50cy9QcmljaW5nVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5cbmNsYXNzIFByaWNpbmdUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhY3RpdmVUeXBlOiBcIlwiIH07XG4gIH1cblxuICBjbGlja1N0YW5kYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVHlwZTogXCJzdGFuZGFyZFwiXG4gICAgfSk7XG4gIH07XG5cbiAgY2xpY2tFbnRlcnByaXNlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVHlwZTogXCJlbnRlcnByaXNlXCJcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+UExBTlM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRvZ2dsZVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja1N0YW5kYXJkfVxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVR5cGUgPT0gXCJzdGFuZGFyZFwiID8gXCJzcGFuQWN0aXZlXCIgOiBcInNwYW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YW5kYXJkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsaWNrRW50ZXJwcmlzZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVR5cGUgPT0gXCJlbnRlcnByaXNlXCIgPyBcInNwYW5BY3RpdmVcIiA6IFwic3BhblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWQ9XCJlbnRlcnByaXNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW50ZXJwcmlzZVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYy13cmFwcGVyXCI+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIlxuICAgICAgICAgICAgYWN0aXZlVHlwZT17dGhpcy5zdGF0ZS5hY3RpdmVUeXBlfVxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJDb21wdXRlciBWaXNpb25cIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIkhpZ2ggbGV2ZWwgdW5kZXJzdGFuZGluZyBmcm9tIGltYWdlcyBvciB2aWRlb3MuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWRlbyBBbm5vdGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCJDb250YWN0IFNhbGVzXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbnRlcnByaXNlXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJIdW1hbi1wb3dlcmVkIHZpZGVvIGFubm90YXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VtYW50aWMgU2VnbWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCIkNi40MCAvIElNQUdFXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6XG4gICAgICAgICAgICAgICAgICBcIkh1bWFuLXBvd2VyZWQgcGl4ZWwtbGV2ZWwgaW1hZ2Ugc2VnbWVudGF0aW9uIGFuZCBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbnNvciBGdXNpb25cIixcbiAgICAgICAgICAgICAgICBwcmljaW5nOiBcIkNvbnRhY3QgU2FsZXNcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVudGVycHJpc2VcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOlxuICAgICAgICAgICAgICAgICAgXCJBbGwgdGhlIGRhdGEgeW91IG5lZWQgdG8gYnVpbGQgM0QgcGVyY2VwdGlvbiB1c2luZyBMaURBUiwgY2FtZXJhLCBhbmQgcmFkYXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRcIlxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJOYXR1cmFsIExhbmd1YWdlXCJcbiAgICAgICAgICAgIGFjdGl2ZVR5cGU9e3RoaXMuc3RhdGUuYWN0aXZlVHlwZX1cbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJQcm9jZXNzaW5nIG9mIHRleHQgaW4gb3JkZXIgdG8gZXh0cmFjdCBhYnN0cmFjdCBzeW50YWN0aWMgYW5kIHNlbWFudGljIGNvbnRlbnQuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJPY3IgVHJhbnNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDAuMTIgLyBJTlZPSUNFICsgJDAuMDggLyBBTk5PVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6IFwiSW52b2ljZSwgTWVudSwgYW5kIEZvcm0gVHJhbnNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUZXh0IENhdGVnb3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCIkMC4wOCAvIENBVEVHT1JJWkFUSU9OXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6IFwiQ29udGVudCBNb2RlcmF0aW9uLCBEYXRhIFRhZ2dpbmcsIE90aGVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbXBhcmlzb25cIixcbiAgICAgICAgICAgICAgICBwcmljaW5nOiBcIiQwLjA4IC8gQ09NUEFSSVNPTlwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOiBcIkRlZHVwbGljYXRpb24sIEEvQiBDb21wYXJpc29ucywgT3RoZXJzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBjLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByaWNpbmctdG9nZ2xlIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwYW5BY3RpdmUge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZDYyZTk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxLjJzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.43b9e23e4acfe04efeb5.hot-update.js.map