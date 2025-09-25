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

export const SupportLinks = async ({ lang }: { lang: string }) => {
  const SupportLinksCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/support?locale=${lang}&populate[tipsExperts][populate]=*&populate[links][populate]=*`)

  const {data : support} = await SupportLinksCopy.json();
  const links = support.links;

  return (
    <Accordion className={styles.accordion} bsPrefix="myAccordion" flush>
      {links.map((continent: any, index: number) => (
        <AccordionItem
          key={continent.header}
          eventKey={index.toString()}
          className={styles.accordionItem}
        >
          <AccordionHeader className={styles.accordionHeader}>
            <h3 className={styles.accordionSubtitle}>{continent.header}</h3>
            <div className={styles.plusIcon}>
              <Image src={plus} alt="text" width="20" height="20" />
            </div>
          </AccordionHeader>
          <AccordionBody className={styles.accordionBody}>
            <div>
              <Row className={styles.linkWrapper}>
                {continent?.links?.map((link: any, countryIndex: any) => (
                  <Col key={countryIndex} md={6} className={styles.linkColumn}>
                    <div className={styles.linkWrapper}>
                      <h5>{link.title}</h5>
                      <Link
                        className={styles.hrefWrapper}
                        href={link.href}
                      >
                        {link.href}
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
