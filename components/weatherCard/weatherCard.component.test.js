import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import WeatherCard from './weatherCard.component';

const defaultProps = {
    day: 'Thursday',
    temp: {
        min: 12,
        max: 42
    },
    date: '25 July 2021',
    main: 'Rain',
    description: 'Heavy Rain',
    humidity: 214,
    wind_speed: 124,
    city: 'Jakarta',
    cityIndex: 0
};

test('check render', () => {
    const tree = renderer.create(<WeatherCard {...defaultProps}/>).toTree();
    const instance = tree.rendered;
    expect(instance).not.toEqual({});
});
