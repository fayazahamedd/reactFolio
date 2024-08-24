/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { data } from "../assets/data";
import ImageCarosel from "../Components/imageCarousel";

const Work = ({ setActive }) => {
  useEffect(() => {
    setActive("work");
  }, [setActive]);

  return (
    <div className="flex flex-col items-center justify-center h-full mb-6 ml-6 mr-8">
      <h3 className="text-blue font-extrabold text-[17px] capitalize">
        MY WORKS
      </h3>
      <p className="text-true-black font-mediums text-center mt-2">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="flex flex-row flex-wrap justify-between w-full">
        {data.map((item, index) => (
            <ImageCarosel key={index} card={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
