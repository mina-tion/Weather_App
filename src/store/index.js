import { createStore, combineReducers, applyMiddleware } from "redux";
import { weatherReducer } from "./reducers/weather-reducer"
import { languageReducer } from "./reducers/language-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    weather: weatherReducer, 
    languages: languageReducer
})

const persistedState = localStorage.getItem('reduxState') 
                    ? JSON.parse(localStorage.getItem('reduxState'))
                    : {}

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

localStorage.clear()
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

