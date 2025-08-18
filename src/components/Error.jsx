import { useNavigate } from "react-router-dom";
import DynamicTitle from "./DynamicTitle";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <DynamicTitle></DynamicTitle>
      <h2 className="text-8xl font-bold text-[#0D3A48]">404</h2>
      <p className="text-2xl mt-4">Oops! Page Not Found</p>
      <p className="text-gray-700 my-6 text-lg">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-[#0D3A48] text-white rounded-xl shadow-md hover:bg-[#0e5267]"
      >
        Go Back To Home
      </button>
    </div>
  );
};

export default Error;
