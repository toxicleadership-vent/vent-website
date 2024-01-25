import Link from 'next/link'
import { getTranslation } from './../../localization/i18n'
import styles from './footer.module.css'
import { Nav, NavItem, NavLink } from '@/components/bootstrap/bootstrap'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '../../../public/images/logo_black.png'

const Footer = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'general', { keyPrefix: 'footer' })

  return (
    <div className={styles.footerContainer}>
      <Nav
        className={`justify-content-between ${styles.footerNavigation}`}
        activeKey="/home"
      >
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
      <div className={styles.logoContainer}>
        <Image
          style={{ marginLeft: -5 }}
          alt="vent logo"
          src={logo}
          width={100}
          height={35}
        />
        <span className={styles.subtitle}>{t('description')}</span>
        <div>
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
        </div>
      </div>
    </div>
  )
}

export default Footer
