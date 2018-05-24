import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from '../reducers'
import ForecastExtended from '../component/ForecastExtended';

class ForecastExtendedContainer extends React.Component {
  render() {
    const { city, forecastData } = this.props;

    return (
      city &&
      <ForecastExtended city={city} forecastData={forecastData} />
    );
  }
}

ForecastExtendedContainer.propTypes = { 
  city: PropTypes.number,
  forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });
//const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);