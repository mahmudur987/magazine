import React from "react";
import { removeFromBlogs } from "../action/action";

const deleteBlogsData = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    let url = `https://moon-tech-server-five.vercel.app/blog/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      dispatch(removeFromBlogs(id));
    }
  };
};

export default deleteBlogsData;
