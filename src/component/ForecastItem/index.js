import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';



class ForecastItem extends Component {


	render() {
		const { weekDay, hour, data }= this.props;

		return (
			<div>
				<h2>{weekDay} - {hour}:00</h2> 
				<WeatherData data={data} /> 
			</div>
			);
	}
}

ForecastItem.propTypes = {
	weekDay : PropTypes.string.isRequired,
	hour : PropTypes.number.isRequired,
	data : PropTypes.shape({
		temp: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired  
	})
}

export default ForecastItem;