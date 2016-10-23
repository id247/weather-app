import React from 'react';
import { connect } from 'react-redux';

import WeatherInfo 	from '../../components/weatherInfo/WeatherInfo';
import AddCity 		from '../../components/cities/AddCity';
import CitiesList 	from '../../components/cities/CitiesList';

import * as asyncActions from '../../actions/async';
import * as citiesActions from '../../actions/cities';

class Main extends React.Component {

	render(){
		const { props } = this;

		return(
			<div className="app__page">
				
				<WeatherInfo 
					mixClass="app__block app-block"
					placeInfo={props.currentLocation}  
				/>
				
				<AddCity 
					mixClass="app__block app-block" 
					addCity={props.addCity}
				/>
				
				<CitiesList 
					mixClass="app__block app-block" 
					citiesList={props.cities.list}
					deleteCity={props.deleteCity}
				/>

			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	currentLocation: state.currentLocation,
	cities: state.cities,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	addCity: (cityName) => dispatch(asyncActions.addCity(cityName)), 
	deleteCity: (cityId) => dispatch(citiesActions.deleteCity(cityId)), 
});

Main.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
