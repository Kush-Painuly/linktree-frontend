import React from "react";
import { Link } from "react-router-dom";
import plans from "../../../assets/plans.PNG";
import plans1 from "../../../assets/plans2.PNG";
import plans3 from "../../../assets/plans3.PNG";
import review from "../../../assets/review.PNG";
const ExplorePlans = () => {
  return (
    <>
      <div className=" py-12 flex flex-col items-center justify-center gap-16">
        <div>
          <p className="text-gray-950 text-5xl text-center font-extrabold">
            The fast, friendly and powerful link in bio tool.
          </p>
        </div>
        <div className="text-center">
          <Link className="border border-textcolor bg-textcolor text-black font-medium hover:bg-pink-300 py-4 px-8 rounded-full ">
            Explore all plans
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12">
        <div className="bg-white p-8 rounded-xl w-[30%]">
          <div className="flex flex-col items-center justify-center gap-16">
            <div>
              <img src={plans3} alt="plans-1-image" />
            </div>
            <div>
              <p className="font-medium text-gray-950 text-center">
                Seamlessly connect your Linktree with the tools you already use.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl w-[30%]">
          <div className="flex flex-col items-center justify-center gap-16">
            <div>
              <img src={plans} alt="plans-1-image" />
            </div>
            <div>
              <p className="font-medium text-gray-950 text-center">
                Customize your Linktree to match your brand. Make it feel like
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl w-[30%]">
          <div className="flex flex-col items-center justify-center gap-16">
            <div className="py-8">
              <img src={plans1} alt="plans-1-image" />
            </div>
            <div>
              <p className="font-medium text-gray-950 text-center">
                Manage, update and schedule content with our quick, easy editor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <p className="text-gray-900 text-5xl text-center font-extrabold">
          As featured in...
        </p>
        <div className="pt-12">
          <div className="flex items-center justify-center gap-12">
            <div>
              <Link className="border border-white bg-white rounded-full py-4 px-20 text-gray-700 text-xl font-bold ">
                Tc
              </Link>
            </div>
            <div>
              <Link className="border border-white bg-white rounded-full py-4 px-20 text-gray-700 text-xl font-medium font-mono uppercase">
                Insider
              </Link>
            </div>
            <div>
              <Link className="border border-white bg-white rounded-full py-4 px-20 text-gray-700 text-xl font-bold font-mono">
                Mashabale
              </Link>
            </div>
            <div>
              <Link className="border border-white bg-white rounded-full py-4 px-20 text-gray-700 text-xl font-bold font-mono uppercase">
                Fortune
              </Link>
            </div>
          </div>
          <div className="text-center pt-12">
            <Link className="border border-white bg-white rounded-full py-4 px-20 text-gray-700 text-xl font-bold font-mono uppercase">
              Forbes
            </Link>
          </div>
        </div>
        <div className="pt-20 pl-36 flex items-center justify-center">
          <img src={review} alt="review-image" />
        </div>
        <h3 className="text-center p-4 text-gray-950 font-bold text-6xl">
          “Linktree simplifies the process for <br /> creators to share multiple
          parts of <br /> themselves in one inclusive link.”
        </h3>
        <div className="text-center">
          <p>Riley Lemon</p>
          <p>Youtube, Content Creator</p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="border border-gray-950 bg-transparent p-4 rounded-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
            </button>
            <button className="border border-gray-950 bg-transparent p-4 rounded-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePlans;
