import Grid from '../src/es6/Grid';
import GridColumn from '../src/es6/GridColumn';

test('Test that we can create a Grid object with 2 columns', () => {
    const myGrid = new Grid({
        columns: [
            {
                name: 'id',
                displayName: 'Id',
                visible: true,
                width: 50
            },
            {
                name: 'name',
                displayName: 'Name',
                visible: true,
                width: 50
            }
        ]
    });

    expect(myGrid).toBeDefined();
    myGrid.render(document.createElement('div'));
    expect(myGrid.grid.state.columns.length).toEqual(2);
    expect(myGrid.grid.state.columns[0]).toBeInstanceOf(GridColumn);
    expect(myGrid.grid.state.columns[1]).toBeInstanceOf(GridColumn);
    expect(myGrid.grid.state.columns[0].name).toEqual('id');
    expect(myGrid.grid.state.columns[1].name).toEqual('name');
});
