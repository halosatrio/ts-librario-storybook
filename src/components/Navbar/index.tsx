import { useState } from "react";
import { useLocation } from "react-router-dom";

import IcontText from "../IconText";
import Button from "../Button";

const defaultProps = { isCentered: false };

const Navbar = ({ isCentered }: { isCentered: boolean }) => {
  let location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const handleToggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? " active" : "";
    // return "";
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  if (isCentered) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <IcontText className="mx-auto" />
        </div>
      </nav>
    );
  }

  // console.log("getNavLink", getNavLinkClass("/"));

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <IcontText />
        <button
          onClick={handleToggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" type="link" href="/">
                Home
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/catalogue")}`}>
              <Button className="nav-link" type="link" href="/catalogue">
                Catalogue
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/user-guide")}`}>
              <Button className="nav-link" type="link" href="/user-guide">
                User Guide
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/login")}`}>
              <Button className="nav-link" type="link" href="/login">
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = defaultProps;

export default Navbar;
