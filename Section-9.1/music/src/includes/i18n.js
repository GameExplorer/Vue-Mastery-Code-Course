import { createI18n } from "vue-i18n";
import en from "@/locale/en";
import sl from "@/locale/sl";

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    sl,
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    ja: {
      currency: {
        style: 'currency',
        currency: 'JPY'
      }
    }
  }
})