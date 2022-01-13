type BookDataImage = {
  imageUrl: string;
  Judul: string;
};

const BookImage = (data: BookDataImage) => {
  return (
    <figure>
      <img src={data.imageUrl} className="img-fluid" alt={data.Judul} />
      <figcaption className="figure-caption">Cover depan</figcaption>
    </figure>
  );
};

export default BookImage;
