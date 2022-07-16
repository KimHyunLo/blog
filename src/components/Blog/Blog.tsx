import React from "react";
import { useParams } from "react-router-dom";
import Category from "../Category/Category";
import PostList from "../PostList/PostList";

export default function Blog() {
  let category = useParams<{ category: string }>().category;
  if (category === undefined) {
    category = "";
  }

  return (
    <div>
      <Category />
      <PostList tag={category} />
    </div>
  );
}
