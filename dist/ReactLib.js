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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI3ZDBlYmM0NmFiNGQ3MzBlYWMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZWFjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1JlYWN0VGFnc0Rpc3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0dyaWRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9SZWFjdExpYi5qcyJdLCJuYW1lcyI6WyJSZWFjdEdyaWQiLCJwcm9wcyIsImNvbHMiLCJjb2x1bW5zIiwibWFwIiwiY29sIiwicm93cyIsImluaXRpYWxEYXRhIiwicm93Iiwic3RhdGUiLCJyYXdEYXRhIiwicHJldlNlbGVjdGVkUm93Iiwib3JkZXJCeSIsIm9yZGVyUmV2ZXJzZSIsImxvYWRpbmciLCJlbmFibGVkIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwiaWQiLCJyZW5kZXJDb2x1bW4iLCJiaW5kIiwibGVuZ3RoIiwicmVuZGVyUm93IiwiY29sdW1uIiwic3R5bGUiLCJ3aWR0aCIsIm5hbWUiLCJnZW5lcmF0ZUhlYWRlckNsaWNrIiwiZGlzcGxheU5hbWUiLCJyb3dDbGFzc05hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhlYWRlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyb290RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwYXRjaEV2ZW50Iiwib25Db2x1bW5IZWFkZXJDbGljayIsImkiLCJjb2xOYW1lIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJtdWx0aXNlbGVjdCIsInNldFN0YXRlIiwiY2VsbEV2ZW50IiwiY2VsbCIsIm9uQ2VsbENsaWNrIiwibmR4IiwiZ3JpZFJvd3MiLCJyYXdEYXRhUm93cyIsImV4dGVuZCIsIm5ld1Jvd3MiLCJzbGljZSIsIm5ld0RhdGEiLCJzb3J0QnkiLCJyZXQiLCJwdXNoIiwiZGVsZXRlUm93cyIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwidmFsdWUiLCJyYXdEYXRhSXRlbSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJmdW5jIiwic29ydGFibGUiLCJib29sIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdFRyZWUiLCJyb290IiwiZXhwYW5kZWRJZHMiLCJzZWxlY3RlZEl0ZW0iLCJyZW5kZXJJdGVtIiwiaXRlbSIsImV4cGFuZGVkIiwiaXRlbUNsYXNzTmFtZSIsImV4cGFuZFN0YXR1cyIsIml0ZW1FeHBhbmRDbGFzc05hbWUiLCJjaGlsZHJlbiIsImV4cGFuZENvbnRyYWN0SXRlbSIsInNlbGVjdEl0ZW0iLCJzb3J0VHJlZSIsInRyZWUiLCJicmFuY2giLCJnZW5lcmF0ZUl0ZW1DbGljayIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW1FdmVudCIsImNhY2hlUm9vdCIsInJlcGxpY2F0ZVJvb3QiLCJwYXJlbnRJZCIsImZpbmRJdGVtSW5CcmFuY2hCeUlkIiwiZm91bmRJdGVtIiwia2V5cyIsImtleSIsImZpbmRJdGVtQnlJZCIsImV4cGFuZFRyZWUiLCJpdGVtcyIsIml0bSIsImluc3RhbmNlT2YiLCJSZWFjdE1vZGFsIiwidGl0bGUiLCJtZXNzYWdlIiwidmlzaWJsZSIsImNsb3NhYmxlIiwiYnV0dG9ucyIsImxhYmVsIiwic3VjY2VzcyIsIm9uU3VjY2VzcyIsIm9uUmVqZWN0Iiwib25Nb2RhbENsb3NlIiwicmVuZGVyQnV0dG9uIiwiYnV0dG9uIiwib25Nb2RhbEJ1dHRvblByZXNzZWQiLCJSZWFjdFRhZ3NEaXNwbGF5IiwidGFncyIsInN1Z2dlc3Rpb25zIiwiaW5wdXQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoaWRkZW5UYWdzIiwiaGlkZGVuRmllbGRzQ29udGFpbmVyIiwibmV3VGFnSW5kZXgiLCJzdWdnZXN0aW9uVGltZW91dCIsInByZXZJbnB1dFZhbHVlIiwib24iLCJjbGVhclN1Z2dlc3Rpb25zIiwiaGFuZGxlRm9jdXMiLCJyZW5kZXJUYWciLCJ0YWdzVGV4dExhYmVsIiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJyZW5kZXJTdWdnZXN0aW9uIiwidGFnIiwidGV4dCIsInJlbW92ZVRhZyIsInRhZ1JlZ0V4cCIsIlJlZ0V4cCIsInRhZ1BhcnRzIiwibWF0Y2giLCJpbm5lclRhZyIsInByZVRhZyIsInRhZ1RleHQiLCJwb3N0VGFnIiwib25TdWdnZXN0aW9uQ2xpY2siLCJ0cmltIiwiZW5kc1dpdGgiLCJzdWJzdHIiLCJ0YWdJZEZyb21TdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsIm5ld0ZpZWxkVGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXBwZW5kIiwibmV3VGFnSWRzIiwidGFnSWQiLCJmb2N1cyIsImZvcm1GaWVsZHMiLCJzcGxpdCIsImZpZWxkSWQiLCJmaWVsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0YXRlVGFnIiwiY2xlYXJUaW1lb3V0IiwicmVzZXRTdWdnZXN0aW9uc1RpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGFnUm91dGUiLCJ4aHJSb3V0ZUNhbGxiYWNrIiwiYWpheCIsIm1ldGhvZCIsInRoZW4iLCJKU09OIiwicGFyc2UiLCJzcGFuIiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIm9mZnNldFdpZHRoIiwidXBkYXRlU3VnZ2VzdGlvbnMiLCJldnRLZXkiLCJhZGRUYWciLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiSFRNTEVsZW1lbnQiLCJHcmlkIiwiZ3JpZCIsImdyaWRQcm9wcyIsImNvbnRhaW5lciIsInJlbmRlciIsImFkZFJvd3MiLCJzZXRSb3dzIiwiZ2V0U29ydCIsImdldFJvdyIsImdldFNlbGVjdGVkUm93cyIsImdldFNlbGVjdGVkUm93SWRzIiwiZ2V0Q29sdW1ucyIsInNldENvbHVtbnMiLCJnZXRCeUlkIiwiZGVsZXRlQnlJZCIsInVwZGF0ZVJvdyIsInVwZGF0ZUNlbGwiLCJjbGVhciIsInNldExvYWRpbmciLCJzZXRFbmFibGVkIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIlRyZWUiLCJ0cmVlUHJvcHMiLCJzZXREYXRhIiwiZ2V0U2VsZWN0ZWRJdGVtSWQiLCJhZGRJdGVtIiwidXBkYXRlSXRlbSIsImRlbGV0ZUl0ZW1CeUlkIiwiZXhwYW5kQWxsIiwiY29udHJhY3RBbGwiLCJNb2RhbCIsIm1vZGFsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZWplY3QiLCJsZWZ0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRvcCIsImlubmVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2tCdXR0b24iLCJnZXRZZXNCdXR0b24iLCJnZXROb0J1dHRvbiIsIlRhZ3NNYW5hZ2VyIiwidGFnc0NvbnRhaW5lciIsInRhZ0ZpZWxkTmFtZVByZWZpeCIsInRhZ0ZpZWxkcyIsImZpbmQiLCJjdXJyZW50VGFnSWQiLCJjdXJyZW50VGFnIiwidGFnRmllbGQiLCJOdW1iZXIiLCJ0YWdzRGlzcGxheSIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMjdkMGViYzQ2YWI0ZDczMGVhYyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb3BUeXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi4vZXM2L0dyaWRSb3cnO1xuaW1wb3J0IEdyaWRDb2x1bW4gZnJvbSAnLi4vZXM2L0dyaWRDb2x1bW4nO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkU3RhdGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IHJhd0RhdGEgVGhlIHJhdyBkYXRhIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRDb2x1bW5bXX0gY29sdW1ucyBUaGUgY29sdW1ucyBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkUm93W119IHJvd3MgVGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmV2U2VsZWN0ZWRSb3cgVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93XG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdG8gb3JkZXIgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgb2YgdGhlIG9yZGVyIHNob3VsZCBiZSByZXZlcnNlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgc2hvd3MgYSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBncmlkIGlzIGludGVyYWN0aXZlXG4gKi9cblxuLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIGNhbGxiYWNrLCBzaG91bGQgcmV0dXJuIC0xIGlmIGEgaXMgbG93ZXIgdGhhbiBiLFxuICogMCBpZiByb3dzIGFyZSBlcXVhbCBhbmQgMSBpZiBhIGlzIGdyZWF0ZXIgdGhhbiBiXG4gKlxuICogQGNhbGxiYWNrIFNvcnRDYWxsYmFja1xuICogQHBhcmFtIHtHcmlkUm93fSBhIFJvdyBhXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGIgUm93IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIENsYXNzTmFtZSBjYWxsYmFjaywgYSBmdW5jdGlvbiB0byByZXR1cm4gYSBjbGFzc05hbWUgKHN0cmluZylcbiAqIGJhc2VkIG9uIHJvdy9jb2x1bW4gaW5mb3JtYXRpb25cbiAqXG4gKiBAY2FsbGJhY2sgY2xhc3NOYW1lQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcm93IFRoZSByb3cgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2x1bW5dIFRoZSBjb2x1bW4gd2UncmUgcmVuZGVyaW5nIChmb3IgY2VsbCBjbGFzc05hbWVzKVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD1ncmlkXSBUaGUgaWQgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Q29sdW1uUHJvcHNbXX0gY29sdW1ucyBUaGUgY29sdW1ucyBkZWZpbml0aW9uIGZvciB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtSb3dQcm9wc1tdfSBpbml0aWFsRGF0YSBUaGUgaW5pdGlhbCBkYXRhIHRvIHBvcHVsYXRlIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdGhhdCB3ZSdyZSBzb3J0aW5nIGZvclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3JkZXJSZXZlcnNlPWZhbHNlXSBUcnVlIGlmIHdlJ3JlIGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsU29ydENhbGxiYWNrPn0gW3NvcnRpbmdzXSBBIHNldCBvZiBzb3J0aW5nIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW3Jvd0NsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIHJvd1xuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtjZWxsQ2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgY2VsbFxuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIGZvciBlYWNoIHNvcnRhYmxlIGNvbHVtblxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0YWJsZT10cnVlXSBUcnVlIGlmIHRoZSBncmlkIGlzIHNlbGVjdGFibGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW211bHRpc2VsZWN0PWZhbHNlXSBUcnVlIGlmIHdlIHdpbGwgZW5hYmxlIG11bHRpc2VsZWN0IGluIHRoZSBncmlkXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHJlYWN0IGdyaWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IHByb3BzIFJlYWN0IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RHcmlkXG4gKiBAY2xhc3NkZXNjIFJlYWN0IEdyaWQgQ29tcG9uZW50IGNsYXNzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpO1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5pbml0aWFsRGF0YS5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGZvciB0aGUgZ3JpZCBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgUmVhY3RHcmlkI3N0YXRlXG4gICAgICAgICAqIEB0eXBlIHtHcmlkU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHMsXG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiAtMSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMucHJvcHMub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5wcm9wcy5vcmRlclJldmVyc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcm93cyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNvcnRSb3dzKCkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnRpbmdzW3RoaXMuc3RhdGUub3JkZXJCeV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoc29ydEZuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0YWJsZS13cmFwcGVyJHt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICcgZGlzYWJsZWQnfWA7XG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+e3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzKSl9PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MubWFwKHRoaXMucmVuZGVyUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBjb2x1bW4gaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ29sdW1uKGNvbHVtbikge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbHVtbi53aWR0aCB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUhlYWRlckNsaWNrLmJpbmQodGhpcywgY29sdW1uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcm93IGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclJvdyhyb3cpIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocm93LmRhdGEpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtyb3dDbGFzc05hbWV9ICR7cm93LnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5OiByb3cuc2hvdyA/ICd0YWJsZS1yb3cnIDogJ25vbmUnIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ2VsbC5iaW5kKHRoaXMsIHJvdykpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIGNlbGwgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2xcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDZWxsKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZShyb3cuZGF0YSwgY29sKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2wud2lkdGggfTtcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IChyb3cuZGF0YVtjb2wubmFtZV0gPyByb3cuZGF0YVtjb2wubmFtZV0udG9TdHJpbmcoKSA6ICcnKTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0eXBlb2YgY29sLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBjb2wuZm9ybWF0LmNhbGwodGhpcywgcm93LmRhdGFbY29sLm5hbWVdLCByb3cpIDpcbiAgICAgICAgICAgIHJvd0RhdGE7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93LmlkfSAke2NvbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVDZWxsQ2xpY2suYmluZCh0aGlzLCByb3csIGNvbC5uYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwsIGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIHRoZSBncmlkIGhlYWRlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSGVhZGVyQ2xpY2soY29sdW1uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0hlYWRlckNsaWNrJywgeyBkZXRhaWw6IGNvbHVtbiB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChoZWFkZXJFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2soY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbnVtZXJpYyBpbmRleCBmb3IgYSBnaXZlbiByb3cgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSb3dOZHgocm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gYSBjZWxsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNlbGxDbGljayhyb3csIGNvbE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dOZHggPSB0aGlzLmdldFJvd05keChyb3cpO1xuICAgICAgICBsZXQgdXBkYXRlTGFzdFJvdyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9uZVJvdyA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gIWN1clJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2UgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldEZyb20gPSBNYXRoLm1pbihyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRUbyA9IE1hdGgubWF4KHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzZXRGcm9tOyBpIDw9IHNldFRvOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKGN1clJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvd05keCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25lUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUocm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2Uocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogdXBkYXRlTGFzdFJvdyA/IHJvd05keCA6IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93LFxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnQ2VsbENsaWNrJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IGNvbE5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChjZWxsRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2socm93LCBjb2xOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5keCkge1xuICAgICAgICAgICAgbmR4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4uZ3JpZFJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnJhd0RhdGFSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogZ3JpZFJvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiByYXdEYXRhUm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnN0YXRlLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICBpZiAobmR4IDwgMCB8fCBuZHggPj0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW25keF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuc3RhdGUucm93c1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUm93cyhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBuZXcgR3JpZFJvdygkLmV4dGVuZCh0cnVlLCByb3dJdGVtLmRhdGEsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSYXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHJhd0RhdGEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zcGxpY2UoaSwgMSwgbmV3Um93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhd0RhdGEuc3BsaWNlKGksIDEsIG5ld1Jhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhSXRlbSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcm93SXRlbS5kYXRhW2NvbE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmF3RGF0YUl0ZW1bY29sTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgcmF3RGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcFR5cGVzIGZvciBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKiBAc3RhdGljXG4gKi9cblJlYWN0R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9KSksXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyUmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydGluZ3M6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DZWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wZXJ0aWVzIG9mIHRoZSBSZWFjdEdyaWQgY2xhc3NcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICovXG5SZWFjdEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnZ3JpZCcsXG4gICAgY29sdW1uczogW10sXG4gICAgb3JkZXJCeTogJycsXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBtdWx0aXNlbGVjdDogZmFsc2UsXG4gICAgb3JkZXJSZXZlcnNlOiBmYWxzZSxcbiAgICBzb3J0aW5nczoge30sXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IG51bGwsXG4gICAgb25DZWxsQ2xpY2s6IG51bGwsXG4gICAgcm93Q2xhc3NOYW1lOiAoKSA9PiAoJycpLFxuICAgIGNlbGxDbGFzc05hbWU6ICgpID0+ICgnJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFRyZWVJdGVtIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyZWVJdGVtXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IGlkIFRoZSB1bmlxdWUgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bWJlcn0gW3BhcmVudElkPTBdIFRoZSBwYXJlbnQgaWQgb2YgdGhlIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7VHJlZUl0ZW1bXX0gY2hpbGRyZW4gVGhlIGl0ZW0ncyBjaGlsZHJlblxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlIFN0YXRlIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJlYWN0VHJlZVN0YXRlXG4gKiBAcHJvcGVydHkge1RyZWVJdGVtW119IHJvb3QgVGhlIHJvb3QgaXRlbSBjb250YWluaW5nIHRyZWUgcm9vdCBjaGlsZHJlblxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgaXMgaW4gdGhlIGxvYWRpbmcgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IHNlbGVjdGVkSXRlbSBUaGUgaWQgb2YgdGhlIHNlbGVjdGVkIGl0ZW1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZyxib29sZWFuPn0gZXhwYW5kZWRJZHMgQSBjb2xsZWN0aW9uIG9mIHRoZSBpZHMgb2YgZXhwYW5kZWQgY2F0ZWdvcmllc1xuICogQHByb3BlcnR5IHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIHRyZWUgaXMgZW5hYmxlZFxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RUcmVlUHJvcHMgb2JqZWN0XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUmVhY3RUcmVlUHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWQ9dHJlZV1cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGZvcm1hdFxuICogQHByb3BlcnR5IHtUcmVlSXRlbVtdfG51bGx9IGluaXRpYWxEYXRhXG4gKiBAcHJvcGVydHkge1NvcnRDYWxsYmFja3xudWxsfSBzb3J0XG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIFJlYWN0VHJlZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1JlYWN0VHJlZVByb3BzfSBwcm9wc1xuICogQGNsYXNzIFJlYWN0VHJlZVxuICogQGNsYXNzZGVzYyBSZWFjdCBUcmVlIGNvbXBvbmVudCBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2JqZWN0XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWVTdGF0ZX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByb290OiB0aGlzLnByb3BzLmluaXRpYWxEYXRhLFxuICAgICAgICAgICAgZXhwYW5kZWRJZHM6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVhY3RUcmVlIHJlbmRlciBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZW5hYmxlZCA/ICcnIDogJ2Rpc2FibGVkJ30+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbG9hZGluZ1wiPiZuYnNwOzwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgICA8dWw+e3RoaXMuc3RhdGUucm9vdC5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfTwvdWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGEgdHJlZSBpdGVtIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJZHNbaXRlbS5pZF07XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gaXRlbS5pZCA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICAgICAgY29uc3QgZXhwYW5kU3RhdHVzID0gZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbnRyYWN0ZWQnO1xuICAgICAgICBjb25zdCBpdGVtRXhwYW5kQ2xhc3NOYW1lID0gYGV4cGFuZCAke2l0ZW0uY2hpbGRyZW4ubGVuZ3RoID8gZXhwYW5kU3RhdHVzIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtRXhwYW5kQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmV4cGFuZENvbnRyYWN0SXRlbS5iaW5kKHRoaXMsIGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzLCBpdGVtLmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcm1hdC5jYWxsKG51bGwsIGl0ZW0pfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jaGlsZHJlbi5tYXAodGhpcy5yZW5kZXJJdGVtLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgVHJ1ZSBpZiB0aGUgdHJlZSBzaG93cyBvbmx5IGEgbG9hZGluZyBzcGlubmVyXG4gICAgICovXG4gICAgc2V0TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgb24gdGhlIHRyZWUgYW5kIHJlbW92ZXMgYWxsIHByZXZpb3VzIGRhdGFcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119IHJvb3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzb3J0PXRydWVdXG4gICAgICovXG4gICAgc2V0RGF0YShyb290LCBzb3J0ID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzb3J0VHJlZSA9ICh0cmVlKSA9PiB7XG4gICAgICAgICAgICB0cmVlLmZvckVhY2goKGJyYW5jaCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRUcmVlKGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc29ydCh0cmVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgc29ydFRyZWUocm9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydHMgZGF0YSBpbiBhIHRyZWUgYnJhbmNoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbVtdfSB0cmVlXG4gICAgICovXG4gICAgc29ydCh0cmVlKSB7XG4gICAgICAgIGNvbnN0IHNvcnRGbiA9IHRoaXMucHJvcHMuc29ydDtcblxuICAgICAgICBpZiAodHlwZW9mIHNvcnRGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdHJlZS5zb3J0KHNvcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RzIGFuIGl0ZW0gaW4gdGhlIHRyZWUgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fG51bGx9IGV2ZW50XG4gICAgICovXG4gICAgc2VsZWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IGlkID8gbnVsbCA6IGlkO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZEl0ZW1JZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtO1xuICAgIH1cblxuICAgIGV4cGFuZENvbnRyYWN0SXRlbShpZCwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXhwYW5kZWRJZHMpO1xuXG4gICAgICAgICAgICBpZiAoZXhwYW5kZWRbaWRdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV4cGFuZGVkW2lkXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRbaWRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJZHM6IGV4cGFuZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFuIGV2ZW50IG9uIFJlYWN0VHJlZSByb290IGVsZW1lbnQgdGhhdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZEl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUl0ZW1DbGljayhldmVudCwgc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnSXRlbUNsaWNrJywgeyBkZXRhaWw6IHsgc2VsZWN0ZWRJdGVtIH0gfSk7XG5cbiAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICBpZiAocm9vdEVsZW0pIHtcbiAgICAgICAgICAgIHJvb3RFbGVtLmRpc3BhdGNoRXZlbnQoaXRlbUV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gdG8gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtXG4gICAgICovXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlUm9vdCA9IHRoaXMucmVwbGljYXRlUm9vdCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5pZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIHR5cGVvZiBpdGVtLnBhcmVudElkICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0uY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRJZCA9PT0gJzAnIHx8IGl0ZW0ucGFyZW50SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYWNoZVJvb3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmNoID0gdGhpcy5maW5kSXRlbUluQnJhbmNoQnlJZChjYWNoZVJvb3QsIGl0ZW0ucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guY2hpbGRyZW4ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0KGJyYW5jaC5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVSb290LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydChjYWNoZVJvb3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm9vdDogY2FjaGVSb290XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYW4gaXRlbSBpbiB0aGUgdHJlZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW19IGl0ZW1cbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGZvdW5kSXRlbSA9IHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQoY2FjaGVSb290LCBpdGVtLmlkKTtcblxuICAgICAgICBpZiAoZm91bmRJdGVtKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmb3VuZEl0ZW0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpZCcgJiYga2V5ICE9PSAncGFyZW50SWQnICYmIGtleSAhPT0gJ2NoaWxkcmVuJykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA/IGl0ZW1ba2V5XSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNvcnQoY2FjaGVSb290KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFuIGl0ZW0gYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGlkXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgY29uc3QgY2FjaGVSb290ID0gdGhpcy5yZXBsaWNhdGVSb290KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmZpbmRJdGVtQnlJZChpZCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgICAgICAgbGV0IGJyYW5jaDtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50SWQgPT09IDAgfHwgaXRlbS5wYXJlbnRJZCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgYnJhbmNoID0gY2FjaGVSb290O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmFuY2ggPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGNhY2hlUm9vdCwgaXRlbS5wYXJlbnRJZCkuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBicmFuY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYnJhbmNoW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBicmFuY2guc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb3Q6IGNhY2hlUm9vdCxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbiBpdGVtIGluIHRoZSB0cmVlIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBUaGUgaWQgb2YgdGhlIGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEl0ZW1JbkJyYW5jaEJ5SWQodGhpcy5zdGF0ZS5yb290LCBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgaW4gaXRlbSBpbiBhIHRyZWUgYnJhbmNoIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtW119cm9vdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWRcbiAgICAgKiBAcmV0dXJucyB7VHJlZUl0ZW18bnVsbH1cbiAgICAgKi9cbiAgICBmaW5kSXRlbUluQnJhbmNoQnlJZChyb290LCBpZCkge1xuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290W2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXQgPSB0aGlzLmZpbmRJdGVtSW5CcmFuY2hCeUlkKGl0ZW0uY2hpbGRyZW4sIGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsaWNhdGVzIHRoZSByb290IG9iamVjdCBmb3IgY2hhbmdlc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1RyZWVJdGVtW119XG4gICAgICovXG4gICAgcmVwbGljYXRlUm9vdCgpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvb3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJldC5wdXNoKCQuZXh0ZW5kKHt9LCB0aGlzLnN0YXRlLnJvb3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBwcm9wZXJ0eSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgICAqL1xuICAgIHNldEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVuYWJsZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGV4cGFuZEFsbCgpIHtcbiAgICAgICAgY29uc3QgZXhwYW5kVHJlZSA9IChpdGVtcywgZXhwYW5kZWRJZHMpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0bSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdG0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkSWRzW2l0bS5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRUcmVlKGl0bS5jaGlsZHJlbiwgZXhwYW5kZWRJZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkSWRzID0ge307XG5cbiAgICAgICAgZXhwYW5kVHJlZSh0aGlzLnN0YXRlLnJvb3QsIGV4cGFuZGVkSWRzKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnRyYWN0cyBhbGwgdHJlZSBpdGVtc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnRyYWN0QWxsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkSWRzOiB7fVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVhY3RUcmVlIHByb3BUeXBlc1xuICpcbiAqIEBtZW1iZXJPZiBSZWFjdFRyZWVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIHtSZWFjdFRyZWVQcm9wc31cbiAqL1xuUmVhY3RUcmVlLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkpLFxuICAgIHNvcnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIFJlYWN0VHJlZSBkZWZhdWx0IHByb3BzXG4gKlxuICogQG1lbWJlck9mIFJlYWN0VHJlZVxuICogQHN0YXRpY1xuICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICovXG5SZWFjdFRyZWUuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAndHJlZScsXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIHNvcnQ6IG51bGxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0VHJlZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE1vZGFsU3RhdGVcbiAqIEBwcm9wZXJ0eSB7TW9kYWxCdXR0b25bXX0gYnV0dG9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWVzc2FnZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbdmlzaWJsZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2xvc2FibGVcbiAqIEBwcm9wZXJ0eSB7TW9kYWxDbG9zZUNhbGxiYWNrfSBbb25TdWNjZXNzXVxuICogQHByb3BlcnR5IHtNb2RhbENsb3NlQ2FsbGJhY2t9IFtvblJlamVjdF1cbiAqL1xuXG4vKipcbiAqIENhbGxiYWNrIGZvciBtb2RhbCBjbG9zZSBldmVudHNcbiAqXG4gKiBAY2FsbGJhY2sgTW9kYWxDbG9zZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uUHJlc3NlZFxuICogQHBhcmFtIHtib29sZWFufSBzdWNjZXNzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBNb2RhbEJ1dHRvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGtleVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHN1Y2Nlc3NcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjbGFzc05hbWVcbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBSZWFjdE1vZGFsXG4gKiBAY2xhc3NkZXNjIFJlYWN0IENvbXBvbmVudCBmb3IgYSBtb2RhbCBkaWFsb2dcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBSZWFjdE1vZGFsIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtNb2RhbFN0YXRlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWxlcnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FsZXJ0IG1lc3NhZ2UnLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjbG9zYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b24gYWN0aW9uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvblN1Y2Nlc3MoKSB7fSxcbiAgICAgICAgICAgIG9uUmVqZWN0KCkge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIG1vZGFsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYG1vZGFsICR7dGhpcy5zdGF0ZS52aXNpYmxlID8gJ3Zpc2libGUnIDogJyd9YDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xvc2FibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5vbk1vZGFsQ2xvc2UuYmluZCh0aGlzKX0+IHggPC9zcGFuPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnV0dG9ucy5tYXAodGhpcy5yZW5kZXJCdXR0b24uYmluZCh0aGlzKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgbW9kYWwgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7TW9kYWxCdXR0b259IGJ1dHRvblxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlckJ1dHRvbihidXR0b24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2J1dHRvbi5rZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtidXR0b24uY2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Nb2RhbEJ1dHRvblByZXNzZWQuYmluZCh0aGlzLCBidXR0b24pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtidXR0b24ubGFiZWx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBtb2RhbFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0TW9kYWxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW9kYWxDbG9zZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLnN0YXRlLm9uUmVqZWN0KCdjbG9zZS1idXR0b24nLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBjbGlja2VkIG9uIGEgbW9kYWwgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtNb2RhbEJ1dHRvbn0gYnV0dG9uXG4gICAgICovXG4gICAgb25Nb2RhbEJ1dHRvblByZXNzZWQoYnV0dG9uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoYnV0dG9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub25TdWNjZXNzKGJ1dHRvbi5rZXksIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vblJlamVjdChidXR0b24ua2V5LCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc3gvUmVhY3RNb2RhbC5qc3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFnRW50aXR5XG4gKiBAcHJvcGVydHkge251bWJlcnxudWxsfSBpZFxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gdGFnSWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWdzU3RhdGVcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHRhZ3NcbiAqIEBwcm9wZXJ0eSB7VGFnRW50aXR5W119IHN1Z2dlc3Rpb25zXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RUYWdzRGlzcGxheVxuICogQGNsYXNzZGVzYyBEaXNwbGF5IGNsYXNzIGZvciB0YWcgZWxlbWVudHNcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhZ3NEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIFRhZ3NTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50W119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3MgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhZ0luZGV4IHRvIHNldCBmb3IgdGhlIG5ldyBoaWRkZW4gZWxlbWVudHMgaW4gdGhlIGZvcm1cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV3VGFnSW5kZXggPSB0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC8gMjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSBzdWdnZXN0aW9ucyBib3ggdGltZW91dFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25UaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgZm9yIHRoZSBwcmV2aW91cyB2YWx1ZSBiZWZvcmUga2V5VXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLmNsZWFyU3VnZ2VzdGlvbnMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgdGFnIGNvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWxpc3RcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWdzLm1hcCh0aGlzLnJlbmRlclRhZy5iaW5kKHRoaXMpKX1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5pbnB1dCA9IGlucHV0OyB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMudGFnc1RleHRMYWJlbCA/IHRoaXMucHJvcHMudGFnc1RleHRMYWJlbCA6ICd0YWdzJ31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy50YWdzVGV4dExhYmVsID8gdGhpcy5wcm9wcy50YWdzVGV4dExhYmVsIDogJ3RhZ3MnfVxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3MuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5vbktleVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5sZW5ndGggP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdfc3VnZ2VzdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9ucy5tYXAodGhpcy5yZW5kZXJTdWdnZXN0aW9uLmJpbmQodGhpcykpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBzaW5nbGUgdGFnXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VGFnRW50aXR5fSB0YWdcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJUYWcodGFnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGtleT17dGFnLnRleHR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZy50ZXh0fSA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucmVtb3ZlVGFnLmJpbmQodGhpcywgdGFnKX0+eDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgdGFnIHN1Z2dlc3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclN1Z2dlc3Rpb24odGFnKSB7XG4gICAgICAgIGNvbnN0IHRhZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoYF4oLiopKCR7dGhpcy5pbnB1dC52YWx1ZX0pKC4qKSRgLCAnaScpO1xuICAgICAgICBjb25zdCB0YWdQYXJ0cyA9IHRhZy50ZXh0Lm1hdGNoKHRhZ1JlZ0V4cCk7XG4gICAgICAgIGxldCBpbm5lclRhZyA9IHRhZy50ZXh0O1xuXG4gICAgICAgIGlmICh0YWdQYXJ0cyAhPT0gbnVsbCAmJiB0YWdQYXJ0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZVRhZyA9IHRhZ1BhcnRzWzFdO1xuICAgICAgICAgICAgY29uc3QgdGFnVGV4dCA9IHRhZ1BhcnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgcG9zdFRhZyA9IHRhZ1BhcnRzWzNdO1xuXG4gICAgICAgICAgICBpbm5lclRhZyA9ICg8c3Bhbj57cHJlVGFnfTxzdHJvbmc+e3RhZ1RleHR9PC9zdHJvbmc+e3Bvc3RUYWd9PC9zcGFuPik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbm5lclRhZyA9IDxzcGFuPnt0YWcudGV4dH08L3NwYW4+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIga2V5PXt0YWcudGV4dH0gb25DbGljaz17dGhpcy5vblN1Z2dlc3Rpb25DbGljay5iaW5kKHRoaXMsIHRhZyl9Pntpbm5lclRhZ308L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRhZyBieSB0ZXh0IG9ubHkgKG5ldyB0YWcpXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdUZXh0XG4gICAgICovXG4gICAgYWRkVGFnKHRhZ1RleHQpIHtcbiAgICAgICAgLy8gdHJpbSBhbmQgcmVtb3ZlIHRyYWlsaW5nIHNlbWljb2xvbnNcbiAgICAgICAgdGFnVGV4dCA9IHRhZ1RleHQudHJpbSgpO1xuXG4gICAgICAgIGlmICh0YWdUZXh0LmVuZHNXaXRoKCcsJykpIHtcbiAgICAgICAgICAgIHRhZ1RleHQgPSB0YWdUZXh0LnN1YnN0cigwLCB0YWdUZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXZvaWQgZW1wdHkgdGFnc1xuICAgICAgICBpZiAodGFnVGV4dCA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF2b2lkIHJlcGVhdGVkIHRhZ3NcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3NbaV0udGV4dCA9PT0gdGFnVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyeSB0byBnZXQgdGFnIGlkIGZyb20gc3VnZ2VzdGlvbnNcbiAgICAgICAgbGV0IHRhZ0lkRnJvbVN1Z2dlc3Rpb25zID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9uID0gdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN1Z2dlc3Rpb24udGV4dC50b0xvd2VyQ2FzZSgpID09PSB0YWdUZXh0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB0YWdJZEZyb21TdWdnZXN0aW9ucyA9IHN1Z2dlc3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgdGFnVGV4dCA9IHN1Z2dlc3Rpb24udGV4dDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkVGVtcGxhdGUgPSB0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm90b3R5cGUnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2csIHRoaXMubmV3VGFnSW5kZXgudG9TdHJpbmcoMTApKTtcblxuICAgICAgICB0aGlzLm5ld1RhZ0luZGV4ICs9IDE7XG5cbiAgICAgICAgJCh0aGlzLnByb3BzLmhpZGRlbkZpZWxkc0NvbnRhaW5lcikuYXBwZW5kKG5ld0ZpZWxkVGVtcGxhdGUpO1xuICAgICAgICB0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLnZhbHVlID0gdGFnSWRGcm9tU3VnZ2VzdGlvbnM7XG4gICAgICAgIHRoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0udmFsdWUgPSB0YWdUZXh0O1xuXG4gICAgICAgIGNvbnN0IG5ld1RhZ0lkcyA9XG4gICAgICAgICAgICBgJHt0aGlzLmhpZGRlblRhZ3NbdGhpcy5oaWRkZW5UYWdzLmxlbmd0aCAtIDJdLmlkfXwke3RoaXMuaGlkZGVuVGFnc1t0aGlzLmhpZGRlblRhZ3MubGVuZ3RoIC0gMV0uaWR9YDtcblxuICAgICAgICB0aGlzLnN0YXRlLnRhZ3MucHVzaCh7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIHRhZ0lkOiBuZXdUYWdJZHMsXG4gICAgICAgICAgICB0ZXh0OiB0YWdUZXh0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzLFxuICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgdGFnIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUYWdFbnRpdHl9IHRhZ1xuICAgICAqIEBwYXJhbSB7RXZlbnR8bnVsbH0gZXZlbnRcbiAgICAgKi9cbiAgICByZW1vdmVUYWcodGFnLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRmllbGRzID0gdGFnLnRhZ0lkLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgZm9ybUZpZWxkcy5mb3JFYWNoKChmaWVsZElkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZpZWxkSWQpO1xuICAgICAgICAgICAgZmllbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmaWVsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS50YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZVRhZyA9IHRoaXMuc3RhdGUudGFnc1tpXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlVGFnLnRleHQgPT09IHRhZy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFnczogdGhpcy5zdGF0ZS50YWdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgc3VnZ2VzdGlvbnMgdGltZW91dCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy5zdWdnZXN0aW9uVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIGNhbGwgdG8gc3VnZ2VzdGlvbnMgYW5kIHVwZGF0ZXMgdGhlIHNldFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1cGRhdGVTdWdnZXN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U3VnZ2VzdGlvbnNUaW1lb3V0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdSb3V0ZSA9IHRoaXMucHJvcHMueGhyUm91dGVDYWxsYmFjayh0aGlzLmlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICQuYWpheCh0YWdSb3V0ZSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWdzLm1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHRhZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFN1Z2dlc3Rpb25zVGltZW91dCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWN0cyB0byBrZXkgcHJlc3NlcyBvbiB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlVcChldmVudCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogV2UgbmVlZCB0byBsb29rIGF0IHRoZSB2YWx1ZSB0aGF0IHdhcyBvbiB0aGUgaW5wdXQgQkVGT1JFIG9uS2V5VXAgdXBkYXRlcyB0aGVcbiAgICAgICAgICogaW5wdXQgdmFsdWUsIGJlY2F1c2Ugd2Ugb25seSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJldmlvdXMgdGFnIGlmIHRoZSBpbnB1dCBXQVNcbiAgICAgICAgICogZW1wdHkgYmVmb3JlIHByZXNzaW5nIEJhY2tzcGFjZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50YWdzLnNwbGljZSh0aGlzLnN0YXRlLnRhZ3MubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IHRoaXMuc3RhdGUudGFnc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmlucHV0LnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJm5ic3A7Jyk7XG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9IGAke3NwYW4ub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICB0aGlzLmJvZHkucmVtb3ZlQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgdGhpcy5wcmV2SW5wdXRWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBLZXlQcmVzcyBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlQcmVzcyhldmVudCkge1xuICAgICAgICBjb25zdCBldnRLZXkgPSBldmVudC5rZXk7XG5cbiAgICAgICAgc3dpdGNoIChldnRLZXkpIHtcbiAgICAgICAgY2FzZSAoJywnKTpcbiAgICAgICAgY2FzZSAoJ0VudGVyJyk6XG4gICAgICAgICAgICB0aGlzLmFkZFRhZyh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMucHJldklucHV0VmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSAnNXB4JztcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFjdHMgdG8gY2xpY2tzIG9uIHRoZSB0YWdzIGlucHV0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RUYWdzRGlzcGxheVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGEgc3VnZ2VzdGVkIHRhZ1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0VGFnc0Rpc3BsYXlcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RhZ0VudGl0eX0gdGFnXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblN1Z2dlc3Rpb25DbGljayh0YWcsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHRoaXMuYWRkVGFnKHRhZy50ZXh0KTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnByZXZJbnB1dFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3VnZ2VzdGlvbnMgb24gZG9jdW1lbnQgY2xpY2tcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdFRhZ3NEaXNwbGF5XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjbGVhclN1Z2dlc3Rpb25zKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50VGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhcmdldC5jbGFzc05hbWUgPT09ICd0YWdfc3VnZ2VzdGlvbnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWdnZXN0aW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5SZWFjdFRhZ3NEaXNwbGF5LnByb3BUeXBlcyA9IHtcbiAgICBoaWRkZW5GaWVsZHNDb250YWluZXI6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEhUTUxFbGVtZW50KS5pc1JlcXVpcmVkLFxuICAgIHRhZ3NUZXh0TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgeGhyUm91dGVDYWxsYmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuUmVhY3RUYWdzRGlzcGxheS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFnc1RleHRMYWJlbDogJ3RleHQnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzeC9SZWFjdFRhZ3NEaXNwbGF5LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBhIHNvcnQgc3RhdGVcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTb3J0VHlwZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IG9yZGVyQnkgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiB3ZSdyZSBvcmRlcmluZyBieVxuICogQHByb3BlcnR5IHtib29sZWFufSBvcmRlclJldmVyc2UgVHJ1ZSBpZiB0aGUgb3JkZXIgaXMgcmV2ZXJzZWRcbiAqL1xuXG4vKipcbiAqIEdyaWQgY2xhc3MgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0dyaWRQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIGdyaWRcbiAqIEBjbGFzcyBHcmlkXG4gKiBAY2xhc3NkZXNjIEdyaWQgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggZ3JpZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBncmlkIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNncmlkXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdEdyaWR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIGdyaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZCNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjcHJvcHNcbiAgICAgICAgICogQHR5cGUge0dyaWRQcm9wc31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ3JpZFByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgR3JpZCBDb21wb25lbnQgd2l0aGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCBpbnRvIHdoaWNoIHRvIHJlbmRlciB0aGUgQ29tcG9uZW50XG4gICAgICovXG4gICAgcmVuZGVyKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmdyaWQgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdEdyaWQsIHsgLi4udGhpcy5ncmlkUHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyByb3dzIHRvIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtuZHhdIEFuIG9wdGlvbmFsIGluZGV4IGludG8gd2hpY2ggdG8gaW5zZXJ0IHRoZSByb3dzXG4gICAgICovXG4gICAgYWRkUm93cyhyb3dzLCBuZHgpIHtcbiAgICAgICAgdGhpcy5ncmlkLmFkZFJvd3Mocm93cywgbmR4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBleGlzdGluZyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50IGFuZCBhZGRzIG5ldyByb3dzIHByb3ZpZGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Um93UHJvcHNbXX0gcm93cyBUaGUgcm93cyB0byBzZXRcbiAgICAgKi9cbiAgICBzZXRSb3dzKHJvd3MpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldFJvd3Mocm93cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyByb3dzIGZyb20gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggU3RhcnRpbmcgaW5kZXggaW50byB3aGljaCB0byBkZWxldGUgcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPTFdIFRoZSBudW1iZXIgb2Ygcm93cyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVSb3dzKG5keCwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVSb3dzKG5keCwgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IHJvd3MgYnkgYSBzcGVjaWZpYyBjb2x1bW4gbmFtZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEJ5IFRoZSBjb2x1bW4gbmFtZSB0byBzb3J0IGJ5XG4gICAgICovXG4gICAgc29ydEJ5KHNvcnRCeSkge1xuICAgICAgICB0aGlzLmdyaWQuc29ydEJ5KHNvcnRCeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb3J0IHNpdHVhdGlvbiBvZiBhIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U29ydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJvdyBhdCBuZHhcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5keCBUaGUgaW5kZXggYXQgd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvd1xuICAgICAqIEByZXR1cm4ge0dyaWRSb3d8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRSb3cobmR4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Um93KG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcm93cyBhcyBhbiBBcnJheSBvZiBHcmlkUm93IG9iamVjdHNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBpZHMgb2YgdGhlIHNlbGVjdGVkIHJvd3MgaW4gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNlbGVjdGVkUm93SWRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29sdW1uIGNvbGxlY3Rpb25cbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtHcmlkQ29sdW1uW119XG4gICAgICovXG4gICAgZ2V0Q29sdW1ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBjb2x1bW5zIGR5bmFtaWNhbGx5XG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0dyaWRDb2x1bW5bXX0gY29sdW1uc1xuICAgICAqL1xuICAgIHNldENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnNldENvbHVtbnMoY29sdW1ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgcmVwcmVzZW50aW5nIHRoZSByb3cgaWRlbnRpZmllZCBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSByb3cgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqL1xuICAgIGRlbGV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSByb3cgd2l0aCBuZXcgZGF0YSwgbGVhdmVzIHByZXZpb3VzIGZpZWxkcyBpbnRhY3RcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZVJvdyhpZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIGNlbGwgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdGhlIGNlbGwgaXMgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGlkZW50aWZpZWQgd2l0aCB0aGUgY2VsbFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNlbGxcbiAgICAgKi9cbiAgICB1cGRhdGVDZWxsKGlkLCBjb2xOYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmdyaWQudXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0gbG9hZGluZ1xuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLmdyaWQuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmlkIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGVuYWJsZWRcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkLmpzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBSb3cgcHJvcGVydGllcyBvYmplY3QgdG8gZGVmaW5lIGEgcm93XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUm93UHJvcHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWRdIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJvd1xuICogQHByb3BlcnR5IHsqfSBkYXRhIFRoZSByYXcgZGF0YSBmb3IgdGhlIHJvd1xuICovXG5cbi8qKlxuICogR3JpZCBSb3cgQ29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge1Jvd1Byb3BzfEdyaWRSb3d9IHByb3BzXG4gKiBAY2xhc3MgR3JpZFJvd1xuICogQGNsYXNzZGVzYyBDbGFzcyByZXByZXNlbnRpbmcgYSBSb3cgaW4gdGhlIEdyaWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRSb3cge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcyBpbnN0YW5jZW9mIEdyaWRSb3cpIHtcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGlkIG9mIHRoZSByb3dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNpZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkID8gcHJvcHMuaWQgOiBHcmlkUm93LmdldE5leHRSb3dJZCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmF3IGRhdGEgZm9yIHRoZSByb3dcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgeyp9XG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHByb3BzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGUgcm93IGlzIHNlbGVjdGVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjc2VsZWN0ZWRcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlIHJvdyBpcyBub3QgZmlsdGVyZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZFJvdyNzaG93XG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCByb3cgaWRcbiAqXG4gKiBAbWVtYmVyT2YgR3JpZFJvd1xuICogQHN0YXRpY1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5HcmlkUm93LmdldE5leHRSb3dJZCA9ICgpID0+IChgJ3Jvd18ke0dyaWRSb3cubmV4dFJvd0lkKyt9YCk7XG5cbi8qKlxuICogTmV4dCBpZCByb3cgZ2VuZXJhdG9yXG4gKlxuICogQHR5cGUge251bWJlcn1cbiAqIEBtZW1iZXJPZiBHcmlkUm93XG4gKiBAc3RhdGljXG4gKi9cbkdyaWRSb3cubmV4dFJvd0lkID0gMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZFJvdy5qcyIsIi8qKlxuICogRm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYSBjZWxsIHZhbHVlXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRpbmdDYWxsYmFja1xuICogQHBhcmFtIHsqfSB2YWx1ZSBDZWxsIHZhbHVlXG4gKiBAcGFyYW0ge0dyaWRSb3d9IHJvdyBUaGUgZW50aXJlIHJvd1xuICogQHJldHVybiB7c3RyaW5nfEhUTUxFbGVtZW50fFJlYWN0LkNvbXBvbmVudH1cbiAqL1xuXG4vKipcbiAqIENvbHVtbiBwcm9wZXJ0aWVzIG9iamVjdCB0byBkZWZpbmUgYSBjb2x1bW5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2x1bW5Qcm9wc1xuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gYXMgY29taW5nIGZyb20gaW5wdXQgZGF0YVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtkaXNwbGF5TmFtZV0gVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29sdW1uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3dpZHRoXSBBbiBIVE1MIHZhbHVlIGZvciB3aWR0aCAoZWl0aGVyIHBpeGVscyBvciBwZXJjZW50YWdlKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjbGFzc05hbWVdIFRoZSBjbGFzcyBmb3IgdGhlIGNvbHVtblxuICogQHByb3BlcnR5IHtGb3JtYXR0aW5nQ2FsbGJhY2t9IFtmb3JtYXRdIEEgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgdGhlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzb3J0YWJsZV0gVHJ1ZSBpZiB0aGUgY29sdW1uIGlzIHNvcnRhYmxlXG4gKi9cblxuLyoqXG4gKiBHcmlkIGNvbHVtbiBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7Q29sdW1uUHJvcHN9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBjb2x1bW5cbiAqIEBjbGFzcyBHcmlkQ29sdW1uXG4gKiBAY2xhc3NkZXNjIENsYXNzIHJlcHJlc2VudGluZyBhIGNvbHVtbiBpbiBhIEdyaWQgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRDb2x1bW4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHNldFdpZHRoID0gKHdpZHRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IC9eKFxcZCkrW3B4fCVdJC87XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3dpZHRofXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsaWRhdGUudGVzdCh3aWR0aC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gYXMgY29taW5nIGZyb20gaW5wdXQgZGF0YVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNuYW1lXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSBjb2x1bW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNkaXNwbGF5TmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZSA9IHByb3BzLmRpc3BsYXlOYW1lID8gcHJvcHMuZGlzcGxheU5hbWUgOiB0aGlzLm5hbWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEhUTUwgdmFsdWUgZm9yIHdpZHRoIChlaXRoZXIgcGl4ZWxzIG9yIHBlcmNlbnRhZ2UpXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jd2lkdGhcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMud2lkdGggPSBzZXRXaWR0aChwcm9wcy53aWR0aCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBmb3IgdGhlIGNvbHVtblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2NsYXNzTmFtZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb3B0aW9uYWwgZm9ybWF0dGluZyBmdW5jdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI2Zvcm1hdFxuICAgICAgICAgKiBAdHlwZSB7ZnVuY3Rpb258dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JtYXQgPSBwcm9wcy5mb3JtYXQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG9wdGlvbmFsIGZvcm1hdHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNzb3J0YWJsZVxuICAgICAgICAgKiBAdHlwZSB7Ym9vbHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNvcnRhYmxlID0gcHJvcHMuc29ydGFibGU7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9HcmlkQ29sdW1uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0VHJlZSBmcm9tICcuLi9qc3gvUmVhY3RUcmVlJztcblxuLyoqXG4gKiBUcmVlIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFjdFRyZWVQcm9wc30gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHRyZWVcbiAqIEBjbGFzcyBUcmVlXG4gKiBAY2xhc3NkZXNjIFRyZWUgbWFpbiBjbGFzcywgdXNlIHRoaXMgY2xhc3MgdG8gaW50ZXJmYWNlIHdpdGggdHJlZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmVlIGNvbXBvbmVudCByZWZlcmVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSN0cmVlXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdFRyZWV9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWQgb2YgdGhlIHRyZWVcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgVHJlZSNpZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZCA9IHByb3BzLmlkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcHMgZm9yIHRoZSB0cmVlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIFRyZWUjcHJvcHNcbiAgICAgICAgICogQHR5cGUge1JlYWN0VHJlZVByb3BzfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmVlUHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZWFjdFRyZWUgQ29tcG9uZW50IHdpdGhpbiB0aGUgdHJlZSBjb250YWluZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBlbGVtZW50IGludG8gd2hpY2ggdG8gcmVuZGVyIHRoZSBDb21wb25lbnRcbiAgICAgKi9cbiAgICByZW5kZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMudHJlZSA9IFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0VHJlZSwgeyAuLi50aGlzLnRyZWVQcm9wcyB9KSwgY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsb2FkaW5nIHN0YXRlIGluIHRoZSB0cmVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBUcnVlIGlmIHdlIHNob3cgb25seSBhIGxvYWRpbmcgc3Bpbm5lclxuICAgICAqL1xuICAgIHNldExvYWRpbmcobG9hZGluZykge1xuICAgICAgICB0aGlzLnRyZWUuc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIGRhdGEgb24gdGhlIHRyZWUuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7VHJlZUl0ZW1bXX0gZGF0YSBUaGUgcm9vdCBpdGVtIGxpc3QgZm9yIHRoZSB0cmVlIHdpdGggYWxsIGl0cyBjaGlsZHJlblxuICAgICAqL1xuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnRyZWUuc2V0RGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBpdGVtIGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRJdGVtSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWUuZ2V0U2VsZWN0ZWRJdGVtSWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb24gdGhlIHRyZWUgYmFzZWQgaW4gdGhlIGl0ZW0ncyBwYXJlbnRJZCBwcm9wZXJ0eVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFRyZWVcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1RyZWVJdGVtfSBpdGVtIFRoZSBpdGVtIHRvIGFkZFxuICAgICAqL1xuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLnRyZWUuYWRkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFuIGl0ZW0gaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtUcmVlSXRlbX0gaXRlbSBUaGUgaXRlbSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy50cmVlLnVwZGF0ZUl0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGl0ZW0gaWQgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgdGhpcy50cmVlLmRlbGV0ZUl0ZW1CeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbmQgcmV0dXJucyBhbiBpdGVtIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgVHJlZVxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaWQgVGhlIGlkIG9mIHRoZSBpdGVtIHRvIGZpbmRcbiAgICAgKi9cbiAgICBmaW5kSXRlbUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlZS5maW5kSXRlbUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVuYWJsZWQgc3RhdGUgb2YgdGhlIFRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkIFRydWUgaWYgdGhlIFRyZWUgaXMgaW50ZXJhY3RpdmVcbiAgICAgKi9cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy50cmVlLnNldEVuYWJsZWQoZW5hYmxlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhwYW5kcyBhbGwgdGhlIGl0ZW1zIHdpdGggY2hpbGRyZW5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgZXhwYW5kQWxsKCkge1xuICAgICAgICB0aGlzLnRyZWUuZXhwYW5kQWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJhY3RzIGFsbCB0aGUgaXRlbXMgaW4gdGhlIHRyZWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBUcmVlXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY29udHJhY3RBbGwoKSB7XG4gICAgICAgIHRoaXMudHJlZS5jb250cmFjdEFsbCgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvVHJlZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJy4uL2pzeC9SZWFjdE1vZGFsJztcblxuLyoqXG4gKiBAY2xhc3MgTW9kYWxcbiAqIEBjbGFzc2Rlc2MgSW1wbGVtZW50cyBhIG1vZGFsIGNsYXNzIGFzIGEgcHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gICAgLyoqXG4gICAgICogTW9kYWwgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtSZWFjdE1vZGFsfG51bGx9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vZGFsID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgbW9kYWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgICAqIEBtZW1iZXJPZiBNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubW9kYWwgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdE1vZGFsLCB7IC4uLnRoaXMucHJvcHMgfSksIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBtb2RhbCBhcyBwcm9taXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vZGFsU3RhdGV9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqIEBtZW1iZXJPZiBNb2RhbFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNob3cob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMub25TdWNjZXNzID0gc3VjY2VzcztcbiAgICAgICAgICAgIG9wdGlvbnMub25SZWplY3QgPSByZWplY3Q7XG5cbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2V0U3RhdGUob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHsod2luZG93LmlubmVyV2lkdGggLSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aCkgLyAyfXB4YDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQpIC8gMn1weGA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgT2sgYnV0dG9uIHRlbXBsYXRlXG4gKiBAcmV0dXJuIHtNb2RhbEJ1dHRvbn1cbiAqIEBtZW1iZXJPZiBNb2RhbFxuICogQHN0YXRpY1xuICovXG5Nb2RhbC5nZXRPa0J1dHRvbiA9ICgpID0+ICh7XG4gICAga2V5OiAnb2snLFxuICAgIGxhYmVsOiAnT2snLFxuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1hY3Rpb24nXG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgWWVzIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0WWVzQnV0dG9uID0gKCkgPT4gKHtcbiAgICBrZXk6ICd5ZXMnLFxuICAgIGxhYmVsOiAnWWVzJyxcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tYWN0aW9uJ1xufSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIE5vIGJ1dHRvbiB0ZW1wbGF0ZVxuICogQHJldHVybiB7TW9kYWxCdXR0b259XG4gKiBAbWVtYmVyT2YgTW9kYWxcbiAqIEBzdGF0aWNcbiAqL1xuTW9kYWwuZ2V0Tm9CdXR0b24gPSAoKSA9PiAoe1xuICAgIGtleTogJ25vJyxcbiAgICBsYWJlbDogJ05vJyxcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWNhbmNlbCdcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Nb2RhbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbi8qKlxuICogVGFnc01hbmFnZXIgQ29uc3RydWN0b3IgLSBMb2FkcyB0aGUgdGFncyBwcmVzZW50IGluIHRoZSBmb3JtXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGlkZGVuRmllbGRzQ29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBmb3IgdGhlIGhpZGRlbiBmaWVsZHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhZ3NDb250YWluZXIgLSBUaGUgY29udGFpbmVyIHdoZXJlIHRoZSB0YWdzIHdpbGwgYmUgcmVuZGVyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdGaWVsZE5hbWVQcmVmaXggLSBUaGUgZmllbGQgbmFtZSBvZiB0aGUgaGlkZGVuIHRhZyBmaWVsZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdzVGV4dExhYmVsIC0gVGhlIGZvciBhdHRyaWJ1dGUgZm9yIHRoZSB0YWdzIGxhYmVsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoeHJSb3V0ZUNhbGxiYWNrIC0gVGhlIHJvdXRlIHRvIHRoZSB4aHIgQVBJIGNhbGwgdG8gYnJpbmcgc3VnZ2VzdGlvbnNcbiAqXG4gKiBAY2xhc3MgVGFnc01hbmFnZXJcbiAqIEBjbGFzc2Rlc2MgTWFuYWdlciBmb3IgdGFnIGVkaXRpbmcgaW4gcG9zdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnc01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGhpZGRlbkZpZWxkc0NvbnRhaW5lciwgdGFnc0NvbnRhaW5lciwgdGFnRmllbGROYW1lUHJlZml4LCB0YWdzVGV4dExhYmVsLCB4aHJSb3V0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7VGFnRW50aXR5W119XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAgICAgLy8gUHJvY2VzcyBleGlzdGluZyBmb3JtIGZpZWxkc1xuICAgICAgICBjb25zdCB0YWdGaWVsZHMgPSAkLmZpbmQoJ2lucHV0W3R5cGU9aGlkZGVuXScpO1xuXG4gICAgICAgIGxldCBjdXJyZW50VGFnSWQgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFRhZyA9IHt9O1xuXG4gICAgICAgIHRhZ0ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFnUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dGFnRmllbGROYW1lUHJlZml4fVxcXFxfKFxcXFxkKylcXFxcXyhpZHx0ZXh0KSRgKTtcbiAgICAgICAgICAgIGNvbnN0IFtsYWJlbCwgdGFnSWQsIHRhZ0ZpZWxkXSA9IGZpZWxkLmlkLm1hdGNoKHRhZ1JlZ0V4cCk7XG5cbiAgICAgICAgICAgIGlmIChOdW1iZXIodGFnSWQpICE9PSBjdXJyZW50VGFnSWQpIHtcbiAgICAgICAgICAgICAgICB0YWdzLnB1c2goY3VycmVudFRhZyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhZ0lkID0gTnVtYmVyKHRhZ0lkKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFnID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRUYWcudGFnSWQgPSBjdXJyZW50VGFnLnRhZ0lkID9cbiAgICAgICAgICAgICAgICBgJHtjdXJyZW50VGFnLnRhZ0lkfXwke2xhYmVsfWAgOlxuICAgICAgICAgICAgICAgIGxhYmVsO1xuXG4gICAgICAgICAgICBjdXJyZW50VGFnW3RhZ0ZpZWxkXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VycmVudFRhZy5pZCAmJiBjdXJyZW50VGFnLnRleHQpIHtcbiAgICAgICAgICAgIHRhZ3MucHVzaChjdXJyZW50VGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFnc0Rpc3BsYXkgPSBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFRhZ3NEaXNwbGF5LCB7XG4gICAgICAgICAgICBoaWRkZW5GaWVsZHNDb250YWluZXIsXG4gICAgICAgICAgICB0YWdzVGV4dExhYmVsLFxuICAgICAgICAgICAgeGhyUm91dGVDYWxsYmFja1xuICAgICAgICB9KSwgdGFnc0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50YWdzRGlzcGxheS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWdzXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvVGFnc01hbmFnZXIuanMiLCJpbXBvcnQgR3JpZCBmcm9tICcuLi9lczYvR3JpZCc7XG5pbXBvcnQgVHJlZSBmcm9tICcuLi9lczYvVHJlZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vZXM2L01vZGFsJztcbmltcG9ydCBUYWdzTWFuYWdlciBmcm9tICcuLi9lczYvVGFnc01hbmFnZXInO1xuaW1wb3J0IFJlYWN0R3JpZCBmcm9tICcuLi9qc3gvUmVhY3RHcmlkJztcbmltcG9ydCBSZWFjdFRyZWUgZnJvbSAnLi4vanN4L1JlYWN0VHJlZSc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICcuLi9qc3gvUmVhY3RNb2RhbCc7XG5pbXBvcnQgUmVhY3RUYWdzRGlzcGxheSBmcm9tICcuLi9qc3gvUmVhY3RUYWdzRGlzcGxheSc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHtcbiAgICAgICAgR3JpZCxcbiAgICAgICAgTW9kYWwsXG4gICAgICAgIFRyZWUsXG4gICAgICAgIFRhZ3NNYW5hZ2VyLFxuICAgICAgICBSZWFjdEdyaWQsXG4gICAgICAgIFJlYWN0VHJlZSxcbiAgICAgICAgUmVhY3RNb2RhbCxcbiAgICAgICAgUmVhY3RUYWdzRGlzcGxheVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHVibGljL1JlYWN0TGliLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==