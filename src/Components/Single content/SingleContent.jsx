import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../Config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "../Modal/ContentModal";

const SingleContent = ({ id, poster, title, date, mediaType, voteAverage }) => {
  return (
    <div className="single_content card mx-auto col-5 col-sm-5 col-md-3 mx-md-1 col-lg-2 mx-lg-1 my-3 p-1 ">
      <ContentModal>
        <Badge
          badgeContent={voteAverage}
          color={voteAverage > 6 ? "primary" : "secondary"}
        />
        <img
          className="rounded"
          src={poster ? `${img_300}/${poster}` : unavailable}
        />
        <h5 className="single_content__title text-white mt-2 text-center">
          {title}
        </h5>
        <div className="single_content__description px-1 d-flex justify-content-between text-white">
          <p>{mediaType === "tv" ? "TV Series" : "Movie"}</p>
          <p>{date}</p>
        </div>
      </ContentModal>
    </div>
  );
};

export default SingleContent;
