import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import BannerKatalog from ".";

export default {
  component: BannerKatalog,
  title: "BannerKatalog",
  decorators: [StoryRouter()],
} as ComponentMeta<typeof BannerKatalog>;

const Template: ComponentStory<typeof BannerKatalog> = () => <BannerKatalog />;

export const Default = Template.bind({});
Default.args = {
  children: "BannerKatalog Default",
};
