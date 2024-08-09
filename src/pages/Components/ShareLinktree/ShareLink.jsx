import React from "react";
import accounts from "../../../assets/accounts.PNG";
import { Link } from "react-router-dom";
const ShareLink = () => {
  return (
    <>
      <div className="bg-sitecolor2 w-100 h-screen">
        <div className="flex items-center justify-between container mx-auto">
          <div className="w-1/2">
            <h1 className="text-textcolor font-rubik font-semibold  text-6xl pb-4">
              Share your Linktree from your Instagram, TikTok, Twitter and other
              bios
            </h1>
            <p className="text-textcolor font-rubik font-medium pb-8">
              Add your unique Linktree URL to all the platforms and places you
              find your audience. Then use your QR code to drive your offline
              traffic online.
            </p>
            <div>
              <Link className="border border-gray-400 bg-gray-400 font-rubik font-medium text-black py-4 px-8 rounded-full hover:bg-gray-300">
                Get Started for free
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-center items-center min-h-screen bg-transparent card-container">
              <div className="card">
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <img src={accounts} alt="account-1-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareLink;
