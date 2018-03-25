import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CircularProgress } from 'material-ui/Progress';
import TransformWeather from '../../services/TransformWeather';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { KEY } from '../../constants/Weathers';
import './styles.css';
import 'material-ui/styles';

const url = 'http://api.openweathermap.org/data/2.5/weather';


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
		const api_weather = `${url}?id=${idCity}&appid=${KEY}`;

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
			<div className='weatherLocationCont'>
				<Card>
					<CardContent>
						<div onClick={onWeatherLocationClick} >
							{ city ? <Location city={city}/> : null }
							{ data ? <WeatherData data={data} /> 
								: <CircularProgress className='progress' size={70}/>}
						</div>		
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