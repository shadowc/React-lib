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
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReactGrid = __webpack_require__(4);

var _ReactGrid2 = _interopRequireDefault(_ReactGrid);

var _Grid = __webpack_require__(8);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window.ReactLib === 'undefined') {
    window.ReactLib = {};
}

window.ReactLib.ReactGrid = _ReactGrid2.default;
window.ReactLib.Grid = _Grid2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI3ZDBlYmM0NmFiNGQ3MzBlYWMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlByb3BUeXBlc1wiIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVhY3RHcmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9HcmlkUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL1JlYWN0R3JpZC5qcyJdLCJuYW1lcyI6WyJSZWFjdEdyaWQiLCJwcm9wcyIsImNvbHMiLCJjb2x1bW5zIiwibWFwIiwiY29sIiwicm93cyIsImluaXRpYWxEYXRhIiwicm93Iiwic3RhdGUiLCJyYXdEYXRhIiwicHJldlNlbGVjdGVkUm93Iiwib3JkZXJCeSIsIm9yZGVyUmV2ZXJzZSIsImxvYWRpbmciLCJlbmFibGVkIiwic29ydEZuIiwic29ydGluZ3MiLCJzb3J0IiwicmV2ZXJzZSIsImNsYXNzTmFtZSIsInNvcnRSb3dzIiwiaWQiLCJyZW5kZXJDb2x1bW4iLCJiaW5kIiwibGVuZ3RoIiwicmVuZGVyUm93IiwiY29sdW1uIiwic3R5bGUiLCJ3aWR0aCIsIm5hbWUiLCJnZW5lcmF0ZUhlYWRlckNsaWNrIiwiZGlzcGxheU5hbWUiLCJyb3dDbGFzc05hbWUiLCJkYXRhIiwic2VsZWN0ZWQiLCJkaXNwbGF5Iiwic2hvdyIsInJlbmRlckNlbGwiLCJjZWxsQ2xhc3NOYW1lIiwicm93RGF0YSIsInRvU3RyaW5nIiwiY29udGVudHMiLCJmb3JtYXQiLCJjYWxsIiwiZ2VuZXJhdGVDZWxsQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhlYWRlckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyb290RWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkaXNwYXRjaEV2ZW50Iiwib25Db2x1bW5IZWFkZXJDbGljayIsImkiLCJjb2xOYW1lIiwicm93TmR4IiwiZ2V0Um93TmR4IiwidXBkYXRlTGFzdFJvdyIsInNlbGVjdE9uZVJvdyIsImN1clJvdyIsImZvckVhY2giLCJpbm5lclJvdyIsInNlbGVjdFJvd1JhbmdlIiwic2V0RnJvbSIsIk1hdGgiLCJtaW4iLCJzZXRUbyIsIm1heCIsInNlbGVjdFJvd1JhbmdlRXhjbHVzaXZlIiwic2VsZWN0YWJsZSIsInNoaWZ0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJtdWx0aXNlbGVjdCIsInNldFN0YXRlIiwiY2VsbEV2ZW50IiwiY2VsbCIsIm9uQ2VsbENsaWNrIiwibmR4IiwiZ3JpZFJvd3MiLCJyYXdEYXRhUm93cyIsImV4dGVuZCIsIm5ld1Jvd3MiLCJzbGljZSIsIm5ld0RhdGEiLCJzb3J0QnkiLCJyZXQiLCJwdXNoIiwiZGVsZXRlUm93cyIsInJvd0l0ZW0iLCJuZXdSb3ciLCJuZXdSYXdEYXRhIiwic3BsaWNlIiwidmFsdWUiLCJyYXdEYXRhSXRlbSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJmdW5jIiwic29ydGFibGUiLCJib29sIiwib2JqZWN0Iiwib2JqZWN0T2YiLCJkZWZhdWx0UHJvcHMiLCJHcmlkIiwiZ3JpZCIsImdyaWRQcm9wcyIsImNvbnRhaW5lciIsInJlbmRlciIsImFkZFJvd3MiLCJzZXRSb3dzIiwiZ2V0U29ydCIsImdldFJvdyIsImdldFNlbGVjdGVkUm93cyIsImdldFNlbGVjdGVkUm93SWRzIiwiZ2V0Q29sdW1ucyIsInNldENvbHVtbnMiLCJnZXRCeUlkIiwiZGVsZXRlQnlJZCIsInVwZGF0ZVJvdyIsInVwZGF0ZUNlbGwiLCJjbGVhciIsInNldExvYWRpbmciLCJzZXRFbmFibGVkIiwiR3JpZFJvdyIsImdldE5leHRSb3dJZCIsIm5leHRSb3dJZCIsIkdyaWRDb2x1bW4iLCJzZXRXaWR0aCIsInZhbGlkYXRlIiwidGVzdCIsIndpbmRvdyIsIlJlYWN0TGliIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsdUI7Ozs7OztBQ0FBLHdCOzs7Ozs7QUNBQSwwQjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOzs7Ozs7OztJQVFxQkEsUzs7O0FBQ2pCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsWUFBTUMsT0FBTyxNQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCO0FBQUEsbUJBQU8seUJBQWVDLEdBQWYsQ0FBUDtBQUFBLFNBQXZCLENBQWI7QUFDQSxZQUFNQyxPQUFPLE1BQUtMLEtBQUwsQ0FBV00sV0FBWCxDQUF1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QUFvQi9CLE1BQU0rQixXQUExQixHQUF3QyxLQUFLRixJQUFoRTs7QUFFQTs7Ozs7O0FBTUEsT0FBS0QsS0FBTCxHQUFhNkcsU0FBU3pJLE1BQU00QixLQUFmLENBQWI7O0FBRUE7Ozs7OztBQU1BLE9BQUtULFNBQUwsR0FBaUJuQixNQUFNbUIsU0FBTixHQUFrQm5CLE1BQU1tQixTQUF4QixHQUFvQyxFQUFyRDs7QUFFQTs7Ozs7O0FBTUEsT0FBS3VCLE1BQUwsR0FBYzFDLE1BQU0wQyxNQUFwQjs7QUFFQTs7Ozs7O0FBTUEsT0FBS2tFLFFBQUwsR0FBZ0I1RyxNQUFNNEcsUUFBdEI7QUFDSCxDOztrQkE3RGdCNEIsVTs7Ozs7Ozs7Ozs7OztBQzdCckI7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxPQUFPSSxPQUFPQyxRQUFkLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDRCxXQUFPQyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0g7O0FBRURELE9BQU9DLFFBQVAsQ0FBZ0I5SSxTQUFoQjtBQUNBNkksT0FBT0MsUUFBUCxDQUFnQjVCLElBQWhCLGtCIiwiZmlsZSI6IlJlYWN0R3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMjdkMGViYzQ2YWI0ZDczMGVhYyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IFByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb3BUeXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRSb3cgZnJvbSAnLi4vZXM2L0dyaWRSb3cnO1xuaW1wb3J0IEdyaWRDb2x1bW4gZnJvbSAnLi4vZXM2L0dyaWRDb2x1bW4nO1xuXG4vKipcbiAqIERlZmluaXRpb24gZm9yIFJlYWN0R3JpZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBHcmlkU3RhdGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IHJhd0RhdGEgVGhlIHJhdyBkYXRhIGluIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge0dyaWRDb2x1bW5bXX0gY29sdW1ucyBUaGUgY29sdW1ucyBvZiB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtHcmlkUm93W119IHJvd3MgVGhlIHJvd3MgaW4gdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmV2U2VsZWN0ZWRSb3cgVGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93XG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdG8gb3JkZXIgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgb2YgdGhlIG9yZGVyIHNob3VsZCBiZSByZXZlcnNlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2FkaW5nIFRydWUgaWYgdGhlIGdyaWQgc2hvd3MgYSBsb2FkaW5nIHNwaW5uZXJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZW5hYmxlZCBUcnVlIGlmIHRoZSBncmlkIGlzIGludGVyYWN0aXZlXG4gKi9cblxuLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIGNhbGxiYWNrLCBzaG91bGQgcmV0dXJuIC0xIGlmIGEgaXMgbG93ZXIgdGhhbiBiLFxuICogMCBpZiByb3dzIGFyZSBlcXVhbCBhbmQgMSBpZiBhIGlzIGdyZWF0ZXIgdGhhbiBiXG4gKlxuICogQGNhbGxiYWNrIFNvcnRDYWxsYmFja1xuICogQHBhcmFtIHtHcmlkUm93fSBhIFJvdyBhXG4gKiBAcGFyYW0ge0dyaWRSb3d9IGIgUm93IGJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIENsYXNzTmFtZSBjYWxsYmFjaywgYSBmdW5jdGlvbiB0byByZXR1cm4gYSBjbGFzc05hbWUgKHN0cmluZylcbiAqIGJhc2VkIG9uIHJvdy9jb2x1bW4gaW5mb3JtYXRpb25cbiAqXG4gKiBAY2FsbGJhY2sgY2xhc3NOYW1lQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcm93IFRoZSByb3cgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2x1bW5dIFRoZSBjb2x1bW4gd2UncmUgcmVuZGVyaW5nIChmb3IgY2VsbCBjbGFzc05hbWVzKVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgUmVhY3RHcmlkIHByb3BzIG9iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IEdyaWRQcm9wc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZD1ncmlkXSBUaGUgaWQgb2YgdGhlIGdyaWRcbiAqIEBwcm9wZXJ0eSB7Q29sdW1uUHJvcHNbXX0gY29sdW1ucyBUaGUgY29sdW1ucyBkZWZpbml0aW9uIGZvciB0aGUgZ3JpZFxuICogQHByb3BlcnR5IHtSb3dQcm9wc1tdfSBpbml0aWFsRGF0YSBUaGUgaW5pdGlhbCBkYXRhIHRvIHBvcHVsYXRlIHRoZSBncmlkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3JkZXJCeSBUaGUgY29sdW1uIG5hbWUgdGhhdCB3ZSdyZSBzb3J0aW5nIGZvclxuICogQHByb3BlcnR5IHtib29sZWFufSBbb3JkZXJSZXZlcnNlPWZhbHNlXSBUcnVlIGlmIHdlJ3JlIGluIHJldmVyc2Ugb3JkZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsU29ydENhbGxiYWNrPn0gW3NvcnRpbmdzXSBBIHNldCBvZiBzb3J0aW5nIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtjbGFzc05hbWVDYWxsYmFja30gW3Jvd0NsYXNzTmFtZV0gQSBjYWxsYmFjayB0byBzZXQgdGhlIGNsYXNzTmFtZSBvZiBhIHJvd1xuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIEBwcm9wZXJ0eSB7Y2xhc3NOYW1lQ2FsbGJhY2t9IFtjZWxsQ2xhc3NOYW1lXSBBIGNhbGxiYWNrIHRvIHNldCB0aGUgY2xhc3NOYW1lIG9mIGEgY2VsbFxuICogYmFzZWQgb24gaXRzIGRhdGFcbiAqIGZvciBlYWNoIHNvcnRhYmxlIGNvbHVtblxuICogQHByb3BlcnR5IHtib29sZWFufSBbc2VsZWN0YWJsZT10cnVlXSBUcnVlIGlmIHRoZSBncmlkIGlzIHNlbGVjdGFibGVcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW211bHRpc2VsZWN0PWZhbHNlXSBUcnVlIGlmIHdlIHdpbGwgZW5hYmxlIG11bHRpc2VsZWN0IGluIHRoZSBncmlkXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHJlYWN0IGdyaWQgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IHByb3BzIFJlYWN0IHByb3BzXG4gKiBAY2xhc3MgUmVhY3RHcmlkXG4gKiBAY2xhc3NkZXNjIFJlYWN0IEdyaWQgQ29tcG9uZW50IGNsYXNzXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgY29scyA9IHRoaXMucHJvcHMuY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpO1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy5wcm9wcy5pbml0aWFsRGF0YS5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RhdGUgb2JqZWN0IGZvciB0aGUgZ3JpZCBjb21wb25lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgUmVhY3RHcmlkI3N0YXRlXG4gICAgICAgICAqIEB0eXBlIHtHcmlkU3RhdGV9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHMsXG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgcHJldlNlbGVjdGVkUm93OiAtMSxcbiAgICAgICAgICAgIG9yZGVyQnk6IHRoaXMucHJvcHMub3JkZXJCeSxcbiAgICAgICAgICAgIG9yZGVyUmV2ZXJzZTogdGhpcy5wcm9wcy5vcmRlclJldmVyc2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgcm93cyBpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIHNvcnRSb3dzKCkge1xuICAgICAgICBjb25zdCBzb3J0Rm4gPSB0aGlzLnByb3BzLnNvcnRpbmdzW3RoaXMuc3RhdGUub3JkZXJCeV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoc29ydEZuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnNvcnQoc29ydEZuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9yZGVyUmV2ZXJzZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yb3dzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGB0YWJsZS13cmFwcGVyJHt0aGlzLnN0YXRlLmVuYWJsZWQgPyAnJyA6ICcgZGlzYWJsZWQnfWA7XG4gICAgICAgIHRoaXMuc29ydFJvd3MoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+e3RoaXMuc3RhdGUuY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzKSl9PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49e3RoaXMuc3RhdGUuY29sdW1ucy5sZW5ndGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBsb2FkaW5nXCI+Jm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MubWFwKHRoaXMucmVuZGVyUm93LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYSBjb2x1bW4gaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcmVuZGVyQ29sdW1uKGNvbHVtbikge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgd2lkdGg6IGNvbHVtbi53aWR0aCB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29sdW1uLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5nZW5lcmF0ZUhlYWRlckNsaWNrLmJpbmQodGhpcywgY29sdW1uKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgcm93IGluIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHJlbmRlclJvdyhyb3cpIHtcbiAgICAgICAgY29uc3Qgcm93Q2xhc3NOYW1lID0gdGhpcy5wcm9wcy5yb3dDbGFzc05hbWUocm93LmRhdGEpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtyb3dDbGFzc05hbWV9ICR7cm93LnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5OiByb3cuc2hvdyA/ICd0YWJsZS1yb3cnIDogJ25vbmUnIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgIGtleT17cm93LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtyb3cuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ2VsbC5iaW5kKHRoaXMsIHJvdykpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGEgc2luZ2xlIGNlbGwgaW4gdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7R3JpZFJvd30gcm93XG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1ufSBjb2xcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICByZW5kZXJDZWxsKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2VsbENsYXNzTmFtZShyb3cuZGF0YSwgY29sKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7IHdpZHRoOiBjb2wud2lkdGggfTtcbiAgICAgICAgY29uc3Qgcm93RGF0YSA9IChyb3cuZGF0YVtjb2wubmFtZV0gPyByb3cuZGF0YVtjb2wubmFtZV0udG9TdHJpbmcoKSA6ICcnKTtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSB0eXBlb2YgY29sLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICBjb2wuZm9ybWF0LmNhbGwodGhpcywgcm93LmRhdGFbY29sLm5hbWVdLCByb3cpIDpcbiAgICAgICAgICAgIHJvd0RhdGE7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgIGtleT17YCR7cm93LmlkfSAke2NvbC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVDZWxsQ2xpY2suYmluZCh0aGlzLCByb3csIGNvbC5uYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIG51bGwsIGNvbnRlbnRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIGV2ZW50IHdoZW4gYSBjbGljayBpcyBtYWRlIGluIHRoZSBncmlkIGhlYWRlclxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbn0gY29sdW1uXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBUaGUgcmVhY3QgZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGdlbmVyYXRlSGVhZGVyQ2xpY2soY29sdW1uLCBldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ0hlYWRlckNsaWNrJywgeyBkZXRhaWw6IGNvbHVtbiB9KTtcblxuICAgICAgICBjb25zdCByb290RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJvcHMuaWQpO1xuXG4gICAgICAgIGlmIChyb290RWxlbSkge1xuICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChoZWFkZXJFdmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbHVtbkhlYWRlckNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ29sdW1uSGVhZGVyQ2xpY2soY29sdW1uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgbnVtZXJpYyBpbmRleCBmb3IgYSBnaXZlbiByb3cgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0dyaWRSb3d9IHJvd1xuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRSb3dOZHgocm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSByb3cuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gZXZlbnQgd2hlbiBhIGNsaWNrIGlzIG1hZGUgaW4gYSBjZWxsXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkUm93fSByb3dcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sTmFtZVxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgVGhlIHJlYWN0IGV2ZW50XG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUNlbGxDbGljayhyb3csIGNvbE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb3dOZHggPSB0aGlzLmdldFJvd05keChyb3cpO1xuICAgICAgICBsZXQgdXBkYXRlTGFzdFJvdyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9uZVJvdyA9IChjdXJSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gIWN1clJvdy5zZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5mb3JFYWNoKChpbm5lclJvdykgPT4ge1xuICAgICAgICAgICAgICAgIGlubmVyUm93LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2UgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldEZyb20gPSBNYXRoLm1pbihyb3dOZHgsIHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRUbyA9IE1hdGgubWF4KHJvd05keCwgdGhpcy5zdGF0ZS5wcmV2U2VsZWN0ZWRSb3cpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzZXRGcm9tOyBpIDw9IHNldFRvOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyUm93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUgPSAoY3VyUm93KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvd3MuZm9yRWFjaCgoaW5uZXJSb3cpID0+IHtcbiAgICAgICAgICAgICAgICBpbm5lclJvdy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNlbGVjdFJvd1JhbmdlKGN1clJvdyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJvd05keCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5ICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCBzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0T25lUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2VFeGNsdXNpdmUocm93KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpICYmIHRoaXMucHJvcHMubXVsdGlzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGkgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxhc3RSb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgJiYgdGhpcy5wcm9wcy5tdWx0aXNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0Um93UmFuZ2Uocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RlZFJvdzogdXBkYXRlTGFzdFJvdyA/IHJvd05keCA6IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkUm93LFxuICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93c1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnQ2VsbENsaWNrJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGw6IGNvbE5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByb3BzLmlkKTtcblxuICAgICAgICAgICAgaWYgKHJvb3RFbGVtKSB7XG4gICAgICAgICAgICAgICAgcm9vdEVsZW0uZGlzcGF0Y2hFdmVudChjZWxsRXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNlbGxDbGljaykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DZWxsQ2xpY2socm93LCBjb2xOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHJvd3MgdG8gdGhlIEdyaWQgQ29tcG9uZW50XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5keCkge1xuICAgICAgICAgICAgbmR4ID0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRSb3dzID0gcm93cy5tYXAocm93ID0+IG5ldyBHcmlkUm93KHJvdykpO1xuICAgICAgICBjb25zdCByYXdEYXRhUm93cyA9IHJvd3MubWFwKHJvdyA9PiAkLmV4dGVuZCh0cnVlLCB7fSwgcm93KSk7XG5cbiAgICAgICAgY29uc3QgbmV3Um93cyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4uZ3JpZFJvd3MsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UobmR4KVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJhd0RhdGEuc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnJhd0RhdGFSb3dzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV4aXN0aW5nIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnQgYW5kIGFkZHMgbmV3IHJvd3MgcHJvdmlkZWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gYWRkXG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJvd3MgPSBbcm93c107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncmlkUm93cyA9IHJvd3MubWFwKHJvdyA9PiBuZXcgR3JpZFJvdyhyb3cpKTtcbiAgICAgICAgY29uc3QgcmF3RGF0YVJvd3MgPSByb3dzLm1hcChyb3cgPT4gJC5leHRlbmQodHJ1ZSwge30sIHJvdykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcm93czogZ3JpZFJvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiByYXdEYXRhUm93c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHJvd3MgZnJvbSB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Jvd3MgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnJvd3Muc2xpY2UoMCwgbmR4KSxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucm93cy5zbGljZShuZHggKyBsZW5ndGgpXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmF3RGF0YS5zbGljZSgwLCBuZHgpLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5yYXdEYXRhLnNsaWNlKG5keCArIGxlbmd0aClcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IG5ld1Jvd3MsXG4gICAgICAgICAgICByYXdEYXRhOiBuZXdEYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNvcnQgcm93cyBieSBhIHNwZWNpZmljIGNvbHVtbiBuYW1lXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1NvcnRUeXBlfVxuICAgICAqL1xuICAgIGdldFNvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzLnN0YXRlLm9yZGVyQnksXG4gICAgICAgICAgICBvcmRlclJldmVyc2U6IHRoaXMuc3RhdGUub3JkZXJSZXZlcnNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIEdyaWRSb3cgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcm93IGF0IG5keFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICBpZiAobmR4IDwgMCB8fCBuZHggPj0gdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEdyaWRSb3codGhpcy5zdGF0ZS5yb3dzW25keF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHJldHVybiB7R3JpZFJvd1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgY29uc3QgcmV0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnJvd3NbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXQucHVzaChuZXcgR3JpZFJvdyh0aGlzLnN0YXRlLnJvd3NbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUm93SWRzKCkge1xuICAgICAgICBjb25zdCByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucm93c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuc3RhdGUucm93c1tpXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRDb2x1bW5bXX1cbiAgICAgKi9cbiAgICBnZXRDb2x1bW5zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1uc1xuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7R3JpZENvbHVtbltdfSBjb2x1bW5zXG4gICAgICovXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29sdW1uczogY29sdW1ucy5tYXAoY29sID0+IG5ldyBHcmlkQ29sdW1uKGNvbCkpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSByb3cgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5yb3dzW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZFJvdyhyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhIHJvdyBieSBpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5yb3dzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUm93cyhpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSByb3cgaWQgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIFBhcnRpYWwgb3IgZnVsbCByb3cgZGF0YSB0byB1cGRhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVSb3coaWQsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gdGhpcy5zdGF0ZS5yYXdEYXRhW2ldO1xuXG4gICAgICAgICAgICBpZiAocm93SXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBuZXcgR3JpZFJvdygkLmV4dGVuZCh0cnVlLCByb3dJdGVtLmRhdGEsIGRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSYXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIHJhd0RhdGEsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucm93cy5zcGxpY2UoaSwgMSwgbmV3Um93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJhd0RhdGEuc3BsaWNlKGksIDEsIG5ld1Jhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IHRoaXMuc3RhdGUucm93cyxcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YTogdGhpcy5zdGF0ZS5yYXdEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgY2VsbCB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0l0ZW0gPSB0aGlzLnN0YXRlLnJvd3NbaV07XG4gICAgICAgICAgICBjb25zdCByYXdEYXRhSXRlbSA9IHRoaXMuc3RhdGUucmF3RGF0YVtpXTtcblxuICAgICAgICAgICAgaWYgKHJvd0l0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcm93SXRlbS5kYXRhW2NvbE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmF3RGF0YUl0ZW1bY29sTmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiB0aGlzLnN0YXRlLnJvd3MsXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGE6IHRoaXMuc3RhdGUucmF3RGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvd3M6IFtdLFxuICAgICAgICAgICAgcmF3RGF0YTogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgZ3JpZFxuICAgICAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIFJlYWN0R3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZW5hYmxlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcFR5cGVzIGZvciBncmlkIGNvbXBvbmVudFxuICpcbiAqIEBtZW1iZXJPZiBSZWFjdEdyaWRcbiAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gKiBAc3RhdGljXG4gKi9cblJlYWN0R3JpZC5wcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBkaXNwbGF5TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgICB9KSksXG4gICAgaW5pdGlhbERhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpc2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9yZGVyUmV2ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc29ydGluZ3M6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuZnVuYyksXG4gICAgb25Db2x1bW5IZWFkZXJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DZWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwcm9wZXJ0aWVzIG9mIHRoZSBSZWFjdEdyaWQgY2xhc3NcbiAqXG4gKiBAbWVtYmVyT2YgUmVhY3RHcmlkXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7R3JpZFByb3BzfVxuICovXG5SZWFjdEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGlkOiAnZ3JpZCcsXG4gICAgY29sdW1uczogW10sXG4gICAgb3JkZXJCeTogJycsXG4gICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICBtdWx0aXNlbGVjdDogZmFsc2UsXG4gICAgb3JkZXJSZXZlcnNlOiBmYWxzZSxcbiAgICBzb3J0aW5nczoge30sXG4gICAgaW5pdGlhbERhdGE6IFtdLFxuICAgIG9uQ29sdW1uSGVhZGVyQ2xpY2s6IG51bGwsXG4gICAgb25DZWxsQ2xpY2s6IG51bGwsXG4gICAgcm93Q2xhc3NOYW1lOiAoKSA9PiAoJycpLFxuICAgIGNlbGxDbGFzc05hbWU6ICgpID0+ICgnJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanN4L1JlYWN0R3JpZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3RHcmlkIGZyb20gJy4uL2pzeC9SZWFjdEdyaWQnO1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgYSBzb3J0IHN0YXRlXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gU29ydFR5cGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBvcmRlckJ5IFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4gd2UncmUgb3JkZXJpbmcgYnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gb3JkZXJSZXZlcnNlIFRydWUgaWYgdGhlIG9yZGVyIGlzIHJldmVyc2VkXG4gKi9cblxuLyoqXG4gKiBHcmlkIGNsYXNzIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtHcmlkUHJvcHN9IFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBncmlkXG4gKiBAY2xhc3MgR3JpZFxuICogQGNsYXNzZGVzYyBHcmlkIG1haW4gY2xhc3MsIHVzZSB0aGlzIGNsYXNzIHRvIGludGVyZmFjZSB3aXRoIGdyaWRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZ3JpZCBjb21wb25lbnQgcmVmZXJlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjZ3JpZFxuICAgICAgICAgKiBAdHlwZSB7UmVhY3RHcmlkfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ncmlkID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIHRoZSBncmlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWQjaWRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BzIGZvciB0aGUgZ3JpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkI3Byb3BzXG4gICAgICAgICAqIEB0eXBlIHtHcmlkUHJvcHN9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdyaWRQcm9wcyA9IHByb3BzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIEdyaWQgQ29tcG9uZW50IHdpdGhpbiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgY29udGFpbmVyIGVsZW1lbnQgaW50byB3aGljaCB0byByZW5kZXIgdGhlIENvbXBvbmVudFxuICAgICAqL1xuICAgIHJlbmRlcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RHcmlkLCB7IC4uLnRoaXMuZ3JpZFByb3BzIH0pLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgcm93cyB0byB0aGUgR3JpZCBDb21wb25lbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtSb3dQcm9wc1tdfSByb3dzIFRoZSByb3dzIHRvIGFkZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbmR4XSBBbiBvcHRpb25hbCBpbmRleCBpbnRvIHdoaWNoIHRvIGluc2VydCB0aGUgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd3Mocm93cywgbmR4KSB7XG4gICAgICAgIHRoaXMuZ3JpZC5hZGRSb3dzKHJvd3MsIG5keCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXhpc3Rpbmcgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudCBhbmQgYWRkcyBuZXcgcm93cyBwcm92aWRlZFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge1Jvd1Byb3BzW119IHJvd3MgVGhlIHJvd3MgdG8gc2V0XG4gICAgICovXG4gICAgc2V0Um93cyhyb3dzKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRSb3dzKHJvd3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgcm93cyBmcm9tIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbmR4IFN0YXJ0aW5nIGluZGV4IGludG8gd2hpY2ggdG8gZGVsZXRlIHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD0xXSBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gZGVsZXRlXG4gICAgICovXG4gICAgZGVsZXRlUm93cyhuZHgsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLmdyaWQuZGVsZXRlUm93cyhuZHgsIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU29ydCByb3dzIGJ5IGEgc3BlY2lmaWMgY29sdW1uIG5hbWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRCeSBUaGUgY29sdW1uIG5hbWUgdG8gc29ydCBieVxuICAgICAqL1xuICAgIHNvcnRCeShzb3J0QnkpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNvcnRCeShzb3J0QnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc29ydCBzaXR1YXRpb24gb2YgYSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtTb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRTb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFNvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgR3JpZFJvdyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByb3cgYXQgbmR4XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZHggVGhlIGluZGV4IGF0IHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb3dcbiAgICAgKiBAcmV0dXJuIHtHcmlkUm93fG51bGx9XG4gICAgICovXG4gICAgZ2V0Um93KG5keCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldFJvdyhuZHgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHJvd3MgYXMgYW4gQXJyYXkgb2YgR3JpZFJvdyBvYmplY3RzXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge0dyaWRSb3dbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgaWRzIG9mIHRoZSBzZWxlY3RlZCByb3dzIGluIHRoZSBHcmlkIENvbXBvbmVudFxuICAgICAqXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFJvd0lkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd0lkcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbHVtbiBjb2xsZWN0aW9uXG4gICAgICogQG1lbWJlck9mIEdyaWRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7R3JpZENvbHVtbltdfVxuICAgICAqL1xuICAgIGdldENvbHVtbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Q29sdW1ucygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGdyaWQgY29sdW1ucyBkeW5hbWljYWxseVxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtHcmlkQ29sdW1uW119IGNvbHVtbnNcbiAgICAgKi9cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5zZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBHcmlkUm93IHJlcHJlc2VudGluZyB0aGUgcm93IGlkZW50aWZpZWQgYnkgaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRvIHJldHJpZXZlXG4gICAgICogQHJldHVybiB7R3JpZFJvd3xudWxsfVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGEgcm93IGJ5IGlkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIHJvdyB0byBkZWxldGVcbiAgICAgKi9cbiAgICBkZWxldGVCeUlkKGlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGVCeUlkKGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcm93IHdpdGggbmV3IGRhdGEsIGxlYXZlcyBwcmV2aW91cyBmaWVsZHMgaW50YWN0XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm93IGlkIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBQYXJ0aWFsIG9yIGZ1bGwgcm93IGRhdGEgdG8gdXBkYXRlXG4gICAgICovXG4gICAgdXBkYXRlUm93KGlkLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZ3JpZC51cGRhdGVSb3coaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBjZWxsIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgcm93IHRoZSBjZWxsIGlzIGluXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbHVtbiBpZGVudGlmaWVkIHdpdGggdGhlIGNlbGxcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjZWxsXG4gICAgICovXG4gICAgdXBkYXRlQ2VsbChpZCwgY29sTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ncmlkLnVwZGF0ZUNlbGwoaWQsIGNvbE5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBHcmlkXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHBhcmFtIGxvYWRpbmdcbiAgICAgKi9cbiAgICBzZXRMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5ncmlkLnNldExvYWRpbmcobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZ3JpZCBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgR3JpZFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSBlbmFibGVkXG4gICAgICovXG4gICAgc2V0RW5hYmxlZChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRFbmFibGVkKGVuYWJsZWQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUm93IHByb3BlcnRpZXMgb2JqZWN0IHRvIGRlZmluZSBhIHJvd1xuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJvd1Byb3BzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkXSBUaGUgdW5pcXVlIGlkIG9mIHRoZSByb3dcbiAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSBUaGUgcmF3IGRhdGEgZm9yIHRoZSByb3dcbiAqL1xuXG4vKipcbiAqIEdyaWQgUm93IENvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtSb3dQcm9wc3xHcmlkUm93fSBwcm9wc1xuICogQGNsYXNzIEdyaWRSb3dcbiAqIEBjbGFzc2Rlc2MgQ2xhc3MgcmVwcmVzZW50aW5nIGEgUm93IGluIHRoZSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkUm93IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMgaW5zdGFuY2VvZiBHcmlkUm93KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBpZCBvZiB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWQgPSBwcm9wcy5pZCA/IHByb3BzLmlkIDogR3JpZFJvdy5nZXROZXh0Um93SWQoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhdyBkYXRhIGZvciB0aGUgcm93XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I2RhdGFcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGF0YSA9ICQuZXh0ZW5kKHRydWUsIHt9LCBwcm9wcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlIHJvdyBpcyBzZWxlY3RlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAbmFtZSBHcmlkUm93I3NlbGVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZSByb3cgaXMgbm90IGZpbHRlcmVkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRSb3cjc2hvd1xuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgcm93IGlkXG4gKlxuICogQG1lbWJlck9mIEdyaWRSb3dcbiAqIEBzdGF0aWNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuR3JpZFJvdy5nZXROZXh0Um93SWQgPSAoKSA9PiAoYCdyb3dfJHtHcmlkUm93Lm5leHRSb3dJZCsrfWApO1xuXG4vKipcbiAqIE5leHQgaWQgcm93IGdlbmVyYXRvclxuICpcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAbWVtYmVyT2YgR3JpZFJvd1xuICogQHN0YXRpY1xuICovXG5HcmlkUm93Lm5leHRSb3dJZCA9IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0dyaWRSb3cuanMiLCIvKipcbiAqIEZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIGEgY2VsbCB2YWx1ZVxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0aW5nQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ2VsbCB2YWx1ZVxuICogQHBhcmFtIHtHcmlkUm93fSByb3cgVGhlIGVudGlyZSByb3dcbiAqIEByZXR1cm4ge3N0cmluZ3xIVE1MRWxlbWVudHxSZWFjdC5Db21wb25lbnR9XG4gKi9cblxuLyoqXG4gKiBDb2x1bW4gcHJvcGVydGllcyBvYmplY3QgdG8gZGVmaW5lIGEgY29sdW1uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sdW1uUHJvcHNcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZGlzcGxheU5hbWVdIFRoZSBkaXNwbGF5IG5hbWUgb2YgdGhlIGNvbHVtblxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt3aWR0aF0gQW4gSFRNTCB2YWx1ZSBmb3Igd2lkdGggKGVpdGhlciBwaXhlbHMgb3IgcGVyY2VudGFnZSlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xhc3NOYW1lXSBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAqIEBwcm9wZXJ0eSB7Rm9ybWF0dGluZ0NhbGxiYWNrfSBbZm9ybWF0XSBBIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIHRoZVxuICogQHByb3BlcnR5IHtib29sZWFufSBbc29ydGFibGVdIFRydWUgaWYgdGhlIGNvbHVtbiBpcyBzb3J0YWJsZVxuICovXG5cbi8qKlxuICogR3JpZCBjb2x1bW4gY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge0NvbHVtblByb3BzfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29sdW1uXG4gKiBAY2xhc3MgR3JpZENvbHVtblxuICogQGNsYXNzZGVzYyBDbGFzcyByZXByZXNlbnRpbmcgYSBjb2x1bW4gaW4gYSBHcmlkIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBjb25zdCBzZXRXaWR0aCA9ICh3aWR0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGUgPSAvXihcXGQpK1tweHwlXSQvO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt3aWR0aH1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbGlkYXRlLnRlc3Qod2lkdGgudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29sdW1uIGFzIGNvbWluZyBmcm9tIGlucHV0IGRhdGFcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgY29sdW1uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jZGlzcGxheU5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZSA/IHByb3BzLmRpc3BsYXlOYW1lIDogdGhpcy5uYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBIVE1MIHZhbHVlIGZvciB3aWR0aCAoZWl0aGVyIHBpeGVscyBvciBwZXJjZW50YWdlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAbmFtZSBHcmlkQ29sdW1uI3dpZHRoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndpZHRoID0gc2V0V2lkdGgocHJvcHMud2lkdGgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgZm9yIHRoZSBjb2x1bW5cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNjbGFzc05hbWVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogJyc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG9wdGlvbmFsIGZvcm1hdHRpbmcgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQG5hbWUgR3JpZENvbHVtbiNmb3JtYXRcbiAgICAgICAgICogQHR5cGUge2Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvcHRpb25hbCBmb3JtYXR0aW5nIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBuYW1lIEdyaWRDb2x1bW4jc29ydGFibGVcbiAgICAgICAgICogQHR5cGUge2Jvb2x8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zb3J0YWJsZSA9IHByb3BzLnNvcnRhYmxlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvR3JpZENvbHVtbi5qcyIsImltcG9ydCBSZWFjdEdyaWQgZnJvbSAnLi4vanN4L1JlYWN0R3JpZCc7XG5pbXBvcnQgR3JpZCBmcm9tICcuLi9lczYvR3JpZCc7XG5cbmlmICh0eXBlb2Ygd2luZG93LlJlYWN0TGliID09PSAndW5kZWZpbmVkJykge1xuICAgIHdpbmRvdy5SZWFjdExpYiA9IHt9O1xufVxuXG53aW5kb3cuUmVhY3RMaWIuUmVhY3RHcmlkID0gUmVhY3RHcmlkO1xud2luZG93LlJlYWN0TGliLkdyaWQgPSBHcmlkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9SZWFjdEdyaWQuanMiXSwic291cmNlUm9vdCI6IiJ9