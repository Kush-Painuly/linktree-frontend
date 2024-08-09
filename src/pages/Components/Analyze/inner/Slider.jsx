import React, { useEffect, useState } from "react";
import "../../card/css/Card.css";
import slide1 from "../../../../assets/sliderimage1.PNG";
import slide2 from "../../../../assets/sliderimage2.PNG";
import slide3 from "../../../../assets/sliderimage3.PNG";
import slide4 from "../../../../assets/sliderimage4.PNG";
import slide5 from "../../../../assets/sliderimage5.PNG";
import slide6 from "../../../../assets/sliderimage6.PNG";
import slide7 from "../../../../assets/sliderimage7.PNG";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      front: slide1,
      text: "selenagomez",
    },
    {
      front: slide2,
      text: "funkynutmeg",
    },
    {
      front: slide3,
      text: "hbo",
    },
    {
      front: slide4,
      text: "comedycentral",
    },
    {
      front: slide5,
      text: "pharrell",
    },
    {
      front: slide6,
      text: "tonyhawk",
    },
    {
      front: slide7,
      text: "laclippers",
    },
    {
      front: slide1,
      text: "selenagomez",
    },
    {
      front: slide4,
      text: "comedycentral",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length * 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="my-8 w-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-4xl h-auto perspective-1000">
        <div
          className="flex w-full h-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <div className="relative w-full h-full">
                <div className="card absolute w-80">
                  {/* Front Side */}
                  <div className="card-content front">
                    <img
                      src={card.front}
                      alt={`Front ${index + 1}`}
                      className="w-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="card-content back flex items-center justify-center">
                    <Link
                      to={card.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white shadow-md text-black px-4 py-2 rounded-full"
                    >
                      {card.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
