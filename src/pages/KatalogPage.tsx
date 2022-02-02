import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import ListGenre from "../components/ListGenre";
import ListBuku from "../components/ListBuku";

import { getBooks } from "../services/BookService";
import { getGenres } from "../services/GenreService";
import { paginate } from "../utils/paginate";

import { BooksGenre, BooksData } from "../types/Books";
import { filter } from "lodash";

const KatalogPage = () => {
  const [books, setBooks] = useState<Array<BooksData>>();
  const genres = [{ _id: "0", name: "Semua Buku" }, ...getGenres()];
  const [selectedGenre, setSelectedGenre] = useState<BooksGenre>({
    _id: "0",
    name: "Semua Buku",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState<Array<BooksData>>();
  const [displayedBooks, setDisplayedBooks] = useState<Array<BooksData>>();

  const pageSize = 8;

  useEffect(() => {
    document.title = "Librario | Katalog";
    window.scrollTo(0, 0);
    setBooks(getBooks());
  }, []);

  useEffect(() => {
    setFiltered(books);
    setDisplayedBooks(paginate(books, currentPage, pageSize));
    console.log("test displayed first");
  }, [books]);

  useEffect(() => {
    if (selectedGenre?._id === "0") {
      setFiltered(books);
    } else
      setFiltered(books?.filter((b) => b?.genre?._id === selectedGenre?._id));
  }, [selectedGenre]);

  useEffect(() => {
    setDisplayedBooks(paginate(filtered, currentPage, pageSize));
  }, [currentPage, filtered]);

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

  console.log("hehe", selectedGenre);
  // console.log("selectedGenre", selectedGenre);
  // // console.log("books", paginate(filtered, currentPage, pageSize));
  // console.log("filtered", filtered);
  // console.log("displayedBooks", displayedBooks);

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <div className="container my-5">
        <div className="row">
          <ListGenre
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
          <div className="col">
            <ListBuku items={displayedBooks} />
            <Pagination
              itemsCount={!!filtered ? filtered.length : 0}
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
