'use client'

import React, {
  Dispatch,
  useCallback,
  useMemo,
  useReducer,
  useState,
  useEffect,
} from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ProgressBar,
  Row,
  Spinner,
  ToggleButton,
} from '../bootstrap/bootstrap'

import copy from '@/localization/survey/en.json'
import styles from './survey.module.css'
import { useTranslation } from '@/localization/i18n-client'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import {
  QuestionActionKinds,
  QuestionsActions,
  QuestionsState,
  initialState,
  reducer,
} from './survey-reducer'
import Link from 'next/link'
import { Trans } from 'react-i18next'
import { Question } from './question'
type Inputs = {
  age: string
  ethnic: string
  orientation: string
  migrant: string
  location: string
  education: string
}

type FeedbackInputs = {
  like: boolean
  text: string
}

const CalculatingScreen = ({
  state,
  dispatch,
  closeModal,
  lang,
}: {
  state: QuestionsState
  dispatch: Dispatch<QuestionsActions>
  closeModal: any
  lang: string
}) => {
  const { t } = useTranslation(lang, 'survey')
  const [hasQuestionaire, setHasQuestionaire] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [checkedLike, setCheckedLike] = useState(false)
  const [touched, setTouched] = useState(false)

  const scrollIntoView = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget
      let nextSlide
      if (value === 'true') {
        setHasQuestionaire(true)
        nextSlide = document.getElementById(`additionalQuestions`)
      } else {
        nextSlide = document.getElementById(`results`)
      }

      nextSlide?.scrollIntoView({ behavior: 'smooth' })
    },
    []
  )

  const { control, handleSubmit, getValues, reset } = useForm<Inputs>({
    defaultValues: {
      age: t('modal.additionalInfo.age.options.0'),
      ethnic: t('modal.additionalInfo.ethnic.options.0'),
      orientation: t('modal.additionalInfo.orientation.options.0'),
      migrant: t('modal.additionalInfo.migrant.options.0'),
      location: t('modal.additionalInfo.location.options.0'),
      education: t('modal.additionalInfo.education.options.0'),
    },
  })

  const {
    control: feedbackControl,
    getValues: getFeedbackValues,
    reset: resetFeedback,
  } = useForm<FeedbackInputs>({
    defaultValues: {
      text: '',
    },
  })

  const closeSurvey = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      setLoading(true)
      dispatch({
        type: QuestionActionKinds.SAVE_FEEDBACK,
        payload: { ...getFeedbackValues(), like: checkedLike },
      })

      try {
        const response = await fetch('/api/survey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...state,
            feedback: { text: getFeedbackValues().text, like: checkedLike },
          }),
        })
        const resJson = await response.json()
        console.log('response', resJson.data)
        closeModal()
        document.cookie = 'survey=done;expires=2025-01-01'
      } catch (error) {
        console.log('error submiiting')
      } finally {
        setLoading(false)
        resetFeedback()
      }
    },
    [
      closeModal,
      setLoading,
      state,
      checkedLike,
      dispatch,
      getFeedbackValues,
      resetFeedback,
    ]
  )

  const onSubmit: SubmitHandler<Inputs> = async () => {
    dispatch({ type: QuestionActionKinds.SAVE_INFO, payload: getValues() })
    const results = document.getElementById(`results`)
    results?.scrollIntoView({ behavior: 'smooth' })
  }

  const probability = useMemo(() => {
    const { summary } = state.questions
    if (summary <= 16) {
      return 'low'
    } else if (summary <= 23) {
      return 'medium'
    } else {
      return 'high'
    }
  }, [state])

  return (
    <>
      <div
        id={`calculation`}
        tabIndex={-1}
        className={styles.questioncardWrapper}
      >
        <div className={styles.question}>
          <p>{t('modal.calculating')}</p>
          <div className={styles.buttonContainer}>
            <Button value={'true'} onClick={scrollIntoView} variant="light">
              {t('answers.0')}
            </Button>
            <Button value={'false'} onClick={scrollIntoView} variant="light">
              {t('answers.1')}
            </Button>
          </div>
        </div>
      </div>
      {
        <div
          id={'additionalQuestions'}
          tabIndex={-1}
          style={{ visibility: `${hasQuestionaire ? 'visible' : 'hidden'}` }}
          className={`${styles.questioncardWrapper} ${styles.results}`}
        >
          <div className={`${styles.form}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.age.description')}
                  </label>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.age.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.age.options.1')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.age.options.2')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.age.options.3')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.age.options.4')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.age.options.5')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.ethnic.description')}
                  </label>
                  <Controller
                    name="ethnic"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.1')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.2')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.3')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.4')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.5')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.6')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.ethnic.options.7')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.orientation.description')}
                  </label>
                  <Controller
                    name="orientation"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.orientation.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.1')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.2')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.3')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.4')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.5')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.orientation.options.6')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.location.description')}
                  </label>
                  <Controller
                    name="location"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.location.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.location.options.1')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.location.options.2')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.location.options.3')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.location.options.4')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.location.options.5')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.education.description')}
                  </label>
                  <Controller
                    name="education"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.education.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.1')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.2')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.3')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.4')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.5')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.education.options.6')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
                <Col sm={12}>
                  <label className={styles.dropdownLabel}>
                    {t('modal.additionalInfo.migrant.description')}
                  </label>
                  <Controller
                    name="migrant"
                    control={control}
                    render={({ field: { ...rest } }) => (
                      <select {...rest} className={styles.dropdownSelect}>
                        <option>
                          {t('modal.additionalInfo.migrant.options.0')}
                        </option>
                        <option>
                          {t('modal.additionalInfo.migrant.options.1')}
                        </option>
                      </select>
                    )}
                  />
                </Col>
              </Row>
              <Button style={{ marginTop: 20 }} type="submit">
                submit
              </Button>
            </form>
          </div>
        </div>
      }
      <div
        id={`results`}
        tabIndex={-1}
        className={`${styles.questioncardWrapper} ${styles.results}`}
      >
        <div className={`${styles.resultsCard} `}>
          <div className={styles.text}>
            <h3>{t(`modal.result.${probability}.title`)}</h3>
            <p>
              {' '}
              <Trans
                t={t}
                i18nKey={`modal.result.${probability}.text`}
                components={{
                  Link: <Link target="_blank" href={'/support'} />,
                }}
              />
            </p>
          </div>
          <div>
            <p>
              <Trans
                t={t}
                i18nKey={'modal.end'}
                components={{
                  Link: <Link target="_blank" href={'/contact'} />,
                }}
              />
            </p>
          </div>
          <div>
            <p>{t('modal.feedback.text')}</p>
            <form>
              <div className={styles.buttonContainer}>
                <ButtonGroup style={{ padding: '10px 0' }}>
                  <ToggleButton
                    key={1}
                    id={`toggle-like`}
                    type="checkbox"
                    variant={touched && checkedLike ? 'success' : 'light'}
                    value={'true'}
                    checked={touched && checkedLike}
                    onChange={(e) => {
                      setTouched(true)
                      setCheckedLike(e.currentTarget.checked)
                    }}
                  >
                    <FaRegThumbsUp />
                  </ToggleButton>
                  <ToggleButton
                    key={2}
                    id={`toggle-like`}
                    type="checkbox"
                    variant={touched && !checkedLike ? 'danger' : 'light'}
                    value={'true'}
                    checked={touched && !checkedLike}
                    onChange={(e) => {
                      setTouched(true)
                      setCheckedLike(e.currentTarget.checked)
                    }}
                  >
                    <FaRegThumbsDown />
                  </ToggleButton>
                </ButtonGroup>
              </div>
              <Controller
                name="text"
                control={feedbackControl}
                rules={{
                  required: true,
                  validate: {
                    maxLength: (value: string) => value.length >= 1,
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <textarea
                    style={{ width: '100%' }}
                    placeholder={t('modal.feedback.further')}
                    rows={4}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </form>
          </div>
          <div className={`${styles.buttonContainer}`}>
            <Button
              disabled={isLoading}
              onClick={!isLoading ? closeSurvey : undefined}
              variant="light"
            >
              {isLoading ? t('modal.closingLoading') : t('modal.closingCTA')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export const Survey = ({
  lang,
}: {
  lang: string
  setSurveyState?: () => void
}) => {
  const [show, setShow] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [isSurveyDone, setIsSurveyDone] = useState(false)
  const { t } = useTranslation(lang, 'survey')

  useEffect(() => {
    if (!show) {
      setActiveQuestion(0)
    }
  }, [show])

  return (
    <>
      <div className={styles.surveyEntry}>
        <p>
          {!isSurveyDone ? (
            t('intro.text')
          ) : (
            <Trans
              t={t}
              i18nKey={'thankyou.title'}
              components={{
                Link1: (
                  <Link
                    href="https://www.youtube.com/@TOXIC_LEADERSHIP_VENT"
                    target="_blank"
                  />
                ),
                Link2: <Link href="/experiences" target="_blank" />,
                Link3: <Link href="/getting-informed" target="_blank" />,
                Link4: <Link href="/support" target="_blank" />,
              }}
            />
          )}
        </p>
        {!isSurveyDone && (
          <Button
            bsPrefix="button"
            className={styles.button}
            onClick={() => setShow(true)}
          >
            {t('intro.button.text')}
          </Button>
        )}
      </div>
      <Modal
        scrollable={true}
        bsPrefix=""
        show={show}
        fullscreen
        onHide={() => setShow(false)}
      >
        <ModalHeader
          closeLabel={'closes the survey'}
          className={styles.modalheader}
          bsPrefix="header"
          closeButton
        >
          <div className={styles.modalheaderWrapper}>
            <div className={styles.modalheaderTitle}>{t('modal.title')}</div>
            <div className={styles.progressbar}>
              <ProgressBar
                variant="warning"
                animated
                now={activeQuestion * 10}
              />
            </div>
          </div>
        </ModalHeader>
        <ModalBody bsPrefix="body" className={styles.modalbody}>
          <>
            {copy.questions.map((question, index) => {
              return (
                <Question
                  key={index}
                  question={question.question}
                  answers={copy.answers}
                  index={index}
                  setActiveQuestion={setActiveQuestion}
                  dispatch={dispatch}
                  isActive={activeQuestion === index}
                />
              )
            })}
            <CalculatingScreen
              state={state}
              dispatch={dispatch}
              closeModal={() => {
                setIsSurveyDone(true)
                setShow(false)
              }}
              lang={lang}
            />
          </>
        </ModalBody>
      </Modal>
    </>
  )
}
