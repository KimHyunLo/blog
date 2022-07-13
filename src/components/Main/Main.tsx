import React from "react";
import PostList from "../PostList/PostList";
import styles from "./Main.module.css";

export default function Main(): JSX.Element {
  return (
    <>
      <div className={styles.main}></div>
      <PostList />
    </>
  );
}
