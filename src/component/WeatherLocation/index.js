import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { LinearProgress  } from 'material-ui/Progress';	
import TransformWeather from '../../services/TransformWeather';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { KEY, URL_WEATHER } from '../../constants/Weathers';
import './styles.css';
import 'material-ui/styles';



class WeatherLocation extends Component { 

	constructor({ idCity }) {
		super();
		this.state = { 
			idCity,
			city: null,
			data: null
		};
	}

	componentWillMount() {
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

	render = () => {
		const { onWeatherLocationClick } = this.props;
		const { city, data } = this.state;
		return (
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
	};
}

WeatherLocation.propTypes = {
	idCity : PropTypes.number.isRequired,
	onWeatherLocationClick : PropTypes.func.isRequired
}

export default WeatherLocation;