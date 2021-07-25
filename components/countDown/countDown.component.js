import React from 'react';
import { CountDown } from './countDown.component.style';

const secondToMinute = (sec) => new Date(sec * 1000).toISOString().substr(14, 5);

const countDown = ({ second }) => (
    <CountDown>
        Data will be updated on <strong>{secondToMinute(second)}</strong>
    </CountDown>
);

export default countDown;
