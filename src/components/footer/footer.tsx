import { getTranslation } from '@/localization/i18n'
import {
  NavItem,
  NavLink,
  Stack,
  Container,
  Row,
  Col,
} from '../bootstrap/bootstrap'
import copy from '@/localization/general/en.json'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
export const Footer = async (
  { language }: { language: string } = { language: 'en' }
) => {
  const { t } = await getTranslation(language, 'general')

  return (
    // <Stack direction="horizontal" gap={3} >
    <Stack className={styles.container}>
      <Row>
        <Stack></Stack>
        <Stack>
          {copy.general.navbar.map((navitem, index) => (
            <NavItem as="li" key={index} className={styles.link}>
              <Link href={navitem.href}>
                {t(`general.navbar.${index}.link`)}
              </Link>
            </NavItem>
          ))}
        </Stack>

        <Stack>
          <a href="http://www.linkedin.com">LinkedIn</a>
        </Stack>

        <Stack>
          {/* <LanguageToggle /> */}
          <></>
        </Stack>
      </Row>
      <div >
        <div>
        <Image
          src="/images/logo_black.png"
          alt="vent logo"
          width={100}
          height={50}
          className={styles.title}
        />
                </div>
      <div>
        <p> {t('footer.description')}</p>
        </div>
      </div>
    </Stack>
    // </Stack>
  )
}
