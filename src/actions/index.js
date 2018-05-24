import TransformForecast from '../services/TransformForecast';
import TransformWeather from '../services/TransformWeather';
import { KEY, URL_FORECAST, URL_WEATHER } from '../constants/Weathers';

export const SET_CITY = 'setCity';
export const SET_FORECAST_DATA = 'setForecastData';

const setCity = payload => ({type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload });

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
    const { idCity } = this.state; 
    const api_weather = `${URL_WEATHER}?id=${idCity}&appid=${KEY}`;

    fetch(api_weather).then( response => {
    return response.json();
    }).then( responseJson => {
      const data = TransformWeather(responseJson);
      this.setState({ 
        city: responseJson.name,
        data });
    });
  }
}