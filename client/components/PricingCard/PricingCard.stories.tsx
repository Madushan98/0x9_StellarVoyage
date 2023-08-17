import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import icon from "../../config/icon"
import { PricingCard } from "./PricingCard";

const MyButtonMeta: ComponentMeta<typeof PricingCard> = {
  title: "PlanetCar",
  component: PricingCard,
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

type MyButtonStory = ComponentStory<typeof PricingCard>;

export const MianPlanetCard: MyButtonStory = (args) => <PricingCard {...args}  />;

