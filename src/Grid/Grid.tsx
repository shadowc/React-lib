import React, { useEffect } from 'react';
import useGridState from './hooks/GridState';
import GridColumn, { ColumnOptions } from './GridColumn';
import GridRow, { RowOptions } from './GridRow';
import GridColumnComponent from './GridColumnComponent';
import GridRowComponent from './GridRowComponent';

export type SortCallback<T> = (a: GridRow<T>, b: GridRow<T>) => number;

export type ClassNameCallback<T> = (row: RowOptions<T>, column?: string) => string;

let __gridStateId = 0;
const getNextGridStateId = () => (__gridStateId++).toString(10);

export interface GridProps<T extends {} = {}> {
    id?: string;
    initialData: RowOptions<T>[] | undefined;
    columns: ColumnOptions[];
    orderBy: string | undefined;
    orderReverse?: boolean;
    sortings?: Record<string, SortCallback<T>>;
    rowClassName?: ClassNameCallback<T>;
    cellClassName?: ClassNameCallback<T>;
    selectable?: boolean;
    multiselect: boolean;
    onColumnHeaderClick?: (column: GridColumn) => void;
}

export default function Grid(props: GridProps) {
    const {
        id,
        initialData,
        columns: columnsDef,
        orderBy: orderByDef,
        orderReverse: orderReverseDef,
        sortings: sortingsDef,
        onColumnHeaderClick,
        rowClassName,
        cellClassName,
    } = props;

    const stateId = id ?? getNextGridStateId();

    const {
        rawData,
        setRawData,
        columns,
        setColumns,
        rows,
        setRows,
        orderBy,
        setOrderBy,
        orderReverse,
        setOrderReverse,
        enabled,
        loading,
        sortRows,
        sortings,
        setSortings,
    } = useGridState();

    useEffect(() => {
        if (initialData !== undefined) {
            setRows(initialData?.map(row => new GridRow(row)));
            setRawData(initialData);
        }
    
        setColumns(columnsDef.map(col => new GridColumn(col)));

        if (orderByDef !== undefined) {
            setOrderBy(orderByDef);
        }

        if (orderReverseDef !== undefined) {
            setOrderReverse(orderReverseDef);
        }

        if (sortingsDef !== undefined) {
            setSortings(sortingsDef);
        }

        sortRows();
    }, [setColumns, setRows, setOrderBy, setRawData, setSortings]);

    const className = `table-wrapper${enabled ? '' : ' disabled'}`;

    return (
        <div className={className} id={id}>
            <table className="table-header">
                <thead><tr>{
                    columns.map((column) => 
                        <GridColumnComponent 
                            column={column} 
                            id={stateId} 
                            onColumnHeaderClick={onColumnHeaderClick} 
                            enabled={enabled}
                        />
                    )
                }</tr></thead>
            </table>

            <table className="table-body">
                <tbody>
                    { loading ?
                        (<tr>
                            <td colSpan={columns.length}>
                                <span className="icon loading">&nbsp;</span>
                            </td>
                        </tr>) :
                        rows.map((row) =>
                            <GridRowComponent
                                row={row}
                                columns={columns}
                                rowClassName={rowClassName}
                                cellClassName={cellClassName}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};
