import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../component/ForecastExtended';

class ForecastExtendedContainer extends React.Component {

  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city} />
    );
  }

}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.number,
};

const mapStateToProps = ({ city }) => ({ city });
//const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);