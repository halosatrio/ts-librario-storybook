import { Params } from "react-router-dom";

const books = [
  {
    _id: "5f040773f23e46ba32fe6f3c",
    isbn: "9786020290508",
    judul: "#TemanTapiMenikah",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Ayudia Bing Slamet & Ditto Percussion",
    penerbit: "Elex Media Komputindo",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-teman-tapi-menikah.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04076c17702d5c00794446",
    isbn: "9786022912347",
    judul: "1984",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "George Orwell",
    penerbit: "Bentang Pustaka",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-1984.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f0407792db868f4f9ff8b84",
    isbn: "9786021318485",
    judul: "24 Jam Bersama Gaspar, Sebuah Cerita Detektif",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Sabda Armandio",
    penerbit: "Mojok",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-gaspar.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04074025bc7f0c2f1fca0d",
    isbn: "9789792272772",
    judul: "Aku Ini Binatang Jalang",
    bahasa: "Indonesia",
    genre: { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    penulis: "Chairil Anwar",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/puisi-binatang-jalang.jpg",
    isPopular: false,
    kode: "WP",
  },
  {
    _id: "5f04077c65129e475419288b",
    isbn: "9786022912828",
    judul: "Animal Farm",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "George Orwell",
    penerbit: "Bentang Pustaka",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-animal-farm.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04071ca6931850f8a475c0",
    isbn: "9789799108913",
    judul: "Antropologi Kuliner Nusantara",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "Seri Buku Tempo",
    penerbit: "KPG",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-kuliner-nusantara.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f04074c0c9f98400356f701",
    isbn: "9786022912316",
    judul: "Asal Muasal Pelukan: Sekumpulan Puisi",
    bahasa: "Indonesia",
    genre: { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    penulis: "Candra Malik",
    penerbit: "Bentang Pustaka",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/puisi-asal-pelukan.jpg",
    isPopular: false,
    kode: "WP",
  },
  {
    _id: "5f040766b8e9086a0f06a2bb",
    isbn: "9786026595973",
    judul: "Berdamai dengan Diri Sendiri",
    bahasa: "Indonesia",
    genre: { _id: "5f0406594cf62eb10e265102", name: "Self Help" },
    penulis: "Muthia Sayekti",
    penerbit: "Psikologi Corner",
    kondisi: "Baik",
    ketersediaan: "Tidak Tersedia",
    imageUrl: "/images/self-help-berdamai-diri-sendiri.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f0407075e721645557d46b0",
    isbn: "9789797880156",
    judul: "Boedi Oetomo: Awal Bangkitnya Kesadaran Bangsa",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "Gamal Komandoko",
    penerbit: "Media Pressindo",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-budi-utomo.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04076f2a875bd2d35fa93e",
    isbn: "9789799731234",
    judul: "Bumi Manusia",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Pramoedya Ananta Toer",
    penerbit: "Lentera Dipantara",
    kondisi: "",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-bumi-manusia.jpg",
    isPopular: true,
    kode: "FA",
  },
  {
    _id: "5f040b9d46c2bece53683470",
    isbn: "9786020312583",
    judul: "Cantik itu Luka",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Eka Kurniawan",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-cantik-itu-luka.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04200678a1373c61083e5e",
    isbn: "9789791090452",
    judul: "Certified Ethical Hacker, 400% Illegal",
    bahasa: "Indonesia",
    genre: { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    penulis: "S'to",
    penerbit: "Jasakom",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/nonfiksi-ethical-hacker.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f040697fccfa23643a498ce",
    isbn: "9786020386355",
    judul: "Cinta Tak Ada Mati",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Eka Kurniawan",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-cinta-tak-mati.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f04069f51d87cc1fa54d18d",
    isbn: "9789794072189",
    judul: "Dari Ave Maria ke Jalan Lain ke Roma",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Idrus",
    penerbit: "Balai Pustaka",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-ave-maria.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f04072081c51fabbfc3fe0a",
    isbn: "9786026208231",
    judul: "Dari Buku ke Buku Sambung Menyambung Menjadi Satu",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "P. Swantoro",
    penerbit: "KPG",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-buku-ke-buku.jpg",
    isPopular: false,
    kode: "WA",
  },
  {
    _id: "5f041fa96327a95b23cb1523",
    isbn: "9786025868504",
    judul: "Enaknya Berdebat dengan Orang Goblok",
    bahasa: "Indonesia",
    genre: { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    penulis: "Puthut EA",
    penerbit: "Shira Media",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/nonfiksi-enaknya-berdebat.jpg",
    isPopular: true,
    kode: "WA",
  },
  {
    _id: "5f04201d5f6ab46833bb3ade",
    isbn: "9786027306905",
    judul: "Fenomenologi Wanita Ber-high heels",
    bahasa: "Indonesia",
    genre: { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    penulis: "Ika Noorharini",
    penerbit: "PT Artha Kencana Mandiri",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/nonfiksi-wanita-high-heels.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f040727b4581bd01ea4f8ee",
    isbn: "9786024241384",
    judul: "Guns, Germs, & Steel",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "Jared Diamond",
    penerbit: "KPG",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-guns-steel.jpg",
    isPopular: false,
    kode: "WA",
  },
  {
    _id: "5f04072b16806fbaa790e814",
    isbn: "9786026577337",
    judul: "Homo Deus: Masa Depan Umat Manusia",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "Yuval Noah Harari",
    penerbit: "Alvabet",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-homo-deus.jpg",
    isPopular: false,
    kode: "WA",
  },
  {
    _id: "5f040769c3ba9a73329b8db2",
    isbn: "9789792299755",
    judul: "How to Be Interesting",
    bahasa: "Indonesia",
    genre: { _id: "5f0406594cf62eb10e265102", name: "Self Help" },
    penulis: "Jessica Hagy",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/self-help-how-to-be-interesting.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f04075c8c6fd94e01e50b34",
    isbn: "9789792297065",
    judul: "Hujan Bulan Juni: Sepilihan Sajak",
    bahasa: "Indonesia",
    genre: { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    penulis: "Sapardi Djoko Damono",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/puisi-hujan-bulan-juni.jpg",
    isPopular: false,
    kode: "WP",
  },
  {
    _id: "5f0407036c0e746a3a283ed0",
    isbn: "9789792265378",
    judul: "Kisah-Kisah Tengah Malam",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Edgar Allan Poe",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-kisah-malam.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f041f06ce0bfa90e91a8b56",
    isbn: "9786024242862",
    judul: "Larung",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Ayu Utami",
    penerbit: "KPG",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-larung.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f041fc3dda489a8bcdcbb5b",
    isbn: "9786021318133",
    judul: "Melawat ke Timur",
    bahasa: "Indonesia",
    genre: { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    penulis: "Kardono Setyorakhmadi",
    penerbit: "Mojok",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/nonfiksi-melawat-ke-timur.jpg",
    isPopular: false,
    kode: "WA",
  },
  {
    _id: "5f040693d0c5cdfd63b26276",
    isbn: "9789795115367",
    judul: "Memoar Sherlock Holmes",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Sir Arthur Conan Doyle",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Sedang",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-memoar-sherlock.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f041fda2943f3e8f8c50edd",
    isbn: "9786020311111",
    judul: "Migas the Untold Story",
    bahasa: "Indonesia",
    genre: { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    penulis: "AM Putut Prabantoro",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/nonfiksi-migas-story.jpg",
    isPopular: false,
    kode: "WA",
  },
  {
    _id: "5f040736685a401e68880eac",
    isbn: "9786020384245",
    judul: "Museum Masa Kecil",
    bahasa: "Indonesia",
    genre: { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    penulis: "Avianti Armand",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/puisi-museum-masa-kecil.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f041f182776d316139bc403",
    isbn: "9786020320595",
    judul: "Orang-Orang Proyek",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Ahmad Tohari",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-orang-proyek.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f041f25d16ef56201d2dc51",
    isbn: "9786021318447",
    judul: "Para Bajingan yang Menyenangkan",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Puthut EA",
    penerbit: "Mojok",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-para-bajingan.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f041f537c6fbb1ed4417cc8",
    isbn: "9789792201963",
    judul: "Ronggeng Dukuh Paruk",
    bahasa: "Indonesia",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    penulis: "Ahmad Tohari",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/novel-ronggeng-dukuh-paruk.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f040723acdab220897b5b3d",
    isbn: "9786024244163",
    judul:
      "Sapiens: Sejarah Ringkas Umat Manusia dari Zaman Batu hingga Perkiraan Kepunahannya",
    bahasa: "Indonesia",
    genre: { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    penulis: "Yuval Noah Harari",
    penerbit: "KPG",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/sejarah-sapiens.jpg",
    isPopular: true,
    kode: "WA",
  },
  {
    _id: "5f0406832db669318bec2462",
    isbn: "9786021318577",
    judul: "Sebuah Kitab yang Tak Suci",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Puthut EA",
    penerbit: "Mojok",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-kitab-tak-suci.jpg",
    isPopular: false,
    kode: "H",
  },
  {
    _id: "5f040763e9e32dacff25f96c",
    isbn: "9786024526986",
    judul: "Sebuah Seni untuk Bersikap Bodo Amat",
    bahasa: "Indonesia",
    genre: { _id: "5f0406594cf62eb10e265102", name: "Self Help" },
    penulis: "Mark Manson",
    penerbit: "Grasindo",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/self-help-bodo-amat.jpg",
    isPopular: true,
    kode: "H",
  },
  {
    _id: "5f04066a8d343ea96cbbc383",
    isbn: "9789792296167",
    judul: "Selama Kita Tersesat di Luar Angkasa",
    bahasa: "Indonesia",
    genre: { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
    penulis: "Maggie Tiojakin",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/kumcer-tersesat-luar-angkasa.jpg",
    isPopular: false,
    kode: "Spasso Cafe",
  },
  {
    _id: "5f040739574c36e9086f8bea",
    isbn: "9786020325781",
    judul: "Selamat Menunaikan Ibadah Puisi",
    bahasa: "Indonesia",
    genre: { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    penulis: "Joko Pinurbo",
    penerbit: "Gramedia Pustaka Utama",
    kondisi: "Baik",
    ketersediaan: "Tersedia",
    imageUrl: "/images/puisi-ibadah-puisi.jpg",
    isPopular: true,
    kode: "Spasso Cafe",
  },
];

export function getBooks() {
  return books;
}

export function getBook(id: string | Readonly<Params<string>>) {
  return books.find((m) => m._id === id);
}
