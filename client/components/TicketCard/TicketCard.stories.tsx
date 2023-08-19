import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TicketCard, { TicketCardProps } from "./TicketCard"; // Make sure to adjust the path if necessary

export default {
  title: "Components/TicketCard",
  component: TicketCard,
} as Meta;

const Template: Story<TicketCardProps> = (args) => <TicketCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSource: require("../../assets/Icons/Ship.png"), // Adjust the path to your image source
  imageText: "Teleport",
  arrivalTime: "2023/08/12 6.50 a.m.",
  departureTime: "2023/08/12 6.30 a.m.",
  price: "9999",
};
