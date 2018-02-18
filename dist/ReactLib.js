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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjYyNmNkMTJmOTMxZTJjMGNjODkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdFRyZWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJncmlkIiwiaWQiLCJncmlkUHJvcHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsIm5keCIsImFkZFJvd3MiLCJzZXRSb3dzIiwibGVuZ3RoIiwiZGVsZXRlUm93cyIsInNvcnRCeSIsImdldFNvcnQiLCJnZXRSb3ciLCJnZXRTZWxlY3RlZFJvd3MiLCJnZXRTZWxlY3RlZFJvd0lkcyIsImdldENvbHVtbnMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImdldEJ5SWQiLCJkZWxldGVCeUlkIiwiZGF0YSIsInVwZGF0ZVJvdyIsImNvbE5hbWUiLCJ2YWx1ZSIsInVwZGF0ZUNlbGwiLCJjbGVhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJSZWFjdEdyaWQiLCJjb2xzIiwibWFwIiwiY29sIiwiaW5pdGlhbERhdGEiLCJyb3ciLCJzdGF0ZSIsInJhd0RhdGEiLCJwcmV2U2VsZWN0ZWRSb3ciLCJvcmRlckJ5Iiwib3JkZXJSZXZlcnNlIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsInJlbmRlclJvdyIsImNvbHVtbiIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiZ2VuZXJhdGVIZWFkZXJDbGljayIsImRpc3BsYXlOYW1lIiwicm93Q2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwidG9TdHJpbmciLCJnZW5lcmF0ZUNlbGxDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoZWFkZXJFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsIm9uQ29sdW1uSGVhZGVyQ2xpY2siLCJpIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm11bHRpc2VsZWN0Iiwic2V0U3RhdGUiLCJjZWxsRXZlbnQiLCJjZWxsIiwib25DZWxsQ2xpY2siLCJncmlkUm93cyIsInJhd0RhdGFSb3dzIiwiZXh0ZW5kIiwibmV3Um93cyIsInNsaWNlIiwibmV3RGF0YSIsInJldCIsInB1c2giLCJyb3dJdGVtIiwibmV3Um93IiwibmV3UmF3RGF0YSIsInNwbGljZSIsInJhd0RhdGFJdGVtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJzb3J0YWJsZSIsImJvb2wiLCJvYmplY3QiLCJvYmplY3RPZiIsImRlZmF1bHRQcm9wcyIsIkdyaWRSb3ciLCJnZXROZXh0Um93SWQiLCJuZXh0Um93SWQiLCJHcmlkQ29sdW1uIiwic2V0V2lkdGgiLCJ2YWxpZGF0ZSIsInRlc3QiLCJUcmVlIiwidHJlZSIsInRyZWVQcm9wcyIsInNldERhdGEiLCJnZXRTZWxlY3RlZEl0ZW1JZCIsIml0ZW0iLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZmluZEl0ZW1CeUlkIiwiZXhwYW5kQWxsIiwiY29udHJhY3RBbGwiLCJSZWFjdFRyZWUiLCJyb290IiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJyZW5kZXJJdGVtIiwiZXhwYW5kZWQiLCJpdGVtQ2xhc3NOYW1lIiwiZXhwYW5kU3RhdHVzIiwiaXRlbUV4cGFuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiZXhwYW5kQ29udHJhY3RJdGVtIiwic2VsZWN0SXRlbSIsInNvcnRUcmVlIiwiYnJhbmNoIiwiZ2VuZXJhdGVJdGVtQ2xpY2siLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtRXZlbnQiLCJjYWNoZVJvb3QiLCJyZXBsaWNhdGVSb290IiwicGFyZW50SWQiLCJmaW5kSXRlbUluQnJhbmNoQnlJZCIsImZvdW5kSXRlbSIsImtleXMiLCJrZXkiLCJleHBhbmRUcmVlIiwiaXRlbXMiLCJpdG0iLCJpbnN0YW5jZU9mIiwiTW9kYWwiLCJtb2RhbCIsIm9wdGlvbnMiLCJQcm9taXNlIiwic3VjY2VzcyIsInJlamVjdCIsInZpc2libGUiLCJvblN1Y2Nlc3MiLCJvblJlamVjdCIsImxlZnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJpbm5lckhlaWdodCIsIm9mZnNldEhlaWdodCIsImdldE9rQnV0dG9uIiwibGFiZWwiLCJnZXRZZXNCdXR0b24iLCJnZXROb0J1dHRvbiIsIlJlYWN0TW9kYWwiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjbG9zYWJsZSIsImJ1dHRvbnMiLCJvbk1vZGFsQ2xvc2UiLCJyZW5kZXJCdXR0b24iLCJidXR0b24iLCJvbk1vZGFsQnV0dG9uUHJlc3NlZCIsIlRhZ3NNYW5hZ2VyIiwiaGlkZGVuRmllbGRzQ29udGFpbmVyIiwidGFnc0NvbnRhaW5lciIsInRhZ0ZpZWxkTmFtZVByZWZpeCIsInRhZ3NUZXh0TGFiZWwiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwidGFncyIsInRhZ0ZpZWxkcyIsImZpbmQiLCJjdXJyZW50VGFnSWQiLCJjdXJyZW50VGFnIiwiZWFjaCIsImZpZWxkIiwidGFnUmVnRXhwIiwiUmVnRXhwIiwibWF0Y2giLCJ0YWdJZCIsInRhZ0ZpZWxkIiwiTnVtYmVyIiwidGV4dCIsInRhZ3NEaXNwbGF5IiwiUmVhY3RUYWdzRGlzcGxheSIsInN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwibmV3VGFnSW5kZXgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlRm9jdXMiLCJyZW5kZXJUYWciLCJvbktleVByZXNzIiwib25LZXlVcCIsInJlbmRlclN1Z2dlc3Rpb24iLCJ0YWciLCJyZW1vdmVUYWciLCJ0YWdQYXJ0cyIsImlubmVyVGFnIiwicHJlVGFnIiwidGFnVGV4dCIsInBvc3RUYWciLCJvblN1Z2dlc3Rpb25DbGljayIsInRyaW0iLCJlbmRzV2l0aCIsInN1YnN0ciIsInRhZ0lkRnJvbVN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwibmV3RmllbGRUZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcHBlbmQiLCJuZXdUYWdJZHMiLCJmb2N1cyIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZpZWxkSWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzdGF0ZVRhZyIsImNsZWFyVGltZW91dCIsInJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0Iiwic2V0VGltZW91dCIsInRhZ1JvdXRlIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJzcGFuIiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInVwZGF0ZVN1Z2dlc3Rpb25zIiwiZXZ0S2V5IiwiYWRkVGFnIiwiY3VycmVudFRhcmdldCIsInRhcmdldCIsIkhUTUxFbGVtZW50IiwiUmVhY3RMaWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx1Qjs7Ozs7O0FDQUEsd0I7Ozs7OztBQ0FBLDBCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7SUFPcUJBLEk7QUFDakIsZ0JBQVlDLEtBQVosRUFBbUI7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QUttTixjQUFMLEdBQXNCLEVBQXRCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7eUNBT2lCdkssSyxFQUFPO0FBQ3BCLGdCQUFJeU4sZ0JBQWdCek4sTUFBTTBOLE1BQTFCOztBQUVBLG1CQUFPRCxrQkFBa0IsSUFBekIsRUFBK0I7QUFDM0Isb0JBQUlBLGNBQWMvTyxTQUFkLEtBQTRCLGlCQUFoQyxFQUFtRDtBQUMvQztBQUNIOztBQUVEK08sZ0NBQWdCQSxjQUFjbkIsVUFBOUI7QUFDSDs7QUFFRCxpQkFBS3hLLFFBQUwsQ0FBYztBQUNWa0ksNkJBQWE7QUFESCxhQUFkO0FBR0g7Ozs7RUE1WXlDLGdCQUFNakgsUzs7a0JBQS9CZ0gsZ0I7OztBQStZckJBLGlCQUFpQi9HLFNBQWpCLEdBQTZCO0FBQ3pCMkYsMkJBQXVCLG9CQUFVL0IsVUFBVixDQUFxQitHLFdBQXJCLEVBQWtDdkssVUFEaEM7QUFFekIwRixtQkFBZSxvQkFBVTdGLE1BRkE7QUFHekI4RixzQkFBa0Isb0JBQVV4RixJQUFWLENBQWVIO0FBSFIsQ0FBN0I7O0FBTUEyRyxpQkFBaUJuRyxZQUFqQixHQUFnQztBQUM1QmtGLG1CQUFlO0FBRGEsQ0FBaEMsQzs7Ozs7Ozs7O0FDM2FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLE9BQU92QixPQUFPcUcsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUN4Q3JHLFdBQU9xRyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0g7O0FBRURyRyxPQUFPcUcsUUFBUCxDQUFnQm5TLElBQWhCO0FBQ0E4TCxPQUFPcUcsUUFBUCxDQUFnQi9HLEtBQWhCO0FBQ0FVLE9BQU9xRyxRQUFQLENBQWdCeEosSUFBaEI7QUFDQW1ELE9BQU9xRyxRQUFQLENBQWdCbEYsV0FBaEIseUIiLCJmaWxlIjoiUmVhY3RMaWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjYyNmNkMTJmOTMxZTJjMGNjODkiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBhIHNvcnQgc3RhdGVcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTb3J0VHlwZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiB3ZSdyZSBvcmRlcmluZyBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBpZiB0aGUgb3JkZXIgaXMgcmV2ZXJzZWRcbiAqL1xuXG4vKipcbiAqIEdyaWQgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIGdyaWRcbiAqIEBjbGFzcyBHcmlkXG4gKiBAY2xhc3NkZXNjIEdyaWQgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggZ3JpZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBncmlkIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNncmlkXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdEdyaWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjcHJvcHNcbiAgICAgICAgICogQHR5cGUge0dyaWRQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZFByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgR3JpZCBDb21wb25lbnQgd2l0aGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmdyaWQgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEdyaWQsIHsgLi4udGhpcy5ncmlkUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmFkZFJvd3Mocm93cywgbmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBzZXRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFJvd3Mocm93cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVSb3dzKG5keCwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLmdyaWQuc29ydEJ5KHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U29ydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Um93KG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93SWRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29sdW1uIGNvbGxlY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zIGR5bmFtaWNhbGx5XG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnNldENvbHVtbnMoY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZVJvdyhpZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi4vZXM2L0dyaWRSb3cnO1xuaW1wb3J0IEdyaWRDb2x1bW4gZnJvbSAnLi4vZXM2L0dyaWRDb2x1bW4nO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkU3RhdGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IHJhd0RhdGEgVGhlIHJhdyBkYXRhIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRDb2x1bW5bXX0gY29sdW1ucyBUaGUgY29sdW1ucyBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkUm93W119IHJvd3MgVGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmV2U2VsZWN0ZWRSb3cgVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93XG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdG8gb3JkZXIgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgb2YgdGhlIG9yZGVyIHNob3VsZCBiZSByZXZlcnNlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgc2hvd3MgYSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBncmlkIGlzIGludGVyYWN0aXZlXG4gKi9cblxuLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIGNhbGxiYWNrLCBzaG91bGQgcmV0dXJuIC0xIGlmIGEgaXMgbG93ZXIgdGhhbiBiLFxuICogMCBpZiByb3dzIGFyZSBlcXVhbCBhbmQgMSBpZiBhIGlzIGdyZWF0ZXIgdGhhbiBiXG4gKlxuICogQGNhbGxiYWNrIFNvcnRDYWxsYmFja1xuICogQHBhcmFtIHtHcmlkUm93fSBhIFJvdyBhXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGIgUm93IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIENsYXNzTmFtZSBjYWxsYmFjaywgYSBmdW5jdGlvbiB0byByZXR1cm4gYSBjbGFzc05hbWUgKHN0cmluZylcbiAqIGJhc2VkIG9uIHJvdy9jb2x1bW4gaW5mb3JtYXRpb25cbiAqXG4gKiBAY2FsbGJhY2sgY2xhc3NOYW1lQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcm93IFRoZSByb3cgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2x1bW5dIFRoZSBjb2x1bW4gd2UncmUgcmVuZGVyaW5nIChmb3IgY2VsbCBjbGFzc05hbWVzKVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD1ncmlkXSBUaGUgaWQgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Q29sdW1uUHJvcHNbXX0gY29sdW1ucyBUaGUgY29sdW1ucyBkZWZpbml0aW9uIGZvciB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtSb3dQcm9wc1tdfSBpbml0aWFsRGF0YSBUaGUgaW5pdGlhbCBkYXRhIHRvIHBvcHVsYXRlIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdGhhdCB3ZSdyZSBzb3J0aW5nIGZvclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3JkZXJSZXZlcnNlPWZhbHNlXSBUcnVlIGlmIHdlJ3JlIGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsU29ydENhbGxiYWNrPn0gW3NvcnRpbmdzXSBBIHNldCBvZiBzb3J0aW5nIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW3Jvd0NsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIHJvd1xuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtjZWxsQ2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgY2VsbFxuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIGZvciBlYWNoIHNvcnRhYmxlIGNvbHVtblxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0YWJsZT10cnVlXSBUcnVlIGlmIHRoZSBncmlkIGlzIHNlbGVjdGFibGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW211bHRpc2VsZWN0PWZhbHNlXSBUcnVlIGlmIHdlIHdpbGwgZW5hYmxlIG11bHRpc2VsZWN0IGluIHRoZSBncmlkXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHJlYWN0IGdyaWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IHByb3BzIFJlYWN0IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RHcmlkXG4gKiBAY2xhc3NkZXNjIFJlYWN0IEdyaWQgQ29tcG9uZW50IGNsYXNzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpO1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5pbml0aWFsRGF0YS5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGZvciB0aGUgZ3JpZCBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgUmVhY3RHcmlkI3N0YXRlXG4gICAgICAgICAqIEB0eXBlIHtHcmlkU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHMsXG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiAtMSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMucHJvcHMub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5wcm9wcy5vcmRlclJldmVyc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcm93cyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNvcnRSb3dzKCkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnRpbmdzW3RoaXMuc3RhdGUub3JkZXJCeV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoc29ydEZuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0YWJsZS13cmFwcGVyJHt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICcgZGlzYWJsZWQnfWA7XG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+e3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzKSl9PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MubWFwKHRoaXMucmVuZGVyUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBjb2x1bW4gaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ29sdW1uKGNvbHVtbikge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbHVtbi53aWR0aCB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUhlYWRlckNsaWNrLmJpbmQodGhpcywgY29sdW1uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcm93IGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclJvdyhyb3cpIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocm93LmRhdGEpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtyb3dDbGFzc05hbWV9ICR7cm93LnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5OiByb3cuc2hvdyA/ICd0YWJsZS1yb3cnIDogJ25vbmUnIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ2VsbC5iaW5kKHRoaXMsIHJvdykpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIGNlbGwgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2xcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDZWxsKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZShyb3cuZGF0YSwgY29sKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2wud2lkdGggfTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0eXBlb2YgY29sLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBjb2wuZm9ybWF0LmNhbGwodGhpcywgcm93LmRhdGFbY29sLm5hbWVdLCByb3cpIDpcbiAgICAgICAgICAgIHJvdy5kYXRhW2NvbC5uYW1lXS50b1N0cmluZygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3Jvdy5pZH0gJHtjb2wubmFtZX1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlQ2VsbENsaWNrLmJpbmQodGhpcywgcm93LCBjb2wubmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBjb250ZW50cyA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA6XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsLCBjb250ZW50cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBldmVudCB3aGVuIGEgY2xpY2sgaXMgbWFkZSBpbiB0aGUgZ3JpZCBoZWFkZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbHVtblxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUhlYWRlckNsaWNrKGNvbHVtbiwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdIZWFkZXJDbGljaycsIHsgZGV0YWlsOiBjb2x1bW4gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaGVhZGVyRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db2x1bW5IZWFkZXJDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKGNvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIG51bWVyaWMgaW5kZXggZm9yIGEgZ2l2ZW4gcm93IG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Um93TmR4KHJvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5pZCA9PT0gcm93LmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIGEgY2VsbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWVcbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFRoZSByZWFjdCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVDZWxsQ2xpY2socm93LCBjb2xOYW1lLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm93TmR4ID0gdGhpcy5nZXRSb3dOZHgocm93KTtcbiAgICAgICAgbGV0IHVwZGF0ZUxhc3RSb3cgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzZWxlY3RPbmVSb3cgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9ICFjdXJSb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1clJvdy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdFJvd1JhbmdlID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRGcm9tID0gTWF0aC5taW4ocm93TmR4LCB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0VG8gPSBNYXRoLm1heChyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc2V0RnJvbTsgaSA8PSBzZXRUbzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1clJvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKGlubmVyUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZWxlY3RSb3dSYW5nZShjdXJSb3cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyb3dOZHggIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiAhZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWwgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9uZVJvdyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXN0Um93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlKHJvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jdHJsS2V5ICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQuY3RybEtleSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSb3dSYW5nZShyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiB1cGRhdGVMYXN0Um93ID8gcm93TmR4IDogdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3csXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdDZWxsQ2xpY2snLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbDogY29sTmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGNlbGxFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2VsbENsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhyb3csIGNvbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcm93cyB0byB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcm93cyA9IFtyb3dzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmR4KSB7XG4gICAgICAgICAgICBuZHggPSB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZFJvd3MgPSByb3dzLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG4gICAgICAgIGNvbnN0IHJhd0RhdGFSb3dzID0gcm93cy5tYXAocm93ID0+ICQuZXh0ZW5kKHRydWUsIHt9LCByb3cpKTtcblxuICAgICAgICBjb25zdCBuZXdSb3dzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi5ncmlkUm93cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4ucmF3RGF0YVJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogbmV3Um93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IG5ld0RhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXhpc3Rpbmcgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudCBhbmQgYWRkcyBuZXcgcm93cyBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcm93cyA9IFtyb3dzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBncmlkUm93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IHJhd0RhdGFSb3dzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBuZXdEYXRhID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UobmR4ICsgbGVuZ3RoKVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogbmV3Um93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IG5ld0RhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCByb3dzIGJ5IGEgc3BlY2lmaWMgY29sdW1uIG5hbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7U29ydFR5cGV9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMuc3RhdGUub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5zdGF0ZS5vcmRlclJldmVyc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByb3cgYXQgbmR4XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIGlmIChuZHggPCAwIHx8IG5keCA+PSB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbbmR4XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKG5ldyBHcmlkUm93KHRoaXMuc3RhdGUucm93c1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dJZHMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5zdGF0ZS5yb3dzW2ldLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZ3JpZCBjb2x1bW5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZENvbHVtbltdfVxuICAgICAqL1xuICAgIGdldENvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1uW119IGNvbHVtbnNcbiAgICAgKi9cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLm1hcChjb2wgPT4gbmV3IEdyaWRDb2x1bW4oY29sKSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byByZXRyaWV2ZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLnN0YXRlLnJvd3NbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3cuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmlkUm93KHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgcm93IGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVSb3dzKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHJvdyBpZCB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgUGFydGlhbCBvciBmdWxsIHJvdyBkYXRhIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVJvdyhpZCwgZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93SXRlbSA9IHRoaXMuc3RhdGUucm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJhd0RhdGEgPSB0aGlzLnN0YXRlLnJhd0RhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3dJdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IG5ldyBHcmlkUm93KCQuZXh0ZW5kKHRydWUsIHJvd0l0ZW0uZGF0YSwgZGF0YSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Jhd0RhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmF3RGF0YSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNwbGljZShpLCAxLCBuZXdSb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmF3RGF0YS5zcGxpY2UoaSwgMSwgbmV3UmF3RGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB0aGlzLnN0YXRlLnJhd0RhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBjZWxsIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93SXRlbSA9IHRoaXMuc3RhdGUucm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJhd0RhdGFJdGVtID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByb3dJdGVtLmRhdGFbY29sTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByYXdEYXRhSXRlbVtjb2xOYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWRcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICByYXdEYXRhOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wVHlwZXMgZm9yIGdyaWQgY29tcG9uZW50XG4gKlxuICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICogQHR5cGUge0dyaWRQcm9wc31cbiAqIEBzdGF0aWNcbiAqL1xuUmVhY3RHcmlkLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH0pKSxcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbXVsdGlzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIG9yZGVyQnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3JkZXJSZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0aW5nczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5mdW5jKSxcbiAgICBvbkNvbHVtbkhlYWRlckNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNlbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93Q2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHByb3BlcnRpZXMgb2YgdGhlIFJlYWN0R3JpZCBjbGFzc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKi9cblJlYWN0R3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdncmlkJyxcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBvcmRlckJ5OiAnJyxcbiAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIG11bHRpc2VsZWN0OiBmYWxzZSxcbiAgICBvcmRlclJldmVyc2U6IGZhbHNlLFxuICAgIHNvcnRpbmdzOiB7fSxcbiAgICBpbml0aWFsRGF0YTogW10sXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogbnVsbCxcbiAgICBvbkNlbGxDbGljazogbnVsbCxcbiAgICByb3dDbGFzc05hbWU6ICgpID0+ICgnJyksXG4gICAgY2VsbENsYXNzTmFtZTogKCkgPT4gKCcnKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUm93IHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIHJvd1xuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJvd1Byb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkXSBUaGUgdW5pcXVlIGlkIG9mIHRoZSByb3dcbiAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSBUaGUgcmF3IGRhdGEgZm9yIHRoZSByb3dcbiAqL1xuXG4vKipcbiAqIEdyaWQgUm93IENvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSb3dQcm9wc3xHcmlkUm93fSBwcm9wc1xuICogQGNsYXNzIEdyaWRSb3dcbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgUm93IGluIHRoZSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkUm93IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgaW5zdGFuY2VvZiBHcmlkUm93KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZCA/IHByb3BzLmlkIDogR3JpZFJvdy5nZXROZXh0Um93SWQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2RhdGFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlIHJvdyBpcyBzZWxlY3RlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3NlbGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgbm90IGZpbHRlcmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjc2hvd1xuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgcm93IGlkXG4gKlxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuR3JpZFJvdy5nZXROZXh0Um93SWQgPSAoKSA9PiAoYCdyb3dfJHtHcmlkUm93Lm5leHRSb3dJZCsrfWApO1xuXG4vKipcbiAqIE5leHQgaWQgcm93IGdlbmVyYXRvclxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAbWVtYmVyT2YgR3JpZFJvd1xuICogQHN0YXRpY1xuICovXG5HcmlkUm93Lm5leHRSb3dJZCA9IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRSb3cuanMiLCIvKipcbiAqIEZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIGEgY2VsbCB2YWx1ZVxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0aW5nQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ2VsbCB2YWx1ZVxuICogQHBhcmFtIHtHcmlkUm93fSByb3cgVGhlIGVudGlyZSByb3dcbiAqIEByZXR1cm4ge3N0cmluZ3xIVE1MRWxlbWVudHxSZWFjdC5Db21wb25lbnR9XG4gKi9cblxuLyoqXG4gKiBDb2x1bW4gcHJvcGVydGllcyBvYmplY3QgdG8gZGVmaW5lIGEgY29sdW1uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sdW1uUHJvcHNcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZGlzcGxheU5hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt3aWR0aF0gQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xhc3NOYW1lXSBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7Rm9ybWF0dGluZ0NhbGxiYWNrfSBbZm9ybWF0XSBBIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIHRoZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbc29ydGFibGVdIFRydWUgaWYgdGhlIGNvbHVtbiBpcyBzb3J0YWJsZVxuICovXG5cbi8qKlxuICogR3JpZCBjb2x1bW4gY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0NvbHVtblByb3BzfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29sdW1uXG4gKiBAY2xhc3MgR3JpZENvbHVtblxuICogQGNsYXNzZGVzYyBDbGFzcyByZXByZXNlbnRpbmcgYSBjb2x1bW4gaW4gYSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzZXRXaWR0aCA9ICh3aWR0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGUgPSAvXihcXGQpK1tweHwlXSQvO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRlLnRlc3Qod2lkdGgudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZGlzcGxheU5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZSA/IHByb3BzLmRpc3BsYXlOYW1lIDogdGhpcy5uYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBIVE1MIHZhbHVlIGZvciB3aWR0aCAoZWl0aGVyIHBpeGVscyBvciBwZXJjZW50YWdlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3dpZHRoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0V2lkdGgocHJvcHMud2lkdGgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNjbGFzc05hbWVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG9wdGlvbmFsIGZvcm1hdHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNmb3JtYXRcbiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jc29ydGFibGVcbiAgICAgICAgICogQHR5cGUge2Jvb2x8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zb3J0YWJsZSA9IHByb3BzLnNvcnRhYmxlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRyZWUgZnJvbSAnLi4vanN4L1JlYWN0VHJlZSc7XG5cbi8qKlxuICogVHJlZSBjbGFzcyBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7UmVhY3RUcmVlUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0cmVlXG4gKiBAY2xhc3MgVHJlZVxuICogQGNsYXNzZGVzYyBUcmVlIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIHRyZWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJlZSBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjdHJlZVxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZVByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUmVhY3RUcmVlIENvbXBvbmVudCB3aXRoaW4gdGhlIHRyZWUgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnRyZWUgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFRyZWUsIHsgLi4udGhpcy50cmVlUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB3ZSBzaG93IG9ubHkgYSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBkYXRhIG9uIHRoZSB0cmVlLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IGRhdGEgVGhlIHJvb3QgaXRlbSBsaXN0IGZvciB0aGUgdHJlZSB3aXRoIGFsbCBpdHMgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkSXRlbUlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmdldFNlbGVjdGVkSXRlbUlkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9uIHRoZSB0cmVlIGJhc2VkIGluIHRoZSBpdGVtJ3MgcGFyZW50SWQgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLmFkZEl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhbiBpdGVtIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS51cGRhdGVJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpdGVtIGlkIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHRoaXMudHJlZS5kZWxldGVJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHJldHVybnMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpZCBvZiB0aGUgaXRlbSB0byBmaW5kXG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBUcmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBUcmVlIGlzIGludGVyYWN0aXZlXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRoZSBpdGVtcyB3aXRoIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmV4cGFuZEFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdGhlIGl0ZW1zIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnRyZWUuY29udHJhY3RBbGwoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RyZWUuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFRyZWVJdGVtIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyZWVJdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSB1bmlxdWUgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gW3BhcmVudElkPTBdIFRoZSBwYXJlbnQgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXX0gY2hpbGRyZW4gVGhlIGl0ZW0ncyBjaGlsZHJlblxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVN0YXRlXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IHJvb3QgVGhlIHJvb3QgaXRlbSBjb250YWluaW5nIHRyZWUgcm9vdCBjaGlsZHJlblxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgaXMgaW4gdGhlIGxvYWRpbmcgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHNlbGVjdGVkSXRlbSBUaGUgaWQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZyxib29sZWFuPn0gZXhwYW5kZWRJZHMgQSBjb2xsZWN0aW9uIG9mIHRoZSBpZHMgb2YgZXhwYW5kZWQgY2F0ZWdvcmllc1xuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIHRyZWUgaXMgZW5hYmxlZFxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlUHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RUcmVlUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9dHJlZV1cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGZvcm1hdFxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfG51bGx9IGluaXRpYWxEYXRhXG4gKiBAcHJvcGVydHkge1NvcnRDYWxsYmFja3xudWxsfSBzb3J0XG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFJlYWN0VHJlZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBwcm9wc1xuICogQGNsYXNzIFJlYWN0VHJlZVxuICogQGNsYXNzZGVzYyBSZWFjdCBUcmVlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb290OiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RUcmVlIHJlbmRlciBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJ2Rpc2FibGVkJ30+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICA8dWw+e3RoaXMuc3RhdGUucm9vdC5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfTwvdWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgdHJlZSBpdGVtIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJZHNbaXRlbS5pZF07XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICAgICAgY29uc3QgZXhwYW5kU3RhdHVzID0gZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbnRyYWN0ZWQnO1xuICAgICAgICBjb25zdCBpdGVtRXhwYW5kQ2xhc3NOYW1lID0gYGV4cGFuZCAke2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID8gZXhwYW5kU3RhdHVzIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtRXhwYW5kQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmV4cGFuZENvbnRyYWN0SXRlbS5iaW5kKHRoaXMsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcm1hdC5jYWxsKG51bGwsIGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgdHJlZSBzaG93cyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgb24gdGhlIHRyZWUgYW5kIHJlbW92ZXMgYWxsIHByZXZpb3VzIGRhdGFcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IHJvb3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzb3J0PXRydWVdXG4gICAgICovXG4gICAgc2V0RGF0YShyb290LCBzb3J0ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzb3J0VHJlZSA9ICh0cmVlKSA9PiB7XG4gICAgICAgICAgICB0cmVlLmZvckVhY2goKGJyYW5jaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUcmVlKGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydCh0cmVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgc29ydFRyZWUocm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgZGF0YSBpbiBhIHRyZWUgYnJhbmNoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSB0cmVlXG4gICAgICovXG4gICAgc29ydCh0cmVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydDtcblxuICAgICAgICBpZiAodHlwZW9mIHNvcnRGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJlZS5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgc2VsZWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGlkID8gbnVsbCA6IGlkO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIGV4cGFuZENvbnRyYWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kZWRbaWRdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkW2lkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJZHM6IGV4cGFuZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IG9uIFJlYWN0VHJlZSByb290IGVsZW1lbnQgdGhhdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSXRlbUNsaWNrJywgeyBkZXRhaWw6IHsgc2VsZWN0ZWRJdGVtIH0gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaXRlbUV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gdG8gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5pZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLnBhcmVudElkICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0uY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gJzAnIHx8IGl0ZW0ucGFyZW50SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guY2hpbGRyZW4ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGZvdW5kSXRlbSA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLmlkKTtcblxuICAgICAgICBpZiAoZm91bmRJdGVtKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmb3VuZEl0ZW0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpZCcgJiYga2V5ICE9PSAncGFyZW50SWQnICYmIGtleSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA/IGl0ZW1ba2V5XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgbGV0IGJyYW5jaDtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09IDAgfHwgaXRlbS5wYXJlbnRJZCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gY2FjaGVSb290O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5wYXJlbnRJZCkuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdCxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQodGhpcy5zdGF0ZS5yb290LCBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgaW4gaXRlbSBpbiBhIHRyZWUgYnJhbmNoIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119cm9vdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUluQnJhbmNoQnlJZChyb290LCBpZCkge1xuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290W2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXQgPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGl0ZW0uY2hpbGRyZW4sIGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsaWNhdGVzIHRoZSByb290IG9iamVjdCBmb3IgY2hhbmdlc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtW119XG4gICAgICovXG4gICAgcmVwbGljYXRlUm9vdCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJldC5wdXNoKCQuZXh0ZW5kKHt9LCB0aGlzLnN0YXRlLnJvb3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBwcm9wZXJ0eSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVuYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kVHJlZSA9IChpdGVtcywgZXhwYW5kZWRJZHMpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0bSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdG0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzW2l0bS5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRUcmVlKGl0bS5jaGlsZHJlbiwgZXhwYW5kZWRJZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkSWRzID0ge307XG5cbiAgICAgICAgZXhwYW5kVHJlZSh0aGlzLnN0YXRlLnJvb3QsIGV4cGFuZGVkSWRzKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVhY3RUcmVlIHByb3BUeXBlc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkpLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIFJlYWN0VHJlZSBkZWZhdWx0IHByb3BzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAndHJlZScsXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIHNvcnQ6IG51bGxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICcuLi9qc3gvUmVhY3RNb2RhbCc7XG5cbi8qKlxuICogQGNsYXNzIE1vZGFsXG4gKiBAY2xhc3NkZXNjIEltcGxlbWVudHMgYSBtb2RhbCBjbGFzcyBhcyBhIHByb21pc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICAgIC8qKlxuICAgICAqIE1vZGFsIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RNb2RhbHxudWxsfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RhbCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgTW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLm1vZGFsID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNb2RhbCwgeyAuLi50aGlzLnByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgbW9kYWwgYXMgcHJvbWlzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbFN0YXRlfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKiBAbWVtYmVyT2YgTW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaG93KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyA9IHN1Y2Nlc3M7XG4gICAgICAgICAgICBvcHRpb25zLm9uUmVqZWN0ID0gcmVqZWN0O1xuXG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNldFN0YXRlKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7KHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgpIC8gMn1weGA7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHsod2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0KSAvIDJ9cHhgO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIE9rIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0T2tCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ29rJyxcbiAgICBsYWJlbDogJ09rJyxcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tYWN0aW9uJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIFllcyBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldFllc0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAneWVzJyxcbiAgICBsYWJlbDogJ1llcycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBObyBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE5vQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdubycsXG4gICAgbGFiZWw6ICdObycsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1jYW5jZWwnXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvTW9kYWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGFsU3RhdGVcbiAqIEBwcm9wZXJ0eSB7TW9kYWxCdXR0b25bXX0gYnV0dG9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWVzc2FnZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbdmlzaWJsZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2xvc2FibGVcbiAqIEBwcm9wZXJ0eSB7TW9kYWxDbG9zZUNhbGxiYWNrfSBbb25TdWNjZXNzXVxuICogQHByb3BlcnR5IHtNb2RhbENsb3NlQ2FsbGJhY2t9IFtvblJlamVjdF1cbiAqL1xuXG4vKipcbiAqIENhbGxiYWNrIGZvciBtb2RhbCBjbG9zZSBldmVudHNcbiAqXG4gKiBAY2FsbGJhY2sgTW9kYWxDbG9zZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uUHJlc3NlZFxuICogQHBhcmFtIHtib29sZWFufSBzdWNjZXNzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNb2RhbEJ1dHRvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGtleVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBSZWFjdE1vZGFsXG4gKiBAY2xhc3NkZXNjIFJlYWN0IENvbXBvbmVudCBmb3IgYSBtb2RhbCBkaWFsb2dcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBSZWFjdE1vZGFsIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtNb2RhbFN0YXRlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FsZXJ0IG1lc3NhZ2UnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjbG9zYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b24gYWN0aW9uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvblN1Y2Nlc3MoKSB7fSxcbiAgICAgICAgICAgIG9uUmVqZWN0KCkge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYG1vZGFsICR7dGhpcy5zdGF0ZS52aXNpYmxlID8gJ3Zpc2libGUnIDogJyd9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xvc2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5vbk1vZGFsQ2xvc2UuYmluZCh0aGlzKX0+IHggPC9zcGFuPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnV0dG9ucy5tYXAodGhpcy5yZW5kZXJCdXR0b24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgbW9kYWwgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b259IGJ1dHRvblxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckJ1dHRvbihidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2J1dHRvbi5rZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b24uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Nb2RhbEJ1dHRvblByZXNzZWQuYmluZCh0aGlzLCBidXR0b24pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtidXR0b24ubGFiZWx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBtb2RhbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW9kYWxDbG9zZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0YXRlLm9uUmVqZWN0KCdjbG9zZS1idXR0b24nLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBjbGlja2VkIG9uIGEgbW9kYWwgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtNb2RhbEJ1dHRvbn0gYnV0dG9uXG4gICAgICovXG4gICAgb25Nb2RhbEJ1dHRvblByZXNzZWQoYnV0dG9uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoYnV0dG9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25TdWNjZXNzKGJ1dHRvbi5rZXksIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblJlamVjdChidXR0b24ua2V5LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RNb2RhbC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG4vKipcbiAqIFRhZ3NNYW5hZ2VyIENvbnN0cnVjdG9yIC0gTG9hZHMgdGhlIHRhZ3MgcHJlc2VudCBpbiB0aGUgZm9ybVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhpZGRlbkZpZWxkc0NvbnRhaW5lciAtIFRoZSBjb250YWluZXIgZm9yIHRoZSBoaWRkZW4gZmllbGRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWdzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgdGFncyB3aWxsIGJlIHJlbmRlcmVkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnRmllbGROYW1lUHJlZml4IC0gVGhlIGZpZWxkIG5hbWUgb2YgdGhlIGhpZGRlbiB0YWcgZmllbGRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnc1RleHRMYWJlbCAtIFRoZSBmb3IgYXR0cmlidXRlIGZvciB0aGUgdGFncyBsYWJlbFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaHhyUm91dGVDYWxsYmFjayAtIFRoZSByb3V0ZSB0byB0aGUgeGhyIEFQSSBjYWxsIHRvIGJyaW5nIHN1Z2dlc3Rpb25zXG4gKlxuICogQGNsYXNzIFRhZ3NNYW5hZ2VyXG4gKiBAY2xhc3NkZXNjIE1hbmFnZXIgZm9yIHRhZyBlZGl0aW5nIGluIHBvc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3NNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihoaWRkZW5GaWVsZHNDb250YWluZXIsIHRhZ3NDb250YWluZXIsIHRhZ0ZpZWxkTmFtZVByZWZpeCwgdGFnc1RleHRMYWJlbCwgeGhyUm91dGVDYWxsYmFjaykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1RhZ0VudGl0eVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXhpc3RpbmcgZm9ybSBmaWVsZHNcbiAgICAgICAgY29uc3QgdGFnRmllbGRzID0gJC5maW5kKCdpbnB1dFt0eXBlPWhpZGRlbl0nKTtcblxuICAgICAgICBsZXQgY3VycmVudFRhZ0lkID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWcgPSB7fTtcblxuICAgICAgICAkKHRhZ0ZpZWxkcykuZWFjaCgobmR4LCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFnUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dGFnRmllbGROYW1lUHJlZml4fVxcXFxfKFxcXFxkKylcXFxcXyhpZHx0ZXh0KSRgKTtcbiAgICAgICAgICAgIGNvbnN0IFtsYWJlbCwgdGFnSWQsIHRhZ0ZpZWxkXSA9IGZpZWxkLmlkLm1hdGNoKHRhZ1JlZ0V4cCk7XG5cbiAgICAgICAgICAgIGlmIChOdW1iZXIodGFnSWQpICE9PSBjdXJyZW50VGFnSWQpIHtcbiAgICAgICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhZ0lkID0gTnVtYmVyKHRhZ0lkKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYWcudGFnSWQgPSBjdXJyZW50VGFnLnRhZ0lkID9cbiAgICAgICAgICAgICAgICBgJHtjdXJyZW50VGFnLnRhZ0lkfXwke2xhYmVsfWAgOlxuICAgICAgICAgICAgICAgIGxhYmVsO1xuXG4gICAgICAgICAgICBjdXJyZW50VGFnW3RhZ0ZpZWxkXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VycmVudFRhZy5pZCAmJiBjdXJyZW50VGFnLnRleHQpIHtcbiAgICAgICAgICAgIHRhZ3MucHVzaChjdXJyZW50VGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFRhZ3NEaXNwbGF5LCB7XG4gICAgICAgICAgICBoaWRkZW5GaWVsZHNDb250YWluZXIsXG4gICAgICAgICAgICB0YWdzVGV4dExhYmVsLFxuICAgICAgICAgICAgeGhyUm91dGVDYWxsYmFja1xuICAgICAgICB9KSwgdGFnc0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50YWdzRGlzcGxheS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnRW50aXR5XG4gKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBpZFxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gdGFnSWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdzU3RhdGVcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHRhZ3NcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHN1Z2dlc3Rpb25zXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RUYWdzRGlzcGxheVxuICogQGNsYXNzZGVzYyBEaXNwbGF5IGNsYXNzIGZvciB0YWcgZWxlbWVudHNcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIFRhZ3NTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3MgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhZ0luZGV4IHRvIHNldCBmb3IgdGhlIG5ldyBoaWRkZW4gZWxlbWVudHMgaW4gdGhlIGZvcm1cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggPSB0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC8gMjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBzdWdnZXN0aW9ucyBib3ggdGltZW91dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgZm9yIHRoZSBwcmV2aW91cyB2YWx1ZSBiZWZvcmUga2V5VXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLmNsZWFyU3VnZ2VzdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgdGFnIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWxpc3RcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWdzLm1hcCh0aGlzLnJlbmRlclRhZy5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5pbnB1dCA9IGlucHV0OyB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdfc3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5tYXAodGhpcy5yZW5kZXJTdWdnZXN0aW9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBzaW5nbGUgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJUYWcodGFnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17dGFnLnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZy50ZXh0fSA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlVGFnLmJpbmQodGhpcywgdGFnKX0+eDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgdGFnIHN1Z2dlc3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclN1Z2dlc3Rpb24odGFnKSB7XG4gICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4oLiopKCR7dGhpcy5pbnB1dC52YWx1ZX0pKC4qKSRgLCAnaScpO1xuICAgICAgICBjb25zdCB0YWdQYXJ0cyA9IHRhZy50ZXh0Lm1hdGNoKHRhZ1JlZ0V4cCk7XG4gICAgICAgIGxldCBpbm5lclRhZyA9IHRhZy50ZXh0O1xuXG4gICAgICAgIGlmICh0YWdQYXJ0cyAhPT0gbnVsbCAmJiB0YWdQYXJ0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZVRhZyA9IHRhZ1BhcnRzWzFdO1xuICAgICAgICAgICAgY29uc3QgdGFnVGV4dCA9IHRhZ1BhcnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgcG9zdFRhZyA9IHRhZ1BhcnRzWzNdO1xuXG4gICAgICAgICAgICBpbm5lclRhZyA9ICg8c3Bhbj57cHJlVGFnfTxzdHJvbmc+e3RhZ1RleHR9PC9zdHJvbmc+e3Bvc3RUYWd9PC9zcGFuPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbm5lclRhZyA9IDxzcGFuPnt0YWcudGV4dH08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIga2V5PXt0YWcudGV4dH0gb25DbGljaz17dGhpcy5vblN1Z2dlc3Rpb25DbGljay5iaW5kKHRoaXMsIHRhZyl9Pntpbm5lclRhZ308L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRhZyBieSB0ZXh0IG9ubHkgKG5ldyB0YWcpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdUZXh0XG4gICAgICovXG4gICAgYWRkVGFnKHRhZ1RleHQpIHtcbiAgICAgICAgLy8gdHJpbSBhbmQgcmVtb3ZlIHRyYWlsaW5nIHNlbWljb2xvbnNcbiAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQudHJpbSgpO1xuXG4gICAgICAgIGlmICh0YWdUZXh0LmVuZHNXaXRoKCcsJykpIHtcbiAgICAgICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnN1YnN0cigwLCB0YWdUZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgZW1wdHkgdGFnc1xuICAgICAgICBpZiAodGFnVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIHJlcGVhdGVkIHRhZ3NcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3NbaV0udGV4dCA9PT0gdGFnVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyeSB0byBnZXQgdGFnIGlkIGZyb20gc3VnZ2VzdGlvbnNcbiAgICAgICAgbGV0IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb24udGV4dC50b0xvd2VyQ2FzZSgpID09PSB0YWdUZXh0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgdGFnVGV4dCA9IHN1Z2dlc3Rpb24udGV4dDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkVGVtcGxhdGUgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm90b3R5cGUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2csIHRoaXMubmV3VGFnSW5kZXgudG9TdHJpbmcoMTApKTtcblxuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ICs9IDE7XG5cbiAgICAgICAgJCh0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lcikuYXBwZW5kKG5ld0ZpZWxkVGVtcGxhdGUpO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLnZhbHVlID0gdGFnSWRGcm9tU3VnZ2VzdGlvbnM7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0udmFsdWUgPSB0YWdUZXh0O1xuXG4gICAgICAgIGNvbnN0IG5ld1RhZ0lkcyA9XG4gICAgICAgICAgICBgJHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLmlkfXwke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0uaWR9YDtcblxuICAgICAgICB0aGlzLnN0YXRlLnRhZ3MucHVzaCh7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIHRhZ0lkOiBuZXdUYWdJZHMsXG4gICAgICAgICAgICB0ZXh0OiB0YWdUZXh0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgdGFnIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR8bnVsbH0gZXZlbnRcbiAgICAgKi9cbiAgICByZW1vdmVUYWcodGFnLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRmllbGRzID0gdGFnLnRhZ0lkLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgZm9ybUZpZWxkcy5mb3JFYWNoKChmaWVsZElkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSWQpO1xuICAgICAgICAgICAgZmllbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmaWVsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZVRhZyA9IHRoaXMuc3RhdGUudGFnc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlVGFnLnRleHQgPT09IHRhZy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgc3VnZ2VzdGlvbnMgdGltZW91dCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5zdWdnZXN0aW9uVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIGNhbGwgdG8gc3VnZ2VzdGlvbnMgYW5kIHVwZGF0ZXMgdGhlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdSb3V0ZSA9IHRoaXMucHJvcHMueGhyUm91dGVDYWxsYmFjayh0aGlzLmlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh0YWdSb3V0ZSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWdzLm1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBrZXkgcHJlc3NlcyBvbiB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlVcChldmVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2UgbmVlZCB0byBsb29rIGF0IHRoZSB2YWx1ZSB0aGF0IHdhcyBvbiB0aGUgaW5wdXQgQkVGT1JFIG9uS2V5VXAgdXBkYXRlcyB0aGVcbiAgICAgICAgICogaW5wdXQgdmFsdWUsIGJlY2F1c2Ugd2Ugb25seSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJldmlvdXMgdGFnIGlmIHRoZSBpbnB1dCBXQVNcbiAgICAgICAgICogZW1wdHkgYmVmb3JlIHByZXNzaW5nIEJhY2tzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZSh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7Jyk7XG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9IGAke3NwYW4ub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLZXlQcmVzcyBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlQcmVzcyhldmVudCkge1xuICAgICAgICBjb25zdCBldnRLZXkgPSBldmVudC5rZXk7XG5cbiAgICAgICAgc3dpdGNoIChldnRLZXkpIHtcbiAgICAgICAgY2FzZSAoJywnKTpcbiAgICAgICAgY2FzZSAoJ0VudGVyJyk6XG4gICAgICAgICAgICB0aGlzLmFkZFRhZyh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSAnNXB4JztcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8gY2xpY2tzIG9uIHRoZSB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGEgc3VnZ2VzdGVkIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblN1Z2dlc3Rpb25DbGljayh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuYWRkVGFnKHRhZy50ZXh0KTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3VnZ2VzdGlvbnMgb24gZG9jdW1lbnQgY2xpY2tcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjbGVhclN1Z2dlc3Rpb25zKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50VGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT09ICd0YWdfc3VnZ2VzdGlvbnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5SZWFjdFRhZ3NEaXNwbGF5LnByb3BUeXBlcyA9IHtcbiAgICBoaWRkZW5GaWVsZHNDb250YWluZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEhUTUxFbGVtZW50KS5pc1JlcXVpcmVkLFxuICAgIHRhZ3NUZXh0TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeGhyUm91dGVDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuUmVhY3RUYWdzRGlzcGxheS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFnc1RleHRMYWJlbDogJ3RleHQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRhZ3NEaXNwbGF5LmpzeCIsImltcG9ydCBHcmlkIGZyb20gJy4uL2VzNi9HcmlkJztcbmltcG9ydCBUcmVlIGZyb20gJy4uL2VzNi9UcmVlJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9lczYvTW9kYWwnO1xuaW1wb3J0IFRhZ3NNYW5hZ2VyIGZyb20gJy4uL2VzNi9UYWdzTWFuYWdlcic7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuR3JpZCA9IEdyaWQ7XG53aW5kb3cuUmVhY3RMaWIuTW9kYWwgPSBNb2RhbDtcbndpbmRvdy5SZWFjdExpYi5UcmVlID0gVHJlZTtcbndpbmRvdy5SZWFjdExpYi5UYWdzTWFuYWdlciA9IFRhZ3NNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJzb3VyY2VSb290IjoiIn0=