import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { BookingDetailCard } from "./BookingDetailCard";

const BookingDetailCardMeta: ComponentMeta<typeof BookingDetailCard> = {
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

export default BookingDetailCardMeta;

type BookingDetailCardStory = ComponentStory<typeof BookingDetailCard>;

export const MainBookingDetailCard: BookingDetailCardStory = (args) => <BookingDetailCard   />;

