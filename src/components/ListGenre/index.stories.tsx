import { ComponentMeta, ComponentStory } from "@storybook/react";
import ListGenre from ".";

export default {
  component: ListGenre,
  title: "ListGenre",
} as ComponentMeta<typeof ListGenre>;

const Template: ComponentStory<typeof ListGenre> = (args) => (
  <ListGenre {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { _id: "5f0405eaa6046c3a222514be", name: "Nonfiksi" },
    { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
    { _id: "5f0406594cf62eb10e265102", name: "Self Help" },
    { _id: "5f04065eafb9e7be94479796", name: "Puisi" },
    { _id: "5f0406623b8ebae4e594e87e", name: "Sejarah" },
    { _id: "5f040667398e692292d52610", name: "Kumpulan Cerpen" },
  ],
  onItemSelect: () => {},
  selectedItem: { _id: "5f04063750c55b3ca78d648d", name: "Novel" },
};
