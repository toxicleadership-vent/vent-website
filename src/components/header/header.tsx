import { getTranslation } from './../../localization/i18n'
import {
    Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarToggle,
  NavItem,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
  NavbarOffcanvas,
} from '../bootstrap/bootstrap'
import copy from '@/localization/general/en.json'
import styles from './header.module.css'
import Link from 'next/link'

/* # TODO logo i18n 
  scrolling remove subtitle
*/
export const Header = async (
  {
    language,
    color,
    lightColor,
  }: { language: string; color?: string; lightColor?: string } = {
    language: 'en',
    color: 'transparent',
    lightColor: 'transparent',
  }
) => {
  const { t } = await getTranslation(language, 'general', {
    keyPrefix: 'general',
  })

  return (
    <Navbar
      collapseOnSelect
      expand="l"
      fixed="top"
      style={{
        backgroundColor: color,
      }}
    >
      <div className={styles.container}>
        <NavbarBrand href="/">
          <div className={styles.image}>
            <div>
              <img alt="vent logo" src="/images/logo_black.png" height="35px" />
            </div>
          </div>
        </NavbarBrand>
        <div>
          <span className={styles.subtitle}>about the toxic boss</span>
        </div>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          className="border-0"
        />
        <NavbarOffcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbar"
          placement="end"
          scroll
          backdrop
          className={styles.offcanvas}
          style={{ backgroundColor: color }}
        >
          <OffcanvasHeader closeButton>
            <OffcanvasTitle id="offcanvasNavbarLabel">
              <Link href="/">
                <img
                  alt="vent logo"
                  src="/images/logo_black.png"
                  height="35px"
                />
              </Link>
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav>
              {copy.general.navbar.map((navitem, index) => (
                <NavItem
                  as="li"
                  key={index}
                  style={{ backgroundColor: lightColor }}
                  className={styles.link}
                >
                  <NavLink href={navitem.href}>
                    {t(`navbar.${index}.link`)}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </div>
    </Navbar>
  )
}
