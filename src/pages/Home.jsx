import React from "react";
import ShowsContainer from "../comps/showsContainer/showsContainer";
import URL from "../hostname/hostname";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends React.Component {
  state = {
    shows: [],
  };
  async componentDidMount() {
    let data;
    try {
      data = await toast.promise(this.fetchShowData(this.props.folder), {
        pending: {
          render() {
            return "Fetching show data";
          },
        },
        success: {
          render() {
            return "Data fetched successfully 👌";
          },
          autoClose: 900,
        },
        error: {
          render({ err }) {
            // When the promise reject, data will contains the error
            return `Something weird happened 🤯`;
          },
          autoClose: 5000,
        },
      });
    } catch (err) {
      console.error(err);
      return;
    }
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
        <ShowsContainer shows={this.state.shows} folder={this.props.folder} />
      </main>
    );
  }
}

export default Home;
