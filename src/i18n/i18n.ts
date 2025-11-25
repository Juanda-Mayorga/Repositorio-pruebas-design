import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationDA from '../locales/da/translation.json';
import translationDE from '../locales/de/translation.json';
import translationCA from '../locales/ca/translation.json';
import translationES from '../locales/es/translation.json';
import translationEU from '../locales/eu/translation.json';
import translationGL from '../locales/gl/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationEN from '../locales/en/translation.json';
import translationIT from '../locales/it/translation.json';
import translationNL from '../locales/nl/translation.json';
import translationNO from '../locales/no/translation.json';
import translationPT from '../locales/pt/translation.json';

const resources = {
    da: { translation: translationDA },
    de: { translation: translationDE },
    ca: { translation: translationCA },
    es: { translation: translationES },
    eu: { translation: translationEU },
    gl: { translation: translationGL },
    fr: { translation: translationFR },
    en: { translation: translationEN },
    it: { translation: translationIT },
    nl: { translation: translationNL },
    no: { translation: translationNO },
    pt: { translation: translationPT },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
