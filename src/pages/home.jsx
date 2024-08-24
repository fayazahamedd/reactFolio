/* eslint-disable react/prop-types */
// pages/Work.jsx
import { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = ({ setActive }) => {
  useEffect(() => {
    setActive("home");
  }, [setActive]);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row mt-1 justify-between">
        <div className="flex flex-col">
          <div className="flex  flex-row align-middle mt-40 ">
            <p className="text-6xl font-extrabold text-[35px]">
              {" "}
              Hi, I am Fayaz Ahamed
            </p>
          </div>

          <h1 className="font-mediums text-[35px] mt-4">
            Ready to
            <span className="slider">
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Collaborate
              </span>
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Develope
              </span>
              <span className="slider__word font-bold text-[35px] text-left ml-2">
                Innovate
              </span>
            </span>
          </h1>

          <div className="flex flex-row">
            <Link to="/projects">
              <button className="bg-blue text-white h-8 w-24 text-center rounded-md mt-4">
                Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="text-blue boder h-8 w-24 border text-center rounded-md mt-4 ml-12 ">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <p>
            <img
              className="h-[85vh]"
              // src="/images/imgaboutNew1.png"
              src="https://res.cloudinary.com/dcfejifrx/image/upload/v1724486650/feedback/gcw8rgqbedbdsqrlhmuj.png"
              alt="Post 1"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
