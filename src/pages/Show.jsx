// import { useParams } from "react-router-dom";
import React from "react";
import "./Show.css";
import URL from "../hostname/hostname.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import react

class Show extends React.Component {
  async componentDidMount() {
    //get the folder
    const path = this.props.match.params[0];
    let data;
    try {
      data = await toast.promise(this.fetchShowData(path), {
        pending: {
          render() {
            return "Fetching show data";
          },
        },
        success: {
          render() {
            return "Data fetched successfully 👌";
          },
          autoClose: 900,
        },
        error: {
          render({ err }) {
            // When the promise reject, data will contains the error
            return `Something weird happened 🤯`;
          },
          autoClose: 5000,
        },
      });
    } catch (err) {
      console.error(err);
      return;
    }

    let files = data["files"];

    //sort alphabetically and numerically
    files = sortFunc(files);

    //create images with folder names
    for (let i = 0; i < files.length; i++) {
      let a = document.createElement("a");
      a.href = `/shows/${path}/${files[i]}`;

      let parentDiv = document.createElement("div");
      parentDiv.className = "showlist-div flex-row tooltip tooltip-right";

      let img = document.createElement("img");
      img.className = "showlist-img";

      let p = document.createElement("p");

      let span = document.createElement("span");
      span.className = "tooltiptext tooltiptext-right";

      if (
        files[i].endsWith(".m4v") ||
        files[i].endsWith(".mp4") ||
        files[i].endsWith(".mkv")
      ) {
        //set p to shown name without extension
        let showName = files[i].slice(0, -4);
        p.textContent = showName;

        //set image cover
        img.src = `${URL}/show_covers/${data.show}.jpg`;

        //set a link
        a.href = `/watch/${path}/${files[i]}`;

        //set tooltip span
        span.textContent = "🎥 Stream " + showName;
      } else {
        //set folder image
        let folderName = files[i];
        img.src = `/svg/folder.svg`;

        //set folder name
        p.textContent = folderName;

        //tooltip span for folder
        span.textContent = "📂 Open " + folderName;
      }

      a.appendChild(parentDiv);
      parentDiv.appendChild(img);
      parentDiv.appendChild(p);
      parentDiv.appendChild(span);

      let div = document.getElementById("searched-div");
      div.appendChild(a);
    }
  }

  async fetchShowData(show) {
    let res = await fetch(`${URL}/api/showinfo/${show}`);
    return await res.json();
  }

  render() {
    return (
      <main>
        <div id="searched-div" className="flex-column"></div>
      </main>
    );
  }
}

//sorts array alphabetically and numerically
function sortFunc(files) {
  files.sort();
  files.sort(function (a, b) {
    return a.slice(0, -3) - b.slice(0, -3);
  });

  return files;
}
export default Show;
