'use client'

import { useCallback, useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Col, Row, Stack } from '../bootstrap/bootstrap'
import styles from './contact-form.module.css'
import { mapContactForm } from '@/utils/mapContactForm'
import { useTranslation } from '@/localization/i18n-client'

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
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: t(``),
      message: '',
    },
  })
  const [loading, setLoading] = useState(false)

  const [subject, setSubject] = useState<string>()

  const updateContactFormData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mapContactForm(getValues())),
      })
      if (response.ok) {
        const data = await response.json()
        if (data.data.success) {
          console.log('Data submitted successfully!')
        } else {
          console.error('Error submitting data:', data.error)
        }
      } else {
        console.error(
          'Failed to submit data. Server returned:',
          response.status
        )
      }
    } catch (error) {
      console.error('Error submitting data:', error)
    }
    setLoading(false)
  }, [setLoading, getValues])

  const onSubmit: SubmitHandler<Inputs> = async () =>
    await updateContactFormData()

  if (!t) {
    return null
  }

  console.log(getValues())

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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
          <Col>
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
          <Col>
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
          <Col>
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
          <Col>
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
                  <option>{t(`contact.form.subject.options.0`)}</option>
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
  )
}
