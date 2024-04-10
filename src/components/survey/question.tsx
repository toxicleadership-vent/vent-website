import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { QuestionActionKinds, QuestionsActions } from './survey-reducer'
import styles from './survey.module.css'
import { Button } from '../bootstrap/bootstrap'

export const Question = ({
  question,
  answers,
  index: questionIndex,
  setActiveQuestion,
  dispatch,
  isActive,
}: {
  question: string
  answers: string[]
  index: number
  setActiveQuestion: Dispatch<SetStateAction<number>>
  dispatch: Dispatch<QuestionsActions>
  isActive?: boolean
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const buttonsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, 3)
    const firstSlide = document.getElementById(`question-${questionIndex}`)
    const firstButton = firstSlide?.querySelector('button')
    if (isActive) {
      firstButton?.focus()
    }
  }, [isActive, questionIndex])

  useEffect(() => {
    const firstSlide = document.getElementById(`question-0`)
    const firstButton = firstSlide?.querySelector('button')
    firstButton?.focus()
  }, [])

  const scrollIntoView = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const value = event.currentTarget.value
      let nextSlide = document.getElementById(`question-${questionIndex + 1}`)
      buttonsRef.current[0].focus()

      if (questionIndex === 9) {
        nextSlide = document.getElementById('calculation')
        const buttons = nextSlide?.querySelectorAll('button')
        buttons && buttons[0].focus()
        setActiveQuestion(10)
      }

      nextSlide?.scrollIntoView({ behavior: 'smooth' })
      setActiveQuestion(questionIndex + 1)
      dispatch({
        type: QuestionActionKinds.SAVE_QUESTION,
        payload: { [`q${questionIndex + 1}`]: parseInt(value) },
      })
    },
    [questionIndex, setActiveQuestion, dispatch]
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown' ||
      (!event.shiftKey && event.key === 'Tab' && activeButtonIndex < 2)
    ) {
      setActiveButtonIndex((prevIndex) => (prevIndex + 1) % 3)
    } else if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp' ||
      (event.shiftKey && event.key === 'Tab' && activeButtonIndex > 0)
    ) {
      setActiveButtonIndex((prevIndex) => (prevIndex + 2) % 3)
    } else if (event.key === 'Tab' && activeButtonIndex === 2) {
      event.preventDefault()
      buttonsRef.current[0].focus()
      setActiveButtonIndex(0)
    } else if (event.key === 'Tab' && activeButtonIndex === 0) {
      event.preventDefault()
      buttonsRef.current[2].focus()
      setActiveButtonIndex(2)
    }
    if (event.key === 'Enter' || event.key === 'Space') {
      scrollIntoView(
        event as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>
      )
    }
  }

  return (
    <div
      id={`question-${questionIndex}`}
      className={styles.questioncardWrapper}
    >
      <div className={styles.question}>
        <div className={styles.text}>{question}</div>
        <div className={styles.buttonContainer}>
          {answers.map((answer, answerIndex) => (
            <Button
              ref={(el: HTMLButtonElement) => {
                buttonsRef.current[answerIndex] = el
              }}
              value={questionsMap[questionIndex][answerIndex]}
              onClick={scrollIntoView}
              onKeyDown={handleKeyDown}
              variant="light"
              key={answerIndex}
              className={styles.answerButton}
              tabIndex={activeButtonIndex === answerIndex && isActive ? 0 : -1}
            >
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

const questionsMap = [
  [2, 1, 3],
  [2, 1, 3],
  [1, 2, 3],
  [3, 1, 2],
  [2, 1, 3],
  [2, 1, 3],
  [2, 1, 3],
  [3, 1, 2],
  [1, 3, 2],
  [3, 1, 2],
]
