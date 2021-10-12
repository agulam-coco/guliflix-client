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
        <Link to="/shows/Jujutsu Kaisen S1">
          <Show
            name="Jujutsu Kaisen S1"
            src="/show_covers/Jujutsu Kaisen S1.jpg"
          />
        </Link>
        <Link to="/shows/Attack on Titan S1">
          <Show name="Attack on Titan S1" src="/show_covers/Aot S1.jpg" />
        </Link>
        <Link to="/shows/Tokyo Revengers S1">
          <Show
            name="Tokyo Revengers S1"
            src="/show_covers/Tokyo Revengers S1.jpg"
          />
        </Link>
        <Link to="/shows/MHA S1">
          <Show
            name="My Hero Academia S1"
            src="/show_covers/MHA S1.jpg"
          />
        </Link>
        <Link to="/shows/MHA S2">
          <Show
            name="My Hero Academia S2"
            src="/show_covers/MHA S2.jpg"
          />
        </Link>
        <Link to="/shows/MHA S3">
          <Show
            name="My Hero Academia S3"
            src="/show_covers/MHA S3.jpg"
          />
        </Link>
        <Link to="/shows/MHA S4">
          <Show
            name="My Hero Academia S4"
            src="/show_covers/MHA S4.jpg"
          />
        </Link>
        <Link to="/shows/MHA S5">
          <Show
            name="My Hero Academia S5"
            src="/show_covers/MHA S5.jpg"
          />
        </Link>
      </div>
    );
  }
}

export default withRouter(ShowsContainer);
