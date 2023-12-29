import React from 'react'
import styles from './AboutCard.module.css'
import gift from '../../../Assets/Gift.png'
const AboutCard = ({ value }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={gift} alt='gift' className={styles.img} />
      </div>
      <p className={styles.cardTitle}>{value}% success Rate</p>
      <p className={styles.cardSummary}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Labore laboriosam expedita et quo libero nobis optio sint,
         voluptas eos iste?
      </p>
      <button className={styles.readMore}>Read More</button>
    </div>
  )
}

export default AboutCard;