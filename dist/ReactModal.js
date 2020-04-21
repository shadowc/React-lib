/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ReactModal = __webpack_require__(6);

var _ReactModal2 = _interopRequireDefault(_ReactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Modal
 * @classdesc Implements a modal class as a promise
 */
var Modal = function () {
  /**
   * Modal constructor
   */
  function Modal() {
    _classCallCheck(this, Modal);

    /**
     * @type {ReactModal|null}
     * @private
     */
    this.modal = null;

    /**
     * @type {HTMLElement|null}
     * @private
     */
    this.container = null;
  }

  /**
   * Renders the modal
   *
   * @param {HTMLElement} container
   * @memberOf Modal
   * @instance
   */


  _createClass(Modal, [{
    key: 'render',
    value: function render(container) {
      this.container = container;
      this.modal = _reactDom2.default.render(_react2.default.createElement(_ReactModal2.default, _extends({}, this.props)), container);
    }

    /**
     * Shows a modal as promise
     *
     * @param {ModalState} options
     * @return {Promise}
     * @memberOf Modal
     * @instance
     */

  }, {
    key: 'show',
    value: function show(options) {
      var _this = this;

      return new Promise(function (success, reject) {
        options.visible = true;
        options.onSuccess = success;
        options.onReject = reject;

        _this.modal.setState(options);

        _this.container.style.left = (window.innerWidth - _this.container.offsetWidth) / 2 + 'px';
        _this.container.style.top = (window.innerHeight - _this.container.offsetHeight) / 2 + 'px';
      });
    }
  }]);

  return Modal;
}();

/**
 * Creates a Ok button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */


exports.default = Modal;
Modal.getOkButton = function () {
  return {
    key: 'ok',
    label: 'Ok',
    success: true,
    className: 'button button-action'
  };
};

/**
 * Creates a Yes button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getYesButton = function () {
  return {
    key: 'yes',
    label: 'Yes',
    success: true,
    className: 'button button-action'
  };
};

/**
 * Creates a No button template
 * @return {ModalButton}
 * @memberOf Modal
 * @static
 */
Modal.getNoButton = function () {
  return {
    key: 'no',
    label: 'No',
    success: false,
    className: 'button button-cancel'
  };
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Modal = __webpack_require__(12);

var _Modal2 = _interopRequireDefault(_Modal);

var _ReactModal = __webpack_require__(6);

var _ReactModal2 = _interopRequireDefault(_ReactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactModal = _ReactModal2.default;
window.ReactLib.Modal = _Modal2.default;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {Object} ModalState
 * @property {ModalButton[]} buttons
 * @property {string} title
 * @property {string} message
 * @property {boolean} [visible]
 * @property {boolean} closable
 * @property {ModalCloseCallback} [onSuccess]
 * @property {ModalCloseCallback} [onReject]
 */

/**
 * Callback for modal close events
 *
 * @callback ModalCloseCallback
 * @param {string} buttonPressed
 * @param {boolean} success
 */

/**
 * @typedef {Object} ModalButton
 * @property {string} key
 * @property {string} label
 * @property {boolean} success
 * @property {string} className
 */

/**
 * @class ReactModal
 * @classdesc React Component for a modal dialog
 * @extends React.Component
 */
var ReactModal = function (_React$Component) {
    _inherits(ReactModal, _React$Component);

    /**
     * ReactModal constructor
     */
    function ReactModal() {
        _classCallCheck(this, ReactModal);

        /**
         * @type {ModalState}
         */
        var _this = _possibleConstructorReturn(this, (ReactModal.__proto__ || Object.getPrototypeOf(ReactModal)).call(this));

        _this.state = {
            title: 'Alert',
            message: 'Alert message',
            visible: false,
            closable: false,
            buttons: [{
                key: 'close',
                label: 'Close',
                success: true,
                className: 'button action'
            }],
            onSuccess: function onSuccess() {},
            onReject: function onReject() {}
        };
        return _this;
    }

    /**
     * Render the modal
     *
     * @memberOf ReactModal
     * @instance
     * @return {HTMLElement}
     */


    _createClass(ReactModal, [{
        key: 'render',
        value: function render() {
            var className = 'modal ' + (this.state.visible ? 'visible' : '');
            return _react2.default.createElement(
                'div',
                { className: className },
                _react2.default.createElement(
                    'h2',
                    null,
                    this.state.title,
                    this.state.closable ? _react2.default.createElement(
                        'span',
                        { className: 'close', onClick: this.onModalClose.bind(this) },
                        ' x '
                    ) : null
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.state.message
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'buttons' },
                    this.state.buttons.map(this.renderButton.bind(this))
                )
            );
        }

        /**
         * Renders a modal button
         *
         * @memberOf ReactModal
         * @instance
         * @param {ModalButton} button
         * @return {HTMLElement}
         */

    }, {
        key: 'renderButton',
        value: function renderButton(button) {
            return _react2.default.createElement(
                'button',
                {
                    key: button.key,
                    className: button.className,
                    onClick: this.onModalButtonPressed.bind(this, button)
                },
                button.label
            );
        }

        /**
         * Called when clicked on the close modal
         *
         * @memberOf ReactModal
         * @instance
         * @param {Event} event
         */

    }, {
        key: 'onModalClose',
        value: function onModalClose(event) {
            event.preventDefault();
            event.stopPropagation();

            this.state.onReject('close-button', false);

            this.setState({
                visible: false
            });
        }

        /**
         * Called when clicked on a modal button
         *
         * @memberOf ReactModal
         * @instance
         * @param {Event} event
         * @param {ModalButton} button
         */

    }, {
        key: 'onModalButtonPressed',
        value: function onModalButtonPressed(button, event) {
            event.preventDefault();
            event.stopPropagation();

            if (button.success) {
                this.state.onSuccess(button.key, true);
            } else {
                this.state.onReject(button.key, false);
            }

            this.setState({
                visible: false
            });
        }
    }]);

    return ReactModal;
}(_react2.default.Component);

exports.default = ReactModal;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk1YTI2ZTY4YjlmYzY4NmY5NjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvUmVhY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RNb2RhbC5qc3giXSwibmFtZXMiOlsiTW9kYWwiLCJtb2RhbCIsImNvbnRhaW5lciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wcyIsIm9wdGlvbnMiLCJQcm9taXNlIiwic3VjY2VzcyIsInJlamVjdCIsInZpc2libGUiLCJvblN1Y2Nlc3MiLCJvblJlamVjdCIsInNldFN0YXRlIiwic3R5bGUiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRPa0J1dHRvbiIsImtleSIsImxhYmVsIiwiY2xhc3NOYW1lIiwiZ2V0WWVzQnV0dG9uIiwiZ2V0Tm9CdXR0b24iLCJSZWFjdExpYiIsIlJlYWN0TW9kYWwiLCJzdGF0ZSIsInRpdGxlIiwibWVzc2FnZSIsImNsb3NhYmxlIiwiYnV0dG9ucyIsIm9uTW9kYWxDbG9zZSIsImJpbmQiLCJtYXAiLCJyZW5kZXJCdXR0b24iLCJidXR0b24iLCJvbk1vZGFsQnV0dG9uUHJlc3NlZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7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Ozs7cUNBT2FpQixLLEVBQU87QUFDaEJBLGtCQUFNQyxjQUFOO0FBQ0FELGtCQUFNRSxlQUFOOztBQUVBLGlCQUFLYixLQUFMLENBQVdsQixRQUFYLENBQW9CLGNBQXBCLEVBQW9DLEtBQXBDOztBQUVBLGlCQUFLQyxRQUFMLENBQWM7QUFDVkgseUJBQVM7QUFEQyxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7OzZDQVFxQjZCLE0sRUFBUUUsSyxFQUFPO0FBQ2hDQSxrQkFBTUMsY0FBTjtBQUNBRCxrQkFBTUUsZUFBTjs7QUFFQSxnQkFBSUosT0FBTy9CLE9BQVgsRUFBb0I7QUFDaEIscUJBQUtzQixLQUFMLENBQVduQixTQUFYLENBQXFCNEIsT0FBT2hCLEdBQTVCLEVBQWlDLElBQWpDO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUtPLEtBQUwsQ0FBV2xCLFFBQVgsQ0FBb0IyQixPQUFPaEIsR0FBM0IsRUFBZ0MsS0FBaEM7QUFDSDs7QUFFRCxpQkFBS1YsUUFBTCxDQUFjO0FBQ1ZILHlCQUFTO0FBREMsYUFBZDtBQUdIOzs7O0VBbEhtQyxnQkFBTWtDLFM7O2tCQUF6QmYsVSIsImZpbGUiOiJSZWFjdE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM5NWEyNmU2OGI5ZmM2ODZmOTYzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuXG4vKipcbiAqIEBjbGFzcyBNb2RhbFxuICogQGNsYXNzZGVzYyBJbXBsZW1lbnRzIGEgbW9kYWwgY2xhc3MgYXMgYSBwcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1JlYWN0TW9kYWx8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kYWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5tb2RhbCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TW9kYWwsIHsgLi4udGhpcy5wcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIG1vZGFsIGFzIHByb21pc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWxTdGF0ZX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MgPSBzdWNjZXNzO1xuICAgICAgICAgICAgb3B0aW9ucy5vblJlamVjdCA9IHJlamVjdDtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zZXRTdGF0ZShvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGAkeyh3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoKSAvIDJ9cHhgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBPayBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE9rQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdvaycsXG4gICAgbGFiZWw6ICdPaycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBZZXMgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRZZXNCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ3llcycsXG4gICAgbGFiZWw6ICdZZXMnLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgTm8gYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXROb0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnbm8nLFxuICAgIGxhYmVsOiAnTm8nLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tY2FuY2VsJ1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01vZGFsLmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uL2VzNi9Nb2RhbCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICcuLi9qc3gvUmVhY3RNb2RhbCc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuUmVhY3RNb2RhbCA9IFJlYWN0TW9kYWw7XG53aW5kb3cuUmVhY3RMaWIuTW9kYWwgPSBNb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RNb2RhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxTdGF0ZVxuICogQHByb3BlcnR5IHtNb2RhbEJ1dHRvbltdfSBidXR0b25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt2aXNpYmxlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBjbG9zYWJsZVxuICogQHByb3BlcnR5IHtNb2RhbENsb3NlQ2FsbGJhY2t9IFtvblN1Y2Nlc3NdXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uUmVqZWN0XVxuICovXG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIG1vZGFsIGNsb3NlIGV2ZW50c1xuICpcbiAqIEBjYWxsYmFjayBNb2RhbENsb3NlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25QcmVzc2VkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGFsQnV0dG9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30ga2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0TW9kYWxcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgQ29tcG9uZW50IGZvciBhIG1vZGFsIGRpYWxvZ1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFJlYWN0TW9kYWwgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01vZGFsU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQWxlcnQgbWVzc2FnZScsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBhY3Rpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uU3VjY2VzcygpIHt9LFxuICAgICAgICAgICAgb25SZWplY3QoKSB7fVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgbW9kYWwgJHt0aGlzLnN0YXRlLnZpc2libGUgPyAndmlzaWJsZScgOiAnJ31gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbG9zYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLm9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpfT4geCA8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25zLm1hcCh0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtNb2RhbEJ1dHRvbn0gYnV0dG9uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQnV0dG9uKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17YnV0dG9uLmtleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk1vZGFsQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMsIGJ1dHRvbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbi5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb2RhbENsb3NlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoJ2Nsb3NlLWJ1dHRvbicsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKi9cbiAgICBvbk1vZGFsQnV0dG9uUHJlc3NlZChidXR0b24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChidXR0b24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblN1Y2Nlc3MoYnV0dG9uLmtleSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUmVqZWN0KGJ1dHRvbi5rZXksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=