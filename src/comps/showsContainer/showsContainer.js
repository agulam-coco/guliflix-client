import React from "react";
import "./showsContainer.css";
import Show from "../show/show";

import { Link, withRouter } from "react-router-dom";

class ShowsContainer extends React.Component {
  state = {};

  render() {
    return (
      <div id="shows-container" className="flex-row">
        <Link to="/shows/Naruto Shippuuden">
          <Show
            name="Naruto Shippuuden"
            src="/show_covers/Naruto Shippuuden.jpg"
          />
        </Link>
        <Link to="/shows/Boruto">
          <Show name="Boruto" src="/show_covers/Boruto.jpg" />
        </Link>
        <Link to="/shows/Dororo S1">
          <Show name="Dororo S1" src="/show_covers/Dororo S1.jpg" />
        </Link>
        <Link to="Jujutsu Kaisen S1">
          <Show
            name="Jujutsu Kaisen S1"
            src="/show_covers/Jujutsu Kaisen S1.jpg"
          />
        </Link>
        <Link to="Attack on Titan S1">
          <Show name="Attack on Titan S1" src="/show_covers/Aot S1.jpg" />
        </Link>
        <Link to="/shows/Tokyo Revengers S1">
          <Show
            name="Tokyo Revengers S1"
            src="/show_covers/Tokyo Revengers S1.jpg"
          />
        </Link>
      </div>
    );
  }
}

export default withRouter(ShowsContainer);
