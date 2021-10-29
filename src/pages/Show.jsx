// import { useParams } from "react-router-dom";
import React from "react";
import "./Show.css";
import URL from "../hostname/hostname.js";

// import react
import { serverNotificationPromise } from "./helperfuncs/toastNotificationPromise";
import { fetchShowData } from "./helperfuncs/fetchShowData";

class Show extends React.Component {
  async componentDidMount() {
    //get the folder
    const path = this.props.match.params[0];
    const folder = path.split("/")[0];

    let data;
    try {
      data = await serverNotificationPromise(fetchShowData(path));
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
      a.href = `/view/${path}/${files[i]}`;

      let parentDiv = document.createElement("div");
      parentDiv.className = "showlist-div flex-column";

      let img = document.createElement("img");
      img.className = "showlist-img";

      if (folder === "Movies") {
        img.className = "showlist-img movie-img";
      }

      let p = document.createElement("p");

      if (
        files[i].endsWith(".m4v") ||
        files[i].endsWith(".mp4") ||
        files[i].endsWith(".mkv")
      ) {
        //set p to shown name without extension
        let showName = files[i].slice(0, -4);
        p.textContent = showName;

        //set image cover
        img.src = `${URL}/api/cover-image/${data.req_path}/${showName}.jpg`;

        //set a link
        a.href = `/watch/${path}/${files[i]}`;

        //set img alt
        img.alt = showName + " cover image";
      } else if (files[i].endsWith(".jpg")) {
        //skip cover images
        continue;
      } else {
        //set folder image
        let folderName = files[i];
        img.src = `/svg/folder.svg`;

        //folder alt
        img.alt = folderName + " folder";

        //set folder name
        p.textContent = folderName;
      }

      a.appendChild(parentDiv);
      parentDiv.appendChild(img);
      parentDiv.appendChild(p);

      let div = document.getElementById("searched-div");
      div.appendChild(a);
    }
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
