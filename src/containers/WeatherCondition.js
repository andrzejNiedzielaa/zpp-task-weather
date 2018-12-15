import React from "react"
import {connect} from "react-redux"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {getWeatherCondition} from '../selectors'

let WeatherCondition = ({ condition }) => {
    return (
        // TODO - add emoticons
        <div>The weather is <b>{condition}</b></div>
    )
};

WeatherCondition.propTypes = {
    condition: PropTypes.string.isRequired
};

function mapStateToProps(state) {
   return {
       condition: getWeatherCondition(state)
   }
}

export default connect(mapStateToProps)(WeatherCondition)
