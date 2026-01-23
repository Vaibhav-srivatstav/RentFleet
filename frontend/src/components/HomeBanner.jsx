import React from 'react'
import { heroStyles as styles } from '../assets/dummyStyle'

const HomeBanner = () => {
    return (
<div className={styles.container}>    
        <div className={styles.ctaContainer}>
            <div className={styles.ctaCard}>
                <div>
                    <p className={styles.subtitle}>RentFleet</p>
                    <p className={styles.title}>Book Your Ride Anytime, Anywhere</p>
                    <p className={styles.description}>Rent your Dream Car . Transparent pricing .</p>
                </div>
                <a href="/vehicle" className='flex items-center gap-3'>
                    <button className={styles.ctaButton}>
                        <span className={styles.buttonText}> see Fleet </span>
                    </button>
                </a>
                <span className={styles.outline}></span>
            </div>
        </div>
        </div>
    )
}

export default HomeBanner
