import { faUps } from "@fortawesome/free-brands-svg-icons/faUps";
import {
  faArrowDown,
  faLessThan,
  faThumbsUp,
  faUpDown,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewSubmission = ({ setActive }) => {
  const navigate = useNavigate();

  const [overView, setOverView] = useState(false);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex justify-start border-white mx-1 bg-white rounded-lg shadow-xl py-2">
        <p className="border py-[2px] px-[6px] rounded-full mr-1 border-blue">
          <FontAwesomeIcon className="w-5 h-6 font-bold" icon={faThumbsUp} />
        </p>
        <h1 className="text-true-black font-extrabold text-left ml-1">
          USER FEEDBACK
        </h1>
      </div>

      <div className="flex flex-col bg-white m-6">
        <div className="flex flex-col  text-sm text-center text-white">
          <div className="flex bg-[#5578F4] py-2 rounded-md justify-between">
            <div className="flex">
              <FontAwesomeIcon
                className="w-3 h-3 mt-1 ml-4 cursor-pointer text-2xl"
                icon={faLessThan}
                onClick={() => navigate("/admin")}
              />
              <h3 className="text-sm text-left ml-2">Generic Website Rating</h3>
            </div>

            <div className="flex pr-4">
              <p>Created Date: 12/32/2323</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-6 text-sm text-true-black ml-28 mt-8 text-center font-extrabold">
          <div className="flex">
            <p className="text-4xl">10</p>
            <p className="text-4xl ml-[110px]">10</p>
          </div>

          <div className="flex text-sm font-lights text-grey-dark">
            <p className="text-xs">VIEWS</p>
            <p className="text-xs ml-24">Submitted</p>
          </div>
        </div>

        <div className="flex flex-col text-xs font-semibolds text-left my-6 ml-[12px]">
          <p className="m-1">Page URL</p>
          <p className="m-1">Date: 23/03/2023</p>
          <p className="m-1">Time: 23:03</p>
        </div>

        <div className="flex flex-col text-xl font-extrabold text-left ml-4">
          Feedback List
        </div>

        <div className="flex flex-col mx-3 border mt-4">
          <div className="flex justify-between ">
            <div className="flex py-2 px-1">
              <p className="text-xs text-[#5578F4] text-left">Feedback 1</p>
            </div>
            <div className="flex py-2 px-1">
              <p className="text-xs text-true-black text-left">10/08/2024</p>
              <FontAwesomeIcon
                className="w-3 h-3 mt-[2px] ml-4 cursor-pointer text-2xl"
                icon={overView ? faArrowDown : faArrowUp}
                onClick={() => setOverView((prev) => !prev)}
              />
            </div>
          </div>
          {overView && (
            <div className="flex pl-1">
              <p>afaf</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSubmission;
