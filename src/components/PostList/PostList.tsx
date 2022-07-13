import React from "react";
import Post from "../Post/Post";
import styles from "./PostList.module.css"

export default function PostList() {
  return (
    <div className={styles.PostList}>
      <Post />
    </div>
  );
}