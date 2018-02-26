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

    (0, _jquery2.default)(tagFields).each(function (ndx, field) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTY2MTNmNmE0ZTVjZTJlMDk2OTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9UYWdzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0VGFnc01hbmFnZXIuanMiXSwibmFtZXMiOlsiUmVhY3RUYWdzRGlzcGxheSIsInByb3BzIiwic3RhdGUiLCJ0YWdzIiwic3VnZ2VzdGlvbnMiLCJpbnB1dCIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGlkZGVuVGFncyIsImhpZGRlbkZpZWxkc0NvbnRhaW5lciIsImNoaWxkcmVuIiwibmV3VGFnSW5kZXgiLCJsZW5ndGgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiYmluZCIsImhhbmRsZUZvY3VzIiwibWFwIiwicmVuZGVyVGFnIiwidGFnc1RleHRMYWJlbCIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwicmVuZGVyU3VnZ2VzdGlvbiIsInRhZyIsInRleHQiLCJyZW1vdmVUYWciLCJ0YWdSZWdFeHAiLCJSZWdFeHAiLCJ2YWx1ZSIsInRhZ1BhcnRzIiwibWF0Y2giLCJpbm5lclRhZyIsInByZVRhZyIsInRhZ1RleHQiLCJwb3N0VGFnIiwib25TdWdnZXN0aW9uQ2xpY2siLCJ0cmltIiwiZW5kc1dpdGgiLCJzdWJzdHIiLCJzZXRTdGF0ZSIsImkiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImlkIiwibmV3RmllbGRUZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImFwcGVuZCIsIm5ld1RhZ0lkcyIsInB1c2giLCJ0YWdJZCIsImZvY3VzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZvckVhY2giLCJmaWVsZElkIiwiZmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwic3BsaWNlIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwia2V5Iiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImZvbnRTaXplIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIkhUTUxFbGVtZW50IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJUYWdzTWFuYWdlciIsInRhZ3NDb250YWluZXIiLCJ0YWdGaWVsZE5hbWVQcmVmaXgiLCJ0YWdGaWVsZHMiLCJmaW5kIiwiY3VycmVudFRhZ0lkIiwiY3VycmVudFRhZyIsImVhY2giLCJuZHgiLCJsYWJlbCIsInRhZ0ZpZWxkIiwiTnVtYmVyIiwidGFnc0Rpc3BsYXkiLCJyZW5kZXIiLCJ3aW5kb3ciLCJSZWFjdExpYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QWVNLE9BQU81RCxLQUFQLENBQWY7QUFDQXVELHlCQUFhLEVBQWI7QUFDSDs7QUFFREEsbUJBQVd2RCxLQUFYLEdBQW1CdUQsV0FBV3ZELEtBQVgsR0FDWnVELFdBQVd2RCxLQURDLFNBQ1EwRCxLQURSLEdBRWZBLEtBRko7O0FBSUFILG1CQUFXSSxRQUFYLElBQXVCbkQsTUFBTWhDLEtBQTdCO0FBQ0gsS0FmRDs7QUFpQkEsUUFBSStFLFdBQVcvRCxFQUFYLElBQWlCK0QsV0FBV25GLElBQWhDLEVBQXNDO0FBQ2xDeEIsYUFBS21ELElBQUwsQ0FBVXdELFVBQVY7QUFDSDs7QUFFRCxTQUFLTSxXQUFMLEdBQW1CLG1CQUFTQyxNQUFULENBQWdCLGdCQUFNbkMsYUFBTiw2QkFBc0M7QUFDckV4RSxvREFEcUU7QUFFckVZLG9DQUZxRTtBQUdyRW1EO0FBSHFFLEtBQXRDLENBQWhCLEVBSWZnQyxhQUplLENBQW5COztBQU1BLFNBQUtXLFdBQUwsQ0FBaUIxRSxRQUFqQixDQUEwQjtBQUN0QnZDO0FBRHNCLEtBQTFCO0FBR0gsQzs7a0JBM0NnQnFHLFc7Ozs7Ozs7Ozs7Ozs7QUNqQnJCOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksT0FBT2MsT0FBT0MsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUN4Q0QsV0FBT0MsUUFBUCxHQUFrQixFQUFsQjtBQUNIOztBQUVERCxPQUFPQyxRQUFQLENBQWdCdkgsZ0JBQWhCO0FBQ0FzSCxPQUFPQyxRQUFQLENBQWdCZixXQUFoQix5QiIsImZpbGUiOiJSZWFjdFRhZ3NNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2NjEzZjZhNGU1Y2UyZTA5NjkzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnRW50aXR5XG4gKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBpZFxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gdGFnSWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdzU3RhdGVcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHRhZ3NcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHN1Z2dlc3Rpb25zXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RUYWdzRGlzcGxheVxuICogQGNsYXNzZGVzYyBEaXNwbGF5IGNsYXNzIGZvciB0YWcgZWxlbWVudHNcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIFRhZ3NTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3MgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhZ0luZGV4IHRvIHNldCBmb3IgdGhlIG5ldyBoaWRkZW4gZWxlbWVudHMgaW4gdGhlIGZvcm1cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggPSB0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC8gMjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBzdWdnZXN0aW9ucyBib3ggdGltZW91dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgZm9yIHRoZSBwcmV2aW91cyB2YWx1ZSBiZWZvcmUga2V5VXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLmNsZWFyU3VnZ2VzdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgdGFnIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWxpc3RcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWdzLm1hcCh0aGlzLnJlbmRlclRhZy5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5pbnB1dCA9IGlucHV0OyB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdfc3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5tYXAodGhpcy5yZW5kZXJTdWdnZXN0aW9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBzaW5nbGUgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJUYWcodGFnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17dGFnLnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZy50ZXh0fSA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlVGFnLmJpbmQodGhpcywgdGFnKX0+eDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgdGFnIHN1Z2dlc3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclN1Z2dlc3Rpb24odGFnKSB7XG4gICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4oLiopKCR7dGhpcy5pbnB1dC52YWx1ZX0pKC4qKSRgLCAnaScpO1xuICAgICAgICBjb25zdCB0YWdQYXJ0cyA9IHRhZy50ZXh0Lm1hdGNoKHRhZ1JlZ0V4cCk7XG4gICAgICAgIGxldCBpbm5lclRhZyA9IHRhZy50ZXh0O1xuXG4gICAgICAgIGlmICh0YWdQYXJ0cyAhPT0gbnVsbCAmJiB0YWdQYXJ0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZVRhZyA9IHRhZ1BhcnRzWzFdO1xuICAgICAgICAgICAgY29uc3QgdGFnVGV4dCA9IHRhZ1BhcnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgcG9zdFRhZyA9IHRhZ1BhcnRzWzNdO1xuXG4gICAgICAgICAgICBpbm5lclRhZyA9ICg8c3Bhbj57cHJlVGFnfTxzdHJvbmc+e3RhZ1RleHR9PC9zdHJvbmc+e3Bvc3RUYWd9PC9zcGFuPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbm5lclRhZyA9IDxzcGFuPnt0YWcudGV4dH08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIga2V5PXt0YWcudGV4dH0gb25DbGljaz17dGhpcy5vblN1Z2dlc3Rpb25DbGljay5iaW5kKHRoaXMsIHRhZyl9Pntpbm5lclRhZ308L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRhZyBieSB0ZXh0IG9ubHkgKG5ldyB0YWcpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdUZXh0XG4gICAgICovXG4gICAgYWRkVGFnKHRhZ1RleHQpIHtcbiAgICAgICAgLy8gdHJpbSBhbmQgcmVtb3ZlIHRyYWlsaW5nIHNlbWljb2xvbnNcbiAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQudHJpbSgpO1xuXG4gICAgICAgIGlmICh0YWdUZXh0LmVuZHNXaXRoKCcsJykpIHtcbiAgICAgICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnN1YnN0cigwLCB0YWdUZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgZW1wdHkgdGFnc1xuICAgICAgICBpZiAodGFnVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIHJlcGVhdGVkIHRhZ3NcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3NbaV0udGV4dCA9PT0gdGFnVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyeSB0byBnZXQgdGFnIGlkIGZyb20gc3VnZ2VzdGlvbnNcbiAgICAgICAgbGV0IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb24udGV4dC50b0xvd2VyQ2FzZSgpID09PSB0YWdUZXh0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgdGFnVGV4dCA9IHN1Z2dlc3Rpb24udGV4dDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkVGVtcGxhdGUgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm90b3R5cGUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2csIHRoaXMubmV3VGFnSW5kZXgudG9TdHJpbmcoMTApKTtcblxuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ICs9IDE7XG5cbiAgICAgICAgJCh0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lcikuYXBwZW5kKG5ld0ZpZWxkVGVtcGxhdGUpO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLnZhbHVlID0gdGFnSWRGcm9tU3VnZ2VzdGlvbnM7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0udmFsdWUgPSB0YWdUZXh0O1xuXG4gICAgICAgIGNvbnN0IG5ld1RhZ0lkcyA9XG4gICAgICAgICAgICBgJHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLmlkfXwke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0uaWR9YDtcblxuICAgICAgICB0aGlzLnN0YXRlLnRhZ3MucHVzaCh7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIHRhZ0lkOiBuZXdUYWdJZHMsXG4gICAgICAgICAgICB0ZXh0OiB0YWdUZXh0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgdGFnIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR8bnVsbH0gZXZlbnRcbiAgICAgKi9cbiAgICByZW1vdmVUYWcodGFnLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRmllbGRzID0gdGFnLnRhZ0lkLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgZm9ybUZpZWxkcy5mb3JFYWNoKChmaWVsZElkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSWQpO1xuICAgICAgICAgICAgZmllbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmaWVsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZVRhZyA9IHRoaXMuc3RhdGUudGFnc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlVGFnLnRleHQgPT09IHRhZy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgc3VnZ2VzdGlvbnMgdGltZW91dCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5zdWdnZXN0aW9uVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIGNhbGwgdG8gc3VnZ2VzdGlvbnMgYW5kIHVwZGF0ZXMgdGhlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdSb3V0ZSA9IHRoaXMucHJvcHMueGhyUm91dGVDYWxsYmFjayh0aGlzLmlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh0YWdSb3V0ZSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWdzLm1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBrZXkgcHJlc3NlcyBvbiB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlVcChldmVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2UgbmVlZCB0byBsb29rIGF0IHRoZSB2YWx1ZSB0aGF0IHdhcyBvbiB0aGUgaW5wdXQgQkVGT1JFIG9uS2V5VXAgdXBkYXRlcyB0aGVcbiAgICAgICAgICogaW5wdXQgdmFsdWUsIGJlY2F1c2Ugd2Ugb25seSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJldmlvdXMgdGFnIGlmIHRoZSBpbnB1dCBXQVNcbiAgICAgICAgICogZW1wdHkgYmVmb3JlIHByZXNzaW5nIEJhY2tzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZSh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7Jyk7XG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9IGAke3NwYW4ub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLZXlQcmVzcyBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlQcmVzcyhldmVudCkge1xuICAgICAgICBjb25zdCBldnRLZXkgPSBldmVudC5rZXk7XG5cbiAgICAgICAgc3dpdGNoIChldnRLZXkpIHtcbiAgICAgICAgY2FzZSAoJywnKTpcbiAgICAgICAgY2FzZSAoJ0VudGVyJyk6XG4gICAgICAgICAgICB0aGlzLmFkZFRhZyh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSAnNXB4JztcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8gY2xpY2tzIG9uIHRoZSB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGEgc3VnZ2VzdGVkIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblN1Z2dlc3Rpb25DbGljayh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuYWRkVGFnKHRhZy50ZXh0KTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3VnZ2VzdGlvbnMgb24gZG9jdW1lbnQgY2xpY2tcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjbGVhclN1Z2dlc3Rpb25zKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50VGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT09ICd0YWdfc3VnZ2VzdGlvbnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5SZWFjdFRhZ3NEaXNwbGF5LnByb3BUeXBlcyA9IHtcbiAgICBoaWRkZW5GaWVsZHNDb250YWluZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEhUTUxFbGVtZW50KS5pc1JlcXVpcmVkLFxuICAgIHRhZ3NUZXh0TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeGhyUm91dGVDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuUmVhY3RUYWdzRGlzcGxheS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFnc1RleHRMYWJlbDogJ3RleHQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRhZ3NEaXNwbGF5LmpzeCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbi8qKlxuICogVGFnc01hbmFnZXIgQ29uc3RydWN0b3IgLSBMb2FkcyB0aGUgdGFncyBwcmVzZW50IGluIHRoZSBmb3JtXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGlkZGVuRmllbGRzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBmb3IgdGhlIGhpZGRlbiBmaWVsZHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZ3NDb250YWluZXIgLSBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSB0YWdzIHdpbGwgYmUgcmVuZGVyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdGaWVsZE5hbWVQcmVmaXggLSBUaGUgZmllbGQgbmFtZSBvZiB0aGUgaGlkZGVuIHRhZyBmaWVsZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdzVGV4dExhYmVsIC0gVGhlIGZvciBhdHRyaWJ1dGUgZm9yIHRoZSB0YWdzIGxhYmVsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoeHJSb3V0ZUNhbGxiYWNrIC0gVGhlIHJvdXRlIHRvIHRoZSB4aHIgQVBJIGNhbGwgdG8gYnJpbmcgc3VnZ2VzdGlvbnNcbiAqXG4gKiBAY2xhc3MgVGFnc01hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgTWFuYWdlciBmb3IgdGFnIGVkaXRpbmcgaW4gcG9zdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGhpZGRlbkZpZWxkc0NvbnRhaW5lciwgdGFnc0NvbnRhaW5lciwgdGFnRmllbGROYW1lUHJlZml4LCB0YWdzVGV4dExhYmVsLCB4aHJSb3V0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7VGFnRW50aXR5W119XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAgICAgLy8gUHJvY2VzcyBleGlzdGluZyBmb3JtIGZpZWxkc1xuICAgICAgICBjb25zdCB0YWdGaWVsZHMgPSAkLmZpbmQoJ2lucHV0W3R5cGU9aGlkZGVuXScpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFnSWQgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFRhZyA9IHt9O1xuXG4gICAgICAgICQodGFnRmllbGRzKS5lYWNoKChuZHgsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0YWdGaWVsZE5hbWVQcmVmaXh9XFxcXF8oXFxcXGQrKVxcXFxfKGlkfHRleHQpJGApO1xuICAgICAgICAgICAgY29uc3QgW2xhYmVsLCB0YWdJZCwgdGFnRmllbGRdID0gZmllbGQuaWQubWF0Y2godGFnUmVnRXhwKTtcblxuICAgICAgICAgICAgaWYgKE51bWJlcih0YWdJZCkgIT09IGN1cnJlbnRUYWdJZCkge1xuICAgICAgICAgICAgICAgIHRhZ3MucHVzaChjdXJyZW50VGFnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnSWQgPSBOdW1iZXIodGFnSWQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWcgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhZy50YWdJZCA9IGN1cnJlbnRUYWcudGFnSWQgP1xuICAgICAgICAgICAgICAgIGAke2N1cnJlbnRUYWcudGFnSWR9fCR7bGFiZWx9YCA6XG4gICAgICAgICAgICAgICAgbGFiZWw7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYWdbdGFnRmllbGRdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGFnLmlkICYmIGN1cnJlbnRUYWcudGV4dCkge1xuICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWdzRGlzcGxheSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VGFnc0Rpc3BsYXksIHtcbiAgICAgICAgICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhZ3NUZXh0TGFiZWwsXG4gICAgICAgICAgICB4aHJSb3V0ZUNhbGxiYWNrXG4gICAgICAgIH0pLCB0YWdzQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UYWdzTWFuYWdlci5qcyIsImltcG9ydCBUYWdzTWFuYWdlciBmcm9tICcuLi9lczYvVGFnc01hbmFnZXInO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7fTtcbn1cblxud2luZG93LlJlYWN0TGliLlJlYWN0VGFnc0Rpc3BsYXkgPSBSZWFjdFRhZ3NEaXNwbGF5O1xud2luZG93LlJlYWN0TGliLlRhZ3NNYW5hZ2VyID0gVGFnc01hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0VGFnc01hbmFnZXIuanMiXSwic291cmNlUm9vdCI6IiJ9