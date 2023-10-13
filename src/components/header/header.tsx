
import { getTranslation } from './../../localization/i18n'
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarCollapse,
  NavbarToggle,
  NavItem,
} from '../bootstrap/bootstrap'

import copy from '@/localization/general/en.json'

export const Header =  async ({language, color}: {language: string, color?: string} = { language: 'en', color: 'transparent'}) => {
  const {t} = await getTranslation(language, 'general', {keyPrefix: 'general'})

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      style={{ backgroundColor: color }}
    >
      <Container>
        <NavbarBrand href="#home">VENT</NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            {copy.general.navbar.map((navitem, index) => (
              <NavItem as="li" key={index}>
                <NavLink href={navitem.href}>{t(`navbar.${index}.link`)}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}
