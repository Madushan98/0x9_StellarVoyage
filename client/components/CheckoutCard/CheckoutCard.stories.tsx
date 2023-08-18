import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import icon from "../../config/icon"
import { CheckoutCard } from "./CheckoutCard";

const MyButtonMeta: ComponentMeta<typeof CheckoutCard> = {
  title: "CheckoutCard",
  component: CheckoutCard,
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

type MyButtonStory = ComponentStory<typeof CheckoutCard>;

export const BasicCheckoutCard: MyButtonStory = (args) => <CheckoutCard   />;

