import React from "react";
import Nav from "../Nav/Nav";
import styles from "./Main.module.css"

export default function Main(): JSX.Element {
  return(
    <div className={styles.main}>
      <Nav />
    </div>
  );
}