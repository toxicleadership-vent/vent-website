import Link from 'next/link'

export default function AboutContent() {
  return (
    <>
      <h3>Our Mission</h3>
      <p>
        VENT is a platform focused on addressing toxic leadership and its
        impacts on individuals, communities, businesses, and the environment
        through impactful storytelling and in-depth research.
      </p>
      <h3>Our Approach</h3>
      <p>
        Through anonymous interviews, we gather stories of workplace
        incivility and exploitation, ensuring anonymity and highlighting
        systemic patterns of abuse across industries.
      </p>
      <h3>Our Goals</h3>
      <ul>
        <li>Provide a safe space for individuals to share their experiences.</li>
        <li>Transform trauma into awareness and actionable solutions.</li>
        <li>Research the effects of toxic leadership.</li>
        <li>Combat the normalization of workplace violence and harassment.</li>
      </ul>
      <h3>Storytelling and Education</h3>
      <p>
        Alongside written narratives, we produce cartoons and educational
        campaigns to convey these experiences.
      </p>
      <h3>Research</h3>
      <p>
        We engage with multidisciplinary experts and collaborate with
        researchers in organizational psychology as well as corporate social
        responsibility, and more.
      </p>
      <p>
        For stories of toxic leadership experiences, check our{' '}
        <Link href="https://www.toxicleadershipvent.com/en/experiences">
          Real Stories
        </Link>
        . For guidance on navigating unhealthy work environments, visit our
        page{' '}
        <Link href="https://www.toxicleadershipvent.com/en/support">
          Self Help
        </Link>
        .
      </p>
    </>
  )
}
