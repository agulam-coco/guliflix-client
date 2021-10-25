import React from "react";
import Hotkeys from "react-hot-keys";
import "./App.css";
import "./normalize.css";
import Header from "./comps/header/header";
import Footer from "./comps/footer/footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Watch from "./pages/Watch";
import Merch from "./pages/Merch";
import notFound from "./comps/notFound/notFound";

import URL from "./hostname/hostname";

class App extends React.Component {
  componentDidMount() {
    this.notify();
  }

  onKeyDown(keyName, e, handle) {
    //toggle the visisblility of the rest of the page
    let root = document.getElementById("root");
    let covert = document.getElementById("covert-text");

    if (root.style.display === "none") {
      root.style.display = "block";
      covert.style.display = "none";
    } else {
      root.style.display = "none";
      covert.style.display = "block";
    }

    //pause all video elements
    document.querySelectorAll("video").forEach((elem) => {
      elem.pause();
    });
  }

  async notify() {
    //change according to user platform
    let ua;
    try {
      ua = await this.fetchUaData();
    } catch (err) {
      console.error(err);
      toast.error(err, { autoClose: 5000 });
      return;
    }
    let os = ua.os.name;

    let str = "to enable covert mode 😏";

    //toast notification options
    let options = {
      id: "covert",
      theme: "dark",
      icon: ({ theme, type }) => (
        <p role="img" aria-label="spy">
          🕵️
        </p>
      ),
    };

    // mac notification
    if (os === "Mac OS") {
      toast.info("Use ⌘ + ALT + I " + str, options);
    }
    //other notification
    else {
      toast.info("Use CTRL + ALT + I " + str, options);
    }
  }

  async fetchUaData() {
    let res = await fetch(`${URL}/api/ua-data`);
    let data = await res.json();
    return data;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ToastContainer theme="dark" newestOnTop />
          <Hotkeys
            keyName="ctrl+alt+i,command+alt+i"
            onKeyDown={this.onKeyDown.bind(this)}
          ></Hotkeys>
          <Header />
          <Switch>
            <Route path="/" exact children={() => <Home folder="Anime" />} />
            <Route
              path="/for-the-boys"
              exact
              children={() => <Home folder="Zua" />}
            />
            <Route path="/shows/*" exact component={Show} />
            <Route path="/watch/*" exact component={Watch} />
            <Route path="/merch" exact component={Merch} />
            <Route component={notFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
