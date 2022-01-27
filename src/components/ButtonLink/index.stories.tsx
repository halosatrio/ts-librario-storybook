import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonLink from ".";
import StoryRouter from "storybook-react-router";

export default {
  component: ButtonLink,
  title: "ButtonLink",
  decorators: [StoryRouter()],
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "ButtonLink Default",
};
