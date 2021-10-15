import "./header.css";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex-row">
      <Link to="/">
        <div id="logo">GULIFLIX </div>
      </Link>
      <p>
        powered by PANGE
        <a id="zua" href="/for-the-boys">
          A
        </a>
      </p>
    </header>
  );
};

export default withRouter(Header);
