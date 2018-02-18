import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

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
export default class ReactTree extends React.Component {
    constructor(props) {
        super(props);

        /**
         * State object
         *
         * @type {ReactTreeState}
         */
        this.state = {
            root: this.props.initialData,
            expandedIds: {},
            loading: false,
            selectedItem: null,
            enabled: true
        };
    }

    /**
     * ReactTree render function
     * @memberOf ReactTree
     * @instance
     */
    render() {
        return (
            <div id={this.props.id} className={this.state.enabled ? '' : 'disabled'}>
                {this.state.loading ?
                    <span className="icon loading">&nbsp;</span> :
                    <ul>{this.state.root.map(this.renderItem.bind(this))}</ul>
                }
            </div>
        );
    }

    /**
     * Render a tree item and its children
     * @memberOf ReactTree
     * @instance
     * @param {TreeItem} item
     */
    renderItem(item) {
        const expanded = this.state.expandedIds[item.id];
        const itemClassName = this.state.selectedItem === item.id ? 'selected' : '';
        const expandStatus = expanded ? 'expanded' : 'contracted';
        const itemExpandClassName = `expand ${item.children.length ? expandStatus : ''}`;

        return (
            <li key={item.id}>
                <span
                    className={itemExpandClassName}
                    onClick={this.expandContractItem.bind(this, item.id)}
                />
                <span
                    className={itemClassName}
                    onClick={this.selectItem.bind(this, item.id)}
                >
                    {this.props.format.call(null, item)}
                </span>
                {item.children.length ?
                    <ul
                        style={{ display: expanded ? 'block' : 'none' }}
                    >
                        {item.children.map(this.renderItem.bind(this))}
                    </ul> :
                    null
                }
            </li>
        );
    }

    /**
     * Sets the loading state of the tree
     *
     * @memberOf ReactTree
     * @instance
     * @param {boolean} loading True if the tree shows only a loading spinner
     */
    setLoading(loading) {
        this.setState({
            loading
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
    setData(root, sort = true) {
        const sortTree = (tree) => {
            tree.forEach((branch) => {
                if (branch.children.length) {
                    sortTree(branch.children);
                }
            });

            this.sort(tree);
        };

        if (sort) {
            sortTree(root);
        }

        this.setState({
            root
        });
    }

    /**
     * Sorts data in a tree branch
     *
     * @memberOf ReactTree
     * @instance
     * @param {TreeItem[]} tree
     */
    sort(tree) {
        const sortFn = this.props.sort;

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
    selectItem(id, event) {
        if (this.state.enabled) {
            const selectedItem = this.state.selectedItem === id ? null : id;

            this.setState({
                selectedItem
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
    getSelectedItemId() {
        return this.state.selectedItem;
    }

    expandContractItem(id, event) {
        event.preventDefault();

        if (this.state.enabled) {
            const expanded = Object.assign({}, this.state.expandedIds);

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
    generateItemClick(event, selectedItem) {
        event.preventDefault();
        event.stopPropagation();

        const itemEvent = new CustomEvent('ItemClick', { detail: { selectedItem } });

        const rootElem = document.getElementById(this.props.id);

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
    addItem(item) {
        const cacheRoot = this.replicateRoot();

        if (typeof item.id !== 'undefined' &&
            typeof item.parentId !== 'undefined' &&
            typeof item.children !== 'undefined') {
            if (item.parentId === '0' || item.parentId === 0) {
                cacheRoot.push(item);
                this.sort(cacheRoot);
            } else {
                const branch = this.findItemInBranchById(cacheRoot, item.parentId);

                if (branch) {
                    branch.children.push(item);
                    this.sort.branch();
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
    updateItem(item) {
        const cacheRoot = this.replicateRoot();
        const foundItem = this.findItemInBranchById(cacheRoot, item.id);

        if (foundItem) {
            Object.keys(foundItem).forEach((key) => {
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
    deleteItemById(id) {
        const cacheRoot = this.replicateRoot();
        const item = this.findItemById(id);
        let selectedItem = this.state.selectedItem;
        let branch;

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
            for (let i = 0; i < branch.length; i++) {
                if (branch[i].id === id) {
                    branch.splice(i, 1);
                    break;
                }
            }
        }

        this.setState({
            root: cacheRoot,
            selectedItem
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
    findItemById(id) {
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
    findItemInBranchById(root, id) {
        let ret = null;

        for (let i = 0; i < root.length; i++) {
            const item = root[i];
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
    replicateRoot() {
        const ret = [];

        for (let i = 0; i < this.state.root.length; i++) {
            ret.push($.extend({}, this.state.root[i]));
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
    setEnabled(enabled) {
        this.setState({
            enabled
        });
    }

    /**
     * Expands all tree items
     *
     * @memberOf ReactTree
     * @instance
     */
    expandAll() {
        const expandTree = (items, expandedIds) => {
            items.forEach((itm) => {
                if (itm.children.length) {
                    expandedIds[itm.id] = true;
                    expandTree(itm.children, expandedIds);
                }
            });
        };

        const expandedIds = {};

        expandTree(this.state.root, expandedIds);

        this.setState({
            expandedIds
        });
    }

    /**
     * Contracts all tree items
     *
     * @memberOf ReactTree
     * @instance
     */
    contractAll() {
        this.setState({
            expandedIds: {}
        });
    }
}

/**
 * ReactTree propTypes
 *
 * @memberOf ReactTree
 * @static
 * @type {ReactTreeProps}
 */
ReactTree.propTypes = {
    id: PropTypes.string,
    format: PropTypes.func.isRequired,
    initialData: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    sort: PropTypes.func
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
