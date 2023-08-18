import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { RoundButton } from "./RoundButton";
import { RoundButtonType } from "../../Models/Button";


const RoundButtonMeta: ComponentMeta<typeof RoundButton> = {
  title: "RoundButton",
  component: RoundButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default RoundButtonMeta;

type RoundButtonStory = ComponentStory<typeof RoundButton>;

export const Active: RoundButtonStory = (args) => <RoundButton {...args} type={RoundButtonType.Active} />;
export const Deactive: RoundButtonStory = (args) => <RoundButton {...args} type={RoundButtonType.Deactive} />;

