import {createSelector} from 'reselect'

export function getCity(state) {
    return state.get('city');
}

export function getWeatherList(state) {
    // TODO - filtering depending on isDaily
    return state.get('list');
}

export function getFetchingStatus(state) {
    return state.get('isFetching');
}

export function getUpdateTime(state) {
    return state.get('update_date');
}

export function getCityName(state) {
    return state.getIn(['city', 'name']);
}

export function isForecastDaily(state) {
    return state.get('isDaily');
}

function isTempNice(temp) {
    return temp >= 14 && temp <= 25;
}

export const getFilteredWeatherList = createSelector(
    [getWeatherList, isForecastDaily],
    (list, isDaily) =>
        isDaily
            ? list.filter(interval => interval.get('dt_txt').match(/15:00:00/))
            : list
);

const getTempList = createSelector(
    [getFilteredWeatherList],
    (list) =>
        list.map(interval => interval.getIn(['main', 'temp'])));

const noSnowOrRain = createSelector(
    [getFilteredWeatherList],
    (list) =>
        list
            .filter(interval =>
                interval.getIn(['weather', 0, 'description']).match(/rain|snow/)
            )
            .size === 0
);

const getAverageTemperature = createSelector(
    [getTempList],
    (list) =>
        list.reduce((acc, curr) => acc + curr, 0) / list.size
);


const areTemperaturesNice = createSelector(
    [getTempList],
    (list) =>
        list.reduce((acc, curr) => acc && isTempNice(curr), true)
);

export const getWeatherCondition =
    createSelector(
        [noSnowOrRain, getAverageTemperature, areTemperaturesNice],
        (nasty_fall, avg_temp, nice_temps) => {
            let nice_count =
                Number(nasty_fall)
                + Number(avg_temp)
                + Number(nice_temps);
            switch (nice_count) {
                case 3:
                    return "Very nice";
                case 2:
                    return "Nice";
                default:
                    return "Not nice";
            }
        }
    );

