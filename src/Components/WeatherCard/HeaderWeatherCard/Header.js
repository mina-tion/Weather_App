
import './Header.css'

export const Header = ({datetime, locate, weather}) => {
    
    return (
        <div className='header'>
            <div>
                <div className='locate'>
                    {`${locate.city}, ${locate.country}` }
                </div>
                <div className='date-time'>{`${datetime.day}, ${datetime.date}  
                                            ${datetime.month},  ${datetime.hours}:${datetime.minutes} `}
                </div>
            </div>

            <div className='condition-block'>
                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt=''/>
                <div className='condition'>{weather.condition}</div>
            </div>
        </div>
    )
}