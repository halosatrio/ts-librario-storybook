import { useState } from "react";
import { useLocation } from "react-router-dom";

import IcontText from "../IconText";
import ButtonLink from "../ButtonLink";
import { NavbarWrapper } from "./style";

const Navbar = ({ isCentered = false }: { isCentered?: boolean }) => {
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
    <NavbarWrapper className="navbar navbar-expand-lg navbar-light py-3">
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
              <ButtonLink className="nav-link" to="/">
                Home
              </ButtonLink>
            </li>
            <li className={`nav-item${getNavLinkClass("/catalogue")}`}>
              <ButtonLink className="nav-link" to="/catalogue">
                Catalogue
              </ButtonLink>
            </li>
            <li className={`nav-item${getNavLinkClass("/user-guide")}`}>
              <ButtonLink className="nav-link" to="/user-guide">
                User Guide
              </ButtonLink>
            </li>
            <li className={`nav-item${getNavLinkClass("/login")}`}>
              <ButtonLink className="nav-link" to="/login">
                Login
              </ButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
