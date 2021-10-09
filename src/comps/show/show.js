import React from "react";
import "./show.css";

class Show extends React.Component {
  render() {
    return (
      <div>
        <img
          className="show-cover-image"
          src={this.props.src}
          alt={this.props.name}
        />
        <p className="show-name">{this.props.name} </p>
      </div>
    );
  }
}

export default Show;
