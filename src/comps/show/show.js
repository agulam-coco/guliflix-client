import React from "react";
import "./show.css";
import URL from "../../hostname/hostname";

class Show extends React.Component {
  render() {
    return (
      <div>
        <img
          className="show-cover-image"
          src={URL + this.props.src}
          alt={this.props.name}
        />
        <p className="show-name">{this.props.name} </p>
      </div>
    );
  }
}

export default Show;
