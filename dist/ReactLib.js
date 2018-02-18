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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 4 */
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

var _ReactGrid = __webpack_require__(5);

var _ReactGrid2 = _interopRequireDefault(_ReactGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Definition of a sort state
 *
 * @typedef {object} SortType
 * @property {string} orderBy The name of the column we're ordering by
 * @property {boolean} orderReverse True if the order is reversed
 */

/**
 * Grid class constructor
 *
 * @param {GridProps} The properties of the grid
 * @class Grid
 * @classdesc Grid main class, use this class to interface with grids
 */
var Grid = function () {
  function Grid(props) {
    _classCallCheck(this, Grid);

    /**
     * The grid component reference
     *
     * @name Grid#grid
     * @type {ReactGrid}
     * @private
     */
    this.grid = null;

    /**
     * The id of the grid
     *
     * @name Grid#id
     * @type {string}
     */
    this.id = props.id;

    /**
     * The props for the grid
     *
     * @name Grid#props
     * @type {GridProps}
     */
    this.gridProps = props;
  }

  /**
   * Renders the Grid Component within the grid
   *
   * @memberOf Grid
   * @instance
   * @param {Element} container The container element into which to render the Component
   */


  _createClass(Grid, [{
    key: 'render',
    value: function render(container) {
      this.grid = _reactDom2.default.render(_react2.default.createElement(_ReactGrid2.default, _extends({}, this.gridProps)), container);
    }

    /**
     * Adds rows to the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @param {RowProps[]} rows The rows to add
     * @param {number} [ndx] An optional index into which to insert the rows
     */

  }, {
    key: 'addRows',
    value: function addRows(rows, ndx) {
      this.grid.addRows(rows, ndx);
    }

    /**
     * Removes all existing rows from the Grid Component and adds new rows provided
     *
     * @memberOf Grid
     * @instance
     * @param {RowProps[]} rows The rows to set
     */

  }, {
    key: 'setRows',
    value: function setRows(rows) {
      this.grid.setRows(rows);
    }

    /**
     * Deletes rows from the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @param {number} ndx Starting index into which to delete rows
     * @param {number} [length=1] The number of rows to delete
     */

  }, {
    key: 'deleteRows',
    value: function deleteRows(ndx, length) {
      this.grid.deleteRows(ndx, length);
    }

    /**
     * Sort rows by a specific column name
     *
     * @memberOf Grid
     * @instance
     * @param {string} sortBy The column name to sort by
     */

  }, {
    key: 'sortBy',
    value: function sortBy(_sortBy) {
      this.grid.sortBy(_sortBy);
    }

    /**
     * Get the sort situation of a Grid Component
     *
     * @memberOf Grid
     * @instance
     * @return {SortType}
     */

  }, {
    key: 'getSort',
    value: function getSort() {
      return this.grid.getSort();
    }

    /**
     * Gets a GridRow object representing the row at ndx
     *
     * @memberOf Grid
     * @instance
     * @param {number} ndx The index at which to retrieve the row
     * @return {GridRow|null}
     */

  }, {
    key: 'getRow',
    value: function getRow(ndx) {
      return this.grid.getRow(ndx);
    }

    /**
     * Gets the selected rows as an Array of GridRow objects
     *
     * @memberOf Grid
     * @instance
     * @return {GridRow[]}
     */

  }, {
    key: 'getSelectedRows',
    value: function getSelectedRows() {
      return this.grid.getSelectedRows();
    }

    /**
     * Gets the ids of the selected rows in the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @return {string[]}
     */

  }, {
    key: 'getSelectedRowIds',
    value: function getSelectedRowIds() {
      return this.grid.getSelectedRowIds();
    }

    /**
     * Returns the column collection
     * @memberOf Grid
     * @instance
     * @returns {GridColumn[]}
     */

  }, {
    key: 'getColumns',
    value: function getColumns() {
      return this.grid.getColumns();
    }

    /**
     * Sets the grid columns dynamically
     * @memberOf Grid
     * @instance
     * @param {GridColumn[]} columns
     */

  }, {
    key: 'setColumns',
    value: function setColumns(columns) {
      return this.grid.setColumns(columns);
    }

    /**
     * Gets a GridRow representing the row identified by id
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The id of the row to retrieve
     * @return {GridRow|null}
     */

  }, {
    key: 'getById',
    value: function getById(id) {
      return this.grid.getById(id);
    }

    /**
     * Deletes a row by id
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The id of the row to delete
     */

  }, {
    key: 'deleteById',
    value: function deleteById(id) {
      this.grid.deleteById(id);
    }

    /**
     * Updates a row with new data, leaves previous fields intact
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The row id to update
     * @param {*} data Partial or full row data to update
     */

  }, {
    key: 'updateRow',
    value: function updateRow(id, data) {
      this.grid.updateRow(id, data);
    }

    /**
     * Updates a cell with a new value
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The id of the row the cell is in
     * @param {string} colName The name of the column identified with the cell
     * @param {*} value The new value for the cell
     */

  }, {
    key: 'updateCell',
    value: function updateCell(id, colName, value) {
      this.grid.updateCell(id, colName, value);
    }

    /**
     * Clears the grid
     *
     * @memberOf Grid
     * @instance
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.grid.clear();
    }

    /**
     * Sets the loading state of the grid
     *
     * @memberOf Grid
     * @instance
     * @param loading
     */

  }, {
    key: 'setLoading',
    value: function setLoading(loading) {
      this.grid.setLoading(loading);
    }

    /**
     * Sets the grid enabled or disabled
     *
     * @memberOf Grid
     * @instance
     * @param enabled
     */

  }, {
    key: 'setEnabled',
    value: function setEnabled(enabled) {
      this.grid.setEnabled(enabled);
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GridRow = __webpack_require__(6);

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = __webpack_require__(7);

var _GridColumn2 = _interopRequireDefault(_GridColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Definition for ReactGrid state object
 *
 * @typedef {object} GridState
 * @property {Object[]} rawData The raw data in the grid
 * @property {GridColumn[]} columns The columns of the grid
 * @property {GridRow[]} rows The rows in the grid
 * @property {number} prevSelectedRow The previously selected row
 * @property {string} orderBy The column name to order by
 * @property {boolean} orderReverse True of the order should be reversed
 * @property {boolean} loading True if the grid shows a loading spinner
 * @property {boolean} enabled True if the grid is interactive
 */

/**
 * Sort function callback, should return -1 if a is lower than b,
 * 0 if rows are equal and 1 if a is greater than b
 *
 * @callback SortCallback
 * @param {GridRow} a Row a
 * @param {GridRow} b Row b
 * @return {number}
 */

/**
 * ClassName callback, a function to return a className (string)
 * based on row/column information
 *
 * @callback classNameCallback
 * @param {*} row The row data
 * @param {string} [column] The column we're rendering (for cell classNames)
 * @return {string}
 */

/**
 * Definition for ReactGrid props object
 *
 * @typedef {object} GridProps
 * @property {string} [id=grid] The id of the grid
 * @property {ColumnProps[]} columns The columns definition for the grid
 * @property {RowProps[]} initialData The initial data to populate the grid
 * @property {string} orderBy The column name that we're sorting for
 * @property {boolean} [orderReverse=false] True if we're in reverse order
 * @property {Object.<string,SortCallback>} [sortings] A set of sorting functions
 * @property {classNameCallback} [rowClassName] A callback to set the className of a row
 * based on its data
 * @property {classNameCallback} [cellClassName] A callback to set the className of a cell
 * based on its data
 * for each sortable column
 * @property {boolean} [selectable=true] True if the grid is selectable
 * @property {boolean} [multiselect=false] True if we will enable multiselect in the grid
 */

/**
 * Constructor for the react grid component
 *
 * @param {GridProps} props React props
 * @class ReactGrid
 * @classdesc React Grid Component class
 * @extends React.Component
 */
var ReactGrid = function (_React$Component) {
    _inherits(ReactGrid, _React$Component);

    function ReactGrid(props) {
        _classCallCheck(this, ReactGrid);

        var _this = _possibleConstructorReturn(this, (ReactGrid.__proto__ || Object.getPrototypeOf(ReactGrid)).call(this, props));

        var cols = _this.props.columns.map(function (col) {
            return new _GridColumn2.default(col);
        });
        var rows = _this.props.initialData.map(function (row) {
            return new _GridRow2.default(row);
        });

        /**
         * The state object for the grid component
         *
         * @name ReactGrid#state
         * @type {GridState}
         */
        _this.state = {
            rawData: _this.props.initialData,
            columns: cols,
            rows: rows,
            prevSelectedRow: -1,
            orderBy: _this.props.orderBy,
            orderReverse: _this.props.orderReverse,
            loading: false,
            enabled: true
        };
        return _this;
    }

    /**
     * Sorts the rows in the grid
     *
     * @memberOf ReactGrid
     * @instance
     */


    _createClass(ReactGrid, [{
        key: 'sortRows',
        value: function sortRows() {
            var sortFn = this.props.sortings[this.state.orderBy];

            if (typeof sortFn === 'function') {
                this.state.rows.sort(sortFn);
            }

            if (this.state.orderReverse) {
                this.state.rows.reverse();
            }
        }

        /**
         * Renders the grid
         *
         * @memberOf ReactGrid
         * @instance
         * @return {HTMLElement}
         */

    }, {
        key: 'render',
        value: function render() {
            var className = 'table-wrapper' + (this.state.enabled ? '' : ' disabled');
            this.sortRows();
            return _react2.default.createElement(
                'div',
                { className: className, id: this.props.id },
                _react2.default.createElement(
                    'table',
                    { className: 'table-header' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            this.state.columns.map(this.renderColumn.bind(this))
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table-body' },
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.state.loading ? _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                { colSpan: this.state.columns.length },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'icon loading' },
                                    '\xA0'
                                )
                            )
                        ) : this.state.rows.map(this.renderRow.bind(this))
                    )
                )
            );
        }

        /**
         * Renders a column in the grid
         *
         * @memberOf ReactGrid
         * @instance
         * @private
         * @param {GridColumn} column
         * @return {HTMLElement}
         */

    }, {
        key: 'renderColumn',
        value: function renderColumn(column) {
            var style = { width: column.width };

            return _react2.default.createElement(
                'th',
                {
                    key: column.name,
                    className: column.className,
                    style: style,
                    onClick: this.generateHeaderClick.bind(this, column)
                },
                column.displayName
            );
        }

        /**
         * Renders a row in the grid
         *
         * @memberOf ReactGrid
         * @instance
         * @private
         * @param {GridRow} row
         * @return {HTMLElement}
         */

    }, {
        key: 'renderRow',
        value: function renderRow(row) {
            var rowClassName = this.props.rowClassName(row.data);
            var className = rowClassName + ' ' + (row.selected ? 'selected' : '');
            var style = { display: row.show ? 'table-row' : 'none' };

            return _react2.default.createElement(
                'tr',
                {
                    key: row.id,
                    id: row.id,
                    className: className,
                    style: style
                },
                this.state.columns.map(this.renderCell.bind(this, row))
            );
        }

        /**
         * Renders a single cell in the grid
         *
         * @memberOf ReactGrid
         * @instance
         * @private
         * @param {GridRow} row
         * @param {GridColumn} col
         * @return {HTMLElement}
         */

    }, {
        key: 'renderCell',
        value: function renderCell(row, col) {
            var className = this.props.cellClassName(row.data, col);
            var style = { width: col.width };
            var contents = typeof col.format === 'function' ? col.format.call(this, row.data[col.name], row) : row.data[col.name].toString();

            return _react2.default.createElement(
                'td',
                {
                    key: row.id + ' ' + col.name,
                    style: style,
                    className: className,
                    onClick: this.generateCellClick.bind(this, row, col.name)
                },
                typeof contents === 'string' ? contents : _react2.default.createElement('span', null, contents)
            );
        }

        /**
         * Generates an event when a click is made in the grid header
         *
         * @memberOf ReactGrid
         * @instance
         * @param {GridColumn} column
         * @param {*} event The react event
         * @return {boolean}
         */

    }, {
        key: 'generateHeaderClick',
        value: function generateHeaderClick(column, event) {
            event.preventDefault();
            event.stopPropagation();

            if (!this.state.enabled) {
                return false;
            }

            var headerEvent = new CustomEvent('HeaderClick', { detail: column });

            var rootElem = document.getElementById(this.props.id);

            if (rootElem) {
                rootElem.dispatchEvent(headerEvent);
            }

            if (this.props.onColumnHeaderClick) {
                this.props.onColumnHeaderClick(column);
            }

            return false;
        }

        /**
         * Gets a numeric index for a given row object
         *
         * @memberOf ReactGrid
         * @instance
         * @private
         * @param {GridRow} row
         * @return {number}
         */

    }, {
        key: 'getRowNdx',
        value: function getRowNdx(row) {
            for (var i = 0; i < this.state.rows.length; i++) {
                if (this.state.rows[i].id === row.id) {
                    return i;
                }
            }

            return -1;
        }

        /**
         * Generates an event when a click is made in a cell
         *
         * @memberOf ReactGrid
         * @instance
         * @param {GridRow} row
         * @param {string} colName
         * @param {*} event The react event
         * @return {boolean}
         */

    }, {
        key: 'generateCellClick',
        value: function generateCellClick(row, colName, event) {
            var _this2 = this;

            event.preventDefault();
            event.stopPropagation();

            if (!this.state.enabled) {
                return false;
            }

            var rowNdx = this.getRowNdx(row);
            var updateLastRow = false;

            var selectOneRow = function selectOneRow(curRow) {
                var selected = !curRow.selected;
                _this2.state.rows.forEach(function (innerRow) {
                    innerRow.selected = false;
                });

                curRow.selected = selected;
            };

            var selectRowRange = function selectRowRange(curRow) {
                if (_this2.state.prevSelectedRow > -1) {
                    var setFrom = Math.min(rowNdx, _this2.state.prevSelectedRow);
                    var setTo = Math.max(rowNdx, _this2.state.prevSelectedRow);
                    for (var i = setFrom; i <= setTo; i++) {
                        curRow.selected = true;
                    }
                }
            };

            var selectRowRangeExclusive = function selectRowRangeExclusive(curRow) {
                _this2.state.rows.forEach(function (innerRow) {
                    innerRow.selected = false;
                });

                selectRowRange(curRow);
            };

            if (rowNdx !== -1) {
                if (this.props.selectable) {
                    if (!event.shiftKey && !event.ctrlKey) {
                        // normal select
                        selectOneRow(row);
                        updateLastRow = true;
                    } else if (event.shiftKey && this.props.multiselect) {
                        // multi selection
                        selectRowRangeExclusive(row);
                    } else if (event.ctrlKey && this.props.multiselect) {
                        // multi selection
                        row.selected = !row.selected;
                        updateLastRow = true;
                    } else if (event.shiftKey && event.ctrlKey && this.props.multiselect) {
                        // multi selection
                        selectRowRange(row);
                    }
                }

                this.setState({
                    prevSelectedRow: updateLastRow ? rowNdx : this.state.prevSelectedRow,
                    rows: this.state.rows
                });

                var cellEvent = new CustomEvent('CellClick', {
                    detail: {
                        row: row,
                        cell: colName
                    }
                });

                var rootElem = document.getElementById(this.props.id);

                if (rootElem) {
                    rootElem.dispatchEvent(cellEvent);
                }

                if (this.props.onCellClick) {
                    this.props.onCellClick(row, colName);
                }
            }

            return false;
        }

        /**
         * Adds rows to the Grid Component
         *
         * @memberOf ReactGrid
         * @instance
         * @param {RowProps[]} rows The rows to add
         * @param {number} [ndx] An optional index into which to insert the rows
         */

    }, {
        key: 'addRows',
        value: function addRows(rows, ndx) {
            if (!rows.length) {
                rows = [rows];
            }

            if (!ndx) {
                ndx = this.state.rows.length;
            }

            var gridRows = rows.map(function (row) {
                return new _GridRow2.default(row);
            });
            var rawDataRows = rows.map(function (row) {
                return _jquery2.default.extend(true, {}, row);
            });

            var newRows = [].concat(_toConsumableArray(this.state.rows.slice(0, ndx)), _toConsumableArray(gridRows), _toConsumableArray(this.state.rows.slice(ndx)));

            var newData = [].concat(_toConsumableArray(this.state.rawData.slice(0, ndx)), _toConsumableArray(rawDataRows), _toConsumableArray(this.state.rawData.slice(ndx)));

            this.setState({
                rows: newRows,
                rawData: newData
            });
        }

        /**
         * Removes all existing rows from the Grid Component and adds new rows provided
         *
         * @memberOf ReactGrid
         * @instance
         * @param {RowProps[]} rows The rows to add
         */

    }, {
        key: 'setRows',
        value: function setRows(rows) {
            if (!rows.length) {
                rows = [rows];
            }

            var gridRows = rows.map(function (row) {
                return new _GridRow2.default(row);
            });
            var rawDataRows = rows.map(function (row) {
                return _jquery2.default.extend(true, {}, row);
            });

            this.setState({
                rows: gridRows,
                rawData: rawDataRows
            });
        }

        /**
         * Deletes rows from the Grid Component
         *
         * @memberOf ReactGrid
         * @instance
         * @param {number} ndx Starting index into which to delete rows
         * @param {number} [length=1] The number of rows to delete
         */

    }, {
        key: 'deleteRows',
        value: function deleteRows(ndx, length) {
            if (!length) {
                length = 1;
            }

            var newRows = [].concat(_toConsumableArray(this.state.rows.slice(0, ndx)), _toConsumableArray(this.state.rows.slice(ndx + length)));

            var newData = [].concat(_toConsumableArray(this.state.rawData.slice(0, ndx)), _toConsumableArray(this.state.rawData.slice(ndx + length)));

            this.setState({
                rows: newRows,
                rawData: newData
            });
        }

        /**
         * Sort rows by a specific column name
         *
         * @memberOf ReactGrid
         * @instance
         * @param {string} sortBy The column name to sort by
         */

    }, {
        key: 'sortBy',
        value: function sortBy(_sortBy) {
            this.setState(_sortBy);
        }

        /**
         * Get the sort situation of a Grid Component
         *
         * @memberOf ReactGrid
         * @instance
         * @return {SortType}
         */

    }, {
        key: 'getSort',
        value: function getSort() {
            return {
                orderBy: this.state.orderBy,
                orderReverse: this.state.orderReverse
            };
        }

        /**
         * Gets a GridRow object representing the row at ndx
         *
         * @memberOf ReactGrid
         * @instance
         * @param {number} ndx The index at which to retrieve the row
         * @return {GridRow|null}
         */

    }, {
        key: 'getRow',
        value: function getRow(ndx) {
            if (ndx < 0 || ndx >= this.state.rows.length) {
                return null;
            }

            return new _GridRow2.default(this.state.rows[ndx]);
        }

        /**
         * Gets the selected rows as an Array of GridRow objects
         *
         * @memberOf ReactGrid
         * @instance
         * @return {GridRow[]}
         */

    }, {
        key: 'getSelectedRows',
        value: function getSelectedRows() {
            var ret = [];

            for (var i = 0; i < this.state.rows.length; i++) {
                if (this.state.rows[i].selected) {
                    ret.push(new _GridRow2.default(this.state.rows[i]));
                }
            }

            return ret;
        }

        /**
         * Gets the ids of the selected rows in the Grid Component
         *
         * @memberOf ReactGrid
         * @instance
         * @return {string[]}
         */

    }, {
        key: 'getSelectedRowIds',
        value: function getSelectedRowIds() {
            var ret = [];

            for (var i = 0; i < this.state.rows.length; i++) {
                if (this.state.rows[i].selected) {
                    ret.push(this.state.rows[i].id);
                }
            }

            return ret;
        }

        /**
         * Gets the grid columns
         *
         * @memberOf ReactGrid
         * @instance
         * @return {GridColumn[]}
         */

    }, {
        key: 'getColumns',
        value: function getColumns() {
            return this.state.columns;
        }

        /**
         * Sets the grid columns
         *
         * @memberOf ReactGrid
         * @instance
         * @param {GridColumn[]} columns
         */

    }, {
        key: 'setColumns',
        value: function setColumns(columns) {
            this.setState({
                columns: columns.map(function (col) {
                    return new _GridColumn2.default(col);
                })
            });
        }

        /**
         * Gets a GridRow representing the row identified by id
         *
         * @memberOf ReactGrid
         * @instance
         * @param {string} id The id of the row to retrieve
         * @return {GridRow|null}
         */

    }, {
        key: 'getById',
        value: function getById(id) {
            for (var i = 0; i < this.state.rows.length; i++) {
                var row = this.state.rows[i];

                if (row.id === id) {
                    return new _GridRow2.default(row);
                }
            }

            return null;
        }

        /**
         * Deletes a row by id
         *
         * @memberOf ReactGrid
         * @instance
         * @param {string} id The id of the row to delete
         */

    }, {
        key: 'deleteById',
        value: function deleteById(id) {
            for (var i = 0; i < this.state.rows.length; i++) {
                if (this.state.rows[i].id === id) {
                    this.deleteRows(i);
                    return;
                }
            }
        }

        /**
         * Updates a row with new data, leaves previous fields intact
         *
         * @memberOf ReactGrid
         * @instance
         * @param {string} id The row id to update
         * @param {*} data Partial or full row data to update
         */

    }, {
        key: 'updateRow',
        value: function updateRow(id, data) {
            for (var i = 0; i < this.state.rows.length; i++) {
                var rowItem = this.state.rows[i];
                var rawData = this.state.rawData[i];

                if (rowItem.id === id) {
                    var newRow = new _GridRow2.default(_jquery2.default.extend(true, rowItem.data, data));
                    var newRawData = _jquery2.default.extend(true, {}, rawData, data);
                    this.state.rows.splice(i, 1, newRow);
                    this.state.rawData.splice(i, 1, newRawData);

                    this.setState({
                        rows: this.state.rows,
                        rawData: this.state.rawData
                    });

                    return;
                }
            }
        }

        /**
         * Updates a cell with a new value
         *
         * @memberOf ReactGrid
         * @instance
         * @param {string} id The id of the row the cell is in
         * @param {string} colName The name of the column identified with the cell
         * @param {*} value The new value for the cell
         */

    }, {
        key: 'updateCell',
        value: function updateCell(id, colName, value) {
            for (var i = 0; i < this.state.rows.length; i++) {
                var rowItem = this.state.rows[i];
                var rawDataItem = this.state.rawData[i];

                if (rowItem.id === id) {
                    rowItem.data[colName] = value;
                    rawDataItem[colName] = value;

                    this.setState({
                        rows: this.state.rows,
                        rawData: this.state.rawData
                    });

                    return;
                }
            }
        }

        /**
         * Clears the grid
         * @memberOf ReactGrid
         * @instance
         */

    }, {
        key: 'clear',
        value: function clear() {
            this.setState({
                rows: [],
                rawData: []
            });
        }

        /**
         * Sets the loading state of the grid
         * @memberOf ReactGrid
         * @instance
         * @param {boolean} loading
         */

    }, {
        key: 'setLoading',
        value: function setLoading(loading) {
            this.setState({
                loading: loading
            });
        }

        /**
         * Sets the grid enabled or disabled
         *
         * @memberOf ReactGrid
         * @instance
         * @param enabled
         */

    }, {
        key: 'setEnabled',
        value: function setEnabled(enabled) {
            this.setState({
                enabled: enabled
            });
        }
    }]);

    return ReactGrid;
}(_react2.default.Component);

/**
 * PropTypes for grid component
 *
 * @memberOf ReactGrid
 * @type {GridProps}
 * @static
 */


exports.default = ReactGrid;
ReactGrid.propTypes = {
    id: _propTypes2.default.string,
    columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        displayName: _propTypes2.default.string,
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        className: _propTypes2.default.string,
        format: _propTypes2.default.func,
        sortable: _propTypes2.default.bool
    })),
    initialData: _propTypes2.default.arrayOf(_propTypes2.default.object),
    selectable: _propTypes2.default.bool,
    multiselect: _propTypes2.default.bool,
    orderBy: _propTypes2.default.string,
    orderReverse: _propTypes2.default.bool,
    sortings: _propTypes2.default.objectOf(_propTypes2.default.func),
    onColumnHeaderClick: _propTypes2.default.func,
    onCellClick: _propTypes2.default.func,
    rowClassName: _propTypes2.default.func,
    cellClassName: _propTypes2.default.func
};

/**
 * Default properties of the ReactGrid class
 *
 * @memberOf ReactGrid
 * @static
 * @type {GridProps}
 */
ReactGrid.defaultProps = {
    id: 'grid',
    columns: [],
    orderBy: '',
    selectable: true,
    multiselect: false,
    orderReverse: false,
    sortings: {},
    initialData: [],
    onColumnHeaderClick: null,
    onCellClick: null,
    rowClassName: function rowClassName() {
        return '';
    },
    cellClassName: function cellClassName() {
        return '';
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Row properties object to define a row
 *
 * @typedef {object} RowProps
 * @property {string} [id] The unique id of the row
 * @property {*} data The raw data for the row
 */

/**
 * Grid Row Constructor
 *
 * @param {RowProps|GridRow} props
 * @class GridRow
 * @classdesc Class representing a Row in the Grid object
 */
var GridRow = function GridRow(props) {
  _classCallCheck(this, GridRow);

  if (props instanceof GridRow) {
    props = props.data;
  }

  /**
   * The unique id of the row
   *
   * @type {string}
   * @name GridRow#id
   */
  this.id = props.id ? props.id : GridRow.getNextRowId();

  /**
   * The raw data for the row
   *
   * @type {*}
   * @name GridRow#data
   */
  this.data = _jquery2.default.extend(true, {}, props);

  /**
   * True if the row is selected
   *
   * @name GridRow#selected
   * @type {boolean}
   */
  this.selected = false;

  /**
   * True if the row is not filtered
   *
   * @name GridRow#show
   * @type {boolean}
   */
  this.show = true;
};

/**
 * Returns the next row id
 *
 * @memberOf GridRow
 * @static
 * @return {string}
 */


exports.default = GridRow;
GridRow.getNextRowId = function () {
  return '\'row_' + GridRow.nextRowId++;
};

/**
 * Next id row generator
 *
 * @type {number}
 * @memberOf GridRow
 * @static
 */
GridRow.nextRowId = 0;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Formatting function for a cell value
 *
 * @callback FormattingCallback
 * @param {*} value Cell value
 * @param {GridRow} row The entire row
 * @return {string|HTMLElement|React.Component}
 */

/**
 * Column properties object to define a column
 *
 * @typedef {object} ColumnProps
 *
 * @property {string} name The name of the column as coming from input data
 * @property {string} [displayName] The display name of the column
 * @property {string} [width] An HTML value for width (either pixels or percentage)
 * @property {string} [className] The class for the column
 * @property {FormattingCallback} [format] A formatting function for the
 * @property {boolean} [sortable] True if the column is sortable
 */

/**
 * Grid column constructor
 *
 * @param {ColumnProps} props The properties of the column
 * @class GridColumn
 * @classdesc Class representing a column in a Grid object
 */
var GridColumn = function GridColumn(props) {
  _classCallCheck(this, GridColumn);

  var setWidth = function setWidth(width) {
    var validate = /^(\d)+[px|%]$/;

    if (typeof width === 'number') {
      return width + 'px';
    } else if (validate.test(width.toString())) {
      return width.toString();
    } else {
      return '';
    }
  };

  /**
   * The name of the column as coming from input data
   *
   * @type string
   * @name GridColumn#name
   */
  this.name = props.name;

  /**
   * The display name of the column
   *
   * @type {string}
   * @name GridColumn#displayName
   */
  this.displayName = props.displayName ? props.displayName : this.name;

  /**
   * An HTML value for width (either pixels or percentage)
   *
   * @type {string}
   * @name GridColumn#width
   */
  this.width = setWidth(props.width);

  /**
   * The class for the column
   *
   * @name GridColumn#className
   * @type {string}
   */
  this.className = props.className ? props.className : '';

  /**
   * An optional formatting function
   *
   * @name GridColumn#format
   * @type {function|undefined}
   */
  this.format = props.format;

  /**
   * An optional formatting function
   *
   * @name GridColumn#sortable
   * @type {bool|undefined}
   */
  this.sortable = props.sortable;
};

exports.default = GridColumn;

/***/ }),
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
/* 10 */
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
/* 11 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Grid = __webpack_require__(4);

var _Grid2 = _interopRequireDefault(_Grid);

var _Tree = __webpack_require__(8);

var _Tree2 = _interopRequireDefault(_Tree);

var _Modal = __webpack_require__(10);

var _Modal2 = _interopRequireDefault(_Modal);

var _TagsManager = __webpack_require__(12);

var _TagsManager2 = _interopRequireDefault(_TagsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.Grid = _Grid2.default;
window.ReactLib.Modal = _Modal2.default;
window.ReactLib.Tree = _Tree2.default;
window.ReactLib.TagsManager = _TagsManager2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTVmMDcyNjc4OTI5YjA5NGM2ZGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdFRyZWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJncmlkIiwiaWQiLCJncmlkUHJvcHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsIm5keCIsImFkZFJvd3MiLCJzZXRSb3dzIiwibGVuZ3RoIiwiZGVsZXRlUm93cyIsInNvcnRCeSIsImdldFNvcnQiLCJnZXRSb3ciLCJnZXRTZWxlY3RlZFJvd3MiLCJnZXRTZWxlY3RlZFJvd0lkcyIsImdldENvbHVtbnMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImdldEJ5SWQiLCJkZWxldGVCeUlkIiwiZGF0YSIsInVwZGF0ZVJvdyIsImNvbE5hbWUiLCJ2YWx1ZSIsInVwZGF0ZUNlbGwiLCJjbGVhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJSZWFjdEdyaWQiLCJjb2xzIiwibWFwIiwiY29sIiwiaW5pdGlhbERhdGEiLCJyb3ciLCJzdGF0ZSIsInJhd0RhdGEiLCJwcmV2U2VsZWN0ZWRSb3ciLCJvcmRlckJ5Iiwib3JkZXJSZXZlcnNlIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsInJlbmRlclJvdyIsImNvbHVtbiIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiZ2VuZXJhdGVIZWFkZXJDbGljayIsImRpc3BsYXlOYW1lIiwicm93Q2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwidG9TdHJpbmciLCJnZW5lcmF0ZUNlbGxDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoZWFkZXJFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsIm9uQ29sdW1uSGVhZGVyQ2xpY2siLCJpIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm11bHRpc2VsZWN0Iiwic2V0U3RhdGUiLCJjZWxsRXZlbnQiLCJjZWxsIiwib25DZWxsQ2xpY2siLCJncmlkUm93cyIsInJhd0RhdGFSb3dzIiwiZXh0ZW5kIiwibmV3Um93cyIsInNsaWNlIiwibmV3RGF0YSIsInJldCIsInB1c2giLCJyb3dJdGVtIiwibmV3Um93IiwibmV3UmF3RGF0YSIsInNwbGljZSIsInJhd0RhdGFJdGVtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJzb3J0YWJsZSIsImJvb2wiLCJvYmplY3QiLCJvYmplY3RPZiIsImRlZmF1bHRQcm9wcyIsIkdyaWRSb3ciLCJnZXROZXh0Um93SWQiLCJuZXh0Um93SWQiLCJHcmlkQ29sdW1uIiwic2V0V2lkdGgiLCJ2YWxpZGF0ZSIsInRlc3QiLCJUcmVlIiwidHJlZSIsInRyZWVQcm9wcyIsInNldERhdGEiLCJnZXRTZWxlY3RlZEl0ZW1JZCIsIml0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZmluZEl0ZW1CeUlkIiwiZXhwYW5kQWxsIiwiY29udHJhY3RBbGwiLCJSZWFjdFRyZWUiLCJyb290IiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJyZW5kZXJJdGVtIiwiZXhwYW5kZWQiLCJpdGVtQ2xhc3NOYW1lIiwiZXhwYW5kU3RhdHVzIiwiaXRlbUV4cGFuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiZXhwYW5kQ29udHJhY3RJdGVtIiwic2VsZWN0SXRlbSIsInNvcnRUcmVlIiwiYnJhbmNoIiwiZ2VuZXJhdGVJdGVtQ2xpY2siLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtRXZlbnQiLCJjYWNoZVJvb3QiLCJyZXBsaWNhdGVSb290IiwicGFyZW50SWQiLCJmaW5kSXRlbUluQnJhbmNoQnlJZCIsImZvdW5kSXRlbSIsImtleXMiLCJrZXkiLCJleHBhbmRUcmVlIiwiaXRlbXMiLCJpdG0iLCJpbnN0YW5jZU9mIiwiTW9kYWwiLCJtb2RhbCIsIm9wdGlvbnMiLCJQcm9taXNlIiwic3VjY2VzcyIsInJlamVjdCIsInZpc2libGUiLCJvblN1Y2Nlc3MiLCJvblJlamVjdCIsImxlZnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJpbm5lckhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldE9rQnV0dG9uIiwibGFiZWwiLCJnZXRZZXNCdXR0b24iLCJnZXROb0J1dHRvbiIsIlJlYWN0TW9kYWwiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjbG9zYWJsZSIsImJ1dHRvbnMiLCJvbk1vZGFsQ2xvc2UiLCJyZW5kZXJCdXR0b24iLCJidXR0b24iLCJvbk1vZGFsQnV0dG9uUHJlc3NlZCIsIlRhZ3NNYW5hZ2VyIiwiaGlkZGVuRmllbGRzQ29udGFpbmVyIiwidGFnc0NvbnRhaW5lciIsInRhZ0ZpZWxkTmFtZVByZWZpeCIsInRhZ3NUZXh0TGFiZWwiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwidGFncyIsInRhZ0ZpZWxkcyIsImZpbmQiLCJjdXJyZW50VGFnSWQiLCJjdXJyZW50VGFnIiwiZWFjaCIsImZpZWxkIiwidGFnUmVnRXhwIiwiUmVnRXhwIiwibWF0Y2giLCJ0YWdJZCIsInRhZ0ZpZWxkIiwiTnVtYmVyIiwidGV4dCIsInRhZ3NEaXNwbGF5IiwiUmVhY3RUYWdzRGlzcGxheSIsInN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwibmV3VGFnSW5kZXgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlRm9jdXMiLCJyZW5kZXJUYWciLCJvbktleVByZXNzIiwib25LZXlVcCIsInJlbmRlclN1Z2dlc3Rpb24iLCJ0YWciLCJyZW1vdmVUYWciLCJ0YWdQYXJ0cyIsImlubmVyVGFnIiwicHJlVGFnIiwidGFnVGV4dCIsInBvc3RUYWciLCJvblN1Z2dlc3Rpb25DbGljayIsInRyaW0iLCJlbmRzV2l0aCIsInN1YnN0ciIsInRhZ0lkRnJvbVN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwibmV3RmllbGRUZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcHBlbmQiLCJuZXdUYWdJZHMiLCJmb2N1cyIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZpZWxkSWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzdGF0ZVRhZyIsImNsZWFyVGltZW91dCIsInJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0Iiwic2V0VGltZW91dCIsInRhZ1JvdXRlIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJzcGFuIiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZVN1Z2dlc3Rpb25zIiwiZXZ0S2V5IiwiYWRkVGFnIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsIkhUTUxFbGVtZW50IiwiUmVhY3RMaWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx1Qjs7Ozs7O0FDQUEsd0I7Ozs7OztBQ0FBLDBCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7SUFPcUJBLEk7QUFDakIsZ0JBQVlDLEtBQVosRUFBbUI7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QUwsR0FBc0IsRUFBdEI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPaUJ2SyxLLEVBQU87QUFDcEIsZ0JBQUl5TixnQkFBZ0J6TixNQUFNME4sTUFBMUI7O0FBRUEsbUJBQU9ELGtCQUFrQixJQUF6QixFQUErQjtBQUMzQixvQkFBSUEsY0FBYy9PLFNBQWQsS0FBNEIsaUJBQWhDLEVBQW1EO0FBQy9DO0FBQ0g7O0FBRUQrTyxnQ0FBZ0JBLGNBQWNuQixVQUE5QjtBQUNIOztBQUVELGlCQUFLeEssUUFBTCxDQUFjO0FBQ1ZrSSw2QkFBYTtBQURILGFBQWQ7QUFHSDs7OztFQTVZeUMsZ0JBQU1qSCxTOztrQkFBL0JnSCxnQjs7O0FBK1lyQkEsaUJBQWlCL0csU0FBakIsR0FBNkI7QUFDekIyRiwyQkFBdUIsb0JBQVUvQixVQUFWLENBQXFCK0csV0FBckIsRUFBa0N2SyxVQURoQztBQUV6QjBGLG1CQUFlLG9CQUFVN0YsTUFGQTtBQUd6QjhGLHNCQUFrQixvQkFBVXhGLElBQVYsQ0FBZUg7QUFIUixDQUE3Qjs7QUFNQTJHLGlCQUFpQm5HLFlBQWpCLEdBQWdDO0FBQzVCa0YsbUJBQWU7QUFEYSxDQUFoQyxDOzs7Ozs7Ozs7QUMzYUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksT0FBT3ZCLE9BQU9xRyxRQUFkLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDckcsV0FBT3FHLFFBQVAsR0FBa0IsRUFBbEI7QUFDSDs7QUFFRHJHLE9BQU9xRyxRQUFQLENBQWdCblMsSUFBaEI7QUFDQThMLE9BQU9xRyxRQUFQLENBQWdCL0csS0FBaEI7QUFDQVUsT0FBT3FHLFFBQVAsQ0FBZ0J4SixJQUFoQjtBQUNBbUQsT0FBT3FHLFFBQVAsQ0FBZ0JsRixXQUFoQix5QiIsImZpbGUiOiJSZWFjdExpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NWYwNzI2Nzg5MjliMDk0YzZkZiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb3BUeXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0R3JpZCBmcm9tICcuLi9qc3gvUmVhY3RHcmlkJztcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIGEgc29ydCBzdGF0ZVxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFNvcnRUeXBlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIHdlJ3JlIG9yZGVyaW5nIGJ5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yZGVyUmV2ZXJzZSBUcnVlIGlmIHRoZSBvcmRlciBpcyByZXZlcnNlZFxuICovXG5cbi8qKlxuICogR3JpZCBjbGFzcyBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7R3JpZFByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgZ3JpZFxuICogQGNsYXNzIEdyaWRcbiAqIEBjbGFzc2Rlc2MgR3JpZCBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCBncmlkc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGdyaWQgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI2dyaWRcbiAgICAgICAgICogQHR5cGUge1JlYWN0R3JpZH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgZ3JpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7R3JpZFByb3BzfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ncmlkUHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBHcmlkIENvbXBvbmVudCB3aXRoaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyIHRoZSBDb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0R3JpZCwgeyAuLi50aGlzLmdyaWRQcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25keF0gQW4gb3B0aW9uYWwgaW5kZXggaW50byB3aGljaCB0byBpbnNlcnQgdGhlIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dzKHJvd3MsIG5keCkge1xuICAgICAgICB0aGlzLmdyaWQuYWRkUm93cyhyb3dzLCBuZHgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIHNldFxuICAgICAqL1xuICAgIHNldFJvd3Mocm93cykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0Um93cyhyb3dzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBTdGFydGluZyBpbmRleCBpbnRvIHdoaWNoIHRvIGRlbGV0ZSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MV0gVGhlIG51bWJlciBvZiByb3dzIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0QnkgVGhlIGNvbHVtbiBuYW1lIHRvIHNvcnQgYnlcbiAgICAgKi9cbiAgICBzb3J0Qnkoc29ydEJ5KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zb3J0Qnkoc29ydEJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNvcnQgc2l0dWF0aW9uIG9mIGEgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7U29ydFR5cGV9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTb3J0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFRoZSBpbmRleCBhdCB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm93XG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldFJvdyhuZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRSb3cobmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCByb3dzIGFzIGFuIEFycmF5IG9mIEdyaWRSb3cgb2JqZWN0c1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlkcyBvZiB0aGUgc2VsZWN0ZWQgcm93cyBpbiB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dJZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dJZHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb2x1bW4gY29sbGVjdGlvblxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGNvbHVtbnMgZHluYW1pY2FsbHlcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyByZXByZXNlbnRpbmcgdGhlIHJvdyBpZGVudGlmaWVkIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byByZXRyaWV2ZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlQnlJZChpZCkge1xuICAgICAgICB0aGlzLmdyaWQuZGVsZXRlQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHJvdyB3aXRoIG5ldyBkYXRhLCBsZWF2ZXMgcHJldmlvdXMgZmllbGRzIGludGFjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHJvdyBpZCB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgUGFydGlhbCBvciBmdWxsIHJvdyBkYXRhIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVJvdyhpZCwgZGF0YSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlUm93KGlkLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0aGUgY2VsbCBpcyBpblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gaWRlbnRpZmllZCB3aXRoIHRoZSBjZWxsXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY2VsbFxuICAgICAqL1xuICAgIHVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyaWQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBsb2FkaW5nXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLmdyaWQuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JpZFJvdyBmcm9tICcuLi9lczYvR3JpZFJvdyc7XG5pbXBvcnQgR3JpZENvbHVtbiBmcm9tICcuLi9lczYvR3JpZENvbHVtbic7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRTdGF0ZVxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gcmF3RGF0YSBUaGUgcmF3IGRhdGEgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7R3JpZENvbHVtbltdfSBjb2x1bW5zIFRoZSBjb2x1bW5zIG9mIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRSb3dbXX0gcm93cyBUaGUgcm93cyBpbiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHByZXZTZWxlY3RlZFJvdyBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCByb3dcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBjb2x1bW4gbmFtZSB0byBvcmRlciBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBvZiB0aGUgb3JkZXIgc2hvdWxkIGJlIHJldmVyc2VkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgZ3JpZCBzaG93cyBhIGxvYWRpbmcgc3Bpbm5lclxuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIGdyaWQgaXMgaW50ZXJhY3RpdmVcbiAqL1xuXG4vKipcbiAqIFNvcnQgZnVuY3Rpb24gY2FsbGJhY2ssIHNob3VsZCByZXR1cm4gLTEgaWYgYSBpcyBsb3dlciB0aGFuIGIsXG4gKiAwIGlmIHJvd3MgYXJlIGVxdWFsIGFuZCAxIGlmIGEgaXMgZ3JlYXRlciB0aGFuIGJcbiAqXG4gKiBAY2FsbGJhY2sgU29ydENhbGxiYWNrXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGEgUm93IGFcbiAqIEBwYXJhbSB7R3JpZFJvd30gYiBSb3cgYlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbi8qKlxuICogQ2xhc3NOYW1lIGNhbGxiYWNrLCBhIGZ1bmN0aW9uIHRvIHJldHVybiBhIGNsYXNzTmFtZSAoc3RyaW5nKVxuICogYmFzZWQgb24gcm93L2NvbHVtbiBpbmZvcm1hdGlvblxuICpcbiAqIEBjYWxsYmFjayBjbGFzc05hbWVDYWxsYmFja1xuICogQHBhcmFtIHsqfSByb3cgVGhlIHJvdyBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbHVtbl0gVGhlIGNvbHVtbiB3ZSdyZSByZW5kZXJpbmcgKGZvciBjZWxsIGNsYXNzTmFtZXMpXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdEdyaWQgcHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gR3JpZFByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPWdyaWRdIFRoZSBpZCBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtDb2x1bW5Qcm9wc1tdfSBjb2x1bW5zIFRoZSBjb2x1bW5zIGRlZmluaXRpb24gZm9yIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge1Jvd1Byb3BzW119IGluaXRpYWxEYXRhIFRoZSBpbml0aWFsIGRhdGEgdG8gcG9wdWxhdGUgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBjb2x1bW4gbmFtZSB0aGF0IHdlJ3JlIHNvcnRpbmcgZm9yXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtvcmRlclJldmVyc2U9ZmFsc2VdIFRydWUgaWYgd2UncmUgaW4gcmV2ZXJzZSBvcmRlclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxTb3J0Q2FsbGJhY2s+fSBbc29ydGluZ3NdIEEgc2V0IG9mIHNvcnRpbmcgZnVuY3Rpb25zXG4gKiBAcHJvcGVydHkge2NsYXNzTmFtZUNhbGxiYWNrfSBbcm93Q2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgcm93XG4gKiBiYXNlZCBvbiBpdHMgZGF0YVxuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW2NlbGxDbGFzc05hbWVdIEEgY2FsbGJhY2sgdG8gc2V0IHRoZSBjbGFzc05hbWUgb2YgYSBjZWxsXG4gKiBiYXNlZCBvbiBpdHMgZGF0YVxuICogZm9yIGVhY2ggc29ydGFibGUgY29sdW1uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzZWxlY3RhYmxlPXRydWVdIFRydWUgaWYgdGhlIGdyaWQgaXMgc2VsZWN0YWJsZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbbXVsdGlzZWxlY3Q9ZmFsc2VdIFRydWUgaWYgd2Ugd2lsbCBlbmFibGUgbXVsdGlzZWxlY3QgaW4gdGhlIGdyaWRcbiAqL1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgcmVhY3QgZ3JpZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gcHJvcHMgUmVhY3QgcHJvcHNcbiAqIEBjbGFzcyBSZWFjdEdyaWRcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgR3JpZCBDb21wb25lbnQgY2xhc3NcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChjb2wgPT4gbmV3IEdyaWRDb2x1bW4oY29sKSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnByb3BzLmluaXRpYWxEYXRhLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdGF0ZSBvYmplY3QgZm9yIHRoZSBncmlkIGNvbXBvbmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBSZWFjdEdyaWQjc3RhdGVcbiAgICAgICAgICogQHR5cGUge0dyaWRTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByYXdEYXRhOiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgY29sdW1uczogY29scyxcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBwcmV2U2VsZWN0ZWRSb3c6IC0xLFxuICAgICAgICAgICAgb3JkZXJCeTogdGhpcy5wcm9wcy5vcmRlckJ5LFxuICAgICAgICAgICAgb3JkZXJSZXZlcnNlOiB0aGlzLnByb3BzLm9yZGVyUmV2ZXJzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSByb3dzIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc29ydFJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydGluZ3NbdGhpcy5zdGF0ZS5vcmRlckJ5XTtcblxuICAgICAgICBpZiAodHlwZW9mIChzb3J0Rm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3Muc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYHRhYmxlLXdyYXBwZXIke3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJyBkaXNhYmxlZCd9YDtcbiAgICAgICAgdGhpcy5zb3J0Um93cygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj57dGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCh0aGlzLnJlbmRlckNvbHVtbi5iaW5kKHRoaXMpKX08L3RyPjwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5tYXAodGhpcy5yZW5kZXJSb3cuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIGNvbHVtbiBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2x1bW5cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDb2x1bW4oY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyB3aWR0aDogY29sdW1uLndpZHRoIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLm5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb2x1bW4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlSGVhZGVyQ2xpY2suYmluZCh0aGlzLCBjb2x1bW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSByb3cgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyUm93KHJvdykge1xuICAgICAgICBjb25zdCByb3dDbGFzc05hbWUgPSB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZShyb3cuZGF0YSk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke3Jvd0NsYXNzTmFtZX0gJHtyb3cuc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9YDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGRpc3BsYXk6IHJvdy5zaG93ID8gJ3RhYmxlLXJvdycgOiAnbm9uZScgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDZWxsLmJpbmQodGhpcywgcm93KSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBzaW5nbGUgY2VsbCBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckNlbGwocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jZWxsQ2xhc3NOYW1lKHJvdy5kYXRhLCBjb2wpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbC53aWR0aCB9O1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHR5cGVvZiBjb2wuZm9ybWF0ID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIGNvbC5mb3JtYXQuY2FsbCh0aGlzLCByb3cuZGF0YVtjb2wubmFtZV0sIHJvdykgOlxuICAgICAgICAgICAgcm93LmRhdGFbY29sLm5hbWVdLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93LmlkfSAke2NvbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVDZWxsQ2xpY2suYmluZCh0aGlzLCByb3csIGNvbC5uYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwsIGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIHRoZSBncmlkIGhlYWRlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSGVhZGVyQ2xpY2soY29sdW1uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0hlYWRlckNsaWNrJywgeyBkZXRhaWw6IGNvbHVtbiB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChoZWFkZXJFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2soY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbnVtZXJpYyBpbmRleCBmb3IgYSBnaXZlbiByb3cgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSb3dOZHgocm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gYSBjZWxsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNlbGxDbGljayhyb3csIGNvbE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dOZHggPSB0aGlzLmdldFJvd05keChyb3cpO1xuICAgICAgICBsZXQgdXBkYXRlTGFzdFJvdyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9uZVJvdyA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gIWN1clJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2UgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldEZyb20gPSBNYXRoLm1pbihyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRUbyA9IE1hdGgubWF4KHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzZXRGcm9tOyBpIDw9IHNldFRvOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKGN1clJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvd05keCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25lUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUocm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmN0cmxLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFJvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSAmJiBldmVudC5jdHJsS2V5ICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwcmV2U2VsZWN0ZWRSb3c6IHVwZGF0ZUxhc3RSb3cgPyByb3dOZHggOiB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3NcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0NlbGxDbGljaycsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsOiBjb2xOYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoY2VsbEV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DZWxsQ2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKHJvdywgY29sTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25keF0gQW4gb3B0aW9uYWwgaW5kZXggaW50byB3aGljaCB0byBpbnNlcnQgdGhlIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dzKHJvd3MsIG5keCkge1xuICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzID0gW3Jvd3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZHgpIHtcbiAgICAgICAgICAgIG5keCA9IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLmdyaWRSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBuZXdEYXRhID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi5yYXdEYXRhUm93cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZShuZHgpXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogbmV3RGF0YVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqL1xuICAgIHNldFJvd3Mocm93cykge1xuICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzID0gW3Jvd3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZFJvd3MgPSByb3dzLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG4gICAgICAgIGNvbnN0IHJhd0RhdGFSb3dzID0gcm93cy5tYXAocm93ID0+ICQuZXh0ZW5kKHRydWUsIHt9LCByb3cpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IGdyaWRSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogcmF3RGF0YVJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBTdGFydGluZyBpbmRleCBpbnRvIHdoaWNoIHRvIGRlbGV0ZSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MV0gVGhlIG51bWJlciBvZiByb3dzIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdSb3dzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4ICsgbGVuZ3RoKVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogbmV3RGF0YVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0QnkgVGhlIGNvbHVtbiBuYW1lIHRvIHNvcnQgYnlcbiAgICAgKi9cbiAgICBzb3J0Qnkoc29ydEJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc29ydEJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNvcnQgc2l0dWF0aW9uIG9mIGEgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtTb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJCeTogdGhpcy5zdGF0ZS5vcmRlckJ5LFxuICAgICAgICAgICAgb3JkZXJSZXZlcnNlOiB0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFRoZSBpbmRleCBhdCB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm93XG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldFJvdyhuZHgpIHtcbiAgICAgICAgaWYgKG5keCA8IDAgfHwgbmR4ID49IHRoaXMuc3RhdGUucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkUm93KHRoaXMuc3RhdGUucm93c1tuZHhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCByb3dzIGFzIGFuIEFycmF5IG9mIEdyaWRSb3cgb2JqZWN0c1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3dbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2gobmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlkcyBvZiB0aGUgc2VsZWN0ZWQgcm93cyBpbiB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd0lkcygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLnN0YXRlLnJvd3NbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBncmlkIGNvbHVtbnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29sdW1ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGNvbHVtbnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMubWFwKGNvbCA9PiBuZXcgR3JpZENvbHVtbihjb2wpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyByZXByZXNlbnRpbmcgdGhlIHJvdyBpZGVudGlmaWVkIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuc3RhdGUucm93c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJvdy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3cocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlQnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVJvd3MoaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHJvdyB3aXRoIG5ldyBkYXRhLCBsZWF2ZXMgcHJldmlvdXMgZmllbGRzIGludGFjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm93IGlkIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBQYXJ0aWFsIG9yIGZ1bGwgcm93IGRhdGEgdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlUm93KGlkLCBkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJdGVtID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gbmV3IEdyaWRSb3coJC5leHRlbmQodHJ1ZSwgcm93SXRlbS5kYXRhLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmF3RGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCByYXdEYXRhLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3Muc3BsaWNlKGksIDEsIG5ld1Jvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yYXdEYXRhLnNwbGljZShpLCAxLCBuZXdSYXdEYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0aGUgY2VsbCBpcyBpblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gaWRlbnRpZmllZCB3aXRoIHRoZSBjZWxsXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY2VsbFxuICAgICAqL1xuICAgIHVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJdGVtID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YUl0ZW0gPSB0aGlzLnN0YXRlLnJhd0RhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3dJdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJvd0l0ZW0uZGF0YVtjb2xOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJhd0RhdGFJdGVtW2NvbE5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB0aGlzLnN0YXRlLnJhd0RhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgIHJhd0RhdGE6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVuYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BUeXBlcyBmb3IgZ3JpZCBjb21wb25lbnRcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICogQHN0YXRpY1xuICovXG5SZWFjdEdyaWQucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sXG4gICAgfSkpLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aXNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3JkZXJCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcmRlclJldmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNvcnRpbmdzOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmZ1bmMpLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2VsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIERlZmF1bHQgcHJvcGVydGllcyBvZiB0aGUgUmVhY3RHcmlkIGNsYXNzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICogQHN0YXRpY1xuICogQHR5cGUge0dyaWRQcm9wc31cbiAqL1xuUmVhY3RHcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ2dyaWQnLFxuICAgIGNvbHVtbnM6IFtdLFxuICAgIG9yZGVyQnk6ICcnLFxuICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgbXVsdGlzZWxlY3Q6IGZhbHNlLFxuICAgIG9yZGVyUmV2ZXJzZTogZmFsc2UsXG4gICAgc29ydGluZ3M6IHt9LFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBvbkNvbHVtbkhlYWRlckNsaWNrOiBudWxsLFxuICAgIG9uQ2VsbENsaWNrOiBudWxsLFxuICAgIHJvd0NsYXNzTmFtZTogKCkgPT4gKCcnKSxcbiAgICBjZWxsQ2xhc3NOYW1lOiAoKSA9PiAoJycpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdEdyaWQuanN4IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBSb3cgcHJvcGVydGllcyBvYmplY3QgdG8gZGVmaW5lIGEgcm93XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUm93UHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWRdIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICogQHByb3BlcnR5IHsqfSBkYXRhIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICovXG5cbi8qKlxuICogR3JpZCBSb3cgQ29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1Jvd1Byb3BzfEdyaWRSb3d9IHByb3BzXG4gKiBAY2xhc3MgR3JpZFJvd1xuICogQGNsYXNzZGVzYyBDbGFzcyByZXByZXNlbnRpbmcgYSBSb3cgaW4gdGhlIEdyaWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRSb3cge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyBpbnN0YW5jZW9mIEdyaWRSb3cpIHtcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGlkIG9mIHRoZSByb3dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNpZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkID8gcHJvcHMuaWQgOiBHcmlkUm93LmdldE5leHRSb3dJZCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmF3IGRhdGEgZm9yIHRoZSByb3dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp9XG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIHNlbGVjdGVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjc2VsZWN0ZWRcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlIHJvdyBpcyBub3QgZmlsdGVyZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzaG93XG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCByb3cgaWRcbiAqXG4gKiBAbWVtYmVyT2YgR3JpZFJvd1xuICogQHN0YXRpY1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5HcmlkUm93LmdldE5leHRSb3dJZCA9ICgpID0+IChgJ3Jvd18ke0dyaWRSb3cubmV4dFJvd0lkKyt9YCk7XG5cbi8qKlxuICogTmV4dCBpZCByb3cgZ2VuZXJhdG9yXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKi9cbkdyaWRSb3cubmV4dFJvd0lkID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZFJvdy5qcyIsIi8qKlxuICogRm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYSBjZWxsIHZhbHVlXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRpbmdDYWxsYmFja1xuICogQHBhcmFtIHsqfSB2YWx1ZSBDZWxsIHZhbHVlXG4gKiBAcGFyYW0ge0dyaWRSb3d9IHJvdyBUaGUgZW50aXJlIHJvd1xuICogQHJldHVybiB7c3RyaW5nfEhUTUxFbGVtZW50fFJlYWN0LkNvbXBvbmVudH1cbiAqL1xuXG4vKipcbiAqIENvbHVtbiBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSBjb2x1bW5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2x1bW5Qcm9wc1xuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gYXMgY29taW5nIGZyb20gaW5wdXQgZGF0YVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtkaXNwbGF5TmFtZV0gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3dpZHRoXSBBbiBIVE1MIHZhbHVlIGZvciB3aWR0aCAoZWl0aGVyIHBpeGVscyBvciBwZXJjZW50YWdlKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjbGFzc05hbWVdIFRoZSBjbGFzcyBmb3IgdGhlIGNvbHVtblxuICogQHByb3BlcnR5IHtGb3JtYXR0aW5nQ2FsbGJhY2t9IFtmb3JtYXRdIEEgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgdGhlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzb3J0YWJsZV0gVHJ1ZSBpZiB0aGUgY29sdW1uIGlzIHNvcnRhYmxlXG4gKi9cblxuLyoqXG4gKiBHcmlkIGNvbHVtbiBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Q29sdW1uUHJvcHN9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb2x1bW5cbiAqIEBjbGFzcyBHcmlkQ29sdW1uXG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIGNvbHVtbiBpbiBhIEdyaWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRDb2x1bW4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNldFdpZHRoID0gKHdpZHRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IC9eKFxcZCkrW3B4fCVdJC87XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGUudGVzdCh3aWR0aC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gYXMgY29taW5nIGZyb20gaW5wdXQgZGF0YVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNuYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNkaXNwbGF5TmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHByb3BzLmRpc3BsYXlOYW1lID8gcHJvcHMuZGlzcGxheU5hbWUgOiB0aGlzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jd2lkdGhcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2lkdGggPSBzZXRXaWR0aChwcm9wcy53aWR0aCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBmb3IgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2NsYXNzTmFtZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Zvcm1hdFxuICAgICAgICAgKiBAdHlwZSB7ZnVuY3Rpb258dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtYXQgPSBwcm9wcy5mb3JtYXQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG9wdGlvbmFsIGZvcm1hdHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNzb3J0YWJsZVxuICAgICAgICAgKiBAdHlwZSB7Ym9vbHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNvcnRhYmxlID0gcHJvcHMuc29ydGFibGU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkQ29sdW1uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VHJlZSBmcm9tICcuLi9qc3gvUmVhY3RUcmVlJztcblxuLyoqXG4gKiBUcmVlIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHRyZWVcbiAqIEBjbGFzcyBUcmVlXG4gKiBAY2xhc3NkZXNjIFRyZWUgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggdHJlZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmVlIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSN0cmVlXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWV9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjcHJvcHNcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlUHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZWFjdFRyZWUgQ29tcG9uZW50IHdpdGhpbiB0aGUgdHJlZSBjb250YWluZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyIHRoZSBDb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMudHJlZSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VHJlZSwgeyAuLi50aGlzLnRyZWVQcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHdlIHNob3cgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnRyZWUuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIGRhdGEgb24gdGhlIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gZGF0YSBUaGUgcm9vdCBpdGVtIGxpc3QgZm9yIHRoZSB0cmVlIHdpdGggYWxsIGl0cyBjaGlsZHJlblxuICAgICAqL1xuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtIGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZ2V0U2VsZWN0ZWRJdGVtSWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb24gdGhlIHRyZWUgYmFzZWQgaW4gdGhlIGl0ZW0ncyBwYXJlbnRJZCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUuYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLnVwZGF0ZUl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGl0ZW0gaWQgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SShpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBUcmVlSXRlbSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmVlSXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtwYXJlbnRJZD0wXSBUaGUgcGFyZW50IGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IGNoaWxkcmVuIFRoZSBpdGVtJ3MgY2hpbGRyZW5cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBTdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVTdGF0ZVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSByb290IFRoZSByb290IGl0ZW0gY29udGFpbmluZyB0cmVlIHJvb3QgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIGlzIGluIHRoZSBsb2FkaW5nIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBzZWxlY3RlZEl0ZW0gVGhlIGlkIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsYm9vbGVhbj59IGV4cGFuZGVkSWRzIEEgY29sbGVjdGlvbiBvZiB0aGUgaWRzIG9mIGV4cGFuZGVkIGNhdGVnb3JpZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSB0cmVlIGlzIGVuYWJsZWRcbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZVByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPXRyZWVdXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXXxudWxsfSBpbml0aWFsRGF0YVxuICogQHByb3BlcnR5IHtTb3J0Q2FsbGJhY2t8bnVsbH0gc29ydFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBSZWFjdFRyZWUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gcHJvcHNcbiAqIEBjbGFzcyBSZWFjdFRyZWVcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgVHJlZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm9vdDogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0VHJlZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICdkaXNhYmxlZCd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgPHVsPnt0aGlzLnN0YXRlLnJvb3QubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX08L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHRyZWUgaXRlbSBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzW2l0ZW0uaWRdO1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cGFuZFN0YXR1cyA9IGV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb250cmFjdGVkJztcbiAgICAgICAgY29uc3QgaXRlbUV4cGFuZENsYXNzTmFtZSA9IGBleHBhbmQgJHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/IGV4cGFuZFN0YXR1cyA6ICcnfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUV4cGFuZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRDb250cmFjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JtYXQuY2FsbChudWxsLCBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBleHBhbmRlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIHRyZWUgc2hvd3Mgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIG9uIHRoZSB0cmVlIGFuZCByZW1vdmVzIGFsbCBwcmV2aW91cyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc29ydD10cnVlXVxuICAgICAqL1xuICAgIHNldERhdGEocm9vdCwgc29ydCA9IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc29ydFRyZWUgPSAodHJlZSkgPT4ge1xuICAgICAgICAgICAgdHJlZS5mb3JFYWNoKChicmFuY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VHJlZShicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvcnQodHJlZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRUcmVlKHJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIGRhdGEgaW4gYSB0cmVlIGJyYW5jaFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gdHJlZVxuICAgICAqL1xuICAgIHNvcnQodHJlZSkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyZWUuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpZCA/IG51bGwgOiBpZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICBleHBhbmRDb250cmFjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzKTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGVkW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZFtpZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzOiBleHBhbmRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiBSZWFjdFRyZWUgcm9vdCBlbGVtZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRJdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0l0ZW1DbGljaycsIHsgZGV0YWlsOiB7IHNlbGVjdGVkSXRlbSB9IH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGl0ZW1FdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0uaWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5wYXJlbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09ICcwJyB8fCBpdGVtLnBhcmVudElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLmNoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydC5icmFuY2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhbiBpdGVtIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgZm91bmRJdGVtID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0uaWQpO1xuXG4gICAgICAgIGlmIChmb3VuZEl0ZW0pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZvdW5kSXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2lkJyAmJiBrZXkgIT09ICdwYXJlbnRJZCcgJiYga2V5ICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSXRlbVtrZXldID0gaXRlbVtrZXldID8gaXRlbVtrZXldIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgICAgICBsZXQgYnJhbmNoO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gMCB8fCBpdGVtLnBhcmVudElkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSBjYWNoZVJvb3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKS5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYW5jaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2hbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290LFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpZCBvZiB0aGUgaXRlbVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZCh0aGlzLnN0YXRlLnJvb3QsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBpbiBpdGVtIGluIGEgdHJlZSBicmFuY2ggYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX1yb290XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtSW5CcmFuY2hCeUlkKHJvb3QsIGlkKSB7XG4gICAgICAgIGxldCByZXQgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJvb3RbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoaXRlbS5jaGlsZHJlbiwgaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxpY2F0ZXMgdGhlIHJvb3Qgb2JqZWN0IGZvciBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW1bXX1cbiAgICAgKi9cbiAgICByZXBsaWNhdGVSb290KCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0LnB1c2goJC5leHRlbmQoe30sIHRoaXMuc3RhdGUucm9vdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHByb3BlcnR5IG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZXhwYW5kQWxsKCkge1xuICAgICAgICBjb25zdCBleHBhbmRUcmVlID0gKGl0ZW1zLCBleHBhbmRlZElkcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0bS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJZHNbaXRtLmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZFRyZWUoaXRtLmNoaWxkcmVuLCBleHBhbmRlZElkcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWRJZHMgPSB7fTtcblxuICAgICAgICBleHBhbmRUcmVlKHRoaXMuc3RhdGUucm9vdCwgZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJhY3RzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29udHJhY3RBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWFjdFRyZWUgcHJvcFR5cGVzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KSksXG4gICAgc29ydDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogUmVhY3RUcmVlIGRlZmF1bHQgcHJvcHNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICd0cmVlJyxcbiAgICBpbml0aWFsRGF0YTogW10sXG4gICAgc29ydDogbnVsbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUcmVlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJy4uL2pzeC9SZWFjdE1vZGFsJztcblxuLyoqXG4gKiBAY2xhc3MgTW9kYWxcbiAqIEBjbGFzc2Rlc2MgSW1wbGVtZW50cyBhIG1vZGFsIGNsYXNzIGFzIGEgcHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gICAgLyoqXG4gICAgICogTW9kYWwgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdE1vZGFsfG51bGx9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vZGFsID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubW9kYWwgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdE1vZGFsLCB7IC4uLnRoaXMucHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBtb2RhbCBhcyBwcm9taXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vZGFsU3RhdGV9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqIEBtZW1iZXJPZiBNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNob3cob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMub25TdWNjZXNzID0gc3VjY2VzcztcbiAgICAgICAgICAgIG9wdGlvbnMub25SZWplY3QgPSByZWplY3Q7XG5cbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2V0U3RhdGUob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHsod2luZG93LmlubmVyV2lkdGggLSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCkgLyAyfXB4YDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQpIC8gMn1weGA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgT2sgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRPa0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnb2snLFxuICAgIGxhYmVsOiAnT2snLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgWWVzIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0WWVzQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICd5ZXMnLFxuICAgIGxhYmVsOiAnWWVzJyxcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tYWN0aW9uJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIE5vIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0Tm9CdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ25vJyxcbiAgICBsYWJlbDogJ05vJyxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWNhbmNlbCdcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Nb2RhbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxTdGF0ZVxuICogQHByb3BlcnR5IHtNb2RhbEJ1dHRvbltdfSBidXR0b25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt2aXNpYmxlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBjbG9zYWJsZVxuICogQHByb3BlcnR5IHtNb2RhbENsb3NlQ2FsbGJhY2t9IFtvblN1Y2Nlc3NdXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uUmVqZWN0XVxuICovXG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIG1vZGFsIGNsb3NlIGV2ZW50c1xuICpcbiAqIEBjYWxsYmFjayBNb2RhbENsb3NlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25QcmVzc2VkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGFsQnV0dG9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30ga2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0TW9kYWxcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgQ29tcG9uZW50IGZvciBhIG1vZGFsIGRpYWxvZ1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFJlYWN0TW9kYWwgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01vZGFsU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQWxlcnQgbWVzc2FnZScsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBhY3Rpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uU3VjY2VzcygpIHt9LFxuICAgICAgICAgICAgb25SZWplY3QoKSB7fVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgbW9kYWwgJHt0aGlzLnN0YXRlLnZpc2libGUgPyAndmlzaWJsZScgOiAnJ31gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbG9zYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLm9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpfT4geCA8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25zLm1hcCh0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtNb2RhbEJ1dHRvbn0gYnV0dG9uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQnV0dG9uKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17YnV0dG9uLmtleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk1vZGFsQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMsIGJ1dHRvbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbi5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb2RhbENsb3NlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoJ2Nsb3NlLWJ1dHRvbicsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKi9cbiAgICBvbk1vZGFsQnV0dG9uUHJlc3NlZChidXR0b24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChidXR0b24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblN1Y2Nlc3MoYnV0dG9uLmtleSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUmVqZWN0KGJ1dHRvbi5rZXksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbi8qKlxuICogVGFnc01hbmFnZXIgQ29uc3RydWN0b3IgLSBMb2FkcyB0aGUgdGFncyBwcmVzZW50IGluIHRoZSBmb3JtXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGlkZGVuRmllbGRzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBmb3IgdGhlIGhpZGRlbiBmaWVsZHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZ3NDb250YWluZXIgLSBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSB0YWdzIHdpbGwgYmUgcmVuZGVyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdGaWVsZE5hbWVQcmVmaXggLSBUaGUgZmllbGQgbmFtZSBvZiB0aGUgaGlkZGVuIHRhZyBmaWVsZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdzVGV4dExhYmVsIC0gVGhlIGZvciBhdHRyaWJ1dGUgZm9yIHRoZSB0YWdzIGxhYmVsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoeHJSb3V0ZUNhbGxiYWNrIC0gVGhlIHJvdXRlIHRvIHRoZSB4aHIgQVBJIGNhbGwgdG8gYnJpbmcgc3VnZ2VzdGlvbnNcbiAqXG4gKiBAY2xhc3MgVGFnc01hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgTWFuYWdlciBmb3IgdGFnIGVkaXRpbmcgaW4gcG9zdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGhpZGRlbkZpZWxkc0NvbnRhaW5lciwgdGFnc0NvbnRhaW5lciwgdGFnRmllbGROYW1lUHJlZml4LCB0YWdzVGV4dExhYmVsLCB4aHJSb3V0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7VGFnRW50aXR5W119XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAgICAgLy8gUHJvY2VzcyBleGlzdGluZyBmb3JtIGZpZWxkc1xuICAgICAgICBjb25zdCB0YWdGaWVsZHMgPSAkLmZpbmQoJ2lucHV0W3R5cGU9aGlkZGVuXScpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFnSWQgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFRhZyA9IHt9O1xuXG4gICAgICAgICQodGFnRmllbGRzKS5lYWNoKChuZHgsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0YWdGaWVsZE5hbWVQcmVmaXh9XFxcXF8oXFxcXGQrKVxcXFxfKGlkfHRleHQpJGApO1xuICAgICAgICAgICAgY29uc3QgW2xhYmVsLCB0YWdJZCwgdGFnRmllbGRdID0gZmllbGQuaWQubWF0Y2godGFnUmVnRXhwKTtcblxuICAgICAgICAgICAgaWYgKE51bWJlcih0YWdJZCkgIT09IGN1cnJlbnRUYWdJZCkge1xuICAgICAgICAgICAgICAgIHRhZ3MucHVzaChjdXJyZW50VGFnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnSWQgPSBOdW1iZXIodGFnSWQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWcgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhZy50YWdJZCA9IGN1cnJlbnRUYWcudGFnSWQgP1xuICAgICAgICAgICAgICAgIGAke2N1cnJlbnRUYWcudGFnSWR9fCR7bGFiZWx9YCA6XG4gICAgICAgICAgICAgICAgbGFiZWw7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYWdbdGFnRmllbGRdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXJyZW50VGFnLmlkICYmIGN1cnJlbnRUYWcudGV4dCkge1xuICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWdzRGlzcGxheSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VGFnc0Rpc3BsYXksIHtcbiAgICAgICAgICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhZ3NUZXh0TGFiZWwsXG4gICAgICAgICAgICB4aHJSb3V0ZUNhbGxiYWNrXG4gICAgICAgIH0pLCB0YWdzQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UYWdzTWFuYWdlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdFbnRpdHlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IGlkXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSB0YWdJZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ3NTdGF0ZVxuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gdGFnc1xuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gc3VnZ2VzdGlvbnNcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5XG4gKiBAY2xhc3NkZXNjIERpc3BsYXkgY2xhc3MgZm9yIHRhZyBlbGVtZW50c1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgVGFnc1N0YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGlkZGVuVGFncyA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFnSW5kZXggdG8gc2V0IGZvciB0aGUgbmV3IGhpZGRlbiBlbGVtZW50cyBpbiB0aGUgZm9ybVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCA9IHRoaXMuaGlkZGVuVGFncy5sZW5ndGggLyAyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHN1Z2dlc3Rpb25zIGJveCB0aW1lb3V0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZSBmb3IgdGhlIHByZXZpb3VzIHZhbHVlIGJlZm9yZSBrZXlVcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuY2xlYXJTdWdnZXN0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSB0YWcgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctbGlzdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhZ3MubWFwKHRoaXMucmVuZGVyVGFnLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0ID0gaW5wdXQ7IH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ19zdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLm1hcCh0aGlzLnJlbmRlclN1Z2dlc3Rpb24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHNpbmdsZSB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclRhZyh0YWcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXt0YWcudGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFnLnRleHR9IDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5yZW1vdmVUYWcuYmluZCh0aGlzLCB0YWcpfT54PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSB0YWcgc3VnZ2VzdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih0YWcpIHtcbiAgICAgICAgY29uc3QgdGFnUmVnRXhwID0gbmV3IFJlZ0V4cChgXiguKikoJHt0aGlzLmlucHV0LnZhbHVlfSkoLiopJGAsICdpJyk7XG4gICAgICAgIGNvbnN0IHRhZ1BhcnRzID0gdGFnLnRleHQubWF0Y2godGFnUmVnRXhwKTtcbiAgICAgICAgbGV0IGlubmVyVGFnID0gdGFnLnRleHQ7XG5cbiAgICAgICAgaWYgKHRhZ1BhcnRzICE9PSBudWxsICYmIHRhZ1BhcnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgY29uc3QgcHJlVGFnID0gdGFnUGFydHNbMV07XG4gICAgICAgICAgICBjb25zdCB0YWdUZXh0ID0gdGFnUGFydHNbMl07XG4gICAgICAgICAgICBjb25zdCBwb3N0VGFnID0gdGFnUGFydHNbM107XG5cbiAgICAgICAgICAgIGlubmVyVGFnID0gKDxzcGFuPntwcmVUYWd9PHN0cm9uZz57dGFnVGV4dH08L3N0cm9uZz57cG9zdFRhZ308L3NwYW4+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyVGFnID0gPHNwYW4+e3RhZy50ZXh0fTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBrZXk9e3RhZy50ZXh0fSBvbkNsaWNrPXt0aGlzLm9uU3VnZ2VzdGlvbkNsaWNrLmJpbmQodGhpcywgdGFnKX0+e2lubmVyVGFnfTwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdGFnIGJ5IHRleHQgb25seSAobmV3IHRhZylcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1RleHRcbiAgICAgKi9cbiAgICBhZGRUYWcodGFnVGV4dCkge1xuICAgICAgICAvLyB0cmltIGFuZCByZW1vdmUgdHJhaWxpbmcgc2VtaWNvbG9uc1xuICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC50cmltKCk7XG5cbiAgICAgICAgaWYgKHRhZ1RleHQuZW5kc1dpdGgoJywnKSkge1xuICAgICAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQuc3Vic3RyKDAsIHRhZ1RleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCBlbXB0eSB0YWdzXG4gICAgICAgIGlmICh0YWdUZXh0ID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgcmVwZWF0ZWQgdGFnc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFnc1tpXS50ZXh0ID09PSB0YWdUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ5IHRvIGdldCB0YWcgaWQgZnJvbSBzdWdnZXN0aW9uc1xuICAgICAgICBsZXQgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VnZ2VzdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHRhZ1RleHQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbi5pZDtcbiAgICAgICAgICAgICAgICB0YWdUZXh0ID0gc3VnZ2VzdGlvbi50ZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3RmllbGRUZW1wbGF0ZSA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpXG4gICAgICAgICAgICAucmVwbGFjZSgvX19uYW1lX18vZywgdGhpcy5uZXdUYWdJbmRleC50b1N0cmluZygxMCkpO1xuXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggKz0gMTtcblxuICAgICAgICAkKHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyKS5hcHBlbmQobmV3RmllbGRUZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0udmFsdWUgPSB0YWdJZEZyb21TdWdnZXN0aW9ucztcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS52YWx1ZSA9IHRhZ1RleHQ7XG5cbiAgICAgICAgY29uc3QgbmV3VGFnSWRzID1cbiAgICAgICAgICAgIGAke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0uaWR9fCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS5pZH1gO1xuXG4gICAgICAgIHRoaXMuc3RhdGUudGFncy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgdGFnSWQ6IG5ld1RhZ0lkcyxcbiAgICAgICAgICAgIHRleHQ6IHRhZ1RleHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3MsXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB0YWcgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHJlbW92ZVRhZyh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZHMgPSB0YWcudGFnSWQuc3BsaXQoJ3wnKTtcblxuICAgICAgICBmb3JtRmllbGRzLmZvckVhY2goKGZpZWxkSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgICAgICAgICBmaWVsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZpZWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlVGFnID0gdGhpcy5zdGF0ZS50YWdzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVUYWcudGV4dCA9PT0gdGFnLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBzdWdnZXN0aW9ucyB0aW1lb3V0IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdWdnZXN0aW9uVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgY2FsbCB0byBzdWdnZXN0aW9ucyBhbmQgdXBkYXRlcyB0aGUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVN1Z2dlc3Rpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ1JvdXRlID0gdGhpcy5wcm9wcy54aHJSb3V0ZUNhbGxiYWNrKHRoaXMuaW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHRhZ1JvdXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhZ3MubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGtleSBwcmVzc2VzIG9uIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBuZWVkIHRvIGxvb2sgYXQgdGhlIHZhbHVlIHRoYXQgd2FzIG9uIHRoZSBpbnB1dCBCRUZPUkUgb25LZXlVcCB1cGRhdGVzIHRoZVxuICAgICAgICAgKiBpbnB1dCB2YWx1ZSwgYmVjYXVzZSB3ZSBvbmx5IHdhbnQgdG8gZGVsZXRlIHRoZSBwcmV2aW91cyB0YWcgaWYgdGhlIGlucHV0IFdBU1xuICAgICAgICAgKiBlbXB0eSBiZWZvcmUgcHJlc3NpbmcgQmFja3NwYWNlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLnByZXZJbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKHRoaXMuc3RhdGUudGFncy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudmFsdWUucmVwbGFjZSgvXFxzL2csICcmbmJzcDsnKTtcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7c3Bhbi5vZmZzZXRXaWR0aH1weGA7XG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVDaGlsZChzcGFuKTtcblxuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtleVByZXNzIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2dEtleSA9IGV2ZW50LmtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2dEtleSkge1xuICAgICAgICBjYXNlICgnLCcpOlxuICAgICAgICBjYXNlICgnRW50ZXInKTpcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9ICc1cHgnO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBjbGlja3Mgb24gdGhlIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBzdWdnZXN0ZWQgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uU3VnZ2VzdGlvbkNsaWNrKHRhZywgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5hZGRUYWcodGFnLnRleHQpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWdnZXN0aW9ucyBvbiBkb2N1bWVudCBjbGlja1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsZWFyU3VnZ2VzdGlvbnMoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3RhZ19zdWdnZXN0aW9ucycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblJlYWN0VGFnc0Rpc3BsYXkucHJvcFR5cGVzID0ge1xuICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoSFRNTEVsZW1lbnQpLmlzUmVxdWlyZWQsXG4gICAgdGFnc1RleHRMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB4aHJSb3V0ZUNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdFRhZ3NEaXNwbGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0YWdzVGV4dExhYmVsOiAndGV4dCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4IiwiaW1wb3J0IEdyaWQgZnJvbSAnLi4vZXM2L0dyaWQnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2VzNi9Nb2RhbCc7XG5pbXBvcnQgVGFnc01hbmFnZXIgZnJvbSAnLi4vZXM2L1RhZ3NNYW5hZ2VyJztcblxuaWYgKHR5cGVvZiB3aW5kb3cuUmVhY3RMaWIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LlJlYWN0TGliID0ge307XG59XG5cbndpbmRvdy5SZWFjdExpYi5HcmlkID0gR3JpZDtcbndpbmRvdy5SZWFjdExpYi5Nb2RhbCA9IE1vZGFsO1xud2luZG93LlJlYWN0TGliLlRyZWUgPSBUcmVlO1xud2luZG93LlJlYWN0TGliLlRhZ3NNYW5hZ2VyID0gVGFnc01hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0TGliLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==