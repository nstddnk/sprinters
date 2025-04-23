import React from 'react'
import { PatternRight } from '../../icons/PatternRight'
import { PatternLeft } from '../../icons/PatternLeft'
import { Breadcrumb } from 'react-bootstrap'
import { breadcrumbItems } from '../../utils/breadcrumb-Items'
import cn from 'classnames'
import { CompanyLogoIcon } from '../../icons/CompanyLogoIcon'
import { MoonIcon } from '../../icons/MoonIcon'
import { MobileIcon } from '../../icons/MobileIcon'
import { carrierStats } from '../../utils/carrier-stats-items'
import styles from './ProfileInformation.module.scss'

export const ProfileInformation = () => {
  return (
    <div className={styles.profile}>
      <PatternRight className={styles.patternRight} />
      <PatternLeft className={styles.patternLeft} />
      <div className={styles.profileHeader}>
        <Breadcrumb className={styles.breadcrumbs}>
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item
              key={item.href}
              href={item.href}
              className={cn(styles.breadcrumbs, {
                [styles.breadcrumbActive]: index === breadcrumbItems.length - 1,
              })}
            >
              {item.name}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className={styles.content}>
        <div>
          <CompanyLogoIcon />
        </div>
        <div className={styles.informationCompanyBlock}>
          <div className={styles.titleAndCount}>
            <h2 className={styles.titleCompany}>Stripe</h2>
            <div className={styles.counterRides}>
              <span>43 Поїздок</span>
            </div>
          </div>
          <div className={styles.contactInformation}>
            <div className={styles.siteLink}>
              <MoonIcon />
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>https://stripe.com</span>
              </a>
            </div>
            <div className={styles.phoneNumber}>
              <MobileIcon />
              <span>+380 96 123 45 67</span>
            </div>
          </div>
          <div className={styles.carrierStats}>
            {carrierStats.map(({ icon: Icon, label, value }, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  <Icon />
                </div>
                <div className={styles.textBlock}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
