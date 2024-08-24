/* eslint-disable react/prop-types */
// pages/Work.jsx
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Blog = ({ setActive }) => {
  useEffect(() => {
    setActive("blog");
  }, [setActive]);

  return (
    <div className="flex flex-col flex-initial w-full h-full mb-6 ml-11 mr-12 ">
      <h3 className="text-blue font-extrabold text-[17px] capitalize">
        MY BLOGS
      </h3>
      <p className="text-true-black font-mediums text-center mt-2">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="flex flex-row justify-between mr-2 mt-8">
        <div className="flex flex-col w-[30%] shadow-sm">
          <img
            className="h-[60%] w-full object-cover"
            src="../images/post-1.jpg"
            alt="Post 1"
          />
          <p className="text-white font-extrabold text-center bg-blue w-[10%] rounded-md absolute ml-[120px] top-[64%] justify-center">
            TRAVEL
          </p>
          <div className="h-20  bg-white shadow-2xl">
            <p className="text-center font-semibold p-6">
              See more ideas about Travel
            </p>
          </div>
          <div className="h-14 bg-gray-300 shadow-2xl flex items-center">
            <FontAwesomeIcon className="ml-4" icon={faConnectdevelop} />
            <span className="text-blue ml-4">10 Min</span>
          </div>
        </div>

        <div className="flex-col w-[30%]">
          <img
            className="h-[60%] w-full object-cover"
            src="../images/post-2.jpg"
            alt="Post 2"
          />
          <p className="text-white font-extrabold text-center bg-blue w-[10%] rounded-md absolute ml-[120px] top-[64%] justify-center">
            FOOD
          </p>
          <div className="h-20 bg-white shadow-2xl">
            <p className="text-center font-semibold p-6">
              See more ideas about Food
            </p>
          </div>
          <div className="h-14 bg-gray-300 shadow-2xl flex items-center">
            <FontAwesomeIcon className="ml-4" icon={faConnectdevelop} />
            <span className="text-blue ml-4">1000 Min</span>
          </div>
        </div>

        <div className="flex-col w-[30%]">
          <img
            className="h-[60%] w-full object-cover"
            src="../images/post-3.jpg"
            alt="Post 3"
          />
          <p className="text-white font-extrabold text-center bg-blue w-[10%] rounded-md absolute ml-[120px] top-[64%] justify-center">
            DEVELOP
          </p>
          <div className="h-20 bg-white shadow-2xl">
            <p className="text-center font-semibold p-6">
              See more ideas about Develop
            </p>
          </div>
          <div className="h-14 bg-gray-300 shadow-2xl flex items-center">
            <FontAwesomeIcon className="ml-4" icon={faConnectdevelop} />
            <span className="text-blue ml-4">100 Min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;