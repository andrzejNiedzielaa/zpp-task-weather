import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import ForecastTable from "./ForecastTable"
import WeatherCondition from '../containers/WeatherCondition'
import ForecastFilters from '../containers/ForecastFilters'

const AlertMessage = styled.div`
// TODO
`;

const ForecastWrapper = styled.div`
// TODO
`;

const CityHeader = styled.h1`
// TODO
`;

let Forecast = ({ weatherList, isFetching, city, last_updated }) => {
    if (isFetching) {
        return <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"/>
    } else if (weatherList.length === 0) {
        return <AlertMessage>Wyszukaj miasto !</AlertMessage>
    }

    return (
        <ForecastWrapper>
            <CityHeader>{city.name}, {city.country}</CityHeader>
            <WeatherCondition/>
            <ForecastFilters/>
            <ForecastTable data={weatherList}/>
        </ForecastWrapper>
    )
};

Forecast.propTypes = {
    weatherList: PropTypes.array,
    isFetching: PropTypes.bool,
    city: PropTypes.object,
    last_updated: PropTypes.number
};

export default Forecast
