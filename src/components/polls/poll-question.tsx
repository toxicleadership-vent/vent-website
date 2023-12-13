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
}: {
  percentage: number
  label: string
  correct: boolean
  onClick: () => void
}) => {
  return (
    <div onClick={onClick} className={`${style.progressBarWrapper}`}>
      <div
        role="progressbar"
        className={`${style.progressBar} ${
          correct ? style.progressBarRevealed : ''
        }`}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: `${percentage}%`,
        }}
      >
        {percentage}%
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
        onClick={handleClick}
        percentage={parseInt(
          copy.home.polls.questions[index].answers[0].percentage
        )}
        label={t(`polls.questions.${index}.answers.0.label`)}
        correct={
          !!copy.home.polls.questions[index].answers[0].correct && clicked
        }
      />
      <ProgressBar
        onClick={handleClick}
        percentage={parseInt(
          copy.home.polls.questions[index].answers[1].percentage
        )}
        label={t(`polls.questions.${index}.answers.1.label`)}
        correct={
          !!(!!copy.home.polls.questions[index].answers[1].correct && clicked)
        }
      />
      <ProgressBar
        onClick={handleClick}
        percentage={parseInt(
          copy.home.polls.questions[index].answers[2].percentage
        )}
        label={t(`polls.questions.${index}.answers.2.label`)}
        correct={
          !!(!!copy.home.polls.questions[index].answers[2].correct && clicked)
        }
      />
      <Stack>{t(`polls.questions.${index}.source`)}</Stack>
    </Stack>
  )
}
