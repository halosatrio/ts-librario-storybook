import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputText from ".";

export default {
  component: InputText,
  title: "InputText",
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "input_text",
  name: "input_text",
  type: "text",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
  onChange: (e) => {},
};
