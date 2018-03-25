import React from 'react';
import PropTypes from 'prop-types';
import ReactAnimatedWeather from 'react-animated-weather';
import { WEATHER_DEFAULTS, CLEAR_DAY, CLEAR_NIGHT, PARTLY_CLOUDY_DAY, PARTLY_CLOUDY_NIGHT, 
		CLOUDY, RAIN, SLEET, SNOW, WIND, FOG } from '../../../constants/Weathers';
import './styles.css';



const WeatherTemperature = ({ temp, weatherState}) => (
	<div className='weatherTemperatureCont'>
		<ReactAnimatedWeather icon={weatherState} color={WEATHER_DEFAULTS.color} size={WEATHER_DEFAULTS.size} animate={WEATHER_DEFAULTS.animate} />
		<span className='temperature'>{`${temp} c°`}</span>
	</div>
);

WeatherTemperature.propTypes = {
	temp: PropTypes.number.isRequired,
	weatherState: PropTypes.oneOf([ CLEAR_DAY,
		CLEAR_NIGHT,
		PARTLY_CLOUDY_DAY,
		PARTLY_CLOUDY_NIGHT,
		CLOUDY,
		RAIN,
		SLEET,
		SNOW,
		WIND,
		FOG]).isRequired,
	animate: PropTypes.bool,
	size: PropTypes.number,
	color: PropTypes.string
}

export default WeatherTemperature;