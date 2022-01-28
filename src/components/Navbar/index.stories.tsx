import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: Navbar,
  title: "Navbar",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = (args) => (
  <div className="container">
    <Navbar {...args} />
  </div>
);
