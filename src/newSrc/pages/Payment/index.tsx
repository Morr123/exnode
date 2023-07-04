import React from 'react'
import InfoBlock from '../../components/Payment/InfoBLock'
import styles from './index.module.scss'
import Steps from '../../components/Payment/Steps'
import PayBlock from '../../components/Payment/PayBlock'
import Chat from '../../components/Payment/Chat'

const Payment = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftBlock}>
      <InfoBlock />
      <Steps />
      <PayBlock />
      </div>
      <div className={styles.rightBlock}>
        <Chat/>
      </div>

    </div>
)
}
export default Payment