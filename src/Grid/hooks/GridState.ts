import { useState } from 'react';
import { GridColumn, GridRow } from '../interfaces/Grid';

const useGridState = () => {
    const [rawData, setRawData] = useState<Array<any> | undefined>(undefined);
    const [columns, setColumns] = useState<GridColumn[]>([]);
    const [rows, setRows] = useState<GridRow[]>([]);
    const prevSelectedRow = useState(-1);
    const orderBy = useState('');
    const orderReverse = useState(false);
    const loading = useState(false);
    const enabled = useState(true);
 
    return {
        rawData,
        columns,
        rows,
        prevSelectedRow,
        orderBy,
        orderReverse,
        loading,
        enabled
    };
};

export default useGridState;
