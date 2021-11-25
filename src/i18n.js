import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import translationEN from './locales/en/translationEN.json'
import translationUA from './locales/ua/translationUA.json'
import translationHE from './locales/he/translationHE.json'

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpBackend)
.init({

    resources: { 
        en: { 
            translation: translationEN
        },
        ua: { 
            translation: translationUA
            },

        he: { 
            translation: translationHE
            }
        
    }, 

    detection: { 
    order: [ 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
    caches: ['cookie'],
  },

  lng: 'en',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },

  backend: { 
    loadPath: '/public/locales/{{lng}}/translation.json',
  },


});


export default i18n;
