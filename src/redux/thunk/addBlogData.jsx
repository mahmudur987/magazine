import React from "react";
import { addToBlogs } from "../action/action";

const addBlogData = (blog) => {
  console.log(blog);
  return async (dispatch, getState) => {
    let url = "https://moon-tech-server-five.vercel.app/blog";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      blog._id = data.insertedId;
      console.log(blog);
      dispatch(addToBlogs(blog));
    }
  };
};

export default addBlogData;
