import React from 'react';

import Button from '../../components/common/Button';

import WeatherInfo 	from '../../components/weatherInfo/WeatherInfo';

class CitiesList extends React.Component {

	_deleteCity(cityId){
		this.props.deleteCity(cityId);
	}

	_deleteCityHandler = (cityId) => (e) => {
		e.preventDefault();

		this._deleteCity(cityId);
	}

	render(){
		const { props } = this;

		if (props.citiesList.length === 0){
			return null;
		}

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + ' cities-list'}>

				<ul className="cities-list__list">
				
				{props.citiesList.slice(0).reverse().map( (city, i) => (

					<li className="cities-list__item" key={i + '-' + city.id}>
						
						<Button 
							mixClass="cities-list__delete"
							type="button"
							size="m"
							color="blue"
							onClickHandler={this._deleteCityHandler(city.id)}
						>
							&times; Delete
						</Button>

						<WeatherInfo 
							mixClass=""
							placeInfo={city}  
						/>

					</li>

				))}

				</ul>
								
			</div>
		);
	}
}

CitiesList.propTypes = {
	mixClass: React.PropTypes.string,
	citiesList: React.PropTypes.array.isRequired,
	deleteCity: React.PropTypes.func.isRequired,
};

export default CitiesList;
