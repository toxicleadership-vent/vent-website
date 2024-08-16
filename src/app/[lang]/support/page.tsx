import styles from './page.module.css'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import Link from 'next/link'
import Image from 'next/image'
import plus from '../../../../public/images/plus_icon.png'
import { Trans } from 'react-i18next/TransWithoutContext'
import rootStyles from '../rootStyles.module.css'
import {
  Row,
  Col,
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from '@/components/bootstrap/bootstrap'
import copy from '../../../localization/support/en.json'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'support')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div>
          <h1>{t('support.title')}</h1>
          <div>
            <h2>{t('support.subtitle')}</h2>
            <p className="sectionIntro">{t('support.intro')}</p>
            <ul className={`${styles.ul} sectionIntro`}>
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

          <div>
            <h2>{t('support.inbetween-title')}</h2>
            <p className={'sectionIntro'}>{t('support.inbetween-paragraph')}</p>

            <Accordion
              className={styles.accordion}
              bsPrefix="myAccordion"
              flush
            >
              <AccordionItem className={styles.accordionItem} eventKey="0">
                <AccordionHeader className={styles.accordionHeader}>
                  <h3 className={styles.accordionSubtitle}>
                    {t('support.accordion.0.subtitle')}
                  </h3>
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
                  <h3 className={styles.accordionSubtitle}>
                    {t('support.accordion.1.subtitle')}
                  </h3>
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
                  <h3 className={styles.accordionSubtitle}>
                    {t('support.accordion.2.subtitle')}
                  </h3>
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
                  <h3 className={styles.accordionSubtitle}>
                    {t('support.accordion.3.subtitle')}
                  </h3>
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
                  <h3 className={styles.accordionSubtitle}>
                    {t('support.accordion.4.subtitle')}
                  </h3>
                  <div className={styles.plusIcon}>
                    <Image src={plus} alt="text" width="20" height="20" />
                  </div>
                </AccordionHeader>
                <AccordionBody className={styles.accordionBody}>
                  {/** @ts-ignore */}
                  <Trans t={t} components={{ Link: <Link></Link> }}>
                    {t('support.accordion.4.first_text')}
                  </Trans>
                  {t('support.accordion.4.second_text')}
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            <div className={styles.tipsSection}>
              <h2>{t('support.tipsExperts.title')}</h2>
              <Row>
                {copy.support.tipsExperts.tips.map((_tip, i) => (
                  <Col className={styles.linkColumn} key={i} sm={6} md={4}>
                    <div className={`card ${styles.card}`}>
                      <img
                        alt={'author image'}
                        src={t(`support.tipsExperts.tips.${i}.image`)}
                      />
                      <img
                        className={styles.hand}
                        alt={'infographic'}
                        src={'/images/support/Hand.svg'}
                      />
                    </div>
                    <h3>{t(`support.tipsExperts.tips.${i}.title`)}</h3>
                    <p>{t(`support.tipsExperts.tips.${i}.author`)}</p>
                    <p>
                      <a
                        target="_blank"
                        className={`link ${styles.link}`}
                        href={t(`support.tipsExperts.tips.${i}.link.href`)}
                      >
                        {t(`support.tipsExperts.tips.${i}.link.text`)}
                      </a>
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
            <div>
              <h2 style={{ textAlign: 'left' }}>{t('support.link-title')}</h2>
              <Row className={styles.linkWrapper}>
                <Col md={6} className={styles.linkColumn}>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.0.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.0.href')}
                    >
                      {t('support.links.0.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.1.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.1.href')}
                    >
                      {t('support.links.1.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.2.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.2.href')}
                    >
                      {t('support.links.2.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.3.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.3.href')}
                    >
                      {t('support.links.3.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.4.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.4.href')}
                    >
                      {t('support.links.4.href')}
                    </Link>
                  </div>
                </Col>
                <Col md={6} className={styles.linkColumn}>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.5.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.5.href')}
                    >
                      {t('support.links.5.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.6.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.6.href')}
                    >
                      {t('support.links.6.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.7.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.7.href')}
                    >
                      {t('support.links.7.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.8.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.8.href')}
                    >
                      {t('support.links.8.href')}
                    </Link>
                  </div>
                  <div className={styles.linkWrapper}>
                    <h5>{t('support.links.9.title')}</h5>
                    <Link
                      className={styles.hrefWrapper}
                      href={t('support.links.9.href')}
                    >
                      {t('support.links.9.href')}
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/* TO DO: accordion header bold, restliche Texte einfügen, Pluszeichen zum aufklappen -> https://github.com/react-bootstrap/react-bootstrap/issues/4140#issuecomment-604130679,  */
