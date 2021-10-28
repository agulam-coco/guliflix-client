import React from "react";
import "./logo.css";

export default function Logo(props) {
  return (
    <div id="logo" style={{ fontSize: props.size }}>
      Guli<span className="red">FLIX</span>
      {props.children}
    </div>
  );
}
