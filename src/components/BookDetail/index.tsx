type BookData = {
  judul: string;
  penulis: string;
  penerbit: string;
  genre: string;
  isbn: string;
  kondisi: string;
};

const BookDetail = ({ data }: { data: BookData }) => {
  return (
    <>
      <h3 className="mb-4 text-gray-800">Detail Buku</h3>
      <table className="table">
        <tbody>
          <tr>
            <th>Judul</th>
            <td>{data.judul}</td>
          </tr>
          <tr>
            <th>Penulis</th>
            <td>{data.penulis}</td>
          </tr>
          <tr>
            <th>Penerbit</th>
            <td>{data.penerbit}</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>{data.genre}</td>
          </tr>
          <tr>
            <th>ISBN</th>
            <td>{data.isbn}</td>
          </tr>
          <tr>
            <th>Kondisi</th>
            <td>{data.kondisi}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BookDetail;
