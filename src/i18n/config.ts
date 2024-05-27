import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { translations as enTranslation } from "./en"
import { translations as jaTranslation } from "./ja"

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    ja: {
      translation: jaTranslation,
    },
  },
  fallbackLng: "en",
})
