import React from 'react'
import styles from './Home.module.scss'
import { Header } from '../../components/header/Header'
import { ProfileInformation } from '../../components/profile-information/ProfileInformation'
import { MainInformation } from '../../components/main-information/MainInformation'
import Employees from '../../components/employees/Employees'
import Services from '../../components/services/Services'
import { Feedback } from '../../components/feedback/Feedback'
import { Footer } from '../../components/footer/Footer'

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <main className={styles.main}>
        <ProfileInformation />
        <MainInformation />
        <Employees />
        <Services />
        <Feedback />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
