import { useNavigate } from "react-router-dom";
const Join = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className="join flex flex-col join-background h-screen justify-center">
        <div className="texts flex justify-center items-center text-4xl font-bold text-white ">
          STREAM
        </div>
        <div
          onClick={redirect}
          className="join-text flex justify-center items-center text-white text-2xl sm:mt-10 mt-5 rounded border border-white w-[20%] mx-auto hover:bg-white hover:text-blue-600 hover:font-bold"
        >
          Join
        </div>
      </div>
    </>
  );
};

export default Join;
