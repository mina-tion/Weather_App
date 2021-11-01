import './WeatherProps.css'

export const WeatherProps = ({otherInfo, weatherState}) => { 


    return ( 
        <div className='weather-prop-block'>
            <div className='prop-el'>
                <div className="prop">Wind: </div>
                <div className={`value ${weatherState}`}>{`${otherInfo.wind}m/s`}</div>
            </div>
            <div className='prop-el'>
                <div className='prop'>Humidity: </div>
                <div className={`value ${weatherState}`}>{`${otherInfo.humidity}%`}</div>
            </div>
            <div className='prop-el'>
                <div className='prop'>Pressure: </div>
                <div className={`value ${weatherState}`}>{`${otherInfo.pressure}Pa`}</div>
            </div>
        </div>
    )
}