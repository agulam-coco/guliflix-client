import React from "react";
import "./logoTrail.css";

export default function LogoTrail(props) {
  return (
    <>
      <p className="logo-text" style={{ fontSize: props.size }}>
        powered by PANGE
        <a id="zua" href="/for-the-boys">
          A
        </a>
      </p>
    </>
  );
}
