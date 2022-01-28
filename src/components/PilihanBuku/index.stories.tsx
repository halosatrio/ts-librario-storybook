import { ComponentMeta, ComponentStory } from "@storybook/react";
import PilihanBuku from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: PilihanBuku,
  title: "PilihanBuku",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof PilihanBuku>;

const Template: ComponentStory<typeof PilihanBuku> = (args) => (
  <PilihanBuku {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: "Pilihan Buku Nonfiksi",
      items: [
        {
          _id: "5f041fa96327a95b23cb1523",
          isbn: "9786025868504",
          judul: "Enaknya Berdebat dengan Orang Goblok",
          bahasa: "Indonesia",
          genre: {
            _id: "5f0405eaa6046c3a222514be",
            name: "Nonfiksi",
          },
          penulis: "Puthut EA",
          penerbit: "Shira Media",
          kondisi: "Baik",
          ketersediaan: "Tersedia",
          imageUrl: "/images/nonfiksi-enaknya-berdebat.jpg",
          isPopular: true,
          kode: "WA",
        },
        {
          _id: "5f041fc3dda489a8bcdcbb5b",
          isbn: "9786021318133",
          judul: "Melawat ke Timur",
          bahasa: "Indonesia",
          genre: {
            _id: "5f0405eaa6046c3a222514be",
            name: "Nonfiksi",
          },
          penulis: "Kardono Setyorakhmadi",
          penerbit: "Mojok",
          kondisi: "Baik",
          ketersediaan: "Tersedia",
          imageUrl: "/images/nonfiksi-melawat-ke-timur.jpg",
          isPopular: false,
          kode: "WA",
        },
        {
          _id: "5f041fda2943f3e8f8c50edd",
          isbn: "9786020311111",
          judul: "Migas the Untold Story",
          bahasa: "Indonesia",
          genre: {
            _id: "5f0405eaa6046c3a222514be",
            name: "Nonfiksi",
          },
          penulis: "AM Putut Prabantoro",
          penerbit: "Gramedia Pustaka Utama",
          kondisi: "Baik",
          ketersediaan: "Tersedia",
          imageUrl: "/images/nonfiksi-migas-story.jpg",
          isPopular: false,
          kode: "WA",
        },
        {
          _id: "5f04201d5f6ab46833bb3ade",
          isbn: "9786027306905",
          judul: "Fenomenologi Wanita Ber-high heels",
          bahasa: "Indonesia",
          genre: {
            _id: "5f0405eaa6046c3a222514be",
            name: "Nonfiksi",
          },
          penulis: "Ika Noorharini",
          penerbit: "PT Artha Kencana Mandiri",
          kondisi: "Baik",
          ketersediaan: "Tersedia",
          imageUrl: "/images/nonfiksi-wanita-high-heels.jpg",
          isPopular: false,
          kode: "Spasso Cafe",
        },
      ],
    },
  ],
};
