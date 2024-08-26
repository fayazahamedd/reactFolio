import {
  faPen,
  faThumbsUp,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
import { Edit } from "@mui/icons-material";

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
  // const [inputTextArea, setInputTextArea] = useState("");
  // const [numberRating, setNumberRating] = useState(null);
  // const [startRating, setStartRating] = useState(0);
  // const [emojiRating, setEmojiRating] = useState(null);
  // const [inputTextRating, setInputTextRating] = useState("");
  // const [radioButtonRating, setRadioButtonRating] = useState("");

  const [components, setComponents] = useState([]);
  const [componentStates, setComponentStates] = useState({});
  const [errorStates, setErrorStates] = useState({});

  const [openEditPanel, setOpenEditPanel] = useState(false);
  const [editPanelData, setEditPanelData] = useState([]);

  console.log("components", components);
  console.log("componentStates", componentStates);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  const addComponent = (componentName) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { ...componentName, id: Date.now() },
    ]);
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
  };

  useEffect(() => {
    validateComponents();
  }, [components]);

  const handleOpenEditPanel = (item) => {
    console.log("edit", item);
    setEditPanelData(item);
    setOpenEditPanel(true);
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
        <div className="flex flex-grow flex-col items-center justify-start mt-4 overflow-y-auto">
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
              const componentState = componentStates[component.id] || {};
              const hasError = errorStates[component.id] || false;

              return (
                <div key={component.id} className="relative">
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
            />
          ) : (
            <RightPanel addComponent={addComponent} />
          )}
        </div>
      </div>
      <FormDialog open={open} setOpen={setOpen} isEdit={true} />
    </div>
  );
};

export default CreateForm;
