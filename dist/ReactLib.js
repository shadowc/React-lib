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

    tagFields.forEach(function (field) {
        var tagRegExp = new RegExp('^' + tagFieldNamePrefix + '\\_(\\d+)\\_(id|text)$');
        var regExpResult = field.id.match(tagRegExp);

        if (regExpResult !== null) {
            var _regExpResult = _slicedToArray(regExpResult, 3),
                label = _regExpResult[0],
                tagId = _regExpResult[1],
                tagField = _regExpResult[2];

            if (Number(tagId) !== currentTagId) {
                tags.push(currentTag);
                currentTagId = Number(tagId);
                currentTag = {};
            }

            currentTag.tagId = currentTag.tagId ? currentTag.tagId + '|' + label : label;

            currentTag[tagField] = field.value;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzk1YTI2ZTY4YjlmYzY4NmY5NjMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0dyaWRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJSZWFjdEdyaWQiLCJwcm9wcyIsImNvbHMiLCJjb2x1bW5zIiwibWFwIiwiY29sIiwicm93cyIsImluaXRpYWxEYXRhIiwicm93Iiwic3RhdGUiLCJyYXdEYXRhIiwicHJldlNlbGVjdGVkUm93Iiwib3JkZXJCeSIsIm9yZGVyUmV2ZXJzZSIsImxvYWRpbmciLCJlbmFibGVkIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwiaWQiLCJyZW5kZXJDb2x1bW4iLCJiaW5kIiwibGVuZ3RoIiwicmVuZGVyUm93IiwiY29sdW1uIiwic3R5bGUiLCJ3aWR0aCIsIm5hbWUiLCJnZW5lcmF0ZUhlYWRlckNsaWNrIiwiZGlzcGxheU5hbWUiLCJyb3dDbGFzc05hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhlYWRlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyb290RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwYXRjaEV2ZW50Iiwib25Db2x1bW5IZWFkZXJDbGljayIsImkiLCJjb2xOYW1lIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJtdWx0aXNlbGVjdCIsInNldFN0YXRlIiwiY2VsbEV2ZW50IiwiY2VsbCIsIm9uQ2VsbENsaWNrIiwibmR4IiwiZ3JpZFJvd3MiLCJyYXdEYXRhUm93cyIsImV4dGVuZCIsIm5ld1Jvd3MiLCJzbGljZSIsIm5ld0RhdGEiLCJzb3J0QnkiLCJyZXQiLCJwdXNoIiwiZGVsZXRlUm93cyIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwidmFsdWUiLCJyYXdEYXRhSXRlbSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJmdW5jIiwic29ydGFibGUiLCJib29sIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdFRyZWUiLCJyb290IiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJyZW5kZXJJdGVtIiwiaXRlbSIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJzb3J0VHJlZSIsInRyZWUiLCJicmFuY2giLCJnZW5lcmF0ZUl0ZW1DbGljayIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1FdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsImZpbmRJdGVtSW5CcmFuY2hCeUlkIiwiZm91bmRJdGVtIiwia2V5cyIsImtleSIsImZpbmRJdGVtQnlJZCIsImV4cGFuZFRyZWUiLCJpdGVtcyIsIml0bSIsImluc3RhbmNlT2YiLCJSZWFjdE1vZGFsIiwidGl0bGUiLCJtZXNzYWdlIiwidmlzaWJsZSIsImNsb3NhYmxlIiwiYnV0dG9ucyIsImxhYmVsIiwic3VjY2VzcyIsIm9uU3VjY2VzcyIsIm9uUmVqZWN0Iiwib25Nb2RhbENsb3NlIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25Nb2RhbEJ1dHRvblByZXNzZWQiLCJSZWFjdFRhZ3NEaXNwbGF5IiwidGFncyIsInN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwiaGlkZGVuRmllbGRzQ29udGFpbmVyIiwibmV3VGFnSW5kZXgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlRm9jdXMiLCJyZW5kZXJUYWciLCJ0YWdzVGV4dExhYmVsIiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJyZW5kZXJTdWdnZXN0aW9uIiwidGFnIiwidGV4dCIsInJlbW92ZVRhZyIsInRhZ1JlZ0V4cCIsIlJlZ0V4cCIsInRhZ1BhcnRzIiwibWF0Y2giLCJpbm5lclRhZyIsInByZVRhZyIsInRhZ1RleHQiLCJwb3N0VGFnIiwib25TdWdnZXN0aW9uQ2xpY2siLCJ0cmltIiwiZW5kc1dpdGgiLCJzdWJzdHIiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsIm5ld0ZpZWxkVGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXBwZW5kIiwibmV3VGFnSWRzIiwidGFnSWQiLCJmb2N1cyIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZpZWxkSWQiLCJmaWVsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJzcGFuIiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJHcmlkIiwiZ3JpZCIsImdyaWRQcm9wcyIsImNvbnRhaW5lciIsInJlbmRlciIsImFkZFJvd3MiLCJzZXRSb3dzIiwiZ2V0U29ydCIsImdldFJvdyIsImdldFNlbGVjdGVkUm93cyIsImdldFNlbGVjdGVkUm93SWRzIiwiZ2V0Q29sdW1ucyIsInNldENvbHVtbnMiLCJnZXRCeUlkIiwiZGVsZXRlQnlJZCIsInVwZGF0ZVJvdyIsInVwZGF0ZUNlbGwiLCJjbGVhciIsInNldExvYWRpbmciLCJzZXRFbmFibGVkIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIlRyZWUiLCJ0cmVlUHJvcHMiLCJzZXREYXRhIiwiZ2V0U2VsZWN0ZWRJdGVtSWQiLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZXhwYW5kQWxsIiwiY29udHJhY3RBbGwiLCJNb2RhbCIsIm1vZGFsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZWplY3QiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRvcCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2tCdXR0b24iLCJnZXRZZXNCdXR0b24iLCJnZXROb0J1dHRvbiIsIlRhZ3NNYW5hZ2VyIiwidGFnc0NvbnRhaW5lciIsInRhZ0ZpZWxkTmFtZVByZWZpeCIsInRhZ0ZpZWxkcyIsImZpbmQiLCJjdXJyZW50VGFnSWQiLCJjdXJyZW50VGFnIiwicmVnRXhwUmVzdWx0IiwidGFnRmllbGQiLCJOdW1iZXIiLCJ0YWdzRGlzcGxheSIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7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YztBQU9kZ0Msd0NBUGM7QUFRZGM7QUFSYyxLQUFsQjtBQVVILEMiLCJmaWxlIjoiUmVhY3RMaWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzk1YTI2ZTY4YjlmYzY4NmY5NjMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBQcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9wVHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHcmlkUm93IGZyb20gJy4uL2VzNi9HcmlkUm93JztcbmltcG9ydCBHcmlkQ29sdW1uIGZyb20gJy4uL2VzNi9HcmlkQ29sdW1uJztcblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBSZWFjdEdyaWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gR3JpZFN0YXRlXG4gKiBAcHJvcGVydHkge09iamVjdFtdfSByYXdEYXRhIFRoZSByYXcgZGF0YSBpbiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkQ29sdW1uW119IGNvbHVtbnMgVGhlIGNvbHVtbnMgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7R3JpZFJvd1tdfSByb3dzIFRoZSByb3dzIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge251bWJlcn0gcHJldlNlbGVjdGVkUm93IFRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIHJvd1xuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIGNvbHVtbiBuYW1lIHRvIG9yZGVyIGJ5XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG9yZGVyUmV2ZXJzZSBUcnVlIG9mIHRoZSBvcmRlciBzaG91bGQgYmUgcmV2ZXJzZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIHNob3dzIGEgbG9hZGluZyBzcGlubmVyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGVuYWJsZWQgVHJ1ZSBpZiB0aGUgZ3JpZCBpcyBpbnRlcmFjdGl2ZVxuICovXG5cbi8qKlxuICogU29ydCBmdW5jdGlvbiBjYWxsYmFjaywgc2hvdWxkIHJldHVybiAtMSBpZiBhIGlzIGxvd2VyIHRoYW4gYixcbiAqIDAgaWYgcm93cyBhcmUgZXF1YWwgYW5kIDEgaWYgYSBpcyBncmVhdGVyIHRoYW4gYlxuICpcbiAqIEBjYWxsYmFjayBTb3J0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7R3JpZFJvd30gYSBSb3cgYVxuICogQHBhcmFtIHtHcmlkUm93fSBiIFJvdyBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblxuLyoqXG4gKiBDbGFzc05hbWUgY2FsbGJhY2ssIGEgZnVuY3Rpb24gdG8gcmV0dXJuIGEgY2xhc3NOYW1lIChzdHJpbmcpXG4gKiBiYXNlZCBvbiByb3cvY29sdW1uIGluZm9ybWF0aW9uXG4gKlxuICogQGNhbGxiYWNrIGNsYXNzTmFtZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHJvdyBUaGUgcm93IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sdW1uXSBUaGUgY29sdW1uIHdlJ3JlIHJlbmRlcmluZyAoZm9yIGNlbGwgY2xhc3NOYW1lcylcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBwcm9wcyBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9Z3JpZF0gVGhlIGlkIG9mIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0NvbHVtblByb3BzW119IGNvbHVtbnMgVGhlIGNvbHVtbnMgZGVmaW5pdGlvbiBmb3IgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Um93UHJvcHNbXX0gaW5pdGlhbERhdGEgVGhlIGluaXRpYWwgZGF0YSB0byBwb3B1bGF0ZSB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIGNvbHVtbiBuYW1lIHRoYXQgd2UncmUgc29ydGluZyBmb3JcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29yZGVyUmV2ZXJzZT1mYWxzZV0gVHJ1ZSBpZiB3ZSdyZSBpbiByZXZlcnNlIG9yZGVyXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLFNvcnRDYWxsYmFjaz59IFtzb3J0aW5nc10gQSBzZXQgb2Ygc29ydGluZyBmdW5jdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtyb3dDbGFzc05hbWVdIEEgY2FsbGJhY2sgdG8gc2V0IHRoZSBjbGFzc05hbWUgb2YgYSByb3dcbiAqIGJhc2VkIG9uIGl0cyBkYXRhXG4gKiBAcHJvcGVydHkge2NsYXNzTmFtZUNhbGxiYWNrfSBbY2VsbENsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGNlbGxcbiAqIGJhc2VkIG9uIGl0cyBkYXRhXG4gKiBmb3IgZWFjaCBzb3J0YWJsZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3NlbGVjdGFibGU9dHJ1ZV0gVHJ1ZSBpZiB0aGUgZ3JpZCBpcyBzZWxlY3RhYmxlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFttdWx0aXNlbGVjdD1mYWxzZV0gVHJ1ZSBpZiB3ZSB3aWxsIGVuYWJsZSBtdWx0aXNlbGVjdCBpbiB0aGUgZ3JpZFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSByZWFjdCBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7R3JpZFByb3BzfSBwcm9wcyBSZWFjdCBwcm9wc1xuICogQGNsYXNzIFJlYWN0R3JpZFxuICogQGNsYXNzZGVzYyBSZWFjdCBHcmlkIENvbXBvbmVudCBjbGFzc1xuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0R3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLnByb3BzLmNvbHVtbnMubWFwKGNvbCA9PiBuZXcgR3JpZENvbHVtbihjb2wpKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMucHJvcHMuaW5pdGlhbERhdGEubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0YXRlIG9iamVjdCBmb3IgdGhlIGdyaWQgY29tcG9uZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFJlYWN0R3JpZCNzdGF0ZVxuICAgICAgICAgKiBAdHlwZSB7R3JpZFN0YXRlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMucHJvcHMuaW5pdGlhbERhdGEsXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2xzLFxuICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogLTEsXG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnByb3BzLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMucHJvcHMub3JkZXJSZXZlcnNlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzb3J0Um93cygpIHtcbiAgICAgICAgY29uc3Qgc29ydEZuID0gdGhpcy5wcm9wcy5zb3J0aW5nc1t0aGlzLnN0YXRlLm9yZGVyQnldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgKHNvcnRGbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcmRlclJldmVyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgdGFibGUtd3JhcHBlciR7dGhpcy5zdGF0ZS5lbmFibGVkID8gJycgOiAnIGRpc2FibGVkJ31gO1xuICAgICAgICB0aGlzLnNvcnRSb3dzKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPnt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ29sdW1uLmJpbmQodGhpcykpfTwvdHI+PC90aGVhZD5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXt0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLm1hcCh0aGlzLnJlbmRlclJvdy5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgY29sdW1uIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbHVtblxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckNvbHVtbihjb2x1bW4pIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2x1bW4ud2lkdGggfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbHVtbi5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVIZWFkZXJDbGljay5iaW5kKHRoaXMsIGNvbHVtbil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbHVtbi5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHJvdyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJSb3cocm93KSB7XG4gICAgICAgIGNvbnN0IHJvd0NsYXNzTmFtZSA9IHRoaXMucHJvcHMucm93Q2xhc3NOYW1lKHJvdy5kYXRhKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7cm93Q2xhc3NOYW1lfSAke3Jvdy5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ31gO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgZGlzcGxheTogcm93LnNob3cgPyAndGFibGUtcm93JyA6ICdub25lJyB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICBrZXk9e3Jvdy5pZH1cbiAgICAgICAgICAgICAgICBpZD17cm93LmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCh0aGlzLnJlbmRlckNlbGwuYmluZCh0aGlzLCByb3cpKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHNpbmdsZSBjZWxsIGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ2VsbChyb3csIGNvbCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNlbGxDbGFzc05hbWUocm93LmRhdGEsIGNvbCk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyB3aWR0aDogY29sLndpZHRoIH07XG4gICAgICAgIGNvbnN0IHJvd0RhdGEgPSAocm93LmRhdGFbY29sLm5hbWVdID8gcm93LmRhdGFbY29sLm5hbWVdLnRvU3RyaW5nKCkgOiAnJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gdHlwZW9mIGNvbC5mb3JtYXQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgY29sLmZvcm1hdC5jYWxsKHRoaXMsIHJvdy5kYXRhW2NvbC5uYW1lXSwgcm93KSA6XG4gICAgICAgICAgICByb3dEYXRhO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICBrZXk9e2Ake3Jvdy5pZH0gJHtjb2wubmFtZX1gfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlQ2VsbENsaWNrLmJpbmQodGhpcywgcm93LCBjb2wubmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBjb250ZW50cyA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA6XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCBudWxsLCBjb250ZW50cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhbiBldmVudCB3aGVuIGEgY2xpY2sgaXMgbWFkZSBpbiB0aGUgZ3JpZCBoZWFkZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW59IGNvbHVtblxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUhlYWRlckNsaWNrKGNvbHVtbiwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdIZWFkZXJDbGljaycsIHsgZGV0YWlsOiBjb2x1bW4gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaGVhZGVyRXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db2x1bW5IZWFkZXJDbGljaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKGNvbHVtbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIG51bWVyaWMgaW5kZXggZm9yIGEgZ2l2ZW4gcm93IG9iamVjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Um93TmR4KHJvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5pZCA9PT0gcm93LmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIGEgY2VsbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWVcbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFRoZSByZWFjdCBldmVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVDZWxsQ2xpY2socm93LCBjb2xOYW1lLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm93TmR4ID0gdGhpcy5nZXRSb3dOZHgocm93KTtcbiAgICAgICAgbGV0IHVwZGF0ZUxhc3RSb3cgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzZWxlY3RPbmVSb3cgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9ICFjdXJSb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGN1clJvdy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdFJvd1JhbmdlID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRGcm9tID0gTWF0aC5taW4ocm93TmR4LCB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0VG8gPSBNYXRoLm1heChyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc2V0RnJvbTsgaSA8PSBzZXRUbzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1clJvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlID0gKGN1clJvdykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLmZvckVhY2goKGlubmVyUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5uZXJSb3cuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZWxlY3RSb3dSYW5nZShjdXJSb3cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyb3dOZHggIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSAmJiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWwgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdE9uZVJvdyhyb3cpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXN0Um93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlKHJvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSAmJiB0aGlzLnByb3BzLm11bHRpc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG11bHRpIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICByb3cuc2VsZWN0ZWQgPSAhcm93LnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXN0Um93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5ICYmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwcmV2U2VsZWN0ZWRSb3c6IHVwZGF0ZUxhc3RSb3cgPyByb3dOZHggOiB0aGlzLnN0YXRlLnByZXZTZWxlY3RlZFJvdyxcbiAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3NcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjZWxsRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0NlbGxDbGljaycsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsOiBjb2xOYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoY2VsbEV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DZWxsQ2xpY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKHJvdywgY29sTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBhZGRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW25keF0gQW4gb3B0aW9uYWwgaW5kZXggaW50byB3aGljaCB0byBpbnNlcnQgdGhlIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dzKHJvd3MsIG5keCkge1xuICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzID0gW3Jvd3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZHgpIHtcbiAgICAgICAgICAgIG5keCA9IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLmdyaWRSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBuZXdEYXRhID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi5yYXdEYXRhUm93cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZShuZHgpXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogbmV3RGF0YVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqL1xuICAgIHNldFJvd3Mocm93cykge1xuICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzID0gW3Jvd3NdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZFJvd3MgPSByb3dzLm1hcChyb3cgPT4gbmV3IEdyaWRSb3cocm93KSk7XG4gICAgICAgIGNvbnN0IHJhd0RhdGFSb3dzID0gcm93cy5tYXAocm93ID0+ICQuZXh0ZW5kKHRydWUsIHt9LCByb3cpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IGdyaWRSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogcmF3RGF0YVJvd3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBTdGFydGluZyBpbmRleCBpbnRvIHdoaWNoIHRvIGRlbGV0ZSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9MV0gVGhlIG51bWJlciBvZiByb3dzIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZVJvd3MobmR4LCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdSb3dzID0gW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yb3dzLnNsaWNlKDAsIG5keCksXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4ICsgbGVuZ3RoKVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICAgICAgcmF3RGF0YTogbmV3RGF0YVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3J0QnkgVGhlIGNvbHVtbiBuYW1lIHRvIHNvcnQgYnlcbiAgICAgKi9cbiAgICBzb3J0Qnkoc29ydEJ5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc29ydEJ5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNvcnQgc2l0dWF0aW9uIG9mIGEgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtTb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3JkZXJCeTogdGhpcy5zdGF0ZS5vcmRlckJ5LFxuICAgICAgICAgICAgb3JkZXJSZXZlcnNlOiB0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFRoZSBpbmRleCBhdCB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm93XG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldFJvdyhuZHgpIHtcbiAgICAgICAgaWYgKG5keCA8IDAgfHwgbmR4ID49IHRoaXMuc3RhdGUucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkUm93KHRoaXMuc3RhdGUucm93c1tuZHhdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCByb3dzIGFzIGFuIEFycmF5IG9mIEdyaWRSb3cgb2JqZWN0c1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3dbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2gobmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGlkcyBvZiB0aGUgc2VsZWN0ZWQgcm93cyBpbiB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd0lkcygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaCh0aGlzLnN0YXRlLnJvd3NbaV0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBncmlkIGNvbHVtbnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29sdW1ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGNvbHVtbnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMubWFwKGNvbCA9PiBuZXcgR3JpZENvbHVtbihjb2wpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyByZXByZXNlbnRpbmcgdGhlIHJvdyBpZGVudGlmaWVkIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuc3RhdGUucm93c1tpXTtcblxuICAgICAgICAgICAgaWYgKHJvdy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3cocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlQnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVJvd3MoaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHJvdyB3aXRoIG5ldyBkYXRhLCBsZWF2ZXMgcHJldmlvdXMgZmllbGRzIGludGFjdFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm93IGlkIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBQYXJ0aWFsIG9yIGZ1bGwgcm93IGRhdGEgdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlUm93KGlkLCBkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJdGVtID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gbmV3IEdyaWRSb3coJC5leHRlbmQodHJ1ZSwgcm93SXRlbS5kYXRhLCBkYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmF3RGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCByYXdEYXRhLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3Muc3BsaWNlKGksIDEsIG5ld1Jvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5yYXdEYXRhLnNwbGljZShpLCAxLCBuZXdSYXdEYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0aGUgY2VsbCBpcyBpblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xOYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gaWRlbnRpZmllZCB3aXRoIHRoZSBjZWxsXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY2VsbFxuICAgICAqL1xuICAgIHVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dJdGVtID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmF3RGF0YUl0ZW0gPSB0aGlzLnN0YXRlLnJhd0RhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChyb3dJdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJvd0l0ZW0uZGF0YVtjb2xOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJhd0RhdGFJdGVtW2NvbE5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogdGhpcy5zdGF0ZS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhOiB0aGlzLnN0YXRlLnJhd0RhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBbXSxcbiAgICAgICAgICAgIHJhd0RhdGE6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGdyaWRcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVuYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BUeXBlcyBmb3IgZ3JpZCBjb21wb25lbnRcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICogQHN0YXRpY1xuICovXG5SZWFjdEdyaWQucHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZGlzcGxheU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sXG4gICAgfSkpLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aXNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3JkZXJCeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcmRlclJldmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNvcnRpbmdzOiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmZ1bmMpLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2VsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIERlZmF1bHQgcHJvcGVydGllcyBvZiB0aGUgUmVhY3RHcmlkIGNsYXNzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICogQHN0YXRpY1xuICogQHR5cGUge0dyaWRQcm9wc31cbiAqL1xuUmVhY3RHcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ2dyaWQnLFxuICAgIGNvbHVtbnM6IFtdLFxuICAgIG9yZGVyQnk6ICcnLFxuICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgbXVsdGlzZWxlY3Q6IGZhbHNlLFxuICAgIG9yZGVyUmV2ZXJzZTogZmFsc2UsXG4gICAgc29ydGluZ3M6IHt9LFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBvbkNvbHVtbkhlYWRlckNsaWNrOiBudWxsLFxuICAgIG9uQ2VsbENsaWNrOiBudWxsLFxuICAgIHJvd0NsYXNzTmFtZTogKCkgPT4gKCcnKSxcbiAgICBjZWxsQ2xhc3NOYW1lOiAoKSA9PiAoJycpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdEdyaWQuanN4IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBUcmVlSXRlbSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmVlSXRlbVxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgdW5pcXVlIGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtwYXJlbnRJZD0wXSBUaGUgcGFyZW50IGlkIG9mIHRoZSBpdGVtXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IGNoaWxkcmVuIFRoZSBpdGVtJ3MgY2hpbGRyZW5cbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZSBTdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZWFjdFRyZWVTdGF0ZVxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfSByb290IFRoZSByb290IGl0ZW0gY29udGFpbmluZyB0cmVlIHJvb3QgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHRoZSBncmlkIGlzIGluIHRoZSBsb2FkaW5nIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBzZWxlY3RlZEl0ZW0gVGhlIGlkIG9mIHRoZSBzZWxlY3RlZCBpdGVtXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsYm9vbGVhbj59IGV4cGFuZGVkSWRzIEEgY29sbGVjdGlvbiBvZiB0aGUgaWRzIG9mIGV4cGFuZGVkIGNhdGVnb3JpZXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSB0cmVlIGlzIGVuYWJsZWRcbiAqL1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0VHJlZVByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVByb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkPXRyZWVdXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBmb3JtYXRcbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXXxudWxsfSBpbml0aWFsRGF0YVxuICogQHByb3BlcnR5IHtTb3J0Q2FsbGJhY2t8bnVsbH0gc29ydFxuICovXG5cbi8qKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBSZWFjdFRyZWUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gcHJvcHNcbiAqIEBjbGFzcyBSZWFjdFRyZWVcbiAqIEBjbGFzc2Rlc2MgUmVhY3QgVHJlZSBjb21wb25lbnQgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcm9vdDogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWN0VHJlZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICdkaXNhYmxlZCd9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGxvYWRpbmdcIj4mbmJzcDs8L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgICAgPHVsPnt0aGlzLnN0YXRlLnJvb3QubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX08L3VsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciBhIHRyZWUgaXRlbSBhbmQgaXRzIGNoaWxkcmVuXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzW2l0ZW0uaWRdO1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NOYW1lID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQgPyAnc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgIGNvbnN0IGV4cGFuZFN0YXR1cyA9IGV4cGFuZGVkID8gJ2V4cGFuZGVkJyA6ICdjb250cmFjdGVkJztcbiAgICAgICAgY29uc3QgaXRlbUV4cGFuZENsYXNzTmFtZSA9IGBleHBhbmQgJHtpdGVtLmNoaWxkcmVuLmxlbmd0aCA/IGV4cGFuZFN0YXR1cyA6ICcnfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUV4cGFuZENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRDb250cmFjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RJdGVtLmJpbmQodGhpcywgaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mb3JtYXQuY2FsbChudWxsLCBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBleHBhbmRlZCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVySXRlbS5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIHRyZWUgc2hvd3Mgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIG9uIHRoZSB0cmVlIGFuZCByZW1vdmVzIGFsbCBwcmV2aW91cyBkYXRhXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc29ydD10cnVlXVxuICAgICAqL1xuICAgIHNldERhdGEocm9vdCwgc29ydCA9IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc29ydFRyZWUgPSAodHJlZSkgPT4ge1xuICAgICAgICAgICAgdHJlZS5mb3JFYWNoKChicmFuY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VHJlZShicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNvcnQodHJlZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHNvcnRUcmVlKHJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnRzIGRhdGEgaW4gYSB0cmVlIGJyYW5jaFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gdHJlZVxuICAgICAqL1xuICAgIHNvcnQodHJlZSkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzb3J0Rm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRyZWUuc29ydChzb3J0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0cyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtFdmVudHxudWxsfSBldmVudFxuICAgICAqL1xuICAgIHNlbGVjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSBpZCA/IG51bGwgOiBpZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICB9XG5cbiAgICBleHBhbmRDb250cmFjdEl0ZW0oaWQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmV4cGFuZGVkSWRzKTtcblxuICAgICAgICAgICAgaWYgKGV4cGFuZGVkW2lkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBleHBhbmRlZFtpZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzOiBleHBhbmRlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbiBldmVudCBvbiBSZWFjdFRyZWUgcm9vdCBlbGVtZW50IHRoYXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWRJdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2VuZXJhdGVJdGVtQ2xpY2soZXZlbnQsIHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBpdGVtRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0l0ZW1DbGljaycsIHsgZGV0YWlsOiB7IHNlbGVjdGVkSXRlbSB9IH0pO1xuXG4gICAgICAgIGNvbnN0IHJvb3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcm9wcy5pZCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICByb290RWxlbS5kaXNwYXRjaEV2ZW50KGl0ZW1FdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBjYWNoZVJvb3QgPSB0aGlzLnJlcGxpY2F0ZVJvb3QoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0uaWQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgaXRlbS5wYXJlbnRJZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLmNoaWxkcmVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09ICcwJyB8fCBpdGVtLnBhcmVudElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLnBhcmVudElkKTtcblxuICAgICAgICAgICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLmNoaWxkcmVuLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChicmFuY2guY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlUm9vdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKGZvdW5kSXRlbSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaWQnICYmIGtleSAhPT0gJ3BhcmVudElkJyAmJiBrZXkgIT09ICdjaGlsZHJlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJdGVtW2tleV0gPSBpdGVtW2tleV0gPyBpdGVtW2tleV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3J0KGNhY2hlUm9vdCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5maW5kSXRlbUJ5SWQoaWQpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgICAgIGxldCBicmFuY2g7XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudElkID09PSAwIHx8IGl0ZW0ucGFyZW50SWQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGJyYW5jaCA9IGNhY2hlUm9vdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChicmFuY2gpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJhbmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJhbmNoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb290OiBjYWNoZVJvb3QsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW4gaXRlbSBpbiB0aGUgdHJlZSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSBpdGVtXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKHRoaXMuc3RhdGUucm9vdCwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGluIGl0ZW0gaW4gYSB0cmVlIGJyYW5jaCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfXJvb3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtfG51bGx9XG4gICAgICovXG4gICAgZmluZEl0ZW1JbkJyYW5jaEJ5SWQocm9vdCwgaWQpIHtcbiAgICAgICAgbGV0IHJldCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdFtpXTtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChpdGVtLmNoaWxkcmVuLCBpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGljYXRlcyB0aGUgcm9vdCBvYmplY3QgZm9yIGNoYW5nZXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbVtdfVxuICAgICAqL1xuICAgIHJlcGxpY2F0ZVJvb3QoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXQucHVzaCgkLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZS5yb290W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgcHJvcGVydHkgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlbmFibGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBleHBhbmRBbGwoKSB7XG4gICAgICAgIGNvbnN0IGV4cGFuZFRyZWUgPSAoaXRlbXMsIGV4cGFuZGVkSWRzKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZElkc1tpdG0uaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kVHJlZShpdG0uY2hpbGRyZW4sIGV4cGFuZGVkSWRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBleHBhbmRlZElkcyA9IHt9O1xuXG4gICAgICAgIGV4cGFuZFRyZWUodGhpcy5zdGF0ZS5yb290LCBleHBhbmRlZElkcyk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cmFjdHMgYWxsIHRyZWUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjb250cmFjdEFsbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZElkczoge31cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlYWN0VHJlZSBwcm9wVHlwZXNcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7UmVhY3RUcmVlUHJvcHN9XG4gKi9cblJlYWN0VHJlZS5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGluaXRpYWxEYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpKSxcbiAgICBzb3J0OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuLyoqXG4gKiBSZWFjdFRyZWUgZGVmYXVsdCBwcm9wc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZDogJ3RyZWUnLFxuICAgIGluaXRpYWxEYXRhOiBbXSxcbiAgICBzb3J0OiBudWxsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRyZWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNb2RhbFN0YXRlXG4gKiBAcHJvcGVydHkge01vZGFsQnV0dG9uW119IGJ1dHRvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNsb3NhYmxlXG4gKiBAcHJvcGVydHkge01vZGFsQ2xvc2VDYWxsYmFja30gW29uU3VjY2Vzc11cbiAqIEBwcm9wZXJ0eSB7TW9kYWxDbG9zZUNhbGxiYWNrfSBbb25SZWplY3RdXG4gKi9cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbW9kYWwgY2xvc2UgZXZlbnRzXG4gKlxuICogQGNhbGxiYWNrIE1vZGFsQ2xvc2VDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblByZXNzZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2Vzc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTW9kYWxCdXR0b25cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBrZXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbFxuICogQHByb3BlcnR5IHtib29sZWFufSBzdWNjZXNzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xhc3NOYW1lXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RNb2RhbFxuICogQGNsYXNzZGVzYyBSZWFjdCBDb21wb25lbnQgZm9yIGEgbW9kYWwgZGlhbG9nXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUmVhY3RNb2RhbCBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TW9kYWxTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0FsZXJ0JyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBbGVydCBtZXNzYWdlJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uIGFjdGlvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgb25TdWNjZXNzKCkge30sXG4gICAgICAgICAgICBvblJlamVjdCgpIHt9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBtb2RhbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBtb2RhbCAke3RoaXMuc3RhdGUudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICcnfWA7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsb3NhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyl9PiB4IDwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1dHRvbnMubWFwKHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9ufSBidXR0b25cbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJCdXR0b24oYnV0dG9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtidXR0b24ua2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTW9kYWxCdXR0b25QcmVzc2VkLmJpbmQodGhpcywgYnV0dG9uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uLmxhYmVsfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiB0aGUgY2xvc2UgbW9kYWxcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdE1vZGFsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vZGFsQ2xvc2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5vblJlamVjdCgnY2xvc2UtYnV0dG9uJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2xpY2tlZCBvbiBhIG1vZGFsIGJ1dHRvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b259IGJ1dHRvblxuICAgICAqL1xuICAgIG9uTW9kYWxCdXR0b25QcmVzc2VkKGJ1dHRvbiwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9uU3VjY2VzcyhidXR0b24ua2V5LCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25SZWplY3QoYnV0dG9uLmtleSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0TW9kYWwuanN4IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhZ0VudGl0eVxuICogQHByb3BlcnR5IHtudW1iZXJ8bnVsbH0gaWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHRhZ0lkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGV4dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnc1N0YXRlXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSB0YWdzXG4gKiBAcHJvcGVydHkge1RhZ0VudGl0eVtdfSBzdWdnZXN0aW9uc1xuICovXG5cbi8qKlxuICogQGNsYXNzIFJlYWN0VGFnc0Rpc3BsYXlcbiAqIEBjbGFzc2Rlc2MgRGlzcGxheSBjbGFzcyBmb3IgdGFnIGVsZW1lbnRzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWdzRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBUYWdzU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0YWdJbmRleCB0byBzZXQgZm9yIHRoZSBuZXcgaGlkZGVuIGVsZW1lbnRzIGluIHRoZSBmb3JtXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ID0gdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAvIDI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgc3VnZ2VzdGlvbnMgYm94IHRpbWVvdXRcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIGZvciB0aGUgcHJldmlvdXMgdmFsdWUgYmVmb3JlIGtleVVwXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5jbGVhclN1Z2dlc3Rpb25zLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHRhZyBjb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1saXN0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFncy5tYXAodGhpcy5yZW5kZXJUYWcuYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuaW5wdXQgPSBpbnB1dDsgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgPyB0aGlzLnByb3BzLnRhZ3NUZXh0TGFiZWwgOiAndGFncyd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnX3N1Z2dlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubWFwKHRoaXMucmVuZGVyU3VnZ2VzdGlvbi5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyVGFnKHRhZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBrZXk9e3RhZy50ZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWcudGV4dH0gPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnJlbW92ZVRhZy5iaW5kKHRoaXMsIHRhZyl9Png8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIHRhZyBzdWdnZXN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJTdWdnZXN0aW9uKHRhZykge1xuICAgICAgICBjb25zdCB0YWdSZWdFeHAgPSBuZXcgUmVnRXhwKGBeKC4qKSgke3RoaXMuaW5wdXQudmFsdWV9KSguKikkYCwgJ2knKTtcbiAgICAgICAgY29uc3QgdGFnUGFydHMgPSB0YWcudGV4dC5tYXRjaCh0YWdSZWdFeHApO1xuICAgICAgICBsZXQgaW5uZXJUYWcgPSB0YWcudGV4dDtcblxuICAgICAgICBpZiAodGFnUGFydHMgIT09IG51bGwgJiYgdGFnUGFydHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICBjb25zdCBwcmVUYWcgPSB0YWdQYXJ0c1sxXTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1RleHQgPSB0YWdQYXJ0c1syXTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RUYWcgPSB0YWdQYXJ0c1szXTtcblxuICAgICAgICAgICAgaW5uZXJUYWcgPSAoPHNwYW4+e3ByZVRhZ308c3Ryb25nPnt0YWdUZXh0fTwvc3Ryb25nPntwb3N0VGFnfTwvc3Bhbj4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5uZXJUYWcgPSA8c3Bhbj57dGFnLnRleHR9PC9zcGFuPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGtleT17dGFnLnRleHR9IG9uQ2xpY2s9e3RoaXMub25TdWdnZXN0aW9uQ2xpY2suYmluZCh0aGlzLCB0YWcpfT57aW5uZXJUYWd9PC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0YWcgYnkgdGV4dCBvbmx5IChuZXcgdGFnKVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnVGV4dFxuICAgICAqL1xuICAgIGFkZFRhZyh0YWdUZXh0KSB7XG4gICAgICAgIC8vIHRyaW0gYW5kIHJlbW92ZSB0cmFpbGluZyBzZW1pY29sb25zXG4gICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnRyaW0oKTtcblxuICAgICAgICBpZiAodGFnVGV4dC5lbmRzV2l0aCgnLCcpKSB7XG4gICAgICAgICAgICB0YWdUZXh0ID0gdGFnVGV4dC5zdWJzdHIoMCwgdGFnVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIGVtcHR5IHRhZ3NcbiAgICAgICAgaWYgKHRhZ1RleHQgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhdm9pZCByZXBlYXRlZCB0YWdzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzW2ldLnRleHQgPT09IHRhZ1RleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cnkgdG8gZ2V0IHRhZyBpZCBmcm9tIHN1Z2dlc3Rpb25zXG4gICAgICAgIGxldCB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbiA9IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChzdWdnZXN0aW9uLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdGFnVGV4dC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgdGFnSWRGcm9tU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9uLmlkO1xuICAgICAgICAgICAgICAgIHRhZ1RleHQgPSBzdWdnZXN0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdGaWVsZFRlbXBsYXRlID0gdGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdG90eXBlJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX25hbWVfXy9nLCB0aGlzLm5ld1RhZ0luZGV4LnRvU3RyaW5nKDEwKSk7XG5cbiAgICAgICAgdGhpcy5uZXdUYWdJbmRleCArPSAxO1xuXG4gICAgICAgICQodGhpcy5wcm9wcy5oaWRkZW5GaWVsZHNDb250YWluZXIpLmFwcGVuZChuZXdGaWVsZFRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS52YWx1ZSA9IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLnZhbHVlID0gdGFnVGV4dDtcblxuICAgICAgICBjb25zdCBuZXdUYWdJZHMgPVxuICAgICAgICAgICAgYCR7dGhpcy5oaWRkZW5UYWdzW3RoaXMuaGlkZGVuVGFncy5sZW5ndGggLSAyXS5pZH18JHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDFdLmlkfWA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICB0YWdJZDogbmV3VGFnSWRzLFxuICAgICAgICAgICAgdGV4dDogdGFnVGV4dFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFncyxcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHRhZyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgcmVtb3ZlVGFnKHRhZywgZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybUZpZWxkcyA9IHRhZy50YWdJZC5zcGxpdCgnfCcpO1xuXG4gICAgICAgIGZvcm1GaWVsZHMuZm9yRWFjaCgoZmllbGRJZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaWVsZElkKTtcbiAgICAgICAgICAgIGZpZWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmllbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUudGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVUYWcgPSB0aGlzLnN0YXRlLnRhZ3NbaV07XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZVRhZy50ZXh0ID09PSB0YWcudGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHN1Z2dlc3Rpb25zIHRpbWVvdXQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBjYWxsIHRvIHN1Z2dlc3Rpb25zIGFuZCB1cGRhdGVzIHRoZSBzZXRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgdXBkYXRlU3VnZ2VzdGlvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFnUm91dGUgPSB0aGlzLnByb3BzLnhoclJvdXRlQ2FsbGJhY2sodGhpcy5pbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAkLmFqYXgodGFnUm91dGUsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFncy5tYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB0YWdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8ga2V5IHByZXNzZXMgb24gdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIG5lZWQgdG8gbG9vayBhdCB0aGUgdmFsdWUgdGhhdCB3YXMgb24gdGhlIGlucHV0IEJFRk9SRSBvbktleVVwIHVwZGF0ZXMgdGhlXG4gICAgICAgICAqIGlucHV0IHZhbHVlLCBiZWNhdXNlIHdlIG9ubHkgd2FudCB0byBkZWxldGUgdGhlIHByZXZpb3VzIHRhZyBpZiB0aGUgaW5wdXQgV0FTXG4gICAgICAgICAqIGVtcHR5IGJlZm9yZSBwcmVzc2luZyBCYWNrc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnICYmIHRoaXMucHJldklucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGFncy5zcGxpY2UodGhpcy5zdGF0ZS50YWdzLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YWdzOiB0aGlzLnN0YXRlLnRhZ3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5pbnB1dC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJyZuYnNwOycpO1xuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBgJHtzcGFuLm9mZnNldFdpZHRofXB4YDtcbiAgICAgICAgdGhpcy5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pO1xuXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogS2V5UHJlc3MgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZ0S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgICAgIHN3aXRjaCAoZXZ0S2V5KSB7XG4gICAgICAgIGNhc2UgKCcsJyk6XG4gICAgICAgIGNhc2UgKCdFbnRlcicpOlxuICAgICAgICAgICAgdGhpcy5hZGRUYWcodGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gJzVweCc7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RzIHRvIGNsaWNrcyBvbiB0aGUgdGFncyBpbnB1dFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhIHN1Z2dlc3RlZCB0YWdcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25TdWdnZXN0aW9uQ2xpY2sodGFnLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmFkZFRhZyh0YWcudGV4dCk7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1Z2dlc3Rpb25zIG9uIGRvY3VtZW50IGNsaWNrXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xlYXJTdWdnZXN0aW9ucyhldmVudCkge1xuICAgICAgICBsZXQgY3VycmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudFRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lID09PSAndGFnX3N1Z2dlc3Rpb25zJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuUmVhY3RUYWdzRGlzcGxheS5wcm9wVHlwZXMgPSB7XG4gICAgaGlkZGVuRmllbGRzQ29udGFpbmVyOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihIVE1MRWxlbWVudCkuaXNSZXF1aXJlZCxcbiAgICB0YWdzVGV4dExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHhoclJvdXRlQ2FsbGJhY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cblJlYWN0VGFnc0Rpc3BsYXkuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhZ3NUZXh0TGFiZWw6ICd0ZXh0J1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RUYWdzRGlzcGxheS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RHcmlkIGZyb20gJy4uL2pzeC9SZWFjdEdyaWQnO1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgYSBzb3J0IHN0YXRlXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gU29ydFR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gd2UncmUgb3JkZXJpbmcgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgaWYgdGhlIG9yZGVyIGlzIHJldmVyc2VkXG4gKi9cblxuLyoqXG4gKiBHcmlkIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBncmlkXG4gKiBAY2xhc3MgR3JpZFxuICogQGNsYXNzZGVzYyBHcmlkIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIGdyaWRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZ3JpZCBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjZ3JpZFxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RHcmlkfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgZ3JpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWRQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIEdyaWQgQ29tcG9uZW50IHdpdGhpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RHcmlkLCB7IC4uLnRoaXMuZ3JpZFByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcm93cyB0byB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5hZGRSb3dzKHJvd3MsIG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXhpc3Rpbmcgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudCBhbmQgYWRkcyBuZXcgcm93cyBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gc2V0XG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRSb3dzKHJvd3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLmdyaWQuZGVsZXRlUm93cyhuZHgsIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCByb3dzIGJ5IGEgc3BlY2lmaWMgY29sdW1uIG5hbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNvcnRCeShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtTb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByb3cgYXQgbmR4XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFJvdyhuZHgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3dbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd0lkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd0lkcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbHVtbiBjb2xsZWN0aW9uXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7R3JpZENvbHVtbltdfVxuICAgICAqL1xuICAgIGdldENvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Q29sdW1ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1ucyBkeW5hbWljYWxseVxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1uW119IGNvbHVtbnNcbiAgICAgKi9cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgcm93IGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm93IGlkIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBQYXJ0aWFsIG9yIGZ1bGwgcm93IGRhdGEgdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlUm93KGlkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGVSb3coaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBjZWxsIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUm93IHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIHJvd1xuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJvd1Byb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkXSBUaGUgdW5pcXVlIGlkIG9mIHRoZSByb3dcbiAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSBUaGUgcmF3IGRhdGEgZm9yIHRoZSByb3dcbiAqL1xuXG4vKipcbiAqIEdyaWQgUm93IENvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSb3dQcm9wc3xHcmlkUm93fSBwcm9wc1xuICogQGNsYXNzIEdyaWRSb3dcbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgUm93IGluIHRoZSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkUm93IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgaW5zdGFuY2VvZiBHcmlkUm93KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZCA/IHByb3BzLmlkIDogR3JpZFJvdy5nZXROZXh0Um93SWQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2RhdGFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlIHJvdyBpcyBzZWxlY3RlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3NlbGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgbm90IGZpbHRlcmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjc2hvd1xuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgcm93IGlkXG4gKlxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuR3JpZFJvdy5nZXROZXh0Um93SWQgPSAoKSA9PiAoYCdyb3dfJHtHcmlkUm93Lm5leHRSb3dJZCsrfWApO1xuXG4vKipcbiAqIE5leHQgaWQgcm93IGdlbmVyYXRvclxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAbWVtYmVyT2YgR3JpZFJvd1xuICogQHN0YXRpY1xuICovXG5HcmlkUm93Lm5leHRSb3dJZCA9IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRSb3cuanMiLCIvKipcbiAqIEZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIGEgY2VsbCB2YWx1ZVxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0aW5nQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ2VsbCB2YWx1ZVxuICogQHBhcmFtIHtHcmlkUm93fSByb3cgVGhlIGVudGlyZSByb3dcbiAqIEByZXR1cm4ge3N0cmluZ3xIVE1MRWxlbWVudHxSZWFjdC5Db21wb25lbnR9XG4gKi9cblxuLyoqXG4gKiBDb2x1bW4gcHJvcGVydGllcyBvYmplY3QgdG8gZGVmaW5lIGEgY29sdW1uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sdW1uUHJvcHNcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZGlzcGxheU5hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt3aWR0aF0gQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xhc3NOYW1lXSBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7Rm9ybWF0dGluZ0NhbGxiYWNrfSBbZm9ybWF0XSBBIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIHRoZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbc29ydGFibGVdIFRydWUgaWYgdGhlIGNvbHVtbiBpcyBzb3J0YWJsZVxuICovXG5cbi8qKlxuICogR3JpZCBjb2x1bW4gY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0NvbHVtblByb3BzfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29sdW1uXG4gKiBAY2xhc3MgR3JpZENvbHVtblxuICogQGNsYXNzZGVzYyBDbGFzcyByZXByZXNlbnRpbmcgYSBjb2x1bW4gaW4gYSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzZXRXaWR0aCA9ICh3aWR0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGUgPSAvXihcXGQpK1tweHwlXSQvO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRlLnRlc3Qod2lkdGgudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZGlzcGxheU5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZSA/IHByb3BzLmRpc3BsYXlOYW1lIDogdGhpcy5uYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBIVE1MIHZhbHVlIGZvciB3aWR0aCAoZWl0aGVyIHBpeGVscyBvciBwZXJjZW50YWdlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3dpZHRoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0V2lkdGgocHJvcHMud2lkdGgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNjbGFzc05hbWVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG9wdGlvbmFsIGZvcm1hdHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNmb3JtYXRcbiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jc29ydGFibGVcbiAgICAgICAgICogQHR5cGUge2Jvb2x8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zb3J0YWJsZSA9IHByb3BzLnNvcnRhYmxlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRyZWUgZnJvbSAnLi4vanN4L1JlYWN0VHJlZSc7XG5cbi8qKlxuICogVHJlZSBjbGFzcyBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7UmVhY3RUcmVlUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB0cmVlXG4gKiBAY2xhc3MgVHJlZVxuICogQGNsYXNzZGVzYyBUcmVlIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIHRyZWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJlZSBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjdHJlZVxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RUcmVlfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgdHJlZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBUcmVlI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJlZVByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUmVhY3RUcmVlIENvbXBvbmVudCB3aXRoaW4gdGhlIHRyZWUgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnRyZWUgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFRyZWUsIHsgLi4udGhpcy50cmVlUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB3ZSBzaG93IG9ubHkgYSBsb2FkaW5nIHNwaW5uZXJcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBkYXRhIG9uIHRoZSB0cmVlLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IGRhdGEgVGhlIHJvb3QgaXRlbSBsaXN0IGZvciB0aGUgdHJlZSB3aXRoIGFsbCBpdHMgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldERhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgaXRlbSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkSXRlbUlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVlLmdldFNlbGVjdGVkSXRlbUlkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9uIHRoZSB0cmVlIGJhc2VkIGluIHRoZSBpdGVtJ3MgcGFyZW50SWQgcHJvcGVydHlcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byBhZGRcbiAgICAgKi9cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLmFkZEl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhbiBpdGVtIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW0gVGhlIGl0ZW0gdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMudHJlZS51cGRhdGVJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpdGVtIGlkIHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHRoaXMudHJlZS5kZWxldGVJdGVtQnlJZChpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHJldHVybnMgYW4gaXRlbSBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSBpZCBvZiB0aGUgaXRlbSB0byBmaW5kXG4gICAgICovXG4gICAgZmluZEl0ZW1CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZmluZEl0ZW1CeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBUcmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBUcmVlIGlzIGludGVyYWN0aXZlXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMudHJlZS5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZHMgYWxsIHRoZSBpdGVtcyB3aXRoIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgdGhpcy50cmVlLmV4cGFuZEFsbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdGhlIGl0ZW1zIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnRyZWUuY29udHJhY3RBbGwoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RyZWUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICcuLi9qc3gvUmVhY3RNb2RhbCc7XG5cbi8qKlxuICogQGNsYXNzIE1vZGFsXG4gKiBAY2xhc3NkZXNjIEltcGxlbWVudHMgYSBtb2RhbCBjbGFzcyBhcyBhIHByb21pc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICAgIC8qKlxuICAgICAqIE1vZGFsIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RNb2RhbHxudWxsfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2RhbCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICAgKiBAbWVtYmVyT2YgTW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLm1vZGFsID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNb2RhbCwgeyAuLi50aGlzLnByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgbW9kYWwgYXMgcHJvbWlzZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbFN0YXRlfSBvcHRpb25zXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKiBAbWVtYmVyT2YgTW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzaG93KG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChzdWNjZXNzLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyA9IHN1Y2Nlc3M7XG4gICAgICAgICAgICBvcHRpb25zLm9uUmVqZWN0ID0gcmVqZWN0O1xuXG4gICAgICAgICAgICB0aGlzLm1vZGFsLnNldFN0YXRlKG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7KHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgpIC8gMn1weGA7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHsod2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0KSAvIDJ9cHhgO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIE9rIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0T2tCdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ29rJyxcbiAgICBsYWJlbDogJ09rJyxcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tYWN0aW9uJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIFllcyBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldFllc0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAneWVzJyxcbiAgICBsYWJlbDogJ1llcycsXG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWFjdGlvbidcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBObyBidXR0b24gdGVtcGxhdGVcbiAqIEByZXR1cm4ge01vZGFsQnV0dG9ufVxuICogQG1lbWJlck9mIE1vZGFsXG4gKiBAc3RhdGljXG4gKi9cbk1vZGFsLmdldE5vQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICdubycsXG4gICAgbGFiZWw6ICdObycsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1jYW5jZWwnXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvTW9kYWwuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG4vKipcbiAqIFRhZ3NNYW5hZ2VyIENvbnN0cnVjdG9yIC0gTG9hZHMgdGhlIHRhZ3MgcHJlc2VudCBpbiB0aGUgZm9ybVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhpZGRlbkZpZWxkc0NvbnRhaW5lciAtIFRoZSBjb250YWluZXIgZm9yIHRoZSBoaWRkZW4gZmllbGRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWdzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciB3aGVyZSB0aGUgdGFncyB3aWxsIGJlIHJlbmRlcmVkXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnRmllbGROYW1lUHJlZml4IC0gVGhlIGZpZWxkIG5hbWUgb2YgdGhlIGhpZGRlbiB0YWcgZmllbGRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnc1RleHRMYWJlbCAtIFRoZSBmb3IgYXR0cmlidXRlIGZvciB0aGUgdGFncyBsYWJlbFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaHhyUm91dGVDYWxsYmFjayAtIFRoZSByb3V0ZSB0byB0aGUgeGhyIEFQSSBjYWxsIHRvIGJyaW5nIHN1Z2dlc3Rpb25zXG4gKlxuICogQGNsYXNzIFRhZ3NNYW5hZ2VyXG4gKiBAY2xhc3NkZXNjIE1hbmFnZXIgZm9yIHRhZyBlZGl0aW5nIGluIHBvc3RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3NNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihoaWRkZW5GaWVsZHNDb250YWluZXIsIHRhZ3NDb250YWluZXIsIHRhZ0ZpZWxkTmFtZVByZWZpeCwgdGFnc1RleHRMYWJlbCwgeGhyUm91dGVDYWxsYmFjaykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1RhZ0VudGl0eVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGFncyA9IFtdO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgZXhpc3RpbmcgZm9ybSBmaWVsZHNcbiAgICAgICAgY29uc3QgdGFnRmllbGRzID0gJC5maW5kKCdpbnB1dFt0eXBlPWhpZGRlbl0nKTtcblxuICAgICAgICBsZXQgY3VycmVudFRhZ0lkID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRUYWcgPSB7fTtcblxuICAgICAgICB0YWdGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RhZ0ZpZWxkTmFtZVByZWZpeH1cXFxcXyhcXFxcZCspXFxcXF8oaWR8dGV4dCkkYCk7XG4gICAgICAgICAgICBjb25zdCByZWdFeHBSZXN1bHQgPSBmaWVsZC5pZC5tYXRjaCh0YWdSZWdFeHApO1xuXG4gICAgICAgICAgICBpZiAocmVnRXhwUmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xhYmVsLCB0YWdJZCwgdGFnRmllbGRdID0gcmVnRXhwUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih0YWdJZCkgIT09IGN1cnJlbnRUYWdJZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWdJZCA9IE51bWJlcih0YWdJZCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWcgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnLnRhZ0lkID0gY3VycmVudFRhZy50YWdJZCA/XG4gICAgICAgICAgICAgICAgICAgIGAke2N1cnJlbnRUYWcudGFnSWR9fCR7bGFiZWx9YCA6XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudFRhZ1t0YWdGaWVsZF0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYWcuaWQgJiYgY3VycmVudFRhZy50ZXh0KSB7XG4gICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhZ3NEaXNwbGF5ID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUYWdzRGlzcGxheSwge1xuICAgICAgICAgICAgaGlkZGVuRmllbGRzQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFnc1RleHRMYWJlbCxcbiAgICAgICAgICAgIHhoclJvdXRlQ2FsbGJhY2tcbiAgICAgICAgfSksIHRhZ3NDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnc1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1RhZ3NNYW5hZ2VyLmpzIiwiaW1wb3J0IEdyaWQgZnJvbSAnLi4vZXM2L0dyaWQnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi4vZXM2L1RyZWUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2VzNi9Nb2RhbCc7XG5pbXBvcnQgVGFnc01hbmFnZXIgZnJvbSAnLi4vZXM2L1RhZ3NNYW5hZ2VyJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5pbXBvcnQgUmVhY3RUcmVlIGZyb20gJy4uL2pzeC9SZWFjdFRyZWUnO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAnLi4vanN4L1JlYWN0TW9kYWwnO1xuaW1wb3J0IFJlYWN0VGFnc0Rpc3BsYXkgZnJvbSAnLi4vanN4L1JlYWN0VGFnc0Rpc3BsYXknO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5SZWFjdExpYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuUmVhY3RMaWIgPSB7XG4gICAgICAgIEdyaWQsXG4gICAgICAgIE1vZGFsLFxuICAgICAgICBUcmVlLFxuICAgICAgICBUYWdzTWFuYWdlcixcbiAgICAgICAgUmVhY3RHcmlkLFxuICAgICAgICBSZWFjdFRyZWUsXG4gICAgICAgIFJlYWN0TW9kYWwsXG4gICAgICAgIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJzb3VyY2VSb290IjoiIn0=