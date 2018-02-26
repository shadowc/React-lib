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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 8 */
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

var _ReactTree = __webpack_require__(9);

var _ReactTree2 = _interopRequireDefault(_ReactTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Tree class constructor
 *
 * @param {ReactTreeProps} The properties of the tree
 * @class Tree
 * @classdesc Tree main class, use this class to interface with trees
 */
var Tree = function () {
  function Tree(props) {
    _classCallCheck(this, Tree);

    /**
     * The tree component reference
     *
     * @name Tree#tree
     * @type {ReactTree}
     * @private
     */
    this.tree = null;

    /**
     * The id of the tree
     *
     * @name Tree#id
     * @type {string}
     */
    this.id = props.id;

    /**
     * The props for the tree
     *
     * @name Tree#props
     * @type {ReactTreeProps}
     */
    this.treeProps = props;
  }

  /**
   * Renders the ReactTree Component within the tree container
   *
   * @memberOf Tree
   * @instance
   * @param {Element} container The container element into which to render the Component
   */


  _createClass(Tree, [{
    key: 'render',
    value: function render(container) {
      this.tree = _reactDom2.default.render(_react2.default.createElement(_ReactTree2.default, _extends({}, this.treeProps)), container);
    }

    /**
     * Sets the loading state in the tree
     *
     * @memberOf Tree
     * @instance
     * @param {boolean} loading True if we show only a loading spinner
     */

  }, {
    key: 'setLoading',
    value: function setLoading(loading) {
      this.tree.setLoading(loading);
    }

    /**
     * Sets the initial data on the tree.
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem[]} data The root item list for the tree with all its children
     */

  }, {
    key: 'setData',
    value: function setData(data) {
      this.tree.setData(data);
    }

    /**
     * Gets the selected item id
     *
     * @memberOf Tree
     * @instance
     * @return {string|number}
     */

  }, {
    key: 'getSelectedItemId',
    value: function getSelectedItemId() {
      return this.tree.getSelectedItemId();
    }

    /**
     * Adds an item on the tree based in the item's parentId property
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem} item The item to add
     */

  }, {
    key: 'addItem',
    value: function addItem(item) {
      this.tree.addItem(item);
    }

    /**
     * Updates an item in the tree
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem} item The item to update
     */

  }, {
    key: 'updateItem',
    value: function updateItem(item) {
      this.tree.updateItem(item);
    }

    /**
     * Deletes an item by id
     *
     * @memberOf Tree
     * @instance
     * @param {string|number} id The item id to delete
     */

  }, {
    key: 'deleteItemById',
    value: function deleteItemById(id) {
      this.tree.deleteItemById(id);
    }

    /**
     * Finds and returns an item by id
     *
     * @memberOf Tree
     * @instance
     * @param {string|number} id The id of the item to find
     */

  }, {
    key: 'findItemById',
    value: function findItemById(id) {
      return this.tree.findItemById(id);
    }

    /**
     * Sets the enabled state of the Tree
     *
     * @memberOf Tree
     * @instance
     * @param {boolean} enabled True if the Tree is interactive
     */

  }, {
    key: 'setEnabled',
    value: function setEnabled(enabled) {
      this.tree.setEnabled(enabled);
    }

    /**
     * Expands all the items with children
     *
     * @memberOf Tree
     * @instance
     */

  }, {
    key: 'expandAll',
    value: function expandAll() {
      this.tree.expandAll();
    }

    /**
     * Contracts all the items in the tree
     *
     * @memberOf Tree
     * @instance
     */

  }, {
    key: 'contractAll',
    value: function contractAll() {
      this.tree.contractAll();
    }
  }]);

  return Tree;
}();

exports.default = Tree;

/***/ }),
/* 9 */
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
 * Definition for ReactTree TreeItem object
 *
 * @typedef {Object} TreeItem
 * @property {string|number} id The unique id of the item
 * @property {string|number} [parentId=0] The parent id of the item
 * @property {TreeItem[]} children The item's children
 */

/**
 * Definition for ReactTree State object
 *
 * @typedef {Object} ReactTreeState
 * @property {TreeItem[]} root The root item containing tree root children
 * @property {boolean} loading True if the grid is in the loading state
 * @property {string|null} selectedItem The id of the selected item
 * @property {Object<string,boolean>} expandedIds A collection of the ids of expanded categories
 * @property {boolean} enabled True if the tree is enabled
 */

/**
 * Definition for ReactTreeProps object
 *
 * @typedef {Object} ReactTreeProps
 * @property {string} [id=tree]
 * @property {function} format
 * @property {TreeItem[]|null} initialData
 * @property {SortCallback|null} sort
 */

/**
 * Constructor for the ReactTree component
 *
 * @param {ReactTreeProps} props
 * @class ReactTree
 * @classdesc React Tree component class
 */
var ReactTree = function (_React$Component) {
    _inherits(ReactTree, _React$Component);

    function ReactTree(props) {
        _classCallCheck(this, ReactTree);

        /**
         * State object
         *
         * @type {ReactTreeState}
         */
        var _this = _possibleConstructorReturn(this, (ReactTree.__proto__ || Object.getPrototypeOf(ReactTree)).call(this, props));

        _this.state = {
            root: _this.props.initialData,
            expandedIds: {},
            loading: false,
            selectedItem: null,
            enabled: true
        };
        return _this;
    }

    /**
     * ReactTree render function
     * @memberOf ReactTree
     * @instance
     */


    _createClass(ReactTree, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: this.props.id, className: this.state.enabled ? '' : 'disabled' },
                this.state.loading ? _react2.default.createElement(
                    'span',
                    { className: 'icon loading' },
                    '\xA0'
                ) : _react2.default.createElement(
                    'ul',
                    null,
                    this.state.root.map(this.renderItem.bind(this))
                )
            );
        }

        /**
         * Render a tree item and its children
         * @memberOf ReactTree
         * @instance
         * @param {TreeItem} item
         */

    }, {
        key: 'renderItem',
        value: function renderItem(item) {
            var expanded = this.state.expandedIds[item.id];
            var itemClassName = this.state.selectedItem === item.id ? 'selected' : '';
            var expandStatus = expanded ? 'expanded' : 'contracted';
            var itemExpandClassName = 'expand ' + (item.children.length ? expandStatus : '');

            return _react2.default.createElement(
                'li',
                { key: item.id },
                _react2.default.createElement('span', {
                    className: itemExpandClassName,
                    onClick: this.expandContractItem.bind(this, item.id)
                }),
                _react2.default.createElement(
                    'span',
                    {
                        className: itemClassName,
                        onClick: this.selectItem.bind(this, item.id)
                    },
                    this.props.format.call(null, item)
                ),
                item.children.length ? _react2.default.createElement(
                    'ul',
                    {
                        style: { display: expanded ? 'block' : 'none' }
                    },
                    item.children.map(this.renderItem.bind(this))
                ) : null
            );
        }

        /**
         * Sets the loading state of the tree
         *
         * @memberOf ReactTree
         * @instance
         * @param {boolean} loading True if the tree shows only a loading spinner
         */

    }, {
        key: 'setLoading',
        value: function setLoading(loading) {
            this.setState({
                loading: loading
            });
        }

        /**
         * Sets data on the tree and removes all previous data
         *
         * @memberOf ReactTree
         * @instance
         * @param {TreeItem[]} root
         * @param {boolean} [sort=true]
         */

    }, {
        key: 'setData',
        value: function setData(root) {
            var _this2 = this;

            var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var sortTree = function sortTree(tree) {
                tree.forEach(function (branch) {
                    if (branch.children.length) {
                        sortTree(branch.children);
                    }
                });

                _this2.sort(tree);
            };

            if (sort) {
                sortTree(root);
            }

            this.setState({
                root: root
            });
        }

        /**
         * Sorts data in a tree branch
         *
         * @memberOf ReactTree
         * @instance
         * @param {TreeItem[]} tree
         */

    }, {
        key: 'sort',
        value: function sort(tree) {
            var sortFn = this.props.sort;

            if (typeof sortFn === 'function') {
                tree.sort(sortFn);
            }
        }

        /**
         * Selects an item in the tree by id
         *
         * @memberOf ReactTree
         * @instance
         * @param {string} id
         * @param {Event|null} event
         */

    }, {
        key: 'selectItem',
        value: function selectItem(id, event) {
            if (this.state.enabled) {
                var selectedItem = this.state.selectedItem === id ? null : id;

                this.setState({
                    selectedItem: selectedItem
                });

                return this.generateItemClick(event, selectedItem);
            }

            event.preventDefault();
            return null;
        }

        /**
         * Gets the selected item
         * Gets the selected item
         *
         * @memberOf ReactTree
         * @instance
         * @return {string|number}
         */

    }, {
        key: 'getSelectedItemId',
        value: function getSelectedItemId() {
            return this.state.selectedItem;
        }
    }, {
        key: 'expandContractItem',
        value: function expandContractItem(id, event) {
            event.preventDefault();

            if (this.state.enabled) {
                var expanded = Object.assign({}, this.state.expandedIds);

                if (expanded[id]) {
                    delete expanded[id];
                } else {
                    expanded[id] = true;
                }

                this.setState({
                    expandedIds: expanded
                });
            }
        }

        /**
         * Fires an event on ReactTree root element that can be listened to
         *
         * @memberOf ReactTree
         * @instance
         * @param {Event} event
         * @param {string} selectedItem
         * @returns {boolean}
         */

    }, {
        key: 'generateItemClick',
        value: function generateItemClick(event, selectedItem) {
            event.preventDefault();
            event.stopPropagation();

            var itemEvent = new CustomEvent('ItemClick', { detail: { selectedItem: selectedItem } });

            var rootElem = document.getElementById(this.props.id);

            if (rootElem) {
                rootElem.dispatchEvent(itemEvent);
            }

            return false;
        }

        /**
         * Adds an item to the tree
         *
         * @memberOf ReactTree
         * @instance
         * @param {TreeItem} item
         */

    }, {
        key: 'addItem',
        value: function addItem(item) {
            var cacheRoot = this.replicateRoot();

            if (typeof item.id !== 'undefined' && typeof item.parentId !== 'undefined' && typeof item.children !== 'undefined') {
                if (item.parentId === '0' || item.parentId === 0) {
                    cacheRoot.push(item);
                    this.sort(cacheRoot);
                } else {
                    var branch = this.findItemInBranchById(cacheRoot, item.parentId);

                    if (branch) {
                        branch.children.push(item);
                        this.sort(branch.children);
                    } else {
                        cacheRoot.push(item);
                        this.sort(cacheRoot);
                    }
                }
            }

            this.setState({
                root: cacheRoot
            });
        }

        /**
         * Updates an item in the tree
         *
         * @memberOf ReactTree
         * @instance
         * @param {TreeItem} item
         */

    }, {
        key: 'updateItem',
        value: function updateItem(item) {
            var cacheRoot = this.replicateRoot();
            var foundItem = this.findItemInBranchById(cacheRoot, item.id);

            if (foundItem) {
                Object.keys(foundItem).forEach(function (key) {
                    if (key !== 'id' && key !== 'parentId' && key !== 'children') {
                        foundItem[key] = item[key] ? item[key] : null;
                    }
                });
            }

            this.sort(cacheRoot);

            this.setState({
                root: cacheRoot
            });
        }

        /**
         * Deletes an item by id
         *
         * @memberOf ReactTree
         * @instance
         * @param {string|number} id
         */

    }, {
        key: 'deleteItemById',
        value: function deleteItemById(id) {
            var cacheRoot = this.replicateRoot();
            var item = this.findItemById(id);
            var selectedItem = this.state.selectedItem;
            var branch = void 0;

            if (item) {
                if (item.parentId === 0 || item.parentId === '0') {
                    branch = cacheRoot;
                } else {
                    branch = this.findItemInBranchById(cacheRoot, item.parentId).children;
                }

                if (selectedItem === item.id) {
                    selectedItem = null;
                }
            }

            if (branch) {
                for (var i = 0; i < branch.length; i++) {
                    if (branch[i].id === id) {
                        branch.splice(i, 1);
                        break;
                    }
                }
            }

            this.setState({
                root: cacheRoot,
                selectedItem: selectedItem
            });
        }

        /**
         * Finds an item in the tree by id
         *
         * @memberOf ReactTree
         * @instance
         * @param {string|number} id The id of the item
         * @returns {TreeItem|null}
         */

    }, {
        key: 'findItemById',
        value: function findItemById(id) {
            return this.findItemInBranchById(this.state.root, id);
        }

        /**
         * Finds in item in a tree branch by id
         *
         * @memberOf ReactTree
         * @instance
         * @private
         * @param {TreeItem[]}root
         * @param {string|number} id
         * @returns {TreeItem|null}
         */

    }, {
        key: 'findItemInBranchById',
        value: function findItemInBranchById(root, id) {
            var ret = null;

            for (var i = 0; i < root.length; i++) {
                var item = root[i];
                if (item.id === id) {
                    ret = item;
                    break;
                } else if (item.children.length) {
                    ret = this.findItemInBranchById(item.children, id);

                    if (ret !== null) {
                        break;
                    }
                }
            }

            return ret;
        }

        /**
         * Replicates the root object for changes
         *
         * @memberOf ReactTree
         * @instance
         * @private
         * @returns {TreeItem[]}
         */

    }, {
        key: 'replicateRoot',
        value: function replicateRoot() {
            var ret = [];

            for (var i = 0; i < this.state.root.length; i++) {
                ret.push(_jquery2.default.extend({}, this.state.root[i]));
            }

            return ret;
        }

        /**
         * Sets the enabled property of the grid
         *
         * @memberOf ReactTree
         * @instance
         * @param {boolean} enabled
         */

    }, {
        key: 'setEnabled',
        value: function setEnabled(enabled) {
            this.setState({
                enabled: enabled
            });
        }

        /**
         * Expands all tree items
         *
         * @memberOf ReactTree
         * @instance
         */

    }, {
        key: 'expandAll',
        value: function expandAll() {
            var expandTree = function expandTree(items, expandedIds) {
                items.forEach(function (itm) {
                    if (itm.children.length) {
                        expandedIds[itm.id] = true;
                        expandTree(itm.children, expandedIds);
                    }
                });
            };

            var expandedIds = {};

            expandTree(this.state.root, expandedIds);

            this.setState({
                expandedIds: expandedIds
            });
        }

        /**
         * Contracts all tree items
         *
         * @memberOf ReactTree
         * @instance
         */

    }, {
        key: 'contractAll',
        value: function contractAll() {
            this.setState({
                expandedIds: {}
            });
        }
    }]);

    return ReactTree;
}(_react2.default.Component);

/**
 * ReactTree propTypes
 *
 * @memberOf ReactTree
 * @static
 * @type {ReactTreeProps}
 */


exports.default = ReactTree;
ReactTree.propTypes = {
    id: _propTypes2.default.string,
    format: _propTypes2.default.func.isRequired,
    initialData: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Object)),
    sort: _propTypes2.default.func
};

/**
 * ReactTree default props
 *
 * @memberOf ReactTree
 * @static
 * @type {ReactTreeProps}
 */
ReactTree.defaultProps = {
    id: 'tree',
    initialData: [],
    sort: null
};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Tree = __webpack_require__(8);

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.Tree = _Tree2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwibmFtZXMiOlsiVHJlZSIsInByb3BzIiwidHJlZSIsImlkIiwidHJlZVByb3BzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJnZXRTZWxlY3RlZEl0ZW1JZCIsIml0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZmluZEl0ZW1CeUlkIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJleHBhbmRBbGwiLCJjb250cmFjdEFsbCIsIlJlYWN0VHJlZSIsInN0YXRlIiwicm9vdCIsImluaXRpYWxEYXRhIiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJtYXAiLCJyZW5kZXJJdGVtIiwiYmluZCIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJmb3JtYXQiLCJjYWxsIiwiZGlzcGxheSIsInNldFN0YXRlIiwic29ydCIsInNvcnRUcmVlIiwiZm9yRWFjaCIsImJyYW5jaCIsInNvcnRGbiIsImV2ZW50IiwiZ2VuZXJhdGVJdGVtQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImFzc2lnbiIsInN0b3BQcm9wYWdhdGlvbiIsIml0ZW1FdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsInB1c2giLCJmaW5kSXRlbUluQnJhbmNoQnlJZCIsImZvdW5kSXRlbSIsImtleXMiLCJrZXkiLCJpIiwic3BsaWNlIiwicmV0IiwiZXh0ZW5kIiwiZXhwYW5kVHJlZSIsIml0ZW1zIiwiaXRtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiaW5zdGFuY2VPZiIsImRlZmF1bHRQcm9wcyIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsSTtBQUNqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmOzs7Ozs7O0FBT0EsU0FB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O0FBRFUsYUFBZDtBQUdIOztBQUVEOzs7Ozs7Ozs7c0NBTWM7QUFDVixpQkFBS2dCLFFBQUwsQ0FBYztBQUNWaEIsNkJBQWE7QUFESCxhQUFkO0FBR0g7Ozs7RUEzWmtDLGdCQUFNa0QsUzs7QUE4WjdDOzs7Ozs7Ozs7a0JBOVpxQnRELFM7QUFxYXJCQSxVQUFVdUQsU0FBVixHQUFzQjtBQUNsQjFFLFFBQUksb0JBQVUyRSxNQURJO0FBRWxCdkMsWUFBUSxvQkFBVXdDLElBQVYsQ0FBZUMsVUFGTDtBQUdsQnZELGlCQUFhLG9CQUFVd0QsT0FBVixDQUFrQixvQkFBVUMsVUFBVixDQUFxQi9CLE1BQXJCLENBQWxCLENBSEs7QUFJbEJSLFVBQU0sb0JBQVVvQztBQUpFLENBQXRCOztBQU9BOzs7Ozs7O0FBT0F6RCxVQUFVNkQsWUFBVixHQUF5QjtBQUNyQmhGLFFBQUksTUFEaUI7QUFFckJzQixpQkFBYSxFQUZRO0FBR3JCa0IsVUFBTTtBQUhlLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQzVkQTs7Ozs7O0FBRUEsSUFBSSxPQUFPeUMsT0FBT0MsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUN4Q0QsV0FBT0MsUUFBUCxHQUFrQixFQUFsQjtBQUNIOztBQUVERCxPQUFPQyxRQUFQLENBQWdCckYsSUFBaEIsa0IiLCJmaWxlIjoiUmVhY3RUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4NmVjMDk3MjllZGI0YTc4Mzk2IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuXG4vKipcbiAqIFRyZWUgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdHJlZVxuICogQGNsYXNzIFRyZWVcbiAqIEBjbGFzc2Rlc2MgVHJlZSBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCB0cmVlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyZWUgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3RyZWVcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWVQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlYWN0VHJlZSBDb21wb25lbnQgd2l0aGluIHRoZSB0cmVlIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy50cmVlID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmVlLCB7IC4uLnRoaXMudHJlZVByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgd2Ugc2hvdyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgZGF0YSBvbiB0aGUgdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSBkYXRhIFRoZSByb290IGl0ZW0gbGlzdCBmb3IgdGhlIHRyZWUgd2l0aCBhbGwgaXRzIGNoaWxkcmVuXG4gICAgICovXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXREYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW0gaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXRTZWxlY3RlZEl0ZW1JZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvbiB0aGUgdHJlZSBiYXNlZCBpbiB0aGUgaXRlbSdzIHBhcmVudElkIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gYWRkXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUudXBkYXRlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaXRlbSBpZCB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBUcmVlSXRlbSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmVlSXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtwYXJlbnRJZD0wXSBUaGUgcGFyZW50IGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IGNoaWxkcmVuIFRoZSBpdGVtJ3MgY2hpbGRyZW5cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBTdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVTdGF0ZVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSByb290IFRoZSByb290IGl0ZW0gY29udGFpbmluZyB0cmVlIHJvb3QgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIGlzIGluIHRoZSBsb2FkaW5nIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBzZWxlY3RlZEl0ZW0gVGhlIGlkIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsYm9vbGVhbj59IGV4cGFuZGVkSWRzIEEgY29sbGVjdGlvbiBvZiB0aGUgaWRzIG9mIGV4cGFuZGVkIGNhdGVnb3JpZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSB0cmVlIGlzIGVuYWJsZWRcbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZVByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPXRyZWVdXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXXxudWxsfSBpbml0aWFsRGF0YVxuICogQHByb3BlcnR5IHtTb3J0Q2FsbGJhY2t8bnVsbH0gc29ydFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBSZWFjdFRyZWUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gcHJvcHNcbiAqIEBjbGFzcyBSZWFjdFRyZWVcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgVHJlZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm9vdDogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0VHJlZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICdkaXNhYmxlZCd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgPHVsPnt0aGlzLnN0YXRlLnJvb3QubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX08L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHRyZWUgaXRlbSBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzW2l0ZW0uaWRdO1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cGFuZFN0YXR1cyA9IGV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb250cmFjdGVkJztcbiAgICAgICAgY29uc3QgaXRlbUV4cGFuZENsYXNzTmFtZSA9IGBleHBhbmQgJHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/IGV4cGFuZFN0YXR1cyA6ICcnfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUV4cGFuZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRDb250cmFjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JtYXQuY2FsbChudWxsLCBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBleHBhbmRlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIHRyZWUgc2hvd3Mgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIG9uIHRoZSB0cmVlIGFuZCByZW1vdmVzIGFsbCBwcmV2aW91cyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc29ydD10cnVlXVxuICAgICAqL1xuICAgIHNldERhdGEocm9vdCwgc29ydCA9IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc29ydFRyZWUgPSAodHJlZSkgPT4ge1xuICAgICAgICAgICAgdHJlZS5mb3JFYWNoKChicmFuY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VHJlZShicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvcnQodHJlZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRUcmVlKHJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIGRhdGEgaW4gYSB0cmVlIGJyYW5jaFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gdHJlZVxuICAgICAqL1xuICAgIHNvcnQodHJlZSkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyZWUuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpZCA/IG51bGwgOiBpZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICBleHBhbmRDb250cmFjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzKTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGVkW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZFtpZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzOiBleHBhbmRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiBSZWFjdFRyZWUgcm9vdCBlbGVtZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRJdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0l0ZW1DbGljaycsIHsgZGV0YWlsOiB7IHNlbGVjdGVkSXRlbSB9IH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGl0ZW1FdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0uaWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5wYXJlbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09ICcwJyB8fCBpdGVtLnBhcmVudElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLmNoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUm9vdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKGZvdW5kSXRlbSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaWQnICYmIGtleSAhPT0gJ3BhcmVudElkJyAmJiBrZXkgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJdGVtW2tleV0gPSBpdGVtW2tleV0gPyBpdGVtW2tleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kSXRlbUJ5SWQoaWQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgICAgIGxldCBicmFuY2g7XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSAwIHx8IGl0ZW0ucGFyZW50SWQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IGNhY2hlUm9vdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhbmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3QsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW4gaXRlbSBpbiB0aGUgdHJlZSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSBpdGVtXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKHRoaXMuc3RhdGUucm9vdCwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGluIGl0ZW0gaW4gYSB0cmVlIGJyYW5jaCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfXJvb3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1JbkJyYW5jaEJ5SWQocm9vdCwgaWQpIHtcbiAgICAgICAgbGV0IHJldCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdFtpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChpdGVtLmNoaWxkcmVuLCBpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGljYXRlcyB0aGUgcm9vdCBvYmplY3QgZm9yIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbVtdfVxuICAgICAqL1xuICAgIHJlcGxpY2F0ZVJvb3QoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQucHVzaCgkLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZS5yb290W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgcHJvcGVydHkgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRyZWUgPSAoaXRlbXMsIGV4cGFuZGVkSWRzKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZElkc1tpdG0uaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kVHJlZShpdG0uY2hpbGRyZW4sIGV4cGFuZGVkSWRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBhbmRlZElkcyA9IHt9O1xuXG4gICAgICAgIGV4cGFuZFRyZWUodGhpcy5zdGF0ZS5yb290LCBleHBhbmRlZElkcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkczoge31cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlYWN0VHJlZSBwcm9wVHlwZXNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBSZWFjdFRyZWUgZGVmYXVsdCBwcm9wc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ3RyZWUnLFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBzb3J0OiBudWxsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRyZWUuanN4IiwiaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7fTtcbn1cblxud2luZG93LlJlYWN0TGliLlRyZWUgPSBUcmVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwic291cmNlUm9vdCI6IiJ9