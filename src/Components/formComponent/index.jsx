import { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

const getNextDay = (date) => {
  return date.add(0, "day").utc();
};

export const DatePickerFormComp = ({ value, setValue, disabled }) => {
  const handleDateChange = (newValue) => {
    if (newValue) {
      //   const nextDay = getNextDay(newValue);
      setValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className="flex-grow">
      <DatePicker
        label="Start date"
        renderInput={(params) => <TextField {...params} fullWidth />}
        className="flex-grow"
        value={value ? dayjs(value) : null} // Ensure value is correctly passed
        onChange={handleDateChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export const TimePickerFormComp = ({ value, setValue, disabled }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (value) {
      const istTime = dayjs(value, "HH:mm").tz("Asia/Kolkata");
      setSelectedTime(istTime);
    }
  }, [value]);

  const handleChangeTime = (newValue) => {
    if (newValue) {
      const istTime = dayjs(newValue).tz("Asia/Kolkata");
      setSelectedTime(istTime);
      setValue(istTime.format("HH:mm"));
    } else {
      setSelectedTime(null);
      setValue(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className="w-full">
      <MobileTimePicker
        label="Select Time"
        renderInput={(params) => <TextField {...params} fullWidth />}
        className="flex-grow"
        value={selectedTime} 
        onChange={handleChangeTime}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export const SwitchComp = ({ checked, setChecked }) => {
  const handleChnage = () => {
    setChecked(!checked);
  };
  return (
    <FormGroup className="flex-shrink-0 -mr-5">
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChnage} />}
      />
    </FormGroup>
  );
};
