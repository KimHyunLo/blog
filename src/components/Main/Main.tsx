import React from "react";
import Nav from "../Nav/Nav";
import PostList from "../PostList/PostList";
import styles from "./Main.module.css"

export default function Main(): JSX.Element {
  return(
    <>
      <div className={styles.main}>
        <Nav />
      </div>
      <PostList />
    </>
  );
}