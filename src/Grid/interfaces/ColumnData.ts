import { GridRowData } from './RowData';

export interface GridColumnData {
    name: string;
    displayName: string;
    className: string;
    sortFn?: <T extends GridRowData = GridRowData>(a: T, b: T) => number;
    headerClassNameCallback?: (column: GridColumnData) => string;
}
