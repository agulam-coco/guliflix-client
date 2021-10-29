import React from "react";
import "./creator.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Creator(props) {
  return (
    <div className="creator-box">
      <a className="tg-link" href={`tg://resolve?domain=${props.username}`}>
        <LazyLoadImage
          className="creator-img"
          src={props.src}
          alt={"Image for" + props.creator}
          height="80px"
        />
        <p>{props.creator}</p>
      </a>
    </div>
  );
}
