import React from "react";
import PropTypes from "prop-types"
import styled from 'styled-components'

const Table = styled.table`
// TODO
`;

const Headers = styled.thead`
// TODO
`;

export const Row = styled.tr`
// TODO
`;

const Body = styled.tbody`
// TODO
`;

const DataCell = styled.td`
// TODO
`;

let ForecastTable = ({ data }) => {
    return (
        <Table>
            <Headers>
                <Row>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>General</th>
                </Row>
            </Headers>
            <Body>
            {data.map(row => (
                <Row key={row.dt}>
                    <DataCell>{row.dt_txt}</DataCell>
                    <DataCell>{row.main.temp}</DataCell>
                    <DataCell>{row.weather[0].main}</DataCell>
                </Row>)
            )}
            </Body>
        </Table>
    )
};

ForecastTable.propTypes = {
    data: PropTypes.array,
};

export default ForecastTable
