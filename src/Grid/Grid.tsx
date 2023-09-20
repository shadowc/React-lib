import React, { createContext, useEffect, useState } from 'react';
import { GridRowData } from './interfaces/RowData';
import { GridColumnData } from './interfaces/ColumnData';
import { GridState } from './interfaces/State';
import createRowsContext from './context/RowsContext';

export interface GridProps<T extends GridRowData = GridRowData> {
    initialData: T[] | undefined;
    columns: GridColumnData[];
    initialState: GridState;
    onColumnHeaderClick?: (column: GridColumnData) => void;
    onRowClick?: (row: T) => void;
    onCellClick?: (row: T, fieldName: string) => void;
}

export default function Grid(props: GridProps) {
    const {
        initialData,
        columns: columnsDef,
        initialState,
        onColumnHeaderClick,
        onRowClick,
        onCellClick,
    } = props;

    const [rowsContextData, setRowsContextData] = useState(initialData || []);
    const [columnsContextData, setColumnsContextData] = useState<GridColumnData[]>(columnsDef);
    const [stateContextData, setStateContextData] = useState<GridState>(initialState);

    const RowsContext = createRowsContext();
    const ColumnsContext = createContext<GridColumnData[]>([]);
    const StateContext = createContext<GridState>({});

    useEffect(() => {
        let nextRowId = 0;
        const getNextRowId = () => (nextRowId++).toString();

        if (initialData !== undefined) {
            setRowsContextData(initialData?.map(row => ({...row, id: row.id ?? getNextRowId() })));
        }

        setStateContextData({
            enabled: initialState.enabled ?? true,
            multiselect: initialState.multiselect ?? false,
            orderReverse: initialState.orderReverse ?? false,
            selectable: initialState.selectable ?? false,
            orderBy: initialState.orderBy ?? columnsContextData[0].name,
            loading: initialState.loading ?? false,
        });
    }, [setRowsContextData, setStateContextData]);

    const className = `table-wrapper${stateContextData.enabled ? '' : ' disabled'}`;

    return (
        <ColumnsContext.Provider value={columnsContextData}>
            <RowsContext.Provider value={rowsContextData}>
                <StateContext.Provider value={stateContextData}>
                    <div className={className}>
                        <table className="table-header">
                            <thead><tr>{
                                columnsContextData.map((column) => 
                                    <GridColumnComponent column={column.name} />
                                )
                            }</tr></thead>
                        </table>

                        <table className="table-body">
                            <tbody>
                                { stateContextData.loading ?
                                    (<tr>
                                        <td colSpan={columnsContextData.length}>
                                            <span className="icon loading">&nbsp;</span>
                                        </td>
                                    </tr>) :
                                    rowsContextData.map((row) => <GridRowComponent row={row} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </StateContext.Provider>
            </RowsContext.Provider>
        </ColumnsContext.Provider>
    );
};
