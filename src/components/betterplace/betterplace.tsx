'use client'

import rootStyles from '@/app/[lang]/rootStyles.module.css'

const Betterplace = () => {
  return (
    <a
      href="https://www.goodcrowd.org/toxic-leadership-vent"
      target="_blank"
      rel="noopener noreferrer"
      className={rootStyles.button}
      style={{
        textDecoration: 'none',
      }}
    >
      Donate via Betterplace
    </a>
  )
}

export default Betterplace
