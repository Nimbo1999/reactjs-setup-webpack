import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend'

import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'pt-BR',

    debug: true,

    detection: {
      order: ['queryString', 'cookie'],
      cache: 'cookie'
    },

    interpolation: {
      escapeValue: false
    },

    backend: {
      backends: [
        LocalStorageBackend,
        HttpApi
      ],

      backendOptions: [{
        // prefix for stored languages
        prefix: 'i18next_res_',

        // expiration
        expirationTime: 7*24*60*60*1000,

        // Version applied to all languages, can be overriden using the option `versions`
        defaultVersion: '',

        // language versions
        versions: {
          en: 'v0.1',
          'pt-BR': 'v0.1'
        },

        // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
        store: window.localStorage
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }

  });

export default i18n;