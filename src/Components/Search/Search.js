import './Search.css';
import {useSelector, useDispatch} from 'react-redux'
import { changeInputCityValue } from '../../store/reducers/weather-reducer'
import { getWeatherInfo } from '../../store/async actions/getWeatherInfo'

export const Search = (props) => {


    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.weather.inputCityValue)
    const isSearchError = useSelector(state => state.weather.searchError)

    const handlerOnChange = (e) => {
        dispatch(changeInputCityValue(e.target.value))
    }

    const handlerOnClick = () => {
        if (!inputValue) return
        dispatch(getWeatherInfo({city: inputValue}))
    }

    let classError = ''  

    isSearchError ? classError = 'error' : classError = ''
    
    return (
        <div className='search'>
            <div className='search-block'>
                <input className={`search-field ${classError}`} value={inputValue} onChange={(e)=>handlerOnChange(e)}></input>
                <div className='add-button' onClick={handlerOnClick}>Add</div>
            </div>
    
        </div>
    )
}