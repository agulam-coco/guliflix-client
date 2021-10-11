import "./App.css";
import "./normalize.css";
import Header from "./comps/header/header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Show, Watch } from ".";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/shows/*" exact component={Show} />
          <Route path="/watch/*" exact component={Watch} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
