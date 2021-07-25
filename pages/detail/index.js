import React, { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from "next/router";
import Carousel from '../../components/carousel/carousel.component';
import WeatherCard from '../../components/weatherCard/weatherCard.component';
import CountDown from '../../components/countDown/countDown.component';
import { Main, MainTitle, Container, CurrentDateTitle } from '../index.style';
import mainConfig from '../../config';
import LoadingState from '../../components/loadingState/loadingState.component';
const { GEOLOCATION, WEATHER_API, API_KEY } = mainConfig;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            timezone: '',
            current: {},
            countDown: 300
        };
    }

    renderHeaderTitle = () => (
        <Head>
            <title>Weather App - Hourly</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );

    requestWeatherData = () => {
        const self = this;
        const { router: { query : { cityIndex = 0 }}} = this.props;
        const lat = GEOLOCATION[cityIndex].LAT;
        const long = GEOLOCATION[cityIndex].LONG;

        axios
            .get(`${WEATHER_API}?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then(function (response) {
                const { hourly, timezone, current } = response.data;
                const { dt } = response.data.current;
                const data = hourly.splice(0, 24);
                self.setState({ data, timezone, current });
            });
    };

    componentDidMount() {
        this.requestWeatherData();
        const self = this;
        setInterval(function(){
            const { countDown } = self.state;
            if (countDown > 0) self.setState({ countDown : countDown - 1});
            if (countDown === 0) self.setState({ countDown : 300});
        }, 1000);
    }

    renderFullState = () => {
        const { data, current, countDown } = this.state;
        const { router: { query : { day, city }}} = this.props;
        const currentDate = moment(current.dt * 1000).format("MMM Do YY, h:mm a");
        if (countDown === 0) this.requestWeatherData();

        return (
            <Container>
                {this.renderHeaderTitle()}
                <Main>
                    <MainTitle>{day && day.toUpperCase()}</MainTitle>
                    <CurrentDateTitle>
                        {currentDate} / {city}, Indonesia
                    </CurrentDateTitle>
                    <Carousel>
                        {
                            data.length === 0 ? '' :
                                data.map(function (item, index) {
                                    const { dt, weather, temp, humidity, wind_speed } = item;
                                    const { description, main } = weather[0];
                                    const hour = moment(dt * 1000).format('h:mm a');

                                    return(
                                        <WeatherCard
                                            key={index}
                                            hour={hour}
                                            main={main}
                                            temp={temp}
                                            description={description}
                                            humidity={humidity}
                                            wind_speed={wind_speed}
                                        />
                                    )
                                })
                        }
                    </Carousel>
                </Main>
                <CountDown second={countDown}/>
            </Container>
        )
    }

    render(){
        return this.state.data.length > 0 ? this.renderFullState() : <LoadingState/>;
    }
}

export default withRouter(Detail);
