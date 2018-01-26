import Grid from '../src/es6/Grid';

test('Test that we can create a Grid object', () => {
    const myGrid = new Grid({
        columns: [
            {
                name: 'id',
                displayName: 'Id',
                visible: true
            },
            {
                name: 'name',
                displayName: 'Name',
                visible: true
            }
        ]
    });

    expect(myGrid).toBeDefined();
});
