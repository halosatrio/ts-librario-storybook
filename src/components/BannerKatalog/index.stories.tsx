import { ComponentStory, ComponentMeta } from "@storybook/react";

import BannerKatalog from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: BannerKatalog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BannerKatalog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BannerKatalog> = (args) => (
  <BannerKatalog {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "BannerKatalog",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "BannerKatalog",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "BannerKatalog",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "BannerKatalog",
};
