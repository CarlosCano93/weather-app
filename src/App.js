import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CssBaseline from 'material-ui/CssBaseline';
import LocationListContainer from './container/LocationListContainer';
import ForecastExtendedContainer from './container/ForecastExtendedContainer';
import './App.css';

//Tudela, Barcelona, Madrid, Sevilla
const cities = [3107418, 3128760, 3117735, 6361046];

class App extends Component {

	render() {

		return (
			<div>
				<CssBaseline />
				<Grid /*fluid*/>
					<Row>
						<Col xs={12} lg={6}>
							<LocationListContainer cities={cities} />
						</Col>
						<Col xs={12} lg={6}>
								<ForecastExtendedContainer> </ForecastExtendedContainer>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;