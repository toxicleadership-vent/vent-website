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
  const DonationCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/donation?locale=en&populate=*`);
  
  const {data : donation} = await DonationCopy.json();

  return (
    <section className={`${rootStyles.section}`}>
      <div>
        <h1>{donation.title}</h1>
        <p className={'sectionIntro'}>{donation.description}</p>
        <ul className={`${styles.ul} ${rootStyles.textIntro}`}>
          <li>{donation.list?.[0].text}</li>
          <li>{donation.list?.[1].text}</li>
          <li>{donation.list?.[2].text}</li>
        </ul>
        <div className={`${rootStyles.section}`}>
          {isUserInNorthAmerica(countryCode) ? (
            <PayPalDonationButton />
          ) : (
            <Betterplace />
          )}
        </div>

        <p className={'sectionIntro'}>{donation.thanks}</p>
      </div>
    </section>
  )
}

export default Donation
