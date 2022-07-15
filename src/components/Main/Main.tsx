import React from "react";
import Category from "../Category/Category";
import PostList from "../PostList/PostList";
import styles from "./Main.module.css";
import mainIMG from "./test.jpg";

export default function Main(): JSX.Element {
  return (
    <>
      <div className={styles.main}>
        <img src={mainIMG} alt="mainIMG" />
      </div>
      <Category />
      <PostList />
    </>
  );
}
