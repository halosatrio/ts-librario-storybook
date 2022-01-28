import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookingInformation from ".";

export default {
  component: BookingInformation,
  title: "BookingInformation",
} as ComponentMeta<typeof BookingInformation>;

const Template: ComponentStory<typeof BookingInformation> = (args) => (
  <BookingInformation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checkoutData: {
    name: "hehehe",
    email: "test@test.com",
    phone: "089934422398",
  },
  checkout: {
    _id: "5f040773f23e46ba32fe6f3c",
    date: {
      startDate: new Date(),
      endDate: new Date(),
    },
  },
  book: {
    judul: "#TemanTapiMenikah",
    penulis: "Ayudia Bing Slamet & Ditto Percussion",
    imageUrl: "/images/novel-teman-tapi-menikah.jpg",
  },
  onChange: () => {},
};
