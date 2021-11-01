export const CHANGE_INPUT_CITY_VALUE = 'CHANGE_INPUT_CITY_VALUE'
export const ADD_WEATHER_INFO = 'ADD_WEATHER_BLOCK'
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR'
export const DELETE_WEATHER_CARD = 'DELETE_WEATHER_CARD'


const defaultState = {
    inputCityValue: '',
    searchError: false,
    weatherCards: [],
}
  
  
export const weatherReducer = (state = defaultState, action) => {
   
    switch(action.type) {
        case CHANGE_INPUT_CITY_VALUE:
            return {...state, inputCityValue: action.payload }
        case ADD_WEATHER_INFO:
                return {...state, weatherCards: [action.payload, ...state.weatherCards.filter(item => item.id !== action.payload.id)] } 
        case SET_SEARCH_ERROR: 
            return {...state, searchError: action.payload}
        case DELETE_WEATHER_CARD: 
            return {...state, weatherCards: state.weatherCards.filter((item, index)=>(index!==action.payload))} 
    
        default: 
            return state
    }
}

export const setSearchError = (payload) => ({type: SET_SEARCH_ERROR, payload})
export const changeInputCityValue = (payload) => ({type: CHANGE_INPUT_CITY_VALUE, payload})
export const addWeatherInfo = (payload) => ({type: ADD_WEATHER_INFO, payload})
export const deleteWeatherCard = (payload) => ({type: DELETE_WEATHER_CARD, payload})