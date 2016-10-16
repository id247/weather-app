import React from 'react';

class WeatherInfo extends React.Component {

	render(){
		const { props } = this;

		if (!props.placeInfo.name){
			return null;
		}

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + 'weather-info'}>

				<h3 className="weather-info__title">
					{
						props.placeInfo.labelCityName 
						? props.placeInfo.labelCityName 
						: props.placeInfo.name
					}
				</h3>

				<ul className="weather-info__list">

					<li className="weather-info__item">

						Температура: {props.placeInfo.main.temp} C&deg;

					</li>

					<li className="weather-info__item">

						Давление: {props.placeInfo.main.pressure} мм рт. ст.

					</li>

					<li className="weather-info__item">

						Влажность: {props.placeInfo.main.humidity}%

					</li>

				</ul>
				
				
			</div>
		);
	}
}

WeatherInfo.propTypes = {
	mixClass: React.PropTypes.string,
	placeInfo: React.PropTypes.object.isRequired,
};

export default WeatherInfo;
