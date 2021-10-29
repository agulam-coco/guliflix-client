import React from "react";
import "../showsContainer/showsContainer.css";

import Show from "../show/show";

import { Link, withRouter } from "react-router-dom";

function GenreContainer(props) {
  const genres = props.loading ? [1, 2, 3, 4] : props.genres;

  return (
    <div id="shows-container" className="flex-row">
      {(props.loading &&
        genres.map((genre) => {
          return <Show loading key={genre} />;
        })) ||
        genres.map((genre, index) => {
          return (
            <Link to={`/${genre}`} key={index}>
              <Show
                name={genre}
                src={`/show_covers/${props.folder}/${genre}.jpg`}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default withRouter(GenreContainer);
