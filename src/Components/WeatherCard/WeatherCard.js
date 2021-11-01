import './WeatherCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { Chart } from '../Chart/Chart';
import { useState } from 'react';
import { Header } from './HeaderWeatherCard/Header'
import { WeatherBlock } from './WeatherBlock/WeatherBlock'
import { deleteWeatherCard } from '../../store/reducers/weather-reducer';

export const WeatherCard = () => {

    const dispatch = useDispatch()
    const weatherInfoArray = useSelector(state => state.weather.weatherCards)
    
    let weatherCard = null

    const closeCard = (index) => {
        dispatch(deleteWeatherCard(index))
    }



    if(weatherInfoArray!==[]) {

        weatherCard =  weatherInfoArray.map((weatherObj, index) =>{
    
            return <div className={`card ${weatherObj.status}`} key={index}>
                <div className='close-icon' onClick={()=>closeCard(index)}></div>
                <Header datetime={weatherObj.dateTime} locate={weatherObj.locate} weather={weatherObj.weather}/>
                
                <canvas className={`chart chart-${index}`}>
                    <Chart weatherState={weatherObj.status} className={`chart-${index}`}/>
                </canvas>

                <WeatherBlock temp={weatherObj.temp} feelsLike={weatherObj.feelsLike} otherInfo={weatherObj.otherInfo} weatherState={weatherObj.status} />
            </div>
    })
    }

    return (
        <div> { weatherCard } </div>
    );

}
