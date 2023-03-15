import React from "react";
import { useSelector } from "react-redux";
import Blog from "../Home/blog";

const ReadList = () => {
  const blogs = useSelector((state) => state.blog.readList);

  //   console.log(blogs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
      {blogs
        ?.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
        .map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
    </div>
  );
};

export default ReadList;
