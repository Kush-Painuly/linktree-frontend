import React, { useState, useEffect } from "react";
import "./css/Card.css"; 
import cardFront from "../../../assets/cardFront-1.PNG";
import cardBack from "../../../assets/cardBack-1.PNG";
import cardBack2 from "../../../assets/cardBack-2.PNG";
import cardFront2 from "../../../assets/cardFront-2.PNG";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {/* First Card */}
        <div
          className="relative w-64 h-36 perspective-1000 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform ${
              flipped ? "rotate-x-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "hidden" : ""
              }`}
            >
              <img src={cardFront} alt="Front" className="rounded-lg" />
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "" : "hidden"
              } rotate-x-180`}
            >
              <img src={cardBack} alt="Back" className="rounded-lg" />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="relative w-24 h-36 perspective-1000 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform ${
              flipped ? "rotate-x-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "hidden" : ""
              }`}
            >
              <img src={cardFront2} alt="Front" className="rounded-lg" />
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "" : "hidden"
              } rotate-x-180`}
            >
              <img src={cardBack2} alt="Back" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        {/* Second Card */}
        <div
          className="relative w-24 h-36 perspective-1000 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform ${
              flipped ? "rotate-x-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "hidden" : ""
              }`}
            >
              <img src={cardFront2} alt="Front" className="rounded-lg" />
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "" : "hidden"
              } rotate-x-180`}
            >
              <img src={cardBack2} alt="Back" className="rounded-lg" />
            </div>
          </div>
        </div>
        {/* First Card */}
        <div
          className="relative w-64 h-36 perspective-1000 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform ${
              flipped ? "rotate-x-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "hidden" : ""
              }`}
            >
              <img src={cardFront} alt="Front" className="rounded-lg" />
            </div>

            {/* Back Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center backface-hidden ${
                flipped ? "" : "hidden"
              } rotate-x-180`}
            >
              <img src={cardBack} alt="Back" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
