import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faBookJournalWhills,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import FormDialog from "../../Components/dialog";
import { useNavigate } from "react-router-dom";

const data = [
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
  {
    submitted: 10,
    viewed: 300,
    date_published: "8/8/2024",
  },
];

const AdminIndex = ({ setActive }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  return (
    <div className="flex flex-col w-full mx-2 justify-center">
      <div className="flex justify-start border-white p-1 w-full mx-1 bg-white rounded-lg shadow-xl">
        <p className="border py-1 px-1.5 rounded-full mr-1 border-blue">
          <FontAwesomeIcon className="w-6 h-7" icon={faThumbsUp} />
        </p>
        <h1 className="text-true-black font-extrabold text-left ml-1">
          USER FEEDBACK
        </h1>
      </div>

      <div className="flex flex-row justify-between flex-wrap my-4 gap-3 ml-2">
        <div className="flex flex-col bg-white w-[17.5%] py-[3%] justify-center border-white rounded-xl shadow-xl">
          <p
            className="flex justify-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FontAwesomeIcon
              className="w-20 h-28 cursor-pointer"
              icon={faPlus}
            />
          </p>
          <p className="text-true-black font-bold text-center">New Form</p>
        </div>

        {data.map((item, index) => (
          <div
            className="flex flex-col bg-white justify-center border-white rounded-xl shadow-xl mt-auto"
            key={index}
          >
            <p className="flex justify-center bg-[#F5D563] rounded-xl py-2.5 mt-0">
              <FontAwesomeIcon
                className="w-10 h-12 rounded-full bg-white px-3.5 py-2"
                icon={faBookJournalWhills}
              />
            </p>
            <div className="flex flex-col">
              <p className="text-true-black text-left ml-2 font-bold mt-2 text-2xl">
                Delivery
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col text-start ml-2 mt-2 text-grey-dark">
                  <p className="my-1">Submitted</p>
                  <p className="my-1">Viewed</p>
                  <p className="my-1">Date Published</p>
                </div>

                <div className="flex flex-col text-end text-true-black mt-2 mr-2">
                  <p className="my-1">{item.submitted}</p>
                  <p className="my-1">{item.viewed}</p>
                  <p className="my-1">{item.date_published}</p>
                </div>
              </div>
              <button
                className="bg-[#9C27B0] mx-4 text-white rounded p-2 mt-8"
                onClick={() => navigate("view")}
              >
                VIEW SUBMISSION
              </button>
              <div className="flex justify-between my-2.5">
                <button className="bg-[#2E7D32] mx-4 text-white rounded p-2 w-20">
                  EDIT
                </button>
                <button className="bg-[#2196F3] mx-4 text-white rounded p-2 w-20">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FormDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default AdminIndex;
