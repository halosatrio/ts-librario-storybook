import IconText from "../IconText";
import ButtonLink from "../ButtonLink";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 text-center text-md-start">
            <IconText />
            <p className="brand-tagline">
              Wadah perpustakaan kolektif dan media literasi daring.
            </p>
          </div>
          <div className="col-sm-7 col-md-3 offset-md-1 col-lg-3 offset-lg-2 mb-4 text-center text-sm-start">
            <h6 className="mt-2">Perpustakaan Kolektif</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <ButtonLink to="/register">Daftar Anggota</ButtonLink>
              </li>
              <li className="list-group-item">
                <ButtonLink to="/catalogue">Katalog Buku</ButtonLink>
              </li>
              <li className="list-group-item">
                <ButtonLink to="/user-guide">User Guide</ButtonLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 col-md-4 col-lg-3 offset-lg-1 text-center text-sm-start">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <ButtonLink isExternal to="mailto:support@librario.com">
                  support@librario.com
                </ButtonLink>
              </li>
              <li className="list-group-item">
                <ButtonLink isExternal to="tel:+622122081996">
                  021 - 2208 - 1996
                </ButtonLink>
              </li>
              <li className="list-group-item">
                <span>Spasso cafe, Jl Pandega Marta, Mlati, Sleman</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col text-center copyrights">
            &copy; copyright 2020 | built with <span>love</span> by{" "}
            <ButtonLink isExternal to="https://instagram.com/strbyj">
              Satrio Bayu Aji
            </ButtonLink>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
