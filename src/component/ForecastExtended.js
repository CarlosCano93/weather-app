import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {


	render() {

		const { city } = this.props;

		return (
			<div> {city}</div>
		);
	}
}


ForecastExtended.ForecastExtended = {
	city : PropTypes.number.isRequired
}

export default ForecastExtended;