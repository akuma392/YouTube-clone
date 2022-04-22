import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import MediaCard from "../MediaCard/MediaCard";
import Loader from "../Loader/Loader";
import VideoCards from "../VideoCards/VideoCards";

const Home = () => {
  const key = process.env.REACT_APP_KEY;
  const [recomendedVideos, SetRecomendedVideos] = useState(null);
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=IN&key=${key}`
    )
      .then((res) => res.json())
      .then((data) => SetRecomendedVideos(data));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = (e) => {
    navigate(`/search/${value}`);
  };
  useEffect(() => {
    localStorage.setItem("recomended_data", JSON.stringify(recomendedVideos));
  }, [recomendedVideos]);

  return (
    <div className="home">
      <div className="search-field">
        <input
          placeholder="search"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <i class="fa fa-search" aria-hidden="true" onClick={handleSearch}></i>
      </div>
      {!recomendedVideos ? (
        <Loader />
      ) : (
        <VideoCards items={recomendedVideos?.items} />
      )}
    </div>
  );
};

export default Home;
