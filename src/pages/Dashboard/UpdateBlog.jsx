import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import updateBlogData from "../../redux/thunk/updateBlogData";

const UpdateBlog = () => {
  const dispatch = useDispatch();
  const previousblog = useLoaderData();
  const navigate = useNavigate();
  console.log(previousblog);
  const { _id, name, Heading, paragraph, picture, index } = previousblog;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const Heading = form.heading.value;
    const paragraph = form.blog.value;
    const picture = form.picture.value;
    const date = new Date().toJSON();
    const blog = { _id, name, Heading, paragraph, picture, date, index };
    navigate("/dashboard");

    dispatch(updateBlogData(blog));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update YOUR BLOG</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={name}
                readOnly
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
                defaultValue={Heading}
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
                defaultValue={picture}
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
                defaultValue={paragraph}
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

export default UpdateBlog;
