import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputDate from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: InputDate,
  title: "InputDate",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = (args) => (
  <InputDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
  setDate: () => {},
};
