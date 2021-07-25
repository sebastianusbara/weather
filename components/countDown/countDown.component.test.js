import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import CountDown from './CountDown.component';

test('check render', () => {
    const tree = renderer.create(<CountDown second={300}/>).toTree();
    const instance = tree.rendered;
    expect(instance).not.toEqual({});
});
