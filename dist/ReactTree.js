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
      this.tree.getSelectedItemId();
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
      this.tree.findItemById(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODY3YmUzYmU1MDg4MTk4NDNmNzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwibmFtZXMiOlsiVHJlZSIsInByb3BzIiwidHJlZSIsImlkIiwidHJlZVByb3BzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJnZXRTZWxlY3RlZEl0ZW1JZCIsIml0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZmluZEl0ZW1CeUlkIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJleHBhbmRBbGwiLCJjb250cmFjdEFsbCIsIlJlYWN0VHJlZSIsInN0YXRlIiwicm9vdCIsImluaXRpYWxEYXRhIiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJtYXAiLCJyZW5kZXJJdGVtIiwiYmluZCIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJmb3JtYXQiLCJjYWxsIiwiZGlzcGxheSIsInNldFN0YXRlIiwic29ydCIsInNvcnRUcmVlIiwiZm9yRWFjaCIsImJyYW5jaCIsInNvcnRGbiIsImV2ZW50IiwiZ2VuZXJhdGVJdGVtQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIk9iamVjdCIsImFzc2lnbiIsInN0b3BQcm9wYWdhdGlvbiIsIml0ZW1FdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsInB1c2giLCJmaW5kSXRlbUluQnJhbmNoQnlJZCIsImZvdW5kSXRlbSIsImtleXMiLCJrZXkiLCJpIiwic3BsaWNlIiwicmV0IiwiZXh0ZW5kIiwiZXhwYW5kVHJlZSIsIml0ZW1zIiwiaXRtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiaW5zdGFuY2VPZiIsImRlZmF1bHRQcm9wcyIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQkEsSTtBQUNqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmOzs7Ozs7O0FBT0EsU0FB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OztzQ0FNYztBQUNWLGlCQUFLZ0IsUUFBTCxDQUFjO0FBQ1ZoQiw2QkFBYTtBQURILGFBQWQ7QUFHSDs7OztFQTNaa0MsZ0JBQU1rRCxTOztBQThaN0M7Ozs7Ozs7OztrQkE5WnFCdEQsUztBQXFhckJBLFVBQVV1RCxTQUFWLEdBQXNCO0FBQ2xCMUUsUUFBSSxvQkFBVTJFLE1BREk7QUFFbEJ2QyxZQUFRLG9CQUFVd0MsSUFBVixDQUFlQyxVQUZMO0FBR2xCdkQsaUJBQWEsb0JBQVV3RCxPQUFWLENBQWtCLG9CQUFVQyxVQUFWLENBQXFCL0IsTUFBckIsQ0FBbEIsQ0FISztBQUlsQlIsVUFBTSxvQkFBVW9DO0FBSkUsQ0FBdEI7O0FBT0E7Ozs7Ozs7QUFPQXpELFVBQVU2RCxZQUFWLEdBQXlCO0FBQ3JCaEYsUUFBSSxNQURpQjtBQUVyQnNCLGlCQUFhLEVBRlE7QUFHckJrQixVQUFNO0FBSGUsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDNWRBOzs7Ozs7QUFFQSxJQUFJLE9BQU95QyxPQUFPQyxRQUFkLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDRCxXQUFPQyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0g7O0FBRURELE9BQU9DLFFBQVAsQ0FBZ0JyRixJQUFoQixrQiIsImZpbGUiOiJSZWFjdFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY3YmUzYmU1MDg4MTk4NDNmNzkiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRyZWUgZnJvbSAnLi4vanN4L1JlYWN0VHJlZSc7XG5cbi8qKlxuICogVHJlZSBjbGFzcyBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7UmVhY3RUcmVlUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0cmVlXG4gKiBAY2xhc3MgVHJlZVxuICogQGNsYXNzZGVzYyBUcmVlIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIHRyZWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJlZSBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjdHJlZVxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZVByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUmVhY3RUcmVlIENvbXBvbmVudCB3aXRoaW4gdGhlIHRyZWUgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnRyZWUgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFRyZWUsIHsgLi4udGhpcy50cmVlUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB3ZSBzaG93IG9ubHkgYSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBkYXRhIG9uIHRoZSB0cmVlLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IGRhdGEgVGhlIHJvb3QgaXRlbSBsaXN0IGZvciB0aGUgdHJlZSB3aXRoIGFsbCBpdHMgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkSXRlbUlkKCkge1xuICAgICAgICB0aGlzLnRyZWUuZ2V0U2VsZWN0ZWRJdGVtSWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb24gdGhlIHRyZWUgYmFzZWQgaW4gdGhlIGl0ZW0ncyBwYXJlbnRJZCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUuYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLnVwZGF0ZUl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGl0ZW0gaWQgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SShpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBUcmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBUcmVlIGlzIGludGVyYWN0aXZlXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRoZSBpdGVtcyB3aXRoIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmV4cGFuZEFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdGhlIGl0ZW1zIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnRyZWUuY29udHJhY3RBbGwoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RyZWUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFRyZWVJdGVtIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyZWVJdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSB1bmlxdWUgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gW3BhcmVudElkPTBdIFRoZSBwYXJlbnQgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXX0gY2hpbGRyZW4gVGhlIGl0ZW0ncyBjaGlsZHJlblxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVN0YXRlXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IHJvb3QgVGhlIHJvb3QgaXRlbSBjb250YWluaW5nIHRyZWUgcm9vdCBjaGlsZHJlblxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgaXMgaW4gdGhlIGxvYWRpbmcgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHNlbGVjdGVkSXRlbSBUaGUgaWQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZyxib29sZWFuPn0gZXhwYW5kZWRJZHMgQSBjb2xsZWN0aW9uIG9mIHRoZSBpZHMgb2YgZXhwYW5kZWQgY2F0ZWdvcmllc1xuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIHRyZWUgaXMgZW5hYmxlZFxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlUHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RUcmVlUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9dHJlZV1cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGZvcm1hdFxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfG51bGx9IGluaXRpYWxEYXRhXG4gKiBAcHJvcGVydHkge1NvcnRDYWxsYmFja3xudWxsfSBzb3J0XG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFJlYWN0VHJlZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBwcm9wc1xuICogQGNsYXNzIFJlYWN0VHJlZVxuICogQGNsYXNzZGVzYyBSZWFjdCBUcmVlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb290OiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RUcmVlIHJlbmRlciBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJ2Rpc2FibGVkJ30+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICA8dWw+e3RoaXMuc3RhdGUucm9vdC5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfTwvdWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgdHJlZSBpdGVtIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJZHNbaXRlbS5pZF07XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICAgICAgY29uc3QgZXhwYW5kU3RhdHVzID0gZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbnRyYWN0ZWQnO1xuICAgICAgICBjb25zdCBpdGVtRXhwYW5kQ2xhc3NOYW1lID0gYGV4cGFuZCAke2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID8gZXhwYW5kU3RhdHVzIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtRXhwYW5kQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmV4cGFuZENvbnRyYWN0SXRlbS5iaW5kKHRoaXMsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcm1hdC5jYWxsKG51bGwsIGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgdHJlZSBzaG93cyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgb24gdGhlIHRyZWUgYW5kIHJlbW92ZXMgYWxsIHByZXZpb3VzIGRhdGFcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IHJvb3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzb3J0PXRydWVdXG4gICAgICovXG4gICAgc2V0RGF0YShyb290LCBzb3J0ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzb3J0VHJlZSA9ICh0cmVlKSA9PiB7XG4gICAgICAgICAgICB0cmVlLmZvckVhY2goKGJyYW5jaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUcmVlKGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydCh0cmVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgc29ydFRyZWUocm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgZGF0YSBpbiBhIHRyZWUgYnJhbmNoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSB0cmVlXG4gICAgICovXG4gICAgc29ydCh0cmVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydDtcblxuICAgICAgICBpZiAodHlwZW9mIHNvcnRGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJlZS5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgc2VsZWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGlkID8gbnVsbCA6IGlkO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIGV4cGFuZENvbnRyYWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kZWRbaWRdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkW2lkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJZHM6IGV4cGFuZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IG9uIFJlYWN0VHJlZSByb290IGVsZW1lbnQgdGhhdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSXRlbUNsaWNrJywgeyBkZXRhaWw6IHsgc2VsZWN0ZWRJdGVtIH0gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaXRlbUV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gdG8gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5pZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLnBhcmVudElkICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0uY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gJzAnIHx8IGl0ZW0ucGFyZW50SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guY2hpbGRyZW4ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0LmJyYW5jaCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUm9vdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKGZvdW5kSXRlbSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaWQnICYmIGtleSAhPT0gJ3BhcmVudElkJyAmJiBrZXkgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJdGVtW2tleV0gPSBpdGVtW2tleV0gPyBpdGVtW2tleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kSXRlbUJ5SWQoaWQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgICAgIGxldCBicmFuY2g7XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSAwIHx8IGl0ZW0ucGFyZW50SWQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IGNhY2hlUm9vdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhbmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3QsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW4gaXRlbSBpbiB0aGUgdHJlZSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSBpdGVtXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKHRoaXMuc3RhdGUucm9vdCwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGluIGl0ZW0gaW4gYSB0cmVlIGJyYW5jaCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfXJvb3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1JbkJyYW5jaEJ5SWQocm9vdCwgaWQpIHtcbiAgICAgICAgbGV0IHJldCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdFtpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChpdGVtLmNoaWxkcmVuLCBpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGljYXRlcyB0aGUgcm9vdCBvYmplY3QgZm9yIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbVtdfVxuICAgICAqL1xuICAgIHJlcGxpY2F0ZVJvb3QoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQucHVzaCgkLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZS5yb290W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgcHJvcGVydHkgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRyZWUgPSAoaXRlbXMsIGV4cGFuZGVkSWRzKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZElkc1tpdG0uaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kVHJlZShpdG0uY2hpbGRyZW4sIGV4cGFuZGVkSWRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBhbmRlZElkcyA9IHt9O1xuXG4gICAgICAgIGV4cGFuZFRyZWUodGhpcy5zdGF0ZS5yb290LCBleHBhbmRlZElkcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkczoge31cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlYWN0VHJlZSBwcm9wVHlwZXNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBSZWFjdFRyZWUgZGVmYXVsdCBwcm9wc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ3RyZWUnLFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBzb3J0OiBudWxsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRyZWUuanN4IiwiaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7fTtcbn1cblxud2luZG93LlJlYWN0TGliLlRyZWUgPSBUcmVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwic291cmNlUm9vdCI6IiJ9