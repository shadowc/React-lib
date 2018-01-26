import renderer from 'react-test-renderer';
import React from 'react';
import ReactGrid from '../src/jsx/ReactGrid';
import gridColumnsMock from './mocks/grid-columns-mock';
import gridDataMock from './mocks/grid-data-mock';

describe('ReactGrid', () => {
    test('Test that we can render a ReactGrid component', () => {
        const GridComponent = renderer.create(
            <ReactGrid columns={gridColumnsMock} orderBy="name" initialData={[]} />
        );

        expect(GridComponent.toJSON()).toMatchSnapshot();
    });

    test('Test that we can render a ReactGrid component with 2 rows', () => {
        const GridComponent = renderer.create(
            <ReactGrid columns={gridColumnsMock} orderBy="name" initialData={gridDataMock} />
        );

        expect(GridComponent.toJSON()).toMatchSnapshot();
    });
});
