import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import testThumbnail from "./profile.png";

export default function Post() {
  const [header, setHeader] = useState("꿈의 오픈 하우스");
  const [content, setContent] = useState(
    "블로그 게시물의 내용을 간략하게 소개하는 짧고 인상적인 부제를 추가하여 독자들의 관심을 유도하세요. 참신하고 흥미로운 블로그 게시물로 독자 및 잠재 고객과 소통하세요. 블로그 게시물..."
  );
  const [category, setCategory] = useState("React");
  const [date, setDate] = useState("2022/07/13");
  const [comment, setComment] = useState(0);

  return (
    <div className={styles.post}>
      <Link to={`/blog/1`} className={styles.thumbnail}>
        <img src={testThumbnail} alt="thumbnail" />
      </Link>
      <div className={styles.description}>
        <div>
          <div className={styles.header}>
            <Link to={`/blog/1`}>{header}</Link>
          </div>
          <Link to={`/blog/1`} className={styles.content}>
            {content}
          </Link>
        </div>
        <div className={styles.footer}>
          <Link to="/blog" className={styles.footerItem}>
            {category}
          </Link>
          <span className={styles.footerItem}>{date}</span>
          <Link to={`/blog/1`} className={styles.footerItem}>
            댓글({comment})
          </Link>
        </div>
      </div>
    </div>
  );
}
