import GridColumn from './GridColumn';
import React from 'react';

export interface GridColumnComponentProps {
    column: GridColumn;
    id: string;
    onColumnHeaderClick?: (column: GridColumn) => void;
    enabled: boolean;
}

const GridColumnComponent = (props: GridColumnComponentProps) => {
    const { column, id, onColumnHeaderClick, enabled } = props;
    const style = { width: column.width };

    const generateHeaderClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (!enabled) {
            return false;
        }

        const headerEvent = new CustomEvent('HeaderClick', { detail: column });

        const rootElem = document.getElementById(id);

        if (rootElem) {
            rootElem.dispatchEvent(headerEvent);
        }

        if (typeof onColumnHeaderClick === 'function') {
            onColumnHeaderClick(column);
        }

        return false;
    };

    return (
        <th
            key={column.name}
            className={column.className}
            style={style}
            onClick={generateHeaderClick}
        >
            {column.displayName}
        </th>
    );
}

export default GridColumnComponent;
