/* eslint-disable react/prop-types */
// pages/ImageCarosel.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const ImageCarosel = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const containerStyles = {
    height: "25%",
    width: "25%",
    overflow: "hidden",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: isHovered ? "scale(2.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="flex flex-col m-5" style={containerStyles}>
      <img
        src={card.src}
        alt="Post 1"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={imageStyles}
      />
      <div className="flex justify-center items-center h-12 bg-white">
        <p className="text-blue font-semibold text-center uppercase">
          {card.label}
        </p>
        <FontAwesomeIcon className="ml-2" icon={faPlusCircle} />
      </div>
    </div>
  );
};

export default ImageCarosel;
