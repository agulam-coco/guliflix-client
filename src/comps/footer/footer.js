import React from "react";
import { useEffect } from "react";
import Logo from "../logo/logo";
import LogoTrail from "../logoTrail/logoTrail";
import Creator from "./creator";

import Icon1 from "./creator_icons/1.png";
import Icon2 from "./creator_icons/2.png";
import Icon3 from "./creator_icons/3.png";
import Icon4 from "./creator_icons/4.png";
import Icon5 from "./creator_icons/5.png";
import Icon6 from "./creator_icons/6.png";
import Icon7 from "./creator_icons/7.png";
// import Icon8 from "./creator_icons/8.png";

import Light from "./svg/face-white.svg";
import Dark from "./svg/face-black.svg";

import "./footer.css";

export default function Footer(props) {
  useEffect(() => {
    document.getElementById("ampem-drawing").src =
      props.theme === "light" ? Dark : Light;
  });

  return (
    <footer className="flex-row">
      <div className="flex-row" style={{ alignItems: "center", width: "100%" }}>
        <div>
          <img id="ampem-drawing" alt="Face Drawing" height="90px" />
        </div>
        <table style={{ height: "40px" }}>
          <tr>
            <Logo size="20px">
              <span
                style={{
                  fontSize: "13px",
                  margin: "auto 2px",
                  textAlign: "center",
                }}
              >
                &copy;
              </span>
            </Logo>
          </tr>
          <tr>
            <LogoTrail size="10px" />
          </tr>
        </table>
        <div className="credits">
          <small>
            <b>Sun</b> icon made by &#160;
            <a href="https://www.flaticon.com/authors/smalllikeart">
              smalllikeart
            </a>
            &#160; from &#160;
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
          <br />
          <small>
            <b>Moon</b> icon made by &#160;
            <a href="https://www.freepik.com/home">Freepik</a> &#160;from &#160;
            <a href="https://www.flaticon.com">www.flaticon.com</a>
          </small>
        </div>
        <div className="flex-row" style={{ marginLeft: "auto" }}>
          <table className="creator-table">
            <thead>
              <tr className="creator-branches">
                <th>Web Design</th>
                <th>Graphic Design</th>
                <th>Production and Marketing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <section className="flex-row">
                    <Creator src={Icon2} creator="Jason" username="agu1am" />
                  </section>
                </td>
                <td>
                  <section className="flex-row">
                    <Creator src={Icon7} creator="Dwayne" username="G_Gronze" />
                    <Creator
                      src={Icon1}
                      creator="Nana Ampem"
                      username="nana_ampem"
                    />
                    <Creator
                      src={Icon4}
                      creator="Malcolm"
                      username="sunyanigangsta69"
                    />
                  </section>
                </td>
                <td>
                  <section className="flex-row">
                    <Creator src={Icon5} creator="Dasebre" username="dasebre" />
                    <Creator
                      src={Icon6}
                      creator="Dela"
                      username="unknown_adrn"
                    />
                    <Creator src={Icon3} creator="Katari" username="tari433" />
                  </section>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
}
