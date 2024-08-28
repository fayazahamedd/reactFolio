import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DatePickerFormComp,
  SwitchComp,
  TimePickerFormComp,
} from "../../Components/formComponent";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { emojis } from "../../assets/data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ViewModal = ({ setActive }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialFormDataRightPanel = location.state?.rightPanelData || {};
  const initialFormDataComponent = location.state?.componentData || {};

  const [centralState, setCentralState] = useState(initialFormDataRightPanel);
  const [centralStateComp, setCentralStateComp] = useState(
    initialFormDataComponent
  );

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  const handleInputChangeComp = (fieldName, value) => {
    setCentralStateComp((prevState) => {
      return prevState.map((item) => {
        if (item.text === fieldName) {
          return {
            ...item,
            ...(fieldName === "Star rating" && { startRating: value }),
            ...(fieldName === "Smiley rating" && { emojiRating: value }),
            ...(fieldName === "Single line input" && {
              inputTextRating: value,
            }),
            ...(fieldName === "Radio button" && { radioButtonRating: value }),
            ...(fieldName === "Textarea" && { inputTextArea: value }),
            ...(fieldName === "Numeric rating" && { numberRating: value }),
            ...(fieldName === "Categories" && { categoryRating: value }),
          };
        }
        return item;
      });
    });
  };

  const componentsMap = {
    "Star rating": ({ label, value }) => (
      <div className="flex flex-col mt-2">
        <p className="flex justify-start text-sm text-start">{label}</p>
        <div className="flex mt-3">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`w-8 h-8 cursor-pointer pr-8 ${
                index < value ? "text-[#5578F4]" : "text-[#7b7979]"
              }`}
              onClick={() => handleInputChangeComp("Star rating", index + 1)}
            />
          ))}
        </div>
      </div>
    ),
    "Smiley rating": ({ label, value }) => (
      <div className="flex flex-col mt-2">
        <p className="flex justify-start text-sm text-start">{label}</p>
        <div className="flex">
          {emojis.map((emoji, index) => (
            <FontAwesomeIcon
              key={index}
              icon={emoji.icon}
              className={`w-8 h-8 cursor-pointer pr-8 mt-3 ${
                index === value ? "text-[#5578F4]" : "text-[#7b7979]"
              }`}
              onClick={() => handleInputChangeComp("Smiley rating", index)}
            />
          ))}
        </div>
      </div>
    ),

    "Single line input": ({ label, value }) => (
      <div className="flex flex-col mt-2">
        <p className="flex justify-start text-sm text-start">{label}</p>
        <input
          type="text"
          className={`border-2 rounded focus:border-gray-500 focus:outline-none w-full mt-2 ${
            value ? "border-[#DBD6D6]" : "border-red-500"
          }`}
          value={value}
          onChange={(e) =>
            handleInputChangeComp("Single line input", e.target.value)
          }
        />
      </div>
    ),
    "Radio button": ({ label, value, data }) => (
      <div className="flex flex-col mt-2">
        <p className="flex justify-start text-sm text-start">{label}</p>
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-group"
            name="radio-buttons-group"
            value={value}
            onChange={(e) =>
              handleInputChangeComp("Radio button", e.target.value)
            }
          >
            {data.map((item, index) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
                key={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    ),
    Textarea: ({ label, value }) => (
      <div className="flex flex-col mt-2">
        <p className="flex justify-start text-sm text-start">{label}</p>
        <textarea
          className={`border-2 rounded focus:outline-none w-full h-24 ${
            value ? "border-[#DBD6D6]" : "border-red-500"
          }`}
          value={value}
          onChange={(e) => handleInputChangeComp("Textarea", e.target.value)}
        />
      </div>
    ),

    "Numeric rating": ({ label, value }) => (
      <div className="mt-2">
        <p className="flex justify-start text-sm text-start mb-3">{label}</p>
        <div className="flex mt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <p
              key={index}
              className={`border-y-2 border-l-2 border-[#DBD6D6] py-2 px-[11.3px] cursor-pointer ${
                index === 9 ? "border-r-2" : ""
              } ${
                item === value
                  ? "bg-[#5578F4] text-white font-bold"
                  : "hover:bg-[#DBD6D6]"
              }`}
              onClick={() => handleInputChangeComp("Numeric rating", item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    ),
    Categories: ({ label, value, data }) => (
      <div>
        <p className="flex justify-start text-sm text-start">{label}</p>
        <div className="flex justify-between mr-1 mt-2">
          {data.map((item, index) => (
            <div
              key={index}
              className={`font-lights px-6 py-2 border mt-2 cursor-pointer text-center items-center text-sm ${
                item === value
                  ? "border-[#5578F4] text-[#5578F4]"
                  : "border-[#DBD6D6]"
              }`}
              onClick={() => handleInputChangeComp("Categories", item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  };

  const handleInputChange = (key, value) => {
    setCentralState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const {
    header,
    timeValue,
    dateValue,
    dateSwitch,
    inputSwitch,
    inputText,
    timeSwitch,
  } = centralState;

  const handleSave = async () => {
    const updatedData = {
      componentData: centralStateComp,
      rightPanelData: centralState,
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/api/feedback/${location.state._id}`,
        updatedData
      );
      toast.success(response.data.message);
      const currentPath = window.location.pathname;
      navigate(currentPath, { replace: true });
    } catch (error) {
      toast.error("Failed to update feedback", error.response);
    }
  };

  return (
    <div className="flex flex-col bg-white pt-5 shadow-md w-full m-4 max-w-96">
      <h1 className="flex text-true-black font-semibold text-xl ml-4">
        {header}
      </h1>

      <div className="flex flex-col justify-start m-2 h-fit p-2">
        {centralStateComp.map((item, index) => {
          const Component = componentsMap[item.text];
          return Component ? (
            <Component
              key={index}
              label={item.label}
              value={
                item.startRating ||
                item.emojiRating ||
                item.inputTextRating ||
                item.radioButtonRating ||
                item.inputTextArea ||
                item.numberRating ||
                item.categoryRating
              }
              data={item.data}
              handleInputChangeComp={handleInputChangeComp}
            />
          ) : null;
        })}
      </div>

      <div className="flex flex-col mx-4">
        <div className="flex justify-between items-center ">
          <p className="flex font-inters">Show based on URL conditions</p>
          <div className="flex ml-2">
            <SwitchComp
              checked={inputSwitch}
              setChecked={(checked) =>
                handleInputChange("inputSwitch", checked)
              }
            />
          </div>
        </div>

        <div className="flex">
          <input
            type="text"
            name="name"
            placeholder="https://"
            className="border-b-2 focus:border-gray-500 focus:outline-none w-full mr-2"
            value={inputText}
            onChange={(e) => handleInputChange("inputText", e.target.value)}
            disabled={!inputSwitch}
          />
        </div>

        <div className="flex flex-col my-2 justify-center">
          <div className="flex justify-between items-center">
            <p className="font-inters text-center">Show on a specific date</p>
            <SwitchComp
              checked={dateSwitch}
              setChecked={(checked) => handleInputChange("dateSwitch", checked)}
            />
          </div>
          <div className="flex mt-2 mr-2">
            <DatePickerFormComp
              value={dateValue}
              setValue={(value) => handleInputChange("dateValue", value)}
              disabled={!dateSwitch}
            />
          </div>
        </div>

        <div className="flex flex-col mb-2">
          <div className="flex justify-between items-center">
            <p className="font-inters text-center">Show on a specific time</p>
            <SwitchComp
              checked={timeSwitch}
              setChecked={(checked) => handleInputChange("timeSwitch", checked)}
            />
          </div>
          <div className="flex mt-2 flex-1 mr-2">
            <TimePickerFormComp
              value={timeValue}
              setValue={(value) => handleInputChange("timeValue", value)}
              disabled={!timeSwitch}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end my-2">
        <button
          onClick={handleSave}
          className="px-6 py-2 border rounded-lg text-white bg-blue-600 shadow-md hover:bg-blue-700 ml-2"
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewModal;
