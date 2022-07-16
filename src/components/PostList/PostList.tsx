import React from "react";
import useFetch from "../../hooks/useFetch";
import Post, { IPOST } from "../Post/Post";
import styles from "./PostList.module.css";

interface IProps {
  tag: string;
}

export default function PostList(tag: IProps) {
  let category: string = "";
  if (tag.tag !== "") {
    category = `?category=${tag.tag}`;
  }
  const posts: IPOST[] = useFetch(`http://localhost:3001/post${category}`);
  console.log(posts);

  return (
    <div className={styles.PostList}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
