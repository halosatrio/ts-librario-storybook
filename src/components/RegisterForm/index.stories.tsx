import { ComponentMeta, ComponentStory } from "@storybook/react";
import RegisterForm from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: RegisterForm,
  title: "RegisterForm",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
  data: {
    name: "",
    email: "",
    password: "",
  },
};
