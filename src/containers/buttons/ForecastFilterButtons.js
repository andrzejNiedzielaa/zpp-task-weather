import { connect } from "react-redux";
import {
    showDailyForecast,
    showHourlyForecast
} from "../../actions";
import styled from 'styled-components'
import BaseButton from "../../components/Button";

let Button = styled(BaseButton)`
// TODO
`;

export let DailyForecastButton = connect(null, dispatch => ({
    onClick: () => dispatch(showDailyForecast())
}))(Button);

export let HourlyForecastButton = connect(null, dispatch => ({
    onClick: () => dispatch(showHourlyForecast())
}))(Button);
