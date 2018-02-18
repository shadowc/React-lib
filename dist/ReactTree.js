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
    key: 'deleteItemByI',
    value: function deleteItemByI(id) {
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
                        this.sort.branch();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTVmMDcyNjc4OTI5YjA5NGM2ZGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwibmFtZXMiOlsiVHJlZSIsInByb3BzIiwidHJlZSIsImlkIiwidHJlZVByb3BzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJnZXRTZWxlY3RlZEl0ZW1JZCIsIml0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZmluZEl0ZW1CeUlkIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJleHBhbmRBbGwiLCJjb250cmFjdEFsbCIsIlJlYWN0VHJlZSIsInN0YXRlIiwicm9vdCIsImluaXRpYWxEYXRhIiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJtYXAiLCJyZW5kZXJJdGVtIiwiYmluZCIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJmb3JtYXQiLCJjYWxsIiwiZGlzcGxheSIsInNldFN0YXRlIiwic29ydCIsInNvcnRUcmVlIiwiZm9yRWFjaCIsImJyYW5jaCIsInNvcnRGbiIsImV2ZW50IiwiZ2VuZXJhdGVJdGVtQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImFzc2lnbiIsInN0b3BQcm9wYWdhdGlvbiIsIml0ZW1FdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsInB1c2giLCJmaW5kSXRlbUluQnJhbmNoQnlJZCIsImZvdW5kSXRlbSIsImtleXMiLCJrZXkiLCJpIiwic3BsaWNlIiwicmV0IiwiZXh0ZW5kIiwiZXhwYW5kVHJlZSIsIml0ZW1zIiwiaXRtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiaW5zdGFuY2VPZiIsImRlZmF1bHRQcm9wcyIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsSTtBQUNqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmOzs7Ozs7O0FBT0EsU0FB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QWQ7QUFHSDs7QUFFRDs7Ozs7Ozs7O3NDQU1jO0FBQ1YsaUJBQUtnQixRQUFMLENBQWM7QUFDVmhCLDZCQUFhO0FBREgsYUFBZDtBQUdIOzs7O0VBM1prQyxnQkFBTWtELFM7O0FBOFo3Qzs7Ozs7Ozs7O2tCQTlacUJ0RCxTO0FBcWFyQkEsVUFBVXVELFNBQVYsR0FBc0I7QUFDbEIxRSxRQUFJLG9CQUFVMkUsTUFESTtBQUVsQnZDLFlBQVEsb0JBQVV3QyxJQUFWLENBQWVDLFVBRkw7QUFHbEJ2RCxpQkFBYSxvQkFBVXdELE9BQVYsQ0FBa0Isb0JBQVVDLFVBQVYsQ0FBcUIvQixNQUFyQixDQUFsQixDQUhLO0FBSWxCUixVQUFNLG9CQUFVb0M7QUFKRSxDQUF0Qjs7QUFPQTs7Ozs7OztBQU9BekQsVUFBVTZELFlBQVYsR0FBeUI7QUFDckJoRixRQUFJLE1BRGlCO0FBRXJCc0IsaUJBQWEsRUFGUTtBQUdyQmtCLFVBQU07QUFIZSxDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7QUM1ZEE7Ozs7OztBQUVBLElBQUksT0FBT3lDLE9BQU9DLFFBQWQsS0FBMkIsV0FBL0IsRUFBNEM7QUFDeENELFdBQU9DLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREQsT0FBT0MsUUFBUCxDQUFnQnJGLElBQWhCLGtCIiwiZmlsZSI6IlJlYWN0VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NWYwNzI2Nzg5MjliMDk0YzZkZiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb3BUeXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VHJlZSBmcm9tICcuLi9qc3gvUmVhY3RUcmVlJztcblxuLyoqXG4gKiBUcmVlIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHRyZWVcbiAqIEBjbGFzcyBUcmVlXG4gKiBAY2xhc3NkZXNjIFRyZWUgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggdHJlZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmVlIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSN0cmVlXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWV9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjcHJvcHNcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlUHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZWFjdFRyZWUgQ29tcG9uZW50IHdpdGhpbiB0aGUgdHJlZSBjb250YWluZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyIHRoZSBDb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMudHJlZSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VHJlZSwgeyAuLi50aGlzLnRyZWVQcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHdlIHNob3cgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnRyZWUuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIGRhdGEgb24gdGhlIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gZGF0YSBUaGUgcm9vdCBpdGVtIGxpc3QgZm9yIHRoZSB0cmVlIHdpdGggYWxsIGl0cyBjaGlsZHJlblxuICAgICAqL1xuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtIGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZ2V0U2VsZWN0ZWRJdGVtSWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb24gdGhlIHRyZWUgYmFzZWQgaW4gdGhlIGl0ZW0ncyBwYXJlbnRJZCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUuYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLnVwZGF0ZUl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGl0ZW0gaWQgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SShpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBUcmVlSXRlbSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmVlSXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtwYXJlbnRJZD0wXSBUaGUgcGFyZW50IGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IGNoaWxkcmVuIFRoZSBpdGVtJ3MgY2hpbGRyZW5cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBTdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVTdGF0ZVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSByb290IFRoZSByb290IGl0ZW0gY29udGFpbmluZyB0cmVlIHJvb3QgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIGlzIGluIHRoZSBsb2FkaW5nIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBzZWxlY3RlZEl0ZW0gVGhlIGlkIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsYm9vbGVhbj59IGV4cGFuZGVkSWRzIEEgY29sbGVjdGlvbiBvZiB0aGUgaWRzIG9mIGV4cGFuZGVkIGNhdGVnb3JpZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSB0cmVlIGlzIGVuYWJsZWRcbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZVByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPXRyZWVdXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXXxudWxsfSBpbml0aWFsRGF0YVxuICogQHByb3BlcnR5IHtTb3J0Q2FsbGJhY2t8bnVsbH0gc29ydFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBSZWFjdFRyZWUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gcHJvcHNcbiAqIEBjbGFzcyBSZWFjdFRyZWVcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgVHJlZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm9vdDogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0VHJlZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICdkaXNhYmxlZCd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgPHVsPnt0aGlzLnN0YXRlLnJvb3QubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX08L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHRyZWUgaXRlbSBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzW2l0ZW0uaWRdO1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cGFuZFN0YXR1cyA9IGV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb250cmFjdGVkJztcbiAgICAgICAgY29uc3QgaXRlbUV4cGFuZENsYXNzTmFtZSA9IGBleHBhbmQgJHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/IGV4cGFuZFN0YXR1cyA6ICcnfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUV4cGFuZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRDb250cmFjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JtYXQuY2FsbChudWxsLCBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBleHBhbmRlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIHRyZWUgc2hvd3Mgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIG9uIHRoZSB0cmVlIGFuZCByZW1vdmVzIGFsbCBwcmV2aW91cyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc29ydD10cnVlXVxuICAgICAqL1xuICAgIHNldERhdGEocm9vdCwgc29ydCA9IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc29ydFRyZWUgPSAodHJlZSkgPT4ge1xuICAgICAgICAgICAgdHJlZS5mb3JFYWNoKChicmFuY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VHJlZShicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvcnQodHJlZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRUcmVlKHJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIGRhdGEgaW4gYSB0cmVlIGJyYW5jaFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gdHJlZVxuICAgICAqL1xuICAgIHNvcnQodHJlZSkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyZWUuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpZCA/IG51bGwgOiBpZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICBleHBhbmRDb250cmFjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzKTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGVkW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZFtpZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzOiBleHBhbmRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiBSZWFjdFRyZWUgcm9vdCBlbGVtZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRJdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0l0ZW1DbGljaycsIHsgZGV0YWlsOiB7IHNlbGVjdGVkSXRlbSB9IH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGl0ZW1FdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0uaWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5wYXJlbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09ICcwJyB8fCBpdGVtLnBhcmVudElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLmNoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydC5icmFuY2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhbiBpdGVtIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgZm91bmRJdGVtID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0uaWQpO1xuXG4gICAgICAgIGlmIChmb3VuZEl0ZW0pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZvdW5kSXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2lkJyAmJiBrZXkgIT09ICdwYXJlbnRJZCcgJiYga2V5ICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSXRlbVtrZXldID0gaXRlbVtrZXldID8gaXRlbVtrZXldIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgICAgICBsZXQgYnJhbmNoO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gMCB8fCBpdGVtLnBhcmVudElkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSBjYWNoZVJvb3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKS5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYW5jaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2hbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290LFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpZCBvZiB0aGUgaXRlbVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZCh0aGlzLnN0YXRlLnJvb3QsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBpbiBpdGVtIGluIGEgdHJlZSBicmFuY2ggYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX1yb290XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtSW5CcmFuY2hCeUlkKHJvb3QsIGlkKSB7XG4gICAgICAgIGxldCByZXQgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJvb3RbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoaXRlbS5jaGlsZHJlbiwgaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxpY2F0ZXMgdGhlIHJvb3Qgb2JqZWN0IGZvciBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW1bXX1cbiAgICAgKi9cbiAgICByZXBsaWNhdGVSb290KCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0LnB1c2goJC5leHRlbmQoe30sIHRoaXMuc3RhdGUucm9vdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHByb3BlcnR5IG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZXhwYW5kQWxsKCkge1xuICAgICAgICBjb25zdCBleHBhbmRUcmVlID0gKGl0ZW1zLCBleHBhbmRlZElkcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0bS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJZHNbaXRtLmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZFRyZWUoaXRtLmNoaWxkcmVuLCBleHBhbmRlZElkcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWRJZHMgPSB7fTtcblxuICAgICAgICBleHBhbmRUcmVlKHRoaXMuc3RhdGUucm9vdCwgZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJhY3RzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29udHJhY3RBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWFjdFRyZWUgcHJvcFR5cGVzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KSksXG4gICAgc29ydDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogUmVhY3RUcmVlIGRlZmF1bHQgcHJvcHNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICd0cmVlJyxcbiAgICBpbml0aWFsRGF0YTogW10sXG4gICAgc29ydDogbnVsbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUcmVlLmpzeCIsImltcG9ydCBUcmVlIGZyb20gJy4uL2VzNi9UcmVlJztcblxuaWYgKHR5cGVvZiB3aW5kb3cuUmVhY3RMaWIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlJlYWN0TGliID0ge307XG59XG5cbndpbmRvdy5SZWFjdExpYi5UcmVlID0gVHJlZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RUcmVlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==