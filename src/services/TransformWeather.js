import {/* WEATHER_DEFAULTS, */CLEAR_NIGHT, CLEAR_DAY, PARTLY_CLOUDY_DAY,/* PARTLY_CLOUDY_NIGHT, */ 
		CLOUDY, RAIN /*, SLEET, SNOW, WIND, FOG */} from '../constants/Weathers';

		
const convertWeatherState = weatherState => {
	switch(weatherState) {
		case 'Clouds': 
			return CLOUDY; 
		case 'Rain':
			return RAIN; 
		case 'Clear':
			return CLEAR_DAY;
		case 'Drizzle':
			return PARTLY_CLOUDY_DAY;
		default: 
			return CLEAR_NIGHT;
	}
}

const convertToCelsius = temp => {
	return Math.round((temp-273.15)*10)/10;
}

const TransformWeather = responseJson => {
	const humidity = responseJson.main.humidity;
	const temp = convertToCelsius(responseJson.main.temp);
	const {speed} = responseJson.wind;
	const weatherState = convertWeatherState(responseJson.weather[0].main);

	const data = {
		temp,
		weatherState: weatherState,
		humidity,
		wind: speed
	}

	return data;
}

export default TransformWeather;