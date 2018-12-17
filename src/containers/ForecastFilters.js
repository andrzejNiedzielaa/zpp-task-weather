import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import styled from 'styled-components'
import {
    DailyForecastButton,
    HourlyForecastButton
} from './buttons/ForecastFilterButtons'
import {
    isForecastDaily
} from '../selectors'
import { toJS } from "../helpers/to-js";

const FilterWrapper = styled.div`
// TODO
`;

let ForecastFilters = ({ isDaily }) => {
    let forecast_interval_button;

    if (isDaily) {
        forecast_interval_button = <HourlyForecastButton>Hourly</HourlyForecastButton>;
    } else {
        forecast_interval_button = <DailyForecastButton>Daily</DailyForecastButton>;
    }

    return (
        <FilterWrapper>
            {forecast_interval_button}
        </FilterWrapper>
    )
};

ForecastFilters.propTypes = {
    isDaily: PropTypes.bool
};

const mapStateToProps = state => ({
    isDaily: isForecastDaily(state)
});

export default connect(mapStateToProps)(toJS(ForecastFilters))
