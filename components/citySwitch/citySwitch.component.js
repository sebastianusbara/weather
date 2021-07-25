import React from 'react';
import { StyledSwitch, Wrapper } from './citySwitch.component.style';

const CitySwitch = ({ item, index, onClick, selectedCity }) => (
    <Wrapper key={index}>
        <StyledSwitch onClick={onClick} isActive={item.CITY === selectedCity}>
            {item.CITY}
        </StyledSwitch>
    </Wrapper>
);

export default CitySwitch;
