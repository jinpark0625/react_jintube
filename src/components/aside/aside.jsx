import React from "react";
import styles from "./aside.module.css";

const Aside = (props) => {
  return (
    <aside>
      <ul className={styles.aside_wrap}>
        <li className={styles.aside_menus}>
          <i className="far fa-heart"></i>
          Liked videos
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-grin-squint"></i>
          Trending
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-hand-pointer"></i>
          Subscriptions
        </li>
        <li className={styles.aside_menus}>
          <i className="far fa-sun"></i>
          Setting
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
