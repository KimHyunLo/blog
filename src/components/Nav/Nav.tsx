import React from "react";
import styles from "./Nav.module.css";

export default function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <span className={styles.navItem}>메인</span>
      <span className={styles.navItem}>블로그</span>
      <span className={styles.navItem}>소개</span>
    </nav>
  );
}