import React from 'react'
import styles from './index.module.scss'

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.number}>
        <p className={styles.title}>Номер сделки</p>
        <p className={styles.value}>11ff11f</p>
      </div>
      <div className={styles.time}>
        <p className={styles.title}>Время создания</p>
        <p className={`${styles.value} ${styles.timeValue}`}>02.07.2023 13:19:22</p>
      </div>
      <div className={styles.timer}>
        <p className={styles.timerText}>2:10</p>
      </div>
    </div>
)
}
export default InfoBlock