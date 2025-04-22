import React from 'react'
import styles from './Feedback.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { StarsIcon } from '../../icons/StarsIcon'
import photo1 from '../../global/images/photo1.png'
import photo2 from '../../global/images/photo2.png'

export const Feedback = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.feedbackBlock}>
        <h2 className={styles.title}>
          <span>Що</span> кажуть люди?
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button className={styles.button}>Залишити відгук</Button>
      </div>

      <div className={styles.feedbackCard}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={2}
          height={410}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.aboutMember}>
                <img className={styles.avatar} src={photo1} alt="" />
                <div className={styles.memberInfo}>
                  <p className={styles.name}>Ben Yardley</p>
                  <p className={styles.location}>Київ - Кишинів</p>
                  <p className={styles.publicationDate}>1 May 2023</p>
                </div>
              </div>

              <div className={styles.stars}>
                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <StarsIcon />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.aboutMember}>
                <img className={styles.avatar} src={photo2} alt="" />
                <div className={styles.memberInfo}>
                  <p className={styles.name}>Craig Martin</p>
                  <p className={styles.location}>Львів - Париж</p>
                  <p className={styles.publicationDate}>1 May 2023</p>
                </div>
              </div>

              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              <div className={styles.stars}>
                <StarsIcon />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.aboutMember}>
                <img className={styles.avatar} src={photo1} alt="" />
                <div className={styles.memberInfo}>
                  <p className={styles.name}>Ben Yardley</p>
                  <p className={styles.location}>Київ - Кишинів</p>
                  <p className={styles.publicationDate}>1 May 2023</p>
                </div>
              </div>

              <div className={styles.stars}>
                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <StarsIcon />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.aboutMember}>
                <img className={styles.avatar} src={photo2} alt="" />
                <div className={styles.memberInfo}>
                  <p className={styles.name}>Craig Martin</p>
                  <p className={styles.location}>Львів - Париж</p>
                  <p className={styles.publicationDate}>1 May 2023</p>
                </div>
              </div>

              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              <div className={styles.stars}>
                <StarsIcon />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
