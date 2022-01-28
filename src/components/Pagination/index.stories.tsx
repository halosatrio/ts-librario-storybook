import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from ".";

export default {
  component: Pagination,
  title: "Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  itemsCount: 100,
  pageSize: 10,
  currentPage: 1,
  onPageChange: () => {},
};
