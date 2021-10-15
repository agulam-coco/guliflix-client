import React, { Component } from "react";
import videojs from "video.js";
import URL from "./hostname/hostname";

// Video js themes
import "video.js/dist/video-js.css";

// City
import '@videojs/themes/dist/city/index.css';

// Fantasy
// import '@videojs/themes/dist/fantasy/index.css';

// Forest
// import '@videojs/themes/dist/forest/index.css';

// Sea
import "@videojs/themes/dist/sea/index.css";

export default class Watch extends Component {
  componentDidMount() {
    let player = videojs("my-video");
    player.play();
  }
  render() {
    return (
      <main>
        <video
          id="my-video"
          className="video-js vjs-fluid vjs-theme-city
          "
          controls
          preload="auto"
          poster={`/show_covers/${
            this.props.match.params[0].split("/")[0]
          }.jpg`}
          data-setup="{}"
        >
          <source
            src={`${URL}/stream/${this.props.match.params[0]}`}
            type="video/mp4"
          />
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noreferrer"
            >
              supports HTML5 video
            </a>
          </p>
        </video>
      </main>
    );
  }
}
