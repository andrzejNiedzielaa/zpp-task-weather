import React from "react";
import { connect } from "react-redux";
import {
    getWeatherWithLocation,
    getWeatherWithLocationDelayed,

} from "../actions";
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {getUpdateTime} from "../selectors";

const Wrapper = styled.div`

`;

const GeoButton = styled.button`

`;


let Geolocation = ({ dispatch, last_updated}) => {
    return (
        <Wrapper>
            <GeoButton onClick={() => dispatch(getWeatherWithLocation(last_updated))}>
                Search with geolocation
            </GeoButton>
            <GeoButton onClick={() => dispatch(getWeatherWithLocationDelayed(last_updated))}>
                Search with delayed geolocation
            </GeoButton>
        </Wrapper>
    );
};

Geolocation.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        last_updated: getUpdateTime(state)
    }
}

export default connect(mapStateToProps)(Geolocation);
