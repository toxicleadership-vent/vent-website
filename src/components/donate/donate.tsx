'use server'
import { cookies } from 'next/headers'
import { getTranslation } from '@/localization/i18n'
import styles from './donate.module.css'
import rootStyles from '@/app/[lang]/rootStyles.module.css'
import PayPalDonationButton from '@/components/paypal/paypal'
import Betterplace from '../betterplace/betterplace'

const isUserInNorthAmerica = (countryCode: string) => {
  const northAmericaCountries = ['US', 'CA']
  return northAmericaCountries.includes(countryCode)
}

const Donation = async ({ lang }: { lang: string }) => {
  // 📌 `countryCode` aus den Cookies abrufen
  const countryCode = cookies().get('country')?.value || 'Unknown'
  const { t } = await getTranslation(lang, 'donation', {
    keyPrefix: 'donation',
  })

  return (
    <section className={`${rootStyles.section}`}>
      <div>
        <h1>{t('title')}</h1>
        <p className={'sectionIntro'}>{t('description')}</p>
        <ul className={`${styles.ul} ${rootStyles.textIntro}`}>
          <li>{t('list.1')}</li>
          <li>{t('list.2')}</li>
          <li>{t('list.3')}</li>
        </ul>
        <div className={`${rootStyles.section}`}>
          {isUserInNorthAmerica(countryCode) ? (
            <PayPalDonationButton />
          ) : (
            <Betterplace />
          )}
        </div>

        <p className={'sectionIntro'}>{t('thanks')}</p>
      </div>
    </section>
  )
}

export default Donation
