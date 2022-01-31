import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Fade from "react-reveal/Fade";

import Button from "../Button";
import InputDate from "../InputDate";

import { checkoutBooking } from "../../store/checkout/action";
import { CheckoutPayload } from "../../types/CheckoutPayload";
import { BooksData } from "../../types/Books";

const BookingForm = ({ data }: { data: Partial<BooksData> | undefined }) => {
  const [startDate, setstartDate] = useState<Date>(new Date());
  const [endDate, setendDate] = useState<Date>(new Date());

  const dispatch = useDispatch();

  // Hooks
  useEffect(() => {
    setendDate(handleAddDate(new Date(), 14));
  }, []);

  const handleAddDate = (date: any, days: number) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const handleUpdateDate = (date: any) => {
    setstartDate(date);
    setendDate(handleAddDate(date, 14));
  };

  const handleStartBooking = () => {
    return null;
  };

  // startBooking = () => {
  //   const { startDate, endDate } = this.state;
  //   this.props.startBooking({
  //     _id: this.props.data._id,
  //     date: {
  //       startDate: startDate,
  //       endDate: endDate,
  //     },
  //   });
  //   this.props.history.push(`/checkout/${this.props.data._id}`);
  // };

  console.log(`RENDER - start: ${startDate}, end: ${endDate}`);

  return (
    <Fade delay={500}>
      <div className="card bordered" style={{ padding: "30px 30px" }}>
        <h4 className="mb-4">Pinjam Sekarang</h4>
        <label htmlFor="date">Pilih tanggal</label>
        <InputDate startDate={startDate} setDate={handleUpdateDate} />
        <h6 className="text-gray-600 font-weight-light mb-3">
          Buku{" "}
          <span
            className={`mt-3 badge font-weight-normal ${
              data?.ketersediaan === "Tersedia" ? "badge-info" : "badge-danger"
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
        <h6 className="text-gray-600 font-weight-light mb-4">
          Droppping Point: Spasso Cafe
        </h6>
        <Button className="btn" isPrimary hasShadow onClick={() => {}}>
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
//         <h6 className="text-gray-600 font-weight-light mb-3">
//           Buku{" "}
//           <span
//             className={`mt-3 badge font-weight-normal ${
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
//         <h6 className="text-gray-600 font-weight-light mb-4">
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
