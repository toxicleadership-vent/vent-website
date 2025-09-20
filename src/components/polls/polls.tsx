'use client'
import {
  Col,
  Image,
  Row,
  Stack,
  Carousel,
  CarouselItem,
} from '@/components/bootstrap/bootstrap'
import { useEffect, useState } from 'react'
import { PollQuestion } from './poll-question'
import style from './polls.module.css'

export const PollsContainer = ({ lang }: { lang: string }) => {
  const [polls, setPolls] = useState<any[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/home?locale=${lang}&populate[polls][populate]=*&populate[metadata][populate]=*`)
      .then(res => res.json())
      .then(json => {
      setPolls(json.data.polls?.questions || [])
    })
  }, [lang])


  return (
    <Stack>
      <Row className={`space-between ${style.questionHeader}`}>
        <Col className={style.flexStart}>
          {`Question ${activeIndex + 1}/${polls.length}`}
        </Col>
        <Col className={style.flexEnd}>
          <button
            className={style.button}
            onClick={() => setActiveIndex((activeIndex + 1) % 4)}
            disabled={polls.length === 0}
          >
            NEXT
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
