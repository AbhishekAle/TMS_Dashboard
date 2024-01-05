import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaMapMarkedAlt,
  FaRoute,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col fixed h-screen bg-gray-800 p-4 w-64 space-y-4">
      <Link
        to={"/"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaHome className="text-xl" />
        <span>Home</span>
      </Link>
      <Link
        to={"/dashboard"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaChartBar className="text-xl" />
        <span>Dashboard</span>
      </Link>
      <Link
        to={"/tracking"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaMapMarkedAlt className="text-xl" />
        <span>Tracking</span>
      </Link>
      <Link
        to={"/routes"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaRoute className="text-xl" />
        <span>Routes</span>
      </Link>
      <Link
        to={"/reports"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaClipboardList className="text-xl" />
        <span>Reports</span>
      </Link>
      <Link
        to={"/settings"}
        className="flex items-center text-white p-2 space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <FaCog className="text-xl" />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default Navbar;
