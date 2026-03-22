import { createI18n } from 'vue-i18n'
import pl from './locales/pl.json'
import en from './locales/en.json'
import de from './locales/de.json'

const messages = {
  pl,
  en,
  de
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'pl',
  fallbackLocale: 'pl',
  messages,
})

export default i18n
