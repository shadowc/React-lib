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
            var rowData = row.data[col.name] ? row.data[col.name].toString() : '';
            var contents = typeof col.format === 'function' ? col.format.call(this, row.data[col.name], row) : rowData;

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
                    if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                        // normal select
                        selectOneRow(row);
                        updateLastRow = true;
                    } else if (event.shiftKey && this.props.multiselect) {
                        // multi selection
                        selectRowRangeExclusive(row);
                    } else if ((event.ctrlKey || event.metaKey) && this.props.multiselect) {
                        // multi selection
                        row.selected = !row.selected;
                        updateLastRow = true;
                    } else if (event.shiftKey && (event.ctrlKey || event.metaKey) && this.props.multiselect) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdFRyZWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJncmlkIiwiaWQiLCJncmlkUHJvcHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsIm5keCIsImFkZFJvd3MiLCJzZXRSb3dzIiwibGVuZ3RoIiwiZGVsZXRlUm93cyIsInNvcnRCeSIsImdldFNvcnQiLCJnZXRSb3ciLCJnZXRTZWxlY3RlZFJvd3MiLCJnZXRTZWxlY3RlZFJvd0lkcyIsImdldENvbHVtbnMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImdldEJ5SWQiLCJkZWxldGVCeUlkIiwiZGF0YSIsInVwZGF0ZVJvdyIsImNvbE5hbWUiLCJ2YWx1ZSIsInVwZGF0ZUNlbGwiLCJjbGVhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJSZWFjdEdyaWQiLCJjb2xzIiwibWFwIiwiY29sIiwiaW5pdGlhbERhdGEiLCJyb3ciLCJzdGF0ZSIsInJhd0RhdGEiLCJwcmV2U2VsZWN0ZWRSb3ciLCJvcmRlckJ5Iiwib3JkZXJSZXZlcnNlIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsInJlbmRlclJvdyIsImNvbHVtbiIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiZ2VuZXJhdGVIZWFkZXJDbGljayIsImRpc3BsYXlOYW1lIiwicm93Q2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGVhZGVyRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInJvb3RFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BhdGNoRXZlbnQiLCJvbkNvbHVtbkhlYWRlckNsaWNrIiwiaSIsInJvd05keCIsImdldFJvd05keCIsInVwZGF0ZUxhc3RSb3ciLCJzZWxlY3RPbmVSb3ciLCJjdXJSb3ciLCJmb3JFYWNoIiwiaW5uZXJSb3ciLCJzZWxlY3RSb3dSYW5nZSIsInNldEZyb20iLCJNYXRoIiwibWluIiwic2V0VG8iLCJtYXgiLCJzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZSIsInNlbGVjdGFibGUiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwibXVsdGlzZWxlY3QiLCJzZXRTdGF0ZSIsImNlbGxFdmVudCIsImNlbGwiLCJvbkNlbGxDbGljayIsImdyaWRSb3dzIiwicmF3RGF0YVJvd3MiLCJleHRlbmQiLCJuZXdSb3dzIiwic2xpY2UiLCJuZXdEYXRhIiwicmV0IiwicHVzaCIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwicmF3RGF0YUl0ZW0iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwic2hhcGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsInNvcnRhYmxlIiwiYm9vbCIsIm9iamVjdCIsIm9iamVjdE9mIiwiZGVmYXVsdFByb3BzIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIlRyZWUiLCJ0cmVlIiwidHJlZVByb3BzIiwic2V0RGF0YSIsImdldFNlbGVjdGVkSXRlbUlkIiwiaXRlbSIsImFkZEl0ZW0iLCJ1cGRhdGVJdGVtIiwiZGVsZXRlSXRlbUJ5SWQiLCJmaW5kSXRlbUJ5SWQiLCJleHBhbmRBbGwiLCJjb250cmFjdEFsbCIsIlJlYWN0VHJlZSIsInJvb3QiLCJleHBhbmRlZElkcyIsInNlbGVjdGVkSXRlbSIsInJlbmRlckl0ZW0iLCJleHBhbmRlZCIsIml0ZW1DbGFzc05hbWUiLCJleHBhbmRTdGF0dXMiLCJpdGVtRXhwYW5kQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJleHBhbmRDb250cmFjdEl0ZW0iLCJzZWxlY3RJdGVtIiwic29ydFRyZWUiLCJicmFuY2giLCJnZW5lcmF0ZUl0ZW1DbGljayIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1FdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsImZpbmRJdGVtSW5CcmFuY2hCeUlkIiwiZm91bmRJdGVtIiwia2V5cyIsImtleSIsImV4cGFuZFRyZWUiLCJpdGVtcyIsIml0bSIsImluc3RhbmNlT2YiLCJNb2RhbCIsIm1vZGFsIiwib3B0aW9ucyIsIlByb21pc2UiLCJzdWNjZXNzIiwicmVqZWN0IiwidmlzaWJsZSIsIm9uU3VjY2VzcyIsIm9uUmVqZWN0IiwibGVmdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2tCdXR0b24iLCJsYWJlbCIsImdldFllc0J1dHRvbiIsImdldE5vQnV0dG9uIiwiUmVhY3RNb2RhbCIsInRpdGxlIiwibWVzc2FnZSIsImNsb3NhYmxlIiwiYnV0dG9ucyIsIm9uTW9kYWxDbG9zZSIsInJlbmRlckJ1dHRvbiIsImJ1dHRvbiIsIm9uTW9kYWxCdXR0b25QcmVzc2VkIiwiVGFnc01hbmFnZXIiLCJoaWRkZW5GaWVsZHNDb250YWluZXIiLCJ0YWdzQ29udGFpbmVyIiwidGFnRmllbGROYW1lUHJlZml4IiwidGFnc1RleHRMYWJlbCIsInhoclJvdXRlQ2FsbGJhY2siLCJ0YWdzIiwidGFnRmllbGRzIiwiZmluZCIsImN1cnJlbnRUYWdJZCIsImN1cnJlbnRUYWciLCJlYWNoIiwiZmllbGQiLCJ0YWdSZWdFeHAiLCJSZWdFeHAiLCJtYXRjaCIsInRhZ0lkIiwidGFnRmllbGQiLCJOdW1iZXIiLCJ0ZXh0IiwidGFnc0Rpc3BsYXkiLCJSZWFjdFRhZ3NEaXNwbGF5Iiwic3VnZ2VzdGlvbnMiLCJpbnB1dCIsImJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhpZGRlblRhZ3MiLCJuZXdUYWdJbmRleCIsInN1Z2dlc3Rpb25UaW1lb3V0IiwicHJldklucHV0VmFsdWUiLCJvbiIsImNsZWFyU3VnZ2VzdGlvbnMiLCJoYW5kbGVGb2N1cyIsInJlbmRlclRhZyIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwicmVuZGVyU3VnZ2VzdGlvbiIsInRhZyIsInJlbW92ZVRhZyIsInRhZ1BhcnRzIiwiaW5uZXJUYWciLCJwcmVUYWciLCJ0YWdUZXh0IiwicG9zdFRhZyIsIm9uU3VnZ2VzdGlvbkNsaWNrIiwidHJpbSIsImVuZHNXaXRoIiwic3Vic3RyIiwidGFnSWRGcm9tU3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uIiwidG9Mb3dlckNhc2UiLCJuZXdGaWVsZFRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImFwcGVuZCIsIm5ld1RhZ0lkcyIsImZvY3VzIiwiZm9ybUZpZWxkcyIsInNwbGl0IiwiZmllbGRJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJhamF4IiwibWV0aG9kIiwidGhlbiIsIkpTT04iLCJwYXJzZSIsInNwYW4iLCJmb250U2l6ZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJSZWFjdExpYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7QUNBQSx3Qjs7Ozs7O0FDQUEsMEI7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7OztJQU9xQkEsSTtBQUNq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eEosSUFBaEI7QUFDQW1ELE9BQU9xRyxRQUFQLENBQWdCbEYsV0FBaEIseUIiLCJmaWxlIjoiUmVhY3RMaWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBhIHNvcnQgc3RhdGVcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTb3J0VHlwZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiB3ZSdyZSBvcmRlcmluZyBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBpZiB0aGUgb3JkZXIgaXMgcmV2ZXJzZWRcbiAqL1xuXG4vKipcbiAqIEdyaWQgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIGdyaWRcbiAqIEBjbGFzcyBHcmlkXG4gKiBAY2xhc3NkZXNjIEdyaWQgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggZ3JpZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBncmlkIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNncmlkXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdEdyaWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjcHJvcHNcbiAgICAgICAgICogQHR5cGUge0dyaWRQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZFByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgR3JpZCBDb21wb25lbnQgd2l0aGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmdyaWQgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEdyaWQsIHsgLi4udGhpcy5ncmlkUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmFkZFJvd3Mocm93cywgbmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBzZXRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFJvd3Mocm93cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVSb3dzKG5keCwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLmdyaWQuc29ydEJ5KHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U29ydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Um93KG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93SWRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29sdW1uIGNvbGxlY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zIGR5bmFtaWNhbGx5XG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnNldENvbHVtbnMoY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZVJvdyhpZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi4vZXM2L0dyaWRSb3cnO1xuaW1wb3J0IEdyaWRDb2x1bW4gZnJvbSAnLi4vZXM2L0dyaWRDb2x1bW4nO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkU3RhdGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IHJhd0RhdGEgVGhlIHJhdyBkYXRhIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRDb2x1bW5bXX0gY29sdW1ucyBUaGUgY29sdW1ucyBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkUm93W119IHJvd3MgVGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmV2U2VsZWN0ZWRSb3cgVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93XG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdG8gb3JkZXIgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgb2YgdGhlIG9yZGVyIHNob3VsZCBiZSByZXZlcnNlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgc2hvd3MgYSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBncmlkIGlzIGludGVyYWN0aXZlXG4gKi9cblxuLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIGNhbGxiYWNrLCBzaG91bGQgcmV0dXJuIC0xIGlmIGEgaXMgbG93ZXIgdGhhbiBiLFxuICogMCBpZiByb3dzIGFyZSBlcXVhbCBhbmQgMSBpZiBhIGlzIGdyZWF0ZXIgdGhhbiBiXG4gKlxuICogQGNhbGxiYWNrIFNvcnRDYWxsYmFja1xuICogQHBhcmFtIHtHcmlkUm93fSBhIFJvdyBhXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGIgUm93IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIENsYXNzTmFtZSBjYWxsYmFjaywgYSBmdW5jdGlvbiB0byByZXR1cm4gYSBjbGFzc05hbWUgKHN0cmluZylcbiAqIGJhc2VkIG9uIHJvdy9jb2x1bW4gaW5mb3JtYXRpb25cbiAqXG4gKiBAY2FsbGJhY2sgY2xhc3NOYW1lQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcm93IFRoZSByb3cgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2x1bW5dIFRoZSBjb2x1bW4gd2UncmUgcmVuZGVyaW5nIChmb3IgY2VsbCBjbGFzc05hbWVzKVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD1ncmlkXSBUaGUgaWQgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Q29sdW1uUHJvcHNbXX0gY29sdW1ucyBUaGUgY29sdW1ucyBkZWZpbml0aW9uIGZvciB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtSb3dQcm9wc1tdfSBpbml0aWFsRGF0YSBUaGUgaW5pdGlhbCBkYXRhIHRvIHBvcHVsYXRlIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdGhhdCB3ZSdyZSBzb3J0aW5nIGZvclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3JkZXJSZXZlcnNlPWZhbHNlXSBUcnVlIGlmIHdlJ3JlIGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsU29ydENhbGxiYWNrPn0gW3NvcnRpbmdzXSBBIHNldCBvZiBzb3J0aW5nIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW3Jvd0NsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIHJvd1xuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtjZWxsQ2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgY2VsbFxuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIGZvciBlYWNoIHNvcnRhYmxlIGNvbHVtblxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0YWJsZT10cnVlXSBUcnVlIGlmIHRoZSBncmlkIGlzIHNlbGVjdGFibGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW211bHRpc2VsZWN0PWZhbHNlXSBUcnVlIGlmIHdlIHdpbGwgZW5hYmxlIG11bHRpc2VsZWN0IGluIHRoZSBncmlkXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHJlYWN0IGdyaWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IHByb3BzIFJlYWN0IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RHcmlkXG4gKiBAY2xhc3NkZXNjIFJlYWN0IEdyaWQgQ29tcG9uZW50IGNsYXNzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpO1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5pbml0aWFsRGF0YS5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGZvciB0aGUgZ3JpZCBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgUmVhY3RHcmlkI3N0YXRlXG4gICAgICAgICAqIEB0eXBlIHtHcmlkU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHMsXG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiAtMSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMucHJvcHMub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5wcm9wcy5vcmRlclJldmVyc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcm93cyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNvcnRSb3dzKCkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnRpbmdzW3RoaXMuc3RhdGUub3JkZXJCeV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoc29ydEZuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0YWJsZS13cmFwcGVyJHt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICcgZGlzYWJsZWQnfWA7XG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+e3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzKSl9PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MubWFwKHRoaXMucmVuZGVyUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBjb2x1bW4gaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ29sdW1uKGNvbHVtbikge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbHVtbi53aWR0aCB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUhlYWRlckNsaWNrLmJpbmQodGhpcywgY29sdW1uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcm93IGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclJvdyhyb3cpIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocm93LmRhdGEpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtyb3dDbGFzc05hbWV9ICR7cm93LnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5OiByb3cuc2hvdyA/ICd0YWJsZS1yb3cnIDogJ25vbmUnIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ2VsbC5iaW5kKHRoaXMsIHJvdykpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIGNlbGwgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2xcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDZWxsKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZShyb3cuZGF0YSwgY29sKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2wud2lkdGggfTtcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IChyb3cuZGF0YVtjb2wubmFtZV0gPyByb3cuZGF0YVtjb2wubmFtZV0udG9TdHJpbmcoKSA6ICcnKTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0eXBlb2YgY29sLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBjb2wuZm9ybWF0LmNhbGwodGhpcywgcm93LmRhdGFbY29sLm5hbWVdLCByb3cpIDpcbiAgICAgICAgICAgIHJvd0RhdGE7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93LmlkfSAke2NvbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVDZWxsQ2xpY2suYmluZCh0aGlzLCByb3csIGNvbC5uYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwsIGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIHRoZSBncmlkIGhlYWRlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSGVhZGVyQ2xpY2soY29sdW1uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0hlYWRlckNsaWNrJywgeyBkZXRhaWw6IGNvbHVtbiB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChoZWFkZXJFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2soY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbnVtZXJpYyBpbmRleCBmb3IgYSBnaXZlbiByb3cgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSb3dOZHgocm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gYSBjZWxsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNlbGxDbGljayhyb3csIGNvbE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dOZHggPSB0aGlzLmdldFJvd05keChyb3cpO1xuICAgICAgICBsZXQgdXBkYXRlTGFzdFJvdyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9uZVJvdyA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gIWN1clJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2UgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldEZyb20gPSBNYXRoLm1pbihyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRUbyA9IE1hdGgubWF4KHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzZXRGcm9tOyBpIDw9IHNldFRvOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKGN1clJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvd05keCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25lUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUocm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2Uocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogdXBkYXRlTGFzdFJvdyA/IHJvd05keCA6IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93LFxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnQ2VsbENsaWNrJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IGNvbE5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChjZWxsRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2socm93LCBjb2xOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5keCkge1xuICAgICAgICAgICAgbmR4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4uZ3JpZFJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnJhd0RhdGFSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogZ3JpZFJvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiByYXdEYXRhUm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnN0YXRlLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICBpZiAobmR4IDwgMCB8fCBuZHggPj0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW25keF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuc3RhdGUucm93c1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUm93cyhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBuZXcgR3JpZFJvdygkLmV4dGVuZCh0cnVlLCByb3dJdGVtLmRhdGEsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSYXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHJhd0RhdGEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zcGxpY2UoaSwgMSwgbmV3Um93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhd0RhdGEuc3BsaWNlKGksIDEsIG5ld1Jhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhSXRlbSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcm93SXRlbS5kYXRhW2NvbE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmF3RGF0YUl0ZW1bY29sTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgcmF3RGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcFR5cGVzIGZvciBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKiBAc3RhdGljXG4gKi9cblJlYWN0R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9KSksXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyUmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydGluZ3M6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DZWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wZXJ0aWVzIG9mIHRoZSBSZWFjdEdyaWQgY2xhc3NcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICovXG5SZWFjdEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnZ3JpZCcsXG4gICAgY29sdW1uczogW10sXG4gICAgb3JkZXJCeTogJycsXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBtdWx0aXNlbGVjdDogZmFsc2UsXG4gICAgb3JkZXJSZXZlcnNlOiBmYWxzZSxcbiAgICBzb3J0aW5nczoge30sXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IG51bGwsXG4gICAgb25DZWxsQ2xpY2s6IG51bGwsXG4gICAgcm93Q2xhc3NOYW1lOiAoKSA9PiAoJycpLFxuICAgIGNlbGxDbGFzc05hbWU6ICgpID0+ICgnJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFJvdyBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSByb3dcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSb3dQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF0gVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gKiBAcHJvcGVydHkgeyp9IGRhdGEgVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gKi9cblxuLyoqXG4gKiBHcmlkIFJvdyBDb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Um93UHJvcHN8R3JpZFJvd30gcHJvcHNcbiAqIEBjbGFzcyBHcmlkUm93XG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIFJvdyBpbiB0aGUgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzIGluc3RhbmNlb2YgR3JpZFJvdykge1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IEdyaWRSb3cuZ2V0TmV4dFJvd0lkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzZWxlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIG5vdCBmaWx0ZXJlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3Nob3dcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHJvdyBpZFxuICpcbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkdyaWRSb3cuZ2V0TmV4dFJvd0lkID0gKCkgPT4gKGAncm93XyR7R3JpZFJvdy5uZXh0Um93SWQrK31gKTtcblxuLyoqXG4gKiBOZXh0IGlkIHJvdyBnZW5lcmF0b3JcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqL1xuR3JpZFJvdy5uZXh0Um93SWQgPSAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkUm93LmpzIiwiLyoqXG4gKiBGb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhIGNlbGwgdmFsdWVcbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGluZ0NhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIENlbGwgdmFsdWVcbiAqIEBwYXJhbSB7R3JpZFJvd30gcm93IFRoZSBlbnRpcmUgcm93XG4gKiBAcmV0dXJuIHtzdHJpbmd8SFRNTEVsZW1lbnR8UmVhY3QuQ29tcG9uZW50fVxuICovXG5cbi8qKlxuICogQ29sdW1uIHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIGNvbHVtblxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbHVtblByb3BzXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Rpc3BsYXlOYW1lXSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbd2lkdGhdIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NsYXNzTmFtZV0gVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge0Zvcm1hdHRpbmdDYWxsYmFja30gW2Zvcm1hdF0gQSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciB0aGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NvcnRhYmxlXSBUcnVlIGlmIHRoZSBjb2x1bW4gaXMgc29ydGFibGVcbiAqL1xuXG4vKipcbiAqIEdyaWQgY29sdW1uIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtDb2x1bW5Qcm9wc30gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbHVtblxuICogQGNsYXNzIEdyaWRDb2x1bW5cbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgY29sdW1uIGluIGEgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2V0V2lkdGggPSAod2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gL14oXFxkKStbcHh8JV0kLztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZS50ZXN0KHdpZHRoLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI25hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Rpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWUgPyBwcm9wcy5kaXNwbGF5TmFtZSA6IHRoaXMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiN3aWR0aFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53aWR0aCA9IHNldFdpZHRoKHByb3BzLndpZHRoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jY2xhc3NOYW1lXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZm9ybWF0XG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbnx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1hdCA9IHByb3BzLmZvcm1hdDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3NvcnRhYmxlXG4gICAgICAgICAqIEB0eXBlIHtib29sfHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBwcm9wcy5zb3J0YWJsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRDb2x1bW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuXG4vKipcbiAqIFRyZWUgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdHJlZVxuICogQGNsYXNzIFRyZWVcbiAqIEBjbGFzc2Rlc2MgVHJlZSBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCB0cmVlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyZWUgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3RyZWVcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWVQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlYWN0VHJlZSBDb21wb25lbnQgd2l0aGluIHRoZSB0cmVlIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy50cmVlID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmVlLCB7IC4uLnRoaXMudHJlZVByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgd2Ugc2hvdyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgZGF0YSBvbiB0aGUgdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSBkYXRhIFRoZSByb290IGl0ZW0gbGlzdCBmb3IgdGhlIHRyZWUgd2l0aCBhbGwgaXRzIGNoaWxkcmVuXG4gICAgICovXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXREYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW0gaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXRTZWxlY3RlZEl0ZW1JZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvbiB0aGUgdHJlZSBiYXNlZCBpbiB0aGUgaXRlbSdzIHBhcmVudElkIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gYWRkXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUudXBkYXRlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaXRlbSBpZCB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBUcmVlSXRlbSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmVlSXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtwYXJlbnRJZD0wXSBUaGUgcGFyZW50IGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IGNoaWxkcmVuIFRoZSBpdGVtJ3MgY2hpbGRyZW5cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBTdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVTdGF0ZVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSByb290IFRoZSByb290IGl0ZW0gY29udGFpbmluZyB0cmVlIHJvb3QgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIGlzIGluIHRoZSBsb2FkaW5nIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBzZWxlY3RlZEl0ZW0gVGhlIGlkIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsYm9vbGVhbj59IGV4cGFuZGVkSWRzIEEgY29sbGVjdGlvbiBvZiB0aGUgaWRzIG9mIGV4cGFuZGVkIGNhdGVnb3JpZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSB0cmVlIGlzIGVuYWJsZWRcbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZVByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPXRyZWVdXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXXxudWxsfSBpbml0aWFsRGF0YVxuICogQHByb3BlcnR5IHtTb3J0Q2FsbGJhY2t8bnVsbH0gc29ydFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBSZWFjdFRyZWUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gcHJvcHNcbiAqIEBjbGFzcyBSZWFjdFRyZWVcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgVHJlZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm9vdDogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0VHJlZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICdkaXNhYmxlZCd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgPHVsPnt0aGlzLnN0YXRlLnJvb3QubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX08L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHRyZWUgaXRlbSBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzW2l0ZW0uaWRdO1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cGFuZFN0YXR1cyA9IGV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb250cmFjdGVkJztcbiAgICAgICAgY29uc3QgaXRlbUV4cGFuZENsYXNzTmFtZSA9IGBleHBhbmQgJHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/IGV4cGFuZFN0YXR1cyA6ICcnfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUV4cGFuZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRDb250cmFjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JtYXQuY2FsbChudWxsLCBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBleHBhbmRlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIHRyZWUgc2hvd3Mgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIG9uIHRoZSB0cmVlIGFuZCByZW1vdmVzIGFsbCBwcmV2aW91cyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc29ydD10cnVlXVxuICAgICAqL1xuICAgIHNldERhdGEocm9vdCwgc29ydCA9IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc29ydFRyZWUgPSAodHJlZSkgPT4ge1xuICAgICAgICAgICAgdHJlZS5mb3JFYWNoKChicmFuY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VHJlZShicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvcnQodHJlZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRUcmVlKHJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIGRhdGEgaW4gYSB0cmVlIGJyYW5jaFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gdHJlZVxuICAgICAqL1xuICAgIHNvcnQodHJlZSkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyZWUuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpZCA/IG51bGwgOiBpZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICBleHBhbmRDb250cmFjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzKTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGVkW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZFtpZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzOiBleHBhbmRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiBSZWFjdFRyZWUgcm9vdCBlbGVtZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRJdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0l0ZW1DbGljaycsIHsgZGV0YWlsOiB7IHNlbGVjdGVkSXRlbSB9IH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGl0ZW1FdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0uaWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5wYXJlbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09ICcwJyB8fCBpdGVtLnBhcmVudElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLmNoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUm9vdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKGZvdW5kSXRlbSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaWQnICYmIGtleSAhPT0gJ3BhcmVudElkJyAmJiBrZXkgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJdGVtW2tleV0gPSBpdGVtW2tleV0gPyBpdGVtW2tleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kSXRlbUJ5SWQoaWQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgICAgIGxldCBicmFuY2g7XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSAwIHx8IGl0ZW0ucGFyZW50SWQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IGNhY2hlUm9vdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhbmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3QsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW4gaXRlbSBpbiB0aGUgdHJlZSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSBpdGVtXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKHRoaXMuc3RhdGUucm9vdCwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGluIGl0ZW0gaW4gYSB0cmVlIGJyYW5jaCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfXJvb3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1JbkJyYW5jaEJ5SWQocm9vdCwgaWQpIHtcbiAgICAgICAgbGV0IHJldCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdFtpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChpdGVtLmNoaWxkcmVuLCBpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGljYXRlcyB0aGUgcm9vdCBvYmplY3QgZm9yIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbVtdfVxuICAgICAqL1xuICAgIHJlcGxpY2F0ZVJvb3QoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQucHVzaCgkLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZS5yb290W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgcHJvcGVydHkgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRyZWUgPSAoaXRlbXMsIGV4cGFuZGVkSWRzKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZElkc1tpdG0uaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kVHJlZShpdG0uY2hpbGRyZW4sIGV4cGFuZGVkSWRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBhbmRlZElkcyA9IHt9O1xuXG4gICAgICAgIGV4cGFuZFRyZWUodGhpcy5zdGF0ZS5yb290LCBleHBhbmRlZElkcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkczoge31cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlYWN0VHJlZSBwcm9wVHlwZXNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBSZWFjdFRyZWUgZGVmYXVsdCBwcm9wc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ3RyZWUnLFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBzb3J0OiBudWxsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRyZWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuXG4vKipcbiAqIEBjbGFzcyBNb2RhbFxuICogQGNsYXNzZGVzYyBJbXBsZW1lbnRzIGEgbW9kYWwgY2xhc3MgYXMgYSBwcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1JlYWN0TW9kYWx8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kYWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5tb2RhbCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TW9kYWwsIHsgLi4udGhpcy5wcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIG1vZGFsIGFzIHByb21pc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWxTdGF0ZX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MgPSBzdWNjZXNzO1xuICAgICAgICAgICAgb3B0aW9ucy5vblJlamVjdCA9IHJlamVjdDtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zZXRTdGF0ZShvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGAkeyh3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoKSAvIDJ9cHhgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBPayBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE9rQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdvaycsXG4gICAgbGFiZWw6ICdPaycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBZZXMgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRZZXNCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ3llcycsXG4gICAgbGFiZWw6ICdZZXMnLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgTm8gYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXROb0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnbm8nLFxuICAgIGxhYmVsOiAnTm8nLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tY2FuY2VsJ1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01vZGFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNb2RhbFN0YXRlXG4gKiBAcHJvcGVydHkge01vZGFsQnV0dG9uW119IGJ1dHRvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNsb3NhYmxlXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uU3VjY2Vzc11cbiAqIEBwcm9wZXJ0eSB7TW9kYWxDbG9zZUNhbGxiYWNrfSBbb25SZWplY3RdXG4gKi9cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbW9kYWwgY2xvc2UgZXZlbnRzXG4gKlxuICogQGNhbGxiYWNrIE1vZGFsQ2xvc2VDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblByZXNzZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxCdXR0b25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBzdWNjZXNzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RNb2RhbFxuICogQGNsYXNzZGVzYyBSZWFjdCBDb21wb25lbnQgZm9yIGEgbW9kYWwgZGlhbG9nXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUmVhY3RNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TW9kYWxTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBbGVydCBtZXNzYWdlJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uIGFjdGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb25TdWNjZXNzKCkge30sXG4gICAgICAgICAgICBvblJlamVjdCgpIHt9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBtb2RhbCAke3RoaXMuc3RhdGUudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICcnfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsb3NhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyl9PiB4IDwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1dHRvbnMubWFwKHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJCdXR0b24oYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtidXR0b24ua2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTW9kYWxCdXR0b25QcmVzc2VkLmJpbmQodGhpcywgYnV0dG9uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vZGFsQ2xvc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlamVjdCgnY2xvc2UtYnV0dG9uJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b259IGJ1dHRvblxuICAgICAqL1xuICAgIG9uTW9kYWxCdXR0b25QcmVzc2VkKGJ1dHRvbiwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uU3VjY2VzcyhidXR0b24ua2V5LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoYnV0dG9uLmtleSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0TW9kYWwuanN4IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRhZ3NEaXNwbGF5IGZyb20gJy4uL2pzeC9SZWFjdFRhZ3NEaXNwbGF5JztcblxuLyoqXG4gKiBUYWdzTWFuYWdlciBDb25zdHJ1Y3RvciAtIExvYWRzIHRoZSB0YWdzIHByZXNlbnQgaW4gdGhlIGZvcm1cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoaWRkZW5GaWVsZHNDb250YWluZXIgLSBUaGUgY29udGFpbmVyIGZvciB0aGUgaGlkZGVuIGZpZWxkc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnc0NvbnRhaW5lciAtIFRoZSBjb250YWluZXIgd2hlcmUgdGhlIHRhZ3Mgd2lsbCBiZSByZW5kZXJlZFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ0ZpZWxkTmFtZVByZWZpeCAtIFRoZSBmaWVsZCBuYW1lIG9mIHRoZSBoaWRkZW4gdGFnIGZpZWxkc1xuICogQHBhcmFtIHtzdHJpbmd9IHRhZ3NUZXh0TGFiZWwgLSBUaGUgZm9yIGF0dHJpYnV0ZSBmb3IgdGhlIHRhZ3MgbGFiZWxcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGh4clJvdXRlQ2FsbGJhY2sgLSBUaGUgcm91dGUgdG8gdGhlIHhociBBUEkgY2FsbCB0byBicmluZyBzdWdnZXN0aW9uc1xuICpcbiAqIEBjbGFzcyBUYWdzTWFuYWdlclxuICogQGNsYXNzZGVzYyBNYW5hZ2VyIGZvciB0YWcgZWRpdGluZyBpbiBwb3N0c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWdzTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoaGlkZGVuRmllbGRzQ29udGFpbmVyLCB0YWdzQ29udGFpbmVyLCB0YWdGaWVsZE5hbWVQcmVmaXgsIHRhZ3NUZXh0TGFiZWwsIHhoclJvdXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtUYWdFbnRpdHlbXX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV4aXN0aW5nIGZvcm0gZmllbGRzXG4gICAgICAgIGNvbnN0IHRhZ0ZpZWxkcyA9ICQuZmluZCgnaW5wdXRbdHlwZT1oaWRkZW5dJyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUYWdJZCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50VGFnID0ge307XG5cbiAgICAgICAgJCh0YWdGaWVsZHMpLmVhY2goKG5keCwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RhZ0ZpZWxkTmFtZVByZWZpeH1cXFxcXyhcXFxcZCspXFxcXF8oaWR8dGV4dCkkYCk7XG4gICAgICAgICAgICBjb25zdCBbbGFiZWwsIHRhZ0lkLCB0YWdGaWVsZF0gPSBmaWVsZC5pZC5tYXRjaCh0YWdSZWdFeHApO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHRhZ0lkKSAhPT0gY3VycmVudFRhZ0lkKSB7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdJZCA9IE51bWJlcih0YWdJZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhZyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFnLnRhZ0lkID0gY3VycmVudFRhZy50YWdJZCA/XG4gICAgICAgICAgICAgICAgYCR7Y3VycmVudFRhZy50YWdJZH18JHtsYWJlbH1gIDpcbiAgICAgICAgICAgICAgICBsYWJlbDtcblxuICAgICAgICAgICAgY3VycmVudFRhZ1t0YWdGaWVsZF0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWcuaWQgJiYgY3VycmVudFRhZy50ZXh0KSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUYWdzRGlzcGxheSwge1xuICAgICAgICAgICAgaGlkZGVuRmllbGRzQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFnc1RleHRMYWJlbCxcbiAgICAgICAgICAgIHhoclJvdXRlQ2FsbGJhY2tcbiAgICAgICAgfSksIHRhZ3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnc1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ0VudGl0eVxuICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHRhZ0lkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnc1N0YXRlXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSB0YWdzXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSBzdWdnZXN0aW9uc1xuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXlcbiAqIEBjbGFzc2Rlc2MgRGlzcGxheSBjbGFzcyBmb3IgdGFnIGVsZW1lbnRzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWdzRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBUYWdzU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0YWdJbmRleCB0byBzZXQgZm9yIHRoZSBuZXcgaGlkZGVuIGVsZW1lbnRzIGluIHRoZSBmb3JtXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ID0gdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAvIDI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgc3VnZ2VzdGlvbnMgYm94IHRpbWVvdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIGZvciB0aGUgcHJldmlvdXMgdmFsdWUgYmVmb3JlIGtleVVwXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5jbGVhclN1Z2dlc3Rpb25zLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHRhZyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFncy5tYXAodGhpcy5yZW5kZXJUYWcuYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuaW5wdXQgPSBpbnB1dDsgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnX3N1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubWFwKHRoaXMucmVuZGVyU3VnZ2VzdGlvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyVGFnKHRhZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e3RhZy50ZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWcudGV4dH0gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZVRhZy5iaW5kKHRoaXMsIHRhZyl9Png8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHRhZyBzdWdnZXN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJTdWdnZXN0aW9uKHRhZykge1xuICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeKC4qKSgke3RoaXMuaW5wdXQudmFsdWV9KSguKikkYCwgJ2knKTtcbiAgICAgICAgY29uc3QgdGFnUGFydHMgPSB0YWcudGV4dC5tYXRjaCh0YWdSZWdFeHApO1xuICAgICAgICBsZXQgaW5uZXJUYWcgPSB0YWcudGV4dDtcblxuICAgICAgICBpZiAodGFnUGFydHMgIT09IG51bGwgJiYgdGFnUGFydHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmVUYWcgPSB0YWdQYXJ0c1sxXTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RleHQgPSB0YWdQYXJ0c1syXTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RUYWcgPSB0YWdQYXJ0c1szXTtcblxuICAgICAgICAgICAgaW5uZXJUYWcgPSAoPHNwYW4+e3ByZVRhZ308c3Ryb25nPnt0YWdUZXh0fTwvc3Ryb25nPntwb3N0VGFnfTwvc3Bhbj4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5uZXJUYWcgPSA8c3Bhbj57dGFnLnRleHR9PC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGtleT17dGFnLnRleHR9IG9uQ2xpY2s9e3RoaXMub25TdWdnZXN0aW9uQ2xpY2suYmluZCh0aGlzLCB0YWcpfT57aW5uZXJUYWd9PC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0YWcgYnkgdGV4dCBvbmx5IChuZXcgdGFnKVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnVGV4dFxuICAgICAqL1xuICAgIGFkZFRhZyh0YWdUZXh0KSB7XG4gICAgICAgIC8vIHRyaW0gYW5kIHJlbW92ZSB0cmFpbGluZyBzZW1pY29sb25zXG4gICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnRyaW0oKTtcblxuICAgICAgICBpZiAodGFnVGV4dC5lbmRzV2l0aCgnLCcpKSB7XG4gICAgICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC5zdWJzdHIoMCwgdGFnVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIGVtcHR5IHRhZ3NcbiAgICAgICAgaWYgKHRhZ1RleHQgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCByZXBlYXRlZCB0YWdzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzW2ldLnRleHQgPT09IHRhZ1RleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cnkgdG8gZ2V0IHRhZyBpZCBmcm9tIHN1Z2dlc3Rpb25zXG4gICAgICAgIGxldCB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbiA9IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9uLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdGFnVGV4dC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9uLmlkO1xuICAgICAgICAgICAgICAgIHRhZ1RleHQgPSBzdWdnZXN0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdGaWVsZFRlbXBsYXRlID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdG90eXBlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX25hbWVfXy9nLCB0aGlzLm5ld1RhZ0luZGV4LnRvU3RyaW5nKDEwKSk7XG5cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCArPSAxO1xuXG4gICAgICAgICQodGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIpLmFwcGVuZChuZXdGaWVsZFRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS52YWx1ZSA9IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLnZhbHVlID0gdGFnVGV4dDtcblxuICAgICAgICBjb25zdCBuZXdUYWdJZHMgPVxuICAgICAgICAgICAgYCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS5pZH18JHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLmlkfWA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICB0YWdJZDogbmV3VGFnSWRzLFxuICAgICAgICAgICAgdGV4dDogdGFnVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFncyxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHRhZyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgcmVtb3ZlVGFnKHRhZywgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybUZpZWxkcyA9IHRhZy50YWdJZC5zcGxpdCgnfCcpO1xuXG4gICAgICAgIGZvcm1GaWVsZHMuZm9yRWFjaCgoZmllbGRJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICAgICAgICAgIGZpZWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmllbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVUYWcgPSB0aGlzLnN0YXRlLnRhZ3NbaV07XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZVRhZy50ZXh0ID09PSB0YWcudGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHN1Z2dlc3Rpb25zIHRpbWVvdXQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBjYWxsIHRvIHN1Z2dlc3Rpb25zIGFuZCB1cGRhdGVzIHRoZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlU3VnZ2VzdGlvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFnUm91dGUgPSB0aGlzLnByb3BzLnhoclJvdXRlQ2FsbGJhY2sodGhpcy5pbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgodGFnUm91dGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFncy5tYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB0YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8ga2V5IHByZXNzZXMgb24gdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIG5lZWQgdG8gbG9vayBhdCB0aGUgdmFsdWUgdGhhdCB3YXMgb24gdGhlIGlucHV0IEJFRk9SRSBvbktleVVwIHVwZGF0ZXMgdGhlXG4gICAgICAgICAqIGlucHV0IHZhbHVlLCBiZWNhdXNlIHdlIG9ubHkgd2FudCB0byBkZWxldGUgdGhlIHByZXZpb3VzIHRhZyBpZiB0aGUgaW5wdXQgV0FTXG4gICAgICAgICAqIGVtcHR5IGJlZm9yZSBwcmVzc2luZyBCYWNrc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnICYmIHRoaXMucHJldklucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5pbnB1dC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpO1xuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHtzcGFuLm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgdGhpcy5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pO1xuXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2V5UHJlc3MgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZ0S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgICAgIHN3aXRjaCAoZXZ0S2V5KSB7XG4gICAgICAgIGNhc2UgKCcsJyk6XG4gICAgICAgIGNhc2UgKCdFbnRlcicpOlxuICAgICAgICAgICAgdGhpcy5hZGRUYWcodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gJzVweCc7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGNsaWNrcyBvbiB0aGUgdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIHN1Z2dlc3RlZCB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25TdWdnZXN0aW9uQ2xpY2sodGFnLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmFkZFRhZyh0YWcudGV4dCk7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1Z2dlc3Rpb25zIG9uIGRvY3VtZW50IGNsaWNrXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xlYXJTdWdnZXN0aW9ucyhldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudFRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09PSAndGFnX3N1Z2dlc3Rpb25zJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuUmVhY3RUYWdzRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gICAgaGlkZGVuRmllbGRzQ29udGFpbmVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihIVE1MRWxlbWVudCkuaXNSZXF1aXJlZCxcbiAgICB0YWdzVGV4dExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHhoclJvdXRlQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblJlYWN0VGFnc0Rpc3BsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhZ3NUZXh0TGFiZWw6ICd0ZXh0J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJpbXBvcnQgR3JpZCBmcm9tICcuLi9lczYvR3JpZCc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9lczYvVHJlZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vZXM2L01vZGFsJztcbmltcG9ydCBUYWdzTWFuYWdlciBmcm9tICcuLi9lczYvVGFnc01hbmFnZXInO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7fTtcbn1cblxud2luZG93LlJlYWN0TGliLkdyaWQgPSBHcmlkO1xud2luZG93LlJlYWN0TGliLk1vZGFsID0gTW9kYWw7XG53aW5kb3cuUmVhY3RMaWIuVHJlZSA9IFRyZWU7XG53aW5kb3cuUmVhY3RMaWIuVGFnc01hbmFnZXIgPSBUYWdzTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wdWJsaWMvUmVhY3RMaWIuanMiXSwic291cmNlUm9vdCI6IiJ9