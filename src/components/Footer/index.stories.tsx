import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: Footer,
  title: "Footer",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
