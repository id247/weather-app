import React from 'react';

import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

class AddCity extends React.Component {

	_submit(form){

		if (form.elements.city.value === ''){
			return;
		}

		this.props.addCity(form.elements.city.value);
	}

	_submitHandler = () => (e) => {
		e.preventDefault();

		this._submit(e.target);
	}

	render(){
		const { props } = this;

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + 'add-city'}>

				<form action="#" className="add-city__form"
					onSubmit={this._submitHandler()}
				>

					<div className="add-city__input-placeholder">

						<Input 
							name="city"
						/>

					</div>

					<div className="add-city__button-placeholder">

						<Button 
							type="submit"
							size="m"
							color="blue"
						>
							Добавить
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
