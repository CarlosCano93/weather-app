import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });
//const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);