import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../component/LocationList';

class LocationListContainer extends React.Component {

  componentDidMount() {
    this.props.setWeather(this.props.cities);
  }
  
  handleSelectionLocation = city => {
		this.props.setCity(city);
	}

  render() {
    return (
      <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation} />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
