import { createContext } from 'react';
import { GridRowData } from '../interfaces/RowData';

function createRowsContext<T extends GridRowData = GridRowData>() {
    return createContext([] as T[]);
}

export default createRowsContext;
