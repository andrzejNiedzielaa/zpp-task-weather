import React from "react";
import styled from 'styled-components'

import {
    GeoLocButton,
    GeoLocWithDelayButton
} from "../containers/buttons/GeoLocButtons";

const Wrapper = styled.div`

`;

let Geolocation = () => {
    return (
        <Wrapper>
            <GeoLocButton>
                Search with geolocation
            </GeoLocButton>
            <GeoLocWithDelayButton>
                Search with delayed geolocation
            </GeoLocWithDelayButton>
        </Wrapper>
    );
};

export default Geolocation;
