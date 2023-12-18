'use client'

import { useCallback, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Col, Row, Stack } from '../bootstrap/bootstrap'
import styles from './contact-form.module.css'
import { mapContactForm } from '@/utils/mapContactForm'
import { useTranslation } from '@/localization/i18n-client'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export const ContactForm = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang, 'contact')

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Collaborate',
      message: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const [subject, setSubject] = useState<string>()
  // const { executeRecaptcha } = useGoogleReCaptcha()
  // console.log('RECAPTCHA', executeRecaptcha)
  const updateContactFormData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...mapContactForm(getValues()),
          // gReCaptchaToken,
        }),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.data.success) {
          console.log('Data submitted successfully!')
          setSuccess(true)
        } else {
          console.error('Error submitting data:', data.error)
          setFailed(true)
        }
      } else {
        console.error(
          'Failed to submit data. Server returned:',
          response.status
        )
        setFailed(true)
      }
    } catch (error) {
      console.error('Error submitting data:', error)
      setFailed(true)
    } finally {
      setTimeout(() => {
        setSuccess(false)
        setFailed(false)
      }, 10000)

      setLoading(false)
      reset()
    }
  }, [setLoading, getValues, reset])

  const onSubmit: SubmitHandler<Inputs> = async () =>
    await updateContactFormData()

  if (!t) {
    return null
  }

  return (
    <>
      {success && <p className={styles.errorList}>{t('contact.success')}</p>}
      {failed && <p className={styles.errorList}>{t('contact.error')}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Row>
            {Object.keys(errors).length > 0 && (
              <ul className={styles.errorList}>
                {Object.keys(errors).map((key) => (
                  <li key={key}>{(errors as any)[key].message}</li>
                ))}
              </ul>
            )}
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: t('contact.form.first_name.rules.required'),
                  minLength: {
                    value: 3,
                    message: t('contact.form.first_name.rules.minLength'),
                  },
                }}
                render={({ field }) => (
                  <>
                    <label hidden>{t('contact.form.first_name.name')}</label>
                    <input
                      {...field}
                      className={styles.input}
                      placeholder={field.name}
                      aria-invalid={errors.firstName ? 'true' : 'false'}
                    />
                  </>
                )}
              />
            </Col>
            <Col sm={12} md={6}>
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: t('contact.form.last_name.rules.required'),
                  minLength: {
                    value: 3,
                    message: t('contact.form.last_name.rules.minLength'),
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.input}
                    placeholder={field.name}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                  />
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: t('contact.form.email.rules.required'),
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t('contact.form.email.rules.message'),
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className={styles.input}
                    placeholder={field.name}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                )}
              />
            </Col>
            <Col sm={12} md={6}>
              <Controller
                name="subject"
                control={control}
                render={({ field: { onChange, ...rest } }) => (
                  <select
                    {...rest}
                    onChange={(e) => {
                      setSubject(e.target.value)
                      onChange(e)
                    }}
                    className={styles.input}
                  >
                    <option>
                      {t(`contact.form.subject.options.0`) ?? 'Collaborate'}
                    </option>
                    <option>{t(`contact.form.subject.options.1`)}</option>
                    <option>{t(`contact.form.subject.options.2`)}</option>
                    <option>{t(`contact.form.subject.options.3`)}</option>
                    <option>{t(`contact.form.subject.options.4`)}</option>
                  </select>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Controller
                name="message"
                control={control}
                rules={{
                  required: t('contact.form.message.rules.required'),
                  maxLength: {
                    value: 250,
                    message: t('contact.form.message.rules.maxLength'),
                  },
                }}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      className={styles.textarea}
                      rows={10}
                      placeholder={t(
                        `contact.form.message.${subject ?? 'collaborate'}.text`
                      )}
                    />
                    <small className={styles.textCounter}>
                      <span>{field.value.length}/250</span>
                    </small>
                  </>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col md={{ offset: 9 }}>
              <input
                type="submit"
                className={`${styles.submit} ${loading && styles.disabled}`}
                disabled={loading}
              ></input>
            </Col>
          </Row>
        </Stack>
      </form>
    </>
  )
}
