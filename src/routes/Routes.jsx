import { createBrowserRouter } from "react-router-dom";
import BlogDetail from "../components/BogDetail";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import Main from "../Layouts/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import AllBlogs from "../pages/Dashboard/AllBlogs";
import UpdateBlog from "../pages/Dashboard/updateBlog";
import Home from "../pages/Home/Home";
import ReadList from "../pages/readList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/readlist",
        element: <ReadList />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
        loader: async ({ params }) => {
          return fetch(
            `https://moon-tech-server-five.vercel.app/blog/${params.id}`
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboard",
        element: <AllBlogs />,
      },
      {
        path: "/dashboard/addblog",
        element: <AddBlog />,
      },
      {
        path: "/dashboard/updateblog/:id",
        element: <UpdateBlog />,
        loader: async ({ params }) => {
          return fetch(
            `https://moon-tech-server-five.vercel.app/blog/${params.id}`
          );
        },
      },
    ],
  },
]);
