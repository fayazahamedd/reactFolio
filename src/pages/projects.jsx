/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProjectsCarousel from "../Components/projectCarousel";
import { projectData } from "../assets/data";


const Projects = ({ setActive }) => {
  
  const [maxWordCount, setMaxWordCount] = useState(0);

  useEffect(() => {
    setActive("projects");
    calculateMaxWordCount();
  }, [setActive]);

  const calculateMaxWordCount = () => {
    const maxCount = Math.max(...projectData.map((item) => item.description.split(' ').length));
    setMaxWordCount(maxCount);
  };

  return (
    <div className="flex flex-col items-center justify-between h-fit mb-6 ml-11 mr-14">
      <h3 className="text-blue font-extrabold text-[17px] capitalize">
        MY SKILLS
      </h3>
      <p className="text-true-black font-mediums text-center mt-2">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>
      <div className="flex flex-row flex-wrap justify-between mt-4">
        {projectData.map( (item, index) => (
          <ProjectsCarousel key={index} card={item} index={index} maxLength={maxWordCount} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
