import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components"
import {Row} from "./ForecastTable";

const DataCell = styled.td`

`;

let ForecastRow =  ({ data }) => {
    return (
        <Row key = {data.dt}>
            <DataCell>{data.dt_txt}</DataCell>
            <DataCell>{data.main.temp}</DataCell>
            <DataCell>{data.weather[0].main}</DataCell>
        </Row>
    );
};


ForecastRow.propTypes = {
    data: PropTypes.object.isRequired
};

export default ForecastRow
