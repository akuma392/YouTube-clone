import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./card.css";

export default function Cards({ data }) {
  const items = data?.related?.items;

  return (
    <div className="gridCard">
      {items.map((elm, index) => (
        <Link className="link" key={elm?.id} to={`/video/${elm?.id}`}>
          <div className="card-item">
            <ActionAreaCard cardData={elm} />
          </div>
        </Link>
      ))}
    </div>
  );
}

function ActionAreaCard({ cardData }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cardData?.thumbnails[0]?.url}
          alt={cardData?.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {cardData?.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "rgba(0,0,0,0.9)",
              marginTop: "0.5rem",
            }}
          >
            {cardData?.viewCountText} views . {cardData?.publishedTimeText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
