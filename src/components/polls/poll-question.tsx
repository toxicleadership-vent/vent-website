'use client'
import { useTranslation } from '@/localization/i18n-client'
import { Stack } from '../bootstrap/bootstrap'
import style from './polls.module.css'

import copy from '@/localization/home/en.json'
import { useState } from 'react'

export const ProgressBar = ({
  percentage,
  label,
  correct,
  onClick,
  clicked,
  showPercentage,
}: {
  percentage: number
  label: string
  correct: boolean
  clicked: boolean
  showPercentage: boolean
  onClick: () => void
}) => {
  return (
    <div onClick={onClick} className={`${style.progressBarWrapper}`}>
      <div
        role="progressbar"
        className={`${style.progressBar} ${
          correct ? style.progressBarRevealed : ''
        } ${clicked ? style.progressBarActive : ''}`}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: `${percentage}%`,
        }}
      >
        {clicked && showPercentage ? `${percentage}%` : ''}
      </div>
      <div style={{ marginLeft: '1em' }}>{label}</div>
    </div>
  )
}

export const PollQuestion = ({
  lang,
  index,
}: {
  lang: string
  index: number
}) => {
  const { t } = useTranslation(lang, 'home', { keyPrefix: 'home' })
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(true)
  }

  return (
    <Stack>
      <h3>{t(`polls.questions.${index}.question`)}</h3>
      <ProgressBar
        showPercentage={t(`polls.questions.${index}.showPercentage`) === 'true'}
        clicked={clicked}
        onClick={handleClick}
        percentage={
          clicked
            ? parseInt(copy.home.polls.questions[index].answers[0].percentage)
            : 5
        }
        label={t(`polls.questions.${index}.answers.0.label`)}
        correct={
          !!copy.home.polls.questions[index].answers[0].correct && clicked
        }
      />
      <ProgressBar
        showPercentage={t(`polls.questions.${index}.showPercentage`) === 'true'}
        clicked={clicked}
        onClick={handleClick}
        percentage={
          clicked
            ? parseInt(copy.home.polls.questions[index].answers[1].percentage)
            : 5
        }
        label={t(`polls.questions.${index}.answers.1.label`)}
        correct={
          !!(!!copy.home.polls.questions[index].answers[1].correct && clicked)
        }
      />
      <ProgressBar
        showPercentage={t(`polls.questions.${index}.showPercentage`) === 'true'}
        clicked={clicked}
        onClick={handleClick}
        percentage={
          clicked
            ? parseInt(copy.home.polls.questions[index].answers[2].percentage)
            : 5
        }
        label={t(`polls.questions.${index}.answers.2.label`)}
        correct={
          !!(!!copy.home.polls.questions[index].answers[2].correct && clicked)
        }
      />
      <Stack>{t(`polls.questions.${index}.source`)}</Stack>
    </Stack>
  )
}
