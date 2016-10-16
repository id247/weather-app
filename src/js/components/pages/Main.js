import React from 'react';
import { connect } from 'react-redux';

import CurrentLocation from '../../components/currentLocation/CurrentLocation';

//import * as asyncActions from '../../actions/async';
//import * as pageActions from '../../actions/page';

class Main extends React.Component {

	render(){
		const { props } = this;

		return(
			<div className="section__wrap app__wrap">
				<CurrentLocation mixClass="" />
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	//currentLocation: state.currentLocation,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	//logout: () => dispatch(asyncActions.logout()), 
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
