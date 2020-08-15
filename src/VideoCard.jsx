import React from "react";
import "./VideoCard-style.css";

import Avatar from "@material-ui/core/Avatar";

function VideoCard({ imageSrc, title, timestamp, channel, channelImage, views }) {
  return (
    <div className="videoCard">
      <img className='videoCard__thumbnail' src={imageSrc} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
              {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
