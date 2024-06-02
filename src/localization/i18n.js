import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
// import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from '../../i18nConfig'

export default async function initTranslations(locale, namespace) {
  const i18nInstance = createInstance()
  await i18nInstance
    //  .use(LanguageDetector)
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) => import(`./${namespace}/${language}.json`)
      )
    )
    .init(getOptions(locale, namespace))

  return i18nInstance
}

export async function getTranslation(
  lng = 'en',
  ns = 'translation',
  options = {}
) {
  const i18nextInstance = await initTranslations(lng, ns)
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  }
}
