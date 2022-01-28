import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListBuku from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: ListBuku,
  title: "ListBuku",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ListBuku>;

const Template: ComponentStory<typeof ListBuku> = (args) => (
  <ListBuku {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
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
  ],
};
