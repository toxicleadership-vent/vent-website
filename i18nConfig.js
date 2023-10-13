
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    debug: false,
    supportedLngs: languages,
    fallbackLng,
    lng,
    defaultNS,
    ns,
      //  interpolation: {
      //   espaceValue: false,
      // },
      detection: {
        order: ['navigator']
      },
      react: { useSuspense: false },//this line
      // routingStrategy: 'dynamicSegment',

  }
}
