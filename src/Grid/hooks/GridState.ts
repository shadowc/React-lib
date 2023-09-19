import { useCallback, useState } from 'react';
import GridRow from '../GridRow';
import GridColumn from '../GridColumn';
import { SortCallback } from '../Grid';

export interface GridState<T = any> {
    rawData: Array<T>;
    setRawData: (value: Array<T>) => void;
    columns: GridColumn[];
    setColumns: (value: GridColumn[]) => void;
    rows: GridRow<T>[];
    setRows: (value: GridRow<T>[]) => void;
    prevSelectedRow: number;
    setPrevSelectedRow: (value: number) => void;
    orderBy: string;
    setOrderBy: (value: string) => void;
    orderReverse: boolean;
    setOrderReverse: (value: boolean) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    enabled: boolean;
    setEnabled: (value: boolean) => void;
    sortings: Record<string, SortCallback>;
    setSortings: (value: Record<string, SortCallback>) => void;

    sortRows: () => void;
}

export const GridStateCollection: Record<string, GridState> = {};

const useGridState = <T = any>(id: string) => {
    if (GridStateCollection[id] ===  undefined) {
        const [rawData, setRawData] = useState<Array<T>>([]);
        const [columns, setColumns] = useState<GridColumn[]>([]);
        const [rows, setRows] = useState<GridRow<T>[]>([]);
        const [prevSelectedRow, setPrevSelectedRow] = useState(-1);
        const [orderBy, setOrderBy] = useState('');
        const [orderReverse, setOrderReverse] = useState(false);
        const [loading, setLoading] = useState(false);
        const [enabled, setEnabled] = useState(true);
        const [sortings, setSortings] = useState<Record<string, SortCallback>>({});
    
        const sortRows = useCallback(() => {
            const sortFn = sortings[orderBy];

            if (typeof (sortFn) === 'function') {
                rows.sort(sortFn);
            }

            if (orderReverse) {
                rows.reverse();
            }
        }, [sortings, orderBy, orderReverse]);

        GridStateCollection[id] = {
            rawData,setRawData,
            columns, setColumns,
            rows, setRows,
            prevSelectedRow, setPrevSelectedRow,
            orderBy, setOrderBy,
            orderReverse, setOrderReverse,
            loading, setLoading,
            enabled, setEnabled,
            sortings, setSortings,
            sortRows,
        };
    }

    return GridStateCollection[id];
};

export default useGridState;
