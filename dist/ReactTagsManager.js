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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef {object} TagEntity
 * @property {number|null} id
 * @property {string|null} tagId
 * @property {string} text
 */

/**
 * @typedef {object} TagsState
 * @property {TagEntity[]} tags
 * @property {TagEntity[]} suggestions
 */

/**
 * @class ReactTagsDisplay
 * @classdesc Display class for tag elements
 * @extends React.Component
 */
var ReactTagsDisplay = function (_React$Component) {
    _inherits(ReactTagsDisplay, _React$Component);

    function ReactTagsDisplay(props) {
        _classCallCheck(this, ReactTagsDisplay);

        /**
         *
         * @type TagsState
         */
        var _this = _possibleConstructorReturn(this, (ReactTagsDisplay.__proto__ || Object.getPrototypeOf(ReactTagsDisplay)).call(this, props));

        _this.state = {
            tags: [],
            suggestions: []
        };

        /**
         * @type {HTMLElement|null}
         */
        _this.input = null;

        /**
         * @type {Element}
         */
        _this.body = document.getElementsByTagName('body')[0];

        /**
         * @type {HTMLElement[]}
         */
        _this.hiddenTags = _this.props.hiddenFieldsContainer.children;

        /**
         * The tagIndex to set for the new hidden elements in the form
         *
         * @type {number}
         */
        _this.newTagIndex = _this.hiddenTags.length / 2;

        /**
         * Placeholder for the suggestions box timeout
         *
         * @type {number|null}
         */
        _this.suggestionTimeout = null;

        /**
         * Cache for the previous value before keyUp
         *
         * @type {string}
         */
        _this.prevInputValue = '';

        (0, _jquery2.default)(document).on('click', _this.clearSuggestions.bind(_this));
        return _this;
    }

    /**
     * Renders the tag component
     *
     * @memberOf ReactTagsDisplay
     * @instance
     * @return {HTMLElement}
     */


    _createClass(ReactTagsDisplay, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    className: 'tag-list',
                    onClick: this.handleFocus.bind(this)
                },
                this.state.tags.map(this.renderTag.bind(this)),
                _react2.default.createElement('input', {
                    ref: function ref(input) {
                        _this2.input = input;
                    },
                    type: 'text',
                    className: 'transparent',
                    id: this.props.tagsTextLabel ? this.props.tagsTextLabel : 'tags',
                    name: this.props.tagsTextLabel ? this.props.tagsTextLabel : 'tags',
                    onKeyPress: this.onKeyPress.bind(this),
                    onKeyUp: this.onKeyUp.bind(this)
                }),
                this.state.suggestions.length ? _react2.default.createElement(
                    'div',
                    {
                        className: 'tag_suggestions'
                    },
                    this.state.suggestions.map(this.renderSuggestion.bind(this))
                ) : ''
            );
        }

        /**
         * Renders a single tag
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {TagEntity} tag
         * @return {HTMLElement}
         */

    }, {
        key: 'renderTag',
        value: function renderTag(tag) {
            return _react2.default.createElement(
                'span',
                {
                    key: tag.text
                },
                tag.text,
                ' ',
                _react2.default.createElement(
                    'a',
                    { href: '#', onClick: this.removeTag.bind(this, tag) },
                    'x'
                )
            );
        }

        /**
         * Renders a tag suggestion
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {TagEntity} tag
         * @return {HTMLElement}
         */

    }, {
        key: 'renderSuggestion',
        value: function renderSuggestion(tag) {
            var tagRegExp = new RegExp('^(.*)(' + this.input.value + ')(.*)$', 'i');
            var tagParts = tag.text.match(tagRegExp);
            var innerTag = tag.text;

            if (tagParts !== null && tagParts.length === 4) {
                var preTag = tagParts[1];
                var tagText = tagParts[2];
                var postTag = tagParts[3];

                innerTag = _react2.default.createElement(
                    'span',
                    null,
                    preTag,
                    _react2.default.createElement(
                        'strong',
                        null,
                        tagText
                    ),
                    postTag
                );
            } else {
                innerTag = _react2.default.createElement(
                    'span',
                    null,
                    tag.text
                );
            }

            return _react2.default.createElement(
                'a',
                { href: '#', key: tag.text, onClick: this.onSuggestionClick.bind(this, tag) },
                innerTag
            );
        }

        /**
         * Adds a tag by text only (new tag)
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {string} tagText
         */

    }, {
        key: 'addTag',
        value: function addTag(tagText) {
            // trim and remove trailing semicolons
            tagText = tagText.trim();

            if (tagText.endsWith(',')) {
                tagText = tagText.substr(0, tagText.length - 1);
            }

            // avoid empty tags
            if (tagText === '') {
                this.setState({
                    suggestions: []
                });

                return;
            }

            // avoid repeated tags
            for (var i = 0; i < this.state.tags.length; i++) {
                if (this.state.tags[i].text === tagText) {
                    this.setState({
                        suggestions: []
                    });

                    return;
                }
            }

            // try to get tag id from suggestions
            var tagIdFromSuggestions = 0;
            for (var _i = 0; _i < this.state.suggestions.length; _i++) {
                var suggestion = this.state.suggestions[_i];

                if (suggestion.text.toLowerCase() === tagText.toLowerCase()) {
                    tagIdFromSuggestions = suggestion.id;
                    tagText = suggestion.text;
                    break;
                }
            }

            var newFieldTemplate = this.props.hiddenFieldsContainer.getAttribute('data-prototype').replace(/__name__/g, this.newTagIndex.toString(10));

            this.newTagIndex += 1;

            (0, _jquery2.default)(this.props.hiddenFieldsContainer).append(newFieldTemplate);
            this.hiddenTags[this.hiddenTags.length - 2].value = tagIdFromSuggestions;
            this.hiddenTags[this.hiddenTags.length - 1].value = tagText;

            var newTagIds = this.hiddenTags[this.hiddenTags.length - 2].id + '|' + this.hiddenTags[this.hiddenTags.length - 1].id;

            this.state.tags.push({
                id: null,
                tagId: newTagIds,
                text: tagText
            });

            this.setState({
                tags: this.state.tags,
                suggestions: []
            });

            this.input.focus();
        }

        /**
         * Removes a tag from the collection
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {TagEntity} tag
         * @param {Event|null} event
         */

    }, {
        key: 'removeTag',
        value: function removeTag(tag, event) {
            if (event) {
                event.preventDefault();
            }

            var formFields = tag.tagId.split('|');

            formFields.forEach(function (fieldId) {
                var field = document.getElementById(fieldId);
                field.parentNode.removeChild(field);
            });

            for (var i = 0; i < this.state.tags.length; i++) {
                var stateTag = this.state.tags[i];

                if (stateTag.text === tag.text) {
                    this.state.tags.splice(i, 1);
                    break;
                }
            }

            this.setState({
                tags: this.state.tags
            });
        }

        /**
         * Resets the suggestions timeout handler
         *
         * @memberOf ReactTagsDisplay
         * @instance
         */

    }, {
        key: 'resetSuggestionsTimeout',
        value: function resetSuggestionsTimeout() {
            if (this.suggestionTimeout !== null) {
                clearTimeout(this.suggestionTimeout);
                this.suggestionTimeout = null;
            }
        }

        /**
         * Makes a call to suggestions and updates the set
         *
         * @memberOf ReactTagsDisplay
         * @instance
         */

    }, {
        key: 'updateSuggestions',
        value: function updateSuggestions() {
            var _this3 = this;

            if (this.input.value !== '') {
                this.resetSuggestionsTimeout();

                this.suggestionTimeout = setTimeout(function () {
                    var tagRoute = _this3.props.xhrRouteCallback(_this3.input.value);

                    _jquery2.default.ajax(tagRoute, {
                        method: 'GET'
                    }).then(function (data) {
                        var tags = JSON.parse(data);
                        if (typeof tags.map === 'function') {
                            _this3.setState({
                                suggestions: tags
                            });
                        }
                    });
                }, 200);
            } else {
                this.resetSuggestionsTimeout();

                this.setState({
                    suggestions: []
                });
            }
        }
        /**
         * Reacts to key presses on tags input
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {Event} event
         */

    }, {
        key: 'onKeyUp',
        value: function onKeyUp(event) {
            /**
             * We need to look at the value that was on the input BEFORE onKeyUp updates the
             * input value, because we only want to delete the previous tag if the input WAS
             * empty before pressing Backspace
             */
            if (event.key === 'Backspace' && this.prevInputValue === '') {
                if (this.state.tags.length) {
                    this.state.tags.splice(this.state.tags.length - 1, 1);
                    this.setState({
                        tags: this.state.tags
                    });
                }
            }

            var span = document.createElement('span');
            span.style.fontSize = '16px';
            span.innerHTML = this.input.value.replace(/\s/g, '&nbsp;');
            this.body.appendChild(span);
            this.input.style.width = span.offsetWidth + 'px';
            this.body.removeChild(span);

            this.prevInputValue = this.input.value;
            this.updateSuggestions();
        }

        /**
         * KeyPress event handler
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {Event} event
         */

    }, {
        key: 'onKeyPress',
        value: function onKeyPress(event) {
            var evtKey = event.key;

            switch (evtKey) {
                case ',':
                case 'Enter':
                    this.addTag(this.input.value);
                    this.input.value = '';
                    this.prevInputValue = '';
                    this.input.style.width = '5px';

                    event.preventDefault();
                    break;
                default:
                    break;
            }
        }

        /**
         * Reacts to clicks on the tags input
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {Event} event
         */

    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            event.preventDefault();

            this.input.focus();
            this.updateSuggestions();
        }

        /**
         * Inserts a suggested tag
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {TagEntity} tag
         * @param {Event} event
         */

    }, {
        key: 'onSuggestionClick',
        value: function onSuggestionClick(tag, event) {
            event.preventDefault();
            event.stopPropagation();

            this.addTag(tag.text);
            this.input.value = '';
            this.prevInputValue = '';
        }

        /**
         * Clear suggestions on document click
         *
         * @memberOf ReactTagsDisplay
         * @instance
         * @param {Event} event
         */

    }, {
        key: 'clearSuggestions',
        value: function clearSuggestions(event) {
            var currentTarget = event.target;

            while (currentTarget !== null) {
                if (currentTarget.className === 'tag_suggestions') {
                    return;
                }

                currentTarget = currentTarget.parentNode;
            }

            this.setState({
                suggestions: []
            });
        }
    }]);

    return ReactTagsDisplay;
}(_react2.default.Component);

exports.default = ReactTagsDisplay;


ReactTagsDisplay.propTypes = {
    hiddenFieldsContainer: _propTypes2.default.instanceOf(HTMLElement).isRequired,
    tagsTextLabel: _propTypes2.default.string,
    xhrRouteCallback: _propTypes2.default.func.isRequired
};

ReactTagsDisplay.defaultProps = {
    tagsTextLabel: 'text'
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ReactTagsDisplay = __webpack_require__(7);

var _ReactTagsDisplay2 = _interopRequireDefault(_ReactTagsDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TagsManager Constructor - Loads the tags present in the form
 *
 * @param {HTMLElement} hiddenFieldsContainer - The container for the hidden fields
 * @param {HTMLElement} tagsContainer - The container where the tags will be rendered
 * @param {string} tagFieldNamePrefix - The field name of the hidden tag fields
 * @param {string} tagsTextLabel - The for attribute for the tags label
 * @param {function} hxrRouteCallback - The route to the xhr API call to bring suggestions
 *
 * @class TagsManager
 * @classdesc Manager for tag editing in posts
 */
var TagsManager = function TagsManager(hiddenFieldsContainer, tagsContainer, tagFieldNamePrefix, tagsTextLabel, xhrRouteCallback) {
    _classCallCheck(this, TagsManager);

    /**
     * @type {TagEntity[]}
     */
    var tags = [];

    // Process existing form fields
    var tagFields = _jquery2.default.find('input[type=hidden]');

    var currentTagId = 0;
    var currentTag = {};

    tagFields.forEach(function (field) {
        var tagRegExp = new RegExp('^' + tagFieldNamePrefix + '\\_(\\d+)\\_(id|text)$');

        var _field$id$match = field.id.match(tagRegExp),
            _field$id$match2 = _slicedToArray(_field$id$match, 3),
            label = _field$id$match2[0],
            tagId = _field$id$match2[1],
            tagField = _field$id$match2[2];

        if (Number(tagId) !== currentTagId) {
            tags.push(currentTag);
            currentTagId = Number(tagId);
            currentTag = {};
        }

        currentTag.tagId = currentTag.tagId ? currentTag.tagId + '|' + label : label;

        currentTag[tagField] = field.value;
    });

    if (currentTag.id && currentTag.text) {
        tags.push(currentTag);
    }

    this.tagsDisplay = _reactDom2.default.render(_react2.default.createElement(_ReactTagsDisplay2.default, {
        hiddenFieldsContainer: hiddenFieldsContainer,
        tagsTextLabel: tagsTextLabel,
        xhrRouteCallback: xhrRouteCallback
    }), tagsContainer);

    this.tagsDisplay.setState({
        tags: tags
    });
};

exports.default = TagsManager;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TagsManager = __webpack_require__(13);

var _TagsManager2 = _interopRequireDefault(_TagsManager);

var _ReactTagsDisplay = __webpack_require__(7);

var _ReactTagsDisplay2 = _interopRequireDefault(_ReactTagsDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactTagsDisplay = _ReactTagsDisplay2.default;
window.ReactLib.TagsManager = _TagsManager2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI3ZDBlYmM0NmFiNGQ3MzBlYWMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9UYWdzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0VGFnc01hbmFnZXIuanMiXSwibmFtZXMiOlsiUmVhY3RUYWdzRGlzcGxheSIsInByb3BzIiwic3RhdGUiLCJ0YWdzIiwic3VnZ2VzdGlvbnMiLCJpbnB1dCIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGlkZGVuVGFncyIsImhpZGRlbkZpZWxkc0NvbnRhaW5lciIsImNoaWxkcmVuIiwibmV3VGFnSW5kZXgiLCJsZW5ndGgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiYmluZCIsImhhbmRsZUZvY3VzIiwibWFwIiwicmVuZGVyVGFnIiwidGFnc1RleHRMYWJlbCIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwicmVuZGVyU3VnZ2VzdGlvbiIsInRhZyIsInRleHQiLCJyZW1vdmVUYWciLCJ0YWdSZWdFeHAiLCJSZWdFeHAiLCJ2YWx1ZSIsInRhZ1BhcnRzIiwibWF0Y2giLCJpbm5lclRhZyIsInByZVRhZyIsInRhZ1RleHQiLCJwb3N0VGFnIiwib25TdWdnZXN0aW9uQ2xpY2siLCJ0cmltIiwiZW5kc1dpdGgiLCJzdWJzdHIiLCJzZXRTdGF0ZSIsImkiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImlkIiwibmV3RmllbGRUZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImFwcGVuZCIsIm5ld1RhZ0lkcyIsInB1c2giLCJ0YWdJZCIsImZvY3VzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZvckVhY2giLCJmaWVsZElkIiwiZmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwic3BsaWNlIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwia2V5Iiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImZvbnRTaXplIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIkhUTUxFbGVtZW50IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJUYWdzTWFuYWdlciIsInRhZ3NDb250YWluZXIiLCJ0YWdGaWVsZE5hbWVQcmVmaXgiLCJ0YWdGaWVsZHMiLCJmaW5kIiwiY3VycmVudFRhZ0lkIiwiY3VycmVudFRhZyIsImxhYmVsIiwidGFnRmllbGQiLCJOdW1iZXIiLCJ0YWdzRGlzcGxheSIsInJlbmRlciIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0g7O0FBRURBLG1CQUFXdkQsS0FBWCxHQUFtQnVELFdBQVd2RCxLQUFYLEdBQ1p1RCxXQUFXdkQsS0FEQyxTQUNRd0QsS0FEUixHQUVmQSxLQUZKOztBQUlBRCxtQkFBV0UsUUFBWCxJQUF1QmpELE1BQU1oQyxLQUE3QjtBQUNILEtBZkQ7O0FBaUJBLFFBQUkrRSxXQUFXL0QsRUFBWCxJQUFpQitELFdBQVduRixJQUFoQyxFQUFzQztBQUNsQ3hCLGFBQUttRCxJQUFMLENBQVV3RCxVQUFWO0FBQ0g7O0FBRUQsU0FBS0ksV0FBTCxHQUFtQixtQkFBU0MsTUFBVCxDQUFnQixnQkFBTWpDLGFBQU4sNkJBQXNDO0FBQ3JFeEUsb0RBRHFFO0FBRXJFWSxvQ0FGcUU7QUFHckVtRDtBQUhxRSxLQUF0QyxDQUFoQixFQUlmZ0MsYUFKZSxDQUFuQjs7QUFNQSxTQUFLUyxXQUFMLENBQWlCeEUsUUFBakIsQ0FBMEI7QUFDdEJ2QztBQURzQixLQUExQjtBQUdILEM7O2tCQTNDZ0JxRyxXOzs7Ozs7Ozs7Ozs7O0FDakJyQjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE9BQU9ZLE9BQU9DLFFBQWQsS0FBMkIsV0FBL0IsRUFBNEM7QUFDeENELFdBQU9DLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREQsT0FBT0MsUUFBUCxDQUFnQnJILGdCQUFoQjtBQUNBb0gsT0FBT0MsUUFBUCxDQUFnQmIsV0FBaEIseUIiLCJmaWxlIjoiUmVhY3RUYWdzTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMjdkMGViYzQ2YWI0ZDczMGVhYyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb3BUeXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ0VudGl0eVxuICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHRhZ0lkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnc1N0YXRlXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSB0YWdzXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSBzdWdnZXN0aW9uc1xuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXlcbiAqIEBjbGFzc2Rlc2MgRGlzcGxheSBjbGFzcyBmb3IgdGFnIGVsZW1lbnRzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWdzRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBUYWdzU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0YWdJbmRleCB0byBzZXQgZm9yIHRoZSBuZXcgaGlkZGVuIGVsZW1lbnRzIGluIHRoZSBmb3JtXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ID0gdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAvIDI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgc3VnZ2VzdGlvbnMgYm94IHRpbWVvdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIGZvciB0aGUgcHJldmlvdXMgdmFsdWUgYmVmb3JlIGtleVVwXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5jbGVhclN1Z2dlc3Rpb25zLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHRhZyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFncy5tYXAodGhpcy5yZW5kZXJUYWcuYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuaW5wdXQgPSBpbnB1dDsgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnX3N1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubWFwKHRoaXMucmVuZGVyU3VnZ2VzdGlvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyVGFnKHRhZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e3RhZy50ZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWcudGV4dH0gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZVRhZy5iaW5kKHRoaXMsIHRhZyl9Png8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHRhZyBzdWdnZXN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJTdWdnZXN0aW9uKHRhZykge1xuICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeKC4qKSgke3RoaXMuaW5wdXQudmFsdWV9KSguKikkYCwgJ2knKTtcbiAgICAgICAgY29uc3QgdGFnUGFydHMgPSB0YWcudGV4dC5tYXRjaCh0YWdSZWdFeHApO1xuICAgICAgICBsZXQgaW5uZXJUYWcgPSB0YWcudGV4dDtcblxuICAgICAgICBpZiAodGFnUGFydHMgIT09IG51bGwgJiYgdGFnUGFydHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmVUYWcgPSB0YWdQYXJ0c1sxXTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RleHQgPSB0YWdQYXJ0c1syXTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RUYWcgPSB0YWdQYXJ0c1szXTtcblxuICAgICAgICAgICAgaW5uZXJUYWcgPSAoPHNwYW4+e3ByZVRhZ308c3Ryb25nPnt0YWdUZXh0fTwvc3Ryb25nPntwb3N0VGFnfTwvc3Bhbj4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5uZXJUYWcgPSA8c3Bhbj57dGFnLnRleHR9PC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGtleT17dGFnLnRleHR9IG9uQ2xpY2s9e3RoaXMub25TdWdnZXN0aW9uQ2xpY2suYmluZCh0aGlzLCB0YWcpfT57aW5uZXJUYWd9PC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0YWcgYnkgdGV4dCBvbmx5IChuZXcgdGFnKVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnVGV4dFxuICAgICAqL1xuICAgIGFkZFRhZyh0YWdUZXh0KSB7XG4gICAgICAgIC8vIHRyaW0gYW5kIHJlbW92ZSB0cmFpbGluZyBzZW1pY29sb25zXG4gICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnRyaW0oKTtcblxuICAgICAgICBpZiAodGFnVGV4dC5lbmRzV2l0aCgnLCcpKSB7XG4gICAgICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC5zdWJzdHIoMCwgdGFnVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIGVtcHR5IHRhZ3NcbiAgICAgICAgaWYgKHRhZ1RleHQgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCByZXBlYXRlZCB0YWdzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzW2ldLnRleHQgPT09IHRhZ1RleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cnkgdG8gZ2V0IHRhZyBpZCBmcm9tIHN1Z2dlc3Rpb25zXG4gICAgICAgIGxldCB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbiA9IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9uLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdGFnVGV4dC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9uLmlkO1xuICAgICAgICAgICAgICAgIHRhZ1RleHQgPSBzdWdnZXN0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdGaWVsZFRlbXBsYXRlID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdG90eXBlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX25hbWVfXy9nLCB0aGlzLm5ld1RhZ0luZGV4LnRvU3RyaW5nKDEwKSk7XG5cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCArPSAxO1xuXG4gICAgICAgICQodGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIpLmFwcGVuZChuZXdGaWVsZFRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS52YWx1ZSA9IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLnZhbHVlID0gdGFnVGV4dDtcblxuICAgICAgICBjb25zdCBuZXdUYWdJZHMgPVxuICAgICAgICAgICAgYCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS5pZH18JHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLmlkfWA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICB0YWdJZDogbmV3VGFnSWRzLFxuICAgICAgICAgICAgdGV4dDogdGFnVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFncyxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHRhZyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgcmVtb3ZlVGFnKHRhZywgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybUZpZWxkcyA9IHRhZy50YWdJZC5zcGxpdCgnfCcpO1xuXG4gICAgICAgIGZvcm1GaWVsZHMuZm9yRWFjaCgoZmllbGRJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICAgICAgICAgIGZpZWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmllbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVUYWcgPSB0aGlzLnN0YXRlLnRhZ3NbaV07XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZVRhZy50ZXh0ID09PSB0YWcudGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHN1Z2dlc3Rpb25zIHRpbWVvdXQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBjYWxsIHRvIHN1Z2dlc3Rpb25zIGFuZCB1cGRhdGVzIHRoZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlU3VnZ2VzdGlvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFnUm91dGUgPSB0aGlzLnByb3BzLnhoclJvdXRlQ2FsbGJhY2sodGhpcy5pbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgodGFnUm91dGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFncy5tYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB0YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8ga2V5IHByZXNzZXMgb24gdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIG5lZWQgdG8gbG9vayBhdCB0aGUgdmFsdWUgdGhhdCB3YXMgb24gdGhlIGlucHV0IEJFRk9SRSBvbktleVVwIHVwZGF0ZXMgdGhlXG4gICAgICAgICAqIGlucHV0IHZhbHVlLCBiZWNhdXNlIHdlIG9ubHkgd2FudCB0byBkZWxldGUgdGhlIHByZXZpb3VzIHRhZyBpZiB0aGUgaW5wdXQgV0FTXG4gICAgICAgICAqIGVtcHR5IGJlZm9yZSBwcmVzc2luZyBCYWNrc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnICYmIHRoaXMucHJldklucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5pbnB1dC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpO1xuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHtzcGFuLm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgdGhpcy5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pO1xuXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2V5UHJlc3MgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZ0S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgICAgIHN3aXRjaCAoZXZ0S2V5KSB7XG4gICAgICAgIGNhc2UgKCcsJyk6XG4gICAgICAgIGNhc2UgKCdFbnRlcicpOlxuICAgICAgICAgICAgdGhpcy5hZGRUYWcodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gJzVweCc7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGNsaWNrcyBvbiB0aGUgdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIHN1Z2dlc3RlZCB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25TdWdnZXN0aW9uQ2xpY2sodGFnLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmFkZFRhZyh0YWcudGV4dCk7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1Z2dlc3Rpb25zIG9uIGRvY3VtZW50IGNsaWNrXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xlYXJTdWdnZXN0aW9ucyhldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudFRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09PSAndGFnX3N1Z2dlc3Rpb25zJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuUmVhY3RUYWdzRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gICAgaGlkZGVuRmllbGRzQ29udGFpbmVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihIVE1MRWxlbWVudCkuaXNSZXF1aXJlZCxcbiAgICB0YWdzVGV4dExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHhoclJvdXRlQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblJlYWN0VGFnc0Rpc3BsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhZ3NUZXh0TGFiZWw6ICd0ZXh0J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG4vKipcbiAqIFRhZ3NNYW5hZ2VyIENvbnN0cnVjdG9yIC0gTG9hZHMgdGhlIHRhZ3MgcHJlc2VudCBpbiB0aGUgZm9ybVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhpZGRlbkZpZWxkc0NvbnRhaW5lciAtIFRoZSBjb250YWluZXIgZm9yIHRoZSBoaWRkZW4gZmllbGRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWdzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgdGFncyB3aWxsIGJlIHJlbmRlcmVkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnRmllbGROYW1lUHJlZml4IC0gVGhlIGZpZWxkIG5hbWUgb2YgdGhlIGhpZGRlbiB0YWcgZmllbGRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnc1RleHRMYWJlbCAtIFRoZSBmb3IgYXR0cmlidXRlIGZvciB0aGUgdGFncyBsYWJlbFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaHhyUm91dGVDYWxsYmFjayAtIFRoZSByb3V0ZSB0byB0aGUgeGhyIEFQSSBjYWxsIHRvIGJyaW5nIHN1Z2dlc3Rpb25zXG4gKlxuICogQGNsYXNzIFRhZ3NNYW5hZ2VyXG4gKiBAY2xhc3NkZXNjIE1hbmFnZXIgZm9yIHRhZyBlZGl0aW5nIGluIHBvc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3NNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihoaWRkZW5GaWVsZHNDb250YWluZXIsIHRhZ3NDb250YWluZXIsIHRhZ0ZpZWxkTmFtZVByZWZpeCwgdGFnc1RleHRMYWJlbCwgeGhyUm91dGVDYWxsYmFjaykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1RhZ0VudGl0eVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXhpc3RpbmcgZm9ybSBmaWVsZHNcbiAgICAgICAgY29uc3QgdGFnRmllbGRzID0gJC5maW5kKCdpbnB1dFt0eXBlPWhpZGRlbl0nKTtcblxuICAgICAgICBsZXQgY3VycmVudFRhZ0lkID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWcgPSB7fTtcblxuICAgICAgICB0YWdGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RhZ0ZpZWxkTmFtZVByZWZpeH1cXFxcXyhcXFxcZCspXFxcXF8oaWR8dGV4dCkkYCk7XG4gICAgICAgICAgICBjb25zdCBbbGFiZWwsIHRhZ0lkLCB0YWdGaWVsZF0gPSBmaWVsZC5pZC5tYXRjaCh0YWdSZWdFeHApO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHRhZ0lkKSAhPT0gY3VycmVudFRhZ0lkKSB7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdJZCA9IE51bWJlcih0YWdJZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhZyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFnLnRhZ0lkID0gY3VycmVudFRhZy50YWdJZCA/XG4gICAgICAgICAgICAgICAgYCR7Y3VycmVudFRhZy50YWdJZH18JHtsYWJlbH1gIDpcbiAgICAgICAgICAgICAgICBsYWJlbDtcblxuICAgICAgICAgICAgY3VycmVudFRhZ1t0YWdGaWVsZF0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWcuaWQgJiYgY3VycmVudFRhZy50ZXh0KSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUYWdzRGlzcGxheSwge1xuICAgICAgICAgICAgaGlkZGVuRmllbGRzQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFnc1RleHRMYWJlbCxcbiAgICAgICAgICAgIHhoclJvdXRlQ2FsbGJhY2tcbiAgICAgICAgfSksIHRhZ3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnc1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwiaW1wb3J0IFRhZ3NNYW5hZ2VyIGZyb20gJy4uL2VzNi9UYWdzTWFuYWdlcic7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuUmVhY3RUYWdzRGlzcGxheSA9IFJlYWN0VGFnc0Rpc3BsYXk7XG53aW5kb3cuUmVhY3RMaWIuVGFnc01hbmFnZXIgPSBUYWdzTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RUYWdzTWFuYWdlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=