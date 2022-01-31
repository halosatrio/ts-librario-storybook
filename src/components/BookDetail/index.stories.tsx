import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetail from ".";

export default {
  component: BookDetail,
  title: "BookDetail",
} as ComponentMeta<typeof BookDetail>;

const Template: ComponentStory<typeof BookDetail> = (args) => (
  <BookDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    judul: "#TemanTapiMenikah",
    penulis: "Ayudia Bing Slamet & Ditto Percussion",
    penerbit: "Elex Media Komputindo",
    genre: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    isbn: "9786020290508",
    kondisi: "Baik",
  },
};
