import Grid from '../src/es6/Grid';
import GridColumn from '../src/es6/GridColumn';
import gridColumnsMock from './mocks/grid-columns-mock';
import gridDataMock from './mocks/grid-data-mock';
import GridRow from '../src/es6/GridRow';

describe('Grid', () => {
    beforeAll(() => {
        global.createGrid = (initialData = []) => (
            new Grid({
                columns: gridColumnsMock,
                initialData,
                orderBy: 'name'
            })
        );
    });

    test('Test that we can create a Grid object with 2 columns', () => {
        const myGrid = global.createGrid();

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));

        expect(myGrid.grid.state.columns.length).toEqual(2);
        expect(myGrid.grid.state.columns[0]).toBeInstanceOf(GridColumn);
        expect(myGrid.grid.state.columns[1]).toBeInstanceOf(GridColumn);
        expect(myGrid.grid.state.columns[0].name).toEqual('id');
        expect(myGrid.grid.state.columns[1].name).toEqual('name');
    });

    test('Test that we can create a Grid object with 2 columns and initial data', () => {
        const myGrid = global.createGrid(gridDataMock);

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));

        expect(myGrid.grid.state.rawData).toEqual(gridDataMock);
        expect(myGrid.grid.state.rows.length).toEqual(2);
        expect(myGrid.grid.state.rows[0]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[1]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[0].data.name).toEqual('First');
    });

    test('Test that we can add rows through addRows method', () => {
        const myGrid = global.createGrid();

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));
        myGrid.addRows(gridDataMock);

        expect(myGrid.grid.state.rawData).toEqual(gridDataMock);
        expect(myGrid.grid.state.rows.length).toEqual(2);
        expect(myGrid.grid.state.rows[0]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[1]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[0].data.name).toEqual('First');
    });

    test('Test that we can reset rows through setRows method', () => {
        const myGrid = global.createGrid(gridDataMock);

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));
        myGrid.setRows([
            {
                id: 5,
                name: 'Fifth'
            }
        ]);

        expect(myGrid.grid.state.rawData).not.toEqual(gridDataMock);
        expect(myGrid.grid.state.rows.length).toEqual(1);
        expect(myGrid.grid.state.rows[0]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[0].data.name).toEqual('Fifth');
    });

    test('Test that we can update a row given its id and raw data', () => {
        const myGrid = global.createGrid(gridDataMock);

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));
        myGrid.updateRow(1, {
            id: 1,
            name: 'Third'
        });

        expect(myGrid.grid.state.rawData.length).toEqual(2);
        expect(myGrid.grid.state.rows.length).toEqual(2);
        expect(myGrid.grid.state.rows[0]).toBeInstanceOf(GridRow);
        expect(myGrid.grid.state.rows[0].data.name).toEqual('Third');
        expect(myGrid.grid.state.rawData[0].name).toEqual('Third');
    });

    test('Test that we can delete a row by id', () => {
        const myGrid = global.createGrid(gridDataMock);

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));
        myGrid.deleteById(1);

        expect(myGrid.grid.state.rawData.length).toEqual(1);
        expect(myGrid.grid.state.rows.length).toEqual(1);
        expect(myGrid.grid.state.rows[0].data.name).toEqual('Second');
        expect(myGrid.grid.state.rawData[0].name).toEqual('Second');
    });

    test('Test that we can getSelectedRowIds and use getById based on that', () => {
        const myGrid = global.createGrid(gridDataMock);

        expect(myGrid).toBeInstanceOf(Grid);

        myGrid.render(document.createElement('div'));
        myGrid.grid.state.rows[1].selected = true;
        myGrid.grid.setState({
            rows: myGrid.grid.state.rows
        });

        const rowIds = myGrid.getSelectedRowIds();

        expect(rowIds.length).toEqual(1);
        expect(rowIds[0]).toEqual(2);

        const row = myGrid.getById(rowIds[0]);

        expect(row).not.toBeNull();
        expect(row.data.id).toEqual(2);
        expect(row.data.name).toEqual('Second');
    });
});
