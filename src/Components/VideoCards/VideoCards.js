import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "../MediaCard/MediaCard";
import "./videoCards.css";

const VideoCards = ({ items }) => {
  return (
    <div className="video-cards">
      {items?.map((card) => {
        return (
          <div key={card?.id}>
            <Link
              className="link"
              key={card?.id}
              to={`/video/${
                typeof card.id === "string" ? card.id : card.id?.videoId
              }`}
            >
              <MediaCard card={card} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCards;
