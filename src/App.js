import React, { useState, useEffect } from "react";
import Hotkeys from "react-hot-keys";
import "./App.css";
import "./normalize.css";
import Header from "./comps/header/header";
import Footer from "./comps/footer/footer";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./comps/styling/themes";
import { GlobalStyles } from "./comps/styling/global";

import { useDarkMode } from "./comps/useDarkMode/useDarkMode";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Watch from "./pages/Watch";
import Merch from "./pages/Merch";
import GenreList from "./pages/GenreList";
import notFound from "./comps/notFound/notFound";

import URL from "./hostname/hostname";

function App() {
  const [covertCount, updateCovert] = useState(0);

  useEffect(() => {
    if (covertCount < 1) {
      notify();
      //increment covert
      updateCovert(covertCount + 1);
    }
  }, [covertCount]);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <ToastContainer theme="dark" newestOnTop />
          <Hotkeys
            keyName="ctrl+alt+i,command+alt+i"
            onKeyDown={onKeyDown}
          ></Hotkeys>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/" exact component={GenreList} />
            <Route
              path="/Anime"
              exact
              children={() => <Home folder="Anime" />}
            />
            <Route
              path="/Movies"
              exact
              children={() => <Home folder="Movies" />}
            />
            <Route
              path="/Series"
              exact
              children={() => <Home folder="Series" />}
            />

            <Route
              path="/for-the-boys"
              exact
              children={() => <Home folder="Zua" />}
            />
            <Route path="/view/*" exact component={Show} />
            <Route path="/watch/*" exact component={Watch} />
            <Route path="/merch" exact component={Merch} />
            <Route component={notFound} />
          </Switch>
          <Footer theme={theme} />
        </ThemeProvider>
      </Router>
    </div>
  );
}
async function fetchUaData() {
  let res = await fetch(`${URL}/api/ua-data`);
  let data = await res.json();
  return data;
}
async function onKeyDown(keyName, e, handle) {
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

async function notify() {
  //change according to user platform
  let ua;
  try {
    ua = await fetchUaData();
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
    toast.info("Use ⌘ + ⌥ + I " + str, options);
  }
  //other notification
  else {
    toast.info("Use CTRL + ALT + I " + str, options);
  }
}

export default App;
