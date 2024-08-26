import {
  faPen,
  faPlus,
  faThumbsUp,
  faLessThan,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import FormDialog from "../../Components/dialog";
import { feedbackIcons } from "../../assets/data";
import { iconMapping } from "../../assets/data";
import {
  DatePickerFormComp,
  TimePickerFormComp,
  SwitchComp,
} from "../../Components/formComponent";
import {
  TextArea,
  NumbericRating,
  StarRating,
  EmojiRating,
  InputText,
  RadioButton,
  CategoryRating,
} from "./components";

const componentMapping = {
  TextArea,
  NumbericRating,
  StarRating,
  EmojiRating,
  InputText,
  RadioButton,
  CategoryRating,
};

const CreateForm = ({ setActive }) => {
  const heading_name = localStorage.getItem("heading_name");
  const [open, setOpen] = useState(false);

  // Switch States
  const [inputSwitch, setInputSwitch] = useState(true);
  const [dateSwitch, setSwitchDate] = useState(true);
  const [timeSwitch, setTimeSwitch] = useState(true);

  // Input Field Values
  const [inputText, setInputTextURL] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);

  // Component States
  const [inputTextArea, setInputTextArea] = useState("");
  const [numberRating, setNumberRating] = useState(null);
  const [startRating, setStartRating] = useState(0);
  const [emojiRating, setEmojiRating] = useState(null);
  const [inputTextRating, setInputTextRating] = useState("");
  const [radioButtonRating, setRadioButtonRating] = useState(null);

  const [components, setComponents] = useState([]);
  const [componentStates, setComponentStates] = useState({});

  console.log("components", components);
  console.log("componentStates", componentStates);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  const addComponent = (componentName) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { name: componentName, id: Date.now() },
    ]);
  };

  const removeComponent = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
  };

  const updateComponentState = (id, newState) => {
    const length = Object.entries(componentStates).length;
    console.log(length, "updateComponentState")
    setComponentStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        ...newState,
      },
    }));
  };

  return (
    <div className="flex flex-col w-[100vw] mr-2 overflow-x-hidden">
      <div className="w-full px-1 mx-1 bg-white rounded-lg shadow-md flex justify-between items-center z-10">
        <div className="flex ">
          <p className="border pb-1 px-1.5 rounded-full mr-1 border-blue">
            <FontAwesomeIcon className="w-6 h-7" icon={faThumbsUp} />
          </p>
          <h1 className="text-true-black font-extrabold text-left ml-1">
            USER FEEDBACK
          </h1>
        </div>
        <div className="flex justify-between my-2.5">
          <button className="bg-[#2196F3] mx-4 text-white rounded p-2 w-20">
            SAVE
          </button>
          <button className="bg-[#2E7D32] mx-4 text-white text-center rounded p-2 w-24">
            PUBLISH
          </button>
        </div>
      </div>
      <div className="flex mb-2">
        {/* Center Panel */}
        <div className="flex flex-grow flex-col items-center justify-start mt-4 overflow-y-auto h-[calc(100vh)]">
          <div className="flex flex-row bg-[#5578F4] items-center justify-between p-2 w-full max-w-[400px]">
            <p className="flex items-center">
              <FontAwesomeIcon
                className="w-3 h-3 cursor-pointer text-white"
                icon={faLessThan}
              />
            </p>
            <h1 className="font-light text-white flex-grow text-center ml-2">
              {heading_name}
            </h1>
            <p className="flex items-center ml-2">
              <FontAwesomeIcon
                className="w-3 h-3 cursor-pointer text-white"
                icon={faPen}
                onClick={() => setOpen((prev) => !prev)}
              />
            </p>
          </div>

          {/* Dynamic Panel */}
          <div className="bg-white flex-col justify-start rounded-md w-full max-w-[400px] py-4">
            <p className="text-center font-serif">Add Dynamic panel</p>

            {components.map((component) => {
              const Component = componentMapping[component.name];
              const componentState = componentStates[component.id] || {}; // Get or initialize state for this component

              return (
                <div key={component.id} className="relative">
                  <Component
                    {...componentState}
                    updateState={(newState) =>
                      updateComponentState(component.id, newState)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col bg-white pt-5 shadow-md">
          <h1 className="flex text-true-black font-semibold text-xl ml-4">
            Add Fields
          </h1>

          <div className="flex flex-col mt-2 justify-between">
            {feedbackIcons.map((item, index) => (
              <div className="flex justify-between" key={index}>
                <div className="flex my-[9px] ml-5">
                  <FontAwesomeIcon
                    className="w-5 h-5 mt-0.5"
                    icon={iconMapping[item.icon]}
                  />
                  <p className="ml-2 font-inters text-left">{item.text}</p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    className="w-5 h-5 ml-10 mt-3 mr-2 cursor-pointer text-[#106EA4]"
                    icon={faPlus}
                    onClick={() => addComponent(item.component)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center ml-5">
            <p className="flex font-inters">Show based on URL conditions</p>
            <div className="flex ml-2">
              <SwitchComp checked={inputSwitch} setChecked={setInputSwitch} />
            </div>
          </div>

          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="https://"
              className="ml-5 border-b-2 focus:border-gray-500 focus:outline-none w-full mr-2"
              onChange={(e) => setInputTextURL(e.target.value)}
              disabled={!inputSwitch}
            />
          </div>

          <div className="flex flex-col ml-5 my-2 justify-center">
            <div className="flex justify-between items-center">
              <p className="font-inters text-center">Show on a specific date</p>
              <SwitchComp checked={dateSwitch} setChecked={setSwitchDate} />
            </div>
            <div className="flex mt-2 mr-2">
              <DatePickerFormComp value={dateValue} setValue={setDateValue} disabled={!dateSwitch}/>
            </div>
          </div>

          <div className="flex flex-col ml-5 mb-2">
            <div className="flex justify-between items-center">
              <p className="font-inters text-center">Show on a specific time</p>
              <SwitchComp checked={timeSwitch} setChecked={setTimeSwitch} />
            </div>
            <div className="flex mt-2 flex-1 mr-2">
              <TimePickerFormComp value={timeValue} setValue={setTimeValue} disabled={!timeSwitch}/>
            </div>
          </div>
        </div>
      </div>
      <FormDialog open={open} setOpen={setOpen} isEdit={true} />
    </div>
  );
};

export default CreateForm;
