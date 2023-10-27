import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-500 py-4">
      <div className="container mx-auto flex justify-center items-center h-16">
        <ul className="flex space-x-8">
          <li>
            <Link to="/home" className="text-xl font-semibold text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-xl font-semibold text-white hover:text-gray-200">
              Portfolio
            </Link>
          </li>
          {/* Dodaj więcej elementów nawigacji według potrzeb */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
