import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayouts = () => (
  <div>
    <Navbar />

    <div className="drawer drawer-mobile flex  flex-row-reverse">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex-grow ">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button md:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-1/5">
        {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
        <ul className="menu p-4 w-80 bg-base-100 text-blue-600 font-bold">
          <li>
            <Link to={"/dashboard"}>ALL BOLG</Link>
          </li>
          <li>
            <Link to={"/dashboard/addblog"}>ADD BOLG</Link>
          </li>
          <li>
            <Link>USER LIST</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardLayouts;
