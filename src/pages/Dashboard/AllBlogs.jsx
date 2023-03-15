import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteBlogsData from "../../redux/thunk/deleteBlogsData";
import fetchBlogData from "../../redux/thunk/fetchData";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  // console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogData());
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Blog Title</th>
            <th>Author Name</th>
            <th>Publishd</th>
            <th>UPDATE/DELETE</th>
          </tr>
        </thead>
        <tbody>
          {blogs
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((blog, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{blog.Heading}</td>
                <td>{blog?.name}</td>
                <td>{blog?.date.slice(0, 10)}</td>
                <td>
                  <Link to={`/dashboard/updateblog/${blog._id}`}>
                    <button className="btn btn-sm btn-info">update</button>
                  </Link>
                  <button
                    onClick={() => dispatch(deleteBlogsData(blog._id))}
                    className="btn btn-sm btn-secondary mx-3"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
