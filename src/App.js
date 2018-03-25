import React, { Component } from 'react';
import LocationList from './component/LocationList';
import ForecastExtended from './component/ForecastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
//import 'material-ui/styles';
import './App.css';

const cities = [3107418, 3128760, 3117735, 6361046];

class App extends Component {

	handleSelectionLocation = city => {
		console.log(`handleSelectionLocation ${city}` );
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<AppBar position="static" color="default">
							<Toolbar>
								<Typography variant="title">Weather App</Typography>
							</Toolbar>
						</AppBar>
					</Col>
				</Row>
				<Row>
					<Col xs={12} lg={6}>
						<a href='#detail'><LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} /></a>
					</Col>
					<Col xs={12} lg={6}>
						<Paper elevation={10} id='detail'>
							<div className='detail'>
								<ForecastExtended city={3107418} />
							</div>
						</Paper>
					</Col>
				</Row>
				
			</Grid>
		);
	}
}

export default App;
