import React from 'react';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

class AddCity extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			city: '',
		};
	}

	_submit(){
		const { props, state } = this;

		if (state.city === ''){
			return;
		}

		props.addCity(state.city);

		this.setState({
			...state,
			...{
				city: '',
			}
		});
	}

	_inputChange(city){
		const { state } = this;

		this.setState({
			...state,
			...{
				city: city,
			}
		});
	}

	_submitHandler = () => (e) => {
		e.preventDefault();

		this._submit();
	}

	_inputChangeHandler = () => (e) => {

		this._inputChange(e.target.value);
	}

	render(){
		const { props, state } = this;

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + ' add-city'}>

				<h3 className="add-city__title">
					Add a new city
				</h3>

				<form action="#" className="add-city__form"
					onSubmit={this._submitHandler()}
				>

					<div className="add-city__input-placeholder">

						<Input 
							mixClass="add-city__input"
							value={state.city}
							name="city"
							placeholder="City name"
							onChangeHandler={this._inputChangeHandler()}
						/>

					</div>

					<div className="add-city__button-placeholder">

						<Button 
							mixClass="add-city__button"
							type="submit"
							size="m"
							color="blue"
						>
							Add
						</Button>

					</div>

				</form>
								
			</div>
		);
	}
}

AddCity.propTypes = {
	mixClass: React.PropTypes.string,
	addCity: React.PropTypes.func.isRequired,
};

export default AddCity;
