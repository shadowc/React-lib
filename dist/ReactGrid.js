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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTVmMDcyNjc4OTI5YjA5NGM2ZGYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0R3JpZC5qcyJdLCJuYW1lcyI6WyJHcmlkIiwicHJvcHMiLCJncmlkIiwiaWQiLCJncmlkUHJvcHMiLCJjb250YWluZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwicm93cyIsIm5keCIsImFkZFJvd3MiLCJzZXRSb3dzIiwibGVuZ3RoIiwiZGVsZXRlUm93cyIsInNvcnRCeSIsImdldFNvcnQiLCJnZXRSb3ciLCJnZXRTZWxlY3RlZFJvd3MiLCJnZXRTZWxlY3RlZFJvd0lkcyIsImdldENvbHVtbnMiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImdldEJ5SWQiLCJkZWxldGVCeUlkIiwiZGF0YSIsInVwZGF0ZVJvdyIsImNvbE5hbWUiLCJ2YWx1ZSIsInVwZGF0ZUNlbGwiLCJjbGVhciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZW5hYmxlZCIsInNldEVuYWJsZWQiLCJSZWFjdEdyaWQiLCJjb2xzIiwibWFwIiwiY29sIiwiaW5pdGlhbERhdGEiLCJyb3ciLCJzdGF0ZSIsInJhd0RhdGEiLCJwcmV2U2VsZWN0ZWRSb3ciLCJvcmRlckJ5Iiwib3JkZXJSZXZlcnNlIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsInJlbmRlclJvdyIsImNvbHVtbiIsInN0eWxlIiwid2lkdGgiLCJuYW1lIiwiZ2VuZXJhdGVIZWFkZXJDbGljayIsImRpc3BsYXlOYW1lIiwicm93Q2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwidG9TdHJpbmciLCJnZW5lcmF0ZUNlbGxDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoZWFkZXJFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicm9vdEVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGF0Y2hFdmVudCIsIm9uQ29sdW1uSGVhZGVyQ2xpY2siLCJpIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm11bHRpc2VsZWN0Iiwic2V0U3RhdGUiLCJjZWxsRXZlbnQiLCJjZWxsIiwib25DZWxsQ2xpY2siLCJncmlkUm93cyIsInJhd0RhdGFSb3dzIiwiZXh0ZW5kIiwibmV3Um93cyIsInNsaWNlIiwibmV3RGF0YSIsInJldCIsInB1c2giLCJyb3dJdGVtIiwibmV3Um93IiwibmV3UmF3RGF0YSIsInNwbGljZSIsInJhd0RhdGFJdGVtIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYXJyYXlPZiIsInNoYXBlIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJzb3J0YWJsZSIsImJvb2wiLCJvYmplY3QiLCJvYmplY3RPZiIsImRlZmF1bHRQcm9wcyIsIkdyaWRSb3ciLCJnZXROZXh0Um93SWQiLCJuZXh0Um93SWQiLCJHcmlkQ29sdW1uIiwic2V0V2lkdGgiLCJ2YWxpZGF0ZSIsInRlc3QiLCJ3aW5kb3ciLCJSZWFjdExpYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7QUNBQSx3Qjs7Ozs7O0FDQUEsMEI7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQTs7Ozs7OztJQU9xQkEsSTtBQUNqQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNmOzs7Ozs7O0FBT0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7O0FBRUE7Ozs7OztBQU1BLFNBQUtDLEVBQUwsR0FBVUYsTUFBTUUsRUFBaEI7O0FBRUE7Ozs7OztBQU1BLFNBQUtDLFNBQUwsR0FBaUJILEtBQWpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OzJCQU9PSSxTLEVBQVc7QUFDZCxXQUFLSCxJQUFMLEdBQVksbUJBQVNJLE1BQVQsQ0FBZ0IsZ0JBQU1DLGFBQU4sbUNBQW9DLEtBQUtILFNBQXpDLEVBQWhCLEVBQXVFQyxTQUF2RSxDQUFaO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OzRCQVFRRyxJLEVBQU1DLEcsRUFBSztBQUNmLFdBQUtQLElBQUwsQ0FBVVEsT0FBVixDQUFrQkYsSUFBbEIsRUFBd0JDLEdBQXhCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT1FELEksRUFBTTtBQUNWLFdBQUtOLElBQUwsQ0FBVVMsT0FBVixDQUFrQkgsSUFBbEI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7K0JBUVdDLEcsRUFBS0csTSxFQUFRO0FBQ3BCLFdBQUtWLElBQUwsQ0FBVVcsVUFBVixDQUFxQkosR0FBckIsRUFBMEJHLE1BQTFCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7MkJBT09FLE8sRUFBUTtBQUNYLFdBQUtaLElBQUwsQ0FBVVksTUFBVixDQUFpQkEsT0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs4QkFPVTtBQUNOLGFBQU8sS0FBS1osSUFBTCxDQUFVYSxPQUFWLEVBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7MkJBUU9OLEcsRUFBSztBQUNSLGFBQU8sS0FBS1AsSUFBTCxDQUFVYyxNQUFWLENBQWlCUCxHQUFqQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7c0NBT2tCO0FBQ2QsYUFBTyxLQUFLUCxJQUFMLENBQVVlLGVBQVYsRUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7O3dDQU9vQjtBQUNoQixhQUFPLEtBQUtmLElBQUwsQ0FBVWdCLGlCQUFWLEVBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7O2lDQU1hO0FBQ1QsYUFBTyxLQUFLaEIsSUFBTCxDQUFVaUIsVUFBVixFQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzsrQkFNV0MsTyxFQUFTO0FBQ2hCLGFBQU8sS0FBS2xCLElBQUwsQ0FBVW1CLFVBQVYsQ0FBcUJELE9BQXJCLENBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7NEJBUVFqQixFLEVBQUk7QUFDUixhQUFPLEtBQUtELElBQUwsQ0FBVW9CLE9BQVYsQ0FBa0JuQixFQUFsQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dBLEUsRUFBSTtBQUNYLFdBQUtELElBQUwsQ0FBVXFCLFVBQVYsQ0FBcUJwQixFQUFyQjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs4QkFRVUEsRSxFQUFJcUIsSSxFQUFNO0FBQ2hCLFdBQUt0QixJQUFMLENBQVV1QixTQUFWLENBQW9CdEIsRUFBcEIsRUFBd0JxQixJQUF4QjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7K0JBU1dyQixFLEVBQUl1QixPLEVBQVNDLEssRUFBTztBQUMzQixXQUFLekIsSUFBTCxDQUFVMEIsVUFBVixDQUFxQnpCLEVBQXJCLEVBQXlCdUIsT0FBekIsRUFBa0NDLEtBQWxDO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs0QkFNUTtBQUNKLFdBQUt6QixJQUFMLENBQVUyQixLQUFWO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dDLE8sRUFBUztBQUNoQixXQUFLNUIsSUFBTCxDQUFVNkIsVUFBVixDQUFxQkQsT0FBckI7QUFDSDs7QUFFRDs7Ozs7Ozs7OzsrQkFPV0UsTyxFQUFTO0FBQ2hCLFdBQUs5QixJQUFMLENBQVUrQixVQUFWLENBQXFCRCxPQUFyQjtBQUNIOzs7Ozs7a0JBcE9nQmhDLEk7Ozs7Ozs7Ozs7Ozs7OztBQ25CckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7Ozs7Ozs7O0lBUXFCa0MsUzs7O0FBQ2pCLHVCQUFZakMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUdmLFlBQU1rQyxPQUFPLE1BQUtsQyxLQUFMLENBQVdtQixPQUFYLENBQW1CZ0IsR0FBbkIsQ0FBdUI7QUFBQSxtQkFBTyx5QkFBZUMsR0FBZixDQUFQO0FBQUEsU0FBdkIsQ0FBYjtBQUNBLFlBQU03QixPQUFPLE1BQUtQLEtBQUwsQ0FBV3FDLFdBQVgsQ0FBdUJGLEdBQXZCLENBQTJCO0FBQUEsbUJBQU8sc0JBQVlHLEdBQVosQ0FBUDtBQUFBLFNBQTNCLENBQWI7O0FBRUE7Ozs7OztBQU1BLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUyxNQUFLeEMsS0FBTCxDQUFXcUMsV0FEWDtBQUVUbEIscUJBQVNlLElBRkE7QUFHVDNCLHNCQUhTO0FBSVRrQyw2QkFBaUIsQ0FBQyxDQUpUO0FBS1RDLHFCQUFTLE1BQUsxQyxLQUFMLENBQVcwQyxPQUxYO0FBTVRDLDBCQUFjLE1BQUszQyxLQUFMLENBQVcyQyxZQU5oQjtBQU9UZCxxQkFBUyxLQVBBO0FBUVRFLHFCQUFTO0FBUkEsU0FBYjtBQVplO0FBc0JsQjs7QUFFRDs7Ozs7Ozs7OzttQ0FNVztBQUNQLGdCQUFNYSxTQUFTLEtBQUs1QyxLQUFMLENBQVc2QyxRQUFYLENBQW9CLEtBQUtOLEtBQUwsQ0FBV0csT0FBL0IsQ0FBZjs7QUFFQSxnQkFBSSxPQUFRRSxNQUFSLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDLHFCQUFLTCxLQUFMLENBQVdoQyxJQUFYLENBQWdCdUMsSUFBaEIsQ0FBcUJGLE1BQXJCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS0wsS0FBTCxDQUFXSSxZQUFmLEVBQTZCO0FBQ3pCLHFCQUFLSixLQUFMLENBQVdoQyxJQUFYLENBQWdCd0MsT0FBaEI7QUFDSDtBQUNKOztBQUVEOzs7Ozs7Ozs7O2lDQU9TO0FBQ0wsZ0JBQU1DLCtCQUE0QixLQUFLVCxLQUFMLENBQVdSLE9BQVgsR0FBcUIsRUFBckIsR0FBMEIsV0FBdEQsQ0FBTjtBQUNBLGlCQUFLa0IsUUFBTDtBQUNBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXRCxTQUFoQixFQUEyQixJQUFJLEtBQUtoRCxLQUFMLENBQVdFLEVBQTFDO0FBQ0k7QUFBQTtBQUFBLHNCQUFPLFdBQVUsY0FBakI7QUFDSTtBQUFBO0FBQUE7QUFBTztBQUFBO0FBQUE7QUFBSyxpQ0FBS3FDLEtBQUwsQ0FBV3BCLE9BQVgsQ0FBbUJnQixHQUFuQixDQUF1QixLQUFLZSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF2QjtBQUFMO0FBQVA7QUFESixpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ00sNkJBQUtaLEtBQUwsQ0FBV1YsT0FBWCxHQUNFO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQ0FBSSxTQUFTLEtBQUtVLEtBQUwsQ0FBV3BCLE9BQVgsQ0FBbUJSLE1BQWhDO0FBQ0k7QUFBQTtBQUFBLHNDQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBO0FBREo7QUFESix5QkFERixHQU1FLEtBQUs0QixLQUFMLENBQVdoQyxJQUFYLENBQWdCNEIsR0FBaEIsQ0FBb0IsS0FBS2lCLFNBQUwsQ0FBZUQsSUFBZixDQUFvQixJQUFwQixDQUFwQjtBQVBSO0FBREo7QUFKSixhQURKO0FBbUJIOztBQUVEOzs7Ozs7Ozs7Ozs7cUNBU2FFLE0sRUFBUTtBQUNqQixnQkFBTUMsUUFBUSxFQUFFQyxPQUFPRixPQUFPRSxLQUFoQixFQUFkOztBQUVBLG1CQUNJO0FBQUE7QUFBQTtBQUNJLHlCQUFLRixPQUFPRyxJQURoQjtBQUVJLCtCQUFXSCxPQUFPTCxTQUZ0QjtBQUdJLDJCQUFPTSxLQUhYO0FBSUksNkJBQVMsS0FBS0csbUJBQUwsQ0FBeUJOLElBQXpCLENBQThCLElBQTlCLEVBQW9DRSxNQUFwQztBQUpiO0FBTUtBLHVCQUFPSztBQU5aLGFBREo7QUFVSDs7QUFFRDs7Ozs7Ozs7Ozs7O2tDQVNVcEIsRyxFQUFLO0FBQ1gsZ0JBQU1xQixlQUFlLEtBQUszRCxLQUFMLENBQVcyRCxZQUFYLENBQXdCckIsSUFBSWYsSUFBNUIsQ0FBckI7QUFDQSxnQkFBTXlCLFlBQWVXLFlBQWYsVUFBK0JyQixJQUFJc0IsUUFBSixHQUFlLFVBQWYsR0FBNEIsRUFBM0QsQ0FBTjtBQUNBLGdCQUFNTixRQUFRLEVBQUVPLFNBQVN2QixJQUFJd0IsSUFBSixHQUFXLFdBQVgsR0FBeUIsTUFBcEMsRUFBZDs7QUFFQSxtQkFDSTtBQUFBO0FBQUE7QUFDSSx5QkFBS3hCLElBQUlwQyxFQURiO0FBRUksd0JBQUlvQyxJQUFJcEMsRUFGWjtBQUdJLCtCQUFXOEMsU0FIZjtBQUlJLDJCQUFPTTtBQUpYO0FBTUsscUJBQUtmLEtBQUwsQ0FBV3BCLE9BQVgsQ0FBbUJnQixHQUFuQixDQUF1QixLQUFLNEIsVUFBTCxDQUFnQlosSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJiLEdBQTNCLENBQXZCO0FBTkwsYUFESjtBQVVIOztBQUVEOzs7Ozs7Ozs7Ozs7O21DQVVXQSxHLEVBQUtGLEcsRUFBSztBQUNqQixnQkFBTVksWUFBWSxLQUFLaEQsS0FBTCxDQUFXZ0UsYUFBWCxDQUF5QjFCLElBQUlmLElBQTdCLEVBQW1DYSxHQUFuQyxDQUFsQjtBQUNBLGdCQUFNa0IsUUFBUSxFQUFFQyxPQUFPbkIsSUFBSW1CLEtBQWIsRUFBZDtBQUNBLGdCQUFNVSxXQUFXLE9BQU83QixJQUFJOEIsTUFBWCxLQUFzQixVQUF0QixHQUNiOUIsSUFBSThCLE1BQUosQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixFQUFzQjdCLElBQUlmLElBQUosQ0FBU2EsSUFBSW9CLElBQWIsQ0FBdEIsRUFBMENsQixHQUExQyxDQURhLEdBRWJBLElBQUlmLElBQUosQ0FBU2EsSUFBSW9CLElBQWIsRUFBbUJZLFFBQW5CLEVBRko7O0FBSUEsbUJBQ0k7QUFBQTtBQUFBO0FBQ0kseUJBQVE5QixJQUFJcEMsRUFBWixTQUFrQmtDLElBQUlvQixJQUQxQjtBQUVJLDJCQUFPRixLQUZYO0FBR0ksK0JBQVdOLFNBSGY7QUFJSSw2QkFBUyxLQUFLcUIsaUJBQUwsQ0FBdUJsQixJQUF2QixDQUE0QixJQUE1QixFQUFrQ2IsR0FBbEMsRUFBdUNGLElBQUlvQixJQUEzQztBQUpiO0FBTUssdUJBQU9TLFFBQVAsS0FBb0IsUUFBcEIsR0FDR0EsUUFESCxHQUVHLGdCQUFNM0QsYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUE1QixFQUFrQzJELFFBQWxDO0FBUlIsYUFESjtBQWFIOztBQUVEOzs7Ozs7Ozs7Ozs7NENBU29CWixNLEVBQVFpQixLLEVBQU87QUFDL0JBLGtCQUFNQyxjQUFOO0FBQ0FELGtCQUFNRSxlQUFOOztBQUVBLGdCQUFJLENBQUMsS0FBS2pDLEtBQUwsQ0FBV1IsT0FBaEIsRUFBeUI7QUFDckIsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFNMEMsY0FBYyxJQUFJQyxXQUFKLENBQWdCLGFBQWhCLEVBQStCLEVBQUVDLFFBQVF0QixNQUFWLEVBQS9CLENBQXBCOztBQUVBLGdCQUFNdUIsV0FBV0MsU0FBU0MsY0FBVCxDQUF3QixLQUFLOUUsS0FBTCxDQUFXRSxFQUFuQyxDQUFqQjs7QUFFQSxnQkFBSTBFLFFBQUosRUFBYztBQUNWQSx5QkFBU0csYUFBVCxDQUF1Qk4sV0FBdkI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLekUsS0FBTCxDQUFXZ0YsbUJBQWYsRUFBb0M7QUFDaEMscUJBQUtoRixLQUFMLENBQVdnRixtQkFBWCxDQUErQjNCLE1BQS9CO0FBQ0g7O0FBRUQsbUJBQU8sS0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7a0NBU1VmLEcsRUFBSztBQUNYLGlCQUFLLElBQUkyQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzFDLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JJLE1BQXBDLEVBQTRDc0UsR0FBNUMsRUFBaUQ7QUFDN0Msb0JBQUksS0FBSzFDLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0IwRSxDQUFoQixFQUFtQi9FLEVBQW5CLEtBQTBCb0MsSUFBSXBDLEVBQWxDLEVBQXNDO0FBQ2xDLDJCQUFPK0UsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sQ0FBQyxDQUFSO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7MENBVWtCM0MsRyxFQUFLYixPLEVBQVM2QyxLLEVBQU87QUFBQTs7QUFDbkNBLGtCQUFNQyxjQUFOO0FBQ0FELGtCQUFNRSxlQUFOOztBQUVBLGdCQUFJLENBQUMsS0FBS2pDLEtBQUwsQ0FBV1IsT0FBaEIsRUFBeUI7QUFDckIsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFNbUQsU0FBUyxLQUFLQyxTQUFMLENBQWU3QyxHQUFmLENBQWY7QUFDQSxnQkFBSThDLGdCQUFnQixLQUFwQjs7QUFFQSxnQkFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUM3QixvQkFBTTFCLFdBQVcsQ0FBQzBCLE9BQU8xQixRQUF6QjtBQUNBLHVCQUFLckIsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQmdGLE9BQWhCLENBQXdCLFVBQUNDLFFBQUQsRUFBYztBQUNsQ0EsNkJBQVM1QixRQUFULEdBQW9CLEtBQXBCO0FBQ0gsaUJBRkQ7O0FBSUEwQix1QkFBTzFCLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0gsYUFQRDs7QUFTQSxnQkFBTTZCLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0gsTUFBRCxFQUFZO0FBQy9CLG9CQUFJLE9BQUsvQyxLQUFMLENBQVdFLGVBQVgsR0FBNkIsQ0FBQyxDQUFsQyxFQUFxQztBQUNqQyx3QkFBTWlELFVBQVVDLEtBQUtDLEdBQUwsQ0FBU1YsTUFBVCxFQUFpQixPQUFLM0MsS0FBTCxDQUFXRSxlQUE1QixDQUFoQjtBQUNBLHdCQUFNb0QsUUFBUUYsS0FBS0csR0FBTCxDQUFTWixNQUFULEVBQWlCLE9BQUszQyxLQUFMLENBQVdFLGVBQTVCLENBQWQ7QUFDQSx5QkFBSyxJQUFJd0MsSUFBSVMsT0FBYixFQUFzQlQsS0FBS1ksS0FBM0IsRUFBa0NaLEdBQWxDLEVBQXVDO0FBQ25DSywrQkFBTzFCLFFBQVAsR0FBa0IsSUFBbEI7QUFDSDtBQUNKO0FBQ0osYUFSRDs7QUFVQSxnQkFBTW1DLDBCQUEwQixTQUExQkEsdUJBQTBCLENBQUNULE1BQUQsRUFBWTtBQUN4Qyx1QkFBSy9DLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JnRixPQUFoQixDQUF3QixVQUFDQyxRQUFELEVBQWM7QUFDbENBLDZCQUFTNUIsUUFBVCxHQUFvQixLQUFwQjtBQUNILGlCQUZEOztBQUlBNkIsK0JBQWVILE1BQWY7QUFDSCxhQU5EOztBQVFBLGdCQUFJSixXQUFXLENBQUMsQ0FBaEIsRUFBbUI7QUFDZixvQkFBSSxLQUFLbEYsS0FBTCxDQUFXZ0csVUFBZixFQUEyQjtBQUN2Qix3QkFBSSxDQUFDMUIsTUFBTTJCLFFBQVAsSUFBbUIsQ0FBQzNCLE1BQU00QixPQUE5QixFQUF1QztBQUNuQztBQUNBYixxQ0FBYS9DLEdBQWI7QUFDQThDLHdDQUFnQixJQUFoQjtBQUNILHFCQUpELE1BSU8sSUFBSWQsTUFBTTJCLFFBQU4sSUFBa0IsS0FBS2pHLEtBQUwsQ0FBV21HLFdBQWpDLEVBQThDO0FBQ2pEO0FBQ0FKLGdEQUF3QnpELEdBQXhCO0FBQ0gscUJBSE0sTUFHQSxJQUFJZ0MsTUFBTTRCLE9BQU4sSUFBaUIsS0FBS2xHLEtBQUwsQ0FBV21HLFdBQWhDLEVBQTZDO0FBQ2hEO0FBQ0E3RCw0QkFBSXNCLFFBQUosR0FBZSxDQUFDdEIsSUFBSXNCLFFBQXBCO0FBQ0F3Qix3Q0FBZ0IsSUFBaEI7QUFDSCxxQkFKTSxNQUlBLElBQUlkLE1BQU0yQixRQUFOLElBQWtCM0IsTUFBTTRCLE9BQXhCLElBQW1DLEtBQUtsRyxLQUFMLENBQVdtRyxXQUFsRCxFQUErRDtBQUNsRTtBQUNBVix1Q0FBZW5ELEdBQWY7QUFDSDtBQUNKOztBQUVELHFCQUFLOEQsUUFBTCxDQUFjO0FBQ1YzRCxxQ0FBaUIyQyxnQkFBZ0JGLE1BQWhCLEdBQXlCLEtBQUszQyxLQUFMLENBQVdFLGVBRDNDO0FBRVZsQywwQkFBTSxLQUFLZ0MsS0FBTCxDQUFXaEM7QUFGUCxpQkFBZDs7QUFLQSxvQkFBTThGLFlBQVksSUFBSTNCLFdBQUosQ0FBZ0IsV0FBaEIsRUFBNkI7QUFDM0NDLDRCQUFRO0FBQ0pyQyxnQ0FESTtBQUVKZ0UsOEJBQU03RTtBQUZGO0FBRG1DLGlCQUE3QixDQUFsQjs7QUFPQSxvQkFBTW1ELFdBQVdDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBSzlFLEtBQUwsQ0FBV0UsRUFBbkMsQ0FBakI7O0FBRUEsb0JBQUkwRSxRQUFKLEVBQWM7QUFDVkEsNkJBQVNHLGFBQVQsQ0FBdUJzQixTQUF2QjtBQUNIOztBQUVELG9CQUFJLEtBQUtyRyxLQUFMLENBQVd1RyxXQUFmLEVBQTRCO0FBQ3hCLHlCQUFLdkcsS0FBTCxDQUFXdUcsV0FBWCxDQUF1QmpFLEdBQXZCLEVBQTRCYixPQUE1QjtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sS0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7OztnQ0FRUWxCLEksRUFBTUMsRyxFQUFLO0FBQ2YsZ0JBQUksQ0FBQ0QsS0FBS0ksTUFBVixFQUFrQjtBQUNkSix1QkFBTyxDQUFDQSxJQUFELENBQVA7QUFDSDs7QUFFRCxnQkFBSSxDQUFDQyxHQUFMLEVBQVU7QUFDTkEsc0JBQU0sS0FBSytCLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JJLE1BQXRCO0FBQ0g7O0FBRUQsZ0JBQU02RixXQUFXakcsS0FBSzRCLEdBQUwsQ0FBUztBQUFBLHVCQUFPLHNCQUFZRyxHQUFaLENBQVA7QUFBQSxhQUFULENBQWpCO0FBQ0EsZ0JBQU1tRSxjQUFjbEcsS0FBSzRCLEdBQUwsQ0FBUztBQUFBLHVCQUFPLGlCQUFFdUUsTUFBRixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CcEUsR0FBbkIsQ0FBUDtBQUFBLGFBQVQsQ0FBcEI7O0FBRUEsZ0JBQU1xRSx1Q0FDQyxLQUFLcEUsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQnFHLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCcEcsR0FBekIsQ0FERCxzQkFFQ2dHLFFBRkQsc0JBR0MsS0FBS2pFLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JxRyxLQUFoQixDQUFzQnBHLEdBQXRCLENBSEQsRUFBTjs7QUFNQSxnQkFBTXFHLHVDQUNDLEtBQUt0RSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJvRSxLQUFuQixDQUF5QixDQUF6QixFQUE0QnBHLEdBQTVCLENBREQsc0JBRUNpRyxXQUZELHNCQUdDLEtBQUtsRSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJvRSxLQUFuQixDQUF5QnBHLEdBQXpCLENBSEQsRUFBTjs7QUFNQSxpQkFBSzRGLFFBQUwsQ0FBYztBQUNWN0Ysc0JBQU1vRyxPQURJO0FBRVZuRSx5QkFBU3FFO0FBRkMsYUFBZDtBQUlIOztBQUVEOzs7Ozs7Ozs7O2dDQU9RdEcsSSxFQUFNO0FBQ1YsZ0JBQUksQ0FBQ0EsS0FBS0ksTUFBVixFQUFrQjtBQUNkSix1QkFBTyxDQUFDQSxJQUFELENBQVA7QUFDSDs7QUFFRCxnQkFBTWlHLFdBQVdqRyxLQUFLNEIsR0FBTCxDQUFTO0FBQUEsdUJBQU8sc0JBQVlHLEdBQVosQ0FBUDtBQUFBLGFBQVQsQ0FBakI7QUFDQSxnQkFBTW1FLGNBQWNsRyxLQUFLNEIsR0FBTCxDQUFTO0FBQUEsdUJBQU8saUJBQUV1RSxNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUJwRSxHQUFuQixDQUFQO0FBQUEsYUFBVCxDQUFwQjs7QUFFQSxpQkFBSzhELFFBQUwsQ0FBYztBQUNWN0Ysc0JBQU1pRyxRQURJO0FBRVZoRSx5QkFBU2lFO0FBRkMsYUFBZDtBQUlIOztBQUVEOzs7Ozs7Ozs7OzttQ0FRV2pHLEcsRUFBS0csTSxFQUFRO0FBQ3BCLGdCQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNUQSx5QkFBUyxDQUFUO0FBQ0g7O0FBRUQsZ0JBQU1nRyx1Q0FDQyxLQUFLcEUsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQnFHLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCcEcsR0FBekIsQ0FERCxzQkFFQyxLQUFLK0IsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQnFHLEtBQWhCLENBQXNCcEcsTUFBTUcsTUFBNUIsQ0FGRCxFQUFOOztBQUtBLGdCQUFNa0csdUNBQ0MsS0FBS3RFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQm9FLEtBQW5CLENBQXlCLENBQXpCLEVBQTRCcEcsR0FBNUIsQ0FERCxzQkFFQyxLQUFLK0IsS0FBTCxDQUFXQyxPQUFYLENBQW1Cb0UsS0FBbkIsQ0FBeUJwRyxNQUFNRyxNQUEvQixDQUZELEVBQU47O0FBS0EsaUJBQUt5RixRQUFMLENBQWM7QUFDVjdGLHNCQUFNb0csT0FESTtBQUVWbkUseUJBQVNxRTtBQUZDLGFBQWQ7QUFJSDs7QUFFRDs7Ozs7Ozs7OzsrQkFPT2hHLE8sRUFBUTtBQUNYLGlCQUFLdUYsUUFBTCxDQUFjdkYsT0FBZDtBQUNIOztBQUVEOzs7Ozs7Ozs7O2tDQU9VO0FBQ04sbUJBQU87QUFDSDZCLHlCQUFTLEtBQUtILEtBQUwsQ0FBV0csT0FEakI7QUFFSEMsOEJBQWMsS0FBS0osS0FBTCxDQUFXSTtBQUZ0QixhQUFQO0FBSUg7O0FBRUQ7Ozs7Ozs7Ozs7OytCQVFPbkMsRyxFQUFLO0FBQ1IsZ0JBQUlBLE1BQU0sQ0FBTixJQUFXQSxPQUFPLEtBQUsrQixLQUFMLENBQVdoQyxJQUFYLENBQWdCSSxNQUF0QyxFQUE4QztBQUMxQyx1QkFBTyxJQUFQO0FBQ0g7O0FBRUQsbUJBQU8sc0JBQVksS0FBSzRCLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQVosQ0FBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7OzBDQU9rQjtBQUNkLGdCQUFNc0csTUFBTSxFQUFaOztBQUVBLGlCQUFLLElBQUk3QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzFDLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0JJLE1BQXBDLEVBQTRDc0UsR0FBNUMsRUFBaUQ7QUFDN0Msb0JBQUksS0FBSzFDLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0IwRSxDQUFoQixFQUFtQnJCLFFBQXZCLEVBQWlDO0FBQzdCa0Qsd0JBQUlDLElBQUosQ0FBUyxzQkFBWSxLQUFLeEUsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQjBFLENBQWhCLENBQVosQ0FBVDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU82QixHQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7NENBT29CO0FBQ2hCLGdCQUFNQSxNQUFNLEVBQVo7O0FBRUEsaUJBQUssSUFBSTdCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLMUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQkksTUFBcEMsRUFBNENzRSxHQUE1QyxFQUFpRDtBQUM3QyxvQkFBSSxLQUFLMUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQjBFLENBQWhCLEVBQW1CckIsUUFBdkIsRUFBaUM7QUFDN0JrRCx3QkFBSUMsSUFBSixDQUFTLEtBQUt4RSxLQUFMLENBQVdoQyxJQUFYLENBQWdCMEUsQ0FBaEIsRUFBbUIvRSxFQUE1QjtBQUNIO0FBQ0o7O0FBRUQsbUJBQU80RyxHQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2E7QUFDVCxtQkFBTyxLQUFLdkUsS0FBTCxDQUFXcEIsT0FBbEI7QUFDSDs7QUFFRDs7Ozs7Ozs7OzttQ0FPV0EsTyxFQUFTO0FBQ2hCLGlCQUFLaUYsUUFBTCxDQUFjO0FBQ1ZqRix5QkFBU0EsUUFBUWdCLEdBQVIsQ0FBWTtBQUFBLDJCQUFPLHlCQUFlQyxHQUFmLENBQVA7QUFBQSxpQkFBWjtBQURDLGFBQWQ7QUFHSDs7QUFFRDs7Ozs7Ozs7Ozs7Z0NBUVFsQyxFLEVBQUk7QUFDUixpQkFBSyxJQUFJK0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsxQyxLQUFMLENBQVdoQyxJQUFYLENBQWdCSSxNQUFwQyxFQUE0Q3NFLEdBQTVDLEVBQWlEO0FBQzdDLG9CQUFNM0MsTUFBTSxLQUFLQyxLQUFMLENBQVdoQyxJQUFYLENBQWdCMEUsQ0FBaEIsQ0FBWjs7QUFFQSxvQkFBSTNDLElBQUlwQyxFQUFKLEtBQVdBLEVBQWYsRUFBbUI7QUFDZiwyQkFBTyxzQkFBWW9DLEdBQVosQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sSUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7O21DQU9XcEMsRSxFQUFJO0FBQ1gsaUJBQUssSUFBSStFLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLMUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQkksTUFBcEMsRUFBNENzRSxHQUE1QyxFQUFpRDtBQUM3QyxvQkFBSSxLQUFLMUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQjBFLENBQWhCLEVBQW1CL0UsRUFBbkIsS0FBMEJBLEVBQTlCLEVBQWtDO0FBQzlCLHlCQUFLVSxVQUFMLENBQWdCcUUsQ0FBaEI7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7QUFFRDs7Ozs7Ozs7Ozs7a0NBUVUvRSxFLEVBQUlxQixJLEVBQU07QUFDaEIsaUJBQUssSUFBSTBELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLMUMsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQkksTUFBcEMsRUFBNENzRSxHQUE1QyxFQUFpRDtBQUM3QyxvQkFBTStCLFVBQVUsS0FBS3pFLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0IwRSxDQUFoQixDQUFoQjtBQUNBLG9CQUFNekMsVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ5QyxDQUFuQixDQUFoQjs7QUFFQSxvQkFBSStCLFFBQVE5RyxFQUFSLEtBQWVBLEVBQW5CLEVBQXVCO0FBQ25CLHdCQUFNK0csU0FBUyxzQkFBWSxpQkFBRVAsTUFBRixDQUFTLElBQVQsRUFBZU0sUUFBUXpGLElBQXZCLEVBQTZCQSxJQUE3QixDQUFaLENBQWY7QUFDQSx3QkFBTTJGLGFBQWEsaUJBQUVSLE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQmxFLE9BQW5CLEVBQTRCakIsSUFBNUIsQ0FBbkI7QUFDQSx5QkFBS2dCLEtBQUwsQ0FBV2hDLElBQVgsQ0FBZ0I0RyxNQUFoQixDQUF1QmxDLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCZ0MsTUFBN0I7QUFDQSx5QkFBSzFFLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQjJFLE1BQW5CLENBQTBCbEMsQ0FBMUIsRUFBNkIsQ0FBN0IsRUFBZ0NpQyxVQUFoQzs7QUFFQSx5QkFBS2QsUUFBTCxDQUFjO0FBQ1Y3Riw4QkFBTSxLQUFLZ0MsS0FBTCxDQUFXaEMsSUFEUDtBQUVWaUMsaUNBQVMsS0FBS0QsS0FBTCxDQUFXQztBQUZWLHFCQUFkOztBQUtBO0FBQ0g7QUFDSjtBQUNKOztBQUVEOzs7Ozs7Ozs7Ozs7bUNBU1d0QyxFLEVBQUl1QixPLEVBQVNDLEssRUFBTztBQUMzQixpQkFBSyxJQUFJdUQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsxQyxLQUFMLENBQVdoQyxJQUFYLENBQWdCSSxNQUFwQyxFQUE0Q3NFLEdBQTVDLEVBQWlEO0FBQzdDLG9CQUFNK0IsVUFBVSxLQUFLekUsS0FBTCxDQUFXaEMsSUFBWCxDQUFnQjBFLENBQWhCLENBQWhCO0FBQ0Esb0JBQU1tQyxjQUFjLEtBQUs3RSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ5QyxDQUFuQixDQUFwQjs7QUFFQSxvQkFBSStCLFFBQVE5RyxFQUFSLEtBQWVBLEVBQW5CLEVBQXVCO0FBQ25COEcsNEJBQVF6RixJQUFSLENBQWFFLE9BQWIsSUFBd0JDLEtBQXhCO0FBQ0EwRixnQ0FBWTNGLE9BQVosSUFBdUJDLEtBQXZCOztBQUVBLHlCQUFLMEUsUUFBTCxDQUFjO0FBQ1Y3Riw4QkFBTSxLQUFLZ0MsS0FBTCxDQUFXaEMsSUFEUDtBQUVWaUMsaUNBQVMsS0FBS0QsS0FBTCxDQUFXQztBQUZWLHFCQUFkOztBQUtBO0FBQ0g7QUFDSjtBQUNKOztBQUVEOzs7Ozs7OztnQ0FLUTtBQUNKLGlCQUFLNEQsUUFBTCxDQUFjO0FBQ1Y3RixzQkFBTSxFQURJO0FBRVZpQyx5QkFBUztBQUZDLGFBQWQ7QUFJSDs7QUFFRDs7Ozs7Ozs7O21DQU1XWCxPLEVBQVM7QUFDaEIsaUJBQUt1RSxRQUFMLENBQWM7QUFDVnZFO0FBRFUsYUFBZDtBQUdIOztBQUVEOzs7Ozs7Ozs7O21DQU9XRSxPLEVBQVM7QUFDaEIsaUJBQUtxRSxRQUFMLENBQWM7QUFDVnJFO0FBRFUsYUFBZDtBQUdIOzs7O0VBM21Ca0MsZ0JBQU1zRixTOztBQThtQjdDOzs7Ozs7Ozs7a0JBOW1CcUJwRixTO0FBcW5CckJBLFVBQVVxRixTQUFWLEdBQXNCO0FBQ2xCcEgsUUFBSSxvQkFBVXFILE1BREk7QUFFbEJwRyxhQUFTLG9CQUFVcUcsT0FBVixDQUFrQixvQkFBVUMsS0FBVixDQUFnQjtBQUN2Q2pFLGNBQU0sb0JBQVUrRCxNQUFWLENBQWlCRyxVQURnQjtBQUV2Q2hFLHFCQUFhLG9CQUFVNkQsTUFGZ0I7QUFHdkNoRSxlQUFPLG9CQUFVb0UsU0FBVixDQUFvQixDQUFDLG9CQUFVSixNQUFYLEVBQW1CLG9CQUFVSyxNQUE3QixDQUFwQixDQUhnQztBQUl2QzVFLG1CQUFXLG9CQUFVdUUsTUFKa0I7QUFLdkNyRCxnQkFBUSxvQkFBVTJELElBTHFCO0FBTXZDQyxrQkFBVSxvQkFBVUM7QUFObUIsS0FBaEIsQ0FBbEIsQ0FGUztBQVVsQjFGLGlCQUFhLG9CQUFVbUYsT0FBVixDQUFrQixvQkFBVVEsTUFBNUIsQ0FWSztBQVdsQmhDLGdCQUFZLG9CQUFVK0IsSUFYSjtBQVlsQjVCLGlCQUFhLG9CQUFVNEIsSUFaTDtBQWFsQnJGLGFBQVMsb0JBQVU2RSxNQWJEO0FBY2xCNUUsa0JBQWMsb0JBQVVvRixJQWROO0FBZWxCbEYsY0FBVSxvQkFBVW9GLFFBQVYsQ0FBbUIsb0JBQVVKLElBQTdCLENBZlE7QUFnQmxCN0MseUJBQXFCLG9CQUFVNkMsSUFoQmI7QUFpQmxCdEIsaUJBQWEsb0JBQVVzQixJQWpCTDtBQWtCbEJsRSxrQkFBYyxvQkFBVWtFLElBbEJOO0FBbUJsQjdELG1CQUFlLG9CQUFVNkQ7QUFuQlAsQ0FBdEI7O0FBc0JBOzs7Ozs7O0FBT0E1RixVQUFVaUcsWUFBVixHQUF5QjtBQUNyQmhJLFFBQUksTUFEaUI7QUFFckJpQixhQUFTLEVBRlk7QUFHckJ1QixhQUFTLEVBSFk7QUFJckJzRCxnQkFBWSxJQUpTO0FBS3JCRyxpQkFBYSxLQUxRO0FBTXJCeEQsa0JBQWMsS0FOTztBQU9yQkUsY0FBVSxFQVBXO0FBUXJCUixpQkFBYSxFQVJRO0FBU3JCMkMseUJBQXFCLElBVEE7QUFVckJ1QixpQkFBYSxJQVZRO0FBV3JCNUMsa0JBQWM7QUFBQSxlQUFPLEVBQVA7QUFBQSxLQVhPO0FBWXJCSyxtQkFBZTtBQUFBLGVBQU8sRUFBUDtBQUFBO0FBWk0sQ0FBekIsQzs7Ozs7Ozs7Ozs7OztBQ3J0QkE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7SUFPcUJtRSxPLEdBQ2pCLGlCQUFZbkksS0FBWixFQUFtQjtBQUFBOztBQUNmLE1BQUlBLGlCQUFpQm1JLE9BQXJCLEVBQThCO0FBQzFCbkksWUFBUUEsTUFBTXVCLElBQWQ7QUFDSDs7QUFFRDs7Ozs7O0FBTUEsT0FBS3JCLEVBQUwsR0FBVUYsTUFBTUUsRUFBTixHQUFXRixNQUFNRSxFQUFqQixHQUFzQmlJLFFBQVFDLFlBQVIsRUFBaEM7O0FBRUE7Ozs7OztBQU1BLE9BQUs3RyxJQUFMLEdBQVksaUJBQUVtRixNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIxRyxLQUFuQixDQUFaOztBQUVBOzs7Ozs7QUFNQSxPQUFLNEQsUUFBTCxHQUFnQixLQUFoQjs7QUFFQTs7Ozs7O0FBTUEsT0FBS0UsSUFBTCxHQUFZLElBQVo7QUFDSCxDOztBQUdMOzs7Ozs7Ozs7a0JBeENxQnFFLE87QUErQ3JCQSxRQUFRQyxZQUFSLEdBQXVCO0FBQUEsb0JBQWVELFFBQVFFLFNBQVIsRUFBZjtBQUFBLENBQXZCOztBQUVBOzs7Ozs7O0FBT0FGLFFBQVFFLFNBQVIsR0FBb0IsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7O0lBT3FCQyxVLEdBQ2pCLG9CQUFZdEksS0FBWixFQUFtQjtBQUFBOztBQUNmLE1BQU11SSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ2hGLEtBQUQsRUFBVztBQUN4QixRQUFNaUYsV0FBVyxlQUFqQjs7QUFFQSxRQUFJLE9BQU9qRixLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzNCLGFBQVVBLEtBQVY7QUFDSCxLQUZELE1BRU8sSUFBSWlGLFNBQVNDLElBQVQsQ0FBY2xGLE1BQU1hLFFBQU4sRUFBZCxDQUFKLEVBQXFDO0FBQ3hDLGFBQU9iLE1BQU1hLFFBQU4sRUFBUDtBQUNILEtBRk0sTUFFQTtBQUNILGFBQU8sRUFBUDtBQUNIO0FBQ0osR0FWRDs7QUFZQTs7Ozs7O0FBTUEsT0FBS1osSUFBTCxHQUFZeEQsTUFBTXdELElBQWxCOztBQUVBOzs7Ozs7QUFNQSxPQUFLRSxXQUFMLEdBQW1CMUQsTUFBTTBELFdBQU4sR0FBb0IxRCxNQUFNMEQsV0FBMUIsR0FBd0MsS0FBS0YsSUFBaEU7O0FBRUE7Ozs7OztBQU1BLE9BQUtELEtBQUwsR0FBYWdGLFNBQVN2SSxNQUFNdUQsS0FBZixDQUFiOztBQUVBOzs7Ozs7QUFNQSxPQUFLUCxTQUFMLEdBQWlCaEQsTUFBTWdELFNBQU4sR0FBa0JoRCxNQUFNZ0QsU0FBeEIsR0FBb0MsRUFBckQ7O0FBRUE7Ozs7OztBQU1BLE9BQUtrQixNQUFMLEdBQWNsRSxNQUFNa0UsTUFBcEI7O0FBRUE7Ozs7OztBQU1BLE9BQUs0RCxRQUFMLEdBQWdCOUgsTUFBTThILFFBQXRCO0FBQ0gsQzs7a0JBN0RnQlEsVTs7Ozs7Ozs7Ozs7Ozs7OztBQzdCckI7Ozs7OztBQUVBLElBQUksT0FBT0ksT0FBT0MsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUN4Q0QsV0FBT0MsUUFBUCxHQUFrQixFQUFsQjtBQUNIOztBQUVERCxPQUFPQyxRQUFQLENBQWdCNUksSUFBaEIsa0IiLCJmaWxlIjoiUmVhY3RHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk1ZjA3MjY3ODkyOWIwOTRjNmRmIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RHcmlkIGZyb20gJy4uL2pzeC9SZWFjdEdyaWQnO1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgYSBzb3J0IHN0YXRlXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gU29ydFR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gd2UncmUgb3JkZXJpbmcgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgaWYgdGhlIG9yZGVyIGlzIHJldmVyc2VkXG4gKi9cblxuLyoqXG4gKiBHcmlkIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBncmlkXG4gKiBAY2xhc3MgR3JpZFxuICogQGNsYXNzZGVzYyBHcmlkIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIGdyaWRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZ3JpZCBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjZ3JpZFxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RHcmlkfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgZ3JpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWRQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIEdyaWQgQ29tcG9uZW50IHdpdGhpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RHcmlkLCB7IC4uLnRoaXMuZ3JpZFByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcm93cyB0byB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5hZGRSb3dzKHJvd3MsIG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXhpc3Rpbmcgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudCBhbmQgYWRkcyBuZXcgcm93cyBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gc2V0XG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRSb3dzKHJvd3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLmdyaWQuZGVsZXRlUm93cyhuZHgsIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCByb3dzIGJ5IGEgc3BlY2lmaWMgY29sdW1uIG5hbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNvcnRCeShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtTb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByb3cgYXQgbmR4XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFJvdyhuZHgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3dbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd0lkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd0lkcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbHVtbiBjb2xsZWN0aW9uXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7R3JpZENvbHVtbltdfVxuICAgICAqL1xuICAgIGdldENvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Q29sdW1ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1ucyBkeW5hbWljYWxseVxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1uW119IGNvbHVtbnNcbiAgICAgKi9cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgcm93IGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm93IGlkIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBQYXJ0aWFsIG9yIGZ1bGwgcm93IGRhdGEgdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlUm93KGlkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGVSb3coaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBjZWxsIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHcmlkUm93IGZyb20gJy4uL2VzNi9HcmlkUm93JztcbmltcG9ydCBHcmlkQ29sdW1uIGZyb20gJy4uL2VzNi9HcmlkQ29sdW1uJztcblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdEdyaWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gR3JpZFN0YXRlXG4gKiBAcHJvcGVydHkge09iamVjdFtdfSByYXdEYXRhIFRoZSByYXcgZGF0YSBpbiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkQ29sdW1uW119IGNvbHVtbnMgVGhlIGNvbHVtbnMgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7R3JpZFJvd1tdfSByb3dzIFRoZSByb3dzIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge251bWJlcn0gcHJldlNlbGVjdGVkUm93IFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHJvd1xuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIGNvbHVtbiBuYW1lIHRvIG9yZGVyIGJ5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yZGVyUmV2ZXJzZSBUcnVlIG9mIHRoZSBvcmRlciBzaG91bGQgYmUgcmV2ZXJzZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIHNob3dzIGEgbG9hZGluZyBzcGlubmVyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgZ3JpZCBpcyBpbnRlcmFjdGl2ZVxuICovXG5cbi8qKlxuICogU29ydCBmdW5jdGlvbiBjYWxsYmFjaywgc2hvdWxkIHJldHVybiAtMSBpZiBhIGlzIGxvd2VyIHRoYW4gYixcbiAqIDAgaWYgcm93cyBhcmUgZXF1YWwgYW5kIDEgaWYgYSBpcyBncmVhdGVyIHRoYW4gYlxuICpcbiAqIEBjYWxsYmFjayBTb3J0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7R3JpZFJvd30gYSBSb3cgYVxuICogQHBhcmFtIHtHcmlkUm93fSBiIFJvdyBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuLyoqXG4gKiBDbGFzc05hbWUgY2FsbGJhY2ssIGEgZnVuY3Rpb24gdG8gcmV0dXJuIGEgY2xhc3NOYW1lIChzdHJpbmcpXG4gKiBiYXNlZCBvbiByb3cvY29sdW1uIGluZm9ybWF0aW9uXG4gKlxuICogQGNhbGxiYWNrIGNsYXNzTmFtZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHJvdyBUaGUgcm93IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sdW1uXSBUaGUgY29sdW1uIHdlJ3JlIHJlbmRlcmluZyAoZm9yIGNlbGwgY2xhc3NOYW1lcylcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBwcm9wcyBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9Z3JpZF0gVGhlIGlkIG9mIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0NvbHVtblByb3BzW119IGNvbHVtbnMgVGhlIGNvbHVtbnMgZGVmaW5pdGlvbiBmb3IgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Um93UHJvcHNbXX0gaW5pdGlhbERhdGEgVGhlIGluaXRpYWwgZGF0YSB0byBwb3B1bGF0ZSB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIGNvbHVtbiBuYW1lIHRoYXQgd2UncmUgc29ydGluZyBmb3JcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29yZGVyUmV2ZXJzZT1mYWxzZV0gVHJ1ZSBpZiB3ZSdyZSBpbiByZXZlcnNlIG9yZGVyXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLFNvcnRDYWxsYmFjaz59IFtzb3J0aW5nc10gQSBzZXQgb2Ygc29ydGluZyBmdW5jdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtyb3dDbGFzc05hbWVdIEEgY2FsbGJhY2sgdG8gc2V0IHRoZSBjbGFzc05hbWUgb2YgYSByb3dcbiAqIGJhc2VkIG9uIGl0cyBkYXRhXG4gKiBAcHJvcGVydHkge2NsYXNzTmFtZUNhbGxiYWNrfSBbY2VsbENsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGNlbGxcbiAqIGJhc2VkIG9uIGl0cyBkYXRhXG4gKiBmb3IgZWFjaCBzb3J0YWJsZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NlbGVjdGFibGU9dHJ1ZV0gVHJ1ZSBpZiB0aGUgZ3JpZCBpcyBzZWxlY3RhYmxlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFttdWx0aXNlbGVjdD1mYWxzZV0gVHJ1ZSBpZiB3ZSB3aWxsIGVuYWJsZSBtdWx0aXNlbGVjdCBpbiB0aGUgZ3JpZFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSByZWFjdCBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7R3JpZFByb3BzfSBwcm9wcyBSZWFjdCBwcm9wc1xuICogQGNsYXNzIFJlYWN0R3JpZFxuICogQGNsYXNzZGVzYyBSZWFjdCBHcmlkIENvbXBvbmVudCBjbGFzc1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0R3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGNvbCA9PiBuZXcgR3JpZENvbHVtbihjb2wpKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMucHJvcHMuaW5pdGlhbERhdGEubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0YXRlIG9iamVjdCBmb3IgdGhlIGdyaWQgY29tcG9uZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFJlYWN0R3JpZCNzdGF0ZVxuICAgICAgICAgKiBAdHlwZSB7R3JpZFN0YXRlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMucHJvcHMuaW5pdGlhbERhdGEsXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2xzLFxuICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogLTEsXG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnByb3BzLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMucHJvcHMub3JkZXJSZXZlcnNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzb3J0Um93cygpIHtcbiAgICAgICAgY29uc3Qgc29ydEZuID0gdGhpcy5wcm9wcy5zb3J0aW5nc1t0aGlzLnN0YXRlLm9yZGVyQnldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgKHNvcnRGbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcmRlclJldmVyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgdGFibGUtd3JhcHBlciR7dGhpcy5zdGF0ZS5lbmFibGVkID8gJycgOiAnIGRpc2FibGVkJ31gO1xuICAgICAgICB0aGlzLnNvcnRSb3dzKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPnt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ29sdW1uLmJpbmQodGhpcykpfTwvdHI+PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXt0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLm1hcCh0aGlzLnJlbmRlclJvdy5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgY29sdW1uIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbHVtblxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckNvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2x1bW4ud2lkdGggfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbHVtbi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVIZWFkZXJDbGljay5iaW5kKHRoaXMsIGNvbHVtbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbHVtbi5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHJvdyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJSb3cocm93KSB7XG4gICAgICAgIGNvbnN0IHJvd0NsYXNzTmFtZSA9IHRoaXMucHJvcHMucm93Q2xhc3NOYW1lKHJvdy5kYXRhKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7cm93Q2xhc3NOYW1lfSAke3Jvdy5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ31gO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgZGlzcGxheTogcm93LnNob3cgPyAndGFibGUtcm93JyA6ICdub25lJyB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBpZD17cm93LmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCh0aGlzLnJlbmRlckNlbGwuYmluZCh0aGlzLCByb3cpKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHNpbmdsZSBjZWxsIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ2VsbChyb3csIGNvbCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNlbGxDbGFzc05hbWUocm93LmRhdGEsIGNvbCk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyB3aWR0aDogY29sLndpZHRoIH07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHlwZW9mIGNvbC5mb3JtYXQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgY29sLmZvcm1hdC5jYWxsKHRoaXMsIHJvdy5kYXRhW2NvbC5uYW1lXSwgcm93KSA6XG4gICAgICAgICAgICByb3cuZGF0YVtjb2wubmFtZV0udG9TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAga2V5PXtgJHtyb3cuaWR9ICR7Y29sLm5hbWV9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUNlbGxDbGljay5iaW5kKHRoaXMsIHJvdywgY29sLm5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0eXBlb2YgY29udGVudHMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMgOlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCwgY29udGVudHMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gdGhlIGdyaWQgaGVhZGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2x1bW5cbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFRoZSByZWFjdCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVIZWFkZXJDbGljayhjb2x1bW4sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoZWFkZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSGVhZGVyQ2xpY2snLCB7IGRldGFpbDogY29sdW1uIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGhlYWRlckV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Db2x1bW5IZWFkZXJDbGljayhjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBudW1lcmljIGluZGV4IGZvciBhIGdpdmVuIHJvdyBvYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFJvd05keChyb3cpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uaWQgPT09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBldmVudCB3aGVuIGEgY2xpY2sgaXMgbWFkZSBpbiBhIGNlbGxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlQ2VsbENsaWNrKHJvdywgY29sTmFtZSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvd05keCA9IHRoaXMuZ2V0Um93TmR4KHJvdyk7XG4gICAgICAgIGxldCB1cGRhdGVMYXN0Um93ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0T25lUm93ID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAhY3VyUm93LnNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKGlubmVyUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJSb3cuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3RSb3dSYW5nZSA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0RnJvbSA9IE1hdGgubWluKHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldFRvID0gTWF0aC5tYXgocm93TmR4LCB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNldEZyb207IGkgPD0gc2V0VG87IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjdXJSb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZSA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2UoY3VyUm93KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocm93TmR4ICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgIWV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPbmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFJvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZShyb3cpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY3RybEtleSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXN0Um93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmN0cmxLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2Uocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogdXBkYXRlTGFzdFJvdyA/IHJvd05keCA6IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93LFxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnQ2VsbENsaWNrJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IGNvbE5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChjZWxsRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2socm93LCBjb2xOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5keCkge1xuICAgICAgICAgICAgbmR4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4uZ3JpZFJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnJhd0RhdGFSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogZ3JpZFJvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiByYXdEYXRhUm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnN0YXRlLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICBpZiAobmR4IDwgMCB8fCBuZHggPj0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW25keF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuc3RhdGUucm93c1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUm93cyhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBuZXcgR3JpZFJvdygkLmV4dGVuZCh0cnVlLCByb3dJdGVtLmRhdGEsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSYXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHJhd0RhdGEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zcGxpY2UoaSwgMSwgbmV3Um93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhd0RhdGEuc3BsaWNlKGksIDEsIG5ld1Jhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhSXRlbSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcm93SXRlbS5kYXRhW2NvbE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmF3RGF0YUl0ZW1bY29sTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgcmF3RGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcFR5cGVzIGZvciBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKiBAc3RhdGljXG4gKi9cblJlYWN0R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9KSksXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyUmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydGluZ3M6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DZWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wZXJ0aWVzIG9mIHRoZSBSZWFjdEdyaWQgY2xhc3NcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICovXG5SZWFjdEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnZ3JpZCcsXG4gICAgY29sdW1uczogW10sXG4gICAgb3JkZXJCeTogJycsXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBtdWx0aXNlbGVjdDogZmFsc2UsXG4gICAgb3JkZXJSZXZlcnNlOiBmYWxzZSxcbiAgICBzb3J0aW5nczoge30sXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IG51bGwsXG4gICAgb25DZWxsQ2xpY2s6IG51bGwsXG4gICAgcm93Q2xhc3NOYW1lOiAoKSA9PiAoJycpLFxuICAgIGNlbGxDbGFzc05hbWU6ICgpID0+ICgnJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFJvdyBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSByb3dcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSb3dQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF0gVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gKiBAcHJvcGVydHkgeyp9IGRhdGEgVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gKi9cblxuLyoqXG4gKiBHcmlkIFJvdyBDb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Um93UHJvcHN8R3JpZFJvd30gcHJvcHNcbiAqIEBjbGFzcyBHcmlkUm93XG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIFJvdyBpbiB0aGUgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzIGluc3RhbmNlb2YgR3JpZFJvdykge1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IEdyaWRSb3cuZ2V0TmV4dFJvd0lkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzZWxlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIG5vdCBmaWx0ZXJlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3Nob3dcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHJvdyBpZFxuICpcbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkdyaWRSb3cuZ2V0TmV4dFJvd0lkID0gKCkgPT4gKGAncm93XyR7R3JpZFJvdy5uZXh0Um93SWQrK31gKTtcblxuLyoqXG4gKiBOZXh0IGlkIHJvdyBnZW5lcmF0b3JcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqL1xuR3JpZFJvdy5uZXh0Um93SWQgPSAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkUm93LmpzIiwiLyoqXG4gKiBGb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhIGNlbGwgdmFsdWVcbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGluZ0NhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIENlbGwgdmFsdWVcbiAqIEBwYXJhbSB7R3JpZFJvd30gcm93IFRoZSBlbnRpcmUgcm93XG4gKiBAcmV0dXJuIHtzdHJpbmd8SFRNTEVsZW1lbnR8UmVhY3QuQ29tcG9uZW50fVxuICovXG5cbi8qKlxuICogQ29sdW1uIHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIGNvbHVtblxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbHVtblByb3BzXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Rpc3BsYXlOYW1lXSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbd2lkdGhdIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NsYXNzTmFtZV0gVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge0Zvcm1hdHRpbmdDYWxsYmFja30gW2Zvcm1hdF0gQSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciB0aGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NvcnRhYmxlXSBUcnVlIGlmIHRoZSBjb2x1bW4gaXMgc29ydGFibGVcbiAqL1xuXG4vKipcbiAqIEdyaWQgY29sdW1uIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtDb2x1bW5Qcm9wc30gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbHVtblxuICogQGNsYXNzIEdyaWRDb2x1bW5cbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgY29sdW1uIGluIGEgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2V0V2lkdGggPSAod2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gL14oXFxkKStbcHh8JV0kLztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZS50ZXN0KHdpZHRoLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI25hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Rpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWUgPyBwcm9wcy5kaXNwbGF5TmFtZSA6IHRoaXMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiN3aWR0aFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53aWR0aCA9IHNldFdpZHRoKHByb3BzLndpZHRoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jY2xhc3NOYW1lXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZm9ybWF0XG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbnx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1hdCA9IHByb3BzLmZvcm1hdDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3NvcnRhYmxlXG4gICAgICAgICAqIEB0eXBlIHtib29sfHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBwcm9wcy5zb3J0YWJsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRDb2x1bW4uanMiLCJpbXBvcnQgR3JpZCBmcm9tICcuLi9lczYvR3JpZCc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuR3JpZCA9IEdyaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0R3JpZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=