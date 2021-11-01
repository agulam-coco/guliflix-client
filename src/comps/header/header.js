import "./header.css";
import { Link, withRouter } from "react-router-dom";
import Toggle from "../toggler/toggler";

import Logo from "../logo/logo.js";
import LogoTrail from "../logoTrail/logoTrail";

import SearchBar from "../searchBar/searchBar";

const Header = (props) => {
  return (
    <header className="flex-row">
      <a href="/">
        <div style={{ margin: "auto 0 auto 40px" }}>
          <Logo size="35px" />
        </div>
      </a>
      <Link to="/merch" className="nav-link">
        <span>Buy Merch</span>
      </Link>

      <SearchBar allowSeasons={false} />

      <div style={{ marginLeft: "auto" }}>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </div>
      <div id="pangea" style={{ margin: "auto 0 auto 15px" }}>
        <LogoTrail size="18px" />
      </div>
    </header>
  );
};

export default withRouter(Header);
