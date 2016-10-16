import React from 'react';

import Button from '../../components/common/Button';

import WeatherInfo 	from '../../components/weatherInfo/WeatherInfo';

class CitiesList extends React.Component {

	_deleteCity(index){
		this.props.deleteCity(index);
	}

	_deleteCityHandler = (index) => (e) => {
		e.preventDefault();

		this._deleteCity(index);
	}

	render(){
		const { props } = this;

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + 'cities-list'}>

				<ul className="cities-list__list">
				
				{props.citiesList.map( (city, i) => (

					<li className="cities-list__item" key={i + '-' + city.id}>
						
						<Button 
							type="button"
							size="m"
							color="blue"
							onClickHandler={this._deleteCityHandler(i)}
						>
							Удалить {i}
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
