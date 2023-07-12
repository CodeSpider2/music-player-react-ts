import customImage from "../assets/comingSoon.png";
import SideBar from "./SideBar";
import NavBar from "./Navbar";
const Custom503Page = () => {
  return (
    <>
      <main className=" overflow-hidden">
        <NavBar />
        <div className="content h-[100vh] flex">
          <div className="side h-[100vh]">
            <SideBar />
          </div>
          <div className="widget overflow-scroll overflow-x-hidden">
            <div className="content w-[100vw] bg-slate-950 flex  h-[100vh]">
              <div className="texts text-center flex justify-center mx-auto items-center text-white">
                <div className="comingsoon flex text-5xl animate-fadeInOut">
                  {" "}
                  Coming Soon...!
                </div>
                <img
                  src={customImage}
                  alt="503-image"
                  className="flex animate-fadeInOut"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      ;
    </>
  );
};
export default Custom503Page;
