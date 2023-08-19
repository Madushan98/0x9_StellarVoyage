import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import BookingSummmaryCardSmall from "./BookingSummmaryCardSmall";
import image from "../../config/image";

const BookingSummaryCardMeta: ComponentMeta<typeof BookingSummmaryCardSmall> = {
  title: "BookingSummaryCard",
  component: BookingSummmaryCardSmall,
  args:{
    imageSource: image.Titan,
    price: "3000",
    passengerCount: "12",
    flightNumber: "E234",
    seatNumber: "23",
    flightClass: "E",
    destinationImageSource: image.Titan,
    destinationName: "Destination",
    fromName: "From ",
    arrivalTime: "5:20",
    departureTime: "6:20",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default BookingSummaryCardMeta;

type BookingSummaryCardStory = ComponentStory<typeof BookingSummmaryCardSmall>;

export const BasicBookingSummaryCard: BookingSummaryCardStory = (args) => <BookingSummmaryCardSmall {...args}   />;