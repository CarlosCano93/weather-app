import TransformForecast from '../services/TransformForecast';
import TransformWeather from '../services/TransformWeather';
import { KEY, URL_FORECAST, URL_WEATHER } from '../constants/Weathers';

export const SET_CITY = 'setCity';
export const SET_FORECAST_DATA = 'setForecastData';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setSelectedCity = payload => {

  return dispatch => {
    const api_forecast = `${URL_FORECAST}?id=${payload}&appid=${KEY}`;

    dispatch(setCity(payload));

		return fetch(api_forecast).then(
			response => ( response.json() )
		).then( responseJson => {
      const forecastData = TransformForecast(responseJson);

      dispatch(setForecastData({ city: payload, forecastData }));
    });
    
  }

}

export const setWeather = payload => {

  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = `${URL_WEATHER}?id=${city}&appid=${KEY}`;
      fetch(api_weather).then( response => {
      return response.json();
      }).then( responseJson => {
        const data = TransformWeather(responseJson);

        dispatch(setWeatherCity(city));
      });
    });
  }
}