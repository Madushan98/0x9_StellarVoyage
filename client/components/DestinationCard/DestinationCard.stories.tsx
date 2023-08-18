import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { DestinationCard } from "./DestinationCard";


const DestinationCardMeta: ComponentMeta<typeof DestinationCard> = {
  title: "DestinationCard",
  component: DestinationCard,
  args: {
    name: "Aurora Glades on Triton",
    planet: "Neptune",
    culture: "Immerse yourself in the mysteries of Neptune's moon and its dynamic geysers.",
    touristAttractions: "Witness the stunning auroras lighting up the icy landscape.",
    climate: "Extreme cold with an atmosphere containing nitrogen and traces of methane."
    },
};

export default DestinationCardMeta;

type DestinationCardStory = ComponentStory<typeof DestinationCard>;

export const MainDestinationCard: DestinationCardStory = (args) => <DestinationCard {...args}  />;

