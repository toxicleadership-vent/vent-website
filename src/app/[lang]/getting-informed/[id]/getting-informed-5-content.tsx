import Link from 'next/link'
import { Image } from '@/components/bootstrap/bootstrap'
import styles from '../../page.module.css'

export default function GettingInformed5Content() {
  return (
    <>
      <h1 className={styles.heading1Mdx}>Why should we talk about it?</h1>
      <Image
        className={styles.mdxImage}
        src="/images/getting_informed/Why_we_should_talk_about_it.svg"
        alt="Why should we talk about it"
        fluid
      />
      <p>
        Talking about toxic leadership is the first step in addressing this
        pandemic-scale problem. The silence around the abuse of power only
        benefits the self-serving leaders, who benefit from the lack of
        accountability and no way to measure this aspect of their
        performance.
      </p>
      <p>
        By sharing our experiences of harassment and violence at work, we
        can expose the extent of this problem and pave the way for change.
        It is essential to create work environments where employees thrive
        without fear, humiliation and exploitation. Workplaces, where
        managers and leaders are given the right kind of tools to perform up
        to high standards, which do not exclude the impact their leadership
        styles have on the wellbeing and performance of employees.
      </p>
      <p>
        This begins with awareness, which comes from sharing stories and
        exposing the suffering, which lies below the surface.
      </p>
      <p>
        In the wake of the COVID-19 pandemic, we have become more conscious
        of the importance of mental health at work. This health crisis has
        shed the light on various aspects of our everyday lives that hinder
        overall wellness. As we transition from a reactive state to a
        proactive one, our aim is to prevent harm rather than gather the
        pieces left once the damage is done.
      </p>
      <ul className={styles.mdxUl}>
        <li>&quot;I got a new job and quit.&quot;</li>
        <li>&quot;I quit without a new job.&quot;</li>
        <li>&quot;I asked for feedback and got fired on the spot.&quot;</li>
        <li>
          &quot;I got so burned out that I couldn&apos;t say my name and was
          hospitalized. They fired me when I came back.&quot;
        </li>
      </ul>
      <p>
        These quotes represent a variety of ways in which a person may end up
        leaving a toxic workplace. Not everyone can afford to look for
        another job or to leave without having found one. Those who need the
        most support are people, who feel they are out of options.
      </p>
      <p>
        Having no way out is a crushing feeling in itself. What about when
        you feel like you are the only person in the world who ended up in
        this position?
      </p>
      <p>
        Talking about toxic leadership builds solidarity and reduces the
        number of people who feel alone with this problem. A problem, which
        is systemic - not individual!
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
