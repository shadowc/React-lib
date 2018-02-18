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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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

var _ReactTagsDisplay = __webpack_require__(13);

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
/* 13 */
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TagsManager = __webpack_require__(12);

var _TagsManager2 = _interopRequireDefault(_TagsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.TagsManager = _TagsManager2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY3YmUzYmU1MDg4MTk4NDNmNzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdFRhZ3NEaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0VGFnc01hbmFnZXIuanMiXSwibmFtZXMiOlsiVGFnc01hbmFnZXIiLCJoaWRkZW5GaWVsZHNDb250YWluZXIiLCJ0YWdzQ29udGFpbmVyIiwidGFnRmllbGROYW1lUHJlZml4IiwidGFnc1RleHRMYWJlbCIsInhoclJvdXRlQ2FsbGJhY2siLCJ0YWdzIiwidGFnRmllbGRzIiwiZmluZCIsImN1cnJlbnRUYWdJZCIsImN1cnJlbnRUYWciLCJlYWNoIiwibmR4IiwiZmllbGQiLCJ0YWdSZWdFeHAiLCJSZWdFeHAiLCJpZCIsIm1hdGNoIiwibGFiZWwiLCJ0YWdJZCIsInRhZ0ZpZWxkIiwiTnVtYmVyIiwicHVzaCIsInZhbHVlIiwidGV4dCIsInRhZ3NEaXNwbGF5IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInNldFN0YXRlIiwiUmVhY3RUYWdzRGlzcGxheSIsInByb3BzIiwic3RhdGUiLCJzdWdnZXN0aW9ucyIsImlucHV0IiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwiY2hpbGRyZW4iLCJuZXdUYWdJbmRleCIsImxlbmd0aCIsInN1Z2dlc3Rpb25UaW1lb3V0IiwicHJldklucHV0VmFsdWUiLCJvbiIsImNsZWFyU3VnZ2VzdGlvbnMiLCJiaW5kIiwiaGFuZGxlRm9jdXMiLCJtYXAiLCJyZW5kZXJUYWciLCJvbktleVByZXNzIiwib25LZXlVcCIsInJlbmRlclN1Z2dlc3Rpb24iLCJ0YWciLCJyZW1vdmVUYWciLCJ0YWdQYXJ0cyIsImlubmVyVGFnIiwicHJlVGFnIiwidGFnVGV4dCIsInBvc3RUYWciLCJvblN1Z2dlc3Rpb25DbGljayIsInRyaW0iLCJlbmRzV2l0aCIsInN1YnN0ciIsImkiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsIm5ld0ZpZWxkVGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJhcHBlbmQiLCJuZXdUYWdJZHMiLCJmb2N1cyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRmllbGRzIiwic3BsaXQiLCJmb3JFYWNoIiwiZmllbGRJZCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic3RhdGVUYWciLCJzcGxpY2UiLCJjbGVhclRpbWVvdXQiLCJyZXNldFN1Z2dlc3Rpb25zVGltZW91dCIsInNldFRpbWVvdXQiLCJ0YWdSb3V0ZSIsImFqYXgiLCJtZXRob2QiLCJ0aGVuIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImtleSIsInNwYW4iLCJzdHlsZSIsImZvbnRTaXplIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIkhUTUxFbGVtZW50IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ3aW5kb3ciLCJSZWFjdExpYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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RUQ7Ozs7Ozs7Ozs7eUNBT2lCZ0MsSyxFQUFPO0FBQ3BCLGdCQUFJaUMsZ0JBQWdCakMsTUFBTWtDLE1BQTFCOztBQUVBLG1CQUFPRCxrQkFBa0IsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlBLGNBQWNFLFNBQWQsS0FBNEIsaUJBQWhDLEVBQW1EO0FBQy9DO0FBQ0g7O0FBRURGLGdDQUFnQkEsY0FBYzFCLFVBQTlCO0FBQ0g7O0FBRUQsaUJBQUtyRCxRQUFMLENBQWM7QUFDVkksNkJBQWE7QUFESCxhQUFkO0FBR0g7Ozs7RUE1WXlDLGdCQUFNOEUsUzs7a0JBQS9CakYsZ0I7OztBQStZckJBLGlCQUFpQmtGLFNBQWpCLEdBQTZCO0FBQ3pCOUcsMkJBQXVCLG9CQUFVK0csVUFBVixDQUFxQkMsV0FBckIsRUFBa0NDLFVBRGhDO0FBRXpCOUcsbUJBQWUsb0JBQVUrRyxNQUZBO0FBR3pCOUcsc0JBQWtCLG9CQUFVK0csSUFBVixDQUFlRjtBQUhSLENBQTdCOztBQU1BckYsaUJBQWlCd0YsWUFBakIsR0FBZ0M7QUFDNUJqSCxtQkFBZTtBQURhLENBQWhDLEM7Ozs7Ozs7Ozs7Ozs7QUMzYUE7Ozs7OztBQUVBLElBQUksT0FBT2tILE9BQU9DLFFBQWQsS0FBMkIsV0FBL0IsRUFBNEM7QUFDeENELFdBQU9DLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREQsT0FBT0MsUUFBUCxDQUFnQnZILFdBQWhCLHlCIiwiZmlsZSI6IlJlYWN0VGFnc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY3YmUzYmU1MDg4MTk4NDNmNzkiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbi8qKlxuICogVGFnc01hbmFnZXIgQ29uc3RydWN0b3IgLSBMb2FkcyB0aGUgdGFncyBwcmVzZW50IGluIHRoZSBmb3JtXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGlkZGVuRmllbGRzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBmb3IgdGhlIGhpZGRlbiBmaWVsZHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZ3NDb250YWluZXIgLSBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSB0YWdzIHdpbGwgYmUgcmVuZGVyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdGaWVsZE5hbWVQcmVmaXggLSBUaGUgZmllbGQgbmFtZSBvZiB0aGUgaGlkZGVuIHRhZyBmaWVsZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdzVGV4dExhYmVsIC0gVGhlIGZvciBhdHRyaWJ1dGUgZm9yIHRoZSB0YWdzIGxhYmVsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoeHJSb3V0ZUNhbGxiYWNrIC0gVGhlIHJvdXRlIHRvIHRoZSB4aHIgQVBJIGNhbGwgdG8gYnJpbmcgc3VnZ2VzdGlvbnNcbiAqXG4gKiBAY2xhc3MgVGFnc01hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgTWFuYWdlciBmb3IgdGFnIGVkaXRpbmcgaW4gcG9zdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGhpZGRlbkZpZWxkc0NvbnRhaW5lciwgdGFnc0NvbnRhaW5lciwgdGFnRmllbGROYW1lUHJlZml4LCB0YWdzVGV4dExhYmVsLCB4aHJSb3V0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7VGFnRW50aXR5W119XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAgICAgLy8gUHJvY2VzcyBleGlzdGluZyBmb3JtIGZpZWxkc1xuICAgICAgICBjb25zdCB0YWdGaWVsZHMgPSAkLmZpbmQoJ2lucHV0W3R5cGU9aGlkZGVuXScpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFnSWQgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFRhZyA9IHt9O1xuXG4gICAgICAgICQodGFnRmllbGRzKS5lYWNoKChuZHgsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0YWdGaWVsZE5hbWVQcmVmaXh9XFxcXF8oXFxcXGQrKVxcXFxfKGlkfHRleHQpJGApO1xuICAgICAgICAgICAgY29uc3QgW2xhYmVsLCB0YWdJZCwgdGFnRmllbGRdID0gZmllbGQuaWQubWF0Y2godGFnUmVnRXhwKTtcblxuICAgICAgICAgICAgaWYgKE51bWJlcih0YWdJZCkgIT09IGN1cnJlbnRUYWdJZCkge1xuICAgICAgICAgICAgICAgIHRhZ3MucHVzaChjdXJyZW50VGFnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnSWQgPSBOdW1iZXIodGFnSWQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWcgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhZy50YWdJZCA9IGN1cnJlbnRUYWcudGFnSWQgP1xuICAgICAgICAgICAgICAgIGAke2N1cnJlbnRUYWcudGFnSWR9fCR7bGFiZWx9YCA6XG4gICAgICAgICAgICAgICAgbGFiZWw7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYWdbdGFnRmllbGRdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGFnLmlkICYmIGN1cnJlbnRUYWcudGV4dCkge1xuICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWdzRGlzcGxheSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VGFnc0Rpc3BsYXksIHtcbiAgICAgICAgICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhZ3NUZXh0TGFiZWwsXG4gICAgICAgICAgICB4aHJSb3V0ZUNhbGxiYWNrXG4gICAgICAgIH0pLCB0YWdzQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UYWdzTWFuYWdlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdFbnRpdHlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IGlkXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSB0YWdJZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ3NTdGF0ZVxuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gdGFnc1xuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gc3VnZ2VzdGlvbnNcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5XG4gKiBAY2xhc3NkZXNjIERpc3BsYXkgY2xhc3MgZm9yIHRhZyBlbGVtZW50c1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgVGFnc1N0YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGlkZGVuVGFncyA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFnSW5kZXggdG8gc2V0IGZvciB0aGUgbmV3IGhpZGRlbiBlbGVtZW50cyBpbiB0aGUgZm9ybVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCA9IHRoaXMuaGlkZGVuVGFncy5sZW5ndGggLyAyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHN1Z2dlc3Rpb25zIGJveCB0aW1lb3V0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZSBmb3IgdGhlIHByZXZpb3VzIHZhbHVlIGJlZm9yZSBrZXlVcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuY2xlYXJTdWdnZXN0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSB0YWcgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctbGlzdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhZ3MubWFwKHRoaXMucmVuZGVyVGFnLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0ID0gaW5wdXQ7IH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ19zdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLm1hcCh0aGlzLnJlbmRlclN1Z2dlc3Rpb24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHNpbmdsZSB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclRhZyh0YWcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXt0YWcudGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFnLnRleHR9IDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5yZW1vdmVUYWcuYmluZCh0aGlzLCB0YWcpfT54PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSB0YWcgc3VnZ2VzdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih0YWcpIHtcbiAgICAgICAgY29uc3QgdGFnUmVnRXhwID0gbmV3IFJlZ0V4cChgXiguKikoJHt0aGlzLmlucHV0LnZhbHVlfSkoLiopJGAsICdpJyk7XG4gICAgICAgIGNvbnN0IHRhZ1BhcnRzID0gdGFnLnRleHQubWF0Y2godGFnUmVnRXhwKTtcbiAgICAgICAgbGV0IGlubmVyVGFnID0gdGFnLnRleHQ7XG5cbiAgICAgICAgaWYgKHRhZ1BhcnRzICE9PSBudWxsICYmIHRhZ1BhcnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgY29uc3QgcHJlVGFnID0gdGFnUGFydHNbMV07XG4gICAgICAgICAgICBjb25zdCB0YWdUZXh0ID0gdGFnUGFydHNbMl07XG4gICAgICAgICAgICBjb25zdCBwb3N0VGFnID0gdGFnUGFydHNbM107XG5cbiAgICAgICAgICAgIGlubmVyVGFnID0gKDxzcGFuPntwcmVUYWd9PHN0cm9uZz57dGFnVGV4dH08L3N0cm9uZz57cG9zdFRhZ308L3NwYW4+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyVGFnID0gPHNwYW4+e3RhZy50ZXh0fTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBrZXk9e3RhZy50ZXh0fSBvbkNsaWNrPXt0aGlzLm9uU3VnZ2VzdGlvbkNsaWNrLmJpbmQodGhpcywgdGFnKX0+e2lubmVyVGFnfTwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdGFnIGJ5IHRleHQgb25seSAobmV3IHRhZylcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1RleHRcbiAgICAgKi9cbiAgICBhZGRUYWcodGFnVGV4dCkge1xuICAgICAgICAvLyB0cmltIGFuZCByZW1vdmUgdHJhaWxpbmcgc2VtaWNvbG9uc1xuICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC50cmltKCk7XG5cbiAgICAgICAgaWYgKHRhZ1RleHQuZW5kc1dpdGgoJywnKSkge1xuICAgICAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQuc3Vic3RyKDAsIHRhZ1RleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCBlbXB0eSB0YWdzXG4gICAgICAgIGlmICh0YWdUZXh0ID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgcmVwZWF0ZWQgdGFnc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFnc1tpXS50ZXh0ID09PSB0YWdUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ5IHRvIGdldCB0YWcgaWQgZnJvbSBzdWdnZXN0aW9uc1xuICAgICAgICBsZXQgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VnZ2VzdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHRhZ1RleHQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbi5pZDtcbiAgICAgICAgICAgICAgICB0YWdUZXh0ID0gc3VnZ2VzdGlvbi50ZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3RmllbGRUZW1wbGF0ZSA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpXG4gICAgICAgICAgICAucmVwbGFjZSgvX19uYW1lX18vZywgdGhpcy5uZXdUYWdJbmRleC50b1N0cmluZygxMCkpO1xuXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggKz0gMTtcblxuICAgICAgICAkKHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyKS5hcHBlbmQobmV3RmllbGRUZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0udmFsdWUgPSB0YWdJZEZyb21TdWdnZXN0aW9ucztcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS52YWx1ZSA9IHRhZ1RleHQ7XG5cbiAgICAgICAgY29uc3QgbmV3VGFnSWRzID1cbiAgICAgICAgICAgIGAke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0uaWR9fCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS5pZH1gO1xuXG4gICAgICAgIHRoaXMuc3RhdGUudGFncy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgdGFnSWQ6IG5ld1RhZ0lkcyxcbiAgICAgICAgICAgIHRleHQ6IHRhZ1RleHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3MsXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB0YWcgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHJlbW92ZVRhZyh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZHMgPSB0YWcudGFnSWQuc3BsaXQoJ3wnKTtcblxuICAgICAgICBmb3JtRmllbGRzLmZvckVhY2goKGZpZWxkSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgICAgICAgICBmaWVsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZpZWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlVGFnID0gdGhpcy5zdGF0ZS50YWdzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVUYWcudGV4dCA9PT0gdGFnLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBzdWdnZXN0aW9ucyB0aW1lb3V0IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdWdnZXN0aW9uVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgY2FsbCB0byBzdWdnZXN0aW9ucyBhbmQgdXBkYXRlcyB0aGUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVN1Z2dlc3Rpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ1JvdXRlID0gdGhpcy5wcm9wcy54aHJSb3V0ZUNhbGxiYWNrKHRoaXMuaW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHRhZ1JvdXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhZ3MubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGtleSBwcmVzc2VzIG9uIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBuZWVkIHRvIGxvb2sgYXQgdGhlIHZhbHVlIHRoYXQgd2FzIG9uIHRoZSBpbnB1dCBCRUZPUkUgb25LZXlVcCB1cGRhdGVzIHRoZVxuICAgICAgICAgKiBpbnB1dCB2YWx1ZSwgYmVjYXVzZSB3ZSBvbmx5IHdhbnQgdG8gZGVsZXRlIHRoZSBwcmV2aW91cyB0YWcgaWYgdGhlIGlucHV0IFdBU1xuICAgICAgICAgKiBlbXB0eSBiZWZvcmUgcHJlc3NpbmcgQmFja3NwYWNlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLnByZXZJbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKHRoaXMuc3RhdGUudGFncy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudmFsdWUucmVwbGFjZSgvXFxzL2csICcmbmJzcDsnKTtcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7c3Bhbi5vZmZzZXRXaWR0aH1weGA7XG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVDaGlsZChzcGFuKTtcblxuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtleVByZXNzIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2dEtleSA9IGV2ZW50LmtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2dEtleSkge1xuICAgICAgICBjYXNlICgnLCcpOlxuICAgICAgICBjYXNlICgnRW50ZXInKTpcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9ICc1cHgnO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBjbGlja3Mgb24gdGhlIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBzdWdnZXN0ZWQgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uU3VnZ2VzdGlvbkNsaWNrKHRhZywgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5hZGRUYWcodGFnLnRleHQpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWdnZXN0aW9ucyBvbiBkb2N1bWVudCBjbGlja1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsZWFyU3VnZ2VzdGlvbnMoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3RhZ19zdWdnZXN0aW9ucycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblJlYWN0VGFnc0Rpc3BsYXkucHJvcFR5cGVzID0ge1xuICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoSFRNTEVsZW1lbnQpLmlzUmVxdWlyZWQsXG4gICAgdGFnc1RleHRMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB4aHJSb3V0ZUNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdFRhZ3NEaXNwbGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0YWdzVGV4dExhYmVsOiAndGV4dCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4IiwiaW1wb3J0IFRhZ3NNYW5hZ2VyIGZyb20gJy4uL2VzNi9UYWdzTWFuYWdlcic7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuVGFnc01hbmFnZXIgPSBUYWdzTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RUYWdzTWFuYWdlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=