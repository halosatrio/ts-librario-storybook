import { ComponentMeta, ComponentStory } from "@storybook/react";
import RekomendasiBuku from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: RekomendasiBuku,
  title: "RekomendasiBuku",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof RekomendasiBuku>;

const Template: ComponentStory<typeof RekomendasiBuku> = (args) => (
  <RekomendasiBuku {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      _id: "5f041fa96327a95b23cb1523",
      judul: "Enaknya Berdebat dengan Orang Goblok",
      genre: {
        _id: "5f0405eaa6046c3a222514be",
        name: "Nonfiksi",
      },
      penulis: "Puthut EA",
      imageUrl: "/images/nonfiksi-enaknya-berdebat.jpg",
    },
    {
      _id: "5f041fc3dda489a8bcdcbb5b",
      judul: "Melawat ke Timur",
      genre: {
        _id: "5f0405eaa6046c3a222514be",
        name: "Nonfiksi",
      },
      penulis: "Kardono Setyorakhmadi",
      imageUrl: "/images/nonfiksi-melawat-ke-timur.jpg",
    },
    {
      _id: "5f041fda2943f3e8f8c50edd",
      judul: "Migas the Untold Story",
      genre: {
        _id: "5f0405eaa6046c3a222514be",
        name: "Nonfiksi",
      },
      penulis: "AM Putut Prabantoro",
      imageUrl: "/images/nonfiksi-migas-story.jpg",
    },
  ],
};
