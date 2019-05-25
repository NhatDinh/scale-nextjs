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
        className: "jsx-1767804433" + " " + ((this.state.activeType == "enterprise" || this.state.activeType == "" ? "spanActive" : "span") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Enterprise"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1767804433" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 54
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
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1767804433",
        __self: this
      }, ".pc-wrapper.jsx-1767804433{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-1767804433{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-1767804433 span.jsx-1767804433{font-size:26px;font-weight:400;text-transform:uppercase;}.span.jsx-1767804433{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.spanActive.jsx-1767804433{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);border:1px solid black;background:#fd62e9;color:white;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);box-shadow:2px 5px 5px rgba(0,0,0,0.25);}h2.jsx-1767804433{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSG9CLEFBRzBCLEFBSU0sQUFhSixBQU1FLEFBV0EsQUFnQkwsWUFDTSxDQWxEbUIsRUFpQnJCLEVBTU8sQUFXQSxhQWlCUixDQWpDVSxTQU1OLEFBV0EsS0FpQkgsSUFuRGxCLE9Ba0JBLEdBTWUsQUFXQSxFQWlCZixnQ0FqRGMsWUFDQSxZQUNLLGdCQW9CTSxBQVdBLENBOUJFLHlCQUNOLG1CQUNJLHNEQWtCSixBQVdBLDZDQTVCTixhQUN3QixtQ0FpQnRCLEFBV0EsQ0EzQkEsY0FpQmdDLEFBV0EsQ0EzQmpELCtGQWlCQSxBQVd5Qix1QkFDSixtQkFDUCxZQUNtQyxnR0FDSix3Q0FDN0MiLCJmaWxlIjoiL1VzZXJzL05oYXQvRGVza3RvcC9HaXRodWIvc2NhbGUvY29tcG9uZW50cy9QcmljaW5nVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5cbmNsYXNzIFByaWNpbmdUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhY3RpdmVUeXBlOiBcIlwiIH07XG4gIH1cblxuICBjbGlja1N0YW5kYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVHlwZTogXCJzdGFuZGFyZFwiXG4gICAgfSk7XG4gIH07XG5cbiAgY2xpY2tFbnRlcnByaXNlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlVHlwZTogXCJlbnRlcnByaXNlXCJcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+UExBTlM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLXRvZ2dsZVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGlja1N0YW5kYXJkfVxuICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVR5cGUgPT0gXCJzdGFuZGFyZFwiID8gXCJzcGFuQWN0aXZlXCIgOiBcInNwYW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN0YW5kYXJkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsaWNrRW50ZXJwcmlzZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVR5cGUgPT0gXCJlbnRlcnByaXNlXCIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVR5cGUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgPyBcInNwYW5BY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgOiBcInNwYW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlkPVwiZW50ZXJwcmlzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVudGVycHJpc2VcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGMtd3JhcHBlclwiPlxuICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCJcbiAgICAgICAgICAgIGFjdGl2ZVR5cGU9e3RoaXMuc3RhdGUuYWN0aXZlVHlwZX1cbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiQ29tcHV0ZXIgVmlzaW9uXCJcbiAgICAgICAgICAgIHByb2R1Y3REZXM9XCJIaWdoIGxldmVsIHVuZGVyc3RhbmRpbmcgZnJvbSBpbWFnZXMgb3IgdmlkZW9zLlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlkZW8gQW5ub3RhdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiQ29udGFjdCBTYWxlc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZW50ZXJwcmlzZVwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6IFwiSHVtYW4tcG93ZXJlZCB2aWRlbyBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbWFudGljIFNlZ21lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDYuNDAgLyBJTUFHRVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOlxuICAgICAgICAgICAgICAgICAgXCJIdW1hbi1wb3dlcmVkIHBpeGVsLWxldmVsIGltYWdlIHNlZ21lbnRhdGlvbiBhbmQgYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZW5zb3IgRnVzaW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCJDb250YWN0IFNhbGVzXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbnRlcnByaXNlXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczpcbiAgICAgICAgICAgICAgICAgIFwiQWxsIHRoZSBkYXRhIHlvdSBuZWVkIHRvIGJ1aWxkIDNEIHBlcmNlcHRpb24gdXNpbmcgTGlEQVIsIGNhbWVyYSwgYW5kIHJhZGFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCJcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiTmF0dXJhbCBMYW5ndWFnZVwiXG4gICAgICAgICAgICBhY3RpdmVUeXBlPXt0aGlzLnN0YXRlLmFjdGl2ZVR5cGV9XG4gICAgICAgICAgICBwcm9kdWN0RGVzPVwiUHJvY2Vzc2luZyBvZiB0ZXh0IGluIG9yZGVyIHRvIGV4dHJhY3QgYWJzdHJhY3Qgc3ludGFjdGljIGFuZCBzZW1hbnRpYyBjb250ZW50LlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT2NyIFRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBwcmljaW5nOiBcIiQwLjEyIC8gSU5WT0lDRSArICQwLjA4IC8gQU5OT1RBVElPTlwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOiBcIkludm9pY2UsIE1lbnUsIGFuZCBGb3JtIFRyYW5zY3JpcHRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGV4dCBDYXRlZ29yaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDAuMDggLyBDQVRFR09SSVpBVElPTlwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOiBcIkNvbnRlbnQgTW9kZXJhdGlvbiwgRGF0YSBUYWdnaW5nLCBPdGhlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb21wYXJpc29uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCIkMC4wOCAvIENPTVBBUklTT05cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJEZWR1cGxpY2F0aW9uLCBBL0IgQ29tcGFyaXNvbnMsIE90aGVyc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wYy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2luZy10b2dnbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zcGFuQWN0aXZlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmQ2MmU5O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQcmljaW5nVG9nZ2xlO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.fb8e0dcc32e36e853c61.hot-update.js.map