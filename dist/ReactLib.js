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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GridRow = __webpack_require__(9);

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = __webpack_require__(10);

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
/* 6 */
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
/* 7 */
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

var _ReactGrid = __webpack_require__(4);

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
/* 9 */
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
/* 10 */
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
/* 12 */
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

var _ReactModal = __webpack_require__(6);

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
/* 13 */
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

var _ReactTagsDisplay = __webpack_require__(7);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Grid = __webpack_require__(8);

var _Grid2 = _interopRequireDefault(_Grid);

var _Tree = __webpack_require__(11);

var _Tree2 = _interopRequireDefault(_Tree);

var _Modal = __webpack_require__(12);

var _Modal2 = _interopRequireDefault(_Modal);

var _TagsManager = __webpack_require__(13);

var _TagsManager2 = _interopRequireDefault(_TagsManager);

var _ReactGrid = __webpack_require__(4);

var _ReactGrid2 = _interopRequireDefault(_ReactGrid);

var _ReactTree = __webpack_require__(5);

var _ReactTree2 = _interopRequireDefault(_ReactTree);

var _ReactModal = __webpack_require__(6);

var _ReactModal2 = _interopRequireDefault(_ReactModal);

var _ReactTagsDisplay = __webpack_require__(7);

var _ReactTagsDisplay2 = _interopRequireDefault(_ReactTagsDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {
        Grid: _Grid2.default,
        Modal: _Modal2.default,
        Tree: _Tree2.default,
        TagsManager: _TagsManager2.default,
        ReactGrid: _ReactGrid2.default,
        ReactTree: _ReactTree2.default,
        ReactModal: _ReactModal2.default,
        ReactTagsDisplay: _ReactTagsDisplay2.default
    };
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTY2MTNmNmE0ZTVjZTJlMDk2OTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0dyaWRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJSZWFjdEdyaWQiLCJwcm9wcyIsImNvbHMiLCJjb2x1bW5zIiwibWFwIiwiY29sIiwicm93cyIsImluaXRpYWxEYXRhIiwicm93Iiwic3RhdGUiLCJyYXdEYXRhIiwicHJldlNlbGVjdGVkUm93Iiwib3JkZXJCeSIsIm9yZGVyUmV2ZXJzZSIsImxvYWRpbmciLCJlbmFibGVkIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwiaWQiLCJyZW5kZXJDb2x1bW4iLCJiaW5kIiwibGVuZ3RoIiwicmVuZGVyUm93IiwiY29sdW1uIiwic3R5bGUiLCJ3aWR0aCIsIm5hbWUiLCJnZW5lcmF0ZUhlYWRlckNsaWNrIiwiZGlzcGxheU5hbWUiLCJyb3dDbGFzc05hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhlYWRlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyb290RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwYXRjaEV2ZW50Iiwib25Db2x1bW5IZWFkZXJDbGljayIsImkiLCJjb2xOYW1lIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJtdWx0aXNlbGVjdCIsInNldFN0YXRlIiwiY2VsbEV2ZW50IiwiY2VsbCIsIm9uQ2VsbENsaWNrIiwibmR4IiwiZ3JpZFJvd3MiLCJyYXdEYXRhUm93cyIsImV4dGVuZCIsIm5ld1Jvd3MiLCJzbGljZSIsIm5ld0RhdGEiLCJzb3J0QnkiLCJyZXQiLCJwdXNoIiwiZGVsZXRlUm93cyIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwidmFsdWUiLCJyYXdEYXRhSXRlbSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJmdW5jIiwic29ydGFibGUiLCJib29sIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdFRyZWUiLCJyb290IiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJyZW5kZXJJdGVtIiwiaXRlbSIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJzb3J0VHJlZSIsInRyZWUiLCJicmFuY2giLCJnZW5lcmF0ZUl0ZW1DbGljayIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1FdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsImZpbmRJdGVtSW5CcmFuY2hCeUlkIiwiZm91bmRJdGVtIiwia2V5cyIsImtleSIsImZpbmRJdGVtQnlJZCIsImV4cGFuZFRyZWUiLCJpdGVtcyIsIml0bSIsImluc3RhbmNlT2YiLCJSZWFjdE1vZGFsIiwidGl0bGUiLCJtZXNzYWdlIiwidmlzaWJsZSIsImNsb3NhYmxlIiwiYnV0dG9ucyIsImxhYmVsIiwic3VjY2VzcyIsIm9uU3VjY2VzcyIsIm9uUmVqZWN0Iiwib25Nb2RhbENsb3NlIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25Nb2RhbEJ1dHRvblByZXNzZWQiLCJSZWFjdFRhZ3NEaXNwbGF5IiwidGFncyIsInN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwiaGlkZGVuRmllbGRzQ29udGFpbmVyIiwibmV3VGFnSW5kZXgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlRm9jdXMiLCJyZW5kZXJUYWciLCJ0YWdzVGV4dExhYmVsIiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJyZW5kZXJTdWdnZXN0aW9uIiwidGFnIiwidGV4dCIsInJlbW92ZVRhZyIsInRhZ1JlZ0V4cCIsIlJlZ0V4cCIsInRhZ1BhcnRzIiwibWF0Y2giLCJpbm5lclRhZyIsInByZVRhZyIsInRhZ1RleHQiLCJwb3N0VGFnIiwib25TdWdnZXN0aW9uQ2xpY2siLCJ0cmltIiwiZW5kc1dpdGgiLCJzdWJzdHIiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsIm5ld0ZpZWxkVGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXBwZW5kIiwibmV3VGFnSWRzIiwidGFnSWQiLCJmb2N1cyIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZpZWxkSWQiLCJmaWVsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJzcGFuIiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJHcmlkIiwiZ3JpZCIsImdyaWRQcm9wcyIsImNvbnRhaW5lciIsInJlbmRlciIsImFkZFJvd3MiLCJzZXRSb3dzIiwiZ2V0U29ydCIsImdldFJvdyIsImdldFNlbGVjdGVkUm93cyIsImdldFNlbGVjdGVkUm93SWRzIiwiZ2V0Q29sdW1ucyIsInNldENvbHVtbnMiLCJnZXRCeUlkIiwiZGVsZXRlQnlJZCIsInVwZGF0ZVJvdyIsInVwZGF0ZUNlbGwiLCJjbGVhciIsInNldExvYWRpbmciLCJzZXRFbmFibGVkIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIlRyZWUiLCJ0cmVlUHJvcHMiLCJzZXREYXRhIiwiZ2V0U2VsZWN0ZWRJdGVtSWQiLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZXhwYW5kQWxsIiwiY29udHJhY3RBbGwiLCJNb2RhbCIsIm1vZGFsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZWplY3QiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRvcCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2tCdXR0b24iLCJnZXRZZXNCdXR0b24iLCJnZXROb0J1dHRvbiIsIlRhZ3NNYW5hZ2VyIiwidGFnc0NvbnRhaW5lciIsInRhZ0ZpZWxkTmFtZVByZWZpeCIsInRhZ0ZpZWxkcyIsImZpbmQiLCJjdXJyZW50VGFnSWQiLCJjdXJyZW50VGFnIiwiZWFjaCIsInRhZ0ZpZWxkIiwiTnVtYmVyIiwidGFnc0Rpc3BsYXkiLCJSZWFjdExpYiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHVCOzs7Ozs7QUNBQSx3Qjs7Ozs7O0FDQUEsMEI7Ozs7OztBQ0FBLDJCOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7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ZmlsZSI6IlJlYWN0TGliLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2NjEzZjZhNGU1Y2UyZTA5NjkzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gUHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvcFR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JpZFJvdyBmcm9tICcuLi9lczYvR3JpZFJvdyc7XG5pbXBvcnQgR3JpZENvbHVtbiBmcm9tICcuLi9lczYvR3JpZENvbHVtbic7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRTdGF0ZVxuICogQHByb3BlcnR5IHtPYmplY3RbXX0gcmF3RGF0YSBUaGUgcmF3IGRhdGEgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7R3JpZENvbHVtbltdfSBjb2x1bW5zIFRoZSBjb2x1bW5zIG9mIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRSb3dbXX0gcm93cyBUaGUgcm93cyBpbiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHByZXZTZWxlY3RlZFJvdyBUaGUgcHJldmlvdXNseSBzZWxlY3RlZCByb3dcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBjb2x1bW4gbmFtZSB0byBvcmRlciBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBvZiB0aGUgb3JkZXIgc2hvdWxkIGJlIHJldmVyc2VkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgZ3JpZCBzaG93cyBhIGxvYWRpbmcgc3Bpbm5lclxuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIGdyaWQgaXMgaW50ZXJhY3RpdmVcbiAqL1xuXG4vKipcbiAqIFNvcnQgZnVuY3Rpb24gY2FsbGJhY2ssIHNob3VsZCByZXR1cm4gLTEgaWYgYSBpcyBsb3dlciB0aGFuIGIsXG4gKiAwIGlmIHJvd3MgYXJlIGVxdWFsIGFuZCAxIGlmIGEgaXMgZ3JlYXRlciB0aGFuIGJcbiAqXG4gKiBAY2FsbGJhY2sgU29ydENhbGxiYWNrXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGEgUm93IGFcbiAqIEBwYXJhbSB7R3JpZFJvd30gYiBSb3cgYlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbi8qKlxuICogQ2xhc3NOYW1lIGNhbGxiYWNrLCBhIGZ1bmN0aW9uIHRvIHJldHVybiBhIGNsYXNzTmFtZSAoc3RyaW5nKVxuICogYmFzZWQgb24gcm93L2NvbHVtbiBpbmZvcm1hdGlvblxuICpcbiAqIEBjYWxsYmFjayBjbGFzc05hbWVDYWxsYmFja1xuICogQHBhcmFtIHsqfSByb3cgVGhlIHJvdyBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbHVtbl0gVGhlIGNvbHVtbiB3ZSdyZSByZW5kZXJpbmcgKGZvciBjZWxsIGNsYXNzTmFtZXMpXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdEdyaWQgcHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gR3JpZFByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPWdyaWRdIFRoZSBpZCBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtDb2x1bW5Qcm9wc1tdfSBjb2x1bW5zIFRoZSBjb2x1bW5zIGRlZmluaXRpb24gZm9yIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge1Jvd1Byb3BzW119IGluaXRpYWxEYXRhIFRoZSBpbml0aWFsIGRhdGEgdG8gcG9wdWxhdGUgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBjb2x1bW4gbmFtZSB0aGF0IHdlJ3JlIHNvcnRpbmcgZm9yXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtvcmRlclJldmVyc2U9ZmFsc2VdIFRydWUgaWYgd2UncmUgaW4gcmV2ZXJzZSBvcmRlclxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxTb3J0Q2FsbGJhY2s+fSBbc29ydGluZ3NdIEEgc2V0IG9mIHNvcnRpbmcgZnVuY3Rpb25zXG4gKiBAcHJvcGVydHkge2NsYXNzTmFtZUNhbGxiYWNrfSBbcm93Q2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgcm93XG4gKiBiYXNlZCBvbiBpdHMgZGF0YVxuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW2NlbGxDbGFzc05hbWVdIEEgY2FsbGJhY2sgdG8gc2V0IHRoZSBjbGFzc05hbWUgb2YgYSBjZWxsXG4gKiBiYXNlZCBvbiBpdHMgZGF0YVxuICogZm9yIGVhY2ggc29ydGFibGUgY29sdW1uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzZWxlY3RhYmxlPXRydWVdIFRydWUgaWYgdGhlIGdyaWQgaXMgc2VsZWN0YWJsZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbbXVsdGlzZWxlY3Q9ZmFsc2VdIFRydWUgaWYgd2Ugd2lsbCBlbmFibGUgbXVsdGlzZWxlY3QgaW4gdGhlIGdyaWRcbiAqL1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgcmVhY3QgZ3JpZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gcHJvcHMgUmVhY3QgcHJvcHNcbiAqIEBjbGFzcyBSZWFjdEdyaWRcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgR3JpZCBDb21wb25lbnQgY2xhc3NcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBjb2xzID0gdGhpcy5wcm9wcy5jb2x1bW5zLm1hcChjb2wgPT4gbmV3IEdyaWRDb2x1bW4oY29sKSk7XG4gICAgICAgIGNvbnN0IHJvd3MgPSB0aGlzLnByb3BzLmluaXRpYWxEYXRhLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdGF0ZSBvYmplY3QgZm9yIHRoZSBncmlkIGNvbXBvbmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBSZWFjdEdyaWQjc3RhdGVcbiAgICAgICAgICogQHR5cGUge0dyaWRTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByYXdEYXRhOiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgY29sdW1uczogY29scyxcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBwcmV2U2VsZWN0ZWRSb3c6IC0xLFxuICAgICAgICAgICAgb3JkZXJCeTogdGhpcy5wcm9wcy5vcmRlckJ5LFxuICAgICAgICAgICAgb3JkZXJSZXZlcnNlOiB0aGlzLnByb3BzLm9yZGVyUmV2ZXJzZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSByb3dzIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc29ydFJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydGluZ3NbdGhpcy5zdGF0ZS5vcmRlckJ5XTtcblxuICAgICAgICBpZiAodHlwZW9mIChzb3J0Rm4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3Muc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYHRhYmxlLXdyYXBwZXIke3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJyBkaXNhYmxlZCd9YDtcbiAgICAgICAgdGhpcy5zb3J0Um93cygpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPjx0cj57dGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCh0aGlzLnJlbmRlckNvbHVtbi5iaW5kKHRoaXMpKX08L3RyPjwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17dGhpcy5zdGF0ZS5jb2x1bW5zLmxlbmd0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5tYXAodGhpcy5yZW5kZXJSb3cuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIGNvbHVtbiBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2x1bW5cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDb2x1bW4oY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyB3aWR0aDogY29sdW1uLndpZHRoIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLm5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjb2x1bW4uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlSGVhZGVyQ2xpY2suYmluZCh0aGlzLCBjb2x1bW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSByb3cgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyUm93KHJvdykge1xuICAgICAgICBjb25zdCByb3dDbGFzc05hbWUgPSB0aGlzLnByb3BzLnJvd0NsYXNzTmFtZShyb3cuZGF0YSk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke3Jvd0NsYXNzTmFtZX0gJHtyb3cuc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9YDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGRpc3BsYXk6IHJvdy5zaG93ID8gJ3RhYmxlLXJvdycgOiAnbm9uZScgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAga2V5PXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDZWxsLmJpbmQodGhpcywgcm93KSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBzaW5nbGUgY2VsbCBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbFxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckNlbGwocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jZWxsQ2xhc3NOYW1lKHJvdy5kYXRhLCBjb2wpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbC53aWR0aCB9O1xuICAgICAgICBjb25zdCByb3dEYXRhID0gKHJvdy5kYXRhW2NvbC5uYW1lXSA/IHJvdy5kYXRhW2NvbC5uYW1lXS50b1N0cmluZygpIDogJycpO1xuICAgICAgICBjb25zdCBjb250ZW50cyA9IHR5cGVvZiBjb2wuZm9ybWF0ID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIGNvbC5mb3JtYXQuY2FsbCh0aGlzLCByb3cuZGF0YVtjb2wubmFtZV0sIHJvdykgOlxuICAgICAgICAgICAgcm93RGF0YTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAga2V5PXtgJHtyb3cuaWR9ICR7Y29sLm5hbWV9YH1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUNlbGxDbGljay5iaW5kKHRoaXMsIHJvdywgY29sLm5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0eXBlb2YgY29udGVudHMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMgOlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCwgY29udGVudHMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gdGhlIGdyaWQgaGVhZGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2x1bW5cbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFRoZSByZWFjdCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVIZWFkZXJDbGljayhjb2x1bW4sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoZWFkZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSGVhZGVyQ2xpY2snLCB7IGRldGFpbDogY29sdW1uIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGhlYWRlckV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Db2x1bW5IZWFkZXJDbGljayhjb2x1bW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBudW1lcmljIGluZGV4IGZvciBhIGdpdmVuIHJvdyBvYmplY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFJvd05keChyb3cpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uaWQgPT09IHJvdy5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBldmVudCB3aGVuIGEgY2xpY2sgaXMgbWFkZSBpbiBhIGNlbGxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlQ2VsbENsaWNrKHJvdywgY29sTmFtZSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvd05keCA9IHRoaXMuZ2V0Um93TmR4KHJvdyk7XG4gICAgICAgIGxldCB1cGRhdGVMYXN0Um93ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0T25lUm93ID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAhY3VyUm93LnNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKGlubmVyUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjdXJSb3cuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3RSb3dSYW5nZSA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0RnJvbSA9IE1hdGgubWluKHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldFRvID0gTWF0aC5tYXgocm93TmR4LCB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHNldEZyb207IGkgPD0gc2V0VG87IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjdXJSb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZSA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2UoY3VyUm93KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocm93TmR4ICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkgJiYgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RPbmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFJvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSb3dSYW5nZUV4Y2x1c2l2ZShyb3cpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgcm93LnNlbGVjdGVkID0gIXJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGFzdFJvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSAmJiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSb3dSYW5nZShyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiB1cGRhdGVMYXN0Um93ID8gcm93TmR4IDogdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3csXG4gICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdDZWxsQ2xpY2snLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbDogY29sTmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGNlbGxFdmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2VsbENsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhyb3csIGNvbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcm93cyB0byB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcm93cyA9IFtyb3dzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmR4KSB7XG4gICAgICAgICAgICBuZHggPSB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZFJvd3MgPSByb3dzLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG4gICAgICAgIGNvbnN0IHJhd0RhdGFSb3dzID0gcm93cy5tYXAocm93ID0+ICQuZXh0ZW5kKHRydWUsIHt9LCByb3cpKTtcblxuICAgICAgICBjb25zdCBuZXdSb3dzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi5ncmlkUm93cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4ucmF3RGF0YVJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogbmV3Um93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IG5ld0RhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXhpc3Rpbmcgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudCBhbmQgYWRkcyBuZXcgcm93cyBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcm93cyA9IFtyb3dzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBncmlkUm93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IHJhd0RhdGFSb3dzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBuZXdEYXRhID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UobmR4ICsgbGVuZ3RoKVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogbmV3Um93cyxcbiAgICAgICAgICAgIHJhd0RhdGE6IG5ld0RhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCByb3dzIGJ5IGEgc3BlY2lmaWMgY29sdW1uIG5hbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7U29ydFR5cGV9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMuc3RhdGUub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5zdGF0ZS5vcmRlclJldmVyc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByb3cgYXQgbmR4XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIGlmIChuZHggPCAwIHx8IG5keCA+PSB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbbmR4XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKG5ldyBHcmlkUm93KHRoaXMuc3RhdGUucm93c1tpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dJZHMoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2godGhpcy5zdGF0ZS5yb3dzW2ldLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZ3JpZCBjb2x1bW5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZENvbHVtbltdfVxuICAgICAqL1xuICAgIGdldENvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1uW119IGNvbHVtbnNcbiAgICAgKi9cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLm1hcChjb2wgPT4gbmV3IEdyaWRDb2x1bW4oY29sKSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byByZXRyaWV2ZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aGlzLnN0YXRlLnJvd3NbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3cuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmlkUm93KHJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgcm93IGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVSb3dzKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHJvdyBpZCB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgUGFydGlhbCBvciBmdWxsIHJvdyBkYXRhIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVJvdyhpZCwgZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93SXRlbSA9IHRoaXMuc3RhdGUucm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJhd0RhdGEgPSB0aGlzLnN0YXRlLnJhd0RhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3dJdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IG5ldyBHcmlkUm93KCQuZXh0ZW5kKHRydWUsIHJvd0l0ZW0uZGF0YSwgZGF0YSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Jhd0RhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcmF3RGF0YSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNwbGljZShpLCAxLCBuZXdSb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucmF3RGF0YS5zcGxpY2UoaSwgMSwgbmV3UmF3RGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB0aGlzLnN0YXRlLnJhd0RhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBjZWxsIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93SXRlbSA9IHRoaXMuc3RhdGUucm93c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJhd0RhdGFJdGVtID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByb3dJdGVtLmRhdGFbY29sTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICByYXdEYXRhSXRlbVtjb2xOYW1lXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWRcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogW10sXG4gICAgICAgICAgICByYXdEYXRhOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wVHlwZXMgZm9yIGdyaWQgY29tcG9uZW50XG4gKlxuICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICogQHR5cGUge0dyaWRQcm9wc31cbiAqIEBzdGF0aWNcbiAqL1xuUmVhY3RHcmlkLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICAgIH0pKSxcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgc2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbXVsdGlzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIG9yZGVyQnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3JkZXJSZXZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0aW5nczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5mdW5jKSxcbiAgICBvbkNvbHVtbkhlYWRlckNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNlbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcm93Q2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHByb3BlcnRpZXMgb2YgdGhlIFJlYWN0R3JpZCBjbGFzc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKi9cblJlYWN0R3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdncmlkJyxcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBvcmRlckJ5OiAnJyxcbiAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIG11bHRpc2VsZWN0OiBmYWxzZSxcbiAgICBvcmRlclJldmVyc2U6IGZhbHNlLFxuICAgIHNvcnRpbmdzOiB7fSxcbiAgICBpbml0aWFsRGF0YTogW10sXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogbnVsbCxcbiAgICBvbkNlbGxDbGljazogbnVsbCxcbiAgICByb3dDbGFzc05hbWU6ICgpID0+ICgnJyksXG4gICAgY2VsbENsYXNzTmFtZTogKCkgPT4gKCcnKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdFRyZWUgVHJlZUl0ZW0gb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVHJlZUl0ZW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIHVuaXF1ZSBpZCBvZiB0aGUgaXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBbcGFyZW50SWQ9MF0gVGhlIHBhcmVudCBpZCBvZiB0aGUgaXRlbVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSBjaGlsZHJlbiBUaGUgaXRlbSdzIGNoaWxkcmVuXG4gKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdFRyZWUgU3RhdGUgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RUcmVlU3RhdGVcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXX0gcm9vdCBUaGUgcm9vdCBpdGVtIGNvbnRhaW5pbmcgdHJlZSByb290IGNoaWxkcmVuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgZ3JpZCBpcyBpbiB0aGUgbG9hZGluZyBzdGF0ZVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gc2VsZWN0ZWRJdGVtIFRoZSBpZCBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLGJvb2xlYW4+fSBleHBhbmRlZElkcyBBIGNvbGxlY3Rpb24gb2YgdGhlIGlkcyBvZiBleHBhbmRlZCBjYXRlZ29yaWVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgdHJlZSBpcyBlbmFibGVkXG4gKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdFRyZWVQcm9wcyBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD10cmVlXVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZm9ybWF0XG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW118bnVsbH0gaW5pdGlhbERhdGFcbiAqIEBwcm9wZXJ0eSB7U29ydENhbGxiYWNrfG51bGx9IHNvcnRcbiAqL1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgUmVhY3RUcmVlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7UmVhY3RUcmVlUHJvcHN9IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RUcmVlXG4gKiBAY2xhc3NkZXNjIFJlYWN0IFRyZWUgY29tcG9uZW50IGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZVN0YXRlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJvb3Q6IHRoaXMucHJvcHMuaW5pdGlhbERhdGEsXG4gICAgICAgICAgICBleHBhbmRlZElkczoge30sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFjdFRyZWUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5lbmFibGVkID8gJycgOiAnZGlzYWJsZWQnfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID9cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPiA6XG4gICAgICAgICAgICAgICAgICAgIDx1bD57dGhpcy5zdGF0ZS5yb290Lm1hcCh0aGlzLnJlbmRlckl0ZW0uYmluZCh0aGlzKSl9PC91bD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSB0cmVlIGl0ZW0gYW5kIGl0cyBjaGlsZHJlblxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5zdGF0ZS5leHBhbmRlZElkc1tpdGVtLmlkXTtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgICAgICBjb25zdCBleHBhbmRTdGF0dXMgPSBleHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29udHJhY3RlZCc7XG4gICAgICAgIGNvbnN0IGl0ZW1FeHBhbmRDbGFzc05hbWUgPSBgZXhwYW5kICR7aXRlbS5jaGlsZHJlbi5sZW5ndGggPyBleHBhbmRTdGF0dXMgOiAnJ31gO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1FeHBhbmRDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZXhwYW5kQ29udHJhY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0SXRlbS5iaW5kKHRoaXMsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9ybWF0LmNhbGwobnVsbCwgaXRlbSl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogZXhwYW5kZWQgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNoaWxkcmVuLm1hcCh0aGlzLnJlbmRlckl0ZW0uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+IDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSB0cmVlIHNob3dzIG9ubHkgYSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgZGF0YSBvbiB0aGUgdHJlZSBhbmQgcmVtb3ZlcyBhbGwgcHJldmlvdXMgZGF0YVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gcm9vdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NvcnQ9dHJ1ZV1cbiAgICAgKi9cbiAgICBzZXREYXRhKHJvb3QsIHNvcnQgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnRUcmVlID0gKHRyZWUpID0+IHtcbiAgICAgICAgICAgIHRyZWUuZm9yRWFjaCgoYnJhbmNoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydFRyZWUoYnJhbmNoLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zb3J0KHRyZWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICBzb3J0VHJlZShyb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyBkYXRhIGluIGEgdHJlZSBicmFuY2hcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IHRyZWVcbiAgICAgKi9cbiAgICBzb3J0KHRyZWUpIHtcbiAgICAgICAgY29uc3Qgc29ydEZuID0gdGhpcy5wcm9wcy5zb3J0O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc29ydEZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cmVlLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdHMgYW4gaXRlbSBpbiB0aGUgdHJlZSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7RXZlbnR8bnVsbH0gZXZlbnRcbiAgICAgKi9cbiAgICBzZWxlY3RJdGVtKGlkLCBldmVudCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaWQgPyBudWxsIDogaWQ7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlSXRlbUNsaWNrKGV2ZW50LCBzZWxlY3RlZEl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkSXRlbUlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgfVxuXG4gICAgZXhwYW5kQ29udHJhY3RJdGVtKGlkLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5leHBhbmRlZElkcyk7XG5cbiAgICAgICAgICAgIGlmIChleHBhbmRlZFtpZF0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZXhwYW5kZWRbaWRdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZFtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZElkczogZXhwYW5kZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYW4gZXZlbnQgb24gUmVhY3RUcmVlIHJvb3QgZWxlbWVudCB0aGF0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdGVkSXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSXRlbUNsaWNrKGV2ZW50LCBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgaXRlbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdJdGVtQ2xpY2snLCB7IGRldGFpbDogeyBzZWxlY3RlZEl0ZW0gfSB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChpdGVtRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSB0byB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtLmlkICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0ucGFyZW50SWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSAnMCcgfHwgaXRlbS5wYXJlbnRJZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNhY2hlUm9vdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuY2ggPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaC5jaGlsZHJlbi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQoYnJhbmNoLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhbiBpdGVtIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgZm91bmRJdGVtID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0uaWQpO1xuXG4gICAgICAgIGlmIChmb3VuZEl0ZW0pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZvdW5kSXRlbSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2lkJyAmJiBrZXkgIT09ICdwYXJlbnRJZCcgJiYga2V5ICE9PSAnY2hpbGRyZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSXRlbVtrZXldID0gaXRlbVtrZXldID8gaXRlbVtrZXldIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgICAgICBsZXQgYnJhbmNoO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gMCB8fCBpdGVtLnBhcmVudElkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSBjYWNoZVJvb3Q7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKS5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJhbmNoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyYW5jaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2hbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyYW5jaC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290LFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpZCBvZiB0aGUgaXRlbVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZCh0aGlzLnN0YXRlLnJvb3QsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBpbiBpdGVtIGluIGEgdHJlZSBicmFuY2ggYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX1yb290XG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbXxudWxsfVxuICAgICAqL1xuICAgIGZpbmRJdGVtSW5CcmFuY2hCeUlkKHJvb3QsIGlkKSB7XG4gICAgICAgIGxldCByZXQgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJvb3RbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoaXRlbS5jaGlsZHJlbiwgaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxpY2F0ZXMgdGhlIHJvb3Qgb2JqZWN0IGZvciBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW1bXX1cbiAgICAgKi9cbiAgICByZXBsaWNhdGVSb290KCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm9vdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmV0LnB1c2goJC5leHRlbmQoe30sIHRoaXMuc3RhdGUucm9vdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHByb3BlcnR5IG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZXhwYW5kQWxsKCkge1xuICAgICAgICBjb25zdCBleHBhbmRUcmVlID0gKGl0ZW1zLCBleHBhbmRlZElkcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0bS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRJZHNbaXRtLmlkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZFRyZWUoaXRtLmNoaWxkcmVuLCBleHBhbmRlZElkcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWRJZHMgPSB7fTtcblxuICAgICAgICBleHBhbmRUcmVlKHRoaXMuc3RhdGUucm9vdCwgZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJhY3RzIGFsbCB0cmVlIGl0ZW1zXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29udHJhY3RBbGwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWFjdFRyZWUgcHJvcFR5cGVzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbml0aWFsRGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KSksXG4gICAgc29ydDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogUmVhY3RUcmVlIGRlZmF1bHQgcHJvcHNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICd0cmVlJyxcbiAgICBpbml0aWFsRGF0YTogW10sXG4gICAgc29ydDogbnVsbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUcmVlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxTdGF0ZVxuICogQHByb3BlcnR5IHtNb2RhbEJ1dHRvbltdfSBidXR0b25zXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt2aXNpYmxlXVxuICogQHByb3BlcnR5IHtib29sZWFufSBjbG9zYWJsZVxuICogQHByb3BlcnR5IHtNb2RhbENsb3NlQ2FsbGJhY2t9IFtvblN1Y2Nlc3NdXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uUmVqZWN0XVxuICovXG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIG1vZGFsIGNsb3NlIGV2ZW50c1xuICpcbiAqIEBjYWxsYmFjayBNb2RhbENsb3NlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25QcmVzc2VkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGFsQnV0dG9uXG4gKiBAcHJvcGVydHkge3N0cmluZ30ga2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWxcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsYXNzTmFtZVxuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0TW9kYWxcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgQ29tcG9uZW50IGZvciBhIG1vZGFsIGRpYWxvZ1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFJlYWN0TW9kYWwgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01vZGFsU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQWxlcnQgbWVzc2FnZScsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBhY3Rpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uU3VjY2VzcygpIHt9LFxuICAgICAgICAgICAgb25SZWplY3QoKSB7fVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgbW9kYWwgJHt0aGlzLnN0YXRlLnZpc2libGUgPyAndmlzaWJsZScgOiAnJ31gO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jbG9zYWJsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLm9uTW9kYWxDbG9zZS5iaW5kKHRoaXMpfT4geCA8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25zLm1hcCh0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtNb2RhbEJ1dHRvbn0gYnV0dG9uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQnV0dG9uKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17YnV0dG9uLmtleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk1vZGFsQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMsIGJ1dHRvbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbi5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb2RhbENsb3NlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoJ2Nsb3NlLWJ1dHRvbicsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNsaWNrZWQgb24gYSBtb2RhbCBidXR0b25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKi9cbiAgICBvbk1vZGFsQnV0dG9uUHJlc3NlZChidXR0b24sIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChidXR0b24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblN1Y2Nlc3MoYnV0dG9uLmtleSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uUmVqZWN0KGJ1dHRvbi5rZXksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdFbnRpdHlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IGlkXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSB0YWdJZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ3NTdGF0ZVxuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gdGFnc1xuICogQHByb3BlcnR5IHtUYWdFbnRpdHlbXX0gc3VnZ2VzdGlvbnNcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5XG4gKiBAY2xhc3NkZXNjIERpc3BsYXkgY2xhc3MgZm9yIHRhZyBlbGVtZW50c1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgVGFnc1N0YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGlkZGVuVGFncyA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFnSW5kZXggdG8gc2V0IGZvciB0aGUgbmV3IGhpZGRlbiBlbGVtZW50cyBpbiB0aGUgZm9ybVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCA9IHRoaXMuaGlkZGVuVGFncy5sZW5ndGggLyAyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHN1Z2dlc3Rpb25zIGJveCB0aW1lb3V0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWNoZSBmb3IgdGhlIHByZXZpb3VzIHZhbHVlIGJlZm9yZSBrZXlVcFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuY2xlYXJTdWdnZXN0aW9ucy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSB0YWcgY29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctbGlzdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhZ3MubWFwKHRoaXMucmVuZGVyVGFnLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4geyB0aGlzLmlucHV0ID0gaW5wdXQ7IH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ19zdWdnZXN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLm1hcCh0aGlzLnJlbmRlclN1Z2dlc3Rpb24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHNpbmdsZSB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclRhZyh0YWcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAga2V5PXt0YWcudGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFnLnRleHR9IDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5yZW1vdmVUYWcuYmluZCh0aGlzLCB0YWcpfT54PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSB0YWcgc3VnZ2VzdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyU3VnZ2VzdGlvbih0YWcpIHtcbiAgICAgICAgY29uc3QgdGFnUmVnRXhwID0gbmV3IFJlZ0V4cChgXiguKikoJHt0aGlzLmlucHV0LnZhbHVlfSkoLiopJGAsICdpJyk7XG4gICAgICAgIGNvbnN0IHRhZ1BhcnRzID0gdGFnLnRleHQubWF0Y2godGFnUmVnRXhwKTtcbiAgICAgICAgbGV0IGlubmVyVGFnID0gdGFnLnRleHQ7XG5cbiAgICAgICAgaWYgKHRhZ1BhcnRzICE9PSBudWxsICYmIHRhZ1BhcnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgY29uc3QgcHJlVGFnID0gdGFnUGFydHNbMV07XG4gICAgICAgICAgICBjb25zdCB0YWdUZXh0ID0gdGFnUGFydHNbMl07XG4gICAgICAgICAgICBjb25zdCBwb3N0VGFnID0gdGFnUGFydHNbM107XG5cbiAgICAgICAgICAgIGlubmVyVGFnID0gKDxzcGFuPntwcmVUYWd9PHN0cm9uZz57dGFnVGV4dH08L3N0cm9uZz57cG9zdFRhZ308L3NwYW4+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlubmVyVGFnID0gPHNwYW4+e3RhZy50ZXh0fTwvc3Bhbj47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBrZXk9e3RhZy50ZXh0fSBvbkNsaWNrPXt0aGlzLm9uU3VnZ2VzdGlvbkNsaWNrLmJpbmQodGhpcywgdGFnKX0+e2lubmVyVGFnfTwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdGFnIGJ5IHRleHQgb25seSAobmV3IHRhZylcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1RleHRcbiAgICAgKi9cbiAgICBhZGRUYWcodGFnVGV4dCkge1xuICAgICAgICAvLyB0cmltIGFuZCByZW1vdmUgdHJhaWxpbmcgc2VtaWNvbG9uc1xuICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC50cmltKCk7XG5cbiAgICAgICAgaWYgKHRhZ1RleHQuZW5kc1dpdGgoJywnKSkge1xuICAgICAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQuc3Vic3RyKDAsIHRhZ1RleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCBlbXB0eSB0YWdzXG4gICAgICAgIGlmICh0YWdUZXh0ID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgcmVwZWF0ZWQgdGFnc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFnc1tpXS50ZXh0ID09PSB0YWdUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ5IHRvIGdldCB0YWcgaWQgZnJvbSBzdWdnZXN0aW9uc1xuICAgICAgICBsZXQgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3VnZ2VzdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHRhZ1RleHQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbi5pZDtcbiAgICAgICAgICAgICAgICB0YWdUZXh0ID0gc3VnZ2VzdGlvbi50ZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3RmllbGRUZW1wbGF0ZSA9IHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3RvdHlwZScpXG4gICAgICAgICAgICAucmVwbGFjZSgvX19uYW1lX18vZywgdGhpcy5uZXdUYWdJbmRleC50b1N0cmluZygxMCkpO1xuXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggKz0gMTtcblxuICAgICAgICAkKHRoaXMucHJvcHMuaGlkZGVuRmllbGRzQ29udGFpbmVyKS5hcHBlbmQobmV3RmllbGRUZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0udmFsdWUgPSB0YWdJZEZyb21TdWdnZXN0aW9ucztcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS52YWx1ZSA9IHRhZ1RleHQ7XG5cbiAgICAgICAgY29uc3QgbmV3VGFnSWRzID1cbiAgICAgICAgICAgIGAke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMl0uaWR9fCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAxXS5pZH1gO1xuXG4gICAgICAgIHRoaXMuc3RhdGUudGFncy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgdGFnSWQ6IG5ld1RhZ0lkcyxcbiAgICAgICAgICAgIHRleHQ6IHRhZ1RleHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3MsXG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB0YWcgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHJlbW92ZVRhZyh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZHMgPSB0YWcudGFnSWQuc3BsaXQoJ3wnKTtcblxuICAgICAgICBmb3JtRmllbGRzLmZvckVhY2goKGZpZWxkSWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmllbGRJZCk7XG4gICAgICAgICAgICBmaWVsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZpZWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlVGFnID0gdGhpcy5zdGF0ZS50YWdzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVUYWcudGV4dCA9PT0gdGFnLnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBzdWdnZXN0aW9ucyB0aW1lb3V0IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdWdnZXN0aW9uVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgY2FsbCB0byBzdWdnZXN0aW9ucyBhbmQgdXBkYXRlcyB0aGUgc2V0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHVwZGF0ZVN1Z2dlc3Rpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ1JvdXRlID0gdGhpcy5wcm9wcy54aHJSb3V0ZUNhbGxiYWNrKHRoaXMuaW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHRhZ1JvdXRlLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhZ3MubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGtleSBwcmVzc2VzIG9uIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBuZWVkIHRvIGxvb2sgYXQgdGhlIHZhbHVlIHRoYXQgd2FzIG9uIHRoZSBpbnB1dCBCRUZPUkUgb25LZXlVcCB1cGRhdGVzIHRoZVxuICAgICAgICAgKiBpbnB1dCB2YWx1ZSwgYmVjYXVzZSB3ZSBvbmx5IHdhbnQgdG8gZGVsZXRlIHRoZSBwcmV2aW91cyB0YWcgaWYgdGhlIGlucHV0IFdBU1xuICAgICAgICAgKiBlbXB0eSBiZWZvcmUgcHJlc3NpbmcgQmFja3NwYWNlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiB0aGlzLnByZXZJbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRhZ3Muc3BsaWNlKHRoaXMuc3RhdGUudGFncy5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuaW5wdXQudmFsdWUucmVwbGFjZSgvXFxzL2csICcmbmJzcDsnKTtcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gYCR7c3Bhbi5vZmZzZXRXaWR0aH1weGA7XG4gICAgICAgIHRoaXMuYm9keS5yZW1vdmVDaGlsZChzcGFuKTtcblxuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEtleVByZXNzIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2dEtleSA9IGV2ZW50LmtleTtcblxuICAgICAgICBzd2l0Y2ggKGV2dEtleSkge1xuICAgICAgICBjYXNlICgnLCcpOlxuICAgICAgICBjYXNlICgnRW50ZXInKTpcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9ICc1cHgnO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBjbGlja3Mgb24gdGhlIHRhZ3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYSBzdWdnZXN0ZWQgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uU3VnZ2VzdGlvbkNsaWNrKHRhZywgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5hZGRUYWcodGFnLnRleHQpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWdnZXN0aW9ucyBvbiBkb2N1bWVudCBjbGlja1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNsZWFyU3VnZ2VzdGlvbnMoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3RhZ19zdWdnZXN0aW9ucycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblJlYWN0VGFnc0Rpc3BsYXkucHJvcFR5cGVzID0ge1xuICAgIGhpZGRlbkZpZWxkc0NvbnRhaW5lcjogUHJvcFR5cGVzLmluc3RhbmNlT2YoSFRNTEVsZW1lbnQpLmlzUmVxdWlyZWQsXG4gICAgdGFnc1RleHRMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB4aHJSb3V0ZUNhbGxiYWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5SZWFjdFRhZ3NEaXNwbGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0YWdzVGV4dExhYmVsOiAndGV4dCdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0R3JpZCBmcm9tICcuLi9qc3gvUmVhY3RHcmlkJztcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIGEgc29ydCBzdGF0ZVxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFNvcnRUeXBlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIHdlJ3JlIG9yZGVyaW5nIGJ5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yZGVyUmV2ZXJzZSBUcnVlIGlmIHRoZSBvcmRlciBpcyByZXZlcnNlZFxuICovXG5cbi8qKlxuICogR3JpZCBjbGFzcyBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7R3JpZFByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgZ3JpZFxuICogQGNsYXNzIEdyaWRcbiAqIEBjbGFzc2Rlc2MgR3JpZCBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCBncmlkc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGdyaWQgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI2dyaWRcbiAgICAgICAgICogQHR5cGUge1JlYWN0R3JpZH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgZ3JpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7R3JpZFByb3BzfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ncmlkUHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBHcmlkIENvbXBvbmVudCB3aXRoaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyIHRoZSBDb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0R3JpZCwgeyAuLi50aGlzLmdyaWRQcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25keF0gQW4gb3B0aW9uYWwgaW5kZXggaW50byB3aGljaCB0byBpbnNlcnQgdGhlIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dzKHJvd3MsIG5keCkge1xuICAgICAgICB0aGlzLmdyaWQuYWRkUm93cyhyb3dzLCBuZHgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIHNldFxuICAgICAqL1xuICAgIHNldFJvd3Mocm93cykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0Um93cyhyb3dzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBTdGFydGluZyBpbmRleCBpbnRvIHdoaWNoIHRvIGRlbGV0ZSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MV0gVGhlIG51bWJlciBvZiByb3dzIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0QnkgVGhlIGNvbHVtbiBuYW1lIHRvIHNvcnQgYnlcbiAgICAgKi9cbiAgICBzb3J0Qnkoc29ydEJ5KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zb3J0Qnkoc29ydEJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNvcnQgc2l0dWF0aW9uIG9mIGEgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7U29ydFR5cGV9XG4gICAgICovXG4gICAgZ2V0U29ydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTb3J0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFRoZSBpbmRleCBhdCB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm93XG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldFJvdyhuZHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRSb3cobmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCByb3dzIGFzIGFuIEFycmF5IG9mIEdyaWRSb3cgb2JqZWN0c1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlkcyBvZiB0aGUgc2VsZWN0ZWQgcm93cyBpbiB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRSb3dJZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dJZHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb2x1bW4gY29sbGVjdGlvblxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybnMge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGNvbHVtbnMgZHluYW1pY2FsbHlcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyByZXByZXNlbnRpbmcgdGhlIHJvdyBpZGVudGlmaWVkIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byByZXRyaWV2ZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0QnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlQnlJZChpZCkge1xuICAgICAgICB0aGlzLmdyaWQuZGVsZXRlQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHJvdyB3aXRoIG5ldyBkYXRhLCBsZWF2ZXMgcHJldmlvdXMgZmllbGRzIGludGFjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHJvdyBpZCB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgUGFydGlhbCBvciBmdWxsIHJvdyBkYXRhIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVJvdyhpZCwgZGF0YSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlUm93KGlkLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0aGUgY2VsbCBpcyBpblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gaWRlbnRpZmllZCB3aXRoIHRoZSBjZWxsXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY2VsbFxuICAgICAqL1xuICAgIHVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmdyaWQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBsb2FkaW5nXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLmdyaWQuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWQuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vKipcbiAqIFJvdyBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSByb3dcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSb3dQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF0gVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gKiBAcHJvcGVydHkgeyp9IGRhdGEgVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gKi9cblxuLyoqXG4gKiBHcmlkIFJvdyBDb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Um93UHJvcHN8R3JpZFJvd30gcHJvcHNcbiAqIEBjbGFzcyBHcmlkUm93XG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIFJvdyBpbiB0aGUgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFJvdyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzIGluc3RhbmNlb2YgR3JpZFJvdykge1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQgPyBwcm9wcy5pZCA6IEdyaWRSb3cuZ2V0TmV4dFJvd0lkKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRhdGEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgcHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgc2VsZWN0ZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzZWxlY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIG5vdCBmaWx0ZXJlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3Nob3dcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IHJvdyBpZFxuICpcbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkdyaWRSb3cuZ2V0TmV4dFJvd0lkID0gKCkgPT4gKGAncm93XyR7R3JpZFJvdy5uZXh0Um93SWQrK31gKTtcblxuLyoqXG4gKiBOZXh0IGlkIHJvdyBnZW5lcmF0b3JcbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqL1xuR3JpZFJvdy5uZXh0Um93SWQgPSAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkUm93LmpzIiwiLyoqXG4gKiBGb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhIGNlbGwgdmFsdWVcbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGluZ0NhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHZhbHVlIENlbGwgdmFsdWVcbiAqIEBwYXJhbSB7R3JpZFJvd30gcm93IFRoZSBlbnRpcmUgcm93XG4gKiBAcmV0dXJuIHtzdHJpbmd8SFRNTEVsZW1lbnR8UmVhY3QuQ29tcG9uZW50fVxuICovXG5cbi8qKlxuICogQ29sdW1uIHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIGNvbHVtblxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbHVtblByb3BzXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Rpc3BsYXlOYW1lXSBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbd2lkdGhdIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NsYXNzTmFtZV0gVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge0Zvcm1hdHRpbmdDYWxsYmFja30gW2Zvcm1hdF0gQSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciB0aGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NvcnRhYmxlXSBUcnVlIGlmIHRoZSBjb2x1bW4gaXMgc29ydGFibGVcbiAqL1xuXG4vKipcbiAqIEdyaWQgY29sdW1uIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtDb2x1bW5Qcm9wc30gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhlIGNvbHVtblxuICogQGNsYXNzIEdyaWRDb2x1bW5cbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgY29sdW1uIGluIGEgR3JpZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgY29uc3Qgc2V0V2lkdGggPSAod2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gL14oXFxkKStbcHh8JV0kLztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7d2lkdGh9cHhgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWxpZGF0ZS50ZXN0KHdpZHRoLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBhcyBjb21pbmcgZnJvbSBpbnB1dCBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI25hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Rpc3BsYXlOYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWUgPyBwcm9wcy5kaXNwbGF5TmFtZSA6IHRoaXMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiN3aWR0aFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53aWR0aCA9IHNldFdpZHRoKHByb3BzLndpZHRoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIGZvciB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jY2xhc3NOYW1lXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZm9ybWF0XG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbnx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcm1hdCA9IHByb3BzLmZvcm1hdDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3NvcnRhYmxlXG4gICAgICAgICAqIEB0eXBlIHtib29sfHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBwcm9wcy5zb3J0YWJsZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRDb2x1bW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuXG4vKipcbiAqIFRyZWUgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdHJlZVxuICogQGNsYXNzIFRyZWVcbiAqIEBjbGFzc2Rlc2MgVHJlZSBtYWluIGNsYXNzLCB1c2UgdGhpcyBjbGFzcyB0byBpbnRlcmZhY2Ugd2l0aCB0cmVlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyZWUgY29tcG9uZW50IHJlZmVyZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3RyZWVcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI2lkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gcHJvcHMuaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wcyBmb3IgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNwcm9wc1xuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWVQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlYWN0VHJlZSBDb21wb25lbnQgd2l0aGluIHRoZSB0cmVlIGNvbnRhaW5lclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy50cmVlID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmVlLCB7IC4uLnRoaXMudHJlZVByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgd2Ugc2hvdyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRMb2FkaW5nKGxvYWRpbmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgZGF0YSBvbiB0aGUgdHJlZS5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSBkYXRhIFRoZSByb290IGl0ZW0gbGlzdCBmb3IgdGhlIHRyZWUgd2l0aCBhbGwgaXRzIGNoaWxkcmVuXG4gICAgICovXG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXREYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW0gaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5nZXRTZWxlY3RlZEl0ZW1JZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvbiB0aGUgdHJlZSBiYXNlZCBpbiB0aGUgaXRlbSdzIHBhcmVudElkIHByb3BlcnR5XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gYWRkXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS5hZGRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUudXBkYXRlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaXRlbSBpZCB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVJdGVtQnlJZChpZCkge1xuICAgICAgICB0aGlzLnRyZWUuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW0gdG8gZmluZFxuICAgICAqL1xuICAgIGZpbmRJdGVtQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgVHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgVHJlZSBpcyBpbnRlcmFjdGl2ZVxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RW5hYmxlZChlbmFibGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHBhbmRzIGFsbCB0aGUgaXRlbXMgd2l0aCBjaGlsZHJlblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5leHBhbmRBbGwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRoZSBpdGVtcyBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmNvbnRyYWN0QWxsKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9UcmVlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuXG4vKipcbiAqIEBjbGFzcyBNb2RhbFxuICogQGNsYXNzZGVzYyBJbXBsZW1lbnRzIGEgbW9kYWwgY2xhc3MgYXMgYSBwcm9taXNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1JlYWN0TW9kYWx8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kYWwgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5tb2RhbCA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TW9kYWwsIHsgLi4udGhpcy5wcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIG1vZGFsIGFzIHByb21pc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWxTdGF0ZX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogQG1lbWJlck9mIE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgc2hvdyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoc3VjY2VzcywgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MgPSBzdWNjZXNzO1xuICAgICAgICAgICAgb3B0aW9ucy5vblJlamVjdCA9IHJlamVjdDtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5zZXRTdGF0ZShvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGAkeyh3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoKSAvIDJ9cHhgO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAyfXB4YDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBPayBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE9rQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdvaycsXG4gICAgbGFiZWw6ICdPaycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBZZXMgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRZZXNCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ3llcycsXG4gICAgbGFiZWw6ICdZZXMnLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgTm8gYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXROb0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnbm8nLFxuICAgIGxhYmVsOiAnTm8nLFxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tY2FuY2VsJ1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01vZGFsLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRhZ3NEaXNwbGF5IGZyb20gJy4uL2pzeC9SZWFjdFRhZ3NEaXNwbGF5JztcblxuLyoqXG4gKiBUYWdzTWFuYWdlciBDb25zdHJ1Y3RvciAtIExvYWRzIHRoZSB0YWdzIHByZXNlbnQgaW4gdGhlIGZvcm1cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoaWRkZW5GaWVsZHNDb250YWluZXIgLSBUaGUgY29udGFpbmVyIGZvciB0aGUgaGlkZGVuIGZpZWxkc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFnc0NvbnRhaW5lciAtIFRoZSBjb250YWluZXIgd2hlcmUgdGhlIHRhZ3Mgd2lsbCBiZSByZW5kZXJlZFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ0ZpZWxkTmFtZVByZWZpeCAtIFRoZSBmaWVsZCBuYW1lIG9mIHRoZSBoaWRkZW4gdGFnIGZpZWxkc1xuICogQHBhcmFtIHtzdHJpbmd9IHRhZ3NUZXh0TGFiZWwgLSBUaGUgZm9yIGF0dHJpYnV0ZSBmb3IgdGhlIHRhZ3MgbGFiZWxcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGh4clJvdXRlQ2FsbGJhY2sgLSBUaGUgcm91dGUgdG8gdGhlIHhociBBUEkgY2FsbCB0byBicmluZyBzdWdnZXN0aW9uc1xuICpcbiAqIEBjbGFzcyBUYWdzTWFuYWdlclxuICogQGNsYXNzZGVzYyBNYW5hZ2VyIGZvciB0YWcgZWRpdGluZyBpbiBwb3N0c1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWdzTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoaGlkZGVuRmllbGRzQ29udGFpbmVyLCB0YWdzQ29udGFpbmVyLCB0YWdGaWVsZE5hbWVQcmVmaXgsIHRhZ3NUZXh0TGFiZWwsIHhoclJvdXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtUYWdFbnRpdHlbXX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgICAgICAvLyBQcm9jZXNzIGV4aXN0aW5nIGZvcm0gZmllbGRzXG4gICAgICAgIGNvbnN0IHRhZ0ZpZWxkcyA9ICQuZmluZCgnaW5wdXRbdHlwZT1oaWRkZW5dJyk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRUYWdJZCA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50VGFnID0ge307XG5cbiAgICAgICAgJCh0YWdGaWVsZHMpLmVhY2goKG5keCwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RhZ0ZpZWxkTmFtZVByZWZpeH1cXFxcXyhcXFxcZCspXFxcXF8oaWR8dGV4dCkkYCk7XG4gICAgICAgICAgICBjb25zdCBbbGFiZWwsIHRhZ0lkLCB0YWdGaWVsZF0gPSBmaWVsZC5pZC5tYXRjaCh0YWdSZWdFeHApO1xuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHRhZ0lkKSAhPT0gY3VycmVudFRhZ0lkKSB7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKGN1cnJlbnRUYWcpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdJZCA9IE51bWJlcih0YWdJZCk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhZyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFnLnRhZ0lkID0gY3VycmVudFRhZy50YWdJZCA/XG4gICAgICAgICAgICAgICAgYCR7Y3VycmVudFRhZy50YWdJZH18JHtsYWJlbH1gIDpcbiAgICAgICAgICAgICAgICBsYWJlbDtcblxuICAgICAgICAgICAgY3VycmVudFRhZ1t0YWdGaWVsZF0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWcuaWQgJiYgY3VycmVudFRhZy50ZXh0KSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUYWdzRGlzcGxheSwge1xuICAgICAgICAgICAgaGlkZGVuRmllbGRzQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFnc1RleHRMYWJlbCxcbiAgICAgICAgICAgIHhoclJvdXRlQ2FsbGJhY2tcbiAgICAgICAgfSksIHRhZ3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnc1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwiaW1wb3J0IEdyaWQgZnJvbSAnLi4vZXM2L0dyaWQnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2VzNi9Nb2RhbCc7XG5pbXBvcnQgVGFnc01hbmFnZXIgZnJvbSAnLi4vZXM2L1RhZ3NNYW5hZ2VyJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7XG4gICAgICAgIEdyaWQsXG4gICAgICAgIE1vZGFsLFxuICAgICAgICBUcmVlLFxuICAgICAgICBUYWdzTWFuYWdlcixcbiAgICAgICAgUmVhY3RHcmlkLFxuICAgICAgICBSZWFjdFRyZWUsXG4gICAgICAgIFJlYWN0TW9kYWwsXG4gICAgICAgIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJzb3VyY2VSb290IjoiIn0=