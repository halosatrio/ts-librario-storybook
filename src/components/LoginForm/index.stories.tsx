import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginForm from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: LoginForm,
  title: "LoginForm",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    email: "",
    password: "",
  },
  onChange: () => {},
};
