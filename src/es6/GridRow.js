import $ from 'jquery';

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
export default class GridRow {
    constructor(props) {
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
        this.data = $.extend(true, {}, props);

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
    }
}

/**
 * Returns the next row id
 *
 * @memberOf GridRow
 * @static
 * @return {string}
 */
GridRow.getNextRowId = () => (`'row_${GridRow.nextRowId++}`);

/**
 * Next id row generator
 *
 * @type {number}
 * @memberOf GridRow
 * @static
 */
GridRow.nextRowId = 0;
