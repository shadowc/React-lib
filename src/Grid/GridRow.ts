export interface RowOptions<T = {}> {
    id?: string;
    data: T;
}

let __nextRowId = 0;

const getNextRowId = () => (__nextRowId++).toString(10);

export default class GridRow<T = {}> {
    id: string;
    data: RowOptions<T>;
    selected: boolean = false;
    show: boolean = true;

    constructor(props: RowOptions<T> | GridRow<T>) {
        this.id = props.id ? props.id : getNextRowId();
        this.data = props instanceof GridRow ? window.structuredClone(props.data) : window.structuredClone(props);
    }
}
