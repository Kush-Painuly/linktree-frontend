import React from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import account from "../../assets/account-one.png";
import GetStarted from "../Components/Get Started/GetStarted";
import ShareLink from "../Components/ShareLinktree/ShareLink";
import Analyze from "../Components/Analyze/Analyze";
import Features from "../Components/Features/Features";
import ExplorePlans from "../Components/Explore Plans/ExplorePlans";
import FAQ from "../Components/FAQ/FAQ";
import Jumpstart from "../Components/Jumpstart/Jumpstart";
const Home = () => {
  const handleMouseMove = (event) => {
    const card = event.currentTarget.querySelector(".card");
    const { clientX: mouseX, clientY: mouseY } = event;
    const { offsetWidth: cardWidth, offsetHeight: cardHeight } = card;

    // Calculate rotation based on mouse position
    const xRotation = (mouseY / cardHeight - 0.9) * 20; // Rotate between -15 and 15 degrees
    const yRotation = (mouseX / cardWidth - 0.9) * -20; // Rotate between 15 and -15 degrees

    // Set CSS variables for rotation
    card.style.setProperty("--x-rotation", `${xRotation}deg`);
    card.style.setProperty("--y-rotation", `${yRotation}deg`);
  };

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="relative bg-green-900 w-100 h-screen">
        <div className="flex items-center justify-between container mx-auto">
          <div className="w-1/2">
            <h1 className="text-yellow-400 font-rubik font-bold text-5xl p-2">
              Everything you are. In one, simple link in bio.
            </h1>
            <p className="text-yellow-400 font-rubik p-2">
              Join 50M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
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
                <Link className="border border-gray-400 bg-gray-400 font-rubik font-medium text-black py-4 px-4 rounded-full">
                  Claim your Linktree
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div
              className="flex justify-center items-center min-h-screen bg-transparent card-container"
              onMouseMove={handleMouseMove}
            >
              <div className="card">
                <div className="p-6 flex flex-col items-center justify-center h-full">
                  <img src={account} alt="account-1-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GetStarted />
      </div>
      <div>
        <ShareLink />
      </div>
      <div>
        <Analyze />
      </div>
      <div className="bg-sitecolor3">
        <Features />
      </div>
      <div className="bg-sitecolor3 py-12">
        <ExplorePlans />
      </div>
      <div className="bg-sitecolor2">
        <FAQ />
      </div>
      <div className="bg-jumpstartcolor"> 
        <Jumpstart/>
      </div>
    </>
  );
};

export default Home;
