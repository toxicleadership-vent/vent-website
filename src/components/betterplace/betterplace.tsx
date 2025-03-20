'use client'

import rootStyles from '@/app/[lang]/rootStyles.module.css'

const Betterplace = () => {
  const handleClick = () => {
    window.location.href = 'https://www.goodcrowd.org/toxic-leadership-vent'
  }

  return (
    <button className={rootStyles.button} onClick={handleClick}>
      Donate via Betterplace
    </button>
  )
}

export default Betterplace
