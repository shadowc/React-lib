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
/* 5 */
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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

var _ReactTree = __webpack_require__(5);

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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Tree = __webpack_require__(11);

var _Tree2 = _interopRequireDefault(_Tree);

var _ReactTree = __webpack_require__(5);

var _ReactTree2 = _interopRequireDefault(_ReactTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactTree = _ReactTree2.default;
window.ReactLib.Tree = _Tree2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTY2MTNmNmE0ZTVjZTJlMDk2OTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUcmVlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdFRyZWUuanMiXSwibmFtZXMiOlsiUmVhY3RUcmVlIiwicHJvcHMiLCJzdGF0ZSIsInJvb3QiLCJpbml0aWFsRGF0YSIsImV4cGFuZGVkSWRzIiwibG9hZGluZyIsInNlbGVjdGVkSXRlbSIsImVuYWJsZWQiLCJpZCIsIm1hcCIsInJlbmRlckl0ZW0iLCJiaW5kIiwiaXRlbSIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJmb3JtYXQiLCJjYWxsIiwiZGlzcGxheSIsInNldFN0YXRlIiwic29ydCIsInNvcnRUcmVlIiwidHJlZSIsImZvckVhY2giLCJicmFuY2giLCJzb3J0Rm4iLCJldmVudCIsImdlbmVyYXRlSXRlbUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdG9wUHJvcGFnYXRpb24iLCJpdGVtRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInJvb3RFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BhdGNoRXZlbnQiLCJjYWNoZVJvb3QiLCJyZXBsaWNhdGVSb290IiwicGFyZW50SWQiLCJwdXNoIiwiZmluZEl0ZW1JbkJyYW5jaEJ5SWQiLCJmb3VuZEl0ZW0iLCJrZXlzIiwia2V5IiwiZmluZEl0ZW1CeUlkIiwiaSIsInNwbGljZSIsInJldCIsImV4dGVuZCIsImV4cGFuZFRyZWUiLCJpdGVtcyIsIml0bSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImluc3RhbmNlT2YiLCJkZWZhdWx0UHJvcHMiLCJUcmVlIiwidHJlZVByb3BzIiwiY29udGFpbmVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsImdldFNlbGVjdGVkSXRlbUlkIiwiYWRkSXRlbSIsInVwZGF0ZUl0ZW0iLCJkZWxldGVJdGVtQnlJZCIsInNldEVuYWJsZWQiLCJleHBhbmRBbGwiLCJjb250cmFjdEFsbCIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7O0lBT3FCQSxTOzs7QUFDakIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFHZjs7Ozs7QUFIZSwwSEFDVEEsS0FEUzs7QUFRZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU0sTUFBS0YsS0FBTCxDQUFXRyxXQURSO0FBRVRDLHlCQUFhLEVBRko7QUFHVEMscUJBQVMsS0FIQTtBQUlUQywwQkFBYyxJQUpMO0FBS1RDLHFCQUFTO0FBTEEsU0FBYjtBQVJlO0FBZWxCOztBQUVEOzs7Ozs7Ozs7aUNBS1M7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssSUFBSSxLQUFLUCxLQUFMLENBQVdRLEVBQXBCLEVBQXdCLFdBQVcsS0FBS1AsS0FBTCxDQUFXTSxPQUFYLEdBQXFCLEVBQXJCLEdBQTBCLFVBQTdEO0FBQ0sscUJBQUtOLEtBQUwsQ0FBV0ksT0FBWCxHQUNHO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxpQkFESCxHQUVHO0FBQUE7QUFBQTtBQUFLLHlCQUFLSixLQUFMLENBQVdDLElBQVgsQ0FBZ0JPLEdBQWhCLENBQW9CLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQXBCO0FBQUw7QUFIUixhQURKO0FBUUg7O0FBRUQ7Ozs7Ozs7OzttQ0FNV0MsSSxFQUFNO0FBQ2IsZ0JBQU1DLFdBQVcsS0FBS1osS0FBTCxDQUFXRyxXQUFYLENBQXVCUSxLQUFLSixFQUE1QixDQUFqQjtBQUNBLGdCQUFNTSxnQkFBZ0IsS0FBS2IsS0FBTCxDQUFXSyxZQUFYLEtBQTRCTSxLQUFLSixFQUFqQyxHQUFzQyxVQUF0QyxHQUFtRCxFQUF6RTtBQUNBLGdCQUFNTyxlQUFlRixXQUFXLFVBQVgsR0FBd0IsWUFBN0M7QUFDQSxnQkFBTUcsbUNBQWdDSixLQUFLSyxRQUFMLENBQWNDLE1BQWQsR0FBdUJILFlBQXZCLEdBQXNDLEVBQXRFLENBQU47O0FBRUEsbUJBQ0k7QUFBQTtBQUFBLGtCQUFJLEtBQUtILEtBQUtKLEVBQWQ7QUFDSTtBQUNJLCtCQUFXUSxtQkFEZjtBQUVJLDZCQUFTLEtBQUtHLGtCQUFMLENBQXdCUixJQUF4QixDQUE2QixJQUE3QixFQUFtQ0MsS0FBS0osRUFBeEM7QUFGYixrQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJLG1DQUFXTSxhQURmO0FBRUksaUNBQVMsS0FBS00sVUFBTCxDQUFnQlQsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJDLEtBQUtKLEVBQWhDO0FBRmI7QUFJSyx5QkFBS1IsS0FBTCxDQUFXcUIsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJWLElBQTdCO0FBSkwsaUJBTEo7QUFXS0EscUJBQUtLLFFBQUwsQ0FBY0MsTUFBZCxHQUNHO0FBQUE7QUFBQTtBQUNJLCtCQUFPLEVBQUVLLFNBQVNWLFdBQVcsT0FBWCxHQUFxQixNQUFoQztBQURYO0FBR0tELHlCQUFLSyxRQUFMLENBQWNSLEdBQWQsQ0FBa0IsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFITCxpQkFESCxHQU1HO0FBakJSLGFBREo7QUFzQkg7O0FBRUQ7Ozs7Ozs7Ozs7bUNBT1dOLE8sRUFBUztBQUNoQixpQkFBS21CLFFBQUwsQ0FBYztBQUNWbkI7QUFEVSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7O2dDQVFRSCxJLEVBQW1CO0FBQUE7O0FBQUEsZ0JBQWJ1QixJQUFhLHVFQUFOLElBQU07O0FBQ3ZCLGdCQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZCQSxxQkFBS0MsT0FBTCxDQUFhLFVBQUNDLE1BQUQsRUFBWTtBQUNyQix3QkFBSUEsT0FBT1osUUFBUCxDQUFnQkMsTUFBcEIsRUFBNEI7QUFDeEJRLGlDQUFTRyxPQUFPWixRQUFoQjtBQUNIO0FBQ0osaUJBSkQ7O0FBTUEsdUJBQUtRLElBQUwsQ0FBVUUsSUFBVjtBQUNILGFBUkQ7O0FBVUEsZ0JBQUlGLElBQUosRUFBVTtBQUNOQyx5QkFBU3hCLElBQVQ7QUFDSDs7QUFFRCxpQkFBS3NCLFFBQUwsQ0FBYztBQUNWdEI7QUFEVSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7NkJBT0t5QixJLEVBQU07QUFDUCxnQkFBTUcsU0FBUyxLQUFLOUIsS0FBTCxDQUFXeUIsSUFBMUI7O0FBRUEsZ0JBQUksT0FBT0ssTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUM5QkgscUJBQUtGLElBQUwsQ0FBVUssTUFBVjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozs7O21DQVFXdEIsRSxFQUFJdUIsSyxFQUFPO0FBQ2xCLGdCQUFJLEtBQUs5QixLQUFMLENBQVdNLE9BQWYsRUFBd0I7QUFDcEIsb0JBQU1ELGVBQWUsS0FBS0wsS0FBTCxDQUFXSyxZQUFYLEtBQTRCRSxFQUE1QixHQUFpQyxJQUFqQyxHQUF3Q0EsRUFBN0Q7O0FBRUEscUJBQUtnQixRQUFMLENBQWM7QUFDVmxCO0FBRFUsaUJBQWQ7O0FBSUEsdUJBQU8sS0FBSzBCLGlCQUFMLENBQXVCRCxLQUF2QixFQUE4QnpCLFlBQTlCLENBQVA7QUFDSDs7QUFFRHlCLGtCQUFNRSxjQUFOO0FBQ0EsbUJBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs0Q0FRb0I7QUFDaEIsbUJBQU8sS0FBS2hDLEtBQUwsQ0FBV0ssWUFBbEI7QUFDSDs7OzJDQUVrQkUsRSxFQUFJdUIsSyxFQUFPO0FBQzFCQSxrQkFBTUUsY0FBTjs7QUFFQSxnQkFBSSxLQUFLaEMsS0FBTCxDQUFXTSxPQUFmLEVBQXdCO0FBQ3BCLG9CQUFNTSxXQUFXcUIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS2xDLEtBQUwsQ0FBV0csV0FBN0IsQ0FBakI7O0FBRUEsb0JBQUlTLFNBQVNMLEVBQVQsQ0FBSixFQUFrQjtBQUNkLDJCQUFPSyxTQUFTTCxFQUFULENBQVA7QUFDSCxpQkFGRCxNQUVPO0FBQ0hLLDZCQUFTTCxFQUFULElBQWUsSUFBZjtBQUNIOztBQUVELHFCQUFLZ0IsUUFBTCxDQUFjO0FBQ1ZwQixpQ0FBYVM7QUFESCxpQkFBZDtBQUdIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozs7OzswQ0FTa0JrQixLLEVBQU96QixZLEVBQWM7QUFDbkN5QixrQkFBTUUsY0FBTjtBQUNBRixrQkFBTUssZUFBTjs7QUFFQSxnQkFBTUMsWUFBWSxJQUFJQyxXQUFKLENBQWdCLFdBQWhCLEVBQTZCLEVBQUVDLFFBQVEsRUFBRWpDLDBCQUFGLEVBQVYsRUFBN0IsQ0FBbEI7O0FBRUEsZ0JBQU1rQyxXQUFXQyxTQUFTQyxjQUFULENBQXdCLEtBQUsxQyxLQUFMLENBQVdRLEVBQW5DLENBQWpCOztBQUVBLGdCQUFJZ0MsUUFBSixFQUFjO0FBQ1ZBLHlCQUFTRyxhQUFULENBQXVCTixTQUF2QjtBQUNIOztBQUVELG1CQUFPLEtBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7OztnQ0FPUXpCLEksRUFBTTtBQUNWLGdCQUFNZ0MsWUFBWSxLQUFLQyxhQUFMLEVBQWxCOztBQUVBLGdCQUFJLE9BQU9qQyxLQUFLSixFQUFaLEtBQW1CLFdBQW5CLElBQ0EsT0FBT0ksS0FBS2tDLFFBQVosS0FBeUIsV0FEekIsSUFFQSxPQUFPbEMsS0FBS0ssUUFBWixLQUF5QixXQUY3QixFQUUwQztBQUN0QyxvQkFBSUwsS0FBS2tDLFFBQUwsS0FBa0IsR0FBbEIsSUFBeUJsQyxLQUFLa0MsUUFBTCxLQUFrQixDQUEvQyxFQUFrRDtBQUM5Q0YsOEJBQVVHLElBQVYsQ0FBZW5DLElBQWY7QUFDQSx5QkFBS2EsSUFBTCxDQUFVbUIsU0FBVjtBQUNILGlCQUhELE1BR087QUFDSCx3QkFBTWYsU0FBUyxLQUFLbUIsb0JBQUwsQ0FBMEJKLFNBQTFCLEVBQXFDaEMsS0FBS2tDLFFBQTFDLENBQWY7O0FBRUEsd0JBQUlqQixNQUFKLEVBQVk7QUFDUkEsK0JBQU9aLFFBQVAsQ0FBZ0I4QixJQUFoQixDQUFxQm5DLElBQXJCO0FBQ0EsNkJBQUthLElBQUwsQ0FBVUksT0FBT1osUUFBakI7QUFDSCxxQkFIRCxNQUdPO0FBQ0gyQixrQ0FBVUcsSUFBVixDQUFlbkMsSUFBZjtBQUNBLDZCQUFLYSxJQUFMLENBQVVtQixTQUFWO0FBQ0g7QUFDSjtBQUNKOztBQUVELGlCQUFLcEIsUUFBTCxDQUFjO0FBQ1Z0QixzQkFBTTBDO0FBREksYUFBZDtBQUdIOztBQUVEOzs7Ozs7Ozs7O21DQU9XaEMsSSxFQUFNO0FBQ2IsZ0JBQU1nQyxZQUFZLEtBQUtDLGFBQUwsRUFBbEI7QUFDQSxnQkFBTUksWUFBWSxLQUFLRCxvQkFBTCxDQUEwQkosU0FBMUIsRUFBcUNoQyxLQUFLSixFQUExQyxDQUFsQjs7QUFFQSxnQkFBSXlDLFNBQUosRUFBZTtBQUNYZix1QkFBT2dCLElBQVAsQ0FBWUQsU0FBWixFQUF1QnJCLE9BQXZCLENBQStCLFVBQUN1QixHQUFELEVBQVM7QUFDcEMsd0JBQUlBLFFBQVEsSUFBUixJQUFnQkEsUUFBUSxVQUF4QixJQUFzQ0EsUUFBUSxVQUFsRCxFQUE4RDtBQUMxREYsa0NBQVVFLEdBQVYsSUFBaUJ2QyxLQUFLdUMsR0FBTCxJQUFZdkMsS0FBS3VDLEdBQUwsQ0FBWixHQUF3QixJQUF6QztBQUNIO0FBQ0osaUJBSkQ7QUFLSDs7QUFFRCxpQkFBSzFCLElBQUwsQ0FBVW1CLFNBQVY7O0FBRUEsaUJBQUtwQixRQUFMLENBQWM7QUFDVnRCLHNCQUFNMEM7QUFESSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7dUNBT2VwQyxFLEVBQUk7QUFDZixnQkFBTW9DLFlBQVksS0FBS0MsYUFBTCxFQUFsQjtBQUNBLGdCQUFNakMsT0FBTyxLQUFLd0MsWUFBTCxDQUFrQjVDLEVBQWxCLENBQWI7QUFDQSxnQkFBSUYsZUFBZSxLQUFLTCxLQUFMLENBQVdLLFlBQTlCO0FBQ0EsZ0JBQUl1QixlQUFKOztBQUVBLGdCQUFJakIsSUFBSixFQUFVO0FBQ04sb0JBQUlBLEtBQUtrQyxRQUFMLEtBQWtCLENBQWxCLElBQXVCbEMsS0FBS2tDLFFBQUwsS0FBa0IsR0FBN0MsRUFBa0Q7QUFDOUNqQiw2QkFBU2UsU0FBVDtBQUNILGlCQUZELE1BRU87QUFDSGYsNkJBQVMsS0FBS21CLG9CQUFMLENBQTBCSixTQUExQixFQUFxQ2hDLEtBQUtrQyxRQUExQyxFQUFvRDdCLFFBQTdEO0FBQ0g7O0FBRUQsb0JBQUlYLGlCQUFpQk0sS0FBS0osRUFBMUIsRUFBOEI7QUFDMUJGLG1DQUFlLElBQWY7QUFDSDtBQUNKOztBQUVELGdCQUFJdUIsTUFBSixFQUFZO0FBQ1IscUJBQUssSUFBSXdCLElBQUksQ0FBYixFQUFnQkEsSUFBSXhCLE9BQU9YLE1BQTNCLEVBQW1DbUMsR0FBbkMsRUFBd0M7QUFDcEMsd0JBQUl4QixPQUFPd0IsQ0FBUCxFQUFVN0MsRUFBVixLQUFpQkEsRUFBckIsRUFBeUI7QUFDckJxQiwrQkFBT3lCLE1BQVAsQ0FBY0QsQ0FBZCxFQUFpQixDQUFqQjtBQUNBO0FBQ0g7QUFDSjtBQUNKOztBQUVELGlCQUFLN0IsUUFBTCxDQUFjO0FBQ1Z0QixzQkFBTTBDLFNBREk7QUFFVnRDO0FBRlUsYUFBZDtBQUlIOztBQUVEOzs7Ozs7Ozs7OztxQ0FRYUUsRSxFQUFJO0FBQ2IsbUJBQU8sS0FBS3dDLG9CQUFMLENBQTBCLEtBQUsvQyxLQUFMLENBQVdDLElBQXJDLEVBQTJDTSxFQUEzQyxDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7NkNBVXFCTixJLEVBQU1NLEUsRUFBSTtBQUMzQixnQkFBSStDLE1BQU0sSUFBVjs7QUFFQSxpQkFBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUluRCxLQUFLZ0IsTUFBekIsRUFBaUNtQyxHQUFqQyxFQUFzQztBQUNsQyxvQkFBTXpDLE9BQU9WLEtBQUttRCxDQUFMLENBQWI7QUFDQSxvQkFBSXpDLEtBQUtKLEVBQUwsS0FBWUEsRUFBaEIsRUFBb0I7QUFDaEIrQywwQkFBTTNDLElBQU47QUFDQTtBQUNILGlCQUhELE1BR08sSUFBSUEsS0FBS0ssUUFBTCxDQUFjQyxNQUFsQixFQUEwQjtBQUM3QnFDLDBCQUFNLEtBQUtQLG9CQUFMLENBQTBCcEMsS0FBS0ssUUFBL0IsRUFBeUNULEVBQXpDLENBQU47O0FBRUEsd0JBQUkrQyxRQUFRLElBQVosRUFBa0I7QUFDZDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxtQkFBT0EsR0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozt3Q0FRZ0I7QUFDWixnQkFBTUEsTUFBTSxFQUFaOztBQUVBLGlCQUFLLElBQUlGLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLcEQsS0FBTCxDQUFXQyxJQUFYLENBQWdCZ0IsTUFBcEMsRUFBNENtQyxHQUE1QyxFQUFpRDtBQUM3Q0Usb0JBQUlSLElBQUosQ0FBUyxpQkFBRVMsTUFBRixDQUFTLEVBQVQsRUFBYSxLQUFLdkQsS0FBTCxDQUFXQyxJQUFYLENBQWdCbUQsQ0FBaEIsQ0FBYixDQUFUO0FBQ0g7O0FBRUQsbUJBQU9FLEdBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7OzttQ0FPV2hELE8sRUFBUztBQUNoQixpQkFBS2lCLFFBQUwsQ0FBYztBQUNWakI7QUFEVSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7OztvQ0FNWTtBQUNSLGdCQUFNa0QsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUXRELFdBQVIsRUFBd0I7QUFDdkNzRCxzQkFBTTlCLE9BQU4sQ0FBYyxVQUFDK0IsR0FBRCxFQUFTO0FBQ25CLHdCQUFJQSxJQUFJMUMsUUFBSixDQUFhQyxNQUFqQixFQUF5QjtBQUNyQmQsb0NBQVl1RCxJQUFJbkQsRUFBaEIsSUFBc0IsSUFBdEI7QUFDQWlELG1DQUFXRSxJQUFJMUMsUUFBZixFQUF5QmIsV0FBekI7QUFDSDtBQUNKLGlCQUxEO0FBTUgsYUFQRDs7QUFTQSxnQkFBTUEsY0FBYyxFQUFwQjs7QUFFQXFELHVCQUFXLEtBQUt4RCxLQUFMLENBQVdDLElBQXRCLEVBQTRCRSxXQUE1Qjs7QUFFQSxpQkFBS29CLFFBQUwsQ0FBYztBQUNWcEI7QUFEVSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7OztzQ0FNYztBQUNWLGlCQUFLb0IsUUFBTCxDQUFjO0FBQ1ZwQiw2QkFBYTtBQURILGFBQWQ7QUFHSDs7OztFQTNaa0MsZ0JBQU13RCxTOztBQThaN0M7Ozs7Ozs7OztrQkE5WnFCN0QsUztBQXFhckJBLFVBQVU4RCxTQUFWLEdBQXNCO0FBQ2xCckQsUUFBSSxvQkFBVXNELE1BREk7QUFFbEJ6QyxZQUFRLG9CQUFVMEMsSUFBVixDQUFlQyxVQUZMO0FBR2xCN0QsaUJBQWEsb0JBQVU4RCxPQUFWLENBQWtCLG9CQUFVQyxVQUFWLENBQXFCaEMsTUFBckIsQ0FBbEIsQ0FISztBQUlsQlQsVUFBTSxvQkFBVXNDO0FBSkUsQ0FBdEI7O0FBT0E7Ozs7Ozs7QUFPQWhFLFVBQVVvRSxZQUFWLEdBQXlCO0FBQ3JCM0QsUUFBSSxNQURpQjtBQUVyQkwsaUJBQWEsRUFGUTtBQUdyQnNCLFVBQU07QUFIZSxDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWRBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQjJDLEk7QUFDakIsZ0JBQVlwRSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2Y7Ozs7Ozs7QUFPQSxTQUFLMkIsSUFBTCxHQUFZLElBQVo7O0FBRUE7Ozs7OztBQU1BLFNBQUtuQixFQUFMLEdBQVVSLE1BQU1RLEVBQWhCOztBQUVBOzs7Ozs7QUFNQSxTQUFLNkQsU0FBTCxHQUFpQnJFLEtBQWpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OzJCQU9Pc0UsUyxFQUFXO0FBQ2QsV0FBSzNDLElBQUwsR0FBWSxtQkFBUzRDLE1BQVQsQ0FBZ0IsZ0JBQU1DLGFBQU4sbUNBQW9DLEtBQUtILFNBQXpDLEVBQWhCLEVBQXVFQyxTQUF2RSxDQUFaO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dqRSxPLEVBQVM7QUFDaEIsV0FBS3NCLElBQUwsQ0FBVThDLFVBQVYsQ0FBcUJwRSxPQUFyQjtBQUNIOztBQUVEOzs7Ozs7Ozs7OzRCQU9RcUUsSSxFQUFNO0FBQ1YsV0FBSy9DLElBQUwsQ0FBVWdELE9BQVYsQ0FBa0JELElBQWxCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7d0NBT29CO0FBQ2hCLGFBQU8sS0FBSy9DLElBQUwsQ0FBVWlELGlCQUFWLEVBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs0QkFPUWhFLEksRUFBTTtBQUNWLFdBQUtlLElBQUwsQ0FBVWtELE9BQVYsQ0FBa0JqRSxJQUFsQjtBQUNIOztBQUVEOzs7Ozs7Ozs7OytCQU9XQSxJLEVBQU07QUFDYixXQUFLZSxJQUFMLENBQVVtRCxVQUFWLENBQXFCbEUsSUFBckI7QUFDSDs7QUFFRDs7Ozs7Ozs7OzttQ0FPZUosRSxFQUFJO0FBQ2YsV0FBS21CLElBQUwsQ0FBVW9ELGNBQVYsQ0FBeUJ2RSxFQUF6QjtBQUNIOztBQUVEOzs7Ozs7Ozs7O2lDQU9hQSxFLEVBQUk7QUFDYixhQUFPLEtBQUttQixJQUFMLENBQVV5QixZQUFWLENBQXVCNUMsRUFBdkIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7OytCQU9XRCxPLEVBQVM7QUFDaEIsV0FBS29CLElBQUwsQ0FBVXFELFVBQVYsQ0FBcUJ6RSxPQUFyQjtBQUNIOztBQUVEOzs7Ozs7Ozs7Z0NBTVk7QUFDUixXQUFLb0IsSUFBTCxDQUFVc0QsU0FBVjtBQUNIOztBQUVEOzs7Ozs7Ozs7a0NBTWM7QUFDVixXQUFLdEQsSUFBTCxDQUFVdUQsV0FBVjtBQUNIOzs7Ozs7a0JBakpnQmQsSTs7Ozs7Ozs7Ozs7OztBQ1hyQjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE9BQU9lLE9BQU9DLFFBQWQsS0FBMkIsV0FBL0IsRUFBNEM7QUFDeENELFdBQU9DLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFREQsT0FBT0MsUUFBUCxDQUFnQnJGLFNBQWhCO0FBQ0FvRixPQUFPQyxRQUFQLENBQWdCaEIsSUFBaEIsa0IiLCJmaWxlIjoiUmVhY3RUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2NjEzZjZhNGU1Y2UyZTA5NjkzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFRyZWVJdGVtIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyZWVJdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSB1bmlxdWUgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gW3BhcmVudElkPTBdIFRoZSBwYXJlbnQgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXX0gY2hpbGRyZW4gVGhlIGl0ZW0ncyBjaGlsZHJlblxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVN0YXRlXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IHJvb3QgVGhlIHJvb3QgaXRlbSBjb250YWluaW5nIHRyZWUgcm9vdCBjaGlsZHJlblxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgaXMgaW4gdGhlIGxvYWRpbmcgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHNlbGVjdGVkSXRlbSBUaGUgaWQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZyxib29sZWFuPn0gZXhwYW5kZWRJZHMgQSBjb2xsZWN0aW9uIG9mIHRoZSBpZHMgb2YgZXhwYW5kZWQgY2F0ZWdvcmllc1xuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIHRyZWUgaXMgZW5hYmxlZFxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlUHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RUcmVlUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9dHJlZV1cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGZvcm1hdFxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfG51bGx9IGluaXRpYWxEYXRhXG4gKiBAcHJvcGVydHkge1NvcnRDYWxsYmFja3xudWxsfSBzb3J0XG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFJlYWN0VHJlZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBwcm9wc1xuICogQGNsYXNzIFJlYWN0VHJlZVxuICogQGNsYXNzZGVzYyBSZWFjdCBUcmVlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb290OiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RUcmVlIHJlbmRlciBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJ2Rpc2FibGVkJ30+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICA8dWw+e3RoaXMuc3RhdGUucm9vdC5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfTwvdWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgdHJlZSBpdGVtIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJZHNbaXRlbS5pZF07XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICAgICAgY29uc3QgZXhwYW5kU3RhdHVzID0gZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbnRyYWN0ZWQnO1xuICAgICAgICBjb25zdCBpdGVtRXhwYW5kQ2xhc3NOYW1lID0gYGV4cGFuZCAke2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID8gZXhwYW5kU3RhdHVzIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtRXhwYW5kQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmV4cGFuZENvbnRyYWN0SXRlbS5iaW5kKHRoaXMsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcm1hdC5jYWxsKG51bGwsIGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgdHJlZSBzaG93cyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgb24gdGhlIHRyZWUgYW5kIHJlbW92ZXMgYWxsIHByZXZpb3VzIGRhdGFcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IHJvb3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzb3J0PXRydWVdXG4gICAgICovXG4gICAgc2V0RGF0YShyb290LCBzb3J0ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzb3J0VHJlZSA9ICh0cmVlKSA9PiB7XG4gICAgICAgICAgICB0cmVlLmZvckVhY2goKGJyYW5jaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUcmVlKGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydCh0cmVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgc29ydFRyZWUocm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgZGF0YSBpbiBhIHRyZWUgYnJhbmNoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSB0cmVlXG4gICAgICovXG4gICAgc29ydCh0cmVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydDtcblxuICAgICAgICBpZiAodHlwZW9mIHNvcnRGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJlZS5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgc2VsZWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGlkID8gbnVsbCA6IGlkO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIGV4cGFuZENvbnRyYWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kZWRbaWRdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkW2lkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJZHM6IGV4cGFuZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IG9uIFJlYWN0VHJlZSByb290IGVsZW1lbnQgdGhhdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSXRlbUNsaWNrJywgeyBkZXRhaWw6IHsgc2VsZWN0ZWRJdGVtIH0gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaXRlbUV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gdG8gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5pZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLnBhcmVudElkICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0uY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gJzAnIHx8IGl0ZW0ucGFyZW50SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guY2hpbGRyZW4ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGZvdW5kSXRlbSA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLmlkKTtcblxuICAgICAgICBpZiAoZm91bmRJdGVtKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmb3VuZEl0ZW0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpZCcgJiYga2V5ICE9PSAncGFyZW50SWQnICYmIGtleSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA/IGl0ZW1ba2V5XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgbGV0IGJyYW5jaDtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09IDAgfHwgaXRlbS5wYXJlbnRJZCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gY2FjaGVSb290O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5wYXJlbnRJZCkuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdCxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQodGhpcy5zdGF0ZS5yb290LCBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgaW4gaXRlbSBpbiBhIHRyZWUgYnJhbmNoIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119cm9vdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUluQnJhbmNoQnlJZChyb290LCBpZCkge1xuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290W2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXQgPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGl0ZW0uY2hpbGRyZW4sIGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsaWNhdGVzIHRoZSByb290IG9iamVjdCBmb3IgY2hhbmdlc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtW119XG4gICAgICovXG4gICAgcmVwbGljYXRlUm9vdCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJldC5wdXNoKCQuZXh0ZW5kKHt9LCB0aGlzLnN0YXRlLnJvb3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBwcm9wZXJ0eSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVuYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kVHJlZSA9IChpdGVtcywgZXhwYW5kZWRJZHMpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0bSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdG0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzW2l0bS5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRUcmVlKGl0bS5jaGlsZHJlbiwgZXhwYW5kZWRJZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkSWRzID0ge307XG5cbiAgICAgICAgZXhwYW5kVHJlZSh0aGlzLnN0YXRlLnJvb3QsIGV4cGFuZGVkSWRzKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVhY3RUcmVlIHByb3BUeXBlc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkpLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIFJlYWN0VHJlZSBkZWZhdWx0IHByb3BzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAndHJlZScsXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIHNvcnQ6IG51bGxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuXG4vKipcbiAqIFRyZWUgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdHJlZVxuICogQGNsYXNzIFRyZWVcbiAqIEBjbGFzc2Rlc2MgVHJlZSBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCB0cmVlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyZWUgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3RyZWVcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWVQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlYWN0VHJlZSBDb21wb25lbnQgd2l0aGluIHRoZSB0cmVlIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy50cmVlID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmVlLCB7IC4uLnRoaXMudHJlZVByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgd2Ugc2hvdyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgZGF0YSBvbiB0aGUgdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSBkYXRhIFRoZSByb290IGl0ZW0gbGlzdCBmb3IgdGhlIHRyZWUgd2l0aCBhbGwgaXRzIGNoaWxkcmVuXG4gICAgICovXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXREYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW0gaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXRTZWxlY3RlZEl0ZW1JZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvbiB0aGUgdHJlZSBiYXNlZCBpbiB0aGUgaXRlbSdzIHBhcmVudElkIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gYWRkXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUudXBkYXRlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaXRlbSBpZCB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuaW1wb3J0IFJlYWN0VHJlZSBmcm9tICcuLi9qc3gvUmVhY3RUcmVlJztcblxuaWYgKHR5cGVvZiB3aW5kb3cuUmVhY3RMaWIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlJlYWN0TGliID0ge307XG59XG5cbndpbmRvdy5SZWFjdExpYi5SZWFjdFRyZWUgPSBSZWFjdFRyZWU7XG53aW5kb3cuUmVhY3RMaWIuVHJlZSA9IFRyZWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0VHJlZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=