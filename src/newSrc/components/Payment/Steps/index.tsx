import React from "react";
import styles from "./index.module.scss";

const Steps = () => {
  return (
    <div className={styles.main}>
      <div className={styles.steps}>
        <div className={`${styles.numberBlock} ${styles.active}`}>
          <p className={styles.number}>1</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.numberBlock}>
          <p className={styles.number}>2</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.numberBlock}>
          <p className={styles.number}>3</p>
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>Перевод платежа продавцу</p>
        <p className={styles.description}>Ожидание перевода криптовалюты продавцом</p>
        <p className={styles.description}>Завершено</p>
      </div>
    </div>
  );
};
export default Steps;
