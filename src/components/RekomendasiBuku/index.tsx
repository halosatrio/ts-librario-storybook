import Fade from "react-reveal/Fade";

import ButtonLink from "../ButtonLink";
import { RekomendasiBukuWrapper } from "./style";

type RekomendasiProps = {
  refPilihanBuku?: any;
  data: Array<{
    _id: string;
    genre: { _id: string; name: string };
    imageUrl: string;
    judul: string;
    penulis: string;
  }>;
};

const RekomendasiBuku = (props: RekomendasiProps) => {
  return (
    <RekomendasiBukuWrapper
      className="container mb-4"
      ref={props.refPilihanBuku}
    >
      <Fade>
        <h4 className="h3 mb-4 text-center">Rekomendasi Buku</h4>
        <div className="row">
          {props.data.map((item, index) => {
            return (
              <div
                key={`rekomendasi-${index}`}
                className="col-8 offset-2 col-md-6 offset-md-3 col-lg-4 offset-lg-0 mb-4"
              >
                <Fade bottom delay={500 * index}>
                  <div className="card">
                    <div className="tag">{item.genre.name}</div>
                    <figure className="img-wrapper" style={{ maxHeight: 400 }}>
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
    </RekomendasiBukuWrapper>
  );
};

export default RekomendasiBuku;
