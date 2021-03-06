import { useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import RekomendasiBuku from "../components/RekomendasiBuku";
import PilihanBuku from "../components/PilihanBuku";
import BannerKatalog from "../components/BannerKatalog";

import landingPage from "../json/landingPage.json";

const LandingPage = () => {
  const refPilihanBuku = useRef<HTMLInputElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron refPilihanBuku={refPilihanBuku} />
      <RekomendasiBuku
        refPilihanBuku={refPilihanBuku}
        data={landingPage.rekomendasiBuku}
      />
      <PilihanBuku data={landingPage.pilihanBuku} />
      <BannerKatalog />
      <Footer />
    </>
  );
};

export default LandingPage;
