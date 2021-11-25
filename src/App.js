import './App.css';

import { Search } from './Components/Search/Search';
import { LanguageSettings } from './Components/LanguageSettings/LanguageSettings';
import { WeatherCard } from './Components/WeatherCard/WeatherCard';
import { UsePosition } from './Components/Position/UsePosition.js'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ua: {
        translation: {
          "Welcome to React": "Вітаємо у React та react-i18next"
        }
      }
    },
    detection: { 
      order: ['htmlTag', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
    },
    
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  const { t } = useTranslation();

  return (
   

    <div className='App'>
      <h2>{t('Welcome to React')}</h2>;

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
