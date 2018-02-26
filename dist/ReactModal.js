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

/***/ 10:
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

var _ReactModal = __webpack_require__(11);

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

/***/ 11:
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

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Modal = __webpack_require__(10);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.Modal = _Modal2.default;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdE1vZGFsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiTW9kYWwiLCJtb2RhbCIsImNvbnRhaW5lciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wcyIsIm9wdGlvbnMiLCJQcm9taXNlIiwic3VjY2VzcyIsInJlamVjdCIsInZpc2libGUiLCJvblN1Y2Nlc3MiLCJvblJlamVjdCIsInNldFN0YXRlIiwic3R5bGUiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJnZXRPa0J1dHRvbiIsImtleSIsImxhYmVsIiwiY2xhc3NOYW1lIiwiZ2V0WWVzQnV0dG9uIiwiZ2V0Tm9CdXR0b24iLCJSZWFjdE1vZGFsIiwic3RhdGUiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjbG9zYWJsZSIsImJ1dHRvbnMiLCJvbk1vZGFsQ2xvc2UiLCJiaW5kIiwibWFwIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25Nb2RhbEJ1dHRvblByZXNzZWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiQ29tcG9uZW50IiwiUmVhY3RMaWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7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UUUsSyxFQUFPO0FBQ2hDQSxrQkFBTUMsY0FBTjtBQUNBRCxrQkFBTUUsZUFBTjs7QUFFQSxnQkFBSUosT0FBTzlCLE9BQVgsRUFBb0I7QUFDaEIscUJBQUtxQixLQUFMLENBQVdsQixTQUFYLENBQXFCMkIsT0FBT2YsR0FBNUIsRUFBaUMsSUFBakM7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBS00sS0FBTCxDQUFXakIsUUFBWCxDQUFvQjBCLE9BQU9mLEdBQTNCLEVBQWdDLEtBQWhDO0FBQ0g7O0FBRUQsaUJBQUtWLFFBQUwsQ0FBYztBQUNWSCx5QkFBUztBQURDLGFBQWQ7QUFHSDs7OztFQWxIbUMsZ0JBQU1pQyxTOztrQkFBekJmLFU7Ozs7Ozs7Ozs7QUNsQ3JCOzs7Ozs7QUFFQSxJQUFJLE9BQU9aLE9BQU80QixRQUFkLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDNUIsV0FBTzRCLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFRDVCLE9BQU80QixRQUFQLENBQWdCNUMsS0FBaEIsbUI7Ozs7Ozs7QUNOQSwwQiIsImZpbGUiOiJSZWFjdE1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4NmVjMDk3MjllZGI0YTc4Mzk2IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuXG4vKipcbiAqIEBjbGFzcyBNb2RhbFxuICogQGNsYXNzZGVzYyBJbXBsZW1lbnRzIGEgbW9kYWwgY2xhc3MgYXMgYSBwcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1JlYWN0TW9kYWx8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kYWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5tb2RhbCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TW9kYWwsIHsgLi4udGhpcy5wcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIG1vZGFsIGFzIHByb21pc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWxTdGF0ZX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MgPSBzdWNjZXNzO1xuICAgICAgICAgICAgb3B0aW9ucy5vblJlamVjdCA9IHJlamVjdDtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zZXRTdGF0ZShvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGAkeyh3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoKSAvIDJ9cHhgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBPayBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE9rQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdvaycsXG4gICAgbGFiZWw6ICdPaycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBZZXMgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRZZXNCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ3llcycsXG4gICAgbGFiZWw6ICdZZXMnLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgTm8gYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXROb0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnbm8nLFxuICAgIGxhYmVsOiAnTm8nLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tY2FuY2VsJ1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01vZGFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNb2RhbFN0YXRlXG4gKiBAcHJvcGVydHkge01vZGFsQnV0dG9uW119IGJ1dHRvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNsb3NhYmxlXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uU3VjY2Vzc11cbiAqIEBwcm9wZXJ0eSB7TW9kYWxDbG9zZUNhbGxiYWNrfSBbb25SZWplY3RdXG4gKi9cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbW9kYWwgY2xvc2UgZXZlbnRzXG4gKlxuICogQGNhbGxiYWNrIE1vZGFsQ2xvc2VDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblByZXNzZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxCdXR0b25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBzdWNjZXNzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RNb2RhbFxuICogQGNsYXNzZGVzYyBSZWFjdCBDb21wb25lbnQgZm9yIGEgbW9kYWwgZGlhbG9nXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUmVhY3RNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TW9kYWxTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBbGVydCBtZXNzYWdlJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uIGFjdGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb25TdWNjZXNzKCkge30sXG4gICAgICAgICAgICBvblJlamVjdCgpIHt9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBtb2RhbCAke3RoaXMuc3RhdGUudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICcnfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsb3NhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyl9PiB4IDwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1dHRvbnMubWFwKHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJCdXR0b24oYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtidXR0b24ua2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTW9kYWxCdXR0b25QcmVzc2VkLmJpbmQodGhpcywgYnV0dG9uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vZGFsQ2xvc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlamVjdCgnY2xvc2UtYnV0dG9uJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b259IGJ1dHRvblxuICAgICAqL1xuICAgIG9uTW9kYWxCdXR0b25QcmVzc2VkKGJ1dHRvbiwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uU3VjY2VzcyhidXR0b24ua2V5LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoYnV0dG9uLmtleSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0TW9kYWwuanN4IiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uL2VzNi9Nb2RhbCc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuTW9kYWwgPSBNb2RhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RNb2RhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSJdLCJzb3VyY2VSb290IjoiIn0=