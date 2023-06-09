import React from "react";
import Box from "./Box";
import { WidgetProps } from "../Types/types";

const Widget: React.FC<WidgetProps> = ({}) => {
  return (
    <div className="p-5 flex flex-wrap gap-5 pr-0  justify-center items-center">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default Widget;
