import './LanguageSettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguageAction } from '../../store/reducers/language-reducer'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'


import { Select } from 'antd';

const { Option } = Select;



export const LanguageSettings = (props) => {
    
    const { i18n } = useTranslation()
    const dispatch = useDispatch()


    const currentLanguage =  useSelector(state => state.languages.currentLanguage)
    const langArray = useSelector(state => state.languages.languages)
    currentLanguage === 'he'? document.body.classList.add('reflection') : document.body.classList.remove('reflection')

    useEffect(() => {
        i18n.changeLanguage(currentLanguage)
    }, [])

    const handleChange = (e) => {
        dispatch(changeLanguageAction(e.target.value))
        i18n.changeLanguage(e.target.value)
        
    }

    return (
        <div className='language'>
            <div className='lang-block'>
                <select name='lang' id='lang' value={currentLanguage} className='lang-block' onChange={handleChange}>
                    
                    {langArray.map((lang) => <option value={lang} className='list-item'>{lang}</option>)}
                </select>


               {/*  <div className='lang-caption' onClick={handlerClick}>
                    <div className='lang-icon'></div>
                    <div className='current-lang'>{currentLanguage}</div>
                    {showList 
                    ? <div className='arrow-icon up'></div> 
                    : <div className='arrow-icon down'></div>}
                </div> */}

               {/*  <ul className='lang-list'>
                    { showList ? langArray.map((lang, index) => <li key={index} onClick={()=>changeLanguageClick(lang)}>{lang}</li>) 
                    : <></> }
                </ul> */}
            </div>
        </div>
    )
}