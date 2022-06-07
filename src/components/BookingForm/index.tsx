import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Fade from "react-reveal/Fade";

import Button from "../Button";
import InputDate from "../InputDate";

import { CheckoutAction, checkoutBooking } from "../../store/checkout/action";
import { CheckoutPayload } from "../../types/CheckoutPayload";
import { BooksData } from "../../types/Books";

const BookingForm = ({ data }: { data: Partial<BooksData> | undefined }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const handleCheckoutBook = (payload: CheckoutPayload) =>
    dispatch(checkoutBooking(payload));

  // Hooks
  useEffect(() => {
    setEndDate(handleAddDate(new Date()));
  }, []);

  const handleAddDate = (date: Date) => {
    let result = new Date(date);
    result.setDate(result.getDate() + 14);
    return result;
  };
  const handleUpdateDate = (date: Date | null) => {
    if (date == null) return;
    setStartDate(date);
    setEndDate(handleAddDate(date));
  };

  const handleStartBooking = () => {
    let payload = {
      _id: "",
      date: {
        startDate: startDate,
        endDate: endDate,
      },
    };
    if (data?._id) {
      payload._id = data._id;
      handleCheckoutBook(payload);
      navigate(`/checkout/${data._id}`);
    }
  };

  return (
    <Fade delay={500}>
      <div className="card bordered" style={{ padding: "30px 30px" }}>
        <h4 className="mb-4">Pinjam Sekarang</h4>
        <label className="mb-2" htmlFor="date">
          Pilih tanggal
        </label>
        <InputDate startDate={startDate} setDate={handleUpdateDate} />
        <h6 className="text-gray-600 fw-light mb-3">
          Buku{" "}
          <span
            className={`mt-3 badge fw-normal ${
              data?.ketersediaan === "Tersedia"
                ? "badge bg-success"
                : "badge bg-danger"
            }`}
            style={{ fontSize: 14 }}
          >
            {data?.ketersediaan}
          </span>{" "}
          untuk
          {`${startDate.toDateString().slice(3, 10)} - ${endDate
            .toDateString()
            .slice(3, 10)}`}
        </h6>
        <h6 className="text-gray-600 fw-light mb-4">
          Droppping Point: Spasso Cafe
        </h6>
        <Button
          className="btn"
          variant="primary"
          hasShadow
          onClick={handleStartBooking}
        >
          Pinjam Buku
        </Button>
      </div>
    </Fade>
  );
};
export default BookingForm;

// const BookingForm = ({ data }) => {
//   const [date, setDate] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//   });

// const [startDate, setStartDate] = useState(new Date());
// const [endDate, setEndDate] = useState(new Date());

// useEffect(() => {
//   setDate(addDays(date.startDate, 14));
// }, [date.startDate]);

// console.log(`start: ${date.startDate}, end: ${date.endDate}`);
//   return (
//     <Fade delay={500}>
//       <div className="card bordered" style={{ padding: "30px 30px" }}>
//         <h4 className="mb-4">Pinjam Sekarang</h4>
//         <label htmlFor="date">Pilih tanggal</label>
//         <InputDate
//           name="date"
//           startDate={date.startDate}
//           setStartDate={setDate}
//         />
//         <h6 className="text-gray-600 fw-light mb-3">
//           Buku{" "}
//           <span
//             className={`mt-3 badge fw-normal ${
//               data.ketersediaan === "Tersedia" ? "badge-info" : "badge-danger"
//             }`}
//             style={{ fontSize: 14 }}
//           >
//             {data.ketersediaan}
//           </span>{" "}
//           {`${date.startDate
//             .toDateString()
//             .slice(3, 10)} - ${date.endDate.toDateString().slice(3, 10)}`}
//         </h6>
//         <h6 className="text-gray-600 fw-light mb-4">
//           Droppping Point: Spasso Cafe
//         </h6>
//         <Button
//           href={`/checkout/${data._id}`}
//           type="link"
//           className="btn btn-primary"
//         >
//           Pinjam Buku
//         </Button>
//       </div>
//     </Fade>
//   );
// };

// export default BookingForm;
