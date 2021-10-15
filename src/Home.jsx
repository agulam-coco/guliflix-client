import React from "react";
import ShowsContainer from "./comps/showsContainer/showsContainer";
import URL from "./hostname/hostname";

class Home extends React.Component {
  state = {
    shows: [],
  };
  async componentDidMount() {
    let data = await this.fetchShowData("./");
    this.setState({
      shows: data.files,
    });
  }
  async fetchShowData(show) {
    let res = await fetch(`${URL}/api/showinfo/${show}`);
    return await res.json();
  }

  render() {
    return (
      <main>
        {/* <div>
          <p className="heading">Shows</p>
        </div> */}
        <ShowsContainer shows={this.state.shows} />
      </main>
    );
  }
}

export default Home;
