import Link from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Col,
  Row,
} from '@/components/bootstrap/bootstrap'
import Image from 'next/image'
import plus from '../../../public/images/plus_icon.png'
import styles from './accordion.module.css'
import { getTranslation } from '@/localization/i18n'
import copy from '../../localization/support/en.json'

export const SupportLinks = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'support', {
    keyPrefix: 'support.links',
  })

  const links = copy.support.links
  return (
    <Accordion className={styles.accordion} bsPrefix="myAccordion" flush>
      {links.map((continent, index) => (
        <AccordionItem
          key={continent.header}
          eventKey={index.toString()}
          className={styles.accordionItem}
        >
          <AccordionHeader className={styles.accordionHeader}>
            <h3 className={styles.accordionSubtitle}>{t(`${index}.header`)}</h3>
            <div className={styles.plusIcon}>
              <Image src={plus} alt="text" width="20" height="20" />
            </div>
          </AccordionHeader>
          <AccordionBody className={styles.accordionBody}>
            <div>
              <Row className={styles.linkWrapper}>
                {continent.links.map((link, countryIndex) => (
                  <Col key={countryIndex} md={6} className={styles.linkColumn}>
                    <div className={styles.linkWrapper}>
                      <h5>{t(`${index}.links.${countryIndex}.title`)}</h5>
                      <Link
                        className={styles.hrefWrapper}
                        href={t(`${index}.links.${countryIndex}.href`)}
                      >
                        {t(`${index}.links.${countryIndex}.href`)}
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
