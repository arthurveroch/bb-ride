'use client'

import styles from './spots.module.css'
import type { HomePage } from '@/payload-types'
import Title from '../../reusable-ui/title/Title'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
  spotsData: NonNullable<HomePage['spots']>
}

export default function Spots({ spotsData }: Props) {
  const slides = [
    spotsData.premiere_image,
    spotsData.deuxieme_image,
    spotsData.troisieme_image,
    spotsData.quatrieme_image,
  ]

  return (
    <section className={styles.spots}>
      <div className={styles.spotsContainer}>
        <Title className={null} title={spotsData.titre} subtitle={spotsData.sous_titre} />
        <div className={styles.contentContainer}>
          <div className={styles.images}>
            <div
              style={
                typeof spotsData.premiere_image === 'object'
                  ? {
                      background: `url(${spotsData.premiere_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
              className={styles.image}
            />
            <div
              className={styles.image}
              style={
                typeof spotsData.deuxieme_image === 'object'
                  ? {
                      background: `url(${spotsData.deuxieme_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
          </div>
          <Paragraph
            className={null}
            containButton={true}
            data={spotsData.paragraphe}
            link={spotsData.lien}
            textButton={spotsData.cta}
          />
          <div className={styles.images}>
            <div
              className={styles.image}
              style={
                typeof spotsData.troisieme_image === 'object'
                  ? {
                      background: `url(${spotsData.troisieme_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
            <div
              className={styles.image}
              style={
                typeof spotsData.quatrieme_image === 'object'
                  ? {
                      background: `url(${spotsData.quatrieme_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
          </div>
        </div>
        <Swiper
          className={styles.sliderWrapper}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, el: '.pagination' }}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              className={styles.slide}
              key={index}
              style={typeof slide === 'object' ? { background: `url(${slide.url})` } : {}}
            />
          ))}
        </Swiper>
        <div className="pagination" />
      </div>
    </section>
  )
}
