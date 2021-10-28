import "./header.css";
import { Link, withRouter } from "react-router-dom";
import Toggle from "../toggler/toggler";

import Logo from "../logo/logo.js";
import LogoTrail from "../logoTrail/logoTrail";

const Header = (props) => {
  return (
    <header className="flex-row">
      <Link to="/">
        <div style={{ margin: "auto 0 auto 40px" }}>
          <Logo size="35px" />
        </div>
      </Link>
      <Link to="/merch" className="nav-link">
        <span>Buy Merch</span>
      </Link>

      <div style={{ marginLeft: "auto" }}>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </div>
      <div style={{ margin: "auto 0 auto 15px" }}>
        <LogoTrail size="18px" />
      </div>
    </header>
  );
};

export default withRouter(Header);
