import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './locales/ru.json'
import en from './locales/en.json'
import tg from './locales/tg.json'

export const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'tg', label: 'TJ' }
]

const saved = localStorage.getItem('lang')
const initial = LANGUAGES.some((l) => l.code === saved) ? saved : 'ru'

i18n.use(initReactI18next).init({
  resources: { ru: { translation: ru }, en: { translation: en }, tg: { translation: tg } },
  lng: initial,
  fallbackLng: 'ru',
  interpolation: { escapeValue: false }
})

document.documentElement.lang = initial

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
  document.documentElement.lang = lng
})

export default i18n
