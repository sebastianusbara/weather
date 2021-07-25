import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import LoadingState from './loadingState.component';

test('check render', () => {
    const tree = renderer.create(<LoadingState/>).toTree();
    const instance = tree.rendered;
    expect(instance).not.toEqual({});
});
