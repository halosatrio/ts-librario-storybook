// sebenernya komponen ini gak perlu dibikin storiesnya
// soalnya lebih ke page bukan reusable komponenen
// sekali pakai doang dan cuma render content doang

import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserGuide from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  component: UserGuide,
  title: "UserGuide",
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof UserGuide>;

export const Default: ComponentStory<typeof UserGuide> = () => <UserGuide />;
