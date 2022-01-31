import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BannerKatalog from "../components/BannerKatalog";
import TitleText from "../components/TitleText";
import BookImage from "../components/BookImage";
import BookDetail from "../components/BookDetail";
import BookingForm from "../components/BookingForm";

import { getBook } from "../services/BookService";
import { BooksData } from "../types/Books";

import { checkoutBooking } from "../store/checkout/action";

const DetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState<BooksData | undefined>();

  useEffect(() => {
    document.title = "Librario | Detail Buku";
    window.scrollTo(0, 0);

    if (!!id) {
      setData(getBook(id));
    }
  }, []);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Detail Buku", pageHref: "" },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <TitleText isBold>{data?.judul}</TitleText>
      <Fade delay={300}>
        <section className="container mb-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <BookImage data={data ? data : undefined} />
            </div>
            <div className="deskripsi-buku col-11 col-md-6 col-lg-6 col-xl-5">
              <BookDetail data={data ? data : undefined} />
              <BookingForm data={data ? data : undefined} />
            </div>
          </div>
        </section>
      </Fade>
      {/* <PilihanBuku data={itemDetails.pilihanBuku} /> */}
      <BannerKatalog />
      <Footer />
    </>
  );
};

export default DetailsPage;
