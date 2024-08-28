import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  DatePickerFormComp,
  TimePickerFormComp,
  SwitchComp,
} from "../../../Components/formComponent";
import { feedbackIcons } from "../../../assets/data";
import { iconMapping } from "../../../assets/data";

const RightPanel = ({
  addComponent,
  inputText,
  setInputTextURL,
  dateValue,
  setDateValue,
  timeValue,
  setTimeValue,
  inputSwitch,
  setInputSwitch,
  dateSwitch,
  setSwitchDate,
  timeSwitch,
  setTimeSwitch,
}) => {
  return (
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
                onClick={() => addComponent(item)}
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
          <DatePickerFormComp
            value={dateValue}
            setValue={setDateValue}
            disabled={!dateSwitch}
          />
        </div>
      </div>

      <div className="flex flex-col ml-5 mb-2">
        <div className="flex justify-between items-center">
          <p className="font-inters text-center">Show on a specific time</p>
          <SwitchComp checked={timeSwitch} setChecked={setTimeSwitch} />
        </div>
        <div className="flex mt-2 flex-1 mr-2">
          <TimePickerFormComp
            value={timeValue}
            setValue={setTimeValue}
            disabled={!timeSwitch}
          />
        </div>
      </div>
      <div className="flex flex-grow h-full">
        <p></p>
      </div>
    </div>
  );
};

export default RightPanel;
