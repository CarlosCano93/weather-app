import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({ cities, onSelectedLocation }) => {
	
	const handleWeatherLocationClick = city => {
		onSelectedLocation(city);
	};


	const strToComponent = cities => (
		cities.map(city => (
			<WeatherLocation key={city.key} city={city.id} onWeatherLocationClick={() => handleWeatherLocationClick(city.id)} data={city.data} />
		))
	);

	return (<div className='locationListCont'>
		{strToComponent(cities)}
	</div>);
};

LocationList.propTypes = {
	cities : PropTypes.array.isRequired,
	onSelectedLocation : PropTypes.func.isRequired
}

export default LocationList;