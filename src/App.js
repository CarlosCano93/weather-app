import React, { Component } from 'react';
import LocationList from './component/LocationList';
import ForecastExtended from './component/ForecastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CssBaseline from 'material-ui/CssBaseline';
//import 'material-ui/styles';
import './App.css';

const cities = [3107418, 3128760, 3117735, 6361046];

class App extends Component {

	constructor () {
		super();
		this.state = { city: null }
	}

	handleSelectionLocation = city => {
		this.setState({ city });
	}

	render() {
		const { city } = this.state;

		return (
			<div>
				<CssBaseline />
				<Grid /*fluid*/>
					<Row>
						<Col xs={12} lg={6}>
							<a href='#detail'><LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} /></a>
						</Col>
						<Col xs={12} lg={6}>
								{ city && <ForecastExtended city={ city } /> }
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
