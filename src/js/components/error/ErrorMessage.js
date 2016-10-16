import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = (props) => {
	
	if (!props.error){
		return null;
	}

	return (
		<div className={( (props.mixClass ? props.mixClass : '') + ' error-message')}>

			<div className="error-message__text">
				{props.error}
			</div>

		</div>
	)
};

ErrorMessage.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	error: state.error,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
