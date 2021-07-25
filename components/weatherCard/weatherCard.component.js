import React from 'react';
import {
    Card, Day, Date, Min, Max, Desc, Hour, Temp, Indicator, Humidity, Wind, IconWrapper
} from './weatherCard.component.style';
import Link from 'next/link';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import {
    faCloudRain, faCloudSun, faSun, faTint, faWind
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import StyleConstant from '../../styles/style.constant';
import { createGlobalStyle } from 'styled-components';

config.autoAddCss = false;
const Wrapper = createGlobalStyle`
    ${dom.css()}
`;

const geticonImage = (icon) => {
    let iconImage = '';
    if (icon === 'Rain') iconImage = faCloudRain;
    if (icon === 'Clear') iconImage = faSun;
    if (icon === 'Clouds') iconImage = faCloudSun;
    return <IconWrapper><FontAwesomeIcon icon={iconImage} size={'5x'} /></IconWrapper>;
};

const getCardStyle = (icon) => {
    let cardStyle = '';
    if (icon === 'Rain') cardStyle = StyleConstant.COLOR.NAVY;
    if (icon === 'Clear') cardStyle = StyleConstant.COLOR.ORANGE;
    if (icon === 'Clouds') cardStyle = StyleConstant.COLOR.BLUE;
    return cardStyle;
};

const renderDailyCard = ({ day, date, main, temp, description, humidity, wind_speed, city, cityIndex, key }) => (
    <Link key={key} href={`/detail?day=${day.toLowerCase()}&city=${city}&cityIndex=${cityIndex}`} passHref>
        <Card color={getCardStyle(main)}>
            <Day>{day}</Day>
            <Date>{date}</Date>
            {geticonImage(main)}
            <Min>Min {kelvinToFahrenheit(temp.min)} &#176;F</Min>
            <Max>Max {kelvinToFahrenheit(temp.max)} &#176;F</Max>
            <Indicator>
                <FontAwesomeIcon icon={faTint} size={'1x'} />
                <Humidity>{humidity}</Humidity>
                <FontAwesomeIcon icon={faWind} size={'1x'} />
                <Wind>{wind_speed}</Wind>
            </Indicator>
            <Desc>{description}</Desc>
        </Card>
    </Link>
);

const renderHourlyCard = ({ hour, main, temp, description, humidity, wind_speed, key }) => (
    <Card key={key} color={getCardStyle(main)}>
        <Hour>{hour}</Hour>
        {geticonImage(main)}
        <Temp>{kelvinToFahrenheit(temp)} &#176; F</Temp>
        <Indicator>
            <FontAwesomeIcon icon={faTint} size={'1x'} />
            <Humidity>{humidity}</Humidity>
            <FontAwesomeIcon icon={faWind} size={'1x'} />
            <Wind>{wind_speed}</Wind>
        </Indicator>
        <Desc>{description}</Desc>
    </Card>
);

const WeatherCard = (props) => (
    <div>
        <Wrapper/>
        {props.hour ? renderHourlyCard(props) : renderDailyCard(props)}
    </div>
);

export default WeatherCard;
