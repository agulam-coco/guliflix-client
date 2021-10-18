import React from "react";
import "./showsContainer.css";
import Show from "../show/show";

import { Link, withRouter } from "react-router-dom";

class ShowsContainer extends React.Component {
  render() {
    return (
      <div id="shows-container" className="flex-row">
        {this.props.shows.map((show, index) => {
          return (
            <Link to={`/shows/${this.props.folder}/${show}`} key={index}>
              <Show name={`${show}`} src={`/show_covers/${show}.jpg`} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(ShowsContainer);
