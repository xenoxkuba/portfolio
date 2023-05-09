import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center ">
      <ul className="xl:flex xl:px-80 xl:py-4  border-8 sm:border-2 border-gray-400 sm:rounded-lg bg-gray-300 ">
        <li className="mx-4 ">
          <Link
            className="text-gray-900 hover:text-gray-900 font-bold text-xl px-20 "
            to="/home"
          >
            Home
          </Link>
        </li>
        <li className="mx-4 flex justify center">
          <Link
            className="text-gray-600 hover:text-gray-900 font-bold text-xl px-20 "
            to="/"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
