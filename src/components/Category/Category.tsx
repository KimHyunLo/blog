import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { IPOST } from "../Post/Post";
import styles from "./Category.module.css";

export default function Category() {
  const posts: IPOST[] = useFetch("http://localhost:3001/post");
  const tags: string[] = useFetch("http://localhost:3001/category");
  const navigate = useNavigate();

  const countPost = (tag: string): number => {
    let count: number = 0;
    posts.map((post) => {
      if (post.category === tag) {
        count++;
      }
      return post;
    });
    return count;
  };

  return (
    <div className={styles.contents}>
      <div className={styles.title}>태그 목록</div>
      <div className={styles.tags}>
        <Link to="/blog" className={styles.tag}>
          전체보기 ({posts.length})
        </Link>
        {tags.map((tag) => (
          <Link
            to={`/blog/${tag}`}
            className={styles.tag}
            key={tag}
            onClick={(tag) => {
              navigate(`/blog/${tag}`);
            }}
          >
            {tag} ({countPost(tag)})
          </Link>
        ))}
      </div>
    </div>
  );
}
