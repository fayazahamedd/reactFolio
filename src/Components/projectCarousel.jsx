/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faAndroid, faEmpire, faHackerrank, faInternetExplorer, faWeebly } from "@fortawesome/free-brands-svg-icons";
import { faCar, faMobile, faMobileAndroid, faMobilePhone, faPlusCircle, faProjectDiagram, faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIconByName = (iconName) => {
  switch (iconName) {
    case "faProjectDiagram":
      return faProjectDiagram;
    case "faMobile":
      return faMobile;
    case "faInternetExplorer":
      return faInternetExplorer;
    case  "faMobileAndroid":
      return faMobile;  
    case "faHackerrank":
      return faHackerrank;
    case "faWeebly":
      return faWeebly;
    case "faCar":
      return faCar;
    case "faAndroid":
      return faAndroid;
    case "faEmpire":
      return faEmpire;
    case "faSmileBeam":
      return faSmileBeam;
    default:
      return faPlusCircle;
  }
}

const ProjectsCarousel = ({ card, index }) => {

    return (
      <div className={`flex flex-col justify-center p-3 my-3 bg-white rounded-xl shadow-lg w-[23%] h-[33%]`}>
        <a href={card.link}>
          <div className="flex flex-row justify-center mt-2">
            <FontAwesomeIcon
              className={`ml-2 ${card.icon === "faMobileAndroid" ? "h-[14%]" : "h-[18%]"} w-[18%] p-3 border-8 rounded-full border-blue hover:-scale-125`}
              icon={getIconByName(card.icon)}
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <p className="font-bold font[18px] text-center hover:text-blue">
              {card.text}
            </p>
          </div>
          <p className="text-center my-4 font-serif"> {card.description} </p>
        </a>
      </div>
    );
  };
  
  export default ProjectsCarousel;

