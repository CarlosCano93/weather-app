import React from 'react';
import { LinearProgress  } from 'material-ui/Progress';	
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import 'material-ui/styles';


const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (

	<div className='weatherLocationCont' onClick={onWeatherLocationClick}>
		<Card className='weatherLocationCard'>
			<CardContent>
				{city && data ?
					<div>
						<Location city={city}/>
						<WeatherData data={data} /> 	
					</div>
					: <LinearProgress/>
				}
			</CardContent>
		</Card>
	</div>
);

WeatherLocation.propTypes = {
	idCity : PropTypes.number.isRequired,
	onWeatherLocationClick : PropTypes.func.isRequired,
	data : PropTypes.shape({
		temp: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired  
})
}

export default WeatherLocation;