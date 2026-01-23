import React from 'react'
import {testimonialStyles as styles} from '../assets/dummyStyle'
                                                                                                                                                import Testimonialdata from '../assets/Testimonialdata'
                                                                                                                                                import { FaCar } from 'react-icons/fa'
                                                                                                                                                import {GiSteeringWheel} from 'react-icons/gi'

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>

        <div className={styles.headerContainer}>
          <div className={styles.badge}>
            <FaCar className= {`${styles.quoteIcon} m-2`}/>
            <span className={styles.badgeText}>customer Experiences</span>
          </div>


          <h1 className={styles.title}>
            Premium <span className={styles.accentText}>Drive</span> Experiences
          </h1>

          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine}/>
            <GiSteeringWheel className={`${styles.accentText} mx-4`} size={24}/>
             <div className={styles.dividerLine}/>
          </div>
          <p className={styles.subtitle}>
            Hear from our valued customers about their journey with our premium fleet
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
