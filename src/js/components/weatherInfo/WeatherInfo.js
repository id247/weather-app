import React from 'react';

class WeatherInfo extends React.Component {

	render(){
		const { props } = this;
		const { placeInfo } = props;

		if (!placeInfo.id){
			return null;
		}

		const weather = placeInfo.weather[0];

		return(
			<div className={  (props.mixClass ? props.mixClass : '') + ' weather-info'}>

				<h3 className="weather-info__title">
					{
						placeInfo.labelCityName 
						? placeInfo.labelCityName 
						: placeInfo.name
					}
				</h3>

				<ul className="weather-info__list">

					<li className="weather-info__item">

						{weather.main} 
						{' '}
						({weather.description})
						{' '}
						<img 
							src={'http://openweathermap.org/img/w/' + weather.icon + '.png'} 
							alt="" 
							className="weather-info__icon"
						/>

					</li>

					<li className="weather-info__item">

						Temperature: {placeInfo.main.temp} C&deg;

					</li>

					<li className="weather-info__item">

						Wind speed: {placeInfo.wind.speed} m/s

					</li>

					<li className="weather-info__item">

						Pressure: {placeInfo.main.pressure} bar.

					</li>

					<li className="weather-info__item">

						Humidity: {placeInfo.main.humidity}%

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
