import React from "react";
import { Link } from "react-router-dom";

const SkillsNav = () => {
  return (
    <Link to="/skills">
      <nav className="flex justify-center  ">
        <ul className="sm:flex  sm:px-20 py-2  border-2 sm:border-2 border-gray-600 rounded-lg bg-gray-400 ">
          <li className="mx-4 ">
            <h2 className="text-gray-600 hover:text-gray-900 font-bold text-xl px-20 ">
              Skills
            </h2>
          </li>
        </ul>
      </nav>
    </Link>
  );
};

export default SkillsNav;
