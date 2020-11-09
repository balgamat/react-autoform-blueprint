import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';

const resources = {
  en: { autoform: en },
  cs: { autoform: cs },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'cs',
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
