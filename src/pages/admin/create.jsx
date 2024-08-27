import {
  faPen,
  faThumbsUp,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import FormDialog from "../../Components/dialog";
import {
  TextArea,
  NumbericRating,
  StarRating,
  EmojiRating,
  InputText,
  RadioButton,
  CategoryRating,
} from "./components";
import RightPanel from "./panel/rightPanel";
import EditPanel from "./panel/editPanel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const navigate = useNavigate();
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
  const [components, setComponents] = useState([]);
  const [componentStates, setComponentStates] = useState({});
  const [errorStates, setErrorStates] = useState({});

  const [openEditPanel, setOpenEditPanel] = useState(false);
  const [editPanelData, setEditPanelData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  const addComponent = (componentName) => {
    if (components.length >= 7) {
      toast.warning("Maximum 7 components are allowed.");
      return;
    }
    setComponents((prevComponents) => [
      ...prevComponents,
      { ...componentName, id: Date.now() },
    ]);
    toast.info(`Added ${componentName.text} Locally`);
  };

  const updateComponentState = (id, newState, component) => {
    setComponentStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        ...newState,
        ...component,
      },
    }));
    setErrorStates((prevErrors) => ({
      ...prevErrors,
      [id]: false, // Reset error state on update
    }));
  };

  const validateComponents = () => {
    let hasError = false;
    const newErrorStates = {};

    components.forEach((component) => {
      const componentState = componentStates[component.id];

      if (
        (component.name === "StarRating" && !componentState?.startRating) ||
        (component.name === "NumbericRating" &&
          !componentState?.numberRating) ||
        (component.name === "EmojiRating" && !componentState?.emojiRating)
      ) {
        newErrorStates[component.id] = true;
        hasError = true;
      }
    });

    setErrorStates(newErrorStates);
  };

  const removeComponent = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
    setComponentStates((prevStates) => {
      const { [id]: _, ...remainingStates } = prevStates;
      return remainingStates;
    });
    setErrorStates((prevErrors) => {
      const { [id]: _, ...remainingErrors } = prevErrors;
      return remainingErrors;
    });
    toast.info("Deleted Locally");
  };

  useEffect(() => {
    validateComponents();
  }, [components]);

  const handleOpenEditPanel = (item) => {
    setEditPanelData(item);
    setOpenEditPanel(true);
  };

  const handleSave = () => {
    toast.info("Saved Locally");
  };

  const handlePublish = async () => {
    // Check if at least one component is added
    if (Object.entries(components).length === 0) {
      toast.warning("Please add at least one component");
      return;
    }

    // Check if all component fields are updated
    if (!components.every((component) => component.id in componentStates)) {
      toast.warning("Please update all the fields");
      return;
    }

    // Check if inputText is provided when inputSwitch is enabled
    if (inputSwitch && inputText.length <= 0) {
      toast.warning("Please add Show based on URL conditions");
      return;
    }

    // Check if dateValue is provided when dateSwitch is enabled
    if (dateSwitch && !dateValue) {
      toast.warning("Please add Show based on Date conditions");
      return;
    }

    // Check if timeValue is provided when timeSwitch is enabled
    if (timeSwitch && !timeValue) {
      toast.warning("Please add Show based on Time conditions");
      return;
    }

    // Prepare the rightPanelData and jsonData
    const rightPanelData = {
      inputSwitch: inputSwitch,
      inputText: inputText,
      timeValue: timeValue,
      timeSwitch: timeSwitch,
      dateValue: dateValue,
      dateSwitch: dateSwitch,
      header: heading_name,
    };

    const jsonData = {
      componentData: components,
      rightPanelData: rightPanelData,
    };

    console.log("jsonData", jsonData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback",
        jsonData // Send jsonData instead of feedbackData
      );
      toast.info(response.data.message);
      console.log(response.data.message);
      setComponents([]);
      setComponentStates({});
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Error submitting feedback: " + error.message);
    }
  };

  console.log("components", components);
  console.log("componentStates", componentStates);

  const notify = () => toast.info("Wow so easy!");

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
          <button
            className="bg-[#2196F3] mx-4 text-white rounded p-2 w-20"
            type="button"
            onClick={handleSave}
          >
            SAVE
          </button>
          <button
            className="bg-[#2E7D32] mx-4 text-white text-center rounded p-2 w-24"
            type="submit"
            onClick={handlePublish}
          >
            PUBLISH
          </button>
        </div>
      </div>
      <div className="flex mb-2">
        {/* Center Panel */}
        <div className="flex flex-grow flex-col items-center justify-start mt-4 overflow-y-auto">
          <div className="flex flex-row bg-[#5578F4] items-center justify-between p-2 w-full max-w-[400px]">
            <p className="flex items-center">
              <FontAwesomeIcon
                className="w-3 h-3 cursor-pointer text-white"
                icon={faLessThan}
                onClick={() => navigate("/admin")}
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
          <div className="bg-white flex-col justify-start rounded-md w-full max-w-[400px] py-4 relative">
            <p className="text-center font-serif">Add Dynamic panel</p>

            {components.map((component) => {
              const Component = componentMapping[component.name];
              const componentState = componentStates[component.id] || {};
              const hasError = errorStates[component.id] || false;

              return (
                <Draggable
                  key={component.id}
                  defaultPosition={{ x: 0, y: 0 }}
                  bounds="parent" // Constrain dragging to the parent container
                >
                  <div
                    className="relative"
                    style={{
                      transform: isHovering ? "translateY(10px)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Component
                      {...componentState}
                      updateState={(newState) =>
                        updateComponentState(component.id, newState, component)
                      }
                      hasError={hasError}
                      removeComponent={() => removeComponent(component.id)}
                      handleOpenEditPanel={handleOpenEditPanel}
                      components={components}
                    />
                  </div>
                </Draggable>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start flex-grow max-w-96">
          {openEditPanel ? (
            <EditPanel
              setOpenEditPanel={setOpenEditPanel}
              editPanelData={editPanelData}
              setEditPanelData={setEditPanelData}
              components={components}
              componentStates={componentStates}
              setComponents={setComponents}
              setComponentStates={setComponentStates}
              handleToast={handleSave}
            />
          ) : (
            <RightPanel
              addComponent={addComponent}
              inputText={inputText}
              setInputTextURL={setInputTextURL}
              dateValue={dateValue}
              setDateValue={setDateValue}
              timeValue={timeValue}
              setTimeValue={setTimeValue}
              inputSwitch={inputSwitch}
              setInputSwitch={setInputSwitch}
              dateSwitch={dateSwitch}
              setSwitchDate={setSwitchDate}
              timeSwitch={timeSwitch}
              setTimeSwitch={setTimeSwitch}
            />
          )}
        </div>
      </div>
      <FormDialog open={open} setOpen={setOpen} isEdit={true} />
      <ToastContainer />
    </div>
  );
};

export default CreateForm;
