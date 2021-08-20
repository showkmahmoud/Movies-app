import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../Config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "../Modal/ContentModal";

const SingleContent = ({ id, poster, title, date, mediaType, voteAverage }) => {
  return (
    <ContentModal media_type={mediaType} id={id}>
    <Badge
      badgeContent={voteAverage}
      color={voteAverage > 6 ? "primary" : "secondary"}
    />
    <img
      className="poster"
      src={poster ? `${img_300}${poster}` : unavailable}
      alt={title}
    />
    <b className="title">{title}</b>
    <span className="subTitle ">
      {mediaType === "tv" ? "TV Series" : "Movie"}
      <span className="subTitle">{date}</span>
    </span>
  </ContentModal>
  );
};

export default SingleContent;
