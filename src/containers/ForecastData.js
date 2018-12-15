import { connect } from "react-redux";
import Forecast from "../components/Forecast"
import {
    getUpdateTime,
    getWeatherList,
    getFetchingStatus,
    getCity
} from "../selectors";

const mapStateToProps = state => ({
    weatherList: getWeatherList(state),
    isFetching: getFetchingStatus(state),
    city: getCity(state),
    last_updated: getUpdateTime(state)
});

export default connect(mapStateToProps)(Forecast)
