import './LanguageSettings.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguageAction } from '../../store/reducers/language-reducer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


import { Select } from 'antd';

const { Option } = Select;



export const LanguageSettings = (props) => {
    
    const { t, i18n } = useTranslation()

    const dispatch = useDispatch()

    const [showList, setShowList] = useState(false)

    const currentLanguage =  useSelector(state => state.languages.currentLanguage)
    const langArray = useSelector(state => state.languages.languages)


    const handlerClick = () => {
        setShowList(!showList)
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const changeLanguageClick = (lang) => {
        dispatch(changeLanguageAction(lang))
        i18n.changeLanguage(lang)
        setShowList(!showList)
    }

    return (
        <div className='language'>
            <div className='lang-block'>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="en">EN</Option>
                <Option value="ua">UA</Option>
                <Option value="he">HE</Option>
            </Select>


               {/*  <div className='lang-caption' onClick={handlerClick}>
                    <div className='lang-icon'></div>
                    <div className='current-lang'>{currentLanguage}</div>
                    {showList 
                    ? <div className='arrow-icon up'></div> 
                    : <div className='arrow-icon down'></div>}
                </div> */}

                <ul className='lang-list'>
                    { showList ? langArray.map((lang, index) => <li key={index} onClick={()=>changeLanguageClick(lang)}>{lang}</li>) 
                    : <></> }
                </ul>
            </div>
        </div>
    )
}