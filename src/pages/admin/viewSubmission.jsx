import {
  faArrowDown,
  faLessThan,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewSubmission = ({ setActive }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [overView, setOverView] = useState(false);

  console.log("location", location.state);

  const { header, publishedDate, submitted, viewed, inputText, timeValue } =
    location.state.rightPanelData;

  const extractedData =
    location.state &&
    location.state.componentData.map((component) => {
      const rating =
        component.categoryRating ||
        component.startRating ||
        component.emojiRating ||
        component.inputTextRating ||
        component.radioButtonRating ||
        component.inputTextArea ||
        component.numberRating ||
        null;

      return {
        label: component.label,
        text: component.text,
        rating: rating,
      };
    });

  console.log(extractedData);

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
                className="w-3 h-3 mt-[7px] ml-4 cursor-pointer text-2xl"
                icon={faLessThan}
                onClick={() => navigate("/admin")}
              />
              <h3 className="text-base text-left ml-2">{header}</h3>
            </div>

            <div className="flex pr-4 text-base">
              <p>Created Date: {publishedDate || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-6 text-sm text-true-black ml-28 mt-8 text-center font-extrabold">
          <div className="flex">
            <p className="text-4xl">{viewed || "N/A"}</p>
            <p className="text-4xl ml-20">{submitted || "N/A"}</p>
          </div>

          <div className="flex text-sm font-lights text-grey-dark">
            <p className="text-xs ml-3">VIEWS</p>
            <p className="text-xs ml-[86px]">Submitted</p>
          </div>
        </div>

        <div className="flex flex-col text-xs font-medium text-left my-6 ml-[12px]">
          <p className="m-1">Page URL: {inputText || "N/A"}</p>
          <p className="m-1">Date: {publishedDate}</p>
          <p className="m-1">Time: {timeValue !== null ? timeValue : "N/A"}</p>
        </div>

        <div className="flex flex-col text-xl font-extrabold text-left ml-4">
          Feedback List
        </div>

        <div className="flex flex-col mx-3 border border-grey-dark shadow-2xl rounded-md my-4">
          <div className="flex justify-between ">
            <div className="flex py-2 px-1">
              <p className="text-xl font-semibold text-[#5578F4] text-left">{header}</p>
            </div>
            <div className="flex py-2 px-1 mt-1.5">
              <p className="text-xs text-true-black text-left font-semibold">{publishedDate}</p>
              <FontAwesomeIcon
                className="w-3 h-3 mt-[2px] ml-4 cursor-pointer text-2xl"
                icon={!overView ? faArrowDown : faArrowUp}
                onClick={() => setOverView((prev) => !prev)}
              />
            </div>
          </div>
          {overView && (
            <div className="flex flex-col justify-start  pl-1">
              {extractedData.map((item, index) => (
                <div className="mb-2 ml-2"  key={index}>
                  <p className="flex text-sm text-true-black font-mediums">{item.label}</p>
                  <p className="flex text-xs font-semibold text-grey-dark">{item.rating}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSubmission;
