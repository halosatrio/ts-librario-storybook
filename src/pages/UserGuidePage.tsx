import { useEffect } from "react";
import Fade from "react-reveal/Fade";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserGuide from "../components/UserGuide";
import Breadcrumb from "../components/Breadcrumb";
import TitleText from "../components/common/TitleText";

const UserGuidePage = () => {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "User Guide", pageHref: "" },
  ];

  useEffect(() => {
    document.title = "Librario | User Guide";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Breadcrumb data={breadcrumb} />
      <Fade bottom>
        <TitleText isBold className="px-4">
          <>
            {`User Guide  `}
            <span className="font-weight-normal">|</span>
            {`  Rule of the Game`}
          </>
        </TitleText>
      </Fade>
      <UserGuide />
      <Footer />
    </>
  );
};

export default UserGuidePage;
