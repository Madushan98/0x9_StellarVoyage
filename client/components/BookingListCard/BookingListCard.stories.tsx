import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { BookingListCard } from "./BookingListCard";
import image from "../../config/image";


const BookingListCardMeta: ComponentMeta<typeof BookingListCard> = {
  title: "BookingListCard",
  component: BookingListCard,
  args:{
    form:"From",
    destination:"Destination",
    DepartureDate:"2023/08/13",
    price:"900",
    image:image.Magf,
    passangerCount:"12",
    DepartureTime:"GMT+5.30  2:50 a.m"
}
};

export default BookingListCardMeta;

type BookingListCardStory = ComponentStory<typeof BookingListCard>;

export const BasicBookingListCard: BookingListCardStory = (args) => <BookingListCard {...args}  />;

