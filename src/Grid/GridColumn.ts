import React from 'react';
import GridRow from './GridRow';

export type FormattingCallback<T = any> = (value: any, row: GridRow<T>) => string | HTMLElement | React.Component;

export interface ColumnOptions {
    name: string;
    displayName?: string;
    className?: string;
    width: string;
    format?: FormattingCallback;
    sortable?: boolean;
}

export default class GridColumn {
    #width: string = '';
    name: string;
    displayName: string;
    format: FormattingCallback | undefined;
    sortable: boolean = false;
    className: string;

    constructor(props: ColumnOptions) {
        this.name = props.name;
        this.displayName = props.displayName ?? this.name;
        this.#width = props.width;
        this.className = props.className ?? '';
        this.format = props.format;
        this.sortable = props.sortable ?? false;
    }

    get width() {
        return this.#width;
    }

    set Width(width: string) {
        const validate = /^(\d)+[px|%]$/;

        if (typeof width === 'number') {
            this.#width = `${width}px`;
        } else if (validate.test(width.toString())) {
            this.#width = width.toString();
        } else {
            this.#width = '';
        }
    };
}
