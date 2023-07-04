import React from "react";
import styles from "./index.module.scss";
import avatar from "../../../../assets/user.png";
import { AiOutlinePaperClip } from "react-icons/ai";
import arrow from "../../../../assets/profile/icons/out.svg";

const Chat = () => {
  return (
    <div className={styles.main}>
      <div className={styles.topBlock}>
        <img src={avatar} alt="" className={styles.avatar} />
        <p className={styles.userName}>User Name</p>
      </div>
      <div className={styles.chatContent}></div>
      <div className={styles.bottomBlock}>
        <div className={styles.inputBlock}>
          <AiOutlinePaperClip className={styles.clip}/>
          <input
            type="text"
            placeholder="Введите сообщение"
            className={styles.input}
          />
        </div>

        <img src={arrow} alt="" className={styles.send} />
      </div>
    </div>
  );
};
export default Chat;
