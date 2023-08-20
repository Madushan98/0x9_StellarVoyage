import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { PayNowBtn } from "./PayNowBtn";

const PayNowBtnMeta: ComponentMeta<typeof PayNowBtn> = {
  title: "PayNowBtn",
  component: PayNowBtn,
  args: {
    text: "Pay Now",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default PayNowBtnMeta;

type MyBtnStory = ComponentStory<typeof PayNowBtn>;

export const Basic: MyBtnStory = (args) => <PayNowBtn {...args} />;
