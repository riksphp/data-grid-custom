import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_ZH } from "./zh";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      zh: {
        translation: TRANSLATIONS_ZH,
      },
    },
  });

i18next.changeLanguage("zh");

export default i18next;
