import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import ForecastItem from './ForecastItem';
import { LinearProgress  } from 'material-ui/Progress';	
import './styles.css';

const renderForecastItemDays = (forecastData) => (
	forecastData.map(forecast => (
		 <ForecastItem weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data} key={`${forecast.city}${forecast.weekDay}${forecast.hour}`} /> 
	))
);

const ForecastExtended = ({ forecastData }) => (
	<div className='forecastExtendedCont'>
		<Card>
			<CardContent>
				<Typography variant='headline' gutterBottom align='center'>Pronóstico extendido</Typography>
				{ forecastData ? renderForecastItemDays(forecastData) : <LinearProgress />}
			</CardContent>
		</Card>
	</div>
);

ForecastExtended.propTypes = {
	forecastData: PropTypes.array
}

export default ForecastExtended;