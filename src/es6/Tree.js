import React from 'react';
import ReactDOM from 'react-dom';
import ReactTree from '../jsx/ReactTree';

/**
 * Tree class constructor
 *
 * @param {ReactTreeProps} The properties of the tree
 * @class Tree
 * @classdesc Tree main class, use this class to interface with trees
 */
export default class Tree {
    constructor(props) {
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
    render(container) {
        this.tree = ReactDOM.render(React.createElement(ReactTree, { ...this.treeProps }), container);
    }

    /**
     * Sets the loading state in the tree
     *
     * @memberOf Tree
     * @instance
     * @param {boolean} loading True if we show only a loading spinner
     */
    setLoading(loading) {
        this.tree.setLoading(loading);
    }

    /**
     * Sets the initial data on the tree.
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem[]} data The root item list for the tree with all its children
     */
    setData(data) {
        this.tree.setData(data);
    }

    /**
     * Gets the selected item id
     *
     * @memberOf Tree
     * @instance
     * @return {string|number}
     */
    getSelectedItemId() {
        return this.tree.getSelectedItemId();
    }

    /**
     * Adds an item on the tree based in the item's parentId property
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem} item The item to add
     */
    addItem(item) {
        this.tree.addItem(item);
    }

    /**
     * Updates an item in the tree
     *
     * @memberOf Tree
     * @instance
     * @param {TreeItem} item The item to update
     */
    updateItem(item) {
        this.tree.updateItem(item);
    }

    /**
     * Deletes an item by id
     *
     * @memberOf Tree
     * @instance
     * @param {string|number} id The item id to delete
     */
    deleteItemById(id) {
        this.tree.deleteItemById(id);
    }

    /**
     * Finds and returns an item by id
     *
     * @memberOf Tree
     * @instance
     * @param {string|number} id The id of the item to find
     */
    findItemById(id) {
        return this.tree.findItemById(id);
    }

    /**
     * Sets the enabled state of the Tree
     *
     * @memberOf Tree
     * @instance
     * @param {boolean} enabled True if the Tree is interactive
     */
    setEnabled(enabled) {
        this.tree.setEnabled(enabled);
    }

    /**
     * Expands all the items with children
     *
     * @memberOf Tree
     * @instance
     */
    expandAll() {
        this.tree.expandAll();
    }

    /**
     * Contracts all the items in the tree
     *
     * @memberOf Tree
     * @instance
     */
    contractAll() {
        this.tree.contractAll();
    }
}
