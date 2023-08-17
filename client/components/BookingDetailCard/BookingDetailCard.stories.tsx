import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { BookingDetailCard } from "./BookingDetailCard";

const MyButtonMeta: ComponentMeta<typeof BookingDetailCard> = {
  title: "BookingDetailCard",
  component: BookingDetailCard,
  args: {
    title: "Login with Google",
    detail:"Mercury is the smallest planet in the Solar System and the closest to the Sun."
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof BookingDetailCard>;

export const MainBookingDetailCard: MyButtonStory = (args) => <BookingDetailCard   />;

