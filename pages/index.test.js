import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Home from './index';

const initialState = {
    data: [],
    timezone: '',
    city: 'Jakarta',
    cityIndex: 0,
    current: {},
    countDown: 300
};

test('check initial state', () => {
    const tree = renderer.create(<Home />).toTree();
    const instance = tree.instance;
    expect(instance.state).toEqual(initialState);
});

test('set city name', () => {
    const tree = renderer.create(<Home />).toTree();
    const instance = tree.instance;
    instance.setCity('Jakarta');
    expect(instance.state.city).toEqual('Jakarta');
});
