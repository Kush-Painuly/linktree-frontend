import React from "react";
import Cards from "./inner/Cards/Cards";
import featimg from "../../../assets/feat23.PNG";
const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 gap-8">
      {/* Cards Section */}
      <div className="flex flex-col items-start justify-center gap-8 w-customWidth">
        <div className="bg-textcolor p-6 rounded-xl w-full flex flex-col items-center">
          <div className="p-4 w-full">
            <Cards />
          </div>
          <h3 className="text-sitecolor text-3xl font-bold mt-4 underline">
            Share your content in limitless ways on your Linktree.
          </h3>
        </div>
        <div className="bg-sitecolor5 p-6 rounded-xl w-full flex flex-col items-center">
          <div className="p-4 w-full">
            <Cards  />
          </div>
          <h3 className="text-start text-gray-950 text-3xl font-bold mt-4 underline">
            Sell Products and collect <br /> payments. It's monetization <br /> made simple 
          </h3>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="bg-sitecolor2 p-8 rounded-xl flex flex-col">
        <div className="flex items-center justify-center">
          <img
            src={featimg}
            alt="Featured-Image"
            className="w-[60%] h-auto mb-4"
          />
        </div>
        <h3 className="text-textcolor text-4xl font-bold underline">
          Grow, own, and engage your audience, by unifying them in one place
        </h3>
      </div>
    </div>
  );
};

export default Features;
