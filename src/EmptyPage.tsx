import React from "react";
import { Link } from "react-router-dom";

export default function EmptyPage() {
  const prevPage = document.referrer;
  return (
    <div style={{ fontSize: "1.5em", textAlign: "center", margin: "1em 0" }}>
      <h2 style={{ marginBottom: "1em", fontSize: "1.7em" }}>
        잘못된 접근입니다.
      </h2>
      <Link
        to={prevPage}
        style={{
          border: "0.1em solid green",
          borderRadius: "0.5em",
          padding: "0.3em",
        }}
      >
        돌아가기
      </Link>
    </div>
  );
}
