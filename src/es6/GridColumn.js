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
export default class GridColumn {
    constructor(props) {
        const setWidth = (width) => {
            const validate = /^(\d)+[px|%]$/;

            if (typeof width === 'number') {
                return `${width}px`;
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
    }
}
