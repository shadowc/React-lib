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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Grid = __webpack_require__(4);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.Grid = _Grid2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0R3JpZC5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJncmlkIiwiaWQiLCJncmlkUHJvcHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsIm5keCIsImFkZFJvd3MiLCJzZXRSb3dzIiwibGVuZ3RoIiwiZGVsZXRlUm93cyIsInNvcnRCeSIsImdldFNvcnQiLCJnZXRSb3ciLCJnZXRTZWxlY3RlZFJvd3MiLCJnZXRTZWxlY3RlZFJvd0lkcyIsImdldENvbHVtbnMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImdldEJ5SWQiLCJkZWxldGVCeUlkIiwiZGF0YSIsInVwZGF0ZVJvdyIsImNvbE5hbWUiLCJ2YWx1ZSIsInVwZGF0ZUNlbGwiLCJjbGVhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJSZWFjdEdyaWQiLCJjb2xzIiwibWFwIiwiY29sIiwiaW5pdGlhbERhdGEiLCJyb3ciLCJzdGF0ZSIsInJhd0RhdGEiLCJwcmV2U2VsZWN0ZWRSb3ciLCJvcmRlckJ5Iiwib3JkZXJSZXZlcnNlIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsInJlbmRlclJvdyIsImNvbHVtbiIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiZ2VuZXJhdGVIZWFkZXJDbGljayIsImRpc3BsYXlOYW1lIiwicm93Q2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGVhZGVyRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInJvb3RFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BhdGNoRXZlbnQiLCJvbkNvbHVtbkhlYWRlckNsaWNrIiwiaSIsInJvd05keCIsImdldFJvd05keCIsInVwZGF0ZUxhc3RSb3ciLCJzZWxlY3RPbmVSb3ciLCJjdXJSb3ciLCJmb3JFYWNoIiwiaW5uZXJSb3ciLCJzZWxlY3RSb3dSYW5nZSIsInNldEZyb20iLCJNYXRoIiwibWluIiwic2V0VG8iLCJtYXgiLCJzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZSIsInNlbGVjdGFibGUiLCJzaGlmdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwibXVsdGlzZWxlY3QiLCJzZXRTdGF0ZSIsImNlbGxFdmVudCIsImNlbGwiLCJvbkNlbGxDbGljayIsImdyaWRSb3dzIiwicmF3RGF0YVJvd3MiLCJleHRlbmQiLCJuZXdSb3dzIiwic2xpY2UiLCJuZXdEYXRhIiwicmV0IiwicHVzaCIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwicmF3RGF0YUl0ZW0iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheU9mIiwic2hhcGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsInNvcnRhYmxlIiwiYm9vbCIsIm9iamVjdCIsIm9iamVjdE9mIiwiZGVmYXVsdFByb3BzIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBOzs7Ozs7O0lBT3FCQSxJO0FBQ2pCLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2Y7Ozs7Ozs7QUFPQSxTQUFLQyxJQUFMLEdBQVksSUFBWjs7QUFFQTs7Ozs7O0FBTUEsU0FBS0MsRUFBTCxHQUFVRixNQUFNRSxFQUFoQjs7QUFFQTs7Ozs7O0FBTUEsU0FBS0MsU0FBTCxHQUFpQkgsS0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7MkJBT09JLFMsRUFBVztBQUNkLFdBQUtILElBQUwsR0FBWSxtQkFBU0ksTUFBVCxDQUFnQixnQkFBTUMsYUFBTixtQ0FBb0MsS0FBS0gsU0FBekMsRUFBaEIsRUFBdUVDLFNB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LFdBQUwsR0FBbUIxRCxNQUFNMEQsV0FBTixHQUFvQjFELE1BQU0wRCxXQUExQixHQUF3QyxLQUFLRixJQUFoRTs7QUFFQTs7Ozs7O0FBTUEsT0FBS0QsS0FBTCxHQUFha0YsU0FBU3pJLE1BQU11RCxLQUFmLENBQWI7O0FBRUE7Ozs7OztBQU1BLE9BQUtQLFNBQUwsR0FBaUJoRCxNQUFNZ0QsU0FBTixHQUFrQmhELE1BQU1nRCxTQUF4QixHQUFvQyxFQUFyRDs7QUFFQTs7Ozs7O0FBTUEsT0FBS29CLE1BQUwsR0FBY3BFLE1BQU1vRSxNQUFwQjs7QUFFQTs7Ozs7O0FBTUEsT0FBSzRELFFBQUwsR0FBZ0JoSSxNQUFNZ0ksUUFBdEI7QUFDSCxDOztrQkE3RGdCUSxVOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JyQjs7Ozs7O0FBRUEsSUFBSSxPQUFPSSxPQUFPQyxRQUFkLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDRCxXQUFPQyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0g7O0FBRURELE9BQU9DLFFBQVAsQ0FBZ0I5SSxJQUFoQixrQiIsImZpbGUiOiJSZWFjdEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTg2ZWMwOTcyOWVkYjRhNzgzOTYiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBhIHNvcnQgc3RhdGVcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTb3J0VHlwZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiB3ZSdyZSBvcmRlcmluZyBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBpZiB0aGUgb3JkZXIgaXMgcmV2ZXJzZWRcbiAqL1xuXG4vKipcbiAqIEdyaWQgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIGdyaWRcbiAqIEBjbGFzcyBHcmlkXG4gKiBAY2xhc3NkZXNjIEdyaWQgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggZ3JpZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBncmlkIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNncmlkXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdEdyaWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjcHJvcHNcbiAgICAgICAgICogQHR5cGUge0dyaWRQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZFByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgR3JpZCBDb21wb25lbnQgd2l0aGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmdyaWQgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEdyaWQsIHsgLi4udGhpcy5ncmlkUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmFkZFJvd3Mocm93cywgbmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBzZXRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFJvd3Mocm93cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVSb3dzKG5keCwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLmdyaWQuc29ydEJ5KHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U29ydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Um93KG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93SWRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29sdW1uIGNvbGxlY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zIGR5bmFtaWNhbGx5XG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnNldENvbHVtbnMoY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZVJvdyhpZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi4vZXM2L0dyaWRSb3cnO1xuaW1wb3J0IEdyaWRDb2x1bW4gZnJvbSAnLi4vZXM2L0dyaWRDb2x1bW4nO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkU3RhdGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IHJhd0RhdGEgVGhlIHJhdyBkYXRhIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRDb2x1bW5bXX0gY29sdW1ucyBUaGUgY29sdW1ucyBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkUm93W119IHJvd3MgVGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmV2U2VsZWN0ZWRSb3cgVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93XG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdG8gb3JkZXIgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgb2YgdGhlIG9yZGVyIHNob3VsZCBiZSByZXZlcnNlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgc2hvd3MgYSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBncmlkIGlzIGludGVyYWN0aXZlXG4gKi9cblxuLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIGNhbGxiYWNrLCBzaG91bGQgcmV0dXJuIC0xIGlmIGEgaXMgbG93ZXIgdGhhbiBiLFxuICogMCBpZiByb3dzIGFyZSBlcXVhbCBhbmQgMSBpZiBhIGlzIGdyZWF0ZXIgdGhhbiBiXG4gKlxuICogQGNhbGxiYWNrIFNvcnRDYWxsYmFja1xuICogQHBhcmFtIHtHcmlkUm93fSBhIFJvdyBhXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGIgUm93IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIENsYXNzTmFtZSBjYWxsYmFjaywgYSBmdW5jdGlvbiB0byByZXR1cm4gYSBjbGFzc05hbWUgKHN0cmluZylcbiAqIGJhc2VkIG9uIHJvdy9jb2x1bW4gaW5mb3JtYXRpb25cbiAqXG4gKiBAY2FsbGJhY2sgY2xhc3NOYW1lQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcm93IFRoZSByb3cgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2x1bW5dIFRoZSBjb2x1bW4gd2UncmUgcmVuZGVyaW5nIChmb3IgY2VsbCBjbGFzc05hbWVzKVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD1ncmlkXSBUaGUgaWQgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Q29sdW1uUHJvcHNbXX0gY29sdW1ucyBUaGUgY29sdW1ucyBkZWZpbml0aW9uIGZvciB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtSb3dQcm9wc1tdfSBpbml0aWFsRGF0YSBUaGUgaW5pdGlhbCBkYXRhIHRvIHBvcHVsYXRlIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdGhhdCB3ZSdyZSBzb3J0aW5nIGZvclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3JkZXJSZXZlcnNlPWZhbHNlXSBUcnVlIGlmIHdlJ3JlIGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsU29ydENhbGxiYWNrPn0gW3NvcnRpbmdzXSBBIHNldCBvZiBzb3J0aW5nIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW3Jvd0NsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIHJvd1xuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtjZWxsQ2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgY2VsbFxuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIGZvciBlYWNoIHNvcnRhYmxlIGNvbHVtblxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0YWJsZT10cnVlXSBUcnVlIGlmIHRoZSBncmlkIGlzIHNlbGVjdGFibGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW211bHRpc2VsZWN0PWZhbHNlXSBUcnVlIGlmIHdlIHdpbGwgZW5hYmxlIG11bHRpc2VsZWN0IGluIHRoZSBncmlkXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHJlYWN0IGdyaWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IHByb3BzIFJlYWN0IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RHcmlkXG4gKiBAY2xhc3NkZXNjIFJlYWN0IEdyaWQgQ29tcG9uZW50IGNsYXNzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpO1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5pbml0aWFsRGF0YS5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGZvciB0aGUgZ3JpZCBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgUmVhY3RHcmlkI3N0YXRlXG4gICAgICAgICAqIEB0eXBlIHtHcmlkU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHMsXG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiAtMSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMucHJvcHMub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5wcm9wcy5vcmRlclJldmVyc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcm93cyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNvcnRSb3dzKCkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnRpbmdzW3RoaXMuc3RhdGUub3JkZXJCeV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoc29ydEZuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0YWJsZS13cmFwcGVyJHt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICcgZGlzYWJsZWQnfWA7XG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+e3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzKSl9PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MubWFwKHRoaXMucmVuZGVyUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBjb2x1bW4gaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ29sdW1uKGNvbHVtbikge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbHVtbi53aWR0aCB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUhlYWRlckNsaWNrLmJpbmQodGhpcywgY29sdW1uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcm93IGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclJvdyhyb3cpIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocm93LmRhdGEpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtyb3dDbGFzc05hbWV9ICR7cm93LnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5OiByb3cuc2hvdyA/ICd0YWJsZS1yb3cnIDogJ25vbmUnIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ2VsbC5iaW5kKHRoaXMsIHJvdykpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIGNlbGwgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2xcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDZWxsKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZShyb3cuZGF0YSwgY29sKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2wud2lkdGggfTtcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IChyb3cuZGF0YVtjb2wubmFtZV0gPyByb3cuZGF0YVtjb2wubmFtZV0udG9TdHJpbmcoKSA6ICcnKTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0eXBlb2YgY29sLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBjb2wuZm9ybWF0LmNhbGwodGhpcywgcm93LmRhdGFbY29sLm5hbWVdLCByb3cpIDpcbiAgICAgICAgICAgIHJvd0RhdGE7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93LmlkfSAke2NvbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVDZWxsQ2xpY2suYmluZCh0aGlzLCByb3csIGNvbC5uYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwsIGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIHRoZSBncmlkIGhlYWRlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSGVhZGVyQ2xpY2soY29sdW1uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0hlYWRlckNsaWNrJywgeyBkZXRhaWw6IGNvbHVtbiB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChoZWFkZXJFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2soY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbnVtZXJpYyBpbmRleCBmb3IgYSBnaXZlbiByb3cgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSb3dOZHgocm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gYSBjZWxsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNlbGxDbGljayhyb3csIGNvbE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dOZHggPSB0aGlzLmdldFJvd05keChyb3cpO1xuICAgICAgICBsZXQgdXBkYXRlTGFzdFJvdyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9uZVJvdyA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gIWN1clJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2UgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldEZyb20gPSBNYXRoLm1pbihyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRUbyA9IE1hdGgubWF4KHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzZXRGcm9tOyBpIDw9IHNldFRvOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKGN1clJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvd05keCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25lUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUocm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2Uocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogdXBkYXRlTGFzdFJvdyA/IHJvd05keCA6IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93LFxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnQ2VsbENsaWNrJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IGNvbE5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChjZWxsRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2socm93LCBjb2xOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5keCkge1xuICAgICAgICAgICAgbmR4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4uZ3JpZFJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnJhd0RhdGFSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogZ3JpZFJvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiByYXdEYXRhUm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnN0YXRlLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICBpZiAobmR4IDwgMCB8fCBuZHggPj0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW25keF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuc3RhdGUucm93c1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUm93cyhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBuZXcgR3JpZFJvdygkLmV4dGVuZCh0cnVlLCByb3dJdGVtLmRhdGEsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSYXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHJhd0RhdGEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zcGxpY2UoaSwgMSwgbmV3Um93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhd0RhdGEuc3BsaWNlKGksIDEsIG5ld1Jhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhSXRlbSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcm93SXRlbS5kYXRhW2NvbE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmF3RGF0YUl0ZW1bY29sTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgcmF3RGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcFR5cGVzIGZvciBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKiBAc3RhdGljXG4gKi9cblJlYWN0R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9KSksXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyUmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydGluZ3M6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DZWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wZXJ0aWVzIG9mIHRoZSBSZWFjdEdyaWQgY2xhc3NcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICovXG5SZWFjdEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnZ3JpZCcsXG4gICAgY29sdW1uczogW10sXG4gICAgb3JkZXJCeTogJycsXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBtdWx0aXNlbGVjdDogZmFsc2UsXG4gICAgb3JkZXJSZXZlcnNlOiBmYWxzZSxcbiAgICBzb3J0aW5nczoge30sXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IG51bGwsXG4gICAgb25DZWxsQ2xpY2s6IG51bGwsXG4gICAgcm93Q2xhc3NOYW1lOiAoKSA9PiAoJycpLFxuICAgIGNlbGxDbGFzc05hbWU6ICgpID0+ICgnJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFJvdyBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSByb3dcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSb3dQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF0gVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gKiBAcHJvcGVydHkgeyp9IGRhdGEgVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gKi9cblxuLyoqXG4gKiBHcmlkIFJvdyBDb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Um93UHJvcHN8R3JpZFJvd30gcHJvcHNcbiAqIEBjbGFzcyBHcmlkUm93XG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIFJvdyBpbiB0aGUgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzIGluc3RhbmNlb2YgR3JpZFJvdykge1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IEdyaWRSb3cuZ2V0TmV4dFJvd0lkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzZWxlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIG5vdCBmaWx0ZXJlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3Nob3dcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHJvdyBpZFxuICpcbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkdyaWRSb3cuZ2V0TmV4dFJvd0lkID0gKCkgPT4gKGAncm93XyR7R3JpZFJvdy5uZXh0Um93SWQrK31gKTtcblxuLyoqXG4gKiBOZXh0IGlkIHJvdyBnZW5lcmF0b3JcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqL1xuR3JpZFJvdy5uZXh0Um93SWQgPSAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkUm93LmpzIiwiLyoqXG4gKiBGb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhIGNlbGwgdmFsdWVcbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGluZ0NhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIENlbGwgdmFsdWVcbiAqIEBwYXJhbSB7R3JpZFJvd30gcm93IFRoZSBlbnRpcmUgcm93XG4gKiBAcmV0dXJuIHtzdHJpbmd8SFRNTEVsZW1lbnR8UmVhY3QuQ29tcG9uZW50fVxuICovXG5cbi8qKlxuICogQ29sdW1uIHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIGNvbHVtblxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbHVtblByb3BzXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Rpc3BsYXlOYW1lXSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbd2lkdGhdIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NsYXNzTmFtZV0gVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge0Zvcm1hdHRpbmdDYWxsYmFja30gW2Zvcm1hdF0gQSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciB0aGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NvcnRhYmxlXSBUcnVlIGlmIHRoZSBjb2x1bW4gaXMgc29ydGFibGVcbiAqL1xuXG4vKipcbiAqIEdyaWQgY29sdW1uIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtDb2x1bW5Qcm9wc30gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbHVtblxuICogQGNsYXNzIEdyaWRDb2x1bW5cbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgY29sdW1uIGluIGEgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2V0V2lkdGggPSAod2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gL14oXFxkKStbcHh8JV0kLztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZS50ZXN0KHdpZHRoLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI25hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Rpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWUgPyBwcm9wcy5kaXNwbGF5TmFtZSA6IHRoaXMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiN3aWR0aFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53aWR0aCA9IHNldFdpZHRoKHByb3BzLndpZHRoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jY2xhc3NOYW1lXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZm9ybWF0XG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbnx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1hdCA9IHByb3BzLmZvcm1hdDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3NvcnRhYmxlXG4gICAgICAgICAqIEB0eXBlIHtib29sfHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBwcm9wcy5zb3J0YWJsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRDb2x1bW4uanMiLCJpbXBvcnQgR3JpZCBmcm9tICcuLi9lczYvR3JpZCc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuR3JpZCA9IEdyaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0R3JpZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=