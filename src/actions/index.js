import TransformForecast from '../services/TransformForecast';
import { KEY, URL_FORECAST } from '../constants/Weathers';

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