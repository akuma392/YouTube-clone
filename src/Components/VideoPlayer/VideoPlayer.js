import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import { options } from "../../utils/utils";
import { mockData } from "./mockData";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import "./VideoPlayer.css";
import DownloadVideo from "./DownLoad";
import Loader from "../Loader/Loader";

const VideoPlayer = () => {
  const key = process.env.REACT_APP_KEY;
  const [video, setVideo] = useState(null);

  let { videoId } = useParams();

  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  useEffect(() => {
    fetch(
      `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideo(response));
    // setVideo(mockData);
  }, [videoId]);
  if (!video) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div>
      <div
        className={isMobile ? "youtubeWrapperMobile" : "youtubeWrapperDesktop"}
      >
        <YouTube videoId={videoId} />
        <YoutubeVideoDetail data={video} />
      </div>
      <DownloadVideo data={video} />
      <RelatedVideos data={video} />
    </div>
  );
};

export default VideoPlayer;

const YoutubeVideoDetail = ({ data }) => {
  const { title, viewCount } = data;
  return (
    <article className="youtubeDetails">
      <p className="youtubeDetailsTitle">{title}</p>
      <span>{viewCount} views</span>
    </article>
  );
};
