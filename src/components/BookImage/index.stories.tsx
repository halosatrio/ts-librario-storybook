import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookImage from ".";

export default {
  component: BookImage,
  title: "BookImage",
} as ComponentMeta<typeof BookImage>;

const Template: ComponentStory<typeof BookImage> = (args) => (
  <BookImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    imageUrl: "/images/novel-1984.jpg",
    judul: "hehehe",
  },
};
