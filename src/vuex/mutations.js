import {getTranslation as getTranslation} from './utils/lang/lang.js'

const mutations = {
    SET_WEATHER: (state, data) => {
        state.weather = data;
    },
    SET_COORDS: (state, data) => {
        state.coords = data;
    },
    SET_STATUS: (state, status) => {
        state.status = status;
    },
    SET_ACTIVE_DAY: (state, day) => {
        state.activeDay = day;
    },
    SET_THEME: (state, theme) => {
        state.theme = theme;
    },
    SET_UNITS: (state, units) => {
        state.units = units;
    },
    SET_LANGUAGE: (state, language) => {
        state.language = language;
    },
    SET_LANG: (state, language) => {
        state.lang = getTranslation(language);
    }
};

export default mutations;