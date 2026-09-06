import Link from 'next/link'
import { Image } from '@/components/bootstrap/bootstrap'
import styles from '../../page.module.css'

export default function GettingInformed3Content() {
  return (
    <>
      <h1 className={styles.heading1Mdx}>What impact does it have?</h1>
      <Image
        className={styles.mdxImage}
        src="/images/getting_informed/What_impact_does_it_have.svg"
        alt="What impact does it have"
        fluid
      />
      <p>
        The longer you work in a toxic environment, the more time and money
        it will cost you to recover from psychological violence. The
        person(s), who caused the harm, either directly or by turning a blind
        eye, will not share in these expenses, even though you helped them
        build their careers and fortune.
      </p>
      <p>
        The psychological violence experienced in toxic workplaces can be
        overwhelming. The journey to recovery can be long, and sometimes the
        injuries are so severe that they make it impossible to achieve the
        quality of life you once dreamed of. Without your health, it becomes
        highly unlikely that you can become the best version of yourself.
      </p>
      <p>
        To offer a glimpse into the consequences of toxic leadership on
        individuals, here are a couple of quotes from people who experienced
        it:
      </p>
      <h2>Impact on Mental Health:</h2>
      <p>
        &ldquo;I felt like I was losing my mind. The constant stress and
        manipulation left me in a constant state of anxiety. I was unable to
        assess the quality of my work, to control my anger, my memory was
        affected and I couldn&rsquo;t solve the most basic problems.&rdquo;
      </p>
      <h2>Impact on Physical Health:</h2>
      <p>
        &ldquo;The stress at work led to sleepless nights, digestive issues,
        and even high blood pressure. My body was screaming for help. Until
        one day I couldn&rsquo;t talk any more and was hospitalized for
        exhaustion. Until today I am dealing with the aftermath of having
        damaged my body to such an extent.&rdquo;
      </p>
      <h2>Impact on Social and Family Life:</h2>
      <p>
        &ldquo;I became so distant from my family and friends. I didn&apos;t
        have the energy to socialize anymore or to connect with my partner.
        In the end, I felt like all I had left was work. Years later I
        massively regret missing out on important events and just the
        day-to-day. Being mentally and emotionally absent permanently
        reshaped the relationship I have with my, now, adult
        children&rdquo;.
      </p>
      <p>
        The research conducted by VENT is ongoing and this website is
        continuously growing. To learn about the impact of toxic leadership
        on communities, businesses and the environment, please come back to
        this page at a later point.
      </p>
      <p>
        To learn about how toxic leadership manifests in practice, visit our{' '}
        <Link href="https://www.toxicleadershipvent.com/experiences">
          Real Stories
        </Link>{' '}
        page to read stories, which illustrate these harmful patterns and
        their impact.
      </p>
      <p>
        To read about what to consider when you find yourself working in an
        unhealthy environment facilitated by a toxic leader visit our{' '}
        <Link href="https://www.toxicleadershipvent.com/support">
          Self Help
        </Link>{' '}
        page.
      </p>
    </>
  )
}
