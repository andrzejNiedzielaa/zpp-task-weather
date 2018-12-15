import React from "react";
import PropTypes from "prop-types"
import ForecastRow from "./ForecastRow"
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

let ForecastTable = ({ data }) => {
    return (
        <Table>
            <Headers>
                <Row>
                    <th>Data</th>
                    <th>Temperatura</th>
                    <th>Ogólnie</th>
                </Row>
            </Headers>
            <Body>
                {data.map(row => (
                    <ForecastRow key={row.dt} data={row}/>
                ))}
            </Body>
        </Table>
    )
};

ForecastTable.propTypes = {
    data: PropTypes.array,
};

export default ForecastTable
