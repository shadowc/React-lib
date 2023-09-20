import { useCallback, useState } from 'react';
import GridRow from '../GridRow';
import GridColumn from '../GridColumn';
import { SortCallback } from '../Grid';

export default function useGridState<T extends {} = {}>() {
    const [rawData, setRawData] = useState<Array<T>>([]);
    const [columns, setColumns] = useState<GridColumn[]>([]);
    const [rows, setRows] = useState<GridRow<T>[]>([]);
    const [prevSelectedRow, setPrevSelectedRow] = useState(-1);
    const [orderBy, setOrderBy] = useState('');
    const [orderReverse, setOrderReverse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [sortings, setSortings] = useState<Record<string, SortCallback<T>>>({});

    const sortRows = useCallback(() => {
        const sortFn = sortings[orderBy];

        if (typeof (sortFn) === 'function') {
            rows.sort(sortFn);
        }

        if (orderReverse) {
            rows.reverse();
        }
    }, [sortings, orderBy, orderReverse]);

    return {
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
};
