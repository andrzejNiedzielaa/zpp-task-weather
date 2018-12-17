import { connect } from "react-redux";
import Forecast from "../components/Forecast"
import {
    getUpdateTime,
    getFilteredWeatherList,
    getFetchingStatus,
    getCity
} from "../selectors";
import { toJS } from "../helpers/to-js";

const mapStateToProps = state => ({
    weatherList: getFilteredWeatherList(state),
    isFetching: getFetchingStatus(state),
    city: getCity(state),
    last_updated: getUpdateTime(state)
});

export default connect(mapStateToProps)(toJS(Forecast))
