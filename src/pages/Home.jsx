import React from "react";
import ShowsContainer from "../comps/showsContainer/showsContainer";

import { fetchShowData } from "./helperfuncs/fetchShowData";
import { serverNotificationPromise } from "./helperfuncs/toastNotificationPromise";

class Home extends React.Component {
  state = {
    shows: [],
    loading: true,
  };

  async componentDidMount() {
    let data;
    try {
      //fetch show data
      data = await serverNotificationPromise(fetchShowData(this.props.folder));
    } catch (err) {
      console.error(err);
      return;
    }

    this.setState({
      shows: data.files,
      loading: false,
    });
  }

  render() {
    return (
      <main>
        <ShowsContainer
          loading={this.state.loading}
          shows={this.state.shows}
          folder={this.props.folder}
        />
      </main>
    );
  }
}

export default Home;
