import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputDate from ".";

export default {
  component: InputDate,
  title: "InputDate",
} as ComponentMeta<typeof InputDate>;

const Template: ComponentStory<typeof InputDate> = (args) => (
  <InputDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  startDate: new Date(),
  setDate: () => {},
};
