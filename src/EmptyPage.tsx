import React from "react";

export default function EmptyPage() {
  return (
    <div style={{ fontSize: "1.5em", textAlign: "center", margin: "1em 0" }}>
      <h2 style={{ marginBottom: "1em", fontSize: "1.7em" }}>
        잘못된 접근입니다.
      </h2>
      <button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          history.back();
        }}
        style={{
          border: "0.1em solid green",
          borderRadius: "0.5em",
          padding: "0.3em",
        }}
      >
        돌아가기
      </button>
    </div>
  );
}
