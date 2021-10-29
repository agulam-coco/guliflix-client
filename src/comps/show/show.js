import React from "react";
import "./show.css";
import URL from "../../hostname/hostname";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Show(props) {
  return (
    <SkeletonTheme
      baseColor="#8c8c8c"
      highlightColor="#808080"
      borderRadius="0.5rem"
      duration={1.5}
    >
      <div
        style={{
          width: "200px",
          height: "fit-content",
          margin: "10px 20px 25px",
        }}
      >
        {(props.loading && (
          <Skeleton width="200px" height="300px" className="img-skeleton" />
        )) || (
          <LazyLoadImage
            className="show-cover-image"
            src={URL + props.src}
            alt={props.name + " cover image"}
            effect="blur"
          />
        )}

        <p className="show-name">
          {(props.loading && (
            <Skeleton width="75%" style={{ fontSize: ".30rem" }} />
          )) ||
            props.name}
        </p>
        
      </div>
    </SkeletonTheme>
  );
}

export default Show;
