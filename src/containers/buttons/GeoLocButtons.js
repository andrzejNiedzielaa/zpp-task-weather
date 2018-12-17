import { connect } from "react-redux";
import {
    getWeatherWithLocation,
    getWeatherWithLocationDelayed,

} from "../../actions";
import styled from 'styled-components'
import BaseButton from "../../components/Button";

let Button = styled(BaseButton)`
// TODO
`;

export let GeoLocButton = connect(null, dispatch => ({
    onClick: () => dispatch(getWeatherWithLocation())
}))(Button);

export let GeoLocWithDelayButton = connect(null, dispatch => ({
    onClick: () => dispatch(getWeatherWithLocationDelayed())
}))(Button);
