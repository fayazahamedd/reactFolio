import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { emojis } from "../../../assets/data";
import { useEffect, useRef, useState } from "react";

const radioButtonsData = ["Radio 1", "Radio 2", "Radio 3"];
const contentData = ["Bug", "Content", "Other"];

export const useFocusAndError = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = () => {
    if (!value) {
      setError(true);
    }
    setTouched(true);
  };

  const handleClick = (newValue) => {
    setValue(newValue);
    setError(false);
    setTouched(true);
  };

  const focusInput = () => {
    if (inputRef.current) {
      // inputRef.current.focus();
    }
  };

  return {
    value,
    error,
    touched,
    handleBlur,
    handleClick,
    inputRef,
    focusInput,
    setValue,
  };
};

export const TextArea = ({
  inputTextArea,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const { value, setValue, touched, handleBlur, inputRef, focusInput } =
    useFocusAndError(inputTextArea);

  const data = components.filter((item) => item.name === "TextArea");

  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start">{data[0].label}</p>
      <div className="flex-1">
        <textarea
          ref={inputRef}
          type="text"
          className={`border-2 rounded focus:outline-none w-[100%] mr-2 h-24 ${
            !value ? "border-red-500" : "border-[#DBD6D6]"
          }`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            updateState({ inputTextArea: e.target.value });
          }}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex justify-end mr-2">
        <div className="flex-1">
          {!value && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979]"
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const NumbericRating = ({
  numberRating,
  hasError,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "NumbericRating");

  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start mb-3">
        {data[0].label}
      </p>
      <div className="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <p
            key={index}
            className={`border-y-2 border-l-2 border-[#DBD6D6] py-2 px-3 cursor-pointer ${
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
        <div className="flex-1">
          {hasError && (
            <p className="text-red-500 text-sm ml-aut">
              Please provide a numeric rating
            </p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979] "
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979] "
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const StarRating = ({
  startRating,
  hasError,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "StarRating");
  const handleStartRating = (index) => {
    updateState({ startRating: index + 1 });
  };

  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">
        {data[0].label}
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
        <div className="flex-1">
          {hasError && (
            <p className="text-red-500 text-sm ml-aut">
              Please provide a star rating
            </p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979]"
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const EmojiRating = ({
  emojiRating,
  hasError,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "EmojiRating");
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">{data[0].label}</p>
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
        <div className="flex-1">
          {hasError && (
            <p className="text-red-500 text-sm ml-aut">
              Please select an emoji rating
            </p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979]"
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const InputText = ({
  inputTextRating,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "InputText");
  const { value, setValue, touched, handleBlur, inputRef, focusInput } =
    useFocusAndError(inputTextRating);

  useEffect(() => {
    focusInput();
  }, [focusInput]);

  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">{data[0].label}</p>
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          className={`border-2 rounded border-transparent focus:border-gray-500 focus:outline-none w-full mt-2 ${
            touched && !value ? "border-[#EF4444]" : "border-[#DBD6D6]"
          }`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            updateState({ inputTextRating: e.target.value });
          }}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex justify-end mt-2 mr-2">
        <div className="flex-1">
          {touched && !value && (
            <p className="text-red-500 text-sm">This field is required.</p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979]"
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const RadioButton = ({
  radioButtonRating,
  hasError,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "RadioButton");
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start">{data[0].label}</p>
      <div className="flex mt-2">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={radioButtonRating}
            onChange={(e) => updateState({ radioButtonRating: e.target.value })}
          >
            {data[0] &&
              data[0].data &&
              data[0].data.map((item, index) => (
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
      <div className="flex justify-end mt-2 mr-2">
        <div className="flex-1">
          {radioButtonRating === (null || undefined) && (
            <p className="text-red-500 text-sm">Please select an option</p>
          )}
        </div>
        <div className="flex">
          <FontAwesomeIcon
            className="w-4 h-4 cursor-pointer text-[#7b7979]"
            icon={faPen}
            onClick={() => handleOpenEditPanel(data)}
          />
          <FontAwesomeIcon
            className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
            onClick={removeComponent}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export const CategoryRating = ({
  categoryRating,
  updateState,
  removeComponent,
  handleOpenEditPanel,
  components,
}) => {
  const data = components.filter((item) => item.name === "CategoryRating");
  return (
    <div className="flex flex-col justify-start m-2 h-fit p-2 rounded-md shadow-lg">
      <p className="flex justify-start text-sm text-start ">{data[0].label}</p>
      <div className="flex justify-between mr-1 mt-2">
        {data[0] &&
          data[0].data.map((item, index) => (
            <div
              key={index}
              className={`font-lights px-6 py-2 border mt-2 cursor-pointer text-center items-center text-sm ${
                item === categoryRating
                  ? "border-[#5578F4] text-[#5578F4]"
                  : "border-[#DBD6D6]"
              }`}
              onClick={() => updateState({ categoryRating: item })}
            >
              {item}
            </div>
          ))}
      </div>
      <div className="flex justify-end mt-3 mr-1.5">
        <FontAwesomeIcon
          className="w-4 h-4 cursor-pointer text-[#7b7979]"
          icon={faPen}
          onClick={() => handleOpenEditPanel(data)}
        />
        <FontAwesomeIcon
          className="pl-5 w-4 h-4 cursor-pointer text-[#7b7979]"
          onClick={removeComponent}
          icon={faTrash}
        />
      </div>
    </div>
  );
};
