import { ComponentMeta, ComponentStory } from "@storybook/react";
import TitleText from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: TitleText,
  title: "TitleText",
} as ComponentMeta<typeof TitleText>;

const Template: ComponentStory<typeof TitleText> = (args) => (
  <TitleText {...args}>Title Text</TitleText>
);

export const Default = Template.bind({});
Default.args = {
  isBold: false,
};
