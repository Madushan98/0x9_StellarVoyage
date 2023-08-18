import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { PlanetCard } from "./PlanetCard";

const PlanetCardMeta: ComponentMeta<typeof PlanetCard> = {
  title: "PlanetCar",
  component: PlanetCard,
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default PlanetCardMeta;

type PlanetsCardStory = ComponentStory<typeof PlanetCard>;

export const MianPlanetCard: PlanetsCardStory = (args) => <PlanetCard />;

