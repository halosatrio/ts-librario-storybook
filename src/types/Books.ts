export interface BooksData {
  _id?: string;
  isbn?: string;
  judul?: string;
  bahasa?: string;
  genre?: BooksGenre;
  penulis?: string;
  penerbit?: string;
  kondisi?: string;
  ketersediaan?: string;
  imageUrl?: string;
  isPopular?: string;
  kode?: string;
}

export interface BooksGenre {
  _id: string;
  name: string;
}
