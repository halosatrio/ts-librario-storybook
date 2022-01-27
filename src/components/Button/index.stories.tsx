import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  children: "Button primary",
};

export const Light = Template.bind({});
Light.args = {
  isLight: true,
  children: "Button light",
};
export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Button small",
};
export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Button large",
};
export const Shadow = Template.bind({});
Shadow.args = {
  hasShadow: true,
  children: "Button shadow",
};
