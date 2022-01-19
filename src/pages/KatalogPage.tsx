import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/common/Pagination";
import ListGenre from "../components/common/ListGenre";
import ListBuku from "../components/common/ListBuku";

import { getBooks } from "../services/BookService";
import { getGenres } from "../services/GenreService";
import { paginate } from "../utils/paginate";

import { BooksGenre, BooksData } from "../types/Books";

const KatalogPage = () => {
  const [books, setBooks] = useState<Array<BooksData>>();
  const [genres, setGenres] = useState<any>([]);
  const [selectedGenre, setSelectedGenre] = useState<BooksGenre>();
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState<BooksData | Array<BooksData>>();
  const pageSize = 8;

  useEffect(() => {
    document.title = "Librario | Katalog";
    window.scrollTo(0, 0);

    setGenres([{ name: "Semua Buku" }, ...getGenres()]);
    setBooks(getBooks());
  }, []);

  useEffect(() => {
    setFiltered(
      selectedGenre && selectedGenre._id
        ? books?.filter((b) => b?.genre?._id === selectedGenre?._id)
        : books
    );
  }, [books, selectedGenre]);

  useEffect(() => {
    setBooks(paginate(filtered, currentPage, pageSize));
  }, [filtered, currentPage, pageSize]);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Katalog Buku", pageHref: "" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre: { _id: string; name: string }) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  return (
    <>
      <NavBar />
      <Breadcrumb data={breadcrumb} />
      <div className="container my-5">
        <div className="row">
          <ListGenre
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
          <div className="col">
            <ListBuku items={books} />
            <Pagination
              itemsCount={Array.isArray(filtered) ? filtered.length : 0}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KatalogPage;
