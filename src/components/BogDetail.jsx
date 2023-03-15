import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BlogDetail = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { Heading, picture, paragraph, date, _id } = blog;
  return (
    <div className="card card-compact bg-base-200 shadow-xl w-9/12 mx-auto">
      <figure>
        <img className="w-9/12" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl">{Heading}</h2>
        <p className="text-left text-xl text-green-900">{date}</p>
        <p className="text-left text-2xl">{paragraph}</p>
        <div className="card-actions justify-end">
          <button className=" btn btn-sm btn-outline hidden">
            <Link>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
