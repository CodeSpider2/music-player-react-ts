import React, { useState } from "react";
import Box from "./Box";
import { WidgetProps } from "../Types/types";
import axios from "axios";

const Widget: React.FC<WidgetProps> = ({}) => {
  const [music, SetMusic] = useState([]);
  axios
    .get("http://localhost:4500/tracks/all")
    .then((music) => {
      SetMusic(music.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="p-5 flex flex-wrap gap-5 pr-0 items-center">
      {music.map((music, index) => (
        <Box key={index} music={music} />
      ))}
    </div>
  );
};

export default Widget;
