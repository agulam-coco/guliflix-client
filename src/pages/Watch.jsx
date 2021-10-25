import React, { Component } from "react";
import videojs from "video.js";
import URL from "../hostname/hostname";

import "videojs-hotkeys";

import "./Watch.css";

// Video js base css
import "video.js/dist/video-js.css";

//Digital theatre
import "@digitaltheatre/videojs-theme-dt/dist/theme/index.css";

export default class Watch extends Component {
  componentDidMount() {
    videojs("my-video").ready(function () {
      this.hotkeys({
        volumeStep: 0.1,
        seekStep: 5,
        enableModifiersForNumbers: false,
        alwaysCaptureHotkeys: true,
      });
    });

    this.arrow_func();
  }

  async arrow_func() {
    let path = window.location.pathname.split("/").splice(2).join("/");
    let path_dir = path.split("/");
    path_dir.pop();
    path_dir = path_dir.join("/");

    let data = await this.fetchNextPrevData(path);
    this.create_arrow(data.next, "next", path_dir);
    this.create_arrow(data.previous, "previous", path_dir);
  }

  create_arrow(data, direction, path_dir) {
    if (data) {
      let a = document.createElement("a");
      a.href = `/watch/${path_dir}/${data}`;

      let parentDiv = document.createElement("div");
      parentDiv.className = "arrow-parent flex-column";

      let img = document.createElement("img");
      img.className = "arrow-svg";

      if (direction === "next") {
        img.src = "/svg/circle-right.svg";
      } else {
        img.src = "/svg/circle-left.svg";
      }

      let p = document.createElement("p");
      p.textContent = data.slice(0, -4);

      a.appendChild(img);
      parentDiv.appendChild(a);
      parentDiv.appendChild(p);

      let main = document.getElementsByTagName("main")[0];
      if (direction === "next") {
        main.append(parentDiv);
      } else {
        main.prepend(parentDiv);
      }
    }
  }
  async fetchNextPrevData(path) {
    let res = await fetch(`${URL}/api/next-prev/${path}`);
    return await res.json();
  }

  render() {
    return (
      <main className="flex-row" onLoad={() => this.arrow_func()}>
        <video
          id="my-video"
          className="video-js vjs-fluid vjs-theme-dt"
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
