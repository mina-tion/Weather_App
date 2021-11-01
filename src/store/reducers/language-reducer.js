export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

const defaultState = {
    currentLanguage: 'en',
    languages: ['en', 'ua', 'he']

}
  
export const languageReducer = (state = defaultState, action) => {

    switch(action.type) {

        case CHANGE_LANGUAGE:
            return {...state, currentLanguage: action.payload}
            
        default: 
            return state
    }
}

export const changeLanguageAction = (payload) => ({type: CHANGE_LANGUAGE, payload})
