import React, { Component } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/common/Pagination";
import ListGenre from "../components/common/ListGenre";
import ListBuku from "../components/common/ListBuku";

import { getBooks } from "../services/BookService";
import { getGenres } from "../services/GenreService";
import { paginate } from "../utils/paginate";

class KatalogPage extends Component {
  state = {
    books: [],
    genres: [],
    pageSize: 8,
    currentPage: 1,
  };

  componentDidMount() {
    window.title = "Librario | Katalog";
    window.scrollTo(0, 0);

    const genres = [{ name: "Semua Buku" }, ...getGenres()];
    this.setState({ books: getBooks(), genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Katalog Buku", pageHref: "" },
    ];

    const {
      pageSize,
      currentPage,
      selectedGenre,
      books: allBooks,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allBooks.filter((b) => b.genre._id === selectedGenre._id)
        : allBooks;

    const books = paginate(filtered, currentPage, pageSize);

    return (
      <>
        <NavBar {...this.props} />
        <Breadcrumb data={breadcrumb} />
        <div className="container my-5">
          <div className="row">
            <ListGenre
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
            <div className="col">
              <ListBuku items={books} />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
