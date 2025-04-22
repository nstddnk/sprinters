import React from 'react'
import styles from './MainInformation.module.scss'
import { TwitterIcon } from '../../icons/TwitterIcon'
import { FacebookIcon } from '../../icons/FacebookIcon'
import { vehicleImages } from '../../utils/vehicle-images'
import { RightSidebar } from '../right-sidebar/RightSidebar'

export const MainInformation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.articleInfo}>
        <h3 className={styles.title}>Опис перевізника</h3>
        <p className={styles.description}>
          Stripe is a software platform for starting and running internet businesses. Millions of
          businesses rely on Stripe’s software tools to accept payments, expand globally, and manage
          their businesses online. Stripe has been at the forefront of expanding internet commerce,
          powering new business models, and supporting the latest platforms, from marketplaces to
          mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted
          in code and design, not finance. Stripe is built for developers, makers, and creators. We
          work on solving the hard technical problems necessary to build global economic
          infrastructure—from designing highly reliable systems to developing advanced machine
          learning algorithms to prevent fraud.
        </p>
        <h4 className={styles.subtitle}>Ми у соц. мережах</h4>
        <div className={styles.socials}>
          <a
            href="https://twitter.com/stripe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <TwitterIcon />
            <span>twitter.com/stripe</span>
          </a>
          <a
            href="https://facebook.com/StripeHQ"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FacebookIcon />
            <span>facebook.com/StripeHQ</span>
          </a>
        </div>
        <div className={styles.vehiclesGallery}>
          {vehicleImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Вантажівка ${index + 1}`}
              className={styles.vehicleImage}
            />
          ))}
        </div>
      </div>
      <RightSidebar />
    </div>
  )
}
