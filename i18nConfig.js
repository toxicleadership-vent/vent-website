export const fallbackLng = 'en'
export const languages = [fallbackLng]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    defaultNS,
    ns,
    detection: {
      order: ['navigator'],
    },
    react: { useSuspense: false }, //this line
    // routingStrategy: 'dynamicSegment',
  }
}
