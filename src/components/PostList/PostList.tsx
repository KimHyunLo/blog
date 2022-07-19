import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Category from "../Category/Category";
import Post, { IPOST } from "../Post/Post";
import styles from "./PostList.module.css";

interface IProps {
  tag: string;
}

export default function PostList(tag: IProps) {
  const tags: string[] = useFetch("http://localhost:3001/category");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (tagRef.current) {
      const tag = tagRef.current.value;

      if (tags.indexOf(tag) > -1) {
        navigate(`/blog/${tag}`);
      } else {
        alert("조재하지 않는 태그입니다.");
      }
    }
  }

  const tagRef = useRef<HTMLInputElement>(null);

  let category: string = "";
  if (tag.tag !== "") {
    category = `?category=${tag.tag}`;
  }
  const posts: IPOST[] = useFetch(`http://localhost:3001/post${category}`);

  return (
    <div className={styles.postList}>
      <Category />
      <div className={styles.flexRight}>
        <form onSubmit={onSubmit} className={styles.search}>
          <input type="text" ref={tagRef} placeholder="검색어를 입력하세요" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
