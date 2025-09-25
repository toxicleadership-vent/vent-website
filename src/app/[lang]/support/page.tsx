import styles from './page.module.css'
import { PageParams } from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import plus from '../../../../public/images/plus_icon.png'
import rootStyles from '../rootStyles.module.css'
import {
  Row,
  Col,
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from '@/components/bootstrap/bootstrap'
import { SupportLinks } from '@/components/support-links/support-links'

export default async function Contact({ params }: { params: PageParams }) {
  const { lang } = params;

  const ContactCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/support?locale=${lang}&populate[accordion][populate]=*&populate[links][populate]=*&populate[tipsExperts][populate][tips][populate]=*`)

  const {data : support} = await ContactCopy.json();

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div>
          <h1>{support.title}</h1>
          <div>
            <h2>{support.subtitle}</h2>
            {support.intro?.map((block: any, i: number) => (
              <p className="sectionIntro" key={i}>
                {block.children?.map((child: any, j: number) => child.text).join(' ')}
              </p>
            ))}
            <ul className={`${styles.ul} sectionIntro`}>
              {support.accordion?.[0].list?.map((item: any, i: number) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>{support.inbetweenTitle}</h2>
          {support.inbetweenParagraph?.map((block: any, i: number) => (
            <p className="sectionIntro" key={i}>
              {block.children?.map((child: any) => child.text).join(' ')}
            </p>
          ))}
            <Accordion
              className={styles.accordion}
              bsPrefix="myAccordion"
              flush
            >
              {support.accordion?.map((item: any, idx: number) => (
                <AccordionItem className={styles.accordionItem} eventKey={idx.toString()} key={idx}>
                  <AccordionHeader className={styles.accordionHeader}>
                    <h3 className={styles.accordionSubtitle}>
                      {item.subtitle}
                    </h3>
                    <div className={styles.plusIcon}>
                      <Image src={plus} alt="text" width="20" height="20" />
                    </div>
                  </AccordionHeader>
                  <AccordionBody className={styles.accordionBody}>
                    {/* Richtext für first_text */}
                    {Array.isArray(item.first_text)
                      ? item.first_text.map((block: any, i: number) => (
                          <p key={i}>
                            {block.children?.map((child: any) => child.text).join(' ')}
                          </p>
                        ))
                      : item.first_text}
                    {/* Liste */}
                    <ul>
                      {item.list?.map((listItem: any) => (
                        <li key={listItem.id}>{listItem.text}</li>
                      ))}
                    </ul>
                    {/* Richtext für second_text */}
                    {Array.isArray(item.second_text)
                      ? item.second_text.map((block: any, i: number) => (
                          <p key={i}>
                            {block.children?.map((child: any) => child.text).join(' ')}
                          </p>
                        ))
                      : item.second_text}
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
            <div className={styles.tipsSection}>
              <h2>{support.tipsExperts.title}</h2>
              <Row>
                {support.tipsExperts.tips.map((_tip: any, i: number) => (
                  <Col className={styles.linkColumn} key={i} sm={6} md={4}>
                    <div className={`card ${styles.card}`}>
                      <img
                        alt={'author image'}
                        src={_tip.image}
                      />
                      <img
                        className={styles.hand}
                        alt={'infographic'}
                        src={'/images/support/Hand.svg'}
                      />
                    </div>
                    <h3 style={{ wordBreak: 'normal' }}>
                      {_tip.title}
                    </h3>
                    <p>{_tip.author}</p>
                    <p>
                      <a
                        target="_blank"
                        className={`link ${styles.link}`}
                        href={_tip.link.href}
                      >
                        {_tip.link.text}
                      </a>
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
            <div>
              <h2 style={{ textAlign: 'left' }}>{support.linkTitle}</h2>
              <SupportLinks lang={params.lang} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
// TO DO: Richtext Elemente mappen


/* TO DO: accordion header bold, restliche Texte einfügen, Pluszeichen zum aufklappen -> https://github.com/react-bootstrap/react-bootstrap/issues/4140#issuecomment-604130679,  */
