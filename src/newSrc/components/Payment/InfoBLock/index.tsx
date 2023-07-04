import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { IOrderInfo } from "../../../interfaces/serviceInterfaces";


interface InfoBlockProps {
  id: number;
  time: string;
}
const InfoBlock = ({id, time} : InfoBlockProps) => {
  const [[m, s], setTime] = React.useState([3, 0]);
  const [over, setOver] = React.useState(false);

  const tick = () => {
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className={styles.main}>
      <div className={styles.number}>
        <p className={styles.title}>Номер сделки</p>
        <p className={styles.value}>{id}</p>
      </div>
      <div className={styles.time}>
        <p className={styles.title}>Время создания</p>
        <p className={`${styles.value} ${styles.timeValue}`}>{time}</p>
      </div>
      <div className={styles.timer}>
        <p className={styles.timerText}>
          {m}:{String(s).length === 1 ? `0${s}` : s}{" "}
        </p>
      </div>
    </div>
  );
};
export default InfoBlock;
