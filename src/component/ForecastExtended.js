import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import ForecastItem from './ForecastItem';
import { KEY, URL_FORECAST } from '../constants/Weathers';
import TransformForecast from '../services/TransformForecast';
import { LinearProgress  } from 'material-ui/Progress';	
import './styles.css';

class ForecastExtended extends Component {

	constructor() {
		super();
		this.state = {forecastData: null}
	}

	componentDidMount() {
		this.updateCity(this.props.city); 
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.city !== this.props.city) {
			this.updateCity(this.props.city);
		}
	}

	updateCity = city => {
		this.setState({ forecastData: null })
		const api_forecast = `${URL_FORECAST}?id=${city}&appid=${KEY}`;

		fetch(api_forecast).then(
			response => ( response.json() )
		).then( responseJson => {
			const forecastData = TransformForecast(responseJson);
			this.setState({ 
				forecastData	
			});
		});
	}

	renderForecastItemDays (forecastData) {
		return forecastData.map(forecast => ( //FIXME los objetos no tienen map (solo array)
		 	<ForecastItem weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={`${forecast.city}${forecast.weekDay}${forecast.hour}`} /> 
		))
	}

	render() {
		const { forecastData } = this.state;

		return (
			<div className='forecastExtendedCont'>
				<Card>
					<CardContent>
						<Typography variant='headline' gutterBottom align='center'>Pronóstico extendido</Typography>
						{ forecastData ? this.renderForecastItemDays(forecastData) : <LinearProgress />}
					</CardContent>
				</Card>
			</div>
		);
	}
}

ForecastExtended.propTypes = {
	weekDay : PropTypes.string.isRequired,
	hour : PropTypes.number.isRequired,
	data : PropTypes.shape({
		temp: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired  
	})
}

export default ForecastExtended;