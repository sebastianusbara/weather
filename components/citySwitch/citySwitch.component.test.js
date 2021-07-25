import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import CitySwitch from './CitySwitch.component';

const defaultProps = {
    item: {
        CITY: 'Jakarta'
    }
};

test('check render', () => {
    const tree = renderer.create(<CitySwitch {...defaultProps}/>).toTree();
    const instance = tree.rendered;
    expect(instance).not.toEqual({});
});
