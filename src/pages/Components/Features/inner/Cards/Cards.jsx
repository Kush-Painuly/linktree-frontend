import React, { useEffect, useState } from "react";
import feat1 from "../../../../../assets/feat1.PNG";
import feat2 from "../../../../../assets/feat2.PNG";
import feat3 from "../../../../../assets/feat3.PNG";
import feat4 from "../../../../../assets/feat4.PNG";
import feat5 from "../../../../../assets/feat5.PNG";
import feat6 from "../../../../../assets/feat6.PNG";
import "../css/CardStyle.css";

const cardsdets = [
  { front: feat1, back: feat2 },
  { front: feat3, back: feat4 },
  { front: feat5, back: feat6 },
];

const Card = ({ front, back }) => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlip(true);
    }, 1000); // Flip after 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => setFlip(true);
  const handleMouseLeave = () => setFlip(false);

  return (
    <div
      className="relative w-64 h-32 perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute w-1/2  transition-transform duration-700 ${
          flip ? "rotate-y-180" : "rotate-y-0"
        } transform-style-preserve-3d`}
      >
        <div className="absolute w-full flex items-center justify-center backface-hidden rounded-xl">
          <img src={front} alt="Front" className="w-10/12 " />
        </div>
        <div className="absolute w-full flex items-center justify-center rotate-y-180 backface-hidden rounded-xl">
          <img src={back} alt="Back" className="w-10/12 " />
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex p-6">
      {cardsdets.map((card, index) => (
        <Card key={index} front={card.front} back={card.back} />
      ))}
    </div>
  );
};

export default Cards;
