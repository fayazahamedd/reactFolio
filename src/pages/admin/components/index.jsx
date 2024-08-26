import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { emojis } from "../../../assets/data";

const radioButtonsData = ["Radio 1", "Radio 2", "Radio 3"];
const contentData = ["Bug", "Content", "Other"];

export const TextArea = ({ inputTextArea, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        Would you like to add a comment?
      </p>
      <div className="flex-1">
        <textarea
          type="text"
          className="border-2 border-[#DBD6D6] rounded border-transparent focus:border-gray-500 focus:outline-none w-[100%] mr-2 h-24"
          value={inputTextArea}
          onChange={(e) => updateState({ inputTextArea: e.target.value })}
        />
      </div>
      <div className="flex justify-end mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const NumbericRating = ({ numberRating, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start mb-3">
        How likely is it that you will recommend us to your family and friends?
      </p>
      <div className="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <p
            key={index}
            className={`border-y-2 border-l-2 border-[#DBD6D6] py-2 px-[11.25px] cursor-pointer ${
              index === 9 ? "border-r-2" : ""
            } ${
              item === numberRating
                ? "bg-[#5578F4] text-white font-bold"
                : "hover:bg-[#DBD6D6]"
            }`}
            onClick={() => updateState({ numberRating: item })}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979] "
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979] "
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const StarRating = ({ startRating, updateState }) => {
  const handleStartRating = (index) => {
    updateState({ startRating: index + 1 });
  };

  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        Give a star rating for the website.
      </p>
      <div className="flex mt-3">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`w-8 h-8 cursor-pointer pr-8 ${
              index < startRating ? "text-[#5578F4]" : "text-[#7b7979]"
            }`}
            onClick={() => handleStartRating(index)}
          />
        ))}
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const EmojiRating = ({ emojiRating, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        What is your opinion of this page?
      </p>
      <div className="flex">
        {emojis.map((emoji, index) => (
          <FontAwesomeIcon
            key={index}
            icon={emoji.icon}
            className={`w-8 h-8 cursor-pointer pr-8 mt-3 ${
              index === emojiRating ? emoji.color : "text-[#7b7979]"
            }`}
            onClick={() => updateState({ emojiRating: index })}
          />
        ))}
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const InputText = ({ inputTextRating, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        What is your opinion of this page?
      </p>
      <div className="flex">
        <input
          type="text"
          className="border-2 border-[#DBD6D6] rounded border-transparent focus:border-gray-500 focus:outline-none w-full mt-2"
          value={inputTextRating}
          onChange={(e) => updateState({ inputTextRating: e.target.value })}
        />
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const RadioButton = ({ radioButtonRating, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        Multiple choice - 1 answer
      </p>
      <div className="flex mt-2">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radioButtonRating}
            onChange={(e) => updateState({ radioButtonRating: e.target.value })}
          >
            {radioButtonsData.map((item, index) => (
              <FormControlLabel
                value={item}
                control={<Radio />}
                label={item}
                key={index}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex justify-end mb-1 mr-2">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export const CategoryRating = ({ categoryRating, updateState }) => {
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        Pick a subject and provide your feedback
      </p>
      <div className="flex justify-between mr-1">
        {contentData.map((item, index) => (
          <div
            key={index}
            className={`font-lights px-6 py-2 border mt-2 cursor-pointer ${
              index === categoryRating
                ? "border-[#5578F4] text-[#5578F4]"
                : "border-[#DBD6D6]"
            }`}
            onClick={() => updateState({ categoryRating: index })}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-3 mr-1.5">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faTrash}
        />
      </div>
    </div>
  );
};
