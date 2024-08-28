import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faBookJournalWhills,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import FormDialog from "../../Components/dialog";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminIndex = ({ setActive }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoadingFetchData, setIsLoadingFetchData] = useState(true);
  const [isErrorFetchData, setIsErrorFetchData] = useState(null);

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setActive("admin");
  }, [setActive]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedback");
      const data = response.data;
      setFeedbacks(data);
      setIsLoadingFetchData(false);
      setIsErrorFetchData(null);
    } catch (err) {
      setIsErrorFetchData(err);
      setIsLoadingFetchData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteClick = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this feedback?"
    );
    if (confirmed) {
      handleDeleteFeedback(id);
    }
  };

  // const handleDeleteFeedback = () => {
  //   toast.success("Deleting feedback")
  // }

  const handleDeleteFeedback = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/feedback/${id}`
      );
      toast.success(response.data.message);
      // Update the UI or state here after deletion if necessary
      fetchData();
    } catch (error) {
      toast.error(
        "Failed to delete feedback:",
        error.response ? error.response.data.error : error.message
      );
    }
  };

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

      <div className="flex flex-row flex-wrap my-4 gap-3 ml-2">
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

        {isLoadingFetchData ? (
          <div className="flex justify-center items-center h-full w-full">
            <div className="animate-spin w-10 h-10 border-4 border-solid border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <>
            {!isLoadingFetchData &&
              isErrorFetchData === null &&
              feedbacks.map((item) => {
                const { header, publishedDate, submitted, viewed } =
                  item.rightPanelData;
                return (
                  <div
                    className="flex flex-col bg-white justify-center border-white rounded-xl shadow-xl mt-auto"
                    key={item._id}
                  >
                    <p className="flex justify-center bg-[#F5D563] rounded-xl py-2.5 mt-0">
                      <FontAwesomeIcon
                        className="w-10 h-12 rounded-full bg-white px-3.5 py-2"
                        icon={faBookJournalWhills}
                      />
                    </p>
                    <div className="flex flex-col px-4">
                      <p className="text-true-black text-left ml-2 font-bold mt-2 text-2xl">
                        {header || "N/A"}
                      </p>
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col text-start ml-2 mt-2 text-grey-dark">
                          <p className="my-1">Submitted</p>
                          <p className="my-1">Viewed</p>
                          <p className="my-1">Date Published</p>
                        </div>
                        <div className="flex flex-col text-end text-true-black mt-2 mr-2">
                          <p className="my-1">{submitted || "N/A"}</p>
                          <p className="my-1">{viewed || "N/A"}</p>
                          <p className="my-1">{publishedDate || "N/A"}</p>
                        </div>
                      </div>
                      <button
                        className="bg-[#9C27B0] mx-4 text-white rounded p-2 mt-4"
                        onClick={() => navigate("view", { state: item })}
                      >
                        VIEW SUBMISSION
                      </button>
                      <div className="flex justify-between my-5">
                        <button className="bg-[#2E7D32] mx-4 text-white rounded p-2 w-20"
                        onClick={() => navigate("edit", { state: item })}
                        >
                          EDIT
                        </button>
                        <button
                          className="bg-[#2196F3] mx-4 text-white rounded p-2 w-20"
                          onClick={() => handleDeleteClick(item._id)}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
      <FormDialog open={open} setOpen={setOpen} />
      <ToastContainer />
    </div>
  );
};

export default AdminIndex;
