import Fade from "react-reveal/Fade";

import ButtonLink from "../ButtonLink";

import { BooksData } from "../../types/Books";

const ListBuku = ({ items }: { items: Array<BooksData> | undefined }) => {
  return (
    <Fade>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
        {items?.map((book) => {
          return (
            <div
              key={book._id}
              className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-5"
            >
              <div className="card">
                <figure className="img-wrapper" style={{ maxHeight: 300 }}>
                  <ButtonLink
                    to={`/books/${book._id}`}
                    className="stretched-link d-block"
                  >
                    <img
                      src={book.imageUrl}
                      alt={book.judul}
                      className="img-fluid"
                    />
                  </ButtonLink>
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </Fade>
  );
};

export default ListBuku;
