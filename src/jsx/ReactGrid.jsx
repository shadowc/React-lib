import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import GridRow from '../es6/GridRow';
import GridColumn from '../es6/GridColumn';

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
 * Definition for ReactGrid props object
 *
 * @typedef {object} GridProps
 * @property {string} [id=grid] The id of the grid
 * @property {ColumnProps[]} columns The columns definition for the grid
 * @property {RowProps[]} initialData The initial data to populate the grid
 * @property {string} orderBy The column name that we're sorting for
 * @property {boolean} [orderReverse=false] True if we're in reverse order
 * @property {Object.<string,SortCallback>} [sortings] A set of sorting functions
 * for each sortable column
 */

/**
 * Constructor for the react grid component
 *
 * @param {GridProps} props React props
 * @class ReactGrid
 * @classdesc React Grid Component class
 * @extends React.Component
 */
export default class ReactGrid extends React.Component {
    constructor(props) {
        super(props);

        const cols = this.props.columns.map(col => new GridColumn(col));
        const rows = this.props.initialData.map(row => new GridRow(row));

        /**
         * The state object for the grid component
         *
         * @name ReactGrid#state
         * @type {GridState}
         */
        this.state = {
            rawData: this.props.initialData,
            columns: cols,
            rows,
            prevSelectedRow: -1,
            orderBy: this.props.orderBy,
            orderReverse: this.props.orderReverse,
            loading: false
        };
    }

    /**
     * Sorts the rows in the grid
     *
     * @memberOf ReactGrid
     * @instance
     */
    sortRows() {
        const sortFn = this.props.sortings[this.state.orderBy];

        if (typeof (sortFn) === 'function') {
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
    render() {
        this.sortRows();
        return (
            <div className="table-wrapper" id={this.props.id}>
                <table className="table-header">
                    <thead><tr>{this.state.columns.map(this.renderColumn.bind(this))}</tr></thead>
                </table>
                <table className="table-body">
                    <tbody>
                        { this.state.loading ?
                            <tr>
                                <td colSpan={this.state.columns.length}>
                                    <span className="icon loading">&nbsp;</span>
                                </td>
                            </tr> :
                            this.state.rows.map(this.renderRow.bind(this))
                        }
                    </tbody>
                </table>
            </div>
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
    renderColumn(column) {
        const style = { width: column.width };

        return (
            <th
                key={column.name}
                className={column.className}
                style={style}
                onClick={this.generateHeaderClick.bind(this, column)}
            >
                {column.displayName}
            </th>
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
    renderRow(row) {
        const className = `${row.className} ${row.selected ? 'selected' : ''}`;
        const style = { display: row.show ? 'table-row' : 'none' };

        return (
            <tr
                key={row.id}
                id={row.id}
                className={className}
                style={style}
            >
                {this.state.columns.map(this.renderCell.bind(this, row))}
            </tr>
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
    renderCell(row, col) {
        const style = { width: col.width };

        return (
            <td
                key={`${row.id} ${col.name}`}
                style={style}
                onClick={this.generateCellClick.bind(this, row, col.name)}
            >
                {typeof col.format === 'function' ? col.format.call(this, row.data[col.name], row) : row.data[col.name]}
            </td>
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
    generateHeaderClick(column, event) {
        event.preventDefault();
        event.stopPropagation();

        const headerEvent = new CustomEvent('HeaderClick', { detail: column });

        const rootElem = document.getElementById(this.props.id);

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
    getRowNdx(row) {
        for (let i = 0; i < this.state.rows.length; i++) {
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
    generateCellClick(row, colName, event) {
        event.preventDefault();
        event.stopPropagation();

        const rowNdx = this.getRowNdx(row);
        let updateLastRow = false;

        const selectOneRow = (curRow) => {
            const selected = !curRow.selected;
            this.state.rows.forEach((innerRow) => {
                innerRow.selected = false;
            });

            curRow.selected = selected;
        };

        const selectRowRange = (curRow) => {
            if (this.state.prevSelectedRow > -1) {
                const setFrom = Math.min(rowNdx, this.state.prevSelectedRow);
                const setTo = Math.max(rowNdx, this.state.prevSelectedRow);
                for (let i = setFrom; i <= setTo; i++) {
                    curRow.selected = true;
                }
            }
        };

        const selectRowRangeExclusive = (curRow) => {
            this.state.rows.forEach((innerRow) => {
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
                } else if (event.shiftKey) {
                    // multi selection
                    selectRowRangeExclusive(row);
                } else if (event.ctrlKey) {
                    // multi selection
                    row.selected = !row.selected;
                    updateLastRow = true;
                } else if (event.shiftKey && event.ctrlKey) {
                    // multi selection
                    selectRowRange(row);
                }
            }

            this.setState({
                prevSelectedRow: updateLastRow ? rowNdx : this.state.prevSelectedRow,
                rows: this.state.rows
            });

            const cellEvent = new CustomEvent('CellClick', {
                detail: {
                    row,
                    cell: colName
                }
            });

            const rootElem = document.getElementById(this.props.id);

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
    addRows(rows, ndx) {
        if (!rows.length) {
            rows = [rows];
        }

        if (!ndx) {
            ndx = this.state.rows.length;
        }

        const gridRows = rows.map(row => new GridRow(row));
        const rawDataRows = rows.map(row => $.extend(true, {}, row));

        const newRows = [
            ...this.state.rows.slice(0, ndx),
            ...gridRows,
            ...this.state.rows.slice(ndx)
        ];

        const newData = [
            ...this.state.rawData.slice(0, ndx),
            ...rawDataRows,
            ...this.state.rawData.slice(ndx)
        ];

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
    setRows(rows) {
        if (!rows.length) {
            rows = [rows];
        }

        const gridRows = rows.map(row => new GridRow(row));
        const rawDataRows = rows.map(row => $.extend(true, {}, row));

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
    deleteRows(ndx, length) {
        if (!length) {
            length = 1;
        }

        const newRows = [
            ...this.state.rows.slice(0, ndx),
            ...this.state.rows.slice(ndx + length)
        ];

        const newData = [
            ...this.state.rawData.slice(0, ndx),
            ...this.state.rawData.slice(ndx + length)
        ];

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
    sortBy(sortBy) {
        this.setState(sortBy);
    }

    /**
     * Get the sort situation of a Grid Component
     *
     * @memberOf ReactGrid
     * @instance
     * @return {SortType}
     */
    getSort() {
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
    getRow(ndx) {
        if (ndx < 0 || ndx >= this.state.rows.length) {
            return null;
        }

        return new GridRow(this.state.rows[ndx]);
    }

    /**
     * Gets the selected rows as an Array of GridRow objects
     *
     * @memberOf ReactGrid
     * @instance
     * @return {GridRow[]}
     */
    getSelectedRows() {
        const ret = [];

        for (let i = 0; i < this.state.rows.length; i++) {
            if (this.state.rows[i].selected) {
                ret.push(new GridRow(this.state.rows[i]));
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
    getSelectedRowIds() {
        const ret = [];

        for (let i = 0; i < this.state.rows.length; i++) {
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
    getColumns() {
        return this.state.columns;
    }

    /**
     * Sets the grid columns
     *
     * @memberOf ReactGrid
     * @instance
     * @param {GridColumn[]} columns
     */
    setColumns(columns) {
        this.setState({
            columns: columns.map(col => new GridColumn(col))
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
    getById(id) {
        for (let i = 0; i < this.state.rows.length; i++) {
            const row = this.state.rows[i];

            if (row.id === id) {
                return new GridRow(row);
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
    deleteById(id) {
        for (let i = 0; i < this.state.rows.length; i++) {
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
    updateRow(id, data) {
        for (let i = 0; i < this.state.rows.length; i++) {
            const rowItem = this.state.rows[i];
            const rawData = this.state.rawData[i];

            if (rowItem.id === id) {
                const newRow = new GridRow($.extend(true, rowItem.data, data));
                const newRawData = $.extend(true, {}, rawData, data);
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
    updateCell(id, colName, value) {
        for (let i = 0; i < this.state.rows.length; i++) {
            const rowItem = this.state.rows[i];
            const rawDataItem = this.state.rawData[i];

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
    clear() {
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
    setLoading(loading) {
        this.setState({
            loading
        });
    }
}

/**
 * PropTypes for grid component
 *
 * @memberOf ReactGrid
 * @type {GridProps}
 * @static
 */
ReactGrid.propTypes = {
    id: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        displayName: PropTypes.string,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        format: PropTypes.func,
        sortable: PropTypes.bool
    })),
    initialData: PropTypes.arrayOf(PropTypes.object),
    selectable: PropTypes.bool,
    orderBy: PropTypes.string,
    orderReverse: PropTypes.bool,
    sortings: PropTypes.objectOf(PropTypes.func),
    onColumnHeaderClick: PropTypes.func,
    onCellClick: PropTypes.func
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
    orderReverse: false,
    sortings: {},
    initialData: [],
    onColumnHeaderClick: null,
    onCellClick: null
};
