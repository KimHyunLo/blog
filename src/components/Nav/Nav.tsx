import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navItem}>메인</Link>
      <Link to="/blog" className={styles.navItem}>블로그</Link>
      <Link to="/about" className={styles.navItem}>소개</Link>
    </nav>
  );
}