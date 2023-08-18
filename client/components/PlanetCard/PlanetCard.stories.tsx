import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { PlanetCard } from "./PlanetCard";

const MyButtonMeta: ComponentMeta<typeof PlanetCard> = {
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

export default MyButtonMeta;

type PlanetsCardStory = ComponentStory<typeof PlanetCard>;

export const MianPlanetCard: PlanetsCardStory = (args) => <PlanetCard />;

