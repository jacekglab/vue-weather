/*global fetch*/
import * as apixu from './../api/apixu';

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_STATUS = "SET_STATUS";
export const FETCH_COORDS = "FETCH_COORDS";

const actions = {
	FETCH_WEATHER ({ commit }, location) {
		return new Promise((resolve, reject) => {
			fetch(apixu.get(location))
			.then(resonse => resonse.json())
			.then(weather => {
				commit('SET_WEATHER', weather);
				resolve();
			})
			.catch(error => console.error(error));
		},
		(err => {
			console.error(err.message);
		}));
	},

	SET_STATUS ({ commit }, status) {
		return new Promise((resolve, reject) => {
			commit('SET_STATUS', status);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},

	SET_ACTIVE_DAY ({ commit }, day) {
		return new Promise((resolve, reject) => {
			commit('SET_ACTIVE_DAY', day);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},

	SET_THEME ({ commit }, theme) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("theme", theme);
			commit('SET_THEME', theme);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},

	SET_UNITS ({ commit }, units) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("units", units);
			commit('SET_UNITS', units);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},

	SET_LANGUAGE ({ commit }, language) {
		return new Promise((resolve, reject) => {
			window.localStorage.setItem("language", language);
			commit('SET_LANGUAGE', language);
			commit('SET_LANG', language);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},

	/*SET_LANG ({ commit }, language) {
		return new Promise((resolve, reject) => {
			commit('SET_LANGUAGE', store.getters.language);
	        resolve();
		},
		(err => {
			console.error(err.message);
		}));
	},*/

	FETCH_COORDS ({ commit }) {
		return new Promise((resolve, reject) => {
			window.navigator.geolocation.getCurrentPosition((position => {
				commit('SET_COORDS', {
					latitude: position.coords.latitude,
	            	longitude: position.coords.longitude
	           	});
	           	resolve();
			}),
			(err => {
				console.error(err.message);
			}));
		});
	}
};

export default actions;