import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    variant: { control: 'radio', option: ["primary", "light"] },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    size: { control: 'radio', option: ["sm", "md", "lg"] },
    hasShadow: { control: 'boolean' },
    isBlock: { control: 'boolean' },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  children: "Button Default",
};
export const Disable = Template.bind({});
Disable.args = {
  isDisabled: true,
  children: "Button disable",
};
export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: "Button",
};
export const Variant = Template.bind({});
Variant.args = {
  variant: "primary",
  children: "Button style variant",
};
export const Size = Template.bind({});
Size.args = {
  size: "sm",
  variant: 'primary',
  children: "Different Button Size",
};
export const Shadow = Template.bind({});
Shadow.args = {
  hasShadow: true,
  children: "Button shadow",
};
