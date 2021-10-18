import "./App.css";
import "./normalize.css";
import Header from "./comps/header/header";
import Footer from "./comps/footer/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Show, Watch } from ".";

function App() {
  return (
    <div className="App">
      <Router>
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
