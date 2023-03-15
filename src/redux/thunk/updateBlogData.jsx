import React from "react";
import { updateBlogs } from "../action/action";

const updateBlogData = (blog) => {
  console.log(blog);

  return async (dispatch, getState) => {
    let url = "https://moon-tech-server-five.vercel.app/blog";
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    console.log(data);
    if (data.modifiedCount) {
      dispatch(updateBlogs(blog));
    }
  };
};

export default updateBlogData;
