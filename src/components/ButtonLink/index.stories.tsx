import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonLink from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: ButtonLink,
  title: "ButtonLink",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "ButtonLink Default",
};
