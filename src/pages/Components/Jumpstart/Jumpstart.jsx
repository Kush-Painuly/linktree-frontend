import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Jumpstart = () => {
  return (
    <>
      <div>
        <div className="py-16 flex flex-col items-center justify-center gap-8">
          <p className="text-textcolor text-6xl text-center font-extrabold">
            Jumpstart your corner of <br />toady with us
          </p>
          <div className="flex items-center justify-start px-8 py-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="linktree/yourname"
                  className="p-4 rounded-md"
                />
              </div>
              <div>
                <Link className="border border-gray-400 bg-yellow-400 font-rubik font-medium text-black py-4 px-4 rounded-full">
                  Claim your Linktree
                </Link>
              </div>
            </div>
        </div>
        <div className="container mx-auto">
            <Footer/>
        </div>
      </div>
    </>
  );
};

export default Jumpstart;
