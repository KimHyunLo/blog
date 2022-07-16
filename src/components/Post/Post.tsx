import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./Post.module.css";
import testThumbnail from "./profile.png";

interface IProps {
  post: IPOST;
}

export interface IPOST {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
}

export interface IComment {
  id: number;
  count: number;
  content: string;
  date: string;
}

export default function Post({ post: p }: IProps) {
  const [post] = useState(p);
  const comments: IComment[] = useFetch("http://localhost:3001/comment");

  //count post's comments
  function countC(n: number): number {
    let count: number = 0;
    comments.map((comment) => {
      if (comment.id === n) {
        count++;
      }
      return count;
    });

    return count;
  }

  return (
    <div className={styles.post}>
      <Link to={`/blog/1`} className={styles.thumbnail}>
        <img src={testThumbnail} alt="thumbnail" />
      </Link>
      <div className={styles.description}>
        <div>
          <div className={styles.header}>
            <Link to={`/blog/1`}>{post.title}</Link>
          </div>
          <Link to={`/blog/1`} className={styles.content}>
            {post.content}
          </Link>
        </div>
        <div className={styles.footer}>
          <Link to="/blog" className={styles.footerItem}>
            {post.category}
          </Link>
          <span className={styles.footerItem}>{post.date}</span>
          <Link to={`/blog/1`} className={styles.footerItem}>
            댓글({countC(post.id)})
          </Link>
        </div>
      </div>
    </div>
  );
}
