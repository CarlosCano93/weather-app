import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherData = ({ data }) => {
	const { temp, humidity, wind, weatherState } = data;
	return (
		<div className='weatherDataCont'>
			<WeatherTemperature temp={temp} weatherState={weatherState}/>
			<WeatherExtraInfo wind={wind} humidity={humidity}/>
		</div>);
};

WeatherData.propTypes = {
	data : PropTypes.shape({
		temp: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired  
	})
}

export default WeatherData;