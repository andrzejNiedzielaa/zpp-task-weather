import {
    FETCH_FORECAST_FAILURE,
    FETCH_FORECAST_REQUEST,
    FETCH_FORECAST_SUCCESS,
    FORECAST_EXPIRATION_TIME,
    SHOW_DAILY_FORECAST,
    SHOW_HOURLY_FORECAST
} from "../actions";
import {Map, List} from "immutable";

export default function forecast(
    state = Map({
        isFetching: false,
        isDaily: false,
        list: List(),
        city: Map(),
        update_date: FORECAST_EXPIRATION_TIME+1
    }),
    action)
{
    switch (action.type) {
        case FETCH_FORECAST_REQUEST:
            return state.setIn(['isFetching'], true);

        case FETCH_FORECAST_SUCCESS:
            return  state.merge(
                Map({
                    isFetching: false,
                    isDaily: false,
                    list: action.forecast.get('list'),
                    city: action.forecast.get('city'),
                    update_date: action.date
                })
            );
        case FETCH_FORECAST_FAILURE:
            return state.setIn(['isFetching'], false);
        case SHOW_DAILY_FORECAST:
            return state.setIn(['isDaily'], true);
        case SHOW_HOURLY_FORECAST:
            return state.setIn(['isDaily'], false);
        default:
            return state;
    }
}
