webpackHotUpdate_N_E("pages/campaigns/requests/new",{

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar RequestNew = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(RequestNew, _Component);\n\n  var _super = _createSuper(RequestNew);\n\n  function RequestNew() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, RequestNew);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      value: \"\",\n      description: \"\",\n      recipient: \"\"\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RequestNew, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Form\"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Form\"].Field, null, __jsx(\"label\", null, \"Description\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Input\"], {\n        value: this.state.description,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            description: e.target.value\n          });\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Form\"].Field, null, __jsx(\"label\", null, \"Value in Ether\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Input\"], {\n        value: this.state.value,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            value: e.target.value\n          });\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Form\"].Field, null, __jsx(\"label\", null, \"Recipient\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Input\"], {\n        value: this.state.recipient,\n        onChange: function onChange(e) {\n          return _this2.setState({\n            recipient: e.target.value\n          });\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        primary: true\n      }, \"Create!\")));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                address = props.query.address;\n                return _context.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return RequestNew;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz9kOWZjIl0sIm5hbWVzIjpbIlJlcXVlc3ROZXciLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50Iiwic3RhdGUiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJwcm9wcyIsImFkZHJlc3MiLCJxdWVyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxXQUFLLEVBQUUsRUFERDtBQUVOQyxpQkFBVyxFQUFFLEVBRlA7QUFHTkMsZUFBUyxFQUFFO0FBSEwsSzs7Ozs7Ozs2QkFZQztBQUFBOztBQUNQLGFBQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsdURBQUQsUUFDRSxNQUFDLHVEQUFELENBQU0sS0FBTixRQUNFLG1DQURGLEVBRUUsTUFBQyx3REFBRDtBQUNFLGFBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdGLFdBRHBCO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVKLHVCQUFXLEVBQUVHLENBQUMsQ0FBQ0UsTUFBRixDQUFTTjtBQUF4QixXQUFkLENBQVA7QUFBQTtBQUZaLFFBRkYsQ0FERixFQVNFLE1BQUMsdURBQUQsQ0FBTSxLQUFOLFFBQ0Usc0NBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0gsS0FEcEI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUwsaUJBQUssRUFBRUksQ0FBQyxDQUFDRSxNQUFGLENBQVNOO0FBQWxCLFdBQWQsQ0FBUDtBQUFBO0FBRlosUUFGRixDQVRGLEVBaUJFLE1BQUMsdURBQUQsQ0FBTSxLQUFOLFFBQ0UsaUNBREYsRUFFRSxNQUFDLHdEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0QsU0FEcEI7QUFFRSxnQkFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUgscUJBQVMsRUFBRUUsQ0FBQyxDQUFDRSxNQUFGLENBQVNOO0FBQXRCLFdBQWQsQ0FBUDtBQUFBO0FBRlosUUFGRixDQWpCRixFQXlCRSxNQUFDLHlEQUFEO0FBQVEsZUFBTztBQUFmLG1CQXpCRixDQURGLENBREY7QUErQkQ7Ozs7K05BdEM0Qk8sSzs7Ozs7O0FBQ25CQyx1QixHQUFZRCxLQUFLLENBQUNFLEssQ0FBbEJELE87aURBRUQ7QUFBRUEseUJBQU8sRUFBUEE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVZjRSwrQzs7QUFnRFZYLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIE1lc3NhZ2UsIElucHV0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xuXG5jbGFzcyBSZXF1ZXN0TmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcmVjaXBpZW50OiBcIlwiLFxuICB9O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgcmV0dXJuIHsgYWRkcmVzcyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/new.js\n");

/***/ })

})