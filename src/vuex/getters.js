import { mapDetails as mapDetails } from './utils/details.js'
import { mapAndReduce as mapAndReduce } from './utils/details.js'

const getters = {
    currentWeather: state => {
        return state.weather.current;
    },
    forecast: state => {
        return state.weather.forecast;
    },
    location: state => {
        return state.weather.location;
    },
    latitude: state => {
        return state.coords.latitude;
    },
    longitude: state => {
        return state.coords.longitude;
    },
    status: state => {
        return state.status;
    },
    activeDay: state => {
        return state.activeDay;
    },
    theme: state => {
        return state.theme;
    },
    units: state => {
        return state.units;
    },
    language: state => {
        return state.language;
    },
    lang: state => {
        return state.lang;
    },
    currentTemp: state => {
        if(state.units === "imperial"){
            return{
                avg: state.weather.current.temp_f + "\xB0F",
                min: state.weather.forecast.forecastday[0].day.mintemp_f + "\xB0F",
                max: state.weather.forecast.forecastday[0].day.maxtemp_f + "\xB0F"
            }
        }
        else{
            return{
                avg: state.weather.current.temp_c + "\xB0C",
                min: state.weather.forecast.forecastday[0].day.mintemp_c + "\xB0C",
                max: state.weather.forecast.forecastday[0].day.maxtemp_c + "\xB0C"
            }   
        }
    },
    
    dashDetails: state => {
        if(state.units === "imperial"){
            return{
                humidity: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'avghumidity', 
                    '%'),
                uv: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'uv', 
                    ''),
                temperature: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'avgtemp_f', 
                    '\xB0F'),             
                precipation: mapDetails(
                    state.weather.forecast.forecastday,
                    'day',
                    'totalprecip_in',
                    ' in'
                ),
                pressure: mapAndReduce(
                    state.weather.forecast.forecastday,
                    'hour',
                    'pressure_in',
                    ' in',
                    0
                ),
                wind: mapDetails(
                    state.weather.forecast.forecastday,
                    'day',
                    'maxwind_mph',
                    ' MPH'
                )
            }
        }
        else{
            return{
                humidity: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'avghumidity', 
                    '%'),
                uv: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'uv', 
                    ''),
                temperature: mapDetails(
                    state.weather.forecast.forecastday, 
                    'day',
                    'avgtemp_c', 
                    '\xB0C'),             
                precipation: mapDetails(
                    state.weather.forecast.forecastday,
                    'day',
                    'totalprecip_mm',
                    ' in'
                ),
                pressure: mapAndReduce(
                    state.weather.forecast.forecastday,
                    'hour',
                    'pressure_mb',
                    ' hPa',
                    0
                ),
                wind: mapDetails(
                    state.weather.forecast.forecastday,
                    'day',
                    'maxwind_kph',
                    ' KPH'
                )
            }
        }
    }
};
export default getters;
