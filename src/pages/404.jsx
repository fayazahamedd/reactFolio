import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <img
      className="h-[85vh] mt-4 items-center w-[50vw] rounded-2xl cursor-pointer"
      src="https://res.cloudinary.com/dcfejifrx/image/upload/v1724485797/feedback/f1cwlrbpwq6gk50gtrtp.jpg"
      alt="Post 1"
      onClick={() => navigate("/home")}
    />
  );
};

export default Error;
