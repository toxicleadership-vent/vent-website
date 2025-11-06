import Link from 'next/link'
import styles from './footer.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import { Nav, NavItem, NavLink } from '@/components/bootstrap/bootstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '../../../public/images/logo_black.png'
import logo2 from '../../../public/images/home/footer2.svg'
import logo4 from '../../../public/images/home/footer4.svg'
import logo1 from '../../../public/images/home/footer1.svg'
import logo3 from '../../../public/images/home/footer3.svg'
import logo5 from '../../../public/images/home/footer5.svg'

type FooterProps = { lang: string };

const Footer = async ({ lang }: FooterProps) => {
 
  const footerCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/footer?locale=${lang}&populate=*`
  )
  const {data : footer} = await footerCopy.json();

  return (
    <div className={`${rootStyles.section} ${styles.footerContainer}`}>
      <div>
        <div className={styles.logos}>
          <div className={styles.logoRow}>
            <div>
              <Image src={logo1} height={70} width={120} alt="logo SIB" />
            </div>
            <div>
              <Image src={logo2} height={70} width={120} alt="logo EU" />
            </div>
            <div>
              <Image
                src={logo3}
                height={70}
                width={120}
                alt="logo ESF Berlin"
              />
            </div>
            <div>
              <Image src={logo4} height={70} width={120} alt="logo Berlin" />
            </div>
            <div>
              <Image src={logo5} height={70} width={120} alt="logo Berlin" />
            </div>
          </div>
        </div>
        <Nav className={`${styles.footerNavigation}`} activeKey="/home">
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[0]?.href }>
              {footer?.links[0]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links[1]?.href }>
              {footer?.links[1]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[3]?.href }>
              {footer?.links?.[3]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[2]?.href }>
              {footer?.links?.[2]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[4]?.href }>
              {footer?.links?.[4]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[5]?.href }>
              {footer?.links?.[5]?.title }
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={styles.link} href={footer?.links?.[6]?.href }>
              {footer?.links?.[6]?.title  }
            </NavLink>
          </NavItem>
        </Nav>
        <div className={styles.footerLogoSmall}>
          <FooterLogosCopy lang={lang} size={'small'} />
        </div>
        <div className={styles.footerLogoLarge}>
          <FooterLogosCopy lang={lang} size={'large'} />
        </div>
      </div>
    </div>
  )
}

export default Footer

const FooterLogosCopy = async ({ lang, size }: { lang: string; size: string }) => {
  
  const footerLogosCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/footer?locale=${lang}&[populate]=*`
  )

  const {data : footer} = await footerLogosCopy.json();

  if (size === 'small') {
    return (
      <div className={styles.logoContainer}>
        <div className={styles.socials}>
          <Link
            className={styles.social}
            href={footer?.links?.[7]?.href  }
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className={styles.social}
            href={footer?.links?.[8]?.href }
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className={styles.social}
            href={footer?.links?.[9]?.href}
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className={styles.social}
            href={footer?.links?.[10]?.href}
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </div>
        <div className={styles.bottomLine}>
          <Image
            style={{ marginLeft: -5 }}
            alt="vent logo"
            src={logo}
            width={100}
            height={35}
          />
          <span className={styles.subtitle}>{footer?.description  }</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.logoContainer}>
      <Image
        style={{ marginLeft: -5 }}
        alt="vent logo"
        src={logo}
        width={100}
        height={35}
      />
      <span className={styles.subtitle}>{footer?.description}</span>
      <div className={styles.socials}>
        <Link
          className={styles.social}
          href={footer?.links?.[7]?.href }
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          className={styles.social}
          href={footer?.links?.[8]?.href }
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          className={styles.social}
          href={footer?.links?.[9]?.href }
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link
          className={styles.social}
          href={footer?.links?.[10]?.href }
          target="_blank"
        >
          <FaYoutube />
        </Link>
      </div>
    </div>
  )
}
