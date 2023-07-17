import React, { useEffect, useState } from "react";
import Box from "./Box";
import { WidgetProps } from "../Types/types";
import axios from "axios";

const Widget: React.FC<WidgetProps> = ({}) => {
  const [music, SetMusic] = useState([]);
  const [cover, setCover] = useState("");
  const [resp, setResp] = useState<any>();
  const options = {
    method: "GET",
    url: "https://spotify-web2.p.rapidapi.com/artist_singles/",
    params: { offset: "0", limit: "20", id: "2w9zwq3AktTeYYMuhMjju8" },
    headers: {
      "X-RapidAPI-Key": "bdaaf6df2bmshdf0727fc340485bp17dd54jsn2e8ea6d6b34d",
      "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const response = axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.artist.discography.singles.items);
        SetMusic(response.data.data.artist.discography.singles.items);
        setCover(
          response.data.data.artist.discography.singles.items[0].releases
            .items[0].coverArt.sources[0].url
        );
      })
      .catch(function (error) {
        console.error(error);
      });
    setResp(response);
  }, []);

  interface SingleItem {
    releases: {
      items: {
        id: string;
        uri: string;
        name: string;
        type: string;
        date: {
          year: number;
          isoString: string;
        };
        coverArt: {
          sources: {
            url: string;
            width: number;
            height: number;
          }[];
        };
        playability: {
          playable: boolean;
          reason: string;
        };
        sharingInfo: {
          shareId: string;
          shareUrl: string;
        };
        tracks: {
          totalCount: number;
        };
      }[];
    };
  }

  interface DiscographyData {
    singles: {
      totalCount: number;
      items: SingleItem[];
    };
  }

  interface ArtistData {
    discography: DiscographyData;
  }

  interface ResponseData {
    data: {
      artist: ArtistData;
    };
    extensions: any[];
  }

  // Extracting music URLs and cover images
  const singles: SingleItem[] = resp.data.artist.discography.singles.items;
  const musicData = singles
    .map((item: SingleItem) => {
      const releases = item.releases.items;
      if (releases.length > 0) {
        const release = releases[0];
        const musicUrl = release.uri;
        const coverImage = release.coverArt.sources[0].url;

        return {
          musicUrl,
          coverImage,
        };
      } else {
        // Handle the case where releases are missing or empty
        return null;
      }
    })
    .filter((item: any) => item !== null); // Remove null entries

  // Pass the music URLs and cover images as props to another component
  console.log(musicData);

  return (
    <div className="p-5 flex flex-wrap gap-5 pr-0 items-center">
      {music.map((music, index) => (
        <Box key={index} music={music} cover={cover} />
      ))}
      {/* <Box music={music} cover={cover} /> */}
    </div>
  );
};

export default Widget;
