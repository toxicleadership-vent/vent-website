'use client'

import { useCallback, useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Col, Row, Stack } from '../bootstrap/bootstrap'
import styles from './contact-form.module.css'
import { mapContactForm } from '@/utils/mapContactForm'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}



// TODO: USE i18n

export const ContactForm = ({ lang }: { lang: string }) => {
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
      subject: 'Collaborate',
      message: '',
    },
  })
  const [loading, setLoading] = useState(false)
  const updateContactFormData = useCallback(async (data: Inputs) => {
    setLoading(true);
     await handleOnSubmit(data);
     setLoading(false)
  }, [])

  const handleOnSubmit = async (data: any) => {

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mapContactForm(getValues())),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.data.success) {
          console.log('Data submitted successfully!');
        } else {
          console.error('Error submitting data:', data.error);
        }
      } else {
        console.error('Failed to submit data. Server returned:', response.status);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    await updateContactFormData(data)

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
                required: 'Please provide first name',
                minLength: {
                  value: 3,
                  message: 'Please provide at least 3 characters',
                },
              }}
              render={({ field }) => (
                <>
                  <label hidden>{field.name}</label>
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
                required: 'Please provide last name',
                minLength: {
                  value: 3,
                  message: 'Please provide at least 3 characters',
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
                required: 'Please provide valid email',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
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
              render={({ field }) => (
                <select {...field} className={styles.input}>
                  <option>Collaborate</option>
                  <option>Contribute to research</option>
                  <option>Book a talk or workshop</option>
                  <option>Other</option>
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
              render={({ field }) => (
                <textarea
                  {...field}
                  className={styles.textarea}
                  rows={10}
                  placeholder={field.name}
                />
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
