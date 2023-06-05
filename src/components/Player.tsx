import React, { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  // IoPauseSharp,
} from "react-icons/io5";
interface PlayerProps {}

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/artist_overview/",
  params: {
    id: "2w9zwq3AktTeYYMuhMjju8",
  },
  headers: {
    "X-RapidAPI-Key": "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

const Player: React.FC<PlayerProps> = ({}) => {
  useEffect(() => {
    const getData = async (options: AxiosRequestConfig) => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData(options);
  }, []);

  return (
    <div>
      <div className="player w-[100%] h-[7rem]  fixed overflow-hidden p-0 m-0 bottom-0"></div>
      <div className="controls flex justify-content-center items-center">
        <div className="controls flex justify-center my-auto mx-auto gap-10 mt-5">
          <IoPlaySkipBackSharp />
          <IoPlayBackSharp />
          <IoPlaySharp />
          {/* <IoPauseSharp /> */}

          <IoPlayForwardSharp />
          <IoPlaySkipForwardSharp />
        </div>
      </div>
    </div>
  );
};

export default Player;
