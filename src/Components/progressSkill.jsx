/* eslint-disable react/prop-types */
import CircleProgress from "../Components/circularProgressbar";

const ProgressSkill = ({ progress }) => {
  return (
    <div className="bg-white flex flex-col justify-center p-4 items-center rounded-3xl m-5">
      <h5 className="flex font-extrabold text-[20px] text-center justify-center">
        {progress.technology}
      </h5>
      <div className="flex items-center w-28 h-28 mt-2">
        <CircleProgress percentage={progress.percentage} />
      </div>
      <div className="flex flex-row mt-5 justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-center text-blue">
            {progress.last_week}%
          </h1>
          <p className="font-bold">Last Week</p>
        </div>
        <div className="h-12 w-1 bg-true-black flex flex-row mx-2"></div>
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-center text-blue">
            {progress.last_month}%
          </h1>
          <p className="font-bold">Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSkill;
