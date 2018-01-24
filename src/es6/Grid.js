import React from 'react';
import ReactDOM from 'react-dom';
import ReactGrid from '../jsx/ReactGrid';

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
export class Grid {
    constructor(props) {
        /**
         * The grid component reference
         *
         * @name Grid#_grid
         * @type {ReactGrid}
         * @private
         */
        this._grid = null;

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
    render(container) {
        this._grid = ReactDOM.render(<ReactGrid {... this.gridProps} />, container);
    }

    /**
     * Adds rows to the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @param {RowProps[]} rows The rows to add
     * @param {number} [ndx] An optional index into which to insert the rows
     */
    addRows(rows, ndx) {
        this._grid.addRows(rows, ndx);
    }

    /**
     * Removes all existing rows from the Grid Component and adds new rows provided
     *
     * @memberOf Grid
     * @instance
     * @param {RowProps[]} rows The rows to set
     */
    setRows(rows) {
        this._grid.setRows(rows);
    }

    /**
     * Deletes rows from the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @param {number} ndx Starting index into which to delete rows
     * @param {number} [length=1] The number of rows to delete
     */
    deleteRows(ndx, length) {
        this._grid.deleteRows(ndx, length);
    }

    /**
     * Sort rows by a specific column name
     *
     * @memberOf Grid
     * @instance
     * @param {string} sortBy The column name to sort by
     */
    sortBy(sortBy) {
        this._grid.sortBy(sortBy);
    }

    /**
     * Get the sort situation of a Grid Component
     *
     * @memberOf Grid
     * @instance
     * @return {SortType}
     */
    getSort() {
        return this._grid.getSort();
    }

    /**
     * Gets a GridRow object representing the row at ndx
     *
     * @memberOf Grid
     * @instance
     * @param {number} ndx The index at whitch to retrieve the row
     * @return {GridRow|null}
     */
    getRow(ndx) {
        return this._grid.getRow(ndx);
    }

    /**
     * Gets the selected rows as an Array of GridRow objects
     *
     * @memberOf Grid
     * @instance
     * @return {GridRow[]}
     */
    getSelectedRows() {
        return this._grid.getSelectedRows();
    }

    /**
     * Gets the ids of the selected rows in the Grid Component
     *
     * @memberOf Grid
     * @instance
     * @return {string[]}
     */
    getSelectedRowIds() {
        return this._grid.getSelectedRowIds();
    }

    /**
     * Returns the column collection
     * @memberOf Grid
     * @instance
     * @returns {GridColumn[]}
     */
    getColumns() {
        return this._grid.getColumns();
    }

    /**
     * Sets the grid columns dynamically
     * @memberOf Grid
     * @instance
     * @param {GridColumn[]} columns
     */
    setColumns(columns) {
        return this._grid.setColumns(columns);
    }

    /**
     * Gets a GridRow representing the row identified by id
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The id of the row to retrieve
     * @return {GridRow|null}
     */
    getById(id) {
        return this._grid.getById(id);
    }

    /**
     * Deletes a row by id
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The id of the row to delete
     */
    deleteById(id) {
        this._grid.deleteById(id);
    }

    /**
     * Updates a row with new data, leaves previous fields intact
     *
     * @memberOf Grid
     * @instance
     * @param {string} id The row id to update
     * @param {*} data Partial or full row data to update
     */
    updateRow(id, data) {
        this._grid.updateRow(id, data);
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
    updateCell(id, colName, value) {
        this._grid.updateCell(id, colName, value);
    }

    /**
     * Clears the grid
     *
     * @memberOf Grid
     * @instance
     */
    clear() {
        this._grid.clear();
    }

    /**
     * Sets the loading state of the grid
     *
     * @memberOf Grid
     * @instance
     * @param loading
     */
    setLoading(loading) {
        this._grid.setLoading(loading);
    }
}
