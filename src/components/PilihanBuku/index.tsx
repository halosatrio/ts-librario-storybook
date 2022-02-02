import Fade from "react-reveal/Fade";

import ButtonLink from "../ButtonLink";
import { PilihanBukuWrapper } from "./style";

interface DataBuku {
  _id: string;
  isbn: string;
  judul: string;
  bahasa: string;
  genre: { _id: string; name: string };
  penulis: string;
  penerbit: string;
  kondisi: string;
  ketersediaan: string;
  imageUrl: string;
  isPopular: boolean;
  kode: string;
}

type PilihanBukuData = {
  name: string;
  items: Array<DataBuku>;
};

const PilihanBuku = ({ data }: { data: Array<PilihanBukuData> }) => {
  return (
    <>
      {data.map((pilihan, index1) => (
        <PilihanBukuWrapper
          key={`pilihan=${index1}`}
          className="container mb-5"
        >
          <Fade bottom>
            <h4 className="mb-3 fw-weight-medium">{pilihan.name}</h4>
            <div className="row">
              {pilihan.items.map((item, index2) => {
                return (
                  <div
                    key={`pilihan-${index1}-item-${index2}`}
                    className="col-6 col-md-5 offset-md-1 col-lg-3 offset-lg-0 mb-4"
                  >
                    <Fade bottom delay={300 * index2}>
                      <div className="card">
                        {item.isPopular && <div className="tag">Populer</div>}
                        <figure
                          className="img-wrapper"
                          style={{ maxHeight: 300 }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.judul}
                            className="img-fluid"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <ButtonLink
                            to={`/books/${item._id}`}
                            className="stretched-link d-block"
                          >
                            <h5>{item.judul}</h5>
                          </ButtonLink>
                          <span>{item.penulis}</span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </Fade>
        </PilihanBukuWrapper>
      ))}
    </>
  );
};

export default PilihanBuku;
