import React from "react";
import BalanceBlock from "../BalanceBlock";
import styles from './index.module.scss'
import RecentTransactions from "../RecentTransactions";

const OveralBalance = () => {
  return (
    <div className={styles.main}>
      <BalanceBlock />
      <RecentTransactions />
    </div>
  );
};

export default OveralBalance;
