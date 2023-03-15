import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToReadList } from "../../redux/action/action";

const Blog = ({ blog }) => {
  // console.log(blog);
  const dispatch = useDispatch();
  const { Heading, picture, paragraph, date, _id } = blog;
  return (
    <div className="card card-compact bg-base-200 shadow-xl">
      <figure>
        <img className=" h-80 w-[100%] rounded-lg" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Heading}</h2>
        <p className="text-left text-sm text-green-900">{date.slice(0, 10)}</p>
        <p className="text-left ">{paragraph.slice(0, 100)}.......</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => dispatch(addToReadList(blog))}
            className=" btn btn-sm btn-outline"
          >
            <Link to={`/blog/${_id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
