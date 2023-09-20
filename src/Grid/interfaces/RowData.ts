export interface GridRowData {
    id?: string | number;
    rowClassNameCallback?: <T extends GridRowData = GridRowData>(row: T) => string;
    cellClassNameCallback?: <T extends GridRowData = GridRowData>(row: T, fieldName: string) => string;
    [index: string]: any;
}
