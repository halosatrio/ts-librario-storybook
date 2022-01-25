import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import TitleText from "../components/TitleText";
import BookingInformation from "../components/BookingInformation";
import Button from "../components/Button";

import { getBook } from "../services/BookService";
import { useParams } from "react-router-dom";

import { RootState } from "../store/reducers";

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [bookData, setBookData] = useState({
    judul: "",
    penulis: "",
    imageUrl: "",
  });

  let { bookId } = useParams();

  const checkoutState = useSelector((state: RootState) => state.Checkout);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCheckoutData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    window.scroll(0, 0);
    if (bookId !== undefined) {
      const book = getBook(bookId);
    }
  }, []);

  return (
    <>
      <Navbar isCentered />
      <TitleText className="h2 mt-5">
        Informasi Peminjaman{`  `}
        <p className="lead text-gray-500 mt-2">Lengkapi form di bawah</p>
      </TitleText>
      <BookingInformation
        checkoutData={checkoutData}
        book={bookData}
        onChange={handleChange}
        checkout={checkoutState}
      />
      <div className="d-flex justify-content-center mb-3">
        <Button
          type="link"
          className="btn py-2"
          href="/"
          isBlock
          isPrimary
          style={{ width: 200 }}
        >
          Pinjam Buku
        </Button>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button
          type="link"
          className="btn py-2"
          href="/"
          isBlock
          isLight
          style={{ width: 200 }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default CheckoutPage;
