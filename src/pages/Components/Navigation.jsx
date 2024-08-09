import React from "react";
import { Link } from "react-router-dom";
import linktreelogo from "/linktree-logo.png";
const Navigation = () => {
  return (
    <>
      <header className="fixed z-10 left-16 top-4 h-22 bg-white mt-4 flex items-center justify-between py-4 px-8 rounded-full shadow-xl">
        <div className="w-2/12 flex items-center justify-center">
          <img
            src={linktreelogo}
            alt="linktree-logo-image"
            className="w-2/12"
          />
        </div>
        <nav className="w-1/2">
          <ul className="flex items-center justify-center gap-14">
            <li>
              <Link className="text-gray-500 text-lg">Templates</Link>
            </li>
            <li>
              <Link className="text-gray-500 text-lg">Marketplaces</Link>
            </li>
            <li>
              <Link className="text-gray-500 text-lg">Discover</Link>
            </li>
            <li>
              <Link className="text-gray-500 text-lg">Pricing</Link>
            </li>
            <li>
              <Link className="text-gray-500 text-lg">Learn</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/login"
            className="border border-gray-300 bg-gray-200 text-black hover:bg-gray-300 py-4 px-12 rounded-lg"
          >
            Log In
          </Link>
          <Link
            to="/"
            className="border border-gray-500 bg-gray-800 text-white hover:bg-gray-500 py-4 px-12 rounded-full"
          >
            Sign Up free
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navigation;
