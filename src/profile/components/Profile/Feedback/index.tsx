import React, { useState } from "react";
import styles from "./index.module.scss";
import { ReactComponent as Like } from "../../../../assets/profile/positive.svg";
import { ReactComponent as Dislike } from "../../../../assets/profile/negative.svg";

const Feedback = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className={styles.root}>
      <div className={styles.title}>Обратная связь</div>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.blue}>0%</p>
          <p className={styles.reviews}>Отзывов: 0</p>
        </div>
        <div className={styles.scores}>
          <div className={styles.likes}>
            <Like /> <span>0</span>
          </div>
          <div className={styles.dislikes}>
            <Dislike /> <span>0</span>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <button
          className={`${styles.navBtn} ${
            activeSlide === 0 ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveSlide(0)}
        >
          Все
        </button>
        <button
          className={`${styles.navBtn} ${
            activeSlide === 1 ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveSlide(1)}
        >
          Положительные
        </button>
        <button
          className={`${styles.navBtn} ${
            activeSlide === 2 ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveSlide(2)}
        >
          Отрицательные
        </button>
      </div>
    </div>
  );
};

export default Feedback;
