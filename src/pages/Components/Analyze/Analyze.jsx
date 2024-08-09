import React, { useEffect, useReducer, useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import "../../../index.css";
import Slider from "./inner/Slider";

const Analyze = () => {
    const [currentTextIndex,setCurrentTextIndex] = useState(0);

    const texts =[
        "creators",
        "influencers",
        "small businesses",
        "athletes",
        "models",
        "monitezers",
        "health educators",
        "streamers",
        "vloggers",
        "fitness coaches",
        'ecommerce sellers',
        "retailers",
        "products",
        "welleness leaders",
        "musicians",
        'bands',
        'DJs',
        "Podcasters",
        'fashion designers',
        'culture creators',
        "merch sellers",
        "writers"
    ];

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentTextIndex((prev)=>(prev+1) % texts.length )
        }, 3000);

        return () =>clearInterval(interval);
    },[])
  return (
    <>
      <div className="bg-sitecolor3 py-12 w-100 h-screen flex items-center justify-center">
        <div className="w-1/2">
          <Card />
        </div>
        <div className="w-1/2">
          <h2 className="text-6xl font-extrabold text-gray-950 pb-8">
            Analyze your audience and keep your followers engaged
          </h2>
          <p className="text-gray-950 text-lg font-medium pb-8">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>
          <Link className="border border-pink-300 bg-pink-300 py-4 px-8 rounded-full font-medium  text-black hover:bg-pink-400">
            Get Started for free
          </Link>
        </div>
      </div>
      <div className="bg-sitecolor3 relative">
        <p className="text-gray-950 text-6xl text-center font-extrabold">The only link in bio trusted by 50M+</p>
        <div className="relative pb-12">
        <p className="text-slider text-5xl font-bold text-blue-600">
          {texts[currentTextIndex]}
        </p>
      </div>
      <div className="bg-sitecolor3 pb-16">
        <Slider/>
      </div>
      </div>
    </>
  );
};

export default Analyze;
