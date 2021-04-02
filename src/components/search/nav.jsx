import Logo from "../img/logo.png";
import React, { useRef, memo } from "react";
import styles from "./nav.module.css";

const Nav = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.focus();
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <ul className={styles.nav}>
      <li className={styles.logo_wrap}>
        <i className={`fas fa-bars ${styles.bar}`}></i>
        <img src={Logo} alt="logo" className={styles.logo} onClick={reload} />
      </li>
      <li className={styles.icons_wrap}>
        <div className={`${styles.search_wrap}`}>
          <input
            // value={searchValue}
            type="text"
            className={styles.search_bar}
            maxLength="30"
            ref={inputRef}
            onKeyPress={onKeyPress}
          ></input>
          <button className={styles.search_btn} onClick={onClick} type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <ul className={`${styles.profile_icons}`}>
          <li>
            <i className="far fa-caret-square-up"></i>
          </li>
          <li>
            <i className="fas fa-th-large"></i>
          </li>
          <li>
            <i className="far fa-bell"></i>
          </li>
          <li>
            <i className="far fa-user-circle"></i>
          </li>
        </ul>
      </li>
    </ul>
  );
});

export default Nav;
