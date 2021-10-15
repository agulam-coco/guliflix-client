// import { useParams } from "react-router-dom";
import React from "react";
import "./Show.css";
import URL from "./hostname/hostname.js";
// import react

class Show extends React.Component {
  async componentDidMount() {
    //get the folder
    const path = this.props.match.params[0];

    let data = await this.fetchShowData(path);
    let files = data["files"];

    //sort alphabetically and numerically
    files = sortFunc(files);

    //create images with folder names
    for (let i = 0; i < files.length; i++) {
      let a = document.createElement("a");
      a.href = `${path}/${files[i]}`;

      let parentDiv = document.createElement("div");
      parentDiv.className = "showlist-div flex-row";

      let img = document.createElement("img");
      img.className = "showlist-img";

      let p = document.createElement("p");
      p.textContent = files[i];

      a.appendChild(parentDiv);
      parentDiv.appendChild(img);
      parentDiv.appendChild(p);

      if (
        files[i].endsWith(".m4v") ||
        files[i].endsWith(".mp4") ||
        files[i].endsWith(".mkv")
      ) {
        img.src = `${URL}/show_covers/${data.show}.jpg`;

        a.href = `/watch/${path}/${files[i]}`;
      } else {
        img.src = `/svg/folder.svg`;
      }

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
