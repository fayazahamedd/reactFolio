/* eslint-disable no-unused-vars */
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = (props) => {
  // eslint-disable-next-line react/prop-types
  const percentage = props.percentage;

  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={12}
      styles={buildStyles({
        textColor: "#404656",
        trailColor: "#89B8FB",
        pathColor: "#0078ff",
      })}
    />
  );
};

export default CircleProgress;