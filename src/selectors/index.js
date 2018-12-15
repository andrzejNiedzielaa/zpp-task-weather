import {createSelector} from 'reselect'

function getCity(state) {
    return state.city;
}

function getWeatherList(state) {
    return state.list;
}

function getFetchingStatus(state) {
    return state.isFetching;
}

function getUpdateTime(state) {
    return state.update_date;
}

function getCityName(state) {
    return state.city.name;
}

function isTempNice(temp) {
    return temp >= 14 && temp <= 25;
}

const getTempList = createSelector([getWeatherList], (list) =>
    list.map(interval => interval.main.temp));

const noSnowOrRain = createSelector([getWeatherList], (list) =>
    list
    .filter(interval =>
        interval.weather[0].description.match(/rain|snow/)
    ).length === 0
);

const getAverageTemperature = createSelector([getTempList], (list) =>
    list.reduce((acc, curr) =>  acc + curr, 0) / list.length
);


const areTemperaturesNice = createSelector([getTempList], (list) =>
    list.reduce((acc, curr) => acc && isTempNice(curr), true)
);

const getWeatherCondition =
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

export {
    getCity,
    getUpdateTime,
    getWeatherList,
    getFetchingStatus,
    getCityName,
    getWeatherCondition
}
