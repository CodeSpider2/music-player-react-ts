import React from "react";

interface BoxProps {}

const Box: React.FC<BoxProps> = ({}) => {
  return (
    <>
      <div className="box w-[14rem] h-[16rem] bg-slate-300 rounded-md cursor-pointer hover:opacity-30"></div>
    </>
  );
};

export default Box;
