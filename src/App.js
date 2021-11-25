import './App.css';

import { Search } from './Components/Search/Search';
import { LanguageSettings } from './Components/LanguageSettings/LanguageSettings';
import { WeatherCard } from './Components/WeatherCard/WeatherCard';
import { UsePosition } from './Components/Position/UsePosition.js'
import { useTranslation} from "react-i18next";
import { Trans } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }


  return (
   
       <div className='App'>

         <h2> {t("welcome_to_react")} </h2>
       
          <UsePosition />

          <section>
            <LanguageSettings />
          </section>

          <section>
            <Search />
          </section>

          <section className='main'>
            <WeatherCard />
          </section>
      </div>
   
  );
}

export default App;
