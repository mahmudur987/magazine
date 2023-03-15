import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSort } from "../../redux/action/action";
import fetchBlogData from "../../redux/thunk/fetchData";
import Blog from "./blog";

const Home = () => {
  const dispatch = useDispatch();
  const { ascending } = useSelector((state) => state.filter);
  const { blogs } = useSelector((state) => state.blog);
  // console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  let content;
  if (ascending) {
    content = blogs
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((blog, idx) => <Blog key={idx} blog={blog} />);
  }

  if (!ascending) {
    content = blogs
      .sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
      .map((blog, idx) => <Blog key={idx} blog={blog} />);
  }

  const activeClass =
    "text-white  bg-indigo-500 border-white border px-3 py-2 rounded-full font-semibold";
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button className={`border px-3 py-2 rounded-full font-semibold `}>
          sort by date
        </button>
        <button
          onClick={() => dispatch(toggleSort(true))}
          className={
            ascending
              ? activeClass
              : "border px-3 py-2 rounded-full font-semibold"
          }
        >
          Last Upload
        </button>
        <button
          onClick={() => dispatch(toggleSort(false))}
          className={
            !ascending
              ? activeClass
              : "border px-3 py-2 rounded-full font-semibold"
          }
        >
          First Upload
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
