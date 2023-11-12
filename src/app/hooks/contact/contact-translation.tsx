import { getTranslation } from "@/localization/i18n";
import { TFunction } from "i18next";
import { useCallback, useEffect, useState } from "react";

export const useTranslation = (lng: string, ns: string, keys: string[]) => {
  const [dictionary, setDictionary] = useState<Record<string, string>>();

  useEffect(() => {
    (async function (){
      const {t} = await getTranslation(lng, ns)
      const dictionaryTranslated = keys.reduce((key) => {
        console.log(key, t(`contact.${key}`))
        return { key: t(`contact.${key}`)}
      }, {})
      setDictionary(dictionaryTranslated)
    })()
  }, [lng, ns, keys])

  const getTrans = useCallback(async(key: string) => {
    const {t} = await getTranslation(lng, ns)
    return t(key)
  }, [ lng, ns])

  return dictionary
}