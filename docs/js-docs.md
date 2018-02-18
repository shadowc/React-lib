## Classes

<dl>
<dt><a href="#Grid">Grid</a></dt>
<dd><p>Grid main class, use this class to interface with grids</p>
</dd>
<dt><a href="#GridColumn">GridColumn</a></dt>
<dd><p>Class representing a column in a Grid object</p>
</dd>
<dt><a href="#GridRow">GridRow</a></dt>
<dd><p>Class representing a Row in the Grid object</p>
</dd>
<dt><a href="#Modal">Modal</a></dt>
<dd><p>Implements a modal class as a promise</p>
</dd>
<dt><a href="#TagsManager">TagsManager</a></dt>
<dd><p>Manager for tag editing in posts</p>
</dd>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Tree main class, use this class to interface with trees</p>
</dd>
<dt><a href="#ReactGrid">ReactGrid</a> ⇐ <code>React.Component</code></dt>
<dd><p>React Grid Component class</p>
</dd>
<dt><a href="#ReactModal">ReactModal</a> ⇐ <code>React.Component</code></dt>
<dd><p>React Component for a modal dialog</p>
</dd>
<dt><a href="#ReactTagsDisplay">ReactTagsDisplay</a> ⇐ <code>React.Component</code></dt>
<dd><p>Display class for tag elements</p>
</dd>
<dt><a href="#ReactTree">ReactTree</a></dt>
<dd><p>React Tree component class</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#SortType">SortType</a> : <code>object</code></dt>
<dd><p>Definition of a sort state</p>
</dd>
<dt><a href="#FormattingCallback">FormattingCallback</a> ⇒ <code>string</code> | <code>HTMLElement</code> | <code>React.Component</code></dt>
<dd><p>Formatting function for a cell value</p>
</dd>
<dt><a href="#ColumnProps">ColumnProps</a> : <code>object</code></dt>
<dd><p>Column properties object to define a column</p>
</dd>
<dt><a href="#RowProps">RowProps</a> : <code>object</code></dt>
<dd><p>Row properties object to define a row</p>
</dd>
<dt><a href="#GridState">GridState</a> : <code>object</code></dt>
<dd><p>Definition for ReactGrid state object</p>
</dd>
<dt><a href="#SortCallback">SortCallback</a> ⇒ <code>number</code></dt>
<dd><p>Sort function callback, should return -1 if a is lower than b,
0 if rows are equal and 1 if a is greater than b</p>
</dd>
<dt><a href="#classNameCallback">classNameCallback</a> ⇒ <code>string</code></dt>
<dd><p>ClassName callback, a function to return a className (string)
based on row/column information</p>
</dd>
<dt><a href="#GridProps">GridProps</a> : <code>object</code></dt>
<dd><p>Definition for ReactGrid props object</p>
</dd>
<dt><a href="#ModalState">ModalState</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ModalCloseCallback">ModalCloseCallback</a> : <code>function</code></dt>
<dd><p>Callback for modal close events</p>
</dd>
<dt><a href="#ModalButton">ModalButton</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TagEntity">TagEntity</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TagsState">TagsState</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TreeItem">TreeItem</a> : <code>Object</code></dt>
<dd><p>Definition for ReactTree TreeItem object</p>
</dd>
<dt><a href="#ReactTreeState">ReactTreeState</a> : <code>Object</code></dt>
<dd><p>Definition for ReactTree State object</p>
</dd>
<dt><a href="#ReactTreeProps">ReactTreeProps</a> : <code>Object</code></dt>
<dd><p>Definition for ReactTreeProps object</p>
</dd>
</dl>

<a name="Grid"></a>

## Grid
Grid main class, use this class to interface with grids

**Kind**: global class  

* [Grid](#Grid)
    * [new Grid(The)](#new_Grid_new)
    * [.id](#Grid+id) : <code>string</code>
    * [.props](#Grid+props) : [<code>GridProps</code>](#GridProps)
    * [.render(container)](#Grid+render)
    * [.addRows(rows, [ndx])](#Grid+addRows)
    * [.setRows(rows)](#Grid+setRows)
    * [.deleteRows(ndx, [length])](#Grid+deleteRows)
    * [.sortBy(sortBy)](#Grid+sortBy)
    * [.getSort()](#Grid+getSort) ⇒ [<code>SortType</code>](#SortType)
    * [.getRow(ndx)](#Grid+getRow) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
    * [.getSelectedRows()](#Grid+getSelectedRows) ⇒ [<code>Array.&lt;GridRow&gt;</code>](#GridRow)
    * [.getSelectedRowIds()](#Grid+getSelectedRowIds) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getColumns()](#Grid+getColumns) ⇒ [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn)
    * [.setColumns(columns)](#Grid+setColumns)
    * [.getById(id)](#Grid+getById) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
    * [.deleteById(id)](#Grid+deleteById)
    * [.updateRow(id, data)](#Grid+updateRow)
    * [.updateCell(id, colName, value)](#Grid+updateCell)
    * [.clear()](#Grid+clear)
    * [.setLoading(loading)](#Grid+setLoading)
    * [.setEnabled(enabled)](#Grid+setEnabled)

<a name="new_Grid_new"></a>

### new Grid(The)
Grid class constructor


| Param | Type | Description |
| --- | --- | --- |
| The | [<code>GridProps</code>](#GridProps) | properties of the grid |

<a name="Grid+id"></a>

### grid.id : <code>string</code>
The id of the grid

**Kind**: instance property of [<code>Grid</code>](#Grid)  
<a name="Grid+props"></a>

### grid.props : [<code>GridProps</code>](#GridProps)
The props for the grid

**Kind**: instance property of [<code>Grid</code>](#Grid)  
<a name="Grid+render"></a>

### grid.render(container)
Renders the Grid Component within the grid

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>Element</code> | The container element into which to render the Component |

<a name="Grid+addRows"></a>

### grid.addRows(rows, [ndx])
Adds rows to the Grid Component

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| rows | [<code>Array.&lt;RowProps&gt;</code>](#RowProps) | The rows to add |
| [ndx] | <code>number</code> | An optional index into which to insert the rows |

<a name="Grid+setRows"></a>

### grid.setRows(rows)
Removes all existing rows from the Grid Component and adds new rows provided

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| rows | [<code>Array.&lt;RowProps&gt;</code>](#RowProps) | The rows to set |

<a name="Grid+deleteRows"></a>

### grid.deleteRows(ndx, [length])
Deletes rows from the Grid Component

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ndx | <code>number</code> |  | Starting index into which to delete rows |
| [length] | <code>number</code> | <code>1</code> | The number of rows to delete |

<a name="Grid+sortBy"></a>

### grid.sortBy(sortBy)
Sort rows by a specific column name

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| sortBy | <code>string</code> | The column name to sort by |

<a name="Grid+getSort"></a>

### grid.getSort() ⇒ [<code>SortType</code>](#SortType)
Get the sort situation of a Grid Component

**Kind**: instance method of [<code>Grid</code>](#Grid)  
<a name="Grid+getRow"></a>

### grid.getRow(ndx) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
Gets a GridRow object representing the row at ndx

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| ndx | <code>number</code> | The index at which to retrieve the row |

<a name="Grid+getSelectedRows"></a>

### grid.getSelectedRows() ⇒ [<code>Array.&lt;GridRow&gt;</code>](#GridRow)
Gets the selected rows as an Array of GridRow objects

**Kind**: instance method of [<code>Grid</code>](#Grid)  
<a name="Grid+getSelectedRowIds"></a>

### grid.getSelectedRowIds() ⇒ <code>Array.&lt;string&gt;</code>
Gets the ids of the selected rows in the Grid Component

**Kind**: instance method of [<code>Grid</code>](#Grid)  
<a name="Grid+getColumns"></a>

### grid.getColumns() ⇒ [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn)
Returns the column collection

**Kind**: instance method of [<code>Grid</code>](#Grid)  
<a name="Grid+setColumns"></a>

### grid.setColumns(columns)
Sets the grid columns dynamically

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type |
| --- | --- |
| columns | [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn) | 

<a name="Grid+getById"></a>

### grid.getById(id) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
Gets a GridRow representing the row identified by id

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row to retrieve |

<a name="Grid+deleteById"></a>

### grid.deleteById(id)
Deletes a row by id

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row to delete |

<a name="Grid+updateRow"></a>

### grid.updateRow(id, data)
Updates a row with new data, leaves previous fields intact

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The row id to update |
| data | <code>\*</code> | Partial or full row data to update |

<a name="Grid+updateCell"></a>

### grid.updateCell(id, colName, value)
Updates a cell with a new value

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row the cell is in |
| colName | <code>string</code> | The name of the column identified with the cell |
| value | <code>\*</code> | The new value for the cell |

<a name="Grid+clear"></a>

### grid.clear()
Clears the grid

**Kind**: instance method of [<code>Grid</code>](#Grid)  
<a name="Grid+setLoading"></a>

### grid.setLoading(loading)
Sets the loading state of the grid

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param |
| --- |
| loading | 

<a name="Grid+setEnabled"></a>

### grid.setEnabled(enabled)
Sets the grid enabled or disabled

**Kind**: instance method of [<code>Grid</code>](#Grid)  

| Param |
| --- |
| enabled | 

<a name="GridColumn"></a>

## GridColumn
Class representing a column in a Grid object

**Kind**: global class  

* [GridColumn](#GridColumn)
    * [new GridColumn(props)](#new_GridColumn_new)
    * [.name](#GridColumn+name) : <code>string</code>
    * [.displayName](#GridColumn+displayName) : <code>string</code>
    * [.width](#GridColumn+width) : <code>string</code>
    * [.className](#GridColumn+className) : <code>string</code>
    * [.format](#GridColumn+format) : <code>function</code> \| <code>undefined</code>
    * [.sortable](#GridColumn+sortable) : <code>bool</code> \| <code>undefined</code>

<a name="new_GridColumn_new"></a>

### new GridColumn(props)
Grid column constructor


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>ColumnProps</code>](#ColumnProps) | The properties of the column |

<a name="GridColumn+name"></a>

### gridColumn.name : <code>string</code>
The name of the column as coming from input data

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridColumn+displayName"></a>

### gridColumn.displayName : <code>string</code>
The display name of the column

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridColumn+width"></a>

### gridColumn.width : <code>string</code>
An HTML value for width (either pixels or percentage)

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridColumn+className"></a>

### gridColumn.className : <code>string</code>
The class for the column

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridColumn+format"></a>

### gridColumn.format : <code>function</code> \| <code>undefined</code>
An optional formatting function

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridColumn+sortable"></a>

### gridColumn.sortable : <code>bool</code> \| <code>undefined</code>
An optional formatting function

**Kind**: instance property of [<code>GridColumn</code>](#GridColumn)  
<a name="GridRow"></a>

## GridRow
Class representing a Row in the Grid object

**Kind**: global class  

* [GridRow](#GridRow)
    * [new GridRow(props)](#new_GridRow_new)
    * _instance_
        * [.id](#GridRow+id) : <code>string</code>
        * [.data](#GridRow+data) : <code>\*</code>
        * [.selected](#GridRow+selected) : <code>boolean</code>
        * [.show](#GridRow+show) : <code>boolean</code>
    * _static_
        * [.nextRowId](#GridRow.nextRowId) : <code>number</code>
        * [.getNextRowId()](#GridRow.getNextRowId) ⇒ <code>string</code>

<a name="new_GridRow_new"></a>

### new GridRow(props)
Grid Row Constructor


| Param | Type |
| --- | --- |
| props | [<code>RowProps</code>](#RowProps) \| [<code>GridRow</code>](#GridRow) | 

<a name="GridRow+id"></a>

### gridRow.id : <code>string</code>
The unique id of the row

**Kind**: instance property of [<code>GridRow</code>](#GridRow)  
<a name="GridRow+data"></a>

### gridRow.data : <code>\*</code>
The raw data for the row

**Kind**: instance property of [<code>GridRow</code>](#GridRow)  
<a name="GridRow+selected"></a>

### gridRow.selected : <code>boolean</code>
True if the row is selected

**Kind**: instance property of [<code>GridRow</code>](#GridRow)  
<a name="GridRow+show"></a>

### gridRow.show : <code>boolean</code>
True if the row is not filtered

**Kind**: instance property of [<code>GridRow</code>](#GridRow)  
<a name="GridRow.nextRowId"></a>

### GridRow.nextRowId : <code>number</code>
Next id row generator

**Kind**: static property of [<code>GridRow</code>](#GridRow)  
<a name="GridRow.getNextRowId"></a>

### GridRow.getNextRowId() ⇒ <code>string</code>
Returns the next row id

**Kind**: static method of [<code>GridRow</code>](#GridRow)  
<a name="Modal"></a>

## Modal
Implements a modal class as a promise

**Kind**: global class  

* [Modal](#Modal)
    * _instance_
        * [.render(container)](#Modal+render)
        * [.show(options)](#Modal+show) ⇒ <code>Promise</code>
    * _static_
        * [.getOkButton()](#Modal.getOkButton) ⇒ [<code>ModalButton</code>](#ModalButton)
        * [.getYesButton()](#Modal.getYesButton) ⇒ [<code>ModalButton</code>](#ModalButton)
        * [.getNoButton()](#Modal.getNoButton) ⇒ [<code>ModalButton</code>](#ModalButton)

<a name="Modal+render"></a>

### modal.render(container)
Renders the modal

**Kind**: instance method of [<code>Modal</code>](#Modal)  

| Param | Type |
| --- | --- |
| container | <code>HTMLElement</code> | 

<a name="Modal+show"></a>

### modal.show(options) ⇒ <code>Promise</code>
Shows a modal as promise

**Kind**: instance method of [<code>Modal</code>](#Modal)  

| Param | Type |
| --- | --- |
| options | [<code>ModalState</code>](#ModalState) | 

<a name="Modal.getOkButton"></a>

### Modal.getOkButton() ⇒ [<code>ModalButton</code>](#ModalButton)
Creates a Ok button template

**Kind**: static method of [<code>Modal</code>](#Modal)  
<a name="Modal.getYesButton"></a>

### Modal.getYesButton() ⇒ [<code>ModalButton</code>](#ModalButton)
Creates a Yes button template

**Kind**: static method of [<code>Modal</code>](#Modal)  
<a name="Modal.getNoButton"></a>

### Modal.getNoButton() ⇒ [<code>ModalButton</code>](#ModalButton)
Creates a No button template

**Kind**: static method of [<code>Modal</code>](#Modal)  
<a name="TagsManager"></a>

## TagsManager
Manager for tag editing in posts

**Kind**: global class  
<a name="new_TagsManager_new"></a>

### new TagsManager(hiddenFieldsContainer, tagsContainer, tagFieldNamePrefix, tagsTextLabel, hxrRouteCallback)
TagsManager Constructor - Loads the tags present in the form


| Param | Type | Description |
| --- | --- | --- |
| hiddenFieldsContainer | <code>HTMLElement</code> | The container for the hidden fields |
| tagsContainer | <code>HTMLElement</code> | The container where the tags will be rendered |
| tagFieldNamePrefix | <code>string</code> | The field name of the hidden tag fields |
| tagsTextLabel | <code>string</code> | The for attribute for the tags label |
| hxrRouteCallback | <code>function</code> | The route to the xhr API call to bring suggestions |

<a name="Tree"></a>

## Tree
Tree main class, use this class to interface with trees

**Kind**: global class  

* [Tree](#Tree)
    * [new Tree(The)](#new_Tree_new)
    * [.id](#Tree+id) : <code>string</code>
    * [.props](#Tree+props) : [<code>ReactTreeProps</code>](#ReactTreeProps)
    * [.render(container)](#Tree+render)
    * [.setLoading(loading)](#Tree+setLoading)
    * [.setData(data)](#Tree+setData)
    * [.getSelectedItemId()](#Tree+getSelectedItemId) ⇒ <code>string</code> \| <code>number</code>
    * [.addItem(item)](#Tree+addItem)
    * [.updateItem(item)](#Tree+updateItem)
    * [.deleteItemById(id)](#Tree+deleteItemById)
    * [.findItemById(id)](#Tree+findItemById)
    * [.setEnabled(enabled)](#Tree+setEnabled)
    * [.expandAll()](#Tree+expandAll)
    * [.contractAll()](#Tree+contractAll)

<a name="new_Tree_new"></a>

### new Tree(The)
Tree class constructor


| Param | Type | Description |
| --- | --- | --- |
| The | [<code>ReactTreeProps</code>](#ReactTreeProps) | properties of the tree |

<a name="Tree+id"></a>

### tree.id : <code>string</code>
The id of the tree

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+props"></a>

### tree.props : [<code>ReactTreeProps</code>](#ReactTreeProps)
The props for the tree

**Kind**: instance property of [<code>Tree</code>](#Tree)  
<a name="Tree+render"></a>

### tree.render(container)
Renders the ReactTree Component within the tree container

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| container | <code>Element</code> | The container element into which to render the Component |

<a name="Tree+setLoading"></a>

### tree.setLoading(loading)
Sets the loading state in the tree

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | True if we show only a loading spinner |

<a name="Tree+setData"></a>

### tree.setData(data)
Sets the initial data on the tree.

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| data | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) | The root item list for the tree with all its children |

<a name="Tree+getSelectedItemId"></a>

### tree.getSelectedItemId() ⇒ <code>string</code> \| <code>number</code>
Gets the selected item id

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="Tree+addItem"></a>

### tree.addItem(item)
Adds an item on the tree based in the item's parentId property

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>TreeItem</code>](#TreeItem) | The item to add |

<a name="Tree+updateItem"></a>

### tree.updateItem(item)
Updates an item in the tree

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>TreeItem</code>](#TreeItem) | The item to update |

<a name="Tree+deleteItemById"></a>

### tree.deleteItemById(id)
Deletes an item by id

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | The item id to delete |

<a name="Tree+findItemById"></a>

### tree.findItemById(id)
Finds and returns an item by id

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | The id of the item to find |

<a name="Tree+setEnabled"></a>

### tree.setEnabled(enabled)
Sets the enabled state of the Tree

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| enabled | <code>boolean</code> | True if the Tree is interactive |

<a name="Tree+expandAll"></a>

### tree.expandAll()
Expands all the items with children

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="Tree+contractAll"></a>

### tree.contractAll()
Contracts all the items in the tree

**Kind**: instance method of [<code>Tree</code>](#Tree)  
<a name="ReactGrid"></a>

## ReactGrid ⇐ <code>React.Component</code>
React Grid Component class

**Kind**: global class  
**Extends**: <code>React.Component</code>  

* [ReactGrid](#ReactGrid) ⇐ <code>React.Component</code>
    * [new ReactGrid(props)](#new_ReactGrid_new)
    * _instance_
        * [.state](#ReactGrid+state) : [<code>GridState</code>](#GridState)
        * [.sortRows()](#ReactGrid+sortRows)
        * [.render()](#ReactGrid+render) ⇒ <code>HTMLElement</code>
        * [.generateHeaderClick(column, event)](#ReactGrid+generateHeaderClick) ⇒ <code>boolean</code>
        * [.generateCellClick(row, colName, event)](#ReactGrid+generateCellClick) ⇒ <code>boolean</code>
        * [.addRows(rows, [ndx])](#ReactGrid+addRows)
        * [.setRows(rows)](#ReactGrid+setRows)
        * [.deleteRows(ndx, [length])](#ReactGrid+deleteRows)
        * [.sortBy(sortBy)](#ReactGrid+sortBy)
        * [.getSort()](#ReactGrid+getSort) ⇒ [<code>SortType</code>](#SortType)
        * [.getRow(ndx)](#ReactGrid+getRow) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
        * [.getSelectedRows()](#ReactGrid+getSelectedRows) ⇒ [<code>Array.&lt;GridRow&gt;</code>](#GridRow)
        * [.getSelectedRowIds()](#ReactGrid+getSelectedRowIds) ⇒ <code>Array.&lt;string&gt;</code>
        * [.getColumns()](#ReactGrid+getColumns) ⇒ [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn)
        * [.setColumns(columns)](#ReactGrid+setColumns)
        * [.getById(id)](#ReactGrid+getById) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
        * [.deleteById(id)](#ReactGrid+deleteById)
        * [.updateRow(id, data)](#ReactGrid+updateRow)
        * [.updateCell(id, colName, value)](#ReactGrid+updateCell)
        * [.clear()](#ReactGrid+clear)
        * [.setLoading(loading)](#ReactGrid+setLoading)
        * [.setEnabled(enabled)](#ReactGrid+setEnabled)
    * _static_
        * [.propTypes](#ReactGrid.propTypes) : [<code>GridProps</code>](#GridProps)
        * [.defaultProps](#ReactGrid.defaultProps) : [<code>GridProps</code>](#GridProps)

<a name="new_ReactGrid_new"></a>

### new ReactGrid(props)
Constructor for the react grid component


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>GridProps</code>](#GridProps) | React props |

<a name="ReactGrid+state"></a>

### reactGrid.state : [<code>GridState</code>](#GridState)
The state object for the grid component

**Kind**: instance property of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+sortRows"></a>

### reactGrid.sortRows()
Sorts the rows in the grid

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+render"></a>

### reactGrid.render() ⇒ <code>HTMLElement</code>
Renders the grid

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+generateHeaderClick"></a>

### reactGrid.generateHeaderClick(column, event) ⇒ <code>boolean</code>
Generates an event when a click is made in the grid header

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| column | [<code>GridColumn</code>](#GridColumn) |  |
| event | <code>\*</code> | The react event |

<a name="ReactGrid+generateCellClick"></a>

### reactGrid.generateCellClick(row, colName, event) ⇒ <code>boolean</code>
Generates an event when a click is made in a cell

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| row | [<code>GridRow</code>](#GridRow) |  |
| colName | <code>string</code> |  |
| event | <code>\*</code> | The react event |

<a name="ReactGrid+addRows"></a>

### reactGrid.addRows(rows, [ndx])
Adds rows to the Grid Component

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| rows | [<code>Array.&lt;RowProps&gt;</code>](#RowProps) | The rows to add |
| [ndx] | <code>number</code> | An optional index into which to insert the rows |

<a name="ReactGrid+setRows"></a>

### reactGrid.setRows(rows)
Removes all existing rows from the Grid Component and adds new rows provided

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| rows | [<code>Array.&lt;RowProps&gt;</code>](#RowProps) | The rows to add |

<a name="ReactGrid+deleteRows"></a>

### reactGrid.deleteRows(ndx, [length])
Deletes rows from the Grid Component

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ndx | <code>number</code> |  | Starting index into which to delete rows |
| [length] | <code>number</code> | <code>1</code> | The number of rows to delete |

<a name="ReactGrid+sortBy"></a>

### reactGrid.sortBy(sortBy)
Sort rows by a specific column name

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| sortBy | <code>string</code> | The column name to sort by |

<a name="ReactGrid+getSort"></a>

### reactGrid.getSort() ⇒ [<code>SortType</code>](#SortType)
Get the sort situation of a Grid Component

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+getRow"></a>

### reactGrid.getRow(ndx) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
Gets a GridRow object representing the row at ndx

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| ndx | <code>number</code> | The index at which to retrieve the row |

<a name="ReactGrid+getSelectedRows"></a>

### reactGrid.getSelectedRows() ⇒ [<code>Array.&lt;GridRow&gt;</code>](#GridRow)
Gets the selected rows as an Array of GridRow objects

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+getSelectedRowIds"></a>

### reactGrid.getSelectedRowIds() ⇒ <code>Array.&lt;string&gt;</code>
Gets the ids of the selected rows in the Grid Component

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+getColumns"></a>

### reactGrid.getColumns() ⇒ [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn)
Gets the grid columns

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+setColumns"></a>

### reactGrid.setColumns(columns)
Sets the grid columns

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type |
| --- | --- |
| columns | [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn) | 

<a name="ReactGrid+getById"></a>

### reactGrid.getById(id) ⇒ [<code>GridRow</code>](#GridRow) \| <code>null</code>
Gets a GridRow representing the row identified by id

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row to retrieve |

<a name="ReactGrid+deleteById"></a>

### reactGrid.deleteById(id)
Deletes a row by id

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row to delete |

<a name="ReactGrid+updateRow"></a>

### reactGrid.updateRow(id, data)
Updates a row with new data, leaves previous fields intact

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The row id to update |
| data | <code>\*</code> | Partial or full row data to update |

<a name="ReactGrid+updateCell"></a>

### reactGrid.updateCell(id, colName, value)
Updates a cell with a new value

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The id of the row the cell is in |
| colName | <code>string</code> | The name of the column identified with the cell |
| value | <code>\*</code> | The new value for the cell |

<a name="ReactGrid+clear"></a>

### reactGrid.clear()
Clears the grid

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid+setLoading"></a>

### reactGrid.setLoading(loading)
Sets the loading state of the grid

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param | Type |
| --- | --- |
| loading | <code>boolean</code> | 

<a name="ReactGrid+setEnabled"></a>

### reactGrid.setEnabled(enabled)
Sets the grid enabled or disabled

**Kind**: instance method of [<code>ReactGrid</code>](#ReactGrid)  

| Param |
| --- |
| enabled | 

<a name="ReactGrid.propTypes"></a>

### ReactGrid.propTypes : [<code>GridProps</code>](#GridProps)
PropTypes for grid component

**Kind**: static property of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactGrid.defaultProps"></a>

### ReactGrid.defaultProps : [<code>GridProps</code>](#GridProps)
Default properties of the ReactGrid class

**Kind**: static property of [<code>ReactGrid</code>](#ReactGrid)  
<a name="ReactModal"></a>

## ReactModal ⇐ <code>React.Component</code>
React Component for a modal dialog

**Kind**: global class  
**Extends**: <code>React.Component</code>  

* [ReactModal](#ReactModal) ⇐ <code>React.Component</code>
    * [.render()](#ReactModal+render) ⇒ <code>HTMLElement</code>
    * [.renderButton(button)](#ReactModal+renderButton) ⇒ <code>HTMLElement</code>
    * [.onModalClose(event)](#ReactModal+onModalClose)
    * [.onModalButtonPressed(event, button)](#ReactModal+onModalButtonPressed)

<a name="ReactModal+render"></a>

### reactModal.render() ⇒ <code>HTMLElement</code>
Render the modal

**Kind**: instance method of [<code>ReactModal</code>](#ReactModal)  
<a name="ReactModal+renderButton"></a>

### reactModal.renderButton(button) ⇒ <code>HTMLElement</code>
Renders a modal button

**Kind**: instance method of [<code>ReactModal</code>](#ReactModal)  

| Param | Type |
| --- | --- |
| button | [<code>ModalButton</code>](#ModalButton) | 

<a name="ReactModal+onModalClose"></a>

### reactModal.onModalClose(event)
Called when clicked on the close modal

**Kind**: instance method of [<code>ReactModal</code>](#ReactModal)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="ReactModal+onModalButtonPressed"></a>

### reactModal.onModalButtonPressed(event, button)
Called when clicked on a modal button

**Kind**: instance method of [<code>ReactModal</code>](#ReactModal)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 
| button | [<code>ModalButton</code>](#ModalButton) | 

<a name="ReactTagsDisplay"></a>

## ReactTagsDisplay ⇐ <code>React.Component</code>
Display class for tag elements

**Kind**: global class  
**Extends**: <code>React.Component</code>  

* [ReactTagsDisplay](#ReactTagsDisplay) ⇐ <code>React.Component</code>
    * [.render()](#ReactTagsDisplay+render) ⇒ <code>HTMLElement</code>
    * [.renderTag(tag)](#ReactTagsDisplay+renderTag) ⇒ <code>HTMLElement</code>
    * [.renderSuggestion(tag)](#ReactTagsDisplay+renderSuggestion) ⇒ <code>HTMLElement</code>
    * [.addTag(tagText)](#ReactTagsDisplay+addTag)
    * [.removeTag(tag, event)](#ReactTagsDisplay+removeTag)
    * [.resetSuggestionsTimeout()](#ReactTagsDisplay+resetSuggestionsTimeout)
    * [.updateSuggestions()](#ReactTagsDisplay+updateSuggestions)
    * [.onKeyUp(event)](#ReactTagsDisplay+onKeyUp)
    * [.onKeyPress(event)](#ReactTagsDisplay+onKeyPress)
    * [.handleFocus(event)](#ReactTagsDisplay+handleFocus)
    * [.onSuggestionClick(tag, event)](#ReactTagsDisplay+onSuggestionClick)
    * [.clearSuggestions(event)](#ReactTagsDisplay+clearSuggestions)

<a name="ReactTagsDisplay+render"></a>

### reactTagsDisplay.render() ⇒ <code>HTMLElement</code>
Renders the tag component

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  
<a name="ReactTagsDisplay+renderTag"></a>

### reactTagsDisplay.renderTag(tag) ⇒ <code>HTMLElement</code>
Renders a single tag

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| tag | [<code>TagEntity</code>](#TagEntity) | 

<a name="ReactTagsDisplay+renderSuggestion"></a>

### reactTagsDisplay.renderSuggestion(tag) ⇒ <code>HTMLElement</code>
Renders a tag suggestion

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| tag | [<code>TagEntity</code>](#TagEntity) | 

<a name="ReactTagsDisplay+addTag"></a>

### reactTagsDisplay.addTag(tagText)
Adds a tag by text only (new tag)

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| tagText | <code>string</code> | 

<a name="ReactTagsDisplay+removeTag"></a>

### reactTagsDisplay.removeTag(tag, event)
Removes a tag from the collection

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| tag | [<code>TagEntity</code>](#TagEntity) | 
| event | <code>Event</code> \| <code>null</code> | 

<a name="ReactTagsDisplay+resetSuggestionsTimeout"></a>

### reactTagsDisplay.resetSuggestionsTimeout()
Resets the suggestions timeout handler

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  
<a name="ReactTagsDisplay+updateSuggestions"></a>

### reactTagsDisplay.updateSuggestions()
Makes a call to suggestions and updates the set

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  
<a name="ReactTagsDisplay+onKeyUp"></a>

### reactTagsDisplay.onKeyUp(event)
Reacts to key presses on tags input

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="ReactTagsDisplay+onKeyPress"></a>

### reactTagsDisplay.onKeyPress(event)
KeyPress event handler

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="ReactTagsDisplay+handleFocus"></a>

### reactTagsDisplay.handleFocus(event)
Reacts to clicks on the tags input

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="ReactTagsDisplay+onSuggestionClick"></a>

### reactTagsDisplay.onSuggestionClick(tag, event)
Inserts a suggested tag

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| tag | [<code>TagEntity</code>](#TagEntity) | 
| event | <code>Event</code> | 

<a name="ReactTagsDisplay+clearSuggestions"></a>

### reactTagsDisplay.clearSuggestions(event)
Clear suggestions on document click

**Kind**: instance method of [<code>ReactTagsDisplay</code>](#ReactTagsDisplay)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="ReactTree"></a>

## ReactTree
React Tree component class

**Kind**: global class  

* [ReactTree](#ReactTree)
    * [new ReactTree(props)](#new_ReactTree_new)
    * _instance_
        * [.render()](#ReactTree+render)
        * [.renderItem(item)](#ReactTree+renderItem)
        * [.setLoading(loading)](#ReactTree+setLoading)
        * [.setData(root, [sort])](#ReactTree+setData)
        * [.sort(tree)](#ReactTree+sort)
        * [.selectItem(id, event)](#ReactTree+selectItem)
        * [.getSelectedItemId()](#ReactTree+getSelectedItemId) ⇒ <code>string</code> \| <code>number</code>
        * [.generateItemClick(event, selectedItem)](#ReactTree+generateItemClick) ⇒ <code>boolean</code>
        * [.addItem(item)](#ReactTree+addItem)
        * [.updateItem(item)](#ReactTree+updateItem)
        * [.deleteItemById(id)](#ReactTree+deleteItemById)
        * [.findItemById(id)](#ReactTree+findItemById) ⇒ [<code>TreeItem</code>](#TreeItem) \| <code>null</code>
        * [.setEnabled(enabled)](#ReactTree+setEnabled)
        * [.expandAll()](#ReactTree+expandAll)
        * [.contractAll()](#ReactTree+contractAll)
    * _static_
        * [.propTypes](#ReactTree.propTypes) : [<code>ReactTreeProps</code>](#ReactTreeProps)
        * [.defaultProps](#ReactTree.defaultProps) : [<code>ReactTreeProps</code>](#ReactTreeProps)

<a name="new_ReactTree_new"></a>

### new ReactTree(props)
Constructor for the ReactTree component


| Param | Type |
| --- | --- |
| props | [<code>ReactTreeProps</code>](#ReactTreeProps) | 

<a name="ReactTree+render"></a>

### reactTree.render()
ReactTree render function

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  
<a name="ReactTree+renderItem"></a>

### reactTree.renderItem(item)
Render a tree item and its children

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| item | [<code>TreeItem</code>](#TreeItem) | 

<a name="ReactTree+setLoading"></a>

### reactTree.setLoading(loading)
Sets the loading state of the tree

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | True if the tree shows only a loading spinner |

<a name="ReactTree+setData"></a>

### reactTree.setData(root, [sort])
Sets data on the tree and removes all previous data

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type | Default |
| --- | --- | --- |
| root | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) |  | 
| [sort] | <code>boolean</code> | <code>true</code> | 

<a name="ReactTree+sort"></a>

### reactTree.sort(tree)
Sorts data in a tree branch

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| tree | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) | 

<a name="ReactTree+selectItem"></a>

### reactTree.selectItem(id, event)
Selects an item in the tree by id

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 
| event | <code>Event</code> \| <code>null</code> | 

<a name="ReactTree+getSelectedItemId"></a>

### reactTree.getSelectedItemId() ⇒ <code>string</code> \| <code>number</code>
Gets the selected item
Gets the selected item

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  
<a name="ReactTree+generateItemClick"></a>

### reactTree.generateItemClick(event, selectedItem) ⇒ <code>boolean</code>
Fires an event on ReactTree root element that can be listened to

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 
| selectedItem | <code>string</code> | 

<a name="ReactTree+addItem"></a>

### reactTree.addItem(item)
Adds an item to the tree

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| item | [<code>TreeItem</code>](#TreeItem) | 

<a name="ReactTree+updateItem"></a>

### reactTree.updateItem(item)
Updates an item in the tree

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| item | [<code>TreeItem</code>](#TreeItem) | 

<a name="ReactTree+deleteItemById"></a>

### reactTree.deleteItemById(id)
Deletes an item by id

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="ReactTree+findItemById"></a>

### reactTree.findItemById(id) ⇒ [<code>TreeItem</code>](#TreeItem) \| <code>null</code>
Finds an item in the tree by id

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | The id of the item |

<a name="ReactTree+setEnabled"></a>

### reactTree.setEnabled(enabled)
Sets the enabled property of the grid

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  

| Param | Type |
| --- | --- |
| enabled | <code>boolean</code> | 

<a name="ReactTree+expandAll"></a>

### reactTree.expandAll()
Expands all tree items

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  
<a name="ReactTree+contractAll"></a>

### reactTree.contractAll()
Contracts all tree items

**Kind**: instance method of [<code>ReactTree</code>](#ReactTree)  
<a name="ReactTree.propTypes"></a>

### ReactTree.propTypes : [<code>ReactTreeProps</code>](#ReactTreeProps)
ReactTree propTypes

**Kind**: static property of [<code>ReactTree</code>](#ReactTree)  
<a name="ReactTree.defaultProps"></a>

### ReactTree.defaultProps : [<code>ReactTreeProps</code>](#ReactTreeProps)
ReactTree default props

**Kind**: static property of [<code>ReactTree</code>](#ReactTree)  
<a name="SortType"></a>

## SortType : <code>object</code>
Definition of a sort state

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| orderBy | <code>string</code> | The name of the column we're ordering by |
| orderReverse | <code>boolean</code> | True if the order is reversed |

<a name="FormattingCallback"></a>

## FormattingCallback ⇒ <code>string</code> \| <code>HTMLElement</code> \| <code>React.Component</code>
Formatting function for a cell value

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Cell value |
| row | [<code>GridRow</code>](#GridRow) | The entire row |

<a name="ColumnProps"></a>

## ColumnProps : <code>object</code>
Column properties object to define a column

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the column as coming from input data |
| [displayName] | <code>string</code> | The display name of the column |
| [width] | <code>string</code> | An HTML value for width (either pixels or percentage) |
| [className] | <code>string</code> | The class for the column |
| [format] | [<code>FormattingCallback</code>](#FormattingCallback) | A formatting function for the |
| [sortable] | <code>boolean</code> | True if the column is sortable |

<a name="RowProps"></a>

## RowProps : <code>object</code>
Row properties object to define a row

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [id] | <code>string</code> | The unique id of the row |
| data | <code>\*</code> | The raw data for the row |

<a name="GridState"></a>

## GridState : <code>object</code>
Definition for ReactGrid state object

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rawData | <code>Array.&lt;Object&gt;</code> | The raw data in the grid |
| columns | [<code>Array.&lt;GridColumn&gt;</code>](#GridColumn) | The columns of the grid |
| rows | [<code>Array.&lt;GridRow&gt;</code>](#GridRow) | The rows in the grid |
| prevSelectedRow | <code>number</code> | The previously selected row |
| orderBy | <code>string</code> | The column name to order by |
| orderReverse | <code>boolean</code> | True of the order should be reversed |
| loading | <code>boolean</code> | True if the grid shows a loading spinner |
| enabled | <code>boolean</code> | True if the grid is interactive |

<a name="SortCallback"></a>

## SortCallback ⇒ <code>number</code>
Sort function callback, should return -1 if a is lower than b,
0 if rows are equal and 1 if a is greater than b

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>GridRow</code>](#GridRow) | Row a |
| b | [<code>GridRow</code>](#GridRow) | Row b |

<a name="classNameCallback"></a>

## classNameCallback ⇒ <code>string</code>
ClassName callback, a function to return a className (string)
based on row/column information

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>\*</code> | The row data |
| [column] | <code>string</code> | The column we're rendering (for cell classNames) |

<a name="GridProps"></a>

## GridProps : <code>object</code>
Definition for ReactGrid props object

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [id] | <code>string</code> | <code>&quot;grid&quot;</code> | The id of the grid |
| columns | [<code>Array.&lt;ColumnProps&gt;</code>](#ColumnProps) |  | The columns definition for the grid |
| initialData | [<code>Array.&lt;RowProps&gt;</code>](#RowProps) |  | The initial data to populate the grid |
| orderBy | <code>string</code> |  | The column name that we're sorting for |
| [orderReverse] | <code>boolean</code> | <code>false</code> | True if we're in reverse order |
| [sortings] | <code>Object.&lt;string, SortCallback&gt;</code> |  | A set of sorting functions |
| [rowClassName] | [<code>classNameCallback</code>](#classNameCallback) |  | A callback to set the className of a row based on its data |
| [cellClassName] | [<code>classNameCallback</code>](#classNameCallback) |  | A callback to set the className of a cell based on its data for each sortable column |
| [selectable] | <code>boolean</code> | <code>true</code> | True if the grid is selectable |
| [multiselect] | <code>boolean</code> | <code>false</code> | True if we will enable multiselect in the grid |

<a name="ModalState"></a>

## ModalState : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| buttons | [<code>Array.&lt;ModalButton&gt;</code>](#ModalButton) | 
| title | <code>string</code> | 
| message | <code>string</code> | 
| [visible] | <code>boolean</code> | 
| closable | <code>boolean</code> | 
| [onSuccess] | [<code>ModalCloseCallback</code>](#ModalCloseCallback) | 
| [onReject] | [<code>ModalCloseCallback</code>](#ModalCloseCallback) | 

<a name="ModalCloseCallback"></a>

## ModalCloseCallback : <code>function</code>
Callback for modal close events

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| buttonPressed | <code>string</code> | 
| success | <code>boolean</code> | 

<a name="ModalButton"></a>

## ModalButton : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| key | <code>string</code> | 
| label | <code>string</code> | 
| success | <code>boolean</code> | 
| className | <code>string</code> | 

<a name="TagEntity"></a>

## TagEntity : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> \| <code>null</code> | 
| tagId | <code>string</code> \| <code>null</code> | 
| text | <code>string</code> | 

<a name="TagsState"></a>

## TagsState : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| tags | [<code>Array.&lt;TagEntity&gt;</code>](#TagEntity) | 
| suggestions | [<code>Array.&lt;TagEntity&gt;</code>](#TagEntity) | 

<a name="TreeItem"></a>

## TreeItem : <code>Object</code>
Definition for ReactTree TreeItem object

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> \| <code>number</code> |  | The unique id of the item |
| [parentId] | <code>string</code> \| <code>number</code> | <code>0</code> | The parent id of the item |
| children | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) |  | The item's children |

<a name="ReactTreeState"></a>

## ReactTreeState : <code>Object</code>
Definition for ReactTree State object

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| root | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) | The root item containing tree root children |
| loading | <code>boolean</code> | True if the grid is in the loading state |
| selectedItem | <code>string</code> \| <code>null</code> | The id of the selected item |
| expandedIds | <code>Object.&lt;string, boolean&gt;</code> | A collection of the ids of expanded categories |
| enabled | <code>boolean</code> | True if the tree is enabled |

<a name="ReactTreeProps"></a>

## ReactTreeProps : <code>Object</code>
Definition for ReactTreeProps object

**Kind**: global typedef  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| [id] | <code>string</code> | <code>&quot;tree&quot;</code> | 
| format | <code>function</code> |  | 
| initialData | [<code>Array.&lt;TreeItem&gt;</code>](#TreeItem) \| <code>null</code> |  | 
| sort | [<code>SortCallback</code>](#SortCallback) \| <code>null</code> |  | 

