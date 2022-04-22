import React from "react";

const useVideoDetails = async (videoId) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    },
  };

  const videoData = await fetch(
    `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data);

  return videoData;
};

export default useVideoDetails;
