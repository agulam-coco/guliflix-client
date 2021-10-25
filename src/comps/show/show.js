import React from "react";
import "./show.css";
import URL from "../../hostname/hostname";

class Show extends React.Component {
  render() {
    return (
      <div className="tooltip">
        <img
          className="show-cover-image"
          src={URL + this.props.src}
          alt={this.props.name}
        />
        <p className="show-name">{this.props.name} </p>
        <span className="tooltiptext">📺 Watch {this.props.name}</span>
      </div>
    );
  }
}

export default Show;
