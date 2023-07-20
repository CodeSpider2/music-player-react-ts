import React, { useEffect, useState } from "react";
import Box from "./Box";
import { WidgetProps, SinglesItem } from "../Types/types";
import axios from "axios";

const Widget: React.FC<WidgetProps> = ({}) => {
  const [musicData, setMusicData] = useState<SinglesItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://spotify-web2.p.rapidapi.com/artist_singles/",
          {
            params: { offset: "0", limit: "50", id: "2w9zwq3AktTeYYMuhMjju8" },
            headers: {
              "X-RapidAPI-Key":
                "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
              "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
            },
          }
        );

        const singles: SinglesItem[] =
          response.data.data.artist.discography.singles.items;
        setMusicData(singles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 flex flex-wrap gap-5 pr-0 items-center">
      {musicData.map((item, index) => {
        const release = item.releases.items[0];
        const coverImage: string = release.coverArt.sources[0].url;
        const musicUrl: string = release.uri;

        return <Box key={index} music={musicUrl} cover={coverImage} />;
      })}
    </div>
  );
};

export default Widget;
