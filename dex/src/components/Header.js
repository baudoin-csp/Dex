import React from "react";
import Logo from "../moralis-logo.svg";
import PolygonLogo from "../polygon-matic-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="Moralis Logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={PolygonLogo} alt="Polygon Matic Logo" className="polygon" />
          Polygon
        </div>
        <div className="connectButton">Connect</div>
      </div>
    </header>
  );
}

export default Header;
