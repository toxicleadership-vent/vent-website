'use client'
import {
  Col,
  Image,
  Row,
  Stack,
  Carousel,
  CarouselItem,
} from '@/components/bootstrap/bootstrap'
import { useTranslation } from '@/localization/i18n-client'
import { useState } from 'react'
import { PollQuestion } from './poll-question'
import style from './polls.module.css'

export const PollsContainer = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang, 'home', { keyPrefix: 'home' })
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Stack>
      <Row className={`space-between ${style.questionHeader}`}>
        <Col className={style.flexStart}>
          {t('polls.question', { count: 4, no: activeIndex + 1 })}
        </Col>
        <Col className={style.flexEnd}>
          <button
            className={style.button}
            onClick={() => setActiveIndex((activeIndex + 1) % 4)}
          >
            {t('polls.next')}
            <Image src="/images/home/next-arrow.svg" alt="next" />
          </button>
        </Col>
      </Row>
      <Carousel
        controls={false}
        indicators={false}
        slide={false}
        activeIndex={activeIndex}
      >
        <CarouselItem>
          <PollQuestion lang={lang} index={0} />
        </CarouselItem>
        <CarouselItem>
          <PollQuestion lang={lang} index={1} />
        </CarouselItem>
        <CarouselItem>
          <PollQuestion lang={lang} index={2} />
        </CarouselItem>
        <CarouselItem>
          <PollQuestion lang={lang} index={3} />
        </CarouselItem>
      </Carousel>
    </Stack>
  )
}
