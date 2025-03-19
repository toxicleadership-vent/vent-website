'use client'

import rootStyles from '@/app/[lang]/rootStyles.module.css'

const Betterplace = () => {
  const handleClick = () => {
    window.location.href = 'https://www.goodcrowd.org/toxic-leadership-vent'
  }

  return (
    <button className={rootStyles.button} onClick={handleClick}>
      Spenden über Betterplace
    </button>
  )
}

export default Betterplace
