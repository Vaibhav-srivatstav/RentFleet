import React from 'react'
import { footerStyles as styles } from '../assets/dummyStyle'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhone, FaStickyNote, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GiCarKey } from 'react-icons/gi'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.topElements}>
                <div className={styles.circle1} />
                <div className={styles.circle2} />
                <div className={styles.roadLine} />
            </div>

            <div className={styles.innerContainer}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link to="/" className='flex item-center'>
                            <div className={styles.logoContainer}>
                                <img src={logo} alt="Logo" className="h-[1em] w-auto block" style={{ display: "block", objectFit: "contain" }} />
                                <span className={styles.logoText}>RentFleet</span>
                            </div>
                        </Link>
                        <p className={styles.description}>Premium vehicle rental service with the latest models and exceptional customer services.</p>
                        <div className={styles.socialIcons}>
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                                <a href="a" key={i} className={styles.socialIcon}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quik Link */}
                    <div>
                        <h3 className={styles.sectionTitle}> Quik Links
                            <span className={styles.underline} />
                        </h3>
                        <ul className={styles.linkList}>
                            {['Home', 'Vehicles', 'Contact Us'].map((link, i) => (
                                <li key={i}>
                                    <a href={link === 'Home' ? '/' : link === 'Contact Us' ? "/contact" : "/vehicle"} className={styles.linkItem}>
                                        <span className={styles.bullet}></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className={styles.sectionTitle}>Contact Us
                            <span className={styles.underline} />
                        </h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaMapMarkedAlt className={styles.contactIcon} />
                                <span>Nauperwa , Jaunpur , PIN 222109</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaPhone className={styles.contactIcon} />
                                <span>+91 8090028409</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <span>srivaibhav630@gmail.com </span>
                            </li>
                        </ul>
                        <div className={styles.hoursContainer}>
                            <h4 className={styles.hoursTitle}>  Business Hours</h4>
                            <div className={styles.hoursText}>
                                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                                <p>Saturday: 9:00 AM - 6:00 PM</p>
                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* NewsLetter */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            Newsletter
                            <span className={styles.underline}></span>
                        </h3>
                        <p className={styles.newsletterText}>
                            Subscribe for special offers and updates
                        </p>
                        <form className='space-y-3' action="">
                            <input type="email" placeholder='Your Email Address' className={styles.input} />
                            <button type='submit' className={styles.subscribeButton}>
                                <GiCarKey className="mr-2 text-lg sm:text-xl" />Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* bottom copyright */}
                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} Rentfleet. All Right reserved.</p>
                    <p className="mt-3 md:mt-0"></p>
                    Designed by 
                    Vaibhav Srivastava
                </div>
            </div>
        </footer>
    )
}

export default Footer
