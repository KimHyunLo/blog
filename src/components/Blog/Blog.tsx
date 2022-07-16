import React from "react";
import { useParams } from "react-router-dom";
import Category from "../Category/Category";
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
      <Category />
      <PostList tag={tag} />
    </div>
  );
}
