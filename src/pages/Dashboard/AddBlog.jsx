import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBlogData from "../../redux/thunk/addBlogData";
import fetchBlogData from "../../redux/thunk/fetchData";

const AddBlog = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  // console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const Heading = form.heading.value;
    const paragraph = form.blog.value;
    const picture = form.picture.value;
    const date = new Date().toJSON();
    const index = blogs.length;
    const blog = { name, Heading, paragraph, picture, date, index };
    console.log(blog);
    dispatch(addBlogData(blog));
    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">ADD YOUR BLOG</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Heading</span>
              </label>
              <input
                name="heading"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pictuure URL </span>
              </label>
              <input
                name="picture"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Blog</span>
              </label>
              <textarea
                name="blog"
                className="textarea textarea-primary"
                placeholder="Blog"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
