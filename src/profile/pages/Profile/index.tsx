import React from "react";
import styles from "./index.module.scss";
import ProfileTop from "../../components/Profile/ProfileTop";
import OveralBalance from "../../components/Profile/OverallBalance";
import Statistics from "../../components/Profile/Statistics";
import ProfileBottom from "../../components/Profile/ProfileBottom";

const Profile = () => {
  return (
    <div className={styles.root}>
      <ProfileTop />
      <OveralBalance />
      <Statistics />
      <ProfileBottom />
    </div>
  );
};

export default Profile;
