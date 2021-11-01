import './LanguageSettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguageAction } from '../../store/reducers/language-reducer'
import { useState } from 'react'



export const LanguageSettings = (props) => {
    
    const dispatch = useDispatch()

    const [showList, setShowList] = useState(false)

    const currentLanguage =  useSelector(state => state.languages.currentLanguage)
    const langArray = useSelector(state => state.languages.languages)


    const langList = langArray.map((lang, index) => {
        return <li key={index} onClick={()=>changeLanguageClick(lang)}>{lang}</li>
    })

    const handlerClick = () => {
        setShowList(!showList)
    }

    const changeLanguageClick = (lang) => {
        dispatch(changeLanguageAction(lang))
        setShowList(!showList)
    }

    return (
        <div className='language'>
            <div className='lang-block'>
                <div className='lang-caption' onClick={handlerClick}>
                    <div className='lang-icon'></div>
                    <div className='current-lang'>{currentLanguage}</div>
                    {showList 
                    ? <div className='arrow-icon up'></div> 
                    : <div className='arrow-icon down'></div>}
                </div>

                <ul className='lang-list'>
                    { showList ? langList : <div></div> }
                </ul>
            </div>
        </div>
    )
}