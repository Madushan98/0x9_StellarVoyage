import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import icon from "../../config/icon"
import { PlanetCard } from "./PlanetCard";

const MyButtonMeta: ComponentMeta<typeof PlanetCard> = {
  title: "PlanetCar",
  component: PlanetCard,
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

type MyButtonStory = ComponentStory<typeof PlanetCard>;

export const MianPlanetCard: MyButtonStory = (args) => <PlanetCard {...args}  />;

