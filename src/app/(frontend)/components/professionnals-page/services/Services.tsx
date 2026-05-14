'use client'

import styles from './services.module.css'
import type { Professionnal } from '@/payload-types'
import Paragraph from '../../reusable-ui/paragraph/Paragraph'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '../../reusable-ui/title/Title'
import Button from '../../reusable-ui/button/Button'

type Props = {
  servicesData: NonNullable<Professionnal['services']>
}

export default function Spots({ servicesData }: Props) {
  const slides = [
    servicesData.premiere_image,
    servicesData.deuxieme_image,
    servicesData.troisieme_image,
    servicesData.quatrieme_image,
  ]

  return (
    <section className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.images}>
            <div
              style={
                typeof servicesData.premiere_image === 'object'
                  ? {
                      background: `url(${servicesData.premiere_image.url})`,
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
                typeof servicesData.deuxieme_image === 'object'
                  ? {
                      background: `url(${servicesData.deuxieme_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
          </div>
          <div className={styles.paragraphsContainer}>
            <div className={styles.paragraphAndTitle}>
              <Title title={servicesData.premier_titre} className={null} subtitle={null} />
              <Paragraph
                className={styles.paragraph}
                containButton={false}
                data={servicesData.premier_paragraphe}
                link={''}
                textButton={''}
              />
            </div>
            <div className={styles.paragraphAndTitle}>
              <Title title={servicesData.deuxieme_titre} className={null} subtitle={null} />
              <Paragraph
                className={styles.paragraph}
                containButton={false}
                data={servicesData.deuxieme_paragraphe}
                link={''}
                textButton={''}
              />
            </div>
          </div>

          <div className={styles.images}>
            <div
              className={styles.image}
              style={
                typeof servicesData.troisieme_image === 'object'
                  ? {
                      background: `url(${servicesData.troisieme_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            />
            <div
              className={styles.image}
              style={
                typeof servicesData.quatrieme_image === 'object'
                  ? {
                      background: `url(${servicesData.quatrieme_image.url})`,
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
              style={
                typeof slide === 'object'
                  ? {
                      background: `url(${slide.url})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }
                  : {}
              }
            />
          ))}
        </Swiper>
        <div className="pagination" />
        <Button text={servicesData.cta} link={servicesData.lien} />
      </div>
    </section>
  )
}
