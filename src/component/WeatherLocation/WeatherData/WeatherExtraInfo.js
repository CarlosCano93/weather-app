import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind}) => (
	<div className='weatherExtraInfoCont'>
		<span className='weatherExtraInfoText'>Humedad: {humidity}%  </span>
		<span className='weatherExtraInfoText'>Viento: {wind}m/s</span>
	</div>
);

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;