import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import BannerKatalog from ".";

export default {
  component: BannerKatalog,
  title: "BannerKatalog",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof BannerKatalog>;

export const Default: ComponentStory<typeof BannerKatalog> = () => (
  <BannerKatalog />
);
