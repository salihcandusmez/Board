import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import En from './en.json';
import Tr from './tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: En
    },
    tr: {
      translation: Tr
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
