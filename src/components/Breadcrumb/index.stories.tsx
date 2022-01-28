import { ComponentMeta, ComponentStory } from "@storybook/react";
import Breadcrumb from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: Breadcrumb,
  title: "Breadcrumb",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Detail Buku", pageHref: "" },
  ],
};
