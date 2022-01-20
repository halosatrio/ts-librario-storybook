import Fade from "react-reveal/Fade";

import InputText from "../InputText";

import { CheckoutPayload } from "../../types/CheckoutPayload";

type BookingInformationProps = {
  checkoutData: { name: string; email: string; phone: string };
  book: any;
  checkout: CheckoutPayload;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BookingInformation = ({
  checkoutData,
  book,
  checkout,
  onChange,
}: BookingInformationProps) => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ marginBottom: 30 }}
      >
        <div
          className="col-10 col-sm-8 col-md-5 col-lg-4 py-3"
          // style={{ paddingRight: 80 }}
        >
          <Fade>
            <div className="card">
              <figure className="img-wrapper" style={{ height: 400 }}>
                <img
                  src={book.imageUrl}
                  alt={book.judul}
                  className="img-fluid"
                />
              </figure>
              <div className="meta-wrapper pr-5">
                <h5>{book.judul}</h5>
                <span className="text-gray-500">{book.penulis}</span>
              </div>
            </div>
          </Fade>
        </div>
        <div className="d-none d-md-block col-1"></div>
        <div
          className="col-10 col-sm-8 col-md-5 col-lg-4 py-5"
          // style={{ paddingLeft: 80 }}
        >
          <Fade delay={300}>
            <h5
              className="font-weight-light mb-5"
              style={{ fontSize: "1.1rem" }}
            >
              {"Tanggal Pinjam: "}
              <span
                className="font-weight-light badge badge-primary"
                style={{ fontSize: "1.1rem" }}
              >
                {`${checkout.date.startDate.toDateString().slice(3, 10)} - 
                  ${checkout.date.endDate.toDateString().slice(3, 10)}`}
              </span>
            </h5>
            <label htmlFor="name">Nama Lengkap</label>
            <InputText
              id="name"
              name="name"
              value={checkoutData.name}
              onChange={onChange}
            />

            <label htmlFor="email">Alamat Email</label>
            <InputText
              id="email"
              name="email"
              type="email"
              value={checkoutData.email}
              onChange={onChange}
            />

            <label htmlFor="phone">Nomor Telepon</label>
            <InputText
              id="phone"
              name="phone"
              type="tel"
              value={checkoutData.phone}
              onChange={onChange}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
