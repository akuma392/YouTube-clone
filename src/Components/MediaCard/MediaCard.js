import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { DateTime } from "luxon";

export default function MediaCard({ card }) {
  const [channel, setChannel] = useState(null);
  const title = card?.snippet?.title;
  const details = card?.snippet?.description.slice(0, 150);
  const image = card?.snippet?.thumbnails?.high?.url;
  const views = card?.statistics?.viewCount;
  const timestamp = DateTime.fromISO(card?.snippet?.publishedAt).toRelative();
  const channelId = card?.snippet?.channelId;

  //   useEffect(() => {
  //     fetch(
  //       `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setChannel(data));
  //   }, []);

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
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
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
