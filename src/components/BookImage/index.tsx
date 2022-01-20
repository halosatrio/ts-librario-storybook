type BookDataImage = {
  imageUrl: string;
  judul: string;
};

const BookImage = ({ data }: { data: BookDataImage }) => {
  return (
    <figure>
      <img src={data.imageUrl} className="img-fluid" alt={data.judul} />
      <figcaption className="figure-caption">Cover depan</figcaption>
    </figure>
  );
};

export default BookImage;
