import React from "react";
import account2 from "../../../assets/account-2.PNG";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <>
      <div className="bg-[#DFC0DF] w-100 h-screen flex items-center justify-center">
        <div className="w-1/2">
          <div
            className="flex justify-center items-center min-h-screen bg-transparent card-container"
          >
            <div className="card">
              <div className="p-6 flex flex-col items-center justify-center h-full">
                <img src={account2} alt="account-1-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-6xl font-extrabold text-sitecolor pb-8">Create and customize your Linktree in minutes</h2>
          <p className="text-sitecolor text-lg font-medium pb-8">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <Link className="border border-sitecolor bg-sitecolor py-4 px-8 rounded-full font-medium  text-white hover:bg-gray-950">Get Started for free</Link>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
