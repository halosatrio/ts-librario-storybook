import { ComponentMeta, ComponentStory } from "@storybook/react";
import Jumbotron from ".";

export default {
  component: Jumbotron,
  title: "Jumbotron",
} as ComponentMeta<typeof Jumbotron>;

export const Default: ComponentStory<typeof Jumbotron> = (args) => (
  <Jumbotron {...args} />
);
