import Link from 'next/link'
import { Image } from '@/components/bootstrap/bootstrap'
import styles from '../../page.module.css'

export default function GettingInformed1Content() {
  return (
    <>
      <h1 className={styles.heading1Mdx}>What is toxic leadership?</h1>
      <Image
        className={styles.mdxImage}
        src="/images/getting_informed/What_is_toxic_leadership.svg"
        alt="What is toxic leadership"
        fluid
      />
      <p>
        The issue of toxic leadership is a worldwide, cross-industry,
        cross-generational and cross-gender problem. Its consequent negative
        impact destroys individuals&rsquo; mental and physical health. It also
        drains societies&apos; capacities to support people unable to work or
        live healthy, balanced lives.
      </p>
      <p>
        Toxic leadership is also very expensive for companies and
        organizations in terms of employee turnover, loss of know-how,
        lawsuits and harm to reputation.
      </p>
      <p>
        On an even larger scale, harmful leadership practices and
        self-serving decision-making of leaders are the decisive factor in
        failed attempts to implement sustainable solutions to social and
        environmental problems.
      </p>
      <h3>Origins of the Term</h3>
      <p>
        The term &quot;toxic leadership&quot; can be traced back to 1996 when
        Marcia Lynn Whicker published a book titled &quot;Toxic Leadership:
        When Organizations Go Bad.&quot; It was within these pages that the
        concept was first introduced to describe dysfunctional leadership
        styles.
      </p>
      <h3>Defining Dysfunction</h3>
      <p>
        Dysfunction in the leadership context is defined as &quot;any
        behavior that brings harm, or is intended to bring harm, to an
        organization, its employees, or stakeholders&quot; (Giacalone &amp;
        Greenberg, 1997).
      </p>
      <h3>Understanding Toxic Leadership</h3>
      <p>
        Toxic leaders are not just ineffective managers; they inflict serious
        and enduring harm on the individuals, groups, organizations,
        communities, and even the nations they lead (Lipman-Blumen, 2005).
        Toxic leadership encompasses a pattern of harmful behavior that
        affects every aspect of leadership.
      </p>
      <h3>Defining Destructive Leadership</h3>
      <p>
        One of the most comprehensive definitions of destructive,
        dysfunctional, or toxic leadership is as follows:
      </p>
      <p>
        &quot;the systemic and repeated behavior by a leader, supervisor, or
        manager that violates the legitimate interest of the organization by
        undermining and/or sabotaging the organization&apos;s goals, tasks,
        resources, and effectiveness and/or the motivation, wellbeing, or job
        satisfaction of subordinates&quot; (Einarsen et al., 2007).
      </p>
      <h2>What are the basic things to remember about toxic leadership?</h2>
      <p>
        <strong>1. A Pattern of Harm:</strong> Toxic leadership is not about a
        single instance of poor decision-making, mismanagement or rudeness.
        It&apos;s about a consistent pattern of behavior that harms the
        organization and its people.
      </p>
      <p>
        <strong>2. Self-Centeredness:</strong> Toxic leaders are primarily
        concerned with their own interests, often at the expense of others.
        They prioritize personal gain over the wellbeing of the organization
        and its members.
      </p>
      <p>
        <strong>3. Deceptive Behavior:</strong> Toxic leaders resort to
        deceit and manipulation to achieve their goals. They might provide
        false promises, misrepresent facts, or conceal their true intentions.
      </p>
      <p>
        <strong>4. Intimidation and Coercion:</strong> The use of fear and
        intimidation is a hallmark of toxic leadership. Subordinates may be
        coerced into compliance, making it challenging for them to speak up
        or voice concerns.
      </p>
      <p>
        <strong>5. Unfair Punishment:</strong> Toxic leaders use punishment
        as a tool for control. Subordinates who challenge their authority
        often face unwarranted consequences.
      </p>
      <p>
        <strong>6. Erosion of Trust:</strong> Toxic leaders erode trust
        within the organization. Employees become wary, and morale drops as
        trust diminishes.
      </p>
      <p>
        <strong>7. Impact on Mission:</strong> Toxic leadership has tangible
        adverse effects on the organization&apos;s mission and performance.
        It can hinder progress, damage relationships, and undermine goals.
      </p>
      <p>
        <strong>8. Harm:</strong> The negative consequences can extend to
        employees&apos; mental and physical health, job satisfaction, as well
        as social and family life.
      </p>
      <p>
        <strong>9. Systemic and Repeated:</strong> Toxic leadership is not a
        one-time occurrence. It is systemic and repeated, indicating a
        consistent and persistent pattern of destructive behavior.
      </p>
      <p>
        Toxic leadership is a complex and deeply damaging phenomenon that
        goes beyond incompetence or bad management. It encompasses a
        consistent pattern of behavior that harms individuals, organizations,
        and their missions. By understanding its origins and definitions, we
        can better equip ourselves to identify and address it.
      </p>
      <p>
        To learn about how toxic leadership manifests in practice, visit our{' '}
        <Link href="https://www.toxicleadershipvent.com/experiences">
          Real Stories
        </Link>{' '}
        page to read stories, which illustrate harmful patterns and their
        impact.
      </p>
      <p>
        To read about what to consider when you find yourself working in an
        unhealthy environment facilitated by a toxic leader, visit our{' '}
        <Link href="https://www.toxicleadershipvent.com/support">
          Self Help
        </Link>{' '}
        page.
      </p>
      <hr className={styles.mdxHr} />
      <p>
        <strong>Sources:</strong>
        <br />
        Einarsen, Ståle &amp; Aasland, Merethe &amp; Skogstad, Anders. (2007).
        Destructive leadership behavior: A definition and conceptual model.
        The Leadership Quarterly.
        <br />
        Giacalone, R. A., &amp; Greenberg, J. (Eds.). (1997). Antisocial
        behavior in organizations. Sage Publications, Inc.
        <br />
        Lipman-Blumen, J. (2005). Toxic leadership: When grand illusions
        masquerade as noble visions. Leader to Leader, (36), pp. 29-36
        <br />
        Whicker, Marcia Lynn. (1996). Toxic leaders : when organizations go
        bad. Westport, Conn : Quorum Books
      </p>
    </>
  )
}
