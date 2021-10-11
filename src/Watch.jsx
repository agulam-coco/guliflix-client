import React, { Component } from 'react'

const URL = "http://localhost:9000";

export default class Watch extends Component {
    render() {
        return (
          <main>
            <video
          id="my-video"
          className="video-js vjs-fluid vjs-theme-sea"
          controls
          autoPlay
          preload="auto"
          // width="800px"
          // height="auto"
          poster={`/show_covers/${this.props.match.params[0].split("/")[0]}.jpg`}
          data-setup="{}"
        >
          <source src={`${URL}/stream/${this.props.match.params[0]}`} type="video/mp4" />
               <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer"
              >supports HTML5 video</a
            >
          </p>
        </video>
        </main>
        )
    }
}
