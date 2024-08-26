import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import PropTypes from "prop-types";

const EditPanel = ({
  setOpenEditPanel,
  editPanelData,
  setEditPanelData,
  components = [], // Default to empty array if not provided
  componentStates = {}, // Default to empty object if not provided
  setComponents,
  setComponentStates,
}) => {
  const handlePanelSubmit = () => {
    if (
      !components ||
      !componentStates ||
      !editPanelData ||
      !editPanelData[0]
    ) {
      console.error("Required data is missing.");
      return;
    }

    const editPanelId = editPanelData[0].id;

    // Update components array
    const updatedComponents = components.map((component) =>
      component.id === editPanelId
        ? { ...component, ...editPanelData[0] }
        : component
    );

    // Update componentStates object
    const updatedComponentState = {
      ...componentStates,
      [editPanelId]: {
        ...componentStates[editPanelId], // Preserve existing properties
        ...editPanelData[0], // Update with new values
      },
    };

    setComponents(updatedComponents);
    setComponentStates(updatedComponentState);
  };

  const handleSwitchChange = () => {
    const updatedItem = {
      ...editPanelData[0],
      required: !editPanelData[0].required,
    };

    setEditPanelData([updatedItem]);
  };

  const handleLabelEdit = (val) => {
    const updatedItem = {
      ...editPanelData[0],
      label: val,
    };

    setEditPanelData([updatedItem]);
  };

  const closePanel = () => {
    setOpenEditPanel((prev) => !prev);
  };

  const handleAddErrorInput = (val) => {
    const updatedItem = {
      ...editPanelData[0],
      errorInput: val,
    };
    setEditPanelData([updatedItem]);
  };

  const handleRadioInputChange = (value, index) => {
    const updatedData = [...editPanelData[0].data]; // Copy the existing data array
    updatedData[index] = value; // Update the specific index with the new value

    const updatedItem = {
      ...editPanelData[0], // Copy the existing edit panel data
      data: updatedData, // Update the data array with the modified one
    };

    setEditPanelData([updatedItem]); // Update the state
  };

  console.log("editPanelData", editPanelData);

  return (
    <div className="flex flex-col bg-white pt-5 shadow-md pb-5 h-[100vh] overflow-y-hidden">
      <div className="flex items-center ml-4">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer"
          icon={faLessThan}
          onClick={closePanel}
        />
        <h1 className="flex text-true-black font-semibold text-xl ml-2">
          Back to Add Fields
        </h1>
      </div>

      <div className="flex flex-col mt-4 ml-4">
        <div className="flex justify-start">
          <p className="text-[#2196F3] text-sm">Label</p>
        </div>
        <div className="flex mt-1">
          <input
            type="text"
            name="name"
            value={editPanelData[0]?.label || ""}
            className="border-b-2 border-[#2196F3] focus:border-[#2196F3] focus:outline-none w-full mr-2 flex-grow"
            onChange={(e) => handleLabelEdit(e.target.value)}
          />
        </div>
        <div className="flex mt-3">
          <FormGroup className="flex-shrink-0 -mr-5">
            <FormControlLabel
              control={
                <Switch
                  checked={editPanelData[0]?.required || false}
                  onChange={handleSwitchChange}
                />
              }
            />
          </FormGroup>
        </div>

        {editPanelData[0] &&
        (editPanelData[0].name === "RadioButton" ||
          editPanelData[0].name === "CategoryRating") ? (
          <div className="flex">
            <div className="flex flex-col pb-3">
              <input
                type="text"
                name="name"
                className="border-b-2 border-[#7b7979] focus:bg-grey focus:outline-none w-56 mb-2"
                value={editPanelData[0]?.data?.[0] || ""}
                onChange={(e) => handleRadioInputChange(e.target.value, 0)}
              />
              <input
                type="text"
                name="name"
                className="border-b-2 border-[#7b7979] focus:bg-grey focus:outline-none w-56 mb-2"
                value={editPanelData[0]?.data?.[1] || ""}
                onChange={(e) => handleRadioInputChange(e.target.value, 1)}
              />
              <input
                type="text"
                name="name"
                className="border-b-2 border-[#7b7979] focus:bg-grey focus:outline-none w-56"
                value={editPanelData[0]?.data?.[2] || ""}
                onChange={(e) => handleRadioInputChange(e.target.value, 2)}
              />
            </div>
          </div>
        ) : (
          <>
            {editPanelData[0]?.required && (
              <>
                <div className="flex justify-start mt-2">
                  <p className="text-sm">Error Message</p>
                </div>
                <div className="flex mt-1">
                  <input
                    type="text"
                    name="name"
                    className="border-b-2 border-[#2196F3] focus:border-[#2196F3] focus:outline-none w-full mr-2"
                    value={editPanelData[0]?.errorInput || ""}
                    onChange={(e) => handleAddErrorInput(e.target.value)}
                  />
                </div>
                <div className="flex justify-start text-grey-dark">
                  <p className="text-sm mt-[2px]">Helper Text</p>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className="flex justify-start my-2.5">
        <button
          type="submit"
          className="bg-[#2196F3] mx-4 text-white rounded p-2 w-20"
          onClick={handlePanelSubmit}
        >
          SAVE
        </button>
        <button
          className="bg-[#00000040] outline outline-grey text-true-black text-center rounded p-2 w-24"
          onClick={closePanel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

EditPanel.propTypes = {
  setOpenEditPanel: PropTypes.func.isRequired,
  editPanelData: PropTypes.array.isRequired,
  setEditPanelData: PropTypes.func.isRequired,
  components: PropTypes.array,
  componentStates: PropTypes.object,
  setComponents: PropTypes.func.isRequired,
  setComponentStates: PropTypes.func.isRequired,
};

export default EditPanel;
