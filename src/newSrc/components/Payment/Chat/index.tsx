import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import avatar from "../../../../assets/user.png";
import { AiOutlinePaperClip } from "react-icons/ai";
import arrow from "../../../../assets/profile/icons/out.svg";
import { getMessages, sendMessage } from "../../../services/paymentService";
import { IMessages } from "../../../interfaces/serviceInterfaces";

const Chat = () => {
  const [messageText, setMessageText] = useState("");
  const token = localStorage.getItem("token") || "";
  const [messages, setMessages] = useState<IMessages>();
  const getAllMessages = async () => {
    const { data } = await getMessages(1, token.replace(/"/g, ""));
    setMessages(data);
  };

  useEffect(() => {
    const interval = setInterval(() => getAllMessages(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className={styles.main}>
      <div className={styles.topBlock}>
        <img src={avatar} alt="" className={styles.avatar} />
        <p className={styles.userName}>User Name</p>
      </div>
      <div className={styles.chatContent}>
        {messages?.data.map((item, index) => (
          <div className={styles.message} key={index}>
            <p className={styles.messageUser}>{item.user.login}</p>
            <p className={styles.messageText}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.inputBlock}>
          <AiOutlinePaperClip className={styles.clip} />
          <input
            type="text"
            placeholder="Введите сообщение"
            className={styles.input}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </div>

        <img
          src={arrow}
          alt=""
          className={styles.send}
          onClick={() => {
            sendMessage(messageText, 1, token.replace(/"/g, ""));
            setMessageText("");
          }}
        />
      </div>
    </div>
  );
};
export default Chat;
