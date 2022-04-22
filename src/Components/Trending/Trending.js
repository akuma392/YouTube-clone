import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Loader from "../Loader/Loader";
import ApplyFilter from "./Filter/ApplyFilter";

const Trending = () => {
  const [trendingVideo, setTrendingVideo] = useState(null);
  const [type, setType] = useState("n");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    },
  };

  useEffect(() => {
    fetch(
      `https://youtube-search-and-download.p.rapidapi.com/trending?type=${type}&hl=en&gl=IN`,
      options
    )
      .then((response) => response.json())
      .then((response) => setTrendingVideo(response))
      .catch((err) => console.error(err));
  }, [type]);

  if (!trendingVideo) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div className="trending-video">
      <ApplyFilter setType={setType} />
      <TrendingVideoCards items={trendingVideo?.contents} />
    </div>
  );
};

export default Trending;

const TrendingVideoCards = ({ items }) => {
  return (
    <div className="video-cards">
      {items.map((card) => {
        return (
          <div key={card?.video?.id}>
            <Link
              className="link"
              key={card?.id}
              to={`/video/${card?.video?.videoId}`}
            >
              <TrendingMediaCard card={card?.video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

function TrendingMediaCard({ card }) {
  const title = card?.title;
  const image = card?.thumbnails[2].url;
  const views = card?.viewCountText;
  const timestamp = card?.publishedTimeText;

  return (
    <Card sx={{ maxWidth: 340, marginBottom: "0.8rem" }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={image} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "500", fontSize: "1.4rem" }}
          >
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {details}
          </Typography> */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "500",
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
              marginTop: "0.5rem",
            }}
          >
            {views} views . {timestamp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
