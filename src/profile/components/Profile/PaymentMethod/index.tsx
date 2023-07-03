import React, { useState } from "react";
import styles from "./index.module.scss";
import TextButton from "../../UI/TextButton";
import ContentBlock from "../../UI/ContentBlock";
import { ReactComponent as HideLight } from "../../../../assets/profile/hide-light.svg";
import { ReactComponent as HideOpenLight } from "../../../../assets/profile/hide-open-light.svg";
import { ReactComponent as Info } from "../../../../assets/profile/info.svg";

const PaymentMethod = () => {
  const [isHideActive, setIsHideActive] = useState(true);
  return (
    <div className={styles.root}>
      <div className={styles.title}>Способ(-ы) оплаты для P2P</div>
      <div className={styles.content}>
        <p className={styles.text}>
          Способы оплаты для P2P: при продаже криптовалюты добавленный Вами
          способ оплаты будет показан покупателю в качестве доступного способа
          для совершения платежа. Убедитесь, что имя владельца счета
          соответствует подтвержденному Вами имени на Exnode P2P. Можно добавить
          до 20 способов оплаты.
        </p>
        <TextButton text="Добавить способ оплаты" width={207} />
      </div>
      <ContentBlock className={styles.bottom}>
        <div className={styles.paymentMethod}>
          <TextButton text="QIWI" className={styles.wallet} />
          <TextButton text="Удалить" className={styles.delete} />
        </div>
        <div className={styles.info}>
          <div className={styles.fio}>
            <p className={styles.fioTitle}>Фамилия Имя</p>
            <div className={styles.userName}>
              <p className={styles.fioBody}>Naumov Pavel</p>
              {isHideActive ? (
                <HideLight onClick={() => setIsHideActive((prev) => !prev)} />
              ) : (
                <HideOpenLight
                  onClick={() => setIsHideActive((prev) => !prev)}
                />
              )}
              <Info />
            </div>
          </div>
          <div className={styles.fio}>
            <p className={styles.fioTitle}>Номер кошелька</p>
            <p className={styles.fioBody}>+7 (916) 545-12-48</p>
          </div>
        </div>
      </ContentBlock>
    </div>
  );
};

export default PaymentMethod;
