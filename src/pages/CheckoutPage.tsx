import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import TitleText from "../components/TitleText";
import BookingInformation from "../components/BookingInformation";
import Button from "../components/Button";

import { getBook } from "../services/BookService";
import { Link, useParams } from "react-router-dom";

import { RootState } from "../store/reducers";
import { BooksData } from "../types/Books";

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [bookData, setBookData] = useState<BooksData | undefined>();

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
    if (!!checkoutState) {
      setBookData(getBook(checkoutState._id));
    }
  }, []);

  console.log("checkoutState", checkoutState);

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
        <Link to="/">
          <Button
            className="btn py-2"
            isBlock
            isPrimary
            styles={{ width: 200 }}
          >
            Pinjam Buku
          </Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Link to="/">
          <Button className="btn py-2" isBlock isLight styles={{ width: 200 }}>
            Cancel
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutPage;
