import makeAutoObservable from 'mobx'
import { getStringDay, getCurrentDt, getStringMonth } from './../modules/DateProcessing'
import { calcFahr, calcCelsius } from '../../modules/TempCalculate'

class WeatherCard { 

    inputCityValue = ''
    searchError = false
    weatherCards = []

    constructor() {
        makeAutoObservable(this)
    }

    changeInputCityValue(city) { 
        this.inputCityValue = city
    }

    addWeatherCard(card) { 
        this.weatherCards = [card, ...this.weatherCards.filter(item => item.id !== card.id)] 
    }

    deleteWeatherCard(cardId) { 
        this.weatherCards = this.weatherCards.filter((item, index)=>(index!==cardId))
    }

    setSearchError(isErr) {
        this.searchError = isErr
    }


    getWeatherInfo({city, longitude, latitude}) { 
        const API_KEY = '3eb32e30f8ecd0037a2df3af8c10ca2f'
        let url = null

        city 
        ? url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        : url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`


        fetch(url)
        .then(res => { return res.json() })
        .then(data => {

            let wStatus
            calcCelsius(data.main.temp) < 0 ? wStatus ='cold': wStatus ='warm'

            
            const fullDT = getCurrentDt(data.timezone)
            return  { 

                id: data.id,

                locate: {
                    city: data.name,
                    country: data.sys.country,
                },
            
                dateTime: {
                    day: getStringDay(fullDT.getDay()),
                    date: fullDT.getDate(),
                    month: getStringMonth(fullDT.getMonth()),
                    hours: fullDT.getHours(),
                    minutes: fullDT.getMinutes(),
                },

                weather: {
                    icon: data.weather[0].icon,
                    condition: data.weather[0].main,
                },

                temp: { 
                    C: calcCelsius(data.main.temp),
                    F: calcFahr(data.main.temp) 
                },

                feelsLike: { 
                    C: calcCelsius(data.main.feels_like),
                    F: calcFahr(data.main.feels_like) 
                },
                
                otherInfo: {
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    pressure: data.main.pressure,
                },

                status: wStatus
                
            }
        }
        ).then(obj => {
            this.addWeatherInfo(obj)
            this.setSearchError(false)
        })
        .catch(e => {
            console.log('reject')
            console.log(e)
            this.setSearchError(true)})  

        }


}
  
export default new WeatherCard()