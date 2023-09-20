import React from 'react';
import GridColumn from './GridColumn';
import GridRow from './GridRow';
import { ClassNameCallback } from './Grid';

interface GridCellComponentProps<T = {}> {
    row: GridRow<T>;
    col: GridColumn;
    cellClassName?: ClassNameCallback<T>;
}

function GridCellComponent(props: GridCellComponentProps) {
    const { row, col, cellClassName } = props;
    const data = row.data as Record<string, any>;
    const className = cellClassName !== undefined ? cellClassName(row.data, col.name) : '';
    const style = { width: col.width };
    const rowData = (data[col.name] ? data[col.name].toString() : '');

    const contents = typeof col.format === 'function' ?
        col.format(data[col.name], row) :
        rowData;

    const generateCellClick = (event: React.MouseEvent, name: string) => {

    };

    return (
        <td
            key={`${row.id} ${col.name}`}
            style={style}
            className={className}
            onClick={(event: React.MouseEvent) => generateCellClick(event, col.name)}
        >
            {typeof contents === 'string' ?
                contents :
                React.createElement('span', null, contents)
            }
        </td>
    );
}

export default GridCellComponent;
