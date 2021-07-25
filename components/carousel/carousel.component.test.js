import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Carousel from './Carousel.component';

const defaultProps = {
    children: []
};

test('check render', () => {
    const tree = renderer.create(<Carousel {...defaultProps}/>).toTree();
    const instance = tree.rendered;
    expect(instance).not.toEqual({});
});
