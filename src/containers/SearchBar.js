import React from "react"
import {connect} from "react-redux"
import {getForecastWithCity} from "../actions"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
    getUpdateTime,
    getCityName
} from '../selectors'

const Wrapper = styled.div`
// TODO
`;

const Form = styled.form`
// TODO
`;

const Input = styled.input`
// TODO
`;

const SearchButton = styled.button`
// TODO
`;

let SearchBar = ({ dispatch, last_updated, city }) => {
    let input;

    return (
        <Wrapper>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(getForecastWithCity(input.value, last_updated, city));
                    input.value = "";
                }}
            >
                <Input
                    ref={node => {
                        input = node;
                    }}
                />
                <SearchButton type="submit">Search</SearchButton>
            </Form>
        </Wrapper>
    );
};

SearchButton.propTypes = {
    last_updated: PropTypes.number,
    city: PropTypes.string,
    dispatch: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        last_updated: getUpdateTime(state),
        city: getCityName(state)
    }
}

export default connect(mapStateToProps)(SearchBar);
