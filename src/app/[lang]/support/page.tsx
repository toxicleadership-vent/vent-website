import styles from './page.module.css'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import Link from 'next/link'
import Image from 'next/image'
import plus from '../../../../public/images/plus_icon.png'

import {
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from '@/components/bootstrap/bootstrap'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'support')

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t('support.title')}</h1>
      <div className={styles.intro}>
        <h2>{t('support.subtitle')}</h2>
        <p>{t('support.intro')}</p>
        <ul>
          <li>{t('support.list.1')}</li>
          <li>{t('support.list.2')}</li>
          <li>{t('support.list.3')}</li>
          <li>{t('support.list.4')}</li>
          <li>{t('support.list.5')}</li>
          <li>{t('support.list.6')}</li>
          <li>{t('support.list.7')}</li>
          <li>{t('support.list.8')}</li>
        </ul>
      </div>

      <div className={styles.wrapper}>
        <h3>{t('support.inbetween-title')}</h3>
        <p className={styles.inbetweenParagraph}>
          {t('support.inbetween-paragraph')}
        </p>

        <Accordion className={styles.accordion} bsPrefix="myAccordion" flush>
          <AccordionItem className={styles.accordionItem} eventKey="0">
            <AccordionHeader className={styles.accordionHeader}>
              <div className={styles.accordionSubtitle}>
                {t('support.accordion.0.subtitle')}
              </div>
              <div className={styles.plusIcon}>
                <Image src={plus} alt="text" width="20" height="20" />
              </div>
            </AccordionHeader>
            <AccordionBody className={styles.accordionBody}>
              {t('support.accordion.0.first_text')}
              <ul>
                <li>{t('support.accordion.0.list.1')}</li>
                <li>{t('support.accordion.0.list.2')}</li>
                <li>{t('support.accordion.0.list.3')}</li>
                <li>{t('support.accordion.0.list.4')}</li>
                <li>{t('support.accordion.0.list.5')}</li>
                <li>{t('support.accordion.0.list.6')}</li>
              </ul>
              {t('support.accordion.0.second_text')}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className={styles.accordionItem} eventKey="1">
            <AccordionHeader className={styles.accordionHeader}>
              <div className={styles.accordionSubtitle}>
                {t('support.accordion.1.subtitle')}
              </div>
              <div className={styles.plusIcon}>
                <Image src={plus} alt="text" width="20" height="20" />
              </div>
            </AccordionHeader>
            <AccordionBody className={styles.accordionBody}>
              {t('support.accordion.1.first_text')}
              <ul>
                <li>{t('support.accordion.1.list.1')}</li>
                <li>{t('support.accordion.1.list.2')}</li>
                <li>{t('support.accordion.1.list.3')}</li>
                <li>{t('support.accordion.1.list.4')}</li>
                <li>{t('support.accordion.1.list.5')}</li>
              </ul>
              {t('support.accordion.1.second_text')}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className={styles.accordionItem} eventKey="2">
            <AccordionHeader className={styles.accordionHeader}>
              <div className={styles.accordionSubtitle}>
                {t('support.accordion.2.subtitle')}
              </div>
              <div className={styles.plusIcon}>
                <Image src={plus} alt="text" width="20" height="20" />
              </div>
            </AccordionHeader>
            <AccordionBody className={styles.accordionBody}>
              {t('support.accordion.2.first_text')}
              {t('support.accordion.2.second_text')}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className={styles.accordionItem} eventKey="3">
            <AccordionHeader className={styles.accordionHeader}>
              <div className={styles.accordionSubtitle}>
                {' '}
                {t('support.accordion.3.subtitle')}
              </div>
              <div className={styles.plusIcon}>
                <Image src={plus} alt="text" width="20" height="20" />
              </div>
            </AccordionHeader>
            <AccordionBody className={styles.accordionBody}>
              {t('support.accordion.3.first_text')}
              {t('support.accordion.3.second_text')}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className={styles.accordionItem} eventKey="4">
            <AccordionHeader className={styles.accordionHeader}>
              <div className={styles.accordionSubtitle}>
                {' '}
                {t('support.accordion.4.subtitle')}
              </div>
              <div className={styles.plusIcon}>
                <Image src={plus} alt="text" width="20" height="20" />
              </div>
            </AccordionHeader>
            <AccordionBody className={styles.accordionBody}>
              {t('support.accordion.4.first_text')}
              {t('support.accordion.4.second_text')}
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        <h3 className={styles.linksTitle}>{t('support.link-title')}</h3>
        <div className={styles.linkWrapper}>
          <div className={styles.link}>
            <h5>{t('support.links.0.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.0.href')}
            >
              {t('support.links.0.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.1.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.1.href')}
            >
              {t('support.links.1.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.2.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.2.href')}
            >
              {t('support.links.2.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.3.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.3.href')}
            >
              {t('support.links.3.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.4.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.4.href')}
            >
              {t('support.links.4.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.5.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.5.href')}
            >
              {t('support.links.5.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.6.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.6.href')}
            >
              {t('support.links.6.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.7.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.7.href')}
            >
              {t('support.links.7.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.8.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.8.href')}
            >
              {t('support.links.8.href')}
            </Link>
          </div>
          <div className={styles.link}>
            <h5>{t('support.links.9.title')}</h5>
            <Link
              className={styles.hrefWrapper}
              href={t('support.links.9.href')}
            >
              {t('support.links.9.href')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

/* TO DO: accordion header bold, restliche Texte einfügen, Pluszeichen zum aufklappen -> https://github.com/react-bootstrap/react-bootstrap/issues/4140#issuecomment-604130679,  */
