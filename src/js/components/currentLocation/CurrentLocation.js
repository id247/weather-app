import React from 'react';
import { connect } from 'react-redux';

//import * as asyncActions from '../../actions/async';
//import * as pageActions from '../../actions/page';

class CurrentLocation extends React.Component {

	render(){
		const { props } = this;

		if (!props.currentLocation){
			return null;
		}

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + 'weather-info'}>

				<h3 className="weather-info__title">
					{props.currentLocation.name}
				</h3>

				<ul className="weather-info__list">

					<li className="weather-info__item">

						Температура: {props.currentLocation.main.temp} C&deg;

					</li>

					<li className="weather-info__item">

						Давление: {props.currentLocation.main.pressure} мм рт. ст.

					</li>

					<li className="weather-info__item">

						Влажность: {props.currentLocation.main.humidity}%

					</li>

				</ul>
				
				
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	currentLocation: state.currentLocation,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	//logout: () => dispatch(asyncActions.logout()), 
});

CurrentLocation.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
