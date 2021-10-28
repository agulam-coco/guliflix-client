import React from "react";
import "./creator.css";

export default function Creator(props) {
  return (
    <div className="creator-box">
      <a class="tg-link" href={`tg://resolve?domain=${props.username}`}>
        <img
          class="creator-img"
          src={props.src}
          alt={"Image for" + props.creator}
          height="80px"
        />
        <p>{props.creator}</p>
      </a>
    </div>
  );
}
