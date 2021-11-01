import { TemperatueBlock } from './TemperatureBlock/Temperature'
import { WeatherProps } from './WeatherProps/WeatherProps'
import './WeatherBlock.css'

export const WeatherBlock = ({temp, feelsLike, otherInfo, weatherState}) => {
    return(
        <div className='weather-block'>   
            <TemperatueBlock temp={temp} feelsLike={feelsLike}/>
            <WeatherProps otherInfo={otherInfo} weatherState={weatherState}/>
        </div>
    )
}