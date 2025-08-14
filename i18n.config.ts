import en from "./locales/en.json";
import pt from "./locales/pt.json";
import es from "./locales/es.json";
export default defineI18nConfig(() => ({
  lazy: true,
  defaultLocale: "es",
  detectBrowserLanguage: false,
  strategy: "no_prefix",
  messages: {
    en: en,
    pt: pt,
    es: es,
  },
}));
