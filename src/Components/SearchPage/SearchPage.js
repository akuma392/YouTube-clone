import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import VideoCards from "../VideoCards/VideoCards";

const SearchPage = () => {
  let { searchId } = useParams();
  const [searchQuery, setSearchQuery] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setSearchQuery(searchId);
  }, []);

  useEffect(() => {
    const key = process.env.REACT_APP_KEY;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&q=${searchQuery}&safeSearch=none&key=${key}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchQuery]);

  if (!data) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div className="search-page">
      <p id="search-text">Showing results for {searchQuery}</p>
      <VideoCards items={data?.items} />
    </div>
  );
};

export default SearchPage;
