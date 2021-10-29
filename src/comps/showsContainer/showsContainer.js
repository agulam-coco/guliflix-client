import React from "react";
import "./showsContainer.css";
import Show from "../show/show";

import { Link, withRouter } from "react-router-dom";

function ShowsContainer(props) {
  const shows = props.loading
    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    : props.shows;

  return (
    <div id="shows-container" className="flex-row">
      {(props.loading &&
        shows.map((show) => {
          return <Show loading key={show} />;
        })) ||
        shows.map((show, index) => {
          return (
            <Link to={`/view/${props.folder}/${show}`} key={index}>
              <Show
                name={`${show}`}
                src={`/show_covers/${props.folder}/${show}.jpg`}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default withRouter(ShowsContainer);
