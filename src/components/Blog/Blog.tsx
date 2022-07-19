import React from "react";
import { useParams } from "react-router-dom";
import PostList from "../PostList/PostList";

export default function Blog() {
  let tag: string = "";
  const category = useParams<{ category: string }>().category;

  if (category === undefined) {
    tag = "";
  } else {
    tag = category;
  }

  return (
    <div>
      <PostList tag={tag} />
    </div>
  );
}
