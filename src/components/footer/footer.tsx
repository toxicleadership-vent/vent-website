import Link from 'next/link';
import { getTranslation } from './../../localization/i18n'
import styles from './footer.module.css'
import { Nav, NavItem, NavLink } from '@/components/bootstrap/bootstrap'
import { FaLinkedin } from "react-icons/fa6";

const Footer = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'general', { keyPrefix: 'footer' })

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNavigation}>
        <Nav className="justify-content-between" activeKey="/home">
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
      </div>

      <div className={styles.logotitle}>
        <img alt="vent logo" src="/images/logo_black.png" height="35px" />
        <span className={styles.subtitle}>{t('description')}</span>
            <Link
              className={styles.linkedin}
              href={t('links.7.href')}
              target="_blank"
            >
            <FaLinkedin />
            </Link>
      </div>
    </div>
  )
}

export default Footer
