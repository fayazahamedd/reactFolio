import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faBook,
  faCab,
  faFootball,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const About = ({ setActive }) => {
  useEffect(() => {
    setActive("about");
  }, [setActive]);

  return (
    <>
      <div className="flex flex-row bg-white rounded-2xl ml-11 mr-14 h-[80vh]">
        <div className="flex-shrink-0 h-[77vh] w-1/3">
          <img
            className="rounded-2xl m-2 w-full h-full object-cover"
            src="https://res.cloudinary.com/dcfejifrx/image/upload/v1724485833/feedback/i3kwujw8iyeau71y4iud.jpg"
            alt="img"
          />
        </div>
        <div className="flex ml-10 w-2/3 justify-items-center px-2">
          <div className="relative">
            <p className="uppercase font-bold text-blue mt-5 text-2xl">
              My intro
            </p>
            <p className="font-mediums text-true-black mt-2 text-left font-semibold italic font-w[12px]">
              To become a successful expert in the field of Information
              Technology by channelizing my technical knowledge and skills to
              ensure personal and professional growth and to contribute to the
              prosperity of the organization.
            </p>

            <div className="mt-5 ml-[1.5%] flex flex-row justify-center">
              <div className="flex flex-col items-start">
                <span className="font-bold">Name:</span>
                <span className="font-bold">Location:</span>
                <span className="font-bold">Profile:</span>
                <span className="font-bold">Email:</span>
                <span className="font-bold">Phone:</span>
              </div>

              <div className="flex flex-col items-start ml-4">
                <span className="hover:text-blue">Fayaz Ahamed D</span>
                <span className="hover:text-blue">Bangalore</span>
                <span>
                  <a
                    href="https://github.com/fayazahamedd/Full-Stack"
                    className="hover:text-blue"
                  >
                    Developer
                  </a>
                </span>
                <span>
                  <a
                    href="mailto:connectwithfayazahamed@gmail.com"
                    className="hover:text-blue"
                  >
                    connectwithfayazahamed@gmail.com
                  </a>
                </span>
                <span>
                  <a
                    href="whatsapp://send?text=The text to share!"
                    data-action="share/whatsapp/share"
                    className="hover:text-blue"
                  >
                    +91 9787555277
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-5 h-10 items-center">
              <p className="uppercase font-bold text-blue mb-8">
                Extra curricular activities
              </p>

              <ul className="flex flex-row items-center justify-between mr-2">
                <div className="flex flex-row">
                  <li className="border border-r-8 p-2 rounded-full border-blue w-10 ">
                    <FontAwesomeIcon icon={faMusic} />
                  </li>
                  <span className="ml-2 mt-2 font-bold">Music</span>
                </div>
                <div className="flex flex-row">
                  <li className="border border-r-8 p-2 rounded-full border-blue w-10 ">
                    <FontAwesomeIcon icon={faBiking} />
                  </li>
                  <span className="ml-2 mt-2 font-bold">Bike</span>
                </div>
                <div className="flex flex-row">
                  <li className="border border-r-8 p-2 rounded-full border-blue w-10 ">
                    <FontAwesomeIcon icon={faCab} />
                  </li>
                  <span className="ml-2 mt-2 font-bold">Car</span>
                </div>
                <div className="flex flex-row">
                  <li className="border border-r-8 p-2 rounded-full border-blue w-10 ">
                    <FontAwesomeIcon icon={faFootball} />
                  </li>
                  <span className="ml-2 mt-2 font-bold">Football</span>
                </div>
                <div className="flex flex-row">
                  <li className="border border-r-8 p-2 rounded-full border-blue w-10 ">
                    <FontAwesomeIcon icon={faBook} />
                  </li>
                  <span className="ml-2 mt-2 font-bold">Book</span>
                </div>
              </ul>
            </div>

            <div className="flex mt-[10%] mb-auto text-xl font-medium italic">
              Quotes can come from all sorts of sources, but three of the most
              likely ones you'll use are - Other Blogs
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
