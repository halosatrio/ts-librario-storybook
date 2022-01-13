import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserGuide from "../components/UserGuide";
import Breadcrumb from "../components/Breadcrumb";
import TitleText from "../components/common/TitleText";

class UserGuidePage extends Component {
  componentDidMount() {
    window.title = "Librario | User Guide";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "User Guide", pageHref: "" },
    ];

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <Fade bottom>
          <TitleText isBold className="px-4">
            {`User Guide  `}
            <span className="font-weight-normal">|</span>
            {`  Rule of the Game`}
          </TitleText>
        </Fade>
        <UserGuide />
        <Footer />
      </>
    );
  }
}

export default UserGuidePage;
