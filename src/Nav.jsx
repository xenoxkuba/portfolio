import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 sm:py-4">
      <div className="container mx-auto flex justify-center items-center h-16">
        <div></div>
        <div>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/contact"
                className="text-xl font-semibold text-white hover:text-gray-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-xl font-semibold text-white hover:text-gray-200"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
