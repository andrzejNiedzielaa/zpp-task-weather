export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_FORECAST_REQUEST = "FETCH_FORECAST_REQUEST";
export const FETCH_FORECAST_FAILURE = "FETCH_FORECAST_FAILURE";

export const FORECAST_EXPIRATION_TIME = 10000;
const FORECAST_API_KEY = "APPID=2fb2ebf9e2f45bc55573083028b02cd7";
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?${FORECAST_API_KEY}&units=metric`;

let timer;

export function getForecastWithCity(city, last_updated, last_city) {
    return dispatch => {
        if ((last_city !== undefined && last_city.toLowerCase()) === city.toLowerCase()
            && Date.now() - last_updated < FORECAST_EXPIRATION_TIME)
                return;
        clearTimeout(timer);
        dispatch(fetchForecastRequest());
        dispatch(fetchForecast(`q=${city}`))
    };
}

export function getWeatherWithLocation() {
    return dispatch => {
        dispatch(fetchForecastRequest());
        return navigator.geolocation.getCurrentPosition(position => {
            dispatch(fetchForecast(
                `lat=${position.coords.latitude}&lon=${position.coords.longitude}`));
        });
    }
}

export function getWeatherWithLocationDelayed() {
    return dispatch => {
        timer = setTimeout(() =>
            navigator.geolocation.getCurrentPosition(position => {
                dispatch(fetchForecastRequest());
                dispatch(fetchForecast(
                    `lat=${position.coords.latitude}&lon=${position.coords.longitude}`));
        }),5000);
    }
}

export function fetchForecastRequest() {
    return {
        type: FETCH_FORECAST_REQUEST,
    };
}

export function fetchForecastSuccess(forecast) {
    return {
        type: FETCH_FORECAST_SUCCESS,
        forecast,
        date: Date.now()
    };
}

export function fetchForecastFailure(error) {
    return {
        type: FETCH_FORECAST_FAILURE,
        error
    };
}

function fetchForecast(query) {
    return dispatch => fetch(
        BASE_URL + `&${query}`
    )
        .then(response => handleErrors(response))
        .then(response => response.json())
        .then(json => {
            removeUnnecessaryKeys(json);
            dispatch(fetchForecastSuccess(json));
        })
        .catch(error => {
            dispatch(fetchForecastFailure(error));
        });
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function removeUnnecessaryKeys(json) {
    delete json.cod;
    delete json.message;
    delete json.cnt;

    delete json.city.population;

    json.list.map(obj => {
        delete obj.clouds;
        delete obj.rain;
        delete obj.snow;
        delete obj.sys;
        delete obj.wind;

        delete obj.main.grnd_level;
        delete obj.main.humidity;
        delete obj.main.pressure;
        delete obj.main.sea_level;
        delete obj.main.temp_kf;

        return obj;
    });
}
