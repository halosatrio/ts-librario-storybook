import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputFile from ".";

export default {
  component: InputFile,
  title: "InputFile",
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => (
  <InputFile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "input_file",
  name: "input_file",
  accept: "image/*",
  value: "",
  onChange: (e) => {},
  placeholder: "Browse a file...",
};
