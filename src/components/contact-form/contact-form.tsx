'use client'

import { useCallback, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Col, Row, Stack } from '../bootstrap/bootstrap'
import styles from './contact-form.module.css'
import { mapContactForm } from '@/utils/mapContactForm'
import { useTranslation } from '@/localization/i18n-client'

//to avoid using any type for option
interface Option {
  value: string
  label: string
}

type Inputs = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

//or in a separate file ?
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    padding: '10px',
    borderRadius: '50px',
    borderStyle: 'solid',
    margin: '10px',
    width: '100%',
    border: 'none',
    fontSize: '12px',
    textTransform: 'uppercase',
  }),
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

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const options = [
    {
      value: t('contact.form.subject.options.0'),
      label: t('contact.form.subject.options.0').toUpperCase(),
    },
    {
      value: t('contact.form.subject.options.1'),
      label: t('contact.form.subject.options.1').toUpperCase(),
    },
    {
      value: t('contact.form.subject.options.2'),
      label: t('contact.form.subject.options.2').toUpperCase(),
    },
    {
      value: t('contact.form.subject.options.3'),
      label: t('contact.form.subject.options.3').toUpperCase(),
    },
    {
      value: t('contact.form.subject.options.4'),
      label: t('contact.form.subject.options.4').toUpperCase(),
    },
  ]

  const placeHolderFields = {
    firstName: t('contact.form.first_name.name'),
    lastName: t('contact.form.last_name.name'),
    email: t('contact.form.email.name'),
    subject: t('contact.form.subject.name'),
  }

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
        <Stack style={{ paddingRight: 16 }}>
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
                      placeholder={placeHolderFields[field.name]}
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
                    placeholder={placeHolderFields[field.name]}
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
                    placeholder={placeHolderFields[field.name]}
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
                  <Select
                    {...rest}
                    value={selectedOption}
                    onChange={(option: SingleValue<Option>) => {
                      setSelectedOption(option as Option)
                      onChange(option?.label)
                    }}
                    styles={customStyles}
                    options={options}
                    placeholder={placeHolderFields['subject']}
                  />
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
                        `contact.form.message.${selectedOption?.value ?? 'collaborate'}.text`
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
