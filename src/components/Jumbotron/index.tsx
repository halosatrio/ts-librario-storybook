import Fade from "react-reveal/Fade";

import Button from "../Button";

const Jumbotron = ({
  refPilihanBuku,
}: {
  refPilihanBuku: React.MutableRefObject<HTMLInputElement | undefined>;
}) => {
  function showPilihanBuku() {
    window.scrollTo({
      top: refPilihanBuku?.current?.offsetTop
        ? refPilihanBuku.current.offsetTop - 30
        : 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="hero">
      <Fade bottom>
        <div className="container d-none d-lg-block">
          <div className="row my-5">
            <div className="col-lg-6 pr-4 my-3">
              <h1 className="font-weight-bold line-height-1 mb-3">
                Perpustakaan Kolektif dan Media Literasi.
              </h1>
              <p
                className="mb-4 text-muted w-75"
                style={{ lineHeight: "170%" }}
              >
                An easy-to-access library within the grasp of your hand, where
                everyone can borrow and lend their favorite books.
              </p>
              <Button
                className="px-5"
                hasShadow
                isPrimary
                onClick={showPilihanBuku}
              >
                Pinjam Buku
              </Button>
              <div className="row mt-5">
                <div className="col-3">
                  <img
                    src={"../assets/images/icon-book.png"}
                    alt="icon-book"
                    style={{ maxHeight: 52 }}
                  />
                  <p className="mt-2">400 Buku</p>
                </div>
                <div className="col-lg-auto col-xl-3">
                  <img
                    src={"../assets/images/icon-social.png"}
                    alt="icon-social"
                    style={{ maxHeight: 52 }}
                  />
                  <p className="mt-2">50 Anggota</p>
                </div>
                <div className="col-auto">
                  <img
                    src={"../assets/images/icon-house.png"}
                    alt="icon-house"
                    style={{ maxHeight: 52 }}
                  />
                  <p className="mt-2">5 Dropping Point</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="img-hero">
                <img
                  src={"../assets/images/hero1.jpg"}
                  alt="Rom with couches"
                />
              </figure>
            </div>
          </div>
        </div>
      </Fade>
      <div className="jumbotron jumbotron-fluid d-block d-lg-none">
        <Fade bottom>
          <div className="container">
            <h1 className="font-weight-bold line-height-1">
              Perpustakaan Kolektif dan <br /> Media Literasi.
            </h1>
            <p className="lead my-4">
              An easy-to-access library within the grasp of your hand, where
              everyone can borrow and lend their favorite books.
            </p>
            <div className="row mt-4 mb-3 justify-content-center px-5">
              <div className="col">
                <img
                  src={"../assets/images/icon-book.png"}
                  alt="icon-book"
                  style={{ maxHeight: 52 }}
                />
                <p className="mt-2 icon">400 Buku</p>
              </div>
              <div className="col">
                <img
                  src={"../assets/images/icon-social.png"}
                  alt="icon-social"
                  style={{ maxHeight: 52 }}
                />
                <p className="mt-2 icon">50 Anggota</p>
              </div>
              <div className="col">
                <img
                  src={"../assets/images/icon-house.png"}
                  alt="icon-house"
                  style={{ maxHeight: 52 }}
                />
                <p className="mt-2 icon">5 Dropping Point</p>
              </div>
            </div>
            <Button
              className="px-5"
              hasShadow
              isPrimary
              onClick={showPilihanBuku}
              styles={{ zIndex: 3 }}
            >
              Pinjam Buku
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Jumbotron;
