/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ProgressSkill from "../Components/progressSkill";
import skills from "../assets/data";

const Skills = ({ setActive }) => {
  useEffect(() => {
    setActive("skills");
  }, [setActive]);

  console.log("skills", skills);

  return (
    <div className="flex flex-col items-center justify-center h-fit mb-6 ml-11 mr-14">
      <h3 className="text-blue font-extrabold text-[17px] capitalize">
        MY SKILLS
      </h3>
      <p className="text-true-black font-mediums text-center mt-2">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="flex flex-row flex-wrap justify-center">
        {skills?.map((item, index) => (
            <ProgressSkill key={index} progress={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
