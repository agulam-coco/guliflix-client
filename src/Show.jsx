// import { useParams } from "react-router-dom";
import React from "react";
import "./Show.css";
// import react

const URL = "http://localhost:9000";

class Show extends React.Component {
  async componentDidMount() {
    //get teh folder
    const path = this.props.match.params[0];

    //get the show name from the link
    const show = path.trim().split("/").splice(-1);

    let data = await this.fetchShowData(path);
    let files = data["files"];
    console.log(files)
    return;

    //sort alphabetically and numerically
    files = sortFunc(files);

    //create images with folder names
    for (let i = 0; i < files.length; i++) {
      let parentDiv = document.createElement("div");
      parentDiv.className = "showlist-div";

      let img = document.createElement("img");
      img.className = "showlist-img";

      let p = document.createElement("p");
      p.textContent = files[i];

      parentDiv.appendChild(img);
      parentDiv.appendChild(p);

      if (files[i].endsWith(".mp4") || files[i].endsWith(".mkv")) {
        img.src = `/show_covers/${show}.jpg`;
      } else {
        img.src = `/svg/folder.svg`;
      }

      let div = document.getElementById("searched-div");
      div.appendChild(parentDiv);
    }
  }

  async fetchShowData(show) {
    let res = await fetch(`${URL}/api/showinfo/${show}`);
    return await res.json();
  }

  render() {
    return (
      <main>
        <div id="searched-div" className="flex-row"></div>
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
