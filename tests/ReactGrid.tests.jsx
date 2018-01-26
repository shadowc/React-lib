import renderer from 'react-test-renderer';
import React from 'react';
import ReactGrid from '../src/jsx/ReactGrid';
import gridColumnsMock from './mocks/grid-columns-mock';

describe('ReactGrid', () => {
    test('Test that we can render a ReactGrid component', () => {
        const GridComponent = renderer.create(
            <ReactGrid columns={gridColumnsMock} orderBy="name" initialData={[]} />
        );

        expect(GridComponent.toJSON()).toMatchSnapshot();
    });
});
