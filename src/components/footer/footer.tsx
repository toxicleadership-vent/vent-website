import Link from 'next/link'
import { getTranslation } from './../../localization/i18n'
import styles from './footer.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import { Nav, NavItem, NavLink } from '@/components/bootstrap/bootstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '../../../public/images/logo_black.png'
import logo2 from '../../../public/images/home/footer2.svg'
import logo4 from '../../../public/images/home/footer4.svg'
import logo1 from '../../../public/images/home/footer1.svg'
import logo3 from '../../../public/images/home/footer3.svg'
import logo5 from '../../../public/images/home/footer5.svg'

const Footer = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'general', { keyPrefix: 'footer' })

  return (
    <div className={`${rootStyles.section} ${styles.footerContainer}`}>
      <div>
        <div className={styles.logos}>
          <div className={styles.logoRow}>
            <div>
              <Image src={logo1} height={70} width={120} alt="logo SIB" />
            </div>
            <div>
              <Image src={logo2} height={70} width={120} alt="logo EU" />
            </div>
            <div>
              <Image
                src={logo3}
                height={70}
                width={120}
                alt="logo ESF Berlin"
              />
            </div>
            <div>
              <Image src={logo4} height={70} width={120} alt="logo Berlin" />
            </div>
            <div>
              <Image src={logo5} height={70} width={120} alt="logo Berlin" />
            </div>
          </div>
        </div>
        <Nav className={`${styles.footerNavigation}`} activeKey="/home">
          <NavItem>
            <NavLink className={styles.link} href={t('links.0.href')}>
              {t('links.0.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.1.href')}>
              {t('links.1.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.3.href')}>
              {t('links.3.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.2.href')}>
              {t('links.2.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.4.href')}>
              {t('links.4.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.5.href')}>
              {t('links.5.link')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={t('links.6.href')}>
              {t('links.6.link')}
            </NavLink>
          </NavItem>
        </Nav>
        <div className={styles.footerLogoSmall}>
          <FooterLogos lang={lang} size={'small'} />
        </div>
        <div className={styles.footerLogoLarge}>
          <FooterLogos lang={lang} size={'large'} />
        </div>
      </div>
    </div>
  )
}

export default Footer

const FooterLogos = async ({ lang, size }: { lang: string; size: string }) => {
  const { t } = await getTranslation(lang, 'general', { keyPrefix: 'footer' })

  if (size === 'small') {
    return (
      <div className={styles.logoContainer}>
        <div className={styles.socials}>
          <Link
            className={styles.social}
            href={t('links.7.href')}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className={styles.social}
            href={t('links.8.href')}
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className={styles.social}
            href={t('links.9.href')}
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className={styles.social}
            href={t('links.10.href')}
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </div>
        <div className={styles.bottomLine}>
          <Image
            style={{ marginLeft: -5 }}
            alt="vent logo"
            src={logo}
            width={100}
            height={35}
          />
          <span className={styles.subtitle}>{t('description')}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.logoContainer}>
      <Image
        style={{ marginLeft: -5 }}
        alt="vent logo"
        src={logo}
        width={100}
        height={35}
      />
      <span className={styles.subtitle}>{t('description')}</span>
      <div className={styles.socials}>
        <Link
          className={styles.social}
          href={t('links.7.href')}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          className={styles.social}
          href={t('links.8.href')}
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          className={styles.social}
          href={t('links.9.href')}
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link
          className={styles.social}
          href={t('links.10.href')}
          target="_blank"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  )
}
