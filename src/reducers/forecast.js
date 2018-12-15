import {
    FETCH_FORECAST_FAILURE,
    FETCH_FORECAST_REQUEST,
    FETCH_FORECAST_SUCCESS,
    FORECAST_EXPIRATION_TIME
} from "../actions";


export default function forecast(
    state = {
        isFetching: false,
        list: [],
        city: {},
        update_date: FORECAST_EXPIRATION_TIME+1,
    },
    action)
{
    switch (action.type) {
        case FETCH_FORECAST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_FORECAST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.forecast.list,
                city: action.forecast.city,
                update_date: action.date,
            };
        case FETCH_FORECAST_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}
