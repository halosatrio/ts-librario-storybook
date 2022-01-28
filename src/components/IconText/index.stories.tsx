import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconText from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: IconText,
  title: "IconText",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof IconText>;

export const Default: ComponentStory<typeof IconText> = (args) => (
  <IconText {...args} />
);
