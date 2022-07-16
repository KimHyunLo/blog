import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import styles from "./Category.module.css";
import { IPOST } from "../Post/Post";

export default function Category() {
  const posts: IPOST[] = useFetch("http://localhost:3001/post");
  const tags: string[] = useFetch("http://localhost:3001/category");
  const navigate = useNavigate();

  function findTag(tag: React.MouseEvent<HTMLElement>) {
    const tagBtn: string = tag.currentTarget.innerHTML;
    let tagPost: IPOST[] = [];

    posts.map((post) => {
      if (post.category === tagBtn) {
        tagPost.push(post);
      }
      return tagPost;
    });

    navigate(`/blog/${tag}`);
  }

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

  return (
    <div>
      <div className={styles.tags}>
        <form onSubmit={onSubmit} className={styles.search}>
          <input type="text" maxLength={20} ref={tagRef} />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className={styles.tagScroll}>
          {tags.map((tag) => (
            <Link
              to={`/blog/${tag}`}
              className={styles.tag}
              key={tag}
              onClick={(tag) => {
                findTag(tag);
              }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
