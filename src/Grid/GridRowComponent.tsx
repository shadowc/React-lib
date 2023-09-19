import React from 'react';
import { classNameCallback } from '../jsx/ReactGrid';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import GridCellComponent from './GridCellComponent';

export interface GridRowComponentProps<T = any> {
    row: GridRow<T>;
    columns: GridColumn[];
    rowClassName?: classNameCallback;
    cellClassName?: classNameCallback;
}

function GridRowComponent<T>(props: GridRowComponentProps<T>) {
    const { row, rowClassName, cellClassName, columns } = props;
    const fnClassName = rowClassName !== undefined ? rowClassName(row.data) : '';
    const className = `${fnClassName} ${row.selected ? 'selected' : ''}`;
    const style = { display: row.show ? 'table-row' : 'none' };

    return (
        <tr
            key={row.id}
            id={row.id}
            className={className}
            style={style}
        >
            {columns.map((col) => <GridCellComponent row={row} col={col} cellClassName={cellClassName} />)}
        </tr>
    );
}

export default GridRowComponent;
