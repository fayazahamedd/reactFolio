import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <img
      className="h-[85vh] mt-4 items-center w-[50vw] rounded-2xl cursor-pointer"
      src="../images/404.jpg"
      alt="Post 1"
      onClick={() => navigate("/home")}
    />
  );
};

export default Error;
